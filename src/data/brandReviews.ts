import type { Lang } from '../i18n/ui';

export const BRAND_REVIEW_SLUGS = [
  'blue-buffalo',
  'rachael-ray-nutrish',
  'pure-balance',
  'ollie',
  'open-farm',
] as const;

export type BrandReviewSlug = (typeof BRAND_REVIEW_SLUGS)[number];

export interface BrandReview {
  slug: BrandReviewSlug;
  name: string;
  grade: string;
  score: string;
  badge: string;
  category: string;
  countryOfOrigin: string;
  parentCompany: string;
  manufacturingFacilities: string;
  recallRecord: {
    status: 'CLEAN' | 'PAST_RECALLS' | 'MONITORED';
    label: string;
    details: string;
    history: string[];
  };
  macroProfile: {
    protein: string;
    fat: string;
    carbohydrates: string;
    fiber: string;
    moisture: string;
  };
  pros: string[];
  cons: string[];
  overview: string;
  deepDive: string[];
  ingredientPillars: Array<{
    title: string;
    score: string;
    explanation: string;
  }>;
  keyProductLines: Array<{
    name: string;
    type: string;
    description: string;
    targetDogs: string;
  }>;
  veterinaryVerdict: string;
  feedingRecommendation: string;
  affiliateProductKeys: string[];
}

export interface BrandReviewsPageI18n {
  eyebrow: string;
  reviewedBy: string;
  scoreLabel: string;
  gradeLabel: string;
  companyInfoTitle: string;
  parentCompany: string;
  origin: string;
  facilities: string;
  category: string;
  strengthsTitle: string;
  tradeoffsTitle: string;
  clinicalAuditTitle: string;
  pillarsTitle: string;
  macroTitle: string;
  macroSubtitle: string;
  proteinLabel: string;
  fatLabel: string;
  carbsLabel: string;
  fiberLabel: string;
  moistureLabel: string;
  recallsTitle: string;
  recallsSubtitle: string;
  productLinesTitle: string;
  productLinesSubtitle: string;
  targetDogsLabel: string;
  verdictTitle: string;
  verdictBadge: string;
  feedingTipTitle: string;
  affiliateSectionTitle: string;
  affiliateSectionSubtitle: string;
  affiliateBadge: string;
  noAffiliateTitle: string;
  noAffiliateNotice: string;
  buyOnAmazon: string;
  backToBrands: string;
  readMoreBtn: string;
  prevBrand: string;
  nextBrand: string;
  calculatorCtaTitle: string;
  calculatorCtaDesc: string;
  calculatorCtaBtn: string;
}

