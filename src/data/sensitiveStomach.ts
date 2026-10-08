import type { Lang } from '../i18n/ui';

export const SENSITIVE_STOMACH_SLUGS = [
  'single-novel-protein',
  'soluble-prebiotic-fiber',
  'anti-inflammatory-omega-3s',
] as const;

export type SensitiveStomachSlug = (typeof SENSITIVE_STOMACH_SLUGS)[number];

export interface SensitiveStomachPillar {
  slug: SensitiveStomachSlug;
  pillarNumber: number;
  title: string;
  desc: string;
  readMore: string;
  whatToLookFor: string[];
  redFlags: string[];
  checklist: string[];
  vetTip: string;
}

export interface SensitiveStomachSectionI18n {
  title: string;
  intro: string;
  footerText: string;
  footerLink: string;
  readMoreBtn: string;
}

export interface SensitiveStomachPageI18n {
  badge: string;
  pillarBadgePrefix: string;
  reviewedBy: string;
  whatToLookForTitle: string;
  redFlagsTitle: string;
  fullBreakdown: string;
  checklistTitle: string;
  vetTipTitle: string;
  prevPillar: string;
  nextPillar: string;
  backLink: string;
  titleSuffix: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}

export const SENSITIVE_STOMACH_SECTION_I18N: Record<Lang, SensitiveStomachSectionI18n> = {
  en: {
    title: 'Best Dog Foods for Sensitive Stomach',
    intro: 'If your dog suffers from gas, loose stools, or constant paw-licking, they likely need an easily digestible diet built on three core clinical principles:',
    footerText: 'For a full 8-week elimination diet protocol and the top canine allergens to avoid, see our dedicated',
    footerLink: 'Allergies & Sensitive Stomach guide',
    readMoreBtn: 'Read more →',
  },
  es: {
    title: 'Mejores Alimentos para Perros con Estómago Sensible',
    intro: 'Si tu perro sufre de gases, heces blandas o lamido constante de patas, necesita una dieta de fácil digestión basada en tres pilares clínicos esenciales:',
    footerText: 'Para consultar el protocolo completo de dieta de eliminación de 8 semanas y los alérgenos a evitar, visita nuestra',
    footerLink: 'guía dedicada de Alergias y Estómago Sensible',
    readMoreBtn: 'Leer más →',
  },
  ja: {
    title: 'お腹が弱い愛犬のための食事療法・3大原則',
    intro: '軟便、ガス、手足の執拗な舐め癖に悩む愛犬には、消化器官に負担をかけない3つの臨床原則に基づいた食事が不可欠です：',
    footerText: '8週間の本格的な除去食プロトコルや避けるべきアレルゲンについては、専門の',
    footerLink: 'アレルギー＆胃腸ケア総合ガイド',
    readMoreBtn: '詳しく見る →',
  },
  fr: {
    title: 'Meilleurs Aliments pour Chiens à Estomac Sensible',
    intro: 'Si votre chien souffre de flatulences, selles molles ou léchage compulsif des pattes, il a besoin d’un régime hautement digestible fondé sur trois piliers cliniques :',
    footerText: 'Pour un protocole complet de régime d’éviction sur 8 semaines et la liste des allergènes majeurs, consultez notre',
    footerLink: 'guide dédié Allergies & Estomac Sensible',
    readMoreBtn: 'En savoir plus →',
  },
  de: {
    title: 'Bestes Hundefutter für sensible Mägen & empfindliche Verdauung',
    intro: 'Wenn Ihr Hund unter Blähungen, weichem Kot oder ständigem Pfotenlecken leidet, benötigt er eine leicht verdauliche Nahrung basierend auf drei klinischen Kernprinzipien:',
    footerText: 'Für das vollständige 8-Wochen-Ausschlussdiät-Protokoll und die wichtigsten zu meidenden Allergene lesen Sie unseren',
    footerLink: 'Spezialleitfaden für Allergien & empfindlichen Magen',
    readMoreBtn: 'Mehr erfahren →',
  },
  pt: {
    title: 'Melhores Alimentos para Cães com Estômago Sensível',
    intro: 'Se o seu cão sofre de gases frequentes, fezes pastosas ou lambedura constante das patas, ele precisa de uma dieta de fácil digestão apoiada em três pilares clínicos:',
    footerText: 'Para ver o protocolo completo de dieta de eliminação de 8 semanas e os principais alérgenos a evitar, consulte nosso',
    footerLink: 'guia dedicado de Alergias e Estômago Sensível',
    readMoreBtn: 'Ler mais →',
  },
  ko: {
    title: '장이 예민하고 소화력이 약한 반려견을 위한 3대 식단 원칙',
    intro: '잦은 방귀, 묽은 변, 발을 끊임없이 핥는 증상에 시달리는 반려견은 소화 흡수가 쉬운 3가지 임상 영양학 원칙에 맞춘 식단이 반드시 필요합니다:',
    footerText: '8주간의 엄격한 알레르기 배제 식이요법(Elimination Diet) 프로토콜은 전문',
    footerLink: '알레르기 및 위장 민감성 케어 가이드',
    readMoreBtn: '자세히 보기 →',
  },
  it: {
    title: 'I Migliori Alimenti per Cani con Stomaco Sensibile',
    intro: 'Se il tuo cane soffre di flatulenza, feci molli o leccamento continuo delle zampe, necessita di una dieta altamente digeribile basata su tre principi clinici fondamentali:',
    footerText: 'Per il protocollo completo di dieta a eliminazione di 8 settimane e la lista dei principali allergeni, consulta la nostra',
    footerLink: 'guida dedicata ad Allergie e Stomaco Sensibile',
    readMoreBtn: 'Leggi di più →',
  },
};

