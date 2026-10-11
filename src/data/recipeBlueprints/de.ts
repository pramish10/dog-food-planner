import type { RecipeBlueprint } from './types';

export const deBlueprints: RecipeBlueprint[] = [
  // 1. TURKEY & PUMPKIN BLUEPRINT
  {
    slug: 'turkey-pumpkin-maintenance',
    name: 'Schonkost-Bauplan mit Putenhack & Kürbis für ausgewachsene Hunde',
    shortDesc: 'Eine klinische 65/10/10/8/4/3-Vollwertrezeptur für ausgewachsene Hunde mit 93/7 Putenhack, Organ-Taurin, verdauungsförderndem Kürbis und Eierschalen-Calcium.',
    badge: 'Klinischer Standard-Erhaltungsbauplan',
    targetAudience: 'Ausgewachsene Hunde (1-7 Jahre) // Erhaltung & Sensible Verdauung',
    colorTheme: '#0070f3',
    macroProfile: {
      proteinDm: '48.2%',
      fatDm: '22.8%',
      carbsDm: '13.4%',
      moisture: '72.5%',
      kcalPerKg: '1.220 kcal/kg (ca. 34.6 kcal/oz)',
      caPhosphorusRatio: '1,25 : 1,0 (NRC-Empfehlungsbereich: 1,1:1 – 1,4:1)',
    },
    ingredients: [
      {
        name: 'Mageres Putenhackfleisch (93% mager / 7% Fett)',
        percentage: 65,
        category: 'Primäres Muskelfleisch',
        role: 'Bioverfügbare essenzielle Aminosäuren für Muskelaufbau und Enzymsynthese',
        clinicalBenefit: 'Hochverdauliches Monoprotein mit minimalem allergenem Potenzial.',
        color: '#0070f3',
      },
      {
        name: 'Putenherzen & Putenmägen',
        percentage: 10,
        category: 'Muskelinnereien & CoQ10-Quelle',
        role: 'Konzentriertes natürliches Taurin, Coenzym Q10, Häm-Eisen und B12',
        clinicalBenefit: 'Schützt den Herzmuskel auf natürliche Weise vor dilatativer Kardiomyopathie (DCM).',
        color: '#7928ca',
      },
      {
        name: 'Reines Bio-Kürbispüree',
        percentage: 10,
        category: 'Präbiotische lösliche Ballaststoffe',
        role: 'Pektin regt die mikrobielle Bildung kurzkettiger Fettsäuren (Butyrat) an',
        clinicalBenefit: 'Natürlicher Regulator: festigt weichen Kot und beugt Verstopfung vor.',
        color: '#f5a623',
        affiliateKey: 'pumpkinPuree',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: 'Gedämpfter Babyspinat & Zucchini',
        percentage: 8,
        category: 'Phytonährstoffe & Grünes Gemüse',
        role: 'Liefert Folat, Vitamin K1, Kalium und zellschützendes Lutein',
        clinicalBenefit: 'Schonendes Dämpfen schließt die Pflanzenzellwände für Enzyme auf.',
        color: '#10b981',
      },
      {
        name: 'Eierschalenpulver & Bio-Kelp',
        percentage: 4,
        category: 'Essenzieller Ca:P-Mineralstoffausgleicher',
        role: 'Liefert ~38% elementares Calcium zum Ausgleich des Fleischphosphors',
        clinicalBenefit: 'LEBENSWICHTIG: Reines Fleisch ohne Calcium entzieht den Knochen Mineralstoffe.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Wildlachsöl aus Alaska (kalt unterrühren)',
        percentage: 3,
        category: 'Marine Omega-3-Fettsäuren EPA/DHA',
        role: 'Direktes EPA und DHA zur Dämpfung entzündlicher Botenstoffe',
        clinicalBenefit: 'Stärkt die Hautbarriere, lindert Juckreiz und schmiert die Gelenke.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Eine tierärztlich entwickelte Vollwertrezeptur zur optimalen Nährstoffversorgung ausgewachsener Hunde bei gleichzeitiger Entlastung des Magen-Darm-Trakts. Mit magerem Putenhackfleisch, herzkräftigendem Organ-Taurin, darmregulierendem Kürbis und exakt berechnetem Eierschalen-Calcium.',
    clinicalRationale: [
      {
        title: '1. Warum 93/7 Putenhackfleisch statt Huhn oder Rind?',
        description:
          'Geflügel und Rind aus Massentierhaltung sind die beiden häufigsten Allergieauslöser bei Hunden. Mageres Putenfleisch bietet eine zu über 94% verdauliche Proteinquelle bei minimaler Fettbelastung der Bauchspeicheldrüse.',
        points: [
          'Höchste biologische Wertigkeit mit 100% Deckung der NRC-Bedarfswerte.',
          'Niedriger Fettgehalt senkt das Risiko von akuter Pankreatitis.',
          'Ideale Schonkost für futtersensible Hunde.',
        ],
      },
      {
        title: '2. Kardiale Notwendigkeit: Organ-Taurin und Coenzym Q10',
        description:
          'Reines Muskelfleisch allein liefert nicht ausreichend Taurin für den Herzmuskel. Ein 10%-Anteil an Putenherzen und -mägen garantiert natürliches Taurin und CoQ10.',
        points: [
          'Organisches Taurin macht synthetische Zusätze überflüssig.',
          'Liefert Häm-Eisen und Coenzym Q10 für die mitochondriale Energie.',
          'Beugt nahrungsbedingter dilatativer Kardiomyopathie (DCM) vor.',
        ],
      },
      {
        title: '3. Calcium-Phosphor-Stöchiometrie (1,25:1 Goldener Standard)',
        description:
          'Reines Fleisch hat ein gefährlich verschobenes Calcium-Phosphor-Verhältnis von ca. 1:20. Ohne Calciumzusatz kommt es innerhalb weniger Wochen zum Knochenabbau. Reines Eierschalenpulver stellt das optimale 1,25:1-Verhältnis her.',
        points: [
          'Liefert 38% hoch bioverfügbares elementares Calcium.',
          'Kelp ergänzt organisches Jod für den Schilddrüsenstoffwechsel.',
          'Dauerhafter Schutz für ein stabiles Skelett und gesunde Zähne.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Vorbereitung & Zerkleinerung',
        instruction: 'Arbeitsflächen säubern. Putenherzen und -mägen in ca. 5 mm kleine Würfel schneiden.',
      },
      {
        step: 2,
        title: 'Schonendes Garen (<82°C)',
        instruction: 'Putenhack und Innereien mit 1/2 Tasse Wasser 8-10 Min. bei schwacher Hitze dünsten, bis das Fleisch durchgegart ist. Nicht scharf anbraten.',
        criticalTip: 'Nicht bei starker Hitze braten, um toxische Glykationsendprodukte (AGEs) zu vermeiden.',
      },
      {
        step: 3,
        title: 'Dämpfen & Pürieren des Gemüses',
        instruction: 'Zucchini und Spinat 4-5 Min. schonend dämpfen. Zusammen mit dem Kürbispüree im Mixer fein pürieren.',
      },
      {
        step: 4,
        title: 'Vollständiges Abkühlen (<38°C)',
        instruction: 'Gemüsepüree unter das gegarte Fleisch heben. Vor Zugabe empfindlicher Zusätze unbedingt auf Raumtemperatur (<38°C) abkühlen lassen.',
        criticalTip: 'Lachsöl niemals in warmes Futter geben; Hitze oxidiert die wertvollen Omega-3-Fettsäuren sofort.',
      },
      {
        step: 5,
        title: 'Unterheben der Zusätze (kalt)',
        instruction: 'Eierschalenpulver, Kelp und kaltes Wildlachsöl 2 Minuten lang gründlich unter das kalte Futter rühren.',
      },
      {
        step: 6,
        title: 'Wiegen & Portionieren',
        instruction: 'Tagesportionen mit einer digitalen Küchenwaage exakt abwiegen. In Glasbehältern im Kühlschrank lagern oder einfrieren.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Kühlschrank',
        duration: 'Max. 3-4 Tage',
        instructions: 'In luftdichten Glasbehältern bei unter 3°C aufbewahren.',
      },
      {
        method: 'Tiefkühltruhe',
        duration: 'Bis zu 90 Tage',
        instructions: 'Portionsweise vakuumieren oder in Gefrierbeuteln einfrieren.',
      },
      {
        method: 'Auftauen',
        duration: 'Im Kühlschrank',
        instructions: '24 Stunden vor der Fütterung im Kühlschrank auftauen lassen. Nicht heiß in der Mikrowelle erhitzen.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '280 – 320 kcal', dailyGramsTotal: '240 g / Tag', mainProtein: '156 g', organMeat: '24 g', produceAndCarbs: '43 g', supplements: '17 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '550 – 620 kcal', dailyGramsTotal: '480 g / Tag', mainProtein: '312 g', organMeat: '48 g', produceAndCarbs: '86 g', supplements: '34 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '950 – 1.080 kcal', dailyGramsTotal: '850 g / Tag', mainProtein: '553 g', organMeat: '85 g', produceAndCarbs: '153 g', supplements: '59 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.320 – 1.480 kcal', dailyGramsTotal: '1.180 g / Tag', mainProtein: '767 g', organMeat: '118 g', produceAndCarbs: '212 g', supplements: '83 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NICHT an heranwachsende Welpen von Riesenrassen (<12 Monate) ohne pädiatrische Calcium-Anpassung verfüttern.',
        'NICHT an Hunde mit fortgeschrittener chronischer Nierenerkrankung (IRIS-Stadium 3-4) ohne Phosphorreduktion verfüttern.',
      ],
      transitionSteps: [
        'Tag 1–3: 25% neues Futter / 75% gewohntes Futter',
        'Tag 4–6: 50% neues Futter / 50% gewohntes Futter',
        'Tag 7–9: 75% neues Futter / 25% gewohntes Futter',
        'Ab Tag 10: 100% neuer Rezeptur-Bauplan',
      ],
      calciumRule: 'NIEMALS das Eierschalenpulver weglassen; reines Fleisch ohne Calcium entzieht den Knochen Mineralstoffe und führt binnen 60 Tagen zu Knochenschäden.',
    },
    faq: [
      {
        question: 'Kann ich Putenhackfleisch durch mageres Rinderhack ersetzen?',
        answer: 'Ja, sofern der Fettgehalt unter 8% liegt und der 10%-Anteil an Innereien für die Taurinversorgung beibehalten wird.',
      },
      {
        question: 'Kann ich diese Rezeptur auch roh füttern?',
        answer: 'Geflügelfleisch birgt bakterielle Risiken und rohes Gemüse kann von Hunden ohne Dämpfen nicht aufgeschlossen werden. Schonendes Garen wird dringend empfohlen.',
      },
    ],
  },

  // 2. BEEF & SWEET POTATO BLUEPRINT
  {
    slug: 'beef-sweet-potato-vitality',
    name: 'Vitalitäts-Bauplan mit Weiderind & Süßkartoffel für aktive Hunde',
    shortDesc: 'Eine kraftvolle 62/10/12/8/4/4-Rezeptur für aktive Hunde mit magerem Weiderind (90/10), nährstoffreicher Leber & Herz, Süßkartoffel und Brokkoli.',
    badge: 'Aktivität & Vitalität',
    targetAudience: 'Sport-, Arbeits- & Agility-Hunde // Hoher Kalorienverbrauch',
    colorTheme: '#7928ca',
    macroProfile: {
      proteinDm: '46.5%',
      fatDm: '24.0%',
      carbsDm: '17.5%',
      moisture: '71.0%',
      kcalPerKg: '1.290 kcal/kg (ca. 36.6 kcal/oz)',
      caPhosphorusRatio: '1,25 : 1,0 (NRC-konform)',
    },
    ingredients: [
      {
        name: 'Mageres Weiderinderhackfleisch (90/10)',
        percentage: 62,
        category: 'Primäres Rotes Muskelfleisch',
        role: 'Kreatin, konjugierte Linolsäure (CLA), Zink und Myoglobin für sportliche Muskelmasse',
        clinicalBenefit: 'Grasgefüttertes Rind hat ein deutlich besseres Omega-6-zu-3-Verhältnis.',
        color: '#e11d48',
      },
      {
        name: 'Rinderleber & Rinderherz',
        percentage: 10,
        category: 'Hochkonzentrierte Innereien',
        role: 'Bioverfügbares Vitamin A (Retinol), B12, Kupfer, Häm-Eisen und CoQ10',
        clinicalBenefit: 'Fördert den Sauerstofftransport im Blut und den mitochondrialen Energiestoffwechsel.',
        color: '#7928ca',
      },
      {
        name: 'Gedämpfte Süßkartoffel',
        percentage: 12,
        category: 'Komplexe langsame Kohlenhydrate',
        role: 'Regeneriert den Muskelglykogenspeicher gleichmäßig ohne Insulinspitzen',
        clinicalBenefit: 'Hält das Energieniveau bei Arbeitshunden über viele Stunden stabil.',
        color: '#f5a623',
      },
      {
        name: 'Gedämpfter Brokkoli & Karotten',
        percentage: 8,
        category: 'Antioxidatives Gemüse & Carotinoide',
        role: 'Sulforaphan und Beta-Carotin für zelluläre Entgiftungsprozesse',
        clinicalBenefit: 'Neutralisiert trainingsbedingte freie Radikale (ROS).',
        color: '#10b981',
      },
      {
        name: 'Eierschalenpulver & Bio-Kelp',
        percentage: 4,
        category: 'Calcium- & Jod-Ausgleich',
        role: 'Neutralisiert den hohen Phosphorgehalt des Rinds bei 1,25:1 Ca:P mit Jod',
        clinicalBenefit: 'Schützt die Knochendichte bei hoher sportlicher Belastung.',
        color: '#0070f3',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Natives Olivenöl & Dorschlebertran',
        percentage: 4,
        category: 'Gesunde Lipide & Vitamin D3',
        role: 'Ölsäure und natürliches Vitamin D3 unterstützen die Calciumeinlagerung im Knochen',
        clinicalBenefit: 'Unterstützt Herz und Gefäße bei sportlich geführten Hunden. Kalt einrühren.',
        color: '#f5a623',
      },
    ],
    executiveSummary:
      'Eine sportliche Leistungsrezeptur für aktive Hunde mit hohem Energieumsatz. Natürliches Kreatin aus Weiderind stärkt die Schnellkraft, während komplexe Kohlenhydrate aus Süßkartoffeln für ausdauernde Energie ohne Leistungseinbrüche sorgen.',
    clinicalRationale: [
      {
        title: '1. Warum Weiderind überlegene Muskelkraft liefert',
        description:
          'Aktive Hunde verbrauchen Muskelphosphokreatin rapide. Grasgefüttertes Rind liefert natürliches Kreatin zur ATP-Regeneration und beschleunigt die Regeneration nach dem Sport.',
        points: [
          'Reich an CLA zur Unterstützung fettfreier Muskelmasse.',
          'Dreimal mehr Omega-3 als konventionelles Rindfleisch.',
          'Häm-Eisen und Vitamin B12 für beste Sauerstoffversorgung.',
        ],
      },
      {
        title: '2. Nachhaltige Glykogenversorgung durch Süßkartoffeln',
        description:
          'Im Gegensatz zu Mais oder Weizen liefert die Süßkartoffel langsame Kohlenhydrate, die Glukose über 6 bis 8 Stunden gleichmäßig freisetzen.',
        points: [
          'Gleichmäßige Ausdauer für Wandern, Rettungshunde und Agility.',
          'Reich an Kalium zur Vorbeugung von Muskelkrämpfen.',
          'Darmfreundliche Pektine für ein gesundes Mikrobiom.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Fleisch & Innereien würfeln',
        instruction: 'Rinderherz und Rinderleber in ca. 5 mm kleine Würfel schneiden. Bis zur Zubereitung kühl lagern.',
      },
      {
        step: 2,
        title: 'Sanftes Rindergaren',
        instruction: 'Rinderhack (90/10) und Innereien mit 1/2 Tasse Wasser 10 Minuten bei mittlerer Hitze schonend garen, bis das Fleisch durch ist.',
      },
      {
        step: 3,
        title: 'Süßkartoffel & Brokkoli dämpfen',
        instruction: 'Süßkartoffel schälen und würfeln. Mit Brokkoli und Karotten 10-12 Min. dämpfen und grob zerstampfen.',
      },
      {
        step: 4,
        title: 'Vollständiges Abkühlen',
        instruction: 'Gemüse unter das Rinderhack heben. Vor Zugabe der Öle auf unter 38°C abkühlen lassen.',
      },
      {
        step: 5,
        title: 'Öle & Calcium kalt unterrühren',
        instruction: 'Eierschalenpulver, Kelp, Olivenöl und Lebertran kalt hinzufügen und 2 Minuten gründlich verrühren.',
      },
      {
        step: 6,
        title: 'Portionieren & Lagern',
        instruction: 'Portionen anhand des Energiebedarfs abwiegen. Futter für 2-3 Tage kühlen, den Rest einfrieren.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Kühlschrank',
        duration: 'Max. 3-4 Tage',
        instructions: 'In Glasbehältern bei unter 3°C aufbewahren.',
      },
      {
        method: 'Gefriertruhe',
        duration: 'Bis zu 90 Tage',
        instructions: 'Portionsweise vakuumierte Tagesrationen.',
      },
      {
        method: 'Fütterung',
        duration: 'Zimmerwarm',
        instructions: 'Vor dem Füttern im lauwarmen Wasserbad auf Zimmertemperatur bringen.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '310 – 350 kcal', dailyGramsTotal: '230 g / Tag', mainProtein: '143 g', organMeat: '23 g', produceAndCarbs: '46 g', supplements: '18 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '620 – 710 kcal', dailyGramsTotal: '460 g / Tag', mainProtein: '285 g', organMeat: '46 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1.080 – 1.220 kcal', dailyGramsTotal: '810 g / Tag', mainProtein: '502 g', organMeat: '81 g', produceAndCarbs: '162 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.490 – 1.680 kcal', dailyGramsTotal: '1.120 g / Tag', mainProtein: '694 g', organMeat: '112 g', produceAndCarbs: '224 g', supplements: '90 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NICHT an Hunde mit Pankreatitis verfüttern (erfordert unter 12% Fett in der Trockensubstanz).',
        'NIEMALS ohne Calciumpulver füttern (reines Fleisch ohne Calcium entzieht den Knochen Mineralstoffe).',
      ],
      transitionSteps: [
        'Tag 1–3: 25% neues Futter / 75% gewohntes Futter',
        'Tag 4–6: 50% neues Futter / 50% gewohntes Futter',
        'Tag 7–9: 75% neues Futter / 25% gewohntes Futter',
        'Ab Tag 10: 100% neuer Rezeptur-Bauplan',
      ],
      calciumRule: 'Calcium stets exakt abwiegen, um den hohen Phosphorgehalt des Rindfleischs auszugleichen.',
    },
    faq: [
      {
        question: 'Können auch ruhige Hunde diese Rezeptur fressen?',
        answer: 'Bei geringer Aktivität sollte die Futtermenge um 15-20% gekürzt werden, oder Sie wählen den Puten-Kürbis-Bauplan.',
      },
    ],
  },

  // 3. SALMON & QUINOA BLUEPRINT
  {
    slug: 'salmon-quinoa-joint-coat',
    name: 'Gelenk- & Fell-Bauplan mit Wildlachs & Quinoa (Entzündungshemmend)',
    shortDesc: 'Eine meeresbasierte 60/8/12/10/6/4-Rezeptur mit reichlich EPA/DHA aus Wildlachs, allergenarmem Quinoa, Heidelbeeren und Hanföl gegen Gelenkbeschwerden und Juckreiz.',
    badge: 'Gelenke & Fell',
    targetAudience: 'Ausgewachsene & Ältere Hunde // Gelenksteifheit & Juckende Haut',
    colorTheme: '#06b6d4',
    macroProfile: {
      proteinDm: '44.0%',
      fatDm: '25.5%',
      carbsDm: '18.5%',
      moisture: '73.0%',
      kcalPerKg: '1.260 kcal/kg (ca. 35.7 kcal/oz)',
      caPhosphorusRatio: '1,28 : 1,0 (NRC-konform)',
    },
    ingredients: [
      {
        name: 'Wildlachs aus Alaska & Weißfischfilet',
        percentage: 60,
        category: 'Primärer Meeresfisch',
        role: 'Direkte marine EPA- und DHA-Fettsäuren sowie Kollagen für die Synovia',
        clinicalBenefit: 'Hemmt COX-2-Entzündungen in arthrotischen Gelenken und regeneriert die Hautbarriere.',
        color: '#06b6d4',
      },
      {
        name: 'Putenherzen & Putenmägen',
        percentage: 8,
        category: 'Taurinquelle aus Innereien',
        role: 'Liefert essenzielles Taurin zur Vorbeugung fischdiätbedingter DCM',
        clinicalBenefit: 'Gewährleistet den Herzmuskelschutz während der Gelenktherapie.',
        color: '#7928ca',
      },
      {
        name: 'Gegarter Bio-Quinoa',
        percentage: 12,
        category: 'Hypoallergenes Pseudogetreide',
        role: 'Vollständiges pflanzliches Aminosäurenprofil (alle 9 essenziellen Aminosäuren) ohne Gluten',
        clinicalBenefit: 'Schonend für empfindliche Därme mit natürlichem Magnesium und Eisen.',
        color: '#f5a623',
        affiliateKey: 'quinoa',
      },
      {
        name: 'Gedämpfte Heidelbeeren, Grünkohl & Zucchini',
        percentage: 10,
        category: 'Hochwirksame Antioxidantien (ORAC)',
        role: 'Anthocyane und Lutein zum Schutz der Gelenkchondrozyten vor oxidativer Zerstörung',
        clinicalBenefit: 'Schützt den Knorpel und fördert die kognitive Vitalität älterer Hunde.',
        color: '#10b981',
      },
      {
        name: 'Kaltgepresstes Hanföl & Grünlippmuschelpulver',
        percentage: 6,
        category: 'GLA & Glykosaminoglykane (GAGs)',
        role: 'Gamma-Linolensäure (GLA) und Chondroitinsulfat für die Gelenkschmiere',
        clinicalBenefit: 'Lindert morgendliche Gelenksteifheit und Schuppenbildung. Kalt unterrühren.',
        color: '#0070f3',
      },
      {
        name: 'Bio-Algenkalk (Lithothamnium) & Kelp',
        percentage: 4,
        category: 'Pflanzliches marines Calcium',
        role: 'Hoch bioverfügbare Rotalge mit natürlichem ionischem Calcium und 72 Spurenelementen',
        clinicalBenefit: 'Deutlich magenschonender als synthetische Calciumpräparate.',
        color: '#e11d48',
        affiliateKey: 'kelp',
      },
    ],
    executiveSummary:
      'Eine klinisch entzündungshemmende Vollwertrezeptur für Hunde mit Gelenksteifheit, Arthrose oder chronischen Hautallergien. Hohe Dosen mariner EPA/DHA aus Wildlachs wirken in Synergie mit Grünlippmuschelpulver und Hanföl schmerzlindernd und regenerierend.',
    clinicalRationale: [
      {
        title: '1. Marine EPA- und DHA-Kaskade für Gelenke und Haut',
        description:
          'EPA und DHA verdrängen entzündungsfördernde Arachidonsäure in den Zellmembranen, wodurch Gelenkschmerzen und Hautrötungen signifikant gedämpft werden.',
        points: [
          'Marine Omega-3-Fettsäuren sind 10-mal bioverfügbarer als pflanzliche ALA aus Leinsamen.',
          'Unterstützt die Gelenkschmiere und schützt Knorpelzellen.',
          'Lindert atopische Dermatitis auf natürliche Weise ohne Kortison.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Sanftes Fisch- & Innereien-Dünsten',
        instruction: 'Lachs, Weißfisch und Putenherzen in 1 Tasse Wasser bei schwacher Hitze 7-8 Minuten sanft dünsten. Fisch sorgfältig zerpflücken und auf Gräten kontrollieren.',
      },
      {
        step: 2,
        title: 'Quinoa waschen & garen',
        instruction: 'Quinoa gründlich abspülen, um Bitterstoffe zu entfernen. In doppelter Wassermenge ca. 15 Min. gar kochen und abkühlen lassen.',
      },
      {
        step: 3,
        title: 'Beeren & Gemüse dämpfen',
        instruction: 'Grünkohl und Zucchini 4 Min. dämpfen. Frische Heidelbeeren hinzugeben und grob pürieren.',
      },
      {
        step: 4,
        title: 'Zwingendes Abkühlen',
        instruction: 'Gegarte Zutaten vermengen. Vor Zugabe der Öle und Zusätze zwingend unter 38°C abkühlen lassen.',
        criticalTip: 'Meeresöle niemals in warmes Futter geben; Hitze oxidiert die wertvollen Lipide sofort.',
      },
      {
        step: 5,
        title: 'Zusätze kalt einrühren',
        instruction: 'Meeresalgen-Calcium, Kelp, Hanföl und Grünlippmuschelpulver kalt hinzugeben und 2 Min. gründlich verrühren.',
      },
      {
        step: 6,
        title: 'Wiegen & Einfrieren',
        instruction: 'Tagesrationen mit der Digitalwaage abwiegen. Futter für 2-3 Tage kühlen, den Rest portionsweise einfrieren.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Kühlschrank',
        duration: 'Max. 3 Tage',
        instructions: 'Fisch verdirbt schneller als Geflügel; innerhalb von 72 Stunden verbrauchen.',
      },
      {
        method: 'Gefriertruhe',
        duration: 'Bis zu 60 Tage',
        instructions: 'Luftdicht einfrieren, um oxidationsempfindliche Fischfette zu schützen.',
      },
      {
        method: 'Auftauen',
        duration: 'Im Kühlschrank',
        instructions: 'Langsam im Kühlschrank auftauen lassen. Mikrowelle wegen Hitzeentwicklung meiden.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '300 – 340 kcal', dailyGramsTotal: '235 g / Tag', mainProtein: '141 g', organMeat: '19 g', produceAndCarbs: '52 g', supplements: '23 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '600 – 680 kcal', dailyGramsTotal: '470 g / Tag', mainProtein: '282 g', organMeat: '38 g', produceAndCarbs: '103 g', supplements: '47 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1.040 – 1.180 kcal', dailyGramsTotal: '830 g / Tag', mainProtein: '498 g', organMeat: '66 g', produceAndCarbs: '183 g', supplements: '83 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.450 – 1.620 kcal', dailyGramsTotal: '1.150 g / Tag', mainProtein: '690 g', organMeat: '92 g', produceAndCarbs: '253 g', supplements: '115 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NIEMALS Wildlachs roh füttern (Gefahr der Lachskrankheit durch den Parasiten Neorickettsia helminthoeca). Kochen neutralisiert dieses Risiko vollständig.',
      ],
      transitionSteps: [
        'Tag 1–3: 25% neues Futter / 75% altes Futter',
        'Tag 4–6: 50% neues Futter / 50% altes Futter',
        'Tag 7–9: 75% neues Futter / 25% altes Futter',
        'Ab Tag 10: 100% neuer Rezeptur-Bauplan',
      ],
      calciumRule: 'Algenkalk muss grammgenau abgewogen werden, um das Ca:P-Verhältnis einzuhalten.',
    },
    faq: [
      {
        question: 'Kann Dosenlachs verwendet werden?',
        answer: 'Ausschließlich ungesalzener Wildlachs in eigenem Saft (ohne Salzzusatz). Frischer oder tiefgekühlter Wildlachs ist stets zu bevorzugen.',
      },
    ],
  },

  // 4. LAMB & CRANBERRY BLUEPRINT
  {
    slug: 'lamb-cranberry-gentle-gut',
    name: 'Hypoallergener Darm-Bauplan mit Weidelamm & Cranberries',
    shortDesc: 'Eine neuartige Einzelfleisch-Rezeptur 64/8/12/8/5/3 mit Weidelamm, Innereien, beruhigendem Butternut-Kürbis und Cranberries für hochallergische Hunde mit empfindlichem Magen.',
    badge: 'Hypoallergen Darm & Blase',
    targetAudience: 'Hunde mit Allergien gegen Geflügel/Rind & Magen-Darm-Sensibilität',
    colorTheme: '#10b981',
    macroProfile: {
      proteinDm: '45.8%',
      fatDm: '26.2%',
      carbsDm: '16.0%',
      moisture: '72.0%',
      kcalPerKg: '1.310 kcal/kg (ca. 37.1 kcal/oz)',
      caPhosphorusRatio: '1,25 : 1,0 (NRC-konform)',
    },
    ingredients: [
      {
        name: 'Mageres Weidelammhackfleisch',
        percentage: 64,
        category: 'Neuartiges Rotes Einzelfleisch',
        role: 'L-Carnitin, Zink und neuartiges Antigenprofil für Eliminationsdiäten',
        clinicalBenefit: 'Umgeht bestehende Sensibilisierungen gegen handelsübliches Huhn oder Rind.',
        color: '#10b981',
      },
      {
        name: 'Lammleber & Lammnieren',
        percentage: 8,
        category: 'Nährstoffdichte Filtrationsorgane',
        role: 'Natürliches Selen, Kupfer, Vitamin A und stoffwechselaktive Folate',
        clinicalBenefit: 'Schützt Zellmembranen und stärkt die Darmimmunität.',
        color: '#7928ca',
      },
      {
        name: 'Gedämpfter Butternut-Kürbis & Reine Cranberries',
        percentage: 12,
        category: 'Darmberuhigendes Pektin & Blasen-PACs',
        role: 'Proanthocyanidine hemmen Bakterienanhaftung in der Blase; Pektin schützt die Schleimhaut',
        clinicalBenefit: 'Fördert geregelten Kotabsatz und schützt die ableitenden Harnwege.',
        color: '#f5a623',
      },
      {
        name: 'Gedämpfte Grüne Bohnen & Petersilie',
        percentage: 8,
        category: 'Darmchlorophyll & Schonende Ballaststoffe',
        role: 'Apigenin und milde Ballaststoffe beruhigen hyperaktive Darmperistaltik',
        clinicalBenefit: 'Neutralisiert Maulgeruch auf natürliche Weise ohne Blähungen hervorzurufen.',
        color: '#0070f3',
      },
      {
        name: 'Eierschalenpulver & Bio-Kelp',
        percentage: 5,
        category: 'Essenzielles Calcium & Jod',
        role: 'Exakt kalibriertes Calciumcarbonat zur Neutralisierung des Lammphosphors bei 1,25:1',
        clinicalBenefit: 'Reizfreie Knochenmineralisierung für magenempfindliche Hunde.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Wildlachsöl aus Alaska (kalt)',
        percentage: 3,
        category: 'Marine Omega-3-Fettsäuren',
        role: 'Direktes EPA/DHA zur Beruhigung der Darmschleimhautbarriere',
        clinicalBenefit: 'Schützt vor Leaky-Gut-Syndrom. Immer erst kalt unterrühren.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Eine gezielt hypoallergene Rezeptur für Hunde mit chronisch weichem Kot, Futtermittelunverträglichkeiten gegen Geflügel oder Rind und gereizten Harnwegen. Weidelamm liefert sauberes Einzelfleisch, während Butternut-Kürbis und Cranberries Darm und Blase schützen.',
    clinicalRationale: [
      {
        title: '1. Warum Weidelamm bei chronischen Futtermittelallergien?',
        description:
          'Geflügel und Rindfleisch sind für die Mehrzahl aller allergischen Hautreaktionen bei Hunden verantwortlich. Weidelamm weist keine Kreuzreaktivität auf und entlastet das Immunsystem.',
        points: [
          'Eliminiert die beiden häufigsten Proteinallergene.',
          'Hoher L-Carnitingehalt schützt Herz und Fettstoffwechsel.',
          'Hervorragende Akzeptanz auch bei futtermäkeligen Hunden.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Innereien würfeln & Lamm vorbereiten',
        instruction: 'Lammleber und Lammnieren in ca. 5 mm kleine Würfel schneiden.',
      },
      {
        step: 2,
        title: 'Sanftes Garen',
        instruction: 'Lammhack und Innereien mit 1/2 Tasse Wasser 8-10 Minuten dünsten. Austretendes Fett bei Bedarf leicht abschöpfen.',
      },
      {
        step: 3,
        title: 'Kürbis, Cranberries & Gemüse dämpfen',
        instruction: 'Geschälten Butternut-Kürbis, Bohnen und frische Cranberries 6-8 Minuten weichdämpfen und fein pürieren.',
      },
      {
        step: 4,
        title: 'Vollständiges Abkühlen (<38°C)',
        instruction: 'Kürbispüree mit dem gegarten Lammfleisch vermengen und auf Raumtemperatur abkühlen lassen.',
      },
      {
        step: 5,
        title: 'Zusätze kalt unterheben',
        instruction: 'Eierschalenpulver, Kelp und kaltes Lachsöl 2 Minuten gründlich unterrühren.',
      },
      {
        step: 6,
        title: 'Portionieren & Lagern',
        instruction: 'Portionen mit der Digitalwaage abwiegen. Im Kühlschrank lagern oder portionsweise einfrieren.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Kühlschrank',
        duration: 'Max. 3-4 Tage',
        instructions: 'In Glasbehältern bei unter 3°C.',
      },
      {
        method: 'Tiefkühltruhe',
        duration: 'Bis zu 90 Tage',
        instructions: 'Portionsweise vakuumierte Beutel.',
      },
      {
        method: 'Servieren',
        duration: 'Zimmerwarm',
        instructions: 'Im warmen Wasserbad sanft anwärmen.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '305 – 345 kcal', dailyGramsTotal: '230 g / Tag', mainProtein: '147 g', organMeat: '18 g', produceAndCarbs: '46 g', supplements: '19 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '610 – 700 kcal', dailyGramsTotal: '460 g / Tag', mainProtein: '294 g', organMeat: '37 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1.060 – 1.200 kcal', dailyGramsTotal: '820 g / Tag', mainProtein: '525 g', organMeat: '66 g', produceAndCarbs: '164 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1.480 – 1.650 kcal', dailyGramsTotal: '1.130 g / Tag', mainProtein: '723 g', organMeat: '90 g', produceAndCarbs: '226 g', supplements: '91 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'KEINE gezuckerten getrockneten Cranberries verwenden; nur frische oder reine ungezuckerte tiefgekühlte Cranberries nutzen.',
      ],
      transitionSteps: [
        'Tag 1–3: 25% neues Futter / 75% altes Futter',
        'Tag 4–6: 50% neues Futter / 50% altes Futter',
        'Tag 7–9: 75% neues Futter / 25% altes Futter',
        'Ab Tag 10: 100% neuer Rezeptur-Bauplan',
      ],
      calciumRule: 'Das Calciumpräparat stets vollständig zugeben, um einen Calciummangel zuverlässig zu verhindern.',
    },
    faq: [
      {
        question: 'Sind Cranberries für Hunde sicher?',
        answer: 'Ja, in reiner gegarter Form. Sie sind reich an schützenden Proanthocyanidinen für Blase und ableitende Harnwege.',
      },
    ],
  },
];
