import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CharHead } from "./CharHead";
import { Composer } from "./Composer";
import { Doors, type DoorId } from "./Doors";
import { Drawer } from "./Drawer";
import { FristBand } from "./FristBand";
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
  const selectAction = useTisch((s) => s.selectAction);
  const viewId = useTisch((s) => s.viewId);
  const seatId = useTisch((s) => s.seatId);
  const role = useTisch((s) => s.role);
  const campaign = useTisch((s) => s.campaign);
  const scene = campaign.scenes[campaign.currentSceneId];
  const actor = activePc(campaign, viewId);
  const sl = role === "sl";

  useEffect(() => {
    if (!sl && door === "pult") setDoor("tisch");
  }, [sl, door]);

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

  if (!seatId && role !== "sl") {
    return (
      <div className="play">
        <div className="blatt play-blatt">
          <div className="blatt-inner play-inner" style={{ justifyContent: "center", padding: "2rem" }}>
            <p className="font-display text-lg text-ink">Wer sitzt?</p>
            <p className="mt-2 text-sm text-ink-muted">
              Erst eine Karte wählen. Dann der Tisch — du siehst mit den Augen, die du nimmst.
            </p>
            <Link to="/" className="mt-4 text-sm text-ink underline-offset-4 hover:underline">
              Zur Auswahl
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="play">
      <div className="blatt play-blatt">
        <div className="blatt-inner play-inner">
          <CharHead onBlatt={() => setDoor("blatt")} />
          {door === "tisch" ? <FristBand /> : null}
          <div className="play-pane">
            {door === "tisch" ? <Leben compact /> : null}
            {door === "blatt" ? <ZustandPane /> : null}
            {door === "journal" ? <JournalPane /> : null}
            {door === "pult" && sl ? <Pult /> : null}
          </div>
          {door === "tisch" ? <Composer onMore={() => setMore(true)} /> : null}
          <Doors door={door} onDoor={setDoor} sl={sl} />
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
                    selectAction(v.def.id);
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
