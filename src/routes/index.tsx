import { createFileRoute, Link } from "@tanstack/react-router";
import { EXPERTISES, SITE } from "@/lib/site";
const portrait = { url: "/karen-pinel-portrait.webp" };
const signature = { url: "/karen-pinel-signature.webp" };

const title = "Karen Pinel — Psychologue du travail, TCC & EMDR à Saint-Avertin";
const description =
  "Psychologue du travail et thérapeute TCC et EMDR à Saint-Avertin, près de Tours. Consultations pour les particuliers et interventions en entreprise.";

export const Route = createFileRoute("/")({
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
    links: [{ rel: "canonical", href: SITE.siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "MedicalBusiness"],
          name: "Karen Pinel — Psychologue",
          description,
          url: SITE.siteUrl,
          image: SITE.ogImage,
          email: SITE.email,
          telephone: "+33699970408",
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.street,
            postalCode: SITE.postalCode,
            addressLocality: SITE.city,
            addressCountry: "FR",
          },
          openingHours: "Mo-Fr 09:00-12:00, Mo-Fr 14:00-19:00",
        }),
      },
    ],

  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:pt-24">
        <div>
          <p className="eyebrow rise">Cabinet de Saint-Avertin · Tours</p>
          <h1 className="rise mt-6 text-[2.6rem] leading-[1.05] md:text-[4.2rem]">
            Prendre soin de ce que
            <br />
            le travail et la vie
            <br />
            <span className="italic text-muted-foreground">laissent en suspens.</span>
          </h1>
          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Psychologue du travail, thérapeute en TCC et en EMDR.
            <br />
            J'interviens auprès des organisations du travail : enquêtes harcèlement, formations et audits risques psychosociaux.
            <br />
            J'accueille en consultation les personnes pour un accompagnement personnalisé.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3">
            <a href={SITE.doctolib} target="_blank" rel="noreferrer" className="btn-accent">
              Prendre rendez-vous <span aria-hidden="true">→</span>
            </a>

            <a href={SITE.phoneHref} className="btn-ghost">
              {SITE.phone}
            </a>
          </div>
        </div>

        <figure className="rise">
          <img
            src={portrait.url}
            alt="Portrait de Karen Pinel, psychologue à Saint-Avertin"
            className="aspect-[3/4] w-full object-cover"
            loading="eager"
            width="608"
            height="909"
            fetchPriority="high"
          />
          <figcaption className="mt-4 text-sm text-muted-foreground">
            Karen Pinel — {SITE.role}
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2">
          <Link
            to="/particuliers"
            className="group bg-background px-6 py-16 transition-colors hover:bg-secondary/70 md:px-12 md:py-20"
          >
            <p className="eyebrow">01 — Vous, à titre personnel</p>
            <h2 className="mt-5 text-3xl md:text-4xl">Consulter en TCC ou en EMDR</h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Un espace d'écoute, d'échange, d'interrogation et de compréhension. Séances individuelles et thérapie de couple.
            </p>
            <span className="link-underline mt-8 inline-block text-sm">Découvrir le suivi</span>
          </Link>

          <Link
            to="/entreprises"
            className="group bg-background px-6 py-16 transition-colors hover:bg-secondary/70 md:px-12 md:py-20"
          >
            <p className="eyebrow">02 — Vous, en entreprise</p>
            <h2 className="mt-5 text-3xl md:text-4xl">Intervenir dans l'organisation</h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Enquêtes harcèlement, prévention des risques psychosociaux, formation, coaching de
              managers. Dix-sept ans en entreprise avant d'exercer à mon compte.
            </p>
            <span className="link-underline mt-8 inline-block text-sm">Voir les prestations</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl leading-tight md:text-4xl">Pourquoi consulter&nbsp;?</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Consulter un psychologue ne signifie pas que vous êtes faible, mais que vous êtes
              suffisamment fort pour prendre en charge vos propres souffrances, interrogations et
              émotions, sans les faire supporter à vos proches.
            </p>
            <p>
              Dans un monde parfois difficile, il est important de chercher le soutien nécessaire
              pour mieux avancer. Mon accompagnement se base sur le dialogue, le questionnement et
              la mise en action.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="eyebrow">Domaines d'accompagnement</p>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISES.map((item) => (
            <article key={item.title} className="bg-background p-7">
              <h3 className="text-lg leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <img
          src={signature.url}
          alt="La psychologie en action — Karen Pinel, conseils, coaching, organisation, formation"
          className="w-full object-cover"
          loading="lazy"
          width="1442"
          height="361"
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rule-top grid gap-10 pt-12 md:grid-cols-3">
          <div>
            <p className="eyebrow">Le cabinet</p>
            <p className="mt-4 leading-relaxed">
              {SITE.street}
              <br />
              {SITE.postalCode} {SITE.city}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              1er étage avec ascenseur · Parking gratuit
            </p>
          </div>
          <div>
            <p className="eyebrow">Horaires</p>
            <p className="mt-4 leading-relaxed">
              Du lundi au vendredi
              <br />
              9h00 – 12h00 · 14h00 – 19h00
            </p>
          </div>
          <div>
            <p className="eyebrow">Rendez-vous</p>
            <p className="mt-4 leading-relaxed">
              <a href={SITE.phoneHref} className="link-underline">
                {SITE.phone}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a href={SITE.emailHref} className="link-underline break-all">
                {SITE.email}
              </a>
            </p>
            <Link to="/contact" className="link-underline mt-3 inline-block text-sm">
              Écrire un message
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
