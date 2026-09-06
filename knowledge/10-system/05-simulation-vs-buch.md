# Simulation vs. Buch

Die Datei [03-simulation-basar-rauferei.md](03-simulation-basar-rauferei.md) ist ein **Walkthrough der Tisch-Arbeit** (Ort → gefilterte Liste → Intention → Konsequenz → Event). Sie ist nicht die Würfelautorität.

Das Regelwerk bleibt die Autorität (Spielbeschreibung §1). Wo die Simulation Zahlen kürzt, rechnet die Engine nach dem Buch.

---

## Erfolgsgrade

**Buch S. 152 (Default):**  
EG = Zehnerstelle des (modifizierten) Fähigkeitswerts − Zehnerstelle des Wurfs.

Beispiel im Buch: Reiten 41, Wurf 29 → 4 − 2 = **+2 EG**.

**Simulation** rechnet offenbar `trunc((Ziel − Wurf) / 10)`:

| Stelle | Ziel | Wurf | Sim | Buch | Folge |
|--------|------|------|-----|------|--------|
| Umschauen | 41 | 27 | +1 EG | **+2 EG** | Erfolg bleibt |
| Reden | 45 | 62 | −1 EG | **−2 EG** | Misserfolg bleibt |
| Feilschen Greta | 47 | 33 | +1 EG | +1 EG | gleich |
| Feilschen Otto | 50 | 71 | −2 EG | −2 EG | gleich |

Option „Schnelle EG“ (S. 152: bei Erfolg zählt die Zehnerstelle des Wurfs) ist ein anderes Verfahren und ebenfalls nicht das, was die Simulation benutzt. v1 verwendet den **Default**.

---

## Sturmangriff und Vorteile

**Buch S. 158, Beispiel Salundra:** Sturmangriff gibt +1 Vorteil, der **vor dem Trefferwurf** auf den Zielwert geht (KG 49 + 10 = 59).

**Simulation Entscheidung 5:** Vergleich 31 vs. 38, ohne +10, danach „Vorteile 2“. Das ist Walkthrough-Kürzung.

Engine: Vorteil aus Sturmangriff sitzt vor dem Vergleich, sofern die Distanz stimmt (Ziel mindestens Bewegung in m entfernt, innerhalb Rennen-Reichweite, nicht schon gebunden). Greta B 4 → Rennen 16 m, Distanz 4 m → legal.

---

## „Kein Widerstand / Hilflos“

Spielbeschreibung §7 zitiert S. 162 / SL-Notiz S. 260 so, als gäbe es im Kampf keinen Verteidigerwurf.

**Buch S. 158:** Nahkampf **ist** ein Vergleichender Wurf. Beide würfeln.

**Buch S. 162 Hilflose Ziele:** automatisch erfolgreich gegen Schlafende, Bewusstlose oder sonst Hilflose.

**Buch S. 260 „Kein Widerstand“:** Wenn Kombattanten den Vergleich **verweigern**, weil sie Angst vor einem schlechten Wurf haben, gelten sie als *Hilflos*. Das ist eine SL-Notiz gegen das Ausweichen vor der Mechanik, keine Abschaffung des Vergleichs.

Die Simulation selbst würfelt Kurt gegen Greta. Engine: Vergleich ist der Default. Hilflos nur bei Bewusstlos / Überrascht ohne Verteidigung / SL-Setzung.

---

## Schaden

Buch S. 159 und Waffentabelle S. 294:

```
Schaden     = Waffenschaden + EG          # Dolch +STB+2, waffenlos +STB+0
LP-Verlust  = Schaden − (WIB + RP)        # Treffer immer mindestens 1 LP
```

Simulation „3+2+1=6 − 3 = 3 LP“ ist STB 3 + Dolch +2 + 1 EG − WIB 3. Die **Formel** stimmt, sobald die EG aus dem Buch kommen. Mit Buch-EG beim Umschauen ändert sich dort nichts am Schaden; im Kampf schon, wenn der Sturmangriff +10 den Vergleich verschiebt.

---

## Was die Simulation trotzdem trägt

- Gefilterte Listen an jeder Entscheidung (Basar ~11, Gasse 18+ → Tabs Pflicht).
- Grau statt löschen, Grund auf der Karte.
- Glück-Fenster muss ein eigener Tick sein, sonst wird es verpasst.
- Events hängen an Flags, nicht am Zufallsgenerator.
- 1 SC, SL bleibt Anführer. Parallelintentionen sind der Normalfall erst mit mehreren SC.

Diese Punkte bleiben Spezifikation. Die **Zahlen** der Würfe sind Beispiele.

---

### Siehe auch
- [Datenmodell](02-datenmodell.md)
- [Simulation Basar + Rauferei](03-simulation-basar-rauferei.md)
- [Würfel](../05-regeln/01-wuerfel-und-grundmechanik.md)
- [Angreifen](../05-regeln/07-angreifen-schaden.md)
