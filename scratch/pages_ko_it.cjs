const ko = {
  about: {
    missionBadge: '우리의 사명 // 임상 반려견 영양학',
    whyTitle: 'DogFoodPlanner의 설립 취지',
    whyP1: '수십 년 동안 상업용 펫푸드 시장은 깜깜이 정보 속에서 소비자를 기만해 왔습니다. 200℃ 이상의 고온 압출 성형을 거치는 시중 건식 사료(키블)는 열에 약한 천연 비타민을 파괴하고, 필수 오메가 지방산을 산화시키며, 사료 포대의 최대 60%를 고혈당 탄수화물 증량제로 채웁니다.',
    whyP2: '반면 맞춤형 자연화식 정기구독 서비스는 단순한 살코기와 채소만으로 월 30~50만 원이라는 과도한 비용을 청구합니다. DogFoodPlanner는 이 불합리한 장벽을 허물고자 합니다. 수의 임상 영양학에서 사용하는 정밀한 대사 계산 알고리즘을 100% 무료로 공개하여, 보호자가 가정에서 저렴한 비용으로 균형 잡힌 저온 조리 화식이나 80-10-10 생식, 항산화 토핑을 직접 만들 수 있도록 돕습니다.',
    methodTitle: '수의학적 영양 분석 기준 및 원칙',
    pillars: [
      {
        tag: '01 // NRC 표준 공식',
        title: '안정시 대사요구량 (RER)',
        desc: '단순한 체중 구간별 대략적 수치가 아닌 지수 함수 공식(70 × 체중kg^0.75)을 기반으로 개별 반려견의 기초 대사 에너지를 정밀 산출합니다.'
      },
      {
        tag: '02 // AAFCO & FEDIAF 기준',
        title: '생체 흡수율 높은 미량 영양소',
        desc: '모든 식단은 칼슘과 인의 황금 비율(1.2:1 ~ 1.4:1), EPA/DHA 지방산 및 필수 타우린 공급 기준을 엄격히 충족합니다.'
      },
      {
        tag: '03 // 완전 무료 공개',
        title: '독립성과 객관성 유지',
        desc: '사료 제조사의 유료 협찬을 일절 배제하며, 레시피의 그램(g) 수치를 유료 결제 장벽 뒤에 숨기지 않습니다.'
      }
    ],
    ctaTitle: '우리 강아지에게 필요한 정확한 영양과 칼로리를 계산해 보세요',
    ctaDesc: '대화형 급여량 계산기와 식이 알레르기 관리 가이드, 객관적인 수의학 사료 리뷰를 지금 확인하세요.',
    ctaBtn: '무료 영양 계산기 실행하기 →'
  },
  contact: {
    eyebrow: '고객 지원 및 문의 // 직접 문의 창구',
    cards: [
      { icon: '📧', title: '일반 문의', desc: '의견 및 일반 질문:', email: 'hello@dogfoodplanner.com' },
      { icon: '🐾', title: '수의 영양학 연구', desc: 'NRC 계산식 및 영양 기준 문의:', email: 'hello@dogfoodplanner.com' },
      { icon: '🛡️', title: '기술 지원 & 오류 제보', desc: '계산기 버그 및 웹사이트 오류:', email: 'hello@dogfoodplanner.com' }
    ],
    formTitle: '반려견 영양 전문 연구팀에게 문의하기',
    formDesc: 'NRC 칼로리 계산 공식에 대한 궁금증이나 맞춤 레시피에 대한 도움이 필요하신가요? 영업일 기준 24시간 이내에 답변드립니다.',
    nameLabel: '성함',
    namePlaceholder: '예: 김민수',
    emailLabel: '이메일 주소',
    emailPlaceholder: 'minsu@example.com',
    subjectLabel: '문의 유형',
    subjectOptions: ['일반 문의 / 사이트 피드백', '반려견 영양학 및 레시피 문의', '계산기 알고리즘 관련 질문', '기술적 오류 / 버그 제보'],
    messageLabel: '문의 내용',
    messagePlaceholder: '반려견의 정보(견종, 체중, 나이)와 구체적인 문의 내용을 남겨주세요...',
    submitBtn: '문의 보내기 →',
    notice: '수의학 응급 안내: 반려견이 급성 중독 증상이나 호흡 곤란 등 위급한 상태를 보인다면 즉시 24시간 동물 응급센터를 방문하십시오.',
    faqTitle: '빠른 답변을 찾고 계신가요?',
    faqDesc: '편식, 생식 BARF 식단, 고양이 사료 섭취 위험, 브랜드 평가 등 40여 개 이상의 검증된 수의학 Q&A를 확인해 보세요.',
    faqBtn: '모든 FAQ 둘러보기 →'
  },
  privacy: {
    eyebrow: '개인정보 처리방침 // 데이터 보호 정책',
    lastUpdated: '최종 수정일: 2026년 1월',
    intro: 'DogFoodPlanner.com은 이용자의 개인정보를 소중히 여기며 관련 법령을 준수합니다. 본 방침은 웹사이트 이용 시 정보가 어떻게 취급되는지 안내합니다.',
    sections: [
      {
        title: '1. 수집하지 않는 개인정보',
        content: '반려견의 건강 데이터는 오직 보호자의 것입니다. 당사의 영양 계산기를 이용할 때 회원가입, 비밀번호 설정, 결제 카드 정보 입력이 일절 요구되지 않습니다. 입력된 체중, 연령, 식단 유형은 오직 이용자의 웹 브라우저 로컬에서만 연산되며 외부 데이터베이스에 저장되지 않습니다.'
      },
      {
        title: '2. 익명 기술 로그 데이터',
        content: '웹사이트 보안 유지 및 해킹 공격 방어를 위해, CDN 서버는 통상적인 익명 기술 로그(익명화된 IP 주소, 브라우저 종류, 접속 시간)를 시스템에 임시 기록합니다.'
      },
      {
        title: '3. 로컬 스토리지(localStorage) 사용',
        content: '이용자가 선택한 선호 언어 설정 및 새로고침 시 계산 결과를 유지하기 위한 목적으로만 브라우저의 로컬 저장소(localStorage)를 활용합니다.'
      },
      {
        title: '4. 외부 과학 학술지 및 참조 링크',
        content: '당사는 AAFCO, FEDIAF, NRC 등의 공신력 있는 외부 학술 자료 링크를 제공합니다. 외부 사이트의 개인정보 보호 정책에 대해서는 책임을 지지 않습니다.'
      },
      {
        title: '5. 아동의 개인정보 보호',
        content: '당사의 서비스는 성인 반려동물 보호자를 대상으로 하며, 만 14세 미만 아동의 개인정보를 수집하지 않습니다.'
      },
      {
        title: '6. 정책 변경 및 문의',
        content: '개인정보 처리방침과 관련된 문의 사항은 privacy@dogfoodplanner.com으로 연락해 주시기 바랍니다.'
      }
    ]
  },
  terms: {
    eyebrow: '이용약관 // 서비스 이용 조건',
    lastUpdated: '최종 수정일: 2026년 1월',
    intro: 'DogFoodPlanner.com을 이용하시기 전에 본 약관을 주의 깊게 읽어주시기 바랍니다. 사이트 이용 시 본 약관에 동의한 것으로 간주됩니다.',
    sections: [
      {
        title: '1. 약관의 효력 및 동의',
        content: 'DogFoodPlanner.com(이하 "당사 웹사이트")에 접속하고 계산기 및 가이드를 이용하는 것은 본 약관을 완전히 숙지하고 동의한 것으로 간주됩니다. 동의하지 않는 경우 서비스 이용을 중단해 주십시오.'
      },
      {
        title: '2. 수의학적 및 의료적 면책 조항',
        content: '당사 웹사이트에서 제공하는 칼로리 계산, 사료 평가, 수제 식단 가이드는 NRC 및 AAFCO의 공개 학술 자료에 기반한 일반적인 교육 목적의 정보입니다. 이는 전문 수의사의 개별적인 임상 진단, 처방, 치료 행위를 대신할 수 없습니다. 질환이 있거나 자견, 임신견의 식단을 크게 변경할 때는 반드시 담당 수의사와 상담하십시오.'
      },
      {
        title: '3. 대화형 계산기 사용 기준',
        content: '에너지 요구량(RER 및 MER)과 권장 급여 그램(g) 수는 통계적 기준치입니다. 반려견의 실제 대사율은 중성화 여부, 환경 기온, 활동량에 따라 달라집니다. 보호자는 정기적으로 신체충실지수(BCS)를 체크하여 급여량을 가감해야 합니다.'
      },
      {
        title: '4. 수제 식단 안전 및 칼슘 비율 의무',
        content: '가정에서 자연식이나 생식을 조리할 때는 필수 미량 영양소 균형을 엄격히 맞춰야 합니다. 특히 칼슘 보충 없이 뼈 없는 살코기만 지속 급여할 경우 수개월 내에 심각한 골연화증과 저칼슘혈증이 발생합니다. 식재료의 계량과 칼슘 배합은 이용자의 책임입니다.'
      },
      {
        title: '5. 지식재산권',
        content: '당사 웹사이트에 게재된 모든 계산 알고리즘, 인터페이스 디자인, 인포그래픽, 텍스트 콘텐츠는 저작권법의 보호를 받습니다.'
      },
      {
        title: '6. 책임의 한계',
        content: '당사는 본 웹사이트의 정보를 바탕으로 행해진 식단 급여 결과에 대해 어떠한 직간접적 손해배상 책임도 부담하지 않습니다.'
      }
    ]
  },
  bestFood: {
    eyebrow: '핵심 가이드 // 2026 최고의 강아지 사료 추천 및 순위',
    rankingsTitle: '【2026년 최신】 반려견 건강수명을 늘려주는 사료 순위 TOP 5',
    rankingsIntro: '수의 임상 영양학의 장기 추적 연구에 따르면, ‘최소한의 열 가공’과 ‘70% 이상의 천연 생체 수분’이 반려견의 신장 건강과 면역력을 결정짓는 가장 핵심적인 요소임이 입증되었습니다.',
    rankings: [
      {
        rank: '01',
        title: '휴먼그레이드 저온 조리 화식 (자연식)',
        score: '98/100',
        pros: '사람이 먹을 수 있는 신선한 육류와 채소를 70℃ 저온에서 부드럽게 가열. 70% 이상의 천연 수분, 활성 소화 효소, 비타민이 온전히 보존됩니다.',
        cons: '냉장 또는 냉동 보관 필수. 시중 건식 사료에 비해 비용이 높은 편.'
      },
      {
        rank: '02',
        title: '자연의 섭리에 맞춘 80-10-10 생식 BARF 식단',
        score: '95/100',
        pros: '육식동물의 이상적 비율 (살코기 80%, 생뼈 10%, 내장 10%). 치석 형성 억제 및 탄탄한 근육 유지에 탁월.',
        cons: '철저한 위생 관리와 정밀한 칼슘-인 섭취 비율 계산이 요구됨.'
      },
      {
        rank: '03',
        title: '에어드라이 & 동결건조 생식 사료',
        score: '91/100',
        pros: '생식의 풍부한 영양가를 상온 보관 가능한 편의성으로 구현. 입맛이 까다로운 아이들을 위한 토핑으로 훌륭함.',
        cons: '신장 부담을 방지하기 위해 급여 전 미온수나 뼈 육수에 반드시 불려주어야 함.'
      },
      {
        rank: '04',
        title: '고단백 그레인프리 & 고대곡물 건식 사료 (키블)',
        score: '78/100',
        pros: '상온 장기 보관이 가능하며 대형견이나 다견 가정에서 경제적인 선택지.',
        cons: '200℃ 이상의 고온 압출 제조로 수분이 8~10%에 불과하며 전분 탄수화물이 40~50% 함유됨.'
      },
      {
        rank: '05',
        title: '수의사 처방 전문 치료식 사료',
        score: '72/100',
        pros: '만성 신부전, 간 질환, 결석증 등 특정 임상 질환 관리에 맞춤 배합.',
        cons: '곡물성 충전재 비율이 높고 수의사의 처방이 필요함.'
      }
    ],
    buyerGuideTitle: '최고의 사료를 선택하기 위한 4대 황금 원칙',
    buyerRules: [
      {
        title: '1. 원재료 첫 번째 자리에 명확한 생육 표기',
        desc: '출처를 알 수 없는 ‘가금류 육골분’ 대신 ‘뼈를 바른 칠면조’, ‘소고기’, ‘생연어’가 명시되어 있는지 확인하세요.'
      },
      {
        title: '2. 70% 이상의 풍부한 수분 공급',
        desc: '수분 8~10%의 건식 사료만 먹는 개는 만성적인 미세 탈수 상태에 빠집니다. 수제 화식이나 뼈 육수를 꼭 섞어주세요.'
      },
      {
        title: '3. 화학 합성 방부제 및 인공 색소 배제',
        desc: 'BHA, BHT, 에톡시퀸, 프로필렌글리콜 등 유해성이 지적된 합성 첨가물을 철저히 피하십시오.'
      },
      {
        title: '4. 탄수화물 함량을 25% 이하로 제어',
        desc: '개의 침에는 아밀라아제가 없습니다. 과도한 전분은 췌장에 무리를 주고 비만을 유발합니다.'
      }
    ],
    ctaTitle: '우리 강아지 맞춤 사료의 일일 급여량을 계산해 보세요',
    ctaDesc: '자연 화식, 생식 BARF, 프리미엄 건식 사료 등 식단에 맞는 정확한 일일 급여량(g)과 칼로리를 확인할 수 있습니다.',
    ctaBtn: '맞춤 급여량 계산하기 →'
  },
  recipes: {
    eyebrow: '수의 영양사 맞춤 수제 자연식 & 생식 레시피',
    heroTitle: '수의사 검증 강아지 수제 자연식 레시피',
    heroSubtitle: '가정에서 손쉽게 조리할 수 있는 영양 균형 저온 화식과 자연의 법칙에 맞춘 80-10-10 생식 가이드.',
    calciumWarningTitle: '수제 사료 조리의 절대 원칙: 칼슘과 인의 균형',
    calciumWarningDesc: '순수 살코기는 인 함량이 매우 높고 칼슘은 거의 없습니다(비율 1:20). 칼슘 보충 없이 고기와 밥만 지속해서 먹이면 수개월 내에 심각한 골다공증과 뼈 탈회 질환이 발생합니다. 뼈 없는 살코기 450g당 반드시 순수 난각가루(계란껍질 분말) 반 티스푼(원소 칼슘 약 900mg)을 첨가하여 1.2:1의 칼슘:인 비율을 맞춰주세요.',
    recipesList: [
      {
        tag: '저온 조리 화식',
        title: '레시피 1: 칠면조 & 프리바이오틱스 단호박 화식 (위장이 민감한 강아지용)',
        desc: '장 건강이 약하거나 무른 변을 자주 보는 아이, 시중 닭고기에 알레르기가 있는 강아지에게 적합합니다.',
        ingredients: [
          '지방 제거 칠면조 분쇄육 (93/7) — 65% (약 900g)',
          '칠면조 또는 소 심장 (천연 타우린 공급원) — 10% (약 140g)',
          '순수 단호박 퓨레 (수용성 식이섬유) — 10% (약 140g)',
          '살짝 찐 시금치 & 다진 애호박 — 10% (약 140g)',
          '자연산 알래스카 연어오일 (EPA/DHA) — 2% (1.5 큰술)',
          '미세 난각가루 (천연 칼슘 보충제) — 3% (1 작은술 듬뿍)'
        ],
        prep: '칠면조 고기와 심장을 약불에서 살짝 익힙니다 (내부 온도 70℃ 유지). 채소를 쪄서 단호박과 함께 부드럽게 갈아줍니다. 모든 재료를 고루 섞은 후 완전히 식힙니다. 음식이 식은 후 연어오일과 난각가루를 골고루 섞어 소분 냉동합니다.'
      },
      {
        tag: '생식 BARF',
        title: '레시피 2: 소고기 & 오리고기 80-10-10 천연 생식 식단',
        desc: '소화 기능이 건강하고 위산 분비가 원활한 성견을 위한 야생 비율의 완전 생식.',
        ingredients: [
          '목초 사육 소고기 살코기 — 70%',
          '소 심장 (L-카르니틴 및 코엔자임 Q10 풍부) — 10%',
          '생 오리 목뼈 또는 닭 안심뼈 — 10% (천연 생뼈 및 칼슘)',
          '소 간 (비타민 A 및 B군 복합체) — 5%',
          '소 콩팥 또는 비장 (필수 분비 내장 기관) — 5%'
        ],
        prep: '살코기와 심장을 강아지 한 입 크기로 자릅니다. 생뼈는 삼키지 않도록 체급에 맞게 고릅니다. 내장 기관을 주방 저울로 정밀하게 계량합니다. 모든 생식 재료는 급여 전 영하 20℃ 이하에서 최소 3주간 냉동 보관하여 기생충을 예방합니다.'
      },
      {
        tag: '슈퍼푸드 토퍼',
        title: '레시피 3: 80/20 항산화 슈퍼푸드 사료 영양 토핑',
        desc: '기존 건식 사료 칼로리의 20%를 신선한 자연 식재료로 대체하여 활력을 불어넣는 토퍼.',
        ingredients: [
          '방사 유정란 반숙 수란 — 40%',
          '살짝 찐 브로콜리 새싹 & 야생 블루베리 — 30%',
          '푹 고아낸 한우 사골 뼈 육수 — 20%',
          '유기농 헴프씨드 & 켈프 해조 분말 — 10%'
        ],
        prep: '달걀을 4분간 삶아 반숙으로 준비합니다. 채소를 3분간 살짝 찝니다. 미온의 사골 육수와 블루베리를 함께 으깬 뒤, 매 끼니 기존 사료 위에 2~4큰술을 얹어 급여합니다.'
      }
    ],
    calciumGuideTitle: '수제 사료에 안전하게 사용할 수 있는 칼슘 급원',
    calciumGuideItems: [
      {
        title: '순수 난각가루 (계란껍질 분말)',
        ratio: '뼈 없는 고기 450g당 1/2 작은술',
        desc: '순도 95%의 탄산칼슘. 세척 후 오븐에서 살균 건조하여 믹서기로 곱게 갈아 만듭니다.'
      },
      {
        title: '가열하지 않은 신선한 생뼈',
        ratio: '전체 식단 무게의 10%',
        desc: '오리 목뼈, 닭 날개 등. 익힌 뼈는 단단해져 유리조각처럼 깨져 식도와 장을 찢을 수 있으므로 절대 익히지 마십시오.'
      },
      {
        title: '수의사 전용 골분 영양제 (Bone Meal)',
        ratio: '제조사 권장량 준수',
        desc: '천연 2:1 비율로 칼슘과 인이 배합된 미세 결정 하이드록시아파타이트 분말.'
      }
    ]
  },
  toxic: {
    eyebrow: '응급 안전 // 강아지에게 치명적인 위험 음식',
    dangerTitle: '가정 내에서 강아지에게 가장 위험한 치명적 음식',
    dangerIntro: '사람에게는 안전하지만 개의 체내 효소로는 해독할 수 없어 급성 장기 부전이나 사망을 초래하는 유해 음식들입니다.',
    dangerList: [
      {
        name: '초콜릿 및 코코아 가공품',
        toxin: '테오브로민 및 카페인',
        symptoms: '구토, 과호흡(헐떡임), 심장 빈맥, 근육 떨림, 전신 발작 및 급성 심부전.',
        risk: '매우 높음 / 치사율 높음'
      },
      {
        name: '포도, 건포도 및 청포도',
        toxin: '타르타르산 (주석산)',
        symptoms: '기력 저하, 탈수, 섭취 후 24~72시간 이내에 영구적인 급성 신부전 유발.',
        risk: '극도로 위험 / 사망 위험'
      },
      {
        name: '자일리톨 (인공 감미료 / E967)',
        toxin: '합성 당알코올',
        symptoms: '급격한 인슐린 폭발 분비로 인한 심각한 저혈당 쇼크, 몇 시간 내 급성 간 괴사.',
        risk: '초응급 상황'
      },
      {
        name: '양파, 마늘, 파, 부추류',
        toxin: '유기황 화합물 (알릴 프로필 디설파이드)',
        symptoms: '적혈구 헤모글로빈 파괴, 하인츠 소체 용혈성 빈혈, 붉은 혈뇨, 호흡곤란.',
        risk: '지속적인 축적 독성'
      },
      {
        name: '마카다미아 너트',
        toxin: '미확인 신경독소',
        symptoms: '후지(뒷다리) 마비 및 비틀거림, 고열, 구토, 극심한 관절 통증.',
        risk: '중등도 ~ 중증'
      },
      {
        name: '조리된 모든 종류의 뼈',
        toxin: '물리적 장기 파열 위험',
        symptoms: '식도 천공, 위장관 파열, 내부 출혈, 복막염, 급성 장폐색.',
        risk: '외과적 응급 개복수술 필요'
      }
    ],
    emergencyTitle: '음식 중독 사고 발생 시 응급 대처 수칙',
    emergencySteps: [
      '1. 즉시 격리 및 음식물 수거: 무엇을, 언제, 얼마만큼 섭취했는지 정확한 포장지와 잔여물을 확인하십시오.',
      '2. 수의사의 지시 없이 억지로 구토를 유도하지 마십시오: 부식성 물질이나 날카로운 뼈는 토해내는 과정에서 식도를 손상시킵니다.',
      '3. 지체 없이 동물병원으로 이동: 인근 24시간 동물 응급센터에 전화하여 상태를 미리 알리고 즉시 내원하십시오.'
    ],
    safeTitle: '강아지가 먹어도 100% 안전하고 유익한 과일 & 채소',
    safeIntro: '다음 식재료는 천연 항산화제, 수용성 프리바이오틱스, 비타민이 풍부하여 매일 토핑으로 주기에 안전합니다:',
    safeFoods: [
      { name: '블루베리', benefit: '풍부한 안토시아닌과 폴리페놀이 세포 노화를 억제하고 뇌 건강을 돕습니다.' },
      { name: '찐 단호박', benefit: '풍부한 수용성 식이섬유가 설사와 변비를 모두 완화하고 소화를 돕습니다.' },
      { name: '당근', benefit: '베타카로틴이 풍부한 저칼로리 간식으로 아삭한 저작 작용을 통해 치아 건강에 기여합니다.' },
      { name: '삶은 껍질콩 (그린빈)', benefit: '포만감을 주는 훌륭한 저혈당 채소로 다이어트가 필요한 아이들에게 이상적입니다.' },
      { name: '사과 (씨앗과 심지 완전 제거)', benefit: '비타민 C와 장내 유익균의 먹이가 되는 펙틴이 풍부합니다.' }
    ]
  },
  brands: {
    eyebrow: '사료 브랜드 객관적 리뷰 및 리콜 이력',
    heroTitle: '인기 사료 브랜드 검증 및 안전 리콜 기록',
    heroSubtitle: '수의 임상 기준에 따라 주요 상업용 사료의 원료 성분, AAFCO 표기 준수 여부, 리콜 이력을 엄격하게 검증합니다.',
    brandsList: [
      {
        name: '블루 버팔로 (Blue Buffalo)',
        grade: '평가: B+',
        pros: '제1원료로 생육 사용; 옥수수·밀·대두 무첨가; 비타민을 보존하는 냉압착 라이프소스 비츠 배합.',
        cons: '탄수화물 비율이 45~50%로 다소 높음; 과거 수분 과다 곰팡이 및 비타민 D 초과로 인한 리콜 이력 존재.',
        verdict: '시중 건식 사료 중에서는 상위권. 부족한 수분을 보충하기 위해 신선한 화식 토핑을 20% 병행하는 것을 권장.'
      },
      {
        name: '레이첼레이 뉴트리쉬',
        grade: '평가: C+ / B-',
        pros: '합리적인 가격대; 상위 라인업(Peak/Dish)은 실제 고기 함량을 대폭 개선함.',
        cons: '보급형 라인은 완두콩 단백질과 옥수수 글루텐에 과도하게 의존하며, FDA 심근병증(DCM) 조사 대상에 포함된 바 있음.',
        verdict: '가성비 위주 선택 시 상위 라인을 고르고 원재료 라벨의 콩류 분할 표기를 반드시 확인해야 함.'
      },
      {
        name: '퓨어 밸런스 (Pure Balance)',
        grade: '평가: B (최고의 가성비)',
        pros: '탁월한 가격 대비 성능; 인공 색소나 저급 밀가루 없이 육류 중심의 기본에 충실한 배합.',
        cons: 'OEM 외주 생산; 평균적인 탄수화물 함량.',
        verdict: '대형 마트에서 구할 수 있는 상업용 사료 중 가장 양심적이고 실속 있는 선택지 중 하나.'
      },
      {
        name: '올리 (Ollie) 신선 맞춤 화식',
        grade: '평가: A (최우수)',
        pros: '100% 휴먼그레이드 육류와 채소; 저온 스팀 조리; 개별 체중에 맞춘 맞춤형 진공 소분 팩.',
        cons: '고가의 구독 비용(월 20~40만 원 상당); 냉동실 보관 공간 필요.',
        verdict: '대사 활력, 모질의 윤기, 소화기 건강수명을 극대화하고자 하는 보호자를 위한 최고의 기준.'
      },
      {
        name: '오픈 팜 (Open Farm)',
        grade: '평가: A-',
        pros: '모든 식재료의 농장 및 어장 출처 100% 투명 공개; 동물 복지 인증 육류 및 지속 가능한 어류 사용.',
        cons: '프리미엄 가격대; 오프라인 매장 접근성이 낮음.',
        verdict: '원료의 윤리적 출처, 높은 육류 비율, 가금류 부산물 무첨가를 중요시하는 보호자에게 최적.'
      }
    ],
    recallsTitle: '사료 안전 리콜 기준 바로 알기',
    recallsDesc: 'FDA 리콜은 3단계로 나뉩니다: 클래스 I (살모넬라균 감염, 비타민 D 치사량 등 생명을 위협하는 중대 사안), 클래스 II (일시적 건강 이상), 클래스 III (단순 라벨 표기 위반). 구매한 사료 포대의 제조 로트 번호를 주기적으로 확인하세요.',
    methodTitle: '당사의 4대 사료 평가 기준',
    methodPillars: [
      { title: '1. 단백질 원료의 투명성', desc: '모호한 ‘육골분’이 아닌 명확한 부위가 적힌 뼈를 바른 온전한 고기.' },
      { title: '2. 탄수화물 함량 제한', desc: '비만과 췌장 부담을 예방하기 위해 전분 함유량을 40% 미만으로 억제.' },
      { title: '3. 원산지 및 유통 추적성', desc: '비유전자변형(Non-GMO) 및 동물 복지 인증 농장 원료 확인.' },
      { title: '4. 안전 검사 및 리콜 기록', desc: '공인 연구기관의 정기 미생물 검사 및 안전한 위생 공정 유지.' }
    ]
  },
  allergies: {
    eyebrow: '임상 피부과 // 반려견 식이 알레르기 및 제한 급여',
    heroTitle: '알레르기 및 민감성 장을 가진 강아지를 위한 사료 가이드',
    heroSubtitle: '수의 피부과 전문의가 제시하는 단일 단백질(노벨 프로틴) 선택법과 8주간의 배제 식이 시험 프로토콜.',
    allergensTitle: '강아지에게 가장 흔한 5대 식이 알레르겐',
    allergensIntro: '개의 음식 알레르기는 특정 단백질 분자에 대한 면역계의 과민 반응입니다. 임상 빈도순으로 나열하면 다음과 같습니다:',
    allergensList: [
      { name: '1. 공장식 사육 닭고기 (전체 사례의 60%)', desc: '시중 펫푸드에 가장 흔하게 쓰이므로 체내 항체가 가장 많이 생성된 제1의 알레르겐입니다.' },
      { name: '2. 상업용 소고기 (전체 사례의 30%)', desc: '예민한 아이들에게 심한 발 핥기(지간염)와 만성 외이도염을 일으키는 대표적 붉은 살코기.' },
      { name: '3. 유제품 및 치즈류', desc: '성견은 젖당 분해 효소가 결핍되어 있어 삼투성 설사와 복부 팽만을 유발합니다.' },
      { name: '4. 밀 및 옥수수 글루텐', desc: '장 점막 장벽을 손상시키고 체내 만성 염증과 효모균(말라세치아) 증식을 촉진합니다.' },
      { name: '5. 대두 및 콩류 단백질', desc: '저가 충전재로 자주 쓰이지만 장내 이상 발효와 피부 가려움증을 유발합니다.' }
    ],
    eliminationTitle: '수의학 표준 8주 배제 식이 시험 (엘리미네이션 다이어트)',
    eliminationSteps: [
      { step: '1단계', title: '단 한 번도 먹어본 적 없는 신기 단백질 선정', desc: '사슴고기, 토끼고기, 캥거루고기 등 지금까지 한 번도 접해보지 않은 단일 육류와 단호박 같은 소화 잘되는 단일 탄수화물로 제한합니다.' },
      { step: '2단계', title: '엄격한 교차 오염 차단 (연속 8주)', desc: '8주 동안 오직 지정된 단일 식단과 물만 급여합니다. 시중 간식, 식탁 잔반, 향료가 첨가된 영양제도 전면 금지합니다.' },
      { step: '3단계', title: '원인 물질 단일 재도전 시험', desc: '가려움증이 완전히 가라앉으면, 의심되는 단백질(예: 닭고기)을 7일간 소량 먹여 반응을 살핍니다. 증상이 재발하면 알레르기가 확진됩니다.' }
    ],
    novelTitle: '추천 저알레르기 신기 단백질 (Novel Proteins)',
    novelProteins: [
      { name: '사슴고기 (베니슨)', desc: '지방이 적고 영양 밀도가 높으며 개들이 항체를 거의 가지고 있지 않은 훌륭한 붉은 고기.' },
      { name: '토끼고기', desc: '알레르기 유발 가능성이 극히 낮고 아미노산 조성이 뛰어나며 소화 흡수율이 우수합니다.' },
      { name: '오리고기', desc: '일반 닭고기에 과민 반응을 보이는 아이들을 위한 안전하고 기호성 높은 대체 조류 육류.' },
      { name: '캥거루고기', desc: '야생에서 서식하여 지방 함량이 2% 내외로 극히 낮고 청정한 최고급 저알레르기 단백질.' }
    ]
  },
  calculator: {
    eyebrow: '100% 무료 // 수의학적 급여량 & 칼로리 계산기',
    noticeTitle: '안내사항:',
    noticeText: '본 계산기는 영양학적 교육 및 참고용입니다. 수의사의 임상 진료를 대신할 수 없습니다.',
    heroTitle: '수의 영양 맞춤 강아지 일일 급여량 및 칼로리 계산기',
    heroSubtitle: '반려견의 체중, 연령, 활동량, 체형(BCS)을 입력하여 과학적 휴지기 대사량(RER)과 유지 에너지 요구량(MER), 끼니별 정밀 급여량(g)을 확인하세요.'
  },
  breeds: {
    eyebrow: '견종별 맞춤 영양 가이드 // 수의학 권장 급여량',
    targetWeight: '목표 체중',
    dailyCalories: '일일 권장 칼로리',
    freshDaily: '자연 화식 1일량',
    kibbleDaily: '건식 사료 1일량',
    cups: '컵',
    reqsTitle: '{name} 견종의 영양 요구량 및 특성',
    reqsIntro: '평균 체중이 {w0}~{w1} lbs(약 {Math.round(w0*0.453)}~{Math.round(w1*0.453)} kg)인 {category} 체급의 {name} 견종은 고유의 체질에 맞는 영양 밸런스가 필요합니다:',
    predispositionsTitle: '주의해야 할 체질 및 건강 소인:',
    feedingRoutineTitle: '권장 식사 루틴:',
    feedingRoutineDesc: '성견 {name}은 하루 2회(아침 50%, 저녁 50%)로 나누어 규칙적으로 급여하세요. 항상 깨끗한 물을 준비해 주시고, 건식 사료를 먹일 때는 따뜻한 뼈 육수나 미온수를 부어 불려주면 신장 결석을 예방할 수 있습니다.',
    ctaTitle: '{name} 맞춤형 식단 플랜 생성하기',
    ctaSubtitle: '자견기, 성견, 노령견 단계와 실제 체중, 활동량, 중성화 여부에 맞는 정밀 급여량을 계산해 보세요.',
    ctaBtn: '{name} 계산기 시작하기 →',
    faqTitle: '{name} 식단 관련 자주 묻는 질문',
    faqSubtitle: '적정 식사 횟수, 체중 관리법, 추천 식재료 안내.'
  },
  comparisonTable: {
    eyebrow: '임상 비교 // 자연 화식이 건식 사료보다 우수한 과학적 이유',
    title: '자연 화식 vs 일반 건식 사료 (키블) 영양 비교',
    subtitle: '체내 소화 흡수율, 조리 가공 온도, 장기적 비용에 대한 객관적인 데이터 비교.',
    scrollHint: '↔ 표를 좌우로 스크롤하여 확인하세요',
    colMetric: '영양 분석 항목',
    colDfp: '✨ DogFoodPlanner 홈메이드',
    colSubs: '화식 정기구독 서비스',
    colKibble: '일반 건식 사료 (키블)',
    rows: [
      {
        metric: '조리 및 가공 온도',
        dfp: '70℃ 저온 스팀 또는 생식 효소',
        subs: '급속 냉동 레토르트 가열',
        kibble: '200℃ 이상의 초고온 익스트루더 압출'
      },
      {
        metric: '순 탄수화물 함량',
        dfp: '3.5% 미만 (필수 식이섬유 채소만)',
        subs: '10% ~ 15%',
        kibble: '45% ~ 60% (전분질 증량 충전재)'
      },
      {
        metric: '천연 생체 수분 함유량',
        dfp: '70% ~ 75% (신장을 지키는 필수 수분)',
        subs: '70% ~ 75%',
        kibble: '8% ~ 10% (만성 미세 탈수 위험)'
      },
      {
        metric: '원재료 배합의 투명성',
        dfp: '100% 정밀 그램(g)과 배합비 공개',
        subs: '독자 배합 (세부 그램 비공개)',
        kibble: '분할 표기 및 모호한 육골분 표기'
      },
      {
        metric: '월평균 예상 식비 (10kg 반려견 기준)',
        dfp: '약 8만 ~ 12만 원 (직접 조리)',
        subs: '약 25만 ~ 38만 원 / 월',
        kibble: '약 5만 ~ 9만 원 / 월'
      }
    ]
  },
  faqPage: {
    badge: '나레ッジ 베이스 // 수의사 검증 40여 개 답변',
    exploreHubsTitle: '전문 영양 심층 가이드 살펴보기',
    exploreHubsSubtitle: '반려견의 건강수명과 활력을 높이고자 하는 보호자님들을 위한 전문 분야별 가이드.',
    cardBestFood: '자연 화식, 생식 BARF, 고단백 사료, 장이 예민한 아이를 위한 푸드 완벽 비교.',
    cardCalc: '반려견의 안정시 대사량(RER)과 유지 칼로리를 바탕으로 한 정밀 급여량 계산기.',
    cardRecipes: '필수 칼슘 균형을 완벽히 맞춘 저온 조리 화식 및 80-10-10 생식 레시피.',
    cardAllergies: '저알레르기 신기 단백질 선택법과 8주간의 배제 식이 시험 프로토콜.',
    cardToxic: '반려견에게 치명적인 위험 음식 총정리 및 안전한 과일·채소 급여 기준.',
    cardBrands: '블루 버팔로, 뉴트리쉬, 퓨어밸런스, 올리 등 인기 사료 브랜드 객관적 리뷰.'
  },
  faqSingle: {
    reviewedBy: '검증: 수의 임상 영양사',
    updated: '최신 업데이트: 2026년',
    directQuickAnswer: '핵심 요약 답변',
    clinicalAnalysis: '수의 임상 영양학적 상세 분석',
    topics: '관련 주제:',
    ctaBadge: '🐾 무료 반려견 영양 엔진',
    ctaTitle: '우리 강아지에게 필요한 정확한 칼로리와 식사량을 계산하세요',
    ctaSubtitle: '수의학 계산기를 사용하여 대사 소비량(RER/MER)을 확인하고 맞춤 화식 또는 생식 급여량을 확인해 보세요.',
    ctaBtn: '지금 급여량 계산하기 →',
    relatedTitle: '관련 수의 영양학 Q&A',
    readAnswer: '답변 전체 읽기 →'
  }
};

