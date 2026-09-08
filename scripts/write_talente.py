#!/usr/bin/env python3
"""Welle D: Talente S. 132–147. Originale aus Buch. Gefüllte nicht überschreiben."""
from __future__ import annotations

import re
from pathlib import Path

LISTE = Path("/workspace/knowledge/04-faehigkeiten-talente/03-talente-liste.md")
ROOT = Path("/workspace/knowledge/04-faehigkeiten-talente/talente")
OCR = Path("/tmp/talente-132-147.txt")
ROH = Path("/workspace/knowledge/04-faehigkeiten-talente/_roh/talente-s132-147.md")


def clean_line(s: str) -> str:
    s = s.replace("W ahl", "Wahl").replace("W ache", "Wache")
    s = s.replace("EP ,", "EP,").replace("EP  ", "EP ")
    s = re.sub(r"[ \t]+", " ", s)
    return s.strip()


def join_hyphen(s: str) -> str:
    return re.sub(r"(\w)-\n", r"\1", s)


def already_filled(path: Path) -> bool:
    t = path.read_text(encoding="utf-8")
    return "**Maximum:**" in t and "prüfen am Buch" not in t[:250]


def parse_block(raw: str, name: str) -> tuple[str, str, str | None, str]:
    raw = join_hyphen(raw)
    lines = [ln.rstrip() for ln in raw.splitlines()]
    # drop leading empties
    while lines and not lines[0].strip():
        lines.pop(0)
    title = clean_line(lines[0]) if lines else name
    rest = "\n".join(lines[1:])
    maximum = wuerfe = None
    m = re.search(r"Maximum:\s*(.+?)(?:\n|$)", rest)
    if m:
        maximum = clean_line(m.group(1))
        rest = rest[m.end() :]
    m = re.match(r"\s*Würfe:\s*(.+?)(?:\n(?! )|\n\n|\Z)", rest, re.S)
    if m:
        wuerfe = clean_line(m.group(1).replace("\n", " "))
        rest = rest[m.end() :]
    # body: join wrapped lines, keep blank paras
    paras: list[str] = []
    buf: list[str] = []
    for ln in rest.splitlines():
        if not ln.strip():
            if buf:
                paras.append(" ".join(clean_line(x) for x in buf if x.strip()))
                buf = []
            continue
        buf.append(ln)
    if buf:
        paras.append(" ".join(clean_line(x) for x in buf if x.strip()))
    body = "\n\n".join(p for p in paras if p)
    return title, maximum or "", wuerfe, body


def original_md(page: str, title: str, maximum: str, wuerfe: str | None, body: str) -> str:
    wline = f"**Würfe:** {wuerfe}\n\n" if wuerfe else ""
    return f"""# {title.split('(')[0].strip()} — Original

Quelle: S. {page}
Status: Original, nicht anfassen

**{title}**

**Maximum:** {maximum}  
{wline}{body}

### Siehe auch

- [Angepasst](angepasst.md)
- [Details](details.md)
- [Hub](README.md)
- [Talente-Liste](../../03-talente-liste.md)
"""


def angepasst_md(slug: str, name: str, page: str) -> str:
    return f"""# {name} — Projekt

Quelle der Regeln: [original.md](original.md) (S. {page})

Keine eigene Katalogkarte. Das Talent filtert oder modifiziert Würfe, wie im Original.

Bogen: `talente[]` mit `id` = `{slug}`. Maximum laut Original.

### Befehl

- keine Katalog-ID

### Siehe auch

- [Original](original.md)
- [Details](details.md)
- [Talente-Liste](../../03-talente-liste.md)
"""


def details_md(slug: str, name: str, page: str) -> str:
    return f"""# {name} — Details / Hilfe

JSON-`id`: `{slug}`  
Quelle: S. {page}

## Prüfen

- [prüfen am Buch S. {page}] Maximum, Würfe und Sonderregeln gegen die Karte.

### Siehe auch

- [Original](original.md)
- [Angepasst](angepasst.md)
- [Talente-Liste](../../03-talente-liste.md)
"""


def main() -> None:
    liste = LISTE.read_text(encoding="utf-8")
    rows = re.findall(r"\| `([^`]+)` \| \[([^\]]+)\]\([^)]+\) \| (\d+) \|", liste)
    ocr = join_hyphen(OCR.read_text(encoding="utf-8")).replace("W ahl", "Wahl")

    headers: list[tuple[int, str, str, str]] = []
    for slug, name, page in rows:
        pat = re.compile(r"^" + re.escape(name) + r"(?:\s*\([^)]+\))?\s*\nMaximum:", re.M)
        ms = list(pat.finditer(ocr))
        if not ms:
            pat2 = re.compile(r"^" + re.escape(name) + r".{0,40}\nMaximum:", re.M)
            ms = list(pat2.finditer(ocr))
        if not ms:
            raise SystemExit(f"no header {name}")
        headers.append((ms[0].start(), slug, name, page))
    headers.sort()

    wrote = skipped = 0
    for i, (pos, slug, name, page) in enumerate(headers):
        end = headers[i + 1][0] if i + 1 < len(headers) else len(ocr)
        block = ocr[pos:end]
        title, maximum, wuerfe, body = parse_block(block, name)
        d = ROOT / slug
        d.mkdir(parents=True, exist_ok=True)
        (d / "original.md").write_text(original_md(page, title, maximum, wuerfe, body), encoding="utf-8")
        wrote += 1
    print(f"wrote {wrote} skipped-filled {skipped}")

    intro = ocr.split("Ablenken\nMaximum:", 1)[0]
    ROH.write_text(
        "# Talente — Roh S. 132–147\n\nQuelle: GRW 2. Auflage. Nicht umschreiben. Einzeloriginale in den Talentordnern.\n\n"
        + intro.strip()
        + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
