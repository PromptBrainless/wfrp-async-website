# Das Spiel – verbindliche Beschreibung

**Weg · Abend 2/6** · [Wege](../00-WEGE.md) · [← Kampagne 1](16-kampagne-1.md) · [Leben →](10-leben-chat.md)

Stand: 2026-09-08 
Quellen: GRW 2. Auflage S. 6–7, 33–36, 149–191, 192–201, 259–262; Projektvision Push/Countdown; Aktionskatalog v1.

Das ist die Beschreibung **des Spiels**, nicht der späteren Infrastruktur. KI, Kartenmodul, Chat und App hängen später daran. Sie ändern den Loop nicht. Möbel des Tisches: [09-spielumgebung-vtt.md](09-spielumgebung-vtt.md).

Kampagne 1: [16-kampagne-1.md](16-kampagne-1.md). Ort: [Drosselau](../07-reikland/drosselau/README.md). Medium: [Leben](10-leben-chat.md). Wege: [00-WEGE.md](../00-WEGE.md). Die alte Basar-Simulation ist Archiv, nicht der Tisch.

---

## 1. Was gespielt wird

Warhammer Fantasy Roleplay 4. Edition, Grundregelwerk 2. überarbeitete Auflage.

Eine Gruppe spielt in der Alten Welt. Jeder Spieler steuert einen Spielercharakter (SC). Ein Mensch ist Spielleiter (SL). Der SL ist die Welt, die Regeln, die Geschichte und der Anführer am Tisch (S. 259).

Das Medium ist nicht der gemeinsame Abend am Tisch, sondern eine **asynchrone Szene mit Countdown**. Spieler müssen nicht gleichzeitig online sein. Kampagne 1: **fünf** SC. Der SL ist keine sechste Figur.

Das Regelwerk bleibt die Autorität. Die Website übersetzt den Tisch-Loop, sie ersetzt ihn nicht.

Nicht das Ziel: Buchkopie, Live-Video-Kampf, reiner Chat, SL-lose Automatik.

---

## 2. Rollen

### Spieler

Steuert genau einen SC. Sagt, was der Charakter **unternehmen will**. Sieht nur, was der Charakter wahrnehmen kann. Würfelt nicht über das Ergebnis hinweg. Verwaltet Inventar, Ressourcen und Karriere am Bogen.

### Spielleiter

Der SL ist **Leitung**, keine Figur am Tisch. Er sitzt nicht als Kaufmann Holtz und nicht als Torwache Helm.

- Beschreibt Ort, Sinne, Auslöser (als Welt). 
- Leiht NSCs Stimme und Würfel: Wilhelm Holtz spricht, Arne Helm wirft — der Stempel auf dem Beat ist der NSC, der Mensch dahinter bleibt SL. 
- Entscheidet, ob eine Handlung automatisch gelingt, scheitert oder einen Wurf braucht (S. 259). 
- Wählt Fähigkeit, Schwierigkeit, Wer vergleicht mit wem. 
- Deutet das Würfelergebnis in die Welt. Die Deutung darf Holtz' Mund sein; sie macht den SL nicht zum Gildemeister. 
- Wirft vorbereitete Abenteuer-Ereignisse ein (S. 262). Sie feuern nicht von selbst. 
- Sorgt dafür, dass jeder SC in der Szene vorkommt. 
- Darf Regeln situativ straffen, wenn etwas zu lange dauert – das Buch erlaubt das.

Der Spielercharakter ist der Sitz des Spielers. Der SL nimmt ihn nicht ein. Ein NSC-Bogen und ein NSC-Wurf sind **Werkzeuge der Leitung**, kein zweiter Spielerplatz.

### Engine (System)

Kein dritter Erzähler. Werkzeug des SL.

- Hält Zustand: Charakter, Ort, Flags, Frist. 
- Filtert den Aktionskatalog nach Ort und Zustand. 
- Schlägt Resolver vor (Fähigkeit, Vergleich, Schaden). 
- Schreibt das Szenenprotokoll und die Würfelplatte, sobald jemand geworfen hat. 
- Öffnet das Glück-Fenster nach einem eigenen Wurf des SC.

