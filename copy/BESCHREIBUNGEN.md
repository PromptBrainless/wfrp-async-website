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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Bettlerhütte an der Vorstadtring, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Vorstadtring.
<<<

### B-haus-vorstadtring-1-grob
- Ort: Vorstadtring 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-vorstadtring-1-teil
- Ort: Vorstadtring 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Bettlerhütte siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-vorstadtring-1-voll
- Ort: Vorstadtring 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Bettlerhütte hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-vorstadtring-1-scharf
- Ort: Vorstadtring 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-vorstadtring-1-sl
- Ort: Vorstadtring 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Vorstadtring 1. Kein Keim. Engine zieht niemanden.
<<<

#### Vorstadtring 2 — Hütte eines Tagelöhners

### B-haus-vorstadtring-2-offen
- Ort: Vorstadtring 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Hütte eines Tagelöhners an der Vorstadtring, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Vorstadtring.
<<<

### B-haus-vorstadtring-2-grob
- Ort: Vorstadtring 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-vorstadtring-2-teil
- Ort: Vorstadtring 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Hütte eines Tagelöhners siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-vorstadtring-2-voll
- Ort: Vorstadtring 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Hütte eines Tagelöhners hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-vorstadtring-2-scharf
- Ort: Vorstadtring 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-vorstadtring-2-sl
- Ort: Vorstadtring 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Vorstadtring 2. Kein Keim. Engine zieht niemanden.
<<<

#### Vorstadtring 3 — Fuhrmannsschuppen

### B-haus-vorstadtring-3-offen
- Ort: Vorstadtring 3 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Fuhrmannsschuppen an der Vorstadtring, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Vorstadtring.
<<<

### B-haus-vorstadtring-3-grob
- Ort: Vorstadtring 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-vorstadtring-3-teil
- Ort: Vorstadtring 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Fuhrmannsschuppen siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-vorstadtring-3-voll
- Ort: Vorstadtring 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Fuhrmannsschuppen hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-vorstadtring-3-scharf
- Ort: Vorstadtring 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-vorstadtring-3-sl
- Ort: Vorstadtring 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Vorstadtring 3. Kein Keim. Engine zieht niemanden.
<<<

#### Vorstadtring 4 — Hütte einer Wäscherin

### B-haus-vorstadtring-4-offen
- Ort: Vorstadtring 4 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Hütte einer Wäscherin an der Vorstadtring, Nummer 4. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Vorstadtring.
<<<

### B-haus-vorstadtring-4-grob
- Ort: Vorstadtring 4 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-vorstadtring-4-teil
- Ort: Vorstadtring 4 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Hütte einer Wäscherin siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-vorstadtring-4-voll
- Ort: Vorstadtring 4 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Hütte einer Wäscherin hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-vorstadtring-4-scharf
- Ort: Vorstadtring 4 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-vorstadtring-4-sl
- Ort: Vorstadtring 4 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Vorstadtring 4. Kein Keim. Engine zieht niemanden.
<<<

#### Vorstadtring 5 — Leerstehende Hütte (Dach) · leer

### B-haus-vorstadtring-5-offen
- Ort: Vorstadtring 5 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstehende Hütte (Dach) an der Vorstadtring, Nummer 5. Leer. Die Luft steht. Ausgang auf die Vorstadtring. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse.
<<<

### B-haus-vorstadtring-5-grob
- Ort: Vorstadtring 5 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Staub, Dunkel, nichts das antwortet.
<<<

### B-haus-vorstadtring-5-teil
- Ort: Vorstadtring 5 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum.
<<<

### B-haus-vorstadtring-5-voll
- Ort: Vorstadtring 5 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Leere ist vollständig. Wer hier wohnte, hat nichts gelassen das einen Namen trägt.
<<<

### B-haus-vorstadtring-5-scharf
- Ort: Vorstadtring 5 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-vorstadtring-5-sl
- Ort: Vorstadtring 5 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Vorstadtring 5. Leer. Kein Keim. Engine zieht niemanden.
<<<

#### Vorstadtring 6 — Leerstehende Hütte (Ranald-Zeichen) · leer

### B-haus-vorstadtring-6-offen
- Ort: Vorstadtring 6 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstehende Hütte (Ranald-Zeichen) an der Vorstadtring, Nummer 6. Leer. Die Luft steht. Ausgang auf die Vorstadtring. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse.
<<<

### B-haus-vorstadtring-6-grob
- Ort: Vorstadtring 6 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Staub, Dunkel, nichts das antwortet.
<<<

### B-haus-vorstadtring-6-teil
- Ort: Vorstadtring 6 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum.
<<<

### B-haus-vorstadtring-6-voll
- Ort: Vorstadtring 6 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstehende Hütte (Ranald-Zeichen). Ranald-Zeichen: Verwittertes Zeichen an der Tür. Diebesglück oder Warnung. SL entscheidet, ob es zählt. Noch hat niemand gezogen.
<<<

### B-haus-vorstadtring-6-scharf
- Ort: Vorstadtring 6 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Verwittertes Zeichen an der Tür. Diebesglück oder Warnung. SL entscheidet, ob es zählt. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-vorstadtring-6-sl
- Ort: Vorstadtring 6 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Vorstadtring 6. Leer. Ranald-Zeichen: Verwittertes Zeichen an der Tür. Diebesglück oder Warnung. SL entscheidet, ob es zählt. Engine zieht niemanden.
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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Kaufmannsgilde an der Marktplatz, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Marktplatz.
<<<

### B-haus-marktplatz-1-grob
- Ort: Marktplatz 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-marktplatz-1-teil
- Ort: Marktplatz 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Kaufmannsgilde siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-marktplatz-1-voll
- Ort: Marktplatz 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Kaufmannsgilde hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-marktplatz-1-scharf
- Ort: Marktplatz 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-marktplatz-1-sl
- Ort: Marktplatz 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 1. Kein Keim. Engine zieht niemanden.
<<<

#### Marktplatz 2 — Handwerkerzunft

