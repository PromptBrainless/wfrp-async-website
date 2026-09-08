#!/usr/bin/env python3
"""Welle B: Akademiker S. 53–60 — Originale aus Buch (visuell Schema, Text PDF)."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace/knowledge/03-klassen-karrieren/akademiker")
DATA = Path("/workspace/knowledge/data/careers.json")

SCHEMA = {
    "advokat": ["", "", "", "+", "⚔", "", "⚔", "+", "Totenkopf", "+"],
    "apotheker": ["", "", "", "+", "⚔", "Totenkopf", "+", "+", "⚔", ""],
    "gelehrter": ["", "", "", "⚔", "+", "", "⚔", "+", "+", "Totenkopf"],
    "medicus": ["", "", "", "⚔", "+", "+", "Totenkopf", "+", "⚔", ""],
    "moench": ["⚔", "", "", "+", "Totenkopf", "", "⚔", "", "+", "+"],
    "priester": ["⚔", "", "", "⚔", "+", "", "+", "", "+", "Totenkopf"],
    "technicus": ["", "Totenkopf", "⚔", "⚔", "+", "", "+", "+", "", ""],
    "zauberer": ["", "", "", "+", "⚔", "+", "⚔", "+", "+", ""],
}

PAGES = {
    "advokat": 53,
    "apotheker": 54,
    "gelehrter": 55,
    "medicus": 56,
    "moench": 57,
    "priester": 58,
    "technicus": 59,
    "zauberer": 60,
}

VOELKER = {
    "advokat": "Halbling, Hochelf, Mensch, Zwerg",
    "apotheker": "Halbling, Hochelf, Mensch, Zwerg",
    "gelehrter": "Halbling, Hochelf, Mensch, Waldelf, Zwerg",
    "medicus": "Halbling, Hochelf, Mensch, Zwerg",
    "moench": "Mensch",
    "priester": "Mensch",
    "technicus": "Halbling, Mensch, Zwerg",
    "zauberer": "Hochelf, Mensch, Waldelf",
}

NAMES = {
    "advokat": "Advokat",
    "apotheker": "Apotheker",
    "gelehrter": "Gelehrter",
    "medicus": "Medicus",
    "moench": "Mönch",
    "priester": "Priester",
    "technicus": "Technicus",
    "zauberer": "Zauberer",
}

STUFEN = {
    "advokat": [
        (1, "Student der Juristerei", "messing", 4, "h",
         "Ausdauer, Feilschen, Nachforschen, Sprache (Klassisch), Wissen (Gesetze), Wissen (Theologie), Wahrnehmung, Zechen",
         "Etikette (Gelehrte), Lesen & Schreiben, Redeschwall, Schnellleser",
         "Buch (Gesetz), Lupe"),
        (2, "Advokat", "silber", 3, "⚔",
         "Bestechen, Charme, Geheimzeichen (Gilde), Intuition, Klatsch, Sprache (Gildenzunge)",
         "Einnehmendes Wesen, Etikette (Gildenmitglieder), Kriminell, Wortgewandt",
         "Gerichtsrobe, Gildenlizenz, Schreibzeug"),
        (3, "Rechtsgelehrter", "gold", 1, "Totenkopf",
         "Kunst (Schreiben), Unterhalten (Reden halten), Einschüchtern, Wissen (1 nach Wahl)",
         "Bücherwurm, Doppelzüngig, Gerissenheit, Leidenschaftlicher Eifer",
         "Kanzlei, Assistent (Student oder Diener)"),
        (4, "Richter", "gold", 2, "Krone",
         "Besonnenheit, Wissen (1 nach Wahl)",
         "Fachwissen (Gesetze), Gebieterisch, Halbweltgröße, Wohlhabend",
         "Hammer, Pompöse Perücke"),
    ],
    "apotheker": [
        (1, "Apotheker-Lehrling", "messing", 3, "h",
         "Beruf (Apotheker), Beruf (Giftmischer), Heilen, Sprache (Klassisch), Wissen (Chemie), Wissen (Medizin), Wissen (Pflanzen), Zechen",
         "Etikette (Gelehrte), Handwerksgeschick (Apotheker), Lesen & Schreiben, Zusammenmischen",
         "Buch (leer), Heiltrank, Lederwams, Mörser und Stößel"),
        (2, "Apotheker", "silber", 1, "⚔",
         "Charme, Feilschen, Klatsch, Sprache (Gildenzunge), Wahrnehmung, Wissen (Naturwissenschaft)",
         "Etikette (Gildenmitglieder), Kriminell, Pharmazeut, Verhandlungsgenie",
         "Gildenlizenz, Handwerkszeug"),
        (3, "Apotheker-Meister", "silber", 3, "Totenkopf",
         "Anführen, Geheimzeichen (Gilde), Intuition, Nachforschen",
         "Bücherwurm, Gerissenheit, Meisterhandwerker (Apotheker), Resistenz (Gift)",
         "Buch (Apotheker), Lehrling, Werkstatt"),
        (4, "Hofapotheker", "gold", 1, "Krone",
         "Einschüchtern, Reiten (Pferd)",
         "Fachwissen (Apotheker), Kühler Kopf, Meisterhandwerker (Giftmischer), Scharfer Sinn (Geschmack)",
         "Amtliche Genehmigung, Große Werkstatt"),
    ],
    "gelehrter": [
        (1, "Student", "messing", 3, "h",
         "Feilschen, Glücksspiel, Klatsch, Nachforschen, Sprache (Klassisch), Unterhalten (Erzählen), Wissen (1 nach Wahl), Zechen",
         "Gerissenheit, Lesen & Schreiben, Trunkenbold, Zahlengenie",
         "Alkohol, Buch (je nach Wissen), Meinungen, Schreibzeug"),
        (2, "Gelehrter", "silber", 2, "⚔",
         "Beruf (1 nach Wahl), Intuition, Kunst (Schreiben), Sprache (1 nach Wahl), Wahrnehmung, Wissen (1 nach Wahl)",
         "Bücherwurm, Einnehmendes Wesen, Etikette (Gelehrte), Schnellleser",
         "Zugang zu einer Bibliothek, Abschluss"),
        (3, "Dozent", "silber", 5, "Totenkopf",
         "Einschüchtern, Sprache (1 nach Wahl), Unterhalten (Vorlesung), Wissen (1 nach Wahl)",
         "Fachwissen (1 nach Wahl), Rhetorik, Sprachbegabung, Turm der Erinnerungen",
         "Schreibtisch, Robe"),
        (4, "Professor", "gold", 1, "Krone",
         "Unterhalten (Rhetorik), Wissen (1 nach Wahl)",
         "Aufgeweckt, Fachwissen (1 nach Wahl), Magnum Opus, Meisterredner",
         "Studierzimmer"),
    ],
    "medicus": [
        (1, "Medicus-Lehrling", "messing", 4, "h",
         "Ausdauer, Bestechen, Besonnenheit, Fahren, Fingerfertigkeit, Klatsch, Heilen, Wahrnehmung",
         "Betäubender Schlag, Bücherwurm, Feldscher, Lesen & Schreiben",
         "Verbände, Heiltrank"),
        (2, "Medicus", "silber", 3, "⚔",
         "Beruf (Bader), Charme, Feilschen, Sprache (Gildenzunge), Wissen (Anatomie), Wissen (Medizin)",
         "Chirurgie, Etikette (Gildenmitglieder), Kriminell, Kühler Kopf",
         "Buch (Medizin), Gildenlizenz, Handwerkszeug (Medizin)"),
        (3, "Doktor", "silber", 5, "Totenkopf",
         "Anführen, Einschüchtern, Nachforschen, Zechen",
         "Etikette (Gelehrte), Gerissenheit, Resistenz (Krankheit), Verletzender Schlag",
         "Lehrling, Werkstatt (Medizin)"),
        (4, "Hofarzt", "gold", 1, "Krone",
         "Artistik (Tanzen), Wissen (Adelige)",
         "Etikette (Adelige), Fachwissen (Medizin), Geschickte Finger, Willensstärke",
         "Höfische Gewandung, Ernennungsurkunde"),
    ],
    "moench": [
        (1, "Novize", "messing", 1, "h",
         "Ausdauer, Besonnenheit, Beten, Heilen, Klatsch, Kunst (Kalligraphie), Unterhalten (Erzählen), Wissen (Theologie)",
         "Genügsam, Lesen & Schreiben, Segen (1 nach Wahl), Schnorrer",
         "Religiöses Symbol, Robe"),
        (2, "Mönch", "messing", 4, "⚔",
         "Beruf (Brauer), Beruf (Kräuterkundiger), Beruf (Winzer), Charme, Nachforschen, Nahkampf (1 nach Wahl)",
         "Anrufung (1 nach Wahl), Etikette (Gläubige), Feldscher, Heilige Visionen",
         "Buch (Religion), religiöse Reliquie, Handwerkszeug (1 nach Wahl)"),
        (3, "Abt", "silber", 2, "Totenkopf",
         "Anführen, Wahrnehmung, Wissen (Ort/Region), Wissen (Politik)",
         "Beherzt, Fachwissen (Theologie), Hart im Nehmen, Resistenz (1 nach Wahl)",
         "Abtei, Bibliothek (Theologie)"),
        (4, "Generaloberer", "silber", 5, "Krone",
         "Sprache (1 nach Wahl), Wissen (1 nach Wahl)",
         "Eiserner Wille, Gebieterisch, Reine Seele, Willensstärke",
         "Religiöser Orden"),
    ],
    "priester": [
        (1, "Initiat", "messing", 2, "h",
         "Athletik, Ausdauer, Besonnenheit, Beten, Intuition, Nachforschen, Wissen (Theologie), Wahrnehmung",
         "Einnehmendes Wesen, Heilige Visionen, Lesen & Schreiben, Segen (1 nach Wahl)",
         "Religiöses Symbol, Robe"),
        (2, "Priester", "silber", 1, "⚔",
         "Charme, Einschüchtern, Heilen, Klatsch, Nahkampf (Standard), Unterhalten (Erzählen)",
         "Anrufung (1 nach Wahl), Bücherwurm, Etikette (Gläubige), Redeschwall",
         "Buch (Religion), Zeremonienrobe"),
        (3, "Hohepriester", "gold", 1, "Totenkopf",
         "Anführen, Kunst (Schreiben), Unterhalten (Reden halten), Wissen (Heraldik)",
         "Hass (1 nach Wahl), Leidenschaftlicher Eifer, Scharfer Sinn (1 nach Wahl), Willensstärke",
         "Robe (mit Qualität), Religiöse Reliquie, untergeordnete Priester, Tempel"),
        (4, "Lektor", "gold", 2, "Krone",
         "Sprache (1 nach Wahl), Wissen (Politik)",
         "Fachwissen (Theologie), Meisterredner, Reine Seele, Resistenz (1 nach Wahl)",
         "Bibliothek (Theologie), untergeordnete Hohepriester"),
    ],
    "technicus": [
        (1, "Technicus-Student", "messing", 4, "h",
         "Ausdauer, Beruf (Technicus), Besonnenheit, Fernkampf (Schießpulver), Sprache (Klassisch), Wissen (Technicus), Wahrnehmung, Zechen",
         "Bastler, Lesen & Schreiben, Künstlerisch, Pulverschütze",
         "Buch (Technicus), Hammer und Eisenbolzen"),
        (2, "Technicus", "silber", 2, "⚔",
         "Ausweichen, Fahren, Fernkampf (Technicus), Nachforschen, Navigation, Sprache (Gildenzunge)",
         "Etikette (Gildenmitglieder), Handwerksgeschick (Technicus), Meisterschütze, Richtungssinn",
         "Gildenlizenz, Handwerkszeug"),
        (3, "Meistertechnicus", "silber", 4, "Totenkopf",
         "Anführen, Geheimzeichen (Gilde), Reiten (Pferd), Sprache (Khazalid)",
         "Distanzschütze, Etikette (Gelehrte), Meisterhandwerker (Technicus), Zahlengenie",
         "Werkstatt"),
        (4, "Hoftechnicus", "gold", 2, "Krone",
         "Sprache (1 nach Wahl), Wissen (1 nach Wahl)",
         "Fachwissen (Technicus), Magnum Opus, Schnelles Nachladen, Unerschütterlich",
         "Gildenlizenz, Bibliothek (Technicus), Handwerkszeug (Technicus, mit Qualität), Große Werkstatt (Technicus)"),
    ],
    "zauberer": [
        (1, "Zauberlehrling", "messing", 3, "h",
         "Ausweichen, Intuition, Kanalisieren (1 Wind), Nahkampf (Standard), Nahkampf (Stangenwaffe), Sprache (Magick), Wissen (Magie), Wahrnehmung",
         "Äthergespür, Lesen & Schreiben, Niedere Magie, Zweites Gesicht",
         "Grimoire, Kampfstab"),
        (2, "Zauberer", "silber", 3, "⚔",
         "Besonnenheit, Charme, Einschüchtern, Klatsch, Sprache (Schlachtenzunge), Sprache (1 nach Wahl)",
         "Arkane Magie (1 Arkane Lehre), Artefakt spüren, Flinke Finger, Sechster Sinn",
         "Magielizenz"),
        (3, "Meisterzauberer", "gold", 1, "Totenkopf",
         "Reiten (Pferd), Tierpflege, Schätzen, Wissen (Kriegsführung)",
         "Bedrohlich, Beidhändiger Angriff, Instinktive Aussprache, Magiegespür",
         "Lehrling, Leichtes Schlachtross, Magischer Gegenstand"),
        (4, "Erzmagier", "gold", 2, "Krone",
         "Sprache (1 nach Wahl), Wissen (1 nach Wahl)",
         "Beängstigend, Eiserner Wille, Kampfsinn, Kampfzauberer",
         "Lehrling, Bibliothek (Magie), Werkstatt (Magie)"),
    ],
}

PROSE = {}  # filled below


def clean_pdf(s: str) -> str:
    s = s.replace("W ache", "Wache").replace("W as", "Was").replace("T echnicus", "Technicus")
    s = s.replace("W ahl", "Wahl")
    s = re.sub(r"(\w)-\n", r"\1", s)
    s = re.sub(r"\n+", "\n", s)
    return s.strip()


def original_md(slug: str, prose: str) -> str:
    name = NAMES[slug]
    page = PAGES[slug]
    attrs = SCHEMA[slug]
    header = ["KG", "BF", "ST", "WI", "I", "GW", "GS", "IN", "WK", "CH"]
    row = " | ".join(attrs)
    stages = []
    for nr, titel, tier, rang, sym, faeh, tal, aus in STUFEN[slug]:
        mark = {"h": "+", "⚔": "⚔", "Totenkopf": "Totenkopf", "Krone": "Krone"}[sym]
        tier_l = {"messing": "Messing", "silber": "Silber", "gold": "Gold"}[tier]
        stages.append(
            f"### {mark} {titel} – {tier_l} {rang}\n\n"
            f"**Fähigkeiten:** {faeh}  \n"
            f"**Talente:** {tal}  \n"
            f"**Ausrüstung:** {aus}\n"
        )
    return f"""# {name} — Original

