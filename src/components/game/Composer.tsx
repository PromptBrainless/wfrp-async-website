import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { actionAsk, CATALOG_BY_ID } from "@/lib/wfrp/catalog";
import { filterCatalog } from "@/lib/wfrp/grey";
import { formatRollLine } from "@/lib/wfrp/resolve";
import { useTisch } from "@/lib/wfrp/store";
import { activePc } from "@/lib/wfrp/seats";
import { DIFFICULTY_LABEL, type DifficultyId } from "@/lib/wfrp/types";
import { cn } from "@/lib/utils";

const FIRST = ["feilschen", "intuition", "umschauen", "reden", "kaufen", "gehen", "angreifen", "warten", "fliehen"];

export function Composer({ onMore }: { onMore: () => void }) {
  const campaign = useTisch((s) => s.campaign);
  const role = useTisch((s) => s.role);
  const viewId = useTisch((s) => s.viewId);
  const setView = useTisch((s) => s.setView);
  const send = useTisch((s) => s.send);
  const speak = useTisch((s) => s.speak);
  const note = useTisch((s) => s.note);
  const setNote = useTisch((s) => s.setNote);
  const playerRoll = useTisch((s) => s.playerRoll);
  const slAskRoll = useTisch((s) => s.slAskRoll);
  const slRoll = useTisch((s) => s.slRoll);
  const slAuto = useTisch((s) => s.slAuto);
  const fortune = useTisch((s) => s.fortune);
  const difficulty = useTisch((s) => s.difficulty);
  const setDifficulty = useTisch((s) => s.setDifficulty);
  const pending = campaign.pending;
  const pendingRoll = campaign.pendingPlayerRoll;
  const win = campaign.fortune;
  const scene = campaign.scenes[campaign.currentSceneId];
  const sl = role === "sl";
  const actor = activePc(campaign, viewId);
  const cast = ["welt", ...scene.present.filter((id) => campaign.characters[id]?.kind === "npc")];

  const views = useMemo(
    () =>
      actor
        ? filterCatalog(actor, scene, {
            fortuneOpen: campaign.phase === "fortune",
            ownRollOpen: campaign.lastRoll?.characterId === actor.id && campaign.phase === "fortune",
          })
        : [],
    [actor, scene, campaign.phase, campaign.lastRoll],
  );

  const shown = [...views.filter((v) => v.available)]
    .sort((a, b) => {
      const ia = FIRST.indexOf(a.def.id);
      const ib = FIRST.indexOf(b.def.id);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    })
    .slice(0, 4);

  const gate =
    sl && pending && pending.intention.characterId !== viewId ? (
      <div className="sl-gate">
        <p className="font-display text-sm text-ink">
          {campaign.characters[pending.intention.characterId]?.name ?? "Spieler"} will{" "}
          {CATALOG_BY_ID[pending.intention.actionId]?.label ?? pending.intention.actionId}
        </p>
        {pending.intention.note ? <p className="mt-1 text-sm text-ink-muted">{pending.intention.note}</p> : null}
        <label className="mt-2 block text-xs text-ink-muted">
          Schwierigkeit
          <select
            className="mt-1 h-11 w-full rounded-sm border border-ink/20 bg-paper px-3 text-sm text-ink"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as DifficultyId)}
          >
            {(Object.keys(DIFFICULTY_LABEL) as DifficultyId[]).map((id) => (
              <option key={id} value={id}>
                {DIFFICULTY_LABEL[id]}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <Button size="sm" variant="wax" onClick={slAskRoll}>
            Spieler würfelt
          </Button>
          <Button size="sm" variant="ink" onClick={slRoll}>
            In Vertretung
          </Button>
          <Button size="sm" variant="quiet" onClick={() => slAuto("success")}>
            Ohne Wurf
          </Button>
          <Button size="sm" variant="quiet" onClick={() => slAuto("fail")}>
            Nein
          </Button>
        </div>
      </div>
    ) : null;

  const castRow = sl ? (
    <div className="cast-row" role="tablist" aria-label="Wer spricht">
      {cast.map((id) => {
        const ch = id === "welt" ? null : campaign.characters[id];
        const on = viewId === id || (id === "welt" && viewId === "welt");
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={on}
            className={cn("cast-chip", on && "is-on")}
            onClick={() => setView(id)}
          >
            {ch?.portrait ? <img src={ch.portrait} alt="" /> : <span className="cast-mark" aria-hidden="true">{id === "welt" ? "W" : (ch?.name.slice(0, 1) ?? "?")}</span>}
            <span>{id === "welt" ? "Welt" : ch?.name.split(" ")[0]}</span>
          </button>
        );
      })}
    </div>
  ) : null;

  if (win) {
    const roller = campaign.characters[win.roll.characterId];
    const own = roller?.kind === "npc" ? sl : !sl;
    if (!own) {
      return (
        <footer className="play-foot">
          {castRow}
          <p className="text-sm text-ink-muted">
            {roller?.name ?? "Jemand"} darf Glück ausgeben. Das entscheidet, wer geworfen hat.
          </p>
        </footer>
      );
    }
    return (
      <footer className="play-foot">
        {castRow}
        <p className="font-display text-sm text-ink">Glück ausgeben?</p>
        <p className="mt-1 font-mono text-xs text-ink">{formatRollLine(win.roll)}</p>
        <div className="mt-3 grid gap-2">
          <Button variant="wax" onClick={() => fortune("reroll")}>
            Wurf wiederholen
          </Button>
          <Button variant="ink" onClick={() => fortune("plus")}>
            +1 EG
          </Button>
          <Button variant="quiet" onClick={() => fortune("skip")}>
            Behalten
          </Button>
        </div>
      </footer>
    );
  }

  const myRoll =
    pendingRoll &&
    (sl ? viewId === pendingRoll.characterId : pendingRoll.characterId === actor?.id && actor?.kind === "pc");
  if (myRoll && pendingRoll) {
    const who = campaign.characters[pendingRoll.characterId]?.name ?? actor?.name ?? "jemand";
    const skill = CATALOG_BY_ID[pendingRoll.actionId];
    return (
      <footer className="play-foot">
        {castRow}
        <p className="font-display text-sm text-ink">
          {who} wirft {skill?.label ?? "jetzt"}
        </p>
        <p className="mt-1 text-sm text-ink-muted">W100. Nur die Rechnung — die Welt schreibst du danach.</p>
        <Button className="mt-3 w-full" variant="wax" size="lg" onClick={playerRoll}>
          Würfeln
        </Button>
      </footer>
    );
  }

  if (pending && !sl && pending.intention.characterId === actor?.id) {
    return (
      <footer className="play-foot">
        <p className="text-sm text-ink-muted">Die Absicht liegt beim Spielleiter.</p>
      </footer>
    );
  }

  const asWorld = sl && viewId === "welt";
  const who = asWorld ? "die Welt" : (actor?.name.split(" ")[0] ?? "jemand");

  return (
    <footer className="play-foot">
      {castRow}
      {gate}
      {asWorld ? null : (
        <>
          <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">
            {sl ? `Für ${who}` : "Was tust du?"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {shown.map((v) => (
              <button key={v.def.id} type="button" className="ask-chip" onClick={() => send(v.def.id)}>
                {actionAsk(v.def)}
              </button>
            ))}
            <button type="button" className="ask-chip is-quiet" onClick={onMore}>
              Weitere
            </button>
          </div>
        </>
      )}
      {sl ? (
        <form
          className="mt-3"
          onSubmit={(e) => {
            e.preventDefault();
            speak();
          }}
        >
          <label className="sr-only" htmlFor="speak-line">
            {asWorld ? "Was die Welt tut" : `Was ${who} sagt`}
          </label>
          <input
            id="speak-line"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={asWorld ? "Was die Welt tut" : `Was ${who} sagt oder tut`}
            className="h-11 w-full rounded-sm border border-ink/20 bg-paper px-3 text-sm text-ink"
          />
          <Button type="submit" className="mt-2 w-full" variant="wax" disabled={!note.trim()}>
            Ins Leben
          </Button>
        </form>
      ) : null}
    </footer>
  );
}
