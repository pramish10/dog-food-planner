const fs = require('fs');
const content = fs.readFileSync('src/i18n/ui.ts', 'utf8');

function extractLangKeys(text, lang) {
  const uiStart = text.indexOf('export const ui = {');
  if (uiStart === -1) return null;
  const uiText = text.substring(uiStart);
  
  const startPattern = '\n  ' + lang + ': {';
  const startIdx = uiText.indexOf(startPattern);
  if (startIdx === -1) return null;
  
  // Start from the opening brace
  const braceStart = startIdx + startPattern.length - 1;
  let depth = 0;
  let i = braceStart;
  while (i < uiText.length) {
    if (uiText[i] === '{') depth++;
    else if (uiText[i] === '}') {
      depth--;
      if (depth === 0) break;
    }
    i++;
  }
  
  const section = uiText.substring(braceStart, i + 1);
  const keys = [];
  const keyMatches = section.matchAll(/'([^']+)':/g);
  for (const m of keyMatches) keys.push(m[1]);
  return keys;
}

const enKeys = extractLangKeys(content, 'en');
if (!enKeys || enKeys.length === 0) {
  console.log('ERROR: Could not extract EN keys');
  process.exit(1);
}
console.log('EN keys count:', enKeys.length);

const langs = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];

for (const lang of langs) {
  const langKeys = extractLangKeys(content, lang);
  if (!langKeys) { console.log('\n=== ' + lang + ' === NOT FOUND'); continue; }
  
  const missing = enKeys.filter(k => !langKeys.includes(k));
  const extra = langKeys.filter(k => !enKeys.includes(k));
  
  if (missing.length > 0 || extra.length > 0) {
    console.log('\n=== ' + lang + ' ===');
    if (missing.length) console.log('MISSING (' + missing.length + '):', missing.join(', '));
    if (extra.length) console.log('EXTRA (' + extra.length + '):', extra.join(', '));
  } else {
    console.log(lang + ': OK (' + langKeys.length + ' keys)');
  }
}
