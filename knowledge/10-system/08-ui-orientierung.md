# UI — geführte Orientierung (Erschaffung + Bogen)

Quelle: Gespräch [10](../02-charaktere/10-erschaffung-gespraech.md), Erklärungen [erschaffung/](../02-charaktere/erschaffung/README.md), Bogen [00-BOGEN.md](../00-BOGEN.md).  
Kein neues Regelwissen. Engine erfindet nichts. Simulation bleibt aus.

Stand heute: der Wizard unter `/erschaffung` ist ein **9-Schritt-Form**, das mit der Volk-Karte beginnt. Die 🔴-Schicht (Welt, PnP, `erkläre`) fehlt. EP-Badge ist das auffälligste Element — für Neulinge das Falsche.

---

## Ziel

Ein Neuling ohne Warhammer- und ohne PnP-Wissen kommt durch die Erschaffung, **ohne** zuerst ein Volk anzuklicken. Die UI führt:

1. Welt (Reikland, fünf Völker als Orte und Kulturen)
2. Volk wählen
3. PnP (was wir digital tun, was der SL bleibt)
4. dann die neun Buchschritte

Jede Station hat **eine** Hauptwahl und **eine** Erklärung aus der passenden MD. Nicht drei Wahrheiten.

---

## Was heute schiefgeht

| Oberfläche | Ist | Soll |
|------------|-----|------|
| Start `/` | Vier Rollen-Buttons, Szene zuerst | Weg: Welt verstehen → Figur → Tisch |
| Wizard-Kopf | „Buch S. 24–45“ + Bonus-EP | Wo bin ich, warum, was als Nächstes |
| Schritt-Nav | 9 flache Pills, nur rückwärts klickbar | Pfad mit Stationen 0–9, aktuelle erklärt |
| Schritt 1 | 5 Karten + Würfel, Zahlen (Schicksal 2) | Erst Welttext, dann Karten mit Kultur, Zahlen erst nach der Wahl |
| PnP | fehlt | Gate nach dem Volk, bevor Klasse |
| Erklärung | ein Satz `text-muted` | Panel / Drawer, Text aus `erschaffung/*.md` |
| Frage 1 Herkunft | Freitext | Ortsliste Reikland, Karte später |
| W100 | unsichtbar | später Balken; jetzt Zielzahl in Worten |
| Bogen `/bogen` | Datenliste | Blatt-Zonen wie S. 344, leere Felder erklärt nicht „Fehler“ |
| Shell | Szene / Bogen / Erschaffung / SL gleichwertig | Erschaffung ist der Einstieg; Szene erst mit Figur |

---

## Layout (Desktop)

Drei Spalten, eine Aufgabe.

```
┌─────────────┬──────────────────────────┬─────────────────────┐
│ Pfad        │ Station (Wahl)           │ Erklärung 🔴        │
│ 0 Welt      │ eine Frage, eine Aktion  │ Datei 01…39         │
│ 1 Volk      │                          │ „Mehr“ klappt Buch- │
│ · PnP       │                          │ Hub auf, nicht Chat │
│ 2 Karriere  │                          │                     │
│ …           │                          │                     │
│ 9 EP        │                          │                     │
└─────────────┴──────────────────────────┴─────────────────────┘
```

Mobil (~390px): Pfad als horizontale Stationen (eine Zeile, aktuelle mittig). Erklärung als **Sheet von unten**, Button „Warum / Erklären“ immer sichtbar, Standard **offen** beim ersten Besuch der Station, danach zugeklappt.

Eine primäre Aktion unten rechts: Weiter (disabled bis die Station erfüllt ist). Zurück links. Kein zweites „Würfeln“ als Hauptknopf — Würfeln ist Option.

---

## Stationen (Reihenfolge = Gespräch)

Buch bleibt neun Schritte. Orientierung **davor und dazwischen**, nicht als zehnter Buchschritt.

| UI-Station | Buch | Erklärung | Fertig wenn |
|------------|------|-----------|-------------|
| **0 Welt** | — | [01](../02-charaktere/erschaffung/01-welt-und-voelker.md) | „Weiter, ich habe die Welt gehört“ |
| **1 Volk** | Schritt 1 | 01 (Karten) | `volk` gesetzt |
| **1b PnP** | — | [02](../02-charaktere/erschaffung/02-pnp.md) | bestätigt |
| **2 Klasse/Karriere** | Schritt 2 | [03](../02-charaktere/erschaffung/03-klasse.md) [04](../02-charaktere/erschaffung/04-karriere.md) [05](../02-charaktere/erschaffung/05-status.md) [06](../02-charaktere/erschaffung/06-waehrung.md) [07](../02-charaktere/erschaffung/07-rang.md) | `karriere` gesetzt; Status/Rang **angezeigt**, nicht gewählt |
| **3 Werte** | Schritt 3 | [08](../02-charaktere/erschaffung/08-attribute.md) … [15](../02-charaktere/erschaffung/15-lp-max.md) | Methode + Extra-Punkte + Motivation |
| **4 Fähigkeiten** | Schritt 4 | [16](../02-charaktere/erschaffung/16-faehigkeit-und-talent.md) … [19](../02-charaktere/erschaffung/19-karriere-stufe-1.md) | 3+5 / 3+3 / 40 / 1 Talent |
| **5 Ausrüstung** | Schritt 5 | [20](../02-charaktere/erschaffung/20-ausruestung.md) … [23](../02-charaktere/erschaffung/23-traglast.md) | Pakete übernommen, Startgeld gewürfelt |
| **6 Details** | Schritt 6 | [24](../02-charaktere/erschaffung/24-alter-aussehen.md) [25](../02-charaktere/erschaffung/25-bart.md) [26](../02-charaktere/erschaffung/26-ziele.md) | Name |
| **7 Gruppe** | Schritt 7 | [27](../02-charaktere/erschaffung/27-gruppe.md) | überspringbar mit „SL führt zusammen“ |
| **8 Leben** | Schritt 8 | [28](../02-charaktere/erschaffung/28-zehn-fragen.md) | mind. 3 Fragen, Herkunft aus Ortsliste |
| **9 EP** | Schritt 9 | [29](../02-charaktere/erschaffung/29-steigerungen-ep.md) | optional; „Auf den Bogen“ immer erlaubt |

