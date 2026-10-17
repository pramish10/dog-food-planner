import type { BlogPostLocalizedRecord } from './types';

export const puppyFeedingRoadmapTranslations: BlogPostLocalizedRecord = {
  es: {
    title: 'Guía de Alimentación para Cachorros: Calorías, Curvas de Crecimiento y el Peligro del Calcio',
    subtitle: 'De las 8 semanas a la edad adulta: por qué el exceso de calcio causa displasia y enfermedades ortopédicas en razas grandes y cómo ajustar porciones conforme sube de peso.',
    excerpt: 'Los cachorros crecen más en su primer año que los humanos en quince. Aprende a calcular sus calorías con multiplicadores RER, proteger sus placas de crecimiento y evitar excesos de suplementación.',
    readTime: '7 min de lectura',
    tags: ['Nutrición de Cachorros', 'Curvas de Crecimiento', 'Cachorros de Raza Grande', 'Ratio Calcio Fósforo', 'Tabla de Alimentación'],
    keyTakeaways: [
      'Los cachorros menores de 4 meses necesitan hasta 3 veces su Requerimiento Energético en Reposo (RER) para el desarrollo óseo y muscular.',
      'En razas grandes no se debe dejar comida a libre disposición: un crecimiento demasiado rápido aumenta el riesgo de problemas ortopédicos del desarrollo como la displasia.',
      'Antes de los 6 meses los cachorros no regulan la absorción intestinal de calcio, absorbiéndolo pasivamente y cerrando placas óseas prematuramente.',
      'El paso a comida de adulto se hace a los 10-12 meses en razas pequeñas, pero se espera a los 18-24 meses en razas gigantes.'
    ],
    tableOfContents: [
      { id: 'puppy-metabolism-vs-adult-dogs', title: '1. Metabolismo del Cachorro vs. Perro Adulto' },
      { id: 'calculating-puppy-daily-calories', title: '2. Cálculo de Calorías Diarias (Multiplicadores RER)' },
      { id: 'the-calcium-to-phosphorus-danger-zone', title: '3. El Peligro del Exceso de Calcio' },
      { id: 'small-breed-vs-large-breed-differences', title: '4. Razas Pequeñas vs. Razas Grandes' },
      { id: 'weekly-weigh-in-and-portion-adjustments', title: '5. Pesajes Semanales y Ajuste de Ración' }
    ],
    contentHtml: `
      <p class="lead">Tener un cachorro de 8 semanas es pura felicidad hasta que miras las indicaciones genéricas de la bolsa de pienso. El metabolismo de un cachorro cambia semana a semana mientras sus huesos se desarrollan a gran velocidad.</p>

      <h2 id="puppy-metabolism-vs-adult-dogs">1. Metabolismo del Cachorro vs. Perro Adulto</h2>
      <p>Durante la fase de crecimiento acelerado (de 8 a 16 semanas), el gasto energético es enorme: no solo mantienen sus órganos, sino que crean masa ósea y vías neuronales a un ritmo vertiginoso.</p>

      <h2 id="calculating-puppy-daily-calories">2. Cálculo de Calorías Diarias (Multiplicadores RER)</h2>
      <p>Los veterinarios calculan primero el <code>RER = 70 × (Peso en kg)^0.75</code> y aplican multiplicadores específicos:</p>
      <ul>
        <li><strong>Menos de 4 meses:</strong> <code>3.0 × RER</code></li>
        <li><strong>De 4 meses a tamaño adulto:</strong> <code>2.0 × RER</code></li>
        <li><strong>80% del peso adulto hasta madurez:</strong> <code>1.8 × RER</code></li>
      </ul>

      <h2 id="the-calcium-to-phosphorus-danger-zone">3. El Peligro del Exceso de Calcio</h2>
      <p>A diferencia de los adultos, los cachorros menores de 6 meses no pueden frenar la absorción de calcio en el intestino. Absorbe todo el calcio que ingiere pasivamente. Dar suplementos de calcio o harina de hueso a un cachorro con pienso formulado altera la osificación y provoca deformidades óseas graves.</p>

      <h2 id="small-breed-vs-large-breed-differences">4. Razas Pequeñas vs. Razas Grandes</h2>
      <p>Un Chihuahua madura a los 9-10 meses, mientras que un Gran Danés crece hasta los 2 años. Las fórmulas para razas en crecimiento controlan la grasa y el calcio, presentes en recetas de alta calidad como <AmazonLink url="https://link.amazon/B052f55Rv">The Honest Kitchen Whole Food Clusters</AmazonLink> para favorecer una osificación armónica.</p>

      <h2 id="weekly-weigh-in-and-portion-adjustments">5. Pesajes Semanales y Ajuste de Ración</h2>
      <p>Pesa a tu cachorro cada 7 días e introduce su peso actualizado en nuestra calculadora para ajustar los gramos diarios. Un cachorro esbelto con costillas palpables crecerá con articulaciones sanas y sin dolor articular.</p>
    `
  },
  ja: {
    title: '子犬の給餌ロードマップ：カロリー計算、成長曲線とカルシウム過剰の罠',
    subtitle: '生後8週から成犬期まで：大型犬にカルシウム過剰が関節疾患を引き起こす理由と、体重増加に伴う安全な給餌量再計算プロトコル。',
    excerpt: '子犬は最初の1年間で人間の15倍もの猛スピードで成長します。RER係数による正確な必要カロリー、骨端線の保護、過剰サプリメントの危険性を解説します。',
    readTime: '読了目安 7分',
    tags: ['子犬の栄養学', '成長曲線', '大型犬の子犬', 'カルシウム・リン比率', '給餌量チャート'],
    keyTakeaways: [
      '生後4ヶ月未満の子犬は、骨格形成と細胞分裂のために安静時エネルギー要求量（RER）の最大3.0倍のカロリーを必要とします。',
      '大型犬の子犬（成犬時体重25kg以上）の置き餌は避けましょう。急激な体重増加は股関節形成不全などの骨関節トラブルのリスクを高めます。',
      '生後6ヶ月未満の子犬は腸管でのカルシウム吸収を自己調節できず、過剰なカルシウムは骨端線を異常硬化させてしまいます。',
      '成犬用フードへの切り替えは、小型犬なら生後10〜12ヶ月、超大型犬なら18〜24ヶ月が推奨されます。'
    ],
    tableOfContents: [
      { id: 'puppy-metabolism-vs-adult-dogs', title: '1. 子犬と成犬の代謝スピードの違い' },
      { id: 'calculating-puppy-daily-calories', title: '2. 子犬の1日必要カロリー計算（RER係数）' },
      { id: 'the-calcium-to-phosphorus-danger-zone', title: '3. カルシウム過剰投与の危険地帯' },
      { id: 'small-breed-vs-large-breed-differences', title: '4. 小型犬と大型犬で異なる成長ニーズ' },
      { id: 'weekly-weigh-in-and-portion-adjustments', title: '5. 毎週の体重測定と給餌量微調整ルール' }
    ],
    contentHtml: `
      <p class="lead">生後8週の子犬を迎える喜びの反面、フード袋の裏の曖昧な給餌表に悩む飼い主は少なくありません。子犬の体重は数ヶ月で倍増し、骨格の急激な変化に対応した精密な栄養設計が求められます。</p>

      <h2 id="puppy-metabolism-vs-adult-dogs">1. 子犬と成犬の代謝スピードの違い</h2>
      <p>急速成長期（生後8〜16週）の子犬は、成犬の倍以上の代謝エネルギーを消費します。内臓の維持だけでなく、新しい骨組織の沈着、筋肉の合成、神経ネットワークの構築が常に行われているためです。</p>

      <h2 id="calculating-puppy-daily-calories">2. 子犬の1日必要カロリー計算（RER係数）</h2>
      <p>計算式：<code>RER = 70 × (体重kg)^0.75</code> をベースに月齢係数を掛け合わせます：</p>
      <ul>
        <li><strong>生後4ヶ月未満：</strong> <code>3.0 × RER</code></li>
        <li><strong>生後4ヶ月〜成犬体重の80%：</strong> <code>2.0 × RER</code></li>
        <li><strong>成犬体重の80%〜骨格完成まで：</strong> <code>1.8 × RER</code></li>
      </ul>

      <h2 id="the-calcium-to-phosphorus-danger-zone">3. カルシウム過剰投与の危険地帯</h2>
      <p>成犬の腸粘膜はカルシウム過多のときに吸収を抑える調節機能がありますが、生後6ヶ月未満の子犬にはそのバリアがありません。子犬用フードに勝手にカルシウム粉末や骨粉を足すと、骨格の軟骨形成異常を引き起こします。</p>

      <h2 id="small-breed-vs-large-breed-differences">4. 小型犬と大型犬で異なる成長ニーズ</h2>
      <p>チワワなどの小型犬は生後9〜10ヶ月で骨格が完成しますが、ゴールデンやラブラドールなどの大型犬は15〜24ヶ月かけて成長します。大型犬用パピーフードはカルシウムと脂質が控えめに設計されています。<AmazonLink url="https://link.amazon/B052f55Rv">The Honest Kitchen Whole Food Clusters</AmazonLink>のような良質なヒューマングレードフードは、成長期の骨格形成をバランスよく支えます。</p>

      <h2 id="weekly-weigh-in-and-portion-adjustments">5. 毎週の体重測定と給餌量微調整ルール</h2>
      <p>7日ごとに同じ体重計で計測し、当サイトの計算機で給餌グラム数をアップデートしましょう。肋骨が軽く触れる引き締まった体型を保つことが、生涯にわたる関節炎の予防につながります。</p>
    `
  },
  fr: {
    title: 'Alimentation du Chiot : Besoins Caloriques, Courbes de Croissance et Piège du Calcium',
    subtitle: 'De 8 semaines à l\'âge adulte : pourquoi l\'excès de calcium déclenche des dysplasies chez les grandes races et comment adapter les rations.',
    excerpt: 'Un chiot grandit plus vite en un an qu\'un humain en quinze. Apprenez à calculer les calories via les multiplicateurs du BEE et à protéger son squelette.',
    readTime: '7 min de lecture',
    tags: ['Nutrition du Chiot', 'Courbes de Croissance', 'Chiots Grandes Races', 'Ratio Calcium Phosphore', 'Rations Chiot'],
    keyTakeaways: [
      'Les chiots de moins de 4 mois ont besoin de 3 fois leur Besoin Énergétique de Base (BEE) pour développer leur squelette.',
      'Les grandes races ne doivent jamais être nourries à volonté : une croissance trop rapide augmente significativement le risque de troubles articulaires comme la dysplasie.',
      'Avant 6 mois, les chiots absorbent le calcium de manière passive sans pouvoir le réguler au niveau intestinal.',
      'La transition vers l\'aliment adulte se fait vers 10-12 mois pour les petits chiens, mais vers 18-24 mois pour les races géantes.'
    ],
    tableOfContents: [
      { id: 'puppy-metabolism-vs-adult-dogs', title: '1. Métabolisme du Chiot vs Chien Adulte' },
      { id: 'calculating-puppy-daily-calories', title: '2. Calcul des Calories Quotidiennes' },
      { id: 'the-calcium-to-phosphorus-danger-zone', title: '3. Le Danger de l\'Excès de Calcium' },
      { id: 'small-breed-vs-large-breed-differences', title: '4. Petites Races vs Grandes Races' },
      { id: 'weekly-weigh-in-and-portion-adjustments', title: '5. Pesées Hebdomadaires et Rations' }
    ],
    contentHtml: `
      <p class="lead">Accueillir un chiot de 8 semaines est merveilleux, mais doser sa gamelle peut devenir un casse-tête. Le métabolisme d'un jeune chien évolue chaque semaine et demande des ajustements précis.</p>

      <h2 id="puppy-metabolism-vs-adult-dogs">1. Métabolisme du Chiot vs Chien Adulte</h2>
      <p>Durant la phase de croissance rapide (8 à 16 semaines), les besoins énergétiques sont considérables. Le chiot doit non seulement assurer ses fonctions vitales, mais construire son squelette, ses muscles et son système nerveux.</p>

      <h2 id="calculating-puppy-daily-calories">2. Calcul des Calories Quotidiennes</h2>
      <p>Formule vétérinaire : <code>BEE = 70 × (Poids en kg)^0.75</code> avec multiplicateurs adaptés :</p>
      <ul>
        <li><strong>Moins de 4 mois :</strong> <code>3.0 × BEE</code></li>
        <li><strong>De 4 mois à la taille adulte :</strong> <code>2.0 × BEE</code></li>
        <li><strong>Dernière phase de maturation :</strong> <code>1.8 × BEE</code></li>
      </ul>

      <h2 id="the-calcium-to-phosphorus-danger-zone">3. Le Danger de l'Excès de Calcium</h2>
      <p>Les chiots de moins de 6 mois ne savent pas bloquer l'absorption intestinale du calcium. Tout surplus passe dans le sang et fige prématurément les cartilages de croissance, favorisant de graves troubles articulaires.</p>

      <h2 id="small-breed-vs-large-breed-differences">4. Petites Races vs Grandes Races</h2>
      <p>Un petit chien achève sa croissance vers 10 mois, alors qu'un grand chien continue jusqu'à 2 ans. Les aliments pour chiots de grande race contrôlent les minéraux, comme dans <AmazonLink url="https://link.amazon/B052f55Rv">The Honest Kitchen Whole Food Clusters</AmazonLink>, pour assurer un développement squelettique régulier.</p>

      <h2 id="weekly-weigh-in-and-portion-adjustments">5. Pesées Hebdomadaires et Rations</h2>
      <p>Pesez votre chiot chaque semaine et actualisez sa ration sur notre calculateur. Un chiot svelte dont on devine les côtes vivra plus longtemps avec des hanches solides.</p>
    `
  },
  de: {
    title: 'Welpen-Ernährungsplan: Kalorienbedarf, Wachstumskurven & die Kalziumfalle',
    subtitle: 'Von der 8. Woche bis zum Erwachsenenalter: Warum zu viel Kalzium bei großen Rassen Gelenkschäden verursacht und wie Sie die Futtermenge anpassen.',
    excerpt: 'Welpen wachsen im ersten Jahr rasanter als Menschen in 15 Jahren. Berechnen Sie den exakten Kalorienbedarf mit RER-Faktoren und schützen Sie die Wachstumsfugen.',
    readTime: '7 Min. Lesezeit',
    tags: ['Welpenernährung', 'Wachstumskurven', 'Große Rassen', 'Kalzium Phosphor', 'Fütterungstabelle'],
    keyTakeaways: [
      'Welpen unter 4 Monaten benötigen bis zum 3,0-fachen ihres Ruheenergiebedarfs (RER) für Knochen- und Gewebeaufbau.',
      'Große Rassen sollten nicht ad libitum gefüttert werden: Ein zu schnelles Wachstum erhöht das Risiko für orthopädische Entwicklungsstörungen wie Hüftdysplasie.',
      'Unter 6 Monaten können Welpen Kalzium im Darm nicht regulieren; ein Überschuss führt zur Verknöcherung der Knorpel.',
      'Kleine Rassen wechseln mit 10–12 Monaten auf Adult-Futter, Riesenrassen erst mit 18–24 Monaten.'
    ],
    tableOfContents: [
      { id: 'puppy-metabolism-vs-adult-dogs', title: '1. Welpenstoffwechsel im Vergleich zu adulten Hunden' },
      { id: 'calculating-puppy-daily-calories', title: '2. Kalorienberechnung für Welpen (RER-Faktoren)' },
      { id: 'the-calcium-to-phosphorus-danger-zone', title: '3. Die Gefahr von Kalziumüberschuss' },
      { id: 'small-breed-vs-large-breed-differences', title: '4. Kleine Rassen vs. Große Rassen' },
      { id: 'weekly-weigh-in-and-portion-adjustments', title: '5. Wöchentliches Wiegen & Rationsanpassung' }
    ],
    contentHtml: `
      <p class="lead">Einen 8 Wochen alten Welpen aufzuziehen ist wunderschön, doch die pauschalen Fütterungsempfehlungen auf Futtersäcken stiften oft Verwirrung. Ein Welpe verdoppelt sein Gewicht in rasantem Tempo und braucht exakt dosierte Nährstoffe.</p>

      <h2 id="puppy-metabolism-vs-adult-dogs">1. Welpenstoffwechsel im Vergleich zu adulten Hunden</h2>
      <p>In den ersten Lebensmonaten ist der Energiebedarf gewaltig: Neben dem normalen Erhaltungsstoffwechsel baut der Körper neue Knochenmatrix, Nervenverbindungen und Muskelgewebe auf.</p>

      <h2 id="calculating-puppy-daily-calories">2. Kalorienberechnung für Welpen (RER-Faktoren)</h2>
      <p>Tierärztliche Formel: <code>RER = 70 × (Gewicht in kg)^0.75</code> mit abgestimmten Multiplikatoren:</p>
      <ul>
        <li><strong>Unter 4 Monaten:</strong> <code>3.0 × RER</code></li>
        <li><strong>4 Monate bis 80 % des Endgewichts:</strong> <code>2.0 × RER</code></li>
        <li><strong>Bis zum Abschluss des Skelettwachstums:</strong> <code>1.8 × RER</code></li>
      </ul>

      <h2 id="the-calcium-to-phosphorus-danger-zone">3. Die Gefahr von Kalziumüberschuss</h2>
      <p>Welpen unter 6 Monaten fehlt der Schutzmechanismus im Darm: Sie absorbieren fast 100 % des aufgenommenen Kalziums passiv. Geben Sie niemals eigenmächtig Kalziumpulver zu Alleinfuttermitteln hinzu, um Knorpelschäden zu vermeiden.</p>

      <h2 id="small-breed-vs-large-breed-differences">4. Kleine Rassen vs. Große Rassen</h2>
      <p>Ein Mops ist mit knapp 10 Monaten ausgewachsen, eine Deutsche Dogge wächst bis zu 2 Jahre. Futter für heranwachsende Hunde, wie <AmazonLink url="https://link.amazon/B052f55Rv">The Honest Kitchen Whole Food Clusters</AmazonLink>, bietet kontrollierte Kalziummengen für ein gleichmäßiges, gesundes Knochenwachstum.</p>

      <h2 id="weekly-weigh-in-and-portion-adjustments">5. Wöchentliches Wiegen & Rationsanpassung</h2>
      <p>Wiegen Sie Ihren Welpen alle 7 Tage und passen Sie die Grammzahl mit unserem Futterrechner an. Ein schlanker Welpe mit leicht spürbaren Rippen hat die besten Chancen auf gesunde Gelenke ein Leben lang.</p>
    `
  },
  pt: {
    title: 'Guia de Alimentação para Filhotes: Calorias, Crescimento e o Perigo do Cálcio',
    subtitle: 'Das 8 semanas à vida adulta: por que o excesso de cálcio causa displasia em raças grandes e como calcular porções seguras conforme o peso sobe.',
    excerpt: 'Filhotes crescem mais no primeiro ano do que humanos em 15 anos. Aprenda a calcular calorias via multiplicadores RER e proteja as articulações em crescimento.',
    readTime: '7 min de leitura',
    tags: ['Nutrição de Filhotes', 'Curvas de Crescimento', 'Cães de Raça Grande', 'Cálcio e Fósforo', 'Tabela de Alimentação'],
    keyTakeaways: [
      'Filhotes com menos de 4 meses necessitam de até 3 vezes o seu Gasto Energético em Repouso (RER).',
      'Filhotes de raças grandes não devem ser alimentados à vontade: o ganho de peso excessivo aumenta o risco de problemas ortopédicos como a displasia coxofemoral.',
      'Antes dos 6 meses de vida o intestino do filhote absorve cálcio de forma passiva, sem controle de excessos.',
      'A troca para ração de adulto ocorre por volta de 10-12 meses em cães pequenos e entre 18-24 meses em raças gigantes.'
    ],
    tableOfContents: [
      { id: 'puppy-metabolism-vs-adult-dogs', title: '1. Metabolismo do Filhote vs. Adulto' },
      { id: 'calculating-puppy-daily-calories', title: '2. Cálculo de Calorias Diárias (Fatores RER)' },
      { id: 'the-calcium-to-phosphorus-danger-zone', title: '3. A Armadilha do Excesso de Cálcio' },
      { id: 'small-breed-vs-large-breed-differences', title: '4. Raças Pequenas vs. Raças Grandes' },
      { id: 'weekly-weigh-in-and-portion-adjustments', title: '5. Pesagem Semanal e Ajuste de Ração' }
    ],
    contentHtml: `
      <p class="lead">Ter um filhote de 8 semanas é pura alegria, mas as instruções genéricas na embalagem de ração deixam qualquer tutor inseguro. A demanda energética de um filhote se transforma toda semana.</p>

      <h2 id="puppy-metabolism-vs-adult-dogs">1. Metabolismo do Filhote vs. Adulto</h2>
      <p>Nos primeiros 4 meses o corpo está em constante multiplicação celular, exigindo muita energia para formar osso, músculo e neurônios.</p>

      <h2 id="calculating-puppy-daily-calories">2. Cálculo de Calorias Diárias (Fatores RER)</h2>
      <p>Calcula-se o <code>RER = 70 × (Peso em kg)^0.75</code> com os multiplicadores recomendados:</p>
      <ul>
        <li><strong>Abaixo de 4 meses:</strong> <code>3.0 × RER</code></li>
        <li><strong>Dos 4 meses até 80% do peso adulto:</strong> <code>2.0 × RER</code></li>
        <li><strong>Até a maturidade óssea:</strong> <code>1.8 × RER</code></li>
      </ul>

      <h2 id="the-calcium-to-phosphorus-danger-zone">3. A Armadilha do Excesso de Cálcio</h2>
      <p>O filhote não possui a barreira intestinal madura para impedir o excesso de cálcio. Dar suplementos de cálcio além da ração causa ossificação precoce da cartilagem e deformidades nos membros.</p>

      <h2 id="small-breed-vs-large-breed-differences">4. Raças Pequenas vs. Raças Grandes</h2>
      <p>Cães pequenos completam o esqueleto aos 10 meses; raças gigantes continuam até os 2 anos. Rações para filhotes em crescimento, como o <AmazonLink url="https://link.amazon/B052f55Rv">The Honest Kitchen Whole Food Clusters</AmazonLink>, mantêm proporções equilibradas de cálcio para um desenvolvimento ósseo seguro.</p>

      <h2 id="weekly-weigh-in-and-portion-adjustments">5. Pesagem Semanal e Ajuste de Ração</h2>
      <p>Pese seu filhote a cada 7 dias e atualize a gramatura na nossa calculadora. Um filhote esguio terá juntas protegidas por toda a vida.</p>
    `
  },
  ko: {
    title: '퍼피 성장 로드맵: 연령별 칼로리 계산, 성장 곡선과 칼슘 과잉의 위험',
    subtitle: '생후 8주부터 성견기까지: 대형견에게 칼슘 과다 복용이 왜 골격계 질환을 유발하는지, 그리고 체중 급증에 맞춘 안전한 사료량 재계산법.',
    excerpt: '자견은 생후 1년 동안 인간의 15년 치 성장을 해냅니다. RER 배수를 적용한 정밀 칼로리 계산법과 성장판 보호 전략을 확인하세요.',
    readTime: '7분 소요',
    tags: ['퍼피 영양학', '성장 곡선', '대형견 자견', '칼슘 인 비율', '급여량 계산표'],
    keyTakeaways: [
      '생후 4개월 미만의 자견은 골격 형성을 위해 기초 휴식 에너지(RER)의 최대 3.0배에 달하는 칼로리를 필요로 합니다.',
      '대형견 자견은 자율 급식을 피하는 것이 좋으며, 급격한 체중 증가는 고관절 이형성증 등 골격 질환의 위험을 높입니다.',
      '생후 6개월 이전의 자견은 장내 칼슘 흡수 조절 능력이 없어 과도한 칼슘이 성장판을 조기 폐쇄시킬 수 있습니다.',
      '소형견은 생후 10~12개월에 성견 사료로 교체하지만, 초대형견은 18~24개월까지 자견용 식단을 유지해야 합니다.'
    ],
    tableOfContents: [
      { id: 'puppy-metabolism-vs-adult-dogs', title: '1. 자견과 성견의 신진대사 차이' },
      { id: 'calculating-puppy-daily-calories', title: '2. 퍼피 1일 칼로리 계산 공식 (RER 배수)' },
      { id: 'the-calcium-to-phosphorus-danger-zone', title: '3. 칼슘 과다 공급의 치명적 위험' },
      { id: 'small-breed-vs-large-breed-differences', title: '4. 소형견 vs 대형견 자견의 성장 특성' },
      { id: 'weekly-weigh-in-and-portion-adjustments', title: '5. 주간 체중 측정과 사료량 업데이트' }
    ],
    contentHtml: `
      <p class="lead">생후 8주 된 강아지를 집에 데려오는 기쁨도 잠시, 사료 포장지의 두루뭉술한 일일 급여량 표는 많은 반려인을 고민에 빠뜨립니다. 자견의 체중과 대사는 매주 큰 폭으로 변화합니다.</p>

      <h2 id="puppy-metabolism-vs-adult-dogs">1. 자견과 성견의 신진대사 차이</h2>
      <p>생후 8~16주의 급성장기에는 단순한 체온 유지 외에도 골격, 근섬유, 신경계가 맹렬한 속도로 만들어지므로 엄청난 에너지가 요구됩니다.</p>

      <h2 id="calculating-puppy-daily-calories">2. 퍼피 1일 칼로리 계산 공식 (RER 배수)</h2>
      <p>수의 영양학 공식 <code>RER = 70 × (체중kg)^0.75</code>에 성장 단계별 배수를 곱합니다:</p>
      <ul>
        <li><strong>생후 4개월 미만:</strong> <code>3.0 × RER</code></li>
        <li><strong>생후 4개월~성견 체중의 80%:</strong> <code>2.0 × RER</code></li>
        <li><strong>골격 완성 직전까지:</strong> <code>1.8 × RER</code></li>
      </ul>

      <h2 id="the-calcium-to-phosphorus-danger-zone">3. 칼슘 과다 공급의 치명적 위험</h2>
      <p>성견과 달리 6개월 미만 강아지는 체내 칼슘 흡수 조절 장치가 미성숙하여 섭취한 칼슘을 고스란히 체내로 흡수합니다. 자견 사료에 임의로 칼슘제나 뼈 파우더를 섞어주면 심각한 골격 기형(HOD)을 초래합니다.</p>

      <h2 id="small-breed-vs-large-breed-differences">4. 소형견 vs 대형견 자견의 성장 특성</h2>
      <p>말티즈나 포메라니안은 10개월 전후로 성장을 마치지만, 리트리버나 진돗개 등 중대형견은 18~24개월까지 성장합니다. 대형견 퍼피 사료는 균형 잡힌 미네랄이 중요하며, <AmazonLink url="https://link.amazon/B052f55Rv">The Honest Kitchen Whole Food Clusters</AmazonLink> 같은 고품질 식단은 급격한 체중 증가 없이 뼈 성장을 돕습니다.</p>

      <h2 id="weekly-weigh-in-and-portion-adjustments">5. 주간 체중 측정과 사료량 업데이트</h2>
      <p>매주 같은 요일에 체중을 재고 당사 계산기에 입력해 하루 사료량을 조절하세요. 갈비뼈가 가볍게 만져지는 날렵한 체형을 유지해야 평생 튼튼한 관절을 유지할 수 있습니다.</p>
    `
  },
  it: {
    title: 'Guida all\'Alimentazione del Cucciolo: Calorie, Crescita e la Trappola del Calcio',
    subtitle: 'Dalle 8 settimane all\'età adulta: perché il calcio in eccesso favorisce displasie nelle razze grandi e come ricalcolare i grammi al crescere del peso.',
    excerpt: 'I cuccioli crescono più in un anno che gli umani in quindici. Impara a calcolare il fabbisogno calorico con i moltiplicatori RER e a proteggere le articolazioni.',
    readTime: '7 min di lettura',
    tags: ['Nutrizione del Cucciolo', 'Curve di Crescita', 'Cuccioli Razze Grandi', 'Rapporto Calcio Fosforo', 'Tabella Porzioni'],
    keyTakeaways: [
      'I cuccioli sotto i 4 mesi necessitano fino a 3 volte il loro Fabbisogno Energetico a Riposo (RER).',
      'Nelle razze grandi l\'alimentazione a volontà non è consigliata: una crescita eccessivamente rapida aumenta il rischio di disturbi ortopedici dello sviluppo come la displasia dell\'anca.',
      'Sotto i 6 mesi i cuccioli non regolano l\'assorbimento intestinale del calcio, assorbendolo passivamente.',
      'Il passaggio al cibo per adulti avviene a 10-12 mesi nei cani piccoli e a 18-24 mesi nei cani giganti.'
    ],
    tableOfContents: [
      { id: 'puppy-metabolism-vs-adult-dogs', title: '1. Metabolismo del Cucciolo vs Cane Adulto' },
      { id: 'calculating-puppy-daily-calories', title: '2. Calcolo delle Calorie Giornaliere (Fattori RER)' },
      { id: 'the-calcium-to-phosphorus-danger-zone', title: '3. Il Pericolo del Calcio in Eccesso' },
      { id: 'small-breed-vs-large-breed-differences', title: '4. Razze Piccole vs Razze Grandi' },
      { id: 'weekly-weigh-in-and-portion-adjustments', title: '5. Peso Settimanale e Aggiustamento Razone' }
    ],
    contentHtml: `
      <p class="lead">Accogliere un cucciolo di 8 settimane è meraviglioso, ma le tabelle generiche sui sacchi di crocchette creano spesso dubbi. Il metabolismo di un cucciolo cambia ogni settimana e richiede calcoli mirati.</p>

      <h2 id="puppy-metabolism-vs-adult-dogs">1. Metabolismo del Cucciolo vs Cane Adulto</h2>
      <p>Nelle prime 16 settimane la spesa energetica è altissima per sostenere la sintesi ossea, muscolare e neurologica.</p>

      <h2 id="calculating-puppy-daily-calories">2. Calcolo delle Calorie Giornaliere (Fattori RER)</h2>
      <p>Formula: <code>RER = 70 × (Peso in kg)^0.75</code> con moltiplicatori scalati:</p>
      <ul>
        <li><strong>Sotto i 4 mesi:</strong> <code>3.0 × RER</code></li>
        <li><strong>Dai 4 mesi all'80% del peso finale:</strong> <code>2.0 × RER</code></li>
        <li><strong>Fino alla maturità scheletrica:</strong> <code>1.8 × RER</code></li>
      </ul>

      <h2 id="the-calcium-to-phosphorus-danger-zone">3. Il Pericolo del Calcio in Eccesso</h2>
      <p>I cuccioli sotto i 6 mesi assorbono tutto il calcio introdotto senza filtri intestinali. Aggiungere polvere di calcio a un cibo per cuccioli bilanciato compromette la cartilagine e deforma gli arti.</p>

      <h2 id="small-breed-vs-large-breed-differences">4. Razze Piccole vs Razze Grandi</h2>
      <p>Un cane piccolo completa la struttura scheletrica a 10 mesi, un Alano cresce fino a 2 anni. Le formule per cani in crescita, come <AmazonLink url="https://link.amazon/B052f55Rv">The Honest Kitchen Whole Food Clusters</AmazonLink>, mantengono un corretto rapporto di calcio per una crescita ossea armoniosa.</p>

      <h2 id="weekly-weigh-in-and-portion-adjustments">5. Peso Settimanale e Aggiustamento Razone</h2>
      <p>Pesa il tuo cucciolo ogni 7 giorni e aggiorna i grammi sul nostro calcolatore gratuito. Un cucciolo snello con costole facilmente palpabili crescerà con articolazioni perfette.</p>
    `
  }
};
