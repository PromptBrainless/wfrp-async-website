import { useEffect, useState } from "react";
import { formatMoney } from "@/lib/wfrp/money";
import { useTisch } from "@/lib/wfrp/store";
import { activePc } from "@/lib/wfrp/seats";
import type { Campaign, Scene } from "@/lib/wfrp/types";

function formatFrist(endsAt: number, now: number): string {
  const ms = endsAt - now;
  if (ms <= 0) return "Frist um";
  const min = Math.ceil(ms / 60_000);
  if (min < 60) return `${min} Min`;
  const h = Math.floor(min / 60);
  const rest = min % 60;
  return rest ? `${h} Std ${rest} Min` : `${h} Std`;
}

function recapLine(scene: Scene, campaign: Campaign, me: string | undefined, sl: boolean): string | null {
  const bits: string[] = [];
  if (scene.ask?.text) {
    bits.push(scene.ask.speaker ? `${scene.ask.speaker} — ${scene.ask.text}` : scene.ask.text);
  }
  if (me && !sl) {
    const mine = [...scene.protocol]
      .reverse()
      .find((e) => e.speaker === me && (e.kind === "intent" || e.privateTo === me));
    if (mine) {
      const short = mine.body.length > 90 ? `${mine.body.slice(0, 87)}…` : mine.body;
      bits.push(mine.icon === "intention" ? `Du: ${short}` : short);
    }
  }
  if (!bits.length) {
    const note = [...campaign.journalNotes]
      .reverse()
      .find((n) => n.body && (sl || !n.privateTo || n.privateTo === me));
    if (note?.body) bits.push(note.body);
  }
  if (!bits.length) return null;
  const line = bits.join(" · ");
  return line.length > 180 ? `${line.slice(0, 177)}…` : line;
}

export function CharHead({ onBlatt }: { onBlatt: () => void }) {
  const campaign = useTisch((s) => s.campaign);
  const viewId = useTisch((s) => s.viewId);
  const seatId = useTisch((s) => s.seatId);
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
  const recap = recapLine(scene, campaign, seatId ?? viewId, sl);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
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
            {scene.title}
            {now ? ` · ${formatFrist(campaign.countdownEndsAt, now)}` : ""}
          </p>
        </div>
      </button>
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
