import type { Lang } from '../i18n/ui';

/**
 * Content for the "Fresh Dog Food vs. Raw Dog Food vs. Commercial Kibble"
 * comparison section on the Best Dog Food page. Each entry gets its own
 * "Read more" detail page at /best-dog-food/feeding-style/{slug} (and localized
 * at /{lang}/best-dog-food/feeding-style/{slug}).
 */
export interface FeedingStyle {
  slug: string;
  optionLabel: string;
  accent: string;
  title: string;
  summary: string;
  pros: string[];
  cons: string[];
  readMore: string;
  productKey: string;
  productNote: string;
}

export const FEEDING_STYLE_SLUGS = [
  'fresh-dog-food',
  'raw-dog-food-barf',
  'commercial-kibble-toppers',
] as const;

export type FeedingStyleSlug = typeof FEEDING_STYLE_SLUGS[number];

export interface FeedingStylesSectionI18n {
  title: string;
  intro: string;
  footerText: string;
  footerLink: string;
  readMoreBtn: string;
}

export interface FeedingStylesPageI18n {
  badge: string;
  reviewedBy: string;
  strengths: string;
  tradeoffs: string;
  fullBreakdown: string;
  exampleProduct: string;
  buyNow: string;
  prevOption: string;
  nextOption: string;
  backLink: string;
  titleSuffix: string;
}

export const FEEDING_STYLES_SECTION_I18N: Record<Lang, FeedingStylesSectionI18n> = {
  en: {
    title: 'Fresh Dog Food vs. Raw Dog Food vs. Commercial Kibble',
    intro: "The modern pet nutrition landscape has evolved rapidly. Today's pet parents choose between three primary feeding styles:",
    footerText: 'Want step-by-step blueprints? See our',
    footerLink: 'homemade & 80-10-10 raw BARF recipes guide',
    readMoreBtn: 'Read more →',
  },
  es: {
    title: 'Comida Fresca vs. Comida Cruda (BARF) vs. Pienso Comercial',
    intro: 'El panorama de la nutrición canina moderna ha evolucionado rápidamente. Hoy en día, los tutores de perros eligen entre tres estilos de alimentación principales:',
    footerText: '¿Buscas guías paso a paso? Consulta nuestra',
    footerLink: 'guía de recetas caseras y dieta cruda BARF 80-10-10',
    readMoreBtn: 'Leer más →',
  },
  ja: {
    title: 'フレッシュフード vs. 生肉食（BARF） vs. 市販ドライフード',
    intro: '現代のペット栄養学は急速に進化しています。今日の愛犬家は主に3つの食事スタイルから選択しています：',
    footerText: '具体的なステップ別のレシピをお探しですか？こちらの',
    footerLink: '手作り食＆80-10-10生肉BARFレシピガイド',
    readMoreBtn: '詳しく見る →',
  },
  fr: {
    title: 'Nourriture Fraîche vs. Alimentation Crue (BARF) vs. Croquettes Commerciales',
    intro: "Le paysage de la nutrition canine moderne a évolué rapidement. Aujourd'hui, les propriétaires de chiens choisissent entre trois styles d'alimentation principaux :",
    footerText: 'Vous cherchez des recettes pas à pas ? Consultez notre',
    footerLink: 'guide de recettes maison et BARF cru 80-10-10',
    readMoreBtn: 'En savoir plus →',
  },
  de: {
    title: 'Frischfutter vs. Rohfütterung (BARF) vs. Handelsübliches Trockenfutter',
    intro: 'Die moderne Hundeernährung hat sich rasant weiterentwickelt. Heutige Hundehalter wählen im Wesentlichen zwischen drei primären Fütterungsansätzen:',
    footerText: 'Möchten Sie Schritt-für-Schritt-Anleitungen? Entdecken Sie unseren',
    footerLink: 'Leitfaden für hausgemachte & 80-10-10 rohe BARF-Rezepte',
    readMoreBtn: 'Mehr erfahren →',
  },
  pt: {
    title: 'Comida Natural Fresca vs. Dieta Crua (BARF) vs. Ração Comercial',
    intro: 'O cenário da nutrição canina moderna evoluiu rapidamente. Hoje, os tutores escolhem entre três estilos principais de alimentação:',
    footerText: 'Quer planos práticos passo a passo? Veja o nosso',
    footerLink: 'guia de receitas caseiras e BARF crua 80-10-10',
    readMoreBtn: 'Ler mais →',
  },
  ko: {
    title: '자연 화식 vs. 생식 (BARF) vs. 일반 건식 사료',
    intro: '현대 반려동물 영양학은 급격히 발전했습니다. 오늘날의 반려견 보호자들은 주로 3가지 핵심 식단 방식 중 하나를 선택합니다:',
    footerText: '단계별 맞춤 레시피가 필요하신가요? 저희의',
    footerLink: '홈메이드 화식 및 80-10-10 생식 BARF 레시피 가이드',
    readMoreBtn: '자세히 보기 →',
  },
  it: {
    title: 'Cibo Fresco vs. Alimentazione Cruda (BARF) vs. Crocchette Commerciali',
    intro: 'Il panorama della nutrizione moderna per cani si è evoluto rapidamente. Oggi i proprietari scelgono tra tre stili alimentari principali:',
    footerText: 'Vuoi schemi e ricette passo dopo passo? Consulta la nostra',
    footerLink: 'guida alle ricette casalinghe e BARF a crudo 80-10-10',
    readMoreBtn: 'Leggi di più →',
  },
};

export const FEEDING_STYLES_PAGE_I18N: Record<Lang, FeedingStylesPageI18n> = {
  en: {
    badge: 'FRESH VS. RAW VS. KIBBLE',
    reviewedBy: 'Reviewed by: Veterinary Canine Nutritionist',
    strengths: 'Strengths',
    tradeoffs: 'Tradeoffs',
    fullBreakdown: 'Full Breakdown',
    exampleProduct: 'Example product in this category',
    buyNow: 'Buy Now',
    prevOption: 'Previous option',
    nextOption: 'Next option',
    backLink: 'Back to Fresh vs. Raw vs. Kibble',
    titleSuffix: 'What It Is & Is It Right for Your Dog? | Best Dog Food 2026',
  },
  es: {
    badge: 'FRESCA VS. CRUDA VS. PIENSO',
    reviewedBy: 'Revisado por: Nutricionista Canino Veterinario',
    strengths: 'Puntos Fuertes',
    tradeoffs: 'Aspectos a Considerar',
    fullBreakdown: 'Análisis Completo',
    exampleProduct: 'Producto de ejemplo en esta categoría',
    buyNow: 'Comprar Ahora',
    prevOption: 'Opción anterior',
    nextOption: 'Siguiente opción',
    backLink: 'Volver a Comida Fresca vs. Cruda vs. Pienso',
    titleSuffix: '¿Qué Es y Es Adecuado para tu Perro? | Mejor Comida para Perros 2026',
  },
  ja: {
    badge: 'フレッシュ VS. 生食 VS. ドライフード',
    reviewedBy: '監修：獣医犬栄養士',
    strengths: 'メリット・強み',
    tradeoffs: '注意点・デメリット',
    fullBreakdown: '詳細解説',
    exampleProduct: 'このカテゴリーのおすすめ製品例',
    buyNow: '今すぐ購入',
    prevOption: '前の選択肢',
    nextOption: '次の選択肢',
    backLink: 'フレッシュ vs. 生食 vs. ドライフード一覧に戻る',
    titleSuffix: '特徴と適正・愛犬に合っているか？ | ドッグフードおすすめ 2026',
  },
  fr: {
    badge: 'FRAIS VS. CRU VS. CROQUETTES',
    reviewedBy: 'Examiné par : Nutritionniste Canin Vétérinaire',
    strengths: 'Points Forts',
    tradeoffs: 'Inconvénients & Défis',
    fullBreakdown: 'Analyse Complète',
    exampleProduct: 'Exemple de produit dans cette catégorie',
    buyNow: 'Acheter Maintenant',
    prevOption: 'Option précédente',
    nextOption: 'Option suivante',
    backLink: 'Retour au comparatif Frais vs. Cru vs. Croquettes',
    titleSuffix: "Qu'est-ce que c'est et est-ce adapté à votre chien ? | Meilleure Nourriture Chien 2026",
  },
  de: {
    badge: 'FRISCH VS. ROH VS. TROCKENFUTTER',
    reviewedBy: 'Geprüft von: Tierärztlicher Ernährungsberater',
    strengths: 'Stärken & Vorteile',
    tradeoffs: 'Nachteile & Kompromisse',
    fullBreakdown: 'Ausführliche Analyse',
    exampleProduct: 'Beispielprodukt in dieser Kategorie',
    buyNow: 'Jetzt Kaufen',
    prevOption: 'Vorherige Option',
    nextOption: 'Nächste Option',
    backLink: 'Zurück zu Frisch vs. Roh vs. Trockenfutter',
    titleSuffix: 'Was es ist & ist es das Richtige für Ihren Hund? | Bestes Hundefutter 2026',
  },
  pt: {
    badge: 'NATURAL VS. CRUA VS. RAÇÃO',
    reviewedBy: 'Revisado por: Nutricionista Canino Veterinário',
    strengths: 'Pontos Fortes',
    tradeoffs: 'Compromissos & Desafios',
    fullBreakdown: 'Análise Completa',
    exampleProduct: 'Exemplo de produto nesta categoria',
    buyNow: 'Comprar Agora',
    prevOption: 'Opção anterior',
    nextOption: 'Próxima opção',
    backLink: 'Volver a Comida Natural vs. Crua vs. Ração',
    titleSuffix: 'O Que É e É Adequado para o Seu Cão? | Melhor Comida para Cães 2026',
  },
  ko: {
    badge: '화식 VS. 생식 VS. 건식사료',
    reviewedBy: '검수: 수의 개 영양학 전문가',
    strengths: '핵심 장점',
    tradeoffs: '고려사항 및 단점',
    fullBreakdown: '심층 분석',
    exampleProduct: '이 카테고리의 대표 추천 제품',
    buyNow: '구매하기',
    prevOption: '이전 옵션',
    nextOption: '다음 옵션',
    backLink: '화식 vs. 생식 vs. 사료 비교로 돌아가기',
    titleSuffix: '특징 및 반려견 적합성 가이드 | 추천 개 사료 2026',
  },
  it: {
    badge: 'FRESCO VS. CRUDO VS. CROCCHETTE',
    reviewedBy: 'Revisionato da: Nutrizionista Veterinario Canino',
    strengths: 'Punti di Forza',
    tradeoffs: 'Compromessi',
    fullBreakdown: 'Analisi Completa',
    exampleProduct: 'Esempio di prodotto in questa categoria',
    buyNow: 'Acquista Ora',
    prevOption: 'Opzione precedente',
    nextOption: 'Opzione successiva',
    backLink: 'Torna a Cibo Fresco vs. Crudo vs. Crocchette',
    titleSuffix: "Cos'è e Fa al Caso del Tuo Cane? | Miglior Cibo per Cani 2026",
  },
};