export const BRAND_REVIEWS_PAGE_I18N: Record<Lang, BrandReviewsPageI18n> = {
  en: {
    eyebrow: 'CLINICAL VETERINARY AUDIT // BRAND REVIEW',
    reviewedBy: 'Veterinary Canine Nutrition Team',
    scoreLabel: 'Clinical Nutrition Score',
    gradeLabel: 'Evaluation Grade',
    companyInfoTitle: 'Corporate & Manufacturing Profile',
    parentCompany: 'Parent Company',
    origin: 'Headquarters & Sourcing',
    facilities: 'Production Facilities',
    category: 'Product Classification',
    strengthsTitle: 'Nutritional Strengths',
    tradeoffsTitle: 'Considerations & Limitations',
    clinicalAuditTitle: 'In-Depth Nutritional & Veterinary Audit',
    pillarsTitle: '4-Point Ingredient Quality Evaluation',
    macroTitle: 'Estimated Macronutrient Profile (Dry Matter)',
    macroSubtitle: 'Laboratory-style nutritional breakdown benchmarked against canine ancestral targets',
    proteinLabel: 'Crude Protein',
    fatLabel: 'Crude Fat',
    carbsLabel: 'Est. Carbohydrates',
    fiberLabel: 'Crude Fiber',
    moistureLabel: 'Moisture',
    recallsTitle: 'FDA Recall History & Quality Assurance',
    recallsSubtitle: 'Historical safety alerts, FDA enforcement actions, and contamination tracking',
    productLinesTitle: 'Notable Brand Product Lines',
    productLinesSubtitle: 'Formulas and diet architectures commonly chosen by pet parents',
    targetDogsLabel: 'Best Suited For',
    verdictTitle: 'Veterinary Final Verdict',
    verdictBadge: 'CLINICAL SUMMARY',
    feedingTipTitle: 'Veterinary Feeding Recommendation',
    affiliateSectionTitle: 'Recommended Brand Products',
    affiliateSectionSubtitle: 'Verified products from this brand available via our Amazon affiliate links',
    affiliateBadge: 'GENUINE BRAND PRODUCT',
    noAffiliateTitle: 'Independent Evaluation — No Third-Party Substitution',
    noAffiliateNotice: 'No direct Amazon affiliate products are currently cataloged for this brand. To maintain clinical objectivity, DogFoodPlanner never recommends irrelevant or substitute products when brand-specific items are unavailable.',
    buyOnAmazon: 'Buy on Amazon',
    backToBrands: '← Back to Brand Reviews Directory',
    readMoreBtn: 'Read full brand review',
    prevBrand: 'Previous Brand Review',
    nextBrand: 'Next Brand Review',
    calculatorCtaTitle: 'Calculate Custom Portions For This Food',
    calculatorCtaDesc: 'Determine the exact daily grams and calories required for your dog’s age, weight, and activity level.',
    calculatorCtaBtn: 'Open Feeding Calculator',
  },
  es: {
    eyebrow: 'AUDITORÍA VETERINARIA CLÍNICA // ANÁLISIS DE MARCA',
    reviewedBy: 'Equipo Veterinario de Nutrición Canina',
    scoreLabel: 'Puntuación Nutricional Clínica',
    gradeLabel: 'Calificación Global',
    companyInfoTitle: 'Perfil Corporativo y Fabricación',
    parentCompany: 'Empresa Matriz',
    origin: 'Sede y Origen de Ingredientes',
    facilities: 'Instalaciones de Producción',
    category: 'Clasificación de Alimento',
    strengthsTitle: 'Puntos Fuertes Nutricionales',
    tradeoffsTitle: 'Aspectos a Tener en Cuenta',
    clinicalAuditTitle: 'Auditoría Nutricional y Veterinaria Detallada',
    pillarsTitle: 'Evaluación de 4 Pilares de Calidad',
    macroTitle: 'Perfil de Macronutrientes Estimado (Materia Seca)',
    macroSubtitle: 'Composición nutricional comparada con las necesidades ancestrales caninas',
    proteinLabel: 'Proteína Bruta',
    fatLabel: 'Grasa Bruta',
    carbsLabel: 'Carbohidratos Est.',
    fiberLabel: 'Fibra Bruta',
    moistureLabel: 'Humedad',
    recallsTitle: 'Historial de Retiradas FDA y Control de Calidad',
    recallsSubtitle: 'Registro de alertas sanitarias y retiradas del mercado oficial',
    productLinesTitle: 'Gamas Principales de la Marca',
    productLinesSubtitle: 'Líneas nutricionales más comercializadas para perros',
    targetDogsLabel: 'Ideal Para',
    verdictTitle: 'Veredicto Veterinario Final',
    verdictBadge: 'RESUMEN CLÍNICO',
    feedingTipTitle: 'Recomendación de Alimentación',
    affiliateSectionTitle: 'Productos Recomendados de la Marca',
    affiliateSectionSubtitle: 'Productos verificados de esta marca disponibles mediante nuestros enlaces de afiliados de Amazon',
    affiliateBadge: 'PRODUCTO OFICIAL DE LA MARCA',
    noAffiliateTitle: 'Evaluación Independiente — Sin Sustitutos Irrelevantes',
    noAffiliateNotice: 'Actualmente no hay productos de afiliados de Amazon catalogados para esta marca. Para preservar nuestra independencia veterinaria, DogFoodPlanner nunca recomienda productos ajenos o irrelevantes cuando no existen opciones directas de la marca.',
    buyOnAmazon: 'Comprar en Amazon',
    backToBrands: '← Volver al Directorio de Marcas',
    readMoreBtn: 'Leer análisis completo',
    prevBrand: 'Marca Anterior',
    nextBrand: 'Siguiente Marca',
    calculatorCtaTitle: 'Calcula las Raciones Exactas de Este Alimento',
    calculatorCtaDesc: 'Calcula los gramos y calorías diarias exactas para el peso, edad y actividad de tu perro.',
    calculatorCtaBtn: 'Abrir Calculadora',
  },
  ja: {
    eyebrow: '獣医栄養学臨床評価 // ブランド詳細レビュー',
    reviewedBy: '獣医栄養学チーム監修',
    scoreLabel: '総合臨床スコア',
    gradeLabel: '評価グレード',
    companyInfoTitle: '企業情報・製造体制',
    parentCompany: '親会社 / 製造元',
    origin: '本社・原材料調達先',
    facilities: '製造工場',
    category: 'フードカテゴリー',
    strengthsTitle: '栄養学的強み・メリット',
    tradeoffsTitle: '注意点・デメリット',
    clinicalAuditTitle: '獣医学的成分分析・臨床レビュー',
    pillarsTitle: '品質評価4大基準',
    macroTitle: '推定栄養成分比（乾物換算）',
    macroSubtitle: '犬本来の生理学的要求値と対比したマクロ栄養素プロファイル',
    proteinLabel: '粗タンパク質',
    fatLabel: '粗脂肪',
    carbsLabel: '推定炭水化物',
    fiberLabel: '粗繊維',
    moistureLabel: '水分含有率',
    recallsTitle: 'FDAリコール履歴・安全性記録',
    recallsSubtitle: '過去の自主回収・米FDA安全性モニタリング実績',
    productLinesTitle: '代表的な製品ラインナップ',
    productLinesSubtitle: '飼い主によく選ばれている主力フードシリーズ',
    targetDogsLabel: '適した犬',
    verdictTitle: '獣医師の総合診断',
    verdictBadge: '臨床総評',
    feedingTipTitle: '給餌アドバイス・おすすめの与え方',
    affiliateSectionTitle: '推奨ブランド商品',
    affiliateSectionSubtitle: '当サイト推奨のブランド公式Amazonアフィリエイト対象商品',
    affiliateBadge: 'ブランド対象製品',
    noAffiliateTitle: '第三者中立評価 — 無関係な商品の除外',
    noAffiliateNotice: '現在、当ブランドに該当するAmazonアフィリエイト推奨商品はカタログに登録されていません。中立性と臨床基準を守るため、無関係な他社製品への誘導は一切行いません。',
    buyOnAmazon: 'Amazonで確認する',
    backToBrands: '← ブランド一覧に戻る',
    readMoreBtn: '詳細レビューを読む',
    prevBrand: '前のブランド',
    nextBrand: '次のブランド',
    calculatorCtaTitle: 'このフードの適正給餌量を計算する',
    calculatorCtaDesc: '愛犬の年齢・体重・活動量に合わせた1日あたりの適正グラム数とカロリーを計算。',
    calculatorCtaBtn: '給餌量計算ツールを開く',
  },
  fr: {
    eyebrow: 'AUDIT VÉTÉRINAIRE // ANALYSE DE MARQUE',
    reviewedBy: 'Équipe Vétérinaire en Nutrition Canine',
    scoreLabel: 'Score Nutritionnel Clinique',
    gradeLabel: 'Note Globale',
    companyInfoTitle: 'Profil Entreprise & Fabrication',
    parentCompany: 'Société Mère',
    origin: 'Siège & Provenance des Ingrédients',
    facilities: 'Usines de Production',
    category: 'Classification de l’Aliment',
    strengthsTitle: 'Points Forts Nutritionnels',
    tradeoffsTitle: 'Limites et Précautions',
    clinicalAuditTitle: 'Audit Nutritionnel & Vétérinaire Approfondi',
    pillarsTitle: '4 Piliers d’Évaluation des Ingrédients',
    macroTitle: 'Profil des Macronutriments Estimé (Matière Sèche)',
    macroSubtitle: 'Répartition nutritionnelle comparée aux besoins biologiques du canidé',
    proteinLabel: 'Protéines Brutes',
    fatLabel: 'Matières Grasses Brutes',
    carbsLabel: 'Glucides Estimés',
    fiberLabel: 'Fibres Brutes',
    moistureLabel: 'Humidité',
    recallsTitle: 'Historique des Rappels FDA & Sécurité',
    recallsSubtitle: 'Suivi des alertes sanitaires et retraits de lots enregistrés',
    productLinesTitle: 'Gammes Principales de la Marque',
    productLinesSubtitle: 'Formules les plus populaires auprès des propriétaires de chiens',
    targetDogsLabel: 'Idéal Pour',
    verdictTitle: 'Verdict Vétérinaire Final',
    verdictBadge: 'SYNTHÈSE CLINIQUE',
    feedingTipTitle: 'Conseil de Distribution Vétérinaire',
    affiliateSectionTitle: 'Produits Recommandés de la Marque',
    affiliateSectionSubtitle: 'Produits vérifiés de cette marque disponibles via nos liens affiliés Amazon',
    affiliateBadge: 'PRODUIT DE LA MARQUE',
    noAffiliateTitle: 'Évaluation Indépendante — Aucun Substitut Inapproprié',
    noAffiliateNotice: 'Aucun produit affilié Amazon direct n’est actuellement référencé pour cette marque. Par souci d’intégrité clinique, DogFoodPlanner ne recommande jamais de produits non pertinents ou de substitution.',
    buyOnAmazon: 'Acheter sur Amazon',
    backToBrands: '← Retour au Répertoire des Marques',
    readMoreBtn: 'Lire l’avis complet',
    prevBrand: 'Marque Précédente',
    nextBrand: 'Marque Suivante',
    calculatorCtaTitle: 'Calculer la Portion Exacte Pour Votre Chien',
    calculatorCtaDesc: 'Calculez les grammes et calories quotidiens adaptés à l’âge et à l’activité de votre chien.',
    calculatorCtaBtn: 'Ouvrir le Calculateur',
  },
  de: {
    eyebrow: 'TIERÄRZTLICHE PRÜFUNG // MARKEN-TEST',
    reviewedBy: 'Veterinärmedizinisches Ernährungsteam',
    scoreLabel: 'Klinischer Ernährungsscore',
    gradeLabel: 'Gesamtnote',
    companyInfoTitle: 'Unternehmensprofil & Produktion',
    parentCompany: 'Mutterkonzern',
    origin: 'Hauptsitz & Rohstoffherkunft',
    facilities: 'Herstellungsstätten',
    category: 'Futterkategorie',
    strengthsTitle: 'Ernährungsphysiologische Stärken',
    tradeoffsTitle: 'Nachteile & Kompromisse',
    clinicalAuditTitle: 'Eingehende tierärztliche Nährwertprüfung',
    pillarsTitle: '4-Punkte Qualitätsstandard',
    macroTitle: 'Geschätztes Makronährstoffprofil (Trockensubstanz)',
    macroSubtitle: 'Nährstoffverteilung im Vergleich zu biologischen Bedürfnissen des Hundes',
    proteinLabel: 'Rohprotein',
    fatLabel: 'Rohfett',
    carbsLabel: 'Geschätzte Kohlenhydrate',
    fiberLabel: 'Rohfaser',
    moistureLabel: 'Feuchtigkeit',
    recallsTitle: 'FDA-Rückrufhistorie & Qualitätssicherung',
    recallsSubtitle: 'Dokumentierte Sicherheitswarnungen und Chargenrückrufe',
    productLinesTitle: 'Wichtige Produktlinien der Marke',
    productLinesSubtitle: 'Die am häufigsten gewählten Futterrezepturen',
    targetDogsLabel: 'Besonders geeignet für',
    verdictTitle: 'Tierärztliches Endurteil',
    verdictBadge: 'KLINISCHE ZUSAMMENFASSUNG',
    feedingTipTitle: 'Fütterungsempfehlung aus tierärztlicher Sicht',
    affiliateSectionTitle: 'Empfohlene Produkte dieser Marke',
    affiliateSectionSubtitle: 'Geprüfte Produkte dieser Marke über unsere Amazon-Partnerlinks',
    affiliateBadge: 'ORIGINAL-MARKENPRODUKT',
    noAffiliateTitle: 'Unabhängige Bewertung — Keine unpassenden Ersatzprodukte',
    noAffiliateNotice: 'Für diese Marke sind aktuell keine direkten Amazon-Partnerprodukte im Katalog gelistet. Im Sinne unserer tierärztlichen Unabhängigkeit empfehlen wir keinesfalls themenfremde Ersatzprodukte.',
    buyOnAmazon: 'Auf Amazon ansehen',
    backToBrands: '← Zurück zur Markenübersicht',
    readMoreBtn: 'Vollständigen Test lesen',
    prevBrand: 'Vorherige Marke',
    nextBrand: 'Nächste Marke',
    calculatorCtaTitle: 'Genaue Futtermenge für Ihren Hund berechnen',
    calculatorCtaDesc: 'Ermitteln Sie die exakten Tagesgramm und Kalorien angepasst an Gewicht und Aktivität.',
    calculatorCtaBtn: 'Futterrechner öffnen',
  },
  pt: {
    eyebrow: 'AUDITORIA VETERINÁRIA // AVALIAÇÃO DE MARCA',
    reviewedBy: 'Equipe de Nutrição Veterinária Canina',
    scoreLabel: 'Pontuação Nutricional Clínica',
    gradeLabel: 'Classificação Global',
    companyInfoTitle: 'Perfil Corporativo e Fabricação',
    parentCompany: 'Empresa Controladora',
    origin: 'Sede e Origem dos Ingredientes',
    facilities: 'Fábricas de Produção',
    category: 'Classificação do Alimento',
    strengthsTitle: 'Pontos Fortes Nutricionais',
    tradeoffsTitle: 'Limitações e Considerações',
    clinicalAuditTitle: 'Auditoria Nutricional e Clínica Detalhada',
    pillarsTitle: 'Avaliação dos 4 Pilares de Qualidade',
    macroTitle: 'Perfil Estimado de Macronutrientes (Matéria Seca)',
    macroSubtitle: 'Distribuição nutricional comparada aos requisitos ancestrais caninos',
    proteinLabel: 'Proteína Bruta',
    fatLabel: 'Gordura Bruta',
    carbsLabel: 'Carboidratos Est.',
    fiberLabel: 'Fibra Bruta',
    moistureLabel: 'Umidade',
    recallsTitle: 'Histórico de Recalls da FDA e Segurança',
    recallsSubtitle: 'Registro de alertas sanitários e retiradas de mercado',
    productLinesTitle: 'Linhas Principais da Marca',
    productLinesSubtitle: 'Fórmulas mais procuradas por tutores',
    targetDogsLabel: 'Indicado Para',
    verdictTitle: 'Veredito Veterinário Final',
    verdictBadge: 'RESUMO CLÍNICO',
    feedingTipTitle: 'Recomendação de Alimentação',
    affiliateSectionTitle: 'Produtos Recomendados da Marca',
    affiliateSectionSubtitle: 'Produtos verificados desta marca disponíveis através de links de afiliados Amazon',
    affiliateBadge: 'PRODUTO OFICIAL DA MARCA',
    noAffiliateTitle: 'Avaliação Independente — Sem Substitutos Irrelevantes',
    noAffiliateNotice: 'Atualmente não há produtos de afiliados Amazon catalogados para esta marca. Para manter o rigor clínico, o DogFoodPlanner não recomenda produtos irrelevantes ou de marcas substitutas.',
    buyOnAmazon: 'Comprar na Amazon',
    backToBrands: '← Voltar ao Diretório de Marcas',
    readMoreBtn: 'Ler avaliação completa',
    prevBrand: 'Marca Anterior',
    nextBrand: 'Próxima Marca',
    calculatorCtaTitle: 'Calcule as Porções Exatas Para o Seu Cão',
    calculatorCtaDesc: 'Descubra a gramatura diária e calorias exatas conforme o peso e nível de atividade.',
    calculatorCtaBtn: 'Abrir Calculadora',
  },
  ko: {
    eyebrow: '수의학 임상 분석 // 사료 브랜드 상세 평가',
    reviewedBy: '수의 영양학 전담 연구팀',
    scoreLabel: '임상 영양 점수',
    gradeLabel: '종합 평가 등급',
    companyInfoTitle: '기업 정보 및 제조 환경',
    parentCompany: '모회사 / 제조사',
    origin: '본사 및 원료 원산지',
    facilities: '생산 시설',
    category: '사료 분류',
    strengthsTitle: '영양학적 강점',
    tradeoffsTitle: '주의점 및 고려사항',
    clinicalAuditTitle: '수의학적 성분 분석 및 임상 감사',
    pillarsTitle: '4대 성분 품질 평가 기준',
    macroTitle: '추정 다량영양소 비율 (건물 기준)',
    macroSubtitle: '반려견의 생리학적 필요 기준치와 비교한 영양 프로필',
    proteinLabel: '조단백질',
    fatLabel: '조지방',
    carbsLabel: '추정 탄수화물',
    fiberLabel: '조섬유',
    moistureLabel: '수분 함량',
    recallsTitle: 'FDA 리콜 이력 및 안전성 관리',
    recallsSubtitle: '과거 안전 경고 및 미국 FDA 리콜 기록',
    productLinesTitle: '대표 제품 라인업',
    productLinesSubtitle: '보호자들이 가장 많이 선택하는 핵심 라인',
    targetDogsLabel: '추천 대상견',
    verdictTitle: '수의사 종합 소견',
    verdictBadge: '임상 요약',
    feedingTipTitle: '수의학적 급여 가이드',
    affiliateSectionTitle: '추천 브랜드 제품',
    affiliateSectionSubtitle: '아마존 제휴 링크를 통해 확인 가능한 본 브랜드 검증 제품',
    affiliateBadge: '브랜드 정품 사료',
    noAffiliateTitle: '독립적 평가 — 무관한 대체 상품 미추천',
    noAffiliateNotice: '현재 본 브랜드와 직접 매칭되는 아마존 제휴 제품이 카탈로그에 없습니다. 수의학적 객관성을 위해 무관한 타사 제품을 대체 추천하지 않습니다.',
    buyOnAmazon: '아마존에서 확인하기',
    backToBrands: '← 브랜드 목록으로 돌아가기',
    readMoreBtn: '상세 리뷰 읽기',
    prevBrand: '이전 브랜드',
    nextBrand: '다음 브랜드',
    calculatorCtaTitle: '내 반려견을 위한 맞춤 일일 급여량 계산',
    calculatorCtaDesc: '나이, 체중, 활동량에 맞춘 일일 칼로리와 급여량을 정밀 계산해 드립니다.',
    calculatorCtaBtn: '급여량 계산기 열기',
  },
  it: {
    eyebrow: 'AUDIT VETERINARIO CLINICO // RECENSIONE MARCHIO',
    reviewedBy: 'Team Veterinario di Nutrizione Canina',
    scoreLabel: 'Punteggio Nutrizionale Clinico',
    gradeLabel: 'Grado di Valutazione',
    companyInfoTitle: 'Profilo Aziendale e Produzione',
    parentCompany: 'Azienda Madre',
    origin: 'Sede e Origine Ingredienti',
    facilities: 'Stabilimenti Produttivi',
    category: 'Classificazione Alimento',
    strengthsTitle: 'Punti di Forza Nutrizionali',
    tradeoffsTitle: 'Limiti e Compromessi',
    clinicalAuditTitle: 'Audit Nutrizionale e Clinico Approfondito',
    pillarsTitle: '4 Pilastri di Qualità degli Ingredienti',
    macroTitle: 'Profilo Macronutrienti Stimato (Sostanza Secca)',
    macroSubtitle: 'Ripartizione nutrizionale confrontata con i fabbisogni biologici canini',
    proteinLabel: 'Proteina Grezza',
    fatLabel: 'Grassi Grezzi',
    carbsLabel: 'Carboidrati Stimati',
    fiberLabel: 'Fibra Grezza',
    moistureLabel: 'Umidità',
    recallsTitle: 'Storico Richiami FDA e Sicurezza',
    recallsSubtitle: 'Registro ufficiale dei ritiri dal mercato e allerte igienico-sanitarie',
    productLinesTitle: 'Linee Principali del Marchio',
    productLinesSubtitle: 'Formule più diffuse tra i proprietari',
    targetDogsLabel: 'Ideale Per',
    verdictTitle: 'Verdetto Veterinario Finale',
    verdictBadge: 'SOMMARIO CLINICO',
    feedingTipTitle: 'Consiglio di Somministrazione',
    affiliateSectionTitle: 'Prodotti Consigliati del Marchio',
    affiliateSectionSubtitle: 'Prodotti verificati di questo marchio disponibili tramite i nostri link affiliati Amazon',
    affiliateBadge: 'PRODOTTO ORIGINALE DEL MARCHIO',
    noAffiliateTitle: 'Valutazione Indipendente — Nessun Sostituto Inappropriato',
    noAffiliateNotice: 'Al momento non sono catalogati prodotti affiliati Amazon diretti per questo marchio. Per garantire integrità clinica, DogFoodPlanner non raccomanda mai prodotti non pertinenti o sostitutivi.',
    buyOnAmazon: 'Acquista su Amazon',
    backToBrands: '← Torna alla Guida dei Marchi',
    readMoreBtn: 'Leggi recensione completa',
    prevBrand: 'Marchio Precedente',
    nextBrand: 'Marchio Successivo',
    calculatorCtaTitle: 'Calcola le Porzioni Esatte Per il Tuo Cane',
    calculatorCtaDesc: 'Determina i grammi e le calorie giornaliere necessarie per il peso e l’attività del tuo cane.',
    calculatorCtaBtn: 'Apri Calcolatore',
  },
};