Abgeleitete Zahlen (Bewegung, Stufe-1-Name, Status, Boni, LP-Max, Glück, Mut, Startgeld, Traglast-Max) erscheinen als **Zeile „Folgt“**, nie als Eingabe.

---

## Erklärungspanel

- Text kommt aus den 39 MDs, **gebaut** nach `src/lib/wfrp/erklaerungen.ts` (Generator, nicht von Hand duplizieren).
- Pro Station eine Default-Datei. Unter-Themen als Tabs oder „Weiterlesen“: Status, Währung, Rang unter Karriere — nicht alle drei gleichzeitig.
- Button **Erklären** / **Schon klar** — merkt `localStorage` je Station.
- Kein Chat-Bot. Kein erfundenes Beispiel außer Demo Greta/Otto/Kurt, wo die MD sie nennt.
- Links „Buch“ öffnen den Hub (Völker-Original, Attribut-Original), nicht Wikipedia.

Befehl analog zum Assistenten: die UI *ist* `erkläre <thema>` für die aktuelle Station.

---

## Design (Frist, nicht Generic-Gold)

Bestehende Tokens behalten: Pergament (`bg` / `fg`), Wachsrot (`primary`), Cinzel + Source Serif. Das ist die Marke, kein zweites Theme.

Verfeinern, nicht umfärben:

- Eine Akzentfarbe: Wachsrot nur auf der primären Aktion und der aktuellen Station.
- Bonus-EP: klein, rechts, nicht größer als der Stationstitel.
- Keine Emoji. Lucide, einfarbig.
- Keine Verlaufs-Blobs (der radiale Wash auf `/` runter auf ≤8 % oder weg).
- Konzentrische Radien: äußeres `sheet` größer als innere Karten.
- Mobil zuerst, Tap ≥ 44px.
- Leere Bogenfelder: Beschriftung + „wird im Spiel gefüllt“, Tooltip auf [30–39](../02-charaktere/erschaffung/README.md).

Bogen-Ansicht später: Zonen wie Blatt S. 344 (Identität, Werte-Tabelle Anfang/Steigerung/Aktuell, LP/Glück/Mut, Silhouette RP, Inventar). Nicht diese Phase.

---

## W100 und Karte (nicht Blocker)

- **W100:** in Station 3 ein Satz „Ziel 65 = 65 von 100“. Grafik (10×10 oder Balken) eigene Phase, nicht in Orientierung.
- **Herkunft:** Ortsliste aus [Leben im Reikland](../07-reikland/04-leben-im-reikland.md) als Auswahl. Interaktive Karte eigene Phase.

---

## Startseite

Drei Wege, nicht vier gleichwertige Rollen:

1. **Figur anlegen** → Station 0
2. **Demo spielen (Greta)** → Tisch, nur wenn man die Welt nicht anlegen will
3. **Spielleiter** → SL, sekundär

„Allein am Tisch“ entfällt oder wird Demo.

---

## Phasen

### A — Orientierung (als Nächstes)

- Station 0 Welt, 1b PnP
- Drei-Spalten- / Sheet-Erklärung
- Pfad statt 9 Pills
- Generator `erklaerungen.ts` aus den MDs
- Startseite auf drei Wege
- Keine neuen Regeln, keine Simulation

### B — Stationen füllen

- Volk-Karten: Kultur/Ort zuerst, Werte klein
- Karriere: Status/Rang/Geld als „Folgt“-Zeile mit Erklär-Tabs
- Leben: Ortsliste, drei-von-zehn
- Bogen: leere Felder beschriften (Vorteile 0 ist korrekt)

### C — Darstellen

- W100-Grafik
- Herkunftskarte
- Bogen-Silhouette RP
- Wizard nicht blockieren, wenn C fehlt

---

## Nicht tun

- Regeln in der UI erfinden, die nicht in `erschaffung/` oder `original.md` stehen
- Bürger-Daten für andere Klassen erfinden
- Kampf-Simulation, Würfel-Resolver am Tisch „fertig machen“
- Zweites Farbsystem, Gold-Akzent, Emoji, Lorem

### Siehe auch

- [Erklärungen](../02-charaktere/erschaffung/README.md)
- [Gespräch](../02-charaktere/10-erschaffung-gespraech.md)
- [Bogen](../00-BOGEN.md)
- [Befehle](../00-BEFEHLE.md)
