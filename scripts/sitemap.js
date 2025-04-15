// scripts/sitemap.ts
import fs from 'fs'
import { getAllPosts } from '../src/lib/blog'
import { getAllChallenges } from '../src/lib/challenges'

async function generateSitemap() {
  const baseUrl = 'https://vite-but-not-too-much.vercel.app'
  
  // Pages statiques
  const staticPages = [
    '',
    '/about',
    '/browse',
    '/blog',
  ]

  // Récupérer tous les articles de blog
  const blogPosts = await getAllPosts()
  const blogUrls = blogPosts.map(post => `/blog/${post.slug}`)

  // Récupérer tous les défis
  const challenges = await getAllChallenges()
  const challengeUrls = challenges.map(challenge => `/challenges/${challenge.slug}`)

  // Combiner toutes les URLs
  const allUrls = [...staticPages, ...blogUrls, ...challengeUrls]

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
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
  console.log('Sitemap generated successfully!')
}

generateSitemap()