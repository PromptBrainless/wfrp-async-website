/** Eine Quelle: knowledge/data/*.json. Kein zweites Katalog-Array in TypeScript. */
import catalogJson from "../../../knowledge/data/catalog.json";
import skillsJson from "../../../knowledge/data/skills.json";
import type { ActionCost, ActionDef, ActionTab, Attr, ResolverKind } from "./types";

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

export function actionAsk(def: ActionDef): string {
  return def.ask ?? def.label;
}

export const SOCIAL_FAIL_IDS = new Set(["reden", "feilschen", "bestechen", "einschuechtern", "klatsch"]);

export const KOSTEN_LABEL = catalogJson.kosten as Record<string, string>;
