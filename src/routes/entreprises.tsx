import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactForm } from "@/components/site/ContactForm";
import { ENTREPRISE_SERVICES, SITE } from "@/lib/site";

const title = "Prestations en entreprise — psychologue du travail à Tours";
const description =
  "Enquêtes harcèlement, prévention des risques psychosociaux, formation, coaching de managers et conseil en organisation, en Indre-et-Loire et alentours.";

export const Route = createFileRoute("/entreprises")({
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
  component: Entreprises,
});

function Entreprises() {
  return (
    <>
      <PageIntro
        eyebrow="Entreprises et organisations"
        title="La psychologie du travail, sur le terrain."
        lead="J'interviens auprès de tous les acteurs de votre entreprise pour des enquêtes harcèlement avec neutralité, impartialité et professionnalisme. Pour la mise en place de cellule d'écoute et de soutien psychologique. Pour des conseils. Et pour de la formation : stress, harcèlement, émotions..."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {ENTREPRISE_SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="border-t-4 border-accent bg-secondary/60 p-8 md:p-10"
            >
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 text-2xl leading-snug">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-12 pt-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl leading-tight md:text-4xl">Ma façon de travailler</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              J'ai été salariée pendant dix-sept ans avant de devenir psychologue du travail. Je
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
            <h2 className="text-3xl leading-tight md:text-4xl">Parler de votre besoin</h2>
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