### B-haus-marktplatz-2-offen
- Ort: Marktplatz 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Handwerkerzunft an der Marktplatz, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Marktplatz.
<<<

### B-haus-marktplatz-2-grob
- Ort: Marktplatz 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-marktplatz-2-teil
- Ort: Marktplatz 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Handwerkerzunft siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-marktplatz-2-voll
- Ort: Marktplatz 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Handwerkerzunft hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-marktplatz-2-scharf
- Ort: Marktplatz 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-marktplatz-2-sl
- Ort: Marktplatz 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 2. Kein Keim. Engine zieht niemanden.
<<<

#### Marktplatz 3 — Sigmarstempel

### B-haus-marktplatz-3-offen
- Ort: Marktplatz 3 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Sigmarstempel an der Marktplatz, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Marktplatz.
<<<

### B-haus-marktplatz-3-grob
- Ort: Marktplatz 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-marktplatz-3-teil
- Ort: Marktplatz 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Sigmarstempel siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-marktplatz-3-voll
- Ort: Marktplatz 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Sigmarstempel hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-marktplatz-3-scharf
- Ort: Marktplatz 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-marktplatz-3-sl
- Ort: Marktplatz 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 3. Kein Keim. Engine zieht niemanden.
<<<

#### Marktplatz 4 — Geldwechsler

### B-haus-marktplatz-4-offen
- Ort: Marktplatz 4 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Geldwechsler an der Marktplatz, Nummer 4. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Marktplatz.
<<<

### B-haus-marktplatz-4-grob
- Ort: Marktplatz 4 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-marktplatz-4-teil
- Ort: Marktplatz 4 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Geldwechsler siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-marktplatz-4-voll
- Ort: Marktplatz 4 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Geldwechsler hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-marktplatz-4-scharf
- Ort: Marktplatz 4 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-marktplatz-4-sl
- Ort: Marktplatz 4 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 4. Kein Keim. Engine zieht niemanden.
<<<

#### Marktplatz 5 — Schreiberstube

### B-haus-marktplatz-5-offen
- Ort: Marktplatz 5 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schreiberstube an der Marktplatz, Nummer 5. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Marktplatz.
<<<

### B-haus-marktplatz-5-grob
- Ort: Marktplatz 5 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-marktplatz-5-teil
- Ort: Marktplatz 5 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Schreiberstube siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-marktplatz-5-voll
- Ort: Marktplatz 5 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Schreiberstube hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-marktplatz-5-scharf
- Ort: Marktplatz 5 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-marktplatz-5-sl
- Ort: Marktplatz 5 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 5. Kein Keim. Engine zieht niemanden.
<<<

#### Marktplatz 6 — Ratshaus

### B-haus-marktplatz-6-offen
- Ort: Marktplatz 6 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ratshaus an der Marktplatz, Nummer 6. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Marktplatz.
<<<

### B-haus-marktplatz-6-grob
- Ort: Marktplatz 6 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-marktplatz-6-teil
- Ort: Marktplatz 6 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Ratshaus siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-marktplatz-6-voll
- Ort: Marktplatz 6 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Ratshaus hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-marktplatz-6-scharf
- Ort: Marktplatz 6 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-marktplatz-6-sl
- Ort: Marktplatz 6 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 6. Kein Keim. Engine zieht niemanden.
<<<

#### Marktplatz 7 — Wohnhaus Kaufmann

### B-haus-marktplatz-7-offen
- Ort: Marktplatz 7 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Kaufmann an der Marktplatz, Nummer 7. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Marktplatz.
<<<

### B-haus-marktplatz-7-grob
- Ort: Marktplatz 7 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-marktplatz-7-teil
- Ort: Marktplatz 7 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Kaufmann siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-marktplatz-7-voll
- Ort: Marktplatz 7 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Kaufmann hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-marktplatz-7-scharf
- Ort: Marktplatz 7 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-marktplatz-7-sl
- Ort: Marktplatz 7 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 7. Kein Keim. Engine zieht niemanden.
<<<

#### Marktplatz 8 — Wohnhaus Kaufmann

### B-haus-marktplatz-8-offen
- Ort: Marktplatz 8 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Kaufmann an der Marktplatz, Nummer 8. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Marktplatz.
<<<

### B-haus-marktplatz-8-grob
- Ort: Marktplatz 8 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-marktplatz-8-teil
- Ort: Marktplatz 8 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Kaufmann siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-marktplatz-8-voll
- Ort: Marktplatz 8 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Kaufmann hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-marktplatz-8-scharf
- Ort: Marktplatz 8 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-marktplatz-8-sl
- Ort: Marktplatz 8 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 8. Kein Keim. Engine zieht niemanden.
<<<

#### Marktplatz 9 — Wohnhaus Stadtrat

### B-haus-marktplatz-9-offen
- Ort: Marktplatz 9 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Stadtrat an der Marktplatz, Nummer 9. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Marktplatz.
<<<

### B-haus-marktplatz-9-grob
- Ort: Marktplatz 9 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-marktplatz-9-teil
- Ort: Marktplatz 9 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Stadtrat siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-marktplatz-9-voll
- Ort: Marktplatz 9 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Stadtrat hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-marktplatz-9-scharf
- Ort: Marktplatz 9 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-marktplatz-9-sl
- Ort: Marktplatz 9 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 9. Kein Keim. Engine zieht niemanden.
<<<

#### Marktplatz 10 — Leerstehendes Kontor · leer

### B-haus-marktplatz-10-offen
- Ort: Marktplatz 10 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstehendes Kontor an der Marktplatz, Nummer 10. Leer. Die Luft steht. Ausgang auf die Marktplatz. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse.
<<<

### B-haus-marktplatz-10-grob
- Ort: Marktplatz 10 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Staub, Dunkel, nichts das antwortet.
<<<

### B-haus-marktplatz-10-teil
- Ort: Marktplatz 10 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum.
<<<

### B-haus-marktplatz-10-voll
- Ort: Marktplatz 10 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstehendes Kontor. Verlassener Handelsposten: Auswärtige Kompanie, seit einem Jahr weg. Keim. Feuert nicht von selbst. Noch hat niemand gezogen.
<<<

