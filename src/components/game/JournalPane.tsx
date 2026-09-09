import { Journal } from "./Journal";
import { useTisch } from "@/lib/wfrp/store";

export function JournalPane() {
  const notes = useTisch((s) => s.campaign.journalNotes);
  const recent = [...notes].reverse();

  return (
    <div className="play-pane-pad">
      <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Journal</p>
      <h2 className="font-display text-lg text-ink">Was geschehen ist</h2>
      {recent.length === 0 ? (
        <p className="mt-3 text-sm text-ink-muted">Noch leer. Das Journal schreibt mit, sobald etwas geschieht.</p>
      ) : (
        <ul className="mt-3 space-y-3">
          {recent.map((n) => (
            <li key={n.id} className="border-t border-ink/10 pt-2">
              <p className="font-display text-sm text-ink">{n.title}</p>
              <p className="text-sm leading-relaxed text-ink-muted">{n.body}</p>
              {n.npcNames.length ? <p className="mt-1 text-xs text-ink-faint">{n.npcNames.join(" · ")}</p> : null}
              {n.openQuestion ? <p className="mt-1 text-xs text-primary">{n.openQuestion}</p> : null}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 border-t border-ink/15 pt-2">
        <Journal />
      </div>
    </div>
  );
}
