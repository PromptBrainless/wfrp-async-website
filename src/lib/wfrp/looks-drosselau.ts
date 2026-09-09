import type { PlaceLook } from "./looks";

export const STREET_LOOKS: Record<string, PlaceLook> = {
  torstrasse: {
    offen:
      "Nasser Stein unter den Sohlen, der Geruch von Pferdeharn, der sich nicht verzieht. Das Stadttor liegt im Rücken, der Bogen tropft. Links das Zollhaus, die Luke halb im Schatten; daneben der Gasthof Zum Wanderer, das Schild hängt schief, eine Laterne brennt noch. Eine Bäckerei dampft, eine Fleischerei hat den Ladenladen einen Spalt, ein Kramladen zeigt in der Scheibe Seile und kleine Sigmar-Amulette. Vorstadt hinter euch, Marktplatz voraus, Bettelgasse zur Seite. Fünf stehen unter dem Torbogen. Niemand hat sie hereingewunken.",
    grob:
      "Der Mann in der wollenen Jacke der Stadt steht zu nah. Helm unter dem Arm, der Riemen der Handwaffe ist zu. Der Dampf der Bäckerei verschluckt die Ecke zur Bettelgasse. Du siehst Jacke, Riemen, den nassen Stein — und dass die Luke am Zollhaus zufällt. Mehr gibt der Blick nicht her, solange er zählt.",
    teil:
      "Links Zollhaus, daneben der Wanderer, dann Bäckerei, Fleischerei, Kram. Vorne der Weg zum Markt, seitlich die Bettelgasse, hinter dem Tor der Vorstadtring. Der Mann in der Jacke der Stadt hat fünf vor sich und zählt Lippen, nicht Augen. Hinter ihm steht niemand Zweites im Licht. An der Ecke zur Bettelgasse hängt etwas Nasses, ohne Gestalt darunter.",
    voll:
      "Die Luke am Zollhaus steht einen Spalt. Kreide an der Tür: Striche, heutiger Tross, nicht gestern. Hinter Helm kein zweiter Mann — die Wache am Tor ist er allein, in dieser Stunde. Die Bäckerei dampft, Laib, nicht Kuchen. An der Bettelgasse-Ecke hängt ein nasser Lappen, niemand darunter. Nr. 8, das Wohnhaus der Wache, liegt dunkel; Nr. 9 das Brunnenhaus, der Stein nass vom Rand. Helm zählt Lippen, nicht Augen. Er hat die fünf schon im Torbuch, bevor jemand spricht.",
    scharf:
      "Die Kreide ist frisch, der Strich für diesen Tross noch feucht. Im Spalt der Luke liegt ein Stift, kein zweites Auge. Der nasse Lappen an der Bettelgasse ist ein Kinderhemd, nicht Fetzen. Hinter der Scheibe von Nr. 8 bewegt sich kurz eine Frau, dann nichts. Helm kennt die fünf aus dem Buch, nicht aus dem Gesicht — er braucht die Namen, weil die Schrift ihn deckt, nicht weil er sie schon gehört hat.",
    sl:
      "Arne Helm, 38, wohnt Torstraße 8 mit Dora (35) und Finn (7). Dienst: Zollhaus Nr. 1. Keim still: Torwache prüft auf Waffen und Mutation — nur der SL zieht. Krug führt den Wanderer (Nr. 2). Laib die Bäckerei, Metz die Fleischerei, Docht den Kram. Karr wohnt Nr. 5, arbeitet am Ring. Staub Nr. 6. Brunnen Nr. 9 leer. Engine zieht niemanden.",
  },
  vorstadtring: {
    offen:
      "Außerhalb der Mauer. Der Weg ist weich, der Dreck hält. Sechs Hütten stehen unregelmäßig, zwei davon ohne Dach das trägt. Ein Schuppen für Karren, der Geruch von nassem Holz und Ochse. Die Stadtmauer im Rücken, das Tor nicht weit, und trotzdem fühlt sich der Ring an, als gehöre er der Stadt nicht ganz. Niemand kommt entgegen.",
    grob:
      "Hütten, Dreck, der Schuppen. Ein Dach hängt durch. Der Wind kommt vom Sumpf, nicht vom Fluss. Gesichter siehst du nicht, nur Rauch aus einem Rohr.",
    teil:
      "Nr. 1 eine Bettlerhütte, Nr. 2 Tagelöhner aus dem Sumpf, Nr. 3 der Fuhrmannsschuppen der Karr, Nr. 4 eine Wäscherin. Zwei leer: Dach eingefallen, und eine Tür mit einem verwitterten Zeichen. Der Weg führt nur zurück zur Torstraße.",
    voll:
      "Laus in der ersten Hütte, allein. Bei Moos Kindergeschrei hinter der Luke, Sumpf noch in der Sprache. Der Schuppen gehört Hannes Karr, der in der Torstraße wohnt — hier stehen Wagen und Ochse. Hilde Blau wäscht, Anni reicht. Das eingefallene Dach von Nr. 5 tropft in den Lehm. An Nr. 6 ein Katzenzeichen, alt, Ranald oder Warnung, die Farbe ist runter.",
    scharf:
      "Das Zeichen an Nr. 6 ist von innen nachgezogen worden, nicht nur verwittert. Unter dem Schuppen ein zweiter Satz Radspuren, schmaler als Karrs Wagen, frisch im Dreck. Bei Moos liegt hinter der Hütte ein Bündel, das nicht nach Wäsche riecht.",
    sl:
      "Wohnen: Laus, Moos, Blau. Karr arbeitet hier, wohnt Tor 5. Nr. 5 leer, Nr. 6 leer mit Ranald-Keim — nur SL zieht. Kein Automat.",
  },
  marktplatz: {
    offen:
      "Der Platz hält die Stadt zusammen. Pflaster, das die Reifen kennen. Gildehaus, Zunft, Sigmarstempel mit offener Tür, Wechsler, Schreiber, Rat. Zwei Kaufmannshäuser, ein Ratshaus, ein Kontor ohne Schild. Leute gehen, aber niemand bleibt. Der Tempel riecht nach kaltem Stein und Wachs.",
    grob:
      "Ein Platz, zu groß für die Zahl der Leute. Der Tempel zieht den Blick, das Kontor stößt ihn ab. Stimmen unter der Gilde, nicht hier draußen.",
    teil:
      "Kaufmannsgilde Nr. 1, Handwerkerzunft Nr. 2, Sigmarstempel Nr. 3. Wechsler, Schreiberstube, Rat. Zwei Wohnhäuser der Kaufleute, ein Stadtrat, das leere Kontor am Rand. Wege in fast jede Gasse der Stadt.",
    voll:
      "Wilhelm Holtz sitzt in der Gilde, nicht hier. Vater Brant Keil liest im Tempel nicht laut. Heller wechselt, Feder beglaubigt im Namen eines Grafen, der nicht in der Stadt ist. Talbeck im Rat. Berthold Holtz Nr. 7, Voss Nr. 8, Stein Nr. 9. Das Kontor Nr. 10 hat Staub auf der Schwelle, ein Jahr alt, die Klinke unberührt. Der Platz führt zur Torstraße, zur Gildengasse, zur Schmiedezeile, zum Weberweg, zur Krämerstraße, zur Schlemmergasse.",
    scharf:
      "Am Kontor fehlt das Schloss nicht — es ist zu, aber der Staub vor der Klinke ist an einer Stelle gewischt, vorgestern oder gestern. Im Tempel hängt neben Sigmar ein kleines, neues Brett: Namen von Kranken, nicht von Toten. Der Wechsler hat die innere Luke zu, obwohl der Platz Tag hat.",
    sl:
      "Graf nicht in der Stadt. Siegel bei Feder, Markt 5. Kontor-Keim still. Holtz Meister Gildengasse 2, Sohn Markt 7. Engine zieht niemanden.",
  },
  gildengasse: {
    offen:
      "Enger als der Platz, höher gebaut. Lager, das Haus des Gildemeisters, ein Schreiber, eine Herberge für Zunftbrüder, das Archiv. Holz und Wachs, weniger Mist. Die Gasse will Ordnung zeigen.",
    grob:
      "Türen mit Schildern, die du lesen könntest, wenn du stehen bliebest. Eine Herberge atmet Bier. Das Archiv atmet Staub.",
    teil:
      "Lager der Zunft, Wohnhaus Holtz, Wohnhaus Eckert, Herberge, Archiv. Nach Marktplatz und Weberweg.",
    voll:
      "Wilhelm und Elsa Holtz in Nr. 2, das beste Haus der Gasse, Silber ohne Scham. Franz Eckert schreibt für die Gilde, Kind hinter der Luke. Die Herberge nimmt Durchreisende, keine Wohnfamilie. Das Archiv hat vergitterte Fenster. Im Lager Kisten mit Zunftmarke, nicht mit Namen.",
    scharf:
      "Im Archiv brennt noch Licht, obwohl die Gasse zur Ruhe will. Eine Kiste im Lager trägt eine Marke, die nicht Drosselau ist.",
    sl:
      "Holtz Meister. Eckert Schreiber. Keim keines, außer was der SL an Verträge hängt. Engine zieht niemanden.",
  },
  schmiedezeile: {
    offen:
      "Hitze, auch wenn das Feuer hinter der Tür liegt. Kohle, Eisen, ein Ton, den die Mauer kennt. Hufschmiede, Waffenschmiede, Wohnhäuser, Kohlenlager, Lehrling. Der Rauch zieht zum Markt, nicht aus der Stadt.",
    grob:
      "Esse und Gestank von gelöschtem Eisen. Ein Hammer, nicht zwei. Die Gasse ist kürzer als ihr Lärm.",
    teil:
      "Hufschmiede Nr. 1, Waffe Nr. 2, Hammer wohnt Nr. 3, zwei Gesellen Nr. 4 (Ulric, Wolf, kein Tempel), Kohle Nr. 5, Lehrling Nagel Nr. 6. Wege: Marktplatz, Gerbergasse.",
    voll:
      "Bodo Hammer und Gerda in Nr. 3, Ilse fort nach Bögenhafen. Ulrich Stahl liefert der Wache. Wulf und Mark in Nr. 4 tragen den Wolf, nicht Sigmar. Timo Nagel, achtzehn, Neffe, eigenes Haus. Das Kohlenlager hat keine Wache, nur ein Schloss, das älter ist als der Lehrling.",
    scharf:
      "In der Waffenschmiede liegt ein Stück, das nicht in die Stadtwache gehört — zu lang, zu neu. Bei den Gesellen ein Amulett am Nagel, Ulric, blank gegriffen. Das Schloss am Kohlenlager ist kürzlich geölt.",
    sl:
      "Ulric unter den Gesellen, kein Tempel. Stahl beliefert Wache. Keim still, bis SL zieht. Engine zieht niemanden.",
  },
  weberweg: {
    offen:
      "Klopfen der Rahmen, nasser Wollegeruch, Farbe die in der Nase bleibt. Weberei, Schneiderei, Meisterhaus, Schneiderhaus, Färber. Der Weg ist sauberer als die Gerbergasse, enger als der Markt.",
    grob:
      "Wolle und Seife. Eine Frau schneidet hinter Glas. Der Rest ist Türen.",
    teil:
      "Weberei Arbeit, Schneiderei Arbeit, Tuch wohnt Nr. 3, Schneider Nr. 4, Beize färbt Nr. 5. Markt, Gildengasse, Krämerstraße.",
    voll:
      "Eberhard Tuch, Lotte, Rike Gesellin. Else Schneider Meisterin, Pieter Geselle, zwei Kinder. Niko Beize und Wera in der Farbe, die Hände dauernd blau. Die Weberei ist Arbeit, nicht Wohnung — sie schlafen in Nr. 3.",
    scharf:
      "In der Färbe ein Bottich, der nicht nach Wolle riecht. Bei Schneider ein Ballen Tuch ohne Zunftmarke, hinten, zugedeckt.",
    sl:
      "Schneider ist die im Originalverzeichnis namentlich so genannte Familie. Beize Messing. Engine zieht niemanden.",
  },
  kraemerstrasse: {
    offen:
      "Gemischtwaren, Kräuter, Wohnungen, eine Buchbinderei, ein leerer Hutladen. Die Straße hält, was die Stadt braucht, wenn sie nicht zum Markt will. Unter manchem Ladentisch liegt mehr als die Zunft erlaubt.",
    grob:
      "Krämergeruch, trocken, und ein schärferer dahinter, den du nicht benennen solltest. Ein leeres Schaufenster ohne Hut.",
    teil:
      "Bode Krämer, Wurzel Kräuter, Wohnungen dahinter, Blatt bindet Bücher, Nr. 6 leer (ehemals Hüte). Markt, Weberweg, Schlemmergasse, Bettelgasse.",
    voll:
      "Hartmut Bode, Ida, Paul. Maren Wurzel und Jette — der Laden führt unter dem Tisch, was ein Hexenjäger nicht freundlich lesen würde. Simon Blatt bindet, Eva hilft. Der Hutladen ist ausgeräumt, die Stange noch da, kein Staub ganz gleichmäßig.",
    scharf:
      "Bei Wurzel ein Päckchen ohne Etikett, frisch gebunden. Im leeren Hutladen Fußspuren, kleiner als ein Mann, nicht älter als ein Tag. Bode hat hinter der Theke eine Liste, die nicht Preise sind.",
    sl:
      "Kräuter-Keim still (Hexenjäger-Subtext). Hutladen leer. Engine zieht niemanden. SL entscheidet, was unter dem Tisch liegt, wenn jemand kauft.",
  },
  gerbergasse: {
    offen:
      "Der Gestank erklärt, warum die Gasse am Rand liegt. Lohe, nasse Haut, Krankheiten, die hier häufiger kursieren. Gerberei, Meisterhaus, Gesellen, Schuppen für Häute. Die Mauer ist nah.",
    grob:
      "Die Nase gibt den Rest auf. Türen, ein Schuppen, niemand der winkt.",
    teil:
      "Gerberei, Meister, zwei Gesellen, Lagerschuppen. Schmiedezeile, Töpfergasse, Rattenwinkel.",
    voll:
      "Der Meister wohnt neben der Grube. Die Gesellen husten, einer schlecht. Der Schuppen tropft, Häute in Reihen. Der Weg in den Rattenwinkel ist kürzer als einem lieb ist.",
    scharf:
      "Eine Haut im Schuppen trägt ein Zeichen, das nicht Zunft ist. Der hustende Geselle hat unter der Manschette etwas, das nach Salbe von Wurzel riecht, nicht nach Lohe.",
    sl:
      "Krankheit als Keim, nicht als Automat. Rattenwinkel grenzt. Engine zieht niemanden.",
  },
  toepfergasse: {
    offen:
      "Drei Häuser, der Ofen wärmt die Gasse. Töpferei, Meister, Lehrling. Lehm an den Stufen, Rauch der nicht nach Eisen riecht.",
    grob:
      "Ofen, Lehm, eine enge Gasse. Der Lärm der Schmiedezeile ist weg.",
    teil:
      "Töpferei mit Brennofen, Wohnhaus des Töpfers, Lehrling. Gerbergasse, Morrgasse.",
    voll:
      "Der Meister brennt, der Lehrling trägt. Scherben vor der Tür, absichtlich, gegen Nässe. Die Morrgasse liegt nah genug, dass man Glocken nicht braucht, um den Friedhof zu wissen.",
    scharf:
      "Unter den Scherben eine, die nicht hier gebrannt wurde — Glasur fremd. Der Lehrling hat nasse Knie, als wäre er am Friedhof gewesen, nicht am Ofen.",
    sl:
      "Drei Häuser nur. Keim still. Engine zieht niemanden.",
  },
  morrgasse: {
    offen:
      "Zwei Gebäude am Friedhof. Totengräberhaus, Morr-Kapelle. Die Gasse will keine dritte Stimme. Erde, Wachs, der Ritus, der Untote fernhalten soll — so sagt man in der Stadt, und niemand lacht dabei.",
    grob:
      "Stille, die nicht leer ist. Eine Kapelle, ein Haus, der Friedhof dahinter.",
    teil:
      "Totengräber im Dienst des Morr-Kultes. Kapelle für Trauerfeiern. Töpfergasse, Schlemmergasse.",
    voll:
      "Der Totengräber wohnt im Dienst, nicht aus Wahl. Die Kapelle ist klein, Morr schwarz, die Tür nicht zu. Frische Erde auf einem Hügel, der nicht alt genug für den Stein ist.",
    scharf:
      "Der frische Hügel hat keine Gaben. An der Kapellentür ein zweites Schloss, innen, das nicht zum Kult passt. Der Totengräber war heute schon zweimal draußen, die Stiefel zeigen es.",
    sl:
      "Morr-Ritus als Notwendigkeit in der Fiktion. Keim: frischer Hügel ohne Stein — nur SL. Engine zieht niemanden.",
  },
  schlemmergasse: {
    offen:
      "Drei Häuser, und die Gasse will fröhlich sein. Taverne, Vergnügungshaus, Wohnung des Wirts. Bier, billiges Öl, Stimmen die nicht zum Tempel gehören. Im Hinterzimmer der Taverne hängt, was die Stadt nicht an die Tür schreibt.",
    grob:
      "Lachen hinter Holz. Ein Geruch nach Bier und etwas Süßem. Die Wohnung darüber ist still.",
    teil:
      "Taverne, Vergnügung, Wirt. Marktplatz, Krämerstraße, Morrgasse, Bettelgasse. Nicht der Wanderer — das ist Torstraße.",
    voll:
      "Der Wirt wohnt in Nr. 3. Die Taverne hat ein Hinterzimmer, dessen Tür nicht für jeden gilt. Ranald hängt dort, klein, ohne Schild. Das Vergnügungshaus hat gelbe Vorhänge, die bei Tag nicht helfen.",
    scharf:
      "Im Hinterzimmer zwei Tassen, noch warm, und ein dritter Platz ohne Tasse. Hinter dem Vergnügungshaus eine Luke in den Keller, nicht verriegelt. Der Wirt kennt Arne, und Arne kennt die Gasse, und keiner von beiden sagt das am Tor.",
    sl:
      "Ranald-Schrein Keim still. Nicht verwechseln mit Zum Wanderer. Engine zieht niemanden. SL spielt, wer im Hinterzimmer sitzt.",
  },
  bettelgasse: {
    offen:
      "Innerhalb der Mauer, und trotzdem Armut. Acht Nummern, davon drei leer, eine vernagelt, eine mit dem Ruf, sie spuke. Hütten, ein Brunnen, nasse Wäsche die nicht trocknet. Die Torstraße ist nah und hilft nicht.",
    grob:
      "Eng, nass, zu viele Türen für zu wenig Rauch. Der Brunnen hat einen Rand, den Kinder glatt getreten haben.",
    teil:
      "Bewohnt: Tagelöhner, Witwe, Bettlerclique, noch ein Tagelöhner. Leer: Dach, vernagelt, „spukt“. Brunnen Nr. 8. Torstraße, Krämerstraße, Schlemmergasse, Rattenwinkel.",
    voll:
      "Nr. 3 die Clique — munkele Kult, niemand beweist. Nr. 6 der Spuk, die Nachbarn gehen außen rum. Der Brunnen ist Gemeinschaft, das Wasser nicht immer klar. Hanni würde hier eine Ecke suchen, ohne Schuld; die Gasse gibt keine, die nichts kostet.",
    scharf:
      "An Nr. 6 Kratzer innen an der vernagelten Nachbartür, nicht außen. Bei der Clique ein Zeichen unter der Schwelle, frisch, nicht Ranald. Der Brunnen hat am Grund etwas Hellen, das kein Stein ist.",
    sl:
      "Kult-Keim in Nr. 3 still. Spuk Nr. 6 still. Hanni shortGoal: warme Ecke ohne Schuld. Engine zieht niemanden.",
  },
  rattenwinkel: {
    offen:
      "Die letzte Gasse. Zwei Häuser, beide falsch. Eine verfallene Wohnhütte, der letzte Bewohner vor Jahren spurlos. Daneben das letzte leerstehende Gebäude der Stadt: Ratten, Kratzgeräusche unter dem Boden, ein Geruch wie Verwesung. Nachbarn meiden den Winkel. Ob Aberglaube oder nicht — das entscheidet nicht die Gasse.",
    grob:
      "Zu still für Ratten, und trotzdem Ratten. Der Winkel nimmt das Licht nicht an.",
    teil:
      "Zwei Leerstände. Gerbergasse, Bettelgasse. Kein drittes Haus. Kein Schild.",
    voll:
      "Nr. 1 eingefallen, die Tür hängt. Nr. 2 steht, und das ist schlimmer. Die Ratten sind fett. Der Geruch kommt nicht nur aus dem Keller. Niemand hat hier in diesem Jahr Holz nachgelegt.",
    scharf:
      "Unter Nr. 2 ein Gang, kein Kellerloch — die Kratzer sind zu regelmäßig für Ungeziefer. In Nr. 1 unter einem Brett ein Löffel, nicht alt genug für „vor Jahren“. Jemand war hier, seit der letzte Bewohner „spurlos“ ist.",
    sl:
      "SL-Entscheidung: Aberglaube oder Skaven/Nurgle/Kult. Keim feuerte nie von selbst. Engine erfindet nichts. Nicht öffnen, solange die Torstraße die Frage ist.",
  },
};

