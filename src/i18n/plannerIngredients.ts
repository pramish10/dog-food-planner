import type { Lang } from './ui';

export interface LocalizedIngredient {
  en: string;
  es: string;
  ja: string;
  fr: string;
  de: string;
  pt: string;
  ko: string;
  it: string;
}

export const LOCALIZED_INGREDIENTS: Record<string, LocalizedIngredient> = {
  'dry-kibble-formula': {
    en: 'Dry Kibble (Complete & Balanced Formula)',
    es: 'Pienso Seco (Fórmula Completa y Equilibrada)',
    ja: 'ドライキブル（総合栄養食フォーミュラ）',
    fr: 'Croquettes Sèches (Formule Complète & Équilibrée)',
    de: 'Trockenfutter (Ausgewogene Alleinnahrungs-Rezeptur)',
    pt: 'Ração Seca (Fórmula Completa e Equilibrada)',
    ko: '건식 사료 (완전 균형 영양 포뮬러)',
    it: 'Crocchette Secche (Formula Completa e Bilanciata)',
  },
  'fresh-cooked-formula': {
    en: 'Fresh Gently Cooked Bowl (Human-Grade Formula)',
    es: 'Plato Cocinado Suave (Fórmula Grado Humano)',
    ja: '手作り調理ボウル（ヒューマングレード）',
    fr: 'Gamelle Fraîche Mijotée (Qualité Consommation Humaine)',
    de: 'Schonend gekochtes Menü (Lebensmittelqualität)',
    pt: 'Prato Fresco Cozinhado (Fórmula de Grau Humano)',
    ko: '신선 자연화식 볼 (휴먼그레이드 포뮬러)',
    it: 'Ciotola Fresca Cucinata (Formula di Grado Umano)',
  },
  'wet-canned-formula': {
    en: 'Grain-Free Wet Dog Food (Loaf / Pate Can)',
    es: 'Comida Húmeda Sin Cereales (Lata Paté)',
    ja: 'グレインフリー ウェットフード（パテ缶）',
    fr: 'Pâtée Pour Chien Sans Céréales (Boîte Terrine / Pâté)',
    de: 'Getreidefreies Nassfutter (Pastete / Dose)',
    pt: 'Comida Húmida Sem Grãos (Lata Patê)',
    ko: '그레인프리 습식 사료 (테린 / 파테 캔)',
    it: 'Cibo Umido Senza Cereali (Lattina Paté)',
  },
  'raw-barf-formula': {
    en: 'Freeze-Dried Raw BARF Patty',
    es: 'Medallón Crudo BARF Liofilizado',
    ja: 'フリーズドライ 生食BARFパティ',
    fr: 'Galette BARF Crue Lyophilisée',
    de: 'Gefriergetrocknetes BARF-Rohfutter Patty',
    pt: 'Hambúrguer Cru BARF Liofilizado',
    ko: '동결건조 생식 BARF 패티',
    it: 'Tortino Crudo BARF Liofilizzato',
  },
  'chicken-rice-diet': {
    en: 'Cooked Chicken & White Rice (Bland Diet)',
    es: 'Pollo Cocido y Arroz Blanco (Dieta Blanda)',
    ja: '鶏肉と白米の煮込み（消化サポート食）',
    fr: 'Poulet Cuit et Riz Blanc (Régime Doux)',
    de: 'Gekochtes Hühnchen & weißer Reis (Schonkost)',
    pt: 'Frango Cozido e Arroz Branco (Dieta Branda)',
    ko: '삶은 닭고기와 흰쌀죽 (소화 속편한 식단)',
    it: 'Pollo Cotto e Riso Bianco (Dieta Leggera)',
  },
  'bland-beef-rice': {
    en: 'Cooked Lean Beef & White Rice (Bland Diet)',
    es: 'Ternera Magra Cocida y Arroz Blanco (Dieta Blanda)',
    ja: '牛赤身肉と白米の煮込み（消化サポート食）',
    fr: 'Bœuf Maigre Cuit et Riz Blanc (Régime Doux)',
    de: 'Gekochtes mageres Rindfleisch & weißer Reis (Schonkost)',
    pt: 'Carne Bovina Magra Cozida e Arroz Branco (Dieta Branda)',
    ko: '삶은 소고기 우둔살과 흰쌀죽 (소화 보조식)',
    it: 'Manzo Magro Cotto e Riso Bianco (Dieta Leggera)',
  },
  'salmon-oil': {
    en: 'Salmon Oil',
    es: 'Aceite de Salmón',
    ja: 'サーモンオイル',
    fr: 'Huile de Saumon',
    de: 'Lachsöl',
    pt: 'Óleo de Salmão',
    ko: '연어 오일',
    it: 'Olio di Salmone',
  },
  'pumpkin': {
    en: 'Pumpkin Puree',
    es: 'Puré de Calabaza',
    ja: 'かぼちゃピューレ',
    fr: 'Purée de Citrouille',
    de: 'Kürbispüree',
    pt: 'Puré de Abóbora',
    ko: '단호박 퓌레',
    it: 'Purea di Zucca',
  },
  'bone-broth': {
    en: 'Bone Broth',
    es: 'Caldo de Huesos',
    ja: 'ボーンブロス（骨スープ）',
    fr: "Bouillon d'Os",
    de: 'Knochenbrühe',
    pt: 'Caldo de Ossos',
    ko: '본 브로스 (사골 육수)',
    it: "Brodo d'Ossa",
  },
  'blueberries': {
    en: 'Fresh Blueberries',
    es: 'Arándanos Frescos',
    ja: '生のブルーベリー',
    fr: 'Myrtilles Fraîches',
    de: 'Frische Blaubeeren',
    pt: 'Mirtilos Frescos',
    ko: '생 블루베리',
    it: 'Mirtilli Freschi',
  },
  'joint-chew': {
    en: 'Joint Chew',
    es: 'Masticable Articular (Glucosamina)',
    ja: '関節ケア チュアブル',
    fr: 'Bouchée Soutien Articulaire',
    de: 'Gelenk-Kautablette',
    pt: 'Mastigável para Articulações',
    ko: '관절 케어 츄어블',
    it: 'Masticabile per Articolazioni',
  },
  'training-bites': {
    en: 'Training Bites (Low-Calorie Treats)',
    es: 'Bocaditos de Entrenamiento (Bajos en Calorías)',
    ja: 'トレーニング トリーツ（低カロリー）',
    fr: 'Friandises de Dressage (Hypocaloriques)',
    de: 'Trainings-Snacks (Kalorienarm)',
    pt: 'Petiscos de Treino (Baixas Calorias)',
    ko: '훈련용 트릿 (저칼로리 간식)',
    it: 'Bocconcini da Addestramento (Ipocalorici)',
  },
  'egg': {
    en: 'Hard-Boiled Egg',
    es: 'Huevo Duro',
    ja: 'ゆで卵',
    fr: 'Œuf Dur',
    de: 'Hartgekochtes Ei',
    pt: 'Ovo Cozido',
    ko: '완숙 계란',
    it: 'Uovo Sodo',
  },
  'greek-yogurt': {
    en: 'Plain Greek Yogurt',
    es: 'Yogur Griego Natural',
    ja: '無糖ギリシャヨーグルト',
    fr: 'Yaourt Grec Nature',
    de: 'Natur-Griechischer Joghurt',
    pt: 'Iogurte Grego Natural',
    ko: '플레인 그릭 요거트',
    it: 'Yogurt Greco Naturale',
  },
  'goat-kefir': {
    en: 'Goat Milk Kefir',
    es: 'Kéfir de Leche de Cabra',
    ja: 'ヤギミルクケフィア',
    fr: 'Kéfir de Lait de Chèvre',
    de: 'Ziegenmilch-Kefir',
    pt: 'Kefir de Leite de Cabra',
    ko: '산양유 케피어',
    it: 'Kefir di Latte di Capra',
  },
  'chia-seeds': {
    en: 'Chia Seeds (Hydrated)',
    es: 'Semillas de Chía (Hidratadas)',
    ja: 'チアシード（ふやかしたもの）',
    fr: 'Graines de Chia (Hydratées)',
    de: 'Chiasamen (Eingeweicht)',
    pt: 'Sementes de Chia (Hidratadas)',
    ko: '치아시드 (물에 불린 것)',
    it: 'Semi di Chia (Idratati)',
  },
  'carrots': {
    en: 'Steamed Carrots (Diced)',
    es: 'Zanahorias al Vapor (en Cubos)',
    ja: '蒸しにんじん（刻み）',
    fr: 'Carottes à la Vapeur (en Dés)',
    de: 'Gedämpfte Karotten (Gewürfelt)',
    pt: 'Cenouras a Vapor (em Cubos)',
    ko: '찐 당근 (다진 것)',
    it: 'Carote al Vapore (a Cubetti)',
  },
  'spinach': {
    en: 'Steamed Spinach',
    es: 'Espinacas al Vapor',
    ja: '蒸しほうれん草',
    fr: 'Épinards à la Vapeur',
    de: 'Gedämpfter Spinat',
    pt: 'Espinafres a Vapor',
    ko: '데친 시금치',
    it: 'Spinaci al Vapore',
  },
  'green-beans': {
    en: 'Steamed Green Beans',
    es: 'Judías Verdes al Vapor',
    ja: '蒸しさやいんげん',
    fr: 'Haricots Verts à la Vapeur',
    de: 'Gedämpfte grüne Bohnen',
    pt: 'Feijão Verde a Vapor',
    ko: '찐 그린빈 (깍지콩)',
    it: 'Fagiolini al Vapore',
  },
  'beef-tripe': {
    en: 'Green Beef Tripe',
    es: 'Callos Verdes de Ternera',
    ja: 'グリーントライプ（生の牛胃袋）',
    fr: 'Tripes Vertes de Bœuf',
    de: 'Grüner Rinderpansen',
    pt: 'Dobrada Verde Bovina',
    ko: '그린 트라이프 (소 양)',
    it: 'Trippa Verde di Manzo',
  },
  'beef-liver': {
    en: 'Freeze-Dried Beef Liver',
    es: 'Hígado de Ternera Liofilizado',
    ja: 'フリーズドライ 牛レバー',
    fr: 'Foie de Bœuf Lyophilisé',
    de: 'Gefriergetrocknete Rinderleber',
    pt: 'Fígado Bovino Liofilizado',
    ko: '동결건조 소 간',
    it: 'Fegato di Manzo Liofilizzato',
  },
  'sardines': {
    en: 'Canned Sardines (in water)',
    es: 'Sardinas en Conserva (en Agua)',
    ja: 'いわし水煮缶',
    fr: "Sardines en Boîte (à l'Eau)",
    de: 'Dosensardinen (in Wasser)',
    pt: 'Sardinhas em Lata (em Água)',
    ko: '정어리 통조림 (물/무염)',
    it: 'Sardine in Scatola (al Naturale)',
  },
  'coconut-oil': {
    en: 'Virgin Coconut Oil',
    es: 'Aceite de Coco Virgen',
    ja: 'バージンココナッツオイル',
    fr: 'Huile de Coco Vierge',
    de: 'Natives Kokosöl',
    pt: 'Óleo de Coco Virgem',
    ko: '버진 코코넛 오일',
    it: 'Olio Vergine di Cocco',
  },
  'turmeric-paste': {
    en: 'Turmeric Golden Paste',
    es: 'Pasta Dorada de Cúrcuma',
    ja: 'ターメリック ゴールデンペースト',
    fr: 'Pâte Dorée au Curcuma',
    de: 'Goldene Kurkuma-Paste',
    pt: 'Pasta Dourada de Cúrcuma',
    ko: '강황 골든 페이스트',
    it: "Pasta d'Oro alla Curcuma",
  },
  'zucchini': {
    en: 'Steamed Zucchini',
    es: 'Calabacín al Vapor',
    ja: '蒸しズッキーニ',
    fr: 'Courgette à la Vapeur',
    de: 'Gedämpfte Zucchini',
    pt: 'Curgete a Vapor',
    ko: '찐 주키니 호박',
    it: 'Zucchine al Vapore',
  },
  'cranberries': {
    en: 'Cranberries (Unsweetened)',
    es: 'Arándanos Rojos (Sin Azúcar)',
    ja: 'クランベリー（無糖）',
    fr: 'Canneberges (Non Sucrées)',
    de: 'Cranberries (Ungesüßt)',
    pt: 'Oxicocos (Sem Açúcar)',
    ko: '크랜베리 (무가당)',
    it: 'Mirtilli Rossi (Non Zuccherati)',
  },
  'sweet-potato': {
    en: 'Steamed Sweet Potato (Mashed)',
    es: 'Boniato al Vapor (en Puré)',
    ja: '蒸しさつまいも（マッシュ）',
    fr: 'Patate Douce à la Vapeur (Écrasée)',
    de: 'Gedämpfte Süßkartoffel (Püriert)',
    pt: 'Batata-Doce a Vapor (Esmagada)',
    ko: '찐 고구마 (으깬 것)',
    it: 'Patata Dolce al Vapore (Schiacciata)',
  },
  'chicken-hearts': {
    en: 'Chicken Hearts (Taurine Rich)',
    es: 'Corazones de Pollo (Ricos en Taurina)',
    ja: '鶏ハツ（タウリン豊富）',
    fr: 'Cœurs de Poulet (Riches en Taurine)',
    de: 'Hühnerherzen (Taurinreich)',
    pt: 'Corações de Frango (Ricos em Taurina)',
    ko: '닭 염통 (타우린 풍부)',
    it: 'Cuori di Pollo (Ricchi di Taurina)',
  },
  'beef-heart': {
    en: 'Cooked Beef Heart',
    es: 'Corazón de Ternera Cocido',
    ja: '茹でた牛ハツ',
    fr: 'Cœur de Bœuf Cuit',
    de: 'Gekochtes Rinderherz',
    pt: 'Coração Bovino Cozido',
    ko: '익힌 소 염통',
    it: 'Cuore di Manzo Cotto',
  },
  'cottage-cheese': {
    en: 'Plain Low-Fat Cottage Cheese',
    es: 'Queso Cottage Bajo en Grasa',
    ja: '無塩・低脂肪カッテージチーズ',
    fr: 'Fromage Blanc / Cottage Cheese Allégé',
    de: 'Magerer Hüttenkäse',
    pt: 'Queijo Cottage Baixo Teor de Gordura',
    ko: '플레인 저지방 코티지 치즈',
    it: 'Fiocchi di Latte Magri (Cottage Cheese)',
  },
  'steamed-broccoli': {
    en: 'Steamed Broccoli Florets',
    es: 'Ramilletes de Brócoli al Vapor',
    ja: '蒸しブロッコリーの小房',
    fr: 'Fleurettes de Brocoli à la Vapeur',
    de: 'Gedämpfte Brokkoliröschen',
    pt: 'Raminhos de Brócolos a Vapor',
    ko: '찐 브로콜리 송이',
    it: 'Cimette di Broccoli al Vapore',
  },
  'green-lipped-mussel': {
    en: 'Green-Lipped Mussel Powder',
    es: 'Polvo de Mejillón de Labio Verde',
    ja: 'モエギイガイ（緑イ貝）粉末',
    fr: 'Poudre de Moule Verte',
    de: 'Grünlippmuschelpulver',
    pt: 'Pó de Mexilhão de Lábios Verdes',
    ko: '초록입홍합 분말',
    it: 'Polvere di Cozza Verde',
  },
  'apple-slices': {
    en: 'Fresh Apple Slices (Seedless)',
    es: 'Rodajas de Manzana Fresca (Sin Semillas)',
    ja: '生のりんごスライス（種抜き）',
    fr: 'Tranches de Pomme Fraîche (Sans Pépins)',
    de: 'Frische Apfelscheiben (Ohne Kerne)',
    pt: 'Fatias de Maçã Fresca (Sem Sementes)',
    ko: '생 사과 슬라이스 (씨 제거)',
    it: 'Fette di Mela Fresca (Senza Semi)',
  },
  'ground-flaxseed': {
    en: 'Ground Flaxseed (Cold-Milled)',
    es: 'Semillas de Lino Molidas (en Frío)',
    ja: '挽き割りフラックスシード（亜麻仁）',
    fr: 'Graines de Lin Moulues (à Froid)',
    de: 'Gemahlene Leinsamen (Kaltgemahlen)',
    pt: 'Sementes de Linhaça Moídas (a Frio)',
    ko: '아마씨 분말 (냉압착 분쇄)',
    it: 'Semi di Lino Macinati (a Freddo)',
  },
  'fresh-parsley': {
    en: 'Fresh Chopped Parsley',
    es: 'Perejil Fresco Picado',
    ja: '生パセリ（みじん切り）',
    fr: 'Persil Frais Haché',
    de: 'Frische gehackte Petersilie',
    pt: 'Salsa Fresca Picada',
    ko: '신선한 다진 파슬리',
    it: 'Prezzemolo Fresco Tritato',
  },
  'watermelon': {
    en: 'Fresh Watermelon (Seedless Chunks)',
    es: 'Sandía Fresca (Trozos Sin Semillas)',
    ja: '生のスイカ（種抜きカット）',
    fr: 'Pastèque Fraîche (Morceaux Sans Pépins)',
    de: 'Frische Wassermelone (Kerne entfernt)',
    pt: 'Melancia Fresca (Pedaços Sem Sementes)',
    ko: '수박 (씨 뺀 조각)',
    it: 'Anguria Fresca (Pezzi Senza Semi)',
  },
  'freeze-dried-chicken': {
    en: 'Freeze-Dried Chicken Breast Bites',
    es: 'Bocaditos de Pechuga de Pollo Liofilizada',
    ja: 'フリーズドライ 鶏むね肉キューブ',
    fr: 'Bouchées de Blanc de Poulet Lyophilisé',
    de: 'Gefriergetrocknete Hühnerbrust-Häppchen',
    pt: 'Petiscos de Peito de Frango Liofilizado',
    ko: '동결건조 닭가슴살 큐브',
    it: 'Bocconcini di Petto di Pollo Liofilizzato',
  },
  'freeze-dried-salmon': {
    en: 'Freeze-Dried Wild Salmon Bites',
    es: 'Bocaditos de Salmón Salvaje Liofilizado',
    ja: 'フリーズドライ 天然サーモンキューブ',
    fr: 'Bouchées de Saumon Sauvage Lyophilisé',
    de: 'Gefriergetrocknete Wildlachs-Häppchen',
    pt: 'Petiscos de Salmão Selvagem Liofilizado',
    ko: '동결건조 자연산 연어 큐브',
    it: 'Bocconcini di Salmone Selvaggio Liofilizzato',
  },
  'kelp-powder': {
    en: 'Organic Sea Kelp Powder',
    es: 'Polvo de Alga Kelp Orgánica',
    ja: 'オーガニック 海藻ケルプ粉末',
    fr: 'Poudre de Varech / Kelp Bio',
    de: 'Bio-Seealgenmehl (Kelp)',
    pt: 'Pó de Alga Kelp Orgânica',
    ko: '유기농 다시마 (켈프) 분말',
    it: 'Polvere di Alga Kelp Biologica',
  },
  'cooked-quinoa': {
    en: 'Cooked Quinoa',
    es: 'Quinoa Cocida',
    ja: '炊いたキヌア',
    fr: 'Quinoa Cuit',
    de: 'Gekochte Quinoa',
    pt: 'Quinoa Cozida',
    ko: '삶은 퀴노아',
    it: 'Quinoa Cotta',
  },
  'turkey-bone-broth': {
    en: 'Turkey Bone Broth',
    es: 'Caldo de Huesos de Pavo',
    ja: 'ターキー（七面鳥）ボーンブロス',
    fr: "Bouillon d'Os de Dinde",
    de: 'Puten-Knochenbrühe',
    pt: 'Caldo de Ossos de Peru',
    ko: '칠면조 사골 육수 (본 브로스)',
    it: "Brodo d'Ossa di Tacchino",
  },
  'peanut-butter': {
    en: 'Pure Peanut Butter (Xylitol-Free)',
    es: 'Mantequilla de Cacahuete Pura (Sin Xilitol)',
    ja: '無添加ピーナッツバター（キシリトール不使用）',
    fr: 'Pur Beurre de Cacahuète (Sans Xylitol)',
    de: 'Reine Erdnussbutter (Xylit-Frei)',
    pt: 'Manteiga de Amendoim Pura (Sem Xilitol)',
    ko: '순수 땅콩버터 (자일리톨 무첨가)',
    it: "Burro d'Arachidi Puro (Senza Xilitolo)",
  },
  'goat-milk-powder': {
    en: 'Whole Goat Milk Powder',
    es: 'Leche de Cabra Entera en Polvo',
    ja: '全脂ヤギミルク粉末',
    fr: 'Poudre de Lait Entier de Chèvre',
    de: 'Vollmilch-Ziegenmilchpulver',
    pt: 'Leite de Cabra Integral em Pó',
    ko: '전지 산양유 파우더',
    it: 'Latte Intero di Capra in Polvere',
  },
  'coconut-flakes': {
    en: 'Unsweetened Coconut Flakes',
    es: 'Copos de Coco Sin Azúcar',
    ja: '無糖ココナッツフレーク',
    fr: 'Flocons de Noix de Coco Non Sucrés',
    de: 'Ungesüßte Kokosraspel',
    pt: 'Flocos de Coco Sem Açúcar',
    ko: '무가당 코코넛 플레이크',
    it: 'Fiocchi di Cocco Non Zuccherati',
  },
  'hemp-seed-oil': {
    en: 'Cold-Pressed Hemp Seed Oil',
    es: 'Aceite de Semillas de Cáñamo Prensado en Frío',
    ja: '低温圧搾ヘンプシードオイル',
    fr: 'Huile de Chanvre Pressée à Froid',
    de: 'Kaltgepresstes Hanfsamenöl',
    pt: 'Óleo de Semente de Cânhamo Prensado a Frio',
    ko: '냉압착 헴프씨드 오일 (대마종자유)',
    it: 'Olio di Semi di Canapa Spremuti a Freddo',
  },
  'duck-neck': {
    en: 'Freeze-Dried Duck Neck / Chew',
    es: 'Cuello de Pato Liofilizado',
    ja: 'フリーズドライ 鴨の首（ダックネック）',
    fr: 'Cou de Canard Lyophilisé',
    de: 'Gefriergetrockneter Entenhals',
    pt: 'Pescoço de Pato Liofilizado',
    ko: '동결건조 오리 목뼈 간식',
    it: "Collo d'Anatra Liofilizzato",
  },
  'spirulina': {
    en: 'Organic Spirulina Powder',
    es: 'Polvo de Espirulina Orgánica',
    ja: 'オーガニック スピルリナ粉末',
    fr: 'Poudre de Spiruline Bio',
    de: 'Bio-Spirulinapulver',
    pt: 'Pó de Spirulina Orgânica',
    ko: '유기농 스피루리나 분말',
    it: 'Polvere di Spirulina Biologica',
  },
  'pumpkin-seeds': {
    en: 'Raw Ground Pumpkin Seeds',
    es: 'Semillas de Calabaza Crudas Molidas',
    ja: '生の粉末かぼちゃの種',
    fr: 'Graines de Courge Crues Moulues',
    de: 'Rohe gemahlene Kürbiskerne',
    pt: 'Sementes de Abóbora Cruas Moídas',
    ko: '생 호박씨 분말',
    it: 'Semi di Zucca Crudi Macinati',
  },
  'krill-oil': {
    en: 'Antarctic Wild Krill Oil',
    es: 'Aceite de Kril Salvaje Antártico',
    ja: '南極産 天然オキアミ（クリル）オイル',
    fr: "Huile de Krill Sauvage de l'Antarctique",
    de: 'Wildes antarktisches Krillöl',
    pt: 'Óleo de Krill Selvagem Antártico',
    ko: '남극 자연산 크릴 오일',
    it: 'Olio di Krill Selvatico Antartico',
  },
  'raw-honey': {
    en: 'Raw Unfiltered Honey (Trace)',
    es: 'Miel Cruda Sin Filtrar (Traza)',
    ja: '生はちみつ（無濾過・微量）',
    fr: 'Miel Brut Non Filtré (Trace)',
    de: 'Roher ungefilterter Honig (Spuren)',
    pt: 'Mel Cru Não Filtrado (Traço)',
    ko: '비열처리 자연산 생꿀 (극소량)',
    it: 'Miele Grezzo Non Filtrato (Tracce)',
  },
};

