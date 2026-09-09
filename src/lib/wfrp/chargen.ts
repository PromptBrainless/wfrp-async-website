import type { Attr, Character, Money } from "./types";
import { ATTRS } from "./types";
import { bonus } from "./dice";
import { ATTR_OF_SKILL, CAREER_BY_ID as JSON_CAREERS, skillRoot } from "./config";
import { talentAttrBonus } from "./talents";
import {
  CAREER_BY_ID,
  CAREERS,
  CLASS_GEAR,
  CLASS_LABEL,
  DWARF_CLAN,
  DWARF_FIRST,
  ELF_A,
  ELF_B,
  ELF_HIGH,
  ELF_WOOD,
  EYE,
  HAIR,
  HALFLING_CLAN,
  HALFLING_FIRST,
  HUMAN_FIRST,
  HUMAN_LAST,
  RANDOM_TALENTS,
  SKILL_BY_ID,
  SPECIES,
  SPECIES_ROLL,
  type CareerDef,
  type SpeciesId,
} from "./chargen-data";

export function stageOf(career: CareerDef) {
  const json = JSON_CAREERS[career.id]?.stufen[0];
  return {
    name: career.stage1?.name ?? json?.name ?? career.name,
    status: career.stage1?.status ?? (json ? { tier: json.tier, rank: json.rang } : { tier: "messing" as const, rank: 1 }),
    skills: career.stage1?.skills ?? json?.faehigkeiten ?? [],
    talents: career.stage1?.talents ?? [],
    gear: career.stage1?.gear ?? [],
    plus: career.stage1?.plus ?? [],
  };
}

export function d10(rng = Math.random): number {
  return 1 + Math.floor(rng() * 10);
}
export function d100(rng = Math.random): number {
  const n = Math.floor(rng() * 100);
  return n === 0 ? 100 : n;
}
export function twoD10(rng = Math.random): number {
  return d10(rng) + d10(rng);
}

export function rollSpecies(rng = Math.random): { roll: number; id: SpeciesId } {
  const roll = d100(rng);
  const hit = SPECIES_ROLL.find((r) => roll >= r.lo && roll <= r.hi)!;
  return { roll, id: hit.id };
}

export function careerForRoll(species: SpeciesId, roll: number): CareerDef | undefined {
  return CAREERS.find((c) => {
    const range = c.ranges[species];
    return range != null && roll >= range[0] && roll <= range[1];
  });
}

export function careersForSpecies(species: SpeciesId): CareerDef[] {
  return CAREERS.filter((c) => c.ranges[species] != null);
}

export function talentFromRoll(roll: number): string {
  const hit = RANDOM_TALENTS.find((t) => roll >= t.lo && roll <= t.hi);
  return hit?.name ?? "Nachtsicht";
}

export function rollUniqueTalents(count: number, owned: string[], rng = Math.random): string[] {
  const out: string[] = [];
  let guard = 0;
  while (out.length < count && guard < 40) {
    guard += 1;
    const name = talentFromRoll(d100(rng));
    if (owned.includes(name) || out.includes(name)) continue;
    out.push(name);
  }
  return out;
}

export function woundsMax(attrs: Record<Attr, number>, halbling: boolean): number {
  const stb = bonus(attrs.ST);
  const wib = bonus(attrs.WI);
  const wkb = bonus(attrs.WK);
  return halbling ? 2 * wib + wkb : stb + 2 * wib + wkb;
}

export function moneyFromStatus(tier: "messing" | "silber" | "gold", rank: number, rng = Math.random): Money {
  const money: Money = { crowns: 0, shillings: 0, pennies: 0 };
  if (rank <= 0) return money;
  if (tier === "messing") {
    let p = 0;
    for (let i = 0; i < rank; i++) p += twoD10(rng);
    money.pennies = p;
  } else if (tier === "silber") {
    let s = 0;
    for (let i = 0; i < rank; i++) s += d10(rng);
    money.shillings = s;
  } else {
    money.crowns = rank;
  }
  return money;
}

export function emptyAttrs(): Record<Attr, number> {
  return { KG: 0, BF: 0, ST: 0, WI: 0, I: 0, GW: 0, GS: 0, IN: 0, WK: 0, CH: 0 };
}

