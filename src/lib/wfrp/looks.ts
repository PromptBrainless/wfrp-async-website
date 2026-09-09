import type { LookLayers } from "./types";

export type LookRoll = {
  success: boolean;
  sl: number;
  critical?: boolean;
  fumble?: boolean;
};

export type PlaceLook = LookLayers & {
  /** Öffentlich, sobald die Szene offen ist. Kein Wurf. */
  offen: string;
  /** Nur SL. */
  sl: string;
};

/** Fehlwurf: grob. Knapp (+0): teil. EG 1–3: voll. EG 4+ oder kritisch: voll und scharf. */
export function pickLook(layers: LookLayers, roll: LookRoll): string {
  if (roll.fumble || !roll.success) return layers.grob;
  if (roll.critical || roll.sl >= 4) {
    return `${layers.voll}\n\n${layers.scharf}`;
  }
  if (roll.sl >= 1) return layers.voll;
  return layers.teil;
}
