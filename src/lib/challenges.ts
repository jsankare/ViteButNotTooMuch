export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: "Esprit" | "Bien-être" | "Apprentissage";
  duration: 5 | 10 | 15;
  keywords?: string[];  // SEO keywords
  benefits?: string[];  // Benefits for motivation and SEO
}

export const challenges: Challenge[] = [
  {
    id: "1",
    title: "Exercice de respiration consciente – 5 minutes",
    description: "Pratique une respiration focalisée pour réduire le stress et améliorer ta clarté mentale. Concentre-toi sur chaque inspiration, ressens le rythme et les sensations.",
    category: "Esprit",
    duration: 5,
    keywords: ["méditation", "pleine conscience", "gestion du stress", "exercice de respiration", "santé mentale"],
    benefits: ["Réduit le stress", "Améliore la concentration", "Apaise l'anxiété", "Meilleure oxygénation"],
  },
  {
    id: "2",
    title: "Routine d’étirements express – Corps entier",
    description: "Dynamise ton corps avec une série d’étirements rapides qui ciblent les principaux groupes musculaires.",
    category: "Bien-être",
    duration: 5,
    keywords: ["étirements", "souplesse", "forme physique", "santé corporelle", "exercice rapide"],
    benefits: ["Améliore la souplesse", "Réduit les tensions musculaires", "Augmente l’énergie", "Meilleure posture"],
  },
  {
    id: "3",
    title: "Défi vocabulaire du jour",
    description: "Apprends un nouveau mot dans la langue que tu veux maîtriser, et utilise-le dans la journée.",
    category: "Apprentissage",
    duration: 5,
    keywords: ["apprentissage des langues", "vocabulaire", "éducation", "développement personnel", "linguistique"],
    benefits: ["Enrichit ton vocabulaire", "Stimule la mémoire", "Améliore la communication", "Sensibilité culturelle"],
  },
  {
    id: "4",
    title: "Méditation scan corporel en pleine conscience",
    description: "Fais un scan corporel progressif pour développer ta conscience du corps, de la tête aux pieds.",
    category: "Esprit",
    duration: 10,
    keywords: ["méditation", "conscience corporelle", "relaxation", "pleine conscience", "réduction du stress"],
    benefits: ["Relaxation profonde", "Connexion au corps", "Moins de stress", "Sommeil amélioré"],
  },
  {
    id: "5",
    title: "Exercice mémoire éclair",
    description: "Teste ta mémoire en essayant de mémoriser une suite de chiffres ou de mots en 5 minutes chrono.",
    category: "Apprentissage",
    duration: 5,
    keywords: ["entraînement mémoire", "gym cérébrale", "amélioration cognitive", "forme mentale"],
    benefits: ["Mémoire boostée", "Focus renforcé", "Fonctions cognitives améliorées", "Agilité mentale"],
  },
  {
    id: "6",
    title: "Planification productive – 15 minutes",
    description: "Organise ta journée avec la méthode ViteButNotTooMuch : tâches essentielles + pauses prévues.",
    category: "Esprit",
    duration: 15,
    keywords: ["productivité", "organisation", "gestion du temps", "objectifs", "planification"],
    benefits: ["Journée structurée", "Moins de stress", "Productivité améliorée", "Priorités claires"],
  },
  {
    id: "7",
    title: "Yoga express au bureau",
    description: "Fais quelques postures simples de yoga directement depuis ton bureau pour détendre ton corps.",
    category: "Bien-être",
    duration: 5,
    keywords: ["yoga au bureau", "exercice au travail", "bien-être au travail", "étirements", "forme physique"],
    benefits: ["Moins de raideur", "Meilleure posture", "Énergie retrouvée", "Stress réduit"],
  },
  {
    id: "9",
    title: "Exercice de journal de gratitude",
    description: "Note trois choses pour lesquelles tu es reconnaissant·e aujourd’hui, en restant pleinement connecté·e au moment présent.",
    category: "Esprit",
    duration: 5,
    keywords: ["gratitude", "journal", "santé mentale", "psychologie positive", "pleine conscience"],
    benefits: ["Renforce la pensée positive", "Diminue le stress", "Améliore l’humeur", "Offre une meilleure perspective de vie"],
  },
  {
    id: "10",
    title: "Renforcement rapide du tronc",
    description: "Effectue une série simple d’exercices pour solidifier ta sangle abdominale et améliorer ta stabilité.",
    category: "Bien-être",
    duration: 5,
    keywords: ["abdos", "exercice du tronc", "entraînement musculaire", "forme physique", "santé corporelle"],
    benefits: ["Renforce les abdos", "Corrige la posture", "Réduit les douleurs dorsales", "Stabilité corporelle accrue"],
  },
  {
    id: "11",
    title: "Lecture active – 15 minutes",
    description: "Lis un court article et résume les idées principales pour booster ta compréhension écrite.",
    category: "Apprentissage",
    duration: 15,
    keywords: ["lecture", "compréhension", "éducation", "apprentissage", "techniques d’étude"],
    benefits: ["Meilleure compréhension", "Mémoire renforcée", "Analyse plus fine", "Enrichissement personnel"],
  },
  {
    id: "12",
    title: "Marche consciente – exercice de pleine présence",
    description: "Pars pour une courte marche en pleine conscience. Sens chaque pas et observe ton environnement avec attention.",
    category: "Esprit",
    duration: 10,
    keywords: ["méditation en marchant", "pleine conscience", "activité physique", "nature", "bien-être mental"],
    benefits: ["Active le corps", "Clarifie l’esprit", "Apaise le stress", "Connexion avec la nature"],
  },
  {
    id: "13",
    title: "Entraînement express à l’équilibre",
    description: "Réalise quelques exercices simples pour travailler ton équilibre et ta conscience corporelle.",
    category: "Bien-être",
    duration: 5,
    keywords: ["équilibre", "forme physique", "coordination", "exercice corporel", "santé physique"],
    benefits: ["Améliore l’équilibre", "Renforce la coordination", "Solidifie le centre du corps", "Réduit les risques de chute"],
  },
  {
    id: "14",
    title: "Défi maths rapide – 5 minutes",
    description: "Résous des petits problèmes de calcul mental pour muscler ton esprit logique.",
    category: "Apprentissage",
    duration: 5,
    keywords: ["maths", "calcul mental", "entraînement cérébral", "éducation", "fonctions cognitives"],
    benefits: ["Développe les réflexes mentaux", "Stimule la pensée rapide", "Renforce la logique", "Active les capacités cognitives"],
  },
  {
    id: "15",
    title: "Affirmations positives – booste ton mental",
    description: "Crée et répète des affirmations puissantes pour renforcer ta confiance et cultiver un état d’esprit positif.",
    category: "Esprit",
    duration: 5,
    keywords: ["affirmations", "pensée positive", "développement personnel", "motivation", "mental positif"],
    benefits: ["Renforce la confiance en soi", "Cultive une attitude positive", "Améliore l’estime personnelle", "Affermit la résilience mentale"],
  }

];

// Additional helper function for keyword-based search
export function getChallengesByKeyword(keyword: string): Challenge[] {
  const lowercaseKeyword = keyword.toLowerCase();
  return challenges.filter(challenge => 
    challenge.keywords?.some(k => k.toLowerCase().includes(lowercaseKeyword)) ||
    challenge.title.toLowerCase().includes(lowercaseKeyword) ||
    challenge.description.toLowerCase().includes(lowercaseKeyword)
  );
}

// Helper function to get challenges by benefit
export function getChallengesByBenefit(benefit: string): Challenge[] {
  const lowercaseBenefit = benefit.toLowerCase();
  return challenges.filter(challenge =>
    challenge.benefits?.some(b => b.toLowerCase().includes(lowercaseBenefit))
  );
}

// Original functions remain unchanged
export function getRandomChallenge(): Challenge {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
}

export function getChallengesByCategory(category?: Challenge["category"]): Challenge[] {
  if (!category) return challenges;
  return challenges.filter((challenge) => challenge.category === category);
}

export function getChallengesByDuration(duration?: Challenge["duration"]): Challenge[] {
  if (!duration) return challenges;
  return challenges.filter((challenge) => challenge.duration === duration);
}