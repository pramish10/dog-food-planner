import type { BrandReview, BrandReviewSlug } from './types';

export const frBrandReviews: Record<BrandReviewSlug, BrandReview> = {
  'blue-buffalo': {
    slug: 'blue-buffalo',
    name: 'Blue Buffalo',
    grade: 'Note : B+',
    score: '8.4 / 10',
    badge: 'Croquettes Commerciales Populaires avec Viande en Premier Ingrédient',
    category: 'Croquettes Sèches Commerciales & Pâtées en Boîte',
    countryOfOrigin: 'Wilton, Connecticut, États-Unis (Fondé en 2003)',
    parentCompany: 'General Mills (Acquis en 2018 pour 8 milliards USD)',
    manufacturingFacilities: 'Usines en propre à Joplin (Missouri) et Richmond (Indiana)',
    recallRecord: {
      status: 'PAST_RECALLS',
      label: 'Rappels Historiques Enregistrés par la FDA',
      details: 'Les rappels historiques de la FDA comprennent un excès de vitamine D (2010), des problèmes d’humidité/moisissure (2010), la présence involontaire de propylène glycol dans des boîtes (2015) et le retrait volontaire d’os à mâcher pour risque de salmonelle (2015). La marque a également été citée dans l’enquête 2018-2019 de la FDA sur la cardiomyopathie dilatée (CMD) liée aux croquettes sans céréales riches en légumineuses.',
      history: [
        '2010 : Rappel volontaire pour taux élevés de vitamine D sur certaines formules sèches.',
        '2010 : Écart d’humidité entraînant un risque potentiel de moisissure sur des lots ciblés.',
        '2015 : Rappel de classe II d’aliments humides en boîte suite à une présence involontaire de propylène glycol.',
        '2018-2019 : Marque répertoriée dans l’enquête de la FDA sur la cardiomyopathie dilatée et les régimes denses en légumineuses.',
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
      'De la vraie viande désossée (poulet, saumon ou bœuf) systématiquement en premier ingrédient.',
      'Les bouchées LifeSource Bits formées à froid protègent vitamines, minéraux et antioxydants de la chaleur d’extrusion.',
      'Formule garantie sans maïs, blé, soja, colorants ni arômes chimiques artificiels.',
      'Large gamme couvrant aussi bien le sans céréales Wilderness que la gamme douce Life Protection aux céréales saines.',
    ],
    cons: [
      'Taux élevé de glucides (42-48%) susceptible de favoriser la prise de poids chez les chiens sédentaires ou stérilisés.',
      'Les recettes sans céréales Wilderness utilisent une part importante de protéines de pois, amidon de pois et pomme de terre.',
      'L’historique des rappels FDA témoigne des défis inhérents à une production industrielle de masse.',
    ],
    overview:
      'Blue Buffalo est l’une des marques d’aliments pour animaux les plus influentes d’Amérique du Nord, fondée sur la priorité absolue accordée à la viande et la sensibilisation des propriétaires contre les sous-produits de volaille. Rachetée par General Mills en 2018, elle continue de concevoir des aliments riches en protéines à travers des gammes variées comme Wilderness, Life Protection Formula et Basics Limited Ingredient.',
    deepDive: [
      'Architecture Nutritionnelle & LifeSource Bits : Contrairement aux croquettes standard qui soumettent tous les ingrédients à une extrusion à très haute température (dépassant souvent 200°C), Blue Buffalo isole son complexe de vitamines et d’antioxydants dans des LifeSource Bits pressés à froid. Cette méthode préserve les vitamines thermosensibles (vitamine C, E et vitamines du groupe B) ainsi que les bioflavonoïdes actifs.',
      'Équilibre Glucides et Légumineuses : Bien que les recettes Wilderness affichent un taux de protéines robuste de 34 à 38 %, les analyses en laboratoire montrent que la teneur en glucides totaux oscille entre 42 % et 48 %. Dans les gammes sans céréales, la marque a recours aux pois cassés et à l’amidon de tapioca. Pour les chiens prédisposés à la pancréatite ou au diabète, une surveillance rigoureuse des portions reste indispensable.',
      'Hydratation & Prise en Charge Clinique : Les croquettes extrudées ne renferment que 8 à 10 % d’humidité, ce qui impose aux reins canins un stress hydrique insidieux en cas d’alimentation exclusive sur le long terme. Les vétérinaires préconisent d’ajouter un quart de tasse d’eau tiède, du bouillon d’os non salé ou 20 % d’aliments frais pour favoriser la filtration rénale.',
    ],
    ingredientPillars: [
      {
        title: '1. Protéine Animale Nommée',
        score: '9.0 / 10',
        explanation: 'Poulet, bœuf, canard ou saumon désossé toujours en premier ingrédient, complété par des farines de viande mono-espèce pour des acides aminés concentrés.',
      },
      {
        title: '2. Taux de Glucides',
        score: '7.5 / 10',
        explanation: 'La part d’amidon se situe entre 42 % et 48 %. Les gammes avec céréales privilégient le riz brun et l’avoine, tandis que le sans céréales emploie pois et pommes de terre.',
      },
      {
        title: '3. Procédé et Préservation Thermique',
        score: '8.8 / 10',
        explanation: 'Les LifeSource Bits formés à froid protègent efficacement les micronutriments clés contre la dégradation thermique lors de l’extrusion.',
      },
      {
        title: '4. Traçabilité & Contrôle Qualité',
        score: '7.8 / 10',
        explanation: 'Les usines modernes de la marque dans le Missouri et l’Indiana appliquent des protocoles d’analyse renforcés suite aux incidents du début des années 2010.',
      },
    ],
    keyProductLines: [
      {
        name: 'Wilderness High-Protein',
        type: 'Croquettes Sans Céréales Riches en Viande',
        description: 'Inspiré du régime ancestral du loup avec plus de 34 % de protéines, de la viande véritable et zéro céréale ni gluten.',
        targetDogs: 'Chiens adultes actifs, races de travail et chiens ayant besoin d’un soutien musculaire soutenu.',
      },
      {
        name: 'Life Protection Formula',
        type: 'Croquettes aux Céréales Complètes',
        description: 'Aliment d’entretien équilibré associant riz brun, orge et avoine à de la viande désossée de qualité.',
        targetDogs: 'Chiens de compagnie au mode de vie classique et à la digestion saine.',
      },
      {
        name: 'Basics Limited Ingredient Diet (LID)',
        type: 'Régime Hipoallergénique Mono-Protéine',
        description: 'Une seule source de protéine animale novatrice (dinde, canard ou saumon) associée à des glucides doux, sans œufs ni produits laitiers.',
        targetDogs: 'Chiens souffrant d’intolérances alimentaires, de démangeaisons ou de sensibilité digestive.',
      },
    ],
    veterinaryVerdict:
      'Blue Buffalo constitue une croquette commerciale nettement supérieure aux produits de supermarché classiques. Même si sa teneur en glucides dépasse l’optimum biologique strict, son premier ingrédient carné et ses LifeSource Bits protecteurs en font une référence commerciale solide.',
    feedingRecommendation:
      'Nous conseillons d’alterner la source de protéine tous les 3 à 4 mois et de réhydrater chaque gamelle avec un peu d’eau tiède ou de bouillon d’os. Pour les chiens de plus de 7 ans, l’ajout de 15 à 20 % d’aliments frais de qualité consommation humaine renforce significativement la vitalité métabolique.',
    affiliateProductKeys: [
      'blue-buffalo-wilderness-chicken-24lb',
      'blue-buffalo-wilderness-salmon-24lb',
      'blue-buffalo-wilderness-chicken-4lb',
    ],
  },
  'rachael-ray-nutrish': {
    slug: 'rachael-ray-nutrish',
    name: 'Rachael Ray Nutrish',
    grade: 'Note : C+ / B-',
    score: '7.2 / 10',
    badge: 'Recette Économique de Grande Distribution',
    category: 'Croquettes et Barquettes Humides Grand Public',
    countryOfOrigin: 'Meadville, Pennsylvanie, États-Unis (Lancé en 2008)',
    parentCompany: 'Post Holdings (Acquis auprès de J.M. Smucker en 2023)',
    manufacturingFacilities: 'Unités de production aux États-Unis (Pennsylvanie et Kansas)',
    recallRecord: {
      status: 'MONITORED',
      label: 'Peu de Rappels, Mentionnée par la FDA',
      details: 'Volume limité de rappels officiels. Retrait volontaire isolé en 2019 de pâtées pour excès de vitamine D. Citée dans le rapport d’investigation 2019 de la FDA sur la teneur en légumineuses dans les croquettes sans céréales d’entrée de gamme.',
      history: [
        '2019 : Retrait volontaire de lots de nourriture humide pour dosage élevé en vitamine D.',
        '2018-2019 : Mentionnée dans le rapport exploratoire de la FDA sur les cardiomyopathies dilatées canines.',
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
      'Tarif au kilo très avantageux, rendant une alimentation correcte accessible aux budgets serrés.',
      'Très facile à trouver en supermarché et grandes surfaces.',
      'Les gammes Peak et Dish intègrent davantage de viande véritable et de vrais morceaux de légumes séchés.',
      'Une partie des bénéfices est reversée à la fondation Rachael\'s Rescue pour les animaux abandonnés.',
    ],
    cons: [
      'Les formules d’entrée de gamme dépendent largement du gluten de maïs, du maïs moulu et des pois.',
      'Faible concentration en acides gras oméga-3 à longue chaîne (EPA/DHA), exigeant une supplémentation.',
      'Teneur élevée en glucides (jusqu’à 52%), propice à la prise de poids chez les chiens peu actifs.',
    ],
    overview:
      'Créée en 2008 en collaboration avec la cheffe Rachael Ray, Nutrish s’est donné pour mission d’apporter de meilleurs ingrédients dans les rayons des supermarchés. Désormais gérée par Post Holdings, la marque propose aussi bien des recettes très économiques que des gammes supérieures comme Nutrish Peak et Nutrish Dish.',
    deepDive: [
      'Différences Notables Entre les Gammes : Il est capital de faire la distinction entre les recettes standard et la gamme "Peak". Les croquettes classiques indiquent bien de la viande en premier, mais enchaînent vite avec du gluten de maïs et des pois cassés. À l’inverse, la gamme Peak supprime le maïs, le blé et le soja pour atteindre 30 % de protéines de bonne facture.',
      'Qualité des Graisses et Oméga-3 : La graisse utilisée est principalement du gras de poulet stabilisé par des tocophérols naturels. En revanche, les oméga-3 d’origine marine (EPA et DHA) y sont modestes. Les chiens nourris exclusivement avec la formule standard gagnent grandement à recevoir de l’huile de saumon sauvage en complément.',
      'Compromis Économique vs Exigences Nutritionnelles : Nutrish remplit un rôle utile en offrant une alternative décente aux marques de distributeur de bas étage sans faire exploser le budget familial. Les maîtres doivent toutefois vérifier que les recettes choisies ne masquent pas trop de protéines végétales par fractionnement de légumineuses.',
    ],
    ingredientPillars: [
      {
        title: '1. Protéine Animale Nommée',
        score: '7.5 / 10',
        explanation: 'De la vraie viande en tête de liste, mais les recettes basiques augmentent la protéine brute totale grâce au gluten de maïs.',
      },
      {
        title: '2. Taux de Glucides',
        score: '6.8 / 10',
        explanation: 'Les glucides sont élevés (46-52%), entraînant une charge glycémique importante qui impose un dosage rigoureux des rations.',
      },
      {
        title: '3. Additifs & Arômes',
        score: '7.6 / 10',
        explanation: 'Conservation assurée par des tocophérols naturels sans colorants artificiels, mais recourt à des extraits d’arômes naturels.',
      },
      {
        title: '4. Traçabilité & Fabrication',
        score: '7.2 / 10',
        explanation: 'Élaboré dans des usines américaines avec les contrôles standards de l’industrie et un historique d’incidents limité.',
      },
    ],
    keyProductLines: [
      {
        name: 'Nutrish Peak High Protein',
        type: 'Formule Sans Céréales Haute en Protéines',
        description: 'Croquettes et barquettes avec 30 % de protéines, de la viande désossée et aucun maïs, blé ou soja.',
        targetDogs: 'Chiens ayant besoin d’un meilleur ratio protéines/glucides à un tarif abordable.',
      },
      {
        name: 'Nutrish Dish Whole Ingredients',
        type: 'Croquettes aux Morceaux de Légumes Entiers',
        description: 'Mélange de croquettes mijotées et de morceaux visibles de carottes, de pois et de pommes.',
        targetDogs: 'Chiens difficiles qui apprécient la diversité des textures dans leur écuelle.',
      },
      {
        name: 'Nutrish Real Beef & Brown Rice',
        type: 'Croquettes Économiques d’Entretien',
        description: 'Recette classique associant bœuf d’élevage et riz brun digeste pour le quotidien.',
        targetDogs: 'Chiens de famille sans problème digestif particulier et foyers soucieux du coût.',
      },
    ],
    veterinaryVerdict:
      'Nutrish est une option d’entrée de gamme acceptable à condition de privilégier les lignes "Peak" ou "Dish". Évitez les formules de base chargées en gluten de maïs et pensez toujours à hydrater la gamelle et à compléter en acides gras oméga-3.',
    feedingRecommendation:
      'Si vous utilisez les croquettes standard de Nutrish, complétez quotidiennement par 1 cuillère à café d’huile de saumon sauvage pour combler le manque d’EPA/DHA, et pesez soigneusement les rations pour prévenir l’embonpoint.',
    affiliateProductKeys: [
      'nutrish-peak-variety-pack-wet',
      'nutrish-beef-pea-brown-rice-28lb',
    ],
  },
  'pure-balance': {
    slug: 'pure-balance',
    name: 'Pure Balance',
    grade: 'Note : B (Meilleur Choix Économique)',
    score: '8.1 / 10',
    badge: 'Meilleur Choix Petit Budget de Supermarché',
    category: 'Aliment Sec et Humide Sous Marque Distributeur Économique',
    countryOfOrigin: 'États-Unis (Marque exclusive Walmart, lancée en 2012)',
    parentCompany: 'Walmart Inc.',
    manufacturingFacilities: 'Fabriqué sous contrat par des façonniers renommés (principalement Ainsworth Pet Nutrition) aux États-Unis',
    recallRecord: {
      status: 'CLEAN',
      label: 'Bilan Sanitaire Exceptionnellement Vierge',
      details: 'Pure Balance affiche un dossier de sécurité remarquable, sans aucun rappel majeur de classe I de la FDA sur ses gammes principales de croquettes depuis son lancement en 2012.',
      history: [
        'Aucun rappel de classe I pour toxines ou pathogènes sur ses recettes phares d’aliments secs.',
        'Normes de contrôle sanitaire nettement supérieures aux croquettes de supermarché traditionnelles.',
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
      'Rapport qualité-prix remarquable, offrant des recettes avec viande en premier ingrédient à prix de grande surface.',
      '100 % sans maïs, blé, soja, farines de sous-produits de volaille ni colorants chimiques.',
      'Protéine animale véritable (saumon, agneau ou poulet) en tête de liste sur chaque recette.',
      'Historique de sécurité sans tache face aux marques historiques de supermarché.',
    ],
    cons: [
      'Marque de distributeur sous-traitée à des façonniers tiers, avec de possibles changements industriels.',
      'Taux de glucides modéré à élevé (46-50%) issu de pois séchés, pommes de terre et riz brun.',
      'Peu d’études cliniques d’alimentation publiées comparé aux marques vétérinaires sur prescription.',
    ],
    overview:
      'Pure Balance a été lancée par Walmart en 2012 pour démocratiser la nutrition canine de qualité. En bannissant le maïs, le blé, le soja et les colorants artificiels, l’enseigne a proposé une véritable alternative aux marques des boutiques spécialisées pour un coût au kilo environ 40 % inférieur.',
    deepDive: [
      'Sous-Traitance Industrielle et Assurance Qualité : En tant que marque exclusive, la production est confiée à des acteurs industriels réputés (notamment Ainsworth Pet Nutrition / Post Holdings). Malgré son positionnement prix attractif, la marque suit scrupuleusement les recommandations de l’AAFCO et maintient une rigueur sanitaire exemplaire depuis plus de dix ans.',
      'Profil d’Ingrédients vs Boutiques Spécialisées : Une comparaison directe entre Pure Balance Saumon & Pois sans céréales et des marques haut de gamme révèle une composition très proche : du vrai saumon désossé en tête, suivi de farine de saumon et de pois chiches. Une excellente opportunité pour les propriétaires cherchant des ingrédients sains sans payer le surcoût de prestige.',
      'Analyse Clinique des Glucides : Comme la quasi-totalité des croquettes à tarif accessible, la part de glucides se situe entre 46 % et 50 %. Pour un chien jeune et actif, cela représente une source d’énergie saine ; pour un animal sédentaire ou âgé, il est impératif de doser les portions avec une balance de cuisine.',
    ],
    ingredientPillars: [
      {
        title: '1. Protéine Animale Nommée',
        score: '8.4 / 10',
        explanation: 'De la vraie viande (saumon, agneau, poulet) en premier ingrédient, renforcée par des farines carnées identifiées et aucun sous-produit anonyme.',
      },
      {
        title: '2. Additifs & Ingrédients de Remplissage',
        score: '8.8 / 10',
        explanation: 'Zéro maïs, blé, soja ni colorants synthétiques (aucun Rouge 40 ou Jaune 5) ni conservateurs chimiques comme le BHA/BHT.',
      },
      {
        title: '3. Accessibilité Budgétaire',
        score: '9.8 / 10',
        explanation: 'L’un des meilleurs ratios coût/qualité nutritionnelle disponibles dans la grande distribution moderne.',
      },
      {
        title: '4. Transparence de la Chaîne',
        score: '7.0 / 10',
        explanation: 'En tant que marque de distributeur, la traçabilité jusqu’à la ferme d’origine est moins documentée que chez les marques éthiques indépendantes.',
      },
    ],
    keyProductLines: [
      {
        name: 'Pure Balance Grain-Free Salmon & Pea',
        type: 'Recette au Poisson Hypoallergénique',
        description: 'Formule centrée sur le saumon spécialement pensée pour les chiens intolérants à la volaille ou aux céréales.',
        targetDogs: 'Chiens sujets aux démangeaisons, aux otites allergiques ou au poil terne.',
      },
      {
        name: 'Pure Balance Chicken & Brown Rice',
        type: 'Formule aux Céréales Saines',
        description: 'Recette équilibrée classique à base de poulet véritable et de riz brun très digeste.',
        targetDogs: 'Chiens de compagnie en bonne santé avec un système digestif stable.',
      },
      {
        name: 'Pure Balance Wild & Free Superfood Blend',
        type: 'Croquettes Riches en Protéines & Super-Aliments',
        description: 'Recette enrichie en carottes, myrtilles et canneberges pour un soutien antioxydant renforcé.',
        targetDogs: 'Races actives nécessitant une densité énergétique et antioxydante supérieure.',
      },
    ],
    veterinaryVerdict:
      'Pure Balance est indiscutablement l’une des croquettes économiques les plus recommandables. Elle offre la formule propre et carnée des marques spécialisées au prix des marques de distributeur, appuyée par une absence totale de rappels.',
    feedingRecommendation:
      'Pour maximiser les bienfaits sans gonfler la facture, associez Pure Balance à des compléments frais simples : deux cuillères à soupe de purée de courge nature, un œuf poché deux fois par semaine ou un filet de bouillon d’os maison.',
    affiliateProductKeys: [],
  },
  'ollie': {
    slug: 'ollie',
    name: 'Ollie Nourriture Fraîche pour Chien',
    grade: 'Note : A (Standard d’Or)',
    score: '9.6 / 10',
    badge: '100% Qualité Consommation Humaine et Standard d’Or Frais',
    category: 'Aliment Frais pour Chien Cuit Doucement de Qualité Humaine',
    countryOfOrigin: 'New York, NY, États-Unis (Fondé en 2016)',
    parentCompany: 'Ollie Pets Inc.',
    manufacturingFacilities: 'Cuisines commerciales agréées par l’USDA en Pennsylvanie et dans le New Jersey',
    recallRecord: {
      status: 'CLEAN',
      label: 'Historique Parfait Sans Aucun Rappel',
      details: 'Ollie affiche un bilan de sécurité irréprochable avec zéro rappel depuis sa fondation en 2016. Les repas étant préparés dans des cuisines d’alimentation humaine agréées par l’USDA sous strict contrôle de la FDA, la sécurité sanitaire y est sans commune mesure avec les usines d’aliments pour animaux.',
      history: [
        'Zéro rappel ni avertissement de la FDA depuis la création de la marque en 2016.',
        'Cuisson à température interne précise garantissant la destruction des germes tout en préservant les nutriments.',
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
      'Viandes et légumes 100 % de qualité consommation humaine agréés USDA, parfaitement reconnaissables dans chaque sachet.',
      'Cuisson douce à basse température pour éliminer les pathogènes sans dégrader les enzymes ni les vitamines.',
      'Portions caloriques quotidiennes personnalisées par des vétérinaires nutritionnistes selon le profil exact de votre chien.',
      'L’humidité biologique naturelle (72%) préserve les reins, la vessie et la vitalité métabolique.',
      'Dossier sanitaire immaculé avec zéro rappel depuis le lancement.',
    ],
    cons: [
      'Coût mensuel élevé (environ 180 à 350 $/mois selon le poids et la dépense énergétique du chien).',
      'Nécessite de la place au congélateur et une organisation pour décongeler au réfrigérateur.',
      'Modèle sur abonnement avec livraison directe, sans disponibilité immédiate en magasin.',
    ],
    overview:
      'Fondée en 2016, Ollie s’est donné pour mission d’accroître la longévité canine en remplaçant les croquettes ultra-transformées par de la vraie nourriture de qualité humaine. Élaborées par des vétérinaires certifiés en nutrition (ACVN), les recettes sont cuisinées doucement dans des installations inspectées par l’USDA et conditionnées en sachets personnalisés selon le métabolisme de chaque animal.',
    deepDive: [
      'Science de la Cuisson Douce vs Extrusion Industrielle : Les croquettes subissent des températures extrêmes (150°C à 200°C) et des forces de cisaillement brutales qui génèrent des produits de glycation avancée (AGEs) et dénaturent les protéines. À l’inverse, Ollie cuit ses ingrédients à feu doux. Les essais cliniques confirment une digestibilité des protéines jusqu’à 40 % supérieure et une assimilation nutritionnelle incomparablement meilleure.',
      'Préservation Rénale et Vésicale par l’Hydratation Naturelle : L’organisme du chien a évolué pour puiser plus de 70 % de son hydratation dans ses proies. Ne consommer que des croquettes sèches (8-10% d’eau) place le chien en déshydratation chronique discrète, concentrant l’urine et fatiguant les reins. Ollie fournit 72 % d’eau naturelle, optimisant la filtration rénale et limitant les calculs urinaires.',
      'Précision des Portions et Prévention de l’Obésité : L’obésité est la première cause évitable de mortalité précoce chez le chien de compagnie. Ollie élimine le hasard en calibrant des portions exactes calquées sur le besoin énergétique au repos (BER) et d’entretien (BEE), maintenant une condition corporelle idéale (note de 4 à 5 sur 9).',
    ],
    ingredientPillars: [
      {
        title: '1. Viandes 100% Qualité Humaine',
        score: '9.9 / 10',
        explanation: 'Morceaux entiers de bœuf, poulet, dinde et agneau certifiés USDA. Aucun sous-produit animal ni graisse résiduelle.',
      },
      {
        title: '2. Biodisponibilité des Nutriments',
        score: '9.8 / 10',
        explanation: 'Légumes entiers (patates douces, carottes, épinards, myrtilles) fournissant fibres, bioflavonoïdes et antioxydants naturels.',
      },
      {
        title: '3. Microbiote & Digestibilité',
        score: '9.7 / 10',
        explanation: 'Des études cliniques démontrent une diversité accrue des bactéries bénéfiques de l’intestin, des selles réduites et une excellente tolérance.',
      },
      {
        title: '4. Normes Sanitaires & Fabrication',
        score: '9.9 / 10',
        explanation: 'Préparé dans des cuisines d’alimentation humaine contrôlées par l’USDA, affichant un bilan de zéro incident.',
      },
    ],
    keyProductLines: [
      {
        name: 'Bœuf Frais aux Patates Douces',
        type: 'Recette Musculaire Riche en Protéines',
        description: 'Bœuf maigre USDA, foie de bœuf, patates douces, petits pois et myrtilles cuits doucement pour préserver les micronutriments.',
        targetDogs: 'Chiens énergiques, chiots en croissance et animaux ayant besoin d’une forte appétence carnée.',
      },
      {
        name: 'Poulet Frais aux Carottes',
        type: 'Recette Tendre et Très Digeste',
        description: 'Morceaux de poulet, cœur et foie de poulet, carottes et riz. Très facile à digérer et doux pour l’estomac.',
        targetDogs: 'Chiens à l’estomac délicat ou intolérants aux régimes riches en matières grasses.',
      },
      {
        name: 'Dinde Fraîche aux Myrtilles',
        type: 'Recette Volaille Hypoallergénique',
        description: 'Dinde nutritive, foie de dinde, chou kale, carottes et myrtilles gorgées d’antioxydants.',
        targetDogs: 'Chiens âgés, animaux sujets aux allergies et chiens ayant besoin de bioflavonoïdes articulaires.',
      },
    ],
    veterinaryVerdict:
      'Ollie constitue le standard d’or de la nutrition canine contemporaine. Les bienfaits cliniques d’un aliment frais de qualité humaine comparé aux croquettes industrielles en termes de digestion, de qualité du pelage et de préservation des organes sont incontestables.',
    feedingRecommendation:
      'Si un abonnement 100 % frais dépasse votre budget, nous recommandons la formule mixte à 50/50 : conservez une base de bonnes croquettes et ajoutez 50 % d’Ollie en garniture. Même 25 % d’aliments frais atténuent fortement l’inflammation cellulaire et régénèrent le microbiote.',
    affiliateProductKeys: [
      'ollie-chicken-apple-jerky-treats',
    ],
  },
  'open-farm': {
    slug: 'open-farm',
    name: 'Open Farm',
    grade: 'Note : A-',
    score: '9.2 / 10',
    badge: 'Pionnier du Sourcing Éthique et Certifié Humane',
    category: 'Croquettes Ultra-Premium Traçables, RawMix et Aliment Humide',
    countryOfOrigin: 'Toronto, Ontario, Canada (Fondé en 2014)',
    parentCompany: 'Open Farm Inc.',
    manufacturingFacilities: 'Usines familiales certifiées SQF aux États-Unis et au Canada',
    recallRecord: {
      status: 'CLEAN',
      label: 'Historique Impeccable avec Zéro Rappel',
      details: 'Open Farm maintient une fiche de sécurité sans faute avec zéro rappel depuis sa création en 2014. La marque applique une traçabilité rigoureuse au numéro de lot, des tests d’analyse de pathogènes sur chaque cycle de production et des audits en libre consultation.',
      history: [
        'Zéro rappel ni avertissement de la FDA depuis le lancement en 2014.',
        'Outil en ligne permettant de remonter chaque ingrédient jusqu’à la ferme certifiée d’origine.',
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
      'Traçabilité totale des ingrédients : entrez le numéro de lot de votre sac sur leur site pour découvrir l’élevage d’origine.',
      'Viandes 100 % Certified Humane issues d’animaux élevés en plein air et poissons sauvages durables agréés Ocean Wise.',
      'La gamme innovante RawMix enrobe les croquettes de bouillon d’os et d’abats crus lyophilisés pour une appétence exceptionnelle.',
      'Zéro farine de sous-produits de volaille, rehausseurs chimiques ou fractionnement trompeur de légumineuses.',
      'Propose aussi bien des céréales anciennes douces (avoine, millet, quinoa) que des formules sans céréales.',
    ],
    cons: [
      'Tarif haut de gamme sensiblement plus élevé que les croquettes habituelles du commerce.',
      'Distribué principalement dans les animaleries spécialisées indépendantes ou en commande directe sur Internet.',
      'Sa haute densité en nutriments exige un dosage au gramme près pour éviter toute suralimentation accidentelle.',
    ],
    overview:
      'Open Farm a vu le jour en 2014 avec un engagement éthique inédit : une transparence totale des ingrédients et un respect scrupuleux du bien-être animal. Première marque nord-américaine partenaire de Certified Humane et Ocean Wise, elle permet à chaque propriétaire de tracer chaque ingrédient de l’écuelle directement jusqu’à l’élevage ou la pêcherie d’origine.',
    deepDive: [
      'Traçabilité Radicale & Normes d’Élevage Éthique : Alors que la plupart des industriels gardent le secret sur l’origine de leurs matières premières, Open Farm imprime sur chaque paquet un code révélant la provenance exacte de chaque composant. Ses viandes proviennent d’exploitations familiales garantissant des animaux élevés au pâturage et sans antibiotiques.',
      'Technologie RawMix & Abats Crus Riches en Micronutriments : La formule RawMix combine des croquettes riches en protéines à des morceaux crus lyophilisés et un enrobage au bouillon d’os et aux abats (foie, cœur, rognons). Cette infusion naturelle apporte des vitamines hautement biodisponibles (vitamine A, CoQ10, fer) sans aucun spray aromatique artificiel.',
      'Céréales Anciennes vs Formules Sans Céréales : Plutôt que de fractionner massivement les légumineuses pour gonfler artificiellement le taux de protéines, Open Farm propose des recettes transparentes incorporant des céréales ancestrales (avoine concassée, sorgho, quinoa, millet). À faible indice glycémique, elles délivrent une énergie régulière et nourrissent le microbiote avec des fibres prébiotiques.',
    ],
    ingredientPillars: [
      {
        title: '1. Bien-Être Animal Éthique',
        score: '9.9 / 10',
        explanation: 'Bœuf 100 % Certified Humane élevé au pré, porc et volailles élevés en liberté, poissons sauvages durables Ocean Wise.',
      },
      {
        title: '2. Traçabilité Intégrale de la Filière',
        score: '10 / 10',
        explanation: 'Chaque ingrédient est traçable à 100 % jusqu’à son exploitation de provenance via la recherche en ligne du lot.',
      },
      {
        title: '3. Infusion Crue & Bouillon d’Os',
        score: '9.4 / 10',
        explanation: 'Croquettes enrobées de bouillon d’os lyophilisé et d’abats pour des micronutriments biodisponibles et un arôme sans pareil.',
      },
      {
        title: '4. Qualité de Transformation',
        score: '9.1 / 10',
        explanation: 'Fabriqué dans des installations certifiées SQF avec analyses indépendantes systématiques sur chaque lot.',
      },
    ],
    keyProductLines: [
      {
        name: 'RawMix Grain-Free Front Range Recipe',
        type: 'Croquettes Enrobées de Cru Lyophilisé',
        description: 'Bœuf de pâturage, agneau et porc enrobés de bouillon d’os lyophilisé avec morceaux de viande crue.',
        targetDogs: 'Chiens actifs, digestions sensibles et animaux difficiles qui boudent les croquettes ordinaires.',
      },
      {
        name: 'RawMix Ancient Grains Open Prairie Recipe',
        type: 'Croquettes aux Céréales Ancestrales Saines',
        description: 'Poulet et dinde fermiers associés à des céréales anciennes sans OGM (avoine, millet, quinoa) et bouillon d’os.',
        targetDogs: 'Chiens s’épanouissant avec des céréales douces et un apport énergétique métabolique stable.',
      },
      {
        name: 'Wild Ocean Catch Recipe',
        type: 'Formule Mono-Poisson Sauvage',
        description: 'Saumon, corégone et hareng sauvages certifiés Ocean Wise très riches en oméga-3 anti-inflammatoires (EPA/DHA).',
        targetDogs: 'Chiens sujets aux dermatites atopiques, au pelage sec ou aux raideurs articulaires.',
      },
    ],
    veterinaryVerdict:
      'Open Farm incarne la référence en matière d’intégrité éthique et de clarté nutritionnelle dans le monde canin. Ses recettes RawMix allient la praticité de la croquette sèche aux vertus des viandes entières et du bouillon d’os lyophilisé.',
    feedingRecommendation:
      'Étant nettement plus concentré en calories et en nutriments que les croquettes habituelles, nous conseillons de peser chaque repas avec une balance de cuisine précise plutôt que de se fier à un verre doseur.',
    affiliateProductKeys: [
      'open-farm-rawmix-front-range-20lb',
      'open-farm-rawmix-open-prairie-20lb',
      'open-farm-rawmix-wild-ocean-20lb',
    ],
  },
};
