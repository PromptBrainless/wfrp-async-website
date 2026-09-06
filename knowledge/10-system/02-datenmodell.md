# Datenmodell v1

Quelle: abgeleitet. Regelanker GRW 2. Auflage S. 6–7, 33–36, 117–118, 149–172, 259–262.  
Katalog: [04-aktionskatalog-v1.md](04-aktionskatalog-v1.md).  
Simulation ist Walkthrough, nicht Schema: [05-simulation-vs-buch.md](05-simulation-vs-buch.md).

Das Regelwerk bleibt die Autorität. Die Engine erfindet keine Regeln und keine Plotwendungen.

---

## 0. Was die Engine darf und was nicht

| Rolle | Darf | Darf nicht |
|-------|------|------------|
| Spieler | Eine Intention wählen, Inventar/Karriere am Bogen pflegen, Glück/Mut/Schicksal/Zähigkeit **ausgeben**, wenn das Fenster oder die Karte legal ist | Würfel über das Ergebnis hinweg entscheiden, fremde Würfe mit Glück belegen (v1), Zustand setzen |
| SL | Automatisch / Wurf / Vergleich wählen, Fähigkeit und Schwierigkeit setzen, Freitext anbinden oder ablehnen, Event einwerfen, NSCs in gesetzter Reihenfolge handeln lassen, Satz in die Welt schreiben, Engine ignorieren | — |
| Engine | Zustand halten, Katalog filtern, Resolver vorschlagen, Würfe ausführen wenn SL frei gibt, Zahlen eintragen, Szenenprotokoll schreiben, Glück-Fenster nach eigenem Wurf öffnen | Regeln erfinden, Plot erfinden, Karriere ändern, KI-Entscheidungen |

Ohne Charakterbogen gibt es keine legale Aktion.

---

## 1. Enums

```
Volk            = Mensch | Zwerg | Halbling | Elf
Klasse          = Akademiker | Bürger | Flussvolk | Freisassen | Gesetzlose | Höflinge | Krieger | Landvolk
StatusTier      = messing | silber | gold
Karrierestufe   = 1 | 2 | 3 | 4

Attr            = KG | BF | ST | WI | I | GW | GS | IN | WK | CH
  Bonus         = Zehnerstelle des Werts (ST 32 → STB 3)

FaehigkeitArt   = grund | ausbau
FaehigkeitGruppe= nahkampf | fernkampf | sprache | wissen | …   # Spezialisierung = eigene Fähigkeit

ZustandId       = betaeubt | bewusstlos | blutend | brennend | demoralisiert
                | erschoepft | ertaubt | geblendet | gefesselt
                | niedergestreckt | ueberrascht | vergiftet

Kosten          = F | B | H | BH                 # frei / Bewegung / Handlung / beides
AktionsTab      = sozial | bewegung | kampf | ressourcen
Resolver        = auto | standard | dramatisch | vergleich | erweitert | move | resource | combat
Schwierigkeit   = sehr-einfach(+60) | einfach(+40) | durchschnittlich(+20)
                | herausfordernd(+0) | schwierig(-10) | schwer(-20) | sehr-schwer(-30)

SzenenModus     = sozial | reise | kampf | downtime
Phase           = sammeln | bereit | gewuerfelt | glueck-fenster | nsc | idle | beendet
AkteurArt       = pc | npc | spectator
TickModus       = mix   # v1-Default: auflösen wenn alle relevanten Intentionen da, sonst spätestens Frist

WaffenGruppe    = standard | kavallerie | fechten | waffenlos | flegel | parade | stangenwaffe | zweihändig | …
Laenge          = persoenlich | sehr-kurz | kurz | durchschnitt | lang | sehr-lang | gewaltig
```

v1 schaltet aus: Magie, Gebete, Krankheiten-Tabellen, Fernkampf ohne Waffe, Ringen/Packen als Katalogkarte, KI.

---

## 2. Entitäten

### 2.1 Charakter

Jeder SC, NSC und jede Kreatur nutzt dasselbe Gerüst. Kreaturen + Traits.

