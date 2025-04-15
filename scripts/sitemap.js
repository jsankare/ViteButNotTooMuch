import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { blogPosts } from '../src/lib/blog.js';
// import { challenges } from '../src/lib/challenges.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateSitemap() {
  const baseUrl = 'https://vite-but-not-too-much.vercel.app';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/browse',
    '/blog',
  ];

  // Get all blog posts
  const blogUrls = blogPosts.map(post => `/blog/${post.slug}`);

  // Get all challenges
  // const challengeUrls = challenges.map(challenge => `/challenges/${challenge.id}`);

  // Combine all URLs
  const allUrls = [...staticPages, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
      .map(url => {
        return `
            <url>
              <loc>${baseUrl}${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${url === '' ? 'daily' : 'weekly'}</changefreq>
              <priority>${url === '' ? '1.0' : '0.8'}</priority>
            </url>
          `
      })
      .join('')}
    </urlset>
  `;

  // Ensure the public directory exists
  const publicDir = join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();