Quelle: S. {page}
Status: Original, nicht anfassen

**{name}**  
{VOELKER[slug]}

{prose}

## Karriereschema des {name if slug != 'medicus' else "Medicus'"}

Symbole wie im Buch: **+** Stufe 1 · **⚔** Stufe 2 · Totenkopf Stufe 3 · Krone Stufe 4.

| {' | '.join(header)} |
|{'|'.join(['----']*10)}|
| {row} |

## Karriereweg

{''.join(stages)}
### Siehe auch

- [Angepasst](angepasst.md)
- [Details](details.md)
- [Hub](README.md)
"""


def angepasst_md(slug: str) -> str:
    name = NAMES[slug]
    page = PAGES[slug]
    s1 = STUFEN[slug][0]
    return f"""# {name} — Projekt

Quelle der Regeln: [original.md](original.md) (S. {page})

Keine Katalogkarte. Die Karriere filtert, welche Fähigkeiten und Talente der Charakter kennen darf.

Stufe 1: **{s1[1]}**, {s1[2].capitalize()} {s1[3]}. Bogen-Keys: `klasse` = `akademiker`, `karriere` = `{slug}`, `karrierestufe` = 1.

### Befehl

- keine Katalog-ID

### Siehe auch

- [Original](original.md)
- [Details](details.md)
- [Akademiker](../README.md)
- [Karrieren-Liste](../../03-karrieren-liste.md)
- [Status](../../02-status-system.md)
"""


def details_md(slug: str) -> str:
    name = NAMES[slug]
    page = PAGES[slug]
    s1 = STUFEN[slug][0]
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
- [Akademiker](../README.md)
- [Karrieren-Liste](../../03-karrieren-liste.md)
"""


