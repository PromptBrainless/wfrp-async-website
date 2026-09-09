# Spieltexte — Die Frist

Das ist die **Sprachliste**. Kein Code. Jeder Block ist ein Satz, den das Spiel zeigt.

## So bearbeiten

1. Nur den Text **zwischen** `>>>` und `<<<` ändern.
2. ID, Ort, Datei, Feld stehen lassen.
3. `{name}`, `{who}`, `{Häuser}` sind Platzhalter — so lassen, das Spiel setzt die Zahl ein.
4. Willst du einen Satz streichen: in die Klammern `STREICHEN` schreiben.
5. Neue Sätze nicht hier erfinden. Aufschreiben, ID offen lassen, zurückschicken.
6. Handschrift: ID groß oben aufs Blatt, darunter der neue Satz. Foto reicht.

Wenn die Datei zurückkommt, setze ich jeden geänderten Block wieder an seine Stelle.

Nicht in dieser Liste: Regelwerk-Wörter aus dem Buch (Kampfgeschick, Karrierenamen, Talente). Die bleiben, wie Ulisses sie setzt.

**343 Sätze.** Stand aus dem laufenden Tisch.

## Inhalt

- Lobby — 8 · ab `T-001`
- Karte — 9 · ab `T-010`
- Tisch — 4 · ab `T-020`
- Türen — 5 · ab `T-024`
- Frist — 3 · ab `T-030`
- Kopf — 9 · ab `T-033`
- Faden — 20 · ab `T-050`
- Handeln — 24 · ab `T-080`
- Glück — 2 · ab `T-110`
- Kartenleiste — 8 · ab `T-120`
- Journal — 7 · ab `T-130`
- Blatt — 4 · ab `T-140`
- Hub — 6 · ab `T-150`
- Pult — 22 · ab `T-160`
- Stadtblatt SL — 5 · ab `T-190`
- Erschaffung — 3 · ab `T-200`
- Tabs — 4 · ab `T-210`
- Karte/Brett — 6 · ab `T-220`
- Tracker — 6 · ab `T-230`
- Wurfplatte — 3 · ab `T-240`
- Grau — 19 · ab `T-250`
- Ort — 2 · ab `T-280`
- Erste Stunde — 9 · ab `T-290`
- Handlungskarten — 79 · ab `K-umschauen-label`
- Handlungskarten · Buch-Grau — 13 · ab `K-grau-0`
- Erschaffung · Station — 22 · ab `S-welt-label`
- Gesichter — 35 · ab `G-tick-herkunft`
- Schwierigkeit — 6 · ab `D-sehr-leicht`


## Lobby

### T-001
- Ort: kleine Zeile über dem Titel
- Datei: `src/routes/index.tsx`
- Feld: `kicker`

>>>
Warhammer Fantasy Roleplay
<<<

### T-002
- Ort: Titel
- Datei: `src/routes/index.tsx`
- Feld: `titel`

>>>
Die Frist
<<<

### T-003
- Ort: Einleitung unter dem Titel
- Datei: `src/routes/index.tsx`
- Feld: `lead`

>>>
Drosselau, ein Marktflecken am Nebenfluss der Reik, unter dem Schutz Sigmars. Fünf Karten liegen bereit. Du wählst ein Gesicht — dann siehst du nur mit diesen Augen. Der Spielleiter führt die Regie, sitzt aber nicht mit am Tisch.
<<<

### T-004
- Ort: Abschnitt bestehende Karten
- Datei: `src/routes/index.tsx`
- Feld: `abschnitt-karte`

>>>
Eine Karte nutzen
<<<

### T-005
- Ort: Abschnitt neue Karte
- Datei: `src/routes/index.tsx`
- Feld: `abschnitt-neu`

>>>
Neue Karte
<<<

### T-006
- Ort: Link Zufallskarte
- Datei: `src/routes/index.tsx`
- Feld: `link-wuerfeln`

>>>
Würfeln, nur Name eintragen
<<<

### T-007
- Ort: Link Erschaffung
- Datei: `src/routes/index.tsx`
- Feld: `link-erschaffung`

>>>
Einen Charakter erschaffen
<<<

### T-008
- Ort: Link Pult
- Datei: `src/routes/index.tsx`
- Feld: `link-pult`

>>>
Zum Pult des Spielleiters
<<<


## Karte

### T-010
- Ort: Titel der Zufallskarte
- Datei: `src/routes/karte.tsx`
- Feld: `titel`

>>>
Neue Karte
<<<

### T-011
- Ort: Erklärung unter dem Titel
- Datei: `src/routes/karte.tsx`
- Feld: `lead`

>>>
Das Buch würfelt Volk, Karriere und Werte. Du nennst den Namen — das Gesicht hinter den Zahlen.
<<<

### T-012
- Ort: Button neu würfeln
- Datei: `src/routes/karte.tsx`
- Feld: `noch-einmal`

>>>
Noch einmal würfeln
<<<

### T-013
- Ort: Feld Name
- Datei: `src/routes/karte.tsx`
- Feld: `feld-name`

>>>
Name
<<<

### T-014
- Ort: Feld Herkunft
- Datei: `src/routes/karte.tsx`
- Feld: `feld-herkunft`

>>>
Herkunft
<<<

### T-015
- Ort: Feld Gott
- Datei: `src/routes/karte.tsx`
- Feld: `feld-gott`

>>>
Gott
<<<

### T-016
- Ort: Platzwahl
- Datei: `src/routes/karte.tsx`
- Feld: `platzwahl`

>>>
Welchen Platz nimmst du?
<<<

### T-017
- Ort: freier Sitz
- Datei: `src/routes/karte.tsx`
- Feld: `freier-platz`

>>>
Freier Platz
<<<

### T-018
- Ort: belegter Sitz (davor: Statt NAME)
- Datei: `src/routes/karte.tsx`
- Feld: `statt`

>>>
Statt
<<<


## Tisch

### T-020
- Ort: ohne Karte, Titel
- Datei: `src/components/game/PlayScreen.tsx`
- Feld: `wer-sitzt`

>>>
Wer sitzt?
<<<

### T-021
- Ort: ohne Karte, Erklärung
- Datei: `src/components/game/PlayScreen.tsx`
- Feld: `wer-sitzt-lead`

>>>
Erst eine Karte wählen. Dann der Tisch — du siehst mit den Augen, die du nimmst.
<<<

### T-022
- Ort: ohne Karte, Link zurück
- Datei: `src/components/game/PlayScreen.tsx`
- Feld: `zur-auswahl`

>>>
Zur Auswahl
<<<

### T-023
- Ort: weitere Handlungen, Drawer-Titel
- Datei: `src/components/game/PlayScreen.tsx`
- Feld: `weitere`

>>>
Weitere Handlungen
<<<


## Türen

### T-024
- Ort: Tür 1
- Datei: `src/components/game/Doors.tsx`
- Feld: `tisch`

>>>
Tisch
<<<

### T-025
- Ort: Tür 2
- Datei: `src/components/game/Doors.tsx`
- Feld: `blatt`

>>>
Blatt
<<<

### T-026
- Ort: Tür 3
- Datei: `src/components/game/Doors.tsx`
- Feld: `journal`

>>>
Journal
<<<

### T-027
- Ort: Tür 4
- Datei: `src/components/game/Doors.tsx`
- Feld: `pult`

>>>
Pult
<<<

### T-028
- Ort: aria der Leiste
- Datei: `src/components/game/Doors.tsx`
- Feld: `aria`

>>>
Türen
<<<


## Frist

### T-030
- Ort: Band über dem Faden
- Datei: `src/components/game/FristBand.tsx`
- Feld: `kein-zug`

>>>
Kein Zug. Alle dürfen handeln, bis die Frist um ist.
<<<