### B-haus-marktplatz-10-scharf
- Ort: Marktplatz 10 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Auswärtige Kompanie, seit einem Jahr weg. Keim. Feuert nicht von selbst. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-marktplatz-10-sl
- Ort: Marktplatz 10 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Marktplatz 10. Leer. Verlassener Handelsposten: Auswärtige Kompanie, seit einem Jahr weg. Keim. Feuert nicht von selbst. Engine zieht niemanden.
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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Lagerhaus der Zunft an der Gildengasse, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Gildengasse.
<<<

### B-haus-gildengasse-1-grob
- Ort: Gildengasse 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-gildengasse-1-teil
- Ort: Gildengasse 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Lagerhaus der Zunft siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-gildengasse-1-voll
- Ort: Gildengasse 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Lagerhaus der Zunft hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-gildengasse-1-scharf
- Ort: Gildengasse 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-gildengasse-1-sl
- Ort: Gildengasse 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gildengasse 1. Kein Keim. Engine zieht niemanden.
<<<

#### Gildengasse 2 — Wohnhaus Gildemeister

### B-haus-gildengasse-2-offen
- Ort: Gildengasse 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Gildemeister an der Gildengasse, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Gildengasse.
<<<

### B-haus-gildengasse-2-grob
- Ort: Gildengasse 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-gildengasse-2-teil
- Ort: Gildengasse 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Gildemeister siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-gildengasse-2-voll
- Ort: Gildengasse 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Gildemeister hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-gildengasse-2-scharf
- Ort: Gildengasse 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-gildengasse-2-sl
- Ort: Gildengasse 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gildengasse 2. Kein Keim. Engine zieht niemanden.
<<<

#### Gildengasse 3 — Wohnhaus Gildeschreiber

### B-haus-gildengasse-3-offen
- Ort: Gildengasse 3 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Gildeschreiber an der Gildengasse, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Gildengasse.
<<<

### B-haus-gildengasse-3-grob
- Ort: Gildengasse 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-gildengasse-3-teil
- Ort: Gildengasse 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Gildeschreiber siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-gildengasse-3-voll
- Ort: Gildengasse 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Gildeschreiber hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-gildengasse-3-scharf
- Ort: Gildengasse 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-gildengasse-3-sl
- Ort: Gildengasse 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gildengasse 3. Kein Keim. Engine zieht niemanden.
<<<

#### Gildengasse 4 — Herberge für Zunftbrüder

### B-haus-gildengasse-4-offen
- Ort: Gildengasse 4 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Herberge für Zunftbrüder an der Gildengasse, Nummer 4. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Gildengasse.
<<<

### B-haus-gildengasse-4-grob
- Ort: Gildengasse 4 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-gildengasse-4-teil
- Ort: Gildengasse 4 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Herberge für Zunftbrüder siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-gildengasse-4-voll
- Ort: Gildengasse 4 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Herberge für Zunftbrüder hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-gildengasse-4-scharf
- Ort: Gildengasse 4 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-gildengasse-4-sl
- Ort: Gildengasse 4 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gildengasse 4. Kein Keim. Engine zieht niemanden.
<<<

#### Gildengasse 5 — Zunftarchiv

### B-haus-gildengasse-5-offen
- Ort: Gildengasse 5 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Zunftarchiv an der Gildengasse, Nummer 5. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Gildengasse.
<<<

### B-haus-gildengasse-5-grob
- Ort: Gildengasse 5 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-gildengasse-5-teil
- Ort: Gildengasse 5 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Zunftarchiv siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-gildengasse-5-voll
- Ort: Gildengasse 5 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Zunftarchiv hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-gildengasse-5-scharf
- Ort: Gildengasse 5 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-gildengasse-5-sl
- Ort: Gildengasse 5 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gildengasse 5. Kein Keim. Engine zieht niemanden.
<<<

#### Schmiedezeile 1 — Hufschmiede

### B-haus-schmiedezeile-1-offen
- Ort: Schmiedezeile 1 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Hufschmiede an der Schmiedezeile, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Schmiedezeile.
<<<

### B-haus-schmiedezeile-1-grob
- Ort: Schmiedezeile 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-schmiedezeile-1-teil
- Ort: Schmiedezeile 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Hufschmiede siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-schmiedezeile-1-voll
- Ort: Schmiedezeile 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Hufschmiede hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-schmiedezeile-1-scharf
- Ort: Schmiedezeile 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-schmiedezeile-1-sl
- Ort: Schmiedezeile 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schmiedezeile 1. Kein Keim. Engine zieht niemanden.
<<<

#### Schmiedezeile 2 — Waffenschmiede

### B-haus-schmiedezeile-2-offen
- Ort: Schmiedezeile 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Waffenschmiede an der Schmiedezeile, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Schmiedezeile.
<<<

### B-haus-schmiedezeile-2-grob
- Ort: Schmiedezeile 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-schmiedezeile-2-teil
- Ort: Schmiedezeile 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Waffenschmiede siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-schmiedezeile-2-voll
- Ort: Schmiedezeile 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Waffenschmiede hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-schmiedezeile-2-scharf
- Ort: Schmiedezeile 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-schmiedezeile-2-sl
- Ort: Schmiedezeile 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schmiedezeile 2. Kein Keim. Engine zieht niemanden.
<<<

#### Schmiedezeile 3 — Wohnhaus Hufschmied

### B-haus-schmiedezeile-3-offen
- Ort: Schmiedezeile 3 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Hufschmied an der Schmiedezeile, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Schmiedezeile.
<<<

### B-haus-schmiedezeile-3-grob
- Ort: Schmiedezeile 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-schmiedezeile-3-teil
- Ort: Schmiedezeile 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Hufschmied siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-schmiedezeile-3-voll
- Ort: Schmiedezeile 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Hufschmied hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-schmiedezeile-3-scharf
- Ort: Schmiedezeile 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-schmiedezeile-3-sl
- Ort: Schmiedezeile 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schmiedezeile 3. Kein Keim. Engine zieht niemanden.
<<<