PROSE = {
    "advokat": """Du kennst dich im tückischen Rechtssystem aus, verteidigst Mandanten und verfolgst die Schuldigen.

Advokaten geben rechtliche Beratung, interpretieren die Gesetze und vertreten ihre Mandanten vor Gericht. In der Regel sind sie entweder auf die Gesetze der Provinz spezialisiert, in der sie praktizieren, oder aber auf Religionsrecht. Die meisten haben an einer Universität studiert und sind daher wohlhabend und mit guten Verbindungen ausgestattet, aber es gelingt auch immer wieder Begabten aus den unteren Schichten, sich den Weg bis in ihre Kreise zu erarbeiten. Rechtsgelehrte der Kulte werden üblicherweise von ihresgleichen ausgebildet, wobei besonders diejenigen in hohem Ansehen stehen, die von den Kulten der Verena und des Sigmar ausgebildet wurden. Einige Advokaten fungieren auch als bezahlte Mediatoren, die Streitigkeiten außerhalb der meist teuren Gerichtshöfe klären. Besonders Halblinge schätzen diese Praxis. Andere arbeiten für die Unterwelt und nutzen schamlos Gesetzeslücken aus, um ihren nur zu schuldigen Klienten Strafen zu ersparen. Weit über ihnen stehen die Rechtsgelehrten, welche die einzigen Advokaten sind, die an den höheren Gerichten in den Stadtstaaten vorsprechen dürfen und für ihre Dienste oft exorbitante Gebühren verlangen.

„Haie! Nein, schlimmer! Blutegel! Aber gewiss nicht von der Sorte, die nur die bösen Säfte heraussaugt, oh nein! Diese Blutegel saugen dir dein Vermögen aus und liefern dir dafür nicht mehr als ein schmieriges Schauspiel!“  
– Stefan Bachler, Kaufmann

„Ich interessiere mich nicht für das, was mir ein Advokat sagt, sondern einzig für das, was nach Vernunft und Gerechtigkeit richtig ist. Derartige Dinge müssen die Grundlage unserer neuen Gesetze sein.“  
– Lektorin Agatha von Böhrn, Oberste Gesetzrätin des Imperiums

Advokaten sind gut darin, Leute aus Schwierigkeiten herauszuholen, während Abenteurer gut darin sind, in eben diese hineinzugeraten. Sie können ihr Wissen um irgendwelche obskuren lokalen Gesetze nutzen, um Probleme aus der Welt zu schaffen oder ungewöhnliche Lösungswege aus üblen Schwierigkeiten zu bahnen. Alles in Allem ist es zweifellos sicherer, einen örtlichen Schurken vor Gericht festzunageln, als selbiges mit ihm in irgendeinem Keller zu veranstalten.""",
    "apotheker": """Du bist in der Alchemie und im Mischen von Tränken bewandert und erstellst und verkaufst Medizin aller Art.

Apotheker sind auf die Herstellung pharmazeutischer Medizin spezialisiert, üblicherweise Pulver, Tränke und Salben, die sie sowohl an Patienten als auch an Medici verkaufen. Ihre Werkstätten sind mit verwirrenden Aufbauten aus blubbernden Destillierkolben, überlaufenden Bechergläsern, abgenutzten Mörsern und einem Sammelsurium anderer Gerätschaften gefüllt. Einige Apotheker steigern ihre Einkünfte, indem sie auch illegale Substanzen verkaufen, von Stimulanzien für verzweifelte Studenten über halluzinogene Hexenwurzel-Pulver für gelangweilte Adelige bis hin zu verboteneren Dingen für noch verbotenere Gruppen. Solche Leute zu versorgen ist lukrativ, aber auch gefährlich. Zudem sind seltene Ingredienzien oft teuer, weshalb Apotheker häufig Geldprobleme haben und Reisen in die Wildnis antreten müssen, um ihre eigenen Ingredienzien zu sammeln. Viele schließen sich immer wieder Expeditionen, Söldnern oder dem Militär an, um etwas dazuzuverdienen.

„Halte nach dem Symbol eines weißen Mörsers mit schwarzem Stößel Ausschau. Frag nicht bei irgendwem ohne dieses Symbol nach irgendetwas für uns, denn dann wirst du der Wache gemeldet. Und noch ein gut gemeinter Rat, Kleiner: Hau nie unsere Apotheker übers Ohr, denn sonst wirst du dich für den Rest deines Lebens fragen müssen, ob dein nächstes Bier dein letztes sein wird.“  
– Die ungesehene Käthe, Assassine

„Menschliche Alchemie? Die ist nicht nur genauso so schäbig wie ihre Architektur, sondern bringt dich auch genauso leicht um! Ich habe nach einer harten Nacht nach einem Magentonikum gefragt und bin danach eine Woche lang kaum von der Latrine gekommen!“  
– Thorica Norrasdotr, zwergische Kauffrau

Der Druck der Medicus-Gilden sorgt dafür, dass die meisten Städte Apothekern verbietet, offiziell Medizin zu praktizieren, doch in Abenteurergruppen können Apotheker mit Leichtigkeit die Rolle eines Heilers übernehmen. Sie sind in dieser Rolle äußerst nützlich und vielseitig, denn sie können zudem auch gefährliche und ungewöhnliche Substanzen identifizieren, über die ihre Gruppe möglicherweise stolpert, und sie in etwas Nützliches verwandeln.""",
    "gelehrter": """Du widmest dein Leben der Erlangung und Vertiefung von Wissen, wohin auch immer die Suche danach dich führen wird.

Gelehrte studieren meist an einer der höheren Lehranstalten der Alten Welt, unter denen die Universität von Altdorf als herausragend gilt. Die meisten spezialisieren sich auf ein oder zwei Fachgebiete und viele lernen grade genug, um irgendwo eine Anstellung zu finden oder um etwas zu haben, über das man in feiner Gesellschaft plaudern kann. Ärmere Gelehrte arbeiten als Schreiber und verlesen und verfassen Briefe und Schriftstücke, denn der Großteil der Bevölkerung des Imperiums kann weder lesen noch schreiben. Andere werden Hauslehrer und unterrichten die Kinder der Wohlhabenden.

Die begnadeten Meister ihrer Profession werden an die Universitäten geladen, um akademische Debatten zu führen und als Professoren hunderte von Studenten zu unterrichten. Zwerge und Elfen werden nur selten an Lehrinstitutionen des Imperiums beschäftigt, wobei man immer wieder Gelehrte dieser Völker trifft, die auf der Suche nach esoterischem Wissen das Imperium durchreisen.

„Keiner von uns hielt sonderlich viel von ihr. Der Hauptmann hatte sie in irgendeiner Bibliothek in Altdorf aufgelesen. Sosber hieß sie und sie blieb für sich selbst. Eigentlich hatte sie die Nase immer in irgendwelchen Büchern. Aber dann sind wir am Ende schließlich auf die Leichenreißer getroffen und während ich so manchen sogenannten Krieger rennen sah, blieb sie standhaft. Ihre sonst so leise Stimme klang hart wie Stahl, als sie uns sagte, wohin wir schlagen mussten. Nicht auf die Köpfe, wie man denken sollte, sondern auf die Körper. Eisen mag diese Biester gefällt haben, doch erst Wissen machte diesen Sieg möglich.“  
– Oskar Reisdorf, Söldner

Arme Gelehrte, die keine Anstellung als Hauslehrer finden oder wollen, haben oft Schwierigkeiten, sich die notwendigen Mittel für ihre Studien zu beschaffen. Einige von ihnen durchsuchen die finsteren Winkel der Welt nach verlorenen Geheimnissen und uralten Schriften. Andere lassen sich von Abenteurern für Expeditionen anheuern, bei denen ihr Wissen praktische Anwendung findet.

Der Gelehrte ist eine nützliche Karriere mit Zugriff auf seltene Wissen-Fähigkeiten und für den SL ein guter Weg, den Spielern Informationen zukommen zu lassen. Wenn sie mit gesundem Menschenverstand gespielt werden, dann können sie ein gutes Gegengewicht zur Tendenz kriegerischer Karrieren darstellen, jedes Problem frontal und mit der Klinge anzugehen. Gelehrte können ihr Wissen zudem nutzen, um Rätsel zu lösen oder auf ungewöhnliche Strategien und Lösungswege zu kommen.""",
    "medicus": """Du praktizierst die Kunst der Medizin und ringst darum, Leben zu retten, mit ruhiger Hand und stabilem Magen.

Medici studieren die Symptome eines Patienten und leiten dann die etablierte medizinische und chirurgische Behandlung ein. Die Kunst des Heilens mag alt und vielfach den elfischen Praktiken entliehen sein, doch als Wissenschaft ist die Medizin noch relativ neu und man begegnet ihr hier und dort noch immer mit Misstrauen. Dank der vielen Probleme, die das Imperium in der Vergangenheit mit Nekromantie hatte, und auch wegen der vom Kult des Morr verbreiteten Glaubensregeln, ist es verboten, Leichen zu studieren oder an ihnen zu üben. Dadurch ist es schwer, anatomisches Wissen und chirurgische Routine zu vermitteln. Zudem leidet die Reputation der Medizin noch immer an zahllosen Schwindlern, die ‚Universaltoniken‘ verkaufen, die mehr Schaden anrichten als Nutzen bringen. Medici lernen ihre Kunst an einer Universität oder als Lehrling eines Gilden-Medicus. Die billigste medizinische Hilfe ist bei Hinterhof-Medici zu bekommen, die man Bader nennt und deren Ausbildung oft wenig formal ist. Gute Chirurgen mit stabilem Magen werden gern von den Armeen der Provinzen rekrutiert, während die berühmtesten Medici exklusiv für reiche Kaufleute und den Adel arbeiten.

„Kommt zum Neuber, wenn es Glieder zu entfernen gibt. Ich nehme euch Arme in Sekunden ab! Ich säge so ruhig, dass du nicht mal aus dem Schlaf erwachst. Meine Arbeit ist so gut, dass man das fehlende Glied nicht mal vermisst!“  
– Gotthard Neuber, Bader

„Hütet euch vor den Groschen-Doktern.“  
– Reikländisches Sprichwort, das vor billigen Ärzten warnt.

„Das sind allesamt Bastarde! Ich darf dir nicht mal einen ordentlichen Aderlass geben, ohne dass die sich aufregen. ‚Lizenzloses Praktizieren von Medizin‘, am Arsch! Ich weiß, dass du dir deren Dienste nicht leisten kannst, Liebes. Also, trink einfach diesen Tee hier, ja? Was? Nein, das ist nur Tee. Ganz bestimmt. Nur Tee. Und wenn du dich danach zufällig besser fühlen solltest, dann dankst du Shallya, in Ordnung?“  
– Jana Palner, Teilzeit-Medizinerin

Die Zunftgebühren für Gilden-Medici sind berüchtigt, was manchen jungen Medicus ohne festen Patientenstamm dazu treibt, sich alternative Einkommensquellen zu suchen. Einige Medici suchen unentwegt nach besseren Behandlungsmethoden und neuer Medizin, was sie nicht selten weit von den Städten wegführt. Andere wollen ihr anatomisches Wissen erweitern, indem sie frische Wunden untersuchen und versorgen, und das macht man am besten, indem man mit Abenteurern reist.""",
    "moench": """Du hast dich dem Dienst an deiner Gottheit verschrieben und in Gelübden geschworen, dein Leben in ihrem Dienst zu verbringen.

Mönche und Nonnen sind Mitglieder religiöser Orden, die üblicherweise zurückgezogen in Abteien, Konventen oder Klöstern leben. Meist erheben sie sich schon vor der Sonne zum Morgengebet, ehe sie die Felder bestellen, die Kranken versorgen oder alte Manuskripte kopieren, um sie zu bewahren. Pilgereide lassen einige von ihnen durch das Imperium reisen, während andere Gelübde zum Dienst an der Allgemeinheit abgelegt haben und unter die Menschen gehen, um diesen spirituell beizustehen. Auch gläubige Einsiedler und die Hüter religiöser Schreine werden vom Volk des Imperiums als Nonnen oder Mönche bezeichnet. Viele Mönche erlernen wertvolle Handwerke wie die des Brauers, Kräuterkundigen oder Winzers. Äbte nutzen diese Fähigkeiten ihrer Untergebenen gern, um sich das Wohlwollen und die Zuwendungen des örtlichen Adels zu sichern. Die Führer besonders großer oder kriegerischer Orden können zu beachtlichem Einfluss gelangen, nicht nur im eigenen Kult, sondern auch im Bezug auf die Herrscher ihrer Provinz. Mehr über die Religionen und unterschiedlichen Orden findest du in Kapitel 7: Religion und Glaube.

„Sie kamen hierher und dachten, dass es leicht sein würde, ein paar arme, hilflose Brüder zu erschlagen und uns unsere Reliquien zu stehlen. Ich bitte Morr darum, nicht zu streng über die sieben Banditen zu richten, die wir heute bestatten, da Bruder Hildwin schon genug Leiden über sie gebracht hat.“  
– Abt Ernst Halfhauser

„Kommt schnell! Die Prozession der Schwestern des Glaubens und der Keuschheit zieht gleich durch die Straßen. Ich will versuchen, ein paar Groschen zu ergattern, die von ihren Dornen abprallen. Das bringt Glück für das ganze Jahr!“  
– Bengt, Altdorfer Straßenjunge

Wenn ein religiöser Orden schreckliche Geheimnisse oder die Fragmente einer Prophezeiung entdeckt, dann kann es sein, dass seine Führung handelt und Schwestern und Brüder auf Reisen schickt. Abteien, die an Pilgerstrecken liegen, werden ebenfalls häufig Ordensmitglieder ausschicken, um die Pilger zu beschützen, die entlang der heiligen Straßen durch das Imperium ziehen. Und dann gibt es da auch immer Brüder oder Schwestern, die die Welt durchwandern und sich dabei immer wieder in Abenteuer stürzen.""",
    "priester": """Du verbreitest das Wort deiner Gottheit und kümmerst dich um die spirituellen Bedürfnisse des Volkes.

Priester stehen den Gemeinden der Gläubigen in der Alten Welt vor. Viele tun dies von einem bestimmten Tempel aus. Andere wandern umher und versuchen so, Gläubige zu erreichen, die keinen festen Tempel besuchen können oder wollen. Man erwartet von ihnen, die Ideale ihrer Religion zu verkörpern, wobei diese höchst unterschiedlich sein können, abhängig von ihrem Gott. Hohepriester stehen Tempeln vor und beaufsichtigen die dortigen Laien und Geistlichen. Genau wie Lektoren werden auch sie häufig von den Herrschenden um Rat gebeten und sind nicht selten feste Größen in der lokalen Politik. Die Priester haben vielfältige Pflichten, die stets von ihrem Gott abhängen. Priester des Manann segnen zum Beispiel neue Schiffe, während die Priesterinnen der Shallya die Kranken und Verwundeten versorgen. In ihrer Gesamtheit decken die Kulte so nahezu jeden Lebensbereich im Imperium ab. Mehr über die Religionen und unterschiedlichen Orden findest du in Kapitel 7: Religion und Glaube.

„Wenn es um klugen Rat geht, suche ich einen Priester der Verena. Für alles andere wende ich mich an einen Priester des Ranald.“  
– Werner Losch, Kaufmann

„Die Shallyanerin, die selbst kaum mehr als ein Kind war, hat einfach die Stirn meines kleinen Anton berührt, etwas geflüstert und dann hörte das Schreien auf. Er hat mich angelächelt, zum ersten Mal seit Tagen. Das werde ich nie vergessen. Oh, er starb bald danach, aber ohne Schmerzen. Ohne Schmerzen.“  
– Sabine Schmidt, Fischhändlerin

„So höret, denn es gibt nichts zu fürchten. Die Hexennacht kommt jedes Jahr. Wir müssen nur den Herrn des Todes darum anflehen, uns zu beschützen. Also kommt in der Mitternachtsstunde zu mir und wir rufen gemeinsam MORR! MORR! MORR!“  
– Vater Wilhelm Abgott, Priester des Morr

Einige in Tempeln lebende Priester suchen gern nach Anlässen, die Reisen rechtfertigen. Wenn Mitglieder der Gemeinde Verstörendes zu berichten haben, kann es nötig werden, dem selbst nachzugehen. Nicht wenige Hohepriester haben mit der Zeit das Gefühl, sich durch ihre administrativen Aufgaben zu weit von dem einfachen Leben inmitten des Volkes entfernt zu haben, das sie zu Beginn ihrer Zeit im Kult führten, weshalb sie sich auf lange Pilgerreisen begeben.""",
    "technicus": """Du erschaffst Maschinen und Konstruktionen, die ebenso nützlich wie bizarr und allzu oft auch reichlich tödlich sind.

Technici entwerfen und bauen mechanische Gerätschaften oder so komplexe Strukturen wie Brücken, Kanäle oder Festungsanlagen. Die meisten wurden formell ausgebildet, sei es bei der Gilde der Zwergenmaschinisten oder an solch fortschrittlichen Einrichtungen wie der Imperialen Technicusakademie zu Altdorf, doch auch Autodidakten sind nichts Unbekanntes. Menschliche Technici schätzen Innovation und Entdeckungen, während die Maschinisten der Zwerge eher auf traditionelle und erprobte Entwürfe setzen, die von Generation zu Generation weitergegeben wurden. Im Bergbau können Technici lukrative Anstellungen finden, genau wie in den Armeen des Imperiums, in denen sie zur Wartung von Kriegsmaschinen, als leitende Mineure oder beim Bau von Behelfsbrücken eingesetzt werden. Meistertechnici sind häufig mit der Aufsicht über ambitionierte Großprojekte betraut, während Hoftechnici die vertrauenswürdigsten Mitglieder ihrer Zunft sind. An ihnen ist es, solch prestigeträchtige imperiale Aufgaben wie die Konstruktion der Dampfradschleusen zu übernehmen, mittels derer die Reisezeiten auf den Kanälen des Vorberglandes revolutioniert wurden.

„Was es macht? Nun, es soll das Huhn dort rupfen, Kleinnase. Halte besser Abstand!“  
– Wolfgang Kugelschreiber, Erfinder

„Meistertechnicus Volker von Meinkopt fand seine Inspiration, als er dabei zusah, wie Studenten der Imperialen Artillerieschule eine Kanone nachluden. Dabei hatte er eine Vision. Mehr Läufe bedeuten mehr Schüsse, bedeuten größere Tödlichkeit. Schon bald stellte er die erste Bündelmuskete vor, 'Von Meinkopts wirbelnde Kavalkade des Todes', gefolgt von der ersten Bündelpistole 'Von Meinkopts federgetriebener Pulvermechanismus zur Entfesselung eines schädlichen Bleihagels'. Da er sich aber nicht auf seinen Lorbeeren ausruhen wollte, erschuf er dann auch noch die enorme neunläufige Höllenfeuer-Salvenkanone, die für den Feind absolut tödlich ist, ebenso wie für manch eine Geschützbesatzung.“  
– aus »Große Technici des Imperiums«, von Freifrau Theodora von Holzenauer, Technicus und Schriftstellerin

Einige Technici lockt es in die alten Wehrstädte der Zwerge, um diese heute meist verlassenen Orte zu erkunden, denn in diesen schlummern so manche alten Geheimnisse der alten Baumeister. Jene, die sich in die Tiefen wagen, finden mitunter jahrtausendealte Wunderdinge, die nicht selten von Goblins oder Skaven für deren eigene ruchlose Belange missbraucht wurden. Ebenso bemerkenswert sind die steinernen Himmelsbrücken, die sich über die Wehrstädten erstrecken, und von denen manche meilenweit reichen. Sie sind wahre Meisterwerke vergangener Baukunst, die einst die blühenden Zwergenansiedlungen mit den Höfen und Festungen ihres Umlandes verbanden.""",
    "zauberer": """Du bändigst mächtige und gefährliche Magie, doch obwohl du dies auf legale Weise tust, misstrauen dir die Bewohner des Imperiums und fürchten dich.

Zauberer kanalisieren die acht ‚Winde der Magie‘, die nur die Magiekundigen zu sehen vermögen, und formen daraus machtvolle Zauber. Um in legaler Weise im Imperium Magie wirken zu dürfen, muss ein Mensch die Edikte der Imperialen Magie befolgen und zu einem der acht Magischen Orden gehören, deren Akademien sich in Altdorf befinden. Jeder dieser Orden widmet sich exklusiv der Nutzung eines der magischen Winde, da Magister nur einen davon sicher beherrschen können. Nach ihrem Abschluss dürfen sich Absolventen Magister oder Magistra nennen und dem Imperium dienen. Die Magister studieren und praktizieren danach eigenverantwortlich, wobei sie ihre Magie laut der Edikte der Imperialen Magie außerhalb der Akademien nur zur Verteidigung des eigenen Lebens oder im Kampf gegen die Feinde des Imperiums einsetzen dürfen. Viele Magister schließen sich den Heeren der Provinzen an. Zwar begegnet man ihnen auch dort mit Misstrauen, doch niemand kann bestreiten, dass sie auf dem Schlachtfeld äußerst effektiv sind.

„Mir ist egal, was sie für Versprechungen machen oder zu welchem Orden sie gehören. Sie sind allesamt gefährliche Abscheulichkeiten! Ich werde mich weiter dafür einsetzen, sie allesamt im Namen Sigmars zu vernichten, zu unser aller Schutz.“  
– Reikhardt Mair, Hexenjäger

Viele Magister verlassen die Akademie ihres Ordens mit hohen Schulden, denn ihre Ausbildung war häufig teuer. Diese Zauberer sind häufig bemüht, möglichst rasch Anstellung zu finden, oder sie versuchen sich an Abenteuern zu Land oder zur See, in der Hoffnung, ihr Glück zu machen und seltene Relikte, Artefakte oder verloren geglaubte Folianten mit magischem Wissen zu finden. Gerade junge Zauberer sind häufig bestrebt, bei Reisen im Imperium ihre Fähigkeiten zu erproben und dabei jede Gefahr zur Strecke zu bringen, die die Bewohner eines Ortes bedrohen mag.

Zauberer sind als Charaktere ideal geeignet, um einer Gruppe etwas mehr Feuerkraft zu geben. Doch es kann für neue Spieler abschreckend wirken, sich zusätzlich mit den Regeln für Zauberei beschäftigen zu müssen. Daher sollte es dem SL bewusst sein, dass solche Spieler am Anfang ein wenig zusätzliche Unterstützung brauchen können, damit sichergestellt ist, dass sie die Regeln richtig verstehen und alle Spaß daran haben. Du wählst deinen Wind, wenn du das Talent Arkane Magie erwirbst. Mehr zum Thema Zauberei findest du in Kapitel 8: Magie.""",
}


