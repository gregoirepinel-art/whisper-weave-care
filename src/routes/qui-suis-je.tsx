import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { FORMATIONS, SITE } from "@/lib/site";
const portrait = { url: "/karen-pinel-portrait.jpg" };

const title = "Qui suis-je — Karen Pinel, psychologue à Saint-Avertin";
const description =
  "Parcours, formations et approche de Karen Pinel : psychologue du travail, thérapeute TCC et praticienne EMDR à Saint-Avertin près de Tours.";

export const Route = createFileRoute("/qui-suis-je")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: SITE.ogImage },
      { name: "twitter:image", content: SITE.ogImage },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro
        eyebrow="Qui suis-je"
        title="Dix-sept ans en entreprise, puis le cabinet."
        lead="Je suis psychologue et thérapeute, spécialisée en thérapie cognitive et comportementale (TCC) et en thérapie EMDR, la thérapie des traumatismes."
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 md:grid-cols-[0.9fr_1.1fr]">
        <img
          src={portrait.url}
          alt="Karen Pinel, psychologue du travail et thérapeute"
          className="aspect-[3/4] w-full object-cover"
          loading="lazy"
        />
        <div className="border-l-2 border-accent pl-7 text-lg leading-relaxed text-muted-foreground md:pl-10">
          <div className="space-y-6">
            <p>
              J'ai été salariée pendant dix-sept ans avant de devenir psychologue du travail. C'est
              de là que vient ma façon de travailler : je connais les contraintes réelles des
              organisations, les jeux d'acteurs, et ce que traverse un collectif quand une situation
              dérape.
            </p>
            <p>
              Je suis là pour vous accompagner et vous conseiller dans vos situations professionnelles
              et personnelles : transition de carrière, burn-out, confiance en soi, estime de soi,
              affirmation de soi, communication. Ensemble, nous définissons vos objectifs et nous
              mettons en place des méthodes et des outils adaptés — tests, jeux de rôle, exercices
              entre les séances — pour les atteindre.
            </p>
            <p>
              Si vous traversez une période de questionnement, si vous avez besoin de prendre du recul
              ou de trouver du soutien, n'hésitez pas à me contacter pour que nous puissions
              travailler ensemble.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-12 pt-12 md:grid-cols-[0.4fr_1.6fr]">
          <h2 className="text-2xl md:text-3xl">Formations</h2>
          <ul className="space-y-5">
            {FORMATIONS.map((f) => (
              <li
                key={f.year + f.label}
                className="flex flex-col gap-1 border-b border-border pb-5 sm:flex-row sm:gap-10"
              >
                <span className="w-16 shrink-0 text-sm font-medium text-primary">{f.year}</span>
                <span className="leading-relaxed">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-12 pt-12 md:grid-cols-[0.4fr_1.6fr]">
          <h2 className="text-2xl md:text-3xl">Travaux</h2>
          <div>
            <p className="text-sm text-muted-foreground">Mémoire de recherche</p>
            <p className="mt-2 max-w-2xl text-lg leading-relaxed">
              Leadership authentique, engagement au travail et épanouissement des employés du
              secteur bancaire.
            </p>
            <p className="mt-10 text-sm text-muted-foreground">
              Exercice en cabinet à {SITE.city} depuis 2020 · N° RPPS {SITE.rpps} · N° ADELI{" "}
              {SITE.adeli}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
