import { useTisch } from "@/lib/wfrp/store";
import { isSeatEmpty, SEAT_IDS } from "@/lib/wfrp/seats";

export function FristBand() {
  const campaign = useTisch((s) => s.campaign);
  const scene = campaign.scenes[campaign.currentSceneId];
  if (scene.combat) return null;
  const rows = SEAT_IDS.map((id) => campaign.characters[id]).filter((c) => c && !isSeatEmpty(c));
  const open = rows.filter((c) => !campaign.intentions[c.id]);
  const done = rows.filter((c) => campaign.intentions[c.id]);

  return (
    <p className="frist-band">
      Kein Zug. Alle dürfen handeln, bis die Frist um ist.
      {done.length ? ` ${done.map((c) => c.name).join(", ")} ${done.length === 1 ? "hat" : "haben"} gehandelt.` : ""}
      {open.length ? ` Offen: ${open.map((c) => c.name).join(", ")}.` : " Alle Absichten liegen."}
      {scene.ask?.speaker ? ` ${scene.ask.speaker} wartet.` : ""}
    </p>
  );
}
