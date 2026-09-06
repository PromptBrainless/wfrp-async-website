# Fähigkeiten – Hauptliste

Quelle: S. 118–131. Maschinentabelle: [../data/skills.json](../data/skills.json).

Fähigkeitswert = Spielwert + Steigerungen.  
Grund: auch ohne Steigerung. Ausbau: mindestens 1 Steigerung, sonst illegal (grau).  
Gruppiert: jede Spezialisierung ist eine eigene Fähigkeit.

**Fahren ist GW, nicht GS** (S. 122).  
**Kunst:** Kurzliste S. 118 Grund, Eintrag S. 125 Ausbau → Engine folgt dem Eintrag.

## Grundfähigkeiten

| Fähigkeit | Attr | Gruppiert | v1 |
|-----------|------|-----------|----|
| Anführen | CH | | |
| Athletik | GW | | ja |
| Ausdauer | WI | | ja |
| Ausweichen | GW | | ja |
| Besonnenheit | WK | | ja |
| Bestechen | CH | | ja |
| Charme | CH | | ja |
| Einschüchtern | ST (SL: WK/IN) | | ja |
| Fahren | GW | | |
| Feilschen | CH | | ja |
| Glücksspiel | IN | | |
| Intuition | I | | ja |
| Klatsch | CH | | ja |
| Klettern | ST | | |
| Nahkampf | KG | Standard, Fechten, Flegel, Parade, Kavallerie, Stangenwaffe, Waffenlos, Zweihändig | ja |
| Navigation | I | | |
| Reiten | GW | Demigreif, Greif, Pegasus, Pferd, Riesenwolf | |
| Rudern | ST | | |
| Schleichen | GW | Land, Stadt, Untergrund | ja |
| Tiere bezirzen | WK | | |
| Überleben | IN | | |
| Unterhalten | CH | Erzählen, Possenreißen, Schauspielerei, Singen | |
| Wahrnehmung | I | | ja |
| Zechen | WI | | |

## Ausbaufähigkeiten

| Fähigkeit | Attr | Gruppiert | v1 |
|-----------|------|-----------|----|
| Abrichten | IN | Demigreif, Hund, Pegasus, Pferd, Taube | |
| Artistik | GW | Akrobatik, Feuerspucken, Jonglieren, Narrenspiel, Pantomime, Seillaufen, Tanz | |
| Beruf | GS | Apotheker, Balsamierer, Gerber, Kalligraph, Kerzenzieher, Koch, Schmied, Zimmermann | |
| Beten | CH | | |
| Fallen stellen | GS | | |
| Fernkampf | BF | Armbrust, Bogen, Explosiv, Fesselnd, Schießpulver, Schleuder, Technicus, Werfen | |
| Fingerfertigkeit | GS | | Event |
| Geheimzeichen | IN | Diebeszinken, Gilde, Grauer Orden, Kundschafter, Waldläufer, Vagabunden | |
| Heilen | IN | | grau ohne Steigerung |
| Kanalisieren | WK | die acht Winde + Dhar | |
| Kunst | GS | Bildhauerei, Gravuren, Kartographie, Malerei, Mosaike, Tätowierungen, Teppichknüpfen | |
| Musizieren | GS | Cembalo, Horn, Laute, Sackpfeifen, Violine | |
| Nachforschen | IN | braucht Lesen & Schreiben | |
| Schätzen | IN | | |
| Schlösser öffnen | GS | | |
| Schwimmen | ST | | |
| Segeln | GW | Barke, Fregatte, Karavelle, Kogge, Wolfsschiff | |
| Sprache | IN | Bretonisch, Diebeszunge, Gildenzunge, Khazalid, Klassisch, Magick, Schlachtenzunge, Tileanisch | |
| Spurenlesen | I | | |
| Tierpflege | IN | | |
| Wissen | IN | Geologie, Geschichte, Gesetze, Heraldik, Magick, Metallurgie, Naturwissenschaft, Technicus, Theologie, Volkskunde | |

## Resolver-Notizen für v1

- **Charme:** Vergleich gegen Besonnenheit, außer das Ziel ist empfänglich. Ziele = CHB + EG.
- **Einschüchtern:** Vergleich gegen Besonnenheit. Ziele = STB + EG.
- **Feilschen:** Vergleich. Sieg −10 % Preis, Verblüffend oder Verhandlungsgenie −20 % (S. 291, Talent S. 147).
- **Bestechen:** Erst Wurf, ob käuflich; Preis aus Verdienst; EG = zusätzliche Schätzversuche.
- **Fingerfertigkeit:** Vergleich gegen Wahrnehmung. Knapp (+0/+1): Ziel wird misstrauisch.
- **Intuition im Kampf:** +1 Vorteil/Runde beobachten, Maximum INB.

Einzeltexte der Demo-Fähigkeiten bleiben in `faehigkeiten/`.

### Siehe auch
- [Struktur](01-struktur.md)
- [Talente](03-talente-liste.md)
- [Aktionskatalog](../10-system/04-aktionskatalog-v1.md)