export function getLocalizedIngredientName(id: string, defaultName: string, lang: Lang): string {
  const item = LOCALIZED_INGREDIENTS[id];
  if (!item) return defaultName;
  return item[lang] || item.en || defaultName;
}

export const STAGE_PREFIX_MAP: Record<Lang, { adult: string; puppy: string; senior: string }> = {
  en: { adult: 'Adult Complete', puppy: 'Puppy Growth & Skeletal DHA', senior: 'Senior Vitality & Mobility' },
  es: { adult: 'Adulto Completo', puppy: 'Cachorro Crecimiento y DHA', senior: 'Senior Vitalidad y Movilidad' },
  ja: { adult: '成犬用コンプリート', puppy: '子犬用 成長＆DHA配合', senior: 'シニア犬用 活力＆関節ケア' },
  fr: { adult: 'Adulte Complet', puppy: 'Chiot Croissance et DHA', senior: 'Senior Vitalité et Mobilité' },
  de: { adult: 'Adult Komplett', puppy: 'Welpen-Wachstum & Skelett-DHA', senior: 'Senior Vitalität & Mobilität' },
  pt: { adult: 'Adulto Completo', puppy: 'Filhote Crescimento e DHA', senior: 'Sênior Vitalidade e Mobilidade' },
  ko: { adult: '성견용 컴플리트', puppy: '자견용 성장 및 DHA 배합', senior: '시니어용 활력 및 관절 케어' },
  it: { adult: 'Adulto Completo', puppy: 'Cucciolo Crescita e DHA', senior: 'Senior Vitalità e Mobilità' },
};

