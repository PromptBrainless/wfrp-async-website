# Befehle – wie diese Wissensbasis weitergeführt wird

Verbindlich für jede Session.  
[00-VORLAGE.md](00-VORLAGE.md) · [00-VOLLTEXT.md](00-VOLLTEXT.md) · [00-QUELLEN.md](00-QUELLEN.md) · [00-INDEX.md](00-INDEX.md)

Das Regelwerk bleibt die Autorität. Die Engine erfindet keine Regeln.  
**Simulation ist kein Auftrag.**

---

## 1. Eine Mechanik = ein Ordner, drei Dateien

Bestehende Kapitelordner. Keine parallele Hierarchie.

```
<slug>/
  README.md
  original.md     Buch, nach Extraktion nicht anfassen
  angepasst.md    Projekt (Katalog, Grau, Loop)
  details.md      Hilfe, Beispiele, Prüfen
```

Skill (Pflicht): [../skill/SKILL.md](../skill/SKILL.md)  
Vorlage: [00-VORLAGE.md](00-VORLAGE.md). Gate: `python3 skill/scripts/validate_wissen.py` — Exit 1 = kein Commit.

- Katalog-ID zuerst ins [Befehlsregister](10-system/06-befehle.md), zeigt auf `angepasst.md`.
- Ein Fakt im Original **einmal**. Angepasst verweist, wiederholt nicht den Buchtext.

## 2. Was wohin gehört

| Inhalt | Ordner |
|--------|--------|
| Fähigkeiten | `04-faehigkeiten-talente/faehigkeiten/<slug>/` |
| Talente | `04-faehigkeiten-talente/talente/<slug>/` |
| Karrieren | `03-klassen-karrieren/<klasse>/<slug>/` |
| Völker | `02-charaktere/voelker/<slug>/` |
| Waffen | `08-einkauf/waffen/<slug>/` |
| Zustände | `05-regeln/zustaende/<slug>/` |
| Digitale Aktionen | `10-system/` (kein Buch-Original) |

## 3. Reihenfolge

Wellen in [00-VOLLTEXT.md](00-VOLLTEXT.md). Buchreihenfolge.  
Kurzfassung überschreiben: Inhalt nach `original.md` heben, alte Datei wird Zeiger.

## 4. Wie aus dem Buch holen

- WebP, sonst komprimiertes PDF. Mapping: [00-QUELLEN.md](00-QUELLEN.md).
- Datei `…_N-compressed.webp` → Buchseite **N − 1**.
- Original = Volltext. Angepasst = nur Projekt. Details = Hilfe.
- Unsicher im Original: stehen lassen und in details `[prüfen am Buch S. xx]`.
- EG (Buch S. 151): Zehner(Ziel) − Zehner(Wurf).

## 5. Nach jedem Block

1. INDEX: Link auf den Hub
2. VOLLTEXT-Welle Häkchen
3. Befehlsregister nur bei neuer ID
4. Übergabe Stand-Zeile
5. Validator / Hook: `python3 skill/scripts/validate_wissen.py` — Exit 1 = kein Commit.
   Einmal: `bash skill/scripts/install-hooks.sh`
6. Commit (pre-commit läuft von selbst)

## 6. Nicht tun

Keine Website. Keine Simulation. Kein PDF/WebP ins Git.  
Original nach der Extraktion nicht „glätten“.
