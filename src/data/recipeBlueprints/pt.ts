import type { RecipeBlueprint } from './types';

export const ptBlueprints: RecipeBlueprint[] = [
  // 1. TURKEY & PUMPKIN BLUEPRINT
  {
    slug: 'turkey-pumpkin-maintenance',
    name: 'Blueprint de Peru Magro e Abóbora para Manutenção de Cães Adultos',
    shortDesc: 'Uma receita clínica 65/10/10/8/4/3 desenvolvida para cães adultos com peru magro 93/7, taurina de vísceras para o coração, abóbora prebiótica e cálcio balanceado.',
    badge: 'Manutenção de Cães Adultos',
    targetAudience: 'Cães Adultos (1-7 Anos) // Manutenção e Digestão Sensível',
    colorTheme: '#0070f3',
    macroProfile: {
      proteinDm: '48.2%',
      fatDm: '22.8%',
      carbsDm: '13.4%',
      moisture: '72.5%',
      kcalPerKg: '1.220 kcal/kg (aprox. 34.6 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (Faixa Recomendada NRC: 1.1:1 – 1.4:1)',
    },
    ingredients: [
      {
        name: 'Carne de Peru Magra Moída (93% magra / 7% gordura)',
        percentage: 65,
        category: 'Carne Muscular Principal',
        role: 'Aminoácidos essenciais de alta absorção para síntese muscular e enzimática',
        clinicalBenefit: 'Proteína única altamente digestível com baixíssimo potencial alergênico.',
        color: '#0070f3',
      },
      {
        name: 'Corações e Moelas de Peru',
        percentage: 10,
        category: 'Vísceras Musculares e CoQ10',
        role: 'Taurina natural concentrada, CoQ10, ferro heme e complexo B12',
        clinicalBenefit: 'Protege o coração canino contra a cardiomiopatia dilatada (DCM).',
        color: '#7928ca',
      },
      {
        name: 'Purê de Abóbora Pura Orgânica',
        percentage: 10,
        category: 'Fibra Solúvel Prebiótica',
        role: 'Pectina solúvel que estimula a produção de ácidos graxos de cadeia curta',
        clinicalBenefit: 'Regulador de dupla ação: firma fezes amolecidas e previne constipação.',
        color: '#f5a623',
        affiliateKey: 'pumpkinPuree',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: 'Espinafre Baby e Abobrinha no Vapor',
        percentage: 8,
        category: 'Fitonutrientes e Vegetais Verdes',
        role: 'Fornece folato, vitamina K1, potássio, magnésio e luteína antioxidante',
        clinicalBenefit: 'O vapor rompe as paredes de celulose para absorção fácil dos nutrientes.',
        color: '#10b981',
      },
      {
        name: 'Pó de Casca de Ovo e Alga Kelp',
        percentage: 4,
        category: 'Mineral Essencial e Equilibrador Ca:P',
        role: 'Fornece ~38% de cálcio elementar para neutralizar o fósforo da carne a 1.25:1',
        clinicalBenefit: 'CRÍTICO: Carne sem ossos tem proporção invertida 1:20. O cálcio evita perda óssea.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Óleo de Salmão Selvagem do Alasca (a frio)',
        percentage: 3,
        category: 'Ômega-3 Marinho EPA/DHA',
        role: 'EPA e DHA pré-formados para modular a cascata inflamatória',
        clinicalBenefit: 'Mantém a barreira dérmica, acalma coceiras e protege as articulações.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Uma formulação de alimentos frescos balanceada para garantir a manutenção de cães adultos enquanto protege a saúde digestiva. Elaborada com peru magro 93/7, taurina de vísceras para o coração, pectina prebiótica de abóbora e cálcio de casca de ovo calibrado.',
    clinicalRationale: [
      {
        title: '1. Por que Peru Magro 93/7 em vez de Frango ou Carne Bovina?',
        description:
          'Frango e carne bovina são os dois maiores alérgenos em cães. O peru magro oferece proteína única de fácil assimilação com mais de 94% de digestibilidade e baixo impacto sobre o pâncreas.',
        points: [
          'Alto valor biológico com 100% dos aminoácidos essenciais recomendados pelo NRC.',
          'Baixo teor de gordura previne episódios de pancreatite aguda.',
          'Excelente para cães com estômago sensível e histórico de alergias.',
        ],
      },
      {
        title: '2. Proteção Cardíaca: Vias de Taurina e CoQ10 das Vísceras',
        description:
          'Carne muscular isolada não supre as necessidades de taurina do miocárdio canino. A inclusão de 10% de corações e moelas garante taurina e CoQ10 naturais para blindar o coração.',
        points: [
          'Taurina orgânica biodisponível sem depender de químicos sintéticos.',
          'Ferro heme bioassimilável e coenzima Q10 para energia celular.',
          'Previne a cardiomiopatia dilatada nutricional (DCM).',
        ],
      },
      {
        title: '3. Proporção Cálcio-Fósforo (Regra de Ouro 1.25:1)',
        description:
          'Qualquer carne desossada apresenta uma proporção tóxica de cálcio para fósforo de 1:20. Dietas caseiras sem cálcio desmineralizam o esqueleto. O pó de casca de ovo restabelece a proporção ideal de 1.25:1.',
        points: [
          'Fornece 38% de cálcio elementar altamente absorvível.',
          'Kelp fornece iodo natural para o metabolismo tireoidiano.',
          'Garante ossos e dentes fortes durante toda a vida adulta.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Preparo e Corte',
        instruction: 'Higienize as superfícies de trabalho. Pique os corações e moelas de peru em cubos pequenos de 0,5 cm.',
      },
      {
        step: 2,
        title: 'Cozimento em Fogo Baixo (<82°C)',
        instruction: 'Cozinhe o peru moído e as vísceras com 1/2 xícara de água por 8-10 min até perder a cor rosada. Não doure nem frite.',
        criticalTip: 'Não frite em fogo alto para evitar a formação de compostos tóxicos (AGEs).',
      },
      {
        step: 3,
        title: 'Cozinhar no Vapor e Triturar',
        instruction: 'Cozinhe a abobrinha e o espinafre no vapor por 4-5 min. Triture no processador com o purê de abóbora.',
      },
      {
        step: 4,
        title: 'Resfriamento Obrigatório (<38°C)',
        instruction: 'Misture os vegetais à carne cozida. Deixe esfriar completamente até a temperatura ambiente antes de adicionar os suplementos.',
        criticalTip: 'Nunca adicione óleo de salmão na comida quente; o calor oxida os ácidos graxos ômega-3.',
      },
      {
        step: 5,
        title: 'Mistura dos Suplementos a Frio',
        instruction: 'Adicione o pó de casca de ovo, o kelp e o óleo de salmão a frio, misturando bem por 2 minutos.',
      },
      {
        step: 6,
        title: 'Pesagem e Porcionamento',
        instruction: 'Pese as porções diárias em balança digital. Armazene em potes de vidro ou sacos de congelamento.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Geladeira',
        duration: 'Máximo 3-4 Dias',
        instructions: 'Recipiente hermético de vidro a menos de 3°C.',
      },
      {
        method: 'Freezer',
        duration: 'Até 90 Dias',
        instructions: 'Sacos a vácuo ou de silicone bem vedados sem ar.',
      },
      {
        method: 'Descongelamento',
        duration: 'Na Geladeira 24h',
        instructions: 'Descongele na geladeira 24h antes. Nunca use micro-ondas em potência alta.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '280 – 320 kcal', dailyGramsTotal: '240 g / dia', mainProtein: '156 g', organMeat: '24 g', produceAndCarbs: '43 g', supplements: '17 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '550 – 620 kcal', dailyGramsTotal: '480 g / dia', mainProtein: '312 g', organMeat: '48 g', produceAndCarbs: '86 g', supplements: '34 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '950 – 1.080 kcal', dailyGramsTotal: '850 g / dia', mainProtein: '553 g', organMeat: '85 g', produceAndCarbs: '153 g', supplements: '59 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.320 – 1.480 kcal', dailyGramsTotal: '1.180 g / dia', mainProtein: '767 g', organMeat: '118 g', produceAndCarbs: '212 g', supplements: '83 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NÃO indicado para filhotes de raças gigantes em crescimento (<12 meses) sem ajuste pediátrico de cálcio.',
        'NÃO fornecer a cães com doença renal crônica avançada (estágio IRIS 3-4) sem controle rigoroso de fósforo.',
      ],
      transitionSteps: [
        'Dias 1–3: 25% nova receita / 75% alimentação anterior',
        'Dias 4–6: 50% nova receita / 50% alimentação anterior',
        'Dias 7–9: 75% nova receita / 25% alimentação anterior',
        'Dia 10+: 100% nova receita caseira',
      ],
      calciumRule: 'NUNCA omita o pó de casca de ovo; carne sem ossos desprovida de cálcio causa desmineralização óssea em 60 dias.',
    },
    faq: [
      {
        question: 'Posso substituir o peru por carne bovina moída magra?',
        answer: 'Sim, desde que a carne tenha menos de 8% de gordura e você mantenha os 10% de vísceras para garantir a taurina.',
      },
      {
        question: 'Posso servir esta receita crua?',
        answer: 'Aves comerciais apresentam riscos bacterianos e vegetais crus não são digeridos sem cozimento a vapor. O cozimento suave é altamente recomendado.',
      },
    ],
  },

  // 2. BEEF & SWEET POTATO BLUEPRINT
  {
    slug: 'beef-sweet-potato-vitality',
    name: 'Blueprint de Carne Bovina de Pasto e Batata-Doce para Alta Vitalidade',
    shortDesc: 'Fórmula para cães ativos 62/10/12/8/4/4 com carne bovina 90/10, fígado e coração ricos em ferro e CoQ10, batata-doce de liberação lenta e brócolis.',
    badge: 'Músculo Ativo e Vitalidade',
    targetAudience: 'Cães Ativos e de Trabalho // Alto Gasto Calórico e Densidade Muscular',
    colorTheme: '#7928ca',
    macroProfile: {
      proteinDm: '46.5%',
      fatDm: '24.0%',
      carbsDm: '17.5%',
      moisture: '71.0%',
      kcalPerKg: '1.290 kcal/kg (aprox. 36.6 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (Conforme NRC)',
    },
    ingredients: [
      {
        name: 'Carne Bovina Moída Magra de Pasto (90/10)',
        percentage: 62,
        category: 'Carne Vermelha Muscular',
        role: 'Creatina, ácido linoleico conjugado (CLA), zinco e mioglobina para massa muscular',
        clinicalBenefit: 'Carne de pasto possui proporção superior de ômega-3 para resistência física.',
        color: '#e11d48',
      },
      {
        name: 'Fígado e Coração Bovino',
        percentage: 10,
        category: 'Vísceras de Alta Densidade Nutricional',
        role: 'Vitamina A pré-formada (retinol), B12, cobre, ferro heme e CoQ10',
        clinicalBenefit: 'Melhora o transporte de oxigênio no sangue e o metabolismo energético.',
        color: '#7928ca',
      },
      {
        name: 'Batata-Doce Laranja no Vapor',
        percentage: 12,
        category: 'Carboidrato Complexo de Liberação Lenta',
        role: 'Carboidratos de baixo índice glicêmico para reposição contínua de glicogênio muscular',
        clinicalBenefit: 'Mantém a energia constante em cães de trabalho sem picos de insulina.',
        color: '#f5a623',
      },
      {
        name: 'Brócolis e Cenouras no Vapor',
        percentage: 8,
        category: 'Vegetais Crucíferos e Antioxidantes',
        role: 'Sulforafano e betacaroteno para desintoxicação celular',
        clinicalBenefit: 'Neutraliza o estresse oxidativo decorrente de exercícios intensos.',
        color: '#10b981',
      },
      {
        name: 'Pó de Casca de Ovo e Kelp Orgânico',
        percentage: 4,
        category: 'Equilíbrio Mineral de Cálcio e Iodo',
        role: 'Neutraliza o fósforo da carne a 1.25:1 Ca:P com iodo para a tireoide',
        clinicalBenefit: 'Protege a densidade óssea contra impactos mecânicos frequentes.',
        color: '#0070f3',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Azeite de Oliva e Óleo de Fígado de Bacalhau',
        percentage: 4,
        category: 'Lipídios Saudáveis e Vitamina D3',
        role: 'Ácido oleico e vitamina D3 natural para fixação óssea do cálcio',
        clinicalBenefit: 'Suporte hormonal e cardiovascular em cães de alta performance. Adicionar a frio.',
        color: '#f5a623',
      },
    ],
    executiveSummary:
      'Uma fórmula atlética de alta performance formulada para cães de agility, trabalho ou com rotina de exercícios pesados. A carne de pasto fornece creatina natural para força muscular, enquanto a batata-doce garante energia estável ao longo de todo o dia.',
    clinicalRationale: [
      {
        title: '1. Por que Carne Bovina de Pasto Oferece Maior Potência Atlética?',
        description:
          'Cães ativos consomem rapidamente a fosfocreatina muscular. A carne bovina de pasto fornece creatina celular para regenerar o ATP e acelerar a recuperação pós-exercício.',
        points: [
          'Rica em CLA para sustentar massa corporal magra.',
          'Três vezes mais ômega-3 do que a carne de confinamento industrial.',
          'Ferro heme altamente biodisponível para oxigenação dos tecidos.',
        ],
      },
      {
        title: '2. Reposição Constante de Glicogênio via Batata-Doce',
        description:
          'Ao contrário de grãos como milho ou trigo, a batata-doce libera glicose de forma gradual durante 6 a 8 horas sem sobrecarregar o pâncreas.',
        points: [
          'Energia duradoura para trilhas, corridas e esportes caninos.',
          'Rica em potássio para prevenir cãibras musculares.',
          'Pectina solúvel que nutre a microbiota intestinal benéfica.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Corte de Carne e Vísceras',
        instruction: 'Corte o coração e o fígado bovinos em cubos pequenos de 0,5 cm. Mantenha refrigerado até o cozimento.',
      },
      {
        step: 2,
        title: 'Cozimento Suave da Carne',
        instruction: 'Cozinhe a carne moída 90/10 e as vísceras com 1/2 xícara de água por 10 minutos em fogo brando até cozinhar por igual.',
      },
      {
        step: 3,
        title: 'Cozimento de Batata-Doce e Brócolis',
        instruction: 'Descasque a batata-doce e corte em cubos. Cozinhe no vapor com o brócolis e cenouras por 10-12 min e amasse grosseiramente.',
      },
      {
        step: 4,
        title: 'Resfriamento Completo',
        instruction: 'Misture os vegetais à carne bovina cozida. Deixe esfriar completamente abaixo de 38°C antes dos óleos.',
      },
      {
        step: 5,
        title: 'Incorporação de Óleos e Cálcio',
        instruction: 'Adicione o cálcio de casca de ovo, o kelp, o azeite e o óleo de fígado de bacalhau a frio, misturando por 2 min.',
      },
      {
        step: 6,
        title: 'Porcionar e Armazenar',
        instruction: 'Pese as porções diárias em balança digital de acordo com as calorias calculadas. Congele as porções extras.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Geladeira',
        duration: 'Máximo 3-4 Dias',
        instructions: 'Recipiente hermético de vidro a menos de 3°C.',
      },
      {
        method: 'Freezer',
        duration: 'Até 90 Dias',
        instructions: 'Porções diárias embaladas a vácuo.',
      },
      {
        method: 'Servir',
        duration: 'Morno Suave',
        instructions: 'Aquecer levemente em banho-maria morno antes de servir.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '310 – 350 kcal', dailyGramsTotal: '230 g / dia', mainProtein: '143 g', organMeat: '23 g', produceAndCarbs: '46 g', supplements: '18 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '620 – 710 kcal', dailyGramsTotal: '460 g / dia', mainProtein: '285 g', organMeat: '46 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1.080 – 1.220 kcal', dailyGramsTotal: '810 g / dia', mainProtein: '502 g', organMeat: '81 g', produceAndCarbs: '162 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.490 – 1.680 kcal', dailyGramsTotal: '1.120 g / dia', mainProtein: '694 g', organMeat: '112 g', produceAndCarbs: '224 g', supplements: '90 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NÃO fornecer a cães com histórico de pancreatite (exige gordura abaixo de 12% na matéria seca).',
        'NÃO alimentar sem o suplemento de cálcio (carne sem cálcio desmineraliza os ossos).',
      ],
      transitionSteps: [
        'Dias 1–3: 25% nova receita / 75% alimentação anterior',
        'Dias 4–6: 50% nova receita / 50% alimentação anterior',
        'Dias 7–9: 75% nova receita / 25% alimentação anterior',
        'Dia 10+: 100% nova receita',
      ],
      calciumRule: 'Pese sempre o cálcio com exatidão; o fósforo da carne bovina requer neutralização estrita.',
    },
    faq: [
      {
        question: 'Cães sedentários podem consumir esta receita?',
        answer: 'Em cães com baixa atividade, reduza a porção diária em 15-20% ou prefira a receita de peru com abóbora.',
      },
    ],
  },

  // 3. SALMON & QUINOA BLUEPRINT
  {
    slug: 'salmon-quinoa-joint-coat',
    name: 'Blueprint de Salmão Selvagem e Quinoa para Articulações e Pelagem',
    shortDesc: 'Fórmula marinha 60/8/12/10/6/4 com salmão selvagem, quinoa de alta digestibilidade, mirtilos antioxidantes e óleo de cânhamo para alívio articular e dermatológico.',
    badge: 'Articulações & Pelagem',
    targetAudience: 'Cães Adultos e Idosos // Rigidez Articular e Pele com Coceira',
    colorTheme: '#06b6d4',
    macroProfile: {
      proteinDm: '44.0%',
      fatDm: '25.5%',
      carbsDm: '18.5%',
      moisture: '73.0%',
      kcalPerKg: '1.260 kcal/kg (aprox. 35.7 kcal/oz)',
      caPhosphorusRatio: '1.28 : 1.0 (Conforme NRC)',
    },
    ingredients: [
      {
        name: 'Salmão Selvagem do Alasca e Peixe Branco',
        percentage: 60,
        category: 'Peixe Marinho Principal',
        role: 'EPA e DHA marinhos diretos e colágeno para síntese de líquido sinovial',
        clinicalBenefit: 'Suprime a inflamação COX-2 nas articulações artríticas e restaura a barreira cutânea.',
        color: '#06b6d4',
      },
      {
        name: 'Corações e Moelas de Peru',
        percentage: 8,
        category: 'Fonte de Taurina de Vísceras',
        role: 'Fornece taurina essencial para o coração durante dietas à base de peixe',
        clinicalBenefit: 'Garante a saúde cardíaca contínua enquanto combate o desgaste articular.',
        color: '#7928ca',
      },
      {
        name: 'Quinoa Orgânica Cozida',
        percentage: 12,
        category: 'Pseudocereal Hipoalergênico',
        role: 'Perfil completo de 9 aminoácidos essenciais sem glúten nem antígenos inflamatórios',
        clinicalBenefit: 'Altamente tolerada em intestinos sensíveis com aporte de magnésio e ferro.',
        color: '#f5a623',
        affiliateKey: 'quinoa',
      },
      {
        name: 'Mirtilos, Couve Kale e Abobrinha no Vapor',
        percentage: 10,
        category: 'Antioxidantes Vegetais de Alta Potência (ORAC)',
        role: 'Antocianinas e luteína para proteger os condrócitos da cartilagem articular',
        clinicalBenefit: 'Protege a cartilagem e favorece a agilidade cognitiva de cães idosos.',
        color: '#10b981',
      },
      {
        name: 'Óleo de Cânhamo Prensado a Frio e Mexilhão Verde',
        percentage: 6,
        category: 'GLA e Glicosaminoglicanos (GAGs)',
        role: 'Ácido gama-linolênico e sulfato de condroitina para lubrificar as articulações',
        clinicalBenefit: 'Alivia a rigidez matinal e acalma a descamação na pele. Adicionar a frio.',
        color: '#0070f3',
      },
      {
        name: 'Cálcio de Algas Marinhas e Kelp',
        percentage: 4,
        category: 'Cálcio Iônico Vegetal Marinho',
        role: 'Alga vermelha calcificada fornecendo cálcio natural e 72 minerais traço',
        clinicalBenefit: 'Muito mais suave para o trato digestivo do que suplementos químicos pesados.',
        color: '#e11d48',
        affiliateKey: 'kelp',
      },
    ],
    executiveSummary:
      'Uma formulação clínica anti-inflamatória desenvolvida para cães com rigidez articular, artrose ou dermatite alérgica crônica. Doses elevadas de EPA/DHA de salmão selvagem agem em sinergia com o mexilhão verde e o óleo de cânhamo para lubrificar articulações e restaurar a pele.',
    clinicalRationale: [
      {
        title: '1. A Cascata de EPA e DHA Marinhos para Articulações e Pele',
        description:
          'O EPA e o DHA deslocam o ácido araquidônico pró-inflamatório nas membranas celulares, diminuindo acentuadamente a dor articular e o prurido cutâneo.',
        points: [
          'Biodisponibilidade 10 vezes maior do que fontes vegetais como semente de linhaça.',
          'Melhora a lubrificação do líquido sinovial articular.',
          'Alivia a dermatite atópica de forma natural e segura.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Cozimento de Peixe e Vísceras',
        instruction: 'Cozinhe o salmão, o peixe branco e os corações de peru em 1 xícara de água em fogo baixo por 7-8 min. Desfie cuidadosamente verificando espinhas.',
      },
      {
        step: 2,
        title: 'Cozinhar a Quinoa',
        instruction: 'Lave bem a quinoa para remover as saponinas amargas. Ferva no dobro de água por 15 minutos até ficar macia e deixe esfriar.',
      },
      {
        step: 3,
        title: 'Cozimento de Mirtilos e Vegetais',
        instruction: 'Cozinhe a couve kale e a abobrinha no vapor por 4 min. Junte os mirtilos frescos e processe tudo em purê grosseiro.',
      },
      {
        step: 4,
        title: 'Resfriamento Obrigatório',
        instruction: 'Misture todos os ingredientes cozidos. Deixe esfriar completamente abaixo de 38°C antes de adicionar os óleos e suplementos.',
        criticalTip: 'Nunca adicione óleos de ômega-3 em comida aquecida; o calor destrói os lipídios marinos.',
      },
      {
        step: 5,
        title: 'Mistura de Suplementos a Frio',
        instruction: 'Adicione o cálcio de algas, o kelp, o óleo de cânhamo e o pó de mexilhão verde a frio. Misture bem por 2 minutos.',
      },
      {
        step: 6,
        title: 'Pesar e Congelar',
        instruction: 'Pese as porções diárias em balança digital. Guarde as refeições de 2-3 dias na geladeira e congele o restante.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Geladeira',
        duration: 'Máximo 3 Dias',
        instructions: 'O peixe oxida mais rápido que aves; consuma em até 72 horas.',
      },
      {
        method: 'Freezer',
        duration: 'Até 60 Dias',
        instructions: 'Congele a vácuo para proteger os lipídios sensíveis da oxidação.',
      },
      {
        method: 'Descongelamento',
        duration: 'Na Geladeira',
        instructions: 'Descongele na geladeira. Evite micro-ondas para não oxidar as gorduras.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '300 – 340 kcal', dailyGramsTotal: '235 g / dia', mainProtein: '141 g', organMeat: '19 g', produceAndCarbs: '52 g', supplements: '23 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '600 – 680 kcal', dailyGramsTotal: '470 g / dia', mainProtein: '282 g', organMeat: '38 g', produceAndCarbs: '103 g', supplements: '47 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1.040 – 1.180 kcal', dailyGramsTotal: '830 g / dia', mainProtein: '498 g', organMeat: '66 g', produceAndCarbs: '183 g', supplements: '83 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.450 – 1.620 kcal', dailyGramsTotal: '1.150 g / dia', mainProtein: '690 g', organMeat: '92 g', produceAndCarbs: '253 g', supplements: '115 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NÃO sirva salmão selvagem cru sem cozimento (risco de intoxicação por salmão pelo parasita Neorickettsia helminthoeca). O cozimento elimina totalmente o risco.',
      ],
      transitionSteps: [
        'Dias 1–3: 25% nova receita / 75% alimentação anterior',
        'Dias 4–6: 50% nova receita / 50% alimentação anterior',
        'Dias 7–9: 75% nova receita / 25% alimentação anterior',
        'Dia 10+: 100% nova receita',
      ],
      calciumRule: 'O cálcio de algas deve ser pesado com precisão para manter o equilíbrio Ca:P.',
    },
    faq: [
      {
        question: 'Posso usar salmão em lata?',
        answer: 'Apenas salmão selvagem em água SEM adição de sal. O salmão fresco ou congelado é a opção preferível.',
      },
    ],
  },

  // 4. LAMB & CRANBERRY BLUEPRINT
  {
    slug: 'lamb-cranberry-gentle-gut',
    name: 'Blueprint de Cordeiro de Pasto e Cranberry Hipoalergênico Gastrointestinal',
    shortDesc: 'Fórmula de proteína nobre 64/8/12/8/5/3 com cordeiro de pasto, abóbora butternut suave e cranberries para cães com alergias severas a frango e carne bovina.',
    badge: 'Hipoalergênico Digestivo e Urinário',
    targetAudience: 'Cães Alérgicos a Frango/Carne Bovina & Trato Digestivo Sensível',
    colorTheme: '#10b981',
    macroProfile: {
      proteinDm: '45.8%',
      fatDm: '26.2%',
      carbsDm: '16.0%',
      moisture: '72.0%',
      kcalPerKg: '1.310 kcal/kg (aprox. 37.1 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (Conforme NRC)',
    },
    ingredients: [
      {
        name: 'Carne Moída Magra de Cordeiro de Pasto',
        percentage: 64,
        category: 'Proteína Nobre Diferenciada',
        role: 'L-carnitina, zinco e perfil antigênico diferenciado para dietas de descarte',
        clinicalBenefit: 'Evita reações alérgicas ao frango ou bovino em cães sensíveis.',
        color: '#10b981',
      },
      {
        name: 'Fígado e Rins de Cordeiro',
        percentage: 8,
        category: 'Vísceras Filtradoras Ricas em Nutrientes',
        role: 'Selênio, cobre, vitamina A e folatos de metilação ativa',
        clinicalBenefit: 'Protege as membranas celulares e fortalece a imunidade intestinal.',
        color: '#7928ca',
      },
      {
        name: 'Abóbora Butternut e Cranberries Puras no Vapor',
        percentage: 12,
        category: 'Pectina Digestiva e PACs Urinários',
        role: 'Proantocianidinas para a saúde urinária e pectina calmante para o cólon',
        clinicalBenefit: 'Regula fezes amolecidas e previne infecções no trato urinário.',
        color: '#f5a623',
      },
      {
        name: 'Vagem e Salsa no Vapor',
        percentage: 8,
        category: 'Clorofila Digestiva e Fibra Suave',
        role: 'Fibra delicada e apigenina para acalmar espasmos da peristalse',
        clinicalBenefit: 'Auxilia na digestão sem provocar gases e refresca o hálito naturalmente.',
        color: '#0070f3',
      },
      {
        name: 'Pó de Casca de Ovo e Kelp',
        percentage: 5,
        category: 'Cálcio e Iodo Essenciais',
        role: 'Carbonato de cálcio calibrado para equilibrar o cordeiro a 1.25:1 Ca:P',
        clinicalBenefit: 'Mineralização óssea sem irritação estomacal.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Óleo de Salmão Selvagem do Alasca (a frio)',
        percentage: 3,
        category: 'Ômega-3 Marinho',
        role: 'EPA/DHA para acalmar a mucosa intestinal e o prurido cutâneo',
        clinicalBenefit: 'Protege a integridade da barreira intestinal. Adicionar sempre a frio.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Uma fórmula hipoalergênica direcionada a cães com histórico de fezes pastosas, intolerância alimentar a aves ou carne bovina e irritações urinárias. O cordeiro de pasto oferece uma proteína nobre e limpa, enquanto a abóbora butternut e as cranberries protegem o intestino e as vias urinárias.',
    clinicalRationale: [
      {
        title: '1. Por que Cordeiro de Pasto para Alergias Crônicas?',
        description:
          'Frango e carne bovina causam a imensa maioria das alergias em cães. O cordeiro de pasto não apresenta reatividade cruzada e descansa o sistema imunológico digestivo.',
        points: [
          'Elimina os alérgenos alimentares mais comuns.',
          'Rico em L-carnitina para o coração e metabolismo lipídico.',
          'Alta palatabilidade mesmo para cães inapetentes.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Corte de Vísceras e Preparo do Cordeiro',
        instruction: 'Pique o fígado e os rins de cordeiro em cubos pequenos de 0,5 cm.',
      },
      {
        step: 2,
        title: 'Cozimento Suave',
        instruction: 'Cozinhe a carne moída e as vísceras com 1/2 xícara de água por 8-10 minutos em fogo baixo. Descarte o excesso de gordura na superfície.',
      },
      {
        step: 3,
        title: 'Cozimento de Abóbora, Cranberries e Vagem',
        instruction: 'Cozinhe no vapor a abóbora butternut, a vagem e as cranberries frescas por 6-8 min até amolecer e processe em purê fino.',
      },
      {
        step: 4,
        title: 'Resfriamento Completo (<38°C)',
        instruction: 'Junte o purê ao cordeiro cozido e deixe esfriar até atingir a temperatura ambiente.',
      },
      {
        step: 5,
        title: 'Mistura dos Suplementos a Frio',
        instruction: 'Adicione o pó de casca de ovo, o kelp e o óleo de salmão a frio, misturando por 2 minutos.',
      },
      {
        step: 6,
        title: 'Pesagem das Porções',
        instruction: 'Pese as porções em balança digital. Guarde na geladeira por 2-3 dias ou congele em potes herméticos.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Geladeira',
        duration: 'Máximo 3-4 Dias',
        instructions: 'Pote de vidro hermético a menos de 3°C.',
      },
      {
        method: 'Freezer',
        duration: 'Até 90 Dias',
        instructions: 'Porções individuais vedadas a vácuo.',
      },
      {
        method: 'Servir',
        duration: 'Morno em Banho-Maria',
        instructions: 'Amornar suavemente em banho-maria antes de servir.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '305 – 345 kcal', dailyGramsTotal: '230 g / dia', mainProtein: '147 g', organMeat: '18 g', produceAndCarbs: '46 g', supplements: '19 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '610 – 700 kcal', dailyGramsTotal: '460 g / dia', mainProtein: '294 g', organMeat: '37 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1.060 – 1.200 kcal', dailyGramsTotal: '820 g / dia', mainProtein: '525 g', organMeat: '66 g', produceAndCarbs: '164 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.480 – 1.650 kcal', dailyGramsTotal: '1.130 g / dia', mainProtein: '723 g', organMeat: '90 g', produceAndCarbs: '226 g', supplements: '91 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NÃO utilize cranberries secas adoçadas com açúcar ou suco de uva concentrado; utilize somente cranberries frescas ou congeladas 100% puras.',
      ],
      transitionSteps: [
        'Dias 1–3: 25% nova receita / 75% anterior',
        'Dias 4–6: 50% nova receita / 50% anterior',
        'Dias 7–9: 75% nova receita / 25% anterior',
        'Dia 10+: 100% nova receita',
      ],
      calciumRule: 'Certifique-se de incluir a quantidade correta de pó de cálcio para prevenir a deficiência mineral.',
    },
    faq: [
      {
        question: 'Cranberries são seguras para cães?',
        answer: 'Sim, cozidas e em sua forma pura sem açúcar. São excelentes para a proteção da bexiga e do trato urinário.',
      },
    ],
  },
];