export function pointBuyValid(raw: Record<Attr, number>): { ok: boolean; sum: number } {
  let sum = 0;
  for (const a of ATTRS) {
    if (raw[a] < 4 || raw[a] > 18) return { ok: false, sum };
    sum += raw[a];
  }
  return { ok: sum === 100, sum };
}

export function finalAttributes(
  species: SpeciesId,
  raw: Record<Attr, number>,
  advances: Record<Attr, number>,
): Record<Attr, number> {
  const basis = SPECIES[species].basis;
  const out = emptyAttrs();
  for (const a of ATTRS) out[a] = basis[a] + raw[a] + (advances[a] ?? 0);
  return out;
}

export function skillTotal(attrVal: number, adv: number): number {
  return attrVal + adv;
}

export function sheetSkillId(id: string): string {
  if (id.startsWith("nahkampf")) return "nahkampf";
  if (id.startsWith("fernkampf")) return "fernkampf";
  if (id.startsWith("schleichen")) return "schleichen";
  if (id.startsWith("unterhalten")) return "unterhalten";
  return id;
}

export function rollName(species: SpeciesId, rng = Math.random): string {
  const pick = (arr: string[]) => arr[Math.floor(rng() * arr.length)]!;
  if (species === "mensch") return `${pick(HUMAN_FIRST)} ${pick(HUMAN_LAST)}`;
  if (species === "zwerg") return `${pick(DWARF_FIRST)} ${pick(DWARF_CLAN)}`;
  if (species === "halbling") return `${pick(HALFLING_FIRST)} ${pick(HALFLING_CLAN)}`;
  const a = pick(ELF_A);
  const b = pick(ELF_B);
  const c = species === "waldelf" ? pick(ELF_WOOD) : pick(ELF_HIGH);
  return `${a}${b}${c}`;
}

export function rollAge(species: SpeciesId, rng = Math.random): number {
  if (species === "mensch") return 15 + d10(rng);
  if (species === "zwerg") {
    let n = 15;
    for (let i = 0; i < 10; i++) n += d10(rng);
    return n;
  }
  if (species === "halbling") {
    let n = 15;
    for (let i = 0; i < 5; i++) n += d10(rng);
    return n;
  }
  let n = 30;
  for (let i = 0; i < 10; i++) n += d10(rng);
  return n;
}

export function rollHeight(species: SpeciesId, rng = Math.random): number {
  const extra = (die: number) => (die === 10 ? d10(rng) : 0);
  if (species === "mensch") {
    const a = d10(rng);
    const b = d10(rng);
    return 150 + (a + b + extra(a) + extra(b)) * 2.5;
  }
  if (species === "zwerg") {
    const a = d10(rng);
    return 130 + (a + extra(a)) * 2.5;
  }
  if (species === "halbling") {
    const a = d10(rng);
    return 100 + (a + extra(a)) * 2.5;
  }
  const a = d10(rng);
  return 180 + (a + extra(a)) * 2.5;
}

export function rollEyes(species: SpeciesId, rng = Math.random): string {
  const a = d10(rng) + d10(rng);
  const table = EYE[species];
  const main = table[a] ?? "Braun";
  if (species === "hochelf" || species === "waldelf") {
    const b = d10(rng) + d10(rng);
    const second = table[b] ?? main;
    return second === main ? main : `${main} / ${second}`;
  }
  return main;
}

export function rollHair(species: SpeciesId, rng = Math.random): string {
  const a = d10(rng) + d10(rng);
  return HAIR[species][a] ?? "Braun";
}

export type ChargenDraft = {
  station: import("./stations").StationId;
  step: number;
  speciesId: SpeciesId | null;
  speciesEp: 0 | 20;
  lastSpeciesRoll: number | null;
  careerId: string | null;
  careerEp: 0 | 25 | 50;
  careerRolls: number[];
  attrMethod: "keep" | "swap" | "buy" | null;
  attrEp: 0 | 25 | 50;
  attrRaw: Record<Attr, number>;
  attrAdvances: Record<Attr, number>;
  fateExtra: number;
  resExtra: number;
  motivation: string;
  plus5: string[];
  plus3: string[];
  talentOr: string[];
  randomTalents: string[];
  careerAdv: Record<string, number>;
  careerTalent: string | null;
  manualSkills: string[];
  money: Money;
  name: string;
  age: number | null;
  heightCm: number | null;
  eyes: string;
  hair: string;
  shortGoal: string;
  longGoal: string;
  groupName: string;
  groupShort: string;
  groupLong: string;
  howMet: string;
  answers: Record<string, string>;
  spentXp: number;
  hood: "gugel" | "maske" | null;
  herkunft: string;
  bart: string;
  gott: string;
  secretGoal: string;
};

