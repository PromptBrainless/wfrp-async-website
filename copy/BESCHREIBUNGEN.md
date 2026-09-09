# Beschreibungen — Die Frist

Sicherung aller **Beschreibungstexte**: was Ort, Haus, Gesicht und erste Stunde erzählen.
Kein UI-Chrom — das bleibt [SPIELTEXTE.md](SPIELTEXTE.md).

Schichten einer Gasse/eines Hauses:

- **offen** — liegt im Faden, sobald die Szene offen ist. Kein Wurf.
- **grob** — Umschauen, Fehlwurf.
- **teil** — Umschauen, knapp.
- **voll** — Umschauen, gelungen.
- **scharf** — Umschauen, EG 4+ oder kritisch.
- **sl** — nur das Pult.

Häuser ohne eigene Handschrift nutzen den Generator (als `fallback` markiert).

Stand aus `looks-drosselau.ts`, `drosselau.ts`, `session.ts`, `party.ts`, `catalog.json`.

## Inhalt

- Stadt — 1
- Viertel — 5
- Gassen — 13 × 6 Schichten
- Häuser — 69 × 6 Schichten
- Erste Stunde
- Gesichter — 5
- Handlungskarten · Flavour
- Erschaffung · Why

## Stadt

### B-stadt-teaser
- Ort: Kampagnen-Teaser
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktflecken im Reikland an einem Nebenfluss des Reik. Die Kampagne verlässt die Stadt nicht.
<<<

### B-lobby-teaser
- Ort: Lobby-Teaser vor der ersten Szene
- Datei: `src/lib/wfrp/seed.ts`

>>>
Eingesperrt in der Stadt. Kein Weg nach Altdorf. Noch keine offene Szene.
<<<

### B-lobby-sl
- Ort: Lobby-Text für den SL
- Datei: `src/lib/wfrp/seed.ts`

>>>
Kampagne 1 spielt nur in Drosselau. ${DROSSELAU_SCENE_COUNT} Szenen liegen bereit, alle zu. Der SL öffnet eine Gasse.
<<<

## Viertel

### B-viertel-vorstadt
- Ort: Vorstadt · Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
außerhalb der Mauer
<<<

### B-viertel-tor
- Ort: Tor · Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
vom Stadttor zum Markt
<<<

### B-viertel-markt
- Ort: Markt · Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gilden, Tempel, Rat
<<<

### B-viertel-handwerk
- Ort: Handwerk · Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Zünfte, Gestank, Feuer
<<<

### B-viertel-schatten
- Ort: Schatten · Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Armut, Morr, Rand
<<<

## Gassen

### Gasse · Vorstadtring

- id: `vorstadtring` · Viertel: vorstadt · grenzt an: torstrasse
- 6 Häuser

### B-gasse-vorstadtring-note
- Ort: Vorstadtring · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
außerhalb der Mauer
<<<

### B-gasse-vorstadtring-offen
- Ort: Vorstadtring · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Außerhalb der Mauer. Der Weg ist weich, der Dreck hält. Sechs Hütten stehen unregelmäßig, zwei davon ohne Dach das trägt. Ein Schuppen für Karren, der Geruch von nassem Holz und Ochse. Die Stadtmauer im Rücken, das Tor nicht weit, und trotzdem fühlt sich der Ring an, als gehöre er der Stadt nicht ganz. Niemand kommt entgegen.
<<<

### B-gasse-vorstadtring-grob
- Ort: Vorstadtring · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hütten, Dreck, der Schuppen. Ein Dach hängt durch. Der Wind kommt vom Sumpf, nicht vom Fluss. Gesichter siehst du nicht, nur Rauch aus einem Rohr.
<<<

### B-gasse-vorstadtring-teil
- Ort: Vorstadtring · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nr. 1 eine Bettlerhütte, Nr. 2 Tagelöhner aus dem Sumpf, Nr. 3 der Fuhrmannsschuppen der Karr, Nr. 4 eine Wäscherin. Zwei leer: Dach eingefallen, und eine Tür mit einem verwitterten Zeichen. Der Weg führt nur zurück zur Torstraße.
<<<

### B-gasse-vorstadtring-voll
- Ort: Vorstadtring · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Laus in der ersten Hütte, allein. Bei Moos Kindergeschrei hinter der Luke, Sumpf noch in der Sprache. Der Schuppen gehört Hannes Karr, der in der Torstraße wohnt — hier stehen Wagen und Ochse. Hilde Blau wäscht, Anni reicht. Das eingefallene Dach von Nr. 5 tropft in den Lehm. An Nr. 6 ein Katzenzeichen, alt, Ranald oder Warnung, die Farbe ist runter.
<<<

### B-gasse-vorstadtring-scharf
- Ort: Vorstadtring · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Das Zeichen an Nr. 6 ist von innen nachgezogen worden, nicht nur verwittert. Unter dem Schuppen ein zweiter Satz Radspuren, schmaler als Karrs Wagen, frisch im Dreck. Bei Moos liegt hinter der Hütte ein Bündel, das nicht nach Wäsche riecht.
<<<

### B-gasse-vorstadtring-sl
- Ort: Vorstadtring · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnen: Laus, Moos, Blau. Karr arbeitet hier, wohnt Tor 5. Nr. 5 leer, Nr. 6 leer mit Ranald-Keim — nur SL zieht. Kein Automat.
<<<

### Gasse · Torstraße

- id: `torstrasse` · Viertel: tor · grenzt an: vorstadtring, marktplatz, bettelgasse
- 9 Häuser

### B-gasse-torstrasse-note
- Ort: Torstraße · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
vom Stadttor zum Markt
<<<

### B-gasse-torstrasse-offen
- Ort: Torstraße · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nasser Stein unter den Sohlen, der Geruch von Pferdeharn, der sich nicht verzieht. Das Stadttor liegt im Rücken, der Bogen tropft. Links das Zollhaus, die Luke halb im Schatten; daneben der Gasthof Zum Wanderer, das Schild hängt schief, eine Laterne brennt noch. Eine Bäckerei dampft, eine Fleischerei hat den Ladenladen einen Spalt, ein Kramladen zeigt in der Scheibe Seile und kleine Sigmar-Amulette. Vorstadt hinter euch, Marktplatz voraus, Bettelgasse zur Seite. Fünf stehen unter dem Torbogen. Niemand hat sie hereingewunken.
<<<

### B-gasse-torstrasse-grob
- Ort: Torstraße · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Mann in der wollenen Jacke der Stadt steht zu nah. Helm unter dem Arm, der Riemen der Handwaffe ist zu. Der Dampf der Bäckerei verschluckt die Ecke zur Bettelgasse. Du siehst Jacke, Riemen, den nassen Stein — und dass die Luke am Zollhaus zufällt. Mehr gibt der Blick nicht her, solange er zählt.
<<<

### B-gasse-torstrasse-teil
- Ort: Torstraße · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Links Zollhaus, daneben der Wanderer, dann Bäckerei, Fleischerei, Kram. Vorne der Weg zum Markt, seitlich die Bettelgasse, hinter dem Tor der Vorstadtring. Der Mann in der Jacke der Stadt hat fünf vor sich und zählt Lippen, nicht Augen. Hinter ihm steht niemand Zweites im Licht. An der Ecke zur Bettelgasse hängt etwas Nasses, ohne Gestalt darunter.
<<<

### B-gasse-torstrasse-voll
- Ort: Torstraße · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Luke am Zollhaus steht einen Spalt. Kreide an der Tür: Striche, heutiger Tross, nicht gestern. Hinter Helm kein zweiter Mann — die Wache am Tor ist er allein, in dieser Stunde. Die Bäckerei dampft, Laib, nicht Kuchen. An der Bettelgasse-Ecke hängt ein nasser Lappen, niemand darunter. Nr. 8, das Wohnhaus der Wache, liegt dunkel; Nr. 9 das Brunnenhaus, der Stein nass vom Rand. Helm zählt Lippen, nicht Augen. Er hat die fünf schon im Torbuch, bevor jemand spricht.
<<<

### B-gasse-torstrasse-scharf
- Ort: Torstraße · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Kreide ist frisch, der Strich für diesen Tross noch feucht. Im Spalt der Luke liegt ein Stift, kein zweites Auge. Der nasse Lappen an der Bettelgasse ist ein Kinderhemd, nicht Fetzen. Hinter der Scheibe von Nr. 8 bewegt sich kurz eine Frau, dann nichts. Helm kennt die fünf aus dem Buch, nicht aus dem Gesicht — er braucht die Namen, weil die Schrift ihn deckt, nicht weil er sie schon gehört hat.
<<<

### B-gasse-torstrasse-sl
- Ort: Torstraße · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Arne Helm, 38, wohnt Torstraße 8 mit Dora (35) und Finn (7). Dienst: Zollhaus Nr. 1. Keim still: Torwache prüft auf Waffen und Mutation — nur der SL zieht. Krug führt den Wanderer (Nr. 2). Laib die Bäckerei, Metz die Fleischerei, Docht den Kram. Karr wohnt Nr. 5, arbeitet am Ring. Staub Nr. 6. Brunnen Nr. 9 leer. Engine zieht niemanden.
<<<

### Gasse · Marktplatz

- id: `marktplatz` · Viertel: markt · grenzt an: torstrasse, gildengasse, schmiedezeile, weberweg, kraemerstrasse, schlemmergasse
- 10 Häuser

### B-gasse-marktplatz-note
- Ort: Marktplatz · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>

<<<

### B-gasse-marktplatz-offen
- Ort: Marktplatz · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Platz hält die Stadt zusammen. Pflaster, das die Reifen kennen. Gildehaus, Zunft, Sigmarstempel mit offener Tür, Wechsler, Schreiber, Rat. Zwei Kaufmannshäuser, ein Ratshaus, ein Kontor ohne Schild. Leute gehen, aber niemand bleibt. Der Tempel riecht nach kaltem Stein und Wachs.
<<<

### B-gasse-marktplatz-grob
- Ort: Marktplatz · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Platz, zu groß für die Zahl der Leute. Der Tempel zieht den Blick, das Kontor stößt ihn ab. Stimmen unter der Gilde, nicht hier draußen.
<<<

### B-gasse-marktplatz-teil
- Ort: Marktplatz · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kaufmannsgilde Nr. 1, Handwerkerzunft Nr. 2, Sigmarstempel Nr. 3. Wechsler, Schreiberstube, Rat. Zwei Wohnhäuser der Kaufleute, ein Stadtrat, das leere Kontor am Rand. Wege in fast jede Gasse der Stadt.
<<<

### B-gasse-marktplatz-voll
- Ort: Marktplatz · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wilhelm Holtz sitzt in der Gilde, nicht hier. Vater Brant Keil liest im Tempel nicht laut. Heller wechselt, Feder beglaubigt im Namen eines Grafen, der nicht in der Stadt ist. Talbeck im Rat. Berthold Holtz Nr. 7, Voss Nr. 8, Stein Nr. 9. Das Kontor Nr. 10 hat Staub auf der Schwelle, ein Jahr alt, die Klinke unberührt. Der Platz führt zur Torstraße, zur Gildengasse, zur Schmiedezeile, zum Weberweg, zur Krämerstraße, zur Schlemmergasse.
<<<

### B-gasse-marktplatz-scharf
- Ort: Marktplatz · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Am Kontor fehlt das Schloss nicht — es ist zu, aber der Staub vor der Klinke ist an einer Stelle gewischt, vorgestern oder gestern. Im Tempel hängt neben Sigmar ein kleines, neues Brett: Namen von Kranken, nicht von Toten. Der Wechsler hat die innere Luke zu, obwohl der Platz Tag hat.
<<<

### B-gasse-marktplatz-sl
- Ort: Marktplatz · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Graf nicht in der Stadt. Siegel bei Feder, Markt 5. Kontor-Keim still. Holtz Meister Gildengasse 2, Sohn Markt 7. Engine zieht niemanden.
<<<

### Gasse · Gildengasse

- id: `gildengasse` · Viertel: markt · grenzt an: marktplatz, weberweg
- 5 Häuser

### B-gasse-gildengasse-note
- Ort: Gildengasse · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>

<<<

### B-gasse-gildengasse-offen
- Ort: Gildengasse · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Enger als der Platz, höher gebaut. Lager, das Haus des Gildemeisters, ein Schreiber, eine Herberge für Zunftbrüder, das Archiv. Holz und Wachs, weniger Mist. Die Gasse will Ordnung zeigen.
<<<

### B-gasse-gildengasse-grob
- Ort: Gildengasse · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Türen mit Schildern, die du lesen könntest, wenn du stehen bliebest. Eine Herberge atmet Bier. Das Archiv atmet Staub.
<<<

### B-gasse-gildengasse-teil
- Ort: Gildengasse · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Lager der Zunft, Wohnhaus Holtz, Wohnhaus Eckert, Herberge, Archiv. Nach Marktplatz und Weberweg.
<<<

### B-gasse-gildengasse-voll
- Ort: Gildengasse · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wilhelm und Elsa Holtz in Nr. 2, das beste Haus der Gasse, Silber ohne Scham. Franz Eckert schreibt für die Gilde, Kind hinter der Luke. Die Herberge nimmt Durchreisende, keine Wohnfamilie. Das Archiv hat vergitterte Fenster. Im Lager Kisten mit Zunftmarke, nicht mit Namen.
<<<

### B-gasse-gildengasse-scharf
- Ort: Gildengasse · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im Archiv brennt noch Licht, obwohl die Gasse zur Ruhe will. Eine Kiste im Lager trägt eine Marke, die nicht Drosselau ist.
<<<

### B-gasse-gildengasse-sl
- Ort: Gildengasse · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Holtz Meister. Eckert Schreiber. Keim keines, außer was der SL an Verträge hängt. Engine zieht niemanden.
<<<

### Gasse · Schmiedezeile

- id: `schmiedezeile` · Viertel: handwerk · grenzt an: marktplatz, gerbergasse
- 6 Häuser

### B-gasse-schmiedezeile-note
- Ort: Schmiedezeile · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>

<<<

### B-gasse-schmiedezeile-offen
- Ort: Schmiedezeile · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hitze, auch wenn das Feuer hinter der Tür liegt. Kohle, Eisen, ein Ton, den die Mauer kennt. Hufschmiede, Waffenschmiede, Wohnhäuser, Kohlenlager, Lehrling. Der Rauch zieht zum Markt, nicht aus der Stadt.
<<<

### B-gasse-schmiedezeile-grob
- Ort: Schmiedezeile · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Esse und Gestank von gelöschtem Eisen. Ein Hammer, nicht zwei. Die Gasse ist kürzer als ihr Lärm.
<<<

### B-gasse-schmiedezeile-teil
- Ort: Schmiedezeile · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hufschmiede Nr. 1, Waffe Nr. 2, Hammer wohnt Nr. 3, zwei Gesellen Nr. 4 (Ulric, Wolf, kein Tempel), Kohle Nr. 5, Lehrling Nagel Nr. 6. Wege: Marktplatz, Gerbergasse.
<<<

### B-gasse-schmiedezeile-voll
- Ort: Schmiedezeile · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bodo Hammer und Gerda in Nr. 3, Ilse fort nach Bögenhafen. Ulrich Stahl liefert der Wache. Wulf und Mark in Nr. 4 tragen den Wolf, nicht Sigmar. Timo Nagel, achtzehn, Neffe, eigenes Haus. Das Kohlenlager hat keine Wache, nur ein Schloss, das älter ist als der Lehrling.
<<<

### B-gasse-schmiedezeile-scharf
- Ort: Schmiedezeile · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
In der Waffenschmiede liegt ein Stück, das nicht in die Stadtwache gehört — zu lang, zu neu. Bei den Gesellen ein Amulett am Nagel, Ulric, blank gegriffen. Das Schloss am Kohlenlager ist kürzlich geölt.
<<<

### B-gasse-schmiedezeile-sl
- Ort: Schmiedezeile · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ulric unter den Gesellen, kein Tempel. Stahl beliefert Wache. Keim still, bis SL zieht. Engine zieht niemanden.
<<<

### Gasse · Weberweg

- id: `weberweg` · Viertel: handwerk · grenzt an: marktplatz, gildengasse, kraemerstrasse
- 5 Häuser

### B-gasse-weberweg-note
- Ort: Weberweg · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>

<<<

### B-gasse-weberweg-offen
- Ort: Weberweg · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Klopfen der Rahmen, nasser Wollegeruch, Farbe die in der Nase bleibt. Weberei, Schneiderei, Meisterhaus, Schneiderhaus, Färber. Der Weg ist sauberer als die Gerbergasse, enger als der Markt.
<<<

