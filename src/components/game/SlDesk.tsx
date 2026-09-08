import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTisch } from "@/lib/wfrp/store";

export function SlDesk() {
  const campaign = useTisch((s) => s.campaign);
  const fire = useTisch((s) => s.fireEvent);
  const force = useTisch((s) => s.forceCountdown);
  const addLog = useTisch((s) => s.addLog);
  const scene = campaign.scenes[campaign.currentSceneId];
  const pending = campaign.pending;
  const submitted = Object.keys(campaign.intentions);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="space-y-6 text-ink">
      <header>
        <h2 className="font-display text-xl">Spielleiter</h2>
        <p className="mt-1 text-sm text-ink-muted">Dieselbe Szene. Spieler sehen diese Klappe nicht.</p>
      </header>

      <form
        className="space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim() || !body.trim()) return;
          addLog({ kind: "world", title: title.trim(), body: body.trim() });
          setTitle("");
          setBody("");
        }}
      >
        <p className="font-display text-sm">In die Welt schreiben</p>
        <input
          className="h-11 w-full rounded-sm border border-ink/20 bg-paper px-3 text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titel"
        />
        <textarea
          className="min-h-24 w-full rounded-sm border border-ink/20 bg-paper px-3 py-2 text-sm"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Was die Welt tut."
        />
        <Button type="submit" variant="wax" size="sm">
          Eintragen
        </Button>
      </form>

      <section>
        <p className="font-display text-sm">Szene</p>
        <p className="mt-1 text-sm text-ink-muted">
          {scene.locationName} · {scene.mode}
        </p>
        {pending ? <p className="mt-1 text-sm">Offen: {pending.intention.actionId}</p> : null}
        <div className="mt-3 flex flex-wrap gap-2">
          <Button size="sm" variant="quiet" onClick={force}>
            Frist jetzt
          </Button>
        </div>
      </section>

      <section>
        <p className="font-display text-sm">Ereignisse</p>
        <ul className="mt-2 space-y-3">
          {scene.events.map((e) => (
            <li key={e.id} className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm">{e.label}</div>
                <div className="text-xs text-ink-muted">{e.hint}</div>
              </div>
              <Button size="sm" variant="ink" disabled={e.fired} onClick={() => fire(e.id)}>
                {e.fired ? "Ausgelöst" : "Einwerfen"}
              </Button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p className="font-display text-sm">Anwesend</p>
        <ul className="mt-2 space-y-1 text-sm text-ink-muted">
          {scene.present.map((id) => {
            const c = campaign.characters[id];
            if (!c) return null;
            return (
              <li key={id}>
                {c.name} · LP {c.wounds.current}/{c.wounds.max}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
