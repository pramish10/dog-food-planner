import type { RecipeBlueprint } from './types';

export const frBlueprints: RecipeBlueprint[] = [
  // 1. TURKEY & PUMPKIN BLUEPRINT
  {
    slug: 'turkey-pumpkin-maintenance',
    name: 'Blueprint Dinde Maigre & Citrouille Maintien Adulte',
    shortDesc: 'Une recette clinique 65/10/10/8/4/3 pour chien adulte avec dinde maigre 93/7, taurine d’abats pour le cœur, fibres de citrouille et calcium équilibré.',
    badge: 'Formule Maintien Adulte',
    targetAudience: 'Chiens Adultes (1-7 ans) // Maintien & Digestion Sensible',
    colorTheme: '#0070f3',
    macroProfile: {
      proteinDm: '48.2%',
      fatDm: '22.8%',
      carbsDm: '13.4%',
      moisture: '72.5%',
      kcalPerKg: '1 220 kcal/kg (env. 34.6 kcal/oz)',
      caPhosphorusRatio: '1,25 : 1,0 (Recommandation NRC : 1,1:1 – 1,4:1)',
    },
    ingredients: [
      {
        name: 'Dinde Hachée Maigre (93% maigre / 7% matière grasse)',
        percentage: 65,
        category: 'Viande Musculaire Principale',
        role: 'Acides aminés essentiels bioassimilables pour la masse musculaire',
        clinicalBenefit: 'Protéine hautement digestible à faible potentiel allergisant.',
        color: '#0070f3',
      },
      {
        name: 'Cœurs et Gésiers de Dinde',
        percentage: 10,
        category: 'Organe Musculaire & Source de CoQ10',
        role: 'Taurine naturelle, CoQ10, fer héminique et complexe B12',
        clinicalBenefit: 'Protège le myocarde contre la cardiomyopathie dilatée (DCM).',
        color: '#7928ca',
      },
      {
        name: 'Purée de Citrouille Pure Bio',
        percentage: 10,
        category: 'Fibres Solubles Prébiotiques',
        role: 'Pectine et fibres pour stimuler la production de butyrate colique',
        clinicalBenefit: 'Régulateur digestif double action : raffermit les selles et prévient la constipation.',
        color: '#f5a623',
        affiliateKey: 'pumpkinPuree',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: 'Épinards et Courgettes Vapeur',
        percentage: 8,
        category: 'Légumes Verts & Phytonutriments',
        role: 'Apport de folate, vitamine K1, potassium et antioxydants cellulaires',
        clinicalBenefit: 'La vapeur rompt la cellulose pour une assimilation enzymatique facile.',
        color: '#10b981',
      },
      {
        name: 'Poudre de Coquille d’Œuf & Kelp',
        percentage: 4,
        category: 'Minéral Équilibreur Ca:P',
        role: 'Apporte ~38% de calcium élémentaire pour neutraliser le phosphore de la viande',
        clinicalBenefit: 'VITAL : prévient la déminéralisation osseuse et l’hyperparathyroïdie.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Huile de Saumon Sauvage d’Alaska (à froid)',
        percentage: 3,
        category: 'Oméga-3 Marins EPA/DHA',
        role: 'EPA et DHA préformés pour moduler la cascade inflammatoire',
        clinicalBenefit: 'Renforce la barrière cutanée et préserve les cartilages articulaires.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Une formulation phare à base d’ingrédients frais élaborée pour assurer le maintien optimal du chien adulte tout en apaisant son système digestif. Conçue avec de la dinde maigre 93/7, de la taurine d’abats, de la pectine de citrouille et du calcium parfaitement dosé.',
    clinicalRationale: [
      {
        title: '1. Pourquoi la Dinde Maigre 93/7 plutôt que le Poulet ou le Bœuf ?',
        description:
          'Le poulet et le bœuf représentent les principaux allergènes canins. La dinde maigre offre une protéine monoprotéique digeste à plus de 94%, sans surcharger le pancréas en lipides.',
        points: [
          'Valeur biologique élevée couvrant 100% des besoins en acides aminés.',
          'Faible taux de matières grasses limitant le risque de pancréatite aiguë.',
          'Protéine unique idéale pour les chiens à l’estomac sensible.',
        ],
      },
      {
        title: '2. Nécessité Cardiaque : Taurine et CoQ10 des Abats',
        description:
          'Le muscle sans os ne couvre pas les besoins myocardiques en taurine. L’ajout de 10% de cœurs et gésiers garantit un apport naturel en taurine et CoQ10 pour protéger le cœur.',
        points: [
          'Taurine naturelle biodisponible sans additifs chimiques.',
          'Fer héminique bioassimilable et coenzyme Q10 pour l’énergie cellulaire.',
          'Prévention ciblée contre la cardiomyopathie dilatée nutritionnelle (DCM).',
        ],
      },
      {
        title: '3. Équilibre Phosphocalcique (Règle d’Or 1,25:1)',
        description:
          'Toute viande sans os possède un ratio Ca:P inversé et dangereux d’environ 1:20. La poudre de coquille d’œuf pure rétablit l’équilibre parfait pour protéger le squelette.',
        points: [
          'Apporte 38% de calcium élémentaire très assimilable.',
          'Le kelp contribue en iode naturel pour le métabolisme thyroïdien.',
          'Protection permanente du squelette et des dents.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Préparation & Découpe',
        instruction: 'Désinfectez le plan de travail. Coupez les cœurs et gésiers de dinde en petits dés de 5 mm.',
      },
      {
        step: 2,
        title: 'Mijotage à Basse Température (<82°C)',
        instruction: 'Faites mijoter la dinde hachée et les abats avec 1/2 tasse d’eau pendant 8-10 min jusqu’à cuisson complète sans dorer.',
        criticalTip: 'Ne pas frire à feu vif pour éviter la formation de produits de glycation avancée (AGEs).',
      },
      {
        step: 3,
        title: 'Cuisson Vapeur & Purée de Légumes',
        instruction: 'Cuisez la courgette et les épinards à la vapeur 4-5 min. Mixez au robot avec la purée de citrouille.',
      },
      {
        step: 4,
        title: 'Refroidissement Obligatoire (<38°C)',
        instruction: 'Incorporez la purée de légumes à la viande. Laissez refroidir complètement à température ambiante avant d’ajouter les compléments.',
        criticalTip: 'Ne jamais ajouter l’huile de saumon sur des aliments chauds ; la chaleur détruit instantanément les oméga-3.',
      },
      {
        step: 5,
        title: 'Mélange des Compléments à Froid',
        instruction: 'Ajoutez la poudre de coquille d’œuf, le kelp et l’huile de saumon sauvage à froid. Mélangez soigneusement pendant 2 minutes.',
      },
      {
        step: 6,
        title: 'Pesée & Portionnement',
        instruction: 'Pesez les rations quotidiennes sur une balance numérique. Conservez dans des récipients en verre au frais ou congelez.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Réfrigérateur',
        duration: '3-4 Jours Max',
        instructions: 'Récipient hermétique en verre à moins de 3°C.',
      },
      {
        method: 'Congélateur',
        duration: 'Jusqu’à 90 Jours',
        instructions: 'Sachets sous vide ou en silicone hermétiques sans air.',
      },
      {
        method: 'Décongélation',
        duration: 'Au Réfrigérateur',
        instructions: 'Décongeler 24h à l’avance au frigo. Ne jamais réchauffer fort au micro-ondes.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '280 – 320 kcal', dailyGramsTotal: '240 g / jour', mainProtein: '156 g', organMeat: '24 g', produceAndCarbs: '43 g', supplements: '17 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '550 – 620 kcal', dailyGramsTotal: '480 g / jour', mainProtein: '312 g', organMeat: '48 g', produceAndCarbs: '86 g', supplements: '34 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '950 – 1 080 kcal', dailyGramsTotal: '850 g / jour', mainProtein: '553 g', organMeat: '85 g', produceAndCarbs: '153 g', supplements: '59 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1 320 – 1 480 kcal', dailyGramsTotal: '1 180 g / jour', mainProtein: '767 g', organMeat: '118 g', produceAndCarbs: '212 g', supplements: '83 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'Ne PAS donner aux chiots de races géantes en croissance (<12 mois) sans ajustement calcique pédiatrique.',
        'Ne PAS donner aux chiens atteints d’insuffisance rénale chronique avancée (stade IRIS 3-4) sans réduction du phosphore.',
      ],
      transitionSteps: [
        'Jours 1–3 : 25% nouvelle ration / 75% ancienne',
        'Jours 4–6 : 50% nouvelle ration / 50% ancienne',
        'Jours 7–9 : 75% nouvelle ration / 25% ancienne',
        'Jour 10+ : 100% nouvelle ration maison',
      ],
      calciumRule: 'Ne JAMAIS omettre la poudre de coquille d’œuf ; une viande sans os et sans calcium provoque une déminéralisation osseuse en moins de 60 jours.',
    },
    faq: [
      {
        question: 'Puis-je remplacer la dinde par du bœuf haché maigre ?',
        answer: 'Oui, à condition que la viande contienne moins de 8% de matières grasses et que vous conserviez les 10% d’abats pour la taurine.',
      },
      {
        question: 'Puis-je donner cette ration crue ?',
        answer: 'La volaille crue présente des risques bactériens et les légumes crus sont indigestes sans cuisson vapeur. Le mijotage doux est vivement recommandé.',
      },
    ],
  },

  // 2. BEEF & SWEET POTATO BLUEPRINT
  {
    slug: 'beef-sweet-potato-vitality',
    name: 'Blueprint Bœuf Nourri à l’Herbe & Patate Douce Haute Vitalité',
    shortDesc: 'Une formule haute énergie 62/10/12/8/4/4 avec bœuf 90/10, abats riches en fer héminique et CoQ10, patate douce à IG bas et brocoli antioxydant.',
    badge: 'Vitalité & Masse Musculaire',
    targetAudience: 'Chiens Actifs & Sportifs // Dépense Énergétique Élevée',
    colorTheme: '#7928ca',
    macroProfile: {
      proteinDm: '46.5%',
      fatDm: '24.0%',
      carbsDm: '17.5%',
      moisture: '71.0%',
      kcalPerKg: '1 290 kcal/kg (env. 36.6 kcal/oz)',
      caPhosphorusRatio: '1,25 : 1,0 (Conforme NRC)',
    },
    ingredients: [
      {
        name: 'Bœuf Haché Maigre de Pâturage (90/10)',
        percentage: 62,
        category: 'Viande Rouge Musculaire',
        role: 'Créatine, acide linoléique conjugué (CLA), zinc et myoglobine pour l’effort',
        clinicalBenefit: 'Le bœuf nourri à l’herbe possède un ratio oméga 6:3 supérieur pour l’endurance.',
        color: '#e11d48',
      },
      {
        name: 'Foie et Cœur de Bœuf',
        percentage: 10,
        category: 'Abats Nobles Haute Densité',
        role: 'Vitamine A biodisponible (rétinol), B12, cuivre, fer héminique et CoQ10',
        clinicalBenefit: 'Améliore l’oxygénation des tissus musculaires et le métabolisme énergétique.',
        color: '#7928ca',
      },
      {
        name: 'Patate Douce Cuite Vapeur',
        percentage: 12,
        category: 'Glucides Complexes à Diffusion Lente',
        role: 'Reconstitution continue du glycogène musculaire sans pics d’insuline',
        clinicalBenefit: 'Maintient un niveau d’énergie stable pour les chiens d’endurance et de travail.',
        color: '#f5a623',
      },
      {
        name: 'Brocolis et Carottes Vapeur',
        percentage: 8,
        category: 'Légumes Protecteurs & Antioxydants',
        role: 'Sulforaphane et bêta-carotène pour la détoxification cellulaire',
        clinicalBenefit: 'Combat le stress oxydatif provoqué par les efforts physiques intenses.',
        color: '#10b981',
      },
      {
        name: 'Coquille d’Œuf & Kelp',
        percentage: 4,
        category: 'Équilibre Minéral & Iode',
        role: 'Neutralise le phosphore du bœuf à 1,25:1 avec de l’iode pour la thyroïde',
        clinicalBenefit: 'Protège la densité osseuse face aux contraintes mécaniques intenses.',
        color: '#0070f3',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Huile d’Olive & Huile de Foie de Morue',
        percentage: 4,
        category: 'Lipides Sains & Vitamine D3',
        role: 'Acide oléique et vitamine D3 naturelle pour fixer le calcium sur les os',
        clinicalBenefit: 'Soutien hormonal et cardiovasculaire chez le chien actif. À froid.',
        color: '#f5a623',
      },
    ],
    executiveSummary:
      'Une formule athlétique de haute performance pour chiens de travail, d’agility ou très actifs. La créatine naturelle du bœuf de pâturage nourrit la puissance musculaire tandis que la patate douce assure une endurance durable sans fatigue.',
    clinicalRationale: [
      {
        title: '1. Pourquoi le Bœuf de Pâturage Apporte une Puissance Supérieure',
        description:
          'Les chiens sportifs épuisent rapidement leurs réserves de phosphocréatine. Le bœuf nourri à l’herbe apporte de la créatine cellulaire directe pour régénérer l’ATP et accélérer la récupération.',
        points: [
          'Riche en CLA pour préserver une masse corporelle sèche.',
          '3 fois plus riche en oméga-3 que le bœuf de batterie.',
          'Fer héminique et vitamine B12 optimisant le transport d’oxygène.',
        ],
      },
      {
        title: '2. Reconstitution Glycogénique Durable via la Patate Douce',
        description:
          'À l’inverse du maïs, la patate douce libère du glucose de façon continue sur 6 à 8 heures sans solliciter excessivement le pancréas.',
        points: [
          'Endurance continue pour la randonnée et le travail.',
          'Riche en potassium pour éviter les crampes musculaires.',
          'Pectine douce nourrissant le microbiote colique.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Découpe Viande & Abats',
        instruction: 'Coupez le cœur et le foie de bœuf en dés de 5 mm. Conservez au frais jusqu’à la cuisson.',
      },
      {
        step: 2,
        title: 'Mijotage Doux du Bœuf',
        instruction: 'Faites mijoter le bœuf haché 90/10 et les abats avec 1/2 tasse d’eau pendant 10 min à feu moyen-doux jusqu’à cuisson homogène.',
      },
      {
        step: 3,
        title: 'Vapeur Patate Douce & Brocoli',
        instruction: 'Pelez et coupez la patate douce en cubes. Cuisez à la vapeur avec le brocoli et les carottes (10-12 min) et écrasez grossièrement.',
      },
      {
        step: 4,
        title: 'Refroidissement Complet',
        instruction: 'Mélangez les légumes écrasés au bœuf cuit. Laissez refroidir impérativement sous 38°C avant les huiles.',
      },
      {
        step: 5,
        title: 'Mélange Huiles & Calcium à Froid',
        instruction: 'Incorporez la poudre de coquille d’œuf, le kelp, l’huile d’olive et l’huile de foie de morue en remuant bien pendant 2 min.',
      },
      {
        step: 6,
        title: 'Portionnement & Conservation',
        instruction: 'Pesez les portions selon les calories journalières calculées. Congelez les rations excédentaires.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Réfrigérateur',
        duration: '3-4 Jours Max',
        instructions: 'Récipient en verre hermétique à moins de 3°C.',
      },
      {
        method: 'Congélateur',
        duration: 'Jusqu’à 90 Jours',
        instructions: 'Portions individuelles sous vide.',
      },
      {
        method: 'Service',
        duration: 'Tiédi Doucement',
        instructions: 'Tiédir au bain-marie à température ambiante avant de servir.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '310 – 350 kcal', dailyGramsTotal: '230 g / jour', mainProtein: '143 g', organMeat: '23 g', produceAndCarbs: '46 g', supplements: '18 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '620 – 710 kcal', dailyGramsTotal: '460 g / jour', mainProtein: '285 g', organMeat: '46 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1 080 – 1 220 kcal', dailyGramsTotal: '810 g / jour', mainProtein: '502 g', organMeat: '81 g', produceAndCarbs: '162 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1 490 – 1 680 kcal', dailyGramsTotal: '1 120 g / jour', mainProtein: '694 g', organMeat: '112 g', produceAndCarbs: '224 g', supplements: '90 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'Ne PAS donner aux chiens atteints de pancréatite (nécessite moins de 12% de graisses MS).',
        'Ne JAMAIS donner sans poudre de calcium (risque majeur de déminéralisation osseuse).',
      ],
      transitionSteps: [
        'Jours 1–3 : 25% nouveau / 75% ancien',
        'Jours 4–6 : 50% nouveau / 50% ancien',
        'Jours 7–9 : 75% nouveau / 25% ancien',
        'Jour 10+ : 100% nouvelle ration',
      ],
      calciumRule: 'Pesez toujours le calcium avec précision pour neutraliser le phosphore du bœuf.',
    },
    faq: [
      {
        question: 'Les chiens sédentaires peuvent-ils consommer cette recette ?',
        answer: 'Pour les chiens sédentaires, réduisez les portions de 15 à 20% ou optez pour le Blueprint Dinde & Citrouille.',
      },
    ],
  },

  // 3. SALMON & QUINOA BLUEPRINT
  {
    slug: 'salmon-quinoa-joint-coat',
    name: 'Blueprint Saumon Sauvage d’Alaska & Quinoa Articulations & Pelage',
    shortDesc: 'Formule marine 60/8/12/10/6/4 riche en EPA/DHA avec saumon sauvage, quinoa hypoallergénique, myrtilles protectrices et huile de chanvre pour les articulations douloureuses et le prurit.',
    badge: 'Articulations & Pelage',
    targetAudience: 'Chiens Adultes & Seniors // Articulations & Peau Sensible',
    colorTheme: '#06b6d4',
    macroProfile: {
      proteinDm: '44.0%',
      fatDm: '25.5%',
      carbsDm: '18.5%',
      moisture: '73.0%',
      kcalPerKg: '1 260 kcal/kg (env. 35.7 kcal/oz)',
      caPhosphorusRatio: '1,28 : 1,0 (Conforme NRC)',
    },
    ingredients: [
      {
        name: 'Saumon Sauvage d’Alaska & Poisson Blanc',
        percentage: 60,
        category: 'Poissons Marins Nobles',
        role: 'EPA et DHA marins directs et collagène pour le liquide synovial',
        clinicalBenefit: 'Inhibe l’inflammation articulaire COX-2 et répare la barrière cutanée.',
        color: '#06b6d4',
      },
      {
        name: 'Cœurs et Gésiers de Dinde',
        percentage: 8,
        category: 'Abats Riches en Taurine',
        role: 'Fournit la taurine indispensable pour protéger le cœur lors d’une diète à base de poisson',
        clinicalBenefit: 'Garantit un soutien myocardique continu en parallèle des soins articulaires.',
        color: '#7928ca',
      },
      {
        name: 'Quinoa Bio Cuit',
        percentage: 12,
        category: 'Pseudocéréale Hypoallergénique',
        role: 'Profil complet de 9 acides aminés essentiels sans gluten ni allergènes',
        clinicalBenefit: 'Haute tolérance digestive pour les intestins sensibles.',
        color: '#f5a623',
        affiliateKey: 'quinoa',
      },
      {
        name: 'Myrtilles, Kale et Courgettes Vapeur',
        percentage: 10,
        category: 'Super-Antioxydants Végétaux ORAC',
        role: 'Anthocyanes et lutéine protégeant les chondrocytes du cartilage',
        clinicalBenefit: 'Protège les articulations et favorise la longévité cognitive des chiens âgés.',
        color: '#10b981',
      },
      {
        name: 'Huile de Chanvre & Moule Verte',
        percentage: 6,
        category: 'GLA & Glycosaminoglycanes',
        role: 'Acide gamma-linolénique et chondroïtine pour lubrifier les articulations',
        clinicalBenefit: 'Soulage les raideurs matinales et apaise le prurit cutané. À froid.',
        color: '#0070f3',
      },
      {
        name: 'Calcium d’Algues Marines & Kelp',
        percentage: 4,
        category: 'Calcium Marin Végétal Ionique',
        role: 'Algue rouge calcifiée apportant 72 oligo-éléments biodisponibles',
        clinicalBenefit: 'Tolérance digestive optimale sans irritation gastrique.',
        color: '#e11d48',
        affiliateKey: 'kelp',
      },
    ],
    executiveSummary:
      'Une formule clinique marine anti-inflammatoire pour chiens souffrant de raideurs articulaires, d’arthrose ou de démangeaisons cutanées. Les doses élevées d’EPA/DHA associées aux glycosaminoglycanes de moule verte soulagent la douleur et restaurent la barrière dérmique.',
    clinicalRationale: [
      {
        title: '1. Cascade Anti-Inflammatoire EPA/DHA pour Cartilages et Peau',
        description:
          'L’EPA et le DHA déplacent l’acide arachidonique pro-inflammatoire dans les membranes cellulaires, réduisant considérablement la douleur articulaire et l’érythème cutané.',
        points: [
          'Biodisponibilité 10 fois supérieure aux oméga-3 végétaux (ALA du lin).',
          'Améliore la lubrification du cartilage et la souplesse articulaire.',
          'Calme le prurit allergique de manière saine et naturelle.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Pochage du Poisson & Abats',
        instruction: 'Pochez délicatement le saumon, le poisson blanc et les cœurs de dinde dans 1 tasse d’eau à feu doux pendant 7-8 min. Émiettez soigneusement en vérifiant les arêtes.',
      },
      {
        step: 2,
        title: 'Cuisson du Quinoa',
        instruction: 'Rincez le quinoa pour enlever les saponines. Faites bouillir dans 2 fois son volume d’eau pendant 15 min jusqu’à texture moelleuse et laissez refroidir.',
      },
      {
        step: 3,
        title: 'Cuisson Vapeur Myrtilles & Légumes',
        instruction: 'Cuisez le kale et la courgette à la vapeur pendant 4 min. Ajoutez les myrtilles fraîches et mixez en purée grossière.',
      },
      {
        step: 4,
        title: 'Refroidissement Obligatoire',
        instruction: 'Mélangez tous les ingrédients cuits. Laissez impérativement refroidir en dessous de 38°C avant d’incorporer les huiles et suppléments.',
        criticalTip: 'Ne jamais ajouter d’huiles marines sur des aliments tièdes ou chauds sous peine d’oxydation immédiate des lipides.',
      },
      {
        step: 5,
        title: 'Ajout des Compléments à Froid',
        instruction: 'Saupoudrez le calcium d’algues, le kelp, l’huile de chanvre et la poudre de moule verte. Mélangez soigneusement pendant 2 minutes.',
      },
      {
        step: 6,
        title: 'Pesée & Congélation',
        instruction: 'Pesez les portions à la balance numérique. Conservez les repas de 2-3 jours au réfrigérateur et congelez le reste.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Réfrigérateur',
        duration: '3 Jours Max',
        instructions: 'Le poisson s’altère plus vite que la volaille ; consommer sous 72 h.',
      },
      {
        method: 'Congélateur',
        duration: 'Jusqu’à 60 Jours',
        instructions: 'Congeler sous vide pour protéger les lipides fragiles de l’oxydation.',
      },
      {
        method: 'Décongélation',
        duration: 'Au Réfrigérateur',
        instructions: 'Décongeler lentement au réfrigérateur. Pas de micro-ondes à haute puissance.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '300 – 340 kcal', dailyGramsTotal: '235 g / jour', mainProtein: '141 g', organMeat: '19 g', produceAndCarbs: '52 g', supplements: '23 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '600 – 680 kcal', dailyGramsTotal: '470 g / jour', mainProtein: '282 g', organMeat: '38 g', produceAndCarbs: '103 g', supplements: '47 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1 040 – 1 180 kcal', dailyGramsTotal: '830 g / jour', mainProtein: '498 g', organMeat: '66 g', produceAndCarbs: '183 g', supplements: '83 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1 450 – 1 620 kcal', dailyGramsTotal: '1 150 g / jour', mainProtein: '690 g', organMeat: '92 g', produceAndCarbs: '253 g', supplements: '115 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'Ne JAMAIS donner de saumon sauvage cru sans cuisson (risque parasitaire de la maladie du saumon par Neorickettsia helminthoeca). La cuisson neutralise totalement ce risque.',
      ],
      transitionSteps: [
        'Jours 1–3 : 25% nouveau / 75% ancien',
        'Jours 4–6 : 50% nouveau / 50% ancien',
        'Jours 7–9 : 75% nouveau / 25% ancien',
        'Jour 10+ : 100% nouvelle ration',
      ],
      calciumRule: 'Le calcium d’algues doit être pesé au gramme près pour maintenir l’équilibre Ca:P.',
    },
    faq: [
      {
        question: 'Peut-on utiliser du saumon en boîte ?',
        answer: 'Uniquement du saumon sauvage au naturel sans sel ajouté. Le saumon sauvage frais ou surgelé reste préférable.',
      },
    ],
  },

  // 4. LAMB & CRANBERRY BLUEPRINT
  {
    slug: 'lamb-cranberry-gentle-gut',
    name: 'Blueprint Agneau de Pâturage & Canneberge Hypoallergénique Intestinal',
    shortDesc: 'Formule novatrice 64/8/12/8/5/3 pour chiens intolérants au bœuf et volailles, avec agneau de pâturage, courge butternut apaisante et canneberges protectrices.',
    badge: 'Hypoallergénique Intestinal & Urinaire',
    targetAudience: 'Chiens Allergiques au Poulet/Bœuf & Intestins Sensibles',
    colorTheme: '#10b981',
    macroProfile: {
      proteinDm: '45.8%',
      fatDm: '26.2%',
      carbsDm: '16.0%',
      moisture: '72.0%',
      kcalPerKg: '1 310 kcal/kg (env. 37.1 kcal/oz)',
      caPhosphorusRatio: '1,25 : 1,0 (Conforme NRC)',
    },
    ingredients: [
      {
        name: 'Agneau de Pâturage Haché Maigre',
        percentage: 64,
        category: 'Protéine Novatrice Unique',
        role: 'L-carnitine, zinc et profil antigénique novateur pour diète d’éviction',
        clinicalBenefit: 'Alternative idéale aux volailles et bœuf pour éviter les réactions immunitaires.',
        color: '#10b981',
      },
      {
        name: 'Foie et Rognons d’Agneau',
        percentage: 8,
        category: 'Abats Filtrants Hautement Nutritifs',
        role: 'Sélénium, cuivre, vitamine A et folates actifs',
        clinicalBenefit: 'Protège les membranes cellulaires et soutient l’immunité intestinale.',
        color: '#7928ca',
      },
      {
        name: 'Courge Butternut & Canneberges Pures',
        percentage: 12,
        category: 'Pectine & PACs Urinaires',
        role: 'Proanthocyanidines protectrices des voies urinaires et pectine apaisante',
        clinicalBenefit: 'Prévient les inconforts urinaires et raffermit les selles molles chroniques.',
        color: '#f5a623',
      },
      {
        name: 'Haricots Verts & Persil Vapeur',
        percentage: 8,
        category: 'Chlorophylle & Fibres Douces',
        role: 'Fibres douces et apigénine pour calmer les spasmes intestinaux',
        clinicalBenefit: 'Rafraîchit l’haleine et apporte du lest sans provoquer de gaz.',
        color: '#0070f3',
      },
      {
        name: 'Poudre de Coquille d’Œuf & Kelp',
        percentage: 5,
        category: 'Calcium Essentiel & Iode',
        role: 'Carbonate de calcium équilibrant l’agneau à 1,25:1 Ca:P',
        clinicalBenefit: 'Minéralisation du squelette avec une tolérance gastrique neutre.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Huile de Saumon d’Alaska (à froid)',
        percentage: 3,
        category: 'Oméga-3 Marins',
        role: 'EPA et DHA apaisant la muqueuse intestinale enflammée',
        clinicalBenefit: 'Maintient l’intégrité de la barrière intestinale. Toujours à froid.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Une formule ciblée pour chiens sujets aux selles molles récurrentes, aux intolérances au poulet/bœuf ou aux irritations urinaires. L’agneau de pâturage offre une protéine neuve et digeste, tandis que la courge butternut et les canneberges protègent le tractus digestif et urinaire.',
    clinicalRationale: [
      {
        title: '1. Pourquoi l’Agneau pour les Chiens Allergiques ?',
        description:
          'La volaille et le bœuf provoquent la majorité des dermatites allergiques canines. L’agneau de pâturage ne présente aucune réaction croisée et met au repos le système immunitaire digestif.',
        points: [
          'Élimine les deux premiers allergènes de l’alimentation industrielle.',
          'Haute teneur en L-carnitine pour le myocarde et la combustion des lipides.',
          'Appétence exceptionnelle même pour les chiens convalescents.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Découpe des Abats & Préparation',
        instruction: 'Coupez le foie et les rognons d’agneau en dés de 5 mm.',
      },
      {
        step: 2,
        title: 'Pochage Doux de l’Agneau',
        instruction: 'Faites pocher l’agneau haché et les abats dans 1/2 tasse d’eau pendant 8-10 min jusqu’à cuisson complète. Éliminez l’excès de graisse surnageante.',
      },
      {
        step: 3,
        title: 'Cuisson Vapeur Courge & Canneberges',
        instruction: 'Cuisez à la vapeur la courge butternut pelée, les haricots et les canneberges fraîches (6-8 min) puis mixez finement en purée.',
      },
      {
        step: 4,
        title: 'Refroidissement Total (<38°C)',
        instruction: 'Mélangez la purée à l’agneau cuit. Laissez refroidir complètement à température ambiante.',
      },
      {
        step: 5,
        title: 'Incorporation des Compléments à Froid',
        instruction: 'Incorporez la poudre de coquille d’œuf, le kelp et l’huile de saumon à froid pendant 2 minutes.',
      },
      {
        step: 6,
        title: 'Pesée des Rations',
        instruction: 'Pesez les portions à la balance numérique. Conservez au frais 2-3 jours ou congelez.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Réfrigérateur',
        duration: '3-4 Jours Max',
        instructions: 'Récipient en verre sous 3°C.',
      },
      {
        method: 'Congélateur',
        duration: 'Jusqu’à 90 Jours',
        instructions: 'Sachets sous vide hermétiques.',
      },
      {
        method: 'Service',
        duration: 'Tiédi au Bain-Marie',
        instructions: 'Réchauffer doucement au bain-marie avant de servir.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '305 – 345 kcal', dailyGramsTotal: '230 g / jour', mainProtein: '147 g', organMeat: '18 g', produceAndCarbs: '46 g', supplements: '19 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '610 – 700 kcal', dailyGramsTotal: '460 g / jour', mainProtein: '294 g', organMeat: '37 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1 060 – 1 200 kcal', dailyGramsTotal: '820 g / jour', mainProtein: '525 g', organMeat: '66 g', produceAndCarbs: '164 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1 480 – 1 650 kcal', dailyGramsTotal: '1 130 g / jour', mainProtein: '723 g', organMeat: '90 g', produceAndCarbs: '226 g', supplements: '91 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'Ne PAS utiliser de canneberges séchées sucrées du commerce ; utilisez uniquement des canneberges fraîches ou surgelées 100% pures sans sucre ajouté.',
      ],
      transitionSteps: [
        'Jours 1–3 : 25% nouveau / 75% ancien',
        'Jours 4–6 : 50% nouveau / 50% ancien',
        'Jours 7–9 : 75% nouveau / 25% ancien',
        'Jour 10+ : 100% nouvelle ration',
      ],
      calciumRule: 'Veillez à toujours incorporer la dose requise de calcium pour prévenir les carences osseuses.',
    },
    faq: [
      {
        question: 'Les canneberges sont-elles sans danger pour les chiens ?',
        answer: 'Oui, cuites et sous forme pure. Elles sont d’un grand bénéfice pour la santé de la vessie et des voies urinaires.',
      },
    ],
  },
];