### T-031
- Ort: wenn alle Absichten da sind
- Datei: `src/components/game/FristBand.tsx`
- Feld: `alle-liegen`

>>>
Alle Absichten liegen.
<<<

### T-032
- Ort: offen-Prefix (danach Namen)
- Datei: `src/components/game/FristBand.tsx`
- Feld: `offen`

>>>
Offen:
<<<


## Kopf

### T-033
- Ort: Frist abgelaufen
- Datei: `src/components/game/CharHead.tsx`
- Feld: `frist-um`

>>>
Frist um
<<<

### T-034
- Ort: Rolle SL
- Datei: `src/components/game/CharHead.tsx`
- Feld: `rolle-sl`

>>>
Spielleiter
<<<

### T-035
- Ort: Rolle Spieler Fallback
- Datei: `src/components/game/CharHead.tsx`
- Feld: `rolle-spieler`

>>>
Spieler
<<<

### T-036
- Ort: aria Blatt öffnen
- Datei: `src/components/game/CharHead.tsx`
- Feld: `blatt-oeffnen`

>>>
Blatt öffnen
<<<

### T-037
- Ort: aria Bogen der Stimme (SL)
- Datei: `src/components/game/CharHead.tsx`
- Feld: `bogen-stimme`

>>>
Bogen der Stimme
<<<

### T-038
- Ort: Stat LP
- Datei: `src/components/game/CharHead.tsx`
- Feld: `stat-lp`

>>>
LP
<<<

### T-039
- Ort: Stat Glück
- Datei: `src/components/game/CharHead.tsx`
- Feld: `stat-glueck`

>>>
Glück
<<<

### T-040
- Ort: Stat Geld
- Datei: `src/components/game/CharHead.tsx`
- Feld: `stat-geld`

>>>
Geld
<<<

### T-041
- Ort: SL sieht Stimme
- Datei: `src/components/game/CharHead.tsx`
- Feld: `naechste-zeile`

>>>
Nächste Zeile trägt
<<<


## Faden

### T-050
- Ort: Filter Alles
- Datei: `src/components/game/Leben.tsx`
- Feld: `filter-alle`

>>>
Alles
<<<

### T-051
- Ort: Filter Welt
- Datei: `src/components/game/Leben.tsx`
- Feld: `filter-welt`

>>>
Welt
<<<

### T-052
- Ort: Filter Intention
- Datei: `src/components/game/Leben.tsx`
- Feld: `filter-intent`

>>>
Intention
<<<

### T-053
- Ort: Filter Wurf
- Datei: `src/components/game/Leben.tsx`
- Feld: `filter-wurf`

>>>
Wurf
<<<

### T-054
- Ort: Filter Ereignis
- Datei: `src/components/game/Leben.tsx`
- Feld: `filter-ereignis`

>>>
Ereignis
<<<

### T-055
- Ort: Filter SL
- Datei: `src/components/game/Leben.tsx`
- Feld: `filter-sl`

>>>
SL
<<<

### T-056
- Ort: Filter System
- Datei: `src/components/game/Leben.tsx`
- Feld: `filter-system`

>>>
System
<<<

### T-057
- Ort: Suche
- Datei: `src/components/game/Leben.tsx`
- Feld: `suche`

>>>
Im Faden suchen
<<<

### T-058
- Ort: leer, Szene offen
- Datei: `src/components/game/Leben.tsx`
- Feld: `leer-offen`

>>>
Noch kein Beat. Die Szene wartet.
<<<

### T-059
- Ort: leer, Szene zu, SL
- Datei: `src/components/game/Leben.tsx`
- Feld: `leer-zu-sl`

>>>
Szene zu. Öffne eine Gasse im Pult.
<<<

### T-060
- Ort: leer, Szene zu, Spieler
- Datei: `src/components/game/Leben.tsx`
- Feld: `leer-zu-spieler`

>>>
Szene zu. Der Spielleiter öffnet eine Gasse.
<<<

### T-061
- Ort: Zeitstempel vor der Uhr
- Datei: `src/components/game/Leben.tsx`
- Feld: `auftakt`

>>>
Auftakt
<<<

### T-062
- Ort: geheim-Markierung
- Datei: `src/components/game/Leben.tsx`
- Feld: `geheim`

>>>
geheim
<<<

### T-063
- Ort: Wurf-Aufforderung Titel
- Datei: `src/components/game/Leben.tsx`
- Feld: `dein-wurf`

>>>
Dein Wurf
<<<

### T-064
- Ort: Wurf-Aufforderung Text (Name folgt im Satz davor)
- Datei: `src/components/game/Leben.tsx`
- Feld: `wurf-erklaerung`

>>>
Der SL hat {name} aufgefordert. Die Rechnung erscheint danach im Faden.
<<<

### T-065
- Ort: SL schreibt, Kicker
- Datei: `src/components/game/Leben.tsx`
- Feld: `sl-schreibt`

>>>
SL schreibt ins Leben
<<<

### T-066
- Ort: SL schreibt, Platzhalter Körper
- Datei: `src/components/game/Leben.tsx`
- Feld: `placeholder-welt`

>>>
Was die Welt tut. Spieler sehen das, außer geheim.
<<<

### T-067
- Ort: Checkbox nur SL
- Datei: `src/components/game/Leben.tsx`
- Feld: `nur-sl`

>>>
Nur SL
<<<

### T-068
- Ort: Button Eintragen
- Datei: `src/components/game/Leben.tsx`
- Feld: `eintragen`

>>>
Eintragen
<<<

### T-069
- Ort: Button Würfeln
- Datei: `src/components/game/Leben.tsx`
- Feld: `wuerfeln`

>>>
Würfeln
<<<


## Handeln

### T-080
- Ort: Wurf-Erklärung Spieler
- Datei: `src/components/game/Composer.tsx`
- Feld: `w100`

>>>
Ein W100 entscheidet über Erfolg oder Misserfolg — was daraus in der Szene wird, erzählst du danach selbst.
<<<

### T-081
- Ort: Absicht liegt beim SL
- Datei: `src/components/game/Composer.tsx`
- Feld: `liegt-sl`

>>>
Deine Intention liegt beim Spielleiter. Warte auf die Frist — oder auf die Aufforderung zum Wurf.
<<<

### T-082
- Ort: eigene Absicht liegt, andere dürfen
- Datei: `src/components/game/Composer.tsx`
- Feld: `liegt-gruppe`

>>>
Deine Absicht liegt. Die anderen dürfen noch. Kein Zug — die Frist hält den Tisch.
<<<

### T-083
- Ort: leerer Platz
- Datei: `src/components/game/Composer.tsx`
- Feld: `kein-bogen`

>>>
Auf diesem Platz liegt noch kein Bogen.
<<<

### T-084
- Ort: Link von leerem Platz
- Datei: `src/components/game/Composer.tsx`
- Feld: `link-wuerfeln`

>>>
Würfeln, nur Name eintragen
<<<

### T-085
- Ort: Szene zu
- Datei: `src/components/game/Composer.tsx`
- Feld: `gasse-zu`

>>>
Die Gasse liegt zu. Der Spielleiter entscheidet, welche Tür sich öffnet.
<<<

### T-086
- Ort: Chip-Frage Spieler
- Datei: `src/components/game/Composer.tsx`
- Feld: `was-tust-du`

>>>
Was tust du?
<<<

### T-087
- Ort: Chip-Frage SL für Stimme
- Datei: `src/components/game/Composer.tsx`
- Feld: `fuer-who`

>>>
Für {who}
<<<

### T-088
- Ort: Hinweis erste Chips
- Datei: `src/components/game/Composer.tsx`
- Feld: `erst-ort`

>>>
Erst den Ort. Dann eine Absicht — ausgegraute Karten bleiben sichtbar, mit Grund.
<<<

