# Kontext für ein neues Fenster

Datum: 2026-09-07  
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

## Fortschritt

Liste und Häkchen: [knowledge/00-VOLLTEXT.md](knowledge/00-VOLLTEXT.md)

- [x] 8 Integrationen vor der Masse
- [x] 45 Fähigkeiten Original
- [x] 12 Zustände Original
- [x] Städter + Kaufmann Original
- [x] 8 Demo-Talente Original
- [x] 5 Völker Original
- [x] Halunke (Kurt)
- [x] 10 Attribute Original S. 33–34
- [x] Bürger 8/8
- [x] Primer Erschaffung + Welt/Glaube — [09-anfaenger-hilfe](knowledge/02-charaktere/09-anfaenger-hilfe.md)
- [x] Gesprächsleitfaden 🔴 — Welt zuerst, dann PnP — [10](knowledge/02-charaktere/10-erschaffung-gespraech.md)
- [x] Checkliste 🔴 Notizen vervollständigt — [12](knowledge/02-charaktere/12-erschaffung-checkliste.md)
- [x] Antworten auf alle 🔴-Fragen — [11](knowledge/02-charaktere/11-erschaffung-antworten.md)
- [ ] P2 Talent-Einsatz der 8 Demo-Talente, dann Stufe-1-Originale

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
