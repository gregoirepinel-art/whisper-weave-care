import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { SITE, TARIFS } from "@/lib/site";

const title = "Tarifs des consultations — Karen Pinel, psychologue";
const description =
  "Tarifs des séances TCC, EMDR et de thérapie de couple au cabinet de Saint-Avertin, modalités de paiement et conditions d'annulation.";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Tarifs,
});

function Tarifs() {
  return (
    <>
      <PageIntro
        eyebrow="Tarifs"
        title="Des tarifs clairs, annoncés avant la première séance."
        lead="Les consultations de psychologue ne sont pas remboursées par la Sécurité sociale. Certaines mutuelles prennent en charge tout ou partie des séances : renseignez-vous auprès de la vôtre."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <ul className="rule-top pt-2">
          {TARIFS.map((t) => (
            <li
              key={t.label}
              className="flex flex-col gap-2 border-b border-border py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
            >
              <div>
                <p className="text-xl">{t.label}</p>
                {t.detail && (
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                )}
              </div>
              <p className="font-display text-3xl whitespace-nowrap">{t.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">Paiement</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Par carte bancaire ou en espèces, à la fin de la séance. La carte Vitale n'est pas
              acceptée.
            </p>
          </div>
          <div>
            <p className="eyebrow">Annulation</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Merci de prévenir au moins 48 heures à l'avance afin que le créneau puisse être
              proposé à quelqu'un d'autre.
            </p>
          </div>
          <div>
            <p className="eyebrow">Entreprises</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Les interventions en entreprise font l'objet d'un devis établi après un premier
              échange sur le besoin.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top flex flex-col gap-6 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg leading-relaxed">
            Les rendez-vous se prennent en ligne ou par téléphone au{" "}
            <a href={SITE.phoneHref} className="link-underline">
              {SITE.phone}
            </a>
            .
          </p>
          <a href={SITE.doctolib} target="_blank" rel="noreferrer" className="btn-primary">
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </>
  );
}