### T-089
- Ort: Chip Weitere
- Datei: `src/components/game/Composer.tsx`
- Feld: `weitere`

>>>
Weitere
<<<

### T-090
- Ort: Glück anderer wirft
- Datei: `src/components/game/Composer.tsx`
- Feld: `glueck-fremd`

>>>
{name} darf Glück ausgeben. Das entscheidet, wer geworfen hat.
<<<

### T-091
- Ort: Glück eigene Frage
- Datei: `src/components/game/Composer.tsx`
- Feld: `glueck-frage`

>>>
Glück ausgeben?
<<<

### T-092
- Ort: Glück wiederholen
- Datei: `src/components/game/Composer.tsx`
- Feld: `wurf-wiederholen`

>>>
Wurf wiederholen
<<<

### T-093
- Ort: Glück +1 EG
- Datei: `src/components/game/Composer.tsx`
- Feld: `plus-eg`

>>>
+1 EG
<<<

### T-094
- Ort: Glück behalten
- Datei: `src/components/game/Composer.tsx`
- Feld: `behalten`

>>>
Behalten
<<<

### T-095
- Ort: SL: Spieler würfelt
- Datei: `src/components/game/Composer.tsx`
- Feld: `spieler-wuerfelt`

>>>
Spieler würfelt
<<<

### T-096
- Ort: SL: in Vertretung
- Datei: `src/components/game/Composer.tsx`
- Feld: `vertretung`

>>>
In Vertretung
<<<

### T-097
- Ort: SL: ohne Wurf gelten
- Datei: `src/components/game/Composer.tsx`
- Feld: `ohne-wurf`

>>>
Ohne Wurf
<<<

### T-098
- Ort: SL: nein
- Datei: `src/components/game/Composer.tsx`
- Feld: `nein`

>>>
Nein
<<<

### T-099
- Ort: Schwierigkeit Label
- Datei: `src/components/game/Composer.tsx`
- Feld: `schwierigkeit`

>>>
Schwierigkeit
<<<

### T-100
- Ort: Cast Welt
- Datei: `src/components/game/Composer.tsx`
- Feld: `welt`

>>>
Welt
<<<

### T-101
- Ort: Placeholder Welt tut
- Datei: `src/components/game/Composer.tsx`
- Feld: `placeholder-welt`

>>>
Was die Welt tut
<<<

### T-102
- Ort: Placeholder Stimme
- Datei: `src/components/game/Composer.tsx`
- Feld: `placeholder-stimme`

>>>
Was {who} sagt oder tut
<<<

### T-103
- Ort: Button Ins Leben
- Datei: `src/components/game/Composer.tsx`
- Feld: `ins-leben`

>>>
Ins Leben
<<<


## Glück

### T-110
- Ort: Modal Erklärung
- Datei: `src/components/game/FortuneModal.tsx`
- Feld: `erklaerung`

>>>
Nur direkt nach dem eigenen Wurf einsetzbar. Ohne Antwort gilt er als nicht ausgegeben.
<<<

### T-111
- Ort: Modal Titel
- Datei: `src/components/game/FortuneModal.tsx`
- Feld: `titel`

>>>
Glück
<<<


## Kartenleiste

### T-120
- Ort: Wurf steht aus
- Datei: `src/components/game/IntentBar.tsx`
- Feld: `wurf-aus`

>>>
Dein Wurf steht aus
<<<

### T-121
- Ort: Wurf Erklärung
- Datei: `src/components/game/IntentBar.tsx`
- Feld: `w100`

>>>
Ein W100 entscheidet gegen die angesagte Zielzahl — was er bedeutet, deutet der Spielleiter danach.
<<<

### T-122
- Ort: Intention beim SL
- Datei: `src/components/game/IntentBar.tsx`
- Feld: `liegt-sl`

>>>
Deine Intention liegt beim Spielleiter. Warte auf die Frist — oder auf die Aufforderung zum Wurf.
<<<

### T-123
- Ort: keine Karte gewählt
- Datei: `src/components/game/IntentBar.tsx`
- Feld: `waehle`

>>>
Wähle eine Karte. Ausgegraute Karten bleiben sichtbar, mit einem Grund, warum sie noch nicht offenstehen.
<<<

### T-124
- Ort: Placeholder Gehen
- Datei: `src/components/game/IntentBar.tsx`
- Feld: `wohin`

>>>
Wohin in der Szene
<<<

### T-125
- Ort: Placeholder allgemein
- Datei: `src/components/game/IntentBar.tsx`
- Feld: `kurze-zeile`

>>>
Kurze Zeile an den SL (optional)
<<<

### T-126
- Ort: Button senden
- Datei: `src/components/game/IntentBar.tsx`
- Feld: `senden`

>>>
Intention senden
<<<

### T-127
- Ort: Auflösen Prefix
- Datei: `src/components/game/IntentBar.tsx`
- Feld: `aufloesen`

>>>
Auflösen:
<<<


## Journal

### T-130
- Ort: Kicker
- Datei: `src/components/game/Journal.tsx`
- Feld: `kicker`

>>>
Journal
<<<

### T-131
- Ort: Titel
- Datei: `src/components/game/Journal.tsx`
- Feld: `titel`

>>>
Blätter
<<<

### T-132
- Ort: nichts freigegeben
- Datei: `src/components/game/Journal.tsx`
- Feld: `leer`

>>>
Noch ist kein Blatt freigegeben — der Spielleiter entscheidet, wann.
<<<

### T-133
- Ort: Button Freigeben
- Datei: `src/components/game/Journal.tsx`
- Feld: `freigeben`

>>>
Freigeben
<<<

### T-134
- Ort: Link zum Bogen
- Datei: `src/components/game/Journal.tsx`
- Feld: `zum-bogen`

>>>
Zum Bogen
<<<

### T-135
- Ort: Pane Titel
- Datei: `src/components/game/JournalPane.tsx`
- Feld: `titel`

>>>
Was geschehen ist
<<<

### T-136
- Ort: Pane leer
- Datei: `src/components/game/JournalPane.tsx`
- Feld: `leer`

>>>
Noch leer. Das Journal schreibt mit, sobald etwas geschieht — was nur deine Augen sahen, bleibt bei dir.
<<<


## Blatt

### T-140
- Ort: kein Bogen Titel
- Datei: `src/components/game/ZustandPane.tsx`
- Feld: `kein-bogen`

>>>
Kein Bogen
<<<

### T-141
- Ort: kein Bogen Text
- Datei: `src/components/game/ZustandPane.tsx`
- Feld: `kein-bogen-lead`

>>>
Erst eine Karte wählen. Dann liegt hier der Bogen.
<<<

### T-142
- Ort: Kicker
- Datei: `src/components/game/ZustandPane.tsx`
- Feld: `kicker`

>>>
Blatt
<<<

### T-143
- Ort: Waffe geführt
- Datei: `src/components/game/ZustandPane.tsx`
- Feld: `dolch`

>>>
Dolch gezogen
<<<


## Hub

### T-150
- Ort: Kicker
- Datei: `src/components/game/Hub.tsx`
- Feld: `kicker`

>>>
Kampagne
<<<

### T-151
- Ort: Erklärung
- Datei: `src/components/game/Hub.tsx`
- Feld: `lead`

>>>
Nur geöffnete Orte liegen auf dem Tisch. Teaser und Hinweis sind Verpackung — die Schwierigkeit setzt der Spielleiter am Wurf. Noch geschlossene Türen öffnet allein er.
<<<

### T-152
- Ort: Hinweis ruhig
- Datei: `src/components/game/Hub.tsx`
- Feld: `ruhig`

>>>
Ruhig
<<<

### T-153
- Ort: Hinweis angespannt
- Datei: `src/components/game/Hub.tsx`
- Feld: `angespannt`

