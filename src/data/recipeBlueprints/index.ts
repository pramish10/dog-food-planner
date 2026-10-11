import type { RecipeBlueprint } from './types';
import { enBlueprints } from './en';
import { esBlueprints } from './es';
import { jaBlueprints } from './ja';
import { frBlueprints } from './fr';
import { deBlueprints } from './de';
import { ptBlueprints } from './pt';
import { koBlueprints } from './ko';
import { itBlueprints } from './it';

export * from './types';
export * from './pageI18n';
export { enBlueprints, esBlueprints, jaBlueprints, frBlueprints, deBlueprints, ptBlueprints, koBlueprints, itBlueprints };

export const RECIPE_BLUEPRINTS_MAP: Record<string, RecipeBlueprint[]> = {
  en: enBlueprints,
  es: esBlueprints,
  ja: jaBlueprints,
  fr: frBlueprints,
  de: deBlueprints,
  pt: ptBlueprints,
  ko: koBlueprints,
  it: itBlueprints,
};

export function getRecipeBlueprints(lang?: string): RecipeBlueprint[] {
  if (!lang) return enBlueprints;
  return RECIPE_BLUEPRINTS_MAP[lang] || enBlueprints;
}

export function getRecipeBlueprintBySlug(slug: string, lang?: string): RecipeBlueprint | undefined {
  const list = getRecipeBlueprints(lang);
  return list.find((b) => b.slug === slug) || enBlueprints.find((b) => b.slug === slug);
}
