import type { Lang } from '../../i18n/ui';
import type { MealRecipe } from '../recipes';
import type { LocalizedRecipesMap } from './types';
import { esRecipes } from './es';
import { frRecipes } from './fr';
import { deRecipes } from './de';
import { itRecipes } from './it';
import { ptRecipes } from './pt';
import { jaRecipes } from './ja';
import { koRecipes } from './ko';

export * from './types';

export const RECIPES_TRANSLATIONS: Partial<Record<Lang, LocalizedRecipesMap>> = {
  es: esRecipes,
  fr: frRecipes,
  de: deRecipes,
  it: itRecipes,
  pt: ptRecipes,
  ja: jaRecipes,
  ko: koRecipes,
};

export function getLocalizedRecipe(recipe: MealRecipe, lang: Lang): MealRecipe {
  if (!recipe || lang === 'en') return recipe;
  const translations = RECIPES_TRANSLATIONS[lang];
  if (!translations) return recipe;
  const loc = translations[recipe.id];
  if (!loc) return recipe;

  return {
    ...recipe,
    name: loc.name || recipe.name,
    headline: loc.headline || recipe.headline,
    description: loc.description || recipe.description,
    ingredients: recipe.ingredients.map((ing, idx) => ({
      ...ing,
      name: loc.ingredients[idx] || ing.name,
    })),
    preparationNotes: loc.preparationNotes && loc.preparationNotes.length > 0
      ? loc.preparationNotes
      : recipe.preparationNotes,
  };
}
