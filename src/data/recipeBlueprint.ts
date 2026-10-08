import type { Lang } from '../i18n/ui';

export const RECIPE_BLUEPRINT_SLUGS = [
  'turkey-pumpkin-maintenance',
  'beef-sweet-potato-vitality',
  'salmon-quinoa-joint-coat',
  'lamb-cranberry-gentle-gut',
] as const;

export type RecipeBlueprintSlug = (typeof RECIPE_BLUEPRINT_SLUGS)[number];

export interface BlueprintIngredient {
  name: string;
  percentage: number;
  category: string;
  role: string;
  clinicalBenefit: string;
  color: string;
  affiliateKey?: 'eggshellPowder' | 'salmonOil' | 'pumpkinPuree' | 'quinoa' | 'kelp';
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

export interface PortionReferenceRow {
  dogWeight: string;
  dailyKcal: string;
  dailyGramsTotal: string;
  mainProtein: string;
  organMeat: string;
  produceAndCarbs: string;
  supplements: string;
}

export interface RecipeBlueprint {
  slug: RecipeBlueprintSlug;
  name: string;
  shortDesc: string;
  badge: string;
  targetAudience: string;
  colorTheme: string;
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
  portionReference: PortionReferenceRow[];
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
  proteinCol: string;
  organCol: string;
  produceCol: string;
  supplementsCol: string;
  supplementsTitle: string;
  safetyTitle: string;
  contraindicationsTitle: string;
  transitionTitle: string;
  calculatorCtaTitle: string;
  calculatorCtaDesc: string;
  calculatorCtaBtn: string;
  prevBlueprint: string;
  nextBlueprint: string;
  backLink: string;
  titleSuffix: string;
  faqTitle: string;
}

export const RECIPE_BLUEPRINT_SECTION_I18N: Record<Lang, RecipeBlueprintSectionI18n> = {
  en: {
    title: 'Veterinary-Approved Homemade Recipe Blueprints',
    intro: 'Four complete, balanced clinical whole-food formulations engineered for adult canine maintenance, high vitality, senior joints, and sensitive digestion:',
    readMoreBtn: 'Read full recipe guide & preparation blueprint →',
    footerText: 'Use our free nutrition engine to convert any of these percentages into exact daily gram measurements for your dog’s weight:',
    footerLink: 'Launch Veterinary Feeding Calculator',
  },
  es: {
    title: 'Blueprints de Recetas Caseras Aprobadas por Veterinarios',
    intro: 'Cuatro formulaciones clínicas completas y equilibradas con alimentos integrales diseñadas para mantenimiento, vitalidad, articulaciones y estómagos sensibles:',
    readMoreBtn: 'Leer guía completa y blueprint de preparación →',
    footerText: 'Utiliza nuestra calculadora veterinaria para convertir cualquiera de estos porcentajes en gramos diarios exactos para tu perro:',
    footerLink: 'Abrir Calculadora Veterinaria',
  },
  ja: {
    title: '獣医師監修：手作りドッグフード基本設計図（4大ブループリント）',
    intro: '成犬の健康維持、高活動犬、シニア関節ケア、食物アレルギー対応まで、AAFCO・NRC基準を満たす4つの臨床手作り食レシピ：',
    readMoreBtn: 'レシピ詳細と調理・給餌ガイドを見る →',
    footerText: '愛犬の体重や活動量に合わせた正確な給餌グラム数を計算するには：',
    footerLink: '無料の給餌計算ツールを開く',
  },
  fr: {
    title: 'Recettes Maison Approuvées par les Vétérinaires (4 Blueprints)',
    intro: 'Quatre formulations cliniques complètes et équilibrées à base d’ingrédients frais : maintien, vitalité active, articulations & pelage, et digestion hypoallergénique :',
    readMoreBtn: 'Voir le guide complet et le protocole de préparation →',
    footerText: 'Utilisez notre outil de nutrition pour convertir ces pourcentages en grammes précis selon le poids de votre chien :',
    footerLink: 'Ouvrir le calculateur nutritionnel',
  },
  de: {
    title: 'Tierärztlich geprüfte Baupläne für selbstgemachtes Hundefutter',
    intro: 'Vier vollwertige klinische Frischekost-Rezepturen: Erhaltung, Aktivität, Gelenke & Fell sowie hypoallergene Darmschonkost:',
    readMoreBtn: 'Vollständige Rezepturanleitung & Zubereitung lesen →',
    footerText: 'Verwenden Sie unseren kostenlosen Rechner, um diese Prozentsätze in exakte Tagesgramme für das Gewicht Ihres Hundes umzurechnen:',
    footerLink: 'Tierärztlichen Futterrechner öffnen',
  },
  pt: {
    title: 'Receitas Caseiras Balanceadas Aprovadas por Veterinários (4 Blueprints)',
    intro: 'Quatro formulações clínicas completas com alimentos frescos para cães adultos: manutenção, vitalidade, articulações & pelagem, e digestão sensível:',
    readMoreBtn: 'Ver guia completo da receita e modo de preparo →',
    footerText: 'Use nossa calculadora veterinária para converter essas porcentagens em gramas diárias exatas para o peso do seu cão:',
    footerLink: 'Abrir Calculadora de Alimentação',
  },
  ko: {
    title: '수의사 검증 홈메이드 자연식 4대 레시피 설계도 (Blueprints)',
    intro: '성견 건강유지, 활동견 에너지, 관절 및 피모 케어, 알러지 케어까지 NRC/AAFCO 영양 기준을 충족하는 4가지 임상 자연식 레시피:',
    readMoreBtn: '상세 레시피 및 조리 가이드 보기 →',
    footerText: '반려견의 정확한 체중에 맞춰 일일 급여 그램(g)수를 계산하려면 무료 계산기를 활용하세요:',
    footerLink: '수의 영양 급여 계산기 열기',
  },
  it: {
    title: 'Ricette Casalinghe Approvate dai Veterinari (4 Blueprint)',
    intro: 'Quattro formulazioni cliniche complete e bilanciate con alimenti freschi: mantenimento, vitalità, articolazioni & pelo, e digestione ipoallergenica:',
    readMoreBtn: 'Leggi la guida completa alla ricetta e preparazione →',
    footerText: 'Usa la nostra calcolatrice veterinaria gratuita per convertire queste percentuali nei grammi esatti per il peso del tuo cane:',
    footerLink: 'Apri la Calcolatrice Alimentare',
  },
};

export const RECIPE_BLUEPRINT_PAGE_I18N: Record<Lang, RecipeBlueprintPageI18n> = {
  en: {
    badge: 'CLINICAL NUTRITION BLUEPRINT // NRC & AAFCO ADULT COMPLIANT',
    reviewedBy: 'Formulated & Reviewed by: Veterinary Canine Nutritionist (DVM, Board-Certified Pet Nutrition)',
    formulaTitle: 'The Complete Percentage Blueprint Formula',
    formulaSubtitle: 'Exact weight-based ratio breakdown. Zero synthetic fillers, chemical colors, or unverified premixes.',
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
    proteinCol: 'Muscle Meat Portion',
    organCol: 'Organ Meat Portion',
    produceCol: 'Produce / Carbs Portion',
    supplementsCol: 'Oils & Calcium Balancer',
    supplementsTitle: 'Essential Verified Ingredients & Supplements',
    safetyTitle: 'Veterinary Safety, Transition & Contraindications',
    contraindicationsTitle: 'Who Should NOT Eat This Specific Blueprint',
    transitionTitle: '10-Day Safe Gastrointestinal Transition Protocol',
    calculatorCtaTitle: 'Calculate Custom Grams for Your Dog’s Exact Age & Weight',
    calculatorCtaDesc: 'Our veterinary algorithm factors in neuter status, body condition score, and activity level to generate precise daily gram portions.',
    calculatorCtaBtn: 'Launch Veterinary Meal Planner →',
    prevBlueprint: 'Previous Recipe Blueprint',
    nextBlueprint: 'Next Recipe Blueprint',
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
    proteinCol: 'Carne Muscular',
    organCol: 'Vísceras y Órganos',
    produceCol: 'Verduras y Carbohidratos',
    supplementsCol: 'Aceites y Calcio',
    supplementsTitle: 'Ingredientes y Suplementos Esenciales Verificados',
    safetyTitle: 'Seguridad Veterinaria, Transición y Contraindicaciones',
    contraindicationsTitle: 'Quiénes NO deben consumir este blueprint sin ajustes',
    transitionTitle: 'Protocolo de Transición Gastrointestinal Segura (10 Días)',
    calculatorCtaTitle: 'Calcula Gramos Personalizados para la Edad y Peso de tu Perro',
    calculatorCtaDesc: 'Nuestro algoritmo veterinario considera esterilización, condición corporal y nivel de actividad física.',
    calculatorCtaBtn: 'Abrir Planificador Veterinario →',
    prevBlueprint: 'Receta Blueprint Anterior',
    nextBlueprint: 'Siguiente Receta Blueprint',
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
    proteinCol: '主筋肉肉類',
    organCol: '内臓肉（タウリン源）',
    produceCol: '野菜・複合炭水化物',
    supplementsCol: 'オイル・カルシウム',
    supplementsTitle: '必須サプリメントおよび推奨原材料',
    safetyTitle: '獣医師による安全性・移行スケジュール・禁忌事項',
    contraindicationsTitle: '本処方が適さないケース（事前の調整が必要な犬）',
    transitionTitle: '消化器官に優しい10日間の安全フード移行法',
    calculatorCtaTitle: '愛犬の正確な体重・月齢に合わせた給餌量を計算する',
    calculatorCtaDesc: '避妊去勢の有無、体型スコア（BCS）、運動量に応じた正確な1日の給餌グラム数を算出します。',
    calculatorCtaBtn: '獣医給餌計算ツールを起動する →',
    prevBlueprint: '前のレシピ設計図',
    nextBlueprint: '次のレシピ設計図',
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
    proteinCol: 'Viande Musculaire',
    organCol: 'Abats',
    produceCol: 'Légumes / Féculents',
    supplementsCol: 'Huiles & Calcium',
    supplementsTitle: 'Ingrédients Essentiels & Compléments Vérifiés',
    safetyTitle: 'Sécurité Vétérinaire, Transition & Contre-indications',
    contraindicationsTitle: 'Chiens pour lesquels cette formule n’est pas adaptée',
    transitionTitle: 'Protocole de Transition Digestive Sécurisée sur 10 Jours',
    calculatorCtaTitle: 'Calculez la Ration Exacte pour l’Âge et le Poids de Votre Chien',
    calculatorCtaDesc: 'Notre algorithme vétérinaire prend en compte la stérilisation, l’état corporel et l’activité pour doser les grammes exacts.',
    calculatorCtaBtn: 'Lancer le Planificateur Nutritionnel →',
    prevBlueprint: 'Recette Précédente',
    nextBlueprint: 'Recette Suivante',
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
    proteinCol: 'Muskelfleisch',
    organCol: 'Innereien',
    produceCol: 'Gemüse / Kohlenhydrate',
    supplementsCol: 'Öle & Calcium',
    supplementsTitle: 'Essenzielle geprüfte Zusätze & Zutaten',
    safetyTitle: 'Tierärztliche Sicherheit, Futterumstellung & Gegenanzeigen',
    contraindicationsTitle: 'Für welche Hunde dieser Bauplan NICHT geeignet ist',
    transitionTitle: '10-tägiger schonender Magen-Darm-Futterwechsel',
    calculatorCtaTitle: 'Individuelle Grammmengen für Ihren Hund berechnen',
    calculatorCtaDesc: 'Unser tierärztlicher Algorithmus berücksichtigt Kastrationsstatus, BCS und Aktivitätsgrad.',
    calculatorCtaBtn: 'Futterrechner starten →',
    prevBlueprint: 'Vorheriger Rezept-Bauplan',
    nextBlueprint: 'Nächster Rezept-Bauplan',
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
    proteinCol: 'Carne Muscular',
    organCol: 'Vísceras',
    produceCol: 'Vegetais e Carboidratos',
    supplementsCol: 'Óleos e Cálcio',
    supplementsTitle: 'Ingredientes e Suplementos Essenciais Verificados',
    safetyTitle: 'Segurança Veterinária, Transição e Contraindicações',
    contraindicationsTitle: 'Para quem este plano NÃO é recomendado sem ajustes',
    transitionTitle: 'Protocolo de Transição Gastrointestinal Segura (10 Dias)',
    calculatorCtaTitle: 'Calcule Gramas Personalizadas para a Idade e Peso do seu Cão',
    calculatorCtaDesc: 'Nosso algoritmo veterinário analisa castração, escore corporal e nível de atividade.',
    calculatorCtaBtn: 'Abrir Calculadora Nutricional →',
    prevBlueprint: 'Receita Anterior',
    nextBlueprint: 'Próxima Receita',
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
    proteinCol: '순살 근육육',
    organCol: '내장육 (타우린 공급원)',
    produceCol: '채소 및 탄수화물',
    supplementsCol: '오일 및 칼슘 밸런서',
    supplementsTitle: '검증된 필수 영양 보충제 및 원재료',
    safetyTitle: '수의사 안전 수칙, 전환 일정 및 급여 주의사항',
    contraindicationsTitle: '본 레시피 급여 시 주의가 필요한 경우 (금기 대상)',
    transitionTitle: '위장관 부담 없는 10일 안전 사료 전환 프로토콜',
    calculatorCtaTitle: '내 아이의 체중과 상태에 맞춘 정밀 급여량 계산하기',
    calculatorCtaDesc: '중성화 여부, 비만도(BCS), 활동량을 반영하여 정확한 하루 급여 그램수를 확인하세요.',
    calculatorCtaBtn: '수의 영양 식단 계산기 열기 →',
    prevBlueprint: '이전 레시피 설계도',
    nextBlueprint: '다음 레시피 설계도',
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
    proteinCol: 'Carne Muscolare',
    organCol: 'Frattaglie',
    produceCol: 'Verdure / Carboidrati',
    supplementsCol: 'Oli e Calcio',
    supplementsTitle: 'Ingredienti e Integratori Essenziali Verificati',
    safetyTitle: 'Sicurezza Veterinaria, Transizione e Controindicazioni',
    contraindicationsTitle: 'Chi NON dovrebbe assumere questo blueprint senza modifiche',
    transitionTitle: 'Protocollo di Transizione Gastrointestinale Sicura in 10 Giorni',
    calculatorCtaTitle: 'Calcola i Grammi Esatti per l’Età e il Peso del tuo Cane',
    calculatorCtaDesc: 'Il nostro algoritmo veterinario considera sterilizzazione, punteggio corporeo e livello di attività.',
    calculatorCtaBtn: 'Avvia il Calcolatore Nutrizionale →',
    prevBlueprint: 'Ricetta Precedente',
    nextBlueprint: 'Prossima Ricetta',
    backLink: 'Torna alla Guida sui Migliori Alimenti per Cani',
    titleSuffix: 'Ricetta Casalinga Veterinaria Equilibrata | Dog Food Planner',
    faqTitle: 'Domande Frequenti su questo Blueprint',
  },
};

/**
 * Returns all 4 Veterinary-Approved Homemade Recipe Blueprints:
 * 1. Lean Turkey & Pumpkin (Maintenance & Sensitive Digestion)
 * 2. Grass-Fed Beef & Sweet Potato (Active Dogs & High Vitality)
 * 3. Wild Salmon & Quinoa (Joint Mobility & Pruritic Skin Care)
 * 4. Pasture Lamb & Cranberry (Hypoallergenic Novel Protein & Gut Health)
 */
export function getRecipeBlueprints(lang: Lang): RecipeBlueprint[] {
  const isEn = lang === 'en';
  const isEs = lang === 'es';
  const isJa = lang === 'ja';
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isPt = lang === 'pt';
  const isKo = lang === 'ko';

  // 1. TURKEY & PUMPKIN BLUEPRINT
  const bp1Name = isEn
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

  const bp1ShortDesc = isEn
    ? 'A clinical 65/10/10/8/4/3 whole-food recipe engineered for adult maintenance with 93/7 lean turkey, heart-protective organ taurine, digestive pumpkin fiber, and balanced eggshell calcium.'
    : isEs
    ? 'Una fórmula clínica 65/10/10/8/4/3 de comida real diseñada para mantenimiento adulto con pavo 93/7, taurina de órganos, fibra de calabaza y calcio balanceado.'
    : isJa
    ? '成犬の維持期のために臨床設計された65:10:10:8:4:3の黄金比率。高消化性赤身七面鳥、心臓保護タウリン、整腸カボチャ繊維、後入れEPA/DHAオメガ3による完全食処方。'
    : isFr
    ? 'Une recette clinique 65/10/10/8/4/3 pour chien adulte avec dinde maigre 93/7, taurine d’abats pour le cœur, fibres de citrouille et calcium équilibré.'
    : isDe
    ? 'Eine klinische 65/10/10/8/4/3-Vollwertrezeptur für ausgewachsene Hunde mit 93/7 Putenhack, Organ-Taurin, verdauungsförderndem Kürbis und Eierschalen-Calcium.'
    : isPt
    ? 'Uma receita clínica 65/10/10/8/4/3 desenvolvida para cães adultos com peru magro 93/7, taurina de vísceras para o coração, abóbora prebiótica e cálcio balanceado.'
    : isKo
    ? '성견 건강 유지를 위해 65:10:10:8:4:3 비율로 설계된 자연식. 저지방 칠면조 93/7, 심장 보호 천연 타우린, 단호박 섬유질, 난각 칼슘 함유.'
    : 'Una ricetta clinica 65/10/10/8/4/3 per cani adulti con tacchino magro 93/7, taurina da frattaglie, fibre di zucca e calcio bilanciato.';

  // 2. BEEF & SWEET POTATO BLUEPRINT
  const bp2Name = isEn
    ? 'Gently Cooked Grass-Fed Beef & Sweet Potato Vitality Blueprint'
    : isEs
    ? 'Blueprint de Ternera Alimentada con Pasto y Batata para Alta Vitalidad'
    : isJa
    ? 'グラスフェッド牛赤身肉＆さつまいもの高活力・筋肉維持設計図'
    : isFr
    ? 'Blueprint Bœuf Nourri à l’Herbe & Patate Douce Haute Vitalité'
    : isDe
    ? 'Vitalitäts-Bauplan mit Weiderind & Süßkartoffel für aktive Hunde'
    : isPt
    ? 'Blueprint de Carne Bovina de Pasto e Batata-Doce para Alta Vitalidade'
    : isKo
    ? '목초육 소고기 & 고구마 액티브 근육 활력 설계도'
    : 'Blueprint al Manzo da Pascolo e Patate Dolci per Alta Vitalità';

  const bp2ShortDesc = isEn
    ? 'A high-stamina 62/10/12/8/4/4 clinical formula featuring 90/10 grass-fed beef, nutrient-dense liver & heart, slow-burning sweet potato carbohydrates, and antioxidant-rich steamed broccoli for active dogs.'
    : isEs
    ? 'Una fórmula de alta energía 62/10/12/8/4/4 con ternera 90/10, hígado y corazón densos en hierro y CoQ10, batata de combustión lenta y brócoli antioxidante.'
    : isJa
    ? '活動犬・運動量の多い愛犬のための62:10:12:8:4:4高スタミナ処方。90/10赤身牛挽肉、ビタミンA・ヘム鉄の宝庫である牛レバー＆ハツ、持続性炭水化物のさつまいもを配合。'
    : isFr
    ? 'Une formule haute énergie 62/10/12/8/4/4 avec bœuf 90/10, abats riches en fer héminique et CoQ10, patate douce à IG bas et brocoli antioxydant.'
    : isDe
    ? 'Eine kraftvolle 62/10/12/8/4/4-Rezeptur für aktive Hunde mit magerem Weiderind (90/10), nährstoffreicher Leber & Herz, Süßkartoffel und Brokkoli.'
    : isPt
    ? 'Fórmula para cães ativos 62/10/12/8/4/4 com carne bovina 90/10, fígado e coração ricos em ferro e CoQ10, batata-doce de liberação lenta e brócolis.'
    : isKo
    ? '활동량이 많은 반려견을 위한 62:10:12:8:4:4 고스태미나 처방. 90/10 목초 소고기, 헴철과 비타민A가 풍부한 간·심장, 복합 탄수화물 고구마 함유.'
    : 'Una formula energetica 62/10/12/8/4/4 con manzo 90/10, fegato e cuore ricchi di ferro eme e CoQ10, patata dolce a lento rilascio e broccoli.';

  // 3. SALMON & QUINOA BLUEPRINT
  const bp3Name = isEn
    ? 'Wild Alaskan Salmon & Quinoa Anti-Inflammatory Joint & Coat Blueprint'
    : isEs
    ? 'Blueprint de Salmón Salvaje y Quinoa para Articulaciones y Piel'
    : isJa
    ? '天然アラスカンサーモン＆キヌア 関節ケア・皮膚被毛抗炎症設計図'
    : isFr
    ? 'Blueprint Saumon Sauvage d’Alaska & Quinoa Articulations & Pelage'
    : isDe
    ? 'Gelenk- & Fell-Bauplan mit Wildlachs & Quinoa (Entzündungshemmend)'
    : isPt
    ? 'Blueprint de Salmão Selvagem e Quinoa para Articulações e Pelagem'
    : isKo
    ? '야생 알래스카 연어 & 퀴노아 관절 및 피모 항염 영양 설계도'
    : 'Blueprint al Salmone Selvaggio e Quinoa per Articolazioni e Cute';

  const bp3ShortDesc = isEn
    ? 'An omega-dense 60/8/12/10/6/4 marine formula engineered with wild salmon, organ taurine, complete-protein quinoa, antioxidant blueberries, and cold-pressed hemp oil for soothing inflamed joints and itchy skin.'
    : isEs
    ? 'Una fórmula marina 60/8/12/10/6/4 rica en EPA/DHA con salmón salvaje, quinoa baja en alergenos, arándanos antioxidantes y aceite de cáñamo para calmar el picor y dolor articular.'
    : isJa
    ? '関節炎の緩和と皮膚の痒み鎮静に特化した60:8:12:10:6:4海洋性処方。高純度EPA/DHAを含む天然サーモン、完全アミノ酸の有機キヌア、高アントシアニンのブルーベリーを贅沢に配合。'
    : isFr
    ? 'Formule marine 60/8/12/10/6/4 riche en EPA/DHA avec saumon sauvage, quinoa hypoallergénique, myrtilles protectrices et huile de chanvre pour les articulations douloureuses et le prurit.'
    : isDe
    ? 'Eine meeresbasierte 60/8/12/10/6/4-Rezeptur mit reichlich EPA/DHA aus Wildlachs, allergenarmem Quinoa, Heidelbeeren und Hanföl gegen Gelenkbeschwerden und Juckreiz.'
    : isPt
    ? 'Fórmula marinha 60/8/12/10/6/4 com salmão selvagem, quinoa de alta digestibilidade, mirtilos antioxidantes e óleo de cânhamo para alívio articular e dermatológico.'
    : isKo
    ? '관절 염증과 가려운 피부를 위한 60:8:12:10:6:4 해양성 항염 처방. 천연 연어의 풍부한 EPA/DHA, 저알러지 슈퍼푸드 퀴노아, 항산화 블루베리, 햄프씨드 오일 배합.'
    : 'Formula marina 60/8/12/10/6/4 ad alto tenore di EPA/DHA con salmone selvaggio, quinoa a basso potere allergenico, mirtilli antiossidanti e olio di canapa.';

  // 4. LAMB & CRANBERRY BLUEPRINT
  const bp4Name = isEn
    ? 'Gently Stewed Pasture Lamb & Cranberry Hypoallergenic Gut Blueprint'
    : isEs
    ? 'Blueprint de Cordero de Pasto y Arándanos Rojos Hipoalergénico Digestivo'
    : isJa
    ? '放牧ラム肉＆クランベリー 低アレルゲン腸管ケア・尿路健康設計図'
    : isFr
    ? 'Blueprint Agneau de Pâturage & Canneberge Hypoallergénique Intestinal'
    : isDe
    ? 'Hypoallergener Darm-Bauplan mit Weidelamm & Cranberries'
    : isPt
    ? 'Blueprint de Cordeiro de Pasto e Cranberry Hipoalergênico Gastrointestinal'
    : isKo
    ? '초지 방목 양고기 & 크랜베리 저자극 장 건강·요로 케어 설계도'
    : 'Blueprint all’Agnello da Pascolo e Mirtilli Rossi Ipoallergenico Intestinale';

  const bp4ShortDesc = isEn
    ? 'A novel red meat 64/8/12/8/5/3 formula engineered with pasture lamb, liver & kidney, soothing butternut squash, and pure cranberries for dogs suffering from severe poultry/beef allergies and gut sensitivities.'
    : isEs
    ? 'Una fórmula de carne novedosa 64/8/12/8/5/3 con cordero magro, vísceras, calabaza cacahuete calmante y arándanos para perros con alergias severas al pollo o vacuno.'
    : isJa
    ? '鶏肉・牛肉アレルギーを抱える犬のための64:8:12:8:5:3新規単一赤身肉処方。消化に優しい放牧ラム肉、内臓、粘膜を保護するバターナッツスクワッシュ、尿路環境を整えるクランベリーを配合。'
    : isFr
    ? 'Formule à protéine novatrice 64/8/12/8/5/3 avec agneau de pâturage, courge butternut apaisante et canneberges pour chiens allergiques à la volaille ou au bœuf.'
    : isDe
    ? 'Eine neuartige Einzelfleisch-Rezeptur 64/8/12/8/5/3 mit Weidelamm, Innereien, beruhigendem Butternut-Kürbis und Cranberries für hochallergische Hunde mit empfindlichem Magen.'
    : isPt
    ? 'Fórmula de proteína nobre 64/8/12/8/5/3 com cordeiro de pasto, abóbora butternut suave e cranberries para cães com alergias severas a frango e carne bovina.'
    : isKo
    ? '가금류나 소고기 알러지가 심한 반려견을 위한 64:8:12:8:5:3 단일 신규 단백질 처방. 소화가 편한 초지 양고기, 장 점막을 진정시키는 땅콩호박, 요로 건강 크랜베리 함유.'
    : 'Formula a proteina alternativa 64/8/12/8/5/3 con agnello da pascolo, zucca butternut lenitiva e mirtilli rossi per cani con allergie a pollo e manzo.';

  return [
    // 1. TURKEY & PUMPKIN
    {
      slug: 'turkey-pumpkin-maintenance',
      name: bp1Name,
      shortDesc: bp1ShortDesc,
      badge: isEn ? 'Flagship Adult Maintenance' : isEs ? 'Mantenimiento Adulto Insignia' : isJa ? '臨床推奨・成犬基本設計' : 'Formule Maintien Adulte',
      targetAudience: isEn ? 'Adult Canines (1-7 Years) // Maintenance & Sensitive Digestion' : isEs ? 'Perros Adultos (1-7 Años) // Mantenimiento y Digestión Sensible' : isJa ? '成犬期（1〜7歳）／健康維持および胃腸ケア' : 'Chiens Adultes (1-7 ans) // Maintien & Digestion',
      colorTheme: '#0070f3',
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
          name: isEn ? 'USDA Lean Ground Turkey (93/7)' : isEs ? 'Pavo Magro Picado (93% magro / 7% grasa)' : isJa ? '赤身七面鳥ミンチ（赤身93% / 脂質7%）' : 'Dinde Hachée Maigre (93/7)',
          percentage: 65,
          category: isEn ? 'Primary Muscle Meat' : isEs ? 'Carne Muscular Principal' : isJa ? '主筋肉肉類' : 'Viande Musculaire',
          role: isEn ? 'Bioavailable essential amino acids (arginine, lysine, leucine) for muscle synthesis and enzyme production' : isEs ? 'Aminoácidos esenciales para síntesis muscular' : isJa ? '筋肉維持・酵素合成に必要な必須アミノ酸を高純度供給' : 'Acides aminés essentiels',
          clinicalBenefit: isEn ? 'Lean, highly digestible single poultry protein with low allergenicity compared to beef or chicken.' : isEs ? 'Proteína única muy digestible de bajo potencial alergénico.' : isJa ? '消化管への負担を最小化する高消化性低アレルゲンタンパク質。' : 'Protéine très digestible.',
          color: '#0070f3',
        },
        {
          name: isEn ? 'Turkey Hearts & Gizzards' : isEs ? 'Corazones y Mollejas de Pavo' : isJa ? '七面鳥のハツ（心臓）＆砂肝' : 'Cœurs et Gésiers de Dinde',
          percentage: 10,
          category: isEn ? 'Muscular Organ & CoQ10 Source' : isEs ? 'Órganos Musculares y Fuente de CoQ10' : isJa ? '筋性内臓・補酵素CoQ10' : 'Organe Musculaire',
          role: isEn ? 'Concentrated natural taurine, CoQ10, bioavailable heme iron, and B-complex vitamins (especially B12)' : isEs ? 'Taurina natural, CoQ10, hierro hemo y complejo B12' : isJa ? '心筋保護に不可欠な天然タウリン、CoQ10、ヘム鉄を供給' : 'Taurine naturelle & CoQ10',
          clinicalBenefit: isEn ? 'Shields canine heart tissue against nutritional dilated cardiomyopathy (DCM) naturally.' : isEs ? 'Protege el corazón contra la miocardiopatía dilatada (DCM).' : isJa ? '拡張型心筋症（DCM）を未然に防ぐ高活性天然タウリン。' : 'Protection contre la DCM.',
          color: '#7928ca',
        },
        {
          name: isEn ? 'Organic Pure Pumpkin Purée' : isEs ? 'Puré de Calabaza Pura Orgánica' : isJa ? '無添加 100% 有機カボチャピューレ' : 'Purée de Citrouille Pure Bio',
          percentage: 10,
          category: isEn ? 'Prebiotic Soluble Fiber' : isEs ? 'Fibra Soluble Prebiótica' : isJa ? 'プレバイオティクス食物繊維' : 'Fibres Prébiotiques',
          role: isEn ? 'Soluble pectin and insoluble dietary fiber to optimize colonic transit and stimulate short-chain fatty acids' : isEs ? 'Regula el tránsito colónico y nutre la microbiota con butirato' : isJa ? '結腸細胞のエネルギー源である短鎖脂肪酸（酪酸）の産生を促進' : 'Régulation colique',
          clinicalBenefit: isEn ? 'Natural dual-action regulator: firms loose stools while preventing constipation in sensitive dogs.' : isEs ? 'Regulador dual: solidifica heces blandas y previene estreñimiento.' : isJa ? '軟便と便秘の双方に作用し消化管粘膜を保護。' : 'Régulateur digestif double action.',
          color: '#f5a623',
          affiliateKey: 'pumpkinPuree',
          affiliateUrl: 'https://amzn.to/4xINd8W',
        },
        {
          name: isEn ? 'Steamed Baby Spinach & Zucchini' : isEs ? 'Espinacas Baby y Calabacín al Vapor' : isJa ? '蒸しほうれん草＆ズッキーニ（微細刻み）' : 'Épinards et Courgettes Vapeur',
          percentage: 8,
          category: isEn ? 'Phytonutrients & Greens' : isEs ? 'Fitonutrientes y Verduras Verdes' : isJa ? '微量栄養緑黄色野菜' : 'Légumes Verts',
          role: isEn ? 'Delivers dietary folate, vitamin K1, potassium, magnesium, and cellular antioxidants (lutein)' : isEs ? 'Aporte de folato, vitamina K1, potasio y antioxidantes' : isJa ? '抗酸化ルテイン、ゼアキサンチン、葉酸、カリウムを天然供給' : 'Antioxydants cellulaires',
          clinicalBenefit: isEn ? 'Gentle steaming ruptures plant cellulose walls so canine enzymes absorb micronutrients easily.' : isEs ? 'El vapor rompe la celulosa para absorber nutrientes sin fermentación.' : isJa ? '強固な細胞壁を加熱で破壊し、シュウ酸を抑えて安全吸収。' : 'Assimilation optimisée.',
          color: '#10b981',
        },
        {
          name: isEn ? 'Eggshell Calcium & Kelp Mineral Blend' : isEs ? 'Polvo de Cáscara de Huevo y Alga Kelp' : isJa ? '超微粉末 卵殻カルシウム＆有機ケルプ' : 'Poudre de Coquille d’Œuf & Kelp',
          percentage: 4,
          category: isEn ? 'Essential Mineral & Ca:P Balancer' : isEs ? 'Mineral Esencial y Balanceador Ca:P' : isJa ? '必須骨格ミネラル・Ca:P比調製材' : 'Minéral Équilibreur Ca:P',
          role: isEn ? 'Provides ~38% elemental bioavailable calcium carbonate to balance meat phosphorus at 1.25:1 Ca:P' : isEs ? 'Aporta 38% de calcio elemental para neutralizar el fósforo de la carne' : isJa ? '肉類の過剰なリンを中和しCa:P比を1.25:1に正確に補正' : 'Équilibre phosphocalcique',
          clinicalBenefit: isEn ? 'CRITICAL: Boneless meat has a toxic 1:20 Ca:P ratio. This mineral blend prevents bone loss.' : isEs ? 'CRÍTICO: Previene el hiperparatiroidismo y la pérdida ósea.' : isJa ? '骨なし肉単体のCa:P比1:20という危険な逆転を完全中和。' : 'Vital pour le squelette.',
          color: '#e11d48',
          affiliateKey: 'eggshellPowder',
          affiliateUrl: 'https://amzn.to/4haNVWy',
        },
        {
          name: isEn ? 'Wild Alaskan Salmon Oil (Cold-Added)' : isEs ? 'Aceite de Salmón Salvaje de Alaska (añadido en frío)' : isJa ? '天然アラスカンサーモンオイル（後入れ・非加熱）' : 'Huile de Saumon d’Alaska (à froid)',
          percentage: 3,
          category: isEn ? 'Marine Omega-3 EPA/DHA' : isEs ? 'Ácidos Grasos Omega-3 Marinos' : isJa ? '海洋性長鎖オメガ3脂肪酸' : 'Oméga-3 Marins',
          role: isEn ? 'Direct, preformed EPA and DHA to modulate inflammatory prostaglandins and leukotrienes' : isEs ? 'EPA y DHA bioactivos directos para modular la cascada inflamatoria' : isJa ? '抗炎症性プロスタグランジンに変換される活性型EPA・DHAを供給' : 'Anti-inflammatoire naturel',
          clinicalBenefit: isEn ? 'Maintains epidermal moisture barrier, alleviates allergic skin itching, and preserves joints.' : isEs ? 'Refuerza la barrera dérmica, calma el prurito y cuida articulaciones.' : isJa ? '皮膚被毛のバリア機能を強化。熱酸化を防ぐため必ず冷却後に混合。' : 'Barrière cutanée et articulations.',
          color: '#06b6d4',
          affiliateKey: 'salmonOil',
          affiliateUrl: 'https://amzn.to/46HCJdW',
        },
      ],
      executiveSummary: isEn
        ? 'Unlike commercial kibble extruded at temperatures over 400°F (204°C) or arbitrary internet DIY recipes lacking mineral balance, this blueprint utilizes exact veterinary clinical ratios. It delivers high-BV proteins, organ-derived taurine to protect cardiac myocardium, prebiotic fiber to regulate the canine microbiome, and precisely balanced calcium carbonate to achieve the indispensable 1.25:1 Ca:P ratio mandated by NRC standards.'
        : isEs
        ? 'A diferencia del pienso ultraprocesado o recetas caseras sin balance mineral, este blueprint emplea proporciones clínicas veterinarias exactas. Aporta proteínas de alto valor biológico, taurina de órganos para proteger el corazón y calcio calibrado para cumplir la relación 1.25:1 Ca:P de la norma NRC.'
        : isJa
        ? '市販の超高温加熱ドライフードやミネラル比率が崩れがちな自己流レシピと異なり、本設計図はNRC基準（Ca:P 1.25:1）を厳密に満たします。高消化性七面鳥、心筋保護タウリン、整腸カボチャ食物繊維、非加熱オメガ3で成犬の健康寿命を最大化します。'
        : 'Formulation clinique équilibrée respectant les normes NRC pour le maintien du chien adulte.',
      clinicalRationale: [
        {
          title: isEn ? '1. Why 93/7 Lean Turkey Over Chicken or Beef?' : isEs ? '1. ¿Por qué Pavo Magro 93/7 en lugar de Pollo o Ternera?' : isJa ? '1. なぜ鶏肉や牛肉ではなく「赤身七面鳥（93/7）」なのか？' : '1. Pourquoi la Dinde Maigre 93/7 ?',
          description: isEn
            ? 'Commercial beef and conventionally raised chicken represent the two most common canine dietary allergens identified in veterinary dermatology. Lean turkey (93% muscle, 7% lipid) provides an exceptional 92% protein biological value (BV) while maintaining dietary fat at safe clinical levels (under 25% dry matter) to protect against pancreatitis.'
            : isEs
            ? 'La ternera y el pollo industrial son los alérgenos alimentarios más frecuentes. El pavo magro 93/7 ofrece un valor biológico del 92% manteniendo la grasa en niveles clínicos seguros contra la pancreatitis.'
            : isJa
            ? '牛肉とブロイラー鶏肉は犬の食物アレルギー原因の上位を占めます。赤身93%・脂質7%の七面鳥は消化吸収率92%を誇り、脂質を安全域に抑えて膵炎リスクを回避します。'
            : 'Protéine hypoallergénique de haute valeur biologique.',
          points: isEn
            ? ['Hypoallergenic amino acid profile suited for sensitive skin and guts.', 'Low saturated fat density protects against pancreatic inflammation.', 'Naturally rich in tryptophan for behavioral calm and serotonin synthesis.']
            : isEs
            ? ['Perfil hipoalergénico ideal para piel y digestión.', 'Baja grasa saturada que protege el páncreas.', 'Rico en triptófano natural para bienestar emocional.']
            : isJa
            ? ['皮膚のかゆみや過敏性腸炎を抱える犬にも安全な低アレルゲン設計。', '低飽和脂肪酸設計により膵臓への過度な負担を回避。', 'セロトニンの前駆体となる天然トリプトファンが豊富。']
            : ['Hypoallergénique et digeste.', 'Faible teneur en graisses saturées.', 'Riche en tryptophane.'],
        },
        {
          title: isEn ? '2. The Cardiac Necessity: Organ Taurine and CoQ10 Pathways' : isEs ? '2. La Necesidad Cardíaca: Vías de Taurina y CoQ10 de los Órganos' : isJa ? '2. 心臓の生命線：内臓肉由来の天然タウリンとコエンザイムQ10' : '2. Nécessité Cardiaque : Taurine et CoQ10',
          description: isEn
            ? 'Diet-associated Dilated Cardiomyopathy (DCM) occurs when diets lack sulfur-bearing amino acids. Turkey hearts and gizzards provide bioavailable, food-state taurine and CoQ10 directly absorbed by cardiac myocytes without artificial chemical powders.'
            : isEs
            ? 'La miocardiopatía dilatada (DCM) se asocia a dietas deficientes en taurina. Los corazones y mollejas de pavo aportan taurina y CoQ10 intactos directamente a las células cardíacas.'
            : isJa
            ? '近年問題視される食事性拡張型心筋症（DCM）を防ぐため、心筋細胞にそのまま吸収される七面鳥ハツ・砂肝由来の天然タウリンとCoQ10を配合しています。'
            : 'Prévention de la cardiomyopathie dilatée par la taurine naturelle.',
          points: isEn
            ? ['Contains over 120mg of natural taurine per 100g of cardiac tissue.', 'High CoQ10 supports continuous mitochondrial ATP cardiac energy.', 'Provides natural heme iron without synthetic constipation side-effects.']
            : isEs
            ? ['Más de 120 mg de taurina natural por cada 100 g de tejido cardíaco.', 'CoQ10 para energía mitocondrial en el corazón.', 'Hierro hemo natural altamente absorbible.']
            : isJa
            ? ['心臓組織100gあたり120mg以上の高濃度天然タウリンを含有。', 'ミトコンドリアのATPエネルギー生成を助けるコエンザイムQ10が豊富。', '便秘を起こさず吸収される有機ヘム鉄を供給。']
            : ['Taurine naturelle concentrée.', 'Soutien énergétique cardiaque.', 'Fer héminique digeste.'],
        },
        {
          title: isEn ? '3. Calcium-to-Phosphorus Stoichiometry (1.25:1 Golden Law)' : isEs ? '3. Estequiometría de Calcio a Fósforo (Regla de Oro 1.25:1)' : isJa ? '3. カルシウム対リン比（1.25:1の黄金法則）' : '3. Règle d’Or Ca:P (1,25:1)',
          description: isEn
            ? 'Boneless meat contains an inverted 1:20 Ca:P ratio. Feeding meat without calcium forces the body to leach calcium from bones to survive, causing fractures within months. Our 4% eggshell powder and kelp locks in the precise 1.25:1 ratio.'
            : isEs
            ? 'La carne sin hueso tiene un ratio invertido de 1:20 Ca:P. Nuestro 4% de cáscara de huevo y kelp garantiza el ratio ideal de 1.25:1 para proteger los huesos.'
            : isJa
            ? '純粋な肉類はCa:P比が1:20と極度に逆転しています。4%の卵殻カルシウムと有機ケルプがこの歪みを中和し、骨軟化症を完全に防ぎます。'
            : 'Neutralisation rigoureuse du phosphore de la viande.',
          points: isEn
            ? ['Pure calcium carbonate delivers 38% elemental bioavailable calcium.', 'Kelp contributes organic micro-dosed iodine for thyroid hormone T4.', 'Balances meat phosphorus precisely at 1.25:1.']
            : isEs
            ? ['Aporta 38% de calcio elemental altamente asimilable.', 'Kelp aporta yodo natural para la tiroides.', 'Equilibra con precisión el fósforo del pavo.']
            : isJa
            ? ['卵殻由来炭酸カルシウムが約38%のエレメンタルカルシウムを供給。', '有機ケルプが甲状腺ホルモン合成に必要な天然ヨウ素を微量補給。', '骨格と歯牙の健康を生涯維持。']
            : ['Calcium élémentaire de coquille d’œuf.', 'Iode naturel de kelp.', 'Équilibre minéral parfait.'],
        },
      ],
      prepProtocol: [
        { step: 1, title: isEn ? 'Prep & Mince' : 'Preparación y Corte', instruction: isEn ? 'Sanitize surfaces. Dice turkey hearts and gizzards into 1/4-inch pieces.' : 'Pica los órganos en trozos pequeños de 0,5 cm.' },
        { step: 2, title: isEn ? 'Low-Heat Simmer (<180°F)' : 'Cocción Lenta (<82°C)', instruction: isEn ? 'Simmer ground turkey and organs with 1/2 cup water for 8-10 min until pinkness disappears. Do not brown.' : 'Cocina a fuego lento 8-10 min hasta que no haya carne cruda.', criticalTip: isEn ? 'Do not fry at high heat to avoid advanced glycation end-products (AGEs).' : 'No freír a fuego alto.' },
        { step: 3, title: isEn ? 'Steam & Puree Greens' : 'Cocer y Triturar Verduras', instruction: isEn ? 'Steam zucchini and spinach 4-5 min. Puree in food processor with pumpkin puree.' : 'Cuece al vapor las verduras y tritúralas con la calabaza.' },
        { step: 4, title: isEn ? 'Cool Down Below 100°F (38°C)' : 'Enfriamiento Obligatorio (<38°C)', instruction: isEn ? 'Mix vegetables into meat. Cool completely to room temperature before adding supplements.' : 'Deja enfriar la comida antes de añadir aceites o polvos.', criticalTip: isEn ? 'Never add salmon oil to hot food; heat oxidizes omega-3s.' : 'Nunca añadas el aceite en caliente.' },
        { step: 5, title: isEn ? 'Cold Supplement Fold' : 'Incorporación de Suplementos', instruction: isEn ? 'Fold in eggshell calcium powder, kelp, and cold wild salmon oil thoroughly for 2 minutes.' : 'Mezcla el calcio y el aceite de salmón durante 2 minutos.' },
        { step: 6, title: isEn ? 'Weigh & Portion' : 'Pesaje y Porcionado', instruction: isEn ? 'Weigh daily portions on a digital kitchen gram scale. Store in glass containers or freezer bags.' : 'Pesa las raciones diarias con báscula digital.' },
      ],
      storageGuidelines: [
        { method: isEn ? 'Refrigerator' : 'Refrigeración', duration: '3-4 Days Max', instructions: isEn ? 'Airtight glass container below 38°F (3°C).' : 'Recipiente hermético a <3°C.' },
        { method: isEn ? 'Deep Freezer' : 'Congelación', duration: 'Up to 90 Days', instructions: isEn ? 'Vacuum-sealed or silicone bags with air removed.' : 'Bolsas al vacío sin aire.' },
        { method: isEn ? 'Thawing' : 'Descongelación', duration: 'Overnight in Fridge', instructions: isEn ? 'Thaw in fridge 24h before. Never microwave on high.' : 'Descongelar en frío 24h antes.' },
      ],
      portionReference: [
        { dogWeight: '10 lbs / 4.5 kg', dailyKcal: '280 – 320 kcal', dailyGramsTotal: '240 g / day', mainProtein: '156 g', organMeat: '24 g', produceAndCarbs: '43 g', supplements: '17 g' },
        { dogWeight: '25 lbs / 11.3 kg', dailyKcal: '550 – 620 kcal', dailyGramsTotal: '480 g / day', mainProtein: '312 g', organMeat: '48 g', produceAndCarbs: '86 g', supplements: '34 g' },
        { dogWeight: '50 lbs / 22.7 kg', dailyKcal: '950 – 1,080 kcal', dailyGramsTotal: '850 g / day', mainProtein: '553 g', organMeat: '85 g', produceAndCarbs: '153 g', supplements: '59 g' },
        { dogWeight: '75 lbs / 34 kg', dailyKcal: '1,320 – 1,480 kcal', dailyGramsTotal: '1,180 g / day', mainProtein: '767 g', organMeat: '118 g', produceAndCarbs: '212 g', supplements: '83 g' },
      ],
      safetyAndPrecautions: {
        contraindications: [
          'Do NOT feed to giant-breed growing puppies (<12 mo) without pediatric calcium adjustments.',
          'Do NOT feed to dogs with IRIS Stage 3-4 Chronic Kidney Disease without phosphorus reduction.',
        ],
        transitionSteps: ['Days 1–3: 25% new / 75% old', 'Days 4–6: 50% new / 50% old', 'Days 7–9: 75% new / 25% old', 'Day 10+: 100% new blueprint'],
        calciumRule: 'NEVER omit eggshell calcium powder; boneless meat without calcium causes bone demineralization within 60 days.',
      },
      faq: [
        { question: isEn ? 'Can I substitute lean ground beef for turkey?' : '¿Puedo sustituir el pavo por ternera magra?', answer: isEn ? 'Yes, provided the protein remains lean (less than 8% fat content). Keep the 10% organ meat portion intact for taurine.' : 'Sí, siempre que tenga menos del 8% de grasa y mantengas los órganos.' },
        { question: isEn ? 'Can I feed this raw instead of cooking?' : '¿Puedo dar esta receta cruda?', answer: isEn ? 'Commercial poultry carries bacterial risks and raw vegetables cannot be digested by dogs without steaming. Gentle poaching is strongly recommended.' : 'La cocción suave a baja temperatura es mucho más segura y digerible.' },
      ],
    },

