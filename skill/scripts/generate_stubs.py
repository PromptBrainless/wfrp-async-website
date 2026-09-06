#!/usr/bin/env python3
"""Erzeugt Gerüste aus dem Register. Original mit Inhalt nie überschreiben."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
KNOW = ROOT / "knowledge"
DATA = KNOW / "data"


def slug(name: str) -> str:
    s = name.lower().replace("&", "und")
    s = re.sub(r"\s*\([^)]*\)", "", s)
    for a, b in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")):
        s = s.replace(a, b)
    return re.sub(r"[^a-z0-9]+", "_", s).strip("_")


ATTRS = [
    ("kg", "KG", "Kampfgeschick", 33,
     "Dein Geschick im Nahkampf. Gezielte Treffer und Effizienz im Schlachtgetümmel. Auch für den waffenlosen Kampf."),
    ("bf", "BF", "Ballistische Fertigkeit", 33,
     "Geschick beim Treffen mit Fernkampfwaffen und Wurfgeschick im Allgemeinen."),
    ("st", "ST", "Stärke", 33,
     "Schaden im Nahkampf, Heben, Schwimmen, Klettern."),
    ("wi", "WI", "Widerstand", 33,
     "Körperliche Zähigkeit. Verletzungen, Umwelt, Gifte."),
    ("i", "I", "Initiative", 33,
     "Denk- und Reaktionsgeschwindigkeit. Reihenfolge im Kampf. Intuition und Wahrnehmung."),
    ("gw", "GW", "Gewandtheit", 33,
     "Koordination und Behändigkeit. Rennen, Reiten, Verstecken, Ausweichen."),
    ("gs", "GS", "Geschicklichkeit", 34,
     "Feinmotorik. Musik, Handwerk, Fingerfertigkeit, Taschendiebstahl."),
    ("in", "IN", "Intelligenz", 34,
     "Analytisches Denken. Heilen, Schätzen, Wissen, Zaubersprüche."),
    ("wk", "WK", "Willenskraft", 34,
     "Geistesstärke gegen Ablenkung, Angst und Entsetzen."),
    ("ch", "CH", "Charisma", 34,
     "Umgang mit Leuten. Überzeugen, Befehle, Bestechung, Zwiesprache mit Göttern."),
]

CONDS = [
    ("betaubt", "Betäubt", True, "Keine Handlung, halbe Bewegung. −10 auf Würfe. Gegner im NK +1 Vorteil vor Trefferwurf. Ende Runde: herausfordernd Ausdauer → 1+EG. Danach Erschöpft."),
    ("bewusstlos", "Bewusstlos", False, "Nichts tun, keine Wahrnehmung. NK: Ich-werde-nicht-scheitern ohne Zähigkeit. FK Kernschuss trifft automatisch. Danach Erschöpft + Niedergestreckt."),
    ("blutend", "Blutend", True, "Ende Runde −1 LP. −10 gegen Infektion. Bei 0 LP Bewusstlos + 10% Sterbechance je Stapel. Heilen 1+EG. Danach Erschöpft."),
    ("brennend", "Brennend", True, "Ende Runde 1W10 Schaden − WIB − schlechteste RP, min. 1 LP; +1 je weiterem Stapel. Athletik 1+EG."),
    ("demoralisiert", "Demoralisiert", True, "Muss fliehen/verstecken. −10 außer Fliehen/Verstecken. Gebunden: kein Überwinden. Ungebunden Ende Runde Besonnenheit 1+EG. Danach Erschöpft."),
    ("erschoepft", "Erschöpft", True, "−10 auf alle Würfe. Rast, Zauber oder göttliches Wirken."),
    ("ertaubt", "Ertaubt", True, "−10 Gehör. Seite/hinten +10 Trefferwurf. Ende jeder zweiten Runde −1."),
    ("geblendet", "Geblendet", True, "−10 Sicht. NK-Gegner +10 Trefferwurf. Ende jeder zweiten Runde −1."),
    ("gefesselt", "Gefesselt", True, "Keine Bewegung. −10 bewegungsbezogene Handlungen. Handlung: Vergleich Stärke → 1+EG."),
    ("niedergestreckt", "Niedergestreckt", False, "Aufstehen oder halbe Bewegung kriechen. −20 Bewegungswürfe. NK-Gegner +20 Trefferwurf. Endet beim Aufstehen."),
    ("ueberrascht", "Überrascht", False, "Keine Bewegung, Handlung, Verteidigung. NK-Gegner +20. Ende Runde oder nach erstem Angriff gegen dich."),
    ("vergiftet", "Vergiftet", True, "Ende Runde −1 LP und −10 Würfe. Ausdauer oder Heilen 1+EG. Danach Erschöpft."),
]

QUALS = [
    ("ablenkend", "Ablenkend", "qualitaet", 297),
    ("akkurat", "Akkurat", "qualitaet", 297),
    ("betaubend", "Betäubend", "qualitaet", 297),
    ("defensiv", "Defensiv", "qualitaet", 297),
    ("durchbohrend", "Durchbohrend", "qualitaet", 298),
    ("durchschlagend", "Durchschlagend", "qualitaet", 298),
    ("fesselnd", "Fesselnd", "qualitaet", 298),
    ("klingenfaenger", "Klingenfänger", "qualitaet", 298),
    ("pistole", "Pistole", "qualitaet", 298),
    ("praezise", "Präzise", "qualitaet", 298),
    ("radius", "Radius", "qualitaet", 298),
    ("repetierend", "Repetierend", "qualitaet", 298),
    ("ruestungsbrechend", "Rüstungsbrechend", "qualitaet", 298),
    ("schiesspulver", "Schießpulver", "qualitaet", 298),
    ("schild", "Schild", "qualitaet", 298),
    ("schnell", "Schnell", "qualitaet", 298),
    ("umwickelnd", "Umwickelnd", "qualitaet", 298),
    ("unzerbrechlich", "Unzerbrechlich", "qualitaet", 298),
    ("verwundend", "Verwundend", "qualitaet", 298),
    ("wuchtig", "Wuchtig", "qualitaet", 298),
    ("ermuedend", "Ermüdend", "makel", 299),
    ("gefaehrlich", "Gefährlich", "makel", 299),
    ("langsam", "Langsam", "makel", 299),
    ("nachladen", "Nachladen", "makel", 299),
    ("stumpf", "Stumpf", "makel", 299),
    ("unpraezise", "Unpräzise", "makel", 299),
]

VOELKER = [
    ("mensch", "Mensch", 36),
    ("zwerg", "Zwerg", 36),
    ("halbling", "Halbling", 36),
    ("hochelf", "Hochelf", 36),
    ("waldelf", "Waldelf", 36),
]

KLASSEN = [
    ("akademiker", "Akademiker", 53, [
        "Advokat", "Apotheker", "Gelehrter", "Medicus",
        "Mönch", "Priester", "Technicus", "Zauberer",
    ]),
    ("buerger", "Bürger", 61, [
        "Agitator", "Bettler", "Ermittler", "Handwerker",
        "Kaufmann", "Rattenfänger", "Städter", "Wachmann",
    ]),
    ("flussvolk", "Flussvolk", 69, [
        "Flussbewohner", "Flussschiffer", "Flusswächter", "Lotse",
        "Schmuggler", "Seemann", "Stauer", "Strandräuber",
    ]),
    ("freisassen", "Freisassen", 77, [
        "Bote", "Flagellant", "Hausierer", "Hexenjäger",
        "Kopfgeldjäger", "Kutscher", "Schausteller", "Straßenwächter",
    ]),
    ("gesetzlose", "Gesetzlose", 85, [
        "Bandit", "Dieb", "Grabräuber", "Halunke",
        "Hehler", "Hexer", "Kuppler", "Scharlatan",
    ]),
    ("hoeflinge", "Höflinge", 93, [
        "Adeliger", "Berater", "Diener", "Duellist",
        "Gesandter", "Künstler", "Meier", "Spion",
    ]),
    ("krieger", "Krieger", 101, [
        "Gedungener", "Grubenkämpfer", "Kavallerist", "Kriegerpriester",
        "Ritter", "Slayer", "Soldat", "Wächter",
    ]),
    ("landvolk", "Landvolk", 109, [
        "Bergmann", "Büttel", "Dörfler", "Heckenhexer",
        "Jäger", "Kräuterkundiger", "Kundschafter", "Mystiker",
    ]),
]

# Hauptliste S. 132–147 (Buchfuß). Gruppierte in Klammern bleiben ein Slug.
TALENTS = """
132 Ablenken
132 Absolutes Gehör
132 Anrufung
132 Arkane Magie
132 Artefakt spüren
133 Äthergespür
133 Attraktiv
133 Aufgeweckt
133 Aufspringen
133 Bastler
133 Beängstigend
133 Bedrohlich
133 Beengter Kampf
133 Beharrlich
133 Beherzt
133 Beidhändiger Angriff
133 Beidhändigkeit
133 Berserkerangriff
134 Betäubender Schlag
134 Binnenschiffer
134 Blaublütig
134 Blitzschnelle Reflexe
134 Bücherwurm
134 Chaosmagie
134 Chirurgie
134 Distanzschütze
134 Doppelzüngig
134 Einnehmendes Wesen
134 Eiserner Wille
134 Entschlossen
134 Entwaffnen
135 Erfahrener Reisender
135 Etikette
135 Fachwissen
135 Fallensteller
135 Feldscher
135 Finte
135 Fischer
135 Flagellant
135 Fliehen
135 Flinke Finger
135 Flinkes Ausweichen
136 Flusskundig
136 Freikletterer
136 Furchtlosigkeit
136 Gebieterisch
136 Geborener Krieger
136 Gedrillt
136 Gegenangriff
136 Geheime Identität
137 Genügsam
137 Gerissenheit
137 Geschickte Finger
137 Gesellig
137 Gespür für Ärger
137 Glückspilz
137 Guter Schwimmer
137 Gut vorbereitet
137 Halbweltgröße
137 Handwerksgeschick
137 Hart im Nehmen
137 Hass
137 Heilige Visionen
137 Heiliger Hass
137 Hexer
138 Imitator
138 Inspirierend
138 Instinktive Aussprache
138 Intrigant
138 Kampfrausch
138 Kampfreflexe
138 Kampfsinn
138 Kampfzauberer
138 Kartenkünstler
138 Katzenfüßig
139 Klingenschlag
139 Kriminell
139 Kühler Kopf
139 Künstlerisch
139 Kunstreiter
139 Leichtfüßigkeit
139 Leidenschaftlicher Eifer
139 Lesen & Schreiben
139 Lippenlesen
139 Lotse
139 Mächtiger Schlag
140 Magiegespür
140 Magieresistenz
140 Magnum Opus
140 Meisterhandwerker
140 Meisterkämpfer
140 Meisterredner
140 Meisterschütze
140 Messerstecher
140 Mitreißender Anführer
140 Nachtsicht
140 Niedere Magie
140 Numismatiker
141 Peitschenknallen
141 Pharmazeut
141 Präzisionsschütze
141 Pulverschütze
141 Rasender Angriff
141 Raserei
141 Raureiter
141 Redeschwall
141 Reine Seele
142 Resistenz
142 Rhetorik
142 Richtungssinn
142 Riposte
142 Robustheit
142 Scharfer Sinn
142 Scharfschütze
142 Schatten
143 Schildkämpfer
143 Schlangenmensch
143 Schmeichler
143 Schmierer
143 Schmutzig kämpfen
143 Schneller Schütze
143 Schnelles Nachladen
143 Schnellleser
143 Schnorrer
143 Sechster Sinn
143 Seebär
143 Seemannsgang
144 Segen
144 Sehr stark
144 Sicherer Schuss
144 Slayer
144 Sorgfältiges Zielen
144 Spieß umdrehen
144 Sprachbegabung
144 Sprinter
144 Stahlkinn
144 Stämmig
145 Starke Beine
145 Starker Rücken
145 Straßenkatze
145 Streuner
145 Tierverbundenheit
145 Trittsicher
145 Trunkenbold
145 Tunnelratte
145 Türentreter
145 Turm der Erinnerungen
146 Unauffällig
146 Unaufhaltsam
146 Unerbittlich
146 Unerschütterlich
146 Unkenruf
146 Unterschlagen
146 Unverwüstlich
146 Verhandlungsgenie
147 Verletzender Schlag
147 Verwandlungskünstler
147 Waidmann
147 Willensstärke
147 Wohlhabend
147 Wortgewandt
147 Würfelkünstler
147 Zahlengenie
147 Zielsicherheit
147 Zierlich
147 Zusammenmischen
147 Zweites Gesicht
""".strip().splitlines()

COMMANDS = [
    ("umschauen", "Umschauen", "sozial"),
    ("intuition", "Einschätzen", "sozial"),
    ("reden", "Ansprechen", "sozial"),
    ("feilschen", "Handeln", "sozial"),
    ("bestechen", "Bestechen", "sozial"),
    ("einschuechtern", "Einschüchtern", "sozial"),
    ("klatsch", "Gerüchte", "sozial"),
    ("warten", "Abwarten", "sozial"),
    ("kaufen", "Kaufen", "sozial"),
    ("schleichen", "Schleichen", "bewegung"),
    ("gehen", "Ort verlassen", "bewegung"),
    ("sprinten", "Sprinten", "bewegung"),
    ("aufstehen", "Aufstehen", "bewegung"),
    ("angreifen", "Angreifen", "kampf"),
    ("sturmangriff", "Sturmangriff", "kampf"),
    ("ausweichen", "Ausweichen", "kampf"),
    ("loesen", "Aus Bindung lösen", "kampf"),
    ("fliehen", "Fliehen", "kampf"),
    ("waffe_ziehen", "Waffe ziehen", "kampf"),
    ("volle_abwehr", "In der Defensive", "kampf"),
    ("glueck", "Glück", "ressourcen"),
    ("mut", "Mut", "ressourcen"),
    ("schicksal", "Schicksal", "ressourcen"),
    ("zaehigkeit", "Zähigkeit", "ressourcen"),
]


def frozen(path: Path) -> bool:
    if not path.exists():
        return False
    t = path.read_text(encoding="utf-8")
    return "Status: Original, nicht anfassen" in t and len(t) > 220 and "[prüfen am Buch" not in t


def write(path: Path, text: str, overwrite: bool = False) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists() and not overwrite:
        return
    path.write_text(text, encoding="utf-8")


def stub_files(folder: Path, *, title: str, seite: int, json_id: str, extra_see: list[str],
               original_body: str, angepasst_extra: str = "") -> None:
    orig = folder / "original.md"
    if not frozen(orig):
        body = original_body.strip()
        if len(body) < 200:
            body += f"\n\n[prüfen am Buch S. {seite}]\n"
        write(orig, f"""# {title} — Original