>>>
Angespannt
<<<

### T-154
- Ort: Hinweis gefährlich
- Datei: `src/components/game/Hub.tsx`
- Feld: `gefaehrlich`

>>>
Gefährlich
<<<

### T-155
- Ort: Vorbedingung
- Datei: `src/components/game/Hub.tsx`
- Feld: `vorbedingung`

>>>
Vorbedingung offen
<<<


## Pult

### T-160
- Ort: Kicker
- Datei: `src/components/game/Pult.tsx`
- Feld: `kicker`

>>>
Pult
<<<

### T-161
- Ort: Szene zu
- Datei: `src/components/game/Pult.tsx`
- Feld: `zu`

>>>
zu
<<<

### T-162
- Ort: Szene offen
- Datei: `src/components/game/Pult.tsx`
- Feld: `offen`

>>>
offen
<<<

### T-163
- Ort: keine Absicht
- Datei: `src/components/game/Pult.tsx`
- Feld: `keine-absicht`

>>>
Keine offene Absicht — die Frist läuft trotzdem.
<<<

### T-164
- Ort: Spalte Spieler
- Datei: `src/components/game/Pult.tsx`
- Feld: `spalte-spieler`

>>>
Spieler
<<<

### T-165
- Ort: Button Leitung
- Datei: `src/components/game/Pult.tsx`
- Feld: `leitung`

>>>
Leitung übernehmen
<<<

### T-166
- Ort: SlDesk Kopf
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `kopf`

>>>
Du siehst dieselbe Szene wie die Spieler — aber diese Klappe bleibt allein dir vorbehalten. Du führst die Regie, sitzt aber nicht mit am Tisch.
<<<

### T-167
- Ort: SlDesk Titel
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `titel`

>>>
Spielleiter
<<<

### T-168
- Ort: Als Spieler
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `als-spieler`

>>>
Als Spieler
<<<

### T-169
- Ort: In die Welt schreiben
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `in-die-welt`

>>>
In die Welt schreiben
<<<

### T-170
- Ort: Placeholder Titel
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `placeholder-titel`

>>>
Titel
<<<

### T-171
- Ort: Placeholder Körper
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `placeholder-koerper`

>>>
Was die Welt tut.
<<<

### T-172
- Ort: Frist jetzt
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `frist-jetzt`

>>>
Frist jetzt
<<<

### T-173
- Ort: gezogen, nicht in der Welt
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `gezogen`

>>>
Gezogen — noch nicht in der Welt
<<<

### T-174
- Ort: Ins Leben
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `ins-leben`

>>>
Ins Leben
<<<

### T-175
- Ort: Verwerfen
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `verwerfen`

>>>
Verwerfen
<<<

### T-176
- Ort: Trigger Kopf
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `trigger`

>>>
Trigger dieser Gasse
<<<

### T-177
- Ort: Trigger Hinweis
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `trigger-hinweis`

>>>
Nur du ziehst. Öffnen der Szene zündet nichts.
<<<

### T-178
- Ort: keine Keime
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `keine-keime`

>>>
Keine vorbereiteten Keime an diesem Ort.
<<<

### T-179
- Ort: Ziehen
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `ziehen`

>>>
Ziehen
<<<

### T-180
- Ort: Gezogen Button
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `gezogen-btn`

>>>
Gezogen
<<<

### T-181
- Ort: Anwesend
- Datei: `src/components/game/SlDesk.tsx`
- Feld: `anwesend`

>>>
Anwesend
<<<


## Stadtblatt SL

### T-190
- Ort: Kicker
- Datei: `src/routes/sl.tsx`
- Feld: `kicker`

>>>
Spielleiter · Kampagne 1
<<<

### T-191
- Ort: Einleitung (Zahlen werden eingesetzt)
- Datei: `src/routes/sl.tsx`
- Feld: `lead`

>>>
Stadt, Viertel, Gasse, Haus, Haushalt — {Häuser} Adressen in {Viertel} Vierteln. {Szenen} Szenen liegen bereit. Die Torstraße ist offen. {Gruppen} Gruppen und 42 Stammbäume geben dir, was du brauchst, um jede Tür mit einem Namen zu füllen.
<<<

### T-192
- Ort: Kartenzeile
- Datei: `src/routes/sl.tsx`
- Feld: `karten`

>>>
Karten: Tick, Track, Truck, Hanni, Nanni
<<<

### T-193
- Ort: geöffnet
- Datei: `src/routes/sl.tsx`
- Feld: `geoeffnet`

>>>
Geöffnet: Torstraße — der erste Zug liegt bei den fünf
<<<

### T-194
- Ort: Gruppen-Überschrift
- Datei: `src/routes/sl.tsx`
- Feld: `gruppen`

>>>
Gruppen
<<<


## Erschaffung

### T-200
- Ort: Zurück
- Datei: `src/components/chargen/Wizard.tsx`
- Feld: `zurueck`

>>>
Zurück
<<<

### T-201
- Ort: Weiter
- Datei: `src/components/chargen/Wizard.tsx`
- Feld: `weiter`

>>>
Weiter
<<<

### T-202
- Ort: letzter Schritt
- Datei: `src/components/chargen/Wizard.tsx`
- Feld: `auf-bogen`

>>>
Auf den Bogen
<<<


## Tabs

### T-210
- Ort: Sozial
- Datei: `src/components/game/ActionTabs.tsx`
- Feld: `sozial`

>>>
Sozial
<<<

### T-211
- Ort: Bewegung
- Datei: `src/components/game/ActionTabs.tsx`
- Feld: `bewegung`

>>>
Bewegung
<<<

### T-212
- Ort: Kampf
- Datei: `src/components/game/ActionTabs.tsx`
- Feld: `kampf`

>>>
Kampf
<<<

### T-213
- Ort: Ressourcen
- Datei: `src/components/game/ActionTabs.tsx`
- Feld: `ressourcen`

>>>
Ressourcen
<<<


## Karte/Brett

### T-220
- Ort: Vorhang reißen
- Datei: `src/components/game/MapBoard.tsx`
- Feld: `vorhang`

>>>
Vorhang reißen
<<<

### T-221
- Ort: nicht enthüllt
- Datei: `src/components/game/MapBoard.tsx`
- Feld: `nicht-enthuellt`

>>>
Noch nicht enthüllt
<<<

### T-222
- Ort: nicht gebunden
- Datei: `src/components/game/MapBoard.tsx`
- Feld: `nicht-gebunden`

>>>
nicht gebunden
<<<

### T-223
- Ort: Sturmangriff möglich
- Datei: `src/components/game/MapBoard.tsx`
- Feld: `sturm`

>>>
Sturmangriff möglich
<<<

### T-224
- Ort: Verlassen
- Datei: `src/components/game/MapBoard.tsx`
- Feld: `verlassen`

>>>
Verlassen
<<<

### T-225
- Ort: Gehen
- Datei: `src/components/game/MapBoard.tsx`
- Feld: `gehen`

>>>
Gehen
<<<


## Tracker

### T-230
- Ort: Zugfolge
- Datei: `src/components/game/Tracker.tsx`
- Feld: `zugfolge`

>>>
Zugfolge
<<<

### T-231
- Ort: Checkliste
- Datei: `src/components/game/Tracker.tsx`
- Feld: `checkliste`

>>>
Checkliste
<<<

### T-232
- Ort: Bewegung
- Datei: `src/components/game/Tracker.tsx`
- Feld: `bewegung`

>>>
Bewegung
<<<

### T-233
- Ort: Schuss
- Datei: `src/components/game/Tracker.tsx`
- Feld: `schuss`

>>>
Schuss
<<<

### T-234
- Ort: Nahkampf
- Datei: `src/components/game/Tracker.tsx`
- Feld: `nahkampf`