export function rollFullDraft(rng = Math.random): ChargenDraft {
  let species = rollSpecies(rng);
  let career: CareerDef | undefined;
  let careerRoll = 0;
  for (let i = 0; i < 30; i++) {
    careerRoll = d100(rng);
    career = careerForRoll(species.id, careerRoll);
    if (career && stageOf(career).skills.length) break;
    career = undefined;
  }
  if (!career) {
    career =
      CAREERS.find((c) => c.complete && Boolean(c.ranges[species.id]) && stageOf(c).skills.length > 0) ??
      CAREERS.find((c) => c.id === "wachmann")!;
  }
  const sp = SPECIES[species.id];
  const raw = emptyAttrs();
  for (const a of ATTRS) raw[a] = twoD10(rng);
  const pool = [...sp.skills];
  const pick = (n: number) => {
    const out: string[] = [];
    while (out.length < n && pool.length) {
      const i = Math.floor(rng() * pool.length);
      out.push(pool.splice(i, 1)[0]!);
    }
    return out;
  };
  const plus5 = pick(3);
  const plus3 = pick(3);
  const talentOr = sp.talentOr.map((pair) => pair[Math.floor(rng() * pair.length)]!);
  const owned = [...sp.talentFixed, ...talentOr];
  const randomTalents = rollUniqueTalents(sp.randomTalents, owned, rng);
  const stage = stageOf(career);
  const careerAdv = Object.fromEntries(stage.skills.map((s) => [s, 5]));
  const careerTalent = stage.talents[Math.floor(rng() * Math.max(1, stage.talents.length))] ?? null;
  const attrAdvances = emptyAttrs();
  const plusAttrs = (stage.plus.length ? stage.plus : ATTRS) as Attr[];
  for (let i = 0; i < 5; i++) attrAdvances[plusAttrs[i % plusAttrs.length]!] += 1;
  const extra = sp.extra;
  const fateExtra = extra > 0 && rng() > 0.5 ? 1 : 0;
  const resExtra = Math.min(extra - fateExtra, extra > 1 && rng() > 0.5 ? 1 : 0);
  return {
    ...newDraft(),
    station: "details",
    step: 8,
    speciesId: species.id,
    speciesEp: 20,
    lastSpeciesRoll: species.roll,
    careerId: career.id,
    careerEp: 0,
    careerRolls: [careerRoll],
    attrMethod: "keep",
    attrEp: 50,
    attrRaw: raw,
    attrAdvances,
    fateExtra,
    resExtra,
    plus5,
    plus3,
    talentOr,
    randomTalents,
    careerAdv,
    careerTalent,
    money: moneyFromStatus(stage.status.tier, stage.status.rank, rng),
    name: rollName(species.id, rng),
    age: rollAge(species.id, rng),
    heightCm: rollHeight(species.id, rng),
    eyes: rollEyes(species.id, rng),
    hair: rollHair(species.id, rng),
    herkunft: "Reikland",
    gott: species.id === "zwerg" ? "Grungni" : species.id.includes("elf") ? "Asuryan" : "Sigmar",
    motivation: "Noch offen.",
  };
}

export function newDraft(): ChargenDraft {
  return {
    station: "welt",
    step: 1,
    speciesId: null,
    speciesEp: 0,
    lastSpeciesRoll: null,
    careerId: null,
    careerEp: 0,
    careerRolls: [],
    attrMethod: null,
    attrEp: 0,
    attrRaw: emptyAttrs(),
    attrAdvances: emptyAttrs(),
    fateExtra: 0,
    resExtra: 0,
    motivation: "",
    plus5: [],
    plus3: [],
    talentOr: [],
    randomTalents: [],
    careerAdv: {},
    careerTalent: null,
    manualSkills: [],
    money: { crowns: 0, shillings: 0, pennies: 0 },
    name: "",
    age: null,
    heightCm: null,
    eyes: "",
    hair: "",
    shortGoal: "",
    longGoal: "",
    groupName: "",
    groupShort: "",
    groupLong: "",
    howMet: "",
    answers: {},
    spentXp: 0,
    hood: null,
    herkunft: "",
    bart: "",
    gott: "",
    secretGoal: "",
  };
}

