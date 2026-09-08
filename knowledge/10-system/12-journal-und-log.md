# Journal und SL-Log

Stand: 2026-09-08.
Quellen: GRW 2. Auflage S. 259–262; [00-das-spiel.md](00-das-spiel.md); [10-leben-chat.md](10-leben-chat.md).

Dieses Blatt ist die verbindliche Beschreibung der **zwei Bücher**, die neben dem Faden liegen. Es ändert den Loop nicht. Es sagt, was die Frist merkt, wenn niemand am Tisch sitzt, und was der SL später nachliest, um Regel von Ad-hoc zu trennen. Autorität bleibt das Buch. Wie ein Beat im Chat aussieht, steht in [10-leben-chat.md](10-leben-chat.md). Was legal ist, steht in [00-das-spiel.md](00-das-spiel.md). NSCs, Begegnungen und Beute gehören der Bibliothek: [11-bibliothek.md](11-bibliothek.md).

Am physischen Tisch sagt der SL zu Beginn des Abends oft denselben Satz: *Zuletzt bei Warhammer Fantasy Roleplay …* (S. 261). Dann beschreibt er Szenerie, Sinne, Auslöser. Die Frist hat keinen gemeinsamen Abend. Der Spieler kommt Stunden später zurück. Ohne Gedächtnis muss er raten, warum ein Händler den Daumen am Preis hat und warum die Gasse nass ist. Das Journal schreibt deshalb selbst. Getrennt davon führt der SL ein Log, das Spieler niemals sehen: jedes Eingreifen, jeder Wurf in Vertretung, jedes Tabellenergebnis, das die Welt nie betreten hat.

---

## 1. Warum zwei Bücher

Zwei Leser, zwei Pflichten, zwei Hefte.

Das **Spielerjournal** ist das Heft des Rückkehrers. Es liegt in der Klappe Blatt, neben dem knappen Bogen. Es trägt die Fäden zwischen den Szenen, damit der Spielercharakter nicht den ganzen Basar-Faden noch einmal lesen muss, um zu wissen, dass der Ballen sechs Schillinge kostete. Es ist kein zweiter Chat und kein Roman. Beim Öffnen der Szene steht der letzte Satz des Journals als Recap über dem Faden.

Das **SL-Log** ist das Heft der Leitung. Der SL ist Welt, Regeln, Geschichte und Anführer (S. 259). In der asynchronen Frist greift er oft ein, ohne dass ein Spieler zusieht: er öffnet die Gasse, fordert einen Wurf an, lässt eine Handlung ohne Wurf gelten, wirft eine Tabelle, reißt den Vorhang, teilt ein Blatt, schreibt einen Satz, löscht einen Beat, strafft eine Regel, weil etwas zu lange dauert. Das Buch erlaubt das. Das Log hält fest, *was Regel war und was Ad-hoc*. Wochen später, wenn der Spielercharakter fragt, warum ein Händler ohne Vergleich nachgab, steht dort nicht nur der Welt-Satz, sondern die Entscheidung: `auto`, ohne Wurf, gelten lassen. Fairness braucht ein Gedächtnis, das die Spieler nicht lesen.

Die Trennung ist die ganze Pointe. Würde das Spielerjournal die SL-Eingriffe mitlesen, wäre der Vorhang ein Witz. Würde das SL-Log im Faden stehen, wäre Leben ein Protokoll der Leitung statt eine Bildgeschichte der Szene. Würde beides in einem Strom liegen, verlöre der Rückkehrer den Faden zwischen Würfelplatte, Geheimnis und Geruch.

Drei Schichten, klar getrennt:

| Schicht | Lebt wo | Leser | Aufgabe |
|---------|---------|-------|---------|
| Leben (Protokoll) | an der Szene | Spieler sehen Öffentliches; Tisch und SL sehen auch `secret` | der Faden dieser einen Szene |
| Auto-Journal | an der Kampagne | alle drei Rollen, niemals geheim | Gedächtnis zwischen den Szenen |
| SL-Log | an der Kampagne | nur SL | Audit der Leitung |

Handouts (die Karten, die der SL vorbereitet und teilt) sind ein viertes Möbel. Sie gehören nicht in diese Tabelle, weil sie nicht automatisch entstehen. Sie bleiben extra, siehe Abschnitt 4.

---

## 2. Regeln des Auto-Journals

