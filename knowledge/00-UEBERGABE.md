# Übergabe – WFRP asynchrone Website / Wissensbasis

**Stand:** 2026-09-06 Abend. Internes Entwicklungsrepo.

**Jetzt:** Buch → MD, drei Dateien je Mechanik. **Nicht:** Website, Simulation, Walkthrough.

**Repo:** https://github.com/PromptBrainless/wfrp-async-website  
**Fortschritt:** [00-VOLLTEXT.md](00-VOLLTEXT.md)  
**Arbeitsregeln:** [00-BEFEHLE.md](00-BEFEHLE.md) · **IDs:** [10-system/06-befehle.md](10-system/06-befehle.md) · **Skill:** [../skill/SKILL.md](../skill/SKILL.md)

**Sprache:** Deutsch  
**Regelwerk:** WFRP 4e GRW, 2. überarbeitete Auflage (Ulisses)

Lies zuerst: diese Datei → [NEUES-FENSTER.md](../NEUES-FENSTER.md) → `00-BEFEHLE` → `00-VOLLTEXT` → `00-INDEX`.

---

## 1. Ziel (später)

Website, Gruppen bis 10, asynchron, WFRP 4e. Spieler = Intention. SL = Welt / Regeln / Geschichte.

```
Charakter an Ort XY
    → Zustand + Welt
    → Katalog (grau, nie löschen)
    → Intention
    → Engine + SL
    → neuer Zustand
```

Das Regelwerk bleibt die Autorität.

---

## 2. Was steht

Gerüste: **329** Ordner (`original` / `angepasst` / `details` / `README`).  
Buchtext im Original: **67** (45 Fähigkeiten, 12 Zustände, 8 Demo-Talente, Städter, Kaufmann).

| Block | Original |
|-------|----------|
| Fähigkeiten S. 118–131 | 45 / 45 |
| Zustände S. 167–169 | 12 / 12 |
| Demo-Talente | 8 / 167 |
| Städter S. 67, Kaufmann S. 65 | 2 / 64 |
| Völker, Attribute, Qualitäten, restliche Karrieren | Gerüst |

Gate: `python3 skill/scripts/validate_wissen.py` · Hooks: `bash skill/scripts/install-hooks.sh`  
Buchseiten: [00-QUELLEN.md](00-QUELLEN.md) · Datei N = Buch N−1. Kein Scan ins Git.

Alte Zählung „61 Dateien / 15–25 %“ und Pfade unter `/home/workdir/artifacts/wfrp-md/` sind **obsolet**.

---

## 3. Arbeitsregeln

1. Deutsch, Buchbegriffe (KG, BF, EG, Vorteile, Zustände).
2. Bestehende Ordner. Keine parallele Hierarchie.
3. `original.md`: Buch, `Status: Original, nicht anfassen`, **kein** `### Befehl`.
4. `angepasst.md`: nur Projekt. `### Befehl` + Link auf Original. Katalog-ID zuerst ins Befehlsregister.
5. Alle drei: `### Siehe auch`. Relative Links müssen existieren.
6. Unsicher: Text stehen lassen, in details `[prüfen am Buch S. xx]`.
7. Nach jedem Block: INDEX, VOLLTEXT-Häkchen, Validator, Commit.

---

## 4. Konvention

```
knowledge/<kapitel>/<slug>/
  README.md
  original.md
  angepasst.md
  details.md
```

Alte `name.md` = Zeiger. Daten: `knowledge/data/*.json`. Loop/Katalog: `knowledge/10-system/`.

---

## 5. Nächste Aufgabe

Siehe [00-VOLLTEXT.md](00-VOLLTEXT.md) — Als Nächstes:

1. 5 Völker S. 36
2. Halunke (Kurt)
3. Attribute, wenn Völker das brauchen

**Nicht tun:** Website, Simulation, neue Ordnerhierarchie, Magie/Religion vor dem Demo-Schnitt.

---

## 6. Offene Entscheidungen (User)

- Tick: festes Fenster vs. „wenn alle gezogen haben“
- Vorteile-Obergrenze (Buch-Option)
- Krankheiten im Live-Spiel
- Magie in v1

---

## 7. Letzte Commits

- `a75ac81` — 12 Zustände Original
- `47f5141` — Städter, Kaufmann, 8 Talente Original
- `80862c9` — Gerüste, Register, Gate

### Siehe auch

- [00-VOLLTEXT.md](00-VOLLTEXT.md)
- [00-BEFEHLE.md](00-BEFEHLE.md)
- [00-INDEX.md](00-INDEX.md)