#### Schmiedezeile 4 — Wohnhaus Schmiedegesellen

### B-haus-schmiedezeile-4-offen
- Ort: Schmiedezeile 4 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Schmiedegesellen an der Schmiedezeile, Nummer 4. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Schmiedezeile.
<<<

### B-haus-schmiedezeile-4-grob
- Ort: Schmiedezeile 4 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-schmiedezeile-4-teil
- Ort: Schmiedezeile 4 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Schmiedegesellen siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-schmiedezeile-4-voll
- Ort: Schmiedezeile 4 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Schmiedegesellen hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-schmiedezeile-4-scharf
- Ort: Schmiedezeile 4 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-schmiedezeile-4-sl
- Ort: Schmiedezeile 4 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schmiedezeile 4. Kein Keim. Engine zieht niemanden.
<<<

#### Schmiedezeile 5 — Kohlenlager

### B-haus-schmiedezeile-5-offen
- Ort: Schmiedezeile 5 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Kohlenlager an der Schmiedezeile, Nummer 5. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Schmiedezeile.
<<<

### B-haus-schmiedezeile-5-grob
- Ort: Schmiedezeile 5 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-schmiedezeile-5-teil
- Ort: Schmiedezeile 5 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Kohlenlager siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-schmiedezeile-5-voll
- Ort: Schmiedezeile 5 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Kohlenlager hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-schmiedezeile-5-scharf
- Ort: Schmiedezeile 5 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-schmiedezeile-5-sl
- Ort: Schmiedezeile 5 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schmiedezeile 5. Kein Keim. Engine zieht niemanden.
<<<

#### Schmiedezeile 6 — Wohnhaus Lehrling

### B-haus-schmiedezeile-6-offen
- Ort: Schmiedezeile 6 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Lehrling an der Schmiedezeile, Nummer 6. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Schmiedezeile.
<<<

### B-haus-schmiedezeile-6-grob
- Ort: Schmiedezeile 6 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-schmiedezeile-6-teil
- Ort: Schmiedezeile 6 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Lehrling siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-schmiedezeile-6-voll
- Ort: Schmiedezeile 6 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Lehrling hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-schmiedezeile-6-scharf
- Ort: Schmiedezeile 6 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-schmiedezeile-6-sl
- Ort: Schmiedezeile 6 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schmiedezeile 6. Kein Keim. Engine zieht niemanden.
<<<

#### Weberweg 1 — Weberei

### B-haus-weberweg-1-offen
- Ort: Weberweg 1 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Weberei an der Weberweg, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Weberweg.
<<<

### B-haus-weberweg-1-grob
- Ort: Weberweg 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-weberweg-1-teil
- Ort: Weberweg 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Weberei siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-weberweg-1-voll
- Ort: Weberweg 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Weberei hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-weberweg-1-scharf
- Ort: Weberweg 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-weberweg-1-sl
- Ort: Weberweg 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Weberweg 1. Kein Keim. Engine zieht niemanden.
<<<

#### Weberweg 2 — Schneiderei

### B-haus-weberweg-2-offen
- Ort: Weberweg 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schneiderei an der Weberweg, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Weberweg.
<<<

### B-haus-weberweg-2-grob
- Ort: Weberweg 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-weberweg-2-teil
- Ort: Weberweg 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Schneiderei siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-weberweg-2-voll
- Ort: Weberweg 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Schneiderei hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-weberweg-2-scharf
- Ort: Weberweg 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-weberweg-2-sl
- Ort: Weberweg 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Weberweg 2. Kein Keim. Engine zieht niemanden.
<<<

#### Weberweg 3 — Wohnhaus Webermeister

### B-haus-weberweg-3-offen
- Ort: Weberweg 3 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Webermeister an der Weberweg, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Weberweg.
<<<

### B-haus-weberweg-3-grob
- Ort: Weberweg 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-weberweg-3-teil
- Ort: Weberweg 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Webermeister siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-weberweg-3-voll
- Ort: Weberweg 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Webermeister hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-weberweg-3-scharf
- Ort: Weberweg 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-weberweg-3-sl
- Ort: Weberweg 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Weberweg 3. Kein Keim. Engine zieht niemanden.
<<<

#### Weberweg 4 — Wohnhaus Schneiderfamilie

### B-haus-weberweg-4-offen
- Ort: Weberweg 4 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Schneiderfamilie an der Weberweg, Nummer 4. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Weberweg.
<<<

### B-haus-weberweg-4-grob
- Ort: Weberweg 4 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-weberweg-4-teil
- Ort: Weberweg 4 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Schneiderfamilie siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-weberweg-4-voll
- Ort: Weberweg 4 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Schneiderfamilie hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-weberweg-4-scharf
- Ort: Weberweg 4 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-weberweg-4-sl
- Ort: Weberweg 4 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Weberweg 4. Kein Keim. Engine zieht niemanden.
<<<

#### Weberweg 5 — Färberwerkstatt

### B-haus-weberweg-5-offen
- Ort: Weberweg 5 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Färberwerkstatt an der Weberweg, Nummer 5. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Weberweg.
<<<

### B-haus-weberweg-5-grob
- Ort: Weberweg 5 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-weberweg-5-teil
- Ort: Weberweg 5 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Färberwerkstatt siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-weberweg-5-voll
- Ort: Weberweg 5 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Färberwerkstatt hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-weberweg-5-scharf
- Ort: Weberweg 5 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-weberweg-5-sl
- Ort: Weberweg 5 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Weberweg 5. Kein Keim. Engine zieht niemanden.
<<<

#### Krämerstraße 1 — Krämerladen

### B-haus-kraemerstrasse-1-offen
- Ort: Krämerstraße 1 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Krämerladen an der Krämerstraße, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Krämerstraße.
<<<

### B-haus-kraemerstrasse-1-grob
- Ort: Krämerstraße 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-kraemerstrasse-1-teil
- Ort: Krämerstraße 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Krämerladen siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-kraemerstrasse-1-voll
- Ort: Krämerstraße 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Krämerladen hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-kraemerstrasse-1-scharf
- Ort: Krämerstraße 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-kraemerstrasse-1-sl
- Ort: Krämerstraße 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Krämerstraße 1. Kein Keim. Engine zieht niemanden.
<<<