```
Charakter
  id, name
  art: AkteurArt
  volk, klasse
  karriere, karrierestufe
  status: { tier: StatusTier, rang: 1..8 }
  motivation: string
  attribute: Record<Attr, 0..100+>
  faehigkeiten: [{
    id,               # "feilschen" | "nahkampf.waffenlos" | "wahrnehmung"
    spielwert: Attr,
    art: FaehigkeitArt,
    steigerungen: int,           # +1 pro Steigerung (S. 117: Charme 41 + 5 = 46)
    spezialisierung?: string
  }]
  talente: [{ id, stufe? }]
  lp: { aktuell, max }           # max = STB + 2×WIB + WKB  (Halbling: ohne STB / Talent Zierlich)
  bewegung: int                  # Mensch 4, Zwerg/Halbling 3, Elf 5
  schicksal, glueck              # glueck-Obergrenze = aktuelles schicksal
  zaehigkeit, mut                # mut-Obergrenze = aktuelle zaehigkeit
  vorteile: int                  # v1-Default-Obergrenze = IB
  zustaende: [{ id: ZustandId, stapel: int }]
  geld: { gk, s, d }             # 12 d = 1 S, 20 S = 1 GK
  inventar: Gegenstand[]
  flags: string[]                # schuldet_haken_2S, gesehen_worden, …
  waffeGefuehrt?: GegenstandId
  gebundenMit: CharakterId[]
  distanzM?: number              # nur wenn die Szene Distanz braucht
```

Abgeleitet, nie speichern außer als Cache:

```
bonus(wert)        = floor(wert / 10)
faehigkeitswert    = spielwert + steigerungen
                     Ausbau ohne Steigerung → illegal (grau: „nicht ausgebildet“)
traglastMax        = STB + WIB
rennenM            = bewegung × 4
gehenM             = bewegung × 2
```

### 2.2 Gegenstand

```
Gegenstand
  id, name
  traglast
  waffe?: {
    gruppe, laenge
    schadenFormel          # "+STB+2" Dolch, "+STB+0" waffenlos, "+8" Pistole
    qualitaeten[], maengel[]
    gezogen: bool
  }
  ruestung?: { zone, rp }
```

Dolch v1: 16 S, TP 0, Sehr kurz, Schaden +STB+2, keine Qualitäten (S. 294).  
Waffenlos: +STB+0, Stumpf.

### 2.3 Ort / Szene

Digitale Form von „wo stehen die SC und was geschieht um sie herum“ (S. 261).

```
Szene
  id
  ort: { id, name, beschreibungKurz, ausgaenge: Ausgang[], flags: string[] }
  anwesend: CharakterId[]          # SC, NSC, Zuschauer
  modus: SzenenModus
  slText: string                   # erster Absatz, den der Spieler liest
  ausloeser: string
  countdown: { endetUm: timestamp, dauerMs }
  katalogFilter: AktionId[]        # welche IDs grundsätzlich zu diesem Ort gehören
  protokoll: ProtokollEintrag[]
  offeneEvents: Event[]            # vorbereitet, noch nicht geworfen
  kampf?: Kampfzustand
```

```
Ausgang = { id, label, zuSzeneId }
Kampfzustand = {
  runde: int
  initiative: CharakterId[]        # Default: Wert I absteigend, bei Gleichstand GW
  distanzM: number
  ueberrascht: CharakterId[]
  wacheEtaRunden?: int
}
```

### 2.4 Aktion (Katalog)

```
Aktion
  id, label
  kosten: Kosten
  tab: AktionsTab
  faehigkeit?: FaehigkeitId
  resolver: Resolver
  voraussetzungen: Voraussetzung[]   # Ort, Bindung, Bewusstsein, Gegenstand, Status, Fenster
  zusammenfassung: string
```

Sichtbare Liste = Katalog ∩ Filter(Ort, Zustand).  
Karten, die der Charakter **kennt**, aber **jetzt nicht nutzen kann**, bleiben stehen und sind **ausgegraut**, nicht gelöscht. Grund steht auf der Karte.

### 2.5 Intention

Spieler steuern Absicht, nicht Ausgang.

```
Intention
  charakterId
  aktionId                         # Katalog, selten "freitext"
  notiz?: string                   # Bitte an den SL, nie alleinige Steuerung
  zielId?: CharakterId
  ausgangId?: string
  extras?: { zielpreisS?: int, … }
  eingereichtUm: timestamp
```

Freitext: SL hängt sie an Fähigkeit+Schwierigkeit oder lehnt ab („das geht hier nicht / das ist `feilschen`“).

### 2.6 Wurf / Auflösung

```
Wurf
  id
  charakterId, aktionId
  art: standard | dramatisch | vergleich | erweitert
  faehigkeitId
  schwierigkeit: Schwierigkeit
  modifikator                      # Tabelle + Vorteile×10 + Zustände + SL
  zielwert                         # faehigkeitswert + modifikator
  w100                             # 00 = 100
  eg                               # siehe §3
  automatisch?: erfolg01_05 | misserfolg96_00
  vergleich?: { gegnerId, w100, zielwert, eg, siegerId, finaleEg }
  pasch: bool
```

