# Simulation: Basar und Rauferei (Archiv)

**Nicht Kampagne 1.** Walkthrough einer alten Probe. Der Tisch ist Drosselau, Szene zu.

**Lesen mit:** [05-simulation-vs-buch.md](05-simulation-vs-buch.md). 
Die Würfelzahlen hier sind Walkthrough. Die Engine rechnet EG nach Buch S. 152.

Format an jeder Stelle:

1. **SL** beschreibt Welt, NSC, Regeln, die jetzt gelten
2. **Charakter** steht in der Szene (Zustand)
3. **Alle implementierten Möglichkeiten** (Katalog v1, gefiltert nach Ort + Zustand)
4. **Gewählte Aktion + Auflösung**

Katalog: [04-aktionskatalog-v1.md](04-aktionskatalog-v1.md)


---

# 0. Vor der Szene – nur Spielleiter

## SL-Rollen, die hier aktiv sind

- **Welt:** Basar Altquartier, danach Gasse. Gerüche, Lärm, Preise, zwei NSC.
- **Regeln:** Sozialwürfe ohne Vorteile-Reset. Kampf erst in Szene 2. Glück/Mut/Schicksal immer anbietbar, sobald ein Wurf oder Zustand da ist.
- **Geschichte:** der Spielercharakter braucht Tuchballen unter 6 Schillingen. Flag vorbereitet: Taschendieb nach dem ersten sozialen Misserfolg. Zweite vorbereitete Szene: ein Schläger wartet in der Gasse, wenn der Spielercharakter mit Ballen `gehen` wählt.
- **Anführer:** Nur 1 SC – niemand muss an der Reihe vorbeigeschoben werden.

## Vorbereitete NSC

**ein Händler Tuchhändler** – Silber 1, Feilschen 50, Charme 38, Besonnenheit 36, Wahrnehmung 33. Will 6 S. Haltung start: neutral.

**ein Schläger Raufbold** – Messing 2, KG 38, Ausweichen 33, ST 35 (SB 3), WI 32 (WÜB 3), I 30, LP 11, waffenlos. Haltung: will den Ballen.

**Dieb (nur Event)** – Fingerfertigkeit 45. Kein voller NSC-Bogen.

## SL-Prinzip für diese Session

1. Szenerie beschreiben
2. Spieleraktion aus der **gefilterten Liste** (nichts Freitext, das nicht im Katalog steht)
3. Konsequenz + ggf. Wurf
4. Event einwerfen, wenn Flag greift

---

# Charakter in die Welt setzen

**der Spielercharakter**, Menschin, Bürgerin, Krämerin Stufe 1, Status Silber 1.
Motivation: Schulden des Vaters.

KG 31 · BF 33 · ST 32 · WI 34 · I 36 · GW 31 · GS 38 · IN 41 · WK 35 · CH 42
Bewegung 4 · LP 12/12 · Schicksal 3 · Glück 3 · Zähigkeit 3 · Mut 3 · Vorteile 0
Zustände: keine

Fähigkeiten genutzt: Feilschen 47, Charme 45, Wahrnehmung 41, Intuition 39, Ausweichen 31, Nahkampf 31, Ausdauer 34, Besonnenheit 35.
Kein *Heilen*, kein Fernkampf-Gegenstand.

Inventar: Dolch (nicht gezogen), 8 S + 14 Groschen, Tasche.
Flags: `schuldet_haken_2S`
Ort: **Basar-Altquartier**, vor Ottos Stand.

---

# SZENE 1 – Basar

## SL – Szenerie

Vormittag. Der Altquartier-Basar dampft nach Kohl, nassem Tuch und Fisch. ein Händler steht hinter aufgestapelten Ballen, der Daumen schon am Preis. Eine Stadtwache lehnt am Pfeiler, gähnt. Zwischen den Gängen schieben sich Leute. ein Händler verlangt **6 Schillinge** für den Ballen, den der Spielercharakter braucht.

Auslöser: ein Händler sieht die Tasche des Spielercharakters und sagt: „Sechs Schillinge, und ich bin schon gnädig.“

## Charakter in der Szene

der Spielercharakter steht frontal am Stand, nicht im Kampf, ungebunden, bei Bewusstsein, Dolch verstaut. Geld reicht für 6 S, Ziel ist weniger.

## Entscheidung 1 – alle implementierten Möglichkeiten

Gefiltert aus Katalog v1 (Kampfaktionen aus, weil kein Feind):

1. `umschauen` – Handlung – Wahrnehmung
2. `intuiton` – Handlung – Intuition (ein Händler lesen)
3. `reden` – Handlung – Charme
4. `feilschen` – Handlung – Feilschen vs. ein Händler 50
5. `bestechen` – Handlung – Bestechen (Geld einsetzen)
6. `einschuechtern` – Handlung – Einschüchtern (Status-Risiko, Wache sieht zu)
7. `klatsch` – Handlung – Gerüchte über ein Händler / Preise
8. `schleichen` – unsinnig bei offenem Stand, aber implementiert → erlaubt, SL setzt sehr schwer
9. `gehen` – Gasse oder anderer Stand
10. `warten` – ein Händler oder die Menge beobachten
11. `waffe_ziehen` – technisch frei, eskaliert die Szene
12. Ressourcen jetzt **grau**: `glueck` / `mut` / `schicksal` / `zaehigkeit` – kein Wurf und kein Zustand offen

