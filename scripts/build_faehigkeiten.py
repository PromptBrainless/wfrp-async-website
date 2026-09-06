#!/usr/bin/env python3
"""Lege 45 Fähigkeits-Ordner an: README, original, angepasst, details, Zeiger."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
SKILLS_JSON = ROOT / "knowledge/data/skills.json"
ROH = ROOT / "knowledge/04-faehigkeiten-talente/_roh/hauptliste-s118-131.md"
OUT = ROOT / "knowledge/04-faehigkeiten-talente/faehigkeiten"
LISTE = ROOT / "knowledge/04-faehigkeiten-talente/02-faehigkeiten-liste.md"

ATTR = {
    "CH": "Charisma",
    "GW": "Gewandtheit",
    "WI": "Widerstand",
    "WK": "Willenskraft",
    "ST": "Stärke",
    "I": "Initiative",
    "IN": "Intelligenz",
    "GS": "Geschicklichkeit",
    "KG": "Kampfgeschick",
    "BF": "Ballistische Fertigkeit",
}

BEFEHLE = {
    "wahrnehmung": [
        ("umschauen", "H", "standard", "Szene erkunden"),
    ],
    "intuition": [
        ("intuition", "H", "standard", "Einschätzen"),
    ],
    "charme": [
        ("reden", "H", "vergleich (Besonnenheit, außer empfänglich)", "Ansprechen / Verhandeln"),
    ],
    "feilschen": [
        ("feilschen", "H", "vergleich", "Handeln"),
        ("kaufen", "H", "auto, dann Feilschen", "Kaufen"),
    ],
    "bestechen": [
        ("bestechen", "H", "standard", "Bestechen"),
    ],
    "einschuechtern": [
        ("einschuechtern", "H", "vergleich (Besonnenheit)", "Einschüchtern"),
    ],
    "klatsch": [
        ("klatsch", "H", "standard", "Gerüchte"),
    ],
    "schleichen": [
        ("schleichen", "BH", "vergleich (Wahrnehmung)", "Schleichen"),
    ],
    "athletik": [
        ("sprinten", "H", "standard", "Sprinten"),
        ("fliehen", "B", "combat, freie Attacke", "Fliehen"),
    ],
    "ausweichen": [
        ("ausweichen", "F", "vergleich, keine eigene Handlung", "Ausweichen (Verteidigung)"),
        ("loesen", "H", "vergleich", "Aus Bindung lösen"),
        ("volle_abwehr", "H", "combat, +20 bis zum nächsten Zug", "In der Defensive"),
    ],
    "nahkampf": [
        ("angreifen", "H", "vergleich", "Angreifen"),
        ("sturmangriff", "BH", "vergleich; +1 Vorteil vor dem Wurf", "Sturmangriff"),
        ("waffe_ziehen", "F", "auto", "Waffe ziehen"),
    ],
    "fingerfertigkeit": [],
    "ausdauer": [],
    "besonnenheit": [],
    "heilen": [],
}

RELATED = {
    "wahrnehmung": ["schleichen", "intuition", "fingerfertigkeit"],
    "intuition": ["wahrnehmung", "besonnenheit", "unterhalten"],
    "charme": ["besonnenheit", "bestechen", "einschuechtern", "klatsch", "feilschen"],
    "feilschen": ["charme", "bestechen", "schaetzen"],
    "bestechen": ["charme", "einschuechtern", "feilschen"],
    "einschuechtern": ["besonnenheit", "charme", "anfuehren", "nahkampf"],
    "klatsch": ["charme", "intuition"],
    "schleichen": ["wahrnehmung", "athletik"],
    "athletik": ["ausweichen", "schleichen", "klettern"],
    "ausweichen": ["nahkampf", "athletik"],
    "nahkampf": ["ausweichen", "fernkampf"],
    "fingerfertigkeit": ["wahrnehmung", "gluecksspiel"],
    "ausdauer": ["besonnenheit", "zechen"],
    "besonnenheit": ["charme", "einschuechtern", "intuition"],
    "anfuehren": ["einschuechtern", "charme", "besonnenheit"],
    "heilen": ["ausdauer"],
}


def slug_from_name(name: str) -> str:
    table = str.maketrans(
        {
            "ä": "ae",
            "ö": "oe",
            "ü": "ue",
            "Ä": "Ae",
            "Ö": "Oe",
            "Ü": "Ue",
            "ß": "ss",
            " ": "_",
        }
    )
    s = name.translate(table).lower()
    s = s.replace("&", "und")
    return re.sub(r"[^a-z0-9_]+", "", s)


def split_roh(text: str) -> dict[str, tuple[str, str]]:
    """Return slug -> (heading, body)."""
    parts = re.split(r"\n(?=## )", text)
    out = {}
    for part in parts:
        part = part.strip()
        if not part.startswith("## "):
            continue
        first, _, rest = part.partition("\n")
        heading = first[3:].strip()
        name = heading.split("(")[0].strip()
        slug = slug_from_name(name)
        out[slug] = (heading, rest.strip())
    return out


def md_original(skill: dict, heading: str, body: str) -> str:
    seite = skill.get("seite", "?")
    return f"""# {skill['name']} — Original

