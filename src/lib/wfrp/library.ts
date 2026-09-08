import type { EncounterTable, LootTable, NpcPoolEntry } from "./types";

export const NPC_POOL: NpcPoolEntry[] = [
  {
    id: "otto",
    characterId: "otto",
    tags: ["haendler", "basar", "buerger"],
    blurb: "Otto Tuchhändler. Hält den Preis. Feilschen ist seine Waffe.",
  },
  {
    id: "kurt",
    characterId: "kurt",
    tags: ["raufbold", "gasse", "gesetzlose"],
    blurb: "Kurt Raufbold. Will den Ballen. Offene Hände, noch keine Klinge.",
  },
  {
    id: "wache",
    characterId: "wache",
    tags: ["ordnung", "basar"],
    blurb: "Eine Stadtwache am Pfeiler. Gähnt, hört selten hin, kommt aber, wenn es laut wird.",
  },
];

export const ENCOUNTER_TABLES: EncounterTable[] = [
  {
    id: "basar-menge",
    label: "Menge am Basar",
    autoChat: false,
    placeIds: ["vorstand", "hauptstrasse"],
    rows: [
      {
        weight: 50,
        id: "nichts",
        label: "Nichts Besonderes",
        body: "Dampf, Stimmen, ein Hund unter dem Stand. Niemand greift zu.",
      },
      {
        weight: 30,
        id: "taschendieb",
        label: "Eine Hand in der Menge",
        body: "Etwas zupft am Beutel. Ein Junge ist schon zwischen den Röcken.",
      },
      {
        weight: 20,
        id: "wache-geht",
        label: "Die Wache geht vorbei",
        body: "Die Wache schiebt sich durch, mustert den Ballen, geht weiter. Otto wird höflicher.",
      },
    ],
  },
  {
    id: "gasse-nacht",
    label: "Die nasse Gasse",
    autoChat: false,
    placeIds: ["eingang", "keller"],
    rows: [
      {
        weight: 40,
        id: "still",
        label: "Nur Tropfen",
        body: "Wasser von den Traufen. Kurt atmet. Sonst nichts.",
      },
      {
        weight: 35,
        id: "zeuge",
        label: "Ein Fenster geht auf",
        body: "Oben schiebt jemand den Laden. Sieht, schließt wieder. Jemand hat Gesichter gesehen.",
      },
      {
        weight: 25,
        id: "wache-naht",
        label: "Stiefel in der Ferne",
        body: "Zwei Paar Stiefel vom Basar her. Noch nicht hier. Bald.",
      },
    ],
  },
];

export const LOOT_TABLES: LootTable[] = [
  {
    id: "otto-stand",
    label: "Unter Ottos Tuch",
    autoChat: false,
    rows: [
      { weight: 55, id: "restwolle", label: "Restwolle", itemName: "Restwolle", pennies: 0 },
      { weight: 25, id: "nadel", label: "Packnadel", itemName: "Packnadel", pennies: 0 },
      { weight: 20, id: "groschen", label: "Drei Groschen im Saum", itemName: "Drei Groschen", pennies: 3 },
    ],
  },
  {
    id: "kurt-taschen",
    label: "Kurts Taschen",
    autoChat: false,
    rows: [
      { weight: 50, id: "nichts", label: "Fussel und ein Nagel", itemName: "Rostnagel", pennies: 0 },
      { weight: 35, id: "groschen", label: "Vier Groschen", itemName: "Vier Groschen", pennies: 4 },
      { weight: 15, id: "ahle", label: "Eine Ahle", itemName: "Ahle", pennies: 0 },
    ],
  },
];

export function rollWeighted<T extends { weight: number }>(
  rows: T[],
  rng: () => number = Math.random,
): T {
  const total = rows.reduce((n, r) => n + r.weight, 0);
  let tick = rng() * total;
  for (const row of rows) {
    tick -= row.weight;
    if (tick <= 0) return row;
  }
  return rows[rows.length - 1];
}
