import { useMemo, useState } from "react";
import { CharHead } from "./CharHead";
import { Composer } from "./Composer";
import { Drawer } from "./Drawer";
import { Leben } from "./Leben";
import { MapBoard } from "./MapBoard";
import { SlDesk } from "./SlDesk";
import { Tracker } from "./Tracker";
import { ZustandPane } from "./ZustandPane";
import { actionAsk } from "@/lib/wfrp/catalog";
import { filterCatalog } from "@/lib/wfrp/grey";
import { useTisch } from "@/lib/wfrp/store";
import { cn } from "@/lib/utils";

type Flap = "blatt" | "karte" | "sl" | "mehr" | null;

export function PlayScreen() {
  const [flap, setFlap] = useState<Flap>(null);
  const setRole = useTisch((s) => s.setRole);
  const setView = useTisch((s) => s.setView);
  const send = useTisch((s) => s.send);
  const role = useTisch((s) => s.role);
  const viewId = useTisch((s) => s.viewId);
  const campaign = useTisch((s) => s.campaign);
  const scene = campaign.scenes[campaign.currentSceneId];
  const actor = campaign.characters[viewId] ?? campaign.characters.greta;

  const views = useMemo(
    () =>
      filterCatalog(actor, scene, {
        fortuneOpen: campaign.phase === "fortune",
        ownRollOpen: false,
      }),
    [actor, scene, campaign.phase],
  );

  const title =
    flap === "blatt" ? actor.name : flap === "karte" ? "Ort" : flap === "sl" ? "Werkzeuge" : flap === "mehr" ? "Weitere Handlungen" : "";

  const openSl = () => {
    setRole("sl");
    const npc = scene.present.find((id) => campaign.characters[id]?.kind === "npc");
    if (npc) setView(npc);
  };

  return (
    <div className="play">
      <div className="blatt play-blatt">
        <div className="blatt-inner play-inner">
          <CharHead
            onBlatt={() => setFlap("blatt")}
            onKarte={() => setFlap("karte")}
            onSl={() => {
              if (role === "sl") setFlap("sl");
              else openSl();
            }}
          />
          <Leben compact />
          <Composer onMore={() => setFlap("mehr")} />
        </div>
      </div>
      {flap ? (
        <Drawer title={title} onClose={() => setFlap(null)}>
          {flap === "blatt" ? <ZustandPane /> : null}
          {flap === "karte" ? <MapBoard /> : null}
          {flap === "mehr" ? (
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
                      setFlap(null);
                    }}
                  >
                    <span>{actionAsk(v.def)}</span>
                    {v.reason ? <span className="ml-2 text-xs text-ink-faint">{v.reason}</span> : null}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          {flap === "sl" ? (
            <div className="space-y-6">
              <Tracker />
              <SlDesk />
            </div>
          ) : null}
        </Drawer>
      ) : null}
    </div>
  );
}
