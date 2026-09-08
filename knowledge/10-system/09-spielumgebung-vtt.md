# Spielumgebung — was Roll20 und Inkarnate uns geben

Stand: 2026-09-08 — Die Karte ist Standbild und Klappe, nicht der Tisch. Der Tisch ist [10-leben-chat.md](10-leben-chat.md). Zeit: [15-async-sitzung.md](15-async-sitzung.md).

---

## These

Roll20 ist ein **gemeinsamer Live-Abend**. Die Frist ist ein **Pult, das wartet**.

Wir übernehmen die **Möbel** (Karte, Journal, Tracker, Handouts, Nadeln) als Klappen. Nicht den **Abend** (Video, gleichzeitiges Token-Schieben, dynamisches Licht). Der Spieler sieht zuerst den Faden, nicht das Brett.

Inkarnate ist die **Kartenküche**. Exportierte Bilder kommen auf den Tisch. Der Editor bleibt draußen.

---

## Roll20 — Funktionsinventar

### Tischfläche

| Funktion | Was sie tut | Bei uns |
|----------|-------------|---------|
| Seiten / Maps | Eine Kampagne, viele Blätter | Szenen. Eine sichtbar. SL wechselt. |
| Ebenen | Map, Token, GM, Vordergrund, Licht | Drei reichen: Karte, Token, SL-Geheimnis. |
| Token | Figur auf der Karte, Balken LP, verknüpft mit Bogen | Token = Charakter/NSC. Klick öffnet Bogen. Position = Distanz, nicht 5-Fuß-Taktik. |
| Raster / Maß | Lineal, Kegel, Kreis | WFRP misst Meter und Reichweite, kein D&D-Grid. Maßband ja, Snap-Grid nur optional. |
| Zeichnen / Text | SL kritzelt, Ping | SL-Zeichnung und „hier!“-Ping. Spieler sieht das, wenn SL es zeigt. |
| Nebel / Enthüllen | Manuell Fläche zeigen | **Ja.** SL reißt den Vorhang. Das ist asynchron: Spieler sieht den Stand, nicht die Animation. |
| Dynamisches Licht / LOS | Wer was in Echtzeit sieht | **Nein.** Teuer, Live-Logik, Buch braucht das nicht. |
| Vordergrund / Dächer | Dächer ausblenden | Später, wenn Karten das brauchen. |
| Map-Pins | Nadel → Handout / Hinweis | **Ja, früh.** Ausgang, NSC, Fund, SL-Notiz. |
| Reaktionen / Fallen | Token betritt Fläche → Effekt | Asynchron: Pin mit Auslöser, SL wirft ein. Keine Auto-Falle. |
| FX / Partikel | Feuer, Blut | Kosmetik, später oder nie. |
| Player View | SL sieht genau die Spielersicht | **Ja, als Rolle.** Haben wir schon (der Spielercharakter / Tisch / SL). Sauberer trennen. |

### Sidebar

| Tab | Inhalt | Bei uns |
|-----|--------|---------|
| Chat | Würfel, Flüstern, Log | **Protokoll.** Kein Live-Chat. Einträge: Welt, Regel, Ereignis. |
| Art Library | Uploads, Marktplatz | **Szenenbilder + Token-Ordner.** Inkarnate-Export, Portraits. |
| Journal | Charaktere, Handouts, Ordner, Freigabe | **Herzstück.** Bogen, NSC, Fundstücke, Spieler sieht nur Freigegebenes. |
| Compendium | Verlagsregeln | Unser [knowledge/](../00-INDEX.md). Kein Roll20-Markt. |
| Jukebox | Musik, Ambience | Später oder nie. Asynchroner Tisch braucht keine Loop. |
| Collections | Makros, Kartendecks, Würfeltabellen | **Tabellen ja** (W100, Karriere, Schicksal). Kartendecks nur wenn das Buch sie braucht. Makros = unsere Befehle, nicht Chat-Strings. |
| Settings | Audio, Hotkeys, Blatt | Einstellungen dünn halten. |

### Kampf und Ordnung

| Funktion | Roll20 | WFRP 4e / Frist |
|----------|--------|-----------------|
| Turn Tracker | Liste + Zahl, oft W20+Mod | **I-Reihenfolge.** Optional I+W10. Nicht D&D. |
| Initiative würfeln ins Tracker | Makro `&{tracker}` | SL oder Engine legt die Liste an. Einmal pro Kampf, dann fest. |
| Checkliste Runde | fehlt als Konzept | **Wir brauchen sie extra:** Wer hat gehandelt, wer hat Intention, Vorteile, Zustände, Engaged. |
| Token-Balken | LP / zweite Ressource | LP, Vorteile. Glück/Mut bleiben am Bogen. |
| 3D-Würfel | Show | Optional. Buch ist W100. Ergebnis ins Protokoll. |

### Was wir bewusst nicht klonen

