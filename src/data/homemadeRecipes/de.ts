import type { LocalizedRecipesMap } from './types';

export const deRecipes: LocalizedRecipesMap = {
  'gently-cooked-turkey-pumpkin': {
    tag: 'SCHONEND GEGART',
    title: 'Schonend gegarte Pute & präbiotischer Kürbis (Magen-Darm-Schonkost)',
    heroTitle: 'Rezeptur-Bauplan: Schonend gegarte Pute & präbiotischer Kürbis',
    shortDesc: 'Eine fettarme, magenschonende Schonkost mit nur einer Proteinquelle (Pute) für Hunde mit chronischer Empfindlichkeit oder Hühnchen-Unverträglichkeit.',
    summary: 'Speziell für sensible Hundemägen formuliert. Enthält mageres 93/7 Putenhackfleisch, nährstoffreiche Puten- oder Rinderherzen für natürliches Taurin, verdauungsförderndes Kürbispüree, gedämpfte Zucchini und Babyspinat, reines Eierschalen-Calcium und wildes Alaska-Lachsöl.',
    badge: 'TIERÄRZTLICHE SCHONKOST-REZEPTUR // FETTARM & SCHONEND GEGART',
    prepTime: '20 Minuten',
    cookTime: '15 Minuten (sanftes Köcheln)',
    yieldAmount: 'Ca. 1.450 g (3,2 lbs) zubereitete Futtermenge',
    lifeStage: 'Erwachsene & ältere Hunde (Magen-Darm-Unterstützung)',
    dietStyle: 'Schonend gegarte Vollwertkost (NRC/AAFCO-konform mit Calcium-Ergänzung)',
    macroProfile: {
      caPhosphorusRatio: '1,25 : 1 (Präzise balanciert durch mikrokristallines Eierschalenpulver)',
    },
    keyHighlights: [
      '65% Mageres Putenhackfleisch 93/7 (Leicht verdauliches Monoprotein ohne Magenreizung)',
      '10% Puten- oder Rinderherzen (Hochkonzentriertes natürliches Taurin & L-Carnitin)',
      '10% Reines Kürbispüree (Pektinreiche lösliche Ballaststoffe zur Kotfestigung)',
      '10% Gedämpfte Zucchini & Babyspinat (Schonende niederglykämische Mikronährstoffe)',
      '3% Reines Eierschalenpulver (Kalkuliertes 1,25:1 Ca:P-Verhältnis gegen Demineralisierung)',
      '2% Wildes Alaska-Lachsöl (Entzündungshemmende marine EPA/DHA-Omega-3-Fettsäuren)',
    ],
    ingredients: [
      {
        name: 'Mageres Putenhackfleisch (93% Magerfleisch / 7% Fett)',
        batchAmount: '908 g (2,0 lbs)',
        category: 'Primäres mageres Muskelfleisch',
        role: 'Bioverfügbare Aminosäuren mit minimaler Magen-Darm-Belastung; ideal bei Neigung zu Pankreatitis oder Hühnerfleisch-Allergie.',
        clinicalBenefit: 'Reich an Tryptophan, Niacin und Selen mit außergewöhnlich hoher biologischer Wertigkeit und über 92% Dünndarmverdaulichkeit.',
      },
      {
        name: 'Putenherzen oder Weiderinderherzen',
        batchAmount: '142 g (5,0 oz)',
        category: 'Muskuläres Herzorgan',
        role: 'Die ergiebigste Vollwertquelle für freies Taurin und CoQ10 zur Unterstützung der linksventrikulären Herzfunktion.',
        clinicalBenefit: 'Unverzichtbar zur Vorbeugung dilatativer Kardiomyopathie (DCM) ohne synthetische Aminosäurezusätze.',
      },
      {
        name: '100% Reines Kürbispüree (Ohne Zucker & Gewürze)',
        batchAmount: '142 g (5,0 oz)',
        category: 'Präbiotische lösliche Ballaststoffe',
        role: 'Liefert fermentierbares Pektin, das Darmzellen nährt, bei Durchfall Wasser bindet und bei Verstopfung den Stuhl gleitfähig macht.',
        clinicalBenefit: 'Bildet kurzkettige Fettsäuren (Butyrat) zur Festigung und Reparatur der intestinalen Schleimhautbarriere.',
      },
      {
        name: 'Gedämpfter Babyspinat & fein gewürfelte Zucchini',
        batchAmount: '142 g (5,0 oz)',
        category: 'Niederglykämisches Gemüse',
        role: 'Schonende Hydratation und zellschützende Antioxidantien wie Lutein, Beta-Carotin, Kalium und Magnesium.',
        clinicalBenefit: 'Schonendes Dämpfen bricht Zellulosewände auf, sodass Nährstoffe ohne Blähungen extrahiert werden können.',
      },
      {
        name: 'Reines Eierschalenpulver (Calciumcarbonat)',
        batchAmount: '1 gestrichener Teelöffel (ca. 5,5 g / 1.900 mg elementares Calcium)',
        category: 'Essenzieller Mineralstoffausgleich',
        role: 'Gleicht den hohen Phosphorgehalt von reinem Fleisch (1:20) aus und stellt das Pflichtverhältnis von 1,25:1 Calcium zu Phosphor her.',
        clinicalBenefit: 'Geschmacksneutral und bioäquivalent zu Knochenmehl; schützt den Hund zuverlässig vor metabolischer Knochenentkalkung.',
      },
      {
        name: 'Wildes Alaska-Lachsöl (EPA & DHA)',
        batchAmount: '1,5 Esslöffel (22 ml)',
        category: 'Marine essenzielle Fettsäuren',
        role: 'Entzündungshemmende langkettige Omega-3-Fettsäuren; beruhigen die Darmschleimhaut und stärken die Hautbarriere.',
        clinicalBenefit: 'Senkt entzündungsfördernde Eicosanoide (PGE2); darf ERST nach dem Abkühlen auf Zimmertemperatur untergerührt werden.',
      },
    ],
    executiveRationale: 'Chronische Enteropathien, Reizdarmsymptome und Futterunverträglichkeiten entstehen häufig durch hochgradig extrudiertes Trockenfutter, oxidierte Fette oder Überempfindlichkeiten gegen industrielles Masthähnchen. Diese Rezeptur setzt auf bekömmliches Putenfleisch, das bei kontrollierter Kerntemperatur (74°C) gegart wird, um pathogene Keime zu eliminieren und native Proteinstrukturen zu bewahren. In Kombination mit Kürbispektin und marinem Omega-3 entsteht ein optimales, reizarmes Darmmilieu.',
    clinicalDeepDives: [
      {
        title: 'Magen-Darm-Beruhigung durch Pektin und lösliche Fasern',
        description: 'Kürbispüree wirkt im Dickdarm regulierend in zwei Richtungen: Bei weichem Kot oder Durchfall bindet das lösliche Pektin überschüssiges Wasser und sorgt für fest geformte Kotballen. Bei leichter Verstopfung schmiert es die Darmpassage. Zudem verstoffwechseln Darmbakterien Pektin zu Butyrat, der Hauptenergiequelle der Kolonozyten.',
        keyPoints: [
          'Hohe Wasserbindungskraft stabilisiert die Kotkonsistenz binnen 24 bis 48 Stunden.',
          'Fördert nützliche Darmbakterien wie Bifidobakterien und Laktobazillen.',
          'Ausschließlich reines Kürbispüree ohne Zusätze von Zucker oder Kuchengewürzen verwenden.',
        ],
      },
      {
        title: 'Die Notwendigkeit von frischem Taurin und Herzgewebe',
        description: 'Obwohl Hunde Taurin aus schwefelhaltigen Aminosäuren synthetisieren können, mindert die thermische Belastung industrieller Futterherstellung die Bioverfügbarkeit. Bestimmte Rassen neigen zudem genetisch zu Mängeln. Der Zusatz von 10% frischem Herzgewebe liefert bioverfügbares, nicht-synthetisches Taurin direkt in den Blutkreislauf.',
        keyPoints: [
          'Herzgewebe enthält bis zu 10-mal mehr Taurin als normales Skelettmuskelfleisch.',
          'Unterstützt die Kontraktionskraft der Kardiomyozyten und gesunde Herzwände.',
          'Liefert Coenzym Q10 und wertvolles Häm-Eisen.',
        ],
      },
      {
        title: 'Schongar-Protokoll: Schutz hitzelabiler Vitalstoffe',
        description: 'Zu langes Kochen zerstört bis zu 60% des natürlichen Thiamins (Vitamin B1) und oxidiert empfindliche mehrfach ungesättigte Fettsäuren (EPA/DHA). Putenhackfleisch sollte nur kurz gedünstet werden, bis das Fleisch nicht mehr rosa ist (74°C Kerntemperatur). Lachsöl und Eierschalenpulver dürfen niemals im heißen Topf erhitzt werden, sondern erst unter 38°C eingerührt werden.',
        keyPoints: [
          'Verhindert Lipidperoxidation und schädliche Radikalbildung aus erhitztem Fischöl.',
          'Bewahrt hitzeempfindliche B-Vitamine und pflanzliche Antioxidantien.',
          'Vernichtet Salmonellen und Campylobacter durch die kontrollierte 74°C-Garschwelle.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Präzises Wiegen und Hygienevorbereitung',
        instruction: 'Mithilfe einer digitalen Küchenwaage 908 g Putenhack und 142 g gewürfeltes Herzfleisch exakt abwiegen. Schneidebretter und Messer gründlich desinfizieren.',
        criticalTip: 'Exaktes Abwiegen auf der Waage ist Pflicht; Schätzungen führen schleichend zu Mikronährstoffdefiziten.',
      },
      {
        step: 2,
        title: 'Sanftes Garen des Fleisches',
        instruction: 'Pute und Herzen in einer Edelstahlpfanne bei niedriger bis mittlerer Hitze mit 60 ml Wasser 8 bis 12 Minuten dünsten, bis das Fleisch 74°C erreicht. Sofort von der Herdplatte nehmen.',
        criticalTip: 'Garsäfte keinesfalls wegschütten; sie enthalten gelöste B-Vitamine, Mineralien und Taurin.',
      },
      {
        step: 3,
        title: 'Gemüse dämpfen und pürieren',
        instruction: 'Zucchini und Babyspinat 4 bis 5 Minuten schonend dämpfen, bis sie weich sind. Zusammen mit 142 g Kürbispüree im Mixer zu einem feinen Püree verarbeiten.',
      },
      {
        step: 4,
        title: 'Vermengen und vollständig abkühlen lassen',
        instruction: 'Das Gemüsepüree unter das warme Fleisch heben und verrühren. Im Topf stehen lassen, bis die Temperatur unter 38°C sinkt (handwarm bis kühl).',
        criticalTip: 'Erst mit Schritt 5 fortfahren, wenn sich die Mischung spürbar kühl anfühlt.',
      },
      {
        step: 5,
        title: 'Hitzesensible Zusätze einrühren',
        instruction: '1 gestrichenen Teelöffel (5,5 g) Eierschalenpulver und 1,5 Esslöffel (22 ml) Lachsöl über die abgekühlte Masse geben. Mindestens 60 Sekunden lang intensiv durchrühren.',
      },
      {
        step: 6,
        title: 'Portionieren und Lagern',
        instruction: 'In luftdichte Tagesdosen abfüllen und mit Datum beschriften. Bis zu 4 Tage im Kühlschrank aufbewahren; den Rest bis zu 90 Tage tiefkühlen.',
      },
    ],
    portionReference: [
      {
        dogWeight: 'Sehr klein (2,3 kg / 5 lbs)',
        dailyGrams: '110 g pro Tag (ca. 3,9 oz)',
        dailyKcal: '135 kcal',
        mealsPerDay: '2 Mahlzeiten (je 55 g)',
        servingNotes: 'Toy-Rassen: Stets zimmerwarm servieren, niemals kühlschrankkalt.',
      },
      {
        dogWeight: 'Klein (4,5 kg / 10 lbs)',
        dailyGrams: '185 g pro Tag (ca. 6,5 oz)',
        dailyKcal: '230 kcal',
        mealsPerDay: '2 Mahlzeiten (je 92 g)',
        servingNotes: 'Optimal für kleine Terrier, Zwergpudel und Malteser mit sensiblem Verdauungstrakt.',
      },
      {
        dogWeight: 'Mittel-Klein (9,1 kg / 20 lbs)',
        dailyGrams: '310 g pro Tag (ca. 10,9 oz)',
        dailyKcal: '385 kcal',
        mealsPerDay: '2 Mahlzeiten (je 155 g)',
        servingNotes: 'Französische Bulldogge, Beagle, Corgi: Bei kastrierten, ruhigen Hunden um 10% reduzieren.',
      },
      {
        dogWeight: 'Mittelgroß (15,9 kg / 35 lbs)',
        dailyGrams: '475 g pro Tag (ca. 16,7 oz)',
        dailyKcal: '590 kcal',
        mealsPerDay: '2 Mahlzeiten (je 238 g)',
        servingNotes: 'Spaniels, Australian Shepherds: Hervorragende Nährstoffdichte für aktive Hunde.',
      },
      {
        dogWeight: 'Groß (22,7 kg / 50 lbs)',
        dailyGrams: '625 g pro Tag (ca. 22,0 oz)',
        dailyKcal: '775 kcal',
        mealsPerDay: '2 Mahlzeiten (je 312 g)',
        servingNotes: 'Boxer, Großpudel, Vorstehhunde: Hohe Verdaulichkeit verringert Kotmenge deutlich.',
      },
      {
        dogWeight: 'Sehr groß (31,8 kg / 70 lbs)',
        dailyGrams: '805 g pro Tag (ca. 28,4 oz)',
        dailyKcal: '1.000 kcal',
        mealsPerDay: '2 Mahlzeiten (je 402 g)',
        servingNotes: 'Golden Retriever, Labrador: Hohe Sättigung durch Kürbisfasern dämpft Futterbetteln.',
      },
      {
        dogWeight: 'Riesenrasse (40,8 kg / 90 lbs)',
        dailyGrams: '970 g pro Tag (ca. 34,2 oz)',
        dailyKcal: '1.200 kcal',
        mealsPerDay: '2 Mahlzeiten (je 485 g)',
        servingNotes: 'Schäferhund, Rottweiler: Sorgt bei darmempfindlichen Hunden für feste Kotbeschaffenheit.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Kühlschranklagerung (Frischebehälter)',
        duration: 'Bis zu 4 Tage bei ≤ 3°C',
        instructions: 'In luftdichten Glasdosen lagern. Stets mit einem sauberen Löffel portionieren.',
      },
      {
        method: 'Tiefkühllagerung (Portionierte Chargen)',
        duration: 'Bis zu 3 Monate bei -18°C',
        instructions: 'In Silikondosen oder Gefrierbeuteln einfrieren. 24 h vorher im Kühlschrank auftauen lassen. Nie wieder einfrieren.',
      },
      {
        method: 'Schonendes Erwärmen',
        duration: 'Zimmertemperatur oder warmes Wasserbad',
        instructions: 'Zimmertemperiert verfüttern. Bei Bedarf den Behälter 5 min in lauwarmes Wasser stellen. Keine Mikrowelle.',
      },
    ],
    safetyAndPrecautions: {
      calciumRule: 'Das Eierschalenpulver NIEMALS weglassen oder reduzieren. Reines Putenfleisch hat ein ungünstiges Calcium-Phosphor-Verhältnis von 1:18. Ohne das Calcium (ca. 1.900 mg elementares Calcium pro Charge) entzieht das Parathormon den Knochen des Hundes Calcium, was zu schwerer Skelettschädigung und Spontanfrakturen führt.',
      hygieneRule: 'Geflügel muss eine gemessene Kerntemperatur von 74°C erreichen. Futter, das länger als 2 Stunden bei Zimmertemperatur stand, entsorgen.',
      contraindications: [
        'Hunde mit fortgeschrittener chronischer Nierenerkrankung (IRIS-Stadium 3 oder 4), die eine strikte Phosphorreduktion unter 0,4% i.Tr. benötigen.',
        'Hunde mit diagnostizierter Hyperkalzämie oder Calciumoxalat-Harnsteinen.',
        'Welpen großer Rassen im Schnellwachstum (< 12 Monate), die streng überwachte Mineralstoffverhältnisse erfordern.',
      ],
      transitionSchedule: [
        'Tag 1–3: 75% bisheriges Futter + 25% Puten-Kürbis-Rezeptur.',
        'Tag 4–6: 50% bisheriges Futter + 50% Puten-Kürbis-Rezeptur.',
        'Tag 7–9: 25% bisheriges Futter + 75% Puten-Kürbis-Rezeptur.',
        'Ab Tag 10: 100% Puten-Kürbis-Rezeptur.',
      ],
    },
    faq: [
      {
        question: 'Kann ich Putenhackfleisch durch Hähnchenbrust ersetzen?',
        answer: 'Ja, fettarme Hähnchenbrust ohne Haut ist möglich, sofern keine Hühnchen-Allergie vorliegt. Viele darmempfindliche Hunde reagieren jedoch unbemerkt auf konventionelles Masthähnchen. Pute ist deutlich allergenärmer und reicher an Tryptophan und Taurin.',
      },
      {
        question: 'Kann ich eigene Eierschalen zu Hause mahlen?',
        answer: 'Ja, sofern Sie diese gründlich waschen, bei 120°C 15 Minuten im Ofen sterilisieren und in der Kaffeemühle zu staubfeinem Pulver (wie Puderzucker) vermahlen. Grobe Schalenstücke können vom Magen-Darm-Trakt nicht aufgeschlossen werden.',
      },
      {
        question: 'Ist diese Rezeptur als Alleinfutter für das ganze Leben geeignet?',
        answer: 'Sie deckt den Bedarf ausgewachsener Hunde an Proteinen, Fetten, Calcium-Phosphor-Gleichgewicht und Rohfaser ab. Bei jahrelanger ausschließlicher Fütterung empfehlen Tierärzte, zwischen Pute, Rind und Fisch zu wechseln und gelegentlich eine Mineralstoff- und Vitaminmischung (Zink, Jod, Vitamin E) zu ergänzen.',
      },
      {
        question: 'Wie schnell verbessert sich der Stuhlgang meines Hundes?',
        answer: 'Dank des hochverdaulichen Putenproteins und des Pektins berichten die meisten Halter bereits nach 48 bis 72 Stunden von deutlich festerem, seltenerem und geruchsärmerem Kot.',
      },
    ],
  },

  'raw-barf-beef-duck': {
    tag: 'ROHES BARF',
    title: 'Ancestraler 80-10-10 Roh-BARF-Plan mit Rind & Ente',
    heroTitle: 'Rezeptur-Bauplan: 80-10-10 Roh-BARF mit Rind & Ente',
    shortDesc: 'Eine biologisch artgerechte Rohfütterung nach dem 80-10-10-Beutetierprinzip: 80% Muskelfleisch, 10% rohe fleischige Knochen und 10% sezernierende Innereien.',
    summary: 'Entwickelt für gesunde erwachsene Hunde mit starker Magensäure. Kombiniert Weiderindfleisch, Rinderherz, ganze rohe Entenhälse (natürliches Knochencalcium und Chondroitin) sowie Rinderleber und -niere für eine optimale Versorgung mit Retinol und B-Vitaminen.',
    badge: 'ANCESTRALES BEUTETIERMODELL // 80-10-10 BIOLOGISCH AUSBALANCIERT',
    prepTime: '25 Minuten (zzgl. obligatorisches 3-wöchiges Tieffrieren)',
    cookTime: '0 Minuten (100% roh serviert)',
    yieldAmount: 'Ca. 1.360 g (3,0 lbs) rohe Charge',
    lifeStage: 'Gesunde erwachsene Hunde (starke Magensäure)',
    dietStyle: 'Ancestrales Beutetier-Rohmodell (80% Fleisch / 10% Knochen / 10% Innereien)',
    macroProfile: {
      caPhosphorusRatio: '1,20 : 1 (Natürliche Balance durch rohe Entenhalsknochen)',
    },
    keyHighlights: [
      '70% Mageres Weiderind-Muskelfleisch (Reich an bioverfügbarem Häm-Eisen, Zink & B12)',
      '10% Weiderinderherz (Konzentriertes muskuläres Organ voll von Taurin & CoQ10)',
      '10% Rohe fleischige Entenhälse (Weiche Schwammknochen als Calcium- und Kollagenquelle)',
      '5% Frische Weiderinderleber (Das Multivitamin der Natur: Retinol-Vitamin-A & Folsäure)',
      '5% Frische Rinderniere oder -milz (Sezernierendes Organ reich an Selen und Enzymen)',
      'Frei von synthetischen Zusätzen, Stärke oder hitzebedingten Acrylamiden',
    ],
    ingredients: [
      {
        name: 'Mageres Weiderind-Muskelfleisch & Abschnitte (85/15)',
        batchAmount: '952 g (2,1 lbs)',
        category: 'Primäres Skelettmuskel-Protein',
        role: 'Hochwertige Aminosäuren, Carnitin, Kreatin, Zink und leicht resorbierbares Häm-Eisen.',
        clinicalBenefit: 'Fördert fettfreie Muskelmasse, Schilddrüsenfunktion und Sauerstofftransport ohne pflanzliche Allergene.',
      },
      {
        name: 'Rinderherz (Gewürfeltes Muskelorgan)',
        batchAmount: '136 g (4,8 oz)',
        category: 'Muskelorgan (Zählt zu den 80% Muskelfleisch)',
        role: 'Zählt biologisch zum Muskelfleischanteil und liefert enorme Mengen an Herztaurin und Coenzym Q10.',
        clinicalBenefit: 'Stärkt die myokardiale Mitochondrienfunktion und schützt vor ernährungsbedingter Herzmuskelschwäche.',
      },
      {
        name: 'Rohe fleischige Entenhälse (Ganz oder grob geteilt)',
        batchAmount: '136 g (4,8 oz)',
        category: 'Rohe fleischige Knochen (10%-Kategorie)',
        role: 'Liefert biologisches Calcium, Phosphor, Magnesium, Typ-II-Kollagen und Chondroitinsulfat.',
        clinicalBenefit: 'Kauen auf weichem Knochengewebe reinigt Zähne, massiert das Zahnfleisch und schüttet Endorphine aus. NIE kochen.',
      },
      {
        name: 'Frische Weiderinderleber',
        batchAmount: '68 g (2,4 oz)',
        category: 'Sezernierendes Hauptorgan (5%-Regel)',
        role: 'Das nährstoffreichste Organ: Reines Vitamin A (Retinol), Vitamin D, B12, Kupfer und Eisen.',
        clinicalBenefit: 'Unerlässlich für Sehkraft, Schleimhäute und Immunabwehr. Die 5%-Grenze darf nicht überschritten werden.',
      },
      {
        name: 'Frische Rinderniere oder Rindermilz',
        batchAmount: '68 g (2,4 oz)',
        category: 'Sekundäres Organ (5%-Regel)',
        role: 'Echtes Filterorgan, das organisches Selen, Molybdän, B-Vitamine und bioaktive Peptide liefert.',
        clinicalBenefit: 'Rundet den Organanteil ab; Leber allein deckt die enzymatische Vielfalt von Niere/Milz nicht ab.',
      },
    ],
    executiveRationale: 'Hunde besitzen einen sehr kurzen Verdauungstrakt und einen hochsauren Magen (pH 1,0–2,0 nach Fleischaufnahme). Diese biologische Ausstattung neutralisiert Futterkeime und zersetzt rohe fleischige Knochen und Innereien rasch. Das 80-10-10 BARF-Prinzip bildet das Beutetier (Reh, Hase, Geflügel) präzise nach: Knochen liefern Calcium, Innereien fungieren als natürliche Vitaminmischung.',
    clinicalDeepDives: [
      {
        title: 'Das mathematisch-biologische 80-10-10-Konzept',
        description: 'Reine Muskelfleischfütterung führt zur Entkalkung des Skeletts, zu viele Innereien verursachen Durchfall und zu viel Knochen führt zu Knochenkot (Obstipation). Das 80-10-10-Verhältnis ist der Goldstandard: 80% Fleisch (inkl. Herz, Magen), 10% fleischige Knochen und 10% Innereien (5% Leber + 5% Niere/Milz).',
        keyPoints: [
          '80% Fleisch: Liefert Energie, Protein, essenzielle Fettsäuren und biologisches Wasser.',
          '10% Knochen: Stellt das 1,2:1 Ca:P-Verhältnis ein und festigt den Stuhl.',
          '5% Leber: Deckt den täglichen Retinol-Bedarf (Vitamin A).',
          '5% Weitere Organe: Liefert Selen, B-Vitamine und endokrine Peptide.',
        ],
      },
      {
        title: '3-wöchiges Tiefkühlprotokoll zur Parasitenabwehr',
        description: 'Rohes Fleisch kann Gewebszysten (wie Neospora oder Toxoplasma) enthalten. Um absolute tierärztliche Sicherheit zu gewährleisten, MÜSSEN alle rohen Rindfleisch- und Geflügelkomponenten vor dem Verfüttern mindestens 21 Tage bei -20°C tiefgekühlt gelagert werden.',
        keyPoints: [
          '21 Tage bei -20°C inaktivieren Gewebsparasiten zuverlässig.',
          'Erhebt rohe Verdauungsenzyme, Probiotika und natives Kollagen unbeschadet.',
          'Auftauen ausschließlich langsam im Kühlschrank, niemals warm oder in der Mikrowelle.',
        ],
      },
      {
        title: 'Knochensicherheit: Fleischige Weichknochen vs tragende Röhrenknochen',
        description: 'Es gibt einen lebenswichtigen Unterschied zwischen weichen fleischigen Knochen (Entenhälse, Karkassen) und harten Markknochen (Rinderbeinscheiben). Entenhälse sind schwammig und werden von Hundemolaren zerkleinert. GEKOCHTE Knochen jeder Art sind absolut tabu: Hitze verändert das Kollagen, macht Knochen spröde und führt zu tödlichen Darmperforationen.',
        keyPoints: [
          'NIEMALS KNOCHEN KOCHEN. Gekochte Knochen splittern messerscharf.',
          'Entenhälse eignen sich für Hunde ab ca. 10 kg; für Kleinhunde wolfen.',
          'Den Hund beim Kauen von Knochen immer beaufsichtigen.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Hygiene & Kontrolle der Vorkühlung',
        instruction: 'Sicherstellen, dass Fleisch, Hälse und Organe die 3 Wochen bei -20°C durchlaufen haben. Nicht-poröse Schneidebretter und separate Messer verwenden.',
        criticalTip: 'Hände und Flächen vor und nach der Fleischverarbeitung 20 Sekunden mit Seife reinigen.',
      },
      {
        step: 2,
        title: 'Präzises Abwiegen auf der Digitalwaage',
        instruction: 'Exakt abwiegen: 952 g Rindfleisch, 136 g Rinderherz, 136 g Entenhälse, 68 g Leber und 68 g Niere.',
        criticalTip: 'Leber nicht nach Augenmaß füttern; dauerhafte Überdosierung über 10% birgt das Risiko einer Vitamin-A-Toxizität.',
      },
      {
        step: 3,
        title: 'Zerkleinern nach Hundegröße',
        instruction: 'Muskelfleisch und Herz in 2–5 cm große Stücke schneiden. Entenhälse für mittelgroße/große Hunde ganz belassen (Zahnreinigung), für Kleinhunde in Scheiben schneiden oder wolfen.',
      },
      {
        step: 4,
        title: 'Innereien fein hacken und untermischen',
        instruction: 'Leber und Niere sehr fein schneiden, sodass sie das Fleisch umhüllen. So wird verhindert, dass der Hund Organe aussortiert.',
      },
      {
        step: 5,
        title: 'Portionieren und Einfrieren',
        instruction: 'In Tagesportionen abfüllen und sofort wieder einfrieren. Die Portion für den nächsten Tag 24 Stunden vorher zum schonenden Auftauen in den Kühlschrank stellen.',
      },
    ],
    portionReference: [
      {
        dogWeight: '4,5 kg (10 lbs)',
        dailyGrams: '110 g pro Tag (basierend auf 2,5% des Körpergewichts)',
        dailyKcal: '185 kcal',
        mealsPerDay: '2 Mahlzeiten (je 55 g)',
        servingNotes: 'Knochenanteil fein gewolft oder kleingeschnitten verfüttern.',
      },
      {
        dogWeight: '11,3 kg (25 lbs)',
        dailyGrams: '280 g pro Tag (basierend auf 2,5% des Körpergewichts)',
        dailyKcal: '465 kcal',
        mealsPerDay: '2 Mahlzeiten (je 140 g)',
        servingNotes: '1 Entenhalsportion mit Fleischstücken und Innereienbrei geben.',
      },
      {
        dogWeight: '22,7 kg (50 lbs)',
        dailyGrams: '570 g pro Tag (basierend auf 2,5% des Körpergewichts)',
        dailyKcal: '945 kcal',
        mealsPerDay: '2 Mahlzeiten (je 285 g)',
        servingNotes: 'Ganze Entenhälse sorgen für eine hervorragende mechanische Zahnreinigung.',
      },
      {
        dogWeight: '34,0 kg (75 lbs)',
        dailyGrams: '850 g pro Tag (basierend auf 2,5% des Körpergewichts)',
        dailyKcal: '1.410 kcal',
        mealsPerDay: '2 Mahlzeiten (je 425 g)',
        servingNotes: 'Sehr aktive Hunde (Malinois, Jagdhunde) benötigen bis zu 3,0% (1.020 g täglich).',
      },
      {
        dogWeight: '45,4 kg (100 lbs)',
        dailyGrams: '1.135 g pro Tag (basierend auf 2,5% des Körpergewichts)',
        dailyKcal: '1.880 kcal',
        mealsPerDay: '2 Mahlzeiten (je 568 g)',
        servingNotes: 'In Edelstahlnäpfen servieren; keinesfalls direkt vor sportlicher Belastung füttern.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Tiefkühllagerung (Portionierte Dosen)',
        duration: 'Bis zu 6 Monate bei -18°C oder kälter',
        instructions: 'Vakuumieren oder Gefrierdosen nutzen. 3 Wochen Vorgefrierzeit einhalten.',
      },
      {
        method: 'Auftauprotokoll',
        duration: '24 Stunden im Kühlschrank bei ≤ 3°C',
        instructions: 'Auf einem tiefen Teller ganz unten im Kühlschrank auftauen. Kein warmes Wasser verwenden.',
      },
      {
        method: 'Haltbarkeit aufgetaut',
        duration: 'Maximal 48 bis 72 Stunden',
        instructions: 'Binnen 2 Tagen verfüttern. Reste, die länger als 20 Minuten im Napf standen, entsorgen.',
      },
    ],
    safetyAndPrecautions: {
      calciumRule: 'Entenhälse niemals durch reines Fleisch ersetzen, ohne Calcium zu ergänzen! Im 80-10-10-Plan IST der rohe Knochen die Calciumquelle. Stehen keine Hälse zur Verfügung, muss der Knochenanteil durch 1/2 Teelöffel Eierschalenpulver pro 450 g Fleisch ersetzt werden.',
      hygieneRule: 'Näpfe und Flächen sofort nach jeder Fütterung heiß spülen. Rohes Fleisch nie bei Zimmertemperatur stehen lassen.',
      contraindications: [
        'Immunsupprimierte Hunde (Chemotherapie, hohe Dosen Cortison).',
        'Haushalte mit schwerkranken Menschen, Säuglingen unter 1 Jahr oder Pflegebedürftigen.',
        'Hunde mit atrophischer Gastritis und mangelnder Magensäureproduktion (pH > 4,0).',
        'Schlinger, die große Stücke ungekaut herunterschlingen (außer Knochen werden komplett gewolft).',
      ],
      transitionSchedule: [
        'Tag 1–3: 12 h Fasten über Nacht, dann Einstieg mit gegartem Magerfleisch und Kürbis.',
        'Tag 4–7: Schrittweise rohes Fleisch, Herz und kleine weiche Knochenstücke einführen.',
        'Tag 8–10: Kleine Lebermengen (1%) zugeben, bis 5% Leber und 5% Niere erreicht sind.',
        'Ab Tag 11: Vollständiger 80-10-10 Roh-BARF-Plan.',
      ],
    },
    faq: [
      {
        question: 'Können rohe Knochen den Magen meines Hundes verletzen?',
        answer: 'Gekochte Knochen splittern, weil Hitze die Kollagenstruktur zerstört. Rohe fleischige Knochen wie Entenhälse bleiben biegsam und schwammig. Im Magen löst die starke Salzsäure des Hundes (pH 1,0–2,0) das Knochengewebe binnen Stunden vollständig auf.',
      },
      {
        question: 'Warum ist der Kot bei Rohfütterung kleiner, heller und fester?',
        answer: 'Das ist völlig normal und erwünscht. Da Rohfutter keine Getreidefüllstoffe oder unverdauliche Stärke enthält, verwertet der Hund über 90% der Nahrung. Der Knochenanteil macht den Stuhl heller und fester, wodurch die Analdrüsen beim Kotabsatz natürlich entleert werden.',
      },
      {
        question: 'Darf ich rohes Fleisch und Trockenfutter in einer Mahlzeit mischen?',
        answer: 'Tierärzte raten davon ab. Stärkereiches Trockenfutter benötigt einen höheren Magen-pH-Wert und längere Verweildauer, während rohes Fleisch in stark saurem Milieu schnell verdaut wird. Besser auf getrennte Mahlzeiten aufteilen (z.B. morgens Trockenfutter, abends BARF) oder ganz umstellen.',
      },
      {
        question: 'Was tun, wenn mein Hund Entenhälse unzerkaut herunterschlingt?',
        answer: 'Halten Sie das eine Ende des Entenhalses mit einer Küchenzange fest, während der Hund am anderen Ende kaut, um ihm ruhiges Kauen beizubringen, oder zerkleinern Sie die Hälse mit einem Fleischwolf (8mm-Lochscheibe).',
      },
    ],
  },

  'superfood-kibble-topper': {
    tag: 'SUPERFOOD-TOPPER',
    title: '80/20 Antioxidans-Superfood-Topper zur Trockenfutter-Aufwertung',
    heroTitle: 'Rezeptur-Bauplan: 80/20 Antioxidans-Superfood-Kibble-Topper',
    shortDesc: 'Ein wirtschaftlicher, tierärztlich fundierter Frischkost-Booster, der 20% des Trockenfutters durch hochwirksame Antioxidantien und Nährstoffe ersetzt.',
    summary: 'Basierend auf Forschungen der Purdue University zur caninen Onkologie: Der Ersatz von 20% der Trockenfutterkalorien durch frische, sekundäre Pflanzenstoffe senkt systemische Entzündungen und oxidativen Stress signifikant. Mit pochierten Weideeiern, gedämpften Brokkolisprossen, Waldheidelbeeren, kollagenreicher Knochenbrühe, Kelp und Hanfsamen.',
    badge: 'PURDUE 80/20 FRISCHKOST-PROTOKOLL // ANTIOXIDATIVE ZELLABWEHR',
    prepTime: '15 Minuten',
    cookTime: '5 Minuten (Dämpfen & Pochieren)',
    yieldAmount: 'Ca. 950 ml (20–30 Tagesportionen Topper)',
    lifeStage: 'Alle Lebensphasen (Erwachsene, Welpen & Senioren)',
    dietStyle: 'Funktioneller Vollwertkost-Booster (80% Trockenfutter + 20% Frische-Topper)',
    macroProfile: {
      caPhosphorusRatio: 'Neutral (Ergänzt Trockenfutter, ohne Mineralstoffverhältnisse zu stören)',
    },
    keyHighlights: [
      '40% Sanft pochierte Weideeier (Goldstandard-Protein mit biologischer Wertigkeit 100 & Cholin)',
      '30% Gedämpfte Brokkolisprossen & Waldheidelbeeren (Sulforaphan Nrf2-Aktivierung & Anthocyane)',
      '20% Geköchelte Rinderknochenbrühe (Kollagen, Glycin, Hyaluronsäure für Darmintegrität)',
      '10% Bio-Atlantik-Kelp & Hanfsamen (Bioverfügbares Jod & 3:1 Omega-6/Omega-3-Fettsäuren)',
      'Purdue-Forschung: 20% frisches Gemüse senkt das Risiko von Blasentumoren um bis zu 90%',
      'In Silikon-Eiswürfelformen portionsweise einfrierbar für müheloses tägliches Füttern',
    ],
    ingredients: [
      {
        name: 'Ganze Eier aus Freiland-/Weidehaltung (Sanft pochiert)',
        batchAmount: '4 große Weideeier (ca. 200 g)',
        category: 'Bioaktives Vollprotein & Cholin',
        role: 'Biologische Höchstwertigkeit (100) mit allen essenziellen Aminosäuren, Lutein, Zeaxanthin, Vitamin D und Cholin für Leber und Gehirn.',
        clinicalBenefit: 'Sanftes Pochieren inaktiviert Avidin im Eiweiß (verhindert Biotinmangel), während das Eigelb flüssig und vitaminreich bleibt.',
      },
      {
        name: 'Brokkolisprossen & Bio-Waldheidelbeeren (Wild)',
        batchAmount: '1,5 Tassen (ca. 150 g gesamt: 75 g Sprossen, 75 g Beeren)',
        category: 'Sekundäre Zellschutz-Pflanzenstoffe',
        role: 'Brokkolisprossen liefern bis zu 50-mal mehr Glucoraphanin als ausgewachsener Brokkoli und aktivieren zelluläre Schutzwege.',
        clinicalBenefit: 'Waldheidelbeeren enthalten Anthocyane, die die Blut-Hirn-Schranke überwinden und die Gehirnfunktion älterer Hunde schützen.',
      },
      {
        name: 'Geköchelte Rinder- oder Hühnerknochenbrühe (Ohne Zwiebeln & Knoblauch)',
        batchAmount: '1 Tasse (ca. 240 ml)',
        category: 'Kollagen & Glykosaminoglykane',
        role: 'Konzentrierte Quelle für gelöstes Typ-II-Kollagen, Glycin, Prolin, Glucosamin und Hyaluronsäure.',
        clinicalBenefit: 'Schließt mikroskopische Risse in der Darmschleimhaut ("Leaky Gut"), steigert die Schmackhaftigkeit und schmiert Gelenke.',
      },
      {
        name: 'Bio-Atlantik-Kelppulver & geschälte Hanfsamen',
        batchAmount: '2 gestrichene EL Kelp (8 g) + 2 EL Hanfsamen (20 g)',
        category: 'Spurenelemente & GLA-Fettsäuren',
        role: 'Kelp liefert organisches Jod für die Schilddrüse; Hanfsamen liefern Gamma-Linolensäure (GLA) und ein 3:1 Omega-6/Omega-3-Verhältnis.',
        clinicalBenefit: 'Sorgt für glänzendes Fell, lindert saisonalen Juckreiz und reguliert den Energiestoffwechsel.',
      },
    ],
    executiveRationale: 'Viele Tierhalter können sich 100% frische Vollkost für größere Hunde finanziell nicht dauerhaft leisten. Die 80/20-Regel ist der wissenschaftlich fundierteste Kompromiss der modernen Veterinärmedizin. Forschungen der Purdue University zeigten, dass Hunde, deren Trockenfutter nur 3-mal wöchentlich mit frischem Gemüse ergänzt wurde, eine um 70% bis 90% geringere Rate an Blasenkarzinomen aufwiesen. Dieser Topper bietet gezielten Zellschutz zum Bruchteil der Kosten.',
    clinicalDeepDives: [
      {
        title: 'Die 80/20-Regel der Purdue University: Evidenz statt Dogma',
        description: 'Trockenfutter wird bei hoher Hitze extrudiert, wodurch schädliche Glykationsendprodukte (AGEs) entstehen und sekundäre Pflanzenstoffe verloren gehen. Indem man 20% des Trockenfutters abzieht und durch lebendige Superfoods ersetzt, profitiert der Hund von kraftvollen Antioxidantien, ohne das Grundgleichgewicht des Alleinfutters zu stören.',
        keyPoints: [
          'Reduziert chronische Entzündungen und oxidative DNA-Schäden.',
          'Erhält die Nährstoffbalance (unter 20% bleibt die AAFCO-Vollwertigkeit stabil).',
          'Kostet einen Bruchteil einer reinen Frischefütterung bei ca. 80% des gesundheitlichen Nutzens.',
        ],
      },
      {
        title: 'Sulforaphan-Aktivierung und der Nrf2-Zellschutzweg',
        description: 'Sulforaphan ist der wirksamste natürliche Aktivator des Nrf2-Signalwegs bei Säugetieren und veranlasst Leber und Gewebe, körpereigene Schutzenzyme (Glutathion, Superoxiddismutase) zu produzieren. Brokkolisprossen müssen für 90 Sekunden sanft gedämpft oder fein püriert werden, um die Umwandlung zu maximieren.',
        keyPoints: [
          'Sprossen enthalten 20- bis 50-mal mehr Glucoraphanin als Brokkoliröschen.',
          'Überwindet die Blut-Hirn-Schranke zum Schutz kognitiver Funktionen im Alter.',
          'Unterstützt die Phase-II-Entgiftung der Leber von Umweltgiften.',
        ],
      },
      {
        title: 'Avidin vs. Biotin beim Ei: Warum sanftes Pochieren gewinnt',
        description: 'Rohes Eiklar enthält Avidin, ein Protein, das Biotin (Vitamin B7) bindet und dessen Aufnahme hemmt. Große Mengen rohen Eiweißes können zu Hautproblemen führen. Zu langes Kochen wiederum zerstört Lutein im Dotter. Sanftes Pochieren (3 Minuten in siedendem Wasser) inaktiviert Avidin im Eiklar vollständig, lässt den nährstoffreichen Dotter jedoch intakt.',
        keyPoints: [
          'Neutralisiert Avidin vollständig, hält den Dotter flüssig und bioverfügbar.',
          'Liefert hochkonzentriertes Cholin für Gehirnfunktion und Fettstoffwechsel.',
          'Perfektes Aminosäureprofil mit biologischer Wertigkeit 100.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Sanftes Pochieren der Eier',
        instruction: 'Einen flachen Topf mit Wasser erhitzen, sodass es sanft siedet (ca. 85°C; kleine Bläschen, kein sprudelndes Kochen). Die 4 Eier vorsichtig hineingleiten lassen. Exakt 3 Minuten pochieren, bis das Eiweiß fest, der Dotter aber flüssig ist. Mit dem Schaumlöffel herausnehmen.',
        criticalTip: 'Keinen Essig und kein Salz in das Pochierwasser geben.',
      },
      {
        step: 2,
        title: 'Kurzes Dämpfen der Brokkolisprossen',
        instruction: 'Die Brokkolisprossen für exakt 90 Sekunden in einen Dämpfeinsatz über kochendem Wasser geben und sofort entnehmen, um das Enzym Myrosinase zu schonen.',
      },
      {
        step: 3,
        title: 'Knochenbrühe handwarm erwärmen',
        instruction: '1 Tasse ungesalzene Knochenbrühe sanft erwärmen (unter 40°C). Sicherstellen, dass die Brühe absolut frei von Zwiebeln, Knoblauch und Lauchgewächsen ist.',
      },
      {
        step: 4,
        title: 'Pürieren und Emulgieren',
        instruction: 'Im Standmixer die pochierten Eier, gedämpften Sprossen, Waldheidelbeeren, warme Brühe, Kelppulver und Hanfsamen 30 bis 45 Sekunden zu einem violett-grünen cremigen Smoothie pürieren.',
      },
      {
        step: 5,
        title: 'Einfrieren in Silikon-Eiswürfelformen',
        instruction: 'Die Mischung in Silikonformen füllen (ca. 2 Esslöffel bzw. 30 ml pro Würfel). 4 bis 6 Stunden durchfrieren lassen, dann in beschriftete Gefrierbeutel umfüllen.',
      },
    ],
    portionReference: [
      {
        dogWeight: 'Sehr kleine Hunde (2–5 kg / 5–12 lbs)',
        dailyGrams: '1 Esslöffel pro Tag (ca. 15 g / ein halber gefrorener Würfel)',
        dailyKcal: '15–20 kcal',
        mealsPerDay: '1–2 Mahlzeiten',
        servingNotes: 'Trockenfutter täglich um 1 bis 2 Esslöffel reduzieren.',
      },
      {
        dogWeight: 'Kleine Hunde (6–11 kg / 13–25 lbs)',
        dailyGrams: '2 Esslöffel pro Tag (ca. 30 g / 1 ganzer gefrorener Würfel)',
        dailyKcal: '35 kcal',
        mealsPerDay: '1–2 Mahlzeiten',
        servingNotes: 'Trockenfutter täglich um ca. 1/8 bis 1/4 Tasse reduzieren.',
      },
      {
        dogWeight: 'Mittelgroße Hunde (12–23 kg / 26–50 lbs)',
        dailyGrams: '4 Esslöffel pro Tag (ca. 60 g / 2 Würfel)',
        dailyKcal: '70 kcal',
        mealsPerDay: '2 Mahlzeiten (1 Würfel pro Mahlzeit)',
        servingNotes: 'Trockenfutter täglich um ca. 1/3 bis 1/2 Tasse reduzieren.',
      },
      {
        dogWeight: 'Große Hunde (24–36 kg / 51–80 lbs)',
        dailyGrams: '6 Esslöffel pro Tag (ca. 90 g / 3 Würfel)',
        dailyKcal: '105 kcal',
        mealsPerDay: '2 Mahlzeiten (1,5 Würfel pro Mahlzeit)',
        servingNotes: 'Trockenfutter täglich um ca. 1/2 bis 2/3 Tasse reduzieren.',
      },
      {
        dogWeight: 'Riesenrassen (37+ kg / 81+ lbs)',
        dailyGrams: '8 Esslöffel pro Tag (ca. 120 g / 4 Würfel)',
        dailyKcal: '140 kcal',
        mealsPerDay: '2 Mahlzeiten (2 Würfel pro Mahlzeit)',
        servingNotes: 'Trockenfutter täglich um ca. 3/4 bis 1 Tasse reduzieren.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Silikonwürfel-Gefrierlagerung',
        duration: 'Bis zu 4 Monate bei -18°C',
        instructions: 'Gefrorene Würfel in Ziploc-Gefrierbeuteln lagern. Verhindert Vitaminoxidation zuverlässig.',
      },
      {
        method: 'Auftauen & Füttern',
        duration: '15 min bei Raumtemperatur oder direkt aufs warme Futter',
        instructions: 'Den gefrorenen Würfel direkt auf das warme Trockenfutter legen (Brühe schmilzt zu leckerer Soße) oder 15 min antauen lassen.',
      },
      {
        method: 'Frische Aufbewahrung (Flüssige Charge)',
        duration: 'Bis zu 3–4 Tage bei ≤ 3°C im Kühlschrank',
        instructions: 'Im Glas im Kühlschrank aufbewahren. Vor dem Übergießen kräftig schütteln.',
      },
    ],
    safetyAndPrecautions: {
      calciumRule: 'Da dieser Topper maximal 15% bis 20% der täglichen Kalorien ersetzt, ist KEIN zusätzlicher Calciumausgleich erforderlich. Das Basistrockenfutter deckt bereits 100% des Calciums und Phosphors ab.',
      hygieneRule: 'Stellen Sie sicher, dass die Knochenbrühe absolut frei von Zwiebeln, Knoblauch, Schalotten und Schnittlauch ist (Alliaceae verursachen Heinz-Körper-Anämie bei Hunden).',
      contraindications: [
        'Hunde mit akuter Pankreatitis oder extremer Fettunverträglichkeit (in dem Fall nur Eiweiß und magere Brühe verwenden).',
        'Hunde mit bekannter Jodüberempfindlichkeit oder Schilddrüsenüberfunktion (Kelppulver weglassen).',
        'Bei heranwachsenden Welpen nie mehr als 20% der Futterkalorien ersetzen (Welpen benötigen exakte Mineralstoffrelationen).',
      ],
      transitionSchedule: [
        'Tag 1–2: Mit 1/2 Teelöffel Topper auf dem gewohnten Futter beginnen, um die Verträglichkeit zu prüfen.',
        'Tag 3–4: Auf die halbe empfohlene Menge steigern.',
        'Ab Tag 5: Volle empfohlene Menge füttern und Trockenfutter um 20% reduzieren.',
      ],
    },
    faq: [
      {
        question: 'Nimmt mein Hund durch diesen Topper an Gewicht zu?',
        answer: 'Nicht, wenn Sie die 80/20-Regel befolgen! Die Faustregel lautet: Für jede 50 Kalorien Topper, die Sie hinzufügen, MÜSSEN Sie 50 Kalorien Trockenfutter (ca. 1/8 Tasse) abziehen. Wer den Topper einfach auf den vollen Napf gibt, riskiert Übergewicht.',
      },
      {
        question: 'Kann ich tiefgekühlte Waldheidelbeeren statt frischer Beeren verwenden?',
        answer: 'Absolut! Tiefgekühlte wilde Heidelbeeren sind oft sogar besser, da sie direkt nach der Ernte schockgefrostet werden, was die Anthocyane optimal schützt. Wilde Heidelbeeren sind kleiner und haben mehr Schale und doppelt so viele Antioxidantien wie Zuchtheidelbeeren.',
      },
      {
        question: 'Was tun, wenn mein Hund nur den Topper ableckt und das Trockenfutter stehen lässt?',
        answer: 'Geben Sie einen Schuss lauwarmes Wasser oder lauwarme Knochenbrühe in den Napf und rühren Sie gründlich um, sodass jede Futterkrokette mit dem Topper glasiert wird. So frisst der Hund den gesamten Napf restlos leer.',
      },
      {
        question: 'Darf ich diesen Topper meinem Welpen geben?',
        answer: 'Ja, aber bei Welpen unter 12 Monaten auf maximal 10% der täglichen Kalorien beschränken. Wachsende Welpen benötigen das streng ausbalancierte Calcium-Phosphor-Verhältnis ihres Welpenfutters für einen gesunden Knochenbau.',
      },
    ],
  },
};