Die Engine erfindet keine Regeln, keine Plotwendungen, keine NSC-Stimme und keine zufälligen Ereignisse im Leben. Vergleichende Würfe sind zwei Würfe zweier Menschen, nicht ein Wurf der beide Seiten erledigt.

### KI (später, optional)

Darf Dialogvorschläge, Gerüchte, Zusammenfassungen liefern. 
Darf keinen Wurf entscheiden, keinen Zustand setzen, keine Karriere ändern. 
Der SL gibt frei oder verwirft.

---

## 3. Der Charakter

Quelle: S. 24–45, 33–36.

Ein SC ist fest an Volk, Klasse, Karriere und Stufe gebunden.

### Zehn Werte

KG, BF, ST, WI, I, GW, GS, IN, WK, CH. 
Die Zehnerstelle ist der Bonus (STB, WÜB, IB …).

### Abgeleitet

Bewegung, Lebenspunkte, Schicksal → Glück, Zähigkeit → Mut, Status (Messing/Silber/Gold + Stufe).

### Listen am Bogen

Fähigkeiten (Grund oder ausgebaut, ggf. Spezialisierung), Talente, Zustände[], Vorteile, Ausrüstung, Flags (Schulden, gesehen worden, …), Motivation.

NSCs und Kreaturen nutzen dasselbe Gerüst plus Traits.

Ohne diesen Bogen gibt es keine legale Aktion.

---

## 4. Die Szene

Eine Szene ist die digitale Form von „wo stehen die SC und was geschieht um sie herum“ (S. 261).

Pflichtfelder:

| Feld | Inhalt |
|------|--------|
| Ort | id, kurze Beschreibung, Ausgänge, Flags des Ortes |
| Anwesend | SC, NSC, Zuschauer |
| Modus | sozial / Reise / Kampf / Downtime |
| Auslöser | Satz, der zur Handlung einlädt |
| Countdown | Frist, bis Intentionen da sein müssen |
| Katalog-Filter | welche Aktions-IDs grundsätzlich zu diesem Ort gehören |
| Protokoll | was bereits passiert ist |
| Offene Events | Flags, die der SL vorbereitet hat |

Die Szene ersetzt die mündliche Szenerie nicht vollständig. Der SL-Text bleibt der erste Absatz, den der Spieler liest. Danach kommen Karten.

Mehrere Kampagnen können parallel laufen. Jede Kampagne hat eigene Szenen und Weltflags. Eine Person kann SL in der einen und Spieler in der anderen sein.

---

## 5. Der Loop (Tisch und Countdown)

Buch S. 6–7 und S. 261–262, um den Countdown ergänzt:

```
SL eröffnet die Szene (Ort, Sinne, ein NSC der etwas will)
 ↓
Countdown startet, Push geht an die betroffenen Spieler
 ↓
Jeder SC wählt eine Intention (Katalog, selten Freitext-Bitte)
 ↓
Frist endet oder alle relevanten Züge sind da
 ↓
SL entscheidet: gelten / scheitern / Wurf — und als wer
 ↓
Wer dran ist, wirft selbst (SC oder NSC in SL-Hand)
 ↓
Die Rechnung steht im Protokoll. Die Welt antwortet als NSC.
 ↓
Glück-Fenster, falls ein eigener SC-Wurf offen ist
 ↓
SL öffnet die nächste Frist oder die nächste Szene
```

Das ist dieselbe vierstufige SL-Arbeit wie am Tisch. Der Countdown ersetzt nur die Anwesenheit. Zeitstruktur: [15-async-sitzung.md](15-async-sitzung.md).

### Tick-Modell

v1: **alle da, sonst spätestens Frist.** Sobald die letzte Intention da ist, darf der SL auflösen. Die Uhr ist Erinnerung und Riegel. Fehlende Spieler: `warten`. Der SL spielt den NSC, nicht den SC.

### Mehrere Spieler in einer Szene

Der SL bleibt Anführer: wer ist dran, wer wartet, wer unterstützt (S. 155). 
Parallele Intentionen in derselben Frist sind der Normalfall außerhalb des Kampfes. 
Im Kampf gilt Initiative, nicht „wer zuerst abgeschickt hat“.

---

## 6. Intention

Spieler steuern Absicht, nicht Ausgang.

### Katalog

Normale Eingabe. Jede Karte hat:

