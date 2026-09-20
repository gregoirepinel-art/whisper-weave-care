import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactForm } from "@/components/site/ContactForm";
import { ServiceDoors } from "@/components/site/ServiceDoors";
import { ENTREPRISE_SERVICES, SITE } from "@/lib/site";

const title = "Enquêtes harcèlement et risques psychosociaux — Karen Pinel, psychologue du travail";
const description =
  "Psychologue du travail à Saint-Avertin, près de Tours. Enquêtes harcèlement et comportements inappropriés, prévention des risques psychosociaux, formation, cellule d'écoute et soutien psychologique en entreprise.";

export const Route = createFileRoute("/entreprises")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SITE.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SITE.ogImage },
    ],
    links: [{ rel: "canonical", href: `${SITE.siteUrl}/entreprises` }],
  }),
  component: Entreprises,
});

function Entreprises() {
  return (
    <>
      <PageIntro
        eyebrow="Entreprises et organisations"
        title="La psychologie dans les organisations de travail."
        lead="J'interviens auprès de tous les acteurs de votre entreprise pour conduire des enquêtes sur le harcèlement avec neutralité, impartialité et professionnalisme, mettre en place des cellules d'écoute et de soutien psychologique, conseiller les équipes et proposer des formations sur le stress, le harcèlement et les émotions."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-12 pt-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl leading-tight md:text-4xl">Pourquoi me contacter&nbsp;?</h2>
          <div className="space-y-6 border border-primary/10 bg-primary p-8 text-lg leading-relaxed text-primary-foreground shadow-2xl md:p-12 md:text-xl">
            <p>
              L'article L. 4121-1 du Code du travail oblige l'employeur à protéger la santé physique
              et mentale de ses salariés, et donc à prévenir les risques psychosociaux. Enquêtes,
              prévention des RPS, formation, soutien des équipes&nbsp;: je vous accompagne avec
              méthode, indépendance et neutralité pour répondre à cette obligation sur des bases
              solides.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ServiceDoors services={ENTREPRISE_SERVICES} />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-12 pt-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl leading-tight md:text-4xl">Ma façon de travailler&nbsp;:</h2>
          <div className="space-y-6 border border-primary/10 bg-primary p-8 text-lg leading-relaxed text-primary-foreground shadow-2xl md:p-12 md:text-xl">
            <p>
              J'ai été salariée pendant dix-huit ans avant de devenir psychologue du travail. Je
              connais les contraintes réelles des organisations, les jeux d'acteurs, et ce que
              traverse un collectif quand une situation dérape.
            </p>
            <p>
              Chaque intervention commence par un cadrage précis : ce qui est attendu, ce qui est
              confidentiel, qui est informé de quoi, et ce que produit la mission. Une enquête, une
              formation ou un accompagnement n'a de valeur que si les règles du jeu sont claires
              pour tout le monde dès le départ.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-12 pt-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl leading-tight md:text-4xl">Parler de votre besoin&nbsp;:</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Décrivez la situation en quelques lignes. Je vous rappelle pour un premier échange
              sans engagement, puis je vous adresse une proposition et un devis.
            </p>
          </div>
          <ContactForm defaultAudience="entreprise" />
        </div>
      </section>
    </>
  );
}
