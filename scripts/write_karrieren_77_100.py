#!/usr/bin/env python3
"""Welle B: Freisassen + restliche Gesetzlose + Höflinge S. 77–100. Halunke bleibt."""
from __future__ import annotations

import json
import re
from pathlib import Path

OCR = Path("/tmp/karrieren-77-100.txt")
KLASSEN_ROOT = Path("/workspace/knowledge/03-klassen-karrieren")
DATA = Path("/workspace/knowledge/data/careers.json")

PAGE_SLUG = {
    77: ("bote", "Bote", "freisassen"),
    78: ("flagellant", "Flagellant", "freisassen"),
    79: ("hausierer", "Hausierer", "freisassen"),
    80: ("hexenjaeger", "Hexenjäger", "freisassen"),
    81: ("kopfgeldjaeger", "Kopfgeldjäger", "freisassen"),
    82: ("kutscher", "Kutscher", "freisassen"),
    83: ("schausteller", "Schausteller", "freisassen"),
    84: ("strassenwaechter", "Straßenwächter", "freisassen"),
    85: ("bandit", "Bandit", "gesetzlose"),
    86: ("dieb", "Dieb", "gesetzlose"),
    87: ("grabraeuber", "Grabräuber", "gesetzlose"),
    89: ("hehler", "Hehler", "gesetzlose"),
    90: ("hexer", "Hexer", "gesetzlose"),
    91: ("kuppler", "Kuppler", "gesetzlose"),
    92: ("scharlatan", "Scharlatan", "gesetzlose"),
    93: ("adeliger", "Adeliger", "hoeflinge"),
    94: ("berater", "Berater", "hoeflinge"),
    95: ("diener", "Diener", "hoeflinge"),
    96: ("duellist", "Duellist", "hoeflinge"),
    97: ("gesandter", "Gesandter", "hoeflinge"),
    98: ("kuenstler", "Künstler", "hoeflinge"),
    99: ("meier", "Meier", "hoeflinge"),
    100: ("spion", "Spion", "hoeflinge"),
}

SCHEMA = {
    77: ["", "", "", "", "+", "+", "+", "Totenkopf", "⚔", "+"],
    78: ["+", "", "+", "+", "Krone", "", "", "", "⚔", "Totenkopf"],
    79: ["", "", "", "", "Totenkopf", "+", "+", "+", "⚔", "+"],
    80: ["+", "⚔", "+", "", "+", "", "", "", "+", "Totenkopf"],
    81: ["+", "⚔", "+", "", "+", "+", "Totenkopf", "", "", ""],
    82: ["⚔", "", "+", "", "+", "+", "+", "", "Totenkopf", ""],
    83: ["", "", "", "", "+", "⚔", "+", "+", "Totenkopf", "+"],
    84: ["+", "", "Totenkopf", "+", "⚔", "", "+", "", "", "+"],
    85: ["+", "", "+", "", "+", "+", "⚔", "", "", "Totenkopf"],
    86: ["", "", "", "", "+", "+", "+", "⚔", "Totenkopf", "+"],
    87: ["", "", "+", "+", "+", "", "+", "⚔", "Totenkopf", ""],
    89: ["", "", "", "", "+", "Totenkopf", "+", "+", "⚔", "+"],
    90: ["", "", "", "", "+", "+", "+", "+", "Totenkopf", "⚔"],
    91: ["", "", "", "", "⚔", "+", "+", "Totenkopf", "+", "+"],
    92: ["", "", "", "", "+", "Totenkopf", "⚔", "+", "+", "+"],
    93: ["", "⚔", "", "", "+", "", "+", "+", "Totenkopf", "+"],
    94: ["", "", "", "Totenkopf", "⚔", "", "+", "+", "+", "+"],
    95: ["", "", "", "", "+", "+", "+", "⚔", "+", "+"],
    96: ["+", "⚔", "", "", "+", "+", "+", "", "", "Totenkopf"],
    97: ["", "", "", "+", "+", "", "Totenkopf", "+", "⚔", "+"],
    98: ["", "", "", "", "+", "⚔", "+", "+", "+", "Totenkopf"],
    99: ["+", "", "+", "", "+", "⚔", "+", "+", "", ""],
    100: ["", "", "", "", "+", "+", "+", "⚔", "+", "Totenkopf"],
}