#### Krämerstraße 2 — Kräuterhandlung

### B-haus-kraemerstrasse-2-offen
- Ort: Krämerstraße 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Kräuterhandlung an der Krämerstraße, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Krämerstraße.
<<<

### B-haus-kraemerstrasse-2-grob
- Ort: Krämerstraße 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-kraemerstrasse-2-teil
- Ort: Krämerstraße 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Kräuterhandlung siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-kraemerstrasse-2-voll
- Ort: Krämerstraße 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Kräuterhandlung. Unter dem Ladentisch: Mittel, die ein Hexenjäger argwöhnisch sähe. Feuert nicht von selbst. Noch hat niemand gezogen.
<<<

### B-haus-kraemerstrasse-2-scharf
- Ort: Krämerstraße 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Mittel, die ein Hexenjäger argwöhnisch sähe. Feuert nicht von selbst. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-kraemerstrasse-2-sl
- Ort: Krämerstraße 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Krämerstraße 2. Unter dem Ladentisch: Mittel, die ein Hexenjäger argwöhnisch sähe. Feuert nicht von selbst. Engine zieht niemanden.
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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Krämer an der Krämerstraße, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Krämerstraße.
<<<

### B-haus-kraemerstrasse-3-grob
- Ort: Krämerstraße 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-kraemerstrasse-3-teil
- Ort: Krämerstraße 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Krämer siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-kraemerstrasse-3-voll
- Ort: Krämerstraße 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Krämer hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-kraemerstrasse-3-scharf
- Ort: Krämerstraße 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-kraemerstrasse-3-sl
- Ort: Krämerstraße 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Krämerstraße 3. Kein Keim. Engine zieht niemanden.
<<<

#### Krämerstraße 4 — Wohnhaus Kräuterhändlerin

### B-haus-kraemerstrasse-4-offen
- Ort: Krämerstraße 4 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Kräuterhändlerin an der Krämerstraße, Nummer 4. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Krämerstraße.
<<<

### B-haus-kraemerstrasse-4-grob
- Ort: Krämerstraße 4 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-kraemerstrasse-4-teil
- Ort: Krämerstraße 4 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Kräuterhändlerin siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-kraemerstrasse-4-voll
- Ort: Krämerstraße 4 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Kräuterhändlerin hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-kraemerstrasse-4-scharf
- Ort: Krämerstraße 4 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-kraemerstrasse-4-sl
- Ort: Krämerstraße 4 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Krämerstraße 4. Kein Keim. Engine zieht niemanden.
<<<

#### Krämerstraße 5 — Buchbinderei

### B-haus-kraemerstrasse-5-offen
- Ort: Krämerstraße 5 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Buchbinderei an der Krämerstraße, Nummer 5. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Krämerstraße.
<<<

### B-haus-kraemerstrasse-5-grob
- Ort: Krämerstraße 5 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-kraemerstrasse-5-teil
- Ort: Krämerstraße 5 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Buchbinderei siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-kraemerstrasse-5-voll
- Ort: Krämerstraße 5 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Buchbinderei hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-kraemerstrasse-5-scharf
- Ort: Krämerstraße 5 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-kraemerstrasse-5-sl
- Ort: Krämerstraße 5 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Krämerstraße 5. Kein Keim. Engine zieht niemanden.
<<<

#### Krämerstraße 6 — Leerstehender Laden · leer

### B-haus-kraemerstrasse-6-offen
- Ort: Krämerstraße 6 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstehender Laden an der Krämerstraße, Nummer 6. Leer. Die Luft steht. Ausgang auf die Krämerstraße. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse.
<<<

### B-haus-kraemerstrasse-6-grob
- Ort: Krämerstraße 6 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Staub, Dunkel, nichts das antwortet.
<<<

### B-haus-kraemerstrasse-6-teil
- Ort: Krämerstraße 6 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum.
<<<

### B-haus-kraemerstrasse-6-voll
- Ort: Krämerstraße 6 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Leere ist vollständig. Wer hier wohnte, hat nichts gelassen das einen Namen trägt.
<<<

### B-haus-kraemerstrasse-6-scharf
- Ort: Krämerstraße 6 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-kraemerstrasse-6-sl
- Ort: Krämerstraße 6 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Krämerstraße 6. Leer. Kein Keim. Engine zieht niemanden.
<<<

#### Gerbergasse 1 — Gerberei

### B-haus-gerbergasse-1-offen
- Ort: Gerbergasse 1 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gerberei an der Gerbergasse, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Gerbergasse.
<<<

### B-haus-gerbergasse-1-grob
- Ort: Gerbergasse 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-gerbergasse-1-teil
- Ort: Gerbergasse 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Gerberei siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-gerbergasse-1-voll
- Ort: Gerbergasse 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Gerberei hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-gerbergasse-1-scharf
- Ort: Gerbergasse 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-gerbergasse-1-sl
- Ort: Gerbergasse 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gerbergasse 1. Kein Keim. Engine zieht niemanden.
<<<

#### Gerbergasse 2 — Wohnhaus Gerbermeister

### B-haus-gerbergasse-2-offen
- Ort: Gerbergasse 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Gerbermeister an der Gerbergasse, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Gerbergasse.
<<<

### B-haus-gerbergasse-2-grob
- Ort: Gerbergasse 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-gerbergasse-2-teil
- Ort: Gerbergasse 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Gerbermeister siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-gerbergasse-2-voll
- Ort: Gerbergasse 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Gerbermeister hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-gerbergasse-2-scharf
- Ort: Gerbergasse 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-gerbergasse-2-sl
- Ort: Gerbergasse 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gerbergasse 2. Kein Keim. Engine zieht niemanden.
<<<

#### Gerbergasse 3 — Wohnhaus Gerbergesellen

### B-haus-gerbergasse-3-offen
- Ort: Gerbergasse 3 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Gerbergesellen an der Gerbergasse, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Gerbergasse.
<<<

