import type { Lang } from '../../i18n/ui';
import type { LocalizedRecipesMap } from './types';
import { esRecipes } from './es';
import { jaRecipes } from './ja';
import { frRecipes } from './fr';
import { deRecipes } from './de';
import { ptRecipes } from './pt';
import { koRecipes } from './ko';
import { itRecipes } from './it';

export * from './types';

export const HOMEMADE_RECIPES_TRANSLATIONS: Partial<Record<Lang, LocalizedRecipesMap>> = {
  es: esRecipes,
  ja: jaRecipes,
  fr: frRecipes,
  de: deRecipes,
  pt: ptRecipes,
  ko: koRecipes,
  it: itRecipes,
};
