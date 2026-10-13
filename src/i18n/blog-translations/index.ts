import type { Lang } from '../ui';
import { BLOG_POSTS, type BlogPost } from '../../data/blog';
import type { BlogPostLocalizedRecord, NonEnglishLang, BlogPostTranslation } from './types';

import { scienceOfCanineMacrosTranslations } from './science-of-canine-macros';
import { transitionToFreshFoodTranslations } from './transition-to-fresh-food';
import { superfoodsForDogsTranslations } from './superfoods-for-dogs';
import { puppyFeedingRoadmapTranslations } from './puppy-feeding-roadmap';
import { seniorDogNutritionTranslations } from './senior-dog-nutrition';
import { understandingRecallsTranslations } from './understanding-recalls';
import { gutHealthAllergiesTranslations } from './gut-health-allergies';
import { rotationalFeedingTranslations } from './rotational-feeding';

export * from './types';

/**
 * MANDATORY TRANSLATION REGISTRY:
 * Every post in BLOG_POSTS must have a corresponding entry in this map,
 * and every entry MUST provide complete translations for all 7 supported international
 * languages: es, ja, fr, de, pt, ko, it.
 * 
 * TypeScript strictly enforces this type contract (Record<string, BlogPostLocalizedRecord>).
 */
export const BLOG_POST_TRANSLATIONS: Record<string, BlogPostLocalizedRecord> = {
  'the-science-of-canine-macros': scienceOfCanineMacrosTranslations,
  'how-to-transition-dog-to-fresh-food': transitionToFreshFoodTranslations,
  'top-vet-approved-superfoods-for-dogs': superfoodsForDogsTranslations,
  'puppy-feeding-roadmap-growth-curves': puppyFeedingRoadmapTranslations,
  'senior-dog-nutrition-diet-adjustments': seniorDogNutritionTranslations,
  'understanding-dog-food-recalls': understandingRecallsTranslations,
  'canine-gut-health-and-allergies': gutHealthAllergiesTranslations,
  'rotational-feeding-benefits-guide': rotationalFeedingTranslations,
};

/**
 * Retrieves a fully localized BlogPost for a given slug and language.
 * Falls back to base English values if a specific language is not configured.
 */
export function getLocalizedBlogPost(slug: string, lang: Lang): BlogPost {
  const basePost = BLOG_POSTS.find(p => p.slug === slug || p.id === slug);
  if (!basePost) {
    throw new Error(`Blog post not found for slug or id: "${slug}"`);
  }

  if (lang === 'en') {
    return basePost;
  }

  const translations = BLOG_POST_TRANSLATIONS[basePost.slug];
  if (!translations) {
    return basePost;
  }

  const localized = translations[lang as NonEnglishLang];
  if (!localized) {
    return basePost;
  }

  return {
    ...basePost,
    title: localized.title || basePost.title,
    subtitle: localized.subtitle || basePost.subtitle,
    excerpt: localized.excerpt || basePost.excerpt,
    readTime: localized.readTime || basePost.readTime,
    tags: localized.tags || basePost.tags,
    keyTakeaways: localized.keyTakeaways || basePost.keyTakeaways,
    tableOfContents: localized.tableOfContents || basePost.tableOfContents,
    contentHtml: localized.contentHtml || basePost.contentHtml,
  };
}

/**
 * Retrieves all blog posts fully translated for the specified language.
 */
export function getLocalizedBlogPosts(lang: Lang): BlogPost[] {
  return BLOG_POSTS.map(post => getLocalizedBlogPost(post.slug, lang));
}

/**
 * Retrieves related posts for a slug, localized in the target language.
 */
export function getLocalizedRelatedBlogPosts(slug: string, lang: Lang, limit: number = 3): BlogPost[] {
  const currentPost = BLOG_POSTS.find(p => p.slug === slug || p.id === slug);
  if (!currentPost) {
    return getLocalizedBlogPosts(lang).slice(0, limit);
  }

  const related = currentPost.relatedSlugs
    .map(relSlug => {
      try {
        return getLocalizedBlogPost(relSlug, lang);
      } catch {
        return undefined;
      }
    })
    .filter((post): post is BlogPost => Boolean(post));

  if (related.length < limit) {
    const allLocalized = getLocalizedBlogPosts(lang);
    const fallbacks = allLocalized.filter(p => p.slug !== slug && !related.some(r => r.slug === p.slug));
    related.push(...fallbacks.slice(0, limit - related.length));
  }

  return related.slice(0, limit);
}
