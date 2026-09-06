# Platzhalter → Volltext

Auftrag: jede 📝-Datei und jede Kurzfassung durch den **Buchtext der Mechanik** ersetzen.  
Quelle: Drive-WebP. Seitenzahl = Fußzeile. Mapping: [00-QUELLEN.md](00-QUELLEN.md).  
Arbeitsregeln: [00-BEFEHLE.md](00-BEFEHLE.md).

Simulation und UI sind kein Teil dieses Plans.

---

## Was „Volltext“ heißt

Rein: Regeln, Tabellen, Beispiele, Karrierestufen, Preise, Würfel, Zustände, Talenttexte.  
Raus: Kunstseiten, reine Dekoration. Setting-Prosa nur, wenn die Datei genau das ist (Brief, Ort).

Eine Datei bleibt die eine Mechanik / die eine Karriere / die eine Fähigkeit. Keine Kapitel-Monolithe.

Alte Kurzfassungen **überschreiben**, nicht duplizieren.

---

## Bestand (ehrlich)

| Bereich | Dateien | Lage |
|---------|---------|------|
| 01 Einführung | 2 | Grundprinzip da; Brief 📝 |
| 02 Charaktere | 8 | Attribute/Völker/Erschaffung grob da; 03, 05, 06, 07, 08 = TODO-Platzhalter |
| 03 Karrieren | 11 | Übersicht/Status/Liste da; 8 Klassen = Platzhalter oder Demo-Schnitt (Bürger nur Städter/Kaufmann) |
| 04 Fähigkeiten | Liste + 14 Einzel | 14 Katalog-Fähigkeiten da, Rest der 45 fehlt als Datei; Liste ist Tabelle, nicht Volltext |
| 04 Talente | 1 Liste | keine Einzeldateien |
| 05 Regeln | 15 | Kern da, oft komprimiert; Verwundungen/Heilung/Korrumpierung/Krankheiten/Psychologie laut Abgleich dünn |
| 06 SL | 5 | 2 da, Reisen / Zwischen / Ereignisse 📝 |
| 07 Reikland | 3 | 📝 |
| 08 Einkauf | Markt + 3 Waffen | sonstige Ausrüstung 📝; Restwaffen fehlen |
| 09 Bestiarium | 3 | Struktur da, Traits/Beispiele 📝 |
| 11 Religion | 3 | 📝 |
| 12 Magie | 3 | 📝 |
| 10 System | abgeleitet | nicht Buch; nicht in den Wellen |

INDEX 📝 = Warteschlange. Nach Tausch: ✅ und Quelle mit Fußzeile.

---

## Wellen (Buchreihenfolge)

### Welle A — Charakter (S. 24–45)

| Datei | Buch | Status |
|-------|------|--------|
| `02-charaktere/03-klasse-karriere-einfuehrung.md` | S. 30–32 | 📝 |
| `02-charaktere/05-faehigkeiten-talente-start.md` | S. 35–36 | 📝 |
| `02-charaktere/06-ausruestung-details.md` | S. 37–40 | 📝 |
| `02-charaktere/07-gruppe-und-steigerungen.md` | S. 41–43 | 📝 |
| `02-charaktere/08-charakterbogen.md` | S. 44–45 | 📝 |
| `02-charaktere/01-…` und `04-attribute.md` | S. 24, 33–34 | nachziehen, falls Kurzfassung |

Völker (`02-voelker-kurz.md`) in derselben Welle auf Volltext der Volkstabelle, oder eigene Dateien pro Volk — **Entscheidung unten**.

### Welle B — Bürger zuerst, dann restliche Klassen

Pro Karriere eine Datei, z. B. `03-klassen-karrieren/buerger/staedter.md`.  
Klassen-Übersicht (`05-buerger.md` usw.) wird zum Index der acht Karrieren, kein Sammeltext.

Reihenfolge der Klassen: Bürger → Akademiker → Krieger → Gesetzlose → Höflinge → Freisassen → Flussvolk → Landvolk.  
(Bürger zuerst, weil Greta dort steht. Danach Buch.)

### Welle C — Fähigkeiten

Restliche Fähigkeiten als `04-faehigkeiten-talente/faehigkeiten/<name>.md`.  
`02-faehigkeiten-liste.md` bleibt Übersicht + Links, nicht der einzige Text.

### Welle D — Talente

Ordner `04-faehigkeiten-talente/talente/`. Eine Datei je Talent.  
`03-talente-liste.md` = Übersicht + Links.

### Welle E — Regeln nachziehen

Dateien, die ✅ im INDEX haben, aber komprimiert sind: Verwundungen, Heilung, Korrumpierung, Krankheiten, Psychologie, Angreifen, Bewegung. Gegen WebP halten und auf Volltext heben.

### Welle F — Zwischen den Abenteuern / Reisen

`06-spielleiter/03`–`05`.

### Welle G — Einkauf Rest

Sonstige Ausrüstung, restliche Waffen/Rüstung als Einzeldateien unter `08-einkauf/`.

### Welle H — Bestiarium

Traits, dann Beispielkreaturen (nur die, die Szenen brauchen, oder Buchliste — **Entscheidung unten**).

### Welle I — Religion, Magie

Erst Übersicht + Regeln (Wurf, Kanalisieren, Gebet), Listen danach.

### Welle J — Reikland, Brief Imperium

Setting zuletzt, außer eine Szene es braucht.

---

## Offene Entscheidungen (User)

1. **Völker:** eine Datei oder eine Datei je Volk?
2. **Karrieren:** Bestätigung „eine Datei je Karriere“?
3. **Bestiarium v1:** ganze Buchliste oder nur Demo-Kreaturen?
4. **Welle nach A:** B (Bürger) oder C (restliche Fähigkeiten)?

Default, falls du nichts sagst: Völker = eine Datei je Volk; Karrieren = eine Datei je Karriere; Bestiarium = Traits vollständig, Kreaturen nur wenn verlinkt; nach A kommt B.

---

## Pro Datei

1. WebP der Buchseiten holen.
2. Volltext schreiben, `Quelle: S. x–y`.
3. `### Befehl` + `### Siehe auch`.
4. INDEX, diese Wellen-Tabelle, Commit.

Kein zweites Dokument „Kurz“ neben „Lang“.
