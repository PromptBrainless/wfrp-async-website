import { createFileRoute, Link } from "@tanstack/react-router";
import { CharacterSheet } from "@/components/game/CharacterSheet";
import { Shell } from "@/components/game/Shell";

export const Route = createFileRoute("/bogen")({ component: BogenPage });

function BogenPage() {
  return (
    <Shell>
      <div className="mb-3 text-sm">
        <Link to="/tisch" className="text-paper/80 underline-offset-4 hover:text-paper hover:underline">
          Zurück zur Szene
        </Link>
      </div>
      <CharacterSheet />
    </Shell>
  );
}