Das Journal schreibt selbst. Niemand soll nach dem Abend zehn Zeilen tippen, damit der Spielercharakter morgen weiß, was geschah. Die Engine hängt eine Notiz an, sobald das Leben einen Beat bekommt, der die Welt oder eine offene Frage betrifft. Sie erfindet keinen Satz. Sie zieht Titel, ein oder zwei Sätze und Namen aus dem Beat, der schon da ist.

Eine Notiz hat diese Felder:

| Feld | Inhalt |
|------|--------|
| `id` | eindeutig |
| `at` | Zeitpunkt |
| `sceneId` | welche Szene den Beat trug |
| `title` | kurze Überschrift, oft der Titel des Beats oder der Name des Orts |
| `body` | ein oder zwei Sätze in der Sprache der Welt |
| `npcNames` | wer in diesem Beat sprach oder enthüllt wurde |
| `openQuestion` | nur wenn etwas wartet; sonst fehlt das Feld |
| `sourceProtocolId` | Verweis auf den Beat, aus dem die Notiz kam, falls es einen gab |

beginnt bereits mit einer solchen Notiz, bevor jemand handelt. Titel: *Basar-Altquartier*. Body: *ein Händler verlangt sechs Schillinge für den Ballen. der Spielercharakter schuldet Haken zwei.* Namen: ein Händler Tuchhändler. Offene Frage: *Nimmt der Spielercharakter den Preis, handelt sie, oder geht sie?* Das ist der digitale *Zuletzt bei …*, geschrieben aus dem Auftakt der Szene.

### Wann eine Notiz entsteht

Nicht jeder Beat erzeugt eine Notiz. Die Art des Protokolls entscheidet.

| Art im Leben | Auto-Notiz? | Was genau |
|--------------|-------------|-----------|
| `world` | ja, wenn der Beat nicht `secret` ist | Kurznotiz: Titel und ein bis zwei Sätze. Namen, falls jemand spricht oder genannt wird. |
| `event` | ja, wenn der Beat nicht `secret` ist | Kurznotiz des Ereignisses, das die Welt betreten hat. |
| `intent` | ja, als offene Frage | Die Absicht ohne Auflösung. Body ist die Zeile der Karte oder der Satz „der Spielercharakter will Feilschen.“ |
| `rules` | die Rechnung nie; die offene Frage ja, solange der Wurf aussteht | Die Aufforderung erzeugt oder hält `openQuestion`. Die Würfelplatte bleibt im Chat. |
| `system` | nein | Frist, Initiative, Glück-Fenster, Vorhang-Technik. Kein Erzähler, kein Journal. |
| `sl` | nein | Der Satz an den Tisch bleibt im Faden (wenn nicht geheim) und im SL-Log unter `write`. Das Journal fasst ihn nicht noch einmal. |

Geheimnisse kopiert das Journal niemals. Steht am Beat `secret: true`, entsteht keine Notiz, auch wenn die Art `world` oder `event` wäre. Geheimnisse leben nur auf ungefreigegebenen SL-Karten und im SL-Log. Automatische Notizen sind öffentlich. Wer später als Spieler zurückkommt, darf alles lesen, was im Journal steht.

### Was gezogen wird

**Titel.** Kurz. Oft der Titel des Beats (*ein Händler Tuchhändler*, *Feilschen*, *Taschendieb*, *Die Gasse*). Kein Satz.

**Body.** Ein oder zwei Sätze in der Welt. Nicht die volle Szenerie, wenn der Beat ein Absatz ist. Der Auftakt am Basar darf in Leben nach Kohl, nassem Tuch und Fisch dampfen; die Notiz sagt, was der Rückkehrer braucht: ein Händler verlangt sechs Schillinge, der Spielercharakter schuldet Haken zwei. Nach dem Feilschen reicht: *Der Ballen wechselt für fünf Schillinge. ein Händler ist sauer, verkauft aber.* Nach dem Taschendieb reicht: *In der Menge fehlen vier Groschen.*

**Namen.** Nur wer in *diesem* Beat spricht oder enthüllt wird, nicht die ganze Kampagne. Spricht ein Händler (*speaker* otto, Portrait, Stempel Person), steht „ein Händler Tuchhändler“ auf der Notiz. Wird ein Schläger in der Gasse zum ersten Mal sichtbar, steht „ein Schläger Raufbold“. Ein Dieb, den der Welt-Satz nicht nennt — *Etwas zupft am Beutel. Ein Junge ist schon zwischen den Röcken.* — erzeugt keinen Namen. Die Liste ist kein Register aller NSCs der Bibliothek. Wer später fragen will, *wer je gesprochen hat*, sammelt die Namen über die Notizen, ohne sie auf jeder neuen Karte zu wiederholen.

