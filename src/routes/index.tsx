import { createFileRoute, Link } from "@tanstack/react-router";
import { EXPERTISES, FORMATIONS, SITE } from "@/lib/site";
const portrait = { url: "/karen-pinel-portrait.webp" };
const signature = { url: "/karen-pinel-signature.webp" };

const title = "Karen Pinel — Psychologue du travail, TCC & EMDR à Saint-Avertin";
const description =
  "Psychologue du travail et thérapeute TCC et EMDR à Saint-Avertin, près de Tours : parcours, formations, consultations pour les particuliers et interventions en entreprise.";

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
      <div className="w-full bg-primary">
        <div className="mx-auto flex h-10 max-w-6xl items-center px-6">
          <span className="text-[0.55rem] font-medium uppercase tracking-[0.4em] text-foreground sm:text-[0.65rem]">
            Psychologue du travail · TCC &amp; EMDR
          </span>
        </div>
      </div>
      <section className="mx-auto grid max-w-6xl gap-10 md:gap-14 px-6 pb-20 pt-10 md:grid-cols-[1.1fr_0.9fr] md:items-start md:pt-14">
        <div>
          <p className="rise inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-sand" />
            <span className="eyebrow text-primary">Cabinet de Saint-Avertin · Tours</span>
          </p>
          <h1 className="rise mt-6 text-[2.6rem] leading-[1.05] md:text-[4.2rem]">
            Prendre soin de ce&nbsp;que&nbsp;le travail et la vie{" "}
            <span className="italic text-muted-foreground">laissent en suspens.</span>
          </h1>
          <div className="rise mt-10 flex flex-wrap gap-3">
            <a href={SITE.doctolib} target="_blank" rel="noreferrer" className="btn-accent">
              Prendre rendez-vous <span aria-hidden="true">→</span>
            </a>

            <a href={SITE.phoneHref} className="btn-ghost">
              {SITE.phone}
            </a>
          </div>

          <div className="rise mt-10 max-w-xl border border-primary/10 bg-primary/5 p-7 text-lg leading-relaxed text-foreground md:p-9">
            <p>
              Psychologue du travail, thérapeute en TCC et en EMDR. J'ai été salariée pendant
              dix-huit ans&nbsp;: je connais les entreprises parce que j'y ai travaillé, et les
              salariés parce que je l'ai été. Ce passé irrigue ma façon de travailler&nbsp;: les
              contraintes réelles des organisations, les jeux d'acteurs, et ce que traverse un
              collectif quand une situation dérape.
            </p>
          </div>


        </div>

        <figure className="rise min-w-0">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 -z-10 hidden h-28 w-28 bg-sand md:block"
            />
            <img
            src={portrait.url}
            alt="Portrait de Karen Pinel, psychologue à Saint-Avertin"
            className="aspect-[3/4] w-full object-cover"
            loading="eager"
            width="608"
            height="909"
            fetchPriority="high"
            />
          </div>
          <figcaption className="mt-6 flex flex-col border-l-2 border-accent pl-4 md:flex-row md:items-baseline md:gap-4">
            <span className="font-display text-lg italic text-foreground leading-none">Karen Pinel</span>
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-foreground leading-none">{SITE.role}</span>
          </figcaption>
        </figure>
      </section>


      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-8 pt-10 md:grid-cols-[0.4fr_1.6fr] md:gap-10 md:gap-12 md:pt-12">
          <h2 className="font-sans text-2xl font-semibold leading-tight text-foreground md:text-3xl">
            Ce que je fais&nbsp;:
          </h2>
          <div className="max-w-2xl bg-primary p-7 text-primary-foreground md:p-10">
            <p className="text-lg leading-relaxed">J'interviens sur deux terrains complémentaires.</p>
            <div className="mt-8 grid gap-px bg-primary-foreground/20 sm:grid-cols-2">
              <div className="bg-primary py-6 pr-5 sm:pr-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sand">01 · Organisations</p>
                <p className="mt-4 leading-7 text-primary-foreground/85">
                  Prévenir et traiter les situations qui abîment le travail&nbsp;: enquêtes en
                  harcèlement moral et sexuel, comportements toxiques et agissements sexistes,
                  audits RPS, formations, cellules de soutien par téléphone ou in&nbsp;situ.
                </p>
              </div>
              <div className="bg-primary pt-6 sm:pl-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sand">02 · Cabinet</p>
                <p className="mt-4 leading-7 text-primary-foreground/85">
                  Accompagner individuellement les personnes. Ce double regard, collectif et
                  individuel, est au cœur de ma pratique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto grid max-w-6xl gap-px bg-primary-foreground/20 md:grid-cols-2">
          <Link
            to="/entreprises"
            className="group relative overflow-hidden bg-primary px-6 py-16 text-primary-foreground transition-colors hover:bg-primary/90 md:px-12 md:py-20"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-6 font-display text-[5rem] leading-none text-sand/20"
            >
              01
            </span>
            <p className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-sand">
              <span aria-hidden="true" className="h-0.5 w-4 bg-sand" />
              Vous, en entreprise
            </p>
            <h2 className="mt-5 text-3xl text-primary-foreground md:text-4xl">Intervenir dans l'organisation</h2>
            <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/80">
              Enquêtes harcèlement, prévention des risques psychosociaux, formation, soutien des
              équipes.
            </p>
            <span className="link-underline mt-8 inline-block text-sm">Voir les prestations</span>
          </Link>

          <Link
            to="/particuliers"
            className="group relative overflow-hidden bg-primary px-6 py-16 text-primary-foreground transition-colors hover:bg-primary/90 md:px-12 md:py-20"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-6 font-display text-[5rem] leading-none text-sand/20"
            >
              02
            </span>
            <p className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-sand">
              <span aria-hidden="true" className="h-0.5 w-4 bg-sand" />
              Vous, à titre personnel
            </p>
            <h2 className="mt-5 text-3xl text-primary-foreground md:text-4xl">Consulter en TCC ou en EMDR</h2>
            <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/80">
              Un espace d'écoute, d'échange, d'interrogation et de compréhension. Séances individuelles et thérapie de couple.
            </p>
            <span className="link-underline mt-8 inline-block text-sm">Découvrir le suivi</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-10 md:gap-12 pt-12 md:grid-cols-[0.4fr_1.6fr]">
          <h2 className="text-2xl md:text-3xl">Formations</h2>
          <ul className="space-y-5">
            {FORMATIONS.map((f) => (
              <li
                key={f.year + f.label}
                className="flex flex-col gap-1 border-b border-border pb-5 sm:flex-row sm:gap-10"
              >
                <span className="w-20 shrink-0 font-display text-lg italic text-primary">{f.year}</span>
                <span className="leading-relaxed text-foreground/90">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-10 md:gap-12 pt-12 md:grid-cols-[0.4fr_1.6fr]">
          <h2 className="text-2xl md:text-3xl">Travaux</h2>
          <div className="max-w-2xl bg-primary p-7 text-foreground md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-sand">Mémoire de recherche</p>
            <p className="mt-3 text-lg leading-relaxed">
              Leadership authentique, engagement au travail et épanouissement des employés du
              secteur bancaire.
            </p>
            <p className="mt-8 text-sm text-foreground/70">
              Exercice en cabinet à {SITE.city} depuis 2020 · N° RPPS {SITE.rpps} · N° ADELI{" "}
              {SITE.adeli}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="eyebrow">Domaines d'accompagnement</p>
        <div className="mt-10 grid gap-px bg-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISES.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group flex flex-col justify-between bg-primary p-7 text-primary-foreground transition-all hover:bg-primary/95 hover:shadow-xl"
            >
              <div>
                <h3 className="font-display text-xl leading-snug text-primary-foreground decoration-accent/30 group-hover:underline">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">{item.text}</p>
              </div>
              <span className="mt-8 flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-widest text-sand">
                Découvrir <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
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

      <section className="mt-6 bg-primary text-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl">Et si on en parlait&nbsp;?</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-foreground/80">
              Rendez-vous en cabinet à {SITE.city}, ou un simple appel pour définir ensemble la
              meilleure façon d'avancer.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.doctolib} target="_blank" rel="noreferrer" className="btn-accent">
              Prendre rendez-vous <span aria-hidden="true">→</span>
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center rounded-full border border-primary-foreground/40 px-6 py-2.5 text-sm transition-colors hover:bg-primary-foreground/10"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
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
