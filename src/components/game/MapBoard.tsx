import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { canCharge, canWalkTo, distanceBetween, pinById, runM, tokenPlace, walkM, whereLine } from "@/lib/wfrp/movement";
import { useTisch } from "@/lib/wfrp/store";
import { activePc } from "@/lib/wfrp/seats";
import { cn } from "@/lib/utils";

export function MapBoard() {
  const campaign = useTisch((s) => s.campaign);
  const role = useTisch((s) => s.role);
  const selectedToken = useTisch((s) => s.selectedTokenId);
  const selectedPlace = useTisch((s) => s.selectedPlaceId);
  const selectToken = useTisch((s) => s.selectToken);
  const selectPlace = useTisch((s) => s.selectPlace);
  const selectAction = useTisch((s) => s.selectAction);
  const revealFog = useTisch((s) => s.revealFog);
  const revealPin = useTisch((s) => s.revealPin);
  const viewId = useTisch((s) => s.viewId);
  const scene = campaign.scenes[campaign.currentSceneId];
  const board = scene.board;
  const sl = role === "sl";
  const actor = activePc(campaign, viewId);
  const here = actor ? tokenPlace(board, actor.id) : undefined;
  const focusId = selectedPlace ?? here;
  const focus = focusId ? pinById(board, focusId) : undefined;

  const places = board.pins.filter((p) => p.revealed || sl);

  return (
    <section className="map-frame" aria-label="Szene">
      <header className="map-caption">
        <div>
          <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">{scene.locationName}</p>
          <h2 className="font-display text-xl text-ink">{scene.title}</h2>
        </div>
        <p className="text-xs text-ink-muted">
          {board.widthM} m quer
          {actor ? ` · B ${actor.movement} · Gehen ${walkM(actor.movement)} m · Rennen ${runM(actor.movement)} m` : ""}
        </p>
      </header>
      <div className="map-viewport map-still">
        <img
          src={board.image}
          alt=""
          width={1792}
          height={1008}
          draggable={false}
          style={{
            objectPosition: focus ? `${focus.x}% ${focus.y}%` : "50% 50%",
          }}
        />
        {board.fog.map((fog) => {
          if (fog.revealed && !sl) return null;
          if (fog.revealed && sl) {
            return (
              <div
                key={fog.id}
                className="map-fog map-fog-torn"
                style={{ left: `${fog.x}%`, top: `${fog.y}%`, width: `${fog.w}%`, height: `${fog.h}%` }}
              />
            );
          }
          return (
            <button
              key={fog.id}
              type="button"
              className="map-fog"
              style={{ left: `${fog.x}%`, top: `${fog.y}%`, width: `${fog.w}%`, height: `${fog.h}%` }}
              onClick={() => sl && revealFog(fog.id)}
              aria-label={sl ? "Vorhang reißen" : "Noch nicht enthüllt"}
            />
          );
        })}
        {board.tokens.map((tok) => {
          const ch = campaign.characters[tok.id];
          const pin = pinById(board, tok.placeId);
          if (!ch || !pin) return null;
          const sharing = board.tokens.filter((t) => t.placeId === tok.placeId);
          const i = sharing.findIndex((t) => t.id === tok.id);
          const dx = (i - (sharing.length - 1) / 2) * 4;
          const lp = ch.wounds.max ? ch.wounds.current / ch.wounds.max : 1;
          return (
            <button
              key={tok.id}
              type="button"
              className={cn("map-token", selectedToken === tok.id && "is-on")}
              style={{ left: `${pin.x + dx}%`, top: `${pin.y}%` }}
              onClick={() => {
                selectToken(tok.id);
                selectPlace(tok.placeId);
              }}
            >
              <img src={ch.portrait} alt="" draggable={false} />
              <i className="lp" style={{ transform: `scaleX(${lp})` }} />
              <b>{ch.name.split(" ")[0]}</b>
            </button>
          );
        })}
      </div>
      <p className="map-where">{whereLine(campaign, scene)}</p>
      {scene.combat ? (
        <p className="map-range">
          Distanz {scene.combat.distanceM} m
          {scene.combat.engaged ? " · gebunden" : " · nicht gebunden"}
          {actor && canCharge(actor.movement, scene.combat.distanceM) ? " · Sturmangriff möglich" : ""}
        </p>
      ) : null}
      <ul className="place-list">
        {places.map((p) => {
          const meters = here ? distanceBetween(board, here, p.id) : null;
          const at = here === p.id;
          const walkOk = meters == null || canWalkTo(actor?.movement ?? 0, meters, scene.mode === "kampf");
          return (
            <li key={p.id}>
              <button
                type="button"
                className={cn("place-chip", selectedPlace === p.id && "is-on", at && "is-here", !p.revealed && "is-secret")}
                onClick={() => {
                  if (!p.revealed && sl) revealPin(p.id);
                  selectPlace(p.id);
                }}
              >
                <span>{p.label}</span>
                <em>
                  {at ? "hier" : meters != null ? `${meters} m` : ""}
                  {!p.revealed ? " · SL" : ""}
                </em>
              </button>
              {selectedPlace === p.id && !at && walkOk ? (
                <Button
                  size="sm"
                  variant="ink"
                  onClick={() => {
                    selectPlace(p.id);
                    selectAction("gehen");
                  }}
                >
                  {p.toScene ? "Verlassen" : "Gehen"}
                </Button>
              ) : null}
            </li>
          );
        })}
      </ul>
      <p className="map-flavor">{scene.slText}</p>
      <p className="map-trigger">{scene.trigger}</p>
      {selectedToken && campaign.characters[selectedToken]?.kind === "pc" ? (
        <Link to="/bogen" className="map-bogen">
          Bogen öffnen
        </Link>
      ) : null}
    </section>
  );
}
