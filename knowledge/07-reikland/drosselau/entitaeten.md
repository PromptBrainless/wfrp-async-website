# Entitäten — Drosselau

**Weg · Abend** · [Regeln V2](BESCHREIBUNGSREGELN.md) · [Verzeichnis](stadt-verzeichnis.md)

Alles, was das Verzeichnis und die Looks **namentlich** tragen. IDs fest. Die Engine erzeugt keine.

Legende: `NPC_` Person · `ORT_` Gasse oder Haus · `OBJ_` Ding · `WEG_` Übergang · `FRA_` Gruppe · `KEIM_` stiller Haken.

Wohnen ≠ Arbeit, wo zwei Häuser stehen.

---

## Stadt

| ID | Name |
|----|------|
| `ORT_DROSSELAU` | Drosselau, Käfig |
| `NPC_ALBRECHT-VON-GRUENBERG` | Reichsgraf Albrecht (51), nicht in der Stadt |
| `NPC_IRMINA-VON-GRUENBERG` | Gemahlin Irmina (44), nicht in der Stadt |
| `NPC_LUDOLF-VON-GRUENBERG` | Erbe Ludolf (22), nicht in der Stadt |
| `ORT_HAUS-VON-GRUENBERG` | nicht in der Stadt |

## Viertel

| ID | Name |
|----|------|
| `ORT_VORSTADT` | Vorstadt |
| `ORT_TOR` | Tor |
| `ORT_MARKT` | Markt |
| `ORT_HANDWERK` | Handwerk |
| `ORT_SCHATTEN` | Schatten |

## Gassen

| ID | Name | Viertel | Nachbarn |
|----|------|---------|----------|
| `ORT_VORSTADTRING` | Vorstadtring | Vorstadt | Torstraße |
| `ORT_TORSTRASSE` | Torstraße | Tor | Vorstadtring, Marktplatz, Bettelgasse |
| `ORT_MARKTPLATZ` | Marktplatz | Markt | Torstraße, Gildengasse, Schmiedezeile, Weberweg, Krämerstraße, Schlemmergasse |
| `ORT_GILDENGASSE` | Gildengasse | Markt | Marktplatz, Weberweg |
| `ORT_SCHMIEDEZEILE` | Schmiedezeile | Handwerk | Marktplatz, Gerbergasse |
| `ORT_WEBERWEG` | Weberweg | Handwerk | Marktplatz, Gildengasse, Krämerstraße |
| `ORT_KRAEMERSTRASSE` | Krämerstraße | Handwerk | Marktplatz, Weberweg, Schlemmergasse, Bettelgasse |
| `ORT_GERBERGASSE` | Gerbergasse | Handwerk | Schmiedezeile, Töpfergasse, Rattenwinkel |
| `ORT_TOEPFERGASSE` | Töpfergasse | Handwerk | Gerbergasse, Morrgasse |
| `ORT_MORRGASSE` | Morrgasse | Schatten | Töpfergasse, Schlemmergasse |
| `ORT_SCHLEMMERGASSE` | Schlemmergasse | Markt | Marktplatz, Krämerstraße, Morrgasse, Bettelgasse |
| `ORT_BETTELGASSE` | Bettelgasse | Schatten | Torstraße, Krämerstraße, Schlemmergasse, Rattenwinkel |
| `ORT_RATTENWINKEL` | Rattenwinkel | Schatten | Bettelgasse, Gerbergasse |

## Wege

| ID | Von | Nach |
|----|-----|------|
| `WEG_RING-TOR` | Vorstadtring | Torstraße |
| `WEG_TOR-MARKT` | Torstraße | Marktplatz |
| `WEG_TOR-BETTEL` | Torstraße | Bettelgasse |
| `WEG_MARKT-GILDE` | Marktplatz | Gildengasse |
| `WEG_MARKT-SCHMIEDE` | Marktplatz | Schmiedezeile |
| `WEG_MARKT-WEBER` | Marktplatz | Weberweg |
| `WEG_MARKT-KRAEMER` | Marktplatz | Krämerstraße |
| `WEG_MARKT-SCHLEMMER` | Marktplatz | Schlemmergasse |
| `WEG_GILDE-WEBER` | Gildengasse | Weberweg |
| `WEG_SCHMIEDE-GERBER` | Schmiedezeile | Gerbergasse |
| `WEG_WEBER-KRAEMER` | Weberweg | Krämerstraße |
| `WEG_KRAEMER-SCHLEMMER` | Krämerstraße | Schlemmergasse |
| `WEG_KRAEMER-BETTEL` | Krämerstraße | Bettelgasse |
| `WEG_GERBER-TOEPFER` | Gerbergasse | Töpfergasse |
| `WEG_GERBER-RATTEN` | Gerbergasse | Rattenwinkel |
| `WEG_TOEPFER-MORR` | Töpfergasse | Morrgasse |
| `WEG_MORR-SCHLEMMER` | Morrgasse | Schlemmergasse |
| `WEG_SCHLEMMER-BETTEL` | Schlemmergasse | Bettelgasse |
| `WEG_BETTEL-RATTEN` | Bettelgasse | Rattenwinkel |

