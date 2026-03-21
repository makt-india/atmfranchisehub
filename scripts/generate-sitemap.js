import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://atmfranchisehub.com';

// Define static routes
const staticRoutes = [
  '/',
  '/atm-franchise-in-india',
  '/about',
  '/contact',
  '/blog',
  '/partners'
];

// Helper to extract slugs using Regex to avoid JSX syntax errors in Node
function extractSlugs(filePath, regexPattern) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = [...content.matchAll(regexPattern)];
    return matches.map(m => m[1]);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
}

// 1. Extract blog slugs
const blogDataPath = path.resolve(__dirname, '../src/blog-data.js');
// Regex looks for: slug: "some-string" or slug: 'some-string'
const blogSlugs = extractSlugs(blogDataPath, /slug:\s*['"]([^'"]+)['"]/g);

// 2. Extract partner slugs
const appDataPath = path.resolve(__dirname, '../src/data/appData.jsx');
// Regex looks for: page: "some-string" or page: 'some-string' in PARTNERS array
const partnerSlugs = extractSlugs(appDataPath, /page:\s*['"]([^'"]+)['"]/g);

// Combine all routes
const allRoutes = [
  ...staticRoutes.map(route => ({ url: route, priority: route === '/' ? 1.0 : 0.8 })),
  ...blogSlugs.map(slug => ({ url: `/blog/${slug}`, priority: 0.7 })),
  ...partnerSlugs.map(slug => ({ url: `/partners/${slug}`, priority: 0.7 }))
];

// Generate sitemap XML
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.url === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write sitemap.xml to public folder so Vite serves it
const distSitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(distSitemapPath, sitemapContent);
console.log(`✅ Sitemap created at ${distSitemapPath} with ${allRoutes.length} urls.`);

// Generate robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

const distRobotsPath = path.resolve(__dirname, '../public/robots.txt');
fs.writeFileSync(distRobotsPath, robotsContent);
console.log(`✅ robots.txt created at ${distRobotsPath}.`);
