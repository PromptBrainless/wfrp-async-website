import { createFileRoute } from "@tanstack/react-router";
import { CharacterSheet } from "@/components/game/CharacterSheet";
import { Shell } from "@/components/game/Shell";

export const Route = createFileRoute("/bogen")({ component: BogenPage });

function BogenPage() {
  return (
    <Shell>
      <CharacterSheet />
    </Shell>
  );
}
