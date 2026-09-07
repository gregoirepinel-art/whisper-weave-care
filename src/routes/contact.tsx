import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";

const title = "Contact — cabinet de Karen Pinel à Saint-Avertin";
const description =
  "Adresse du cabinet, téléphone, horaires et formulaire de contact pour joindre Karen Pinel, psychologue à Saint-Avertin près de Tours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

function Contact() {
  const mapQuery = encodeURIComponent(`${SITE.street}, ${SITE.postalCode} ${SITE.city}`);

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Le cabinet"
        lead="Pour un rendez-vous, le plus simple reste la prise en ligne ou le téléphone. Le formulaire est là pour les questions et les demandes des entreprises."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rule-top grid gap-10 pt-12 md:grid-cols-3">
          <div>
            <p className="eyebrow">Adresse</p>
            <p className="mt-4 leading-relaxed">
              {SITE.street}
              <br />
              {SITE.postalCode} {SITE.city}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-3 inline-block text-sm"
            >
              Ouvrir dans Maps
            </a>
          </div>
          <div>
            <p className="eyebrow">Téléphone</p>
            <p className="mt-4 leading-relaxed">
              <a href={SITE.phoneHref} className="link-underline">
                {SITE.phone}
              </a>
            </p>
            <a
              href={SITE.doctolib}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-3 inline-block text-sm"
            >
              Prendre rendez-vous en ligne
            </a>
          </div>
          <div>
            <p className="eyebrow">E-mail</p>
            <p className="mt-4 leading-relaxed">
              <a href={SITE.emailHref} className="link-underline">
                {SITE.email}
              </a>
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <iframe
          title={`Plan d'accès au cabinet, ${SITE.street}, ${SITE.city}`}
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          className="h-[360px] w-full border border-border"
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rule-top grid gap-12 pt-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl leading-tight md:text-4xl">Écrire un message</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
