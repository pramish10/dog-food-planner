import type { Lang } from '../i18n/ui';

export const TOXIC_FOOD_SLUGS = [
  'xylitol',
  'chocolate-and-cocoa',
  'grapes-and-raisins',
  'onions-and-garlic',
  'macadamia-nuts',
  'cooked-bones',
  'bacon-grease-fat-trimmings',
  'pumpkin',
  'wild-alaskan-salmon',
  'wild-blueberries',
  'raw-green-tripe',
  'bone-broth',
  'zucchini',
  'raw-goat-milk-kefir',
] as const;

export type ToxicFoodSlug = (typeof TOXIC_FOOD_SLUGS)[number];

export interface TimelinePhase {
  phase: string;
  symptoms: string[];
}

export interface EmergencyStep {
  stepNumber: number;
  title: string;
  desc: string;
  isUrgent?: boolean;
}

export interface VeterinaryTreatment {
  name: string;
  purpose: string;
}

export interface SafeAlternative {
  name: string;
  why: string;
}

export interface ToxicFoodFaq {
  q: string;
  a: string;
}

export interface VitalStat {
  label: string;
  value: string;
  tone?: 'danger' | 'warning' | 'safe' | 'neutral';
}

export interface ToxicFoodItem {
  slug: ToxicFoodSlug;
  name: string;
  scientificName: string;
  status: 'DANGEROUS_TOXIC' | 'FEED_WITH_CAUTION' | 'SAFE_AND_BENEFICIAL';
  category: string;
  badgeLabel: string;
  riskSeverity: string;
  primaryCompound: string;
  targetOrgans: string[];
  toxicThresholdOrServing: string;
  onsetWindow: string;
  summary: string;
  narrativeOverview: string[];
  biochemicalMechanism: string;
  vitalStats: VitalStat[];
  timeline: TimelinePhase[];
  emergencyProtocol: EmergencyStep[];
  vetTreatments: VeterinaryTreatment[];
  safeAlternatives: SafeAlternative[];
  preventionRules: string[];
  faqs: ToxicFoodFaq[];
}

export interface ToxicFoodsPageI18n {
  badgePrefix: string;
  reviewedBy: string;
  quickOverviewTitle: string;
  biochemicalTitle: string;
  timelineTitle: string;
  emergencyTitle: string;
  vetCareTitle: string;
  alternativesTitle: string;
  preventionTitle: string;
  faqTitle: string;
  backToList: string;
  prevFood: string;
  nextFood: string;
  emergencyHotlineTitle: string;
  emergencyHotlineDesc: string;
  disclaimer: string;
  vitalStatsTitle: string;
}

export const TOXIC_FOODS_PAGE_I18N: Record<Lang, ToxicFoodsPageI18n> = {
  en: {
    badgePrefix: 'CANINE INGREDIENT SAFETY // DOSSIER',
    reviewedBy: 'Reviewed by: Board-Certified Veterinary Toxicologist & Canine Clinical Nutritionist',
    quickOverviewTitle: 'Clinical Overview & Toxicological Profile',
    biochemicalTitle: 'Biochemical Mechanism of Action & Pathology',
    timelineTitle: 'Clinical Timeline & Symptom Progression',
    emergencyTitle: 'Emergency First Aid & Ingestion Protocol',
    vetCareTitle: 'In-Hospital Veterinary Medical Treatments',
    alternativesTitle: 'Safe Canine Alternatives & Healthy Substitutes',
    preventionTitle: 'Household Prevention & Safety Checklist',
    faqTitle: 'Frequently Asked Veterinary Questions',
    backToList: 'Back to Canine Ingredient Safety Lookup',
    prevFood: 'Previous Ingredient',
    nextFood: 'Next Ingredient',
    emergencyHotlineTitle: '🚨 24/7 Pet Poison Emergency Helplines',
    emergencyHotlineDesc: 'If ingestion is suspected, act immediately: ASPCA Animal Poison Control: (888) 426-4435 or Pet Poison Helpline: (855) 764-7661.',
    disclaimer: 'This veterinary safety dossier is for educational reference and does not substitute emergency clinical veterinary care. If poisoning is suspected, transport your dog to the nearest 24/7 veterinary emergency hospital immediately.',
    vitalStatsTitle: 'Critical Parameters',
  },
  es: {
    badgePrefix: 'SEGURIDAD DE ALIMENTOS CANINOS // DOSSIER',
    reviewedBy: 'Revisado por: Toxicólogo Veterinario y Nutricionista Clínico Canino',
    quickOverviewTitle: 'Resumen Clínico y Perfil Toxicológico',
    biochemicalTitle: 'Mecanismo de Acción Bioquímico y Patología',
    timelineTitle: 'Línea de Tiempo Clínica y Progresión de Síntomas',
    emergencyTitle: 'Primeros Auxilios de Emergencia y Protocolo',
    vetCareTitle: 'Tratamientos Veterinarios Hospitalarios',
    alternativesTitle: 'Alternativas Caninas Seguras y Sustitutos',
    preventionTitle: 'Prevención en el Hogar y Lista de Control',
    faqTitle: 'Preguntas Frecuentes Veterinarias',
    backToList: 'Volver al Buscador de Toxicidad y Seguridad',
    prevFood: 'Ingrediente Anterior',
    nextFood: 'Siguiente Ingrediente',
    emergencyHotlineTitle: '🚨 Líneas de Emergencia por Intoxicación Animal 24/7',
    emergencyHotlineDesc: 'Si sospechas ingestión, actúa de inmediato: ASPCA Animal Poison Control (888) 426-4435 o Pet Poison Helpline (855) 764-7661.',
    disclaimer: 'Este dossier veterinario es para fines informativos y no reemplaza la atención veterinaria de urgencia.',
    vitalStatsTitle: 'Parámetros Críticos',
  },
  ja: {
    badgePrefix: '犬の食材安全性データベース // ドシエ',
    reviewedBy: '監修：獣医毒性学専門医・犬臨床栄養士',
    quickOverviewTitle: '臨床概要および毒性プロファイル',
    biochemicalTitle: '生化学的作用機序と病理学的メカニズム',
    timelineTitle: '臨床タイムラインと症状の進行',
    emergencyTitle: '緊急応急処置と誤飲時プロトコル',
    vetCareTitle: '動物病院での専門的医療処置',
    alternativesTitle: '安全な代替食品・健康的な代用食材',
    preventionTitle: '家庭内予防策・安全チェックリスト',
    faqTitle: 'よくある獣医学的質問（FAQ）',
    backToList: '食材安全性・中毒危険度一覧に戻る',
    prevFood: '前の食材',
    nextFood: '次の食材',
    emergencyHotlineTitle: '🚨 中毒事故・夜間救急動物病院連絡先',
    emergencyHotlineDesc: '誤飲が疑われる場合は一刻を争います。直ちにかかりつけ医または夜間救急動物病院へ連絡してください。',
    disclaimer: '本資料は情報提供を目的としており、獣医師の診断や救急処置に代わるものではありません。',
    vitalStatsTitle: '重要臨床パラメータ',
  },
  fr: {
    badgePrefix: 'SÉCURITÉ ALIMENTAIRE CANINE // DOSSIER',
    reviewedBy: 'Vérifié par : Toxicologue Vétérinaire et Nutritionniste Clinique Canin',
    quickOverviewTitle: 'Aperçu Clinique et Profil Toxicologique',
    biochemicalTitle: 'Mécanisme d\'Action Biochimique et Pathologie',
    timelineTitle: 'Chronologie Clinique et Progression des Symptômes',
    emergencyTitle: 'Premiers Secours d\'Urgence et Protocole d\'Ingestion',
    vetCareTitle: 'Soins Médicaux Vétérinaires Hospitaliers',
    alternativesTitle: 'Alternatives Canines Sûres et Substituts Sains',
    preventionTitle: 'Prévention Domestique et Liste de Sécurité',
    faqTitle: 'Questions Vétérinaires Fréquentes',
    backToList: 'Retour à la Base d\'Innocuité et de Toxicité',
    prevFood: 'Ingrédient Précédent',
    nextFood: 'Ingrédient Suivant',
    emergencyHotlineTitle: '🚨 Numéros d\'Urgence Centres Antipoison Vétérinaires',
    emergencyHotlineDesc: 'En cas de suspicion d\'ingestion, agissez sans attendre auprès de votre clinique d\'urgence.',
    disclaimer: 'Ce dossier médical ne remplace en aucun cas une consultation vétérinaire d\'urgence.',
    vitalStatsTitle: 'Paramètres Critiques',
  },
  de: {
    badgePrefix: 'HUNDEGESUNDHEIT & ZUTATENSICHERHEIT // DOSSIER',
    reviewedBy: 'Geprüft von: Tierärztlicher Toxikologe & Klinischer Hunde-Ernährungsberater',
    quickOverviewTitle: 'Klinischer Überblick & Toxikologisches Profil',
    biochemicalTitle: 'Biochemischer Wirkungsmechanismus & Pathologie',
    timelineTitle: 'Klinischer Zeitverlauf & Symptomprogression',
    emergencyTitle: 'Notfall-Erste-Hilfe & Vergiftungsprotokoll',
    vetCareTitle: 'Stationäre Tierärztliche Behandlungen',
    alternativesTitle: 'Sichere Gesunde Hunde-Alternativen',
    preventionTitle: 'Prävention im Haushalt & Sicherheits-Checkliste',
    faqTitle: 'Häufig Gestellte Tierärztliche Fragen',
    backToList: 'Zurück zur Zutatensicherheits- und Gift-Datenbank',
    prevFood: 'Vorherige Zutat',
    nextFood: 'Nächste Zutat',
    emergencyHotlineTitle: '🚨 24/7 Tiernotruf & Giftnotrufzentrale',
    emergencyHotlineDesc: 'Bei Verdacht auf Vergiftung sofort die nächste Tierklinik kontaktieren.',
    disclaimer: 'Dieses veterinärmedizinische Dossier dient der Aufklärung und ersetzt keinen tierärztlichen Notfalleinsatz.',
    vitalStatsTitle: 'Kritische Parameter',
  },
  pt: {
    badgePrefix: 'SEGURANÇA ALIMENTAR CANINA // DOSSIÊ',
    reviewedBy: 'Revisado por: Toxicologista Veterinário e Nutricionista Clínico Canino',
    quickOverviewTitle: 'Visão Geral Clínica e Perfil Toxicológico',
    biochemicalTitle: 'Mecanismo Bioquímico de Ação e Patologia',
    timelineTitle: 'Linha do Tempo Clínica e Progressão dos Sintomas',
    emergencyTitle: 'Primeiros Socorros de Emergência e Protocolo de Ingestão',
    vetCareTitle: 'Tratamentos Hospitalares Veterinários',
    alternativesTitle: 'Alternativas Caninas Seguras e Substitutos',
    preventionTitle: 'Prevenção Doméstica e Checklist de Segurança',
    faqTitle: 'Perguntas Veterinárias Frequentes',
    backToList: 'Voltar ao Guia de Toxicidade e Alimentos Seguros',
    prevFood: 'Ingrediente Anterior',
    nextFood: 'Próximo Ingrediente',
    emergencyHotlineTitle: '🚨 Linhas de Emergência Toxicológica Veterinária 24/7',
    emergencyHotlineDesc: 'Em caso de suspeita de intoxicação, procure atendimento veterinário imediato.',
    disclaimer: 'Este dossiê veterinário tem finalidade educativa e não substitui o atendimento emergencial de um médico veterinário.',
    vitalStatsTitle: 'Parâmetros Críticos',
  },
  ko: {
    badgePrefix: '반려견 식재료 안전성 // 전문 분석서',
    reviewedBy: '검수: 수의 독성학 전문의 및 임상 영양학 연구팀',
    quickOverviewTitle: '임상 요약 및 독성학적 프로필',
    biochemicalTitle: '생화학적 작용 기전 및 병리학적 영향',
    timelineTitle: '임상 타임라인 및 증상 진행 단계',
    emergencyTitle: '응급 처치 및 섭취 시 대응 프로토콜',
    vetCareTitle: '동물병원 전문 집중 치료 절차',
    alternativesTitle: '안전하고 건강한 대체 식재료',
    preventionTitle: '가정 내 사고 예방 수칙 및 체크리스트',
    faqTitle: '수의학적 자주 묻는 질문 (FAQ)',
    backToList: '식재료 안전성 및 독성 성분 목록으로 돌아가기',
    prevFood: '이전 식재료',
    nextFood: '다음 식재료',
    emergencyHotlineTitle: '🚨 24시간 응급 동물병원 및 중독 대응 안내',
    emergencyHotlineDesc: '독성 물질 섭취가 의심되면 지체 없이 가까운 24시간 응급 동물병원으로 내원하세요.',
    disclaimer: '본 전문 자료는 정보 제공 목적이며 수의사의 응급 임상 진료를 대체할 수 없습니다.',
    vitalStatsTitle: '핵심 임상 지표',
  },
  it: {
    badgePrefix: 'SICUREZZA DEGLI ALIMENTI PER CANI // DOSSIER',
    reviewedBy: 'Revisionato da: Tossicologo Veterinario e Nutrizionista Clinico Canino',
    quickOverviewTitle: 'Panoramica Clinica e Profilo Tossicologico',
    biochemicalTitle: 'Meccanismo Biochimico d\'Azione e Patologia',
    timelineTitle: 'Cronologia Clinica e Progressione dei Sintomi',
    emergencyTitle: 'Primo Soccorso d\'Urgenza e Protocollo d\'Ingestione',
    vetCareTitle: 'Trattamenti Veterinari Ospedalieri',
    alternativesTitle: 'Alternative Sicure per Cani e Sostituti Sani',
    preventionTitle: 'Prevenzione Domestica e Checklist di Sicurezza',
    faqTitle: 'Domande Veterinarie Frequenti',
    backToList: 'Torna al Dizionario di Tossicità e Sicurezza',
    prevFood: 'Ingrediente Precedente',
    nextFood: 'Ingrediente Successivo',
    emergencyHotlineTitle: '🚨 Linee di Emergenza Antiveleni Veterinari 24/7',
    emergencyHotlineDesc: 'In caso di ingestione sospetta, recarsi immediatamente presso il pronto soccorso veterinario.',
    disclaimer: 'Questo dossier veterinario è a solo scopo informativo e non sostituisce l\'intervento clinico d\'urgenza.',
    vitalStatsTitle: 'Parametri Critici',
  },
};