Quelle: S. {seite}
Status: Original, nicht anfassen

**{heading}**

{body}

### Siehe auch

- [Angepasst](angepasst.md)
- [Details](details.md)
- [Hub](README.md)
- [Hauptliste Original](../../_roh/hauptliste-s118-131.md)
"""


def md_readme(skill: dict) -> str:
    seite = skill.get("seite", "?")
    return f"""# {skill['name']}

Quelle: S. {seite}

- [Original](original.md) — Buch, unverändert
- [Angepasst](angepasst.md) — Projekt
- [Details](details.md) — Hilfe
"""


def md_angepasst(skill: dict) -> str:
    name = skill["name"]
    sid = skill["id"]
    art = "Grundfähigkeit" if skill["art"] == "grund" else "Ausbaufähigkeit"
    attr = skill["attr"]
    attr_n = ATTR.get(attr, attr)
    gruppiert = "ja" if skill.get("gruppiert") else "nein"
    specs = skill.get("spezialisierungen") or []
    spec_line = ", ".join(specs) if specs else "—"
    cmds = BEFEHLE.get(sid, [])
    grau = []
    if skill["art"] == "ausbau":
        grau.append("ohne Steigerung: *nicht ausgebildet*")
    if sid == "nachforschen":
        grau.append("ohne Talent *Lesen & Schreiben*")
    if not cmds:
        grau.append("keine Katalogkarte in v1, bis eine Szene sie braucht")
    grau_txt = "\n".join(f"- {g}" for g in grau) or "- erscheint, wenn die Szene sie braucht und der Charakter bei Bewusstsein ist"

    befehl = "\n".join(
        f"- `{cid}` — {label} · Kosten {kost} · {res} — [Befehlsregister](../../../10-system/06-befehle.md)"
        for cid, kost, res, label in cmds
    ) or "- — keine Katalog-ID in v1"

    rel = RELATED.get(sid, [])
    siehe = "\n".join(f"- [{r}](../{r}/angepasst.md)" for r in rel)
    siehe += "\n- [Original](original.md)\n- [Details](details.md)\n- [Struktur](../../01-struktur.md)"

    return f"""# {name} — Projekt

Quelle der Regeln: [original.md](original.md) (S. {skill.get('seite', '?')})

Das Buch nicht wiederholen. Hier nur, wie **Die Frist** die Fähigkeit benutzt.

| | |
|--|--|
| Art | {art} |
| Spielwert | {attr} ({attr_n}) |
| Gruppiert | {gruppiert} |
| Spezialisierungen | {spec_line} |
| Fähigkeitswert | {attr} + Steigerungen |
| Ausbau ohne Steigerung | {"illegal, Karte grau" if skill["art"]=="ausbau" else "legal, Wurf gegen reines "+attr} |

## Karte

- Spieler wählt Intention, würfelt nicht über das Ergebnis hinweg.
- SL entscheidet, ob automatisch, Standardwurf oder dramatisch (EG).
- Engine schlägt Resolver vor und würfelt, wenn der SL das freigibt.
- Glück-Fenster nur nach **eigenem** Wurf.

## Grau (Karte bleibt, nie löschen)

{grau_txt}

## Resolver

{"Vergleich oder Standard, siehe Befehl." if cmds else "Standardwurf, sofern der SL einen Wurf verlangt. Vergleich, wenn das Buch es so setzt (Original)."}

### Befehl

{befehl}

### Siehe auch

{siehe}
"""


def md_details(skill: dict) -> str:
    sid = skill["id"]
    rel = RELATED.get(sid, [])
    siehe = "\n".join(f"- [{r}](../{r}/details.md)" for r in rel)
    extra = skill.get("notiz") or skill.get("kampf") or ""
    extra_l = f"\n- Engine-Notiz: {extra}" if extra else ""
    return f"""# {skill['name']} — Details / Hilfe