**Offene Frage.** Nur wenn etwas wartet. Intention ohne Auflösung. Wurf, den der Spieler noch nicht getan hat. Pin oder Vorhang, den die Karte noch nicht zeigt, so weit der Spieler das Dunkel sehen darf. Sobald der SL deutet, der Wurf fällt oder der Vorhang reißt, trägt die *neue* Notiz keine offene Frage mehr, es sei denn, etwas anderes wartet. Die alte Notiz darf historisch stehen bleiben; die lebendige Frage hängt an dem, was jetzt offen ist.

**Quelle.** `sourceProtocolId` zeigt auf den Beat. Wer vom Journal in den Faden springt, landet auf derselben Stelle. Notizen ohne Beat (der vorbereitete Auftakt des Spiels) haben keine Quelle.

### Was niemals kopiert wird

Die volle Würfelrechnung bleibt auf der Platte im Chat. Fähigkeit, Schwierigkeit, Zustände, Vorteile, Ziel, W100, Erfolgsgrade, Band, Pasch, Zone, Gegnerplatte — das ist Vertrauen ins System, und es gehört in Leben, nicht ins Heft. Die Notiz nach dem Feilschen sagt nicht „47, schwierig −10, Ziel 37, Wurf 27, +1 EG, Knapper Erfolg“. Sie sagt, was in der Welt daraus wurde.

Geheimnisse werden nicht kopiert. Ein SL-Beat *ein Schläger wartet in der Gasse, sobald der Ballen den Stand verlässt*, als `secret` geschrieben, erzeugt keine Notiz. Das ungefreigegebene Handout *Gasse hinter dem Basar* trägt denselben Satz für den SL allein.

Das SL-Log wird nicht kopiert. `auto`, `proxy-roll`, `table`, `intervene` sind Leitung, nicht Welt. Spieler erfahren davon nur, was der SL danach als Welt- oder Ereignis-Beat ins Leben gibt — und genau das darf dann eine Notiz werden.

System-Ticks werden nicht kopiert. „Die Frist läuft ab in zwölf Minuten“ ist Arbeit über der Karte, kein Satz fürs Heft.

---

## 3. Offene Fragen

Eine offene Frage ist das, worauf die Szene wartet. Der Rückkehrer soll sie in Wachsrot unter der Notiz sehen, nicht zwischen den Beats suchen. Drei Ursachen, nicht mehr.

### Intention ohne Auflösung

der Spielercharakter wählt am Stand die Karte `feilschen` und schreibt optional: *Vier Schillinge, und ich sehe nicht, was unter dem Tuch liegt.* Leben bekommt einen Beat der Art `intent`, Stempel Intention, Portrait. Das Journal hängt eine Notiz an: Titel *Feilschen*, Body die Zeile oder *der Spielercharakter will Feilschen.*, Namen leer oder ein Händler, wenn die Absicht ihn als Gegenüber nennt. Offene Frage: *Wurf oder automatisches Gelingen für Feilschen?*

Solange der SL nicht entschieden hat — automatisch gelten lassen, automatisch scheitern, Wurf anfordern, ablehnen — bleibt diese Frage stehen. Der Rückkehrer weiß: ich habe gehandelt, die Welt hat noch nicht geantwortet. Das ist der häufigste Wartezustand der Frist.

### Wurf, der wartet

Der SL fordert den Wurf an. Leben bekommt einen Beat der Art `rules`: wer, welche Fähigkeit, welcher Zielwert, welche Schwierigkeit. Das SL-Log speichert `ask-roll`. Das Journal hält oder setzt die offene Frage, kurz, ohne die Platte vorwegzunehmen. In des Spiels, Feilschen, Buchrechnung: der Spielercharakter hat Feilschen 47, der SL setzt schwierig. Die Frage im Heft lautet *Wirf Feilschen gegen 47, schwierig*. Im Faden steht zusätzlich der Zielwert (47 − 10 = 37) und der Satz, dass der Wurf ihr gehört.

der Spielercharakter drückt Würfeln. Das ist ihr Beat. Die Platte erscheint im Faden. Die offene Frage fällt. Der SL deutet. Ein Welt-Beat schreibt den Preis. Die neue Notiz hat keine Frage, es sei denn, etwas anderes wartet — etwa das Glück-Fenster, das aber Arbeit unter dem Faden ist, kein Journal-Satz.

