# Nahkampf

Quelle: S. 126; Kampf S. 158–160; Waffen S. 293–296

**Art:** Grundfähigkeit, gruppiert  
**Spielwert:** KG (Kampfgeschick)  
**Spezialisierungen:** Standard, Fechten, Flegel, Parade, Kavallerie, Stangenwaffe, Waffenlos, Zweihändig

Training mit einer Waffengruppe. Jede Spezialisierung ist eine eigene Fähigkeit. Welche Spezialisierung zu welcher Waffe gehört: [Einkauf](../../08-einkauf/02-waffen-ruestung.md).

Ohne passende Steigerung (S. 296): Trefferwurf gegen **reines KG**. Makel gelten, Qualitäten nicht. Flegel zusätzlich Makel *Gefährlich*.

v1-Default: **Standard** (Dolch, Handwaffe) und **Waffenlos**.

## Im Kampf (S. 158–160)

1. Vergleichender Nahkampf-Wurf, herausfordernd (+0) sofern nicht anders.
2. Gewinner +1 Vorteil. Differenz der EG = finale EG.
3. Trefferzone: Würfel vertauschen.
4. Schaden = Waffenschaden + finale EG.
5. LP-Verlust = Schaden − (WÜB + RP der Zone). Minimum 1 LP, sofern Schaden > 0 — **außer** Makel *Stumpf* ([waffenlos](../../08-einkauf/waffen/waffenlos.md)).

Sobald man sich im Nahkampf gegenseitig attackiert: **gebunden** (S. 159). Nach einer vollen Runde ohne beidseitige Attacke nicht mehr gebunden.

Kritisch: gelungener Pasch. Patzer: misslungener Pasch.

Verteidigung alternativ: [Ausweichen](ausweichen.md), mit SL-Erlaubnis auch Charme, Einschüchtern, Anführen.

## Engine

- Resolver: Vergleich.
- `angreifen` braucht Bindung oder Sturmangriff/Annähern.
- `sturmangriff`: BH, +1 Vorteil **vor** dem Trefferwurf, wenn Distanz ≥ Bewegung in m und ≤ Rennen.

### Befehl

- `angreifen` — [Aktionskatalog](../../10-system/04-aktionskatalog-v1.md) / [Befehlsregister](../../10-system/06-befehle.md)
- `sturmangriff` — Bewegungsaktion + Handlung
- `waffe_ziehen` — frei in v1 (S. 158 Annahme)

### Siehe auch

- [Ausweichen](ausweichen.md)
- [Angreifen](../../05-regeln/07-angreifen-schaden.md)
- [Vorteile](../../05-regeln/03-vorteile.md)
- [Kritische Treffer](../../05-regeln/04-kritische-treffer.md)
- [Dolch](../../08-einkauf/waffen/dolch.md)
- [Waffenlos](../../08-einkauf/waffen/waffenlos.md)
- [Handwaffe](../../08-einkauf/waffen/handwaffe.md)