### B-haus-gerbergasse-3-grob
- Ort: Gerbergasse 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-gerbergasse-3-teil
- Ort: Gerbergasse 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Gerbergesellen siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-gerbergasse-3-voll
- Ort: Gerbergasse 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Gerbergesellen. Krankheiten kursieren: Häufiger als anderswo. Kein Automat, SL setzt ob jemand hustet. Noch hat niemand gezogen.
<<<

### B-haus-gerbergasse-3-scharf
- Ort: Gerbergasse 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Häufiger als anderswo. Kein Automat, SL setzt ob jemand hustet. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-gerbergasse-3-sl
- Ort: Gerbergasse 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gerbergasse 3. Krankheiten kursieren: Häufiger als anderswo. Kein Automat, SL setzt ob jemand hustet. Engine zieht niemanden.
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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Lagerschuppen für Häute an der Gerbergasse, Nummer 4. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Gerbergasse.
<<<

### B-haus-gerbergasse-4-grob
- Ort: Gerbergasse 4 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-gerbergasse-4-teil
- Ort: Gerbergasse 4 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Lagerschuppen für Häute siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-gerbergasse-4-voll
- Ort: Gerbergasse 4 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Lagerschuppen für Häute hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-gerbergasse-4-scharf
- Ort: Gerbergasse 4 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-gerbergasse-4-sl
- Ort: Gerbergasse 4 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gerbergasse 4. Kein Keim. Engine zieht niemanden.
<<<

#### Töpfergasse 1 — Töpferei

### B-haus-toepfergasse-1-offen
- Ort: Töpfergasse 1 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Töpferei an der Töpfergasse, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Töpfergasse.
<<<

### B-haus-toepfergasse-1-grob
- Ort: Töpfergasse 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-toepfergasse-1-teil
- Ort: Töpfergasse 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Töpferei siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-toepfergasse-1-voll
- Ort: Töpfergasse 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Töpferei hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-toepfergasse-1-scharf
- Ort: Töpfergasse 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-toepfergasse-1-sl
- Ort: Töpfergasse 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Töpfergasse 1. Kein Keim. Engine zieht niemanden.
<<<

#### Töpfergasse 2 — Wohnhaus Töpfer

### B-haus-toepfergasse-2-offen
- Ort: Töpfergasse 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Töpfer an der Töpfergasse, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Töpfergasse.
<<<

### B-haus-toepfergasse-2-grob
- Ort: Töpfergasse 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-toepfergasse-2-teil
- Ort: Töpfergasse 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Töpfer siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-toepfergasse-2-voll
- Ort: Töpfergasse 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Töpfer hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-toepfergasse-2-scharf
- Ort: Töpfergasse 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-toepfergasse-2-sl
- Ort: Töpfergasse 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Töpfergasse 2. Kein Keim. Engine zieht niemanden.
<<<

#### Töpfergasse 3 — Wohnhaus Lehrling

### B-haus-toepfergasse-3-offen
- Ort: Töpfergasse 3 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Lehrling an der Töpfergasse, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Töpfergasse.
<<<

### B-haus-toepfergasse-3-grob
- Ort: Töpfergasse 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-toepfergasse-3-teil
- Ort: Töpfergasse 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Lehrling siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-toepfergasse-3-voll
- Ort: Töpfergasse 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Lehrling hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-toepfergasse-3-scharf
- Ort: Töpfergasse 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-toepfergasse-3-sl
- Ort: Töpfergasse 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Töpfergasse 3. Kein Keim. Engine zieht niemanden.
<<<

#### Morrgasse 1 — Totengräberhaus

### B-haus-morrgasse-1-offen
- Ort: Morrgasse 1 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Totengräberhaus an der Morrgasse, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Morrgasse.
<<<

### B-haus-morrgasse-1-grob
- Ort: Morrgasse 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-morrgasse-1-teil
- Ort: Morrgasse 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Totengräberhaus siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-morrgasse-1-voll
- Ort: Morrgasse 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Totengräberhaus hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-morrgasse-1-scharf
- Ort: Morrgasse 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-morrgasse-1-sl
- Ort: Morrgasse 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Morrgasse 1. Kein Keim. Engine zieht niemanden.
<<<

#### Morrgasse 2 — Morr-Kapelle

### B-haus-morrgasse-2-offen
- Ort: Morrgasse 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Morr-Kapelle an der Morrgasse, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Morrgasse.
<<<

### B-haus-morrgasse-2-grob
- Ort: Morrgasse 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-morrgasse-2-teil
- Ort: Morrgasse 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Morr-Kapelle siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-morrgasse-2-voll
- Ort: Morrgasse 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Morr-Kapelle. Bestattung nach Ritus: Gilt als nötig, Untote fernzuhalten. Setzung, kein Spawn. Noch hat niemand gezogen.
<<<

### B-haus-morrgasse-2-scharf
- Ort: Morrgasse 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gilt als nötig, Untote fernzuhalten. Setzung, kein Spawn. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-morrgasse-2-sl
- Ort: Morrgasse 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Morrgasse 2. Bestattung nach Ritus: Gilt als nötig, Untote fernzuhalten. Setzung, kein Spawn. Engine zieht niemanden.
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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Taverne an der Schlemmergasse, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Schlemmergasse.
<<<

### B-haus-schlemmergasse-1-grob
- Ort: Schlemmergasse 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-schlemmergasse-1-teil
- Ort: Schlemmergasse 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Taverne siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-schlemmergasse-1-voll
- Ort: Schlemmergasse 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Taverne. Ranald-Schrein im Hinterzimmer: Treffpunkt zwielichtiger Gestalten. Feuert nicht von selbst. Noch hat niemand gezogen.
<<<

### B-haus-schlemmergasse-1-scharf
- Ort: Schlemmergasse 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Treffpunkt zwielichtiger Gestalten. Feuert nicht von selbst. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-schlemmergasse-1-sl
- Ort: Schlemmergasse 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schlemmergasse 1. Ranald-Schrein im Hinterzimmer: Treffpunkt zwielichtiger Gestalten. Feuert nicht von selbst. Engine zieht niemanden.
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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Vergnügungshaus an der Schlemmergasse, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Schlemmergasse.
<<<