const FEEDING_STYLES_BY_LANG: Record<Lang, FeedingStyle[]> = {
  en: [
    {
      slug: 'fresh-dog-food',
      optionLabel: 'Option 1',
      accent: '#10b981',
      title: 'Fresh Dog Food',
      summary: 'Gently cooked at ~160°F, preserving 70%+ moisture, heat-sensitive vitamins, and essential amino acids. Supports kidney health, coat sheen, and firm stools.',
      pros: [
        'Human-grade ingredients cooked in USDA-inspected kitchens, not rendered meat meal',
        'Retains 70%+ moisture and heat-sensitive nutrients like taurine and B-vitamins',
        'Portion-controlled recipes make weight management far more precise than eyeballing kibble scoops',
      ],
      cons: [
        'Needs fridge or freezer space and must be thawed ahead of feeding time',
        'Costs noticeably more per calorie than dry kibble',
      ],
      readMore: "Fresh dog food is exactly what it sounds like: real cuts of meat, vegetables, and grains cooked gently, then portioned and refrigerated or frozen rather than extruded into shelf-stable pellets. Because the ingredients come from the same USDA-inspected supply chain used for human food, there's no rendered \"meat meal\", no need for synthetic preservatives to survive years on a shelf, and no high-heat extrusion step that strips out delicate nutrients.\n\nThe biggest practical benefit is digestibility. Fresh diets are typically 90%+ digestible compared to roughly 80% for dry kibble, which means less food is needed to hit the same calorie and nutrient targets, and stool volume tends to shrink noticeably within the first couple of weeks. The high moisture content (70%+ versus kibble's 8–10%) also takes pressure off the kidneys, which is especially valuable for senior dogs, dogs with a low thirst drive, or breeds prone to urinary crystals. Because recipes are usually single-protein and free of fillers, fresh food is also a common recommendation for dogs with food sensitivities or chronic skin issues.\n\nThe tradeoffs are cost and logistics rather than nutrition: you need freezer space, a thawing routine, and a bigger grocery-style budget than a bag of kibble. When shopping for a fresh brand, confirm it carries an AAFCO \"complete and balanced\" statement for your dog's life stage, leads with a named animal protein, and lists no synthetic preservatives (BHA, BHT, ethoxyquin). If you're not ready to commit to a full switch, starting with fresh food as a 25–50% topper over your current kibble is a low-risk way to get most of the digestibility and palatability benefits immediately.",
      productKey: 'whole-paws-turkey-sweet-potato-13oz-3pack',
      productNote: 'A convenient fresh, human-grade option to start with:',
    },
    {
      slug: 'raw-dog-food-barf',
      optionLabel: 'Option 2',
      accent: '#7928ca',
      title: 'Raw Dog Food (BARF)',
      summary: '80% muscle meat, 10% raw bone, 10% secreting organs. Mirrors ancestral ecology — natural enzymes, zero refined starches, optimal dental hygiene.',
      pros: [
        'Closest nutritional match to what a wild canine ancestor evolved to eat',
        'Raw edible bone mechanically scrapes tartar off teeth as the dog chews',
        'Zero refined starches or processed carbohydrate filler',
      ],
      cons: [
        'Highest food-safety burden of the three feeding styles (raw meat handling, freezing protocols)',
        'DIY ratios require precision — getting the bone percentage wrong causes constipation or, in puppies, skeletal issues',
        'Not recommended for immunocompromised dogs or households with young children, pregnant people, or elderly family members',
      ],
      readMore: "BARF stands for \"Biologically Appropriate Raw Food\" (sometimes \"Bones and Raw Food\"), and the 80-10-10 ratio behind it — 80% muscle meat, 10% raw edible bone, 10% secreting organ — is designed to mirror what a wild canine would get from consuming a whole prey animal. Done correctly, the bone content alone supplies a naturally balanced calcium-to-phosphorus ratio, the organ meat delivers concentrated vitamin A, iron, and B-vitamins, and nothing in the bowl is cooked, so heat-sensitive enzymes and amino acids stay fully intact.\n\nOwners who switch to raw commonly report firmer, smaller stools, cleaner teeth from the chewing action, and a visibly leaner, more muscled dog within a few months. The catch is that raw meat carries the same salmonella and listeria risk as raw meat prepared for human consumption, so it needs dedicated cutting boards, refrigerated storage, and prompt cleanup — and it's not a good fit for households with an immunocompromised person, a very young child, or an elderly family member who could be exposed to cross-contamination. Feeding raw bone also demands real precision: too much bone leads to hard, chalky stools and constipation, while too little strips away the calcium the diet depends on. For growing large-breed puppies, miscalculating the ratio over months can contribute to developmental skeletal problems.\n\nBecause of that precision requirement, most households find it far safer to start with a professionally-formulated raw product — frozen raw patties, freeze-dried raw, or high-pressure-pasteurized (HPP) raw, which reduces pathogen risk while keeping the nutrient profile close to true raw — before ever attempting to source and weigh a fully custom raw diet at home. If you do go fully DIY, work with a board-certified veterinary nutritionist to verify the recipe rather than relying on ratio rules of thumb alone.",
      productKey: 'old-mill-85-15-ground-beef-10pack',
      productNote: 'Raw, pasture-raised muscle meat to build a DIY 80-10-10 meal:',
    },
    {
      slug: 'commercial-kibble-toppers',
      optionLabel: 'Option 3',
      accent: '#0070f3',
      title: 'Superfood Kibble Toppers',
      summary: 'Adding 25–50% fresh whole-food toppers (bone broth, sardines, pumpkin) over standard kibble boosts bioavailable micronutrients by 40%+ while staying cost-effective.',
      pros: [
        'Most shelf-stable and budget-friendly of the three feeding styles',
        'Easy to portion, batch-buy, and automate with a timed feeder',
        'Whole-food toppers close a large share of the micronutrient and moisture gap without a full diet overhaul',
      ],
      cons: [
        'Base kibble is still extruded at 400°F+, which destroys some heat-sensitive vitamins and reduces moisture to roughly 8–10%',
        'Toppers add back some of the prep time and cost that kibble was chosen to avoid',
      ],
      readMore: "Commercial kibble remains the most practical everyday option for a lot of households: it's shelf-stable for up to a year unopened, cheap to buy in bulk, and easy to portion with a bowl or an automatic feeder for multi-dog homes. The tradeoff is the extrusion process itself — dry kibble is cooked under high heat and pressure (typically above 400°F) to form its shape and achieve a long shelf life, which destroys some heat-sensitive vitamins and leaves the finished food at only 8–10% moisture, versus 70%+ in fresh or raw diets.\n\nRather than abandoning kibble entirely, most veterinary nutritionists recommend keeping it as the calorie-dense base and adding a fresh or freeze-dried whole-food topper to cover the gap. A splash of unsalted bone broth restores moisture and adds collagen for joint support; canned sardines or a spoon of pure pumpkin puree add omega-3s and soluble fiber; and a freeze-dried raw meal mixer sprinkled over the bowl reintroduces raw, unprocessed muscle meat and organ nutrients without switching the whole diet. Aiming for toppers to make up roughly 25–50% of a meal's calories captures most of the palatability and nutrient boost while keeping the overall feeding budget close to kibble-only levels.\n\nThe quality of the base kibble still matters, though. Look for a named animal protein (\"deboned chicken\" or \"beef\", not vague \"meat meal\") as the first ingredient, ancient grains like oats or sorghum instead of heavy corn or wheat filler, and a brand that publishes third-party lab testing for heavy metals. Pairing a genuinely high-quality kibble with a rotating topper is one of the most cost-effective ways to get most of the benefits of fresh and raw feeding without the freezer space or the food-safety overhead.",
      productKey: 'stella-chewys-chicken-meal-mixers-1oz',
      productNote: 'A freeze-dried raw topper to boost any kibble:',
    },
  ],
  es: [
    {
      slug: 'fresh-dog-food',
      optionLabel: 'Opción 1',
      accent: '#10b981',
      title: 'Comida Fresca para Perros',
      summary: 'Cocinada suavemente a ~71°C, preservando más del 70% de humedad natural, vitaminas termosensibles y aminoácidos esenciales. Favorece la salud renal, el brillo del pelaje y heces firmes.',
      pros: [
        'Ingredientes de grado humano elaborados en cocinas inspeccionadas, sin harinas cárnicas procesadas',
        'Conserva más del 70% de humedad natural y nutrientes termosensibles como taurina y vitaminas del complejo B',
        'Raciones controladas con precisión matemática para un manejo del peso mucho más exacto que medir vasos de pienso',
      ],
      cons: [
        'Requiere espacio en refrigerador o congelador y debe descongelarse antes de cada comida',
        'Coste por caloría notablemente superior al del pienso seco comercial',
      ],
      readMore: "La comida fresca para perros es exactamente lo que indica su nombre: cortes reales de carne, verduras y cereales cocinados a fuego suave, divididos en porciones y refrigerados o congelados en lugar de extruirse a altas presiones en bolitas deshidratadas. Al proceder los ingredientes de la misma cadena de suministro para consumo humano, no contiene harinas de carne dudosas, no necesita conservantes sintéticos para aguantar años en un saco y evita la extrusión a temperaturas extremas que degrada los nutrientes delicados.\n\nEl mayor beneficio clínico es la digestibilidad. Las dietas frescas presentan habitualmente más del 90% de digestibilidad, frente a cerca del 80% del pienso seco. Esto implica que el perro aprovecha mejor los nutrientes, necesita menos volumen y el tamaño de las heces se reduce notablemente desde las primeras dos semanas. Además, su elevado aporte de agua (más del 70% frente al 8–10% del pienso seco) alivia el trabajo de los riñones, algo crucial para perros sénior, animales que beben poca agua o razas con tendencia a cristales urinarios. Al basarse en recetas monoprotéicas y limpias de aditivos, es una opción de referencia para perros con digestiones delicadas o alergias cutáneas.\n\nLos inconvenientes son logísticos y económicos: demanda espacio en el congelador, una rutina de descongelación y un presupuesto mayor que un saco convencional. Al elegir una marca comercial fresca, comprueba que cuente con la declaración de nutrición completa y equilibrada de AAFCO/FEDIAF, encabece con carne identificada y no incluya conservantes como BHA o BHT. Si no quieres una transición total de golpe, utilizar comida fresca como topper en un 25–50% sobre el pienso habitual es una excelente vía para obtener grandes beneficios de digestibilidad y palatabilidad.",
      productKey: 'whole-paws-turkey-sweet-potato-13oz-3pack',
      productNote: 'Una excelente opción fresca de grado humano para comenzar:',
    },
    {
      slug: 'raw-dog-food-barf',
      optionLabel: 'Opción 2',
      accent: '#7928ca',
      title: 'Comida Cruda para Perros (BARF)',
      summary: '80% carne muscular, 10% hueso carnoso crudo, 10% vísceras secretoras. Imita la ecología ancestral: enzimas activas, cero almidones refinados y máxima higiene dental.',
      pros: [
        'La concordancia nutricional más estrecha con lo que evolucionó para comer el ancestro cánido salvaje',
        'El hueso carnoso crudo raspa mecánicamente el sarro dental mientras el perro mastica activamente',
        'Cero almidones refinados ni harinas de carbohidratos de relleno',
      ],
      cons: [
        'Mayor exigencia de seguridad alimentaria de los tres estilos (manipulación de carne cruda y congelación previa)',
        'Las proporciones caseras exigen precisión milimétrica: equivocarse en el porcentaje óseo genera estreñimiento o problemas óseos en cachorros',
        'No recomendado para perros inmunodeprimidos ni hogares con bebés, mujeres embarazadas o personas mayores vulnerables',
      ],
      readMore: "BARF significa «Biologically Appropriate Raw Food» (Alimentos Crudos Biológicamente Apropiados) y se fundamenta en la proporción 80-10-10: 80% carne muscular, 10% hueso carnoso comestible crudo y 10% órganos secretores (hígado y vísceras). Esta fórmula busca replicar con exactitud el perfil de nutrientes que un cánido salvaje obtendría al cazar una presa entera. Cuando se formula correctamente, el hueso suministra una relación calcio-fósforo perfectamente equilibrada, las vísceras concentran vitamina A, hierro y vitaminas del complejo B, y al no haber cocción, las enzimas y aminoácidos esenciales se mantienen íntegros.\n\nLos tutores que implementan una dieta BARF bien formulada constatan heces pequeñas, compactas y menos olorosas, dientes más limpios gracias a la masticación activa del hueso y una masa muscular magra y definida en pocos meses. No obstante, la carne cruda conlleva riesgos bacterianos por salmonella y listeria, requiriendo tablas de corte exclusivas, almacenamiento frío estricto y limpieza meticulosa. Asimismo, dosificar el hueso crudo exige exactitud: un exceso provoca heces calizas y estreñimiento severo, mientras que un déficit deja la dieta sin calcio elemental. En cachorros de razas grandes, desequilibrios mantenidos durante meses pueden derivar en trastornos esqueléticos graves.\n\nPor dicha exigencia de rigor, muchos hogares inician este camino con menús comerciales crudos certificados (hamburguesas congeladas, liofilizados o tratados por alta presión hidrostática HPP que neutralizan bacterias patógenas preservando los nutrientes crudos) antes de preparar recetas caseras por su cuenta. Si decides preparar BARF en casa, consulta siempre a un nutricionista canino veterinario certificado.",
      productKey: 'old-mill-85-15-ground-beef-10pack',
      productNote: 'Carne muscular de pasto para estructurar una ración BARF 80-10-10:',
    },
    {
      slug: 'commercial-kibble-toppers',
      optionLabel: 'Opción 3',
      accent: '#0070f3',
      title: 'Toppers Superalimento sobre Pienso',
      summary: 'Añadir 25–50% de complementos enteros frescos (caldo de huesos, sardinas, calabaza) sobre el pienso habitual incrementa micronutrientes biodisponibles en más de un 40% manteniendo el presupuesto.',
      pros: [
        'La opción más estable en despensa, duradera y económica de los tres estilos de alimentación',
        'Muy fácil de dosificar, comprar por volumen y automatizar mediante comederos programables',
        'Los complementos frescos y enteros reducen notablemente la brecha de humedad y micronutrientes sin cambiar de golpe toda la dieta',
      ],
      cons: [
        'El pienso base sigue sufriendo extrusión a más de 200°C, lo que oxida nutrientes y reduce la humedad al 8–10%',
        'Añadir toppers requiere algo de tiempo diario de preparación y un pequeño presupuesto adicional',
      ],
      readMore: "El pienso seco comercial continúa siendo la elección más extendida y práctica para millones de hogares: se conserva intacto durante meses sin refrigeración, resulta accesible económicamente para familias con perros grandes y se raciona de manera sencilla. La contrapartida directa proviene del proceso industrial de extrusión: la masa se somete a temperaturas superiores a los 200°C y altas presiones para solidificar la croqueta, un proceso que destruye vitaminas termosensibles y reduce la humedad al 8–10%, muy lejos del 70% fisiológico natural de las presas frescas.\n\nEn lugar de descartar el pienso por completo, muchos especialistas recomiendan mantenerlo como la base calórica accesible e incorporar un «topper» de alimentos frescos o liofilizados que cubra sus carencias. Un chorro de caldo de huesos sin sal aporta humedad biológica y colágeno para las articulaciones; unas sardinas al natural o una cucharada de puré de calabaza pura proporcionan omega-3 antiinflamatorio y fibra prebiótica soluble; y unos bocados de carne cruda liofilizada aportan enzimas y aminoácidos bioactivos. Sustituir entre el 25% y el 50% de las calorías con estos ingredientes mejora drásticamente la vitalidad y palatabilidad sin disparar los gastos mensuales.\n\nLa calidad del pienso base sigue siendo determinante: elige fórmulas donde el primer ingrediente sea carne animal claramente especificada (por ejemplo, «pavo desossado» o «ternera», evitando «subproductos animales» o harinas cárnicas genéricas), cereales ancestrales como avena en lugar de maíz pesado, y marcas con analíticas transparentes. Combinar un buen pienso con toppers frescos rotativos es una de las estrategias con mejor relación coste-beneficio en la nutrición canina moderna.",
      productKey: 'stella-chewys-chicken-meal-mixers-1oz',
      productNote: 'Un topper de carne cruda liofilizada para enriquecer cualquier pienso:',
    },
  ],
  ja: [
    {
      slug: 'fresh-dog-food',
      optionLabel: '選択肢 1',
      accent: '#10b981',
      title: 'フレッシュドッグフード（手作り・低温調理食）',
      summary: '約70℃でやさしく低温調理。70％以上の自然な水分と熱に弱いビタミン・必須アミノ酸を損なわずに保持。腎臓の健康、毛並みの艶、良質な排便をサポートします。',
      pros: [
        '人間用と同じ衛生基準（ヒューマングレード）の肉・野菜を使用。粗悪なレンダリング肉骨粉は不使用',
        '70％以上の豊富な水分と、タウリンやビタミンB群など熱に弱い必須栄養素を保持',
        'グラム単位で精密に計量・管理できるため、目分量のドライフード給餌に比べて体重管理が極めて正確',
      ],
      cons: [
        '冷蔵庫または冷凍庫の保管スペースが必要で、給餌前に解凍する手間がかかる',
        '市販のドライフードに比べてカロリーあたりの食費が高くなる',
      ],
      readMore: "フレッシュドッグフードとは、人間が食べるのと同じ新鮮な肉、野菜、穀物を低温で優しくスチーム加熱し、小分けにして冷蔵または冷凍保存する食事スタイルです。人間用の食品工場と同じ衛生基準の原材料を用いるため、素性の分からない「肉副産物ミール」や、賞味期限を数年延ばすための人工保存料（BHA・BHTなど）、繊細な栄養素を壊す超高温のエクストルーダー加工を一切行いません。\n\n臨床上最大の利点は「消化吸収率の高さ」です。一般的なドライフードの消化吸収率が約80％にとどまるのに対し、フレッシュフードは90％以上を誇ります。これにより同じカロリーを摂取しても内臓への負担が少なく、開始からわずか数週間で便の量とにおいが劇的に減少します。さらに水分量が70％以上（ドライフードはわずか8〜10％）と極めて豊富なため、日常的な脱水リスクから腎臓を守ります。これは特にシニア犬、水をあまり飲まない犬、尿路結石を起こしやすい犬にとって極めて大きな価値があります。また単一タンパク質ベースのレシピが多いため、食物アレルギーや皮膚トラブルを抱える犬にも獣医師から推奨されています。\n\n唯一の課題は利便性とコストです。冷凍庫のスペース確保、給餌前の解凍ルーティン、そしてドライフードより高い月額費用が必要になります。製品を選ぶ際は、AAFCO（米国飼料検査官協会）基準の「総合栄養食」表記、明確な動物性タンパク質の筆頭表記、合成保存料不使用を必ず確認してください。全量を切り替えるのが難しい場合は、いつものドライフードに25〜50％の割合でトッピングするだけでも、消化率と嗜好性の大きな恩恵を得られます。",
      productKey: 'whole-paws-turkey-sweet-potato-13oz-3pack',
      productNote: 'まず試しやすい高品質なヒューマングレード・フレッシュフード：',
    },
    {
      slug: 'raw-dog-food-barf',
      optionLabel: '選択肢 2',
      accent: '#7928ca',
      title: '生肉食（BARF・ローフード）',
      summary: '筋肉肉80％、生食用骨10％、内臓肉10％の祖先型黄金比。自然な酵素をそのまま摂取でき、精製デンプンゼロで歯垢予防と口腔ケアにも最適です。',
      pros: [
        '野生のイヌ科動物が進化の過程で摂取してきた生態学的組成に最も近い',
        '生の食肉骨を噛み砕く物理的な咀嚼運動が、歯垢・歯石の蓄積を自然に予防',
        '精製デンプンや増量目的の炭水化物フィラーが完全にゼロ',
      ],
      cons: [
        '生肉の徹底した衛生管理・冷凍保管プロトコルなど、3つの方法の中で最も管理責任が高い',
        '手作り配合には精密な計算が必須。骨の比率を間違えると便秘や、子犬期の骨格発達障害の原因になる',
        '免疫不全の犬、乳幼児、妊婦、高齢者が同居するご家庭には感染リスクの観点から非推奨',
      ],
      readMore: "BARFとは「Biologically Appropriate Raw Food（生物学的に適正な生肉食）」の略称です。その根幹にある「80-10-10ルール」（骨なし筋肉肉80％、生の可食骨10％、肝臓等の分泌器官内臓10％）は、野生のオオカミや野犬が獲物を丸ごと捕食した際の栄養組成を忠実に再現するよう設計されています。正しく設計されたBARF食では、骨から自然で理想的なカルシウムとリンの比率を摂取でき、内臓肉から高濃度のビタミンA、鉄分、ビタミンB群が得られます。一切加熱しないため、熱に弱い生きた酵素やアミノ酸が完全に保持されます。\n\nBARF食に移行した飼い主からは、数ヶ月以内に「便が小さく固く締まった」「咀嚼によって歯が驚くほど白く綺麗になった」「無駄な脂肪が落ちて引き締まった筋肉質な体型になった」という声が多く聞かれます。しかし生肉にはサルモネラ菌やリステリア菌といった病原菌のリスクが常にあるため、専用のまな板を用意し、徹底した低温管理と手洗いを厳守しなければなりません。特に免疫力が低下しているご家族や乳幼児がいる家庭では注意が必要です。また骨の計量には極めて高い正確性が求められます。骨が多すぎると白く硬い便になり深刻な便秘を引き起こし、逆に少なすぎるとカルシウム不足に陥ります。特に成長期の大型犬の子犬では、比率の狂いが将来の股関節形成不全などの骨格異常を招く危険があります。\n\nそのため、最初から自宅で生肉を買い揃えて計量するよりも、プロが栄養バランスを調整した冷凍生肉パティやフリーズドライ生肉、あるいは高圧処理（HPP）で殺菌された製品から始めるのが最も安全です。完全に自作する場合は、必ず認定獣医栄養士の監修を受けてレシピを作成してください。",
      productKey: 'old-mill-85-15-ground-beef-10pack',
      productNote: '自作80-10-10食のベースとなる牧草牛の生赤身肉：',
    },
    {
      slug: 'commercial-kibble-toppers',
      optionLabel: '選択肢 3',
      accent: '#0070f3',
      title: 'スーパーフード・キブルトッパー（トッピング）',
      summary: '市販ドライフードに25〜50％の新鮮な食材（骨スープ、イワシ、カボチャ等）を加えるハイブリッド手法。費用を抑えつつ生体利用可能な微量栄養素を40％以上向上。',
      pros: [
        '最も常温保存性に優れ、経済的負担が少ない実用的な給餌スタイル',
        '計量が簡単でまとめ買いしやすく、自動給餌器との相性も抜群',
        '食事全体を一気に変えることなく、水分不足と微量栄養素の欠落を大幅に補える',
      ],
      cons: [
        'ベースのドライフードは200℃以上の高温押し出し成形のため、一部のビタミンが失われ水分は8〜10％にとどまる',
        'トッピングの準備に多少の手間と追加の食材費がかかる',
      ],
      readMore: "市販のドライフード（カリカリ）は、現代の多くの家庭において最も現実的で実用的な選択肢です。未開封で最長1年常温保存でき、大袋買いでコストを抑えられ、多頭飼いでも自動給餌器で手軽に管理できます。しかし、その製造工程である「高温エクストルーダー加工（200℃以上の超高温と高圧）」によって熱に弱いビタミンが失われ、完成品の水分量はわずか8〜10％しかありません。本来の自然食が含む70％以上の水分とはかけ離れており、慢性的な潜在的脱水を引き起こしやすいのが最大の弱点です。\n\nそこで現代の多くの獣医栄養学者が推奨するのが、ドライフードを全否定するのではなく、ドライフードを土台のカロリー源として活用し、その上に新鮮な食材やフリーズドライ食材をトッピングする「ハイブリッド給餌」です。無塩のボーンブロス（骨スープ）を少量回しかけるだけで水分補給と関節を守るコラーゲンを補え、無塩オイルサーディンや少量の純カボチャペーストはオメガ3脂肪酸と良質な水溶性食物繊維を供給します。さらにフリーズドライの生肉トッパーをふりかけることで、生の筋肉や内臓の生きた栄養素を安全に手軽に取り入れられます。1食のカロリーの25〜50％をこれらトッパーで補うことで、食費を抑えながらフレッシュフードに近い健康恩恵を獲得できます。\n\nただし、土台となるドライフード自体の質にもこだわる必要があります。第一主原料に「チキンミール」や曖昧な肉類ではなく、「骨抜きチキン」「生サーモン」など特定の肉類が明記されているもの、トウモロコシや小麦ではなくオーツ麦などの古代穀物を使用しているもの、第三者機関の安全検査を受けているフードを選びましょう。良質なドライフードにローテーションでトッピングを重ねる方法は、最も費用対効果に優れた現代の賢い選択肢です。",
      productKey: 'stella-chewys-chicken-meal-mixers-1oz',
      productNote: 'いつものフードにふりかけて手軽に生肉の栄養を補えるトッパー：',
    },
  ],
  fr: [
    {
      slug: 'fresh-dog-food',
      optionLabel: 'Option 1',
      accent: '#10b981',
      title: 'Nourriture Fraîche pour Chien',
      summary: 'Cuite doucement à ~71°C, préservant plus de 70% d’humidité naturelle, les vitamines thermosensibles et les acides aminés essentiels. Soutient la santé rénale, le pelage et la digestion.',
      pros: [
        'Ingrédients de qualité humaine cuisinés dans des ateliers contrôlés, sans farines animales de récupération',
        'Conserve plus de 70% d’humidité et des nutriments sensibles comme la taurine et les vitamines B',
        'Des portions pesées au gramme près pour un contrôle du poids bien plus précis que le gobelet doseur de croquettes',
      ],
      cons: [
        'Nécessite de l’espace au réfrigérateur ou congélateur et une routine de décongélation',
        'Coût par calorie nettement supérieur à celui des croquettes sèches',
      ],
      readMore: "La nourriture fraîche pour chien se compose de véritables morceaux de viande, de légumes et de céréales cuits à basse température, puis portionnés et réfrigérés ou surgelés au lieu d'être extrudés en granulés secs. Comme les ingrédients proviennent de la chaîne alimentaire humaine, ils ne contiennent aucune farine animale indéterminée, aucun conservateur synthétique destiné à tenir des années en rayon et ne subissent pas la cuisson à très haute température qui détruit les nutriments les plus délicats.\n\nLe principal atout clinique réside dans la digestibilité : les régimes frais affichent généralement plus de 90% de digestibilité contre environ 80% pour les croquettes. Le chien assimile ainsi une fraction beaucoup plus élevée de son bol alimentaire, ce qui réduit le volume des selles dès les premières semaines. La forte teneur en humidité (plus de 70% contre 8 à 10% pour les croquettes) soulage considérablement les reins, un avantage capital pour les chiens seniors, ceux qui s'abreuvent peu ou les races prédisposées aux cristaux urinaires. Élaborées le plus souvent avec une protéine unique, ces recettes sont également recommandées pour les chiens aux sensibilités digestives ou cutanées.\n\nLes contraintes sont avant tout logistiques et financières : place au congélateur, temps de décongélation et budget plus élevé. Si vous optez pour une marque commerciale fraîche, vérifiez la mention d'aliment complet selon les normes FEDIAF/AAFCO, la présence d'une protéine animale clairement nommée et l'absence d'additifs comme le BHA ou le BHT. Si une transition complète dépasse votre budget, intégrer 25 à 50% de nourriture fraîche en topper sur vos croquettes actuelles constitue une excellente solution intermédiaire.",
      productKey: 'whole-paws-turkey-sweet-potato-13oz-3pack',
      productNote: 'Une excellente option fraîche de qualité humaine pour démarrer :',
    },
    {
      slug: 'raw-dog-food-barf',
      optionLabel: 'Option 2',
      accent: '#7928ca',
      title: 'Alimentation Crue pour Chien (BARF)',
      summary: '80% viande musculaire, 10% os charnus crus, 10% abats sécréteurs. Rapprochement optimal de l’alimentation ancestrale : enzymes vivantes, zéro amidon raffiné et excellente hygiène dentaire.',
      pros: [
        'Correspondance nutritionnelle la plus fidèle au régime évolutif du canidé sauvage',
        'La mastication active des os charnus gratte mécaniquement la plaque dentaire et le tartre',
        'Zéro amidon raffiné ni glucides de remplissage industriels',
      ],
      cons: [
        'Exigences d’hygiène et de sécurité alimentaire les plus strictes des trois approches (viande crue, chaîne du froid)',
        'Le calcul maison exige une rigueur absolue : un mauvais ratio d’os provoque constipation ou troubles osseux chez le chiot',
        'Déconseillé aux chiens immunodéprimés ainsi qu’aux foyers avec nourrissons, femmes enceintes ou personnes très âgées',
      ],
      readMore: "L'acronyme BARF signifie « Biologically Appropriate Raw Food » (Nourriture crue biologiquement appropriée). La formule 80-10-10 qui la définit — 80% de viande musculaire, 10% d'os charnus crus consommables et 10% d'abats nobles sécréteurs (foie, reins, rate) — reproduit fidèlement la composition d'une proie entière chassée dans la nature. Correctement équilibrée, la part d'os fournit un ratio calcium-phosphore parfait, les abats apportent des vitamines A, B et du fer hautement biodisponibles, et l'absence totale de cuisson laisse les enzymes et acides aminés entièrement intacts.\n\nLes maîtres adoptant le BARF constatent rapidement des selles moulées plus petites, une haleine plus fraîche, des dents éclatantes grâce au brossage naturel de la mastication, ainsi qu'une musculature plus dense. Cependant, la manipulation de viande crue implique des risques bactériens (salmonelle, listeria) qui imposent des planches à découper réservées, une désinfection minutieuse et une réfrigération irréprochable. De plus, le dosage des os charnus ne supporte aucune approximation : un excès entraîne des selles dures et crayeuses avec risque d'occlusion, tandis qu'une carence prive le squelette de calcium. Chez les chiots de grande race en pleine croissance, une erreur de calcul répétée sur plusieurs mois peut compromettre le développement articulaire.\n\nFace à ces exigences, il est généralement beaucoup plus prudent de débuter avec des menus crus complets formulés par des professionnels (galettes surgelées, cru lyophilisé ou pasteurisé à haute pression HPP) avant d'élaborer ses propres rations à la maison. Si vous préparez vous-même le BARF, faites valider vos calculs par un vétérinaire nutritionniste.",
      productKey: 'old-mill-85-15-ground-beef-10pack',
      productNote: 'Viande musculaire de bœuf de pâturage pour composer votre menu BARF 80-10-10 :',
    },
    {
      slug: 'commercial-kibble-toppers',
      optionLabel: 'Option 3',
      accent: '#0070f3',
      title: 'Toppers Superaliments sur Croquettes',
      summary: 'Ajouter 25 à 50% d’ingrédients frais (bouillon d’os, sardines, purée de courge) sur des croquettes augmente les micronutriments biodisponibles de plus de 40% tout en restant économique.',
      pros: [
        'L’option la plus pratique, stable à température ambiante et abordable financièrement',
        'Facile à doser, à commander en grande quantité et compatible avec les distributeurs programmables',
        'Les garnitures fraîches réduisent considérablement le déficit d’humidité et de micronutriments sans changer tout le régime',
      ],
      cons: [
        'Les croquettes de base restent cuites à plus de 200°C, ce qui réduit l’humidité à 8-10% et dégrade certains nutriments',
        'Les garnitures demandent un léger temps de préparation quotidienne et un budget complémentaire',
      ],
      readMore: "Les croquettes industrielles demeurent l'option quotidienne la plus pratique pour de nombreuses familles : longue conservation, achat économique en gros volume et dosage aisé. Cependant, l'extrusion à très haute température (souvent au-delà de 200°C) et sous forte pression altère certaines vitamines fragiles et ramène l'humidité finale à seulement 8 à 10%, bien loin des 70% naturels d'une alimentation fraîche.\n\nAu lieu de renoncer totalement aux croquettes, beaucoup de nutritionnistes recommandent de conserver les croquettes comme base calorique abordable et d'y adjoindre des compléments frais ou lyophilisés. Un filet de bouillon d'os sans sel restaure l'humidité tout en apportant du collagène pour les articulations ; des sardines à l'eau ou une cuillère de purée de courge pure offrent des oméga-3 essentiels et des fibres prébiotiques ; enfin, quelques pépites de viande crue lyophilisée réintroduisent des enzymes vivantes et des protéines nobles sans bouleverser la routine. Viser 25 à 50% des calories sous forme de garnitures fraîches permet de récolter l'essentiel des bienfaits du frais pour un coût modéré.\n\nLa qualité des croquettes de base reste essentielle : privilégiez les recettes où le premier ingrédient est une viande clairement identifiée (poulet désossé, bœuf), sans farines animales génériques, avec des céréales douces comme l'avoine plutôt que des féculents lourds, et issues de fabricants pratiquant des contrôles rigoureux. Associer de bonnes croquettes à des garnitures fraîches variées est l'un des meilleurs compromis modernes en nutrition canine.",
      productKey: 'stella-chewys-chicken-meal-mixers-1oz',
      productNote: 'Un topper de viande crue lyophilisée pour booster n’importe quel bol de croquettes :',
    },
  ],
  de: [
    {
      slug: 'fresh-dog-food',
      optionLabel: 'Option 1',
      accent: '#10b981',
      title: 'Frischfutter für Hunde',
      summary: 'Schonend bei ~71°C gegart, wodurch über 70% natürliche Feuchtigkeit, hitzeempfindliche Vitamine und essenzielle Aminosäuren erhalten bleiben. Fördert Nierengesundheit, Fellglanz und feste Verdauung.',
      pros: [
        'Zutaten in Lebensmittelqualität, zubereitet in geprüften Küchen ohne minderwertige Tiermehle',
        'Erhält über 70% Feuchtigkeit sowie hitzeempfindliche Nährstoffe wie Taurin und B-Vitamine',
        'Exakt portionierte Mahlzeiten machen das Gewichtsmanagement viel präziser als ungenaue Messbecher',
      ],
      cons: [
        'Benötigt Platz im Kühl- oder Gefrierschrank und muss rechtzeitig vor dem Füttern aufgetaut werden',
        'Kostet pro Kalorie spürbar mehr als herkömmliches Trockenfutter',
      ],
      readMore: "Frisches Hundefutter besteht aus echten Fleischstücken, Gemüse und bekömmlichen Beilagen, die schonend gegart und portioniert gekühlt oder tiefgefroren werden – statt unter Hochdruck zu trockenen Pellets extrudiert zu werden. Da die Zutaten aus denselben Lieferketten wie Lebensmittel für den menschlichen Verzehr stammen, enthält dieses Futter keine minderwertigen Tiermehle, keine chemischen Konservierungsmittel und keinen Zerstörungsprozess durch industrielle Extremhitze.\n\nDer größte klinische Vorteil ist die Verdaulichkeit: Frische Rationen weisen typischerweise über 90% Verdaulichkeit auf (im Vergleich zu rund 80% bei Trockenfutter). Der Hund verwertet die Nährstoffe optimal, wodurch die Kotmenge bereits innerhalb der ersten zwei Wochen spürbar sinkt. Der hohe Feuchtigkeitsgehalt (über 70% gegenüber 8–10% bei Trockenfutter) entlastet zudem die Nieren – besonders wertvoll für ältere Hunde, trinkfaule Tiere oder Rassen mit Neigung zu Blasensteinen. Da die Rezepturen meist auf einer einzelnen Proteinquelle basieren, wird Frischfutter häufig bei Futterunverträglichkeiten empfohlen.\n\nDie Hürden liegen in der Logistik und den Kosten: Man benötigt Gefrierkapazität, eine Auftauroutine und ein höheres Futterbudget. Achten Sie beim Kauf von Frischfuttermarken auf die Ausweisung als Alleinfuttermittel nach FEDIAF-Standards, klar benannte Fleischzutaten an erster Stelle und den Verzicht auf künstliche Konservierungsstoffe (BHA, BHT). Wer nicht komplett umstellen möchte, erzielt bereits mit einem 25–50%igen Frischfutter-Topper auf dem gewohnten Trockenfutter erhebliche Verbesserungen bei Vitalität und Akzeptanz.",
      productKey: 'whole-paws-turkey-sweet-potato-13oz-3pack',
      productNote: 'Eine hochwertige Frischfutter-Option in Lebensmittelqualität zum Einstieg:',
    },
    {
      slug: 'raw-dog-food-barf',
      optionLabel: 'Option 2',
      accent: '#7928ca',
      title: 'Rohfütterung für Hunde (BARF)',
      summary: '80% Muskelfleisch, 10% rohe fleischige Knochen, 10% Organe/Innereien. Spiegelt die Beutetier-Biologie wider: lebendige Enzyme, null raffinierte Stärke, beste Zahnhygiene.',
      pros: [
        'Entspricht dem evolutionären Nährstoffprofil, für das sich das Verdauungssystem des Hundes entwickelt hat',
        'Das Zerkauen roher fleischiger Knochen schabt Zahnbelag mechanisch ab und beugt Zahnstein vor',
        'Vollständig frei von raffinierten Stärken oder industriellen Füllstoffen',
      ],
      cons: [
        'Höchste Anforderungen an Küchenhygiene und Kühlkette unter allen drei Fütterungsstilen',
        'Selbst zusammengestellte Rationen erfordern absolute Präzision – ein falscher Knochenanteil führt zu Verstopfung oder Knochenfehlbildungen',
        'Nicht empfohlen für immungeschwächte Hunde sowie Haushalte mit Kleinkindern, Schwangeren oder Senioren',
      ],
      readMore: "BARF steht für „Biologisch Artgerechtes Rohes Futter“. Die zugrundeliegende 80-10-10-Formel – 80% Muskelfleisch, 10% rohe fleischige Knochen und 10% sezernierende Innereien (Leber, Niere, Milz) – bildet das Nährstoffprofil eines vollständigen Beutetieres nach. Bei korrekter Zusammensetzung liefern die Knochen das ideale Calcium-Phosphor-Verhältnis, die Innereien konzentrierte Vitamine A, B und Eisen, und durch den Verzicht auf jegliches Kochen bleiben hitzeempfindliche Enzyme und Aminosäuren voll erhalten.\n\nHundehalter berichten nach der Umstellung auf BARF häufig von festerem, kleinerem Kot, strahlend sauberen Zähnen durch das Kauen und einer definierten, muskulösen Statur. Allerdings birgt rohes Fleisch Keimrisiken (Salmonellen, Listerien), weshalb eigene Schneidebretter, getrennte Aufbewahrung und peinliche Sauberkeit Pflicht sind. Zudem verzeiht die Knochenfütterung keine Rechenfehler: Zu viel Knochen führt zu hartem Knochenkot und schmerzhafter Verstopfung, während zu wenig Knochen den Calciumhaushalt gefährdet. Bei heranwachsenden Welpen großer Rassen können Nährstoffdysbalancen über Monate hinweg schwere Skeletterkrankungen verursachen.\n\nAus diesem Grund greifen die meisten Halter zunächst zu professionell formulierten Fertig-BARF-Menüs (tiefgekühlte Komplett-Patties, gefriergetrocknetes BARF oder hochdruckpasteurisierte HPP-Produkte), bevor sie Rationen komplett in Eigenregie zusammenstellen. Wer selbst mischt, sollte den Futterplan unbedingt von einem tierärztlichen Ernährungsberater überprüfen lassen.",
      productKey: 'old-mill-85-15-ground-beef-10pack',
      productNote: 'Rohes Weiderind-Muskelfleisch als Grundlage für eine eigene 80-10-10-BARF-Ration:',
    },
    {
      slug: 'commercial-kibble-toppers',
      optionLabel: 'Option 3',
      accent: '#0070f3',
      title: 'Superfood-Topper für Trockenfutter',
      summary: '25–50% frische Vollwertkost (Knochenbrühe, Sardinen, Kürbis) als Topper über Trockenfutter steigern bioverfügbare Mikronährstoffe um über 40% bei moderaten Kosten.',
      pros: [
        'Die lagerfähigste, zeitsparendste und budgetfreundlichste der drei Methoden',
        'Einfach zu portionieren, auf Vorrat zu kaufen und mit programmierbaren Futterautomaten nutzbar',
        'Frische Topper schließen einen großen Teil der Feuchtigkeits- und Nährstofflücke, ohne die Gesamtfütterung umzuwerfen',
      ],
      cons: [
        'Das Basisfutter wird bei über 200°C extrudiert, was Feuchtigkeit auf 8–10% senkt und manche Vitamine schädigt',
        'Das Zubereiten frischer Topper erfordert täglich etwas zusätzliche Vorbereitungszeit und ein kleines Zusatzbudget',
      ],
      readMore: "Handelsübliches Trockenfutter bleibt für viele Haushalte die alltagstauglichste Lösung: ungeöffnet bis zu einem Jahr haltbar, günstig im Großeinkauf und unkompliziert abzumessen. Der Haken liegt im Herstellungsverfahren: Beim Extrudieren unter extremer Hitze und hohem Druck (über 200°C) werden temperaturempfindliche Vitamine angegriffen, und der Feuchtigkeitsgehalt sinkt auf nur noch 8–10% – weit entfernt von den über 70% Feuchtigkeit natürlicher Nahrung.\n\nStatt Trockenfutter komplett zu verbannen, empfehlen viele Fütterungsexperten, es als verlässliche Kalorienbasis zu nutzen und mit frischen oder gefriergetrockneten Toppern aufzuwerten. Ein Schuss ungesalzene Knochenbrühe spendet Feuchtigkeit und liefert Gelenkkollagen; Ölsardinen in Wasser oder ein Löffel reines Kürbispüree steuern wertvolle Omega-3-Fettsäuren und präbiotische Ballaststoffe bei; gefriergetrocknete Fleisch-Mixer bringen unverarbeitete Enzyme zurück in den Napf. Wenn etwa 25–50% der Kalorien aus solchen frischen Komponenten stammen, profitiert der Hund enorm, während die Futterkosten überschaubar bleiben.\n\nWichtig bleibt die Qualität des Basistrockenfutters: Achten Sie darauf, dass an erster Stelle der Deklaration echtes Fleisch („Entbeintes Huhn“, „Rindfleisch“) und kein anonymes „Tiermehl“ steht, Hafer oder Hirse statt billigem Mais verwendet werden und der Hersteller strenge Qualitätskontrollen nachweist. Hochwertiges Trockenfutter mit rotierenden frischen Toppern ist eine der klügsten und wirtschaftlichsten Fütterungsstrategien überhaupt.",
      productKey: 'stella-chewys-chicken-meal-mixers-1oz',
      productNote: 'Ein gefriergetrockneter Rohfleisch-Topper zur Aufwertung jedes Trockenfutters:',
    },
  ],
  pt: [
    {
      slug: 'fresh-dog-food',
      optionLabel: 'Opção 1',
      accent: '#10b981',
      title: 'Comida Natural Fresca',
      summary: 'Cozida suavemente a ~71°C, preservando mais de 70% de umidade natural, vitaminas termossensíveis e aminoácidos essenciais. Favorece a saúde renal, o brilho da pelagem e fezes firmes.',
      pros: [
        'Ingredientes de consumo humano preparados em cozinhas inspecionadas, sem farinhas de carne residuais',
        'Conserva mais de 70% de umidade e micronutrientes delicados como taurina e vitaminas do complexo B',
        'Porções pesadas na grama exata tornam o controle de peso muito mais preciso do que medidores de ração',
      ],
      cons: [
        'Demanda espaço em freezer ou geladeira e necessita de descongelamento prévio',
        'Custo por caloria consideravelmente superior ao da ração seca tradicional',
      ],
      readMore: "A comida natural fresca é exatamente o que sugere: carnes nobres, legumes selecionados e grãos funcionais cozidos a baixas temperaturas, porcionados e congelados ou refrigerados, em vez de serem prensados e extrusados em grãos desidratados. Por utilizar ingredientes da cadeia de alimentos humanos, elimina farinhas de subprodutos, dispensa conservantes artificiais como BHA e BHT e não passa por temperaturas extremas que queimam nutrientes vitais.\n\nO principal benefício clínico é a digestibilidade superior, geralmente acima de 90%, contra cerca de 80% das rações secas. Isso significa que o organismo absorve quase tudo, reduzindo significativamente o volume e o odor das fezes em poucas semanas. A alta umidade natural (mais de 70%, versus 8–10% da ração seca) protege diretamente os rins e o trato urinário, algo indispensável para cães idosos, animais que ingerem pouca água ou raças sujeitas a cálculos. Por apresentar fórmulas simples e sem aditivos químicos, é amplamente recomendada por veterinários para animais com gastrite crônica ou dermatites alimentares.\n\nAs limitações concentram-se na logística e no investimento financeiro: é preciso ter espaço no congelador, rotina de preparo e um orçamento maior. Ao optar por marcas comerciais, confira se o alimento possui comprovação de dieta completa e balanceada, traz proteína animal identificada em primeiro lugar e não contém conservantes químicos. Caso o custo impeça uma troca integral, usar a comida fresca como complemento (topper) em 25–50% da tigela já proporciona a maior parte dos benefícios de hidratação e digestibilidade.",
      productKey: 'whole-paws-turkey-sweet-potato-13oz-3pack',
      productNote: 'Uma excelente opção de comida natural fresca e equilibrada para iniciar:',
    },
    {
      slug: 'raw-dog-food-barf',
      optionLabel: 'Opção 2',
      accent: '#7928ca',
      title: 'Alimentação Crua Biologicamente Apropriada (BARF)',
      summary: '80% carne muscular, 10% ossos carnudos crus, 10% vísceras secretoras. Réplica da ecologia ancestral: enzimas ativas, zero amidos refinados e excelente higiene bucal.',
      pros: [
        'Alinhamento nutricional mais fiel à dieta biológica evolutiva dos canídeos',
        'A mastigação ativa de ossos carnudos crus raspa mecanicamente o tártaro dos dentes',
        'Completamente livre de farinhas de amido ou carboidratos industriais de preenchimento',
      ],
      cons: [
        'Exige o mais rigoroso protocolo de biossegurança e congelamento preventivo dos três métodos',
        'A montagem caseira exige precisão matemática – errar na proporção de ossos causa constipação severa ou deformidades ósseas em filhotes',
        'Não recomendada para cães imunodeprimidos ou lares com crianças pequenas, gestantes e idosos vulneráveis',
      ],
      readMore: "A sigla BARF significa «Biologically Appropriate Raw Food» (Alimento Cru Biologicamente Apropriado). Sua base repousa na regra 80-10-10: 80% de carne muscular, 10% de ossos carnudos crus comestíveis e 10% de órgãos secretores (fígado e outras vísceras), recriando a composição nutricional de uma presa inteira na natureza. Quando bem formulada, os ossos garantem a proporção perfeita entre cálcio e fósforo, as vísceras concentram vitaminas A, ferro e complexo B, e o fato de não ser cozida mantém as enzimas digestivas e aminoácidos plenamente ativos.\n\nQuem migra para uma dieta crua balanceada frequentemente nota fezes mais secas e compactas, hálito puro, redução drástica de tártaro e ganho visível de tônus muscular. Contudo, carnes cruas exigem cuidados redobrados com bactérias como salmonela e listeria: tábuas exclusivas, manipulação higiênica e congelamento profilático são obrigatórios. Além disso, a porcentagem de ossos não tolera improvisos: excesso de ossos causa fezes esbranquiçadas, duras e constipação grave, enquanto a falta priva o organismo de cálcio. Em filhotes de porte grande em fase de crescimento acelerado, erros na dosagem de cálcio podem gerar displasias e anomalias ósseas irreversíveis.\n\nPor isso, muitos tutores preferem iniciar com opções comerciais cruas formuladas por especialistas (hambúrgueres congelados prontos, alimentos liofilizados ou tratados por alta pressão HPP) antes de tentar comprar e pesar ingredientes crus por conta própria. Se optar pelo preparo caseiro, busque a orientação e aprovação de um médico veterinário nutrólogo.",
      productKey: 'old-mill-85-15-ground-beef-10pack',
      productNote: 'Carne bovina magra de pasto para estruturar sua receita BARF 80-10-10:',
    },
    {
      slug: 'commercial-kibble-toppers',
      optionLabel: 'Opção 3',
      accent: '#0070f3',
      title: 'Toppers de Superalimentos na Ração',
      summary: 'Adicionar de 25% a 50% de alimentos naturais frescos (caldo de ossos, sardinhas, abóbora) sobre a ração seca eleva os micronutrientes bioativos em mais de 40% com excelente custo-benefício.',
      pros: [
        'A alternativa mais prática, duradoura na despensa e acessível para o bolso',
        'Fácil de estocar, comprar em quantidade e compatível com alimentadores automáticos',
        'Os complementos frescos resolvem boa parte do déficit de umidade e micronutrientes sem exigir uma reformulação total da rotina',
      ],
      cons: [
        'A ração base continua sendo processada a mais de 200°C, reduzindo a umidade para 8–10% e oxidando certas vitaminas',
        'Preparar os complementos diários exige um pequeno tempo extra e um custo adicional',
      ],
      readMore: "A ração seca comercial continua sendo a opção mais prática e acessível para a maioria das famílias: tem validade de até um ano fechada, permite compras em grande volume e facilita a rotina em lares com múltiplos cães. O ponto crítico reside no processo de extrusão: a massa é cozida sob calor e pressão extremos (acima de 200°C), o que degrada certas vitaminas delicadas e deixa o produto com apenas 8 a 10% de umidade residual – muito longe dos 70% fisiológicos de um alimento fresco.\n\nEm vez de abolir a ração seca, muitos nutrólogos veterinários recomendam utilizá-la como a fundação calórica e acrescentar complementos funcionais frescos ou liofilizados. Um pouco de caldo de ossos caseiro sem sal devolve a umidade e fornece colágeno para as articulações; sardinhas em água ou uma colher de purê de abóbora puro agregam ômega-3 e fibras prebióticas solúveis; e petiscos de carne crua liofilizada reintroduzem enzimas e nutrientes cárneos vivos. Substituir de 25% a 50% das calorias diárias por esses complementos traz ganhos extraordinários de disposição e digestão sem elevar o orçamento aos patamares de uma dieta exclusivamente fresca.\n\nA qualidade da ração base continua sendo fundamental: procure opções cujo primeiro ingrediente seja carne claramente identificada (como «frango desossado» ou «carne bovina»), evite farinhas genéricas de subprodutos e prefira cereais integrais como aveia em vez de milho pesado. Combinar uma ração premium com complementos frescos rotativos é uma das decisões mais inteligentes da nutrição canina moderna.",
      productKey: 'stella-chewys-chicken-meal-mixers-1oz',
      productNote: 'Um topper de carne crua liofilizada para enriquecer qualquer ração seca:',
    },
  ],
  ko: [
    {
      slug: 'fresh-dog-food',
      optionLabel: '선택지 1',
      accent: '#10b981',
      title: '자연 화식 (신선 사료)',
      summary: '약 70℃ 저온에서 부드럽게 스팀 조리하여 70% 이상의 자연 수분, 열에 약한 비타민 및 필수 아미노산을 온전히 보존. 신장 건강, 모질 개선, 작고 탄탄한 변 상태를 지원합니다.',
      pros: [
        '육골분이나 렌더링 부산물이 아닌, 사람 음식과 동일한 휴먼그레이드 육류 및 채소 사용',
        '70% 이상의 풍부한 수분과 타우린, 비타민 B군 등 열에 취약한 핵심 영양소 보존',
        '눈대중 사료 계량컵 대신 정확한 g 단위 급여로 체중 조절이 훨씬 정밀함',
      ],
      cons: [
        '냉장/냉동 보관 공간이 필요하며 급여 전 해동 루틴이 요구됨',
        '일반 건식 사료에 비해 칼로리당 비용이 눈에 띄게 높음',
      ],
      readMore: "자연 화식(Fresh Dog Food)은 이름 그대로 신선한 순살코기, 채소, 곡물을 저온에서 부드럽게 조리한 후 소분하여 냉장 또는 냉동 보관하는 사료 형태입니다. 사람이 섭취하는 식품 안전 기준과 동일한 시설에서 조리되므로, 출처를 알 수 없는 ‘육골분 미ール’이나 몇 년씩 유통기한을 늘리기 위한 합성 보존제(BHA, BHT), 영양소를 파괴하는 초고온 압출 공정이 일체 들어가지 않습니다.\n\n임상적으로 가장 큰 장점은 바로 소화흡수율입니다. 일반 건식 사료의 소화흡수율이 약 80% 수준인 것에 비해, 신선 화식은 90% 이상에 달합니다. 이는 섭취한 영양소가 체내에 효율적으로 흡수되어 위장 부담을 줄여주며, 급여 후 1~2주 만에 배변량과 냄새가 눈에 띄게 줄어듭니다. 또한 70% 이상의 풍부한 수분 함량(건식 사료는 8~10%에 불과)은 신장과 비뇨기계의 부담을 크게 덜어주어, 노령견이나 평소 음수량이 부족한 반려견, 결석에 취약한 견종에게 이상적입니다. 단일 단백질 기반 레시피가 많아 식이 알레르기나 만성 피부염을 앓는 반려견에게도 수의사들이 적극 권장합니다.\n\n단점은 편의성과 비용입니다. 냉동고 보관 공간 확보, 급여 전 해동 과정, 일반 사료보다 높은 월 식비가 수반됩니다. 시판 화식을 고를 때는 AAFCO(미국사료협회) 기준의 '완전 균형 영양식' 표기 여부, 명확한 동물성 단백질 명시, 인공 보존제 무첨가를 반드시 확인해야 합니다. 비용이 부담된다면 기존 건식 사료에 25~50% 비율로 화식을 토핑해 주는 것만으로도 소화율과 기호성 개선 효과를 훌륭하게 누릴 수 있습니다.",
      productKey: 'whole-paws-turkey-sweet-potato-13oz-3pack',
      productNote: '간편하게 시작할 수 있는 휴먼그레이드 자연 화식 추천 제품:',
    },
    {
      slug: 'raw-dog-food-barf',
      optionLabel: '선택지 2',
      accent: '#7928ca',
      title: '생식 식단 (BARF)',
      summary: '근육 살코기 80%, 식용 생뼈 10%, 내장 기관 10%의 조상형 비율. 야생의 소화 생태계를 재현하여 자연 효소 보존, 정제 탄수화물 제로, 최상의 치석 예방 효과를 제공합니다.',
      pros: [
        '야생 갯과 조상이 진화 과정에서 먹어 온 생물학적 영양 조성과 가장 일치',
        '식용 생뼈를 씹는 저작 운동이 치아의 치석을 물리적으로 긁어내 구강 청결 유지',
        '정제 전분 및 가공 탄수화물 증량제가 완전히 배제됨',
      ],
      cons: [
        '생고기 취급 및 냉동 보관 등 3가지 방식 중 식품 위생 관리 책임이 가장 큼',
        '홈메이드 배합 시 정밀한 계산 필수 – 뼈 비율이 어긋나면 변비 또는 자견의 골격 기형 유발',
        '면역력이 약한 반려견이나 영유아, 임산부, 노약자가 함께 거주하는 가정에는 감염 위험으로 비추천',
      ],
      readMore: "BARF는 ‘생물학적으로 적합한 생식(Biologically Appropriate Raw Food)’의 약자입니다. 그 핵심인 ‘80-10-10 공식’(순살 근육 80%, 식용 생뼈 10%, 간 등 분비성 내장 10%)은 야생 동물이 통째로 사냥감을 섭취할 때 얻는 영양 비율을 정밀하게 모방하도록 설계되었습니다. 올바르게 배합된 생식은 뼈 성분 자체에서 이상적인 칼슘:인 비율을 공급받고, 내장에서 고농도의 비타민 A, 철분, B군을 섭취하며, 가열 조리를 거치지 않아 천연 효소와 아미노산이 온전히 보존됩니다.\n\n생식으로 전환한 보호자들은 배변이 작고 단단해지며, 뼈를 씹으면서 치아가 눈에 띄게 깨끗해지고, 근육질의 날렵한 체형으로 변화하는 것을 체감합니다. 하지만 생육은 살모넬라, 리스테리아 등 세균 오염 위험이 따르므로 전용 도마 사용, 저온 보관, 철저한 위생 관리가 요구됩니다. 특히 면역 질환이 있거나 어린아이, 노약자가 있는 가정은 교차 오염에 주의해야 합니다. 또한 생뼈 급여는 정밀해야 합니다. 뼈가 과도하면 백색의 딱딱한 변과 심한 변비를 유발하고, 부족하면 뼈 형성에 필요한 칼슘 결핍을 초래합니다. 성장기 대형견 자견의 경우 비율 오류가 고관절 이형성증 등 심각한 골격 발달 문제로 이어질 수 있습니다.\n\n이러한 정밀성 요구 때문에, 처음부터 생고기를 직접 사서 배합하기보다는 영양 균형이 검증된 상용 생식 패티, 동결건조 생식, 또는 HPP(초고압 살균) 처리된 제품으로 시작하는 것이 훨씬 안전합니다. 완전 자작 생식을 시도할 경우 반드시 공인 수의 영양학 전문가의 검증을 거쳐야 합니다.",
      productKey: 'old-mill-85-15-ground-beef-10pack',
      productNote: '자작 80-10-10 생식 식단을 구성하기 위한 방목 소고기 생육:',
    },
    {
      slug: 'commercial-kibble-toppers',
      optionLabel: '선택지 3',
      accent: '#0070f3',
      title: '슈퍼푸드 사료 토퍼',
      summary: '일반 건식 사료에 25~50%의 신선한 원물(사골 육수, 정어리, 단호박 등)을 토핑하는 방식. 경제성을 유지하면서 생체 이용 가능한 미량 영양소를 40% 이상 증대시킵니다.',
      pros: [
        '3가지 방식 중 가장 긴 유통기한, 보관 편의성, 경제성을 갖춘 현실적 대안',
        '소분과 대량 구매가 용이하며 자동 급여기를 통한 정시 급여 가능',
        '식단을 통째로 바꾸지 않고도 건식 사료의 수분 부족과 미량 영양소 결핍을 효과적으로 보완',
      ],
      cons: [
        '기본 사료는 200℃ 이상 고온 익스트루더 가공으로 수분이 8~10%에 불과하고 일부 비타민 손실',
        '토핑 준비에 약간의 시간과 추가 식재료 비용이 발생함',
      ],
      readMore: "시판 건식 사료(키블)는 오늘날 수많은 가정에서 가장 현실적이고 편리한 선택입니다. 미개봉 시 최대 1년간 상온 보관이 가능하고, 대량 구매 시 비용 부담이 적으며, 다견 가정에서도 자동 급여기를 활용해 관리가 쉽습니다. 다만 단점은 초고온 익스트루더 제조 공정 자체에 있습니다. 200℃ 이상의 고열과 고압으로 팽창 압출되면서 열에 약한 비타민이 일부 파괴되고, 최종 수분 함량이 8~10%에 불과하여 생식이나 자연식의 70% 수분과 큰 차이가 납니다.\n\n이에 따라 최근 수의 영양학계에서는 사료를 완전히 배제하기보다, 경제적인 칼로리 베이스로 유지하면서 신선하거나 동결건조된 원물 토퍼를 얹어주는 하이브리드 급여 방식을 권장합니다. 염분 없는 사골 육수를 살짝 부어주면 수분 보충과 관절 콜라겐을 챙길 수 있고, 물에 담근 캔 정어리나 순수 단호박 퓌레는 풍부한 오메가-3와 수용성 프리바이오틱스 섬유질을 공급합니다. 동결건조 생식 밀 믹서를 뿌려주면 복잡한 준비 없이도 가공되지 않은 살코기와 내장 영양소를 보충할 수 있습니다. 한 끼 칼로리의 25~50%를 이러한 원물 토퍼로 채우면, 전체 식비를 크게 늘리지 않으면서 자연식의 이점을 대부분 누릴 수 있습니다.\n\n베이스가 되는 건식 사료의 품질 역시 중요합니다. '육류 부산물' 같은 모호한 명칭 대신 '뼈 바른 닭고기'나 '소고기'처럼 명확한 동물성 단백질이 제1원료로 명시된 제품, 옥수수나 밀 대신 귀리 같은 고대 곡물을 사용한 제품, 중금속 검사를 공개하는 브랜드를 선택하세요. 훌륭한 품질의 건식 사료에 순환형 토핑을 곁들이는 것은 가장 경제적이면서도 영양학적으로 현명한 현대적 식단 관리법입니다.",
      productKey: 'stella-chewys-chicken-meal-mixers-1oz',
      productNote: '어떤 건식 사료에도 간편하게 생식 영양을 더해주는 동결건조 토퍼:',
    },
  ],
  it: [
    {
      slug: 'fresh-dog-food',
      optionLabel: 'Opzione 1',
      accent: '#10b981',
      title: 'Cibo Fresco per Cani',
      summary: 'Cotto delicatamente a ~71°C, preservando oltre il 70% di umidità naturale, vitamine termosensibili e aminoacidi essenziali. Supporta la salute renale, il pelo lucido e feci formate.',
      pros: [
        'Ingredienti per il consumo umano cotti in laboratori controllati, senza farine di carne di scarto',
        'Mantiene oltre il 70% di umidità e nutrienti termosensibili come taurina e vitamine del gruppo B',
        'Porzioni calibrate al grammo che rendono il controllo del peso molto più preciso rispetto ai dosatori approssimativi',
      ],
      cons: [
        'Richiede spazio in frigorifero o congelatore e va scongelato prima dei pasti',
        'Ha un costo per caloria sensibilmente superiore rispetto alle crocchette secche commerciali',
      ],
      readMore: "Il cibo fresco per cani è esattamente ciò che dice il nome: tagli reali di carne, verdure ed ingredienti di qualità cotti delicatamente a vapore, porzionati e refrigerati o surgelati, invece di essere estrusi ad alte temperature in crocchette secche. Provenendo dalla filiera alimentare umana, non contiene farine di carne anonime, non necessita di conservanti sintetici per durare anni a scaffale e non subisce il calore distruttivo dei processi industriali spinti.\n\nIl maggiore beneficio clinico è la digeribilità: le diete fresche vantano generalmente oltre il 90% di digeribilità rispetto a circa l'80% delle crocchette. Ciò significa che il cane assorbe una quota maggiore di nutrienti, con una sensibile riduzione del volume e dell'odore delle feci già nelle prime due settimane. L'elevato contenuto di umidità biologica (oltre il 70% contro l'8-10% delle crocchette) riduce l'affaticamento renale, risultando preziosissimo per cani anziani, soggetti che bevono poco o razze predisposte a calcoli e cistiti. Spesso monoproteiche e prive di additivi inutili, queste ricette rappresentano la prima scelta per cani con problemi digestivi o dermatiti croniche.\n\nI limiti sono di natura logistica ed economica: serve spazio nel congelatore, organizzazione per lo scongelamento e un budget più alto. Quando scegli un marchio commerciale fresco, assicurati che riporti l'indicazione di alimento completo e bilanciato secondo gli standard FEDIAF/AAFCO, una carne chiaramente specificata come primo ingrediente e l'assenza di conservanti sintetici (BHA, BHT). Se una transizione totale risulta troppo costosa, iniziare aggiungendo cibo fresco come topper al 25-50% sulla razione abituale di crocchette è un ottimo modo per godere subito della maggior parte dei benefici di idratazione e appetibilità.",
      productKey: 'whole-paws-turkey-sweet-potato-13oz-3pack',
      productNote: 'Un’ottima soluzione fresca di grado umano per iniziare con praticità:',
    },
    {
      slug: 'raw-dog-food-barf',
      optionLabel: 'Opzione 2',
      accent: '#7928ca',
      title: 'Alimentazione a Crudo (BARF)',
      summary: '80% carne muscolare, 10% ossa polpose crude, 10% organi secretori. Rispecchia la biologia ancestrale: enzimi attivi, zero amidi raffinati e igiene orale impeccabile.',
      pros: [
        'La corrispondenza nutrizionale più fedele a ciò che il canide selvatico si è evoluto per consumare',
        'L’azione meccanica di masticazione delle ossa polpose raschia via tartaro e placca dentale',
        'Completamente privo di amidi raffinati o carboidrati industriali di riempimento',
      ],
      cons: [
        'Massimo rigore di sicurezza alimentare e catena del freddo tra i tre stili nutrizionali',
        'Le ricette casalinghe richiedono precisione assoluta: sbagliare la quota di ossa causa stitichezza grave o disturbi scheletrici nei cuccioli',
        'Sconsigliato per cani immunodepressi o famiglie con neonati, donne in gravidanza o persone anziane fragili',
      ],
      readMore: "L'acronimo BARF sta per «Biologically Appropriate Raw Food» (Cibo Crudo Biologicamente Appropriato). La regola dell'80-10-10 alla sua base — 80% carne muscolare, 10% ossa polpose crude commestibili, 10% organi e visceri secretori (fegato, milza, reni) — è studiata per riprodurre la composizione nutrizionale di una preda intera. Se formulata correttamente, la quota ossea fornisce un rapporto calcio-fosforo naturalmente bilanciato, le frattaglie donano alte concentrazioni di vitamina A, ferro e vitamine B, e l'assenza di cottura mantiene intatti gli enzimi e gli aminoacidi termosensibili.\n\nI proprietari che passano a una dieta BARF ben strutturata riscontrano feci piccole e compatte, alito pulito, denti candidi grazie alla masticazione attiva e una massa muscolare tonica e asciutta. Tuttavia, la carne cruda comporta rischi batterici legati a salmonella e listeria, imponendo taglieri dedicati, conservazione scrupolosa e massima igiene in cucina. Inoltre, il dosaggio delle ossa richiede rigore: un eccesso porta a feci calcaree e stitichezza ostinata, mentre un difetto priva la dieta di calcio indispensabile. Nei cuccioli di taglia grande in crescita, calcoli errati protratti per mesi possono causare gravi difetti di sviluppo scheletrico.\n\nPer queste ragioni, la maggior parte dei proprietari trova molto più sicuro iniziare con alimenti crudi completi formulati da professionisti (polpette congelate bilanciate, crudo liofilizzato o pastorizzato ad alta pressione HPP) prima di cimentarsi nel dosaggio casalingo. Se decidi per il fai-da-te, affidati sempre a un medico veterinario nutrizionista per convalidare il piano alimentare.",
      productKey: 'old-mill-85-15-ground-beef-10pack',
      productNote: 'Carne muscolare di manzo da pascolo per comporre la tua razione BARF 80-10-10:',
    },
    {
      slug: 'commercial-kibble-toppers',
      optionLabel: 'Opzione 3',
      accent: '#0070f3',
      title: 'Topper Superfood per Crocchette',
      summary: 'Aggiungere il 25–50% di alimenti freschi (brodo d’ossa, sardine, zucca) sulle normali crocchette incrementa i micronutrienti biodisponibili di oltre il 40% a costi contenuti.',
      pros: [
        'L’opzione più pratica, a lunga conservazione e sostenibile economicamente',
        'Facilissima da dosare, acquistare in grandi formati e compatibile con distributori automatici',
        'I topper freschi colmano gran parte del deficit di idratazione e micronutrienti senza stravolgere la routine',
      ],
      cons: [
        'Il cibo secco di base viene estruso a oltre 200°C, riducendo l’umidità all’8–10% e degradando parte dei micronutrienti',
        'I condimenti freschi richiedono qualche minuto in più di preparazione quotidiana e un piccolo costo extra',
      ],
      readMore: "Le crocchette commerciali restano la scelta quotidiana più pratica per molte famiglie: durano a lungo a temperatura ambiente, costano meno all'ingrosso e sono facilissime da gestire anche in case con più cani. Il punto debole deriva dal processo di estrusione ad alta temperatura e pressione (spesso superiore a 200°C), che danneggia alcune vitamine delicate e riduce l'umidità residua all'8-10%, ben lontana dal 70% tipico del cibo naturale fresco.\n\nInvece di demonizzare le crocchette, molti nutrizionisti veterinari consigliano di tenerle come base calorica economica e aggiungere un topper fresco o liofilizzato per arricchire la ciotola. Un goccio di brodo d'ossa non salato reidrata la pappa e apporta collagene per le articolazioni; qualche sardina sott'acqua o un cucchiaio di purea di zucca pura forniscono omega-3 antinfiammatori e fibre prebiotiche; una spolverata di carne cruda liofilizzata reintroduce enzimi e proteine nobili senza complicazioni. Sostituire circa il 25-50% delle calorie giornaliere con questi ingredienti freschi offre gran parte dei vantaggi salutari della dieta fresca a una frazione del costo.\n\nLa qualità delle crocchette di partenza rimane comunque essenziale: cerca formule che mettano al primo posto una carne identificata («pollo disossato» o «manzo», non generiche farine di carne), cereali nobili come l'avena al posto del mais pesante, e aziende che effettuano controlli di laboratorio trasparenti. Associare un buon cibo secco a topper freschi a rotazione è una delle strategie più intelligenti ed economiche per la nutrizione del cane moderno.",
      productKey: 'stella-chewys-chicken-meal-mixers-1oz',
      productNote: 'Un topper di carne cruda liofilizzata per arricchire qualsiasi ciotola di crocchette:',
    },
  ],
};

export function getFeedingStyles(lang: Lang = 'en'): FeedingStyle[] {
  return FEEDING_STYLES_BY_LANG[lang] || FEEDING_STYLES_BY_LANG.en;
}

export function getFeedingStyleBySlug(slug: string, lang: Lang = 'en'): FeedingStyle | undefined {
  const list = getFeedingStyles(lang);
  return list.find((item) => item.slug === slug);
}

// Backward-compatible default export for English
export const FEEDING_STYLES = FEEDING_STYLES_BY_LANG.en;