>>>
Nahkampf
<<<

### T-235
- Ort: Magie
- Datei: `src/components/game/Tracker.tsx`
- Feld: `magie`

>>>
Magie
<<<


## Wurfplatte

### T-240
- Ort: kritischer Treffer
- Datei: `src/components/game/DicePlate.tsx`
- Feld: `krit`

>>>
kritischer Treffer
<<<

### T-241
- Ort: Patzer
- Datei: `src/components/game/DicePlate.tsx`
- Feld: `patzer`

>>>
Patzer
<<<

### T-242
- Ort: Pasch
- Datei: `src/components/game/DicePlate.tsx`
- Feld: `pasch`

>>>
Pasch
<<<


## Grau

### T-250
- Ort: bewusstlos
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `bewusstlos`

>>>
Bewusstlos.
<<<

### T-251
- Ort: liegen
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `liegen`

>>>
Nur Aufstehen oder kriechen.
<<<

### T-252
- Ort: betäubt
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `betaubt`

>>>
Betäubt — keine Handlung.
<<<

### T-253
- Ort: nicht ausgebildet
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `nicht-ausgebildet`

>>>
Nicht ausgebildet.
<<<

### T-254
- Ort: stehst aufstehen
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `stehst`

>>>
Stehst.
<<<

### T-255
- Ort: kein Ort
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `kein-ort`

>>>
Kein Ort.
<<<

### T-256
- Ort: kein Handel
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `kein-handel`

>>>
Kein Stand, kein Preis.
<<<

### T-257
- Ort: kein Gesicht
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `kein-gesicht`

>>>
Niemand wartet auf ein Wort.
<<<

### T-258
- Ort: kein Klatsch
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `kein-klatsch`

>>>
Hier ist niemand, der redet.
<<<

### T-259
- Ort: waffe schon
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `schon-hand`

>>>
Schon in der Hand.
<<<

### T-260
- Ort: kein Glück
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `kein-glueck`

>>>
Kein eigener Wurf offen.
<<<

### T-261
- Ort: kein Mut
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `kein-mut`

>>>
Kein Zustand, keine Psychologie.
<<<

### T-262
- Ort: Schicksal unnötig
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `nicht-noetig`

>>>
Nicht nötig.
<<<

### T-263
- Ort: Zähigkeit
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `kein-wurf-ersetzen`

>>>
Kein Wurf zum Ersetzen.
<<<

### T-264
- Ort: kein Kampf
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `kein-kampf`

>>>
Kein Kampf.
<<<

### T-265
- Ort: nicht gebunden
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `nicht-gebunden`

>>>
Nicht gebunden.
<<<

### T-266
- Ort: zu weit
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `zu-weit`

>>>
Zu weit. Gehen oder Sturmangriff.
<<<

### T-267
- Ort: gebunden
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `gebunden`

>>>
Gebunden.
<<<

### T-268
- Ort: zu nah für Sturm
- Datei: `src/lib/wfrp/grey.ts`
- Feld: `zu-nah`

>>>
Zu nah für Sturmangriff.
<<<


## Ort

### T-280
- Ort: Torstraße, erste Öffnung
- Datei: `src/lib/wfrp/drosselau.ts`
- Feld: `torstrasse-opening`

>>>
Nasser Stein und Pferdeharn. Das Stadttor im Rücken. Links das Zollhaus, daneben der Gasthof Zum Wanderer. Eine Bäckerei, eine Fleischerei, ein Kramladen. Vorstadt hinter euch, Marktplatz voraus, Bettelgasse zur Seite. Fünf unter dem Bogen. Niemand hat sie hereingewunken.
<<<

### T-281
- Ort: andere Gasse, Schablone
- Datei: `src/lib/wfrp/drosselau.ts`
- Feld: `gasse-schablone`

>>>
{Name}. {Notiz}. {erste Häuser}. Noch {n} Häuser. Wege nach {Nachbarn}. Niemand hat ein Wort gegeben.
<<<


## Erste Stunde

### T-290
- Ort: Beat Titel Torwache
- Datei: `src/lib/wfrp/session.ts`
- Feld: `h1-arne-titel`

>>>
Torwache prüft
<<<

### T-291
- Ort: Arne tritt heraus
- Datei: `src/lib/wfrp/session.ts`
- Feld: `h1-arne-body`

>>>
Aus dem Zollhaus tritt ein Mann in der wollenen Jacke der Stadt. Helm unter dem Arm. Der Riemen der Handwaffe ist zu. Arne Helm, Torstraße 8. Er stellt sich nicht vor.
<<<

### T-292
- Ort: Arne erste Worte
- Datei: `src/lib/wfrp/session.ts`
- Feld: `h1-worte`

>>>
„Namen. Woher. Waffen offen, oder ich zähl sie selbst. Der Zwerg bleibt im Licht.“
<<<

### T-293
- Ort: Ticks Absicht (öffentlich)
- Datei: `src/lib/wfrp/session.ts`
- Feld: `h1-absicht`

>>>
Tick will sich umschauen, bevor er den Mund aufmacht.
<<<

### T-294
- Ort: Was Tick sieht — Erfolg (nur Tick + SL)
- Datei: `src/lib/wfrp/session.ts`
- Feld: `h1-sieht-ok`

>>>
Die Luke am Zollhaus steht einen Spalt. Kreide an der Tür: Striche, heutiger Tross. Hinter Helm kein zweiter Mann. Die Bäckerei dampft. An der Bettelgasse-Ecke hängt ein nasser Lappen, niemand darunter. Helm zählt Lippen, nicht Augen. Er hat die fünf schon im Torbuch, bevor jemand spricht.
<<<

### T-295
- Ort: Was Tick sieht — Fehlschlag (nur Tick + SL)
- Datei: `src/lib/wfrp/session.ts`
- Feld: `h1-sieht-fail`

>>>
Helm steht zu nah. Der Dampf der Bäckerei verschluckt die Ecke. Tick sieht Jacke, Riemen, den Helm unter dem Arm — und dass die Luke zufällt.
<<<

### T-296
- Ort: Arne wartet auf Namen
- Datei: `src/lib/wfrp/session.ts`
- Feld: `h1-frage`

>>>
„Fünf auf einmal. Der Halbling zählt extra. Ein Name. Dann der nächste.“ Er wartet. Die Frist läuft.
<<<

### T-297
- Ort: SL-Log ziehen
- Datei: `src/lib/wfrp/session.ts`
- Feld: `sl-log-zoll`

>>>
SL zieht Arne Helm. Kein Automat.
<<<

### T-298
- Ort: SL-Log Wurf
- Datei: `src/lib/wfrp/session.ts`
- Feld: `sl-log-ask`

>>>
Spieler würfelt.
<<<


## Handlungskarten

### K-umschauen-label
- Ort: Umschauen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `umschauen.label`

>>>
Umschauen
<<<

### K-umschauen-ask
- Ort: Umschauen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `umschauen.ask`

>>>
Mich umschauen
<<<

### K-umschauen-summary
- Ort: Umschauen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `umschauen.summary`

>>>
Den Ort und die Leute mit den Augen abtasten.
<<<

### K-intuition-label
- Ort: Einschätzen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `intuition.label`

>>>
Einschätzen
<<<

### K-intuition-ask
- Ort: Einschätzen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `intuition.ask`

>>>
Die Lage einschätzen
<<<

### K-intuition-summary
- Ort: Einschätzen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `intuition.summary`

>>>
Absicht und Haltung eines Gegenübers lesen.
<<<

### K-reden-label
- Ort: Ansprechen / Verhandeln · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `reden.label`

>>>
Ansprechen / Verhandeln
<<<

### K-reden-ask
- Ort: Ansprechen / Verhandeln · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `reden.ask`

