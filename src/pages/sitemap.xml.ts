import type { APIRoute } from 'astro';
import { FAQS_DATA } from '../data/faqs';
import { CANINE_BREEDS } from '../data/breeds';
import { languages, defaultLang, type Lang } from '../i18n/ui';
import { getAbsoluteLocalizedUrl } from '../i18n/utils';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://dogfoodplanner.com';
  const now = new Date().toISOString().split('T')[0];
  const allLangs = Object.keys(languages) as Lang[];

  const staticRoutes = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/best-dog-food', priority: '0.9', changefreq: 'weekly' },
    { url: '/feeding-calculator', priority: '0.9', changefreq: 'weekly' },
    { url: '/faq', priority: '0.9', changefreq: 'weekly' },
    { url: '/dog-food-recipes', priority: '0.8', changefreq: 'weekly' },
    { url: '/dog-food-allergies', priority: '0.8', changefreq: 'weekly' },
    { url: '/toxic-foods', priority: '0.8', changefreq: 'weekly' },
    { url: '/dog-food-brands', priority: '0.8', changefreq: 'weekly' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.4', changefreq: 'yearly' },
    { url: '/terms', priority: '0.4', changefreq: 'yearly' },
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

  const baseRoutes = [...staticRoutes, ...faqRoutes, ...breedRoutes];

  // Generate XML entries for every route in every supported language with bidirectional xhtml:link hreflang tags
  const urlEntries: string[] = [];

  for (const route of baseRoutes) {
    for (const lang of allLangs) {
      const locUrl = getAbsoluteLocalizedUrl(route.url, lang, baseUrl);
      const xDefaultUrl = getAbsoluteLocalizedUrl(route.url, defaultLang, baseUrl);
      
      const hreflangTags = [
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />`,
        ...allLangs.map(
          l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${getAbsoluteLocalizedUrl(route.url, l, baseUrl)}" />`
        )
      ].join('\n');

      urlEntries.push(`  <url>
    <loc>${locUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${lang === defaultLang ? route.priority : (parseFloat(route.priority) * 0.9).toFixed(1)}</priority>
${hreflangTags}
  </url>`);
    }
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