    // 2. BEEF & SWEET POTATO BLUEPRINT
    {
      slug: 'beef-sweet-potato-vitality',
      name: bp2Name,
      shortDesc: bp2ShortDesc,
      badge: isEn ? 'Active Muscle & Vitality' : isEs ? 'Músculo Activo y Vitalidad' : isJa ? '高活力・筋肉維持設計' : 'Vitalité & Masse Musculaire',
      targetAudience: isEn ? 'Active, Working & Agility Dogs // High Caloric Burn & Muscle Density' : isEs ? 'Perros Activos y de Trabajo // Alto Gasto Calórico y Masa Muscular' : isJa ? '高活動犬・アジリティ犬・運動量の多い成犬' : 'Chiens Actifs & Sportifs',
      colorTheme: '#7928ca',
      macroProfile: {
        proteinDm: '46.5%',
        fatDm: '24.0%',
        carbsDm: '17.5%',
        moisture: '71.0%',
        kcalPerKg: '1,290 kcal/kg (approx. 36.6 kcal/oz)',
        caPhosphorusRatio: '1.25 : 1.0 (NRC Compliant)',
      },
      ingredients: [
        {
          name: isEn ? 'Grass-Fed Lean Ground Beef (90/10)' : isEs ? 'Carne Picada de Ternera de Pasto (90/10)' : isJa ? '放牧グラスフェッド牛赤身挽肉（90/10）' : 'Bœuf Haché Maigre de Pâturage (90/10)',
          percentage: 62,
          category: isEn ? 'Primary Red Meat Muscle' : isEs ? 'Carne Roja Muscular' : isJa ? '主赤身筋肉肉類' : 'Viande Rouge',
          role: isEn ? 'Concentrated creatine, conjugated linoleic acid (CLA), zinc, and bioavailable myoglobin for dense muscle hypertrophy' : isEs ? 'Creatina, CLA, zinc y mioglobina para masa muscular activa' : isJa ? '筋肥大と運動持久力を支える天然クレアチン、共役リノール酸（CLA）、高密度亜鉛を補給' : 'Créatine, zinc et myoglobine',
          clinicalBenefit: isEn ? 'Grass-fed beef possesses a superior 3:1 Omega-6 to Omega-3 ratio compared to grain-fed beef, enhancing athletic stamina.' : isEs ? 'El vacuno de pasto tiene un ratio de grasas superior para el rendimiento físico.' : isJa ? '穀物肥育牛に比べオメガ6:3比率が良好で、運動後の筋炎症を速やかに沈静化。' : 'Performance physique et endurance.',
          color: '#e11d48',
        },
        {
          name: isEn ? 'Beef Liver & Heart Blend' : isEs ? 'Hígado y Corazón de Ternera' : isJa ? '牛レバー（肝臓）＆牛ハツ（心臓）' : 'Foie et Cœur de Bœuf',
          percentage: 10,
          category: isEn ? 'Nutrient-Dense Secreting & Muscular Organ' : isEs ? 'Órganos Ricos en Micronutrientes' : isJa ? '高濃度微量栄養素内臓' : 'Abats Nobles',
          role: isEn ? 'Nature’s supreme multivitamin: preformed bioavailable vitamin A (retinol), B12, copper, heme iron, and CoQ10' : isEs ? 'Vitamina A biodisponible, B12, cobre, hierro y CoQ10' : isJa ? '天然ビタミンA（レチノール）、活性型B12、銅、ヘム鉄、コエンザイムQ10を高密度供給' : 'Vitamina A, B12, fer et CoQ10',
          clinicalBenefit: isEn ? 'Provides direct coenzymes for energy metabolism and red blood cell oxygen-carrying capacity during intense work.' : isEs ? 'Mejora el transporte de oxígeno en sangre y el metabolismo celular.' : isJa ? '運動時の赤血球酸素運搬能とミトコンドリアエネルギー代謝を強力にブースト。' : 'Oxygénation musculaire.',
          color: '#7928ca',
        },
        {
          name: isEn ? 'Steamed Orange Sweet Potato' : isEs ? 'Batata Naranja al Vapor' : isJa ? '蒸しさつまいも（皮むき・マッシュ）' : 'Patate Douce Cuite Vapeur',
          percentage: 12,
          category: isEn ? 'Complex Slow-Burning Carbohydrate' : isEs ? 'Carbohidrato Complejo de Absorción Lenta' : isJa ? '低GI複合炭水化物・カリウム' : 'Glucides Complexes',
          role: isEn ? 'Low-glycemic complex carbohydrates and soluble beta-carotene fiber delivering steady glycogen replenishment without insulin spikes' : isEs ? 'Carbohidratos de absorción lenta que reponen el glucógeno muscular' : isJa ? '急激な血糖上昇を起こさず、筋グリコーゲンを持続的に補充する低GI炭水化物' : 'Reconstitution du glycogène',
          clinicalBenefit: isEn ? 'Restores muscle glycogen stores in sporting or high-energy dogs, preventing mid-day lethargy.' : isEs ? 'Mantiene la energía constante durante toda la jornada activa.' : isJa ? '長時間の散歩やドッグスポーツにおけるエネルギー切れと筋肉疲労を予防。' : 'Énergie stable pour l’effort.',
          color: '#f5a623',
        },
        {
          name: isEn ? 'Steamed Broccoli Florets & Carrots' : isEs ? 'Brócoli y Zanahorias al Vapor' : isJa ? '蒸しブロッコリー＆にんじん（微細粉砕）' : 'Brocolis et Carottes Vapeur',
          percentage: 8,
          category: isEn ? 'Cruciferous Antioxidants & Carotenoids' : isEs ? 'Antioxidantes Cruvíferos y Carotenoides' : isJa ? 'アブラナ科抗酸化野菜' : 'Légumes Protecteurs',
          role: isEn ? 'Bioavailable glucoraphanin (converts to sulforaphane) and beta-carotene for cellular detoxification and Phase II enzymes' : isEs ? 'Sulforafano y betacaroteno para detoxificación celular' : isJa ? '肝臓解毒を助けるスルフォラファン、細胞を保護するカロテノイドを供給' : 'Détoxification cellulaire',
          clinicalBenefit: isEn ? 'Neutralizes exercise-induced reactive oxygen species (ROS) and supports hepatic detoxification pathways.' : isEs ? 'Neutraliza el estrés oxidativo provocado por el ejercicio intenso.' : isJa ? '激しい運動によって発生する活性酸素（ROS）を速やかに無毒化。' : 'Combat le stress oxydatif.',
          color: '#10b981',
        },
        {
          name: isEn ? 'Eggshell Calcium & Organic Kelp' : isEs ? 'Calcio de Cáscara de Huevo y Kelp' : isJa ? '卵殻カルシウム＆有機ケルプブレンド' : 'Coquille d’Œuf & Kelp',
          percentage: 4,
          category: isEn ? 'Essential Calcium & Iodine Balancer' : isEs ? 'Equilibrador de Calcio y Yodo' : isJa ? '必須骨格ミネラル' : 'Équilibre Minéral',
          role: isEn ? 'Pure calcium carbonate to balance high beef phosphorus at 1.25:1 Ca:P, with natural kelp iodine for thyroid metabolism' : isEs ? 'Equilibra el fósforo del vacuno a 1.25:1 con yodo para la tiroides' : isJa ? '牛肉の豊富なリンを1.25:1に中和し、ヨウ素で基礎代謝をサポート' : 'Ratio Ca:P 1,25:1',
          clinicalBenefit: isEn ? 'Protects joint cartilage and skeletal density under heavy mechanical impact.' : isEs ? 'Protege la densidad ósea bajo impactos mecánicos intensos.' : isJa ? 'ジャンプや走行による関節・骨格への機械的衝撃から骨密度を防護。' : 'Soutien ostéo-articulaire.',
          color: '#0070f3',
          affiliateKey: 'eggshellPowder',
          affiliateUrl: 'https://amzn.to/4haNVWy',
        },
        {
          name: isEn ? 'Cold-Pressed Olive & Cod Liver Oil Blend' : isEs ? 'Aceite de Oliva Virgen y Aceite de Hígado de Bacalao' : isJa ? 'エキストラバージンオリーブオイル＆タラ肝油' : 'Huile d’Olive & Huile de Foie de Morue',
          percentage: 4,
          category: isEn ? 'Healthy Lipids & Vitamin D3' : isEs ? 'Lípidos Saludables y Vitamina D3' : isJa ? '健康脂質・天然ビタミンD3' : 'Lipides & Vitamine D3',
          role: isEn ? 'Provides oleic acid (monounsaturated) and natural preformed vitamin D3/A to facilitate bone calcium fixation' : isEs ? 'Ácido oleico y vitamina D3 natural para fijar el calcio en los huesos' : isJa ? 'カルシウムの骨定着を促す天然ビタミンD3とオレイン酸をバランス補給' : 'Fixation du calcium',
          clinicalBenefit: isEn ? 'Supports endocrine hormone balance and cardiovascular lipid transport in high-burn dogs. Add cold.' : isEs ? 'Favorece el metabolismo hormonal y cardíaco.' : isJa ? '高運動犬のホルモン合成と血管内皮機能を強化。必ず冷却後に後入れ。' : 'Santé cardiovasculaire.',
          color: '#f59e0b',
        },
      ],
      executiveSummary: isEn
        ? 'Engineered specifically for active, working, sporting, and high-metabolism adult dogs. Grass-fed lean beef supplies bioavailable creatine and heme iron for muscular stamina, while sweet potato ensures glycogen replenishment without digestive crashes. Organ meats and calibrated eggshell powder guarantee optimal cardiac and skeletal support.'
        : isEs
        ? 'Diseñado específicamente para perros activos, deportistas o de alta energía. El vacuno de pasto aporta creatina natural y hierro hemo para la resistencia muscular, mientras que la batata asegura la recarga de glucógeno sin bajones digestivos.'
        : isJa
        ? '運動量の多いアジリティ犬や活発な成犬のために開発された高活力設計図。グラスフェッド赤身牛のクレアチンとヘム鉄が力強い筋肉を育み、蒸しさつまいもが安定した筋グリコーゲンを持続供給します。'
        : 'Formule riche en créatine et glycogène pour chiens actifs et sportifs.',
      clinicalRationale: [
        {
          title: isEn ? '1. Why 90/10 Grass-Fed Beef for Active Dogs?' : isEs ? '1. ¿Por qué Ternera de Pasto 90/10 para Perros Activos?' : isJa ? '1. 運動犬になぜグラスフェッド赤身牛（90/10）なのか？' : '1. Pourquoi le Bœuf de Pâturage 90/10 ?',
          description: isEn
            ? 'Active canines burn vast amounts of amino acids during daily locomotion. Grass-fed beef is rich in carnitine, creatine, and myoglobin, essential biochemical substrates that facilitate intracellular ATP production inside contracting skeletal myofibrils.'
            : isEs
            ? 'Los perros activos consumen aminoácidos a gran velocidad. El vacuno de pasto es rico en carnitina y creatina para la contracción muscular.'
            : isJa
            ? '運動犬の筋線維内でのATP再合成にはカルニチンとクレアチンが必須です。グラスフェッド牛赤身肉はこれらを有機態で豊富に含み、筋疲労からの回復を劇的に早めます。'
            : 'Créatine et carnitine pour l’effort musculaire prolongé.',
          points: isEn
            ? ['Natural creatine fuels high-intensity burst running and agility.', 'Heme iron maximizes arterial blood oxygen transportation.', 'Conjugated linoleic acid (CLA) supports lean body composition.']
            : isEs
            ? ['Creatina natural para carreras y sprints.', 'Hierro hemo para transporte de oxígeno.', 'CLA para masa muscular magra.']
            : isJa
            ? ['天然クレアチンが瞬発力とアジリティ運動を支える。', '有機ヘム鉄が筋肉への酸素供給を極大化。', 'CLAが体脂肪を抑制し引き締まった筋肉美を維持。']
            : ['Créatine pour la puissance.', 'Fer héminique pour l’oxygénation.', 'CLA pour la masse maigre.'],
        },
        {
          title: isEn ? '2. Slow-Burning Glycogen: Sweet Potato Over Grain Fillers' : isEs ? '2. Glucógeno Sostenido: Batata frente a Granos' : isJa ? '2. 持続性グリコーゲン：穀物ではなく「さつまいも」を選ぶ理由' : '2. Énergie Durable : La Patate Douce',
          description: isEn
            ? 'Unlike corn or wheat which produce sharp glycemic spikes and subsequent reactive hypoglycemia, sweet potato contains resistant starch and amylose. It delivers sustained glucose delivery over 6–8 hours without overtaxing the pancreas.'
            : isEs
            ? 'La batata libera glucosa de forma lenta y continua durante 6 a 8 horas sin causar picos de insulina nocivos para el páncreas.'
            : isJa
            ? 'トウモロコシや小麦のような急激な血糖値スパイクを起こさず、6〜8時間にわたり安定してグルコースを筋肉へ供給し、膵臓への負担を最小化します。'
            : 'Glucides à faible index glycémique pour l’endurance.',
          points: isEn
            ? ['Provides steady stamina for hiking, running, and working dogs.', 'Rich in potassium to prevent exercise muscle cramping.', 'Soluble dietary pectin nourishes beneficial gut flora.']
            : isEs
            ? ['Energía prolongada para caminatas y carreras.', 'Alto en potasio contra calambres musculares.', 'Pectina prebiótica para el intestino.']
            : isJa
            ? ['長時間のハイキングや運動でもスタミナが途切れない。', 'カリウムが運動中の筋肉の痙攣や疲労を防ぐ。', '食物繊維ペクチンが腸内環境を穏やかに整える。']
            : ['Énergie longue durée.', 'Riche en potassium.', 'Fibres prébiotiques.'],
        },
      ],
      prepProtocol: [
        { step: 1, title: isEn ? 'Meat & Organ Dice' : 'Corte de Carne y Vísceras', instruction: isEn ? 'Dice beef heart and liver into 1/4-inch cubes. Keep raw until cooking.' : 'Corta el corazón y el hígado en dados pequeños de 0,5 cm.' },
        { step: 2, title: isEn ? 'Gentle Beef Simmer' : 'Cocción de la Ternera', instruction: isEn ? 'Simmer 90/10 ground beef and organ dice with 1/2 cup water for 10 minutes on low-medium heat until browned through gently.' : 'Cocina a fuego lento la carne y los órganos 10 minutos.' },
        { step: 3, title: isEn ? 'Steam Sweet Potato & Broccoli' : 'Cocinar Batata y Brócoli', instruction: isEn ? 'Peel and cube sweet potato. Steam with broccoli and carrots until fork-tender (10-12 min). Mash coarsely.' : 'Cuece al vapor la batata, brócoli y zanahorias hasta que estén tiernos y tritúralos.' },
        { step: 4, title: isEn ? 'Cool Completely' : 'Enfriamiento Total', instruction: isEn ? 'Fold mashed vegetables into cooked beef. Allow entire batch to cool below 100°F (38°C).' : 'Deja enfriar por debajo de 38°C antes de añadir aceites.' },
        { step: 5, title: isEn ? 'Cold Oil & Calcium Fold' : 'Incorporación de Aceites y Calcio', instruction: isEn ? 'Sprinkle eggshell calcium powder, organic kelp, olive oil, and cod liver oil. Stir for 2 minutes.' : 'Añade el calcio, kelp y aceites en frío removiendo bien.' },
        { step: 6, title: isEn ? 'Portion & Refrigerate' : 'Porcionar y Guardar', instruction: isEn ? 'Weigh portions based on activity calories using our calculator. Freeze extra portions.' : 'Pesa las porciones y congela los excedentes.' },
      ],
      storageGuidelines: [
        { method: isEn ? 'Refrigerator' : 'Refrigeración', duration: '3-4 Days Max', instructions: isEn ? 'Glass containers below 38°F (3°C).' : 'Recipiente de cristal <3°C.' },
        { method: isEn ? 'Freezer' : 'Congelación', duration: 'Up to 90 Days', instructions: isEn ? 'Vacuum sealed daily meal portions.' : 'Porciones individuales al vacío.' },
        { method: isEn ? 'Serving' : 'Servicio', duration: 'Gentle Warm', instructions: isEn ? 'Warm in warm water bath to room temperature before feeding.' : 'Templar al baño maría templado.' },
      ],
      portionReference: [
        { dogWeight: '10 lbs / 4.5 kg', dailyKcal: '310 – 350 kcal', dailyGramsTotal: '230 g / day', mainProtein: '143 g', organMeat: '23 g', produceAndCarbs: '46 g', supplements: '18 g' },
        { dogWeight: '25 lbs / 11.3 kg', dailyKcal: '620 – 710 kcal', dailyGramsTotal: '460 g / day', mainProtein: '285 g', organMeat: '46 g', produceAndCarbs: '92 g', supplements: '37 g' },
        { dogWeight: '50 lbs / 22.7 kg', dailyKcal: '1,080 – 1,220 kcal', dailyGramsTotal: '810 g / day', mainProtein: '502 g', organMeat: '81 g', produceAndCarbs: '162 g', supplements: '65 g' },
        { dogWeight: '75 lbs / 34 kg', dailyKcal: '1,490 – 1,680 kcal', dailyGramsTotal: '1,120 g / day', mainProtein: '694 g', organMeat: '112 g', produceAndCarbs: '224 g', supplements: '90 g' },
      ],
      safetyAndPrecautions: {
        contraindications: [
          'DO NOT feed to dogs with diagnosed pancreatitis (requires ultra-low fat under 12% DM).',
          'DO NOT feed without calcium powder (meat without calcium causes bone demineralization).',
        ],
        transitionSteps: ['Days 1–3: 25% new / 75% old', 'Days 4–6: 50% new / 50% old', 'Days 7–9: 75% new / 25% old', 'Day 10+: 100% new blueprint'],
        calciumRule: 'Always weigh calcium precisely; beef phosphorus requires exact elemental calcium balancing.',
      },
      faq: [
        { question: isEn ? 'Can sedentary dogs eat this recipe?' : '¿Pueden comer esta receta perros sedentarios?', answer: isEn ? 'Sedentary dogs should have their daily grams reduced by 15-20% to account for lower metabolic burn, or choose the Turkey & Pumpkin Blueprint.' : 'En perros sedentarios se debe reducir la ración un 15-20% o elegir la receta de pavo.' },
      ],
    },