export const SENSITIVE_STOMACH_PAGE_I18N: Record<Lang, SensitiveStomachPageI18n> = {
  en: {
    badge: 'SENSITIVE STOMACH // CLINICAL DIGESTIVE PROTOCOL',
    pillarBadgePrefix: 'PILLAR',
    reviewedBy: 'Reviewed by: Veterinary Canine Nutritionist',
    whatToLookForTitle: 'Key Ingredients to Look For',
    redFlagsTitle: 'Gastrointestinal Triggers to Avoid',
    fullBreakdown: 'Clinical Nutritional Breakdown',
    checklistTitle: 'Digestive Health Feeding Checklist',
    vetTipTitle: 'Veterinary Gastroenterology Advice',
    prevPillar: 'Previous Principle',
    nextPillar: 'Next Principle',
    backLink: 'Back to Best Dog Food Guide',
    titleSuffix: 'Sensitive Stomach Nutrition Guide | Dog Food Planner',
    ctaTitle: 'Calculate Your Dog’s Exact Daily Meal Portions',
    ctaDesc: 'Gentle, easily digestible diets require precise portions to prevent gastric overload and diarrhea.',
    ctaBtn: 'Calculate Meal Portions Now →',
  },
  es: {
    badge: 'ESTÓMAGO SENSIBLE // PROTOCOLO CLÍNICO DIGESTIVO',
    pillarBadgePrefix: 'PILAR',
    reviewedBy: 'Revisado por: Nutricionista Canino Veterinario',
    whatToLookForTitle: 'Ingredientes Clave Recomendados',
    redFlagsTitle: 'Desencadenantes Gastrointestinales a Evitar',
    fullBreakdown: 'Análisis Nutricional Clínico Detallado',
    checklistTitle: 'Lista de Control para Salud Digestiva',
    vetTipTitle: 'Consejo Clínico de Gastroenterología Veterinaria',
    prevPillar: 'Principio Anterior',
    nextPillar: 'Siguiente Principio',
    backLink: 'Volver a la Guía del Mejor Alimento',
    titleSuffix: 'Nutrición para Estómago Sensible | Dog Food Planner',
    ctaTitle: 'Calcula las Raciones Diarias Exactas para tu Perro',
    ctaDesc: 'Las dietas de fácil digestión requieren porciones exactas para no sobrecargar el estómago.',
    ctaBtn: 'Calcular Ración Diaria Ahora →',
  },
  ja: {
    badge: '胃腸ケア // 臨床消化器栄養プロトコル',
    pillarBadgePrefix: '原則',
    reviewedBy: '監修：獣医臨床栄養専門医',
    whatToLookForTitle: '積極的に取り入れたい良質成分',
    redFlagsTitle: '胃腸の炎症を引き起こす危険な原材料',
    fullBreakdown: '獣医臨床栄養学に基づく詳細解説',
    checklistTitle: 'お腹にやさしい給餌管理チェックリスト',
    vetTipTitle: '獣医消化器病専門医からのアドバイス',
    prevPillar: '前の原則',
    nextPillar: '次の原則',
    backLink: 'おすすめドッグフード総合ガイドに戻る',
    titleSuffix: 'お腹が弱い犬のための食事療法ガイド | Dog Food Planner',
    ctaTitle: '愛犬に最適な日々の給餌量を計算する',
    ctaDesc: '消化器に優しい食事は、1回ごとの正確な給餌量が胃腸の負担軽減と軟便改善の鍵となります。',
    ctaBtn: '今すぐ適正給餌量を計算する →',
  },
  fr: {
    badge: 'ESTOMAC SENSIBLE // PROTOCOLE DIGESTIF CLINIQUE',
    pillarBadgePrefix: 'PILIER',
    reviewedBy: 'Vérifié par : Nutritionniste Canin Vétérinaire',
    whatToLookForTitle: 'Ingrédients Clés Recommandés',
    redFlagsTitle: 'Déclencheurs Digestifs à Proscrire',
    fullBreakdown: 'Analyse Nutritionnelle Clinique',
    checklistTitle: 'Check-list pour la Santé Gastro-Intestinale',
    vetTipTitle: 'Recommandation Clinique en Gastro-entérologie',
    prevPillar: 'Principe précédent',
    nextPillar: 'Principe suivant',
    backLink: 'Retour au Guide du Meilleur Aliment',
    titleSuffix: 'Guide Estomac Sensible chez le Chien | Dog Food Planner',
    ctaTitle: 'Calculez la Ration Quotidienne Exacte de Votre Chien',
    ctaDesc: 'Une alimentation douce et digestible nécessite des portions ajustées pour éviter toute surcharge gastrique.',
    ctaBtn: 'Calculer les Portions Maintenant →',
  },
  de: {
    badge: 'EMPFINDLICHER MAGEN // KLINISCHES VERDAUUNGSPROTOKOLL',
    pillarBadgePrefix: 'SÄULE',
    reviewedBy: 'Geprüft von: Tierärztlicher Ernährungsberater',
    whatToLookForTitle: 'Empfohlene magenfreundliche Zutaten',
    redFlagsTitle: 'Gastrointestinale Auslöser meiden',
    fullBreakdown: 'Klinische ernährungsphysiologische Analyse',
    checklistTitle: 'Fütterungs-Checkliste für Magen & Darm',
    vetTipTitle: 'Gastroenterologische Fachempfehlung',
    prevPillar: 'Vorheriges Prinzip',
    nextPillar: 'Nächstes Prinzip',
    backLink: 'Zurück zur Futter-Bestenliste',
    titleSuffix: 'Schonkost-Leitfaden für empfindliche Hunde | Dog Food Planner',
    ctaTitle: 'Berechnen Sie die exakte Futtermenge für Ihren Hund',
    ctaDesc: 'Schonende Diäten erfordern präzise Rationen, um Magen und Darm nicht durch Überladung zu reizen.',
    ctaBtn: 'Tagesportion jetzt berechnen →',
  },
  pt: {
    badge: 'ESTÔMAGO SENSÍVEL // PROTOCOLO CLÍNICO DIGESTIVO',
    pillarBadgePrefix: 'PILAR',
    reviewedBy: 'Revisado por: Nutricionista Veterinário Canino',
    whatToLookForTitle: 'Ingredientes Chave Benéficos',
    redFlagsTitle: 'Gatilhos Gastrointestinais a Evitar',
    fullBreakdown: 'Análise Nutricional Clínica Aprofundada',
    checklistTitle: 'Checklist para Saúde Gastrointestinal',
    vetTipTitle: 'Orientação Veterinária em Gastroenterologia',
    prevPillar: 'Princípio Anterior',
    nextPillar: 'Próximo Princípio',
    backLink: 'Voltar ao Guia da Melhor Ração',
    titleSuffix: 'Guia de Nutrição para Estômago Sensível | Dog Food Planner',
    ctaTitle: 'Calcule a Porção Diária Exata do Seu Cão',
    ctaDesc: 'Alimentos hipoalergênicos e suaves exigem gramaturas controladas para não sobrecarregar a digestão.',
    ctaBtn: 'Calcular Porção Diária Agora →',
  },
  ko: {
    badge: '위장 민감성 케어 // 임상 소화기 영양 프로토콜',
    pillarBadgePrefix: '원칙',
    reviewedBy: '검수: 수의 임상 영양학 전문의',
    whatToLookForTitle: '권장하는 핵심 장 건강 원료',
    redFlagsTitle: '피해야 할 장염 및 알레르기 유발 인자',
    fullBreakdown: '수의 임상 영양학 심층 분석',
    checklistTitle: '장 건강 개선 급여 관리 체크리스트',
    vetTipTitle: '수의 소화기내과 전문 조언',
    prevPillar: '이전 원칙',
    nextPillar: '다음 원칙',
    backLink: '최고의 사료 종합 가이드로 돌아가기',
    titleSuffix: '예민한 장을 위한 반려견 식단 가이드 | Dog Food Planner',
    ctaTitle: '우리 아이 맞춤 일일 사료 급여량 계산하기',
    ctaDesc: '장이 약한 아이는 한 번에 너무 많은 양을 먹지 않도록 정밀한 그램(g) 수 계산과 식사 분할이 필수입니다.',
    ctaBtn: '맞춤 급여량 계산하기 →',
  },
  it: {
    badge: 'STOMACO SENSIBILE // PROTOCOLLO DIGESTIVO CLINICO',
    pillarBadgePrefix: 'PILASTRO',
    reviewedBy: 'Revisionato da: Medico Veterinario Nutrizionista',
    whatToLookForTitle: 'Ingredienti Chiave Altamente Digeribili',
    redFlagsTitle: 'Fattori Scatenanti Gastrointestinali da Evitare',
    fullBreakdown: 'Approfondimento Nutrizionale Clinico',
    checklistTitle: 'Checklist per la Salute Gastrointestinale',
    vetTipTitle: 'Consiglio Clinico di Gastroenterologia Veterinaria',
    prevPillar: 'Principio Precedente',
    nextPillar: 'Principio Successivo',
    backLink: 'Torna alla Guida al Miglior Cibo',
    titleSuffix: 'Nutrizione per Cani con Stomaco Sensibile | Dog Food Planner',
    ctaTitle: 'Calcola la Dose Giornaliera Esatta per il Tuo Cane',
    ctaDesc: 'Le diete delicate richiedono dosaggi precisi per evitare il sovraccarico gastrico e le feci molli.',
    ctaBtn: 'Calcola la Razione Quotidiana Ora →',
  },
};