### B-gasse-weberweg-grob
- Ort: Weberweg · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wolle und Seife. Eine Frau schneidet hinter Glas. Der Rest ist Türen.
<<<

### B-gasse-weberweg-teil
- Ort: Weberweg · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Weberei Arbeit, Schneiderei Arbeit, Tuch wohnt Nr. 3, Schneider Nr. 4, Beize färbt Nr. 5. Markt, Gildengasse, Krämerstraße.
<<<

### B-gasse-weberweg-voll
- Ort: Weberweg · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eberhard Tuch, Lotte, Rike Gesellin. Else Schneider Meisterin, Pieter Geselle, zwei Kinder. Niko Beize und Wera in der Farbe, die Hände dauernd blau. Die Weberei ist Arbeit, nicht Wohnung — sie schlafen in Nr. 3.
<<<

### B-gasse-weberweg-scharf
- Ort: Weberweg · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
In der Färbe ein Bottich, der nicht nach Wolle riecht. Bei Schneider ein Ballen Tuch ohne Zunftmarke, hinten, zugedeckt.
<<<

### B-gasse-weberweg-sl
- Ort: Weberweg · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Schneider ist die im Originalverzeichnis namentlich so genannte Familie. Beize Messing. Engine zieht niemanden.
<<<

### Gasse · Krämerstraße

- id: `kraemerstrasse` · Viertel: handwerk · grenzt an: marktplatz, weberweg, schlemmergasse, bettelgasse
- 6 Häuser

### B-gasse-kraemerstrasse-note
- Ort: Krämerstraße · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>

<<<

### B-gasse-kraemerstrasse-offen
- Ort: Krämerstraße · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gemischtwaren, Kräuter, Wohnungen, eine Buchbinderei, ein leerer Hutladen. Die Straße hält, was die Stadt braucht, wenn sie nicht zum Markt will. Unter manchem Ladentisch liegt mehr als die Zunft erlaubt.
<<<

### B-gasse-kraemerstrasse-grob
- Ort: Krämerstraße · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Krämergeruch, trocken, und ein schärferer dahinter, den du nicht benennen solltest. Ein leeres Schaufenster ohne Hut.
<<<

### B-gasse-kraemerstrasse-teil
- Ort: Krämerstraße · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bode Krämer, Wurzel Kräuter, Wohnungen dahinter, Blatt bindet Bücher, Nr. 6 leer (ehemals Hüte). Markt, Weberweg, Schlemmergasse, Bettelgasse.
<<<

### B-gasse-kraemerstrasse-voll
- Ort: Krämerstraße · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hartmut Bode, Ida, Paul. Maren Wurzel und Jette — der Laden führt unter dem Tisch, was ein Hexenjäger nicht freundlich lesen würde. Simon Blatt bindet, Eva hilft. Der Hutladen ist ausgeräumt, die Stange noch da, kein Staub ganz gleichmäßig.
<<<

### B-gasse-kraemerstrasse-scharf
- Ort: Krämerstraße · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bei Wurzel ein Päckchen ohne Etikett, frisch gebunden. Im leeren Hutladen Fußspuren, kleiner als ein Mann, nicht älter als ein Tag. Bode hat hinter der Theke eine Liste, die nicht Preise sind.
<<<

### B-gasse-kraemerstrasse-sl
- Ort: Krämerstraße · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kräuter-Keim still (Hexenjäger-Subtext). Hutladen leer. Engine zieht niemanden. SL entscheidet, was unter dem Tisch liegt, wenn jemand kauft.
<<<

### Gasse · Gerbergasse

- id: `gerbergasse` · Viertel: handwerk · grenzt an: schmiedezeile, toepfergasse, rattenwinkel
- 4 Häuser

### B-gasse-gerbergasse-note
- Ort: Gerbergasse · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Stadtrand, Gestank
<<<

### B-gasse-gerbergasse-offen
- Ort: Gerbergasse · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Gestank erklärt, warum die Gasse am Rand liegt. Lohe, nasse Haut, Krankheiten, die hier häufiger kursieren. Gerberei, Meisterhaus, Gesellen, Schuppen für Häute. Die Mauer ist nah.
<<<

### B-gasse-gerbergasse-grob
- Ort: Gerbergasse · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Nase gibt den Rest auf. Türen, ein Schuppen, niemand der winkt.
<<<

### B-gasse-gerbergasse-teil
- Ort: Gerbergasse · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gerberei, Meister, zwei Gesellen, Lagerschuppen. Schmiedezeile, Töpfergasse, Rattenwinkel.
<<<

### B-gasse-gerbergasse-voll
- Ort: Gerbergasse · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Meister wohnt neben der Grube. Die Gesellen husten, einer schlecht. Der Schuppen tropft, Häute in Reihen. Der Weg in den Rattenwinkel ist kürzer als einem lieb ist.
<<<

### B-gasse-gerbergasse-scharf
- Ort: Gerbergasse · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eine Haut im Schuppen trägt ein Zeichen, das nicht Zunft ist. Der hustende Geselle hat unter der Manschette etwas, das nach Salbe von Wurzel riecht, nicht nach Lohe.
<<<

### B-gasse-gerbergasse-sl
- Ort: Gerbergasse · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Krankheit als Keim, nicht als Automat. Rattenwinkel grenzt. Engine zieht niemanden.
<<<

### Gasse · Töpfergasse

- id: `toepfergasse` · Viertel: handwerk · grenzt an: gerbergasse, morrgasse
- 3 Häuser

### B-gasse-toepfergasse-note
- Ort: Töpfergasse · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>

<<<

### B-gasse-toepfergasse-offen
- Ort: Töpfergasse · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Drei Häuser, der Ofen wärmt die Gasse. Töpferei, Meister, Lehrling. Lehm an den Stufen, Rauch der nicht nach Eisen riecht.
<<<

### B-gasse-toepfergasse-grob
- Ort: Töpfergasse · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ofen, Lehm, eine enge Gasse. Der Lärm der Schmiedezeile ist weg.
<<<

### B-gasse-toepfergasse-teil
- Ort: Töpfergasse · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Töpferei mit Brennofen, Wohnhaus des Töpfers, Lehrling. Gerbergasse, Morrgasse.
<<<

### B-gasse-toepfergasse-voll
- Ort: Töpfergasse · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Meister brennt, der Lehrling trägt. Scherben vor der Tür, absichtlich, gegen Nässe. Die Morrgasse liegt nah genug, dass man Glocken nicht braucht, um den Friedhof zu wissen.
<<<

### B-gasse-toepfergasse-scharf
- Ort: Töpfergasse · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter den Scherben eine, die nicht hier gebrannt wurde — Glasur fremd. Der Lehrling hat nasse Knie, als wäre er am Friedhof gewesen, nicht am Ofen.
<<<

### B-gasse-toepfergasse-sl
- Ort: Töpfergasse · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Drei Häuser nur. Keim still. Engine zieht niemanden.
<<<

### Gasse · Morrgasse

- id: `morrgasse` · Viertel: schatten · grenzt an: toepfergasse, schlemmergasse
- 2 Häuser

### B-gasse-morrgasse-note
- Ort: Morrgasse · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
am Friedhof
<<<

### B-gasse-morrgasse-offen
- Ort: Morrgasse · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zwei Gebäude am Friedhof. Totengräberhaus, Morr-Kapelle. Die Gasse will keine dritte Stimme. Erde, Wachs, der Ritus, der Untote fernhalten soll — so sagt man in der Stadt, und niemand lacht dabei.
<<<

### B-gasse-morrgasse-grob
- Ort: Morrgasse · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stille, die nicht leer ist. Eine Kapelle, ein Haus, der Friedhof dahinter.
<<<

### B-gasse-morrgasse-teil
- Ort: Morrgasse · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Totengräber im Dienst des Morr-Kultes. Kapelle für Trauerfeiern. Töpfergasse, Schlemmergasse.
<<<

### B-gasse-morrgasse-voll
- Ort: Morrgasse · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Totengräber wohnt im Dienst, nicht aus Wahl. Die Kapelle ist klein, Morr schwarz, die Tür nicht zu. Frische Erde auf einem Hügel, der nicht alt genug für den Stein ist.
<<<

### B-gasse-morrgasse-scharf
- Ort: Morrgasse · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der frische Hügel hat keine Gaben. An der Kapellentür ein zweites Schloss, innen, das nicht zum Kult passt. Der Totengräber war heute schon zweimal draußen, die Stiefel zeigen es.
<<<

### B-gasse-morrgasse-sl
- Ort: Morrgasse · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Morr-Ritus als Notwendigkeit in der Fiktion. Keim: frischer Hügel ohne Stein — nur SL. Engine zieht niemanden.
<<<

### Gasse · Schlemmergasse

- id: `schlemmergasse` · Viertel: markt · grenzt an: marktplatz, kraemerstrasse, morrgasse, bettelgasse
- 3 Häuser

### B-gasse-schlemmergasse-note
- Ort: Schlemmergasse · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>

<<<

### B-gasse-schlemmergasse-offen
- Ort: Schlemmergasse · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Drei Häuser, und die Gasse will fröhlich sein. Taverne, Vergnügungshaus, Wohnung des Wirts. Bier, billiges Öl, Stimmen die nicht zum Tempel gehören. Im Hinterzimmer der Taverne hängt, was die Stadt nicht an die Tür schreibt.
<<<

### B-gasse-schlemmergasse-grob
- Ort: Schlemmergasse · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Lachen hinter Holz. Ein Geruch nach Bier und etwas Süßem. Die Wohnung darüber ist still.
<<<

### B-gasse-schlemmergasse-teil
- Ort: Schlemmergasse · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Taverne, Vergnügung, Wirt. Marktplatz, Krämerstraße, Morrgasse, Bettelgasse. Nicht der Wanderer — das ist Torstraße.
<<<

### B-gasse-schlemmergasse-voll
- Ort: Schlemmergasse · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Wirt wohnt in Nr. 3. Die Taverne hat ein Hinterzimmer, dessen Tür nicht für jeden gilt. Ranald hängt dort, klein, ohne Schild. Das Vergnügungshaus hat gelbe Vorhänge, die bei Tag nicht helfen.
<<<

### B-gasse-schlemmergasse-scharf
- Ort: Schlemmergasse · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im Hinterzimmer zwei Tassen, noch warm, und ein dritter Platz ohne Tasse. Hinter dem Vergnügungshaus eine Luke in den Keller, nicht verriegelt. Der Wirt kennt Arne, und Arne kennt die Gasse, und keiner von beiden sagt das am Tor.
<<<

### B-gasse-schlemmergasse-sl
- Ort: Schlemmergasse · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ranald-Schrein Keim still. Nicht verwechseln mit Zum Wanderer. Engine zieht niemanden. SL spielt, wer im Hinterzimmer sitzt.
<<<

### Gasse · Bettelgasse

- id: `bettelgasse` · Viertel: schatten · grenzt an: torstrasse, kraemerstrasse, schlemmergasse, rattenwinkel
- 8 Häuser

### B-gasse-bettelgasse-note
- Ort: Bettelgasse · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Armenviertel
<<<

### B-gasse-bettelgasse-offen
- Ort: Bettelgasse · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Innerhalb der Mauer, und trotzdem Armut. Acht Nummern, davon drei leer, eine vernagelt, eine mit dem Ruf, sie spuke. Hütten, ein Brunnen, nasse Wäsche die nicht trocknet. Die Torstraße ist nah und hilft nicht.
<<<

### B-gasse-bettelgasse-grob
- Ort: Bettelgasse · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eng, nass, zu viele Türen für zu wenig Rauch. Der Brunnen hat einen Rand, den Kinder glatt getreten haben.
<<<

### B-gasse-bettelgasse-teil
- Ort: Bettelgasse · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bewohnt: Tagelöhner, Witwe, Bettlerclique, noch ein Tagelöhner. Leer: Dach, vernagelt, „spukt“. Brunnen Nr. 8. Torstraße, Krämerstraße, Schlemmergasse, Rattenwinkel.
<<<

### B-gasse-bettelgasse-voll
- Ort: Bettelgasse · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nr. 3 die Clique — munkele Kult, niemand beweist. Nr. 6 der Spuk, die Nachbarn gehen außen rum. Der Brunnen ist Gemeinschaft, das Wasser nicht immer klar. Hanni würde hier eine Ecke suchen, ohne Schuld; die Gasse gibt keine, die nichts kostet.
<<<

### B-gasse-bettelgasse-scharf
- Ort: Bettelgasse · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
An Nr. 6 Kratzer innen an der vernagelten Nachbartür, nicht außen. Bei der Clique ein Zeichen unter der Schwelle, frisch, nicht Ranald. Der Brunnen hat am Grund etwas Hellen, das kein Stein ist.
<<<

### B-gasse-bettelgasse-sl
- Ort: Bettelgasse · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kult-Keim in Nr. 3 still. Spuk Nr. 6 still. Hanni shortGoal: warme Ecke ohne Schuld. Engine zieht niemanden.
<<<

### Gasse · Rattenwinkel

- id: `rattenwinkel` · Viertel: schatten · grenzt an: bettelgasse, gerbergasse
- 2 Häuser

### B-gasse-rattenwinkel-note
- Ort: Rattenwinkel · kurze Lage
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
letzte Gasse
<<<

### B-gasse-rattenwinkel-offen
- Ort: Rattenwinkel · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die letzte Gasse. Zwei Häuser, beide falsch. Eine verfallene Wohnhütte, der letzte Bewohner vor Jahren spurlos. Daneben das letzte leerstehende Gebäude der Stadt: Ratten, Kratzgeräusche unter dem Boden, ein Geruch wie Verwesung. Nachbarn meiden den Winkel. Ob Aberglaube oder nicht — das entscheidet nicht die Gasse.
<<<

### B-gasse-rattenwinkel-grob
- Ort: Rattenwinkel · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zu still für Ratten, und trotzdem Ratten. Der Winkel nimmt das Licht nicht an.
<<<

### B-gasse-rattenwinkel-teil
- Ort: Rattenwinkel · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zwei Leerstände. Gerbergasse, Bettelgasse. Kein drittes Haus. Kein Schild.
<<<

### B-gasse-rattenwinkel-voll
- Ort: Rattenwinkel · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nr. 1 eingefallen, die Tür hängt. Nr. 2 steht, und das ist schlimmer. Die Ratten sind fett. Der Geruch kommt nicht nur aus dem Keller. Niemand hat hier in diesem Jahr Holz nachgelegt.
<<<

### B-gasse-rattenwinkel-scharf
- Ort: Rattenwinkel · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter Nr. 2 ein Gang, kein Kellerloch — die Kratzer sind zu regelmäßig für Ungeziefer. In Nr. 1 unter einem Brett ein Löffel, nicht alt genug für „vor Jahren“. Jemand war hier, seit der letzte Bewohner „spurlos“ ist.
<<<

### B-gasse-rattenwinkel-sl
- Ort: Rattenwinkel · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
SL-Entscheidung: Aberglaube oder Skaven/Nurgle/Kult. Keim feuerte nie von selbst. Engine erfindet nichts. Nicht öffnen, solange die Torstraße die Frage ist.
<<<

## Häuser

#### Vorstadtring 1 — Bettlerhütte

### B-haus-vorstadtring-1-offen
- Ort: Vorstadtring 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bettlerhütte am Ring. Lehm, nasses Stroh, ein Tuch statt Tür. Laus, wenn der SL ihn setzt. Ausgang der Vorstadtring.
<<<

### B-haus-vorstadtring-1-grob
- Ort: Vorstadtring 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Dunkel, nass, ein Geruch nach Mensch der lange nicht gewaschen hat.
<<<

### B-haus-vorstadtring-1-teil
- Ort: Vorstadtring 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum. Eine Schale, ein Nagel, kein zweites Lager.
<<<

### B-haus-vorstadtring-1-voll
- Ort: Vorstadtring 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Laus, dreißig, allein, Messing 0. Die Schuhe an der Schwelle sind die einzigen. Kein Feuer heute.
<<<

### B-haus-vorstadtring-1-scharf
- Ort: Vorstadtring 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter dem Stroh ein Groschen, durchgelocht, an einem Faden. Nicht zum Zahlen.
<<<

### B-haus-vorstadtring-1-sl
- Ort: Vorstadtring 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Laus. Allein. Engine zieht niemanden.
<<<

#### Vorstadtring 2 — Hütte eines Tagelöhners

