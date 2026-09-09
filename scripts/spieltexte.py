#!/usr/bin/env python3
"""Baut copy/SPIELTEXTE.md + copy/SPIELTEXTE.json aus dem heutigen Stand."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_MD = ROOT / "copy" / "SPIELTEXTE.md"
OUT_JSON = ROOT / "copy" / "SPIELTEXTE.json"

# (id, section, wo, datei, feld, text)
# id bleibt stabil, damit Rückläufer wiedergefunden werden.
UI: list[tuple[str, str, str, str, str, str]] = [
    ("T-001", "Lobby", "kleine Zeile über dem Titel", "src/routes/index.tsx", "kicker", "Warhammer Fantasy Roleplay"),
    ("T-002", "Lobby", "Titel", "src/routes/index.tsx", "titel", "Die Frist"),
    (
        "T-003",
        "Lobby",
        "Einleitung unter dem Titel",
        "src/routes/index.tsx",
        "lead",
        "Willkommen in Drosselau, einem Marktflecken am Nebenfluss der Reik, unter dem Schutz Sigmars. Fünf Karten liegen bereit für dich. Wähle ein Gesicht — von diesem Moment an siehst du die Stadt nur noch mit diesen Augen. Der Spielleiter führt die Regie im Hintergrund, sitzt aber nicht mit am Tisch.",
    ),
    ("T-004", "Lobby", "Abschnitt bestehende Karten", "src/routes/index.tsx", "abschnitt-karte", "Eine Karte nutzen"),
    ("T-005", "Lobby", "Abschnitt neue Karte", "src/routes/index.tsx", "abschnitt-neu", "Neue Karte"),
    ("T-006", "Lobby", "Link Zufallskarte", "src/routes/index.tsx", "link-wuerfeln", "Würfeln, nur Name eintragen"),
    ("T-007", "Lobby", "Link Erschaffung", "src/routes/index.tsx", "link-erschaffung", "Einen Charakter erschaffen"),
    ("T-008", "Lobby", "Link Pult", "src/routes/index.tsx", "link-pult", "Zum Pult des Spielleiters"),
    ("T-010", "Karte", "Titel der Zufallskarte", "src/routes/karte.tsx", "titel", "Neue Karte"),
    (
        "T-011",
        "Karte",
        "Erklärung unter dem Titel",
        "src/routes/karte.tsx",
        "lead",
        "Das Buch würfelt Volk, Karriere und Werte für dich. Du gibst dem Ergebnis nur noch einen Namen — das Gesicht hinter den Zahlen.",
    ),
    ("T-012", "Karte", "Button neu würfeln", "src/routes/karte.tsx", "noch-einmal", "Noch einmal würfeln"),
    ("T-013", "Karte", "Feld Name", "src/routes/karte.tsx", "feld-name", "Name"),
    ("T-014", "Karte", "Feld Herkunft", "src/routes/karte.tsx", "feld-herkunft", "Herkunft"),
    ("T-015", "Karte", "Feld Gott", "src/routes/karte.tsx", "feld-gott", "Gott"),
    ("T-016", "Karte", "Platzwahl", "src/routes/karte.tsx", "platzwahl", "Welchen Platz nimmst du?"),
    ("T-017", "Karte", "freier Sitz", "src/routes/karte.tsx", "freier-platz", "Freier Platz"),
    ("T-018", "Karte", "belegter Sitz (davor: Statt NAME)", "src/routes/karte.tsx", "statt", "Statt"),
    ("T-020", "Tisch", "ohne Karte, Titel", "src/components/game/PlayScreen.tsx", "wer-sitzt", "Wer sitzt?"),
    (
        "T-021",
        "Tisch",
        "ohne Karte, Erklärung",
        "src/components/game/PlayScreen.tsx",
        "wer-sitzt-lead",
        "Wähle zuerst eine Karte. Dann nimmst du am Tisch Platz — und siehst die Welt mit den Augen, für die du dich entschieden hast.",
    ),
    ("T-022", "Tisch", "ohne Karte, Link zurück", "src/components/game/PlayScreen.tsx", "zur-auswahl", "Zur Auswahl"),
    ("T-023", "Tisch", "weitere Handlungen, Drawer-Titel", "src/components/game/PlayScreen.tsx", "weitere", "Weitere Handlungen"),
    ("T-024", "Türen", "Tür 1", "src/components/game/Doors.tsx", "tisch", "Tisch"),
    ("T-025", "Türen", "Tür 2", "src/components/game/Doors.tsx", "blatt", "Blatt"),
    ("T-026", "Türen", "Tür 3", "src/components/game/Doors.tsx", "journal", "Journal"),
    ("T-027", "Türen", "Tür 4", "src/components/game/Doors.tsx", "pult", "Pult"),
    ("T-028", "Türen", "aria der Leiste", "src/components/game/Doors.tsx", "aria", "Türen"),
    (
        "T-030",
        "Frist",
        "Band über dem Faden",
        "src/components/game/FristBand.tsx",
        "kein-zug",
        "Es gibt keine Zugreihenfolge. Alle dürfen handeln, bis die Frist abgelaufen ist.",
    ),
    ("T-031", "Frist", "wenn alle Absichten da sind", "src/components/game/FristBand.tsx", "alle-liegen", "Alle Absichten liegen bereit."),
    ("T-032", "Frist", "offen-Prefix (danach Namen)", "src/components/game/FristBand.tsx", "offen", "Offen:"),
    ("T-033", "Kopf", "Frist abgelaufen", "src/components/game/CharHead.tsx", "frist-um", "Frist um"),
    ("T-034", "Kopf", "Rolle SL", "src/components/game/CharHead.tsx", "rolle-sl", "Spielleiter"),
    ("T-035", "Kopf", "Rolle Spieler Fallback", "src/components/game/CharHead.tsx", "rolle-spieler", "Spieler"),
    ("T-036", "Kopf", "aria Blatt öffnen", "src/components/game/CharHead.tsx", "blatt-oeffnen", "Blatt öffnen"),
    ("T-037", "Kopf", "aria Bogen der Stimme (SL)", "src/components/game/CharHead.tsx", "bogen-stimme", "Bogen der Stimme"),
    ("T-038", "Kopf", "Stat LP", "src/components/game/CharHead.tsx", "stat-lp", "LP"),
    ("T-039", "Kopf", "Stat Glück", "src/components/game/CharHead.tsx", "stat-glueck", "Glück"),
    ("T-040", "Kopf", "Stat Geld", "src/components/game/CharHead.tsx", "stat-geld", "Geld"),
    ("T-041", "Kopf", "SL sieht Stimme", "src/components/game/CharHead.tsx", "naechste-zeile", "Nächste Zeile trägt"),
    ("T-050", "Faden", "Filter Alles", "src/components/game/Leben.tsx", "filter-alle", "Alles"),
    ("T-051", "Faden", "Filter Welt", "src/components/game/Leben.tsx", "filter-welt", "Welt"),
    ("T-052", "Faden", "Filter Absicht", "src/components/game/Leben.tsx", "filter-intent", "Intention"),
    ("T-053", "Faden", "Filter Wurf", "src/components/game/Leben.tsx", "filter-wurf", "Wurf"),
    ("T-054", "Faden", "Filter Ereignis", "src/components/game/Leben.tsx", "filter-ereignis", "Ereignis"),
    ("T-055", "Faden", "Filter SL", "src/components/game/Leben.tsx", "filter-sl", "SL"),
    ("T-056", "Faden", "Filter System", "src/components/game/Leben.tsx", "filter-system", "System"),
    ("T-057", "Faden", "Suche", "src/components/game/Leben.tsx", "suche", "Im Faden suchen"),
    ("T-058", "Faden", "leer, Szene offen", "src/components/game/Leben.tsx", "leer-offen", "Noch liegt nichts im Faden. Die Szene wartet."),
    ("T-059", "Faden", "leer, Szene zu, SL", "src/components/game/Leben.tsx", "leer-zu-sl", "Die Szene ist geschlossen. Öffne eine Gasse im Pult."),
    (
        "T-060",
        "Faden",
        "leer, Szene zu, Spieler",
        "src/components/game/Leben.tsx",
        "leer-zu-spieler",
        "Die Szene ist geschlossen. Der Spielleiter öffnet als Nächstes eine Gasse.",
    ),
    ("T-061", "Faden", "Zeitstempel vor der Uhr", "src/components/game/Leben.tsx", "auftakt", "Auftakt"),
    ("T-062", "Faden", "geheim-Markierung", "src/components/game/Leben.tsx", "geheim", "geheim"),
    ("T-063", "Faden", "Wurf-Aufforderung Titel", "src/components/game/Leben.tsx", "dein-wurf", "Dein Wurf"),
    (
        "T-064",
        "Faden",
        "Wurf-Aufforderung Text (Name folgt im Satz davor)",
        "src/components/game/Leben.tsx",
        "wurf-erklaerung",
        "Der Spielleiter hat {name} zum Wurf aufgefordert. Das Ergebnis erscheint im Anschluss im Faden.",
    ),
    ("T-065", "Faden", "SL schreibt, Kicker", "src/components/game/Leben.tsx", "sl-schreibt", "SL schreibt ins Leben"),
    (
        "T-066",
        "Faden",
        "SL schreibt, Platzhalter Körper",
        "src/components/game/Leben.tsx",
        "placeholder-welt",
        "Was die Welt gerade tut. Spieler sehen diesen Eintrag — außer, er ist als geheim markiert.",
    ),
    ("T-067", "Faden", "Checkbox nur SL", "src/components/game/Leben.tsx", "nur-sl", "Nur SL"),
    ("T-068", "Faden", "Button Eintragen", "src/components/game/Leben.tsx", "eintragen", "Eintragen"),
    ("T-069", "Faden", "Button Würfeln", "src/components/game/Leben.tsx", "wuerfeln", "Würfeln"),
    (
        "T-080",
        "Handeln",
        "Wurf-Erklärung Spieler",
        "src/components/game/Composer.tsx",
        "w100",
        "Ein W100 entscheidet über Erfolg oder Misserfolg. Was daraus in der Szene wird, erzählst du im Anschluss selbst.",
    ),
    (
        "T-081",
        "Handeln",
        "Absicht liegt beim SL",
        "src/components/game/Composer.tsx",
        "liegt-sl",
        "Deine Absicht liegt jetzt beim Spielleiter. Warte auf das Ende der Frist — oder auf die Aufforderung zu einem Wurf.",
    ),
    (
        "T-082",
        "Handeln",
        "eigene Absicht liegt, andere dürfen",
        "src/components/game/Composer.tsx",
        "liegt-gruppe",
        "Deine Absicht liegt bereit. Die anderen dürfen noch. Kein Zug — die Frist hält den Tisch zusammen.",
    ),
    ("T-083", "Handeln", "leerer Platz", "src/components/game/Composer.tsx", "kein-bogen", "Auf diesem Platz liegt noch kein Bogen."),
    (
        "T-084",
        "Handeln",
        "Link von leerem Platz",
        "src/components/game/Composer.tsx",
        "link-wuerfeln",
        "Würfeln, nur Name eintragen",
    ),
    (
        "T-085",
        "Handeln",
        "Szene zu",
        "src/components/game/Composer.tsx",
        "gasse-zu",
        "Die Gasse liegt zu. Der Spielleiter entscheidet, welche Tür sich als Nächstes öffnet.",
    ),
    ("T-086", "Handeln", "Chip-Frage Spieler", "src/components/game/Composer.tsx", "was-tust-du", "Was tust du?"),
    ("T-087", "Handeln", "Chip-Frage SL für Stimme", "src/components/game/Composer.tsx", "fuer-who", "Für {who}"),
    (
        "T-088",
        "Handeln",
        "Hinweis erste Chips",
        "src/components/game/Composer.tsx",
        "erst-ort",
        "Erst den Ort wählen. Dann eine Absicht — ausgegraute Karten bleiben sichtbar, mit einem Grund.",
    ),
    ("T-089", "Handeln", "Chip Weitere", "src/components/game/Composer.tsx", "weitere", "Weitere"),
    ("T-090", "Handeln", "Glück anderer wirft", "src/components/game/Composer.tsx", "glueck-fremd", "{name} darf Glück ausgeben. Das entscheidet, wer geworfen hat."),
    ("T-091", "Handeln", "Glück eigene Frage", "src/components/game/Composer.tsx", "glueck-frage", "Glück ausgeben?"),
    ("T-092", "Handeln", "Glück wiederholen", "src/components/game/Composer.tsx", "wurf-wiederholen", "Wurf wiederholen"),
    ("T-093", "Handeln", "Glück +1 EG", "src/components/game/Composer.tsx", "plus-eg", "+1 EG"),
    ("T-094", "Handeln", "Glück behalten", "src/components/game/Composer.tsx", "behalten", "Behalten"),
    ("T-095", "Handeln", "SL: Spieler würfelt", "src/components/game/Composer.tsx", "spieler-wuerfelt", "Spieler würfelt"),
    ("T-096", "Handeln", "SL: in Vertretung", "src/components/game/Composer.tsx", "vertretung", "In Vertretung"),
    ("T-097", "Handeln", "SL: ohne Wurf gelten", "src/components/game/Composer.tsx", "ohne-wurf", "Ohne Wurf"),
    ("T-098", "Handeln", "SL: nein", "src/components/game/Composer.tsx", "nein", "Nein"),
    ("T-099", "Handeln", "Schwierigkeit Label", "src/components/game/Composer.tsx", "schwierigkeit", "Schwierigkeit"),
    ("T-100", "Handeln", "Cast Welt", "src/components/game/Composer.tsx", "welt", "Welt"),
    ("T-101", "Handeln", "Placeholder Welt tut", "src/components/game/Composer.tsx", "placeholder-welt", "Was die Welt tut"),
    ("T-102", "Handeln", "Placeholder Stimme", "src/components/game/Composer.tsx", "placeholder-stimme", "Was {who} sagt oder tut"),
    ("T-103", "Handeln", "Button Ins Leben", "src/components/game/Composer.tsx", "ins-leben", "Ins Leben"),
    (
        "T-110",
        "Glück",
        "Modal Erklärung",
        "src/components/game/FortuneModal.tsx",
        "erklaerung",
        "Nur direkt nach dem eigenen Wurf einsetzbar. Ohne Antwort gilt er als nicht ausgegeben.",
    ),
    ("T-111", "Glück", "Modal Titel", "src/components/game/FortuneModal.tsx", "titel", "Glück"),
    (
        "T-120",
        "Kartenleiste",
        "Wurf steht aus",
        "src/components/game/IntentBar.tsx",
        "wurf-aus",
        "Dein Wurf steht aus",
    ),
    (
        "T-121",
        "Kartenleiste",
        "Wurf Erklärung",
        "src/components/game/IntentBar.tsx",
        "w100",
        "Ein W100 entscheidet gegen die angesagte Zielzahl. Was das Ergebnis bedeutet, deutet der Spielleiter im Anschluss.",
    ),
    (
        "T-122",
        "Kartenleiste",
        "Intention beim SL",
        "src/components/game/IntentBar.tsx",
        "liegt-sl",
        "Deine Absicht liegt beim Spielleiter. Warte auf das Ende der Frist — oder auf die Aufforderung zu einem Wurf.",
    ),
    (
        "T-123",
        "Kartenleiste",
        "keine Karte gewählt",
        "src/components/game/IntentBar.tsx",
        "waehle",
        "Wähle eine Karte. Ausgegraute Karten bleiben sichtbar — mit einer Erklärung, warum sie gerade nicht zur Verfügung stehen.",
    ),
    ("T-124", "Kartenleiste", "Placeholder Gehen", "src/components/game/IntentBar.tsx", "wohin", "Wohin in der Szene"),
    ("T-125", "Kartenleiste", "Placeholder allgemein", "src/components/game/IntentBar.tsx", "kurze-zeile", "Kurze Zeile an den SL (optional)"),
    ("T-126", "Kartenleiste", "Button senden", "src/components/game/IntentBar.tsx", "senden", "Absicht senden"),
    ("T-127", "Kartenleiste", "Auflösen Prefix", "src/components/game/IntentBar.tsx", "aufloesen", "Auflösen:"),
    ("T-130", "Journal", "Kicker", "src/components/game/Journal.tsx", "kicker", "Journal"),
    ("T-131", "Journal", "Titel", "src/components/game/Journal.tsx", "titel", "Blätter"),
    (
        "T-132",
        "Journal",
        "nichts freigegeben",
        "src/components/game/Journal.tsx",
        "leer",
        "Noch ist kein Blatt freigegeben — der Spielleiter entscheidet, wann.",
    ),
    ("T-133", "Journal", "Button Freigeben", "src/components/game/Journal.tsx", "freigeben", "Freigeben"),
    ("T-134", "Journal", "Link zum Bogen", "src/components/game/Journal.tsx", "zum-bogen", "Zum Bogen"),
    ("T-135", "Journal", "Pane Titel", "src/components/game/JournalPane.tsx", "titel", "Was geschehen ist"),
    (
        "T-136",
        "Journal",
        "Pane leer",
        "src/components/game/JournalPane.tsx",
        "leer",
        "Noch leer. Das Journal füllt sich, sobald etwas geschieht — was nur deine Augen gesehen haben, bleibt bei dir.",
    ),
    ("T-140", "Blatt", "kein Bogen Titel", "src/components/game/ZustandPane.tsx", "kein-bogen", "Kein Bogen"),
    (
        "T-141",
        "Blatt",
        "kein Bogen Text",
        "src/components/game/ZustandPane.tsx",
        "kein-bogen-lead",
        "Erst eine Karte wählen. Dann liegt hier der Bogen.",
    ),
    ("T-142", "Blatt", "Kicker", "src/components/game/ZustandPane.tsx", "kicker", "Blatt"),
    ("T-143", "Blatt", "Waffe geführt", "src/components/game/ZustandPane.tsx", "dolch", "Dolch gezogen"),
    ("T-150", "Hub", "Kicker", "src/components/game/Hub.tsx", "kicker", "Kampagne"),
    (
        "T-151",
        "Hub",
        "Erklärung",
        "src/components/game/Hub.tsx",
        "lead",
        "Nur geöffnete Orte liegen auf dem Tisch. Teaser und Hinweis sind nur die Verpackung — die eigentliche Schwierigkeit legt der Spielleiter erst beim Wurf fest. Noch geschlossene Türen öffnet ausschließlich er.",
    ),
    ("T-152", "Hub", "Hinweis ruhig", "src/components/game/Hub.tsx", "ruhig", "Ruhig"),
    ("T-153", "Hub", "Hinweis angespannt", "src/components/game/Hub.tsx", "angespannt", "Angespannt"),
    ("T-154", "Hub", "Hinweis gefährlich", "src/components/game/Hub.tsx", "gefaehrlich", "Gefährlich"),
    ("T-155", "Hub", "Vorbedingung", "src/components/game/Hub.tsx", "vorbedingung", "Vorbedingung offen"),
    ("T-160", "Pult", "Kicker", "src/components/game/Pult.tsx", "kicker", "Pult"),
    ("T-161", "Pult", "Szene zu", "src/components/game/Pult.tsx", "zu", "zu"),
    ("T-162", "Pult", "Szene offen", "src/components/game/Pult.tsx", "offen", "offen"),
    (
        "T-163",
        "Pult",
        "keine Absicht",
        "src/components/game/Pult.tsx",
        "keine-absicht",
        "Keine offene Absicht — die Frist läuft trotzdem.",
    ),
    ("T-164", "Pult", "Spalte Spieler", "src/components/game/Pult.tsx", "spalte-spieler", "Spieler"),
    ("T-165", "Pult", "Button Leitung", "src/components/game/Pult.tsx", "leitung", "Leitung übernehmen"),
    (
        "T-166",
        "Pult",
        "SlDesk Kopf",
        "src/components/game/SlDesk.tsx",
        "kopf",
        "Du siehst dieselbe Szene wie die Spieler — aber diese Klappe bleibt allein dir vorbehalten. Du führst die Regie, sitzt aber nicht mit am Tisch.",
    ),
    ("T-167", "Pult", "SlDesk Titel", "src/components/game/SlDesk.tsx", "titel", "Spielleiter"),
    ("T-168", "Pult", "Als Spieler", "src/components/game/SlDesk.tsx", "als-spieler", "Als Spieler"),
    ("T-169", "Pult", "In die Welt schreiben", "src/components/game/SlDesk.tsx", "in-die-welt", "In die Welt schreiben"),
    ("T-170", "Pult", "Placeholder Titel", "src/components/game/SlDesk.tsx", "placeholder-titel", "Titel"),
    ("T-171", "Pult", "Placeholder Körper", "src/components/game/SlDesk.tsx", "placeholder-koerper", "Was die Welt tut."),
    ("T-172", "Pult", "Frist jetzt", "src/components/game/SlDesk.tsx", "frist-jetzt", "Frist jetzt"),
    ("T-173", "Pult", "gezogen, nicht in der Welt", "src/components/game/SlDesk.tsx", "gezogen", "Gezogen — noch nicht in der Welt"),
    ("T-174", "Pult", "Ins Leben", "src/components/game/SlDesk.tsx", "ins-leben", "Ins Leben"),
    ("T-175", "Pult", "Verwerfen", "src/components/game/SlDesk.tsx", "verwerfen", "Verwerfen"),
    ("T-176", "Pult", "Trigger Kopf", "src/components/game/SlDesk.tsx", "trigger", "Trigger dieser Gasse"),
    (
        "T-177",
        "Pult",
        "Trigger Hinweis",
        "src/components/game/SlDesk.tsx",
        "trigger-hinweis",
        "Nur du ziehst diese Karten — das Öffnen der Szene löst noch nichts aus.",
    ),
    ("T-178", "Pult", "keine Keime", "src/components/game/SlDesk.tsx", "keine-keime", "Keine vorbereiteten Keime an diesem Ort."),
    ("T-179", "Pult", "Ziehen", "src/components/game/SlDesk.tsx", "ziehen", "Ziehen"),
    ("T-180", "Pult", "Gezogen Button", "src/components/game/SlDesk.tsx", "gezogen-btn", "Gezogen"),
    ("T-181", "Pult", "Anwesend", "src/components/game/SlDesk.tsx", "anwesend", "Anwesend"),
    (
        "T-190",
        "Stadtblatt SL",
        "Kicker",
        "src/routes/sl.tsx",
        "kicker",
        "Spielleiter · Kampagne 1",
    ),
    (
        "T-191",
        "Stadtblatt SL",
        "Einleitung (Zahlen werden eingesetzt)",
        "src/routes/sl.tsx",
        "lead",
        "Stadt, Viertel, Gasse, Haus, Haushalt — {Häuser} Adressen in {Viertel} Vierteln warten auf dich. {Szenen} Szenen liegen bereit, die Torstraße steht bereits offen. {Gruppen} Gruppen und 42 Stammbäume geben dir alles an die Hand, um hinter jede Tür einen Namen zu setzen.",
    ),
    ("T-192", "Stadtblatt SL", "Kartenzeile", "src/routes/sl.tsx", "karten", "Karten: Tick, Track, Truck, Hanni, Nanni"),
    (
        "T-193",
        "Stadtblatt SL",
        "geöffnet",
        "src/routes/sl.tsx",
        "geoeffnet",
        "Geöffnet: Torstraße — der erste Zug liegt bei den fünf",
    ),
    ("T-194", "Stadtblatt SL", "Gruppen-Überschrift", "src/routes/sl.tsx", "gruppen", "Gruppen"),
    ("T-200", "Erschaffung", "Zurück", "src/components/chargen/Wizard.tsx", "zurueck", "Zurück"),
    ("T-201", "Erschaffung", "Weiter", "src/components/chargen/Wizard.tsx", "weiter", "Weiter"),
    ("T-202", "Erschaffung", "letzter Schritt", "src/components/chargen/Wizard.tsx", "auf-bogen", "Auf den Bogen"),
    ("T-210", "Tabs", "Sozial", "src/components/game/ActionTabs.tsx", "sozial", "Sozial"),
    ("T-211", "Tabs", "Bewegung", "src/components/game/ActionTabs.tsx", "bewegung", "Bewegung"),
    ("T-212", "Tabs", "Kampf", "src/components/game/ActionTabs.tsx", "kampf", "Kampf"),
    ("T-213", "Tabs", "Ressourcen", "src/components/game/ActionTabs.tsx", "ressourcen", "Ressourcen"),
    ("T-220", "Karte/Brett", "Vorhang reißen", "src/components/game/MapBoard.tsx", "vorhang", "Vorhang reißen"),
    ("T-221", "Karte/Brett", "nicht enthüllt", "src/components/game/MapBoard.tsx", "nicht-enthuellt", "Noch nicht enthüllt"),
    ("T-222", "Karte/Brett", "nicht gebunden", "src/components/game/MapBoard.tsx", "nicht-gebunden", "nicht gebunden"),
    ("T-223", "Karte/Brett", "Sturmangriff möglich", "src/components/game/MapBoard.tsx", "sturm", "Sturmangriff möglich"),
    ("T-224", "Karte/Brett", "Verlassen", "src/components/game/MapBoard.tsx", "verlassen", "Verlassen"),
    ("T-225", "Karte/Brett", "Gehen", "src/components/game/MapBoard.tsx", "gehen", "Gehen"),
    ("T-230", "Tracker", "Zugfolge", "src/components/game/Tracker.tsx", "zugfolge", "Zugfolge"),
    ("T-231", "Tracker", "Checkliste", "src/components/game/Tracker.tsx", "checkliste", "Checkliste"),
    ("T-232", "Tracker", "Bewegung", "src/components/game/Tracker.tsx", "bewegung", "Bewegung"),
    ("T-233", "Tracker", "Schuss", "src/components/game/Tracker.tsx", "schuss", "Schuss"),
    ("T-234", "Tracker", "Nahkampf", "src/components/game/Tracker.tsx", "nahkampf", "Nahkampf"),
    ("T-235", "Tracker", "Magie", "src/components/game/Tracker.tsx", "magie", "Magie"),
    ("T-240", "Wurfplatte", "kritischer Treffer", "src/components/game/DicePlate.tsx", "krit", "kritischer Treffer"),
    ("T-241", "Wurfplatte", "Patzer", "src/components/game/DicePlate.tsx", "patzer", "Patzer"),
    ("T-242", "Wurfplatte", "Pasch", "src/components/game/DicePlate.tsx", "pasch", "Pasch"),
    ("T-250", "Grau", "bewusstlos", "src/lib/wfrp/grey.ts", "bewusstlos", "Bewusstlos."),
    ("T-251", "Grau", "liegen", "src/lib/wfrp/grey.ts", "liegen", "Nur Aufstehen oder kriechen."),
    ("T-252", "Grau", "betäubt", "src/lib/wfrp/grey.ts", "betaubt", "Betäubt — keine Handlung."),
    ("T-253", "Grau", "nicht ausgebildet", "src/lib/wfrp/grey.ts", "nicht-ausgebildet", "Nicht ausgebildet."),
    ("T-254", "Grau", "stehst aufstehen", "src/lib/wfrp/grey.ts", "stehst", "Stehst."),
    ("T-255", "Grau", "kein Ort", "src/lib/wfrp/grey.ts", "kein-ort", "Kein Ort."),
    ("T-256", "Grau", "kein Handel", "src/lib/wfrp/grey.ts", "kein-handel", "Kein Stand, kein Preis."),
    ("T-257", "Grau", "kein Gesicht", "src/lib/wfrp/grey.ts", "kein-gesicht", "Niemand wartet auf ein Wort."),
    ("T-258", "Grau", "kein Klatsch", "src/lib/wfrp/grey.ts", "kein-klatsch", "Hier ist niemand, der redet."),
    ("T-259", "Grau", "waffe schon", "src/lib/wfrp/grey.ts", "schon-hand", "Schon in der Hand."),
    ("T-260", "Grau", "kein Glück", "src/lib/wfrp/grey.ts", "kein-glueck", "Kein eigener Wurf offen."),
    ("T-261", "Grau", "kein Mut", "src/lib/wfrp/grey.ts", "kein-mut", "Kein Zustand, keine Psychologie."),
    ("T-262", "Grau", "Schicksal unnötig", "src/lib/wfrp/grey.ts", "nicht-noetig", "Nicht nötig."),
    ("T-263", "Grau", "Zähigkeit", "src/lib/wfrp/grey.ts", "kein-wurf-ersetzen", "Kein Wurf zum Ersetzen."),
    ("T-264", "Grau", "kein Kampf", "src/lib/wfrp/grey.ts", "kein-kampf", "Kein Kampf."),
    ("T-265", "Grau", "nicht gebunden", "src/lib/wfrp/grey.ts", "nicht-gebunden", "Nicht gebunden."),
    ("T-266", "Grau", "zu weit", "src/lib/wfrp/grey.ts", "zu-weit", "Zu weit. Gehen oder Sturmangriff."),
    ("T-267", "Grau", "gebunden", "src/lib/wfrp/grey.ts", "gebunden", "Gebunden."),
    ("T-268", "Grau", "zu nah für Sturm", "src/lib/wfrp/grey.ts", "zu-nah", "Zu nah für Sturmangriff."),
    (
        "T-280",
        "Ort",
        "Torstraße, erste Öffnung",
        "src/lib/wfrp/drosselau.ts",
        "torstrasse-opening",
        "Nasser Stein, der Geruch von Pferdeharn. Das Stadttor im Rücken. Links das Zollhaus, daneben der Gasthof Zum Wanderer. Eine Bäckerei, eine Fleischerei, ein Kramladen. Vorstadt hinter euch, Marktplatz voraus, Bettelgasse zur Seite. Fünf stehen unter dem Torbogen. Niemand hat sie hereingewunken.",
    ),
    (
        "T-281",
        "Ort",
        "andere Gasse, Schablone",
        "src/lib/wfrp/drosselau.ts",
        "gasse-schablone",
        "{Name}. {Notiz}. {erste Häuser}. Noch {n} Häuser. Wege nach {Nachbarn}. Niemand hat ein Wort gegeben.",
    ),
    ("T-290", "Erste Stunde", "Beat Titel Torwache", "src/lib/wfrp/session.ts", "h1-arne-titel", "Torwache prüft"),
    (
        "T-291",
        "Erste Stunde",
        "Arne tritt heraus",
        "src/lib/wfrp/session.ts",
        "h1-arne-body",
        "Aus dem Zollhaus tritt ein Mann in der wollenen Jacke der Stadt. Helm unter dem Arm. Der Riemen der Handwaffe ist zu. Arne Helm, Torstraße 8. Er stellt sich nicht vor.",
    ),
    (
        "T-292",
        "Erste Stunde",
        "Arne erste Worte",
        "src/lib/wfrp/session.ts",
        "h1-worte",
        "„Namen. Woher. Waffen offen, oder ich zähl sie selbst. Der Zwerg bleibt im Licht.“",
    ),
    (
        "T-293",
        "Erste Stunde",
        "Ticks Absicht (öffentlich)",
        "src/lib/wfrp/session.ts",
        "h1-absicht",
        "Tick will sich umschauen, bevor er den Mund aufmacht.",
    ),
    (
        "T-294",
        "Erste Stunde",
        "Was Tick sieht — Erfolg (nur Tick + SL)",
        "src/lib/wfrp/session.ts",
        "h1-sieht-ok",
        "Die Luke am Zollhaus steht einen Spalt. Kreide an der Tür: Striche, heutiger Tross. Hinter Helm kein zweiter Mann. Die Bäckerei dampft. An der Bettelgasse-Ecke hängt ein nasser Lappen, niemand darunter. Helm zählt Lippen, nicht Augen. Er hat die fünf schon im Torbuch, bevor jemand spricht.",
    ),
    (
        "T-295",
        "Erste Stunde",
        "Was Tick sieht — Fehlschlag (nur Tick + SL)",
        "src/lib/wfrp/session.ts",
        "h1-sieht-fail",
        "Helm steht zu nah. Der Dampf der Bäckerei verschluckt die Ecke. Tick sieht Jacke, Riemen, den Helm unter dem Arm — und dass die Luke zufällt.",
    ),
    (
        "T-296",
        "Erste Stunde",
        "Arne wartet auf Namen",
        "src/lib/wfrp/session.ts",
        "h1-frage",
        "„Fünf auf einmal. Der Halbling zählt extra. Ein Name. Dann der nächste.“ Er wartet. Die Frist läuft.",
    ),
    ("T-297", "Erste Stunde", "SL-Log ziehen", "src/lib/wfrp/session.ts", "sl-log-zoll", "SL zieht Arne Helm. Kein Automat."),
    ("T-298", "Erste Stunde", "SL-Log Wurf", "src/lib/wfrp/session.ts", "sl-log-ask", "Spieler würfelt."),
]


def load_catalog_rows() -> list[tuple[str, str, str, str, str, str]]:
    data = json.loads((ROOT / "knowledge/data/catalog.json").read_text(encoding="utf-8"))
    rows = []
    for a in data["actions"]:
        aid = a["id"]
        rows.append((f"K-{aid}-label", "Handlungskarten", f"{a['label']} · Name der Karte", "knowledge/data/catalog.json", f"{aid}.label", a["label"]))
        rows.append((f"K-{aid}-ask", "Handlungskarten", f"{a['label']} · Chip auf dem Tisch", "knowledge/data/catalog.json", f"{aid}.ask", a.get("ask") or a["label"]))
        rows.append((f"K-{aid}-summary", "Handlungskarten", f"{a['label']} · kurzer Satz darunter", "knowledge/data/catalog.json", f"{aid}.summary", a.get("summary") or ""))
    for i, g in enumerate(data.get("grau") or []):
        rows.append((f"K-grau-{i}", "Handlungskarten · Buch-Grau", g.get("wenn", f"grau {i}"), "knowledge/data/catalog.json", f"grau[{i}].grund", g.get("grund", "")))
    if data.get("regel_grau"):
        rows.append(("K-regel-grau", "Handlungskarten", "Regel, wie Grau funktioniert", "knowledge/data/catalog.json", "regel_grau", data["regel_grau"]))
    return rows


def load_station_rows() -> list[tuple[str, str, str, str, str, str]]:
    text = (ROOT / "src/lib/wfrp/stations.ts").read_text(encoding="utf-8")
    rows = []
    import re

    blocks = re.findall(
        r'id:\s*"([^"]+)".*?label:\s*"([^"]+)".*?why:\s*"([^"]+)"',
        text,
        re.S,
    )
    for sid, label, why in blocks:
        rows.append((f"S-{sid}-label", "Erschaffung · Station", f"Station {label}", "src/lib/wfrp/stations.ts", f"{sid}.label", label))
        rows.append((f"S-{sid}-why", "Erschaffung · Station", f"Warum {label}", "src/lib/wfrp/stations.ts", f"{sid}.why", why))
    return rows


def load_face_rows() -> list[tuple[str, str, str, str, str, str]]:
    text = (ROOT / "src/lib/wfrp/party.ts").read_text(encoding="utf-8")
    import re

    rows = []
    names = ["Tick", "Track", "Truck", "Hanni", "Nanni"]
    fields = [
        ("herkunft", "Herkunft"),
        ("motivation", "Motivation"),
        ("shortGoal", "kurzes Ziel"),
        ("longGoal", "langes Ziel"),
        ("woher", "Antwort: woher"),
        ("glaube", "Antwort: Glaube"),
        ("angst", "Antwort: Angst"),
    ]
    next_pat = re.compile(r"\n  \{\s*name:|\n\];")
    for name in names:
        start = text.find(f'name: "{name}"')
        if start < 0:
            continue
        mnext = next_pat.search(text, start + 1)
        block = text[start : mnext.start() if mnext else start + 800]
        for key, label in fields:
            mm = re.search(rf'{key}:\s*"([^"]*)"', block)
            if not mm:
                continue
            rows.append((f"G-{name.lower()}-{key}", "Gesichter", f"{name} · {label}", "src/lib/wfrp/party.ts", f"{name}.{key}", mm.group(1)))
    return rows


def load_difficulty() -> list[tuple[str, str, str, str, str, str]]:
    text = (ROOT / "src/lib/wfrp/types.ts").read_text(encoding="utf-8")
    import re

    rows = []
    for key, label in re.findall(r'"?([a-z\-]+)"?:\s*"([^"]+\([+\-−0-9]+\))"', text):
        if "leicht" in label.lower() or "schwer" in label.lower() or "Herausfordernd" in label or "Durchschnittlich" in label:
            rows.append((f"D-{key}", "Schwierigkeit", label, "src/lib/wfrp/types.ts", f"DIFFICULTY_LABEL.{key}", label))
    return rows


def match_in_file(datei: str, text: str) -> str:
    p = ROOT / datei
    if not p.exists():
        return text
    src = p.read_text(encoding="utf-8")
    if text in src:
        return text
    compact = " ".join(text.split())
    src_one = " ".join(src.split())
    if compact in src_one:
        return compact.split(".")[0] + "." if "." in compact else compact[:48]
    # first clause
    first = text.split(".")[0].strip()
    if first and first in src:
        return first
    return text[:48]


def all_rows() -> list[dict]:
    raw = UI + load_catalog_rows() + load_station_rows() + load_face_rows() + load_difficulty()
    out = []
    seen = set()
    for i, (tid, section, wo, datei, feld, text) in enumerate(raw, 1):
        if tid in seen:
            raise SystemExit(f"doppelte ID {tid}")
        seen.add(tid)
        out.append(
            {
                "nr": i,
                "id": tid,
                "section": section,
                "wo": wo,
                "datei": datei,
                "feld": feld,
                "text": text,
                "match": match_in_file(datei, text),
            }
        )
    return out


def render_md(rows: list[dict]) -> str:
    lines = [
        "# Spieltexte — Die Frist",
        "",
        "Das ist die **Sprachliste**. Kein Code. Jeder Block ist ein Satz, den das Spiel zeigt.",
        "",
        "## So bearbeiten",
        "",
        "1. Nur den Text **zwischen** `>>>` und `<<<` ändern.",
        "2. ID, Ort, Datei, Feld stehen lassen.",
        "3. `{name}`, `{who}`, `{Häuser}` sind Platzhalter — so lassen, das Spiel setzt die Zahl ein.",
        "4. Willst du einen Satz streichen: in die Klammern `STREICHEN` schreiben.",
        "5. Neue Sätze nicht hier erfinden. Aufschreiben, ID offen lassen, zurückschicken.",
        "6. Handschrift: ID groß oben aufs Blatt, darunter der neue Satz. Foto reicht.",
        "",
        "Wenn die Datei zurückkommt, setze ich jeden geänderten Block wieder an seine Stelle.",
        "",
        "Nicht in dieser Liste: Regelwerk-Wörter aus dem Buch (Kampfgeschick, Karrierenamen, Talente). Die bleiben, wie Ulisses sie setzt.",
        "",
        f"**{len(rows)} Sätze.** Stand aus dem laufenden Tisch.",
        "",
        "## Inhalt",
        "",
    ]
    sections = []
    for r in rows:
        if r["section"] not in sections:
            sections.append(r["section"])
    for s in sections:
        n = sum(1 for r in rows if r["section"] == s)
        first = next(r["id"] for r in rows if r["section"] == s)
        lines.append(f"- {s} — {n} · ab `{first}`")
    lines.append("")
    current = None
    for r in rows:
        if r["section"] != current:
            current = r["section"]
            lines += ["", f"## {current}", ""]
        lines += [
            f"### {r['id']}",
            f"- Ort: {r['wo']}",
            f"- Datei: `{r['datei']}`",
            f"- Feld: `{r['feld']}`",
            "",
            ">>>",
            r["text"],
            "<<<",
            "",
        ]
    lines += [
        "---",
        "",
        "Ende der Liste. Alles darunter ignoriere ich beim Wiedereinsetzen.",
        "",
    ]
    return "\n".join(lines)


def main() -> None:
    rows = all_rows()
    OUT_MD.parent.mkdir(parents=True, exist_ok=True)
    OUT_MD.write_text(render_md(rows), encoding="utf-8")
    OUT_JSON.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{len(rows)} Sätze → {OUT_MD.relative_to(ROOT)} + {OUT_JSON.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
