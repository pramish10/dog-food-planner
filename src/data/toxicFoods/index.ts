import type { Lang } from '../../i18n/ui';
import type { ToxicFoodItem } from './types';
import { toxicFoodsEn } from './en';
import { toxicFoodsEs } from './es';
import { toxicFoodsJa } from './ja';
import { toxicFoodsFr } from './fr';
import { toxicFoodsDe } from './de';
import { toxicFoodsPt } from './pt';
import { toxicFoodsKo } from './ko';
import { toxicFoodsIt } from './it';

export * from './types';
export * from './pageI18n';
export {
  toxicFoodsEn,
  toxicFoodsEs,
  toxicFoodsJa,
  toxicFoodsFr,
  toxicFoodsDe,
  toxicFoodsPt,
  toxicFoodsKo,
  toxicFoodsIt,
};

// Backward-compatible alias
export const TOXIC_FOODS_DATA_EN = toxicFoodsEn;

export const TOXIC_FOODS_MAP: Record<Lang, ToxicFoodItem[]> = {
  en: toxicFoodsEn,
  es: toxicFoodsEs,
  ja: toxicFoodsJa,
  fr: toxicFoodsFr,
  de: toxicFoodsDe,
  pt: toxicFoodsPt,
  ko: toxicFoodsKo,
  it: toxicFoodsIt,
};

export function getToxicFoods(lang: Lang = 'en'): ToxicFoodItem[] {
  return TOXIC_FOODS_MAP[lang] || toxicFoodsEn;
}

export function getToxicFoodBySlug(slug: string, lang: Lang = 'en'): ToxicFoodItem | undefined {
  const items = getToxicFoods(lang);
  return items.find((item) => item.slug === slug) || toxicFoodsEn.find((item) => item.slug === slug);
}
