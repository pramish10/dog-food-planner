import type { Lang } from '../i18n/ui';

export const PUPPY_NUTRITION_SLUGS = [
  'high-metabolic-burn-feeding-frequency',
  'calcium-phosphorus-ratio-skeletal-growth',
  'dha-brain-cognitive-development',
  'breed-size-specific-growth-formulas',
] as const;

export type PuppyNutritionSlug = (typeof PUPPY_NUTRITION_SLUGS)[number];

export interface PuppyNutritionRequirement {
  slug: PuppyNutritionSlug;
  requirementNumber: number;
  title: string;
  shortTag: string;
  metricBadge: string;
  desc: string;
  readMore: string;
  whatToLookFor: string[];
  redFlags: string[];
  checklist: string[];
  vetTip: string;
}

export interface PuppyNutritionSectionI18n {
  title: string;
  intro: string;
  footerText: string;
  footerLink: string;
  readMoreBtn: string;
}

export interface PuppyNutritionPageI18n {
  badge: string;
  reqBadgePrefix: string;
  reviewedBy: string;
  whatToLookForTitle: string;
  redFlagsTitle: string;
  fullBreakdown: string;
  checklistTitle: string;
  vetTipTitle: string;
  prevRequirement: string;
  nextRequirement: string;
  backLink: string;
  titleSuffix: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}

export const PUPPY_NUTRITION_SECTION_I18N: Record<Lang, PuppyNutritionSectionI18n> = {
  en: {
    title: 'Puppy Nutrition: Critical Growth Requirements',
    intro: 'Puppies undergo exponential cellular, skeletal, and neurological development requiring up to three times the calories per pound of an adult dog. Clinical canine pediatrics centers on four indispensable biological growth pillars:',
    footerText: 'To calculate personalized daily gram portions and meal schedules for your puppy’s exact age and breed size, use our free',
    footerLink: 'Veterinary Feeding Calculator',
    readMoreBtn: 'Read more →',
  },
  es: {
    title: 'Nutrición de Cachorros: Requerimientos Críticos de Crecimiento',
    intro: 'Los cachorros experimentan un desarrollo celular, óseo y neurológico exponencial que exige hasta tres veces más calorías por kilo que un perro adulto. La pediatría canina clínica se fundamenta en cuatro pilares biológicos indispensables:',
    footerText: 'Para calcular gramos diarios personalizados y horarios de comida según la edad y tamaño de tu cachorro, utiliza nuestra',
    footerLink: 'Calculadora Veterinaria Gratuita',
    readMoreBtn: 'Leer más →',
  },
  ja: {
    title: '子犬の栄養学：成長期に不可欠な4大必須要件',
    intro: '成長期の子犬は細胞増殖、骨格形成、神経発達が急激に進むため、成犬の最大3倍のカロリーと厳密なミネラル比率を必要とします。獣医小児臨床栄養学に基づく4つの最重要要件を解説します：',
    footerText: '月齢や推定成犬体重に応じた正確な1日の給餌グラム数と回数を調べるには、無料の',
    footerLink: '獣医監修・給餌量計算ツール',
    readMoreBtn: '詳しく見る →',
  },
  fr: {
    title: 'Nutrition du Chiot : Piliers Critiques de Croissance',
    intro: 'Les chiots traversent un développement cellulaire, osseux et cérébral exponentiel nécessitant jusqu’à trois fois plus de calories par kilo qu’un adulte. La pédiatrie canine clinique repose sur quatre piliers indispensables :',
    footerText: 'Pour calculer la ration quotidienne exacte en grammes et la fréquence des repas selon l’âge et le gabarit de votre chiot, consultez notre',
    footerLink: 'Calculateur Vétérinaire Gratuit',
    readMoreBtn: 'En savoir plus →',
  },
  de: {
    title: 'Welpenernährung: Kritische Wachstumsanforderungen',
    intro: 'Welpen durchlaufen eine exponentielle Zell-, Knochen- und Nervenentwicklung, die pro Kilogramm Körpergewicht bis zum Dreifachen des adulten Kalorienbedarfs erfordert. Vier klinische Kernpfeiler sind entscheidend:',
    footerText: 'Um die exakte tägliche Grammfütterung und Mahlzeitenverteilung für das Alter und die Rasse Ihres Welpen zu ermitteln, nutzen Sie unseren kostenlosen',
    footerLink: 'Tierärztlichen Futterrechner',
    readMoreBtn: 'Mehr erfahren →',
  },
  pt: {
    title: 'Nutrição de Filhotes: Requisitos Críticos de Crescimento',
    intro: 'Os filhotes passam por um desenvolvimento celular, ósseo e neurológico acelerado que exige até o triplo de calorias por quilo em relação a um cão adulto. A pediatria canina clínica apoia-se em quatro pilares fundamentais:',
    footerText: 'Para calcular as gramas diárias e horários ideais de acordo com a idade e o porte do seu filhote, use nossa',
    footerLink: 'Calculadora Veterinária Gratuita',
    readMoreBtn: 'Ler mais →',
  },
  ko: {
    title: '자견(강아지) 영양학: 폭풍 성장기 4대 핵심 영양 요건',
    intro: '성장기 강아지는 세포 증식, 골격 형성, 두뇌 발달이 폭발적으로 일어나 체중당 성견의 최대 3배에 달하는 대사 에너지와 정밀한 영양 균형이 필요합니다. 수의 임상 영양학이 규정하는 4대 필수 지침은 다음과 같습니다:',
    footerText: '생후 개월 수와 예상 성견 체중에 맞춘 하루 급여량(g)과 식사 횟수를 정밀 측정하려면 무료',
    footerLink: '수의학 맞춤 급여량 계산기',
    readMoreBtn: '자세히 보기 →',
  },
  it: {
    title: 'Nutrizione del Cucciolo: Requisiti Critici di Crescita',
    intro: 'I cuccioli attraversano una crescita cellulare, ossea e neurologica esponenziale che richiede fino al triplo delle calorie per chilo rispetto a un cane adulto. La pediatria veterinaria si fonda su quattro pilastri indispensabili:',
    footerText: 'Per calcolare la razione giornaliera in grammi e i pasti raccomandati in base all’età e alla taglia del tuo cucciolo, usa il nostro',
    footerLink: 'Calcolatore Veterinario Gratuito',
    readMoreBtn: 'Scopri di più →',
  },
};

export const PUPPY_NUTRITION_PAGE_I18N: Record<Lang, PuppyNutritionPageI18n> = {
  en: {
    badge: 'PUPPY NUTRITION // CLINICAL GROWTH REQUIREMENTS',
    reqBadgePrefix: 'REQUIREMENT',
    reviewedBy: 'Reviewed by: Board-Certified Veterinary Nutritionist (DACVN)',
    whatToLookForTitle: 'Clinical Best Practices & What to Look For',
    redFlagsTitle: 'Critical Risks & Common Feeding Mistakes',
    fullBreakdown: 'In-Depth Veterinary Nutritional Breakdown',
    checklistTitle: 'Daily Puppy Feeding & Health Checklist',
    vetTipTitle: 'Pediatric Veterinary Clinical Insight',
    prevRequirement: 'Previous Requirement',
    nextRequirement: 'Next Requirement',
    backLink: 'Back to Best Dog Food Guide',
    titleSuffix: 'Puppy Growth Nutrition Guide | Dog Food Planner',
    ctaTitle: 'Calculate Your Puppy’s Exact Daily Feeding Portions',
    ctaDesc: 'Enter your puppy’s exact age, weight, and breed size into our veterinary calculator to get scientifically balanced daily calorie and gram targets.',
    ctaBtn: 'Launch Puppy Feeding Calculator →',
  },
  es: {
    badge: 'NUTRICIÓN DE CACHORROS // REQUERIMIENTOS DE CRECIMIENTO',
    reqBadgePrefix: 'REQUISITO',
    reviewedBy: 'Revisado por: Nutricionista Clínico Veterinario (DACVN)',
    whatToLookForTitle: 'Mejores Prácticas Clínicas y Qué Buscar',
    redFlagsTitle: 'Riesgos Críticos y Errores Comunes de Alimentación',
    fullBreakdown: 'Análisis Nutricional Veterinario Detallado',
    checklistTitle: 'Checklist Diario de Alimentación y Salud del Cachorro',
    vetTipTitle: 'Recomendación Clínica Veterinaria Pediátrica',
    prevRequirement: 'Requisito Anterior',
    nextRequirement: 'Siguiente Requisito',
    backLink: 'Volver a la Guía del Mejor Alimento para Perros',
    titleSuffix: 'Guía de Nutrición para Cachorros | Dog Food Planner',
    ctaTitle: 'Calcula las Porciones Diarias Exactas para tu Cachorro',
    ctaDesc: 'Ingresa la edad, peso y tamaño de raza de tu cachorro en nuestra calculadora veterinaria para obtener metas calóricas y de gramos balanceadas.',
    ctaBtn: 'Calcular Porciones de Cachorro Ahora →',
  },
  ja: {
    badge: '子犬の栄養管理 // 成長期臨床ガイドライン',
    reqBadgePrefix: '必須要件',
    reviewedBy: '監修：獣医臨床小児栄養専門医',
    whatToLookForTitle: '選ぶべき良質成分と臨床的ベストプラクティス',
    redFlagsTitle: '絶対に避けるべき危険な給餌ミスと配合リスク',
    fullBreakdown: '獣医生理学に基づく詳細解説',
    checklistTitle: '毎日の給餌・体重モニタリングチェックリスト',
    vetTipTitle: '小児臨床獣医からの専門的アドバイス',
    prevRequirement: '前の要件',
    nextRequirement: '次の要件',
    backLink: 'おすすめドッグフード総合ガイドに戻る',
    titleSuffix: '子犬の栄養と成長管理ガイド | Dog Food Planner',
    ctaTitle: '愛犬（子犬）の正確な1日給餌グラム数を計算する',
    ctaDesc: '月齢、現在体重、予想成犬サイズを入力するだけで、成長段階に最適なカロリーと正確な食事量を即座に算出します。',
    ctaBtn: '今すぐ子犬用給餌量を計算する →',
  },
  fr: {
    badge: 'NUTRITION DU CHIOT // EXIGENCES CRITIQUES DE CROISSANCE',
    reqBadgePrefix: 'EXIGENCE',
    reviewedBy: 'Vérifié par : Nutritionniste Canin Pédiatrique Vétérinaire',
    whatToLookForTitle: 'Bonnes Pratiques Cliniques et Critères de Choix',
    redFlagsTitle: 'Risques Majeurs et Erreurs Alimentaires Fréquentes',
    fullBreakdown: 'Analyse Vétérinaire Approfondie',
    checklistTitle: 'Check-list Quotidienne d’Alimentation et de Santé',
    vetTipTitle: 'Conseil Clinique Vétérinaire Pédiatrique',
    prevRequirement: 'Exigence précédente',
    nextRequirement: 'Exigence suivante',
    backLink: 'Retour au Guide du Meilleur Aliment pour Chien',
    titleSuffix: 'Guide Nutritionnel du Chiot en Croissance | Dog Food Planner',
    ctaTitle: 'Calculez la Ration Quotidienne Exacte de Votre Chiot',
    ctaDesc: 'Indiquez l’âge précis, le poids actuel et le gabarit adulte estimé pour obtenir le grammage quotidien scientifiquement calibré.',
    ctaBtn: 'Calculer la Ration du Chiot →',
  },
  de: {
    badge: 'WELPENERNÄHRUNG // KRITISCHE WACHSTUMSANFORDERUNGEN',
    reqBadgePrefix: 'ANFORDERUNG',
    reviewedBy: 'Geprüft von: Fachtierarzt für Tierernährung & Diätetik',
    whatToLookForTitle: 'Klinische Best Practices & Wichtige Nährstoffmerkmale',
    redFlagsTitle: 'Kritische Risiken & Häufige Fütterungsfehler',
    fullBreakdown: 'Umfassende tierärztliche Detailanalyse',
    checklistTitle: 'Tägliche Fütterungs- und Gewichtskontroll-Checkliste',
    vetTipTitle: 'Pädiatrische tierärztliche Praxiseinsicht',
    prevRequirement: 'Vorherige Anforderung',
    nextRequirement: 'Nächste Anforderung',
    backLink: 'Zurück zur Bestenliste für Hundefutter',
    titleSuffix: 'Leitfaden für Welpenernährung & Wachstum | Dog Food Planner',
    ctaTitle: 'Berechnen Sie die exakte Futtermenge für Ihren Welpen',
    ctaDesc: 'Tragen Sie Alter, Gewicht und Rassegröße in unseren tierärztlichen Rechner ein, um portionsgenaue Gramm- und Kalorientagesbedarfe zu erhalten.',
    ctaBtn: 'Welpen-Futterportionen berechnen →',
  },
  pt: {
    badge: 'NUTRIÇÃO DO FILHOTE // REQUISITOS CRÍTICOS DE CRESCIMENTO',
    reqBadgePrefix: 'REQUISITO',
    reviewedBy: 'Revisado por: Especialista em Nutrição Pediátrica Canina',
    whatToLookForTitle: 'Melhores Práticas Clínicas e O Que Buscar',
    redFlagsTitle: 'Riscos Críticos e Erros Alimentares Comuns',
    fullBreakdown: 'Análise Nutricional Veterinária Aprofundada',
    checklistTitle: 'Checklist Diário de Alimentação e Acompanhamento',
    vetTipTitle: 'Recomendação Clínica Pediátrica Veterinária',
    prevRequirement: 'Requisito Anterior',
    nextRequirement: 'Próximo Requisito',
    backLink: 'Voltar ao Guia das Melhores Rações',
    titleSuffix: 'Guia de Nutrição e Crescimento do Filhote | Dog Food Planner',
    ctaTitle: 'Calcule as Porções Diárias Exatas para o Seu Filhote',
    ctaDesc: 'Insira a idade exata, o peso atual e o porte esperado para descobrir a quantidade diária recomendada em gramas e calorias.',
    ctaBtn: 'Calcular Ração do Filhote Agora →',
  },
  ko: {
    badge: '자견 영양 관리 // 임상 소아 영양학 가이드라인',
    reqBadgePrefix: '핵심 요건',
    reviewedBy: '검수: 수의 소아 임상 영양학 전문의',
    whatToLookForTitle: '임상 영양학적 핵심 기준 및 라벨 확인법',
    redFlagsTitle: '성장기 치명적 위험 요소 및 피해야 할 실수',
    fullBreakdown: '수의학 기반 심층 과학 분석',
    checklistTitle: '강아지 일일 급여 및 건강 모니터링 체크리스트',
    vetTipTitle: '임상 수의사의 소아 발달 케어 조언',
    prevRequirement: '이전 요건',
    nextRequirement: '다음 요건',
    backLink: '최고의 강아지 사료 가이드로 돌아가기',
    titleSuffix: '자견(강아지) 성장기 영양 및 사료 가이드 | Dog Food Planner',
    ctaTitle: '우리 강아지 맞춤형 하루 급여량(g) 계산하기',
    ctaDesc: '생후 개월 수, 현재 체중, 견종 성견 예상 체급을 입력하면 이상적인 일일 칼로리와 끼니별 급여량을 정확히 계산해 드립니다.',
    ctaBtn: '강아지 맞춤 급여량 계산하기 →',
  },
  it: {
    badge: 'NUTRIZIONE DEL CUCCIOLO // REQUISITI CRITICI DI CRESCITA',
    reqBadgePrefix: 'REQUISITO',
    reviewedBy: 'Revisionato da: Nutrizionista Veterinario Certificato (DACVN)',
    whatToLookForTitle: 'Migliori Pratiche Cliniche e Cosa Verificare',
    redFlagsTitle: 'Rischi Critici ed Errori Nutrizionali Comuni',
    fullBreakdown: 'Analisi Scientifica e Nutrizionale Approfondita',
    checklistTitle: 'Checklist Giornaliera di Alimentazione e Peso',
    vetTipTitle: 'Raccomandazione Pediatrica del Medico Veterinario',
    prevRequirement: 'Requisito precedente',
    nextRequirement: 'Requisito successivo',
    backLink: 'Torna alla Guida ai Migliori Alimenti per Cani',
    titleSuffix: 'Guida Nutrizionale per la Crescita del Cucciolo | Dog Food Planner',
    ctaTitle: 'Calcola la Razione Giornaliera Esatta per il Tuo Cucciolo',
    ctaDesc: 'Inserisci l’età esatta, il peso e la taglia attesa del tuo cucciolo per ottenere il fabbisogno calorico e i grammi precisi per ogni pasto.',
    ctaBtn: 'Calcola la Razione del Cucciolo Ora →',
  },
};

