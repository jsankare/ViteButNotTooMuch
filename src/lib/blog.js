export const blogPosts = [
  {
    id: "1",
    title: "ViteButNotTooMuch : une approche révolutionnaire du développement personnel",
    slug: "vitebutnottoomuch-approche-revolutionnaire",
    summary: "Découvrez comment la méthode ViteButNotTooMuch transforme le développement personnel grâce à une progression durable et mesurée.",
    metaTitle: "ViteButNotTooMuch | Méthode innovante de développement personnel 2024",
    metaDescription: "Explorez ViteButNotTooMuch, l'approche novatrice qui allie efficacité et durabilité dans le développement personnel. Commencez votre transformation dès aujourd’hui.",
    content: `
<p>Contrairement aux méthodes traditionnelles qui misent sur des changements rapides, ViteButNotTooMuch propose une approche progressive et équilibrée.</p>

<h2>Les piliers de la méthode ViteButNotTooMuch</h2>
<ul>
  <li>Un rythme durable</li>
  <li>Une progression mesurée</li>
  <li>Une croissance équilibrée</li>
  <li>Une évolution continue</li>
</ul>

<h2>Pourquoi cette approche fonctionne</h2>
<ul>
  <li>Elle évite l’épuisement grâce à une cadence mesurée</li>
  <li>Elle favorise un changement durable par l’intégration d’habitudes stables</li>
  <li>Elle construit la confiance via des victoires régulières</li>
  <li>Elle maintient la motivation par des objectifs accessibles</li>
</ul>

<p>ViteButNotTooMuch ne cherche pas la performance immédiate, mais un cheminement constant et serein vers une meilleure version de soi.</p>
    `,
    date: "2024-04-15",
    relatedPosts: ["2", "3", "4"],
  },
  {
    id: "2",
    title: "Maîtriser ViteButNotTooMuch : guide pratique pour le quotidien",
    slug: "mastering-vitebutnottoomuch-daily-guide",
    summary: "Un guide détaillé pour intégrer les principes de ViteButNotTooMuch dans votre routine journalière.",
    metaTitle: "ViteButNotTooMuch au quotidien | Conseils pratiques",
    metaDescription: "Apprenez à appliquer ViteButNotTooMuch chaque jour. Découvrez des techniques concrètes pour une croissance personnelle équilibrée.",
    content: `
<h2>Routine matinale</h2>
<ul>
  <li>5 minutes de pleine conscience</li>
  <li>3 minutes pour définir vos objectifs</li>
  <li>2 minutes de rétrospective</li>
</ul>

<h2>Dans la journée</h2>
<ul>
  <li>Mini-sessions d’apprentissage</li>
  <li>Points de contrôle rapides</li>
  <li>Pauses conscientes</li>
</ul>

<h2>En soirée</h2>
<ul>
  <li>Célébration des petites victoires</li>
  <li>Ajustement des priorités</li>
  <li>Préparation du lendemain</li>
</ul>
    `,
    date: "2024-04-14",
    relatedPosts: ["1", "3", "5"],
  },
  {
    id: "3",
    title: "ViteButNotTooMuch vs Méthodes Traditionnelles : Analyse Comparée",
    slug: "vitebutnottoomuch-vs-traditional-methods",
    summary: "Une comparaison entre l’approche ViteButNotTooMuch et les méthodes classiques de développement personnel.",
    metaTitle: "ViteButNotTooMuch vs Méthodes Classiques | Lequel est le plus efficace ?",
    metaDescription: "Découvrez pourquoi ViteButNotTooMuch propose une alternative plus durable que les approches intensives traditionnelles.",
    content: `
<h2>Forces de ViteButNotTooMuch</h2>
<ul>
  <li>Progrès constant et durable</li>
  <li>Moins de risque de décrochage</li>
  <li>Meilleure rétention à long terme</li>
</ul>

<h2>Limites des méthodes classiques</h2>
<ul>
  <li>Pression intense</li>
  <li>Taux d’abandon élevé</li>
  <li>Résultats temporaires</li>
</ul>
    `,
    date: "2024-04-13",
    relatedPosts: ["1", "2", "4"],
  },
  {
    id: "4",
    title: "Histoires de Réussite avec ViteButNotTooMuch : Témoignages Inspirants",
    slug: "vitebutnottoomuch-success-stories",
    summary: "Des histoires vraies de personnes ayant transformé leur vie grâce à ViteButNotTooMuch.",
    metaTitle: "Témoignages ViteButNotTooMuch | Transformations Réelles",
    metaDescription: "Lisez des témoignages inspirants de ceux qui ont utilisé ViteButNotTooMuch pour changer leur vie. Résultats prouvés et vécus.",
    content: `
<h2>Le parcours de Sarah</h2>
<p>"Avec ViteButNotTooMuch, j’ai enfin trouvé un rythme qui me correspond. Je progresse sans pression et je me sens mieux."</p>

<h2>La transformation de Mike</h2>
<p>"J’ai pu construire des habitudes durables sans me sentir submergé."</p>

<h2>Un succès d’équipe</h2>
<p>Une startup a boosté sa productivité et réduit le stress en adoptant les principes de ViteButNotTooMuch.</p>
    `,
    date: "2024-04-12",
    relatedPosts: ["1", "3", "5"],
  },
  {
    id: "5",
    title: "La Science de ViteButNotTooMuch : Preuves et Recherches",
    slug: "science-behind-vitebutnottoomuch",
    summary: "Analyse des bases scientifiques derrière la méthode ViteButNotTooMuch.",
    metaTitle: "ViteButNotTooMuch et la Science | Approche validée",
    metaDescription: "Études scientifiques et principes psychologiques qui justifient l’efficacité de ViteButNotTooMuch.",
    content: `
<h2>Domaines étudiés</h2>
<ul>
  <li>Psychologie comportementale</li>
  <li>Formation des habitudes</li>
  <li>Neuroplasticité</li>
  <li>Psychologie de la performance</li>
</ul>

<h2>Résultats clés</h2>
<ul>
  <li>Des progrès réguliers activent des circuits neuronaux durables</li>
  <li>Les petites victoires stimulent la motivation</li>
  <li>Moins de stress, meilleure rétention</li>
</ul>
    `,
    date: "2024-04-11",
    relatedPosts: ["1", "2", "3"],
  }
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(postId) {
  const post = blogPosts.find((p) => p.id === postId);
  if (!post) return [];
  return blogPosts.filter((p) => post.relatedPosts.includes(p.id));
}

export function getPostsByKeyword(keyword) {
  return blogPosts.filter((post) =>
      post.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))
  );
}

export function getRecentPosts(limit = 3) {
  return [...blogPosts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit);
}
