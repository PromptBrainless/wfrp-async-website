# Backlog — Die Frist

GitHub: [Issues](https://github.com/PromptBrainless/wfrp-async-website/issues)  
Struktur: Epic → Task. Labels: `priority:P0–P3`, `type:*`, `area:*`, `frist:liegt`, `frist:spaeter`.

**Loop bleibt:** Intention → Spieler-W100 → SL deutet. Engine spricht nicht. Kein Auto-Zufall. Drosselau.

Die 12 Epics sind **nicht** ein neues Produkt (kein Foundry-Loader). Tickets mit `frist:spaeter` sind zurückgestellt. `frist:liegt` ist schon im Stand.

## Epics

| Epic | Issue | Bereich |
|------|-------|---------|
| 01 Core Foundation | [#1](https://github.com/PromptBrainless/wfrp-async-website/issues/1) | core |
| 02 Regelwerksdatenbank | [#10](https://github.com/PromptBrainless/wfrp-async-website/issues/10) | rules |
| 03 Modul-System | [#22](https://github.com/PromptBrainless/wfrp-async-website/issues/22) | später |
| 04 Charaktersystem | [#31](https://github.com/PromptBrainless/wfrp-async-website/issues/31) | character |
| 05 Kampagnenverwaltung | [#42](https://github.com/PromptBrainless/wfrp-async-website/issues/42) | campaign |
| 06 Ereignissystem | [#51](https://github.com/PromptBrainless/wfrp-async-website/issues/51) | event |
| 07 Bibliothek ohne KI | [#59](https://github.com/PromptBrainless/wfrp-async-website/issues/59) | campaign |
| 08 Benutzeroberfläche | [#67](https://github.com/PromptBrainless/wfrp-async-website/issues/67) | ui |
| 09 PWA / Offline | [#76](https://github.com/PromptBrainless/wfrp-async-website/issues/76) | später |
| 10 Export & Import | [#83](https://github.com/PromptBrainless/wfrp-async-website/issues/83) | export |
| 11 Qualitätssicherung | [#91](https://github.com/PromptBrainless/wfrp-async-website/issues/91) | devops |
| 12 Dokumentation | [#98](https://github.com/PromptBrainless/wfrp-async-website/issues/98) | docs |

92 Tasks + 12 Epics. Anlegen: `python3 scripts/create-backlog-issues.py` (idempotent).

## Reihenfolge (Frist, nicht der Modul-Stack)

1. **WFRP-003** Config: `knowledge/data/*.json` treibt die Engine  
2. **WFRP-062 / 064** Spezialisierung + Karriere-Fähigkeiten  
3. **WFRP-085 / 101** Journal + Trigger nur SL-Zug  
4. **WFRP-144** Suche (MVP-Kante)  
5. Erst dann Export/Tests. Modulsystem, PWA, Magie, Generator: später.

WFRP-067 heißt **Mut/Zähigkeit**, nicht Resilienz. WFRP-102 feuert nie von selbst.