### B-haus-vorstadtring-2-offen
- Ort: Vorstadtring 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hütte der Moos. Rauch aus einem Rohr, Kindergeschrei hinter der Luke, Sumpf noch in der Luft. Jaan, Sanna, Birk, wenn der SL sie setzt. Ausgang der Ring.
<<<

### B-haus-vorstadtring-2-grob
- Ort: Vorstadtring 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Rauch, eine Luke, sonst nichts das sich hält.
<<<

### B-haus-vorstadtring-2-teil
- Ort: Vorstadtring 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum vorn, einer hinten. Drei Stimmen, oder keine, je nach dem was der SL legt.
<<<

### B-haus-vorstadtring-2-voll
- Ort: Vorstadtring 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Jaan 34, Sanna 31, Birk 8. Aus dem Sumpf. Die Sprache hängt. An der Wand ein Netz, nass, nicht zum Fisch.
<<<

### B-haus-vorstadtring-2-scharf
- Ort: Vorstadtring 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im Netz hängt Kraut, das hier nicht wächst. Birk hat den Torbogen von weitem gesehen, nicht die Hütte.
<<<

### B-haus-vorstadtring-2-sl
- Ort: Vorstadtring 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Moos. Sumpf. Engine zieht niemanden.
<<<

#### Vorstadtring 3 — Fuhrmannsschuppen

### B-haus-vorstadtring-3-offen
- Ort: Vorstadtring 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Fuhrmannsschuppen der Karr. Wagen, Ochse, nasses Holz. Hier wohnt niemand — Hannes schläft Torstraße 5. Ausgang der Ring.
<<<

### B-haus-vorstadtring-3-grob
- Ort: Vorstadtring 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Holz, Dung, ein Schatten der ein Rad sein könnte.
<<<

### B-haus-vorstadtring-3-teil
- Ort: Vorstadtring 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zwei Wagen, einer ohne Plane. Geschirr an Nägeln. Ein Ochse, oder die Wärme die er lässt.
<<<

### B-haus-vorstadtring-3-voll
- Ort: Vorstadtring 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Schuppen gehört Hannes Karr. Der Wagen für den Tross steht nicht. Peitsche an der Wand, dieselbe Form wie in der Stube in der Torstraße.
<<<

### B-haus-vorstadtring-3-scharf
- Ort: Vorstadtring 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zweiter Satz Radspuren, schmaler als Karrs Wagen, frisch im Dreck. Unter der Plane ein Strick, der nicht zum Geschirr passt.
<<<

### B-haus-vorstadtring-3-sl
- Ort: Vorstadtring 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Karr Arbeit. Wohnen Tor 5. Engine zieht niemanden.
<<<

#### Vorstadtring 4 — Hütte einer Wäscherin

### B-haus-vorstadtring-4-offen
- Ort: Vorstadtring 4 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hütte der Blau. Wäsche hängt, trocknet nicht. Lauge, nasse Wolle. Hilde, Anni, wenn der SL sie setzt. Ausgang der Ring.
<<<

### B-haus-vorstadtring-4-grob
- Ort: Vorstadtring 4 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nass, Seife, ein Tuch im Gesicht.
<<<

### B-haus-vorstadtring-4-teil
- Ort: Vorstadtring 4 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Kessel, eine Leine, zwei Schlafstellen. Das Wasser kommt vom Ring, nicht vom Brunnen in der Stadt.
<<<

### B-haus-vorstadtring-4-voll
- Ort: Vorstadtring 4 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hilde 36, Anni 12. Messing 2. Die Wäsche trägt Zeichen der Torstraße, nicht des Rings — sie waschen für innen.
<<<

### B-haus-vorstadtring-4-scharf
- Ort: Vorstadtring 4 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
In einem Hemd, das nicht der Ring zahlt, steckt ein Zettel: ein Name, der nicht Blau ist.
<<<

### B-haus-vorstadtring-4-sl
- Ort: Vorstadtring 4 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Blau. Engine zieht niemanden.
<<<

#### Vorstadtring 5 — Leerstehende Hütte (Dach) · leer

### B-haus-vorstadtring-5-offen
- Ort: Vorstadtring 5 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leerstehende Hütte. Das Dach trägt nicht. Tropfen in den Lehm. Niemand wohnt. Ausgang der Ring.
<<<

### B-haus-vorstadtring-5-grob
- Ort: Vorstadtring 5 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nass, Dunkel, nichts das antwortet.
<<<

### B-haus-vorstadtring-5-teil
- Ort: Vorstadtring 5 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leerstand. Das Gebälk hängt. Die Nachbarn gehen außen rum.
<<<

### B-haus-vorstadtring-5-voll
- Ort: Vorstadtring 5 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Leere ist vollständig. Wer hier wohnte, hat nichts gelassen das einen Namen trägt.
<<<

### B-haus-vorstadtring-5-scharf
- Ort: Vorstadtring 5 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im Lehm ein Absatz, frisch, kleiner als ein Mann. Jemand war hier nach dem letzten Regen.
<<<

### B-haus-vorstadtring-5-sl
- Ort: Vorstadtring 5 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer. Kein Keim. Engine zieht niemanden.
<<<

#### Vorstadtring 6 — Leerstehende Hütte (Ranald-Zeichen) · leer

### B-haus-vorstadtring-6-offen
- Ort: Vorstadtring 6 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leerstehende Hütte. An der Tür ein verwittertes Zeichen, Katze oder Ranald. Niemand wohnt. Ausgang der Ring.
<<<

### B-haus-vorstadtring-6-grob
- Ort: Vorstadtring 6 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Tür, Farbe die runter ist, sonst nichts.
<<<

### B-haus-vorstadtring-6-teil
- Ort: Vorstadtring 6 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer. Das Zeichen sitzt innen und außen. Die Nachbarn nennen es nicht.
<<<

### B-haus-vorstadtring-6-voll
- Ort: Vorstadtring 6 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Das Zeichen ist alt. Ranald oder Warnung, die Farbe ist runter. Drinnen Staub, keine Schlafstelle.
<<<

### B-haus-vorstadtring-6-scharf
- Ort: Vorstadtring 6 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Das Zeichen ist von innen nachgezogen worden, nicht nur verwittert. Unter der Schwelle ein zweites, frisch, kleiner.
<<<

### B-haus-vorstadtring-6-sl
- Ort: Vorstadtring 6 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer. Ranald-Keim still — nur SL zieht. Engine zieht niemanden.
<<<

### B-keim-ranald-zeichen
- Ort: Vorstadtring 6 · Keim Ranald-Zeichen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Verwittertes Zeichen an der Tür. Diebesglück oder Warnung. SL entscheidet, ob es zählt.
<<<

#### Torstraße 1 — Zollhaus

### B-haus-torstrasse-1-offen
- Ort: Torstraße 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Das Zollhaus der Torstraße. Innen eine Diele, eine Luke zur Gasse, ein Tisch mit Torbuch, eine Bank, an der niemand sitzt. Der Geruch nach nasser Wolle und Tinte. Ausgang wieder auf die Torstraße. Arne Helm ist der Dienst, nicht das Haus.
<<<

### B-haus-torstrasse-1-grob
- Ort: Torstraße 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Diele, Tisch, das Buch zugeklappt, sobald du siehst. Die Luke fällt. Mehr gibt der Raum nicht, während er zählt.
<<<

### B-haus-torstrasse-1-teil
- Ort: Torstraße 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Torbuch, Kreide an der Innenseite der Luke, ein Haken für den Helm, die Handwaffe in Reichweite, nicht gezogen. Keine zweite Wache im Raum. Eine Tür nach hinten, geschlossen.
<<<

### B-haus-torstrasse-1-voll
- Ort: Torstraße 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Das Buch hat die fünf schon in einer Zeile, die Namen noch leer, die Zahl nicht. Hinter der hinteren Tür ein kleiner Raum: Stempel, eine Kasse in Groschen, ein Haken mit einem zweiten Riemen ohne Waffe. Das Fenster zur Nr. 8 ist blind, Vorhang.
<<<

### B-haus-torstrasse-1-scharf
- Ort: Torstraße 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter dem Torbuch ein zweites Blatt: Merkmale, nicht Namen — Narben, Gang, der Zwerg extra. Die Kasse ist ärmer als ein Zolltag sein sollte. An der hinteren Tür Lehm, der nicht von der Torstraße stammt.
<<<

### B-haus-torstrasse-1-sl
- Ort: Torstraße 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Arne Dienst. Mutation/Waffen-Keim nur SL. Kasse und zweites Blatt nur scharf oder wenn SL es legt. Engine zieht Arne nicht noch einmal.
<<<

### B-keim-zoll-mutation
- Ort: Torstraße 1 · Keim Torwache prüft
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wegezoll in Groschen. Wache prüft Waffen und Mutationsmerkmale. Kein Automat.
<<<

#### Torstraße 2 — Gasthaus „Zum Wanderer“

### B-haus-torstrasse-2-offen
- Ort: Torstraße 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zum Wanderer. Diele, Feuer das nicht groß ist, der Geruch nach Bier und gekochtem Kraut. Detlef Krug hinter der Theke, wenn der SL ihn zieht. Nicht die Taverne der Schlemmergasse. Ausgang die Torstraße.
<<<

### B-haus-torstrasse-2-grob
- Ort: Torstraße 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wärme, Dunst, eine Theke. Stimmen, die verstummen, wenn die Tür fällt.
<<<

### B-haus-torstrasse-2-teil
- Ort: Torstraße 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Theke, zwei Tische, eine Treppe nach oben. Mara in der Küche hörbar. Ben, dreizehn, Zapfen.
<<<

### B-haus-torstrasse-2-voll
- Ort: Torstraße 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Krug Silber 1. Zimmer oben für Durchreisende, heute keines frei das sich so nennt — die Türen sind zu. An der Wand ein Brett mit Namen, die nicht mehr kommen.
<<<

### B-haus-torstrasse-2-scharf
- Ort: Torstraße 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Name auf dem Brett ist durchgestrichen, frisch. Hinter der Theke eine Flasche ohne Etikett, für Gäste die nicht zahlen wie andere.
<<<

### B-haus-torstrasse-2-sl
- Ort: Torstraße 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Krug: Detlef 43, Mara 39, Ben 13. Engine zieht niemanden.
<<<

#### Torstraße 3 — Bäckerei

### B-haus-torstrasse-3-offen
- Ort: Torstraße 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Bäckerei Laib. Hitze, Mehl in der Luft, der Laden ist die Wohnung. Gerd, Hanne, Lina wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-torstrasse-3-grob
- Ort: Torstraße 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Dampf und Brot. Die Theke, sonst nichts, die Augen tränen vom Ofen.
<<<

### B-haus-torstrasse-3-teil
- Ort: Torstraße 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ofen hinten, ein Brett mit Laiben, nicht mit Kuchen. Kinderspuren im Mehl.
<<<

### B-haus-torstrasse-3-voll
- Ort: Torstraße 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gerd 41, Hanne 38, Lina 10. Der Ofen war vor der Frist schon an. Ein zweites Brett ist leer — Mehl knapp, oder der Tross kauft nicht.
<<<

### B-haus-torstrasse-3-scharf
- Ort: Torstraße 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hinterm Ofen ein Sack ohne Zunftsiegel. Lina hat von der Luke aus auf den Torbogen gesehen, nicht auf den Teig.
<<<

### B-haus-torstrasse-3-sl
- Ort: Torstraße 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Laib. Engine zieht niemanden.
<<<

#### Torstraße 4 — Fleischerei

### B-haus-torstrasse-4-offen
- Ort: Torstraße 4 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Fleischerei Metz. Kalt trotz der Straße. Konrad, Rita, Jan Geselle. Haken, ein Block, der Geruch der bleibt. Ausgang die Gasse.
<<<

### B-haus-torstrasse-4-grob
- Ort: Torstraße 4 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kälte, Eisen, der Block. Die Straße ist weg, sobald die Tür fällt.
<<<

### B-haus-torstrasse-4-teil
- Ort: Torstraße 4 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Haken halb leer. Jan in der Schürze, Konrad nicht vorn.
<<<

### B-haus-torstrasse-4-voll
- Ort: Torstraße 4 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Konrad 45, Rita 42, Jan 17. Das Fleisch ist von dieser Woche, nicht von gestern. Ein Haken ohne Ware, blank geputzt.
<<<

### B-haus-torstrasse-4-scharf
- Ort: Torstraße 4 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der blanke Haken war heute benutzt, das Fett am Boden ist frisch gewischt, nicht alt. Rita zählt nicht laut.
<<<

### B-haus-torstrasse-4-sl
- Ort: Torstraße 4 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Metz. Engine zieht niemanden.
<<<

#### Torstraße 5 — Wohnhaus Fuhrunternehmer

### B-haus-torstrasse-5-offen
- Ort: Torstraße 5 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Karr. Fuhrunternehmer, Silber 1. Hannes, Berta, Ulf, Mina. Der Schuppen steht am Vorstadtring, nicht hier. Die Stube riecht nach Leder und nassem Tuch. Ausgang die Torstraße.
<<<

### B-haus-torstrasse-5-grob
- Ort: Torstraße 5 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, zu viele Stiefel an der Wand. Eine Frau, oder niemand, je nach dem, was der SL legt.
<<<

### B-haus-torstrasse-5-teil
- Ort: Torstraße 5 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnung, nicht Laden. Kinderzeug. Ein Fenster zur Gasse, das auf das Zollhaus sieht.
<<<

### B-haus-torstrasse-5-voll
- Ort: Torstraße 5 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hannes 40, Berta 37, Ulf 14, Mina 8. Der Wagen ist nicht hier. An der Wand eine Peitsche, die nicht für Kinder ist.
<<<

### B-haus-torstrasse-5-scharf
- Ort: Torstraße 5 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter der Bank ein Frachtzettel nach Altdorf, durchgerissen, Datum vor der Sperre.
<<<

### B-haus-torstrasse-5-sl
- Ort: Torstraße 5 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Karr Arbeit am Ring. Engine zieht niemanden.
<<<

#### Torstraße 6 — Wohnhaus Tagelöhnerfamilie

### B-haus-torstrasse-6-offen
- Ort: Torstraße 6 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Staub. Tagelöhner, Messing 2. Rudi, Nadja, Kilian, Fine. Eng, sauberer als die Bettelgasse, ärmer als Karr. Ausgang die Gasse.
<<<

### B-haus-torstrasse-6-grob
- Ort: Torstraße 6 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Enge, Kohl, ein Kind das verstummt.
<<<

### B-haus-torstrasse-6-teil
- Ort: Torstraße 6 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum vorn, einer hinten. Vier Leute, zu wenig Stühle.
<<<

### B-haus-torstrasse-6-voll
- Ort: Torstraße 6 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Rudi 35, Nadja 32, Kilian 9, Fine 5. Die Schuhe an der Tür sind nass vom Tor, nicht vom Feld.
<<<

### B-haus-torstrasse-6-scharf
- Ort: Torstraße 6 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Rudi war am Zoll, bevor die fünf kamen — Lehm an den Säumen, derselbe wie an Arnes hinterer Tür.
<<<

### B-haus-torstrasse-6-sl
- Ort: Torstraße 6 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Staub. Engine zieht niemanden.
<<<

#### Torstraße 7 — Kramladen

### B-haus-torstrasse-7-offen
- Ort: Torstraße 7 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kramladen Docht. Kerzen, Seile, Sigmar-Amulette für Reisende. Ewald und Sigrid. Der Laden ist klein und will nützlich sein. Ausgang die Torstraße.
<<<

### B-haus-torstrasse-7-grob
- Ort: Torstraße 7 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wachs, Hanf, Metall klein. Die Scheibe beschlägt.
<<<

### B-haus-torstrasse-7-teil
- Ort: Torstraße 7 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Theke, drei Fächer, Amulette in einer Schale. Seil nach Gewicht.
<<<

### B-haus-torstrasse-7-voll
- Ort: Torstraße 7 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ewald 37, Sigrid 34. Die Amulette sind Guss, nicht geweiht. Ein Fach bleibt zu, obwohl der Laden offen ist.
<<<

### B-haus-torstrasse-7-scharf
- Ort: Torstraße 7 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im verschlossenen Fach keine Ware — eine Liste von Namen, die am Tor waren, in einer anderen Hand als Arnes.
<<<

### B-haus-torstrasse-7-sl
- Ort: Torstraße 7 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Docht. Liste nur wenn SL sie legt. Engine zieht niemanden.
<<<

#### Torstraße 8 — Wohnhaus Stadtwächter

### B-haus-torstrasse-8-offen
- Ort: Torstraße 8 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Helm. Arne wohnt hier, dient im Zollhaus. Dora, Finn. Silber 1, die Stube ordentlich, der Helm hängt nicht hier — er ist unter dem Arm am Tor. Ausgang die Torstraße.
<<<

