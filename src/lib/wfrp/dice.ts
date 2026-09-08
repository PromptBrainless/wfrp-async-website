import type { Character, DifficultyId } from "./types";
import { DIFFICULTY_MOD } from "./types";

/** Zehnerstelle. 00 als W100-Ergebnis ist 100 → Zehner 10. */
export function tens(n: number): number {
  return Math.floor(n / 10);
}

export function bonus(value: number): number {
  return Math.floor(value / 10);
}

export function rollD100(rng: () => number = Math.random): number {
  const n = Math.floor(rng() * 100);
  return n === 0 ? 100 : n;
}

/**
 * Dramatischer Wurf, Buch S. 151 (WebP-Datei 152).
 * EG = Zehner(Zielwert) − Zehner(Wurf). Nicht trunc((Ziel−Wurf)/10).
 * 01–05 immer Erfolg (EG mindestens +1), 96–00 immer Misserfolg (EG höchstens −1).
 */
export function successLevels(target: number, roll: number): number {
  const raw = tens(target) - tens(roll);
  if (roll >= 1 && roll <= 5) return Math.max(raw, 1);
  if (roll >= 96) return Math.min(raw, -1);
  return raw;
}

export function isSuccess(target: number, roll: number): boolean {
  if (roll >= 1 && roll <= 5) return true;
  if (roll >= 96) return false;
  return roll <= target;
}

export function isDoubles(roll: number): boolean {
  const n = roll === 100 ? 0 : roll;
  return Math.floor(n / 10) === n % 10;
}

export function capAdvantage(character: Character): number {
  const cap = Math.max(1, bonus(character.attributes.I));
  return Math.min(character.advantage, cap);
}

export function conditionPenalty(character: Character): number {
  let p = 0;
  for (const c of character.conditions) {
    if (
      c.id === "betaubt" ||
      c.id === "erschoepft" ||
      c.id === "demoralisiert" ||
      c.id === "vergiftet"
    ) {
      p += -10 * c.stacks;
    }
  }
  return p;
}

export function skillValue(character: Character, skillId: string): number {
  if (character.skills[skillId] != null) return character.skills[skillId];
  const attrMap: Record<string, keyof Character["attributes"]> = {
    wahrnehmung: "I",
    intuition: "I",
    charme: "CH",
    feilschen: "CH",
    bestechen: "CH",
    klatsch: "CH",
    einschuechtern: "ST",
    schleichen: "GW",
    ausweichen: "GW",
    athletik: "GW",
    nahkampf: "KG",
    ausdauer: "WI",
    besonnenheit: "WK",
    fingerfertigkeit: "GS",
  };
  const attr = attrMap[skillId];
  return attr ? character.attributes[attr] : 0;
}

export function effectiveTarget(
  character: Character,
  skillId: string,
  difficulty: DifficultyId,
  opts?: { combat?: boolean; psychology?: boolean },
): number {
  const base = skillValue(character, skillId);
  const diff = DIFFICULTY_MOD[difficulty];
  const cond = conditionPenalty(character);
  const adv =
    opts?.combat || opts?.psychology ? capAdvantage(character) * 10 : 0;
  return base + diff + cond + adv;
}

export function formatSl(sl: number): string {
  if (sl > 0) return `+${sl} EG`;
  if (sl < 0) return `${sl} EG`;
  return "0 EG";
}

export function egBand(sl: number, success: boolean): string {
  if (success) {
    if (sl >= 6) return "Verblüffender Erfolg";
    if (sl >= 4) return "Beeindruckender Erfolg";
    if (sl >= 2) return "Erfolg";
    return "Knapper Erfolg";
  }
  if (sl <= -6) return "Verblüffendes Scheitern";
  if (sl <= -4) return "Beeindruckendes Scheitern";
  if (sl <= -2) return "Scheitern";
  return "Knappes Scheitern";
}

export function formatDiceNumbers(r: {
  skillLabel: string;
  skillValue: number;
  difficultyMod: number;
  conditionMod: number;
  advantageMod: number;
  target: number;
  roll: number;
  sl: number;
  band: string;
  doubles?: boolean;
  critical?: boolean;
  fumble?: boolean;
  location?: string;
  opposed?: { name: string; skillLabel?: string; target: number; roll: number; sl: number; band?: string };
  proxy?: boolean;
}): string {
  const lines = [
    `${r.skillLabel} ${r.skillValue}`,
    `Schwierigkeit ${r.difficultyMod >= 0 ? `+${r.difficultyMod}` : r.difficultyMod}`,
    r.conditionMod ? `Zustände ${r.conditionMod}` : "Zustände —",
    r.advantageMod ? `Vorteile +${r.advantageMod}` : "Vorteile —",
    `Ziel ${r.target}`,
    `Wurf ${r.roll}`,
    `${formatSl(r.sl)} · ${r.band}`,
  ];
  if (r.doubles) lines.push(r.critical ? "Pasch · kritischer Treffer" : r.fumble ? "Pasch · Patzer" : "Pasch");
  if (r.location) lines.push(`Zone ${r.location}`);
  if (r.opposed) {
    lines.push(
      `gegen ${r.opposed.name} ${r.opposed.skillLabel ?? ""} Ziel ${r.opposed.target} · Wurf ${r.opposed.roll} · ${formatSl(r.opposed.sl)}${r.opposed.band ? ` · ${r.opposed.band}` : ""}`.replace(/\s+/g, " "),
    );
  }
  if (r.proxy) lines.push("in Vertretung");
  return lines.join(" · ");
}

/** Trefferzone: Würfel vertauschen, S. 159. */
export function hitLocation(roll: number): string {
  const n = roll === 100 ? 0 : roll;
  const reversed = (n % 10) * 10 + Math.floor(n / 10);
  const loc = reversed === 0 ? 100 : reversed;
  if (loc <= 9) return "Kopf";
  if (loc <= 24) return "Linker Arm";
  if (loc <= 44) return "Rechter Arm";
  if (loc <= 79) return "Körper";
  if (loc <= 89) return "Linkes Bein";
  return "Rechtes Bein";
}