## Fraktionen

| ID | Sitz | Leute |
|----|------|-------|
| `FRA_REICHSGRAF` | Siegel Markt 5 | Albrecht, nicht hier |
| `FRA_RAT` | Markt 6 | Talbeck, Stein |
| `FRA_KAUFMANNSGILDE` | Markt 1 | Holtz, Voss, Heller, Bode |
| `FRA_HANDWERKERZUNFT` | Markt 2 | Hammer, Stahl, Tuch, Schneider, Beize, Metz, Laib, Leder, Ton |
| `FRA_STADTWACHE` | Tor 1 | Helm; Stahl beliefert |
| `FRA_SIGMAR` | Markt 3 | Keil, Jost |
| `FRA_MORR` | Morr 2 | Ewig, Gruft |
| `FRA_ULRIC` | Schmiede 4 | Eisen, kein Tempel |
| `FRA_RANALD` | Schlemmer 1, Ring 6 | Stube, Zeichen |
| `FRA_CLIQUE` | Bettel 3 | Krumm, Fips, Auge |

## Keime (still)

| ID | Ort | Satz |
|----|-----|------|
| `KEIM_RANALD-ZEICHEN` | Ring 6 | Zeichen an der Tür |
| `KEIM_ZOLL-MUTATION` | Tor 1 | Waffen und Merkmale |
| `KEIM_KONTOR-LEER` | Markt 10 | Kompanie seit einem Jahr weg |
| `KEIM_KRAEUTER-LADENTISCH` | Krämer 2 | unter dem Tisch |
| `KEIM_GERBER-KRANKHEIT` | Gerber 3 | Krankheiten kursieren |
| `KEIM_MORR-RITUS` | Morr 2 | Ritus, frischer Hügel |
| `KEIM_RANALD-SCHREIN` | Schlemmer 1 | Hinterzimmer |
| `KEIM_BETTEL-KULT` | Bettel 3 | Munkeln |
| `KEIM_BETTEL-SPUKT` | Bettel 6 | Ruf |
| `KEIM_RATTEN-VERSCHWUNDEN` | Winkel 1 | Unken 2506 |
| `KEIM_RATTEN-KELLER` | Winkel 2 | Ratten, Gang |

## Häuser und Leute

Wohn-ID = `ORT_<GASSE>-<NR>`. Personen = `NPC_<RUFNAME>-<HAUS>`.

### Vorstadtring

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_VORSTADTRING-1` | Bettlerhütte Laus | `NPC_LAUS` (30) |
| `ORT_VORSTADTRING-2` | Hütte Moos | `NPC_JAAN-MOOS` (34), `NPC_SANNA-MOOS` (31), `NPC_BIRK-MOOS` (8) |
| `ORT_VORSTADTRING-3` | Fuhrmannsschuppen | Arbeit Karr; `OBJ_KARR-WAGEN`, `OBJ_KARR-OCHSE` |
| `ORT_VORSTADTRING-4` | Hütte Blau | `NPC_HILDE-BLAU` (36), `NPC_ANNI-BLAU` (12) |
| `ORT_VORSTADTRING-5` | Leer Dach | — |
| `ORT_VORSTADTRING-6` | Leer Ranald | `OBJ_RANALD-ZEICHEN` |

### Torstraße — vollständig in [v2/torstrasse.md](v2/torstrasse.md)

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_TORSTRASSE-1` | Zollhaus | Dienst `NPC_ARNE-HELM` |
| `ORT_TORSTRASSE-2` | Zum Wanderer | `NPC_DETLEF-KRUG` (43), `NPC_MARA-KRUG` (39), `NPC_BEN-KRUG` (13) |
| `ORT_TORSTRASSE-3` | Bäckerei | `NPC_GERD-LAIB` (41), `NPC_HANNE-LAIB` (38), `NPC_LINA-LAIB` (10) |
| `ORT_TORSTRASSE-4` | Fleischerei | `NPC_KONRAD-METZ` (45), `NPC_RITA-METZ` (42), `NPC_JAN-METZ` (17) |
| `ORT_TORSTRASSE-5` | Karr Wohnung | `NPC_HANNES-KARR` (40), `NPC_BERTA-KARR` (37), `NPC_ULF-KARR` (14), `NPC_MINA-KARR` (8) |
| `ORT_TORSTRASSE-6` | Staub | `NPC_RUDI-STAUB` (35), `NPC_NADJA-STAUB` (32), `NPC_KILIAN-STAUB` (9), `NPC_FINE-STAUB` (5) |
| `ORT_TORSTRASSE-7` | Kram Docht | `NPC_EWALD-DOCHT` (37), `NPC_SIGRID-DOCHT` (34) |
| `ORT_TORSTRASSE-8` | Helm Wohnung | `NPC_ARNE-HELM` (38), `NPC_DORA-HELM` (35), `NPC_FINN-HELM` (7) |
| `ORT_TORSTRASSE-9` | Brunnen | `OBJ_BRUNNEN-TOR` |

