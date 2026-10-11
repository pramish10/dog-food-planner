export const TOXIC_FOOD_SLUGS = [
  'xylitol',
  'chocolate-and-cocoa',
  'grapes-and-raisins',
  'onions-and-garlic',
  'macadamia-nuts',
  'cooked-bones',
  'bacon-grease-fat-trimmings',
  'pumpkin',
  'wild-alaskan-salmon',
  'wild-blueberries',
  'raw-green-tripe',
  'bone-broth',
  'zucchini',
  'raw-goat-milk-kefir',
] as const;

export type ToxicFoodSlug = (typeof TOXIC_FOOD_SLUGS)[number];

export interface TimelinePhase {
  phase: string;
  symptoms: string[];
}

export interface EmergencyStep {
  stepNumber: number;
  title: string;
  desc: string;
  isUrgent?: boolean;
}

export interface VeterinaryTreatment {
  name: string;
  purpose: string;
}

export interface SafeAlternative {
  name: string;
  why: string;
}

export interface ToxicFoodFaq {
  q: string;
  a: string;
}

export interface VitalStat {
  label: string;
  value: string;
  tone?: 'danger' | 'warning' | 'safe' | 'neutral';
}

export interface RecommendedProduct {
  name: string;
  url: string;
  badge: string;
  whyRecommended: string;
}

export interface ToxicFoodItem {
  slug: ToxicFoodSlug;
  name: string;
  scientificName: string;
  status: 'DANGEROUS_TOXIC' | 'FEED_WITH_CAUTION' | 'SAFE_AND_BENEFICIAL';
  category: string;
  badgeLabel: string;
  riskSeverity: string;
  primaryCompound: string;
  targetOrgans: string[];
  toxicThresholdOrServing: string;
  onsetWindow: string;
  summary: string;
  narrativeOverview: string[];
  biochemicalMechanism: string;
  vitalStats: VitalStat[];
  timeline: TimelinePhase[];
  emergencyProtocol: EmergencyStep[];
  vetTreatments: VeterinaryTreatment[];
  safeAlternatives: SafeAlternative[];
  preventionRules: string[];
  faqs: ToxicFoodFaq[];
  recommendedProduct?: RecommendedProduct;
}

export interface ToxicFoodsPageI18n {
  badgePrefix: string;
  reviewedBy: string;
  quickOverviewTitle: string;
  biochemicalTitle: string;
  timelineTitle: string;
  emergencyTitle: string;
  vetCareTitle: string;
  alternativesTitle: string;
  preventionTitle: string;
  faqTitle: string;
  backToList: string;
  prevFood: string;
  nextFood: string;
  emergencyHotlineTitle: string;
  emergencyHotlineDesc: string;
  disclaimer: string;
  vitalStatsTitle: string;
  recommendedProductTitle: string;
  viewOnAmazon: string;
  // Extended labels for comprehensive localization
  clinicalDesignation: string;
  statusAndSeverity: string;
  activeCompound: string;
  affectedOrgans: string;
  clinicalAnalysisTitle: string;
  phasePrefix: string;
  stepPrefix: string;
  clinicalNoticeTitle: string;
  callAspca: string;
  callPetPoison: string;
  metaToxicSuffix: string;
  metaCautionSuffix: string;
  metaSafeSuffix: string;
}
