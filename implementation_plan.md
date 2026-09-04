# Implementation Plan: Comprehensive Multi-Language (i18n) Support & Hreflang SEO

Implement end-to-end multi-language routing and SEO optimization based on the official [Astro i18n Recipe](https://docs.astro.build/en/recipes/i18n/) to enable high-ranking search visibility across international keywords in 7 target languages:
1. **Español** (`es`)
2. **日本語** (`ja`)
3. **Français** (`fr`)
4. **Deutsch** (`de`)
5. **Português** (`pt`)
6. **한국어** (`ko`)
7. **Italiano** (`it`)
(with **English** `en` as default root locale).

## User Review Required

> [!NOTE]
> All 8 language configurations (ISO codes: `en`, `es`, `ja`, `fr`, `de`, `pt`, `ko`, `it`) will be fully wired into `astro.config.mjs`, the Layout's `<head>` `<link rel="alternate" hreflang="..." />` markup, the interactive language picker, and the dynamic `sitemap.xml` with Google-standard `xhtml:link` localized entries.

> [!IMPORTANT]
> To ensure search engines never encounter broken hreflang return tags (404 errors), complete localized page routes will be provided for all website sections:
> - Home & Calculator Landing Pages
> - Pillar Guides (`best-dog-food`, `dog-food-recipes`, `toxic-foods`, `dog-food-brands`, `dog-food-allergies`, `feeding-calculator`)
> - Knowledge Base & FAQ Pages (`faq`, `faq/[slug]`)
> - Canine Breed Nutrition Guides (`breeds/[breed]`)
> - Company Pages (`about`, `contact`, `privacy-policy`, `terms`)

---

## Proposed Changes

### 1. Internationalization Utilities & Metadata (`src/i18n/`)

#### [MODIFY] [ui.ts](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/i18n/ui.ts)
- Add localized title, description, and keywords for `about`, `contact`, `privacy`, and `terms` for all 8 languages.
- Ensure high-intent local canine nutrition keywords are mapped for:
  - `es`: "comida para perros", "mejor comida para perros", "dieta barf", "pienso natural"
  - `ja`: "ドッグフード", "おすすめ ドッグフード", "給餌量 計算", "手作りドッグフード"
  - `fr`: "nourriture pour chien", "meilleures croquettes chien", "ration ménagère chien", "barf"
  - `de`: "hundefutter", "bestes hundefutter", "hundefutter rechner", "barf hund"
  - `pt`: "comida para cachorro", "melhor ração para cachorro", "alimentação natural cães"
  - `ko`: "강아지 사료", "강아지 사료 추천", "반려견 사료 계산기", "강아지 화식"
  - `it`: "cibo per cani", "miglior cibo per cani", "crocchette cane", "dieta casalinga cane"

#### [MODIFY] [utils.ts](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/i18n/utils.ts)
- Ensure root URL canonical and hreflang formatting generates clean URLs with consistent trailing slash normalization.

---

### 2. Layout & SEO Components (`src/layouts/`, `src/components/`)

#### [MODIFY] [Layout.astro](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/layouts/Layout.astro)
- Ensure all 9 hreflang tags (`x-default`, `en`, `es`, `ja`, `fr`, `de`, `pt`, `ko`, `it`) are rendered dynamically for every page path.
- Verify `html lang={lang}` and `dir={currentLocaleData.dir}` dynamically reflect the active language.
- Ensure self-referencing `canonical` URL points to the exact localized path (e.g. `https://dogfoodplanner.com/es/best-dog-food`).

#### [MODIFY] [FaqSection.astro](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/components/FaqSection.astro)
- Update internal links (`/faq` and `/faq/${slug}`) to use `translatePath(...)` so visitors stay within their chosen language when browsing FAQs.

---

### 3. Localized Route Structure (`src/pages/[lang]/`)

#### [NEW] [src/pages/[lang]/faq/index.astro](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/pages/[lang]/faq/index.astro)
- Localized FAQ Directory Hub for `es`, `ja`, `fr`, `de`, `pt`, `ko`, `it`.

#### [NEW] [src/pages/[lang]/faq/[slug].astro](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/pages/[lang]/faq/[slug].astro)
- Localized dynamic routes for each FAQ question in all 7 target languages with valid hreflang return tags.

#### [NEW] [src/pages/[lang]/breeds/[breed].astro](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/pages/[lang]/breeds/[breed].astro)
- Localized canine breed nutrition guides with localized title templates (e.g. "Mejor Comida para Golden Retriever 2026").

#### [NEW] [src/pages/[lang]/about.astro](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/pages/[lang]/about.astro)
- Localized About Us page with translated metadata.

#### [NEW] [src/pages/[lang]/contact.astro](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/pages/[lang]/contact.astro)
- Localized Contact page with translated metadata.

#### [NEW] [src/pages/[lang]/privacy-policy.astro](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/pages/[lang]/privacy-policy.astro)
- Localized Privacy Policy page with translated metadata.

#### [NEW] [src/pages/[lang]/terms.astro](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/pages/[lang]/terms.astro)
- Localized Terms of Service page with translated metadata.

---

### 4. Search Engine XML Sitemap (`src/pages/sitemap.xml.ts`)

#### [MODIFY] [sitemap.xml.ts](file:///c:/Users/prami/OneDrive/Desktop/Web%20Development/Portfolio%203/dog%20food%20planner/src/pages/sitemap.xml.ts)
- Transform `sitemap.xml` to generate full international URLs for all 8 languages with `<xhtml:link rel="alternate" hreflang="..." href="..." />` tags on every URL entry.
- Ensure all static routes, FAQ routes, and breed routes are indexed with their localized equivalents.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify all static routes compile cleanly without any missing paths or build errors.
- Inspect the generated HTML in `dist/` to verify:
  - `<link rel="alternate" hreflang="..." />` tags match across all 8 languages + `x-default`.
  - `<link rel="canonical" ...>` points to the language's specific URL.
  - `<html lang="...">` tag has the correct language code (`es`, `ja`, `fr`, `de`, `pt`, `ko`, `it`, `en`).
- Inspect the generated `dist/sitemap.xml` to verify standard XML format with `xmlns:xhtml="http://www.w3.org/1999/xhtml"` and valid hreflang entries.

### Manual Verification
- Start the dev server and test language switching via the Navbar language picker and Footer language links.
- Test that clicking FAQ links and Breed links keeps the user in their selected language.
