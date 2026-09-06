# WFRP Async Website

Internes Entwicklungsrepository. Asynchrone Website für **Warhammer Fantasy Roleplay 4. Edition** (Grundregelwerk, 2. überarbeitete Auflage), Gruppen bis 10 Spieler.

Kein Fan-Projekt. Die Umsetzung liegt beim Entwicklungsteam dieses Repos.

**Repo:** [PromptBrainless/wfrp-async-website](https://github.com/PromptBrainless/wfrp-async-website) (privat)

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
2. [knowledge/00-BEFEHLE.md](knowledge/00-BEFEHLE.md)
3. [knowledge/00-VOLLTEXT.md](knowledge/00-VOLLTEXT.md) — Platzhalter → Buchtext
4. [knowledge/00-QUELLEN.md](knowledge/00-QUELLEN.md)
5. [knowledge/00-INDEX.md](knowledge/00-INDEX.md)
6. [knowledge/10-system/00-das-spiel.md](knowledge/10-system/00-das-spiel.md)
7. [knowledge/10-system/06-befehle.md](knowledge/10-system/06-befehle.md)

---

## Stand

Wissensbasis folgt dem Inhaltsverzeichnis. Viele Dateien sind noch Platzhalter oder Kurzfassung. **Auftrag jetzt:** Platzhalter gegen Volltext aus den Buchseiten tauschen.

Simulation und UI sind später. Nicht in dieser Arbeitsliste.

---

## Repo-Struktur

```
README.md
NEUES-FENSTER.md
.gitignore
skill/                          Grok-Skill pdf-to-interlinked-md
knowledge/
  00-BEFEHLE.md
  00-VOLLTEXT.md                Platzhalter-Tausch, Wellen
  00-QUELLEN.md                 Drive-WebP, Seitenzahl = Datei−1
  00-INDEX.md
  01-einfuehrung/ … 12-magie/   Buchstruktur
  04-faehigkeiten-talente/faehigkeiten/
  10-system/                    Loop, Katalog, Datenmodell (abgeleitet)
  data/                         JSON, später
src/lib/wfrp/                   Engine-Kern, kein UI
```

---

## EG-Formel (kanonisch)

Buch S. 151, `src/lib/wfrp/dice.ts`:

```
EG = Zehnerstelle(Zielwert) − Zehnerstelle(Wurf)
01–05 immer Erfolg (EG mindestens +1)
96–00 immer Misserfolg (EG höchstens −1)
00 auf dem W100 = 100
```

---

## Lizenz / Recht

Internes Arbeitsmittel des Entwicklungsteams. Privates Repository.

Warhammer, Warhammer Fantasy Roleplay und zugehörige Marken bleiben bei den Rechteinhabern (Games Workshop, Cubicle 7, Ulisses). Die MD-Dateien sind die Arbeitsabschrift für diese Umsetzung, keine Veröffentlichung nach außen.

Kein PDF und keine Scans ins Git. Quelle der Abschrift: Drive-WebP, siehe [knowledge/00-QUELLEN.md](knowledge/00-QUELLEN.md).
