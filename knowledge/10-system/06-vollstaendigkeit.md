# Vollständigkeit – Engine vs. Buch vs. Demo

Stand: 2026-09-06, nach Drive-PDF (volle GRW-Datei).  
Kein UI, bis diese Tabelle für v1 grün ist.

Legende: **OK** Engine darf bauen · **Lücke** fehlt für v1 · **Später** bewusst nicht v1.

## Datenbanken (`knowledge/data/`)

| Tabelle | Status | Lücke |
|---------|--------|--------|
| Fähigkeiten (45) | OK | Talenttexte nicht alle |
| Zustände (12) | OK | — |
| Waffen Demo (Dolch, waffenlos) | OK | Resttabelle vorhanden, Qualitäten-Texte dünn |
| Völker-Attribute | OK | Hoch- vs. Waldelf-Talente nur in MD |
| Charaktere Demo | OK | Otto Status Silber 1 vs. Buch Händler Silber 2 markiert |
| Katalog + Grau | OK | Typo `intuiton` in alter Katalog-MD, JSON heißt `intuition` |
| Szenen Basar/Gasse | OK | — |
| rules-core | OK | — |
| Simulation-Trace | OK | Walkthrough-Würfel im Kampf unvollständig; Invariante LP→Vorteile 0 |

## Regeln, die die Demo wirklich braucht

| Thema | Buch | Status |
|-------|------|--------|
| W100, 00=100, 01–05 / 96–00 | S. 150 | OK |
| EG = Zehner−Zehner | S. 152 | OK (dice.ts + JSON) |
| Vergleich, finale EG | S. 155 / 158 | OK |
| Schwierigkeitstabelle | S. 153 | OK |
| Vorteile +10, Verlust bei LP/Zustand/Niederlage | S. 164 | OK in JSON; Walkthrough verletzt LP-Verlust |
| Sturmangriff +1 Vorteil vor Wurf | S. 165 | OK |
| Lösen / Flucht / Sprinten | S. 165 | OK |
| Freie Handlung / Waffe ziehen | S. 158 | OK v1-Annahme |
| Schaden + min. 1 LP | S. 159 | OK |
| Trefferzone vertauschen | S. 159 | OK |
| Zustände 12 | S. 167–170 | OK |
| Glück / Schicksal / Mut / Zähigkeit | S. 170–171 | OK, Fenster eigener Tick |
| Geld 1 GK=20 S=240 G | S. 288 | OK |
| Feilschen −10 % / −20 % | S. 291 | OK; Walkthrough nutzte 5 S-Hausregel |
| Grund vs. Ausbau | S. 118 | OK |
| Städter = Krämerin | S. 67 | OK, Mapping in characters.json |
| LP-Formel | S. 34 | OK, Greta 12, Kurt 11 |

## Bewusst nicht v1

Magie, Gebete, Krankheiten-Tabellen, Fernkampf, Packen/Ringen, KI, Auth, Server-DB.

## Offene SL-Defaults (nicht Buchlücken)

1. Tick: Mix (alle gezogen oder Frist).
2. Vorteile-Obergrenze: IB (Buch-Option S. 164).
3. Feilschen-Rundung: Groschen, nicht ganze Schillinge.
4. Otto Silber 1 statt Buch Silber 2 lassen.

## Nächster Bau, erst wenn User sagt

Engine an `knowledge/data/*.json` verdrahten, nicht an Walkthrough-Zahlen.