GENITIV = {
    "Bote": "Boten",
    "Flagellant": "Flagellanten",
    "Hausierer": "Hausierers",
    "Hexenjäger": "Hexenjägers",
    "Kopfgeldjäger": "Kopfgeldjägers",
    "Kutscher": "Kutschers",
    "Schausteller": "Schaustellers",
    "Straßenwächter": "Straßenwächters",
    "Bandit": "Banditen",
    "Dieb": "Diebs",
    "Grabräuber": "Grabräubers",
    "Hehler": "Hehlers",
    "Hexer": "Hexers",
    "Kuppler": "Kupplers",
    "Scharlatan": "Scharlatans",
    "Adeliger": "Adeligen",
    "Berater": "Beraters",
    "Diener": "Dieners",
    "Duellist": "Duellisten",
    "Gesandter": "Gesandten",
    "Künstler": "Künstlers",
    "Meier": "Meiers",
    "Spion": "Spions",
}

TIER = {"Messing": "messing", "Silber": "silber", "Gold": "gold"}
SYM = {1: "+", 2: "⚔", 3: "Totenkopf", 4: "Krone"}


def clean_space(s: str) -> str:
    s = s.replace("W ahl", "Wahl").replace("W ache", "Wache")
    s = s.replace("W ahrnehmung", "Wahrnehmung").replace("T echnicus", "Technicus")
    s = s.replace("Zunder kästchen", "Zunderkästchen")
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r" *\n *", "\n", s)
    return s.strip()


def join_hyphen(s: str) -> str:
    return re.sub(r"(\w)-\n", r"\1", s)


def parse_pages(text: str) -> dict[int, str]:
    blocks = re.split(r"===== BUCH S\. (\d+).*?=====\n", text)
    pages: dict[int, str] = {}
    for i in range(1, len(blocks), 2):
        pages[int(blocks[i])] = blocks[i + 1]
    return pages


def extract_voelker(body: str) -> str:
    for ln in body.splitlines():
        ln = ln.strip()
        if any(x in ln for x in ("Mensch", "Zwerg", "Elf", "Halbling")) and len(ln) < 80:
            return ln
    return ""


def extract_prose(body: str) -> str:
    body = join_hyphen(body)
    # drop header lines until the tagline (Du ...)
    lines = body.splitlines()
    start = 0
    for i, ln in enumerate(lines):
        if ln.strip().startswith("Du ") or ln.strip().startswith("Gerade "):
            start = i
            break
    rest = "\n".join(lines[start:])
    rest = re.split(r"\nKARRIERESCHEMA", rest, maxsplit=1)[0]
    # collapse wrapped lines into paragraphs: blank line = para
    paras = []
    buf = []
    for ln in rest.splitlines():
        if not ln.strip():
            if buf:
                paras.append(" ".join(buf))
                buf = []
            continue
        buf.append(ln.strip())
    if buf:
        paras.append(" ".join(buf))
    # quotes: keep as paragraphs
    out = []
    for p in paras:
        p = clean_space(p)
        if p.startswith("„") or p.startswith("–"):
            out.append(p)
        else:
            out.append(p)
    # format quotes: if paragraph is only attribution, keep
    text = "\n\n".join(out)
    text = re.sub(r"\n\n– ", "  \n– ", text)
    return text.strip()


