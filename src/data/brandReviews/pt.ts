import type { BrandReview, BrandReviewSlug } from './types';

export const ptBrandReviews: Record<BrandReviewSlug, BrandReview> = {
  'blue-buffalo': {
    slug: 'blue-buffalo',
    name: 'Blue Buffalo',
    grade: 'Classificação: B+',
    score: '8.4 / 10',
    badge: 'Ração Comercial Popular com Carne como Primeiro Ingrediente',
    category: 'Ração Seca Comercial e Alimento Úmido Enlatado',
    countryOfOrigin: 'Wilton, Connecticut, EUA (Fundada em 2003)',
    parentCompany: 'General Mills (Adquirida em 2018 por US$ 8 bilhões)',
    manufacturingFacilities: 'Fábricas próprias em Joplin (Missouri) e Richmond (Indiana)',
    recallRecord: {
      status: 'PAST_RECALLS',
      label: 'Histórico de Recalls Registrados na FDA',
      details: 'As ações históricas de recall da FDA incluem excesso de Vitamina D (2010), problemas de umidade/bolor (2010), contaminação acidental por propilenoglicol em alimentos enlatados (2015) e recolhimento voluntário de petiscos mastigáveis por risco de Salmonella (2015). A marca também foi citada na investigação de 2018-2019 da FDA sobre cardiomiopatia dilatada (DCM) associada a rações sem grãos ricas em leguminosas.',
      history: [
        '2010: Recolhimento voluntário por níveis elevados de Vitamina D em fórmulas secas selecionadas.',
        '2010: Desvio de umidade resultando em potencial proliferação de bolor em lotes específicos.',
        '2015: Recall de Classe II de alimento enlatado devido à presença não intencional de propilenoglicol.',
        '2018-2019: Listada na investigação da FDA que avaliou a correlação entre DCM e dietas sem grãos ricas em ervilhas e lentilhas.',
      ],
    },
    macroProfile: {
      protein: '34% - 38%',
      fat: '15% - 18%',
      carbohydrates: '42% - 48%',
      fiber: '5.0%',
      moisture: '10.0%',
    },
    pros: [
      'Carne desossada de verdade (frango, salmão ou carne bovina) sempre como ingrediente nº 1 em todas as linhas.',
      'Croquetes LifeSource Bits prensados a frio preservam vitaminas, minerais e antioxidantes do calor da extrusão.',
      'Fórmula 100% livre de milho, trigo, soja, corantes ou aromatizantes químicos artificiais.',
      'Portfólio abrangente que vai do sem grãos Wilderness à linha suave Life Protection com cereais nobres.',
    ],
    cons: [
      'Carga elevada de carboidratos (42-48%) que pode predispor ao ganho de peso em cães castrados ou sedentários.',
      'Variedades sem grãos Wilderness utilizam quantidades significativas de proteína de ervilha, amido e batata.',
      'Histórico de recalls na FDA demonstra os desafios do controle de qualidade em produção industrial massiva.',
    ],
    overview:
      'A Blue Buffalo é uma das marcas de alimentos para animais de maior notoriedade na América do Norte, construída com base na filosofia da carne como prioridade e na conscientização contra subprodutos de aves. Adquirida pela General Mills em 2018, a marca continua formulando alimentos secos e úmidos ricos em proteína animal através de linhas consagradas como Wilderness, Life Protection Formula e Basics Limited Ingredient.',
    deepDive: [
      'Arquitetura Nutricional e LifeSource Bits: Ao contrário das rações comerciais comuns que submetem todos os ingredientes a extrusão em alta temperatura (frequentemente acima de 200°C), a Blue Buffalo separa seu complexo de vitaminas e antioxidantes em croquetes prensados a frio (LifeSource Bits). Essa tecnologia protege nutrientes termossensíveis (como vitaminas C, E e do complexo B) e bioflavonoides ativos que degradariam na extrusão convencional.',
      'Balanço de Carboidratos e Leguminosas: Embora as fórmulas Wilderness apresentem uma sólida fração proteica de 34% a 38%, análises laboratoriais indicam que o percentual de carboidratos totais permanece entre 42% e 48%. Nas receitas sem grãos, a marca emprega ervilhas e amido de tapioca. Cães com tendência à pancreatite ou resistência à insulina exigem um controle rigoroso das porções diárias.',
      'Hidratação e Abordagem Clínica: Croquetes extrudados contêm apenas 8% a 10% de umidade, impondo uma sobrecarga silenciosa aos rins caninos ao longo de anos de alimentação exclusiva. A Blue Buffalo oferece uma nutrição de base consistente, mas os médicos veterinários recomendam adicionar água morna, caldo de ossos sem sal ou 20% de alimentos frescos para evitar a concentração urinária e proteger a função renal.',
    ],
    ingredientPillars: [
      {
        title: '1. Proteína Animal Especificada',
        score: '9.0 / 10',
        explanation: 'Frango, carne bovina, pato ou salmão desossado sempre lidera a lista de ingredientes, apoiado por farinhas de carne de espécie única para aminoácidos concentrados.',
      },
      {
        title: '2. Fração de Carboidratos',
        score: '7.5 / 10',
        explanation: 'Os níveis de amido giram em torno de 42-48%. Fórmulas com cereais utilizam arroz integral e aveia, enquanto as sem grãos dependem de ervilhas e batatas.',
      },
      {
        title: '3. Processamento e Proteção Térmica',
        score: '8.8 / 10',
        explanation: 'Os LifeSource Bits patenteados e moldados a frio evitam a destruição térmica de micronutrientes cruciais durante o ciclo industrial.',
      },
      {
        title: '4. Rastreabilidade e Histórico Sanitário',
        score: '7.8 / 10',
        explanation: 'As fábricas próprias modernas no Missouri e em Indiana implementaram testes analíticos rígidos após os episódios de recall do início da década de 2010.',
      },
    ],
    keyProductLines: [
      {
        name: 'Wilderness High-Protein',
        type: 'Ração Sem Grãos Rica em Carnes',
        description: 'Desenvolvida para reproduzir a dieta ancestral do lobo com mais de 34% de proteína, carne de verdade e zero glúten ou cereais.',
        targetDogs: 'Cães adultos ativos, raças de trabalho e animais que necessitam de suporte muscular proteico de alto nível.',
      },
      {
        name: 'Life Protection Formula',
        type: 'Ração Equilibrada com Cereais Integrais',
        description: 'Dieta balanceada de manutenção combinando arroz integral, cevada e aveia com proteínas animais desossadas.',
        targetDogs: 'Cães domésticos de família com nível de atividade normal e digestão saudável.',
      },
      {
        name: 'Basics Limited Ingredient Diet (LID)',
        type: 'Dieta Hipoalergênica Monoproteica',
        description: 'Única fonte proteica inovadora (peru, pato ou salmão) associada a carboidratos de fácil assimilação, sem ovos nem laticínios.',
        targetDogs: 'Cães com intolerâncias alimentares, coceiras persistentes ou trato gastrointestinal sensível.',
      },
    ],
    veterinaryVerdict:
      'A Blue Buffalo representa uma ração comercial notavelmente superior à média dos supermercados. Embora a carga de carboidratos seja mais alta que o biologicamente ideal, seu deck encabeçado por carnes reais e os LifeSource Bits protetores fazem dela uma escolha confiável e consistente.',
    feedingRecommendation:
      'Recomendamos alternar a fonte proteica a cada 3 ou 4 meses e reidratar cada refeição com um pouco de água morna ou caldo de ossos caseiro. Para cães com mais de 7 anos, combinar a ração com 15% a 20% de alimentos frescos próprios para humanos otimiza expressivamente a vitalidade metabólica.',
    affiliateProductKeys: [
      'blue-buffalo-wilderness-chicken-24lb',
      'blue-buffalo-wilderness-salmon-24lb',
      'blue-buffalo-wilderness-chicken-4lb',
    ],
  },
  'rachael-ray-nutrish': {
    slug: 'rachael-ray-nutrish',
    name: 'Rachael Ray Nutrish',
    grade: 'Classificação: C+ / B-',
    score: '7.2 / 10',
    badge: 'Fórmula Acessível de Supermercado',
    category: 'Ração Seca e Bandejas Úmidas de Linha Econômica',
    countryOfOrigin: 'Meadville, Pensilvânia, EUA (Lançada em 2008)',
    parentCompany: 'Post Holdings (Adquirida da J.M. Smucker em 2023)',
    manufacturingFacilities: 'Plantas industriais nos Estados Unidos (Pensilvânia e Kansas)',
    recallRecord: {
      status: 'MONITORED',
      label: 'Poucos Recalls, Citada em Relatório da FDA',
      details: 'Volume reduzido de recalls oficiais. Recolhimento voluntário isolado em 2019 de alimentos úmidos por excesso de Vitamina D. Mencionada no relatório exploratório de 2019 da FDA sobre dietas econômicas sem grãos ricas em leguminosas.',
      history: [
        '2019: Recolhimento voluntário de lotes de comida úmida por concentração elevada de Vitamina D.',
        '2018-2019: Citada no relatório da FDA que analisou a relação entre cardiomiopatia dilatada e fórmulas sem grãos.',
      ],
    },
    macroProfile: {
      protein: '24% - 30%',
      fat: '12% - 16%',
      carbohydrates: '46% - 52%',
      fiber: '4.5%',
      moisture: '10.0%',
    },
    pros: [
      'Preço por quilo muito competitivo, tornando a alimentação canina acessível para famílias com orçamento limitado.',
      'Ampla facilidade de aquisição em supermercados e grandes redes varejistas.',
      'As linhas Peak e Dish apresentam maior concentração de carne e pedaços reais visíveis de vegetais desidratados.',
      'Parte dos lucros é doada continuamente à organização de resgate animal Rachael\'s Rescue.',
    ],
    cons: [
      'Fórmulas de entrada apoiam-se fortemente em farelo de glúten de milho, milho moído e ervilhas secas.',
      'Baixa concentração de ácidos graxos ômega-3 marinhos (EPA/DHA), exigindo suplementação adicional.',
      'Índice glicêmico elevado (até 52% de carboidratos), favorecendo o ganho de peso em cães pouco ativos.',
    ],
    overview:
      'A Rachael Ray Nutrish surgiu em 2008 em parceria com a chef Rachael Ray com o intuito de trazer ingredientes superiores para as prateleiras do varejo comum. Atualmente pertencente à Post Holdings, a marca atua desde fórmulas básicas acessíveis até linhas melhor elaboradas como a Nutrish Peak e a Nutrish Dish.',
    deepDive: [
      'Diferenciação Crítica Entre Linhas de Produto: É fundamental distinguir entre as receitas padrão da Nutrish e sua linha superior "Peak". Enquanto a linha básica coloca carne em primeiro lugar, mas segue rapidamente com glúten de milho e ervilhas secas, a linha Nutrish Peak elimina totalmente milho, trigo e soja, alcançando respeitáveis 30% de proteína bruta.',
      'Qualidade dos Lipídios e Ômega-3: A gordura principal é a gordura de frango preservada com tocoferóis mistos. Entretanto, os ômega-3 de cadeia longa (EPA e DHA) são modestos. Cães que consomem a linha padrão diariamente se beneficiam enormemente da suplementação direta com óleo de salmão selvagem.',
      'Balanço Custo-Benefício: A Nutrish cumpre um papel social relevante ao viabilizar uma opção superior às marcas genéricas de supermercado cheias de restos anônimos sem comprometer o orçamento doméstico. No entanto, os tutores devem atentar-se à lista de ingredientes para evitar opções com fracionamento excessivo de leguminosas.',
    ],
    ingredientPillars: [
      {
        title: '1. Proteína Animal Especificada',
        score: '7.5 / 10',
        explanation: 'Carne ou frango real abre a formulação, mas receitas mais simples complementam a proteína com glúten de milho vegetal.',
      },
      {
        title: '2. Fração de Carboidratos',
        score: '6.8 / 10',
        explanation: 'Os carboidratos são altos (46-52%), gerando uma carga glicêmica que exige dosagem rigorosa das porções na balança.',
      },
      {
        title: '3. Aditivos e Palatabilizantes',
        score: '7.6 / 10',
        explanation: 'Preservada com tocoferóis naturais sem corantes artificiais, mas utiliza extratos de aromas naturais para estimular a ingestão.',
      },
      {
        title: '4. Rastreabilidade e Manufatura',
        score: '7.2 / 10',
        explanation: 'Fabricada em unidades industriais norte-americanas com padrões comerciais e histórico controlado de advertências.',
      },
    ],
    keyProductLines: [
      {
        name: 'Nutrish Peak High Protein',
        type: 'Fórmula Sem Grãos Rica em Proteínas',
        description: 'Rações e bandejas úmidas sem cereais com 30% de proteína, carne desossada e zero milho, trigo ou soja.',
        targetDogs: 'Cães que necessitam de melhor equilíbrio entre proteína e carboidrato com custo moderado.',
      },
      {
        name: 'Nutrish Dish Whole Ingredients',
        type: 'Ração com Pedaços Visíveis de Ingredientes Reais',
        description: 'Combina croquetes cozidos lentamente com pedaços visíveis de cenoura, ervilhas e maçãs.',
        targetDogs: 'Animais seletivos que se mostram mais animados diante de texturas variadas no comedouro.',
      },
      {
        name: 'Nutrish Real Beef & Brown Rice',
        type: 'Ração Econômica de Manutenção Diária',
        description: 'Alimento básico equilibrando carne bovina com arroz integral para o dia a dia.',
        targetDogs: 'Cães saudáveis sem sensibilidades alérgicas e lares com orçamento restrito.',
      },
    ],
    veterinaryVerdict:
      'A Nutrish é uma escolha econômica aceitável desde que se dê preferência às linhas "Peak" ou "Dish". Evite as receitas de entrada dependentes de glúten de milho e complemente sempre a dieta com hidratação e ácidos graxos ômega-3.',
    feedingRecommendation:
      'Ao oferecer a ração seca tradicional da Nutrish, complemente diariamente com 1 colher de chá de óleo de salmão selvagem para repor EPA/DHA e meça com precisão a quantidade servida para conter o excesso de peso.',
    affiliateProductKeys: [
      'nutrish-peak-variety-pack-wet',
      'nutrish-beef-pea-brown-rice-28lb',
    ],
  },
  'pure-balance': {
    slug: 'pure-balance',
    name: 'Pure Balance',
    grade: 'Classificação: B (Melhor Custo-Benefício)',
    score: '8.1 / 10',
    badge: 'Melhor Escolha Econômica de Supermercado',
    category: 'Ração Seca e Úmida de Marca Própria Acessível',
    countryOfOrigin: 'Estados Unidos (Marca exclusiva do Walmart, lançada em 2012)',
    parentCompany: 'Walmart Inc.',
    manufacturingFacilities: 'Fabricada por parceiros terceirizados consolidados (principalmente Ainsworth Pet Nutrition) nos EUA',
    recallRecord: {
      status: 'CLEAN',
      label: 'Histórico de Segurança Notavelmente Limpo',
      details: 'A Pure Balance ostenta um histórico exemplar, sem registros de recalls graves de Classe I da FDA em suas principais linhas de ração seca desde sua estreia no mercado em 2012.',
      history: [
        'Zero recalls de Classe I da FDA por toxinas ou micro-organismos em suas fórmulas secas principais.',
        'Padrões de controle higiênico amplamente superiores aos alimentos comerciais legados de supermercado.',
      ],
    },
    macroProfile: {
      protein: '24% - 28%',
      fat: '13% - 16%',
      carbohydrates: '46% - 50%',
      fiber: '5.0%',
      moisture: '10.0%',
    },
    pros: [
      'Relação custo-benefício excepcional, oferecendo fórmulas com carne em primeiro lugar a preços de grande rede varejista.',
      '100% livre de milho, trigo, soja, farinha de subprodutos de aves e corantes sintéticos.',
      'Proteína animal de verdade (salmão, cordeiro ou frango) é o ingrediente nº 1 em todas as receitas.',
      'Histórico sanitário limpo em comparação com marcas antigas do segmento comercial.',
    ],
    cons: [
      'Marca própria produzida por co-packers contratados com eventuais variações de plantas fabris.',
      'Percentual moderado a elevado de carboidratos (46-50%) derivados de ervilhas, batatas e arroz integral.',
      'Poucos estudos de testes de alimentação divulgados publicamente em relação a rações terapêuticas.',
    ],
    overview:
      'A Pure Balance foi lançada pelo Walmart em 2012 com o objetivo de democratizar a alimentação canina de alta qualidade. Ao conceber receitas sem milho, trigo, soja ou corantes artificiais, a rede ofereceu uma alternativa real às marcas caras de pet shops com uma economia de quase 40% por quilo.',
    deepDive: [
      'Produção Terceirizada e Garantia de Qualidade: Sendo uma marca exclusiva de varejo, a produção é delegada a plantas industriais estabelecidas (sobretudo Ainsworth Pet Nutrition / Post Holdings). Apesar do perfil econômico, a marca cumpre com rigor os parâmetros da AAFCO e sustenta um histórico limpo de recalls há mais de uma década.',
      'Comparativo de Fórmula com Marcas Especializadas: Uma análise direta entre a Pure Balance Grain-Free Salmão & Ervilha e marcas de boutique revela listas de ingredientes muito semelhantes: salmão desossado liderando, seguido por farinha de salmão e grão-de-bico. Excelente oportunidade para tutores que priorizam ingredientes limpos sem custos de marketing de luxo.',
      'Avaliação Clínica dos Carboidratos: Como a grande maioria das rações com preço acessível, o volume de carboidratos gira em torno de 46% a 50%. Em animais jovens e enérgicos, fornece energia limpa e constante; em cães idosos ou sedentários, é recomendável dosar as porções em balança digital.',
    ],
    ingredientPillars: [
      {
        title: '1. Proteína Animal Especificada',
        score: '8.4 / 10',
        explanation: 'Carne real encabeça todas as fórmulas, associada a farinhas proteicas especificadas e zero subprodutos anônimos.',
      },
      {
        title: '2. Ingredientes de Enchimento & Aditivos',
        score: '8.8 / 10',
        explanation: 'Zero milho, trigo, soja, corantes artificiais (sem Vermelho 40 ou Amarelo 5) ou conservantes como BHA/BHT.',
      },
      {
        title: '3. Acessibilidade Econômica',
        score: '9.8 / 10',
        explanation: 'Uma das melhores relações entre valor nutritivo e preço por quilo disponíveis no varejo de grande escala.',
      },
      {
        title: '4. Rastreabilidade de Origem',
        score: '7.0 / 10',
        explanation: 'Por ser marca de distribuidor, a rastreabilidade direta das fazendas produtoras é menor do que em marcas artesanais éticas.',
      },
    ],
    keyProductLines: [
      {
        name: 'Pure Balance Grain-Free Salmon & Pea',
        type: 'Fórmula Hipoalergênica de Peixe',
        description: 'Receita à base de salmão formulada especialmente para cães com alergia a frango ou sensibilidade a cereais.',
        targetDogs: 'Cães predispostos a prurido cutâneo, otites recorrentes ou pelagem sem brilho.',
      },
      {
        name: 'Pure Balance Chicken & Brown Rice',
        type: 'Fórmula Equilibrada com Cereais Nobres',
        description: 'Receita clássica de manutenção combinando frango de verdade e arroz integral de fácil digestão.',
        targetDogs: 'Cães de companhia com digestão normal e rotina familiar equilibrada.',
      },
      {
        name: 'Pure Balance Wild & Free Superfood Blend',
        type: 'Ração Proteica com Superalimentos',
        description: 'Receita reforçada com cenouras, mirtilos e oxicocos para aporte antioxidante elevado.',
        targetDogs: 'Raças ativas que demandam suporte calórico e antioxidante extra.',
      },
    ],
    veterinaryVerdict:
      'A Pure Balance é, sem dúvidas, uma das rações comerciais econômicas mais recomendáveis. Ela entrega a formulação sem milho e com carne de verdade típica de marcas caras a preço acessível, respaldada por um histórico sanitário surpreendentemente impecável.',
    feedingRecommendation:
      'Para usufruir de ótimos benefícios sem gastar muito, sirva a Pure Balance acompanhada de complementos frescos acessíveis: duas colheres de sopa de purê de abóbora cozida, um ovo cozido duas vezes por semana ou um pouco de caldo de ossos caseiro.',
    affiliateProductKeys: [],
  },
  'ollie': {
    slug: 'ollie',
    name: 'Ollie Alimento Fresco para Cães',
    grade: 'Classificação: A (Padrão Ouro)',
    score: '9.6 / 10',
    badge: '100% Grau Humano e Padrão Ouro em Comida Fresca',
    category: 'Alimento Fresco para Cães Cozido Delicadamente em Grau Humano',
    countryOfOrigin: 'Nova York, NY, EUA (Fundada em 2016)',
    parentCompany: 'Ollie Pets Inc.',
    manufacturingFacilities: 'Cozinhas profissionais inspecionadas pelo USDA na Pensilvânia e em Nova Jersey',
    recallRecord: {
      status: 'CLEAN',
      label: 'Histórico Impecável com Zero Recalls',
      details: 'A Ollie sustenta um histórico irrepreensível com zero recalls ou notificações da FDA desde sua fundação em 2016. Sendo preparada em cozinhas de consumo humano auditadas pelo USDA sob os critérios de segurança da FDA, o controle biológico é imensamente superior ao das fábricas de ração industrial.',
      history: [
        'Zero recalls da FDA ou advertências regulatórias desde o início da marca em 2016.',
        'Cozimento em temperatura interna de precisão que extingue micro-organismos preservando todos os micronutrientes.',
      ],
    },
    macroProfile: {
      protein: '38% - 44% (MS)',
      fat: '22% - 28% (MS)',
      carbohydrates: '22% - 28% (MS)',
      fiber: '3.5%',
      moisture: '72.0%',
    },
    pros: [
      'Carnes e vegetais inteiros 100% próprios para consumo humano inspecionados pelo USDA, perfeitamente identificáveis em cada embalagem.',
      'Cozimento brando a baixas temperaturas que destrói bactérias sem desestruturar enzimas vivas e vitaminas essenciais.',
      'Porções calóricas diárias individualizadas formuladas por veterinários nutrólogos segundo peso, idade e gasto calórico.',
      'Umidade biológica natural (72%) que protege os rins, o trato urinário e o equilíbrio celular canino.',
      'Histórico de segurança impecável sem nenhum recall na história da marca.',
    ],
    cons: [
      'Investimento mensal elevado (cerca de US$ 180 a US$ 350/mês a depender do porte do animal).',
      'Exige espaço reservado no congelador e programação para descongelamento na geladeira.',
      'Modelo de entrega por assinatura direta sem disponibilidade em lojas físicas de rua.',
    ],
    overview:
      'A Ollie foi criada em 2016 com o propósito de transformar a longevidade canina substituindo as rações industriais ultraprocessadas por refeições de verdade em padrão de alimentação humana. Desenvolvidas por veterinários especialistas em nutrição (ACVN), as receitas são cozidas lentamente em cozinhas com inspeção do USDA e chegam em porções exatas personalizadas para o metabolismo de cada cão.',
    deepDive: [
      'A Ciência do Cozimento Brando versus Extrusão: Rações secas comuns são expostas a temperaturas violentas (150°C a 200°C) e alta pressão mecânica, gerando produtos de glicação avançada (AGEs) prejudiciais e desnaturando aminoácidos sensíveis. Em contraste, a Ollie cozinha lentamente carnes magras e vegetais frescos. Testes clínicos apontam uma digestibilidade proteica até 40% maior e uma absorção nutricional incomparável.',
      'Proteção Renal e Vesical pela Hidratação Biológica: O organismo dos canídeos foi programado evolutivamente para obter mais de 70% da sua hidratação a partir da presa fresca. A ingestão de croquetes secos (8-10% água) induz uma desidratação crônica de baixo grau, concentrando a urina e acelerando a fadiga renal. A Ollie fornece 72% de umidade natural, auxiliando na filtração renal e prevenindo urólitos.',
      'Porcionamento Personalizado e Longevidade: A obesidade é a principal causa evitável de redução da expectativa de vida em cães. A Ollie elimina o erro empacotando pacotes calculados com base na Necessidade Energética de Repouso (RER) e Manutenção (MER), assegurando o escore corporal ideal (BCS 4 a 5 de 9).',
    ],
    ingredientPillars: [
      {
        title: '1. Carnes 100% de Grau Humano',
        score: '9.9 / 10',
        explanation: 'Cortes nobres de carne bovina, frango, peru e cordeiro inspecionados pelo USDA. Sem resíduos de abatedouro ou gorduras animais não identificadas.',
      },
      {
        title: '2. Biodisponibilidade Nutricional',
        score: '9.8 / 10',
        explanation: 'Vegetais inteiros (batata-doce, cenoura, espinafre, mirtilo) fornecem fibras prebióticas e antioxidantes naturais sem pré-misturas químicas pesadas.',
      },
      {
        title: '3. Microbioma e Digestibilidade',
        score: '9.7 / 10',
        explanation: 'Estudos clínicos constatam aumento da diversidade bacteriana intestinal benéfica, fezes mais firmes e menor volume fecal.',
      },
      {
        title: '4. Infraestrutura e Segurança',
        score: '9.9 / 10',
        explanation: 'Elaborada em instalações auditadas pelo USDA para consumo humano com um histórico de zero recalls desde a inauguração.',
      },
    ],
    keyProductLines: [
      {
        name: 'Carne Bovina Fresca com Batata-Doce',
        type: 'Fórmula Muscular Rica em Proteínas',
        description: 'Carne bovina magra USDA, fígado bovino, batata-doce, ervilhas e mirtilos cozidos brandamente para máxima retenção de nutrientes.',
        targetDogs: 'Cães ativos, filhotes em crescimento e cães que demandam palatabilidade cárnica pronunciada.',
      },
      {
        name: 'Frango Fresco com Cenouras',
        type: 'Fórmula Suave de Alta Digestibilidade',
        description: 'Cortes macios de frango, coração e fígado de frango, cenouras e arroz. Muito suave para o trato estomacal.',
        targetDogs: 'Cães de estômago sensível ou com menor tolerância a níveis elevados de gordura.',
      },
      {
        name: 'Peru Fresco com Mirtilos',
        type: 'Fórmula Hipoalergênica de Ave',
        description: 'Peru nutritivo, fígado de peru, couve, cenouras e mirtilos repletos de antioxidantes.',
        targetDogs: 'Cães idosos, animais com histórico alérgico e cães que demandam suporte articular.',
      },
    ],
    veterinaryVerdict:
      'A Ollie é a referência absoluta da nutrição veterinária canina contemporânea. Os benefícios clínicos do alimento fresco em grau humano sobre a ração industrial em digestão, vigor da pelagem e proteção dos órgãos são cientificamente indiscutíveis.',
    feedingRecommendation:
      'Caso a assinatura 100% fresca exceda seu orçamento, recomendamos enfaticamente o plano híbrido 50/50: mantenha metade do comedouro com boa ração e adicione 50% de Ollie fresco. Mesmo uma adição de 25% de comida fresca ameniza consideravelmente a inflamação celular e restaura o microbioma.',
    affiliateProductKeys: [
      'ollie-chicken-apple-jerky-treats',
    ],
  },
  'open-farm': {
    slug: 'open-farm',
    name: 'Open Farm',
    grade: 'Classificação: A-',
    score: '9.2 / 10',
    badge: 'Pioneira em Bem-Estar Animal e Fornecimento Ético',
    category: 'Ração Ultra-Premium Rastreável, RawMix e Comida Úmida',
    countryOfOrigin: 'Toronto, Ontário, Canadá (Fundada em 2014)',
    parentCompany: 'Open Farm Inc.',
    manufacturingFacilities: 'Fábricas familiares com certificação SQF nos Estados Unidos e Canadá',
    recallRecord: {
      status: 'CLEAN',
      label: 'Histórico Exemplar com Zero Recalls',
      details: 'A Open Farm mantém uma trajetória sanitária perfeita, sem nenhum recall registrado pela FDA desde sua criação em 2014. A marca aplica rastreabilidade por lote, testes analíticos independentes a cada ciclo e relatórios laboratoriais acessíveis aos tutores.',
      history: [
        'Zero recalls da FDA ou advertências oficiais desde o lançamento em 2014.',
        'Ferramenta online por lote que permite rastrear cada ingrediente até a fazenda sustentável de origem.',
      ],
    },
    macroProfile: {
      protein: '32% - 38% (MS)',
      fat: '16% - 20% (MS)',
      carbohydrates: '32% - 38% (MS)',
      fiber: '4.5%',
      moisture: '10.0%',
    },
    pros: [
      'Rastreabilidade total e pioneira: digite o lote do pacote no site para conhecer as propriedades de origem.',
      'Carnes 100% Certified Humane criadas a pasto e pescados selvagens sustentáveis certificados pelo Ocean Wise.',
      'Linha inovadora RawMix com croquetes banhados em caldo de ossos e miúdos liofilizados para altíssima aceitação.',
      'Zero farinhas de subprodutos avícolas, aditivos químicos artificiais ou manipulação de leguminosas.',
      'Variedades com cereais ancestrais nobres (aveia, milheto, quinoa) e opções sem grãos.',
    ],
    cons: [
      'Preço de posicionamento premium significativamente superior às rações comerciais de supermercado.',
      'Comercializada preferencialmente em pet shops independentes especializados ou por comércio eletrônico.',
      'Elevada densidade de nutrientes requer dosagem em balança culinária para não sobrecarregar as calorias.',
    ],
    overview:
      'A Open Farm foi fundada em 2014 com uma proposta ética sem precedentes: transparência radical dos ingredientes e estrito bem-estar animal. Foi a primeira marca da América do Norte a selar parceria com o Certified Humane e o Ocean Wise, permitindo que os tutores rastreiem todos os itens da tigela diretamente até a fazenda ou pescaria de origem.',
    deepDive: [
      'Rastreabilidade Radical e Padrões de Bem-Estar: A maior parte das indústrias trata a origem das matérias-primas como segredo comercial. A Open Farm estampa um código em cada embalagem que revela a procedência de cada item. Suas carnes derivam de propriedades certificadas onde os animais são criados soltos a pasto e livres de antibióticos.',
      'Tecnologia RawMix e Órgãos Liofilizados: A linha RawMix alia croquetes de alta proteína a pedaços crus liofilizados e uma infusão de caldo de ossos com vísceras nobres (fígado, coração e rins). Isso assegura micronutrientes biodisponíveis (vitamina A, CoQ10 e ferro) e um aroma natural extraordinário sem aromas químicos.',
      'Cereais Ancestrais versus Sem Grãos: Em vez de abusar do fracionamento de ervilhas para mascarar o valor proteico em opções sem grãos, a Open Farm concebe receitas limpas com cereais ancestrais (aveia integral, sorgo, quinoa e milheto). Esses grãos de baixo índice glicêmico ofertam liberação constante de energia e fibras prebióticas para a flora intestinal.',
    ],
    ingredientPillars: [
      {
        title: '1. Bem-Estar Animal Certificado',
        score: '9.9 / 10',
        explanation: 'Carne bovina 100% Certified Humane criada a pasto, suínos e aves livres de gaiolas e pescados sustentáveis Ocean Wise.',
      },
      {
        title: '2. Rastreabilidade Total da Cadeia',
        score: '10 / 10',
        explanation: 'Cada ingrediente é 100% rastreável até a fazenda de origem através da busca online pelo código do lote.',
      },
      {
        title: '3. Infusão Crua e Caldo de Ossos',
        score: '9.4 / 10',
        explanation: 'Croquetes envolvidos em caldo de ossos e vísceras liofilizadas garantem micronutrientes nobres e aroma irresistível.',
      },
      {
        title: '4. Qualidade de Processamento',
        score: '9.1 / 10',
        explanation: 'Produzida em plantas com certificação internacional SQF e análises laboratoriais independentes a cada lote.',
      },
    ],
    keyProductLines: [
      {
        name: 'RawMix Grain-Free Front Range Recipe',
        type: 'Ração Revestida com Cru Liofilizado',
        description: 'Carne bovina de pasto, cordeiro e carne suína com caldo de ossos e pedaços de carne crua liofilizada.',
        targetDogs: 'Cães de alta energia, digestão delicada e animais exigentes que rejeitam rações comuns.',
      },
      {
        name: 'RawMix Ancient Grains Open Prairie Recipe',
        type: 'Ração Nutritiva com Grãos Ancestrais',
        description: 'Frango e peru criados soltos com grãos ancestrais não transgênicos (aveia, milheto, quinoa) e caldo de ossos.',
        targetDogs: 'Cães que se adaptam muito bem a cereais suaves para energia metabólica sustentada.',
      },
      {
        name: 'Wild Ocean Catch Recipe',
        type: 'Fórmula Exclusiva de Peixes Selvagens',
        description: 'Salmão, peixe branco e arenque selvagens Ocean Wise ricos em ácidos graxos ômega-3 anti-inflamatórios (EPA/DHA).',
        targetDogs: 'Cães com dermatite alérgica, pelagem ressecada ou rigidez nas articulações.',
      },
    ],
    veterinaryVerdict:
      'A Open Farm estabelece o padrão mais elevado de transparência e integridade ética na alimentação canina moderna. Suas receitas RawMix oferecem a conveniência do alimento seco somada ao poder nutricional das carnes liofilizadas e do caldo de ossos.',
    feedingRecommendation:
      'Por ser notavelmente mais concentrada em calorias e nutrientes do que as rações comuns, orientamos pesar as refeições em uma balança de cozinha para garantir a correta manutenção do peso corporal magro.',
    affiliateProductKeys: [
      'open-farm-rawmix-front-range-20lb',
      'open-farm-rawmix-open-prairie-20lb',
      'open-farm-rawmix-wild-ocean-20lb',
    ],
  },
};
