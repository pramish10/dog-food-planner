import { FAQS_DATA, type FaqItem } from '../data/faqs';
import type { Lang } from './ui';
// This vetted dictionary contains the remaining localized FAQ question/answer pairs.
// @ts-expect-error CommonJS dictionary is consumed by Vite at build time.
import { FAQ_EXTRA } from '../../scratch/build_faq_dict.cjs';

export interface LocalizedFaqItem extends Omit<FaqItem, 'category'> {
  category: string;
  categoryKey: FaqItem['category'];
}

export const FAQ_CATEGORY_TRANSLATIONS: Record<Lang, Record<string, string>> = {
  en: {
    'All Questions': 'All Questions',
    'Diet & Nutrition': 'Diet & Nutrition',
    'Health & Allergies': 'Health & Allergies',
    'Feeding Math & Portions': 'Feeding Math & Portions',
    'Ingredients & Safety': 'Ingredients & Safety',
    'Brand Reviews & Safety': 'Brand Reviews & Safety',
    'Glossary & Terms': 'Glossary & Terms',
  },
  es: {
    'All Questions': 'Todas las Preguntas',
    'Diet & Nutrition': 'Dieta y Nutrición',
    'Health & Allergies': 'Salud y Alergias',
    'Feeding Math & Portions': 'Cálculo de Ración y Porciones',
    'Ingredients & Safety': 'Ingredientes y Seguridad',
    'Brand Reviews & Safety': 'Análisis de Marcas y Alertas',
    'Glossary & Terms': 'Glosario y Términos',
  },
  ja: {
    'All Questions': 'すべての質問',
    'Diet & Nutrition': '食事と栄養学',
    'Health & Allergies': '健康とアレルギー',
    'Feeding Math & Portions': '給餌量とカロリー計算',
    'Ingredients & Safety': '食材と安全性',
    'Brand Reviews & Safety': 'ブランド評価・安全性',
    'Glossary & Terms': '獣医栄養用語集',
  },
  fr: {
    'All Questions': 'Toutes les Questions',
    'Diet & Nutrition': 'Alimentation & Nutrition',
    'Health & Allergies': 'Santé & Allergies',
    'Feeding Math & Portions': 'Calcul des Portions & Énergie',
    'Ingredients & Safety': 'Ingrédients & Toxicité',
    'Brand Reviews & Safety': 'Avis Marques & Rappels',
    'Glossary & Terms': 'Glossaire & Définitions',
  },
  de: {
    'All Questions': 'Alle Fragen',
    'Diet & Nutrition': 'Ernährung & Diät',
    'Health & Allergies': 'Gesundheit & Allergien',
    'Feeding Math & Portions': 'Futtermenge & Portionierung',
    'Ingredients & Safety': 'Zutaten & Sicherheit',
    'Brand Reviews & Safety': 'Markentests & Rückrufe',
    'Glossary & Terms': 'Glossar & Fachbegriffe',
  },
  pt: {
    'All Questions': 'Todas as Perguntas',
    'Diet & Nutrition': 'Alimentação & Nutrição',
    'Health & Allergies': 'Saúde e Alergias',
    'Feeding Math & Portions': 'Cálculo de Porções & Calorias',
    'Ingredients & Safety': 'Ingredientes e Segurança',
    'Brand Reviews & Safety': 'Avaliação de Marcas e Recalls',
    'Glossary & Terms': 'Glossário e Termos',
  },
  ko: {
    'All Questions': '전체 질문 보기',
    'Diet & Nutrition': '식단 및 영양학',
    'Health & Allergies': '건강 및 알레르기',
    'Feeding Math & Portions': '급여량 및 칼로리 계산',
    'Ingredients & Safety': '식재료 및 안전성',
    'Brand Reviews & Safety': '사료 브랜드 평가 및 안전',
    'Glossary & Terms': '수의 영양 용어집',
  },
  it: {
    'All Questions': 'Tutte le Domande',
    'Diet & Nutrition': 'Dieta e Nutrizione',
    'Health & Allergies': 'Salute e Allergie',
    'Feeding Math & Portions': 'Calcolo Dosi e Porzioni',
    'Ingredients & Safety': 'Ingredienti e Sicurezza',
    'Brand Reviews & Safety': 'Recensioni Marche e Sicurezza',
    'Glossary & Terms': 'Glossario e Termini',
  },
};

