import type { Lang } from '../ui';
import type { BlogPost } from '../../data/blog';

export type NonEnglishLang = Exclude<Lang, 'en'>; // 'es' | 'ja' | 'fr' | 'de' | 'pt' | 'ko' | 'it'

export interface BlogPostTranslation {
  title: string;
  subtitle: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  keyTakeaways: string[];
  tableOfContents: { id: string; title: string }[];
  contentHtml: string;
}

/**
 * Compulsory translations record: Every post MUST provide translations
 * for all 7 supported international languages: es, ja, fr, de, pt, ko, it.
 */
export type BlogPostLocalizedRecord = Record<NonEnglishLang, BlogPostTranslation>;
