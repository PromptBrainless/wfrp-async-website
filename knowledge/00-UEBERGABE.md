# Übergabe – WFRP asynchrone Website / Wissensbasis

**Stand:** 2026-09-06, nach Katalog-Fähigkeiten + Initiative + Markt. Repo `PromptBrainless/wfrp-async-website`.  
**Nächster Schritt:** Charakterbogen-Felder, Zustandseinzeldateien nur wenn der Resolver sie braucht. **Keine Website**, bis User das sagt.

**Repo:** https://github.com/PromptBrainless/wfrp-async-website  
**Arbeitsregeln:** [00-BEFEHLE.md](00-BEFEHLE.md) · **IDs:** [10-system/06-befehle.md](10-system/06-befehle.md)


---

**Sprache:** Deutsch (Quelle und Ziel)  
**Regelwerk:** Warhammer Fantasy Roleplay 4. Edition, Grundregelwerk, 2. überarbeitete Auflage (Ulisses), PDF-Uploads `Zxhtd` / `QdpW4`

Dieses Dokument ist die **vollständige Übergabe an eine neue Grok-Session**. Lies es zuerst, dann `00-INDEX.md` und `00-ABGLEICH-INHALTSVERZEICHNIS.md`.

---

## 1. Ziel des Gesamtprojekts

Eine **Website** (nicht App), in der Gruppen bis **10 Spieler asynchron** Warhammer Fantasy Roleplay 4e spielen.

Kernidee (Sims-Loop):

```
Charakter ist an Ort XY
    → Zustand des Charakters + Weltzustand
    → verfügbare Aktionen (kontextsensitiv)
    → Spieler wählt Intention
    → System + SL lösen auf
    → neuer Welt-/Charakterzustand
```

Nicht das Ziel: Live-Video-Tisch oder reines Chat-Forum.  
Ziel: tick-/szenenbasierter Zustandssync, SL-Override bleibt möglich.

---

## 2. Was bereits existiert

### 2.1 Wissensbasis

Pfad: `/home/workdir/artifacts/wfrp-md/`

- ca. **61 Markdown-Dateien**
- Struktur deckt das **gesamte Inhaltsverzeichnis** ab (Platzhalter oder Inhalt)
- Zentralnavigation: `00-INDEX.md` (✅ Inhalt / 📝 Platzhalter)
- Inhaltsverzeichnis-Abgleich: `00-ABGLEICH-INHALTSVERZEICHNIS.md`

### 2.2 Skill

Pfad: `/home/workdir/.grok/skills/pdf-to-interlinked-md/`

- `SKILL.md` – Workflow für PDF → vernetzte MD
- `references/wfrp-chapter-map.md` – Kapitel-Mapping
- `scripts/validate-extraction.sh` – leere Dateien / INDEX prüfen

**Diese Skill immer verwenden**, wenn Regelwerk weiter extrahiert wird.

### 2.3 Inhaltlich stark (nutzbar für Engine)

- Grundprinzip + SL-Loop + Sims-Ableitung
- Attribute inkl. Volkstabelle
- Status-System + Karrieren-Liste (Namen)
- Regeln-Kapitel weitgehend: Würfel, Kampfkern, Vorteile, Kritische Treffer, Zustände (12 Stück), Schicksal/Zähigkeit, Angreifen/Schaden, Bewegung, Verwundungen, Heilung, Korrumpierung, Krankheiten, Psychologie
- Fähigkeiten: Struktur + Kernliste
- Talente: Struktur + Kategorien (Einzeltalente noch nicht alle ausgeschrieben)

### 2.4 Noch Platzhalter / dünn

- Einzelne Karriere-Profile (Akademiker … Landvolk)
- Fähigkeiten/Talente Einzeleinträge vollständig
- Magie (Kapitel komplett)
- Religion (Kapitel komplett)
- Reikland, Einkauf, Bestiarium-Details
- Reisen, Zwischen den Abenteuern
- Brief bezüglich des Imperiums und Rest Charaktererschaffung-Schritte

### 2.5 Füllstand (ehrlich)

- **Struktur:** ~95 % des Inhaltsverzeichnisses als Dateien
- **Echter Inhalt:** grob **15–25 %** des Buchs (Kernsysteme überproportional)
- Viele Dateien sind bewusst **komprimiert-rekonstruktionsfähig**, nicht wortgleich ungekürzt. Grund: PDF-Text ist lang; priorisiert wurde Engine-Relevanz.

---

## 3. Arbeitsregeln (verbindlich)

1. **Deutsch** bleiben, Begriffe aus dem Buch beibehalten (KG, BF, Vorteile, Zustände, EG …).
2. Neue Inhalte in **bestehende Dateien** schreiben, keine parallele Struktur erfinden.
3. Jede Datei: Titel, `Quelle: S. xx`, am Ende `### Siehe auch` mit relativen Links.
4. Nach jedem sinnvollen Block: INDEX aktualisieren, **ZIP** anbieten.
5. Keine erfundenen Regeln. Unsicherheiten als `[prüfen am Buch S. xx]` markieren.
6. Keine wortwörtliche Vollreproduktion des kompletten Regelwerks in einem Stück. Strukturierte, nachvollziehbare Extraktion mit Quellenangabe.
7. PDF-Tools: `pdf_search` + `pdf_browse` auf Document-ID `QdpW4` (komprimierte lesbare Fassung) bevorzugen.