    // 3. SALMON & QUINOA BLUEPRINT
    {
      slug: 'salmon-quinoa-joint-coat',
      name: bp3Name,
      shortDesc: bp3ShortDesc,
      badge: isEn ? 'Joint Mobility & Pruritic Skin' : isEs ? 'Movilidad Articular y Piel' : isJa ? '関節ケア・皮膚抗炎症' : 'Articulations & Pelage',
      targetAudience: isEn ? 'Adult & Senior Canines (2+ Years) // Stiff Joints, Itchy Skin & Coat Restoration' : isEs ? 'Perros Adultos y Senior // Rigidez Articular y Piel Pruriginosa' : isJa ? '成犬〜シニア犬／関節の強ばり・皮膚のかゆみ・毛艶改善' : 'Chiens Adultes & Seniors // Articulations & Peau',
      colorTheme: '#06b6d4',
      macroProfile: {
        proteinDm: '44.0%',
        fatDm: '25.5%',
        carbsDm: '18.5%',
        moisture: '73.0%',
        kcalPerKg: '1,260 kcal/kg (approx. 35.7 kcal/oz)',
        caPhosphorusRatio: '1.28 : 1.0 (NRC Compliant)',
      },
      ingredients: [
        {
          name: isEn ? 'Wild Alaskan Salmon & Whitefish Fillets' : isEs ? 'Salmón Salvaje de Alaska y Pescado Blanco' : isJa ? '天然アラスカンサーモン＆白身魚フィレ' : 'Saumon Sauvage d’Alaska & Poisson Blanc',
          percentage: 60,
          category: isEn ? 'Primary Marine Fish' : isEs ? 'Pescado Marino Principal' : isJa ? '主海洋性魚類' : 'Poissons Marins',
          role: isEn ? 'Concentrated direct long-chain EPA & DHA omega-3s, marine bioactive peptides, and collagen for synovial fluid synthesis' : isEs ? 'EPA y DHA marinos directos y colágeno para el líquido sinovial' : isJa ? '関節滑液の合成を促す高濃度EPA/DHA、海洋性コラーゲンペプチドを供給' : 'EPA & DHA marins directs',
          clinicalBenefit: isEn ? 'Suppresses cyclooxygenase-2 (COX-2) inflammation in arthritic joints while strengthening the epidermal skin barrier.' : isEs ? 'Inhibe la inflamación COX-2 en articulaciones artrósicas y calma la piel.' : isJa ? '関節の炎症性カスケード（COX-2）を抑制し、アレルギー皮膚のバリア機能を修復。' : 'Action anti-inflammatoire puissante.',
          color: '#06b6d4',
        },
        {
          name: isEn ? 'Turkey Hearts & Gizzards' : isEs ? 'Corazones y Mollejas de Pavo' : isJa ? '七面鳥ハツ＆砂肝（タウリン源）' : 'Cœurs et Gésiers de Dinde',
          percentage: 8,
          category: isEn ? 'Organ Taurine Source' : isEs ? 'Órganos Ricos en Taurina' : isJa ? '天然タウリン供給内臓' : 'Abats Riches en Taurine',
          role: isEn ? 'Delivers critical natural taurine to prevent fish-diet cardiac DCM, plus natural CoQ10 and trace zinc' : isEs ? 'Aporta taurina natural indispensable para el corazón' : isJa ? '魚中心食で不足しやすい心筋保護タウリンとコエンザイムQ10を確実に補填' : 'Taurine naturelle essentielle',
          clinicalBenefit: isEn ? 'Guarantees cardiac myocardium support alongside joint anti-inflammatory benefits.' : isEs ? 'Garantiza la salud cardíaca mientras se cuidan las articulaciones.' : isJa ? '関節ケアと同時に心臓のポンプ機能を確実にバックアップ。' : 'Protection cardiaque continue.',
          color: '#7928ca',
        },
        {
          name: isEn ? 'Cooked Organic Quinoa' : isEs ? 'Quinoa Orgánica Cocida' : isJa ? '有機キヌア（完全調理済み）' : 'Quinoa Bio Cuite',
          percentage: 12,
          category: isEn ? 'Hypoallergenic Pseudo-Cereal Seed' : isEs ? 'Semilla Pseudocereal Hipoalergénica' : isJa ? '低アレルゲン完全アミノ酸種子' : 'Pseudocéréale Hypoallergénique',
          role: isEn ? 'Complete plant amino acid profile (contains all 9 essential amino acids) with zero gluten, lectins, or prolamin antigens' : isEs ? 'Perfil completo de 9 aminoácidos sin gluten ni antígenos' : isJa ? 'グルテンフリーで9種類の必須アミノ酸を網羅する低アレルゲンスーパーフード' : 'Protéine végétale complète sans gluten',
          clinicalBenefit: isEn ? 'Gentle on inflamed intestines while delivering bioavailable magnesium, iron, and prebiotic fiber.' : isEs ? 'Fácil de digerir en intestinos reactivos con aporte de magnesio.' : isJa ? '敏感な消化管に負担をかけず、抗アレルギー食のベースとして機能。' : 'Haute tolérance digestive.',
          color: '#f5a623',
          affiliateKey: 'quinoa',
        },
        {
          name: isEn ? 'Steamed Blueberries, Kale & Zucchini' : isEs ? 'Arándanos, Col Kale y Calabacín al Vapor' : isJa ? 'ブルーベリー・ケール・ズッキーニ（蒸し加工）' : 'Myrtilles, Kale et Courgettes Vapeur',
          percentage: 10,
          category: isEn ? 'High-ORAC Polyphenols & Anthocyanins' : isEs ? 'Antioxidantes de Alta Potencia ORAC' : isJa ? '高ORACポリフェノール・アントシアニン' : 'Super-Antioxydants Végétaux',
          role: isEn ? 'Anthocyanin bioflavonoids, lutein, and vitamin C to protect articular cartilage chondrocytes from oxidative degradation' : isEs ? 'Bioflavonoides y luteína para proteger el cartílago articular' : isJa ? '軟骨細胞の酸化崩壊を防ぐ高濃度アントシアニンと植物性フラボノイド' : 'Protection des chondrocytes',
          clinicalBenefit: isEn ? 'Protects joint chondrocytes from premature cell death and supports cognitive longevity in aging dogs.' : isEs ? 'Protege el cartílago y favorece la agilidad cognitiva en perros mayores.' : isJa ? 'シニア期の関節軟骨の摩耗を防ぎ、脳の神経細胞のアンチエイジングを促進。' : 'Préservation cognitive et articulaire.',
          color: '#10b981',
        },
        {
          name: isEn ? 'Cold-Pressed Hemp Seed Oil & Green-Lipped Mussel Blend' : isEs ? 'Aceite de Cáñamo Prensado en Frío y Mejillón de Labio Verde' : isJa ? 'コールドプレス麻の実オイル＆緑イ貝パウダー' : 'Huile de Chanvre & Moule Verte',
          percentage: 6,
          category: isEn ? 'GLA & Glycosaminoglycans (GAGs)' : isEs ? 'GLA y Glicosaminoglicanos' : isJa ? 'GLA・天然GAG関節潤滑因子' : 'GLA & Glycosaminoglycanes',
          role: isEn ? 'Natural gamma-linolenic acid (GLA), chondroitin sulfate, and hyaluronic acid to stimulate synovial lubrication' : isEs ? 'Ácido gamma-linolénico (GLA) y condroitina para lubricar la articulación' : isJa ? '関節軟骨の水分を保持するコンドロイチン硫酸、ヒアルロン酸、天然GLAを供給' : 'Lubrification du cartilage',
          clinicalBenefit: isEn ? 'Clinically alleviates morning joint stiffness and dry, itchy epidermal flaking. Add post-cooling.' : isEs ? 'Alivia la rigidez matutina y el picor en la piel. Añadir en frío.' : isJa ? '起床時の関節の強ばりを劇的に緩和し、フケやかゆみを一掃。必ず後入れ。' : 'Soulage les raideurs matinales.',
          color: '#0070f3',
        },
        {
          name: isEn ? 'Organic Seaweed Calcium (Lithothamnion) & Kelp' : isEs ? 'Calcio Marino de Algas y Kelp' : isJa ? '有機海藻カルシウム（リソサムニウム）＆ケルプ' : 'Calcium d’Algues Marines & Kelp',
          percentage: 4,
          category: isEn ? 'Porous Plant Marine Ionic Calcium' : isEs ? 'Calcio Iónico Vegetal Marino' : isJa ? '植物性多孔質イオン化カルシウム' : 'Calcium Marin Naturel',
          role: isEn ? 'Highly bioavailable porous calcified red algae delivering natural ionic calcium plus 72 bioactive trace minerals' : isEs ? 'Algas rojas calcificadas con 72 minerales traza biodisponibles' : isJa ? '72種類の微量ミネラルを含む天然紅藻由来多孔質カルシウムでCa:P 1.28:1を達成' : '72 oligo-éléments marins',
          clinicalBenefit: isEn ? 'Significantly gentler on sensitive digestive tracts than heavy synthetic calcium supplements.' : isEs ? 'Mucho más suave para el estómago que los suplementos químicos.' : isJa ? '合成炭酸カルシウムよりも胃粘膜への刺激が少なく、優れた骨密度維持能を発揮。' : 'Absorption digestive optimale.',
          color: '#e11d48',
          affiliateKey: 'kelp',
        },
      ],
      executiveSummary: isEn
        ? 'A clinical anti-inflammatory whole-food formulation designed for dogs with joint stiffness, mobility decline, chronic skin allergies, or dull coats. High doses of marine EPA/DHA from wild salmon work in synergy with green-lipped mussel glycosaminoglycans and cold-pressed hemp oil to lubricate joints and soothe dermal pruritus.'
        : isEs
        ? 'Una formulación clínica antiinflamatoria diseñada para perros con rigidez articular, artrosis, alergias en la piel o picor crónico. Las altas dosis de EPA/DHA del salmón salvaje junto al mejillón de labio verde y aceite de cáñamo lubrican las articulaciones y restauran la barrera dérmica.'
        : isJa
        ? '関節炎による歩行の強ばりや、慢性的な皮膚のかゆみ・フケ・毛艶の衰えに悩む愛犬のための臨床抗炎症設計図。天然サーモンのEPA/DHA、緑イ貝の天然グリコサミノグリカン、麻の実オイルのGLAが相乗的に働き、痛みを和らげ皮膚バリアを再生します。'
        : 'Formule marine anti-inflammatoire pour les articulations et la peau.',
      clinicalRationale: [
        {
          title: isEn ? '1. The Marine EPA & DHA Cascade for Joints & Skin' : isEs ? '1. La Cascada de EPA y DHA para Articulaciones y Piel' : isJa ? '1. 関節軟骨と皮膚を守る海洋性EPA・DHAの抗炎症カスケード' : '1. Cascade Anti-Inflammatoire EPA/DHA',
          description: isEn
            ? 'When cell membranes are enriched with EPA and DHA, inflammatory arachidonic acid is displaced. Enzymes convert EPA into 3-series prostaglandins and 5-series leukotrienes, which exert tenfold lower inflammatory potency, reducing joint pain and skin erythema.'
            : isEs
            ? 'El EPA y DHA desplazan al ácido araquidónico inflamatorio en las membranas celulares, reduciendo drásticamente el dolor articular y el enrojecimiento de la piel.'
            : isJa
            ? 'EPAとDHAが細胞膜のアラキドン酸を置換することで、抗炎症性プロスタグランジンを優先的に生成し、関節軟骨の破壊と皮膚の赤み・かゆみを劇的に沈静化させます。'
            : 'Réduction ciblée de la douleur articulaire.',
          points: isEn
            ? ['Direct marine omega-3s are 10x more bioavailable than plant flaxseed ALA.', 'Supports joint synovial lubrication and chondrocyte longevity.', 'Alleviates atopic dermatitis without reliance on immunosuppressive drugs.']
            : isEs
            ? ['El omega-3 marino es 10 veces más asimilable que el lino vegetal.', 'Lubrica el líquido sinovial articular.', 'Alivia la dermatitis atópica de forma natural.']
            : isJa
            ? ['亜麻仁油などの植物性ALAに比べ、犬の体内での抗炎症利用率が10倍以上高い。', '関節滑液の粘度を改善し、歩行時の摩擦痛を緩和。', 'ステロイド等に頼らずアトピー性皮膚炎の痒みを自然に沈静化。']
            : ['Biodisponibilité maximale par rapport aux huiles végétales.', 'Amélioration de la mobilité.', 'Calme le prurit.'],
        },
      ],
      prepProtocol: [
        { step: 1, title: isEn ? 'Fish & Organ Poaching' : 'Pochado de Pescado', instruction: isEn ? 'Gently poach salmon, whitefish, and turkey hearts in 1 cup of water on low heat for 7-8 minutes. Flake fish carefully.' : 'Cocina el salmón y el pescado blanco a fuego lento 7-8 min.' },
        { step: 2, title: isEn ? 'Rinse & Cook Quinoa' : 'Cocinar la Quinoa', instruction: isEn ? 'Rinse quinoa to remove saponins. Boil in 2x water until fluffy (15 min). Cool.' : 'Enjuaga y cuece la quinoa durante 15 minutos.' },
        { step: 3, title: isEn ? 'Steam Berries & Greens' : 'Cocer Arándanos y Verduras', instruction: isEn ? 'Steam kale and zucchini for 4 min. Stir in fresh blueberries and pulse into coarse puree.' : 'Cuece el kale y calabacín al vapor y tritura con los arándanos.' },
        { step: 4, title: isEn ? 'MANDATORY Cool Down' : 'Enfriamiento Obligatorio', instruction: isEn ? 'Fold all cooked ingredients together. Cool below 100°F (38°C) before proceeding.' : 'Deja enfriar completamente antes de añadir aceites y algas.' },
        { step: 5, title: isEn ? 'Cold Supplement Stir' : 'Mezclar Aceites y Calcio en Frío', instruction: isEn ? 'Sprinkle organic seaweed calcium, kelp, hemp oil, and green-lipped mussel powder. Mix for 2 min.' : 'Añade el calcio de algas, aceite de cáñamo y mejillón verde en frío.' },
        { step: 6, title: isEn ? 'Weigh & Freeze' : 'Pesar y Congelar', instruction: isEn ? 'Weigh daily portions with a digital scale. Store current meals in fridge and freeze rest.' : 'Pesa las porciones y congela los excedentes.' },
      ],
      storageGuidelines: [
        { method: isEn ? 'Refrigerator' : 'Refrigeración', duration: '3 Days Max', instructions: isEn ? 'Fish spoils faster than poultry; consume within 72 hours.' : 'Consumir en un máximo de 72 horas.' },
        { method: isEn ? 'Freezer' : 'Congelación', duration: 'Up to 60 Days', instructions: isEn ? 'Freeze airtight to protect delicate fish lipids.' : 'Congelar al vacío para proteger los lípidos.' },
        { method: isEn ? 'Thawing' : 'Descongelación', duration: 'Fridge Thaw', instructions: isEn ? 'Thaw in refrigerator. Never use high microwave heat.' : 'Descongelar en frío.' },
      ],
      portionReference: [
        { dogWeight: '10 lbs / 4.5 kg', dailyKcal: '300 – 340 kcal', dailyGramsTotal: '235 g / day', mainProtein: '141 g', organMeat: '19 g', produceAndCarbs: '52 g', supplements: '23 g' },
        { dogWeight: '25 lbs / 11.3 kg', dailyKcal: '600 – 680 kcal', dailyGramsTotal: '470 g / day', mainProtein: '282 g', organMeat: '38 g', produceAndCarbs: '103 g', supplements: '47 g' },
        { dogWeight: '50 lbs / 22.7 kg', dailyKcal: '1,040 – 1,180 kcal', dailyGramsTotal: '830 g / day', mainProtein: '498 g', organMeat: '66 g', produceAndCarbs: '183 g', supplements: '83 g' },
        { dogWeight: '75 lbs / 34 kg', dailyKcal: '1,450 – 1,620 kcal', dailyGramsTotal: '1,150 g / day', mainProtein: '690 g', organMeat: '92 g', produceAndCarbs: '253 g', supplements: '115 g' },
      ],
      safetyAndPrecautions: {
        contraindications: [
          'DO NOT feed wild salmon caught raw from the Pacific Northwest without cooking (risk of Salmon Poisoning Disease from Neorickettsia helminthoeca parasite). Cooking completely neutralizes this risk.',
        ],
        transitionSteps: ['Days 1–3: 25% new / 75% old', 'Days 4–6: 50% new / 50% old', 'Days 7–9: 75% new / 25% old', 'Day 10+: 100% new blueprint'],
        calciumRule: 'Seaweed calcium must be added accurately to maintain Ca:P balance.',
      },
      faq: [
        { question: isEn ? 'Can canned salmon be used?' : '¿Se puede usar salmón en lata?', answer: isEn ? 'Only wild canned pink or red salmon in water with NO added salt. Fresh or frozen wild salmon is preferred.' : 'Solo salmón al natural sin sal añadida.' },
      ],
    },

