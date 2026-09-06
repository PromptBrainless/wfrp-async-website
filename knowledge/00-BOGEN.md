# Charakterbogen — kanonische Felder

Quelle der Regeln: S. 33–36, 44–45.  
Maschine: [data/bogen.json](data/bogen.json) · Modell: [10-system/02-datenmodell.md](10-system/02-datenmodell.md)

Angepasst-Dateien nennen **nur diese Keys**. Keine Synonyme.

Abgeleitet (Zehnerstelle, LP-Max, …) nicht speichern, außer als Cache.

## Identität

| Key | Typ | Buch |
|-----|-----|------|
| `id` | string | — |
| `name` | string | S. 44 |
| `volk` | slug | S. 24–29 |
| `klasse` | slug | S. 30 |
| `karriere` | slug | S. 46 |
| `karrierestufe` | 1–4 | S. 47 |
| `status_tier` | messing \| silber \| gold | S. 49 |
| `status_rang` | 1–8 | S. 49 |
| `motivation` | string | S. 34, 44 |

## Zehn Spielwerte

Keys klein, Anzeige groß. Bonus = Zehnerstelle, Key = Wert + `b`.

| Key | Bonus | Name |
|-----|-------|------|
| `kg` | `kgb` | Kampfgeschick |
| `bf` | `bfb` | Ballistische Fertigkeit |
| `st` | `stb` | Stärke |
| `wi` | `wib` | Widerstand |
| `i` | `ib` | Initiative |
| `gw` | `gwb` | Gewandtheit |
| `gs` | `gsb` | Geschicklichkeit |
| `in` | `inb` | Intelligenz |
| `wk` | `wkb` | Willenskraft |
| `ch` | `chb` | Charisma |

## Abgeleitet / Ressourcen

| Key | Formel / Regel |
|-----|----------------|
| `bewegung` | Volk (Mensch 4, Zwerg/Halbling 3, Elf 5) + Talente |
| `lp` | aktuell |
| `lp_max` | `stb + 2*wib + wkb` (Halbling / Zierlich: ohne `stb`) |
| `schicksal` | aktuell |
| `glueck` | ≤ Schicksal (+ Glückspilz) |
| `zaehigkeit` | aktuell |
| `mut` | ≤ Zähigkeit (+ Willensstärke) |
| `vorteile` | v1-Obergrenze `ib` |
| `ep` | unausgegebene |
| `traglast` | Summe Inventar |
| `traglast_max` | `stb + wib` (+ Stämmig / Starker Rücken) |

## Listen

| Key | Element |
|-----|---------|
| `faehigkeiten` | `{ id, steigerungen, spezialisierung? }` |
| `talente` | `{ id, stufe }` |
| `zustaende` | `{ id, stapel }` |
| `inventar` | Gegenstand |
| `flags` | string[] |
| `gebunden_mit` | Charakter-`id`[] |

## Geld / Kampf

| Key | |
|-----|--|
| `geld_gk` `geld_s` `geld_d` | 12 d = 1 S, 20 S = 1 GK |
| `waffe_gefuehrt` | Gegenstand-`id` |

### Siehe auch

- [Register](00-REGISTER.md)
- [Attribute-Hub](02-charaktere/04-attribute.md)
- [Erklärung des Bogens](02-charaktere/08-charakterbogen.md)
