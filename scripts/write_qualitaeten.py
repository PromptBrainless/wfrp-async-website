#!/usr/bin/env python3
"""Qualitäten / Makel S. 297–299."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("/workspace/knowledge/08-einkauf/qualitaeten")
OCR = Path("/tmp/qualitaeten-297-299.txt")

NAMES = [
    ("ablenkend", "Ablenkend", "297", False),
    ("akkurat", "Akkurat", "297", False),
    ("betaubend", "Betäubend", "297", False),
    ("defensiv", "Defensiv", "297", False),
    ("durchbohrend", "Durchbohrend", "298", False),
    ("durchschlagend", "Durchschlagend", "298", False),
    ("fesselnd", "Fesselnd", "298", False),
    ("klingenfaenger", "Klingenfänger", "298", False),
    ("pistole", "Pistole", "298", False),
    ("praezise", "Präzise", "298", False),
    ("radius", "Radius", "298", False),
    ("repetierend", "Repetierend", "298", False),
    ("ruestungsbrechend", "Rüstungsbrechend", "298", False),
    ("schiesspulver", "Schießpulver", "298", False),
    ("schild", "Schild", "298", False),
    ("schnell", "Schnell", "298", False),
    ("umwickelnd", "Umwickelnd", "298", False),
    ("unzerbrechlich", "Unzerbrechlich", "298", False),
    ("verwundend", "Verwundend", "298", False),
    ("wuchtig", "Wuchtig", "298", False),
    ("ermuedend", "Ermüdend", "299", True),
    ("gefaehrlich", "Gefährlich", "299", True),
    ("langsam", "Langsam", "299", True),
    ("nachladen", "Nachladen", "299", True),
    ("stumpf", "Stumpf", "299", True),
    ("unpraezise", "Unpräzise", "299", True),
]


def join_hyphen(s: str) -> str:
    return re.sub(r"(\w)-\n", r"\1", s)


def clean(s: str) -> str:
    s = s.replace("W ahl", "Wahl").replace("T echnicus", "Technicus")
    s = re.sub(r"[ \t]+", " ", s)
    return s.strip()


def paras(text: str) -> str:
    buf: list[str] = []
    out: list[str] = []
    for ln in text.splitlines():
        if not ln.strip():
            if buf:
                out.append(" ".join(clean(x) for x in buf))
                buf = []
            continue
        buf.append(ln)
    if buf:
        out.append(" ".join(clean(x) for x in buf))
    return "\n\n".join(p for p in out if p)


def main() -> None:
    ocr = join_hyphen(OCR.read_text(encoding="utf-8"))
    headers = []
    for slug, name, page, makel in NAMES:
        pat = re.compile(r"^" + re.escape(name) + r"(?:\s*\([^)]+\))?\s*$", re.M)
        ms = list(pat.finditer(ocr))
        if not ms:
            raise SystemExit(f"missing {name}")
        headers.append((ms[0].start(), slug, name, page, makel))
    headers.sort()
    for i, (pos, slug, name, page, makel) in enumerate(headers):
        end = headers[i + 1][0] if i + 1 < len(headers) else ocr.find("RÜSTUNG")
        if end < pos:
            end = len(ocr)
        block = ocr[pos:end]
        lines = block.splitlines()
        title = clean(lines[0])
        body = paras("\n".join(lines[1:]))
        # cut trailing page furniture
        for cut in ("XI", "EINKAUFSFÜHRER", "waffen-Makel", "REICHWEITEN"):
            if f"\n{cut}" in body:
                body = body.split(f"\n{cut}", 1)[0].strip()
        kind = "Makel" if makel else "Qualität"
        md = f"""# {name} — Original

Quelle: S. {page}
Status: Original, nicht anfassen

**{title}** ({kind.lower()})

{body}

### Siehe auch

- [Angepasst](angepasst.md)
- [Details](details.md)
- [Hub](README.md)
- [Waffen-Qualitäten](../README.md)
"""
        d = ROOT / slug
        (d / "original.md").write_text(md, encoding="utf-8")
        ang = d / "angepasst.md"
        if "Gerüst" in ang.read_text(encoding="utf-8"):
            ang.write_text(
                f"""# {name} — Projekt

Quelle der Regeln: [original.md](original.md) (S. {page})

Waffen-{kind}. Keine Katalogkarte. Filtert Schaden, Würfe oder Zustände laut Original.

### Befehl

- keine Katalog-ID

### Siehe auch

- [Original](original.md)
- [Details](details.md)
- [Waffen-Qualitäten](../README.md)
- [Waffen und Rüstung](../../02-waffen-ruestung.md)
""",
                encoding="utf-8",
            )
        det = d / "details.md"
        dt = det.read_text(encoding="utf-8")
        if "Gerüst" in dt or "Beispiele nach" in dt:
            det.write_text(
                f"""# {name} — Details / Hilfe

JSON-`id`: `{slug}`  
Quelle: S. {page}

## Prüfen

- [prüfen am Buch S. {page}] Wortlaut gegen die Karte.

### Siehe auch

- [Original](original.md)
- [Angepasst](angepasst.md)
- [Waffen-Qualitäten](../README.md)
""",
                encoding="utf-8",
            )
        print("ok", slug)
    (ROOT / "README.md").write_text(
        """# Waffen-Qualitäten und Makel

Quelle: S. 297–299

20 Qualitäten, 6 Makel. Originale gefüllt.

- [Waffen und Rüstung](../02-waffen-ruestung.md)
- [Register](../../00-REGISTER.md)
""",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
