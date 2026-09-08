import type { Campaign, Scene, SceneBoard } from "./types";

/** Buch S. 164: Gehen = Bewegung × 2 Meter. */
export function walkM(bewegung: number): number {
  return bewegung * 2;
}

/** Buch S. 164: Rennen = Bewegung × 4 Meter. */
export function runM(bewegung: number): number {
  return bewegung * 4;
}

export function tokenPlace(board: SceneBoard, characterId: string): string | undefined {
  return board.tokens.find((t) => t.id === characterId)?.placeId;
}

export function distanceBetween(board: SceneBoard, a?: string, b?: string): number | null {
  if (!a || !b) return null;
  if (a === b) return 0;
  return board.distances[a]?.[b] ?? board.distances[b]?.[a] ?? null;
}

export function pinById(board: SceneBoard, id: string) {
  return board.pins.find((p) => p.id === id);
}

/** Sturmangriff: Distanz ≥ Bewegung und ≤ Rennen. S. 165. */
export function canCharge(bewegung: number, distanceM: number): boolean {
  return distanceM >= bewegung && distanceM <= runM(bewegung);
}

export function canWalkTo(bewegung: number, distanceM: number, combat: boolean): boolean {
  if (!combat) return true;
  return distanceM <= walkM(bewegung);
}

export function foeId(scene: Scene, selfId: string): string | undefined {
  return scene.present.find((id) => id !== selfId);
}

export function whereLine(campaign: Campaign, scene: Scene): string {
  const bits = scene.present.map((id) => {
    const ch = campaign.characters[id];
    const place = tokenPlace(scene.board, id);
    const pin = place ? pinById(scene.board, place) : undefined;
    if (!ch) return id;
    return pin ? `${ch.name.split(" ")[0]} ${pin.label}` : ch.name.split(" ")[0];
  });
  return bits.join(" · ");
}

export function pairs(rows: [string, string, number][]): Record<string, Record<string, number>> {
  const d: Record<string, Record<string, number>> = {};
  for (const [a, b, m] of rows) {
    d[a] ??= {};
    d[b] ??= {};
    d[a][b] = m;
    d[b][a] = m;
  }
  return d;
}
