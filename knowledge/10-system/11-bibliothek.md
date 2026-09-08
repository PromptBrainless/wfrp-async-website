# Bibliothek — NSC, Begegnungen, Beute

Stand: 2026-09-08.
Quellen: GRW 2. Auflage S. 150, 153, 259–262; [00-das-spiel.md](00-das-spiel.md); [10-leben-chat.md](10-leben-chat.md).

Die Engine erfindet keine Regeln und keine Plotwendungen. Tabellen feuern nie von selbst ins Leben. `autoChat: false` ist der Default. Der SL zieht, liest, gibt frei oder verwirft.

Die Frist ist ein asynchrones WFRP 4e (Ulisses, Grundregelwerk 2. überarbeitete Auflage). Das Medium ist der filmische Chat „Leben“, kein Live-VTT. Wer die Möbel des Tisches sucht, liest [09-spielumgebung-vtt.md](09-spielumgebung-vtt.md). Wer den Faden sucht, liest [10-leben-chat.md](10-leben-chat.md). Hier geht es um den Ordner, den der SL vor dem Abend anlegt.

---

## 1. Warum eine Bibliothek statt Listen an der Karte

Am physischen Tisch hat der Spielleiter keinen Zettel, der nur an eine Tischhälfte geklebt ist. Er hat einen Ordner: Personen mit Werten, Orte, vorbereitete Ereignisse. Das Buch verlangt genau das. Der SL ist die Welt, die Regeln, die Geschichte und der Anführer (S. 259). Als Geschichte bereitet er das Abenteuer vor — Ereignisse, Orte, beteiligte Personen — kennt die Werte der wichtigen NSCs und ist mit den Orten vertraut, um improvisieren zu können. Am Abend selbst beschreibt er die Szenerie, hört den Spielern zu, deutet Konsequenzen und wirft zum richtigen Zeitpunkt die vorbereiteten Abenteuer-Ereignisse ein (S. 260–262). Menschen, Orte und Ereignisse sind Vorbereitung, nicht Inventar einer einzelnen Karte.

Die digitale Form dieses Ordners ist die Bibliothek der Kampagne. Eine Szene ist die Bühne: wo die SC stehen und was um sie herum geschieht (S. 261). Die Bühne **zieht** aus den Pools. Sie **besitzt** die Einträge nicht. Wilhelm Holtz ist Gildemeister, ob er im Haus der Kaufmannsgilde steht oder später in der Schreiberstube denselben Ton anschlägt. Würde jede Karte ihren eigenen Holtz tragen, müsste der SL ihn neu erfinden, sobald die SC die Gildengasse verlassen. Wunden, Geld, Haltung, Flags — alles ginge verloren oder würde sich verdoppeln. Das ist kein WFRP-Tisch, das ist ein Videospiel-Spawn.

Drei Dinge gehören deshalb der Kampagne, nicht der Szene:

- **NSCs.** Identität, Bogen, Haltung. Die Szene merkt nur, wer gerade anwesend ist und auf welchem Platz das Token liegt.
- **Begegnungstabellen.** Gewichte, Zeilen, der Hinweis, an welchen Plätzen der SL sie *erwägen* mag. Kein Uhrwerk, das von selbst feuert.
- **Beutetabellen.** Was unter Holtz' Ladentisch oder in Karrs Schuppen liegen könnte. Der Wurf ist ein Vorschlag an den SL, kein Zugriff aufs Inventar. Tabellen feuern nie von selbst.

Die Szene behält, was nur die Szene ist: SL-Text, Auslöser, Modus, Katalogfilter, Protokoll, vorbereitete Events, Karte, Vorhang, Countdown. Die Bibliothek bestückt diese Bühne. Sie ersetzt sie nicht.

Das spart Vorbereitung und hält die Welt zusammen. Der SL legt Holtz einmal an, taggt ihn als Kaufmann und Bürger, schreibt sich einen Satz für den eigenen Blick — und kann ihn am Markt, in der Gildengasse, in der Schreiberstube ziehen, ohne den Menschen neu zu bauen. Dieselbe Logik gilt für Helm, für die Clique, für die Wache. Wiederverwendung ist hier keine Optimierung der Engine. Sie ist die Art, wie ein SL einen Menschen erinnert.

Kampagne 1 macht das greifbar. Ort: Drosselau. Fünf SC, persistent, noch leer. Holtz sitzt in der Bibliothek. Helm auch. Die Clique auch. Niemand von ihnen ist *in* der Szene, bis der SL eine Gasse öffnet und die Person zieht. Keiner ist Eigentum einer JPEG-Karte.

