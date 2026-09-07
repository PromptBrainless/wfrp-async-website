import { Button } from "@/components/ui/button";
import { useTisch } from "@/lib/wfrp/store";

export function SlDesk() {
  const campaign = useTisch((s) => s.campaign);
  const go = useTisch((s) => s.goScene);
  const fire = useTisch((s) => s.fireEvent);
  const force = useTisch((s) => s.forceCountdown);
  const scene = campaign.scenes[campaign.currentSceneId];
  const pending = campaign.pending;
  const submitted = Object.keys(campaign.intentions);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-display text-3xl">SL-Pult</h1>
        <p className="mt-1 text-sm text-muted">Dieselbe Szene plus Flags, Ereignisse, Resolver.</p>
      </header>

      <section className="rounded-xl border border-border bg-surface p-5">
        <h2 className="font-display text-lg">Szene</h2>
        <p className="mt-2 text-sm">
          {scene.locationName} · Modus {scene.mode}
        </p>
        <p className="mt-2 text-sm text-muted">Noch nicht gezogen: Greta {submitted.includes("greta") ? "hat gesendet" : "wartet"}.</p>
        {pending ? (
          <p className="mt-2 text-sm">Offen: {pending.intention.actionId}</p>
        ) : (
          <p className="mt-2 text-sm text-muted">Keine offene Intention.</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" variant="outline" onClick={() => go("basar")}>
            Basar
          </Button>
          <Button size="sm" variant="outline" onClick={() => go("gasse")}>
            Gasse
          </Button>
          <Button size="sm" variant="ghost" onClick={force}>
            Frist jetzt
          </Button>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-surface p-5">
        <h2 className="font-display text-lg">Vorbereitete Ereignisse</h2>
        <ul className="mt-3 space-y-3">
          {scene.events.map((e) => (
            <li key={e.id} className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm">{e.label}</div>
                <div className="text-xs text-muted">{e.hint}</div>
              </div>
              <Button size="sm" variant="outline" disabled={e.fired} onClick={() => fire(e.id)}>
                {e.fired ? "Ausgelöst" : "Einwerfen"}
              </Button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-surface p-5">
        <h2 className="font-display text-lg">NSC</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {scene.present
            .filter((id) => id !== "greta")
            .map((id) => {
              const c = campaign.characters[id];
              if (!c) return null;
              return (
                <li key={id}>
                  {c.name} · LP {c.wounds.current}/{c.wounds.max} · {c.attitude ?? c.career}
                </li>
              );
            })}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-surface p-5">
        <h2 className="font-display text-lg">Weltflags</h2>
        <ul className="mt-2 text-sm text-muted">
          {campaign.characters.greta.flags.map((f) => (
            <li key={f}>{f}</li>
          ))}
          {campaign.worldFlags.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