### B-haus-schlemmergasse-2-grob
- Ort: Schlemmergasse 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-schlemmergasse-2-teil
- Ort: Schlemmergasse 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Vergnügungshaus siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-schlemmergasse-2-voll
- Ort: Schlemmergasse 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Vergnügungshaus hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-schlemmergasse-2-scharf
- Ort: Schlemmergasse 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-schlemmergasse-2-sl
- Ort: Schlemmergasse 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schlemmergasse 2. Kein Keim. Engine zieht niemanden.
<<<

#### Schlemmergasse 3 — Wohnhaus Wirt

### B-haus-schlemmergasse-3-offen
- Ort: Schlemmergasse 3 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Wohnhaus Wirt an der Schlemmergasse, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Schlemmergasse.
<<<

### B-haus-schlemmergasse-3-grob
- Ort: Schlemmergasse 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-schlemmergasse-3-teil
- Ort: Schlemmergasse 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Wohnhaus Wirt siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-schlemmergasse-3-voll
- Ort: Schlemmergasse 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Wohnhaus Wirt hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-schlemmergasse-3-scharf
- Ort: Schlemmergasse 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-schlemmergasse-3-sl
- Ort: Schlemmergasse 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schlemmergasse 3. Kein Keim. Engine zieht niemanden.
<<<

#### Bettelgasse 1 — Hütte Tagelöhnerfamilie

### B-haus-bettelgasse-1-offen
- Ort: Bettelgasse 1 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Hütte Tagelöhnerfamilie an der Bettelgasse, Nummer 1. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Bettelgasse.
<<<

### B-haus-bettelgasse-1-grob
- Ort: Bettelgasse 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-bettelgasse-1-teil
- Ort: Bettelgasse 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Hütte Tagelöhnerfamilie siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-bettelgasse-1-voll
- Ort: Bettelgasse 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Hütte Tagelöhnerfamilie hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-bettelgasse-1-scharf
- Ort: Bettelgasse 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-bettelgasse-1-sl
- Ort: Bettelgasse 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Bettelgasse 1. Kein Keim. Engine zieht niemanden.
<<<

#### Bettelgasse 2 — Hütte Witwe

### B-haus-bettelgasse-2-offen
- Ort: Bettelgasse 2 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Hütte Witwe an der Bettelgasse, Nummer 2. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Bettelgasse.
<<<

### B-haus-bettelgasse-2-grob
- Ort: Bettelgasse 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-bettelgasse-2-teil
- Ort: Bettelgasse 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Hütte Witwe siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-bettelgasse-2-voll
- Ort: Bettelgasse 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Hütte Witwe hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-bettelgasse-2-scharf
- Ort: Bettelgasse 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-bettelgasse-2-sl
- Ort: Bettelgasse 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Bettelgasse 2. Kein Keim. Engine zieht niemanden.
<<<

#### Bettelgasse 3 — Hütte Bettlerclique

### B-haus-bettelgasse-3-offen
- Ort: Bettelgasse 3 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Hütte Bettlerclique an der Bettelgasse, Nummer 3. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Bettelgasse.
<<<

### B-haus-bettelgasse-3-grob
- Ort: Bettelgasse 3 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-bettelgasse-3-teil
- Ort: Bettelgasse 3 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Hütte Bettlerclique siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-bettelgasse-3-voll
- Ort: Bettelgasse 3 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Hütte Bettlerclique. Fragwürdige Kulte: Munkeln. Keim. Feuert nicht von selbst. Noch hat niemand gezogen.
<<<

### B-haus-bettelgasse-3-scharf
- Ort: Bettelgasse 3 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Munkeln. Keim. Feuert nicht von selbst. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-bettelgasse-3-sl
- Ort: Bettelgasse 3 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Bettelgasse 3. Fragwürdige Kulte: Munkeln. Keim. Feuert nicht von selbst. Engine zieht niemanden.
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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leer (Dach) an der Bettelgasse, Nummer 4. Leer. Die Luft steht. Ausgang auf die Bettelgasse. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse.
<<<

### B-haus-bettelgasse-4-grob
- Ort: Bettelgasse 4 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Staub, Dunkel, nichts das antwortet.
<<<

### B-haus-bettelgasse-4-teil
- Ort: Bettelgasse 4 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum.
<<<

### B-haus-bettelgasse-4-voll
- Ort: Bettelgasse 4 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Leere ist vollständig. Wer hier wohnte, hat nichts gelassen das einen Namen trägt.
<<<

### B-haus-bettelgasse-4-scharf
- Ort: Bettelgasse 4 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-bettelgasse-4-sl
- Ort: Bettelgasse 4 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Bettelgasse 4. Leer. Kein Keim. Engine zieht niemanden.
<<<

#### Bettelgasse 5 — Leer (vernagelt) · leer

### B-haus-bettelgasse-5-offen
- Ort: Bettelgasse 5 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leer (vernagelt) an der Bettelgasse, Nummer 5. Leer. Die Luft steht. Ausgang auf die Bettelgasse. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse.
<<<

### B-haus-bettelgasse-5-grob
- Ort: Bettelgasse 5 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Staub, Dunkel, nichts das antwortet.
<<<

### B-haus-bettelgasse-5-teil
- Ort: Bettelgasse 5 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum.
<<<

### B-haus-bettelgasse-5-voll
- Ort: Bettelgasse 5 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Leere ist vollständig. Wer hier wohnte, hat nichts gelassen das einen Namen trägt.
<<<

### B-haus-bettelgasse-5-scharf
- Ort: Bettelgasse 5 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-bettelgasse-5-sl
- Ort: Bettelgasse 5 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Bettelgasse 5. Leer. Kein Keim. Engine zieht niemanden.
<<<

#### Bettelgasse 6 — Leer (spukt) · leer