Läuft die Frist ab und niemand hat geworfen, darf der SL in Vertretung würfeln. Leben trägt den Vermerk „in Vertretung“, nicht „Spielerwurf“. Das SL-Log speichert `proxy-roll`. Das Journal schreibt danach dieselbe Welt-Notiz, die ein Spielerwurf erzeugt hätte. Es schreibt nicht „der SL hat 27 geworfen“. Der Rückkehrer liest, was ein Händler tat, und darf im Log — das er nicht sieht — später nachlesen, dass der Wurf Vertretung war.

### Pin hinter dem Vorhang

Auf der Basar-Karte liegt der hintere Hof unter dem Vorhang (`hinterhof`, noch nicht enthüllt). Die Nadel *Gasse* ist unrevealed. Der Spieler sieht Dunkel, keinen ein Schläger. Die offene Frage im Journal darf genau so weit gehen, wie die Karte das Dunkel zeigt: *Der hintere Hof liegt noch im Dunkel.* Sie darf nicht sagen, dass ein Schläger wartet. Das wäre ein Geheimnis, und Auto-Notizen sind nie geheim.

Reißt der SL den Vorhang, entsteht ein Ereignis-Beat im Leben (*Der hintere Hof liegt offen. Eine Gasse.*), das Log speichert `reveal`, das Handout *Gasse hinter dem Basar* darf geteilt werden, und die neue Notiz hat keine Frage mehr nach dem Hof. ein Schläger selbst tritt erst, wenn der Spielercharakter den Ort betritt und der Welt-Beat ihn spricht.

Drei Fragen, drei Leser, ein Maß: die Frage nennt das Warten, nicht die Pointe hinter dem Vorhang.

---

## 4. Handouts und Auto-Notizen

Zwei Möbel, die sich nicht mischen.

**Auto-Notizen** (`JournalNote`) schreibt die Engine. Sie sind nie geheim, nie ein Bogen, nie ein Fundstück mit Schloss. Sie leben an der Kampagne und überleben den Szenenwechsel. Der Spieler liest sie im Reiter Zustand, die jüngsten oben, Namen klein darunter, offene Fragen in der Akzentfarbe.

**Handouts** (`JournalCard`) bereitet der SL vor. Freigabe, Geheimnis, Fundstück. Der Knopf *Freigeben* macht aus einem geheimen Blatt ein öffentliches. Das Log speichert `share`. Ohne diesen Knopf bleibt die Karte hinter dem Schloss, sichtbar nur für den SL.

Ein Handout hat diese Felder:

| Feld | Inhalt |
|------|--------|
| `id` | eindeutig |
| `title` | Name des Blattes |
| `body` | der Text, den der Leser nach dem Öffnen sieht |
| `kind` | `bogen` · `nsc` · `fund` · `ort` |
| `shared` | freigegeben oder nicht |
| `characterId` | optional, wenn das Blatt an eine Figur gebunden ist |

Die vier Arten sind Möbel, keine Regeln. `bogen` ist das Blatt der Figur (der Spielercharakter, Link zum vollen Bogen). `nsc` ist ein Gesicht der Bibliothek, sobald es am Tisch liegen darf (ein Händler Tuchhändler; ein Schläger Raufbold). `fund` ist ein Ding (der Ballen, nass am Rand, sechs Schillinge). `ort` ist ein Ort oder ein vorbereitetes Geheimnis, das wie ein Ort behandelt wird (Gasse hinter dem Basar; Taschendieb; Wache naht).

In des Spiels hängen die Karten an der Szene, damit Freigabe und Nadel zusammenfallen. Basar: der Spielercharakter (geteilt, `bogen`), ein Händler (geteilt, `nsc`), der Ballen (geteilt, `fund`), Gasse hinter dem Basar (nicht geteilt, `ort`), Taschendieb (nicht geteilt, `ort`). Gasse: der Spielercharakter, ein Schläger (geteilt, `nsc`), Wache naht (nicht geteilt, `ort`). ein Händler kehrt nicht still mit, wenn der Spielercharakter in die Gasse geht. Wer ihn später in einer Stube braucht, zieht ihn aus der Bibliothek, nicht aus der Basar-Karte. Die Auto-Notiz *ein Händler verlangt sechs Schillinge* reist trotzdem mit, weil sie an der Kampagne hängt.

Niemals mischen. Eine Auto-Notiz wird kein Handout, wenn sie wichtig wirkt. Ein Handout wird keine Auto-Notiz, wenn der SL es teilt. Der Taschendieb als vorbereitetes Ereignis ist ein geheimes Blatt *und* — sobald der SL ihn einwirft — ein Ereignis-Beat, der eine öffentliche Notiz erzeugt. Das Blatt bleibt das Blatt. Die Notiz bleibt die Notiz. Das Log speichert das Einwerfen und, falls der SL das Blatt teilt, das `share`.

