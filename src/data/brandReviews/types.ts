import type { Lang } from '../../i18n/ui';

export const BRAND_REVIEW_SLUGS = [
  'blue-buffalo',
  'rachael-ray-nutrish',
  'pure-balance',
  'ollie',
  'open-farm',
] as const;

export type BrandReviewSlug = (typeof BRAND_REVIEW_SLUGS)[number];

export interface BrandReview {
  slug: BrandReviewSlug;
  name: string;
  grade: string;
  score: string;
  badge: string;
  category: string;
  countryOfOrigin: string;
  parentCompany: string;
  manufacturingFacilities: string;
  recallRecord: {
    status: 'CLEAN' | 'PAST_RECALLS' | 'MONITORED';
    label: string;
    details: string;
    history: string[];
  };
  macroProfile: {
    protein: string;
    fat: string;
    carbohydrates: string;
    fiber: string;
    moisture: string;
  };
  pros: string[];
  cons: string[];
  overview: string;
  deepDive: string[];
  ingredientPillars: Array<{
    title: string;
    score: string;
    explanation: string;
  }>;
  keyProductLines: Array<{
    name: string;
    type: string;
    description: string;
    targetDogs: string;
  }>;
  veterinaryVerdict: string;
  feedingRecommendation: string;
  affiliateProductKeys: string[];
}

export interface BrandReviewsPageI18n {
  eyebrow: string;
  reviewedBy: string;
  scoreLabel: string;
  gradeLabel: string;
  companyInfoTitle: string;
  parentCompany: string;
  origin: string;
  facilities: string;
  category: string;
  strengthsTitle: string;
  tradeoffsTitle: string;
  clinicalAuditTitle: string;
  pillarsTitle: string;
  pillarsSubtitle: string;
  macroTitle: string;
  macroSubtitle: string;
  proteinLabel: string;
  fatLabel: string;
  carbsLabel: string;
  fiberLabel: string;
  moistureLabel: string;
  recallsTitle: string;
  recallsSubtitle: string;
  regulatoryRecordTitle: string;
  productLinesTitle: string;
  productLinesSubtitle: string;
  targetDogsLabel: string;
  verdictTitle: string;
  verdictBadge: string;
  feedingTipTitle: string;
  affiliateSectionTitle: string;
  affiliateSectionSubtitle: string;
  affiliateBadge: string;
  officialProductNote: string;
  noAffiliateTitle: string;
  noAffiliateNotice: string;
  buyOnAmazon: string;
  buyNow: string;
  backToBrands: string;
  readMoreBtn: string;
  prevBrand: string;
  nextBrand: string;
  calculatorCtaTitle: string;
  calculatorCtaDesc: string;
  calculatorCtaBtn: string;
}
