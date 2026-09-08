import { useEffect, useState } from "react";
import { Map, ScrollText } from "lucide-react";
import { formatMoney } from "@/lib/wfrp/money";
import { tokenPlace } from "@/lib/wfrp/movement";
import { useTisch } from "@/lib/wfrp/store";
import { activePc, isSeatEmpty, SEAT_IDS } from "@/lib/wfrp/seats";
import { cn } from "@/lib/utils";

function formatFrist(endsAt: number, now: number): string {
  const ms = endsAt - now;
  if (ms <= 0) return "Frist um";
  const min = Math.ceil(ms / 60_000);
  if (min < 60) return `${min} Min`;
  const h = Math.floor(min / 60);
  const rest = min % 60;
  return rest ? `${h} Std ${rest} Min` : `${h} Std`;
}

export function CharHead({
  onBlatt,
  onKarte,
  onSl,
}: {
  onBlatt: () => void;
  onKarte: () => void;
  onSl: () => void;
}) {
  const campaign = useTisch((s) => s.campaign);
  const viewId = useTisch((s) => s.viewId);
  const role = useTisch((s) => s.role);
  const scene = campaign.scenes[campaign.currentSceneId];
  const sl = role === "sl";
  const pc = activePc(campaign, viewId);
  const who = sl ? null : (campaign.characters[viewId] ?? pc);
  const inspect = sl
    ? viewId !== "welt"
      ? (campaign.characters[viewId] ?? null)
      : null
    : who;
  const here = who ? tokenPlace(scene.board, who.id) : undefined;
  const pin = here ? scene.board.pins.find((p) => p.id === here) : undefined;
  const recap = [...campaign.journalNotes].reverse().find((n) => n.body)?.body;
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <header className="play-head">
      <button type="button" className="play-who" onClick={onBlatt} aria-label={sl ? "Bogen der Stimme" : "Blatt öffnen"}>
        {sl ? (
          <span className="cast-mark play-who-mark">SL</span>
        ) : who?.portrait ? (
          <img src={who.portrait} alt="" width={48} height={48} />
        ) : (
          <span className="cast-mark play-who-mark">{who?.name.slice(0, 1) ?? "?"}</span>
        )}
        <div className="min-w-0">
          <p className="font-display text-base leading-tight text-ink">{sl ? "Spielleiter" : (who?.name ?? "Spieler")}</p>
          <p className="truncate text-xs text-ink-muted">
            {sl ? scene.locationName : (pin?.label ?? scene.locationName)}
            {" · "}
            {formatFrist(campaign.countdownEndsAt, now)}
            {" · "}
            {SEAT_IDS.filter((id) => !isSeatEmpty(campaign.characters[id])).length}/5
          </p>
        </div>
      </button>
      <div className="play-head-actions">
        <button type="button" className="play-icon" onClick={onKarte} aria-label="Karte">
          <Map className="size-4" strokeWidth={1.75} />
        </button>
        <button type="button" className="play-icon" onClick={onSl} aria-label="Werkzeuge">
          <ScrollText className="size-4" strokeWidth={1.75} />
        </button>
      </div>
      {who ? (
        <dl className="play-stats">
          <div>
            <dt>LP</dt>
            <dd className="tabular-nums">{`${who.wounds.current}/${who.wounds.max}`}</dd>
          </div>
          <div>
            <dt>Glück</dt>
            <dd className="tabular-nums">{who.fortune}</dd>
          </div>
          <div>
            <dt>Geld</dt>
            <dd className="tabular-nums">{formatMoney(who.money)}</dd>
          </div>
        </dl>
      ) : sl && inspect ? (
        <p className="play-recap" style={{ borderTop: "none", paddingTop: 0 }}>
          Nächste Zeile trägt {inspect.name}
        </p>
      ) : null}
      {recap ? <p className="play-recap">{recap}</p> : null}
    </header>
  );
}
