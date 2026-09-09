# Vorlage – eine Mechanik, drei Dateien

**Weg · Buch 1/5** · [Wege](00-WEGE.md) · [Befehle →](00-BEFEHLE.md)

Jede Mechanik, Fähigkeit, Talent, Karriere, Waffe, Zustand liegt in **einem Ordner**.

```
<slug>/
  README.md       Hub, Links
  original.md     Buchtext, nach der Extraktion nicht mehr umschreiben
  angepasst.md    Unsere Fassung für die asynchrone Website
  details.md      Hilfe, Beispiele, Grau, JSON, Prüfen
```

INDEX und Befehlsregister zeigen auf den Ordner bzw. auf `angepasst.md` für IDs.

---

## original.md

- Titel + `Quelle: S. xx` (Buchfußzeile)
- Volltext der Mechanik aus dem Buch: Regeln, Tabellen, Beispiele, Boxen
- Keine Engine, kein Katalog, kein „bei uns“
- Kopfzeile: `Status: Original, nicht anfassen`
- Am Ende nur `### Siehe auch` auf angepasst, details, verwandte Originale

Wenn der Buchtext später korrigiert werden muss: neue Extraktion, alte Version bleibt im Git.

## angepasst.md

Unsere Übersetzung in den Loop. Nicht das Buch wiederholen.

- Was die Karte tut
- Kosten F / B / H
- Wann sie erscheint, wann grau (Grund auf der Karte)
- Resolver (Standard, Vergleich, auto)
- SL entscheidet vs. Engine würfelt
- Glück-Fenster nur nach **eigenem** Wurf
- Felder, die der Bogen braucht

`### Befehl` mit Katalog-IDs, sonst `-`

## details.md

Hilfe für SL und Bau:

- Buch-Beispiele kurz, mit Seite
- JSON-`id`
- Häufige Fallen, Randfälle
- `[prüfen am Buch S. xx]`
- Links auf verwandte Angepasst-Dateien

---

## README.md (Hub)

```
# <Name>

Quelle: S. xx

- [Original](original.md) — Buch, unverändert
- [Angepasst](angepasst.md) — Projekt
- [Details](details.md) — Hilfe
```

Alte Einzeldatei `name.md` bleibt als Zeiger auf den Ordner, damit Links nicht tot sind.