>>>
Jemanden ansprechen
<<<

### K-reden-summary
- Ort: Ansprechen / Verhandeln · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `reden.summary`

>>>
Mit Worten überzeugen, schmeicheln, Vertrauen suchen.
<<<

### K-feilschen-label
- Ort: Handeln · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `feilschen.label`

>>>
Handeln
<<<

### K-feilschen-ask
- Ort: Handeln · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `feilschen.ask`

>>>
Um den Preis feilschen
<<<

### K-feilschen-summary
- Ort: Handeln · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `feilschen.summary`

>>>
Den Preis drücken. Vergleich gegen den Händler.
<<<

### K-kaufen-label
- Ort: Kaufen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `kaufen.label`

>>>
Kaufen
<<<

### K-kaufen-ask
- Ort: Kaufen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `kaufen.ask`

>>>
Kaufen
<<<

### K-kaufen-summary
- Ort: Kaufen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `kaufen.summary`

>>>
Zuerst zahlen, dann Feilschen um den Preis. Verfügbarkeit entscheidet der SL.
<<<

### K-bestechen-label
- Ort: Bestechen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `bestechen.label`

>>>
Bestechen
<<<

### K-bestechen-ask
- Ort: Bestechen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `bestechen.ask`

>>>
Bestechen
<<<

### K-bestechen-summary
- Ort: Bestechen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `bestechen.summary`

>>>
Geld oder Gefälligkeit gegen ein Entgegenkommen.
<<<

### K-einschuechtern-label
- Ort: Einschüchtern · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `einschuechtern.label`

>>>
Einschüchtern
<<<

### K-einschuechtern-ask
- Ort: Einschüchtern · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `einschuechtern.ask`

>>>
Einschüchtern
<<<

### K-einschuechtern-summary
- Ort: Einschüchtern · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `einschuechtern.summary`

>>>
Drohen. Status färbt die Konsequenz, nicht die Karte.
<<<

### K-klatsch-label
- Ort: Gerüchte · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `klatsch.label`

>>>
Gerüchte
<<<

### K-klatsch-ask
- Ort: Gerüchte · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `klatsch.ask`

>>>
Nach Gerüchten fragen
<<<

### K-klatsch-summary
- Ort: Gerüchte · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `klatsch.summary`

>>>
In der Menge nach Geschichten und Preisen fischen.
<<<

### K-schleichen-label
- Ort: Schleichen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `schleichen.label`

>>>
Schleichen
<<<

### K-schleichen-ask
- Ort: Schleichen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `schleichen.ask`

>>>
Schleichen
<<<

### K-schleichen-summary
- Ort: Schleichen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `schleichen.summary`

>>>
Unbemerkt bleiben oder sich davonstehlen.
<<<

### K-gehen-label
- Ort: Gehen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `gehen.label`

>>>
Gehen
<<<

### K-gehen-ask
- Ort: Gehen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `gehen.ask`

>>>
Woanders hingehen
<<<

### K-gehen-summary
- Ort: Gehen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `gehen.summary`

>>>
An einen genannten Ort der Szene oder einen Ausgang. Im Kampf: Bewegung × 2 Meter. Kein Wurf.
<<<

### K-warten-label
- Ort: Abwarten · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `warten.label`

>>>
Abwarten
<<<

### K-warten-ask
- Ort: Abwarten · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `warten.ask`

>>>
Abwarten
<<<

### K-warten-summary
- Ort: Abwarten · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `warten.summary`

>>>
Stillstehen, beobachten, die Frist verstreichen lassen.
<<<

### K-sprinten-label
- Ort: Sprinten · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `sprinten.label`

>>>
Sprinten
<<<

### K-sprinten-ask
- Ort: Sprinten · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `sprinten.ask`

>>>
Sprinten
<<<

### K-sprinten-summary
- Ort: Sprinten · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `sprinten.summary`

>>>
Volle Bewegung. Im Kampf eine Handlung.
<<<

### K-fliehen-label
- Ort: Fliehen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `fliehen.label`

>>>
Fliehen
<<<

### K-fliehen-ask
- Ort: Fliehen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `fliehen.ask`

>>>
Fliehen
<<<

### K-fliehen-summary
- Ort: Fliehen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `fliehen.summary`

>>>
Aus dem Kampf. Gebunden: freie Attacke des Gegners.
<<<

### K-aufstehen-label
- Ort: Aufstehen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `aufstehen.label`

>>>
Aufstehen
<<<

### K-aufstehen-ask
- Ort: Aufstehen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `aufstehen.ask`

>>>
Aufstehen
<<<

### K-aufstehen-summary
- Ort: Aufstehen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `aufstehen.summary`

>>>
Den Zustand Niedergestreckt beenden.
<<<

### K-kriechen-label
- Ort: Kriechen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `kriechen.label`

>>>
Kriechen
<<<

### K-kriechen-ask
- Ort: Kriechen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `kriechen.ask`

>>>
Kriechen
<<<

### K-kriechen-summary
- Ort: Kriechen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `kriechen.summary`

>>>
Halbe Bewegung, solange du niedergestreckt bist.
<<<

### K-waffe_ziehen-label
- Ort: Waffe ziehen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `waffe_ziehen.label`

>>>
Waffe ziehen
<<<

### K-waffe_ziehen-ask
- Ort: Waffe ziehen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `waffe_ziehen.ask`

>>>
Die Waffe ziehen
<<<

### K-waffe_ziehen-summary
- Ort: Waffe ziehen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `waffe_ziehen.summary`

>>>
Den Dolch oder die geführte Waffe ziehen. Eskaliert die Szene.
<<<

### K-angreifen-label
- Ort: Angreifen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `angreifen.label`

>>>
Angreifen
<<<

### K-angreifen-ask
- Ort: Angreifen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `angreifen.ask`

>>>
Angreifen
<<<

### K-angreifen-summary
- Ort: Angreifen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `angreifen.summary`

>>>
Vergleichender Wurf. Meist Nahkampf gegen Nahkampf oder Ausweichen.
<<<

### K-sturmangriff-label
- Ort: Sturmangriff · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `sturmangriff.label`

>>>
Sturmangriff
<<<

### K-sturmangriff-ask
- Ort: Sturmangriff · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `sturmangriff.ask`

>>>
Sturmangriff
<<<

### K-sturmangriff-summary
- Ort: Sturmangriff · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `sturmangriff.summary`

>>>
Bewegung + Handlung, +1 Vorteil, Bindung.
<<<

### K-loesen-label
- Ort: Aus Bindung lösen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `loesen.label`

>>>
Aus Bindung lösen
<<<

### K-loesen-ask
- Ort: Aus Bindung lösen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `loesen.ask`

>>>
Aus Bindung lösen
<<<

### K-loesen-summary
- Ort: Aus Bindung lösen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `loesen.summary`

>>>
Wurf oder Vorteilsvorsprung ausgeben.
<<<

### K-volle_abwehr-label
- Ort: Nur verteidigen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `volle_abwehr.label`

>>>
Nur verteidigen
<<<

### K-volle_abwehr-ask
- Ort: Nur verteidigen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `volle_abwehr.ask`

>>>
Nur verteidigen
<<<

### K-volle_abwehr-summary
- Ort: Nur verteidigen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `volle_abwehr.summary`

>>>
Die Handlung der Abwehr opfern. Nächster Vergleich zu deinen Gunsten.
<<<

### K-ausweichen-label
- Ort: Attacke ausweichen · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `ausweichen.label`

>>>
Attacke ausweichen
<<<

### K-ausweichen-ask
- Ort: Attacke ausweichen · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `ausweichen.ask`

>>>
Attacke ausweichen
<<<

