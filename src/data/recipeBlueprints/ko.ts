import type { RecipeBlueprint } from './types';

export const koBlueprints: RecipeBlueprint[] = [
  // 1. TURKEY & PUMPKIN BLUEPRINT
  {
    slug: 'turkey-pumpkin-maintenance',
    name: '성견 맞춤 저지방 칠면조 & 호박 영양 설계도',
    shortDesc: '성견 건강 유지를 위해 65:10:10:8:4:3 비율로 설계된 자연식. 저지방 칠면조 93/7, 심장 보호 천연 타우린, 단호박 섬유질, 난각 칼슘 함유.',
    badge: '성견 건강유지 표준 처방',
    targetAudience: '성견 (1~7세) // 영양 유지 및 소화기 케어',
    colorTheme: '#0070f3',
    macroProfile: {
      proteinDm: '48.2%',
      fatDm: '22.8%',
      carbsDm: '13.4%',
      moisture: '72.5%',
      kcalPerKg: '1,220 kcal/kg (약 34.6 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (NRC 권장 기준: 1.1:1 – 1.4:1)',
    },
    ingredients: [
      {
        name: '미국산 저지방 칠면조 분쇄육 (93% 살코기 / 7% 지방)',
        percentage: 65,
        category: '주요 순살 근육육',
        role: '근육 합성 및 체내 효소 생성을 위한 필수 아미노산 공급',
        clinicalBenefit: '소화율 94% 이상의 저알레르기 단일 단백질 원료.',
        color: '#0070f3',
      },
      {
        name: '칠면조 염통(심장) & 모래주머니',
        percentage: 10,
        category: '근육 내장육 & CoQ10 공급원',
        role: '심근 보호에 필수적인 천연 타우린, CoQ10, 헴철, 비타민 B12 공급',
        clinicalBenefit: '식이성 확장성 심근병증(DCM)을 예방하는 천연 유기 타우린.',
        color: '#7928ca',
      },
      {
        name: '유기농 100% 순수 단호박 퓌레',
        percentage: 10,
        category: '프리바이오틱스 수용성 식이섬유',
        role: '대장 상피세포의 에너지원인 단쇄지방산(뷰티르산) 생성 촉진',
        clinicalBenefit: '묽은 변을 단단하게 잡고 변비를 예방하는 이중 정장 작용.',
        color: '#f5a623',
        affiliateKey: 'pumpkinPuree',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: '스팀 조리 베이비 시금치 & 주키니 호박',
        percentage: 8,
        category: '항산화 파이토뉴트리언트 채소',
        role: '천연 엽산, 비타민 K1, 칼륨 및 세포 보호 루테인 공급',
        clinicalBenefit: '가벼운 스팀 조리로 셀룰로오스 세포벽을 파괴하여 안전 흡수.',
        color: '#10b981',
      },
      {
        name: '초미세 난각 칼슘 분말 & 유기농 켈프',
        percentage: 4,
        category: '필수 골격 미네랄 & Ca:P 조절제',
        role: '순살코기의 과도한 인을 중화하여 1.25:1 Ca:P 비율 완성',
        clinicalBenefit: '순살코기 단독 급여 시 발생하는 골 탈회 및 칼슘 결핍 방지.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: '자연산 알래스카 연어 오일 (냉각 후 첨가)',
        percentage: 3,
        category: '해양성 장쇄 오메가-3 EPA/DHA',
        role: '염증성 사이토카인을 억제하는 활성형 EPA와 DHA 공급',
        clinicalBenefit: '피부 장벽 강화 및 관절염 예방. 열산패 방지를 위해 냉각 후 혼합.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      '성견의 소화기 부담을 최소화하면서 NRC 영양 기준을 충족하도록 설계된 홀푸드 자연식 플래그십 레시피. 저지방 칠면조 93/7을 단일 단백질로 하고, 심장 건강을 돕는 천연 타우린, 장 점막을 회복시키는 단호박 펙틴, 인을 중화하는 난각 칼슘을 정밀 배합했습니다.',
    clinicalRationale: [
      {
        title: '1. 닭고기나 소고기 대신 저지방 칠면조(93/7)를 사용하는 이유',
        description:
          '반려견 식이 알레르기의 대부분을 차지하는 닭고기와 소고기를 배제하고, 소화율 94% 이상의 저알레르기 칠면조 살코기를 단일 단백질로 사용하여 췌장 부담을 줄였습니다.',
        points: [
          '높은 생물가(BV)로 NRC 기준 필수 아미노산 100% 충족.',
          '저지방 설계로 급성 췌장염 및 소화 불량 위험 예방.',
          '식이 과민 반응 모니터링에 최적화된 단일 육류 구성.',
        ],
      },
      {
        title: '2. 심장의 생명선: 내장육 유래 천연 타우린과 CoQ10',
        description:
          '순살코기만으로는 심근에 필요한 타우린을 충족할 수 없습니다. 10%의 칠면조 염통과 모래주머니를 배합하여 천연 유기 타우린과 CoQ10을 충분히 공급합니다.',
        points: [
          '합성 영양제 없이 천연 생체 이용률 높은 타우린 확보.',
          '세포 미토콘드리아 에너지를 돕는 코엔자임 Q10 풍부.',
          '영양 불균형으로 인한 확장성 심근병증(DCM) 예방.',
        ],
      },
      {
        title: '3. 칼슘 대 인 비율 (1.25:1 황금 법칙)',
        description:
          '뼈 없는 순살코기는 칼슘 대 인의 비율이 1:20으로 극도로 왜곡되어 있어, 칼슘 보충 없이 급여하면 뼈에서 칼슘이 빠져나갑니다. 난각 칼슘으로 1.25:1 이상적 비율을 유지합니다.',
        points: [
          '난각 유래 탄산칼슘으로 약 38% 순수 원소 칼슘 공급.',
          '유기농 켈프가 갑상선 호르몬 합성에 필요한 천연 요오드 보충.',
          '평생 튼튼한 골격과 치아 건강 유지.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: '위생 준비 및 내장육 손질',
        instruction: '조리 도구와 도마를 위생 소독합니다. 칠면조 염통과 모래주머니를 5mm 크기의 작은 주사위 모양으로 잘게 썹니다.',
      },
      {
        step: 2,
        title: '저온 스팀 조리 (<82°C)',
        instruction: '칠면조 다짐육과 내장에 물 1/2컵을 넣고 약불에서 8~10분간 붉은 기가 사라질 때까지 부드럽게 익힙니다. 굽거나 태우지 않습니다.',
        criticalTip: '고온으로 튀기거나 구우면 유해 성분(AGEs)이 생성되므로 반드시 약불에서 수분 조리하세요.',
      },
      {
        step: 3,
        title: '채소 찌기 및 퓌레 가공',
        instruction: '주키니 호박과 시금치를 4~5분간 찝니다. 소화 흡수율을 극대화하기 위해 단호박 퓌레와 함께 푸드 프로세서로 곱게 갈아줍니다.',
      },
      {
        step: 4,
        title: '38°C 이하 필수 냉각',
        instruction: '채소 퓌레와 익힌 고기를 잘 섞어줍니다. 오일이나 영양제를 넣기 전에 반드시 실온(38°C 이하)으로 완전히 식힙니다.',
        criticalTip: '따뜻한 음식에 연어 오일을 넣으면 열로 인해 오메가-3가 즉시 산패되므로 절대 따뜻할 때 넣지 마세요.',
      },
      {
        step: 5,
        title: '냉각 후 영양제 혼합',
        instruction: '완전히 식은 상태에서 난각 칼슘 분말, 켈프, 차가운 자연산 연어 오일을 넣고 2분간 골고루 섞어줍니다.',
      },
      {
        step: 6,
        title: '정밀 계량 및 소분 보관',
        instruction: '전자 주방 저울로 하루 급여량을 정확히 측정한 뒤 밀폐 유리 용기에 냉장 보관하거나 냉동 전용 백에 1회분씩 소분합니다.',
      },
    ],
    storageGuidelines: [
      {
        method: '냉장 보관',
        duration: '최대 3~4일',
        instructions: '3°C 이하의 밀폐 유리 용기에 보관하세요.',
      },
      {
        method: '냉동 보관',
        duration: '최대 90일',
        instructions: '공기를 차단한 진공팩이나 실리콘 백에 1회분씩 냉동합니다.',
      },
      {
        method: '해동 방법',
        duration: '냉장 자연 해동',
        instructions: '급여 24시간 전 냉장실로 옮겨 해동하세요. 전자레인지 고온 가열은 금지합니다.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '280 – 320 kcal', dailyGramsTotal: '240 g / 일', mainProtein: '156 g', organMeat: '24 g', produceAndCarbs: '43 g', supplements: '17 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '550 – 620 kcal', dailyGramsTotal: '480 g / 일', mainProtein: '312 g', organMeat: '48 g', produceAndCarbs: '86 g', supplements: '34 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '950 – 1,080 kcal', dailyGramsTotal: '850 g / 일', mainProtein: '553 g', organMeat: '85 g', produceAndCarbs: '153 g', supplements: '59 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,320 – 1,480 kcal', dailyGramsTotal: '1,180 g / 일', mainProtein: '767 g', organMeat: '118 g', produceAndCarbs: '212 g', supplements: '83 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        '생후 12개월 미만의 대형견 성장기 자견에게는 성장기 전용 칼슘 조절 없이 급여하지 마세요.',
        'IRIS 3~4기 만성 신부전증(CKD) 반려견에게는 인 제한 식단 없이 급여하지 마세요.',
      ],
      transitionSteps: [
        '1~3일차: 새 자연식 25% / 기존 사료 75%',
        '4~6일차: 새 자연식 50% / 기존 사료 50%',
        '7~9일차: 새 자연식 75% / 기존 사료 25%',
        '10일차 이후: 새 자연식 100% 완전 전환',
      ],
      calciumRule: '필수 원칙: 난각 칼슘 파우더를 절대 생략하지 마세요. 칼슘 없는 순살코기만 급여하면 60일 이내에 심각한 골 탈회가 발생합니다.',
    },
    faq: [
      {
        question: '칠면조 대신 지방이 적은 소고기 다짐육을 사용해도 되나요?',
        answer: '네, 지방 함량 8% 이하의 살코기라면 대체 가능합니다. 단, 심장 보호를 위한 필수 타우린 공급을 위해 10%의 내장육 비율은 반드시 유지해야 합니다.',
      },
      {
        question: '익히지 않고 생식으로 급여해도 되나요?',
        answer: '시판 가금류는 세균 감염 위험이 높고, 찌지 않은 생채소는 반려견이 셀룰로오스 세포벽을 소화할 수 없습니다. 저온 수분 조리를 강력히 권장합니다.',
      },
    ],
  },

  // 2. BEEF & SWEET POTATO BLUEPRINT
  {
    slug: 'beef-sweet-potato-vitality',
    name: '목초육 소고기 & 고구마 액티브 근육 활력 설계도',
    shortDesc: '활동량이 많은 반려견을 위한 62:10:12:8:4:4 고스태미나 처방. 90/10 목초 소고기, 헴철과 비타민A가 풍부한 간·심장, 복합 탄수화물 고구마 함유.',
    badge: '고활력・근육유지 처방',
    targetAudience: '활동견・어질리티견・운동량이 많은 성견',
    colorTheme: '#7928ca',
    macroProfile: {
      proteinDm: '46.5%',
      fatDm: '24.0%',
      carbsDm: '17.5%',
      moisture: '71.0%',
      kcalPerKg: '1,290 kcal/kg (약 36.6 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (NRC 기준 충족)',
    },
    ingredients: [
      {
        name: '목초 사육 소고기 우둔/설도 다짐육 (90/10)',
        percentage: 62,
        category: '주요 붉은 살코기',
        role: '근육 형성과 지구력을 위한 천연 크레아틴, 공액리놀레산(CLA), 아연 공급',
        clinicalBenefit: '곡물 비육우에 비해 오메가-3 비율이 높아 운동 후 근육 염증을 빠르게 진정.',
        color: '#e11d48',
      },
      {
        name: '소 간 & 소 염통(심장)',
        percentage: 10,
        category: '고밀도 영양 내장육',
        role: '천연 비타민 A(레티놀), B12, 구리, 헴철, 코엔자임 Q10 공급',
        clinicalBenefit: '운동 시 적혈구 산소 운반 능력과 미토콘드리아 에너지 대사를 촉진.',
        color: '#7928ca',
      },
      {
        name: '스팀 조리 호박고구마',
        percentage: 12,
        category: '저혈당 복합 탄수화물',
        role: '인슐린 스파이크 없이 근육 글리코겐을 안정적으로 재충전',
        clinicalBenefit: '장시간 산책이나 훈련 시 에너지 고갈과 피로를 방지.',
        color: '#f5a623',
      },
      {
        name: '스팀 조리 브로콜리 & 당근',
        percentage: 8,
        category: '십자화과 항산화 채소',
        role: '간 해독을 돕는 설포라판 및 세포 보호 카로티노이드 공급',
        clinicalBenefit: '격렬한 운동으로 발생하는 활성산소(ROS)를 신속히 중화.',
        color: '#10b981',
      },
      {
        name: '난각 칼슘 & 유기농 켈프 블렌드',
        percentage: 4,
        category: '필수 골격 미네랄',
        role: '소고기의 풍부한 인을 1.25:1로 중화하고 요오드로 기초대사 지원',
        clinicalBenefit: '점프와 착지 등 충격으로부터 뼈 밀도를 보호.',
        color: '#0070f3',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: '냉압착 올리브유 & 대구 간유 블렌드',
        percentage: 4,
        category: '건강 지질 & 비타민 D3',
        role: '칼슘의 뼈 흡수를 돕는 천연 비타민 D3와 올레산 공급',
        clinicalBenefit: '활동견의 호르몬 균형과 심혈관 기능 강화. 냉각 후 첨가.',
        color: '#f5a623',
      },
    ],
    executiveSummary:
      '어질리티 대회견, 훈련견, 활동량이 많은 에너지 넘치는 성견을 위한 고칼로리 근육 유지 설계도. 방목 소고기의 크레아틴과 CLA가 탄탄한 근육을 유지하고, 복합 탄수화물 고구마가 6~8시간 동안 안정적인 에너지를 근육에 공급합니다.',
    clinicalRationale: [
      {
        title: '1. 목초 사육 소고기가 제공하는 천연 크레아틴과 근육 파워',
        description:
          '운동량이 많은 개의 근육 섬유는 포스포크레아틴 소모가 빠릅니다. 목초 소고기는 세포에 직접 크레아틴을 공급하여 피로 회복과 순발력을 크게 향상시킵니다.',
        points: [
          '천연 공액리놀레산(CLA)이 체지방 감소 및 제지방 유지 촉진.',
          '사료 비육우에 비해 오메가-3 함량이 약 3배 풍부.',
          '소 간 유래 헴철이 운동 중 산소 공급을 극대화.',
        ],
      },
      {
        title: '2. 고구마의 지속 가능한 글리코겐 공급 메커니즘',
        description:
          '옥수수나 밀과 달리 급격한 혈당 스파이크 없이 6~8시간 동안 천천히 혈당을 방출하여 췌장 부담을 줄입니다.',
        points: [
          '장시간 산책과 야외 활동에도 지치지 않는 스태미나.',
          '칼륨이 운동 중 근육 경련과 피로를 예방.',
          '펙틴 섬유질이 장내 유익균 환경 조성.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: '소고기 및 내장 깍둑썰기',
        instruction: '소 염통과 간을 약 5mm 크기의 작은 주사위 모양으로 자릅니다. 조리 직전까지 냉장 보관하세요.',
      },
      {
        step: 2,
        title: '소고기 저온 조리',
        instruction: '소고기 다짐육(90/10)과 내장에 물 1/2컵을 넣고 중약불에서 10분간 속까지 골고루 익을 때까지 끓입니다.',
      },
      {
        step: 3,
        title: '고구마 & 브로콜리 찌기',
        instruction: '고구마 껍질을 벗겨 썬 뒤 브로콜리, 당근과 함께 10~12분간 쪄서 포크로 굵직하게 으깹니다.',
      },
      {
        step: 4,
        title: '38°C 이하 완전 냉각',
        instruction: '으깬 채소를 익힌 소고기와 섞습니다. 오일이나 영양제를 넣기 전 냄비 전체를 38°C 이하로 식힙니다.',
      },
      {
        step: 5,
        title: '오일 및 칼슘 혼합',
        instruction: '난각 칼슘, 켈프, 올리브유, 대구 간유를 뿌리고 골고루 섞이도록 2분간 잘 저어줍니다.',
      },
      {
        step: 6,
        title: '계량 및 냉동 보관',
        instruction: '계산기로 산출한 일일 칼로리에 맞춰 디지털 저울로 소분합니다. 2~3일 치는 냉장, 나머지는 즉시 냉동합니다.',
      },
    ],
    storageGuidelines: [
      {
        method: '냉장 보관',
        duration: '최대 3~4일',
        instructions: '3°C 이하의 밀폐 유리 용기에 보관하세요.',
      },
      {
        method: '냉동 보관',
        duration: '최대 90일',
        instructions: '진공팩이나 실리콘 백에 1회분씩 냉동합니다.',
      },
      {
        method: '급여 전 준비',
        duration: '미온수 중탕',
        instructions: '급여 직전 미온수에 중탕하여 찬기를 없앤 뒤 급여하세요.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '310 – 350 kcal', dailyGramsTotal: '230 g / 일', mainProtein: '143 g', organMeat: '23 g', produceAndCarbs: '46 g', supplements: '18 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '620 – 710 kcal', dailyGramsTotal: '460 g / 일', mainProtein: '285 g', organMeat: '46 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1,080 – 1,220 kcal', dailyGramsTotal: '810 g / 일', mainProtein: '502 g', organMeat: '81 g', produceAndCarbs: '162 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,490 – 1,680 kcal', dailyGramsTotal: '1,120 g / 일', mainProtein: '694 g', organMeat: '112 g', produceAndCarbs: '224 g', supplements: '90 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        '췌장염 진단을 받은 반려견에게는 급여하지 마세요 (건물 기준 조지방 12% 이하의 초저지방 식단 필요).',
        '칼슘 파우더 없이 급여하지 마세요 (칼슘 없는 고기는 골다공증을 유발합니다).',
      ],
      transitionSteps: [
        '1~3일차: 새 자연식 25% / 기존 사료 75%',
        '4~6일차: 새 자연식 50% / 기존 사료 50%',
        '7~9일차: 새 자연식 75% / 기존 사료 25%',
        '10일차 이후: 새 자연식 100% 완전 전환',
      ],
      calciumRule: '소고기의 풍부한 인을 완벽히 중화하기 위해 칼슘 파우더를 디지털 저울로 정밀 계량하세요.',
    },
    faq: [
      {
        question: '활동량이 적은 실내견도 이 레시피를 먹을 수 있나요?',
        answer: '활동량이 적은 반려견은 1일 급여량을 15~20% 줄여 급여하거나, 저지방 칠면조&호박 레시피를 선택하는 것이 좋습니다.',
      },
    ],
  },

  // 3. SALMON & QUINOA BLUEPRINT
  {
    slug: 'salmon-quinoa-joint-coat',
    name: '야생 알래스카 연어 & 퀴노아 관절 및 피모 항염 영양 설계도',
    shortDesc: '관절 염증과 가려운 피부를 위한 60:8:12:10:6:4 해양성 항염 처방. 천연 연어의 풍부한 EPA/DHA, 저알러지 슈퍼푸드 퀴노아, 항산화 블루베리, 햄프씨드 오일 배합.',
    badge: '관절 케어・피부 항염',
    targetAudience: '성견~시니어견／관절 뻣뻣함・피부 가려움・피모 개선',
    colorTheme: '#06b6d4',
    macroProfile: {
      proteinDm: '44.0%',
      fatDm: '25.5%',
      carbsDm: '18.5%',
      moisture: '73.0%',
      kcalPerKg: '1,260 kcal/kg (약 35.7 kcal/oz)',
      caPhosphorusRatio: '1.28 : 1.0 (NRC 기준 충족)',
    },
    ingredients: [
      {
        name: '자연산 알래스카 연어 & 대구 흰살생선',
        percentage: 60,
        category: '주요 해양 어류',
        role: '관절 활액 합성을 촉진하는 고농도 EPA/DHA 및 해양성 콜라겐 공급',
        clinicalBenefit: '관절염 염증 경로(COX-2)를 억제하고 알레르기 피부 장벽을 복구.',
        color: '#06b6d4',
      },
      {
        name: '칠면조 염통(심장) & 모래주머니',
        percentage: 8,
        category: '천연 타우린 공급 내장육',
        role: '생선 중심 식단에서 결핍되기 쉬운 심장 보호 타우린과 CoQ10 보충',
        clinicalBenefit: '관절 치료와 동시에 심장 펌프 기능을 안정적으로 지원.',
        color: '#7928ca',
      },
      {
        name: '유기농 조리 퀴노아',
        percentage: 12,
        category: '저알레르기 완전 단백질 곡물 대체재',
        role: '글루텐 없이 9가지 필수 아미노산을 모두 함유한 슈퍼푸드',
        clinicalBenefit: '예민한 소화관에 부담을 주지 않는 항알레르기 베이스.',
        color: '#f5a623',
        affiliateKey: 'quinoa',
      },
      {
        name: '스팀 블루베리, 케일 & 주키니',
        percentage: 10,
        category: '고ORAC 폴리페놀 & 안토시아닌',
        role: '관절 연골 세포의 산화 파괴를 막는 안토시아닌 및 플라보노이드',
        clinicalBenefit: '시니어 반려견의 관절 연골 마모를 방지하고 뇌 신경 노화 억제.',
        color: '#10b981',
      },
      {
        name: '냉압착 햄프씨드 오일 & 초록입홍합 분말',
        percentage: 6,
        category: 'GLA & 천연 GAGs 관절 윤활 인자',
        role: '관절 수분을 유지하는 콘드로이친 황산, 히알루론산, 천연 감마리놀렌산 공급',
        clinicalBenefit: '기상 시 관절 뻣뻣함을 완화하고 피부 각질과 가려움 해소.',
        color: '#0070f3',
      },
      {
        name: '유기농 해조 칼슘 (리소삼니움) & 켈프',
        percentage: 4,
        category: '식물성 다공질 이온화 칼슘',
        role: '72가지 미량 미네랄을 함유한 천연 홍조류 유래 칼슘으로 Ca:P 1.28:1 달성',
        clinicalBenefit: '합성 칼슘에 비해 위 자극이 없고 골밀도 유지력 우수.',
        color: '#e11d48',
        affiliateKey: 'kelp',
      },
    ],
    executiveSummary:
      '관절염으로 보행이 뻣뻣하거나 만성 피부 가려움, 비듬, 모질 저하를 겪는 반려견을 위한 임상 항염증 레시피. 자연산 연어의 EPA/DHA, 초록입홍합의 글리코사미노글리칸, 햄프씨드 오일의 GLA가 시너지를 내어 통증을 줄이고 피부 장벽을 회복합니다.',
    clinicalRationale: [
      {
        title: '1. 관절 연골과 피부를 지키는 해양성 EPA·DHA 항염 캐스케이드',
        description:
          'EPA와 DHA가 세포막의 아라키돈산을 대체하여 항염증성 프로스타글란딘을 우선 생성함으로써 관절 연골 파괴와 피부 붉은 기, 가려움을 가라앉힙니다.',
        points: [
          '식물성 들깨유(ALA)에 비해 반려견 체내 항염 이용률이 10배 이상 높음.',
          '관절 활액의 점도를 개선하여 보행 시 마찰 통증 완화.',
          '스테로이드 없이 아토피성 피부염의 가려움증을 자연스럽게 진정.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: '연어 및 생선·내장 저온 포칭',
        instruction: '물 1컵과 함께 연어, 흰살생선, 칠면조 염통을 약불에서 7~8분간 부드럽게 익힙니다. 생선살을 잘게 부수며 잔가시를 확인합니다.',
      },
      {
        step: 2,
        title: '퀴노아 세척 및 조리',
        instruction: '사포닌 쓴맛을 없애기 위해 퀴노아를 물에 잘 헹군 뒤, 2배의 물을 넣고 15분간 부드럽게 삶아 식힙니다.',
      },
      {
        step: 3,
        title: '베리류 및 채소 스팀 조리',
        instruction: '케일과 주키니를 4분간 찐 후 신선한 블루베리를 넣고 굵직하게 갈아줍니다.',
      },
      {
        step: 4,
        title: '필수 완전 냉각 (38°C 이하)',
        instruction: '조리된 모든 재료를 섞고, 오일이나 보충제를 넣기 전 반드시 실온(38°C 이하)으로 완전히 식힙니다.',
        criticalTip: '오메가-3 오일은 열에 극도로 취약하므로 절대 미온 상태에서 오일을 넣지 마세요.',
      },
      {
        step: 5,
        title: '냉각 후 보충제·오일 혼합',
        instruction: '해조 칼슘, 켈프, 햄프씨드 오일, 초록입홍합 분말을 넣고 2분간 골고루 섞어줍니다.',
      },
      {
        step: 6,
        title: '계량 및 냉동 보관',
        instruction: '전자저울로 하루 분량을 정밀 계량합니다. 2~3일 치는 냉장실에 두고 나머지는 1회분씩 냉동 보관합니다.',
      },
    ],
    storageGuidelines: [
      {
        method: '냉장 보관',
        duration: '최대 3일 (72시간 이내)',
        instructions: '어류는 가금류보다 산패가 빠르므로 72시간 이내에 급여를 완료하세요.',
      },
      {
        method: '냉동 보관',
        duration: '최대 60일',
        instructions: '민감한 오메가 지방산 산패를 막기 위해 밀폐 진공팩에 냉동 보관합니다.',
      },
      {
        method: '해동 방법',
        duration: '냉장실 자연 해동',
        instructions: '냉장실에서 천천히 해동하세요. 고온 전자레인지 사용은 금지합니다.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '300 – 340 kcal', dailyGramsTotal: '235 g / 일', mainProtein: '141 g', organMeat: '19 g', produceAndCarbs: '52 g', supplements: '23 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '600 – 680 kcal', dailyGramsTotal: '470 g / 일', mainProtein: '282 g', organMeat: '38 g', produceAndCarbs: '103 g', supplements: '47 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1,040 – 1,180 kcal', dailyGramsTotal: '830 g / 일', mainProtein: '498 g', organMeat: '66 g', produceAndCarbs: '183 g', supplements: '83 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,450 – 1,620 kcal', dailyGramsTotal: '1,150 g / 일', mainProtein: '690 g', organMeat: '92 g', produceAndCarbs: '253 g', supplements: '115 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        '야생 생연어를 익히지 않고 생식으로 급여하지 마세요 (네오리케차 기생충 감염증 위험). 가열 조리 시 기생충 위험은 완전히 제거됩니다.',
      ],
      transitionSteps: [
        '1~3일차: 새 자연식 25% / 기존 사료 75%',
        '4~6일차: 새 자연식 50% / 기존 사료 50%',
        '7~9일차: 새 자연식 75% / 기존 사료 25%',
        '10일차 이후: 새 자연식 100% 완전 전환',
      ],
      calciumRule: '칼슘 대 인(Ca:P) 황금 비율을 위해 해조 칼슘을 정밀 계량하여 첨가하세요.',
    },
    faq: [
      {
        question: '연어 통조림을 사용해도 되나요?',
        answer: '염분(소금)이 전혀 첨가되지 않은 순수 물에 담긴 자연산 연어 통조림만 가능합니다. 신선한 생연어나 냉동 자연산 연어를 조리하는 것이 가장 좋습니다.',
      },
    ],
  },

  // 4. LAMB & CRANBERRY BLUEPRINT
  {
    slug: 'lamb-cranberry-gentle-gut',
    name: '초지 방목 양고기 & 크랜베리 저자극 장 건강·요로 케어 설계도',
    shortDesc: '가금류나 소고기 알러지가 심한 반려견을 위한 64:8:12:8:5:3 단일 신규 단백질 처방. 소화가 편한 초지 양고기, 장 점막을 진정시키는 땅콩호박, 요로 건강 크랜베리 함유.',
    badge: '저알레르기 장・요로 케어',
    targetAudience: '소고기・닭고기 알레르기, 만성 장염, 요로 질환을 겪는 반려견',
    colorTheme: '#10b981',
    macroProfile: {
      proteinDm: '45.8%',
      fatDm: '26.2%',
      carbsDm: '16.0%',
      moisture: '72.0%',
      kcalPerKg: '1,310 kcal/kg (약 37.1 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (NRC 기준 충족)',
    },
    ingredients: [
      {
        name: '목초 방목 양고기 순살 다짐육',
        percentage: 64,
        category: '신규 단일 붉은 살코기',
        role: '닭·소 알레르기 반려견을 위한 고순도 L-카르니틴, 유기 아연, 비타민 B12 공급',
        clinicalBenefit: '기존 식이 감작을 회피하여 만성 피부염과 묽은 변을 근본적으로 개선.',
        color: '#10b981',
      },
      {
        name: '양 간 & 양 신장(콩팥)',
        percentage: 8,
        category: '고밀도 영양 분비성 내장육',
        role: '항산화 셀레늄, 구리, 레티놀, 활성 엽산 공급',
        clinicalBenefit: '세포막 손상을 방지하고 장관 면역(GALT)을 정상화.',
        color: '#7928ca',
      },
      {
        name: '스팀 조리 땅콩호박 & 무첨가 생 크랜베리',
        percentage: 12,
        category: '정장 펙틴 & 요로 프로안토시아니딘',
        role: '요로벽 유해균 흡착을 막는 A형 PACs 및 장 점막 보호 펙틴',
        clinicalBenefit: '염증성 장을 진정시켜 변을 단단하게 잡고 방광염 재발을 예방.',
        color: '#f5a623',
      },
      {
        name: '스팀 그린빈(껍질콩) & 파슬리',
        percentage: 8,
        category: '클로로필 & 저자극 섬유질',
        role: '장관의 과민한 연동운동을 안정시키는 아피제닌과 섬유질',
        clinicalBenefit: '가스 발생 없이 변의 부피를 형성하고 입냄새를 자연 탈취.',
        color: '#0070f3',
      },
      {
        name: '초미세 난각 칼슘 & 유기농 켈프',
        percentage: 5,
        category: '필수 골격 미네랄',
        role: '양고기의 풍부한 인을 1.25:1로 중화하는 탄산칼슘',
        clinicalBenefit: '예민한 소화기에도 자극 없이 골밀도를 완벽하게 유지.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: '자연산 알래스카 연어 오일 (냉각 후)',
        percentage: 3,
        category: '해양성 오메가-3',
        role: '장 점막 염증을 가라앉히고 피부 가려움을 진정시키는 EPA/DHA',
        clinicalBenefit: '장 누수 증후군을 예방하는 필수 지방산. 반드시 식힌 후 혼합.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      '닭고기나 소고기 알레르기, 만성 묽은 변, 장내 가스, 요로계 질환으로 고생하는 반려견을 위한 임상 특별 레시피. 신규 단백질인 방목 양고기에 장을 진정시키는 땅콩호박과 방광벽을 깨끗하게 유지하는 크랜베리를 배합했습니다.',
    clinicalRationale: [
      {
        title: '1. 만성 알레르기 반려견에게 왜 방목 양고기인가?',
        description:
          '시판 가금류와 곡물 비육 소고기는 반려견 알레르기의 대부분을 유발합니다. 방목 양고기는 이들과 교차 반응이 없어 장 면역계를 편안하게 쉬게 해줍니다.',
        points: [
          '반려견 2대 알레르기원(닭고기·소고기)을 완벽 배제.',
          '풍부한 L-카르니틴이 심장 기능과 지방 대사를 지원.',
          '식욕이 떨어진 아이도 잘 먹는 뛰어난 기호성.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: '양 내장육 손질 및 준비',
        instruction: '양 간과 신장을 약 5mm 크기의 작은 주사위 모양으로 자릅니다.',
      },
      {
        step: 2,
        title: '양고기 저온 조리',
        instruction: '양고기 다짐육과 내장에 물 1/2컵을 넣고 약불에서 8~10분간 푹 익힙니다. 기름이 많이 뜨면 숟가락으로 살짝 걷어냅니다.',
      },
      {
        step: 3,
        title: '호박·크랜베리·그린빈 찌기',
        instruction: '껍질 벗긴 땅콩호박, 그린빈, 생 크랜베리를 6~8분간 부드러워질 때까지 찐 뒤 곱게 갈아 퓌레로 만듭니다.',
      },
      {
        step: 4,
        title: '38°C 이하 완전 냉각',
        instruction: '채소 퓌레를 익힌 양고기에 섞고, 실온(38°C 이하)으로 완전히 식힙니다.',
      },
      {
        step: 5,
        title: '보충제 냉각 후 혼합',
        instruction: '난각 칼슘, 켈프, 차가운 연어 오일을 넣고 2분간 골고루 저어줍니다.',
      },
      {
        step: 6,
        title: '정밀 계량 및 보관',
        instruction: '전자저울로 1회 급여량을 재어 유리 용기에 보관하거나 냉동합니다.',
      },
    ],
    storageGuidelines: [
      {
        method: '냉장 보관',
        duration: '최대 3~4일',
        instructions: '3°C 이하의 밀폐 유리 용기에 보관하세요.',
      },
      {
        method: '냉동 보관',
        duration: '최대 90일',
        instructions: '진공팩에 1회분씩 밀폐하여 냉동합니다.',
      },
      {
        method: '급여 전 준비',
        duration: '미온수 중탕',
        instructions: '미온수에 부드럽게 중탕하여 찬기를 뺀 후 급여하세요.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '305 – 345 kcal', dailyGramsTotal: '230 g / 일', mainProtein: '147 g', organMeat: '18 g', produceAndCarbs: '46 g', supplements: '19 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '610 – 700 kcal', dailyGramsTotal: '460 g / 일', mainProtein: '294 g', organMeat: '37 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1,060 – 1,200 kcal', dailyGramsTotal: '820 g / 일', mainProtein: '525 g', organMeat: '66 g', produceAndCarbs: '164 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,480 – 1,650 kcal', dailyGramsTotal: '1,130 g / 일', mainProtein: '723 g', organMeat: '90 g', produceAndCarbs: '226 g', supplements: '91 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        '설탕이나 포도 농축액이 들어간 시판 건조 크랜베리는 절대 사용하지 마세요. 무가당 생 크랜베리나 순수 냉동 크랜베리만 사용하세요.',
      ],
      transitionSteps: [
        '1~3일차: 새 자연식 25% / 기존 사료 75%',
        '4~6일차: 새 자연식 50% / 기존 사료 50%',
        '7~9일차: 새 자연식 75% / 기존 사료 25%',
        '10일차 이후: 새 자연식 100% 완전 전환',
      ],
      calciumRule: '칼슘 결핍을 방지하기 위해 권장 난각 칼슘량을 반드시 정밀 계량하여 첨가하세요.',
    },
    faq: [
      {
        question: '크랜베리는 강아지가 먹어도 안전한가요?',
        answer: '네, 첨가물 없이 순수하게 익힌 형태라면 안전합니다. 요로 방광벽에 세균 흡착을 방지하는 프로안토시아니딘과 항산화제가 풍부합니다.',
      },
    ],
  },
];
