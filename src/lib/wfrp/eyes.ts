import type { ProtocolEntry, Role } from "./types";

/** Was du siehst, sieht nur du und der SL. Die Absicht bleibt öffentlich. */
export const PRIVATE_ACTIONS = new Set(["umschauen", "intuition"]);

export function canSeeBeat(
  e: ProtocolEntry,
  opts: { role: Role; viewId: string },
): boolean {
  if (!e.privateTo) return true;
  if (opts.role === "sl" || opts.role === "tisch") return true;
  return e.privateTo === opts.viewId;
}
