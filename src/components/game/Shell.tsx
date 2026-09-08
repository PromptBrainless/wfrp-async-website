import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTisch } from "@/lib/wfrp/store";

export function Shell({ children }: { children: ReactNode; wide?: boolean }) {
  const reset = useTisch((s) => s.reset);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const play = path.startsWith("/tisch") || path.startsWith("/sl");

  return (
    <div className="desk min-h-dvh text-fg">
      <img src="/images/desk.jpg" alt="" className="desk-photo" width={1792} height={1008} />
      <div className="desk-veil" aria-hidden />
      <header className="relative z-20">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="font-display text-lg tracking-wide text-paper">
            Die Frist
          </Link>
          {play ? (
            <Button variant="ghost" size="sm" onClick={reset} aria-label="Szene zurücksetzen">
              <RotateCcw className="size-4" />
            </Button>
          ) : null}
        </div>
      </header>
      <div className={play ? "relative z-10 mx-auto max-w-xl px-0 pb-0 sm:px-3" : "relative z-10 mx-auto max-w-xl px-3 pb-6 pt-1 sm:px-4"}>
        {children}
      </div>
    </div>
  );
}