---

## 2. Der NSC-Pool — Identität und Platzierung

Ein Eintrag im Pool ist eine Karteikarte, kein Mensch. Der Mensch lebt unter `campaign.characters`. Der Pool sagt dem SL nur: es gibt diesen Jemand, so findest du ihn, so erinnerst du dich an ihn, bevor du ihn auf die Bühne holst.

`NpcPoolEntry` trägt vier Felder. `id` ist der Schlüssel im Pool (`holtz`, `helm`, `clique`). `characterId` zeigt auf denselben Schlüssel in `campaign.characters`. `tags[]` sind Suchworte für den SL, keine Regeln: Holtz trägt `kaufmann`, `gilde`, `markt`; Helm `wache`, `tor`; die Clique `bettler`, `schatten`. Tags filtern die Schublade. Sie spawnen niemanden. `blurb` ist ein Satz **für den SL**. Dieser Satz erscheint nicht von selbst auf der Spieler-Journalkarte. Der Spieler sieht, was der SL freigibt, in der Stimme der Welt, nicht die Regieanweisung.

Der Bogen selbst — Attribute, Fähigkeiten, Talente, LP, Geld, Inventar, Flags, Haltung, Portrait — liegt in `campaign.characters`. NSCs nutzen dasselbe Gerüst wie SC (`kind: "npc"`), plus Haltung. Ohne diesen Bogen gibt es keine legale Aktion und keinen legalen Vergleich. Feilschen gegen Holtz ist ein Wurf gegen Holtz' Feilschen, nicht gegen eine Atmosphäre namens „Händler am Markt“.

Platzierung ist etwas anderes als Identität. Eine Szene **zieht** einen NSC, sie erzeugt ihn nicht. Gezogen heißt konkret dreierlei, und erst zusammen steht der Mensch auf der Bühne:

1. Die `id` steht in `scene.present[]`. Anwesend. Der Tracker, die Initiative, die Katalogfilter, die Frage „wer steht hier“ lesen diese Liste.
2. Ein `MapToken { id, placeId }` liegt auf `scene.board.tokens`. Das Token ist kein zweiter ein Händler. Es sagt nur, auf welchem Nadelplatz der Mensch gerade steht. Am Basar liegt ein Händler auf `stall`, der Spielercharakter auf `vorstand`. In einer späteren Stube läge derselbe ein Händler auf einem anderen `placeId`. Das Token wandert. Der Bogen bleibt.
3. Eine `JournalCard` mit `kind: "nsc"` und `characterId` hängt am Szenenjournal. Ob `shared` wahr ist, entscheidet der SL. Freigegeben sieht der Spieler den Menschen als Blatt. Nicht freigegeben bleibt er hinter dem Vorhang, auch wenn das Token schon auf der Karte steht.

Was *nicht* geschieht: Die Engine kopiert den Pool-Eintrag auf die Karte und hält danach zwei Ottos. Die Engine schreibt den Blurb in den Spieler-Chat. Die Engine legt einen neuen Charakter an, bloß weil die Szene wechselt. ein Händler, der am Basar zwei LP verloren oder den Preis auf fünf Schillinge gesenkt hat, ist in der Stube derselbe ein Händler.

Am gezogenen Bestand des Spiels wird der Unterschied sichtbar. Am Basar steht in `present` nur `greta` und `otto`. Die Wache ist im Pool, sie hat einen vollen Bogen (`Stadtwache Brunn`, Wachmann · Rekrut, Wahrnehmung 36, Haltung gelangweilt), und der SL-Text erwähnt sie am Pfeiler. Trotzdem ist sie nicht gezogen. Sie ist Vorbereitung und Atmosphäre, bis der SL sie in `present` schreibt, ihr ein Token auf einen Platz legt und — wenn die Spieler sie als Gegenüber brauchen — eine Journalkarte öffnet. ein Schläger steht umgekehrt nicht am Basar. Er wartet in der Gasse, in deren `present`, Token auf `placeId: "kurt"`, Journalkarte geteilt. Wenn der Spielercharakter später denselben ein Schläger auf dem Basar wiedertrifft, weil der SL das so entscheidet, wird ein Schläger in die Basar-Szene gezogen. Es wird kein zweiter ein Schläger gebaut.

