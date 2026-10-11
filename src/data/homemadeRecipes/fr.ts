import type { LocalizedRecipesMap } from './types';

export const frRecipes: LocalizedRecipesMap = {
  'gently-cooked-turkey-pumpkin': {
    tag: 'CUISSON DOUCE',
    title: 'Dinde Cuite Doucement & Citrouille Prébiotique (Spécial Estomacs Sensibles)',
    heroTitle: 'Protocole de Dinde Cuite Doucement et Citrouille Prébiotique',
    shortDesc: 'Une formulation cuite faible en gras à base d’une seule volaille digeste, conçue pour les chiens à digestion sensible, selles molles ou intolérants au poulet.',
    summary: 'Spécialement élaborée pour les systèmes gastro-intestinaux canins délicats. Contient de la dinde hachée maigre 93/7, des cœurs riches en taurine cardiaque, de la purée de citrouille prébiotique, des courgettes et épinards vapeur, du calcium pur de coquille d’œuf et de l’huile de saumon sauvage d’Alaska.',
    badge: 'RECETTE VÉTÉRINAIRE ESTOMACS SENSIBLES // CUISSON DOUCE FAIBLE EN GRAS',
    prepTime: '20 minutes',
    cookTime: '15 minutes (léger mijotage)',
    yieldAmount: 'Env. 1 450 g (3,2 lbs) de nourriture préparée',
    lifeStage: 'Chiens Adultes et Seniors (Soutien Gastro-intestinal)',
    dietStyle: 'Alimentation Complète Cuite Doucement (Conforme NRC/AAFCO avec Calcium)',
    macroProfile: {
      caPhosphorusRatio: '1,25 : 1 (Équilibré par la Poudre de Coquille d’Œuf)',
    },
    keyHighlights: [
      '65% Dinde hachée maigre 93/7 (Protéine unique hautement digestible sans irritation gastrique)',
      '10% Cœurs de dinde ou de bœuf (Source naturelle et biodisponible de taurine et L-carnitine)',
      '10% Purée de citrouille pure (Fibres solubles riches en pectine pour raffermir les selles)',
      '10% Courgettes et jeunes pousses d’épinards vapeur (Légumes doux à faible indice glycémique)',
      '3% Poudre de coquille d’œuf pure (Ratio 1,25:1 Ca:P prévenant toute déminéralisation osseuse)',
      '2% Huile de saumon sauvage d’Alaska (Acides gras marins anti-inflammatoires EPA/DHA)',
    ],
    ingredients: [
      {
        name: 'Dinde Hachée Maigre (93% Maigre / 7% Gras)',
        batchAmount: '908 g (2,0 lbs)',
        category: 'Protéine Musculaire Maigre Principale',
        role: 'Acides aminés hautement assimilables avec une friction digestive minimale ; idéal pour les chiens sujets aux intolérances au poulet.',
        clinicalBenefit: 'Riche en tryptophane, niacine et sélénium avec une valeur biologique élevée et une digestibilité iléale supérieure à 92%.',
      },
      {
        name: 'Cœurs de Dinde ou de Bœuf Élevé à l’Herbe',
        batchAmount: '142 g (5,0 oz)',
        category: 'Organe Musculaire Cardiaque',
        role: 'La source alimentaire la plus dense en taurine libre et en coenzyme Q10 pour soutenir la fonction myocardique du ventricule gauche.',
        clinicalBenefit: 'Indispensable pour la prévention de la cardiomyopathie dilatée (CMD) sans recourir à des suppléments de synthèse.',
      },
      {
        name: 'Purée de Citrouille 100% Pure (Sans Sucre ni Épices)',
        batchAmount: '142 g (5,0 oz)',
        category: 'Fibres Solubles Prébiotiques',
        role: 'Fournit de la pectine fermentescible qui nourrit les colonocytes, régule le transit en cas de diarrhée et adoucit la constipation.',
        clinicalBenefit: 'Stimule la production d’acides gras à chaîne courte (butyrate) renforçant les jonctions serrées de la muqueuse intestinale.',
      },
      {
        name: 'Jeunes Épinards et Courgettes Vapeur en Petits Dés',
        batchAmount: '142 g (5,0 oz)',
        category: 'Légumes Verts à Faible Indice Glycémique',
        role: 'Hydratation douce et antioxydants cellulaires protecteurs : lutéine, bêta-carotène, potassium et magnésium.',
        clinicalBenefit: 'La cuisson douce à la vapeur attendrit les parois cellulosiques, permettant une assimilation sans ballonnements.',
      },
      {
        name: 'Poudre de Coquille d’Œuf Pure (Carbonate de Calcium)',
        batchAmount: '1 cuillère à café rase (env. 5,5 g / 1 900 mg de calcium élémentaire)',
        category: 'Régulateur Minéral Essentiel',
        role: 'Compense le fort taux de phosphore des viandes sans os (1:20) pour rétablir le ratio obligatoire de 1,25:1 Calcium:Phosphore.',
        clinicalBenefit: 'Goût neutre et biodisponibilité comparable aux poudres d’os ; protège l’animal contre l’ostéodystrophie déminéralisante.',
      },
      {
        name: 'Huile de Saumon Sauvage d’Alaska (EPA et DHA)',
        batchAmount: '1,5 cuillère à soupe (22 ml)',
        category: 'Acides Gras Essentiels Marins',
        role: 'Oméga-3 à longue chaîne hautement anti-inflammatoires ; apaise l’épithélium digestif et renforce la barrière cutanée.',
        clinicalBenefit: 'Freine la production d’eicosanoïdes pro-inflammatoires (PGE2, LTB4) ; à incorporer UNIQUEMENT une fois le plat refroidi.',
      },
    ],
    executiveRationale: 'Les entéropathies chroniques et intolérances alimentaires canines résultent fréquemment de l’extrusion industrielle à haute température, des graisses oxydées dans les croquettes ou de réactions immunitaires au poulet d’élevage intensif. Cette recette utilise une seule volaille digeste (la dinde) cuite doucement à cœur (74°C) pour éliminer les bactéries tout en préservant la conformation des protéines naturelles. Associée aux fibres prébiotiques de citrouille et aux oméga-3 marins, elle crée un environnement digestif apaisé.',
    clinicalDeepDives: [
      {
        title: 'Régulation Intestinale par la Pectine et les Fibres Solubles',
        description: 'La purée de citrouille exerce une double action dans le côlon du chien. En cas de selles molles ou de diarrhée, son réseau de fibres solubles absorbe l’eau excédentaire pour compacter les selles. En cas de constipation légère, elle lubrifie le bol fécal. De plus, la fermentation de la pectine produit du butyrate, la source d’énergie préférentielle des cellules coliques.',
        keyPoints: [
          'Capacité de rétention d’eau remarquable stabilisant les selles en 24 à 48 heures.',
          'Stimule le développement des bactéries bénéfiques (Bifidobactéries et Lactobacilles).',
          'Utilisez uniquement de la citrouille pure, exempte de sucre et d’épices de pâtisserie.',
        ],
      },
      {
        title: 'Le Rôle Vital de la Taurine Fraîche et du Tissu Cardiaque',
        description: 'Bien que les chiens synthétisent la taurine à partir d’acides aminés soufrés, la cuisson extrême des aliments industriels en diminue la biodisponibilité, et certaines races (Golden Retriever, Cocker) présentent des faiblesses génétiques d’assimilation. L’incorporation de 10% de cœurs frais délivre une taurine naturelle directement dans le flux sanguin.',
        keyPoints: [
          'Le tissu cardiaque contient jusqu’à 10 fois plus de taurine que le muscle squelettique classique.',
          'Soutient la contraction des cardiomyocytes et la santé des parois ventriculaires.',
          'Apporte de la coenzyme Q10 et du fer héminique très assimilable.',
        ],
      },
      {
        title: 'Protocole Thermique : Préserver les Nutriments Vulnérables',
        description: 'Une cuisson excessive détruit jusqu’à 60% de la thiamine (vitamine B1) et oxyde les oméga-3 marins fragiles. La dinde hachée doit être cuite à feu doux juste assez pour perdre sa teinte rosée (74°C à cœur). L’huile de saumon et la poudre de coquille d’œuf ne doivent JAMAIS être chauffées sur le feu ; elles sont incorporées une fois le plat tiédi sous 38°C.',
        keyPoints: [
          'Empêche la péroxydation lipidique toxique de l’huile de poisson chauffée.',
          'Préserve l’intégrité des vitamines B hydrosolubles et des phytonutriments.',
          'Détruit Salmonella et Campylobacter grâce à un seuil thermique maîtrisé de 74°C.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Pesée et Préparation Hygiénique',
        instruction: 'À l’aide d’une balance numérique de cuisine, pesez exactement 908 g de dinde hachée et 142 g de cœurs émincés. Nettoyez soigneusement le plan de travail et les ustensiles.',
        criticalTip: 'La précision au gramme près est essentielle ; les approximations visuelles créent des carences chroniques.',
      },
      {
        step: 2,
        title: 'Cuisson Douce des Protéines',
        instruction: 'Déposez la dinde et les cœurs dans une poêle en inox à feu doux à moyen. Ajoutez 60 ml d’eau pour éviter d’attacher. Remuez pendant 8 à 12 minutes jusqu’à ce que le cœur atteigne 74°C. Retirez aussitôt du feu.',
        criticalTip: 'Ne jetez jamais le jus de cuisson ; il renferme les vitamines B hydrosolubles et la précieuse taurine.',
      },
      {
        step: 3,
        title: 'Cuisson Vapeur et Purée de Légumes',
        instruction: 'Faites cuire les courgettes et épinards à la vapeur pendant 4 à 5 minutes jusqu’à ce qu’ils soient tendres. Mixez-les avec les 142 g de purée de citrouille jusqu’à obtention d’une texture lisse.',
      },
      {
        step: 4,
        title: 'Mélange et Refroidissement Complet',
        instruction: 'Incorporez la purée de légumes dans la viande tiède et mélangez intimement. Laissez reposer jusqu’à ce que la température descende sous 38°C (tiède au toucher).',
        criticalTip: 'Ne passez JAMAIS à l’étape 5 avant que le mélange ne soit tiède ou froid au toucher.',
      },
      {
        step: 5,
        title: 'Ajout des Nutriments Thermosensibles',
        instruction: 'Saupoudrez 1 cuillère à café rase (5,5 g) de poudre de coquille d’œuf et versez 1,5 cuillère à soupe (22 ml) d’huile de saumon sauvage. Remuez pendant 60 secondes pour assurer une répartition homogène.',
      },
      {
        step: 6,
        title: 'Portionnement et Conservation',
        instruction: 'Divisez en boîtes hermétiques journalières. Notez la date. Conservez jusqu’à 4 jours au réfrigérateur et congelez le surplus pour une conservation jusqu’à 90 jours.',
      },
    ],
    portionReference: [
      {
        dogWeight: 'Nain (2,3 kg / 5 lbs)',
        dailyGrams: '110 g par jour (env. 3,9 oz)',
        dailyKcal: '135 kcal',
        mealsPerDay: '2 repas (55 g par repas)',
        servingNotes: 'Chiens miniatures : Servir à température ambiante, jamais glacé à la sortie du frigo.',
      },
      {
        dogWeight: 'Petit (4,5 kg / 10 lbs)',
        dailyGrams: '185 g par jour (env. 6,5 oz)',
        dailyKcal: '230 kcal',
        mealsPerDay: '2 repas (92 g par repas)',
        servingNotes: 'Parfait pour bichons, caniches nains et petits terriers à digestion capricieuse.',
      },
      {
        dogWeight: 'Moyen-Petit (9,1 kg / 20 lbs)',
        dailyGrams: '310 g par jour (env. 10,9 oz)',
        dailyKcal: '385 kcal',
        mealsPerDay: '2 repas (155 g par repas)',
        servingNotes: 'Bouledogue Français, Beagle, Corgi : Réduire de 10% si le chien est stérilisé et peu actif.',
      },
      {
        dogWeight: 'Moyen (15,9 kg / 35 lbs)',
        dailyGrams: '475 g par jour (env. 16,7 oz)',
        dailyKcal: '590 kcal',
        mealsPerDay: '2 repas (238 g par repas)',
        servingNotes: 'Épagneuls, Bergers Australiens : Densité idéale pour le maintien actif.',
      },
      {
        dogWeight: 'Grand (22,7 kg / 50 lbs)',
        dailyGrams: '625 g par jour (env. 22,0 oz)',
        dailyKcal: '775 kcal',
        mealsPerDay: '2 repas (312 g par repas)',
        servingNotes: 'Boxer, Braque, Grand Caniche : La haute digestibilité réduit le volume des selles.',
      },
      {
        dogWeight: 'Très Grand (31,8 kg / 70 lbs)',
        dailyGrams: '805 g par jour (env. 28,4 oz)',
        dailyKcal: '1 000 kcal',
        mealsPerDay: '2 repas (402 g par repas)',
        servingNotes: 'Golden Retriever, Labrador : L’effet rassasiant de la citrouille prévient la gloutonnerie.',
      },
      {
        dogWeight: 'Géant (40,8 kg / 90 lbs)',
        dailyGrams: '970 g par jour (env. 34,2 oz)',
        dailyKcal: '1 200 kcal',
        mealsPerDay: '2 repas (485 g par repas)',
        servingNotes: 'Berger Allemand, Rottweiler : Amélioration spectaculaire de la fermeté des selles.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Réfrigération (Récipient Hermétique)',
        duration: 'Jusqu’à 4 jours à ≤ 3°C',
        instructions: 'Conserver dans un récipient en verre hermétique. Utiliser toujours une cuillère propre pour prélever la portion.',
      },
      {
        method: 'Congélation (Portions Individuelles)',
        duration: 'Jusqu’à 3 mois à -18°C',
        instructions: 'Portionner en sachets ou boîtes de congélation. Décongeler 24 h avant au réfrigérateur. Ne jamais recongeler.',
      },
      {
        method: 'Réchauffage Doux',
        duration: 'Température ambiante ou bain-marie',
        instructions: 'Servir à température ambiante. Pour tiédir, placer le récipient 5 min dans de l’eau chaude. Pas de micro-ondes puissant.',
      },
    ],
    safetyAndPrecautions: {
      calciumRule: 'Ne supprimez ni ne diminuez JAMAIS la poudre de coquille d’œuf. La viande de dinde désossée présente un ratio Calcium:Phosphore inversé de 1:18. Sans calcium de coquille (env. 1 900 mg de calcium par lot), l’organisme du chien puisera dans ses propres os, entraînant une déminéralisation osseuse sévère et des fractures spontanées.',
      hygieneRule: 'Faites cuire la volaille à 74°C à cœur mesuré au thermomètre sonde. Jetez toute portion restée plus de 2 heures à température ambiante.',
      contraindications: [
        'Chiens atteints d’Insuffisance Rénale Chronique avancée (stade IRIS 3 ou 4) nécessitant un phosphore inférieur à 0,4% MS.',
        'Chiens diagnostiqués avec une hypercalcémie ou des calculs urinaires d’oxalate de calcium.',
        'Chiots de grande race en croissance rapide (< 12 mois) exigeant un suivi pédiatrique strict du Ca:P.',
      ],
      transitionSchedule: [
        'Jours 1–3 : 75% alimentation habituelle + 25% ration dinde & citrouille.',
        'Jours 4–6 : 50% alimentation habituelle + 50% ration dinde & citrouille.',
        'Jours 7–9 : 25% alimentation habituelle + 75% ration dinde & citrouille.',
        'Jour 10 et au-delà : 100% recette dinde & citrouille.',
      ],
    },
    faq: [
      {
        question: 'Puis-je remplacer la dinde par du blanc de poulet ?',
        answer: 'Oui, si votre chien n’est pas allergique au poulet. Cependant, de nombreux chiens sensibles développent des intolérances au poulet industriel. La dinde est nettement moins allergène et légèrement plus riche en tryptophane et en taurine.',
      },
      {
        question: 'Puis-je broyer des coquilles d’œufs de ma cuisine ?',
        answer: 'Oui, à condition de bien les rincer, de les stériliser 15 minutes au four à 120°C, puis de les moudre au moulin à café en poudre impalpable comme du sucre glace. Des débris grossiers ne seraient pas assimilés par l’intestin.',
      },
      {
        question: 'Cette recette est-elle complète pour nourrir mon chien toute sa vie ?',
        answer: 'Elle comble parfaitement les besoins d’un chien adulte en protéines, graisses, calcium-phosphore et fibres. Pour une alimentation exclusive sur plusieurs années, il est conseillé d’alterner les protéines (dinde, bœuf, poisson) et d’ajouter occasionnellement un complexe minéralo-vitaminique canin (zinc, iode, vitamine E).',
      },
      {
        question: 'En combien de temps observerai-je une amélioration des selles ?',
        answer: 'La plupart des maîtres constatent des selles nettement plus fermes et moins odorantes en 48 à 72 heures grâce à la digestibilité de la dinde et à la pectine de citrouille.',
      },
    ],
  },

  'raw-barf-beef-duck': {
    tag: 'BARF CRU',
    title: 'Régime BARF Cru Ancestral 80-10-10 Bœuf & Canard',
    heroTitle: 'Protocole BARF Cru Ancestral 80-10-10 Bœuf & Canard',
    shortDesc: 'Un régime cru ancestral biologiquement adapté au ratio strict 80-10-10 : 80% de muscle, 10% d’os crus comestibles et 10% d’abats sécrétoires.',
    summary: 'Conçu pour les chiens adultes sains dotés d’un pH stomacal acide protecteur. Allie viande de bœuf nourri à l’herbe, cœur de bœuf, cous de canard crus entiers (calcium osseux naturel et chondroprotecteurs) et abats nobles (foie et rognons de bœuf pour les vitamines A et B).',
    badge: 'MODÈLE DE PROIE CRUE ANCESTRALE // 80-10-10 ÉQUILIBRE BIOLOGIQUE',
    prepTime: '25 minutes (plus congélation préalable obligatoire de 3 semaines)',
    cookTime: '0 minute (Servi 100% Cru)',
    yieldAmount: 'Env. 1 360 g (3,0 lbs) de préparation crue',
    lifeStage: 'Chiens Adultes en Bonne Santé (Acidité Gastrique Forte)',
    dietStyle: 'Modèle Proie Crue Ancestrale (80% Muscle / 10% Os Comestible / 10% Abats Sécrétoires)',
    macroProfile: {
      caPhosphorusRatio: '1,20 : 1 (Équilibre Naturel par l’Os Comestible de Cou de Canard)',
    },
    keyHighlights: [
      '70% Viande de bœuf à l’herbe maigre (Riche en fer héminique, zinc et vitamine B12)',
      '10% Cœur de bœuf nourri à l’herbe (Organe musculaire dense en taurine et CoQ10)',
      '10% Cous de canard crus charnus (Os spongieux doux apportant calcium et collagène)',
      '5% Foie de bœuf à l’herbe (Le multivitamines naturel : Rétinol vitamine A et folates)',
      '5% Rognon ou rate de bœuf (Abat sécrétoire précieux en sélénium organique et enzymes)',
      'Zéro additif synthétique, zéro féculent, zéro produit glyqué issu d’extrusion thermique',
    ],
    ingredients: [
      {
        name: 'Viande Musculaire Maigre de Bœuf à l’Herbe (85/15)',
        batchAmount: '952 g (2,1 lbs)',
        category: 'Protéine Musculaire Squelettique Principale',
        role: 'Acides aminés denses, carnitine, créatine, zinc et fer héminique hautement assimilables.',
        clinicalBenefit: 'Favorise la masse musculaire maigre, l’oxygénation cellulaire et le métabolisme sans protéines végétales allergisantes.',
      },
      {
        name: 'Cœur de Bœuf (Organe Musculaire en Dés)',
        batchAmount: '136 g (4,8 oz)',
        category: 'Organe Musculaire (Comptabilisé dans les 80% de Muscle)',
        role: 'Classé biologiquement dans le compartiment musculaire des 80% ; apporte une forte concentration de taurine et de CoQ10.',
        clinicalBenefit: 'Protège l’énergie mitochondriale myocardique et prévient les cardiomyopathies dilatées d’origine nutritionnelle.',
      },
      {
        name: 'Cous de Canard Crus Comestibles (Entiers ou Tronçonnés)',
        batchAmount: '136 g (4,8 oz)',
        category: 'Os Charnu Comestible & Cartilage (Catégorie 10%)',
        role: 'Fournit le calcium biologique naturel, phosphore, magnésium, collagène type II et sulfate de chondroïtine.',
        clinicalBenefit: 'La mastication de l’os spongieux détartre les dents, frotte la plaque et libère des endorphines. Ne JAMAIS cuire.',
      },
      {
        name: 'Foie Frais de Bœuf Élevé à l’Herbe',
        batchAmount: '68 g (2,4 oz)',
        category: 'Abat Sécrétoire Majeur (Règle des 5%)',
        role: 'L’organe le plus nutritif au monde : vitamine A préformée (rétinol), vitamine D, B12, cuivre et fer.',
        clinicalBenefit: 'Vital pour la vision et l’immunité. Ne pas dépasser 5% pour écarter tout risque d’hypervitaminose A.',
      },
      {
        name: 'Rognon ou Rate Frais de Bœuf',
        batchAmount: '68 g (2,4 oz)',
        category: 'Abat Sécrétoire Secondaire (Règle des 5%)',
        role: 'Véritable organe de filtration sécrétant du sélénium organique, molybdène, vitamines B et peptides actifs.',
        clinicalBenefit: 'Équilibre les abats ; le foie seul ne possède pas la diversité enzymatique du rein ou de la rate.',
      },
    ],
    executiveRationale: 'La physiologie canine possède un intestin court et un estomac très acide (pH 1,0–2,0 après repas de viande). Cette anatomie neutralise naturellement les bactéries alimentaires et dissout rapidement les os crus charnus et les abats. Le modèle BARF 80-10-10 reproduit fidèlement la proie entière naturelle (lièvre, oiseau, petit gibier), où l’os apporte le calcium structural et les abats forment un multivitamines complet.',
    clinicalDeepDives: [
      {
        title: 'Le Cadre Mathématique et Biologique du 80-10-10',
        description: 'Nourrir uniquement avec de la viande musculaire provoque une déminéralisation du squelette ; trop d’abats cause une diarrhée aqueuse et un excès d’os génère une constipation crayeuse. Le ratio 80-10-10 est le standard de référence : exactement 80% de muscle (dont cœur, gésiers), 10% d’os charnu cru et 10% d’abats (5% foie + 5% rognon/rate).',
        keyPoints: [
          '80% Muscle : Apporte énergie, protéines, acides gras essentiels et eau biologique.',
          '10% Os Comestible : Règle le ratio 1,2:1 Ca:P et raffermit les selles.',
          '5% Foie : Assure le besoin journalier en vitamine A rétinol.',
          '5% Autre Abat : Apporte sélénium, vitamines B et peptides endocriniens.',
        ],
      },
      {
        title: 'Protocole Obligatoire de Congélation de 3 Semaines Antiparasitaire',
        description: 'La viande crue peut abriter des kystes parasitaires (Neospora caninum, Toxoplasma, Sarcocystis). Pour garantir une sécurité vétérinaire parfaite, toutes les viandes et volailles crues DOIVENT subir une congélation à -20°C pendant au moins 21 jours consécutifs avant d’être décongelées et servies.',
        keyPoints: [
          'La congélation à -20°C pendant 21 jours détruit efficacement les parasites tissulaires.',
          'Préserve les enzymes actives, probiotiques vivants et le collagène natif.',
          'Décongélation lente au frigo exclusivement, jamais à température ambiante ni au micro-ondes.',
        ],
      },
      {
        title: 'Règles de Sécurité : Os Charnu Comestible vs Os Porteur Récréatif',
        description: 'Il existe une différence anatomique fondamentale entre les os charnus spongieux comestibles (cous de canard, cous de poulet) et les os porteurs durs récréatifs (fémurs de bœuf). Les cous de canard sont souples et broyés par les molaires. Les os CUITS de toute sorte sont formellement proscrits : la chaleur fige le collagène et rend l’os tranchant et cassant comme du verre.',
        keyPoints: [
          'NE CUUISEZ JAMAIS D’OS. Les os cuits provoquent des perforations digestives mortelles.',
          'Les cous de canard conviennent aux chiens dès 10 kg ; broyez-les pour les races naines.',
          'Surveillez toujours votre chien pendant la mastication d’os crus.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Hygiène et Contrôle de la Congélation Préalable',
        instruction: 'Vérifiez que toutes les viandes, cous et abats ont effectué les 3 semaines obligatoires à -20°C. Démarrez sur une planche à découper non poreuse et propre.',
        criticalTip: 'Lavez-vous les mains et les ustensiles au savon antibactérien pendant 20 secondes avant et après manipulation.',
      },
      {
        step: 2,
        title: 'Pesée Précise sur Balance Numérique',
        instruction: 'Pesez rigoureusement : 952 g de bœuf, 136 g de cœur de bœuf, 136 g de cous de canard, 68 g de foie et 68 g de rognon.',
        criticalTip: 'Ne surdosez pas le foie à l’œil ; un excès au-delà de 10% sur la durée risque d’induire une toxicité en vitamine A.',
      },
      {
        step: 3,
        title: 'Découpe Adaptée à la Mâchoire',
        instruction: 'Coupez le muscle et le cœur en morceaux de 2 à 5 cm selon la taille du chien. Laissez le cou de canard entier pour les moyens/grands chiens (brossage dentaire) ou tronçonnez pour les petits chiens.',
      },
      {
        step: 4,
        title: 'Hachage et Répartition des Abats',
        instruction: 'Hachez finement le foie et le rognon pour qu’ils enrobent les morceaux de viande, évitant ainsi que le chien ne trie son repas.',
      },
      {
        step: 5,
        title: 'Conditionnement et Remise en Congélation',
        instruction: 'Divisez en portions quotidiennes dans des boîtes hermétiques. Remettez immédiatement au congélateur. Descendez la ration du lendemain au réfrigérateur 24 h avant.',
      },
    ],
    portionReference: [
      {
        dogWeight: '4,5 kg (10 lbs)',
        dailyGrams: '110 g par jour (sur la base de 2,5% du poids)',
        dailyKcal: '185 kcal',
        mealsPerDay: '2 repas (55 g par repas)',
        servingNotes: 'Os broyé ou découpé en tout petits tronçons pour éviter l’étouffement.',
      },
      {
        dogWeight: '11,3 kg (25 lbs)',
        dailyGrams: '280 g par jour (sur la base de 2,5% du poids)',
        dailyKcal: '465 kcal',
        mealsPerDay: '2 repas (140 g par repas)',
        servingNotes: 'Donner 1 portion de cou de canard avec viande en morceaux et abats hachés.',
      },
      {
        dogWeight: '22,7 kg (50 lbs)',
        dailyGrams: '570 g par jour (sur la base de 2,5% du poids)',
        dailyKcal: '945 kcal',
        mealsPerDay: '2 repas (285 g par repas)',
        servingNotes: 'Le cou de canard entier assure un excellent nettoyage mécanique des dents.',
      },
      {
        dogWeight: '34,0 kg (75 lbs)',
        dailyGrams: '850 g par jour (sur la base de 2,5% du poids)',
        dailyKcal: '1 410 kcal',
        mealsPerDay: '2 repas (425 g par repas)',
        servingNotes: 'Chiens très actifs (Malinois, Labrador) : augmenter jusqu’à 3% (1 020 g/jour).',
      },
      {
        dogWeight: '45,4 kg (100 lbs)',
        dailyGrams: '1 135 g par jour (sur la base de 2,5% du poids)',
        dailyKcal: '1 880 kcal',
        mealsPerDay: '2 repas (568 g par repas)',
        servingNotes: 'Dogues, Terre-Neuve : Servir en gamelle inox et proscrire le sport intense post-repas.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Congélation (Portions Individuelles)',
        duration: 'Jusqu’à 6 mois à -18°C ou moins',
        instructions: 'Sous vide ou en boîte étanche. Maintenir les 3 semaines de congélation préalable.',
      },
      {
        method: 'Protocole de Décongélation',
        duration: '24 heures au frigo à ≤ 3°C',
        instructions: 'Décongeler sur un plateau en bas du réfrigérateur. Jamais d’eau chaude ni d’air ambiant.',
      },
      {
        method: 'Durée après Décongélation',
        duration: 'Maximum 48 à 72 heures au frais',
        instructions: 'Consommer dans les 2 jours. Toute gamelle entamée non terminée après 20 minutes doit être jetée.',
      },
    ],
    safetyAndPrecautions: {
      calciumRule: 'Ne remplacez pas les cous de canard par de la viande sans os sans ajouter de calcium de substitution. Dans un régime 80-10-10, l’os cru EST l’unique source de calcium. Si vous manquez de cous de canard, remplacez chaque livre (450 g) de viande par 1/2 cuillère à café de poudre de coquille d’œuf.',
      hygieneRule: 'Lavez gamelles, éviers et plans de travail à l’eau chaude savonneuse après chaque service. Ne laissez jamais de viande crue tiédir dans la pièce.',
      contraindications: [
        'Chiens immunodéprimés (sous chimiothérapie ou fortes doses de corticoïdes).',
        'Foyers hébergeant des personnes sévèrement immunodéprimées, des nourrissons de moins de 1 an ou des personnes très âgées.',
        'Chiens atteints de gastrite atrophique avec acidité stomacale insuffisante (pH > 4,0).',
        'Chiens gloutons qui gobent sans mâcher (à moins de broyer entièrement les os au hachoir).',
      ],
      transitionSchedule: [
        'Jours 1–3 : Jeûne de 12 h (nuit), puis introduction de viande cuite douce avec citrouille.',
        'Jours 4–7 : Introduction graduelle de viande crue, cœur et petits morceaux d’os tendre.',
        'Jours 8–10 : Ajout d’éclats de foie (1%), puis montée vers 5% foie et 5% rognon.',
        'Jour 11 et au-delà : Régime 80-10-10 complet.',
      ],
    },
    faq: [
      {
        question: 'Les os crus risquent-ils de perforer l’estomac de mon chien ?',
        answer: 'Les os cuits perforent parce que la chaleur cristallise le collagène. Les os crus charnus (cous de canard, ailes de poulet) restent mous, souples et spongieux. Dans l’estomac du chien, l’acide chlorhydrique puissant (pH 1,0–2,0) dissout la trame osseuse en quelques heures.',
      },
      {
        question: 'Pourquoi les selles de mon chien sont-elles plus petites et plus claires ?',
        answer: 'C’est parfaitement sain. Sans céréales ni amidon non digeste, le chien assimile plus de 90% de son repas. Les minéraux de l’os rendent les selles légèrement plus claires et compactes, ce qui permet de vidanger naturellement les glandes anales lors de la défécation.',
      },
      {
        question: 'Puis-je mélanger croquettes et viande crue dans la même gamelle ?',
        answer: 'Les vétérinaires le déconseillent. Les croquettes chargées en glucides demandent un transit lent et un pH plus élevé, tandis que la viande crue se digère très vite sous forte acidité. Donnez-les lors de repas séparés (ex. croquettes le matin, cru le soir) ou effectuez une transition complète.',
      },
      {
        question: 'Que faire si mon chien avale les cous de canard tout ronds sans mâcher ?',
        answer: 'Tenez une extrémité du cou de canard à l’aide d’une pince de cuisine pendant qu’il ronge l’autre bout pour lui apprendre à mastiquer posément, ou passez les cous dans un hachoir à viande (grille 8 mm) avant de servir.',
      },
    ],
  },

  'superfood-kibble-topper': {
    tag: 'TOPPER SUPER-ALIMENTS',
    title: 'Topper Super-Aliments Antioxydant 80/20 pour Croquettes',
    heroTitle: 'Protocole du Topper Super-Aliments Antioxydant 80/20',
    shortDesc: 'Un complément d’aliments frais validé par des vétérinaires, conçu pour remplacer 20% des croquettes par des antioxydants puissants et des micronutriments protecteurs.',
    summary: 'Fondé sur les recherches en oncologie vétérinaire de l’Université Purdue : remplacer 20% des calories des croquettes par des aliments frais riches en phytonutriments réduit significativement l’inflammation systémique. Associe œufs de plein air pochés, jeunes pousses de brocoli, myrtilles sauvages, bouillon d’os riche en collagène, varech et graines de chanvre.',
    badge: 'PROTOCOLE PURDUE 80/20 D’ALIMENTS FRAIS // DÉFENSE CELLULAIRE ANTIOXYDANTE',
    prepTime: '15 minutes',
    cookTime: '5 minutes (vapeur et pochage)',
    yieldAmount: 'Env. 950 ml (20 à 30 portions quotidiennes)',
    lifeStage: 'Tous Stades de Vie (Adultes, Chiots & Seniors)',
    dietStyle: 'Booster d’Aliments Frais Fonctionnels (80% Croquettes + 20% Topper Frais)',
    macroProfile: {
      caPhosphorusRatio: 'Neutre (Conçu pour compléter les croquettes sans déséquilibrer les minéraux)',
    },
    keyHighlights: [
      '40% Œufs de plein air pochés entiers (Protéine référence valeur biologique 100 & choline)',
      '30% Pousses de brocoli vapeur & myrtilles sauvages (Activation sulforaphane Nrf2 & anthocyanes)',
      '20% Bouillon d’os de bœuf mijoté (Collagène, glycine et étanchéité de la muqueuse intestinale)',
      '10% Varech d’Atlantique bio & graines de chanvre (Iode organique & ratio parfait 3:1 Oméga-6/Oméga-3)',
      'Étude Université Purdue : 20% d’aliments frais réduisent le risque de cancer de vessie jusqu’à 90%',
      'Congélation en bacs à glaçons en silicone pour une distribution quotidienne sans effort pendant 30 jours',
    ],
    ingredients: [
      {
        name: 'Gros Œufs Entiers de Poules Élevées en Plein Air (Pochés Délicatement)',
        batchAmount: '4 gros œufs frais de plein air (env. 200 g)',
        category: 'Protéine Parfaite Bioactive & Choline',
        role: 'Score biologique idéal (100) fournissant tous les acides aminés essentiels, lutéine, zéaxanthine, vitamine D et choline.',
        clinicalBenefit: 'Le pochage léger neutralise l’avidine du blanc (évitant toute carence en biotine) tout en gardant le jaune liquide et bourré de vitamines.',
      },
      {
        name: 'Pousses de Brocoli et Myrtilles Sauvages Bio',
        batchAmount: '1,5 tasse (env. 150 g au total : 75 g de pousses, 75 g de myrtilles)',
        category: 'Phytonutriments de Protection Cellulaire',
        role: 'Les jeunes pousses concentrent jusqu’à 50 fois plus de glucoraphanine (sulforaphane) que le brocoli mûr, activant la voie Nrf2.',
        clinicalBenefit: 'Les anthocyanes des myrtilles sauvages traversent la barrière hémato-encéphalique pour préserver la fonction cognitive et la rétine.',
      },
      {
        name: 'Bouillon d’Os de Bœuf ou Poulet Mijoté (Sans Oignon ni Ail)',
        batchAmount: '1 tasse (env. 240 ml)',
        category: 'Collagène et Glycosaminoglycanes',
        role: 'Source pure de collagène type II dissous, glycine, proline, glucosamine et acide hyaluronique.',
        clinicalBenefit: 'Répare les micro-lésions de la barrière intestinale ("leaky gut"), rehausse l’appétence et lubrifie les articulations raides.',
      },
      {
        name: 'Poudre de Varech Atlantique Bio (Kelp) et Cœurs de Chanvre',
        batchAmount: '2 cuillères à soupe de kelp (8 g) + 2 cuillères de chanvre (20 g)',
        category: 'Minéraux Traces et Lipides GLA Équilibrés',
        role: 'Le varech apporte l’iode organique pour la thyroïde ; le chanvre fournit l’acide gamma-linolénique et un ratio 3:1 Oméga-6/Oméga-3.',
        clinicalBenefit: 'Sublime l’éclat du poil, atténue les démangeaisons printanières et stabilise le métabolisme.',
      },
    ],
    executiveRationale: 'Tous les propriétaires ne peuvent pas s’offrir une alimentation fraîche 100% commerciale pour un chien moyen ou grand. La règle 80/20 est le compromis le plus économique et fondé sur les preuves scientifiques en médecine vétérinaire. Les travaux majeurs de l’Université Purdue ont démontré que supplémenter des croquettes avec des végétaux frais seulement 3 fois par semaine réduisait le risque de carcinome de la vessie de 70% à 90%. Ce topper délivre ces bienfaits sans grever votre budget.',
    clinicalDeepDives: [
      {
        title: 'La Règle 80/20 de l’Université Purdue : La Science Face au Dogme',
        description: 'Les croquettes industrielles subissent une cuisson-extrusion à haute température qui génère des produits de glycation avancée (AGE) et détruit les phytonutriments délicats. En retirant 20% des croquettes de la ration et en comblant ce déficit calorique par des super-aliments vivants, le chien bénéficie d’antioxydants protecteurs sans compromettre l’équilibre de la recette de base.',
        keyPoints: [
          'Diminue l’inflammation chronique et les dommages oxydatifs de l’ADN.',
          'Conserve l’équilibre de la ration (rester sous 20% évite toute dilution nutritionnelle).',
          'Coûte une fraction du prix d’un régime 100% frais pour ~80% des bénéfices santé.',
        ],
      },
      {
        title: 'Activation du Sulforaphane et Voie Nrf2 de Défense Cellulaire',
        description: 'Le sulforaphane est le plus puissant activateur naturel de la voie Nrf2-ARE chez les mammifères, incitant le foie et les tissus du chien à fabriquer leurs propres enzymes antioxydantes (glutathion, catalase, SOD). Pour libérer le sulforaphane, les pousses de brocoli doivent être cuites à la vapeur 90 secondes seulement ou mixées.',
        keyPoints: [
          'Les pousses de brocoli contiennent 20 à 50 fois plus de glucoraphanine que les têtes mûres.',
          'Franchit la barrière hémato-encéphalique protégeant le cerveau canin vieillissant.',
          'Soutient la détoxification hépatique de phase II face aux pesticides environnementaux.',
        ],
      },
      {
        title: 'Avidine et Biotine de l’Œuf : Pourquoi le Pochage Doux Triomphe',
        description: 'Le blanc d’œuf cru renferme de l’avidine, une glycoprotéine qui piège la biotine (vitamine B7) et bloque son absorption. Donné cru en grande quantité, il peut provoquer pelage terne et dermatite. À l’inverse, durcir l’œuf au-delà détruit la lutéine. Le pochage doux (3 minutes dans l’eau frémissante) neutralise l’avidine du blanc tout en conservant le jaune liquide et vivant.',
        keyPoints: [
          'Inactive l’avidine tout en préservant le jaune doré liquide et disponible.',
          'Apporte de la choline pour la transmission neuronale et le foie.',
          'Profil biologique optimal avec un score en acides aminés de 100.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Pochage Délicat des Œufs',
        instruction: 'Faites chauffer une casserole d’eau à frémissement doux (environ 85°C ; petites bulles sans gros bouillons). Cassez les 4 œufs dans l’eau. Laissez pocher exactement 3 minutes jusqu’à ce que le blanc coagule mais que le jaune reste liquide. Égouttez avec une écumoire.',
        criticalTip: 'N’ajoutez ni sel ni vinaigre dans l’eau de pochage.',
      },
      {
        step: 2,
        title: 'Vapeur Flash pour les Pousses de Brocoli',
        instruction: 'Déposez les pousses dans un panier vapeur au-dessus de l’eau bouillante pendant 90 secondes, puis retirez aussitôt pour stopper la cuisson et préserver la myrosinase.',
      },
      {
        step: 3,
        title: 'Tiédir le Bouillon d’Os',
        instruction: 'Faites tiédir 1 tasse de bouillon d’os de bœuf non assaisonné (sous 40°C). Assurez-vous qu’il ne contienne ni oignon, ni ail, ni poireau, ni sel.',
      },
      {
        step: 4,
        title: 'Mixage et Émulsion',
        instruction: 'Dans un blender, associez les œufs pochés, les pousses vapeur, les myrtilles sauvages, le bouillon tiède, le varech et le chanvre. Mixez 30 à 45 secondes pour obtenir un smoothie violet-vert crémeux.',
      },
      {
        step: 5,
        title: 'Congélation en Bacs à Glaçons en Silicone',
        instruction: 'Versez la préparation dans des bacs à glaçons en silicone (environ 2 cuillères à soupe ou 30 ml par alvéole). Congelez pendant 4 à 6 heures, puis transférez les galets congelés dans un sac hermétique daté.',
      },
    ],
    portionReference: [
      {
        dogWeight: 'Chiens Nains (2–5 kg / 5–12 lbs)',
        dailyGrams: '1 cuillère à soupe par jour (env. 15 g / 1/2 glaçon congelé)',
        dailyKcal: '15–20 kcal',
        mealsPerDay: '1–2 repas',
        servingNotes: 'Diminuer les croquettes de 1 à 2 cuillères à soupe par jour.',
      },
      {
        dogWeight: 'Petits Chiens (6–11 kg / 13–25 lbs)',
        dailyGrams: '2 cuillères à soupe par jour (env. 30 g / 1 glaçon entier)',
        dailyKcal: '35 kcal',
        mealsPerDay: '1–2 repas',
        servingNotes: 'Diminuer les croquettes d’environ 1/8 à 1/4 de tasse par jour.',
      },
      {
        dogWeight: 'Chiens Moyens (12–23 kg / 26–50 lbs)',
        dailyGrams: '4 cuillères à soupe par jour (env. 60 g / 2 glaçons)',
        dailyKcal: '70 kcal',
        mealsPerDay: '2 repas (1 glaçon par repas)',
        servingNotes: 'Diminuer les croquettes d’environ 1/3 à 1/2 tasse par jour.',
      },
      {
        dogWeight: 'Grands Chiens (24–36 kg / 51–80 lbs)',
        dailyGrams: '6 cuillères à soupe par jour (env. 90 g / 3 glaçons)',
        dailyKcal: '105 kcal',
        mealsPerDay: '2 repas (1,5 glaçon par repas)',
        servingNotes: 'Diminuer les croquettes d’environ 1/2 à 2/3 de tasse par jour.',
      },
      {
        dogWeight: 'Chiens Géants (37+ kg / 81+ lbs)',
        dailyGrams: '8 cuillères à soupe par jour (env. 120 g / 4 glaçons)',
        dailyKcal: '140 kcal',
        mealsPerDay: '2 repas (2 glaçons par repas)',
        servingNotes: 'Diminuer les croquettes d’environ 3/4 à 1 tasse par jour.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Conservation Glaçons au Congélateur',
        duration: 'Jusqu’à 4 mois à -18°C',
        instructions: 'Dès que les glaçons sont solides, placez-les dans un sachet Ziploc. Bloque l’oxydation des vitamines.',
      },
      {
        method: 'Décongélation et Service',
        duration: '15 min à température ambiante ou direct sur croquettes tièdes',
        instructions: 'Posez le glaçon directement sur les croquettes tièdes (le bouillon fond en une sauce appétissante) ou laissez décongeler 15 min.',
      },
      {
        method: 'Conservation au Réfrigérateur (Préparation Liquide)',
        duration: 'Jusqu’à 3 à 4 jours à ≤ 3°C',
        instructions: 'Conserver la bouteille en verre au frais. Bien agiter avant d’arroser les croquettes.',
      },
    ],
    safetyAndPrecautions: {
      calciumRule: 'Puisque ce topper ne remplace que 15% à 20% des calories quotidiennes, il NE NÉCESSITE AUCUN ajout de calcium. Les croquettes de base couvrent déjà l’intégralité des besoins en calcium et phosphore de votre chien.',
      hygieneRule: 'Veillez à ce que votre bouillon soit strictement garanti sans oignon, ail, échalote ni ciboulette (tous toxiques pour le chien par anémie hémolytique à corps de Heinz).',
      contraindications: [
        'Chiens souffrant de pancréatite aiguë sévère ou d’intolérance extrême aux lipides (utilisez alors uniquement les blancs d’œufs et le bouillon maigre).',
        'Chiens diagnostiqués avec une hyperthyroïdie ou sensibilité à l’iode (diminuer ou omettre le varech).',
        'Ne dépassez jamais 20% des calories des croquettes d’un chiot en croissance rapide (les chiots ont besoin de ratios stricts pour leurs articulations).',
      ],
      transitionSchedule: [
        'Jours 1–2 : Commencer par 1/2 cuillère à café sur les croquettes pour tester la tolérance.',
        'Jours 3–4 : Monter à la moitié de la portion recommandée.',
        'Jour 5 et au-delà : Servir la portion complète en réduisant le volume de croquettes de 20%.',
      ],
    },
    faq: [
      {
        question: 'Ce topper risque-t-il de faire grossir mon chien ?',
        answer: 'Non, si vous appliquez scrupuleusement la règle 80/20 ! Le principe : pour 50 calories de topper ajoutées, vous DEVEZ retrancher 50 calories de croquettes (environ 1/8 de tasse). Si vous vous contentez d’ajouter le topper par-dessus la gamelle pleine, le chien prendra du poids.',
      },
      {
        question: 'Puis-je utiliser des myrtilles sauvages surgelées ?',
        answer: 'Absolument ! Les myrtilles sauvages surgelées sont souvent supérieures car cueillies à maturité et surgelées sur place, préservant leurs anthocyanes. Plus petites que les myrtilles de culture, elles offrent deux fois plus de pigments antioxydants.',
      },
      {
        question: 'Que faire si mon chien lape le topper et boude ses croquettes ?',
        answer: 'Ajoutez une larme d’eau tiède ou de bouillon et mélangez soigneusement pour que le topper enrobe chaque croquette d’une pellicule savoureuse. Le chien mangera l’ensemble sans trier.',
      },
      {
        question: 'Puis-je donner ce topper à un chiot ?',
        answer: 'Oui, mais limitez-le à 10% des calories journalières chez les chiots de moins de 12 mois. Le chiot en croissance doit puiser l’essentiel de son énergie dans son alimentation pour chiots au ratio calcium-phosphore calibré.',
      },
    ],
  },
};
