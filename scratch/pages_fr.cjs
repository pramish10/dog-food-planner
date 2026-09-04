const fr = {
  about: {
    missionBadge: 'NOTRE MISSION // NUTRITION CLINIQUE CANINE',
    whyTitle: 'Pourquoi DogFoodPlanner a été Créé',
    whyP1: 'Pendant des décennies, l’industrie des aliments pour animaux a fonctionné comme une boîte noire. Les croquettes industrielles extrudées à plus de 200°C détruisent les vitamines naturelles, oxydent les acides gras oméga essentiels et alourdissent les sacs avec jusqu’à 60% d’amidons hautement glycémiques.',
    whyP2: 'En parallèle, les abonnements de ration ménagère facturent plus de 300€ par mois pour de la viande maigre et des légumes basiques. DogFoodPlanner comble ce fossé. Nous mettons à disposition gratuitement les algorithmes mathématiques exacts des nutritionnistes vétérinaires afin que chaque maître puisse préparer à domicile des repas frais, des rations BARF ou des garnitures riches à une fraction du coût.',
    methodTitle: 'Notre Méthodologie Nutritionnelle',
    pillars: [
      {
        tag: '01 // FORMULES NRC',
        title: 'Calcul Métabolique au Repos (RER)',
        desc: 'Détermine le Besoin Énergétique au Repos (RER) exact fondé sur la masse corporelle exponentielle (70 × (kg)^0.75) au lieu d’estimations approximatives par tranche de poids.'
      },
      {
        tag: '02 // STANDARDS AAFCO / FEDIAF',
        title: 'Micronutriments Biodisponibles',
        desc: 'Chaque formulation équilibre scrupuleusement le ratio calcium/phosphore (1.2:1 à 1.4:1), les acides gras EPA/DHA et les apports indispensables en taurine.'
      },
      {
        tag: '03 // ZÉRO ABONNEMENT PAYANT',
        title: 'Ouvert et Indépendant',
        desc: 'Nous refusons tout parrainage commercial rémunéré et ne dissimulons aucun grammage derrière un abonnement bancaire obligatoire.'
      }
    ],
    ctaTitle: 'Prêt à Calculer les Besoins Nutritionnels de Votre Chien ?',
    ctaDesc: 'Utilisez notre calculateur interactif, découvrez nos guides sur les allergies et consultez nos analyses vétérinaires impartiales.',
    ctaBtn: 'Lancer le Calculateur Nutritionnel Gratuit →'
  },
  contact: {
    eyebrow: 'SUPPORT & CONTACT // DEMANDES DIRECTES',
    cards: [
      { icon: '📧', title: 'Questions Générales', desc: 'Commentaires et demandes générales :', email: 'hello@dogfoodplanner.com' },
      { icon: '🐾', title: 'Recherche Nutritionnelle', desc: 'Formules et questions vétérinaires :', email: 'hello@dogfoodplanner.com' },
      { icon: '🛡️', title: 'Support Technique', desc: 'Signalement de bugs et calculs :', email: 'hello@dogfoodplanner.com' }
    ],
    formTitle: 'Envoyez un Message à Notre Équipe Vétérinaire',
    formDesc: 'Une question sur nos formules calorigènes NRC ou besoin d’aide pour une ration BARF ? Nous répondons sous 24 heures ouvrées.',
    nameLabel: 'Votre Nom',
    namePlaceholder: 'ex. Thomas Martin',
    emailLabel: 'Votre Adresse Email',
    emailPlaceholder: 'thomas@example.com',
    subjectLabel: 'Objet de la Demande',
    subjectOptions: ['Question Générale / Avis', 'Nutrition Canine & Recettes', 'Formule du Calculateur Vétérinaire', 'Signalement de Bug'],
    messageLabel: 'Votre Message',
    messagePlaceholder: 'Parlez-nous de votre chien (race, poids, âge) et de la manière dont nous pouvons vous aider...',
    submitBtn: 'Envoyer le Message →',
    notice: 'Urgence Vétérinaire : Si votre animal présente des symptômes aigus d’intoxication ou de détresse sévère, contactez sans attendre une clinique vétérinaire d’urgence.',
    faqTitle: 'Vous cherchez une réponse rapide ?',
    faqDesc: 'Consultez notre base de connaissances de plus de 40 réponses vétérinaires sur le manque d’appétit, le BARF, la nourriture pour chat et les marques de croquettes.',
    faqBtn: 'Consulter Toute la FAQ →'
  },
  privacy: {
    eyebrow: 'MENTIONS LÉGALES // POLITIQUE DE CONFIDENTIALITÉ',
    lastUpdated: 'Mise à jour : Janvier 2026',
    intro: 'Sur DogFoodPlanner.com, nous respectons votre vie privée. Cette politique détaille comment vos données sont traitées et protégées.',
    sections: [
      {
        title: '1. Informations Que Nous Ne Collectons Pas',
        content: 'Les données de santé de votre chien vous appartiennent. L’utilisation de notre calculateur ne requiert aucune inscription, mot de passe ou carte bancaire. Les profils canins, poids et choix d’aliments sont traités localement sur votre navigateur et ne sont jamais enregistrés sur des serveurs externes.'
      },
      {
        title: '2. Données Techniques Anonymes',
        content: 'Comme la plupart des plateformes web modernes, nos serveurs CDN collectent des données techniques anonymisées courantes (adresse IP masquée, navigateur, page de provenance et horodatage) pour sécuriser l’infrastructure et prévenir les attaques.'
      },
      {
        title: '3. Cookies et Stockage Local (localStorage)',
        content: 'Nous utilisons uniquement le stockage local de votre navigateur pour mémoriser votre langue préférée et conserver votre plan de repas actif afin d’éviter de recalculer lors d’un rafraîchissement.'
      },
      {
        title: '4. Liens Externes et Sources Scientifiques',
        content: 'Notre site renvoie vers des études scientifiques publiées, les directives AAFCO/FEDIAF et les banques de données du NRC. Nous ne sommes pas responsables des pratiques de confidentialité de ces tiers.'
      },
      {
        title: '5. Protection des Mineurs',
        content: 'Nos outils sont destinés aux adultes propriétaires d’animaux de compagnie. Nous ne collectons pas sciemment de données relatives aux mineurs de moins de 13 ans.'
      },
      {
        title: '6. Mises à Jour et Contact',
        content: 'Cette politique peut être mise à jour pour refléter l’évolution du service. Pour toute question, écrivez à privacy@dogfoodplanner.com.'
      }
    ]
  },
  terms: {
    eyebrow: 'MENTIONS LÉGALES // CONDITIONS GÉNÉRALES D’UTILISATION',
    lastUpdated: 'Mise à jour : Janvier 2026',
    intro: 'Veuillez lire attentivement ces conditions générales avant d’utiliser DogFoodPlanner.com. L’accès au site vaut acceptation pleine et entière de celles-ci.',
    sections: [
      {
        title: '1. Acceptation des Conditions',
        content: 'En naviguant sur DogFoodPlanner.com, vous reconnaissez avoir pris connaissance et accepté sans réserve les présentes conditions d’utilisation. Si vous êtes en désaccord, veuillez cesser toute utilisation.'
      },
      {
        title: '2. Avertissement Vétérinaire et Médical',
        content: 'Les informations, calculateurs et recettes proposés sur DogFoodPlanner.com sont fournis à des fins purement éducatives et informatives sur la base des modèles NRC et FEDIAF. Ils NE constituent EN AUCUN CAS un avis médical vétérinaire, un diagnostic ou une prescription personnalisée. Consultez systématiquement un vétérinaire ou un spécialiste en nutrition animale (DACVN) avant tout changement alimentaire majeur.'
      },
      {
        title: '3. Utilisation des Calculateurs Interactifs',
        content: 'Les résultats caloriques (RER et MER) et les rations en grammes sont des points de départ théoriques. Le métabolisme varie selon la stérilisation, l’activité, l’environnement et la génétique. Il appartient au maître d’évaluer la note d’état corporel (BCS) et d’ajuster les portions.'
      },
      {
        title: '4. Sécurité des Rations Ménagères et Équilibre en Calcium',
        content: 'L’alimentation maison ou crue impose une couverture stricte de l’ensemble des micronutriments. Distribuer de la viande sans os sans complément calcique adapté entraîne en quelques mois une déminéralisation osseuse grave. L’utilisateur assume l’entière responsabilité de l’équilibre de ses préparations.'
      },
      {
        title: '5. Propriété Intellectuelle',
        content: 'L’ensemble des contenus, algorithmes, interfaces graphiques et textes présents sur DogFoodPlanner.com sont protégés par le droit d’auteur et demeurent la propriété exclusive de DogFoodPlanner.'
      },
      {
        title: '6. Limitation de Responsabilité',
        content: 'DogFoodPlanner.com et ses contributeurs ne sauraient être tenus responsables des dommages directs ou indirects consécutifs à l’utilisation ou à l’impossibilité d’utiliser les outils mis à disposition.'
      }
    ]
  },
  bestFood: {
    eyebrow: 'GUIDE CLINIQUE // CLASSEMENT ALIMENTATION CANINE 2026',
    rankingsTitle: 'Quels Sont les 5 Meilleurs Aliments pour Chien en 2026 ?',
    rankingsIntro: 'Les recherches sur la longévité canine confirment qu’une cuisson minimale et une hydratation biologique supérieure à 70% sont les deux facteurs les plus déterminants de la vitalité et de la santé rénale.',
    rankings: [
      {
        rank: '01',
        title: 'Ration Ménagère Fraîche Cuite à Basse Température',
        score: '98/100',
        pros: 'Viandes et légumes réels cuits doucement à 70°C. Préserve plus de 70% d’humidité naturelle, les enzymes actives et les vitamines intactes.',
        cons: 'Nécessite une conservation au congélateur ou réfrigérateur. Coût supérieur aux croquettes bas de gamme.'
      },
      {
        rank: '02',
        title: 'Alimentation Crue Ancestrale BARF 80-10-10',
        score: '95/100',
        pros: 'Équilibre biologique adapté aux carnivores : 80% muscle, 10% os charnu, 10% abats. Prévient le tartre et développe une masse musculaire sèche.',
        cons: 'Exige une hygiène rigoureuse et un équilibrage précis du calcium.'
      },
      {
        rank: '03',
        title: 'Nourriture Crue Lyophilisée & Déshydratée à l’Air',
        score: '91/100',
        pros: 'Offre la qualité nutritionnelle du cru avec la facilité de conservation à température ambiante.',
        cons: 'Doit impérativement être réhydratée à l’eau tiède ou au bouillon d’os avant distribution.'
      },
      {
        rank: '04',
        title: 'Croquettes Riches en Protéines Sans Céréales ou Grains Anciens',
        score: '78/100',
        pros: 'Pratiques, longue conservation et accessibles pour les foyers ayant de grands chiens.',
        cons: 'Extrudées à 200°C, seulement 8 à 10% d’humidité et 40 à 50% de glucides complexes.'
      },
      {
        rank: '05',
        title: 'Aliments Thérapeutiques Vétérinaires Spécialisés',
        score: '72/100',
        pros: 'Formulés pour les pathologies avérées (insuffisance rénale chronique, calculs de struvite, troubles hépatiques).',
        cons: 'Composés fréquemment de sous-produits végétaux et nécessitent une ordonnance.'
      }
    ],
    buyerGuideTitle: '4 Règles d’Or pour Choisir le Meilleur Aliment',
    buyerRules: [
      {
        title: '1. Protéine Animale Nommée en Premier Ingrédient',
        desc: 'Exigez « Dinde désossée », « Bœuf » ou « Saumon frais » plutôt que de vagues « farines de viandes ».'
      },
      {
        title: '2. Humidité Biologique Élevée (>70%)',
        desc: 'Les croquettes sèches provoquent une déshydratation chronique. Réhydratez toujours ou ajoutez des garnitures fraîches.'
      },
      {
        title: '3. Zéro Conservateur Chimique Synthétique',
        desc: 'Bannissez fermement le BHA, le BHT, l’éthoxyquine et les colorants artificiels.'
      },
      {
        title: '4. Teneur en Glucides Réduite (<25%)',
        desc: 'Le chien ne possède pas d’amylase salivaire. Trop d’amidon fatigue le pancréas et favorise l’obésité.'
      }
    ],
    ctaTitle: 'Calculez la Ration Exacte pour Votre Chien',
    ctaDesc: 'Que vous choisissiez la ration fraîche, le BARF ou des croquettes premium, obtenez les grammes et calories précis au quotidien.',
    ctaBtn: 'Calculer les Portions Maintenant →'
  },
  recipes: {
    eyebrow: 'RECETTES MAISON VÉTÉRINAIRES // NORMES NRC & AAFCO',
    heroTitle: 'Recettes Vétérinaires de Repas Maison pour Chien',
    heroSubtitle: 'Des guides détaillés pour préparer à la maison des rations ménagères cuites à basse température et des menus BARF 80-10-10 complets et équilibrés.',
    calciumWarningTitle: 'La Règle Absolue du Fait-Maison : L’Équilibre en Calcium',
    calciumWarningDesc: 'La viande musculaire est naturellement riche en phosphore et très pauvre en calcium (ratio 1:20). Nourrir un chien exclusivement de viande et de riz sans complément calcique provoque une décalcification osseuse sévère en quelques mois. Ajoutez toujours 1/2 cuillère à café rase de poudre de coquille d’œuf pure (environ 900 mg de calcium élémentaire) pour 450 g de viande désossée afin de respecter le ratio optimal Calcium/Phosphore de 1.2:1.',
    recipesList: [
      {
        tag: 'CUISSON DOUCE',
        title: 'Recette 1 : Dinde à Basse Température & Purée de Courge (Digestion Sensible)',
        desc: 'Idéale pour les chiens à l’estomac délicat, ayant des selles molles ou allergiques au poulet industriel.',
        ingredients: [
          'Haché de dinde maigre — 65% (env. 900 g)',
          'Cœurs de dinde ou de bœuf (Taurine naturelle) — 10% (env. 140 g)',
          'Purée de courge ou potiron pure (Fibres solubles) — 10% (env. 140 g)',
          'Épinards et courgettes vapeur mixés — 10% (env. 140 g)',
          'Huile de saumon sauvage d’Alaska (EPA/DHA) — 2% (1.5 c. à soupe)',
          'Poudre de coquille d’œuf (Calcium élémentaire) — 3% (1 c. à café rase)'
        ],
        prep: 'Faites revenir la dinde et les cœurs à feu doux jusqu’à cuisson complète mais tendre (70°C). Cuisez les légumes à la vapeur et mixez avec la courge. Mélangez l’ensemble et laissez refroidir totalement avant d’incorporer l’huile de saumon et le calcium. Congelez en portions journalières.'
      },
      {
        tag: 'BARF CRU',
        title: 'Recette 2 : Menu BARF Ancestral 80-10-10 Bœuf & Canard',
        desc: 'Régime cru biologiquement adapté pour chiens adultes sains dotés d’un suc gastrique acide performant.',
        ingredients: [
          'Viande musculaire de bœuf de pâturage — 70%',
          'Cœur de bœuf (Riche en L-Carnitine et CoQ10) — 10%',
          'Cou de canard cru ou carcasse — 10% (Os charnu comestible et calcium)',
          'Foie de bœuf (Vitamines A et groupe B) — 5%',
          'Rein ou rate de bœuf (Organe sécréteur essentiel) — 5%'
        ],
        prep: 'Coupez la viande et le cœur en morceaux adaptés. Pesez rigoureusement les abats sur balance électronique. Congelez impérativement les rations au moins 3 semaines à -20°C avant décongélation et distribution.'
      },
      {
        tag: 'TOPPER SUPERFOOD',
        title: 'Recette 3 : Topper Antioxydant 80/20 pour Enrichir les Croquettes',
        desc: 'Booster d’aliments frais conçu pour remplacer 20% des calories des croquettes habituelles.',
        ingredients: [
          'Œufs fermiers pochés mollets — 40%',
          'Pousses de brocolis vapeur et myrtilles sauvages — 30%',
          'Bouillon d’os de bœuf mijoté — 20%',
          'Graines de chanvre bio et poudre de kelp — 10%'
        ],
        prep: 'Pochez légèrement les œufs 4 minutes. Cuisez les légumes à la vapeur 3 minutes. Mixez avec le bouillon tiède et les myrtilles. Versez 2 à 4 cuillères à soupe quotidiennes sur la gamelle de croquettes.'
      }
    ],
    calciumGuideTitle: 'Sources Sécurisées de Calcium pour Repas Maison',
    calciumGuideItems: [
      {
        title: 'Poudre de Coquille d’Œuf',
        ratio: '1/2 c. à café pour 450 g de viande sans os',
        desc: '95% de carbonate de calcium pur. Facile à réaliser en lavant, séchant au four et broyant des coquilles d’œufs.'
      },
      {
        title: 'Os Charnus Crus Comestibles',
        ratio: '10% du poids total de la ration',
        desc: 'Cous de canard ou ailes de poulet crues. Ne jamais cuire les os, qui deviennent cassants et perforants.'
      },
      {
        title: 'Poudre d’Os Vétérinaire (Bone Meal)',
        ratio: 'Selon indications du fabricant',
        desc: 'Hydroxyapatite microcristalline apportant calcium et phosphore selon un ratio naturel et équilibré de 2:1.'
      }
    ]
  },
  toxic: {
    eyebrow: 'ALIMENTS TOXIQUES POUR CHIENS // RISQUES ET PROTOCOLES',
    dangerTitle: 'Les Aliments Domestiques les Plus Dangereux pour le Chien',
    dangerIntro: 'Plusieurs aliments du quotidien contiennent des molécules que le métabolisme canin ne peut éliminer, provoquant une défaillance organique fatale.',
    dangerList: [
      {
        name: 'Chocolat & Cacao',
        toxin: 'Théobromine et Caféine',
        symptoms: 'Vomissements, halètement intense, tachycardie, tremblements musculaires, convulsions, arrêt cardiaque.',
        risk: 'TRÈS ÉLEVÉ À MORTEL'
      },
      {
        name: 'Raisins Frais, Secs et de Corinthe',
        toxin: 'Acide Tartrique',
        symptoms: 'Léthargie, déshydratation, insuffisance rénale aiguë irréversible en 24 à 72 heures.',
        risk: 'EXTRÊMEMENT LÉTAL'
      },
      {
        name: 'Xylitol (Sucre de Bouleau / E967)',
        toxin: 'Édulcorant Synthétique',
        symptoms: 'Sécrétion massive d’insuline, hypoglycémie foudroyante, ataxie, nécrose hépatique aiguë en quelques heures.',
        risk: 'URGENCE VITALE ABSOLUE'
      },
      {
        name: 'Oignons, Ail, Poireaux & Échalotes',
        toxin: 'Disulfure de N-propyle',
        symptoms: 'Destruction des globules rouges, anémie hémolytique, gencives pâles, urines brunâtres, faiblesse.',
        risk: 'TOXICITÉ CUMULATIVE FORTE'
      },
      {
        name: 'Noix de Macadamia',
        toxin: 'Molécule neurotoxique inconnue',
        symptoms: 'Faiblesse du train arrière, fièvre ou hypothermie, vomissements, raideur musculaire douloureuse.',
        risk: 'MODÉRÉ À SÉVÈRE'
      },
      {
        name: 'Os Cuits de Toute Origine',
        toxin: 'Danger Physique d’Esquilles',
        symptoms: 'Perforation de l’estomac ou de l’intestin, hémorragie interne, péritonite, occlusion chirurgicale.',
        risk: 'URGENCE CHIRURGICALE'
      }
    ],
    emergencyTitle: 'Que Faire en Cas d’Intoxication Alimentaire ?',
    emergencySteps: [
      '1. Agissez Immédiatement : Notez précisément l’aliment ingéré, son emballage, la quantité approximative et l’heure.',
      '2. Ne Faites PAS Vomir sans Avis Vétérinaire : Les produits corrosifs ou les os cassants brûlent et lacèrent l’œsophage lors du reflux.',
      '3. Appelez d’Urgence un Vétérinaire : Contactez immédiatement votre clinique de garde ou le centre antipoison vétérinaire (CNITV / CAPAE).'
    ],
    safeTitle: 'Fruits et Légumes 100% Sains et Bénéfiques',
    safeIntro: 'Ces végétaux apportent des antioxydants naturels, des fibres prébiotiques et des vitamines indispensables à la gamelle de votre chien :',
    safeFoods: [
      { name: 'Myrtilles', benefit: 'Concentrées en anthocyanes et polyphénols protecteurs des cellules.' },
      { name: 'Purée de Courge / Potiron', benefit: 'Fibres solubles régulant le transit aussi bien en cas de diarrhée que de constipation.' },
      { name: 'Carottes', benefit: 'Friandise croquante hypocalorique riche en bêta-carotène favorisant l’hygiène dentaire.' },
      { name: 'Haricots Verts', benefit: 'Légume vert rassasiant idéal pour la gestion du poids des chiens en surpoids.' },
      { name: 'Pommes (Sans Pépins)', benefit: 'Source naturelle de vitamine C et de pectine bénéfique pour la flore intestinale.' }
    ]
  },
  brands: {
    eyebrow: 'AVIS MARQUES DE CROQUETTES & HISTORIQUE DES RAPPELS',
    heroTitle: 'Avis sur les Marques d’Aliments pour Chien et Rappels Sanitaires',
    heroSubtitle: 'Analyses objectives et avis vétérinaires sur la qualité des ingrédients, le respect des étiquettes et les historiques de retraits de lots.',
    brandsList: [
      {
        name: 'Blue Buffalo',
        grade: 'Note : B+',
        pros: 'Viande désossée en premier ingrédient ; sans maïs, blé ni soja ; bouchées LifeSource Bits riches en vitamines.',
        cons: 'Taux élevé de glucides (45-50%) ; rappels par le passé pour humidité excessive et excès de vitamine D.',
        verdict: 'Croquettes de niveau supérieur à la moyenne. Nous recommandons d’ajouter 20% d’aliments frais pour l’hydratation.'
      },
      {
        name: 'Rachael Ray Nutrish',
        grade: 'Note : C+ / B-',
        pros: 'Abordable et facile à trouver ; les gammes Peak et Dish intègrent davantage de viande véritable.',
        cons: 'Les formules d’entrée de gamme abusent de protéines de pois et de gluten de maïs ; citée dans une enquête de la FDA.',
        verdict: 'Option économique acceptable dans ses gammes supérieures, en inspectant bien l’absence de légumineuses scindées.'
      },
      {
        name: 'Pure Balance',
        grade: 'Note : B (Meilleur Rapport Qualité/Prix)',
        pros: 'Très bon rapport qualité-prix ; recettes riches en viande sans colorants artificiels ni céréales bas de gamme.',
        cons: 'Fabrication sous-traitée ; taux de glucides modéré.',
        verdict: 'L’une des options les plus honnêtes dans les rayons de supermarché.'
      },
      {
        name: 'Ollie Fresh Dog Food',
        grade: 'Note : A (Excellence)',
        pros: 'Ingrédients 100% de qualité humaine ; cuisson douce sous vide ; portions pré-calculées sur mesure.',
        cons: 'Abonnement onéreux (180€-350€/mois) ; nécessite de l’espace au congélateur.',
        verdict: 'La référence absolue pour la santé métabolique, l’éclat du pelage et la longévité digestive.'
      },
      {
        name: 'Open Farm',
        grade: 'Note : A-',
        pros: 'Transparence totale des approvisionnements ; viandes certifiées bien-être animal et poissons sauvages durables.',
        cons: 'Prix haut de gamme ; distribution limitée en magasins physiques.',
        verdict: 'Le meilleur choix pour une éthique irréprochable et l’absence totale de sous-produits de volaille.'
      }
    ],
    recallsTitle: 'Comprendre les Rappels de Lots (Recalls)',
    recallsDesc: 'Les alertes sanitaires vétérinaires se divisent en trois classes : Classe I (danger grave ou mortel, ex. Salmonelle, aflatoxines ou surdosage en Vitamine D), Classe II (troubles passagers) et Classe III (défaut d’étiquetage). Vérifiez toujours le numéro de lot inscrit sur le sac.',
    methodTitle: 'Nos 4 Critères d’Évaluation des Aliments',
    methodPillars: [
      { title: '1. Clarté des Protéines', desc: 'Viandes musculaires identifiées plutôt que farines animales anonymes.' },
      { title: '2. Taux de Glucides', desc: 'Maintenir les amidons sous 40% pour lutter contre l’obésité et le diabète.' },
      { title: '3. Traçabilité des Filières', desc: 'Élevages respectueux et absence d’OGM.' },
      { title: '4. Rigueur Sanitaire', desc: 'Contrôles microbiologiques en laboratoire indépendant et usines certifiées.' }
    ]
  },
  allergies: {
    eyebrow: 'DERMATOLOGIE CLINIQUE // ALLERGIES ALIMENTAIRES ET DIGESTION',
    heroTitle: 'Meilleure Alimentation pour Chien Allergique et Estomac Sensible',
    heroSubtitle: 'Guide dermatologique vétérinaire sur les intolérances, le choix des protéines nouvelles et le protocole d’éviction de 8 semaines.',
    allergensTitle: 'Les 5 Allergènes Alimentaires les Plus Courants chez le Chien',
    allergensIntro: 'Les allergies alimentaires canines sont des réactions immunitaires d’hypersensibilité à des protéines spécifiques. Par ordre de prévalence clinique :',
    allergensList: [
      { name: '1. Poulet Industriel (60% des cas)', desc: 'Omniprésent dans les croquettes de grande consommation, le poulet est l’allergène canin numéro un.' },
      { name: '2. Bœuf Commercial (30% des cas)', desc: 'Protéine rouge fréquente provoquant de fortes démangeaisons cutanées et des otites chroniques.' },
      { name: '3. Produits Laitiers et Fromages', desc: 'Les chiens adultes manquent d’enzymes lactases, causant diarrhées et flatulences douloureuses.' },
      { name: '4. Gluten de Blé et de Maïs', desc: 'Protéines végétales pro-inflammatoires fragilisant la muqueuse intestinale.' },
      { name: '5. Soja et Légumineuses', desc: 'Substituts protéiques industriels provoquant une fermentation intestinale anormale et du prurit.' }
    ],
    eliminationTitle: 'Le Protocole Vétérinaire d’Éviction sur 8 Semaines',
    eliminationSteps: [
      { step: 'Phase 1', title: 'Choisir une Seule Protéine Nouvelle', desc: 'Passez votre chien à une source de protéine qu’il n’a jamais consommée (Cerf, Lapin ou Kangourou) avec un légume digeste comme la courge.' },
      { step: 'Phase 2', title: 'Zéro Contamination (8 Semaines Strictes)', desc: 'Durant 8 semaines consécutives, donnez exclusivement cette ration. Interdiction absolue des friandises industrielles et des restes de table.' },
      { step: 'Phase 3', title: 'Test de Réintroduction Contrôlé', desc: 'Si les démangeaisons ont disparu, réintroduisez un ingrédient suspect pendant 7 jours. Si les rougeurs réapparaissent, l’allergie est confirmée.' }
    ],
    novelTitle: 'Protéines Nouvelles Recommandées par les Vétérinaires',
    novelProteins: [
      { name: 'Viande de Cerf / Chevreuil', desc: 'Viande rouge maigre et très digeste contre laquelle l’organisme canin n’a généralement pas d’anticorps.' },
      { name: 'Viande de Lapin', desc: 'Protéine hypoallergénique d’excellence possédant un remarquable profil en acides aminés.' },
      { name: 'Viande de Canard', desc: 'Alternative très appétente pour les chiens intolérants au poulet d’élevage.' },
      { name: 'Viande de Kangourou', desc: 'L’une des viandes sauvages les plus pures et pauvres en matières grasses.' }
    ]
  },
  calculator: {
    eyebrow: '100% GRATUIT // CALCULATEUR DE PORTIONS VÉTÉRINAIRE',
    noticeTitle: 'Avertissement :',
    noticeText: 'Fourni à titre indicatif et éducatif. Ne remplace pas une consultation ou un diagnostic vétérinaire.',
    heroTitle: 'Calculateur Vétérinaire de Ration et Calories pour Chien',
    heroSubtitle: 'Calculez le besoin énergétique précis de votre chien (RER et MER) et obtenez ses rations exactes en grammes selon son poids, âge, activité et note corporelle.'
  },
  breeds: {
    eyebrow: 'GUIDE NUTRITIONNEL PAR RACE // DIRECTIVES VÉTÉRINAIRES',
    targetWeight: 'Poids Idéal',
    dailyCalories: 'Calories par Jour',
    freshDaily: 'Ration Fraîche / Jour',
    kibbleDaily: 'Croquettes / Jour',
    cups: 'gobelets',
    reqsTitle: 'Besoins Nutritionnels pour le {name}',
    reqsIntro: 'En tant que chien de catégorie {category} avec un poids moyen de {w0} à {w1} lbs (env. {Math.round(w0*0.453)} à {Math.round(w1*0.453)} kg), le {name} exige une balance nutritionnelle spécifique :',
    predispositionsTitle: 'Prédispositions et Sensibilités à Surveiller :',
    feedingRoutineTitle: 'Recommandation de Distribution des Repas :',
    feedingRoutineDesc: 'Nourrissez votre {name} adulte deux fois par jour (50% le matin et 50% le soir). Laissez toujours de l’eau propre à volonté. Si vous donnez des croquettes, réhydratez-les avec un bouillon tiède pour préserver ses reins.',
    ctaTitle: 'Personnaliser la Ration Exacte pour Votre {name}',
    ctaSubtitle: 'Ajustez selon l’âge exact (chiot, adulte, senior), le poids réel, l’activité et la silhouette avec notre calculateur.',
    ctaBtn: 'Calculer pour mon {name} →',
    faqTitle: 'Questions Fréquentes sur l’Alimentation du {name}',
    faqSubtitle: 'Quantités recommandées, fréquence des repas et meilleurs choix d’ingrédients.'
  },
  comparisonTable: {
    eyebrow: 'COMPARAISON CLINIQUE // ALIMENTATION FRAÎCHE VS CROQUETTES',
    title: 'Pourquoi la Vraie Nourriture Dépasse les Croquettes',
    subtitle: 'Analyse comparative de la biodisponibilité, des températures de fabrication et des coûts réels.',
    scrollHint: '↔ Faites défiler le tableau horizontalement',
    colMetric: 'Critère Nutritionnel',
    colDfp: '✨ DogFoodPlanner Maison',
    colSubs: 'Abonnements Frais',
    colKibble: 'Croquettes Sèches',
    rows: [
      {
        metric: 'Mode de Cuisson',
        dfp: 'Vapeur Douce (70°C) ou Cru Actif',
        subs: 'Cuisson Industrielle Surgelée',
        kibble: 'Extrusion Très Haute Température (200°C)'
      },
      {
        metric: 'Glucides Nets',
        dfp: '< 3.5% (Légumes sélectionnés)',
        subs: '10% – 15%',
        kibble: '45% – 60% (Amidons de remplissage)'
      },
      {
        metric: 'Humidité Biologique',
        dfp: '70% – 75% (Hydratation rénale vitale)',
        subs: '70% – 75%',
        kibble: '8% – 10% (Déshydratation chronique)'
      },
      {
        metric: 'Transparence des Doses',
        dfp: '100% Grammes et pourcentages affichés',
        subs: 'Formule exclusive (grammages cachés)',
        kibble: 'Ingrédients scindés et farines animales'
      },
      {
        metric: 'Coût Moyen Mensuel (Chien 23 kg)',
        dfp: '75€ – 115€ (Cuisiné à la maison)',
        subs: '270€ – 370€ / mois',
        kibble: '55€ – 90€ / mois'
      }
    ]
  },
  faqPage: {
    badge: 'BASE DE CONNAISSANCES // 40+ RÉPONSES VÉTÉRINAIRES',
    exploreHubsTitle: 'Explorez Nos Guides Vétérinaires Spécialisés',
    exploreHubsSubtitle: 'Des dossiers approfondis pour les maîtres soucieux de la longévité et du bien-être de leur compagnon.',
    cardBestFood: 'Comparatif ration fraîche, BARF, croquettes riches en viande et digestion délicate.',
    cardCalc: 'Calculateur scientifique RER et MER pour obtenir les rations au gramme près.',
    cardRecipes: 'Recettes maison équilibrées et formules BARF 80-10-10 avec apport calcique maîtrisé.',
    cardAllergies: 'Choix des protéines hypoallergéniques, régimes d’éviction et microbiote.',
    cardToxic: 'Liste complète des aliments dangereux, fruits et légumes sains et additifs à fuir.',
    cardBrands: 'Avis indépendants sur Blue Buffalo, Nutrish, Pure Balance, Ollie et Open Farm.'
  },
  faqSingle: {
    reviewedBy: 'Vérifié par : Nutritionniste Vétérinaire Canin',
    updated: 'Mis à jour : 2026',
    directQuickAnswer: 'Réponse Directe Résumée',
    clinicalAnalysis: 'Analyse Clinique et Nutritionnelle Détaillée',
    topics: 'Thèmes associés :',
    ctaBadge: '🐾 Moteur Nutritionnel Canin Gratuit',
    ctaTitle: 'Calculez les Calories et Portions Journalières pour Votre Chien',
    ctaSubtitle: 'Utilisez notre calculateur vétérinaire pour définir les besoins métaboliques (RER/MER) et les grammes de repas frais ou crus.',
    ctaBtn: 'Calculer la Ration Maintenant →',
    relatedTitle: 'Questions Vétérinaires Similaires',
    readAnswer: 'Lire la Réponse Complète →'
  }
};

module.exports = { fr };