der Spielercharakter selbst ist kein Pool-Eintrag. Sie ist die SC, einmal erschaffen, persistent über Szenen und Sitzungen. Der Pool ist die Schublade der Welt. Der Charakter der Spielerin liegt daneben im selben `campaign.characters`, weil die Kampagne alle Menschen an einem Ort hält. Wechselt der Spielercharakter vom Basar in die Gasse, nimmt sie LP, Geld, Dolch, Flag `schuldet_haken_2S` mit. Die Gasse besitzt der Spielercharakter so wenig, wie der Basar ein Händler besitzt.

---

## 3. Begegnungstabellen — Gewicht, Hinweis, Log zuerst

Eine Begegnungstabelle ist eine SL-Tabelle. Sie ist Farbkasten und Komplikation, nicht der vierte Schritt des Abends. Schritt 4 (S. 262) bleibt: der SL wirft **vorbereitete** Abenteuer-Ereignisse ein, zum richtigen Zeitpunkt, nicht plump. Die vorbereiteten Events der Szene (`scene.events`, „Taschendieb nach dem ersten sozialen Misserfolg“, „Wache naht nach dem zweiten Kampftick“) sind genau das. Die Zufallstabelle steht daneben. Sie hilft dem SL, die Welt zu spielen, wenn er die Menge oder die nasse Gasse befragen will. Sie schreibt die Geschichte nicht.

`EncounterTable` hat eine `id`, ein `label` für den SL, ein `autoChat` (dazu Abschnitt 6), optionale `placeIds[]` und gewichtete `rows`. Eine Zeile trägt `weight`, `id`, `label` und `body`. `rollWeighted` summiert die Gewichte, zieht eine Zufallszahl in diesem Maß und gibt die Zeile zurück, bei der das Restmaß auf null oder darunter fällt. Die Gewichte des Spiels sind so gesetzt, dass sie sich zu 100 addieren; das ist Lesbarkeit, keine Regel. Eine Tabelle mit 3 / 1 / 1 wäre genauso legal.

`placeIds` sind ein **Hinweis**, kein Auslöser. Die Tabelle `basar-menge` nennt `vorstand` und `hauptstrasse`. Das sagt dem SL: wenn jemand vor dem Stand oder an der Hauptstraße steht, mag diese Tabelle passen. Es sagt der Engine nichts. Kein Token-Enter, kein Betreten-der-Szene, kein Countdown zündet die Tabelle. Der SL würfelt, wenn er eine Szene eröffnet, wenn jemand einen Platz betritt und der SL die Menge befragen *will*, oder wann immer er die Schublade öffnet. Nicht-Würfeln ist der Normalfall. Die Welt wartet nicht auf einen Random-Encounter-Takt.

Der Wurf landet **immer zuerst im SL-Log** (`SlLogEntry` mit `kind: "table"`, `tableId`, Titel aus Tabellenname und Zeilenlabel, Body der Zeile). Der Spieler-Chat bleibt stumm. Erst danach entscheidet das Zeichen „direkt ins Leben“ oder die Hand des SL, ob und wie der Satz die Welt betritt. Das ist dieselbe Disziplin wie bei jeder anderen SL-Arbeit: erst die Welt kennen, dann den Satz schreiben. Die Engine hat den Plot nicht erfunden. Sie hat eine vorbereitete Zeile gezogen.

### Ausgearbeitet: der Spielercharakter betritt den Vorstand, der SL befragt die Menge

der Spielercharakter kommt auf den Altquartier-Basar. Das Standbild liegt oben, der erste Welt-Beat beschreibt Dampf, Kohl, nasses Tuch, Fisch. Ihr Token liegt auf `placeId: "vorstand"`. ein Händler steht auf `stall`. Der SL sieht die Tabelle „Menge am Basar“ und die Hinweise `vorstand`, `hauptstrasse`. Er muss nicht würfeln. Heute will er die Menge befragen, bevor ein Händler den Preis setzt.

Er ruft `rollEncounter("basar-menge")` auf. Die drei Zeilen:

| Gewicht | id | Label | Body |
|--------:|----|-------|------|
| 50 | `nichts` | Nichts Besonderes | Dampf, Stimmen, ein Hund unter dem Stand. Niemand greift zu. |
| 30 | `taschendieb` | Eine Hand in der Menge | Etwas zupft am Beutel. Ein Junge ist schon zwischen den Röcken. |
| 20 | `wache-geht` | Die Wache geht vorbei | Die Wache schiebt sich durch, mustert den Ballen, geht weiter. ein Händler wird höflicher. |

