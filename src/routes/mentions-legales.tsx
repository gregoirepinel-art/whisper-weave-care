import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { SITE } from "@/lib/site";

const title = "Mentions légales — Karen Pinel, psychologue";
const description =
  "Mentions légales, hébergement et politique de confidentialité du site de Karen Pinel, psychologue à Saint-Avertin.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
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
              N° RPPS : {SITE.rpps} · N° ADELI : {SITE.adeli}
            </p>
          </div>

          <div>
            <h2 className="text-xl">Profession réglementée</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Le titre de psychologue est protégé par la loi n° 85-772 du 25 juillet 1985. L'exercice
              est soumis au respect du Code de déontologie des psychologues, notamment au secret
              professionnel.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Hébergement</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Ce site est hébergé par Lovable. Les coordonnées complètes de l'hébergeur seront
              précisées ici.
            </p>
          </div>

          <div>
            <h2 className="text-xl">Données personnelles</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Les informations saisies dans le formulaire de contact (nom, e-mail, téléphone,
              message) sont utilisées uniquement pour répondre à votre demande et ne sont ni
              cédées ni revendues. Vous pouvez demander leur consultation, leur rectification ou
              leur suppression en écrivant au cabinet.
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
