import { getAllPosts } from '../src/lib/blog.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://vite-but-not-too-much.vercel.app';

// Define your static routes
const staticRoutes = [
    '/',
    '/about',
    '/browse',
    '/blog'
];

async function generateSitemap() {
    try {
        // Get all blog posts
        const posts = getAllPosts();

        // Create sitemap content
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>monthly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
  ${posts.map(post => `
    <url>
      <loc>${baseUrl}/blog/${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
    </url>
  `).join('')}
</urlset>`;

        // Write sitemap to public directory
        fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
        console.log('Sitemap generated successfully!');
    } catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();