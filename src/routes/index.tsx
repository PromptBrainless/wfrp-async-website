import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hourglass, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SPECIES } from "@/lib/wfrp/chargen-data";
import { useChargen } from "@/lib/wfrp/chargen-store";
import { useTisch } from "@/lib/wfrp/store";

export const Route = createFileRoute("/")({ component: Home });

const PATH = [
  { n: "I", label: "Welt", hint: "Reikland hören" },
  { n: "II", label: "Figur", hint: "Bogen anlegen" },
  { n: "III", label: "Tisch", hint: "Szene spielen" },
] as const;

function Home() {
  const setRole = useTisch((s) => s.setRole);
  const speciesId = useChargen((s) => s.draft.speciesId);
  const name = useChargen((s) => s.draft.name);
  const started = speciesId != null;
  const continueLabel = started
    ? name
      ? `Weiter mit ${name}`
      : `Weiter · ${SPECIES[speciesId].name}`
    : "Figur anlegen";

  return (
    <main className="desk flex min-h-dvh items-center justify-center px-4 py-10">
      <img
        src="/images/desk.jpg"
        alt=""
        className="desk-photo"
        width={1792}
        height={1008}
      />
      <div className="desk-veil" aria-hidden />

      <article className="blatt">
        <div className="blatt-inner stagger">
          <header className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-xs uppercase tracking-mark text-ink-faint">
                Warhammer Fantasy Roleplay
              </p>
              <p className="mt-1 text-sm text-ink-muted">Reikland · asynchrone Szene</p>
            </div>
            <span className="wax-seal shrink-0" aria-hidden>
              <Hourglass className="size-5" strokeWidth={1.75} />
            </span>
          </header>

          <h1 className="mt-6 font-display text-5xl leading-none text-ink sm:text-6xl">Die Frist</h1>

          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">
            Ein Brief auf dem Tisch. Erst die Welt verstehen, dann eine Figur, dann sitzen wir.
          </p>

          <ol className="mt-8 grid grid-cols-3 gap-3 border-y border-ink/15 py-4">
            {PATH.map((step) => (
              <li key={step.n} className="path-step">
                <span className="path-index">{step.n}</span>
                <span className="font-display text-sm text-ink">{step.label}</span>
                <span className="text-xs text-ink-muted">{step.hint}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-2">
            <Button asChild variant="wax" size="lg" className="w-full">
              <Link to="/erschaffung">
                {continueLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ink" size="lg" className="w-full">
              <Link to="/tisch" onClick={() => setRole("spieler")}>
                Mit Greta spielen
              </Link>
            </Button>
            <Button asChild variant="quiet" size="lg" className="w-full">
              <Link to="/sl" onClick={() => setRole("sl")}>
                <ScrollText className="size-4" />
                Spielleiter
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-center text-xs leading-relaxed text-ink-faint">
            Das Buch bleibt die Autorität. Die Engine würfelt, sie erfindet nichts.
          </p>
        </div>
      </article>
    </main>
  );
}
