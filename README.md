# Die Frist

Arbeitsrepo. Asynchrones **Warhammer Fantasy Roleplay 4e** (Ulisses, Grundregelwerk 2. überarbeitete Auflage).

**Kampagne 1:** fünf Spieler — Tick, Track, Truck, Hanni, Nanni · Ort **Drosselau** · Torstraße offen.  
**GitHub:** [PromptBrainless/wfrp-async-website](https://github.com/PromptBrainless/wfrp-async-website) — öffentlich, kein Fan-Release, keine PDFs.  
Unabhängige Kopie: [Rollenspiele 2 Versuch](https://github.com/PromptBrainless/Rollenspiele-2-Versuch).

Spieler setzt Absicht und wirft den W100. Der SL ist Leitung, keine Figur. Die Engine spricht nicht.

---

## Klonen — optionale Entwicklung ab jetzt

Das öffentliche Repo ist die Quelle. Sandkasten-Zip, Uploads und `node_modules` gehören nicht dazu.

```
git clone https://github.com/PromptBrainless/wfrp-async-website.git
cd wfrp-async-website
npm install
```

Stand: `main` · `3c6bb44`. Internes Arbeitsrepo, kein Fan-Release. [NOTICE.md](NOTICE.md).

Danach: [NEUES-FENSTER.md](NEUES-FENSTER.md).

---

## GitHub — was hier liegt, was nicht

| Im Repo | Nicht im Repo |
|---------|----------------|
| Loop, Wissen als MD (Original / angepasst / details) | PDFs, Scans, Drive-Dateien |
| Drosselau (Stadt, Stammbäume, Register) | Foundry-System, Foundry-Module, Compendium-Packs |
| App (`src/`), Katalog, Seed ohne Demo | Wiki-Abschriften, Abenteuer-PDFs Dritter |
| Kleist-Sicherung des Stands | VTT-Token-Logik, fremde Kampf-Engine |

Marken: Games Workshop, Cubicle 7, Ulisses. Siehe [NOTICE.md](NOTICE.md).

---

## Loop

```
Charakter an Ort
  → Zustand + Welt
  → Katalog (Karten grau, nie gelöscht)
  → Intention
  → Spieler-W100; Glück nur nach eigenem Wurf
  → SL deutet
  → neuer Zustand
```

---

## Lies zuerst

1. [NEUES-FENSTER.md](NEUES-FENSTER.md)
2. [knowledge/00-KONTEXT.md](knowledge/00-KONTEXT.md) — eine Wahrheit · [Kleist-Bild](public/images/context/kleist-stand.jpg)
3. [knowledge/00-WEGE.md](knowledge/00-WEGE.md) — Abend, Bogen, Buch, Gerät
4. [knowledge/00-INDEX.md](knowledge/00-INDEX.md) — Katalog, wenn du suchst

Danach, je Weg: [Das Spiel](knowledge/10-system/00-das-spiel.md) · [Kampagne 1](knowledge/10-system/16-kampagne-1.md) · [Drosselau](knowledge/07-reikland/drosselau/README.md) · [Übergabe](knowledge/00-UEBERGABE.md) · [Backlog](BACKLOG.md)

---

## Stand (2026-09-09)

| Schicht | Stand |
|---------|--------|
| Buch-Wissen | 329 / 329 Gerüste |
| Kampagne | 1 · Tick, Track, Truck, Hanni, Nanni · Drosselau |
| Stadt | 5 Viertel, 13 Gassen, 69 Häuser, 42 Stammbäume |
| Tisch | Leben. Torstraße offen |
| Demo | raus |

Nächster Schritt: am Tisch handeln. Die Engine erzählt nicht.

Hooks: `bash skill/scripts/install-hooks.sh`

---

## Struktur

```
knowledge/                 Buch + Kampagne
  07-reikland/drosselau/   Stadt
  10-system/               Loop, Frist
src/lib/wfrp/              Engine (kein Demo-Seed)
src/routes/                Start, Erschaffung, Bogen, Tisch, SL
scripts/kleist-snapshot.py Sicherung als Bild
```

EG (Buch S. 151, `src/lib/wfrp/dice.ts`): Zehner(Ziel) − Zehner(Wurf). 01–05 Erfolg, 96–00 Misserfolg, 00 = 100.