### K-ausweichen-summary
- Ort: Attacke ausweichen · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `ausweichen.summary`

>>>
Keine eigene Handlung. Verteidigung gegen den nächsten Schlag.
<<<

### K-glueck-label
- Ort: Glückspunkt · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `glueck.label`

>>>
Glückspunkt
<<<

### K-glueck-ask
- Ort: Glückspunkt · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `glueck.ask`

>>>
Glückspunkt
<<<

### K-glueck-summary
- Ort: Glückspunkt · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `glueck.summary`

>>>
Eigenen Wurf wiederholen oder +1 EG. Nur im Glück-Fenster.
<<<

### K-mut-label
- Ort: Mutpunkt · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `mut.label`

>>>
Mutpunkt
<<<

### K-mut-ask
- Ort: Mutpunkt · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `mut.ask`

>>>
Mutpunkt
<<<

### K-mut-summary
- Ort: Mutpunkt · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `mut.summary`

>>>
Einen Zustand entfernen. Bei Niedergestreckt zusätzlich +1 LP.
<<<

### K-schicksal-label
- Ort: Schicksal opfern · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `schicksal.label`

>>>
Schicksal opfern
<<<

### K-schicksal-ask
- Ort: Schicksal opfern · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `schicksal.ask`

>>>
Schicksal opfern
<<<

### K-schicksal-summary
- Ort: Schicksal opfern · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `schicksal.summary`

>>>
Nicht sterben / die Szene überleben. Permanent.
<<<

### K-zaehigkeit-label
- Ort: Zähigkeit · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `zaehigkeit.label`

>>>
Zähigkeit
<<<

### K-zaehigkeit-ask
- Ort: Zähigkeit · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `zaehigkeit.ask`

>>>
Zähigkeit
<<<

### K-zaehigkeit-summary
- Ort: Zähigkeit · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `zaehigkeit.summary`

>>>
Wurf selbst wählen oder Mutation vermeiden. Permanent.
<<<

### K-freitext-label
- Ort: Bitte an den SL · Name der Karte
- Datei: `knowledge/data/catalog.json`
- Feld: `freitext.label`

>>>
Bitte an den SL
<<<

### K-freitext-ask
- Ort: Bitte an den SL · Chip auf dem Tisch
- Datei: `knowledge/data/catalog.json`
- Feld: `freitext.ask`

>>>
Etwas anderes versuchen
<<<

### K-freitext-summary
- Ort: Bitte an den SL · kurzer Satz darunter
- Datei: `knowledge/data/catalog.json`
- Feld: `freitext.summary`

>>>
Keine alleinige Steuerung. Der SL hängt sie an eine Fähigkeit oder lehnt ab.
<<<


## Handlungskarten · Buch-Grau

### K-grau-0
- Ort: kein Feind in Sicht und nicht Kampfmodus
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[0].grund`

>>>
Kein Kampf.
<<<

### K-grau-1
- Ort: nicht gebunden
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[1].grund`

>>>
Nicht gebunden. Angreifen erst nach Annähern oder Sturmangriff.
<<<

### K-grau-2
- Ort: gebunden
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[2].grund`

>>>
Gebunden.
<<<

### K-grau-3
- Ort: waffe bereits gezogen
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[3].grund`

>>>
Schon in der Hand.
<<<

### K-grau-4
- Ort: kein eigener offener Wurf
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[4].grund`

>>>
Kein eigener Wurf offen.
<<<

### K-grau-5
- Ort: kein Zustand und keine Psychologie
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[5].grund`

>>>
Kein Zustand, keine Psychologie.
<<<

### K-grau-6
- Ort: nicht sterbend / ausweglos
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[6].grund`

>>>
Nicht nötig.
<<<

### K-grau-7
- Ort: kein eigener Wurf in diesem Tick
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[7].grund`

>>>
Kein Wurf zum Ersetzen.
<<<

### K-grau-8
- Ort: nicht niedergestreckt
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[8].grund`

>>>
Stehst.
<<<

### K-grau-9
- Ort: niedergestreckt
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[9].grund`

>>>
Nur Aufstehen oder kriechen.
<<<

### K-grau-10
- Ort: ausbau ohne Steigerung
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[10].grund`

>>>
Nicht ausgebildet.
<<<

### K-grau-11
- Ort: kein Ausgang
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[11].grund`

>>>
Kein Ausgang.
<<<

### K-grau-12
- Ort: bewusstlos
- Datei: `knowledge/data/catalog.json`
- Feld: `grau[12].grund`

>>>
Bewusstlos.
<<<


## Handlungskarten

### K-regel-grau
- Ort: Regel, wie Grau funktioniert
- Datei: `knowledge/data/catalog.json`
- Feld: `regel_grau`

>>>
Karten, die der Charakter kennt, aber jetzt nicht nutzen kann, bleiben stehen und sind ausgegraut. Grund auf der Karte. Nie löschen.
<<<


## Erschaffung · Station

### S-welt-label
- Ort: Station Welt
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `welt.label`

>>>
Welt
<<<

### S-welt-why
- Ort: Warum Welt
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `welt.why`

>>>
Erst zuhören, was diese Welt erzählt — gewählt wird später.
<<<

### S-volk-label
- Ort: Station Volk
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `volk.label`

>>>
Volk
<<<

### S-volk-why
- Ort: Warum Volk
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `volk.why`

>>>
Woher du kommst, prägt, wer du wirst. Die Zahlen folgen danach.
<<<

### S-pnp-label
- Ort: Station Spiel
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `pnp.label`

>>>
Spiel
<<<

### S-pnp-why
- Ort: Warum Spiel
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `pnp.why`

>>>
Was hier digital läuft — und was ganz beim Spielleiter bleibt.
<<<

### S-karriere-label
- Ort: Station Karriere
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `karriere.label`

>>>
Karriere
<<<

### S-karriere-why
- Ort: Warum Karriere
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `karriere.why`

>>>
Die Klasse ist deine Herkunft, die Karriere dein Beruf im Reich.
<<<

### S-werte-label
- Ort: Station Werte
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `werte.label`

>>>
Werte
<<<

### S-werte-why
- Ort: Warum Werte
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `werte.why`

>>>
Zehn Attribute geben dir Gestalt, dann entscheidet das Schicksal.
<<<

### S-faehigkeiten-label
- Ort: Station Fähigkeiten
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `faehigkeiten.label`

>>>
Fähigkeiten
<<<

### S-faehigkeiten-why
- Ort: Warum Fähigkeiten
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `faehigkeiten.why`

>>>
Zeig, was du gelernt hast — und wähl ein Talent, das dich auszeichnet.
<<<

### S-ausruestung-label
- Ort: Station Ausrüstung
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `ausruestung.label`

>>>
Ausrüstung
<<<

### S-ausruestung-why
- Ort: Warum Ausrüstung
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `ausruestung.why`

>>>
Was du trägst und bei dir hast, folgt aus deiner Karriere.
<<<

### S-details-label
- Ort: Station Details
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `details.label`

>>>
Details
<<<

### S-details-why
- Ort: Warum Details
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `details.why`

>>>
Name, Alter, Aussehen, Ziele — das Gesicht hinter den Werten.
<<<

### S-gruppe-label
- Ort: Station Gruppe
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `gruppe.label`

>>>
Gruppe
<<<

### S-gruppe-why
- Ort: Warum Gruppe
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `gruppe.why`

>>>
Kannst du überspringen — der Spielleiter führt euch zusammen.
<<<

### S-leben-label
- Ort: Station Leben
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `leben.label`

>>>
Leben
<<<

### S-leben-why
- Ort: Warum Leben
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `leben.why`

>>>
Beantworte mindestens drei Fragen zu deinem Leben, die Herkunft steht auf der Liste.
<<<