Der Spieler sieht auf dem Zustand-Reiter beides untereinander: zuerst die mitschreibenden Notizen, darunter die Blätter, die für ihn freigegeben sind. Schloss und offenes Schloss markieren nur auf der SL-Seite den Unterschied. Der Spieler sieht das Schloss nicht, weil er die geschlossenen Karten nicht sieht.

---

## 5. Das SL-Log — jede Art

Jedes Eingreifen schreibt eine Zeile. Die Zeile hat `id`, Zeitpunkt, Art, Titel, Body, optional `tableId` und optional `protocolId`, wenn ein Beat im Leben dazu gehört. Spieler sehen diese Liste nicht. Tisch sieht sie nicht. Nur der SL.

Die Arten sind geschlossen. Was nicht in dieser Liste steht, wird nicht heimlich unter „Sonstiges“ verbucht.

### `open-scene`

Der SL öffnet einen Ort. Nur geöffnete Orte liegen im Hub der Spieler. Die Zeile sagt, welcher Ort jetzt offen liegt. Beispiel: Titel *Die Gasse*, Body *Gasse hinter dem Basar liegt offen.* Leben bekommt davon nichts, bis jemand den Ort betritt und der Auftakt flattert. Öffnen ist Leitung, nicht Welt.

### `close-scene`

Der SL legt den Ort hinter den Vorhang. Spieler sehen ihn im Hub nicht mehr. Wer noch in der Szene steht, bleibt, bis der SL wechselt; neu betreten kann man den Ort nicht. Beispiel: *Basar-Altquartier liegt hinter dem Vorhang.*

Öffnen und Schließen loggen sich selbst. Es gibt keinen Knopf, der den Ort bewegt, ohne eine Zeile zu hinterlassen.

### `ask-roll`

Der SL hat entschieden, dass gewürfelt wird, und fordert den Spieler auf. Leben trägt die Aufforderung als `rules`. Das Log trägt dieselbe Entscheidung als Leitung. Beispiel: *Wirf — der Spielercharakter: Feilschen, Ziel 37. Der Wurf gehört dir.* Solange niemand würfelt, wartet das Journal mit der offenen Frage.

### `proxy-roll`

Die Frist ist abgelaufen, niemand hat geworfen, der SL würfelt in Vertretung. Leben zeigt die Platte mit dem Vermerk „in Vertretung“. Das Log hält fest, dass es kein Spielerwurf war. Fairness später: der Spielercharakter darf nachlesen lassen — über den SL, nicht über das Heft —, dass der 27er nicht ihrer war.

NSC-Würfe des SL (ein Händler feilscht, ein Schläger weicht aus) sind nicht `proxy-roll`. Vertretung gibt es nur, wo ein Spielerwurf fällig war.

### `auto`

Ohne Wurf gelten lassen oder verwerfen. Das Buch stellt die Frage zuerst: Ist Erfolg wichtig, spannend, dramatisch (S. 150)? Manchmal ist die Antwort nein. ein Händler ist nervös, die Wache gähnt, der Spielercharakter schaut nur, wo der zweite Preiszettel klebt — der SL lässt `umschauen` gelten. Oder er lässt `schleichen` am offenen Stand scheitern, ohne zu würfeln. Leben bekommt einen Welt-Beat (*Ohne Wurf: der SL lässt es gelten.*). Das Log speichert `auto`. Wochen später steht dort, dass nicht gewürfelt wurde.

### `table`

Der SL wirft eine Tabelle der Bibliothek: Begegnung oder Beute. Das Ergebnis landet *zuerst* in dieser Zeile, mit `tableId`. Die Welt erfährt nichts, solange der SL das Ergebnis nicht ins Leben gibt und die Tabelle nicht mit „direkt ins Leben“ markiert war. Die Engine erfindet keinen Plot.

### `reveal`

Der SL reißt den Vorhang oder enthüllt eine Nadel. Leben darf ein Ereignis bekommen (*Der hintere Hof liegt offen. Eine Gasse.*). Das Log speichert, dass geleitet wurde, nicht nur dass die Karte sich geändert hat.

### `share`

Ein Handout wird freigegeben. Titel des Blattes, Body *Handout freigegeben.* Das geheime Blatt *Wache naht* bleibt geheim, bis dieser Eintrag existiert.

### `write`