// Localized Q&A Overrides per slug and lang
type FaqTranslation = {
  question: string;
  shortAnswer: string;
  fullAnswerHtml?: string;
};

export const FAQ_CONTENT_TRANSLATIONS: Record<string, Partial<Record<Lang, FaqTranslation>>> = {
  'why-is-my-dog-not-eating-his-food-but-will-eat-treats': {
    es: {
      question: '¿Por qué mi perro no come su comida pero sí come premios?',
      shortAnswer: 'Si tu perro rechaza su pienso o comida habitual pero devora los premios, la causa suele ser capricho conductual (sabe que hay algo más sabroso), dolor dental al masticar comida seca o náusea leve.',
      fullAnswerHtml: `<p>Cuando un perro rechaza su cuenco habitual pero acepta golosinas, los veterinarios identifican cuatro causas principales:</p><ul><li><strong>Capricho aprendido:</strong> Los perros son inteligentes. Si al negarse a comer le añades queso o carne húmeda, aprenderá a esperar comida de mayor valor.</li><li><strong>Dolor dental:</strong> El pienso seco requiere gran presión mandibular. Si tiene sarro, gingivitis o una muela rota, la comida dura le dolerá mientras que los premios blandos se tragan con facilidad.</li><li><strong>Náusea estomacal o reflujo:</strong> Una comida pesada puede causarle malestar estomacal leve, mientras que un premio muy oloroso estimula su apetito momentáneo.</li><li><strong>Pienso rancio u oxidado:</strong> Las grasas del pienso se oxidan pasados 30 días de abrir el saco, generando olores que el perro rechaza.</li></ul><p><strong>Solución recomendada:</strong> Aplica la regla de los 15 minutos (retira el plato si no come), elimina sobras de mesa y acude al veterinario si el ayuno supera las 24-48 horas.</p>`
    },
    ja: {
      question: '愛犬がドッグフードを食べないのにおやつなら食べるのはなぜ？',
      shortAnswer: '通常のフードを拒否しておやつを欲しがる場合、わがまま（より美味しいご飯を待っている）、歯周病による口内痛、胃のむかつき、またはフードの酸化が主な原因です。',
      fullAnswerHtml: `<p>主食を食べずにおやつだけを食べる場合、獣医師は以下の要因を診断します：</p><ul><li><strong>学習された選り好み：</strong> 食べないとおやつやトッピングがもらえると学習した犬は、より嗜好性の高い食べ物を要求します。</li><li><strong>歯や歯茎の痛み：</strong> 硬いドライフードを噛む際、歯周病や破折歯があると強い痛みを感じます。柔らかいおやつなら噛まずに飲み込めるため食べることがあります。</li><li><strong>軽度の胃腸炎・胸やけ：</strong> 胃の不快感があると重い食事を拒否しますが、香りの強いおやつには反応します。</li><li><strong>フードの酸化・劣化：</strong> 開封から1ヶ月以上経過したフードは脂質が酸化し、愛犬の鋭い嗅覚で嫌悪感を示すことがあります。</li></ul><p><strong>推奨される対処法：</strong> 15分で皿を下げるルールを徹底し、間食をやめ、48時間以上拒否が続く場合は動物病院で歯科診察を受けてください。</p>`
    },
    fr: {
      question: 'Pourquoi mon chien refuse-t-il ses croquettes mais mange des friandises ?',
      shortAnswer: 'Si votre chien boude sa gamelle mais accepte les friandises, il s\'agit le plus souvent d\'un comportement de caprice appris, de douleurs dentaires rendant les croquettes dures douloureuses, ou d\'une légère nausée gastrique.',
      fullAnswerHtml: `<p>Face à ce comportement, les vétérinaires explorent quatre pistes :</p><ul><li><strong>Caprice appris :</strong> S\'il sait qu\'en refusant sa gamelle vous y ajouterez du fromage ou de la pâtée, il attendra patiemment une meilleure offre.</li><li><strong>Douleur bucco-dentaire :</strong> Croquer des aliments durs fait souffrir un chien atteint de tartre ou gingivite, alors qu\'une friandise tendre s\'avale sans effort.</li><li><strong>Légère gastrite ou reflux :</strong> Un repas copieux est repoussant pour un estomac barbouillé, mais une friandise très appétissante réveille son instinct.</li><li><strong>Oxydation des croquettes :</strong> Les graisses s\'oxydent 30 jours après ouverture du sac, créant une odeur rance désagréable.</li></ul>`
    },
    de: {
      question: 'Warum frisst mein Hund sein Futter nicht, nimmt aber Leckerlis?',
      shortAnswer: 'Wenn Ihr Hund normales Futter verweigert, aber gierig nach Leckerlis schnappt, liegt dies meist an erlernter Wähligkeit, Zahnschmerzen beim Kauen harter Kroketten oder leichter Übelkeit.',
      fullAnswerHtml: `<p>Tierärzte nennen hierfür vier Hauptgründe:</p><ul><li><strong>Erlernte Mäkigkeit:</strong> Hunde lernen schnell: Wer den Napf ignoriert, bekommt oft etwas Besseres vorgesetzt.</li><li><strong>Zahnschmerzen:</strong> Harte Trockenfutterbrocken schmerzen bei entzündetem Zahnfleisch oder lockeren Zähnen, weiche Snacks lassen sich leicht schlucken.</li><li><strong>Magenverstimmung:</strong> Eine große Mahlzeit überfordert einen leicht gereizten Magen, stark riechende Snacks nimmt der Hund dennoch.</li><li><strong>Ranziges Futter:</strong> Nach 30 Tagen im geöffneten Futtersack oxidieren Fette, was Hunde mit feiner Nase abstößt.</li></ul>`
    },
    pt: {
      question: 'Por que meu cachorro recusa a ração mas aceita petiscos?',
      shortAnswer: 'Se o cão recusa a refeição comum mas aceita petiscos prontamente, os motivos habituais são manha comportamental (sabe que virá algo mais gostoso), dor de dente ao mastigar ração dura ou náusea gástrica.',
      fullAnswerHtml: `<p>Veterinários apontam quatro causas principais:</p><ul><li><strong>Comportamento aprendido:</strong> Se ao recusar a comida ele ganha sachê ou queijo, ele aprende a esperar por recompensas mais saborosas.</li><li><strong>Dor bucal ou periodontal:</strong> Ração seca dura machuca gengivas inflamadas ou dentes quebrados. Petiscos macios são fáceis de engolir.</li><li><strong>Sensibilidade gástrica:</strong> Leves azias fazem refeições pesadas parecerem ruins, mas petiscos aromáticos ainda abrem o apetite.</li><li><strong>Ração oxidada:</strong> Após 30 dias de saco aberto, as gorduras oxidam e o cão recusa pelo olfato sensível.</li></ul>`
    },
    ko: {
      question: '강아지가 사료는 안 먹고 간식만 먹는 이유는 무엇인가요?',
      shortAnswer: '사료는 거부하면서 간식만 먹는다면 영리한 편식 습관, 치주염으로 인한 딱딱한 사료 저작 시 통증, 또는 개봉 후 산패된 사료 냄새 때문일 가능성이 높습니다.',
      fullAnswerHtml: `<p>수의학적으로 진단하는 주요 원인 4가지:</p><ul><li><strong>학습된 편식:</strong> 사료를 안 먹으면 더 맛있는 간식이나 습식 캔을 준다는 사실을 학습한 경우입니다.</li><li><strong>치아 및 잇몸 통증:</strong> 딱딱한 건식 사료를 씹을 때 치주염이나 치아 파절로 통증을 느끼면 부드러운 간식만 삼키려 합니다.</li><li><strong>경미한 소화불량 및 공복 구토:</strong> 속이 메스꺼우면 많은 양의 사료는 부담스러워하지만 향이 강한 간식은 섭취합니다.</li><li><strong>사료의 지방 산패:</strong> 개봉 후 한 달이 지나면 공기 중 산소로 인해 사료 기름이 산패되어 강아지가 냄새를 맡고 거부합니다.</li></ul>`
    },
    it: {
      question: 'Perché il cane rifiuta le crocchette ma mangia i biscottini?',
      shortAnswer: 'Se il cane rifiuta i suoi soliti pasti ma divora gli snack, il motivo è solitamente un vizio appreso, dolore alle gengive o ai denti nel masticare crocchette dure, oppure leggera nausea.',
      fullAnswerHtml: `<p>I veterinari individuano quattro cause frequenti:</p><ul><li><strong>Capriccio comportamentale:</strong> Se impara che rifiutando le crocchette riceverà cibo più goloso, resisterà in attesa dello snack.</li><li><strong>Dolore dentale:</strong> Le crocchette secche richiedono forza mandibolare. Con gengiviti o denti rotti masticare fa male, mentre gli snack morbidi scivolano via.</li><li><strong>Nausea o reflusso gastrico:</strong> Un pasto abbondante risulta sgradevole con lo stomaco sottosopra, ma uno snack profumato stimola l'istinto.</li><li><strong>Crocchette irrancidite:</strong> Dopo 30 giorni dall'apertura del sacco i grassi si ossidano emanando un odore respingente.</li></ul>`
    },
  },

  'can-dogs-eat-cat-food': {
    es: {
      question: '¿Pueden los perros comer comida de gato?',
      shortAnswer: 'Aunque una pequeña cantidad accidental no suele ser letal, los perros nunca deben comer comida para gatos con regularidad. Su altísima concentración de grasa y proteína puede causar pancreatitis aguda e insuficiencia renal.',
      fullAnswerHtml: `<p>Los gatos son <strong>carnívoros estrictos</strong>, mientras que los perros son omnívoros adaptativos. La comida de gato presenta serios peligros para los perros:</p><ul><li><strong>Riesgo de Pancreatitis:</strong> Los niveles de grasa superan el 20-30%, lo que puede desencadenar pancreatitis aguda fulminante en perros propensos.</li><li><strong>Exceso de Proteína y Fósforo:</strong> Sobrecarga la filtración renal canina con el tiempo.</li><li><strong>Falta de Fibra:</strong> Provoca desajustes en el microbioma y diarreas agudas.</li></ul>`
    },
    ja: {
      question: '犬にキャットフードを与えても大丈夫？',
      shortAnswer: '少量の盗み食いで命に関わることは稀ですが、日常的に与えるのは厳禁です。猫用フードはタンパク質と脂質が極めて高く、犬に急性膵炎や腎臓障害を引き起こす恐れがあります。',
      fullAnswerHtml: `<p>猫は<strong>完全肉食動物</strong>、犬は<strong>適応型雑食動物</strong>です。キャットフードを犬に与えてはいけない理由：</p><ul><li><strong>急性膵炎の危険性：</strong> キャットフードは高脂肪（20〜30％以上）のため、犬の消化器官に過度の負担をかけ膵炎を発症させるリスクがあります。</li><li><strong>高タンパクと腎臓への負担：</strong> 濃縮されたミネラルとタンパク質が犬の腎臓濾過機能を疲弊させます。</li><li><strong>タウリンとビタミン比率の違い：</strong> 猫に必要な添加栄養素が犬の腸内環境バランスを崩します。</li></ul>`
    },
    fr: {
      question: 'Les chiens peuvent-ils manger de la nourriture pour chat ?',
      shortAnswer: 'Un vol occasionnel de quelques croquettes pour chat n\'est pas mortel, mais une consommation régulière est dangereuse. Trop grasse et trop riche en protéines, elle peut déclencher une pancréatite aiguë chez le chien.',
      fullAnswerHtml: `<p>Le chat est un <strong>carnivore strict</strong>, le chien un omnivore à tendance carnivore. La nourriture pour félin présente de vrais dangers canins :</p><ul><li><strong>Risque élevé de pancréatite :</strong> Taux lipidique très supérieur, déclencheur classique d\'hospitalisation d\'urgence.</li><li><strong>Charge rénale excessive :</strong> Teneur très concentrée en minéraux et phosphore.</li></ul>`
    },
    de: {
      question: 'Dürfen Hunde Katzenfutter fressen?',
      shortAnswer: 'Ein versehentlicher Bissen ist selten tödlich, aber Katzenfutter darf niemals dauerhaft an Hunde gefüttert werden. Der hohe Fett- und Proteingehalt kann lebensbedrohliche Bauchspeicheldrüsenentzündungen (Pankreatitis) auslösen.',
      fullAnswerHtml: `<p>Katzen sind <strong>reine Fleischfresser</strong>, Hunde anpassungsfähige Allesfresser. Katzenfutter birgt akute Gefahren:</p><ul><li><strong>Pankreatitis-Gefahr:</strong> Extrem hohe Fettanteile können akute Entzündungen der Bauchspeicheldrüse provozieren.</li><li><strong>Überlastung der Nieren:</strong> Dauerhaft zu hohe Protein- und Phosphorwerte schädigen das Nierensystem des Hundes.</li></ul>`
    },
    pt: {
      question: 'Cachorro pode comer ração de gato?',
      shortAnswer: 'Um grão roubado esporadicamente não mata, mas cães jamais devem comer ração de gato com frequência. O excesso de gordura e proteína pode provocar pancreatite aguda grave e sobrecarga renal.',
      fullAnswerHtml: `<p>Gatos são <strong>carnívoros estritos</strong> e cães são carnívoros oportunistas. Riscos comprovados:</p><ul><li><strong>Risco de Pancreatite Aguda:</strong> Os níveis altíssimos de gordura da ração felina sobrecarregam o pâncreas canino.</li><li><strong>Sobrecarga Renal:</strong> Concentração excessiva de proteínas e minerais densos.</li></ul>`
    },
    ko: {
      question: '강아지가 고양이 사료를 먹어도 되나요?',
      shortAnswer: '어쩌다 한두 알 주워 먹은 것은 치명적이지 않지만, 상습 급여는 절대 안 됩니다. 고양이 사료는 단백질과 지방 함량이 매우 높아 강아지에게 급성 췌장염과 신장 손상을 유발합니다.',
      fullAnswerHtml: `<p>고양이는 <strong>완전 육식동물</strong>, 개는 <strong>육식 중심 잡식동물</strong>입니다. 치명적 이유:</p><ul><li><strong>급성 췌장염 위험:</strong> 고지방 배합으로 인해 미니어처 슈나우저, 코커스패니얼 등 췌장염 취약 견종에게 치명적입니다.</li><li><strong>신장 과부하:</strong> 고농도 단백질과 인 성분이 신장 여과 기능에 무리를 줍니다.</li></ul>`
    },
    it: {
      question: 'I cani possono mangiare il cibo per gatti?',
      shortAnswer: 'Un boccone rubato ogni tanto non è fatale, ma il cibo per gatti non deve mai diventare un\'abitudine. È troppo ricco di grassi e proteine e può causare pancreatite acuta e problemi renali al cane.',
      fullAnswerHtml: `<p>Il gatto è un <strong>carnivoro obbligato</strong>, il cane un onnivoro adattativo. Rischi principali:</p><ul><li><strong>Rischio Pancreatite:</strong> Livelli di grassi elevati che mandano in crisi il pancreas canino.</li><li><strong>Sovraccarico renale:</strong> Troppe proteine concentrate e fosforo mettono sotto sforzo i reni.</li></ul>`
    },
  },

  'is-blue-buffalo-good-dog-food': {
    es: {
      question: '¿Es Blue Buffalo una buena marca de comida para perros?',
      shortAnswer: 'Blue Buffalo es una marca comercial de gama media-alta que evita subproductos cárnicos y trigo/soja. Sin embargo, contiene niveles considerables de carbohidratos (40-50%) y ha registrado retiradas históricas de la FDA.',
      fullAnswerHtml: `<p>Blue Buffalo destaca por utilizar carnes reales deshuesadas en sus recetas y evitar conservantes artificiales. Como la mayoría de piensos extrusionados comerciales, el porcentaje de almidón sigue siendo elevado para aglutinar la croqueta.</p>`
    },
    ja: {
      question: 'ブルーバッファロー（Blue Buffalo）は良質なドッグフードですか？',
      shortAnswer: 'ブルーバッファローは副産物ミールや小麦・トウモロコシを避け、良質な生肉を第一原料にした高品質ブランドです。ただし炭水化物量は40〜50％あり、過去に米国FDAによる自主回収履歴があります。',
      fullAnswerHtml: `<p>独自の「ライフソース・ビッツ」で低温加熱のビタミン群を配合している点が特徴ですが、一般的なドライキブル同様、成形のための炭水化物を含みます。総合栄養食として安定していますが、生肉や野菜トッピングの併用がより推奨されます。</p>`
    },
    fr: {
      question: 'Blue Buffalo est-elle une bonne marque de nourriture pour chien ?',
      shortAnswer: 'Blue Buffalo est une marque commerciale de bonne réputation qui évite les sous-produits de volaille et le blé/maïs. Elle reste cependant riche en glucides (40-50%) et a connu plusieurs rappels par la FDA.',
      fullAnswerHtml: `<p>La viande désossée est généralement le premier ingrédient. Ses croquettes restent extrudées à haute température, ce qui justifie d'ajouter des aliments frais ou des toppers hydratants à la gamelle.</p>`
    },
    de: {
      question: 'Ist Blue Buffalo ein gutes Hundefutter?',
      shortAnswer: 'Blue Buffalo ist eine überdurchschnittliche Marke, die auf Nebenerzeugnisse und Weizen/Mais verzichtet. Dennoch enthält Trockenfutter fertigungsbedingt 40–50 % Kohlenhydrate.',
      fullAnswerHtml: `<p>Positiv hervorzuheben ist echtes Fleisch an erster Stelle der Deklaration. Für optimale Vitalität empfiehlt sich die Ergänzung mit schonend gegartem Frischfleisch und Omega-3-Ölen.</p>`
    },
    pt: {
      question: 'A ração Blue Buffalo é boa para cães?',
      shortAnswer: 'A Blue Buffalo é uma ração de padrão elevado que dispensa subprodutos e grãos como milho e trigo. Contudo, ainda possui teor moderado a alto de carboidratos e histórico de recalls no mercado americano.',
      fullAnswerHtml: `<p>Tem carne desossada como primeiro ingrediente e vitaminas preservadas a frio. É uma ração comercial confiável, mas se beneficia da adição de toppers úmidos naturais.</p>`
    },
    ko: {
      question: '블루 버팔로(Blue Buffalo) 사료는 강아지에게 좋은 사료인가요?',
      shortAnswer: '블루 버팔로는 부산물 육분, 옥수수, 밀, 대두를 배제하고 생육을 제1원료로 사용하는 프리미엄급 브랜드입니다. 다만 건식 사료 특성상 탄수화물 비율(40~50%)이 존재합니다.',
      fullAnswerHtml: `<p>냉압착 항산화 알갱이인 \'라이프소스 비츠\'를 함유하여 영양 균형이 우수합니다. 일반적인 건식 키블로 훌륭하지만, 신선한 자연식 토핑을 곁들이면 체내 수분 균형에 큰 도움이 됩니다.</p>`
    },
    it: {
      question: 'Blue Buffalo è un buon cibo per cani?',
      shortAnswer: 'Blue Buffalo è un marchio di fascia medio-alta che evita scarti animali e mais/frumento. Come tutte le crocchette estruse, contiene carboidrati (40-50%) necessari alla forma del croccantino.',
      fullAnswerHtml: `<p>Utilizza vera carne disossata al primo posto e complessi vitaminici a freddo. Una solida base commerciale a cui è consigliabile abbinare cibi freschi ricchi di idratazione.</p>`
    },
  },

  'what-is-the-best-dog-food': {
    es: {
      question: '¿Cuál es la mejor comida para perros?',
      shortAnswer: 'Nutricionalmente, la mejor comida para perros es una dieta natural de grado humano, cocinada a baja temperatura o cruda BARF equilibrada (80-10-10), rica en humedad biológica y proteínas animales de alto valor biológico.',
      fullAnswerHtml: `<p>La ciencia veterinaria actual coincide: cuanta más humedad natural y menor procesamiento térmico reciba el alimento, mayor será la esperanza de vida del perro y menor la incidencia de cálculos renales y alergias.</p>`
    },
    ja: {
      question: '愛犬にとって最も理想的なドッグフードとは？',
      shortAnswer: '獣医栄養学的に最も理想的なのは、ヒューマングレードの原材料を低温で優しく調理した手作りフレッシュフード、または適正に設計された80-10-10比率の生肉食（BARF）です。',
      fullAnswerHtml: `<p>高温高圧で加熱されるドライキブルと異なり、フレッシュフードや生食は70％以上の自然な水分と活性酵素、変性していないアミノ酸を愛犬の体に届けます。</p>`
    },
    fr: {
      question: 'Quelle est la meilleure nourriture pour chien ?',
      shortAnswer: 'D\'un point de vue nutritionnel, la meilleure nourriture est une ration ménagère fraîche à base d\'ingrédients de qualité consommation humaine, ou un régime cru BARF équilibré riche en hydratation naturelle.',
      fullAnswerHtml: `<p>La recherche vétérinaire démontre qu\'un taux d\'humidité biologique supérieur à 70% réduit significativement les risques d\'insuffisance rénale et de troubles digestifs chroniques.</p>`
    },
    de: {
      question: 'Was ist das beste Hundefutter?',
      shortAnswer: 'Aus tiermedizinischer Sicht ist frische, schonend gegarte Feuchtnahrung in Lebensmittelqualität oder eine ausgewogene 80-10-10 BARF-Rohfütterung das gesündeste Futter für Hunde.',
      fullAnswerHtml: `<p>Wissenschaftliche Studien belegen: Hoher natürlicher Feuchtigkeitsgehalt und minimale Hitzeverarbeitung schonen Nieren, Magen-Darm-Trakt und Gelenke auf lange Sicht.</p>`
    },
    pt: {
      question: 'Qual é a melhor comida para cachorro?',
      shortAnswer: 'Sob a ótica veterinária, a melhor opção é a alimentação natural (AN) cozida suavemente com ingredientes próprios para humanos, ou a dieta crua BARF balanceada na regra 80-10-10.',
      fullAnswerHtml: `<p>Comidas frescas preservam mais de 70% de hidratação biológica, diminuindo a sobrecarga renal e problemas de pele em comparação com ultraprocessados secos.</p>`
    },
    ko: {
      question: '가장 좋은 강아지 사료는 무엇인가요?',
      shortAnswer: '수의 영양학적으로 가장 우수한 식단은 휴먼그레이드 신선한 육류와 채소를 저온 조리한 자연 화식 또는 80-10-10 비율의 영양 균형 생식(BARF)입니다.',
      fullAnswerHtml: `<p>고열 압출 건식 사료와 달리 자연 화식은 70% 이상의 생체 수분과 변성되지 않은 필수 아미노산을 공급하여 신장 질환 및 결석 발생 위험을 획기적으로 낮춥니다.</p>`
    },
    it: {
      question: 'Qual è il miglior cibo per cani in assoluto?',
      shortAnswer: 'Dal punto di vista nutrizionale, il cibo migliore è una razione casalinga fresca cotta delicatamente a vapore con ingredienti ad uso umano, o una dieta cruda BARF bilanciata 80-10-10.',
      fullAnswerHtml: `<p>Gli alimenti freschi garantiscono oltre il 70% di idratazione naturale, preservando reni e apparato urinario rispetto alle crocchette secche industriali.</p>`
    },
  },
};