export const BRAND_REVIEWS: Record<BrandReviewSlug, BrandReview> = {
  'blue-buffalo': {
    slug: 'blue-buffalo',
    name: 'Blue Buffalo',
    grade: 'Grade: B+',
    score: '8.4 / 10',
    badge: 'Popular Meat-First Commercial Kibble',
    category: 'Commercial Dry Kibble & Canned Wet Food',
    countryOfOrigin: 'Wilton, Connecticut, USA (Founded 2003)',
    parentCompany: 'General Mills (Acquired in 2018 for $8B)',
    manufacturingFacilities: 'Company-owned plants in Joplin, Missouri & Richmond, Indiana',
    recallRecord: {
      status: 'PAST_RECALLS',
      label: 'Past FDA Recalls on Record',
      details: 'Historical FDA recall actions include elevated Vitamin D (2010), moisture/mold concerns (2010), canned food propylene glycol violation (2015), and voluntary Salmonella chew bone withdrawal (2015). Included in the FDA 2018-2019 DCM investigation regarding pulse-heavy grain-free kibbles.',
      history: [
        '2010: Voluntary recall for elevated Vitamin D levels across selected dry formulas.',
        '2010: Moisture discrepancy resulting in potential mold growth in specific production batches.',
        '2015: Class II recall of canned dog food due to inadvertent propylene glycol presence.',
        '2018-2019: Listed in FDA investigation exploring dietary dilated cardiomyopathy (DCM) correlation with legume-dense grain-free recipes.',
      ],
    },
    macroProfile: {
      protein: '34% - 38%',
      fat: '15% - 18%',
      carbohydrates: '42% - 48%',
      fiber: '5.0%',
      moisture: '10.0%',
    },
    pros: [
      'Real deboned meat (chicken, salmon, or beef) is consistently ingredient #1 across all lines.',
      'Cold-formed LifeSource Bits protect vitamins, minerals, and antioxidants from high extrusion heat.',
      'Completely free of corn, wheat, soy, and artificial chemical flavorings or colors.',
      'Broad multi-tier portfolio spanning grain-free Wilderness to gentle Life Protection wholesome grains.',
    ],
    cons: [
      'Elevated carbohydrate load (42-48%) can promote weight gain in sedentary or neutered companion dogs.',
      'Wilderness grain-free varieties use significant pea protein, pea starch, and potato flour.',
      'Past history of FDA recalls highlights the challenges of large-scale commercial manufacturing.',
    ],
    overview:
      'Blue Buffalo is one of North America’s most prominent pet food brands, built on a meat-first philosophy and aggressive consumer education against poultry by-product meal. Acquired by General Mills in 2018, the brand continues to formulate high-protein, meat-centric dry kibbles and wet foods across multiple specialized lines including Wilderness, Life Protection Formula, and Basics Limited Ingredient.',
    deepDive: [
      'Nutritional Architecture & LifeSource Bits: Unlike conventional dry pet foods that subject all nutrients to high-heat extrusion (often exceeding 200°C), Blue Buffalo separates its vitamin and antioxidant package into cold-formed LifeSource Bits. This dual-component technology preserves heat-labile vitamins (such as Vitamin C, Vitamin E, and B-complex vitamins) and active bioflavonoids that normally degrade in standard processing.',
      'The Carbohydrate & Legume Balance: While Wilderness formulas deliver a robust 34-38% protein fraction, laboratory proximate analysis indicates total carbohydrate levels remain between 42% and 48%. In grain-free recipes, the brand utilizes split peas, pea protein, and tapioca starch. While safe for healthy canines, dogs prone to pancreatitis or metabolic insulin resistance should be monitored closely.',
      'Hydration & Clinical Management: Extruded dry kibble contains only 8-10% moisture, placing an insidious strain on canine kidneys over years of exclusive feeding. Blue Buffalo provides solid baseline nutrition, but veterinarians recommend adding warm bone broth, warm water, or a 20% fresh whole-food topper to prevent concentrated urine and support renal filtration.',
    ],
    ingredientPillars: [
      {
        title: '1. Named Animal Protein',
        score: '9.0 / 10',
        explanation: 'Deboned chicken, beef, duck, or salmon is always listed as the primary ingredient, backed by single-species meat meals for concentrated amino acids.',
      },
      {
        title: '2. Carbohydrate Fraction',
        score: '7.5 / 10',
        explanation: 'Starch levels hover around 42-48%. Wholesome grain formulas use brown rice and oatmeal, while grain-free formulas rely on peas and potatoes.',
      },
      {
        title: '3. Processing & Heat Exposure',
        score: '8.8 / 10',
        explanation: 'Proprietary cold-formed LifeSource Bits prevent thermal destruction of crucial micro-nutrients during the extrusion cycle.',
      },
      {
        title: '4. Traceability & Safety Track Record',
        score: '7.8 / 10',
        explanation: 'Modern company-owned plants in Missouri and Indiana have instituted strict testing protocols following historic FDA recall events in the early 2010s.',
      },
    ],
    keyProductLines: [
      {
        name: 'Wilderness High-Protein',
        type: 'Grain-Free / High Meat Kibble',
        description: 'Formulated to mimic ancestral wolf diets with 34%+ protein, real meat inclusion, and zero grains or gluten.',
        targetDogs: 'Active adult dogs, working breeds, and dogs requiring high-protein muscular support.',
      },
      {
        name: 'Life Protection Formula',
        type: 'Wholesome Whole-Grain Kibble',
        description: 'Balanced maintenance diet incorporating brown rice, barley, and oatmeal alongside deboned animal protein.',
        targetDogs: 'Everyday household adult dogs with normal activity levels and healthy digestion.',
      },
      {
        name: 'Basics Limited Ingredient Diet (LID)',
        type: 'Single-Source Protein Sensitive Diet',
        description: 'Single novel animal protein (turkey, duck, or salmon) paired with easily digestible carbohydrates and zero dairy, eggs, or wheat.',
        targetDogs: 'Canines with food intolerances, chronic itchy paws, or gastrointestinal sensitivity.',
      },
    ],
    veterinaryVerdict:
      'Blue Buffalo represents an above-average commercial kibble that offers far superior ingredient integrity compared to standard grocery store fare. While its carbohydrate fraction is higher than biologically ideal, its named meat-first deck and cold-formed LifeSource bits make it a dependable commercial choice.',
    feedingRecommendation:
      'We recommend rotating protein sources every 3-4 months and rehydrating each bowl with 1/4 cup of warm water or unsalted bone broth. For dogs over 7 years old, combining Blue Buffalo with 15-20% fresh human-grade toppers significantly improves metabolic vitality.',
    affiliateProductKeys: [
      'blue-buffalo-wilderness-chicken-24lb',
      'blue-buffalo-wilderness-salmon-24lb',
      'blue-buffalo-wilderness-chicken-4lb',
    ],
  },
  'rachael-ray-nutrish': {
    slug: 'rachael-ray-nutrish',
    name: 'Rachael Ray Nutrish',
    grade: 'Grade: C+ / B-',
    score: '7.2 / 10',
    badge: 'Budget-Friendly Supermarket Formula',
    category: 'Commercial Value Dry Kibble & Wet Trays',
    countryOfOrigin: 'Meadville, Pennsylvania, USA (Launched 2008)',
    parentCompany: 'Post Holdings (Acquired from J.M. Smucker in 2023)',
    manufacturingFacilities: 'USA manufacturing plants in Pennsylvania and Kansas',
    recallRecord: {
      status: 'MONITORED',
      label: 'Minimal Recalls, FDA Investigation Citation',
      details: 'Relatively low formal recall volume. Isolated 2019 voluntary wet dog food recall due to elevated Vitamin D levels. Named in the FDA 2019 DCM investigational report regarding high pulse and pea fractions in budget grain-free formulas.',
      history: [
        '2019: Voluntary withdrawal of specific wet food production lots over elevated Vitamin D potency.',
        '2018-2019: Cited among brands in the FDA exploratory report on canine dilated cardiomyopathy and grain-free formulas.',
      ],
    },
    macroProfile: {
      protein: '24% - 30%',
      fat: '12% - 16%',
      carbohydrates: '46% - 52%',
      fiber: '4.5%',
      moisture: '10.0%',
    },
    pros: [
      'Very affordable price-per-pound, making pet food accessible for cost-conscious families.',
      'Widely available in virtually every supermarket, mass merchandiser, and convenience store.',
      'Peak and Dish lines feature upgraded animal protein levels and real visible vegetable pieces.',
      'A portion of brand proceeds is consistently donated to animal rescue and shelter foundations.',
    ],
    cons: [
      'Base supermarket formulas rely heavily on corn gluten meal, ground corn, and split pea fillers.',
      'Lower omega-3 fatty acid concentration (minimal EPA/DHA) requires supplementary fish oil.',
      'High carbohydrate load (up to 52%) increases glycemic burden on sedentary companion dogs.',
    ],
    overview:
      'Rachael Ray Nutrish was established in 2008 in collaboration with celebrity chef Rachael Ray to bring upgraded ingredients to mass-market grocery shelves. Currently manufactured under Post Holdings, the brand operates across budget entry-level lines and higher-tier recipes like Nutrish Peak and Nutrish Dish.',
    deepDive: [
      'Ingredient Stratification Across Product Lines: It is critical to differentiate between standard Nutrish recipes and the premium "Peak" lines. Standard Nutrish formulas (e.g. Real Chicken & Veggies) list real meat first, but closely follow with corn gluten meal, whole corn, and dried peas. In contrast, Nutrish Peak recipes eliminate corn, wheat, and soy entirely, achieving a respectable 30% crude protein.',
      'Fat Quality & Fatty Acid Balance: Fat sources primarily consist of chicken fat naturally preserved with mixed tocopherols. However, marine-derived long-chain omega-3s (EPA and DHA) are present in modest amounts. Dogs fed standard Nutrish benefit greatly from direct dietary supplementation with wild Alaskan salmon oil.',
      'Economic Positioning vs Quality Trade-Offs: Nutrish fills a vital economic role by providing an upgrade over generic store-brand corn-heavy foods without exceeding typical grocery budgets. However, owners should inspect ingredient decks to ensure their chosen formula is not overly reliant on legume splitting.',
    ],
    ingredientPillars: [
      {
        title: '1. Named Animal Protein',
        score: '7.5 / 10',
        explanation: 'Real chicken or beef is listed first, but lower-tier recipes supplement total protein heavily with plant-based corn gluten meal.',
      },
      {
        title: '2. Carbohydrate Fraction',
        score: '6.8 / 10',
        explanation: 'Total carbohydrate levels are high (46-52%), creating a moderate-to-high glycemic load that requires careful portion monitoring.',
      },
      {
        title: '3. Additives & Flavorings',
        score: '7.6 / 10',
        explanation: 'Preserved with natural mixed tocopherols; avoids artificial dyes, but relies on natural flavor extracts for commercial palatability.',
      },
      {
        title: '4. Traceability & Manufacturing',
        score: '7.2 / 10',
        explanation: 'Produced in domestic American facilities with standard commercial quality controls and minimal formal recalls on record.',
      },
    ],
    keyProductLines: [
      {
        name: 'Nutrish Peak High Protein',
        type: 'Grain-Free High-Protein Formula',
        description: 'Grain-free kibble and wet trays featuring 30% protein, real deboned meat, and zero corn, wheat, or soy.',
        targetDogs: 'Dogs needing a higher protein-to-carbohydrate ratio at an affordable price.',
      },
      {
        name: 'Nutrish Dish Whole Ingredients',
        type: 'Kibble with Visible Real Ingredients',
        description: 'Features slow-cooked meat kibble tossed with real whole carrots, peas, and crisp apples.',
        targetDogs: 'Fussy eaters who respond enthusiastically to texture variation in the bowl.',
      },
      {
        name: 'Nutrish Real Beef & Brown Rice',
        type: 'Everyday Budget Maintenance Kibble',
        description: 'Entry-level maintenance food pairing farm-raised beef with wholesome brown rice and peas.',
        targetDogs: 'Household pets on a strict budget with robust digestive systems.',
      },
    ],
    veterinaryVerdict:
      'Nutrish is an acceptable budget option if you select the higher-tier "Peak" or "Dish" formulas. Avoid the entry-level recipes that rely heavily on corn gluten and plant protein boosters, and always supplement the diet with fresh hydration and omega-3 fatty acids.',
    feedingRecommendation:
      'If feeding standard Nutrish dry kibble, supplement daily with 1 teaspoon of pure wild salmon oil to provide missing EPA/DHA, and avoid overfeeding to keep weight gain in check.',
    affiliateProductKeys: [
      'nutrish-peak-variety-pack-wet',
      'nutrish-beef-pea-brown-rice-28lb',
    ],
  },
  'pure-balance': {
    slug: 'pure-balance',
    name: 'Pure Balance',
    grade: 'Grade: B (Best Budget)',
    score: '8.1 / 10',
    badge: 'Supermarket Best Budget Pick',
    category: 'Private-Label Value Dry & Wet Kibble',
    countryOfOrigin: 'United States (Walmart Private Label, Launched 2012)',
    parentCompany: 'Walmart Inc.',
    manufacturingFacilities: 'Manufactured by contract co-packers (principally Ainsworth Pet Nutrition) in USA facilities',
    recallRecord: {
      status: 'CLEAN',
      label: 'Remarkably Clean Safety Record',
      details: 'Pure Balance boasts an exceptionally clean safety record with no major Class I FDA recalls on record for its primary dry dog food lines since its 2012 market introduction.',
      history: [
        'No major FDA Class I pathogen or toxin recalls on record for its flagship dry dog food formulas.',
        'Clean quality control metrics compared to conventional legacy supermarket pet foods.',
      ],
    },
    macroProfile: {
      protein: '24% - 28%',
      fat: '13% - 16%',
      carbohydrates: '46% - 50%',
      fiber: '5.0%',
      moisture: '10.0%',
    },
    pros: [
      'Exceptional price-to-quality ratio, delivering meat-first recipes at mass-market grocery pricing.',
      '100% free of corn, wheat, soy, poultry by-product meal, and artificial colors or preservatives.',
      'Real animal protein (salmon, lamb, or chicken) is consistently ingredient #1 across all formulas.',
      'Pristine recall track record compared to legacy commercial supermarket brands.',
    ],
    cons: [
      'Private-label brand produced by third-party contract manufacturers with variable co-packer arrangements.',
      'Moderate carbohydrate fraction (46-50%) reliant on dried peas, potatoes, and brown rice.',
      'Minimal published clinical feeding trials compared to veterinary prescription brands.',
    ],
    overview:
      'Pure Balance was launched by Walmart in 2012 to democratize premium pet nutrition. By formulating recipes free of corn, wheat, soy, and artificial colors, Walmart successfully offered a genuine alternative to boutique pet store brands at approximately 40% lower cost per pound.',
    deepDive: [
      'Contract Manufacturing & Quality Assurance: Because Pure Balance is a private-label store brand, production is contracted to established third-party manufacturing plants (predominantly Ainsworth Pet Nutrition / Post Holdings). Despite its budget identity, the brand adheres to stringent AAFCO nutrient standards and has maintained an impressive safety record over more than a decade.',
      'Ingredient Profile vs Specialty Competitors: A direct comparison of Pure Balance Grain-Free Salmon & Pea against specialty pet-store brands reveals nearly identical primary ingredient decks: real deboned salmon followed by salmon meal and garbanzo beans. This makes it an outstanding choice for families wanting clean ingredients without pet boutique markups.',
      'Clinical Recommendations on Carbohydrates: As with most commercial kibbles priced under $2.00 per pound, the carbohydrate percentage is significant (46-50%). For young, active dogs, this provides ample clean energy. For senior or overweight canines, careful portion management using a veterinary gram scale is strongly recommended.',
    ],
    ingredientPillars: [
      {
        title: '1. Named Animal Protein',
        score: '8.4 / 10',
        explanation: 'Real meat (salmon, lamb, chicken) leads every recipe, supplemented by concentrated named meat meals rather than anonymous animal by-products.',
      },
      {
        title: '2. Fillers & Additives',
        score: '8.8 / 10',
        explanation: 'Zero corn, wheat, soy, artificial dyes (no Red 40 or Yellow 5), or chemical preservatives like BHA/BHT.',
      },
      {
        title: '3. Economic Accessibility',
        score: '9.8 / 10',
        explanation: 'Among the absolute best price-to-nutrient ratios available in modern retail grocery stores.',
      },
      {
        title: '4. Sourcing Transparency',
        score: '7.0 / 10',
        explanation: 'As a private-label brand, direct farm-level traceability is less transparent than boutique ethical manufacturers.',
      },
    ],
    keyProductLines: [
      {
        name: 'Pure Balance Grain-Free Salmon & Pea',
        type: 'Hypoallergenic Fish Recipe',
        description: 'Salmon-first formulation designed for dogs with poultry or grain sensitivities.',
        targetDogs: 'Dogs prone to itchy skin, allergic ear flare-ups, or dull coats.',
      },
      {
        name: 'Pure Balance Chicken & Brown Rice',
        type: 'Wholesome Grain Formula',
        description: 'Classic wholesome grain formula utilizing real chicken and gentle brown rice.',
        targetDogs: 'Everyday companion dogs with normal digestive health.',
      },
      {
        name: 'Pure Balance Wild & Free Superfood Blend',
        type: 'Elevated Protein Kibble',
        description: 'High-protein recipe enriched with carrots, blueberries, and cranberries.',
        targetDogs: 'Active breeds needing higher antioxidant and caloric support.',
      },
    ],
    veterinaryVerdict:
      'Pure Balance is hands down one of the best budget dry dog foods on the commercial market. It delivers the meat-first, corn-free formulation of specialty brands at supermarket prices, backed by a surprisingly spotless recall history.',
    feedingRecommendation:
      'To unlock maximum health benefits on a budget, pair Pure Balance kibble with inexpensive fresh toppers: 2 tablespoons of pure canned pumpkin, a soft-boiled egg twice weekly, or a splash of warm bone broth.',
    affiliateProductKeys: [], // Strict: No unrelated affiliate products recommended!
  },
  'ollie': {
    slug: 'ollie',
    name: 'Ollie Fresh Dog Food',
    grade: 'Grade: A (Gold Standard)',
    score: '9.6 / 10',
    badge: '100% Human-Grade Fresh Gold Standard',
    category: 'Gently Cooked Human-Grade Fresh Dog Food',
    countryOfOrigin: 'New York, NY, USA (Founded 2016)',
    parentCompany: 'Ollie Pets Inc.',
    manufacturingFacilities: 'USDA-inspected human-grade commercial kitchens in Pennsylvania and New Jersey',
    recallRecord: {
      status: 'CLEAN',
      label: 'Flawless Zero-Recall Record',
      details: 'Ollie maintains a pristine, zero-recall safety record since its founding in 2016. Because food is prepared in human-grade USDA kitchens following strict FDA human food safety protocols, biological safety is far superior to industrial pet feed facilities.',
      history: [
        'Zero FDA pet food recalls or safety warnings since inception in 2016.',
        'Cooked to precision internal temperatures that eliminate pathogens while safeguarding micronutrients.',
      ],
    },
    macroProfile: {
      protein: '38% - 44% (DM)',
      fat: '22% - 28% (DM)',
      carbohydrates: '22% - 28% (DM)',
      fiber: '3.5%',
      moisture: '72.0%',
    },
    pros: [
      '100% human-grade USDA-inspected meats and whole produce you can clearly recognize in every meal pack.',
      'Gently cooked at low temperatures to eradicate pathogens while preserving natural enzymes and bioavailable vitamins.',
      'Personalized daily calorie portions calculated by veterinary nutritionists based on weight, age, and activity.',
      'Natural biological moisture (72%) protects canine kidneys, urinary bladder, and metabolic vitality.',
      'Pristine safety record with zero recalls since brand inception.',
    ],
    cons: [
      'Premium monthly cost ($180 - $350/month depending on canine body weight and caloric requirement).',
      'Requires dedicated freezer storage space and planned defrosting in the refrigerator.',
      'Direct-to-consumer subscription delivery model with limited immediate retail store availability.',
    ],
    overview:
      'Ollie was founded in 2016 to revolutionize canine longevity by replacing over-processed dry kibble with real, human-grade food. Formulated by board-certified veterinary nutritionists (ACVN), Ollie prepares gently cooked recipes in USDA-inspected facilities, delivering precision pre-portioned packs customized to each dog’s exact metabolic profile.',
    deepDive: [
      'The Science of Gentle Cooking vs Extrusion: Extruded dry pet food is subjected to extreme temperatures (150°C-200°C) and violent mechanical shear forces, generating harmful advanced glycation end-products (AGEs) and denaturing fragile proteins. In contrast, Ollie gently cooks whole muscle meats and fresh produce at low temperatures. Clinical trials demonstrate that gently cooked human-grade diets exhibit up to 40% higher protein digestibility and significantly improved nutrient assimilation.',
      'Renal & Bladder Protection via Natural Hydration: Canine physiology evolved to derive over 70% of total hydration directly from food. Feeding dry kibble (8-10% water) leaves dogs in a chronic state of low-grade dehydration, elevating urine concentration and accelerating renal decline. Ollie delivers 72% biological moisture, promoting kidney filtration and helping prevent urinary crystals.',
      'Personalized Portioning & Longevity: Obesity is the leading preventable cause of premature death in domestic dogs. Ollie eliminates guesswork by packaging custom-portioned packs calibrated to each dog’s exact Resting Energy Requirement (RER) and Maintenance Energy Requirement (MER), keeping body condition scores (BCS) at an ideal 4-5 out of 9.',
    ],
    ingredientPillars: [
      {
        title: '1. 100% Human-Grade Meats',
        score: '9.9 / 10',
        explanation: 'USDA-inspected whole cuts of beef, chicken, turkey, and lamb. Zero feed-grade by-product meals, carcass remnants, or 4D animal fats.',
      },
      {
        title: '2. Nutrient Bioavailability',
        score: '9.8 / 10',
        explanation: 'Whole vegetables (sweet potatoes, carrots, spinach, blueberries) provide natural fiber, bioflavonoids, and antioxidants without heavy synthetic fortifiers.',
      },
      {
        title: '3. Microbiome & Digestibility',
        score: '9.7 / 10',
        explanation: 'Clinical studies demonstrate higher gut bacterial diversity, reduced stool volume, and optimal gastrointestinal absorption.',
      },
      {
        title: '4. Manufacturing & Safety',
        score: '9.9 / 10',
        explanation: 'Prepared in human-grade facilities subject to USDA food inspection standards with a spotless zero-recall record.',
      },
    ],
    keyProductLines: [
      {
        name: 'Fresh Gently Cooked Beef with Sweet Potatoes',
        type: 'High-Protein Muscle Recipe',
        description: 'Lean USDA beef, beef liver, sweet potatoes, peas, and blueberries gently cooked for peak nutrient retention.',
        targetDogs: 'Active dogs, growing puppies, and dogs needing rich whole-meat palatability.',
      },
      {
        name: 'Fresh Gently Cooked Chicken with Carrots',
        type: 'Lean Gentle Protein Recipe',
        description: 'Tender chicken, chicken heart, chicken liver, carrots, and rice. Highly digestible and light on the stomach.',
        targetDogs: 'Dogs with sensitive stomachs or lower fat tolerance.',
      },
      {
        name: 'Fresh Gently Cooked Turkey with Blueberries',
        type: 'Low-Allergen Poultry Recipe',
        description: 'Nutrient-dense turkey, turkey liver, kale, carrots, and antioxidant-rich blueberries.',
        targetDogs: 'Senior dogs, allergy-prone canines, and pets needing joint-supportive bioflavonoids.',
      },
    ],
    veterinaryVerdict:
      'Ollie is the gold standard in modern canine nutrition. The clinical advantages of 100% human-grade, gently cooked whole food over industrial dry kibble in terms of digestibility, coat quality, and organ longevity are undeniable.',
    feedingRecommendation:
      'If a 100% fresh Ollie subscription exceeds your monthly household budget, we strongly recommend a 50/50 hybrid plan: feed half high-grade kibble and top with 50% Ollie. Even a 25% fresh whole-food topper dramatically reduces cellular inflammation and revitalizes gut microbiome health.',
    affiliateProductKeys: [
      'ollie-chicken-apple-jerky-treats',
    ],
  },
  'open-farm': {
    slug: 'open-farm',
    name: 'Open Farm',
    grade: 'Grade: A-',
    score: '9.2 / 10',
    badge: 'Certified Humane & Ethical Sourcing Pioneer',
    category: 'Ultra-Premium Traceable Dry Kibble, RawMix & Wet Food',
    countryOfOrigin: 'Toronto, Ontario, Canada (Founded 2014)',
    parentCompany: 'Open Farm Inc.',
    manufacturingFacilities: 'Family-owned SQF-certified manufacturing facilities in the United States and Canada',
    recallRecord: {
      status: 'CLEAN',
      label: 'Spotless Zero-Recall Safety Record',
      details: 'Open Farm has maintained a spotless safety track record with zero FDA pet food recalls since its founding in 2014. The brand enforces lot-code level traceability, third-party pathogen batch testing, and transparent lab audits.',
      history: [
        'Zero FDA recalls or regulatory warnings since brand inception in 2014.',
        'Lot-code transparency tool allows pet parents to trace every single ingredient to its certified farm source.',
      ],
    },
    macroProfile: {
      protein: '32% - 38% (DM)',
      fat: '16% - 20% (DM)',
      carbohydrates: '32% - 38% (DM)',
      fiber: '4.5%',
      moisture: '10.0%',
    },
    pros: [
      'Industry-leading 100% ingredient traceability: enter your bag’s lot code online to verify farm origins.',
      '100% Certified Humane raised meats (GAP-compliant) and Ocean Wise certified sustainable wild fish.',
      'Innovative RawMix line features kibble coated in freeze-dried raw bone broth and organ meat for intense palatability.',
      'Zero poultry by-product meals, artificial palatants, or cheap legume splitting tricks.',
      'Both wholesome ancient grains (millet, quinoa) and grain-free options available.',
    ],
    cons: [
      'Premium price point ($4.50 - $6.00/lb) significantly higher than conventional supermarket kibble.',
      'Primarily stocked in specialty independent pet boutiques or ordered online.',
      'High nutrient density requires precise measuring to prevent inadvertent overfeeding.',
    ],
    overview:
      'Open Farm was founded in 2014 with an unprecedented ethical mission: radical ingredient transparency and animal welfare. The brand was the first in North America to partner with Certified Humane and Ocean Wise, offering lot-code traceability where consumers can trace every ingredient in their pet’s bowl directly to its farm or fishery.',
    deepDive: [
      'Radical Traceability & Ethical Welfare Standards: Most commercial pet food brands treat ingredient sourcing as a trade secret, obscuring supplier origins behind broad distributor contracts. Open Farm prints a lot code on every bag that reveals the precise farm or fishery origin of every single ingredient. Their meats are certified by humane farm animal care programs ensuring pasture-raised, antibiotic-free standards.',
      'RawMix Technology & Bioavailable Organ Meats: Open Farm RawMix combines high-protein dry kibble with freeze-dried raw chunks and a nutrient-dense bone broth coating. By infusing the kibble surface with bone broth and freeze-dried liver, heart, and kidneys, it provides dense bioavailable vitamins (Vitamin A, CoQ10, iron) and exceptional natural palatability without artificial sprays.',
      'Balancing Ancient Grains vs Grain-Free: Unlike brands that aggressively split legumes to inflate protein values on grain-free recipes, Open Farm offers transparent formulations using ancient grains (steel-cut oats, sorghum, quinoa, and millet). These low-glycemic ancient grains provide steady glucose release and natural prebiotic fiber.',
    ],
    ingredientPillars: [
      {
        title: '1. Ethical Animal Welfare',
        score: '9.9 / 10',
        explanation: '100% Certified Humane pasture-raised beef, crate-free pork, cage-free poultry, and wild-caught Ocean Wise seafood.',
      },
      {
        title: '2. Radical Supply Traceability',
        score: '10 / 10',
        explanation: 'Every ingredient is 100% traceable to its farm of origin via online lot-code lookup.',
      },
      {
        title: '3. Raw Infusion & Bone Broth',
        score: '9.4 / 10',
        explanation: 'Kibbles are tumbled in freeze-dried raw bone broth and organ meats for bioavailable micronutrients and unmatched aroma.',
      },
      {
        title: '4. Processing Quality',
        score: '9.1 / 10',
        explanation: 'Manufactured in SQF-certified facilities with third-party testing on all production batches.',
      },
    ],
    keyProductLines: [
      {
        name: 'RawMix Grain-Free Front Range Recipe',
        type: 'Freeze-Dried Raw Coated Kibble',
        description: 'Grass-fed beef, pasture-raised lamb, and pork kibble coated in freeze-dried raw bone broth with raw meat chunks.',
        targetDogs: 'Active breeds, dogs with sensitive digestion, and picky eaters.',
      },
      {
        name: 'RawMix Ancient Grains Open Prairie Recipe',
        type: 'Wholesome Ancient Grain Kibble',
        description: 'Cage-free chicken and turkey paired with non-GMO ancient grains (oats, millet, quinoa) and raw bone broth.',
        targetDogs: 'Dogs thriving on gut-friendly whole grains and sustained metabolic energy.',
      },
      {
        name: 'Wild Ocean Catch Recipe',
        type: 'Single-Source Wild Fish Formula',
        description: 'Ocean Wise wild-caught salmon, whitefish, and herring rich in anti-inflammatory omega-3 fatty acids (EPA/DHA).',
        targetDogs: 'Dogs suffering from canine atopic dermatitis, dry coats, or joint stiffness.',
      },
    ],
    veterinaryVerdict:
      'Open Farm sets the benchmark for ethical integrity and ingredient transparency in commercial pet nutrition. Its RawMix formulations deliver the convenience of dry kibble with the nutrient density of freeze-dried raw bone broth and humane whole meats.',
    feedingRecommendation:
      'Because Open Farm is significantly more calorie- and nutrient-dense than standard commercial kibble, we advise weighing meals on a digital kitchen gram scale rather than relying on measuring cups to maintain your dog’s lean body mass.',
    affiliateProductKeys: [
      'open-farm-rawmix-front-range-20lb',
      'open-farm-rawmix-open-prairie-20lb',
      'open-farm-rawmix-wild-ocean-20lb',
    ],
  },
};

export function getBrandReviews(_lang: Lang = 'en'): BrandReview[] {
  return BRAND_REVIEW_SLUGS.map((slug) => BRAND_REVIEWS[slug]);
}

export function getBrandReviewBySlug(slug: string, _lang: Lang = 'en'): BrandReview | undefined {
  return BRAND_REVIEWS[slug as BrandReviewSlug];
}