```
PendingResolution
  intention
  vorschlag: { resolver, faehigkeit, schwierigkeit, gegner? }
  slOverride?: auto-erfolg | auto-misserfolg | andereFaehigkeit | ablehnen
  wurf?: Wurf
  satzInDieWelt: string            # SL schreibt, Engine trägt Zahlen ein
```

### 2.7 Glück-Fenster

Pflicht nach **eigenem** Wurf. Kein verstecktes Extra.

```
GlueckFenster
  charakterId
  wurfId
  optionen: glueck-wiederholen | glueck-plus1eg | [zaehigkeit-wurf-waehlen]
  fristUm?: timestamp              # ohne Antwort = nicht ausgegeben, Fenster zu
```

v1: Glück auf fremde Würfe nicht implementiert.  
Wiederholungswurf darf nicht erneut wiederholt werden (S. 150).

### 2.8 Event / Flag / Protokoll

```
Event
  id, label
  trigger: { flags?, aktionId?, nachSozialemMisserfolg?, nachSzenenwechsel? }
  effekt: FlagSet | Szenenwechsel | NSC-handeln | LP | Geld | Zustand
  geworfen: bool

ProtokollEintrag
  id, um
  art: welt | zahlen | event | system
  titel, text
  zahlen?: string                  # "Wahrnehmung 41, Wurf 27, +2 EG"
```

Events sind Schritt 4 des SL-Abends (S. 262), kein Zufallsgenerator.

### 2.9 Kampagne

```
Kampagne
  id, titel
  slId
  scIds: CharakterId[]             # 1–10
  weltflags: string[]
  szenen: Record<id, Szene>
  aktuelleSzeneId
  sitzung: { glueckAufgefuellt: bool }   # „Spielbeginn“ = Sitzung, nicht jede Szene
```

---

## 3. Würfelkern (Engine, nicht Simulation)

Buch S. 149–155. Die Simulations-Zahlen weichen ab; die Engine rechnet so:

```
w100():
  zehner, einer ∈ 0..9
  n = 10*zehner + einer
  return n == 0 ? 100 : n          # 00 = 100

erfolg(ziel, wurf):
  if wurf in 01..05: immer Erfolg
  if wurf in 96..00: immer Misserfolg
  return wurf <= ziel

eg(ziel, wurf):                    # Dramatischer Wurf, Default
  e = tens(ziel) - tens(wurf)      # 41 gegen 29 → 4-2 = +2
  if auto-Erfolg:  max(e, +1)
  if auto-Misserfolg: min(e, -1)
  return e

vergleich(a, b):
  sieger = höhere EG; bei Gleichstand höherer Fähigkeitswert;
           sonst SL: unentschieden oder neu würfeln
  finaleEG = EG_sieger - EG_verlierer   # auch wenn beide „gescheitert“
```

Option „Schnelle EG“ (S. 152) ist **nicht** v1-Default.  
Modifikatoren ändern den **Zielwert**, nicht den Würfel (S. 150, 153).

Schwierigkeit im Kampf, wenn nicht genannt: **herausfordernd (+0)**.

---

## 4. Auflösungs-Pipeline

Reihenfolge für jede Intention (Spielbeschreibung §7, Buch S. 149–155 / 259–260):

```
1. Karte legal? sonst grau / SL-Nein
2. SL: automatisch | Wurf | Vergleich
3. Schwierigkeit als Modifikator
4. Unterstützung: +10 je Helfer, max. Bonus des geprüften Spielwerts,
   Helfer braucht ≥1 Steigerung, muss anwesend sein (S. 155)
5. W100 gegen Fähigkeitswert. 00 = 100
6. EG. Vergleich: bessere EG gewinnt auch bei beidseitigem Scheitern
7. Engine trägt Zahlen ein. SL schreibt den Satz in die Welt
8. Zustände, LP, Geld, Flags, Vorteile aktualisieren
9. Glück-Fenster, wenn Schritt 5 ein eigener Wurf war
```

Kampf zusätzlich (S. 156–165):

```
Initiative (Wert I) → Überraschung
Zug: Bewegung und/oder Handlung
Sturmangriff = B+H, Ziel in Rennen-Reichweite und ≥ Bewegung in m entfernt
               → +1 Vorteil VOR dem Trefferwurf (Beispiel Salundra S. 158: 49+10)
Nahkampf = Vergleich (meist Nahkampf gegen Nahkampf oder Ausweichen)
Gewinner +1 Vorteil; finale EG = Differenz
Schaden = Waffenschaden + EG
LP-Verlust = Schaden − (WIB + RP der Zone); bei ≤1 trotzdem 1 LP
Trefferzone = Würfel vertauschen
Pasch + Erfolg = Kritischer Treffer; Pasch + Misserfolg = Patzer
Jeder neue Zustand → Vorteile 0
Vergleich im Kampf verloren, LP-Verlust, Kampfende → Vorteile 0
Hilflos (S. 162 / SL-Notiz S. 260): nur wer sich NICHT verteidigt
  (schläft, bewusstlos, oder verweigert den Vergleich).
  Nicht: „im Kampf gibt es keinen Widerstand.“
Lösen: Vorteilsvorsprung ausgeben (Vorteile → 0) oder Vergleich Ausweichen/Nahkampf
```

