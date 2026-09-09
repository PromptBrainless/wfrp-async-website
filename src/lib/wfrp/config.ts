/** Eine Quelle: knowledge/data/*.json. Kein zweites Katalog-Array in TypeScript. */
import catalogJson from "../../../knowledge/data/catalog.json";
import careersJson from "../../../knowledge/data/careers.json";
import skillsJson from "../../../knowledge/data/skills.json";
import type { ActionCost, ActionDef, ActionTab, Attr, ResolverKind, StatusTier } from "./types";

type JsonResolver = "standard" | "vergleich" | "auto" | "resource" | "combat" | "move" | "simple" | "opposed";

interface JsonAction {
  id: string;
  label: string;
  kosten: string;
  tab: string;
  skill: string | null;
  resolver: JsonResolver;
  summary: string;
  ask?: string;
}

interface JsonSkill {
  id: string;
  name: string;
  attr: string;
  art: "grund" | "ausbau";
  gruppiert?: boolean;
  spezialisierungen?: string[];
  seite: number;
  v1?: boolean;
}

const RESOLVER: Record<JsonResolver, ResolverKind> = {
  standard: "simple",
  vergleich: "opposed",
  simple: "simple",
  opposed: "opposed",
  auto: "auto",
  resource: "resource",
  combat: "combat",
  move: "move",
};

function asCost(raw: string): ActionCost {
  if (raw === "F" || raw === "B" || raw === "H" || raw === "BH") return raw;
  throw new Error(`catalog.json: unbekannte Kosten ${raw}`);
}

function asTab(raw: string): ActionTab {
  if (raw === "sozial" || raw === "bewegung" || raw === "kampf" || raw === "ressourcen") return raw;
  throw new Error(`catalog.json: unbekannter Tab ${raw}`);
}

export const SKILLS: JsonSkill[] = skillsJson.skills as JsonSkill[];

export const SKILLS_BY_ID: Record<string, JsonSkill> = Object.fromEntries(SKILLS.map((s) => [s.id, s]));

export const SKILL_LABEL: Record<string, string> = Object.fromEntries(SKILLS.map((s) => [s.id, s.name]));

export const AUSBAU_IDS = new Set(SKILLS.filter((s) => s.art === "ausbau").map((s) => s.id));

export const ATTR_OF_SKILL: Record<string, Attr> = Object.fromEntries(
  SKILLS.map((s) => [s.id, s.attr as Attr]),
);

export const CATALOG: ActionDef[] = (catalogJson.actions as JsonAction[]).map((row) => {
  const def: ActionDef = {
    id: row.id,
    label: row.label,
    cost: asCost(row.kosten),
    tab: asTab(row.tab),
    resolver: RESOLVER[row.resolver],
    summary: row.summary,
  };
  if (row.skill) def.skill = row.skill;
  if (row.ask) def.ask = row.ask;
  return def;
});

export const CATALOG_BY_ID: Record<string, ActionDef> = Object.fromEntries(CATALOG.map((a) => [a.id, a]));

/** Gasse/Haus: soziale und Bewegungskarten. Kampf bleibt grau, bis der SL den Modus setzt. */
export const SCENE_CATALOG_IDS = CATALOG.filter((d) => d.tab !== "kampf").map((d) => d.id);

export function actionAsk(def: ActionDef): string {
  return def.ask ?? def.label;
}

export const SOCIAL_FAIL_IDS = new Set(["reden", "feilschen", "bestechen", "einschuechtern", "klatsch"]);

export const KOSTEN_LABEL = catalogJson.kosten as Record<string, string>;

export interface CareerStufe {
  nr: number;
  name: string;
  tier: StatusTier;
  rang: number;
  faehigkeiten: string[];
  talente?: string[];
}

export interface CareerRow {
  id: string;
  name: string;
  klasse: string;
  seite: number;
  stufen: CareerStufe[];
}

export const CAREERS: CareerRow[] = careersJson.careers as CareerRow[];
export const CAREER_BY_ID: Record<string, CareerRow> = Object.fromEntries(CAREERS.map((c) => [c.id, c]));

export function skillRoot(id: string): string {
  const i = id.indexOf(".");
  return i === -1 ? id : id.slice(0, i);
}

export function skillSpecSlug(id: string): string | undefined {
  const i = id.indexOf(".");
  return i === -1 ? undefined : id.slice(i + 1);
}

function prettySpec(slug: string): string {
  if (slug === "wahl") return "nach Wahl";
  return slug.replace(/_/g, " ");
}

export function skillLabel(id: string): string {
  const root = skillRoot(id);
  const spec = skillSpecSlug(id);
  const name = SKILL_LABEL[root] ?? root;
  return spec ? `${name} (${prettySpec(spec)})` : name;
}

export function careerForName(raw: string): CareerRow | undefined {
  const t = raw.toLowerCase();
  return CAREERS.find((c) => t === c.id || t.startsWith(c.id) || t.includes(c.name.toLowerCase()));
}

/** Fähigkeiten der Stufen 1..level, inkl. Spezialisierungen. */
export function careerSkillIds(careerIdOrName: string, level: number): string[] {
  const row = CAREER_BY_ID[careerIdOrName] ?? careerForName(careerIdOrName);
  if (!row) return [];
  const cap = Math.min(4, Math.max(1, level || 1));
  const out: string[] = [];
  for (const st of row.stufen) {
    if (st.nr > cap) break;
    for (const id of st.faehigkeiten ?? []) {
      if (!out.includes(id)) out.push(id);
    }
  }
  return out;
}
