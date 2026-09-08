#!/usr/bin/env python3
"""Qualitäts-Gate für knowledge/: Drei-Dateien-Mechanik, Links, Original sauber."""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path


def find_root() -> Path:
    here = Path(__file__).resolve()
    for p in [here.parent, *here.parents]:
        if (p / "knowledge" / "00-INDEX.md").exists():
            return p
    cwd = Path.cwd()
    if (cwd / "knowledge" / "00-INDEX.md").exists():
        return cwd
    return cwd


ROOT = find_root()
KNOW = ROOT / "knowledge"
BEFEHLE = KNOW / "10-system" / "06-befehle.md"

ORIGINAL_FORBIDDEN = re.compile(
    r"(Die Frist|Aktionskatalog|Befehlsregister|\bEngine\b)", re.I
)
HAS_QUELLE = re.compile(r"Quelle:.*S\.", re.I)
HAS_STATUS = re.compile(r"Status:\s*Original,\s*nicht anfassen", re.I)
MD_LINK = re.compile(r"\[[^\]]*\]\(([^)]+)\)")
CMD_TICK = re.compile(r"`([a-z][a-z0-9_]*)`")
TODO = re.compile(r"TODO|Platzhalter|📝")
FORBIDDEN_STAGED = re.compile(
    r"(?i)(\.(pdf|webp|png|jpe?g)$|Grundregelwerk|Warhammer_Fantasy|^attachments/)",
)

MECHANIC_GLOBS = [
    "04-faehigkeiten-talente/faehigkeiten/*/",
    "04-faehigkeiten-talente/talente/*/",
    "02-charaktere/voelker/*/",
    "02-charaktere/attribute/*/",
    "03-klassen-karrieren/*/*/",
    "05-regeln/zustaende/*/",
    "08-einkauf/waffen/*/",
    "08-einkauf/qualitaeten/*/",
]

REGISTER = KNOW / "data" / "register.json"

SEE_MUST = {
    "skill": re.compile(r"attribute/"),
    "talent": re.compile(r"03-talente-liste"),
    "career": re.compile(r"karrieren-liste"),
    "condition": re.compile(r"05-zustaende"),
    "qualitaet": re.compile(r"02-waffen-ruestung"),
    "makel": re.compile(r"02-waffen-ruestung"),
    "attr": re.compile(r"04-attribute"),
    "volk": re.compile(r"02-voelker-kurz|04-attribute"),
}


class Report:
    def __init__(self) -> None:
        self.errors: list[str] = []
        self.warnings: list[str] = []

    def err(self, msg: str) -> None:
        self.errors.append(msg)

    def warn(self, msg: str) -> None:
        self.warnings.append(msg)


def mechanic_dirs(limit: Path | None) -> list[Path]:
    found: list[Path] = []
    if limit and limit.is_dir() and (limit / "original.md").exists():
        return [limit]
    for g in MECHANIC_GLOBS:
        for p in KNOW.glob(g):
            if p.is_dir() and not p.name.startswith("_"):
                found.append(p)
    for p in KNOW.rglob("original.md"):
        found.append(p.parent)
    uniq = []
    seen = set()
    for p in found:
        r = p.resolve()
        if r not in seen:
            seen.add(r)
            uniq.append(p)
    if limit:
        uniq = [
            p
            for p in uniq
            if p == limit or limit in p.parents or str(p).startswith(str(limit))
        ]
    return sorted(uniq)


def check_folder(d: Path, r: Report) -> None:
    rel = d.relative_to(KNOW)
    need = ["README.md", "original.md", "angepasst.md", "details.md"]
    for n in need:
        if not (d / n).exists():
            r.err(f"{rel}: fehlt {n}")
            return
    orig = (d / "original.md").read_text(encoding="utf-8")
    ang = (d / "angepasst.md").read_text(encoding="utf-8")
    det = (d / "details.md").read_text(encoding="utf-8")
    readme = (d / "README.md").read_text(encoding="utf-8")

    if not HAS_STATUS.search(orig):
        r.err(f"{rel}/original.md: Status-Zeile fehlt")
    if not HAS_QUELLE.search(orig):
        r.err(f"{rel}/original.md: Quelle: S. fehlt")
    if "### Befehl" in orig:
        r.err(f"{rel}/original.md: enthält ### Befehl (gehört nach angepasst)")
    if ORIGINAL_FORBIDDEN.search(orig):
        r.err(f"{rel}/original.md: Projektwörter im Original")
    if len(orig.strip()) < 200 and "[prüfen am Buch" not in orig:
        r.err(f"{rel}/original.md: zu kurz, kein [prüfen]")
    if "### Siehe auch" not in orig:
        r.err(f"{rel}/original.md: Siehe auch fehlt")

    if "### Befehl" not in ang:
        r.err(f"{rel}/angepasst.md: ### Befehl fehlt")
    if "original.md" not in ang:
        r.err(f"{rel}/angepasst.md: Link auf original.md fehlt")
    if "### Siehe auch" not in ang:
        r.err(f"{rel}/angepasst.md: Siehe auch fehlt")
    if len(ang) > len(orig) * 1.4 and len(orig) > 400:
        r.warn(f"{rel}/angepasst.md: länger als Original — Buchtext kopiert?")

    if "### Siehe auch" not in det:
        r.err(f"{rel}/details.md: Siehe auch fehlt")
    if "original.md" not in readme or "angepasst.md" not in readme or "details.md" not in readme:
        r.err(f"{rel}/README.md: Hub-Links unvollständig")

    for name, text in (
        ("original.md", orig),
        ("angepasst.md", ang),
        ("details.md", det),
        ("README.md", readme),
    ):
        if TODO.search(text):
            r.warn(f"{rel}/{name}: TODO/Platzhalter")