Quelle: S. {seite}
Status: Original, nicht anfassen

{body}

### Siehe auch

- [Angepasst](angepasst.md)
- [Details](details.md)
- [Hub](README.md)
""", overwrite=True)

    write(folder / "angepasst.md", f"""# {title} — Projekt

Quelle der Regeln: [original.md](original.md) (S. {seite})

Das Buch nicht wiederholen. Gerüst — Volltext kommt in der Welle.

{angepasst_extra}

### Befehl

- keine Katalog-ID

### Siehe auch

- [Original](original.md)
- [Details](details.md)
{chr(10).join('- ' + x for x in extra_see)}
""", overwrite=not (folder / "angepasst.md").exists())

    write(folder / "details.md", f"""# {title} — Details / Hilfe

JSON-`id`: `{json_id}`  
Quelle: S. {seite}

Gerüst. Beispiele nach der Extraktion.

### Siehe auch

- [Original](original.md)
- [Angepasst](angepasst.md)
{chr(10).join('- ' + x for x in extra_see)}
""", overwrite=not (folder / "details.md").exists())

    write(folder / "README.md", f"""# {title}

Quelle: S. {seite}

- [Original](original.md) — Buch, unverändert
- [Angepasst](angepasst.md) — Projekt
- [Details](details.md) — Hilfe
""", overwrite=True)

    pointer = folder.parent / f"{folder.name}.md"
    if not pointer.exists():
        write(pointer, f"# {title}\n\nWeiter: [{title}]({folder.name}/README.md)\n")


def main() -> None:
    items: list[dict] = []

    # attributes
    for iid, kuerzel, name, seite, text in ATTRS:
        path = f"02-charaktere/attribute/{iid}"
        stub_files(
            KNOW / path, title=name, seite=seite, json_id=iid,
            extra_see=["[Attribute-Hub](../../04-attribute.md)", f"[Bogen `{iid}`](../../../00-BOGEN.md)"],
            original_body=f"**{name} ({kuerzel})**\n\n{text}",
            angepasst_extra=f"| | |\n|--|--|\n| Key | `{iid}` |\n| Bonus | `{iid}b` |\n| Anzeige | {kuerzel} |\n",
        )
        items.append({"typ": "attr", "id": iid, "name": name, "kuerzel": kuerzel,
                      "seite": seite, "path": path, "bonus": f"{iid}b"})

    # skills from existing json
    skills = json.loads((DATA / "skills.json").read_text())["skills"]
    for s in skills:
        sid = s["id"]
        path = f"04-faehigkeiten-talente/faehigkeiten/{sid}"
        items.append({"typ": "skill", "id": sid, "name": s["name"], "attr": s["attr"],
                      "seite": s["seite"], "path": path, "art": s.get("art")})
        ang = KNOW / path / "angepasst.md"
        if ang.exists():
            t = ang.read_text(encoding="utf-8")
            needle = f"attribute/{s['attr'].lower()}/"
            if needle not in t.lower() and f"attribute/{s['attr']}/" not in t:
                t = t.rstrip() + f"\n- [Attribut {s['attr']}](../../../02-charaktere/attribute/{s['attr'].lower()}/angepasst.md)\n"
                ang.write_text(t, encoding="utf-8")

    # conditions
    for iid, name, kum, text in CONDS:
        path = f"05-regeln/zustaende/{iid}"
        stub_files(
            KNOW / path, title=name, seite=167, json_id=iid,
            extra_see=["[Zustände-Hub](../../05-zustaende.md)", "[Ausdauer](../../../04-faehigkeiten-talente/faehigkeiten/ausdauer/angepasst.md)"],
            original_body=f"**{name}**\n\nKumulativ: {'ja' if kum else 'nein'}.\n\n{text}",
        )
        items.append({"typ": "condition", "id": iid, "name": name, "seite": 167, "path": path, "kumulativ": kum})

    # qualities
    for iid, name, art, seite in QUALS:
        path = f"08-einkauf/qualitaeten/{iid}"
        stub_files(
            KNOW / path, title=name, seite=seite, json_id=iid,
            extra_see=["[Waffen und Rüstung](../../02-waffen-ruestung.md)", "[Nahkampf](../../../04-faehigkeiten-talente/faehigkeiten/nahkampf/angepasst.md)"],
            original_body=f"**{name}** ({art})\n\nBuch S. {seite}.",
        )
        items.append({"typ": art, "id": iid, "name": name, "seite": seite, "path": path})

    # voelker
    for iid, name, seite in VOELKER:
        path = f"02-charaktere/voelker/{iid}"
        stub_files(
            KNOW / path, title=name, seite=seite, json_id=iid,
            extra_see=["[Völker-Kurz](../../02-voelker-kurz.md)", "[Attribute](../../04-attribute.md)"],
            original_body=f"**{name}**\n\nStartwerte und Startfähigkeiten: Buch S. {seite}.",
        )
        items.append({"typ": "volk", "id": iid, "name": name, "seite": seite, "path": path})

    # careers
    careers_json = []
    for kslug, kname, kseite, names in KLASSEN:
        kdir = KNOW / "03-klassen-karrieren" / kslug
        write(kdir / "README.md", f"""# {kname}

