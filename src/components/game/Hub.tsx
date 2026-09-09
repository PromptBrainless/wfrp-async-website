import { Button } from "@/components/ui/button";
import { ICONS } from "@/lib/wfrp/icons";
import { useTisch } from "@/lib/wfrp/store";
import { anyPcHasFlag } from "@/lib/wfrp/seats";
import type { SceneHint } from "@/lib/wfrp/types";
import { cn } from "@/lib/utils";

const HINT: Record<SceneHint, string> = {
  ruhig: "Ruhig",
  angespannt: "Angespannt",
  gefaehrlich: "Gefährlich",
};

export function Hub() {
  const campaign = useTisch((s) => s.campaign);
  const role = useTisch((s) => s.role);
  const go = useTisch((s) => s.goScene);
  const open = useTisch((s) => s.openScene);
  const close = useTisch((s) => s.closeScene);
  const sl = role === "sl" || role === "tisch";
  const scenes = Object.values(campaign.scenes);
  const streets = scenes.filter((s) => s.id === "lobby" || s.locationFlags.includes("gasse"));
  const houses = scenes.filter((s) => s.opened && s.locationFlags.includes("haus"));
  const visible = sl
    ? [...streets.filter((s) => s.id !== "lobby"), ...houses]
    : scenes.filter((s) => s.opened && s.id !== "lobby");

  return (
    <section className="hub">
      <header className="mb-4">
        <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Kampagne</p>
        <h2 className="font-display text-2xl text-ink">{campaign.subtitle}</h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
          Nur geöffnete Orte liegen auf dem Tisch. Teaser und Hinweis sind Verpackung — die Schwierigkeit setzt der SL am
          Wurf.
        </p>
      </header>
      <ul className="grid gap-3 sm:grid-cols-2">
        {visible.map((scene) => {
          const blocked = scene.prerequisites.some(
            (flag) => !campaign.worldFlags.includes(flag) && !anyPcHasFlag(campaign, flag),
          );
          return (
            <li key={scene.id} className={cn("hub-card", !scene.opened && "is-closed")}>
              {scene.board.image ? <img src={scene.board.image} alt="" className="hub-still" /> : null}
              <div className="hub-copy">
                <div className="flex items-center gap-2">
                  <img src={ICONS.ort} alt="" className="stamp" />
                  <div>
                    <p className="font-display text-base text-ink">{scene.title}</p>
                    <p className="text-xs text-ink-muted">{scene.locationName}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{scene.teaser}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-ink-faint">
                  {HINT[scene.difficultyHint]} · bis {scene.maxPlayers} zugleich
                  {scene.opened ? "" : " · geschlossen"}
                  {blocked ? " · Vorbedingung offen" : ""}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button size="sm" variant="wax" disabled={!scene.opened && !sl} onClick={() => go(scene.id)}>
                    Betreten
                  </Button>
                  {sl ? (
                    scene.opened ? (
                      <Button size="sm" variant="quiet" onClick={() => close(scene.id)}>
                        Schließen
                      </Button>
                    ) : (
                      <Button size="sm" variant="ink" onClick={() => open(scene.id)}>
                        Öffnen
                      </Button>
                    )
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {visible.length === 0 ? (
        <p className="text-sm text-ink-muted">Noch kein Ort liegt offen. Der SL reißt den Vorhang.</p>
      ) : null}
    </section>
  );
}
