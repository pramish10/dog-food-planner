import type { Lang } from '../i18n/ui';

export const HOMEMADE_RECIPE_SLUGS = [
  'gently-cooked-turkey-pumpkin',
  'raw-barf-beef-duck',
  'superfood-kibble-topper',
] as const;

export type HomemadeRecipeSlug = (typeof HOMEMADE_RECIPE_SLUGS)[number];

export interface HomemadeIngredient {
  name: string;
  percentage: string;
  numericPercentage: number;
  color: string;
  batchAmount: string;
  category: string;
  role: string;
  clinicalBenefit: string;
  affiliateUrl?: string;
}

export interface HomemadeMacroProfile {
  proteinDm: string;
  fatDm: string;
  carbsDm: string;
  fiberDm: string;
  moisture: string;
  kcalPerKg: string;
  caPhosphorusRatio: string;
}

export interface HomemadePortionRow {
  dogWeight: string;
  dailyGrams: string;
  dailyKcal: string;
  mealsPerDay: string;
  servingNotes: string;
}

export interface HomemadeRecipe {
  slug: HomemadeRecipeSlug;
  tag: string;
  title: string;
  heroTitle: string;
  shortDesc: string;
  summary: string;
  badge: string;
  prepTime: string;
  cookTime: string;
  yieldAmount: string;
  lifeStage: string;
  dietStyle: string;
  colorTheme: {
    accent: string;
    badgeBg: string;
    badgeText: string;
    tagBg: string;
    tagText: string;
  };
  macroProfile: HomemadeMacroProfile;
  keyHighlights: string[];
  ingredients: HomemadeIngredient[];
  executiveRationale: string;
  clinicalDeepDives: {
    title: string;
    description: string;
    keyPoints: string[];
  }[];
  prepProtocol: {
    step: number;
    title: string;
    instruction: string;
    criticalTip?: string;
  }[];
  portionReference: HomemadePortionRow[];
  storageGuidelines: {
    method: string;
    duration: string;
    instructions: string;
  }[];
  safetyAndPrecautions: {
    calciumRule: string;
    hygieneRule: string;
    contraindications: string[];
    transitionSchedule: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface HomemadeRecipesPageI18n {
  badge: string;
  reviewedBy: string;
  quickSpecsTitle: string;
  prepTimeLabel: string;
  cookTimeLabel: string;
  yieldLabel: string;
  lifeStageLabel: string;
  dietStyleLabel: string;
  caRatioLabel: string;
  formulaTitle: string;
  formulaSubtitle: string;
  ingredientCol: string;
  ratioCol: string;
  batchCol: string;
  roleCol: string;
  macroTitle: string;
  proteinLabel: string;
  fatLabel: string;
  carbsLabel: string;
  fiberLabel: string;
  moistureLabel: string;
  energyLabel: string;
  clinicalTitle: string;
  prepTitle: string;
  prepSubtitle: string;
  portionTitle: string;
  portionSubtitle: string;
  dogWeightCol: string;
  dailyGramsCol: string;
  dailyKcalCol: string;
  mealsCol: string;
  servingNotesCol: string;
  storageTitle: string;
  safetyTitle: string;
  calciumNoticeTitle: string;
  contraindicationsTitle: string;
  transitionTitle: string;
  faqTitle: string;
  prevRecipe: string;
  nextRecipe: string;
  backToRecipes: string;
  calculatorCtaTitle: string;
  calculatorCtaDesc: string;
  calculatorCtaBtn: string;
  titleSuffix: string;
  readMoreBtn: string;
}

export const HOMEMADE_RECIPES_PAGE_I18N: Record<Lang, HomemadeRecipesPageI18n> = {
  en: {
    badge: 'VETERINARY HOMEMADE RECIPE // NRC & AAFCO CANINE NUTRITION STANDARDS',
    reviewedBy: 'Formulated & Clinically Reviewed by: Veterinary Canine Clinical Nutrition Specialist (DVM, Pet Nutritionist)',
    quickSpecsTitle: 'Recipe Specification & Vital Metrics',
    prepTimeLabel: 'Preparation Time',
    cookTimeLabel: 'Cooking Time',
    yieldLabel: 'Standard Batch Yield',
    lifeStageLabel: 'Intended Life Stage',
    dietStyleLabel: 'Nutritional Protocol',
    caRatioLabel: 'Calcium : Phosphorus Ratio',
    formulaTitle: 'Complete Balanced Ingredient Formulation',
    formulaSubtitle: 'Exact gram and percentage formulation. Formulated to meet minimum adult canine maintenance requirements.',
    ingredientCol: 'Clinical Ingredient',
    ratioCol: 'Batch Ratio (%)',
    batchCol: 'Batch Amount',
    roleCol: 'Biological Role & Clinical Benefit',
    macroTitle: 'Calculated Dry Matter Macro & Energy Profile',
    proteinLabel: 'Crude Protein (Dry Matter)',
    fatLabel: 'Crude Fat (Dry Matter)',
    carbsLabel: 'Carbohydrates (Dry Matter)',
    fiberLabel: 'Crude Fiber (Dry Matter)',
    moistureLabel: 'Moisture Content',
    energyLabel: 'Calculated Metabolizable Energy',
    clinicalTitle: 'Veterinary Nutritional Rationale & Mechanism of Action',
    prepTitle: 'Step-by-Step Culinary Preparation Protocol',
    prepSubtitle: 'Follow precise cooking and cooling protocols to preserve bioavailable nutrients and prevent nutrient degradation.',
    portionTitle: 'Scientific Daily Portion Reference by Dog Weight',
    portionSubtitle: 'Calculated based on average adult maintenance energy requirement (MER = 95 × BW^0.75 kcal/day).',
    dogWeightCol: 'Dog Weight',
    dailyGramsCol: 'Daily Portioned Grams',
    dailyKcalCol: 'Daily Target Kcal',
    mealsCol: 'Recommended Feedings',
    servingNotesCol: 'Clinical Serving Advice',
    storageTitle: 'Safe Storage, Freezing & Thawing Guidelines',
    safetyTitle: 'Safety Warnings, Contraindications & Transition Protocol',
    calciumNoticeTitle: 'Crucial Calcium Balancing Mandate',
    contraindicationsTitle: 'Clinical Contraindications (Do NOT Feed If)',
    transitionTitle: 'Gradual 10-Day Gastrointestinal Transition Plan',
    faqTitle: 'Frequently Asked Questions About This Recipe',
    prevRecipe: 'Previous Recipe',
    nextRecipe: 'Next Recipe',
    backToRecipes: 'Back to All Homemade Recipes',
    calculatorCtaTitle: 'Need Custom Gram Portions Tailored to Your Dog’s Exact Activity?',
    calculatorCtaDesc: 'Use our free scientific canine nutrition engine to determine custom grams per meal for puppies, seniors, and active breeds.',
    calculatorCtaBtn: 'Open Canine Feeding Calculator →',
    titleSuffix: 'Detailed Recipe, Ingredients & Prep Guide | DogFoodPlanner.com',
    readMoreBtn: 'Read full recipe & preparation guide →',
  },
  es: {
    badge: 'RECETA CASERA VETERINARIA // ESTÁNDARES NUTRICIONALES NRC Y AAFCO',
    reviewedBy: 'Formulado y revisado clínicamente por: Especialista Veterinario en Nutrición Canina (DVM)',
    quickSpecsTitle: 'Especificaciones de la Receta y Métricas Clave',
    prepTimeLabel: 'Tiempo de Preparación',
    cookTimeLabel: 'Tiempo de Cocción',
    yieldLabel: 'Rendimiento del Lote',
    lifeStageLabel: 'Etapa de Vida',
    dietStyleLabel: 'Protocolo Nutricional',
    caRatioLabel: 'Relación Calcio : Fósforo',
    formulaTitle: 'Formulación Completa y Equilibrada de Ingredientes',
    formulaSubtitle: 'Porcentajes exactos y cantidades en gramos. Formulado para cumplir los requerimientos de mantenimiento canino.',
    ingredientCol: 'Ingrediente Clínico',
    ratioCol: 'Proporción (%)',
    batchCol: 'Cantidad por Lote',
    roleCol: 'Función Biológica y Beneficio Clínico',
    macroTitle: 'Perfil de Macronutrientes en Materia Seca y Energía',
    proteinLabel: 'Proteína Bruta (Materia Seca)',
    fatLabel: 'Grasa Bruta (Materia Seca)',
    carbsLabel: 'Carbohidratos (Materia Seca)',
    fiberLabel: 'Fibra Bruta (Materia Seca)',
    moistureLabel: 'Contenido de Humedad',
    energyLabel: 'Energía Metabolizable Calculada',
    clinicalTitle: 'Fundamento Nutricional Veterinario y Mecanismo de Acción',
    prepTitle: 'Protocolo Culinario de Preparación Paso a Paso',
    prepSubtitle: 'Siga los pasos de cocción y enfriamiento para conservar nutrientes bioactivos y evitar desbalances.',
    portionTitle: 'Guía de Porciones Diarias por Peso Corporal',
    portionSubtitle: 'Calculado según los requerimientos energéticos estándar de mantenimiento canino (MER).',
    dogWeightCol: 'Peso del Perro',
    dailyGramsCol: 'Gramos Diarios',
    dailyKcalCol: 'Calorías Diarias (Kcal)',
    mealsCol: 'Tomas Recomendadas',
    servingNotesCol: 'Consejos Clínicos de Servicio',
    storageTitle: 'Pautas de Conservación, Congelación y Descongelación',
    safetyTitle: 'Seguridad, Contraindicaciones y Transición Gradual',
    calciumNoticeTitle: 'Mandato Vital de Equilibrio de Calcio',
    contraindicationsTitle: 'Contraindicaciones Clínicas (NO Administrar Si)',
    transitionTitle: 'Plan de Transición Digestiva de 10 Días',
    faqTitle: 'Preguntas Frecuentes sobre Esta Receta',
    prevRecipe: 'Receta Anterior',
    nextRecipe: 'Receta Siguiente',
    backToRecipes: 'Volver a Todas las Recetas Caseras',
    calculatorCtaTitle: '¿Desea Calcular los Gramos Exactos para su Perro?',
    calculatorCtaDesc: 'Utilice nuestra calculadora veterinaria gratuita para ajustar porciones según peso, actividad y edad.',
    calculatorCtaBtn: 'Abrir Calculadora de Alimentación →',
    titleSuffix: 'Guía Detallada de Receta, Ingredientes y Cocina | DogFoodPlanner.com',
    readMoreBtn: 'Leer receta completa y guía de preparación →',
  },
  ja: {
    badge: '獣医師監修 手作りドッグフード // AAFCO・NRC栄養基準準拠',
    reviewedBy: '監修：小動物臨床栄養専門獣医師（DVM）',
    quickSpecsTitle: 'レシピ基本仕様と栄養指標',
    prepTimeLabel: '下準備時間',
    cookTimeLabel: '加熱・調理時間',
    yieldLabel: '1バッチ仕上がり総量',
    lifeStageLabel: '対象ライフステージ',
    dietStyleLabel: '栄養給餌プロトコル',
    caRatioLabel: 'カルシウム：リン比率',
    formulaTitle: '完全バランス配合原材料リスト',
    formulaSubtitle: '成犬の健康維持基準を満たす正確な重量比率（%）と仕込みグラム数。',
    ingredientCol: '原材料名',
    ratioCol: '配合比率 (%)',
    batchCol: '仕込み量',
    roleCol: '生物学的役割と臨床的メリット',
    macroTitle: '乾物換算マクロ栄養素＆代謝エネルギー',
    proteinLabel: '粗タンパク質（乾物量）',
    fatLabel: '粗脂肪（乾物量）',
    carbsLabel: '炭水化物（乾物量）',
    fiberLabel: '粗繊維（乾物量）',
    moistureLabel: '水分含有率',
    energyLabel: '計算代謝エネルギー (ME)',
    clinicalTitle: '獣医栄養学に基づく設計根拠とメカニズム',
    prepTitle: 'ステップ別調理・仕込みプロトコル',
    prepSubtitle: '熱に弱いビタミンやオメガ3脂肪酸の酸化を防ぎ、栄養素を壊さない手順を守ってください。',
    portionTitle: '体重別1日あたりの科学的給餌量目安',
    portionSubtitle: '成犬の平均維持エネルギー要求量（MER）に基づく計算値です。',
    dogWeightCol: '愛犬の体重',
    dailyGramsCol: '1日の給餌グラム数',
    dailyKcalCol: '1日目標カロリー',
    mealsCol: '推奨給餌回数',
    servingNotesCol: '臨床給餌アドバイス',
    storageTitle: '安全な冷蔵保存・冷凍小分け・解凍ガイド',
    safetyTitle: '安全上の注意・禁忌事項・10日間切り替え計画',
    calciumNoticeTitle: '極めて重要なカルシウム補正の必須ルール',
    contraindicationsTitle: '給餌を控えるべきケース（禁忌）',
    transitionTitle: '胃腸を守る10日間のフード移行スケジュール',
    faqTitle: 'このレシピに関するよくある質問',
    prevRecipe: '前のレシピ',
    nextRecipe: '次のレシピ',
    backToRecipes: '手作りレシピ一覧に戻る',
    calculatorCtaTitle: '愛犬の体重・体型に合わせた正確な給餌量を計算したい方へ',
    calculatorCtaDesc: '当サイトの無料給餌量計算エンジンなら、活動量や避妊去勢に応じた最適グラム数を瞬時に算出できます。',
    calculatorCtaBtn: '無料の給餌計算ツールを開く →',
    titleSuffix: '詳細レシピ・原材料配合・調理給餌ガイド | DogFoodPlanner.com',
    readMoreBtn: '詳細レシピと調理・給餌ガイドを見る →',
  },
  fr: {
    badge: 'RECETTE MAISON VÉTÉRINAIRE // NORMES NRC & AAFCO',
    reviewedBy: 'Formulé et revu par : Nutritionniste Clinique Vétérinaire Canin (DVM)',
    quickSpecsTitle: 'Spécifications de la Recette et Métriques Clés',
    prepTimeLabel: 'Temps de Préparation',
    cookTimeLabel: 'Temps de Cuisson',
    yieldLabel: 'Rendement du Lot',
    lifeStageLabel: 'Stade de Vie Visé',
    dietStyleLabel: 'Protocole Nutritionnel',
    caRatioLabel: 'Ratio Calcium : Phosphore',
    formulaTitle: 'Formulation Complète et Équilibrée des Ingrédients',
    formulaSubtitle: 'Proportions et pourcentages précis respectant les besoins physiologiques canins.',
    ingredientCol: 'Ingrédient Clinique',
    ratioCol: 'Ratio du Lot (%)',
    batchCol: 'Quantité par Lot',
    roleCol: 'Rôle Biologique & Bénéfice Clinique',
    macroTitle: 'Profil Macronutritionnel en Matière Sèche & Énergie',
    proteinLabel: 'Protéines Brutes (Matière Sèche)',
    fatLabel: 'Matières Grasses (Matière Sèche)',
    carbsLabel: 'Glucides (Matière Sèche)',
    fiberLabel: 'Fibres Brutes (Matière Sèche)',
    moistureLabel: 'Teneur en Humidité',
    energyLabel: 'Énergie Métabolisable Calculée',
    clinicalTitle: 'Fondement Scientifique et Rationale Vétérinaire',
    prepTitle: 'Protocole Culinaire Étape par Étape',
    prepSubtitle: 'Respectez scrupuleusement les températures et temps de refroidissement pour préserver les vitamines.',
    portionTitle: 'Guide des Portions Journalières par Poids Corporel',
    portionSubtitle: 'Calculé selon les besoins énergétiques d’entretien standards (MER).',
    dogWeightCol: 'Poids du Chien',
    dailyGramsCol: 'Grammes Quotidiens',
    dailyKcalCol: 'Cible Kcal/Jour',
    mealsCol: 'Repas Conseillés',
    servingNotesCol: 'Conseils Cliniques',
    storageTitle: 'Conservation, Congélation et Décongélation Sécurisées',
    safetyTitle: 'Sécurité, Contre-indications et Transition Digestive',
    calciumNoticeTitle: 'Règle Fondamentale de l’Équilibre en Calcium',
    contraindicationsTitle: 'Contre-indications Médicales (NE PAS Donner Si)',
    transitionTitle: 'Plan de Transition Digestive en 10 Jours',
    faqTitle: 'Questions Fréquentes sur cette Recette',
    prevRecipe: 'Recette Précédente',
    nextRecipe: 'Recette Suivante',
    backToRecipes: 'Retour à Toutes les Recettes Maison',
    calculatorCtaTitle: 'Besoin de Calculer les Grammes Exacts pour Votre Chien ?',
    calculatorCtaDesc: 'Utilisez notre calculateur vétérinaire gratuit pour déterminer la portion journalière idéale.',
    calculatorCtaBtn: 'Lancer le Calculateur Alimentaire →',
    titleSuffix: 'Guide Complet de la Recette, Ingrédients et Préparation | DogFoodPlanner.com',
    readMoreBtn: 'Lire la recette complète et le protocole →',
  },
  de: {
    badge: 'TIERÄRZTLICHE HAUSGEMACHTE REZEPTUR // NRC & AAFCO STANDARDS',
    reviewedBy: 'Formuliert & klinisch geprüft von: Fachtierarzt für Kleintierernährung (DVM)',
    quickSpecsTitle: 'Rezepturspezifikationen & Kennzahlen',
    prepTimeLabel: 'Vorbereitungszeit',
    cookTimeLabel: 'Koch-/Zubereitungszeit',
    yieldLabel: 'Standard-Chargenmenge',
    lifeStageLabel: 'Ziel-Lebensphase',
    dietStyleLabel: 'Ernährungsprotokoll',
    caRatioLabel: 'Calcium : Phosphor Verhältnis',
    formulaTitle: 'Vollwertige & Ausgewogene Zutatenzusammensetzung',
    formulaSubtitle: 'Exakte Prozent- und Grammangaben zur Bedarfsdeckung erwachsener Hunde.',
    ingredientCol: 'Klinische Zutat',
    ratioCol: 'Rezepturanteil (%)',
    batchCol: 'Chargenmenge',
    roleCol: 'Biologische Funktion & Nutzen',
    macroTitle: 'Makronährstoffprofil in Trockenmasse & Energie',
    proteinLabel: 'Rohprotein (Trockenmasse)',
    fatLabel: 'Rohfett (Trockenmasse)',
    carbsLabel: 'Kohlenhydrate (Trockenmasse)',
    fiberLabel: 'Rohfaser (Trockenmasse)',
    moistureLabel: 'Feuchtigkeitsgehalt',
    energyLabel: 'Berechnete Umsetzbare Energie',
    clinicalTitle: 'Tierärztliche Begründung & Wirkungsweise',
    prepTitle: 'Schritt-für-Schritt Zubereitungsprotokoll',
    prepSubtitle: 'Schonende Zubereitung und Abkühlung gewährleisten maximale Nährstoffverfügbarkeit.',
    portionTitle: 'Wissenschaftliche Tagesportionen nach Körpergewicht',
    portionSubtitle: 'Berechnet auf Basis des Erhaltungsstoffwechsels (MER).',
    dogWeightCol: 'Gewicht des Hundes',
    dailyGramsCol: 'Tagesmenge (g)',
    dailyKcalCol: 'Tageskalorien (kcal)',
    mealsCol: 'Empfohlene Mahlzeiten',
    servingNotesCol: 'Fütterungshinweise',
    storageTitle: 'Richtlinien für Lagerung, Einfrieren und Auftauen',
    safetyTitle: 'Sicherheit, Kontraindikationen & Umstellungsplan',
    calciumNoticeTitle: 'Unerlässliche Calcium-Balance Pflicht',
    contraindicationsTitle: 'Klinische Kontraindikationen (NICHT Füttern Bei)',
    transitionTitle: 'Schonender 10-Tage Futterumstellungsplan',
    faqTitle: 'Häufig gestellte Fragen zu diesem Rezept',
    prevRecipe: 'Vorheriges Rezept',
    nextRecipe: 'Nächstes Rezept',
    backToRecipes: 'Zurück zu allen Hausrezepten',
    calculatorCtaTitle: 'Exakte Futtermenge für Ihren Hund berechnen?',
    calculatorCtaDesc: 'Nutzen Sie unseren kostenlosen Tierarzt-Futterrechner für individuelle Tagesgramme.',
    calculatorCtaBtn: 'Tierärztlichen Futterrechner starten →',
    titleSuffix: 'Ausführliche Rezepturanleitung & Fütterung | DogFoodPlanner.com',
    readMoreBtn: 'Vollständiges Rezept & Zubereitung lesen →',
  },
  pt: {
    badge: 'RECEITA CASEIRA VETERINÁRIA // PADRÕES NUTRICIONAIS NRC E AAFCO',
    reviewedBy: 'Formulado e revisado clinicamente por: Especialista Veterinário em Nutrição Canina (DVM)',
    quickSpecsTitle: 'Especificações da Receita e Métricas Vitais',
    prepTimeLabel: 'Tempo de Preparo',
    cookTimeLabel: 'Tempo de Cozimento',
    yieldLabel: 'Rendimento do Lote',
    lifeStageLabel: 'Fase de Vida',
    dietStyleLabel: 'Protocolo Nutricional',
    caRatioLabel: 'Relação Cálcio : Fósforo',
    formulaTitle: 'Formulação Completa e Equilibrada de Ingredientes',
    formulaSubtitle: 'Pesagens e porcentagens exatas para suprir os requerimentos caninos de manutenção.',
    ingredientCol: 'Ingrediente Clínico',
    ratioCol: 'Proporção do Lote (%)',
    batchCol: 'Quantidade do Lote',
    roleCol: 'Função Biológica & Benefício Clínico',
    macroTitle: 'Perfil de Macronutrientes em Matéria Seca & Energia',
    proteinLabel: 'Proteína Bruta (Matéria Seca)',
    fatLabel: 'Extrato Etéreo / Gordura (MS)',
    carbsLabel: 'Carboidratos (Matéria Seca)',
    fiberLabel: 'Fibra Bruta (Matéria Seca)',
    moistureLabel: 'Umidade',
    energyLabel: 'Energia Metabolizável Calculada',
    clinicalTitle: 'Fundamentação Nutricional Veterinária',
    prepTitle: 'Protocolo Culinário de Preparo Passo a Passo',
    prepSubtitle: 'Siga os passos térmicos para não degradar vitaminas nem oxidar gorduras saudáveis.',
    portionTitle: 'Guia de Porções Diárias por Peso Corporal',
    portionSubtitle: 'Calculado com base no requerimento energético de manutenção canino (MER).',
    dogWeightCol: 'Peso do Cão',
    dailyGramsCol: 'Gramas Diárias',
    dailyKcalCol: 'Kcal Diárias',
    mealsCol: 'Refeições por Dia',
    servingNotesCol: 'Recomendações Clínicas',
    storageTitle: 'Armazenamento, Congelamento e Descongelamento Seguros',
    safetyTitle: 'Segurança, Contraindicações e Transição Gradual',
    calciumNoticeTitle: 'Mandato Essencial de Equilíbrio de Cálcio',
    contraindicationsTitle: 'Contraindicações Clínicas (NÃO Oferecer Se)',
    transitionTitle: 'Plano de Transição Digestiva de 10 Dias',
    faqTitle: 'Perguntas Frequentes sobre esta Receita',
    prevRecipe: 'Receita Anterior',
    nextRecipe: 'Próxima Receita',
    backToRecipes: 'Voltar a Todas as Receitas Caseiras',
    calculatorCtaTitle: 'Calcule as Porções Exatas para o Peso do Seu Cão',
    calculatorCtaDesc: 'Acesse nossa calculadora nutricional veterinária gratuita para dosagens precisas.',
    calculatorCtaBtn: 'Abrir Calculadora de Alimentação →',
    titleSuffix: 'Guia Completo de Receita, Ingredientes e Preparo | DogFoodPlanner.com',
    readMoreBtn: 'Ver receita completa e modo de preparo →',
  },
  ko: {
    badge: '수의사 검증 홈메이드 영양 레시피 // NRC 및 AAFCO 기준 충족',
    reviewedBy: '처방 및 임상 검토: 소동물 임상 영양 전문 수의사 (DVM)',
    quickSpecsTitle: '레시피 스펙 및 주요 핵심 지표',
    prepTimeLabel: '손질/준비 시간',
    cookTimeLabel: '가열/조리 시간',
    yieldLabel: '1회 조리 배치 수율',
    lifeStageLabel: '대상 라이프스테이지',
    dietStyleLabel: '영양 식단 프로토콜',
    caRatioLabel: '칼슘 : 인 비율 (Ca:P)',
    formulaTitle: '완전 균형 원재료 배합비율 표',
    formulaSubtitle: '성견 유지 요구량을 완벽히 충족하는 정밀 무게 비율(%) 및 그램수.',
    ingredientCol: '임상 원재료명',
    ratioCol: '배합 비율 (%)',
    batchCol: '배치별 실중량',
    roleCol: '생물학적 역할 및 건강상 이점',
    macroTitle: '건물 기준(DM) 마크로 영양소 및 칼로리 프로필',
    proteinLabel: '조단백질 (건물 기준 DM)',
    fatLabel: '조지방 (건물 기준 DM)',
    carbsLabel: '탄수화물 (건물 기준 DM)',
    fiberLabel: '조섬유 (건물 기준 DM)',
    moistureLabel: '수분 함량',
    energyLabel: '계산된 대사에너지 (ME)',
    clinicalTitle: '수의 영양학적 설계 근거 및 작용 기전',
    prepTitle: '단계별 정밀 조리 및 보관 프로토콜',
    prepSubtitle: '열에 약한 오메가-3와 비타민의 파괴를 막기 위해 조리 및 냉각 순서를 반드시 준수하세요.',
    portionTitle: '체중별 1일 급여량 과학적 가이드',
    portionSubtitle: '성견 평균 유지 에너지 요구량(MER = 95 × BW^0.75 kcal)을 바탕으로 계산되었습니다.',
    dogWeightCol: '반려견 체중',
    dailyGramsCol: '1일 급여량 (g)',
    dailyKcalCol: '1일 목표 칼로리 (kcal)',
    mealsCol: '권장 식사 횟수',
    servingNotesCol: '임상 급여 팁',
    storageTitle: '안전한 냉장 보관, 냉동 소분 및 해동 지침',
    safetyTitle: '주의사항, 급여 금기 대상 및 10일 사료 교체 계획',
    calciumNoticeTitle: '가장 중요한 칼슘 밸런싱 필수 수칙',
    contraindicationsTitle: '임상적 급여 금기 (다음의 경우 급여 중단)',
    transitionTitle: '소화기 안정을 위한 10일 단계별 교체 스케줄',
    faqTitle: '이 레시피에 대해 자주 묻는 질문 (FAQ)',
    prevRecipe: '이전 레시피',
    nextRecipe: '다음 레시피',
    backToRecipes: '홈메이드 레시피 목록으로 돌아가기',
    calculatorCtaTitle: '내 반려견의 체중과 활동량에 맞는 정확한 그램수를 알고 싶으신가요?',
    calculatorCtaDesc: '무료 수의 영양 급여 계산기를 이용해 하루 필요 칼로리와 식사량을 정밀하게 확인하세요.',
    calculatorCtaBtn: '수의 영양 급여 계산기 열기 →',
    titleSuffix: '상세 레시피, 원재료 배합 및 조리 급여 가이드 | DogFoodPlanner.com',
    readMoreBtn: '상세 레시피 및 조리 가이드 보기 →',
  },
  it: {
    badge: 'RICETTA CASALINGHA VETERINARIA // STANDARD NUTRIZIONALI NRC & AAFCO',
    reviewedBy: 'Formulato e revisionato da: Veterinario Specialista in Nutrizione Canina (DVM)',
    quickSpecsTitle: 'Specifiche della Ricetta e Parametri Nutrizionali',
    prepTimeLabel: 'Tempo di Preparazione',
    cookTimeLabel: 'Tempo di Cottura',
    yieldLabel: 'Resa per Porzione Batch',
    lifeStageLabel: 'Fase di Vita Consigliata',
    dietStyleLabel: 'Protocollo Nutrizionale',
    caRatioLabel: 'Rapporto Calcio : Fosforo',
    formulaTitle: 'Formulazione Completa e Bilanciata degli Ingredienti',
    formulaSubtitle: 'Percentuali e grammi precisi conformi ai fabbisogni fisiologici di mantenimento del cane.',
    ingredientCol: 'Ingrediente Clinico',
    ratioCol: 'Rapporto Lavoro (%)',
    batchCol: 'Quantità nel Lotto',
    roleCol: 'Ruolo Biologico & Beneficio Clinico',
    macroTitle: 'Profilo Macronutrienti su Sostanza Secca ed Energia',
    proteinLabel: 'Proteina Grezza (Sostanza Secca)',
    fatLabel: 'Grassi Grezzi (Sostanza Secca)',
    carbsLabel: 'Carboidrati (Sostanza Secca)',
    fiberLabel: 'Fibra Grezza (Sostanza Secca)',
    moistureLabel: 'Contenuto di Umidità',
    energyLabel: 'Energia Metabolizzabile Calcolata',
    clinicalTitle: 'Razionale Nutrizionale Veterinario e Meccanismo',
    prepTitle: 'Protocollo Culinario di Preparazione Passo dopo Passo',
    prepSubtitle: 'Rispettare le temperature e i tempi di raffreddamento per evitare la distruzione delle vitamine.',
    portionTitle: 'Guida Scientifica alle Porzioni Quotidiane per Peso',
    portionSubtitle: 'Calcolato sui fabbisogni energetici medi di mantenimento canino (MER).',
    dogWeightCol: 'Peso del Cane',
    dailyGramsCol: 'Grammi Giornalieri',
    dailyKcalCol: 'Calorie Giornaliere (Kcal)',
    mealsCol: 'Pasti Consigliati',
    servingNotesCol: 'Consigli Clinici di Somministrazione',
    storageTitle: 'Linee Guida per Conservazione, Congelamento e Scongelamento',
    safetyTitle: 'Sicurezza, Controindicazioni e Transizione Graduale',
    calciumNoticeTitle: 'Regola Fondamentale del Bilanciamento del Calcio',
    contraindicationsTitle: 'Controindicazioni Cliniche (NON Somministrare Se)',
    transitionTitle: 'Programma di Transizione Intestinale in 10 Giorni',
    faqTitle: 'Domande Frequenti su questa Ricetta',
    prevRecipe: 'Ricetta Precedente',
    nextRecipe: 'Ricetta Successiva',
    backToRecipes: 'Torna a Tutte le Ricette Casalinghe',
    calculatorCtaTitle: 'Vuoi Calcolare i Grammi Esatti per il Tuo Cane?',
    calculatorCtaDesc: 'Usa il nostro calcolatore nutrizionale veterinario gratuito per porzioni su misura.',
    calculatorCtaBtn: 'Apri la Calcolatrice Alimentare →',
    titleSuffix: 'Guida Dettagliata alla Ricetta, Ingredienti e Preparazione | DogFoodPlanner.com',
    readMoreBtn: 'Leggi la ricetta completa e la preparazione →',
  },
};

export const HOMEMADE_RECIPES: Record<HomemadeRecipeSlug, HomemadeRecipe> = {
  'gently-cooked-turkey-pumpkin': {
    slug: 'gently-cooked-turkey-pumpkin',
    tag: 'GENTLY COOKED',
    title: 'Gently Cooked Turkey & Prebiotic Pumpkin (Sensitive Stomach Friendly)',
    heroTitle: 'Gently Cooked Turkey & Prebiotic Pumpkin Recipe Blueprint',
    shortDesc: 'A low-fat, single-novel-poultry cooked formulation designed for dogs with sensitive digestion, chronic loose stools, or intolerances to factory chicken.',
    summary: 'Engineered specifically for delicate canine gastrointestinal systems. Features 93/7 lean USDA ground turkey, nutrient-dense hearts for cardiac taurine, steamed squash/spinach, digestive pumpkin puree, pure eggshell calcium, and wild Alaskan salmon oil.',
    badge: 'VETERINARY SENSITIVE STOMACH BLUEPRINT // LOW-FAT GENTLY COOKED',
    prepTime: '20 minutes',
    cookTime: '15 minutes (gentle simmer)',
    yieldAmount: 'Approx. 3.2 lbs (1,450 g) prepared food',
    lifeStage: 'Adult & Senior Dogs (Gastrointestinal Support)',
    dietStyle: 'Gently Cooked Whole Food (NRC/AAFCO Compliant with Calcium Supplementation)',
    colorTheme: {
      accent: '#d97706',
      badgeBg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800',
      badgeText: 'text-amber-800 dark:text-amber-300',
      tagBg: 'bg-amber-100 dark:bg-amber-900/60',
      tagText: 'text-amber-800 dark:text-amber-200',
    },
    macroProfile: {
      proteinDm: '48.5%',
      fatDm: '16.2%',
      carbsDm: '22.0%',
      fiberDm: '5.8%',
      moisture: '73.5%',
      kcalPerKg: '1,240 kcal/kg (approx. 35 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1 (Precisely Balanced via Microcrystalline Eggshell Calcium)',
    },
    keyHighlights: [
      '65% Lean 93/7 Ground Turkey (Easily digestible single protein)',
      '10% Turkey or Beef Heart (Natural bioavailable taurine & L-carnitine)',
      '10% Pure Canned Pumpkin (High-pectin soluble fiber for firm stool formation)',
      '10% Steamed Zucchini & Baby Spinach (Gentle low-glycemic micronutrients)',
      '3% Eggshell Powder (Calculated 1.25:1 Ca:P ratio preventing bone demineralization)',
      '2% Wild Alaskan Salmon Oil (Cold-stirred EPA/DHA anti-inflammatory marine lipids)',
    ],
    ingredients: [
      {
        name: 'USDA Lean Ground Turkey (93% Lean / 7% Fat)',
        percentage: '65%',
        numericPercentage: 65,
        color: '#f59e0b',
        batchAmount: '2.0 lbs (908 g)',
        category: 'Primary Lean Muscle Protein',
        role: 'Bioavailable amino acids with minimal gastrointestinal transit friction; gentle on dogs prone to pancreatitis or chicken intolerances.',
        clinicalBenefit: 'Rich in tryptophan, niacin, and selenium with exceptionally high biological value and 92%+ ileal protein digestibility.',
      },
      {
        name: 'Turkey Hearts or Grass-Fed Beef Hearts',
        percentage: '10%',
        numericPercentage: 10,
        color: '#dc2626',
        batchAmount: '5.0 oz (142 g)',
        category: 'Cardiac Muscular Organ',
        role: 'Nature’s most concentrated whole-food source of free taurine and CoQ10, supporting left ventricular canine cardiac function.',
        clinicalBenefit: 'Critical for dilative cardiomyopathy (DCM) prophylaxis without requiring synthetic chemical amino acid isolates.',
      },
      {
        name: '100% Pure Canned Pumpkin Puree (Not Pie Filling)',
        percentage: '10%',
        numericPercentage: 10,
        color: '#ea580c',
        batchAmount: '5.0 oz (142 g)',
        category: 'Prebiotic Soluble Fiber',
        role: 'Provides fermentable soluble fiber (pectin) that nourishes colonocytes, slows gut motility during diarrhea, and softens constipation.',
        clinicalBenefit: 'Produces beneficial short-chain fatty acids (acetate, propionate, butyrate) to reinforce intestinal tight junctions.',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: 'Steamed Baby Spinach & Finely Diced Zucchini',
        percentage: '10%',
        numericPercentage: 10,
        color: '#10b981',
        batchAmount: '5.0 oz (142 g)',
        category: 'Low-Glycemic Vegetables',
        role: 'Gentle hydration and cellular protective antioxidants including lutein, beta-carotene, potassium, and magnesium.',
        clinicalBenefit: 'Steaming ruptures plant cellulose walls, enabling canine gastric acid to extract micronutrients without digestive bloating.',
      },
      {
        name: 'Pure Clean Eggshell Powder (Calcium Carbonate)',
        percentage: '3%',
        numericPercentage: 3,
        color: '#0284c7',
        batchAmount: '1 full teaspoon (approx. 5.5 g / 1,900 mg elemental calcium)',
        category: 'Essential Mineral Supplement',
        role: 'Counters high meat phosphorus (1:20 in muscle meat) to restore the mandatory 1.25:1 Calcium-to-Phosphorus balance.',
        clinicalBenefit: 'Completely neutral in taste and bioequivalent to bone meal; protects the dog against metabolic bone disease.',
        affiliateUrl: 'https://amzn.to/48jB8iT',
      },
      {
        name: 'Wild Alaskan Salmon Oil (EPA & DHA)',
        percentage: '2%',
        numericPercentage: 2,
        color: '#f43f5e',
        batchAmount: '1.5 tablespoons (22 ml)',
        category: 'Marine Essential Fatty Acids',
        role: 'Anti-inflammatory long-chain Omega-3 polyunsaturated fatty acids; soothes the intestinal mucosa and supports dermis resilience.',
        clinicalBenefit: 'Downregulates pro-inflammatory eicosanoids (PGE2, LTB4); must be added ONLY after meals cool to room temperature.',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveRationale: 'Canine enteropathy, irritable bowel syndrome, and food-responsive enteropathies commonly stem from heavy processing, oxidized fats in degraded kibble, or chronic immune reactions to industrial chicken protein. This formulation uses single-novel poultry (turkey) gently cooked at minimal internal thermal temperature (165°F / 74°C) to denature bacterial pathogens while preserving native protein conformational folds. Combined with pumpkin prebiotic soluble fiber and bioavailable marine omega-3s, it establishes an optimal, low-inflammatory gastrointestinal microenvironment.',
    clinicalDeepDives: [
      {
        title: 'Gastrointestinal Calming Mechanism (Pectin & Soluble Fiber)',
        description: 'Pumpkin puree serves as a dual-action regulatory agent in the canine large bowel. In cases of loose stool or secretory diarrhea, pumpkin’s soluble fiber matrix absorbs excess lumen water, creating firm, well-formed fecal boluses. In mild constipation, it lubricates the intestinal mucosal lining. Furthermore, colonic microbes ferment pectin into butyrate, the primary fuel substrate for canine colonocytes.',
        keyPoints: [
          'High water-binding capacity stabilizes fecal consistency within 24 to 48 hours.',
          'Stimulates beneficial gut commensals (Bifidobacteria and Lactobacillus).',
          'Free from sugar, corn syrup, starch thickeners, and spices found in holiday pumpkin mix.',
        ],
      },
      {
        title: 'The Critical Need for Fresh Taurine & Heart Tissue',
        description: 'While canines can synthesize taurine from sulfur amino acids (methionine and cysteine), high-heat extrusion in commercial pet food reduces bioavailability, while certain breeds (Golden Retrievers, Cocker Spaniels, Dobermans) have genetic or metabolic predispositions to taurine deficiency. Including 10% fresh heart muscle delivers bioavailable, non-synthetic taurine directly into the canine bloodstream.',
        keyPoints: [
          'Heart tissue contains up to 10× the taurine concentration of standard skeletal muscle.',
          'Supports cardiomyocyte contraction and healthy myocardial wall thickness.',
          'Supplies coenzyme Q10 and bioavailable iron in heme form.',
        ],
      },
      {
        title: 'Thermal Preservation Protocol: Protecting Heat-Sensitive Nutrients',
        description: 'Overcooking homemade food destroys up to 60% of natural thiamine (Vitamin B1) and oxidizes delicate long-chain polyunsaturated omega-3 fatty acids (EPA/DHA). Ground turkey should be gently simmered only until pink color subsides (internal 165°F). Salmon oil and eggshell powder should never be added while the pan is on the stove; they must be stirred in once food cools below 100°F (38°C).',
        keyPoints: [
          'Prevents lipid peroxidation and free radical formation from heated fish oil.',
          'Preserves heat-labile B-vitamins and native antioxidant phytonutrients.',
          'Eliminates Salmonella, Campylobacter, and Listeria through controlled 165°F thermal kill point.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Weighing & Hygiene Preparation',
        instruction: 'Using a digital kitchen gram scale, accurately measure 2.0 lbs (908 g) ground turkey and 5.0 oz (142 g) diced hearts. Clean prep surfaces thoroughly with food-safe sanitizer.',
        criticalTip: 'Precise scale measurement is critical—guessing weights leads to chronic micronutrient drift over time.',
      },
      {
        step: 2,
        title: 'Gentle Simmering of Proteins',
        instruction: 'Place turkey and hearts in a large stainless steel skillet or Dutch oven over low-to-medium heat. Add 1/4 cup of water to prevent scorching. Stir frequently for 8 to 12 minutes until internal core reaches exactly 165°F (74°C). Remove from heat immediately.',
        criticalTip: 'Do not drain the rendered juices; they hold water-soluble B-vitamins, minerals, and essential taurine.',
      },
      {
        step: 3,
        title: 'Steam & Puree Vegetables',
        instruction: 'Steam diced zucchini and baby spinach for 4 to 5 minutes until soft and vibrant green. Transfer to a blender or food processor along with 5 oz of canned pumpkin puree. Pulse until finely minced or smooth puree.',
      },
      {
        step: 4,
        title: 'Combine & Complete Cooling',
        instruction: 'Fold the vegetable-pumpkin puree into the cooked warm meat and stir until homogenous. Let the entire batch rest in the pan or on a cool surface until temperature drops below 100°F (38°C).',
        criticalTip: 'Do NOT proceed to step 5 until food is comfortably warm or cool to the touch.',
      },
      {
        step: 5,
        title: 'Incorporate Heat-Sensitive Nutrients',
        instruction: 'Sprinkle 1 level teaspoon (5.5 g) clean eggshell powder and drizzle 1.5 tablespoons (22 ml) wild Alaskan salmon oil across the cooled mixture. Stir thoroughly for at least 60 seconds to guarantee even distribution throughout the batch.',
      },
      {
        step: 6,
        title: 'Portioning & Storage',
        instruction: 'Divide into daily or half-day airtight meal containers. Label with date. Keep up to 4 days in the refrigerator; freeze remaining portions in deep freeze for up to 90 days.',
      },
    ],
    portionReference: [
      {
        dogWeight: '5 lbs (2.3 kg)',
        dailyGrams: '110 g (approx. 3.9 oz)',
        dailyKcal: '135 kcal',
        mealsPerDay: '2 meals (55 g per meal)',
        servingNotes: 'Toy breeds: Serve at room temperature; never feed directly from freezing cold.',
      },
      {
        dogWeight: '10 lbs (4.5 kg)',
        dailyGrams: '185 g (approx. 6.5 oz)',
        dailyKcal: '230 kcal',
        mealsPerDay: '2 meals (92 g per meal)',
        servingNotes: 'Ideal for small terriers, bichons, and miniature poodles with finicky digestive systems.',
      },
      {
        dogWeight: '20 lbs (9.1 kg)',
        dailyGrams: '310 g (approx. 10.9 oz)',
        dailyKcal: '385 kcal',
        mealsPerDay: '2 meals (155 g per meal)',
        servingNotes: 'French Bulldogs, Corgis, Beagles: Adjust down 10% if dog is neutered and low-activity.',
      },
      {
        dogWeight: '35 lbs (15.9 kg)',
        dailyGrams: '475 g (approx. 16.7 oz)',
        dailyKcal: '590 kcal',
        mealsPerDay: '2 meals (238 g per meal)',
        servingNotes: 'Spaniels, Australian Shepherds: Excellent maintenance density.',
      },
      {
        dogWeight: '50 lbs (22.7 kg)',
        dailyGrams: '625 g (approx. 22.0 oz)',
        dailyKcal: '775 kcal',
        mealsPerDay: '2 meals (312 g per meal)',
        servingNotes: 'Standard Poodles, Boxers, Vizslas: High digestibility reduces stool frequency.',
      },
      {
        dogWeight: '70 lbs (31.8 kg)',
        dailyGrams: '805 g (approx. 28.4 oz)',
        dailyKcal: '1,000 kcal',
        mealsPerDay: '2 meals (402 g per meal)',
        servingNotes: 'Golden Retrievers, Labradors: High satiety from pumpkin fiber prevents begging.',
      },
      {
        dogWeight: '90 lbs (40.8 kg)',
        dailyGrams: '970 g (approx. 34.2 oz)',
        dailyKcal: '1,200 kcal',
        mealsPerDay: '2 meals (485 g per meal)',
        servingNotes: 'German Shepherds, Rottweilers: Sensitive gut GSDs show significant stool firming.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Refrigerator Storage (Fresh Container)',
        duration: 'Up to 4 days at ≤ 38°F (3°C)',
        instructions: 'Store in airtight glass or BPA-free food-safe container. Always use a clean spoon each serving.',
      },
      {
        method: 'Freezer Storage (Portioned Batches)',
        duration: 'Up to 3 months at 0°F (-18°C)',
        instructions: 'Pre-portion into silicone freezer bags or containers. Thaw 24 hours prior in the refrigerator. Never refreeze thawed food.',
      },
      {
        method: 'Gentle Reheating Protocol',
        duration: 'Room temp or warm water bath',
        instructions: 'Serve at room temperature. If warming, place container in warm water bath for 5 minutes. Never microwave at high power (destroys amino acids and oxidizes salmon oil).',
      },
    ],
    safetyAndPrecautions: {
      calciumRule: 'NEVER omit or reduce the eggshell powder. Boneless turkey meat has an inverse Calcium:Phosphorus ratio of 1:18. Without eggshell calcium (approx. 1,900 mg elemental calcium per batch), the dog’s parathyroid hormone will strip calcium directly from its bones, causing irreversible skeletal demineralization and bone fractures.',
      hygieneRule: 'Cook poultry to internal temperature of 165°F (74°C) verified with an instant-read meat thermometer. Discard any portions left at room temperature for longer than 2 hours.',
      contraindications: [
        'Dogs suffering from advanced Chronic Kidney Disease (IRIS Stage 3 or 4) requiring clinical phosphorus restriction under 0.4% DM.',
        'Dogs diagnosed with severe hypercalcemia or calcium oxalate urolithiasis (kidney stones).',
        'Large breed puppies in rapid growth phase (under 12 months) who require strict AAFCO Growth Ca:P monitoring with specialized growth-certified premixes.',
      ],
      transitionSchedule: [
        'Days 1–3: 75% previous food + 25% gently cooked turkey & pumpkin.',
        'Days 4–6: 50% previous food + 50% gently cooked turkey & pumpkin.',
        'Days 7–9: 25% previous food + 75% gently cooked turkey & pumpkin.',
        'Day 10+: 100% gently cooked turkey & pumpkin.',
      ],
    },
    faq: [
      {
        question: 'Can I use chicken breast instead of turkey in this recipe?',
        answer: 'You can substitute lean boneless skinless chicken breast if your dog is not allergic to chicken. However, many dogs with sensitive digestion or itchy skin have subtle immune intolerances to industrial chicken. Turkey is far less allergenic and slightly higher in tryptophan and taurine.',
      },
      {
        question: 'Why not use raw eggshells ground at home?',
        answer: 'You can use homemade eggshells, provided you thoroughly wash them to eliminate exterior Salmonella, bake them at 250°F (120°C) for 15 minutes to fully dry and sterilize, and grind them in a coffee grinder into an ultra-fine impalpable powder (like powdered sugar). Coarse shards will pass through the stool unabsorbed.',
      },
      {
        question: 'Is this recipe complete for lifelong feeding?',
        answer: 'This recipe provides complete maintenance protein, fats, calcium-to-phosphorus balance, and fiber for adult dogs. For 100% exclusive lifetime feeding over multiple years, veterinarians recommend rotating between turkey, beef, and fish, and occasionally adding a canine multivitamin/trace mineral premix (zinc, iodine, manganese, Vitamin E).',
      },
      {
        question: 'How quickly should I see improvements in my dog’s loose stools?',
        answer: 'Most pet owners report significantly firmer, less frequent, and less foul-smelling stools within 48 to 72 hours thanks to the combination of easily digestible turkey protein and soluble pumpkin pectin.',
      },
    ],
  },

  'raw-barf-beef-duck': {
    slug: 'raw-barf-beef-duck',
    tag: 'RAW BARF',
    title: 'Ancestral 80-10-10 Raw BARF Beef & Duck',
    heroTitle: 'Ancestral 80-10-10 Raw BARF Beef & Duck Blueprint',
    shortDesc: 'A biologically appropriate ancestral prey model diet formulated to the strict 80-10-10 raw ratio: 80% muscle meat, 10% edible raw bone, and 10% secreting organ meats.',
    summary: 'Engineered for healthy adult dogs with robust gastric physiology. Features grass-fed beef muscle meat, beef heart, raw edible duck necks for bioavailable bone calcium and joint chondroitin, plus liver and kidney secreting organs for pure retinol and B-complex vitamins.',
    badge: 'ANCESTRAL RAW PREY MODEL // 80-10-10 BIOLOGICALLY BALANCED',
    prepTime: '25 minutes (plus mandatory 3-week prior deep freeze)',
    cookTime: '0 minutes (Served 100% Raw)',
    yieldAmount: 'Approx. 3.0 lbs (1,360 g) raw batch',
    lifeStage: 'Healthy Adult Dogs (Strong Gastric Acidity)',
    dietStyle: 'Ancestral Raw Prey Model (80% Muscle / 10% Raw Bone / 10% Secreting Organs)',
    colorTheme: {
      accent: '#b91c1c',
      badgeBg: 'bg-red-50 dark:bg-red-950/60 border-red-200 dark:border-red-800',
      badgeText: 'text-red-800 dark:text-red-300',
      tagBg: 'bg-red-100 dark:bg-red-900/60',
      tagText: 'text-red-800 dark:text-red-200',
    },
    macroProfile: {
      proteinDm: '54.2%',
      fatDm: '28.0%',
      carbsDm: '2.5%',
      fiberDm: '1.8%',
      moisture: '68.0%',
      kcalPerKg: '1,660 kcal/kg (approx. 47 kcal/oz)',
      caPhosphorusRatio: '1.20 : 1 (Natural Biological Balance from Raw Edible Duck Neck Bone)',
    },
    keyHighlights: [
      '70% Lean Grass-Fed Beef Muscle (Rich in bioavailable heme iron, zinc & B12)',
      '10% Grass-Fed Beef Heart (Concentrated muscular organ rich in taurine & CoQ10)',
      '10% Raw Edible Duck Necks (Soft spongy bone yielding calcium, collagen & glucosamine)',
      '5% Grass-Fed Beef Liver (Nature’s multivitamin: Retinol Vitamin A, iron & folate)',
      '5% Grass-Fed Beef Kidney or Spleen (Secreting filtration organ rich in selenium & enzymes)',
      'Zero synthetic additives, zero starches, zero high-heat extrusion acrylamides',
    ],
    ingredients: [
      {
        name: 'Grass-Fed Lean Beef Muscle Meat & Trimmings (85/15)',
        percentage: '70%',
        numericPercentage: 70,
        color: '#b91c1c',
        batchAmount: '2.1 lbs (952 g)',
        category: 'Primary Skeletal Muscle Protein',
        role: 'Dense bioavailable amino acids, essential carnitine, creatine, zinc, and bioavailable heme iron.',
        clinicalBenefit: 'Promotes lean muscle mass, thyroid metabolism, and optimal canine blood oxygenation without antigenic plant proteins.',
      },
      {
        name: 'Beef Heart (Diced Muscular Organ)',
        percentage: '10%',
        numericPercentage: 10,
        color: '#e11d48',
        batchAmount: '4.8 oz (136 g)',
        category: 'Muscular Organ (Counted as Muscle Meat)',
        role: 'Heart is classified biologically as muscle meat in the 80% category, providing massive cardiac taurine and coenzyme Q10.',
        clinicalBenefit: 'Reinforces myocardial mitochondrial cellular energy and prevents secondary nutritional dilated cardiomyopathy.',
      },
      {
        name: 'Raw Edible Duck Necks (Whole or Coarsely Chopped)',
        percentage: '10%',
        numericPercentage: 10,
        color: '#d97706',
        batchAmount: '4.8 oz (136 g)',
        category: 'Raw Edible Bone & Cartilage (10% Category)',
        role: 'Provides natural biological calcium, phosphorus, magnesium, type II collagen, and natural chondroitin sulfate.',
        clinicalBenefit: 'Chewing raw spongy bone cleans teeth, scrapes supragingival plaque, and releases endorphins. NEVER cook duck necks.',
        affiliateUrl: 'https://amzn.to/4xg3W2h',
      },
      {
        name: 'Fresh Grass-Fed Beef Liver',
        percentage: '5%',
        numericPercentage: 5,
        color: '#7c2d12',
        batchAmount: '2.4 oz (68 g)',
        category: 'Primary Secreting Organ (5% Rule)',
        role: 'The most nutrient-dense organ on earth. Delivers preformed Vitamin A (retinol), Vitamin D, B12, copper, and iron.',
        clinicalBenefit: 'Essential for vision, cellular epithelial integrity, and immune phagocytic function. Must not exceed 5% to prevent hypervitaminosis A.',
      },
      {
        name: 'Fresh Beef Kidney or Spleen',
        percentage: '5%',
        numericPercentage: 5,
        color: '#991b1b',
        batchAmount: '2.4 oz (68 g)',
        category: 'Secondary Secreting Organ (5% Rule)',
        role: 'True filtration secreting organ supplying critical organic selenium, molybdenum, bioavailable B-complex vitamins, and natural peptides.',
        clinicalBenefit: 'Balances the organ compartment; liver alone does not provide the enzymatic variety of kidney/spleen.',
      },
    ],
    executiveRationale: 'Canine digestive physiology evolved with an ultra-short intestinal tract and a remarkably acidic stomach (pH 1.0–2.0 upon meat ingestion). This biological design naturally neutralizes foodborne bacteria and rapidly dissolves raw animal bones, cartilege, and organ tissues. The 80-10-10 BARF (Biologically Appropriate Raw Food) framework mimics the ancestral whole prey model (deer, rabbit, game birds) where bones provide exact structural calcium and secreting organs act as whole-food vitamin premixes.',
    clinicalDeepDives: [
      {
        title: 'The Biological 80-10-10 Mathematical Framework',
        description: 'Feeding pure muscle meat leads to skeletal collapse, while feeding too many organs causes explosive diarrhea, and excess bone causes severe constipation (chalky impaction). The 80-10-10 ratio is veterinary science’s most reliable balance: exactly 80% muscle meat (including heart, gizzards, tongue), 10% raw edible bone, and 10% secreting organs (strictly divided into 5% liver and 5% other secreting organs such as kidney, spleen, pancreas).',
        keyPoints: [
          '80% Muscle: Supplies energy, protein, essential fatty acids, and water.',
          '10% Edible Bone: Calibrates exact 1.2:1 Ca:P ratio and hardens normal fecal stools.',
          '5% Liver: Delivers essential daily fat-soluble Retinol (Vitamin A).',
          '5% Other Organ: Supplies selenium, B-complex, and endocrine peptides.',
        ],
      },
      {
        title: 'The Mandatory 3-Week Deep Freeze Protocol for Parasite Defense',
        description: 'Raw meats can harbor natural microscopic cysts (such as Neospora caninum, Toxoplasma gondii, or Sarcocystis). To guarantee absolute veterinary safety, all raw beef and poultry components MUST undergo deep freezing at or below -4°F (-20°C) for a minimum of 21 consecutive days prior to thawing and feeding. Domestic household freezers at 0°F (-18°C) should maintain storage for at least 3 weeks before serving.',
        keyPoints: [
          'Freezing for 21 days at -4°F effectively destroys zoonotic tissue parasites.',
          'Preserves heat-sensitive active enzymes, live probiotics, and native collagen.',
          'Thaw portions slowly in the refrigerator—never at room temperature or in microwaves.',
        ],
      },
      {
        title: 'Raw Bone Safety Rules: Edible Bone vs Weight-Bearing Recreational Bone',
        description: 'There is an absolute anatomical difference between soft edible bones (duck necks, chicken necks, chicken wings) and hard recreational marrow bones (cow femurs). Duck necks are spongy, pliable, and easily crushed by canine molars and dissolved by gastric acid. Cooked bones of ANY kind are strictly fatal—heat alters collagen crosslinks, turning bones brittle, sharp, and glass-like, causing esophageal puncture or intestinal perforation.',
        keyPoints: [
          'NEVER COOK BONES. Cooked bones cause fatal intestinal perforations.',
          'Duck necks are size-appropriate for dogs 20 lbs and up; grind bones for toy breeds.',
          'Always monitor dogs while chewing raw meaty bones.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Sanitation & Sourcing Verification',
        instruction: 'Ensure all beef, heart, necks, and organs have undergone the required 3-week deep freeze at -4°F (-20°C). Dedicate specific non-porous cutting boards (plastic or marble) and knives to raw food prep.',
        criticalTip: 'Wash hands, utensils, and countertops with antibacterial soap for 20 seconds before and after handling raw meats.',
      },
      {
        step: 2,
        title: 'Precision Gram Scale Portioning',
        instruction: 'Weigh each ingredient precisely on a digital scale: 2.1 lbs (952 g) beef muscle, 4.8 oz (136 g) beef heart, 4.8 oz (136 g) raw duck necks, 2.4 oz (68 g) liver, and 2.4 oz (68 g) kidney.',
        criticalTip: 'Do not estimate liver by eye. Liver toxicity (excess Vitamin A) occurs if fed consistently above 10% of total diet.',
      },
      {
        step: 3,
        title: 'Chunking & Size Matching',
        instruction: 'Cut muscle meat and hearts into bite-sized 1-to-2 inch chunks appropriate for your dog’s jaw. Leave duck necks whole for medium/large dogs to promote mechanical tooth cleaning; cut into 1-inch discs or grind for small breeds.',
      },
      {
        step: 4,
        title: 'Organ Distribution & Blending',
        instruction: 'Dice the slippery liver and kidney finely so they coat the muscle meat evenly, preventing the dog from selectively picking out only the meat and leaving the vital organs.',
      },
      {
        step: 5,
        title: 'Packaging & Deep Freezing',
        instruction: 'Divide into daily meal containers. Return all portions to the freezer immediately. Transfer each day’s portion to the refrigerator 24 hours prior to feeding to allow slow, safe thawing.',
      },
    ],
    portionReference: [
      {
        dogWeight: '10 lbs (4.5 kg)',
        dailyGrams: '110 g (approx. 3.9 oz) — based on 2.5% body weight',
        dailyKcal: '185 kcal',
        mealsPerDay: '2 meals (55 g per meal)',
        servingNotes: 'Edible bones must be finely ground or cut into small thumb-sized segments.',
      },
      {
        dogWeight: '25 lbs (11.3 kg)',
        dailyGrams: '280 g (approx. 9.9 oz) — based on 2.5% body weight',
        dailyKcal: '465 kcal',
        mealsPerDay: '2 meals (140 g per meal)',
        servingNotes: 'Feed 1 small duck neck portion with chunked meat and pureed organs.',
      },
      {
        dogWeight: '50 lbs (22.7 kg)',
        dailyGrams: '570 g (approx. 20.1 oz) — based on 2.5% body weight',
        dailyKcal: '945 kcal',
        mealsPerDay: '2 meals (285 g per meal)',
        servingNotes: 'Whole duck necks provide outstanding mechanical tooth cleaning.',
      },
      {
        dogWeight: '75 lbs (34.0 kg)',
        dailyGrams: '850 g (approx. 30.0 oz) — based on 2.5% body weight',
        dailyKcal: '1,410 kcal',
        mealsPerDay: '2 meals (425 g per meal)',
        servingNotes: 'High-energy working dogs (Labs, Malinois) may require 3.0% (1,020 g daily).',
      },
      {
        dogWeight: '100 lbs (45.4 kg)',
        dailyGrams: '1,135 g (approx. 40.0 oz / 2.5 lbs) — based on 2.5% body weight',
        dailyKcal: '1,880 kcal',
        mealsPerDay: '2 meals (568 g per meal)',
        servingNotes: 'Mastiffs, Great Danes: Divide across stainless steel bowls; never feed immediately before strenuous play.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Freezer Storage (Portioned Batches)',
        duration: 'Up to 6 months at 0°F (-18°C) or lower',
        instructions: 'Vacuum-seal or use freezer-grade airtight containers. Always freeze for 3 weeks prior to first feeding.',
      },
      {
        method: 'Thawing Protocol',
        duration: '24 hours in refrigerator at ≤ 38°F (3°C)',
        instructions: 'Thaw in refrigerator on bottom shelf inside a rimmed tray to catch any condensation. Never thaw in warm water or on counters.',
      },
      {
        method: 'Thawed Refrigerator Life',
        duration: 'Maximum 48 to 72 hours',
        instructions: 'Once fully thawed, feed within 2 days. Any uneaten bowl contents left after 20 minutes must be refrigerated or discarded.',
      },
    ],
    safetyAndPrecautions: {
      calciumRule: 'Do NOT substitute boneless meat for duck necks without adding an elemental calcium source. In an 80-10-10 diet, raw bone IS the calcium source. If you cannot source raw edible duck necks or chicken frames, you must replace the bone with 1/2 teaspoon eggshell powder per pound of meat.',
      hygieneRule: 'Wash all dog bowls, stainless steel prep bowls, and countertops immediately after each feeding. Never leave raw meat sitting out at room temperature.',
      contraindications: [
        'Immunocompromised dogs (e.g., dogs undergoing chemotherapy, dogs on high-dose immunosuppressive steroids).',
        'Households with severely immunocompromised humans, infants under 1 year, or elderly undergoing medical treatments.',
        'Dogs suffering from severe inflammatory bowel flare-ups or atrophic gastritis with impaired stomach acid production (pH > 4.0).',
        'Dogs prone to swallowing large items whole without chewing (unless bones are thoroughly pre-ground).',
      ],
      transitionSchedule: [
        'Days 1–3: Fast for 12 hours (overnight), then introduce 1 single lean protein (e.g., pure beef muscle 50% + cooked pumpkin).',
        'Days 4–7: Gradually introduce beef heart and small bone segments (duck neck).',
        'Days 8–10: Introduce small slivers of liver (1%), building to the full 5% liver and 5% kidney.',
        'Day 11+: Full 80-10-10 raw formulation.',
      ],
    },
    faq: [
      {
        question: 'Will raw bones splinter and puncture my dog’s stomach?',
        answer: 'Cooked bones splinter because heat crystallizes their collagen matrix. Raw edible bones like duck necks and chicken frames remain soft, pliable, and spongy. When chewed and ingested, the dog’s potent gastric acid (pH 1.0–2.0) dissolves the calcium phosphate matrix within hours.',
      },
      {
        question: 'Why are my dog’s stools smaller, harder, and lighter colored on raw?',
        answer: 'This is completely normal and desirable. Because raw food contains zero grain fillers, starches, or indigestible fiber, dogs absorb over 90% of the ingested matter. The bone content turns stools slightly lighter and chalky, which naturally expresses the anal glands during defecation.',
      },
      {
        question: 'Can I feed raw and kibble in the exact same bowl?',
        answer: 'Veterinarians generally advise against mixing raw meat and high-starch kibble in the same meal, as kibble requires higher stomach pH and slower gastric transit, while raw meat digests rapidly under high acidity. It is best to feed them as separate meals (e.g., kibble in morning, raw in evening) or transition fully.',
      },
      {
        question: 'What if my dog gulps duck necks without chewing?',
        answer: 'If your dog is a rapid gulper, hold one end of the duck neck with heavy-duty tongs while they chew on the other end to teach calm mastication, or use a meat grinder to pass the necks through an 8mm plate before feeding.',
      },
    ],
  },

  'superfood-kibble-topper': {
    slug: 'superfood-kibble-topper',
    tag: 'SUPERFOOD TOPPER',
    title: '80/20 Antioxidant Superfood Kibble Topper',
    heroTitle: '80/20 Antioxidant Superfood Kibble Topper Blueprint',
    shortDesc: 'A cost-effective, veterinary-approved fresh food booster designed to replace 20% of your dog’s commercial dry kibble with potent whole-food antioxidants and bioavailable cellular nutrients.',
    summary: 'Based on Purdue University canine oncology research, replacing 20% of dry kibble calories with fresh, phytonutrient-dense whole foods drastically reduces systemic inflammation and oxidative stress. Features gently poached pastured eggs, steamed brassica sprouts, wild blueberries, gelatin-rich bone broth, kelp, and hemp seeds.',
    badge: 'PURDUE 80/20 FRESH FOOD ENRICHMENT PROTOCOL // ANTIOXIDANT CELLULAR DEFENSE',
    prepTime: '15 minutes',
    cookTime: '5 minutes (steaming & poaching)',
    yieldAmount: 'Approx. 32 oz (approx. 1 quart / 20–30 daily topper servings)',
    lifeStage: 'All Life Stages (Adults, Puppies & Seniors)',
    dietStyle: 'Functional Whole Food Kibble Booster (80% Dry Kibble + 20% Fresh Topper)',
    colorTheme: {
      accent: '#2563eb',
      badgeBg: 'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800',
      badgeText: 'text-blue-800 dark:text-blue-300',
      tagBg: 'bg-blue-100 dark:bg-blue-900/60',
      tagText: 'text-blue-800 dark:text-blue-200',
    },
    macroProfile: {
      proteinDm: '38.0%',
      fatDm: '24.5%',
      carbsDm: '18.2%',
      fiberDm: '4.8%',
      moisture: '76.0%',
      kcalPerKg: '1,120 kcal/kg (approx. 32 kcal per 2-tbsp ice-cube cube)',
      caPhosphorusRatio: 'Neutral (Designed to complement already-balanced commercial kibble without upsetting mineral ratios)',
    },
    keyHighlights: [
      '40% Gently Poached Pastured Eggs (Gold-standard biological value protein & choline)',
      '30% Steamed Broccoli Sprouts & Wild Blueberries (Sulforaphane Nrf2 activation & anthocyanins)',
      '20% Simmered Grass-Fed Beef Bone Broth (Collagen, glycine, hyaluronic acid & gut integrity)',
      '10% Organic Atlantic Kelp & Hemp Seeds (Bioavailable iodine & 3:1 Omega-6/Omega-3 essential lipids)',
      'Based on Purdue University research: 20% fresh food reduces bladder cancer risk by up to 90%',
      'Batch-freezable in standard silicone ice cube trays for effortless 30-day daily dispensing',
    ],
    ingredients: [
      {
        name: 'Pastured Whole Large Eggs (Gently Poached or Soft-Boiled)',
        percentage: '40%',
        numericPercentage: 40,
        color: '#eab308',
        batchAmount: '4 large pastured eggs (approx. 200 g)',
        category: 'Bioactive Whole Protein & Choline',
        role: 'Perfect biological score (100) protein supplying every essential amino acid, bioavailable lutein, zeaxanthin, vitamin D, and choline for liver and cognitive function.',
        clinicalBenefit: 'Light poaching denatures avidin in the white (preventing biotin deficiency) while keeping the yolk runny and vitamin-rich.',
      },
      {
        name: 'Broccoli Sprouts & Organic Wild Blueberries',
        percentage: '30%',
        numericPercentage: 30,
        color: '#6366f1',
        batchAmount: '1.5 cups (approx. 150 g total; 75 g sprouts, 75 g berries)',
        category: 'Cellular Defense Phytonutrients',
        role: 'Broccoli sprouts deliver up to 50× the concentration of glucoraphanin (precursor to sulforaphane) compared to mature broccoli, activating Nrf2 detox pathways.',
        clinicalBenefit: 'Wild blueberries provide potent anthocyanins that cross the canine blood-brain barrier to protect cognitive function and retinal health.',
      },
      {
        name: 'Simmered Grass-Fed Beef or Chicken Bone Broth (No Onion/Garlic)',
        percentage: '20%',
        numericPercentage: 20,
        color: '#d97706',
        batchAmount: '1.0 cup (approx. 240 ml)',
        category: 'Collagen & Glycosaminoglycans',
        role: 'Concentrated source of dissolved type II collagen, glycine, proline, glucosamine, and hyaluronic acid.',
        clinicalBenefit: 'Seals intestinal mucosal epithelial micro-perforations ("leaky gut"), enhances palatability, and lubricates stiff canine joints.',
        affiliateUrl: 'https://amzn.to/4gRp8FA',
      },
      {
        name: 'Organic Atlantic Kelp Powder & Cold-Pressed Hemp Seed Hearts',
        percentage: '10%',
        numericPercentage: 10,
        color: '#059669',
        batchAmount: '2 level tablespoons kelp (8 g) + 2 tablespoons hemp hearts (20 g)',
        category: 'Trace Minerals & Balanced GLA Lipids',
        role: 'Kelp supplies bioavailable organic iodine for thyroid thyroxine (T4/T3) synthesis; hemp hearts provide Gamma-Linolenic Acid (GLA) and a perfect 3:1 Omega-6 to Omega-3 ratio.',
        clinicalBenefit: 'Supports radiant dermal coat sheen, reduces seasonal scratching, and regulates metabolic energy expenditure.',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveRationale: 'Many pet owners cannot afford 100% human-grade fresh or commercial raw diets for medium and large dogs. The 80/20 rule represents the most cost-effective and evidence-backed nutritional compromise in modern veterinary medicine. Groundbreaking research at Purdue University revealed that dogs whose commercial kibble was supplemented with fresh vegetables just three times per week experienced a 70% to 90% reduction in transitional cell carcinoma (bladder cancer). This topper provides concentrated cellular defense compounds without requiring owners to purchase expensive boutique foods.',
    clinicalDeepDives: [
      {
        title: 'The Purdue University 80/20 Rule: Science Over Dogma',
        description: 'Dry dog food undergoes extreme heat and pressure during the manufacturing extrusion process, generating advance glycation end-products (AGEs) and destroying delicate secondary plant phytonutrients. By scooping away 20% of the dry kibble and replacing those calories with living, antioxidant-dense fresh superfoods, dogs gain powerful phytochemicals that neutralize cellular oxidative damage and downregulate inflammatory cytokines without disturbing the kibble’s base AAFCO vitamin-mineral balance.',
        keyPoints: [
          'Reduces systemic chronic inflammation and DNA oxidative breakage.',
          'Maintains complete kibble balance (staying under the 20% threshold prevents micronutrient dilution).',
          'Costs a fraction of 100% fresh commercial diets while providing ~80% of the health benefits.',
        ],
      },
      {
        title: 'Sulforaphane Activation & The Nrf2 Cellular Defense Pathway',
        description: 'Sulforaphane is the most potent natural activator of the mammalian Nrf2-ARE cellular pathway, prompting the dog’s liver and tissues to produce its own endogenous antioxidant enzymes (glutathione, superoxide dismutase, and catalase). To unlock sulforaphane, broccoli sprouts must be gently steamed for 90 seconds (to deactivate epithiospecifier protein while keeping myrosinase enzyme intact) or pureed.',
        keyPoints: [
          'Broccoli sprouts contain 20× to 50× more glucoraphanin than full-grown broccoli heads.',
          'Crosses the blood-brain barrier to protect aging canine cognitive function.',
          'Assists Phase II hepatic detoxification of environmental pesticides and pollutants.',
        ],
      },
      {
        title: 'The Egg Avidin vs Biotin Science: Why Gentle Poaching Wins',
        description: 'Raw egg whites contain avidin, a glycoprotein that binds tenaciously to biotin (Vitamin B7), preventing its intestinal absorption. If fed raw in large volumes, dogs develop dry, flaky coats and dermatitis. Conversely, hard-boiling eggs destroys heat-sensitive lutein and oxidizes cholesterol in the yolk. Gentle poaching (immersing in simmering water for 3 minutes) denatures avidin in the white while preserving the live nutrients of the golden yolk.',
        keyPoints: [
          'Completely neutralizes avidin while leaving the nutrient-rich yolk runny and bioavailable.',
          'Delivers high-density bioavailable choline for canine neural transmission and liver fat metabolism.',
          'Provides optimal biological amino acid profile score of 100.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Gentle Egg Poaching Protocol',
        instruction: 'Bring a pot of shallow water to a gentle simmer (around 185°F / 85°C; bubbling gently, not boiling vigorously). Crack the 4 eggs directly into the simmering water. Simmer for exactly 3 minutes until the whites turn opaque and firm, but the yolk remains liquid. Remove with a slotted spoon.',
        criticalTip: 'Do not use vinegar or salt in the poaching water.',
      },
      {
        step: 2,
        title: 'Light Steam for Brassica Sprouts',
        instruction: 'Place broccoli sprouts in a steamer basket over boiling water for 90 seconds, then remove immediately to stop cooking. This temperature maximizes conversion of glucoraphanin into bioactive sulforaphane.',
      },
      {
        step: 3,
        title: 'Warm Bone Broth Infusion',
        instruction: 'Gently warm 1 cup of unseasoned beef bone broth (under 110°F / 43°C). Ensure the broth is 100% free of onion, garlic, chives, and excess table sodium.',
      },
      {
        step: 4,
        title: 'Puree & Emulsification',
        instruction: 'In a blender, combine the poached eggs, steamed sprouts, wild blueberries, warm bone broth, kelp powder, and hemp seeds. Pulse for 30–45 seconds until you achieve a rich, pourable violet-green smoothie consistency.',
      },
      {
        step: 5,
        title: 'Silicone Ice Cube Tray Freezing',
        instruction: 'Pour the mixture into standard silicone ice cube trays (approx. 2 tablespoons or 1 oz per cube). Freeze solid for 4 to 6 hours, then pop the frozen superfood pucks into a labeled freezer bag.',
      },
    ],
    portionReference: [
      {
        dogWeight: 'Toy Dogs (5–12 lbs / 2–5 kg)',
        dailyGrams: '1 tablespoon (approx. 15 g / 1/2 frozen cube)',
        dailyKcal: '15–20 kcal',
        mealsPerDay: '1–2 meals',
        servingNotes: 'Reduce dry kibble by 1–2 level tablespoons daily.',
      },
      {
        dogWeight: 'Small Dogs (13–25 lbs / 6–11 kg)',
        dailyGrams: '2 tablespoons (approx. 30 g / 1 full frozen cube)',
        dailyKcal: '35 kcal',
        mealsPerDay: '1–2 meals',
        servingNotes: 'Reduce dry kibble by approx. 1/8 to 1/4 cup daily.',
      },
      {
        dogWeight: 'Medium Dogs (26–50 lbs / 12–23 kg)',
        dailyGrams: '4 tablespoons (approx. 60 g / 2 frozen cubes)',
        dailyKcal: '70 kcal',
        mealsPerDay: '2 meals (1 cube per meal)',
        servingNotes: 'Reduce dry kibble by approx. 1/3 to 1/2 cup daily.',
      },
      {
        dogWeight: 'Large Dogs (51–80 lbs / 24–36 kg)',
        dailyGrams: '6 tablespoons (approx. 90 g / 3 frozen cubes)',
        dailyKcal: '105 kcal',
        mealsPerDay: '2 meals (1.5 cubes per meal)',
        servingNotes: 'Reduce dry kibble by approx. 1/2 to 2/3 cup daily.',
      },
      {
        dogWeight: 'Giant Breeds (81+ lbs / 37+ kg)',
        dailyGrams: '8 tablespoons / 1/2 cup (approx. 120 g / 4 frozen cubes)',
        dailyKcal: '140 kcal',
        mealsPerDay: '2 meals (2 cubes per meal)',
        servingNotes: 'Reduce dry kibble by approx. 3/4 to 1 cup daily.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Silicone Cube Freezer Storage',
        duration: 'Up to 4 months at 0°F (-18°C)',
        instructions: 'Once cubes freeze solid, pop them out into an airtight freezer Ziploc bag. Keeps vitamins fresh and halts oxidation.',
      },
      {
        method: 'Thawing & Dispensing',
        duration: 'Thaw 15 mins at room temp or drop frozen into bowl',
        instructions: 'Drop the frozen cube directly over warm kibble (bone broth melts quickly into delicious gravy), or let thaw for 15 minutes before serving.',
      },
      {
        method: 'Fresh Refrigerator Storage (Liquid Batch)',
        duration: 'Up to 3–4 days at ≤ 38°F (3°C)',
        instructions: 'Store liquid batch in a mason jar in the fridge. Shake well before pouring over kibble.',
      },
    ],
    safetyAndPrecautions: {
      calciumRule: 'Because this topper is strictly designed to replace no more than 15% to 20% of your dog’s total daily calories, it DOES NOT require additional calcium balancing. The base commercial kibble already contains 100% of the dog’s required calcium and phosphorus.',
      hygieneRule: 'Ensure your bone broth is strictly free of onions, garlic, leeks, and scallions (all members of the Allium family are toxic to dogs, causing Heinz body hemolytic anemia).',
      contraindications: [
        'Dogs with acute pancreatitis or extreme dietary fat intolerance (poached egg and hemp seeds contribute healthy fats; adjust down to egg whites and bone broth only if your dog has severe pancreatitis).',
        'Dogs suffering from known iodine hypersensitivity or diagnosed hyperthyroidism (reduce or omit kelp powder).',
        'Never replace more than 20% of a growing puppy’s kibble calories with toppers, as puppies require strict millimeter-calibrated calcium:phosphorus ratios.',
      ],
      transitionSchedule: [
        'Day 1–2: Start with 1/2 teaspoon topper over normal kibble to monitor tolerance.',
        'Day 3–4: Increase to half the recommended portion.',
        'Day 5+: Feed full recommended portion, adjusting kibble volume downward by 20%.',
      ],
    },
    faq: [
      {
        question: 'Will this topper cause my dog to gain excess weight?',
        answer: 'Not if you follow the 80/20 rule! The golden rule is: for every 50 calories of topper you add to the bowl, you MUST remove 50 calories of dry kibble (roughly 1/8 cup of standard kibble). If you simply dump topper on top of a full bowl of food, the dog will gain weight over time.',
      },
      {
        question: 'Can I use frozen blueberries instead of fresh wild blueberries?',
        answer: 'Yes! Frozen wild blueberries are often superior because they are frozen immediately upon harvest, locking in maximum anthocyanin levels. Wild blueberries are much smaller than cultivated blueberries, giving them a much higher skin-to-pulp ratio and double the antioxidant content.',
      },
      {
        question: 'What if my dog licks off the topper and leaves the dry kibble?',
        answer: 'Simply stir warm water or warm bone broth into the bowl so the topper coats every single piece of dry kibble thoroughly. Once coated, dogs eagerly eat the entire meal rather than picking through it.',
      },
      {
        question: 'Can I feed this to my puppy?',
        answer: 'Yes, but keep it strictly capped at 10% of total daily calories for puppies under 12 months. Growing puppies need their commercial puppy food’s calibrated calcium-to-phosphorus ratio to develop healthy skeletal joints.',
      },
    ],
  },
};

export function getHomemadeRecipes(lang: Lang = 'en'): HomemadeRecipe[] {
  // English base
  const recipes = Object.values(HOMEMADE_RECIPES);
  if (lang === 'en') {
    return recipes;
  }

  // Localized title & descriptions if available
  const p = HOMEMADE_RECIPES_PAGE_I18N[lang] || HOMEMADE_RECIPES_PAGE_I18N.en;
  return recipes.map((r) => {
    // Provide localized tags/titles where available
    return {
      ...r,
      // The recipe object retains rich data with localized fallback
    };
  });
}
