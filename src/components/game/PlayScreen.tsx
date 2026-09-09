import { useMemo, useState } from "react";
import { CharHead } from "./CharHead";
import { Composer } from "./Composer";
import { Doors, type DoorId } from "./Doors";
import { Drawer } from "./Drawer";
import { JournalPane } from "./JournalPane";
import { Leben } from "./Leben";
import { Pult } from "./Pult";
import { ZustandPane } from "./ZustandPane";
import { actionAsk } from "@/lib/wfrp/catalog";
import { filterCatalog } from "@/lib/wfrp/grey";
import { useTisch } from "@/lib/wfrp/store";
import { activePc } from "@/lib/wfrp/seats";
import { cn } from "@/lib/utils";

export function PlayScreen() {
  const [door, setDoor] = useState<DoorId>("tisch");
  const [more, setMore] = useState(false);
  const send = useTisch((s) => s.send);
  const viewId = useTisch((s) => s.viewId);
  const campaign = useTisch((s) => s.campaign);
  const scene = campaign.scenes[campaign.currentSceneId];
  const actor = activePc(campaign, viewId);

  const views = useMemo(
    () =>
      actor
        ? filterCatalog(actor, scene, {
            fortuneOpen: campaign.phase === "fortune",
            ownRollOpen: false,
          })
        : [],
    [actor, scene, campaign.phase],
  );

  return (
    <div className="play">
      <div className="blatt play-blatt">
        <div className="blatt-inner play-inner">
          <CharHead onBlatt={() => setDoor("blatt")} />
          <div className="play-pane">
            {door === "tisch" ? <Leben compact /> : null}
            {door === "blatt" ? <ZustandPane /> : null}
            {door === "journal" ? <JournalPane /> : null}
            {door === "pult" ? <Pult /> : null}
          </div>
          {door === "tisch" ? <Composer onMore={() => setMore(true)} /> : null}
          <Doors door={door} onDoor={setDoor} />
        </div>
      </div>
      {more ? (
        <Drawer title="Weitere Handlungen" onClose={() => setMore(false)}>
          <ul className="space-y-2">
            {views.map((v) => (
              <li key={v.def.id}>
                <button
                  type="button"
                  disabled={!v.available}
                  className={cn("ask-chip w-full justify-start text-left", !v.available && "opacity-40")}
                  onClick={() => {
                    if (!v.available) return;
                    send(v.def.id);
                    setMore(false);
                  }}
                >
                  <span>{actionAsk(v.def)}</span>
                  {v.reason ? <span className="ml-2 text-xs text-ink-faint">{v.reason}</span> : null}
                </button>
              </li>
            ))}
          </ul>
        </Drawer>
      ) : null}
    </div>
  );
}
