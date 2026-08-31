import type { APIRoute } from 'astro';
import { FAQS_DATA } from '../data/faqs';
import { CANINE_BREEDS } from '../data/breeds';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://dogfoodplanner.com';
  const now = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/best-dog-food', priority: '0.9', changefreq: 'weekly' },
    { url: '/feeding-calculator', priority: '0.9', changefreq: 'weekly' },
    { url: '/faq', priority: '0.9', changefreq: 'weekly' },
    { url: '/dog-food-recipes', priority: '0.8', changefreq: 'weekly' },
    { url: '/dog-food-allergies', priority: '0.8', changefreq: 'weekly' },
    { url: '/toxic-foods', priority: '0.8', changefreq: 'weekly' },
    { url: '/dog-food-brands', priority: '0.8', changefreq: 'weekly' },
  ];

  const faqRoutes = FAQS_DATA.map(faq => ({
    url: `/faq/${faq.slug}`,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  const breedRoutes = CANINE_BREEDS
    .filter(b => !b.name.startsWith('Unknown'))
    .map(breed => {
      const slug = breed.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return {
        url: `/breeds/${slug}`,
        priority: '0.7',
        changefreq: 'monthly'
      };
    });

  const allRoutes = [...staticRoutes, ...faqRoutes, ...breedRoutes];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
