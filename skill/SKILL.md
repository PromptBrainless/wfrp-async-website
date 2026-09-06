---
name: wfrp-wissen
description: >
  WFRP 4e Wissensbasis bauen und prüfen. Pflicht vor jeder Extraktion,
  jedem Talent, jeder Karriere, jedem Volltext, Original/Angepasst/Details,
  Verknüpfen, Befehlsregister, Buchseite, Qualität. Nicht für Website-UI
  und nicht für Simulation. Triggers: extrahieren, volltext, original,
  angepasst, details, talent, karriere, fähigkeit, verknüpfen, befehl,
  buchseite, platzhalter, wissen, regelwerk, ungekürzt.
metadata:
  short-description: "WFRP MD: Original einfrieren, Angepasst+Details, Gate vor Commit"
user-invocable: true
---

# WFRP-Wissen — Qualität

Lies **vor dem ersten Schreiben** in dieser Session:

1. [knowledge/00-BEFEHLE.md](../knowledge/00-BEFEHLE.md)
2. [knowledge/00-VORLAGE.md](../knowledge/00-VORLAGE.md)
3. [knowledge/00-QUELLEN.md](../knowledge/00-QUELLEN.md)
4. `references/qa-gate.md` (dieses Skill)

Danach erst Dateien anlegen. Nach jedem Block: Validator, dann Commit.

---

## Wann

Jede Mechanik aus dem Grundregelwerk. Jeder Platzhalter-Tausch. Jede neue Katalog-ID.

Nicht: Website, UI, Simulation, Walkthrough nachrechnen.

---

## Eine Mechanik = ein Ordner

```
<slug>/
  README.md
  original.md     Buch. Nach Extraktion nicht anfassen.
  angepasst.md    Projekt (Karte, Grau, Resolver, Befehl)
  details.md      Hilfe, JSON-id, [prüfen], Fallen
```

Alte `name.md` bleibt **Zeiger** auf den Ordner.

| Datei | Pflicht | Verboten |
|-------|---------|----------|
| original | `Quelle: S. xx`, `Status: Original, nicht anfassen`, `### Siehe auch` | `### Befehl`, Die Frist, Katalog, Engine, Befehlsregister |
| angepasst | `### Befehl`, `### Siehe auch`, Link auf `original.md` | Buchtext noch einmal |
| details | JSON-`id` wenn es eine gibt, `### Siehe auch` | Volltext des Originals |
| README | Links auf die drei | Regeln erfinden |

Katalog-ID **zuerst** ins Befehlsregister, Ziel = `angepasst.md`.

---

## Buch holen

- WebP-Ordner, Mapping in `00-QUELLEN.md`. Datei `…_N.webp` = Buchseite **N − 1**.
- Zitat = Fußzeile, nie Dateiname.
- Visuell lesen. Kein OCR-Raten.
- Unsicher: Original so lassen, in details `[prüfen am Buch S. xx]`.
- EG: Zehner(Ziel) − Zehner(Wurf), Buch S. 151.
- Kein PDF, kein WebP ins Git.

Rohkapitel (ganzer Abschnitt) zusätzlich unter `_roh/` ablegen und nicht umschreiben.

---

## Nach jedem Block

1. INDEX Hub-Link
2. VOLLTEXT-Welle
3. Befehlsregister nur bei neuer ID
4. Übergabe Stand-Zeile
5. Validator (läuft auch als Git-Hook):

```
python3 skill/scripts/validate_wissen.py
bash skill/scripts/install-hooks.sh   # einmal pro Clone
```

`pre-commit` und `pre-push` in `.githooks/` rufen denselben Gate auf. Exit 1 = kein Commit / kein Push. GitHub Action `wissen` prüft `main` zusätzlich.

6. Commit

---

## Gate (kurz)

Vollständig: `references/qa-gate.md`.

- Kein erfundener Regeltext.
- Original nach dem Schreiben nicht „glätten“.
- Angepasst wiederholt das Buch nicht.
- Relative Links müssen existieren.
- Platzhalter (`TODO`, `📝`) nur bewusst, in INDEX so markiert.
