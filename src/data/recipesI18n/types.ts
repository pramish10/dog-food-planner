export interface RecipeLocalization {
  name: string;
  headline?: string;
  description: string;
  ingredients: string[]; // matching names of ingredients in order
  preparationNotes: string[];
}

export type LocalizedRecipesMap = Record<string, RecipeLocalization>;
