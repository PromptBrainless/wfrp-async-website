# Fortschritt — Platzhalter → Volltext

Auftrag: jede Mechanik **einzeln**. Original belassen, dazu Projektfassung und Hilfe.

Vorlage: [00-VORLAGE.md](00-VORLAGE.md) · Befehle: [00-BEFEHLE.md](00-BEFEHLE.md) · IDs: [00-REGISTER.md](00-REGISTER.md)

**Simulation und UI sind kein Teil dieses Plans.**

Stand: 2026-09-08 · Originale mit Buchtext: **329 / 329** Gerüste (Karrieren, Talente, Qualitäten, Fähigkeiten, Völker, Attribute, Zustände).

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

[x] 64 / 64 Originale — alle acht Klassen S. 53–116

- [x] Akademiker 8/8 — S. 53–60
- [x] Bürger 8/8 — S. 61–68
- [x] Flussvolk 8/8 — S. 69–76
- [x] Freisassen 8/8 — S. 77–84
- [x] Gesetzlose 8/8 — S. 85–92
- [x] Höflinge 8/8 — S. 93–100
- [x] Krieger 8/8 — S. 101–108
- [x] Landvolk 8/8 — S. 109–116

### Welle D — Talente S. 132–147

[x] 167 / 167 Originale 
Roh: [\_roh/talente-s132-147.md](04-faehigkeiten-talente/_roh/talente-s132-147.md)

### Welle A — Charakter S. 24–45

[x] 5 / 5 Völker-Originale — [Hub](02-charaktere/02-voelker-kurz.md) 
[x] Startfähigkeiten S. 35–36 — [05-faehigkeiten-talente-start.md](02-charaktere/05-faehigkeiten-talente-start.md) 
[x] 10 / 10 Attribut-Originale — [Hub](02-charaktere/04-attribute.md) 
[x] Klasse/Karriere-Einführung, Ausrüstung, Bogen-Erklärung — Hubs S. 30–32 / 37–45

### Welle F–J — Rest Buch

[x] Schicksal & Zähigkeit S. 170–172 — Roh + Hub  
[x] Krit / Heilung / Psychologie S. 173–191 — Roh  
[x] Qualitäten / Makel 26 / 26 — S. 297–299  
[x] Waffen-Tabellen S. 294–295 + Einkauf-Roh S. 288–309  
[x] SL: Reisen, EP — Roh S. 258–265  
[x] Zwischen den Abenteuern S. 192–201 — Roh  
[x] Religion S. 202–228 — Roh + Hubs  
[x] Magie S. 229–257 — Roh + Hubs  
[x] Reikland S. 266–287 — Roh + Hubs  
[x] Bestiarium S. 310–353 — Roh + Hubs

---

## Als Nächstes (Buchreihenfolge)

0. [x] [Prompt Erschaffung + Weltwissen](02-charaktere/PROMPT-erschaffung-weltwissen.txt) — **P1 Primer** + **39 Einzel-Erklärungen** ([erschaffung/](02-charaktere/erschaffung/README.md))
1. [x] 8 Demo-Talente: Einsatz in der Spielwelt (`details.md`)
2. [x] Talente der Bürger-Stufe-1 + ein Schläger-Stufe-1 Originale (18)
3. [x] nächste Klasse nach Bürger — Flussvolk S. 69–76
4. [x] Akademiker S. 53–60
5. [x] Freisassen, restliche Gesetzlose, Höflinge S. 77–100
6. [x] Krieger + Landvolk S. 101–116 — **64/64 Karrieren**
7. [x] Welle D: Talente S. 132–147 — **167/167**
8. [x] Qualitäten / Makel S. 297–299 — **26/26**
9. [x] Religion S. 202–228 und Magie S. 229–257 — Rohkapitel + Hubs
10. [x] Kampagne 1, 5 Spieler — Plätze leer, Ort fehlt
11. [x] Restbuch als Roh + Hubs: Schicksal, Zwischen, SL, Reikland, Einkauf, Bestiarium
12. [x] Ort Kampagne 1: Drosselau (13 Gassen). Szene zu.

Buch-Wissen liegt. Kampagne 1 in Drosselau. Erste Szene öffnet der Mensch.

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

