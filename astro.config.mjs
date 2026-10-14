// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://dogfoodplanner.com';
const LOCALE_PREFIX = /^\/(es|ja|fr|de|pt|ko|it)(?=\/|$)/;

const BLOG_POST_DATES = {
  'dry-vs-wet-dog-food': '2026-10-13T00:00:00.000Z',
  'the-science-of-canine-macros': '2026-10-11T00:00:00.000Z',
  'how-to-transition-dog-to-fresh-food': '2026-10-08T00:00:00.000Z',
  'top-vet-approved-superfoods-for-dogs': '2026-10-05T00:00:00.000Z',
  'puppy-feeding-roadmap-growth-curves': '2026-10-02T00:00:00.000Z',
  'senior-dog-nutrition-diet-adjustments': '2026-09-29T00:00:00.000Z',
  'understanding-dog-food-recalls': '2026-09-26T00:00:00.000Z',
  'canine-gut-health-and-allergies': '2026-09-23T00:00:00.000Z',
  'rotational-feeding-benefits-guide': '2026-09-20T00:00:00.000Z',
};

/**
 * @param {string} page
 */
function sitemapFilter(page) {
  const path = new URL(page).pathname.replace(/\/$/, '') || '/';
  return path !== '/print' && path !== '/404' && path !== '/500';
}

/**
 * @param {string} url
 */
function withoutTrailingSlash(url) {
  const parsed = new URL(url);
  if (parsed.pathname !== '/') {
    parsed.pathname = parsed.pathname.replace(/\/$/, '') || '/';
  }
  return parsed.href;
}

/**
 * @param {string} url
 */
function withoutLocalePrefix(url) {
  const parsed = new URL(url);
  parsed.pathname = parsed.pathname.replace(LOCALE_PREFIX, '') || '/';
  return withoutTrailingSlash(parsed.href);
}

/**
 * @param {import('@astrojs/sitemap').SitemapItem} item
 */
function serializeSitemapItem(item) {
  item.url = withoutTrailingSlash(item.url);
  const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
  const unprefixed = path.replace(LOCALE_PREFIX, '') || '/';
  const isDefaultLocale = path === unprefixed;
  const defaultUrl = withoutLocalePrefix(item.url);

  if (item.links?.length) {
    item.links = [
      { lang: 'x-default', url: defaultUrl },
      ...item.links.map((link) => ({ ...link, url: withoutTrailingSlash(link.url) })),
    ];
  }

  if (unprefixed === '/') {
    item.priority = 1.0;
    item.changefreq = ChangeFreqEnum.DAILY;
  } else if (['/best-dog-food', '/feeding-calculator', '/faq', '/blog'].includes(unprefixed)) {
    item.priority = 0.9;
    item.changefreq = ChangeFreqEnum.WEEKLY;
  } else if (
    ['/dog-food-recipes', '/dog-food-allergies', '/toxic-foods', '/dog-food-brands'].includes(
      unprefixed,
    )
  ) {
    item.priority = 0.8;
    item.changefreq = ChangeFreqEnum.WEEKLY;
  } else if (
    unprefixed.startsWith('/faq/') ||
    unprefixed.startsWith('/blog/') ||
    unprefixed.startsWith('/breeds/') ||
    unprefixed.startsWith('/best-dog-food/')
  ) {
    item.priority = 0.7;
    item.changefreq = ChangeFreqEnum.MONTHLY;
  } else if (['/about', '/contact'].includes(unprefixed)) {
    item.priority = 0.6;
    item.changefreq = ChangeFreqEnum.MONTHLY;
  } else if (['/privacy-policy', '/terms'].includes(unprefixed)) {
    item.priority = 0.4;
    item.changefreq = ChangeFreqEnum.YEARLY;
  }

  if (!isDefaultLocale && typeof item.priority === 'number') {
    item.priority = Number((item.priority * 0.9).toFixed(1));
  }

  const blogMatch = unprefixed.match(/^\/blog\/([^/]+)$/);
  if (blogMatch && BLOG_POST_DATES[blogMatch[1]]) {
    item.lastmod = BLOG_POST_DATES[blogMatch[1]];
  } else {
    item.lastmod = new Date().toISOString();
  }
  return item;
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ja: 'ja',
          fr: 'fr',
          de: 'de',
          pt: 'pt',
          ko: 'ko',
          it: 'it',
        },
      },
      filter: sitemapFilter,
      serialize: serializeSitemapItem,
      namespaces: {
        news: false,
        image: false,
        video: false,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