export const DIET_SUFFIX_MAP: Record<Lang, Record<string, string>> = {
  en: {
    kibble: 'Dry Kibble',
    canned: 'Grain-Free Wet Loaf',
    mixed: 'Kibble & Fresh Topper Mix',
    fresh: 'Human-Grade Gently Cooked Bowl',
    raw: 'Freeze-Dried Raw BARF Patty',
  },
  es: {
    kibble: 'Pienso Seco',
    canned: 'Comida Húmeda Sin Cereales',
    mixed: 'Mezcla de Pienso y Topper Fresco',
    fresh: 'Plato Cocinado Grado Humano',
    raw: 'Medallón Crudo BARF Liofilizado',
  },
  ja: {
    kibble: 'ドライキブル',
    canned: 'グレインフリー ウェットフード',
    mixed: 'キブル＆フレッシュトッパー ミックス',
    fresh: 'ヒューマングレード 手作り調理ボウル',
    raw: 'フリーズドライ 生食BARFパティ',
  },
  fr: {
    kibble: 'Croquettes Sèches',
    canned: 'Pâtée Humide Sans Céréales',
    mixed: 'Mélange Croquettes et Topper Frais',
    fresh: 'Gamelle Cuisinée de Qualité Consommation Humaine',
    raw: 'Galette BARF Crue Lyophilisée',
  },
  de: {
    kibble: 'Trockenfutter',
    canned: 'Getreidefreies Nassfutter',
    mixed: 'Kroketten & Frische-Topper Mix',
    fresh: 'Schonend gekochtes Menü in Lebensmittelqualität',
    raw: 'Gefriergetrocknetes BARF-Patty',
  },
  pt: {
    kibble: 'Ração Seca',
    canned: 'Comida Húmida Sem Grãos',
    mixed: 'Mistura de Ração e Topper Fresco',
    fresh: 'Tigela Cozinhada de Grau Humano',
    raw: 'Hambúrguer Cru BARF Liofilizado',
  },
  ko: {
    kibble: '건식 사료',
    canned: '그레인프리 습식 사료',
    mixed: '사료 & 신선 토퍼 믹스',
    fresh: '휴먼그레이드 자연화식 식단',
    raw: '동결건조 생식 BARF 패티',
  },
  it: {
    kibble: 'Crocchette Secche',
    canned: 'Cibo Umido Senza Cereali',
    mixed: 'Mix Crocchette e Topper Fresco',
    fresh: 'Ciotola Cucinata di Grado Umano',
    raw: 'Tortino Crudo BARF Liofilizzato',
  },
};

