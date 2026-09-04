import type { Lang } from './ui';
import { INGREDIENT_DATABASE, type IngredientSafetyItem } from '../data/ingredients';

export interface LocalizedIngredientSafetyItem extends IngredientSafetyItem {
  statusLabel: string;
  categoryLabel: string;
}

export interface IngredientCheckerUI {
  eyebrow: string;
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  filterAll: string;
  filterSafe: string;
  filterToxic: string;
  statusSafe: string;
  statusCaution: string;
  statusDanger: string;
  servingTitle: string;
  keyNutrientsTitle: string;
  noResultsTitle: string;
  noResultsDesc: string;
}

export const INGREDIENT_UI: Record<Lang, IngredientCheckerUI> = {
  en: {
    eyebrow: '02 // SAFETY & TOXICITY LOOKUP',
    title: 'Canine Ingredient Safety & Toxicity Lookup',
    subtitle: 'Search any whole food to check clinical safety, bioavailability, and dangerous household toxins before introducing it to your dog\'s bowl.',
    searchPlaceholder: 'Search food (e.g. pumpkin, salmon, xylitol...)',
    filterAll: 'ALL',
    filterSafe: 'SAFE & SUPERFOODS',
    filterToxic: 'FATAL TOXINS',
    statusSafe: 'Safe & Nourishing',
    statusCaution: 'Caution / Limit',
    statusDanger: 'Fatal Danger',
    servingTitle: 'Serving Advice:',
    keyNutrientsTitle: 'Key Nutrients & Clinical Profile:',
    noResultsTitle: 'No ingredients found.',
    noResultsDesc: 'Try searching for common foods like "salmon", "pumpkin", "grapes", or "chocolate".',
  },
  es: {
    eyebrow: '02 // CONSULTA DE SEGURIDAD Y TOXICIDAD',
    title: 'Buscador de Toxicidad y Seguridad de Alimentos Caninos',
    subtitle: 'Consulta cualquier alimento natural para verificar su seguridad clínica, biodisponibilidad y toxinas peligrosas antes de servirlo en el plato de tu perro.',
    searchPlaceholder: 'Buscar alimento (ej. calabaza, salmón, xilitol...)',
    filterAll: 'TODOS',
    filterSafe: 'SEGUROS Y SUPERFOODS',
    filterToxic: 'TOXINAS MORTALES',
    statusSafe: 'Seguro y Nutritivo',
    statusCaution: 'Precaución / Moderación',
    statusDanger: 'Peligro Mortal',
    servingTitle: 'Guía de Consumo:',
    keyNutrientsTitle: 'Perfil Nutricional y Clínico:',
    noResultsTitle: 'No se encontraron ingredientes.',
    noResultsDesc: 'Prueba buscando términos como "salmón", "calabaza", "uvas" o "chocolate".',
  },
  ja: {
    eyebrow: '02 // 食材の安全性・毒性チェック',
    title: '犬の食材安全性・中毒危険度データベース',
    subtitle: '愛犬のごはんに加える前に、食材の臨床的安全性、生物学的利用能、家庭内の危険な毒素を即座に確認できます。',
    searchPlaceholder: '食材を検索（例：かぼちゃ、サーモン、キシリトール...）',
    filterAll: 'すべて',
    filterSafe: '安全＆スーパーフード',
    filterToxic: '致死性の中毒食材',
    statusSafe: '安全で栄養価が高い',
    statusCaution: '注意・適量のみ',
    statusDanger: '絶対NG・致死的危険',
    servingTitle: '与え方・注意点:',
    keyNutrientsTitle: '主な栄養素・臨床プロファイル:',
    noResultsTitle: '該当する食材が見つかりませんでした。',
    noResultsDesc: '「サーモン」「かぼちゃ」「ぶどう」「チョコレート」などの単語で検索してください。',
  },
  fr: {
    eyebrow: '02 // SÉCURITÉ & TOXICITÉ ALIMENTAIRE',
    title: 'Vérificateur d\'Innocuité et de Toxicité des Aliments pour Chien',
    subtitle: 'Recherchez n\'importe quel aliment pour vérifier sa sécurité clinique, sa digestibilité et les toxines domestiques mortelles pour votre chien.',
    searchPlaceholder: 'Rechercher un aliment (ex. citrouille, saumon, xylitol...)',
    filterAll: 'TOUS',
    filterSafe: 'SÛRS & SUPER-ALIMENTS',
    filterToxic: 'TOXIQUES MORTELS',
    statusSafe: 'Sûr & Hautement Nutritif',
    statusCaution: 'Attention / À Limiter',
    statusDanger: 'Danger Mortel',
    servingTitle: 'Conseils de Préparation:',
    keyNutrientsTitle: 'Profil Nutritionnel & Clinique:',
    noResultsTitle: 'Aucun ingrédient trouvé.',
    noResultsDesc: 'Essayez avec "saumon", "citrouille", "raisin" ou "chocolat".',
  },
  de: {
    eyebrow: '02 // ZUTATENSICHERHEIT & GIFT-DATENBANK',
    title: 'Hundefutter Zutaten-Sicherheits- und Giftstoff-Prüfer',
    subtitle: 'Überprüfen Sie Lebensmittel auf tiermedizinische Verträglichkeit, Bioverfügbarkeit und gefährliche Giftstoffe, bevor Sie sie in den Napf füllen.',
    searchPlaceholder: 'Zutat suchen (z. B. Kürbis, Lachs, Xylit...)',
    filterAll: 'ALLE',
    filterSafe: 'SICHER & SUPERFOODS',
    filterToxic: 'TÖDLICHE GIFTE',
    statusSafe: 'Sicher & Nährstoffreich',
    statusCaution: 'Vorsicht / Nur in Maßen',
    statusDanger: 'Tödliche Gefahr',
    servingTitle: 'Fütterungsempfehlung:',
    keyNutrientsTitle: 'Nährstoffprofil & Tiermedizinischer Nutzen:',
    noResultsTitle: 'Keine Zutaten gefunden.',
    noResultsDesc: 'Versuchen Sie Begriffe wie „Lachs“, „Kürbis“, „Weintrauben“ oder „Schokolade“.',
  },
  pt: {
    eyebrow: '02 // CONSULTA DE SEGURANÇA E TOXICIDADE',
    title: 'Guia de Toxicidade e Alimentos Seguros para Cães',
    subtitle: 'Pesquise qualquer alimento para conferir a segurança clínica, biodisponibilidade e toxinas domésticas perigosas antes de colocar na tigela.',
    searchPlaceholder: 'Buscar alimento (ex.: abóbora, salmão, xilitol...)',
    filterAll: 'TODOS',
    filterSafe: 'SEGUROS & SUPERFOODS',
    filterToxic: 'TOXINAS FATAIS',
    statusSafe: 'Seguro e Nutritivo',
    statusCaution: 'Cuidado / Moderar',
    statusDanger: 'Perigo Fatal',
    servingTitle: 'Recomendação de Consumo:',
    keyNutrientsTitle: 'Perfil Nutricional e Clínico:',
    noResultsTitle: 'Nenhum ingrediente encontrado.',
    noResultsDesc: 'Tente pesquisar por "salmão", "abóbora", "uvas" ou "chocolate".',
  },
  ko: {
    eyebrow: '02 // 식재료 안전성 및 중독 위험도 검색',
    title: '강아지 식재료 안전성 및 독성 성분 사전',
    subtitle: '반려견의 밥그릇에 넣기 전, 식재료의 수의학적 안전성, 생체 이용률 및 치명적인 가정 내 중독 위험 식품을 즉시 확인하세요.',
    searchPlaceholder: '식재료 검색 (예: 단호박, 연어, 자일리톨...)',
    filterAll: '전체',
    filterSafe: '안전 & 슈퍼푸드',
    filterToxic: '치명적 독성 음식',
    statusSafe: '안전하고 풍부한 영양',
    statusCaution: '주의 / 급여 제한',
    statusDanger: '절대 급여 금지 (치명적)',
    servingTitle: '급여 방법 및 주의사항:',
    keyNutrientsTitle: '주요 영양소 및 수의학적 프로필:',
    noResultsTitle: '검색된 식재료가 없습니다.',
    noResultsDesc: '"연어", "단호박", "포도", "초콜릿" 등의 단어로 검색해 보세요.',
  },
  it: {
    eyebrow: '02 // VERIFICA SICUREZZA E TOSSICITÀ',
    title: 'Dizionario di Tossicità e Sicurezza Ingredienti per Cani',
    subtitle: 'Cerca qualsiasi alimento per verificarne la sicurezza clinica, la biodisponibilità e le tossine domestiche pericolose prima di riempire la ciotola.',
    searchPlaceholder: 'Cerca alimento (es. zucca, salmone, xilitolo...)',
    filterAll: 'TUTTI',
    filterSafe: 'SICURI & SUPERFOOD',
    filterToxic: 'TOSSINE MORTALI',
    statusSafe: 'Sicuro & Nutriente',
    statusCaution: 'Attenzione / Limitare',
    statusDanger: 'Pericolo Mortale',
    servingTitle: 'Consigli di Somministrazione:',
    keyNutrientsTitle: 'Profilo Nutrizionale e Clinico:',
    noResultsTitle: 'Nessun ingrediente trovato.',
    noResultsDesc: 'Prova a cercare termini come "salmone", "zucca", "uva" o "cioccolato".',
  },
};

