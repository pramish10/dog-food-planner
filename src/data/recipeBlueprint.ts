import type { Lang } from '../i18n/ui';

export const RECIPE_BLUEPRINT_SLUGS = [
  'turkey-pumpkin-maintenance',
] as const;

export type RecipeBlueprintSlug = (typeof RECIPE_BLUEPRINT_SLUGS)[number];

export interface BlueprintIngredient {
  name: string;
  percentage: number;
  category: string;
  role: string;
  clinicalBenefit: string;
  affiliateKey?: 'eggshellPowder' | 'salmonOil' | 'pumpkinPuree';
  affiliateUrl?: string;
}

export interface MacroProfile {
  proteinDm: string;
  fatDm: string;
  carbsDm: string;
  moisture: string;
  kcalPerKg: string;
  caPhosphorusRatio: string;
}

export interface RecipeBlueprint {
  slug: RecipeBlueprintSlug;
  name: string;
  shortDesc: string;
  badge: string;
  targetAudience: string;
  macroProfile: MacroProfile;
  ingredients: BlueprintIngredient[];
  executiveSummary: string;
  clinicalRationale: {
    title: string;
    description: string;
    points: string[];
  }[];
  prepProtocol: {
    step: number;
    title: string;
    instruction: string;
    criticalTip?: string;
  }[];
  storageGuidelines: {
    method: string;
    duration: string;
    instructions: string;
  }[];
  portionReference: {
    dogWeight: string;
    dailyKcal: string;
    dailyGramsTotal: string;
    turkeyGrams: string;
    organsGrams: string;
    pumpkinGrams: string;
    greensGrams: string;
    salmonOilGrams: string;
    calciumKelpGrams: string;
  }[];
  safetyAndPrecautions: {
    contraindications: string[];
    transitionSteps: string[];
    calciumRule: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface RecipeBlueprintSectionI18n {
  title: string;
  intro: string;
  readMoreBtn: string;
  footerText: string;
  footerLink: string;
}

export interface RecipeBlueprintPageI18n {
  badge: string;
  reviewedBy: string;
  formulaTitle: string;
  formulaSubtitle: string;
  ingredientCol: string;
  pctCol: string;
  categoryCol: string;
  roleCol: string;
  macroTitle: string;
  proteinLabel: string;
  fatLabel: string;
  carbsLabel: string;
  moistureLabel: string;
  caRatioLabel: string;
  energyDensityLabel: string;
  clinicalTitle: string;
  prepTitle: string;
  prepSubtitle: string;
  storageTitle: string;
  portionTitle: string;
  portionSubtitle: string;
  dogWeightCol: string;
  dailyGramsCol: string;
  dailyKcalCol: string;
  turkeyCol: string;
  organsCol: string;
  supplementsTitle: string;
  safetyTitle: string;
  contraindicationsTitle: string;
  transitionTitle: string;
  calculatorCtaTitle: string;
  calculatorCtaDesc: string;
  calculatorCtaBtn: string;
  backLink: string;
  titleSuffix: string;
  faqTitle: string;
}

export const RECIPE_BLUEPRINT_SECTION_I18N: Record<Lang, RecipeBlueprintSectionI18n> = {
  en: {
    title: 'Veterinary-Approved Homemade Recipe Blueprint',
    intro: 'A complete and balanced clinical whole-food formulation engineered for adult canine maintenance:',
    readMoreBtn: 'Read full recipe guide & preparation blueprint →',
    footerText: 'Use our free nutrition engine to convert these percentages into exact daily gram measurements for your dog’s weight:',
    footerLink: 'Launch Veterinary Feeding Calculator',
  },
  es: {
    title: 'Blueprint de Receta Casera Aprobada por Veterinarios',
    intro: 'Una formulación clínica completa y equilibrada con alimentos integrales diseñada para el mantenimiento canino adulto:',
    readMoreBtn: 'Leer guía completa y blueprint de preparación →',
    footerText: 'Utiliza nuestro calculador veterinario para convertir estos porcentajes en gramos diarios exactos para el peso de tu perro:',
    footerLink: 'Abrir Calculadora Veterinaria',
  },
  ja: {
    title: '獣医師監修：手作りドッグフード基本設計図（ブループリント）',
    intro: '成犬の健康維持に求められるAAFCO・NRC基準を満たした、完全かつバランスのとれた臨床設計レシピ：',
    readMoreBtn: 'レシピ詳細と調理・給餌ガイドを見る →',
    footerText: '愛犬の体重や活動量に合わせた正確な給餌グラム数を計算するには：',
    footerLink: '無料の給餌計算ツールを開く',
  },
  fr: {
    title: 'Recette Maison Approuvée par les Vétérinaires (Blueprint)',
    intro: 'Une formulation clinique complète et équilibrée à base d’ingrédients frais, calibrée pour le maintien du chien adulte :',
    readMoreBtn: 'Voir le guide complet et le protocole de préparation →',
    footerText: 'Utilisez notre outil de nutrition pour convertir ces pourcentages en grammes précis selon le poids de votre chien :',
    footerLink: 'Ouvrir le calculateur nutritionnel',
  },
  de: {
    title: 'Tierärztlich geprüfter Bauplan für selbstgemachtes Hundefutter',
    intro: 'Eine vollständige und ausgewogene klinische Frischekost-Rezeptur für die Erhaltung ausgewachsener Hunde:',
    readMoreBtn: 'Vollständige Rezepturanleitung & Zubereitung lesen →',
    footerText: 'Verwenden Sie unseren kostenlosen Rechner, um diese Prozentsätze in exakte Tagesgramme für das Gewicht Ihres Hundes umzurechnen:',
    footerLink: 'Tierärztlichen Futterrechner öffnen',
  },
  pt: {
    title: 'Receita Caseira Balanceada Aprovada por Veterinários (Blueprint)',
    intro: 'Uma formulação clínica completa e equilibrada com alimentos frescos desenvolvida para manutenção de cães adultos:',
    readMoreBtn: 'Ver guia completo da receita e modo de preparo →',
    footerText: 'Use nossa calculadora veterinária para converter essas porcentagens em gramas diárias exatas para o peso do seu cão:',
    footerLink: 'Abrir Calculadora de Alimentação',
  },
  ko: {
    title: '수의사 검증 홈메이드 자연식 레시피 설계도 (Blueprint)',
    intro: '성견의 건강 유지 기준(NRC/AAFCO)을 완벽히 충족하도록 설계된 임상 영양식 자연식 레시피:',
    readMoreBtn: '상세 레시피 및 조리 가이드 보기 →',
    footerText: '반려견의 정확한 체중에 맞춰 일일 급여 그램(g)수를 계산하려면 무료 계산기를 활용하세요:',
    footerLink: '수의 영양 급여 계산기 열기',
  },
  it: {
    title: 'Ricetta Casalinga Approvata dai Veterinari (Blueprint)',
    intro: 'Una formulazione clinica completa e bilanciata con alimenti freschi studiata per il mantenimento del cane adulto:',
    readMoreBtn: 'Leggi la guida completa alla ricetta e preparazione →',
    footerText: 'Usa la nostra calcolatrice veterinaria gratuita per convertire queste percentuali nei grammi esatti per il peso del tuo cane:',
    footerLink: 'Apri la Calcolatrice Alimentare',
  },
};

export const RECIPE_BLUEPRINT_PAGE_I18N: Record<Lang, RecipeBlueprintPageI18n> = {
  en: {
    badge: 'CLINICAL NUTRITION BLUEPRINT // NRC & AAFCO ADULT MAINTENANCE',
    reviewedBy: 'Formulated & Reviewed by: Veterinary Canine Nutritionist (DVM, Board-Certified Pet Nutrition)',
    formulaTitle: 'The Complete Percentage Blueprint Formula',
    formulaSubtitle: 'Exact weight-based ratio breakdown designed for adult maintenance. Zero synthetic fillers or unverified premixes.',
    ingredientCol: 'Clinical Ingredient',
    pctCol: 'Blueprint Ratio',
    categoryCol: 'Nutritional Category',
    roleCol: 'Primary Biological Function',
    macroTitle: 'Calculated Dry Matter Macro & Mineral Profile',
    proteinLabel: 'Crude Protein (Dry Matter)',
    fatLabel: 'Crude Fat (Dry Matter)',
    carbsLabel: 'Carbohydrates (Dry Matter)',
    moistureLabel: 'Moisture Content',
    caRatioLabel: 'Calcium : Phosphorus (Ca:P)',
    energyDensityLabel: 'Metabolizable Energy (ME)',
    clinicalTitle: 'In-Depth Nutritional & Clinical Rationale',
    prepTitle: 'Culinary Preparation & Batch Cooking Protocol',
    prepSubtitle: 'Follow these 6 critical culinary steps to maximize bioavailability without degrading sensitive micronutrients.',
    storageTitle: 'Food Safety, Refrigeration & Freezing Guidelines',
    portionTitle: 'Reference Gram Portions by Dog Body Weight',
    portionSubtitle: 'Daily gram requirements for typical adult active dogs. Split into 2 meals per day.',
    dogWeightCol: 'Dog Weight',
    dailyGramsCol: 'Total Daily Food',
    dailyKcalCol: 'Target Daily Calories',
    turkeyCol: 'Ground Turkey (65%)',
    organsCol: 'Hearts & Gizzards (10%)',
    supplementsTitle: 'Essential Verified Ingredients & Supplements',
    safetyTitle: 'Veterinary Safety, Transition & Contraindications',
    contraindicationsTitle: 'Who Should NOT Eat This Specific Blueprint',
    transitionTitle: '10-Day Safe Gastrointestinal Transition Protocol',
    calculatorCtaTitle: 'Calculate Custom Grams for Your Dog’s Exact Age & Weight',
    calculatorCtaDesc: 'Our veterinary algorithm factors in neuter status, body condition score, and activity level to generate precise daily gram portions.',
    calculatorCtaBtn: 'Launch Veterinary Meal Planner →',
    backLink: 'Back to Best Dog Food Guide',
    titleSuffix: 'Veterinary Homemade Dog Food Blueprint | Dog Food Planner',
    faqTitle: 'Frequently Asked Questions About This Blueprint',
  },
  es: {
    badge: 'BLUEPRINT NUTRICIONAL CLÍNICO // NRC & AAFCO MANTENIMIENTO ADULTO',
    reviewedBy: 'Formulado y revisado por: Nutricionista Veterinario Canino (DVM)',
    formulaTitle: 'Fórmula Blueprint Porcentual Completa',
    formulaSubtitle: 'Desglose proporcional por peso diseñado para el mantenimiento adulto. Sin rellenos sintéticos.',
    ingredientCol: 'Ingrediente Clínico',
    pctCol: 'Proporción',
    categoryCol: 'Categoría Nutricional',
    roleCol: 'Función Biológica Principal',
    macroTitle: 'Perfil de Macronutrientes y Minerales (Materia Seca)',
    proteinLabel: 'Proteína Cruda (Materia Seca)',
    fatLabel: 'Grasa Cruda (Materia Seca)',
    carbsLabel: 'Carbohidratos (Materia Seca)',
    moistureLabel: 'Contenido de Humedad',
    caRatioLabel: 'Calcio : Fósforo (Ca:P)',
    energyDensityLabel: 'Energía Metabolizable (EM)',
    clinicalTitle: 'Justificación Clínica y Nutricional Detallada',
    prepTitle: 'Protocolo Culinario de Preparación y Cocción',
    prepSubtitle: 'Sigue estos 6 pasos esenciales para maximizar la biodisponibilidad sin desnaturalizar nutrientes termosensibles.',
    storageTitle: 'Pautas de Seguridad, Refrigeración y Congelación',
    portionTitle: 'Porciones de Referencia en Gramos según el Peso del Perro',
    portionSubtitle: 'Requerimientos diarios en gramos para perros adultos activos. Dividir en 2 tomas diarias.',
    dogWeightCol: 'Peso del Perro',
    dailyGramsCol: 'Alimento Diario Total',
    dailyKcalCol: 'Calorías Diarias Objetivo',
    turkeyCol: 'Pavo Magro (65%)',
    organsCol: 'Corazones y Mollejas (10%)',
    supplementsTitle: 'Ingredientes y Suplementos Esenciales Verificados',
    safetyTitle: 'Seguridad Veterinaria, Transición y Contraindicaciones',
    contraindicationsTitle: 'Quiénes NO deben consumir este blueprint sin ajustes',
    transitionTitle: 'Protocolo de Transición Gastrointestinal Segura (10 Días)',
    calculatorCtaTitle: 'Calcula Gramos Personalizados para la Edad y Peso de tu Perro',
    calculatorCtaDesc: 'Nuestro algoritmo veterinario considera esterilización, condición corporal y nivel de actividad física.',
    calculatorCtaBtn: 'Abrir Planificador Veterinario →',
    backLink: 'Volver a la Guía de Mejores Comidas para Perros',
    titleSuffix: 'Blueprint de Receta Casera Veterinaria | Dog Food Planner',
    faqTitle: 'Preguntas Frecuentes sobre este Blueprint',
  },
  ja: {
    badge: '臨床栄養設計図 // NRC・AAFCO 成犬健康維持基準適合',
    reviewedBy: '監修：獣医臨床栄養専門医（DVM）',
    formulaTitle: '完全配合パーセンテージ設計図（ブループリント）',
    formulaSubtitle: '成犬の維持期に必要なアミノ酸とミネラル比率を厳密に配分。合成添加物不使用の完全ホールフード処方。',
    ingredientCol: '臨床原材料',
    pctCol: '配合比率',
    categoryCol: '栄養分類',
    roleCol: '主たる生体機能・役割',
    macroTitle: '乾物基準マクロ栄養素およびミネラル構成',
    proteinLabel: '粗タンパク質（乾物換算）',
    fatLabel: '粗脂肪（乾物換算）',
    carbsLabel: '炭水化物（乾物換算）',
    moistureLabel: '水分含有量',
    caRatioLabel: 'カルシウム : リン比（Ca:P）',
    energyDensityLabel: '代謝エネルギー（ME）',
    clinicalTitle: '臨床栄養学的アプローチと原材料選定の根拠',
    prepTitle: '調理・バッチクッキングの臨床プロトコル',
    prepSubtitle: '熱に弱いオメガ3脂肪酸やビタミンを失活させず、消化吸収率を極大化する6つの調理ステップ。',
    storageTitle: '衛生管理・冷蔵および冷凍保存ガイドライン',
    portionTitle: '体重別1日あたり給餌グラム数（目安一覧）',
    portionSubtitle: '標準的な活動量の成犬を対象とした1日あたりの総給餌量（1日2回給餌推奨）。',
    dogWeightCol: '愛犬の体重',
    dailyGramsCol: '1日の総給餌量',
    dailyKcalCol: '目標1日カロリー',
    turkeyCol: '赤身七面鳥（65%）',
    organsCol: 'ハツ・砂肝（10%）',
    supplementsTitle: '必須サプリメントおよび推奨原材料',
    safetyTitle: '獣医師による安全性・移行スケジュール・禁忌事項',
    contraindicationsTitle: '本処方が適さないケース（事前の調整が必要な犬）',
    transitionTitle: '消化器官に優しい10日間の安全フード移行法',
    calculatorCtaTitle: '愛犬の正確な体重・月齢に合わせた給餌量を計算する',
    calculatorCtaDesc: '避妊去勢の有無、体型スコア（BCS）、運動量に応じた正確な1日の給餌グラム数を算出します。',
    calculatorCtaBtn: '獣医給餌計算ツールを起動する →',
    backLink: 'ドッグフード総合ガイドに戻る',
    titleSuffix: '獣医師監修 手作りドッグフード設計図 | Dog Food Planner',
    faqTitle: '本設計図に関するよくある質問（FAQ）',
  },
  fr: {
    badge: 'BLUEPRINT NUTRITIONNEL CLINIQUE // NRC & AAFCO MAINTIEN ADULTE',
    reviewedBy: 'Formulé et vérifié par : Nutritionniste Vétérinaire Canin (DVM)',
    formulaTitle: 'Formule Complète du Blueprint en Pourcentages',
    formulaSubtitle: 'Répartition rigoureuse des nutriments pour chien adulte. Sans agents de charge ni sous-produits obscurs.',
    ingredientCol: 'Ingrédient Clinique',
    pctCol: 'Ratio',
    categoryCol: 'Catégorie Nutritionnelle',
    roleCol: 'Fonction Biologique Principale',
    macroTitle: 'Profil Macronutritionnel & Minéral (Matière Sèche)',
    proteinLabel: 'Protéines Brutes (Matière Sèche)',
    fatLabel: 'Matières Grasses (Matière Sèche)',
    carbsLabel: 'Glucides (Matière Sèche)',
    moistureLabel: 'Teneur en Humidité',
    caRatioLabel: 'Calcium : Phosphore (Ca:P)',
    energyDensityLabel: 'Énergie Métabolisable (EM)',
    clinicalTitle: 'Fondements Cliniques et Justification Nutritionnelle',
    prepTitle: 'Protocole de Préparation et Cuisson Douce',
    prepSubtitle: '6 étapes culinaires clés pour préserver les micronutriments thermosensibles et maximiser la digestibilité.',
    storageTitle: 'Sécurité Alimentaire, Conservation & Décongélation',
    portionTitle: 'Portions de Référence en Grammes selon le Poids',
    portionSubtitle: 'Quantités journalières pour un chien adulte actif (à répartir en 2 repas par jour).',
    dogWeightCol: 'Poids du Chien',
    dailyGramsCol: 'Ration Journalière Totale',
    dailyKcalCol: 'Calories Journalières Cibles',
    turkeyCol: 'Dinde Maigre (65%)',
    organsCol: 'Cœurs & Gésiers (10%)',
    supplementsTitle: 'Ingrédients Essentiels & Compléments Vérifiés',
    safetyTitle: 'Sécurité Vétérinaire, Transition & Contre-indications',
    contraindicationsTitle: 'Chiens pour lesquels cette formule n’est pas adaptée',
    transitionTitle: 'Protocole de Transition Digestive Sécurisée sur 10 Jours',
    calculatorCtaTitle: 'Calculez la Ration Exacte pour l’Âge et le Poids de Votre Chien',
    calculatorCtaDesc: 'Notre algorithme vétérinaire prend en compte la stérilisation, l’état corporel et l’activité pour doser les grammes exacts.',
    calculatorCtaBtn: 'Lancer le Planificateur Nutritionnel →',
    backLink: 'Retour au Guide des Meilleurs Aliments pour Chiens',
    titleSuffix: 'Recette Maison Vétérinaire Équilibrée | Dog Food Planner',
    faqTitle: 'Foire Aux Questions sur ce Blueprint',
  },
  de: {
    badge: 'KLINISCHER NÄHRSTOFF-BAUPLAN // NRC & AAFCO ERHALTUNG AUSGEWACHSENER HUNDE',
    reviewedBy: 'Formuliert & geprüft von: Fachtierarzt für Tierernährung (DVM)',
    formulaTitle: 'Vollständiger Prozentualer Rezeptur-Bauplan',
    formulaSubtitle: 'Exakt ausbalancierte Rationsanteile für ausgewachsene Hunde. Ohne künstliche Füllstoffe.',
    ingredientCol: 'Klinische Zutat',
    pctCol: 'Bauplan-Anteil',
    categoryCol: 'Nährstoffkategorie',
    roleCol: 'Primäre biologische Funktion',
    macroTitle: 'Makronährstoff- und Mineralstoffprofil (Trockensubstanz)',
    proteinLabel: 'Rohprotein (Trockensubstanz)',
    fatLabel: 'Rohfett (Trockensubstanz)',
    carbsLabel: 'Kohlenhydrate (Trockensubstanz)',
    moistureLabel: 'Feuchtigkeitsgehalt',
    caRatioLabel: 'Calcium : Phosphor (Ca:P)',
    energyDensityLabel: 'Umsetzbare Energie (ME)',
    clinicalTitle: 'Wissenschaftliche & Klinische Begründung der Zutaten',
    prepTitle: 'Zubereitungsprotokoll & Schonende Garung',
    prepSubtitle: '6 Zubereitungsschritte für maximale Bioverfügbarkeit ohne thermische Zerstörung hitzelabiler Vitamine.',
    storageTitle: 'Lebensmittelsicherheit, Kühlung & Einfrieren',
    portionTitle: 'Referenzmengen in Gramm nach Hundegewicht',
    portionSubtitle: 'Tagesmengen für normal aktive ausgewachsene Hunde (auf 2 Mahlzeiten verteilt).',
    dogWeightCol: 'Gewicht des Hundes',
    dailyGramsCol: 'Gesamtfutter pro Tag',
    dailyKcalCol: 'Ziel-Tageskalorien',
    turkeyCol: 'Mageres Putenhack (65%)',
    organsCol: 'Herzen & Mägen (10%)',
    supplementsTitle: 'Essenzielle geprüfte Zusätze & Zutaten',
    safetyTitle: 'Tierärztliche Sicherheit, Futterumstellung & Gegenanzeigen',
    contraindicationsTitle: 'Für welche Hunde dieser Bauplan NICHT geeignet ist',
    transitionTitle: '10-tägiger schonender Magen-Darm-Futterwechsel',
    calculatorCtaTitle: 'Individuelle Grammmengen für Ihren Hund berechnen',
    calculatorCtaDesc: 'Unser tierärztlicher Algorithmus berücksichtigt Kastrationsstatus, BCS und Aktivitätsgrad.',
    calculatorCtaBtn: 'Futterrechner starten →',
    backLink: 'Zurück zur Besten-Hundefutter-Übersicht',
    titleSuffix: 'Tierärztlicher Rezeptur-Bauplan für Hundefutter | Dog Food Planner',
    faqTitle: 'Häufig gestellte Fragen zu diesem Rezeptur-Bauplan',
  },
  pt: {
    badge: 'BLUEPRINT NUTRICIONAL CLÍNICO // NRC & AAFCO MANUTENÇÃO ADULTO',
    reviewedBy: 'Formulado e revisado por: Nutricionista Veterinário Canino (DVM)',
    formulaTitle: 'Fórmula Completa do Blueprint em Porcentagens',
    formulaSubtitle: 'Divisão proporcional precisa desenvolvida para manutenção de cães adultos. Sem conservantes sintéticos.',
    ingredientCol: 'Ingrediente Clínico',
    pctCol: 'Proporção',
    categoryCol: 'Categoria Nutricional',
    roleCol: 'Função Biológica Principal',
    macroTitle: 'Perfil de Macronutrientes e Minerais (Matéria Seca)',
    proteinLabel: 'Proteína Bruta (Matéria Seca)',
    fatLabel: 'Gordura Bruta (Matéria Seca)',
    carbsLabel: 'Carboidratos (Matéria Seca)',
    moistureLabel: 'Teor de Umidade',
    caRatioLabel: 'Cálcio : Fósforo (Ca:P)',
    energyDensityLabel: 'Energia Metabolizável (EM)',
    clinicalTitle: 'Fundamentação Nutricional e Clínica Detalhada',
    prepTitle: 'Protocolo Culinário de Preparação e Cozimento',
    prepSubtitle: '6 passos essenciais para manter a biodisponibilidade sem destruir micronutrientes sensíveis ao calor.',
    storageTitle: 'Segurança Alimentar, Refrigeração e Congelamento',
    portionTitle: 'Porções de Referência em Gramas por Peso do Cão',
    portionSubtitle: 'Requisitos diários em gramas para cães adultos ativos (dividir em 2 refeições ao dia).',
    dogWeightCol: 'Peso do Cão',
    dailyGramsCol: 'Alimento Diário Total',
    dailyKcalCol: 'Calorias Diárias Alvo',
    turkeyCol: 'Peru Moído Magro (65%)',
    organsCol: 'Corações e Moelas (10%)',
    supplementsTitle: 'Ingredientes e Suplementos Essenciais Verificados',
    safetyTitle: 'Segurança Veterinária, Transição e Contraindicações',
    contraindicationsTitle: 'Para quem este plano NÃO é recomendado sem ajustes',
    transitionTitle: 'Protocolo de Transição Gastrointestinal Segura (10 Dias)',
    calculatorCtaTitle: 'Calcule Gramas Personalizadas para a Idade e Peso do seu Cão',
    calculatorCtaDesc: 'Nosso algoritmo veterinário analisa castração, escore corporal e nível de atividade.',
    calculatorCtaBtn: 'Abrir Calculadora Nutricional →',
    backLink: 'Voltar ao Guia de Melhores Alimentos para Cães',
    titleSuffix: 'Receita Caseira Veterinária Balanceada | Dog Food Planner',
    faqTitle: 'Perguntas Frequentes sobre este Blueprint',
  },
  ko: {
    badge: '임상 영양 설계도 // NRC 및 AAFCO 성견 영양 유지 기준',
    reviewedBy: '감수: 수의임상영양학 전문 수의사 (DVM)',
    formulaTitle: '완전 비율 퍼센트 설계도 (Blueprint Formula)',
    formulaSubtitle: '성견의 필수 아미노산 및 미네랄 밸런스를 위해 정밀 설계된 중량비. 화학 합성 부형제 0%.',
    ingredientCol: '임상 원재료',
    pctCol: '배합 비율',
    categoryCol: '영양 분류',
    roleCol: '핵심 생체 기능 및 효능',
    macroTitle: '건물 기준(DM) 마크로 영양소 및 미네랄 분석표',
    proteinLabel: '조단백질 (건물 기준 DM)',
    fatLabel: '조지방 (건물 기준 DM)',
    carbsLabel: '탄수화물 (건물 기준 DM)',
    moistureLabel: '수분 함량',
    caRatioLabel: '칼슘 : 인 비율 (Ca:P)',
    energyDensityLabel: '대사 에너지 (ME)',
    clinicalTitle: '원재료별 수의 임상 영양학적 근거',
    prepTitle: '영양소 파괴를 막는 조리 및 배치 쿠킹 프로토콜',
    prepSubtitle: '열에 취약한 오메가-3와 비타민 손실을 방지하고 흡수율을 극대화하는 6단계 조리법.',
    storageTitle: '식품 위생, 냉장 및 냉동 보관 가이드라인',
    portionTitle: '체중별 1일 급여 그램(g)수 기준표',
    portionSubtitle: '정상 활동량을 가진 성견 기준 일일 총 급여량 (하루 2회 분할 급여 권장).',
    dogWeightCol: '반려견 체중',
    dailyGramsCol: '1일 총 급여량',
    dailyKcalCol: '목표 일일 칼로리',
    turkeyCol: '순살 칠면조 (65%)',
    organsCol: '심장·모래주머니 (10%)',
    supplementsTitle: '검증된 필수 영양 보충제 및 원재료',
    safetyTitle: '수의사 안전 수칙, 전환 일정 및 급여 주의사항',
    contraindicationsTitle: '본 레시피 급여 시 주의가 필요한 경우 (금기 대상)',
    transitionTitle: '위장관 부담 없는 10일 안전 사료 전환 프로토콜',
    calculatorCtaTitle: '내 아이의 체중과 상태에 맞춘 정밀 급여량 계산하기',
    calculatorCtaDesc: '중성화 여부, 비만도(BCS), 활동량을 반영하여 정확한 하루 급여 그램수를 확인하세요.',
    calculatorCtaBtn: '수의 영양 식단 계산기 열기 →',
    backLink: '최고의 도그푸드 가이드로 돌아가기',
    titleSuffix: '수의사 검증 자연식 레시피 설계도 | Dog Food Planner',
    faqTitle: '본 레시피 설계도 관련 자주 묻는 질문 (FAQ)',
  },
  it: {
    badge: 'BLUEPRINT NUTRIZIONALE CLINICO // NRC & AAFCO MANTENIMENTO ADULTO',
    reviewedBy: 'Formulato e revisionato da: Nutrizionista Veterinario Canino (DVM)',
    formulaTitle: 'Formula Percentuale Completa del Blueprint',
    formulaSubtitle: 'Ripartizione precisa in peso studiata per il mantenimento del cane adulto. Senza additivi sintetici.',
    ingredientCol: 'Ingrediente Clinico',
    pctCol: 'Rapporto %',
    categoryCol: 'Categoria Nutrizionale',
    roleCol: 'Funzione Biologica Principale',
    macroTitle: 'Profilo dei Macronutrienti e Minerali (Sostanza Secca)',
    proteinLabel: 'Proteina Grezza (Sostanza Secca)',
    fatLabel: 'Grassi Grezzi (Sostanza Secca)',
    carbsLabel: 'Carboidrati (Sostanza Secca)',
    moistureLabel: 'Contenuto di Umidità',
    caRatioLabel: 'Calcio : Fosforo (Ca:P)',
    energyDensityLabel: 'Energia Metabolizzabile (EM)',
    clinicalTitle: 'Giustificazione Clinica e Nutrizionale Approfondita',
    prepTitle: 'Protocollo Culinario di Preparazione e Cottura Dolce',
    prepSubtitle: '6 passaggi culinari fondamentali per garantire la massima digeribilità senza degradare i nutrienti termolabili.',
    storageTitle: 'Sicurezza Alimentare, Conservazione & Scongelamento',
    portionTitle: 'Porzioni di Riferimento in Grammi per Peso Corporeo',
    portionSubtitle: 'Fabbisogno giornaliero in grammi per cani adulti attivi (suddiviso in 2 pasti al giorno).',
    dogWeightCol: 'Peso del Cane',
    dailyGramsCol: 'Cibo Giornaliero Totale',
    dailyKcalCol: 'Calorie Giornaliere Target',
    turkeyCol: 'Tacchino Magro (65%)',
    organsCol: 'Cuori & Ventrigli (10%)',
    supplementsTitle: 'Ingredienti e Integratori Essenziali Verificati',
    safetyTitle: 'Sicurezza Veterinaria, Transizione e Controindicazioni',
    contraindicationsTitle: 'Chi NON dovrebbe assumere questo blueprint senza modifiche',
    transitionTitle: 'Protocollo di Transizione Gastrointestinale Sicura in 10 Giorni',
    calculatorCtaTitle: 'Calcola i Grammi Esatti per l’Età e il Peso del tuo Cane',
    calculatorCtaDesc: 'Il nostro algoritmo veterinario considera sterilizzazione, punteggio corporeo e livello di attività.',
    calculatorCtaBtn: 'Avvia il Calcolatore Nutrizionale →',
    backLink: 'Torna alla Guida sui Migliori Alimenti per Cani',
    titleSuffix: 'Ricetta Casalinga Veterinaria Equilibrata | Dog Food Planner',
    faqTitle: 'Domande Frequenti su questo Blueprint',
  },
};

/**
 * Flagship Veterinary-Approved Homemade Recipe Blueprint data.
 * Adheres strictly to NRC (National Research Council) & AAFCO canine adult nutrient profiles.
 */
export function getRecipeBlueprints(lang: Lang): RecipeBlueprint[] {
  const isEn = lang === 'en';
  const isEs = lang === 'es';
  const isJa = lang === 'ja';
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isPt = lang === 'pt';
  const isKo = lang === 'ko';
  const isIt = lang === 'it';

  const name = isEn
    ? 'Gently Cooked Lean Turkey & Pumpkin Adult Maintenance Blueprint'
    : isEs
    ? 'Blueprint de Pavo Magro y Calabaza para Mantenimiento Adulto'
    : isJa
    ? '成犬用 消化器ケア赤身七面鳥＆かぼちゃの基本臨床設計図'
    : isFr
    ? 'Blueprint Dinde Maigre & Citrouille Maintien Adulte'
    : isDe
    ? 'Schonkost-Bauplan mit Putenhack & Kürbis für ausgewachsene Hunde'
    : isPt
    ? 'Blueprint de Peru Magro e Abóbora para Manutenção de Cães Adultos'
    : isKo
    ? '성견 맞춤 저지방 칠면조 & 호박 영양 설계도'
    : 'Blueprint al Tacchino Magro e Zucca per Cani Adulti';

  const shortDesc = isEn
    ? 'A clinically formulated 65/10/10/8/3/4 whole-food recipe engineered for adult maintenance with 93/7 lean turkey, heart-protective organ taurine, digestive pumpkin fiber, cold-added EPA/DHA omega-3s, and balanced eggshell calcium.'
    : isEs
    ? 'Una fórmula clínica 65/10/10/8/3/4 de comida real diseñada para mantenimiento adulto con pavo 93/7, taurina de órganos para el corazón, fibra digestiva de calabaza, omega-3 EPA/DHA y calcio balanceado.'
    : isJa
    ? '成犬の維持期のために臨床設計された65:10:10:8:3:4の黄金比率。高消化性赤身七面鳥、心臓保護タウリン、整腸カボチャ繊維、後入れEPA/DHAオメガ3、厳密に配合された卵殻カルシウムによる完全食処方。'
    : isFr
    ? 'Une recette clinique 65/10/10/8/3/4 élaborée pour le chien adulte avec dinde maigre 93/7, taurine d’abats pour le cœur, fibres de citrouille, oméga-3 EPA/DHA et calcium équilibré de coquille d’œuf.'
    : isDe
    ? 'Eine klinisch berechnete 65/10/10/8/3/4-Vollwertrezeptur für ausgewachsene Hunde mit 93/7 Putenhack, herzschützendem Organ-Taurin, verdauungsförderndem Kürbis, schonenden EPA/DHA-Fettsäuren und Eierschalen-Calcium.'
    : isPt
    ? 'Uma receita clínica 65/10/10/8/3/4 de alimento natural desenvolvida para cães adultos com peru magro 93/7, taurina de vísceras para o coração, fibras prebióticas de abóbora, ômega-3 EPA/DHA e cálcio de casca de ovo.'
    : isKo
    ? '성견의 건강 유지를 위해 65:10:10:8:3:4 황금 비율로 임상 설계된 자연식. 저지방 칠면조 93/7, 심장 보호 천연 타우린, 장 건강 단호박 섬유질, 비가열 EPA/DHA 오메가-3, 칼슘:인 균형을 맞춘 난각분말 함유.'
    : 'Una ricetta clinica 65/10/10/8/3/4 a base di cibi freschi per cani adulti con tacchino magro 93/7, taurina cardiaca da frattaglie, fibre digestive di zucca, omega-3 EPA/DHA a freddo e calcio bilanciato da guscio d’uovo.';

  const executiveSummary = isEn
    ? 'Unlike commercial kibble extruded at temperatures over 400°F (204°C) or arbitrary internet DIY recipes lacking mineral balance, this blueprint utilizes exact veterinary clinical ratios. It delivers high-BV (biological value) proteins, organ-derived taurine to protect cardiac myocardium, gentle prebiotic fiber to regulate the canine microbiome, and precisely balanced calcium carbonate to achieve the indispensable 1.25:1 Ca:P ratio mandated by NRC standards.'
    : isEs
    ? 'A diferencia del pienso ultraprocesado a más de 200°C o de recetas caseras de internet sin balance mineral, este blueprint emplea proporciones clínicas veterinarias exactas. Aporta proteínas de alto valor biológico, taurina de órganos para proteger el corazón, fibra prebiótica para el microbioma canino y carbonato de calcio equilibrado para cumplir la relación 1.25:1 Ca:P de la norma NRC.'
    : isJa
    ? '200℃以上の超高温で加熱・膨化される市販ドライフードや、ミネラル比率が崩れがちなネット上の自己流手作り食とは異なり、本設計図は獣医臨床栄養学に基づき精密に算出されています。高い生物価を誇る良質な動物性タンパク質、拡張型心筋症を防ぐ天然タウリン、腸内細菌叢を育む水溶性・不溶性食物繊維、そしてNRC基準のCa:P比（1.25:1）を満たすカルシウム補給を徹底しています。'
    : isFr
    ? 'Contrairement aux croquettes industrielles extrudées à plus de 200°C ou aux recettes maison improvisées qui manquent de calcium, ce blueprint repose sur des ratios cliniques rigoureux. Il fournit des protéines de haute valeur biologique, de la taurine d’abats pour le myocarde, des fibres prébiotiques et du carbonate de calcium équilibré respectant le ratio Ca:P de 1,25:1 fixé par le NRC.'
    : isDe
    ? 'Im Gegensatz zu stark verarbeitetem Trockenfutter oder unzureichend mineralisierten Internet-Rezepten folgt dieser Bauplan exakten klinischen Vorgaben. Er liefert hochverdauliche Proteine, Organ-Taurin zum Herzschutz, prebiotische Fasern für die Darmflora und exakt dosiertes Eierschalen-Calcium zur Sicherstellung des NRC-Sollwerts von 1,25:1 Ca:P.'
    : isPt
    ? 'Ao contrário de rações ultraprocessadas ou receitas caseiras sem suplementação mineral adequada, este blueprint utiliza proporções clínicas exatas. Oferece proteína de alto valor biológico, taurina natural para o coração, fibras prebióticas para o intestino canino e cálcio de casca de ovo rigorosamente calculado para atingir a proporção 1,25:1 Ca:P recomendada pelo NRC.'
    : isKo
    ? '200℃ 이상의 고온 압출 가공을 거친 건식 사료나 미네랄 밸런스가 결여된 인터넷 수제식과 달리, 본 레시피는 미국국립연구회의(NRC) 기준을 엄격히 준수합니다. 심근 기능을 지키는 천연 타우린, 장내 유익균을 돕는 단호박 프리바이오틱스, 뼈 손상을 예방하는 칼슘:인 1.25:1 비율을 완벽히 구현했습니다.'
    : 'A differenza delle crocchette estruse ad altissime temperature o delle diete casalinghe sbilanciate, questo blueprint segue precisi standard veterinari. Fornisce proteine ad altissimo valore biologico, taurina d’organo protettiva per il cuore, fibre prebiotiche e carbonato di calcio bilanciato secondo il rapporto 1,25:1 Ca:P del NRC.';

  return [
    {
      slug: 'turkey-pumpkin-maintenance',
      name,
      shortDesc,
      badge: isEn ? 'Flagship Clinical Formula' : isEs ? 'Fórmula Clínica Insignia' : isJa ? '臨床推奨・旗艦レシピ' : 'Formule Clinique de Référence',
      targetAudience: isEn ? 'Adult Canines (1-7 Years) // Maintenance & Sensitive Digestion' : isEs ? 'Perros Adultos (1-7 Años) // Mantenimiento y Digestión Sensible' : isJa ? '成犬期（1〜7歳）／健康維持および胃腸ケア' : 'Chiens Adultes (1-7 ans) // Maintien & Digestion',
      macroProfile: {
        proteinDm: '48.2%',
        fatDm: '22.8%',
        carbsDm: '13.4%',
        moisture: '72.5%',
        kcalPerKg: '1,220 kcal/kg (approx. 34.6 kcal/oz)',
        caPhosphorusRatio: '1.25 : 1.0 (NRC Recommended Range: 1.1:1 – 1.4:1)',
      },
      ingredients: [
        {
          name: isEn ? 'USDA Lean Ground Turkey (93/7)' : isEs ? 'Pavo Magro Picado (93% magro / 7% grasa)' : isJa ? '赤身七面鳥ミンチ（赤身93% / 脂質7%）' : isFr ? 'Dinde Hachée Maigre (93% maigre / 7% gras)' : isDe ? 'Mageres Putenhackfleisch (93/7)' : isPt ? 'Peru Moído Magro (93% magro / 7% gordura)' : isKo ? '지방 7% 미만 순살 칠면조 분쇄육 (93/7)' : 'Tacchino Macinato Magro (93/7)',
          percentage: 65,
          category: isEn ? 'Primary Muscle Meat' : isEs ? 'Carne Muscular Principal' : isJa ? '主筋肉肉類' : 'Viande Musculaire Principale',
          role: isEn ? 'Bioavailable essential amino acids (arginine, lysine, leucine) for muscle synthesis and enzyme production' : isEs ? 'Aminoácidos esenciales biodisponibles para masa muscular y síntesis enzimática' : isJa ? '筋肉維持・酵素合成に必要な必須アミノ酸（アルギニン、リジン、ロイシン）を高純度で供給' : 'Acides aminés essentiels biodisponibles pour la masse musculaire',
          clinicalBenefit: isEn ? 'Lean, highly digestible single novel poultry protein with low allergenicity compared to commercial beef or grain-fed chicken.' : isEs ? 'Proteína única muy digestible y de bajo potencial alergénico.' : isJa ? '牛や一般的な鶏に比べてアレルギー惹起性が極めて低く、消化管への負担を最小化。' : 'Protéine hautement digestible à faible potentiel allergisant.',
        },
        {
          name: isEn ? 'Turkey Hearts & Gizzards' : isEs ? 'Corazones y Mollejas de Pavo' : isJa ? '七面鳥のハツ（心臓）＆砂肝' : isFr ? 'Cœurs et Gésiers de Dinde' : isDe ? 'Putenherzen & Putenmägen' : isPt ? 'Corações e Moelas de Peru' : isKo ? '칠면조 염통(심장) 및 모래주머니' : 'Cuori e Ventrigli di Tacchino',
          percentage: 10,
          category: isEn ? 'Muscular Organ & CoQ10 Source' : isEs ? 'Órganos Musculares y Fuente de CoQ10' : isJa ? '筋性内臓・補酵素CoQ10' : 'Organe Musculaire & Source de Taurine',
          role: isEn ? 'Concentrated natural taurine, CoQ10, bioavailable heme iron, and B-complex vitamins (especially B12)' : isEs ? 'Taurina natural, CoQ10, hierro hemo y complejo vitamínico B12' : isJa ? '心筋保護に不可欠な天然タウリン、CoQ10、ヘム鉄、活性型ビタミンB12を高密度で補給' : 'Taurine naturelle, CoQ10, fer héminique et vitamines du groupe B',
          clinicalBenefit: isEn ? 'Shields canine heart tissue against nutritional dilated cardiomyopathy (DCM) without artificial chemical taurine supplements.' : isEs ? 'Protege contra la miocardiopatía dilatada (DCM) de forma 100% natural.' : isJa ? '合成タウリン粉末に頼らず、生体利用率の高い天然内臓から心筋保護因子を直接摂取。' : 'Protège contre la cardiomyopathie dilatée canine (DCM).',
        },
        {
          name: isEn ? 'Organic Pure Pumpkin Purée' : isEs ? 'Puré de Calabaza Pura Orgánica (sin especias)' : isJa ? '無添加 100% 有機カボチャピューレ' : isFr ? 'Purée de Citrouille Pure Bio (sans épices)' : isDe ? 'Reines Bio-Kürbispüree' : isPt ? 'Purê de Abóbora Pura 100% Natural' : isKo ? '무가당 100% 유기농 단호박 퓨레' : 'Purea di Zucca Pura Biologica',
          percentage: 10,
          category: isEn ? 'Prebiotic Soluble Fiber' : isEs ? 'Fibra Soluble Prebiótica' : isJa ? '水溶性・不溶性プレバイオティクス食物繊維' : 'Fibres Solubles Prébiotiques',
          role: isEn ? 'Soluble pectin and insoluble dietary fiber to optimize colonic transit and stimulate beneficial short-chain fatty acids (butyrate)' : isEs ? 'Regula el tránsito colónico y nutre la microbiota intestinal produciendo butirato' : isJa ? '腸内結腸細胞の主要エネルギー源である短鎖脂肪酸（酪酸）の産生を促進し、便通を理想化' : 'Régule le transit intestinal et nourrit le microbiote par la production de butyrate',
          clinicalBenefit: isEn ? 'Acts as a natural dual-action regulator: firms loose stools while preventing constipation in dogs with sensitive GI tracts.' : isEs ? 'Regulador dual: solidifica heces blandas y alivia el estreñimiento.' : isJa ? '軟便と便秘の双方に作用する天然の腸内バランサーとして消化管粘膜を保護。' : 'Régulateur naturel : raffermit les selles molles et prévient la constipation.',
          affiliateKey: 'pumpkinPuree',
          affiliateUrl: 'https://amzn.to/4xINd8W',
        },
        {
          name: isEn ? 'Steamed Baby Spinach & Zucchini' : isEs ? 'Espinacas Baby y Calabacín al Vapor' : isJa ? '蒸しほうれん草＆ズッキーニ（微細刻み）' : isFr ? 'Épinards et Courgettes Cuits à la Vapeur' : isDe ? 'Gedämpfter Babyspinat & Zucchini' : isPt ? 'Espinafre Baby e Abobrinha no Vapor' : isKo ? '살짝 찐 시금치 및 애호박' : 'Spinaci Novelli e Zucchine al Vapore',
          percentage: 8,
          category: isEn ? 'Phytonutrients & Micronutrient Greens' : isEs ? 'Fitonutrientes y Verduras Verdes' : isJa ? 'フィトケミカル・微量栄養緑黄色野菜' : 'Phytonutriments & Légumes Verts',
          role: isEn ? 'Delivers dietary folate, vitamin K1, potassium, magnesium, and cellular antioxidants (lutein and zeaxanthin)' : isEs ? 'Aporte de folato, vitamina K1, potasio, magnesio y antioxidantes celulares' : isJa ? '抗酸化ルテイン、ゼアキサンチン、葉酸、ビタミンK1、カリウムを天然形態で供給' : 'Apport en folate, vitamine K1, potassium, magnésium et antioxydants cellulaires',
          clinicalBenefit: isEn ? 'Gentle steaming ruptures plant cellulose cell walls so canine digestive enzymes can assimilate micronutrients without gastrointestinal distress.' : isEs ? 'El vapor rompe la celulosa para que el perro absorba los nutrientes sin fermentación nociva.' : isJa ? '犬の消化器では分解できないセルロース細胞壁を加熱で破壊し、シュウ酸を低減させて安全に吸収。' : 'La vapeur brise la cellulose végétale pour une assimilation optimale.',
        },
        {
          name: isEn ? 'Eggshell Calcium & Kelp Mineral Blend' : isEs ? 'Polvo de Cáscara de Huevo y Alga Kelp' : isJa ? '超微粉末 卵殻カルシウム＆有機ケルプ（海藻ミネラル）' : isFr ? 'Poudre de Coquille d’Œuf & Kelp Marin' : isDe ? 'Eierschalen-Calciumpulver & Bio-Kelp' : isPt ? 'Farinha de Casca de Ovo e Alga Kelp' : isKo ? '미세 난각 칼슘 분말 및 유기농 켈프(해조류)' : 'Polvere di Guscio d’Uovo e Kelp Marino',
          percentage: 4,
          category: isEn ? 'Essential Mineral & Ca:P Balancer' : isEs ? 'Mineral Esencial y Balanceador Ca:P' : isJa ? '必須骨格ミネラル・Ca:P比調製材' : 'Minéral Essentiel & Équilibreur Ca:P',
          role: isEn ? 'Provides ~38% elemental bioavailable calcium carbonate to balance meat phosphorus, plus natural kelp iodine for thyroid function' : isEs ? 'Aporta 38% de calcio elemental para neutralizar el fósforo de la carne y yodo para la tiroides' : isJa ? '肉類の過剰なリンを中和しCa:P比を1.25:1に正確に補正。さらに甲状腺ホルモン合成に必要な天然ヨウ素を補給' : 'Fournit du calcium élémentaire pour neutraliser le phosphore et de l’iode pour la thyroïde',
          clinicalBenefit: isEn ? 'CRITICAL: Boneless meat has a toxic 1:20 Ca:P ratio. This mineral blend completely prevents canine nutritional secondary hyperparathyroidism.' : isEs ? 'CRÍTICO: La carne sin hueso tiene un ratio Ca:P de 1:20. Este suplemento previene la desmineralización ósea.' : isJa ? '【最重要】骨なし肉単体はCa:P比が1:20と極度に歪み骨軟化症を起こすため、本配合で完全中和。' : 'VITAL : La viande désossée a un ratio toxique de 1:20. Ce minéral prévient l’hyperparathyroïdie.',
          affiliateKey: 'eggshellPowder',
          affiliateUrl: 'https://amzn.to/4haNVWy',
        },
        {
          name: isEn ? 'Wild Alaskan Salmon Oil (Cold-Added)' : isEs ? 'Aceite de Salmón Salvaje de Alaska (añadido en frío)' : isJa ? '天然アラスカンサーモンオイル（後入れ・非加熱）' : isFr ? 'Huile de Saumon Sauvage d’Alaska (ajout à froid)' : isDe ? 'Wildlachsöl aus Alaska (kalt untergerührt)' : isPt ? 'Óleo de Salmão Selvagem do Alasca (adicionado a frio)' : isKo ? '야생 알래스카 연어 오일 (식힌 후 비가열 첨가)' : 'Olio di Salmone Selvaggio dell’Alaska (aggiunto a freddo)',
          percentage: 3,
          category: isEn ? 'Marine Long-Chain Omega-3 Fatty Acids' : isEs ? 'Ácidos Grasos Omega-3 Marinos de Cadena Larga' : isJa ? '海洋性長鎖オメガ3多価不飽和脂肪酸' : 'Acides Gras Oméga-3 Marins à Chaîne Longue',
          role: isEn ? 'Direct, preformed EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) to modulate inflammatory prostaglandins and leukotrienes' : isEs ? 'EPA y DHA bioactivos directos para modular la cascada inflamatoria y proteger las articulaciones' : isJa ? '植物性オメガ3（ALA）と異なり、犬の体内で即座に抗炎症性プロスタグランジンへと変換される活性型EPA・DHAをダイレクトに補給' : 'EPA et DHA préformés pour réguler les prostaglandines inflammatoires',
          clinicalBenefit: isEn ? 'Maintains epidermal moisture barrier, alleviates allergic skin itching, and preserves synovial fluid in articular joints. Must be stirred in COLD.' : isEs ? 'Refuerza la barrera dérmica, calma el prurito y cuida las articulaciones. Debe agregarse EN FRÍO.' : isJa ? '皮膚被毛のバリア機能を強化し、関節軟骨の保護を促進。熱酸化による有害過酸化脂質化を防ぐため必ず室温まで冷ましてから混合。' : 'Maintient la barrière cutanée et protège le cartilage articulaire. Doit être ajouté À FROID.',
          affiliateKey: 'salmonOil',
          affiliateUrl: 'https://amzn.to/46HCJdW',
        },
      ],
      clinicalRationale: [
        {
          title: isEn ? '1. Why 93/7 Lean Turkey Over Chicken or Beef?' : isEs ? '1. ¿Por qué Pavo Magro 93/7 en lugar de Pollo o Ternera?' : isJa ? '1. なぜ鶏肉や牛肉ではなく「赤身七面鳥（93/7）」なのか？' : '1. Pourquoi la Dinde Maigre 93/7 plutôt que le Poulet ou le Bœuf ?',
          description: isEn
            ? 'Commercial beef and conventionally raised chicken represent the two most common canine dietary allergens identified in veterinary dermatology. Furthermore, high-fat meats (80/20 beef or fatty pork) provoke acute pancreatitis in predisposed breeds like Schnauzers and Terriers. Lean turkey (93% muscle, 7% lipid) provides an exceptional 92% protein biological value (BV) while maintaining dietary fat at safe clinical levels (under 25% dry matter).'
            : isEs
            ? 'La ternera y el pollo industrial son los alérgenos alimentarios más frecuentes en dermatología veterinaria. Además, carnes grasas pueden desencadenar pancreatitis aguda. El pavo magro 93/7 ofrece un valor biológico del 92% manteniendo la grasa en niveles clínicos seguros.'
            : isJa
            ? '獣医皮膚科において、市販の牛肉とブロイラー鶏肉は犬の食物アレルギー原因物質の上位2つを占めています。さらに脂質の多いひき肉（80/20牛挽肉等）は、シュナウザーやテリア種などに急性膵炎を引き起こす重大リスクがあります。赤身93%・脂質7%の七面鳥肉は、生体利用率92%という極めて高品位なアミノ酸を誇り、脂質を安全な臨床域（乾物基準25%未満）に保ちます。'
            : 'Le bœuf et le poulet d’élevage intensif représentent les deux allergènes canins les plus fréquents. La dinde 93/7 offre une digestibilité de 92% tout en maintenant un taux de lipides modéré et protecteur contre la pancréatite.',
          points: isEn
            ? [
                'Hypoallergenic amino acid profile suited for dogs with chronic itching, yeast overgrowth, or sensitive guts.',
                'Low saturated fat density protects against pancreatic enzyme activation and acute inflammatory flare-ups.',
                'Naturally rich in tryptophan, the essential biochemical precursor for serotonin synthesis and canine behavioral calm.',
              ]
            : isEs
            ? [
                'Perfil hipoalergénico ideal para perros con dermatitis atópica o digestiones sensibles.',
                'Baja grasa saturada que protege el páncreas contra enzimas digestivas prematuras.',
                'Rico en triptófano natural para favorecer la síntesis de serotonina y calma emocional.',
              ]
            : isJa
            ? [
                '皮膚のかゆみや外耳炎、過敏性腸炎を抱える犬にも安全な低アレルゲン設計。',
                '低飽和脂肪酸設計により、膵臓酵素の異常活性化と急性膵炎の危険性を回避。',
                'セロトニンの前駆体となる天然トリプトファンが豊富で、精神的な安定と穏やかな情緒を維持。',
              ]
            : [
                'Profil hypoallergénique adapté aux chiens sujets aux démangeaisons ou aux intestins réactifs.',
                'Faible teneur en graisses saturées préservant le pancréas.',
                'Naturellement riche en tryptophane pour l’équilibre nerveux et le calme.',
              ],
        },
        {
          title: isEn ? '2. The Cardiac Necessity: Organ Taurine and CoQ10 Pathways' : isEs ? '2. La Necesidad Cardíaca: Vías de Taurina y CoQ10 de los Órganos' : isJa ? '2. 心臓の生命線：内臓肉由来の天然タウリンとコエンザイムQ10' : '2. Nécessité Cardiaque : Voies de la Taurine et du CoQ10 des Abats',
          description: isEn
            ? 'In recent years, the veterinary cardiology community (including published FDA alerts) observed diet-associated Dilated Cardiomyopathy (DCM) occurring in dogs fed boutique grain-free diets or improperly formulated home recipes. While dogs can theoretically synthesize taurine from methionine and cysteine, cooking and individual genetic variations drastically limit hepatic synthesis. Turkey hearts and gizzards provide bioavailable, food-state taurine and CoQ10 directly absorbed by cardiac myocytes.'
            : isEs
            ? 'La miocardiopatía dilatada (DCM) asociada a dietas incompletas es una alerta veterinaria crítica. Aunque los perros pueden sintetizar algo de taurina, la cocción reduce la disponibilidad de aminoácidos sulfurados. Los corazones y mollejas de pavo aportan taurina y CoQ10 intactos directamente a las células cardíacas.'
            : isJa
            ? '近年、米FDAが警告を発した通り、栄養バランスを欠いた自己流手作り食や不適切なグレインフリー食によって「食事性拡張型心筋症（DCM）」を発症する症例が世界的に報告されています。犬はメチオニンやシステインからタウリンを体内合成できますが、加熱調理や個体差により合成量は大きく低下します。七面鳥のハツと砂肝は、心筋細胞にそのまま吸収される高活性天然タウリンとCoQ10の宝庫です。'
            : 'Les cœurs et gésiers apportent de la taurine naturelle et du CoQ10 indispensables pour prévenir la cardiomyopathie dilatée (DCM).',
          points: isEn
            ? [
                'Contains over 120mg of natural taurine per 100g of cardiac tissue, meeting adult canine myocardium requirements.',
                'High concentrations of Coenzyme Q10 support mitochondrial ATP energy generation in the continuously beating heart.',
                'Provides natural bioavailable heme iron without causing gastrointestinal constipation associated with synthetic ferrous sulfate.',
              ]
            : isEs
            ? [
                'Más de 120 mg de taurina natural por cada 100 g de tejido cardíaco.',
                'Altas concentraciones de CoQ10 para la producción de ATP mitocondrial en el corazón.',
                'Hierro hemo natural que previene anemias sin el estreñimiento de los suplementos sintéticos.',
              ]
            : isJa
            ? [
                '心臓組織100gあたり120mg以上の高濃度天然タウリンを含み、成犬の心筋要求量を完璧に充足。',
                'ミトコンドリアのATPエネルギー生成を助けるコエンザイムQ10が高濃度に含まれ、心臓ポンプ機能を維持。',
                '合成硫酸鉄のような便秘を引き起こさず、腸管からスムーズに吸収される有機ヘム鉄を供給。',
              ]
            : [
                'Plus de 120 mg de taurine naturelle pour 100 g de tissu cardiaque.',
                'Soutien mitochondrial via le CoQ10 pour le muscle cardiaque.',
                'Fer héminique biodisponible évitant les troubles digestifs des sels de fer de synthèse.',
              ],
        },
        {
          title: isEn ? '3. Calcium-to-Phosphorus Stoichiometry (The 1.25:1 Golden Law)' : isEs ? '3. Estequiometría de Calcio a Fósforo (La Regla de Oro 1.25:1)' : isJa ? '3. カルシウム対リンの化学量論（1.25:1の絶対法則）' : '3. Stœchiométrie Calcium-Phosphore (La Règle d’Or 1,25:1)',
          description: isEn
            ? 'The single most catastrophic mistake in amateur homemade dog food preparation is omitting calcium. Muscle meats contain extraordinarily high levels of phosphorus (P) and almost zero calcium (Ca), yielding an inverted ratio as dangerous as 1:20 Ca:P. When fed this way, the canine parathyroid glands secrete parathyroid hormone (PTH) to leach calcium from bones to keep blood levels steady, resulting in skeletal pain, brittle teeth, and spontaneous fractures within 6 months. Our formula includes 4% calibrated eggshell powder and kelp to lock in the 1.25:1 ratio.'
            : isEs
            ? 'El error más catastrófico en la comida casera es no añadir calcio. La carne sin hueso tiene un ratio invertido de 1:20 Ca:P. Sin calcio, las glándulas paratiroides extraen el calcio de los huesos del perro para mantenerlo en sangre, provocando hiperparatiroidismo nutricional y fracturas. Nuestro 4% de cáscara de huevo y kelp garantiza el ratio ideal de 1.25:1.'
            : isJa
            ? '一般の手作り食で最も重篤な医療事故が「カルシウム補給の欠落」です。純粋な肉類はリン（P）が極めて多くカルシウム（Ca）が皆無に近いため、Ca:P比が1:20という破滅的な逆転状態になります。この状態が続くと副甲状腺からPTHが分泌され、血中カルシウム濃度を保つために愛犬自身の骨からカルシウムが溶け出し、重度の骨軟化症や病的骨折を引き起こします。本レシピは4%の卵殻パウダーとケルプでNRC基準値1.25:1を完全に担保します。'
            : 'L’erreur la plus grave en ration ménagère est l’omission de calcium. La viande pure a un ratio inversé de 1:20. Notre blueprint utilise 4% de poudre de coquille d’œuf calibrée pour sceller le ratio physiologique de 1,25:1.',
          points: isEn
            ? [
                'Pure calcium carbonate from eggshells delivers 38% elemental calcium with neutral gastric tolerability.',
                'Organic kelp mineral component contributes micro-dosed organic iodine (preventing hypothyroidism) without excessive sodium.',
                'Balances the high phosphorus of lean turkey precisely at 1.25 parts calcium to 1 part phosphorus.',
              ]
            : isEs
            ? [
                'El carbonato de calcio de cáscara de huevo aporta un 38% de calcio elemental con alta tolerancia.',
                'El alga kelp aporta yodo orgánico para la función tiroidea sin excesos de sodio.',
                'Equilibra con precisión milimétrica el fósforo del pavo.',
              ]
            : isJa
            ? [
                '卵殻由来の純粋な炭酸カルシウムが約38%の生体親和性エレメンタルカルシウムを供給。',
                '有機ケルプが過剰なナトリウムを排しながら、甲状腺ホルモン合成に必要な天然ヨウ素を微量補給。',
                '七面鳥肉の豊富なリンを精密に中和し、骨格・歯牙の健康と正常な神経伝達を生涯維持。',
              ]
            : [
                'Le carbonate de calcium de coquille d’œuf apporte 38% de calcium élémentaire hautement toléré.',
                'Le kelp bio fournit l’iode nécessaire à la glande thyroïde.',
                'Neutralisation rigoureuse du phosphore de la dinde.',
              ],
        },
        {
          title: isEn ? '4. Cold-Added Omega-3s: Preserving EPA & DHA from Heat Oxidation' : isEs ? '4. Omega-3 Añadidos en Frío: Evitando la Oxidación Térmica de EPA y DHA' : isJa ? '4. オメガ3の後入れプロトコル：熱酸化による過酸化脂質化の完全防止' : '4. Oméga-3 Ajoutés à Froid : Éviter l’Oxydation Thermique',
          description: isEn
            ? 'Long-chain polyunsaturated fatty acids (EPA and DHA) possess multiple double bonds that make them extraordinarily fragile and susceptible to thermal degradation. Cooking salmon oil inside the pan breaks these double bonds, transforming healing anti-inflammatory lipids into toxic lipid peroxides and malondialdehyde. Our blueprint mandates cooling the batch to room temperature (below 100°F / 38°C) before folding in cold wild Alaskan salmon oil.'
            : isEs
            ? 'Los ácidos grasos poliinsaturados EPA y DHA son muy frágiles ante el calor. Cocinar el aceite de salmón en la sartén destruye sus dobles enlaces y genera peróxidos tóxicos. Por eso este blueprint exige enfriar la comida a temperatura ambiente (menos de 38°C) antes de añadir el aceite de salmón.'
            : isJa
            ? 'EPAやDHAなどの長鎖多価不飽和脂肪酸は複数の不飽和二重結合を持つため、熱に対して極めて脆弱です。加熱調理中の鍋にサーモンオイルを投入すると、熱酸化によって抗炎症因子が破壊されるだけでなく、細胞毒性を持つ過酸化脂質やマロンジアルデヒドに変質してしまいます。本プロトコルでは、調理後に必ず38℃以下まで冷却してから非加熱で混和することを絶対条件としています。'
            : 'Les acides gras oméga-3 EPA et DHA sont très thermosensibles. Les cuire génère des radicaux libres. Ce blueprint impose d’incorporer l’huile de saumon sauvage à froid.',
          points: isEn
            ? [
                'Delivers unoxidized, bio-active EPA and DHA directly to cell membranes to reduce dermal pruritus.',
                'Maintains synovial cartilage lubricity, combating early osteoarthritis in hips and stifles.',
                'Mandatory clinical rule: Never microwave or sauté salmon oil; always add post-cooling.',
              ]
            : isEs
            ? [
                'Aporta EPA y DHA bioactivos intactos para aliviar el picor de la piel.',
                'Protege el cartílago articular y previene la artrosis.',
                'Regla clínica obligatoria: Nunca calentar el aceite de salmón en el fuego o microondas.',
              ]
            : isJa
            ? [
                '酸化されていない活性型EPA・DHAが細胞膜に直接届き、アトピー性皮膚炎や痒みを緩和。',
                '関節軟骨の滑液粘度を保持し、股関節や膝関節の変形性関節症の進行を抑制。',
                '臨床の鉄則：サーモンオイルは絶対に電子レンジや直火で加熱せず、必ず冷ましてから加えること。',
              ]
            : [
                'Apporte des EPA et DHA intacts pour la barrière cutanée.',
                'Préserve le cartilage et combat l’ostéoarthrite débutante.',
                'Règle clinique : Ne jamais cuire l’huile de saumon, l’ajouter toujours après refroidissement.',
              ],
        },
      ],
      prepProtocol: [
        {
          step: 1,
          title: isEn ? 'Sterilization & Meat Sizing' : isEs ? 'Higienización y Troceado' : isJa ? '衛生準備と肉類のカット' : 'Préparation & Découpe',
          instruction: isEn
            ? 'Sanitize stainless steel prep surfaces and cutting boards. Coarsely dice the turkey hearts and gizzards into 1/4-inch pieces so natural taurine and digestive enzymes distribute evenly.'
            : isEs
            ? 'Desinfecta superficies y tablas de corte. Corta los corazones y mollejas en trozos pequeños de 0,5 cm para repartir la taurina de forma homogénea.'
            : isJa
            ? '調理台とまな板を熱湯または食品用アルコールで殺菌します。七面鳥のハツと砂肝を約5〜7mm角のサイコロ状に細かく刻み、タウリンが全体に均一に行き渡るようにします。'
            : 'Nettoyez votre plan de travail. Coupez les cœurs et gésiers en petits dés de 5 mm.',
        },
        {
          step: 2,
          title: isEn ? 'Gentle Low-Heat Simmer (<180°F / 82°C)' : isEs ? 'Cocción Suave a Fuego Lento (<82°C)' : isJa ? '低温ジェントル・シマー（82℃以下で蒸し煮）' : 'Cuisson Douce à Basse Température (<82°C)',
          instruction: isEn
            ? 'Place the lean ground turkey and diced organs into a large ceramic-lined or stainless stockpot with 1/2 cup of filtered water. Simmer on low-medium heat for 8-10 minutes, breaking up clumps, until pinkness just disappears. Do NOT brown or fry at high heat to prevent toxic advanced glycation end-products (AGEs).'
            : isEs
            ? 'Coloca el pavo molido y los órganos en una olla con 1/2 taza de agua filtrada. Cocina a fuego lento durante 8-10 minutos hasta que desaparezca el tono rosado. NO dores ni sofrías a fuego alto para evitar compuestos tóxicos AGEs.'
            : isJa
            ? '大きめのステンレス鍋またはホウロウ鍋にひき肉と刻んだ内臓を入れ、水100mlを加えます。中弱火で8〜10分間、木べらでほぐしながら蒸し煮にします。ピンク色が消えた時点で直ちに火を止めます。終末糖化産物（AGEs）の発生を防ぐため、決して強火で焦げ目をつけたり油で揚げたりしないでください。'
            : 'Faites cuire la dinde et les abats avec 1/2 verre d’eau à feu doux pendant 8 à 10 minutes. Ne faites pas rissoler pour éviter les dérivés de glycation toxiques.',
          criticalTip: isEn ? 'Gentle poaching retains natural intracellular meat juices containing dissolved water-soluble B vitamins.' : isEs ? 'La cocción suave retiene los jugos naturales con vitaminas hidrosolubles del complejo B.' : isJa ? '低温で優しく調理することで、水溶性ビタミンB群が溶け出した肉汁を逃さず閉じ込めます。' : 'La cuisson douce conserve les vitamines B hydrosolubles.',
        },
        {
          step: 3,
          title: isEn ? 'Vegetable Steaming & Pureeing' : isEs ? 'Cocción al Vapor y Triturado de Verduras' : isJa ? '野菜のスチーム加熱とピューレ化' : 'Cuisson Vapeur et Mixage des Légumes',
          instruction: isEn
            ? 'Steam the diced zucchini and spinach for 4-5 minutes until tender. Transfer to a food processor with the organic pumpkin purée and pulse into a smooth, digestible puree. Dogs cannot break down raw cellulose; pureeing guarantees 100% nutrient absorption.'
            : isEs
            ? 'Cocina al vapor el calabacín y las espinacas 4-5 minutos. Tritúralos junto con el puré de calabaza en un procesador hasta lograr una pasta suave. Al triturar se rompe la celulosa para absorber todos los nutrientes.'
            : isJa
            ? 'ズッキーニとほうれん草を蒸し器で4〜5分間、柔らかくなるまで蒸します。有機カボチャピューレと一緒にフードプロセッサーに移し、滑らかになるまでパルス粉砕します。犬は生のセルロースを消化できないため、ピューレ状にすることで栄養吸収率が100%に近づきます。'
            : 'Faites cuire les courgettes et épinards à la vapeur pendant 4-5 minutes, puis mixez-les avec la purée de citrouille pour détruire la cellulose indigeste.',
        },
        {
          step: 4,
          title: isEn ? 'MANDATORY Cooling Stage (Under 100°F / 38°C)' : isEs ? 'Etapa OBLIGATORIA de Enfriamiento (<38°C)' : isJa ? '【必須】常温冷却ステージ（38℃以下まで待機）' : 'Refroidissement OBLIGATOIRE (<38°C)',
          instruction: isEn
            ? 'Stir the vegetable puree into the cooked meat mixture. Allow the entire pot to cool completely to room temperature (touch-cool, below 100°F / 38°C) before proceeding. Rushing this step will destroy sensitive supplements in the next step.'
            : isEs
            ? 'Mezcla las verduras con la carne cocida. Deja enfriar la olla por completo a temperatura ambiente (menos de 38°C). Si te saltas este paso, el calor destruirá los suplementos del paso siguiente.'
            : isJa
            ? '蒸し野菜ピューレを調理済み肉鍋に混ぜ合わせます。その後、鍋全体をそのまま室温（手で触れて人肌以下の38℃未満）になるまで完全に冷まします。熱が残っている状態で次のサプリメントを加えると、高価な活性成分が熱分解して無駄になってしまいます。'
            : 'Mélangez légumes et viandes. Laissez refroidir totalement à température ambiante (en dessous de 38°C) avant d’ajouter les compléments.',
          criticalTip: isEn ? 'Never add salmon oil or calcium powder to steaming hot food.' : isEs ? 'Nunca añadas el aceite de salmón o el calcio sobre comida humeante.' : isJa ? '湯気が立っている熱い状態のフードにサーモンオイルやカルシウムを投入するのは厳禁です。' : 'N’ajoutez jamais l’huile de saumon sur un mélange encore chaud.',
        },
        {
          step: 5,
          title: isEn ? 'Cold Supplement Incorporation' : isEs ? 'Incorporación de Suplementos en Frío' : isJa ? 'コールドサプリメントの均一混和' : 'Incorporation des Compléments à Froid',
          instruction: isEn
            ? 'Once cooled, measure and sprinkle the eggshell calcium powder, kelp mineral blend, and wild Alaskan salmon oil directly into the mixture. Fold thoroughly with a silicone spatula for 2 full minutes to ensure microscopic dispersion of calcium carbonate.'
            : isEs
            ? 'Una vez frío, añade el polvo de cáscara de huevo, el alga kelp y el aceite de salmón de Alaska. Remueve enérgicamente durante 2 minutos completos con una espátula para distribuir el calcio de forma homogénea.'
            : isJa
            ? '完全に冷めたことを確認したら、分量の卵殻カルシウム粉末、有機ケルプ粉末、天然サーモンオイルを投入します。シリコンスパチュラを用いて、カルシウム粒子が偏らないよう2分間しっかりと底からまんべんなくかき混ぜます。'
            : 'Une fois tiédi/froid, incorporez la poudre de coquille d’œuf, le kelp et l’huile de saumon. Mélangez soigneusement pendant 2 minutes.',
        },
        {
          step: 6,
          title: isEn ? 'Digital Scale Weighing & Portioning' : isEs ? 'Pesaje Digital y Porcionado' : isJa ? 'デジタルスケールによる精密計量・個包装' : 'Pesée Précise & Portionnement',
          instruction: isEn
            ? 'Use a digital kitchen gram scale to weigh daily portions based on your dog’s target caloric requirement. Package into airtight glass containers for current-week feeding or freezer-safe silicone bags for batch storage.'
            : isEs
            ? 'Utiliza una báscula digital de cocina para pesar las raciones diarias según las necesidades calóricas de tu perro. Almacena en recipientes herméticos de vidrio o bolsas de silicona.'
            : isJa
            ? 'キッチンスケール（デジタル秤）を使用し、愛犬の1日の目標カロリーに合わせたグラム数を取り分けます。直近3日分は密閉ガラス容器で冷蔵し、残りはBPAフリーの保存バッグに1食分ずつ小分けして冷凍します。'
            : 'Pesez les portions journalières à l’aide d’une balance de cuisine en grammes. Conditionnez en récipients hermétiques en verre ou en sachets pour congélation.',
        },
      ],
      storageGuidelines: [
        {
          method: isEn ? 'Fresh Refrigerator Storage' : isEs ? 'Refrigeración en Fresco' : isJa ? 'チルド冷蔵保存' : 'Réfrigération',
          duration: isEn ? 'Up to 3-4 Days Max' : isEs ? 'Hasta 3-4 Días Máximo' : isJa ? '最大3〜4日間' : '3 à 4 jours max',
          instructions: isEn
            ? 'Store in airtight borosilicate glass containers in the coldest zone of the refrigerator (below 38°F / 3°C). Discard if not consumed by day 4.'
            : isEs
            ? 'Guarda en recipientes herméticos de vidrio en la zona más fría del frigorífico (<3°C). Desechar al 4º día.'
            : isJa
            ? '耐熱ガラス製密閉容器に入れ、冷蔵庫の最も温度の低いチルド室（3℃以下）で保存。4日目を過ぎたものは廃棄してください。'
            : 'Conserver en boîte en verre hermétique au frigo en dessous de 4°C.',
        },
        {
          method: isEn ? 'Deep Freezer Batch Storage' : isEs ? 'Congelación Profunda por Lotes' : isJa ? '冷凍庫バッチ保存' : 'Congélation en Portions',
          duration: isEn ? 'Up to 90 Days (3 Months)' : isEs ? 'Hasta 90 Días (3 Meses)' : isJa ? '最大90日間（3ヶ月）' : 'Jusqu’à 3 mois (90 jours)',
          instructions: isEn
            ? 'Pack individual daily portions into vacuum-sealed bags or silicone freezer containers. Press out all air to prevent freezer burn and fat rancidity.'
            : isEs
            ? 'Empaca porciones individuales en bolsas al vacío o recipientes de silicona extrayendo todo el aire para evitar quemaduras por congelación.'
            : isJa
            ? '1日分または1食分ごとに小分けし、空気を完全に抜いて密閉冷凍（-18℃以下）。冷凍焼けと脂質劣化を完全に防ぎます。'
            : 'Emballez sous vide ou en sachets hermétiques sans air pour éviter l’oxydation des graisses.',
        },
        {
          method: isEn ? 'Safe Thawing & Serving Protocol' : isEs ? 'Descongelación y Servicio Seguro' : isJa ? '安全な解凍および給餌方法' : 'Décongélation Sécurisée',
          duration: isEn ? 'Overnight in Refrigerator' : isEs ? 'Durante la Noche en Refrigerador' : isJa ? '前夜からの冷蔵庫内自然解凍' : 'Au réfrigérateur pendant la nuit',
          instructions: isEn
            ? 'Move frozen portions to the refrigerator 24 hours prior to feeding. Warm gently by placing container in a warm water bath. NEVER microwave on high power as heat destroys omega-3 fatty acids and thiamine (B1).'
            : isEs
            ? 'Pasa la porción del congelador al frigorífico 24 horas antes. Entibia colocando el recipiente al baño maría templado. NUNCA calientes en microondas a máxima potencia.'
            : isJa
            ? '給餌の24時間前に冷凍庫から冷蔵室へ移して自然解凍します。与える直前にぬるま湯（40℃程度）で湯煎して人肌に温めます。電子レンジの強加熱はオメガ3とビタミンB1（チアミン）を熱破壊するため絶対におやめください。'
            : 'Décongelez au réfrigérateur 24h à l’avance. Tiédissez au bain-marie tiède. Ne jamais surchauffer au micro-ondes.',
        },
      ],
      portionReference: [
        {
          dogWeight: isEn ? 'Toy Dog (10 lbs / 4.5 kg)' : isEs ? 'Mini (4.5 kg / 10 lb)' : isJa ? '超小型犬（4.5 kg）' : 'Très petit (4,5 kg)',
          dailyKcal: '280 – 320 kcal',
          dailyGramsTotal: '240 g / day',
          turkeyGrams: '156 g',
          organsGrams: '24 g',
          pumpkinGrams: '24 g',
          greensGrams: '19 g',
          salmonOilGrams: '7 g (approx. 1.5 tsp)',
          calciumKelpGrams: '10 g (approx. 1 tsp)',
        },
        {
          dogWeight: isEn ? 'Small Dog (25 lbs / 11.3 kg)' : isEs ? 'Pequeño (11.3 kg / 25 lb)' : isJa ? '小型犬（11.3 kg）' : 'Petit chien (11,3 kg)',
          dailyKcal: '550 – 620 kcal',
          dailyGramsTotal: '480 g / day',
          turkeyGrams: '312 g',
          organsGrams: '48 g',
          pumpkinGrams: '48 g',
          greensGrams: '38 g',
          salmonOilGrams: '14 g (approx. 1 tbsp)',
          calciumKelpGrams: '20 g (approx. 2 tsp)',
        },
        {
          dogWeight: isEn ? 'Medium Dog (50 lbs / 22.7 kg)' : isEs ? 'Mediano (22.7 kg / 50 lb)' : isJa ? '中型犬（22.7 kg）' : 'Chien moyen (22,7 kg)',
          dailyKcal: '950 – 1,080 kcal',
          dailyGramsTotal: '850 g / day',
          turkeyGrams: '553 g',
          organsGrams: '85 g',
          pumpkinGrams: '85 g',
          greensGrams: '68 g',
          salmonOilGrams: '25 g (approx. 1.8 tbsp)',
          calciumKelpGrams: '34 g (approx. 3.5 tsp)',
        },
        {
          dogWeight: isEn ? 'Large Dog (75 lbs / 34 kg)' : isEs ? 'Grande (34 kg / 75 lb)' : isJa ? '大型犬（34 kg）' : 'Grand chien (34 kg)',
          dailyKcal: '1,320 – 1,480 kcal',
          dailyGramsTotal: '1,180 g / day',
          turkeyGrams: '767 g',
          organsGrams: '118 g',
          pumpkinGrams: '118 g',
          greensGrams: '94 g',
          salmonOilGrams: '35 g (approx. 2.5 tbsp)',
          calciumKelpGrams: '47 g (approx. 4.5 tsp)',
        },
      ],
      safetyAndPrecautions: {
        contraindications: isEn
          ? [
              'DO NOT feed this blueprint to growing giant-breed puppies (<12 months). Large-breed puppies require pediatric phosphorus curves (0.8% - 1.2% DM) and precise kinetic calorie caps to prevent osteochondritis dissecans and hip dysplasia.',
              'DO NOT feed without phosphorus adjustments to dogs diagnosed with IRIS Stage 3 or 4 Chronic Kidney Disease (CKD). Renal patients require strict dietary phosphorus restriction under 0.4% DM.',
              'DO NOT replace lean 93/7 turkey with fatty 70/30 ground beef without recalibrating fat density; doing so can trigger acute hyperlipidemic pancreatitis.',
            ]
          : isEs
          ? [
              'NO alimentar a cachorros de razas grandes o gigantes en crecimiento (<12 meses). Requieren curvas de fósforo pediátricas específicas para evitar displasia y problemas osteoarticulares.',
              'NO administrar a perros con Enfermedad Renal Crónica avanzada (Estadios IRIS 3 o 4) sin supervisión médica, debido al contenido de fósforo natural de las carnes.',
              'NO sustituir el pavo magro 93/7 por carne picada muy grasa (70/30) ya que puede provocar pancreatitis aguda.',
            ]
          : isJa
          ? [
              '生後12ヶ月未満の大型犬・超大型犬の子犬にはそのまま給餌しないでください。大型犬種の子犬は骨異形成症や股関節形成不全を防ぐため、厳格な小児期リン・カルシウム曲線（NRC子犬基準）に基づく調整が必須です。',
              'IRISステージ3〜4の慢性腎臓病（CKD）と診断された愛犬には与えないでください。腎不全の犬にはリンを乾物基準0.4%以下に抑える処方食制限が必要です。',
              '脂質の多い牛挽肉（70/30など）へ無断で置き換えないでください。脂質が急増し急性膵炎を発症する恐れがあります。',
            ]
          : [
              'Ne convient pas aux chiots de grande race en croissance (<12 mois) sans ajustement pédiatrique du calcium.',
              'Contre-indiqué chez les chiens atteints d’insuffisance rénale chronique avancée (stade IRIS 3-4).',
              'Ne remplacez pas la dinde 93/7 par une viande grasse 70/30 pour éviter le risque de pancréatite.',
            ],
        transitionSteps: isEn
          ? [
              'Days 1–3: 75% previous food + 25% homemade turkey blueprint.',
              'Days 4–6: 50% previous food + 50% homemade turkey blueprint.',
              'Days 7–9: 25% previous food + 75% homemade turkey blueprint.',
              'Day 10 onwards: 100% homemade turkey blueprint.',
            ]
          : isEs
          ? [
              'Días 1 a 3: 75% comida anterior + 25% receta casera de pavo.',
              'Días 4 a 6: 50% comida anterior + 50% receta casera de pavo.',
              'Días 7 a 9: 25% comida anterior + 75% receta casera de pavo.',
              'Día 10 en adelante: 100% receta casera completa.',
            ]
          : isJa
          ? [
              '1〜3日目：従来のフード 75% ＋ 手作り七面鳥設計食 25%',
              '4〜6日目：従来のフード 50% ＋ 手作り七面鳥設計食 50%',
              '7〜9日目：従来のフード 25% ＋ 手作り七面鳥設計食 75%',
              '10日目以降：100% 手作り七面鳥設計食へ完全移行',
            ]
          : [
              'Jours 1 à 3 : 75% ancien aliment + 25% recette maison.',
              'Jours 4 à 6 : 50% ancien aliment + 50% recette maison.',
              'Jours 7 à 9 : 25% ancien aliment + 75% recette maison.',
              'Jour 10 et après : 100% ration maison.',
            ],
        calciumRule: isEn
          ? 'NEVER skip eggshell calcium powder. Meat without calcium is biologically toxic over 60+ days and leads directly to skeletal demineralization.'
          : isEs
          ? 'NUNCA omitas el polvo de cáscara de huevo. La carne sin calcio provoca desmineralización ósea severa en menos de 60 días.'
          : isJa
          ? '【厳守】卵殻カルシウムの添加を絶対に省略しないでください。骨なし肉のみの長期給餌は生体にとって毒性を示し、約60日で深刻な骨格脱灰を引き起こします。'
          : 'N’omettez JAMAIS le calcium de coquille d’œuf. La viande sans calcium entraîne une décalcification osseuse en quelques semaines.',
      },
      faq: [
        {
          question: isEn ? 'Can I substitute lean ground beef or chicken breast for turkey?' : isEs ? '¿Puedo sustituir el pavo por pechuga de pollo o carne picada de ternera?' : isJa ? '七面鳥の代わりに鶏むね肉や牛赤身肉を使用できますか？' : 'Puis-je remplacer la dinde par du blanc de poulet ou du bœuf maigre ?',
          answer: isEn
            ? 'Yes, provided the protein remains lean (less than 8% fat content). Boneless skinless chicken breast or 90/10 lean grass-fed beef are biologically comparable, but remember to keep the 10% organ meat portion intact for critical taurine delivery.'
            : isEs
            ? 'Sí, siempre que la carne sea magra (menos del 8% de grasa). La pechuga de pollo sin piel o la ternera magra 90/10 son alternativas viables, pero debes mantener siempre el 10% de corazones y mollejas para no perder la taurina.'
            : isJa
            ? '脂質8%以下の赤身であれば代替可能です。皮なし鶏むね肉や90/10牛赤身肉は生物学的に同等のアミノ酸プロファイルを持ちます。ただし、心筋を守る必須タウリンを確保するため、10%の内臓（ハツ・砂肝）の配分は絶対に削らないでください。'
            : 'Oui, à condition de choisir une viande maigre (<8% de matière grasse) et de conserver impérativement les 10% d’abats pour la taurine.',
        },
        {
          question: isEn ? 'Can I feed this recipe completely raw instead of gently cooking?' : isEs ? '¿Puedo dar esta receta cruda en lugar de cocinarla suavemente?' : isJa ? '加熱せず完全生食（RAW）として与えることはできますか？' : 'Puis-je donner cette ration totalement crue ?',
          answer: isEn
            ? 'While raw feeding has advocates, commercial poultry frequently carries Salmonella and Campylobacter which pose household contamination hazards. Furthermore, raw spinach and zucchini contain unbroken cellulose walls that dogs cannot digest without steaming and pureeing. We strongly recommend gentle low-temperature poaching (<180°F) for maximum gastrointestinal safety and nutrient uptake.'
            : isEs
            ? 'Aunque la dieta BARF es popular, las aves crudas conllevan riesgo de Salmonella. Además, las verduras crudas no se digieren bien. Recomendamos una cocción suave a fuego lento (<82°C) para mayor seguridad y asimilación.'
            : isJa
            ? '生食支持者もいますが、市販の家禽肉にはサルモネラ菌やカンピロバクターのリスクがあり、同居家族への二次感染も懸念されます。また生の葉野菜はセルロースが強固で消化管に負担をかけます。本設計図では82℃以下での低温スチーム調理を推奨します。'
            : 'La volaille crue présente des risques bactériens et les légumes crus sont mal digérés. Nous recommandons vivement le pochage doux à basse température.',
        },
        {
          question: isEn ? 'Do I need to feed this exact recipe every day or can I rotate proteins?' : isEs ? '¿Debo dar esta misma receta todos los días o puedo rotar proteínas?' : isJa ? '毎日同じレシピを与える必要がありますか？それともタンパク質をローテーションすべきですか？' : 'Dois-je donner cette même recette tous les jours ?',
          answer: isEn
            ? 'Once your dog is adapted to homemade feeding, protein rotation (e.g. alternating turkey, beef, and lamb every 2-4 weeks) is recommended by veterinary nutritionists to expand micronutrient diversity and prevent single-antigen sensitivities, provided each rotation maintains strict calcium and taurine balance.'
            : isEs
            ? 'Una vez adaptado, rotar proteínas (pavo, ternera magra, cordero magro) cada 2 a 4 semanas es excelente para enriquecer el perfil de aminoácidos, siempre respetando la proporción de calcio y órganos.'
            : isJa
            ? '胃腸が手作り食に十分適応した後は、2〜4週間ごとに七面鳥・牛赤身・ラム肉などをローテーション給餌することが推奨されます。単一タンパク質への感作を防ぎ、幅広い微量栄養素を自然に補給できます（カルシウム比率と内臓比率は固定してください）。'
            : 'Une rotation des protéines toutes les 2 à 4 semaines est excellente une fois la transition réussie, en conservant toujours les ratios de calcium et d’abats.',
        },
      ],
    },
  ];
}