export const PROTEIN_DISPLAY_MAP: Record<Lang, Record<string, string>> = {
  salmon: {
    en: 'Salmon',
    es: 'Salmón',
    ja: 'サーモン',
    fr: 'Saumon',
    de: 'Lachs',
    pt: 'Salmão',
    ko: '연어',
    it: 'Salmone',
  },
  beef: {
    en: 'Beef',
    es: 'Ternera',
    ja: '牛肉',
    fr: 'Bœuf',
    de: 'Rind',
    pt: 'Carne Bovina',
    ko: '소고기',
    it: 'Manzo',
  },
  chicken: {
    en: 'Chicken',
    es: 'Pollo',
    ja: '鶏肉',
    fr: 'Poulet',
    de: 'Huhn',
    pt: 'Frango',
    ko: '닭고기',
    it: 'Pollo',
  },
  turkey: {
    en: 'Turkey',
    es: 'Pavo',
    ja: '七面鳥',
    fr: 'Dinde',
    de: 'Truthahn',
    pt: 'Peru',
    ko: '칠면조',
    it: 'Tacchino',
  },
  lamb: {
    en: 'Lamb',
    es: 'Cordero',
    ja: 'ラム肉',
    fr: 'Agneau',
    de: 'Lamm',
    pt: 'Cordeiro',
    ko: '양고기',
    it: 'Agnello',
  },
  auto: {
    en: 'Salmon',
    es: 'Salmón',
    ja: 'サーモン',
    fr: 'Saumon',
    de: 'Lachs',
    pt: 'Salmão',
    ko: '연어',
    it: 'Salmone',
  },
};