Nicht angeboten: Sturmangriff, Angreifen, Lösen, Fliehen, Sprinten, Volle Abwehr, Aufstehen, Heilen.

### Gewählt: `umschauen`

**SL – Regeln:** Wahrnehmung +0. Wurf gegen 41. Ergebnis 27 → Erfolg, +1 EG.

**SL – Konsequenz:** ein Händler schwitzt, Blick zu einem zweiten Preiszettel unter der Theke. Die Ware ist weniger wert als 6 S. Flag `otto_nervoes`.

---

## Entscheidung 2

Zustand unverändert: LP 12, Vorteile 0, Ort Basar, Flag `otto_nervoes`.

1. `umschauen`
2. `intuiton`
3. `reden`
4. `feilschen`
5. `bestechen`
6. `einschuechtern`
7. `klatsch`
8. `schleichen`
9. `gehen`
10. `warten`
11. `waffe_ziehen`
12. Ressourcen grau

### Gewählt: `reden` (Charme)

**SL:** Einfacher Charme-Wurf +0. 45, Wurf 62 → Misserfolg, −1 EG.

**SL – Konsequenz:** ein Händler wird kurz angebunden.
**SL – Event:** Taschendieb. Fingerfertigkeit 45 vs. Wahrnehmung 41. Dieb +1 EG. **4 Groschen weg.** Flag `bestohlen`.
Nach dem Charme-Wurf wäre `glueck` erlaubt gewesen. Nicht gewählt. Fenster schließt.

---

## Entscheidung 3

1. `umschauen`
2. `intuiton`
3. `reden`
4. `feilschen`
5. `bestechen`
6. `einschuechtern`
7. `klatsch`
8. `schleichen`
9. `gehen`
10. `warten`
11. `waffe_ziehen`
12. `glueck` nicht mehr (Fenster zu)
13. `mut` / `schicksal` / `zaehigkeit` grau

### Gewählt: `feilschen` Zielpreis 4 S

**SL:** Vergleich 47 vs. 50. der Spielercharakter 33 (+1 EG), ein Händler 71 (−2 EG). der Spielercharakter gewinnt.
Formel v1: Nachlass, nicht unter halbem Preis. 6 S → **5 S**.
Geld: 3 S + 10 Groschen. Flag `ballen_gekauft`.

---

## Entscheidung 4

1. `umschauen`
2. `intuiton`
3. `reden`
4. `feilschen` (weiter drücken, jetzt erschwert)
5. `bestechen`
6. `einschuechtern`
7. `klatsch`
8. `schleichen`
9. `gehen` → Gasse oder Hauptstraße
10. `warten`
11. `waffe_ziehen`
12. Ressourcen grau

### Gewählt: `gehen` → Gasse hinter dem Basar

**SL – Ereignis:** ein Schläger steht dort. Szenenwechsel.

---

# SZENE 2 – Rauferei

## SL – Szenerie

Gasse, acht Schritt, nass, Kellerabgang, Ausgang nur zurück zum Basar. ein Schläger an der Wand, offene Hände, sieht den Ballen.

Auslöser: „Den Ballen. Her damit. Dann musst du nicht liegenbleiben.“

Distanz 4 m. Nicht gebunden. Keine Überraschung.

## Charakter in der Szene

der Spielercharakter, Ballen unter dem Arm, Dolch verstaut, LP 12, Vorteile 0, Glück 3, Mut 3, Schicksal 3.
Zustände: keine. Flags: `ballen_gekauft`, `bestohlen`, `otto_nervoes`.

## Entscheidung 5 – alle implementierten Möglichkeiten

Kampf und Sozial, weil ein Schläger noch redet.

1. `umschauen`
2. `intuiton`
3. `reden`
4. `feilschen` (SL sehr schwer – ein Schläger kauft nicht)
5. `bestechen`
6. `einschuechtern`
7. `klatsch` (SL −20)
8. `schleichen` (Blickkontakt, sehr schwer)
9. `gehen` zurück zum Basar
10. `warten`
11. `waffe_ziehen`
12. `sturmangriff` (Rennen-Reichweite 16 m reicht)
13. `angreifen` nur nach Annähern / Bindung
14. `sprinten`
15. `fliehen` (noch ungebunden)
16. `loesen` ausgegraut (nicht gebunden)
17. `volle_abwehr`
18. `ausweichen` nur als Verteidigung, keine eigene Handlung
19. Ressourcen grau

### Gewählt: `waffe_ziehen` + `sturmangriff`