`autoChat` ist in der Seed `false`. `campaign.tableMarks` ist leer, also gilt `false`. Das Los fällt auf `taschendieb` — dreißig von hundert Teilen. Im SL-Log steht jetzt eine Zeile der Art `table`: Titel „Menge am Basar: Eine Hand in der Menge“, Body mit dem Jungen zwischen den Röcken, `tableId: "basar-menge"`. Im Leben, das der Spielercharakter liest, ist nichts Neues geschehen. ein Händler verlangt weiter sechs Schillinge. Der Hund ist nicht aufgetaucht, der Junge auch nicht.

Der SL liest. Er hat drei ehrliche Wege, und keinen vierten, in dem die Engine den Plot übernimmt:

- Er **behält** das Ergebnis. Die Hand in der Menge bleibt hinter dem Vorhang, vielleicht für später, vielleicht verworfen, weil ein Händler gerade wichtiger ist. Das Log erinnert ihn.
- Er gibt das Ergebnis **ins Leben** (`publishLastTable` / „ins Leben geben“). Dann erscheint im Spieler-Chat ein Ereignis-Beat mit dem Label und dem Body. der Spielercharakter nimmt wahr, dass etwas am Beutel zupft. Was daraus wird — Wahrnehmung, Vergleich gegen Fingerfertigkeit, Flag `bestohlen`, Ignorieren — entscheidet der SL am Wurf, nach S. 150: ist die Frage nach Erfolg wichtig? Automatisch, Standardwurf, dramatischer Wurf, Vergleich. Die Tabelle hat das nicht vorweggenommen.
- Er **schreibt um**. Das Log hat ihm einen Jungen gegeben. Er setzt einen eigenen Welt-Satz, vielleicht denselben Dieb, den das vorbereitete Event der Szene schon kennt, vielleicht nur ein streifendes Kind ohne Mechanik. Das ist SL-Arbeit, nicht Tabellenarbeit.

Die Gasse hat ihr eigenes Blatt, `gasse-nacht`, Hinweise `eingang` und `keller`, ebenfalls `autoChat: false`. Vierzig Teile Stille (nur Tropfen), fünfunddreißig ein Fenster, das sich öffnet und Gesichter sieht, fünfundzwanzig Stiefel in der Ferne. Derselbe Vertrag: SL würfelt, wenn er will; das Los liegt im Log; die Welt erfährt es, wenn der SL es hergibt. Dass „Wache naht“ sowohl als Tabellenzeile als auch als vorbereitetes Szenen-Event vorkommt, ist Absicht der Vorbereitung, kein Doppelzünder. Das Event wirft der SL nach dem zweiten Kampftick ein, wenn er das so geplant hat. Die Tabelle darf ihn an dieselben Stiefel erinnern, wenn der Spielercharakter am Kellerabgang lauscht und der SL die nasse Gasse befragt. Zwei Werkzeuge, eine Entscheidung.

---

## 4. Beutetabellen — derselbe Vertrag, kein Inventarzauber

Beutetabellen folgen demselben Protokoll wie Begegnungen, mit einem anderen Gegenstand. Eine `LootTable` hat `id`, `label`, `autoChat` und `rows`. Eine `LootRow` trägt `weight`, `id`, `label`, `itemName` und `pennies`. `pennies` sind Messinggroschen, die kleinste Münze des Buchs (12 Groschen = 1 Silberschilling). Die Seed rechnet den Fund in Groschen; 0 heißt: hier liegt kein Geld, nur ein Ding.

Der Wurf landet zuerst im SL-Log, `kind: "table"`. Nur bei „direkt ins Leben“ erscheint er sofort als Beat im Leben — dann mit dem Stempel Fund, nicht als stilles Einsortieren in den Rucksack. `publishLastTable` gibt den letzten Wurf als Ereignis-Beat in den Chat. In keinem dieser Wege legt die Engine einen `Item` in `inventory` oder zählt Groschen auf `money`. Beute ist Wahrnehmung und Angebot. Das Gewähren ist eine spätere Auflösung: der SL entscheidet, oder eine Intention (`umschauen`, Freitext „ich durchsuche die Taschen“, ein gelungener Wurf) trägt den Gegenstand ein. Erst dann existiert er am Bogen, mit Traglast, mit Namen, mit den Groschen in der Börse.

Das ist dieselbe Trennung wie überall im Loop. Spieler steuern Absicht, nicht Ausgang. Die Tabelle steuert nicht den Bogen. Würde das Los „Vier Groschen“ der Beutel des Spielercharakters von selbst füllen, hätte die Engine eine Handlung aufgelöst, ohne dass jemand eine Handlung erklärt hat, und ohne dass der SL nach S. 150 gefragt hat, ob die Frage nach Erfolg überhaupt wichtig ist. ein Schläger könnte die Taschen zugeschnürt haben. der Spielercharakter könnte in Bindung stehen und nicht suchen können. Der Fund könnte vergiftet, markiert, oder Ottos Eigentum sein. All das ist Deutung, nicht Tabellenzeile.