export function formatFormulaTitle(stagePrefix: string, proteinLabel: string, dietSuffix: string, lang: Lang): string {
  if (lang === 'ja') return `${stagePrefix}（${proteinLabel}配合）${dietSuffix}`;
  if (lang === 'ko') return `${stagePrefix} (${proteinLabel} 배합) ${dietSuffix}`;
  if (lang === 'de') return `${stagePrefix} (${proteinLabel}-Rezeptur) ${dietSuffix}`;
  if (lang === 'es' || lang === 'pt') return `${stagePrefix} (Fórmula de ${proteinLabel}) ${dietSuffix}`;
  if (lang === 'fr' || lang === 'it') return `${stagePrefix} (Formula ${proteinLabel}) ${dietSuffix}`;
  return `${stagePrefix} (${proteinLabel} Formula) ${dietSuffix}`;
}

export function getLocalizedUnit(unit: string, count: number, lang: Lang): string {
  if (lang === 'en') {
    if (unit === 'tsp') return 'tsp';
    if (unit === 'tbsp') return 'tbsp';
    if (unit === 'cup') return count === 1 ? 'cup' : 'cups';
    if (unit === 'can') return count <= 1 ? 'can' : 'cans';
    if (unit === 'patty') return count <= 1 ? 'patty' : 'patties';
    if (unit === 'chew') return count <= 1 ? 'chew' : 'chews';
    if (unit === 'egg') return count <= 1 ? 'egg' : 'eggs';
    if (unit === 'piece') return count <= 1 ? 'piece' : 'pieces';
    if (unit === 'berries') return 'berries';
    if (unit === 'bites') return 'bites';
    if (unit === 'slices') return 'slices';
    if (unit === 'chunks') return 'chunks';
    if (unit === 'floret') return count <= 1 ? 'floret' : 'florets';
    if (unit === 'sardine') return count <= 1 ? 'sardine' : 'sardines';
    if (unit === 'heart') return count <= 1 ? 'heart' : 'hearts';
    if (unit === 'beans') return 'beans';
    return unit;
  }

  if (lang === 'es') {
    if (unit === 'tsp') return 'cdta';
    if (unit === 'tbsp') return 'cda';
    if (unit === 'cup') return count === 1 ? 'taza' : 'tazas';
    if (unit === 'can') return count <= 1 ? 'lata' : 'latas';
    if (unit === 'patty') return count <= 1 ? 'medallón' : 'medallones';
    if (unit === 'chew') return count <= 1 ? 'masticable' : 'masticables';
    if (unit === 'egg') return count <= 1 ? 'huevo' : 'huevos';
    if (unit === 'piece') return count <= 1 ? 'trozo' : 'trozos';
    if (unit === 'berries') return 'bayas';
    if (unit === 'bites') return 'bocaditos';
    if (unit === 'slices') return 'rodajas';
    if (unit === 'chunks') return 'trozos';
    if (unit === 'floret') return count <= 1 ? 'ramillete' : 'ramilletes';
    if (unit === 'sardine') return count <= 1 ? 'sardina' : 'sardinas';
    if (unit === 'heart') return count <= 1 ? 'corazón' : 'corazones';
    if (unit === 'beans') return 'vainas';
  }

  if (lang === 'ja') {
    if (unit === 'tsp') return '小さじ';
    if (unit === 'tbsp') return '大さじ';
    if (unit === 'cup') return 'カップ';
    if (unit === 'can') return '缶';
    if (unit === 'patty') return 'パティ';
    if (unit === 'chew') return '個（チュアブル）';
    if (unit === 'egg') return '個（卵）';
    if (unit === 'piece') return '個';
    if (unit === 'berries') return '粒';
    if (unit === 'bites') return '粒';
    if (unit === 'slices') return '切れ';
    if (unit === 'chunks') return '角切り';
    if (unit === 'floret') return '房';
    if (unit === 'sardine') return '尾';
    if (unit === 'heart') return '個';
    if (unit === 'beans') return '本';
  }

  if (lang === 'fr') {
    if (unit === 'tsp') return 'c. à café';
    if (unit === 'tbsp') return 'c. à soupe';
    if (unit === 'cup') return count === 1 ? 'tasse' : 'tasses';
    if (unit === 'can') return count <= 1 ? 'boîte' : 'boîtes';
    if (unit === 'patty') return count <= 1 ? 'galette' : 'galettes';
    if (unit === 'chew') return count <= 1 ? 'bouchée' : 'bouchées';
    if (unit === 'egg') return count <= 1 ? 'œuf' : 'œufs';
    if (unit === 'piece') return count <= 1 ? 'morceau' : 'morceaux';
    if (unit === 'berries') return 'baies';
    if (unit === 'bites') return 'bouchées';
    if (unit === 'slices') return 'tranches';
    if (unit === 'chunks') return 'morceaux';
    if (unit === 'floret') return count <= 1 ? 'fleurette' : 'fleurettes';
    if (unit === 'sardine') return count <= 1 ? 'sardine' : 'sardines';
    if (unit === 'heart') return count <= 1 ? 'cœur' : 'cœurs';
    if (unit === 'beans') return 'haricots';
  }

  if (lang === 'de') {
    if (unit === 'tsp') return 'TL';
    if (unit === 'tbsp') return 'EL';
    if (unit === 'cup') return count === 1 ? 'Tasse' : 'Tassen';
    if (unit === 'can') return count <= 1 ? 'Dose' : 'Dosen';
    if (unit === 'patty') return count <= 1 ? 'Patty' : 'Patties';
    if (unit === 'chew') return count <= 1 ? 'Kautablette' : 'Kautabletten';
    if (unit === 'egg') return count <= 1 ? 'Ei' : 'Eier';
    if (unit === 'piece') return count <= 1 ? 'Stück' : 'Stücke';
    if (unit === 'berries') return 'Beeren';
    if (unit === 'bites') return 'Häppchen';
    if (unit === 'slices') return 'Scheiben';
    if (unit === 'chunks') return 'Stücke';
    if (unit === 'floret') return 'Röschen';
    if (unit === 'sardine') return count <= 1 ? 'Sardine' : 'Sardinen';
    if (unit === 'heart') return count <= 1 ? 'Herz' : 'Herzen';
    if (unit === 'beans') return 'Bohnen';
  }

  if (lang === 'pt') {
    if (unit === 'tsp') return 'colh. chá';
    if (unit === 'tbsp') return 'colh. sopa';
    if (unit === 'cup') return count === 1 ? 'xícara' : 'xícaras';
    if (unit === 'can') return count <= 1 ? 'lata' : 'latas';
    if (unit === 'patty') return count <= 1 ? 'hambúrguer' : 'hambúrgueres';
    if (unit === 'chew') return count <= 1 ? 'mastigável' : 'mastigáveis';
    if (unit === 'egg') return count <= 1 ? 'ovo' : 'ovos';
    if (unit === 'piece') return count <= 1 ? 'pedaço' : 'pedaços';
    if (unit === 'berries') return 'bagas';
    if (unit === 'bites') return 'petiscos';
    if (unit === 'slices') return 'fatias';
    if (unit === 'chunks') return 'pedaços';
    if (unit === 'floret') return count <= 1 ? 'ramalhete' : 'ramalhetes';
    if (unit === 'sardine') return count <= 1 ? 'sardinha' : 'sardinhas';
    if (unit === 'heart') return count <= 1 ? 'coração' : 'corações';
    if (unit === 'beans') return 'feijões';
  }

  if (lang === 'ko') {
    if (unit === 'tsp') return '작은술';
    if (unit === 'tbsp') return '큰술';
    if (unit === 'cup') return '컵';
    if (unit === 'can') return '캔';
    if (unit === 'patty') return '패티';
    if (unit === 'chew') return '개 (츄어블)';
    if (unit === 'egg') return '개 (계란)';
    if (unit === 'piece') return '조각';
    if (unit === 'berries') return '알';
    if (unit === 'bites') return '개';
    if (unit === 'slices') return '조각';
    if (unit === 'chunks') return '조각';
    if (unit === 'floret') return '송이';
    if (unit === 'sardine') return '마리';
    if (unit === 'heart') return '개';
    if (unit === 'beans') return '개';
  }

  if (lang === 'it') {
    if (unit === 'tsp') return 'cucchiaino';
    if (unit === 'tbsp') return 'cucchiaio';
    if (unit === 'cup') return count === 1 ? 'tazza' : 'tazze';
    if (unit === 'can') return count <= 1 ? 'lattina' : 'lattine';
    if (unit === 'patty') return count <= 1 ? 'tortino' : 'tortini';
    if (unit === 'chew') return count <= 1 ? 'masticabile' : 'masticabili';
    if (unit === 'egg') return count <= 1 ? 'uovo' : 'uova';
    if (unit === 'piece') return count <= 1 ? 'pezzo' : 'pezzi';
    if (unit === 'berries') return 'bacche';
    if (unit === 'bites') return 'bocconcini';
    if (unit === 'slices') return 'fette';
    if (unit === 'chunks') return 'tocchetti';
    if (unit === 'floret') return count <= 1 ? 'cimetta' : 'cimette';
    if (unit === 'sardine') return count <= 1 ? 'sardina' : 'sardine';
    if (unit === 'heart') return count <= 1 ? 'cuore' : 'cuori';
    if (unit === 'beans') return 'fagiolini';
  }

  return unit;
}

