export const blogPosts = [
  {
    id: "1",
    title: "The Power of Small Steps",
    slug: "power-of-small-steps",
    summary: "Why taking small, consistent steps leads to bigger achievements than sporadic bursts of effort.",
    content: `
      We often underestimate the power of small, consistent actions. While big, dramatic changes might seem more appealing, it's the small steps taken daily that lead to lasting transformation.

      Here's why small steps work:
      1. They're sustainable
      2. They build momentum
      3. They create lasting habits
      4. They reduce overwhelm
      
      Remember: Progress isn't always visible day-to-day, but small actions compound over time to create remarkable results.
    `,
    date: "2024-02-15",
  },
  {
    id: "2",
    title: "Finding Balance in Personal Growth",
    slug: "finding-balance-personal-growth",
    summary: "How to maintain momentum in self-improvement without burning out.",
    content: `
      The pursuit of personal growth can sometimes feel like walking a tightrope. Push too hard, and you risk burnout. Move too slowly, and you might lose motivation.

      Key principles for balanced growth:
      1. Set realistic expectations
      2. Celebrate small wins
      3. Listen to your body and mind
      4. Adjust your pace when needed
      
      The goal isn't to be perfect, but to be consistently better than yesterday.
    `,
    date: "2024-02-10",
  },
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}