export function bonusEp(d: ChargenDraft): number {
  return d.speciesEp + d.careerEp + d.attrEp - d.spentXp;
}

export function extraLeft(d: ChargenDraft): number {
  if (!d.speciesId) return 0;
  return SPECIES[d.speciesId].extra - d.fateExtra - d.resExtra;
}

export function plusAdvancesUsed(d: ChargenDraft): number {
  return ATTRS.reduce((n, a) => n + (d.attrAdvances[a] ?? 0), 0);
}

export function careerAdvanceSum(d: ChargenDraft): number {
  return Object.values(d.careerAdv).reduce((n, v) => n + v, 0);
}

export function skillAdvances(d: ChargenDraft): Record<string, number> {
  const out: Record<string, number> = {};
  const add = (id: string, n: number) => {
    out[id] = (out[id] ?? 0) + n;
  };
  for (const id of d.plus5) add(id, 5);
  for (const id of d.plus3) add(id, 3);
  for (const [id, n] of Object.entries(d.careerAdv)) add(id, n);
  return out;
}

export function allTalents(d: ChargenDraft): string[] {
  const sp = d.speciesId ? SPECIES[d.speciesId] : null;
  const list = [
    ...(sp?.talentFixed ?? []),
    ...d.talentOr,
    ...d.randomTalents,
    ...(d.careerTalent ? [d.careerTalent] : []),
  ];
  return [...new Set(list)];
}

export function draftToCharacter(d: ChargenDraft): Character | null {
  if (!d.speciesId || !d.careerId || !d.name.trim()) return null;
  const sp = SPECIES[d.speciesId];
  const career = CAREER_BY_ID[d.careerId];
  if (!career) return null;
  const attrs = finalAttributes(d.speciesId, d.attrRaw, d.attrAdvances);
  const talents = allTalents(d);
  attrs.CH += talentAttrBonus({ talents }, "CH");
  const adv = skillAdvances(d);
  const skills: Record<string, number> = {};
  for (const [id, n] of Object.entries(adv)) {
    const def = SKILL_BY_ID[id];
    const attrKey = def?.attr ?? ATTR_OF_SKILL[skillRoot(id)];
    const attrVal = attrKey ? attrs[attrKey] : 0;
    skills[id] = skillTotal(attrVal, n);
  }
  const lp = woundsMax(attrs, sp.lpHalbling);
  const fate = sp.schicksal + d.fateExtra;
  const res = sp.zaehigkeit + d.resExtra;
  const stage = stageOf(career);
  const status = stage.status;
  const gear = [...CLASS_GEAR[career.klasse], ...stage.gear].map((name) => {
    if (name === "Gugel oder Maske") return d.hood === "maske" ? "Maske" : "Gugel";
    return name;
  });
  const id = `sc-${Date.now().toString(36)}`;
  return {
    id,
    name: d.name.trim(),
    species: d.speciesId,
    className: CLASS_LABEL[career.klasse],
    career: `${career.name} · ${stage.name}`,
    careerLevel: 1,
    status,
    motivation: d.motivation || "—",
    attributes: attrs,
    skills,
    talents,
    wounds: { current: lp, max: lp },
    movement: sp.bewegung,
    fate,
    fortune: fate,
    resilience: res,
    resolve: res,
    advantage: 0,
    conditions: [],
    money: { ...d.money },
    inventory: gear.map((name, i) => ({
      id: `g${i}`,
      name,
      weapon: name === "Dolch" || name === "Handwaffe" ? { skill: "nahkampf" as const, damage: 0, drawn: false } : undefined,
    })),
    engaged: false,
    flags: [],
    kind: "pc",
    details: {
      age: d.age ?? undefined,
      heightCm: d.heightCm ?? undefined,
      eyes: d.eyes || undefined,
      hair: d.hair || undefined,
      shortGoal: d.shortGoal || undefined,
      longGoal: d.longGoal || undefined,
      herkunft: d.herkunft || d.answers.woher || undefined,
      gott: d.gott || d.answers.glaube || undefined,
      bart: d.bart || undefined,
      secretGoal: d.secretGoal || undefined,
      xpCurrent: bonusEp(d),
      xpTotal: d.speciesEp + d.careerEp + d.attrEp,
    },
  };
}
