import type { HomemadeRecipeSlug } from '../homemadeRecipes';

export interface RecipeTranslation {
  tag: string;
  title: string;
  heroTitle: string;
  shortDesc: string;
  summary: string;
  badge: string;
  prepTime: string;
  cookTime: string;
  yieldAmount: string;
  lifeStage: string;
  dietStyle: string;
  macroProfile?: {
    caPhosphorusRatio?: string;
  };
  keyHighlights: string[];
  ingredients: Array<{
    name: string;
    batchAmount?: string;
    category: string;
    role: string;
    clinicalBenefit: string;
  }>;
  executiveRationale: string;
  clinicalDeepDives: Array<{
    title: string;
    description: string;
    keyPoints: string[];
  }>;
  prepProtocol: Array<{
    step: number;
    title: string;
    instruction: string;
    criticalTip?: string;
  }>;
  portionReference: Array<{
    dogWeight: string;
    dailyGrams?: string;
    dailyKcal?: string;
    mealsPerDay: string;
    servingNotes: string;
  }>;
  storageGuidelines: Array<{
    method: string;
    duration: string;
    instructions: string;
  }>;
  safetyAndPrecautions: {
    calciumRule: string;
    hygieneRule: string;
    contraindications: string[];
    transitionSchedule: string[];
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export type LocalizedRecipesMap = Record<HomemadeRecipeSlug, RecipeTranslation>;
