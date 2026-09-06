# Befehlsregister

Quelle: abgeleitet aus dem Aktionskatalog und dem Buch.  
Kanon: [00-das-spiel.md](00-das-spiel.md) · Katalog: [04-aktionskatalog-v1.md](04-aktionskatalog-v1.md) · JSON: [../data/catalog.json](../data/catalog.json)

Jede Katalog-ID steht **hier zuerst**. Die Buchdatei ist die Autorität. Die Engine liest die ID, nicht den deutschen Label-Text.

Kosten: **F** frei · **B** Bewegung · **H** Handlung · **BH** beides.

Grau-Regel: Karten, die der Charakter kennt, aber jetzt nicht nutzen kann, bleiben stehen und sind ausgegraut. Grund auf der Karte. Nie löschen.

---

## Sozial

| ID | Label | Kosten | Fähigkeit | Resolver | Buch |
|----|-------|--------|-----------|----------|------|
| `umschauen` | Umschauen | H | [Wahrnehmung](../04-faehigkeiten-talente/faehigkeiten/wahrnehmung.md) | standard | S. 130–131 |
| `intuition` | Einschätzen | H | [Intuition](../04-faehigkeiten-talente/faehigkeiten/intuition.md) | standard | S. 124 |
| `reden` | Ansprechen / Verhandeln | H | [Charme](../04-faehigkeiten-talente/faehigkeiten/charme.md) | vergleich (Besonnenheit, außer empfänglich) | S. 121 |
| `feilschen` | Handeln | H | [Feilschen](../04-faehigkeiten-talente/faehigkeiten/feilschen.md) | vergleich | S. 122, 291 |
| `bestechen` | Bestechen | H | [Bestechen](../04-faehigkeiten-talente/faehigkeiten/bestechen.md) | standard | S. 120 |
| `einschuechtern` | Einschüchtern | H | [Einschüchtern](../04-faehigkeiten-talente/faehigkeiten/einschuechtern.md) | vergleich (Besonnenheit) | S. 121 |
| `klatsch` | Gerüchte | H | [Klatsch](../04-faehigkeiten-talente/faehigkeiten/klatsch.md) | standard | S. 124 |
| `warten` | Abwarten | H | — | auto | S. 158 (Handlung opfern) |

Alte Katalog-MD schrieb `intuiton`. JSON und Register nutzen `intuition`.

---

## Bewegung

| ID | Label | Kosten | Fähigkeit | Resolver | Buch |
|----|-------|--------|-----------|----------|------|
| `schleichen` | Schleichen | BH | [Schleichen](../04-faehigkeiten-talente/faehigkeiten/schleichen.md) | vergleich (Wahrnehmung) | S. 126 |
| `gehen` | Ort verlassen | B | — | auto | S. 165 Bewegung |
| `sprinten` | Sprinten | H | [Athletik](../04-faehigkeiten-talente/faehigkeiten/athletik.md) | standard | S. 119, 165 |
| `aufstehen` | Aufstehen | B | — | auto | S. 169 *Niedergestreckt* |

---

## Kampf

| ID | Label | Kosten | Fähigkeit | Resolver | Buch |
|----|-------|--------|-----------|----------|------|
| `angreifen` | Angreifen | H | [Nahkampf](../04-faehigkeiten-talente/faehigkeiten/nahkampf.md) | vergleich | S. 158–160 |
| `sturmangriff` | Sturmangriff | BH | Nahkampf | vergleich; +1 Vorteil **vor** dem Wurf | S. 165 |
| `ausweichen` | Ausweichen (Verteidigung) | F | [Ausweichen](../04-faehigkeiten-talente/faehigkeiten/ausweichen.md) | vergleich, keine eigene Handlung | S. 119, 158 |
| `loesen` | Aus Bindung lösen | H | Ausweichen oder Nahkampf oder Vorteilsvorsprung | vergleich | S. 166 |
| `fliehen` | Fliehen | B | Athletik | combat; Freie Attacke des Gegners | S. 165 |
| `waffe_ziehen` | Waffe ziehen | F | — | auto | S. 158 Freie Handlung (v1-Annahme) |
| `volle_abwehr` | In der Defensive | H | Ausweichen oder Nahkampf | combat; +20 bis zum nächsten Zug | S. 158 |

