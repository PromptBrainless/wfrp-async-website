import { createFileRoute } from "@tanstack/react-router";
import { PlayScreen } from "@/components/game/PlayScreen";

export const Route = createFileRoute("/tisch")({ component: TischPage });

function TischPage() {
  return <PlayScreen />;
}