**SL:** Ziehen frei. Sturmangriff Bewegung+Handlung. Initiative der Spielercharakter 36 vor ein Schläger 30.
+1 Vorteil, gebunden. Vergleich 31 vs. 38. der Spielercharakter Erfolg +1 EG, ein Schläger Misserfolg. Vorteile 2.
Schaden 3+2+1=6 − 3 = 3 LP. ein Schläger 8/11.
ein Schläger `angreifen` waffenlos, +2 EG, 5 − 3 = 2 LP. der Spielercharakter **10/12**. ein Schläger Vorteile 1.

---

## Entscheidung 6

der Spielercharakter LP 10, Vorteile 2, gebunden, Dolch in der Hand.

1. `umschauen`
2. `intuiton`
3. `reden`
4. `feilschen` / `bestechen` / `klatsch`
5. `einschuechtern`
6. `schleichen` ausgegraut (gebunden)
7. `gehen` ausgegraut (gebunden)
8. `warten`
9. `waffe_ziehen` ausgegraut (schon gezogen)
10. `sturmangriff` ausgegraut (gebunden)
11. `angreifen`
12. `sprinten` ausgegraut
13. `fliehen` + Freie Attacke +20 für ein Schläger
14. `loesen` (Vorteile 2>1 → ohne Wurf)
15. `volle_abwehr`
16. `ausweichen` als Verteidigung gegen Kurts nächsten Schlag
17. `glueck` Fenster auf den eigenen Sturmangriff zu
18. `mut` kein Zustand
19. `schicksal` nicht sterbend
20. `zaehigkeit` Fenster auf den eigenen Vergleich zu

### Gewählt: `angreifen`

**SL:** +10 je Vorteil → +20. Erfolg +2 EG. Schaden 7 − 3 = 4 LP. ein Schläger **4/11**. der Spielercharakter Vorteile 3.
ein Schläger trifft noch einmal: der Spielercharakter **8/12**.

---

## Entscheidung 7

**SL – Event:** Wache am Gassenmund, 2 Runden Fußweg.

1. `umschauen`
2. `intuiton`
3. `reden` („Die Wache sieht uns.“)
4. `feilschen` / `bestechen`
5. `einschuechtern`
6. `klatsch`
7. `schleichen` ausgegraut
8. `gehen` ausgegraut
9. `warten`
10. `angreifen`
11. `sturmangriff` ausgegraut
12. `sprinten` ausgegraut
13. `fliehen` + Freie Attacke
14. `loesen` (3>1 → frei)
15. `volle_abwehr`
16. `waffe_ziehen` ausgegraut
17. `glueck` nicht auf fremde Würfe (nicht implementiert)
18. `mut` grau
19. `schicksal` grau
20. `zaehigkeit` vor eigenem nächsten Wurf möglich

### Gewählt: `loesen`

**SL:** Vorteilsvorsprung → lösen ohne Wurf. Vorteile 0. Distanz 6 m. Nicht gebunden.
ein Schläger hat kein Psychologie-Trait → bleibt stehen, rückt nicht nach.

---

## Entscheidung 8

Nicht gebunden, Wache naht, Distanz 6 m, Dolch offen.

1. `umschauen`
2. `intuiton`
3. `reden` (ein Schläger oder Wache)
4. `feilschen`
5. `bestechen`
6. `einschuechtern`
7. `klatsch`
8. `schleichen`
9. `gehen` zum Basar
10. `warten`
11. `waffe_ziehen` ausgegraut
12. `sturmangriff`
13. `angreifen` erst nach Annähern
14. `sprinten`
15. `fliehen`
16. `loesen` ausgegraut
17. `volle_abwehr`
18. Ressourcen weitgehend grau; `zaehigkeit` vor nächstem Wurf

### Gewählt: `gehen` zum Basar

**SL:** ein Schläger bleibt. Wache sieht gezogenen Dolch → Flag `wache_hat_gesehen`. Kein Verhaftungswurf in v1. Szene Ende.

---

# Endzustand

Ort Basar. LP 8/12. Vorteile 0. Keine Zustände. Glück 3 (Fenster jeweils verpasst).
Ballen, Dolch gezogen, 3 S + 10 Groschen.
Flags: otto_nervoes, bestohlen, ballen_gekauft, wache_hat_gesehen, rauferei_ueberlebt.

---

# Was die Listen gezeigt haben

- Basar: ca. 11 Wahlmöglichkeiten, Ressourcen grau. Tragbar.
- Gasse vor Bindung: Sozial + Kampf gemischt, 18+ Zeilen – zu lang für ein Handy. Tabs nötig.
- In Bindung: IDs **ausgrauen**, nicht löschen.
- Glück war nutzlos, weil das Fenster „direkt nach dem Wurf“ keinen eigenen Tick hatte.

**Pflicht v1:** nach jedem eigenen Wurf Prompt `glueck ja/nein`.

---

### Siehe auch
- [Aktionskatalog v1](04-aktionskatalog-v1.md)
- [Kernrollen des SL](../06-spielleiter/01-kernrollen-des-SL.md)
- [Ablauf am Spieltisch](../06-spielleiter/02-ablauf-am-spieltisch.md)
- [Sims-Prinzip](01-sims-prinzip-ableitung.md)