def check_links(path: Path, r: Report) -> None:
    text = path.read_text(encoding="utf-8")
    for href in MD_LINK.findall(text):
        if href.startswith(("http://", "https://", "mailto:", "#")):
            continue
        href = href.split("#")[0].split(" ")[0]
        if not href:
            continue
        target = (path.parent / href).resolve()
        try:
            target.relative_to(KNOW.resolve())
        except ValueError:
            if not target.exists():
                r.err(f"{path.relative_to(ROOT)}: toter Link {href}")
            continue
        if not target.exists():
            r.err(f"{path.relative_to(ROOT)}: toter Link {href}")


def befehle_ids() -> set[str]:
    if not BEFEHLE.exists():
        return set()
    text = BEFEHLE.read_text(encoding="utf-8")
    ids = set()
    for line in text.splitlines():
        m = re.match(r"\|\s*`([a-z][a-z0-9_]*)`\s*\|", line)
        if m:
            ids.add(m.group(1))
    return ids


def check_commands(d: Path, known: set[str], r: Report) -> None:
    ang = (d / "angepasst.md").read_text(encoding="utf-8")
    if "### Befehl" not in ang:
        return
    block = ang.split("### Befehl", 1)[1].split("### ", 1)[0]
    if re.search(r"^-\s*—", block, re.M) or "keine Katalog-ID" in block:
        return
    for cid in CMD_TICK.findall(block):
        if cid in {"h", "b", "f", "bh", "id"}:
            continue
        if known and cid not in known:
            r.err(f"{d.relative_to(KNOW)}: Befehl `{cid}` fehlt im Befehlsregister")


def check_binaries(r: Report) -> None:
    for p in KNOW.rglob("*"):
        if p.suffix.lower() in {".pdf", ".webp", ".png", ".jpg", ".jpeg"}:
            r.err(f"Medium im knowledge/: {p.relative_to(ROOT)}")


def check_register(r: Report) -> None:
    if not REGISTER.exists():
        r.err("data/register.json fehlt")
        return
    data = json.loads(REGISTER.read_text(encoding="utf-8"))
    seen: dict[tuple[str, str], str] = {}
    for it in data.get("items", []):
        typ, iid = it.get("typ", ""), it.get("id", "")
        if not typ or not iid:
            r.err("register: Eintrag ohne typ/id")
            continue
        key = (typ, iid)
        if key in seen:
            r.err(f"register: doppelte id {typ}/{iid}")
        seen[key] = it.get("path", "")
        path = it.get("path") or ""
        if not path or path.endswith(".md"):
            continue
        folder = KNOW / path
        if not folder.is_dir():
            r.err(f"register {typ}/{iid}: Ordner fehlt {path}")
            continue
        ang = folder / "angepasst.md"
        pat = SEE_MUST.get(typ)
        if pat and ang.exists() and not pat.search(ang.read_text(encoding="utf-8")):
            r.err(f"{path}/angepasst.md: Siehe-auch-Pflicht ({typ}) fehlt")


def check_bogen(r: Report) -> None:
    p = KNOW / "data" / "bogen.json"
    if not p.exists():
        r.err("data/bogen.json fehlt")
        return
    keys = json.loads(p.read_text(encoding="utf-8")).get("keys", {})
    for need in ("werte", "boni", "ressourcen"):
        if need not in keys:
            r.err(f"bogen.json: keys.{need} fehlt")


def check_staged(r: Report) -> None:
    try:
        out = subprocess.check_output(
            ["git", "diff", "--cached", "--name-only", "-z"],
            cwd=ROOT,
        )
    except (subprocess.CalledProcessError, FileNotFoundError):
        r.warn("git index nicht lesbar, --staged übersprungen")
        return
    names = [n.decode("utf-8", "replace") for n in out.split(b"\0") if n]
    for n in names:
        if n.startswith("public/images/") or n.startswith("public/maps/") or n.startswith("public/tokens/"):
            continue
        if FORBIDDEN_STAGED.search(n):
            r.err(f"staged verboten (Buch/Scan): {n}")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("path", nargs="?", help="optional: ein Mechanik-Ordner")
    ap.add_argument(
        "--staged",
        action="store_true",
        help="zusätzlich den Git-Index auf Buchdateien prüfen",
    )
    args = ap.parse_args()
    limit = Path(args.path).resolve() if args.path else None
    if limit and not limit.exists():
        print(f"FEHLER: {limit} existiert nicht", file=sys.stderr)
        return 1

    r = Report()
    dirs = mechanic_dirs(limit)
    known = befehle_ids()
    for d in dirs:
        check_folder(d, r)
        if (d / "angepasst.md").exists():
            check_commands(d, known, r)
        for n in ("README.md", "original.md", "angepasst.md", "details.md"):
            f = d / n
            if f.exists():
                check_links(f, r)

    if not limit:
        check_binaries(r)
        idx = KNOW / "00-INDEX.md"
        if not idx.exists():
            r.err("00-INDEX.md fehlt")
        else:
            check_links(idx, r)
        if not BEFEHLE.exists():
            r.err("Befehlsregister fehlt")
        check_register(r)
        check_bogen(r)

    if args.staged:
        check_staged(r)

    print(f"Ordner geprüft: {len(dirs)}")
    if r.warnings:
        print(f"\nWarnungen ({len(r.warnings)}):")
        for w in r.warnings:
            print(f"  W {w}")
    if r.errors:
        print(f"\nFehler ({len(r.errors)}):")
        for e in r.errors:
            print(f"  E {e}")
        print("\nNICHT committen.")
        return 1
    print("\nGate ok.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
