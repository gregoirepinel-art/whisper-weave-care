import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { FAQ, SITE } from "@/lib/site";

const title = "Questions fréquentes — Karen Pinel, psychologue à Saint-Avertin";
const description =
  "Remboursement, mutuelle, confidentialité, durée d'un suivi, annulation : les réponses aux questions les plus courantes avant une première consultation.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: SITE.ogImage },
      { name: "twitter:image", content: SITE.ogImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.siteUrl}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageIntro
        eyebrow="Questions fréquentes"
        title="Ce que l'on me demande le plus souvent."
        lead="Remboursement, confidentialité, déroulé d'un suivi : de quoi y voir clair avant de prendre rendez-vous."
      >
        <a href={SITE.doctolib} target="_blank" rel="noreferrer" className="btn-accent">
          Réserver sur Doctolib <span aria-hidden="true">→</span>
        </a>
      </PageIntro>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <dl className="rule-top pt-2">
          {FAQ.map((item) => (
            <div key={item.q} className="border-b border-border py-8">
              <dt className="font-display text-xl leading-snug text-foreground">{item.q}</dt>
              <dd className="mt-3 leading-relaxed text-muted-foreground">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-center sm:justify-between md:py-16">
          <div>
            <p className="eyebrow !text-accent">Une autre question&nbsp;?</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Écrivez-moi, je vous réponds.</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-primary-foreground/75">
              Par téléphone au{" "}
              <a href={SITE.phoneHref} className="link-underline">
                {SITE.phone}
              </a>{" "}
              ou par le formulaire de contact.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center self-start rounded-full border border-primary-foreground/35 px-6 py-3 text-sm transition-colors hover:border-primary-foreground"
          >
            Aller au contact
          </Link>
        </div>
      </section>
    </>
  );
}
