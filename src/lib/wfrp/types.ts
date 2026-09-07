export const ATTRS = [
  "KG",
  "BF",
  "ST",
  "WI",
  "I",
  "GW",
  "GS",
  "IN",
  "WK",
  "CH",
] as const;

export type Attr = (typeof ATTRS)[number];

export type StatusTier = "messing" | "silber" | "gold";

export type SceneMode = "sozial" | "reise" | "kampf" | "downtime";

export type ActionTab = "sozial" | "bewegung" | "kampf" | "ressourcen";

export type ActionCost = "F" | "B" | "H" | "BH";

export type ResolverKind =
  | "auto"
  | "simple"
  | "opposed"
  | "resource"
  | "move"
  | "combat";

export type DifficultyId =
  | "sehr-leicht"
  | "leicht"
  | "durchschnittlich"
  | "herausfordernd"
  | "schwierig"
  | "schwer"
  | "sehr-schwer";

export const DIFFICULTY_MOD: Record<DifficultyId, number> = {
  "sehr-leicht": 60,
  leicht: 40,
  durchschnittlich: 20,
  herausfordernd: 0,
  schwierig: -10,
  schwer: -20,
  "sehr-schwer": -30,
};

export const DIFFICULTY_LABEL: Record<DifficultyId, string> = {
  "sehr-leicht": "Sehr leicht (+60)",
  leicht: "Leicht (+40)",
  durchschnittlich: "Durchschnittlich (+20)",
  herausfordernd: "Herausfordernd (+0)",
  schwierig: "Schwierig (−10)",
  schwer: "Schwer (−20)",
  "sehr-schwer": "Sehr schwer (−30)",
};

export type ConditionId =
  | "betaubt"
  | "bewusstlos"
  | "blutend"
  | "brennend"
  | "demoralisiert"
  | "erschoepft"
  | "ertaubt"
  | "geblendet"
  | "gefesselt"
  | "niedergestreckt"
  | "ueberrascht"
  | "vergiftet";

export interface ConditionStack {
  id: ConditionId;
  stacks: number;
}

export interface Money {
  crowns: number;
  shillings: number;
  pennies: number;
}

export interface Item {
  id: string;
  name: string;
  notes?: string;
  weapon?: {
    skill: "nahkampf" | "fernkampf";
    damage: number;
    drawn: boolean;
  };
}

export interface Character {
  id: string;
  name: string;
  species: string;
  className: string;
  career: string;
  careerLevel: number;
  status: { tier: StatusTier; rank: number };
  motivation: string;
  attributes: Record<Attr, number>;
  skills: Record<string, number>;
  talents: string[];
  wounds: { current: number; max: number };
  movement: number;
  fate: number;
  fortune: number;
  resilience: number;
  resolve: number;
  advantage: number;
  conditions: ConditionStack[];
  money: Money;
  inventory: Item[];
  engaged: boolean;
  flags: string[];
  kind: "pc" | "npc" | "spectator";
  attitude?: string;
  details?: {
    age?: number;
    heightCm?: number;
    eyes?: string;
    hair?: string;
    shortGoal?: string;
    longGoal?: string;
    herkunft?: string;
    gott?: string;
    bart?: string;
    secretGoal?: string;
    xpCurrent?: number;
    xpTotal?: number;
  };
}

export interface Exit {
  id: string;
  label: string;
  toScene: string;
}

export interface ProtocolEntry {
  id: string;
  at: number;
  kind: "world" | "rules" | "event" | "system";
  title: string;
  body: string;
  numbers?: string;
}

export interface PreparedEvent {
  id: string;
  label: string;
  hint: string;
  fired: boolean;
}

export interface CombatState {
  round: number;
  initiative: string[];
  distanceM: number;
  engaged: boolean;
  watchEta: number | null;
}

export interface Scene {
  id: string;
  title: string;
  locationName: string;
  slText: string;
  trigger: string;
  mode: SceneMode;
  present: string[];
  exits: Exit[];
  locationFlags: string[];
  catalogIds: string[];
  protocol: ProtocolEntry[];
  events: PreparedEvent[];
  combat: CombatState | null;
  countdownMs: number;
}

export interface Intention {
  characterId: string;
  actionId: string;
  note: string;
  targetId?: string;
  exitId?: string;
  bargainShillings?: number;
  submittedAt: number;
}

export interface RollResult {
  id: string;
  characterId: string;
  actionId: string;
  skillId: string;
  skillLabel: string;
  target: number;
  roll: number;
  sl: number;
  opposed?: {
    name: string;
    skillId: string;
    target: number;
  roll: number;
    sl: number;
  };
  success: boolean;
  winnerId?: string;
  difficulty: DifficultyId;
  modifier: number;
}

export interface FortuneWindow {
  characterId: string;
  actionId: string;
  roll: RollResult;
  snapshot: string;
}

export interface PendingResolution {
  intention: Intention;
  difficulty: DifficultyId;
  auto?: "success" | "fail";
  editedNarrative: string;
  roll?: RollResult;
}

export type Role = "spieler" | "sl" | "tisch";

export type Phase =
  | "collecting"
  | "ready"
  | "rolled"
  | "fortune"
  | "ended";

export interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  characters: Record<string, Character>;
  scenes: Record<string, Scene>;
  currentSceneId: string;
  worldFlags: string[];
  intentions: Record<string, Intention>;
  pending: PendingResolution | null;
  fortune: FortuneWindow | null;
  phase: Phase;
  countdownEndsAt: number;
  lastRoll: RollResult | null;
  endedSummary: string | null;
}

export interface ActionDef {
  id: string;
  label: string;
  cost: ActionCost;
  tab: ActionTab;
  skill?: string;
  resolver: ResolverKind;
  summary: string;
}

export interface ActionView {
  def: ActionDef;
  available: boolean;
  reason?: string;
}
