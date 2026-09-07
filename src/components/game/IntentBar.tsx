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
  const role = useTisch((s) => s.role);
  const difficulty = useTisch((s) => s.difficulty);
  const setDifficulty = useTisch((s) => s.setDifficulty);
  const slRoll = useTisch((s) => s.slRoll);
  const slAuto = useTisch((s) => s.slAuto);
  const def = selected ? CATALOG_BY_ID[selected] : null;
  const showSl = role !== "spieler";

  return (
    <div className="sticky bottom-0 z-10 -mx-4 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur-sm">
      {def ? (
        <div className="mb-3">
          <p className="font-display text-sm">{def.label}</p>
          {def.id === "freitext" || def.id === "gehen" ? (
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={def.id === "gehen" ? "Ausgang in der Szene" : "Bitte an den SL"}
              className="mt-2 h-11 w-full rounded-sm border border-border bg-raised px-3 text-sm text-fg"
            />
          ) : null}
          <Button className="mt-3 w-full" onClick={submit}>
            Intention senden
          </Button>
        </div>
      ) : null}

      {pending && showSl ? (
        <div className="rounded-lg border border-border bg-raised p-3">
          <p className="text-sm">
            Auflösen: <span className="font-display">{CATALOG_BY_ID[pending.intention.actionId]?.label}</span>
          </p>
          <label className="mt-2 block text-xs text-muted">
            Schwierigkeit
            <select
              className="mt-1 h-11 w-full rounded-sm border border-border bg-surface px-3 text-sm text-fg"
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
          <div className="mt-3 grid grid-cols-3 gap-2">
            <Button size="sm" onClick={slRoll}>
              Würfeln
            </Button>
            <Button size="sm" variant="outline" onClick={() => slAuto("success")}>
              Ohne Wurf
            </Button>
            <Button size="sm" variant="ghost" onClick={() => slAuto("fail")}>
              Nein
            </Button>
          </div>
        </div>
      ) : pending && !showSl ? (
        <p className="text-sm text-muted">Intention liegt beim SL. Warten auf die Frist.</p>
      ) : !def ? (
        <p className="text-sm text-muted">Eine Karte wählen. Graue Karten bleiben sichtbar.</p>
      ) : null}
    </div>
  );
}