Quelle: S. {kseite}

Klasse. Einzelkarrieren darunter.

- [Klassen-Übersicht](../01-klassen-und-karrieren-uebersicht.md)
- [Karrieren-Liste](../03-karrieren-liste.md)
""")
        for n in names:
            iid = slug(n)
            path = f"03-klassen-karrieren/{kslug}/{iid}"
            stub_files(
                KNOW / path, title=n, seite=kseite, json_id=iid,
                extra_see=[f"[{kname}](../../{kslug}/README.md)", "[Karrieren-Liste](../../03-karrieren-liste.md)"],
                original_body=f"**{n}** — Klasse {kname}.\n\nKarriereprofil (Stufen, Status, Fähigkeiten, Talente, Ausrüstung) folgt.",
            )
            items.append({"typ": "career", "id": iid, "name": n, "klasse": kslug,
                          "seite": kseite, "path": path})
            careers_json.append({"id": iid, "name": n, "klasse": kslug, "seite": kseite})

    # talents
    talents_json = []
    for line in TALENTS:
        seite_s, name = line.split(" ", 1)
        seite = int(seite_s)
        iid = slug(name)
        path = f"04-faehigkeiten-talente/talente/{iid}"
        stub_files(
            KNOW / path, title=name, seite=seite, json_id=iid,
            extra_see=["[Talente-Liste](../../03-talente-liste.md)", "[Fähigkeiten](../../02-faehigkeiten-liste.md)"],
            original_body=f"**{name}**\n\nMaximum und Würfe stehen im Buch.",
        )
        items.append({"typ": "talent", "id": iid, "name": name, "seite": seite, "path": path})
        talents_json.append({"id": iid, "name": name, "seite": seite})

    # commands (no folder)
    for iid, name, tab in COMMANDS:
        items.append({"typ": "command", "id": iid, "name": name, "tab": tab,
                      "path": "10-system/06-befehle.md"})

    register = {
        "quelle": "GRW 2. Auflage; IDs verbindlich",
        "regeln": "slug = Name kleingeschrieben, Umlaute ae/oe/ue/ss, Klammern weg. Ein id je Typ.",
        "items": items,
    }
    DATA.mkdir(exist_ok=True)
    (DATA / "register.json").write_text(json.dumps(register, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (DATA / "talents.json").write_text(json.dumps({"quelle": "S. 132–147", "talents": talents_json}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (DATA / "careers.json").write_text(json.dumps({"quelle": "S. 53–116", "careers": careers_json}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (DATA / "attributes.json").write_text(json.dumps({
        "quelle": "S. 33–36",
        "attributes": [{"id": a[0], "kuerzel": a[1], "name": a[2], "bonus": a[0] + "b", "seite": a[3]} for a in ATTRS],
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (DATA / "qualities.json").write_text(json.dumps({
        "quelle": "S. 297–299",
        "qualities": [{"id": q[0], "name": q[1], "art": q[2], "seite": q[3]} for q in QUALS],
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (DATA / "bogen.json").write_text(json.dumps({
        "quelle": "S. 33–36, 44–45",
        "keys": {
            "identitaet": ["id", "name", "volk", "klasse", "karriere", "karrierestufe", "status_tier", "status_rang", "motivation"],
            "werte": ["kg", "bf", "st", "wi", "i", "gw", "gs", "in", "wk", "ch"],
            "boni": ["kgb", "bfb", "stb", "wib", "ib", "gwb", "gsb", "inb", "wkb", "chb"],
            "ressourcen": ["bewegung", "lp", "lp_max", "schicksal", "glueck", "zaehigkeit", "mut", "vorteile", "ep", "traglast", "traglast_max"],
            "listen": ["faehigkeiten", "talente", "zustaende", "inventar", "flags", "gebunden_mit"],
            "geld": ["geld_gk", "geld_s", "geld_d"],
            "kampf": ["waffe_gefuehrt"],
        },
        "formeln": {
            "bonus": "Zehnerstelle des Werts",
            "lp_max": "stb + 2*wib + wkb (Halbling/Zierlich ohne stb)",
            "traglast_max": "stb + wib",
            "glueck_max": "schicksal (+ Glückspilz)",
            "mut_max": "zaehigkeit (+ Willensstärke)",
        },
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # human register
    lines = ["# Register — verbindliche IDs\n",
             "Maschine: [data/register.json](data/register.json). "
             "Bogen: [00-BOGEN.md](00-BOGEN.md).\n",
             "Ein `id` je Typ. Slug: Kleinbuchstaben, `ae/oe/ue/ss`, Klammern weg.\n"]
    by: dict[str, list] = {}
    for it in items:
        by.setdefault(it["typ"], []).append(it)
    labels = [("attr", "Attribute"), ("skill", "Fähigkeiten"), ("talent", "Talente"),
              ("career", "Karrieren"), ("condition", "Zustände"),
              ("qualitaet", "Qualitäten"), ("makel", "Makel"),
              ("volk", "Völker"), ("command", "Befehle")]
    for typ, label in labels:
        rows = by.get(typ, [])
        lines.append(f"\n## {label} ({len(rows)})\n")
        lines.append("| id | Name | S. | Ordner |\n|----|------|----|--------|\n")
        for it in rows:
            p = it.get("path", "—")
            if p.endswith(".md"):
                link = f"[{p}]({p})"
            else:
                link = f"[{p}]({p}/README.md)" if p else "—"
            lines.append(f"| `{it['id']}` | {it['name']} | {it.get('seite', '—')} | {link} |\n")
    (KNOW / "00-REGISTER.md").write_text("".join(lines), encoding="utf-8")

    # talent list hub
    tlines = ["# Talente – Hauptliste\n\nQuelle: S. 132–147\n\nGerüst: Name, Slug, Seite. Original folgt in Welle D.\n\n",
              "| id | Talent | S. |\n|----|--------|----|\n"]
    for t in talents_json:
        tlines.append(f"| `{t['id']}` | [{t['name']}](talente/{t['id']}/README.md) | {t['seite']} |\n")
    tlines.append("\n### Siehe auch\n\n- [Fähigkeiten](02-faehigkeiten-liste.md)\n- [Register](../00-REGISTER.md)\n")
    (KNOW / "04-faehigkeiten-talente" / "03-talente-liste.md").write_text("".join(tlines), encoding="utf-8")

    # career list hub
    clines = ["# Karrieren-Liste\n\nQuelle: S. 53–116\n\nGerüst je Karriere. Vollprofil folgt in Welle B.\n"]
    for kslug, kname, kseite, names in KLASSEN:
        clines.append(f"\n## [{kname}]({kslug}/README.md) (S. {kseite})\n\n")
        for n in names:
            clines.append(f"- [`{slug(n)}`]({kslug}/{slug(n)}/README.md) {n}\n")
    clines.append("\n### Siehe auch\n\n- [Übersicht](01-klassen-und-karrieren-uebersicht.md)\n- [Status](02-status-system.md)\n")
    (KNOW / "03-klassen-karrieren" / "03-karrieren-liste.md").write_text("".join(clines), encoding="utf-8")

    # condition hub stays content + links
    zhub = KNOW / "05-regeln" / "05-zustaende.md"
    ztxt = zhub.read_text(encoding="utf-8")
    if "zustaende/betaubt" not in ztxt:
        extra = "\n## Ordner\n\n" + "\n".join(
            f"- [{n}](zustaende/{i}/README.md)" for i, n, *_ in CONDS
        ) + "\n"
        zhub.write_text(ztxt.rstrip() + extra, encoding="utf-8")

    # attribute hub: add folder links
    ah = KNOW / "02-charaktere" / "04-attribute.md"
    at = ah.read_text(encoding="utf-8")
    if "attribute/kg/" not in at:
        extra = "\n## Einzelattribute\n\n" + "\n".join(
            f"- [`{a[0]}`](attribute/{a[0]}/README.md) {a[2]} ({a[1]})" for a in ATTRS
        ) + "\n"
        ah.write_text(at.rstrip() + extra, encoding="utf-8")

    print("items", len(items))
    print("talents", len(talents_json), "careers", len(careers_json))


if __name__ == "__main__":
    main()
