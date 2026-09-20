import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { SITE } from "@/lib/site";

const title = "Conditions générales d'utilisation — Karen Pinel";
const description = "Conditions d'utilisation du site de Karen Pinel, psychologue du travail à Saint-Avertin.";

export const Route = createFileRoute("/cgu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE.siteUrl}/cgu` }],
  }),
  component: ConditionsUtilisation,
});

function ConditionsUtilisation() {
  return (
    <>
      <PageIntro eyebrow="Informations" title="Conditions générales d'utilisation" lead="Les règles essentielles applicables à la consultation et à l'utilisation de ce site." />
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-10">
          <div><h2 className="text-xl">Objet du site</h2><p className="mt-3 leading-relaxed text-muted-foreground">Ce site présente l'activité, les accompagnements et les coordonnées de Karen Pinel. Son contenu est informatif et ne remplace ni une consultation, ni un diagnostic, ni une prise en charge d'urgence.</p></div>
          <div><h2 className="text-xl">Accès et disponibilité</h2><p className="mt-3 leading-relaxed text-muted-foreground">L'accès au site est gratuit. Karen Pinel s'efforce d'en assurer la disponibilité et l'exactitude, sans pouvoir garantir une absence totale d'interruption ou d'erreur.</p></div>
          <div><h2 className="text-xl">Prise de rendez-vous</h2><p className="mt-3 leading-relaxed text-muted-foreground">Les rendez-vous sont pris sur Doctolib ou par téléphone. Les horaires, tarifs et modalités affichés peuvent évoluer ; les conditions applicables sont celles confirmées au moment de la prise de rendez-vous.</p></div>
          <div><h2 className="text-xl">Responsabilité</h2><p className="mt-3 leading-relaxed text-muted-foreground">L'utilisateur reste responsable de l'usage qu'il fait des informations disponibles. En cas d'urgence médicale ou psychologique, contactez le 15 ou le 3114.</p></div>
          <div><h2 className="text-xl">Propriété intellectuelle</h2><p className="mt-3 leading-relaxed text-muted-foreground">Les textes, photographies, éléments graphiques et contenus du site sont protégés. Toute reproduction ou réutilisation sans autorisation préalable est interdite.</p></div>
          <div><h2 className="text-xl">Données personnelles</h2><p className="mt-3 leading-relaxed text-muted-foreground">Le traitement des informations transmises via le formulaire est détaillé dans la <Link to="/politique-confidentialite" className="link-underline">politique de confidentialité</Link>.</p></div>
          <div><h2 className="text-xl">Droit applicable</h2><p className="mt-3 leading-relaxed text-muted-foreground">Les présentes conditions sont soumises au droit français. Pour toute question, écrivez à <a href={SITE.emailHref} className="link-underline">{SITE.email}</a>.</p></div>
        </div>
      </section>
    </>
  );
}
