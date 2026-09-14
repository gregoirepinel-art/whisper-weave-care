import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactForm } from "@/components/site/ContactForm";
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
        <div className="rule-top grid md:grid-cols-2">
          {ENTREPRISE_SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="group grid grid-cols-[4.5rem_1fr] gap-6 border-b border-border py-10 md:grid-cols-[5.5rem_1fr] md:gap-8 md:px-8 md:py-12 md:odd:border-r"
            >
              <div className="relative h-24 w-[3.75rem] self-start border-2 border-primary p-1 md:h-28 md:w-[4.5rem]" aria-hidden="true">
                <div className="relative flex h-full w-full origin-left items-start justify-center bg-primary pt-4 text-primary-foreground transition-transform duration-500 motion-reduce:transition-none md:pt-5 md:group-hover:[transform:perspective(500px)_rotateY(-8deg)]">
                  <span className="font-display text-xl">{String(i + 1).padStart(2, "0")}</span>
                  <span className="absolute right-1.5 top-1/2 h-1.5 w-1.5 rounded-full bg-accent" />
                </div>
                <span className="absolute -bottom-1.5 -left-2 h-px w-[calc(100%+1rem)] bg-primary" />
              </div>

              <div className="self-center">
                <h2 className="text-2xl leading-snug transition-colors duration-300 group-hover:text-primary">
                  {s.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
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
