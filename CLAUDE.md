## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Mandatory Blog Post Protocol (Strictly Compulsory)

> [!IMPORTANT]
> **COMPULSORY RULE FOR ALL AGENTS AND DEVELOPERS:**
> Any new blog post or modification to blog content **MUST** adhere to all requirements below without exception:

### 1. Mandatory Image Requirement (Preview & Blog Content)
- Every blog post **MUST** include a dedicated, high-resolution photograph saved under `public/images/blog/<slug>.jpg` (or `.webp`).
- The `BlogPost` object in `src/data/blog.ts` **MUST** specify both `image` (e.g. `'/images/blog/<slug>.jpg'`) and `imageAlt` (descriptive accessibility text). These fields are **compulsory** in the TypeScript interface `BlogPost`.
- The **EXACT SAME IMAGE** must be rendered in two places:
  1. As the cover preview thumbnail in `src/components/BlogCard.astro`.
  2. As the prominent hero article photo at the top of the blog post body in `src/pages/[lang]/blog/[slug].astro` and `src/pages/blog/[slug].astro`.
- **NO VISIBLE CAPTIONS / ALT TEXT ON PAGE**: The `imageAlt` string must **ONLY** be passed to the HTML `alt` attribute (`<img alt={post.imageAlt} ... />`) for accessibility and SEO. Do **NOT** render `imageAlt`, camera emojis (📸), or editorial captions as visible text on the page.

### 2. Mandatory Full Translation to ALL 8 Supported Languages
- Creating or editing a blog post in English alone is **STRICTLY PROHIBITED**.
- Every single post in `src/data/blog.ts` **MUST** have a corresponding entry registered in `src/i18n/blog-translations/index.ts` with complete, fluent translations for all 7 other languages:
  - `es` (Español)
  - `ja` (日本語)
  - `fr` (Français)
  - `de` (Deutsch)
  - `pt` (Português)
  - `ko` (한국어)
  - `it` (Italiano)
- Each language entry **MUST** provide:
  - `title`: Translated headline
  - `subtitle`: Translated subheading
  - `excerpt`: Translated card summary
  - `readTime`: Translated read time (e.g. `'8 min de lectura'`, `'読了目安 8分'`, etc.)
  - `tags`: Translated tag array
  - `keyTakeaways`: Translated bullet points for the quick summary box
  - `tableOfContents`: Translated array of `{ id, title }` matching section anchors
  - `contentHtml`: Full, translated HTML article body (with headings, callouts, lists, and tables)
- This is enforced by TypeScript (`Record<string, BlogPostLocalizedRecord>`); omitting any language causes a compilation error.

### 3. Verification & Build Integrity
- Always run `npm run build` after adding or editing blog posts to ensure all localized routes (`/blog/<slug>`, `/es/blog/<slug>`, `/ja/blog/<slug>`, etc.) build with 0 errors.
