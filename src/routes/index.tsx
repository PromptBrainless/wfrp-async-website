import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useTisch } from "@/lib/wfrp/store";
import { isSeatEmpty, SEAT_IDS } from "@/lib/wfrp/seats";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const campaign = useTisch((s) => s.campaign);
  const sitAs = useTisch((s) => s.sitAs);
  const setRole = useTisch((s) => s.setRole);
  const setView = useTisch((s) => s.setView);
  const navigate = useNavigate();

  return (
    <main className="desk flex min-h-dvh items-center justify-center px-4 py-10">
      <img src="/images/desk.jpg" alt="" className="desk-photo" width={1792} height={1008} />
      <div className="desk-veil" aria-hidden />

      <article className="blatt">
        <div className="blatt-inner stagger">
          <p className="font-display text-xs uppercase tracking-mark text-ink-faint">Warhammer Fantasy Roleplay</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-ink sm:text-6xl">Die Frist</h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">
            Erst die Karte. Dann der Tisch. Du siehst mit den Augen, die du wählst.
          </p>

          <p className="mt-8 font-display text-[11px] uppercase tracking-mark text-ink-faint">Eine Karte nutzen</p>
          <ul className="mt-3 grid gap-2">
            {SEAT_IDS.map((id) => {
              const ch = campaign.characters[id];
              if (!ch || isSeatEmpty(ch)) return null;
              return (
                <li key={id}>
                  <button
                    type="button"
                    className="w-full rounded-sm border border-ink/20 bg-paper px-3 py-3 text-left"
                    onClick={() => {
                      sitAs(id);
                      void navigate({ to: "/tisch" });
                    }}
                  >
                    <span className="font-display text-base text-ink">{ch.name}</span>
                    <span className="mt-0.5 block text-sm text-ink-muted">
                      {ch.career} · {ch.species}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 font-display text-[11px] uppercase tracking-mark text-ink-faint">Neue Karte</p>
          <p className="mt-2 flex flex-wrap gap-4 text-sm">
            <Link to="/karte" className="text-ink underline-offset-4 hover:underline">
              Würfeln, nur Name eintragen
            </Link>
            <Link to="/erschaffung" className="text-ink-muted underline-offset-4 hover:underline">
              Schritt für Schritt
            </Link>
          </p>

          <p className="mt-8">
            <button
              type="button"
              className="text-sm text-ink-faint underline-offset-4 hover:underline"
              onClick={() => {
                setRole("sl");
                setView("welt");
                void navigate({ to: "/tisch" });
              }}
            >
              Pult — Spielleiter
            </button>
          </p>
        </div>
      </article>
    </main>
  );
}