### Ausgearbeitet: Unter Ottos Tuch, in Kurts Taschen

Zwei Tabellen liegen in der Seed, beide `autoChat: false`.

**Unter Ottos Tuch** (`otto-stand`):

| Gewicht | id | Label | Gegenstand | Groschen |
|--------:|----|-------|------------|---------:|
| 55 | `restwolle` | Restwolle | Restwolle | 0 |
| 25 | `nadel` | Packnadel | Packnadel | 0 |
| 20 | `groschen` | Drei Groschen im Saum | Drei Groschen | 3 |

**Kurts Taschen** (`kurt-taschen`):

| Gewicht | id | Label | Gegenstand | Groschen |
|--------:|----|-------|------------|---------:|
| 50 | `nichts` | Fussel und ein Nagel | Rostnagel | 0 |
| 35 | `groschen` | Vier Groschen | Vier Groschen | 4 |
| 15 | `ahle` | Eine Ahle | Ahle | 0 |

der Spielercharakter hat gefeilscht, den Ballen genommen, die Gasse betreten. ein Schläger liegt — angenommen, der Kampf ist aus, der SL hat das so gedeutet. Die Spielerin wählt eine Karte, etwa Freitext „ich durchsuche seine Taschen“, oder sie sagt es in der Zeile zur Intention. Der SL entscheidet: das ist kein Automatismus, aber ein Wurf ist auch nicht nötig, ein Schläger wehrt sich nicht mehr — oder er verlangt Wahrnehmung, oder er lässt es als Teil der Konsequenz gelten. Unabhängig davon kann er die Tabelle `kurt-taschen` werfen, um *sich* zu sagen, was in den Taschen ist, bevor er den Satz schreibt.

`rollLoot("kurt-taschen")`. Das Los fällt auf die vier Groschen. Das Log trägt „Kurts Taschen: Vier Groschen“. der Spielercharakter sieht nichts. Der SL gibt ins Leben: ein Fund- oder Ereignis-Beat, vier Groschen. Noch immer liegen sie nicht in der `money.pennies`. Erst wenn der SL (oder die Auflösung, die der SL freigibt) die vier Groschen gewährt, zählt der Bogen sie. Den Rostnagel kann er gewähren oder als wertlosen Fussel beschreiben und nicht ins Inventar schreiben. Die Ahle kann er als Gegenstand mit Notiz anlegen — oder als Implikation, dass ein Schläger nicht nur mit Fäusten arbeitet, und die Ahle auf dem Pflaster liegen lassen, bis jemand sie aufhebt.

Unter Ottos Tuch dasselbe, in anderer Tonlage. Restwolle ist kein Schatz. Drei Groschen im Saum sind drei Groschen, und sie gehören vielleicht ein Händler, nicht der Finderin. Der SL, der „Du bist die Welt“ spielt, weiß das. Die Tabelle weiß nur das Gewicht.

---

## 5. Szenen-Metadaten und der Hub

Eine Szene hat Pflichtfelder aus dem Loop: Ort, Anwesende, Modus, Auslöser, Countdown, Katalog, Protokoll, offene Events. Darüber legt der Hub eine **Verpackung**, damit Spieler und SL asynchron wählen können, welchen Ort sie betreten. Diese Verpackung ist keine Regel.

Vier Felder sind Verpackung:

- `teaser` — ein Satz auf der Hub-Karte. Basar: „Der Preis sitzt. ein Händler wartet hinter den Ballen. Die Menge schiebt.“ Gasse: „Nass, eng, ein Mann an der Wand. Der Ballen ist schwer in der Hand.“ Der Teaser ersetzt nicht den SL-Text. Der SL-Text bleibt der erste Absatz, den der Spieler liest, sobald die Szene aufgeht. Der Teaser ist das Schaufenster.
- `difficultyHint` — `ruhig` | `angespannt` | `gefaehrlich`. Am Hub steht das ausgeschrieben (Ruhig, Angespannt, Gefährlich). Es ist Stimmung für die Wahl, kein Modifikator. Die Schwierigkeit eines Wurfs setzt der SL am einzelnen Wurf nach der Tabelle des Buchs (S. 153): Sehr einfach +60, Einfach +40, Durchschnittlich +20, Herausfordernd ohne Modifikator, Schwierig −10, Schwer −20, Sehr schwer −30. Ein ruhiger Basar kann ein schweres Feilschen tragen, wenn ein Händler den Preis halten will und der Status dagegensteht. Eine gefährliche Gasse kann ein durchschnittliches Umherblicken tragen, wenn niemand zuschlägt. Wer den Hinweis als Dungeon-Stufe liest, hat das Buch verlassen.
- `prerequisites` — eine Liste von Weltflag-Namen. Der Hub prüft sie gegen `campaign.worldFlags` und, , gegen Flags am SC. Fehlt ein Flag, zeigt die Karte „Vorbedingung offen“. Das ist eine Warnung an den Blick, kein Riegel der Engine. Der SL darf die Szene trotzdem öffnen und betreten. Die Weltflags bleiben Flags, keine Schlösser.
- `maxPlayers` — eine weiche Obergrenze gleichzeitiger Spieler, 6 am Basar, 4 in der Gasse. Der Hub schreibt „bis N zugleich“. Die Engine wirft niemanden hinaus, der als Siebter kommt. Der SL als Anführer (S. 259) sorgt dafür, dass jeder seinen Anteil hat, und entscheidet, wer in der Szene vorkommt. Die Zahl ist Vorbereitung: so viele Stimmen trägt dieser Ort, bevor der Faden reißt.

Dazu kommt `opened`, ein boolescher Vorhang. Spieler sehen im Hub **nur Szenen, die der SL geöffnet hat**. Der SL sieht alle, inklusive geschlossener. In der Seed liegt der Basar offen, die Gasse geschlossen. der Spielercharakter kann den Basar betreten. Die Gasse sieht sie im Hub nicht, solange der SL den Vorhang hält — oder sie sieht sie als geschlossene Karte, wenn sie selbst SL-Blick hat, und darf sie erst öffnen, dann betreten.

Drei Store-Handlungen bedienen das:

- `openScene(id)` setzt `opened: true` und schreibt ins SL-Log (`kind: "open-scene"`). Der Ort liegt auf dem Tisch.
- `closeScene(id)` setzt `opened: false` und schreibt `close-scene`. Der Ort liegt hinter dem Vorhang. Zustand, Protokoll, Anwesende bleiben. Schließen löscht die Szene nicht.
- `goScene(id)` wechselt `currentSceneId`, leert die offenen Intentionen der Frist, setzt den Countdown neu. Ist die Szene geschlossen und die Rolle Spieler, geschieht nichts. Der SL (und der Tischblick) darf auch in geschlossene Szenen, um vorzubereiten.

Das ist asynchrone Anwesenheit, nicht ein zweites Regelwerk. Der Spieler kommt Stunden später, sieht im Hub, welche Orte der SL hingelegt hat, liest Teaser und Hinweis, betritt, findet oben das Standbild und darunter den Faden. Was hinter dem Vorhang liegt, gehört noch nicht zu dem, was der Charakter wahrnehmen kann.

---

## 6. Das Zeichen „direkt ins Leben“

Zufallstabellen sind SL-Tabellen. Der Satz steht in [10-leben-chat.md](10-leben-chat.md) und gilt hier ohne Ausnahme. Jeder Tabellenwurf — Begegnung oder Beute — schreibt zuerst das Log. Das Zeichen „direkt ins Leben“ ist die einzige Abkürzung, und sie ist absichtlich eng.

Jede Tabelle trägt `autoChat: boolean`. In der v1-Seed ist das Feld überall `false`: `basar-menge`, `gasse-nacht`, `otto-stand`, `kurt-taschen`. Nichts aus der Bibliothek spricht von selbst in den Spieler-Chat. Die Kampagne kann das Zeichen pro Tabelle überschreiben: `campaign.tableMarks` ist ein `Record<tableId, boolean>`. Steht dort ein Eintrag, gilt er statt `table.autoChat`. Steht keiner, gilt die Tabelle. `setTableAuto(tableId, autoChat)` schreibt genau diesen Überschreiber. Die Seed-Bibliothek bleibt unberührt. Die Kampagne erinnert sich, wie *dieser* Tisch *diese* Tabelle behandeln will.

Die Auflösung im Store liest: `auto = campaign.tableMarks[tableId] ?? table.autoChat`. Dann `rollWeighted`. Dann immer das Log. Wenn `auto`, zusätzlich ein Protokoll-Beat in der aktuellen Szene (Begegnung als Ereignis, Beute als Fund). Wenn nicht `auto`, wartet der Wurf als letzter Tabellen-Beat (`lastTableBeat`) auf dem Pult. `publishLastTable` gibt diesen Beat ins Leben und vermerkt im Log `kind: "into-leben"`. Kein letzter Beat, kein Veröffentlichen.

