import { createFileRoute } from "@tanstack/react-router";
import { ChargenWizard } from "@/components/chargen/Wizard";

export const Route = createFileRoute("/erschaffung")({ component: Page });

function Page() {
  return <ChargenWizard />;
}