### B-haus-torstrasse-8-grob
- Ort: Torstraße 8 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ordnung, wenig Schmuck. Eine Frau in der Tür oder die Tür nur einen Spalt, je nachdem, wen der SL setzt.
<<<

### B-haus-torstrasse-8-teil
- Ort: Torstraße 8 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, eine Kammer, Finns Kleid am Nagel, sieben Jahre. Das Fenster sieht aufs Zollhaus.
<<<

### B-haus-torstrasse-8-voll
- Ort: Torstraße 8 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Dora 35, Finn 7. Arne ist nicht im Haus. Auf dem Tisch ein Teller, kalt, für einen Mann der nicht zum Essen kam. Sigmar an der Wand, klein.
<<<

### B-haus-torstrasse-8-scharf
- Ort: Torstraße 8 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Finn hat vom Fenster die fünf gezählt und der Mutter gesagt. Unter Arnes Nagel ein zweiter Schlüssel, nicht zum Zollhaus — kleiner, älter.
<<<

### B-haus-torstrasse-8-sl
- Ort: Torstraße 8 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Helm Wohnung. Arne ist in Szene am Zoll, nicht doppelt hier, bis SL ihn schickt. Engine zieht niemanden.
<<<

#### Torstraße 9 — Brunnenhaus

### B-haus-torstrasse-9-offen
- Ort: Torstraße 9 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Das Brunnenhaus. Öffentlich, niemand wohnt. Stein, nasser Rand, der Eimer schwer. Das Wasser ist trinkbar, wenn die Stadt das sagt. Ausgang die Torstraße.
<<<

### B-haus-torstrasse-9-grob
- Ort: Torstraße 9 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stein, Wasser, dein Gesicht unklar darin.
<<<

### B-haus-torstrasse-9-teil
- Ort: Torstraße 9 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kein Dach das schützt. Rinnen zum Pflaster. Keine Schale, kein Schild.
<<<

### B-haus-torstrasse-9-voll
- Ort: Torstraße 9 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Rand ist glatt von Händen. Unten kein Unrat, der Brunnen wird gehalten. Vom Rand siehst du den Torbogen und die Luke.
<<<

### B-haus-torstrasse-9-scharf
- Ort: Torstraße 9 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Am Innenstein ein Ritz, frisch: fünf Striche, nicht Kreide. Jemand hat hier gezählt, bevor Arne rauskam.
<<<

### B-haus-torstrasse-9-sl
- Ort: Torstraße 9 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand wohnt. Ritz nur scharf oder SL. Engine zieht niemanden.
<<<

#### Marktplatz 1 — Kaufmannsgilde

### B-haus-marktplatz-1-offen
- Ort: Marktplatz 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kaufmannsgilde. Schwere Tür, Wachs, Holz das nach Geld riecht. Wilhelm Holtz Sitz, nicht Wohnung. Ausgang der Platz.
<<<

### B-haus-marktplatz-1-grob
- Ort: Marktplatz 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Schild, Schwelle, Stimmen hinter Holz.
<<<

### B-haus-marktplatz-1-teil
- Ort: Marktplatz 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Diele, eine Tafel mit Namen, eine Tür zu den Meistern. Kein Markt draußen in der Diele.
<<<

### B-haus-marktplatz-1-voll
- Ort: Marktplatz 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Holtz Meister sitzt hier, wohnt Gildengasse 2. Die Tafel trägt Holtz, Voss, Heller, Bode. Silber ohne Scham an den Beschlägen.
<<<

### B-haus-marktplatz-1-scharf
- Ort: Marktplatz 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Name auf der Tafel ist blasser: die auswärtige Kompanie, durchgestrichen, nicht abgeschabt.
<<<

### B-haus-marktplatz-1-sl
- Ort: Marktplatz 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gilde, kein Wohnen. Engine zieht niemanden.
<<<

#### Marktplatz 2 — Handwerkerzunft

### B-haus-marktplatz-2-offen
- Ort: Marktplatz 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Handwerkerzunft. Sammelhaus, Hammer und Tuch an einem Schild. Niemand wohnt. Ausgang der Platz.
<<<

### B-haus-marktplatz-2-grob
- Ort: Marktplatz 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Lärm gedämpft, ein Schild mit zu vielen Zeichen.
<<<

### B-haus-marktplatz-2-teil
- Ort: Marktplatz 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Halle, Bänke, Wappen der Gewerke. Eine Luke zum Archiv der Gildengasse, zu.
<<<

### B-haus-marktplatz-2-voll
- Ort: Marktplatz 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Sitz aller Handwerke. Hammer, Stahl, Tuch, Schneider, Beize, Metz, Laib, Leder, Ton. Keine Wohnfamilie.
<<<

### B-haus-marktplatz-2-scharf
- Ort: Marktplatz 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
An einem Wappen fehlt ein Nagel, frisch. Das Schild der Gerber hängt tiefer als die anderen.
<<<

### B-haus-marktplatz-2-sl
- Ort: Marktplatz 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Sammelzunft. Engine zieht niemanden.
<<<

#### Marktplatz 3 — Sigmarstempel

### B-haus-marktplatz-3-offen
- Ort: Marktplatz 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Sigmarstempel. Kalte Steine, Wachs, die Tür offen. Vater Brant Keil, Novize Jost, wenn der SL sie setzt. Ausgang der Platz.
<<<

### B-haus-marktplatz-3-grob
- Ort: Marktplatz 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stein, Echo, ein Hammer in der Nische den du nicht siehst, nur ahnst.
<<<

### B-haus-marktplatz-3-teil
- Ort: Marktplatz 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Schiff, Altar, eine Seitentür. Namen von Kranken an einem Brett, nicht von Toten.
<<<

### B-haus-marktplatz-3-voll
- Ort: Marktplatz 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Brant Keil 53, Jost 19. Stadtpatron. Das Brett ist neu. Keil liest nicht laut, solange der Platz Tag hat.
<<<

### B-haus-marktplatz-3-scharf
- Ort: Marktplatz 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Neben Sigmar ein kleines, neues Brett. Ein Name darauf ist durchgestrichen, gestern oder heute. Jost hat Kreide an den Fingern.
<<<

### B-haus-marktplatz-3-sl
- Ort: Marktplatz 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Keil, Jost. Engine zieht niemanden.
<<<

#### Marktplatz 4 — Geldwechsler

### B-haus-marktplatz-4-offen
- Ort: Marktplatz 4 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Geldwechsler Heller. Innere Luke, Metall, der Geruch nach Kupfer. Magnus, Ute, wenn der SL sie setzt. Ausgang der Platz.
<<<

### B-haus-marktplatz-4-grob
- Ort: Marktplatz 4 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Luke, Gitter, ein Ton von Münzen der aufhört, sobald die Tür fällt.
<<<

### B-haus-marktplatz-4-teil
- Ort: Marktplatz 4 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Theke, Waage, drei Fächer. Die innere Luke ist zu, obwohl der Platz Tag hat.
<<<

### B-haus-marktplatz-4-voll
- Ort: Marktplatz 4 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Magnus 44, Ute 40. Silber 3. Kronen, Schillinge, Groschen. Die Waage ist geeicht, das Siegel des Grafen hängt, der Graf nicht.
<<<

### B-haus-marktplatz-4-scharf
- Ort: Marktplatz 4 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hinter der Waage ein Streifen Papier ohne Summe — nur ein Zeichen, das nicht Heller ist.
<<<

### B-haus-marktplatz-4-sl
- Ort: Marktplatz 4 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Heller. Siegel hängt, Graf nicht da. Engine zieht niemanden.
<<<

#### Marktplatz 5 — Schreiberstube

### B-haus-marktplatz-5-offen
- Ort: Marktplatz 5 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Schreiberstube Feder. Tinte, Staub, Siegelwachs. Leopold Notar des Grafen, Agnes, wenn der SL sie setzt. Ausgang der Platz.
<<<

### B-haus-marktplatz-5-grob
- Ort: Marktplatz 5 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Federkiele, eine Glocke an der Tür, sonst nichts.
<<<

### B-haus-marktplatz-5-teil
- Ort: Marktplatz 5 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Pult, ein zweiter Tisch hinten, ein Schrank mit drei Schlössern. Das Siegel von Grünberg in einer Schale, sichtbar.
<<<

### B-haus-marktplatz-5-voll
- Ort: Marktplatz 5 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leopold 39, Agnes 34. Silber 2. Das Siegel des Grafen liegt hier, nicht der Graf. Agnes kopiert, Leopold beglaubigt.
<<<

### B-haus-marktplatz-5-scharf
- Ort: Marktplatz 5 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im Schrank ein Brief mit gebrochenem Siegel, nicht Grünberg — und trotzdem hier.
<<<

### B-haus-marktplatz-5-sl
- Ort: Marktplatz 5 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Feder. Siegel hier. Graf nicht in der Stadt. Engine zieht niemanden.
<<<

#### Marktplatz 6 — Ratshaus

### B-haus-marktplatz-6-offen
- Ort: Marktplatz 6 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ratshaus. Schwere Tür, das Wappen der Stadt, nicht des Grafen. Helmuth Talbeck Amt, wenn der SL ihn setzt. Ausgang der Platz.
<<<

### B-haus-marktplatz-6-grob
- Ort: Marktplatz 6 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Holz, Wappen, eine Stille die nicht zum Markt passt.
<<<

### B-haus-marktplatz-6-teil
- Ort: Marktplatz 6 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Diele, eine Treppe, die Ratsstube oben. Unten eine Bank für Bittsteller, leer.
<<<

### B-haus-marktplatz-6-voll
- Ort: Marktplatz 6 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Helmuth 46 Bürgermeister, Mathilde 42, Johann 18 Schreibergehilfe. Silber 5. Die Wohnung im Verzeichnis ungenannt — sie schlafen irgendwo im Haus.
<<<

### B-haus-marktplatz-6-scharf
- Ort: Marktplatz 6 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Auf der Bank ein Abdruck, noch warm. Johann hat die Tinte woanders als Feder.
<<<

### B-haus-marktplatz-6-sl
- Ort: Marktplatz 6 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Talbeck Amt. Wohnung ungenannt = hier. Engine zieht niemanden.
<<<

#### Marktplatz 7 — Wohnhaus Kaufmann

### B-haus-marktplatz-7-offen
- Ort: Marktplatz 7 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Holtz, der Sohn. Gut gebaut, Silber ohne Scham. Berthold, Saskia, die Kinder, wenn der SL sie setzt. Ausgang der Platz.
<<<

### B-haus-marktplatz-7-grob
- Ort: Marktplatz 7 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Glas, Vorhang, ein Geruch nach Wachs der teurer ist als Docht.
<<<

### B-haus-marktplatz-7-teil
- Ort: Marktplatz 7 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Diele, Stube, eine Treppe. Das Fenster sieht auf den Tempel, nicht auf das Kontor.
<<<

### B-haus-marktplatz-7-voll
- Ort: Marktplatz 7 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Berthold 30, Saskia 27, Emmerich 6, Liese 3. Silber 5. Vater Wilhelm in der Gildengasse 2. Der Sohn wohnt näher am Markt als der Meister.
<<<

### B-haus-marktplatz-7-scharf
- Ort: Marktplatz 7 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im Flur ein Kästchen mit der Marke der auswärtigen Kompanie, leer, nicht abgegeben.
<<<

### B-haus-marktplatz-7-sl
- Ort: Marktplatz 7 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Holtz Sohn. Vater Gildengasse 2. Engine zieht niemanden.
<<<

#### Marktplatz 8 — Wohnhaus Kaufmann

### B-haus-marktplatz-8-offen
- Ort: Marktplatz 8 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Voss. Kaufmann, andere Familie als Holtz. Kaspar, Hilda, wenn der SL sie setzt. Ausgang der Platz.
<<<

### B-haus-marktplatz-8-grob
- Ort: Marktplatz 8 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ordnung, weniger Silber als nebenan, immer noch mehr als die Torstraße.
<<<

### B-haus-marktplatz-8-teil
- Ort: Marktplatz 8 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Kontor hinten, eine Karte an der Wand die den Reik zeigt.
<<<

### B-haus-marktplatz-8-voll
- Ort: Marktplatz 8 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kaspar 41, Hilda 38, Pieter 15 auf der Reik. Silber 4. Die Karte hat Drosselau als Punkt, Altdorf als Ziel.
<<<

### B-haus-marktplatz-8-scharf
- Ort: Marktplatz 8 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Brief von Pieter, das Siegel nass — er schrieb, das Tor sei zu, bevor die Stadt es sagte.
<<<

### B-haus-marktplatz-8-sl
- Ort: Marktplatz 8 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Voss. Nicht Holtz. Engine zieht niemanden.
<<<

#### Marktplatz 9 — Wohnhaus Stadtrat

### B-haus-marktplatz-9-offen
- Ort: Marktplatz 9 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Stein. Stadtrat, ordentlich, kein Schild. Reiner, Klara, Anike, wenn der SL sie setzt. Ausgang der Platz.
<<<

### B-haus-marktplatz-9-grob
- Ort: Marktplatz 9 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Tür, Klingel, ein Geruch nach Bohnerwachs.
<<<

### B-haus-marktplatz-9-teil
- Ort: Marktplatz 9 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Diele, Stube, ein Fenster auf den Rat. Anike hat ein Buch auf der Bank, zugeklappt.
<<<

### B-haus-marktplatz-9-voll
- Ort: Marktplatz 9 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Reiner 48, Klara 43, Anike 16. Silber 3. Stein sitzt im Rat neben Talbeck. Das Buch ist Gesetz, nicht Gebet.
<<<

### B-haus-marktplatz-9-scharf
- Ort: Marktplatz 9 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zwischen den Seiten ein Zettel: Kontor Nr. 10, eine Frage, keine Antwort.
<<<

### B-haus-marktplatz-9-sl
- Ort: Marktplatz 9 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stein. Engine zieht niemanden.
<<<

#### Marktplatz 10 — Leerstehendes Kontor · leer

### B-haus-marktplatz-10-offen
- Ort: Marktplatz 10 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leerstehendes Kontor. Staub auf der Schwelle, die Klinke unberührt, ein Jahr. Niemand wohnt. Ausgang der Platz.
<<<

### B-haus-marktplatz-10-grob
- Ort: Marktplatz 10 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zu, Staub, der Platz ist weg sobald du siehst.
<<<

### B-haus-marktplatz-10-teil
- Ort: Marktplatz 10 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Tür ist zu. Schild abgehängt, der Nagel bleibt. Fenster blind.
<<<

### B-haus-marktplatz-10-voll
- Ort: Marktplatz 10 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Auswärtige Kompanie, seit einem Jahr weg. Keim. Feuert nicht von selbst. Der Staub vor der Klinke ist an einer Stelle gewischt.
<<<

### B-haus-marktplatz-10-scharf
- Ort: Marktplatz 10 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Wisch ist vorgestern oder gestern. Innen, durch den Spalt: ein Tisch ohne Stuhl, ein Fach offen.
<<<

### B-haus-marktplatz-10-sl
- Ort: Marktplatz 10 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kontor-Keim still. Engine zieht niemanden.
<<<

### B-keim-kontor-leer
- Ort: Marktplatz 10 · Keim Verlassener Handelsposten
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Auswärtige Kompanie, seit einem Jahr weg. Keim. Feuert nicht von selbst.
<<<

#### Gildengasse 1 — Lagerhaus der Zunft

### B-haus-gildengasse-1-offen
- Ort: Gildengasse 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Lagerhaus der Zunft. Kisten, Zunftmarke, niemand wohnt. Ausgang die Gildengasse.
<<<

### B-haus-gildengasse-1-grob
- Ort: Gildengasse 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Holz, Staub, ein Schloss.
<<<

### B-haus-gildengasse-1-teil
- Ort: Gildengasse 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gänge aus Kisten. Eine Marke pro Stapel. Fenster vergittert.
<<<

### B-haus-gildengasse-1-voll
- Ort: Gildengasse 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kisten mit Zunftmarke, nicht mit Namen. Eine trägt eine Marke, die nicht Drosselau ist, wenn der Blick scharf genug ist — sonst nicht.
<<<

### B-haus-gildengasse-1-scharf
- Ort: Gildengasse 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die fremde Marke ist dieselbe wie am Kontor Nr. 10, nur kleiner.
<<<

### B-haus-gildengasse-1-sl
- Ort: Gildengasse 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand wohnt. Engine zieht niemanden.
<<<

#### Gildengasse 2 — Wohnhaus Gildemeister

