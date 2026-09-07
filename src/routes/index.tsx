import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useTisch } from "@/lib/wfrp/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const setRole = useTisch((s) => s.setRole);
  return (
    <main className="relative min-h-dvh overflow-hidden bg-bg text-fg">
      <div className="relative mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6 py-16">
        <p className="font-display text-[11px] uppercase tracking-[0.22em] text-muted">Warhammer Fantasy Roleplay</p>
        <h1 className="mt-3 font-display text-5xl leading-tight">Die Frist</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Asynchrone Szene im Reikland. Erst die Welt verstehen, dann eine Figur, dann der Tisch.
        </p>
        <div className="mt-10 grid gap-3">
          <Button asChild variant="wax" size="lg">
            <Link to="/erschaffung">Figur anlegen</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/tisch" onClick={() => setRole("spieler")}>
              Demo spielen (Greta)
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link to="/sl" onClick={() => setRole("sl")}>
              Spielleiter
            </Link>
          </Button>
        </div>
        <p className="mt-10 text-xs text-faint">Buch bleibt die Autorität. Engine würfelt, erfindet nichts.</p>
      </div>
    </main>
  );
}
