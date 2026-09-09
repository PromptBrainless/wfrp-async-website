import { Button } from "@/components/ui/button";
import { Hub } from "./Hub";
import { MapBoard } from "./MapBoard";
import { SlDesk } from "./SlDesk";
import { Tracker } from "./Tracker";
import { useTisch } from "@/lib/wfrp/store";
import { isSeatEmpty, SEAT_IDS } from "@/lib/wfrp/seats";

function formatFrist(endsAt: number) {
  const ms = endsAt - Date.now();
  if (ms <= 0) return "Frist um";
  const min = Math.ceil(ms / 60_000);
  if (min < 60) return `${min} Min`;
  const h = Math.floor(min / 60);
  const rest = min % 60;
  return rest ? `${h} Std ${rest} Min` : `${h} Std`;
}

export function Pult() {
  const campaign = useTisch((s) => s.campaign);
  const role = useTisch((s) => s.role);
  const setRole = useTisch((s) => s.setRole);
  const setView = useTisch((s) => s.setView);
  const scene = campaign.scenes[campaign.currentSceneId];
  const sl = role === "sl";
  const pending = campaign.pending;

  return (
    <div className="play-pane-pad space-y-8">
      <section>
        <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Pult</p>
        <h2 className="font-display text-lg text-ink">{scene.title}</h2>
        <p className="mt-1 text-sm text-ink-muted">
          {campaign.title} · {formatFrist(campaign.countdownEndsAt)}
          {scene.opened ? " · offen" : " · zu"}
        </p>
        {pending ? (
          <p className="mt-2 text-sm text-ink">
            Offen: {campaign.characters[pending.intention.characterId]?.name} will {pending.intention.actionId}
          </p>
        ) : (
          <p className="mt-2 text-sm text-ink-muted">Keine offene Absicht.</p>
        )}
        <table className="mt-3 w-full text-sm">
          <thead>
            <tr className="text-left text-ink-faint">
              <th className="font-display font-normal">Spieler</th>
              <th className="font-display font-normal">LP</th>
              <th className="font-display font-normal">Glück</th>
            </tr>
          </thead>
          <tbody>
            {SEAT_IDS.map((id) => {
              const ch = campaign.characters[id];
              if (!ch || isSeatEmpty(ch)) return null;
              return (
                <tr key={id} className="border-t border-ink/10">
                  <td className="py-1.5">{ch.name}</td>
                  <td className="tabular-nums">
                    {ch.wounds.current}/{ch.wounds.max}
                  </td>
                  <td className="tabular-nums">{ch.fortune}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {sl ? null : (
          <Button
            size="sm"
            variant="ink"
            className="mt-3"
            onClick={() => {
              setRole("sl");
              setView("welt");
            }}
          >
            Leitung übernehmen
          </Button>
        )}
      </section>
      <MapBoard />
      <Hub />
      {sl ? (
        <>
          <Tracker />
          <SlDesk />
        </>
      ) : null}
    </div>
  );
}
