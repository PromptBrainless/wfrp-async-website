import { useEffect, useMemo, useRef, useState } from "react";
import { Copy, RotateCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DicePlate } from "./DicePlate";
import { ICON_FROM_KIND, iconSrc } from "@/lib/wfrp/icons";
import { canSeeBeat } from "@/lib/wfrp/eyes";
import { useTisch } from "@/lib/wfrp/store";
import type { ProtocolEntry } from "@/lib/wfrp/types";
import { cn } from "@/lib/utils";

const KINDS: { id: ProtocolEntry["kind"] | "alle"; label: string }[] = [
  { id: "alle", label: "Alles" },
  { id: "world", label: "Welt" },
  { id: "intent", label: "Intention" },
  { id: "rules", label: "Wurf" },
  { id: "event", label: "Ereignis" },
  { id: "sl", label: "SL" },
  { id: "system", label: "System" },
];

const KIND_MARK: Record<ProtocolEntry["kind"], string> = {
  world: "Welt",
  rules: "Wurf",
  event: "Ereignis",
  system: "System",
  intent: "Intention",
  sl: "SL",
};

export function Leben({ compact = false }: { compact?: boolean }) {
  const campaign = useTisch((s) => s.campaign);
  const role = useTisch((s) => s.role);
  const viewId = useTisch((s) => s.viewId);
  const seatId = useTisch((s) => s.seatId);
  const selectPlace = useTisch((s) => s.selectPlace);
  const addLog = useTisch((s) => s.addLog);
  const removeLog = useTisch((s) => s.removeLog);
  const playerRoll = useTisch((s) => s.playerRoll);
  const sl = role === "sl";
  const scene = campaign.scenes[campaign.currentSceneId];
  const pendingRoll = campaign.pendingPlayerRoll;
  const [filter, setFilter] = useState<(typeof KINDS)[number]["id"]>("alle");
  const [query, setQuery] = useState("");
  const [playKey, setPlayKey] = useState(0);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftBody, setDraftBody] = useState("");
  const [draftKind, setDraftKind] = useState<ProtocolEntry["kind"]>("world");
  const [draftSecret, setDraftSecret] = useState(false);
  const [clock, setClock] = useState(false);
  const endRef = useRef<HTMLLIElement>(null);

  const beats = useMemo(() => {
    const q = query.trim().toLowerCase();
    const me = seatId ?? viewId;
    return scene.protocol.filter((e) => {
      if (!sl && role !== "tisch" && e.secret) return false;
      if (!canSeeBeat(e, { role, viewId: me })) return false;
      if (filter !== "alle" && e.kind !== filter) return false;
      if (q && !`${e.title} ${e.body} ${e.numbers ?? ""}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [scene.protocol, sl, role, filter, query, viewId, seatId]);

  useEffect(() => {
    setClock(true);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [beats.length, pendingRoll]);

  const copyAll = async () => {
    const text = beats
      .map((e) => {
        const when = new Date(e.at).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
        return `[${when}] ${KIND_MARK[e.kind]} — ${e.title}\n${e.body}${e.numbers ? `\n${e.numbers}` : ""}`;
      })
      .join("\n\n");
    await navigator.clipboard.writeText(text);
  };

  const canRoll = !compact && pendingRoll && (role === "spieler" || role === "tisch");

  return (
    <section className="leben">
      {compact ? null : (
      <header className="leben-head">
        <div>
          <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Leben</p>
          <h2 className="font-display text-lg text-ink">Der Faden</h2>
        </div>
        <div className="flex gap-1">
          <Button size="sm" variant="quiet" onClick={() => setPlayKey((n) => n + 1)} aria-label="Erneut abspielen">
            <RotateCcw className="size-4" />
            Abspielen
          </Button>
          <Button size="sm" variant="quiet" onClick={copyAll} aria-label="Log kopieren">
            <Copy className="size-4" />
            Kopieren
          </Button>
        </div>
      </header>
      )}

      {compact || !sl ? null : (
      <div className="leben-tools">
        <div className="leben-filters">
          {KINDS.filter((k) => sl || role === "tisch" || k.id !== "sl").map((k) => (
            <button
              key={k.id}
              type="button"
              className={cn("leben-filter", filter === k.id && "is-on")}
              onClick={() => setFilter(k.id)}
            >
              {k.label}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Im Faden suchen"
          className="leben-search"
        />
      </div>
      )}

      <ol key={playKey} className="leben-thread">
        {beats.length === 0 ? (
          <li className="text-sm text-ink-muted">
            {scene.opened
              ? "Noch kein Beat. Die Szene wartet."
              : sl
                ? "Szene zu. Öffne eine Gasse im Pult."
                : "Szene zu. Der Spielleiter öffnet eine Gasse."}
          </li>
        ) : (
          beats.map((e, i) => (
            <li
              key={e.id}
              className={cn("leben-beat", `is-${e.kind}`)}
              style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
            >
              <img src={iconSrc(e.icon ?? ICON_FROM_KIND[e.kind])} alt="" className="stamp stamp-lg" />
              <div className="min-w-0 flex-1">
                {e.image ? (
                  <button type="button" className="leben-still" onClick={() => e.placeId && selectPlace(e.placeId)}>
                    <img src={e.image} alt="" />
                  </button>
                ) : null}
                <div className="leben-card">
                  {e.portrait ? <img src={e.portrait} alt="" className="leben-face" /> : null}
                  <div className="min-w-0 flex-1">
                    <p className="leben-kicker">
                      {KIND_MARK[e.kind]}
                      {e.secret ? " · geheim" : ""}
                      <span>
                        {clock && e.at > 10
                          ? new Date(e.at).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })
                          : "Auftakt"}
                      </span>
                    </p>
                    <h3 className="font-display text-base text-ink">{e.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{e.body}</p>
                    {e.dice ? <DicePlate dice={e.dice} /> : e.numbers ? <p className="dice-plate">{e.numbers}</p> : null}
                  </div>
                  {sl ? (
                    <Button size="sm" variant="quiet" onClick={() => removeLog(e.id)} aria-label="Eintrag löschen">
                      <Trash2 className="size-4" />
                    </Button>
                  ) : null}
                </div>
              </div>
            </li>
          ))
        )}
        <li ref={endRef} />
      </ol>

      {compact ? null : canRoll ? (
        <div className="leben-roll">
          <p className="font-display text-sm text-ink">Dein Wurf</p>
          <p className="mt-1 text-sm text-ink-muted">
            Der SL hat {campaign.characters[pendingRoll?.characterId ?? ""]?.name} aufgefordert. Die Rechnung erscheint danach
            im Faden.
          </p>
          <Button className="mt-3 w-full" variant="wax" onClick={playerRoll}>
            Würfeln
          </Button>
        </div>
      ) : null}

      {sl && !compact ? (
        <form
          className="leben-compose"
          onSubmit={(ev) => {
            ev.preventDefault();
            if (!draftTitle.trim() || !draftBody.trim()) return;
            addLog({ kind: draftKind, title: draftTitle.trim(), body: draftBody.trim(), secret: draftSecret });
            setDraftTitle("");
            setDraftBody("");
          }}
        >
          <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">SL schreibt ins Leben</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-[8rem_1fr]">
            <select
              className="leben-search"
              value={draftKind}
              onChange={(e) => setDraftKind(e.target.value as ProtocolEntry["kind"])}
            >
              {KINDS.filter((k) => k.id !== "alle").map((k) => (
                <option key={k.id} value={k.id}>
                  {k.label}
                </option>
              ))}
            </select>
            <input
              className="leben-search"
              value={draftTitle}
              onChange={(e) => setDraftTitle(e.target.value)}
              placeholder="Titel"
            />
          </div>
          <textarea
            className="leben-search mt-2 min-h-24"
            value={draftBody}
            onChange={(e) => setDraftBody(e.target.value)}
            placeholder="Was die Welt tut. Spieler sehen das, außer geheim."
          />
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            <label className="flex min-h-11 items-center gap-2 text-sm text-ink-muted">
              <input type="checkbox" checked={draftSecret} onChange={(e) => setDraftSecret(e.target.checked)} />
              Nur SL
            </label>
            <Button type="submit" variant="wax" size="sm">
              Eintragen
            </Button>
          </div>
        </form>
      ) : null}
    </section>
  );
}
