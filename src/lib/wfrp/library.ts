import type { EncounterTable, LootTable, NpcPoolEntry } from "./types";

/** Bibliothek der Kampagne. Kein Demo-Pool. NSCs liegen in drosselau-leute. Tabellen: SL zieht, Log zuerst, nie autoChat. */
export const NPC_POOL: NpcPoolEntry[] = [];

export const ENCOUNTER_TABLES: EncounterTable[] = [];

export const LOOT_TABLES: LootTable[] = [];

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
