# Qualitäts-Gate

Validator: `python3 skill/scripts/validate_wissen.py`  
`--staged` prüft zusätzlich den Git-Index (Buch/Scan).  
Hooks: `bash skill/scripts/install-hooks.sh` → `.githooks/pre-commit` und `pre-push`.

Optional ein Pfad: `python3 skill/scripts/validate_wissen.py knowledge/04-faehigkeiten-talente/faehigkeiten/wahrnehmung`

Fehler (Exit 1) blocken Commit und Push. `--no-verify` nur in Notfällen, GitHub Action fängt das auf `main`. Warnungen dürfen, müssen aber in details oder Übergabe stehen.

---

## Fehler

1. Mechanik-Ordner ohne `README.md` / `original.md` / `angepasst.md` / `details.md`
2. `original.md` ohne `Status: Original, nicht anfassen` oder ohne `Quelle: S.`
3. `original.md` enthält `### Befehl` oder die Wörter `Die Frist`, `Aktionskatalog`, `Befehlsregister`
4. `angepasst.md` ohne `### Befehl` oder ohne Link `original.md`
5. Datei ohne `### Siehe auch` (außer reine Zeiger-`name.md`)
6. Relativer Markdown-Link zeigt ins Leere
7. Neue Katalog-ID in `angepasst.md` als `` `id` ``, fehlt im Befehlsregister
8. PDF oder WebP unter `knowledge/` oder im Git-Index
10. Register-ID ohne Ordner, oder doppelte `typ`+`id`
11. Siehe-auch-Pflicht je Typ fehlt in `angepasst.md`
12. `bogen.json` ohne `werte` / `boni` / `ressourcen`

## Warnungen

- Datei mit `TODO` / `Platzhalter` / `📝`
- `angepasst.md` länger als das Original (Verdacht: Buchtext kopiert)
- Befehlsregister-Link zeigt nicht auf `angepasst.md`
- INDEX verlinkt eine Mechanik nur auf die alte Zeiger-Datei, nicht den Hub
- Rohkapitel `_roh/` fehlt, obwohl mehr als drei Einzeloriginale aus demselben Kapitel existieren

## Nach dem Fix

Validator noch einmal. Erst dann Commit. In der Commit-Message die Welle nennen (A Charakter, C Fähigkeiten, D Talente, …).
