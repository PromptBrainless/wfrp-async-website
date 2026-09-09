# Datenbanken v1

**Weg · Gerät 3/4** · [Wege](../00-WEGE.md) · [← Katalog](../10-system/04-aktionskatalog-v1.md) · [Engine →](../../src/lib/wfrp/README.md)

Maschinenlesbare Tabellen für die Engine. Autorität: GRW 2. Auflage. 
Schema-Prosa: [../10-system/02-datenmodell.md](../10-system/02-datenmodell.md).

| Datei | Inhalt | Buch |
|-------|--------|------|
| `register.json` | Alle IDs (Attribut, Fähigkeit, Talent, Karriere, Zustand, Qualität, Befehl) | verbindlich |
| `bogen.json` | Kanonische Charakterbogen-Keys | S. 33–36, 44–45 |
| `skills.json` | Alle 45 Fähigkeiten — **treibt** Labels, Attribut, Ausbau | S. 118–131 |
| `talents.json` | 167 Talent-Slugs + Seite | S. 132–147 |
| `careers.json` | 64 Karrieren, 4 Stufen inkl. Fähigkeiten | S. 53–116 |
| `attributes.json` | 10 Spielwerte + Bonus-Key | S. 33–36 |
| `qualities.json` | 20 Qualitäten + 6 Makel | S. 297–299 |
| `conditions.json` | 12 Zustände inkl. Stapel, Ende, Folge | S. 167–169 |
| `weapons.json` | Nahkampf + Fernkampf | S. 294–296 |
| `species.json` | 5 Völker: Basis, LP, Start-Fähigkeiten/Talente | S. 24–29, 33–36 |
| `characters.json` | leer / Kampagne 1 Plätze | — |
| `catalog.json` | Aktionskatalog v1 — **treibt** `src/lib/wfrp/config.ts` | abgeleitet |
| `scenes.json` | Drosselau-Graph, alle zu | Kampagne 1 |
| `drosselau-stammbaeume.json` | 42 Häuser | Kampagne 1 |
| `rules-core.json` | Würfel, Geld, Feilschen, Sturmangriff, Glück | S. 149–172, 288–292 |
| `battle-index.json` | 92 Battle-Einheiten: Name, Gruppe, Traits, URL — **keine WFRP-Werte** | 4th.whfb.app |

v1 **nicht** in den Tabellen: Magie, Gebete, Krankheiten-Tabellen, vollständige Talenttexte, alle Karriereprofile.

### Siehe auch
- [Wege · Gerät](../00-WEGE.md)
- [Datenmodell](../10-system/02-datenmodell.md)
- [Vollständigkeit](../10-system/06-vollstaendigkeit.md)
- [src/lib/wfrp](../../src/lib/wfrp/README.md)
