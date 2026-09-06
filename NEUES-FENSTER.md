# Kontext für ein neues Fenster

Datum: 2026-09-06  
Repo: https://github.com/PromptBrainless/wfrp-async-website  
Workspace: `/workspace`

## Lies in dieser Reihenfolge

1. Diese Datei
2. [knowledge/00-BEFEHLE.md](knowledge/00-BEFEHLE.md)
3. [knowledge/00-QUELLEN.md](knowledge/00-QUELLEN.md)
4. [knowledge/00-UEBERGABE.md](knowledge/00-UEBERGABE.md)
5. [knowledge/00-INDEX.md](knowledge/00-INDEX.md)
6. [knowledge/10-system/00-das-spiel.md](knowledge/10-system/00-das-spiel.md)
7. [knowledge/10-system/06-befehle.md](knowledge/10-system/06-befehle.md)
8. [knowledge/10-system/06-vollstaendigkeit.md](knowledge/10-system/06-vollstaendigkeit.md)
9. [skill/SKILL.md](skill/SKILL.md)

## Auftrag

Website, deutsch, asynchron, max. 10 Spieler, WFRP 4e.  
Spieler steuern Intention. SL bleibt Welt / Regeln / Geschichte.  
Kein Freitext als einzige Eingabe: Aktionen kommen aus dem Katalog, gefiltert nach Ort und Zustand. Karten werden ausgegraut, nie gelöscht.

**Jetzt nicht:** Website-UI bauen.  
**Jetzt ja:** Mechaniken einzeln aus dem Buch in MD, vernetzen, Befehle hinterlegen.

## PDF / Buchseiten

Bevorzugt: Drive-WebP, Mapping in [knowledge/00-QUELLEN.md](knowledge/00-QUELLEN.md).  
Datei `…_N.webp` = Buchseite **N − 1**. Nie ins Git.

## Arbeitsregeln

- Bestehende Ordner nicht umbauen
- Eine Mechanik = eine Datei, `Quelle: S. xx`
- Jede Datei endet mit `### Befehl` und `### Siehe auch`
- Neue Katalog-ID zuerst ins Befehlsregister, dann in den Aktionskatalog
- Nach jedem Block: INDEX, Befehlsregister, Übergabe, Commit
- Keine erfundenen Regeln. Unsicher: `[prüfen am Buch S. xx]`
- EG = Zehner(Ziel) − Zehner(Wurf). Simulation ist Walkthrough.

## P0 (Wissensbasis, nicht UI)

Katalog-Fähigkeiten, Initiative, Waffen v1, Markt stehen.  
Als Nächstes: Charakterbogen-Felder; ältere `Quelle: S. xx` gegen Buchfußzeile halten. Visual-Quelle: Drive-WebP.
## Offene User-Entscheidungen

- Tick: Mix (Default) vs. nur Frist vs. nur „alle gezogen“
- Vorteile-Obergrenze: IB (Default, Buch-Option)
- Krankheiten an/aus in v1
- Magie in v1: keine