JSON-`id`: `{sid}`  
Quelle: S. {skill.get('seite', '?')} · Tabelle: [../../../data/skills.json](../../../data/skills.json)

## Hilfe

- Fähigkeitswert = Spielwert + Steigerungen.
- Beispiele und Tabellen stehen im [Original](original.md), hier nicht noch einmal abschreiben.
- SL bleibt Welt: Fähigkeit, Schwierigkeit, wer vergleicht.{extra_l}

## Prüfen

- Seite gegen Buchfußzeile halten (WebP-Datei = Buch + 1).

### Siehe auch

- [Original](original.md)
- [Angepasst](angepasst.md)
{siehe}
"""


def md_pointer(skill: dict) -> str:
    sid = skill["id"]
    return f"""# {skill['name']}

Verschoben in den Ordner (Original / Angepasst / Details):

- [Hub]({sid}/README.md)
- [Original]({sid}/original.md)
- [Angepasst]({sid}/angepasst.md)
- [Details]({sid}/details.md)
"""


def rewrite_liste(skills: list) -> None:
    lines = [
        "# Fähigkeiten – Hauptliste",
        "",
        "Quelle: S. 118–131. Originalkapitel: [_roh/hauptliste-s118-131.md](_roh/hauptliste-s118-131.md).",
        "Maschine: [../data/skills.json](../data/skills.json).",
        "",
        "Jede Fähigkeit: [Original](faehigkeiten/<id>/original.md) · [Angepasst](faehigkeiten/<id>/angepasst.md) · [Details](faehigkeiten/<id>/details.md).",
        "",
        "Fähigkeitswert = Spielwert + Steigerungen. Grund: ohne Steigerung legal. Ausbau: ohne Steigerung grau.",
        "",
        "## Grundfähigkeiten",
        "",
        "| Fähigkeit | Attr | Gruppiert | Hub |",
        "|-----------|------|-----------|-----|",
    ]
    for s in skills:
        if s["art"] != "grund":
            continue
        g = ", ".join(s.get("spezialisierungen") or []) or "—"
        lines.append(
            f"| {s['name']} | {s['attr']} | {g} | [Hub](faehigkeiten/{s['id']}/README.md) |"
        )
    lines += [
        "",
        "## Ausbaufähigkeiten",
        "",
        "| Fähigkeit | Attr | Gruppiert | Hub |",
        "|-----------|------|-----------|-----|",
    ]
    for s in skills:
        if s["art"] != "ausbau":
            continue
        g = ", ".join(s.get("spezialisierungen") or []) or "—"
        lines.append(
            f"| {s['name']} | {s['attr']} | {g} | [Hub](faehigkeiten/{s['id']}/README.md) |"
        )
    lines += [
        "",
        "### Siehe auch",
        "",
        "- [Struktur](01-struktur.md)",
        "- [Talente](03-talente-liste.md)",
        "- [Vorlage](../00-VORLAGE.md)",
        "",
    ]
    LISTE.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    skills = json.loads(SKILLS_JSON.read_text(encoding="utf-8"))["skills"]
    roh = ROH.read_text(encoding="utf-8")
    chunks = split_roh(roh)
    missing = []
    OUT.mkdir(parents=True, exist_ok=True)
    for s in skills:
        sid = s["id"]
        d = OUT / sid
        d.mkdir(exist_ok=True)
        chunk = chunks.get(sid)
        if chunk:
            heading, body = chunk
            original = md_original(s, heading, body)
        else:
            missing.append(sid)
            original = (
                f"# {s['name']} — Original\n\nQuelle: S. {s.get('seite', '?')}\n"
                "Status: Original, nicht anfassen\n\n"
                f"[prüfen am Buch S. {s.get('seite', '?')}] — Abschnitt im Rohkapitel nicht gefunden.\n\n"
                "### Siehe auch\n\n- [Angepasst](angepasst.md)\n- [Details](details.md)\n"
            )
        (d / "original.md").write_text(original, encoding="utf-8")
        (d / "angepasst.md").write_text(md_angepasst(s), encoding="utf-8")
        (d / "details.md").write_text(md_details(s), encoding="utf-8")
        (d / "README.md").write_text(md_readme(s), encoding="utf-8")
        (OUT / f"{sid}.md").write_text(md_pointer(s), encoding="utf-8")
    rewrite_liste(skills)
    print("skills", len(skills))
    print("roh chunks", sorted(chunks))
    print("missing original", missing)


if __name__ == "__main__":
    main()
