export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  date: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedPosts: string[]; // IDs des articles liés
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "ViteButNotTooMuch : La philosophie du progrès équilibré",
    slug: "vitebutnottoomuch-philosophie-progres-equilibre",
    metaTitle: "ViteButNotTooMuch : Guide complet du développement personnel équilibré",
    metaDescription: "Découvrez la méthode ViteButNotTooMuch pour progresser efficacement sans s'épuiser. Une approche équilibrée du développement personnel.",
    keywords: ["vitebutnottoomuch", "développement personnel", "progrès équilibré", "méthode efficace", "bien-être"],
    summary: "Introduction complète à la philosophie ViteButNotTooMuch et ses principes fondamentaux pour un développement personnel durable.",
    content: `
      La méthode ViteButNotTooMuch représente une révolution dans l'approche du développement personnel.
      
      Principes fondamentaux :
      1. L'équilibre entre progression et récupération
      2. La puissance des micro-actions quotidiennes
      3. L'importance du rythme personnel
      
      Comment appliquer ViteButNotTooMuch :
      - Commencez par des actions de 5 minutes
      - Écoutez vos signaux de fatigue
      - Célébrez chaque petit progrès
      
      La clé du succès réside dans la constance, pas dans l'intensité.
    `,
    date: "2024-04-15",
    relatedPosts: ["2", "3", "4"]
  },
  {
    id: "2",
    title: "Les 5 piliers de la méthode ViteButNotTooMuch",
    slug: "5-piliers-vitebutnottoomuch",
    metaTitle: "ViteButNotTooMuch : Les 5 piliers essentiels pour progresser efficacement",
    metaDescription: "Maîtrisez les 5 piliers fondamentaux de la méthode ViteButNotTooMuch pour un développement personnel optimal et durable.",
    keywords: ["vitebutnottoomuch", "piliers fondamentaux", "progression durable", "développement personnel", "méthode efficace"],
    summary: "Découvrez les cinq principes essentiels qui font la force de la méthode ViteButNotTooMuch.",
    content: `
      Les 5 piliers de ViteButNotTooMuch :
      
      1. La Progression Progressive
      - Petits pas quotidiens
      - Évolution naturelle
      - Adaptation constante
      
      2. L'Équilibre Dynamique
      - Balance effort/repos
      - Ajustement continu
      - Écoute de soi
      
      3. La Consistance Intelligente
      - Actions quotidiennes
      - Flexibilité d'application
      - Adaptation au contexte
      
      4. La Mesure Consciente
      - Suivi des progrès
      - Ajustements réguliers
      - Célébration des victoires
      
      5. L'Innovation Progressive
      - Expérimentation contrôlée
      - Apprentissage continu
      - Évolution personnalisée
    `,
    date: "2024-04-14",
    relatedPosts: ["1", "3", "5"]
  },
  {
    id: "3",
    title: "ViteButNotTooMuch au quotidien : Guide pratique",
    slug: "vitebutnottoomuch-guide-pratique-quotidien",
    metaTitle: "ViteButNotTooMuch : Application pratique et exemples quotidiens",
    metaDescription: "Guide pratique pour appliquer la méthode ViteButNotTooMuch dans votre quotidien. Exemples concrets et conseils d'application.",
    keywords: ["vitebutnottoomuch pratique", "application quotidienne", "exemples concrets", "guide débutant", "routine équilibrée"],
    summary: "Un guide pratique pour intégrer ViteButNotTooMuch dans votre vie quotidienne, avec des exemples concrets et des conseils d'application.",
    content: `
      Application pratique de ViteButNotTooMuch :
      
      Matin :
      - 5 minutes de méditation
      - 3 minutes d'étirements
      - 2 minutes de planification
      
      Journée :
      - Pauses de 3 minutes toutes les 2 heures
      - Micro-actions de progression
      - Moments de recul et d'évaluation
      
      Soir :
      - 5 minutes de réflexion
      - 3 minutes de gratitude
      - 2 minutes de préparation du lendemain
    `,
    date: "2024-04-13",
    relatedPosts: ["1", "2", "4"]
  },
  {
    id: "4",
    title: "ViteButNotTooMuch pour les entrepreneurs",
    slug: "vitebutnottoomuch-entrepreneurs",
    metaTitle: "ViteButNotTooMuch : La méthode optimale pour entrepreneurs",
    metaDescription: "Comment appliquer ViteButNotTooMuch dans votre entreprise ? Guide complet pour entrepreneurs et managers.",
    keywords: ["vitebutnottoomuch business", "entrepreneuriat", "gestion d'entreprise", "productivité", "management"],
    summary: "Adaptation de la méthode ViteButNotTooMuch pour les entrepreneurs et les managers.",
    content: `
      ViteButNotTooMuch en entreprise :
      
      1. Gestion de projet
      - Découpage en micro-objectifs
      - Progression mesurée
      - Adaptation continue
      
      2. Management d'équipe
      - Communication progressive
      - Évolution par petites étapes
      - Feedback régulier
      
      3. Innovation
      - Tests à petite échelle
      - Itérations rapides
      - Adaptation au marché
    `,
    date: "2024-04-12",
    relatedPosts: ["1", "5", "6"]
  },
  {
    id: "5",
    title: "ViteButNotTooMuch : Science et recherches",
    slug: "vitebutnottoomuch-science-recherches",
    metaTitle: "ViteButNotTooMuch : Fondements scientifiques et études",
    metaDescription: "Les bases scientifiques derrière la méthode ViteButNotTooMuch. Études, recherches et preuves d'efficacité.",
    keywords: ["vitebutnottoomuch science", "recherches", "études scientifiques", "psychologie", "neuroplasticité"],
    summary: "Exploration des fondements scientifiques qui soutiennent l'efficacité de la méthode ViteButNotTooMuch.",
    content: `
      Bases scientifiques de ViteButNotTooMuch :
      
      1. Neuroplasticité
      - Formation des habitudes
      - Adaptation cérébrale
      - Apprentissage progressif
      
      2. Psychologie comportementale
      - Motivation durable
      - Changement progressif
      - Ancrage des habitudes
      
      3. Études de cas
      - Résultats observés
      - Témoignages
      - Analyses statistiques
    `,
    date: "2024-04-11",
    relatedPosts: ["1", "2", "6"]
  },
  {
    id: "6",
    title: "ViteButNotTooMuch vs méthodes traditionnelles",
    slug: "vitebutnottoomuch-vs-methodes-traditionnelles",
    metaTitle: "ViteButNotTooMuch ou méthodes traditionnelles : Quelle approche choisir ?",
    metaDescription: "Comparaison entre ViteButNotTooMuch et les approches traditionnelles du développement personnel. Avantages et différences.",
    keywords: ["vitebutnottoomuch comparaison", "méthodes traditionnelles", "développement personnel", "efficacité", "analyse comparative"],
    summary: "Analyse comparative entre ViteButNotTooMuch et les approches traditionnelles du développement personnel.",
    content: `
      Comparaison détaillée :
      
      ViteButNotTooMuch :
      - Progression douce
      - Résultats durables
      - Moins de stress
      
      Méthodes traditionnelles :
      - Changements radicaux
      - Résultats rapides mais temporaires
      - Risque de burnout
      
      Pourquoi ViteButNotTooMuch est différent :
      1. Approche personnalisée
      2. Respect du rythme naturel
      3. Résultats plus durables
    `,
    date: "2024-04-10",
    relatedPosts: ["1", "4", "5"]
  }
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(postId: string) {
  const post = blogPosts.find((p) => p.id === postId);
  if (!post) return [];
  return blogPosts.filter((p) => post.relatedPosts.includes(p.id));
}