type LocalizedData = Record<string, {
  name: string;
  category: string;
  benefitsOrRisks: string;
  servingAdvice: string;
  nutrients: string[];
}>;

const INGREDIENT_TRANSLATIONS: Record<Lang, LocalizedData> = {
  en: {
    'Pumpkin (Pure Puree)': {
      name: 'Pumpkin (Pure Puree)',
      category: 'Vegetable',
      benefitsOrRisks: 'Rich in soluble fiber that regulates bowel motility (both diarrhea and constipation) and prebiotic food for beneficial gut bacteria.',
      servingAdvice: '1–2 tablespoons per 20 lbs of body weight. Ensure it is 100% pure pumpkin, not sugary pumpkin pie mix.',
      nutrients: ['Soluble Fiber', 'Vitamin A', 'Beta-Carotene', 'Potassium']
    },
    'Wild Alaskan Salmon': {
      name: 'Wild Alaskan Salmon',
      category: 'Protein',
      benefitsOrRisks: 'Highest source of bioavailable EPA and DHA Omega-3 fatty acids, proven to reduce inflammation, soothe itchy skin, and protect joints.',
      servingAdvice: 'Always cook thoroughly (or deep-freeze if raw) to eliminate potential salmon poisoning fluke.',
      nutrients: ['EPA/DHA Omega-3', 'Vitamin B12', 'Selenium', 'High Biological Value Protein']
    },
    'Wild Blueberries': {
      name: 'Wild Blueberries',
      category: 'Fruit',
      benefitsOrRisks: 'Exceptional concentration of anthocyanins and polyphenols that cross the blood-brain barrier to protect cognitive function in aging dogs.',
      servingAdvice: 'Serve fresh or frozen as low-calorie training treats or blended directly into meals.',
      nutrients: ['Anthocyanins', 'Vitamin C', 'Vitamin K', 'Manganese']
    },
    'Raw Unbleached Green Tripe': {
      name: 'Raw Unbleached Green Tripe',
      category: 'Protein',
      benefitsOrRisks: 'The holy grail of canine microbiome nutrition. Packed with natural digestive enzymes, lactobacillus probiotics, and ideal 1:1 Calcium-to-Phosphorus ratio.',
      servingAdvice: 'Serve raw and unbleached. Never cook as heat destroys beneficial living enzymes.',
      nutrients: ['Lactobacillus Probiotics', 'Digestive Enzymes', '1:1 Ca:P Ratio']
    },
    'Collagen Bone Broth': {
      name: 'Collagen Bone Broth',
      category: 'Herbs & Supplements',
      benefitsOrRisks: 'Rich in gelatin, glucosamine, chondroitin, and hyaluronic acid that seal leaky gut lining and lubricate stiff joints.',
      servingAdvice: 'Simmered without onions, garlic, or salt. Serve warm over meals.',
      nutrients: ['Type II Collagen', 'Glucosamine', 'Glycine', 'Proline']
    },
    'Organic Steamed Zucchini': {
      name: 'Organic Steamed Zucchini',
      category: 'Vegetable',
      benefitsOrRisks: 'Low calorie density, high hydration, gentle insoluble fiber with zero starch spike.',
      servingAdvice: 'Finely grated or lightly steamed for maximum digestibility.',
      nutrients: ['Hydration', 'Folate', 'Lutein', 'Potassium']
    },
    'Raw Goat Milk / Kefir': {
      name: 'Raw Goat Milk / Kefir',
      category: 'Dairy & Ferments',
      benefitsOrRisks: 'Smaller fat globules and A2 beta-casein make it hypoallergenic and easily tolerated compared to cow milk. Delivers billions of active CFUs.',
      servingAdvice: '1 tbsp per 20 lbs per day. Keep refrigerated.',
      nutrients: ['Live CFUs Probiotics', 'Caprylic Acid', 'Calcium', 'Vitamins A & D']
    },
    'Cooked Bones (Any Poultry or Meat)': {
      name: 'Cooked Bones (Any Poultry or Meat)',
      category: 'HARMFUL',
      benefitsOrRisks: 'Cooking changes the cellular structure of bone from soft/pliable to brittle and splintery, posing extreme risk of stomach perforation or intestinal obstruction.',
      servingAdvice: 'NEVER feed cooked bones. Only feed raw, soft non-weight bearing bones under direct supervision.',
      nutrients: ['DANGER: Splinter hazard', 'Emergency veterinary surgery risk']
    },
    'High-Fat Trimmings & Bacon Grease': {
      name: 'High-Fat Trimmings & Bacon Grease',
      category: 'HARMFUL',
      benefitsOrRisks: 'Sudden high concentrations of cooked saturated fats trigger acute life-threatening pancreatitis in dogs.',
      servingAdvice: 'Avoid greasy table scraps. Limit fat to calculated dietary allowances.',
      nutrients: ['Pancreatitis trigger']
    },
    'Xylitol (Birch Sugar / E967)': {
      name: 'Xylitol (Birch Sugar / E967)',
      category: 'FATAL_TOXIC',
      benefitsOrRisks: 'Causes a massive, rapid release of insulin leading to profound hypoglycemia within 10–60 minutes, followed by acute liver necrosis and death.',
      servingAdvice: 'DEADLY. Check all peanut butters, baked goods, and supplements for Xylitol / Birch Sugar.',
      nutrients: ['FATAL TOXIN: Rapid insulin spike & hepatic failure']
    },
    'Grapes & Raisins (All Varieties)': {
      name: 'Grapes & Raisins (All Varieties)',
      category: 'FATAL_TOXIC',
      benefitsOrRisks: 'Tartaric acid in grapes causes idiosyncratic acute renal (kidney) failure even in microscopic quantities in sensitive dogs.',
      servingAdvice: 'STRICTLY FORBIDDEN in any form, including baked breads or trail mixes.',
      nutrients: ['FATAL TOXIN: Acute Renal Failure']
    },
    'Onions, Garlic, Leeks & Chives (Allium Family)': {
      name: 'Onions, Garlic, Leeks & Chives (Allium Family)',
      category: 'FATAL_TOXIC',
      benefitsOrRisks: 'Contains N-propyl disulfide and thiosulfate which destroy red blood cells, causing severe oxidative Heinz body hemolytic anemia.',
      servingAdvice: 'Strictly avoid onion powders, broths with onion, or raw alliums.',
      nutrients: ['FATAL TOXIN: Hemolytic Anemia']
    },
    'Chocolate & Cocoa (Theobromine)': {
      name: 'Chocolate & Cocoa (Theobromine)',
      category: 'FATAL_TOXIC',
      benefitsOrRisks: 'Theobromine and caffeine cannot be metabolized by canines, causing cardiac arrhythmias, central nervous system seizures, and death.',
      servingAdvice: 'Keep all chocolate, dark chocolate, baking cocoa, and cocoa mulch away from dogs.',
      nutrients: ['FATAL TOXIN: Neurotoxin & Cardiac Arrhythmia']
    },
    'Macadamia Nuts': {
      name: 'Macadamia Nuts',
      category: 'FATAL_TOXIC',
      benefitsOrRisks: 'Causes severe neurological weakness, hind limb tremors, hyperthermia, and inability to walk within 12 hours.',
      servingAdvice: 'Strictly avoid all macadamia nuts and mixed nut butters.',
      nutrients: ['TOXIN: Neurological neuromuscular toxicity']
    }
  },

  es: {
    'Pumpkin (Pure Puree)': {
      name: 'Calabaza (Puré 100% Puro)',
      category: 'Verdura',
      benefitsOrRisks: 'Rica en fibra soluble que regula el tránsito intestinal (tanto diarrea como estreñimiento) y actúa como prebiótico natural para la flora intestinal.',
      servingAdvice: '1–2 cucharadas por cada 10 kg de peso. Asegúrate de que sea calabaza pura sin azúcares ni especias.',
      nutrients: ['Fibra Soluble', 'Vitamina A', 'Betacaroteno', 'Potasio']
    },
    'Wild Alaskan Salmon': {
      name: 'Salmón Salvaje de Alaska',
      category: 'Proteína',
      benefitsOrRisks: 'Máxima fuente biológica de ácidos grasos Omega-3 EPA y DHA. Reduce la inflamación, alivia picores en la piel y cuida las articulaciones.',
      servingAdvice: 'Cocinar siempre ligeramente al vapor o congelar previamente si se usa crudo.',
      nutrients: ['EPA/DHA Omega-3', 'Vitamina B12', 'Selenio', 'Proteína de Alto Valor']
    },
    'Wild Blueberries': {
      name: 'Arándanos Silvestres',
      category: 'Fruta',
      benefitsOrRisks: 'Potente concentración de antocianinas y polifenoles que cruzan la barrera hematoencefálica protegiendo la cognición en perros senior.',
      servingAdvice: 'Servir frescos o congelados como premios bajos en calorías o triturados en la comida.',
      nutrients: ['Antocianinas', 'Vitamina C', 'Vitamina K', 'Manganeso']
    },
    'Raw Unbleached Green Tripe': {
      name: 'Pancita Verde Cruda (Callos Verdes)',
      category: 'Proteína',
      benefitsOrRisks: 'El superalimento definitivo para el microbioma canino. Repleto de enzimas digestivas naturales, probióticos y ratio Calcio:Fósforo 1:1 perfecto.',
      servingAdvice: 'Servir cruda y sin blanquear. Nunca cocer, ya que el calor destruye las enzimas vivas.',
      nutrients: ['Probióticos Lactobacillus', 'Enzimas Digestivas', 'Ratio Ca:P 1:1']
    },
    'Collagen Bone Broth': {
      name: 'Caldo de Huesos con Colágeno',
      category: 'Suplemento',
      benefitsOrRisks: 'Rico en gelatina, glucosamina, condroitina y ácido hialurónico que reparan la mucosa intestinal y lubrican articulaciones rígidas.',
      servingAdvice: 'Cocinado sin cebolla, ajo ni sal. Servir templado vertido sobre la comida.',
      nutrients: ['Colágeno Tipo II', 'Glucosamina', 'Glicina', 'Prolina']
    },
    'Organic Steamed Zucchini': {
      name: 'Calabacín al Vapor Orgánico',
      category: 'Verdura',
      benefitsOrRisks: 'Baja densidad calórica, altísima hidratación celular y fibra insoluble suave sin picos de azúcar en sangre.',
      servingAdvice: 'Rallado muy fino o ligeramente cocido al vapor para máxima digestibilidad.',
      nutrients: ['Hidratación', 'Folato', 'Luteína', 'Potasio']
    },
    'Raw Goat Milk / Kefir': {
      name: 'Leche Cruda de Cabra o Kéfir',
      category: 'Lácteo Fermentado',
      benefitsOrRisks: 'Sus glóbulos grasos pequeños y la caseína A2 la hacen hipoalergénica y digestiva. Aporta miles de millones de probióticos activos.',
      servingAdvice: '1 cucharada por cada 10 kg de peso al día. Mantener refrigerado.',
      nutrients: ['Probióticos Vivos (UFC)', 'Ácido Caprílico', 'Calcio Bioasimilable', 'Vitaminas A y D']
    },
    'Cooked Bones (Any Poultry or Meat)': {
      name: 'Huesos Cocidos (Pollo o Cualquier Carne)',
      category: 'PELIGROSO',
      benefitsOrRisks: 'La cocción vuelve el hueso quebradizo y astillable, con altísimo riesgo de perforación estomacal u obstrucción intestinal letal.',
      servingAdvice: 'NUNCA des huesos cocidos. Solo se deben dar huesos carnosos crudos y blandos con supervisión.',
      nutrients: ['PELIGRO: Riesgo de astillamiento', 'Riesgo de cirugía veterinaria urgente']
    },
    'High-Fat Trimmings & Bacon Grease': {
      name: 'Grasa Sobrante y Manteca de Tocino',
      category: 'PELIGROSO',
      benefitsOrRisks: 'Una sobrecarga repentina de grasas saturadas cocinadas puede desencadenar una pancreatitis aguda mortal en cuestión de horas.',
      servingAdvice: 'Evita restos grasos de la mesa. Limita la grasa a las dosis calculadas de su dieta.',
      nutrients: ['Disparador de Pancreatitis Aguda']
    },
    'Xylitol (Birch Sugar / E967)': {
      name: 'Xilitol (Azúcar de Abedul / E967)',
      category: 'TOXINA MORTAL',
      benefitsOrRisks: 'Provoca una descarga masiva de insulina causando hipoglucemia severa en 10-60 minutos, necrosis hepática fulminante y muerte.',
      servingAdvice: 'MORTAL. Revisa cremas de cacahuete, chicles y repostería sin azúcar antes de dar nada.',
      nutrients: ['TOXINA MORTAL: Hipoglucemia fulminante y fallo hepático']
    },
    'Grapes & Raisins (All Varieties)': {
      name: 'Uvas y Pasas (Todas las Variedades)',
      category: 'TOXINA MORTAL',
      benefitsOrRisks: 'El ácido tartárico presente en la uva produce fallo renal agudo fulminante incluso en dosis diminutas en perros predispuestos.',
      servingAdvice: 'TOTALMENTE PROHIBIDO en cualquier forma, incluyendo panes con pasas o mezclas de frutos secos.',
      nutrients: ['TOXINA MORTAL: Fallo Renal Agudo']
    },
    'Onions, Garlic, Leeks & Chives (Allium Family)': {
      name: 'Cebollas, Ajo, Puerro y Cebollino (Familia Allium)',
      category: 'TOXINA MORTAL',
      benefitsOrRisks: 'Contiene disulfuro de N-propilo que destruye los glóbulos rojos, provocando una severa anemia hemolítica por cuerpos de Heinz.',
      servingAdvice: 'Evita estrictamente cebolla en polvo, caldos comerciales con cebolla o alliums crudos.',
      nutrients: ['TOXINA MORTAL: Anemia Hemolítica']
    },
    'Chocolate & Cocoa (Theobromine)': {
      name: 'Chocolate y Cacao (Teobromina)',
      category: 'TOXINA MORTAL',
      benefitsOrRisks: 'Los perros no pueden metabolizar la teobromina ni la cafeína, provocando arritmias cardíacas, convulsiones neurológicas y muerte.',
      servingAdvice: 'Mantén todo chocolate, cacao en polvo y mantillo de cacao fuera del alcance de los perros.',
      nutrients: ['TOXINA MORTAL: Neurotoxina y Arritmia Cardíaca']
    },
    'Macadamia Nuts': {
      name: 'Nueces de Macadamia',
      category: 'TOXINA MORTAL',
      benefitsOrRisks: 'Causan debilidad neurológica aguda, temblores en patas traseras, fiebre e incapacidad para caminar en menos de 12 horas.',
      servingAdvice: 'Prohibidas en su totalidad. Cuidado con mantequillas de frutos secos mixtos.',
      nutrients: ['TOXINA: Toxicidad Neuromuscular']
    }
  },

  ja: {
    'Pumpkin (Pure Puree)': {
      name: '純粋かぼちゃピューレ',
      category: '野菜',
      benefitsOrRisks: '水溶性食物繊維が豊富で、下痢と便秘の両方を改善し、腸内の善玉菌を育てるプレバイオティクスとして働きます。',
      servingAdvice: '体重10kgあたり大さじ1〜2杯。砂糖や香辛料が含まれていない純粋なかぼちゃを使用してください。',
      nutrients: ['水溶性食物繊維', 'ビタミンA', 'βカロテン', 'カリウム']
    },
    'Wild Alaskan Salmon': {
      name: '天然アラスカサーモン',
      category: 'タンパク質',
      benefitsOrRisks: '高濃度で生体利用能の高いEPA・DHAオメガ3脂肪酸の宝庫。炎症を抑え、皮膚の痒みを緩和し関節を保護します。',
      servingAdvice: '寄生虫感染を防ぐため、必ず十分に加熱調理するか、完全冷凍処理されたものを使用してください。',
      nutrients: ['EPA/DHA オメガ3', 'ビタミンB12', 'セレン', '高生物価タンパク質']
    },
    'Wild Blueberries': {
      name: '野生種ブルーベリー',
      category: '果物',
      benefitsOrRisks: '血液脳関門を通過できる高濃度のアントシアニンとポリフェノールを含み、高齢犬の認知機能維持をサポートします。',
      servingAdvice: '生または冷凍のまま低カロリーのおやつとして、またはごはんにトッピングして与えます。',
      nutrients: ['アントシアニン', 'ビタミンC', 'ビタミンK', 'マンガン']
    },
    'Raw Unbleached Green Tripe': {
      name: '生の無漂白グリーントライプ',
      category: 'タンパク質',
      benefitsOrRisks: '犬の腸内環境改善における最高峰の食材。生きた消化酵素、乳酸菌、理想的な1:1のカルシウム・リン比率を含みます。',
      servingAdvice: '必ず無漂白の生の状態で与えてください。加熱すると貴重な酵素が死滅します。',
      nutrients: ['乳酸菌プロバイオティクス', '活性消化酵素', 'Ca:P 1:1 比率']
    },
    'Collagen Bone Broth': {
      name: 'コラーゲンボーンブロス（骨スープ）',
      category: 'サプリ・栄養補助',
      benefitsOrRisks: 'ゼラチン、グルコサミン、コンドロイチン、ヒアルロン酸が豊富で、腸壁を修復し関節の柔軟性を保ちます。',
      servingAdvice: '玉ねぎ、にんにく、塩を一切使わずに煮出し、人肌程度に温めてごはんにかけて与えます。',
      nutrients: ['II型コラーゲン', 'グルコサミン', 'グリシン', 'プロリン']
    },
    'Organic Steamed Zucchini': {
      name: '有機ズッキーニ（蒸し）',
      category: '野菜',
      benefitsOrRisks: '低カロリーで水分保持力が高く、血糖値を上げずに優しい不溶性食物繊維を補給できます。',
      servingAdvice: '細かくすりおろすか、軽く蒸すことで消化吸収性が格段に高まります。',
      nutrients: ['生体水分', '葉酸', 'ルテイン', 'カリウム']
    },
    'Raw Goat Milk / Kefir': {
      name: '生ヤギミルク / ケフィア',
      category: '発酵乳製品',
      benefitsOrRisks: '脂肪球が小さくA2カゼインを含むため牛乳より低アレルギーで消化に優れます。何十億もの生きた善玉菌を補給。',
      servingAdvice: '体重10kgあたり1日大さじ1杯。必ず冷蔵保存してください。',
      nutrients: ['生きた乳酸菌群', 'カプリル酸', '高吸収カルシウム', 'ビタミンA＆D']
    },
    'Cooked Bones (Any Poultry or Meat)': {
      name: '加熱した骨（鳥骨・牛骨等全般）',
      category: '危険食材',
      benefitsOrRisks: '加熱によって骨の組織が硬く鋭く割れやすくなり、胃腸の穿孔（穴が開く）や腸閉塞という命に関わる重大事故を招きます。',
      servingAdvice: '加熱した骨は絶対に与えないでください。生の柔らかい骨のみ見守り下で与えます。',
      nutrients: ['危険：破片による内臓損傷', '緊急開腹手術リスク']
    },
    'High-Fat Trimmings & Bacon Grease': {
      name: '脂身の残り・ベーコンの油',
      category: '危険食材',
      benefitsOrRisks: '調理された高濃度の飽和脂肪酸は、犬に激痛と致死率の高い急性膵炎を突然引き起こす引き金になります。',
      servingAdvice: '人間の脂っこい食事の残りを与えないでください。脂質は計算された適量に制限します。',
      nutrients: ['急性膵炎の重大な誘発因子']
    },
    'Xylitol (Birch Sugar / E967)': {
      name: 'キシリトール（白樺糖 / E967）',
      category: '致死性毒物',
      benefitsOrRisks: '体内に入ると急激に大量のインスリンが放出され、10〜60分以内に重篤な低血糖と急性肝壊死を起こし死に至ります。',
      servingAdvice: '猛毒です。ピーナッツバター、ガム、無糖焼き菓子等の原材料表示を必ず確認してください。',
      nutrients: ['致死毒：急性低血糖ショック・劇症肝不全']
    },
    'Grapes & Raisins (All Varieties)': {
      name: 'ぶどう・レーズン（全品種）',
      category: '致死性毒物',
      benefitsOrRisks: 'ぶどうに含まれる酒石酸が原因で、感受性の高い犬はわずか1粒でも突発性の急性腎不全を発症します。',
      servingAdvice: 'いかなる形態でも厳禁。ぶどうパンやミックスナッツの混入にも厳重に注意してください。',
      nutrients: ['致死毒：急性腎不全']
    },
    'Onions, Garlic, Leeks & Chives (Allium Family)': {
      name: 'ネギ類（玉ねぎ、長ネギ、にんにく、ニラ）',
      category: '致死性毒物',
      benefitsOrRisks: '有機硫黄化合物が赤血球内のヘモグロビンを酸化破壊し、ハインツ小体性溶血性貧血を引き起こします。',
      servingAdvice: 'ネギのエキスが溶け出したスープやオニオンパウダー入りの加工食品も厳禁です。',
      nutrients: ['致死毒：重症溶血性貧血']
    },
    'Chocolate & Cocoa (Theobromine)': {
      name: 'チョコレート・ココア（テオブロミン）',
      category: '致死性毒物',
      benefitsOrRisks: '犬はテオブロミンとカフェインを分解できず、重篤な不整脈、中枢神経の痙攣発作、死を招きます。',
      servingAdvice: '板チョコ、ココアパウダー、製菓材料などを愛犬の手の届く場所に置かないでください。',
      nutrients: ['致死毒：神経毒性・致死的不整脈']
    },
    'Macadamia Nuts': {
      name: 'マカダミアナッツ',
      category: '致死性毒物',
      benefitsOrRisks: '摂取後12時間以内に神経麻痺、後肢の震え、高体温、歩行困難を引き起こします。',
      servingAdvice: 'マカダミアナッツおよびナッツバターは厳禁です。',
      nutrients: ['神経毒：神経筋機能不全']
    }
  },

  fr: {
    'Pumpkin (Pure Puree)': {
      name: 'Purée de Citrouille 100% Pure',
      category: 'Légume',
      benefitsOrRisks: 'Riche en fibres solubles qui régulent le transit (diarrhée et constipation) et nourrissent le microbiote intestinal.',
      servingAdvice: '1 à 2 cuillères à soupe pour 10 kg de poids. Sans sucre ni épices.',
      nutrients: ['Fibres solubles', 'Vitamine A', 'Bêta-carotène', 'Potassium']
    },
    'Wild Alaskan Salmon': {
      name: 'Saumon Sauvage d\'Alaska',
      category: 'Protéine',
      benefitsOrRisks: 'Meilleure source d\'oméga-3 EPA et DHA hautement assimilables. Apaise la peau et protège les articulations.',
      servingAdvice: 'Toujours cuire à cœur ou congeler au préalable.',
      nutrients: ['Oméga-3 EPA/DHA', 'Vitamine B12', 'Sélénium', 'Protéine noble']
    },
    'Wild Blueberries': {
      name: 'Myrtilles Sauvages',
      category: 'Fruit',
      benefitsOrRisks: 'Riches en anthocyanes protégeant les fonctions cognitives du chien âgé.',
      servingAdvice: 'Fraîches ou congelées comme friandises saines.',
      nutrients: ['Anthocyanes', 'Vitamine C', 'Vitamine K', 'Manganèse']
    },
    'Raw Unbleached Green Tripe': {
      name: 'Panse Verte Crue Non Blanchie',
      category: 'Protéine',
      benefitsOrRisks: 'Super-aliment par excellence pour la flore intestinale avec enzymes vivantes et ratio Ca:P 1:1 idéal.',
      servingAdvice: 'Servir crue impérativement. Ne jamais cuire.',
      nutrients: ['Probiotiques naturels', 'Enzymes digestives', 'Ratio Ca:P 1:1']
    },
    'Collagen Bone Broth': {
      name: 'Bouillon d\'Os Riche en Collagène',
      category: 'Complément',
      benefitsOrRisks: 'Riche en glucosamine et chondroïtine pour lubrifier les articulations et réparer la muqueuse digestive.',
      servingAdvice: 'Cuit sans oignon, sans ail ni sel. Servir tiède.',
      nutrients: ['Collagène type II', 'Glucosamine', 'Glycine', 'Proline']
    },
    'Organic Steamed Zucchini': {
      name: 'Courgette Bio à la Vapeur',
      category: 'Légume',
      benefitsOrRisks: 'Très faible en calories, hydratation cellulaire maximale et fibres douces sans impact glycémique.',
      servingAdvice: 'Râpée très finement ou légèrement cuite à la vapeur.',
      nutrients: ['Hydratation', 'Folate', 'Lutéine', 'Potassium']
    },
    'Raw Goat Milk / Kefir': {
      name: 'Lait Cru de Chèvre ou Kéfir',
      category: 'Produit Fermenté',
      benefitsOrRisks: 'Caséine A2 hypoallergénique et milliards de probiotiques bénéfiques pour le système immunitaire.',
      servingAdvice: '1 cuillère à soupe par tranche de 10 kg par jour.',
      nutrients: ['Probiotiques actifs', 'Acide caprylique', 'Calcium', 'Vitamines A & D']
    },
    'Cooked Bones (Any Poultry or Meat)': {
      name: 'Os Cuits (Toute Viande ou Volaille)',
      category: 'DANGEREUX',
      benefitsOrRisks: 'La cuisson rend l\'os friable et pointu, provoquant perforations de l\'estomac et occlusions intestinales.',
      servingAdvice: 'NE JAMAIS DONNER d\'os cuits. Seuls les os charnus crus et mous sont autorisés sous surveillance.',
      nutrients: ['DANGER : Risque d\'esquille', 'Chirurgie vétérinaire d\'urgence']
    },
    'High-Fat Trimmings & Bacon Grease': {
      name: 'Gras de Viande & Graisse de Bacon',
      category: 'DANGEREUX',
      benefitsOrRisks: 'Un apport brutal en graisses saturées déclenche une pancréatite aiguë fulgurante.',
      servingAdvice: 'Bannir les restes gras de table.',
      nutrients: ['Déclencheur de pancréatite aiguë']
    },
    'Xylitol (Birch Sugar / E967)': {
      name: 'Xylitol (Sucre de Bouleau / E967)',
      category: 'TOXIQUE MORTEL',
      benefitsOrRisks: 'Provoque un pic d\'insuline foudroyant, une hypoglycémie sévère en 15 minutes et une nécrose hépatique mortelle.',
      servingAdvice: 'MORTEL. Vérifiez toujours le beurre de cacahuète et les produits sans sucre.',
      nutrients: ['TOXIQUE MORTEL : Choc hypoglycémique et hépatite aiguë']
    },
    'Grapes & Raisins (All Varieties)': {
      name: 'Raisins Frais et Secs (Toutes Variétés)',
      category: 'TOXIQUE MORTEL',
      benefitsOrRisks: 'L\'acide tartrique provoque une insuffisance rénale aiguë même à dose minime.',
      servingAdvice: 'STRICTEMENT INTERDIT sous toutes ses formes.',
      nutrients: ['TOXIQUE MORTEL : Insuffisance Rénale Aiguë']
    },
    'Onions, Garlic, Leeks & Chives (Allium Family)': {
      name: 'Oignons, Ail, Poireaux & Échalotes (Alliacées)',
      category: 'TOXIQUE MORTEL',
      benefitsOrRisks: 'Le disulfure de N-propyle détruit les globules rouges en causant une anémie hémolytique sévère.',
      servingAdvice: 'Bannir absolument poudres d\'oignon et bouillons industriels.',
      nutrients: ['TOXIQUE MORTEL : Anémie Hémolytique']
    },
    'Chocolate & Cocoa (Theobromine)': {
      name: 'Chocolat et Cacao (Théobromine)',
      category: 'TOXIQUE MORTEL',
      benefitsOrRisks: 'Les chiens ne peuvent métaboliser la théobromine : convulsions, arythmie cardiaque et décès.',
      servingAdvice: 'Garder tout chocolat hors de portée des chiens.',
      nutrients: ['TOXIQUE MORTEL : Neurotoxine et Arythmie']
    },
    'Macadamia Nuts': {
      name: 'Noix de Macadamia',
      category: 'TOXIQUE MORTEL',
      benefitsOrRisks: 'Entraînent faiblesse motrice, tremblements des pattes arrière et paralysie temporaire sous 12h.',
      servingAdvice: 'Strictement interdit.',
      nutrients: ['TOXIQUE : Atteinte Neuromusculaire']
    }
  },

  de: {
    'Pumpkin (Pure Puree)': {
      name: 'Reines Kürbispüree',
      category: 'Gemüse',
      benefitsOrRisks: 'Reich an löslichen Ballaststoffen, die sowohl bei Durchfall als auch bei Verstopfung regulierend wirken.',
      servingAdvice: '1–2 Esslöffel pro 10 kg Körpergewicht. Ohne Zucker und Gewürze.',
      nutrients: ['Lösliche Ballaststoffe', 'Vitamin A', 'Beta-Carotin', 'Kalium']
    },
    'Wild Alaskan Salmon': {
      name: 'Wilder Alaska-Lachs',
      category: 'Protein',
      benefitsOrRisks: 'Höchste bioverfügbare Konzentration an EPA- und DHA-Omega-3-Fettsäuren für gesunde Haut und Gelenke.',
      servingAdvice: 'Immer durchgaren oder vorher tiefgefrieren.',
      nutrients: ['EPA/DHA Omega-3', 'Vitamin B12', 'Selen', 'Hochwertiges Eiweiß']
    },
    'Wild Blueberries': {
      name: 'Wilde Blaubeeren',
      category: 'Obst',
      benefitsOrRisks: 'Enthalten wertvolle Anthocyane, die die Gehirnfunktion und das Nervensystem im Alter schützen.',
      servingAdvice: 'Frisch oder gefroren als kalorienarmer Snack füttern.',
      nutrients: ['Anthocyane', 'Vitamin C', 'Vitamin K', 'Mangan']
    },
    'Raw Unbleached Green Tripe': {
      name: 'Roher, ungebleichter grüner Pansen',
      category: 'Protein',
      benefitsOrRisks: 'Goldstandard für die Darmgesundheit mit natürlichen Enzymen, Milchsäurebakterien und 1:1 Ca:P-Verhältnis.',
      servingAdvice: 'Ausschließlich roh füttern; Hitze zerstört lebende Enzyme.',
      nutrients: ['Probiotische Milchsäurebakterien', 'Verdauungsenzyme', '1:1 Ca:P Verhältnis']
    },
    'Collagen Bone Broth': {
      name: 'Kollagen-Knochenbrühe',
      category: 'Ergänzung',
      benefitsOrRisks: 'Reich an Gelatine, Glucosamin und Chondroitin zur Regeneration der Darmschleimhaut und Gelenkschmiere.',
      servingAdvice: 'Ohne Zwiebeln, Knoblauch oder Salz kochen und lauwarm servieren.',
      nutrients: ['Typ-II-Kollagen', 'Glucosamin', 'Glycin', 'Prolin']
    },
    'Organic Steamed Zucchini': {
      name: 'Gedämpfte Bio-Zucchini',
      category: 'Gemüse',
      benefitsOrRisks: 'Sehr kalorienarm, liefert sanfte Zellhydration und verdauungsfördernde Fasern ohne Blutzuckerspitzen.',
      servingAdvice: 'Fein gerieben oder leicht gedämpft füttern.',
      nutrients: ['Zellflüssigkeit', 'Folsäure', 'Lutein', 'Kalium']
    },
    'Raw Goat Milk / Kefir': {
      name: 'Rohe Ziegenmilch / Kefir',
      category: 'Fermentiertes',
      benefitsOrRisks: 'Hypoallergenes A2-Beta-Casein und Milliarden nützlicher probiotischer Kulturen für das Immunsystem.',
      servingAdvice: '1 EL pro 10 kg Körpergewicht täglich gekühlt anbieten.',
      nutrients: ['Aktive Probiotika (KBE)', 'Caprylsäure', 'Kalzium', 'Vitamine A & D']
    },
    'Cooked Bones (Any Poultry or Meat)': {
      name: 'Gekochte Knochen (Geflügel & Fleisch)',
      category: 'GEFÄHRLICH',
      benefitsOrRisks: 'Durch das Kochen splittern Knochen messerscharf und können Magen- und Darmwand perforieren.',
      servingAdvice: 'NIEMALS gekochte Knochen füttern. Nur weiche, rohe Fleischknochen unter Aufsicht.',
      nutrients: ['GEFAHR: Splitterungsrisiko', 'Lebensbedrohlicher OP-Notfall']
    },
    'High-Fat Trimmings & Bacon Grease': {
      name: 'Fettabschnitte & Bratensaft',
      category: 'GEFÄHRLICH',
      benefitsOrRisks: 'Plötzliche hohe Gaben erhitzter Fette führen rasch zu einer lebensbedrohlichen akuten Pankreatitis.',
      servingAdvice: 'Fettige Tischabfälle konsequent vermeiden.',
      nutrients: ['Auslöser akuter Bauchspeicheldrüsenentzündung']
    },
    'Xylitol (Birch Sugar / E967)': {
      name: 'Xylit (Birkenzucker / E967)',
      category: 'TÖDLICHES GIFT',
      benefitsOrRisks: 'Führt zu extremer Insulinausschüttung, schwerstem Blutzuckerabfall innerhalb von 15 Minuten und akutem Leberversagen.',
      servingAdvice: 'TÖDLICH. Erdnussbutter und zuckerfreie Backwaren genau prüfen.',
      nutrients: ['TÖDLICHES GIFT: Hypoglykämischer Schock & Lebernekrose']
    },
    'Grapes & Raisins (All Varieties)': {
      name: 'Weintrauben & Rosinen (Alle Sorten)',
      category: 'TÖDLICHES GIFT',
      benefitsOrRisks: 'Weinsäure verursacht bei Hunden schon in kleinsten Mengen irreversibles akutes Nierenversagen.',
      servingAdvice: 'STRENGSTENS VERBOTEN in jeder Form.',
      nutrients: ['TÖDLICHES GIFT: Akutes Nierenversagen']
    },
    'Onions, Garlic, Leeks & Chives (Allium Family)': {
      name: 'Zwiebeln, Knoblauch, Lauch & Schnittlauch',
      category: 'TÖDLICHES GIFT',
      benefitsOrRisks: 'Zerstört die roten Blutkörperchen und löst eine lebensgefährliche hämolytische Heinz-Körper-Anämie aus.',
      servingAdvice: 'Auch Zwiebelpulver und Fertigbrühen absolut meiden.',
      nutrients: ['TÖDLICHES GIFT: Hämolytische Anämie']
    },
    'Chocolate & Cocoa (Theobromine)': {
      name: 'Schokolade & Kakao (Theobromin)',
      category: 'TÖDLICHES GIFT',
      benefitsOrRisks: 'Hunde können Theobromin nicht abbauen; es führt zu Herzrhythmusstörungen, Krampfanfällen und Tod.',
      servingAdvice: 'Schokolade immer unerreichbar aufbewahren.',
      nutrients: ['TÖDLICHES GIFT: Neurotoxin & Herzversagen']
    },
    'Macadamia Nuts': {
      name: 'Macadamianüsse',
      category: 'TÖDLICHES GIFT',
      benefitsOrRisks: 'Verursachen innerhalb von 12 Stunden Lähmungserscheinungen der Hinterbeine, Zittern und Fieber.',
      servingAdvice: 'Vollständig meiden.',
      nutrients: ['GIFT: Neuromuskuläre Lähmung']
    }
  },

  pt: {
    'Pumpkin (Pure Puree)': {
      name: 'Purê de Abóbora 100% Puro',
      category: 'Legume',
      benefitsOrRisks: 'Rico em fibras solúveis que regulam o intestino tanto em diarreias quanto em prisão de ventre.',
      servingAdvice: '1 a 2 colheres de sopa para cada 10 kg de peso. Sem açúcar nem temperos.',
      nutrients: ['Fibra Solúvel', 'Vitamina A', 'Betacaroteno', 'Potássio']
    },
    'Wild Alaskan Salmon': {
      name: 'Salmão Selvagem do Alasca',
      category: 'Proteína',
      benefitsOrRisks: 'A maior fonte de ômega-3 EPA e DHA biodisponível. Reduz coceiras e inflamações articulares.',
      servingAdvice: 'Sempre cozinhar levemente no vapor ou congelar previamente.',
      nutrients: ['Ômega-3 EPA/DHA', 'Vitamina B12', 'Selênio', 'Proteína Nobre']
    },
    'Wild Blueberries': {
      name: 'Mirtilos Selvagens (Blueberries)',
      category: 'Fruta',
      benefitsOrRisks: 'Alta concentração de antocianinas que protegem a função cognitiva e a visão em cães idosos.',
      servingAdvice: 'Servir frescos ou congelados como petiscos de baixo teor calórico.',
      nutrients: ['Antocianinas', 'Vitamina C', 'Vitamina K', 'Manganês']
    },
    'Raw Unbleached Green Tripe': {
      name: 'Bucho Verde Cru (Dobradinha Não Branqueada)',
      category: 'Proteína',
      benefitsOrRisks: 'O melhor alimento para a flora intestinal, repleto de enzimas vivas e proporção ideal 1:1 Cálcio:Fósforo.',
      servingAdvice: 'Servir sempre cru. O calor desnatura as enzimas digestivas.',
      nutrients: ['Probióticos Naturais', 'Enzimas Digestivas', 'Proporção Ca:P 1:1']
    },
    'Collagen Bone Broth': {
      name: 'Caldo de Ossos com Colágeno',
      category: 'Suplemento',
      benefitsOrRisks: 'Fonte de colágeno tipo II e glicosamina para restaurar articulações e o revestimento do estômago.',
      servingAdvice: 'Preparar sem cebola, alho ou sal. Servir morno sobre a ração ou comida natural.',
      nutrients: ['Colágeno Tipo II', 'Glicosamina', 'Glicina', 'Prolina']
    },
    'Organic Steamed Zucchini': {
      name: 'Abobrinha Cozida no Vapor',
      category: 'Legume',
      benefitsOrRisks: 'Baixa caloria, hidratação celular e fibras suaves sem impacto glicêmico.',
      servingAdvice: 'Ralar finamente ou cozinhar no vapor.',
      nutrients: ['Hidratação', 'Folato', 'Luteína', 'Potássio']
    },
    'Raw Goat Milk / Kefir': {
      name: 'Leite Cru de Cabra ou Kéfir',
      category: 'Laticínio Fermentado',
      benefitsOrRisks: 'Proteína A2 de facílima digestão com bilhões de bactérias probióticas ativas.',
      servingAdvice: '1 colher de sopa para cada 10 kg de peso ao dia.',
      nutrients: ['UFCs Probióticas', 'Ácido Caprílico', 'Cálcio', 'Vitaminas A e D']
    },
    'Cooked Bones (Any Poultry or Meat)': {
      name: 'Ossos Cozidos (Frango ou Qualquer Carne)',
      category: 'PERIGOSO',
      benefitsOrRisks: 'O cozimento torna o osso quebradiço e perfurante, podendo rasgar o esôfago e intestino.',
      servingAdvice: 'NUNCA ofereça ossos cozidos. Apenas ossos carnosos crus e macios com supervisão.',
      nutrients: ['PERIGO: Risco de perfuração', 'Cirurgia veterinária emergencial']
    },
    'High-Fat Trimmings & Bacon Grease': {
      name: 'Gordura de Churrasco & Banha de Bacon',
      category: 'PERIGOSO',
      benefitsOrRisks: 'Cargas pesadas de gordura frita podem desencadear pancreatite aguda com risco de morte.',
      servingAdvice: 'Evite sobras de mesa gordurosas.',
      nutrients: ['Gatilho de Pancreatite Aguda']
    },
    'Xylitol (Birch Sugar / E967)': {
      name: 'Xilitol (Açúcar de Bétula / E967)',
      category: 'TOXINA FATAL',
      benefitsOrRisks: 'Gera liberação maciça de insulina com choque hipoglicêmico em minutos e falência hepática.',
      servingAdvice: 'LETAL. Confira rótulos de pastas de amendoim e doces diet.',
      nutrients: ['TOXINA FATAL: Choque hipoglicêmico e necrose hepática']
    },
    'Grapes & Raisins (All Varieties)': {
      name: 'Uvas e Uvas-Passas (Todas as Variedades)',
      category: 'TOXINA FATAL',
      benefitsOrRisks: 'O ácido tartárico causa insuficiência renal aguda até mesmo em porções mínimas.',
      servingAdvice: 'PROIBIÇÃO ABSOLUTA em qualquer formato.',
      nutrients: ['TOXINA FATAL: Insuficiência Renal Aguda']
    },
    'Onions, Garlic, Leeks & Chives (Allium Family)': {
      name: 'Cebola, Alho, Alho-Poró e Cebolinha',
      category: 'TOXINA FATAL',
      benefitsOrRisks: 'Destrói as hemácias do sangue do cão causando grave anemia hemolítica por corpúsculos de Heinz.',
      servingAdvice: 'Evite totalmente alhos, cebolas e caldos prontos.',
      nutrients: ['TOXINA FATAL: Anemia Hemolítica']
    },
    'Chocolate & Cocoa (Theobromine)': {
      name: 'Chocolate e Cacau (Teobromina)',
      category: 'TOXINA FATAL',
      benefitsOrRisks: 'Causa arritmias cardíacas severas, convulsões no sistema nervoso central e morte.',
      servingAdvice: 'Guarde qualquer chocolate longe do alcance dos animais.',
      nutrients: ['TOXINA FATAL: Neurotoxina e Arritmia Cardíaca']
    },
    'Macadamia Nuts': {
      name: 'Nozes de Macadâmia',
      category: 'TOXINA FATAL',
      benefitsOrRisks: 'Causam fraqueza neuromuscular aguda, tremores e paralisia transitória das patas traseiras.',
      servingAdvice: 'Evite completamente nozes e castanhas.',
      nutrients: ['TOXINA: Disfunção Neuromuscular']
    }
  },

  ko: {
    'Pumpkin (Pure Puree)': {
      name: '100% 순수 단호박 퓨레',
      category: '채소',
      benefitsOrRisks: '풍부한 수용성 식이섬유가 설사와 변비를 모두 개선하며 유익균의 먹이가 되는 프리바이오틱스 역할을 합니다.',
      servingAdvice: '체중 10kg당 1~2 큰술 급여. 설탕이나 향신료가 없는 순수 호박만 사용하세요.',
      nutrients: ['수용성 식이섬유', '비타민 A', '베타카로틴', '칼륨']
    },
    'Wild Alaskan Salmon': {
      name: '자연산 알래스카 연어',
      category: '단백질',
      benefitsOrRisks: '생체 이용률이 가장 높은 오메가-3(EPA 및 DHA) 공급원으로 가려움증 완화와 관절 건강에 탁월합니다.',
      servingAdvice: '기생충 감염을 예방하기 위해 반드시 완전히 익히거나 급랭 처리된 것을 급여하세요.',
      nutrients: ['EPA/DHA 오메가-3', '비타민 B12', '셀레늄', '고품질 단백질']
    },
    'Wild Blueberries': {
      name: '야생 블루베리',
      category: '과일',
      benefitsOrRisks: '뇌혈관 장벽을 통과하는 안토시아닌과 폴리페놀이 노령견의 뇌 인지 기능과 시력을 보호합니다.',
      servingAdvice: '신선한 상태 또는 냉동 상태로 저칼로리 간식이나 토핑으로 급여하세요.',
      nutrients: ['안토시아닌', '비타민 C', '비타민 K', '망간']
    },
    'Raw Unbleached Green Tripe': {
      name: '무표백 생 그린 트라이프 (양)',
      category: '단백질',
      benefitsOrRisks: '장내 미생물 균형을 위한 최고의 식재료. 활성 소화효소, 유산균, 이상적인 1:1 칼슘/인 비율을 제공합니다.',
      servingAdvice: '반드시 익히지 않은 생 상태로 급여하세요. 열을 가하면 유익한 효소가 파괴됩니다.',
      nutrients: ['유산균 프로바이오틱스', '활성 소화효소', '1:1 Ca:P 비율']
    },
    'Collagen Bone Broth': {
      name: '콜라겐 본브로스 (뼈 사골 육수)',
      category: '영양 보조제',
      benefitsOrRisks: '젤라틴, 글루코사민, 콘드로이틴이 풍부하여 장 점막을 회복시키고 뻣뻣한 관절을 부드럽게 윤활합니다.',
      servingAdvice: '양파, 마늘, 소금 없이 푹 끓여 미온수로 사료 위에 부어 급여하세요.',
      nutrients: ['2형 콜라겐', '글루코사민', '글리신', '프롤린']
    },
    'Organic Steamed Zucchini': {
      name: '유기농 찐 애호박',
      category: '채소',
      benefitsOrRisks: '초저칼로리이면서 풍부한 생체 수분과 혈당 스파이크 없는 부드러운 불용성 섬유질을 공급합니다.',
      servingAdvice: '소화 흡수를 위해 잘게 갈거나 살짝 쪄서 급여하세요.',
      nutrients: ['세포 수분', '엽산', '루테인', '칼륨']
    },
    'Raw Goat Milk / Kefir': {
      name: '생 산양유 / 케피어',
      category: '발효 유제품',
      benefitsOrRisks: '작은 지방 입자와 A2 단백질로 우유보다 알레르기 유발이 적고 수십억 마리의 활성 유익균을 전달합니다.',
      servingAdvice: '체중 10kg당 하루 1큰술. 냉장 보관 필수.',
      nutrients: ['생 유산균 (CFU)', '카프릴산', '생체 칼슘', '비타민 A & D']
    },
    'Cooked Bones (Any Poultry or Meat)': {
      name: '익힌 뼈 (닭뼈, 소뼈 등 모든 고기 뼈)',
      category: '치명적 위험',
      benefitsOrRisks: '익히면 뼈 조직이 유리처럼 날카롭게 부서져 위장 천공이나 치명적인 장폐색을 유발합니다.',
      servingAdvice: '익힌 뼈는 절대로 주지 마세요. 생뼈만 보호자의 관찰 하에 급여해야 합니다.',
      nutrients: ['위험: 날카로운 파편 파열 위험', '응급 개복 수술 위험']
    },
    'High-Fat Trimmings & Bacon Grease': {
      name: '고기 기름 덩어리 & 베이컨 기름',
      category: '치명적 위험',
      benefitsOrRisks: '과도하게 농축된 가열 포화지방은 급성 췌장염을 일으켜 급격한 쇼크와 사망에 이를 수 있습니다.',
      servingAdvice: '기름진 사람 음식은 절대 주지 마세요.',
      nutrients: ['급성 췌장염 유발 요인']
    },
    'Xylitol (Birch Sugar / E967)': {
      name: '자일리톨 (자작나무 설탕 / E967)',
      category: '치사량 독극물',
      benefitsOrRisks: '인슐린을 폭발적으로 분비시켜 10~60분 내에 치명적인 저혈당 쇼크와 급성 간 괴사를 일으켜 사망합니다.',
      servingAdvice: '극소량도 치명적입니다. 땅콩버터나 무설탕 간식의 성분표를 반드시 확인하세요.',
      nutrients: ['치사 독소: 급성 저혈당 쇼크 및 급성 간부전']
    },
    'Grapes & Raisins (All Varieties)': {
      name: '포도 및 건포도 (모든 품종)',
      category: '치사량 독극물',
      benefitsOrRisks: '타르타르산이 민감한 강아지에게 급성 신부전을 유발하며 단 1알로도 생명이 위태로워집니다.',
      servingAdvice: '건포도 빵, 샐러드 등 어떠한 형태도 절대 급여 금지.',
      nutrients: ['치사 독소: 급성 신부전']
    },
    'Onions, Garlic, Leeks & Chives (Allium Family)': {
      name: '양파, 마늘, 파, 부추 (파속 식물)',
      category: '치사량 독극물',
      benefitsOrRisks: '적혈구의 헤모글로빈을 산화 파괴하여 심각한 하인츠 소체성 용혈성 빈혈을 유발합니다.',
      servingAdvice: '양파 분말, 국물, 마늘 성분이 포함된 모든 가공식품 엄격 금지.',
      nutrients: ['치사 독소: 용혈성 빈혈']
    },
    'Chocolate & Cocoa (Theobromine)': {
      name: '초콜릿 및 코코아 (테オブ로민)',
      category: '치사량 독극물',
      benefitsOrRisks: '테오브로민을 체내에서 분해하지 못해 치명적인 심장 부정맥, 중추신경계 발작 및 사망을 초래합니다.',
      servingAdvice: '다크초콜릿, 베이킹 코코아 가루 등은 강아지 손이 닿지 않는 곳에 보관하세요.',
      nutrients: ['치사 독소: 신경 독성 및 심장마비']
    },
    'Macadamia Nuts': {
      name: '마카다미아 너트',
      category: '치사량 독극물',
      benefitsOrRisks: '섭취 후 12시간 이내에 신경근 무력증, 뒷다리 떨림, 고열 및 보행 불능을 유발합니다.',
      servingAdvice: '믹스 너트나 쿠키 속 견과류를 절대 주지 마세요.',
      nutrients: ['독소: 신경근육계 마비']
    }
  },

  it: {
    'Pumpkin (Pure Puree)': {
      name: 'Purea di Zucca 100% Pura',
      category: 'Verdura',
      benefitsOrRisks: 'Ricca di fibre solubili che regolano la motilità intestinale (sia in caso di diarrea che di stipsi) e nutrono i batteri probiotici.',
      servingAdvice: '1–2 cucchiai ogni 10 kg di peso. Assicurarsi che sia zucca pura senza zuccheri né aromi.',
      nutrients: ['Fibra solubile', 'Vitamina A', 'Beta-carotene', 'Potassio']
    },
    'Wild Alaskan Salmon': {
      name: 'Salmone Selvaggio dell\'Alaska',
      category: 'Proteina',
      benefitsOrRisks: 'La più alta fonte biodisponibile di acidi grassi Omega-3 EPA e DHA. Contrasta le infiammazioni e rigenera il pelo.',
      servingAdvice: 'Cuocere sempre al vapore o congelare preventivamente prima dell\'uso.',
      nutrients: ['EPA/DHA Omega-3', 'Vitamina B12', 'Selenio', 'Proteine ad Alto Valore']
    },
    'Wild Blueberries': {
      name: 'Mirtilli Selvatici',
      category: 'Frutta',
      benefitsOrRisks: 'Eccezionale concentrazione di antociani e polifenoli capaci di proteggere la lucidità mentale nei cani anziani.',
      servingAdvice: 'Freschi o congelati come snack a basso contenuto calorico o tritati nella pappa.',
      nutrients: ['Antociani', 'Vitamina C', 'Vitamina K', 'Manganese']
    },
    'Raw Unbleached Green Tripe': {
      name: 'Trippa Verde Cruda Non Sbiancata',
      category: 'Proteina',
      benefitsOrRisks: 'L\'alimento sovrano per il microbioma canino. Ricco di enzimi digestivi vivi e perfetto equilibrio Calcio:Fosforo 1:1.',
      servingAdvice: 'Servir cruda e non sbiancata. Non cuocere mai per preservare gli enzimi attivi.',
      nutrients: ['Probiotici Lactobacillus', 'Enzimi Digestivi', 'Rapporto Ca:P 1:1']
    },
    'Collagen Bone Broth': {
      name: 'Brodo di Ossa Ricco di Collagene',
      category: 'Integratore',
      benefitsOrRisks: 'Fornisce gelatina, glucosamina e acido ialuronico per riparare le pareti intestinali e lubrificare le articolazioni.',
      servingAdvice: 'Preparato senza cipolla, aglio o sale. Servire tiepido sopra il pasto.',
      nutrients: ['Collagene Tipo II', 'Glucosamina', 'Glicina', 'Prolina']
    },
    'Organic Steamed Zucchini': {
      name: 'Zucchine Biologiche al Vapore',
      category: 'Verdura',
      benefitsOrRisks: 'Bassissimo apporto calorico, massima idratazione cellulare e fibre delicate che non alterano la glicemia.',
      servingAdvice: 'Grattugiate finemente o cotte delicatamente al vapore.',
      nutrients: ['Idratazione', 'Folati', 'Luteina', 'Potassio']
    },
    'Raw Goat Milk / Kefir': {
      name: 'Latte Crudo di Capra o Kefir',
      category: 'Latticino Fermentato',
      benefitsOrRisks: 'Globuli lipidici ridotti e caseina A2 ipoallergenica. Apporta miliardi di fermenti lattici vivi.',
      servingAdvice: '1 cucchiaio ogni 10 kg di peso al giorno.',
      nutrients: ['UFC Probiotiche Vive', 'Acido Caprilico', 'Calcio', 'Vitamine A & D']
    },
    'Cooked Bones (Any Poultry or Meat)': {
      name: 'Ossa Cotte (Pollo o Qualsiasi Carne)',
      category: 'PERICOLOSO',
      benefitsOrRisks: 'La cottura rende l\'osso rigido e scheggiabile, con gravissimo rischio di perforazioni gastriche o occlusioni.',
      servingAdvice: 'NON DARE MAI ossa cotte. Solo ossa carnose crude e morbide sotto stretta sorveglianza.',
      nutrients: ['PERICOLO: Rischio schegge taglienti', 'Chirurgia veterinaria d\'urgenza']
    },
    'High-Fat Trimmings & Bacon Grease': {
      name: 'Grasso di Cottura & Strutto di Bacon',
      category: 'PERICOLOSO',
      benefitsOrRisks: 'Un\'ondata improvvisa di grassi saturi cotti scatena pancreatiti acute gravissime nel cane.',
      servingAdvice: 'Evitare gli scarti unti della tavola.',
      nutrients: ['Fattore scatenante pancreatite acuta']
    },
    'Xylitol (Birch Sugar / E967)': {
      name: 'Xilitolo (Zucchero di Betulla / E967)',
      category: 'TOSSINA MORTALE',
      benefitsOrRisks: 'Provoca un rilascio devastante di insulina con gravissima ipoglicemia in 15 minuti e necrosi epatica fulminante.',
      servingAdvice: 'LETALE. Controllare sempre burro d\'arachidi e dolci ipocalorici.',
      nutrients: ['TOSSINA MORTALE: Shock ipoglicemico e insufficienza epatica']
    },
    'Grapes & Raisins (All Varieties)': {
      name: 'Uva e Uvetta (Tutte le Varietà)',
      category: 'TOSSINA MORTALE',
      benefitsOrRisks: 'L\'acido tartarico causa insufficienza renale acuta fulminante anche in dosi microscopiche.',
      servingAdvice: 'SEVERAMENTE VIETATO in qualsiasi forma o dolce.',
      nutrients: ['TOSSINA MORTALE: Insufficienza Renale Acuta']
    },
    'Onions, Garlic, Leeks & Chives (Allium Family)': {
      name: 'Cipolla, Aglio, Porri ed Erba Cipollina',
      category: 'TOSSINA MORTALE',
      benefitsOrRisks: 'Il disolfuro di N-propile distrugge i globuli rossi provocando una grave anemia emolitica con corpi di Heinz.',
      servingAdvice: 'Evitare rigorosamente polveri di cipolla e brodi industriali.',
      nutrients: ['TOSSINA MORTALE: Anemia Emolitica']
    },
    'Chocolate & Cocoa (Theobromine)': {
      name: 'Cioccolato e Cacao (Teobromina)',
      category: 'TOSSINA MORTALE',
      benefitsOrRisks: 'I cani non metabolizzano la teobromina: causa aritmie cardiache, crisi convulsive e morte.',
      servingAdvice: 'Tenere qualsiasi tipo di cioccolato fuori dalla portata dei cani.',
      nutrients: ['TOSSINA MORTALE: Neurotossina e Aritmie']
    },
    'Macadamia Nuts': {
      name: 'Noci di Macadamia',
      category: 'TOSSINA MORTALE',
      benefitsOrRisks: 'Provocano debolezza neuromuscolare acuta, tremori agli arti posteriori e paralisi temporanea entro 12 ore.',
      servingAdvice: 'Evitare tassativamente.',
      nutrients: ['TOSSINA: Tossicità Neuromuscolare']
    }
  }
};

export function getLocalizedIngredients(lang: Lang): LocalizedIngredientSafetyItem[] {
  const dict = INGREDIENT_TRANSLATIONS[lang] || INGREDIENT_TRANSLATIONS.en;
  const uiLabels = INGREDIENT_UI[lang] || INGREDIENT_UI.en;

  return INGREDIENT_DATABASE.map(item => {
    const custom = dict[item.name];
    let statusLabel = uiLabels.statusSafe;
    if (item.status === 'FEED_WITH_CAUTION') statusLabel = uiLabels.statusCaution;
    if (item.status === 'DANGEROUS_TOXIC') statusLabel = uiLabels.statusDanger;

    if (custom) {
      return {
        ...item,
        name: custom.name,
        category: custom.category as any,
        categoryLabel: custom.category,
        statusLabel,
        benefitsOrRisks: custom.benefitsOrRisks,
        servingAdvice: custom.servingAdvice,
        nutrients: custom.nutrients,
      };
    }

    return {
      ...item,
      statusLabel,
      categoryLabel: item.category,
    };
  });
}
