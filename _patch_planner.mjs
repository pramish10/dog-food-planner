import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('src/i18n/planner.ts', 'utf8');

const replacements = [
  // English (first occurrence ends with },\n\n  es:)
  [
    "keyNutrientsTitle: 'Key Nutrients',\n  },\n\n  es:",
    "keyNutrientsTitle: 'Key Nutrients',\n    startOverBtn: 'Start Over',\n    downloadPdfBtn: '⬇ Download PDF',\n  },\n\n  es:"
  ],
  // Spanish
  [
    "keyNutrientsTitle: 'Nutrientes Clave',",
    "keyNutrientsTitle: 'Nutrientes Clave',\n    startOverBtn: 'Empezar de Nuevo',\n    downloadPdfBtn: '⬇ Descargar PDF',"
  ],
  // Japanese
  [
    "keyNutrientsTitle: '主要栄養素',",
    "keyNutrientsTitle: '主要栄養素',\n    startOverBtn: '最初からやり直す',\n    downloadPdfBtn: '⬇ PDFをダウンロード',"
  ],
  // French
  [
    "keyNutrientsTitle: 'Nutriments Clés',",
    "keyNutrientsTitle: 'Nutriments Clés',\n    startOverBtn: 'Recommencer',\n    downloadPdfBtn: '⬇ Télécharger PDF',"
  ],
  // German
  [
    "keyNutrientsTitle: 'Wichtige Nährstoffe',",
    "keyNutrientsTitle: 'Wichtige Nährstoffe',\n    startOverBtn: 'Neu starten',\n    downloadPdfBtn: '⬇ PDF herunterladen',"
  ],
  // Portuguese
  [
    "keyNutrientsTitle: 'Nutrientes Chave',",
    "keyNutrientsTitle: 'Nutrientes Chave',\n    startOverBtn: 'Recomeçar',\n    downloadPdfBtn: '⬇ Baixar PDF',"
  ],
  // Korean
  [
    "keyNutrientsTitle: '주요 영양소',",
    "keyNutrientsTitle: '주요 영양소',\n    startOverBtn: '다시 시작',\n    downloadPdfBtn: '⬇ PDF 다운로드',"
  ],
  // Italian
  [
    "keyNutrientsTitle: 'Nutrienti Chiave',",
    "keyNutrientsTitle: 'Nutrienti Chiave',\n    startOverBtn: 'Ricomincia',\n    downloadPdfBtn: '⬇ Scarica PDF',"
  ],
];

let updated = content;
for (const [from, to] of replacements) {
  updated = updated.replace(from, to);
}

writeFileSync('src/i18n/planner.ts', updated, 'utf8');
console.log('Done patching planner.ts');
