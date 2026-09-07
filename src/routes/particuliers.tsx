import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { EXPERTISES, SITE } from "@/lib/site";

const title = "Consultations pour particuliers — TCC & EMDR à Saint-Avertin";
const description =
  "Consultations individuelles et thérapie de couple à Saint-Avertin : burn-out, stress, anxiété, traumatismes. Thérapie TCC et EMDR avec Karen Pinel.";

const SEANCES = [
  {
    title: "Première séance",
    duration: "1h00 environ",
    text: "On fait le tour de ce qui vous amène, de votre histoire et de vos attentes. À la fin, nous décidons ensemble de la suite : TCC, EMDR, ou les deux.",
  },
  {
    title: "Séances de suivi",
    duration: "45 minutes",
    text: "Le rythme habituel du travail thérapeutique. Des séances plus longues en EMDR peuvent être proposées, avec votre accord, si la situation le demande.",
  },
  {
    title: "Thérapie de couple",
    duration: "1h00 environ",
    text: "Un cadre pour rétablir le dialogue, sortir des schémas répétitifs et décider ensemble de la suite.",
  },
];

export const Route = createFileRoute("/particuliers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Particuliers,
});

function Particuliers() {
  return (
    <>
      <PageIntro
        eyebrow="Particuliers"
        title="Un espace pour déposer, comprendre et agir."
        lead="Consulter un psychologue ne signifie pas que vous êtes faible, mais que vous êtes suffisamment fort pour prendre en charge vos propres souffrances, interrogations et émotions, sans les faire supporter à vos proches."
      >
        <a href={SITE.doctolib} target="_blank" rel="noreferrer" className="btn-primary">
          Prendre rendez-vous
        </a>
      </PageIntro>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-px bg-border pt-px md:grid-cols-3">
          {SEANCES.map((s) => (
            <article
              key={s.title}
              className="border-t-4 border-accent bg-background px-5 py-10 md:px-8"
            >
              <p className="eyebrow">{s.duration}</p>
              <h2 className="mt-4 text-2xl">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl leading-tight md:text-4xl">Deux approches, un même cap</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-xl">La thérapie TCC</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                La thérapie cognitive et comportementale travaille sur le lien entre les pensées,
                les émotions et les comportements. Concrète et structurée, elle s'appuie sur des
                objectifs définis ensemble et sur des outils que vous gardez ensuite : tests, jeux
                de rôle, exercices d'exposition, mises en action entre les séances.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-xl">La thérapie EMDR</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                L'EMDR s'adresse aux souvenirs traumatiques ou marquants qui continuent d'agir sur
                le présent : accident, agression, deuil, événement professionnel violent, situations
                répétées d'humiliation. Le travail permet de retraiter ces souvenirs pour qu'ils
                cessent de déclencher la même charge émotionnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="eyebrow">Expertises et actes</p>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISES.map((item) => (
            <article key={item.title} className="bg-secondary/60 p-7">
              <h3 className="text-lg leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top flex flex-col gap-6 pt-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl">Prendre rendez-vous</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              Les consultations ne sont pas remboursées par la Sécurité sociale. Paiement par carte
              ou en espèces. Je ne reçois pas les enfants de moins de 16 ans.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.doctolib} target="_blank" rel="noreferrer" className="btn-primary">
              Doctolib
            </a>
            <Link to="/tarifs" className="btn-ghost">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