// Fallback dynamic generator for any FAQ not explicitly customized
export function getLocalizedFaq(slug: string, lang: Lang): LocalizedFaqItem | undefined {
  const baseFaq = FAQS_DATA.find(f => f.slug === slug);
  if (!baseFaq) return undefined;

  const categoryTranslation = FAQ_CATEGORY_TRANSLATIONS[lang]?.[baseFaq.category] || baseFaq.category;
  const custom = FAQ_CONTENT_TRANSLATIONS[slug]?.[lang] || FAQ_EXTRA[slug]?.[lang];

  if (custom) {
    return {
      ...baseFaq,
      question: custom.question || baseFaq.question,
      shortAnswer: custom.shortAnswer || baseFaq.shortAnswer,
      // Some concise FAQ answers intentionally have no long-form counterpart.
      // Render their localized answer rather than falling back to English body copy.
      fullAnswerHtml: custom.fullAnswerHtml || `<p>${custom.shortAnswer}</p>`,
      category: categoryTranslation,
      categoryKey: baseFaq.category,
    };
  }

  return {
    ...baseFaq,
    category: categoryTranslation,
    categoryKey: baseFaq.category,
  };
}

export function getLocalizedFaqs(lang: Lang): LocalizedFaqItem[] {
  return FAQS_DATA.map(faq => {
    const localized = getLocalizedFaq(faq.slug, lang);
    return localized || {
      ...faq,
      category: FAQ_CATEGORY_TRANSLATIONS[lang]?.[faq.category] || faq.category,
      categoryKey: faq.category,
    };
  });
}
