# Fortschritt — Platzhalter → Volltext

Auftrag: jede Mechanik **einzeln**. Original belassen, dazu Projektfassung und Hilfe.

Vorlage: [00-VORLAGE.md](00-VORLAGE.md) · Befehle: [00-BEFEHLE.md](00-BEFEHLE.md) · IDs: [00-REGISTER.md](00-REGISTER.md)

**Simulation und UI sind kein Teil dieses Plans.**

Stand: 2026-09-06 Abend · Originale mit Buchtext: **67 / 329** Gerüste.

---

## Drei Dateien

| Datei | Inhalt | Anfassen? |
|-------|--------|-----------|
| `original.md` | Buchtext | Nur bei nachweislichem Extraktionsfehler |
| `angepasst.md` | Katalog, Grau, Loop, Bogen | Ja |
| `details.md` | Beispiele, JSON, Prüfen, SL-Hilfe | Ja |

Hub: `README.md`. Alte `name.md` bleibt Zeiger.

---

## Vor der Masse

| # | Integration | Status |
|---|-------------|--------|
| 1 | [Register](00-REGISTER.md) / [register.json](data/register.json) | [x] |
| 2 | [Bogen-Felder](00-BOGEN.md) / [bogen.json](data/bogen.json) | [x] |
| 3 | Ziel-Stubs: Attribute, Zustände, Qualitäten, Völker | [x] |
| 4 | [WebP-Inventar](00-QUELLEN.md) | [x] |
| 5 | Talent-Gerüst (167 Ordner) | [x] |
| 6 | Karriere-Gerüst (64 Ordner) | [x] |
| 7 | JSON: talents, careers, attributes, qualities | [x] |
| 8 | Siehe-auch-Pflicht im Gate + Hooks | [x] |

Gerüste: `python3 skill/scripts/generate_stubs.py` (füllt kein gefrorenes Original).

---

## Wellen

### Welle C — Fähigkeiten S. 118–131

[x] 45 / 45 Originale  
Roh: [\_roh/hauptliste-s118-131.md](04-faehigkeiten-talente/_roh/hauptliste-s118-131.md)

### Welle E — Zustände S. 167–169

[x] 12 / 12 Originale  
Hub: [05-zustaende.md](05-regeln/05-zustaende.md) · Roh: [\_roh/zustaende-s167-169.md](05-regeln/_roh/zustaende-s167-169.md)

### Welle B — Karrieren S. 53–116

[ ] 2 / 64 Originale

- [x] [Städter](03-klassen-karrieren/buerger/staedter/original.md) S. 67 (Greta = Gehilfe)
- [x] [Kaufmann](03-klassen-karrieren/buerger/kaufmann/original.md) S. 65 (Otto = Händler)
- [ ] Halunke (Kurt) — Klasse Gesetzlose
- [ ] restliche 6 Bürger, dann übrige Klassen

### Welle D — Talente S. 132–147

[ ] 8 / 167 Originale

Demo:

- [x] Einnehmendes Wesen S. 134
- [x] Etikette S. 135
- [x] Lesen & Schreiben S. 139
- [x] Redeschwall S. 141
- [x] Stämmig S. 144
- [x] Straßenkatze S. 145
- [x] Unauffällig S. 146
- [x] Verhandlungsgenie S. 146

### Welle A — Charakter S. 24–45

[ ] 0 / 5 Völker-Originale (Gerüste stehen)  
[ ] 0 / 10 Attribut-Originale  
[ ] Klasse/Karriere-Einführung, Startfähigkeiten, Ausrüstung, Bogen-Erklärung

### Welle F–J — Rest Buch

[ ] Schicksal & Zähigkeit S. 170–171 (Kapiteldatei dünn, kein 3-Datei-Ordner)  
[ ] Qualitäten / Makel 0 / 26  
[ ] Waffen-Ordner über Demo hinaus  
[ ] SL: Reisen, Zwischen den Abenteuern  
[ ] Religion, Magie, Reikland, Bestiarium

---

## Als Nächstes (Demo-Schnitt, Reihenfolge)

1. [ ] 5 Völker S. 36 (Bogen-Start)
2. [ ] Halunke (Kurt)
3. [ ] Attribute S. 33–36, wenn Völker das brauchen

Nicht: Website. Nicht: Simulation nachrechnen.

---

## Defaults

- Völker: ein Ordner je Volk
- Karrieren: ein Ordner je Karriere
- Bestiarium: Traits vollständig, Kreaturen wenn verlinkt

### Siehe auch

- [00-BEFEHLE.md](00-BEFEHLE.md)
- [00-INDEX.md](00-INDEX.md)
- [00-UEBERGABE.md](00-UEBERGABE.md)
- [00-REGISTER.md](00-REGISTER.md)

