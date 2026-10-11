import type { BrandReview, BrandReviewSlug } from './types';

export const deBrandReviews: Record<BrandReviewSlug, BrandReview> = {
  'blue-buffalo': {
    slug: 'blue-buffalo',
    name: 'Blue Buffalo',
    grade: 'Bewertung: B+',
    score: '8.4 / 10',
    badge: 'Beliebtes kommerzielles Trockenfutter mit hohem Fleischanteil',
    category: 'Kommerzielles Trockenfutter & Nassfutter-Dosen',
    countryOfOrigin: 'Wilton, Connecticut, USA (Gegründet 2003)',
    parentCompany: 'General Mills (2018 für 8 Mrd. USD übernommen)',
    manufacturingFacilities: 'Eigene Produktionswerke in Joplin (Missouri) & Richmond (Indiana)',
    recallRecord: {
      status: 'PAST_RECALLS',
      label: 'Dokumentierte FDA-Rückrufe in der Vergangenheit',
      details: 'Historische FDA-Rückrufaktionen umfassen erhöhte Vitamin-D-Werte (2010), Feuchtigkeits-/Schimmelprobleme (2010), unbeabsichtigte Propylenglykol-Spuren in Nassfutter (2015) sowie den freiwilligen Rückruf von Kauknochen wegen Salmonellengefahr (2015). Wurde zudem im FDA-Untersuchungsbericht 2018-2019 zu DCM und hülsenfrüchtereichem Trockenfutter aufgeführt.',
      history: [
        '2010: Freiwilliger Rückruf wegen erhöhter Vitamin-D-Werte bei ausgewählten Trockenfutter-Rezepturen.',
        '2010: Feuchtigkeitsabweichung mit potenziellem Schimmelrisiko bei bestimmten Produktionschargen.',
        '2015: Klasse-II-Rückruf von Dosenfutter wegen versehentlicher Propylenglykol-Kontamination.',
        '2018-2019: Erwähnung im FDA-Bericht über den Zusammenhang von dilatativer Kardiomyopathie (DCM) und getreidefreien, hülsenfrüchtereichen Rezepturen.',
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
      'Echtes entbeintes Fleisch (Huhn, Lachs oder Rind) ist bei allen Rezepturen Zutat Nr. 1.',
      'Kaltgeformte LifeSource Bits schützen hitzeempfindliche Vitamine, Mineralien und Antioxidantien vor der Extrusionshitze.',
      'Vollständig frei von Mais, Weizen, Soja sowie künstlichen chemischen Farb- und Aromastoffen.',
      'Breites Sortiment von getreidefreiem Wilderness bis hin zu magenschonendem Life Protection mit Vollkorn.',
    ],
    cons: [
      'Erhöhter Kohlenhydratanteil (42-48%) kann bei wenig aktiven oder kastrierten Hunden zu Übergewicht führen.',
      'Getreidefreie Wilderness-Sorten enthalten nennenswerte Mengen Erbsenprotein, Erbsenstärke und Kartoffeln.',
      'Frühere FDA-Rückrufe spiegeln die typischen Herausforderungen industrieller Massenproduktion wider.',
    ],
    overview:
      'Blue Buffalo ist eine der führenden Tierfuttermarken Nordamerikas, aufgebaut auf dem Prinzip „Fleisch an erster Stelle“ und konsequenter Aufklärung gegen minderwertige Geflügelnebenproduktmehle. Nach der Übernahme durch General Mills im Jahr 2018 bietet die Marke weiterhin proteinreiche Trocken- und Nassfuttersorten über verschiedene Speziallinien wie Wilderness, Life Protection Formula und Basics Limited Ingredient an.',
    deepDive: [
      'Nährstoffarchitektur & LifeSource Bits: Im Gegensatz zu herkömmlichem Trockenfutter, bei dem alle Zutaten Temperaturen von über 200°C ausgesetzt werden, trennt Blue Buffalo Vitamine und Antioxidantien in kaltgepresste LifeSource Bits ab. Diese Technologie bewahrt empfindliche Vitamine (wie Vitamin C, Vitamin E und B-Komplex) sowie aktive Bioflavonoide vor dem thermischen Abbau.',
      'Kohlenhydrat- und Hülsenfrüchte-Balance: Während Wilderness-Rezepturen einen soliden Proteingehalt von 34-38% liefern, zeigen Laboranalysen einen Gesamtkohlenhydratanteil zwischen 42% und 48%. Bei getreidefreien Sorten setzt die Marke auf Erbsen und Tapiokastärke. Bei Hunden mit Neigung zu Bauchspeicheldrüsenentzündungen oder Insulinresistenz sollte die Futtermenge genau abgewogen werden.',
      'Feuchtigkeitshaushalt & Nierenfunktion: Trockenfutter enthält lediglich 8-10% Feuchtigkeit, was bei ausschließlicher Fütterung über Jahre hinweg eine dauerhafte Belastung für die Nieren darstellt. Tierärzte empfehlen, die Mahlzeit mit etwas lauwarmem Wasser, ungesalzener Knochenbrühe oder 20% frischem Futter anzureichern, um einer Urinkonzentration vorzubeugen.',
    ],
    ingredientPillars: [
      {
        title: '1. Namentlich genanntes Tierprotein',
        score: '9.0 / 10',
        explanation: 'Entbeintes Huhn, Rind, Ente oder Lachs steht stets an erster Stelle, ergänzt durch Einzelfleischmehle für konzentrierte Aminosäuren.',
      },
      {
        title: '2. Kohlenhydratanteil',
        score: '7.5 / 10',
        explanation: 'Der Stärkegehalt liegt bei 42-48%. Vollkornvarianten nutzen Naturreis und Hafer, getreidefreie Sorten greifen auf Erbsen und Kartoffeln zurück.',
      },
      {
        title: '3. Verarbeitung & Hitzeeinwirkung',
        score: '8.8 / 10',
        explanation: 'Patentierte kaltgeformte LifeSource Bits verhindern die thermische Zerstörung lebenswichtiger Mikronährstoffe während des Extrusionsvorgangs.',
      },
      {
        title: '4. Rückverfolgbarkeit & Sicherheit',
        score: '7.8 / 10',
        explanation: 'Moderne unternehmenseigene Werke in Missouri und Indiana führten nach früheren Rückrufen strenge Qualitätskontrollen ein.',
      },
    ],
    keyProductLines: [
      {
        name: 'Wilderness High-Protein',
        type: 'Getreidefreies Trockenfutter mit hohem Fleischanteil',
        description: 'Angelehnt an die ursprüngliche Wolfsernährung mit 34%+ Protein, echtem Fleisch und völlig ohne Getreide oder Gluten.',
        targetDogs: 'Aktive erwachsene Hunde, Arbeitshunderassen und Hunde mit hohem Proteinbedarf für den Muskelaufbau.',
      },
      {
        name: 'Life Protection Formula',
        type: 'Ausgewogenes Vollkorn-Trockenfutter',
        description: 'Vollwertige Rezeptur mit Naturreis, Gerste und Haferflocken in Kombination mit entbeintem Qualitätsfleisch.',
        targetDogs: 'Typische Familienhunde mit normalem Aktivitätsniveau und gesunder Verdauung.',
      },
      {
        name: 'Basics Limited Ingredient Diet (LID)',
        type: 'Monoprotein-Schonkost für sensible Hunde',
        description: 'Nur eine einzige tierische Proteinquelle (Pute, Ente oder Lachs) mit bekömmlichen Kohlenhydraten, ohne Eier oder Milchprodukte.',
        targetDogs: 'Hunde mit Futtermittelunverträglichkeiten, ständigem Juckreiz oder empfindlichem Magen-Darm-Trakt.',
      },
    ],
    veterinaryVerdict:
      'Blue Buffalo ist ein überdurchschnittlich gutes kommerzielles Trockenfutter, das Standard-Supermarktfutter in puncto Zutatenqualität deutlich überlegen ist. Auch wenn der Kohlenhydratanteil höher ist als biologisch optimal, machen der klare Fleischfokus und die LifeSource Bits es zu einer verlässlichen Wahl.',
    feedingRecommendation:
      'Wir empfehlen, die Proteinquelle alle 3-4 Monate zu wechseln und jede Portion mit etwas lauwarmem Wasser oder Knochenbrühe anzufeuchten. Bei Hunden ab 7 Jahren verbessert eine Ergänzung mit 15-20% frischem, vollwertigem Futter die Vitalität spürbar.',
    affiliateProductKeys: [
      'blue-buffalo-wilderness-chicken-24lb',
      'blue-buffalo-wilderness-salmon-24lb',
      'blue-buffalo-wilderness-chicken-4lb',
    ],
  },
  'rachael-ray-nutrish': {
    slug: 'rachael-ray-nutrish',
    name: 'Rachael Ray Nutrish',
    grade: 'Bewertung: C+ / B-',
    score: '7.2 / 10',
    badge: 'Preiswertes Supermarktfutter',
    category: 'Günstiges Trockenfutter & Feuchtfutterschalen',
    countryOfOrigin: 'Meadville, Pennsylvania, USA (Eingeführt 2008)',
    parentCompany: 'Post Holdings (2023 von J.M. Smucker übernommen)',
    manufacturingFacilities: 'US-Produktionsstätten in Pennsylvania und Kansas',
    recallRecord: {
      status: 'MONITORED',
      label: 'Wenig Rückrufe, im FDA-Bericht erwähnt',
      details: 'Geringes formelles Rückrufaufkommen. Vereinzelter freiwilliger Rückruf von Feuchtfutter im Jahr 2019 wegen erhöhtem Vitamin D. Im FDA-Bericht 2019 zu hohem Hülsenfrüchteanteil in günstigen getreidefreien Futtern aufgeführt.',
      history: [
        '2019: Freiwillige Rücknahme bestimmter Feuchtfutterchargen wegen überhöhter Vitamin-D-Konzentration.',
        '2018-2019: Erwähnung im explorativen FDA-Bericht zu dilatativer Kardiomyopathie bei Hunden.',
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
      'Sehr günstiger Kilopreis, der eine solide Grundernährung für preisbewusste Familien ermöglicht.',
      'Weit verbreitet und in fast jedem Supermarkt erhältlich.',
      'Peak- und Dish-Linien bieten mehr Fleisch und sichtbare getrocknete Gemüsestückchen.',
      'Ein Teil der Einnahmen wird kontinuierlich an Tierschutzorganisationen und Tierheime gespendet.',
    ],
    cons: [
      'Standard-Rezepturen setzen stark auf Maisklebermehl, gemahlenen Mais und Erbsen als Füllstoffe.',
      'Geringer Gehalt an marinen Omega-3-Fettsäuren (EPA/DHA), erfordert Lachsöl-Ergänzung.',
      'Hohe Kohlenhydratlast (bis zu 52%) erhöht das Übergewichtsrisiko bei ruhigen Haushunden.',
    ],
    overview:
      'Rachael Ray Nutrish wurde 2008 in Zusammenarbeit mit Fernsehköchin Rachael Ray gegründet, um bezahlbare Alternativen mit besseren Zutaten in den Supermarkt zu bringen. Heute unter Post Holdings geführt, bietet die Marke Einsteigerrezepturen sowie höherwertige Varianten wie Nutrish Peak und Nutrish Dish.',
    deepDive: [
      'Qualitätsunterschiede der Produktlinien: Es ist wichtig, zwischen Standard-Nutrish und der höherwertigen „Peak“-Linie zu unterscheiden. Standardrezepturen nennen zwar Fleisch an erster Stelle, gefolgt von Maiskleber und Erbsen. Die Peak-Rezepturen hingegen verzichten komplett auf Mais, Weizen und Soja und erreichen beachtliche 30% Rohprotein.',
      'Fettqualität und Fettsäuren: Hauptfettquelle ist Hühnerfett mit natürlichen Tocopherolen. Marine Omega-3-Fettsäuren (EPA und DHA) sind jedoch nur spärlich vorhanden. Bei dauerhafter Fütterung des Standardfutters profitiert der Hund enorm von einem Teelöffel reinem Wildlachsöl.',
      'Preis-Leistungs-Verhältnis: Nutrish erfüllt eine wichtige Funktion, indem es eine spürbare Verbesserung gegenüber billigsten Handelsmarken mit reinen Schlachtabfällen bietet. Dennoch sollten Halter die Etiketten auf das sogenannte Aufteilen von Hülsenfrüchten (Ingredient Splitting) prüfen.',
    ],
    ingredientPillars: [
      {
        title: '1. Namentlich genanntes Tierprotein',
        score: '7.5 / 10',
        explanation: 'Echtes Huhn oder Rind steht an erster Stelle, Einsteigersorten ergänzen den Proteingehalt jedoch stark mit pflanzlichem Maiskleber.',
      },
      {
        title: '2. Kohlenhydratanteil',
        score: '6.8 / 10',
        explanation: 'Der Kohlenhydratanteil ist mit 46-52% hoch, was eine genaue Portionierung mit der Küchenwaage erforderlich macht.',
      },
      {
        title: '3. Zusatzstoffe & Aromen',
        score: '7.6 / 10',
        explanation: 'Mit natürlichen Tocopherolen konserviert; keine künstlichen Farbstoffe, setzt jedoch auf natürliche Geschmacksextrakte.',
      },
      {
        title: '4. Rückverfolgbarkeit & Produktion',
        score: '7.2 / 10',
        explanation: 'Hergestellt in US-Werken unter branchenüblichen Qualitätskontrollen mit geringer Beanstandungshistorie.',
      },
    ],
    keyProductLines: [
      {
        name: 'Nutrish Peak High Protein',
        type: 'Getreidefreie proteinreiche Rezeptur',
        description: 'Trocken- und Nassfutter mit 30% Protein, echtem Fleisch und ohne Mais, Weizen oder Soja.',
        targetDogs: 'Hunde, die ein besseres Protein-Kohlenhydrat-Verhältnis zum bezahlbaren Preis benötigen.',
      },
      {
        name: 'Nutrish Dish Whole Ingredients',
        type: 'Trockenfutter mit echten Gemüsestücken',
        description: 'Schonend gegarte Kroketten kombiniert mit sichtbaren Stücken von Karotten, Erbsen und Äpfeln.',
        targetDogs: 'Mäkelige Fresser, die Abwechslung in der Futterschüssel schätzen.',
      },
      {
        name: 'Nutrish Real Beef & Brown Rice',
        type: 'Klassisches Budget-Erhaltungsfutter',
        description: 'Klassische Rezeptur aus Rindfleisch mit bekömmlichem Naturreis für den Alltag.',
        targetDogs: 'Robuste Familienhunde ohne Futtermittelallergien bei begrenztem Haushaltsbudget.',
      },
    ],
    veterinaryVerdict:
      'Nutrish ist eine akzeptable Einstiegsoption, sofern man zu den höherwertigen Linien „Peak“ oder „Dish“ greift. Meiden Sie maishaltige Basissorten und ergänzen Sie das Futter stets mit Feuchtigkeit und Omega-3-Fettsäuren.',
    feedingRecommendation:
      'Ergänzen Sie bei der Fütterung von Standard-Trockenfutter täglich 1 Teelöffel reines Lachsöl für EPA/DHA und wiegen Sie die Portionen genau ab, um Übergewicht vorzubeugen.',
    affiliateProductKeys: [
      'nutrish-peak-variety-pack-wet',
      'nutrish-beef-pea-brown-rice-28lb',
    ],
  },
  'pure-balance': {
    slug: 'pure-balance',
    name: 'Pure Balance',
    grade: 'Bewertung: B (Bester Preis-Leistungs-Tipp)',
    score: '8.1 / 10',
    badge: 'Beste Budget-Wahl im Supermarkt-Segment',
    category: 'Günstiges Handelsmarken-Trocken- & Nassfutter',
    countryOfOrigin: 'USA (Walmart-Eigenmarke, eingeführt 2012)',
    parentCompany: 'Walmart Inc.',
    manufacturingFacilities: 'Hergestellt von etablierten Lohnherstellern (hauptsächlich Ainsworth Pet Nutrition) in US-Werken',
    recallRecord: {
      status: 'CLEAN',
      label: 'Bemerkenswert saubere Sicherheitshistorie',
      details: 'Pure Balance weist eine makellose Bilanz auf: Seit der Markteinführung im Jahr 2012 gab es für die Haupttrockenfutterlinien keinen einzigen schwerwiegenden Klasse-I-Rückruf der FDA.',
      history: [
        'Keine FDA-Klasse-I-Rückrufe wegen Krankheitserregern oder Toxinen bei den Vorzeige-Trockenfutterprodukten.',
        'Hervorragende Qualitätswerte im Vergleich zu herkömmlichem Supermarktfutter.',
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
      'Hervorragendes Preis-Leistungs-Verhältnis: fleischbasierte Rezepturen zu Discounter-Preisen.',
      '100% frei von Mais, Weizen, Soja, Geflügelnebenproduktmehl sowie künstlichen Farb- und Konservierungsstoffen.',
      'Echtes Tierprotein (Lachs, Lamm oder Huhn) ist bei allen Rezepturen die Zutat Nr. 1.',
      'Vorbildliche Historie ohne Rückrufe im Vergleich zu vielen traditionsreichen Massenmarken.',
    ],
    cons: [
      'Handelsmarke, die über Drittanbieter mit wechselnden Produktionsverträgen gefertigt wird.',
      'Moderater bis hoher Kohlenhydratanteil (46-50%) aus Erbsen, Kartoffeln und braunem Reis.',
      'Weniger veröffentlichte klinische Fütterungsstudien im Vergleich zu tiermedizinischen Diäten.',
    ],
    overview:
      'Pure Balance wurde 2012 von Walmart ins Leben gerufen, um hochwertige Tiernahrung bezahlbar zu machen. Durch den Verzicht auf Mais, Weizen, Soja und Farbstoffe bot Walmart eine echte Alternative zu teuren Fachhandelsmarken – bei rund 40% niedrigerem Kilopreis.',
    deepDive: [
      'Lohnfertigung und Qualitätskontrolle: Als Handelsmarke wird die Produktion an renommierte Partner vergeben (hauptsächlich Ainsworth Pet Nutrition / Post Holdings). Trotz des günstigen Preises hält die Marke die strengen AAFCO-Vorgaben ein und ist seit über einem Jahrzehnt rückruffrei.',
      'Zutatenvergleich mit Fachhandelsmarken: Vergleicht man Pure Balance Lachs & Erbsen (getreidefrei) mit teuren Marken aus dem Zoofachhandel, zeigen sich nahezu identische Zutatenlisten: entbeinter Lachs an erster Stelle, gefolgt von Lachsmehl und Kichererbsen. Eine ideale Wahl für sparsame Halter, die Wert auf gute Zutaten legen.',
      'Tierärztliche Bewertung der Kohlenhydrate: Wie bei fast allen Futtern dieser Preisklasse liegt der Kohlenhydratanteil bei 46-50%. Für aktive Hunde ist das eine solide Energiequelle; bei älteren oder trägen Tieren sollte die Futtermenge zwingend grammgenau abgewogen werden.',
    ],
    ingredientPillars: [
      {
        title: '1. Namentlich genanntes Tierprotein',
        score: '8.4 / 10',
        explanation: 'Echtes Fleisch führt jede Rezeptur an, ergänzt durch konzentriertes Einzelfleischmehl statt anonymer tierischer Nebenerzeugnisse.',
      },
      {
        title: '2. Füllstoffe & Zusatzstoffe',
        score: '8.8 / 10',
        explanation: 'Frei von Mais, Weizen, Soja sowie künstlichen Farbstoffen (kein Allurarot oder Tartrazin) und chemischen Antioxidantien wie BHA/BHT.',
      },
      {
        title: '3. Wirtschaftliche Erschwinglichkeit',
        score: '9.8 / 10',
        explanation: 'Eines der besten Nährstoff-pro-Euro-Verhältnisse im gesamten modernen Lebensmitteleinzelhandel.',
      },
      {
        title: '4. Transparenz der Lieferkette',
        score: '7.0 / 10',
        explanation: 'Als Handelsmarke ist die direkte Rückverfolgbarkeit bis zum Bauernhof naturgemäß weniger detailliert als bei ethischen Manufakturen.',
      },
    ],
    keyProductLines: [
      {
        name: 'Pure Balance Grain-Free Salmon & Pea',
        type: 'Hypoallergene Fisch-Rezeptur',
        description: 'Auf Lachs basierende Rezeptur für Hunde mit Unverträglichkeiten gegenüber Geflügel oder Getreide.',
        targetDogs: 'Hunde mit Neigung zu juckender Haut, Ohrreizungen oder stumpfem Fell.',
      },
      {
        name: 'Pure Balance Chicken & Brown Rice',
        type: 'Bekömmliche Vollkorn-Rezeptur',
        description: 'Klassisches Erhaltungsfutter aus echtem Hühnerfleisch und magenschonendem Naturreis.',
        targetDogs: 'Familienhunde mit normaler Verdauung und durchschnittlicher Aktivität.',
      },
      {
        name: 'Pure Balance Wild & Free Superfood Blend',
        type: 'Proteinreiches Trockenfutter mit Superfoods',
        description: 'Rezeptur angereichert mit Karotten, Heidelbeeren und Cranberrys für einen extra Antioxidantien-Schub.',
        targetDogs: 'Aktive Rassen mit höherem Kalorien- und Vitalstoffbedarf.',
      },
    ],
    veterinaryVerdict:
      'Pure Balance ist ohne Zweifel eines der besten preiswerten Trockenfutter auf dem Markt. Es bietet die fleischbasierte, maisfreie Rezeptur teurer Fachhandelsmarken zum Discounterpreis und glänzt mit einer überraschend makellosen Historie.',
    feedingRecommendation:
      'Für maximalen Nutzen zum kleinen Preis empfehlen wir, Pure Balance mit günstigen frischen Zutaten aufzuwerten: zwei Esslöffel reines Kürbispüree, zweimal wöchentlich ein weichgekochtes Ei oder ein Schuss warme Knochenbrühe.',
    affiliateProductKeys: [],
  },
  'ollie': {
    slug: 'ollie',
    name: 'Ollie Frisches Hundefutter',
    grade: 'Bewertung: A (Goldstandard)',
    score: '9.6 / 10',
    badge: '100% Lebensmittelqualität & Frische-Goldstandard',
    category: 'Schonend gegartes frisches Hundefutter in Lebensmittelqualität',
    countryOfOrigin: 'New York, NY, USA (Gegründet 2016)',
    parentCompany: 'Ollie Pets Inc.',
    manufacturingFacilities: 'USDA-geprüfte Profiküchen für Humanernährung in Pennsylvania und New Jersey',
    recallRecord: {
      status: 'CLEAN',
      label: 'Makellose Historie ohne jeden Rückruf',
      details: 'Ollie weist seit seiner Gründung 2016 eine lückenlose weiße Weste ohne Rückrufe oder FDA-Warnungen auf. Da das Futter in USDA-zertifizierten Küchen nach strengen Lebensmittelstandards zubereitet wird, ist die biologische Sicherheit ungleich höher als in Tierfutterfabriken.',
      history: [
        'Null FDA-Rückrufe oder Sicherheitswarnungen seit der Gründung im Jahr 2016.',
        'Präzise Gartemperatur zerstört Krankheitserreger zuverlässig und schont alle Mikronährstoffe.',
      ],
    },
    macroProfile: {
      protein: '38% - 44% (TS)',
      fat: '22% - 28% (TS)',
      carbohydrates: '22% - 28% (TS)',
      fiber: '3.5%',
      moisture: '72.0%',
    },
    pros: [
      '100% zutatenreines Fleisch und Gemüse in Lebensmittelqualität, in jeder Portion deutlich erkennbar.',
      'Schonend bei niedriger Temperatur gegart: beseitigt Keime und bewahrt empfindliche Enzyme und Vitamine.',
      'Von Fachtierärzten für Tierernährung (ACVN) individuell nach Alter, Gewicht und Aktivität portioniert.',
      'Natürliche biologische Feuchtigkeit (72%) schützt Nieren, Blase und Stoffwechselgesundheit.',
      'Einwandfreie Historie ohne Beanstandungen seit Gründung.',
    ],
    cons: [
      'Gehobene monatliche Kosten (ca. 180 bis 350 USD/Monat je nach Hundegewicht und Kalorienbedarf).',
      'Benötigt Platz im Gefrierschrank und rechtzeitiges Auftauen im Kühlschrank.',
      'Direktvertrieb im Abonnement, nicht im stationären Einzelhandel verfügbar.',
    ],
    overview:
      'Ollie wurde 2016 gegründet, um das Wohlbefinden und die Lebenserwartung von Hunden durch echte, frische Nahrung anstelle von industriell totgekochtem Trockenfutter zu verbessern. Die von Fachtierärzten (ACVN) entwickelten Rezepte werden in USDA-Küchen schonend zubereitet und exakt auf den Kalorienbedarf Ihres Hundes abgestimmt geliefert.',
    deepDive: [
      'Schongaren im Vergleich zur Extrusion: Konventionelles Trockenfutter wird bei 150-200°C unter extremem Druck extrudiert, wodurch schädliche Glykierungs-Endprodukte (AGEs) entstehen und Eiweiße denaturieren. Ollie gart Muskelfleisch und Gemüse dagegen langsam bei sanfter Hitze. Studien belegen eine um bis zu 40% höhere Proteinverdaulichkeit und eine überlegene Nährstoffaufnahme.',
      'Nierenschutz durch natürliche Nahrungsfeuchtigkeit: Der Verdauungstrakt des Hundes ist evolutionär darauf ausgelegt, über 70% seines Wasserbedarfs aus der Beute zu decken. Trockenfutter (8-10% Feuchte) hält Hunde in chronischer unterschwelliger Dehydrierung und belastet die Nieren. Ollie liefert 72% Feuchtigkeit und beugt damit Nierenleiden und Harnsteinen vor.',
      'Exakte Kalibrierung gegen Übergewicht: Übergewicht ist die häufigste vermeidbare Ursache für verkürzte Hundeleben. Ollie portioniert die Mahlzeiten passgenau nach Ruhe- (RER) und Erhaltungsenergiebedarf (MER) und hält so den Body Condition Score verlässlich im Idealbereich (4-5 von 9).',
    ],
    ingredientPillars: [
      {
        title: '1. Fleisch in 100% Lebensmittelqualität',
        score: '9.9 / 10',
        explanation: 'USDA-geprüftes Muskelfleisch von Rind, Huhn, Pute und Lamm. Keinerlei Futternebenprodukte, Kadaverreste oder Altspeisefette.',
      },
      {
        title: '2. Bioverfügbarkeit der Nährstoffe',
        score: '9.8 / 10',
        explanation: 'Frisches Gemüse (Süßkartoffeln, Karotten, Spinat, Heidelbeeren) liefert Ballaststoffe und Antioxidantien auf natürliche Weise.',
      },
      {
        title: '3. Mikrobiom & Darmgesundheit',
        score: '9.7 / 10',
        explanation: 'Klinische Studien zeigen eine höhere bakterielle Vielfalt im Darm, geringere Kotmengen und exzellente Bekömmlichkeit.',
      },
      {
        title: '4. Produktionssicherheit',
        score: '9.9 / 10',
        explanation: 'Hergestellt in Lebensmittelküchen unter behördlicher Aufsicht mit null Rückrufen seit Gründung.',
      },
    ],
    keyProductLines: [
      {
        name: 'Frisches Rindfleisch mit Süßkartoffeln',
        type: 'Proteinreiche Muskelaufbau-Rezeptur',
        description: 'Mageres Rindfleisch, Rinderleber, Süßkartoffeln, Erbsen und Blaubeeren schonend gegart.',
        targetDogs: 'Aktive Hunde, wachsende Junghunde und wählerische Genießer.',
      },
      {
        name: 'Frisches Hühnchen mit Karotten',
        type: 'Magenschonende Schonkost-Rezeptur',
        description: 'Zartes Hühnerfleisch, Hühnerherzen, Leber, Karotten und Reis. Sehr leicht verdaulich und fettarm.',
        targetDogs: 'Hunde mit empfindlichem Magen oder Neigung zu Verdauungsbeschwerden.',
      },
      {
        name: 'Frisches Putenfleisch mit Blaubeeren',
        type: 'Allergikerfreundliche Geflügel-Rezeptur',
        description: 'Nährstoffreiche Pute, Putenleber, Grünkohl, Karotten und antioxidantienreiche Blaubeeren.',
        targetDogs: 'Senioren, allergiegeplagte Hunde und Vierbeiner mit Gelenkproblemen.',
      },
    ],
    veterinaryVerdict:
      'Ollie ist der unbestrittene Goldstandard moderner Hundeernährung. Die klinischen Vorteile von schonend gegartem Futter in Lebensmittelqualität gegenüber Trockenfutter bei Verdaulichkeit, Fellglanz und Organvitalität sind wissenschaftlich überzeugend.',
    feedingRecommendation:
      'Wenn eine 100%ige Ollie-Fütterung Ihr Budget übersteigt, empfehlen wir eine 50/50-Kombination: Füttern Sie zur Hälfte hochwertiges Trockenfutter und toppen Sie es mit 50% frischem Ollie. Bereits ein 25%iger Frischfutteranteil senkt Entzündungsprozesse im Körper spürbar.',
    affiliateProductKeys: [
      'ollie-chicken-apple-jerky-treats',
    ],
  },
  'open-farm': {
    slug: 'open-farm',
    name: 'Open Farm',
    grade: 'Bewertung: A-',
    score: '9.2 / 10',
    badge: 'Pionier für artgerechte Haltung & ethische Beschaffung',
    category: 'Ultra-Premium rückverfolgbares Trockenfutter, RawMix & Nassfutter',
    countryOfOrigin: 'Toronto, Ontario, Kanada (Gegründet 2014)',
    parentCompany: 'Open Farm Inc.',
    manufacturingFacilities: 'Familiengeführte, SQF-zertifizierte Produktionsstätten in den USA und Kanada',
    recallRecord: {
      status: 'CLEAN',
      label: 'Makellose rückruffreie Sicherheitsbilanz',
      details: 'Open Farm kann auf eine tadellose Bilanz ohne einen einzigen Rückruf seit seiner Gründung 2014 verweisen. Die Marke zeichnet sich durch Chargen-Rückverfolgbarkeit, unabhängige Keimanalysen jeder Charge und transparente Laborberichte aus.',
      history: [
        'Keinerlei FDA-Rückrufe oder regulatorische Warnungen seit Markteintritt 2014.',
        'Online-Chargensuche ermöglicht die Rückverfolgung jeder Zutat bis zum zertifizierten Bauernhof.',
      ],
    },
    macroProfile: {
      protein: '32% - 38% (TS)',
      fat: '16% - 20% (TS)',
      carbohydrates: '32% - 38% (TS)',
      fiber: '4.5%',
      moisture: '10.0%',
    },
    pros: [
      'Branchenführende 100%ige Rückverfolgbarkeit: Chargencode online eingeben und den Herkunftshof jeder Zutat sehen.',
      'Ausschließlich Fleisch aus Certified Humane-Haltung und nachhaltiger Ocean Wise-Wildfisch.',
      'Innovative RawMix-Rezeptur: Kroketten mit gefriergetrockneter Knochenbrühe und Innereien für höchste Akzeptanz.',
      'Frei von Geflügelnebenproduktmehlen, künstlichen Lockstoffen oder getricksten Hülsenfruchtanteilen.',
      'Sowohl Sorten mit bekömmlichem Urgetreide (Hafer, Hirse, Quinoa) als auch getreidefreie Optionen erhältlich.',
    ],
    cons: [
      'Gehobene Preisklasse im Vergleich zu Standardfuttern aus dem Fachmarkt.',
      'Hauptsächlich im ausgewählten Fachhandel oder per Online-Bestellung verfügbar.',
      'Sehr hohe Nährstoffdichte erfordert exaktes Abwiegen, um Überfütterung zu vermeiden.',
    ],
    overview:
      'Open Farm wurde 2014 mit einer klaren Mission gegründet: kompromisslose Transparenz und gelebter Tierschutz bei den Nutztieren. Als erste Marke Nordamerikas kooperierte das Unternehmen mit Certified Humane und Ocean Wise und erlaubt es Haltern, jede Zutat direkt bis zum landwirtschaftlichen Betrieb oder Fischereigebiet zurückzuverfolgen.',
    deepDive: [
      'Transparenz & Tierwohl: Während die meisten Hersteller ihre Lieferanten geheim halten, druckt Open Farm auf jeden Sack einen Code, der die Herkunft jeder Zutat aufschlüsselt. Das Fleisch stammt aus Betrieben mit Weidehaltung, die auf Antibiotika und präventive Medikamente verzichten.',
      'RawMix-Technologie & Innereien: Die RawMix-Serie verbindet proteinreiches Trockenfutter mit gefriergetrockneten Fleischstücken und einer Ummantelung aus Knochenbrühe und Innereien (Leber, Herz, Niere). Dies liefert wichtige Vitamine (A, CoQ10, Eisen) und ein unvergleichliches Aroma ganz ohne künstliche Aromastoffe.',
      'Urgetreide vs. Getreidefrei: Statt getreidefreie Rezepturen mit Erbsen aufzublähen, setzt Open Farm auf Urgetreide wie Hafer, Hirse und Quinoa. Diese glutenarmen Körner besitzen einen niedrigen glykämischen Index, liefern langanhaltende Energie und nähren die Darmflora mit wertvollen Ballaststoffen.',
    ],
    ingredientPillars: [
      {
        title: '1. Artgerechte Nutztierhaltung',
        score: '9.9 / 10',
        explanation: 'Weiderind mit Certified Humane-Siegel, freilaufendes Schwein und Geflügel sowie nachhaltiger Wildfang nach Ocean Wise.',
      },
      {
        title: '2. Lückenlose Rückverfolgbarkeit',
        score: '10 / 10',
        explanation: 'Jede Zutat ist über die Chargenabfrage online zu 100% bis zum Erzeugerbetrieb rückverfolgbar.',
      },
      {
        title: '3. Knochenbrühe- & Innereien-Coating',
        score: '9.4 / 10',
        explanation: 'Kroketten werden mit gefriergetrockneter Brühe und Organfleisch veredelt für maximale Nährstoffdichte.',
      },
      {
        title: '4. Verarbeitungsqualität',
        score: '9.1 / 10',
        explanation: 'Hergestellt in SQF-zertifizierten Werken mit mikrobiologischen Laborprüfungen jeder Produktionscharge.',
      },
    ],
    keyProductLines: [
      {
        name: 'RawMix Grain-Free Front Range Recipe',
        type: 'Gefriergetrocknet ummanteltes Trockenfutter',
        description: 'Weiderind, Weidelamm und Schwein mit gefriergetrockneter Brühe und echten Fleischbrocken.',
        targetDogs: 'Aktive Hunde, ernährungssensible Vierbeiner und wählerische Esser.',
      },
      {
        name: 'RawMix Ancient Grains Open Prairie Recipe',
        type: 'Vollwertiges Trockenfutter mit Urgetreide',
        description: 'Freilandhuhn und -pute mit gentechnikfreiem Urgetreide (Hafer, Hirse, Quinoa) und Knochenbrühe.',
        targetDogs: 'Hunde, die mit darmfreundlichen Vollkorngetreiden gut zurechtkommen.',
      },
      {
        name: 'Wild Ocean Catch Recipe',
        type: 'Reine Wildfisch-Rezeptur',
        description: 'Wildlachs, Weißfisch und Hering reich an entzündungshemmenden Omega-3-Fettsäuren (EPA/DHA).',
        targetDogs: 'Hunde mit atopischer Dermatitis, trockenem Fell oder Gelenkbeschwerden.',
      },
    ],
    veterinaryVerdict:
      'Open Farm setzt die Benchmark für ethische Integrität und ehrliche Deklaration im Tierfuttermarkt. Die RawMix-Produkte bieten den Komfort von Trockenfutter kombiniert mit der Nährstoffkraft von gefriergetrockneter Rohkost und Knochenbrühe.',
    feedingRecommendation:
      'Da Open Farm deutlich kalorien- und nährstoffdichter ist als Standardfutter, wiegen Sie die Rationen am besten mit einer Küchenwaage ab, anstatt Messbecher zu verwenden, um Übergewicht zu vermeiden.',
    affiliateProductKeys: [
      'open-farm-rawmix-front-range-20lb',
      'open-farm-rawmix-open-prairie-20lb',
      'open-farm-rawmix-wild-ocean-20lb',
    ],
  },
};
