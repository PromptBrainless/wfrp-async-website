# WFRP Async Website

Privates Fan-Projekt: **Warhammer Fantasy Roleplay 4. Edition** (Grundregelwerk, 2. überarbeitete Auflage, Ulisses) als **asynchrone Website** für Gruppen bis 10 Spieler.

Kein offizielles Produkt. Kein Regelwerk-Ersatz. Kein PDF im Repo. Rechte am Regelwerk: Cubicle 7 / Ulisses.

**Repo:** [PromptBrainless/wfrp-async-website](https://github.com/PromptBrainless/wfrp-async-website) (private)

---

## Ziel

Sims-Loop, nicht Live-Tisch:

```
Charakter an Ort XY
  → Zustand des Charakters + Weltzustand
  → gefilterter Aktionskatalog (Karten ausgegraut, nie gelöscht)
  → Spieler wählt Intention
  → Engine würfelt, Glück-Fenster nach eigenem Wurf
  → SL deutet in die Welt
  → neuer Zustand
```

Das Regelwerk bleibt die Autorität. Die Engine erfindet keine Regeln.

---

## Lies zuerst (neue Session)

1. [NEUES-FENSTER.md](NEUES-FENSTER.md)
2. [knowledge/00-BEFEHLE.md](knowledge/00-BEFEHLE.md) — wie weiter extrahiert wird
3. [knowledge/00-UEBERGABE.md](knowledge/00-UEBERGABE.md)
4. [knowledge/00-INDEX.md](knowledge/00-INDEX.md)
5. [knowledge/10-system/00-das-spiel.md](knowledge/10-system/00-das-spiel.md)
6. [knowledge/10-system/06-befehle.md](knowledge/10-system/06-befehle.md) — Befehlsregister
7. [knowledge/10-system/06-vollstaendigkeit.md](knowledge/10-system/06-vollstaendigkeit.md)

---

## Stand 2026-09-06 (dieser Commit)

### Was verbindlich ist

| Schicht | Pfad | Rolle |
|---------|------|--------|
| Spielbeschreibung | `knowledge/10-system/00-das-spiel.md` | Loop, Rollen, Katalog, Glück-Fenster |
| Befehle (Arbeitsregeln) | `knowledge/00-BEFEHLE.md` | Eine Mechanik = eine Datei |
| Befehlsregister (IDs) | `knowledge/10-system/06-befehle.md` | Jede Katalog-ID → Buchdatei |
| Datenmodell | `knowledge/10-system/02-datenmodell.md` | Entitäten, Enums, Pipeline |
| Maschinentabellen | `knowledge/data/*.json` | Engine liest JSON, nicht Walkthrough |
| EG-Formel | `src/lib/wfrp/dice.ts` | Zehner(Ziel) − Zehner(Wurf), 00=100 |
| Simulation | `knowledge/10-system/03-simulation-basar-rauferei.md` | Walkthrough, **keine** Autorität |
| Abgleich | `knowledge/10-system/05-simulation-vs-buch.md` | Divergenzen |

### Extraktion

- Inhaltsverzeichnis als Dateibaum (Platzhalter oder Inhalt)
- Regeln-Kern für v1 weitgehend (Würfel, Kampf, Vorteile, Kritisch, 12 Zustände, Schicksal, Schaden, Bewegung, Wunden, Heilung)
- 8 Einzelfähigkeiten mit Befehl-Block: Wahrnehmung, Intuition, Charme, Feilschen, Bestechen, Einschüchtern, Klatsch, Schleichen
- JSON: 45 Fähigkeiten, 12 Zustände, Waffen Demo, Völker, Charaktere (Greta/Otto/Kurt/Dieb), Katalog + Grau, Szenen, rules-core, Simulation-Trace
- **Website-UI ist bewusst nicht gebaut.** User-Befehl: Mechanik und Datenbanken zuerst.

### Bewusst nicht v1

Magie, Gebete, Krankheiten-Tabellen, Fernkampf ohne Waffe, Ringen/Packen, KI, Auth, Server-DB.

### Offene SL-Defaults (nicht Buchlücken)

1. Tick: Mix (alle gezogen oder Frist)
2. Vorteile-Obergrenze: IB (Buch-Option S. 164)
3. Feilschen-Rundung: Groschen, nicht ganze Schillinge
4. Otto Silber 1 statt Buch Silber 2 lassen

---

## Repo-Struktur

```
README.md
NEUES-FENSTER.md
.gitignore
skill/                          Grok-Skill pdf-to-interlinked-md
knowledge/
  00-BEFEHLE.md                 Arbeitsregeln jeder Session
  00-INDEX.md
  00-UEBERGABE.md
  00-ABGLEICH-INHALTSVERZEICHNIS.md
  01-einfuehrung/ … 12-magie/   Buchstruktur
  04-faehigkeiten-talente/faehigkeiten/   Einzeldateien
  10-system/                    abgeleitet (Loop, Katalog, Datenmodell)
  data/                         JSON für die Engine
src/lib/wfrp/                   dice, types, catalog, money (kein UI)
```

---

## EG-Formel (kanonisch)

Buch S. 152, umgesetzt in `src/lib/wfrp/dice.ts`:

```
EG = Zehnerstelle(Zielwert) − Zehnerstelle(Wurf)
01–05 immer Erfolg (EG mindestens +1)
96–00 immer Misserfolg (EG höchstens −1)
00 auf dem W100 = 100
```

Nicht `trunc((Ziel − Wurf) / 10)`. Die Simulations-Walkthrough-Zahlen weichen teilweise ab; die Engine folgt dem Buch.

---

## Nächster Schritt (nach diesem Commit)

Keine Website. Weiter Mechaniken einzeln in MD, vernetzen, Befehle hinterlegen.

Reihenfolge aus `knowledge/00-BEFEHLE.md`:

1. Restliche Katalog-Fähigkeiten (Athletik, Ausweichen, Nahkampf, Ausdauer, Besonnenheit, Fingerfertigkeit)
2. Kampfzug vollständig: Initiative/Überraschung, Zug, Treffer, Schaden, Vorteile, Bindung, Hilflos
3. Waffen v1 (Dolch, waffenlos, Handwaffe) + Traglast
4. Verwundungen, Tod, Heilung (vertiefen)
5. Markt: Verfügbarkeit + Feilschen-Preis
6. Charakterbogen-Felder

---

## Lizenz / Recht

Nur eigene Struktur, Ableitungen und Kurzextrakte für den privaten Gebrauch dieser Gruppe. Das Regelwerk bleibt bei Ulisses / Cubicle 7. **Kein PDF, keine Scans, keine Vollreproduktion des Buchs in einem Stück.**