Der SL schreibt einen Satz ins Leben (Welt, Ereignis, SL-Satz an den Tisch, auch geheim). Das Log speichert Titel und Body und die `protocolId` des Beats. Löscht jemand den Beat später, bleibt die Log-Zeile: es wurde geschrieben.

### `delete`

Der SL entfernt einen Beat aus dem Faden. Leben verliert ihn. Das Log behält Titel und Body des Entfernten. Der Rückkehrer sieht die Lücke nicht; der SL sieht, dass eine Lücke gemacht wurde.

### `intervene`

Freie Notiz der Leitung, die das Leben nicht betritt. Hier steht, was das Buch unter „Regeln situativ straffen“ erlaubt (S. 259), und was der SL sich merken will, ohne den Tisch zu belästigen. *Heute zähle ich Status nicht, ein Händler ist zu nervös.* *Freitext „ich flüstere der Wache“ abgelehnt, das ist `bestechen`.* Spieler erfahren davon nur, wenn der SL anschließend einen öffentlichen SL-Satz oder eine Welt-Deutung schreibt.

### `into-leben`

Der SL gibt das letzte Tabellenergebnis ins Leben. Erst dieser Eintrag macht aus einem privaten Wurf eine öffentliche Welt. Leben bekommt einen Ereignis-Beat. Das Journal darf dann die Notiz ziehen, weil ein `event` ohne `secret` entstanden ist.

### Tabelle behalten oder veröffentlichen — durchgespielt

Der SL wirft am Basar die Tabelle *Menge am Basar*. Das Los fällt auf *Eine Hand in der Menge*: *Etwas zupft am Beutel. Ein Junge ist schon zwischen den Röcken.* Das Log schreibt `table`, `tableId` basar-menge. Die Tabelle ist nicht mit „direkt ins Leben“ markiert. Der SL sieht das Ergebnis und lässt es liegen. Der Taschendieb des Spiels ist ein vorbereitetes Ereignis nach dem ersten sozialen Misserfolg, nicht ein Zufallsgenerator (S. 262, Schritt 4 des Abends). der Spielercharakter hat noch nicht mit Charme danebengegriffen. Die Hand in der Menge findet nicht statt. Spieler sehen nichts. Das Journal schreibt nichts. Wochen später steht im Log, dass gewürfelt und verworfen wurde.

Später, in der Gasse, nach der Rauferei, wirft der SL *Kurts Taschen*. Das Los fällt auf *Vier Groschen*. Diesmal passt es. Der SL drückt *ins Leben*. Das Log schreibt `into-leben`. Leben bekommt einen Ereignis-Beat, Stempel Fund: *Vier Groschen.* Das Journal hängt eine öffentliche Notiz an, Namen leer, keine offene Frage. Hätte der SL die Tabelle vorher mit „direkt ins Leben“ markiert, wäre der Ereignis-Beat schon beim Wurf entstanden; das Log hätte `table` getragen, und `into-leben` wäre überflüssig gewesen.

Beides ist legal. Nur das zweite ändert die Welt.

---

## 6. Funktionen des SL-Log-Pults

Das Pult liegt auf der SL-Seite, nicht im Faden. Spieler haben kein Gegenstück. Die Funktionen sind vollständig; was hier fehlt, wird nicht stillschweigend erwartet.

**Filtern nach Art.** Ein Satz Knöpfe, eine Art nach der anderen oder alle. Wer nur Vertretungen sehen will, filtert `proxy-roll`. Wer nur Tabellen sehen will, filtert `table`. Wer nachvollziehen will, welche Orte je offen lagen, filtert `open-scene` und `close-scene`. Der Filter betrifft das Log, nicht das Leben. Das Leben hat eigene Filter (Welt, Intention, Wurf, Ereignis, SL, System).

**Im Text suchen.** Titel und Body. *ein Händler*, *Vertretung*, *Hinterhof*, *vier Groschen*. Die Suche ersetzt den Filter nicht; beide zusammen sind der Weg durch eine lange Kampagne.

**Eine freie Notiz schreiben.** Titel und Body, Art `intervene`. Kein Beat, kein Journal, kein Handout. Das ist das Schmierzettel-Feld der Leitung.

**Einen Eintrag löschen.** Die Zeile verschwindet aus dem Log. Das ist selten und bewusst: wer das Audit putzt, putzt das Audit. Ein gelöschter Log-Eintrag stellt keinen Beat wieder her und löscht keinen Beat. Leben und Log sind zwei Hefte.

