const fs = require('fs');
let txt = fs.readFileSync('src/i18n/pages.ts', 'utf8');

// Check if already patched
if (txt.includes('referencedInAnswer')) {
  console.log('Already patched.');
  process.exit(0);
}

// All 8 faqSingle blocks (en + 7 langs) end with:
//   "readAnswer": "..."
//   }
// We replace globally — each block gets the same two new keys appended.
// The translations per language are injected by finding each faqSingle block in order.

const langs = ['en', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'it'];
const translations = {
  en: { referencedInAnswer: 'Referenced in this answer', buyNow: 'Buy Now' },
  es: { referencedInAnswer: 'Referenciado en esta respuesta', buyNow: 'Comprar ahora' },
  fr: { referencedInAnswer: 'Référencé dans cette réponse', buyNow: 'Acheter maintenant' },
  de: { referencedInAnswer: 'In dieser Antwort referenziert', buyNow: 'Jetzt kaufen' },
  pt: { referencedInAnswer: 'Referenciado nesta resposta', buyNow: 'Comprar agora' },
  ja: { referencedInAnswer: 'この回答で参照されている商品', buyNow: '今すぐ購入' },
  ko: { referencedInAnswer: '이 답변에서 참조된 제품', buyNow: '지금 구매' },
  it: { referencedInAnswer: 'Referenziato in questa risposta', buyNow: 'Acquista ora' },
};

// Strategy: find each faqSingle block's closing readAnswer line and inject after it.
// We iterate through the file finding "readAnswer" occurrences in order and pair them with langs.
let occurrenceIndex = 0;
txt = txt.replace(/"readAnswer":\s*"([^"]+)"\s*\n(\s*\})/g, (match, val, closingBrace) => {
  const lang = langs[occurrenceIndex] || 'en';
  const t = translations[lang];
  occurrenceIndex++;
  const indent = closingBrace.replace('}', '').replace(/\n/g, '');
  return `"readAnswer": "${val}",\n${indent}    "referencedInAnswer": "${t.referencedInAnswer}",\n${indent}    "buyNow": "${t.buyNow}"\n${closingBrace}`;
});

fs.writeFileSync('src/i18n/pages.ts', txt, 'utf8');
console.log('Done. Patched', occurrenceIndex, 'faqSingle blocks.');

// Verify
const result = fs.readFileSync('src/i18n/pages.ts', 'utf8');
const ri = (result.match(/"referencedInAnswer"/g) || []).length;
const bn = (result.match(/"buyNow"/g) || []).length;
console.log('referencedInAnswer occurrences:', ri);
console.log('buyNow occurrences:', bn);
