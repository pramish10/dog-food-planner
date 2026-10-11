import type { RecipeBlueprint } from './types';

export const jaBlueprints: RecipeBlueprint[] = [
  // 1. TURKEY & PUMPKIN BLUEPRINT
  {
    slug: 'turkey-pumpkin-maintenance',
    name: '成犬用 消化器ケア赤身七面鳥＆かぼちゃの基本臨床設計図',
    shortDesc: '成犬の維持期のために臨床設計された65:10:10:8:4:3の黄金比率。高消化性赤身七面鳥、心臓保護タウリン、整腸カボチャ繊維、後入れEPA/DHAオメガ3による完全食処方。',
    badge: '臨床推奨・成犬基本設計',
    targetAudience: '成犬期（1〜7歳）／健康維持および胃腸ケア',
    colorTheme: '#0070f3',
    macroProfile: {
      proteinDm: '48.2%',
      fatDm: '22.8%',
      carbsDm: '13.4%',
      moisture: '72.5%',
      kcalPerKg: '1,220 kcal/kg（約34.6 kcal/oz）',
      caPhosphorusRatio: '1.25 : 1.0（NRC推奨適正範囲：1.1:1〜1.4:1）',
    },
    ingredients: [
      {
        name: '赤身七面鳥ミンチ（赤身93% / 脂質7%）',
        percentage: 65,
        category: '主筋肉肉類',
        role: '筋肉維持・酵素合成に必要な必須アミノ酸を高純度供給',
        clinicalBenefit: '消化管への負担を最小化する高消化性低アレルゲンタンパク質。',
        color: '#0070f3',
      },
      {
        name: '七面鳥のハツ（心臓）＆砂肝',
        percentage: 10,
        category: '筋性内臓・補酵素CoQ10',
        role: '心筋保護に不可欠な天然タウリン、CoQ10、ヘム鉄を供給',
        clinicalBenefit: '拡張型心筋症（DCM）を未然に防ぐ高活性天然タウリン。',
        color: '#7928ca',
      },
      {
        name: '無添加 100% 有機カボチャピューレ',
        percentage: 10,
        category: 'プレバイオティクス食物繊維',
        role: '結腸細胞のエネルギー源である短鎖脂肪酸（酪酸）の産生を促進',
        clinicalBenefit: '軟便と便秘の双方に作用し消化管粘膜を保護。',
        color: '#f5a623',
        affiliateKey: 'pumpkinPuree',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: '蒸しほうれん草＆ズッキーニ（微細刻み）',
        percentage: 8,
        category: '微量栄養緑黄色野菜',
        role: '抗酸化ルテイン、ゼアキサンチン、葉酸、カリウムを天然供給',
        clinicalBenefit: '強固な細胞壁を加熱で破壊し、シュウ酸を抑えて安全吸収。',
        color: '#10b981',
      },
      {
        name: '超微粉末 卵殻カルシウム＆有機ケルプ',
        percentage: 4,
        category: '必須骨格ミネラル・Ca:P比調製材',
        role: '肉類の過剰なリンを中和しCa:P比を1.25:1に正確に補正',
        clinicalBenefit: '骨なし肉単体のCa:P比1:20という危険な逆転を完全中和。',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: '天然アラスカンサーモンオイル（後入れ・非加熱）',
        percentage: 3,
        category: '海洋性長鎖オメガ3脂肪酸',
        role: '抗炎症性プロスタグランジンに変換される活性型EPA・DHAを供給',
        clinicalBenefit: '皮膚被毛のバリア機能を強化。熱酸化を防ぐため必ず冷却後に混合。',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      '成犬の消化管への負担を最小限に抑えつつ、NRC基準を満たすよう設計された完全手作り食のフラッグシップ処方。赤身七面鳥（93/7）を主タンパク質とし、心臓の健康を支えるハツ由来の天然タウリン、腸内細菌叢を育てるカボチャの水溶性ペクチン、そして肉類の豊富なリンを完璧に中和する卵殻カルシウムを緻密に配合しています。',
    clinicalRationale: [
      {
        title: '1. なぜ鶏肉や牛肉ではなく「赤身七面鳥（93/7）」なのか？',
        description:
          '市販のペットフードで最もアレルギー頻度の高い鶏肉・牛肉を避け、消化率94%以上を誇る単一七面鳥タンパク質を採用。脂質7%の赤身肉に限定することで膵臓への酵素負荷を最小限に抑えます。',
        points: [
          '生物価（BV）が高く、必須アミノ酸（リジン・メチオニン）の充足率100%。',
          '低脂肪設計により急性膵炎や胆泥症のリスクを大幅低減。',
          '単一タンパク質設計で食物過敏症の診断・管理に最適。',
        ],
      },
      {
        title: '2. 心臓の生命線：内臓肉由来の天然タウリンとコエンザイムQ10',
        description:
          '精肉だけでは不足するタウリンとCoQ10を、10%の七面鳥ハツ・砂肝から天然の状態で補給。心筋の収縮力を維持し、栄養性の拡張型心筋症（DCM）を予防します。',
        points: [
          '合成サプリメントに頼らない生体利用率の高い有機タウリン。',
          'ミトコンドリアのATP産生を助ける補酵素CoQ10が豊富。',
          '天然のヘム鉄と活性型ビタミンB12を同時に供給。',
        ],
      },
      {
        title: '3. カルシウム対リン比（1.25:1の黄金法則）',
        description:
          '骨なし肉単体のリン過剰（Ca:P比 約1:20）をそのまま給餌すると、二次性上皮小体機能亢進症を引き起こし骨からカルシウムが溶け出します。本処方では微粉末卵殻カルシウムにより1.25:1の理想比率を厳密に維持します。',
        points: [
          '卵殻由来炭酸カルシウムが約38%のエレメンタルカルシウムを供給。',
          '有機ケルプが甲状腺ホルモン合成に必要な天然ヨウ素を微量補給。',
          '骨格と歯牙の健康を生涯維持。',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: '衛生管理と内臓肉の微細カット',
        instruction: '調理器具と作業台を消毒します。七面鳥のハツと砂肝を消化しやすい約5mm角の小さなサイコロ状にカットします。',
      },
      {
        step: 2,
        title: '低温スチーム煮（82℃以下）',
        instruction: '七面鳥挽肉と内臓に水1/2カップを加え、弱火で8〜10分間煮ます。肉の赤みが消えるまで優しく火を通し、焼き色は付けません。',
        criticalTip: '高温で焼くと終末糖化産物（AGEs）が生成されるため、決して強火で炒めないでください。',
      },
      {
        step: 3,
        title: '緑黄色野菜のスチーム＆ピューレ加工',
        instruction: 'ズッキーニとほうれん草を4〜5分スチーム蒸しします。細胞壁を壊して栄養吸収率を高めるため、かぼちゃピューレと一緒にフードプロセッサーで滑らかに粉砕します。',
      },
      {
        step: 4,
        title: '必須：38℃以下への完全冷却',
        instruction: '野菜ピューレと肉をしっかりと混ぜ合わせます。サプリメントやオイルを加える前に、必ず室温（38℃以下）まで完全に冷まします。',
        criticalTip: '温かいフードにサーモンオイルを絶対に加えないでください。熱によってオメガ3脂肪酸が即座に過酸化脂質へと劣化します。',
      },
      {
        step: 5,
        title: '非加熱サプリメントの均一混合',
        instruction: '完全に冷めたフードに卵殻カルシウム粉末、有機ケルプ、冷たい天然サーモンオイルを加え、全体に均一に行き渡るよう2分間しっかりと混ぜ合わせます。',
      },
      {
        step: 6,
        title: 'デジタルスケール計量と小分け保存',
        instruction: 'デジタルキッチンスケールで愛犬の体重に合わせた1日分・1回分のグラム数を正確に計量し、密閉ガラス容器や冷凍保存袋に小分けします。',
      },
    ],
    storageGuidelines: [
      {
        method: '冷蔵保存',
        duration: '最長3〜4日',
        instructions: '3℃以下の冷蔵庫内で密閉ガラス容器に入れて保管してください。',
      },
      {
        method: '冷凍保存',
        duration: '最長90日',
        instructions: '空気を抜いた真空パックまたはシリコン保存袋で1食分ずつ冷凍します。',
      },
      {
        method: '解凍方法',
        duration: '冷蔵庫で一晩解凍',
        instructions: '給餌の24時間前に冷蔵庫へ移して自然解凍。電子レンジ強加熱はオメガ3を酸化させるため厳禁です。',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '280 – 320 kcal', dailyGramsTotal: '240 g / 日', mainProtein: '156 g', organMeat: '24 g', produceAndCarbs: '43 g', supplements: '17 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '550 – 620 kcal', dailyGramsTotal: '480 g / 日', mainProtein: '312 g', organMeat: '48 g', produceAndCarbs: '86 g', supplements: '34 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '950 – 1,080 kcal', dailyGramsTotal: '850 g / 日', mainProtein: '553 g', organMeat: '85 g', produceAndCarbs: '153 g', supplements: '59 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,320 – 1,480 kcal', dailyGramsTotal: '1,180 g / 日', mainProtein: '767 g', organMeat: '118 g', produceAndCarbs: '212 g', supplements: '83 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        '生後12ヶ月未満の大型犬・超大型犬の子犬には、成長期専用のカルシウム調整を行わずに給餌しないでください。',
        'IRISステージ3〜4の進行性慢性腎臓病（CKD）の犬には、リン制限処方なしで給餌しないでください。',
      ],
      transitionSteps: [
        '1〜3日目: 新レシピ25% / 既存フード75%',
        '4〜6日目: 新レシピ50% / 既存フード50%',
        '7〜9日目: 新レシピ75% / 既存フード25%',
        '10日目以降: 新レシピ100%に完全移行',
      ],
      calciumRule: '最重要：卵殻カルシウム粉末は絶対に省略しないでください。骨なし肉単体の給餌はCa:P比を著しく崩し、60日以内に重篤な骨脱灰を引き起こします。',
    },
    faq: [
      {
        question: '七面鳥の代わりに赤身牛挽肉を使用しても良いですか？',
        answer: 'はい、脂質8%以下の赤身肉であれば代替可能です。心臓保護に不可欠なタウリンを確保するため、10%の内臓肉比率は必ず維持してください。',
      },
      {
        question: '加熱せずに生肉・生野菜のまま給餌しても大丈夫ですか？',
        answer: '市販の家禽肉にはサルモネラ等の細菌リスクがあり、また犬は蒸し調理を行わない生の野菜細胞壁を消化できません。弱火でのスチーム蒸し煮を強く推奨します。',
      },
    ],
  },

  // 2. BEEF & SWEET POTATO BLUEPRINT
  {
    slug: 'beef-sweet-potato-vitality',
    name: 'グラスフェッド牛赤身肉＆さつまいもの高活力・筋肉維持設計図',
    shortDesc: '活動犬・運動量の多い愛犬のための62:10:12:8:4:4高スタミナ処方。90/10赤身牛挽肉、ビタミンA・ヘム鉄の宝庫である牛レバー＆ハツ、持続性炭水化物のさつまいもを配合。',
    badge: '高活力・筋肉維持設計',
    targetAudience: '高活動犬・アジリティ犬・運動量の多い成犬',
    colorTheme: '#7928ca',
    macroProfile: {
      proteinDm: '46.5%',
      fatDm: '24.0%',
      carbsDm: '17.5%',
      moisture: '71.0%',
      kcalPerKg: '1,290 kcal/kg（約36.6 kcal/oz）',
      caPhosphorusRatio: '1.25 : 1.0（NRC基準完全適合）',
    },
    ingredients: [
      {
        name: '放牧グラスフェッド牛赤身挽肉（90/10）',
        percentage: 62,
        category: '主赤身筋肉肉類',
        role: '筋肥大と運動持久力を支える天然クレアチン、共役リノール酸（CLA）、高密度亜鉛を補給',
        clinicalBenefit: '穀物肥育牛に比べオメガ6:3比率が良好で、運動後の筋炎症を速やかに沈静化。',
        color: '#e11d48',
      },
      {
        name: '牛レバー（肝臓）＆牛ハツ（心臓）',
        percentage: 10,
        category: '高濃度微量栄養素内臓',
        role: '天然ビタミンA（レチノール）、活性型B12、銅、ヘム鉄、コエンザイムQ10を高密度供給',
        clinicalBenefit: '運動時の赤血球酸素運搬能とミトコンドリアエネルギー代謝を強力にブースト。',
        color: '#7928ca',
      },
      {
        name: '蒸しさつまいも（皮むき・マッシュ）',
        percentage: 12,
        category: '低GI複合炭水化物・カリウム',
        role: '急激な血糖上昇を起こさず、筋グリコーゲンを持続的に補充する低GI炭水化物',
        clinicalBenefit: '長時間の散歩やドッグスポーツにおけるエネルギー切れと筋肉疲労を予防。',
        color: '#f5a623',
      },
      {
        name: '蒸しブロッコリー＆にんじん（微細粉砕）',
        percentage: 8,
        category: 'アブラナ科抗酸化野菜',
        role: '肝臓解毒を助けるスルフォラファン、細胞を保護するカロテノイドを供給',
        clinicalBenefit: '激しい運動によって発生する活性酸素（ROS）を速やかに無毒化。',
        color: '#10b981',
      },
      {
        name: '卵殻カルシウム＆有機ケルプブレンド',
        percentage: 4,
        category: '必須骨格ミネラル',
        role: '牛肉の豊富なリンを1.25:1に中和し、ヨウ素で基礎代謝をサポート',
        clinicalBenefit: 'ジャンプや走行による関節・骨格への機械的衝撃から骨密度を防護。',
        color: '#0070f3',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'エキストラバージンオリーブオイル＆タラ肝油',
        percentage: 4,
        category: '健康脂質・天然ビタミンD3',
        role: 'カルシウムの骨定着を促す天然ビタミンD3とオレイン酸をバランス補給',
        clinicalBenefit: '高運動犬のホルモン合成と血管内皮機能を強化。必ず冷却後に後入れ。',
        color: '#f5a623',
      },
    ],
    executiveSummary:
      'アジリティ犬、ワーキングドッグ、あるいは毎日の散歩運動量が多いエネルギッシュな成犬のために設計された高カロリー・高密度筋肉維持設計図。放牧牛赤身肉のクレアチンと共役リノール酸が筋肉をビルドアップし、低GIのさつまいもが6〜8時間にわたり持続的なエネルギーを筋組織へ供給します。',
    clinicalRationale: [
      {
        title: '1. グラスフェッド牛肉がもたらす天然クレアチンと筋肉保護',
        description:
          '運動量の多い犬の筋線維ではクレアチンリン酸の消費が激しくなります。放牧牛の赤身肉は筋組織内に直接クレアチンを蓄積させ、運動中の疲労耐性と瞬発力を劇的に向上させます。',
        points: [
          '天然の共役リノール酸（CLA）が除脂肪体重の維持を促進。',
          '穀物肥育牛に比べオメガ3含有量が約3倍豊富。',
          '牛レバー由来のヘム鉄が運動中の酸素供給を最大化。',
        ],
      },
      {
        title: '2. さつまいもによる持続性グリコーゲン補充メカニズム',
        description:
          'トウモロコシや小麦のような急激な血糖値スパイクを起こさず、6〜8時間にわたり安定してグルコースを筋肉へ供給し、膵臓への負担を最小化します。',
        points: [
          '長時間のハイキングや運動でもスタミナが途切れない。',
          'カリウムが運動中の筋肉の痙攣や疲労を防ぐ。',
          '食物繊維ペクチンが腸内環境を穏やかに整える。',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: '牛肉および内臓のダイスカット',
        instruction: '牛ハツと牛レバーを約5mm角の小さなサイコロ状にカットします。調理直前まで冷蔵保管してください。',
      },
      {
        step: 2,
        title: '牛挽肉と内臓の低温煮込み',
        instruction: '赤身牛挽肉（90/10）と内臓に水1/2カップを加え、中弱火で10分間煮ます。焦げ目をつけることなく、全体に熱が通るまで加熱します。',
      },
      {
        step: 3,
        title: 'さつまいも・ブロッコリーのスチーム蒸し',
        instruction: '皮をむいて角切りにしたさつまいも、ブロッコリー、にんじんをフォークがスッと通るまで10〜12分蒸し、粗めにマッシュします。',
      },
      {
        step: 4,
        title: '38℃以下への完全冷却',
        instruction: 'マッシュした野菜を調理した牛肉に混ぜ合わせます。オイルやサプリメントを加える前に、鍋全体を38℃以下まで完全に冷まします。',
      },
      {
        step: 5,
        title: '冷製オイルとカルシウムの均一混合',
        instruction: '卵殻カルシウム粉末、有機ケルプ、オリーブオイル、タラ肝油を振りかけ、全体にムラがなくなるまで2分間しっかりと混ぜ合わせます。',
      },
      {
        step: 6,
        title: '計量と小分け保存',
        instruction: '当サイトの計算ツールで算出した運動量別カロリーに基づき、デジタルスケールで計量。数日分を冷蔵し、余剰分は即座に冷凍します。',
      },
    ],
    storageGuidelines: [
      {
        method: '冷蔵保存',
        duration: '最長3〜4日',
        instructions: '3℃以下の冷蔵庫内で密閉ガラス容器に入れて保管してください。',
      },
      {
        method: '冷凍保存',
        duration: '最長90日',
        instructions: '真空パックまたはシリコン保存袋で1食分ずつ冷凍します。',
      },
      {
        method: '給餌前の温め',
        duration: 'ぬるま湯湯煎',
        instructions: '給餌直前にぬるま湯で湯煎し、人肌（常温）に戻してから与えてください。',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '310 – 350 kcal', dailyGramsTotal: '230 g / 日', mainProtein: '143 g', organMeat: '23 g', produceAndCarbs: '46 g', supplements: '18 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '620 – 710 kcal', dailyGramsTotal: '460 g / 日', mainProtein: '285 g', organMeat: '46 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1,080 – 1,220 kcal', dailyGramsTotal: '810 g / 日', mainProtein: '502 g', organMeat: '81 g', produceAndCarbs: '162 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,490 – 1,680 kcal', dailyGramsTotal: '1,120 g / 日', mainProtein: '694 g', organMeat: '112 g', produceAndCarbs: '224 g', supplements: '90 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        '膵炎の診断を受けた犬には給餌しないでください（乾物基準で脂質12%以下の超低脂肪食が必要です）。',
        'カルシウム粉末を抜いて給餌しないでください（カルシウムのない純肉は骨の脱灰を引き起こします）。',
      ],
      transitionSteps: [
        '1〜3日目: 新レシピ25% / 既存フード75%',
        '4〜6日目: 新レシピ50% / 既存フード50%',
        '7〜9日目: 新レシピ75% / 既存フード25%',
        '10日目以降: 新レシピ100%に完全移行',
      ],
      calciumRule: '牛肉の豊富なリンを確実に中和するため、カルシウム粉末は必ずデジタルスケールで精密に計量してください。',
    },
    faq: [
      {
        question: '運動量の少ない室内犬にもこのレシピを与えられますか？',
        answer: '運動量の少ない犬の場合は、代謝カロリーの低下に合わせて給餌量を15〜20%減らすか、低脂肪な「七面鳥＆かぼちゃ設計図」を選択することをおすすめします。',
      },
    ],
  },

  // 3. SALMON & QUINOA BLUEPRINT
  {
    slug: 'salmon-quinoa-joint-coat',
    name: '天然アラスカンサーモン＆キヌア 関節ケア・皮膚被毛抗炎症設計図',
    shortDesc: '関節炎の緩和と皮膚の痒み鎮静に特化した60:8:12:10:6:4海洋性処方。高純度EPA/DHAを含む天然サーモン、完全アミノ酸の有機キヌア、高アントシアニンのブルーベリーを贅沢に配合。',
    badge: '関節ケア・皮膚抗炎症',
    targetAudience: '成犬〜シニア犬／関節の強ばり・皮膚のかゆみ・毛艶改善',
    colorTheme: '#06b6d4',
    macroProfile: {
      proteinDm: '44.0%',
      fatDm: '25.5%',
      carbsDm: '18.5%',
      moisture: '73.0%',
      kcalPerKg: '1,260 kcal/kg（約35.7 kcal/oz）',
      caPhosphorusRatio: '1.28 : 1.0（NRC基準適合）',
    },
    ingredients: [
      {
        name: '天然アラスカンサーモン＆白身魚フィレ',
        percentage: 60,
        category: '主海洋性魚類',
        role: '関節滑液の合成を促す高濃度EPA/DHA、海洋性コラーゲンペプチドを供給',
        clinicalBenefit: '関節の炎症性カスケード（COX-2）を抑制し、アレルギー皮膚のバリア機能を修復。',
        color: '#06b6d4',
      },
      {
        name: '七面鳥ハツ＆砂肝（タウリン源）',
        percentage: 8,
        category: '天然タウリン供給内臓',
        role: '魚中心食で不足しやすい心筋保護タウリンとコエンザイムQ10を確実に補填',
        clinicalBenefit: '関節ケアと同時に心臓のポンプ機能を確実にバックアップ。',
        color: '#7928ca',
      },
      {
        name: '有機キヌア（完全調理済み）',
        percentage: 12,
        category: '低アレルゲン完全アミノ酸種子',
        role: 'グルテンフリーで9種類の必須アミノ酸を網羅する低アレルゲンスーパーフード',
        clinicalBenefit: '敏感な消化管に負担をかけず、抗アレルギー食のベースとして機能。',
        color: '#f5a623',
        affiliateKey: 'quinoa',
      },
      {
        name: 'ブルーベリー・ケール・ズッキーニ（蒸し加工）',
        percentage: 10,
        category: '高ORACポリフェノール・アントシアニン',
        role: '軟骨細胞の酸化崩壊を防ぐ高濃度アントシアニンと植物性フラボノイド',
        clinicalBenefit: 'シニア期の関節軟骨の摩耗を防ぎ、脳の神経細胞のアンチエイジングを促進。',
        color: '#10b981',
      },
      {
        name: 'コールドプレス麻の実オイル＆緑イ貝パウダー',
        percentage: 6,
        category: 'GLA・天然GAG関節潤滑因子',
        role: '関節軟骨の水分を保持するコンドロイチン硫酸、ヒアルロン酸、天然GLAを供給',
        clinicalBenefit: '起床時の関節の強ばりを劇的に緩和し、フケやかゆみを一掃。必ず後入れ。',
        color: '#0070f3',
      },
      {
        name: '有機海藻カルシウム（リソサムニウム）＆ケルプ',
        percentage: 4,
        category: '植物性多孔質イオン化カルシウム',
        role: '72種類の微量ミネラルを含む天然紅藻由来多孔質カルシウムでCa:P 1.28:1を達成',
        clinicalBenefit: '合成炭酸カルシウムよりも胃粘膜への刺激が少なく、優れた骨密度維持能を発揮。',
        color: '#e11d48',
        affiliateKey: 'kelp',
      },
    ],
    executiveSummary:
      '関節炎による歩行の強ばりや、慢性的な皮膚のかゆみ・フケ・毛艶の衰えに悩む愛犬のための臨床抗炎症設計図。天然サーモンのEPA/DHA、緑イ貝の天然グリコサミノグリカン、麻の実オイルのGLAが相乗的に働き、痛みを和らげ皮膚バリアを再生します。',
    clinicalRationale: [
      {
        title: '1. 関節軟骨と皮膚を守る海洋性EPA・DHAの抗炎症カスケード',
        description:
          'EPAとDHAが細胞膜のアラキドン酸を置換することで、抗炎症性プロスタグランジンを優先的に生成し、関節軟骨の破壊と皮膚の赤み・かゆみを劇的に沈静化させます。',
        points: [
          '亜麻仁油などの植物性ALAに比べ、犬の体内での抗炎症利用率が10倍以上高い。',
          '関節滑液の粘度を改善し、歩行時の摩擦痛を緩和。',
          'ステロイド等に頼らずアトピー性皮膚炎の痒みを自然に沈静化。',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'サーモンと白身魚・内臓の低温ポシェ',
        instruction: '1カップの水でサーモン、白身魚、七面鳥のハツをごく弱火で7〜8分優しく蒸し煮にします。魚の身を丁寧にほぐし小骨を確認します。',
      },
      {
        step: 2,
        title: 'キヌアの洗浄と炊飯',
        instruction: '流水でサポニン（苦味成分）をしっかり洗い流したキヌアを、2倍量の水で約15分ふっくらするまで炊き上げ、冷まします。',
      },
      {
        step: 3,
        title: 'ベリー類と緑黄色野菜の蒸し調理',
        instruction: 'ケールとズッキーニを4分間スチーム加熱し、ブルーベリーを加えて粗めのピューレ状に粉砕します。',
      },
      {
        step: 4,
        title: '必須：38℃以下への完全冷却',
        instruction: '加熱調理した全食材を混ぜ合わせ、サプリメントを加える前に必ず室温（38℃以下）まで完全に冷まします。',
        criticalTip: '海洋性オメガ3脂肪酸は熱に極めて弱いため、決して温かい状態のフードにオイルを混ぜないでください。',
      },
      {
        step: 5,
        title: '非加熱サプリメント・オイルの混合',
        instruction: '有機海藻カルシウム、ケルプ、麻の実オイル、緑イ貝パウダーをふりかけ、2分間しっかりと混ぜ合わせます。',
      },
      {
        step: 6,
        title: '計量・冷蔵および冷凍小分け保存',
        instruction: 'デジタルスケールで給餌量を正確に計量します。2〜3日分をガラス容器で冷蔵し、残りは小分けにして冷凍保存します。',
      },
    ],
    storageGuidelines: [
      {
        method: '冷蔵保存',
        duration: '最長3日（72時間以内）',
        instructions: '魚肉は家禽類よりも酸化・腐敗が早いため、冷蔵保存は72時間以内に使い切ってください。',
      },
      {
        method: '冷凍保存',
        duration: '最長60日',
        instructions: '繊細な魚油の過酸化を防ぐため、空気を遮断して密閉冷凍してください。',
      },
      {
        method: '解凍方法',
        duration: '冷蔵庫内自然解凍',
        instructions: '冷蔵庫内でゆっくり自然解凍します。オメガ3が熱変性するため電子レンジの加熱は避けてください。',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '300 – 340 kcal', dailyGramsTotal: '235 g / 日', mainProtein: '141 g', organMeat: '19 g', produceAndCarbs: '52 g', supplements: '23 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '600 – 680 kcal', dailyGramsTotal: '470 g / 日', mainProtein: '282 g', organMeat: '38 g', produceAndCarbs: '103 g', supplements: '47 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1,040 – 1,180 kcal', dailyGramsTotal: '830 g / 日', mainProtein: '498 g', organMeat: '66 g', produceAndCarbs: '183 g', supplements: '83 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,450 – 1,620 kcal', dailyGramsTotal: '1,150 g / 日', mainProtein: '690 g', organMeat: '92 g', produceAndCarbs: '253 g', supplements: '115 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        '北米太平洋沿岸等で捕獲された生サーモンを生のまま給餌しないでください（ネオリケッチア寄生虫による「サケ中毒症」のリスク）。加熱調理によりこのリスクは完全に無力化されます。',
      ],
      transitionSteps: [
        '1〜3日目: 新レシピ25% / 既存フード75%',
        '4〜6日目: 新レシピ50% / 既存フード50%',
        '7〜9日目: 新レシピ75% / 既存フード25%',
        '10日目以降: 新レシピ100%に完全移行',
      ],
      calciumRule: 'カルシウム対リン比を正確に維持するため、海藻カルシウムはグラム単位で厳密に計量してください。',
    },
    faq: [
      {
        question: '缶詰のサーモン（水煮）を使用しても良いですか？',
        answer: '塩分（食塩）が無添加で水煮された天然サーモン缶であれば使用可能です。ただし、EPA/DHAの鮮度保持の観点からは新鮮な生サーモンまたは冷凍サーモンの加熱調理が最も推奨されます。',
      },
    ],
  },

  // 4. LAMB & CRANBERRY BLUEPRINT
  {
    slug: 'lamb-cranberry-gentle-gut',
    name: '放牧ラム肉＆クランベリー 低アレルゲン腸管ケア・尿路健康設計図',
    shortDesc: '鶏肉・牛肉アレルギーを抱える犬のための64:8:12:8:5:3新規単一赤身肉処方。消化に優しい放牧ラム肉、内臓、粘膜を保護するバターナッツスクワッシュ、尿路環境を整えるクランベリーを配合。',
    badge: '低アレルゲン腸管・尿路ケア',
    targetAudience: '牛肉・鶏肉アレルギー、慢性胃腸炎、尿路トラブルを抱える犬',
    colorTheme: '#10b981',
    macroProfile: {
      proteinDm: '45.8%',
      fatDm: '26.2%',
      carbsDm: '16.0%',
      moisture: '72.0%',
      kcalPerKg: '1,310 kcal/kg（約37.1 kcal/oz）',
      caPhosphorusRatio: '1.25 : 1.0（NRC基準適合）',
    },
    ingredients: [
      {
        name: '放牧ラム赤身挽肉（低アレルゲン単一肉）',
        percentage: 64,
        category: '新規単一赤身肉',
        role: '鶏・牛アレルギー犬のための高純度L-カルニチン、有機亜鉛、活性型B12を供給',
        clinicalBenefit: '既存の食物アレルギー感作を回避し、頑固な皮膚炎や軟便を根底から解消。',
        color: '#10b981',
      },
      {
        name: 'ラムレバー（肝臓）＆ラムキドニー（腎臓）',
        percentage: 8,
        category: '分泌性高機能内臓',
        role: '抗酸化セレン、銅、レチノール、葉酸を高密度で補給',
        clinicalBenefit: '細胞膜の過酸化を防ぎ、腸管免疫（GALT）の正常化をサポート。',
        color: '#7928ca',
      },
      {
        name: 'バターナッツスクワッシュ＆無添加生クランベリー',
        percentage: 12,
        category: '整腸ペクチン・尿路プロアントシアニジン',
        role: '尿路への病原菌定着を防ぐプロアントシアニジン（PACs）と粘膜保護ペクチン',
        clinicalBenefit: '腸粘膜の炎症を優しく包んで軟便を固め、同時に膀胱・尿路の衛生を保護。',
        color: '#f5a623',
      },
      {
        name: '蒸しいんげん豆＆生パセリ（微細刻み）',
        percentage: 8,
        category: 'クロロフィル・低刺激性繊維',
        role: '腸管の異常痙攣を鎮静化するアピゲニン、クロロフィル、低刺激食物繊維',
        clinicalBenefit: 'ガス発生（腹部膨満）を起こさずに便のかさを増やし、口臭を天然脱臭。',
        color: '#0070f3',
      },
      {
        name: '超微粉末 卵殻カルシウム＆有機ケルプ',
        percentage: 5,
        category: '必須骨格ミネラル',
        role: '放牧ラム肉の豊富なリンを1.25:1に中和する純粋炭酸カルシウム',
        clinicalBenefit: '過敏な胃腸にも一切の刺激を与えず、完璧な骨格形成と骨密度を維持。',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: '天然アラスカンサーモンオイル（後入れ）',
        percentage: 3,
        category: '海洋性長鎖オメガ3',
        role: '腸粘膜の炎症を鎮め、皮膚の痒みを抑える活性型EPA/DHA',
        clinicalBenefit: 'リーキーガット（腸漏れ）を防ぐ必須脂肪酸。必ず冷却後に後入れ。',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      '鶏肉・牛肉へのアレルギー、慢性的軟便、お腹のガスだまり、尿路トラブルに悩む愛犬のための臨床特別設計図。新規タンパク質としての放牧ラム肉に、整腸バターナッツスクワッシュと尿路を衛生的に保つクランベリーを融合させました。',
    clinicalRationale: [
      {
        title: '1. 慢性アレルギーになぜ放牧ラム肉なのか？',
        description:
          '市販の家禽類や穀物肥育牛は犬の食物アレルギーの大部分を占めます。放牧ラム肉はこれらと交差反応を起こさない新規タンパク質として腸管免疫を休ませます。',
        points: [
          '犬の2大アレルゲン（鶏肉・牛肉）を完全排除。',
          '高純度L-カルニチンが心筋機能と脂質代謝をサポート。',
          '食欲不振や偏食の犬でも喜んで食べる抜群の嗜好性。',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'ラム内臓肉の微細カットと下準備',
        instruction: 'ラムレバーとキドニー（腎臓）を約5mm角の小さなサイコロ状にカットします。',
      },
      {
        step: 2,
        title: 'ラム赤身肉と内臓の低温蒸し煮',
        instruction: '放牧ラム挽肉と内臓に水1/2カップを加え、弱火で8〜10分間煮ます。余分な脂分が浮いた場合は適度に取り除きます。',
      },
      {
        step: 3,
        title: 'スクワッシュ・クランベリー・いんげん豆の蒸し調理',
        instruction: '皮をむいたバターナッツスクワッシュ、いんげん豆、生クランベリーを6〜8分柔らかくなるまで蒸し、滑らかなピューレ状に粉砕します。',
      },
      {
        step: 4,
        title: '38℃以下への完全冷却',
        instruction: '野菜・果実ピューレと調理したラム肉を混ぜ合わせ、室温（38℃以下）まで完全に冷まします。',
      },
      {
        step: 5,
        title: '非加熱サプリメントの均一混合',
        instruction: '卵殻カルシウム粉末、有機ケルプ、冷たいサーモンオイルを加え、2分間しっかりと混ぜ合わせます。',
      },
      {
        step: 6,
        title: '正確な計量と小分け保存',
        instruction: 'デジタルスケールで1回分の給餌量を計量し、ガラス容器に保存または小分け冷凍します。',
      },
    ],
    storageGuidelines: [
      {
        method: '冷蔵保存',
        duration: '最長3〜4日',
        instructions: '3℃以下の冷蔵庫内で密閉ガラス容器に入れて保管してください。',
      },
      {
        method: '冷凍保存',
        duration: '最長90日',
        instructions: '空気を抜いた真空パックまたはシリコン保存袋で1食分ずつ冷凍します。',
      },
      {
        method: '給餌前の温め',
        duration: 'ぬるま湯湯煎',
        instructions: 'ぬるま湯で優しく湯煎し、常温に戻してから与えてください。',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '305 – 345 kcal', dailyGramsTotal: '230 g / 日', mainProtein: '147 g', organMeat: '18 g', produceAndCarbs: '46 g', supplements: '19 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '610 – 700 kcal', dailyGramsTotal: '460 g / 日', mainProtein: '294 g', organMeat: '37 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1,060 – 1,200 kcal', dailyGramsTotal: '820 g / 日', mainProtein: '525 g', organMeat: '66 g', produceAndCarbs: '164 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,480 – 1,650 kcal', dailyGramsTotal: '1,130 g / 日', mainProtein: '723 g', organMeat: '90 g', produceAndCarbs: '226 g', supplements: '91 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        '砂糖やブドウ果汁濃縮液が添加されたドライクランベリーは絶対に使用しないでください。無添加の生クランベリーまたは冷凍の純粋なものを使用してください。',
      ],
      transitionSteps: [
        '1〜3日目: 新レシピ25% / 既存フード75%',
        '4〜6日目: 新レシピ50% / 既存フード50%',
        '7〜9日目: 新レシピ75% / 既存フード25%',
        '10日目以降: 新レシピ100%に完全移行',
      ],
      calciumRule: '過敏な胃腸を守りカルシウム欠乏を防ぐため、卵殻カルシウム粉末は必ず適量を正確に加えてください。',
    },
    faq: [
      {
        question: 'クランベリーは犬に安全ですか？',
        answer: 'はい、無添加で加熱調理された純粋なクランベリーは安全です。膀胱内壁への細菌付着を防ぐプロアントシアニジンと抗酸化物質が豊富に含まれています。',
      },
    ],
  },
];
