import type { Lang } from '../../i18n/ui';
import type { BrandReview, BrandReviewSlug } from './types';
import { BRAND_REVIEW_SLUGS } from './types';
import { enBrandReviews } from './en';
import { esBrandReviews } from './es';
import { jaBrandReviews } from './ja';
import { frBrandReviews } from './fr';
import { deBrandReviews } from './de';
import { ptBrandReviews } from './pt';
import { koBrandReviews } from './ko';
import { itBrandReviews } from './it';

export * from './types';
export * from './pageI18n';
export {
  enBrandReviews,
  esBrandReviews,
  jaBrandReviews,
  frBrandReviews,
  deBrandReviews,
  ptBrandReviews,
  koBrandReviews,
  itBrandReviews,
};

export const BRAND_REVIEWS_MAP: Record<Lang, Record<BrandReviewSlug, BrandReview>> = {
  en: enBrandReviews,
  es: esBrandReviews,
  ja: jaBrandReviews,
  fr: frBrandReviews,
  de: deBrandReviews,
  pt: ptBrandReviews,
  ko: koBrandReviews,
  it: itBrandReviews,
};

export const BRAND_REVIEWS: Record<BrandReviewSlug, BrandReview> = enBrandReviews;

export function getBrandReviews(lang: Lang = 'en'): BrandReview[] {
  const reviews = BRAND_REVIEWS_MAP[lang] || enBrandReviews;
  return BRAND_REVIEW_SLUGS.map((slug) => reviews[slug] || enBrandReviews[slug]);
}

export function getBrandReviewBySlug(slug: string, lang: Lang = 'en'): BrandReview | undefined {
  const reviews = BRAND_REVIEWS_MAP[lang] || enBrandReviews;
  const brandSlug = slug as BrandReviewSlug;
  return reviews[brandSlug] || enBrandReviews[brandSlug];
}
