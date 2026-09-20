import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { SITE } from "@/lib/site";

const title = "Mentions légales — Karen Pinel, psychologue";
const description =
  "Mentions légales, hébergement et informations professionnelles du site de Karen Pinel, psychologue à Saint-Avertin.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: `${SITE.siteUrl}/mentions-legales` }],
  }),
  component: Mentions,
});

function Mentions() {
  return (
    <>
      <PageIntro eyebrow="Informations" title="Mentions légales" />

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-10">
          <div>
            <h2 className="text-xl">Éditeur du site</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Karen Pinel, {SITE.role}, exerçant en libéral.
              <br />
              {SITE.street}, {SITE.postalCode} {SITE.city}
              <br />
              Téléphone : {SITE.phone}
              <br />
              E-mail :{" "}
              <a href={SITE.emailHref} className="link-underline">
                {SITE.email}
              </a>
              <br />
              N° RPPS : {SITE.rpps} · N° ADELI : {SITE.adeli}
               <br />
               N° SIRET : {SITE.siret}
            </p>
          </div>

          <div>
            <h2 className="text-xl">Profession réglementée</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Le titre de psychologue est protégé par la loi n° 85-772 du 25 juillet 1985. L'exercice
              s'inscrit dans le respect du Code de déontologie des psychologues français, notamment
              de ses principes de confidentialité, de respect de la personne et de responsabilité
              professionnelle.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Identification de l'activité</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Entreprise individuelle — profession libérale.
              <br />
              Assurance responsabilité civile professionnelle : à compléter.
              <br />
              TVA non applicable, article 293 B du Code général des impôts.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Hébergement</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Ce site est hébergé par Netlify, Inc., 2325 3rd Street, San Francisco, CA 94107,
              États-Unis.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Propriété intellectuelle</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              L'ensemble des textes et images de ce site est la propriété de Karen Pinel. Toute
              reproduction sans autorisation est interdite.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
