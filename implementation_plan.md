# Comprehensive Multi-Language Translation for DogFoodPlanner

Translate 100% of website content across all 8 supported languages:
1. **English (`en`)** (Default)
2. **Spanish (`es`)**
3. **Japanese (`ja`)**
4. **French (`fr`)**
5. **German (`de`)**
6. **Portuguese (`pt`)**
7. **Korean (`ko`)**
8. **Italian (`it`)**

This covers every single component and page: Navigation, Footer, Hero, 5-Step Nutrition Planner Quiz, Plan Results, Ingredient Safety Checker, 45 Veterinary FAQs & Single FAQ Guides, Breed Feeding Guides, and all Pillar Content Pages (`best-dog-food`, `dog-food-recipes`, `toxic-foods`, `dog-food-brands`, `dog-food-allergies`, `feeding-calculator`, `about`, `contact`, `privacy-policy`, `terms`).

---

## Proposed Changes

### Component Layer (Localization of Shared Elements)
- `PlannerQuiz.astro`: Wire up to `PLANNER_TRANSLATIONS` for all steps, forms, tooltips, validation messages.
- `PlanResults.astro`: Wire up to `PLANNER_TRANSLATIONS` for metrics, print button, recipe cards, transition rules.
- `IngredientChecker.astro`: Wire up to localized ingredients data and localized UI labels.
- `FaqSection.astro`: Wire up to localized FAQ dataset and localized categories/search.
- `ComparisonTable.astro`: Localize comparison metrics and cell text.

### Data & Translation Layer
- `src/i18n/ingredients.ts`: Localized ingredient lookup database with names, safety status, and veterinary guidance.
- `src/i18n/faqs.ts`: Comprehensive localized FAQ dataset for all 45 FAQs across all 8 languages.
- `src/i18n/pages.ts`: Comprehensive localized translations for all pillar and company pages.

### Page Layer (Localized Routing in `src/pages/[lang]/`)
- `src/pages/[lang]/faq/index.astro` & `src/pages/[lang]/faq/[slug].astro`
- `src/pages/[lang]/breeds/[breed].astro`
- `src/pages/[lang]/about.astro`
- `src/pages/[lang]/contact.astro`
- `src/pages/[lang]/privacy-policy.astro`
- `src/pages/[lang]/terms.astro`
- `src/pages/[lang]/best-dog-food.astro`
- `src/pages/[lang]/dog-food-recipes.astro`
- `src/pages/[lang]/toxic-foods.astro`
- `src/pages/[lang]/dog-food-brands.astro`
- `src/pages/[lang]/dog-food-allergies.astro`
- `src/pages/[lang]/feeding-calculator.astro`
- `src/pages/[lang]/index.astro`

## Verification Plan
1. `npm run build` to verify all static pages compile cleanly.
2. Verify all 8 language versions render correctly without untranslated text.