### B-haus-gildengasse-2-offen
- Ort: Gildengasse 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Holtz, der Meister. Das beste Haus der Gasse, Silber ohne Scham. Wilhelm, Elsa, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-gildengasse-2-grob
- Ort: Gildengasse 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Beschläge, Glas, ein Diener oder niemand.
<<<

### B-haus-gildengasse-2-teil
- Ort: Gildengasse 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Diele mit Stein, nicht Holz. Eine Treppe die nicht knarrt. Sohn wohnt am Markt, nicht hier.
<<<

### B-haus-gildengasse-2-voll
- Ort: Gildengasse 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wilhelm 54, Elsa 50. Silber 5. Bestes Haus. Berthold Markt 7. Holtz sitzt in der Gilde, schläft hier.
<<<

### B-haus-gildengasse-2-scharf
- Ort: Gildengasse 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im Flur ein zweiter Schlüsselbund, einer zum Archiv, einer der nicht zur Gasse passt.
<<<

### B-haus-gildengasse-2-sl
- Ort: Gildengasse 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Holtz Meister. Engine zieht niemanden.
<<<

#### Gildengasse 3 — Wohnhaus Gildeschreiber

### B-haus-gildengasse-3-offen
- Ort: Gildengasse 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Eckert. Schreiber der Gilde. Franz, Nela, Timo, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-gildengasse-3-grob
- Ort: Gildengasse 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Tinte schon an der Schwelle, ein Kind hinter der Luke oder keins.
<<<

### B-haus-gildengasse-3-teil
- Ort: Gildengasse 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Pult, Kinderspiel unter dem Tisch. Kleiner als Holtz, sauber.
<<<

### B-haus-gildengasse-3-voll
- Ort: Gildengasse 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Franz 36, Nela 33, Timo 9. Silber 1. Franz schreibt für die Gilde, nicht für den Grafen — das ist Feder.
<<<

### B-haus-gildengasse-3-scharf
- Ort: Gildengasse 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Auf dem Pult eine Abschrift ohne Kopf. Der Inhalt betrifft das Kontor, nicht die Zunft.
<<<

### B-haus-gildengasse-3-sl
- Ort: Gildengasse 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eckert. Engine zieht niemanden.
<<<

#### Gildengasse 4 — Herberge für Zunftbrüder

### B-haus-gildengasse-4-offen
- Ort: Gildengasse 4 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Herberge für Zunftbrüder. Bier, Durchreisende, keine Wohnfamilie. Ausgang die Gasse.
<<<

### B-haus-gildengasse-4-grob
- Ort: Gildengasse 4 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wärme, Dunst, Stimmen die verstummen.
<<<

### B-haus-gildengasse-4-teil
- Ort: Gildengasse 4 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Diele, Theke, Treppe zu Kammern. Heute keine Tür die sich so nennt — frei.
<<<

### B-haus-gildengasse-4-voll
- Ort: Gildengasse 4 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nimmt Durchreisende, keine Wohnfamilie. Nicht Zum Wanderer, nicht die Taverne. Zunftzeichen über der Theke.
<<<

### B-haus-gildengasse-4-scharf
- Ort: Gildengasse 4 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eine Kammer ist zu, von innen. Der Riegel ist nicht Zunft.
<<<

### B-haus-gildengasse-4-sl
- Ort: Gildengasse 4 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Keine Wohnfamilie. Engine zieht niemanden.
<<<

#### Gildengasse 5 — Zunftarchiv

### B-haus-gildengasse-5-offen
- Ort: Gildengasse 5 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zunftarchiv. Vergitterte Fenster, Staub, Verträge. Niemand wohnt. Ausgang die Gasse.
<<<

### B-haus-gildengasse-5-grob
- Ort: Gildengasse 5 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gitter, Staub, Licht das noch brennt oder nicht.
<<<

### B-haus-gildengasse-5-teil
- Ort: Gildengasse 5 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Regale, ein Pult, drei Schlüssel an einem Brett — einer fehlt.
<<<

### B-haus-gildengasse-5-voll
- Ort: Gildengasse 5 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Verträge, Meisterbriefe, Steuerlisten. Licht brennt noch, obwohl die Gasse zur Ruhe will.
<<<

### B-haus-gildengasse-5-scharf
- Ort: Gildengasse 5 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der fehlende Schlüssel hängt nicht. An seiner Stelle ein Abdruck, warm.
<<<

### B-haus-gildengasse-5-sl
- Ort: Gildengasse 5 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand wohnt. Engine zieht niemanden.
<<<

#### Schmiedezeile 1 — Hufschmiede

### B-haus-schmiedezeile-1-offen
- Ort: Schmiedezeile 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hufschmiede. Hitze, Esse, der Ton den die Mauer kennt. Arbeit der Hammer, wohnen Nr. 3. Ausgang die Zeile.
<<<

### B-haus-schmiedezeile-1-grob
- Ort: Schmiedezeile 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Glut, Gestank von gelöschtem Eisen, ein Hammer nicht zwei.
<<<

### B-haus-schmiedezeile-1-teil
- Ort: Schmiedezeile 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Esse, Amboss, ein Ring für Pferde. Die Wohnung ist die nächste Tür.
<<<

### B-haus-schmiedezeile-1-voll
- Ort: Schmiedezeile 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bodo Hammer arbeitet hier, schläft Nr. 3. Hufeisen an der Stange, heutige, nicht gestrige.
<<<

### B-haus-schmiedezeile-1-scharf
- Ort: Schmiedezeile 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Eisen trägt eine Marke, die nicht Drosselau ist — derselbe fremde Schlag wie im Lager.
<<<

### B-haus-schmiedezeile-1-sl
- Ort: Schmiedezeile 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hammer Arbeit. Wohnen Nr. 3. Engine zieht niemanden.
<<<

#### Schmiedezeile 2 — Waffenschmiede

### B-haus-schmiedezeile-2-offen
- Ort: Schmiedezeile 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Waffenschmiede Stahl. Kälter als die Hufe, der Stahl will es. Ulrich, Kathe, wenn der SL sie setzt. Ausgang die Zeile.
<<<

### B-haus-schmiedezeile-2-grob
- Ort: Schmiedezeile 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Öl, Kante, ein Geräusch das aufhört.
<<<

### B-haus-schmiedezeile-2-teil
- Ort: Schmiedezeile 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Esse, Ständer, Klingen ohne Griff. Ein Stück unter Tuch.
<<<

### B-haus-schmiedezeile-2-voll
- Ort: Schmiedezeile 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ulrich 49, Kathe 46. Silber 2. Beliefert die Wache. Wohnung ungenannt = Werkstatt.
<<<

### B-haus-schmiedezeile-2-scharf
- Ort: Schmiedezeile 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter dem Tuch ein Stück, das nicht in die Stadtwache gehört — zu lang, zu neu.
<<<

### B-haus-schmiedezeile-2-sl
- Ort: Schmiedezeile 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stahl. Wache. Engine zieht niemanden.
<<<

#### Schmiedezeile 3 — Wohnhaus Hufschmied

### B-haus-schmiedezeile-3-offen
- Ort: Schmiedezeile 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Hammer. Meisterhaus, rußig am Sims. Bodo, Gerda, wenn der SL sie setzt. Ausgang die Zeile.
<<<

### B-haus-schmiedezeile-3-grob
- Ort: Schmiedezeile 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ruß, Wärme die nicht die Esse ist, eine Frau oder niemand.
<<<

### B-haus-schmiedezeile-3-teil
- Ort: Schmiedezeile 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Kammer, ein leerer Nagel wo ein Mädchenkleid hing.
<<<

### B-haus-schmiedezeile-3-voll
- Ort: Schmiedezeile 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bodo 47, Gerda 44. Silber 2. Ilse 18 nach Bögenhafen verheiratet. Der Nagel bleibt.
<<<

### B-haus-schmiedezeile-3-scharf
- Ort: Schmiedezeile 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Brief aus Bögenhafen, das Siegel ungebrochen. Gerda hat ihn nicht geöffnet.
<<<

### B-haus-schmiedezeile-3-sl
- Ort: Schmiedezeile 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hammer Wohnung. Engine zieht niemanden.
<<<

#### Schmiedezeile 4 — Wohnhaus Schmiedegesellen

### B-haus-schmiedezeile-4-offen
- Ort: Schmiedezeile 4 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus der Gesellen Eisen. Zwei Männer, der Wolf an der Wand, nicht Sigmar. Wulf, Mark, wenn der SL sie setzt. Ausgang die Zeile.
<<<

### B-haus-schmiedezeile-4-grob
- Ort: Schmiedezeile 4 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bier, Eisen, ein Amulett das du nicht liest.
<<<

### B-haus-schmiedezeile-4-teil
- Ort: Schmiedezeile 4 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum, zwei Lager, ein Nagel mit Wolf. Kein Tempel in der Stadt für sie.
<<<

### B-haus-schmiedezeile-4-voll
- Ort: Schmiedezeile 4 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wulf 32, Mark 29. Messing 4. Ulric, kein Tempel. Das Amulett ist blank gegriffen.
<<<

### B-haus-schmiedezeile-4-scharf
- Ort: Schmiedezeile 4 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hinter dem Wolf ein zweites Zeichen, älter, nicht Ulric — zugedeckt.
<<<

### B-haus-schmiedezeile-4-sl
- Ort: Schmiedezeile 4 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eisen. Ulric unter den Gesellen, kein Tempel. Engine zieht niemanden.
<<<

#### Schmiedezeile 5 — Kohlenlager

### B-haus-schmiedezeile-5-offen
- Ort: Schmiedezeile 5 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kohlenlager. Schloss, Staub, niemand wohnt. Ausgang die Zeile.
<<<

### B-haus-schmiedezeile-5-grob
- Ort: Schmiedezeile 5 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Schwarz, trocken, ein Schloss das älter ist als der Lehrling.
<<<

### B-haus-schmiedezeile-5-teil
- Ort: Schmiedezeile 5 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stapel, eine Gasse dazwischen, das Schloss kürzlich geölt.
<<<

### B-haus-schmiedezeile-5-voll
- Ort: Schmiedezeile 5 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kohle der Meister, keine Köhlerfamilie. Das Schloss ist älter als Nagel, das Öl nicht.
<<<

### B-haus-schmiedezeile-5-scharf
- Ort: Schmiedezeile 5 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hinter dem hintersten Stapel ein Sack ohne Zunftsiegel, leichter als Kohle.
<<<

### B-haus-schmiedezeile-5-sl
- Ort: Schmiedezeile 5 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand. Engine zieht niemanden.
<<<

#### Schmiedezeile 6 — Wohnhaus Lehrling

### B-haus-schmiedezeile-6-offen
- Ort: Schmiedezeile 6 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Nagel. Lehrling, achtzehn, eigenes Haus, Neffe. Timo, wenn der SL ihn setzt. Ausgang die Zeile.
<<<

### B-haus-schmiedezeile-6-grob
- Ort: Schmiedezeile 6 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eng, Ruß, ein Bett das noch Lehrling ist.
<<<

### B-haus-schmiedezeile-6-teil
- Ort: Schmiedezeile 6 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum. Amboss klein, zum Üben. Kein zweites Lager.
<<<

### B-haus-schmiedezeile-6-voll
- Ort: Schmiedezeile 6 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Timo Nagel 18, Neffe von Hammer. Messing 3. Eigenes Haus. Die Esse in Nr. 1 ist nicht seine.
<<<

### B-haus-schmiedezeile-6-scharf
- Ort: Schmiedezeile 6 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter dem Brett ein Eisen, das er nicht dem Meister gezeigt hat — zu fein für Hufe.
<<<

### B-haus-schmiedezeile-6-sl
- Ort: Schmiedezeile 6 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nagel. Engine zieht niemanden.
<<<

#### Weberweg 1 — Weberei

### B-haus-weberweg-1-offen
- Ort: Weberweg 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Weberei. Klopfen der Rahmen, nasse Wolle. Arbeit der Tuch, wohnen Nr. 3. Ausgang der Weg.
<<<

### B-haus-weberweg-1-grob
- Ort: Weberweg 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wolle, Takt, Staub der in der Nase bleibt.
<<<

### B-haus-weberweg-1-teil
- Ort: Weberweg 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stühle, Ketten, ein Gang zur Wohnung. Niemand schläft zwischen den Rahmen.
<<<

### B-haus-weberweg-1-voll
- Ort: Weberweg 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eberhard Tuch arbeitet hier, schläft Nr. 3. Rike Gesellin, wenn der SL sie an den Stuhl setzt.
<<<

### B-haus-weberweg-1-scharf
- Ort: Weberweg 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Ballen ohne Zunftmarke, hinten, zugedeckt — nicht Tuch, eher Schneider.
<<<

### B-haus-weberweg-1-sl
- Ort: Weberweg 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Tuch Arbeit. Wohnen Nr. 3. Engine zieht niemanden.
<<<

#### Weberweg 2 — Schneiderei

### B-haus-weberweg-2-offen
- Ort: Weberweg 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Schneiderei. Eine Frau schneidet hinter Glas, oder das Glas ist leer. Arbeit der Schneider, wohnen Nr. 4. Ausgang der Weg.
<<<

### B-haus-weberweg-2-grob
- Ort: Weberweg 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Tuch, Kreide, eine Schere die aufhört.
<<<

### B-haus-weberweg-2-teil
- Ort: Weberweg 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Laden, Tische, eine Tür zur Wohnung. Maße an der Wand.
<<<

### B-haus-weberweg-2-voll
- Ort: Weberweg 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Else Schneider Meisterin arbeitet hier, schläft Nr. 4. Pieter Geselle. Einzige Familie, die im Original so heißt.
<<<

### B-haus-weberweg-2-scharf
- Ort: Weberweg 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Maß an der Wand ist Kind, nicht Frau — und keiner in Nr. 4 ist so klein mehr.
<<<

### B-haus-weberweg-2-sl
- Ort: Weberweg 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Schneider Arbeit. Wohnen Nr. 4. Engine zieht niemanden.
<<<

#### Weberweg 3 — Wohnhaus Webermeister

### B-haus-weberweg-3-offen
- Ort: Weberweg 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Tuch. Meisterhaus, Wolle noch in den Balken. Eberhard, Lotte, Rike, wenn der SL sie setzt. Ausgang der Weg.
<<<

### B-haus-weberweg-3-grob
- Ort: Weberweg 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wolle, Seife, eine Treppe.
<<<

### B-haus-weberweg-3-teil
- Ort: Weberweg 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Kammer der Gesellin, Webstuhl klein zum Abend.
<<<

### B-haus-weberweg-3-voll
- Ort: Weberweg 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eberhard 48, Lotte 45, Rike 20 Gesellin. Silber 2. Sie schlafen hier, arbeiten Nr. 1.
<<<

### B-haus-weberweg-3-scharf
- Ort: Weberweg 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Rikes Kammer hat ein Fenster zum Färber. Die Luke war heute offen, von innen.
<<<

### B-haus-weberweg-3-sl
- Ort: Weberweg 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Tuch Wohnung. Engine zieht niemanden.
<<<

#### Weberweg 4 — Wohnhaus Schneiderfamilie

### B-haus-weberweg-4-offen
- Ort: Weberweg 4 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Schneider. Else Meisterin, Pieter, zwei Kinder, wenn der SL sie setzt. Ausgang der Weg.
<<<

### B-haus-weberweg-4-grob
- Ort: Weberweg 4 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ordnung, Nadelkissen, Kinderspuren im Kreidestaub.
<<<

### B-haus-weberweg-4-teil
- Ort: Weberweg 4 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Werkstattabend, zwei Kammern. Lena, Karl.
<<<

### B-haus-weberweg-4-voll
- Ort: Weberweg 4 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Else 36 Meisterin, Pieter 38 Geselle, Lena 14, Karl 11. Silber 1. Einzige ausdrücklich so genannte Familie im Originalverzeichnis.
<<<

### B-haus-weberweg-4-scharf
- Ort: Weberweg 4 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter Lenas Kissen ein Ballenrest ohne Marke — derselbe Stoff wie hinten in der Schneiderei.
<<<

### B-haus-weberweg-4-sl
- Ort: Weberweg 4 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Schneider Wohnung. Engine zieht niemanden.
<<<

#### Weberweg 5 — Färberwerkstatt

### B-haus-weberweg-5-offen
- Ort: Weberweg 5 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Färberwerkstatt Beize. Farbe die in der Nase bleibt, Hände die dauernd blau sind. Niko, Wera, wenn der SL sie setzt. Ausgang der Weg.
<<<

### B-haus-weberweg-5-grob
- Ort: Weberweg 5 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nass, scharf, ein Bottich den du nicht benennen solltest.
<<<

