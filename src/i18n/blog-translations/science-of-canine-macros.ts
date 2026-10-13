import type { BlogPostLocalizedRecord } from './types';

export const scienceOfCanineMacrosTranslations: BlogPostLocalizedRecord = {
  es: {
    title: 'La Ciencia de los Macronutrientes Caninos: ¿Cuánta Proteína, Grasa y Carbohidratos Necesita tu Perro?',
    subtitle: 'Deja de adivinar el reparto de macronutrientes. Analizamos los estándares de valor biológico del NRC, las proporciones de ácidos grasos esenciales y la realidad metabólica de los carbohidratos en la dieta canina.',
    excerpt: 'Comprender los macronutrientes de tu perro es la clave para su vitalidad a largo plazo. Descubre el papel de la proteína animal, los ácidos grasos omega-3 y 6, y cómo calcular el análisis garantizado en materia seca.',
    readTime: '8 min de lectura',
    tags: ['Macronutrientes', 'Estándares AAFCO', 'Proteína', 'Grasas Saludables', 'Carbohidratos', 'Cálculo de Calorías'],
    keyTakeaways: [
      'Los perros no tienen un requerimiento mínimo de carbohidratos según el National Research Council (NRC); su combustible principal son proteínas animales limpias y grasas bioasimilables.',
      'La calidad proteica se mide por su valor biológico (VB) y perfil de aminoácidos, no solo por el porcentaje bruto de la etiqueta.',
      'Los ácidos grasos omega-3 marinos (EPA y DHA) tienen un potente efecto antiinflamatorio que protege articulaciones, riñones y función cognitiva.',
      'Los porcentajes de la etiqueta comercial están en "materia húmeda/tal cual" y deben convertirse a Materia Seca (DMB) para comparar pienso, latas o comida fresca.'
    ],
    tableOfContents: [
      { id: 'introduction-to-canine-macronutrients', title: '1. Introducción a los Macronutrientes Caninos' },
      { id: 'protein-the-biological-building-block', title: '2. La Proteína: El Bloque Biológico Fundamental' },
      { id: 'fats-the-primary-energy-source', title: '3. Las Grasas: La Fuente Principal de Energía' },
      { id: 'the-carbohydrate-controversy', title: '4. La Controversia de los Carbohidratos' },
      { id: 'dry-matter-basis-calculation', title: '5. Cómo Calcular la Materia Seca (DMB)' },
      { id: 'optimal-macro-splits-by-lifestyle', title: '6. Distribución Óptima según Estilo de Vida' },
      { id: 'vet-summary-and-action-steps', title: '7. Resumen y Recomendaciones Prácticas' }
    ],
    contentHtml: `
      <p class="lead">Al recorrer cualquier tienda de mascotas o explorar marcas de comida fresca, encontramos porcentajes destacados: <em>"¡32% de Proteína Bruta!"</em>, <em>"¡Energía Libre de Granos!"</em>, <em>"¡Fórmula Baja en Grasa!"</em>. Pero sin comprender cómo metaboliza el perro cada nutriente, esos números carecen de sentido real.</p>
      <p>Los perros pertenecen taxonómicamente al orden <em>Carnivora</em> y son carnívoros facultativos y adaptativos. Aunque pueden sintetizar glucosa mediante gluconeogénesis, su fisiología y órganos internos prosperan cuando se alimentan con tejidos animales de alto valor biológico y lípidos saludables.</p>

      <h2 id="introduction-to-canine-macronutrients">1. Introducción a los Macronutrientes Caninos</h2>
      <p>Cada caloría que consume tu perro procede de tres fuentes: <strong>Proteína</strong> (4 kcal/g), <strong>Grasa</strong> (9 kcal/g) y <strong>Carbohidratos</strong> (4 kcal/g). A diferencia de los humanos, cuyo rendimiento depende predominantemente de carbohidratos, la maquinaria metabólica canina funciona impulsada por lípidos.</p>

      <div class="callout callout-vet">
        <div class="callout-title">🐾 Dato Veterinario</div>
        <p>Un perro de trineo en la carrera de 1.600 km de Iditarod consume hasta 12.000 calorías diarias con una dieta de aproximadamente 60% de grasa, 35% de proteína y menos del 5% de carbohidratos. La densidad mitocondrial muscular canina permite oxidar ácidos grasos libres con máxima eficiencia.</p>
      </div>

      <h2 id="protein-the-biological-building-block">2. La Proteína: El Bloque Biológico Fundamental</h2>
      <p>La proteína no es un simple combustible; conforma la estructura viva del cuerpo de tu perro. Aporta los 10 aminoácidos esenciales que no puede sintetizar por sí mismo: <em>arginina, histidina, isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptófano y valina</em>.</p>

      <h2 id="fats-the-primary-energy-source">3. Las Grasas: La Fuente Principal de Energía</h2>
      <p>Las grasas aportan más del doble de densidad calórica que las proteínas y carbohidratos, funcionando como la principal reserva de resistencia mientras transportan vitaminas liposolubles (A, D, E y K). Los ácidos grasos esenciales omega-3 y omega-6 son indispensables para la elasticidad de la membrana celular y el pelaje.</p>

      <h2 id="the-carbohydrate-controversy">4. La Controversia de los Carbohidratos</h2>
      <p>Ni la AAFCO ni el NRC establecen un requerimiento mínimo de carbohidratos para perros. Aunque poseen genes de amilasa pancreática (AMY2B) para digerir almidón, un exceso de carbohidratos refinados (45-60% en piensos industriales) favorece picos glucémicos, obesidad e inflamación sistémica.</p>

      <h2 id="dry-matter-basis-calculation">5. Cómo Calcular la Materia Seca (DMB)</h2>
      <p>No se puede comparar directamente una lata con 10% de proteína y un pienso seco con 26%, porque el agua diluye los porcentajes. Para calcular el porcentaje real en Materia Seca (DMB):</p>
      <ol>
        <li>Resta el porcentaje de humedad al 100% para obtener la Materia Seca total.</li>
        <li>Divide el porcentaje de proteína indicado entre la Materia Seca.</li>
        <li>Multiplica por 100.</li>
      </ol>

      <h2 id="optimal-macro-splits-by-lifestyle">6. Distribución Óptima según Estilo de Vida</h2>
      <ul>
        <li><strong>Adultos Activos:</strong> 28–36% Proteína, 16–22% Grasa, 15–25% Carbohidratos de bajo índice glucémico.</li>
        <li><strong>Perros con Sobrepeso o Sedentarios:</strong> 34–42% Proteína (para preservar masa muscular), 10–14% Grasa, 20–30% Carbohidratos ricos en fibra.</li>
        <li><strong>Perros de Trabajo o Deporte:</strong> 30–35% Proteína, 22–30% Lípidos de alta densidad, &lt;15% Carbohidratos.</li>
      </ul>

      <h2 id="vet-summary-and-action-steps">7. Resumen y Recomendaciones Prácticas</h2>
      <p>Para mejorar la ración de tu perro hoy mismo, prioriza la densidad nutricional sobre el marketing comercial. Calcula el requerimiento energético de tu perro con nuestra calculadora y añade omega-3 de origen marino para apoyar su salud celular.</p>
    `
  },
  ja: {
    title: '犬の三大栄養素の科学：タンパク質・脂質・炭水化物の最適な給餌バランス',
    subtitle: 'なんとなくの給餌量はもう終わり。NRC（米国学術研究会議）の生物価基準、必須脂肪酸比率、そして犬の消化生理から導く炭水化物の真実を徹底解説。',
    excerpt: '三大栄養素の代謝メカニズムを理解することが愛犬の健康長寿の土台です。動物性タンパク質の質、海洋性オメガ3の抗炎症効果、保証分析値から乾物重量（DMB）を換算する方法を学びましょう。',
    readTime: '読了目安 8分',
    tags: ['三大栄養素', 'AAFCO基準', 'タンパク質', '良質な脂質', '炭水化物', 'カロリー計算'],
    keyTakeaways: [
      'NRC（米国学術研究会議）基準において、犬に炭水化物の最低必須摂取量は定められていません。犬の主要エネルギー源は動物性タンパク質と良質な脂質です。',
      'タンパク質の質は、パッケージに記載された粗タンパク質量だけでなく、アミノ酸スコアと生物価（BV）によって決まります。',
      '魚油由来の海洋性オメガ3（EPA・DHA）は強力な抗炎症作用を持ち、関節・腎臓・脳の健康を生涯にわたってサポートします。',
      '市販フードの保証分析値は水分を含む「給餌時重量」であるため、乾物重量ベース（DMB）に換算して比較することが重要です。'
    ],
    tableOfContents: [
      { id: 'introduction-to-canine-macronutrients', title: '1. 犬の三大栄養素の基礎知識' },
      { id: 'protein-the-biological-building-block', title: '2. タンパク質：身体を構成する生命の基礎' },
      { id: 'fats-the-primary-energy-source', title: '3. 脂質：犬にとっての最重要エネルギー源' },
      { id: 'the-carbohydrate-controversy', title: '4. 炭水化物を巡る議論と正しい捉え方' },
      { id: 'dry-matter-basis-calculation', title: '5. 乾物重量ベース（DMB）の計算方法' },
      { id: 'optimal-macro-splits-by-lifestyle', title: '6. ライフステージ別の理想的な栄養比率' },
      { id: 'vet-summary-and-action-steps', title: '7. 獣医師からのまとめと今日からできる実践ステップ' }
    ],
    contentHtml: `
      <p class="lead">ペットフードの売り場に行くと、「粗タンパク質32%！」「グレインフリー！」「低脂肪設計！」といった魅力的な言葉が並んでいます。しかし、犬が三大栄養素をどのように消化・吸収するかを理解していなければ、パッケージの数値だけで正しい判断はできません。</p>
      <p>犬は分類学上「食肉目（Carnivora）」に属し、肉食寄りの適応型雑食動物です。糖新生によってアミノ酸からブドウ糖を合成できますが、内臓器官や代謝が最も健康に機能するのは、高生物価な動物性肉類と健康的な脂質を中心とした食事です。</p>

      <h2 id="introduction-to-canine-macronutrients">1. 犬の三大栄養素の基礎知識</h2>
      <p>愛犬が摂取するカロリーは、<strong>タンパク質</strong>（4 kcal/g）、<strong>脂質</strong>（9 kcal/g）、<strong>炭水化物</strong>（4 kcal/g）の3つに分類されます。ヒトの身体が主に炭水化物をエネルギーとして利用するのに対し、犬の代謝システムは根本的に脂質主導で動いています。</p>

      <div class="callout callout-vet">
        <div class="callout-title">🐾 獣医学的事実</div>
        <p>1,600kmを走破するアイディタロッドのソリ犬は、1日あたり約12,000kcalを消費します。その食事構成は脂質約60%、タンパク質35%、炭水化物5%未満です。犬の筋肉内ミトコンドリア密度は極めて高く、遊離脂肪酸を極めて高い効率で燃焼できます。</p>
      </div>

      <h2 id="protein-the-biological-building-block">2. タンパク質：身体を構成する生命の基礎</h2>
      <p>タンパク質は単なるエネルギー源ではなく、筋肉・内臓・免疫細胞そのものを構築する原材料です。食事から必ず補給しなければならない10種類の必須アミノ酸（アルギニン、ヒスチジン、イソロイシン、ロイシン、リジン、メチオニン、フェニルアラニン、トレオニン、トリプトファン、バリン）が含まれています。</p>

      <h2 id="fats-the-primary-energy-source">3. 脂質：犬にとっての最重要エネルギー源</h2>
      <p>脂質はタンパク質や炭水化物の2倍以上のカロリー密度を持ち、持久力の源となるだけでなく、脂溶性ビタミン（A, D, E, K）の吸収に不可欠です。海洋性オメガ3（EPA・DHA）は皮膚被毛の艶を保ち、シニア期の関節炎症を和らげます。</p>

      <h2 id="the-carbohydrate-controversy">4. 炭水化物を巡る議論と正しい捉え方</h2>
      <p>NRC基準において炭水化物の必須摂取量はゼロです。デンプンを分解するアミラーゼ遺伝子は持っているものの、過剰な精製穀物や高GI炭水化物は血糖値の急上昇、肥満、慢性炎症の引き金となります。一方で、カボチャやオーツ麦の適量な水溶性食物繊維は善玉菌のエサとなり、腸内環境を整えます。</p>

      <h2 id="dry-matter-basis-calculation">5. 乾物重量ベース（DMB）の計算方法</h2>
      <p>水分が75%含まれるウェットフードと水分10%のドライフードを比較するには、水分を除いた「乾物重量（DMB）」で計算します：</p>
      <ol>
        <li>100%から水分率を引いて、乾物率を求めます。</li>
        <li>表示されたタンパク質率を乾物率で割ります。</li>
        <li>100を掛けると、真のタンパク質濃度（%）が算出されます。</li>
      </ol>

      <h2 id="optimal-macro-splits-by-lifestyle">6. ライフステージ別の理想的な栄養比率</h2>
      <ul>
        <li><strong>活動的な成犬：</strong> タンパク質 28〜36%、脂質 16〜22%、低GI炭水化物 15〜25%</li>
        <li><strong>減量が必要な犬・運動量の少ない犬：</strong> タンパク質 34〜42%（筋肉維持）、低脂質 10〜14%、高繊維質 20〜30%</li>
        <li><strong>使役犬・アジリティ競技犬：</strong> タンパク質 30〜35%、高脂質 22〜30%、炭水化物 15%未満</li>
      </ul>

      <h2 id="vet-summary-and-action-steps">7. 獣医師からのまとめと今日からできる実践ステップ</h2>
      <p>派手なパッケージの宣伝文句に惑わされず、原材料上位3つが明確な動物性肉類であるかを確認しましょう。当サイトの無料給餌量計算ツールで愛犬の適正エネルギーを算出し、魚油トッピング等で健康寿命を伸ばしてあげましょう。</p>
    `
  },
  fr: {
    title: 'La Science des Macronutriments Canins : Protéines, Lipides et Glucides pour Votre Chien',
    subtitle: 'Ne devinez plus la répartition nutritionnelle de votre chien. Découvrez les normes NRC, la valeur biologique des protéines et la réalité métabolique des glucides.',
    excerpt: 'Comprendre l\'équilibre des macronutriments est la clé de la vitalité de votre chien. Découvrez l\'importance des protéines animales, des oméga-3 et le calcul en matière sèche (DMB).',
    readTime: '8 min de lecture',
    tags: ['Macronutriments', 'Normes AAFCO', 'Protéines', 'Bonnes Graisses', 'Glucides', 'Calcul Calorique'],
    keyTakeaways: [
      'Les chiens n\'ont aucun besoin nutritionnel minimal en glucides selon le NRC ; leur métabolisme carbure aux protéines animales et aux acides gras bio-assimilables.',
      'La qualité d\'une protéine dépend de son profil en acides aminés et de sa valeur biologique, et non du simple taux brut sur l\'emballage.',
      'Les oméga-3 marins (EPA et DHA) apportent une puissante action anti-inflammatoire protégeant articulations, reins et cerveau.',
      'Les analyses figurant sur les sacs sont exprimées en produit brut et doivent être converties sur base matière sèche (DMB) pour comparer croquettes et pâtées.'
    ],
    tableOfContents: [
      { id: 'introduction-to-canine-macronutrients', title: '1. Les Macronutriments chez le Chien' },
      { id: 'protein-the-biological-building-block', title: '2. Les Protéines : Briques Fondamentales' },
      { id: 'fats-the-primary-energy-source', title: '3. Les Lipides : La Source d\'Énergie Principale' },
      { id: 'the-carbohydrate-controversy', title: '4. La Controverse des Glucides' },
      { id: 'dry-matter-basis-calculation', title: '5. Calcul de la Matière Sèche (DMB)' },
      { id: 'optimal-macro-splits-by-lifestyle', title: '6. Répartition Idéale selon le Mode de Vie' },
      { id: 'vet-summary-and-action-steps', title: '7. Recommandations Pratiques du Vétérinaire' }
    ],
    contentHtml: `
      <p class="lead">Dans les rayons d'animalerie, les étiquettes promettent monts et merveilles : <em>« 32 % de protéines brutes ! »</em>, <em>« Sans céréales ! »</em>, <em>« Faible en matières grasses ! »</em>. Mais sans comprendre comment le métabolisme canin traite ces nutriments, ces chiffres restent de simples arguments marketing.</p>
      <p>Le chien fait partie de l'ordre des <em>Carnivora</em> et agit comme un carnivore à tendance opportuniste. Bien qu'il puisse fabriquer du glucose par gluconéogenèse, ses organes prospèrent avec des protéines d'origine animale et des lipides sains.</p>

      <h2 id="introduction-to-canine-macronutrients">1. Les Macronutriments chez le Chien</h2>
      <p>Chaque calorie ingérée provient de l'un des trois macronutriments : <strong>Protéines</strong> (4 kcal/g), <strong>Lipides</strong> (9 kcal/g) et <strong>Glucides</strong> (4 kcal/g). Alors que l'homme puise son endurance dans les glucides, le métabolisme canin fonctionne principalement aux lipides.</p>

      <h2 id="protein-the-biological-building-block">2. Les Protéines : Briques Fondamentales</h2>
      <p>Les protéines apportent les 10 acides aminés essentiels que le chien ne peut pas synthétiser lui-même. Deux critères majeurs déterminent leur efficacité : la valeur biologique (les œufs entiers et la viande fraîche caracolent en tête) et la digestibilité, altérée par les cuissons industrielles à haute température.</p>

      <h2 id="fats-the-primary-energy-source">3. Les Lipides : La Source d'Énergie Principale</h2>
      <p>Les graisses fournissent plus du double d'énergie que les protéines ou glucides. Elles véhiculent les vitamines liposolubles (A, D, E, K) et les acides gras essentiels indispensables à la peau, au pelage et au système nerveux.</p>

      <h2 id="the-carbohydrate-controversy">4. La Controverse des Glucides</h2>
      <p>Le NRC n'indique aucun besoin minimal en glucides pour le chien. Cependant, un apport mesuré de fibres solubles (comme la citrouille cuite ou les graines de chia) nourrit le microbiote intestinal en produisant des acides gras à chaîne courte bénéfiques pour le côlon.</p>

      <h2 id="dry-matter-basis-calculation">5. Calcul de la Matière Sèche (DMB)</h2>
      <p>Pour comparer une boîte humide à 10 % de protéines et des croquettes à 26 %, déduisez le taux d'humidité de 100 %, puis divisez le pourcentage de protéines par la matière sèche restante et multipliez par 100.</p>

      <h2 id="optimal-macro-splits-by-lifestyle">6. Répartition Idéale selon le Mode de Vie</h2>
      <ul>
        <li><strong>Chien adulte actif :</strong> 28 à 36 % de protéines, 16 à 22 % de lipides, 15 à 25 % de glucides lents.</li>
        <li><strong>Chien sédentaire ou au régime :</strong> 34 à 42 % de protéines (maintien musculaire), 10 à 14 % de lipides, 20 à 30 % de fibres.</li>
        <li><strong>Chien sportif d'endurance :</strong> 30 à 35 % de protéines, 22 à 30 % de lipides, moins de 15 % de glucides.</li>
      </ul>

      <h2 id="vet-summary-and-action-steps">7. Recommandations Pratiques du Vétérinaire</h2>
      <p>Privilégiez toujours la densité nutritionnelle réelle aux slogans. Vérifiez que les trois premiers ingrédients sont de véritables viandes animales et calculez la ration exacte sur notre outil en ligne.</p>
    `
  },
  de: {
    title: 'Die Wissenschaft der Makronährstoffe beim Hund: Protein-, Fett- und Kohlenhydratbedarf',
    subtitle: 'Schluss mit Schätzungen. Erfahren Sie alles über NRC-Biowertstandards, das Verhältnis essenzieller Fettsäuren und die physiologische Rolle von Kohlenhydraten in der Hundeernährung.',
    excerpt: 'Das Verständnis der Makronährstoffe ist die Grundlage für lebenslange Vitalität. Entdecken Sie die Bedeutung tierischer Proteine, mariner Omega-3-Fettsäuren und die Trockensubstanz-Berechnung (DMB).',
    readTime: '8 Min. Lesezeit',
    tags: ['Makronährstoffe', 'AAFCO-Standards', 'Proteine', 'Gesunde Fette', 'Kohlenhydrate', 'Kalorienberechnung'],
    keyTakeaways: [
      'Hunde haben laut National Research Council (NRC) keinen Mindestbedarf an Kohlenhydraten; ihr Hauptbrennstoff sind saubere tierische Proteine und bioverfügbare Fette.',
      'Die Proteinqualität wird durch das Aminosäureprofil und die biologische Wertigkeit (BW) bestimmt, nicht bloß durch die Rohproteinangabe auf dem Futtersack.',
      'Marine Omega-3-Fettsäuren (EPA und DHA) besitzen starke entzündungshemmende Eigenschaften zum Schutz von Gelenken, Nieren und Gehirnfunktion.',
      'Analytische Werte auf Futterverpackungen müssen auf Trockensubstanzbasis (DMB) umgerechnet werden, um Trocken- und Nassfutter vergleichen zu können.'
    ],
    tableOfContents: [
      { id: 'introduction-to-canine-macronutrients', title: '1. Einführung in die Makronährstoffe des Hundes' },
      { id: 'protein-the-biological-building-block', title: '2. Protein: Der biologische Grundbaustein' },
      { id: 'fats-the-primary-energy-source', title: '3. Fette: Die wichtigste Energiequelle' },
      { id: 'the-carbohydrate-controversy', title: '4. Die Kohlenhydrat-Kontroverse' },
      { id: 'dry-matter-basis-calculation', title: '5. Berechnung der Trockensubstanz (DMB)' },
      { id: 'optimal-macro-splits-by-lifestyle', title: '6. Optimale Nährstoffaufteilung nach Aktivität' },
      { id: 'vet-summary-and-action-steps', title: '7. Tierärztliche Zusammenfassung & Praxistipps' }
    ],
    contentHtml: `
      <p class="lead">Auf Futterpackungen werben Hersteller mit Schlagworten wie <em>„32 % Rohprotein!“</em>, <em>„Getreidefrei!“</em> oder <em>„Fettreduziert!“</em>. Doch ohne das biologische Verständnis, wie ein Hund diese Nährstoffe verwertet, sind diese Zahlen wenig aussagekräftig.</p>
      <p>Hunde gehören zur Ordnung der <em>Carnivora</em> und sind physiologisch Fleischfresser mit adaptiver Anpassungsfähigkeit. Zwar können sie Glukose über die Gluconeogenese herstellen, ihr gesamter Organismus floriert jedoch am besten mit hochwertigen tierischen Geweben und gesunden Fetten.</p>

      <h2 id="introduction-to-canine-macronutrients">1. Einführung in die Makronährstoffe des Hundes</h2>
      <p>Jede Kalorie stammt aus drei Nährstoffgruppen: <strong>Protein</strong> (4 kcal/g), <strong>Fett</strong> (9 kcal/g) und <strong>Kohlenhydrate</strong> (4 kcal/g). Während Menschen primär Kohlenhydrate zur Energiegewinnung nutzen, ist der Stoffwechsel des Hundes auf Fette optimiert.</p>

      <h2 id="protein-the-biological-building-block">2. Protein: Der biologische Grundbaustein</h2>
      <p>Proteine liefern die 10 essenziellen Aminosäuren, die der Hundekörper nicht selbst bilden kann. Ganze Eier und Muskelfleisch besitzen die höchste biologische Wertigkeit, während pflanzliche Proteine wie Maiskleber deutlich schlechter verwertet werden.</p>

      <h2 id="fats-the-primary-energy-source">3. Fette: Die wichtigste Energiequelle</h2>
      <p>Fette liefern mehr als doppelt so viele Kalorien wie Proteine oder Kohlenhydrate. Sie transportieren fettlösliche Vitamine (A, D, E, K) und liefern essenzielle Fettsäuren für gesunde Haut, glänzendes Fell und Zellmembranen.</p>

      <h2 id="the-carbohydrate-controversy">4. Die Kohlenhydrat-Kontroverse</h2>
      <p>Das NRC listet keinen Mindestbedarf an Kohlenhydraten für Hunde auf. Zwar können Hunde Stärke dank Amylasegenen verdauen, hohe Anteile raffinierter Stärke führen jedoch häufig zu Übergewicht und systemischen Entzündungen. Wertvolle lösliche Ballaststoffe wie Pektin aus Kürbis stärken dagegen die Darmflora.</p>

      <h2 id="dry-matter-basis-calculation">5. Berechnung der Trockensubstanz (DMB)</h2>
      <p>Ziehen Sie den Feuchtigkeitsgehalt von 100 % ab, teilen Sie den angegebenen Rohproteinwert durch die verbleibende Trockenmasse und multiplizieren Sie mit 100. So vergleichen Sie Nass- und Trockenfutter objektiv.</p>

      <h2 id="optimal-macro-splits-by-lifestyle">6. Optimale Nährstoffaufteilung nach Aktivität</h2>
      <ul>
        <li><strong>Aktive Familienhunde:</strong> 28–36 % Protein, 16–22 % Fett, 15–25 % gesunde Kohlenhydrate.</li>
        <li><strong>Übergewichtige Hunde:</strong> 34–42 % Protein (zum Muskelerhalt), 10–14 % Fett, 20–30 % ballaststoffreiche Kohlenhydrate.</li>
        <li><strong>Sport- und Arbeitshunde:</strong> 30–35 % Protein, 22–30 % energiereiche Fette, unter 15 % Kohlenhydrate.</li>
      </ul>

      <h2 id="vet-summary-and-action-steps">7. Tierärztliche Zusammenfassung & Praxistipps</h2>
      <p>Setzen Sie auf Nährstoffdichte statt Marketing. Achten Sie auf echte tierische Fleischquellen unter den ersten Zutaten und nutzen Sie unseren Futterrechner für die ideale Tagesportion.</p>
    `
  },
  pt: {
    title: 'A Ciência dos Macronutrientes Caninos: Quanto de Proteína, Gordura e Carboidrato Seu Cão Precisa?',
    subtitle: 'Chega de adivinhar a divisão de nutrientes. Analisamos os padrões de valor biológico do NRC, os ácidos graxos essenciais e a verdade sobre carboidratos na dieta canina.',
    excerpt: 'Compreender a proporção ideal de macronutrientes é a chave da longevidade canina. Descubra o papel da proteína animal, do ômega-3 marinho e como calcular a Matéria Seca (DMB).',
    readTime: '8 min de leitura',
    tags: ['Macronutrientes', 'Padrões AAFCO', 'Proteína', 'Gorduras Boas', 'Carboidratos', 'Cálculo de Calorias'],
    keyTakeaways: [
      'Cães não possuem exigência mínima de carboidratos segundo o National Research Council (NRC); sua fonte de energia primária são proteínas animais limpas e gorduras saudáveis.',
      'A qualidade da proteína é definida pelo perfil de aminoácidos e valor biológico (VB), não apenas pela porcentagem bruta no rótulo.',
      'Os ácidos graxos ômega-3 de peixes (EPA e DHA) oferecem potente ação anti-inflamatória para articulações, rins e cognição.',
      'A Garantia Nutricional no pacote de ração deve ser convertida para Base de Matéria Seca (DMB) para comparar rações secas e comidas úmidas.'
    ],
    tableOfContents: [
      { id: 'introduction-to-canine-macronutrients', title: '1. Introdução aos Macronutrientes Caninos' },
      { id: 'protein-the-biological-building-block', title: '2. Proteína: O Bloco de Construção Biológico' },
      { id: 'fats-the-primary-energy-source', title: '3. Gorduras: A Principal Fonte Energética' },
      { id: 'the-carbohydrate-controversy', title: '4. A Controvérsia dos Carboidratos' },
      { id: 'dry-matter-basis-calculation', title: '5. Como Calcular a Matéria Seca (DMB)' },
      { id: 'optimal-macro-splits-by-lifestyle', title: '6. Distribuição Ideal por Estilo de Vida' },
      { id: 'vet-summary-and-action-steps', title: '7. Resumo Veterinário e Próximos Passos' }
    ],
    contentHtml: `
      <p class="lead">Ao entrar numa pet shop ou escolher rações premium, encontramos frases chamativas: <em>"32% de Proteína Bruta!"</em>, <em>"Sem Grãos!"</em>, <em>"Fórmula Baixa em Gordura!"</em>. Porém, sem entender como o organismo canino processa esses nutrientes, tais números são vazios.</p>
      <p>Os cães pertencem à ordem <em>Carnivora</em> e funcionam como carnívoros oportunistas adaptativos. Embora consigam sintetizar glicose via gliconeogênese, seus órgãos internos funcionam com plenitude quando alimentados com carnes de alto valor biológico e gorduras saudáveis.</p>

      <h2 id="introduction-to-canine-macronutrients">1. Introdução aos Macronutrientes Caninos</h2>
      <p>Todas as calorias que o cão consome vêm de três grupos: <strong>Proteínas</strong> (4 kcal/g), <strong>Gorduras</strong> (9 kcal/g) e <strong>Carboidratos</strong> (4 kcal/g). Diferente dos humanos, a fisiologia canina é primariamente movida a lipídios.</p>

      <h2 id="protein-the-biological-building-block">2. Proteína: O Bloco de Construção Biológico</h2>
      <p>A proteína fornece os 10 aminoácidos essenciais que o organismo canino não produz por conta própria. Ovos inteiros e carnes frescas têm o maior valor biológico, enquanto proteínas vegetais têm menor biodisponibilidade.</p>

      <h2 id="fats-the-primary-energy-source">3. Gorduras: A Principal Fonte Energética</h2>
      <p>Com mais que o dobro de calorias por grama em relação a carboidratos e proteínas, as gorduras fornecem energia duradoura e transportam vitaminas lipossolúveis (A, D, E e K).</p>

      <h2 id="the-carbohydrate-controversy">4. A Controvérsia dos Carboidratos</h2>
      <p>O NRC não estipula necessidade mínima de carboidratos para cães. Embora consigam digerir amidos cozidos, o excesso de carboidratos refinados em rações baratas favorece picos de insulina e inflamações crônicas. Fibras solúveis em moderação, como abóbora cozida, auxiliam o intestino.</p>

      <h2 id="dry-matter-basis-calculation">5. Como Calcular a Matéria Seca (DMB)</h2>
      <p>Subtraia a umidade de 100%, divida a proteína do rótulo pelo restante da matéria seca e multiplique por 100 para comparar rações secas e sachês em pé de igualdade.</p>

      <h2 id="optimal-macro-splits-by-lifestyle">6. Distribuição Ideal por Estilo de Vida</h2>
      <ul>
        <li><strong>Adultos Ativos:</strong> 28–36% Proteína, 16–22% Gordura, 15–25% Carboidratos de baixo índice glicêmico.</li>
        <li><strong>Cães Idosos ou com Sobrepeso:</strong> 34–42% Proteína (preserva massa muscular), 10–14% Gordura, 20–30% Fibras.</li>
        <li><strong>Cães de Trabalho e Esporte:</strong> 30–35% Proteína, 22–30% Lipídios densos, &lt;15% Carboidratos.</li>
      </ul>

      <h2 id="vet-summary-and-action-steps">7. Resumo Veterinário e Próximos Passos</h2>
      <p>Foque na densidade real dos ingredientes. Calcule a porção correta do seu cão com nossa calculadora e enriqueça a alimentação com ômega-3 para proteger pele e articulações.</p>
    `
  },
  ko: {
    title: '반려견 3대 영양소의 과학: 단백질, 지방, 탄수화물의 이상적인 영양 밸런스',
    subtitle: '더 이상 감으로 사료를 고르지 마세요. 미국 NRC(국립연구위원회) 기준 생물가, 필수 지방산 비율, 탄수화물의 실제 대사 생리학을 수의학적으로 분석합니다.',
    excerpt: '반려견의 3대 영양소 섭취 균형은 평생 건강의 기초입니다. 동물성 단백질의 중요성, 오메가-3의 항염 작용, 건물 기준(DMB) 영양소 환산법을 알아보세요.',
    readTime: '8분 소요',
    tags: ['3대 영양소', 'AAFCO 기준', '단백질', '건강한 지방', '탄수화물', '칼로리 계산'],
    keyTakeaways: [
      '미국 NRC 기준에 따르면 반려견에게 탄수화물의 최소 필수 요구량은 없습니다. 개의 주 에너지원은 동물성 단백질과 생체이용률이 높은 지방입니다.',
      '단백질의 질은 사료 포대표에 적힌 조단백 수치뿐만 아니라, 필수 아미노산 구성과 생물가(BV)에 의해 결정됩니다.',
      '어유 유래 해양성 오메가-3(EPA 및 DHA)는 관절, 신장, 뇌 건강을 지켜주는 강력한 항염 효과를 발휘합니다.',
      '사료 뒷면의 보증성분표는 수분이 포함된 상태이므로, 건식과 습식을 정확히 비교하려면 건물 기준(DMB)으로 변환해야 합니다.'
    ],
    tableOfContents: [
      { id: 'introduction-to-canine-macronutrients', title: '1. 반려견 3대 영양소의 기초' },
      { id: 'protein-the-biological-building-block', title: '2. 단백질: 신체를 구성하는 생명의 기초 블록' },
      { id: 'fats-the-primary-energy-source', title: '3. 지방: 반려견의 핵심 에너지원' },
      { id: 'the-carbohydrate-controversy', title: '4. 탄수화물에 관한 오해와 진실' },
      { id: 'dry-matter-basis-calculation', title: '5. 건물 기준(DMB) 환산 계산법' },
      { id: 'optimal-macro-splits-by-lifestyle', title: '6. 생활 습관별 최적의 영양소 비율' },
      { id: 'vet-summary-and-action-steps', title: '7. 수의사 총평 및 실천 가이드' }
    ],
    contentHtml: `
      <p class="lead">반려동물 용품점이나 사료 포장지에는 <em>"조단백질 32%!"</em>, <em>"그레인프리!"</em>, <em>"저지방 맞춤 식단!"</em> 같은 문구가 가득합니다. 하지만 반려견의 체내 대사 과정을 모른다면 이 수치들의 실질적 의미를 파악하기 어렵습니다.</p>
      <p>개는 식육목(Carnivora)에 속하는 동물로 육식에 기반한 적응형 잡식동물입니다. 포도당신생합성을 통해 아미노산으로부터 포도당을 만들어낼 수 있으며, 생물가가 높은 동물성 고기와 양질의 지질을 섭취할 때 가장 건강합니다.</p>

      <h2 id="introduction-to-canine-macronutrients">1. 반려견 3대 영양소의 기초</h2>
      <p>강아지가 섭취하는 칼로리는 <strong>단백질</strong>(4 kcal/g), <strong>지방</strong>(9 kcal/g), <strong>탄수화물</strong>(4 kcal/g)로 구성됩니다. 탄수화물에 주로 의존하는 인간과 달리, 개의 신체 대사는 기본적으로 지방 산화에 최적화되어 있습니다.</p>

      <h2 id="protein-the-biological-building-block">2. 단백질: 신체를 구성하는 생명의 기초 블록</h2>
      <p>단백질은 단순한 연료가 아니라 근육, 장기, 면역 항체를 만드는 핵심 성분입니다. 개는 스스로 합성할 수 없는 10가지 필수 아미노산(아르기닌, 히스티딘, 이소류신, 류신, 라이신, 메티오닌, 페닐알라닌, 트레오닌, 트립토판, 발린)을 식사를 통해 섭취해야 합니다.</p>

      <h2 id="fats-the-primary-energy-source">3. 지방: 반려견의 핵심 에너지원</h2>
      <p>지방은 단백질이나 탄수화물보다 2배 이상 높은 열량을 제공하며 지용성 비타민(A, D, E, K)의 체내 흡수를 돕습니다. 해양성 오메가-3는 세포막을 보호하고 관절 염증을 완화합니다.</p>

      <h2 id="the-carbohydrate-controversy">4. 탄수화물에 관한 오해와 진실</h2>
      <p>NRC 기준상 개의 탄수화물 최소 필요량은 0입니다. 저가 사료에 과도하게 들어간 정제 곡물은 혈당 스파이크와 비만을 유발할 수 있습니다. 반면 단호박 등에서 얻는 양질의 수용성 식이섬유는 장내 유익균을 활성화하는 프리바이오틱스로 작용합니다.</p>

      <h2 id="dry-matter-basis-calculation">5. 건물 기준(DMB) 환산 계산법</h2>
      <p>100%에서 수분 함유량을 뺀 뒤, 표기된 단백질 수치를 남은 건물량으로 나누고 100을 곱하면 실제 순수 단백질 농도(DMB)를 산출할 수 있습니다.</p>

      <h2 id="optimal-macro-splits-by-lifestyle">6. 생활 습관별 최적의 영양소 비율</h2>
      <ul>
        <li><strong>활동적인 성견:</strong> 단백질 28~36%, 지방 16~22%, 저혈당 탄수화물 15~25%</li>
        <li><strong>체중 조절 및 노령견:</strong> 단백질 34~42%(근감소 예방), 저지방 10~14%, 고섬유질 20~30%</li>
        <li><strong>운동량이 많은 사역견:</strong> 단백질 30~35%, 고밀도 지질 22~30%, 탄수화물 15% 미만</li>
      </ul>

      <h2 id="vet-summary-and-action-steps">7. 수의사 총평 및 실천 가이드</h2>
      <p>화려한 광고 문구보다 실제 원재료 상위 3가지가 명확한 동물성 단백질인지 확인하세요. 당사의 무료 사료량 계산기로 아이에게 딱 맞는 하루 필요 칼로리를 계산해 보세요.</p>
    `
  },
  it: {
    title: 'La Scienza dei Macronutrienti Canini: Quante Proteine, Grassi e Carboidrati Servono al Tuo Cane?',
    subtitle: 'Basta improvvisare con le porzioni. Analizziamo gli standard NRC sul valore biologico, il profilo degli acidi grassi essenziali e la verità fisiologica sui carboidrati nei cani.',
    excerpt: 'Comprendere la divisione dei macronutrienti è la chiave per la vitalità a lungo termine del tuo cane. Scopri il ruolo delle proteine animali, degli omega-3 marini e il calcolo della Sostanza Secca (DMB).',
    readTime: '8 min di lettura',
    tags: ['Macronutrienti', 'Standard AAFCO', 'Proteine', 'Grassi Sani', 'Carboidrati', 'Calcolo Calorie'],
    keyTakeaways: [
      'I cani non hanno un fabbisogno minimo di carboidrati secondo il National Research Council (NRC); la loro energia primaria deriva da proteine animali e grassi sani.',
      'La qualità proteica è determinata dal valore biologico (VB) e dal profilo aminoacidico, non solo dalla percentuale grezza in etichetta.',
      'Gli omega-3 da fonti marine (EPA e DHA) svolgono una potente azione antinfiammatoria a supporto di articolazioni, reni e cervello.',
      'I valori riportati sui sacchi devono essere convertiti in Base Sostanza Secca (DMB) per confrontare obiettivamente crocchette e cibo umido.'
    ],
    tableOfContents: [
      { id: 'introduction-to-canine-macronutrients', title: '1. Introduzione ai Macronutrienti Canini' },
      { id: 'protein-the-biological-building-block', title: '2. Le Proteine: I Mattoni Biologici Fondamentali' },
      { id: 'fats-the-primary-energy-source', title: '3. I Grassi: La Fonte di Energia Primaria' },
      { id: 'the-carbohydrate-controversy', title: '4. La Controversia sui Carboidrati' },
      { id: 'dry-matter-basis-calculation', title: '5. Come Calcolare la Sostanza Secca (DMB)' },
      { id: 'optimal-macro-splits-by-lifestyle', title: '6. Ripartizione Ideale per Stile di Vita' },
      { id: 'vet-summary-and-action-steps', title: '7. Riepilogo Veterinario e Consigli Pratici' }
    ],
    contentHtml: `
      <p class="lead">Davanti agli scaffali del pet shop le scritte promozionali abbondano: <em>"32% Proteina Grezza!"</em>, <em>"Senza Cereali!"</em>, <em>"Formula a Basso Contenuto di Grassi!"</em>. Ma senza comprendere come l'organismo canino metabolizza i nutrienti, quei numeri rimangono vuoti.</p>
      <p>I cani appartengono all'ordine dei <em>Carnivora</em> e sono carnivori opportunisti ad alta capacità di adattamento. Sebbene possano ricavare glucosio tramite la gluconeogenesi, i loro organi interni funzionano al meglio con proteine animali ad alto valore biologico e lipidi sani.</p>

      <h2 id="introduction-to-canine-macronutrients">1. Introduzione ai Macronutrienti Canini</h2>
      <p>Ogni caloria assunta proviene da tre categorie: <strong>Proteine</strong> (4 kcal/g), <strong>Grassi</strong> (9 kcal/g) e <strong>Carboidrati</strong> (4 kcal/g). A differenza dell'uomo, il metabolismo del cane è fondamentalmente guidato dai grassi.</p>

      <h2 id="protein-the-biological-building-block">2. Le Proteine: I Mattoni Biologici Fondamentali</h2>
      <p>Le proteine forniscono i 10 aminoacidi essenziali che il cane non può sintetizzare da solo. Uova intere e carne fresca vantano il massimo valore biologico, mentre i derivati vegetali hanno una biodisponibilità sensibilmente inferiore.</p>

      <h2 id="fats-the-primary-energy-source">3. I Grassi: La Fonte di Energia Primaria</h2>
      <p>I grassi apportano più del doppio delle calorie di proteine e carboidrati, garantendo resistenza duratura e trasportando le vitamine liposolubili (A, D, E e K).</p>

      <h2 id="the-carbohydrate-controversy">4. La Controversia sui Carboidrati</h2>
      <p>Il NRC non stabilisce alcun fabbisogno minimo di carboidrati per i cani. Sebbene posseggano geni per digerire gli amidi, l'eccesso di carboidrati raffinati nelle crocchette economiche alimenta infiammazioni e obesità. Porzioni moderate di fibre solubili da zucca cotta nutrono invece il microbiota intestinale.</p>

      <h2 id="dry-matter-basis-calculation">5. Come Calcolare la Sostanza Secca (DMB)</h2>
      <p>Sottrai l'umidità dal 100%, dividi la proteina indicata per la percentuale di sostanza secca rimasta e moltiplica per 100 per confrontare crocchette e cibo umido.</p>

      <h2 id="optimal-macro-splits-by-lifestyle">6. Ripartizione Ideale per Stile di Vita</h2>
      <ul>
        <li><strong>Adulti Attivi:</strong> 28–36% Proteine, 16–22% Grassi, 15–25% Carboidrati a basso indice glicemico.</li>
        <li><strong>Cani Sedentari o in Sovrappeso:</strong> 34–42% Proteine (preservazione muscolare), 10–14% Grassi, 20–30% Fibre.</li>
        <li><strong>Cani da Lavoro o Agility:</strong> 30–35% Proteine, 22–30% Lipidi ad alta densità, &lt;15% Carboidrati.</li>
      </ul>

      <h2 id="vet-summary-and-action-steps">7. Riepilogo Veterinario e Consigli Pratici</h2>
      <p>Punta sulla qualità biologica degli ingredienti. Verifica che le prime tre voci siano carni identificate e usa il nostro calcolatore gratuito per dosare con precisione la ciotola del tuo cane.</p>
    `
  }
};