export function localizeDoseText(dose: string, lang: Lang): string {
  if (lang === 'en' || !dose) return dose;

  return dose
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*tbsp\b/gi, (_m, n) => `${n} ${getLocalizedUnit('tbsp', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*tsp\b/gi, (_m, n) => `${n} ${getLocalizedUnit('tsp', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*cups?\b/gi, (_m, n) => `${n} ${getLocalizedUnit('cup', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*cans?\b/gi, (_m, n) => `${n} ${getLocalizedUnit('can', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*patt(?:y|ies)\b/gi, (_m, n) => `${n} ${getLocalizedUnit('patty', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*chews?\b/gi, (_m, n) => `${n} ${getLocalizedUnit('chew', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*whole\s*egg\b/gi, (_m, n) => {
      if (lang === 'es') return `${n} huevo entero`;
      if (lang === 'ja') return `${n}個（全卵）`;
      if (lang === 'fr') return `${n} œuf entier`;
      if (lang === 'de') return `${n} ganzes Ei`;
      if (lang === 'pt') return `${n} ovo inteiro`;
      if (lang === 'ko') return `${n}개 (통계란)`;
      if (lang === 'it') return `${n} uovo intero`;
      return `${n} whole egg`;
    })
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*egg\b/gi, (_m, n) => `${n} ${getLocalizedUnit('egg', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*small\s*piece\b/gi, (_m, n) => {
      if (lang === 'es') return `${n} trozo pequeño`;
      if (lang === 'ja') return `${n}個（小さめ）`;
      if (lang === 'fr') return `${n} petit morceau`;
      if (lang === 'de') return `${n} kleines Stück`;
      if (lang === 'pt') return `${n} pedaço pequeno`;
      if (lang === 'ko') return `${n}작은 조각`;
      if (lang === 'it') return `${n} piccolo pezzo`;
      return `${n} small piece`;
    })
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*pieces?\b/gi, (_m, n) => `${n} ${getLocalizedUnit('piece', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*small\s*floret\b/gi, (_m, n) => {
      if (lang === 'es') return `${n} ramillete pequeño`;
      if (lang === 'ja') return `${n}房（小さめ）`;
      if (lang === 'fr') return `${n} petite fleurette`;
      if (lang === 'de') return `${n} kleines Röschen`;
      if (lang === 'pt') return `${n} ramalhete pequeno`;
      if (lang === 'ko') return `${n}작은 송이`;
      if (lang === 'it') return `${n} piccola cimetta`;
      return `${n} small floret`;
    })
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*florets?\b/gi, (_m, n) => `${n} ${getLocalizedUnit('floret', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*thin\s*slices\b/gi, (_m, n) => {
      if (lang === 'es') return `${n} rodajas finas`;
      if (lang === 'ja') return `${n}薄切り`;
      if (lang === 'fr') return `${n} fines tranches`;
      if (lang === 'de') return `${n} dünne Scheiben`;
      if (lang === 'pt') return `${n} fatias finas`;
      if (lang === 'ko') return `${n}얇은 조각`;
      if (lang === 'it') return `${n} fette sottili`;
      return `${n} thin slices`;
    })
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*slices\b/gi, (_m, n) => `${n} ${getLocalizedUnit('slices', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*chunks\b/gi, (_m, n) => `${n} ${getLocalizedUnit('chunks', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*sardines?\b/gi, (_m, n) => `${n} ${getLocalizedUnit('sardine', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*hearts?\b/gi, (_m, n) => `${n} ${getLocalizedUnit('heart', parseFloat(n) || 1, lang)}`)
    .replace(/\b(\d+(?:\/\d+|\.[0-9]+)?)\s*beans\b/gi, (_m, n) => `${n} ${getLocalizedUnit('beans', parseFloat(n) || 1, lang)}`)
    .replace(/\bberries\b/gi, getLocalizedUnit('berries', 2, lang))
    .replace(/\bbites\b/gi, getLocalizedUnit('bites', 2, lang))
    .replace(/\bwhole piece\b/gi, (_m) => {
      if (lang === 'es') return '1 trozo entero';
      if (lang === 'ja') return '1個（丸ごと）';
      if (lang === 'fr') return '1 morceau entier';
      if (lang === 'de') return '1 ganzes Stück';
      if (lang === 'pt') return '1 pedaço inteiro';
      if (lang === 'ko') return '통째로 1조각';
      if (lang === 'it') return '1 pezzo intero';
      return '1 whole piece';
    });
}
