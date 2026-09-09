#!/usr/bin/env python3
"""Sichert alle Beschreibungstexte in copy/BESCHREIBUNGEN.md."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "copy" / "BESCHREIBUNGEN.md"

LAYERS = ("offen", "grob", "teil", "voll", "scharf", "sl")


def unquote(s: str) -> str:
    return bytes(s, "utf-8").decode("unicode_escape") if "\\" in s else s


def parse_look_maps(src: str) -> tuple[dict[str, dict[str, str]], dict[str, dict[str, str]]]:
    streets: dict[str, dict[str, str]] = {}
    houses: dict[str, dict[str, str]] = {}
    current: dict[str, dict[str, str]] | None = None
    key: str | None = None
    pending: str | None = None
    for line in src.splitlines():
        if "export const STREET_LOOKS" in line:
            current = streets
            continue
        if "export const HOUSE_LOOKS" in line:
            current = houses
            continue
        if current is None:
            continue
        if line.startswith("export function"):
            break
        m = re.match(r'^\s+(?:([a-z_]+)|"([a-z]+-\d+)"):\s*\{', line)
        if m:
            key = m.group(1) or m.group(2)
            current[key] = {}
            pending = None
            continue
        m = re.match(r"^\s+(offen|grob|teil|voll|scharf|sl):\s*\"(.*)\"[,}]?\s*$", line)
        if m and key:
            current[key][m.group(1)] = unquote(m.group(2))
            pending = None
            continue
        m = re.match(r"^\s+(offen|grob|teil|voll|scharf|sl):\s*$", line)
        if m:
            pending = m.group(1)
            continue
        if pending and key:
            m = re.match(r'^\s+"(.*)"[,}]?\s*$', line)
            if m:
                current[key][pending] = unquote(m.group(1))
                pending = None
    return streets, houses


def parse_drosselau(src: str) -> tuple[str, list[dict], list[dict], list[dict]]:
    tm = re.search(r'teaser:\s*"([^"]+)"', src)
    teaser = tm.group(1) if tm else ""
    quartiers = []
    qsrc = src.split("export const QUARTIERS")[1].split("const e =")[0] if "export const QUARTIERS" in src else ""
    for m in re.finditer(
        r'id: "([^"]+)",\s*name: "([^"]+)",\s*note: "([^"]+)",\s*streetIds: \[([^\]]+)\]',
        qsrc,
    ):
        ids = re.findall(r'"([^"]+)"', m.group(4))
        quartiers.append({"id": m.group(1), "name": m.group(2), "note": m.group(3), "streets": ids})
    streets = []
    chunks = re.split(r"\n    \{\n      id: ", src)
    for ch in chunks[1:]:
        if "export const DROSSELAU_HOUSE" in ch:
            ch = ch.split("export const DROSSELAU_HOUSE")[0]
        sid = re.match(r'"([^"]+)"', ch)
        if not sid:
            continue
        name = re.search(r'name: "([^"]+)"', ch)
        note = re.search(r'note: "([^"]+)"', ch)
        quartier = re.search(r'quartier: "([^"]+)"', ch)
        neighbors = re.findall(r'"([^"]+)"', re.search(r"neighbors: \[([^\]]*)\]", ch).group(1)) if re.search(r"neighbors: \[", ch) else []
        houses = []
        for hm in re.finditer(
            r'\{\s*nr:\s*(\d+),\s*name:\s*"([^"]+)"([^}]*)\}',
            ch,
        ):
            rest = hm.group(3)
            empty = "empty: true" in rest
            events = []
            for em in re.finditer(r'e\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\)', rest):
                events.append({"id": em.group(1), "label": em.group(2), "hint": em.group(3)})
            # events can sit on following lines inside the house object — catch block events
            houses.append(
                {
                    "nr": int(hm.group(1)),
                    "name": hm.group(2),
                    "empty": empty,
                    "events": events,
                },
            )
        streets.append(
            {
                "id": sid.group(1),
                "name": name.group(1) if name else sid.group(1),
                "note": note.group(1) if note else "",
                "quartier": quartier.group(1) if quartier else "",
                "neighbors": neighbors,
                "houses": houses,
            }
        )
    return teaser, quartiers, streets, []


def parse_party(src: str) -> list[dict]:
    faces = []
    for block in re.split(r"\n  \{\n    name: ", src)[1:]:
        name = re.match(r'"([^"]+)"', block)
        if not name:
            continue
        def g(field: str) -> str:
            m = re.search(rf'{field}: "([^"]*)"', block)
            return m.group(1) if m else ""
        faces.append(
            {
                "name": name.group(1),
                "herkunft": g("herkunft"),
                "motivation": g("motivation"),
                "shortGoal": g("shortGoal"),
                "longGoal": g("longGoal"),
                "woher": g("woher"),
                "glaube": g("glaube"),
                "angst": g("angst"),
            }
        )
    return faces


def parse_session(src: str) -> list[tuple[str, str, str]]:
    out = []
    for m in re.finditer(
        r'title:\s*"([^"]+)",\n\s*body:\s*"([^"]+)"',
        src,
    ):
        out.append((m.group(1), m.group(2), "body"))
    ask = re.search(r'ask:\s*\{\s*speaker:\s*"([^"]+)",\s*text:\s*"([^"]+)"', src)
    if ask:
        out.append((ask.group(1), ask.group(2), "ask"))
    return out


def fallback_house(street_name: str, house: dict) -> dict[str, str]:
    name, nr, empty = house["name"], house["nr"], house["empty"]
    keim = " ".join(f"{e['label']}: {e['hint']}" for e in house["events"])
    return {
        "offen": (
            f"{name} an der {street_name}, Nummer {nr}. Leer. Die Luft steht. Ausgang auf die {street_name}. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse."
            if empty
            else f"{name} an der {street_name}, Nummer {nr}. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die {street_name}."
        ),
        "grob": "Staub, Dunkel, nichts das antwortet." if empty else "Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.",
        "teil": (
            "Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum."
            if empty
            else f"Durchs Fenster von {name} siehst du, was das Glas hergibt — Umrisse, Licht oder keins."
        ),
        "voll": (
            f"{name}. {keim} Noch hat niemand gezogen."
            if keim
            else (
                "Die Leere ist vollständig. Wer hier wohnte, hat nichts gelassen das einen Namen trägt."
                if empty
                else f"Die Stube von {name} hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht."
            )
        ),
        "scharf": (
            f"{house['events'][0]['hint']} Das liegt still, bis der Spielleiter es zieht."
            if house["events"]
            else "Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt."
        ),
        "sl": f"{street_name} {nr}. {'Leer. ' if empty else ''}{keim or 'Kein Keim.'} Engine zieht niemanden.",
        "_quelle": "fallback",
    }


def block(bid: str, wo: str, datei: str, text: str) -> list[str]:
    return [
        f"### {bid}",
        f"- Ort: {wo}",
        f"- Datei: `{datei}`",
        "",
        ">>>",
        text,
        "<<<",
        "",
    ]


def main() -> None:
    looks_src = (ROOT / "src/lib/wfrp/looks-drosselau.ts").read_text()
    dross_src = (ROOT / "src/lib/wfrp/drosselau.ts").read_text()
    party_src = (ROOT / "src/lib/wfrp/party.ts").read_text()
    sess_src = (ROOT / "src/lib/wfrp/session.ts").read_text()
    seed_src = (ROOT / "src/lib/wfrp/seed.ts").read_text()
    catalog = json.loads((ROOT / "knowledge/data/catalog.json").read_text())
    stations_src = (ROOT / "src/lib/wfrp/stations.ts").read_text()

    street_looks, house_looks = parse_look_maps(looks_src)
    teaser, quartiers, streets, _ = parse_drosselau(dross_src)
    faces = parse_party(party_src)
    hour = parse_session(sess_src)

    n_houses = sum(len(s["houses"]) for s in streets)
    n_hand = 0
    lines = [
        "# Beschreibungen — Die Frist",
        "",
        "Sicherung aller **Beschreibungstexte**: was Ort, Haus, Gesicht und erste Stunde erzählen.",
        "Kein UI-Chrom — das bleibt [SPIELTEXTE.md](SPIELTEXTE.md).",
        "",
        "Schichten einer Gasse/eines Hauses:",
        "",
        "- **offen** — liegt im Faden, sobald die Szene offen ist. Kein Wurf.",
        "- **grob** — Umschauen, Fehlwurf.",
        "- **teil** — Umschauen, knapp.",
        "- **voll** — Umschauen, gelungen.",
        "- **scharf** — Umschauen, EG 4+ oder kritisch.",
        "- **sl** — nur das Pult.",
        "",
        "Häuser ohne eigene Handschrift nutzen den Generator (als `fallback` markiert).",
        "",
        f"Stand aus `looks-drosselau.ts`, `drosselau.ts`, `session.ts`, `party.ts`, `catalog.json`.",
        "",
        "## Inhalt",
        "",
        f"- Stadt — 1",
        f"- Viertel — {len(quartiers)}",
        f"- Gassen — {len(streets)} × 6 Schichten",
        f"- Häuser — {n_houses} × 6 Schichten",
        f"- Erste Stunde",
        f"- Gesichter — {len(faces)}",
        f"- Handlungskarten · Flavour",
        f"- Erschaffung · Why",
        "",
        "## Stadt",
        "",
    ]
    lines += block("B-stadt-teaser", "Kampagnen-Teaser", "src/lib/wfrp/drosselau.ts", teaser)
    sm = re.search(r'teaser:\s*"([^"]+)"', seed_src)
    slm = re.search(r'slText:\s*`([^`]+)`', seed_src)
    if sm:
        lines += block("B-lobby-teaser", "Lobby-Teaser vor der ersten Szene", "src/lib/wfrp/seed.ts", sm.group(1))
    if slm:
        lines += block("B-lobby-sl", "Lobby-Text für den SL", "src/lib/wfrp/seed.ts", slm.group(1))

    lines += ["## Viertel", ""]
    for q in quartiers:
        lines += block(
            f"B-viertel-{q['id']}",
            f"{q['name']} · Lage",
            "src/lib/wfrp/drosselau.ts",
            q["note"],
        )

    lines += ["## Gassen", ""]
    for s in streets:
        look = street_looks.get(s["id"], {})
        lines.append(f"### Gasse · {s['name']}")
        lines.append("")
        lines.append(f"- id: `{s['id']}` · Viertel: {s['quartier']} · grenzt an: {', '.join(s['neighbors']) or '—'}")
        lines.append(f"- {len(s['houses'])} Häuser")
        lines.append("")
        lines += block(f"B-gasse-{s['id']}-note", f"{s['name']} · kurze Lage", "src/lib/wfrp/drosselau.ts", s["note"])
        for layer in LAYERS:
            text = look.get(layer, "")
            if not text:
                continue
            n_hand += 1
            lines += block(
                f"B-gasse-{s['id']}-{layer}",
                f"{s['name']} · {layer}",
                "src/lib/wfrp/looks-drosselau.ts",
                text,
            )

    lines += ["## Häuser", ""]
    n_fb = 0
    for s in streets:
        for h in s["houses"]:
            hid = f"{s['id']}-{h['nr']}"
            look = house_looks.get(hid)
            quelle = "looks-drosselau.ts"
            if not look:
                look = fallback_house(s["name"], h)
                quelle = "Generator (fallbackHouseLook)"
                n_fb += 1
            leer = " · leer" if h["empty"] else ""
            lines.append(f"#### {s['name']} {h['nr']} — {h['name']}{leer}")
            lines.append("")
            for layer in LAYERS:
                text = look.get(layer, "")
                if not text:
                    continue
                lines += block(
                    f"B-haus-{hid}-{layer}",
                    f"{s['name']} {h['nr']} · {layer}",
                    f"src/lib/wfrp/{quelle if quelle.startswith('looks') else 'drosselau.ts'}",
                    text,
                )
            for ev in h["events"]:
                lines += block(
                    f"B-keim-{ev['id']}",
                    f"{s['name']} {h['nr']} · Keim {ev['label']}",
                    "src/lib/wfrp/drosselau.ts",
                    ev["hint"],
                )

    lines += ["## Erste Stunde", ""]
    for i, (title, body, kind) in enumerate(hour, 1):
        lines += block(
            f"B-stunde-{i:02d}",
            f"{title} · {kind}",
            "src/lib/wfrp/session.ts",
            body,
        )

    lines += ["## Gesichter", ""]
    for f in faces:
        slug = f["name"].lower()
        for field, label in (
            ("herkunft", "Herkunft"),
            ("motivation", "Motivation"),
            ("shortGoal", "kurzes Ziel"),
            ("longGoal", "langes Ziel"),
            ("woher", "woher"),
            ("glaube", "Glaube"),
            ("angst", "Angst"),
        ):
            lines += block(
                f"B-gesicht-{slug}-{field.lower()}",
                f"{f['name']} · {label}",
                "src/lib/wfrp/party.ts",
                f[field],
            )

    lines += ["## Handlungskarten · Flavour", ""]
    if catalog.get("regel_grau"):
        lines += block("B-karte-regel-grau", "Regel Grau", "knowledge/data/catalog.json", catalog["regel_grau"])
    for a in catalog.get("actions", []):
        if a.get("summary"):
            lines += block(
                f"B-karte-{a['id']}-summary",
                f"{a.get('label', a['id'])} · Flavour",
                "knowledge/data/catalog.json",
                a["summary"],
            )

    lines += ["## Erschaffung · Why", ""]
    for m in re.finditer(
        r'id:\s*"([^"]+)"[,\s]*label:\s*"([^"]+)"[,\s]*why:\s*"([^"]+)"',
        stations_src,
    ):
        lines += block(
            f"B-station-{m.group(1)}-why",
            f"Station {m.group(2)} · why",
            "src/lib/wfrp/stations.ts",
            m.group(3),
        )

    n_blocks = sum(1 for L in lines if L.startswith("### B-") or L.startswith("### B-") )
    # count ### B- ids
    n_blocks = sum(1 for L in lines if re.match(r"^### B-", L))

    # insert count after header Inhalt was approximate
    lines.append("---")
    lines.append("")
    lines.append(
        f"Ende der Sicherung. {n_blocks} Blöcke. "
        f"{len(streets)} Gassen handschriftlich. "
        f"{n_houses - n_fb} Häuser handschriftlich, {n_fb} aus dem Generator."
    )
    lines.append("")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"{n_blocks} Blöcke → {OUT.relative_to(ROOT)}")
    print(f"Gassen looks: {len(street_looks)}  Haus looks: {len(house_looks)}  Fallback: {n_fb}/{n_houses}")


if __name__ == "__main__":
    main()
