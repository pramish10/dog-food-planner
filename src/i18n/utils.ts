import { ui, defaultLang, languages, showDefaultLang, type Lang } from './ui';

/**
 * Extract language code from URL pathname (e.g. /es/best-dog-food -> 'es').
 * Falls back to defaultLang ('en') if not matching a supported locale.
 */
export function getLangFromUrl(url: URL | string): Lang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const candidate = segments[0] as Lang;
  if (candidate && candidate in languages) {
    return candidate;
  }
  return defaultLang;
}

/**
 * Remove locale prefix from a pathname so we have the canonical base path.
 * e.g. "/es/best-dog-food" -> "/best-dog-food", "/es" -> "/"
 */
export function cleanPathname(pathname: string): string {
  const trimmed = pathname.replace(/\/$/, '') || '/';
  const supportedLangs = Object.keys(languages).filter(l => l !== defaultLang).join('|');
  const regex = new RegExp(`^\\/(${supportedLangs})(\\/|$)`);
  const stripped = trimmed.replace(regex, '/');
  return stripped.startsWith('/') ? stripped : `/${stripped}`;
}

/**
 * Returns a translation function for UI strings in the given language.
 */
export function useTranslations(lang: Lang) {
  const currentLang = (lang in ui ? lang : defaultLang) as Lang;
  const currentDict = ui[currentLang] as Record<string, string>;
  const defaultDict = ui[defaultLang] as Record<string, string>;

  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    if (key in currentDict && currentDict[key]) {
      return currentDict[key];
    }
    return defaultDict[key] ?? String(key);
  };
}

/**
 * Converts a path (with or without current locale) to the given target language.
 * E.g., ('/best-dog-food', 'es') -> '/es/best-dog-food'
 * E.g., ('/es/best-dog-food', 'en') -> '/best-dog-food' (if showDefaultLang is false)
 */
export function getLocalizedPath(path: string, targetLang: Lang): string {
  const base = cleanPathname(path);
  const normalizedBase = base === '/' ? '' : base;

  if (targetLang === defaultLang && !showDefaultLang) {
    return normalizedBase || '/';
  }
  return `/${targetLang}${normalizedBase}` || '/';
}

/**
 * Returns a translated path helper bound to a specific language.
 */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang): string {
    return getLocalizedPath(path, l);
  };
}

/**
 * Helper to get absolute URL with domain for canonical and hreflangs.
 */
export function getAbsoluteLocalizedUrl(path: string, targetLang: Lang, domain: string = 'https://dogfoodplanner.com'): string {
  const localized = getLocalizedPath(path, targetLang);
  if (localized === '/' || localized === '') {
    return `${domain}/`;
  }
  return `${domain}${localized}`;
}

/**
 * Returns static path params for non-default languages.
 */
export function getLangStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'ja' } },
    { params: { lang: 'fr' } },
    { params: { lang: 'de' } },
    { params: { lang: 'pt' } },
    { params: { lang: 'ko' } },
    { params: { lang: 'it' } },
  ];
}