    // 4. LAMB & CRANBERRY BLUEPRINT
    {
      slug: 'lamb-cranberry-gentle-gut',
      name: bp4Name,
      shortDesc: bp4ShortDesc,
      badge: isEn ? 'Hypoallergenic Gut & Urinary' : isEs ? 'Hipoalergénico Digestivo y Urinario' : isJa ? '低アレルゲン腸管・尿路ケア' : 'Hypoallergénique Intestinal & Urinaire',
      targetAudience: isEn ? 'Adult Dogs with Severe Food Allergies (Beef/Chicken) & Chronic Digestive Flare-Ups' : isEs ? 'Perros con Alergias Severas al Pollo/Ternera y Digestión Crónica Sensible' : isJa ? '牛肉・鶏肉アレルギー、慢性胃腸炎、尿路トラブルを抱える犬' : 'Chiens Allergiques au Poulet/Bœuf & Intestins Sensibles',
      colorTheme: '#10b981',
      macroProfile: {
        proteinDm: '45.8%',
        fatDm: '26.2%',
        carbsDm: '16.0%',
        moisture: '72.0%',
        kcalPerKg: '1,310 kcal/kg (approx. 37.1 kcal/oz)',
        caPhosphorusRatio: '1.25 : 1.0 (NRC Compliant)',
      },
      ingredients: [
        {
          name: isEn ? 'Lean Ground Pasture Lamb' : isEs ? 'Carne Picada de Cordero de Pasto Magra' : isJa ? '放牧ラム赤身挽肉（低アレルゲン単一肉）' : 'Agneau de Pâturage Haché Maigre',
          percentage: 64,
          category: isEn ? 'Novel Red Meat' : isEs ? 'Carne Roja Novedosa' : isJa ? '新規単一赤身肉' : 'Protéine Novatrice',
          role: isEn ? 'High bioavailable L-carnitine, zinc, vitamin B12, and novel antigen profile for elimination diets' : isEs ? 'L-carnitina, zinc y perfil antigénico novedoso para dietas de descarte' : isJa ? '鶏・牛アレルギー犬のための高純度L-カルニチン、有機亜鉛、活性型B12を供給' : 'L-carnitine, zinc et B12',
          clinicalBenefit: isEn ? 'Bypasses existing immune sensitization to common commercial poultry and beef proteins.' : isEs ? 'Evita reacciones inmunitarias al pollo o ternera en perros alérgicos.' : isJa ? '既存の食物アレルギー感作を回避し、頑固な皮膚炎や軟便を根底から解消。' : 'Alternative idéale aux volailles et bœuf.',
          color: '#10b981',
        },
        {
          name: isEn ? 'Lamb Liver & Kidneys' : isEs ? 'Hígado y Riñones de Cordero' : isJa ? 'ラムレバー（肝臓）＆ラムキドニー（腎臓）' : 'Foie et Rognons d’Agneau',
          percentage: 8,
          category: isEn ? 'Nutrient-Dense Secreting Organs' : isEs ? 'Vísceras Densas en Nutrientes' : isJa ? '分泌性高機能内臓' : 'Abats Filtrants',
          role: isEn ? 'Natural food-state selenium, bioavailable copper, vitamin A, and active methylation folates' : isEs ? 'Selenio, cobre, vitamina A y folatos de metilación' : isJa ? '抗酸化セレン、銅、レチノール、葉酸を高密度で補給' : 'Sélénium, cuivre et folates',
          clinicalBenefit: isEn ? 'Protects cellular membranes from oxidative damage and supports healthy immune modulation.' : isEs ? 'Protege las células y fortalece la inmunidad intestinal.' : isJa ? '細胞膜の過酸化を防ぎ、腸管免疫（GALT）の正常化をサポート。' : 'Soutien immunitaire intestinal.',
          color: '#7928ca',
        },
        {
          name: isEn ? 'Steamed Butternut Squash & Pure Cranberries' : isEs ? 'Calabaza Butternut y Arándanos Rojos Puros' : isJa ? 'バターナッツスクワッシュ＆無添加生クランベリー' : 'Courge Butternut & Canneberges Pures',
          percentage: 12,
          category: isEn ? 'Gut-Soothing Pectin & Urinary PACs' : isEs ? 'Pectina Digestiva y PACs Urinarios' : isJa ? '整腸ペクチン・尿路プロアントシアニジン' : 'Pectine & PACs Urinaires',
          role: isEn ? 'Type-A proanthocyanidins (PACs) preventing uropathogenic E. coli adhesion, plus soothing soluble pectin' : isEs ? 'Proantocianidinas para la salud urinaria y pectina para el colon' : isJa ? '尿路への病原菌定着を防ぐプロアントシアニジン（PACs）と粘膜保護ペクチン' : 'Protection muqueuse et urinaire',
          clinicalBenefit: isEn ? 'Promotes smooth colonic transit, firms loose stool, and prevents recurring urinary tract infections.' : isEs ? 'Regula las heces blandas y previene infecciones urinarias.' : isJa ? '腸粘膜の炎症を優しく包んで軟便を固め、同時に膀胱・尿路の衛生を保護。' : 'Prévient les inconforts urinaires et digestifs.',
          color: '#f5a623',
        },
        {
          name: isEn ? 'Steamed Green Beans & Parsley' : isEs ? 'Judías Verdes y Perejil al Vapor' : isJa ? '蒸しいんげん豆＆生パセリ（微細刻み）' : 'Haricots Verts & Persil Vapeur',
          percentage: 8,
          category: isEn ? 'Digestive Chlorophyll & Gentle Fiber' : isEs ? 'Clorofila Digestiva y Fibra Suave' : isJa ? 'クロロフィル・低刺激性繊維' : 'Chlorophylle Digestif',
          role: isEn ? 'Insoluble gentle bulk fiber and natural apigenin flavonoids to calm hyperactive intestinal peristalsis' : isEs ? 'Fibra suave y apigenina para calmar espasmos intestinales' : isJa ? '腸管の異常痙攣を鎮静化するアピゲニン、クロロフィル、低刺激食物繊維' : 'Apaise le péristaltisme',
          clinicalBenefit: isEn ? 'Deodorizes breath naturally and provides gentle dietary bulk without fermentative gas.' : isEs ? 'Reduce los gases y favorece un aliento fresco natural.' : isJa ? 'ガス発生（腹部膨満）を起こさずに便のかさを増やし、口臭を天然脱臭。' : 'Réduit les flatulences.',
          color: '#0070f3',
        },
        {
          name: isEn ? 'Eggshell Calcium & Kelp Mineral Blend' : isEs ? 'Calcio de Cáscara de Huevo y Kelp' : isJa ? '超微粉末 卵殻カルシウム＆有機ケルプ' : 'Poudre de Coquille d’Œuf & Kelp',
          percentage: 5,
          category: isEn ? 'Essential Calcium & Iodine' : isEs ? 'Calcio y Yodo Esencial' : isJa ? '必須骨格ミネラル' : 'Calcium Essentiel',
          role: isEn ? 'Elemental calcium carbonate calibrated to neutralize lamb meat phosphorus at 1.25:1 Ca:P' : isEs ? 'Carbonato de calcio calibrado para equilibrar el cordero a 1.25:1' : isJa ? '放牧ラム肉の豊富なリンを1.25:1に中和する純粋炭酸カルシウム' : 'Ratio Ca:P 1,25:1',
          clinicalBenefit: isEn ? 'Essential skeletal mineralization with neutral gastric tolerability for sensitive stomachs.' : isEs ? 'Mineralización ósea sin irritación estomacal.' : isJa ? '過敏な胃腸にも一切の刺激を与えず、完璧な骨格形成と骨密度を維持。' : 'Haute tolérance gastrique.',
          color: '#e11d48',
          affiliateKey: 'eggshellPowder',
          affiliateUrl: 'https://amzn.to/4haNVWy',
        },
        {
          name: isEn ? 'Wild Alaskan Salmon Oil (Cold-Added)' : isEs ? 'Aceite de Salmón Salvaje de Alaska' : isJa ? '天然アラスカンサーモンオイル（後入れ）' : 'Huile de Saumon d’Alaska',
          percentage: 3,
          category: isEn ? 'Marine Omega-3 EPA/DHA' : isEs ? 'Omega-3 Marino' : isJa ? '海洋性長鎖オメガ3' : 'Oméga-3 Marins',
          role: isEn ? 'Direct preformed EPA/DHA to soothe the intestinal mucosal barrier and calm allergic pruritus' : isEs ? 'EPA/DHA para calmar la mucosa intestinal y el picor' : isJa ? '腸粘膜の炎症を鎮め、皮膚の痒みを抑える活性型EPA/DHA' : 'Apaise la muqueuse intestinale',
          clinicalBenefit: isEn ? 'Essential fatty acids protecting gut barrier integrity. Always added cold.' : isEs ? 'Protege la barrera intestinal. Añadir siempre en frío.' : isJa ? 'リーキーガット（腸漏れ）を防ぐ必須脂肪酸。必ず冷却後に後入れ。' : 'Intégrité de la barrière intestinale.',
          color: '#06b6d4',
          affiliateKey: 'salmonOil',
          affiliateUrl: 'https://amzn.to/46HCJdW',
        },
      ],
      executiveSummary: isEn
        ? 'A targeted hypoallergenic clinical formula engineered for dogs plagued by chronic soft stools, food intolerances to chicken or beef, gas, or recurrent urinary tract irritation. Pasture-raised lamb provides a clean novel red protein source, while butternut squash and pure cranberries deliver soothing pectin and urinary protective proanthocyanidins.'
        : isEs
        ? 'Una fórmula hipoalergénica dirigida a perros con heces blandas crónicas, intolerancia al pollo o vacuno, gases o irritaciones urinarias. El cordero de pasto ofrece una proteína limpia novedosa, mientras que la calabaza y los arándanos protegen el intestino y las vías urinarias.'
        : isJa
        ? '鶏肉・牛肉へのアレルギー、慢性的軟便、お腹のガスだまり、尿路トラブルに悩む愛犬のための臨床特別設計図。新規タンパク質としての放牧ラム肉に、整腸バターナッツスクワッシュと尿路を衛生的に保つクランベリーを融合させました。'
        : 'Formule novatrice pour chiens intolérants au bœuf et volailles.',
      clinicalRationale: [
        {
          title: isEn ? '1. Why Pasture Lamb for Chronic Food Sensitivities?' : isEs ? '1. ¿Por qué Cordero de Pasto para Alergias Crónicas?' : isJa ? '1. 慢性アレルギーになぜ放牧ラム肉なのか？' : '1. Pourquoi l’Agneau pour les Chiens Allergiques ?',
          description: isEn
            ? 'Commercial poultry and grain-fed beef account for the overwhelming majority of canine allergic dermatological reactions. Pasture-raised lamb presents a novel, non-cross-reactive antigen profile while providing exceptional amino acid bioavailability.'
            : isEs
            ? 'El pollo y la ternera causan la mayoría de alergias caninas. El cordero de pasto no presenta reactividad cruzada y es sumamente digerible.'
            : isJa
            ? '市販の家禽類や穀物肥育牛は犬の食物アレルギーの大部分を占めます。放牧ラム肉はこれらと交差反応を起こさない新規タンパク質として腸管免疫を休ませます。'
            : 'Protéine novatrice sans réaction croisée avec le bœuf ou la volaille.',
          points: isEn
            ? ['Eliminates the #1 and #2 most common canine protein allergens.', 'High natural L-carnitine supports heart muscle and fat metabolism.', 'Exceptional palatability even for nauseous or picky dogs.']
            : isEs
            ? ['Elimina los alérgenos más comunes de la dieta.', 'L-carnitina para el corazón y metabolismo de grasas.', 'Excelente palatabilidad para perros inapetentes.']
            : isJa
            ? ['犬の2大アレルゲン（鶏肉・牛肉）を完全排除。', '高純度L-カルニチンが心筋機能と脂質代謝をサポート。', '食欲不振や偏食の犬でも喜んで食べる抜群の嗜好性。']
            : ['Élimine les allergènes majeurs.', 'L-carnitine protectrice.', 'Excellente appétence.'],
        },
      ],
      prepProtocol: [
        { step: 1, title: isEn ? 'Organ Dice & Lamb Prep' : 'Corte de Órganos y Cordero', instruction: isEn ? 'Dice lamb liver and kidneys into 1/4-inch cubes.' : 'Pica el hígado y los riñones en dados pequeños.' },
        { step: 2, title: isEn ? 'Gentle Poach' : 'Cocción Lenta', instruction: isEn ? 'Poach lean ground lamb and organs in 1/2 cup water for 8-10 min until fully cooked. Discard excess fat if lamb is overly greasy.' : 'Cocina a fuego lento 8-10 minutos.' },
        { step: 3, title: isEn ? 'Steam Squash, Cranberries & Greens' : 'Cocer Calabaza y Arándanos', instruction: isEn ? 'Steam peeled butternut squash, green beans, and fresh cranberries for 6-8 min until tender. Puree finely.' : 'Cuece al vapor la calabaza, judías y arándanos, y tritura bien.' },
        { step: 4, title: isEn ? 'Cool Completely (<100°F)' : 'Enfriamiento Total (<38°C)', instruction: isEn ? 'Combine squash puree with cooked lamb. Allow pot to cool to room temperature.' : 'Deja enfriar a temperatura ambiente.' },
        { step: 5, title: isEn ? 'Cold Supplement Fold' : 'Mezcla de Suplementos en Frío', instruction: isEn ? 'Stir in eggshell calcium powder, kelp, and cold wild salmon oil for 2 minutes.' : 'Añade el calcio, kelp y aceite de salmón removiendo bien.' },
        { step: 6, title: isEn ? 'Weigh Portions' : 'Pesar Raciones', instruction: isEn ? 'Weigh portions on digital scale. Store in glass or freeze.' : 'Pesa las porciones y guarda en frío.' },
      ],
      storageGuidelines: [
        { method: isEn ? 'Refrigerator' : 'Refrigeración', duration: '3-4 Days Max', instructions: isEn ? 'Glass container below 38°F (3°C).' : 'Recipiente de cristal <3°C.' },
        { method: isEn ? 'Freezer' : 'Congelación', duration: 'Up to 90 Days', instructions: isEn ? 'Airtight meal portions.' : 'Porciones individuales al vacío.' },
        { method: isEn ? 'Serving' : 'Servicio', duration: 'Warm Gently', instructions: isEn ? 'Warm gently in warm water bath.' : 'Templar al baño maría.' },
      ],
      portionReference: [
        { dogWeight: '10 lbs / 4.5 kg', dailyKcal: '305 – 345 kcal', dailyGramsTotal: '230 g / day', mainProtein: '147 g', organMeat: '18 g', produceAndCarbs: '46 g', supplements: '19 g' },
        { dogWeight: '25 lbs / 11.3 kg', dailyKcal: '610 – 700 kcal', dailyGramsTotal: '460 g / day', mainProtein: '294 g', organMeat: '37 g', produceAndCarbs: '92 g', supplements: '37 g' },
        { dogWeight: '50 lbs / 22.7 kg', dailyKcal: '1,060 – 1,200 kcal', dailyGramsTotal: '820 g / day', mainProtein: '525 g', organMeat: '66 g', produceAndCarbs: '164 g', supplements: '65 g' },
        { dogWeight: '75 lbs / 34 kg', dailyKcal: '1,480 – 1,650 kcal', dailyGramsTotal: '1,130 g / day', mainProtein: '723 g', organMeat: '90 g', produceAndCarbs: '226 g', supplements: '91 g' },
      ],
      safetyAndPrecautions: {
        contraindications: [
          'DO NOT use sweetened or dried cranberry products with added sugar or grape juice concentrates; use fresh, frozen, or pure unsweetened cranberries only.',
        ],
        transitionSteps: ['Days 1–3: 25% new / 75% old', 'Days 4–6: 50% new / 50% old', 'Days 7–9: 75% new / 25% old', 'Day 10+: 100% new blueprint'],
        calciumRule: 'Always ensure full calcium powder inclusion to prevent calcium deficiency.',
      },
      faq: [
        { question: isEn ? 'Are cranberries safe for dogs?' : '¿Son seguros los arándanos rojos para perros?', answer: isEn ? 'Yes, in whole cooked pure form. They are rich in antioxidants and proanthocyanidins that protect bladder lining.' : 'Sí, son seguros y excelentes para la vejiga y vías urinarias.' },
      ],
    },
  ];
}
