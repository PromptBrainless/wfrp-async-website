import type { Campaign, JournalNote, ProtocolEntry, Scene } from "./types";

/** Spec 12-journal: world/event/intent öffentlich. Regeln, system, sl, secret: nie. */
export function noteFromBeat(scene: Scene, entry: ProtocolEntry): JournalNote | null {
  if (entry.secret) return null;
  if (entry.kind === "system" || entry.kind === "sl" || entry.kind === "rules") return null;
  if (entry.kind !== "world" && entry.kind !== "event" && entry.kind !== "intent") return null;
  const body = entry.body.trim();
  if (!body) return null;
  const short = body.length > 280 ? `${body.slice(0, 277)}…` : body;
  const npcNames = entry.speaker && entry.icon === "person" ? [entry.title] : [];
  const note: JournalNote = {
    id: crypto.randomUUID(),
    at: entry.at,
    sceneId: scene.id,
    title: entry.title,
    body: short,
    npcNames,
    sourceProtocolId: entry.id,
    privateTo: entry.privateTo,
  };
  if (entry.kind === "intent" && entry.icon === "intention") note.openQuestion = "Wurf oder automatisches Gelingen?";
  return note;
}

export function addBeat(campaign: Campaign, sceneId: string, entry: ProtocolEntry): Campaign {
  const scene = campaign.scenes[sceneId];
  if (!scene) return campaign;
  const scn: Scene = { ...scene, protocol: [...scene.protocol, entry] };
  const note = noteFromBeat(scn, entry);
  return {
    ...campaign,
    scenes: { ...campaign.scenes, [scn.id]: scn },
    journalNotes: note ? [...campaign.journalNotes, note] : campaign.journalNotes,
  };
}