def main() -> None:
    for slug in NAMES:
        d = ROOT / slug
        d.mkdir(parents=True, exist_ok=True)
        (d / "original.md").write_text(original_md(slug, PROSE[slug]), encoding="utf-8")
        (d / "angepasst.md").write_text(angepasst_md(slug), encoding="utf-8")
        (d / "details.md").write_text(details_md(slug), encoding="utf-8")
        print("wrote", slug)

    hub = ROOT / "README.md"
    links = "\n".join(f"- [{NAMES[s]}]({s}/README.md) — S. {PAGES[s]}" for s in NAMES)
    hub.write_text(
        f"""# Akademiker

Quelle: S. 53–60

Klasse. Acht Karrieren.

{links}

- [Klassen-Übersicht](../01-klassen-und-karrieren-uebersicht.md)
- [Karrieren-Liste](../03-karrieren-liste.md)
""",
        encoding="utf-8",
    )

    raw = Path("/workspace/knowledge/03-klassen-karrieren/_roh/akademiker-s53-60.md")
    raw.write_text(
        "# Akademiker — Roh S. 53–60\n\nQuelle: GRW 2. Auflage. Nicht umschreiben. Einzeloriginale in den Karriereordnern.\n",
        encoding="utf-8",
    )

    data = json.loads(DATA.read_text(encoding="utf-8"))
    voelker_map = {
        "advokat": ["halbling", "hochelf", "mensch", "zwerg"],
        "apotheker": ["halbling", "hochelf", "mensch", "zwerg"],
        "gelehrter": ["halbling", "hochelf", "mensch", "waldelf", "zwerg"],
        "medicus": ["halbling", "hochelf", "mensch", "zwerg"],
        "moench": ["mensch"],
        "priester": ["mensch"],
        "technicus": ["halbling", "mensch", "zwerg"],
        "zauberer": ["hochelf", "mensch", "waldelf"],
    }
    by_id = {c["id"]: c for c in data["careers"]}
    for slug in NAMES:
        c = by_id[slug]
        c["seite"] = PAGES[slug]
        c["voelker"] = voelker_map[slug]
        c["original"] = f"03-klassen-karrieren/akademiker/{slug}/original.md"
        c["stufen"] = [
            {
                "nr": nr,
                "name": titel,
                "tier": tier,
                "rang": rang,
            }
            for nr, titel, tier, rang, *_ in STUFEN[slug]
        ]
        c["stufen"][0]["talente"] = [
            t.split("(")[0].strip().lower().replace(" ", "_").replace("&", "und").replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss")
            for t in STUFEN[slug][0][6].split(",")
        ]
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("json ok")


if __name__ == "__main__":
    main()