---

## Ressourcen

Fenster nach **eigenem** Wurf. Fremde Würfe in v1 nicht mit Glück belegbar.

| ID | Label | Kosten | Buch |
|----|-------|--------|------|
| `glueck` | Glück: Wurf wiederholen / +1 EG / Zugwahl | F | S. 170–171 |
| `mut` | Mut: 1 Zustand weg / Psych-Immun / Krit-Mods ignorieren | F | S. 170–171 |
| `schicksal` | Schicksal opfern (nicht sterben / Szene überleben) | F | S. 170–171 |
| `zaehigkeit` | Zähigkeit: Wurf wählen oder Mutation vermeiden | F | S. 170–171 |

Datei: [Schicksal & Zähigkeit](../05-regeln/06-schicksal-zaehigkeit.md)

---

## Grau (Filter, nie löschen)

Vollständige Liste: [../data/catalog.json](../data/catalog.json) Feld `grau`.

| Wenn | IDs grau | Grund |
|------|----------|-------|
| kein Feind, nicht Kampfmodus | Kampfkarten | Kein Kampf |
| nicht gebunden | `loesen`; `angreifen` bis Annähern/Sturmangriff | Distanz |
| gebunden | `gehen`, `sturmangriff`, `schleichen`, `sprinten` | Gebunden |
| Waffe schon in der Hand | `waffe_ziehen` | Schon gezogen |
| kein eigener offener Wurf | `glueck` | Fenster zu |
| kein Zustand / keine Psychologie | `mut` | Nichts zu nehmen |
| nicht sterbend / ausweglos | `schicksal` | Nicht nötig |
| nicht niedergestreckt | `aufstehen` | Stehst |
| *Niedergestreckt* | alles außer `aufstehen` / kriechen | Zustand |
| Ausbau ohne Steigerung | `heilen`, `fernkampf`, `fingerfertigkeit`, `schaetzen` | Nicht ausgebildet |
| kein Ausgang | `gehen` | Kein Ausgang |
| *Bewusstlos* | `*` | Keine Aktion |

---

## IDs, die noch eine Buchdatei brauchen

Einzeldatei fehlt, Katalog verweist schon darauf. Nicht erfinden — aus dem Buch ziehen.

| ID / Thema | Zieldatei | Status |
|------------|-----------|--------|
| Athletik | `04-faehigkeiten-talente/faehigkeiten/athletik.md` | fehlt |
| Ausweichen | `04-faehigkeiten-talente/faehigkeiten/ausweichen.md` | fehlt |
| Nahkampf | `04-faehigkeiten-talente/faehigkeiten/nahkampf.md` | fehlt |
| Ausdauer | `04-faehigkeiten-talente/faehigkeiten/ausdauer.md` | fehlt |
| Besonnenheit | `04-faehigkeiten-talente/faehigkeiten/besonnenheit.md` | fehlt |
| Fingerfertigkeit | `04-faehigkeiten-talente/faehigkeiten/fingerfertigkeit.md` | fehlt |
| Initiative / Überraschung | `05-regeln/14-initiative-ueberraschung.md` | verlinkt, Datei fehlt |
| Bindung / Hilflos | Kampfzug-Dateien | dünn |
| Dolch, waffenlos, Handwaffe | `08-einkauf/waffen/` | Ordner leer |
| Verfügbarkeit Markt | `08-einkauf/01-ausruestung-preise.md` | Platzhalter |

Nicht in v1, keine ID anlegen: Magie, Gebete, Ringen, Packen, Fernkampf ohne Waffe, Beruf, Heilen selbst.

---

### Befehl

- Register pflegen, bevor eine neue ID in den Katalog oder nach `catalog.json` wandert.
- Umbenennen einer ID = hier, Katalog, JSON, alle `### Befehl`-Blöcke in einem Zug.

### Siehe auch

- [Aktionskatalog v1](04-aktionskatalog-v1.md)
- [Datenmodell](02-datenmodell.md)
- [Vollständigkeit](06-vollstaendigkeit.md)
- [Würfel](../05-regeln/01-wuerfel-und-grundmechanik.md)
- [Kampf](../05-regeln/02-kampf-uebersicht.md)
- [Arbeitsregeln](../00-BEFEHLE.md)
