import type { Lang } from '../i18n/ui';

export const GOLDEN_RULE_SLUGS = [
  'named-animal-protein-first',
  'high-biological-moisture',
  'zero-synthetic-preservatives',
  'controlled-carbohydrates',
] as const;

export type GoldenRuleSlug = (typeof GOLDEN_RULE_SLUGS)[number];

export interface GoldenRule {
  slug: GoldenRuleSlug;
  ruleNumber: number;
  title: string;
  desc: string;
  readMore: string;
  whatToLookFor: string[];
  redFlags: string[];
  checklist: string[];
  vetTip: string;
}

export interface GoldenRulesPageI18n {
  badge: string;
  ruleBadgePrefix: string;
  reviewedBy: string;
  whatToLookForTitle: string;
  redFlagsTitle: string;
  fullBreakdown: string;
  checklistTitle: string;
  vetTipTitle: string;
  prevRule: string;
  nextRule: string;
  backLink: string;
  titleSuffix: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}

export const GOLDEN_RULES_PAGE_I18N: Record<Lang, GoldenRulesPageI18n> = {
  en: {
    badge: "4 GOLDEN RULES // BUYER'S GUIDE",
    ruleBadgePrefix: 'RULE',
    reviewedBy: 'Reviewed by: Veterinary Canine Nutritionist',
    whatToLookForTitle: 'What to Look for on the Label',
    redFlagsTitle: 'Red Flags & Fillers to Avoid',
    fullBreakdown: 'In-Depth Scientific Breakdown',
    checklistTitle: 'Label Inspection Checklist',
    vetTipTitle: 'Clinical Nutritionist Recommendation',
    prevRule: 'Previous Rule',
    nextRule: 'Next Rule',
    backLink: 'Back to Best Dog Food Guide',
    titleSuffix: 'Golden Rule for Choosing Dog Food | Dog Food Planner',
    ctaTitle: 'Calculate Your Dog’s Exact Daily Food Grams',
    ctaDesc: 'Whether feeding fresh food, raw, or premium kibble, get precise daily portion weights tailored to your dog.',
    ctaBtn: 'Calculate Meal Portions Now →',
  },
  es: {
    badge: '4 REGLAS DE ORO // GUÍA DE COMPRA',
    ruleBadgePrefix: 'REGLA',
    reviewedBy: 'Revisado por: Nutricionista Canino Veterinario',
    whatToLookForTitle: 'Qué Buscar en la Etiqueta',
    redFlagsTitle: 'Señales de Alerta y Rellenos a Evitar',
    fullBreakdown: 'Análisis Científico Detallado',
    checklistTitle: 'Lista de Control para Examinar la Etiqueta',
    vetTipTitle: 'Recomendación Clínica Veterinaria',
    prevRule: 'Regla Anterior',
    nextRule: 'Siguiente Regla',
    backLink: 'Volver a la Guía del Mejor Alimento',
    titleSuffix: 'Regla de Oro para Elegir Comida Canina | Dog Food Planner',
    ctaTitle: 'Calcula las Raciones Exactas para tu Perro',
    ctaDesc: 'Tanto si alimentas con comida fresca, dieta cruda o pienso de alta gama, obtén las cantidades exactas.',
    ctaBtn: 'Calcular Ración Diaria Ahora →',
  },
  ja: {
    badge: '4大原則 // 失敗しないフード選びガイド',
    ruleBadgePrefix: '原則',
    reviewedBy: '監修：獣医臨床栄養専門医',
    whatToLookForTitle: 'パッケージ裏面で確認すべき良質成分',
    redFlagsTitle: '絶対に避けるべき危険な原材料・増量剤',
    fullBreakdown: '獣医栄養学に基づく詳細解説',
    checklistTitle: 'フード選びのラベル確認チェックリスト',
    vetTipTitle: '臨床栄養医からのアドバイス',
    prevRule: '前の原則',
    nextRule: '次の原則',
    backLink: 'おすすめドッグフード総合ガイドに戻る',
    titleSuffix: '最高のドッグフードを選ぶための原則 | Dog Food Planner',
    ctaTitle: '愛犬に最適な日々の給餌量を計算する',
    ctaDesc: 'フレッシュフード、生肉BARF食、プレミアムカリカリのいずれでも、愛犬に最適なグラム数とカロリーがすぐ分かります。',
    ctaBtn: '今すぐ適正給餌量を計算する →',
  },
  fr: {
    badge: '4 RÈGLES D’OR // GUIDE D’ACHAT',
    ruleBadgePrefix: 'RÈGLE',
    reviewedBy: 'Vérifié par : Nutritionniste Canin Vétérinaire',
    whatToLookForTitle: 'Ce qu’il Faut Rechercher sur l’Étiquette',
    redFlagsTitle: 'Signaux d’Alerte et Additifs à Proscrire',
    fullBreakdown: 'Analyse Scientifique Complète',
    checklistTitle: 'Check-list de Vérification de la Composition',
    vetTipTitle: 'Recommandation Clinique Vétérinaire',
    prevRule: 'Règle précédente',
    nextRule: 'Règle suivante',
    backLink: 'Retour au Guide du Meilleur Aliment',
    titleSuffix: 'Règle d’Or pour Choisir l’Alimentation Canina | Dog Food Planner',
    ctaTitle: 'Calculez la Ration Quotidienne Exacte de Votre Chien',
    ctaDesc: 'Que vous choisissiez une ration fraîche, du cru ou des croquettes de haute qualité, obtenez le grammage exact.',
    ctaBtn: 'Calculer les Portions Maintenant →',
  },
  de: {
    badge: '4 GOLDENE REGELN // KAUFBERATUNG',
    ruleBadgePrefix: 'REGEL',
    reviewedBy: 'Geprüft von: Tierärztlicher Ernährungsberater',
    whatToLookForTitle: 'Worauf Sie auf der Zutatenliste achten müssen',
    redFlagsTitle: 'Warnsignale & billige Füllstoffe meiden',
    fullBreakdown: 'Wissenschaftliche Detailanalyse',
    checklistTitle: 'Prüf-Checkliste für Futteretiketten',
    vetTipTitle: 'Klinische tierärztliche Empfehlung',
    prevRule: 'Vorherige Regel',
    nextRule: 'Nächste Regel',
    backLink: 'Zurück zur Futter-Bestenliste',
    titleSuffix: 'Goldene Regel der Futterauswahl | Dog Food Planner',
    ctaTitle: 'Berechnen Sie die exakte Futtermenge für Ihren Hund',
    ctaDesc: 'Ob schonendes Frischfutter, Rohfütterung oder Premium-Trockenfutter: Berechnen Sie die exakten Tagesportionen.',
    ctaBtn: 'Tagesportion jetzt berechnen →',
  },
  pt: {
    badge: '4 REGRAS DE OURO // GUIA DE COMPRA',
    ruleBadgePrefix: 'REGRA',
    reviewedBy: 'Revisado por: Nutricionista Veterinário Canino',
    whatToLookForTitle: 'O Que Buscar no Rótulo do Alimento',
    redFlagsTitle: 'Sinais de Alerta e Ingredientes a Evitar',
    fullBreakdown: 'Análise Científica Aprofundada',
    checklistTitle: 'Checklist para Inspeção do Rótulo',
    vetTipTitle: 'Recomendação Clínica Veterinária',
    prevRule: 'Regra Anterior',
    nextRule: 'Próxima Regra',
    backLink: 'Voltar ao Guia da Melhor Ração',
    titleSuffix: 'Regra de Ouro para Escolher a Ração Canina | Dog Food Planner',
    ctaTitle: 'Calcule a Porção Diária Exata do Seu Cão',
    ctaDesc: 'Alimentação natural fresca, comida crua BARF ou ração seca premium: descubra a gramatura precisa diária.',
    ctaBtn: 'Calcular Porção Diária Agora →',
  },
  ko: {
    badge: '4대 황금 원칙 // 구매 가이드',
    ruleBadgePrefix: '원칙',
    reviewedBy: '검수: 수의 임상 영양학 전문의',
    whatToLookForTitle: '라벨에서 확인해야 할 필수 성분',
    redFlagsTitle: '피해야 할 위험 성분 및 저가 충전재',
    fullBreakdown: '수의학 기반 심층 과학 분석',
    checklistTitle: '사료 성분표 확인 체크리스트',
    vetTipTitle: '임상 수의사의 핵심 조언',
    prevRule: '이전 원칙',
    nextRule: '다음 원칙',
    backLink: '최고의 사료 종합 가이드로 돌아가기',
    titleSuffix: '사료 선택 4대 황금 원칙 | Dog Food Planner',
    ctaTitle: '우리 아이 맞춤 일일 사료 급여량 계산하기',
    ctaDesc: '자연 화식, 생식 BARF, 프리미엄 건식 사료 등 식단에 따른 정확한 하루 급여량(g)과 칼로리를 확인하세요.',
    ctaBtn: '맞춤 급여량 계산하기 →',
  },
  it: {
    badge: '4 REGOLE D’ORO // GUIDA ALL’ACQUISTO',
    ruleBadgePrefix: 'REGOLA',
    reviewedBy: 'Revisionato da: Medico Veterinario Nutrizionista',
    whatToLookForTitle: 'Cosa Cercare sull’Etichetta del Cibo',
    redFlagsTitle: 'Segnali d’Allarme e Ingredienti da Evitare',
    fullBreakdown: 'Approfondimento Scientifico Completo',
    checklistTitle: 'Checklist per l’Ispezione dell’Etichetta',
    vetTipTitle: 'Raccomandazione Clinica Veterinaria',
    prevRule: 'Regola Precedente',
    nextRule: 'Regola Successiva',
    backLink: 'Torna alla Guida al Miglior Cibo',
    titleSuffix: 'Regola d’Oro per la Scelta del Cibo per Cani | Dog Food Planner',
    ctaTitle: 'Calcola la Dose Giornaliera Esatta per il Tuo Cane',
    ctaDesc: 'Che tu scelga cibo fresco casalingo, dieta BARF o crocchette premium: trova i grammi giornalieri esatti.',
    ctaBtn: 'Calcola la Razione Quotidiana Ora →',
  },
};