- Video / Voice / WebRTC
- Charactermancer (wir haben `/erschaffung`)
- API / Mods / Transmogrifier
- Marketplace, Abos, Compendium-Kauf
- Gleichzeitiges Token-Ziehen als Kampfregel

---

## Inkarnate — nur Küche

Inkarnate erzeugt Welt-, Stadt-, Innen- und Battlemaps. Export PNG/WebP, hohe Auflösung.

**Pipeline**

1. SL (oder wir ) zeichnet in Inkarnate.
2. Export als Bild.
3. Szene trägt `mapImage`, Maßstab (Meter/Kachel), Pins.
4. Tisch zeigt das Bild. Token und Nadeln liegen darüber.

Nicht: Inkarnate einbetten. Nicht: jeden Baum selbst stempeln in der Engine.

Demo braucht **eine** Altdorf-Gasse / Basar-Karte, nicht zwanzig.

---

## Was der aktuelle Tisch falsch macht

Heute: dunkle Schale, Textszene, Aktionskarten, HUD-Chips, SL-Liste. Keine Karte, kein Tracker, kein Journal, kein „wo stehe ich“.

Der Spieler liest. Am physischen Tisch **schaut** er auf die Karte, den Bogen und die Initiative-Zettel.

---

## Zielbild Tisch (asynchron)

Drei Zonen, eine Sprache (Pult + Pergament, wie Start/Erschaffung/Bogen):

1. **Karte** — Inkarnate-Bild, Token, Pins, Vorhang. Spieler sieht nur Enthülltes.
2. **Tracker** — Kampf: I-Liste, Runde, Vorteile, Zustände, wer ist dran / wer hat Intention abgegeben. Sozial/Reise: Checkliste der offenen Fäden, nicht Initiative.
3. **Blatt rechts** — Protokoll + Intention (Spieler) bzw. Ereignisse/Flags (SL). Journal-Karten (Handout) klappen auf.

Bogen bleibt `/bogen`. Vom Token erreichbar.

Frist (Countdown) bleibt über der Karte, nicht als Live-Video.

---

## Checkliste — was „Initiative und so weiter“ konkret heißt

**Nur im Modus Kampf** (Buch S. 156 ff., Reihenfolge nach *I*, optional I+W10):

- Liste aller Anwesenden, sortiert nach I (hoch → tief)
- Runde
- Markierung: hat diesen Zug gehandelt / Intention liegt / SL hat aufgelöst
- Vorteile je Figur
- Zustände
- Engaged / Distanz in Metern (aus Token-Lage oder SL-Feld)

**Außerhalb Kampf:** dieselbe Leiste wird zur **Szenen-Checkliste**

- Wer ist anwesend
- Wer hat Intention gesendet
- Offene Pins (Türen, NSC, Fund)
- Vorbereitete Ereignisse (SL)

Kein zweites System. Eine Leiste, zwei Beschriftungen.

---

## Reihenfolge, wenn wir den Tisch umbauen

Nicht alles auf einmal. Jeder Schritt muss mit dem bestehenden Seed (Basar/Gasse, der Spielercharakter) wieder zusammensetzbar sein.

1. Karte als Szenengrund (ein Bild, Token-Punkte, Pins)
2. Tracker/Checkliste (I-Liste + Intention-Status)
3. Journal/Handouts (Freigabe SL → Spieler)
4. Vorhang (SL enthüllt Flächen)
5. Maßband in Metern
6. Erst dann: mehr Karten, Dächer, Tabellen-UI

Erschaffung und Bogen bleiben. Wissen bleibt Autorität.

## Nicht das Miniaturenspiel

Die Datei `Digital Rulebook _ Warhammer Fantasy_ 4th Edition` (4th.whfb.app) ist **Warhammer Fantasy Battle** 4. Edition: Armeen, Punkte, Zoll, Phasen Zug.

Das ist **nicht** unser Grundregelwerk (Roleplay 4e, Ulisses). Profile dort: M WS BS S T W I A Ld. Bei uns: KG BF ST WI I GW GS IN WK CH.

Vom Battle-Buch für den Tisch nur die **Checkliste**, nicht die Armeeregeln:

1. Bewegung (Ladung ansagen, Rest bewegen)
2. Schuss
3. Nahkampf — beide Seiten, Reihenfolge nach I, Wer geladen hat schlägt zuerst
4. Magie

WFRP bleibt: einzelner Charakter, W100, Vorteile, SL entscheidet. Keine 1000-Punkte-Schlacht.

Vollextrakt der Verzeichnisse (Einheiten, Psychologie, Zugfolge, Waffen): [13-battle-index](../13-battle-index/README.md).

---

## Siehe auch

- [Das Spiel](00-das-spiel.md)
- [UI Orientierung](08-ui-orientierung.md)
- [Datenmodell](02-datenmodell.md)
- [Aktionskatalog](04-aktionskatalog-v1.md)
- [Battle-Index](../13-battle-index/README.md)