---

## 5. Katalog-Filter (grau, nicht löschen)

Hart, in dieser Reihenfolge. Grund auf der Karte.

| Bedingung | Wirkung |
|-----------|---------|
| `bewusstlos` | keine Spieleraktion |
| `niedergestreckt` | nur `aufstehen` oder `kriechen` |
| `betaubt` | keine Handlung (H), halbe Bewegung |
| `ueberrascht` | keine B, keine H, keine Verteidigung |
| nicht gebunden | `loesen` grau |
| gebunden | `gehen`, `schleichen`, `sprinten`, `sturmangriff` grau |
| Waffe schon gezogen | `waffe_ziehen` grau |
| kein Feind in Sicht / nicht Kampf | Kampfkarten außer Ziehen grau |
| kein eigener offener Wurf | `glueck` grau |
| kein Zustand / keine Psych | `mut` grau |
| nicht Tod/ausweglos | `schicksal` grau |
| kein passendes Fenster | `zaehigkeit` grau |
| kein Ausgang | `gehen` grau |
| Ausbau ohne Steigerung | Karte grau: „nicht ausgebildet“ |

---

## 6. Tick

v1-Default: **Mischung.** Auflösen, sobald alle relevanten SC gezogen haben; sonst spätestens Frist. Fehlende Spieler: `warten` oder SL-Stellvertreter.

Parallel außerhalb des Kampfes ist der Normalfall. Im Kampf gilt Initiative, nicht „wer zuerst abgeschickt hat“.

Countdown ist die digitale Anwesenheit, nicht ein zweites Regelwerk.

---

## 7. Persistenz (was die „Datenbank“ ist)

Kein Login in v1. Ein Kampagnen-Dokument, lokal, versionsbehaftet.

```
persistiert     Kampagne, Charaktere, Szenen, Flags, Inventar, Protokoll, offene Intentionen
ephemer         Countdown-Anzeige, UI-Tab, Würfel-Animation
nie             KI-Text als Zustand, Regelwerk-Volltext
```

Mehrere Kampagnen dürfen parallel existieren. Eine Person kann SL in der einen und Spieler in der anderen sein.

---

## 8. Demo-Datensatz (Basar + Rauferei)

Fakten aus der Simulation, Werte die das Buch braucht. EG in der Simulation nicht 1:1 übernehmen.

**Greta Kohl** — Menschin, Bürgerin, Krämerin 1, Silber 1. Motivation: Schulden des Vaters.

```
KG 31  BF 33  ST 32  WI 34  I 36  GW 31  GS 38  IN 41  WK 35  CH 42
B 4   LP 12/12   Schicksal/Glück 3   Zähigkeit/Mut 3   Vorteile 0
Feilschen 47, Charme 45, Wahrnehmung 41, Intuition 39,
Ausweichen 31, Nahkampf 31, Ausdauer 34, Besonnenheit 35
Dolch nicht gezogen (+STB+2), 8 S + 14 d, Flag schuldet_haken_2S
```

**Otto Tuchhändler** — Silber 1. Feilschen 50, Charme 38, Besonnenheit 36, Wahrnehmung 33. Startpreis 6 S.

**Kurt Raufbold** — Messing 2. KG 38, Ausweichen 33, ST 35 (STB 3), WI 32 (WIB 3), I 30, LP 11, waffenlos.

**Dieb (Event)** — Fingerfertigkeit 45. Kein voller Bogen.

Vorbereitete Events: sozialer Misserfolg am Stand → Taschendieb; `gehen` in die Gasse → Kurt; nach Bindung Wache naht.

---

### Siehe auch
- [Sims-Prinzip](01-sims-prinzip-ableitung.md)
- [Aktionskatalog v1](04-aktionskatalog-v1.md)
- [Simulation vs. Buch](05-simulation-vs-buch.md)
- [Würfel](../05-regeln/01-wuerfel-und-grundmechanik.md)
- [Zustände](../05-regeln/05-zustaende.md)
- [Kernrollen des SL](../06-spielleiter/01-kernrollen-des-SL.md)