**Alles als Text kopieren.** Zeit, Art, Titel, Body, eine Zeile nach der anderen, in die Zwischenablage. Für die Nachbereitung, für eine Streitfrage, für das eigene Archiv. Spieler bekommen diese Datei nicht aus der App.

**Leben erneut abspielen.** Der Faden der aktuellen Szene flattert noch einmal von vorn, Beat für Beat, kurze Bewegung, ohne die Welt neu zu würfeln. Das ist Erinnerung für den SL, der prüfen will, was der Rückkehrer lesen wird. Es ist keine Zeitreise und kein zweites Würfeln. Dasselbe Abspielen liegt am Kopf von Leben selbst; vom Log-Pult aus ist es dieselbe Geste.

**Eine Tabelle werfen.** Begegnung oder Beute aus der Bibliothek. Das Ergebnis landet im Log als `table`. War die Tabelle mit „direkt ins Leben“ markiert, entsteht gleichzeitig der Ereignis-Beat. Sonst wartet das Ergebnis als letztes Los.

**Das letzte Los ins Leben geben oder behalten.** Behalten ist der Default, sobald nicht markiert wurde. *Ins Leben* schreibt `into-leben` und den Ereignis-Beat. Es gibt kein „halb veröffentlichen“. Entweder die Welt erfährt den Satz, oder nur der SL.

Dazu, ohne eigenen Knopf neben den anderen: Öffnen und Schließen einer Szene schreiben `open-scene` und `close-scene`. Wurf anfordern schreibt `ask-roll`. Vertretung schreibt `proxy-roll`. Ohne Wurf entscheiden schreibt `auto`. Vorhang reißen schreibt `reveal`. Handout teilen schreibt `share`. Ins Leben tippen schreibt `write`. Einen Beat löschen schreibt `delete`.

Das Pult würfelt keine Spielerwürfe. Der Spieler wirft den W100. Das Pult würfelt Vertretung, NSC und Tabelle.

---

## 7. Wer sieht was

Drei Rollen, ein Pult, verschiedene Vorhänge. Spieler ist die Charakter-Sicht. Tisch ist die gemeinsame Tischsicht plus das, was hinter dem Vorhang schon auf der Karte liegt: Rolle Tisch sieht `secret`-Beats im Faden, genau wie der SL, damit Demo und Zuschauer den ganzen Beat lesen können. Der SL sieht dasselbe plus Log, Bibliothek und Freigaben. Der Spieler sieht keine Geheimnisse, kein SL-Log, keine geschlossenen Orte.

Auto-Notizen sind niemals geheim. Wer sie als Spieler liest, liest denselben Text wie der SL.

| Artefakt | Spieler | Tisch | SL |
|----------|---------|-------|-----|
| Leben, Beat ohne `secret` | ja | ja | ja |
| Leben, Beat mit `secret` | nein | ja | ja |
| Leben, Filter „SL“ | nein (öffentliche SL-Sätze erscheinen unter „Alles“) | ja | ja |
| Auto-Notiz | ja | ja | ja |
| Auto-Notiz, offene Frage | ja | ja | ja |
| Handout, `shared` | ja | ja | ja |
| Handout, nicht `shared` | nein | nein | ja |
| SL-Log, jede Art | nein | nein | ja |
| Geschlossene Orte im Hub | nein | nein | ja |
| Würfelplatte im Faden | ja, sobald der Wurf öffentlich ist | ja | ja |

Zwei Kanten, die man nicht verwischen darf. Erstens: Tisch sieht geheime *Beats*, nicht das SL-Log und nicht ungefreigegebene Handouts. Der Vorhang auf der Karte und der geheime Welt-Satz sind Tisch-sichtbar, weil sie zum Faden gehören. Die Entscheidung `auto` und das Blatt *Wache naht* gehören der Leitung. Zweitens: sobald ein Geheimnis ein öffentlicher Welt- oder Ereignis-Beat wird, darf das Journal es als Notiz tragen. Vorher nicht.

---

## 8. Was überlebt den Szenenwechsel

Die Kampagne ist das Dokument. Die Szene ist ein Blatt darin.

**Auto-Notizen** leben an der Kampagne. der Spielercharakter geht in die Gasse; die Notiz *ein Händler verlangt sechs Schillinge* bleibt. `sceneId` sagt, wo der Beat herkam, damit das Heft nach Ort gruppiert werden kann. Es wird nicht gelöscht, wenn die Szene schließt.

**SL-Log** lebt an der Kampagne. `open-scene` der Gasse steht unter `ask-roll` des Basars. Der Audit ist eine Liste, nicht ein Stapel je Ort.

