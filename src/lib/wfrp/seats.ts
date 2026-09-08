import type { Campaign, Character } from "./types";

export const SEAT_IDS = ["platz-1", "platz-2", "platz-3", "platz-4", "platz-5"] as const;
export const SEAT_COUNT = SEAT_IDS.length;

export function isSeatEmpty(c: Character | undefined): boolean {
  if (!c || c.kind !== "pc") return true;
  return !c.species;
}

export function pcList(campaign: Campaign): Character[] {
  return SEAT_IDS.map((id) => campaign.characters[id]).filter((c): c is Character => Boolean(c));
}

export function filledPcs(campaign: Campaign): Character[] {
  return pcList(campaign).filter((c) => !isSeatEmpty(c));
}

export function firstEmptySeatId(campaign: Campaign): (typeof SEAT_IDS)[number] | undefined {
  return SEAT_IDS.find((id) => isSeatEmpty(campaign.characters[id]));
}

export function activePc(campaign: Campaign, viewId: string): Character | undefined {
  const v = campaign.characters[viewId];
  if (v?.kind === "pc") return v;
  return filledPcs(campaign)[0] ?? pcList(campaign)[0];
}

export function anyPcHasFlag(campaign: Campaign, flag: string): boolean {
  return filledPcs(campaign).some((c) => c.flags.includes(flag));
}

export function claimSeat(campaign: Campaign, incoming: Character): { campaign: Campaign; id: string } | null {
  const seat = firstEmptySeatId(campaign);
  if (!seat) return null;
  const next: Character = { ...incoming, id: seat, kind: "pc" };
  return {
    campaign: { ...campaign, characters: { ...campaign.characters, [seat]: next } },
    id: seat,
  };
}
