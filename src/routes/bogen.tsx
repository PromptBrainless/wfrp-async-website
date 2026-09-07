import { createFileRoute } from "@tanstack/react-router";
import { CharacterSheet } from "@/components/game/CharacterSheet";

export const Route = createFileRoute("/bogen")({ component: BogenPage });

function BogenPage() {
  return <CharacterSheet />;
}