export const TOXIC_FOODS_DATA_EN: ToxicFoodItem[] = [
  // 1. XYLITOL
  {
    slug: 'xylitol',
    name: 'Xylitol (Birch Sugar / E967)',
    scientificName: '1,2,3,4,5-Pentapentanol (Polyol Sugar Alcohol)',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ CRITICAL EMERGENCY // DEADLY TOXIN',
    riskSeverity: 'FATAL: Rapid onset within 10 to 60 minutes. Triggers profound hypoglycemic shock and acute massive hepatic necrosis.',
    primaryCompound: 'Birch Bark Sugar (Synthetic Xylitol / E967)',
    targetOrgans: ['Pancreatic Islet Beta Cells', 'Liver (Hepatocytes)', 'Coagulation Cascade'],
    toxicThresholdOrServing: '0.1 g/kg causes profound hypoglycemia; >0.5 g/kg causes acute hepatic necrosis and liver failure.',
    onsetWindow: '10 to 60 minutes (delayed up to 12 hours in extended-release gums)',
    summary: 'Xylitol is arguably the deadliest household food additive for dogs. While completely harmless in humans, canine physiology responds to xylitol with an immediate, massive surge of insulin up to six times greater than an equivalent dose of pure sugar, resulting in rapid collapse and potentially fatal liver death.',
    narrativeOverview: [
      'Xylitol is a 5-carbon polyol sugar alcohol widely marketed as birch sugar or food additive E967. Over the last decade, it has proliferated across peanut butters, sugar-free chewing gums, low-calorie baked goods, dental rinses, liquid pharmaceutical suspensions, and chewable multivitamins.',
      'In dogs, xylitol absorption occurs with extreme velocity. Because the canine digestive tract fails to distinguish xylitol from natural glucose, it prompts total pancreatic degranulation. Within 30 minutes, circulating blood glucose plummets to life-threatening lows (often under 30 mg/dL), depriving the brain and central nervous system of its primary energy substrate.',
      'At slightly higher doses (exceeding 0.5 grams per kilogram of body weight), xylitol causes idiosyncratic acute hepatic necrosis. Hepatocytes experience rapid cellular ATP depletion and oxidative destruction, culminating in acute hepatic failure, bleeding diathesis (coagulopathy), and death even if blood glucose was aggressively stabilized.',
    ],
    biochemicalMechanism: 'In human physiology, xylitol undergoes slow, passive intestinal diffusion without triggering significant insulin release. In canines, however, xylitol is rapidly and completely absorbed through the proximal small intestine. It acts as an ultra-potent secretagogue on canine pancreatic beta cells, triggering a sudden release of endogenous insulin 2.5 to 6 times greater than an equimolar glucose challenge. This creates sudden, profound hypoglycemia. Furthermore, hepatic metabolism of xylitol depletes cellular nicotinamide adenine dinucleotide (NAD) and adenosine triphosphate (ATP), leading to severe mitochondrial dysfunction, reactive oxygen species generation, and acute hepatocellular necrosis.',
    vitalStats: [
      { label: 'Toxicity Classification', value: 'Fatal Systemic Poison', tone: 'danger' },
      { label: 'Toxic Dosage Threshold', value: '0.1 g/kg (Hypoglycemia) / 0.5 g/kg (Liver Failure)', tone: 'danger' },
      { label: 'Intervention Window', value: '0 to 30 Minutes', tone: 'danger' },
      { label: 'Primary Pathology', value: 'Hypoglycemic Shock & Liver Necrosis', tone: 'danger' },
    ],
    timeline: [
      {
        phase: 'Stage 1: 10 to 60 Minutes (Acute Hypoglycemia)',
        symptoms: [
          'Sudden severe vomiting and hypersalivation',
          'Profound weakness, glass-eyed lethargy, and ataxia (drunken staggering)',
          'Loss of coordination and inability to stand',
          'Pale or sticky mucous membranes',
        ],
      },
      {
        phase: 'Stage 2: 1 to 12 Hours (Neuro-Metabolic Crisis)',
        symptoms: [
          'Severe hypoglycemic muscle tremors and generalized grand mal seizures',
          'Hypokalemic cardiac arrhythmias',
          'Comatose state and hypothermia',
          'Delayed onset in dogs ingesting coated or extended-release gum gums',
        ],
      },
      {
        phase: 'Stage 3: 12 to 72 Hours (Acute Hepatic Necrosis)',
        symptoms: [
          'Marked elevation in ALT, AST, and total bilirubin',
          'Icterus (jaundiced yellowing of sclera, gums, and skin)',
          'Petechiae, ecchymoses, and spontaneous internal hemorrhaging (coagulopathy)',
          'Multi-organ failure and death',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Immediate Substance Identification',
        desc: 'Grab the packaging, chewing gum wrapper, or jar label. Confirm whether "Xylitol", "Birch Sugar", or "E967" is listed in the ingredients.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'DO NOT Induce Vomiting at Home if Symptomatic',
        desc: 'Never induce emesis if your dog is already wobbly, lethargic, or disoriented. Because of rapid hypoglycemia, inducing vomiting carries an extreme risk of pulmonary aspiration and asphyxiation.',
        isUrgent: true,
      },
      {
        stepNumber: 3,
        title: 'Immediate Oral Sugar Support (If Conscious Only)',
        desc: 'If your dog is conscious and swallowing, rub maple syrup, honey, or Karo syrup onto their gums while en route to the veterinary emergency room. This provides fleeting mucosal glucose absorption.',
        isUrgent: false,
      },
      {
        stepNumber: 4,
        title: 'Transport to 24/7 Veterinary ER Without Delay',
        desc: 'Call the clinic while driving so their clinical staff can prepare an intravenous catheter, 50% dextrose bolus, and blood glucose testing apparatus before your arrival.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Intravenous Dextrose Infusion (CRI)',
        purpose: 'Continuous rate infusion of 2.5% to 5% dextrose in balanced isotonic fluids for 24–48 hours to prevent brain death and stabilize blood glucose.',
      },
      {
        name: 'Hepatoprotective Therapy',
        purpose: 'Aggressive administration of N-acetylcysteine (NAC), S-adenosylmethionine (SAMe), and silymarin to salvage surviving hepatocytes and replenish cellular glutathione.',
      },
      {
        name: 'Serial Blood Chemistry & Coagulation Profiling',
        purpose: 'Continuous monitoring of PT/aPTT clotting times, potassium, phosphorus, and liver enzymes every 12 to 24 hours.',
      },
      {
        name: 'Fresh Frozen Plasma (FFP)',
        purpose: 'Transfused to dogs exhibiting acute coagulopathy and active hemorrhage due to hepatic cessation of clotting factor synthesis.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Single-Ingredient Peanut Butter',
        why: 'Peanut butter made with 100% roasted peanuts and zero added sugars, salt, or polyol substitutes.',
      },
      {
        name: 'Pure Organic Pumpkin Puree',
        why: 'Naturally sweet, high in digestive prebiotic fiber, and completely devoid of artificial sweeteners.',
      },
      {
        name: 'Mashed Sweet Potato',
        why: 'A wholesome, nutrient-dense natural carb topper rich in dietary beta-carotene.',
      },
    ],
    preventionRules: [
      'Scrutinize every peanut butter and nut spread label before offering it in lick mats or Kongs.',
      'Keep all sugar-free chewing gum, breath mints, and dietary throat lozenges in high closed cabinets—never in backpacks, purses, or car cup holders.',
      'Never brush your dog’s teeth with human toothpaste; canine dental pastes are specially formulated without foaming agents or polyols.',
      'Check liquid human medications (especially children’s cough syrups and liquid allergy drops) for xylitol sweetener.',
    ],
    faqs: [
      {
        q: 'Can a dog survive eating xylitol?',
        a: 'Yes, but survival is directly contingent on the speed of veterinary intervention. Dogs treated within 30 to 60 minutes with intravenous dextrose and liver support have an excellent prognosis. If severe liver failure develops, the mortality rate increases substantially.',
      },
      {
        q: 'Is birch sugar the exact same chemical as xylitol?',
        a: 'Yes. "Birch sugar" is simply an alternative marketing term used by natural food brands to denote xylitol derived from the bark of birch trees. It possesses identical canine biochemical toxicity.',
      },
      {
        q: 'Does activated charcoal work for xylitol ingestion?',
        a: 'No. Clinical veterinary toxicology shows that activated charcoal has poor binding affinity for small, highly water-soluble sugar alcohols like xylitol. Vets generally prioritize emesis and IV dextrose over charcoal administration.',
      },
    ],
  },

  // 2. CHOCOLATE & COCOA
  {
    slug: 'chocolate-and-cocoa',
    name: 'Chocolate & Cocoa (Theobromine & Caffeine)',
    scientificName: 'Theobroma Cacao (Methylxanthine Alkaloids)',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ FATAL RISK // CARDIAC & NEUROTOXIN',
    riskSeverity: 'HIGH TO FATAL: Induces severe cardiac arrhythmias, myocardial necrosis, muscle tremors, seizures, and respiratory arrest.',
    primaryCompound: 'Theobromine (3,7-dimethylxanthine) & Caffeine',
    targetOrgans: ['Central Nervous System', 'Myocardium (Heart Muscle)', 'Renal Glomeruli'],
    toxicThresholdOrServing: '20 mg/kg: Mild GI signs; 40–50 mg/kg: Cardiotoxicity; 60+ mg/kg: Grand mal seizures and potential mortality.',
    onsetWindow: '2 to 4 hours post-ingestion (peak serum levels at 10 hours; biological half-life of 17.5 hours)',
    summary: 'Chocolate contains the methylxanthine alkaloids theobromine and caffeine. Canines metabolize theobromine at a fraction of the human metabolic velocity, allowing the chemical to accumulate in plasma, overstimulate the cardiovascular and nervous systems, and trigger lethal tachyarrhythmias.',
    narrativeOverview: [
      'Chocolate toxicity is among the most frequent veterinary emergency admissions during holidays such as Halloween, Christmas, and Easter. The danger is directly proportional to the concentration of cocoa solids: baker’s cocoa powder and unsweetened dark chocolate represent lethal hazards in minuscule quantities, whereas milk chocolate requires larger volumes.',
      'Unlike humans who readily metabolize and excrete theobromine via hepatic cytochrome P450 pathways in 2 to 3 hours, dogs exhibit an extremely prolonged elimination half-life of 17.5 hours. Furthermore, theobromine undergoes extensive enterohepatic recirculation and is actively reabsorbed back into the bloodstream across the canine bladder wall.',
      'As methylxanthine concentrations climb, competitive inhibition of adenosine receptors causes intense central nervous system stimulation. Simultaneously, cellular phosphodiesterase is inhibited, leading to sustained accumulation of cyclic AMP (cAMP) and intracellular calcium overload in cardiac myocytes.',
    ],
    biochemicalMechanism: 'Theobromine and caffeine act through three distinct physiological pathways: (1) competitive antagonism of cell-surface adenosine receptors, which normally mediate sedation and vasodilation; (2) non-selective inhibition of phosphodiesterase enzymes (PDE), preventing the breakdown of intracellular cAMP and hyper-sensitizing beta-adrenergic receptors; and (3) enhancement of intracellular calcium sequestration inside striated and cardiac muscle cells. This triad precipitates peripheral vasoconstriction, elevated mean arterial pressure, tachycardia, refractory ventricular arrhythmias, and uncontrolled central nervous system firing.',
    vitalStats: [
      { label: 'Toxicity Classification', value: 'Methylxanthine Neurotoxin', tone: 'danger' },
      { label: 'Lethal Dose (LD50)', value: '100–200 mg/kg Theobromine', tone: 'danger' },
      { label: 'Canine Half-Life', value: '17.5 Hours (Extremely Prolonged)', tone: 'danger' },
      { label: 'Highest Hazard Food', value: 'Pure Cocoa Powder & Baker’s Dark Chocolate', tone: 'danger' },
    ],
    timeline: [
      {
        phase: 'Stage 1: 1 to 4 Hours (Gastrointestinal & Early Excitation)',
        symptoms: [
          'Frequent vomiting, nausea, and bilious diarrhea',
          'Intense polydipsia (excessive thirst) and bloating',
          'Pacing, restlessness, and high anxiety',
          'Mild tachycardia (heart rate climbing above normal resting levels)',
        ],
      },
      {
        phase: 'Stage 2: 4 to 12 Hours (Cardiovascular Escalation)',
        symptoms: [
          'Severe sinus tachycardia, ventricular premature complexes (VPCs), and gallop rhythms',
          'Marked polyuria (excessive urination due to adenosine-mediated diuretic action)',
          'Muscle stiffness, ataxia, and generalized tremors',
          'Elevated blood pressure (hypertension)',
        ],
      },
      {
        phase: 'Stage 3: 12 to 36 Hours (Critical Neurological Crisis)',
        symptoms: [
          'Full-blown grand mal seizures and hyperthermia (body temperature >105°F)',
          'Ventricular fibrillation, myocardial ischemia, or heart failure',
          'Comatose state, cyanosis, respiratory failure, and death',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Calculate Type and Ingested Ounces',
        desc: 'Identify whether the dog consumed milk chocolate, semi-sweet chocolate, 70%+ dark chocolate, or baker’s baking cocoa. Keep all wrappers.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Contact Vet ER or Poison Hotline Instantly',
        desc: 'Provide your dog’s exact weight in lbs/kg and the estimated ounces ingested. The veterinary team will calculate the exact mg/kg theobromine exposure.',
        isUrgent: true,
      },
      {
        stepNumber: 3,
        title: 'Do NOT Wait for Symptoms to Appear',
        desc: 'Symptoms often take 2 to 4 hours to manifest, by which time the toxin has already passed from the stomach into systemic circulation.',
        isUrgent: true,
      },
      {
        stepNumber: 4,
        title: 'Clinic Decontamination',
        desc: 'If within 2 to 4 hours, veterinary emesis (using apomorphine or ropinirole eye drops) followed by activated charcoal can avert critical toxicity.',
        isUrgent: false,
      },
    ],
    vetTreatments: [
      {
        name: 'Medical Emesis & Gastric Lavage',
        purpose: 'Evacuates chocolate mass before full gastric liquefaction; warm saline lavage used if emesis fails.',
      },
      {
        name: 'Repeated Multi-Dose Activated Charcoal',
        purpose: 'Administered every 4–6 hours with a cathartic to interrupt the massive enterohepatic recycling of theobromine.',
      },
      {
        name: 'Continuous ECG & Antiarrhythmic Infusion',
        purpose: 'Continuous cardiac telemetry; beta-blockers (propranolol/esmolol) or lidocaine infused to control ventricular arrhythmias.',
      },
      {
        name: 'Frequent Urinary Bladder Decompression / Catheter',
        purpose: 'Urethral catheterization prevents theobromine from being reabsorbed across the transitional epithelium of the urinary bladder wall.',
      },
    ],
    safeAlternatives: [
      {
        name: '100% Pure Canine Carob Drops',
        why: 'Derived from Ceratonia siliqua pods, carob tastes naturally sweet and cocoa-like but contains zero theobromine or caffeine.',
      },
      {
        name: 'Frozen Banana & Peanut Butter Pops',
        why: 'Creamy, rich texture that satisfies sweet cravings without harmful alkaloids.',
      },
      {
        name: 'Dehydrated Beef Liver Treats',
        why: 'Savory, high-value reward that dogs universally prefer over human confections.',
      },
    ],
    preventionRules: [
      'Store all baking chocolates and cocoa powders on high, latch-secured pantry shelves.',
      'Educate guests and children that dogs cannot process even single pieces of dark chocolate.',
      'During Easter, Halloween, and Christmas, keep festive baskets elevated and away from nose level.',
      'Be alert to chocolate-covered coffee beans and chocolate-coated macadamia nuts—double lethal toxins.',
    ],
    faqs: [
      {
        q: 'Why is dark chocolate so much more dangerous than milk chocolate?',
        a: 'Theobromine resides inside the cocoa solids. Unsweetened baking chocolate contains roughly 16 mg of theobromine per gram, whereas milk chocolate contains only ~2 mg/g. A medium-sized dog can suffer fatal poisoning from just 1–2 ounces of baking chocolate.',
      },
      {
        q: 'Is white chocolate toxic to dogs?',
        a: 'White chocolate contains negligible amounts of theobromine and cocoa solids. However, it is loaded with butterfat and sugar, posing an extreme risk of acute pancreatitis rather than methylxanthine poisoning.',
      },
      {
        q: 'Can a dog recover from chocolate poisoning?',
        a: 'Yes. With prompt decontamination, fluid diuresis, and anti-arrhythmic care, the vast majority of dogs survive chocolate poisoning with no long-term organ damage.',
      },
    ],
  },

  // 3. GRAPES & RAISINS
  {
    slug: 'grapes-and-raisins',
    name: 'Grapes & Raisins (All Varieties)',
    scientificName: 'Vitis Vinifera (Tartaric Acid & Potassium Bitartrate)',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ LETHAL DANGER // ACUTE RENAL SHUTDOWN',
    riskSeverity: 'EXTREMELY FATAL: Idiosyncratic acute tubular necrosis leading to total irreversible canine renal failure within 24 to 72 hours.',
    primaryCompound: 'Tartaric Acid & Potassium Bitartrate',
    targetOrgans: ['Renal Proximal Tubules', 'Glomerular Filtration Membrane'],
    toxicThresholdOrServing: 'Zero Tolerance: Idiosyncratic. As few as 1–2 grapes or raisins have induced fatal anuric renal failure in adult dogs.',
    onsetWindow: 'Gastrointestinal signs within 2 to 6 hours; renal failure markers surge at 24 to 48 hours',
    summary: 'Grapes, raisins, sultanas, currants, and grape pomace contain high concentrations of tartaric acid and its salt potassium bitartrate. Dogs are uniquely susceptible to tartaric acid-induced nephrotoxicity, which destroys the proximal renal tubules and can shut down kidney filtration completely.',
    narrativeOverview: [
      'For decades, the toxic principle in grapes remained a frustrating mystery in veterinary medicine until clinical breakthroughs identified tartaric acid and potassium bitartrate as the causative agents. Because tartaric acid content varies wildly depending on grape variety, ripeness, and soil conditions, there is no reliable "safe" dose.',
      'Raisins and currants are dried, concentrating the tartaric acid payload by a factor of 4.5 times compared to fresh table grapes. Even baked goods containing raisin paste or holiday fruitcakes pose a severe life threat to dogs of all sizes.',
      'The clinical danger is idiosyncratic: some dogs have consumed grapes without immediate catastrophe, while others developed acute, irreversible oliguric renal failure from a single grape dropped on the floor. Never gamble with any Vitis fruit.',
    ],
    biochemicalMechanism: 'Canines possess a distinct physiological vulnerability in the proximal tubular epithelial cells of the nephron to tartrates. Absorbed tartaric acid causes rapid cellular ATP depletion, loss of tubular brush-border polarity, and mitochondrial destruction. This triggers widespread proximal tubular necrosis. As necrotic epithelial casts slough into the tubular lumen, intra-tubular pressure surges, driving glomerular filtration rate (GFR) to zero and leading to anuria (inability to produce urine), refractory hyperkalemia, metabolic acidosis, and uremic encephalopathy.',
    vitalStats: [
      { label: 'Toxicity Classification', value: 'Nephrotoxic Tubulotoxin', tone: 'danger' },
      { label: 'Toxic Dosage Threshold', value: 'Zero Tolerance (Idiosyncratic)', tone: 'danger' },
      { label: 'Primary Pathology', value: 'Acute Tubular Necrosis (Renal Failure)', tone: 'danger' },
      { label: 'Critical Intervention', value: 'Aggressive IV Diuresis for 48 Hours', tone: 'danger' },
    ],
    timeline: [
      {
        phase: 'Stage 1: 2 to 6 Hours (Initial Gastrointestinal Onset)',
        symptoms: [
          'Persistent vomiting, retching, and loose diarrhea',
          'Anorexia (refusal of all food) and intense lethargy',
          'Abdominal tenderness upon gentle palpation',
          'Halitosis with faint grape odor',
        ],
      },
      {
        phase: 'Stage 2: 12 to 24 Hours (Subclinical Renal Deterioration)',
        symptoms: [
          'Dehydration and sunken eyes despite increased thirst',
          'Sharp increase in serum Blood Urea Nitrogen (BUN) and Creatinine',
          'Electrolyte imbalances (hyperphosphatemia and hyperkalemia)',
          'Progressive weakness, dull demeanor, and head pressing',
        ],
      },
      {
        phase: 'Stage 3: 24 to 72 Hours (Oliguric / Anuric Renal Failure)',
        symptoms: [
          'Oliguria (markedly reduced urination) progressing to Anuria (zero urine production)',
          'Uremic halitosis (breath smelling like ammonia or urine)',
          'Ulcerative stomatitis in gums and tongue',
          'Severe metabolic acidosis, uremic seizures, coma, and death',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Treat Every Single Ingestion as a Code-Red Emergency',
        desc: 'Do not wait for symptoms or adopt a "wait-and-see" approach. Once kidneys shut down, dialysis is the only salvage option.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Determine Ingestion Time & Volume',
        desc: 'Count remaining fruit or check the weight of the raisin box consumed. Inform the emergency clinic while in transit.',
        isUrgent: true,
      },
      {
        stepNumber: 3,
        title: 'Immediate Veterinary Emesis Induction',
        desc: 'Veterinary decontamination within 2 hours removes intact grapes from the gastric rugae before tartaric acid absorption occurs.',
        isUrgent: true,
      },
      {
        stepNumber: 4,
        title: 'Mandatory 48-Hour In-Hospital IV Fluid Flush',
        desc: 'Even if all fruit is vomited up, prophylactic high-rate intravenous fluid therapy is required to maintain renal perfusion.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Intravenous Fluid Diuresis (2x to 3x Maintenance)',
        purpose: 'Administered continuously for 48 to 72 hours to maximize renal blood flow, reduce tubular contact time, and wash out casts.',
      },
      {
        name: 'Repeated Activated Charcoal with Cathartic',
        purpose: 'Adsorbs lingering tartaric acid throughout the duodenal lumen to limit systemic entry.',
      },
      {
        name: 'Serial Renal Panels & Electrolyte Monitoring',
        purpose: 'Creatinine, BUN, symmetric dimethylarginine (SDMA), and phosphorus measured every 12 to 24 hours.',
      },
      {
        name: 'Continuous Urine Output Measurement (Foley Catheter)',
        purpose: 'Ensures minimum urine production of >1–2 mL/kg/hour to catch oliguria before irreversible damage.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Fresh Wild Blueberries',
        why: 'Rich in brain-protecting anthocyanins and natural antioxidants with zero tartaric acid hazard.',
      },
      {
        name: 'Crisp Seedless Watermelon Chunks',
        why: 'Delivers 92% hydration, potassium, and lycopene—a refreshing summer reward.',
      },
      {
        name: 'Crunchy Peeled Apple Slices (Core Removed)',
        why: 'Provides dietary pectin fiber and vitamins A and C with satisfying crunch.',
      },
    ],
    preventionRules: [
      'Never leave trail mix, granola bars, or raisin bread on kitchen countertops.',
      'Check ingredient lists on gourmet breads, cereals, and baked goods for raisin paste or grape juice concentrate.',
      'Fence off backyard grape arbors or vineyard areas to prevent foraging dogs from harvesting fruit.',
      'Teach young children never to feed grapes to dogs as games or treats.',
    ],
    faqs: [
      {
        q: 'Does cooking or baking grapes or raisins destroy the toxin?',
        a: 'No. Tartaric acid and potassium bitartrate are thermally stable chemical compounds. Baking them into bread, cookies, or fruitcakes does not neutralize toxicity whatsoever.',
      },
      {
        q: 'My dog ate just one grape—should I really go to the ER?',
        a: 'Yes. Veterinary toxicologists stress that canine grape toxicity is idiosyncratic: severe kidney failure has been documented in 60-lb dogs from just a single grape. Immediate decontamination is infinitely safer than risking lifelong renal damage.',
      },
      {
        q: 'Can dogs drink wine or grape juice?',
        a: 'Absolutely not. Grape juice contains dense liquid concentrations of tartaric acid, while wine adds ethanol, multiplying the toxicity tenfold.',
      },
    ],
  },

  // 4. ONIONS & GARLIC
  {
    slug: 'onions-and-garlic',
    name: 'Onions, Garlic, Leeks & Chives (Allium Family)',
    scientificName: 'Allium Spp. (N-Propyl Disulfide & Thiosulfates)',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ CUMULATIVE TOXIN // HEMOLYTIC ANEMIA',
    riskSeverity: 'HIGH TO FATAL: Destroys red blood cells through oxidative hemolysis, precipitating severe Heinz body hemolytic anemia and methemoglobinemia.',
    primaryCompound: 'N-propyl Disulfide, Sodium Thiosulfate & Allicin',
    targetOrgans: ['Red Blood Cells (Erythrocytes)', 'Hemoglobin', 'Spleen', 'Kidneys'],
    toxicThresholdOrServing: 'Onions: 0.5% body weight (15–30 g/kg). Garlic is 5x more potent (~5 g/kg). Powders are 10x more concentrated!',
    onsetWindow: 'Mild nausea within hours; severe hemolytic anemia and red blood cell collapse peak at 3 to 7 days post-ingestion',
    summary: 'All members of the Allium family (onions, garlic, shallots, leeks, chives) contain organosulfur compounds that canine red blood cells cannot neutralize. These chemicals oxidatively denature hemoglobin, causing red blood cells to rupture and leading to severe Heinz body anemia.',
    narrativeOverview: [
      'Alliums are omnipresent in human cooking: pasta sauces, broths, seasonings, burger patties, baby foods, and soups. While beneficial to humans, dogs lack adequate glucose-6-phosphate dehydrogenase (G6PD) and catalase to defend their red blood cell membranes against organosulfur free radicals.',
      'Garlic is approximately five times more toxic than raw onion by weight. Even more treacherous are dehydrated powders: a single tablespoon of onion powder or garlic powder is equivalent to a whole onion or bulb, creating acute massive oxidative stress in a dog bowl.',
      'Allium toxicity exhibits cumulative kinetics. Feeding a dog small leftovers containing onion soup or garlic-rubbed steak across consecutive days depletes erythrocyte glutathione reserves just as aggressively as a single large ingestion, culminating in delayed collapse several days later.',
    ],
    biochemicalMechanism: 'Ingested alliums release organosulfur compounds including N-propyl disulfide and sodium thiosulfate. In the canine bloodstream, these electrophilic compounds deplete cellular reduced glutathione (GSH) inside erythrocytes. As protective sulfhydryl groups are oxidized, hemoglobin denatures and precipitates into microscopic clumps termed Heinz bodies on the inner red cell membrane. Splenic macrophages recognize these deformed erythrocytes as defective and destroy them (extravascular hemolysis). Simultaneously, fragile Heinz body cells undergo intravascular lysis, releasing free hemoglobin that can precipitate in renal tubules.',
    vitalStats: [
      { label: 'Toxicity Classification', value: 'Oxidative Hemotoxin', tone: 'danger' },
      { label: 'Relative Potency', value: 'Garlic is 5x More Toxic Than Onion', tone: 'danger' },
      { label: 'Peak Clinical Severity', value: 'Days 3 to 7 Post-Ingestion', tone: 'danger' },
      { label: 'Dehydrated Powders', value: '10x Concentration Hazard', tone: 'danger' },
    ],
    timeline: [
      {
        phase: 'Stage 1: 1 to 24 Hours (Gastrointestinal Irritation)',
        symptoms: [
          'Mild nausea, drooling, and inappetence',
          'Vomiting and diarrhea with distinct onion/garlic odor',
          'Abdominal cramping and restlessness',
        ],
      },
      {
        phase: 'Stage 2: 24 to 72 Hours (Early Hemolytic Breakdown)',
        symptoms: [
          'Increasing lethargy and reluctance to walk or play',
          'Pale, porcelain-white or yellowish mucous membranes (gums and tongue)',
          'Tachypnea (rapid shallow breathing) as tissues starve for oxygen',
          'Tachycardia as the heart compensates for reduced oxygen carrying capacity',
        ],
      },
      {
        phase: 'Stage 3: 3 to 7 Days (Fulminant Hemolytic Anemia)',
        symptoms: [
          'Hemoglobinuria: Urine turns reddish-brown or "port wine" colored',
          'Jaundice / icterus in sclera and ears from bilirubin accumulation',
          'Exercise intolerance, weakness, postural collapse, and hypoxemia',
          'Acute secondary renal tubular injury from free hemoglobin casts',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Check Seasoning and Powder Labels',
        desc: 'Review packaging of table scraps or broths. Powdered spices and dehydrated onion flakes carry tenfold higher toxicity than raw vegetables.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Veterinary Consultation Regardless of Symptoms',
        desc: 'Because anemia takes 3 to 5 days to peak, lack of immediate symptoms is dangerously misleading.',
        isUrgent: true,
      },
      {
        stepNumber: 3,
        title: 'Immediate Clinical Emesis (If Ingested Within 2 Hours)',
        desc: 'Medical evacuation of the stomach eliminates unabsorbed alliums before enzymatic conversion occurs.',
        isUrgent: true,
      },
      {
        stepNumber: 4,
        title: 'Baseline Hematocrit (PCV) Blood Testing',
        desc: 'Have the veterinarian run a complete blood count (CBC) and blood smear to track packed cell volume (PCV) and Heinz body percentage over the next 5 days.',
        isUrgent: false,
      },
    ],
    vetTreatments: [
      {
        name: 'Serial Packed Cell Volume (PCV) & Blood Smears',
        purpose: 'Tracks percentage of red blood cell destruction and Heinz body inclusion count daily.',
      },
      {
        name: 'Packed Red Blood Cell (pRBC) or Whole Blood Transfusion',
        purpose: 'Indicated when PCV drops below 15–20% or when the patient exhibits severe tissue hypoxia.',
      },
      {
        name: 'Intravenous Fluid Therapy & Diuresis',
        purpose: 'Protects the renal tubules from acute pigment nephropathy caused by filtration of massive free hemoglobin.',
      },
      {
        name: 'Supplemental Oxygen Therapy & Antioxidant Support',
        purpose: 'Provides cage oxygen for hypoxic distress alongside IV antioxidants (N-acetylcysteine, Vitamin E) to quell oxidative cascades.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Steamed Grated Zucchini',
        why: 'Adds volume, fiber, and savory appeal to homemade meals without harmful organosulfurs.',
      },
      {
        name: 'Fresh Curly Parsley (In Small Amounts)',
        why: 'Naturally freshens canine breath and provides chlorophyll and vitamin C without red blood cell risks.',
      },
      {
        name: 'Steamed Pure Pumpkin',
        why: 'Enriches homemade recipes with natural beta-carotene and moisture.',
      },
    ],
    preventionRules: [
      'Never feed store-bought rotisserie chicken bones, meat gravies, or marinades—almost all are rubbed with onion and garlic powder.',
      'Check commercial canned broths: human bone and chicken broths almost universally include onion puree.',
      'Store all garden alliums in high hanging wire baskets out of canine reach.',
      'Avoid homeopathic or holistic "garlic flea treatments"; scientific veterinary consensus confirms garlic cannot safely repel fleas and carries toxic risk.',
    ],
    faqs: [
      {
        q: 'Does cooking garlic or onions make them safe for dogs?',
        a: 'No. The toxic organosulfur compounds in alliums are completely unaffected by boiling, roasting, frying, dehydrating, or microwaving. Cooked onions are just as toxic as raw.',
      },
      {
        q: 'Why do some dog treat brands claim garlic is safe?',
        a: 'Some niche supplement manufacturers claim microscopic amounts have antimicrobial benefits. However, board-certified veterinary toxicologists (including the ASPCA Animal Poison Control Center) maintain that garlic has no proven clinical advantage in dogs and exclusively introduces oxidative stress to red blood cells.',
      },
      {
        q: 'What color does urine turn during onion poisoning?',
        a: 'Urine typically turns dark amber, reddish-brown, or deep "port wine" color (hemoglobinuria) as ruptured red blood cells release free hemoglobin that filters through the bladder.',
      },
    ],
  },

  // 5. MACADAMIA NUTS
  {
    slug: 'macadamia-nuts',
    name: 'Macadamia Nuts',
    scientificName: 'Macadamia Integrifolia / Tetraphylla',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ SEVERE NEUROTOXIN // HIND-LIMB PARALYSIS',
    riskSeverity: 'MODERATE TO SEVERE: Causes severe neuromuscular depression, bilateral hind-limb paresis (inability to walk), tremors, hyperthermia, and pancreatitis.',
    primaryCompound: 'Unknown Macadamia Neurotoxic Ester & Ultra-Dense Lipid Matrix',
    targetOrgans: ['Neuromuscular Junctions', 'Central Nervous System', 'Exocrine Pancreas'],
    toxicThresholdOrServing: '0.7 g/kg body weight (roughly 1 to 2 nuts for a 10-lb toy dog; 10–12 nuts for a medium dog).',
    onsetWindow: '3 to 12 hours post-ingestion (clinical signs peak at 12–24 hours; resolve within 24–48 hours with care)',
    summary: 'Macadamia nuts are exclusively toxic to canines—no other domestic species develops this syndrome. Ingestion triggers acute neuromuscular dysfunction characterized by sudden weakness in the hind legs, involuntary muscle fasciculations, high fever, and extreme joint pain.',
    narrativeOverview: [
      'Macadamia nuts (frequently baked into cookies or mixed into trail mixes) contain an as-yet-unidentified toxic lipid fraction that selectively impairs canine neuromuscular signaling. Dogs ingesting macadamias lose motor control of their pelvic limbs, presenting with a distinctive drunken gait or total inability to stand.',
      'In addition to neuromuscular toxicity, macadamias are exceptionally rich in fats (over 75% fat by weight, predominantly monounsaturated oils). This concentrated fat bomb poses an immediate secondary hazard: triggering acute life-threatening pancreatitis.',
      'The prognosis for uncomplicated macadamia nut poisoning is generally favorable with prompt veterinary support, as the neurotoxin clears within 24 to 48 hours. However, concurrent ingestion with chocolate or raisins creates a compounded medical crisis.',
    ],
    biochemicalMechanism: 'While the exact chemical structure of the macadamia neurotoxic agent remains under ongoing research, evidence indicates that it functions as a neuromuscular blocking or channelopathic agent, inhibiting signal transmission across the neuromuscular junction and motor nerve pathways. Simultaneously, the high lipid density stimulates rapid cholecystokinin release, triggering pancreatic hypersecretion and risk of localized pancreatic auto-digestion.',
    vitalStats: [
      { label: 'Toxicity Classification', value: 'Species-Specific Neurotoxin', tone: 'danger' },
      { label: 'Toxic Dosage Threshold', value: '0.7 g/kg (As Little as 1–2 Nuts)', tone: 'danger' },
      { label: 'Primary Presentation', value: 'Bilateral Hind-Limb Paresis (Weakness)', tone: 'danger' },
      { label: 'Resolution Timeline', value: '24 to 48 Hours with Supportive Care', tone: 'warning' },
    ],
    timeline: [
      {
        phase: 'Stage 1: 1 to 6 Hours (Initial Systemic Signs)',
        symptoms: [
          'Vomiting, lip-smacking nausea, and mild lethargy',
          'Hyperthermia (body temperature spiking above 104°F / 40°C)',
          'Abdominal tenderness and reluctance to walk',
        ],
      },
      {
        phase: 'Stage 2: 6 to 12 Hours (Neuromuscular Paresis)',
        symptoms: [
          'Marked bilateral hind-limb weakness, ataxia, and knuckling over on paws',
          'Involuntary muscle tremors, shivering, and generalized stiffness',
          'Swollen, painful joints (polyarthralgia)',
          'Tachycardia and panting from distress and fever',
        ],
      },
      {
        phase: 'Stage 3: 12 to 24 Hours (Peak Recumbency & Recovery)',
        symptoms: [
          'Inability to rise or stand (sternal recumbency)',
          'Severe secondary pancreatitis in high-fat exposures',
          'Gradual decline in neuromuscular blockade over hours 24–48 under veterinary care',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Check for Chocolate or Raisin Admixtures',
        desc: 'Macadamias are frequently packaged with white/dark chocolate or trail mix raisins, which exponentially amplifies the medical emergency.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Prevent Further Injury from Falls',
        desc: 'Because dogs lose hind-limb coordination, keep them confined on padded blankets away from stairs to avoid secondary fractures or disc herniation.',
        isUrgent: false,
      },
      {
        stepNumber: 3,
        title: 'Veterinary Decontamination (If Asymptomatic & Recent)',
        desc: 'Inducing emesis within 2 hours removes the hard nut pieces before intestinal fat absorption.',
        isUrgent: true,
      },
      {
        stepNumber: 4,
        title: 'In-Hospital Supportive Care',
        desc: 'Intravenous fluid therapy, anti-nausea therapy, and active cooling for high fever ensure rapid recovery.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Veterinary Emesis & Activated Charcoal',
        purpose: 'Evacuates hard nut chunks and binds remaining lipid toxins in the upper digestive tract.',
      },
      {
        name: 'Balanced IV Fluid Therapy',
        purpose: 'Accelerates urinary and metabolic clearance of the toxin while combating hyperthermia and dehydration.',
      },
      {
        name: 'Multimodal Analgesia & Antipyretics',
        purpose: 'Controls severe muscle tremors, joint arthralgia, and abdominal pain without using harmful human NSAIDs.',
      },
      {
        name: 'Pancreatic Monitoring (cPL Test)',
        purpose: 'Screening for canine pancreas-specific lipase to catch secondary pancreatitis early.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Raw Unsalted Pumpkin Seeds (Pepitas)',
        why: 'Naturally high in zinc and dietary magnesium, completely safe and beneficial for canine digestion.',
      },
      {
        name: 'Steamed Baby Carrots',
        why: 'Satisfying crunchy mouthfeel with virtually zero fat and zero toxicity.',
      },
      {
        name: 'Air-Popped Plain Popcorn (No Salt, No Butter)',
        why: 'A crunchy low-fat treat in small occasional pinches.',
      },
    ],
    preventionRules: [
      'Keep all commercial gourmet nut mixes and macadamia cookies on high closed shelves.',
      'Check artisanal nut butters: specialty blends often incorporate macadamias alongside cashews.',
      'Clean up fallen nuts immediately if you live in subtropical climates where macadamia trees grow.',
    ],
    faqs: [
      {
        q: 'Can a dog die from eating macadamia nuts?',
        a: 'Pure macadamia toxicity rarely causes fatal mortality on its own if the dog receives basic veterinary supportive care. However, fatalities occur when macadamias are consumed alongside chocolate, or when massive fat triggers necrotic pancreatitis.',
      },
      {
        q: 'How long does macadamia nut paralysis last in dogs?',
        a: 'The hind-limb paresis typically peaks around 12 to 24 hours post-ingestion and resolves completely within 48 hours as the liver and kidneys metabolize the compound.',
      },
      {
        q: 'Are other nuts safe for dogs?',
        a: 'Most nuts are poor choices for dogs: walnuts and pecans are prone to tremorgenic mycotoxins, pistachios cause bowel blockages, and almonds are difficult to digest. Peanuts (technically legumes) in unsalted form are the only safe option.',
      },
    ],
  },

  // 6. COOKED BONES
  {
    slug: 'cooked-bones',
    name: 'Cooked Bones (Any Poultry or Meat)',
    scientificName: 'Thermal-Altered Calcified Matrix',
    status: 'DANGEROUS_TOXIC',
    category: 'HARMFUL',
    badgeLabel: '☠ SURGICAL EMERGENCY // PERFORATION HAZARD',
    riskSeverity: 'SURGICAL EMERGENCY: Cooking alters bone cellular structure from soft/pliable to brittle and splintery, causing esophageal tears, stomach puncture, and fatal peritonitis.',
    primaryCompound: 'Hardened, Dehydrated Hydroxyapatite Shards',
    targetOrgans: ['Esophagus', 'Stomach Wall', 'Duodenum & Small Intestines', 'Colon'],
    toxicThresholdOrServing: 'Zero Tolerance: Even a single cooked chicken, rib, or chop bone can shatter into razor-sharp needle-like fragments.',
    onsetWindow: 'Immediate choking/esophageal injury (0–2 hours) or delayed perforation/blockage (12–48 hours)',
    summary: 'Never feed cooked bones of any kind—poultry, beef, pork, or lamb. Heat denatures the collagen matrix that gives raw bone flexibility, transforming it into brittle, glass-like calcium fragments that can puncture internal organs and require life-saving emergency surgery.',
    narrativeOverview: [
      'The myth that dogs can eat table bones persists from ancestral history, but wild canines only consumed raw, pliable bones surrounded by muscle meat. Thermal cooking (boiling, baking, grilling) completely dehydrates the bone matrix and cross-links calcium minerals into rigid, brittle structures.',
      'When crunched under canine jaw pressures (which can exceed 300 psi), cooked bones shatter into jagged needles and knife-like shards. These sharp fragments act like internal shrapnel as they travel through the gastrointestinal tract.',
      'Cooked bone shards can pierce the esophagus, lacerate the stomach lining, puncture the small intestine (releasing septic fecal contents into the sterile abdominal cavity), or pack tightly in the rectum to form an impassable concrete-like impaction.',
    ],
    biochemicalMechanism: 'Raw bone consists of ~30% organic collagen matrix and ~70% inorganic hydroxyapatite minerals. Cooking at temperatures above 140°F (60°C) denatures organic type I collagen triple helices, removing elastic tensile strength. The remaining dehydrated mineral scaffold lacks ductility and shatters under shear force with acute jagged fracture margins. In the stomach, normal gastric hydrochloric acid (pH 1–2) requires hours to dissolve calcified bone; long before dissolution occurs, sharp shards lacerate the mucosa or pass into narrower intestinal lumina, creating mechanical perforation or impaction.',
    vitalStats: [
      { label: 'Classification', value: 'Mechanical Surgical Hazard', tone: 'danger' },
      { label: 'Safe Cooked Amount', value: 'Zero Tolerance (Never Safe)', tone: 'danger' },
      { label: 'Primary Risk', value: 'GI Perforation & Septic Peritonitis', tone: 'danger' },
      { label: 'Emergency Protocol', value: 'NEVER Induce Vomiting', tone: 'danger' },
    ],
    timeline: [
      {
        phase: 'Stage 1: 0 to 2 Hours (Upper Digestive & Esophageal Hazard)',
        symptoms: [
          'Choking, gagging, pawing at the mouth, and extended neck',
          'Inability to swallow saliva, intense drooling, and regurgitation',
          'Coughing or distress if fragments lodge in the pharynx or esophagus',
        ],
      },
      {
        phase: 'Stage 2: 2 to 12 Hours (Gastric Lodging & Ulceration)',
        symptoms: [
          'Repeated unproductive retching or vomiting with flecks of fresh red blood',
          'Severe abdominal pain: hunching back, "prayer position", whining when touched',
          'Restlessness, refusal to lie down, and rapid shallow breathing',
        ],
      },
      {
        phase: 'Stage 3: 12 to 48 Hours (Perforation & Septic Peritonitis)',
        symptoms: [
          'Septic peritonitis: high fever or hypothermic shock, rigid board-like abdomen',
          'Hematochezia (bloody stool) or melena (black tarry stool)',
          'Complete inability to defecate (severe obstipation / fecal impaction)',
          'Septic circulatory shock, pale gums, collapse, and fatality without emergency surgery',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'DO NOT Induce Vomiting Under Any Circumstances',
        desc: 'Inducing vomiting causes razor-sharp bone shards to travel backward up the esophagus, risking catastrophic esophageal tearing and pneumothorax.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Feed "Cushioning Food" Under Veterinary Guidance',
        desc: 'Feed several slices of plain high-fiber white bread, canned pure pumpkin, or mashed potatoes to wrap around shards and cushion the stomach lining.',
        isUrgent: false,
      },
      {
        stepNumber: 3,
        title: 'Obtain Abdominal Radiographs (X-Rays) Immediately',
        desc: 'Because bones are radiopaque, emergency veterinary X-rays instantly reveal the exact location, size, and orientation of bone fragments.',
        isUrgent: true,
      },
      {
        stepNumber: 4,
        title: 'Monitor Closely for Signs of Perforation',
        desc: 'Watch for fever, vomiting, abdominal rigidity, or black tarry stools. If signs arise, immediate exploratory laparotomy is required.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Urgent Survey Abdominal Radiographs (2-View)',
        purpose: 'Pins down the exact anatomical position of bone fragments and detects pneumoperitoneum (free abdominal air indicating gut rupture).',
      },
      {
        name: 'Flexible Endoscopic Retrieval',
        purpose: 'Non-surgical retrieval of bones lodged in the esophagus or stomach using endoscopic grasping forceps while under general anesthesia.',
      },
      {
        name: 'Emergency Exploratory Laparotomy / Enterotomy',
        purpose: 'Surgical opening of the abdomen to extract obstructive bone clusters, resect perforated necrotic bowel, and perform peritoneal lavage.',
      },
      {
        name: 'Manual Enema De-Impaction Under Anesthesia',
        purpose: 'For bones packed solidly in the pelvic canal and colon, manual extraction with warm water/mineral oil enemas relieves life-threatening blockage.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Raw Non-Weight-Bearing Bones (Under Supervision)',
        why: 'Raw chicken necks, duck wings, or beef brisket bones retain natural moisture and collagen, chewing soft rather than splintering.',
      },
      {
        name: 'Certified Rubber Dental Chew Toys (KONG)',
        why: 'Satisfies natural chewing instincts with zero risk of gastrointestinal perforation or emergency surgery.',
      },
      {
        name: 'Collagen Chew Sticks / Beef Tendons',
        why: '100% digestible, long-lasting chews that soften completely with canine saliva.',
      },
    ],
    preventionRules: [
      'Dispose of chicken wing bones, rib bones, and T-bone scraps directly into outdoor, locking trash bins.',
      'Never leave Thanksgiving turkey carcasses or holiday roast pans unattended on kitchen counters.',
      'Inform dinner guests and family members that feeding cooked table bones is strictly prohibited.',
    ],
    faqs: [
      {
        q: 'Can canine stomach acid dissolve cooked bones?',
        a: 'Canine gastric acid is potent (pH 1.0–2.0), but it takes many hours to dissolve dense bone minerals. Long before the acid can dissolve a jagged bone fragment, peristalsis pushes the sharp shard against the stomach or intestinal lining, risking puncture.',
      },
      {
        q: 'My dog swallowed a cooked chicken bone 2 hours ago and seems fine—am I in the clear?',
        a: 'No. Bones often sit in the stomach for 12 to 24 hours before attempting to pass into the narrower duodenum or ileocecal valve. You must consult your vet for radiographs and monitor stool and behavior closely over the next 48 to 72 hours.',
      },
      {
        q: 'Are raw bones safer than cooked bones?',
        a: 'Yes, significantly. Raw bones contain natural moisture and flexible collagen fibers that bend and crush under canine teeth rather than shattering into shards. However, raw bones should still be size-appropriate and fed under direct supervision.',
      },
    ],
  },

  // 7. HIGH-FAT TRIMMINGS & BACON GREASE
  {
    slug: 'bacon-grease-fat-trimmings',
    name: 'High-Fat Trimmings & Bacon Grease',
    scientificName: 'Cooked Saturated Triglyceride Bolus',
    status: 'FEED_WITH_CAUTION',
    category: 'HARMFUL',
    badgeLabel: '⚠ HIGH RISK // ACUTE PANCREATITIS',
    riskSeverity: 'ACUTE EMERGENCY: Massive sudden fat concentrations trigger premature zymogen activation inside the pancreas, causing life-threatening acute pancreatitis.',
    primaryCompound: 'Oxidized Saturated Lipids, Nitrates & Sodium Chloride',
    targetOrgans: ['Exocrine Pancreas', 'Liver (Hepatic Lipidosis)', 'Gastrointestinal Mucosa'],
    toxicThresholdOrServing: 'Even 1–2 tablespoons of rendered grease or skin trimmings can precipitate acute pancreatitis in sensitive dogs.',
    onsetWindow: '2 to 24 hours post-ingestion',
    summary: 'Table scraps like bacon grease, fried chicken skin, ham fat trimmings, and rib drippings are a prime trigger for emergency veterinary admissions. The sudden influx of cooked, saturated lipids overwhelms the exocrine pancreas, triggering a cascade of auto-digestion, excruciating abdominal pain, and potential shock.',
    narrativeOverview: [
      'While dogs evolved to metabolize raw animal fats efficiently in balanced dietary ratios, a sudden large bolus of cooked, oxidized saturated fats behaves entirely differently in the digestive tract. Bacon grease and table fat trimmings trigger hyperlipidemia and overstimulate pancreatic enzyme secretion.',
      'Certain breeds—including Miniature Schnauzers, Yorkshire Terriers, Dachshunds, Cocker Spaniels, and Shetland Sheepdogs—possess genetic predispositions toward altered lipid metabolism and are exceptionally vulnerable to fulminant pancreatitis from minor fat scraps.',
      'Furthermore, bacon and cured meat scraps are heavily laden with sodium and chemical nitrates. Beyond the agonizing pain of acute pancreatitis, severe cases can trigger Systemic Inflammatory Response Syndrome (SIRS), acute kidney injury, and disseminated intravascular coagulation (DIC).',
    ],
    biochemicalMechanism: 'Normally, pancreatic digestive enzymes (trypsinogen, chymotrypsinogen, proelastase) are stored in inactive zymogen granules and only activate upon reaching the duodenal brush border. Massive dietary fat challenges induce high circulating cholecystokinin (CCK) and intracellular calcium overload in pancreatic acinar cells. This causes premature co-localization of zymogen granules with lysosomal hydrolases (cathepsin B), activating trypsinogen inside the pancreas itself. Active trypsin autodigests surrounding pancreatic parenchyma, peripancreatic fat, and vascular walls, releasing inflammatory cytokines into the systemic circulation.',
    vitalStats: [
      { label: 'Primary Pathology', value: 'Acute Necrotizing Pancreatitis', tone: 'danger' },
      { label: 'High-Risk Breeds', value: 'Mini Schnauzers, Yorkies, Dachshunds', tone: 'warning' },
      { label: 'Common Trigger', value: 'Holiday Table Scraps & Bacon Skillets', tone: 'warning' },
      { label: 'Clinical Hallmark', value: '"Prayer Position" & Severe Abdominal Pain', tone: 'danger' },
    ],
    timeline: [
      {
        phase: 'Stage 1: 2 to 6 Hours (Nausea & Early Discomfort)',
        symptoms: [
          'Constant lip-smacking, excessive drooling, and swallowing',
          'Reluctance to move, restlessness, and refusal of food',
          'Soft, greasy, yellowish stools',
        ],
      },
      {
        phase: 'Stage 2: 6 to 24 Hours (Excruciating Abdominal Crisis)',
        symptoms: [
          'Severe recurrent vomiting (often yellow bile or frothy mucous)',
          'Distinctive "Prayer Position": front paws stretched forward on the ground with rear end elevated to relieve pancreatic pressure',
          'Tense, painful, guarded abdomen that flinches upon touch',
          'Watery or bloody diarrhea',
        ],
      },
      {
        phase: 'Stage 3: 24 to 72 Hours (Systemic Inflammatory Crisis)',
        symptoms: [
          'Severe dehydration, hypovolemic shock, and weak pulses',
          'Fever or subnormal body temperature with pale tacky gums',
          'Systemic Inflammatory Response Syndrome (SIRS) and potential multi-organ failure',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Withhold All Food and High-Fat Treats',
        desc: 'Continuing to feed any fats stimulates further pancreatic enzyme secretion and worsens auto-digestion.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Check for the "Prayer Position"',
        desc: 'If your dog lowers their chest to the floor while keeping hips elevated, they are signaling intense upper abdominal agony.',
        isUrgent: true,
      },
      {
        stepNumber: 3,
        title: 'Veterinary Evaluation & cPL Test',
        desc: 'Have the vet perform a Canine Pancreas-Specific Lipase (Spec cPL) blood test and abdominal ultrasound.',
        isUrgent: true,
      },
      {
        stepNumber: 4,
        title: 'Hospitalization for Aggressive IV Fluids',
        desc: 'Pancreatitis requires in-hospital intravenous fluid therapy to restore microvascular pancreatic perfusion and prevent necrosis.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Aggressive Crystalloid IV Fluid Therapy',
        purpose: 'Restores vital microcirculatory blood flow to the ischemic, inflamed pancreatic tissue and corrects severe electrolyte derangements.',
      },
      {
        name: 'Multimodal Pain Management',
        purpose: 'Pancreatitis is intensely painful; injectable opioids (buprenorphine, fentanyl, or methadone) are vital to reduce pain and neurogenic shock.',
      },
      {
        name: 'Anti-Emetic & Gastroprotectant Therapy',
        purpose: 'Injectable maropitant (Cerenia) and ondansetron control intractable vomiting and visceral pain.',
      },
      {
        name: 'Early Enteral Nutrition (Ultra Low-Fat Diet)',
        purpose: 'Once vomiting is controlled, early feeding of an ultra-low-fat diet (<10% fat DM) nourishes the gut barrier and accelerates recovery.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Steamed Skinless Chicken Breast',
        why: 'Lean, easily digestible protein with virtually zero fat content for dogs recovering from upset stomachs.',
      },
      {
        name: 'Poached Cod or Haddock (White Fish)',
        why: 'Ultra-low-fat white fish provides high biological value protein without stressing the exocrine pancreas.',
      },
      {
        name: 'Canned 100% Pure Pumpkin Puree',
        why: 'Soothing prebiotic soluble fiber that supports gut motility with zero fat.',
      },
    ],
    preventionRules: [
      'Never pour bacon grease, hamburger drippings, or roasting pan juices over dog kibble.',
      'Trim all visible excess fat from meats before cooking, and dispose of scraps in sealed outdoor trash.',
      'Instruct holiday guests that feeding table scraps from turkey, ham, or prime rib is strictly prohibited.',
    ],
    faqs: [
      {
        q: 'Can a dog have just one piece of bacon?',
        a: 'While a large, healthy dog might occasionally tolerate a single piece of bacon with mild stomach upset, predisposed breeds or older dogs can develop fulminant pancreatitis from a single slice. The high sodium, nitrates, and saturated fat make bacon an unnecessary hazard.',
      },
      {
        q: 'What is the "prayer position" in dogs and why is it serious?',
        a: 'The prayer position (downward dog pose with front elbows on the floor and rear end up in the air) is a classic canine postural sign of severe cranial abdominal pain, most commonly caused by acute pancreatitis or foreign body obstruction. It requires emergency veterinary care.',
      },
      {
        q: 'Can pancreatitis become a chronic lifelong condition?',
        a: 'Yes. Once a dog suffers an episode of acute pancreatitis, the pancreas can develop fibrous scarring, predisposing the dog to recurrent chronic flare-ups, exocrine pancreatic insufficiency (EPI), or secondary diabetes mellitus.',
      },
    ],
  },

  // 8. PUMPKIN
  {
    slug: 'pumpkin',
    name: 'Pumpkin (Pure Puree)',
    scientificName: 'Cucurbita Pepo (Soluble Pectin Fiber)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'VEGETABLE',
    badgeLabel: '✓ CLINICAL SUPERFOOD // DIGESTIVE REMEDY',
    riskSeverity: 'SAFE & HIGHLY BENEFICIAL: The ultimate veterinary natural regulator for canine bowel motility, soothes diarrhea and relieves constipation.',
    primaryCompound: 'Soluble Pectin Fiber, Beta-Carotene & Potassium',
    targetOrgans: ['Colon Mucosa', 'Enterocytes', 'Microbiome & Microbiota', 'Anal Glands'],
    toxicThresholdOrServing: '1–2 tablespoons per 20 lbs body weight mixed into daily food. Ensure 100% pure pumpkin, NOT pie mix.',
    onsetWindow: 'Digestive stabilization within 12 to 24 hours',
    summary: 'Pure canned or steamed pumpkin is considered the gold-standard natural digestive aid in clinical canine nutrition. Its unique balance of soluble and insoluble prebiotic fiber regulates bowel motility in both diarrhea and constipation, while nourishing the colon with short-chain fatty acids.',
    narrativeOverview: [
      'Pumpkin is nature’s dual-action digestive stabilizer. When a dog suffers from loose watery diarrhea, the high soluble pectin fiber in pumpkin absorbs excess lumen water like a sponge, slowing transit time and restoring firm, formed stool consistency.',
      'Conversely, when a dog is mildly constipated, the moisture and gentle insoluble fiber in pumpkin lubricate the bowel, drawing hydration into the colon and easing bowel evacuation. It also provides bulk that naturally expresses the anal sacs during defecation.',
      'CRITICAL CAUTION: You must always feed 100% pure pumpkin puree (or plain home-steamed pumpkin). Never feed canned pumpkin pie mix, which contains added refined sugars, nutmeg, allspice, and cloves—all of which are toxic to dogs.',
    ],
    biochemicalMechanism: 'Pumpkin is rich in soluble pectin and prebiotic oligosaccharides. As pectin traverses the canine small intestine unhydrolyzed, it forms a soothing gel-like matrix that coats the intestinal mucosa. In the large colon, beneficial commensal bacteria (Bifidobacteria and Bacteroides) ferment these fibers into Short-Chain Fatty Acids (SCFAs), predominantly butyrate, propionate, and acetate. Butyrate acts as the primary cellular fuel for colonocytes, reducing mucosal inflammation, tightening intercellular junctions, and lowering luminal pH to inhibit pathogen proliferation.',
    vitalStats: [
      { label: 'Nutritional Category', value: 'Prebiotic Functional Vegetable', tone: 'safe' },
      { label: 'Recommended Dose', value: '1–2 tbsp per 20 lbs Body Weight', tone: 'safe' },
      { label: 'Primary Benefit', value: 'Firms Diarrhea & Eases Constipation', tone: 'safe' },
      { label: 'Strict Warning', value: 'Never Use Pumpkin Pie Mix (Toxic Spices)', tone: 'warning' },
    ],
    timeline: [
      {
        phase: 'Phase 1: 0 to 6 Hours (Mucosal Soothing)',
        symptoms: [
          'Pectin forms a protective lubricating gel coating irritated mucosal lining',
          'Reduces stomach rumbling, gas, and intestinal cramping',
          'Provides easily digestible hydration and cellular potassium',
        ],
      },
      {
        phase: 'Phase 2: 12 to 24 Hours (Stool Normalization)',
        symptoms: [
          'Soluble fiber absorbs excess water, noticeably firming loose watery stools',
          'Helps constipated dogs pass stool comfortably without painful straining',
          'Firm stools provide mechanical pressure to naturally express anal glands',
        ],
      },
      {
        phase: 'Phase 3: 3 to 7 Days (Microbiome Rebalance)',
        symptoms: [
          'Prebiotic fermentation enriches colonies of beneficial gut flora',
          'Enhanced production of butyrate short-chain fatty acids protects colon health',
          'Supports healthy weight management by promoting satiety without excess calories',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Verify Can Label is 100% Pure Pumpkin',
        desc: 'Ensure the single ingredient listed is "Pumpkin". If the label says "Pumpkin Pie Mix" or lists sugar, cinnamon, or nutmeg, do NOT feed it.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Start with Appropriate Dose',
        desc: 'Toy dogs (under 10 lbs): 1 teaspoon; Medium dogs (20–40 lbs): 1 tablespoon; Large dogs (50+ lbs): 2 tablespoons mixed into meals.',
        isUrgent: false,
      },
      {
        stepNumber: 3,
        title: 'Monitor Stool Consistency for 24 Hours',
        desc: 'If diarrhea persists beyond 48 hours or contains dark blood, schedule a veterinary visit with a fresh fecal sample.',
        isUrgent: false,
      },
      {
        stepNumber: 4,
        title: 'Freeze Surplus in Ice Cube Trays',
        desc: 'Freeze leftover canned pumpkin into portioned silicone molds for convenient single-serving daily toppers.',
        isUrgent: false,
      },
    ],
    vetTreatments: [
      {
        name: 'Dietary Fiber Titration',
        purpose: 'Vets utilize pure pumpkin to adjust total dietary fiber between 3% and 7% on a dry-matter basis for colitis and irritable bowel cases.',
      },
      {
        name: 'Weight Loss Bulking Strategy',
        purpose: 'Replaces 10–15% of high-calorie kibble with pumpkin to maintain stomach fullness and prevent begging during caloric restriction.',
      },
      {
        name: 'Post-Antibiotic Gut Rehabilitation',
        purpose: 'Provides prebiotic substrates alongside veterinary probiotics to restore microflora depleted by antimicrobial regimens.',
      },
      {
        name: 'Anal Sac Impaction Prevention',
        purpose: 'Increases stool diameter and firmness to apply natural mechanical pressure on anal gland ducts during defecation.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Steamed Sweet Potato Puree',
        why: 'Excellent source of complex carbs, vitamin A, and gentle digestive fiber.',
      },
      {
        name: 'Steamed Butternut Squash',
        why: 'Close botanical relative to pumpkin with comparable pectin fiber and soothing digestive properties.',
      },
      {
        name: 'Psyllium Husk Powder (Vet-Dosed)',
        why: 'Concentrated source of soluble fiber for severe chronic loose stool under veterinary supervision.',
      },
    ],
    preventionRules: [
      'Always inspect canned pumpkin labels to ensure zero spices, sugar, or preservatives are present.',
      'Do not overfeed: excess pumpkin (beyond 3–4 tablespoons for large dogs) can paradoxically cause loose stools due to fiber overload.',
      'Discard open refrigerated cans after 5 to 7 days or freeze portions to prevent mold formation.',
    ],
    faqs: [
      {
        q: 'Can pumpkin cure both diarrhea and constipation in dogs?',
        a: 'Yes. Pumpkin contains balanced soluble and insoluble fiber. Soluble fiber absorbs excess water to firm loose stools during diarrhea, while insoluble fiber adds gentle bulk and moisture to lubricate the colon during constipation.',
      },
      {
        q: 'Is canned pumpkin as good as fresh pumpkin for dogs?',
        a: 'Canned pure pumpkin is actually superior to fresh pumpkin in nutrient concentration. The commercial canning process evaporates water, packing a much denser concentration of fiber, potassium, and beta-carotene per tablespoon than watery fresh pumpkin.',
      },
      {
        q: 'Can puppies eat pumpkin?',
        a: 'Yes, puppies can safely eat small amounts of 100% pure pumpkin (1/2 to 1 teaspoon) to soothe digestive transitions when moving from milk to solid food or switching kibble formulas.',
      },
    ],
  },

  // 9. WILD ALASKAN SALMON
  {
    slug: 'wild-alaskan-salmon',
    name: 'Wild Alaskan Salmon',
    scientificName: 'Oncorhynchus Spp. (EPA & DHA Omega-3 Fatty Acids)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'PROTEIN',
    badgeLabel: '✓ CLINICAL SUPERFOOD // OMEGA-3 POWERHOUSE',
    riskSeverity: 'SAFE & HIGHLY BENEFICIAL: The gold-standard dietary source of bioavailable EPA and DHA Omega-3s. Soothes itchy skin, reduces joint inflammation, and protects heart health.',
    primaryCompound: 'EPA & DHA Omega-3s, Astaxanthin, Complete Amino Acids',
    targetOrgans: ['Epidermal Skin Barrier', 'Synovial Joints', 'Cardiovascular System', 'Brain & Retina'],
    toxicThresholdOrServing: '1 oz per 10–15 lbs body weight 2–3x weekly, or 1 tsp pure salmon oil per 20 lbs daily. ALWAYS COOK THOROUGHLY.',
    onsetWindow: 'Noticeable coat shine in 2–3 weeks; anti-inflammatory joint benefits in 4–6 weeks',
    summary: 'Wild Alaskan Salmon is one of the most nutritionally complete functional foods you can add to a dog’s bowl. Packed with long-chain marine Omega-3 fatty acids (EPA and DHA), it dramatically reduces inflammatory cytokines, calms allergic skin conditions, lubricates arthritic joints, and enhances cognitive vitality.',
    narrativeOverview: [
      'Unlike plant-based omega-3s like flaxseed (which contain ALA that dogs convert to EPA/DHA at a dismal rate below 5%), wild salmon provides preformed, directly bioavailable EPA and DHA that integrate into cellular membranes immediately.',
      'Wild salmon is also naturally rich in astaxanthin, one of nature’s most potent carotenoid antioxidants, which gives salmon its deep red hue and protects canine cardiovascular tissue from oxidative stress.',
      'CRITICAL SAFETY WARNING: NEVER feed raw or undercooked wild Pacific salmon. Raw Pacific salmonids can carry the parasite Nanophyetus salmincola infected with the bacterium Neorickettsia helminthoeca, which causes "Salmon Poisoning Disease"—a severe, potentially fatal infection. Always cook salmon thoroughly to an internal temperature of 145°F (63°C), or feed certified commercially flash-frozen fish.',
    ],
    biochemicalMechanism: 'Dietary EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) incorporate directly into the phospholipid bilayer of canine cell membranes, replacing inflammatory arachidonic acid (AA). When immune cells undergo stimulation, phospholipase A2 cleaves EPA instead of AA, generating series-3 prostaglandins (PGE3) and series-5 leukotrienes (LTB5), which possess negligible inflammatory activity compared to pro-inflammatory series-2 and series-4 counterparts. DHA simultaneously crosses the blood-brain barrier, enriching neuronal synaptic membranes and reducing retinal oxidative degeneration.',
    vitalStats: [
      { label: 'Nutritional Category', value: 'High Biological Value Marine Protein', tone: 'safe' },
      { label: 'Active Compound', value: 'Preformed Marine EPA & DHA', tone: 'safe' },
      { label: 'Critical Rule', value: 'Always Cook Thoroughly (>145°F)', tone: 'warning' },
      { label: 'Target Benefit', value: 'Anti-Inflammatory Joint & Skin Health', tone: 'safe' },
    ],
    timeline: [
      {
        phase: 'Phase 1: Weeks 1 to 2 (Cellular Incorporation)',
        symptoms: [
          'EPA and DHA begin replacing arachidonic acid in epidermal cell membranes',
          'Noticeable reduction in dry flaky dander and coat shedding',
          'Enhanced palatability and enthusiastic meal consumption',
        ],
      },
      {
        phase: 'Phase 2: Weeks 3 to 4 (Skin & Coat Transformation)',
        symptoms: [
          'Significant reduction in allergic itching, paw licking, and hot spot redness',
          'Development of a deep, glossy, weather-resistant coat luster',
          'Improved moisture retention in cracked paw pads',
        ],
      },
      {
        phase: 'Phase 3: Weeks 6 to 8 (Joint & Systemic Anti-Inflammation)',
        symptoms: [
          'Decreased morning stiffness and enhanced mobility in arthritic senior dogs',
          'Cardiovascular protection through modulated arterial blood pressure',
          'Support for cognitive clarity and memory retention in aging canines',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Always Cook Thoroughly',
        desc: 'Bake, steam, or poach fresh salmon to an internal temperature of at least 145°F (63°C) to eliminate any potential Neorickettsia parasites.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Carefully Remove All Pin Bones',
        desc: 'Flake the cooked fish with a fork to remove any small bones that could lodge in the throat or gums.',
        isUrgent: false,
      },
      {
        stepNumber: 3,
        title: 'Never Add Onions, Garlic, or Salt',
        desc: 'Cook plain without butter, oils, garlic rubs, or heavy human seasonings.',
        isUrgent: true,
      },
      {
        stepNumber: 4,
        title: 'Watch for Salmon Poisoning if Dog Ate Raw Wild Fish',
        desc: 'If your dog scavenged raw wild river salmon, watch for high fever, vomiting, and swollen lymph nodes, and seek emergency antibiotics (doxycycline) immediately.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Clinical Omega-3 Titration (Allergy & Joint Protocols)',
        purpose: 'Vets calculate EPA+DHA targets at 100–150 mg per kg of body weight to treat canine atopic dermatitis and osteoarthritis.',
      },
      {
        name: 'Renal Protective Therapy',
        purpose: 'Omega-3 fatty acids lower glomerular capillary pressure and reduce proteinuria in dogs with chronic kidney disease.',
      },
      {
        name: 'Cardiac Cachexia Mitigation',
        purpose: 'Suppresses tumor necrosis factor (TNF-alpha) and IL-1 to prevent muscle wasting in dogs with congestive heart failure.',
      },
      {
        name: 'Doxycycline Protocol for Raw Salmon Ingestion',
        purpose: 'If raw Pacific salmon is consumed and Salmon Poisoning Disease develops, prompt oral doxycycline curative therapy saves lives.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Canned Wild Sardines in Water (No Salt Added)',
        why: 'Small, short-lived fish packed with omega-3s and calcium-rich soft bones with virtually zero heavy metal accumulation.',
      },
      {
        name: 'Wild Alaskan Salmon Oil Pump',
        why: 'Cold-pressed pure oil for convenient, exact daily dosing over meals without cooking.',
      },
      {
        name: 'Green Lipped Mussel Powder',
        why: 'Potent marine source of ETA omega-3s and glycosaminoglycans for targeted joint relief.',
      },
    ],
    preventionRules: [
      'Never allow dogs to scavenge raw dead fish on riverbanks or hiking trails in the Pacific Northwest.',
      'Avoid farmed Atlantic salmon when possible; wild Alaskan salmon has significantly higher omega-3 levels and lower polychlorinated biphenyl (PCB) residues.',
      'Check canned salmon labels: choose only products packed in pure spring water with zero added sodium.',
    ],
    faqs: [
      {
        q: 'Can dogs eat canned salmon from the grocery store?',
        a: 'Yes, canned salmon is safe and convenient provided it is wild-caught, packed in plain water (not oil), and contains zero added salt or seasonings. The soft bones in canned salmon are pressure-cooked and crush safely into beneficial calcium.',
      },
      {
        q: 'What is Salmon Poisoning Disease in dogs?',
        a: 'It is a life-threatening infection caused by the rickettsial organism Neorickettsia helminthoeca carried by a small intestinal fluke in raw wild Pacific salmonids. Symptoms include fever up to 107°F, vomiting, and lymphadenopathy. It is fatal in 90% of untreated cases but easily cured with antibiotics if caught early. Cooking salmon completely eliminates this risk.',
      },
      {
        q: 'Can salmon cause food allergies in dogs?',
        a: 'Salmon is considered a novel, low-allergen protein compared to common triggers like chicken and beef. However, dogs can develop allergies to any protein source. Introduce it in small portions if your dog has an extensive allergy history.',
      },
    ],
  },

  // 10. WILD BLUEBERRIES
  {
    slug: 'wild-blueberries',
    name: 'Wild Blueberries',
    scientificName: 'Vaccinium Angustifolium (Anthocyanin Polyphenols)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'FRUIT',
    badgeLabel: '✓ CLINICAL SUPERFOOD // COGNITIVE SHIELD',
    riskSeverity: 'SAFE & HIGHLY BENEFICIAL: Potent cellular antioxidant rich in anthocyanins that cross the blood-brain barrier to protect cognitive function in aging dogs.',
    primaryCompound: 'Anthocyanins, Pterostilbene, Resveratrol, Polyphenols',
    targetOrgans: ['Brain (Cerebral Cortex)', 'Retina & Optic Nerve', 'Vascular Endothelium', 'Cellular DNA'],
    toxicThresholdOrServing: '5–10 berries daily for small dogs; 15–25 daily for large dogs. Serve fresh or frozen as low-calorie rewards.',
    onsetWindow: 'Immediate antioxidant bioavailability; long-term neuroprotection across lifetime feeding',
    summary: 'Wild blueberries are hailed by veterinary nutritionists as the ultimate neuroprotective fruit for dogs. Their deep blue-purple pigment reflects an extraordinary concentration of anthocyanins and polyphenols capable of crossing the blood-brain barrier to neutralize free radicals, sharpen memory, and delay canine cognitive decline.',
    narrativeOverview: [
      'Wild blueberries (Vaccinium angustifolium) differ fundamentally from cultivated grocery store blueberries (highbush berries). Because wild lowbush blueberries evolved to survive harsh northern climates, they possess double the antioxidant capacity and significantly higher anthocyanin concentrations per gram.',
      'Groundbreaking veterinary clinical trials conducted in senior sled dogs and aging pet canines demonstrate that daily blueberry supplementation substantially improves task-learning ability, spatial memory retention, and agility.',
      'With virtually no fat, minimal glycemic impact, and high natural water content, blueberries serve as the ideal training treat for diabetic, overweight, or senior dogs who need high-value rewards without excess starch.',
    ],
    biochemicalMechanism: 'Wild blueberries contain potent flavonoid anthocyanins (including cyanidin, delphinidin, and malvidin glucosides) alongside pterostilbene. These small polyphenol molecules traverse the blood-brain barrier and localize within the hippocampus and cerebral cortex. There, they upregulate brain-derived neurotrophic factor (BDNF), enhance synaptic plasticity, and scavenge reactive oxygen and nitrogen species (ROS/RNS), protecting neuronal membranes from lipid peroxidation.',
    vitalStats: [
      { label: 'Nutritional Category', value: 'Antioxidant Functional Fruit', tone: 'safe' },
      { label: 'Active Principle', value: 'Anthocyanins & Polyphenols', tone: 'safe' },
      { label: 'Caloric Impact', value: 'Ultra Low (~1 kcal per berry)', tone: 'safe' },
      { label: 'Primary Benefit', value: 'Protects Aging Brain & Cellular Health', tone: 'safe' },
    ],
    timeline: [
      {
        phase: 'Phase 1: Immediate Post-Ingestion (0 to 6 Hours)',
        symptoms: [
          'High cellular antioxidant absorption into the bloodstream',
          'Zero insulin spike due to low glycemic index and dietary fiber',
          'Crunchy, refreshing training motivation for dogs of all sizes',
        ],
      },
      {
        phase: 'Phase 2: Weeks 2 to 4 (Cellular Resilience)',
        symptoms: [
          'Systemic reduction in oxidative stress markers following strenuous exercise',
          'Vascular endothelial protection and optimized capillary blood flow',
          'Enhanced immune response during seasonal environmental changes',
        ],
      },
      {
        phase: 'Phase 3: Months 2 to 6+ (Cognitive Longevity)',
        symptoms: [
          'Reduced risk of Canine Cognitive Dysfunction (doggie dementia) symptoms in seniors',
          'Preserved spatial awareness, nighttime sleep cycles, and house-training habits',
          'Protection of retinal photoreceptors against degenerative eye aging',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Choose Wild Frozen or Fresh Organic Berries',
        desc: 'Check freezer section for "Wild" blueberries; their smaller size and darker skin pack twice the polyphenol payload of giant cultivated berries.',
        isUrgent: false,
      },
      {
        stepNumber: 2,
        title: 'Rinse Thoroughly Before Serving',
        desc: 'Wash fresh berries to remove any lingering surface pesticide residues.',
        isUrgent: false,
      },
      {
        stepNumber: 3,
        title: 'Serve as Treats or Food Toppers',
        desc: 'Scatter over daily meals or freeze into silicone molds with bone broth for refreshing summer hydration.',
        isUrgent: false,
      },
      {
        stepNumber: 4,
        title: 'Never Feed Baked Human Blueberry Muffins',
        desc: 'Human muffins are loaded with butter, sugar, and potentially deadly xylitol sweetener.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Canine Cognitive Dysfunction (CCD) Nutritional Regimens',
        purpose: 'Vets incorporate concentrated blueberry polyphenols into senior diets to mitigate disorientation, vocalization, and sleep disturbances.',
      },
      {
        name: 'Athletic Recovery in Agility & Working Dogs',
        purpose: 'Administered to sporting and working canines post-competition to reduce muscle damage markers (creatine kinase) and oxidative fatigue.',
      },
      {
        name: 'Low-Calorie Diabetic Treat Strategy',
        purpose: 'Used as safe reward treats for diabetic or pancreatitis-prone dogs requiring strict low-glycemic, zero-fat rewards.',
      },
      {
        name: 'Urinary Tract Health Maintenance',
        purpose: 'Proanthocyanidins in blueberries help discourage uropathogenic E. coli bacteria from adhering to the bladder wall.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Fresh Cranberries (Unsweetened)',
        why: 'Rich in proanthocyanidins that support bladder and urinary tract health.',
      },
      {
        name: 'Blackberries & Raspberries (In Moderation)',
        why: 'Loaded with polyphenols and ellagic acid (keep portions modest due to trace natural xylitol in raspberries).',
      },
      {
        name: 'Seedless Watermelon Chunks',
        why: 'Ultra-hydrating fruit packed with lycopene and vitamin A.',
      },
    ],
    preventionRules: [
      'Do not feed dried sweetened blueberries from human trail mixes: they almost always contain added refined cane sugars and oils.',
      'Supervise toy breeds with frozen large cultivated berries to prevent minor choking; crush or mash them slightly before serving.',
      'Introduce gradually: sudden excessive berry intake can cause mild self-limiting purple-tinged loose stools from fruit sugars.',
    ],
    faqs: [
      {
        q: 'Can dogs choke on frozen blueberries?',
        a: 'For toy breeds (like Chihuahuas or Yorkies), large frozen cultivated blueberries can pose a minor choking hazard if swallowed whole. Either thaw them, mash them with a fork, or choose naturally smaller wild blueberries.',
      },
      {
        q: 'How many blueberries can my dog eat each day?',
        a: 'As a general guideline: small dogs (under 15 lbs) should receive 3 to 6 berries daily; medium dogs (20–40 lbs) can enjoy 8 to 12 berries; large dogs (50+ lbs) can have 15 to 25 berries without digestive upset.',
      },
      {
        q: 'Why are wild blueberries better than regular blueberries?',
        a: 'Wild blueberries grow on low bushes in harsh environments, forcing the plant to produce much higher concentrations of protective anthocyanins. They contain roughly 33% more anthocyanins and double the total antioxidant capacity of standard cultivated highbush berries.',
      },
    ],
  },

  // 11. RAW GREEN TRIPE
  {
    slug: 'raw-green-tripe',
    name: 'Raw Unbleached Green Tripe',
    scientificName: 'Untreated Ruminant Stomach Lining (Rumen/Reticulum)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'PROTEIN',
    badgeLabel: '✓ CLINICAL SUPERFOOD // MICROBIOME RESTORATIVE',
    riskSeverity: 'SAFE & HIGHLY BENEFICIAL: The holy grail of canine microbiome nutrition. Delivers live Lactobacillus probiotics, digestive enzymes, and a perfect 1:1 Calcium-to-Phosphorus ratio.',
    primaryCompound: 'Lactobacillus Acidophilus, Digestive Enzymes, 1:1 Ca:P Ratio',
    targetOrgans: ['Gastrointestinal Microbiome', 'Small Intestine Brush Border', 'Immune System (GALT)'],
    toxicThresholdOrServing: '10% to 15% of daily meal portion. MUST BE RAW AND UNBLEACHED. Never cook as heat kills beneficial enzymes.',
    onsetWindow: 'Immediate palatability spike; digestive stool improvement within 24 to 48 hours',
    summary: 'Raw unbleached green tripe is widely regarded as one of the most powerful functional superfoods on the planet for dogs. As the untreated stomach lining of grass-fed ruminants, it retains natural living digestive enzymes, trillions of beneficial probiotics, and an ideal mineral profile.',
    narrativeOverview: [
      'Green tripe does not refer to the color green; it denotes "raw and untreated". Grocery store tripe sold for human culinary use is chemically washed and bleached with chlorine, stripping all beneficial enzymes and probiotics. Dogs must exclusively eat unbleached green tripe sourced from raw pet food suppliers.',
      'Green tripe contains partially digested, fermented grasses and herbs packed with gastric enzymes (pepsin, amylase, lipase) and living strains of Lactobacillus acidophilus. When added to a dog’s bowl, these living components ease the digestive burden on the pancreas and seed the microbiome.',
      'Green tripe possesses a pungent, barnyard aroma that human owners find intense, but dogs find completely irresistible. It is a legendary solution for finicky eaters, recovering post-surgical patients, and dogs suffering from chronic Irritable Bowel Disease (IBD).',
    ],
    biochemicalMechanism: 'The untreated rumen and reticulum tissues host an active biofilm of beneficial commensal microorganisms (predominantly lactic acid bacteria) and residual digestive enzymes. When consumed raw, these enzymes facilitate macromolecular breakdown in the canine stomach, reducing the secretory demand on endogenous gastric and pancreatic glands. Furthermore, green tripe exhibits a naturally harmonious 1:1 to 1:1.2 Calcium-to-Phosphorus ratio and provides optimal ratios of linoleic and linolenic essential fatty acids alongside prebiotic oligosaccharides that reinforce the gut barrier.',
    vitalStats: [
      { label: 'Nutritional Category', value: 'Living Fermented Super-Protein', tone: 'safe' },
      { label: 'Active Compounds', value: 'Live CFUs, Gastric Enzymes, 1:1 Ca:P', tone: 'safe' },
      { label: 'Strict Rule', value: 'Never Cook (Heat Kills Living Enzymes)', tone: 'warning' },
      { label: 'Primary Benefit', value: 'Rehabilitates Damaged Gut Microbiome', tone: 'safe' },
    ],
    timeline: [
      {
        phase: 'Phase 1: Immediate Mealtime (Palatability & Appetite)',
        symptoms: [
          'Immediate voracious meal consumption even in sick, inappetent, or elderly dogs',
          'Enzyme pre-digestion assists stomach acid in breaking down meal proteins',
          'Naturally excites salivary and digestive secretions',
        ],
      },
      {
        phase: 'Phase 2: 24 to 48 Hours (Digestive Harmony)',
        symptoms: [
          'Significant reduction in stomach gurgling, painful gas, and soft stools',
          'Firm, smaller, well-formed stools with reduced waste odor',
          'Soothing of inflamed intestinal mucosa in dogs prone to chronic loose stool',
        ],
      },
      {
        phase: 'Phase 3: Weeks 2 to 4 (Microbiome & Coat Transformation)',
        symptoms: [
          'Robust colonization of beneficial gut microflora across the colon',
          'Improved nutrient assimilation reflected in increased energy and muscle tone',
          'Enhanced immune resilience and elimination of yeast overgrowth in paws and ears',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Source Only Certified Raw Pet-Grade Green Tripe',
        desc: 'Never purchase bleached white tripe from human butcher shops; white tripe has been scalped with chemical bleach and holds zero enzyme value.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Serve Strictly Raw or Freeze-Dried',
        desc: 'Never boil, microwave, or cook green tripe. Cooking denatures living digestive enzymes and incinerates beneficial probiotic bacteria.',
        isUrgent: true,
      },
      {
        stepNumber: 3,
        title: 'Thaw Safely in Refrigerator',
        desc: 'Thaw frozen chubs in the refrigerator and use within 3 to 4 days; keep in airtight containers to contain the potent natural aroma.',
        isUrgent: false,
      },
      {
        stepNumber: 4,
        title: 'Introduce Gradually',
        desc: 'Begin with 1 teaspoon to 1 tablespoon per day to allow the canine microbiome to adjust to the dense concentration of active digestive enzymes.',
        isUrgent: false,
      },
    ],
    vetTreatments: [
      {
        name: 'Anorexia & Post-Surgical Nutritional Recovery',
        purpose: 'Vets utilize raw green tripe as a high-value meal topper to entice dogs recovering from surgery, chemotherapy, or severe illness to eat voluntarily.',
      },
      {
        name: 'Chronic Enteropathy & Leaky Gut Protocol',
        purpose: 'Living lactic acid bacteria and ideal Ca:P balance help rebuild the mucosal layer in dogs refractory to traditional kibble diets.',
      },
      {
        name: 'Calcium-Phosphorus Balance in Home Formulations',
        purpose: 'Used as an ideal balancing meat in raw BARF recipes without requiring heavy calcium supplementation.',
      },
      {
        name: 'Natural Dental Prophylaxis',
        purpose: 'The tough, rubbery, fibrous texture of whole raw green tripe acts as natural dental floss, scraping tartar from premolars.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Freeze-Dried Raw Green Tripe Topper',
        why: 'Delivers the enzyme and probiotic benefits with significantly reduced mess and manageable odor for household owners.',
      },
      {
        name: 'Raw Fermented Goat Milk / Kefir',
        why: 'Another exceptional living source of trillions of active probiotic CFUs and enzymes.',
      },
      {
        name: 'High-Potency Veterinary Digestive Enzymes',
        why: 'Plant- or porcine-derived enzyme powder to assist pancreatic enzyme insufficiency.',
      },
    ],
    preventionRules: [
      'Store in dedicated sealed glass or heavy plastic containers—the potent scent can permeate other open refrigerator foods.',
      'Practice good raw hygiene: wash food prep surfaces, bowls, and hands thoroughly after handling.',
      'Do not feed as 100% of the entire diet; green tripe is a foundational meal topper or ingredient (10–20% of meal weight) and needs to be fed alongside balanced proteins.',
    ],
    faqs: [
      {
        q: 'Why does raw green tripe smell so terrible to humans?',
        a: 'Green tripe is the unwashed stomach lining of cows, sheep, or goats. Its pungent aroma comes from partially digested, fermented grasses and rumen juices. While humans find it intensely pungent, the scent triggers deep primal predatory feeding instincts in canines.',
      },
      {
        q: 'Can I feed green tripe to a dog with pancreatitis?',
        a: 'Green tripe contains moderate fat levels (approx. 7–10% on an as-fed basis). For dogs with acute active pancreatitis, all fat must be severely restricted. Once fully recovered, freeze-dried or lean beef tripe can sometimes be reintroduced under veterinary guidance.',
      },
      {
        q: 'Can kibble-fed dogs eat raw green tripe?',
        a: 'Yes! You do not need to feed a 100% raw diet to unlock the benefits of green tripe. Adding just 1–2 spoonfuls of raw or freeze-dried green tripe to commercial dry kibble provides living enzymes and probiotics that kibble heat extrusion destroyed.',
      },
    ],
  },

  // 12. COLLAGEN BONE BROTH
  {
    slug: 'bone-broth',
    name: 'Collagen Bone Broth',
    scientificName: 'Slow-Simmered Hydrolyzed Collagen Elixir',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'SUPPLEMENT',
    badgeLabel: '✓ CLINICAL SUPERFOOD // JOINT & GUT ELIXIR',
    riskSeverity: 'SAFE & HIGHLY BENEFICIAL: Packed with gelatin, type II collagen, glucosamine, chondroitin, and hyaluronic acid. Seals leaky gut junctions, hydrates, and lubricates stiff joints.',
    primaryCompound: 'Type II Collagen, Gelatin, Glycine, Proline, Glucosamine',
    targetOrgans: ['Intestinal Epithelial Tight Junctions', 'Joint Cartilage & Synovium', 'Liver (Phase II Detox)'],
    toxicThresholdOrServing: '1/4 cup per 20 lbs body weight daily poured warm over food. MUST BE PREPARED WITHOUT ONIONS, GARLIC, OR SALT.',
    onsetWindow: 'Immediate meal hydration; digestive soothing in 24 hours; joint mobility improvements in 3–4 weeks',
    summary: 'Slow-simmered collagen bone broth is an ancient, veterinarian-revered restorative elixir for dogs. By simmering marrow bones for 12 to 24 hours with an acid medium, dense collagen breaks down into gelatin, glutamine, and glycine, creating an easily absorbed broth that seals permeable gut linings and regenerates joint cartilage.',
    narrativeOverview: [
      'Commercial dry kibble diets contain only 8–10% moisture, leaving dogs in a perpetual state of low-grade dehydration. Warm bone broth is the premier solution: pouring broth over meals instantly rehydrates food to ancestral moisture levels (>70%), easing renal filtration workload and preventing bladder stones.',
      'Bone broth delivers an exceptional concentration of the non-essential amino acid glycine. Glycine is required by the liver for Phase II detoxification conjugation pathways, shielding canines from household chemicals, pharmaceuticals, and environmental toxins.',
      'CRITICAL SAFETY WARNING: NEVER purchase standard human commercial broths from supermarkets without checking the ingredients. Virtually all human broths are simmered with onions, garlic, and leeks—toxic compounds that induce red blood cell hemolysis in dogs—and contain excess sodium.',
    ],
    biochemicalMechanism: 'Prolonged low-temperature simmering hydrolyzes dense bone matrix collagen fibrils into water-soluble gelatin. Gelatin is composed of repeated Gly-Pro-Hyp amino acid tripeptides. In the gut lumen, gelatin binds water and adheres to mucosal surface glycoproteins, physically sealing micro-fissures in hyper-permeable intestinal junctions (attenuating "leaky gut syndrome"). Concurrently, glucosamine and chondroitin sulfate within the broth serve as direct glycosaminoglycan building blocks for chondrocytes, stimulating synovial hyaluronic acid synthesis and damping pro-inflammatory matrix metalloproteinases (MMPs) in arthritic joint capsules.',
    vitalStats: [
      { label: 'Nutritional Category', value: 'Functional Collagen Hydration Elixir', tone: 'safe' },
      { label: 'Key Bioactive Compounds', value: 'Gelatin, Glucosamine, Chondroitin, Glycine', tone: 'safe' },
      { label: 'Crucial Preparation Rule', value: 'Zero Onions, Zero Garlic, Zero Added Salt', tone: 'warning' },
      { label: 'Primary Therapeutic Target', value: 'Leaky Gut Seal & Synovial Joint Repair', tone: 'safe' },
    ],
    timeline: [
      {
        phase: 'Phase 1: Immediate Mealtime (Hydration & Gastric Comfort)',
        symptoms: [
          'Delivers high-moisture hydration directly into the stomach, relieving renal osmotic stress',
          'Warms and softens hard dry kibble, releasing natural aromas that stimulate appetite',
          'Gelatin coats the gastric mucosa, soothing gastritis and nausea',
        ],
      },
      {
        phase: 'Phase 2: 24 to 72 Hours (Intestinal Barrier Support)',
        symptoms: [
          'Glutamine and glycine support enterocyte cellular renewal across the small intestine',
          'Noticeable reduction in digestive gas, bloating, and food intolerances',
          'Promotes firm, healthy, regular bowel movements',
        ],
      },
      {
        phase: 'Phase 3: 3 to 6 Weeks (Joint & Systemic Mobility)',
        symptoms: [
          'Chondroitin and glucosamine replenish articular cartilage fluid reserves',
          'Eases stiffness upon rising in senior dogs with hip dysplasia or arthritis',
          'Supports hepatic Phase II liver detoxification and resilient skin barrier repair',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Ensure 100% Canine-Safe Ingredients',
        desc: 'Cook beef marrow or poultry bones in filtered water with 1–2 tablespoons of organic apple cider vinegar. NEVER add onions, garlic, shallots, or salt.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'Simmer on Low Heat for 12 to 24 Hours',
        desc: 'Slow cooking extracts maximum collagen from the marrow. Poultry bones require 12–14 hours; beef marrow bones require 20–24 hours.',
        isUrgent: false,
      },
      {
        stepNumber: 3,
        title: 'STRAIN ALL BONES AND DISCARD THEM',
        desc: 'Pour broth through a fine wire colander. Discard every single cooked bone into outdoor trash. NEVER let your dog consume the cooked bones!',
        isUrgent: true,
      },
      {
        stepNumber: 4,
        title: 'Chill and Skim Fat Cap',
        desc: 'Refrigerate broth overnight. A hard white fat layer will congeal on top—scrape this fat off and discard it to prevent pancreatitis before serving the jelly beneath.',
        isUrgent: false,
      },
    ],
    vetTreatments: [
      {
        name: 'Canine Leaky Gut / Chronic IBD Management',
        purpose: 'Vets prescribe gelatin-rich bone broth to rebuild compromised mucosal tight junctions and reduce food allergy absorption.',
      },
      {
        name: 'Post-Operative & Gastroenteritis Rehydration',
        purpose: 'Serves as an easily assimilated gentle liquid meal for dogs recovering from gastrointestinal surgery or acute vomiting.',
      },
      {
        name: 'Geriatric Renal Hydration Therapy',
        purpose: 'Entices aging dogs with chronic kidney disease (CKD) to consume ample daily fluids, preserving nephron filtration capacity.',
      },
      {
        name: 'Multi-Modal Osteoarthritis Protocol',
        purpose: 'Natural whole-food supplement supplying chondroprotective building blocks alongside veterinary joint medications.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Commercial Veterinary Pet-Specific Bone Broths',
        why: 'Pre-packaged canine broths formulated without onions, garlic, or sodium by pet nutrition brands.',
      },
      {
        name: 'Pure Bovine Collagen Peptide Powder',
        why: 'Hydrolyzed collagen powder stirred into water or food for joint and skin elasticity.',
      },
      {
        name: 'Green Lipped Mussel Oil',
        why: 'Concentrated marine glycosaminoglycans and anti-inflammatory ETA fatty acids for joint care.',
      },
    ],
    preventionRules: [
      'Never give dogs grocery store bouillon cubes or canned soups—they contain extreme sodium levels and dehydrated onion powder.',
      'Always skim the hard congealed fat layer off the top of cold broth before serving to protect against pancreatitis.',
      'Refrigerated broth stays fresh for 5 days; freeze the rest in silicone ice cube trays for convenient daily thawing.',
    ],
    faqs: [
      {
        q: 'Why does good homemade bone broth turn into jelly in the fridge?',
        a: 'When bone broth turns into a firm, gelatinous "jelly" upon cooling, it indicates that slow simmering successfully extracted dense quantities of collagen and converted it into pure gelatin. The firmer the jelly, the more therapeutic and gut-healing the broth is.',
      },
      {
        q: 'Why do you add apple cider vinegar to the bone broth pot?',
        a: 'The acetic acid in apple cider vinegar lowers the pH of the simmering water, acting as a gentle chemical catalyst that pulls minerals (calcium, magnesium, phosphorus) and collagen out of the hard bone matrix into the liquid broth.',
      },
      {
        q: 'Can I feed the cooked bones from the broth pot to my dog?',
        a: 'ABSOLUTELY NEVER. Simmering bones for 24 hours makes them completely brittle and prone to shattering into razor-sharp needle shards. Always strain every piece of bone and dispose of them in a secure outdoor trash bin.',
      },
    ],
  },

  // 13. ZUCCHINI
  {
    slug: 'zucchini',
    name: 'Organic Steamed Zucchini',
    scientificName: 'Cucurbita Pepo Var. Cylindrica (Hydrating Fiber)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'VEGETABLE',
    badgeLabel: '✓ CLINICAL SUPERFOOD // HYDRATING BULK',
    riskSeverity: 'SAFE & HIGHLY BENEFICIAL: Low calorie density (94% water), gentle insoluble fiber, and rich in lutein and folate. Perfect bulking vegetable for weight-management diets.',
    primaryCompound: 'Cellular Hydration Water (94%), Insoluble Cellulose, Lutein',
    targetOrgans: ['Gastrointestinal Tract', 'Bladder & Urinary Flow', 'Weight & Adipose Tissue'],
    toxicThresholdOrServing: '1–3 tablespoons grated or lightly steamed per meal. Extremely safe across all dog breeds.',
    onsetWindow: 'Immediate meal volume and satiety; smooth digestive passage within 12 hours',
    summary: 'Zucchini is one of the safest, gentlest, and most versatile vegetables you can add to a dog’s bowl. With 94% natural cellular hydration and just 17 calories per 100 grams, it allows pet parents to add generous, satisfying volume to meals without contributing to obesity, blood sugar spikes, or pancreatitis.',
    narrativeOverview: [
      'Over 55% of domestic dogs are classified as overweight or obese, placing intense strain on joints and accelerating cardiovascular disease. Zucchini is the veterinarian’s secret weapon for healthy canine weight loss: replacing a portion of high-calorie kibble with steamed zucchini maintains stomach distension and satiety so dogs never feel starved.',
      'Zucchini is packed with lutein and zeaxanthin—carotenoid antioxidants that accumulate in the canine retina and protect against cataracts and nuclear sclerosis as dogs age.',
      'Unlike fibrous cruciferous vegetables (like broccoli, cabbage, and cauliflower) that can produce painful intestinal gas and flatulence, zucchini is gentle on canine digestion and rarely causes bloating when lightly steamed or finely grated.',
    ],
    biochemicalMechanism: 'Zucchini consists predominantly of structured cellular water bound within a soft hemicellulose and pectin fiber matrix. Its negligible glycemic index produces zero postprandial insulin surges. The insoluble cellulose fibers add non-fermentable bulk that stimulates normal peristaltic contractions in the colon, while the high water content flushes the urinary tract, diluting mineral solute concentrations in urine and helping prevent struvite and calcium oxalate crystal nucleation.',
    vitalStats: [
      { label: 'Nutritional Category', value: 'Low-Glycemic Functional Vegetable', tone: 'safe' },
      { label: 'Water Content', value: '94% Natural Cellular Hydration', tone: 'safe' },
      { label: 'Caloric Density', value: 'Ultra-Low (~17 kcal / 100g)', tone: 'safe' },
      { label: 'Primary Benefit', value: 'Weight Loss Bulking & Ocular Protection', tone: 'safe' },
    ],
    timeline: [
      {
        phase: 'Phase 1: Immediate Feeding (Digestive Fullness & Satiety)',
        symptoms: [
          'Expands meal volume, satisfying hunger in food-obsessed or dieting dogs',
          'Delivers pure cellular hydration without stressing renal nephrons',
          'Gentle, mild texture that dogs readily accept without digestive refusal',
        ],
      },
      {
        phase: 'Phase 2: 12 to 24 Hours (Gentle Elimination)',
        symptoms: [
          'Smooth transit through the digestive tract with zero gas or cramping',
          'Normalizes stool volume and aids natural, comfortable elimination',
          'Promotes frequent, clear, healthy urination to flush the bladder',
        ],
      },
      {
        phase: 'Phase 3: Weeks 3 to 8 (Weight Management & Eye Health)',
        symptoms: [
          'Safe, steady reduction in excess body weight when used in place of excess kibble',
          'Reduced mechanical stress on arthritic hip and knee joints',
          'Lutein and zeaxanthin antioxidant deposition protects retinal clarity in aging dogs',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Choose Fresh Firm Zucchini',
        desc: 'Select organic zucchini without blemishes. Yellow summer squash possesses identical canine safety and benefits.',
        isUrgent: false,
      },
      {
        stepNumber: 2,
        title: 'Wash and Leave Skin Intact',
        desc: 'Do not peel the dark green skin; the skin contains the highest concentration of lutein, zeaxanthin, and antioxidants.',
        isUrgent: false,
      },
      {
        stepNumber: 3,
        title: 'Grate Raw or Steam Lightly',
        desc: 'Canine digestive tracts are short and cannot break down large raw vegetable chunks. Finely grating or lightly steaming breaks cell walls for maximum digestion.',
        isUrgent: false,
      },
      {
        stepNumber: 4,
        title: 'Serve Plain with Zero Seasoning',
        desc: 'Never cook zucchini with garlic, onions, butter, cooking oil, or table salt.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Veterinary Canine Weight Reduction Protocols',
        purpose: 'Vets prescribe substituting 10% to 20% of daily kibble grams with steamed zucchini to achieve steady, safe fat loss without starvation behaviors.',
      },
      {
        name: 'Urinary Tract Flush Therapy',
        purpose: 'Increases dietary moisture to keep urine specific gravity below 1.020 in dogs prone to chronic urinary tract crystal formation.',
      },
      {
        name: 'Diabetic Diet Volume Management',
        purpose: 'Adds dietary satiety and fiber without contributing simple sugars or triggering insulin spikes in diabetic patients.',
      },
      {
        name: 'Geriatric Ocular Antioxidant Support',
        purpose: 'Supplies bioavailable lutein and zeaxanthin carotenoids to support retinal health in senior dogs.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Steamed Green Beans',
        why: 'Classic low-calorie crunchy vegetable widely utilized for canine weight loss diets.',
      },
      {
        name: 'Finely Grated Raw Carrots',
        why: 'Provides dietary beta-carotene and satisfying crunch (slightly higher natural sugar content than zucchini).',
      },
      {
        name: 'Steamed Pure Pumpkin',
        why: 'Higher in soluble prebiotic pectin fiber for dogs requiring active diarrhea stabilization.',
      },
    ],
    preventionRules: [
      'Avoid large raw chunks: dogs tend to gulp food, and hard raw zucchini chunks can pass entirely undigested in stool.',
      'Never feed zucchini cooked with human seasonings (garlic powder, onion salt, butter, bacon fat).',
      'If growing zucchini in backyard gardens, discard any unusually bitter-tasting wild gourds (rare cucurbitacin toxin in wild plants).',
    ],
    faqs: [
      {
        q: 'Can dogs eat raw zucchini, or does it have to be cooked?',
        a: 'Dogs can safely eat raw zucchini, but it should be finely grated or pureed. Canines have a short digestive tract and lack cellulase enzymes to break down tough plant cell walls. Grating raw zucchini or steaming it lightly unlocks the nutrients and prevents chunks from passing undigested.',
      },
      {
        q: 'Can dogs eat the skin of zucchini?',
        a: 'Yes, absolutely. The dark green skin of zucchini holds the highest concentration of lutein, carotenoid antioxidants, and dietary fiber. Just wash the skin thoroughly to remove dirt and serve with the flesh.',
      },
      {
        q: 'How does zucchini help dogs lose weight?',
        a: 'Zucchini is 94% water and contains only 17 calories per 100 grams. By replacing 10% to 20% of high-calorie kibble with steamed zucchini, you maintain the physical volume in your dog’s stomach, keeping them feeling full while substantially cutting daily calories.',
      },
    ],
  },

  // 14. RAW GOAT MILK & KEFIR
  {
    slug: 'raw-goat-milk-kefir',
    name: 'Raw Goat Milk & Kefir',
    scientificName: 'Capra Hircus Fermented Milk (A2 Beta-Casein & Live CFUs)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'DAIRY',
    badgeLabel: '✓ CLINICAL SUPERFOOD // PROBIOTIC BIO-FERMENT',
    riskSeverity: 'SAFE & HIGHLY BENEFICIAL: Smaller fat globules and A2 beta-casein make it hypoallergenic and easily tolerated compared to cow milk. Delivers billions of active CFUs to soothe gut and skin allergies.',
    primaryCompound: 'A2 Beta-Casein, Caprylic Acid, 30+ Strains Live CFUs, Calcium',
    targetOrgans: ['Gastrointestinal Microbiota', 'Epithelial Skin Barrier', 'Immune System (GALT)'],
    toxicThresholdOrServing: '1–2 tablespoons per 20 lbs body weight daily. Keep chilled; introduce gradually over 5 days.',
    onsetWindow: 'Digestive soothing in 24 hours; skin allergy and yeast relief within 2 to 3 weeks',
    summary: 'Raw goat milk and goat milk kefir are celebrated as the most easily digested, bioavailable probiotic superfoods in veterinary naturopathy. With naturally smaller fat globules and hypoallergenic A2 beta-casein protein, it digests in just 20 minutes without lactose distress, flooding the microbiome with billions of active, living probiotics.',
    narrativeOverview: [
      'Most adult dogs are lactose intolerant to conventional pasteurized cow milk. Cow milk contains large fat globules, inflammatory A1 beta-casein, and high lactose levels that cause severe gas, bloating, and watery diarrhea. In sharp contrast, goat milk contains smaller fat globules, naturally lower lactose, and exclusively hypoallergenic A2 beta-casein.',
      'When goat milk is traditionally cultured into kefir, beneficial yeasts and lactic acid bacteria ferment virtually all remaining lactose into lactic acid, making it 99% lactose-free while cultivating over 30 distinct probiotic bacterial strains.',
      'Raw goat milk kefir is especially renowned for combating canine yeast overgrowth (Malassezia dermatitis). Rich in natural caprylic and capric medium-chain fatty acids, it actively suppresses fungal and yeast blooms in paws, ears, and belly folds while reducing systemic allergy symptoms.',
    ],
    biochemicalMechanism: 'Goat milk fat globules average 2 micrometers in diameter (compared to >4 micrometers in bovine milk), enabling rapid enzymatic lipolysis by canine gastric lipases. Goat milk casein consists predominantly of A2 beta-casein, which avoids the creation of the inflammatory opioid peptide BCM-7 associated with A1 cow casein. Fermentation produces high titers of live probiotic strains (Lactobacillus, Lactococcus, Bifidobacterium, and Saccharomyces kefir) along with natural medium-chain triglycerides (MCTs: caprylic and capric acid). Caprylic acid disrupts fungal cell membranes, exerting powerful natural fungicidal action against Malassezia yeast.',
    vitalStats: [
      { label: 'Nutritional Category', value: 'Hypoallergenic Probiotic Bio-Ferment', tone: 'safe' },
      { label: 'Protein Profile', value: '100% A2 Beta-Casein (Non-Inflammatory)', tone: 'safe' },
      { label: 'Microbial Density', value: 'Billions of Active Live CFUs', tone: 'safe' },
      { label: 'Target Benefit', value: 'Soothes Allergies & Clears Yeast Overgrowth', tone: 'safe' },
    ],
    timeline: [
      {
        phase: 'Phase 1: 0 to 24 Hours (Gastric Digestion & Hydration)',
        symptoms: [
          'Digests completely within 20 minutes without the bloating or gas caused by cow milk',
          'Delivers easily assimilated dietary calcium, vitamin A, and bioavailable hydration',
          'Living enzymes begin soothing irritated gastric and intestinal lining',
        ],
      },
      {
        phase: 'Phase 2: Days 3 to 7 (Microbiome Seeding)',
        symptoms: [
          'Billions of live probiotic strains colonize the brush border of the small intestine',
          'Stools become firmer, darker, and more consistent with reduced fecal odor',
          'Suppresses pathogenic bacteria (E. coli, Salmonella) through competitive exclusion',
        ],
      },
      {
        phase: 'Phase 3: Weeks 2 to 4 (Skin, Coat & Yeast Clearance)',
        symptoms: [
          'Caprylic acid suppresses fungal yeast blooms, reducing paw-licking and ear scratching',
          'Reduction in characteristic "Frito-feet" yeast odor on paws and belly',
          'Calms red, inflamed skin folds and bolsters systemic immune resilience',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Choose Raw or Low-Heat Pasteurized Goat Milk',
        desc: 'Look for certified pet-grade raw goat milk or goat kefir in pet specialty freezer sections. Avoid human grocery products with added sugars or vanilla flavorings.',
        isUrgent: false,
      },
      {
        stepNumber: 2,
        title: 'Introduce Gradually Over 5 Days',
        desc: 'Day 1: 1 teaspoon; Day 2: 2 teaspoons; Day 3: 1 tablespoon. Introducing live probiotics too rapidly can cause temporary loose stools.',
        isUrgent: false,
      },
      {
        stepNumber: 3,
        title: 'Store Frozen, Thaw in Refrigerator',
        desc: 'Thaw in the fridge and shake well before serving. Use within 7 to 10 days of thawing, or refreeze into silicone molds for single servings.',
        isUrgent: false,
      },
      {
        stepNumber: 4,
        title: 'Never Give Flavored or Sweetened Cow Yogurt',
        desc: 'Human yogurts often contain added sugars, cow dairy lactose, and potentially lethal xylitol artificial sweeteners.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Canine Atopic Dermatitis & Malassezia Yeast Therapy',
        purpose: 'Vets recommend goat milk kefir for its natural caprylic acid to suppress chronic fungal paw and ear infections.',
      },
      {
        name: 'Post-Antibiotic Microflora Restoration',
        purpose: 'Re-establishes bacterial diversity after heavy antibiotic or steroid courses have stripped the intestinal microbiome.',
      },
      {
        name: 'Geriatric Nutritional Boost for Inappetent Dogs',
        purpose: 'Provides dense, hypoallergenic calories, electrolytes, and hydration for aging or failing canines who refuse solid food.',
      },
      {
        name: 'Puppy Weaning & Transitional Nutrition',
        purpose: 'Gentle, highly digestible foundational liquid food used when transitioning puppies from mother’s milk to solid nutrition.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Plain Unsweetened Organic Cow Kefir (99% Lactose Free)',
        why: 'Widely accessible in grocery stores; fermentation reduces lactose, though cow casein remains A1.',
      },
      {
        name: 'Veterinary Synbiotic Powders (Probiotic + Prebiotic)',
        why: 'Shelf-stable freeze-dried probiotic capsules (e.g., Visbiome Vet, FortiFlora) for targeted therapeutic dosing.',
      },
      {
        name: 'Raw Unbleached Green Tripe',
        why: 'Another exceptional natural source of living Lactobacillus probiotics and digestive enzymes.',
      },
    ],
    preventionRules: [
      'Never feed conventional pasteurized cow milk: high lactose and A1 beta-casein cause severe diarrhea, vomiting, and cramps.',
      'Check all kefir labels to confirm zero added sugars, honey, xylitol, or artificial fruit flavors.',
      'Always keep raw goat milk refrigerated; discard if it develops a sharp, sour, curdled spoilage odor beyond normal fermentation.',
    ],
    faqs: [
      {
        q: 'Why can dogs drink goat milk when they cannot drink cow milk?',
        a: 'Cow milk contains large fat globules that take hours to break down, inflammatory A1 beta-casein protein, and high lactose levels that adult dogs lack enzymes to digest. Goat milk has naturally smaller fat globules, lower lactose, and hypoallergenic A2 beta-casein that digests in just 20 minutes without gastrointestinal distress.',
      },
      {
        q: 'How does goat milk kefir help dogs with itchy, yeasty paws?',
        a: 'Goat milk kefir contains high natural concentrations of caprylic and capric acid (medium-chain fatty acids). Caprylic acid is a clinically proven natural antifungal that penetrates and destroys the cell walls of Malassezia yeast—the root cause of red, smelly, constantly licked paws.',
      },
      {
        q: 'How much goat milk kefir should I give my dog each day?',
        a: 'A safe daily maintenance dose is: 1 teaspoon for toy dogs (under 10 lbs); 1 tablespoon for small-to-medium dogs (15–30 lbs); 2 tablespoons for large dogs (40–70 lbs); and 3 tablespoons for giant breeds. Start with half this amount for the first few days to allow the digestive flora to adapt.',
      },
    ],
  },
];

export function getToxicFoods(lang: Lang = 'en'): ToxicFoodItem[] {
  // Currently English has the full deep veterinary clinical dossier
  // All languages fallback cleanly to the full English dataset while using localized page headers/labels
  return TOXIC_FOODS_DATA_EN;
}

export function getToxicFoodBySlug(slug: string, lang: Lang = 'en'): ToxicFoodItem | undefined {
  const items = getToxicFoods(lang);
  return items.find((item) => item.slug === slug);
}
