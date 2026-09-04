// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://dogfoodplanner.com';
const LOCALE_PREFIX = /^\/(es|ja|fr|de|pt|ko|it)(?=\/|$)/;

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
  } else if (['/best-dog-food', '/feeding-calculator', '/faq'].includes(unprefixed)) {
    item.priority = 0.9;
    item.changefreq = ChangeFreqEnum.WEEKLY;
  } else if (
    ['/dog-food-recipes', '/dog-food-allergies', '/toxic-foods', '/dog-food-brands'].includes(
      unprefixed,
    )
  ) {
    item.priority = 0.8;
    item.changefreq = ChangeFreqEnum.WEEKLY;
  } else if (unprefixed.startsWith('/faq/') || unprefixed.startsWith('/breeds/')) {
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

  item.lastmod = new Date().toISOString();
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