def extract_stufen(body: str) -> list[tuple]:
    body = join_hyphen(body)
    m = re.search(r"kaRRieReweg\n(.*)", body, flags=re.S | re.I)
    if not m:
        raise ValueError("no careerweg")
    chunk = m.group(1)
    chunk = chunk.replace("W ahl", "Wahl").replace("W ahrnehmung", "Wahrnehmung")
    chunk = chunk.replace("Zunder kästchen", "Zunderkästchen")
    # Seneschall– Gold 1 missing space
    chunk = re.sub(r"–\s*", " – ", chunk)
    header_re = re.compile(
        r"^(?:h )?(?P<name>[^\n]+?) – (?P<tier>Messing|Silber|Gold) (?P<rang>\d+)\s*$",
        re.M,
    )
    headers = list(header_re.finditer(chunk))
    found = []
    for i, h in enumerate(headers):
        start = h.end()
        end = headers[i + 1].start() if i + 1 < len(headers) else len(chunk)
        block = chunk[start:end]
        faeh = tal = aus = ""
        fm = re.search(r"Fähigkeiten:\s*(.*?)\s*Talente:\s*(.*?)\s*Ausrüstung:\s*(.*)", block, re.S)
        if fm:
            faeh = clean_space(fm.group(1).replace("\n", " "))
            tal = clean_space(fm.group(2).replace("\n", " "))
            aus = clean_space(fm.group(3).replace("\n", " "))
        name = clean_space(h.group("name")).lstrip("h ").strip()
        nr = i + 1
        found.append(
            (
                nr,
                name,
                TIER[h.group("tier")],
                int(h.group("rang")),
                SYM.get(nr, "+"),
                faeh.rstrip(" ."),
                tal.rstrip(" ."),
                aus.rstrip(" ."),
            )
        )
    return found



def original_md(page: int, slug: str, name: str, voelker: str, prose: str, stufen: list) -> str:
    attrs = SCHEMA[page]
    header = ["KG", "BF", "ST", "WI", "I", "GW", "GS", "IN", "WK", "CH"]
    stages = []
    for nr, titel, tier, rang, sym, faeh, tal, aus in stufen:
        mark = SYM[nr]
        tier_l = {"messing": "Messing", "silber": "Silber", "gold": "Gold"}[tier]
        stages.append(
            f"### {mark} {titel} – {tier_l} {rang}\n\n"
            f"**Fähigkeiten:** {faeh}  \n"
            f"**Talente:** {tal}  \n"
            f"**Ausrüstung:** {aus}\n"
        )
    gen = GENITIV.get(name, name + "s")
    return f"""# {name} — Original

Quelle: S. {page}
Status: Original, nicht anfassen

**{name}**  
{voelker}

{prose}

## Karriereschema des {gen}

Symbole wie im Buch: **+** Stufe 1 · **⚔** Stufe 2 · Totenkopf Stufe 3 · Krone Stufe 4.

| {' | '.join(header)} |
|----|----|----|----|----|----|----|----|----|----|
| {' | '.join(attrs)} |

## Karriereweg

{''.join(stages)}
### Siehe auch

- [Angepasst](angepasst.md)
- [Details](details.md)
- [Hub](README.md)
"""


def angepasst_md(page: int, slug: str, name: str, klasse: str, stufen: list) -> str:
    s1 = stufen[0]
    return f"""# {name} — Projekt

Quelle der Regeln: [original.md](original.md) (S. {page})

Keine Katalogkarte. Die Karriere filtert, welche Fähigkeiten und Talente der Charakter kennen darf.

Stufe 1: **{s1[1]}**, {s1[2].capitalize()} {s1[3]}. Bogen-Keys: `klasse` = `{klasse}`, `karriere` = `{slug}`, `karrierestufe` = 1.

### Befehl

- keine Katalog-ID

### Siehe auch

- [Original](original.md)
- [Details](details.md)
- [Hub](../README.md)
- [Karrieren-Liste](../../03-karrieren-liste.md)
- [Status](../../02-status-system.md)
"""


def details_md(page: int, slug: str, name: str, stufen: list) -> str:
    s1 = stufen[0]
    return f"""# {name} — Details / Hilfe

JSON-`id`: `{slug}`  
Quelle: S. {page} · [careers.json](../../../data/careers.json)

## Hilfe

- Stufe 1 heißt **{s1[1]}** ({s1[2].capitalize()} {s1[3]}).
- Schema-Symbole gegen die Karte S. {page} gehalten.

## Prüfen

- [prüfen am Buch S. {page}] Karriereschema-Symbole und Ausrüstungslisten gegen die Karte.

### Siehe auch

- [Original](original.md)
- [Angepasst](angepasst.md)
- [Hub](../README.md)
- [Karrieren-Liste](../../03-karrieren-liste.md)
"""


def talent_slugs(tal: str) -> list[str]:
    out = []
    for t in tal.split(","):
        t = t.split("(")[0].strip().lower()
        t = t.replace("&", "und").replace(" ", "_")
        t = t.replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss")
        if t:
            out.append(t)
    return out


