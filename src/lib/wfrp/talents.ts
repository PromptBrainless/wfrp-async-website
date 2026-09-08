import type { Character } from "./types";
import { skillRoot } from "./config";
import { isSuccess } from "./dice";

/** Anzeige-Name oder Slug → Talent-ID. */
export function talentSlug(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/&/g, "und")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

export function hasTalent(character: { talents: string[] }, id: string): boolean {
  const want = talentSlug(id);
  return character.talents.some((t) => talentSlug(t) === want);
}

/** Einnehmendes Wesen: +5 CH am Anfang, keine Steigerung. */
export function talentAttrBonus(character: { talents: string[] }, attr: string): number {
  if (attr === "CH" && hasTalent(character, "einnehmendes_wesen")) return 5;
  return 0;
}

function swapDigits(n: number): number {
  if (n === 100) return 100;
  const tens = Math.floor(n / 10);
  const units = n % 10;
  const swapped = units * 10 + tens;
  return swapped === 0 ? 100 : swapped;
}

/**
 * Straßenkatze: bei misslungenem Schleichen (Stadt) Ziffern tauschen, wenn das gelingt.
 * Verhandlungsgenie hängt nicht am Wurf, sondern am Preis (siehe bargainExtra).
 */
export function applyTalentToRoll(
  character: Character,
  skillId: string,
  target: number,
  roll: number,
): { roll: number; note?: string } {
  const root = skillRoot(skillId);
  const spec = skillId.includes(".") ? skillId.slice(skillId.indexOf(".") + 1) : "";
  const citySneak = root === "schleichen" && (spec === "stadt" || spec === "");
  if (citySneak && hasTalent(character, "strassenkatze") && !isSuccess(target, roll)) {
    const swapped = swapDigits(roll);
    if (isSuccess(target, swapped)) {
      return { roll: swapped, note: "Straßenkatze: Ziffern getauscht." };
    }
  }
  return { roll };
}

/** Nach gewonnenem Feilschen/Kaufen: +10 % Preisverschiebung. Engine rechnet nicht den Preis. */
export function bargainExtra(character: Character, actionId: string, success: boolean): number {
  if (!success) return 0;
  if (actionId !== "feilschen" && actionId !== "kaufen") return 0;
  return hasTalent(character, "verhandlungsgenie") ? 10 : 0;
}