Warum der Default still ist: weil die Engine keinen Plot erfindet. Ein Taschendieb, der von selbst im Chat steht, während der Spielercharakter noch feilscht, ist eine Plotwendung, die niemand erzählt hat. Ein Fenster in der Gasse, das sich öffnet, während der SL noch die Initiative legt, ist ein zweiter Erzähler. Das Buch gibt dem SL die Geschichte (S. 259) und den Zeitpunkt der Ereignisse (S. 262). Eine Markierung, die der SL bewusst setzt — „diese Menge darf direkt sprechen, ich will den Basar lebendig, ich sitze am Pult und fange ab, wenn es schief liegt“ — ist Werkzeug. Ein stiller Default, der plötzlich einen Jungen in den Beutel greifen lässt, ist Automatik. v1 enthält keine SL-lose Automatik.

„Direkt ins Leben“ heißt deshalb nur: der vorbereitete Satz der gezogenen Zeile erscheint als Beat. Es heißt nicht: ein NSC wird erzeugt. Es heißt nicht: ein Vergleich wird gewürfelt. Es heißt nicht: Groschen wandern. Es heißt nicht: ein vorbereitetes Event gilt als geworfen. Der SL bleibt die Deutung. Wer die Markierung setzt, verspricht, dass der Satz der Tabelle *als Wahrnehmung* in die Welt darf. Die Konsequenz schreibt er weiter selbst.

---

## 7. Datenmodell

Die Namen sind die TypeScript-Namen aus `src/lib/wfrp/types.ts` und `src/lib/wfrp/library.ts`. Kommentar auf Deutsch. Das Buch bleibt Autorität; dieses Block ist das, was die Engine halten darf.

```
NpcPoolEntry
 id Schlüssel im Pool (otto, kurt, wache)
 characterId zeigt auf Campaign.characters — der Bogen, nicht die Karteikarte
 tags[] SL-Suche: haendler, basar, buerger, raufbold, gasse, gesetzlose, ordnung
 blurb Satz für den SL, nicht automatisch spielersichtbar

EncounterRow
 weight relatives Gewicht für rollWeighted
 id nichts | taschendieb | wache-geht | still | zeuge | wache-naht | …
 label kurzer Name der Zeile, für Log und Beat
 body Satz in der Welt, den der SL hergeben oder behalten kann

EncounterTable
 id basar-menge | gasse-nacht
 label Menge am Basar | Die nasse Gasse
 autoChat Default „direkt ins Leben“; Seed v1: false
 placeIds[] optionaler Hinweis, keine Zündung (vorstand, hauptstrasse, eingang, keller)
 rows EncounterRow[]

LootRow
 weight relatives Gewicht
 id restwolle | nadel | groschen | nichts | ahle | …
 label Name der Zeile
 itemName Gegenstand, falls der SL ihn später gewährt
 pennies Groschen; 0 = kein Geld

LootTable
 id otto-stand | kurt-taschen
 label Unter Ottos Tuch | Kurts Taschen
 autoChat Default „direkt ins Leben“; Seed v1: false
 rows LootRow[]

Scene (Felder der Verpackung, zusätzlich zum bestehenden Szenenmodell)
 teaser Schaufenstersatz für den Hub
 difficultyHint SceneHint: ruhig | angespannt | gefaehrlich
 kein Wurfmodifikator; Wurfschwierigkeit bleibt S. 153, SL am Wurf
 prerequisites[] Weltflag-Namen, weiche Warnung im Hub
 maxPlayers weiche Obergrenze gleichzeitiger Spieler, kein Kick
 opened Vorhang: Spieler sehen nur true; SL sieht alle

 present[] gezogene Anwesende (SC, NSC, Zuschauer) — Platzierung, nicht Besitz
 board.tokens[] MapToken { id, placeId } — wo das Token liegt
 journal[] JournalCard; kind nsc für den gezogenen Menschen, shared nach SL

Campaign
 characters Record<id, Character> — SC und NSC, persistent
 scenes Record<id, Scene>
 worldFlags[] Kampagnenflags; prerequisites lesen sie
 tableMarks Record<tableId, boolean>
 überschreibt table.autoChat; leeres Objekt in der Seed = alles still
 slLog[] zuerst landet der Tabellenwurf hier (kind table),
 Veröffentlichen als into-leben

rollWeighted(rows, rng)
 Summe der weight, Zufall in diesem Maß, erste Zeile, bei der das Restmaß aufbraucht.
 rng default Math.random; tests dürfen einen festen Generator reichen.

Store-Handlungen (bereits vorhanden)
 rollEncounter(tableId) Tabelle werfen, Log, ggf. Beat wenn auto
 rollLoot(tableId) dasselbe für Beute
 publishLastTable() letzten Beat ins Leben geben
 setTableAuto(tableId, autoChat) tableMarks setzen
 openScene(id) / closeScene(id) Vorhang
 goScene(id) Szene betreten; Spieler nur wenn opened
```