const REQUIREMENTS_DATA: Record<Lang, PuppyNutritionRequirement[]> = {
  en: [
    {
      slug: 'high-metabolic-burn-feeding-frequency',
      requirementNumber: 1,
      title: 'High Metabolic Burn & Meal Scheduling',
      shortTag: 'Caloric Kinetics & Glycemic Control',
      metricBadge: '2–3× Adult RER • 3–4 Meals Daily',
      desc: 'Young puppies (2–4 months) burn up to three times their resting metabolic rate per pound due to rapid cell division, tissue synthesis, and high body-surface heat dissipation. Serving 3 to 4 smaller, nutrient-dense meals prevents life-threatening hypoglycemia, enzymatic digestive overload, and gastric distension.',
      readMore: `During the initial postnatal growth window (weeks 8 through 16), canine metabolic velocity peaks at levels never experienced again during adult life. A growing puppy must fuel exponential protein turnover, continuous osteoblast bone deposition, and intense thermoregulation. Because their ratio of skin surface area to body mass is drastically elevated, juvenile puppies lose metabolic heat rapidly, driving baseline caloric expenditure up to 2.5–3.0 times the adult Resting Energy Requirement (RER = 70 × [kg]^0.75).

However, their anatomic stomach volume remains remarkably compact. Overloading a juvenile puppy’s digestive tract with one or two massive daily feedings causes acute gastric dilatation, osmotic diarrhea from incomplete enzyme saturation, and sluggish intestinal motility. Pancreatic lipase and amylase concentrations in young pups are still maturing; moderate, evenly spaced meals ensure complete enzymatic hydrolyzation without triggering small intestinal bacterial overgrowth.

Crucially, toy and small breed puppies under 16 weeks possess minimal hepatic glycogen storage capacity and immature gluconeogenesis pathways. If meal intervals exceed 6 to 8 hours during active daytime waking periods, systemic blood glucose can plummet precipitously into clinical hypoglycemia—leading to tremors, hypothermia, ataxia, and seizures.

The clinical feeding schedule follows a structured step-down protocol: 4 meals daily from weaning to 16 weeks; 3 meals daily from 4 months until 6 months of age; and transitioning smoothly to 2 meals daily once the dog reaches 50% to 75% of expected adult mass. Caloric targets must be re-evaluated every 7 to 10 days, as rapid growth curves mean static feeding amounts quickly turn into progressive underfeeding.`,
      whatToLookFor: [
        'Caloric density exceeding 3,800 kcal ME/kg for toy/small breeds to deliver sufficient energy without stomach overfill',
        'High biological value whole-animal protein (≥28% to 32% dry matter basis) with minimum 18% digestible fat',
        'Strict feeding frequency: 4 distinct meals daily up to 16 weeks, reducing to 3 meals daily through 6 months',
        'Weekly weigh-ins on digital scales with dynamic caloric adjustments based on steady, non-obese weight gain',
      ],
      redFlags: [
        'Feeding once or twice daily to puppies under 5 months of age, risking glycemic crashes and acute vomiting',
        'Free-choice (ad libitum) buffet feeding, which causes excessive caloric intake and skeletal overgrowth',
        'Relying on adult maintenance kibbles with low caloric density (under 3,500 kcal/kg) that fail growth requirements',
        'Exercising puppies vigorously immediately after a heavy feeding, increasing the risk of gastric distress',
      ],
      checklist: [
        'Divide total daily food grams into 3 to 4 equal portions served at consistent 4- to 5-hour intervals',
        'Weigh the puppy every 7 days on a calibrated digital scale and adjust daily portions to maintain a BCS of 4/9 to 5/9',
        'Ensure fresh, clean water is accessible throughout the day but removed 2 hours before night crate time',
        'Keep canine-safe Karo syrup or honey on hand for toy breeds to rub on gums if early hypoglycemic lethargy appears',
      ],
      vetTip: 'Never feed a puppy until their ribs disappear under a thick layer of adipose tissue. While a puppy must never go hungry, maintaining a lean Body Condition Score (4 out of 9) throughout the entire growth phase reduces lifetime osteoarthritis incidence by over 45% and adds up to 1.8 years of healthy lifespan.',
    },
    {
      slug: 'calcium-phosphorus-ratio-skeletal-growth',
      requirementNumber: 2,
      title: 'Optimal Calcium-to-Phosphorus Ratio & Skeletal Growth',
      shortTag: 'Mineral Density & Joint Protection',
      metricBadge: 'Ca:P 1.2:1–1.4:1 • 1.2%–1.6% Max DM',
      desc: 'Puppies under six months cannot regulate intestinal calcium uptake and absorb nearly all ingested calcium through passive diffusion. A tightly controlled Calcium:Phosphorus ratio (1.2:1 to 1.4:1) with strict upper limits is non-negotiable to prevent irreversible developmental orthopedic diseases like osteochondrosis dissecans and hip dysplasia.',
      readMore: `Calcium homeostasis in puppies differs fundamentally from that of adult canines. Adult dogs possess an active, vitamin D-dependent transcellular transport mechanism that effectively downregulates intestinal calcium absorption when dietary intake is excessive. In sharp contrast, puppies younger than 6 months absorb dietary calcium almost entirely through passive paracellular diffusion across the intestinal brush border—absorbing up to 45% to 50% of whatever calcium enters their lumen, regardless of physiological necessity.

When growing puppies ingest excess dietary calcium, circulating serum levels elevate, triggering continuous calcitonin secretion from thyroid C-cells and suppressing parathyroid hormone (PTH). This hypercalcitonemia halts normal osteoclastic bone resorption and delays cartilage maturation. Growing epiphyseal growth plates fail to ossify at physiological rates, causing thickened, mechanically fragile cartilage that fissures under normal biomechanical load.

The result is developmental orthopedic disease (DOD), including Osteochondritis Dissecans (OCD), Hypertrophic Osteodystrophy (HOD), Radius Curvus syndrome, and premature joint incongruity accelerating canine hip and elbow dysplasia. Large and giant breed puppies are particularly vulnerable because their rapid linear skeletal growth magnifies shear forces across fragile joint surfaces.

AAFCO and FEDIAF guidelines mandate a strict Calcium-to-Phosphorus ratio between 1.2:1 and 1.4:1, with an absolute dietary calcium ceiling of 1.2% to 1.6% on a dry matter basis for large breed puppies (versus up to 2.5% tolerated in adult maintenance). Crucially, pet parents must never add supplementary calcium powder, bone meal, or dairy products to an already complete and balanced commercial puppy formula.`,
      whatToLookFor: [
        'AAFCO nutritional adequacy statement confirming formulation specifically "for growth" or "all life stages including growth of large breed puppies"',
        'Calcium-to-Phosphorus ratio lab-verified between 1.2:1 and 1.4:1 (never dropping below 1.1:1 or exceeding 1.6:1)',
        'Absolute dietary calcium tightly controlled between 1.0% and 1.3% dry matter for large and giant breeds',
        'Bioavailable organic chelated mineral complexes (calcium proteinate, zinc amino acid complex) for balanced absorption',
      ],
      redFlags: [
        'Adding calcium tablets, bone meal, eggshell powder, or cottage cheese to commercial puppy food',
        'Feeding unformulated homemade raw or cooked meat without analytical calcium balancing (boneless meat contains Ca:P of 1:10 or worse)',
        'Using "all life stages" foods that lack the specific AAFCO large-breed puppy growth compliance caveat',
        'Supplementing high-dose Vitamin D or Vitamin A, which synergistically worsens calcium-induced cartilage dysplasia',
      ],
      checklist: [
        'Verify the AAFCO statement on the packaging specifically addresses puppy growth and large breed puppy parameters',
        'Refuse all over-the-counter calcium supplements unless an endocrinologist diagnoses hypocalcemia via ionized blood tests',
        'If preparing homemade puppy food, consult a board-certified veterinary nutritionist with software recipe formulation',
        'Schedule orthopedic palpation and gait evaluation with your veterinarian at the 16-week and 6-month wellness visits',
      ],
      vetTip: 'The most dangerous misconception in puppy rearing is that "extra calcium builds stronger bones." In puppies, excess calcium is directly toxic to developing joint cartilage. A balanced growth diet provides every milligram of calcium required; adding supplements destroys that delicate equilibrium and can cripple a growing dog for life.',
    },
    {
      slug: 'dha-brain-cognitive-development',
      requirementNumber: 3,
      title: 'DHA Omega-3 for Brain & Retinal Development',
      shortTag: 'Neurological & Photoreceptor Acuity',
      metricBadge: 'DHA ≥0.05% DM • Cold-Water Marine EPA/DHA',
      desc: 'Docosahexaenoic acid (DHA) is the primary structural phospholipid in the mammalian cerebral cortex and photoreceptor membranes. Clinical trials demonstrate that puppies nourished with bioavailable marine DHA achieve significantly higher trainability scores, faster spatial learning, and superior retinal visual acuity.',
      readMore: `The central nervous system of a puppy experiences its most critical architectural expansion between late gestation and 16 weeks of age. During this neurodevelopmental surge, Docosahexaenoic Acid (DHA, 22:6 n-3)—a 22-carbon long-chain omega-3 polyunsaturated fatty acid—is selectively transported across the blood-brain barrier and incorporated into synaptic neuronal plasma membranes and retinal rod photoreceptors. In fact, DHA represents more than 30% of total structural lipids in cerebral gray matter.

At the biophysical level, DHA’s unique six double bonds impart extraordinary fluidity to neuronal membranes. This fluidity accelerates G-protein-coupled receptor signaling, enhances synaptic plasticity, and optimizes neurotransmitter vesicle fusion, directly governing the speed of neural transmission and memory consolidation.

Crucially, canines possess negligible activity of the elongase and delta-6 desaturase enzymes required to convert short-chain plant-derived alpha-linolenic acid (ALA, found in flaxseed and chia) into long-chain DHA. Research shows that less than 1% of ingested plant ALA is synthesized into functional DHA in dogs. Therefore, pre-formed marine DHA sourced from wild cold-water fish oils (salmon, menhaden, sardine) or specialized schizochytrium marine microalgae is physiologically essential.

Controlled double-blind cognitive clinical studies at leading veterinary schools have tested puppies fed high-DHA diets versus typical low-DHA control diets. Puppies receiving adequate marine DHA achieved significantly superior results in visual contrast sensitivity testing, learned T-maze directional cues in fewer trials, and demonstrated higher retention during basic obedience training and crate socialization protocols.`,
      whatToLookFor: [
        'Guaranteed analysis explicitly listing DHA as a separate percentage (minimum 0.05% to 0.10% dry matter)',
        'Direct marine oil sources on the ingredient panel: wild Alaskan salmon oil, menhaden fish oil, sardine meal, or marine microalgae',
        'Complementary EPA (eicosapentaenoic acid) to modulate physiological inflammatory tone and support youthful joints',
        'Natural mixed tocopherols, rosemary extract, or oxygen-barrier packaging to prevent delicate omega-3 lipid oxidation',
      ],
      redFlags: [
        'Foods claiming omega-3 enrichment that solely list flaxseed, chia, or canola oil with zero preformed marine DHA',
        'Bulk kibble bags stored in open, hot garages, where high ambient heat oxidizes polyunsaturated fats into inflammatory lipid peroxides',
        'Cod liver oil supplementation without calculating Vitamin A and D toxicity risks from concentrated organ oils',
        'Cheap generic "fish meal" or "poultry fat" preserved with synthetic ethoxyquin, BHA, or BHT',
      ],
      checklist: [
        'Examine the guaranteed analysis on your puppy’s food for a distinct DHA line item, not merely generic "Omega-3"',
        'Store dry puppy food in its original bag inside an airtight container in a cool, dark pantry; consume within 30 days of opening',
        'If supplementing liquid marine oil, select an amber glass bottle with an airtight pump and store it in the refrigerator',
        'Incorporate puzzle toys, scent games, and positive reinforcement training during meals to harness DHA-fueled neuroplasticity',
      ],
      vetTip: 'The socialization window from 8 to 16 weeks is the only time in a dog’s life where synaptic density in the forebrain peaks. Providing marine-derived DHA during these exact 8 weeks creates permanent structural advantages in learning speed, visual acuity, and emotional impulse control that last their entire lifetime.',
    },
    {
      slug: 'breed-size-specific-growth-formulas',
      requirementNumber: 4,
      title: 'Breed Size-Specific Growth Rates & Energy Density',
      shortTag: 'Breed Scale & Orthopedic Growth Modulation',
      metricBadge: 'Toy: 8–10 Mo • Giant: 18–24 Mo Maturity',
      desc: 'Toy and small breed puppies complete skeletal maturity by 8 to 10 months and require high caloric density (≥3,800 kcal/kg) and micro-kibble size to prevent nocturnal hypoglycemia. In contrast, large and giant breed puppies grow for up to 24 months and require calorie-controlled formulas (≤3,500 kcal/kg) to slow bone elongation and protect weight-bearing joints.',
      readMore: `The canine species exhibits the most dramatic intraspecific morphological diversity of any land mammal. A 3-pound adult Chihuahua and a 160-pound adult English Mastiff begin life at comparable neonatal proportions, yet their growth trajectories diverge exponentially. A toy breed puppy multiplies their birth weight roughly 20-fold over an 8- to 10-month window, whereas a giant breed puppy multiplies birth weight up to 100-fold over a prolonged 18- to 24-month developmental period.

Because their biological endpoints are radically dissimilar, feeding a generic "one-size-fits-all" puppy food introduces catastrophic pediatric risks at both ends of the scale.

Toy and small breed puppies have extremely high metabolic rates per gram of body weight, rapid surface heat dissipation, and small stomachs that can only hold a few ounces of food at a time. They require a calorie-dense formula (3,800 to 4,200 kcal ME/kg) with concentrated, easily digestible proteins and fats, paired with mini kibble geometry that avoids dental strain and choking. Their rapid growth reaches adult plateau by 9 to 10 months, at which point caloric density must be scaled back to avoid early obesity.

Conversely, large and giant breed puppies face an orthopedic crisis if fed high-calorie, high-fat small-breed puppy diets. Excess caloric intake triggers accelerated linear bone elongation. When skeletal bones lengthen faster than the surrounding periosteal connective tissue, joint surfaces become mismatched, dramatically increasing the phenotypic expression of hip dysplasia, elbow incongruity, and osteochondrosis. Large breed puppy diets must deliberately restrict energy density (3,300 to 3,600 kcal ME/kg) and moderate fat (10% to 14%) to enforce slow, controlled growth while maintaining lean muscular body condition through 18 to 24 months.`,
      whatToLookFor: [
        'Formulas explicitly tailored to breed size: "Toy/Small Breed Puppy" vs. "Large Breed Puppy" (for dogs with adult weight >55 lbs)',
        'Caloric density matched to size: 3,800–4,200 kcal/kg for small breeds; 3,300–3,600 kcal/kg for large breeds',
        'Kibble particle diameter engineered for jaw biomechanics: 6–8mm micro-pellets for toy breeds; 12–15mm crunch kibble for large breeds',
        'Controlled dietary fat levels (12%–15%) with L-carnitine in large breed formulas to support lean muscle development without fat accumulation',
      ],
      redFlags: [
        'Feeding high-calorie puppy food intended for small breeds to a Labrador, Golden Retriever, or German Shepherd puppy',
        'Switching large or giant breed puppies to adult food at 6 months to "slow growth," which strips them of required growth amino acids',
        'Switching toy breed puppies to adult kibble too early (under 8 months), risking hypoglycemia and nutrient deficits',
        'Encouraging a puppy to look "chubby" or "stocky"; fat deposits on a juvenile frame overload soft, uncalcified joint surfaces',
      ],
      checklist: [
        'Estimate your puppy’s mature adult weight based on parental genetics or veterinary breed benchmarks',
        'Select a formula whose AAFCO statement matches your puppy’s target size category (under or over 55 lbs adult weight)',
        'Keep your puppy at a Body Condition Score of 4 to 5 out of 9—you should easily feel ribs with light pressure and see a defined waistline',
        'Maintain small breed puppies on growth formula for 9–10 months, medium breeds for 12 months, and large/giant breeds for 18–24 months',
      ],
      vetTip: 'A large breed puppy is not an oversized small breed puppy—their metabolic kinetics and skeletal vulnerabilities are entirely distinct. Never rush a large breed puppy’s growth. Slow, steady development across 18 to 24 months guarantees robust bone density and preserves hip and elbow articulation for their entire life.',
    },
  ],
  es: [
    {
      slug: 'high-metabolic-burn-feeding-frequency',
      requirementNumber: 1,
      title: 'Alto Gasto Metabólico y Frecuencia de Comidas',
      shortTag: 'Cinética Energética y Control Glucémico',
      metricBadge: '2–3× RER Adulto • 3–4 Comidas al Día',
      desc: 'Los cachorros jóvenes (2–4 meses) queman hasta el triple de su tasa metabólica basal por kilo debido a la rápida división celular, la síntesis tisular y la disipación térmica. Ofrecer 3 a 4 tomas diarias de alta densidad energética previene la hipoglucemia, la sobrecarga enzimática digestiva y la dilatación gástrica.',
      readMore: `Durante la ventana de crecimiento inicial (semanas 8 a 16), la velocidad metabólica canina alcanza picos que jamás volverán a repetirse en la etapa adulta. Un cachorro en desarrollo debe sostener una síntesis proteica vertiginosa, el depósito continuo de matriz ósea y la termorregulación activa. Al tener una relación superficie corporal/peso mucho mayor, los cachorros pierden calor rápidamente, elevando su gasto calórico basal a 2,5–3,0 veces el Requerimiento Energético de Reposo adulto (RER = 70 × [kg]^0,75).

No obstante, su capacidad gástrica anatómica es muy reducida. Sobrecargar el tracto digestivo de un cachorro con una o dos comidas voluminosas genera dilatación gástrica, diarrea osmótica por saturación enzimática y digestiones lentas. Las enzimas pancreáticas (lipasas y amilasas) continúan madurando; varias comidas moderadas a lo largo del día aseguran una hidrólisis completa sin alterar la microbiota intestinal.

Asimismo, los cachorros de razas pequeñas y toy menores de 16 semanas poseen reservas hepáticas mínimas de glucógeno y vías de gluconeogénesis inmaduras. Si los intervalos de ayuno superan las 6 u 8 horas durante el día, la glucosa plasmática puede descender bruscamente en una hipoglucemia clínica con letargia, temblores y convulsiones.

El protocolo clínico de alimentación requiere una reducción gradual escalonada: 4 comidas diarias desde el destete hasta las 16 semanas; 3 comidas diarias de los 4 a los 6 meses; y una transición a 2 comidas al día cuando el perro alcanza el 50% al 75% de su masa adulta estimada. Las raciones deben recalcularse cada 7 a 10 días para acompañar la curva de peso.`,
      whatToLookFor: [
        'Densidad calórica superior a 3.800 kcal ME/kg para cachorros toy/pequeños que aporte energía sin saturar el estómago',
        'Proteína de origen animal de alto valor biológico (≥28% a 32% sobre materia seca) y mínimo 18% de grasa digestible',
        'Frecuencia estricta: 4 tomas diarias hasta las 16 semanas, reduciendo a 3 tomas hasta los 6 meses de edad',
        'Pesajes semanales en báscula digital con ajustes dinámicos de ración para un aumento de peso firme y sin grasa corporal excesiva',
      ],
      redFlags: [
        'Alimentar una o dos veces al día a cachorros menores de 5 meses, arriesgando crisis hipoglucémicas y vómitos biliosos',
        'Alimentación libre o buffet (ad libitum), que descontrola la ingesta calórica y causa crecimiento óseo desmedido',
        'Utilizar piensos de mantenimiento para adultos con baja concentración energética (menor a 3.500 kcal/kg)',
        'Permitir ejercicio físico intenso inmediatamente después de una comida abundante, aumentando el riesgo de torsión gástrica',
      ],
      checklist: [
        'Dividir los gramos diarios en 3 o 4 porciones iguales espaciadas cada 4 a 5 horas durante el día',
        'Pesar al cachorro cada 7 días en báscula digital y regular las porciones para mantener un estado corporal de 4/9 a 5/9',
        'Garantizar agua limpia y fresca todo el día, retirándola 2 horas antes de dormir para facilitar el control de esfínteres',
        'Disponer de miel o jarabe seguro para cachorros toy y frotarlo en encías ante signos tempranos de decaimiento por hipoglucemia',
      ],
      vetTip: 'Nunca alimente a un cachorro hasta que sus costillas queden enterradas bajo grasa. Mantener una condición corporal magra (4 de 9) durante toda la etapa de crecimiento reduce la incidencia de artrosis en más del 45% y prolonga la esperanza de vida en hasta 1,8 años.',
    },
    {
      slug: 'calcium-phosphorus-ratio-skeletal-growth',
      requirementNumber: 2,
      title: 'Proporción Calcio-Fósforo (Ca:P) y Crecimiento Óseo',
      shortTag: 'Densidad Mineral y Protección Articular',
      metricBadge: 'Ca:P 1.2:1–1.4:1 • Máx 1.2%–1.6% MS',
      desc: 'Los cachorros menores de 6 meses no pueden regular la absorción intestinal de calcio y asimilan casi todo el mineral por difusión pasiva. Mantener una relación Calcio:Fósforo estrictamente calibrada (1.2:1 a 1.4:1) con topes máximos es indispensable para evitar displasia de cadera y osteocondrosis disecante.',
      readMore: `La homeostasis del calcio en los cachorros difiere radicalmente de la de los perros adultos. Un perro adulto posee mecanismos activos de transporte intestinal que reducen la absorción cuando el aporte de calcio es excesivo. Por el contrario, los cachorros menores de 6 meses absorben el calcio dietético casi en su totalidad por difusión paracelular pasiva, incorporando hasta el 45% o 50% de todo el calcio ingerido, sin importar sus necesidades reales.

Cuando un cachorro ingiere exceso de calcio, los niveles plasmáticos se elevan de forma anómala, induciendo la secreción continua de calcitonina tiroidea y frenando la hormona paratiroidea (PTH). Esta hipercalcitonemia detiene la remodelación ósea osteoclástica y bloquea la maduración normal del cartílago. Como consecuencia, las placas de crecimiento no se osifican al ritmo adecuado, engrosando un cartílago frágil que se fisura bajo cargas mecánicas normales.

Este fenómeno desencadena enfermedades ortopédicas del desarrollo (DOD), como la osteocondritis disecante (OCD), la osteodistrofia hipertrófica (HOD) y la displasia de caderas y codos. Los cachorros de razas grandes y gigantes son especialmente vulnerables debido a que la rápida elongación ósea multiplica las tensiones biomecánicas articulares.

Las normativas internacionales de AAFCO y FEDIAF exigen una proporción Calcio:Fósforo controlada entre 1.2:1 y 1.4:1, con un techo máximo de calcio del 1.2% al 1.6% en materia seca para razas grandes. Jamás se deben añadir suplementos minerales caseros ni cáscaras de huevo a un alimento comercial ya balanceado.`,
      whatToLookFor: [
        'Declaración AAFCO o FEDIAF específica para "crecimiento" o "todas las etapas de vida incluyendo cachorros de raza grande"',
        'Relación Calcio:Fósforo analítica verificada entre 1.2:1 y 1.4:1 (nunca inferior a 1.1:1 ni superior a 1.6:1)',
        'Calcio total rigurosamente controlado entre el 1.0% y el 1.3% de materia seca en fórmulas para razas grandes y gigantes',
        'Minerales quelados con aminoácidos para una absorción armónica sin competir con el zinc, magnesio y hierro',
      ],
      redFlags: [
        'Añadir pastillas de calcio, harina de huesos, cáscara de huevo molida o lácteos a un pienso comercial de cachorro',
        'Suministrar dietas caseras o BARF sin balanza de precisión ni análisis de calcio (la carne sin hueso tiene una ratio Ca:P de 1:10 desastrosa)',
        'Alimentos catalogados para "todas las etapas" que omiten la cláusula de seguridad para cachorros de razas grandes',
        'Suplementar altas dosis de vitamina D o vitamina A, que potencian la toxicidad del calcio en el cartílago articular',
      ],
      checklist: [
        'Comprobar la etiqueta trasera y verificar la mención explícita al crecimiento de cachorros y control mineral',
        'Rechazar cualquier suplemento mineral de venta libre a menos que un veterinario diagnostique hipocalcemia mediante analítica sanguínea',
        'Si prepara comida casera o cocinada, formular la receta con un software profesional de nutrición veterinaria',
        'Solicitar una revisión ortopédica y de marcha en las visitas veterinarias de los 4 y 6 meses de edad',
      ],
      vetTip: 'El mito más dañino en la crianza canina es creer que "más calcio produce huesos más fuertes". En cachorros, el exceso de calcio destruye el cartílago en crecimiento. Un alimento formulado contiene todo el calcio necesario; añadir suplementos arruina ese equilibrio y puede generar secuelas articulares de por vida.',
    },
    {
      slug: 'dha-brain-cognitive-development',
      requirementNumber: 3,
      title: 'Ácidos Grasos DHA para el Desarrollo Cerebral y Visual',
      shortTag: 'Neurología y Agudeza Fotorreceptora',
      metricBadge: 'DHA ≥0.05% MS • Omega-3 Marino EPA/DHA',
      desc: 'El ácido docosahexaenoico (DHA) es el fosfolípido estructural predominante en la corteza cerebral y la retina canina. Ensayos clínicos veterinarios demuestran que los cachorros nutridos con DHA marino biodisponible obtienen mayor capacidad de aprendizaje, mejor memoria espacial y superior agudeza visual.',
      readMore: `El sistema nervioso central de un cachorro atraviesa su fase más crítica de organización estructural entre las últimas semanas de gestación y las 16 semanas de vida. Durante esta ventana neurogénica, el ácido docosahexaenoico (DHA, 22:6 n-3) se transporta activamente a través de la barrera hematoencefálica para incorporarse a las membranas neuronales sinápticas y a los bastones fotorreceptores de la retina. El DHA constituye más del 30% de los lípidos estructurales de la sustancia gris cerebral.

En el plano biofísico, la estructura del DHA aporta una fluidez extraordinaria a la bicapa lipídica neuronal. Esta fluidez acelera la transmisión sináptica, optimiza la plasticidad neuronal y facilita la liberación de neurotransmisores, impactando de forma directa en la velocidad de aprendizaje y la consolidación de la memoria.

Un dato clínico fundamental es que los perros presentan una actividad muy limitada de las enzimas elongasas y delta-6 desaturasas para convertir el ácido alfa-linolénico vegetal (ALA de linaza o chía) en DHA activo. Menos del 1% del ALA vegetal se transforma en DHA funcional en el organismo canino. Por tanto, es indispensable que el DHA provenga directamente de fuentes marinas preformadas (aceite de salmón salvaje, sardina, arenque o microalgas Schizochytrium).

Estudios clínicos a doble ciego han demostrado que cachorros alimentados con dietas ricas en DHA marino superaron con creces a grupos control en pruebas de discriminación visual, laberintos espaciales y velocidad de respuesta en adiestramiento y socialización temprana.`,
      whatToLookFor: [
        'Análisis garantizado con desglose explícito de DHA porcentual (mínimo 0.05% a 0.10% en materia seca)',
        'Fuentes directas de aceite marino en la lista de ingredientes: aceite de salmón salvaje, harina de pescado azul o microalgas marinas',
        'Presencia conjunta de EPA (ácido eicosapentaenoico) para modular la respuesta inflamatoria y proteger las articulaciones juveniles',
        'Antioxidantes naturales (tocoferoles mixtos, extracto de romero) para evitar la rancidez y oxidación de las grasas poliinsaturadas',
      ],
      redFlags: [
        'Alimentos que prometen "rico en Omega-3" pero solo contienen lino, chía o canola sin ningún aporte de DHA marino preformado',
        'Sacos de pienso almacenados abiertos en lugares calurosos, donde el calor oxida los ácidos grasos en peróxidos tóxicos',
        'Suplementar aceite de hígado de bacalao sin control veterinario, arriesgando hipervitaminosis A y D tóxica',
        'Subproductos de pescado genéricos conservados con etoxiquina, BHA o BHT sintéticos',
      ],
      checklist: [
        'Comprobar que la analítica garantizada mencione expresamente "DHA" y no solo un genérico "Ácidos grasos Omega-3"',
        'Guardar el saco original dentro de un contenedor hermético en un lugar fresco y consumirlo antes de 30 días tras su apertura',
        'Si utiliza aceite de salmón líquido añadido, elegir envases oscuros con dosificador hermético y conservarlo en frío',
        'Aprovechar la etapa de 8 a 16 semanas para realizar estimulación cognitiva con juguetes interactivos y refuerzo positivo',
      ],
      vetTip: 'La etapa de socialización de las 8 a las 16 semanas es la única en la vida del perro donde la densidad sináptica cerebral se encuentra en su punto culminante. Aportar DHA marino durante estas semanas otorga ventajas permanentes en capacidad de aprendizaje y estabilidad emocional que perdurarán toda su vida.',
    },
    {
      slug: 'breed-size-specific-growth-formulas',
      requirementNumber: 4,
      title: 'Fórmulas Específicas por Tamaño de Raza y Ritmo de Crecimiento',
      shortTag: 'Escala Racial y Modulación Articular',
      metricBadge: 'Toy: 8–10 Meses • Gigante: 18–24 Meses',
      desc: 'Los cachorros de razas pequeñas culminan su crecimiento a los 8–10 meses y requieren alta concentración calórica (≥3.800 kcal/kg) y croquetas mini para prevenir hipoglucemias. Por el contrario, los cachorros de razas grandes crecen hasta los 24 meses y exigen fórmulas de energía controlada (≤3.500 kcal/kg) para moderar el estirón óseo y cuidar las articulaciones.',
      readMore: `La especie canina presenta la mayor diversidad morfológica de todos los mamíferos terrestres. Un Chihuahua de 1,5 kg y un Mastín de 80 kg nacen con proporciones neonatales comparables, pero sus trayectorias de crecimiento divergen radicalmente. Un cachorro toy multiplica su peso natal unas 20 veces en apenas 8 a 10 meses, mientras que un cachorro de raza gigante lo multiplica hasta 100 veces a lo largo de 18 a 24 meses.

Al tener metas biológicas tan opuestas, alimentar con un pienso genérico "para cualquier cachorro" genera severos riesgos en ambos extremos.

Los cachorros mini y toy tienen una tasa metabólica por gramo de peso altísima, pierden calor con facilidad y poseen estómagos minúsculos. Necesitan alimentos de alta densidad energética (3.800 a 4.200 kcal/kg), proteínas ultra digestibles y croquetas de 6-8 mm que eviten atragantamientos. Alcanzan el tamaño adulto a los 9-10 meses, momento en que debe frenarse el aporte calórico para prevenir la obesidad temprana.

En el extremo opuesto, los cachorros de razas grandes y gigantes corren grave peligro si consumen piensos hipercalóricos. El exceso de calorías acelera el alargamiento lineal de los huesos antes de que las estructuras articulares y ligamentosas hayan madurado, detonando displasias e incongruencias articulares. Su fórmula debe tener energía controlada (3.300 a 3.600 kcal/kg) y grasa moderada (10% a 14%) para obligar al esqueleto a crecer de manera lenta, firme y segura hasta los 18 a 24 meses.`,
      whatToLookFor: [
        'Formulaciones diferenciadas por tamaño: "Puppy Toy/Small" frente a "Puppy Large/Giant" (adultos previstos de más de 25 kg)',
        'Densidad calórica acorde: 3.800–4.200 kcal/kg para razas pequeñas; 3.300–3.600 kcal/kg para razas grandes',
        'Geometría adaptada de la croqueta: micro-grano de 6–8 mm para razas toy; croqueta crujiente de 12–15 mm para razas grandes',
        'Grasa moderada (12%–15%) con L-carnitina en fórmulas grandes para promover masa muscular magra sin acumulación de grasa',
      ],
      redFlags: [
        'Alimentar a un cachorro de Pastor Alemán, Labrador o Gran Danés con pienso hipercalórico diseñado para razas pequeñas',
        'Cambiar a un cachorro de raza grande a pienso de adulto a los 6 meses creyendo erróneamente que así crecerá más lento, desnutriéndolo en aminoácidos',
        'Pasar a un cachorro toy a comida de adulto antes de los 8 meses, arriesgando caídas de glucosa',
        'Buscar que el cachorro se vea "gordito" o "robusto"; el sobrepeso en un esqueleto inmaduro daña las articulaciones de forma irreversible',
      ],
      checklist: [
        'Determinar el peso adulto previsto según los progenitores o el estándar de la raza',
        'Elegir un alimento cuya declaración AAFCO coincida con el rango de peso adulto (más o menos de 25 kg)',
        'Mantener una condición corporal de 4 a 5 sobre 9: las costillas deben palparse con suavidad y la cintura debe ser nítida',
        'Mantener el alimento de cachorro hasta los 9–10 meses en razas toy, 12 meses en medianas y 18–24 meses en razas grandes y gigantes',
      ],
      vetTip: 'Un cachorro de raza grande no es una versión grande de un cachorro pequeño: sus requerimientos energéticos y vulnerabilidades esqueléticas son totalmente diferentes. Nunca acelere el crecimiento de un cachorro grande. Un desarrollo pausado durante 18 a 24 meses garantiza articulaciones sanas y libres de displasia para toda su vida.',
    },
  ],
  ja: [
    {
      slug: 'high-metabolic-burn-feeding-frequency',
      requirementNumber: 1,
      title: '高い代謝熱量と成長期の給餌頻度・スケジュール',
      shortTag: 'エネルギー動態と血糖値コントロール',
      metricBadge: '成犬RERの2〜3倍 • 1日3〜4回給餌',
      desc: '生後2〜4ヶ月の幼犬期は急激な細胞分裂・組織合成・体表面からの放熱により、成犬の最大3倍の安静時代謝量を消費します。高栄養な食事を1日3〜4回に小分け給餌することで、致死的な低血糖症、消化酵素の過負荷、胃拡張を防ぎます。',
      readMore: `離乳直後から生後16週齢頃までの成長初期は、犬の生涯の中で最も代謝速度が高まる極めて重要な時期です。子犬の体内では骨芽細胞による骨形成、筋肉タンパク質の合成、そして体温維持が急速に行われています。成犬に比べて体表面積に対する体重比が小さいため体熱が逃げやすく、基礎的な必要カロリーは成犬の安静時エネルギー要求量（RER = 70 × [体重kg]^0.75）の2.5〜3.0倍に達します。

一方で、胃の解剖学的な容量は成犬に比べて極めて小さく、未発達です。成犬のように1日1〜2回の大量給餌を行うと、未消化のまま小腸へ送られて浸透圧性下痢を引き起こしたり、胃の過膨張を招きます。膵臓のリパーゼやアミラーゼ分泌能力も成長過程にあるため、適量を複数回に分けて与えることが安全な消化吸収の鍵となります。

特に生後16週未満の超小型犬や小型犬の子犬は、肝臓に蓄えられるグリコーゲン量が極めて少なく、糖新生の代謝経路も未熟です。日中の絶食時間が6〜8時間を超えると、急激に血糖値が低下して脱力、低体温、運動失調、重篤な低血糖性痙攣発作を起こす危険があります。

臨床栄養学的な給餌回数の推奨プロトコルは以下の通りです。離乳後〜生後4ヶ月までは1日4回、生後4〜6ヶ月は1日3回、成犬推定体重の50〜75%に達した生後6ヶ月以降に1日2回へと移行します。成長曲線に合わせて7〜10日ごとに給餌量を再計算することが必須です。`,
      whatToLookFor: [
        '超小型・小型犬には胃に負担をかけず十分なカロリーを補給できる3,800 kcal ME/kg以上の高エネルギー設計',
        '乾物ベースで28〜32%以上の高品質な動物性タンパク質と18%以上の消化性の高い脂質',
        '月齢に応じた厳格な回数管理：生後16週までは1日4回、生後6ヶ月までは1日3回の規則正しい食事スケジュール',
        'デジタル体重計による週1回の体重測定と、体型スコア（BCS 4/9〜5/9）に基づく給餌量の微調整',
      ],
      redFlags: [
        '生後5ヶ月未満の子犬に1日1〜2回しか食事を与えず、低血糖発作や空腹時胆汁嘔吐を誘発すること',
        '常にフードを出しっぱなしにする自由採食（置き餌）：摂取カロリー過多と急激な骨成長を引き起こす最大要因',
        'エネルギー密度の低い成犬用フード（3,500 kcal/kg未満）を与え、成長に必要な栄養を欠乏させること',
        '食後すぐに激しい運動をさせ、胃捻転や重度の消化不良のリスクを高めること',
      ],
      checklist: [
        '1日の総給餌グラム数を3〜4等分し、日中4〜5時間の間隔で規則正しく与える',
        '週に1回決まった時間に体重を測定し、あばら骨に適度な皮下脂肪が触れる体型（BCS 4〜5/9）を維持する',
        'いつでも清潔な水を飲めるように配置し、夜間のサークル内排泄事故を防ぐため就寝2時間前に給水をコントロールする',
        '小型犬のオーナーは、低血糖の兆候（ぐったりする、足のふらつき）に備えてガムシロップやハチミツを常備しておく',
      ],
      vetTip: 'あばら骨が完全に埋もれるほど太らせてはいけません。「太った子犬が可愛い」という思い込みは危険です。成長期を通じて引き締まった体型（BCS 4/9）を保つことで、将来の変形性関節症の発症リスクが45%以上低減し、健康寿命が最大1.8年延びることが証明されています。',
    },
    {
      slug: 'calcium-phosphorus-ratio-skeletal-growth',
      requirementNumber: 2,
      title: 'カルシウム・リン比率（Ca:P）と骨格形成の最適化',
      shortTag: '骨密度と関節保護ミネラルバランス',
      metricBadge: 'Ca:P 1.2:1–1.4:1 • 上限1.2%〜1.6% DM',
      desc: '生後6ヶ月未満の子犬は腸管でのカルシウム吸収を調節できず、食事中のカルシウムを受動拡散でほぼ全量吸収してしまいます。カルシウム・リン比率（1.2:1〜1.4:1）と厳格な上限値を遵守することは、離断性骨軟骨炎や股関節形成不全などの骨関節疾患を防ぐために不可欠です。',
      readMore: `子犬におけるカルシウムの代謝メカニズムは成犬と根本的に異なります。成犬は食事中のカルシウムが過剰になると、能動的なカルシウム輸送をダウンレギュレーションして体外へ排泄することができます。しかし、生後6ヶ月未満の子犬は腸管粘膜における能動的調節機構が未発達であり、摂取したカルシウムの45〜50%が受動的傍細胞拡散によって無差別に体内に吸収されます。

過剰なカルシウムが体内に取り込まれると、血中カルシウム濃度が持続的に上昇し、甲状腺C細胞からカルシトニンが過剰分泌され、副甲状腺ホルモン（PTH）が抑制されます。この高カルシトニン血症は破骨細胞による骨吸収を停止させ、成長板の軟骨細胞の正常な骨化プロセスを阻害します。その結果、肥厚した未熟な軟骨が通常の体重負荷に耐えきれずに剥離・亀裂を生じます。

これが離断性骨軟骨炎（OCD）、肥大性骨形成異常症（HOD）、橈骨弯曲症、股関節および肘関節形成不全などの成長期骨関節疾患（DOD）の原因となります。特に大型犬や超大型犬は骨の伸長速度が速いため、関節にかかる物理的負荷が大きく、深刻な歩行障害へと直結します。

AAFCOおよびFEDIAFの栄養基準では、カルシウム・リン比率を1.2:1〜1.4:1の範囲に厳密に保ち、大型犬用では乾物中のカルシウム上限を1.2〜1.6%に制限することを義務付けています。総合栄養食の子犬用フードに、カルシウム粉末や骨粉、チーズなどを追加トッピングすることは極めて危険です。`,
      whatToLookFor: [
        '「子犬用」または「大型犬子犬を含む全成長段階用」と明記されたAAFCO適合表示',
        '分析値としてカルシウム・リン比率が1.2:1〜1.4:1の範囲内にあること（1.1:1未満または1.6:1超は不適合）',
        '大型犬・超大型犬向けフードの場合、カルシウム含有量が乾物ベースで1.0〜1.3%前後に適切に抑制されていること',
        '亜鉛や鉄の吸収を阻害しない、有機キレート化された高吸収ミネラル複合体の配合',
      ],
      redFlags: [
        '子犬用の市販ドッグフードにカルシウムサプリメント、骨粉、卵殻粉末、ヨーグルトを安易に追加すること',
        '精密な栄養計算を行わずに手作り食や生肉を与えること（骨なし肉のCa:P比は1:10以下と極端なカルシウム欠乏を招く）',
        '「全年齢用」と記載されていても大型犬子犬への適合性に関する免責事項が抜けているフード',
        'ビタミンDやビタミンAを高濃度に含む肝油サプリの併用（軟骨形成異常を相乗的に悪化させる）',
      ],
      checklist: [
        'パッケージ裏面の栄養基準表示欄で、子犬の成長基準および大型犬基準を満たしているか確認する',
        '血液検査で獣医師から低カルシウム血症の確定診断を受けない限り、市販のカルシウム剤は絶対に与えない',
        '手作り離乳食や子犬食を作る場合は、必ず獣医臨床栄養学の専門ソフトを用いた計算レシピを使用する',
        '生後4ヶ月および6ヶ月のワクチン・定期健診時に、関節の可動域と歩行チェックを獣医師に依頼する',
      ],
      vetTip: '子犬の飼育における最も危険な誤解は「カルシウムを多く摂らせれば骨が強くなる」という迷信です。子犬にとって過剰なカルシウムは成長中の関節軟骨を破壊する毒となります。適切なバランスのフードには必要な量がすべて含まれており、余計な添加は一生の関節障害を招きます。',
    },
    {
      slug: 'dha-brain-cognitive-development',
      requirementNumber: 3,
      title: 'DHAオメガ3脂肪酸による脳神経・網膜の認知発達',
      shortTag: '脳神経可塑性と網膜視覚機能',
      metricBadge: 'DHA ≥0.05% DM • 海洋性EPA/DHA濃縮',
      desc: 'ドコサヘキサエン酸（DHA）は哺乳類の終脳大脳皮質および網膜視細胞膜に最も豊富に存在する構造脂質です。臨床試験において、生体利用率の高い海洋性DHAを豊富に摂取した子犬は、学習速度、空間記憶力、および網膜電図による視覚明瞭度が顕著に向上することが実証されています。',
      readMore: `子犬の中枢神経系は、妊娠後期から生後16週齢までの間に最も爆発的なシナプス形成と構造的成熟を迎えます。この神経発達のゴールデンタイムにおいて、22炭素鎖の多価不飽和脂肪酸であるドコサヘキサエン酸（DHA, 22:6 n-3）は血液脳関門を選択的に通過し、神経細胞シナプス膜や網膜の杆体視細胞の外節膜へと急速に組み込まれます。大脳灰白質の全構造脂質の30%以上をDHAが占めています。

生体物理学的に、DHAが持つ6つのシス型二重結合は神経細胞膜に卓越した流動性を与えます。この膜流動性によって、受容体のシグナル伝達速度が上がり、神経可塑性が促進され、神経伝達物質の放出が最適化されるため、情報処理速度と記憶の定着率が直接的に向上します。

臨床上極めて重要な点は、犬は植物由来のα-リノレン酸（ALA：亜麻仁油やエゴマ油）からDHAを合成するためのエロンガーゼやΔ6-デサチュラーゼ酵素の活性が極めて低いことです。植物性ALAから体内DHAへの変換効率は1%未満にとどまります。したがって、天然の冷水魚油（サーモン、イワシ、ニシン）や微細藻類から抽出された「既にDHAの形になっている」海洋性オメガ3の直接摂取が生理学的に不可欠です。

海外の主要獣医大学で行われた二重盲検臨床試験では、高DHA食で育った子犬群は、通常食の子犬群に比べてT型迷路テストの正解率が有意に高く、明暗弁別学習を半分以下の試行回数で習得し、服従訓練や社会化トレーニングへの適応力が格段に優れていることが証明されています。`,
      whatToLookFor: [
        '保証成分値に単なるオメガ3ではなく「DHA」として独立した数値（乾物ベース0.05%〜0.10%以上）が明記されていること',
        '原材料欄に天然サーモンオイル、青魚ミール、海洋微細藻類など高品質な海洋性原料が上位に記載されていること',
        '幼少期の健全な関節と皮膚バリア機能をサポートするEPA（エイコサペンタエン酸）の同時配合',
        '繊細な不飽和脂肪酸の酸化を防ぐミックストコフェロール（天然ビタミンE）やローズマリー抽出物の配合',
      ],
      redFlags: [
        'オメガ3配合と謳いながら、亜麻仁や大豆油のみで海洋性DHAが一切含まれていないフード',
        '開封後に高温多湿な場所に長期間放置され、オメガ3脂肪酸が有害な過酸化脂質へと酸化してしまったフード',
        'ビタミンA・Dの過剰症リスクを考慮せずに、成犬用肝油カプセルを子犬に多量投与すること',
        'エトキシキンやBHA・BHTなどの合成酸化防止剤に頼った低品質な魚原料',
      ],
      checklist: [
        '子犬用フードのパッケージ裏面の保証分析値欄で「DHA」の含有量を確認する',
        'ドライフードは密閉容器に入れ冷暗所で保管し、酸化を防ぐため開封後30日以内に使い切る',
        'サーモンオイルサプリメントを添加する場合は遮光ポンプ容器のものを選び、開封後は冷蔵保管する',
        '生後8〜16週の社会化期には、DHAで強化された脳の可塑性を活かして知育トイやポジティブトレーニングを積極的に行う',
      ],
      vetTip: '生後8〜16週の社会化期は、大脳のシナプス密度が一生の中でピークに達する唯一無二の期間です。この時期に海洋性DHAを十分に摂取させることは、生涯にわたる学習能力、環境適応力、情緒の安定性に決定的な好影響をもたらします。',
    },
    {
      slug: 'breed-size-specific-growth-formulas',
      requirementNumber: 4,
      title: '犬種サイズ別（小型・超小型 vs 大型・超大型）の成長速度管理',
      shortTag: '骨格成長速度のコントロールと体積別給餌',
      metricBadge: '小型犬: 8〜10ヶ月 • 大型犬: 18〜24ヶ月成熟',
      desc: '超小型・小型犬は生後8〜10ヶ月で骨格成長を完了するため高密度カロリー（3,800 kcal/kg以上）と小粒設計で低血糖を防ぐ必要があります。一方、大型・超大型犬は最大24ヶ月かけて成長するため、カロリー制限（3,500 kcal/kg以下）により急激な骨伸長を抑え関節を守る必要があります。',
      readMore: `犬という種は、陸生哺乳類の中で最も極端な体格差を持ちます。成犬時体重1.5kgのチワワと80kgのイングリッシュマスティフは、誕生時の体重差こそわずかですが、その成長曲線は完全に異なります。超小型犬は生後8〜10ヶ月で出生体重の約20倍へと急成長して完成するのに対し、超大型犬は18〜24ヶ月という長い歳月をかけて出生体重の70〜100倍にまで達します。

このゴール地点の圧倒的な違いにより、全犬種共通の「ワンサイズ」の子犬用フードを与えることは両極端の犬種にとって深刻な健康被害をもたらします。

チワワやトイプードルなどの小型犬は、体重あたりの代謝率が非常に高く、体表面積が広いため放熱が早く、胃の容量が小さいため一度に多くの量を食べられません。そのため、消化吸収に優れた高カロリー密度（3,800〜4,200 kcal/kg）と、噛み砕きやすい6〜8mmの小粒キブルが必要です。生後9〜10ヶ月で骨格成長がストップするため、そのタイミングでカロリーを調整しないと早期肥満に繋がります。

反対に、ゴールデンレトリバーやラブラドール、グレートデンなどの大型・超大型犬に小型犬用の高カロリーフードを与えると大惨事になります。カロリー過多は骨の急激な伸長を促し、未熟な関節軟骨が急激に増えた体重を支えきれなくなって、股関節形成不全や肘関節異形成の重症化を招きます。大型犬用フードはエネルギー密度（3,300〜3,600 kcal/kg）と脂質（10〜14%）をあえて控えめに抑え、2歳近くまで「緩やかで引き締まった成長」を維持させることが獣医学上の絶対原則です。`,
      whatToLookFor: [
        '「超小型・小型犬用」または「大型犬・超大型犬用（成犬時体重25kg以上想定）」とサイズ別に明確に分かれたフード',
        '体格に適したカロリー設計：小型犬向け3,800〜4,200 kcal/kg、大型犬向け3,300〜3,600 kcal/kg',
        '顎の力と歯の大きさに合わせた粒サイズ：小型犬用6〜8mm、大型犬用12〜15mm',
        '大型犬用には関節軟骨を過度な体重負荷から守るL-カルニチンや適度なコンドロイチン・グルコサミンの配合',
      ],
      redFlags: [
        '大型犬の子犬に「早く大きくなってほしい」と小型犬用の高カロリーフードや高脂肪トッピングを与えること',
        '大型犬の成長を遅らせようとして生後6ヶ月で成犬用フードに切り替え、必須アミノ酸やミネラルを欠乏させること',
        '小型犬の子犬に生後8ヶ月未満で大粒の成犬用フードを与え、低血糖や消化不良を起こさせること',
        '子犬を「コロコロと太っている状態」にすること：未成熟な関節にとって過体重は取り返しのつかない関節変形をもたらす',
      ],
      checklist: [
        '両親の体重または犬種標準から、愛犬の成犬時推定体重をあらかじめ把握しておく',
        '推定成犬体重が25kgを超える場合は、必ず「大型犬子犬用」のAAFCO基準に適合したフードを選択する',
        '肋骨が手のひらで軽く触れ、上から見て腰に適度なくびれがあるボディコンディションスコア（4/9）を厳守する',
        '成犬用フードへの切り替え時期を守る：小型犬は生後9〜10ヶ月、中型犬は生後12ヶ月、大型犬は生後18〜24ヶ月',
      ],
      vetTip: '大型犬の子犬は「小型犬を大きくした生き物」ではありません。代謝のスピードも骨関節のリスクも全く別物です。大型犬の子犬を急いで大きくしようとしないでください。18〜24ヶ月かけてゆっくりと骨格を成熟させることが、一生涯にわたって健康に走り続けられる強い骨と関節をつくります。',
    },
  ],
  fr: [
    {
      slug: 'high-metabolic-burn-feeding-frequency',
      requirementNumber: 1,
      title: 'Métabolisme Énergétique Élevé et Rythme des Repas',
      shortTag: 'Cinétique Énergétique et Contrôle Glycémique',
      metricBadge: '2 à 3× le RER Adulte • 3 à 4 Repas Quotidiens',
      desc: 'Les jeunes chiots (2–4 mois) brûlent jusqu’à trois fois le métabolisme de base d’un adulte par kilo en raison d’une division cellulaire intense et d’une déperdition thermique rapide. Fractionner l’alimentation en 3 à 4 repas digestes prévient l’hypoglycémie aiguë, la saturation enzymatique et la dilatation gastrique.',
      readMore: `Durant la fenêtre initiale de croissance postnatale (de la 8e à la 16e semaine), la vitesse métabolique canine atteint des niveaux incomparables avec l'âge adulte. Un chiot en pleine croissance doit assurer une synthèse protéique vertigineuse, le dépôt continu de trame osseuse et une thermorégulation active. En raison d'un rapport surface corporelle/poids très élevé, les chiots perdent rapidement leur chaleur, ce qui élève leur dépense calorique basale à 2,5 voire 3,0 fois le Besoin Énergétique de Repos adulte (BER = 70 × [kg]^0,75).

Cependant, leur capacité stomacale anatomique reste très réduite. Surcharger le tube digestif d'un chiot avec un ou deux repas volumineux provoque une dilatation gastrique, des diarrhées osmotiques par saturation des sucs digestifs et un ralentissement du transit. Les sécrétions pancréatiques d'amylase et de lipase étant encore en cours de maturation, des repas réguliers et modérés garantissent une hydrolyse complète des nutriments.

De plus, les chiots de petite race âgés de moins de 16 semaines possèdent de très faibles réserves de glycogène hépatique et une néoglucogenèse immature. Tout jeûne diurne dépassant 6 à 8 heures peut provoquer une chute brutale de la glycémie sanguine, entraînant hypothermie, démarche chancelante, léthargie et convulsions hypoglycémiques.

Le protocole pédiatrique vétérinaire recommande : 4 repas par jour du sevrage jusqu'à 16 semaines ; 3 repas quotidiens de 4 à 6 mois ; puis une transition vers 2 repas journaliers dès que le chiot atteint 50 % à 75 % de son poids adulte estimé. Les rations doivent être ajustées tous les 7 à 10 jours.`,
      whatToLookFor: [
        'Densité énergétique supérieure à 3 800 kcal EM/kg pour les petites races afin d’apporter les calories sans saturer l’estomac',
        'Protéines animales de haute valeur biologique (≥28 % à 32 % sur matière sèche) et au moins 18 % de matières grasses digestibles',
        'Fractionnement strict : 4 repas quotidiens jusqu’à 16 semaines, puis 3 repas jusqu’à 6 mois d’âge',
        'Pesées hebdomadaires sur balance précise avec réajustement des grammes pour un gain pondéral régulier sans masse grasse excessive',
      ],
      redFlags: [
        'Nourrir un chiot de moins de 5 mois seulement 1 ou 2 fois par jour, risquant crises d’hypoglycémie et vomissements bilieux',
        'Le libre-service permanent (ad libitum), responsable de surconsommation calorique et de croissance osseuse anarchique',
        'Donner un aliment d’entretien pour adulte peu calorique (inférieur à 3 500 kcal/kg) inadapté aux besoins de croissance',
        'Faire courir intensément un chiot immédiatement après son repas, augmentant le risque de torsion d’estomac',
      ],
      checklist: [
        'Diviser la ration journalière en 3 ou 4 portions égales distribuées à intervalles réguliers de 4 à 5 heures',
        'Peser le chiot tous les 7 jours et ajuster la ration pour maintenir un état corporel optimal (note de 4/9 à 5/9)',
        'Laisser de l’eau fraîche en permanence, en la retirant 2 heures avant le coucher pour faciliter l’apprentissage de la propreté',
        'Avoir du miel ou du sirop adapté à portée de main pour frictionner les gencives des chiots miniatures en cas de coup de fatigue',
      ],
      vetTip: 'Ne laissez jamais un chiot s’engraisser au point que ses côtes deviennent introuvables au toucher. Conserver une silhouette svelte (note de 4 sur 9) pendant toute la croissance réduit de plus de 45 % le risque d’arthrose à l’âge adulte et prolonge l’espérance de vie jusqu’à 1,8 an.',
    },
    {
      slug: 'calcium-phosphorus-ratio-skeletal-growth',
      requirementNumber: 2,
      title: 'Ratio Calcium/Phosphore (Ca:P) et Croissance Squelettique',
      shortTag: 'Minéralisation et Préservation Articulaire',
      metricBadge: 'Ca:P 1.2:1–1.4:1 • Plafond 1.2%–1.6% MS',
      desc: 'Les chiots de moins de 6 mois ne régulent pas l’absorption intestinale du calcium et assimilent passivement la quasi-totalité du minéral ingéré. Un ratio Calcium/Phosphore strictement calibré (1.2:1 à 1.4:1) avec des limites maximales est obligatoire pour prévenir l’ostéochondrite disséquante et la dysplasie.',
      readMore: `L'homéostasie calcique chez le chiot diffère profondément de celle du chien adulte. Alors que l'adulte régule activement l'absorption transcellulaire du calcium intestinal pour éliminer les excès, le chiot de moins de 6 mois absorbe le calcium alimentaire de manière passive par diffusion paracellulaire. Il assimile ainsi sans discernement 45 % à 50 % de tout le calcium présent dans sa lumière digestive.

Un apport excessif en calcium entraîne une élévation anormale de la calcémie, stimulant la libération permanente de calcitonine thyroïdienne et bloquant la parathormone (PTH). Cette hypercalcitonémie bloque le remodelage osseux normal et retarde l'ossification endochondrale du cartilage de croissance. Le cartilage s'épaissit de façon anormale, devient fragile et finit par se fissurer sous les contraintes mécaniques quotidiennes.

Ce phénomène engendre les affections ostéoarticulaires du développement (AOD), telles que l'ostéochondrite disséquante (OCD), l'ostéodystrophie hypertrophique (HOD) et aggrave considérablement la dysplasie des hanches et des coudes. Les chiots de grande race y sont particulièrement exposés en raison du poids important exercé sur leurs cartilages en pleine élongation.

Les normes de la FEDIAF et de l'AAFCO imposent un ratio Ca:P rigoureusement borné entre 1.2:1 et 1.4:1, avec une teneur maximale en calcium de 1.2 % à 1.6 % sur matière sèche pour les grandes races. Il est formellement contre-indiqué d'ajouter de la poudre d'os, des coquilles d'œufs ou du fromage blanc à un aliment de croissance complet.`,
      whatToLookFor: [
        'Mention de conformité nutritionnelle AAFCO ou FEDIAF spécifique pour chiots ou grandes races en croissance',
        'Ratio Calcium/Phosphore analytique vérifié entre 1.2:1 et 1.4:1 (jamais inférieur à 1.1:1 ni supérieur à 1.6:1)',
        'Taux absolu de calcium rigoureusement contenu entre 1.0 % et 1.3 % de la matière sèche pour les grands chiots',
        'Minéraux chélatés hautement biodisponibles pour une assimilation équilibrée sans carence induite en zinc ou magnésium',
      ],
      redFlags: [
        'Ajouter des comprimés de calcium, de la farine d’os ou des laitages à des croquettes pour chiots déjà équilibrées',
        'Nourrir au fait maison ou au BARF sans pesée millimétrée ni complément calcique dosé (la viande pure a un ratio Ca:P désastreux de 1:10)',
        'Utiliser des aliments "tous stades de vie" qui ne mentionnent pas expressément la conformité pour chiots de grande race',
        'Associer des mégadoses de vitamines D ou A, qui potentialisent la toxicité du calcium sur les cartilages articulaires',
      ],
      checklist: [
        'Lire attentivement l’étiquette au dos du paquet pour vérifier la conformité aux besoins minéraux des chiots',
        'Refuser tout complément calcique sans diagnostic vétérinaire formel d’hypocalcémie confirmé par analyse sanguine',
        'En cas de ration ménagère, faire impérativement valider la recette par un vétérinaire nutritionniste',
        'Faire évaluer la démarche et la souplesse articulaire lors des visites vaccinales des 4 et 6 mois',
      ],
      vetTip: 'L’idée reçue la plus toxique en élevage canin est de croire que "plus de calcium renforce les os". Chez le chiot, l’excès de calcium est un poison direct pour les cartilages articulaires. Une alimentation de croissance contient tout le calcium nécessaire ; en rajouter condamne les articulations de votre chien.',
    },
    {
      slug: 'dha-brain-cognitive-development',
      requirementNumber: 3,
      title: 'Acides Gras Oméga-3 DHA pour le Cerveau et la Rétine',
      shortTag: 'Neurologie et Acuité Photoréceptrice',
      metricBadge: 'DHA ≥0.05% MS • Huile Marine Purifiée EPA/DHA',
      desc: 'L’acide docosahexaénoïque (DHA) est le principal phospholipide structurel du cortex cérébral et des membranes rétiniennes. Les essais cliniques démontrent que les chiots nourris avec du DHA marin biodisponible développent une meilleure mémoire spatiale, une acuité visuelle accrue et une plus grande facilité d’apprentissage.',
      readMore: `Le système nerveux central du chiot traverse sa phase d'expansion la plus décisive entre la gestation tardive et l'âge de 16 semaines. Durant cette poussée neurogénique, l'acide docosahexaénoïque (DHA, 22:6 n-3)—un acide gras oméga-3 polyinsaturé à 22 atomes de carbone—traverse activement la barrière hémato-encéphalique pour s'incorporer dans les synapses neuronales et les photorécepteurs rétiniens. Le DHA représente plus de 30 % des lipides structurels de la substance grise cérébrale.

Sur le plan biophysique, la structure fluide du DHA confère une souplesse remarquable aux membranes neuronales. Cette fluidité membranaire accélère la transmission des signaux, optimise la plasticité synaptique et facilite la libération des neurotransmetteurs, améliorant directement la vitesse de traitement de l'information et l'apprentissage.

Chez le chien, l'organisme ne possède quasiment pas les enzymes indispensables (élongases et delta-6 désaturases) pour convertir l'acide alpha-linolénique végétal (ALA contenu dans le lin ou le colza) en DHA actif. Moins de 1 % de l'ALA végétal est transformé en DHA dans l'organisme canin. L'apport d'un DHA préformé d'origine marine (huile de saumon sauvage, petits poissons pélagiques ou microalgues marines) est donc physiologiquement indispensable.

Des essais cliniques vétérinaires en double aveugle ont démontré que les chiots recevant une alimentation enrichie en DHA marin apprenaient les ordres d'obéissance beaucoup plus rapidement, réussissaient des tests de mémorisation spatiale en labyrinthe avec deux fois moins d'erreurs et présentaient une acuité visuelle rétinienne supérieure.`,
      whatToLookFor: [
        'Garantie analytique indiquant explicitement le pourcentage de DHA (au minimum 0.05 % à 0.10 % sur matière sèche)',
        'Présence d’huiles marines de haute qualité : huile de saumon sauvage, farine de poissons gras ou microalgues marines',
        'Apport conjoint en EPA (acide eicosapentaénoïque) pour moduler l’inflammation et préserver les articulations juvéniles',
        'Antioxydants naturels (tocophérols mixtes, extrait de romarin) pour empêcher l’oxydation des oméga-3 en peroxydes toxiques',
      ],
      redFlags: [
        'Aliments vantant un enrichissement en oméga-3 mais ne contenant que des graines de lin ou de tournesol, sans aucun DHA marin',
        'Sacs de croquettes stockés ouverts dans des locaux chauds, où l’oxygène rancit rapidement les acides gras précieux',
        'Donner de l’huile de foie de morue sans calcul préalable, risquant une intoxication sévère aux vitamines A et D',
        'Graisses ou farines animales génériques stabilisées avec des conservateurs de synthèse comme l’éthoxyquine ou le BHA',
      ],
      checklist: [
        'Vérifier que la ligne "DHA" figure distinctement dans les constituants analytiques et pas seulement un taux global d’oméga-3',
        'Conserver le sac d’origine hermétiquement fermé dans un endroit frais et le consommer dans les 30 jours après ouverture',
        'Si vous ajoutez de l’huile de saumon liquide, privilégier un flacon pompe opaque et le conserver au réfrigérateur',
        'Mettre à profit la période de 8 à 16 semaines pour stimuler le chiot avec des séances de jeu éducatif et de renforcement positif',
      ],
      vetTip: 'La période de socialisation entre 8 et 16 semaines est le seul moment de la vie où la densité synaptique cérébrale culmine. Fournir du DHA marin pendant ces semaines clés crée des bénéfices cognitifs permanents sur la stabilité émotionnelle et l’obéissance qui persisteront toute sa vie.',
    },
    {
      slug: 'breed-size-specific-growth-formulas',
      requirementNumber: 4,
      title: 'Formules par Taille de Race et Modulation de la Croissance',
      shortTag: 'Gabarit Racial et Prévention Orthopédique',
      metricBadge: 'Toy: 8–10 Mois • Géant: 18–24 Mois de Maturité',
      desc: 'Les chiots de petite race terminent leur croissance à 8–10 mois et ont besoin d’une forte densité calorique (≥3 800 kcal/kg) et de mini-croquettes pour éviter l’hypoglycémie. À l’inverse, les chiots de grande race grandissent jusqu’à 24 mois et nécessitent un apport énergétique modéré (≤3 500 kcal/kg) pour ralentir la pousse osseuse et protéger leurs articulations.',
      readMore: `L'espèce canine présente la disparité morphologique la plus extrême du règne des mammifères terrestres. Un Chihuahua adulte de 2 kg et un Terre-Neuve adulte de 70 kg débutent leur vie avec des masses néonatales comparables, mais leurs trajectoires de croissance divergent totalement. Un chiot miniature multiplie son poids de naissance par 20 en 8 à 10 mois, alors qu'un chiot géant le multiplie par 80 à 100 au cours d'une longue croissance de 18 à 24 mois.

Face à des impératifs biologiques aussi opposés, nourrir avec un aliment universel pour chiot expose à de graves désordres pédiatriques.

Les chiots de petite taille possèdent un métabolisme très rapide par unité de masse corporelle, perdent facilement leur chaleur et disposent d'un estomac minuscule. Ils réclament un aliment très dense en énergie (3 800 à 4 200 kcal/kg), hautement digestible et façonné en croquettes de 6 à 8 mm pour éviter les fausses routes. Leur croissance s'achève vers 9-10 mois, moment où l'apport énergétique doit être réduit pour éviter une prise de poids précoce.

À l'autre extrême, les chiots de grande race subissent de graves lésions s'ils reçoivent des croquettes trop riches. L'excès calorique provoque une élongation osseuse trop rapide : le squelette grandit plus vite que les ligaments et les tendons, provoquant de la dysplasie de hanche et de l'incongruence articulaire. Les aliments pour grands chiots doivent volontairement limiter la densité énergétique (3 300 à 3 600 kcal/kg) et modérer les matières grasses (10 % à 14 %) afin de garantir une croissance lente et contrôlée jusqu'à 2 ans.`,
      whatToLookFor: [
        'Aliments segmentés par gabarit : "Chiot Petite Race" vs "Chiot Grande Race" (poids adulte estimé supérieur à 25 kg)',
        'Densité calorique ajustée : 3 800–4 200 kcal/kg pour les petits chiots ; 3 300–3 600 kcal/kg pour les grands chiots',
        'Taille de croquette adaptée à la mâchoire : granulés de 6–8 mm pour petites races ; croquettes de 12–15 mm pour grands gabarits',
        'Teneur modérée en lipides (12 %–15 %) enrichie en L-carnitine pour soutenir une masse musculaire dense sans surcharge pondérale',
      ],
      redFlags: [
        'Donner un aliment riche pour petit chiot à un chiot Berger Allemand, Boxer ou Golden Retriever',
        'Passer un chiot de grande race à un aliment adulte dès 6 mois pour "ralentir sa croissance", créant ainsi de graves carences protéiques',
        'Passer un chiot miniature à l’alimentation adulte avant 8 mois, risquant des malaises hypoglycémiques',
        'Vouloir un chiot "bien dodu" : le surpoids sur des cartilages immatures crée des traumatismes articulaires irréversibles',
      ],
      checklist: [
        'Estimer le poids adulte cible d’après les géniteurs ou les standards de la race',
        'Choisir un aliment conforme aux normes AAFCO/FEDIAF adaptées au gabarit de votre chiot',
        'Maintenir une note d’état corporel de 4 à 5 sur 9 : les côtes doivent être palpables sous une légère pression',
        'Garder l’aliment chiot jusqu’à 9–10 mois pour les petites races, 12 mois pour les races moyennes et 18–24 mois pour les grands chiens',
      ],
      vetTip: 'Un chiot de grande race n’est pas un petit chiot en grand format : son métabolisme et sa vulnérabilité squelettique sont totalement différents. Ne pressez jamais la croissance d’un grand chiot. Un développement progressif sur 18 à 24 mois est la seule garantie d’articulations solides et durables pour toute sa vie.',
    },
  ],
  de: [
    {
      slug: 'high-metabolic-burn-feeding-frequency',
      requirementNumber: 1,
      title: 'Hoher Grundumsatz & Mahlzeitenfrequenz im Wachstum',
      shortTag: 'Energiekinetik und Blutzuckerkontrolle',
      metricBadge: '2–3× Adulter RER • 3–4 Mahlzeiten Täglich',
      desc: 'Junge Welpen (2–4 Monate) verbrennen pro Kilogramm bis zum Dreifachen des adulten Erhaltungsstoffwechsels durch rasante Zellteilung und Wärmeverlust. Die Aufteilung auf 3 bis 4 nährstoffdichte Portionen verhindert lebensbedrohliche Hypoglykämien, Verdauungsüberlastung und Magendehnungen.',
      readMore: `In den ersten Lebenswochen nach dem Absetzen (Woche 8 bis 16) erreicht der canine Stoffwechsel Höchstwerte, die im späteren Hundeleben nie wieder auftreten. Ein heranwachsender Welpe benötigt enorme Mengen an Energie für die Proteinneubildung, Knochenmineralisation und Thermoregulation. Da das Verhältnis von Körperoberfläche zu Körpergewicht sehr ungünstig ist, verlieren Welpen schnell Wärme, wodurch ihr Grundumsatz auf das 2,5- bis 3,0-Fache des adulten Ruheenergiebedarfs (RER = 70 × [kg]^0,75) ansteigt.

Allerdings ist das Magenvolumen eines Welpen winzig. Wird der Verdauungstrakt mit nur einer oder zwei großen Mahlzeiten überfordert, führt dies zu Magendilatation, osmotischer Diarrhö durch Überlastung der Verdauungsenzyme und gestörter Nährstoffaufnahme. Die Enzymproduktion von Lipase und Amylase in der Bauchspeicheldrüse reift noch heran; mehrere moderate Mahlzeiten gewährleisten eine vollständige Aufspaltung ohne Fehlgärungen.

Besonders Zwerg- und Kleinrassen unter 16 Wochen verfügen über minimale Glykogenspeicher in der Leber und unvollständige Gluconeogenese-Mechanismen. Fastenzeiten von mehr als 6 bis 8 Stunden tagsüber können zu einem lebensgefährlichen Blutzuckerabfall (Hypoglykämie) mit Lethargie, Zittern, Ataxie und Krämpfen führen.

Das tiermedizinische Fütterungsprotokoll sieht folgende Staffelung vor: 4 Mahlzeiten täglich bis zur 16. Woche; 3 Mahlzeiten von 4 bis 6 Monaten; und der Übergang zu 2 Mahlzeiten, sobald der Hund 50 % bis 75 % seines adulten Zielgewichts erreicht hat. Die Futtermenge sollte alle 7 bis 10 Tage neu berechnet werden.`,
      whatToLookFor: [
        'Energiedichte über 3.800 kcal ME/kg für Zwerg- und Kleinrassen zur ausreichenden Kalorienzufuhr ohne Magenüberfüllung',
        'Hochwertiges tierisches Protein (mindestens 28 % bis 32 % in der Trockenmasse) und mindestens 18 % hochverdauliches Fett',
        'Feste Mahlzeitenfrequenz: 4 Mahlzeiten täglich bis 16 Wochen, 3 Mahlzeiten täglich bis zum 6. Monat',
        'Wöchentliches Wiegen auf digitaler Waage mit kontinuierlicher Anpassung der Grammportionen an die Gewichtskurve',
      ],
      redFlags: [
        'Welpen unter 5 Monaten nur 1- oder 2-mal täglich zu füttern, was Hypoglykämien und Nüchternerbrechen provoziert',
        'Ad-libitum-Fütterung (Futternapf steht ganztägig voll): führt zu unkontrollierter Kalorienaufnahme und Knochenschäden',
        'Verwendung von Adult-Futter mit zu geringer Energiedichte (unter 3.500 kcal/kg), das Wachstumsdefizite verursacht',
        'Wildes Toben unmittelbar nach dem Fressen, was das Risiko für Magendrehungen drastisch erhöht',
      ],
      checklist: [
        'Die Tagesration in 3 bis 4 gleichmäßige Portionen im Abstand von 4 bis 5 Stunden aufteilen',
        'Den Welpen alle 7 Tage wiegen und die Futtermenge so justieren, dass der Body Condition Score bei schlanken 4/9 bis 5/9 bleibt',
        'Frisches Wasser ganztägig bereitstellen, aber 2 Stunden vor der Nachtruhe hochstellen, um die Stubenreinheit zu erleichtern',
        'Bei Minirassen stets etwas Honig oder Traubenzuckerlösung bereitstellen, um im Falle von Unterzuckerung das Zahnfleisch zu bestreichen',
      ],
      vetTip: 'Füttern Sie einen Welpen niemals so dick, dass die Rippen nicht mehr leicht ertastbar sind. Eine schlanke Linie (BCS 4 von 9) während der gesamten Wachstumsphase senkt das Risiko für spätere Arthrose um über 45 % und verlängert die gesunde Lebensspanne um bis zu 1,8 Jahre.',
    },
    {
      slug: 'calcium-phosphorus-ratio-skeletal-growth',
      requirementNumber: 2,
      title: 'Kalzium-Phosphor-Verhältnis (Ca:P) & Skelettwachstum',
      shortTag: 'Knochendichte und Gelenkschutz',
      metricBadge: 'Ca:P 1.2:1–1.4:1 • Max. 1.2%–1.6% TS',
      desc: 'Welpen unter 6 Monaten können die Kalziumaufnahme im Darm nicht regulieren und absorbieren fast das gesamte Kalzium passiv. Ein strikt ausbalanciertes Kalzium-Phosphor-Verhältnis (1.2:1 bis 1.4:1) mit strengen Obergrenzen ist zwingend erforderlich, um Osteochondrosis dissecans und Hüftdysplasie zu verhindern.',
      readMore: `Die Kalziumhomöostase beim Welpen unterscheidet sich grundlegend von der des erwachsenen Hundes. Ausgewachsene Hunde verfügen über aktive zelluläre Transportmechanismen, die die Kalziumresorption drosseln, sobald das Angebot die Bedarfsmenge übersteigt. Welpen unter 6 Monaten hingegen absorbieren Kalzium fast ausschließlich über passive Diffusion durch die Darmschleimhaut – sie nehmen 45 % bis 50 % des gesamten enthaltenen Kalziums unkontrolliert ins Blut auf.

Ein Kalziumüberschuss führt zu dauerhaft erhöhten Serumspiegeln, was die Ausschüttung von Calcitonin aus der Schilddrüse stimuliert und das Parathormon (PTH) unterdrückt. Dieser Zustand hemmt den normalen Knochenumbau und verzögert die enchondrale Ossifikation des wachsenden Gelenkknorpels. Der Knorpel verdickt sich krankhaft, wird minderwertig durchblutet und reißt unter der mechanischen Belastung des Welpenkörpers ein.

Dies führt zu schweren Entwicklungsstörungen des Skeletts (DOD), darunter Osteochondrosis Dissecans (OCD), Hypertrophe Osteodystrophie (HOD) sowie schwere Fehlstellungen, die Hüftdysplasie (HD) und Ellbogendysplasie (ED) dramatisch beschleunigen. Besonders anfällig sind Welpen großer und riesiger Rassen aufgrund ihrer schnellen Längenwachstumskurven.

AAFCO und FEDIAF schreiben ein striktes Ca:P-Verhältnis zwischen 1.2:1 und 1.4:1 sowie eine Kalzium-Obergrenze von 1.2 % bis 1.6 % in der Trockenmasse für Großrassen vor. Die Zugabe von Knochenmehl, Eierschalenpulver oder Quark zu einem Alleinfutter ist tiermedizinisch streng kontraindiziert.`,
      whatToLookFor: [
        'Zertifizierter AAFCO- oder FEDIAF-Nachweis explizit für Welpen im Wachstum bzw. Großrassenwelpen',
        'Analytisches Ca:P-Verhältnis zwischen 1.2:1 und 1.4:1 (keinesfalls unter 1.1:1 oder über 1.6:1)',
        'Absoluter Kalziumgehalt bei großen Rassen streng auf 1.0 % bis 1.3 % in der Trockensubstanz limitiert',
        'Chelatierte, organisch gebundene Mineralstoffe für eine harmonische Aufnahme ohne Verdrängung von Zink oder Magnesium',
      ],
      redFlags: [
        'Gabe von Kalziumtabletten, Knochenmehl, Eierschalenpulver oder Milchprodukten zu fertigem Welpenfutter',
        'Fütterung von unberechneten Barf- oder Selberkoch-Rationen (reines Muskelfleisch hat ein verheerendes Ca:P-Verhältnis von 1:10)',
        'Verwendung von "All Life Stages"-Futter ohne ausdrückliche Freigabe für das Wachstum von Großrassenwelpen',
        'Zusätzliche hochdosierte Gabe von Vitamin D oder A, was die Knorpeltoxizität des Kalziums potenziert',
      ],
      checklist: [
        'Prüfen Sie auf der Rückseite der Futterpackung den deklarierten Kalzium- und Phosphorgehalt',
        'Verzichten Sie auf jegliche frei verkäuflichen Mineralpulver ohne labordiagnostizierten Mangelbefund',
        'Lassen Sie selbst zusammengestellte Rationen stets von einem Fachtierarzt für Tierernährung mit Software berechnen',
        'Bitten Sie bei den Routineuntersuchungen mit 16 Wochen und 6 Monaten um eine Gelenk- und Gangbildprüfung',
      ],
      vetTip: 'Der gefährlichste Irrglaube in der Welpenaufzucht lautet: „Zusätzliches Kalzium macht starke Knochen.“ Bei Welpen zerstört Kalziumüberschuss den wachsenden Gelenkknorpel. Ein gutes Welpenfutter liefert jedes Milligramm Kalzium, das nötig ist – Zusätze zerstören dieses Gleichgewicht und schädigen die Gelenke fürs Leben.',
    },
    {
      slug: 'dha-brain-cognitive-development',
      requirementNumber: 3,
      title: 'DHA-Omega-3-Fettsäuren für Gehirn- & Netzhautentwicklung',
      shortTag: 'Neurologie und Photorezeptor-Funktion',
      metricBadge: 'DHA ≥0.05% TS • Kaltwasser-Fischöl EPA/DHA',
      desc: 'Docosahexaensäure (DHA) ist das dominierende strukturelle Phospholipid im Großhirnkortex und in den Photorezeptorzellen der Netzhaut. Klinische Studien belegen, dass Welpen mit bioverfügbarem marine-basiertem DHA signifikant höhere Trainingserfolge, besseres räumliches Gedächtnis und schärfere Sehkraft entwickeln.',
      readMore: `Das zentrale Nervensystem eines Welpen erfährt zwischen der späten Trächtigkeit und der 16. Lebenswoche seinen entscheidenden Entwicklungsschub. In dieser sensiblen Phase wird Docosahexaensäure (DHA, 22:6 n-3) – eine 22 Kohlenstoffatome lange Omega-3-Fettsäure – gezielt über die Blut-Hirn-Schranke transportiert und in synaptische Plasmamembranen sowie die Stäbchenzellen der Netzhaut eingebaut. DHA macht über 30 % der gesamten Strukturfette in der grauen Substanz des Gehirns aus.

Auf biophysikalischer Ebene verleihen die sechs Doppelbindungen von DHA der neuronalen Zellmembran eine außergewöhnliche Fluidität. Diese Membranfluidität beschleunigt die Weiterleitung von Nervenimpulsen, fördert die synaptische Plastizität und optimiert die Ausschüttung von Neurotransmittern. Dies schlägt sich direkt in einer höheren Auffassungsgabe und stabileren Gedächtnisleistung nieder.

Klinisch entscheidend: Hunde besitzen kaum Enzymaktivität von Delta-6-Desaturase und Elongase, um pflanzliche Alpha-Linolensäure (ALA aus Leinsamen oder Rapsöl) in aktives DHA umzuwandeln. Weniger als 1 % des pflanzlichen ALA wird im Hundekörper zu DHA synthetisiert. Vorgeformtes marines DHA aus Wildlachsöl, Sardinenöl oder Meeres-Mikroalgen ist daher biologisch unverzichtbar.

In veterinärmedizinischen Doppelblindstudien zeigten mit marinem DHA versorgte Welpen eine deutlich überlegene visuelle Kontrastempfindlichkeit, lernten Orientierungsaufgaben im Labyrinth in wesentlich weniger Versuchen und zeigten schnellere Lernerfolge bei der Grunderziehung und Stubenreinheit.`,
      whatToLookFor: [
        'Analytische Deklaration mit gesondert ausgewiesenem DHA-Gehalt (mindestens 0.05 % bis 0.10 % in der Trockenmasse)',
        'Hochwertige marine Quellen im Zutatenverzeichnis: Wildlachsöl, Seefischmehl oder Schizochytrium-Mikroalgen',
        'Begleitendes EPA (Eicosapentaensäure) zur Regulierung von Entzündungsprozessen und Schutz jugendlicher Gelenke',
        'Natürliche Antioxidantien (gemischte Tocopherole, Rosmarinextrakt) zum Schutz der empfindlichen Fettsäuren vor Ranzigwerden',
      ],
      redFlags: [
        'Futter, das mit Omega-3 wirbt, aber ausschließlich Leinöl oder Chiasamen ohne jegliches marines DHA enthält',
        'Offene Futtersäcke, die in warmen Garagen stehen, wo Sauerstoff und Hitze die Fettsäuren in schädliche Peroxide zersetzen',
        'Dorschlebertran-Dosierung ohne Vorberechnung, was zu gefährlichen Überdosierungen von Vitamin A und D führt',
        'Minderwertiges Fischmehl, das mit synthetischen Konservierungsstoffen wie Ethoxyquin oder BHA konserviert wurde',
      ],
      checklist: [
        'Überprüfen Sie die Nährwertanalyse auf einen eigenständigen Wert für "DHA" statt nur einer Pauschalangabe für "Omega-3"',
        'Den geöffneten Futtersack stets luftdicht verschlossen an einem kühlen Ort lagern und binnen 30 Tagen verbrauchen',
        'Bei Zugabe von flüssigem Lachsöl lichtundurchlässige Pumpspender wählen und die Flasche im Kühlschrank aufbewahren',
        'Nutzen Sie die Sozialisierungsphase (8. bis 16. Woche) für spielerische Intelligenzspiele und positives Training',
      ],
      vetTip: 'Die Sozialisierungsphase von der 8. bis zur 16. Woche ist der einzige Zeitraum im Hundeleben, in dem die Synapsendichte im Vorderhirn ihren Höhepunkt erreicht. Die Versorgung mit marinem DHA in diesen entscheidenden Wochen schafft dauerhafte kognitive Vorteile bei Lernvermögen und Stressresistenz fürs ganze Leben.',
    },
    {
      slug: 'breed-size-specific-growth-formulas',
      requirementNumber: 4,
      title: 'Rassespezifische Wachstumsraten & Energiedichte (Klein vs. Groß)',
      shortTag: 'Größenspezifische Wachstumssteuerung',
      metricBadge: 'Toy: 8–10 Monate • Riesen: 18–24 Monate Ausgewachsen',
      desc: 'Zwerg- und Kleinrassen schließen ihr Skelettwachstum bereits mit 8 bis 10 Monaten ab und benötigen hohe Energiedichte (≥3.800 kcal/kg) sowie Minikroketten gegen Unterzuckerung. Welpen großer Rassen wachsen hingegen bis zu 24 Monate und benötigen moderaten Energiegehalt (≤3.500 kcal/kg), um das Knochenwachstum zu bremsen und Gelenke zu schonen.',
      readMore: `Die Spezies Hund weist die größte morphologische Vielfalt aller Landsäugetiere auf. Ein ausgewachsener Chihuahua mit 2 kg und ein Mastiff mit 80 kg starten ihr Leben mit erstaunlich ähnlichen Geburtsgewichten, doch ihre Wachstumskurven verlaufen völlig unterschiedlich. Ein Zwerghund vervielfacht sein Geburtsgewicht in 8 bis 10 Monaten etwa um das 20-Fache, während ein Riesenrassehund sein Geburtsgewicht über 18 bis 24 Monate um das 80- bis 100-Fache steigert.

Ein Einheitsfutter für alle Welpengrößen birgt daher an beiden Enden der Skala gravierende gesundheitliche Gefahren.

Welpen kleiner Rassen besitzen einen enormen Stoffwechselumsatz pro Gramm Körpergewicht, verlieren rasch Körperwärme und haben winzige Mägen. Sie benötigen energiereiches Futter (3.800 bis 4.200 kcal/kg), konzentriertes Protein und Krokettengrößen von 6 bis 8 mm, um Erstickungsgefahren zu vermeiden. Ihr Wachstum endet bereits mit 9 bis 10 Monaten, weshalb die Energiezufuhr dann rechtzeitig reduziert werden muss, um Übergewicht zu verhindern.

Bei großen und riesigen Rassen führt energiereiches Futter hingegen zu fatalen Gelenkschäden. Ein Kalorienüberschuss beschleunigt das Längenwachstum der Röhrenknochen. Wenn die Knochen schneller wachsen als die Bänder und Sehnen stützen können, entstehen Gelenkinkongruenzen, Hüft- und Ellbogendysplasie. Futter für Großrassen muss bewusst energie- (3.300 bis 3.600 kcal/kg) und fettreduziert (10 % bis 14 %) sein, um ein langsames, stabiles Wachstum bis zum Alter von 2 Jahren zu gewährleisten.`,
      whatToLookFor: [
        'Eindeutige Rassegrößen-Differenzierung: "Puppy Small" vs. "Puppy Large/Giant" (Zielgewicht über 25 kg)',
        'Passgenaue Energiedichte: 3.800–4.200 kcal/kg für Minirassen; 3.300–3.600 kcal/kg für Großrassen',
        'Krokettengröße passend zur Kieferanatomie: 6–8 mm Mikrokroketten für Kleinrassen; 12–15 mm für Großrassen',
        'Moderater Fettgehalt (12 %–15 %) mit L-Carnitin bei großen Rassen zum Aufbau fettfreier Muskelmasse',
      ],
      redFlags: [
        'Fütterung von hochenergetischem Kleinrassenfutter an Welpen von Deutschem Schäferhund, Labrador oder Deutscher Dogge',
        'Großrassenwelpen schon mit 6 Monaten auf Adultfutter umzustellen, um das Wachstum zu bremsen (führt zu Aminosäuremängeln)',
        'Zwergrassenwelpen vor dem 8. Monat auf Adult-Kroketten umzustellen, was Unterzuckerung riskiert',
        'Einen Welpen „mollig“ zu füttern; jedes Gramm Übergewicht auf unreifem Knorpelgewebe schädigt die Gelenke irreversibel',
      ],
      checklist: [
        'Ermitteln Sie das zu erwartende Endgewicht anhand der Elterntiere oder des Rassestandards',
        'Wählen Sie ein Futter, dessen AAFCO/FEDIAF-Eignung exakt zur Endgewichtsklasse Ihres Hundes passt',
        'Halten Sie Ihren Welpen schlank auf einem Body Condition Score von 4 bis 5 von 9 – Rippen müssen leicht fühlbar sein',
        'Füttern Sie Welpenfutter bei Kleinrassen 9–10 Monate, bei mittleren Rassen 12 Monate und bei Großrassen 18–24 Monate lang',
      ],
      vetTip: 'Ein Großrassenwelpe ist kein vergrößerter Kleinrassenwelpe – seine Stoffwechselkinetik und Skelettrisiken sind völlig verschieden. Forcieren Sie niemals das Wachstum eines großen Welpen. Eine langsame, stetige Entwicklung über 18 bis 24 Monate ist der beste Garant für gesunde Hüften und schmerzfreie Gelenke im Alter.',
    },
  ],
  pt: [
    {
      slug: 'high-metabolic-burn-feeding-frequency',
      requirementNumber: 1,
      title: 'Alta Taxa Metabólica e Fracionamento de Refeições',
      shortTag: 'Cinética Energética e Controle Glicêmico',
      metricBadge: '2 a 3× o RER Adulto • 3 a 4 Refeições Diárias',
      desc: 'Filhotes jovens (2–4 meses) queimam até três vezes mais calorias por quilo que um adulto devido à divisão celular acelerada e rápida perda de calor. Fracionar a dieta em 3 a 4 refeições nutritivas evita hipoglicemia grave, sobrecarga das enzimas digestivas e distensão gástrica.',
      readMore: `Durante a fase inicial de crescimento (semanas 8 a 16), a velocidade metabólica dos filhotes atinge picos que nunca mais se repetirão na fase adulta. Um filhote em desenvolvimento precisa alimentar uma síntese proteica acelerada, formação contínua da matriz óssea e manter a temperatura corporal. Pela desproporção entre área superficial e massa corporal, os filhotes perdem calor rapidamente, elevando seu gasto calórico basal para 2,5 a 3,0 vezes a Necessidade Energética de Repouso adulta (RER = 70 × [kg]^0,75).

No entanto, o volume anatômico do estômago é minúsculo. Sobrecarregar o trato digestivo com uma ou duas refeições volumosas gera dilatação gástrica, diarreia osmótica por saturação enzimática e digestão inadequada. A produção de lipase e amilase pancreática ainda está amadurecendo; refeições menores e frequentes garantem a absorção completa dos nutrientes sem sobrecarregar a flora intestinal.

Além disso, filhotes de raças mini e pequenas com menos de 16 semanas possuem reservas hepáticas de glicogênio muito limitadas e vias de gliconeogênese imaturas. Intervalos de jejum diurno superiores a 6 a 8 horas podem levar a quedas bruscas de glicose, causando fraqueza, hipotermia, ataxia e convulsões hipoglicêmicas.

O cronograma alimentar pediátrico recomenda: 4 refeições diárias do desmame até as 16 semanas; 3 refeições dos 4 aos 6 meses; e transição suave para 2 refeições diárias quando o cão atingir de 50% a 75% do peso adulto estimado. O cálculo em gramas deve ser revisto a cada 7 a 10 dias.`,
      whatToLookFor: [
        'Densidade energética superior a 3.800 kcal ME/kg para raças pequenas para fornecer calorias sem lotar o estômago',
        'Proteína de origem animal de alto valor biológico (≥28% a 32% na matéria seca) e no mínimo 18% de gordura digestível',
        'Fracionamento rigoroso: 4 refeições diárias até as 16 semanas, reduzindo para 3 refeições até os 6 meses de idade',
        'Pesagens semanais em balança digital com ajuste contínuo dos gramas para ganho de peso constante sem gordura excessiva',
      ],
      redFlags: [
        'Alimentar filhotes com menos de 5 meses apenas 1 ou 2 vezes ao dia, arriscando crises de hipoglicemia e vômitos',
        'Alimentação à vontade (ad libitum), que descontrola o aporte calórico e acelera perigosamente o crescimento ósseo',
        'Utilizar rações de manutenção para adultos com densidade calórica baixa (menor que 3.500 kcal/kg)',
        'Exercícios intensos logo após as refeições, elevando o risco de desconforto gástrico e torção',
      ],
      checklist: [
        'Dividir a quantidade diária de ração em 3 a 4 porções iguais distribuídas a cada 4 ou 5 horas',
        'Pesar o filhote a cada 7 dias e ajustar as porções para manter a pontuação corporal entre 4/9 e 5/9',
        'Garantir água limpa o dia todo, recolhendo-a 2 horas antes de dormir para ajudar no treino sanitário',
        'Ter mel ou xarope glicosado à mão para aplicar nas gengivas de filhotes mini em caso de fraqueza súbita',
      ],
      vetTip: 'Nunca alimente um filhote a ponto de esconder completamente suas costelas. Manter uma condição corporal magra (nota 4 de 9) durante todo o crescimento reduz a incidência de osteoartrite futura em mais de 45% e prolonga a vida do cão em até 1,8 anos.',
    },
    {
      slug: 'calcium-phosphorus-ratio-skeletal-growth',
      requirementNumber: 2,
      title: 'Relação Cálcio-Fósforo (Ca:P) e Desenvolvimento Ósseo',
      shortTag: 'Densidade Mineral e Proteção Articular',
      metricBadge: 'Ca:P 1.2:1–1.4:1 • Máx 1.2%–1.6% MS',
      desc: 'Filhotes com menos de 6 meses não regulam a absorção intestinal de cálcio e assimilam quase todo o mineral por difusão passiva. Manter a proporção Cálcio:Fósforo rigorosamente calibrada (1.2:1 a 1.4:1) com limites seguros é essencial para prevenir displasia de quadril e osteocondrose dissecante.',
      readMore: `A homeostase do cálcio em filhotes difere fundamentalmente da observada em cães adultos. Cães adultos contam com mecanismos ativos de transporte celular que reduzem a absorção no intestino quando há excesso dietético. Já filhotes com menos de 6 meses absorvem o cálcio quase que exclusivamente por difusão paracelular passiva, assimilando indiscriminadamente de 45% a 50% de todo o cálcio ingerido.

Quando o filhote consome cálcio em excesso, os níveis no sangue sobem, induzindo a secreção contínua de calcitonina pela tireoide e suprimindo o paratormônio (PTH). Essa hipercalcitonemia bloqueia a remodelação óssea natural e retarda a maturação da cartilagem de crescimento. As placas epifisárias não se ossificam no ritmo correto, gerando uma cartilagem espessa e frágil que sofre fissuras sob o impacto normal das brincadeiras.

O resultado são as doenças ortopédicas do desenvolvimento (DOD), como osteocondrite dissecante (OCD), osteodistrofia hipertrófica (HOD) e agravamento precoce de displasia coxofemoral e de cotovelo. Filhotes de raças grandes e gigantes são os mais afetados pelo estresse mecânico do rápido ganho de peso sobre articulações em formação.

Padrões internacionais como AAFCO e FEDIAF exigem uma relação Cálcio:Fósforo estritamente mantida entre 1.2:1 e 1.4:1, com limite máximo de cálcio entre 1.2% e 1.6% na matéria seca para raças grandes. Suplementar cálcio em pó, farinha de ossos ou casca de ovo em rações comerciais completas é terminantemente contraindicado.`,
      whatToLookFor: [
        'Declaração AAFCO ou FEDIAF indicando adequação para "crescimento" ou "filhotes de raças grandes"',
        'Relação Cálcio:Fósforo comprovada em laudo entre 1.2:1 e 1.4:1 (nunca abaixo de 1.1:1 ou acima de 1.6:1)',
        'Cálcio dietético absoluto estritamente contido entre 1.0% e 1.3% na matéria seca para raças grandes',
        'Minerais quelatados com aminoácidos para absorção equilibrada sem inibir a absorção de zinco e ferro',
      ],
      redFlags: [
        'Adicionar suplementos de cálcio, farinha de ossos ou laticínios a rações comerciais para filhotes',
        'Oferecer comida caseira ou alimentação crua sem cálculo preciso de cálcio (carne pura tem Ca:P desastroso de 1:10)',
        'Usar rações rotuladas como "para todas as fases da vida" que não contenham menção específica a filhotes de porte grande',
        'Suplementar doses altas de vitamina D ou vitamina A, que intensificam a toxicidade do cálcio na cartilagem',
      ],
      checklist: [
        'Conferir o verso da embalagem para validar a conformidade da fórmula com as exigências minerais de filhotes',
        'Rejeitar qualquer suplementação mineral sem indicação veterinária baseada em exames de sangue',
        'Caso opte por dieta caseira, exigir uma formulação feita por médico veterinário nutrólogo',
        'Solicitar avaliação ortopédica e de locomoção nas consultas vacinais de 4 e 6 meses de idade',
      ],
      vetTip: 'O maior mito na criação de cães é achar que "mais cálcio deixa os ossos mais fortes". Em filhotes, excesso de cálcio lesiona a cartilagem articular. Uma ração balanceada fornece cada miligrama necessário; suplementar destrói esse equilíbrio e compromete as articulações para o resto da vida.',
    },
    {
      slug: 'dha-brain-cognitive-development',
      requirementNumber: 3,
      title: 'Ácidos Graxos Ômega-3 DHA para o Cérebro e a Visão',
      shortTag: 'Neurologia e Acuidade Visual',
      metricBadge: 'DHA ≥0.05% MS • Óleo Marinho EPA/DHA',
      desc: 'O ácido docosa-hexaenoico (DHA) é o principal fosfolipídio estrutural do córtex cerebral e da retina canina. Ensaios clínicos demonstram que filhotes alimentados com DHA marinho biodisponível apresentam maior capacidade de aprendizado, memorização espacial rápida e melhor acuidade visual.',
      readMore: `O sistema nervoso central do filhote vive seu período mais crucial de expansão entre a gestação tardia e as 16 semanas de vida. Durante esse surto neurogênico, o ácido docosa-hexaenoico (DHA, 22:6 n-3)—um ômega-3 de cadeia longa com 22 carbonos—é transportado ativamente pela barreira hematoencefálica e incorporado às membranas sinápticas neuronais e aos fotorreceptores da retina. O DHA responde por mais de 30% dos lipídios estruturais da substância cinzenta cerebral.

No aspecto biofísico, as ligações duplas do DHA conferem uma fluidez excepcional à membrana dos neurônios. Essa fluidez otimiza a velocidade de transmissão dos impulsos nervosos, estimula a plasticidade sináptica e melhora a liberação de neurotransmissores, refletindo-se diretamente na velocidade de raciocínio e consolidação da memória.

Um ponto clínico decisivo é que os cães apresentam baixíssima atividade das enzimas elongases e delta-6 dessaturases para converter o ALA vegetal (encontrado na linhaça ou chia) em DHA ativo. Menos de 1% do ALA vegetal vira DHA funcional no organismo canino. Portanto, a ingestão de DHA marinho pré-formado (óleo de salmão selvagem, sardinha ou microalgas marinhas) é indispensável.

Estudos clínicos duplamente cegos comprovaram que filhotes alimentados com dietas enriquecidas com DHA marinho obtiveram pontuações muito superiores em testes de navegação em labirintos, discriminação visual de comandos e responderam muito mais rápido aos treinos de adestramento e socialização.`,
      whatToLookFor: [
        'Níveis de garantia com linha explícita indicando o percentual de DHA (mínimo de 0.05% a 0.10% na matéria seca)',
        'Fontes diretas de óleo marinho no rótulo: óleo de salmão selvagem, farinha de peixes de águas frias ou microalgas',
        'Presença de EPA (ácido eicosapentaenoico) associado para modular processos inflamatórios e proteger articulações jovens',
        'Antioxidantes naturais (tocoferóis mistos, extrato de alecrim) para proteger os ácidos graxos contra oxidação',
      ],
      redFlags: [
        'Rações que anunciam ômega-3 mas utilizam somente linhaça ou óleo de soja sem nenhuma fonte de DHA marinho',
        'Sacos de ração armazenados abertos em locais quentes, onde o calor oxida as gorduras em peróxidos prejudiciais',
        'Uso de óleo de fígado de bacalhau sem prescrição, arriscando toxicidade por excesso de vitaminas A e D',
        'Gorduras de baixa qualidade estabilizadas com antioxidantes sintéticos como etoxiquina, BHA ou BHT',
      ],
      checklist: [
        'Verificar nos níveis de garantia se o nutriente "DHA" está listado separadamente do ômega-3 total',
        'Manter o saco de ração bem fechado em local fresco e ao abrigo da luz, consumindo em até 30 dias após aberto',
        'Se adicionar óleo de salmão líquido, escolher embalagens escuras com dosador e guardar na geladeira',
        'Aproveitar a janela de 8 a 16 semanas para estimular o filhote com brinquedos cognitivos e adestramento positivo',
      ],
      vetTip: 'O período de socialização das 8 às 16 semanas é a única fase na vida do cão em que a densidade sináptica atinge o pico. Oferecer DHA marinho nessas semanas traz vantagens estruturais permanentes em facilidade de aprendizado e equilíbrio emocional para o resto da vida.',
    },
    {
      slug: 'breed-size-specific-growth-formulas',
      requirementNumber: 4,
      title: 'Fórmulas por Porte Racial e Controle da Taxa de Crescimento',
      shortTag: 'Porte Racial e Controle Ortopédico',
      metricBadge: 'Mini: 8–10 Meses • Gigante: 18–24 Meses',
      desc: 'Filhotes de raças pequenas encerram o crescimento ósseo aos 8–10 meses e precisam de alta densidade calórica (≥3.800 kcal/kg) e grãos mini para evitar hipoglicemia. Em contraste, filhotes de raças grandes crescem até os 24 meses e exigem dietas de energia controlada (≤3.500 kcal/kg) para moderar a velocidade de crescimento e proteger as articulações.',
      readMore: `A espécie canina exibe a maior variação morfológica de todos os mamíferos terrestres. Um Chihuahua de 2 kg e um Mastiff Inglês de 80 kg nascem com pesos relativamente próximos, mas suas curvas de crescimento são completamente distintas. Um filhote de porte pequeno multiplica seu peso ao nascer por 20 em cerca de 8 a 10 meses, enquanto um filhote gigante multiplica esse peso por até 100 vezes ao longo de 18 a 24 meses.

Como os pontos de chegada biológicos são tão diferentes, alimentar com uma ração genérica para filhotes traz riscos graves em ambos os extremos.

Filhotes mini e pequenos têm taxa metabólica altíssima por grama de peso, perdem calor facilmente e possuem estômagos diminutos. Eles precisam de rações com alta concentração calórica (3.800 a 4.200 kcal/kg), proteínas nobres e grãos de 6 a 8 mm que evitem engasgos. Seu crescimento cessa aos 9-10 meses, momento em que o aporte calórico deve ser contido para evitar sobrepeso.

Por outro lado, filhotes de raças grandes correm grande perigo com rações hipercalóricas. O excesso de calorias estimula o alongamento rápido dos ossos longos antes que os ligamentos e a cartilagem articular estejam prontos para suportar o peso, disparando casos de displasia coxofemoral e incongruência de cotovelo. Alimentos para filhotes grandes devem ter energia controlada (3.300 a 3.600 kcal/kg) e gordura moderada (10% a 14%) para impor um ritmo lento e seguro de crescimento até os 2 anos.`,
      whatToLookFor: [
        'Diferenciação evidente por porte: "Filhote Pequeno/Mini" vs. "Filhote Médio/Grande" (peso adulto esperado > 25 kg)',
        'Densidade energética adequada ao porte: 3.800–4.200 kcal/kg para raças pequenas; 3.300–3.600 kcal/kg para raças grandes',
        'Tamanho do grão proporcional à mandíbula: grãos de 6–8 mm para filhotes pequenos; 12–15 mm para filhotes grandes',
        'Teor moderado de gordura (12%–15%) com L-carnitina nas fórmulas grandes para promover massa magra sem acúmulo de gordura',
      ],
      redFlags: [
        'Oferecer ração para filhotes pequenos a filhotes de Pastor Alemão, Labrador, Golden Retriever ou Rottweiler',
        'Mudar filhotes grandes para ração adulta aos 6 meses para "frear o crescimento", provocando deficiências de aminoácidos essenciais',
        'Trocar filhotes pequenos para comida de adulto antes dos 8 meses, arriscando crises de hipoglicemia',
        'Gostar de ver o filhote "gordinho"; o excesso de peso sobre uma estrutura óssea imatura causa danos articulares permanentes',
      ],
      checklist: [
        'Estimar o peso adulto do filhote com base nos pais ou no padrão oficial da raça',
        'Optar por um produto com declaração AAFCO correspondente à faixa de porte do seu cão',
        'Monitorar para que o filhote permaneça em escore corporal de 4 a 5 em 9 (costelas fáceis de apalpar com leve pressão)',
        'Manter ração de filhote por 9–10 meses em raças pequenas, 12 meses em médias e 18–24 meses em raças grandes e gigantes',
      ],
      vetTip: 'Um filhote de raça grande não é um filhote pequeno em escala ampliada: seu metabolismo e suas fragilidades esqueléticas são únicos. Nunca force o ritmo de crescimento de um filhote grande. Um desenvolvimento gradual ao longo de 18 a 24 meses é a maior garantia de ossos densos e articulações perfeitas para toda a vida.',
    },
  ],
  ko: [
    {
      slug: 'high-metabolic-burn-feeding-frequency',
      requirementNumber: 1,
      title: '급격한 에너지 대사율과 단계별 식사 주기 관리',
      shortTag: '에너지 동태 및 혈당 안정화',
      metricBadge: '성견 RER의 2~3배 • 1일 3~4회 급여',
      desc: '생후 2~4개월의 자견은 폭발적인 세포 분열, 골격 및 근육 합성, 활발한 열 방출로 인해 체중당 성견 유지 에너지의 최대 3배를 소모합니다. 1일 3~4회로 분할 급여해야 치명적인 저혈당증, 소화 효소 포화 과부하, 급성 위확장을 예방할 수 있습니다.',
      readMore: `생후 8주에서 16주 사이의 초기 성장기는 반려견 생애 전체를 통틀어 대사 속도가 가장 가파르게 치솟는 시기입니다. 이 시기 강아지는 체세포 증식, 뼈의 지속적인 기질 침착, 활발한 체온 조절을 위해 엄청난 에너지를 소모합니다. 성견에 비해 체표면적 대 체중 비율이 크기 때문에 체열 손실이 매우 빠르며, 기초적인 칼로리 소모량은 성견의 휴식기 에너지 요구량(RER = 70 × [체중kg]^0.75)의 2.5~3.0배에 달합니다.

하지만 해부학적인 위 용적은 매우 작고 미성숙합니다. 성견처럼 하루 1~2회에 걸쳐 대량으로 급여하면 위확장이 일어나거나, 췌장 소화 효소의 처리 한도를 초과하여 삼투성 설사와 흡수 장애를 유발합니다. 췌장 리파아제와 아밀라아제의 분비 능력이 여전히 완성되어 가는 단계이므로, 적정량을 규칙적으로 나누어 먹여야 완전한 소화 흡수가 보장됩니다.

특히 생후 16주 미만의 소형견이나 토이 품종 자견은 간의 글리코겐 저장 용량이 극히 제한적이며 포도당 신생합성 경로가 미숙합니다. 낮 시간 동안 6~8시간 이상 공복 상태가 이어지면 혈당이 급격히 곤두박질치면서 기력 저하, 저체온증, 보행 실조, 심각한 저혈당 경련을 일으킬 수 있습니다.

임상 수의학이 권장하는 급여 횟수 프로토콜은 다음과 같습니다. 이유기부터 16주까지는 1일 4회, 생후 4개월부터 6개월까지는 1일 3회, 성견 예상 체중의 50~75%에 도달하는 6개월 이후부터 1일 2회로 전환합니다. 급속한 체중 증가 곡선을 반영하여 7~10일마다 일일 급여량을 재계산해야 합니다.`,
      whatToLookFor: [
        '작은 위장에 부담을 주지 않고 에너지를 공급할 수 있는 3,800 kcal ME/kg 이상의 고밀도 설계(소형견 기준)',
        '건물 기준 28~32% 이상의 고품질 동물성 단백질과 18% 이상의 소화 흡수율 높은 지방',
        '성장 단계별 엄격한 식사 횟수: 생후 16주까지 1일 4회, 생후 6개월까지 1일 3회 규칙적 급여',
        '디지털 체중계를 이용한 매주 정기 체중 측정 및 체형 점수(BCS 4~5/9) 기반의 유동적 급여량 조절',
      ],
      redFlags: [
        '생후 5개월 미만 자견에게 하루 1~2회만 급여하여 저혈당증 및 공복 담즙성 구토를 유발하는 행위',
        '사료를 온종일 그릇에 담아두는 자율 급여(Free-feeding): 과잉 칼로리 섭취와 골격 이상 성장의 주원인',
        '에너지 밀도가 낮은 성견용 유지 사료(3,500 kcal/kg 미만)를 먹여 성장 영양 결핍을 초래하는 행위',
        '식사 직후 자견을 격렬하게 뛰어놀게 하여 위장 장애 및 위염 위험을 높이는 행위',
      ],
      checklist: [
        '하루 총 권장 급여량을 3~4회로 균등하게 나누어 4~5시간 간격으로 급여하기',
        '7일마다 체중을 측정하여 갈비뼈가 가볍게 만져지는 이상적 체형(BCS 4/9)을 유지하도록 사료량 조절하기',
        '신선한 물을 상시 제공하되, 밤중 배변 실수 방지를 위해 취침 2시간 전부터 음수량 조절하기',
        '소형견 견주는 갑작스러운 저혈당 무기력증에 대비해 잇몸에 바를 수 있는 꿀이나 덱스트로스 시럽 구비하기',
      ],
      vetTip: '강아지의 갈비뼈가 두꺼운 지방 아래 완전히 파묻힐 정도로 살찌우면 안 됩니다. 성장기 내내 날씬한 체형(BCS 4/9)을 유지하는 것만으로도 성견 이후 골관절염 발생률이 45% 이상 감소하며, 건강 수명이 최대 1.8년 연장된다는 사실이 임상 연구로 입증되어 있습니다.',
    },
    {
      slug: 'calcium-phosphorus-ratio-skeletal-growth',
      requirementNumber: 2,
      title: '최적 칼슘-인 비율(Ca:P)과 골격 및 관절 발달',
      shortTag: '골밀도 형성 및 관절 보호 미네랄 균형',
      metricBadge: 'Ca:P 1.2:1–1.4:1 • 상한 1.2%~1.6% DM',
      desc: '생후 6개월 미만의 자견은 장관에서 칼슘 흡수를 능동적으로 조절하지 못하고 섭취량의 대부분을 수동 확산으로 흡수합니다. 칼슘-인 비율(1.2:1~1.4:1)과 엄격한 상한선 준수는 박리성 골연골염(OCD)과 고관절 이형성증을 예방하는 절대적인 기준입니다.',
      readMore: `자견의 칼슘 대사 메커니즘은 성견과 완전히 다릅니다. 성견은 사료 속 칼슘이 과도하면 장 세포막의 능동 수송을 억제하여 흡수를 차단할 수 있습니다. 반면 생후 6개월 미만의 자견은 세포 사이를 통한 수동적 확산으로 칼슘을 흡수하기 때문에, 장관으로 들어온 칼슘의 45~50%를 체내 필요성과 상관없이 무조건 혈액으로 흡수합니다.

혈중 칼슘 농도가 지속적으로 높아지면 갑상선 C세포에서 칼시토닌이 과다 분비되고 부갑상선 호르몬(PTH)이 억제됩니다. 이러한 고칼시토닌혈증은 뼈를 리모델링하는 파골세포 작용을 멈추게 하고 성장판 연골의 정상적인 골화 과정을 방해합니다. 연골이 기형적으로 두꺼워지고 부서지기 쉬운 상태가 되어 일상적인 체중 부하만으로도 균열이 발생합니다.

이는 박리성 골연골염(OCD), 비대성 골이영양증(HOD), 요골 만곡증, 그리고 고관절 및 주관절 이형성증 등 성장기 골격 질환(DOD)을 촉발합니다. 특히 뼈의 길이 성장이 급격한 대형견과 초대형견 자견은 연골에 가해지는 역학적 하중이 커 영구적인 관절 손상으로 이어지기 쉽습니다.

AAFCO와 FEDIAF는 칼슘-인 비율을 1.2:1에서 1.4:1로 엄격히 규정하며, 대형견 자견용 사료의 경우 건물 기준 칼슘 상한선을 1.2~1.6%로 제한하고 있습니다. 이미 완전 영양을 갖춘 자견용 사료에 뼈가루, 난각 가루, 칼슘 영양제를 임의로 추가하는 것은 매우 위험합니다.`,
      whatToLookFor: [
        '자견 성장기 또는 "대형견 자견 성장을 포함한 전연령"에 부합하는 AAFCO 영양 적합성 문구 확인',
        '분석 수치상 칼슘 대 인의 비율이 1.2:1에서 1.4:1 사이에 정밀하게 맞추어져 있는지 확인(1.1:1 미만이나 1.6:1 초과 금지)',
        '대형견 및 초대형견 사료의 경우 건물 기준 총 칼슘 함량이 1.0%~1.3% 수준으로 제어되어 있는지 확인',
        '아연이나 철분 흡수를 방해하지 않는 고품질 아미노산 킬레이트 미네랄 복합체 배합',
      ],
      redFlags: [
        '시판 강아지 사료에 칼슘 정제, 골분, 달걀 껍데기 가루, 유제품을 임의로 추가 토핑하는 행위',
        '정밀 영양 소프트웨어 없이 순수 육류만으로 자연식이나 생식을 급여하는 행위(순수 살코기의 Ca:P 비율은 1:10으로 극단적 결핍 유발)',
        '"전연령용" 사료 중 대형견 자견 성장 규격을 충족하지 못하는 제품을 대형견 강아지에게 급여하는 행위',
        '고용량 비타민 D나 비타민 A 영양제를 병용하여 칼슘 독성을 증폭시키는 행위',
      ],
      checklist: [
        '사료 포장지 라벨에서 칼슘과 인의 실제 함량 및 AAFCO 성장기 인증 확인하기',
        '혈액 검사상 저칼슘혈증 진단을 수의사에게 받지 않는 한, 시판 칼슘 보충제는 절대 먹이지 않기',
        '홈메이드 화식이나 자연식을 준비할 경우 반드시 수의 임상 영양 전문의의 처방 레시피를 이용하기',
        '생후 4개월 및 6개월 예방접종 방문 시 수의사에게 관절 가동 범위 및 보행 검진 요청하기',
      ],
      vetTip: '강아지 양육에서 가장 위험한 미신은 "칼슘을 많이 먹여야 뼈가 튼튼해진다"는 생각입니다. 강아지에게 칼슘 과잉은 성장기 연골을 파괴하는 독입니다. 검증된 성장기 사료에는 필요한 칼슘이 완벽히 들어있으며, 추가 영양제는 평생의 관절 장애를 부릅니다.',
    },
    {
      slug: 'dha-brain-cognitive-development',
      requirementNumber: 3,
      title: '뇌 인지 기능 및 망막 시각 발달을 위한 필수 DHA 오메가-3',
      shortTag: '신경계 가소성 및 망막 광수용체 발달',
      metricBadge: 'DHA ≥0.05% DM • 해양성 오메가-3 EPA/DHA',
      desc: '도코사헥사엔산(DHA)은 포유류의 대뇌 피질과 망막 광수용체 세포막을 구성하는 핵심 구조 지질입니다. 임상 연구 결과, 생체 이용률이 높은 해양성 DHA를 충분히 섭취한 강아지는 훈련 습득 속도, 공간 기억력, 망막 전위도 시각 민감도가 현저히 향상됩니다.',
      readMore: `강아지의 중추신경계는 임신 후기부터 생후 16주 사이에 일생 중 가장 폭발적인 시냅스 형성과 뇌신경 구조 확장을 겪습니다. 이 신경 발달의 결정적 시기에 22개 탄소 사슬의 고도 불포화지방산인 도코사헥사엔산(DHA, 22:6 n-3)은 뇌혈관장벽(BBB)을 통과하여 신경세포 시냅스 막과 망막 간상세포 외절막으로 집중 편입됩니다. 대뇌 회백질 구조 지질의 30% 이상을 DHA가 차지합니다.

생체물리학적으로 DHA의 6개 이중결합 구조는 신경 세포막에 탁월한 유동성을 부여합니다. 이 막 유동성은 신경 전달 신호 속도를 가속화하고, 시냅스 가소성을 극대화하며, 신경전달물질 방출을 원활하게 하여 정보 처리 속도와 기억 저장 능력을 직접적으로 끌어올립니다.

임상적으로 가장 중요한 점은, 개는 식물성 알파-리놀렌산(ALA: 아마씨유, 치아씨드)을 체내에서 활성 DHA로 전환하는 효소(엘롱가아제, 델타-6 불포화화 효소) 활성이 극히 미미하다는 사실입니다. 식물성 ALA 중 기능성 DHA로 전환되는 비율은 1% 미만에 불과합니다. 따라서 한대 해역의 천연 어유(연어유, 정어리유)나 미세조류에서 추출한 이미 완성된 형태의 해양성 DHA 직접 공급이 생리학적으로 필수적입니다.

세계 유수 수의과대학에서 진행된 이중맹검 인지 임상 연구에 따르면, 고DHA 식단을 섭취한 강아지 그룹은 일반 사료를 먹은 대조군에 비해 시각적 대비 민감도가 뛰어났으며, 미로 찾기 테스트를 훨씬 적은 시행착오로 통과했고, 기본 복종 훈련 및 조기 사회화 교육에서 탁월한 학습 성과를 보였습니다.`,
      whatToLookFor: [
        '보증성분표에 두루뭉술한 오메가-3가 아닌 "DHA" 수치가 명확히 표기된 제품(건물 기준 최소 0.05%~0.10% 이상)',
        '원료 목록 상단에 명시된 신선한 해양성 원료: 자연산 연어 오일, 등푸른 생선 어유, 해양 미세조류 추출물',
        '어린 강아지의 관절 보호와 전신 염증 반응 조절을 돕는 EPA(에이코사펜타엔산) 동시 함유',
        '산화되기 쉬운 고도 불포화지방산을 보호하는 천연 토코페롤(비타민 E) 및 로즈마리 추출물 배합',
      ],
      redFlags: [
        '오메가-3 함유를 강조하면서 실제 원료는 아마씨나 대두유뿐이고 해양성 DHA는 전무한 사료',
        '개봉한 사료를 고온다습한 베란다에 장기간 방치하여 불포화지방산이 유해한 과산화지질로 산패된 상태',
        '지용성 비타민 A와 D의 과잉 중독 위험을 계산하지 않고 대구 간유 영양제를 과다 투여하는 행위',
        '에톡시퀸, BHA, BHT 등 유해한 합성 항산화제로 보존된 저급 잡어 분말 사용',
      ],
      checklist: [
        '자견용 사료 포장지의 보증성분란에서 "DHA" 단독 항목 수치 확인하기',
        '사료는 본래 포장지째 밀폐 용기에 담아 서늘한 곳에 보관하고, 개봉 후 30일 이내에 소비하기',
        '액상 오메가-3 오일을 별도로 급여할 경우 차광 펌프 용기 제품을 선택하고 개봉 후 반드시 냉장 보관하기',
        '생후 8~16주 사회화 시기 동안 노즈워크, 퍼즐 토이, 긍정 강화 교육을 적극 활용하여 뇌 신경 발달 극대화하기',
      ],
      vetTip: '생후 8주부터 16주까지의 사회화 시기는 강아지 대뇌 시냅스 밀도가 일생 중 정점을 찍는 유일한 시간입니다. 이 황금기에 해양성 DHA를 충분히 공급하는 것은 평생 동안 유지될 학습 능력, 정서적 안정감, 훈련 습득력에 결정적인 기틀을 마련해 줍니다.',
    },
    {
      slug: 'breed-size-specific-growth-formulas',
      requirementNumber: 4,
      title: '견종 체급별 성장 속도 차이와 맞춤 에너지 밀도(소형견 vs 대형견)',
      shortTag: '견종 체급별 성장 곡선 및 정형외과적 속도 조절',
      metricBadge: '소형견: 8~10개월 • 대형견: 18~24개월 성견 도달',
      desc: '토이 및 소형견 자견은 생후 8~10개월이면 골격 성장을 마치므로 저혈당을 막는 고에너지 밀도(≥3,800 kcal/kg)와 소립자 사료가 필요합니다. 반면 대형견 자견은 24개월까지 성장하므로, 골격의 과도한 급성장을 억제하고 관절을 보호하기 위해 절제된 에너지 사료(≤3,500 kcal/kg)가 필수적입니다.',
      readMore: `반려견은 지구상 모든 육상 포유류 중에서 가장 극단적인 성체 체격 스펙트럼을 지니고 있습니다. 성견 시 2kg에 불과한 치와와와 80kg에 육박하는 잉글리시 마스티프는 태어날 당시 체중 차이는 크지 않지만, 성장 곡선의 궤적은 완전히 다릅니다. 소형견은 8~10개월 만에 출생 체중의 약 20배로 급성장하여 성장을 마무리하지만, 초대형견은 18~24개월에 걸쳐 출생 체중의 80~100배로 장기간 완만하게 성장합니다.

이처럼 생물학적 종착지가 완전히 상이하기 때문에, 모든 강아지에게 동일한 단일 자견용 사료를 급여하는 것은 양쪽 체급 모두에 치명적인 소아 질환을 유발합니다.

치와와, 포메라니안, 말티즈 등 소형견 자견은 체중당 기초대사율이 매우 높고 체열 손실이 빠르며 위 용적이 작아 한 번에 많은 양을 먹지 못합니다. 따라서 고밀도 칼로리(3,800~4,200 kcal/kg)와 고농축 단백질·지방, 그리고 기도를 막지 않는 6~8mm 크기의 소립자 알갱이가 필요합니다. 생후 9~10개월이면 골격 성장이 멈추므로 이 시기부터는 칼로리를 조절해 비만을 막아야 합니다.

반대로 골든 리트리버, 래브라도, 저먼 셰퍼드 등 대형견 자견에게 고칼로리 사료를 급여하면 정형외과적 재앙이 일어납니다. 과도한 칼로리는 관절 연골과 인대가 감당할 수 있는 속도 이상으로 뼈의 길이 성장을 촉진하여 고관절 이형성증과 주관절 불일치를 급격히 악화시킵니다. 대형견 자견용 사료는 에너지 밀도(3,300~3,600 kcal/kg)와 지방(10~14%)을 의도적으로 제한하여, 생후 2세까지 천천히 단단하게 자라도록 유도하는 것이 절대적인 수의학적 원칙입니다.`,
      whatToLookFor: [
        '체급별로 명확히 세분화된 사료: "소형견 자견용" vs. "대형견 자견용(성견 예상 체중 25kg 이상)"',
        '체급에 부합하는 칼로리 밀도: 소형견용 3,800~4,200 kcal/kg, 대형견용 3,300~3,600 kcal/kg',
        '턱 관절과 치아 크기에 맞춘 알갱이 지름: 소형견용 6~8mm 소립, 대형견용 12~15mm 크런치 알갱이',
        '대형견 사료의 경우 체지방 축적 없이 탄탄한 골격근 형성을 돕는 L-카르니틴 및 절제된 지방(12~15%) 배합',
      ],
      redFlags: [
        '골든 리트리버나 진돗개 등 대형견 자견에게 빨리 키우겠다는 욕심으로 소형견용 고칼로리 사료를 먹이는 행위',
        '대형견 성장을 늦춘다며 생후 6개월에 성견용 사료로 조기 전환하여 필수 성장 아미노산 결핍을 초래하는 행위',
        '소형견 자견에게 생후 8개월 이전에 성견용 사료를 먹여 저혈당증 및 소화 장애를 유발하는 행위',
        '강아지를 "통통하게 살찐 모습"으로 키우려는 욕심: 미성숙한 관절에 가해지는 과체중은 비가역적인 영구 변형을 초래함',
      ],
      checklist: [
        '부모견 정보나 견종 표준을 바탕으로 성견 예상 체중 미리 파악하기',
        '성견 예상 체중이 25kg 이상일 경우 반드시 "대형견 자견 성장 규격"을 충족하는 사료 선택하기',
        '가벼운 손길로 갈비뼈가 만져지고 위에서 볼 때 허리선이 뚜렷한 신체 상태 점수(BCS 4~5/9) 엄수하기',
        '자견용 사료 유지 기간 지키기: 소형견은 9~10개월, 중형견은 12개월, 대형견 및 초대형견은 18~24개월',
      ],
      vetTip: '대형견 강아지는 소형견 강아지를 단순히 확대한 존재가 아닙니다. 대사 메커니즘과 골격의 취약점이 완전히 다릅니다. 대형견의 성장을 절대 서두르지 마십시오. 18~24개월에 걸쳐 천천히 차분하게 골격을 완성시키는 것만이 평생 동안 관절 통증 없이 활기차게 달릴 수 있는 유일한 열쇠입니다.',
    },
  ],
  it: [
    {
      slug: 'high-metabolic-burn-feeding-frequency',
      requirementNumber: 1,
      title: 'Elevato Consumo Metabolico e Frequenza dei Pasti',
      shortTag: 'Cinetica Energetica e Controllo Glicemico',
      metricBadge: '2–3× RER Adulto • 3–4 Pasti al Giorno',
      desc: 'I cuccioli giovani (2–4 mesi) bruciano fino al triplo dell’energia a riposo di un adulto per chilo a causa della rapida divisione cellulare e della dispersione termica. Suddividere la razione in 3-4 pasti ad alta densità previene ipoglicemie letali, sovraccarico degli enzimi digestivi e dilatazione gastrica.',
      readMore: `Durante la fase iniziale di crescita (dalla settimana 8 alla 16), la velocità metabolica del cucciolo raggiunge picchi mai più riscontrabili nella vita adulta. Un cucciolo in accrescimento deve sostenere una sintesi proteica accelerata, la deposizione di matrice ossea e una costante termoregolazione. A causa dell'elevato rapporto tra superficie corporea e peso, i cuccioli disperdono calore molto velocemente, portando il consumo calorico a 2,5–3,0 volte il Fabbisogno Energetico a Riposo adulto (RER = 70 × [kg]^0,75).

Tuttavia, la capacità anatomica dello stomaco è estremamente ridotta. Sovraccaricare l'apparato digerente con uno o due pasti abbondanti provoca dilatazione gastrica, diarrea osmotica per saturazione enzimatica e digestione incompleta. La produzione pancreatica di lipasi e amilasi è ancora in maturazione; pasti moderati e regolari garantiscono la corretta idrolisi senza alterare il microbioma intestinale.

Inoltre, i cuccioli di razza toy e piccola sotto le 16 settimane hanno scorte minime di glicogeno epatico e vie di gluconeogenesi immature. Digiuni superiori alle 6-8 ore durante il giorno possono far crollare rapidamente il glucosio nel sangue, innescando debolezza, ipotermia, atassia e crisi convulsive ipoglicemiche.

Il protocollo clinico raccomanda: 4 pasti al giorno dallo svezzamento fino alle 16 settimane; 3 pasti dai 4 ai 6 mesi; e il passaggio a 2 pasti giornalieri quando il cucciolo raggiunge il 50%–75% del peso adulto stimato. Le razioni in grammi devono essere ricalcolate ogni 7–10 giorni.`,
      whatToLookFor: [
        'Densità calorica superiore a 3.800 kcal ME/kg per razze piccole per fornire calorie adeguate senza riempire eccessivamente lo stomaco',
        'Proteine animali ad alto valore biologico (≥28%–32% su sostanza secca) e almeno il 18% di grassi altamente digeribili',
        'Frequenza rigorosa: 4 pasti al giorno fino a 16 settimane, riducendo a 3 pasti fino ai 6 mesi di età',
        'Pesate settimanali su bilancia digitale con adeguamento delle porzioni per una crescita costante senza accumulo adiposo',
      ],
      redFlags: [
        'Nutrire cuccioli sotto i 5 mesi solo 1 o 2 volte al giorno, rischiando crisi ipoglicemiche e vomito a digiuno',
        'Alimentazione ad libitum (ciotola sempre piena): causa assunzione calorica sregolata e crescita ossea disordinata',
        'Utilizzo di crocchette per adulti a bassa densità calorica (inferiore a 3.500 kcal/kg) inadatte alla crescita',
        'Esercizio fisico intenso subito dopo i pasti, che aumenta il rischio di congestione e torsione gastrica',
      ],
      checklist: [
        'Suddividere la dose giornaliera in 3 o 4 porzioni uguali distribuite a intervalli di 4-5 ore',
        'Pesare il cucciolo ogni 7 giorni e regolare i grammi per mantenere un punteggio corporeo ideale (BCS 4/9–5/9)',
        'Garantire acqua fresca sempre a disposizione, togliendola 2 ore prima del riposo notturno per facilitare l’educazione ai bisogni',
        'Tenere a portata di mano miele o sciroppo di glucosio per le razze toy da frizionare sulle gengive in caso di spossatezza',
      ],
      vetTip: 'Non permettete mai che un cucciolo ingrassi fino a rendere le costole non palpabili. Mantenere una silhouette snella (BCS 4 su 9) per tutta la crescita riduce l’incidenza di artrosi in età adulta di oltre il 45% e prolunga la vita fino a 1,8 anni.',
    },
    {
      slug: 'calcium-phosphorus-ratio-skeletal-growth',
      requirementNumber: 2,
      title: 'Rapporto Calcio-Fosforo (Ca:P) e Sviluppo Scheletrico',
      shortTag: 'Mineralizzazione Ossea e Protezione Articolare',
      metricBadge: 'Ca:P 1.2:1–1.4:1 • Tetto Max 1.2%–1.6% SS',
      desc: 'I cuccioli sotto i 6 mesi non riescono a regolare l’assorbimento intestinale del calcio e assimilano quasi tutto il minerale per diffusione passiva. Rispettare un rapporto Calcio:Fosforo calibrato (1.2:1 a 1.4:1) con limiti massimi rigidi è indispensabile per prevenire osteocondrite dissecante e displasia dell’anca.',
      readMore: `L'omeostasi del calcio nel cucciolo differisce radicalmente da quella del cane adulto. Mentre l'adulto regola attivamente il trasporto cellulare intestinale riducendo l'assorbimento quando l'apporto è eccessivo, il cucciolo sotto i 6 mesi assorbe il calcio quasi esclusivamente per diffusione passiva paracellulare. In questo modo assimila indiscriminatamente dal 45% al 50% di tutto il calcio presente nel lume intestinale.

Un eccesso di calcio nella dieta determina un aumento anomalo della calcemia, stimolando la produzione di calcitonina tiroidea e inibendo il paratormone (PTH). Questo stato di ipercalcitonemia blocca il fisiologico rimodellamento osseo e ritarda l'ossificazione encondrale della cartilagine di accrescimento. La cartilagine si ispessisce in modo anomalo, diventa fragile e si lesiona sotto il normale carico biomeccanico.

Questo innesca le patologie ortopediche dell'accrescimento (DOD), quali osteocondrite dissecante (OCD), osteodistrofia ipertrofica (HOD) e accelera la displasia di anca e gomito. I cuccioli di taglia grande e gigante sono i più vulnerabili a causa dell'elevato stress meccanico sulle articolazioni ancora immature.

Le linee guida internazionali AAFCO e FEDIAF impongono un rapporto Ca:P rigorosamente compreso tra 1.2:1 e 1.4:1, con un limite massimo di calcio tra l'1.2% e l'1.6% su sostanza secca per le taglie grandi. Aggiungere integratori di calcio, farina d'ossa o gusci d'uovo a una dieta commerciale per cuccioli è severamente controindicato.`,
      whatToLookFor: [
        'Dichiarazione AAFCO o FEDIAF specifica per la "crescita" o "inclusa la crescita di cuccioli di taglia grande"',
        'Rapporto analitico Calcio:Fosforo certificato tra 1.2:1 e 1.4:1 (mai inferiore a 1.1:1 o superiore a 1.6:1)',
        'Calcio totale rigorosamente limitato tra l’1.0% e l’1.3% di sostanza secca per taglie grandi e giganti',
        'Minerali chelati con amminoacidi per un assorbimento armonioso che non ostacoli zinco e ferro',
      ],
      redFlags: [
        'Aggiungere compresse di calcio, farina d’ossa, gusci d’uovo o latticini a crocchette per cuccioli già bilanciate',
        'Somministrare diete casalinghe o BARF senza calcolo di precisione del calcio (la carne senza ossa ha un disastroso rapporto Ca:P di 1:10)',
        'Utilizzare alimenti etichettati come "per tutte le fasi di vita" privi della specifica per cuccioli di taglia grande',
        'Associare megadosi di vitamina D o vitamina A, che amplificano la tossicità del calcio sulle cartilagini',
      ],
      checklist: [
        'Controllare la tabella dei valori nutrizionali sul retro della confezione per verificare i livelli di calcio e fosforo',
        'Rifiutare integratori minerali senza una specifica diagnosi veterinaria di ipocalcemia formulata tramite esami ematici',
        'Se si prepara una dieta casalinga, affidarsi obbligatoriamente a un medico veterinario nutrizionista',
        'Richiedere una valutazione della deambulazione e delle articolazioni durante le visite di controllo a 4 e 6 mesi',
      ],
      vetTip: 'Il mito più pericoloso nella crescita del cane è credere che "più calcio renda le ossa più forti". Nei cuccioli, il calcio in eccesso è veleno per la cartilagine in crescita. Un alimento formulato fornisce tutto il calcio necessario; aggiungere integratori distrugge questo equilibrio e rovina le articolazioni per sempre.',
    },
    {
      slug: 'dha-brain-cognitive-development',
      requirementNumber: 3,
      title: 'Acidi Grassi Omega-3 DHA per Cervello e Retina',
      shortTag: 'Neurologia e Acuità Fotorecettrice',
      metricBadge: 'DHA ≥0.05% SS • Olio Marino Purificato EPA/DHA',
      desc: 'L’acido docosaesaenoico (DHA) è il principale fosfolipide strutturale nella corteccia cerebrale e nelle membrane retiniche. Studi clinici veterinari dimostrano che i cuccioli alimentati con DHA marino biodisponibile ottengono punteggi superiori nell’apprendimento, memoria spaziale più rapida e migliore acuità visiva.',
      readMore: `Il sistema nervoso centrale del cucciolo attraversa la sua fase più intensa di sviluppo tra la gestazione avanzata e le prime 16 settimane di vita. In questa finestra neurogenica fondamentale, l'acido docosaesaenoico (DHA, 22:6 n-3)—un acido grasso polinsaturo a 22 atomi di carbonio—attraversa la barriera ematoencefalica per incorporarsi nelle membrane sinaptiche dei neuroni e nei fotorecettori della retina. Il DHA rappresenta oltre il 30% di tutti i lipidi strutturali della corteccia cerebrale.

A livello biofisico, la particolare conformazione del DHA conferisce una straordinaria fluidità alle membrane cellulari. Questa fluidità velocizza la trasmissione degli impulsi nervosi, stimola la plasticità sinaptica e facilita il rilascio dei neurotrasmettitori, migliorando in maniera diretta la capacità di apprendimento e la memoria.

Un aspetto clinico cruciale è che i cani presentano un'attività enzimatica (elongasi e delta-6 desaturasi) quasi nulla per trasformare l'ALA vegetale (dei semi di lino o di chia) in DHA attivo. Meno dell'1% dell'ALA vegetale viene convertito in DHA nel cane. L'assunzione diretta di DHA marino preformato (da olio di salmone selvaggio, sardina o microalghe) è quindi fisiologicamente indispensabile.

Studi clinici veterinari in doppio cieco hanno confermato che i cuccioli alimentati con formule ad alto contenuto di DHA marino hanno appreso comandi di obbedienza in tempi dimezzati, superato test spaziali in labirinto con molti meno errori e sviluppato una sensibilità visiva al contrasto notevolmente più nitida.`,
      whatToLookFor: [
        'Tabella dei componenti analitici con voce esplicita per il "DHA" (minimo 0.05%–0.10% su sostanza secca)',
        'Fonti dirette di olio marino negli ingredienti: olio di salmone selvaggio, farina di pesce azzurro o microalghe marine',
        'Presenza concomitante di EPA (acido eicosapentaenoico) per modulare l’infiammazione e supportare le articolazioni',
        'Antiossidanti naturali (tocoferoli misti, estratto di rosmarino) per proteggere gli acidi grassi dall’irrancidimento ossidativo',
      ],
      redFlags: [
        'Alimenti che pubblicizzano omega-3 ma contengono solo semi di lino o olio di soia, privi di DHA marino attivo',
        'Sacchi di crocchette aperti conservati in garage caldi, dove calore e ossigeno ossidano i grassi in perossidi nocivi',
        'Somministrazione di olio di fegato di merluzzo senza calcolo veterinario, rischiando ipervitaminosi tossica da vitamine A e D',
        'Grassi di bassa qualità stabilizzati con conservanti chimici come etossichina, BHA o BHT',
      ],
      checklist: [
        'Verificare sui valori analitici che sia presente una percentuale specifica di DHA e non solo un generico "Omega-3"',
        'Conservare il sacco originale ben sigillato in un luogo fresco e consumarlo entro 30 giorni dall’apertura',
        'Se si aggiunge olio di salmone liquido, scegliere flaconi scuri con dosatore e conservare in frigorifero',
        'Sfruttare il periodo chiave tra 8 e 16 settimane per stimolare la plasticità cerebrale con giochi cognitivi e rinforzo positivo',
      ],
      vetTip: 'Il periodo di socializzazione tra le 8 e le 16 settimane è l’unico momento nella vita del cane in cui la densità sinaptica cerebrale raggiunge il picco. Fornire DHA marino durante queste settimane garantisce vantaggi permanenti nell’apprendimento e nella stabilità caratteriale che dureranno per tutta la vita.',
    },
    {
      slug: 'breed-size-specific-growth-formulas',
      requirementNumber: 4,
      title: 'Formule Specifiche per Taglia di Razza e Velocità di Crescita',
      shortTag: 'Taglia di Razza e Modulazione della Crescita',
      metricBadge: 'Toy: 8–10 Mesi • Gigante: 18–24 Mesi alla Maturità',
      desc: 'I cuccioli di taglia piccola completano la maturità scheletrica a 8–10 mesi e necessitano di elevata densità calorica (≥3.800 kcal/kg) e crocchette mini per prevenire ipoglicemie. Al contrario, i cuccioli di taglia grande crescono fino a 24 mesi e richiedono formule a energia controllata (≤3.500 kcal/kg) per rallentare l’allungamento osseo e proteggere le articolazioni.',
      readMore: `La specie canina mostra la più ampia variabilità morfologica tra tutti i mammiferi. Un Chihuahua adulto di 2 kg e un Alano di 80 kg nascono con pesi neonatali relativamente vicini, ma le loro traiettorie di accrescimento divergono completamente. Un cucciolo toy moltiplica il suo peso alla nascita di circa 20 volte in soli 8–10 mesi, mentre un cucciolo di taglia gigante lo moltiplica di 80–100 volte lungo un arco di 18–24 mesi.

Poiché gli obiettivi biologici sono così distanti, somministrare un alimento generico "per tutti i cuccioli" espone entrambi gli estremi a gravi patologie.

I cuccioli nani e piccoli hanno un metabolismo velocissimo per grammo di peso, disperdono calore facilmente e hanno uno stomaco minuscolo. Hanno bisogno di crocchette ad alta concentrazione calorica (3.800–4.200 kcal/kg), proteine nobili e diametro di 6–8 mm per evitare soffocamenti. Il loro scheletro si stabilizza già a 9–10 mesi, momento in cui le calorie vanno ridotte per evitare il sovrappeso.

Al contrario, i cuccioli di taglia grande e gigante vanno incontro a disastri articolari se nutriti con crocchette troppo energetiche. L'eccesso calorico accelera l'allungamento delle ossa prima che cartilagini e legamenti siano pronti a sostenerne il peso, scatenando displasia dell'anca e del gomito. Gli alimenti per cuccioli grandi devono contenere una densità energetica controllata (3.300–3.600 kcal/kg) e grassi moderati (10%–14%) per imporre una crescita lenta e robusta fino ai 2 anni.`,
      whatToLookFor: [
        'Formulazioni distinte per taglia: "Puppy Mini/Small" vs. "Puppy Large/Giant" (per cani con peso adulto previsto >25 kg)',
        'Densità calorica commisurata: 3.800–4.200 kcal/kg per razze piccole; 3.300–3.600 kcal/kg per razze grandi',
        'Dimensione della crocchetta adatta alla dentizione: micro-crocchette da 6–8 mm per razze toy; 12–15 mm per taglie grandi',
        'Grassi contenuti (12%–15%) con L-carnitina nelle formule per taglie grandi per sviluppare massa muscolare magra senza appesantire',
      ],
      redFlags: [
        'Nutrire un cucciolo di Pastore Tedesco, Labrador o Bovaro con crocchette ipercaloriche per razze piccole',
        'Passare un cucciolo grande all’alimento per adulti a soli 6 mesi credendo di rallentarne la crescita, creando gravi deficit amminoacidici',
        'Passare un cucciolo toy al cibo per adulti prima degli 8 mesi, rischiando crisi ipoglicemiche',
        'Volere un cucciolo "bello in carne": il grasso corporeo su cartilagini non ancora ossificate deforma le articolazioni in modo irreversibile',
      ],
      checklist: [
        'Stimare il peso adulto del cucciolo in base ai genitori o agli standard ufficiali di razza',
        'Scegliere una formula conforme agli standard AAFCO/FEDIAF per la specifica fascia di peso da adulto',
        'Mantenere una condizione corporea tra 4 e 5 su 9: le costole devono essere facilmente palpabili sotto una leggera pressione',
        'Mantenere il cibo per cuccioli fino a 9–10 mesi nelle taglie piccole, 12 mesi nelle medie e 18–24 mesi nelle taglie grandi e giganti',
      ],
      vetTip: 'Un cucciolo di taglia grande non è un cucciolo piccolo ingrandito: la sua cinetica metabolica e la sua vulnerabilità articolare sono uniche. Non abbiate mai fretta di vedere grande il vostro cucciolo. Una crescita lenta e controllata lungo 18–24 mesi è la migliore garanzia per avere articolazioni sane e forti per tutta la vita.',
    },
  ],
};

export function getPuppyNutritionRequirements(lang: Lang): PuppyNutritionRequirement[] {
  return REQUIREMENTS_DATA[lang] || REQUIREMENTS_DATA.en;
}
