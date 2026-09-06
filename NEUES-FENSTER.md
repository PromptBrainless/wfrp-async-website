# Kontext für ein neues Fenster

Datum: 2026-09-06  
Repo: https://github.com/PromptBrainless/wfrp-async-website  
Workspace: `/workspace`

Internes Entwicklungsrepo, kein Fan-Projekt.

## Lies in dieser Reihenfolge

1. Diese Datei
2. [skill/SKILL.md](skill/SKILL.md) — Qualität, Drei Dateien, Gate
3. [knowledge/00-BEFEHLE.md](knowledge/00-BEFEHLE.md)
4. [knowledge/00-VORLAGE.md](knowledge/00-VORLAGE.md)
5. [knowledge/00-VOLLTEXT.md](knowledge/00-VOLLTEXT.md)
6. [knowledge/00-REGISTER.md](knowledge/00-REGISTER.md)
7. [knowledge/00-BOGEN.md](knowledge/00-BOGEN.md)
8. [knowledge/00-QUELLEN.md](knowledge/00-QUELLEN.md)
9. [knowledge/00-INDEX.md](knowledge/00-INDEX.md)
10. [knowledge/10-system/00-das-spiel.md](knowledge/10-system/00-das-spiel.md)
11. [knowledge/10-system/06-befehle.md](knowledge/10-system/06-befehle.md)

## Auftrag

Website, deutsch, asynchron, max. 10 Spieler, WFRP 4e.  
Spieler steuern Intention. SL bleibt Welt / Regeln / Geschichte.

**Jetzt nicht:** Website. Simulation. Walkthrough nachrechnen.  
**Jetzt ja:** Jede Mechanik einzeln: Original belassen, Angepasst + Details. Vorlage in `00-VORLAGE.md`.

## PDF / Buchseiten

Drive-WebP, [knowledge/00-QUELLEN.md](knowledge/00-QUELLEN.md).  
Datei `…_N.webp` = Buchseite **N − 1**. Nie ins Git.

## Arbeitsregeln

- Bestehende Ordner nicht umbauen
- Eine Mechanik = ein Ordner: `original.md` (nicht anfassen) / `angepasst.md` / `details.md`
- `Quelle: S. xx` = Buchfußzeile
- Katalog-ID zeigt auf `angepasst.md`; nur dort `### Befehl`
- Alle drei Dateien: `### Siehe auch`
- Nach jedem Block: INDEX, Commit. Gate läuft als pre-commit (`install-hooks.sh`).
