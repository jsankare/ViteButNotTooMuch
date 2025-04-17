export const blogPosts = [
  {
    id: "1",
    title: "ViteButNotTooMuch: The Revolutionary Approach to Personal Growth",
    slug: "vitebutnottoomuch-revolutionary-approach",
    summary: "Discover how ViteButNotTooMuch methodology transforms personal development through sustainable, measured progress.",
    metaTitle: "ViteButNotTooMuch | Innovative Personal Growth Method 2024",
    metaDescription: "Learn about ViteButNotTooMuch, the groundbreaking approach to personal development that combines efficiency with sustainability. Start your journey today.",
    keywords: ["ViteButNotTooMuch", "personal growth", "sustainable development", "efficient progress"],
    content: `
      ViteButNotTooMuch represents a paradigm shift in personal development. Unlike traditional methods that push for rapid transformation, this approach emphasizes sustainable progress.

      Core Principles of ViteButNotTooMuch:
      1. Sustainable Pace
      2. Measured Progress
      3. Balanced Growth
      4. Consistent Evolution

      Why ViteButNotTooMuch Works:
      - Prevents burnout through measured progress
      - Creates lasting change through sustainable habits
      - Builds confidence through consistent wins
      - Maintains motivation through achievable goals

      The ViteButNotTooMuch method isn't about racing to the finish line—it's about enjoying the journey while ensuring consistent progress.
    `,
    date: "2024-04-15",
    relatedPosts: ["2", "3", "4"],
  },
  {
    id: "2",
    title: "Mastering ViteButNotTooMuch: Daily Implementation Guide",
    slug: "mastering-vitebutnottoomuch-daily-guide",
    summary: "A comprehensive guide to implementing ViteButNotTooMuch principles in your daily routine.",
    metaTitle: "ViteButNotTooMuch Daily Implementation Guide | Practical Tips",
    metaDescription: "Step-by-step guide to incorporating ViteButNotTooMuch principles into your daily life. Learn practical techniques for balanced personal growth.",
    keywords: ["ViteButNotTooMuch guide", "daily implementation", "practical tips", "balanced growth"],
    content: `
      Transform your daily routine with ViteButNotTooMuch principles. This comprehensive guide shows you how to implement sustainable growth practices.

      Morning Routine:
      - 5-minute mindfulness practice
      - 3-minute goal setting
      - 2-minute progress review

      Throughout the Day:
      - Micro-learning sessions
      - Progress checkpoints
      - Mindful breaks

      Evening Review:
      - Celebration of small wins
      - Adjustment planning
      - Next day preparation

      Remember: ViteButNotTooMuch is about progress, not perfection.
    `,
    date: "2024-04-14",
    relatedPosts: ["1", "3", "5"],
  },
  {
    id: "3",
    title: "ViteButNotTooMuch vs Traditional Methods: A Comparative Analysis",
    slug: "vitebutnottoomuch-vs-traditional-methods",
    summary: "Compare the innovative ViteButNotTooMuch approach with conventional personal development methods.",
    metaTitle: "ViteButNotTooMuch vs Traditional Methods | Which Works Better?",
    metaDescription: "Detailed comparison between ViteButNotTooMuch and traditional personal development approaches. Discover why balanced progress beats rapid transformation.",
    keywords: ["ViteButNotTooMuch comparison", "traditional methods", "personal development comparison"],
    content: `
      Understanding the key differences between ViteButNotTooMuch and traditional approaches to personal growth.

      ViteButNotTooMuch Approach:
      ✓ Sustainable progress
      ✓ Lower burnout risk
      ✓ Higher completion rate
      ✓ Better long-term results

      Traditional Methods:
      × Intense pressure
      × Higher dropout rates
      × Burnout risk
      × Temporary results

      Scientific Evidence:
      Studies show that gradual, consistent progress (ViteButNotTooMuch method) leads to more sustainable results than intensive programs.
    `,
    date: "2024-04-13",
    relatedPosts: ["1", "2", "4"],
  },
  {
    id: "4",
    title: "ViteButNotTooMuch Success Stories: Real People, Real Results",
    slug: "vitebutnottoomuch-success-stories",
    summary: "Inspiring success stories from people who have transformed their lives using the ViteButNotTooMuch method.",
    metaTitle: "ViteButNotTooMuch Success Stories | Real Transformations",
    metaDescription: "Read inspiring success stories from people who achieved remarkable results with ViteButNotTooMuch. Real testimonials and proven results.",
    keywords: ["ViteButNotTooMuch success", "testimonials", "real results", "transformation stories"],
    content: `
      Real stories from people who have experienced the power of ViteButNotTooMuch in their lives.

      Sarah's Journey:
      "Using ViteButNotTooMuch, I finally broke free from the cycle of burnout and found sustainable progress."

      Mike's Transformation:
      "The ViteButNotTooMuch approach helped me build lasting habits without overwhelming myself."

      Team Success:
      How a startup implemented ViteButNotTooMuch principles to improve productivity while reducing stress.
    `,
    date: "2024-04-12",
    relatedPosts: ["1", "3", "5"],
  },
  {
    id: "5",
    title: "The Science Behind ViteButNotTooMuch: Research and Evidence",
    slug: "science-behind-vitebutnottoomuch",
    summary: "Explore the scientific principles and research supporting the ViteButNotTooMuch methodology.",
    metaTitle: "ViteButNotTooMuch Scientific Research | Evidence-Based Method",
    metaDescription: "Discover the scientific research and evidence supporting ViteButNotTooMuch methodology. Learn why this approach is backed by science.",
    keywords: ["ViteButNotTooMuch science", "research evidence", "scientific method", "psychology"],
    content: `
      Diving deep into the scientific foundations of ViteButNotTooMuch and why it works.

      Research Areas:
      1. Behavioral Psychology
      2. Habit Formation
      3. Neuroplasticity
      4. Performance Psychology

      Key Findings:
      - Gradual progress activates sustainable neural pathways
      - Consistent small wins boost motivation
      - Balanced approach reduces cortisol levels
      - Measured progress enhances long-term retention

      Scientific Validation:
      Multiple studies confirm the effectiveness of the ViteButNotTooMuch approach.
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

// Nouvelle fonction pour obtenir les articles liés
export function getRelatedPosts(postId) {
  const post = blogPosts.find((p) => p.id === postId);
  if (!post) return [];
  return blogPosts.filter((p) => post.relatedPosts.includes(p.id));
}

// Nouvelle fonction pour obtenir les articles par mot-clé
export function getPostsByKeyword(keyword) {
  return blogPosts.filter((post) => 
    post.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
  );
}

// Nouvelle fonction pour obtenir les articles les plus récents
export function getRecentPosts(limit = 3) {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}