const it = {
  about: {
    missionBadge: 'LA NOSTRA MISSION // NUTRIZIONE CANINA CLINICA',
    whyTitle: 'Perché è Nato DogFoodPlanner',
    whyP1: 'Per decenni il mercato industriale del pet food ha operato come una scatola nera. Le crocchette estruse a oltre 200°C distruggono vitamine naturali, ossidano gli acidi grassi essenziali omega e riempiono i sacchi con fino al 60% di amidi ad alto indice glicemico.',
    whyP2: 'Allo stesso tempo, i servizi di cibo fresco in abbonamento chiedono oltre 300€ al mese per semplici tagli di carne e verdure. DogFoodPlanner supera questo ostacolo. Offriamo gratuitamente gli esatti algoritmi matematici utilizzati dai nutrizionisti veterinari affinché ogni proprietario possa preparare a casa razioni fresche cotte a vapore, diete BARF o topper nutrienti a una frazione del costo.',
    methodTitle: 'La Nostra Metodologia Nutrizionale',
    pillars: [
      {
        tag: '01 // FORMULE NRC',
        title: 'Fabbisogno Energetico a Riposo (RER)',
        desc: 'Calcola il consumo metabolico basale esatto in base alla massa corporea esponenziale (70 × (kg)^0.75) invece di tabelle generiche per fasce di peso.'
      },
      {
        tag: '02 // STANDARD AAFCO E FEDIAF',
        title: 'Micronutrienti Biodisponibili',
        desc: 'Ogni razione bilancia rigorosamente il rapporto calcio-fosforo (da 1.2:1 a 1.4:1), gli acidi grassi EPA/DHA e la taurina essenziale.'
      },
      {
        tag: '03 // NESSUN COSTO NASCOSTO',
        title: '100% Libero e Indipendente',
        desc: 'Non accettiamo sponsorizzazioni a pagamento di marchi e non nascondiamo i grammi delle ricette dietro abbonamenti con carta di credito.'
      }
    ],
    ctaTitle: 'Pronto a Calcolare i Fabbisogni del Tuo Cane?',
    ctaDesc: 'Usa il nostro calcolatore interattivo, consulta le guide sulle allergie ed esplora le nostre recensioni veterinarie indipendenti.',
    ctaBtn: 'Avvia il Calcolatore Gratuito →'
  },
  contact: {
    eyebrow: 'SUPPORTO E CONTATTO // RICHIESTE DIRETTE',
    cards: [
      { icon: '📧', title: 'Informazioni Generali', desc: 'Domande e suggerimenti:', email: 'hello@dogfoodplanner.com' },
      { icon: '🐾', title: 'Ricerca Nutrizionale', desc: 'Quesiti su formule e ricette:', email: 'hello@dogfoodplanner.com' },
      { icon: '🛡️', title: 'Supporto Tecnico', desc: 'Segnalazione bug e calcoli:', email: 'hello@dogfoodplanner.com' }
    ],
    formTitle: 'Invia un Messaggio al Nostro Team Nutrizionale Veterinario',
    formDesc: 'Hai dubbi sulle formule caloriche NRC o desideri un chiarimento su una ricetta BARF? Rispondiamo entro 24 ore lavorative.',
    nameLabel: 'Il Tuo Nome',
    namePlaceholder: 'es. Marco Rossi',
    emailLabel: 'Il Tuo Indirizzo Email',
    emailPlaceholder: 'marco@example.it',
    subjectLabel: 'Argomento del Messaggio',
    subjectOptions: ['Domanda Generale / Feedback', 'Nutrizione Canina e Ricette', 'Formula del Calcolatore', 'Segnalazione di Errore'],
    messageLabel: 'Il Tuo Messaggio',
    messagePlaceholder: 'Raccontaci del tuo cane (razza, peso, età) e come possiamo aiutarti...',
    submitBtn: 'Invia Messaggio →',
    notice: 'Avviso di Emergenza Veterinaria: Se il tuo cane manifesta sintomi acuti di avvelenamento o sofferenza severa, contatta immediatamente il pronto soccorso veterinario più vicino.',
    faqTitle: 'Cerchi risposte immediate?',
    faqDesc: 'Consulta la nostra raccolta di oltre 40 risposte veterinarie su inappetenza, dieta BARF, cibo per gatti e marche industriali.',
    faqBtn: 'Consulta Tutte le FAQ →'
  },
  privacy: {
    eyebrow: 'INFORMATIVA SULLA PRIVACY // PROTEZIONE DATI',
    lastUpdated: 'Aggiornato a: Gennaio 2026',
    intro: 'Su DogFoodPlanner.com rispettiamo la tua privacy e proteggiamo i tuoi dati personali. Questa informativa descrive come gestiamo le informazioni.',
    sections: [
      {
        title: '1. Informazioni che non raccogliamo',
        content: 'I dati di salute del tuo cane appartengono a te. Non richiediamo alcuna registrazione, password né carta di credito per utilizzare il nostro calcolatore. Peso, razza e preferenze alimentari sono elaborati localmente nel tuo browser e non vengono salvati su server esterni.'
      },
      {
        title: '2. Dati tecnici anonimi di navigazione',
        content: 'I nostri server CDN registrano in modo anonimo i normali log di connessione (indirizzo IP anonimizzato, tipo di browser, pagina di provenienza e data/ora) per garantire la sicurezza del sito e prevenire attacchi informatici.'
      },
      {
        title: '3. Cookie e memoria locale (localStorage)',
        content: 'Utilizziamo la memoria locale del browser (localStorage) esclusivamente per ricordare la lingua scelta e conservare il piano alimentare attivo sul dispositivo, evitando di dover ricalcolare i dati a ogni aggiornamento.'
      },
      {
        title: '4. Link esterni e fonti scientifiche',
        content: 'Il nostro portale rimanda a studi scientifici peer-reviewed, standard AAFCO/FEDIAF e banche dati del NRC. Non siamo responsabili delle pratiche di riservatezza dei siti terzi.'
      },
      {
        title: '5. Protezione dei minori',
        content: 'I nostri contenuti e strumenti sono rivolti a persone adulte. Non raccogliamo consapevolmente informazioni di minori di 13 anni.'
      },
      {
        title: '6. Aggiornamenti e contatti',
        content: 'Questa policy può essere periodicamente aggiornata. Per ogni richiesta, scrivi a privacy@dogfoodplanner.com.'
      }
    ]
  },
  terms: {
    eyebrow: 'TERMINI E CONDIZIONI DI SERVIZIO',
    lastUpdated: 'Aggiornato a: Gennaio 2026',
    intro: 'Ti preghiamo di leggere attentamente questi Termini di Servizio prima di utilizzare DogFoodPlanner.com. L’accesso al sito implica la loro integrale accettazione.',
    sections: [
      {
        title: '1. Accettazione dei Termini',
        content: 'Accedendo e utilizzando DogFoodPlanner.com (il "Sito"), dichiari di aver letto, compreso e accettato i presenti Termini e Condizioni. Qualora non fossi d’accordo, ti invitiamo a interrompere immediatamente l’uso.'
      },
      {
        title: '2. Disclaimer Medico e Veterinario',
        content: 'Le informazioni, i calcolatori e le ricette presenti su DogFoodPlanner.com hanno finalità puramente educative e divulgative fondate sui modelli NRC e FEDIAF. NON costituiscono in alcun modo diagnosi clinica, consulenza medica o terapia personalizzata. Rivolgiti sempre a un medico veterinario o a un nutrizionista per animali prima di apportare cambiamenti radicali alla dieta del tuo cane.'
      },
      {
        title: '3. Utilizzo dei Calcolatori Interattivi',
        content: 'Tutti i calcoli calorici (RER e MER) e i grammi raccomandati rappresentano stime matematiche teoriche. Il metabolismo reale varia in base a sterilizzazione, clima e fattori genetici. È dovere del proprietario verificare il Body Condition Score (BCS) e calibrare le dosi.'
      },
      {
        title: '4. Sicurezza delle Diete Casalinghe e Integrazione del Calcio',
        content: 'La preparazione di cibo casalingo o crudo impone la copertura totale di tutti i micronutrienti. Nutrire i cani con sola carne disossata e carboidrati senza integrazione di calcio causa demineralizzazione ossea grave in pochi mesi. L’utente assume la piena responsabilità della formulazione dei pasti.'
      },
      {
        title: '5. Diritti di Proprietà Intellettuale',
        content: 'Tutti i contenuti, i codici dei calcolatori, le interfacce grafiche e gli articoli su DogFoodPlanner.com sono protetti da copyright e appartengono in via esclusiva a DogFoodPlanner.'
      },
      {
        title: '6. Limitazione di Responsabilità',
        content: 'DogFoodPlanner.com e i suoi autori non saranno responsabili per eventuali danni diretti o indiretti derivanti dall’utilizzo delle informazioni e degli strumenti messi a disposizione.'
      }
    ]
  },
  bestFood: {
    eyebrow: 'GUIDA COMPLETA // MIGLIOR CIBO PER CANI 2026',
    rankingsTitle: 'Quali Sono i 5 Cibi Più Sani per Cani nel 2026?',
    rankingsIntro: 'La ricerca veterinaria sulla longevità canina conferma che una lavorazione termica minima e un’idratazione biologica superiore al 70% sono i due fattori più determinanti per la vitalità e la salute dei reni.',
    rankings: [
      {
        rank: '01',
        title: 'Cibo Fresco Casalingo Cotto a Bassa Temperatura di Grado Umano',
        score: '98/100',
        pros: 'Vera carne e verdure cotte dolcemente a 70°C. Mantiene oltre il 70% di idratazione naturale, enzimi attivi e vitamine intatte.',
        cons: 'Richiede conservazione in frigo o freezer. Costo leggermente superiore alle crocchette da supermercato.'
      },
      {
        rank: '02',
        title: 'Dieta Cruda Ancestrale BARF 80-10-10',
        score: '95/100',
        pros: 'Proporzione carnivora naturale: 80% polpa, 10% ossa polpose, 10% organi. Ideale per la salute dentale e massa magra tonica.',
        cons: 'Richiede igiene scrupolosa nella manipolazione e un bilanciamento rigoroso del calcio.'
      },
      {
        rank: '03',
        title: 'Cibo Crudo Liofilizzato e Disidratato ad Aria',
        score: '91/100',
        pros: 'Unisce la ricchezza nutrizionale della carne cruda alla comodità della conservazione a temperatura ambiente.',
        cons: 'Va reidratato con acqua tiepida o brodo di ossa prima della somministrazione.'
      },
      {
        rank: '04',
        title: 'Crocchette ad Alto Contenuto Proteico Senza Cereali o Grani Antichi',
        score: '78/100',
        pros: 'Pratiche, a lunga conservazione e sostenibili per famiglie con cani di grossa taglia.',
        cons: 'Estrusione a oltre 200°C, solo 8-10% di umidità e 40-50% di amidi amidacei.'
      },
      {
        rank: '05',
        title: 'Diete Veterinarie Terapeutiche da Prescrizione',
        score: '72/100',
        pros: 'Formulate specificamente per insufficienze renali, epatopatie o calcoli di struvite accertati.',
        cons: 'Frequente impiego di sottoprodotti vegetali; richiedono prescrizione medica.'
      }
    ],
    buyerGuideTitle: '4 Regole d’Oro per Scegliere il Miglior Alimento',
    buyerRules: [
      {
        title: '1. Carne Animale Specifica al 1° Posto negli Ingredienti',
        desc: 'Cerca «Tacchino disossato», «Manzo» o «Salmone fresco» invece di generiche «farine di carne».'
      },
      {
        title: '2. Elevata Umidità Biologica (>70%)',
        desc: 'Le sole crocchette secche provocano una disidratazione cronica latente. Aggiungi sempre brodi o cibi freschi.'
      },
      {
        title: '3. Zero Conservanti Chimici Sintetici',
        desc: 'Evita categoricamente additivi come BHA, BHT, etossichina e coloranti sintetici.'
      },
      {
        title: '4. Carboidrati Moderati (<25%)',
        desc: 'I cani non possiedono amilasi salivare. Troppi amidi affaticano il pancreas e favoriscono il sovrappeso.'
      }
    ],
    ctaTitle: 'Calcola la Dose Giornaliera Esatta per il Tuo Cane',
    ctaDesc: 'Che tu scelga cibo fresco, dieta BARF o crocchette premium: scopri i grammi giornalieri esatti e il fabbisogno calorico.',
    ctaBtn: 'Calcola la Razion Quotidiana Ora →'
  },
  recipes: {
    eyebrow: 'RICETTE CASALINGHE PER CANI // FORMULE NRC E AAFCO',
    heroTitle: 'Ricette Veterinarie per Cibo Casalingo per Cani',
    heroSubtitle: 'Istruzioni dettagliate passo-passo per preparare a casa razioni cotte a vapore bilanciate e diete crude ancestrali BARF 80-10-10.',
    calciumWarningTitle: 'La Regola d’Oro del Fatto in Casa: Il Bilanciamento del Calcio',
    calciumWarningDesc: 'La polpa muscolare è ricca di fosforo e quasi priva di calcio (rapporto 1:20). Alimentare un cane solo con carne e riso senza calcio provoca demineralizzazione scheletrica severa in pochi mesi. Aggiungi sempre 1/2 cucchiaino raso di polvere di guscio d’uovo purificata (circa 900 mg di calcio elementare) ogni 450 g di carne senza ossa per garantire il rapporto ottimale Calcio/Fosforo di 1.2:1.',
    recipesList: [
      {
        tag: 'COTTURA DOLCE',
        title: 'Ricetta 1: Tacchino a Vapore con Zucca Prebiotica (Ideale per Stomaci Delicati)',
        desc: 'Perfetta per cani con digestione sensibile, feci molli o intolleranze al pollo da allevamento intensivo.',
        ingredients: [
          'Macinato magro di tacchino — 65% (circa 900 g)',
          'Cuori di tacchino o manzo (Fonte naturale di taurina) — 10% (circa 140 g)',
          'Purea di zucca cotta al naturale (Fibre solubili) — 10% (circa 140 g)',
          'Spinacini e zucchine cotti a vapore tritati — 10% (circa 140 g)',
          'Olio di salmone selvaggio d’Alaska (EPA/DHA) — 2% (1.5 cucchiai)',
          'Farina fine di guscio d’uovo (Calcio) — 3% (1 cucchiaino raso)'
        ],
        prep: 'Cuoci delicatamente il tacchino e i cuori a fuoco basso fino a leggera cottura (70°C). Cuoci le verdure a vapore e frullale con la zucca. Amalgama tutto e lascia raffreddare completamente. Aggiungi l’olio di salmone e il calcio a freddo. Congela in porzioni singole.'
      },
      {
        tag: 'BARF CRUDA',
        title: 'Ricetta 2: Dieta Ancestrale BARF 80-10-10 Manzo & Anatra',
        desc: 'Alimentazione cruda biologicamente appropriata per cani adulti sani dotati di una normale acidità gastrica.',
        ingredients: [
          'Carne magra di manzo da pascolo — 70%',
          'Cuore di manzo (Ricco di L-Carnitina e CoQ10) — 10%',
          'Colli d’anatra crudi o carcasse — 10% (Osso polposo e calcio)',
          'Fegato di manzo (Vitamina A e complesso B) — 5%',
          'Rene o milza di manzo (Organo secretore essenziale) — 5%'
        ],
        prep: 'Taglia carne e cuore a bocconi adeguati alla taglia. Pesa accuratamente gli organi con bilancia digitale. Congela tutte le porzioni per almeno 3 settimane a -20°C prima di scongelarle e somministrarle.'
      },
      {
        tag: 'TOPPER SUPERFOOD',
        title: 'Ricetta 3: Topper Antiossidante 80/20 per Arricchire le Crocchette',
        desc: 'Integrazione fresca formulata per sostituire il 20% delle calorie giornaliere delle normali crocchette.',
        ingredients: [
          'Uova fresche biologiche in camicia — 40%',
          'Germogli di broccoli al vapore e mirtilli neri — 30%',
          'Brodo di ossa di manzo fatto sobbollire a lungo — 20%',
          'Semi di canapa bio e farina di alga kelp — 10%'
        ],
        prep: 'Cuoci le uova per 4 minuti lasciando il tuorlo morbido. Cuoci a vapore le verdure per 3 minuti. Frulla con il brodo tiepido e i mirtilli. Aggiungi da 2 a 4 cucchiai al giorno nella ciotola delle crocchette.'
      }
    ],
    calciumGuideTitle: 'Fonti Sicure di Calcio per l’Alimentazione Casalinga',
    calciumGuideItems: [
      {
        title: 'Farina di Guscio d’Uovo',
        ratio: '1/2 cucchiaino ogni 450 g di carne disossata',
        desc: '95% carbonato di calcio puro. Facile da produrre lavando, asciugando in forno e polverizzando i gusci.'
      },
      {
        title: 'Ossa Polpose Crude Commestibili',
        ratio: '10% del peso totale della ciotola',
        desc: 'Colli d’anatra o ali di pollo crude. Mai cuocere le ossa, che diventerebbero rigide e pericolose.'
      },
      {
        title: 'Farina d’Ossa Veterinaria (Bone Meal)',
        ratio: 'Secondo le indicazioni in etichetta',
        desc: 'Idrossiapatite microcristallina che apporta calcio e fosforo nel perfetto rapporto naturale di 2:1.'
      }
    ]
  },
  toxic: {
    eyebrow: 'ALIMENTI TOSSICI PER CANI // GUIDA ALLE EMERGENZE',
    dangerTitle: 'I Cibi Domestici Più Pericolosi e Letali per il Cane',
    dangerIntro: 'Alcuni alimenti innocui per noi contengono tossine che l’organismo del cane non può smaltire, portando a collassi d’organo irreversibili.',
    dangerList: [
      {
        name: 'Cioccolato & Cacao',
        toxin: 'Teobromina e Caffeina',
        symptoms: 'Vomito, respiro affannoso, tachicardia, tremori muscolari, convulsioni, arresto cardiaco.',
        risk: 'ALTO O LETALE'
      },
      {
        name: 'Uva, Uvetta e Uva Passa',
        toxin: 'Acido Tartarico',
        symptoms: 'Letargia, disidratazione, blocco renale e insufficienza acuta in 24-72 ore.',
        risk: 'ESTREMAMENTE LETALE'
      },
      {
        name: 'Xilitolo (Dolcificante / E967)',
        toxin: 'Poliolo Sintetico',
        symptoms: 'Rilascio massiccio di insulina, ipoglicemia fulminea, atassia, necrosi epatica acuta.',
        risk: 'MASSIMA URGENZA'
      },
      {
        name: 'Cipolla, Aglio, Porri e Erba Cipollina',
        toxin: 'Disolfuro di N-propile',
        symptoms: 'Distruzione dei globuli rossi, anemia emolitica, gengive pallide, urine scure.',
        risk: 'TOSSICITÀ CUMULATIVA'
      },
      {
        name: 'Noci di Macadamia',
        toxin: 'Neurotossina non identificata',
        symptoms: 'Debolezza del treno posteriore, febbre alta, vomito, rigidità muscolare dolorosa.',
        risk: 'MODERATO O SEVERO'
      },
      {
        name: 'Ossa Cotte di Qualsiasi Tipo',
        toxin: 'Rischio Meccanico di Schegge',
        symptoms: 'Perforazione gastrointestinale, emorragia interna, peritonite, blocco chirurgico.',
        risk: 'URGENZA CHIRURGICA'
      }
    ],
    emergencyTitle: 'Cosa Fare in Caso di Avvelenamento Sospetto',
    emergencySteps: [
      '1. Agisci Subito: Accerta l’alimento ingerito, la confezione, la quantità approssimativa e l’ora precisa.',
      '2. NON Provocare il Vomito senza Parere Veterinario: Prodotti corrosivi o frammenti d’ossa lesionano l’esofago durante la risalita.',
      '3. Chiama Immediatamente una Clinica Veterinaria: Contatta senza indugio un pronto soccorso veterinario attivo 24 ore.'
    ],
    safeTitle: 'Frutta e Verdura 100% Sicure e Salutari',
    safeIntro: 'Questi alimenti naturali forniscono antiossidanti, fibre solubili e vitamine utili alla salute del cane:',
    safeFoods: [
      { name: 'Mirtilli Neri', benefit: 'Ricchi di antociani e polifenoli ad alto potere protettivo cellulare.' },
      { name: 'Purea di Zucca', benefit: 'Ottima fonte di fibra solubile per regolarizzare sia diarrea che costipazione.' },
      { name: 'Carote', benefit: 'Snack croccante e ipocalorico, ricco di beta-carotene, utile alla masticazione.' },
      { name: 'Fagiolini al Vapore', benefit: 'Verdura verde a basso indice glicemico ideale per cani in sovrappeso.' },
      { name: 'Mele (Senza Semi né Torsolo)', benefit: 'Apporto naturale di vitamina C, vitamina A e pectina alleata dell’intestino.' }
    ]
  },
  brands: {
    eyebrow: 'RECENSIONI MARCHE CROCCHETTE E STORICO RICHIAMI',
    heroTitle: 'Analisi delle Marche di Cibo per Cani e Storico Richiami',
    heroSubtitle: 'Recensioni imparziali formulate da esperti veterinari su trasparenza degli ingredienti, conformità delle etichette e ritiri dal commercio.',
    brandsList: [
      {
        name: 'Blue Buffalo',
        grade: 'Voto: B+',
        pros: 'Carne disossata reale al 1° posto; senza mais, grano o soia; crocchette LifeSource Bits ricche di vitamine.',
        cons: 'Contenuto di carboidrati elevato (45-50%); richiami storici FDA per umidità eccessiva e ipervitaminosi D.',
        verdict: 'Crocchette sopra la media. Consigliamo di integrare con un 20% di alimenti freschi per idratare i reni.'
      },
      {
        name: 'Rachael Ray Nutrish',
        grade: 'Voto: C+ / B-',
        pros: 'Economico e facilmente reperibile; le linee Peak e Dish contengono percentuali maggiori di carne reale.',
        cons: 'Le linee base impiegano concentrati proteici di piselli e glutine di mais; citata in indagini FDA passate.',
        verdict: 'Scelta economica discreta nelle linee superiori, verificando che non vi sia frazionamento di legumi in etichetta.'
      },
      {
        name: 'Pure Balance',
        grade: 'Voto: B (Miglior Scelta Budget)',
        pros: 'Ottimo rapporto qualità/prezzo; ricette incentrate sulla carne senza coloranti artificiali o farine scadenti.',
        cons: 'Produzione esternalizzata; quota moderata di carboidrati.',
        verdict: 'Una delle alternative più oneste e affidabili nella fascia di prezzo da supermercato.'
      },
      {
        name: 'Ollie Fresh Dog Food',
        grade: 'Voto: A (Eccellenza)',
        pros: 'Ingredienti 100% di grado umano; cottura dolce a bassa temperatura; porzioni singole su misura.',
        cons: 'Abbonamento mensile impegnativo (180€-350€/mese); richiede spazio nel congelatore.',
        verdict: 'Punto di riferimento per il benessere metabolico, brillantezza del mantello e salute dell’apparato digerente.'
      },
      {
        name: 'Open Farm',
        grade: 'Voto: A-',
        pros: 'Trasparenza totale delle filiere; carni da allevamenti certificati nel rispetto degli animali e pesce sostenibile.',
        cons: 'Prezzo di fascia alta; distribuzione limitata nei negozi tradizionali.',
        verdict: 'Scelta d’eccellenza per chi ricerca sostenibilità etica e zero farine di sottoprodotti.'
      }
    ],
    recallsTitle: 'Come Leggere le Notifiche di Richiamo (Recalls)',
    recallsDesc: 'Gli allarmi sanitari si suddividono in tre classi: Classe I (rischio grave o letale, es. Salmonella o eccesso di Vitamina D), Classe II (disturbi transitori) e Classe III (difformità formali in etichetta). Controlla sempre il numero di lotto stampato sul sacco.',
    methodTitle: 'I Nostri 4 Criteri di Valutazione',
    methodPillars: [
      { title: '1. Chiarezza delle Carni', desc: 'Muscolo intero chiaramente indicato anziché generiche farine di carne.' },
      { title: '2. Tasso di Carboidrati', desc: 'Mantenere gli amidi sotto il 40% per prevenire l’obesità canina.' },
      { title: '3. Tracciabilità d’Origine', desc: 'Filiere etiche certificate e ingredienti privi di OGM.' },
      { title: '4. Rigore Igienico Sanitario', desc: 'Controlli batteriologici regolari in laboratori terzi indipendenti.' }
    ]
  },
  allergies: {
    eyebrow: 'DERMATOLOGIA CLINICA // ALLERGIE ALIMENTARI E DIETE AD ESCLUSIONE',
    heroTitle: 'Miglior Cibo per Cani con Allergie e Stomaco Sensibile',
    heroSubtitle: 'Guida dermatologica veterinaria a intolleranze alimentari, proteine novità ipoallergeniche e dieta di esclusione di 8 settimane.',
    allergensTitle: 'I 5 Più Comuni Allergeni Alimentari nel Cane',
    allergensIntro: 'Le allergie alimentari canine sono reazioni immunitarie anomale scatenate da proteine dietetiche. In ordine di frequenza clinica:',
    allergensList: [
      { name: '1. Pollo da Allevamento Intensivo (60% dei casi)', desc: 'Onnipresente nel pet food commerciale, è l’allergene alimentare più frequente in assoluto.' },
      { name: '2. Manzo Commerciale (30% dei casi)', desc: 'Proteina rossa diffusa che scatena spesso forte prurito alle zampe e otiti recidivanti.' },
      { name: '3. Latticini e Formaggi', desc: 'I cani adulti perdono gli enzimi lattasi, manifestando coliche gassose e diarrea.' },
      { name: '4. Glutine di Frumento e Mais', desc: 'Proteine vegetali che irritano la barriera intestinale e alimentano la proliferazione di lieviti.' },
      { name: '5. Soia e Legumi', desc: 'Riempitivi proteici a basso costo che causano fermentazioni anomale e prurito.' }
    ],
    eliminationTitle: 'Il Protocollo Veterinario della Dieta ad Esclusione di 8 Settimane',
    eliminationSteps: [
      { step: 'Fase 1', title: 'Scegliere una Sola Proteina Novità', desc: 'Passa il cane a una carne che non ha mai assaggiato prima (Cervo, Coniglio o Canguro) abbinata a un vegetale leggero come la zucca.' },
      { step: 'Fase 2', title: 'Tolleranza Zero (8 Settimane Rigorose)', desc: 'Per 8 settimane consecutive fornisci solo ed esclusivamente questo alimento. Vietati snack commerciali, bocconcini e avanzi di cucina.' },
      { step: 'Fase 3', title: 'Reintroduzione Controllata per Prova', desc: 'Se il prurito scompare, reintroduci un solo ingrediente sospetto per 7 giorni. La ricomparsa dei sintomi confermerà l’allergia.' }
    ],
    novelTitle: 'Proteínas Novità Ipoallergeniche Consigliate',
    novelProteins: [
      { name: 'Carne di Cervo / Capriolo', desc: 'Carne rossa magra e altamente digeribile verso cui i cani non hanno anticorpi pregressi.' },
      { name: 'Carne di Coniglio', desc: 'Proteina ipoallergenica d’eccellenza, leggera e dal profilo aminoacidico ideale.' },
      { name: 'Carne d’Anatra', desc: 'Ottima e saporita alternativa per cani intolleranti alle carni di pollo convenzionali.' },
      { name: 'Carne di Canguro', desc: 'Tra le carni selvatiche più pure e povere di grassi disponibili in dermatologia veterinaria.' }
    ]
  },
  calculator: {
    eyebrow: '100% GRATUITO // CALCOLATORE DEL FABBISOGNO CALORICO',
    noticeTitle: 'Nota Importante:',
    noticeText: 'Fornito a scopo informativo ed educativo. Non sostituisce una consulenza o diagnosi veterinaria.',
    heroTitle: 'Calcolatore Veterinario del Fabbisogno Calorico per Cani',
    heroSubtitle: 'Determina l’esatto fabbisogno calorico giornaliero del tuo cane (RER e MER) e calcola i grammi raccomandati per pasto in base a peso, età, attività e silhouette.'
  },
  breeds: {
    eyebrow: 'GUIDA NUTRIZIONALE PER RAZZA // LINEE GUIDA VETERINARIE',
    targetWeight: 'Peso Ideale',
    dailyCalories: 'Calorie Giornaliere',
    freshDaily: 'Cibo Fresco / Giorno',
    kibbleDaily: 'Crocchette / Giorno',
    cups: 'tazze',
    reqsTitle: 'Fabbisogni Nutrizionali per il {name}',
    reqsIntro: 'Come cane di categoria {category} con un peso medio di {w0}–{w1} lbs (circa {Math.round(w0*0.453)}–{Math.round(w1*0.453)} kg), il {name} necessita di un profilo nutrizionale dedicato:',
    predispositionsTitle: 'Sensibilità e Predisposizioni di Razza:',
    feedingRoutineTitle: 'Routine di Alimentazione Consigliata:',
    feedingRoutineDesc: 'Distribuisci i pasti del tuo {name} adulto due volte al giorno (50% al mattino e 50% alla sera). Assicura sempre acqua fresca. Se somministri crocchette, reidratale con brodo di ossa tiepido per sostenere i reni.',
    ctaTitle: 'Personalizza il Piano Alimentare per il Tuo {name}',
    ctaSubtitle: 'Imposta età esatta (cucciolo, adulto o senior), peso reale, livello di esercizio fisico e forma fisica con il calcolatore gratuito.',
    ctaBtn: 'Calcola per {name} →',
    faqTitle: 'Domande Frequenti sull’Alimentazione del {name}',
    faqSubtitle: 'Dosi consigliate, numero di pasti e ingredienti ottimali.'
  },
  comparisonTable: {
    eyebrow: 'CONFRONTO CLINICO // CIBO FRESCO NATURALE VS CROCCHETTE',
    title: 'Perché il Cibo Naturale Supera le Crocchette',
    subtitle: 'Un’analisi comparativa su biodisponibilità, temperature di lavorazione e costi reali sostenuti.',
    scrollHint: '↔ Scorri la tabella in orizzontale',
    colMetric: 'Parametro Nutrizionale',
    colDfp: '✨ DogFoodPlanner Casalingo',
    colSubs: 'Abbonamenti Fresco',
    colKibble: 'Crocchette Secche',
    rows: [
      {
        metric: 'Metodo di Cottura',
        dfp: 'Vapore Dolce (70°C) o Crudo Attivo',
        subs: 'Cottura Industriale Surgelata',
        kibble: 'Estrusione ad Alta Temperatura (200°C)'
      },
      {
        metric: 'Carboidrati Netti',
        dfp: '< 3.5% (Solo verdure selezionate)',
        subs: '10% – 15%',
        kibble: '45% – 60% (Amidi di riempimento)'
      },
      {
        metric: 'Umidità Biologica',
        dfp: '70% – 75% (Idratazione renale vitale)',
        subs: '70% – 75%',
        kibble: '8% – 10% (Disidratazione subclinica)'
      },
      {
        metric: 'Trasparenza delle Dosi',
        dfp: '100% Grammi e percentuali svelati',
        subs: 'Formula brevettata (grammi nascosti)',
        kibble: 'Ingredienti frazionati e farine miste'
      },
      {
        metric: 'Costo Medio Mensile (Cane 23 kg)',
        dfp: '75€ – 115€ (Cucinato a casa)',
        subs: '260€ – 360€ / mese',
        kibble: '50€ – 85€ / mese'
      }
    ]
  },
  faqPage: {
    badge: 'ARCHIVIO CONOSCENZE // OLTRE 40 RISPOSTE VETERINARIE',
    exploreHubsTitle: 'Esplora i Nostri Dossier di Nutrizione Canina',
    exploreHubsSubtitle: 'Guide di approfondimento create per i proprietari attenti al benessere e alla longevità del loro cane.',
    cardBestFood: 'Confronto tra cibo fresco, BARF, crocchette ad alto tenore di carne e formule delicate.',
    cardCalc: 'Calcolatore scientifico RER e MER per calcolare le porzioni giornaliere in grammi.',
    cardRecipes: 'Ricette casalinghe cotte e BARF 80-10-10 con apporto controllato e sicuro di calcio.',
    cardAllergies: 'Scelta delle proteine ipoallergeniche, diete ad esclusione e flora batterica intestinale.',
    cardToxic: 'Elenco completo dei cibi tossici da evitare, frutta e verdura sicure e additivi dannosi.',
    cardBrands: 'Recensioni imparziali su Blue Buffalo, Nutrish, Pure Balance, Ollie e Open Farm.'
  },
  faqSingle: {
    reviewedBy: 'Revisionato da: Nutrizionista Veterinario Canino',
    updated: 'Aggiornato al: 2026',
    directQuickAnswer: 'Risposta Rapida Diretta',
    clinicalAnalysis: 'Analisi Clinica e Nutrizionale Approfondita',
    topics: 'Argomenti correlati:',
    ctaBadge: '🐾 Motore Nutrizionale Canino Gratuito',
    ctaTitle: 'Calcola le Calorie e i Grammi Giornalieri per il Tuo Cane',
    ctaSubtitle: 'Usa il nostro calcolatore veterinario per conoscere il dispendio metabolico (RER/MER) e i grammi per pasti freschi o crudi.',
    ctaBtn: 'Calcola le Dosi Ora →',
    relatedTitle: 'Domande Veterinarie Correlate',
    readAnswer: 'Leggi la Risposta Completa →'
  }
};

module.exports = { ko, it };
