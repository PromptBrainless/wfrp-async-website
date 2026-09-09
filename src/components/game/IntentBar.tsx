import { Button } from "@/components/ui/button";
import { CATALOG_BY_ID } from "@/lib/wfrp/catalog";
import { useTisch } from "@/lib/wfrp/store";
import { DIFFICULTY_LABEL, type DifficultyId } from "@/lib/wfrp/types";

export function IntentBar() {
  const selected = useTisch((s) => s.selectedAction);
  const note = useTisch((s) => s.note);
  const setNote = useTisch((s) => s.setNote);
  const submit = useTisch((s) => s.submit);
  const pending = useTisch((s) => s.campaign.pending);
  const pendingRoll = useTisch((s) => s.campaign.pendingPlayerRoll);
  const role = useTisch((s) => s.role);
  const difficulty = useTisch((s) => s.difficulty);
  const setDifficulty = useTisch((s) => s.setDifficulty);
  const slAskRoll = useTisch((s) => s.slAskRoll);
  const slRoll = useTisch((s) => s.slRoll);
  const slAuto = useTisch((s) => s.slAuto);
  const playerRoll = useTisch((s) => s.playerRoll);
  const def = selected ? CATALOG_BY_ID[selected] : null;
  const showSl = role !== "spieler";

  return (
    <div className="mt-4 border-t border-ink/15 pt-3">
      {def ? (
        <div className="mb-3">
          <p className="font-display text-sm text-ink">{def.label}</p>
          <p className="mt-1 text-xs text-ink-muted">{def.summary}</p>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={def.id === "gehen" ? "Wohin in der Szene" : "Kurze Zeile an den SL (optional)"}
            className="mt-2 h-11 w-full rounded-sm border border-ink/20 bg-paper px-3 text-sm text-ink"
          />
          <Button className="mt-3 w-full" variant="wax" onClick={submit}>
            Intention senden
          </Button>
        </div>
      ) : null}

      {pending && showSl && !pendingRoll ? (
        <div className="rounded-lg border border-ink/15 bg-paper p-3">
          <p className="text-sm text-ink">
            Auflösen: <span className="font-display">{CATALOG_BY_ID[pending.intention.actionId]?.label}</span>
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
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button size="sm" variant="wax" onClick={() => slAskRoll()}>
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
      ) : null}

      {pendingRoll && (role === "spieler" || role === "tisch") ? (
        <div className="rounded-lg border border-ink/15 bg-paper p-3">
          <p className="font-display text-sm text-ink">Dein Wurf steht aus</p>
          <p className="mt-1 text-sm text-ink-muted">
            Ein W100 entscheidet gegen die angesagte Zielzahl — was er bedeutet, deutet der Spielleiter danach.
          </p>
          <Button className="mt-3 w-full" variant="wax" onClick={playerRoll}>
            Würfeln
          </Button>
        </div>
      ) : pending && !showSl && !pendingRoll ? (
        <p className="text-sm text-ink-muted">
          Deine Intention liegt beim Spielleiter. Warte auf die Frist — oder auf die Aufforderung zum Wurf.
        </p>
      ) : !def && !pending && !pendingRoll ? (
        <p className="text-sm text-ink-muted">
          Wähle eine Karte. Ausgegraute Karten bleiben sichtbar, mit einem Grund, warum sie noch nicht offenstehen.
        </p>
      ) : null}
    </div>
  );
}
