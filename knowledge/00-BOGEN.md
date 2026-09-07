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
| `karrierestufe_name` | string | S. 47 (Gehilfe, Händler, …) |
| `karriereweg` | string | S. 344 Blatt, start leer / aktuelle Karriere |

## Aussehen, Herkunft, Glauben, Ziele

Buch fragt sie in Schritt 6–8. Keine eigenen Regeln, nur Felder. Motivation bleibt Mut (S. 34); Ziele sind EP (S. 40).

| Key | Typ | Buch |
|-----|-----|------|
| `alter` | Zahl | S. 39 |
| `groesse_cm` | Zahl | S. 40 |
| `augen` | string | S. 40 |
| `haar` | string | S. 40 |
| `bart` | string, optional | S. 39 |
| `gemuet` | ein Satz | S. 37 (keine Tabelle) |
| `herkunft` | string | S. 42 Frage 1 |
| `gott` | slug oder Name | S. 42 Frage 8, S. 202 |
| `ziel_kurz` | string | S. 40 |
| `ziel_lang` | string | S. 40 |
| `ziel_geheim` | ja/nein | S. 41 Ruchlose Pläne |
| `gruppe_name` | string | S. 44 |
| `gruppe_ziel_kurz` | string | S. 41 |
| `gruppe_ziel_lang` | string | S. 41 |
| `ep_ausgegeben` | Zahl | S. 44 |
| `ep_gesamt` | Zahl | S. 44 |

`ep` bleibt die unausgegebene Menge. Glauben-Primer: [11-religion/04-glauben-bei-der-erschaffung.md](11-religion/04-glauben-bei-der-erschaffung.md).

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
| `korrumpierung` | aktuell, Start 0 (S. 182) |

## Bogen-Rückseite, in den 9 Schritten nicht gefragt

Start leer bzw. 0. Blatt S. 345.

| Key | Typ | Buch |
|-----|-----|------|
| `psychologie` | string | S. 190, meist leer |
| `mutationen` | string[] | S. 183 |
| `rp_kopf` `rp_arm_r` `rp_arm_l` `rp_koerper` `rp_bein_r` `rp_bein_l` `rp_schild` | Zahl | S. 45 Silhouette |
| `zauber_gebete` | Liste | S. 45, nur Magie/Glaube |
| `suende` | Zahl | S. 45 |

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
| `geld_gk` `geld_s` `geld_g` | 12 G = 1 S, 20 S = 1 GK. **Kein Pfennig, kein `geld_d`.** |
| `waffe_gefuehrt` | Gegenstand-`id` |

### Siehe auch

- [Register](00-REGISTER.md)
- [Attribute-Hub](02-charaktere/04-attribute.md)
- [Erklärung des Bogens](02-charaktere/08-charakterbogen.md)
- [Anfänger-Hilfe](02-charaktere/09-anfaenger-hilfe.md)
- [Checkliste 🔴](02-charaktere/12-erschaffung-checkliste.md)