**Protokoll** lebt an der Szene. Der Basar-Faden bleibt am Basar, der Gasse-Faden an der Gasse. Wer zurück zum Stand geht, liest Ottos Sätze wieder, nicht Kurts. Leben ist das Ereignisprotokoll *dieser* Szene.

**Handouts** hängen an der Szene, weil Nadel und Blatt zusammen gehören. Sie reisen nicht still mit. Die Bibliothek trägt ein Händler, ein Schläger, die Wache, die Tabellen; die Szene zeigt, was hier gerade auf dem Tisch liegt.

**Offene Intention, ausstehender Spielerwurf, Glück-Fenster** gehören zum laufenden Zug. Ein Szenenwechsel räumt sie. Das Journal darf die offene Frage behalten, bis eine neue Notiz sie ersetzt; der Zug selbst liegt nicht mehr unter der Arbeit.

Was nicht persistiert: Countdown-Anzeige, welcher Reiter offen ist, Würfel-Animation, das Flattern. Was niemals Zustand wird: KI-Text, Regelwerk-Volltext, ein Tabellenergebnis, das nur im Log steht.

Der Rückkehrer findet also drei Dinge vor, in dieser Reihenfolge, wenn er den Faden nicht neu lesen will: die Notizen der Kampagne (was geschah, wer sprach, was wartet), die geteilten Blätter der aktuellen Szene (Bogen, ein Händler oder ein Schläger, Ballen), den Faden der aktuellen Szene von oben nach unten. Das SL-Log braucht er nicht. Es wartet auf den SL.

---

## 9. Was das Journal nicht ist

Es ist **kein zweiter Chat**. Niemand antwortet im Heft. Niemand schreibt Freitext ins Journal, um zu handeln. Handeln bleibt die Karte unter dem Faden. Das Heft liest man, dann geht man zurück an die Arbeit.

Es ist **kein Roman**. Ein bis zwei Sätze, nicht das Dampfen des ganzen Basars. Wer die Bildgeschichte will, liest Leben. Wer nur den Faden zwischen gestern und heute will, liest das Heft. Eine Notiz, die länger ist als der Beat, aus dem sie kam, ist falsch gezogen.

Es ist **kein Abzug jeder Würfelzeile**. Die Platte bleibt im Chat. „Feilschen 47, schwierig −10, Ziel 37, W100 27, +1 EG, Knapper Erfolg, ein Händler 50 gegen 71, −2 EG“ ist Vertrauen, kein Gedächtnis. Das Gedächtnis lautet: *Der Ballen wechselt für fünf Schillinge.*

Es ist **kein Geheimfach**. Auto-Notizen sind öffentlich. Wer ein Schläger verstecken will, schreibt ein ungefreigegebenes Blatt oder einen `secret`-Beat oder eine `intervene`-Zeile, nicht eine Notiz mit zwinkerndem Halbsatz.

Es ist **kein Dump des SL-Logs**. Vertretung, verworfene Tabelle, gestrichene Regel, gelöschter Beat — das bleibt Leitung.

Es ist **kein Ersatz für den SL**. Das Heft erinnert. Der SL bleibt die Welt. Wenn die offene Frage *Wirf Feilschen gegen 47, schwierig* dort steht, würfelt trotzdem der Spielercharakter, und deuten tut trotzdem der SL.

---

## 10. Satz zum Mitnehmen

Du kommst Stunden später an den Basar. Das Heft sagt: ein Händler hat sechs Schillinge verlangt, du schuldest Haken zwei, du wolltest feilschen, der Wurf steht aus. Du wirfst. Der SL deutet. Eine neue Notiz hängt sich an. In der Gasse steht ein Schläger, und Ottos sechs Schillinge sind immer noch lesbar, weil das Heft an der Kampagne hängt, nicht an der Karte. Was der SL ohne dich entschieden hat, steht in einem Buch, das du nicht siehst. Was die Welt getan hat, steht in dem, das du siehst. Das ist die Frist: niemand verliert den Faden, und niemand sieht hinter den Vorhang, bevor der SL ihn reißt.

---

### Siehe auch

- [Leben — der Chat als Tisch](10-leben-chat.md)
- [Bibliothek](11-bibliothek.md)
- [Das Spiel](00-das-spiel.md)
- [Datenmodell](02-datenmodell.md)
- [Spielumgebung](09-spielumgebung-vtt.md)
- [Kernrollen des SL](../06-spielleiter/01-kernrollen-des-SL.md)