### Marktplatz

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_MARKTPLATZ-1` | Kaufmannsgilde | Sitz Holtz |
| `ORT_MARKTPLATZ-2` | Handwerkerzunft | keine Wohnfamilie |
| `ORT_MARKTPLATZ-3` | Sigmarstempel | `NPC_BRANT-KEIL` (53), `NPC_JOST-KEIL` (19) |
| `ORT_MARKTPLATZ-4` | Wechsler | `NPC_MAGNUS-HELLER` (44), `NPC_UTE-HELLER` (40) |
| `ORT_MARKTPLATZ-5` | Schreiber | `NPC_LEOPOLD-FEDER` (39), `NPC_AGNES-FEDER` (34) · `OBJ_SIEGEL-GRUENBERG` |
| `ORT_MARKTPLATZ-6` | Ratshaus | `NPC_HELMUTH-TALBECK` (46), `NPC_MATHILDE-TALBECK` (42), `NPC_JOHANN-TALBECK` (18) |
| `ORT_MARKTPLATZ-7` | Holtz Sohn | `NPC_BERTHOLD-HOLTZ` (30), `NPC_SASKIA-HOLTZ` (27), `NPC_EMMERICH-HOLTZ` (6), `NPC_LIESE-HOLTZ` (3) |
| `ORT_MARKTPLATZ-8` | Voss | `NPC_KASPAR-VOSS` (41), `NPC_HILDA-VOSS` (38), `NPC_PIETER-VOSS` (15, auf der Reik) |
| `ORT_MARKTPLATZ-9` | Stein | `NPC_REINER-STEIN` (48), `NPC_KLARA-STEIN` (43), `NPC_ANIKE-STEIN` (16) |
| `ORT_MARKTPLATZ-10` | Kontor leer | `KEIM_KONTOR-LEER` |

### Gildengasse

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_GILDENGASSE-1` | Lager | Kisten |
| `ORT_GILDENGASSE-2` | Holtz Meister | `NPC_WILHELM-HOLTZ` (54), `NPC_ELSA-HOLTZ` (50) |
| `ORT_GILDENGASSE-3` | Eckert | `NPC_FRANZ-ECKERT` (36), `NPC_NELA-ECKERT` (33), `NPC_TIMO-ECKERT` (9) |
| `ORT_GILDENGASSE-4` | Herberge | Durchreisende |
| `ORT_GILDENGASSE-5` | Archiv | Verträge |

### Schmiedezeile

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_SCHMIEDEZEILE-1` | Hufschmiede | Arbeit Hammer |
| `ORT_SCHMIEDEZEILE-2` | Waffenschmiede | `NPC_ULRICH-STAHL` (49), `NPC_KATHE-STAHL` (46) |
| `ORT_SCHMIEDEZEILE-3` | Hammer Wohnung | `NPC_BODO-HAMMER` (47), `NPC_GERDA-HAMMER` (44); Ilse in Bögenhafen |
| `ORT_SCHMIEDEZEILE-4` | Eisen | `NPC_WULF-EISEN` (32), `NPC_MARK-EISEN` (29) |
| `ORT_SCHMIEDEZEILE-5` | Kohlenlager | — |
| `ORT_SCHMIEDEZEILE-6` | Nagel | `NPC_TIMO-NAGEL` (18) |

### Weberweg

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_WEBERWEG-1` | Weberei | Arbeit Tuch |
| `ORT_WEBERWEG-2` | Schneiderei | Arbeit Schneider |
| `ORT_WEBERWEG-3` | Tuch | `NPC_EBERHARD-TUCH` (48), `NPC_LOTTE-TUCH` (45), `NPC_RIKE-TUCH` (20) |
| `ORT_WEBERWEG-4` | Schneider | `NPC_ELSE-SCHNEIDER` (36), `NPC_PIETER-SCHNEIDER` (38), `NPC_LENA-SCHNEIDER` (14), `NPC_KARL-SCHNEIDER` (11) |
| `ORT_WEBERWEG-5` | Beize | `NPC_NIKO-BEIZE` (35), `NPC_WERA-BEIZE` (32) |