export const HOUSE_LOOKS: Record<string, PlaceLook> = {
  "torstrasse-1": {
    offen:
      "Das Zollhaus der Torstraße. Innen eine Diele, eine Luke zur Gasse, ein Tisch mit Torbuch, eine Bank, an der niemand sitzt. Der Geruch nach nasser Wolle und Tinte. Ausgang wieder auf die Torstraße. Arne Helm ist der Dienst, nicht das Haus.",
    grob:
      "Diele, Tisch, das Buch zugeklappt, sobald du siehst. Die Luke fällt. Mehr gibt der Raum nicht, während er zählt.",
    teil:
      "Torbuch, Kreide an der Innenseite der Luke, ein Haken für den Helm, die Handwaffe in Reichweite, nicht gezogen. Keine zweite Wache im Raum. Eine Tür nach hinten, geschlossen.",
    voll:
      "Das Buch hat die fünf schon in einer Zeile, die Namen noch leer, die Zahl nicht. Hinter der hinteren Tür ein kleiner Raum: Stempel, eine Kasse in Groschen, ein Haken mit einem zweiten Riemen ohne Waffe. Das Fenster zur Nr. 8 ist blind, Vorhang.",
    scharf:
      "Unter dem Torbuch ein zweites Blatt: Merkmale, nicht Namen — Narben, Gang, der Zwerg extra. Die Kasse ist ärmer als ein Zolltag sein sollte. An der hinteren Tür Lehm, der nicht von der Torstraße stammt.",
    sl:
      "Arne Dienst. Mutation/Waffen-Keim nur SL. Kasse und zweites Blatt nur scharf oder wenn SL es legt. Engine zieht Arne nicht noch einmal.",
  },
  "torstrasse-2": {
    offen:
      "Zum Wanderer. Diele, Feuer das nicht groß ist, der Geruch nach Bier und gekochtem Kraut. Detlef Krug hinter der Theke, wenn der SL ihn zieht. Nicht die Taverne der Schlemmergasse. Ausgang die Torstraße.",
    grob: "Wärme, Dunst, eine Theke. Stimmen, die verstummen, wenn die Tür fällt.",
    teil: "Theke, zwei Tische, eine Treppe nach oben. Mara in der Küche hörbar. Ben, dreizehn, Zapfen.",
    voll: "Krug Silber 1. Zimmer oben für Durchreisende, heute keines frei das sich so nennt — die Türen sind zu. An der Wand ein Brett mit Namen, die nicht mehr kommen.",
    scharf: "Ein Name auf dem Brett ist durchgestrichen, frisch. Hinter der Theke eine Flasche ohne Etikett, für Gäste die nicht zahlen wie andere.",
    sl: "Krug: Detlef 43, Mara 39, Ben 13. Engine zieht niemanden.",
  },
  "torstrasse-3": {
    offen: "Die Bäckerei Laib. Hitze, Mehl in der Luft, der Laden ist die Wohnung. Gerd, Hanne, Lina wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Dampf und Brot. Die Theke, sonst nichts, die Augen tränen vom Ofen.",
    teil: "Ofen hinten, ein Brett mit Laiben, nicht mit Kuchen. Kinderspuren im Mehl.",
    voll: "Gerd 41, Hanne 38, Lina 10. Der Ofen war vor der Frist schon an. Ein zweites Brett ist leer — Mehl knapp, oder der Tross kauft nicht.",
    scharf: "Hinterm Ofen ein Sack ohne Zunftsiegel. Lina hat von der Luke aus auf den Torbogen gesehen, nicht auf den Teig.",
    sl: "Laib. Engine zieht niemanden.",
  },
  "torstrasse-4": {
    offen: "Fleischerei Metz. Kalt trotz der Straße. Konrad, Rita, Jan Geselle. Haken, ein Block, der Geruch der bleibt. Ausgang die Gasse.",
    grob: "Kälte, Eisen, der Block. Die Straße ist weg, sobald die Tür fällt.",
    teil: "Haken halb leer. Jan in der Schürze, Konrad nicht vorn.",
    voll: "Konrad 45, Rita 42, Jan 17. Das Fleisch ist von dieser Woche, nicht von gestern. Ein Haken ohne Ware, blank geputzt.",
    scharf: "Der blanke Haken war heute benutzt, das Fett am Boden ist frisch gewischt, nicht alt. Rita zählt nicht laut.",
    sl: "Metz. Engine zieht niemanden.",
  },
  "torstrasse-5": {
    offen: "Wohnhaus Karr. Fuhrunternehmer, Silber 1. Hannes, Berta, Ulf, Mina. Der Schuppen steht am Vorstadtring, nicht hier. Die Stube riecht nach Leder und nassem Tuch. Ausgang die Torstraße.",
    grob: "Stube, zu viele Stiefel an der Wand. Eine Frau, oder niemand, je nach dem, was der SL legt.",
    teil: "Wohnung, nicht Laden. Kinderzeug. Ein Fenster zur Gasse, das auf das Zollhaus sieht.",
    voll: "Hannes 40, Berta 37, Ulf 14, Mina 8. Der Wagen ist nicht hier. An der Wand eine Peitsche, die nicht für Kinder ist.",
    scharf: "Unter der Bank ein Frachtzettel nach Altdorf, durchgerissen, Datum vor der Sperre.",
    sl: "Karr Arbeit am Ring. Engine zieht niemanden.",
  },
  "torstrasse-6": {
    offen: "Wohnhaus Staub. Tagelöhner, Messing 2. Rudi, Nadja, Kilian, Fine. Eng, sauberer als die Bettelgasse, ärmer als Karr. Ausgang die Gasse.",
    grob: "Enge, Kohl, ein Kind das verstummt.",
    teil: "Ein Raum vorn, einer hinten. Vier Leute, zu wenig Stühle.",
    voll: "Rudi 35, Nadja 32, Kilian 9, Fine 5. Die Schuhe an der Tür sind nass vom Tor, nicht vom Feld.",
    scharf: "Rudi war am Zoll, bevor die fünf kamen — Lehm an den Säumen, derselbe wie an Arnes hinterer Tür.",
    sl: "Staub. Engine zieht niemanden.",
  },
  "torstrasse-7": {
    offen: "Kramladen Docht. Kerzen, Seile, Sigmar-Amulette für Reisende. Ewald und Sigrid. Der Laden ist klein und will nützlich sein. Ausgang die Torstraße.",
    grob: "Wachs, Hanf, Metall klein. Die Scheibe beschlägt.",
    teil: "Theke, drei Fächer, Amulette in einer Schale. Seil nach Gewicht.",
    voll: "Ewald 37, Sigrid 34. Die Amulette sind Guss, nicht geweiht. Ein Fach bleibt zu, obwohl der Laden offen ist.",
    scharf: "Im verschlossenen Fach keine Ware — eine Liste von Namen, die am Tor waren, in einer anderen Hand als Arnes.",
    sl: "Docht. Liste nur wenn SL sie legt. Engine zieht niemanden.",
  },
  "torstrasse-8": {
    offen: "Wohnhaus Helm. Arne wohnt hier, dient im Zollhaus. Dora, Finn. Silber 1, die Stube ordentlich, der Helm hängt nicht hier — er ist unter dem Arm am Tor. Ausgang die Torstraße.",
    grob: "Ordnung, wenig Schmuck. Eine Frau in der Tür oder die Tür nur einen Spalt, je nachdem, wen der SL setzt.",
    teil: "Stube, eine Kammer, Finns Kleid am Nagel, sieben Jahre. Das Fenster sieht aufs Zollhaus.",
    voll: "Dora 35, Finn 7. Arne ist nicht im Haus. Auf dem Tisch ein Teller, kalt, für einen Mann der nicht zum Essen kam. Sigmar an der Wand, klein.",
    scharf: "Finn hat vom Fenster die fünf gezählt und der Mutter gesagt. Unter Arnes Nagel ein zweiter Schlüssel, nicht zum Zollhaus — kleiner, älter.",
    sl: "Helm Wohnung. Arne ist in Szene am Zoll, nicht doppelt hier, bis SL ihn schickt. Engine zieht niemanden.",
  },
  "torstrasse-9": {
    offen: "Das Brunnenhaus. Öffentlich, niemand wohnt. Stein, nasser Rand, der Eimer schwer. Das Wasser ist trinkbar, wenn die Stadt das sagt. Ausgang die Torstraße.",
    grob: "Stein, Wasser, dein Gesicht unklar darin.",
    teil: "Kein Dach das schützt. Rinnen zum Pflaster. Keine Schale, kein Schild.",
    voll: "Der Rand ist glatt von Händen. Unten kein Unrat, der Brunnen wird gehalten. Vom Rand siehst du den Torbogen und die Luke.",
    scharf: "Am Innenstein ein Ritz, frisch: fünf Striche, nicht Kreide. Jemand hat hier gezählt, bevor Arne rauskam.",
    sl: "Niemand wohnt. Ritz nur scharf oder SL. Engine zieht niemanden.",
  },
};

export function placeLook(streetId: string, houseNr?: number): PlaceLook | undefined {
  if (houseNr != null) return HOUSE_LOOKS[`${streetId}-${houseNr}`];
  return STREET_LOOKS[streetId];
}