def main() -> None:
    text = OCR.read_text(encoding="utf-8")
    pages = parse_pages(text)
    data = json.loads(DATA.read_text(encoding="utf-8"))
    by_id = {c["id"]: c for c in data["careers"]}
    done = []
    for page, (slug, name, klasse) in PAGE_SLUG.items():
        body = pages[page]
        voelker = extract_voelker(body)
        prose = extract_prose(body)
        stufen = extract_stufen(body)
        if len(stufen) != 4:
            raise SystemExit(f"{slug} S.{page}: {len(stufen)} Stufen { [s[1] for s in stufen] }")
        d = KLASSEN_ROOT / klasse / slug
        d.mkdir(parents=True, exist_ok=True)
        (d / "original.md").write_text(original_md(page, slug, name, voelker, prose, stufen), encoding="utf-8")
        (d / "angepasst.md").write_text(angepasst_md(page, slug, name, klasse, stufen), encoding="utf-8")
        (d / "details.md").write_text(details_md(page, slug, name, stufen), encoding="utf-8")
        c = by_id[slug]
        c["seite"] = page
        c["voelker"] = [v.strip().lower().replace("ö", "oe").replace("ä", "ae").replace("ü", "ue") for v in voelker.split(",")]
        # normalize species ids
        remap = {
            "halbling": "halbling",
            "hochelf": "hochelf",
            "mensch": "mensch",
            "waldelf": "waldelf",
            "zwerg": "zwerg",
        }
        vv = []
        for raw in voelker.split(","):
            k = raw.strip().lower()
            k = k.replace("ö", "oe")
            vv.append(k)
        c["voelker"] = vv
        c["original"] = f"03-klassen-karrieren/{klasse}/{slug}/original.md"
        c["stufen"] = [{"nr": nr, "name": titel, "tier": tier, "rang": rang} for nr, titel, tier, rang, *_ in stufen]
        c["stufen"][0]["talente"] = talent_slugs(stufen[0][6])
        done.append(f"{slug} {page} { [s[1] for s in stufen] }")
        print("ok", done[-1])

    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # hubs
    def hub(klasse: str, title: str, src: str, items: list[tuple[int, str, str]]) -> None:
        links = "\n".join(f"- [{n}]({s}/README.md) — S. {p}" for p, s, n in items)
        extra = ""
        if klasse == "gesetzlose":
            extra = "\n- [Halunke](halunke/README.md) — S. 88 (bereits Original)\n"
        (KLASSEN_ROOT / klasse / "README.md").write_text(
            f"""# {title}

Quelle: {src}

Klasse.

{links}{extra}
- [Klassen-Übersicht](../01-klassen-und-karrieren-uebersicht.md)
- [Karrieren-Liste](../03-karrieren-liste.md)
""",
            encoding="utf-8",
        )

    present = {k for _, (_, _, k) in PAGE_SLUG.items()}
    if "freisassen" in present:
        hub(
            "freisassen",
            "Freisassen",
            "S. 77–84",
            [(p, s, n) for p, (s, n, k) in PAGE_SLUG.items() if k == "freisassen"],
        )
    if "gesetzlose" in present:
        hub(
            "gesetzlose",
            "Gesetzlose",
            "S. 85–92",
            [(p, s, n) for p, (s, n, k) in PAGE_SLUG.items() if k == "gesetzlose"],
        )
    if "hoeflinge" in present:
        hub(
            "hoeflinge",
            "Höflinge",
            "S. 93–100",
            [(p, s, n) for p, (s, n, k) in PAGE_SLUG.items() if k == "hoeflinge"],
        )
    if "krieger" in present:
        hub(
            "krieger",
            "Krieger",
            "S. 101–108",
            [(p, s, n) for p, (s, n, k) in PAGE_SLUG.items() if k == "krieger"],
        )
    if "landvolk" in present:
        hub(
            "landvolk",
            "Landvolk",
            "S. 109–116",
            [(p, s, n) for p, (s, n, k) in PAGE_SLUG.items() if k == "landvolk"],
        )
    print("wrote", len(done))


if __name__ == "__main__":
    main()