### S-xp-label
- Ort: Station EP
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `xp.label`

>>>
EP
<<<

### S-xp-why
- Ort: Warum EP
- Datei: `src/lib/wfrp/stations.ts`
- Feld: `xp.why`

>>>
Optional — dein Bogen wartet auch ohne das.
<<<


## Gesichter

### G-tick-herkunft
- Ort: Tick · Herkunft
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Tick.herkunft`

>>>
Reikland, ein Weiler westlich der Stadt
<<<

### G-tick-motivation
- Ort: Tick · Motivation
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Tick.motivation`

>>>
Die Ordnung halten, bis jemand sagt, was gilt.
<<<

### G-tick-shortGoal
- Ort: Tick · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Tick.shortGoal`

>>>
Herausfinden, wer am Tor das Sagen hat.
<<<

### G-tick-longGoal
- Ort: Tick · langes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Tick.longGoal`

>>>
Wieder raus. Mit den anderen.
<<<

### G-tick-woher
- Ort: Tick · Antwort: woher
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Tick.woher`

>>>
Ein Weiler westlich, Getreide und Wache.
<<<

### G-tick-glaube
- Ort: Tick · Antwort: Glaube
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Tick.glaube`

>>>
Sigmar, weil die Mutter es so wollte.
<<<

### G-tick-angst
- Ort: Tick · Antwort: Angst
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Tick.angst`

>>>
Dass die Stadt zuhält und niemand mehr öffnet.
<<<

### G-track-herkunft
- Ort: Track · Herkunft
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Track.herkunft`

>>>
Altdorf, ein Kontor an der Reik
<<<

### G-track-motivation
- Ort: Track · Motivation
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Track.motivation`

>>>
Zahlen, die stimmen. Leute, die zahlen.
<<<

### G-track-shortGoal
- Ort: Track · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Track.shortGoal`

>>>
Einen Preis in Drosselau erfahren, der kein Wucher ist.
<<<

### G-track-longGoal
- Ort: Track · langes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Track.longGoal`

>>>
Ein Siegel, das die Tore wieder aufmacht.
<<<

### G-track-woher
- Ort: Track · Antwort: woher
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Track.woher`

>>>
Kontor in Altdorf. Der Wagen blieb hier stehen.
<<<

### G-track-glaube
- Ort: Track · Antwort: Glaube
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Track.glaube`

>>>
Handrich. Der Rest ist Buchhaltung.
<<<

### G-track-angst
- Ort: Track · Antwort: Angst
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Track.angst`

>>>
Leere Taschen und volle Speicher der anderen.
<<<

### G-truck-herkunft
- Ort: Truck · Herkunft
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Truck.herkunft`

>>>
Karaz-a-Karak, Lehrling auf der Walz
<<<

### G-truck-motivation
- Ort: Truck · Motivation
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Truck.motivation`

>>>
Ein Werk, das hält. Ein Groll, der wartet.
<<<

### G-truck-shortGoal
- Ort: Truck · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Truck.shortGoal`

>>>
Eine Esse in der Schmiedezeile, die nicht fremd ist.
<<<

### G-truck-longGoal
- Ort: Truck · langes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Truck.longGoal`

>>>
Die Walz beenden. Nicht in dieser Stadt sterben.
<<<

### G-truck-woher
- Ort: Truck · Antwort: woher
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Truck.woher`

>>>
Die Walz. Der Hammer ist älter als die Stadtmauer.
<<<

### G-truck-glaube
- Ort: Truck · Antwort: Glaube
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Truck.glaube`

>>>
Grungni. Ahnen zuerst.
<<<

### G-truck-angst
- Ort: Truck · Antwort: Angst
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Truck.angst`

>>>
Schande vor den Ahnen, wenn das Werk bricht.
<<<

### G-hanni-herkunft
- Ort: Hanni · Herkunft
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Hanni.herkunft`

>>>
Haffenstadt, Cousinen in jeder Gasse
<<<

### G-hanni-motivation
- Ort: Hanni · Motivation
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Hanni.motivation`

>>>
Nicht auffallen. Trotzdem satt werden.
<<<

### G-hanni-shortGoal
- Ort: Hanni · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Hanni.shortGoal`

>>>
Eine warme Ecke in der Bettelgasse, ohne Schuld.
<<<

### G-hanni-longGoal
- Ort: Hanni · langes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Hanni.longGoal`

>>>
Nanni wieder nach Hause bringen. Dann essen.
<<<

### G-hanni-woher
- Ort: Hanni · Antwort: woher
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Hanni.woher`

>>>
Haffenstadt. Die Tante hat uns auf den Wagen gesetzt.
<<<

### G-hanni-glaube
- Ort: Hanni · Antwort: Glaube
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Hanni.glaube`

>>>
Esmeralda. Der Topf zuerst.
<<<

### G-hanni-angst
- Ort: Hanni · Antwort: Angst
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Hanni.angst`

>>>
Hunger, und dass Nanni ohne mich bleibt.
<<<

### G-nanni-herkunft
- Ort: Nanni · Herkunft
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Nanni.herkunft`

>>>
Ubersreik, eine kleine Praxis
<<<

### G-nanni-motivation
- Ort: Nanni · Motivation
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Nanni.motivation`

>>>
Wunden schließen. Fragen offen lassen.
<<<

### G-nanni-shortGoal
- Ort: Nanni · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Nanni.shortGoal`

>>>
Wer in Drosselau heilen darf, ohne die Gilde zu fragen.
<<<

### G-nanni-longGoal
- Ort: Nanni · langes Ziel
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Nanni.longGoal`

>>>
Hanni nicht verlieren. Dann weiter.
<<<

### G-nanni-woher
- Ort: Nanni · Antwort: woher
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Nanni.woher`

>>>
Ubersreik. Die Lehre war kürzer als der Weg hierher.
<<<

### G-nanni-glaube
- Ort: Nanni · Antwort: Glaube
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Nanni.glaube`

>>>
Shallya. Die Hand, nicht das Schwert.
<<<

### G-nanni-angst
- Ort: Nanni · Antwort: Angst
- Datei: `src/lib/wfrp/party.ts`
- Feld: `Nanni.angst`

>>>
Ein Fieber, dem ich keinen Namen geben kann.
<<<


## Schwierigkeit

### D-sehr-leicht
- Ort: Sehr leicht (+60)
- Datei: `src/lib/wfrp/types.ts`
- Feld: `DIFFICULTY_LABEL.sehr-leicht`

>>>
Sehr leicht (+60)
<<<

### D-leicht
- Ort: Leicht (+40)
- Datei: `src/lib/wfrp/types.ts`
- Feld: `DIFFICULTY_LABEL.leicht`

>>>
Leicht (+40)
<<<

### D-durchschnittlich
- Ort: Durchschnittlich (+20)
- Datei: `src/lib/wfrp/types.ts`
- Feld: `DIFFICULTY_LABEL.durchschnittlich`

>>>
Durchschnittlich (+20)
<<<

### D-herausfordernd
- Ort: Herausfordernd (+0)
- Datei: `src/lib/wfrp/types.ts`
- Feld: `DIFFICULTY_LABEL.herausfordernd`

>>>
Herausfordernd (+0)
<<<

### D-schwer
- Ort: Schwer (−20)
- Datei: `src/lib/wfrp/types.ts`
- Feld: `DIFFICULTY_LABEL.schwer`

>>>
Schwer (−20)
<<<

### D-sehr-schwer
- Ort: Sehr schwer (−30)
- Datei: `src/lib/wfrp/types.ts`
- Feld: `DIFFICULTY_LABEL.sehr-schwer`

>>>
Sehr schwer (−30)
<<<

---

Ende der Liste. Alles darunter ignoriere ich beim Wiedereinsetzen.