### B-haus-weberweg-5-teil
- Ort: Weberweg 5 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bottiche, Leinen, Wohnung hinten in derselben Diele. Kein zweites Haus.
<<<

### B-haus-weberweg-5-voll
- Ort: Weberweg 5 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niko 35, Wera 32. Messing 5. Werkstatt = Wohnung. Die Hände bleiben blau.
<<<

### B-haus-weberweg-5-scharf
- Ort: Weberweg 5 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Bottich riecht nicht nach Wolle. Der Dampf ist süßer, und Wera steht nicht dort.
<<<

### B-haus-weberweg-5-sl
- Ort: Weberweg 5 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Beize. Engine zieht niemanden.
<<<

#### Krämerstraße 1 — Krämerladen

### B-haus-kraemerstrasse-1-offen
- Ort: Krämerstraße 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Krämerladen Bode. Gemischtwaren, trocken, was die Stadt braucht wenn sie nicht zum Markt will. Arbeit, wohnen Nr. 3. Ausgang die Straße.
<<<

### B-haus-kraemerstrasse-1-grob
- Ort: Krämerstraße 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Krämergeruch, Theke, Fächer.
<<<

### B-haus-kraemerstrasse-1-teil
- Ort: Krämerstraße 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Theke, Gänge, eine Tür zur Wohnung. Liste an der Wand, Preise.
<<<

### B-haus-kraemerstrasse-1-voll
- Ort: Krämerstraße 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hartmut Bode arbeitet hier, schläft Nr. 3. Hinter der Theke eine zweite Liste, wenn der Blick reicht — sonst nur Preise.
<<<

### B-haus-kraemerstrasse-1-scharf
- Ort: Krämerstraße 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die zweite Liste sind keine Preise. Namen, die am Tor waren, in einer Hand die nicht Arnes ist — oder Bode zählt anders.
<<<

### B-haus-kraemerstrasse-1-sl
- Ort: Krämerstraße 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bode Arbeit. Wohnen Nr. 3. Engine zieht niemanden.
<<<

#### Krämerstraße 2 — Kräuterhandlung

### B-haus-kraemerstrasse-2-offen
- Ort: Krämerstraße 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kräuterhandlung Wurzel. Trocken vorn, schärfer dahinter, den du nicht benennen solltest. Maren, wenn der SL sie setzt. Wohnen Nr. 4. Ausgang die Straße.
<<<

### B-haus-kraemerstrasse-2-grob
- Ort: Krämerstraße 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kraut, Staub, eine Schale.
<<<

### B-haus-kraemerstrasse-2-teil
- Ort: Krämerstraße 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Regale, Theke, ein Tuch über dem unteren Fach. Jette nicht vorn.
<<<

### B-haus-kraemerstrasse-2-voll
- Ort: Krämerstraße 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Maren arbeitet hier, schläft Nr. 4. Unter dem Ladentisch liegt, was ein Hexenjäger nicht freundlich läse. Keim still.
<<<

### B-haus-kraemerstrasse-2-scharf
- Ort: Krämerstraße 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Päckchen ohne Etikett, frisch gebunden. Der Geruch ist nicht Heilkraut.
<<<

### B-haus-kraemerstrasse-2-sl
- Ort: Krämerstraße 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wurzel Arbeit. Keim still. SL entscheidet, was unter dem Tisch liegt, wenn jemand kauft. Engine zieht niemanden.
<<<

### B-keim-kraeuter-ladentisch
- Ort: Krämerstraße 2 · Keim Unter dem Ladentisch
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Mittel, die ein Hexenjäger argwöhnisch sähe. Feuert nicht von selbst.
<<<

#### Krämerstraße 3 — Wohnhaus Krämer

### B-haus-kraemerstrasse-3-offen
- Ort: Krämerstraße 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Bode. Hinter dem Laden, Silber 1. Hartmut, Ida, Paul, wenn der SL sie setzt. Ausgang die Straße.
<<<

### B-haus-kraemerstrasse-3-grob
- Ort: Krämerstraße 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnung, Brot, ein Kind das verstummt.
<<<

### B-haus-kraemerstrasse-3-teil
- Ort: Krämerstraße 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Kammer, eine Tür die in den Laden geht ohne die Gasse.
<<<

### B-haus-kraemerstrasse-3-voll
- Ort: Krämerstraße 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hartmut 42, Ida 39, Paul 12. Silber 1. Die Tür zum Laden spart die Straße.
<<<

### B-haus-kraemerstrasse-3-scharf
- Ort: Krämerstraße 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Paul hat unter dem Bett eine Schale Kraut, nicht aus Nr. 1 — aus Nr. 2.
<<<

### B-haus-kraemerstrasse-3-sl
- Ort: Krämerstraße 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Bode Wohnung. Engine zieht niemanden.
<<<

#### Krämerstraße 4 — Wohnhaus Kräuterhändlerin

### B-haus-kraemerstrasse-4-offen
- Ort: Krämerstraße 4 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Wurzel. Hinter der Kräuterhandlung. Maren, Jette, wenn der SL sie setzt. Ausgang die Straße.
<<<

### B-haus-kraemerstrasse-4-grob
- Ort: Krämerstraße 4 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kraut auch hier, schwächer, ein Mädchen oder niemand.
<<<

### B-haus-kraemerstrasse-4-teil
- Ort: Krämerstraße 4 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Kammer, Bündel an der Decke. Messing 5, nicht Silber.
<<<

### B-haus-kraemerstrasse-4-voll
- Ort: Krämerstraße 4 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Maren 40, Jette 16. Messing 5. Jette hilft, steht nicht vorn.
<<<

### B-haus-kraemerstrasse-4-scharf
- Ort: Krämerstraße 4 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
An Jettes Nagel ein Amulett, nicht Sigmar, nicht Morr. Blank gegriffen.
<<<

### B-haus-kraemerstrasse-4-sl
- Ort: Krämerstraße 4 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wurzel Wohnung. Engine zieht niemanden.
<<<

#### Krämerstraße 5 — Buchbinderei

### B-haus-kraemerstrasse-5-offen
- Ort: Krämerstraße 5 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Buchbinderei Blatt. Leim, Leder, Papier. Simon, Eva, wenn der SL sie setzt. Ausgang die Straße.
<<<

### B-haus-kraemerstrasse-5-grob
- Ort: Krämerstraße 5 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leim, Presse, ein Geruch der in der Nase klebt.
<<<

### B-haus-kraemerstrasse-5-teil
- Ort: Krämerstraße 5 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Werkstatt = Stube. Presse, Fäden, ein Fach für Aufträge.
<<<

### B-haus-kraemerstrasse-5-voll
- Ort: Krämerstraße 5 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Simon 38, Eva 34. Silber 1. Eva hilft. Die Aufträge tragen Zunft und Rat, nicht den Grafen — der ist Feder.
<<<

### B-haus-kraemerstrasse-5-scharf
- Ort: Krämerstraße 5 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Band ohne Titel, nass noch, der Inhalt ist Liste nicht Gebet.
<<<

### B-haus-kraemerstrasse-5-sl
- Ort: Krämerstraße 5 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Blatt. Engine zieht niemanden.
<<<

#### Krämerstraße 6 — Leerstehender Laden · leer

### B-haus-kraemerstrasse-6-offen
- Ort: Krämerstraße 6 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leerstehender Laden. Ehemals Hüte. Die Stange noch da, kein Staub ganz gleichmäßig. Niemand wohnt. Ausgang die Straße.
<<<

### B-haus-kraemerstrasse-6-grob
- Ort: Krämerstraße 6 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leeres Schaufenster, eine Stange, sonst nichts.
<<<

### B-haus-kraemerstrasse-6-teil
- Ort: Krämerstraße 6 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ausgeräumt. Hutstock im Fenster. Fußboden nicht gleichmäßig grau.
<<<

### B-haus-kraemerstrasse-6-voll
- Ort: Krämerstraße 6 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ehemals Hutmacher. Niemand. Die Stange bleibt. Der Staub ist an einer Spur unterbrochen.
<<<

### B-haus-kraemerstrasse-6-scharf
- Ort: Krämerstraße 6 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Fußspuren, kleiner als ein Mann, nicht älter als ein Tag. Hinter der Stange ein Hutblock, der nicht leer war.
<<<

### B-haus-kraemerstrasse-6-sl
- Ort: Krämerstraße 6 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer. Engine zieht niemanden.
<<<

#### Gerbergasse 1 — Gerberei

### B-haus-gerbergasse-1-offen
- Ort: Gerbergasse 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gerberei. Der Gestank erklärt die Gasse. Lohe, nasse Haut. Arbeit der Leder, wohnen Nr. 2. Ausgang die Gasse.
<<<

### B-haus-gerbergasse-1-grob
- Ort: Gerbergasse 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Nase gibt den Rest auf. Gruben, sonst nichts.
<<<

### B-haus-gerbergasse-1-teil
- Ort: Gerbergasse 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gruben, Gestelle, ein Gang zum Haus. Die Mauer ist nah.
<<<

### B-haus-gerbergasse-1-voll
- Ort: Gerbergasse 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Dietrich Leder arbeitet hier, schläft Nr. 2. Häute in Reihen. Der Weg in den Rattenwinkel ist kürzer als einem lieb ist.
<<<

### B-haus-gerbergasse-1-scharf
- Ort: Gerbergasse 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eine Haut trägt ein Zeichen, das nicht Zunft ist.
<<<

### B-haus-gerbergasse-1-sl
- Ort: Gerbergasse 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leder Arbeit. Wohnen Nr. 2. Engine zieht niemanden.
<<<

#### Gerbergasse 2 — Wohnhaus Gerbermeister

### B-haus-gerbergasse-2-offen
- Ort: Gerbergasse 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Leder. Meister neben der Grube. Dietrich, Hedwig, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-gerbergasse-2-grob
- Ort: Gerbergasse 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Lohe auch hier, schwächer, eine Tür die dicht sein will und es nicht ist.
<<<

### B-haus-gerbergasse-2-teil
- Ort: Gerbergasse 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Kammer, Fenster zu den Gruben nicht zur Stadt.
<<<

### B-haus-gerbergasse-2-voll
- Ort: Gerbergasse 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Dietrich 50, Hedwig 47. Silber 1. Sie halten die Nase, die Gasse nicht.
<<<

### B-haus-gerbergasse-2-scharf
- Ort: Gerbergasse 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hedwig hat Salbe von Wurzel, nicht von Lohe — dasselbe wie am hustenden Gesellen, wenn der SL ihn legt.
<<<

### B-haus-gerbergasse-2-sl
- Ort: Gerbergasse 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leder Wohnung. Engine zieht niemanden.
<<<

#### Gerbergasse 3 — Wohnhaus Gerbergesellen

### B-haus-gerbergasse-3-offen
- Ort: Gerbergasse 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Gerbergesellen. Zwei Männer, einer hustet schlecht, wenn der SL ihn setzt. Lutz, Enno. Ausgang die Gasse.
<<<

### B-haus-gerbergasse-3-grob
- Ort: Gerbergasse 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Enge, Husten, Lohe.
<<<

### B-haus-gerbergasse-3-teil
- Ort: Gerbergasse 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum, zwei Lager. Krankheiten kursieren hier häufiger. Kein Automat.
<<<

### B-haus-gerbergasse-3-voll
- Ort: Gerbergasse 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Lutz 31, Enno 28. Messing 3. Einer hustet. Keim still, bis SL zieht ob jemand krank ist.
<<<

### B-haus-gerbergasse-3-scharf
- Ort: Gerbergasse 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter der Manschette Salbe von Wurzel, nicht Lohe. Das Päckchen ohne Etikett hat denselben Geruch.
<<<

### B-haus-gerbergasse-3-sl
- Ort: Gerbergasse 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gerb. Krankheit als Keim, nicht als Automat. Engine zieht niemanden.
<<<

### B-keim-gerber-krankheit
- Ort: Gerbergasse 3 · Keim Krankheiten kursieren
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Häufiger als anderswo. Kein Automat, SL setzt ob jemand hustet.
<<<

#### Gerbergasse 4 — Lagerschuppen für Häute

### B-haus-gerbergasse-4-offen
- Ort: Gerbergasse 4 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Lagerschuppen für Häute. Tropft, Reihen, niemand wohnt. Ausgang die Gasse.
<<<

### B-haus-gerbergasse-4-grob
- Ort: Gerbergasse 4 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nass, Haut, Dunkel.
<<<

### B-haus-gerbergasse-4-teil
- Ort: Gerbergasse 4 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gestelle, ein Gang, der Boden steht. Kein Schloss das hält.
<<<

### B-haus-gerbergasse-4-voll
- Ort: Gerbergasse 4 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand. Häute in Reihen. Der Schuppen tropft. Der Winkel ist die nächste Biegung.
<<<

### B-haus-gerbergasse-4-scharf
- Ort: Gerbergasse 4 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Haut mit dem Nicht-Zunft-Zeichen liegt hier, nicht in der Gerberei — verschoben, heute.
<<<

### B-haus-gerbergasse-4-sl
- Ort: Gerbergasse 4 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand. Engine zieht niemanden.
<<<

#### Töpfergasse 1 — Töpferei

### B-haus-toepfergasse-1-offen
- Ort: Töpfergasse 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Töpferei. Der Ofen wärmt die Gasse. Lehm an den Stufen. Arbeit der Ton, wohnen Nr. 2. Ausgang die Gasse.
<<<

### B-haus-toepfergasse-1-grob
- Ort: Töpfergasse 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ofen, Lehm, der Lärm der Schmiedezeile ist weg.
<<<

### B-haus-toepfergasse-1-teil
- Ort: Töpfergasse 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ofen, Scheibe, Scherben vor der Tür absichtlich gegen Nässe.
<<<

### B-haus-toepfergasse-1-voll
- Ort: Töpfergasse 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Meinhard Ton arbeitet hier, schläft Nr. 2. Der Lehrling trägt, wohnt Nr. 3.
<<<

### B-haus-toepfergasse-1-scharf
- Ort: Töpfergasse 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter den Scherben eine, die nicht hier gebrannt wurde — Glasur fremd.
<<<

### B-haus-toepfergasse-1-sl
- Ort: Töpfergasse 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ton Arbeit. Wohnen Nr. 2. Engine zieht niemanden.
<<<

#### Töpfergasse 2 — Wohnhaus Töpfer

### B-haus-toepfergasse-2-offen
- Ort: Töpfergasse 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Ton. Meisterhaus, Lehm an den Stufen auch hier. Meinhard, Birgit, Ada, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-toepfergasse-2-grob
- Ort: Töpfergasse 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wärme vom Ofen nebenan, eine Stube.
<<<

### B-haus-toepfergasse-2-teil
- Ort: Töpfergasse 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Kammer, Ada hat Ton unter den Nägeln.
<<<

### B-haus-toepfergasse-2-voll
- Ort: Töpfergasse 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Meinhard 44, Birgit 41, Ada 13. Silber 1. Drei Häuser nur in der Gasse. Morrgasse nah genug, dass man Glocken nicht braucht.
<<<

### B-haus-toepfergasse-2-scharf
- Ort: Töpfergasse 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ada hat nasse Knie, als wäre sie am Friedhof gewesen, nicht am Ofen — oder der Lehrling war es, und sie folgt.
<<<

### B-haus-toepfergasse-2-sl
- Ort: Töpfergasse 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ton Wohnung. Engine zieht niemanden.
<<<

#### Töpfergasse 3 — Wohnhaus Lehrling

### B-haus-toepfergasse-3-offen
- Ort: Töpfergasse 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Asche. Lehrling, siebzehn, nicht der Sohn. Jori, wenn der SL ihn setzt. Ausgang die Gasse.
<<<

### B-haus-toepfergasse-3-grob
- Ort: Töpfergasse 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eng, Lehm, ein Bett.
<<<

### B-haus-toepfergasse-3-teil
- Ort: Töpfergasse 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum. Scherben als Teller. Die Morrgasse liegt im Fenster.
<<<

### B-haus-toepfergasse-3-voll
- Ort: Töpfergasse 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Jori Asche 17. Messing 2. Nicht der Sohn des Meisters. Nasse Knie, wenn der Blick scharf ist.
<<<

### B-haus-toepfergasse-3-scharf
- Ort: Töpfergasse 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
An den Knien Friedhofserde, nicht Töpferlehm. Ein Löffel unter dem Brett, nicht alt genug für den Winkel — oder doch.
<<<

### B-haus-toepfergasse-3-sl
- Ort: Töpfergasse 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Asche. Engine zieht niemanden.
<<<

#### Morrgasse 1 — Totengräberhaus