- id und Label 
- Kosten: **F** frei / **B** Bewegung / **H** Handlung 
- benötigte Fähigkeit oder Ressource 
- Resolver-Typ 
- Voraussetzungen (Ort, Bindung, Bewusstsein, Gegenstand, Status)

Die sichtbare Liste ist nach Ort und Zustand **gefiltert**. Karten, die der Charakter kennt, aber jetzt nicht nutzen kann, bleiben stehen und sind **ausgegraut**, nicht gelöscht. Grund steht auf der Karte (*gebunden*, *Betäubt*, kein Feind, Fenster zu).

Das folgt der Simulation: in der Gasse waren 18+ Zeilen zu lang für ein Handy. Darstellung in Reitern: Sozial, Bewegung, Kampf, Ressourcen.

### Freitext

Keine alleinige Steuerung. 
Freitext ist eine **Bitte an den SL**. Der SL hängt sie an eine Fähigkeit und Schwierigkeit oder lehnt ab („das geht hier nicht / das ist `feilschen`“). 
So bleibt das Buch (Spieler sagen, was sie tun) erhalten, ohne dass zehn asynchrone Romane die Auflösung sprengen.

### Mini-Aktionen nach dem Wurf

Direkt nach einem **eigenen** Wurf öffnet sich ein Fenster:

- `glueck` – Wurf wiederholen oder +1 EG (S. 171) 
- ggf. `zaehigkeit` – Ergebnis wählen, wenn die Gruppe das in diesem Moment zulässt 

Ohne eigene Antwort in diesem Fenster gilt: nicht ausgegeben. Das Fenster schließt. 
Fremde Würfe: Glück darauf in v1 nicht implementiert.

`mut`, `schicksal`, `zaehigkeit` können auch als Karte in der normalen Liste stehen, sobald ein Zustand, Tod oder Psychologie das rechtfertigt. Sonst grau.

---

## 7. Auflösung

Quelle: S. 149–155, SL S. 259–260.

Reihenfolge für jede Intention:

1. Ist die Karte legal? Sonst grau / SL-Nein. 
2. SL: automatisch, Wurf, oder Vergleich. 
3. Schwierigkeit als Modifikator (z. B. durchschnittlich +20). 
4. Unterstützung anderer SC, wenn in derselben Frist erklärt. 
5. W100 gegen den Fähigkeitswert. 00 = 100. 
6. Erfolgsgrade. Bei Vergleich gewinnt, wer die besseren EG hat – auch wenn beide „gescheitert“ sind (Kampf, S. 260). 
7. Engine trägt Zahlen ein. SL schreibt den Satz in die Welt. 
8. Zustände, LP, Geld, Flags, Vorteile aktualisieren. 
9. Glück-Fenster, wenn Schritt 5 ein eigener Wurf war.

Kein Widerstand im Kampf, obwohl angegriffen wird: der Verteidiger gilt als *Hilflos* (S. 162 / SL-Notiz S. 260).

---

## 8. Soziales Spiel und Erkundung

Das ist der häufigste Modus.

Beispiele aus Katalog v1: `umschauen`, `intuiton`, `reden`, `feilschen`, `bestechen`, `einschuechtern`, `klatsch`, `schleichen`, `gehen`, `warten`.

Vorteile bauen sich hier nicht wie im Kampf auf, sofern nicht ein Talent oder eine SL-Regel das ausdrücklich sagt. 
Status (Messing/Silber/Gold) färbt Schwierigkeit und Konsequenz, nicht die Existenz der Karte.

Events hängen an Flags. Beispiel aus der Simulation: sozialer Misserfolg am Stand → Taschendieb. `gehen` in die Gasse → vorbereiteter Raufbold. Das ist Schritt 4 des SL-Abends (S. 262), nicht Zufallsgenerator.

---

## 9. Kampf

Quelle: S. 156 ff.

Kampf ist eine Szene im Modus Kampf, kein anderes Spiel.

Ablauf einer Kampfrunde:

1. Initiative (Wert I), Überraschung prüfen. 
2. Zug in Reihenfolge. Im Zug: Bewegung und/oder Handlung, soweit der Zustand es erlaubt. 
3. Sturmangriff = Bewegung + Handlung, +1 Vorteil, Bindung. 
4. Angriff: vergleichender Wurf, Fähigkeit laut Waffe (meist Nahkampf/KG oder Fernkampf/BF). 
5. Vorteile: +10 je Vorteil auf passende Kampf- und Psychologie-Würfe. 
6. Schaden → LP → bei 0 LP kritische Verletzung / Bewusstlosigkeit nach Buch. 
7. Zustände anwenden. Jeder neue Zustand löscht alle Vorteile. 
8. Verlieren eines vergleichenden Kampfwurfs, LP-Verlust oder Kampfende: alle Vorteile weg. 
9. Lösen aus der Bindung: Wurf oder Vorteilsvorsprung ausgeben.

Obergrenze der Vorteile: Buch-Option (IB oder feste Zahl). Noch nicht festgelegt.

Fernkampf, zwei Waffen, Reiten, Ringen, Magie im Kampf: nicht in Katalog v1, außer der SL hängt eine Freitext-Bitte daran.

Wache, Flucht, Zuschauer sind Events in derselben Kampfszene, keine zweite App.

---

## 10. Zustände

Quelle: S. 167–170.

Zwölf Stück: Betäubt, Bewusstlos, Blutend, Brennend, Demoralisiert, Erschöpft, Ertaubt, Geblendet, Gefesselt, Niedergestreckt, Überrascht, Vergiftet.

Wirkung auf das Spiel:

- Jeder Zustand → Vorteile auf 0. 
- Gleicher Zustand stapelt, Effekte kumulativ. 
- Verschiedene gleichzeitig: der schwerwiegendere Effekt. 
- Katalog filtert hart: *Niedergestreckt* nur aufstehen/kriechen, *Betäubt* keine Handlung, *Bewusstlos* keine Spieleraktion. 
- Mut kann einen Zustand entfernen. Bei *Niedergestreckt* zusätzlich +1 LP.

Krankheiten (S. 186 ff.) sind ein eigenes Modul. In v1 an oder aus – noch offen. Aus = Engine ignoriert Infektionstabellen, *Vergiftet* als Kampfzustand bleibt.

---

## 11. Schicksal, Glück, Zähigkeit, Mut

Quelle: S. 171–172, SL-Rat S. 260.

| Ressource | Herkunft | Ausgabe | Regeneration |
|-----------|----------|---------|--------------|
| Glück | aus Schicksal | Wurf wiederholen, +1 EG, Zugreihenfolge | zu Spielbeginn = aktuelles Schicksal |
| Schicksal | selten | nicht sterben / Szene überleben | fast nie, Heldentat |
| Mut | aus Zähigkeit | 1 Zustand weg, Psych-Immun, Krit-Mods ignorieren | zu Spielbeginn = aktuelle Zähigkeit |
| Zähigkeit | selten | keine Mutation; Wurf selbst wählen | fast nie |

Der SL soll Glück aktiv anbieten. Deshalb ist das Fenster nach dem eigenen Wurf Pflicht, nicht optional versteckt.

Asynchron: „Spielbeginn“ = Start der Sitzung oder der Kampagnen-Spielfigur-Woche, vom SL gesetzt. Nicht jede einzelne Szene.

---

## 12. Schaden, Heilung, Korrumpierung, Psychologie

Kurz, weil der Resolver sie braucht:

- LP fallen durch Waffen, Feuer, Blutverlust, Sturz. 
- 0 LP ist nicht automatisch tot. Schicksal und das Verletzungskapitel (S. 172–181) entscheiden. 
- Heilung über Rast, *Heilen*-Fähigkeit, Magie/Gebet – nur wenn die Fähigkeit oder der NSC da ist. 
- Korrumpierungspunkte durch Chaos, Warpstein, dunkle Magie. Folgen und Abbau nach S. 182–183. Zähigkeit kann Mutation verhindern. 
- Psychologie-Würfe (Furcht, Entsetzen, Anziehung) gegen WK / Besonnenheit. Mut kann immunisieren.

v1 muss LP, einfache Heilung und die zwölf Zustände können. Korrumpierung und volle Psych-Tabellen dürfen als SL-Override starten.

---

## 13. Zwischen den Szenen

Quelle: S. 192–201.