const GOLDEN_RULES_DATA: Record<Lang, GoldenRule[]> = {
  en: [
    {
      slug: 'named-animal-protein-first',
      ruleNumber: 1,
      title: '1. Named Animal Protein First',
      desc: 'Look for "Deboned Turkey", "Beef", or "Wild Salmon" as the primary ingredient rather than ambiguous generic "meat meal".',
      readMore:
        "Ingredients are listed by pre-cooking weight on commercial pet food labels. Whole named meats (such as 'Deboned Turkey', 'Fresh Beef', or 'Wild Alaskan Salmon') supply essential amino acids like taurine, arginine, and carnitine in their most bioavailable form.\n\nAvoid generic terms like 'animal derivatives', 'poultry meal', or 'meat and bone meal', which allow manufacturers to blend low-grade rendered waste from unspecified animal species without updating packaging.\n\nBe mindful of 'ingredient splitting' as well: brands frequently split carbohydrates into separate entries (e.g. peas, pea flour, pea protein) so that the meat appears first on the list, even when carbohydrates make up the majority of the food.\n\nConcentrated named meals—such as 'Dehydrated Lamb Meal' or 'Wild Salmon Meal'—are acceptable when transparently named, as their moisture has already been removed before cooking, providing a dense source of animal protein.",
      whatToLookFor: [
        'Named real muscle meat as the very first ingredient (e.g., Deboned Turkey, Grass-Fed Beef)',
        'Explicit single-source animal meals (e.g., Dehydrated Salmon Meal, Lamb Meal)',
        'Clear organ meat disclosure with species named (e.g., Beef Liver, Turkey Hearts)',
      ],
      redFlags: [
        'Vague collective terms: "Meat and animal derivatives" or "Poultry by-product meal"',
        'Ingredient splitting tricks (splitting peas into peas, pea starch, and pea flour)',
        'Unidentified animal fats (e.g., generic "animal fat" without species origin)',
      ],
      checklist: [
        'Check the first 3 ingredients: at least 2 should be named animal proteins.',
        'Verify that the animal species is explicitly named for every single protein and fat source.',
        'Watch for high legume inclusion (lentils, peas, chickpeas) in the top 5 ingredients.',
      ],
      vetTip:
        'Dogs require 22 essential and non-essential amino acids to sustain muscle synthesis, immune defense, and cardiac health. Named animal proteins provide complete amino acid profiles with high biological bioavailability that plant proteins simply cannot match.',
    },
    {
      slug: 'high-biological-moisture',
      ruleNumber: 2,
      title: '2. High Biological Moisture (>70%)',
      desc: 'Dry kibble (8-10% moisture) causes chronic low-grade dehydration. Always add fresh toppers or rehydrate with warm bone broth.',
      readMore:
        'In the wild, canine ancestral prey animals consist of 70% to 75% water. Dogs have an evolutionary low thirst reflex because their physiology expects to absorb hydration directly through their food. Relying entirely on dry kibble (which contains only 8–10% moisture) leaves dogs in a persistent state of low-grade dehydration.\n\nOver years, concentrated urine places intense strain on the kidneys and creates an ideal environment for struvite and calcium oxalate bladder stones to form.\n\nIf you feed kibble, always incorporate moisture: rehydrate meals 1:1 with warm low-sodium bone broth, filtered water, or plain kefir, or top kibble with fresh steamed meats and organ puree to safeguard kidney function.',
      whatToLookFor: [
        'Diets with natural moisture content above 70% (gently cooked fresh, raw BARF, or high-moisture canned)',
        'Warm bone broth made without onions, garlic, or added sodium for hydration',
        'Fresh hydrating vegetable and fruit toppers like zucchini, pumpkin, or blueberries',
      ],
      redFlags: [
        'Feeding bone-dry extruded kibble for years with zero supplemental moisture',
        'High-sodium store-bought gravies or processed meat sauces with artificial thickeners',
        'Concentrated, dark yellow or cloudy urine indicating chronic subclinical dehydration',
      ],
      checklist: [
        'If feeding dry food, add equal parts warm broth or warm water and let sit 10 minutes before serving.',
        'Rotate in fresh human-grade foods with 75%+ natural moisture at least once daily.',
        'Monitor urine color and volume: light straw-yellow indicates ideal renal hydration.',
      ],
      vetTip:
        'Kidney disease is among the leading causes of mortality in senior domestic dogs. Introducing daily bioavailable moisture through broths and fresh food relieves osmotic stress on the renal nephrons and significantly cuts crystal formation risk.',
    },
    {
      slug: 'zero-synthetic-preservatives',
      ruleNumber: 3,
      title: '3. Zero Synthetic Preservatives',
      desc: 'Strictly avoid BHA, BHT, ethoxyquin, propylene glycol, and artificial food colorings.',
      readMore:
        'To achieve 18–24 month shelf lives, budget pet foods rely on chemical antioxidants like BHA (butylated hydroxyanisole), BHT (butylated hydroxytoluene), and ethoxyquin. Scientific studies have flagged BHA and BHT as potential endocrine disruptors and carcinogens, while ethoxyquin—originally designed as a pesticide—has been tied to liver toxicity and allergies.\n\nAdditionally, artificial dyes like Red 40, Yellow 5, and Blue 2 serve purely cosmetic purposes for human pet owners while triggering dermatitis, chronic itching, and gastrointestinal inflammation in sensitive dogs.\n\nPrioritize foods preserved strictly with natural antioxidants: mixed tocopherols (Vitamin E), rosemary extract, and citric acid. These keep fats fresh safely without systemic toxicity.',
      whatToLookFor: [
        'Natural fat stabilizers: Mixed Tocopherols (Vitamin E), Rosemary Extract, and Citric Acid',
        'Clean expiration windows (typically 12 to 16 months, indicating natural preservative systems)',
        'Airtight barrier packaging with one-way freshness valves rather than permeable paper sacks',
      ],
      redFlags: [
        'Synthetic chemical preservatives: BHA (E320), BHT (E321), Ethoxyquin, or Propylene Glycol',
        'Petroleum-derived color additives: Red #40, Yellow #5, Yellow #6, Blue #2, or Titanium Dioxide',
        'Added sugars, corn syrup, or artificial chemical sweeteners used to mask rancidity',
      ],
      checklist: [
        'Check the ingredient panel for the words "preserved with mixed tocopherols".',
        'Verify that kibble pieces have a natural earthy brown hue without colorful red/green dyes.',
        'Never feed kibble from an opened bag past 6 weeks; store in an airtight container in a cool spot.',
      ],
      vetTip:
        'Chemical preservatives accumulate in hepatic and renal tissue over a dog’s lifetime. Opting for natural tocopherols drastically lowers the toxic burden and prevents chronic allergic dermatitis flare-ups.',
    },
    {
      slug: 'controlled-carbohydrates',
      ruleNumber: 4,
      title: '4. Controlled Carbohydrates (<25%)',
      desc: 'Dogs lack salivary amylase. High-starch diets overtax the pancreas and accelerate obesity.',
      readMore:
        'Dogs are facultative carnivores with zero biological requirement for refined carbohydrates. Unlike humans, dogs produce no salivary amylase to start breaking down starches during chewing; their pancreas must shoulder the entire enzymatic load of digesting complex carbohydrates.\n\nBecause pet food regulations do not mandate carbohydrate disclosure on guaranteed analysis panels, many commercial kibbles quietly hide 45% to 60% starch from corn, wheat, white potatoes, or tapioca simply to bind dry pellets together.\n\nExcessive glycemic loads trigger rapid insulin spikes, systemic inflammation, chronic ear infections, and accelerate canine obesity. Calculate carb content using the Nitrogen-Free Extract formula: 100% minus (Protein + Fat + Fiber + Moisture + Ash). Strive for foods under 25% total carbohydrates.',
      whatToLookFor: [
        'Low glycemic carbohydrate percentage (under 25% on a dry matter basis)',
        'Wholesome ancestral complex carb sources: steel-cut oats, quinoa, sweet potatoes, or pumpkin',
        'High natural protein and moderate healthy animal fats providing primary metabolic energy',
      ],
      redFlags: [
        'Calculated carbohydrate load exceeding 45% to 60% of total dietary energy',
        'Cheap high-glycemic binders: brewer’s rice, corn gluten meal, wheat middlings, or tapioca starch',
        'Unexplained weight gain, recurring yeast ear infections, or post-meal lethargy',
      ],
      checklist: [
        'Calculate carbs: 100 - (Crude Protein + Crude Fat + Crude Fiber + Moisture + Ash % [est. 7%]).',
        'Look for foods where carbohydrates serve as prebiotic fiber rather than cheap calorie fillers.',
        'Avoid formulas listing multiple grain or starch derivatives among the first 4 ingredients.',
      ],
      vetTip:
        'Canine insulin spikes from high-glycemic diets feed systemic yeast, cause chronic otitis externa (ear infections), and accelerate canine pancreatitis. Keeping carbs below 25% mimics ancestral evolutionary biology.',
    },
  ],
  es: [
    {
      slug: 'named-animal-protein-first',
      ruleNumber: 1,
      title: '1. Proteína Animal Específica en Primer Lugar',
      desc: 'Busca "Pavo Deshuesado", "Ternera" o "Salmón Fresco" en lugar de harinas cárnicas anónimas.',
      readMore:
        'Los ingredientes en el etiquetado de alimentos para mascotas se ordenan por peso antes de la cocción. Las carnes enteras y claramente identificadas (como «Pavo deshuesado», «Ternera fresca» o «Salmón del Pacífico») aportan aminoácidos esenciales como taurina, arginina y carnitina en su forma más biodisponible.\n\nEvita términos ambiguos como «derivados de origen animal», «harina de carne» o «subproductos de ave», que permiten a los fabricantes usar despojos y restos de procedencia indefinida sin actualizar el envase.\n\nTen cuidado con la «división de ingredientes» (ingredient splitting): algunas marcas desglosan los carbohidratos en varios componentes (guisantes, almidón de guisante y proteína de guisante) para que la carne figure engañosamente en primer lugar, cuando en realidad los carbohidratos predominan en la fórmula.\n\nLas harinas de carne con nombre específico —como «Harina de cordero deshidratado» o «Harina de salmón»— son aceptables si son transparentes, ya que se pesan sin agua y aportan una alta concentración de proteína animal real.',
      whatToLookFor: [
        'Carne muscular real identificada como 1º ingrediente (ej. Pavo deshuesado, Ternera fresca)',
        'Harinas cárnicas de fuente única declarada (ej. Harina de salmón salvaje, Harina de cordero)',
        'Órganos nobles con especie indicada (ej. Hígado de vacuno, Corazón de pavo)',
      ],
      redFlags: [
        'Términos genéricos opacos: "Subproductos cárnicos" o "Harinas de carne y huesos"',
        'Truco de división de ingredientes para enmascarar exceso de legumbres',
        'Grasas indeterminadas (ej. "Grasa animal" sin especificar si es pollo, cerdo o vaca)',
      ],
      checklist: [
        'Revisa los 3 primeros ingredientes: al menos 2 deben ser fuentes de proteína animal identificada.',
        'Comprueba que el animal de origen esté claramente especificado en todas las grasas y carnes.',
        'Evita marcas que sitúen harinas genéricas o subproductos antes del 4º ingrediente.',
      ],
      vetTip:
        'Los perros necesitan aminoácidos esenciales biodisponibles para mantener su masa muscular y función cardíaca. Las carnes nobles identificadas aportan una asimilación proteica que las proteínas vegetales no pueden replicar.',
    },
    {
      slug: 'high-biological-moisture',
      ruleNumber: 2,
      title: '2. Humedad Biológica Alta (>70%)',
      desc: 'El pienso seco causa deshidratación crónica subclínica. Añade siempre toppers frescos o caldos nutritivos.',
      readMore:
        'En la naturaleza, las presas de las que descienden los perros contienen entre un 70% y un 75% de agua. Los perros tienen un reflejo de sed instintivamente bajo, ya que su organismo espera hidratarse principalmente a través de la comida. Alimentarlos exclusivamente con pienso seco (que solo contiene un 8-10% de humedad) los somete a un estado constante de deshidratación subclínica.\n\nCon los años, una orina excesivamente concentrada sobrecarga los riñones e incrementa de forma drástica el riesgo de cálculos vesicales de estruvita y oxalato de calcio.\n\nSi das pienso, incorpora siempre humedad: rehidrata la ración en proporción 1:1 con caldo de huesos tibio (sin sal ni cebolla), agua filtrada o kéfir natural, o añade toppers de carne fresca para proteger su salud renal.',
      whatToLookFor: [
        'Dietas con humedad natural superior al 70% (cocinada al vapor, BARF cruda o latas completas)',
        'Caldo de huesos casero o comercial sin sal, ajo ni cebolla para rehidratar',
        'Toppers vegetales y de carne fresca con alto aporte de agua celular',
      ],
      redFlags: [
        'Alimentar solo con pienso seco durante años sin añadir una sola gota de humedad',
        'Salsas industriales ricas en sodio o espesantes artificiales',
        'Orina oscura, concentrada o con olor fuerte, síntoma de estrés renal',
      ],
      checklist: [
        'Si usas pienso seco, añade la misma cantidad de caldo tibio y déjalo reposar 10 minutos.',
        'Incorpora al menos una comida o porción húmeda al día para proteger los riñones.',
        'Observa el color de la orina: un tono amarillo paja claro confirma una hidratación adecuada.',
      ],
      vetTip:
        'La insuficiencia renal crónica es una de las principales causas de muerte en perros de edad avanzada. Aportar hidratación diaria en el propio plato previene la formación de cristales urinarios y reduce la sobrecarga renal.',
    },
    {
      slug: 'zero-synthetic-preservatives',
      ruleNumber: 3,
      title: '3. Cero Conservantes Sintéticos',
      desc: 'Evita rotundamente aditivos químicos como BHA, BHT, etoxiquina y colorantes artificiales.',
      readMore:
        'Para lograr una caducidad de 18 a 24 meses, muchos piensos industriales emplean antioxidantes químicos como el BHA (butilhidroxianisol), el BHT (butilhidroxitolueno) y la etoxiquina. Estudios científicos han catalogado al BHA y BHT como posibles disruptores endocrinos y cancerígenos, mientras que la etoxiquina (diseñada originalmente como pesticida) se asocia con daños hepáticos y reacciones alérgicas.\n\nAdemás, los colorantes artificiales (como Rojo 40 o Amarillo 5) solo buscan hacer el producto visualmente atractivo para el dueño, pero provocan dermatitis, picor crónico e inflamación gastrointestinal en perros sensibles.\n\nElige siempre marcas conservadas con antioxidantes naturales: tocoferoles mixtos (Vitamina E), extracto de romero y ácido cítrico. Protegen las grasas de forma inocua sin poner en riesgo la salud de tu perro.',
      whatToLookFor: [
        'Conservantes 100% naturales: Tocoferoles mixtos (Vitamina E), extracto de romero y ácido cítrico',
        'Fechas de caducidad naturales (12 a 16 meses, señal de antioxidantes naturales)',
        'Envases con barrera hermética y válvula desgasificadora de frescura',
      ],
      redFlags: [
        'Conservantes químicos de síntesis: BHA, BHT, Etoxiquina o Propilenglicol',
        'Colorantes químicos artificiales (Rojo 40, Amarillo 5, Dióxido de titanio)',
        'Azúcares añadidos o jarabes artificiales para ocultar ingredientes rancios',
      ],
      checklist: [
        'Busca explícitamente en la lista de aditivos: "conservado con tocoferoles naturales".',
        'Verifica que el color de las croquetas sea homogéneo y marrón natural, sin tonos rojos o verdes.',
        'Nunca utilices una bolsa de pienso abierta después de 6 semanas; consérvala cerrada y fresca.',
      ],
      vetTip:
        'Los aditivos químicos se acumulan en el hígado y los riñones a lo largo de los años. Elegir antioxidantes naturales protege el sistema inmunológico y minimiza los brotes de alergia cutánea.',
    },
    {
      slug: 'controlled-carbohydrates',
      ruleNumber: 4,
      title: '4. Carbohidratos Controlados (<25%)',
      desc: 'Los perros carecen de amilasa salival. El exceso de almidón sobrecarga el páncreas y causa obesidad.',
      readMore:
        'Los perros son carnívoros facultativos y no tienen un requerimiento nutricional biológico de carbohidratos refinados. A diferencia de las personas, los perros no producen amilasa salival para descomponer los almidones en la boca; todo el trabajo enzimático recae directamente sobre su páncreas.\n\nComo la normativa no exige indicar el porcentaje de carbohidratos en la etiqueta, muchos piensos comerciales ocultan entre un 45% y un 60% de almidón procedente de maíz, trigo o tapioca solo para dar consistencia a la croqueta.\n\nLas dietas altas en índice glucémico causan picos continuos de insulina, inflamación sistémica, otitis crónicas y favorecen la obesidad canina. Puedes calcular los carbohidratos restando a 100 la suma de proteína, grasa, fibra, humedad y cenizas. Prioriza siempre fórmulas con menos del 25% de carbohidratos.',
      whatToLookFor: [
        'Nivel de carbohidratos estimado por debajo del 25% sobre materia seca',
        'Fuentes de carbohidratos complejos de bajo índice glucémico (avena, calabaza, batata)',
        'Alto porcentaje de proteínas reales y grasas animales sanas como fuente energética principal',
      ],
      redFlags: [
        'Contenido de carbohidratos superior al 45-55% de la ración diaria',
        'Rellenos glucémicos baratos: arroz cervecero, gluten de maíz, salvado o harina de trigo',
        'Problemas repetidos de otitis por levaduras, sobrepeso o letargo posprandial',
      ],
      checklist: [
        'Calcula carbohidratos: 100 - (Proteína bruta + Grasa bruta + Fibra bruta + Humedad + Cenizas ~7%).',
        'Descarta alimentos que tengan múltiples harinas de grano en los primeros 4 ingredientes.',
        'Prefiere alimentos donde las verduras aporten fibra prebiótica y no almidón vacío.',
      ],
      vetTip:
        'El exceso de almidón alimenta la proliferación de levaduras y sobrecarga el páncreas canino. Limitar los carbohidratos a menos del 25% previene la diabetes y estabiliza el peso corporal.',
    },
  ],
  ja: [
    {
      slug: 'named-animal-protein-first',
      ruleNumber: 1,
      title: '1. 原材料の筆頭が明確な動物性生肉であること',
      desc: '「肉副産物粉末」や「家禽ミール」などの曖昧な表記ではなく、「生骨抜き七面鳥肉」「牛肉」「生サーモン」と具体的に明記されたものを選びましょう。',
      readMore:
        'ペットフードの原材料表示は、調理前の重量が多い順に記載されます。「生骨抜き七面鳥」や「新鮮な牛肉」のように具体的な動物名が記載された肉は、タウリンやアルギニン、カルニチンといった必須アミノ酸を最も消化吸収しやすい形で供給します。\n\n「動物性油脂」「肉副産物粉末」「家禽ミール」といった曖昧な総称表記は、由来不明の低品質なレンダリング肉が使われている恐れがあるため避けてください。\n\nまた「原材料の分割表記(イングリディエント・スプリッティング)」にも注意が必要です。エンドウ豆、エンドウ豆デンプン、エンドウ豆タンパク質のように炭水化物を細分化して記載することで、実質的には炭水化物が多いにもかかわらず肉を筆頭に見せかける手法があります。\n\n「乾燥ラム肉粉」や「サーモンミール」のように動物名が明記されたミールは、水分を除去した高濃度なタンパク源となるため、透明性の高い良質な製品であれば問題ありません。',
      whatToLookFor: [
        '原材料の第1位に具体的な動物肉（骨抜き七面鳥肉、グラスフェッド生牛肉など）が記載されていること',
        '単一の動物種が特定された乾燥ミール（乾燥サーモンミール、ラムミールなど）',
        '心臓やレバーなど栄養価の高い内臓部位の由来動物が明記されていること',
      ],
      redFlags: [
        '「家禽ミール」「動物副産物」「ミートボーンミール」などの出所不明な総称表記',
        '肉を1番目に見せるための豆類・穀類の分割記載（スプリッティング）',
        '動物種が特定されていない「動物性油脂」',
      ],
      checklist: [
        '原材料の先頭3つのうち、少なくとも2つが明確な動物性タンパク質であることを確認。',
        'すべてのタンパク質・脂質において「何の動物か」が特定されているかチェック。',
        '植物性タンパク濃縮物でタンパク質数値を水増ししていないか精査。',
      ],
      vetTip:
        '犬の筋肉や心臓機能の維持には良質な動物性アミノ酸が不可欠です。具体的な動物名が明記されたタンパク源を選ぶことが、消化器への負担を減らし健康寿命を伸ばす第一歩です。',
    },
    {
      slug: 'high-biological-moisture',
      ruleNumber: 2,
      title: '2. 70％以上の自然な水分を確保すること',
      desc: '水分8〜10％のドライフードのみを食べている犬は慢性的な水分不足になりがちです。必ずウェットフードや骨スープを足しましょう。',
      readMore:
        '犬の祖先が野生で捕食していた獲物の肉は、約70〜75％が水分で構成されていました。そのため犬は水分を食事から摂取することに適応しており、水分を自発的にたくさん飲む反射が本質的に強くありません。水分が8〜10％しか含まれないドライフードのみを与え続けると、慢性的な軽度脱水状態が常態化してしまいます。\n\n尿が長期間濃縮されると腎臓に多大な負担がかかり、ストルバイト結石やシュウ酸カルシウム結石などの尿路結石リスクが劇的に高まります。\n\nドライフードを主食にする場合は、塩分・ネギ類不使用の温かいボーンブロスやぬるま湯を1:1で加えてふやかすか、水分の多いウェットフードや蒸した肉のトッパーを加えて腎臓を保護してください。',
      whatToLookFor: [
        '水分70％以上を含む食事スタイル（フレッシュフード、生肉BARF食、高品質ウェット缶）',
        '塩分やネギ類を一切含まない無添加のボーンブロスによる水分補給',
        '蒸し野菜やベリー類など細胞内水分が豊富なフレッシュトッパーの活用',
      ],
      redFlags: [
        '長年にわたり水分を全く加えないカラカラのドライキブルのみを与え続けること',
        '塩分や化学調味料が多い市販のペット用グレービーソース',
        '色が濃く濁った尿（慢性的な脱水と腎臓への負担を示すサイン）',
      ],
      checklist: [
        'ドライフードを与える際は同量のぬるま湯や出汁を加え、10分ふやかしてから与える。',
        '1日1回は水分たっぷりのフレッシュフードやお肉のトッパーを取り入れる。',
        '愛犬の尿の色が健康的な薄い麦わら色になっているか毎日チェックする。',
      ],
      vetTip:
        '慢性腎不全はシニア犬の死因上位です。毎日の食事に適度な水分を含ませるだけで、腎臓の濾過負担が激減し、尿路結石の形成を大幅に抑制できます。',
    },
    {
      slug: 'zero-synthetic-preservatives',
      ruleNumber: 3,
      title: '3. 合成酸化防止剤・着色料の完全排除',
      desc: 'BHA、BHT、エトキシキン、プロピレングリコール、赤色○号などの発がん性・毒性が懸念される化学添加物は絶対に避けてください。',
      readMore:
        '賞味期限を1〜2年と長く保つため、安価なペットフードにはBHA(ブチルヒドロキシアニソール)、BHT(ジブチルヒドロキシトルエン)、エトキシキンといった合成化学抗酸化剤が添加されることがあります。これらは発がん性や内分泌かく乱作用(環境ホルモン)、肝機能障害との関連性が数多くの研究で指摘されています。\n\nさらに赤色40号や黄色5号などの合成着色料は、飼い主の購買意欲をそそるためだけに使われており、犬にとっては不要なばかりかアレルギー性皮膚炎や消化器症状の引き金になります。\n\nミックストコフェロール(ビタミンE)、ローズマリー抽出物、クエン酸など、天然由来の酸化防止剤で保存されている安全なフードを必ず選んでください。',
      whatToLookFor: [
        '天然由来の酸化防止剤：ミックストコフェロール（ビタミンE）、ローズマリー抽出物、クエン酸',
        '自然な賞味期限設定（12〜16ヶ月前後で管理されている製品）',
        '遮光性と密閉性に優れたアルミパッケージ（酸化防止バルブ付き）',
      ],
      redFlags: [
        '化学合成保存料：BHA、BHT、エトキシキン、プロピレングリコール',
        '石油系合成着色料：赤色40号、青色2号、黄色5号、二酸化チタン',
        '酸化した油脂の悪臭を隠すための人工香料や過剰な糖類・コーンシロップ',
      ],
      checklist: [
        '成分欄に「ミックストコフェロールで保存」と明記されているか確認。',
        '粒が不自然に赤や緑に着色されておらず、自然な茶色であることを確認。',
        '開封後1ヶ月〜1ヶ月半以内に使い切れるサイズを選ぶ。',
      ],
      vetTip:
        '化学合成保存料は生涯にわたり肝臓や腎臓に蓄積します。天然由来のビタミンEなどで保存されたフードを選ぶことで、アレルギー性皮膚炎や発がんリスクを大幅に低減できます。',
    },
    {
      slug: 'controlled-carbohydrates',
      ruleNumber: 4,
      title: '4. 炭水化物を25％未満に抑えること',
      desc: '犬の唾液には炭水化物を分解するアミラーゼがありません。過剰なデンプンはすい臓に負担をかけ肥満を引き起こします。',
      readMore:
        '犬は広義の肉食動物(通性肉食動物)であり、精製された炭水化物を必須とする生物学的理由はありません。人間と異なり、犬の唾液には口の中でデンプンを分解する消化酵素「アミラーゼ」が含まれておらず、デンプンの分解負担はすべてすい臓に集中します。\n\nペットフードの成分保証値には炭水化物量の表示義務がないため、多くのドライキブルは粒を固める製造上の都合から、トウモロコシや小麦、タピオカなどの炭水化物を45〜60％も含んでいるのが実態です。\n\n高血糖を引き起こす高デンプン食はインスリンの急上昇を招き、肥満、慢性炎症、外耳炎、すい炎のリスクを高めます。「100 − (粗タンパク質 ＋ 粗脂肪 ＋ 粗繊維 ＋ 水分 ＋ 粗灰分)」の計算式で炭水化物割合を算出し、25％未満に抑えられたフードを選びましょう。',
      whatToLookFor: [
        '乾物ベースで計算した炭水化物量が25％以下に抑えられた低GI設計',
        '食物繊維源としての良質な複合炭水化物（オートミール、キヌア、かぼちゃ）',
        'エネルギー源の大半が動物性タンパク質と良質な脂質から供給されている構成',
      ],
      redFlags: [
        '計算上の炭水化物量が50〜60％を超える高デンプン配合',
        'コーングルテンミール、小麦粉、醸造用米などの安価な穀物増量材',
        '原因不明の体重増加、マラセチア性の耳の痒み、食後の著しい倦怠感',
      ],
      checklist: [
        '「100 − (粗タンパク ＋ 粗脂肪 ＋ 粗繊維 ＋ 水分 ＋ 粗灰分約7％)」で炭水化物率を計算。',
        '原材料の先頭4つの大半が穀類やイモ類で占められていないか確認。',
        '炭水化物が単なるカロリー稼ぎではなくプレバイオティクス繊維として使われているか確認。',
      ],
      vetTip:
        '高GIのデンプン食は急激な血糖値スパイクを引き起こし、全身の慢性炎症や外耳炎を悪化させます。炭水化物を25％未満に抑えることは肥満やすい炎の最大の予防策です。',
    },
  ],
  fr: [
    {
      slug: 'named-animal-protein-first',
      ruleNumber: 1,
      title: '1. Protéine Animale Nommée en Premier Ingrédient',
      desc: 'Exigez « Dinde désossée », « Bœuf » ou « Saumon frais » plutôt que de vagues « farines de viandes ».',
      readMore:
        "Sur l'étiquette des aliments pour animaux, les ingrédients sont ordonnés par ordre de poids avant cuisson. Les viandes entières clairement identifiées (comme « Dinde désossée », « Bœuf frais » ou « Saumon sauvage ») apportent les acides aminés essentiels tels que la taurine, l'arginine et la carnitine sous leur forme la plus biodisponible.\n\nÉvitez absolument les dénominations floues telles que « sous-produits animaux », « farines de viandes » ou « graisses animales », qui masquent souvent des chutes d'abattoir de qualité médiocre.\n\nMéfiez-vous également du fractionnement des ingrédients (« ingredient splitting ») : certains fabricants divisent les glucides en plusieurs mentions (pois, farine de pois, protéines de pois) pour positionner artificiellement la viande en tête de liste.\n\nLes farines nommées avec précision — comme la « farine de saumon déshydraté » ou la « farine d'agneau » — restent tout à fait acceptables lorsqu'elles sont transparentes, car l'eau a déjà été retirée, offrant une excellente densité en protéines animales.",
      whatToLookFor: [
        'Viande musculaire noble nommée en 1er ingrédient (ex : Dinde désossée, Bœuf de pâturage)',
        'Farines déshydratées mono-espèce transparentes (ex : Farine de saumon sauvage)',
        'Abats nobles avec espèce animale indiquée (ex : Foie de bœuf, Cœurs de dinde)',
      ],
      redFlags: [
        'Termes vagues : « Sous-produits animaux » ou « Farines de viandes et d’os »',
        'Fractionnement d’ingrédients pour dissimuler un excès de féculents ou légumineuses',
        'Graisses animales non identifiées (ex : « Graisse animale » sans précision d’espèce)',
      ],
      checklist: [
        'Vérifiez les 3 premiers ingrédients : au moins 2 doivent être des protéines animales nommées.',
        'Assurez-vous que l’animal d’origine soit précisé pour toutes les viandes et graisses.',
        'Méfiez-vous des listes où les protéines végétales servent à gonfler le taux brut.',
      ],
      vetTip:
        'Le chien a besoin d’acides aminés d’origine animale hautement digestibles pour nourrir sa masse musculaire et son cœur. Les viandes clairement nommées garantissent une biodisponibilité optimale.',
    },
    {
      slug: 'high-biological-moisture',
      ruleNumber: 2,
      title: '2. Humidité Biologique Élevée (>70%)',
      desc: 'Les croquettes sèches provoquent une déshydratation chronique. Réhydratez toujours ou ajoutez des garnitures fraîches.',
      readMore:
        "Dans la nature, les proies dont descendent les canidés contiennent 70 à 75 % d'humidité. Les chiens ont un réflexe de soif naturellement faible car leur physiologie est programmée pour s'hydrater directement par leur nourriture. Ne consommer que des croquettes sèches (qui ne renferment que 8 à 10 % d'eau) installe le chien dans un état de déshydratation chronique insidieuse.\n\nÀ long terme, des urines constamment trop concentrées épuisent les reins et créent un terrain propice à la formation de calculs urinaires de struvite ou d'oxalate de calcium.\n\nSi vous donnez des croquettes, apportez systématiquement de l'humidité : réhydratez la ration à parts égales avec un bouillon d'os tiède non salé, de l'eau tiède filtrée ou du kéfir, ou complétez avec des garnitures fraîches riches en eau pour préserver la fonction rénale.",
      whatToLookFor: [
        'Régimes à humidité naturelle > 70 % (ration ménagère fraîche, BARF cru ou pâtées complètes)',
        'Bouillons d’os maison ou purs sans sel, oignon ni ail pour réhydrater',
        'Toppings frais riches en eau cellulaire (courgettes vapeur, potiron, myrtilles)',
      ],
      redFlags: [
        'Nourrir exclusivement aux croquettes sèches pendant des années sans aucune réhydratation',
        'Sauces industrielles chargées en sel et épaississants chimiques',
        'Urines foncées, troubles et très odorantes, signe de stress rénal',
      ],
      checklist: [
        'Si vous donnez des croquettes, ajoutez le même volume d’eau ou de bouillon tiède (10 min de repos).',
        'Intégrez au moins une composante fraîche ou humide par jour.',
        'Surveillez la couleur de l’urine : une teinte paille claire indique une excellente hydratation.',
      ],
      vetTip:
        'L’insuffisance rénale chronique est l’une des premières causes de mortalité chez le chien âgé. Restaurer l’humidité dans la gamelle soulage immédiatement les néphrons rénaux.',
    },
    {
      slug: 'zero-synthetic-preservatives',
      ruleNumber: 3,
      title: '3. Zéro Conservateur Chimique Synthétique',
      desc: 'Bannissez fermement le BHA, le BHT, l’éthoxyquine et les colorants artificiels.',
      readMore:
        "Pour garantir une conservation de 18 à 24 mois, de nombreux aliments industriels font appel à des antioxydants chimiques de synthèse comme le BHA (butylhydroxyanisol), le BHT (butylhydroxytoluène) et l'éthoxyquine. De nombreuses études scientifiques ont mis en évidence le potentiel cancérigène et perturbateur endocrinien du BHA/BHT, tandis que l'éthoxyquine (un ancien pesticide) est suspectée de toxicité hépatique.\n\nDe même, les colorants artificiels (Rouge 40, Jaune 5) ne servent qu'à séduire l'œil du maître tout en favorisant démangeaisons chroniques et intolérances digestives chez le chien.\n\nPrivilégiez exclusivement les formules conservées naturellement avec des tocophérols mixtes (Vitamine E), de l'extrait de romarin et de l'acide citrique. Ils protègent les graisses de l'oxydation en toute innocuité.",
      whatToLookFor: [
        'Antioxydants d’origine naturelle : Tocophérols mixtes (Vitamine E), extrait de romarin, acide citrique',
        'Durée de conservation raisonnable (12 à 16 mois, signe de conservateurs naturels)',
        'Emballages étanches avec valve fraîcheur unidirectionnelle',
      ],
      redFlags: [
        'Conservateurs chimiques synthétiques : BHA (E320), BHT (E321), Éthoxyquine, Propylène glycol',
        'Colorants artificiels dérivés du pétrole (Rouge 40, Jaune 5, Dioxyde de titane)',
        'Sucres ajoutés ou sirops servant à masquer l’amertume de graisses oxydées',
      ],
      checklist: [
        'Vérifiez la mention explicite « conservé avec des tocophérols naturels ».',
        'Assurez-vous que les croquettes ont une couleur marron naturelle homogène.',
        'Consommez tout sac ouvert dans les 6 semaines pour éviter le rancissement naturel.',
      ],
      vetTip:
        'Les additifs chimiques s’accumulent dans le foie et les reins au fil des ans. Bannir le BHA et le BHT réduit considérablement la charge toxique et apaise les dermatites allergiques.',
    },
    {
      slug: 'controlled-carbohydrates',
      ruleNumber: 4,
      title: '4. Teneur en Glucides Réduite (<25%)',
      desc: 'Le chien ne possède pas d’amylase salivaire. Trop d’amidon fatigue le pancréas et favorise l’obésité.',
      readMore:
        "Le chien est un carnivore opportuniste sans aucun besoin biologique en glucides raffinés. Contrairement aux humains, sa salive ne contient pas d'amylase pour amorcer la digestion des féculents dans la gueule ; l'intégralité du travail enzymatique repose donc sur son pancréas.\n\nComme la réglementation n'impose pas d'afficher le taux de glucides sur les paquets, beaucoup de croquettes conventionnelles en dissimulent 45 à 60 % (maïs, blé, fécule de pomme de terre ou tapioca) simplement pour agglomérer les croquettes lors de l'extrusion.\n\nCette surcharge en amidon à indice glycémique élevé provoque des pics d'insuline répétés, de l'inflammation systémique, des otites chroniques et favorise l'obésité. Calculez les glucides selon la formule de l'ENA : 100 % moins (Protéines + Matières grasses + Fibres + Humidité + Cendres). Visez impérativement moins de 25 % de glucides.",
      whatToLookFor: [
        'Taux de glucides calculé inférieur à 25 % sur matière sèche',
        'Sources de glucides complexes à faible index glycémique (avoine entière, potiron, patate douce)',
        'Énergie métabolisable provenant majoritairement des protéines et graisses animales saines',
      ],
      redFlags: [
        'Charge glucidique calculée dépassant 45 à 60 % de l’aliment',
        'Féculents bon marché : brisures de riz, gluten de maïs, farine de blé ou tapioca',
        'Prise de poids rapide, otites récurrentes à levures ou léthargie après les repas',
      ],
      checklist: [
        'Calculez les glucides : 100 - (Protéines brutes + Graisses + Fibres + Humidité + Cendres ~7%).',
        'Vérifiez que les féculents ne colonisent pas les 4 premiers ingrédients.',
        'Privilégiez les glucides apportés sous forme de fibres prébiotiques digestibles.',
      ],
      vetTip:
        'L’excès d’amidon favorise les proliférations de levures dans les oreilles et surcharge le pancréas. Maintenir les glucides sous 25 % est le geste préventif numéro un contre le diabète et le surpoids.',
    },
  ],
  de: [
    {
      slug: 'named-animal-protein-first',
      ruleNumber: 1,
      title: '1. Eindeutig deklariertes Fleisch an 1. Stelle',
      desc: 'Achten Sie auf „Frische Pute“, „Rindfleisch“ oder „Lachs“ statt diffuser „Fleischmehle“.',
      readMore:
        'Auf Tierfutteretiketten werden Zutaten nach ihrem Gewicht vor dem Kochen sortiert. Eindeutig deklariertes Frischfleisch (wie „Entbeinte Pute“, „Frisches Rindfleisch“ oder „Wildlachs“) liefert lebenswichtige Aminosäuren wie Taurin, Arginin und Carnitin in höchster Bioverfügbarkeit.\n\nVermeiden Sie schwammige Sammelbegriffe wie „tierische Nebenerzeugnisse“, „Fleischmehl“ oder „Geflügelmehl“, hinter denen sich minderwertige Schlachtabfälle undefinierter Tierarten verbergen können.\n\nAchten Sie zudem auf den Trick des „Zutaten-Splittings“: Hersteller teilen Kohlenhydrate oft in mehrere Einzelposten auf (z. B. Erbsen, Erbsenmehl und Erbsenprotein), damit das Fleisch auf dem Papier an erster Stelle steht, obwohl Kohlenhydrate den Hauptteil ausmachen.\n\nPräzise benannte Fleischmehle – wie „Getrocknetes Lammfleischmehl“ oder „Lachsmehl“ – sind bei transparenter Deklaration unbedenklich, da ihnen vor der Verarbeitung das Wasser entzogen wurde und sie konzentriertes tierisches Protein liefern.',
      whatToLookFor: [
        'Reines Muskelfleisch mit Tierart an 1. Stelle (z. B. Entbeinte Pute, Frisches Weiderind)',
        'Monoprotein-Trockenfleischmehle mit namentlicher Nennung (z. B. Lachsmehl, Lammfleischmehl)',
        'Hochwertige Innereien mit klarer Tierart (z. B. Rinderleber, Putenherzen)',
      ],
      redFlags: [
        'Diffuses Sammelsurium: „Fleisch und tierische Nebenerzeugnisse“ oder „Geflügelmehl“',
        'Zutaten-Splitting bei Erbsen oder Getreide zur Verschleierung des Kohlenhydratanteils',
        'Undefinierte Fette (z. B. „tierisches Fett“ ohne Angabe der Tierart)',
      ],
      checklist: [
        'Prüfen Sie die ersten 3 Zutaten: Mindestens 2 sollten klar benannte Fleischquellen sein.',
        'Stellen Sie sicher, dass bei jedem Fleisch und Fett die Tierart angegeben ist.',
        'Meiden Sie Produkte, die pflanzliche Proteinkonzentrate zur Eiweißanreicherung nutzen.',
      ],
      vetTip:
        'Hunde benötigen hochverdauliche tierische Aminosäuren für Muskelaufbau und Herzgesundheit. Eine eindeutige Fleischdeklaration schützt vor allergischen Reaktionen und minderwertigen Schlachtabfällen.',
    },
    {
      slug: 'high-biological-moisture',
      ruleNumber: 2,
      title: '2. Hohe biologische Feuchtigkeit (>70%)',
      desc: 'Reines Trockenfutter führt zu schleichender Dehydration. Immer mit Brühe anfeuchten oder frische Topper ergänzen.',
      readMore:
        'In freier Natur besteht die Nahrung wilder Caniden zu 70 bis 75 % aus Wasser. Hunde besitzen evolutionär bedingt ein schwaches Durstgefühl, da ihr Organismus darauf ausgelegt ist, Feuchtigkeit direkt über die Nahrung aufzunehmen. Die ausschließliche Fütterung von Trockenfutter (mit nur 8–10 % Restfeuchte) führt zu einer dauerhaften, leichten Dehydration.\n\nÜber Jahre hinweg überlastet hochkonzentrierter Urin die Nieren und begünstigt drastisch die Bildung von schmerzhaften Struvit- und Calciumoxalat-Blasensteinen.\n\nWenn Sie Trockenfutter füttern, fügen Sie immer Flüssigkeit hinzu: Weichen Sie die Kroketten im Verhältnis 1:1 mit lauwarmer, ungewürzter Knochenbrühe oder Wasser ein, oder ergänzen Sie die Mahlzeit mit frischen Fleischtoppern, um die Nierenfunktion zu schützen.',
      whatToLookFor: [
        'Fütterungsformen mit über 70 % natürlicher Feuchte (schonend gegart, BARF oder Nassfutter)',
        'Ungewürzte Knochenbrühe ohne Salz, Zwiebeln oder Knoblauch zum Einweichen',
        'Frische, feuchtigkeitsspendende Topper (Zucchini, Kürbis, Heidelbeeren)',
      ],
      redFlags: [
        'Jahrelange ausschließliche Fütterung von knochentrockenem Futter ohne Flüssigkeitszugabe',
        'Salzige Fertigsaucen mit künstlichen Verdickungsmitteln',
        'Dunkler, konzentrierter oder streng riechender Urin als Alarmsignal für Nierenbelastung',
      ],
      checklist: [
        'Trockenfutter immer mit lauwarmem Wasser oder Knochenbrühe 10 Minuten vorquellen lassen.',
        'Mindestens eine feuchtigkeitsreiche Mahlzeit oder Topper-Portion täglich integrieren.',
        'Die Urinfarbe kontrollieren: Helles Strohgelb zeigt eine gesunde Nierenhydrierung an.',
      ],
      vetTip:
        'Chronische Niereninsuffizienz zählt zu den häufigsten Todesursachen bei älteren Hunden. Feuchtigkeit direkt im Napf entlastet die Nierenfilter und beugt Blasensteinen vor.',
    },
    {
      slug: 'zero-synthetic-preservatives',
      ruleNumber: 3,
      title: '3. Verzicht auf synthetische Konservierungsstoffe',
      desc: 'Meiden Sie BHA, BHT, Ethoxyquin, Propylenglykol und künstliche Farbstoffe.',
      readMore:
        'Um eine Haltbarkeit von bis zu zwei Jahren zu gewährleisten, greifen Billigfutter oft zu synthetischen Antioxidantien wie BHA (Butylhydroxyanisol), BHT (Butylhydroxytoluol) und Ethoxyquin. Wissenschaftliche Untersuchungen stufen BHA und BHT als potenziell krebserregend und hormonell wirksam ein; Ethoxyquin (ursprünglich ein Pestizid) steht im Verdacht, Leberschäden auszulösen.\n\nAuch künstliche Farbstoffe dienen ausschließlich dem menschlichen Auge, belasten jedoch den Hundeorganismus und provozieren allergischen Juckreiz sowie Magen-Darm-Entzündungen.\n\nWählen Sie Futter, das ausschließlich mit natürlichen Antioxidantien haltbar gemacht wird: gemischte Tocopherole (Vitamin E), Rosmarinextrakt und Zitronensäure. Diese schützen Fette schonend ohne giftige Nebenwirkungen.',
      whatToLookFor: [
        'Natürliche Antioxidantien: Gemischte Tocopherole (Vitamin E), Rosmarinextrakt, Zitronensäure',
        'Vernünftige Mindesthaltbarkeit (12 bis 16 Monate als Zeichen natürlicher Konservierung)',
        'Luftdichte Verpackungen mit Frischeventil zur Sauerstoffvermeidung',
      ],
      redFlags: [
        'Synthetische Chemikalien: BHA (E320), BHT (E321), Ethoxyquin, Propylenglykol',
        'Künstliche Farbstoffe (z. B. Allurarot, Tartrazin, Titandioxid)',
        'Zugesetzter Zucker oder Sirup, um ranzig gewordene minderwertige Fette zu überdecken',
      ],
      checklist: [
        'Auf dem Etikett nach der Angabe „konserviert mit natürlichen Tocopherolen“ suchen.',
        'Prüfen, ob die Futterbrocken einheitlich erdbraun und nicht bunt gefärbt sind.',
        'Geöffnete Säcke stets innerhalb von maximal 6 Wochen aufbrauchen.',
      ],
      vetTip:
        'Chemische Konservierungsstoffe reichern sich in Leber und Nieren an. Der Wechsel zu Futter mit natürlichen Tocopherolen verringert die toxische Belastung und lindert chronischen Juckreiz.',
    },
    {
      slug: 'controlled-carbohydrates',
      ruleNumber: 4,
      title: '4. Geringer Kohlenhydratanteil (<25%)',
      desc: 'Hunde besitzen keine Speichelamylase. Hohe Stärkemengen überlasten die Bauchspeicheldrüse.',
      readMore:
        'Hunde sind fakultative Karnivoren ohne biologischen Bedarf an isolierten Kohlenhydraten. Im Gegensatz zum Menschen enthält der Speichel des Hundes keine Amylase, um Stärke bereits im Maul aufzuspalten; die gesamte enzymatische Verdauung lastet allein auf der Bauchspeicheldrüse.\n\nDa Hersteller den Kohlenhydratgehalt nicht auf der Packung angeben müssen, enthalten herkömmliche Trockenfutter oft 45 bis 60 % Stärke aus Mais, Weizen oder Tapioka, nur um den Kroketten bei der Extrusion Form zu geben.\n\nHohe Stärkemengen verursachen Blutzuckerspitzen, chronische Entzündungen, Ohrenentzündungen und fördern rasant Übergewicht. Berechnen Sie den Kohlenhydratanteil mit der NfE-Formel: 100 % minus (Rohprotein + Rohfett + Rohfaser + Feuchtigkeit + Rohasche). Bevorzugen Sie Futter mit unter 25 % Kohlenhydraten.',
      whatToLookFor: [
        'Berechneter Kohlenhydratanteil von unter 25 % in der Trockenmasse',
        'Komplexe, niedrigglykämische Ballaststoffquellen (Haferflocken, Kürbis, Süßkartoffel)',
        'Hauptenergieversorgung durch tierisches Eiweiß und gesunde Fette',
      ],
      redFlags: [
        'Versteckter Kohlenhydratanteil von über 45 bis 60 % der Gesamtenergie',
        'Billige Füllstoffe: Braureis, Maiskleber, Weizenfuttermehl oder Tapiokastärke',
        'Häufige Hefe-Ohrenentzündungen, Trägheit nach dem Fressen oder Übergewicht',
      ],
      checklist: [
        'Kohlenhydrate berechnen: 100 - (Rohprotein + Rohfett + Rohfaser + Feuchte + Rohasche ~7%).',
        'Produkte meiden, bei denen Getreide oder Stärke die ersten 4 Plätze belegen.',
        'Darauf achten, dass pflanzliche Zutaten als präbiotische Ballaststoffe dienen.',
      ],
      vetTip:
        'Zu viel Stärke nährt Hefepilze in den Ohren und überlastet die Bauchspeicheldrüse. Ein Kohlenhydratgehalt unter 25 % schützt vor Diabetes und unterstützt ein langes, schlankes Hundeleben.',
    },
  ],
  pt: [
    {
      slug: 'named-animal-protein-first',
      ruleNumber: 1,
      title: '1. Proteína Animal Específica no 1º Lugar da Composição',
      desc: 'Priorize «Peru Desossado», «Carne Bovina» ou «Salmão Fresco» em vez de genéricas «farinhas de subprodutos».',
      readMore:
        'No rótulo dos alimentos para cães, os ingredientes são listados por ordem de peso antes do cozimento. Carnes frescas e especificadas (como «Peru desossado», «Carne bovina fresca» ou «Salmão selvagem») fornecem aminoácidos essenciais cruciais como taurina, arginina e carnitina com máxima biodisponibilidade.\n\nFuja de descrições genéricas como «subprodutos de carne», «farinha de carnes» ou «derivados animais», que permitem a inclusão de resíduos de baixa qualidade de origens desconhecidas sem aviso prévio.\n\nFique atento também à divisão de ingredientes («ingredient splitting»): marcas costumam desmembrar carboidratos (como ervilha, amido de ervilha e proteína de ervilha) para que a carne pareça o ingrediente principal na lista, mesmo quando os carboidratos formam a maior parte da receita.\n\nFarinhas com origem declarada — como «Farinha de carne de cordeiro» ou «Farinha de salmão desidratado» — são legítimas quando transparentes, pois tiveram a água removida antes do preparo e entregam alta densidade de proteína animal.',
      whatToLookFor: [
        'Carne muscular real e identificada no topo dos ingredientes (ex: Peru desossado, Carne bovina fresca)',
        'Farinhas mono-proteicas com animal especificado (ex: Farinha de salmão, Farinha de cordeiro)',
        'Vísceras nobres com espécie declarada (ex: Fígado bovino, Coração de peru)',
      ],
      redFlags: [
        'Termos genéricos ocultos: "Farinha de subprodutos de aves" ou "Derivados de origem animal"',
        'Desmembramento de carboidratos para colocar carne ficticiamente em primeiro lugar',
        'Gordura animal sem especificação (ex: "Gordura animal" sem dizer se é frango, boi ou porco)',
      ],
      checklist: [
        'Verifique os 3 primeiros ingredientes: ao menos 2 devem ser proteínas animais nobres.',
        'Certifique-se de que a espécie de origem esteja identificada em todas as carnes e gorduras.',
        'Evite rações que usem glúten de milho ou soja para mascarar o teor proteico.',
      ],
      vetTip:
        'Cães exigem aminoácidos de origem animal com alta absorção biológica para manter massa magra e o coração saudável. Carnes nobres identificadas garantem a melhor nutrição celular.',
    },
    {
      slug: 'high-biological-moisture',
      ruleNumber: 2,
      title: '2. Alta Umidade Biológica (>70%)',
      desc: 'A ração seca causa desidratação crônica de baixo grau. Sempre adicione água, caldos ou alimentos úmidos.',
      readMore:
        'Na natureza, as presas ancestrais dos canídeos contêm entre 70% e 75% de água. Cães possuem um mecanismo de sede naturalmente lento, pois sua fisiologia espera absorver hidratação prioritariamente pela comida. Oferecer somente ração seca (que possui apenas 8% a 10% de umidade) mantém o cão em um estado contínuo de desidratação subclínica.\n\nCom o passar dos anos, a urina cronicamente concentrada sobrecarrega os rins e eleva bastante o perigo de cristais e cálculos vesicais de estruvita e oxalato de cálcio.\n\nSe você utiliza ração seca, sempre acrescente umidade: hidrate na proporção 1:1 com caldo de ossos morno sem tempero, água filtrada ou kefir natural, ou complemente com toppers de carnes frescas e cozidas para preservar os rins.',
      whatToLookFor: [
        'Formatos com umidade natural acima de 70% (comida natural cozida, dieta BARF crua ou enlatados completos)',
        'Caldo de ossos caseiro sem sal, alho ou cebola para reidratar os grãos',
        'Toppers frescos ricos em água estruturada (abobrinha, abóbora cozida, mirtilos)',
      ],
      redFlags: [
        'Alimentar exclusivamente com ração seca durante anos sem adicionar nenhuma umidade',
        'Molhos industriais processados repletos de sódio e espessantes químicos',
        'Urina escura, turva ou com odor muito forte (sinal de alerta de sobrecarga renal)',
      ],
      checklist: [
        'Ao servir ração seca, adicione a mesma medida de caldo morno ou água e aguarde 10 minutos.',
        'Introduza ao menos uma porção ou refeição fresca e úmida diariamente.',
        'Acompanhe a coloração da urina: amarelo palha claro reflete excelente hidratação.',
      ],
      vetTip:
        'A doença renal crônica é uma das principais causas de óbito em cães idosos. Garantir umidade biológica em cada refeição alivia a carga de filtração dos néfrons renais.',
    },
    {
      slug: 'zero-synthetic-preservatives',
      ruleNumber: 3,
      title: '3. Zero Conservantes Químicos Artificiais',
      desc: 'Evite terminantemente aditivos como BHA, BHT, etoxiquina e corantes sintéticos.',
      readMore:
        'Para alcançar prazos de validade de 18 a 24 meses, alimentos industriais econômicos recorrem a antioxidantes químicos como BHA (butil-hidroxianisol), BHT (butil-hidroxitolueno) e etoxiquina. Estudos científicos associam BHA e BHT a potencial cancerígeno e desregulação hormonal, enquanto a etoxiquina (criada inicialmente como pesticida) tem vínculos com toxicidade hepática.\n\nCorantes artificiais (como Vermelho 40 e Amarelo 5) são colocados unicamente para atrair os olhos humanos, mas frequentemente desencadeiam coceiras alérgicas, dermatites e distúrbios digestivos.\n\nExija fórmulas conservadas unicamente com antioxidantes de origem natural: tocoferóis mistos (Vitamina E), extrato de alecrim e ácido cítrico. Eles conservam as gorduras saudavelmente sem agredir o organismo.',
      whatToLookFor: [
        'Antioxidantes naturais: Tocoferóis mistos (Vitamina E), extrato de alecrim e ácido cítrico',
        'Prazos de validade saudáveis (12 a 16 meses, indicando conservação natural)',
        'Embalagens laminadas com barreira de oxigênio e válvula de frescor',
      ],
      redFlags: [
        'Conservantes químicos sintéticos: BHA, BHT, Etoxiquina ou Propilenoglicol',
        'Corantes artificiais derivados de petróleo (Vermelho 40, Amarelo 5, Dióxido de titânio)',
        'Açúcares ou xaropes adicionados para mascarar gorduras rançosas de baixa qualidade',
      ],
      checklist: [
        'Procure no rótulo a frase "conservado naturalmente com tocoferóis mistos".',
        'Verifique se os grãos possuem tonalidade marrom uniforme sem pedaços coloridos artificiais.',
        'Consuma pacotes abertos em até 6 semanas e guarde em local fresco e vedado.',
      ],
      vetTip:
        'Os conservantes químicos se acumulam nos órgãos vitais ao longo da vida do cão. Priorizar antioxidantes naturais diminui a carga tóxica e previne crises alérgicas de pele.',
    },
    {
      slug: 'controlled-carbohydrates',
      ruleNumber: 4,
      title: '4. Carboidratos Controlados (<25%)',
      desc: 'Cães não possuem amilase salivar. O excesso de amido sobrecarrega o pâncreas e acelera a obesidade.',
      readMore:
        'Cães são carnívoros facultativos e não possuem qualquer exigência biológica por carboidratos refinados. Diferente dos humanos, cães não produzem amilase salivar para iniciar a digestão de amidos na boca; toda a carga enzimática fica concentrada no pâncreas.\n\nComo as tabelas nutricionais não são obrigadas a estampar a porcentagem de carboidratos, muitas rações secas ocultam de 45% a 60% de amido derivado de milho, trigo ou mandioca para dar liga física aos grãos durante a extrusão.\n\nAlimentos de alto índice glicêmico provocam picos contínuos de insulina, inflamação crônica, infecções de ouvido e favorecem a obesidade canina. Calcule os carboidratos subtraindo de 100% a soma de proteína, gordura, fibra, umidade e matéria mineral. Busque alimentos com menos de 25% de carboidratos totais.',
      whatToLookFor: [
        'Nível estimado de carboidratos inferior a 25% na matéria seca',
        'Carboidratos complexos de baixo índice glicêmico (aveia em flocos, abóbora, batata-doce)',
        'Calorias fornecidas prioritariamente por proteínas animais e gorduras saudáveis',
      ],
      redFlags: [
        'Percentual de carboidratos ultrapassando 45% a 60% da fórmula total',
        'Fontes baratas de amido: quirera de arroz, farelo de trigo, glúten de milho ou fécula de mandioca',
        'Infecções de ouvido recorrentes por fungos (Malassezia) ou ganho excessivo de peso',
      ],
      checklist: [
        'Calcule carboidratos: 100 - (Proteína bruta + Extrato etéreo + Fibra + Umidade + Matéria mineral ~7%).',
        'Evite rações cujos primeiros 4 ingredientes sejam dominados por grãos e farinhas amiláceas.',
        'Priorize vegetais que sirvam como fibras prebióticas e não como amido puro de enchimento.',
      ],
      vetTip:
        'Dietas com excesso de amido causam picos de glicemia e alimentam fungos nas orelhas e patas. Manter carboidratos abaixo de 25% é o maior escudo contra obesidade e pancreatite.',
    },
  ],
  ko: [
    {
      slug: 'named-animal-protein-first',
      ruleNumber: 1,
      title: '1. 원재료 첫 번째 자리에 명확한 생육 표기',
      desc: '출처를 알 수 없는 ‘가금류 육골분’ 대신 ‘뼈를 바른 칠면조’, ‘소고기’, ‘생연어’가 명시되어 있는지 확인하세요.',
      readMore:
        "반려동물 사료 라벨의 원재료는 조리 전 무게가 무거운 순서대로 표기됩니다. '뼈를 바른 칠면조', '생소고기', '신선한 연어'처럼 구체적인 동물 명칭이 명시된 원육은 타우린, 아르기닌, 카르니틴 등 필수 아미노산을 가장 생체 이용률이 높은 형태로 제공합니다.\n\n'동물성 부산물', '육골분', '가금류 미ール'과 같이 모호한 일반 명칭은 출처를 알 수 없는 저급 렌더링 원료가 섞일 위험이 높으므로 피해야 합니다.\n\n또한 '원재료 쪼개기(Ingredient Splitting)' 꼼수도 주의 깊게 살펴야 합니다. 완두콩, 완두콩 전분, 완두콩 단백질처럼 탄수화물을 여러 항목으로 나누어 표기함으로써, 실제로는 탄수화물 비중이 더 높음에도 불구하고 고기가 첫 번째 성분인 것처럼 보이게 만드는 제조 방식이 있습니다.\n\n'탈수 양고기 분말'이나 '연어 미ール'처럼 구체적인 동물이 명시된 고품질 건조육은 제조 전 수분을 미리 제거한 상태이므로 투명하게 공개된 경우 훌륭한 고농축 동물성 단백질 공급원이 됩니다.",
      whatToLookFor: [
        '제1원료에 명확한 육류 명칭(뼈 바른 칠면조, 목초육 소고기 등) 표기',
        '단일 동물 출처가 명시된 건조 분말육(탈수 연어 미ール, 양고기 분말 등)',
        '동물 종이 밝혀진 신선한 내장육(소 간, 칠면조 심장 등)',
      ],
      redFlags: [
        '모호한 명칭: "가금류 부산물", "육골분", "동물성 유도체"',
        '고기가 첫 번째로 보이게 만들기 위한 콩류 쪼개기 표기',
        '어떤 동물인지 알 수 없는 모호한 "동물성 유지(Animal Fat)"',
      ],
      checklist: [
        '상위 3대 원재료 중 최소 2개 이상이 명확한 동물성 단백질원인지 확인.',
        '라벨에 기재된 모든 육류 및 오일의 동물 출처가 정확히 밝혀져 있는지 체크.',
        '식물성 단백질 농축물로 조단백질 수치를 인위적으로 부풀리지 않았는지 점검.',
      ],
      vetTip:
        '반려견의 탄탄한 근육과 심장 건강에는 동물성 필수 아미노산이 필수입니다. 출처가 명확한 육류가 주원료인 사료를 선택하는 것이 영양 결핍과 알레르기를 예방하는 기본입니다.',
    },
    {
      slug: 'high-biological-moisture',
      ruleNumber: 2,
      title: '2. 70% 이상의 풍부한 수분 공급',
      desc: '수분 8~10%의 건식 사료만 먹는 개는 만성적인 미세 탈수 상태에 빠집니다. 수제 화식이나 뼈 육수를 꼭 섞어주세요.',
      readMore:
        '야생에서 개의 조상이 섭취하던 먹이 동물은 수분 함량이 70~75%에 달합니다. 개는 진화 과정에서 식사를 통해 직접 수분을 섭취해왔기 때문에 갈증을 느끼고 물을 찾아 마시는 반사 신경이 사람에 비해 둔합니다. 수분이 8~10%에 불과한 건식 사료만 급여하면 만성적인 미세 탈수 상태가 지속되기 쉽습니다.\n\n장기간 농축된 소변은 신장에 막대한 부담을 주며, 스트루바이트 및 옥살산칼슘 방광 결석이 발생하기에 가장 취약한 환경을 만듭니다.\n\n건식 사료를 먹일 때는 반드시 수분을 보충해주세요. 염분과 양파류가 없는 따뜻한 본브로스나 미온수를 1:1 비율로 붓거나, 수분이 풍부한 저온 조리 화식 토퍼를 함께 급여하면 신장과 요로 건강을 효과적으로 지킬 수 있습니다.',
      whatToLookFor: [
        '자연 수분 70% 이상인 식단 구성(자연 화식, 생식 BARF, 고품질 주식 캔)',
        '나트륨, 양파, 마늘이 첨가되지 않은 순수 무염 본브로스로 수분 보충',
        '애호박, 단호박, 블루베리 등 세포 수분이 풍부한 신선한 채소 토퍼 활용',
      ],
      redFlags: [
        '수분 보충 없이 바짝 마른 건식 사료만 수년 동안 단독 급여하는 습관',
        '염분과 인공 증점제가 많이 들어간 시판 반려동물용 그레이비 소스',
        '진한 갈색이나 탁한 소변(신장 부담과 만성 탈수를 알리는 신호)',
      ],
      checklist: [
        '건식 사료 급여 시 동량의 따뜻한 물이나 육수를 붓고 10분간 불려 급여하기.',
        '하루 최소 1회 이상은 수분이 풍부한 자연식이나 습식 토퍼를 병행하기.',
        '소변 색깔이 건강한 연한 짚색(연노랑)을 띠는지 매일 확인하기.',
      ],
      vetTip:
        '만성 신부전은 노령견의 가장 대표적인 주요 사망 원인입니다. 매 식사에 생체 수분을 충분히 보충해주는 것만으로도 신장 네프론의 부담을 크게 덜어줄 수 있습니다.',
    },
    {
      slug: 'zero-synthetic-preservatives',
      ruleNumber: 3,
      title: '3. 화학 합성 방부제 및 인공 색소 배제',
      desc: 'BHA, BHT, 에톡시퀸, 프로필렌글리콜 등 유해성이 지적된 합성 첨가물을 철저히 피하십시오.',
      readMore:
        '1~2년의 긴 유통기한을 확보하기 위해 저가 사료에는 BHA(부틸히드록시아니솔), BHT(부틸히드록시톨루엔), 에톡시퀸과 같은 합성 화학 산화방지제가 흔히 쓰입니다. 다수의 연구에서 BHA와 BHT는 발암 가능 물질 및 내분비계 교란 물질로 지목되었으며, 살충제 및 고무 안정제로 개발되었던 에톡시퀸은 간 손상과 심각한 알레르기 유발 위험이 보고되어 있습니다.\n\n또한 적색 40호, 황색 5호 같은 인공 색소는 사람의 시각적 만족만을 위한 불필요한 첨가물로, 민감한 개에게 피부 가려움증과 알레르기, 소화기 염증을 일으키는 주원인이 됩니다.\n\n반드시 혼합 토코페롤(비타민 E), 로즈마리 추출물, 구연산 등 천연 항산화제로 보존된 안전한 사료를 선택하십시오.',
      whatToLookFor: [
        '천연 유래 보존제: 혼합 토코페롤(비타민 E), 로즈마리 추출물, 구연산',
        '합리적인 유통기한(12~16개월 내외로 신선하게 관리되는 제품)',
        '공기 차단과 신선도 유지를 위한 산소 차단 지퍼백 및 밸브 포장',
      ],
      redFlags: [
        '화학 합성 방부제: BHA, BHT, 에톡시퀸, 프로필렌글리콜',
        '인공 석유계 합성 색소(적색 40호, 황색 5호, 이산화티타늄)',
        '산패된 저급 지방의 냄새를 가리기 위한 인공 향료 및 액상 과당 첨가',
      ],
      checklist: [
        '원재료표에 "천연 토코페롤로 보존"이라는 문구가 명시되어 있는지 확인.',
        '사료 알갱이가 알록달록하지 않고 자연스러운 어두운 갈색을 띠는지 점검.',
        '개봉한 사료는 산패를 막기 위해 밀봉하여 6주 이내에 모두 급여하기.',
      ],
      vetTip:
        '합성 화학 보존제는 체내 간과 신장에 축적되어 만성 염증을 유발합니다. 천연 비타민 E로 보존된 사료를 고르면 피부 아토피와 간 부담을 크게 줄일 수 있습니다.',
    },
    {
      slug: 'controlled-carbohydrates',
      ruleNumber: 4,
      title: '4. 탄수화물 함량을 25% 이하로 제어',
      desc: '개의 침에는 아밀라아제가 없습니다. 과도한 전분은 췌장에 무리를 주고 비만을 유발합니다.',
      readMore:
        "개는 통성 육식동물(facultative carnivore)로, 정제 탄수화물에 대한 생물학적 필수 요구량이 전혀 없습니다. 사람과 달리 개의 침에는 전분을 입안에서 분해하는 효소인 아밀라아제가 분비되지 않으므로, 섭취한 모든 탄수화물의 소화 부담은 고스란히 췌장에 집중됩니다.\n\n사료 라벨의 보증성분표에는 탄수화물 함량 표시 의무가 없기 때문에, 많은 일반 건식 사료는 알갱이(키블)를 물리적으로 팽창시키고 뭉치기 위해 옥수수, 밀, 감자 전분 등을 45~60%나 포함하고 있습니다.\n\n혈당을 급격히 높이는 고탄수화물 식단은 잦은 인슐린 분비, 만성 염증, 귓병, 췌장염 및 비만을 유발합니다. '100% − (조단백질 + 조지방 + 조섬유 + 수분 + 조회분)' 계산식을 통해 탄수화물 비율을 역산하고, 탄수화물이 25% 이하로 엄격히 관리된 사료를 고르세요.",
      whatToLookFor: [
        '건물 기준(DMB) 탄수화물 계산 수치가 25% 이하인 저탄수화물 설계',
        '소화율이 높고 혈당을 완만하게 올리는 복합 탄수화물원(귀리, 퀴노아, 단호박)',
        '주요 대사 에너지가 양질의 동물성 단백질과 불포화 지방산에서 공급되는 식단',
      ],
      redFlags: [
        '역산한 탄수화물 비율이 45~60%에 달하는 고전분 팽창 사료',
        '저가 충전재: 싸라기(맥주쌀), 옥수수 글루텐, 소맥피, 타피오카 전분',
        '이유 없는 체중 증가, 재발성 말라세지아 귓병, 식후 극심한 무기력증',
      ],
      checklist: [
        '탄수화물 역산하기: 100 - (조단백 + 조지방 + 조섬유 + 수분 + 조회분 약 7%).',
        '원재료 앞자리에 곡물이나 전분류가 연속으로 나열되어 있지 않은지 확인.',
        '탄수화물이 칼로리 때우기가 아닌 프리바이오틱스 섬유질 용도로 적정량 쓰였는지 점검.',
      ],
      vetTip:
        '고혈당을 유발하는 고탄수화물 사료는 귓속 효모균 증식을 부추기고 췌장을 혹사시킵니다. 탄수화물 비중을 25% 미만으로 낮추는 것이 비만과 췌장염 예방의 핵심입니다.',
    },
  ],
  it: [
    {
      slug: 'named-animal-protein-first',
      ruleNumber: 1,
      title: '1. Carne Animale Specifica al 1° Posto negli Ingredienti',
      desc: 'Cerca «Tacchino disossato», «Manzo» o «Salmone fresco» invece di generiche «farine di carne».',
      readMore:
        "Sull'etichetta degli alimenti per animali domestici, gli ingredienti sono elencati in ordine decrescente di peso prima della cottura. Le carni intere e chiaramente specificate (come «Tacchino disossato», «Manzo fresco» o «Salmone selvaggio») forniscono aminoacidi essenziali come taurina, arginina e carnitina nella loro forma più biodisponibile.\n\nEvita espressioni generiche come «derivati animali», «farina di carne» o «sottoprodotti di pollame», che consentono l'impiego di scarti industriali di provenienza sconosciuta senza dover aggiornare il sacco.\n\nFai attenzione anche alla tecnica dell'«ingredient splitting»: molti produttori suddividono i carboidrati in voci distinte (piselli, amido di piselli e proteine di piselli) per far figurare la carne al primo posto nell'elenco, anche quando i carboidrati costituiscono la maggior parte della formula.\n\nLe farine disidratate con nome specifico — come la «Farina di agnello disidratata» o la «Farina di salmone» — sono valide se chiaramente dichiarate, poiché l'acqua è stata rimossa prima della lavorazione, garantendo un apporto concentrato di proteine animali nobili.",
      whatToLookFor: [
        'Vera carne muscolare indicata al 1° posto (es. Tacchino disossato, Manzo fresco da pascolo)',
        'Farine disidratate mono-specie trasparenti (es. Farina di salmone selvaggio, Farina di agnello)',
        'Frattaglie nobili con specie dichiarata (es. Fegato di manzo, Cuori di tacchino)',
      ],
      redFlags: [
        'Diciture vaghe: "Carni e derivati" o "Farine di sottoprodotti animali"',
        'Divisione furba dei carboidrati per nascondere l’eccesso di legumi o cereali',
        'Grassi non identificati (es. generico "Grasso animale" senza fonte animale)',
      ],
      checklist: [
        'Controlla i primi 3 ingredienti: almeno 2 devono essere proteine animali con nome specifico.',
        'Assicurati che la specie animale sia chiaramente indicata per ogni carne o grasso.',
        'Diffida dei prodotti che usano glutine vegetale per gonfiare artificialmente le proteine.',
      ],
      vetTip:
        'Il cane necessita di aminoacidi nobili altamente assimilabili per proteggere massa muscolare e cuore. Identificare la specie animale esatta è la prima regola per evitare scarti e allergie.',
    },
    {
      slug: 'high-biological-moisture',
      ruleNumber: 2,
      title: '2. Elevata Umidità Biologica (>70%)',
      desc: 'Le sole crocchette secche provocano una disidratazione cronica latente. Aggiungi sempre brodi o cibi freschi.',
      readMore:
        "In natura, le prede da cui discendono i cani contengono tra il 70% e il 75% di acqua. I cani hanno uno stimolo della sete fisiologicamente basso perché il loro organismo è evoluto per assumere liquidi direttamente dal cibo. Nutrirli esclusivamente con crocchette secche (con appena l'8-10% di umidità) li espone a una disidratazione cronica latente.\n\nNel tempo, un'urina continuamente concentrata affatica i reni e crea l'ambiente ideale per la comparsa di calcoli vescicali di struvite e ossalato di calcio.\n\nSe somministri crocchette, reidrata sempre la ciotola: aggiungi in proporzione 1:1 brodo di ossa tiepido non salato, acqua filtrata o kefir semplice, oppure integra con cibi freschi cucinati per proteggere la salute renale.",
      whatToLookFor: [
        'Formati con idratazione naturale superiore al 70% (cibo fresco cotto dolce, BARF cruda o umidi completi)',
        'Brodo di ossa fatto in casa senza sale, aglio o cipolla per reidratare le crocchette',
        'Topper freschi ricchi di acqua biologica (zucchine al vapore, zucca, mirtilli)',
      ],
      redFlags: [
        'Alimentare per anni solo con crocchette secche senza aggiungere un filo d’acqua',
        'Salse industriali piene di sale, zuccheri e addensanti chimici',
        'Urina scura, concentrata o con odore forte, campanello d’allarme per i reni',
      ],
      checklist: [
        'Aggiungi alle crocchette una dose uguale di acqua tiepida o brodo (lascia riposare 10 min).',
        'Integra almeno un pasto o topper umido al giorno per salvaguardare i reni.',
        'Controlla il colore dell’urina: il giallo paglierino chiaro conferma una corretta idratazione.',
      ],
      vetTip:
        'L’insufficienza renale è tra le prime cause di morte nel cane anziano. Integrare liquidi biologici direttamente nel cibo quotidiano alleggerisce il lavoro dei nefroni renali.',
    },
    {
      slug: 'zero-synthetic-preservatives',
      ruleNumber: 3,
      title: '3. Zero Conservanti Chimici Sintetici',
      desc: 'Evita categoricamente additivi come BHA, BHT, etossichina e coloranti sintetici.',
      readMore:
        "Per assicurare scadenze fino a 24 mesi, molti mangimi economici impiegano antiossidanti chimici di sintesi come BHA (butilidrossianisolo), BHT (butilidrossitoluene) ed etossichina. Numerosi studi scientifici classificano BHA e BHT come sospetti interferenti endocrini e cancerogeni, mentre l'etossichina (nata originariamente come pesticida) è correlata a tossicità epatica e reazioni allergiche.\n\nInoltre, i coloranti artificiali (come Rosso 40 o Giallo 5) hanno una funzione puramente visiva per il proprietario, ma scatenano dermatiti, prurito cronico e infiammazioni intestinali nei cani sensibili.\n\nScegli sempre formule conservate naturalmente con tocoferoli misti (Vitamina E), estratto di rosmarino e acido citrico, che proteggono i grassi dall'ossidazione in modo sicuro.",
      whatToLookFor: [
        'Conservanti di origine naturale: Tocoferoli misti (Vitamina E), estratto di rosmarino, acido citrico',
        'Scadenze naturali ragionevoli (da 12 a 16 mesi, garanzia di conservazione naturale)',
        'Sacchetti a chiusura ermetica salva-freschezza con valvola disaerante',
      ],
      redFlags: [
        'Conservanti chimici sintetici: BHA (E320), BHT (E321), Etossichina, Glicole propilenico',
        'Coloranti sintetici a base di petrolio (Rosso 40, Giallo 5, Biossido di titanio)',
        'Zuccheri aggiunti o sciroppi per mascherare grassi ossidati e rancidi',
      ],
      checklist: [
        'Cerca la dicitura chiara: "conservato naturalmente con tocoferoli misti".',
        'Controlla che le crocchette abbiano un colore bruno naturale uniforme, non rosso o verde.',
        'Consuma qualsiasi sacco aperto entro 6 settimane per evitare il deterioramento dei grassi.',
      ],
      vetTip:
        'Gli additivi sintetici si accumulano nel fegato e nei reni nel corso degli anni. Preferire tocoferoli naturali riduce il carico tossico e calma le dermatiti da intolleranza.',
    },
    {
      slug: 'controlled-carbohydrates',
      ruleNumber: 4,
      title: '4. Carboidrati Moderati (<25%)',
      desc: 'I cani non possiedono amilasi salivare. Troppi amidi affaticano il pancreas e favoriscono il sovrappeso.',
      readMore:
        "Il cane è un carnivoro facoltativo privo di un fabbisogno biologico di carboidrati raffinati. A differenza dell'essere umano, la saliva del cane non contiene amilasi salivare per digerire gli amidi in bocca; tutto il carico enzimatico grava unicamente sul pancreas.\n\nPoiché le tabelle nutrizionali non obbligano a dichiarare i carboidrati, molte crocchette commerciali nascondono dal 45% al 60% di amidi (da mais, frumento o tapioca) al solo scopo di agglomerare i croccantini durante l'estrusione.\n\nUn elevato carico glicemico provoca continui picchi di insulina, infiammazione sistemica, otiti croniche e obesità canina. Calcola i carboidrati sottraendo al 100% la somma di proteine, grassi, fibre, umidità e ceneri grezze. Cerca sempre prodotti con meno del 25% di carboidrati.",
      whatToLookFor: [
        'Percentuale stimata di carboidrati inferiore al 25% sulla sostanza secca',
        'Fonti di carboidrati complessi a basso indice glicemico (avena integrale, zucca, patate dolci)',
        'Calorie ricavate prevalentemente da proteine nobili e grassi animali sani',
      ],
      redFlags: [
        'Quota di carboidrati calcolata superiore al 45-60% del cibo complessivo',
        'Amidi economici di riempimento: riso spezzato, glutine di mais, farinetta o amido di tapioca',
        'Otiti ricorrenti da lieviti (Malassezia), letargia post-pasto o aumento di peso rapido',
      ],
      checklist: [
        'Calcola i carboidrati: 100 - (Proteine grezze + Grassi + Fibre + Umidità + Ceneri ~7%).',
        'Verifica che i cereali o le farine non occupino i primi 4 posti della lista.',
        'Accertati che i vegetali presenti apportino fibra prebiotica e non amido vuoto.',
      ],
      vetTip:
        'L’eccesso di amidi causa picchi glicemici e alimenta infezioni fungine a orecchie e zampe. Mantenere i carboidrati sotto il 25% è la migliore difesa contro sovrappeso e pancreatite.',
    },
  ],
};

export function getGoldenRules(lang: Lang = 'en'): GoldenRule[] {
  return GOLDEN_RULES_DATA[lang] || GOLDEN_RULES_DATA.en;
}

export function getGoldenRule(slug: string, lang: Lang = 'en'): GoldenRule | undefined {
  const rules = getGoldenRules(lang);
  return rules.find((rule) => rule.slug === slug);
}
