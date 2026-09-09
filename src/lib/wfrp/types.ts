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
  portrait?: string;
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

export type IconKind =
  | "welt"
  | "ort"
  | "person"
  | "waffe"
  | "fund"
  | "wurf"
  | "ereignis"
  | "journal"
  | "sl"
  | "intention";

export type SceneHint = "ruhig" | "angespannt" | "gefaehrlich";

export interface OpposedPlate {
  name: string;
  skillLabel: string;
  target: number;
  roll: number;
  sl: number;
  band: string;
}

export interface DicePlate {
  actorName: string;
  skillLabel: string;
  skillValue: number;
  difficulty: DifficultyId;
  difficultyMod: number;
  conditionMod: number;
  advantageMod: number;
  target: number;
  roll: number;
  sl: number;
  band: string;
  success: boolean;
  doubles: boolean;
  critical?: boolean;
  fumble?: boolean;
  location?: string;
  opposed?: OpposedPlate;
  proxy?: boolean;
}

export interface ProtocolEntry {
  id: string;
  at: number;
  kind: "world" | "rules" | "event" | "system" | "intent" | "sl";
  title: string;
  body: string;
  numbers?: string;
  secret?: boolean;
  image?: string;
  portrait?: string;
  placeId?: string;
  speaker?: string;
  icon?: IconKind;
  dice?: DicePlate;
  /** Nur dieser Charakter und der SL sehen den Beat. */
  privateTo?: string;
}

export interface PreparedEvent {
  id: string;
  label: string;
  hint: string;
  fired: boolean;
}

export type TurnPhase = "bewegung" | "schuss" | "nahkampf" | "magie";

export interface CombatState {
  round: number;
  initiative: string[];
  distanceM: number;
  engaged: boolean;
  watchEta: number | null;
  acted: string[];
  turnPhase: TurnPhase;
  initRoll?: Record<string, number>;
}

export interface MapToken {
  id: string;
  placeId: string;
}

export interface MapPin {
  id: string;
  x: number;
  y: number;
  label: string;
  kind: "exit" | "nsc" | "fund" | "hinweis" | "stand";
  journalId?: string;
  revealed: boolean;
  toScene?: string;
}

export interface FogRegion {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  revealed: boolean;
}

export interface SceneBoard {
  image: string;
  widthM: number;
  tokens: MapToken[];
  pins: MapPin[];
  distances: Record<string, Record<string, number>>;
  fog: FogRegion[];
}

export interface JournalCard {
  id: string;
  title: string;
  body: string;
  kind: "bogen" | "nsc" | "fund" | "ort";
  shared: boolean;
  characterId?: string;
}

export interface Scene {
  id: string;
  title: string;
  locationName: string;
  slText: string;
  trigger: string;
  teaser: string;
  difficultyHint: SceneHint;
  prerequisites: string[];
  maxPlayers: number;
  opened: boolean;
  mode: SceneMode;
  present: string[];
  exits: Exit[];
  locationFlags: string[];
  catalogIds: string[];
  protocol: ProtocolEntry[];
  events: PreparedEvent[];
  combat: CombatState | null;
  countdownMs: number;
  board: SceneBoard;
  journal: JournalCard[];
  /** Was die Szene gerade von den Spielern will. Hängt, bis der SL neu spricht. */
  ask?: { speaker?: string; text: string };
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
  skillValue: number;
  target: number;
  roll: number;
  sl: number;
  opposed?: {
    name: string;
    skillId: string;
    skillLabel: string;
    target: number;
    roll: number;
    sl: number;
    band: string;
  };
  success: boolean;
  winnerId?: string;
  difficulty: DifficultyId;
  modifier: number;
  conditionMod: number;
  advantageMod: number;
  doubles: boolean;
  band: string;
  critical?: boolean;
  fumble?: boolean;
  location?: string;
  proxy?: boolean;
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

export type DeskView = "hub" | "szene";

export type WorkPane = "aktion" | "zustand";

export interface JournalNote {
  id: string;
  at: number;
  sceneId: string;
  title: string;
  body: string;
  npcNames: string[];
  openQuestion?: string;
  sourceProtocolId?: string;
  privateTo?: string;
}

export type SlLogKind =
  | "open-scene"
  | "close-scene"
  | "ask-roll"
  | "proxy-roll"
  | "auto"
  | "table"
  | "reveal"
  | "share"
  | "write"
  | "delete"
  | "intervene"
  | "into-leben";

export interface SlLogEntry {
  id: string;
  at: number;
  kind: SlLogKind;
  title: string;
  body: string;
  tableId?: string;
  protocolId?: string;
}

export interface PendingPlayerRoll {
  characterId: string;
  actionId: string;
  skillId: string;
  difficulty: DifficultyId;
  opposedSkill?: string;
  opposedId?: string;
  askedAt: number;
}

export interface NpcPoolEntry {
  id: string;
  characterId: string;
  tags: string[];
  blurb: string;
}

export interface EncounterRow {
  weight: number;
  id: string;
  label: string;
  body: string;
}

export interface EncounterTable {
  id: string;
  label: string;
  autoChat: boolean;
  placeIds: string[];
  rows: EncounterRow[];
}

export interface LootRow {
  weight: number;
  id: string;
  label: string;
  itemName: string;
  pennies: number;
}

export interface LootTable {
  id: string;
  label: string;
  autoChat: boolean;
  rows: LootRow[];
}

export interface TableMark {
  tableId: string;
  autoChat: boolean;
}

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
  pendingPlayerRoll: PendingPlayerRoll | null;
  fortune: FortuneWindow | null;
  phase: Phase;
  countdownEndsAt: number;
  lastRoll: RollResult | null;
  endedSummary: string | null;
  slLog: SlLogEntry[];
  journalNotes: JournalNote[];
  tableMarks: Record<string, boolean>;
}

export interface ActionDef {
  id: string;
  label: string;
  cost: ActionCost;
  tab: ActionTab;
  skill?: string;
  resolver: ResolverKind;
  summary: string;
  ask?: string;
}

export interface ActionView {
  def: ActionDef;
  available: boolean;
  reason?: string;
}