Wenn keine Szene offen ist, laufen **Unternehmungen**: Geld durchbringen, Pflichten, Arbeiten, Reisen, Training, Forschung, Handwerk.

Das ist derselbe Loop mit längerem Countdown (Tage statt Minuten). Katalog wechselt auf Klassen- und allgemeine Unternehmungen. 
Reisen (S. 262 ff.) ist eine Szene oder eine Unternehmung, je nachdem ob der SL Begegnung will.

---

## 14. Was der Spieler auf dem Schirm sieht

1. Wo bin ich, wer steht da, was ist der Auslöser (SL-Text). 
2. Mein Bogen: LP, Zustände, Vorteile, Geld, gezogene Waffe, Frist. 
3. Karten in Reitern, Kosten F/B/H, graue mit Grund. 
4. Nach Absenden: Wartezustand, bis die Frist oder der SL auflöst. 
5. Protokoll der Auflösung in der Sprache der Welt, darunter die Zahlen. 
6. Falls eigener Wurf: Glück ja/nein. 
7. Neue Karten oder Szenenwechsel.

Kein Würfel ohne Kontext. Keine leere Chatzeile als einzige Handlung.

---

## 15. Was der SL auf dem Schirm sieht

- Dieselbe Szene plus versteckte Flags und NSC-Werte. 
- Welche Spieler noch nicht gezogen haben. 
- Resolver-Vorschlag zum Bestätigen. 
- Knopf: ohne Wurf entscheiden. 
- Event einwerfen (vorbereitet oder neu). 
- Freitext-Bitte annehmen und auf eine Fähigkeit mappen. 
- Nächste Szene öffnen, Countdown setzen.

Der SL darf die Engine ignorieren. Das Buch verlangt Fairness und Konsistenz, nicht Automatik.

---

## 16. Umfang v1 gegen später

**v1 spielt das Spiel, wenn gilt:**

- Ein bis zehn SC, ein SL. 
- Sozialszene und einfache Rauferei. 
- Katalog v1 + Glück-Fenster + graue Karten. 
- Zustände, LP, Vorteile, Schicksal/Mut. 
- Persistente Flags und Inventar. 
- Countdown mit Push-Platzhalter (auch nur „Frist im Protokoll“).

**Nicht v1:**

- Volle Magie und Religion (Modul, Entscheidung offen: keine oder nur Niedere Magie). 
- Volles Bestiarium, Karten/Nebel, Gruppenchat. 
- KI-NSCs, Erzähler-KI, lokale LLMs. 
- Mobile-App, Docker-Stack, mehrere Welten, Modding.

Diese Dinge erweitern dieselbe Beschreibung. Sie schreiben sie nicht um.

---

## 17. Offene Entscheidungen, die das Spielform ändern

- Tick: fest / alle gezogen / Mischung. 
- Vorteile-Obergrenze. 
- Krankheiten an, optional oder aus. 
- Magie: keine oder nur Niedere Magie.

Bis das steht, bleibt der beschriebene Loop gültig; nur die betroffenen Karten fehlen oder sind grau.

---

## 18. Satz zum Mitnehmen

Du bist dein Charakter an einem konkreten Ort. Die Welt sagt, was du siehst. Du wählst, was du versuchst. Die Frist läuft. Regeln und SL sagen, was daraus wird. Manchmal wirft die Geschichte etwas Eigenes dazwischen. Dann stehst du woanders, oder derselbe Ort sieht anders aus.

Das ist WFRP am Tisch. Das Countdown-System ist nur der Weg, das zu tun, ohne dass alle gleichzeitig am selben Tisch sitzen.

---

### Siehe auch

- [Wege · Abend](../00-WEGE.md)
- [Kampagne 1](16-kampagne-1.md)
- [Leben](10-leben-chat.md)
- [Drosselau](../07-reikland/drosselau/README.md)
- [Grundprinzip des Spiels](../01-einfuehrung/01-grundprinzip-des-spiels.md)
- [Kernrollen des SL](../06-spielleiter/01-kernrollen-des-SL.md)
- [Würfel und Grundmechanik](../05-regeln/01-wuerfel-und-grundmechanik.md)
- [Datenmodell](02-datenmodell.md)
- [Aktionskatalog v1](04-aktionskatalog-v1.md)
