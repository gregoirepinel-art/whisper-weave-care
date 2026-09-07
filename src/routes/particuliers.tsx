import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { EXPERTISES, SITE } from "@/lib/site";

const title = "Consultations pour particuliers — TCC & EMDR à Saint-Avertin";
const description =
  "Consultations individuelles et thérapie de couple à Saint-Avertin : burn-out, stress, anxiété, traumatismes. Thérapie TCC et EMDR avec Karen Pinel.";

export const Route = createFileRoute("/particuliers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Particuliers;
});

function Particuliers() {
  return null;
}