const SENSITIVE_STOMACH_DATA: Record<Lang, SensitiveStomachPillar[]> = {
  en: [
    {
      slug: 'single-novel-protein',
      pillarNumber: 1,
      title: 'Single Novel Protein',
      desc: 'Avoid common allergens (chicken, dairy) — use lean turkey, wild salmon, pasture lamb, venison, or duck instead.',
      readMore:
        "Over 70% of canine food allergies and chronic gastrointestinal inflammatory flare-ups originate from repeated, long-term exposure to common commercial proteins—predominantly low-grade factory-farmed chicken, beef, dairy, and wheat gluten. When the intestinal mucosal lining becomes irritated or hyper-permeable ('leaky gut'), the immune system identifies these frequent protein antigens as foreign invaders, triggering chronic pruritus, paw-licking, loose stool, and painful gas.\n\nA true single novel protein diet introduces an animal protein source your specific dog has never consumed before, such as wild venison, duck, pasture-raised lamb, rabbit, or wild Alaskan salmon. Because the immune system has never developed antibodies against this novel molecular structure, gut inflammation begins subsiding almost immediately.\n\nSingle-source transparency is vital: budget pet foods often print 'Lamb & Rice' on the front bag, yet quietly include chicken fat, poultry byproduct meal, or hydrolyzed eggs in the fine print. Even minute trace contaminants can sabotage an elimination diet and prolong intestinal inflammation.",
      whatToLookFor: [
        '100% single animal protein source (e.g., Only Venison, Only Duck, or Only Pasture Lamb)',
        'Explicit disclosure of all fat sources (e.g., pure lamb fat or salmon oil, zero mixed poultry fat)',
        'Limited ingredient recipe (LID) with minimal fillers and a single clean carbohydrate source',
      ],
      redFlags: [
        'Sneaky poultry fat or egg powder listed in foods advertised as "Lamb" or "Fish"',
        'Vague collective terms like "meat and animal derivatives" or "poultry by-product meal"',
        'Multi-protein blends containing 3 or 4 different animal species simultaneously',
      ],
      checklist: [
        'Inspect every single line of the ingredient panel to confirm zero hidden chicken or dairy derivatives.',
        'Commit to a strict 8 to 12-week feeding window with zero unvetted treats, chews, or table scraps.',
        'Choose a complete and balanced formula meeting AAFCO/FEDIAF standards to prevent nutritional deficiencies.',
      ],
      vetTip:
        'In clinical canine dermatology and gastroenterology, switching to a strictly formulated single novel protein resolves up to 80% of dietary hypersensitivities within 8 weeks. Absolute compliance without accidental treat contamination is the secret to success.',
    },
    {
      slug: 'soluble-prebiotic-fiber',
      pillarNumber: 2,
      title: 'Soluble Prebiotic Fiber',
      desc: 'Organic pumpkin puree, chicory root, and psyllium husk regulate intestinal transit time and feed beneficial gut flora.',
      readMore:
        "The canine digestive tract is anatomically short and highly acidic, evolved primarily for digesting animal protein and fats rather than voluminous plant fiber. However, targeted soluble prebiotic fiber serves an indispensable regulatory and healing role for irritated intestines.\n\nUnlike coarse insoluble fiber (which adds bulk and accelerates transit), soluble fiber absorbs water in the gastrointestinal tract to form a soothing, protective gel. This viscous gel performs a remarkable dual action: it slows transit time during acute bouts of watery diarrhea to allow fluid absorption, while simultaneously softening hard, impacted stools during constipation.\n\nCrucially, canine colon epithelial cells (colonocytes) obtain the vast majority of their energy from Short-Chain Fatty Acids (SCFAs)—most notably butyrate—generated when beneficial gut bacteria ferment soluble prebiotic fibers like inulin (from chicory root) and organic pumpkin puree. Supplying gentle prebiotic fibers accelerates mucosal healing and restores healthy microbiome balance.",
      whatToLookFor: [
        '100% pure organic pumpkin puree (free from added sugars, salt, or baking spices)',
        'Gentle natural prebiotic fibers: Chicory Root Extract (Inulin/FOS) and Psyllium Seed Husk',
        'Soothing botanical gut protectors like Slippery Elm Bark and Marshmallow Root',
      ],
      redFlags: [
        'Canned pumpkin pie filling containing toxic spices like nutmeg or high corn syrup',
        'Harsh insoluble fibers (e.g., powdered cellulose, peanut hulls) that cause painful bloating',
        'Excessive total fiber exceeding 5% on a dry matter basis, which impedes protein absorption',
      ],
      checklist: [
        'Add 1 to 2 teaspoons of pure pumpkin puree per 20 lbs of dog body weight to daily meals.',
        'Introduce any new prebiotic fiber supplement gradually over 5 to 7 days to avoid transient gas.',
        'Ensure constant access to fresh water, as soluble fiber requires hydration to form its protective gel.',
      ],
      vetTip:
        'Butyrate synthesized from prebiotic fermentation serves as the primary cellular fuel for intestinal repair. Adding gentle soluble fiber can calm acute gastrointestinal flare-ups and firm loose stools within 24 to 48 hours.',
    },
    {
      slug: 'anti-inflammatory-omega-3s',
      pillarNumber: 3,
      title: 'Anti-Inflammatory Omega-3s',
      desc: 'Wild Alaskan salmon oil and green-lipped mussel (EPA/DHA) soothe the gut mucosal barrier and reduce chronic inflammation.',
      readMore:
        "Commercial dry dog foods are overwhelmingly skewed toward pro-inflammatory Omega-6 fatty acids (found in chicken fat, corn oil, soybean oil, and sunflower oil), with ratios frequently exceeding 20:1 or even 30:1. In dogs suffering from sensitive digestion, this systemic fatty acid imbalance fuels the continuous production of inflammatory eicosanoids, leading to chronic enteritis and bowel wall thickening.\n\nUnlike humans, dogs have very limited enzyme capacity (delta-6-desaturase) to convert plant-based Omega-3s (Alpha-Linolenic Acid / ALA from flaxseed or chia seeds) into the biologically active forms Eicosapentaenoic Acid (EPA) and Docosahexaenoic Acid (DHA). Canine conversion rates are typically under 5%.\n\nMarine-derived Omega-3s—sourced directly from wild Alaskan salmon oil, sardines, anchovies, or New Zealand green-lipped mussels—deliver pre-formed EPA and DHA. These long-chain fatty acids directly integrate into intestinal cell membranes, displacing arachidonic acid and dramatically suppressing inflammatory cytokines (TNF-alpha and IL-6) to rebuild gut barrier integrity.",
      whatToLookFor: [
        'Cold-pressed Wild Alaskan Salmon Oil, Sardine Oil, or Anchovy Oil',
        'Guaranteed concentrations of EPA and DHA per pump or milliliter on the guaranteed analysis',
        'Natural preservation with Vitamin E (mixed tocopherols) in light-protective pump containers',
      ],
      redFlags: [
        'Relying solely on flaxseed oil or hemp oil as the only Omega-3 source for canine digestion',
        'Farmed salmon oil that may carry pesticide residues, lower natural EPA/DHA, and higher Omega-6',
        'Rancid, oxidized fish oil stored in clear transparent plastic bottles exposed to sunlight',
      ],
      checklist: [
        'Target a combined EPA + DHA dosage of approximately 50 to 75 mg per kilogram of body weight.',
        'Keep opened marine oils refrigerated and use within 60 to 90 days to prevent lipid oxidation.',
        'Introduce fish oil gradually over 7 to 10 days to allow the pancreas to adjust smoothly.',
      ],
      vetTip:
        'In clinical veterinary trials, marine EPA and DHA have demonstrated significant reductions in intestinal mucosal permeability and gastrointestinal histopathology scores. High-quality fish oil is a true biological anti-inflammatory medicine for the canine gut.',
    },
  ],
  es: [
    {
      slug: 'single-novel-protein',
      pillarNumber: 1,
      title: 'Proteína Novedosa Única',
      desc: 'Evita alérgenos comunes (pollo, lácteos) — utiliza pavo magro, salmón salvaje, cordero de pasto, venado o pato.',
      readMore:
        'Más del 70% de las alergias e inflamaciones gastrointestinales crónicas en perros se originan por el consumo continuado de proteínas industriales comunes, principalmente pollo de engorde intensivo, ternera, lácteos y gluten de trigo. Cuando la mucosa intestinal se irrita y se vuelve hiperpermeable («intestino permeable»), el sistema inmunitario identifica estas proteínas como amenazas, desencadenando picores, heces blandas y gases dolorosos.\n\nUna auténtica dieta de proteína novedosa única introduce una fuente animal que ese perro nunca ha comido (como venado salvaje, pato, cordero criado en pasto, conejo o salmón salvaje). Como el organismo no ha generado anticuerpos contra esa molécula proteica, la inflamación digestiva y cutánea remite con rapidez.\n\nEs fundamental la transparencia absoluta: muchas marcas anuncian «Cordero y Arroz» en el frontal del saco, pero incluyen grasa de pollo oculta o harinas de ave en la letra pequeña. Incluso una traza minúscula puede boicotear una dieta de eliminación.',
      whatToLookFor: [
        '100% única fuente de proteína animal claramente especificada (ej. Solo Venado, Solo Pato o Solo Cordero)',
        'Grasas animales identificadas de la misma especie o aceite de pescado puro',
        'Fórmulas de ingredientes limitados (LID) sin rellenos innecesarios',
      ],
      redFlags: [
        'Grasa de pollo o huevo en polvo ocultos en alimentos anunciados como hipoalergénicos',
        'Términos ambiguos como "subproductos cárnicos" o "harinas de carnes variadas"',
        'Mezclas de 3 o 4 tipos de carne en un mismo alimento para estómagos sensibles',
      ],
      checklist: [
        'Lee cada línea de la lista de ingredientes para confirmar que no hay derivados de pollo ni lácteos.',
        'Mantén la dieta de eliminación estricta durante 8 a 12 semanas sin premios ni sobras de mesa.',
        'Asegúrate de que la receta cumpla con los estándares nutricionales completos de la FEDIAF/AAFCO.',
      ],
      vetTip:
        'En gastroenterología canina, una dieta estricta de proteína novedosa única resuelve hasta el 80% de las intolerancias digestivas en 8 semanas. La clave es la disciplina total sin premios contaminados.',
    },
    {
      slug: 'soluble-prebiotic-fiber',
      pillarNumber: 2,
      title: 'Fibra Prebiótica Soluble',
      desc: 'El puré de calabaza ecológico, la raíz de achicoria y el psyllium regulan el tránsito y nutren la flora intestinal.',
      readMore:
        'El tracto digestivo del perro es corto y ácido, adaptado para procesar proteínas y grasas animales más que grandes volúmenes de fibra vegetal insoluble. Sin embargo, la fibra prebiótica soluble cumple una función reguladora y reparadora fundamental para los intestinos irritados.\n\nA diferencia de la fibra insoluble (que acelera el tránsito), la fibra soluble absorbe agua formando un gel balsámico protector. Este gel actúa de doble forma: ralentiza el tránsito en diarreas acuosas para permitir la absorción de líquidos, y ablanda las heces secas en episodios de estreñimiento.\n\nAdemás, las células del colon canino (colonocitos) obtienen su energía de los Ácidos Grasos de Cadena Corta (AGCC), especialmente el butirato, generado cuando la microbiota beneficiosa fermenta fibras prebióticas como la inulina (raíz de achicoria) o el puré de calabaza pura. Esto repara la barrera intestinal y restaura la flora digestiva.',
      whatToLookFor: [
        'Puré de calabaza 100% puro y ecológico (sin sal, azúcar ni especias)',
        'Prebióticos naturales demostrados: Inulina de achicoria (FOS) y semillas de psyllium',
        'Plantas calmantes de la mucosa digestiva como el olmo resbaladizo o malvavisco',
      ],
      redFlags: [
        'Relleno de tarta de calabaza con azúcar o especias tóxicas como la nuez moscada',
        'Fibras insolubles agresivas como cáscaras de cacahuete o celulosa sintética que provocan gases',
        'Exceso de fibra total superior al 5% en materia seca, que compromete la absorción proteica',
      ],
      checklist: [
        'Añade de 1 a 2 cucharaditas de puré de calabaza por cada 10 kg de peso a la comida diaria.',
        'Introduce los suplementos prebióticos de forma gradual a lo largo de 5 a 7 días.',
        'Asegura acceso continuo a agua fresca, ya que la fibra soluble requiere hidratación para actuar.',
      ],
      vetTip:
        'El butirato producido por la fermentación prebiótica es el combustible directo para regenerar la mucosa intestinal. Una cucharada de puré de calabaza puede estabilizar heces blandas en 24 a 48 horas.',
    },
    {
      slug: 'anti-inflammatory-omega-3s',
      pillarNumber: 3,
      title: 'Omega-3 Antiinflamatorios',
      desc: 'El aceite de salmón salvaje y el mejillón de labio verde (EPA/DHA) calman la mucosa y frenan la inflamación crónica.',
      readMore:
        'Los piensos comerciales contienen un exceso notable de ácidos grasos Omega-6 proinflamatorios (presentes en grasas de ave, aceite de maíz y soja), con proporciones que a menudo superan 20:1 o 30:1. En perros con digestión sensible, este desequilibrio favorece la síntesis de eicosanoides inflamatorios, cronificando la enteritis y el engrosamiento de las paredes intestinales.\n\nA diferencia de los humanos, los perros apenas pueden convertir los Omega-3 de origen vegetal (ALA del lino o chía) en sus formas biológicamente activas EPA y DHA; la tasa de conversión hepática canina suele ser inferior al 5%.\n\nLos Omega-3 marinos —obtenidos de salmón salvaje de Alaska, sardinas, anchoas o mejillón de labio verde— aportan EPA y DHA preformados. Estos ácidos grasos se incorporan a las membranas de las células intestinales, desplazando al ácido araquidónico y reduciendo drásticamente las citocinas inflamatorias (TNF-alfa e IL-6) para regenerar el intestino.',
      whatToLookFor: [
        'Aceite de salmón salvaje prensado en frío, aceite de sardina o de anchoa',
        'Niveles garantizados de EPA y DHA por pulsación o mililitro en el etiquetado',
        'Conservación natural con Vitamina E (tocoferoles) en botellas opacas con dosificador',
      ],
      redFlags: [
        'Depender únicamente de aceite de lino como fuente de Omega-3 para perros con problemas digestivos',
        'Aceite de salmón de piscifactoría con posibles residuos y niveles reducidos de EPA/DHA',
        'Aceites de pescado rancios u oxidados envasados en botellas de plástico transparente',
      ],
      checklist: [
        'Ajusta la dosis a unos 50 a 75 mg combinados de EPA + DHA por kilo de peso corporal.',
        'Conserva el aceite de pescado en el frigorífico una vez abierto y úsalo en un plazo de 60 a 90 días.',
        'Introduce el aceite poco a poco a lo largo de una semana para que el páncreas se adapte.',
      ],
      vetTip:
        'En ensayos clínicos con enfermedad inflamatoria intestinal canina, el EPA y DHA marino reducen significativamente la permeabilidad de la barrera mucosa y alivian la inflamación crónica.',
    },
  ],
  ja: [
    {
      slug: 'single-novel-protein',
      pillarNumber: 1,
      title: '単一の新規タンパク源の採用',
      desc: 'チキンや乳製品などのアレルゲンを避け、七面鳥、生サーモン、放牧ラム、鹿肉、鴨肉などの単一タンパク源を選びましょう。',
      readMore:
        '犬の食物アレルギーや慢性的な胃腸炎の7割以上は、日常的に頻繁に摂取している一般的なタンパク質（特にブロイラー鶏肉、牛肉、乳製品、小麦グルテンなど）が原因です。腸の粘膜バリアが破壊されて「リーキーガット（腸漏れ症候群）」に陥ると、免疫系がこれらのタンパク質を外敵と誤認し、激しい痒み、手足の舐め壊し、慢性的な下痢やガスを引き起こします。\n\n真の「単一新規タンパク質（シングル・ノベル・プロテイン）」食とは、その愛犬が生涯で一度も口にしたことのない動物性タンパク質（野生の鹿肉、鴨肉、放牧ラム、馬肉、天然サーモンなど）のみで構成された食事です。体内に抗体が存在しないため、免疫過剰反応が起きず、腸の炎症が速やかに鎮静化します。\n\nここで極めて重要なのが「原材料の完全な単一性」です。パッケージ表に「ラム＆ライス」と書かれていても、裏面の原材料に安価な「鶏脂」や「家禽副産物ミール」が混入している市販フードは少なくありません。微量の混入でもアレルギー反応を再燃させるため、厳格な原材料確認が必要です。',
      whatToLookFor: [
        '原材料の動物性タンパク質が100％単一であること（鹿肉のみ、ラム肉のみなど）',
        '油脂類も単一動物種由来または純粋な魚油のみを使用していること',
        '不要な添加物を削ぎ落とした原材料限定（LID）処方であること',
      ],
      redFlags: [
        '「ラム肉使用」と謳いながらチキンエキスや鶏脂が混ざっている製品',
        '「家禽副産物ミール」や「動物性油脂」など由来動物が不明瞭な表記',
        '胃腸が弱っている愛犬への多種タンパク質混合フードの給餌',
      ],
      checklist: [
        '原材料表示を最初から最後まで精読し、鶏肉や乳製品の微量混入がないかチェック。',
        '余計なおやつや人間の食べ物を完全に断ち、8〜12週間の厳格な除去食を徹底。',
        'AAFCO/FEDIAF等の総合栄養基準を満たした製品を選び、長期給餌での栄養失調を防止。',
      ],
      vetTip:
        '獣医皮膚科・消化器科において、厳格な単一新規タンパク食への変更は8週間以内に約8割の食物不耐性を改善させます。家族全員で「規定フード以外は一切与えない」ルールを徹底することが成功の鍵です。',
    },
    {
      slug: 'soluble-prebiotic-fiber',
      pillarNumber: 2,
      title: '水溶性プレバイオティクス食物繊維',
      desc: '有機かぼちゃ、チコリー根、オオバコ種皮（サイリウム）が腸の蠕動運動を整え、善玉菌の増殖を促します。',
      readMore:
        '犬の消化管は肉食動物特有の短い構造をしており、大量の不溶性食物繊維を消化するようにはできていません。しかし、水溶性かつ発酵性のプレバイオティクス食物繊維は、傷ついた腸粘膜の修復と腸内細菌叢の回復に決定的な役割を果たします。\n\n水分を吸って便のかさを増す不溶性食物繊維とは異なり、水溶性食物繊維は水分を抱え込んでゲル状の保護膜を形成します。このゲルが、水様性下痢の際には水分を保持して腸内通過速度を緩やかにし、逆に便秘の際には固い便を柔らかく保つという「双方向の便性改善作用」を発揮します。\n\nさらに重要なのは、犬の大腸上皮細胞の主要なエネルギー源が、腸内善玉菌がイヌリン（チコリー根）やかぼちゃの繊維を発酵させて生成する「短鎖脂肪酸（特に酪酸）」であるという点です。プレバイオティクスを適切に補給することで、腸粘膜の修復が劇的に促進されます。',
      whatToLookFor: [
        '砂糖や香料、塩分を一切加えない100％無添加オーガニックかぼちゃピューレ',
        '科学的根拠のあるプレバイオティクス：チコリー根抽出物（イヌリン/FOS）、サイリウム種皮',
        'アカニレ樹皮（スリッパリーエルム）など粘膜保護作用のあるハーブ成分',
      ],
      redFlags: [
        '犬に有害なナツメグやシナモン、砂糖が添加された人間用パンプキンパイの缶詰',
        '落花生の殻や粉末セルロースなど、腸を刺激して強烈なガスを発生させる粗悪な不溶性食物繊維',
        '乾物ベースで5％を超える過剰な食物繊維（タンパク質やミネラルの吸収阻害要因）',
      ],
      checklist: [
        '体重5kgあたり小さじ半分〜1杯の純粋なかぼちゃピューレを毎食トッピング。',
        '繊維サプリメントを取り入れる際は、お腹のガスを防ぐため5〜7日かけて少しずつ増量。',
        '水溶性繊維は水分を吸収して働くため、新鮮な水をいつでも飲める環境を維持。',
      ],
      vetTip:
        '発酵によって生じる短鎖脂肪酸（酪酸）は、腸の粘膜バリアを再建する特効薬です。適量の良質な水溶性繊維を補給することで、24〜48時間以内に軟便が引き締まります。',
    },
    {
      slug: 'anti-inflammatory-omega-3s',
      pillarNumber: 3,
      title: '抗炎症作用を持つ海洋性オメガ3脂肪酸',
      desc: 'アラスカ産天然サーモンオイルや緑イ貝（EPA/DHA）が腸粘膜の赤みと慢性炎症を速やかに鎮めます。',
      readMore:
        '一般的な市販ドライフードは、原料油脂（鶏脂、コーン油、大豆油など）の影響で、炎症を促進するオメガ6脂肪酸の割合が極めて高く、オメガ6とオメガ3の比率が20:1〜30:1にも達することがあります。胃腸の弱い犬において、この脂肪酸バランスの崩れは腸壁の慢性炎症と腸壁肥厚を悪化させ続けます。\n\n人間と異なり、犬は亜麻仁油やチアシードに含まれる植物性オメガ3（ALA：アルファリノレン酸）を、活性型のEPAやDHAに変換する体内酵素の働きが極めて弱く、変換効率はわずか5％未満にとどまります。\n\nそのため、アラスカ産天然サーモンオイル、イワシ、アンチョビ、あるいはニュージーランド産緑イ貝から直接抽出した海洋性EPA/DHAを摂取することが不可欠です。EPAとDHAは腸上皮細胞の細胞膜に直接組み込まれ、炎症性サイトカイン（TNF-αやIL-6）の産生を強力に抑制し、腸の健康を根底から立て直します。',
      whatToLookFor: [
        '低温圧搾（コールドプレス）のアラスカ産天然サーモンオイル、イワシ油、タラ肝油',
        '製品保証値に1プッシュまたはmlあたりのEPA・DHA含有量が明記されている製品',
        '天然ビタミンE（ミックストコフェロール）配合の遮光ポンプボトル入り製品',
      ],
      redFlags: [
        '胃腸炎の犬に対して亜麻仁油などの植物性オイルのみに頼ること',
        '重金属やオメガ6が多い養殖サーモンオイル',
        '日光や熱にさらされて酸化・酸敗した透明ペットボトル入りの魚油',
      ],
      checklist: [
        '体重1kgあたり合計50〜75mgのEPA+DHAを目安に計量給餌する。',
        '開封後は必ず冷蔵庫で保管し、酸化を防ぐため60〜90日以内に使い切る。',
        'すい臓への負担を避けるため、1週間ほどかけて少量から徐々に増量する。',
      ],
      vetTip:
        '犬の炎症性腸疾患（IBD）に関する臨床試験において、EPA/DHAの投与は腸粘膜の組織学的炎症スコアを有意に低下させました。良質な魚油は、胃腸に悩む愛犬にとって不可欠な天然の抗炎症薬です。',
    },
  ],
  fr: [
    {
      slug: 'single-novel-protein',
      pillarNumber: 1,
      title: 'Protéine Novatrice Unique',
      desc: 'Évitez les allergènes courants (poulet, bœuf, produits laitiers) — privilégiez la dinde maigre, le saumon sauvage, l’agneau, le cerf ou le canard.',
      readMore:
        "Plus de 70 % des intolérances alimentaires et gastrites chroniques chez le chien résultent d'une exposition répétée aux protéines industrielles courantes, principalement le poulet d'élevage intensif, le bœuf, les produits laitiers et le gluten de blé. Lorsque la barrière muqueuse intestinale s'altère (« perméabilité intestinale »), le système immunitaire surréagit, provoquant démangeaisons, selles molles et gaz douloureux.\n\nUn véritable régime à protéine novatrice unique intègre une viande que le chien n'a encore jamais consommée (comme le gibier sauvage, le canard, l'agneau de pâturage, le lapin ou le saumon sauvage). En l'absence d'anticorps préexistants contre cette molécule, l'inflammation digestive s'apaise rapidement.\n\nLa transparence mono-protéique est essentielle : de nombreuses marques affichent « Agneau & Riz » en façade, tout en dissimulant de la graisse de poulet ou des farines d'abats de volaille dans la composition. Même une infime trace peut compromettre un protocole d'éviction.",
      whatToLookFor: [
        'Source de protéine animale 100 % unique et clairement nommée (ex : Cerf uniquement, Agneau uniquement)',
        'Graisses animales identifiées issues de la même espèce ou huile de poisson sauvage pure',
        'Formules à ingrédients limités (LID) sans additifs de remplissage superflus',
      ],
      redFlags: [
        'Graisse de poulet ou poudre d’œuf dissimulées dans des croquettes vendues comme hypoallergéniques',
        'Termes flous tels que « viandes et sous-produits animaux » ou « farines d’espèces mixtes »',
        'Mélanges associant 3 ou 4 viandes différentes pour un chien à transit fragile',
      ],
      checklist: [
        'Examinez chaque ligne de la composition pour exclure tout dérivé de volaille ou de bœuf.',
        'Maintenez le régime d’éviction strict durant 8 à 12 semaines sans aucune friandise non autorisée.',
        'Assurez-vous que la formule réponde aux normes nutritionnelles complètes FEDIAF/AAFCO.',
      ],
      vetTip:
        'En gastro-entérologie canine, un régime mono-protéique novateur résout jusqu’à 80 % des intolérances digestives en 8 semaines. Une rigueur absolue sans aucun écart de friandise est la clé.',
    },
    {
      slug: 'soluble-prebiotic-fiber',
      pillarNumber: 2,
      title: 'Fibres Prébiotiques Solubles',
      desc: 'La purée de citrouille bio, la racine de chicorée et le psyllium régulent le transit et nourrissent le microbiote.',
      readMore:
        "Le système digestif du chien est court et acide, adapté aux protéines et graisses animales plutôt qu'à d'importants volumes de fibres végétales insolubles. Néanmoins, les fibres prébiotiques solubles jouent un rôle réparateur indispensable pour les muqueuses enflammées.\n\nContrairement aux fibres insolubles rugueuses (qui accélèrent le transit), les fibres solubles captent l'eau pour former un gel protecteur apaisant. Ce gel agit avec une double efficacité remarquable : il ralentit le transit lors d'épisodes de diarrhée liquide pour favoriser la réabsorption d'eau, et assouplit les selles dures en cas de constipation.\n\nDe plus, les cellules du côlon (colonocytes) tirent l'essentiel de leur énergie des Acides Gras à Chaîne Courte (AGCC), notamment le butyrate, produit lorsque les bonnes bactéries fermentent l'inuline (racine de chicorée) ou la purée de citrouille. Cet apport accélère la cicatrisation intestinale.",
      whatToLookFor: [
        'Purée de citrouille 100 % pure et biologique (sans sel, sucre ni épices de cuisine)',
        'Prébiotiques naturels validés : Inuline de chicorée (FOS) et téguments de psyllium blond',
        'Plantes apaisantes des muqueuses comme l’orme rouge (Slippery Elm) ou la guimauve',
      ],
      redFlags: [
        'Préparations pour tarte à la citrouille contenant de la muscade toxique ou des sirops',
        'Fibres insolubles agressives comme la cellulose en poudre qui provoquent d’intenses ballonnements',
        'Teneur totale en fibres dépassant 5 % sur matière sèche, freinant l’assimilation des nutriments',
      ],
      checklist: [
        'Ajoutez 1 à 2 cuillères à café de purée de citrouille par tranche de 10 kg de poids corporel.',
        'Introduisez les fibres prébiotiques sur 5 à 7 jours pour éviter les flatulences passagères.',
        'Laissez toujours de l’eau fraîche disponible, la fibre soluble nécessitant de l’eau pour gélifier.',
      ],
      vetTip:
        'Le butyrate issu de la fermentation prébiotique est le carburant direct de régénération des cellules du côlon. Un apport mesuré de fibres solubles stabilise les selles molles en 24 à 48 heures.',
    },
    {
      slug: 'anti-inflammatory-omega-3s',
      pillarNumber: 3,
      title: 'Oméga-3 Anti-Inflammatoires',
      desc: 'L’huile de saumon sauvage et la moule verte (EPA/DHA) apaisent la muqueuse intestinale et réduisent l’inflammation.',
      readMore:
        "Les croquettes industrielles renferment un excès flagrant d'acides gras Oméga-6 pro-inflammatoires (graisse de volaille, huiles de maïs et de soja), avec des ratios atteignant souvent 20:1 ou 30:1. Chez le chien à digestion sensible, ce déséquilibre entretient la production d'eicosanoïdes inflammatoires, pérennisant les entérites chroniques et l'épaississement de la paroi digestive.\n\nContrairement aux humains, le chien ne convertit que très faiblement les Oméga-3 végétaux (ALA du lin ou chia) en formes actives EPA et DHA ; le taux de conversion hépatique canin est inférieur à 5 %.\n\nLes Oméga-3 marins — issus du saumon sauvage d'Alaska, de la sardine, de l'anchois ou de la moule verte — apportent directement l'EPA et le DHA préformés. Ces acides gras s'intègrent aux membranes cellulaires de l'intestin, déplaçant l'acide arachidonique et réduisant drastiquement les cytokines inflammatoires (TNF-alpha et IL-6) pour restaurer l'intégrité de la barrière muqueuse.",
      whatToLookFor: [
        'Huile de saumon sauvage d’Alaska, de sardine ou d’anchois extraite à froid',
        'Concentrations garanties en EPA et DHA par dose clairement indiquées sur le flacon',
        'Stabilisation naturelle à la Vitamine E (tocophérols) dans un flacon pompe opaque',
      ],
      redFlags: [
        'Se reposer sur l’huile de lin comme unique source d’Oméga-3 chez un chien sensible',
        'Huiles de saumon d’élevage pouvant contenir des résidus et des taux faibles d’EPA/DHA',
        'Huiles de poisson rances ou oxydées conditionnées dans des bouteilles transparentes',
      ],
      checklist: [
        'Visez un apport d’environ 50 à 75 mg combinés d’EPA + DHA par kilo de poids corporel.',
        'Conservez l’huile entamée au réfrigérateur et consommez-la dans les 60 à 90 jours.',
        'Introduisez l’huile de poisson progressivement sur une dizaine de jours pour habituer le pancréas.',
      ],
      vetTip:
        'Dans les études cliniques sur les maladies inflammatoires chroniques de l’intestin (MICI), la supplémentation en EPA/DHA marin diminue significativement la perméabilité muqueuse et soulage les troubles digestifs.',
    },
  ],
  de: [
    {
      slug: 'single-novel-protein',
      pillarNumber: 1,
      title: 'Monoprotein mit neuartiger Fleischquelle',
      desc: 'Häufige Allergene meiden (Huhn, Rind, Milch) — setzen Sie stattdessen auf magere Pute, Lachs, Weidelamm, Hirsch oder Ente.',
      readMore:
        'Über 70 % aller Futtermittelallergien und chronischen Magen-Darm-Entzündungen bei Hunden entstehen durch den dauerhaften Verzehr gewöhnlicher Standardproteine – vor allem Masthuhn, Rindfleisch, Molkereiprodukte und Weizengluten. Wenn die Darmschleimhaut gereizt und durchlässig wird („Leaky-Gut-Syndrom“), reagiert das Immunsystem über und löst Juckreiz, Pfotenlecken, chronischen Durchfall und Blähungen aus.\n\nEine echte Monoprotein-Ausschlussdiät mit neuartiger Fleischquelle (Novel Protein) setzt auf eine Tierart, die der Hund noch nie gefressen hat (wie Hirsch, Ente, Weidelamm, Kaninchen oder Wildlachs). Da das Immunsystem keine Antikörper gegen dieses Protein gebildet hat, beruhigt sich die Entzündung rasch.\n\nVolle Transparenz ist entscheidend: Viele Hersteller werben mit „Lamm & Reis“, mischen im Kleingedruckten jedoch billiges Hühnerfett oder Geflügelmehle bei. Schon geringste Spuren können eine Ausschlussdiät zunichtemachen.',
      whatToLookFor: [
        '100 % reine Einzelprotein-Quelle (z. B. ausschließlich Hirsch, Ente oder Weidelamm)',
        'Klar deklarierte Fettquellen derselben Tierart oder reines Wildlachsöl',
        'Rezeptur mit reduzierten Zutaten (LID) ohne überflüssige Füllstoffe',
      ],
      redFlags: [
        'Verstecktes Hühnerfett oder Eipulver in Futter, das als „hypoallergen“ deklariert ist',
        'Undefinierte Sammelbegriffe wie „tierische Nebenerzeugnisse“ oder „Fleischmehle“',
        'Mehrere Fleischarten gleichzeitig bei empfindlichen Magen-Darm-Patienten',
      ],
      checklist: [
        'Prüfen Sie jede Zeile der Zutatenliste, um versteckte Geflügel- oder Rinderbestandteile auszuschließen.',
        'Halten Sie die Ausschlussdiät über 8 bis 12 Wochen strikt ohne ungetestete Leckerlis ein.',
        'Wählen Sie ein vollwertiges Alleinfutter nach FEDIAF/AAFCO, um Mangelerscheinungen zu vermeiden.',
      ],
      vetTip:
        'In der tierärztlichen Gastroenterologie führt eine strikte Monoprotein-Diät bei rund 80 % der Hunde innerhalb von 8 Wochen zur Beschwerdefreiheit. Konsequenz ohne kleinste Ausnahmen bei Leckerlis ist der Schlüssel.',
    },
    {
      slug: 'soluble-prebiotic-fiber',
      pillarNumber: 2,
      title: 'Lösliche präbiotische Ballaststoffe',
      desc: 'Bio-Kürbispüree, Zichorienwurzel und Flohsamenschalen regulieren die Darmpassage und nähren nützliche Darmbakterien.',
      readMore:
        'Der Verdauungstrakt des Hundes ist kurz und stark säurehaltig – ausgelegt auf Fleisch und Fette, nicht auf große Mengen unlöslicher Pflanzenfasern. Doch gezielte lösliche, fermentierbare Ballaststoffe erfüllen eine unersetzliche Schutz- und Heilfunktion für gereizte Darmschleimhäute.\n\nIm Gegensatz zu groben unlöslichen Fasern nimmt lösliche Faser Wasser auf und bildet ein schützendes Gel. Dieses Gel wirkt doppelt: Bei akutem Durchfall verlangsamt es die Passage und ermöglicht die Wasserresorption, während es bei Verstopfung den Kot weich und gleitfähig hält.\n\nEntscheidend ist zudem, dass die Zellen der Darmschleimhaut (Kolonozyten) ihre Energie vor allem aus kurzkettigen Fettsäuren (SCFAs, besonders Butyrat) beziehen. Diese entstehen, wenn nützliche Darmbakterien Inulin (aus Zichorienwurzel) oder Kürbisfasern fermentieren. Das beschleunigt die Regeneration der Darmschleimhaut.',
      whatToLookFor: [
        '100 % reines Bio-Kürbispüree ohne Salz, Zucker oder Gewürze',
        'Bewährte natürliche Präbiotika: Zichorienwurzel-Inulin (FOS) und Flohsamenschalen (Psyllium)',
        'Schleimhautschützende Pflanzenstoffe wie Rotulmenrinde (Slippery Elm) oder Eibischwurzel',
      ],
      redFlags: [
        'Gewürzte Kürbiskonserven mit giftiger Muskatnuss oder Zuckerzusätzen',
        'Aggressive Füllstoffe wie Zellulosepulver oder Erdnussschalen, die starke Blähungen erzeugen',
        'Gesamtrohfaser über 5 % in der Trockenmasse, da dies die Proteinaufnahme behindert',
      ],
      checklist: [
        'Täglich 1 bis 2 Teelöffel reines Kürbispüree pro 10 kg Körpergewicht unter das Futter mischen.',
        'Präbiotische Zusätze über 5 bis 7 Tage langsam einschleichen, um Blähungen zu vermeiden.',
        'Stets ausreichend frisches Wasser bereitstellen, da lösliche Fasern Flüssigkeit binden.',
      ],
      vetTip:
        'Butyrat aus der präbiotischen Fermentation ist die direkte Nahrung für die Darmzellen. Eine gezielte Gabe löslicher Fasern stabilisiert weichen Kot meist innerhalb von 24 bis 48 Stunden.',
    },
    {
      slug: 'anti-inflammatory-omega-3s',
      pillarNumber: 3,
      title: 'Entzündungshemmende Omega-3-Fettsäuren',
      desc: 'Wildlachsöl und Grünlippmuschel (EPA/DHA) beruhigen die Schleimhautbarriere und lindern chronische Entzündungen.',
      readMore:
        'Handelsübliches Trockenfutter weist oft ein starkes Übergewicht an entzündungsfördernden Omega-6-Fettsäuren auf (aus Geflügelfett, Mais- und Sojaöl), mit Verhältnissen von oft über 20:1 oder 30:1. Bei empfindlichen Hunden befeuert diese Dysbalance die Bildung entzündlicher Eikosanoide, was chronische Darmentzündungen und Darmwandverdickungen unterhält.\n\nHunde besitzen im Vergleich zum Menschen nur eine minimale Enzymaktivität, um pflanzliche Omega-3-Fettsäuren (ALA aus Lein- oder Chiasamen) in die aktiven Formen EPA und DHA umzuwandeln – die Konversionsrate liegt bei unter 5 %.\n\nMarine Omega-3-Quellen – aus arktischem Wildlachsöl, Sardinen, Anchovis oder Grünlippmuscheln – liefern EPA und DHA direkt. Diese Fettsäuren bauen sich in die Zellmembranen der Darmschleimhaut ein, verdrängen Arachidonsäure und drosseln entzündungsfördernde Zytokine (TNF-alpha, IL-6), um die Darmbarriere nachhaltig zu stärken.',
      whatToLookFor: [
        'Kaltgepresstes Wildlachsöl aus Alaska, Sardinenöl oder Anchovisöl',
        'Garantierte Gehalte an EPA und DHA pro Dosierhub oder Milliliter auf dem Etikett',
        'Natürliche Stabilisierung mit Vitamin E (Tocopherolen) in lichtgeschützten Pumpspendern',
      ],
      redFlags: [
        'Ausschließliche Gabe von Leinöl als Omega-3-Quelle bei Hunden mit Magen-Darm-Problemen',
        'Zuchtlachsöl mit potenziellen Rückständen und geringerem EPA/DHA-Gehalt',
        'Ranziges, oxidiertes Fischöl aus durchsichtigen Plastikflaschen',
      ],
      checklist: [
        'Streben Sie ca. 50 bis 75 mg kombiniertes EPA+DHA pro Kilogramm Körpergewicht an.',
        'Angebrochenes Fischöl stets im Kühlschrank aufbewahren und innerhalb von 60 bis 90 Tagen verbrauchen.',
        'Fischöl über 7 bis 10 Tage langsam steigern, um die Bauchspeicheldrüse an das Fett zu gewöhnen.',
      ],
      vetTip:
        'In klinischen Studien zu chronisch-entzündlichen Darmerkrankungen (IBD) senken marines EPA und DHA die Schleimhautdurchlässigkeit nachweislich. Hochwertiges Fischöl ist ein unverzichtbarer Entzündungshemmer für den Darm.',
    },
  ],
  pt: [
    {
      slug: 'single-novel-protein',
      pillarNumber: 1,
      title: 'Proteína Única e Inédita',
      desc: 'Evite alérgenos comuns (frango, leite) — utilize peru magro, salmão selvagem, cordeiro de pasto, javali ou pato.',
      readMore:
        'Mais de 70% das alergias alimentares e desordens gastrointestinais em cães têm origem no consumo prolongado de proteínas industriais comuns, especialmente frango de granja, carne bovina, laticínios e trigo. Quando a mucosa intestinal inflama e se torna excessivamente permeável («intestino permeável»), o sistema imune reage com prurido nas patas, fezes amolecidas e gases.\n\nUma dieta com proteína única e inédita (novel protein) introduz uma carne que o animal nunca comeu (como javali, pato, cordeiro criado a pasto, coelho ou salmão selvagem). Sem anticorpos prévios contra essa nova estrutura, a inflamação regride em poucos dias.\n\nA pureza mono-proteica é indispensável: muitas rações estampam «Cordeiro e Arroz» na frente, mas incluem gordura de frango ou farinha de vísceras nas letras miúdas. Qualquer traço basta para reativar a alergia.',
      whatToLookFor: [
        '100% de fonte proteica animal única declarada (ex: Apenas Cordeiro, Apenas Pato)',
        'Gorduras identificadas da mesma espécie ou óleo puro de peixe selvagem',
        'Receitas com ingredientes limitados (LID) sem subprodutos genéricos',
      ],
      redFlags: [
        'Gordura de frango oculta em alimentos vendidos como hipoalergênicos',
        'Termos genéricos como "derivados animais" ou "farinha de subprodutos"',
        'Mistura de múltiplas carnes em cães com histórico de sensibilidade',
      ],
      checklist: [
        'Examine a lista completa para garantir zero derivados de frango ou bovinos.',
        'Mantenha o teste de eliminação por 8 a 12 semanas sem nenhum petisco não autorizado.',
        'Certifique-se de que o alimento é completo e balanceado perante normas nutricionais.',
      ],
      vetTip:
        'Na gastroenterologia veterinária, a dieta de eliminação com proteína inédita resolve até 80% dos distúrbios digestivos em 8 semanas. Rigor absoluto é indispensável.',
    },
    {
      slug: 'soluble-prebiotic-fiber',
      pillarNumber: 2,
      title: 'Fibra Solúvel Prebiótica',
      desc: 'Purê de abóbora puro, raiz de chicória e psyllium regulam o trânsito intestinal e alimentam a microbiota benéfica.',
      readMore:
        'O trato gastrointestinal do cão é curto e ácido, feito para digerir carnes e gorduras, e não grandes quantidades de fibras insolúveis. No entanto, a fibra solúvel prebiótica cumpre uma função restauradora indispensável na mucosa intestinal.\n\nAo contrário da fibra insolúvel áspera, a fibra solúvel absorve água formando um gel emoliente. Esse gel tem ação dupla: retarda o trânsito em casos de diarreia para permitir a absorção de líquidos e hidrata fezes duras em episódios de constipação.\n\nAlém disso, as células do cólon dependem dos Ácidos Graxos de Cadeia Curta (AGCC), principalmente o butirato, produzido quando as bactérias benéficas fermentam fibras como a inulina e a abóbora. Isso acelera a cicatrização do epitélio intestinal.',
      whatToLookFor: [
        'Purê de abóbora 100% puro e orgânico (sem sal, açúcar ou temperos)',
        'Prebióticos comprovados: Inulina de chicória (FOS) e casca de psyllium',
        'Extratos botânicos protetores da mucosa como casca de olmo (Slippery Elm)',
      ],
      redFlags: [
        'Conservas doces de abóbora contendo noz-moscada tóxica ou xaropes',
        'Fibras insolúveis agressivas como casca de amendoim ou celulose purificada',
        'Teor de fibra bruta acima de 5% na matéria seca, que prejudica a absorção de nutrientes',
      ],
      checklist: [
        'Adicione 1 a 2 colheres de chá de purê de abóbora por cada 10 kg de peso do cão.',
        'Introduza fibras prebióticas gradualmente ao longo de 5 a 7 dias.',
        'Mantenha água limpa sempre disponível, pois fibras solúveis requerem hidratação para agir.',
      ],
      vetTip:
        'O butirato resultante da fermentação prebiótica é o combustível principal dos colonócitos. Uma dose suave de fibra solúvel costuma firmar fezes moles em 24 a 48 horas.',
    },
    {
      slug: 'anti-inflammatory-omega-3s',
      pillarNumber: 3,
      title: 'Ômega-3 Anti-inflamatório',
      desc: 'Óleo de salmão selvagem e mexilhão de lábios verdes (EPA/DHA) acalmam a barreira mucosa e reduzem a inflamação.',
      readMore:
        'Rações secas industriais trazem excesso de ácidos graxos Ômega-6 pró-inflamatórios (de gordura de aves, óleo de milho e soja), frequentemente com proporções de 20:1 ou 30:1. Em cães com digestão sensível, esse desequilíbrio estimula eicosanoides inflamatórios, perpetuando a enterite crônica.\n\nCães possuem conversão mínima de Ômega-3 vegetal (ALA de linhaça ou chia) para EPA e DHA ativos; a taxa de conversão hepática canina fica abaixo de 5%.\n\nÔmega-3 de origem marinha — extraído de salmão selvagem do Alasca, sardinha, anchova ou mexilhão verde — entrega EPA e DHA prontos. Eles se integram às membranas celulares do intestino, deslocando o ácido araquidônico e reduzindo citocinas inflamatórias (TNF-alfa e IL-6) para proteger a barreira digestiva.',
      whatToLookFor: [
        'Óleo de salmão selvagem prensado a frio, óleo de sardinha ou de anchova',
        'Níveis garantidos de EPA e DHA por dose ou mililitro estampados no frasco',
        'Estabilização natural com Vitamina E (tocoferóis) em frasco pump opaco',
      ],
      redFlags: [
        'Contar apenas com óleo de linhaça para tratar inflamações intestinais caninas',
        'Óleo de salmão de cativeiro com níveis inferiores de EPA/DHA',
        'Óleos de peixe rançosos e oxidados em embalagens plásticas transparentes',
      ],
      checklist: [
        'Busque fornecer de 50 a 75 mg combinados de EPA + DHA por quilo de peso do cão.',
        'Armazene na geladeira após abrir e consuma em 60 a 90 dias.',
        'Aumente a dosagem gradualmente ao longo de 10 dias para adaptar o pâncreas.',
      ],
      vetTip:
        'Em cães com doença inflamatória intestinal, a suplementação com EPA/DHA marinho diminui a permeabilidade da mucosa e alivia a inflamação de forma comprovada.',
    },
  ],
  ko: [
    {
      slug: 'single-novel-protein',
      pillarNumber: 1,
      title: '단일 신규 단백질원 (Single Novel Protein)',
      desc: '닭고기, 소고기, 유제품 등 흔한 알레르겐을 배제하고 칠면조, 자연산 연어, 양고기, 사슴고기, 오리고기를 선택하세요.',
      readMore:
        '반려견의 식이 알레르기 및 만성 장염의 70% 이상은 일상적으로 자주 섭취해온 흔한 단백질원(특히 공장식 사육 닭고기, 소고기, 유제품, 밀 글루텐)에 의해 유발됩니다. 장 점막이 손상되어 투과성이 비정상적으로 높아지면(장누수 증후군), 면역계가 해당 단백질을 적으로 인식하여 가려움증, 발 핥기, 설사, 복부 팽만을 유발합니다.\n\n진정한 단일 신규 단백질(Novel Protein) 식단은 해당 반려견이 태어나서 한 번도 먹어본 적 없는 육류(야생 사슴고기, 오리고기, 목초 사육 양고기, 토끼고기, 자연산 연어 등) 단 하나만을 급여하는 방식입니다. 체내에 형성된 항체가 없기 때문에 면역 과민 반응이 일어나지 않고 장 염증이 신속히 가라앉습니다.\n\n핵심은 원재료의 완벽한 순도입니다. 겉포장에 "양고기와 쌀"이라고 적혀 있어도 뒤쪽 성분표를 보면 저가 닭기름이나 계란 분말이 섞여 있는 경우가 흔합니다. 미량의 교차 오염도 배제 식이요법을 실패로 이끌 수 있습니다.',
      whatToLookFor: [
        '100% 단일 동물성 단백질원 표기 (예: 사슴고기 단일, 양고기 단일)',
        '단일 동물 유래 지방 또는 순수 정제 어유만을 사용한 성분표',
        '알레르겐을 최소화한 제한 원료 식단(LID: Limited Ingredient Diet)',
      ],
      redFlags: [
        '양고기나 생선 사료에 숨겨진 닭기름(Chicken Fat)이나 가금류 부산물',
        '"동물성 유지", "육골분" 등 출처가 불분명한 포괄적 표기',
        '소화기가 약한 반려견에게 3~4가지 고기가 뒤섞인 복합 단백질 사료 급여',
      ],
      checklist: [
        '원재료 성분표를 끝까지 정독하여 닭고기, 계란, 소고기 유래 성분이 없는지 전수 확인.',
        '간식과 사람 음식을 일체 중단하고 8~12주간 신규 단백질 단일 급여 원칙 준수.',
        'AAFCO/FEDIAF 기준을 충족하는 완전균형식인지 점검하여 장기 급여 시 영양 결핍 방지.',
      ],
      vetTip:
        '수의 소화기내과에서 엄격한 단일 신규 단백질 식단은 8주 이내에 음식 불내성의 약 80%를 성공적으로 완화합니다. 한 조각의 간식도 섞이지 않도록 가족 전체가 원칙을 지키는 것이 관건입니다.',
    },
    {
      slug: 'soluble-prebiotic-fiber',
      pillarNumber: 2,
      title: '수용성 프리바이오틱스 식이섬유',
      desc: '유기농 단호박 퓌레, 치커리 뿌리 이눌린, 차전자피가 장 통과 시간을 정상화하고 유익균 증식을 돕습니다.',
      readMore:
        '개의 소화기관은 짧고 강산성을 띠어 육류와 지방 소화에 최적화되어 있으며, 거친 불용성 식물 섬유를 소화하는 데는 적합하지 않습니다. 하지만 부드러운 수용성 프리바이오틱스 식이섬유는 손상된 장 점막을 회복하고 유익균을 보호하는 데 절대적인 역할을 합니다.\n\n불용성 식이섬유와 달리, 수용성 섬유질은 수분을 흡수하여 매끄러운 젤 보호막을 형성합니다. 이 젤은 물설사 시에는 장 통과 속도를 늦춰 수분 흡수를 돕고, 변비 시에는 마른 변을 촉촉하게 유지해주는 놀라운 "양방향 변 상태 정상화" 효과를 발휘합니다.\n\n더욱 중요한 점은 대장 상피세포(대장 세포)의 핵심 에너지원이 유익균이 프리바이오틱스 섬유(이눌린, 단호박 등)를 발효시켜 생성하는 "단쇄지방산(SCFA, 특히 뷰티르산)"이라는 사실입니다. 프리바이오틱스를 충분히 공급하면 장 점막 세포의 치유가 비약적으로 빨라집니다.',
      whatToLookFor: [
        '설탕, 소금, 향신료가 전혀 첨가되지 않은 100% 순수 유기농 단호박 퓌레',
        '과학적으로 검증된 천연 프리바이오틱스: 치커리 뿌리 추출물(이눌린/FOS), 차전자피(실리움)',
        '느릅나무 껍질(슬리퍼리 엘름), 마시멜로 뿌리 등 천연 장 점막 보호 식물 성분',
      ],
      redFlags: [
        '개에게 독성이 있는 육두구(Nutmeg)나 계피, 당분이 들어간 사람용 펌킨 파이 통조림',
        '땅콩 껍질, 목재 유래 셀룰로오스 등 가스를 유발하는 거친 저가 불용성 섬유질',
        '건물 기준 5%를 초과하는 과도한 총 식이섬유 함량 (단백질 흡수 방해 원인)',
      ],
      checklist: [
        '체중 10kg당 순수 단호박 퓌레 1~2 티스푼을 매일 식사에 섞어 급여.',
        '프리바이오틱스 보충제는 가스 발생을 막기 위해 5~7일에 걸쳐 서서히 증량.',
        '수용성 섬유질은 물을 머금어야 젤을 형성하므로 신선한 음수량을 항시 유지.',
      ],
      vetTip:
        '프리바이오틱스 발효로 생성되는 뷰티르산은 장 점막 세포의 직접적인 재생 연료입니다. 적정량의 수용성 섬유질을 보충해주면 24~48시간 이내에 묽은 변이 단단하게 잡힙니다.',
    },
    {
      slug: 'anti-inflammatory-omega-3s',
      pillarNumber: 3,
      title: '항염증 해양성 오메가-3 지방산',
      desc: '자연산 알래스카 연어 오일과 초록입홍합(EPA/DHA)이 장 점막 세포의 만성 염증을 진정시키고 장벽을 강화합니다.',
      readMore:
        '시판 건식 사료는 가금류 지방, 옥수수유, 대두유 등으로 인해 염증을 촉진하는 오메가-6 비율이 지나치게 높아, 오메가-6 대 오메가-3 비율이 20:1 혹은 30:1을 초과하는 경우가 부지기수입니다. 장이 약한 개에게 이러한 불균형은 장벽 만성 비후와 염증성 장질환(IBD)을 지속시키는 핵심 원인입니다.\n\n사람과 달리 개는 아마씨나 치아씨드에 든 식물성 오메가-3(ALA)를 활성형인 EPA와 DHA로 전환하는 체내 효소 활성이 극히 떨어져, 전환율이 5% 미만에 불과합니다.\n\n따라서 알래스카 자연산 연어유, 정어리유, 멸치유, 뉴질랜드 초록입홍합 등에서 추출한 해양성 EPA와 DHA를 직접 급여해야 합니다. EPA와 DHA는 장 상피세포막에 직접 흡수되어 아라키돈산을 대체하고, 염증 유발 사이토카인(TNF-α, IL-6) 분비를 강력히 억제하여 장 점막을 회복시킵니다.',
      whatToLookFor: [
        '저온 압착(Cold-Pressed) 알래스카 자연산 연어 오일, 정어리 오일, 멸치 오일',
        '1회 펌프 또는 ml당 EPA 및 DHA 함량이 라벨에 명확히 표기된 제품',
        '천연 비타민 E(혼합 토코페롤)로 보존 처리된 차광 펌프 용기 제품',
      ],
      redFlags: [
        '장 질환이 있는 반려견에게 식물성 아마씨유만으로 오메가-3를 충당하려는 시도',
        '중금속 위험이 있고 EPA/DHA 함량이 떨어지는 저가 양식 연어 오일',
        '햇빛과 공기에 노출되어 산패된 투명 플라스틱병 생선 기름',
      ],
      checklist: [
        '체중 1kg당 약 50~75mg의 EPA+DHA 합산량을 목표로 정밀 계량 급여.',
        '개봉한 오일은 반드시 냉장 보관하고 산패를 방지하기 위해 60~90일 이내에 소진.',
        '췌장에 무리가 가지 않도록 7~10일에 걸쳐 소량부터 서서히 증량 급여.',
      ],
      vetTip:
        '반려견 염증성 장질환(IBD) 임상 연구에서 고순도 해양성 EPA/DHA 보충은 장 점막 투과성을 유의미하게 낮추고 염증 수치를 개선했습니다. 순도 높은 피쉬 오일은 장 질환 반려견에게 최고의 천연 항염증제입니다.',
    },
  ],
  it: [
    {
      slug: 'single-novel-protein',
      pillarNumber: 1,
      title: 'Proteina Unica e Inedita',
      desc: 'Evita gli allergeni comuni (pollo, manzo, latticini) — scegli tacchino magro, salmone selvaggio, agnello da pascolo, cervo o anatra.',
      readMore:
        "Oltre il 70% delle intolleranze e infiammazioni gastrointestinali nei cani deriva dall'esposizione continua a proteine industriali comuni, in particolare pollo da allevamento intensivo, manzo, derivati del latte e glutine di frumento. Quando la barriera intestinale si infiamma e diventa iperpermeabile («intestino gocciolante»), il sistema immunitario scatena prurito alle zampe, feci molli e flatulenza dolorosa.\n\nUna vera dieta mono-proteica inedita introduce una fonte animale che il cane non ha mai assunto in precedenza (come cervo selvatico, anatra, agnello allevato a erba, coniglio o salmone selvaggio). Non avendo anticorpi preformati contro questa molecola, l'infiammazione intestinale regredisce rapidamente.\n\nLa trasparenza della fonte proteica è essenziale: molti mangimi dichiarano «Agnello e Riso» sul fronte del sacco, ma nascondono grasso di pollo o farine di pollame nella composizione. Anche una minima traccia può vanificare la dieta a eliminazione.",
      whatToLookFor: [
        '100% singola fonte proteica animale chiaramente specificata (es. Solo Cervo, Solo Agnello)',
        'Grassi identificati della stessa specie o olio puro di pesce selvaggio',
        'Ricette a ingredienti limitati (LID) prive di riempitivi generici',
      ],
      redFlags: [
        'Grasso di pollo o uova in polvere nascosti in alimenti definiti ipoallergenici',
        'Diciture vaghe come "carni e derivati" o "farine di volatili"',
        'Formule multi-proteiche con 3 o 4 carni diverse per cani dallo stomaco fragile',
      ],
      checklist: [
        'Esamina ogni singola voce della composizione per escludere derivati di pollo o manzo.',
        'Segui la dieta a eliminazione per 8-12 settimane senza premi o avanzi di tavola.',
        'Assicurati che la formula sia completa e conforme agli standard nutrizionali FEDIAF/AAFCO.',
      ],
      vetTip:
        'In gastroenterologia veterinaria, una dieta rigorosa a singola proteina inedita risolve fino all’80% dei disturbi digestivi entro 8 settimane. Il rigore assoluto nell’evitare premi contaminati è la chiave.',
    },
    {
      slug: 'soluble-prebiotic-fiber',
      pillarNumber: 2,
      title: 'Fibra Solubile Prebiotica',
      desc: 'Purea di zucca bio, radice di cicoria e psillio regolano il transito intestinale e nutrono la flora batterica benefica.',
      readMore:
        "L'apparato digerente del cane è corto e acido, strutturato per assimilare proteine e grassi animali e non grandi volumi di fibra insolubile. Tuttavia, la fibra solubile prebiotica svolge un ruolo riparatore cruciale per la mucosa intestinale infiammata.\n\nA differenza della fibra insolubile ruvida, la fibra solubile assorbe acqua formando un gel protettivo emolliente. Questo gel offre una straordinaria doppia azione: rallenta il transito durante le diarree acquose per consentire il riassorbimento dei liquidi e ammorbidisce le feci secche in caso di stitichezza.\n\nInoltre, le cellule del colon (colonociti) traggono la loro energia dagli Acidi Grassi a Catena Corta (SCFA), in primis il butirrato, prodotto quando il microbiota benefico fermenta l'inulina (radice di cicoria) o la purea di zucca. Ciò accelera la guarigione dell'epitelio intestinale.",
      whatToLookFor: [
        'Purea di zucca pura al 100% biologica (senza sale, zuccheri né spezie)',
        'Prebiotici naturali clinicamente provati: Inulina da cicoria (FOS) e cuticola di psillio',
        'Estratti vegetali lenitivi come l’olmo rosso (Slippery Elm) o la radice di altea',
      ],
      redFlags: [
        'Zucche sciroppate con noce moscata tossica per i cani o zuccheri aggiunti',
        'Fibre insolubili aggressive come gusci di arachidi o cellulosa che provocano forti gas',
        'Tenore di fibra grezza superiore al 5% sulla sostanza secca, che compromette l’assorbimento',
      ],
      checklist: [
        'Aggiungi da 1 a 2 cucchiaini di purea di zucca ogni 10 kg di peso al pasto quotidiano.',
        'Introduci i prebiotici gradualmente nell’arco di 5-7 giorni per evitare gas transitorio.',
        'Garantisci sempre abbondante acqua fresca, poiché la fibra solubile richiede liquidi per formare il gel.',
      ],
      vetTip:
        'Il butirrato generato dalla fermentazione prebiotica è il carburante diretto dei colonociti. Una corretta dose di fibra solubile stabilizza le feci molli entro 24-48 ore.',
    },
    {
      slug: 'anti-inflammatory-omega-3s',
      pillarNumber: 3,
      title: 'Omega-3 Antinfiammatori',
      desc: 'Olio di salmone selvaggio e cozza verde (EPA/DHA) calmano la mucosa intestinale e spengono l’infiammazione.',
      readMore:
        "Le crocchette commerciali contengono spesso un forte eccesso di acidi grassi Omega-6 pro-infiammatori (da grassi avicoli, oli di mais e soia), con rapporti che superano spesso 20:1 o 30:1. Nei cani sensibili, questo squilibrio alimenta la produzione di eicosanoidi infiammatori, cronicizzando l'enterite e l'ispessimento delle pareti intestinali.\n\nI cani possiedono una capacità enzimatica minima nel convertire gli Omega-3 vegetali (ALA da lino o chia) nelle forme attive EPA e DHA; il tasso di conversione epatico canino è inferiore al 5%.\n\nGli Omega-3 di origine marina — estratti da salmone selvaggio dell'Alaska, sardine, acciughe o cozza verde — forniscono direttamente EPA e DHA preformati. Questi acidi grassi si incorporano nelle membrane cellulari dell'intestino, riducendo le citochine infiammatorie (TNF-alfa e IL-6) e riparando la barriera mucosa.",
      whatToLookFor: [
        'Olio di salmone selvaggio spremuto a freddo, olio di sardina o di acciuga',
        'Contenuto garantito di EPA e DHA chiaramente espresso per dose o millilitro',
        'Stabilizzazione naturale con Vitamina E (tocoferoli) in flaconi dosatori opachi',
      ],
      redFlags: [
        'Affidarsi al solo olio di lino come fonte di Omega-3 per problemi intestinali canini',
        'Olio di salmone da allevamento intensivo con dosaggi inferiori di EPA/DHA',
        'Oli di pesce irranciditi od ossidati conservati in bottiglie di plastica trasparente',
      ],
      checklist: [
        'Punta a un dosaggio di circa 50-75 mg combinati di EPA+DHA per chilo di peso corporeo.',
        'Conserva in frigorifero dopo l’apertura e utilizza entro 60-90 giorni.',
        'Aumenta il dosaggio nell’arco di 7-10 giorni per consentire al pancreas di adattarsi.',
      ],
      vetTip:
        'Negli studi clinici sulle enteropatie croniche canine, l’integrazione di EPA e DHA marini ha ridotto drasticamente la permeabilità intestinale e l’infiammazione della mucosa.',
    },
  ],
};

export function getSensitiveStomachPillars(lang: Lang = 'en'): SensitiveStomachPillar[] {
  return SENSITIVE_STOMACH_DATA[lang] || SENSITIVE_STOMACH_DATA.en;
}

export function getSensitiveStomachPillar(slug: string, lang: Lang = 'en'): SensitiveStomachPillar | undefined {
  const pillars = getSensitiveStomachPillars(lang);
  return pillars.find((p) => p.slug === slug);
}
