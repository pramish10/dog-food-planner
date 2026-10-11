import type { Lang } from '../../i18n/ui';

export const RECIPE_BLUEPRINT_SLUGS = [
  'turkey-pumpkin-maintenance',
  'beef-sweet-potato-vitality',
  'salmon-quinoa-joint-coat',
  'lamb-cranberry-gentle-gut',
] as const;

export type RecipeBlueprintSlug = (typeof RECIPE_BLUEPRINT_SLUGS)[number];

export interface BlueprintIngredient {
  name: string;
  percentage: number;
  category: string;
  role: string;
  clinicalBenefit: string;
  color: string;
  affiliateKey?: 'eggshellPowder' | 'salmonOil' | 'pumpkinPuree' | 'quinoa' | 'kelp';
  affiliateUrl?: string;
}

export interface MacroProfile {
  proteinDm: string;
  fatDm: string;
  carbsDm: string;
  moisture: string;
  kcalPerKg: string;
  caPhosphorusRatio: string;
}

export interface PortionReferenceRow {
  dogWeight: string;
  dailyKcal: string;
  dailyGramsTotal: string;
  mainProtein: string;
  organMeat: string;
  produceAndCarbs: string;
  supplements: string;
}

export interface RecipeBlueprint {
  slug: RecipeBlueprintSlug;
  name: string;
  shortDesc: string;
  badge: string;
  targetAudience: string;
  colorTheme: string;
  macroProfile: MacroProfile;
  ingredients: BlueprintIngredient[];
  executiveSummary: string;
  clinicalRationale: {
    title: string;
    description: string;
    points: string[];
  }[];
  prepProtocol: {
    step: number;
    title: string;
    instruction: string;
    criticalTip?: string;
  }[];
  storageGuidelines: {
    method: string;
    duration: string;
    instructions: string;
  }[];
  portionReference: PortionReferenceRow[];
  safetyAndPrecautions: {
    contraindications: string[];
    transitionSteps: string[];
    calciumRule: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface RecipeBlueprintSectionI18n {
  title: string;
  intro: string;
  readMoreBtn: string;
  footerText: string;
  footerLink: string;
}

export interface VerifiedSupplementCard {
  title: string;
  desc: string;
  url: string;
  btnLabel?: string;
}

export interface RecipeBlueprintPageI18n {
  badge: string;
  reviewedBy: string;
  clinicalOverview: string;
  formulaTitle: string;
  formulaSubtitle: string;
  ingredientCol: string;
  pctCol: string;
  categoryCol: string;
  roleCol: string;
  clinicalTargetBenefit: string;
  macroTitle: string;
  labBasisNote: string;
  proteinLabel: string;
  fatLabel: string;
  carbsLabel: string;
  moistureLabel: string;
  caRatioLabel: string;
  energyDensityLabel: string;
  clinicalTitle: string;
  clinicalSubtitle: string;
  prepTitle: string;
  prepSubtitle: string;
  criticalPrefix: string;
  storageTitle: string;
  portionTitle: string;
  portionSubtitle: string;
  portionBadge: string;
  weightTiersLabel: string;
  dogWeightCol: string;
  dailyGramsCol: string;
  dailyKcalCol: string;
  proteinCol: string;
  organCol: string;
  produceCol: string;
  supplementsCol: string;
  supplementsTitle: string;
  supplementsSubtitle: string;
  supplementsList: VerifiedSupplementCard[];
  safetyTitle: string;
  contraindicationsTitle: string;
  transitionTitle: string;
  calculatorCtaTitle: string;
  calculatorCtaDesc: string;
  calculatorCtaBtn: string;
  prevBlueprint: string;
  nextBlueprint: string;
  backLink: string;
  titleSuffix: string;
  faqTitle: string;
}
