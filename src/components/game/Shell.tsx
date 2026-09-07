import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Hourglass, RotateCcw, ScrollText, User, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTisch } from "@/lib/wfrp/store";
import type { Role } from "@/lib/wfrp/types";
import { cn } from "@/lib/utils";

const ROLES: { id: Role; label: string }[] = [
  { id: "tisch", label: "Tisch" },
  { id: "spieler", label: "Greta" },
  { id: "sl", label: "SL" },
];

export function Shell({ children }: { children: ReactNode }) {
  const role = useTisch((s) => s.role);
  const setRole = useTisch((s) => s.setRole);
  const reset = useTisch((s) => s.reset);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-border bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="font-display text-lg tracking-wide text-fg">
            Die Frist
          </Link>
          <nav className="flex items-center gap-1">
            <Link
              to="/tisch"
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-sm",
                path.startsWith("/tisch") ? "bg-raised" : "text-muted",
              )}
            >
              <Hourglass className="size-4" />
              Szene
            </Link>
            <Link
              to="/bogen"
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-sm",
                path.startsWith("/bogen") ? "bg-raised" : "text-muted",
              )}
            >
              <User className="size-4" />
              Bogen
            </Link>
            <Link
              to="/erschaffung"
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-sm",
                path.startsWith("/erschaffung") ? "bg-raised" : "text-muted",
              )}
            >
              <UserPlus className="size-4" />
              Erschaffung
            </Link>
            <Link
              to="/sl"
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-sm",
                path.startsWith("/sl") ? "bg-raised" : "text-muted",
              )}
            >
              <ScrollText className="size-4" />
              SL
            </Link>
          </nav>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 pb-3">
          <div className="flex rounded-md bg-raised p-1">
            {ROLES.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id)}
                className={cn(
                  "min-h-9 rounded-sm px-3 text-xs tracking-wide",
                  role === r.id ? "bg-primary text-primary-fg" : "text-muted",
                )}
              >
                {r.label}
              </button>
            ))}
          </div>
          <Button variant="ghost" size="sm" onClick={reset} aria-label="Szene zurücksetzen">
            <RotateCcw className="size-4" />
            Neu
          </Button>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-5">{children}</div>
    </div>
  );
}