### B-haus-bettelgasse-6-offen
- Ort: Bettelgasse 6 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leer (spukt) an der Bettelgasse, Nummer 6. Leer. Die Luft steht. Ausgang auf die Bettelgasse. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse.
<<<

### B-haus-bettelgasse-6-grob
- Ort: Bettelgasse 6 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Staub, Dunkel, nichts das antwortet.
<<<

### B-haus-bettelgasse-6-teil
- Ort: Bettelgasse 6 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum.
<<<

### B-haus-bettelgasse-6-voll
- Ort: Bettelgasse 6 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leer (spukt). Ruf: spukt: Ruf. SL entscheidet, ob etwas da ist. Noch hat niemand gezogen.
<<<

### B-haus-bettelgasse-6-scharf
- Ort: Bettelgasse 6 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ruf. SL entscheidet, ob etwas da ist. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-bettelgasse-6-sl
- Ort: Bettelgasse 6 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Bettelgasse 6. Leer. Ruf: spukt: Ruf. SL entscheidet, ob etwas da ist. Engine zieht niemanden.
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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Hütte Tagelöhner an der Bettelgasse, Nummer 7. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Bettelgasse.
<<<

### B-haus-bettelgasse-7-grob
- Ort: Bettelgasse 7 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-bettelgasse-7-teil
- Ort: Bettelgasse 7 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Hütte Tagelöhner siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-bettelgasse-7-voll
- Ort: Bettelgasse 7 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Hütte Tagelöhner hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-bettelgasse-7-scharf
- Ort: Bettelgasse 7 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-bettelgasse-7-sl
- Ort: Bettelgasse 7 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Bettelgasse 7. Kein Keim. Engine zieht niemanden.
<<<

#### Bettelgasse 8 — Gemeinschaftsbrunnen

### B-haus-bettelgasse-8-offen
- Ort: Bettelgasse 8 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Gemeinschaftsbrunnen an der Bettelgasse, Nummer 8. Die Tür ist geschlossen. Von der Schwelle: Holz, der Geruch des Hauses, kein Wort das dir gegeben wurde. Ausgang auf die Bettelgasse.
<<<

### B-haus-bettelgasse-8-grob
- Ort: Bettelgasse 8 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Schwelle, Tür, ein Geruch. Das ist alles, solange niemand öffnet.
<<<

### B-haus-bettelgasse-8-teil
- Ort: Bettelgasse 8 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Durchs Fenster von Gemeinschaftsbrunnen siehst du, was das Glas hergibt — Umrisse, Licht oder keins.
<<<

### B-haus-bettelgasse-8-voll
- Ort: Bettelgasse 8 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Die Stube von Gemeinschaftsbrunnen hält, was ein Haus dieser Gasse hält. Mehr sagt der Ort nicht, bis jemand spricht.
<<<

### B-haus-bettelgasse-8-scharf
- Ort: Bettelgasse 8 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Ein Detail, das nicht zur Ordnung der Gasse passt — nur wenn der Spielleiter es legt.
<<<

### B-haus-bettelgasse-8-sl
- Ort: Bettelgasse 8 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Bettelgasse 8. Kein Keim. Engine zieht niemanden.
<<<

#### Rattenwinkel 1 — Verfallene Wohnhütte · leer

### B-haus-rattenwinkel-1-offen
- Ort: Rattenwinkel 1 · offen
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Verfallene Wohnhütte an der Rattenwinkel, Nummer 1. Leer. Die Luft steht. Ausgang auf die Rattenwinkel. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse.
<<<

### B-haus-rattenwinkel-1-grob
- Ort: Rattenwinkel 1 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Staub, Dunkel, nichts das antwortet.
<<<

### B-haus-rattenwinkel-1-teil
- Ort: Rattenwinkel 1 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum.
<<<

### B-haus-rattenwinkel-1-voll
- Ort: Rattenwinkel 1 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Verfallene Wohnhütte. Bewohner verschwunden: Vor Jahren spurlos. Keim. Feuert nicht von selbst. Noch hat niemand gezogen.
<<<

### B-haus-rattenwinkel-1-scharf
- Ort: Rattenwinkel 1 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Vor Jahren spurlos. Keim. Feuert nicht von selbst. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-rattenwinkel-1-sl
- Ort: Rattenwinkel 1 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Rattenwinkel 1. Leer. Bewohner verschwunden: Vor Jahren spurlos. Keim. Feuert nicht von selbst. Engine zieht niemanden.
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
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstehendes Gebäude an der Rattenwinkel, Nummer 2. Leer. Die Luft steht. Ausgang auf die Rattenwinkel. Was dahinter wirklich liegt, öffnet der Spielleiter — nicht die Gasse.
<<<

### B-haus-rattenwinkel-2-grob
- Ort: Rattenwinkel 2 · grob
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Staub, Dunkel, nichts das antwortet.
<<<

### B-haus-rattenwinkel-2-teil
- Ort: Rattenwinkel 2 · teil
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstand. Spuren im Staub, oder keiner. Die Nachbarn gehen außen rum.
<<<

### B-haus-rattenwinkel-2-voll
- Ort: Rattenwinkel 2 · voll
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Leerstehendes Gebäude. Ratten und Verwesung: Nachbarn meiden es. Aberglaube oder nicht — SL-Entscheidung. Feuert nicht von selbst. Noch hat niemand gezogen.
<<<

### B-haus-rattenwinkel-2-scharf
- Ort: Rattenwinkel 2 · scharf
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Nachbarn meiden es. Aberglaube oder nicht — SL-Entscheidung. Feuert nicht von selbst. Das liegt still, bis der Spielleiter es zieht.
<<<

### B-haus-rattenwinkel-2-sl
- Ort: Rattenwinkel 2 · sl
- Datei: `src/lib/wfrp/drosselau.ts`

>>>
Rattenwinkel 2. Leer. Ratten und Verwesung: Nachbarn meiden es. Aberglaube oder nicht — SL-Entscheidung. Feuert nicht von selbst. Engine zieht niemanden.
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

Ende der Sicherung. 602 Blöcke. 13 Gassen handschriftlich. 9 Häuser handschriftlich, 60 aus dem Generator.
