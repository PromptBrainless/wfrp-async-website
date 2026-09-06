# Platzhalter → Volltext

Auftrag: jede Mechanik **einzeln** anlegen. Original belassen, dazu Projektfassung und Hilfe.

Vorlage: [00-VORLAGE.md](00-VORLAGE.md). Befehle: [00-BEFEHLE.md](00-BEFEHLE.md).

Simulation und UI sind kein Teil dieses Plans.

---

## Drei Dateien

| Datei | Inhalt | Anfassen? |
|-------|--------|-----------|
| `original.md` | Buchtext | Nur bei nachweislichem Extraktionsfehler |
| `angepasst.md` | Katalog, Grau, Loop, Bogen | Ja, das ist unsere Arbeit |
| `details.md` | Beispiele, JSON, Prüfen, SL-Hilfe | Ja |

Hub: `README.md`. Alte `name.md` bleibt Zeiger.

---

## Vor der Masse (steht)

Acht Integrationen, ohne die Volltext nicht landen darf:

1. [Register](00-REGISTER.md) / [data/register.json](data/register.json)
2. [Bogen-Felder](00-BOGEN.md) / [data/bogen.json](data/bogen.json)
3. Ziel-Stubs: Attribute, Zustände, Qualitäten, Völker
4. [WebP-Inventar](00-QUELLEN.md)
5. Talent-Gerüst (167)
6. Karriere-Gerüst (64)
7. JSON-Vertrag: `talents.json` `careers.json` `attributes.json` `qualities.json`
8. Siehe-auch-Pflicht im Gate

Gerüste erzeugen: `python3 skill/scripts/generate_stubs.py` (Original mit Inhalt wird nicht überschrieben).

---

## Wellen

### Welle C — Fähigkeiten (läuft)

45 Ordner unter `04-faehigkeiten-talente/faehigkeiten/<slug>/`.  
Rohkapitel: `_roh/hauptliste-s118-131.md`.

### Welle A — Charakter S. 24–45

Völker je eine Datei. Klasse/Karriere-Einführung, Startfähigkeiten, Ausrüstung, Gruppe/Steigerung, Charakterbogen.

### Welle D — Talente

`04-faehigkeiten-talente/talente/<slug>/` — 167 Gerüste stehen. Original füllen, nicht umbenennen.

### Welle B — Karrieren

Eine Datei je Karriere unter `03-klassen-karrieren/<klasse>/<slug>/` — 64 Gerüste. Bürger/Städter zuerst (Greta).

### Welle E–J

Regeln nachziehen, SL, Einkauf-Rest, Bestiarium, Religion, Magie, Reikland.

---

## Defaults

- Völker: ein Ordner je Volk
- Karrieren: ein Ordner je Karriere
- Bestiarium: Traits vollständig, Kreaturen wenn verlinkt