### B-haus-morrgasse-1-offen
- Ort: Morrgasse 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Totengräberhaus. Erde, Wachs, der Dienst nicht die Wahl. Silas, Odila, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-morrgasse-1-grob
- Ort: Morrgasse 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stille, die nicht leer ist. Erde an den Stiefeln.
<<<

### B-haus-morrgasse-1-teil
- Ort: Morrgasse 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, eine Kammer, Stiefel an der Tür. Odila wäscht die Toten, nicht hier sichtbar.
<<<

### B-haus-morrgasse-1-voll
- Ort: Morrgasse 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Silas 46, Odila 42. Messing 3. Dienst Morr. Die Stiefel zeigen: heute schon zweimal draußen.
<<<

### B-haus-morrgasse-1-scharf
- Ort: Morrgasse 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Frische Erde auf den Säumen, und ein zweites Paar Spuren nebenan, kleiner, nicht Odila.
<<<

### B-haus-morrgasse-1-sl
- Ort: Morrgasse 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gruft. Engine zieht niemanden.
<<<

#### Morrgasse 2 — Morr-Kapelle

### B-haus-morrgasse-2-offen
- Ort: Morrgasse 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Morr-Kapelle. Klein, schwarz, die Tür nicht zu. Schwester Miren Ewig, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-morrgasse-2-grob
- Ort: Morrgasse 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wachs, Stein, ein Ritus den die Stadt nicht belacht.
<<<

### B-haus-morrgasse-2-teil
- Ort: Morrgasse 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Schiff, Totenbrett, ein zweites Schloss innen das nicht zum Kult passt — nur wenn du nah bist.
<<<

### B-haus-morrgasse-2-voll
- Ort: Morrgasse 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Miren Ewig 52. Silber 1. Trauerfeiern. Ritus gegen Untote ist Setzung, kein Spawn. Frische Erde auf einem Hügel ohne Stein.
<<<

### B-haus-morrgasse-2-scharf
- Ort: Morrgasse 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der frische Hügel hat keine Gaben. Das innere Schloss ist nicht Kult. Der Hügel ist zu neu für den Stein, zu alt für heute.
<<<

### B-haus-morrgasse-2-sl
- Ort: Morrgasse 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ewig. Keim: frischer Hügel — nur SL. Engine zieht niemanden.
<<<

### B-keim-morr-ritus
- Ort: Morrgasse 2 · Keim Bestattung nach Ritus
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gilt als nötig, Untote fernzuhalten. Setzung, kein Spawn.
<<<

#### Schlemmergasse 1 — Taverne

### B-haus-schlemmergasse-1-offen
- Ort: Schlemmergasse 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Taverne. Bier, billiges Öl, Stimmen die nicht zum Tempel gehören. Rolf zapft, wenn der SL ihn setzt. Nicht Zum Wanderer. Wohnen Nr. 3. Ausgang die Gasse.
<<<

### B-haus-schlemmergasse-1-grob
- Ort: Schlemmergasse 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Lachen hinter Holz. Der Geruch nach Bier und etwas Süßem.
<<<

### B-haus-schlemmergasse-1-teil
- Ort: Schlemmergasse 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Theke, Tische, eine Tür zum Hinterzimmer die nicht für jeden gilt. Ranald hängt dort, klein, ohne Schild — nicht vorn.
<<<

### B-haus-schlemmergasse-1-voll
- Ort: Schlemmergasse 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Rolf Stube arbeitet hier, schläft Nr. 3. Hinterzimmer: Keim still. Treffpunkt, feuerte nie von selbst.
<<<

### B-haus-schlemmergasse-1-scharf
- Ort: Schlemmergasse 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im Hinterzimmer zwei Tassen, noch warm, und ein dritter Platz ohne Tasse.
<<<

### B-haus-schlemmergasse-1-sl
- Ort: Schlemmergasse 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube Arbeit. Ranald-Keim still. Nicht Krug. Engine zieht niemanden. SL spielt, wer im Hinterzimmer sitzt.
<<<

### B-keim-ranald-schrein
- Ort: Schlemmergasse 1 · Keim Ranald-Schrein im Hinterzimmer
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Treffpunkt zwielichtiger Gestalten. Feuert nicht von selbst.
<<<

#### Schlemmergasse 2 — Vergnügungshaus

### B-haus-schlemmergasse-2-offen
- Ort: Schlemmergasse 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Vergnügungshaus Linde. Gelbe Vorhänge, die bei Tag nicht helfen. Thea, Kira, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-schlemmergasse-2-grob
- Ort: Schlemmergasse 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Süß, Öl, eine Stimme die zu hell ist.
<<<

### B-haus-schlemmergasse-2-teil
- Ort: Schlemmergasse 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Diele, Vorhang, eine Treppe. Luke in den Keller hinter dem Haus, nicht verriegelt — nur wenn du umgehst.
<<<

### B-haus-schlemmergasse-2-voll
- Ort: Schlemmergasse 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Thea 39, Kira 18. Messing 5. Die Vorhänge sind Tag und Nacht dieselben.
<<<

### B-haus-schlemmergasse-2-scharf
- Ort: Schlemmergasse 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Kellerluke war heute bewegt. Kira hat Erde unter den Nägeln, nicht Farbe.
<<<

### B-haus-schlemmergasse-2-sl
- Ort: Schlemmergasse 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Linde. Engine zieht niemanden.
<<<

#### Schlemmergasse 3 — Wohnhaus Wirt

### B-haus-schlemmergasse-3-offen
- Ort: Schlemmergasse 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wohnhaus Stube. Über der Taverne. Rolf, Janna, Nils, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-schlemmergasse-3-grob
- Ort: Schlemmergasse 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Wohnung darüber ist still. Bier steigt.
<<<

### B-haus-schlemmergasse-3-teil
- Ort: Schlemmergasse 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube, Kammer, eine Luke in die Taverne ohne die Treppe.
<<<

### B-haus-schlemmergasse-3-voll
- Ort: Schlemmergasse 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Rolf 42, Janna 38 hält das Hinterzimmer, Nils 12. Messing 5. Nicht Krug, nicht Zum Wanderer. Janna kennt Arne, und Arne kennt die Gasse, und keiner sagt das am Tor.
<<<

### B-haus-schlemmergasse-3-scharf
- Ort: Schlemmergasse 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nils hat vom Fenster den Torbogen gezählt, nicht die Gasse. Janna hat zwei Tassen extra, warm.
<<<

### B-haus-schlemmergasse-3-sl
- Ort: Schlemmergasse 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stube Wohnung. Engine zieht niemanden.
<<<

#### Bettelgasse 1 — Hütte Tagelöhnerfamilie

### B-haus-bettelgasse-1-offen
- Ort: Bettelgasse 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hütte Karg. Eng, nass, innerhalb der Mauer und trotzdem Armut. Wenzel, Ulla, Pia, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-bettelgasse-1-grob
- Ort: Bettelgasse 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kohl, Nässe, ein Kind das verstummt.
<<<

### B-haus-bettelgasse-1-teil
- Ort: Bettelgasse 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum, zu wenig Stühle. Die Torstraße ist nah und hilft nicht.
<<<

### B-haus-bettelgasse-1-voll
- Ort: Bettelgasse 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Wenzel 37, Ulla 34, Pia 10. Messing 1. Die Schuhe nass vom Brunnen Nr. 8, nicht vom Tor.
<<<

### B-haus-bettelgasse-1-scharf
- Ort: Bettelgasse 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Pia hat am Brunnen etwas Hellen gesehen, das kein Stein ist — und es der Mutter nicht gesagt.
<<<

### B-haus-bettelgasse-1-sl
- Ort: Bettelgasse 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Karg. Engine zieht niemanden.
<<<

#### Bettelgasse 2 — Hütte Witwe

### B-haus-bettelgasse-2-offen
- Ort: Bettelgasse 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hütte Hesse. Witwe. Magda, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-bettelgasse-2-grob
- Ort: Bettelgasse 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Still, ein Geruch nach altem Tuch.
<<<

### B-haus-bettelgasse-2-teil
- Ort: Bettelgasse 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum. Ein Nagel ohne Männerkleid. Sigmar klein, verblasst.
<<<

### B-haus-bettelgasse-2-voll
- Ort: Bettelgasse 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Magda 64. Messing 1. Mann Ewald †2501. Sie geht außen um Nr. 6.
<<<

### B-haus-bettelgasse-2-scharf
- Ort: Bettelgasse 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter dem Brett ein Löffel mit Zeichen, nicht Magdas — zu jung für sie.
<<<

### B-haus-bettelgasse-2-sl
- Ort: Bettelgasse 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hesse. Engine zieht niemanden.
<<<

#### Bettelgasse 3 — Hütte Bettlerclique

### B-haus-bettelgasse-3-offen
- Ort: Bettelgasse 3 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hütte der Clique. Drei, munkele Kult, niemand beweist. Krumm, Fips, Auge, wenn der SL sie setzt. Ausgang die Gasse.
<<<

### B-haus-bettelgasse-3-grob
- Ort: Bettelgasse 3 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Enge, zu viele Atemzüge, ein Zeichen unter der Schwelle das du nicht liest.
<<<

### B-haus-bettelgasse-3-teil
- Ort: Bettelgasse 3 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum, drei Lager. Die Nachbarn nennen sie Clique, nicht Familie.
<<<

### B-haus-bettelgasse-3-voll
- Ort: Bettelgasse 3 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Krumm 42, Fips 24, Auge 47. Messing 0. Munkeln über Kulte. Keim still.
<<<

### B-haus-bettelgasse-3-scharf
- Ort: Bettelgasse 3 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter der Schwelle ein Zeichen, frisch, nicht Ranald. Dasselbe klein wie am Ring Nr. 6, oder nicht — der SL sagt es.
<<<

### B-haus-bettelgasse-3-sl
- Ort: Bettelgasse 3 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Clique. Kult-Keim still. Engine zieht niemanden.
<<<

### B-keim-bettel-kult
- Ort: Bettelgasse 3 · Keim Fragwürdige Kulte
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Munkeln. Keim. Feuert nicht von selbst.
<<<

#### Bettelgasse 4 — Leer (Dach) · leer

### B-haus-bettelgasse-4-offen
- Ort: Bettelgasse 4 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer. Das Dach trägt nicht. Niemand. Ausgang die Gasse.
<<<

### B-haus-bettelgasse-4-grob
- Ort: Bettelgasse 4 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Nass, Dunkel, nichts das antwortet.
<<<

### B-haus-bettelgasse-4-teil
- Ort: Bettelgasse 4 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leerstand. Die Nachbarn gehen außen rum, weniger als um Nr. 6.
<<<

### B-haus-bettelgasse-4-voll
- Ort: Bettelgasse 4 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand. Das Gebälk tropft in den Lehm.
<<<

### B-haus-bettelgasse-4-scharf
- Ort: Bettelgasse 4 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Im Lehm ein Absatz zur Nr. 3, nicht zur Straße.
<<<

### B-haus-bettelgasse-4-sl
- Ort: Bettelgasse 4 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer. Engine zieht niemanden.
<<<

#### Bettelgasse 5 — Leer (vernagelt) · leer

### B-haus-bettelgasse-5-offen
- Ort: Bettelgasse 5 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer, vernagelt. Bretter über der Tür, rostige Nägel. Niemand. Ausgang die Gasse.
<<<

### B-haus-bettelgasse-5-grob
- Ort: Bettelgasse 5 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Holz, Rost, zu.
<<<

### B-haus-bettelgasse-5-teil
- Ort: Bettelgasse 5 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Vernagelt von außen. Die Nachbartür zu Nr. 6 ist die nächste.
<<<

### B-haus-bettelgasse-5-voll
- Ort: Bettelgasse 5 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand. Die Nägel sind alt. Kratzer innen an der vernagelten Nachbartür — nur wenn du Nr. 6 zuerst hattest.
<<<

### B-haus-bettelgasse-5-scharf
- Ort: Bettelgasse 5 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Die Kratzer kommen von Nr. 6, nicht von hier. Innen, nicht außen.
<<<

### B-haus-bettelgasse-5-sl
- Ort: Bettelgasse 5 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer, vernagelt. Engine zieht niemanden.
<<<

#### Bettelgasse 6 — Leer (spukt) · leer

### B-haus-bettelgasse-6-offen
- Ort: Bettelgasse 6 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer, der Ruf sie spuke. Die Nachbarn gehen außen rum. Niemand wohnt. Ausgang die Gasse.
<<<

### B-haus-bettelgasse-6-grob
- Ort: Bettelgasse 6 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Zu still für die Gasse. Eine Tür die niemand nimmt.
<<<

### B-haus-bettelgasse-6-teil
- Ort: Bettelgasse 6 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leer. Ruf. SL entscheidet, ob etwas da ist. Die vernagelte Nr. 5 grenzt.
<<<

### B-haus-bettelgasse-6-voll
- Ort: Bettelgasse 6 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand. Der Spuk ist Ruf. Keim still. Kratzer innen an der Nachbartür, nicht außen.
<<<

### B-haus-bettelgasse-6-scharf
- Ort: Bettelgasse 6 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Innen an der Tür zu Nr. 5 Kratzer, frisch. Ein Atem, der nicht deiner ist — oder der Wind durch die Bretter. Der SL sagt es, nicht die Gasse.
<<<

### B-haus-bettelgasse-6-sl
- Ort: Bettelgasse 6 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Spuk-Keim still. SL entscheidet, ob etwas da ist. Engine zieht niemanden.
<<<

### B-keim-bettel-spukt
- Ort: Bettelgasse 6 · Keim Ruf: spukt
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ruf. SL entscheidet, ob etwas da ist.
<<<

#### Bettelgasse 7 — Hütte Tagelöhner

### B-haus-bettelgasse-7-offen
- Ort: Bettelgasse 7 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hütte Dünn. Ivo allein, wenn der SL ihn setzt. Ausgang die Gasse.
<<<

### B-haus-bettelgasse-7-grob
- Ort: Bettelgasse 7 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eng, ein Mann oder niemand.
<<<

### B-haus-bettelgasse-7-teil
- Ort: Bettelgasse 7 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ein Raum. Ein Lager. Kein zweiter Teller.
<<<

### B-haus-bettelgasse-7-voll
- Ort: Bettelgasse 7 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ivo 32. Messing 1. Allein. Die Clique ist zwei Türen, er nennt sie nicht.
<<<

### B-haus-bettelgasse-7-scharf
- Ort: Bettelgasse 7 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Ivo hat denselben Löffel wie unter Magdas Brett — oder einen, der dazu passt.
<<<

### B-haus-bettelgasse-7-sl
- Ort: Bettelgasse 7 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Dünn. Engine zieht niemanden.
<<<

#### Bettelgasse 8 — Gemeinschaftsbrunnen

### B-haus-bettelgasse-8-offen
- Ort: Bettelgasse 8 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Gemeinschaftsbrunnen. Dritter Brunnen der Stadt. Rand den Kinder glatt getreten haben. Niemand wohnt. Ausgang die Gasse.
<<<

### B-haus-bettelgasse-8-grob
- Ort: Bettelgasse 8 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Stein, Wasser, dein Gesicht unklar darin.
<<<

### B-haus-bettelgasse-8-teil
- Ort: Bettelgasse 8 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Kein Dach. Gemeinschaft. Das Wasser nicht immer klar.
<<<

### B-haus-bettelgasse-8-voll
- Ort: Bettelgasse 8 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand wohnt. Dritter Brunnen: Tor 9, Marktmitte, hier. Hanni würde eine Ecke suchen, ohne Schuld; die Gasse gibt keine, die nichts kostet.
<<<

### B-haus-bettelgasse-8-scharf
- Ort: Bettelgasse 8 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Am Grund etwas Hellen, das kein Stein ist.
<<<

### B-haus-bettelgasse-8-sl
- Ort: Bettelgasse 8 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand. Hellen nur scharf oder SL. Engine zieht niemanden.
<<<

#### Rattenwinkel 1 — Verfallene Wohnhütte · leer

### B-haus-rattenwinkel-1-offen
- Ort: Rattenwinkel 1 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Verfallene Wohnhütte. Die Tür hängt. Abel und Mira Unken, verschwunden 2506. Niemand wohnt. Ausgang der Winkel.
<<<

### B-haus-rattenwinkel-1-grob
- Ort: Rattenwinkel 1 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Hängt, still, zu still für Ratten.
<<<

### B-haus-rattenwinkel-1-teil
- Ort: Rattenwinkel 1 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Eingefallen. Zwei Lager, vermodert. Kein Schild.
<<<

### B-haus-rattenwinkel-1-voll
- Ort: Rattenwinkel 1 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unken. Abel *2460, Mira *2464, spurlos 2506. Keim still. Unter einem Brett ein Löffel, nicht alt genug für „vor Jahren“.
<<<

