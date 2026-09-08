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
  → Spieler würfelt den W100, Glück-Fenster nach eigenem Wurf
  → SL deutet in die Welt
  → neuer Zustand
```

Das Regelwerk bleibt die Autorität. Die Engine erfindet keine Regeln.

---

## Lies zuerst (neue Session)

1. [NEUES-FENSTER.md](NEUES-FENSTER.md)
2. [skill/SKILL.md](skill/SKILL.md) — Qualität, Gate
3. [knowledge/00-BEFEHLE.md](knowledge/00-BEFEHLE.md)
4. [knowledge/00-VORLAGE.md](knowledge/00-VORLAGE.md)
5. [knowledge/00-REGISTER.md](knowledge/00-REGISTER.md) — IDs
6. [knowledge/00-BOGEN.md](knowledge/00-BOGEN.md)
7. [knowledge/00-VOLLTEXT.md](knowledge/00-VOLLTEXT.md)
8. [knowledge/00-QUELLEN.md](knowledge/00-QUELLEN.md)
9. [knowledge/00-INDEX.md](knowledge/00-INDEX.md)
10. [knowledge/10-system/00-das-spiel.md](knowledge/10-system/00-das-spiel.md)
11. [knowledge/10-system/06-befehle.md](knowledge/10-system/06-befehle.md)

---

## Stand

Fortschritt: [knowledge/00-VOLLTEXT.md](knowledge/00-VOLLTEXT.md) — **115 / 329** Originale mit Buchtext.

Oberfläche in Arbeit (Pergament auf dem Pult): Start, Erschaffung (11 Stationen), Bogen, Demo-Tisch. Simulation bleibt hintan. Buch bleibt die Autorität.

Git-Hooks (Qualität): einmal `bash skill/scripts/install-hooks.sh`. Danach blocken `pre-commit` / `pre-push` kaputtes Wissen und Buchscans. CI: `.github/workflows/wissen.yml`.

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
src/lib/wfrp/                   Engine-Kern
src/components/chargen/         Erschaffung
src/components/game/            Bogen, Tisch, SL
src/routes/                     Start, Erschaffung, Bogen, Tisch, SL
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
