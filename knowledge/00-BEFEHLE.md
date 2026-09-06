# Befehle – wie diese Wissensbasis weitergeführt wird

Verbindlich für jede Session. Liegt neben [00-INDEX.md](00-INDEX.md) und [00-UEBERGABE.md](00-UEBERGABE.md).

Das Regelwerk bleibt die Autorität. Die Simulation ist Walkthrough. Die Engine erfindet keine Regeln.

---

## 1. Eine Mechanik = eine Datei

- Bestehende Kapitelordner nutzen. Keine parallele Hierarchie.
- Datei: Titel, `Quelle: S. xx`, Fakten, danach immer zwei Blöcke:

```
### Befehl
- `aktions-id` — [Aktionskatalog](10-system/04-aktionskatalog-v1.md) / [Befehlsregister](10-system/06-befehle.md)

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
| Waffen, Preise, Feilschen am Markt | `08-einkauf/` |
| Digitale Aktionen, Filter, Resolver | `10-system/` |
| SL-Loop, Reisen, Events | `06-spielleiter/` |

Ein Fakt steht **einmal**. Andere Dateien verlinken.

## 3. Reihenfolge der Extraktion

1. Fähigkeiten, die der Katalog braucht (dieser Block).
2. Kampfzug vollständig: Initiative, Zug, Treffer, Schaden, Vorteile, Bewegung, Hilflos.
3. Waffen v1 (Dolch, waffenlos, Handwaffe) + Traglast.
4. Verwundungen, Tod, Heilung.
5. Markt: Verfügbarkeit + Feilschen-Preis.
6. Charakterbogen-Felder.
7. Rest (Karrieren, Magie, Reisen) nur soweit eine Aktion ihn braucht.

## 4. Wie aus dem Buch holen

- PDF-Seite ≈ Buchseite (GRW 2. Auflage).
- Engine-Fakten ungekürzt. Beispiele behalten. Flavor kürzen.
- Unsicher: `[prüfen am Buch S. xx]`.
- EG-Formel: Zehner(Ziel) − Zehner(Wurf). Nicht die Simulations-Zahlen.

## 5. Nach jedem Block

1. [00-INDEX.md](00-INDEX.md) Häkchen setzen.
2. [10-system/06-befehle.md](10-system/06-befehle.md) IDs nachziehen.
3. [00-UEBERGABE.md](00-UEBERGABE.md) Stand-Zeile.
4. Tote Links prüfen.

## 6. Was diese Session nicht tut

Keine Website bauen, solange die Mechanik, die der Katalog braucht, noch Platzhalter ist.