### B-haus-rattenwinkel-1-scharf
- Ort: Rattenwinkel 1 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Löffel ist nicht 2506. Jemand war hier, seit sie „spurlos“ sind.
<<<

### B-haus-rattenwinkel-1-sl
- Ort: Rattenwinkel 1 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unken-Keim still. Engine erfindet nichts. Nicht öffnen, solange die Torstraße die Frage ist — außer der SL öffnet.
<<<

### B-keim-ratten-verschwunden
- Ort: Rattenwinkel 1 · Keim Bewohner verschwunden
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Vor Jahren spurlos. Keim. Feuert nicht von selbst.
<<<

#### Rattenwinkel 2 — Leerstehendes Gebäude · leer

### B-haus-rattenwinkel-2-offen
- Ort: Rattenwinkel 2 · offen
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Leerstehendes Gebäude. Steht, und das ist schlimmer. Ratten, Kratzgeräusche unter dem Boden, Geruch wie Verwesung. Nachbarn meiden den Winkel. Ausgang der Winkel.
<<<

### B-haus-rattenwinkel-2-grob
- Ort: Rattenwinkel 2 · grob
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Der Winkel nimmt das Licht nicht an. Zu still für Ratten, und trotzdem Ratten.
<<<

### B-haus-rattenwinkel-2-teil
- Ort: Rattenwinkel 2 · teil
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Steht. Kellerloch oder Gang — der Blick reicht nicht. Kein drittes Haus, kein Schild.
<<<

### B-haus-rattenwinkel-2-voll
- Ort: Rattenwinkel 2 · voll
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Niemand. Die Ratten sind fett. Der Geruch kommt nicht nur aus dem Keller. Niemand hat in diesem Jahr Holz nachgelegt. Keim: Aberglaube oder nicht — SL.
<<<

### B-haus-rattenwinkel-2-scharf
- Ort: Rattenwinkel 2 · scharf
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
Unter dem Haus ein Gang, kein Kellerloch — die Kratzer zu regelmäßig für Ungeziefer.
<<<

### B-haus-rattenwinkel-2-sl
- Ort: Rattenwinkel 2 · sl
- Datei: `src/lib/wfrp/looks-drosselau.ts`

>>>
SL-Entscheidung: Aberglaube oder Skaven/Nurgle/Kult. Keim feuerte nie von selbst. Engine erfindet nichts.
<<<

### B-keim-ratten-keller
- Ort: Rattenwinkel 2 · Keim Ratten und Verwesung
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Nachbarn meiden es. Aberglaube oder nicht — SL-Entscheidung. Feuert nicht von selbst.
<<<

## Erste Stunde

### B-stunde-01
- Ort: Torwache prüft · body
- Datei: `src/lib/wfrp/session.ts`

>>>
Aus dem Zollhaus tritt ein Mann in der wollenen Jacke der Stadt. Helm unter dem Arm. Der Riemen der Handwaffe ist zu. Arne Helm, Torstraße 8. Er stellt sich nicht vor.
<<<

### B-stunde-02
- Ort: Arne Helm · body
- Datei: `src/lib/wfrp/session.ts`

>>>
„Namen. Woher. Waffen offen, oder ich zähl sie selbst. Der Zwerg bleibt im Licht.“
<<<

### B-stunde-03
- Ort: Tick · body
- Datei: `src/lib/wfrp/session.ts`

>>>
Tick will sich umschauen, bevor er den Mund aufmacht.
<<<

### B-stunde-04
- Ort: Arne Helm · body
- Datei: `src/lib/wfrp/session.ts`

>>>
„Fünf auf einmal. Der Halbling zählt extra. Ein Name. Dann der nächste.“ Er wartet. Die Frist läuft.
<<<

### B-stunde-05
- Ort: Arne Helm · ask
- Datei: `src/lib/wfrp/session.ts`

>>>
Namen. Woher. Waffen offen.
<<<

## Gesichter

### B-gesicht-tick-herkunft
- Ort: Tick · Herkunft
- Datei: `src/lib/wfrp/party.ts`

>>>
Reikland, ein Weiler westlich der Stadt
<<<

### B-gesicht-tick-motivation
- Ort: Tick · Motivation
- Datei: `src/lib/wfrp/party.ts`

>>>
Die Ordnung halten, bis jemand sagt, was gilt.
<<<

### B-gesicht-tick-shortgoal
- Ort: Tick · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Herausfinden, wer am Tor das Sagen hat.
<<<

### B-gesicht-tick-longgoal
- Ort: Tick · langes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Wieder raus. Mit den anderen.
<<<

### B-gesicht-tick-woher
- Ort: Tick · woher
- Datei: `src/lib/wfrp/party.ts`

>>>
Ein Weiler westlich, Getreide und Wache.
<<<

### B-gesicht-tick-glaube
- Ort: Tick · Glaube
- Datei: `src/lib/wfrp/party.ts`

>>>
Sigmar, weil die Mutter es so wollte.
<<<

### B-gesicht-tick-angst
- Ort: Tick · Angst
- Datei: `src/lib/wfrp/party.ts`

>>>
Dass die Stadt zuhält und niemand mehr öffnet.
<<<

### B-gesicht-track-herkunft
- Ort: Track · Herkunft
- Datei: `src/lib/wfrp/party.ts`

>>>
Altdorf, ein Kontor an der Reik
<<<

### B-gesicht-track-motivation
- Ort: Track · Motivation
- Datei: `src/lib/wfrp/party.ts`

>>>
Zahlen, die stimmen. Leute, die zahlen.
<<<

### B-gesicht-track-shortgoal
- Ort: Track · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Einen Preis in Drosselau erfahren, der kein Wucher ist.
<<<

### B-gesicht-track-longgoal
- Ort: Track · langes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Ein Siegel, das die Tore wieder aufmacht.
<<<

### B-gesicht-track-woher
- Ort: Track · woher
- Datei: `src/lib/wfrp/party.ts`

>>>
Kontor in Altdorf. Der Wagen blieb hier stehen.
<<<

### B-gesicht-track-glaube
- Ort: Track · Glaube
- Datei: `src/lib/wfrp/party.ts`

>>>
Handrich. Der Rest ist Buchhaltung.
<<<

### B-gesicht-track-angst
- Ort: Track · Angst
- Datei: `src/lib/wfrp/party.ts`

>>>
Leere Taschen und volle Speicher der anderen.
<<<

### B-gesicht-truck-herkunft
- Ort: Truck · Herkunft
- Datei: `src/lib/wfrp/party.ts`

>>>
Karaz-a-Karak, Lehrling auf der Walz
<<<

### B-gesicht-truck-motivation
- Ort: Truck · Motivation
- Datei: `src/lib/wfrp/party.ts`

>>>
Ein Werk, das hält. Ein Groll, der wartet.
<<<

### B-gesicht-truck-shortgoal
- Ort: Truck · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Eine Esse in der Schmiedezeile, die nicht fremd ist.
<<<

### B-gesicht-truck-longgoal
- Ort: Truck · langes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Die Walz beenden. Nicht in dieser Stadt sterben.
<<<

### B-gesicht-truck-woher
- Ort: Truck · woher
- Datei: `src/lib/wfrp/party.ts`

>>>
Die Walz. Der Hammer ist älter als die Stadtmauer.
<<<

### B-gesicht-truck-glaube
- Ort: Truck · Glaube
- Datei: `src/lib/wfrp/party.ts`

>>>
Grungni. Ahnen zuerst.
<<<

### B-gesicht-truck-angst
- Ort: Truck · Angst
- Datei: `src/lib/wfrp/party.ts`

>>>
Schande vor den Ahnen, wenn das Werk bricht.
<<<

### B-gesicht-hanni-herkunft
- Ort: Hanni · Herkunft
- Datei: `src/lib/wfrp/party.ts`

>>>
Haffenstadt, Cousinen in jeder Gasse
<<<

### B-gesicht-hanni-motivation
- Ort: Hanni · Motivation
- Datei: `src/lib/wfrp/party.ts`

>>>
Nicht auffallen. Trotzdem satt werden.
<<<

### B-gesicht-hanni-shortgoal
- Ort: Hanni · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Eine warme Ecke in der Bettelgasse, ohne Schuld.
<<<

### B-gesicht-hanni-longgoal
- Ort: Hanni · langes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Nanni wieder nach Hause bringen. Dann essen.
<<<

### B-gesicht-hanni-woher
- Ort: Hanni · woher
- Datei: `src/lib/wfrp/party.ts`

>>>
Haffenstadt. Die Tante hat uns auf den Wagen gesetzt.
<<<

### B-gesicht-hanni-glaube
- Ort: Hanni · Glaube
- Datei: `src/lib/wfrp/party.ts`

>>>
Esmeralda. Der Topf zuerst.
<<<

### B-gesicht-hanni-angst
- Ort: Hanni · Angst
- Datei: `src/lib/wfrp/party.ts`

>>>
Hunger, und dass Nanni ohne mich bleibt.
<<<

### B-gesicht-nanni-herkunft
- Ort: Nanni · Herkunft
- Datei: `src/lib/wfrp/party.ts`

>>>
Ubersreik, eine kleine Praxis
<<<

### B-gesicht-nanni-motivation
- Ort: Nanni · Motivation
- Datei: `src/lib/wfrp/party.ts`

>>>
Wunden schließen. Fragen offen lassen.
<<<

### B-gesicht-nanni-shortgoal
- Ort: Nanni · kurzes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Wer in Drosselau heilen darf, ohne die Gilde zu fragen.
<<<

### B-gesicht-nanni-longgoal
- Ort: Nanni · langes Ziel
- Datei: `src/lib/wfrp/party.ts`

>>>
Hanni nicht verlieren. Dann weiter.
<<<

### B-gesicht-nanni-woher
- Ort: Nanni · woher
- Datei: `src/lib/wfrp/party.ts`

>>>
Ubersreik. Die Lehre war kürzer als der Weg hierher.
<<<

### B-gesicht-nanni-glaube
- Ort: Nanni · Glaube
- Datei: `src/lib/wfrp/party.ts`

>>>
Shallya. Die Hand, nicht das Schwert.
<<<

### B-gesicht-nanni-angst
- Ort: Nanni · Angst
- Datei: `src/lib/wfrp/party.ts`

>>>
Ein Fieber, dem ich keinen Namen geben kann.
<<<

## Handlungskarten · Flavour

### B-karte-regel-grau
- Ort: Regel Grau
- Datei: `knowledge/data/catalog.json`

>>>
Karten, die der Charakter kennt, aber gerade nicht nutzen kann, bleiben sichtbar und werden ausgegraut. Der Grund steht auf der Karte. Sie werden nie gelöscht.
<<<

### B-karte-umschauen-summary
- Ort: Umschauen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Den Ort und die Leute mit den Augen abtasten.
<<<

### B-karte-intuition-summary
- Ort: Einschätzen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Absicht und Haltung eines Gegenübers lesen.
<<<

### B-karte-reden-summary
- Ort: Ansprechen / Verhandeln · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Mit Worten überzeugen, schmeicheln, Vertrauen suchen.
<<<

### B-karte-feilschen-summary
- Ort: Handeln · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Den Preis drücken — ein vergleichender Wurf gegen den Händler.
<<<

### B-karte-kaufen-summary
- Ort: Kaufen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Erst zahlen, dann um den Preis feilschen. Ob die Ware verfügbar ist, entscheidet der SL.
<<<

### B-karte-bestechen-summary
- Ort: Bestechen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Geld oder Gefälligkeit gegen ein Entgegenkommen.
<<<

### B-karte-einschuechtern-summary
- Ort: Einschüchtern · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Drohen. Der Status der Beteiligten färbt die Folgen, nicht die Karte selbst.
<<<

### B-karte-klatsch-summary
- Ort: Gerüchte · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
In der Menge nach Geschichten und Preisen fischen.
<<<

### B-karte-schleichen-summary
- Ort: Schleichen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Unbemerkt bleiben oder sich davonstehlen.
<<<

### B-karte-gehen-summary
- Ort: Gehen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Zu einem genannten Ort in der Szene oder zu einem Ausgang. Im Kampf: Bewegung × 2 Meter, ohne Wurf.
<<<

### B-karte-warten-summary
- Ort: Abwarten · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Stillstehen, beobachten, die Frist verstreichen lassen.
<<<

### B-karte-sprinten-summary
- Ort: Sprinten · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Volle Bewegung. Im Kampf eine Handlung.
<<<

### B-karte-fliehen-summary
- Ort: Fliehen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Den Kampf verlassen. Wer gebunden ist, kassiert dabei eine freie Attacke des Gegners.
<<<

### B-karte-aufstehen-summary
- Ort: Aufstehen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Den Zustand Niedergestreckt beenden.
<<<

### B-karte-kriechen-summary
- Ort: Kriechen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Halbe Bewegung, solange du niedergestreckt bist.
<<<

### B-karte-waffe_ziehen-summary
- Ort: Waffe ziehen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Den Dolch oder die geführte Waffe ziehen — das eskaliert die Szene.
<<<

### B-karte-angreifen-summary
- Ort: Angreifen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Ein vergleichender Wurf, meist Nahkampf gegen Nahkampf oder Ausweichen.
<<<

### B-karte-sturmangriff-summary
- Ort: Sturmangriff · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Bewegung + Handlung, +1 Vorteil, Bindung.
<<<

### B-karte-loesen-summary
- Ort: Aus Bindung lösen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Wurf oder Vorteilsvorsprung ausgeben.
<<<

### B-karte-volle_abwehr-summary
- Ort: Nur verteidigen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Die eigene Handlung für die Abwehr opfern — der nächste Vergleich fällt zu deinen Gunsten.
<<<

### B-karte-ausweichen-summary
- Ort: Attacke ausweichen · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Kostet keine eigene Handlung, verteidigt aber gegen den nächsten Schlag.
<<<

### B-karte-glueck-summary
- Ort: Glückspunkt · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Eigenen Wurf wiederholen oder +1 EG. Nur im Glück-Fenster.
<<<

### B-karte-mut-summary
- Ort: Mutpunkt · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Einen Zustand entfernen. Bei Niedergestreckt zusätzlich +1 LP.
<<<

### B-karte-schicksal-summary
- Ort: Schicksal opfern · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Verhindert den Tod — überlebt die Szene. Permanent.
<<<

### B-karte-zaehigkeit-summary
- Ort: Zähigkeit · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Wurf selbst wählen oder Mutation vermeiden. Permanent.
<<<

### B-karte-freitext-summary
- Ort: Bitte an den SL · Flavour
- Datei: `knowledge/data/catalog.json`

>>>
Keine automatische Umsetzung — der SL knüpft sie an eine Fertigkeit oder lehnt sie ab.
<<<

## Erschaffung · Why

### B-station-welt-why
- Ort: Station Welt · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Erst zuhören, was diese Welt erzählt — gewählt wird später.
<<<

### B-station-volk-why
- Ort: Station Volk · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Woher du kommst, prägt, wer du wirst. Die Zahlen folgen danach.
<<<

### B-station-pnp-why
- Ort: Station Spiel · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Was hier digital läuft — und was ganz beim Spielleiter bleibt.
<<<

### B-station-karriere-why
- Ort: Station Karriere · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Die Klasse ist deine Herkunft, die Karriere dein Beruf im Reich.
<<<

### B-station-werte-why
- Ort: Station Werte · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Zehn Attribute geben dir Gestalt, dann entscheidet das Schicksal.
<<<

### B-station-faehigkeiten-why
- Ort: Station Fertigkeiten · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Zeig, was du gelernt hast — und wähl ein Talent, das dich auszeichnet.
<<<

### B-station-ausruestung-why
- Ort: Station Ausrüstung · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Was du trägst und bei dir hast, folgt aus deiner Karriere.
<<<

### B-station-details-why
- Ort: Station Details · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Name, Alter, Aussehen, Ziele — das Gesicht hinter den Werten.
<<<

### B-station-gruppe-why
- Ort: Station Gruppe · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Kannst du überspringen — der Spielleiter führt euch zusammen.
<<<

### B-station-leben-why
- Ort: Station Leben · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Beantworte mindestens drei Fragen zu deinem Leben, die Herkunft steht auf der Liste.
<<<

### B-station-xp-why
- Ort: Station EP · why
- Datei: `src/lib/wfrp/stations.ts`

>>>
Optional — dein Bogen wartet auch ohne das.
<<<

---

Ende der Sicherung. 602 Blöcke. 13 Gassen handschriftlich. 69 Häuser handschriftlich, 0 aus dem Generator.
