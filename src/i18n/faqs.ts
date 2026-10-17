import { FAQS_DATA, type FaqItem } from '../data/faqs';
import type { Lang } from './ui';
import { FAQ_EXTRA } from './faq-extra';

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
  'how-long-does-it-take-a-dog-to-digest-food': {
    es: {
      question: '¿Cuánto tiempo tarda un perro en digerir la comida?',
      shortAnswer: 'En promedio, un perro adulto tarda entre 6 y 10 horas en digerir una comida por completo. Sin embargo, el tiempo de tránsito varía drásticamente según la dieta: la comida cruda BARF y los alimentos frescos cocinados se digieren en 4 a 8 horas, mientras que el pienso seco comercial requiere de 10 a 14 horas debido a su bajo contenido de humedad y elevado nivel de almidón.',
      fullAnswerHtml: `
        <p>Conocer el tiempo de digestión canina es vital para programar paseos, comidas, medicamentos y detectar problemas gastrointestinales a tiempo. El sistema digestivo del perro es anatómicamente más corto y notablemente más ácido que el humano, diseñado para procesar proteínas animales con gran rapidez.</p>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-left text-xs sm:text-sm border-collapse border border-zinc-200 dark:border-zinc-800">
            <thead>
              <tr class="bg-amber-100/60 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold">
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Tipo de Dieta</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Vaciado Gástrico</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Tránsito Total</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Humedad y pH</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">Dieta Cruda BARF</td><td class="p-2.5">2 – 4 horas</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">4 – 8 horas</td><td class="p-2.5">70–75% humedad (pH 1.0–2.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Comida Natural Cocinada</td><td class="p-2.5">3 – 5 horas</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">6 – 8 horas</td><td class="p-2.5">70–75% humedad (pH 2.0–3.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">Comida Húmeda / Latas</td><td class="p-2.5">4 – 6 horas</td><td class="p-2.5 font-semibold text-amber-700 dark:text-amber-400">6 – 10 horas</td><td class="p-2.5">75–82% humedad (pH 2.5–3.5)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Pienso Seco Extrusionado</td><td class="p-2.5">6 – 8 horas</td><td class="p-2.5 font-semibold text-amber-800 dark:text-amber-500">10 – 14 horas</td><td class="p-2.5">8–10% humedad (pH 3.5–5.0)</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Factores que alteran la velocidad:</strong> El tamaño de la raza (los perros grandes tardan hasta 24-36 horas, las razas miniatura solo 4-6 horas), el nivel de hidratación y la edad. Nunca realices ejercicio intenso inmediatamente después de comer para prevenir la torsión de estómago (GDV).</p>
      `
    },
    fr: {
      question: 'Combien de temps faut-il à un chien pour digérer les aliments ?',
      shortAnswer: 'En moyenne, il faut entre 6 et 10 heures à un chien adulte pour digérer complètement un repas. La durée de transit varie fortement selon le régime : 4 à 8 heures pour une alimentation crue BARF ou une ration ménagère fraîche, contre 10 à 14 heures pour des croquettes sèches industrielles riches en amidon et pauvres en humidité.',
      fullAnswerHtml: `
        <p>Comprendre le temps de digestion chez le chien est fondamental pour rythmer les repas, les promenades et repérer les anomalies gastriques. Le tractus digestif canin est naturellement plus court et bien plus acide que celui de l'humain, favorisant la dégradation rapide des protéines animales.</p>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-left text-xs sm:text-sm border-collapse border border-zinc-200 dark:border-zinc-800">
            <thead>
              <tr class="bg-amber-100/60 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold">
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Type d'Alimentation</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Vidange Gastrique</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Transit Total</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Humidité & pH</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">BARF Cru Ancestral</td><td class="p-2.5">2 – 4 heures</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">4 – 8 heures</td><td class="p-2.5">70–75% humidité (pH 1.0–2.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Ration Ménagère Cuite</td><td class="p-2.5">3 – 5 heures</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">6 – 8 heures</td><td class="p-2.5">70–75% humidité (pH 2.0–3.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">Pâtée / Nourriture Humide</td><td class="p-2.5">4 – 6 heures</td><td class="p-2.5 font-semibold text-amber-700 dark:text-amber-400">6 – 10 heures</td><td class="p-2.5">75–82% humidité (pH 2.5–3.5)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Croquettes Sèches</td><td class="p-2.5">6 – 8 heures</td><td class="p-2.5 font-semibold text-amber-800 dark:text-amber-500">10 – 14 heures</td><td class="p-2.5">8–10% humidité (pH 3.5–5.0)</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Facteurs influents :</strong> La taille du chien (les petites races digèrent en 4-6h, les géants jusqu'à 36h) et l'exercice physique. Attendez toujours 1 heure après le repas avant toute activité intense pour écarter le risque mortel de dilatation-torsion de l'estomac (SDTE).</p>
      `
    },
    de: {
      question: 'Wie lange braucht ein Hund, um Futter zu verdauen?',
      shortAnswer: 'Ein ausgewachsener Hund benötigt im Durchschnitt 6 bis 10 Stunden für die Verdauung. Das Verdauungstempo variiert je nach Futterart erheblich: Artgerechtes BARF-Rohfutter und Schongar-Frischfutter werden in 4 bis 8 Stunden verdaut, während industrielles Trockenfutter aufgrund des hohen Stärkegehalts und der geringen Feuchtigkeit 10 bis 14 Stunden benötigt.',
      fullAnswerHtml: `
        <p>Die genaue Verdauungszeit bei Hunden zu kennen, ist entscheidend für Gassi-Zeiten, Fütterungsintervalle und die Erkennung von Magen-Darm-Problemen. Der Verdauungstrakt des Hundes ist deutlich kürzer und extrem säurebetont, um tierische Proteine und Knochen zügig aufzuschließen.</p>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-left text-xs sm:text-sm border-collapse border border-zinc-200 dark:border-zinc-800">
            <thead>
              <tr class="bg-amber-100/60 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold">
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Futterart</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Magenverweildauer</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Gesamte Passagezeit</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Feuchtigkeit & pH</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">Artgerechtes BARF (Roh)</td><td class="p-2.5">2 – 4 Stunden</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">4 – 8 Stunden</td><td class="p-2.5">70–75% Feuchte (pH 1.0–2.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Frisch gegartes Futter</td><td class="p-2.5">3 – 5 Stunden</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">6 – 8 Stunden</td><td class="p-2.5">70–75% Feuchte (pH 2.0–3.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">Nassfutter / Dosenfleisch</td><td class="p-2.5">4 – 6 Stunden</td><td class="p-2.5 font-semibold text-amber-700 dark:text-amber-400">6 – 10 Stunden</td><td class="p-2.5">75–82% Feuchte (pH 2.5–3.5)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Trockenfutter (Extrudat)</td><td class="p-2.5">6 – 8 Stunden</td><td class="p-2.5 font-semibold text-amber-800 dark:text-amber-500">10 – 14 Stunden</td><td class="p-2.5">8–10% Feuchte (pH 3.5–5.0)</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Wichtiger Tierarzt-Hinweis:</strong> Nach großen Mahlzeiten sollte der Hund mindestens 1 Stunde ruhen, um das Risiko einer lebensgefährlichen Magendrehung (Torsio ventriculi) zu minimieren.</p>
      `
    },
    pt: {
      question: 'Quanto tempo o cachorro leva para fazer a digestão dos alimentos?',
      shortAnswer: 'Em média, um cão adulto leva de 6 a 10 horas para concluir a digestão de uma refeição. O tempo de trânsito gastrointestinal varia drasticamente conforme o tipo de dieta: alimentos crus (BARF) e alimentação natural cozida digerem em 4 a 8 horas, enquanto rações secas comerciais levam de 10 a 14 horas devido ao baixo teor de umidade e alta concentração de carboidratos.',
      fullAnswerHtml: `
        <p>Entender o tempo de digestão do cão é essencial para definir horários de passeios, alimentação e identificar desconfortos gastrointestinais. O trato digestivo canino é biologicamente mais curto e extremamente ácido, ideal para digerir carnes e ossos crus rapidamente.</p>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-left text-xs sm:text-sm border-collapse border border-zinc-200 dark:border-zinc-800">
            <thead>
              <tr class="bg-amber-100/60 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold">
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Tipo de Dieta</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Esvaziamento Gástrico</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Trânsito Total</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Umidade e pH</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">Dieta Crua BARF</td><td class="p-2.5">2 – 4 horas</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">4 – 8 horas</td><td class="p-2.5">70–75% umidade (pH 1.0–2.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Alimentação Natural Cozida</td><td class="p-2.5">3 – 5 horas</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">6 – 8 horas</td><td class="p-2.5">70–75% umidade (pH 2.0–3.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">Comida Úmida / Sachê / Lata</td><td class="p-2.5">4 – 6 horas</td><td class="p-2.5 font-semibold text-amber-700 dark:text-amber-400">6 – 10 horas</td><td class="p-2.5">75–82% umidade (pH 2.5–3.5)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Ração Seca Extrusada</td><td class="p-2.5">6 – 8 horas</td><td class="p-2.5 font-semibold text-amber-800 dark:text-amber-500">10 – 14 horas</td><td class="p-2.5">8–10% umidade (pH 3.5–5.0)</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Fatores de velocidade:</strong> Cães pequenos têm trânsito mais rápido (4 a 6h) e cães gigantes levam até 36h. Evite brincadeiras e corridas logo após a refeição para prevenir a torção gástrica.</p>
      `
    },
    it: {
      question: 'Quanto tempo ci mette un cane a digerire il cibo?',
      shortAnswer: 'In media, un cane adulto impiega dalle 6 alle 10 ore per digerire completamente un pasto. Il tempo di transito varia notevolmente a seconda della ciotola: cibo fresco cotto e dieta cruda BARF vengono digeriti in sole 4-8 ore, mentre le crocchette secche industriali richiedono dalle 10 alle 14 ore a causa della scarsa idratazione e dell\'elevato contenuto di amidi.',
      fullAnswerHtml: `
        <p>Conoscere i tempi di digestione del cane è fondamentale per calcolare gli orari delle passeggiate, dei pasti e prevenire patologie gastrointestinali. L'apparato digerente del cane è compatto e molto acido, specializzato nello scomposizione rapida di carne e proteine animali.</p>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-left text-xs sm:text-sm border-collapse border border-zinc-200 dark:border-zinc-800">
            <thead>
              <tr class="bg-amber-100/60 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold">
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Tipo di Alimento</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Svuotamento Gastrico</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Transito Totale</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">Umidità & pH</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">Dieta Cruda BARF</td><td class="p-2.5">2 – 4 ore</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">4 – 8 ore</td><td class="p-2.5">70–75% umidità (pH 1.0–2.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Cibo Fresco Cotto</td><td class="p-2.5">3 – 5 ore</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">6 – 8 ore</td><td class="p-2.5">70–75% umidità (pH 2.0–3.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">Cibo Umido / Scatoletta</td><td class="p-2.5">4 – 6 ore</td><td class="p-2.5 font-semibold text-amber-700 dark:text-amber-400">6 – 10 ore</td><td class="p-2.5">75–82% umidità (pH 2.5–3.5)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">Crocchette Secche</td><td class="p-2.5">6 – 8 ore</td><td class="p-2.5 font-semibold text-amber-800 dark:text-amber-500">10 – 14 ore</td><td class="p-2.5">8–10% umidità (pH 3.5–5.0)</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Attenzione alla torsione gastrica:</strong> Evitare sforzi intensi o corse nelle 2 ore successive al pasto, specialmente nei cani di taglia grande o a torace profondo.</p>
      `
    },
    ja: {
      question: '犬がドッグフードを消化するのに何時間かかる？',
      shortAnswer: '成犬が食事を完全に消化・排泄するまでの所要時間は平均6〜10時間です。消化時間はフードの種類によって大きく異なり、自然な水分を含む生肉（BARF）や手作りフレッシュフードは4〜8時間で消化される一方、デンプンが多く乾燥した市販のドライキブルは10〜14時間かかります。',
      fullAnswerHtml: `
        <p>愛犬の消化時間を正しく理解することは、散歩のタイミング、投薬、体調不良の早期発見に欠かせません。犬の消化管は人間よりも短く強酸性で、肉類を短時間で分解することに特化しています。</p>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-left text-xs sm:text-sm border-collapse border border-zinc-200 dark:border-zinc-800">
            <thead>
              <tr class="bg-amber-100/60 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold">
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">フードの種類</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">胃の排出時間</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">全消化管通過時間</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">水分率 & 胃酸pH</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">生食 BARF</td><td class="p-2.5">2 – 4 時間</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">4 – 8 時間</td><td class="p-2.5">水分 70–75% (pH 1.0–2.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">手作り自然食（火通し）</td><td class="p-2.5">3 – 5 時間</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">6 – 8 時間</td><td class="p-2.5">水分 70–75% (pH 2.0–3.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">ウェットフード（缶詰）</td><td class="p-2.5">4 – 6 時間</td><td class="p-2.5 font-semibold text-amber-700 dark:text-amber-400">6 – 10 時間</td><td class="p-2.5">水分 75–82% (pH 2.5–3.5)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">ドライキブル（乾燥フード）</td><td class="p-2.5">6 – 8 時間</td><td class="p-2.5 font-semibold text-amber-800 dark:text-amber-500">10 – 14 時間</td><td class="p-2.5">水分 8–10% (pH 3.5–5.0)</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>胃捻転（GDV）の予防：</strong> 食後すぐの激しい運動や散歩は胃拡張・胃捻転症候群を引き起こす恐れがあるため、食後は必ず1時間以上の安静を保ってください。</p>
      `
    },
    ko: {
      question: '강아지가 음식을 소화하는 데 걸리는 시간은 몇 시간인가요?',
      shortAnswer: '성견 기준으로 식사를 완전히 소화하고 배변하기까지 평균 6~10시간이 소요됩니다. 소화 시간은 식단 형태에 따라 큰 차이를 보입니다. 수분이 풍부한 생식(BARF)이나 자연 화식은 4~8시간 만에 빠르게 소화 흡수되지만, 건식 사료는 수분 흡수와 높은 전분 함량으로 인해 10~14시간이 걸립니다.',
      fullAnswerHtml: `
        <p>반려견의 소화 시간을 이해하는 것은 배변 산책 시간 조절, 약물 투약 시간, 응급 상황 판단에 매우 중요합니다. 강아지의 소화관은 육식성에 가깝게 짧고 강산성으로 진화하여 고기를 빠르게 분해합니다.</p>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-left text-xs sm:text-sm border-collapse border border-zinc-200 dark:border-zinc-800">
            <thead>
              <tr class="bg-amber-100/60 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold">
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">식단 형태</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">위 배출 시간</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">전체 소화관 통과 시간</th>
                <th class="p-2.5 border border-zinc-200 dark:border-zinc-800">수분율 & 위산 pH</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">생식 (BARF)</td><td class="p-2.5">2 – 4 시간</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">4 – 8 시간</td><td class="p-2.5">수분 70–75% (pH 1.0–2.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">자연 화식 (스팀 조리)</td><td class="p-2.5">3 – 5 시간</td><td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-400">6 – 8 시간</td><td class="p-2.5">수분 70–75% (pH 2.0–3.0)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="p-2.5 font-medium">습식 캔 사료</td><td class="p-2.5">4 – 6 시간</td><td class="p-2.5 font-semibold text-amber-700 dark:text-amber-400">6 – 10 시간</td><td class="p-2.5">수분 75–82% (pH 2.5–3.5)</td></tr>
              <tr class="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"><td class="p-2.5 font-medium">익스트루전 건식 사료</td><td class="p-2.5">6 – 8 시간</td><td class="p-2.5 font-semibold text-amber-800 dark:text-amber-500">10 – 14 시간</td><td class="p-2.5">수분 8–10% (pH 3.5–5.0)</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>위염전(GDV) 주의사항:</strong> 식사 직후 과도한 달리기나 점프는 위가 꼬이는 치명적인 위염전을 유발할 수 있으므로, 식후 최소 1시간 동안은 안정을 취하게 해주세요.</p>
      `
    },
  },
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
      question: '¿Es Blue Buffalo una buena comida para perros? Análisis nutricional y de seguridad',
      shortAnswer: 'Blue Buffalo es una marca comercial de gama media-alta que destaca por utilizar carne real deshuesada como primer ingrediente y evitar subproductos avícolas, maíz, trigo y conservantes artificiales. No obstante, sus croquetas contienen entre un 40% y 50% de carbohidratos y cuentan con retiradas históricas de la FDA.',
      fullAnswerHtml: `
        <p><strong>Blue Buffalo</strong> es una de las marcas de comida para mascotas más vendidas y reconocidas. Fundada con el lema de alimentar a los perros como a la familia, se posicionó rechazando rellenos baratos como el maíz, el trigo y la soja en favor de carnes enteras y suplementos botánicos. A continuación presentamos una revisión veterinaria exhaustiva sobre su calidad nutricional:</p>

        <h3>1. Calidad de Ingredientes y Proteína Animal</h3>
        <ul>
          <li><strong>Carne real como primer ingrediente:</strong> Emplea carne fresca deshuesada (pollo, cordero, pavo o salmón salvaje), garantizando aminoácidos esenciales de alta digestibilidad para el soporte muscular y articular.</li>
          <li><strong>Sin harinas de subproductos avícolas:</strong> Descarta cabezas, patas o vísceras no identificadas, recurriendo a harinas de carne concentradas y etiquetadas (como harina de pollo o harina de pescado menhaden) para elevar el aporte proteico.</li>
          <li><strong>Fuentes de almidón:</strong> En sus recetas con grano (Life Protection), utiliza avena, cebada y arroz integral. En sus fórmulas libres de grano (Wilderness), emplea guisantes, almidón de tapioca y batatas.</li>
        </ul>

        <h3>2. Perfil de Macronutrientes y Nivel de Carbohidratos</h3>
        <p>Al igual que la inmensa mayoría de piensos secos extrusionados a altas temperaturas, requiere almidones aglutinantes para dar firmeza a la croqueta:</p>
        <ul>
          <li><strong>Proteína bruta (Materia Seca):</strong> Oscila entre el 24% y el 34% (alcanzando el 36% en Wilderness).</li>
          <li><strong>Grasa bruta:</strong> Entre el 14% y el 16%, aportando ácidos grasos omega-6 y energía constante.</li>
          <li><strong>Carbohidratos netos:</strong> Entre el 42% y el 50%. En perros sedentarios, un exceso prolongado de carbohidratos refinados puede propiciar sobrepeso y picos de glucosa.</li>
        </ul>

        <h3>3. Tecnología Exclusiva "LifeSource Bits"</h3>
        <p>Una característica patentada de Blue Buffalo son los pequeños gránulos negros mezclados con el pienso: los <em>LifeSource Bits</em>. Estos se conforman en frío a temperaturas notablemente inferiores para evitar que el calor extremo destruya vitaminas termolábiles (C y E), minerales quelados y antioxidantes procedentes de arándanos y linaza.</p>

        <h3>4. Historial de Recalls de la FDA</h3>
        <p>Durante la última década y media, la marca enfrentó varios retiros voluntarios de la FDA por exceso de Vitamina D (2010), presencia de humedad/hongos en golosinas (2015) y problemas de envasado en latas (2017). Desde su adquisición por General Mills en 2018, sus protocolos de laboratorio y auditorías de inocuidad se han reforzado considerablemente.</p>

        <h3>Veredicto Veterinario y Recomendación</h3>
        <p><a href="https://amzn.to/4gVmqiw" target="_blank" rel="noopener noreferrer sponsored" class="amazon-inline-link inline font-semibold text-black dark:text-[#ededed] underline decoration-black dark:decoration-zinc-300 decoration-1.5 underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer">Blue Buffalo Wilderness Chicken Adult Dry Dog Food</a> y sus líneas clásicas son opciones comerciales sólidas y por encima de la media. Para optimizar la salud de tu perro, se aconseja rehidratar siempre las croquetas con agua tibia o caldo de huesos casero sin sal, y complementar con un 10-20% de alimentos frescos (huevos al vapor, calabaza o aceite de salmón salvaje).</p>
      `
    },
    ja: {
      question: 'ブルーバッファロー（Blue Buffalo）は良質なドッグフードですか？獣医師の栄養評価',
      shortAnswer: 'ブルーバッファローは骨抜き生肉を第1主原料とし、副産物ミールや小麦・トウモロコシ・人工添加物を排除した高品質な市販フードです。総合栄養食として優れていますが、ドライキブル特有の炭水化物比率（40〜50％）や過去の米国FDA自主回収歴への理解が必要です。',
      fullAnswerHtml: `
        <p><strong>ブルーバッファロー（Blue Buffalo）</strong>は、愛犬を家族として大切にするという理念のもと開発されたプレミアムフードブランドです。トウモロコシや小麦、家禽副産物ミールを使用せず、本物の肉と機能性成分にこだわっています。以下に専門的視点からの詳細評価をまとめました：</p>

        <h3>1. 原材料の品質とタンパク質源</h3>
        <ul>
          <li><strong>生肉ファースト：</strong>骨抜きチキン、ラム、サーモンなどが第1原料で、消化吸収性の高いアミノ酸を提供します。</li>
          <li><strong>副産物ミール不使用：</strong>正体不明の肉骨粉や羽毛粉は一切使わず、チキンミールやニシンミールなど明確に特定されたタンパク源を使用。</li>
          <li><strong>炭水化物源：</strong>玄米、オーツ麦、大麦などの全粒穀物、または穀物不使用ライン（ウィルダネス）ではエンドウ豆やサツマイモを採用しています。</li>
        </ul>

        <h3>2. 栄養バランスと炭水化物比率</h3>
        <ul>
          <li><strong>粗タンパク質（乾物換算）：</strong>24％〜34％（高タンパクのウィルダネスは最大36％）。</li>
          <li><strong>粗脂肪：</strong>14％〜16％で皮膚被毛の健康をサポート。</li>
          <li><strong>炭水化物量：</strong>40％〜50％前後。一般的な押出成形ドライフードとして標準的ですが、運動量の少ない室内犬では給餌量の調整が大切です。</li>
        </ul>

        <h3>3. 独自技術「ライフソース・ビッツ」の利点</h3>
        <p>黒色の小さな粒「ライフソース・ビッツ」は、通常のキブルより低温で加工されています。高熱に弱いビタミンC・E、キレートミネラル、ブルーベリーやクランベリーの抗酸化物質の変性を防ぎ、生きた栄養素を体内に届けます。</p>

        <h3>4. 米国FDA回収履歴と品質管理体制</h3>
        <p>過去にビタミンD過剰（2010年）や湿気によるカビ懸念（2015年）で自主回収を行った経緯がありますが、2018年に大手食品メーカー「ゼネラル・ミルズ」傘下に入って以降、検査基準と製造環境の近代化が進んでいます。</p>

        <h3>総合評価とおすすめの与え方</h3>
        <p><a href="https://amzn.to/4gVmqiw" target="_blank" rel="noopener noreferrer sponsored" class="amazon-inline-link inline font-semibold text-black dark:text-[#ededed] underline decoration-black dark:decoration-zinc-300 decoration-1.5 underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer">ブルーバッファロー ウィルダネス 成犬用チキン</a>は市販の総合栄養食として十分信頼できます。さらなる健康増進には、ぬるま湯やボーンブロスでドライフードをふやかして水分補給を促し、オメガ3サーモンオイルや蒸し野菜をトッピングするのが理想的です。</p>
      `
    },
    fr: {
      question: 'Blue Buffalo est-elle une bonne nourriture pour chien ? Avis vétérinaire complet',
      shortAnswer: 'Blue Buffalo est une marque industrielle haut de gamme réputée pour utiliser de la viande fraîche désossée en premier ingrédient et exclure les sous-produits de volaille, le maïs, le blé et les additifs artificiels. Ses croquettes renferment toutefois 40 à 50 % de glucides et ont fait l\'objet de rappels historiques par la FDA.',
      fullAnswerHtml: `
        <p><strong>Blue Buffalo</strong> est l'une des marques d'aliments pour animaux les plus influentes en Amérique du Nord. Réputée pour son refus des sous-produits animaux de basse qualité et des céréales bon marché, elle offre une formulation au-dessus de la moyenne des supermarchés. Voici notre audit nutritionnel complet :</p>

        <h3>1. Qualité des Ingrédients et Protéines</h3>
        <ul>
          <li><strong>Viande désossée en premier :</strong> Poulet, dinde, agneau ou saumon frais constituent la base protéique indispensable au tonus musculaire.</li>
          <li><strong>Zéro sous-produit avicole :</strong> Aucun déchet d'abattoir indéterminé ; seules des farines de viandes nobles identifiées (farine de poulet, farine de poisson menhaden) sont utilisées pour enrichir la teneur protéique.</li>
          <li><strong>Sources de glucides :</strong> Riz brun, avoine et orge pour la gamme Life Protection ; fécule de pois et patates douces pour la gamme sans céréales Wilderness.</li>
        </ul>

        <h3>2. Teneur en Glucides et Macronutriments</h3>
        <ul>
          <li><strong>Protéines brutes (sur matière sèche) :</strong> 24 % à 34 % selon la gamme.</li>
          <li><strong>Matières grasses :</strong> Équilibrées entre 14 % et 16 % (riches en acides gras essentiels).</li>
          <li><strong>Glucides nets :</strong> 42 % à 50 %, nécessaires à l'extrusion mécanique des croquettes. Les chiens sédentaires devront être rationnés avec précision pour éviter l'embonpoint.</li>
        </ul>

        <h3>3. Les Granulés Brevetés « LifeSource Bits »</h3>
        <p>Ces petites pastilles foncées incorporées aux croquettes sont pressées à froid afin de préserver les vitamines hydrosolubles (C et B), les minéraux chélatés et les baies riches en antioxydants (myrtilles, canneberges) qui seraient autrement détruits par la cuisson industrielle.</p>

        <h3>4. Historique des Rappels FDA</h3>
        <p>Bien que Blue Buffalo ait fait l'objet de rappels volontaires par le passé (taux de vitamine D en 2010, humidité en 2015), son acquisition en 2018 par le groupe General Mills a conduit à un durcissement drastique des contrôles de sécurité sanitaire.</p>

        <h3>Verdict Vétérinaire et Conseils d'Alimentation</h3>
        <p>Les croquettes <a href="https://amzn.to/4gVmqiw" target="_blank" rel="noopener noreferrer sponsored" class="amazon-inline-link inline font-semibold text-black dark:text-[#ededed] underline decoration-black dark:decoration-zinc-300 decoration-1.5 underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer">Blue Buffalo Wilderness Poulet Adulte</a> constituent une base commerciale solide. Pour un bien-être digestif et rénal optimal, pensez à toujours humidifier le repas avec de l'eau tiède ou un bouillon d'os et à ajouter des toppers frais (huile de saumon sauvage, courgettes ou purée de courge).</p>
      `
    },
    de: {
      question: 'Ist Blue Buffalo ein gutes Hundefutter? Tierärztliche Bewertung & Analyse',
      shortAnswer: 'Blue Buffalo ist eine überdurchschnittliche Premiummarke, die echtes Fleisch als Hauptzutat deklariert und auf Geflügelnebenprodukte, Mais, Weizen und künstliche Konservierungsstoffe verzichtet. Der fertigungsbedingt Kohlenhydratanteil liegt jedoch bei 40–50 %, und die Marke verzeichnete historische FDA-Rückrufe.',
      fullAnswerHtml: `
        <p><strong>Blue Buffalo</strong> zählt im nordamerikanischen Raum zu den beliebtesten Tiernahrungsmarken im Fachhandel. Mit dem Leitsatz, Haustiere wie Familienmitglieder zu ernähren, verzichtet der Hersteller auf minderwertige Füllstoffe wie Soja, Mais und Weizen. Nachfolgend die veterinärmedizinische Bewertung:</p>

        <h3>1. Zutatenqualität und Proteinquellen</h3>
        <ul>
          <li><strong>Echtes Fleisch an 1. Stelle:</strong> Frisches entbeintes Hühner-, Lamm- oder Lachsfilet liefert hochverdauliche Aminosäuren für Muskulatur und Geweberegeneration.</li>
          <li><strong>Keine tierischen Nebenerzeugnisse:</strong> Ausschluss von Schnäbeln, Federn oder undefinierten Fetten. Es kommen ausschließlich klar benannte Fleischmehle zum Einsatz.</li>
          <li><strong>Kohlenhydratquellen:</strong> Brauner Reis, Hafer und Gerste bei getreidehaltigen Sorten; Erbsen und Süßkartoffeln bei getreidefreien Rezepturen (Wilderness).</li>
        </ul>

        <h3>2. Nährstoffprofil und Stärkeanteil</h3>
        <ul>
          <li><strong>Rohprotein (in der Trockensubstanz):</strong> 24 % bis 34 % (bei Wilderness bis zu 36 %).</li>
          <li><strong>Rohfett:</strong> 14 % bis 16 % für gesunde Haut und glänzendes Fell.</li>
          <li><strong>Kohlenhydrate:</strong> Ca. 42 % bis 50 % zur Bindung der Extrudatkrokette. Für wenig aktive Hunde sollte die Fütterungsmenge exakt abgewogen werden.</li>
        </ul>

        <h3>3. Die patentierten „LifeSource Bits“</h3>
        <p>Ein Alleinstellungsmerkmal sind die dunklen Kaltpress-Kroketten (LifeSource Bits). Sie werden bei niedriger Temperatur verarbeitet, damit hitzeempfindliche Vitamine (C und E), chelierte Spurenelemente und sekundäre Pflanzenstoffe aus Blaubeeren und Cranberries erhalten bleiben.</p>

        <h3>4. FDA-Rückrufhistorie und Qualitätskontrolle</h3>
        <p>In den Jahren 2010 (Vitamin D) und 2015 (Feuchtigkeitsprobleme) kam es zu freiwilligen Produktrückrufen. Seit der Übernahme durch General Mills im Jahr 2018 wurden die mikrobiologischen Kontrollsysteme und Werksprüfungen signifikant modernisiert.</p>

        <h3>Tierärztliches Fazit</h3>
        <p><a href="https://amzn.to/4gVmqiw" target="_blank" rel="noopener noreferrer sponsored" class="amazon-inline-link inline font-semibold text-black dark:text-[#ededed] underline decoration-black dark:decoration-zinc-300 decoration-1.5 underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer">Blue Buffalo Wilderness Chicken Adult Trockenfutter</a> ist ein zuverlässiges Alleinfutter über dem Marktdurchschnitt. Zur Förderung der Nierengesundheit empfiehlt sich das Einweichen mit warmem Wasser oder Knochenbrühe sowie das Ergänzen mit 10–20 % frischen Komponenten (Wildlachsöl, gedämpftes Ei oder Kürbispüree).</p>
      `
    },
    pt: {
      question: 'A ração Blue Buffalo é boa para cães? Análise veterinária e ingredientes',
      shortAnswer: 'A Blue Buffalo é uma ração comercial de padrão elevado que utiliza carne desossada real como primeiro ingrediente e elimina subprodutos de aves, milho, trigo, soja e corantes artificiais. Apesar de oferecer nutrição balanceada, apresenta teores de carboidratos entre 40% e 50% e possui histórico de recalls na FDA.',
      fullAnswerHtml: `
        <p>A <strong>Blue Buffalo</strong> é uma das marcas de alimentos caninos mais prestigiadas nos Estados Unidos e no mercado internacional. Com a proposta de tratar os animais como membros da família, a marca construiu sua reputação excluindo ingredientes de baixo custo nutricional (como milho, trigo, soja e restos de abatedouro). Confira a análise técnica detalhada:</p>

        <h3>1. Qualidade dos Ingredientes e Fontes Proteicas</h3>
        <ul>
          <li><strong>Carne real em primeiro lugar:</strong> Utiliza frango desossado, cordeiro ou salmão como primeiro ingrediente da lista, garantindo proteínas nobres com alta biodisponibilidade para a musculatura canina.</li>
          <li><strong>Zero farinha de subprodutos de aves:</strong> Não utiliza penas, patas ou gorduras animais não identificadas; apenas farinhas proteicas rastreáveis (farinha de frango, farinha de peixe menhaden).</li>
          <li><strong>Fontes de carboidratos:</strong> Grãos nobres como arroz integral, aveia e cevada na linha clássica; ervilhas, mandioca e batata-doce na linha grain-free Wilderness.</li>
        </ul>

        <h3>2. Perfil de Macronutrientes e Teor de Carboidratos</h3>
        <ul>
          <li><strong>Proteína Bruta (Matéria Seca):</strong> Varia de 24% a 34% (chegando a 36% na linha Wilderness de alta energia).</li>
          <li><strong>Extrato Etéreo (Gordura):</strong> Entre 14% e 16%, equilibrada para aporte de ômega-6 e saciedade.</li>
          <li><strong>Carboidratos Totais:</strong> Entre 42% e 50%, necessários ao processo térmico de extrusão. Cães sedentários requerem monitoramento de porção para prevenção de ganho de peso.</li>
        </ul>

        <h3>3. A Tecnologia dos "LifeSource Bits"</h3>
        <p>Um diferencial marcante da Blue Buffalo são os pequenos grãos pretos misturados na ração, chamados <em>LifeSource Bits</em>. Eles são processados a frio em temperaturas mais baixas que a croqueta comum, evitando a quebra térmica de vitaminas (C e E), minerais quelatados e antioxidantes naturais de mirtilos, cranberries e semente de linhaça.</p>

        <h3>4. Histórico de Recalls na FDA</h3>
        <p>A Blue Buffalo realizou recalls voluntários no mercado norte-americano no passado (excesso de vitamina D em 2010 e umidade em petiscos em 2015). A partir de 2018, com a incorporação da marca pelo conglomerado General Mills, os laboratórios de controle de qualidade e rastreabilidade foram substancialmente aprimorados.</p>

        <h3>Veredito Veterinário e Como Servir</h3>
        <p>A ração <a href="https://amzn.to/4gVmqiw" target="_blank" rel="noopener noreferrer sponsored" class="amazon-inline-link inline font-semibold text-black dark:text-[#ededed] underline decoration-black dark:decoration-zinc-300 decoration-1.5 underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer">Blue Buffalo Wilderness Chicken Adult Dry Dog Food</a> é uma ótima escolha industrial de nível super-premium. Para maximizar a saúde renal e digestiva, recomendamos reidratar os grãos com água morna ou caldo de ossos natural e adicionar toppers saudáveis (óleo de salmão selvagem, ovos cozidos ou purê de abóbora).</p>
      `
    },
    ko: {
      question: '블루 버팔로(Blue Buffalo) 사료는 강아지에게 좋은 사료인가요? 성분 및 영양 분석',
      shortAnswer: '블루 버팔로는 뼈를 발라낸 신선한 생육을 제1원료로 사용하며, 가금류 부산물 육분, 옥수수, 밀, 인공 보존제를 철저히 배제하는 프리미엄 브랜드입니다. 영양학적으로 훌륭한 기본 사료이나, 익스트루전 건식 사료 특유의 탄수화물 비율(40~50%)과 과거 FDA 리콜 이력을 고려해야 합니다.',
      fullAnswerHtml: `
        <p><strong>블루 버팔로(Blue Buffalo)</strong>는 반려동물을 가족처럼 대우한다는 철학으로 설립된 북미 대표 프리미엄 사료 브랜드입니다. 저가 곡물 필러와 가금류 부산물을 쓰지 않고 품질 좋은 생육과 기능성 보조제를 결합하여 인기가 높습니다. 수의 영양학적 기준에 입각한 분석 결과는 다음과 같습니다:</p>

        <h3>1. 원재료 품질 및 단백질 출처</h3>
        <ul>
          <li><strong>생육 제1원료 원칙:</strong> 뼈를 발라낸 순수 닭고기, 양고기, 연어를 1순위로 배치하여 생체 이용률이 뛰어난 필수 아미노산을 공급합니다.</li>
          <li><strong>부산물 분말 배제:</strong> 출처 불명의 동물 사체 부위나 깃털 분말을 배제하고, 명확히 검증된 치킨 밀이나 멘하덴 피시 밀을 사용하여 단백질 밀도를 보강합니다.</li>
          <li><strong>탄수화물 공급원:</strong> 라이프 프로텍션 라인은 현미, 오트밀, 보리를 사용하며, 그레인프리 라인인 윌더니스는 완두콩, 타피오카, 고구마를 사용합니다.</li>
        </ul>

        <h3>2. 다량 영양소 비율 및 탄수화물 함량</h3>
        <ul>
          <li><strong>조단백질 (건물 기준):</strong> 24%~34% (고에너지 윌더니스는 최대 36%).</li>
          <li><strong>조지방:</strong> 14%~16% 수준으로 피모 건강과 필수 지방산 공급에 적합.</li>
          <li><strong>탄수화물 비율:</strong> 알갱이 형성을 위한 전분 특성상 40%~50%를 차지합니다. 활동량이 적은 실내견은 비만 예방을 위해 정량 급여가 필수적입니다.</li>
        </ul>

        <h3>3. 특허받은 '라이프소스 비츠(LifeSource Bits)' 기술</h3>
        <p>블루 버팔로 사료에 섞여 있는 짙은 색의 둥근 알갱이는 저온 가공된 '라이프소스 비츠'입니다. 일반 사료 알갱이의 고열 고압 제조 과정에서 파괴되기 쉬운 비타민 C·E, 킬레이트 미네랄, 블루베리·크랜베리의 항산화 성분을 생생하게 보존합니다.</p>

        <h3>4. 미국 FDA 리콜 이력 및 안전성</h3>
        <p>2010년 비타민 D 수치 이슈 및 2015년 수분 관련 자발적 회수 조치가 있었으나, 2018년 글로벌 식품 기업 제너럴 밀스(General Mills)에 인수된 후 품질 검사 및 제조 설비 기준이 대폭 강화되었습니다.</p>

        <h3>수의학적 총평 및 급여 가이드</h3>
        <p><a href="https://amzn.to/4gVmqiw" target="_blank" rel="noopener noreferrer sponsored" class="amazon-inline-link inline font-semibold text-black dark:text-[#ededed] underline decoration-black dark:decoration-zinc-300 decoration-1.5 underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer">블루 버팔로 윌더니스 치킨 어덜트 건식 사료</a>는 상위권에 속하는 우수한 건식 사료입니다. 신장 결석 예방과 충분한 수분 보충을 위해 미온수나 뼈 국물을 부어 불려 급여하시고, 연어 오일이나 찐 달걀, 단호박 퓌레를 10~20% 토핑해주시면 더욱 이상적인 식단이 완성됩니다.</p>
      `
    },
    it: {
      question: 'Blue Buffalo è un buon cibo per cani? Recensione veterinaria e ingredienti',
      shortAnswer: 'Blue Buffalo è un marchio commerciale di fascia alta che impiega vera carne disossata come primo ingrediente ed esclude scarti di macellazione, mais, grano e coloranti sintetici. Pur fornendo nutrienti completi, presenta il 40–50% di carboidrati e annovera passati richiami sanitari FDA.',
      fullAnswerHtml: `
        <p><strong>Blue Buffalo</strong> è uno dei marchi di pet food premium più noti a livello globale. Nato per offrire ai cani una nutrizione priva di scarti economici (come glutine di mais, frumento o sottoprodotti avicoli non identificati), rappresenta un'opzione commerciale nettamente superiore alla media. Ecco la scheda tecnica completa:</p>

        <h3>1. Qualità degli Ingredienti e Proteine Nobili</h3>
        <ul>
          <li><strong>Vera carne disossata come primo ingrediente:</strong> Pollo, agnello, tacchino o salmone forniscono profili amminoacidici altamente digeribili per la salvaguardia di muscoli e difese immunitarie.</li>
          <li><strong>Assenza di farine di sottoprodotti avicoli:</strong> Esclusione totale di scarti di macellazione; vengono utilizzate esclusivamente farine proteiche chiare e tracciabili (farina di pollo, farina di pesce menhaden).</li>
          <li><strong>Carboidrati selezionati:</strong> Riso integrale, orzo e avena nella linea con cereali nobili; piselli e patate dolci nella gamma grain-free Wilderness.</li>
        </ul>

        <h3>2. Profilo Nutrizionale e Carboidrati</h3>
        <ul>
          <li><strong>Proteina Grezza (sostanza secca):</strong> Dal 24% al 34% (fino al 36% nella formulazione Wilderness).</li>
          <li><strong>Grassi Greggi:</strong> Tra il 14% e il 16%, ottimali per cute, pelo ed energia.</li>
          <li><strong>Livello di carboidrati:</strong> Tra il 42% e il 50%, essenziali per la struttura estrusa del croccantino. I cani sedentari necessitano di razionamento controllato.</li>
        </ul>

        <h3>3. Tecnologia dei "LifeSource Bits"</h3>
        <p>Il punto di forza brevettato di Blue Buffalo sono i croccantini scuri lavorati a freddo (LifeSource Bits). Essendo pressati a temperature inferiori, conservano inalterati vitamine termolabili (C ed E), minerali chelati e polifenoli antiossidanti estratti da mirtilli e semi di lino.</p>

        <h3>4. Cronologia dei Richiami FDA</h3>
        <p>In passato il marchio ha affrontato richiami volontari FDA (vitamina D nel 2010 e umidità negli snack nel 2015). Dopo l'acquisizione nel 2018 da parte di General Mills, i protocolli analitici e i controlli sui lotti sono stati portati a standard industriali rigorosi.</p>

        <h3>Verdetto del Veterinario</h3>
        <p>Le crocchette <a href="https://amzn.to/4gVmqiw" target="_blank" rel="noopener noreferrer sponsored" class="amazon-inline-link inline font-semibold text-black dark:text-[#ededed] underline decoration-black dark:decoration-zinc-300 decoration-1.5 underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer">Blue Buffalo Wilderness Pollo Adulti</a> offrono un'alimentazione commerciale affidabile. Per prevenire la disidratazione renale tipica del cibo secco, consigliamo di inumidire i pasti con acqua tiepida o brodo d'ossa non salato e arricchire la ciotola con ingredienti freschi (olio di salmone, uova sode o zucca).</p>
      `
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