---

## 4. Dateikonventionen

```
wfrp-md/
├── 00-INDEX.md
├── 00-ABGLEICH-INHALTSVERZEICHNIS.md
├── 00-UEBERGABE.md          ← dieses Dokument
├── 01-einfuehrung/
├── 02-charaktere/
├── 03-klassen-karrieren/
├── 04-faehigkeiten-talente/
├── 05-regeln/               ← Engine-Kern, am weitesten
├── 06-spielleiter/
├── 07-reikland/
├── 08-einkauf/
├── 09-bestiarium/
├── 10-system/               ← abgeleitet, nicht aus dem Buch
├── 11-religion/
└── 12-magie/
```

Links immer relativ: `../05-regeln/05-zustaende.md`

---

## 5. Abgeleitetes System (Website)

Siehe `10-system/01-sims-prinzip-ableitung.md` und `10-system/02-datenmodell.md`.

Geplante Entitäten:

| Entität | Pflichtfelder (Minimum) |
|---------|-------------------------|
| Charakter | Volk, Klasse, Karriere+Stufe, 10 Werte + Boni, LP, Bewegung, Schicksal/Glück, Zähigkeit/Mut, Motivation, Fähigkeiten, Talente, Zustände[], Vorteile, Status |
| Ort/Szene | id, Beschreibung, Flags, anwesende Charaktere, verfügbare Aktions-IDs |
| Aktion | id, Label, Voraussetzungen, benötigte Fähigkeit, Schwierigkeit, Resolver-Typ, mögliche Ergebnisse |
| Zustand | id, Stapelbarkeit, Effekte, Entfernungsregel |
| Kreatur/NSC | wie Charakter + Traits |
| Event | Trigger, Effekt auf Ort/Charakter |

Kampf-Resolver-Priorität:

1. Initiative / Überraschung  
2. Aktion wählen (gebunden? Fernkampf? Bewegung?)  
3. Vergleichender Wurf / Treffer  
4. Vorteile ±  
5. Schaden → LP → Kritisch?  
6. Zustände anwenden (Vorteile fallen auf 0)  
7. Psychologie / Schicksal-Override  

Asynchron: Spieler setzen Intention in ihrem Tick; SL oder Engine löst, wenn alle relevanten Züge da sind oder Timeout.

---

## 6. Nächste Grok-Aufgaben (Priorität)

### P0 – Engine-fähig machen
1. `10-system/02-datenmodell.md` zu einem konkreten Schema ausbauen (Felder, Enums für Zustände, Vorteile-Regeln als Pseudocode).
2. Aktionskatalog v1: 20–30 Aktionen (Angreifen, Ausweichen, Lösen, Flucht, Heilen, Schleichen, Reden, Bestechen, Wahrnehmung, Rast …) mit Voraussetzungen aus den MD-Dateien.
3. Eine Mini-Simulation (Text): 2 SC + 1 NSC in einer Taverne, 3 Ticks, Schwachstellen notieren.

### P1 – Content nachziehen
4. Magie-Regeln (Zauberwurf, Kanalisieren) – ohne alle Spruchlisten.
5. 1–2 vollständige Karriere-Profile als Datenvorlage (z. B. Soldat + Gelehrter).
6. Fähigkeiten-Einträge, die der Aktionskatalog braucht, ungekürzt nachziehen.

### P2 – Setting / SL-Tools
7. Reisen + Zwischen den Abenteuern  
8. Bestiarium-Traits  
9. Religion nur soweit für Priester-Aktionen nötig  

### Nicht tun
- Keine neue Ordnerhierarchie
- Keine App-native Spezifikation (Website bleibt Ziel)
- Keine Grafikpipeline, bevor das Datenmodell steht

---

## 7. Prompt-Vorlage für die nächste Session

```
Lies zuerst:
- /home/workdir/artifacts/wfrp-md/00-UEBERGABE.md
- /home/workdir/artifacts/wfrp-md/00-INDEX.md
- /home/workdir/.grok/skills/pdf-to-interlinked-md/SKILL.md

Setze bei P0 fort: Datenmodell konkretisieren + Aktionskatalog v1.
Regelquelle ist WFRP 4e GRW 2. Auflage. PDF-ID falls vorhanden: QdpW4.
Nach jedem Block ZIP unter /home/workdir/artifacts/ ablegen.
```

---

## 8. Qualitätssicherung

```bash
bash /home/workdir/.grok/skills/pdf-to-interlinked-md/scripts/validate-extraction.sh
```

Prüfen: keine leeren Dateien, INDEX existiert, relative Links nicht tot.

---

## 9. Offene Entscheidungen (User)

- Tick-Modell: festes Zeitfenster vs. „wenn alle gezogen haben“
- Vorteile-Obergrenze: Buch-Option (Initiative-Bonus / fest 10) – noch nicht festgelegt
- Krankheiten im Live-Spiel: an / optional / aus
- Magie-Komplexität in v1: nur Niedere Magie oder volle Lehren

---

*Übergabe erstellt für Grok-Building. Bei Fortsetzung dieses Dokument oben um „Stand / letzte Änderung“ ergänzen.*


## 10. Letzte Änderung
- 2026-09-06: Simulation 1 Charakter / Basar + Rauferei unter . 10 Schwachstellen dokumentiert.
