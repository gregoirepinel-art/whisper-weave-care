import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { SITE } from "@/lib/site";

const title = "Politique de confidentialité — Karen Pinel";
const description =
  "Politique de confidentialité du site de Karen Pinel : données collectées, finalités, conservation et droits des utilisateurs.";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PolitiqueConfidentialite,
});

function PolitiqueConfidentialite() {
  return (
    <>
      <PageIntro
        eyebrow="Vos données"
        title="Politique de confidentialité"
        lead="Cette page explique quelles informations sont recueillies lorsque vous écrivez au cabinet, pourquoi elles le sont et comment exercer vos droits."
      />

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-10">
          <div>
            <h2 className="text-xl">Responsable du traitement</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Karen Pinel, psychologue, {SITE.street}, {SITE.postalCode} {SITE.city}. Vous pouvez la
              contacter à l'adresse <a href={SITE.emailHref} className="link-underline">{SITE.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Données collectées</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Le formulaire de contact recueille votre nom, votre adresse e-mail, votre message,
              le type de demande et, uniquement si vous choisissez de l'indiquer, votre numéro de
              téléphone.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Finalité et base légale</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Ces informations sont utilisées exclusivement pour recevoir votre demande, vous
              répondre et assurer le suivi de cet échange. Leur traitement repose sur votre démarche
              volontaire de prise de contact et, selon la demande, sur les mesures précontractuelles
              nécessaires pour vous répondre.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Durée de conservation</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Les messages et coordonnées transmis par le formulaire sont conservés pendant une
              durée maximale de trois ans à compter du dernier échange, puis supprimés, sauf
              obligation légale imposant une conservation plus longue.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Destinataires et confidentialité</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Les données sont destinées uniquement à Karen Pinel et aux prestataires techniques
              strictement nécessaires au fonctionnement sécurisé du site. Elles ne sont ni vendues,
              ni louées, ni utilisées à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Vos droits</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Vous pouvez demander l'accès à vos données, leur rectification, leur effacement, la
              limitation de leur traitement ou vous opposer à celui-ci. Pour exercer ces droits,
              écrivez à <a href={SITE.emailHref} className="link-underline">{SITE.email}</a>. Vous
              pouvez également adresser une réclamation à la CNIL si vous estimez que vos droits ne
              sont pas respectés.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Cookies et mesure d'audience</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Le site n'utilise actuellement aucun outil de mesure d'audience, cookie publicitaire
              ou traceur nécessitant votre consentement. Une bannière de consentement sera ajoutée
              avant toute activation future d'un tel service.
            </p>
          </div>

          <p className="border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
            Pour les informations relatives à l'éditeur et à l'hébergement, consultez les {" "}
            <Link to="/mentions-legales" className="link-underline">mentions légales</Link>.
          </p>
        </div>
      </section>
    </>
  );
}