### Krämerstraße

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_KRAEMERSTRASSE-1` | Krämerladen | Arbeit Bode |
| `ORT_KRAEMERSTRASSE-2` | Kräuter | Arbeit `NPC_MAREN-WURZEL`; `KEIM_KRAEUTER-LADENTISCH` |
| `ORT_KRAEMERSTRASSE-3` | Bode Wohnung | `NPC_HARTMUT-BODE` (42), `NPC_IDA-BODE` (39), `NPC_PAUL-BODE` (12) |
| `ORT_KRAEMERSTRASSE-4` | Wurzel Wohnung | `NPC_MAREN-WURZEL` (40), `NPC_JETTE-WURZEL` (16) |
| `ORT_KRAEMERSTRASSE-5` | Blatt | `NPC_SIMON-BLATT` (38), `NPC_EVA-BLATT` (34) |
| `ORT_KRAEMERSTRASSE-6` | Leer Hüte | `OBJ_HUTSTOCK` |

### Gerbergasse

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_GERBERGASSE-1` | Gerberei | Arbeit Leder |
| `ORT_GERBERGASSE-2` | Leder | `NPC_DIETRICH-LEDER` (50), `NPC_HEDWIG-LEDER` (47) |
| `ORT_GERBERGASSE-3` | Gerb | `NPC_LUTZ-GERB` (31), `NPC_ENNO-GERB` (28) |
| `ORT_GERBERGASSE-4` | Hautschuppen | — |

### Töpfergasse

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_TOEPFERGASSE-1` | Töpferei | Arbeit Ton |
| `ORT_TOEPFERGASSE-2` | Ton | `NPC_MEINHARD-TON` (44), `NPC_BIRGIT-TON` (41), `NPC_ADA-TON` (13) |
| `ORT_TOEPFERGASSE-3` | Asche | `NPC_JORI-ASCHE` (17) |

### Morrgasse

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_MORRGASSE-1` | Totengräber | `NPC_SILAS-GRUFT` (46), `NPC_ODILA-GRUFT` (42) |
| `ORT_MORRGASSE-2` | Kapelle | `NPC_MIREN-EWIG` (52) |

### Schlemmergasse

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_SCHLEMMERGASSE-1` | Taverne | Arbeit Stube; `KEIM_RANALD-SCHREIN` |
| `ORT_SCHLEMMERGASSE-2` | Linde | `NPC_THEA-LINDE` (39), `NPC_KIRA-LINDE` (18) |
| `ORT_SCHLEMMERGASSE-3` | Stube Wohnung | `NPC_ROLF-STUBE` (42), `NPC_JANNA-STUBE` (38), `NPC_NILS-STUBE` (12) |

### Bettelgasse

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_BETTELGASSE-1` | Karg | `NPC_WENZEL-KARG` (37), `NPC_ULLA-KARG` (34), `NPC_PIA-KARG` (10) |
| `ORT_BETTELGASSE-2` | Hesse | `NPC_MAGDA-HESSE` (64); Ewald †2501 |
| `ORT_BETTELGASSE-3` | Clique | `NPC_KRUMM` (42), `NPC_FIPS` (24), `NPC_AUGE` (47) |
| `ORT_BETTELGASSE-4` | Leer Dach | — |
| `ORT_BETTELGASSE-5` | Leer vernagelt | — |
| `ORT_BETTELGASSE-6` | Leer spukt | `KEIM_BETTEL-SPUKT` |
| `ORT_BETTELGASSE-7` | Dünn | `NPC_IVO-DUENN` (32) |
| `ORT_BETTELGASSE-8` | Brunnen | `OBJ_BRUNNEN-BETTEL` |

### Rattenwinkel

| Ort | Haus | NPC |
|-----|------|-----|
| `ORT_RATTENWINKEL-1` | Unken | `NPC_ABEL-UNKEN` (*2460), `NPC_MIRA-UNKEN` (*2464), verschwunden 2506 |
| `ORT_RATTENWINKEL-2` | Leer Keller | `KEIM_RATTEN-KELLER` |

## Brunnen der Stadt

| ID | Ort |
|----|-----|
| `OBJ_BRUNNEN-TOR` | Torstraße 9 |
| `OBJ_BRUNNEN-MARKT` | Marktmitte |
| `OBJ_BRUNNEN-BETTEL` | Bettelgasse 8 |

## Spielerplätze (Kampagne 1)

| ID | Name |
|----|------|
| `NPC_TICK` | Tick, platz-1 |
| `NPC_TRACK` | Track, platz-2 |
| `NPC_TRUCK` | Truck, platz-3 |
| `NPC_HANNI` | Hanni, platz-4 |
| `NPC_NANNI` | Nanni, platz-5 |

Nichts weiter. Keine Kompanie-Namen, die das Verzeichnis nicht trägt. Keine Skaven als Fakt.
