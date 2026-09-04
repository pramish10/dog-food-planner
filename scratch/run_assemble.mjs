import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { en } = require('./pages_en.cjs');
const { es } = require('./pages_es.cjs');
const { ja } = require('./pages_ja.cjs');
const { fr } = require('./pages_fr.cjs');
const { de } = require('./pages_de.cjs');
const { pt } = require('./pages_pt.cjs');
const { ko, it } = require('./pages_ko_it.cjs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, '../src/i18n/pages.ts');

const fileContent = `import type { Lang } from './ui';

export type PageTranslations = typeof en;

export const PAGE_TRANSLATIONS: Record<Lang, PageTranslations> = {
  en: ${JSON.stringify(en, null, 2)},
  es: ${JSON.stringify(es, null, 2)},
  ja: ${JSON.stringify(ja, null, 2)},
  fr: ${JSON.stringify(fr, null, 2)},
  de: ${JSON.stringify(de, null, 2)},
  pt: ${JSON.stringify(pt, null, 2)},
  ko: ${JSON.stringify(ko, null, 2)},
  it: ${JSON.stringify(it, null, 2)},
};

export function getPageTranslations(lang: Lang): PageTranslations {
  return PAGE_TRANSLATIONS[lang] || PAGE_TRANSLATIONS.en;
}
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('Successfully wrote src/i18n/pages.ts with all 8 languages!');
