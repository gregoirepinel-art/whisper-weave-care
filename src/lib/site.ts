export const SITE = {
  name: "Karen Pinel",
  role: "Psychologue du travail · Thérapeute TCC & EMDR",
  baseline: "La psychologie en action",
  tagline: "Conseils · Coaching · Organisation · Formation",
  phone: "06 99 97 04 08",
  phoneHref: "tel:+33699970408",
  email: "karenpinel.psychologue@gmail.com",
  emailHref: "mailto:karenpinel.psychologue@gmail.com",
  address: "26 rue de la Tuilerie, 37550 Saint-Avertin",
  street: "26 rue de la Tuilerie",
  postalCode: "37550",
  city: "Saint-Avertin",
  doctolib: "https://www.doctolib.fr/psychologue/joue-les-tours/karen-pinel",
  rpps: "10009165290",
  adeli: "379310956",
  hours: "Du lundi au vendredi · 9h00 – 12h00 / 14h00 – 19h00",
} as const;

export const EXPERTISES = [
  {
    title: "Accompagnement du burn-out",
    text: "Comprendre l'épuisement, retrouver de l'énergie et reconstruire un rapport tenable au travail.",
  },
  {
    title: "Gestion du stress",
    text: "Des outils concrets pour réguler la tension, l'anxiété d'anticipation et la charge mentale.",
  },
  {
    title: "Thérapie EMDR",
    text: "Traitement des traumatismes et des souvenirs qui continuent de peser au quotidien.",
  },
  {
    title: "Thérapie TCC",
    text: "Thérapie cognitive et comportementale : travailler sur les pensées, les émotions et les actes.",
  },
  {
    title: "Souffrance au travail",
    text: "Conflits, harcèlement, perte de sens : mettre des mots et retrouver une marge de manœuvre.",
  },
  {
    title: "Troubles anxieux",
    text: "Anxiété généralisée, crises d'angoisse, phobies : apaiser durablement.",
  },
  {
    title: "Thérapie de couple",
    text: "Rétablir le dialogue, sortir des schémas répétitifs, décider ensemble de la suite.",
  },
  {
    title: "Confiance et affirmation de soi",
    text: "Estime de soi, communication, transition de carrière : définir vos objectifs et les atteindre.",
  },
] as const;

export const ENTREPRISE_SERVICES = [
  {
    title: "Enquêtes harcèlement et comportements inappropriés",
    text: "Conduite d'enquêtes internes en toute impartialité : recueil des témoignages, analyse, rapport et préconisations.",
  },
  {
    title: "Prévention des risques psychosociaux",
    text: "Diagnostic de la qualité de vie au travail, identification des situations à risque, plan d'action avec la direction et les représentants du personnel.",
  },
  {
    title: "Formation",
    text: "Sensibilisation des managers et des équipes : prévention du burn-out, gestion du stress, communication, repérage des situations sensibles.",
  },
  {
    title: "Coaching de dirigeants et de managers",
    text: "Accompagnement individuel sur la posture, la prise de décision, la gestion des tensions et les prises de fonction.",
  },
  {
    title: "Conseil en organisation",
    text: "Analyse du fonctionnement collectif, des jeux d'acteurs et des contraintes réelles, pour des transformations qui tiennent dans la durée.",
  },
  {
    title: "Accompagnement des transitions",
    text: "Réorganisations, mobilités, transitions de carrière : soutenir les personnes autant que le projet.",
  },
] as const;

export const FORMATIONS = [
  { year: "2025", label: "Thérapie EMDR (thérapie des traumatismes) — EDEPHE, EMDR France, niveau 2" },
  { year: "2024", label: "Thérapie EMDR (thérapie des traumatismes) — EDEPHE, EMDR France, niveau 1" },
  { year: "2020", label: "Thérapie TCC (cognitivo-comportementale) — AFTCC" },
  { year: "2019", label: "Diplôme et titre de psychologue — Université de Tours" },
  { year: "2019", label: "Coach certifiée RNCP — Espace Transitions" },
] as const;

export const TARIFS = [
  { label: "Première séance (TCC ou EMDR)", detail: "1h00 environ", price: "90 €" },
  { label: "Séance de suivi TCC ou EMDR", detail: "45 minutes", price: "60 €" },
  { label: "Thérapie de couple", detail: "1h00 environ", price: "90 €" },
] as const;
