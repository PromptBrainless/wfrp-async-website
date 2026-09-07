import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/game/Shell";
import { SlDesk } from "@/components/game/SlDesk";

export const Route = createFileRoute("/sl")({ component: SlPage });

function SlPage() {
  return (
    <Shell>
      <SlDesk />
    </Shell>
  );
}
