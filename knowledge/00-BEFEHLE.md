# Befehle – wie diese Wissensbasis weitergeführt wird

Verbindlich für jede Session. Liegt neben [00-INDEX.md](00-INDEX.md), [00-VOLLTEXT.md](00-VOLLTEXT.md) und [00-QUELLEN.md](00-QUELLEN.md).

Das Regelwerk bleibt die Autorität. Die Engine erfindet keine Regeln.  
**Simulation ist kein Auftrag.** Kein Walkthrough nachrechnen, bis der User das sagt.

---

## 1. Eine Mechanik = eine Datei

- Bestehende Kapitelordner nutzen. Keine parallele Hierarchie.
- Datei: Titel, `Quelle: S. xx` (**Buchfußzeile**), dann der **Volltext der Mechanik** aus dem Buch (Regeln, Tabellen, Beispiele).
- Danach immer:

```
### Befehl
- `aktions-id` — [Aktionskatalog](10-system/04-aktionskatalog-v1.md) / [Befehlsregister](10-system/06-befehle.md)
- ohne Katalog-ID: `-` und Verweis auf die Buchdatei, die sie braucht

### Siehe auch
- relative Links zu verwandten Dateien
```

- Jede neue Katalog-ID gehört **zuerst** ins [Befehlsregister](10-system/06-befehle.md), dann in den [Aktionskatalog](10-system/04-aktionskatalog-v1.md).
- Jede ID zeigt auf die Buch-Datei, nicht umgekehrt erfinden.

## 2. Was wohin gehört

| Inhalt | Ordner |
|--------|--------|
| Würfel, Kampf, Zustände, Schicksal, Wunden | `05-regeln/` |
| Einzelne Fähigkeiten | `04-faehigkeiten-talente/faehigkeiten/` |
| Einzelne Talente | `04-faehigkeiten-talente/talente/` |
| Einzelne Karrieren | `03-klassen-karrieren/<klasse>/` |
| Waffen, Preise, Feilschen am Markt | `08-einkauf/` |
| Digitale Aktionen, Filter, Resolver | `10-system/` |
| SL-Loop, Reisen, Events | `06-spielleiter/` |

Ein Fakt steht **einmal**. Andere Dateien verlinken.

## 3. Reihenfolge

Buchreihenfolge, Wellen in [00-VOLLTEXT.md](00-VOLLTEXT.md).  
Platzhalter und Kurzfassungen ersetzen, nicht daneben eine zweite Datei anlegen.

## 4. Wie aus dem Buch holen

- **Quelle:** WebP-Seiten, [00-QUELLEN.md](00-QUELLEN.md). Datei `…_N-compressed.webp` → Buchseite **N − 1**.
- Zitat immer die **Buchfußzeile**.
- **Volltext der Mechanik:** Regeln, Tabellen, Beispiele, Kosten, Stufen. Kunst, Kapiteltrenner, reines Setting-Flavor nur soweit die Datei es braucht (z. B. Brief Imperium = der Brief).
- Unsicher: `[prüfen am Buch S. xx]`.
- EG-Formel (Buch S. 151): Zehner(Ziel) − Zehner(Wurf).

## 5. Nach jedem Block

1. [00-INDEX.md](00-INDEX.md) 📝 → ✅
2. [00-VOLLTEXT.md](00-VOLLTEXT.md) Häkchen in der Welle
3. [10-system/06-befehle.md](10-system/06-befehle.md) nur wenn eine ID neu ist
4. [00-UEBERGABE.md](00-UEBERGABE.md) Stand-Zeile
5. Tote Links prüfen
6. Commit

## 6. Was diese Session nicht tut

- Keine Website.
- Keine Simulation, kein Walkthrough-Nachrechnen.
- Kein PDF/WebP ins Git.
