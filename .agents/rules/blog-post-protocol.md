# Compulsory Blog Post Protocol

Any agent, developer, or content author adding or editing a blog post in this project MUST strictly follow these compulsory rules.

## 1. Compulsory Editorial Image (Thumbnail Preview & Article Hero)
- Every single blog post **MUST** include an image.
- Place the image file in: `public/images/blog/<slug>.jpg` (or `.png`/`.webp`).
- Set `image` (e.g. `"/images/blog/<slug>.jpg"`) and `imageAlt` directly in `src/data/blog.ts` in the `BlogPost` entry. Both properties are **required** by the TypeScript `BlogPost` interface.
- **Image Parity Requirement**: The exact same image used on the blog card preview (`BlogCard.astro`) MUST appear as the featured hero image at the top of the individual article content page (`[slug].astro`). Never use placeholders or mismatched preview/content imagery.
- **NO VISIBLE CAPTIONS / ALT TEXT ON PAGE**: The `imageAlt` string must **ONLY** be passed to the HTML `alt` attribute (`<img alt={post.imageAlt} ... />`) for accessibility and SEO. Do **NOT** render `imageAlt`, camera emojis (📸), or editorial captions as visible text on the page.

## 2. Compulsory Multi-Language Translation (All 8 Locales)
The site supports 8 languages:
- `en` (Default English)
- `es` (Spanish)
- `ja` (Japanese)
- `fr` (French)
- `de` (German)
- `pt` (Portuguese)
- `ko` (Korean)
- `it` (Italian)

When creating or modifying a post:
1. Define the English base in `src/data/blog.ts` within the `BLOG_POSTS` array.
2. Create a dedicated translation file in `src/i18n/blog-translations/<post-file>.ts`.
3. Provide high-quality, professional, and fully localized translations for ALL 7 non-English languages (`es`, `ja`, `fr`, `de`, `pt`, `ko`, `it`).
4. Every language translation MUST include:
   - `title`: Translated post title
   - `subtitle`: Translated post subtitle
   - `excerpt`: Translated summary description
   - `readTime`: Localized read time (e.g., `"6 min de lecture"`, `"読了目安 6分"`, etc.)
   - `tags`: Fully translated topic tags
   - `keyTakeaways`: Array of translated key takeaway bullet points
   - `tableOfContents`: Localized headings matching the article outline
   - `contentHtml`: Full semantic HTML body with translated headings, paragraphs, callouts, and recommendations
5. Register the post translation in `src/i18n/blog-translations/index.ts` under `BLOG_POST_TRANSLATIONS`.

## 3. Strict Type Enforcement & Verification
- The TypeScript interface `BlogPostLocalizedRecord` requires all keys: `'es' | 'ja' | 'fr' | 'de' | 'pt' | 'ko' | 'it'`. Omitting any language will trigger a compile-time error.
- Before completing any blog-related task, you **MUST** run:
  ```bash
  npm run build
  ```
  Ensure all 1,300+ pages build with exit code 0 without any missing routes or syntax errors.
