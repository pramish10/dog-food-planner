import type { RecipeBlueprint } from './types';

export const itBlueprints: RecipeBlueprint[] = [
  // 1. TURKEY & PUMPKIN BLUEPRINT
  {
    slug: 'turkey-pumpkin-maintenance',
    name: 'Blueprint Tacchino Magro & Zucca per il Mantenimento del Cane Adulto',
    shortDesc: 'Una ricetta clinica proporzionata 65/10/10/8/4/3 formulata per cani adulti con tacchino magro 93/7, taurina da organi cardiaci, purea di zucca prebiotica e calcio bilanciato.',
    badge: 'Mantenimento Cane Adulto',
    targetAudience: 'Cani Adulti (1-7 Anni) // Mantenimento Quotidiano & Stomaco Sensibile',
    colorTheme: '#0070f3',
    macroProfile: {
      proteinDm: '48.2%',
      fatDm: '22.8%',
      carbsDm: '13.4%',
      moisture: '72.5%',
      kcalPerKg: '1.220 kcal/kg (ca. 34.6 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (Intervallo Consigliato NRC: 1.1:1 – 1.4:1)',
    },
    ingredients: [
      {
        name: 'Carne Macinata di Tacchino Magro (93% magro / 7% grasso)',
        percentage: 65,
        category: 'Carne Muscolare Primaria',
        role: 'Amminoacidi biodisponibili essenziali per la sintesi proteica e muscolare',
        clinicalBenefit: 'Proteina altamente digeribile a bassissimo potenziale allergenico per una digestione ottimale.',
        color: '#0070f3',
      },
      {
        name: 'Cuori e Ventrigli di Tacchino',
        percentage: 10,
        category: 'Organi Muscolari & CoQ10',
        role: 'Taurina naturale concentrata, CoQ10, ferro eme e complesso vitaminico B12',
        clinicalBenefit: 'Supporta e preserva la funzione miocardica prevenendo la cardiomiopatia dilatativa (DCM).',
        color: '#7928ca',
      },
      {
        name: 'Purea di Zucca Biologica 100% Pura',
        percentage: 10,
        category: 'Fibra Solubile Prebiotica',
        role: 'Pectina solubile fermentabile che stimola la produzione di acidi grassi a catena corta (SCFA)',
        clinicalBenefit: 'Regolatore a doppia azione: stabilizza le feci molli e previene la stitichezza.',
        color: '#f5a623',
        affiliateKey: 'pumpkinPuree',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: 'Spinaci Novelli e Zucchine al Vapore',
        percentage: 8,
        category: 'Fitonutrienti & Verdure Verdi',
        role: 'Fornisce folati, vitamina K1, potassio, magnesio e luteina antiossidante',
        clinicalBenefit: 'La cottura delicata a vapore rompe le pareti di cellulosa per massimizzare l\'assimilazione.',
        color: '#10b981',
      },
      {
        name: 'Polvere di Guscio d\'Uovo & Kelp Marino',
        percentage: 4,
        category: 'Minerale Essenziale & Bilanciatore Ca:P',
        role: 'Apporta ~38% di calcio elementare per neutralizzare l\'eccesso di fosforo della carne a 1.25:1',
        clinicalBenefit: 'CRUCIALE: La carne disossata ha un rapporto Ca:P invertito di 1:20. Il calcio previene la demineralizzazione scheletrica.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Olio di Salmone Selvatico dell\'Alaska (A Freddo)',
        percentage: 3,
        category: 'Omega-3 Marini EPA/DHA',
        role: 'Acidi grassi a catena lunga EPA e DHA per modulare le vie infiammatorie cellulari',
        clinicalBenefit: 'Nutre la barriera cutanea, allevia pruriti e protegge l\'integrità cartilaginea.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Una formulazione fresca completa bilanciata per garantire il perfetto mantenimento del cane adulto proteggendo la salute enterica. Preparata con tacchino magro 93/7, taurina cardiaca naturale da cuori, pectina prebiotica da purea di zucca e calcio da gusci d\'uovo rigorosamente calibrato.',
    clinicalRationale: [
      {
        title: '1. Perché Tacchino Magro 93/7 invece di Pollo o Manzo?',
        description:
          'Pollo e manzo costituiscono i due allergeni più diffusi nel cane. Il tacchino magro offre una proteina nobile altamente assimilabile con oltre il 94% di digeribilità e carico pancreatico minimo.',
        points: [
          'Valore biologico elevato con il 100% degli amminoacidi essenziali raccomandati da NRC.',
          'Basso tenore di lipidi per prevenire episodi di pancreatite acuta.',
          'Scelta eccellente per soggetti con apparato digerente reattivo o intolleranze pregresse.',
        ],
      },
      {
        title: '2. Protezione Cardiaca: Vie della Taurina e CoQ10 da Organi',
        description:
          'La sola carne muscolare non soddisfa il fabbisogno di taurina del miocardio canino. L\'inclusione del 10% di cuori e ventrigli garantisce un apporto bioattivo naturale di taurina e CoQ10 a difesa del cuore.',
        points: [
          'Taurina organica biodisponibile senza dipendere da additivi chimici di sintesi.',
          'Ferro eme bioassimilabile e coenzima Q10 per l\'energia cellulare miocardica.',
          'Previene attivamente la cardiomiopatia dilatativa nutrizionale (DCM).',
        ],
      },
      {
        title: '3. Precisione del Rapporto Calcio-Fosforo (Regola d\'Oro 1.25:1)',
        description:
          'Tutta la carne disossata presenta un rapporto invertito patologico tra calcio e fosforo pari a 1:20. Diete casalinghe prive di calcio demineralizzano le ossa. La polvere microfine di guscio d\'uovo ristabilisce il rapporto ideale 1.25:1.',
        points: [
          'Fornisce il 38% di calcio elementare ad altissimo assorbimento.',
          'Il kelp naturale apporta micro-dosi di iodio organico per il metabolismo tiroideo.',
          'Garantisce una densità minerale ossea e dentale solida per tutta la vita adulta.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Preparazione e Taglio',
        instruction: 'Igienizza le superfici di lavoro. Taglia i cuori e ventrigli di tacchino in cubetti da 0,5 cm.',
      },
      {
        step: 2,
        title: 'Cottura Dolce a Fuoco Basso (<82°C)',
        instruction: 'Cuoci il macinato di tacchino e gli organi con 1/2 bicchiere d\'acqua per 8-10 min fino a completa perdita della tonalità rosata. Non rosolare.',
        criticalTip: 'Non friggere ad alte temperature per evitare la formazione di composti tossici (AGEs).',
      },
      {
        step: 3,
        title: 'Cottura a Vapore e Purea di Verdure',
        instruction: 'Cuoci le zucchine e gli spinaci al vapore per 4-5 min. Frulla nel robot da cucina insieme alla purea di zucca per rompere la cellulosa.',
      },
      {
        step: 4,
        title: 'Raffreddamento Obbligatorio (<38°C)',
        instruction: 'Unisci le verdure alla carne cotta. Lascia raffreddare completamente a temperatura ambiente prima di aggiungere gli integratori.',
        criticalTip: 'Non aggiungere mai l\'olio di salmone al cibo caldo: il calore ossida all\'istante gli acidi grassi Omega-3.',
      },
      {
        step: 5,
        title: 'Integrazione a Freddo dei Nutrienti',
        instruction: 'Aggiungi la polvere di guscio d\'uovo, il kelp e l\'olio di salmone dell\'Alaska a freddo, mescolando con cura per 2 minuti.',
      },
      {
        step: 6,
        title: 'Pesatura e Porzionamento',
        instruction: 'Pesa le razioni giornaliere con bilancia da cucina digitale. Conserva in contenitori di vetro ermetici o sacchetti da freezer.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Frigorifero',
        duration: 'Massimo 3-4 Giorni',
        instructions: 'Contenitore ermetico di vetro a temperatura inferiore a 3°C.',
      },
      {
        method: 'Congelatore',
        duration: 'Fino a 90 Giorni',
        instructions: 'Sacchetti sottovuoto o contenitori ermetici privi d\'aria.',
      },
      {
        method: 'Scongelamento',
        duration: 'In Frigorifero per 24h',
        instructions: 'Scongela in frigorifero il giorno prima. Mai al microonde ad alta potenza.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '280 – 320 kcal', dailyGramsTotal: '240 g / giorno', mainProtein: '156 g', organMeat: '24 g', produceAndCarbs: '43 g', supplements: '17 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '550 – 620 kcal', dailyGramsTotal: '480 g / giorno', mainProtein: '312 g', organMeat: '48 g', produceAndCarbs: '86 g', supplements: '34 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '950 – 1.080 kcal', dailyGramsTotal: '850 g / giorno', mainProtein: '553 g', organMeat: '85 g', produceAndCarbs: '153 g', supplements: '59 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.320 – 1.480 kcal', dailyGramsTotal: '1.180 g / giorno', mainProtein: '767 g', organMeat: '118 g', produceAndCarbs: '212 g', supplements: '83 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NON indicato per cuccioli di taglia grande in rapida crescita (<12 mesi) senza bilanciamento pediatrico di calcio.',
        'NON somministrare a cani con insufficienza renale cronica avanzata (stadio IRIS 3-4) senza controllo specialistico del fosforo.',
      ],
      transitionSteps: [
        'Giorni 1–3: 25% Ricetta Casalinga + 75% Cibo Attuale',
        'Giorni 4–6: 50% Ricetta Casalinga + 50% Cibo Attuale',
        'Giorni 7–9: 75% Ricetta Casalinga + 25% Cibo Attuale',
        'Giorno 10+: 100% Ricetta Casalinga Completa',
      ],
      calciumRule:
        'REGOLA CLINICA: Non eliminare mai il guscio d\'uovo o il calcio. La carne disossata pura causa ipocalcemia e demineralizzazione ossea grave nel cane.',
    },
    faq: [
      {
        question: 'Posso sostituire il tacchino macinato con il pollo macinato?',
        answer: 'Sì, a condizione di utilizzare petto di pollo magro con profilo lipidico equivalente. Il pollo presenta un tasso di reattività allergica leggermente superiore rispetto al tacchino.',
      },
      {
        question: 'Come posso somministrare questa ricetta al mio cane che mangia crocchette?',
        answer: 'Esegui una transizione graduale in 7-10 giorni aumentando del 25% ogni 3 giorni la percentuale di cibo fresco casalingo.',
      },
      {
        question: 'Cosa posso usare al posto della polvere di guscio d\'uovo?',
        answer: 'Puoi utilizzare carbonato di calcio puro USP (farmaceutico) o citrato di calcio, dosando accuratamente per apportare circa 1.000 mg di calcio elementare ogni 500 g di carne cotta.',
      },
    ],
  },

  // 2. BEEF & SWEET POTATO BLUEPRINT
  {
    slug: 'beef-sweet-potato-vitality',
    name: 'Blueprint Manzo Magro & Patata Dolce per Vitalità e Performance',
    shortDesc: 'Una ricetta ad alta densità energetica 60/12/12/8/5/3 formulata per cani attivi con manzo 90/10, fegato ricco di vitamina A, patata dolce a basso indice glicemico e zinco naturale.',
    badge: 'Vitalità & Cani Attivi',
    targetAudience: 'Cani Attivi, da Lavoro o che Necessitano di Incremento Muscolare (1-7 Anni)',
    colorTheme: '#7928ca',
    macroProfile: {
      proteinDm: '46.5%',
      fatDm: '25.4%',
      carbsDm: '16.8%',
      moisture: '71.2%',
      kcalPerKg: '1.340 kcal/kg (ca. 38.0 kcal/oz)',
      caPhosphorusRatio: '1.28 : 1.0 (Intervallo Consigliato NRC: 1.1:1 – 1.4:1)',
    },
    ingredients: [
      {
        name: 'Carne Macinata di Manzo Magro (90% magro / 10% grasso)',
        percentage: 60,
        category: 'Carne Muscolare Densa',
        role: 'Fornisce mioglobina, creatina naturale, carnitina e zinco ad alto valore biologico',
        clinicalBenefit: 'Supporta l\'ipertrofia muscolare e il ripristino delle riserve energetiche nei cani attivi.',
        color: '#7928ca',
      },
      {
        name: 'Fegato di Manzo Nutrito a Erba',
        percentage: 12,
        category: 'Organo Nobile Filtrante',
        role: 'Concentrato naturale di vitamina A preformata, rame, ferro biodisponibile e colina',
        clinicalBenefit: 'Dona lucentezza al manto, sostiene la visione crepuscolare e il metabolismo epatico.',
        color: '#9333ea',
      },
      {
        name: 'Patata Dolce Arancione Cotta al Forno',
        percentage: 12,
        category: 'Carboidrato Complesso a Rilascio Lento',
        role: 'Carboidrati complessi a basso indice glicemico con beta-carotene e fibre prebiotiche',
        clinicalBenefit: 'Rilascia glucosio costante nel sangue senza picchi insulinici destabilizzanti.',
        color: '#f5a623',
      },
      {
        name: 'Carote e Broccoli Scottati',
        percentage: 8,
        category: 'Crocifere & Carotenoidi',
        role: 'Apporto di sulforafano cellulare, luteina, zeaxantina e vitamina C termostabile',
        clinicalBenefit: 'Le crocifere leggermente scottate sostengono le difese antiossidanti dell\'organismo.',
        color: '#10b981',
      },
      {
        name: 'Fosfato Bicalcico & Guscio d\'Uovo',
        percentage: 5,
        category: 'Matrice Ossea e Calcio Minerale',
        role: 'Bilancia l\'elevato contenuto di fosforo della carne rossa mantenendo il rapporto a 1.28:1',
        clinicalBenefit: 'Rafforza la densità minerale ossea e previene l\'iperparatiroidismo secondario.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Olio di Salmone Selvatico dell\'Alaska (A Freddo)',
        percentage: 3,
        category: 'Omega-3 Marini EPA/DHA',
        role: 'Acidi grassi EPA e DHA per la protezione cellulare articolare e cutanea',
        clinicalBenefit: 'Protegge le articolazioni sollecitate da sforzo fisico e dona elasticità alla cute.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Una ricetta potente formulata per cani ad alta attività fisica, sportivi o con fabbisogni calorici elevati. Costruita su manzo magro 90/10, fegato ricco di vitamina A, patata dolce per energia prolungata e calcio minerale bilanciato.',
    clinicalRationale: [
      {
        title: '1. Sviluppo e Resistenza Muscolare con Creatina Naturale',
        description:
          'Il manzo magro combinato con fegato offre una densità ineguagliabile di zinco organico (58 mg/kg DM) e ferro eme, essenziali per la sintesi proteica e l\'ossigenazione muscolare durante l\'attività fisica.',
        points: [
          'Fornisce carnitina naturale per il metabolismo dei grassi a scopo energetico.',
          'Ferro eme ad altissima biodisponibilità per l\'efficienza del trasporto di ossigeno.',
          'Sostiene la rigenerazione tissutale dopo l\'esercizio intenso.',
        ],
      },
      {
        title: '2. Calibrazione Millimetrica di Vitamina A da Fegato',
        description:
          'Il fegato bovino è il multivitaminico più potente in natura, ma richiede un controllo rigoroso. Il nostro dosaggio calibrato al 12% rispetta perfettamente i massimali di sicurezza AAFCO.',
        points: [
          'Apporta retinolo preformato senza rischio di tossicità epatica.',
          'Rame organico chelato per la pigmentazione e salute del pelo.',
          'Colina per l\'integrità delle membrane cellulari epatiche e cerebrali.',
        ],
      },
      {
        title: '3. Carboidrati Complessi a Lenta Cinetica di Rilascio',
        description:
          'La patata dolce cotta garantisce una lenta degradazione dell\'amido, stabilizzando il glicogeno muscolare senza alterare la sensibilità insulinica del cane.',
        points: [
          'Zero picchi di glicemia e sazietà prolungata.',
          'Fibre solubili che nutrono i microrganismi benefici del colon.',
          'Beta-carotene antiossidante per il sistema immunitario.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Preparazione del Fegato e del Manzo',
        instruction: 'Igienizza le superfici. Taglia il fegato bovino in piccoli tocchetti da 0,5 cm.',
      },
      {
        step: 2,
        title: 'Cottura Delicata della Carne (<82°C)',
        instruction: 'Salta il macinato di manzo e il fegato a fuoco medio-basso per 8-10 minuti con 1/2 bicchiere d\'acqua finché non è più crudo.',
        criticalTip: 'Scolate l\'eventuale grasso in eccesso se il cane necessita di una dieta a calorie controllate.',
      },
      {
        step: 3,
        title: 'Cottura a Vapore di Patata Dolce e Broccoli',
        instruction: 'Fai bollire o cuoci al vapore la patata dolce fino a renderla morbidissima. Schiaccia con le verdure prima di incorporarle.',
      },
      {
        step: 4,
        title: 'Fase di Raffreddamento Completo (<38°C)',
        instruction: 'Mescola le verdure e la patata dolce con la carne. Lascia raffreddare completamente sotto i 38°C per non danneggiare i nutrienti.',
        criticalTip: 'Non aggiungere mai integratori a caldo: gli acidi grassi e le vitamine sono termosensibili.',
      },
      {
        step: 5,
        title: 'Integrazione di Calcio e Olio di Salmone',
        instruction: 'Aggiungi il guscio d\'uovo polverizzato e l\'olio di salmone selvatico a freddo, mescolando vigorosamente per 2 minuti.',
      },
      {
        step: 6,
        title: 'Pesatura e Stoccaggio Monoporzione',
        instruction: 'Pesa le razioni su bilancia da cucina e conserva in frigo (fino a 3-4 giorni) o congelatore suddivise in sacchetti monoporzione.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Frigorifero',
        duration: 'Massimo 3-4 Giorni',
        instructions: 'Conserva a 2-4°C in contenitori di vetro ermetici.',
      },
      {
        method: 'Congelatore',
        duration: 'Fino a 90 Giorni',
        instructions: 'Congela in monoporzioni a -18°C con aria rimossa.',
      },
      {
        method: 'Scongelamento',
        duration: 'In Frigorifero per 24h',
        instructions: 'Scongela gradualmente in frigo. Non scaldare al microonde ad alta potenza.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '290 – 330 kcal', dailyGramsTotal: '220 g / giorno', mainProtein: '132 g', organMeat: '26 g', produceAndCarbs: '44 g', supplements: '18 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '580 – 660 kcal', dailyGramsTotal: '440 g / giorno', mainProtein: '264 g', organMeat: '53 g', produceAndCarbs: '88 g', supplements: '35 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '980 – 1.120 kcal', dailyGramsTotal: '780 g / giorno', mainProtein: '468 g', organMeat: '94 g', produceAndCarbs: '156 g', supplements: '62 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.380 – 1.540 kcal', dailyGramsTotal: '1.090 g / giorno', mainProtein: '654 g', organMeat: '131 g', produceAndCarbs: '218 g', supplements: '87 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'Cani con allergia o ipersensibilità accertata alle proteine bovine.',
        'Insufficienza Epatica grave con accumulo di rame o shunt portosistemico.',
        'Cani sedentari in sovrappeso: densità calorica elevata; calcolare bene il fabbisogno calorico effettivo.',
      ],
      transitionSteps: [
        'Giorni 1–3: 25% Ricetta Casalinga + 75% Cibo Attuale',
        'Giorni 4–6: 50% Ricetta Casalinga + 50% Cibo Attuale',
        'Giorni 7–9: 75% Ricetta Casalinga + 25% Cibo Attuale',
        'Giorno 10+: 100% Ricetta Casalinga Completa',
      ],
      calciumRule:
        'REGOLA CLINICA: Il fosforo elevato della carne rossa deve essere neutralizzato con il calcio in rapporto 1.28:1 per prevenire la demineralizzazione ossea.',
    },
    faq: [
      {
        question: 'Il mio cane sedentario può mangiare questa ricetta al manzo?',
        answer: 'Sì, ma dato l\'apporto calorico più elevato (1.340 kcal/kg), riduci la quantità totale giornaliera di circa il 15-20% rispetto alla tabella standard.',
      },
      {
        question: 'Posso cuocere la carne al sangue?',
        answer: 'Una leggera scottatura garantisce la sicurezza microbiologica da salmonella ed E. coli preservando la morbidezza degli amminoacidi.',
      },
      {
        question: 'Se non trovo il fegato di manzo cosa posso usare?',
        answer: 'Puoi sostituirlo con fegato di vitello o fegato di pollo, mantenendo la stessa identica percentuale (12%) per preservare il corretto apporto di micronutrienti.',
      },
    ],
  },

  // 3. SALMON & QUINOA BLUEPRINT
  {
    slug: 'salmon-quinoa-joint-coat',
    name: 'Blueprint Salmone Selvaggio & Quinoa per Articolazioni e Pelo Lucido',
    shortDesc: 'Una formula terapeutica ricca di Omega-3 60/15/10/8/4/3 formulata per articolazioni, mobilità e ringiovanimento del pelo con salmone, pesce bianco, quinoa e cozze verdi della Nuova Zelanda.',
    badge: 'Articolazioni & Pelo Lucido',
    targetAudience: 'Cani con Rigidità Articolare, Prurito Cutaneo o Cani Senior (>7 Anni)',
    colorTheme: '#06b6d4',
    macroProfile: {
      proteinDm: '44.8%',
      fatDm: '24.2%',
      carbsDm: '18.5%',
      moisture: '73.1%',
      kcalPerKg: '1.260 kcal/kg (ca. 35.7 kcal/oz)',
      caPhosphorusRatio: '1.22 : 1.0 (Intervallo Consigliato NRC: 1.1:1 – 1.4:1)',
    },
    ingredients: [
      {
        name: 'Filetto di Salmone Selvaggio e Merluzzo Nordico',
        percentage: 60,
        category: 'Pesce Selvaggio Ricco di Omega-3',
        role: 'Fornisce proteine altamente digeribili, astaxantina e acidi grassi EPA/DHA concentrati',
        clinicalBenefit: 'Inibisce le citochine pro-infiammatorie responsabili di artrite e dermatiti allergiche.',
        color: '#06b6d4',
      },
      {
        name: 'Quinoa Biologica Cotta (Senza Glutine)',
        percentage: 15,
        category: 'Pseudo-cereale Ipoallergenico',
        role: 'Apporta tutti i 9 amminoacidi essenziali, magnesio, manganese e fibre prebiotiche',
        clinicalBenefit: 'Priva di glutine e mais, fornisce energia pulita e protegge l\'integrità della mucosa gastrica.',
        color: '#f5a623',
        affiliateKey: 'quinoa',
        affiliateUrl: 'https://amzn.to/4bfQh1h',
      },
      {
        name: 'Mirtilli Neri Selvatici & Zucca al Vapore',
        percentage: 10,
        category: 'Polifenoli Antiossidanti',
        role: 'Antocianine ad altissimo potere ORAC che proteggono le cellule dall\'ossidazione cronica',
        clinicalBenefit: 'Neutralizza i radicali liberi a livello sinoviale e rallenta la degradazione delle cartilagini.',
        color: '#7928ca',
      },
      {
        name: 'Cavolo Nero (Kale) e Zucchine al Vapore',
        percentage: 8,
        category: 'Verdure a Foglia Scuro',
        role: 'Fornisce vitamina K, folati bioattivi, calcio vegetale e clorofilla purificante',
        clinicalBenefit: 'Stimola i processi fisiologici di disintossicazione cellulare epatica e renale.',
        color: '#10b981',
      },
      {
        name: 'Calcio da Alghe Marine (Lithothamnium Calcareum)',
        percentage: 4,
        category: 'Calcio Marino Bioattivo',
        role: 'Calcio altamente biodisponibile arricchito naturalmente con 72 oligoelementi marini',
        clinicalBenefit: 'Favorisce la rigenerazione della matrice ossea senza appesantire il sistema renale.',
        color: '#e11d48',
        affiliateKey: 'kelp',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Olio di Semi di Canapa & Cozza Verde Neozelandese',
        percentage: 3,
        category: 'Condroprotettori & GAG Naturali',
        role: 'Glucosamina, condroitina naturale, acido eicosatetraenoico (ETA) e GLA',
        clinicalBenefit: 'Lubrifica le capsule articolari, attenua il dolore da osteoartrosi e rinnova il pelo opaco.',
        color: '#10b981',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Una formulazione fresca specifica per ripristinare la fluidità articolare e la salute cutanea nei cani adulti e senior. Unisce salmone selvaggio, quinoa senza glutine, mirtilli ricchi di antocianine e cozze verdi neozelandesi con acidi grassi EPA/DHA biodisponibili.',
    clinicalRationale: [
      {
        title: '1. Acidi Grassi ETA e Modulazione Antiossidante Cartilaginea',
        description:
          'La cozza verde della Nuova Zelanda apporta acido eicosatetraenoico (ETA), un raro Omega-3 che inibisce la via ciclossigenasica riducendo il dolore osteoartrosico senza irritare lo stomaco.',
        points: [
          'GAG naturali (glicosaminoglicani) per stimolare la rigenerazione cartilaginea.',
          'Rallenta la progressione dell\'usura articolare nei cani anziani.',
          'Migliora la fluidità della deambulazione in 3-4 settimane di somministrazione costante.',
        ],
      },
      {
        title: '2. Astaxantina e Rinnovamento della Barriera Epidermica',
        description:
          'Il salmone selvaggio apporta astaxantina pura, un carotenoide 6.000 volte più potente della vitamina C nel contrastare lo stress ossidativo a carico della cute.',
        points: [
          'Idrata a fondo il derma alleviando forfora e dermatiti pruriginose.',
          'Conferisce lucentezza e densità al sottopelo opaco o diradato.',
          'Rinforza la barriera immunitaria cutanea contro i patogeni ambientali.',
        ],
      },
      {
        title: '3. Calcio Marino Poroso da Alghe Lithothamnium',
        description:
          'A differenza del semplice calcare, il calcio marino vegetale possiede una struttura porosa a nido d\'ape che garantisce oltre il 96% di biodisponibilità ionica enterica.',
        points: [
          'Apporta 72 oligoelementi marini compresi magnesio, boro e silicio.',
          'Non sovraccarica il filtrato glomerulare renale.',
          'Mantiene il bilanciamento scheletrico Ca:P esattamente a 1.22:1.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Cottura Delicata del Pesce a Vapore o Poché',
        instruction: 'Cuoci il salmone e il merluzzo a fuoco lento con pochissima acqua per 7-8 minuti. Controlla accuratamente l\'assenza totale di lische prima dell\'unione con gli altri ingredienti.',
        criticalTip: 'Verifica con le dita che non vi siano lische residue pericolose prima di comporre la ciotola.',
      },
      {
        step: 2,
        title: 'Cottura e Risciacquo della Quinoa',
        instruction: 'Sciacqua accuratamente la quinoa per eliminare le saponine naturali amarognole. Cuoci in acqua bollente per 15 minuti fino a renderla morbida e digeribile.',
      },
      {
        step: 3,
        title: 'Cottura a Vapore di Cavolo Nero e Mirtilli',
        instruction: 'Cuoci il cavolo nero a vapore per renderlo tenero e schiaccia delicatamente i mirtilli freschi per liberarne le preziose antocianine.',
      },
      {
        step: 4,
        title: 'Raffreddamento Rigoroso Sotto i 38°C',
        instruction: 'Lascia raffreddare completamente tutti gli ingredienti cotti prima di aggiungere oli o la polvere di cozza verde per preservare i principi attivi termolabili.',
        criticalTip: 'Il calore distrugge la struttura lipidica dell\'ETA e dei glicosaminoglicani: aggiungi solo a cibo freddo.',
      },
      {
        step: 5,
        title: 'Integrazione a Freddo di Cozza Verde e Calcio Marino',
        instruction: 'Aggiungi il calcio di alghe marine, l\'olio di canapa e la polvere di cozza verde a freddo, mescolando fino a ottenere una distribuzione uniforme.',
      },
      {
        step: 6,
        title: 'Pesatura, Suddivisione e Conservazione',
        instruction: 'Porziona i pasti in contenitori ermetici. Conserva in frigo fino a 3 giorni o congela per mantenere inalterata la freschezza degli acidi grassi marini.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Frigorifero',
        duration: 'Massimo 3 Giorni',
        instructions: 'Conserva a 2-4°C in contenitori ermetici (il pesce ha una deperibilità rapida).',
      },
      {
        method: 'Congelatore',
        duration: 'Fino a 60 Giorni',
        instructions: 'Congela in monoporzioni a -18°C per evitare l\'ossidazione degli acidi grassi polinsaturi.',
      },
      {
        method: 'Scongelamento',
        duration: 'In Frigorifero per 12h',
        instructions: 'Scongela lentamente in frigorifero. Non usare microonde ad alta potenza.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '270 – 310 kcal', dailyGramsTotal: '230 g / giorno', mainProtein: '138 g', organMeat: '23 g', produceAndCarbs: '53 g', supplements: '16 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '540 – 620 kcal', dailyGramsTotal: '460 g / giorno', mainProtein: '276 g', organMeat: '46 g', produceAndCarbs: '106 g', supplements: '32 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '920 – 1.050 kcal', dailyGramsTotal: '820 g / giorno', mainProtein: '492 g', organMeat: '82 g', produceAndCarbs: '189 g', supplements: '57 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.290 – 1.450 kcal', dailyGramsTotal: '1.140 g / giorno', mainProtein: '684 g', organMeat: '114 g', produceAndCarbs: '262 g', supplements: '80 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'Cani con allergia o intolleranza accertata al pesce o ai frutti di mare.',
        'Disturbi emorragici o coagulopatie (dosi molto elevate di Omega-3 hanno una lieve azione anticoagulante naturale; consultare il veterinario).',
        'Pancreatite acuta grave (introdurre il salmone gradualmente monitorando la tolleranza lipidica).',
      ],
      transitionSteps: [
        'Giorni 1–3: 25% Ricetta Casalinga + 75% Cibo Attuale',
        'Giorni 4–6: 50% Ricetta Casalinga + 50% Cibo Attuale',
        'Giorni 7–9: 75% Ricetta Casalinga + 25% Cibo Attuale',
        'Giorno 10+: 100% Ricetta Casalinga Completa',
      ],
      calciumRule:
        'REGOLA CLINICA: Il calcio marino Lithothamnium è indispensabile per bilanciare il fosforo del pesce e proteggere l\'integrità delle ossa.',
    },
    faq: [
      {
        question: 'Posso usare il salmone in scatola al naturale?',
        answer: 'Solo se rigorosamente privo di sale aggiunto, in acqua di fonte e confezionato in lattine prive di BPA. Il salmone fresco o surgelato selvaggio resta sempre la scelta ottimale.',
      },
      {
        question: 'Dopo quanto tempo si notano i benefici su pelo e articolazioni?',
        answer: 'Il ricambio cellulare cutaneo canino richiede circa 21-28 giorni; i primi miglioramenti nella mobilità articolare e nella lucentezza del mantello compaiono generalmente dopo 3-4 settimane costanti.',
      },
      {
        question: 'Posso dare questa ricetta tutti i giorni?',
        answer: 'Assolutamente sì. La ricetta è bilanciata sotto il profilo nutrizionale e rispetta gli standard NRC per il mantenimento prolungato del cane adulto.',
      },
    ],
  },

  // 4. LAMB & CRANBERRY BLUEPRINT
  {
    slug: 'lamb-cranberry-gentle-gut',
    name: 'Blueprint Agnello & Mirtillo Rosso per Digestione Delicata e Ipoallergenica',
    shortDesc: 'Una formula a proteina singola 60/10/12/10/5/3 ideata per stomaci sensibili, allergie alimentari e supporto delle vie urinarie con agnello magro, zucca delicata, mirtilli rossi e semi di chia.',
    badge: 'Ipoallergenico & Digestione Delicata',
    targetAudience: 'Cani con Intolleranze a Pollo/Manzo, Coliti Ricorrenti o Vie Urinarie Sensibili',
    colorTheme: '#10b981',
    macroProfile: {
      proteinDm: '45.0%',
      fatDm: '23.8%',
      carbsDm: '17.2%',
      moisture: '73.0%',
      kcalPerKg: '1.250 kcal/kg (ca. 35.4 kcal/oz)',
      caPhosphorusRatio: '1.26 : 1.0 (Intervallo Consigliato NRC: 1.1:1 – 1.4:1)',
    },
    ingredients: [
      {
        name: 'Carne Magra di Agnello Pascolativo (Disossata e Rifilata)',
        percentage: 60,
        category: 'Proteina Ipoallergenica Delicata',
        role: 'Apporto di L-carnitina, zinco e amminoacidi nobili con bassissimo tasso di reattività crociata',
        clinicalBenefit: 'Ideale per protocolli di eliminazione in cani intolleranti a pollame o manzo.',
        color: '#10b981',
      },
      {
        name: 'Purea di Zucca Butternut Cotta al Vapore',
        percentage: 12,
        category: 'Fibra Digestiva Lenitiva',
        role: 'Fibre solubili mucillaginose che leniscono la mucosa intestinale infiammata',
        clinicalBenefit: 'Normalizza il transito intestinale e ripara i danni della barriera enterica.',
        color: '#f5a623',
        affiliateKey: 'pumpkinPuree',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: 'Fegato e Cuore di Agnello',
        percentage: 10,
        category: 'Organi Monoproteici Selezionati',
        role: 'Fornisce vitamina A, ferro, rame organico e vitamine del complesso B',
        clinicalBenefit: 'Nutre gli organi vitali senza introdurre proteine estranee potenzialmente reattive.',
        color: '#7928ca',
      },
      {
        name: 'Mirtilli Rossi Puri & Zucchine Cotte al Vapore',
        percentage: 10,
        category: 'Supporto Urinario & Antiossidanti',
        role: 'Proantocianidine di tipo A che impediscono l\'adesione batterica uropatogena alla vescica',
        clinicalBenefit: 'Mantiene il corretto pH urinario e supporta la prevenzione delle cistiti recidivanti.',
        color: '#e11d48',
      },
      {
        name: 'Polvere di Calcio Naturale & Radice di Cicoria (Inulina)',
        percentage: 5,
        category: 'Bilanciatore Ca:P & Prebiotico Avanzato',
        role: 'Rapporto calcio:fosforo calibrato a 1.26:1 con inulina per nutrire i batteri benefici',
        clinicalBenefit: 'Stimola la proliferazione dei lattobacilli e rafforza il sistema immunitario enterico.',
        color: '#06b6d4',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Semi di Chia Macinati & Olio di Canapa a Freddo',
        percentage: 3,
        category: 'Mucillagini & Omega-3 Lenitivi',
        role: 'Mucillagini protettive per le pareti gastriche e acido alfa-linolenico purificato',
        clinicalBenefit: 'Forma un gel lenitivo che protegge lo stomaco dagli acidi e combatte l\'irritazione cronica.',
        color: '#10b981',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Una formulazione monoproteica ipoallergenica creata su misura per cani con intestino irritabile, coliti croniche o reattività a carni comuni. Combina agnello pascolativo con zucca butternut idrosolubile, mirtilli rossi uroteliali e semi di chia ad azione barriera.',
    clinicalRationale: [
      {
        title: '1. Monoproteina Ipoallergenica ad Antigenicità Minima',
        description:
          'L\'agnello costituisce una delle proteine di prima scelta nelle diete ad esclusione per la remissione di intolleranze alimentari, dermatiti atopiche ed enteropatie croniche causate da proteine intensive.',
        points: [
          'Assenza totale di carni di derivazione avicola o suina.',
          'Amminoacidi ad elevatissimo coefficiente di assimilazione enterica (>93%).',
          'Sostiene la riparazione della barriera endoteliale intestinale danneggiata.',
        ],
      },
      {
        title: '2. Proantocianidine di Tipo A e Protezione Urologica',
        description:
          'I mirtilli rossi contengono composti bioattivi capaci di disattivare le fimbrie di ancoraggio batterico nei ceppi di E. coli responsabili delle infezioni del tratto urinario.',
        points: [
          'Ostacola l\'adesione batterica alla mucosa della vescica.',
          'Mantiene un pH urinario fisiologicamente stabile senza calcoli.',
          'Apporta polifenoli ad alto potere disinfiammante.',
        ],
      },
      {
        title: '3. Mucillagini da Semi di Chia ed Effetto Protettivo Mucosa',
        description:
          'I semi di chia macinati rilasciano fibre mucillaginose idrofile che formano un gel emolliente naturale sulle pareti infiammate di stomaco e colon.',
        points: [
          'Calma il reflusso gastrico e la nausea mattutina da digiuno.',
          'Favorisce la produzione di acidi grassi a catena corta da parte del microbiota.',
          'Assicura feci perfettamente formate e riduce il muco fecale.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Cottura Dolce dell\'Agnello e degli Organi',
        instruction: 'Cuoci la carne di agnello e gli organi a fiamma dolce per 8-10 minuti con 1/2 bicchiere d\'acqua. Rimuovi l\'eventuale grasso liquido in eccesso per un profilo lipidico equilibrato.',
        criticalTip: 'Rimuovi il grasso sciolto in eccesso per mantenere un profilo lipidico leggero e facilmente tollerato.',
      },
      {
        step: 2,
        title: 'Cottura a Vapore di Zucca Butternut e Zucchine',
        instruction: 'Cuoci a vapore la zucca e le zucchine per 8 min fino a renderle morbidissime, quindi riducile in purea per facilitare al massimo l\'assorbimento enterico.',
      },
      {
        step: 3,
        title: 'Idratazione dei Semi di Chia e Mirtilli Rossi',
        instruction: 'Trita finemente i mirtilli rossi e idrata i semi di chia macinati con 2 cucchiai d\'acqua tiepida per attivare il gel mucillaginoso lenitivo.',
      },
      {
        step: 4,
        title: 'Raffreddamento Completo Sotto i 38°C',
        instruction: 'Lascia intiepidire completamente il composto carne-verdure prima di aggiungere gli ingredienti bioattivi per preservare l\'inulina e i polifenoli.',
        criticalTip: 'Non aggiungere mai integratori a caldo per non distruggere le frazioni termolabili.',
      },
      {
        step: 5,
        title: 'Integrazione di Calcio e Semi di Chia Idratati',
        instruction: 'Incorpora a freddo la polvere di calcio, la fibra di cicoria prebiotica e i semi di chia idratati, mescolando uniformemente per 2 minuti.',
      },
      {
        step: 6,
        title: 'Porzionatura con Bilancia e Conservazione',
        instruction: 'Pesa le razioni giornaliere con bilancia di precisione. Conserva in contenitori ermetici in frigorifero (fino a 3-4 giorni) o congelatore.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Frigorifero',
        duration: 'Massimo 3-4 Giorni',
        instructions: 'Conserva in contenitori di vetro ermetici a 2-4°C.',
      },
      {
        method: 'Congelatore',
        duration: 'Fino a 90 Giorni',
        instructions: 'Congela in monoporzioni a -18°C con aria rimossa.',
      },
      {
        method: 'Scongelamento',
        duration: 'In Frigorifero per 24h',
        instructions: 'Scongela gradualmente in frigorifero. Non usare microonde ad alta potenza.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '275 – 315 kcal', dailyGramsTotal: '235 g / giorno', mainProtein: '141 g', organMeat: '24 g', produceAndCarbs: '52 g', supplements: '18 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '550 – 630 kcal', dailyGramsTotal: '470 g / giorno', mainProtein: '282 g', organMeat: '47 g', produceAndCarbs: '103 g', supplements: '38 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '930 – 1.060 kcal', dailyGramsTotal: '830 g / giorno', mainProtein: '498 g', organMeat: '83 g', produceAndCarbs: '183 g', supplements: '66 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.300 – 1.460 kcal', dailyGramsTotal: '1.160 g / giorno', mainProtein: '696 g', organMeat: '116 g', produceAndCarbs: '255 g', supplements: '93 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'Cani con allergia specifica accertata alle carni ovine.',
        'Presenza di calcoli urinari da urati o cistina (consultare il veterinario per il bilancio delle purine).',
      ],
      transitionSteps: [
        'Giorni 1–3: 25% Ricetta Casalinga + 75% Cibo Attuale',
        'Giorni 4–6: 50% Ricetta Casalinga + 50% Cibo Attuale',
        'Giorni 7–9: 75% Ricetta Casalinga + 25% Cibo Attuale',
        'Giorno 10+: 100% Ricetta Casalinga Completa',
      ],
      calciumRule:
        'REGOLA CLINICA: Non somministrare carne di agnello senza calcio calibrato. Il rapporto Ca:P a 1.26:1 previene demineralizzazioni ossee e iperparatiroidismo.',
    },
    faq: [
      {
        question: 'Questa ricetta è indicata per cani che soffrono di colite?',
        answer: 'Sì, la combinazione di agnello ipoallergenico, zucca butternut e semi di chia ricchi di mucillagini offre un effetto emolliente sulle pareti del colon, aiutando a ripristinare feci ben formate.',
      },
      {
        question: 'Posso usare agnello con osso tritato?',
        answer: 'Questa formulazione clinica è calibrata specificamente su carne disossata e polvere di calcio. L\'aggiunta di ossa altererebbe in modo imprevedibile il rapporto calcio:fosforo.',
      },
      {
        question: 'I mirtilli rossi freschi sono indispensabili o posso usare integratori?',
        answer: 'I mirtilli cotti e frullati sono eccellenti; in alternativa, è possibile utilizzare polvere pura di mirtillo rosso titolata in proantocianidine.',
      },
    ],
  },
];