Die Seed-Bibliothek (`NPC_POOL`, `ENCOUNTER_TABLES`, `LOOT_TABLES`) ist der Inhalt der Schublade am Kampagnenstart. Der lebendige Zustand der Menschen liegt in der Kampagne. ein Händler im Pool ist die Karteikarte. ein Händler in `characters` ist der Kaufmann mit Feilschen 50 und vier Kronen. ein Händler in `scenes.basar.present` ist der Kaufmann, der gerade hinter den Ballen steht.

Was die Bibliothek ausdrücklich nicht ist: eine zweite Wahrheit über LP, Inventar oder Haltung. Was die Szene ausdrücklich nicht ist: Eigentümerin von ein Händler.

---

## 8. Anti-Ziele

Vier Dinge tut diese Bibliothek nicht. Sie sehen nach naheliegender Digitalisierung aus und würden das Buch verlassen.

**Kein Videospiel-Dungeon.** `difficultyHint` ist kein Level, kein CR, kein „diese Karte ist Stufe 2“. WFRP setzt Schwierigkeit am Wurf (S. 153), und zuerst fragt der SL, ob die Frage nach Erfolg überhaupt wichtig ist (S. 150). Ein ruhiger Basar bleibt ruhig, während ein einzelnes Feilschen schwer wird. Wer den Hub-Hinweis als Regel liest, baut ein anderes Spiel.

**Keine umherwandernde Begegnungsuhr.** Es gibt keinen Takt, der alle so-und-so viele Minuten oder jeden Szenenwechsel eine Tabelle wirft. Reisen bleibt SL-Arbeit im Kapitel des Spielleiters, nicht ein Spawn-Clock in der Engine. `placeIds` zünden nicht. Betreten zündet nicht. Der Countdown sammelt Intentionen, er würfelt keine Menge.

**Keine Auto-Falle auf Token-Enter.** Roll20 kennt Flächen, die feuern, wenn ein Token sie betritt. Die Frist ist asynchron: der Spieler kommt später, sieht den Stand, nicht die Animation. Ein Pin kann einen Hinweis tragen, der SL wirft ein. Das Token auf `vorstand` legt der Spielercharakter vor den Stand. Es greift nicht in ihre Tasche. Das steht schon in [09-spielumgebung-vtt.md](09-spielumgebung-vtt.md) und gilt für Tabellen genauso.

**Kein ein Händler-pro-Karte.** Es gibt keinen Basar-ein Händler und keinen Stuben-ein Händler. Es gibt ein Händler. Wer ihn pro Map dupliziert, zerlegt den Menschen, den das Buch als beteiligte Person vorbereitet haben will (S. 259). Dieselbe Absage gilt für ein Schläger, für die Wache, für jeden späteren NSC. Gezogen werden, nicht geklont.

Hinzu, weil es in denselben Graben fällt: Beute füllt nicht von selbst den Bogen. Tabellen ersetzen nicht vorbereitete Events. Die Engine spricht nicht in Leben, bloß weil ein Gewicht gefallen ist. Magie, Gebete und SL-lose Automatik bleiben aus v1. Charakter einmal erschaffen, dann persistent — für SC wie für NSC.

---

## 9. Siehe auch

- [Das Spiel](00-das-spiel.md) — Loop, Rollen, Szene, Engine erfindet nichts
- [Datenmodell](02-datenmodell.md) — Charakter, Szene, Kampagne, Protokoll
- [Leben](10-leben-chat.md) — Chat als Tisch, Bibliothek in einem Absatz, SL-Log
- [Journal und Log](12-journal-und-log.md) — Blätter, Freigabe, was der Rückkehrer lesen darf
- [Spielumgebung](09-spielumgebung-vtt.md) — Karte, Token, Nadeln, Vorhang, keine Auto-Falle
- [Kernrollen des SL](../06-spielleiter/01-kernrollen-des-SL.md) — Welt, Regeln, Geschichte, Anführer (S. 259)
