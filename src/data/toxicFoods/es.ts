import type { ToxicFoodItem } from './types';

export const toxicFoodsEs: ToxicFoodItem[] = [
  // 1. XYLITOL
  {
    slug: 'xylitol',
    name: 'Xilitol (Azúcar de Abedul / E967)',
    scientificName: '1,2,3,4,5-Pentapentanol (Polialcohol)',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ EMERGENCIA CRÍTICA // TOXINA MORTAL',
    riskSeverity: 'MORTAL: Inicio fulminante en 10 a 60 minutos. Desencadena shock hipoglucémico severo y necrosis hepática masiva aguda.',
    primaryCompound: 'Azúcar de corteza de abedul (Xilitol sintético / E967)',
    targetOrgans: ['Células Beta de los Islotes Pancreáticos', 'Hígado (Hepatocitos)', 'Cascada de Coagulación'],
    toxicThresholdOrServing: '0,1 g/kg causa hipoglucemia profunda; >0,5 g/kg provoca necrosis hepática aguda e insuficiencia hepática terminal.',
    onsetWindow: '10 a 60 minutos (retrasado hasta 12 horas en chicles de liberación prolongada)',
    summary: 'El xilitol es el aditivo alimentario doméstico más mortífero para los perros. Aunque es inocuo para los humanos, la fisiología canina reacciona con una descarga masiva de insulina hasta seis veces mayor que ante una dosis equivalente de glucosa, provocando colapso rápido y fallo hepático letal.',
    narrativeOverview: [
      'El xilitol es un alcohol de azúcar ampliamente comercializado como azúcar de abedul o aditivo E967. Se encuentra en mantequillas de cacahuete, chicles sin azúcar, repostería baja en calorías, enjuagues bucales y jarabes pediátricos.',
      'En los perros, la absorción del xilitol ocurre a velocidad vertiginosa. Debido a que el aparato digestivo canino no distingue el xilitol de la glucosa natural, provoca una degranulación pancreática masiva. En menos de 30 minutos, la glucemia desciende a niveles críticos (<30 mg/dL), privando al cerebro de su fuente de energía.',
      'A dosis mayores (>0,5 g/kg), causa necrosis hepática aguda idiosincrásica. Los hepatocitos sufren agotamiento celular de ATP y destrucción oxidativa, desembocando en coagulopatía hemorrágica masiva y muerte.',
    ],
    biochemicalMechanism: 'En caninos, el xilitol se absorbe de forma rápida y total en el intestino delgado proximal, actuando como un secretagogo hiperpotente sobre las células beta pancreáticas caninas. Induce una liberación súbita de insulina endógena 2,5 a 6 veces superior a una carga equimolar de glucosa. Además, el metabolismo hepático del xilitol agota el NAD y el ATP intracelular, provocando disfunción mitocondrial grave, producción masiva de especies reactivas de oxígeno (ROS) y necrosis hepatocelular aguda.',
    vitalStats: [
      { label: 'Clasificación Toxicológica', value: 'Veneno Sistémico Mortal', tone: 'danger' },
      { label: 'Umbral de Dosis Tóxica', value: '0,1 g/kg (Hipoglucemia) / 0,5 g/kg (Fallo Hepático)', tone: 'danger' },
      { label: 'Ventana de Intervención', value: '0 a 30 Minutos', tone: 'danger' },
      { label: 'Patología Primaria', value: 'Shock Hipoglucémico y Necrosis Hepática', tone: 'danger' },
    ],
    timeline: [
      {
        phase: 'Fase 1: 10 a 60 Minutos (Hipoglucemia Aguda)',
        symptoms: [
          'Vómitos intensos súbitos e hipersalivación',
          'Debilidad extrema, letargia profunda y ataxia (marcha de ebrio)',
          'Pérdida de coordinación e incapacidad para mantenerse en pie',
          'Mucosas pálidas o pegajosas',
        ],
      },
      {
        phase: 'Fase 2: 1 a 12 Horas (Crisis Neuro-Metabólica)',
        symptoms: [
          'Temblores musculares y convulsiones tónico-clónicas generalizadas',
          'Arritmias cardíacas por hipopotasemia',
          'Estado comatoso e hipotermia severa',
        ],
      },
      {
        phase: 'Fase 3: 12 a 72 Horas (Necrosis Hepática Aguda)',
        symptoms: [
          'Elevación exponencial de enzimas ALT, AST y bilirrubina total',
          'Ictericia (coloración amarillenta en ojos, encías y piel)',
          'Petequias, equimosis y hemorragias internas espontáneas (coagulopatía)',
          'Fallo multiorgánico y paro cardiorrespiratorio',
        ],
      },
    ],
    emergencyProtocol: [
      {
        stepNumber: 1,
        title: 'Identificación Inmediata de la Sustancia',
        desc: 'Revisa el envase o envoltorio de chicles y confirma si contiene "Xilitol", "Azúcar de abedul" o "E967". Llévalo al hospital.',
        isUrgent: true,
      },
      {
        stepNumber: 2,
        title: 'NO Inducir el Vómito en Casa si Presenta Síntomas',
        desc: 'Si el perro ya está tambaleante o letárgico, inducir el vómito conlleva un riesgo extremo de broncoaspiración pulmonar y asfixia.',
        isUrgent: true,
      },
      {
        stepNumber: 3,
        title: 'Soporte Glucídico Oral (Solo si está Consciente)',
        desc: 'Si puede tragar, frota miel o sirope en sus encías durante el traslado a urgencias para permitir absorción mucosa rápida.',
        isUrgent: false,
      },
      {
        stepNumber: 4,
        title: 'Traslado Inmediato a Urgencias Veterinarias 24h',
        desc: 'Llama en el trayecto para que el equipo prepare catéter intravenoso, bolo de dextrosa al 50% y glucómetro antes de llegar.',
        isUrgent: true,
      },
    ],
    vetTreatments: [
      {
        name: 'Infusión Continua de Dextrosa Intravenosa (CRI)',
        purpose: 'Administración continua de dextrosa al 2,5%-5% durante 24-48 horas para prevenir daño cerebral y estabilizar la glucemia.',
      },
      {
        name: 'Terapia Hepatoprotectora Intensiva',
        purpose: 'N-acetilcisteína (NAC), SAMe y silimarina para reponer reservas de glutatión y salvar los hepatocitos supervivientes.',
      },
      {
        name: 'Monitoreo de Coagulación y Bioquímica Seriada',
        purpose: 'Control de tiempos PT/aPTT, electrolitos y enzimas hepáticas cada 12-24 horas.',
      },
      {
        name: 'Transfusión de Plasma Fresco Congelado (FFP)',
        purpose: 'Indicado ante coagulopatía activa por cese de síntesis hepática de factores de coagulación.',
      },
    ],
    safeAlternatives: [
      {
        name: 'Mantequilla de Cacahuete de Ingrediente Único',
        why: 'Elaborada únicamente con 100% cacahuetes tostados, sin azúcar ni edulcorantes artificiales.',
      },
      {
        name: 'Puré de Calabaza 100% Puro',
        why: 'Dulzor natural con fibra prebiótica soluble, totalmente libre de xilitol.',
      },
      {
        name: 'Boniato Cocido Machacado',
        why: 'Carbohidrato natural denso en nutrientes y betacaroteno.',
      },
    ],
    preventionRules: [
      'Revisa la etiqueta de toda crema de frutos secos antes de usarla en juguetes tipo Kong o alfombrillas de lamer.',
      'Guarda chicles sin azúcar y caramelos en armarios altos y cerrados, nunca en bolsos o guanteras.',
      'Nunca cepilles los dientes de tu perro con pasta dental humana; usa solo pasta enzimática veterinaria.',
    ],
    faqs: [
      {
        q: '¿Puede un perro sobrevivir a la ingestión de xilitol?',
        a: 'Sí, pero el pronóstico depende directamente de la rapidez de la intervención. Los perros tratados en los primeros 30 a 60 minutos con fluidoterapia de dextrosa y soporte hepático tienen un pronóstico excelente.',
      },
      {
        q: '¿Es el "azúcar de abedul" exactamente lo mismo que el xilitol?',
        a: 'Sí. Es simplemente un término comercial alternativo utilizado en productos naturales para designar al xilitol. Su toxicidad canina es idéntica.',
      },
      {
        q: '¿Sirve el carbón activado para el xilitol?',
        a: 'No. El carbón activado tiene una afinidad de unión prácticamente nula con los polioles solubles en agua como el xilitol. Los veterinarios priorizan la emesis clínica precoz y la dextrosa IV.',
      },
    ],
  },

  // 2. CHOCOLATE & COCOA
  {
    slug: 'chocolate-and-cocoa',
    name: 'Chocolate y Cacao (Teobromina y Cafeína)',
    scientificName: 'Theobroma Cacao (Alcaloides Metilxantinas)',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ RIESGO MORTAL // NEUROTOXINA Y CARDIOTOXINA',
    riskSeverity: 'ALTO A MORTAL: Induce arritmias cardíacas graves, necrosis miocárdica, temblores musculares, convulsiones y parada respiratoria.',
    primaryCompound: 'Teobromina (3,7-dimetilxantina) y Cafeína',
    targetOrgans: ['Sistema Nervioso Central', 'Miocardio (Músculo Cardíaco)', 'Glomérulos Renales'],
    toxicThresholdOrServing: '20 mg/kg: Signos gastrointestinales leves; 40–50 mg/kg: Cardiotoxicidad; >60 mg/kg: Convulsiones y riesgo de muerte.',
    onsetWindow: '2 a 4 horas tras la ingestión (pico sérico a las 10 horas; semivida biológica de 17,5 horas en perros)',
    summary: 'El chocolate contiene los alcaloides teobromina y cafeína. Los perros metabolizan la teobromina a una fracción de la velocidad humana, provocando que se acumule en plasma, sobreestimule los sistemas cardiovascular y nervioso, y cause taquiarritmias letales.',
    narrativeOverview: [
      'La intoxicación por chocolate es una de las emergencias veterinarias más comunes en festividades como Navidad, Pascua y Halloween. El peligro es proporcional al porcentaje de cacao: el cacao puro en polvo y el chocolate negro representan peligros mortales en cantidades minúsculas.',
      'A diferencia de los humanos, que eliminan la teobromina en 2 a 3 horas, en los perros la semivida de eliminación alcanza unas prolongadas 17,5 horas. Además, sufre recirculación enterohepática y se reabsorbe a través de la pared vesical.',
      'Al inhibir competitivamente los receptores de adenosina y bloquear la fosfodiesterasa celular, se acumula AMP cíclico (cAMP) y sobrecarga de calcio intracelular en los miocitos cardíacos, precipitando arritmias refractarias.',
    ],
    biochemicalMechanism: 'La teobromina y cafeína actúan por tres vías: (1) antagonismo competitivo de receptores de adenosina celulares; (2) inhibición no selectiva de la enzima fosfodiesterasa (PDE), acumulando cAMP intracelular; y (3) aumento del secuestro de calcio intracelular en miocitos. Esto provoca vasoconstricción periférica, taquicardia, arritmias ventriculares refractarias y crisis convulsivas generalizadas.',
    vitalStats: [
      { label: 'Clasificación Toxicológica', value: 'Neurotoxina Metilxantina', tone: 'danger' },
      { label: 'Dosis Letal Media (LD50)', value: '100–200 mg/kg Teobromina', tone: 'danger' },
      { label: 'Semivida en Perros', value: '17,5 Horas (Eliminación Muy Lenta)', tone: 'danger' },
      { label: 'Mayor Riesgo', value: 'Cacao Puro en Polvo y Chocolate Negro', tone: 'danger' },
    ],
    timeline: [
      {
        phase: 'Fase 1: 1 a 4 Horas (Signos Gastrointestinales e Hiperactividad)',
        symptoms: ['Vómitos frecuentes y diarrea', 'Polidipsia (sed intensa) y distensión abdominal', 'Inquietud y deambulación ansiosa', 'Taquicardia inicial'],
      },
      {
        phase: 'Fase 2: 4 a 12 Horas (Crisis Cardiotóxica)',
        symptoms: ['Taquicardia severa (>160-220 bpm)', 'Arritmias ventriculares y contracciones prematuras (VPC)', 'Respiración rápida y jadeo intenso', 'Incontinencia urinaria'],
      },
      {
        phase: 'Fase 3: 12 a 36 Horas (Fallo Neurológico y Muerte)',
        symptoms: ['Temblores musculares severos y convulsiones epileptiformes', 'Hipertermia severa por contractura muscular (>40°C)', 'Coma, colapso circulatorio y parada cardiorrespiratoria'],
      },
    ],
    emergencyProtocol: [
      { stepNumber: 1, title: 'Determinar Tipo y Cantidad de Chocolate', desc: 'Identifica si era negro, con leche o cacao en polvo, y calcula los gramos consumidos junto con el peso de tu perro.', isUrgent: true },
      { stepNumber: 2, title: 'Emesis Clínica Rápida (<2 Horas)', desc: 'Acude inmediatamente al veterinario para inducción médica del vómito antes de que la teobromina pase al torrente sanguíneo.', isUrgent: true },
      { stepNumber: 3, title: 'Sondaje o Vaciado Frecuente de Vejiga', desc: 'La teobromina se reabsorbe a través de la pared vesical; orinar con frecuencia previene la reintoxicación.', isUrgent: false },
      { stepNumber: 4, title: 'Mantener un Entorno Tranquilo y Oscuro', desc: 'El sistema nervioso está hiperestimulado; reduce luces y ruidos para evitar desencadenar convulsiones.', isUrgent: true },
    ],
    vetTreatments: [
      { name: 'Lavado Gástrico y Emesis Farmacológica', purpose: 'Evacuación gástrica segura con apomorfina o ropinirol.' },
      { name: 'Dosis Múltiples de Carbón Activado (MDAC)', purpose: 'Administrado cada 4-6 horas para cortar la recirculación enterohepática.' },
      { name: 'Fármacos Antiarrítmicos (Lidocaína / Betabloqueantes)', purpose: 'Control de taquicardia ventricular bajo monitorización electrocardiográfica.' },
      { name: 'Anticonvulsivantes Intravenosos', purpose: 'Diazepam, midazolam o levetiracetam para frenar las crisis convulsivas.' },
    ],
    safeAlternatives: [
      { name: 'Algarroba en Polvo (Carob)', why: 'Sabor similar al chocolate sin teobromina ni cafeína, 100% segura para perros.' },
      { name: 'Hígado de Ternera Liofilizado', why: 'Premio de alta palatabilidad rico en hierro y vitamina A.' },
    ],
    preventionRules: [
      'Almacena cacao de repostería y bombones en estantes altos en recipientes herméticos.',
      'Evita abonos o mantillos de corteza de cacao (cacao mulch) en jardines domésticos.',
    ],
    faqs: [
      { q: '¿Es peligroso el chocolate blanco?', a: 'El chocolate blanco contiene niveles casi nulos de teobromina, pero su altísimo contenido de manteca de cacao y azúcar lo convierte en un desencadenante inmediato de pancreatitis aguda.' },
      { q: '¿Cuánto chocolate es letal para mi perro?', a: 'En un perro de 10 kg, apenas 20-30 g de chocolate negro puro pueden causar arritmias severas. Con cacao puro en polvo, tan solo 10 g pueden ser mortales.' },
    ],
  },

  // 3. GRAPES & RAISINS
  {
    slug: 'grapes-and-raisins',
    name: 'Uvas y Pasas (Todas las Variedades)',
    scientificName: 'Vitis Vinifera (Ácido Tartárico y Bitartrato de Potasio)',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ PELIGRO LETAL // PARO RENAL AGUDO',
    riskSeverity: 'EXTREMADAMENTE MORTAL: Necrosis tubular aguda idiosincrásica que conduce a insuficiencia renal canina total e irreversible en 24 a 72 horas.',
    primaryCompound: 'Ácido Tartárico y Bitartrato de Potasio',
    targetOrgans: ['Túbulos Proximales Renales', 'Membrana de Filtración Glomerular'],
    toxicThresholdOrServing: 'Tolerancia Cero: Idiosincrásico. Tan solo 1 o 2 uvas o pasas han provocado fallo renal anúrico letal en perros adultos.',
    onsetWindow: 'Signos gastrointestinales en 2 a 6 horas; los marcadores renales se disparan a las 24 a 48 horas',
    summary: 'Las uvas y pasas contienen altas concentraciones de ácido tartárico. Los perros son singularmente susceptibles a la nefrotoxicidad inducida por tartratos, que destruye las células del túbulo renal proximal y puede anular por completo la filtración renal.',
    narrativeOverview: [
      'Durante décadas el principio tóxico fue un misterio veterinario, hasta que investigaciones confirmaron al ácido tartárico y bitartrato de potasio como los agentes causales. Dado que su concentración varía ampliamente según madurez y suelo, no existe dosis segura.',
      'Las pasas y sultanas concentran el ácido tartárico hasta 4,5 veces más que las uvas frescas. Incluso restos de panes de pasas o galletas suponen una amenaza vital extrema.',
      'El peligro es idiosincrásico: algunos perros han comido uvas sin colapso inmediato, mientras que otros han desarrollado fallo renal anúrico letal irreversible por una sola uva caída al suelo.',
    ],
    biochemicalMechanism: 'Las células epiteliales tubulares proximales de la nefrona canina sufren agotamiento súbito de ATP y destrucción mitocondrial al filtrar tartratos. Esto desencadena necrosis tubular aguda (NTA). Los cilindros epiteliales necróticos ocluyen los túbulos, anulando la tasa de filtración glomerular (TFG), conduciendo a anuria, hiperpotasemia refractaria, acidosis metabólica y encefalopatía urémica.',
    vitalStats: [
      { label: 'Clasificación', value: 'Nefrotoxina Tubular Letal', tone: 'danger' },
      { label: 'Umbral Tóxico', value: 'Tolerancia Cero (Idiosincrásico)', tone: 'danger' },
      { label: 'Patología Primaria', value: 'Necrosis Tubular Aguda e Insuficiencia Renal', tone: 'danger' },
      { label: 'Tratamiento Vital', value: 'Diuresis Intravenosa Agresiva 48-72h', tone: 'danger' },
    ],
    timeline: [
      { phase: 'Fase 1: 2 a 6 Horas', symptoms: ['Vómitos continuos y diarrea', 'Anorexia y letargia profunda', 'Dolor abdominal'] },
      { phase: 'Fase 2: 12 a 24 Horas', symptoms: ['Deshidratación y ojos hundidos', 'Aumento drástico de urea (BUN) y creatinina', 'Hiperfosfatemia e hiperpotasemia'] },
      { phase: 'Fase 3: 24 a 72 Horas', symptoms: ['Oliguria progresando a anuria completa (cero producción de orina)', 'Aliento urémico amoniacal', 'Convulsiones urémicas, coma y muerte'] },
    ],
    emergencyProtocol: [
      { stepNumber: 1, title: 'Tratar Cada Ingesta como Código Rojo', desc: 'No esperes a que aparezcan síntomas. Cuando los riñones se detienen, la diálisis es la única opción de rescate.', isUrgent: true },
      { stepNumber: 2, title: 'Emesis Veterinaria Inmediata (<2 Horas)', desc: 'Descontaminación en clínica para vaciar uvas antes de la absorción del ácido tartárico.', isUrgent: true },
      { stepNumber: 3, title: 'Fluidos IV de Mantenimiento Elevado 48 Horas', desc: 'Incluso tras vomitar, la fluidoterapia intravenosa profiláctica hospitalaria es obligatoria para proteger el flujo renal.', isUrgent: true },
    ],
    vetTreatments: [
      { name: 'Diuresis con Fluidoterapia IV Agresiva (2-3x Mantenimiento)', purpose: 'Maximiza la perfusión renal y elimina cilindros celulares durante 48 a 72 horas.' },
      { name: 'Carbón Activado Seriado', purpose: 'Adsorbe moléculas residuales en el tracto digestivo.' },
      { name: 'Monitoreo de Gasto Urinario Continuo (Sonda Foley)', purpose: 'Verifica producción de orina >1-2 mL/kg/hora para detectar oliguria precozmente.' },
    ],
    safeAlternatives: [
      { name: 'Arándanos Silvestres Frescos', why: 'Ricos en antioxidantes antocianinas y libres de ácido tartárico.' },
      { name: 'Sandía Sin Semillas', why: '92% de hidratación y refrescante para el verano.' },
    ],
    preventionRules: ['Nunca dejes panes de pasas ni barritas de cereales en encimeras.', 'Enseña a los niños a no ofrecer nunca uvas al perro.'],
    faqs: [
      { q: '¿Cocinar las pasas destruye la toxina?', a: 'No. El ácido tartárico es termoestable y resiste el horneado sin degradarse.' },
      { q: 'Mi perro comió una sola uva, ¿debo ir a urgencias?', a: 'Sí, de inmediato. Dada la naturaleza idiosincrásica, el riesgo de fallo renal letal es real con una única uva.' },
    ],
  },

  // 4. ONIONS & GARLIC
  {
    slug: 'onions-and-garlic',
    name: 'Cebolla, Ajo, Puerro y Cebollino (Familia Allium)',
    scientificName: 'Allium Spp. (Disulfuro de N-Propilo y Tiosulfatos)',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ TOXINA ACUMULATIVA // ANEMIA HEMOLÍTICA',
    riskSeverity: 'ALTO A MORTAL: Destruye los glóbulos rojos por hemólisis oxidativa, precipitando anemia severa por cuerpos de Heinz y metahemoglobinemia.',
    primaryCompound: 'Disulfuro de N-propilo, Tiosulfato de sodio y Alicina',
    targetOrgans: ['Glóbulos Rojos (Eritrocitos)', 'Hemoglobina', 'Bazo', 'Riñones'],
    toxicThresholdOrServing: 'Cebolla: 0,5% del peso corporal (15-30 g/kg). El ajo es 5 veces más potente (~5 g/kg). ¡El ajo/cebolla en polvo es 10 veces más concentrado!',
    onsetWindow: 'Gastroenteritis leve en pocas horas; el pico de colapso de glóbulos rojos ocurre a los 3 a 7 días de la ingesta',
    summary: 'Todos los miembros de la familia Allium contienen compuestos organosulfurados que los glóbulos rojos caninos no pueden neutralizar. Desnaturalizan la hemoglobina, provocando la rotura de los hematíes y anemia hemolítica severa por cuerpos de Heinz.',
    narrativeOverview: [
      'Los alliums están en casi todos los platos humanos: caldos, salsas, hamburguesas y guisos. Los perros carecen de niveles suficientes de G6PD y catalasa para proteger las membranas eritrocitarias de los radicales organosulfurados.',
      'El ajo es unas cinco veces más concentrado que la cebolla cruda. Aún más peligrosos son los polvos deshidratados: una sola cucharada equivale a una cebolla entera.',
      'La toxicidad es acumulativa: pequeñas sobras durante varios días agotan el glutatión eritrocitario del mismo modo que una ingesta masiva única, causando un colapso retardado días después.',
    ],
    biochemicalMechanism: 'Los compuestos organosulfurados agotan el glutatión reducido (GSH) en los eritrocitos caninos. Al oxidarse los grupos sulfhidrilo, la hemoglobina se desnaturaliza y precipita formando cuerpos de Heinz. Los macrófagos esplénicos destruyen estos eritrocitos deformados (hemólisis extravascular) y se produce lisis intravascular, liberando hemoglobina libre que satura los túbulos renales.',
    vitalStats: [
      { label: 'Clasificación', value: 'Hemotoxina Oxidativa', tone: 'danger' },
      { label: 'Potencia Relativa', value: 'El ajo es 5x más tóxico que la cebolla', tone: 'danger' },
      { label: 'Pico de Gravedad', value: 'Días 3 a 7 Post-Ingesta', tone: 'danger' },
      { label: 'Polvo Deshidratado', value: 'Peligro Concentrado x10', tone: 'danger' },
    ],
    timeline: [
      { phase: 'Fase 1: 1 a 24 Horas', symptoms: ['Náuseas, salivación y vómitos con olor a ajo/cebolla', 'Dolor abdominal'] },
      { phase: 'Fase 2: 24 a 72 Horas', symptoms: ['Letargia severa', 'Mucosas y encías pálidas o amarillentas (anemia e ictericia)', 'Taquipnea y taquicardia'] },
      { phase: 'Fase 3: 3 a 7 Días', symptoms: ['Hemoglobinuria (orina oscura color vino tinto o cola)', 'Colapso postural e hipoxia tisular', 'Lesión renal aguda secundaria'] },
    ],
    emergencyProtocol: [
      { stepNumber: 1, title: 'Verificar Etiquetas de Condimentos', desc: 'Los caldos y guisos suelen tener cebolla y ajo en polvo, diez veces más potentes.', isUrgent: true },
      { stepNumber: 2, title: 'Consulta Veterinaria Aunque no Haya Síntomas', desc: 'La anemia tarda 3 a 5 días en dar la cara. La ausencia de síntomas inmediatos es engañosa.', isUrgent: true },
      { stepNumber: 3, title: 'Emesis Clínica Precoz (<2 Horas)', desc: 'Evacua el estómago antes de que los compuestos pasen a sangre.', isUrgent: true },
    ],
    vetTreatments: [
      { name: 'Hemograma y Frotis de Control Diario', purpose: 'Control del hematocrito (PCV) y porcentaje de cuerpos de Heinz.' },
      { name: 'Transfusión de Concentrado de Glóbulos Rojos o Sangre Total', purpose: 'Indicada cuando el hematocrito cae por debajo del 15-20%.' },
      { name: 'Fluidoterapia IV y Oxigenoterapia', purpose: 'Protección renal contra cilindros de hemoglobina y aporte de oxígeno.' },
    ],
    safeAlternatives: [
      { name: 'Calabacín Rallado al Vapor', why: 'Aporta volumen, fibra y humedad sin sulfuros dañinos.' },
      { name: 'Perejil Fresco (en pequeñas cantidades)', why: 'Refresca el aliento y aporta clorofila de forma segura.' },
    ],
    preventionRules: ['Nunca des caldo humano ni pollo asado comercial condimentado.', 'Guarda cebollas y ajos en cestas altas fuera del alcance del perro.'],
    faqs: [
      { q: '¿Cocinar la cebolla o el ajo elimina la toxina?', a: 'No. Los organosulfuros son inmunes a hervir, asar, freír o microondas. Cocinados son igual de tóxicos.' },
      { q: '¿De qué color es la orina en intoxicación por cebolla?', a: 'Se vuelve de color ámbar oscuro, vino tinto o coñac debido a la hemoglobina libre filtrada.' },
    ],
  },

  // 5. MACADAMIA NUTS
  {
    slug: 'macadamia-nuts',
    name: 'Nueces de Macadamia',
    scientificName: 'Macadamia Integrifolia / Tetraphylla',
    status: 'DANGEROUS_TOXIC',
    category: 'FATAL_TOXIC',
    badgeLabel: '☠ NEUROTOXINA SEVERA // PARÁLISIS DE EXTREMIDADES POSTERIORES',
    riskSeverity: 'MODERADO A SEVERO: Provoca depresión neuromuscular grave, paresia bilateral de extremidades posteriores (incapacidad para caminar), temblores, hipertermia y pancreatitis.',
    primaryCompound: 'Éster neurotóxico no identificado y matriz lipídica ultradensa',
    targetOrgans: ['Placas Motoras Neuromusculares', 'Sistema Nervioso Central', 'Páncreas Exocrino'],
    toxicThresholdOrServing: '0,7 g/kg de peso corporal (apenas 1 a 2 nueces para un perro de 4-5 kg; 10-12 nueces para un perro mediano).',
    onsetWindow: '3 a 12 horas tras la ingestión (pico a las 12-24 horas; resolución en 24-48 horas con cuidados)',
    summary: 'Las nueces de macadamia son tóxicas de forma exclusiva para los caninos; ninguna otra especie doméstica desarrolla este síndrome. Su ingestión desencadena una disfunción neuromuscular aguda con debilidad súbita en las patas traseras, fasciculaciones musculares involuntarias, fiebre alta y dolor articular agudo.',
    narrativeOverview: [
      'Las nueces de macadamia (habituales en galletas y mezclas de frutos secos) contienen una fracción lipídica tóxica que altera selectivamente la transmisión neuromuscular canina. Los perros pierden el control motor de sus patas traseras, presentando una marcha tambaleante característica o incapacidad total para ponerse en pie.',
      'Además de la toxicidad neuromuscular, las macadamias son extraordinariamente ricas en grasas (>75% de su peso en aceites). Esta bomba lipídica supone un riesgo secundario crítico: desencadenar pancreatitis aguda con peligro vital.',
      'El pronóstico en intoxicaciones simples suele ser favorable con atención veterinaria inmediata, ya que la neurotoxina se metaboliza en 24 a 48 horas. Sin embargo, su ingestión combinada con chocolate o pasas multiplica la gravedad médica.',
    ],
    biochemicalMechanism: 'Aunque la estructura química exacta de la neurotoxina sigue bajo investigación, la evidencia clínica demuestra que actúa como un agente bloqueante neuromuscular o canalopatía, inhibiendo la transmisión en la unión neuromuscular. Simultáneamente, la densidad lipídica estimula la colecistoquinina (CCK), provocando hipersecreción pancreática y riesgo de autodigestión tisular.',
    vitalStats: [
      { label: 'Clasificación Toxicológica', value: 'Neurotoxina Especie-Específica', tone: 'danger' },
      { label: 'Umbral de Dosis Tóxica', value: '0,7 g/kg (Apenas 1–2 Nueces)', tone: 'danger' },
      { label: 'Presentación Principal', value: 'Paresia Bilateral de Patas Traseras', tone: 'danger' },
      { label: 'Resolución Clínica', value: '24 a 48 Horas con Soporte Veterinario', tone: 'warning' },
    ],
    timeline: [
      {
        phase: 'Fase 1: 1 a 6 Horas (Signos Sistémicos Iniciales)',
        symptoms: ['Vómitos, náuseas y letargia leve', 'Hipertermia (fiebre superior a 40°C)', 'Molestia abdominal y renuencia a caminar'],
      },
      {
        phase: 'Fase 2: 6 a 12 Horas (Paresia Neuromuscular)',
        symptoms: ['Debilidad marcada de patas traseras, ataxia y apoyo sobre nudillos', 'Temblores musculares y rigidez', 'Articulaciones inflamadas y dolorosas (poliartralgia)', 'Taquicardia y jadeo por fiebre y dolor'],
      },
      {
        phase: 'Fase 3: 12 a 24 Horas (Pico de Decúbito y Recuperación)',
        symptoms: ['Incapacidad para levantarse (decúbito esternal)', 'Riesgo de pancreatitis aguda secundaria', 'Remisión gradual del bloqueo neuromuscular en 24-48 horas con fluidoterapia'],
      },
    ],
    emergencyProtocol: [
      { stepNumber: 1, title: 'Comprobar Mezclas con Chocolate o Pasas', desc: 'Las macadamias suelen consumirse bañadas en chocolate o en mezclas con pasas, lo cual agrava exponencialmente la emergencia.', isUrgent: true },
      { stepNumber: 2, title: 'Evitar Caídas y Traumatismos', desc: 'Al perder la coordinación trasera, mantén al perro en mantas acolchadas lejos de escaleras para evitar fracturas o hernias discales.', isUrgent: false },
      { stepNumber: 3, title: 'Emesis Clínica Veterinaria (<2 Horas)', desc: 'Inducir el vómito en la clínica retira las nueces duras antes de la absorción intestinal de lípidos.', isUrgent: true },
      { stepNumber: 4, title: 'Hospitalización para Cuidados de Soporte', desc: 'Fluidoterapia intravenosa, antieméticos y enfriamiento activo ante fiebre alta garantizan una rápida recuperación.', isUrgent: true },
    ],
    vetTreatments: [
      { name: 'Emesis Clínica y Carbón Activado', purpose: 'Evacua trozos de nuez y fija toxinas lipídicas remanentes en el tubo digestivo alto.' },
      { name: 'Fluidoterapia Intravenosa Equilibrada', purpose: 'Acelera el aclaramiento renal y metabólico mientras combate la hipertermia y deshidratación.' },
      { name: 'Analgesia Multimodal y Control Térmico', purpose: 'Alivia los temblores musculares y el dolor articular sin emplear AINEs humanos tóxicos.' },
      { name: 'Monitoreo Pancreático (Test cPL)', purpose: 'Detección precoz de lipasa específica pancreática para frenar pancreatitis secundaria.' },
    ],
    safeAlternatives: [
      { name: 'Semillas de Calabaza Crudas Sin Sal', why: 'Ricas en zinc y magnesio, totalmente seguras y beneficiosas para la digestión canina.' },
      { name: 'Zanahorias Baby al Vapor', why: 'Crujientes y sabrosas con cero grasa y cero toxicidad.' },
      { name: 'Palomitas de Maíz al Aire (Sin Sal ni Mantequilla)', why: 'Un snack crujiente y bajo en calorías en pequeñas cantidades ocasionales.' },
    ],
    preventionRules: [
      'Mantén las galletas de macadamia y frutos secos gourmet en alacenas altas bien cerradas.',
      'Revisa mantequillas de frutos secos artesanales por si incluyen macadamias en la mezcla.',
    ],
    faqs: [
      { q: '¿Puede morir un perro por comer nueces de macadamia?', a: 'La toxicidad pura por macadamia rara vez es letal si recibe cuidados básicos de soporte veterinario. Sin embargo, las muertes ocurren si se consumen junto con chocolate o si la sobrecarga de grasa desencadena una pancreatitis necrótica fulminante.' },
      { q: '¿Cuánto dura la parálisis de las patas traseras?', a: 'La debilidad motora suele alcanzar su pico entre las 12 y 24 horas y se resuelve por completo en 48 horas a medida que el organismo elimina los metabolitos.' },
      { q: '¿Son seguros otros frutos secos para perros?', a: 'La mayoría son desaconsejables: nueces comunes y pacanas pueden contener micotoxinas tremorgénicas, los pistachos causan obstrucciones y las almendras son indigestas. Los cacahuetes (legumbres) sin sal son la opción más segura.' },
    ],
  },

  // 6. COOKED BONES
  {
    slug: 'cooked-bones',
    name: 'Huesos Cocidos (Cualquier Ave o Carne)',
    scientificName: 'Matriz Calcificada Alterada Térmicamente',
    status: 'DANGEROUS_TOXIC',
    category: 'HARMFUL',
    badgeLabel: '☠ EMERGENCIA QUIRÚRGICA // RIESGO DE PERFORACIÓN',
    riskSeverity: 'URGENCIA QUIRÚRGICA: La cocción altera la estructura celular del hueso de blando a quebradizo y astilloso, causando desgarros esofágicos, punción gástrica y peritonitis mortal.',
    primaryCompound: 'Astillas endurecidas de hidroxiapatita deshidratada',
    targetOrgans: ['Esófago', 'Pared Gástrica', 'Intestino Delgado', 'Colon y Recto'],
    toxicThresholdOrServing: 'Tolerancia Cero: Incluso un solo hueso de pollo, costilla o chuleta cocinado puede romperse en astillas punzantes como agujas.',
    onsetWindow: 'Atragantamiento inmediato (0-2h) o perforación/obstrucción diferida (12-48h)',
    summary: 'Nunca ofrezcas huesos cocinados de ningún tipo (pollo, ternera, cerdo o cordero). El calor desnaturaliza la matriz de colágeno que aporta flexibilidad al hueso crudo, convirtiéndolo en fragmentos quebradizos y afilados como vidrio que pueden perforar órganos internos.',
    narrativeOverview: [
      'El mito de que los perros comen huesos cocinados proviene del pasado, pero los cánidos salvajes solo ingerían huesos crudos y elásticos rodeados de carne. La cocción deshidrata la matriz ósea y vuelve los minerales rígidos y astillables.',
      'Bajo la presión mandibular canina (>300 psi), los huesos cocidos se fragmentan en agujas y navajas afiladas que actúan como metralla interna a lo largo del tracto digestivo.',
      'Pueden rasgar el esófago, perforar el estómago, perforar el intestino (liberando heces sépticas en la cavidad peritoneal) o compactarse en el recto formando una masa de consistencia similar al hormigón.',
    ],
    biochemicalMechanism: 'El hueso crudo contiene ~30% de colágeno elástico y ~70% de minerales de hidroxiapatita. Temperaturas superiores a 60°C desnaturalizan las hélices de colágeno tipo I, perdiendo toda ductilidad. En el estómago, el ácido clorhídrico requiere muchas horas para disolver el mineral; mucho antes de eso, los fragmentos cortantes laceran la mucosa o se impactan.',
    vitalStats: [
      { label: 'Clasificación', value: 'Peligro Físico-Quirúrgico', tone: 'danger' },
      { label: 'Cantidad Segura Cocinada', value: 'Tolerancia Cero (Nunca Seguro)', tone: 'danger' },
      { label: 'Riesgo Principal', value: 'Perforación GI y Peritonitis Séptica', tone: 'danger' },
      { label: 'Regla de Oro', value: 'NUNCA Inducir el Vómito', tone: 'danger' },
    ],
    timeline: [
      { phase: 'Fase 1: 0 a 2 Horas', symptoms: ['Atragantamiento, arcadas, patas a la boca y cuello extendido', 'Incapacidad para tragar saliva y regurgitación'] },
      { phase: 'Fase 2: 2 a 12 Horas', symptoms: ['Arcadas improductivas y vómitos con sangre fresca', 'Dolor abdominal severo y postura de rezo'] },
      { phase: 'Fase 3: 12 a 48 Horas', symptoms: ['Peritonitis séptica: fiebre alta o hipotermia, abdomen en tabla', 'Heces con sangre o melena (heces negras)', 'Colapso y shock séptico si no se opera de urgencia'] },
    ],
    emergencyProtocol: [
      { stepNumber: 1, title: 'NO Inducir el Vómito Bajo Ningún Concepto', desc: 'Hacer vomitrar un hueso afilado provoca que las astillas corten el esófago al subir, arriesgando un desgarro fatal.', isUrgent: true },
      { stepNumber: 2, title: 'Alimento Acolchador con Guía Veterinaria', desc: 'Ofrece pan blanco blando o puré de calabaza para envolver las astillas y amortiguar la pared gástrica mientras acudes al veterinario.', isUrgent: false },
      { stepNumber: 3, title: 'Radiografías Abdominales Inmediatas', desc: 'Los huesos son radiopacos; las radiografías revelan la posición, tamaño y forma exacta de las astillas.', isUrgent: true },
    ],
    vetTreatments: [
      { name: 'Radiografías de Contraste y Encuesta', purpose: 'Identifica la ubicación del hueso y descarta neumoperitoneo (perforación).' },
      { name: 'Extracción Endoscópica Flexible', purpose: 'Retirada no quirúrgica bajo anestesia si el hueso sigue en esófago o estómago.' },
      { name: 'Laparotomía Exploratoria de Urgencia', purpose: 'Cirugía abierta para extraer el hueso, reparar perforaciones y lavar el peritoneo.' },
    ],
    safeAlternatives: [
      { name: 'Huesos Carnosos Crudos No Portantes (Bajo Supervisión)', why: 'Cuellos de pollo o alitas de pato crudas que se aplastan sin astillarse.' },
      { name: 'Juguetes Dentales de Goma Certificados (KONG)', why: 'Satisfacen la masticación sin ningún riesgo quirúrgico.' },
    ],
    preventionRules: ['Tira huesos de pollo y costillas a cubos de basura exteriores con cierre.', 'Advierte a las visitas que no den huesos de la mesa al perro.'],
    faqs: [
      { q: '¿Puede el ácido del estómago disolver los huesos cocidos?', a: 'El ácido clorhídrico es potente, pero tarda horas en disolver hueso denso. Mucho antes de que eso suceda, los movimientos gástricos empujan las astillas afiladas contra las paredes digestivas.' },
    ],
  },

  // 7. HIGH-FAT TRIMMINGS & BACON GREASE
  {
    slug: 'bacon-grease-fat-trimmings',
    name: 'Grasas Animales Cocinadas y Grasa de Bacon',
    scientificName: 'Bolo de Triglicéridos Saturados Calentados',
    status: 'FEED_WITH_CAUTION',
    category: 'HARMFUL',
    badgeLabel: '⚠ ALTO RIESGO // PANCREATITIS AGUDA',
    riskSeverity: 'URGENCIA AGUDA: Grandes concentraciones súbitas de grasa activan prematuramente las enzimas pancreáticas, desencadenando pancreatitis aguda letal.',
    primaryCompound: 'Lípidos saturados oxidados, nitratos y cloruro sódico',
    targetOrgans: ['Páncreas Exocrino', 'Hígado (Lipidosis)', 'Mucosa Digestiva'],
    toxicThresholdOrServing: 'Apenas 1 o 2 cucharadas de grasa de sartén o pieles fritas pueden desatar pancreatitis aguda en perros susceptibles.',
    onsetWindow: '2 a 24 horas tras la ingesta',
    summary: 'Las sobras de comida como la grasa de bacon, pieles de pollo fritas y recortes de carne son el detonante número uno de pancreatitis en urgencias veterinarias. El influjo masivo de lípidos saturados cocinados satura el páncreas exocrino, desatando una autodigestión agonizante y shock.',
    narrativeOverview: [
      'Aunque los perros evolucionaron para digerir grasas crudas en proporciones naturales, un bolo súbito de grasa frita y oxidada actúa como un tóxico metabólico. Provoca hiperlipidemia y sobreestimula la secreción enzimática.',
      'Razas como el Schnauzer Miniatura, Yorkshire Terrier, Teckel y Cocker Spaniel son genéticamente vulnerables a la pancreatitis fulminante ante el menor exceso graso.',
      'Además, el bacon está saturado de sal y nitratos químicos, multiplicando el riesgo de Síndrome de Respuesta Inflamatoria Sistémica (SIRS).',
    ],
    biochemicalMechanism: 'El exceso lipídico dispara la colecistoquinina (CCK) y la sobrecarga de calcio en los acinos pancreáticos, fusionando prematuramente los gránulos de zimógeno con hidrolasas lisosomales. El tripsinógeno se convierte en tripsina activa dentro del propio páncreas, autodigiriendo el tejido pancreático, los vasos sanguíneos y la grasa circundante.',
    vitalStats: [
      { label: 'Patología Principal', value: 'Pancreatitis Aguda Necrotizante', tone: 'danger' },
      { label: 'Razas de Alto Riesgo', value: 'Schnauzer Mini, Yorkies, Teckels', tone: 'warning' },
      { label: 'Signo Clínico Clásico', value: '"Postura de Rezo" (Dolor Abdominal Agudo)', tone: 'danger' },
    ],
    timeline: [
      { phase: 'Fase 1: 2 a 6 Horas', symptoms: ['Chasquido constante de labios, salivación y náuseas', 'Heces grasientas y amarillentas'] },
      { phase: 'Fase 2: 6 a 24 Horas', symptoms: ['Vómitos continuos de bilis amarilla', '"Postura de rezo": codos en el suelo y caderas elevadas para aliviar el dolor', 'Abdomen hinchado y tenso'] },
      { phase: 'Fase 3: 24 a 72 Horas', symptoms: ['Deshidratación severa y shock hipovolémico', 'Fallo multiorgánico si no se hospitaliza'] },
    ],
    emergencyProtocol: [
      { stepNumber: 1, title: 'Retirar Todo Alimento y Grasa Inmediatamente', desc: 'Comer estimula más enzimas y empeora la autodigestión.', isUrgent: true },
      { stepNumber: 2, title: 'Comprobar la "Postura de Rezo"', desc: 'Si baja el pecho al suelo manteniendo las caderas levantadas, sufre dolor abdominal insoportable.', isUrgent: true },
      { stepNumber: 3, title: 'Atención Veterinaria y Prueba cPL', desc: 'Análisis de lipasa específica pancreática (Spec cPL) y ecografía abdominal.', isUrgent: true },
    ],
    vetTreatments: [
      { name: 'Fluidoterapia Intravenosa Cristaloides Intensiva', purpose: 'Restaura la microcirculación en el tejido pancreático inflamado.' },
      { name: 'Analgesia Multimodal con Opioides', purpose: 'Control del dolor extremo con buprenorfina o fentanilo.' },
      { name: 'Nutrición Enteral Ultrabaja en Grasa', purpose: 'Alimentación precoz con dietas <10% de grasa para reparar la barrera intestinal.' },
    ],
    safeAlternatives: [
      { name: 'Pechuga de Pollo Hervida Sin Piel', why: 'Proteína magra de fácil asimilación con prácticamente cero grasa.' },
      { name: 'Pescado Blanco Hervido (Merluza o Bacalao)', why: 'Proteína de alto valor biológico que no estresa el páncreas.' },
      { name: 'Puré de Calabaza 100% Puro', why: 'Fibra soluble que regula el tránsito digestivo sin grasa.' },
    ],
    preventionRules: ['Nunca viertas aceites ni grasas de sartén sobre el pienso del perro.'],
    faqs: [
      { q: '¿Qué es la "postura de rezo"?', a: 'Es una posición en la que el perro apoya el pecho y las patas delanteras en el suelo mientras mantiene las traseras levantadas. Es el signo cardinal de dolor abdominal agudo en perros.' },
    ],
    recommendedProduct: {
      name: "Puré de Calabaza 100% Puro Libby's 425g (Pack de 5)",
      url: "https://amzn.to/4xINd8W",
      badge: "CALMANTE DIGESTIVO SIN GRASA",
      whyRecommended: "Fibra soluble prebiótica pura con 0% de grasa. Utilizado por veterinarios para calmar el tubo digestivo y recuperar al perro de molestias gastrointestinales.",
    },
  },

  // 8. PUMPKIN
  {
    slug: 'pumpkin',
    name: 'Calabaza (Puré 100% Puro)',
    scientificName: 'Cucurbita Pepo (Fibra Péctica Soluble)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'VEGETABLE',
    badgeLabel: '✓ SUPERFOOD CLÍNICO // REGULADOR DIGESTIVO',
    riskSeverity: 'SEGURO Y ALTAMENTE BENEFICIOSO: El regulador natural por excelencia del tránsito intestinal canino; alivia tanto la diarrea como el estreñimiento.',
    primaryCompound: 'Fibra Péctica Soluble, Betacaroteno y Potasio',
    targetOrgans: ['Colonocitos', 'Microbioma Intestinal', 'Mucosa Gástrica'],
    toxicThresholdOrServing: 'Dosis recomendada: 1 cucharadita por cada 5 kg de peso; 1-2 cucharadas soperas al día para perros medianos.',
    onsetWindow: 'Mejora visible en la calidad de las heces en 12 a 24 horas',
    summary: 'El puré de calabaza puro es uno de los recursos gastrointestinales más utilizados por veterinarios. Su alto contenido en pectina soluble absorbe el exceso de agua en diarreas y, al mismo tiempo, hidrata y aporta volumen en casos de estreñimiento.',
    narrativeOverview: [
      'Una solución natural de primera línea ante desajustes digestivos comunes.',
      'Su fibra soluble es fermentada por las bacterias benéficas del colon en ácidos grasos de cadena corta (butirato), regenerando las células del epitelio intestinal.',
      'Asegúrate de utilizar siempre calabaza 100% pura y jamás rellenos dulces para tarta que contengan azúcares o nuez moscada.',
    ],
    biochemicalMechanism: 'La pectina forma un coloide que equilibra el agua luminal. En diarreas absorbe líquido y ralentiza el tránsito; en estreñimiento reblandece la materia fecal. Además promueve la síntesis de ácidos grasos de cadena corta que nutren los colonocitos y reducen el pH luminal inhibiendo patógenos.',
    vitalStats: [
      { label: 'Clasificación', value: 'Prebiótico Gastrointestinal', tone: 'safe' },
      { label: 'Grasa', value: '0% (Seguro para Páncreas)', tone: 'safe' },
      { label: 'Nutrientes Clave', value: 'Betacaroteno, Potasio, Vitamina A', tone: 'safe' },
    ],
    timeline: [
      { phase: '12 a 24 Horas', symptoms: ['Normalización de la consistencia fecal y evacuación regular'] },
    ],
    emergencyProtocol: [
      { stepNumber: 1, title: 'Comprobar Ingredientes', desc: 'Asegúrate de que solo contiene calabaza, sin especias ni azúcares añadidos.', isUrgent: false },
    ],
    vetTreatments: [
      { name: 'Terapia Prebiótica de Soporte', purpose: 'Recuperación de la flora intestinal tras episodios de diarrea.' },
    ],
    safeAlternatives: [
      { name: 'Boniato Cocido', why: 'Aporte de fibra y potasio suave para el estómago.' },
    ],
    preventionRules: ['Conserva las latas abiertas en recipientes de cristal o congela en porciones.'],
    faqs: [
      { q: '¿Sirve tanto para diarrea como para estreñimiento?', a: 'Sí. Su fibra soluble actúa de forma bidireccional regulando la humedad en el colon.' },
    ],
    recommendedProduct: {
      name: "Puré de Calabaza 100% Puro Libby's 425g (Pack de 5)",
      url: "https://amzn.to/4xINd8W",
      badge: "CALABAZA 100% PURA",
      whyRecommended: "Calabaza natural sin azúcar ni aditivos, ideal para regular digestiones y enriquecer la dieta de tu perro.",
    },
  },

  // 9. WILD ALASKAN SALMON
  {
    slug: 'wild-alaskan-salmon',
    name: 'Salmón Salvaje de Alaska',
    scientificName: 'Oncorhynchus Spp. (Ácidos Grasos Omega-3 EPA y DHA)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'PROTEIN',
    badgeLabel: '✓ SUPERFOOD CLÍNICO // POTENTE ANTIINFLAMATORIO',
    riskSeverity: 'EXCELENTE Y BENEFICIOSO: Fuente suprema de ácidos grasos Omega-3 EPA y DHA biodisponibles y astaxantina, favoreciendo articulaciones, pelaje y corazón.',
    primaryCompound: 'Ácido Eicosapentaenoico (EPA), Ácido Docosahexaenoico (DHA), Astaxantina',
    targetOrgans: ['Piel y Pelaje', 'Articulaciones', 'Sistema Cardiovascular', 'Cerebro'],
    toxicThresholdOrServing: '20-30 g cocinados por cada 10 kg de peso, 2 o 3 veces por semana.',
    onsetWindow: 'Mejoras en pelo y piel visibles en 2 a 4 semanas',
    summary: 'El salmón salvaje de Alaska aporta una nutrición antiinflamatoria de primer nivel. A diferencia del salmón de piscifactoría, no contiene antibióticos ni colorantes y ofrece niveles excepcionales de EPA y DHA.',
    narrativeOverview: [
      'Espectacular para perros con picores, piel seca, alergias o rigidez articular.',
      'Su color rojizo natural proviene de la astaxantina, un antioxidante cientos de veces más potente que la vitamina E.',
      'Importante: El salmón del Pacífico NUNCA debe darse crudo a los perros debido al riesgo de intoxicación por salmón (parásito portador de Neorickettsia). Cocínalo siempre a conciencia.',
    ],
    biochemicalMechanism: 'El EPA y DHA reemplazan al ácido araquidónico en las membranas celulares, inhibiendo la síntesis de eicosanoides proinflamatorios y favoreciendo la producción de resolvinas y protectinas antiinflamatorias.',
    vitalStats: [
      { label: 'Clasificación', value: 'Ácidos Grasos Esenciales Omega-3', tone: 'safe' },
      { label: 'Antioxidante', value: 'Astaxantina Natural', tone: 'safe' },
      { label: 'Regla de Cocinado', value: 'Cocinar Siempre (Peligro de Parásitos Crudos)', tone: 'warning' },
    ],
    timeline: [
      { phase: '2 a 4 Semanas', symptoms: ['Brillo intenso en el pelo, reducción de descamación y mejora en movilidad'] },
    ],
    emergencyProtocol: [
      { stepNumber: 1, title: 'Retirar Espinas y Cocinar por Completo', desc: 'Evita atragantamientos y elimina cualquier riesgo parasitario.', isUrgent: true },
    ],
    vetTreatments: [
      { name: 'Suplementación con Omega-3', purpose: 'Control coadyuvante de osteoartritis, nefropatías crónicas y dermatitis atópica.' },
    ],
    safeAlternatives: [
      { name: 'Sardinas en Agua Sin Sal', why: 'Pescado azul pequeño con bajo riesgo de metales pesados.' },
    ],
    preventionRules: ['Nunca alimentes con restos de salmón ahumado por su excesivo contenido en sal.'],
    faqs: [
      { q: '¿Qué es la enfermedad del salmón?', a: 'Es una infección causada por Neorickettsia transmitida por un parásito en salmones crudos del Pacífico. Se previene cocinando el pescado por completo.' },
    ],
    recommendedProduct: {
      name: "Aceite de Salmón Salvaje de Alaska Puro 473ml",
      url: "https://amzn.to/3UA8cvX",
      badge: "OMEGA-3 NATURAL CON BOMBA DOSIFICADORA",
      whyRecommended: "Aceite prensado en frío que proporciona EPA y DHA para calmar picores, fortalecer articulaciones y embellecer el pelaje.",
    },
  },

  // 10. WILD BLUEBERRIES
  {
    slug: 'wild-blueberries',
    name: 'Arándanos Silvestres',
    scientificName: 'Vaccinium Angustifolium (Antocianinas)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'FRUIT',
    badgeLabel: '✓ SUPERFOOD CLÍNICO // PROTECCIÓN NEURONAL',
    riskSeverity: 'EXCELENTE Y BENEFICIOSO: Concentración extraordinaria de antocianinas y polifenoles capaces de proteger la agudeza cognitiva en perros mayores.',
    primaryCompound: 'Antocianinas, Quercetina, Vitamina C y K',
    targetOrgans: ['Cerebro (Barrera Hematoencefálica)', 'Retina', 'Endotelio Vascular'],
    toxicThresholdOrServing: 'De 2 a 5 arándanos al día para perros pequeños; 8 a 10 para perros grandes.',
    onsetWindow: 'Protección celular antioxidante acumulativa',
    summary: 'Los arándanos silvestres poseen una de las mayores densidades de antioxidantes del reino vegetal. Sus flavonoides cruzan la barrera hematoencefálica, protegiendo las neuronas caninas del estrés oxidativo y retrasando el envejecimiento cerebral.',
    narrativeOverview: [
      'Un snack crujiente, dulce y bajo en calorías ideal como premio de entrenamiento.',
      'A diferencia de las uvas, los arándanos son 100% seguros y carecen de ácido tartárico.',
    ],
    biochemicalMechanism: 'Las antocianinas modulan la señalización neuronal e incrementan el factor neurotrófico derivado del cerebro (BDNF), protegiendo la sinapsis del deterioro oxidativo.',
    vitalStats: [
      { label: 'Clasificación', value: 'Antioxidante Neuroprotector', tone: 'safe' },
      { label: 'Calorías', value: 'Muy Bajas (Ideal para Control de Peso)', tone: 'safe' },
    ],
    timeline: [{ phase: 'Uso Continuo', symptoms: ['Vitalidad sostenida y apoyo antioxidante'] }],
    emergencyProtocol: [{ stepNumber: 1, title: 'No Confundir con Uvas', desc: 'Aunque son frutas redondas oscuras, los arándanos son seguros y las uvas letales.', isUrgent: false }],
    vetTreatments: [{ name: 'Soporte Cognitivo Geriátrico', purpose: 'Protección frente al síndrome de disfunción cognitiva en perros ancianos.' }],
    safeAlternatives: [{ name: 'Arándanos Rojos (Cranberries)', why: 'Apoyo para el tracto urinario.' }],
    preventionRules: ['Lávalos bien antes de servir o congélalos para verano.'],
    faqs: [{ q: '¿Pueden comerlos congelados?', a: 'Sí, son un excelente snack refrescante y crujiente para días calurosos.' }],
  },

  // 11. RAW GREEN TRIPE
  {
    slug: 'raw-green-tripe',
    name: 'Callos Verdes Crudos Sin Blanquear (Estómago de Rumiante)',
    scientificName: 'Tejido Ruminal No Lavado y Sin Blanquear',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'PROTEIN',
    badgeLabel: '✓ SUPERFOOD CLÍNICO // BOMBA DE PROBIÓTICOS Y ENZIMAS',
    riskSeverity: 'EXCELENTE Y BENEFICIOSO: Fuente inigualable de bacterias probióticas vivas, enzimas digestivas activas y ratio calcio:fósforo perfecto 1:1.',
    primaryCompound: 'Lactobacillus acidophilus, Enzimas Digestivas, Ácidos Grasos',
    targetOrgans: ['Microbioma Intestinal', 'Mucosa Digestiva', 'Sistema Inmune'],
    toxicThresholdOrServing: '1 a 2 cucharadas soperas por cada 10 kg al día mezcladas con la comida.',
    onsetWindow: 'Mejoras en olor de heces y digestión en 3 a 7 días',
    summary: 'La tripa verde cruda sin blanquear es considerada un alimento sagrado para el microbioma canino. Conserva los jugos gástricos y las bacterias fermentativas del estómago de rumiantes que restauran la digestión canina de forma milagrosa.',
    narrativeOverview: [
      'Posee un olor muy característico que a los perros les resulta irresistible.',
      'Ideal para perros con coprofagia (comer heces), intolerancias o digestiones difíciles.',
      'Importante: No confundir con la tripa blanca de consumo humano, que está hervida y tratada químicamente.',
    ],
    biochemicalMechanism: 'Aporta cultivos vivos de Lactobacillus y enzimas que optimizan la digestión sin demandar esfuerzo al páncreas canino.',
    vitalStats: [
      { label: 'Clasificación', value: 'Probiótico y Enzimas Naturales', tone: 'safe' },
      { label: 'Ratio Ca:P', value: '1:1 Ideal', tone: 'safe' },
    ],
    timeline: [{ phase: '1 Semana', symptoms: ['Disminución de gases, heces más compactas y apetito renovado'] }],
    emergencyProtocol: [{ stepNumber: 1, title: 'No Cocinar', desc: 'El calor destruye las enzimas y los probióticos vivos.', isUrgent: false }],
    vetTreatments: [{ name: 'Terapia de Rebalanceo Intestinal', purpose: 'Restauración del microbioma tras uso de antibióticos.' }],
    safeAlternatives: [{ name: 'Kéfir de Cabra Crudo', why: 'Aporte semejante de fermentos vivos.' }],
    preventionRules: ['Conserva congelado en porciones herméticas.'],
    faqs: [{ q: '¿Por qué huele tan fuerte?', a: 'Porque contiene materia vegetal predigerida y cultivos probióticos activos.' }],
  },

  // 12. BONE BROTH
  {
    slug: 'bone-broth',
    name: 'Caldo de Huesos Rico en Colágeno',
    scientificName: 'Extracto de Gelatina, Aminoácidos y Glucosaminoglicanos',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'SUPPLEMENT',
    badgeLabel: '✓ SUPERFOOD CLÍNICO // REPARACIÓN ARTICULAR Y MUCOSA',
    riskSeverity: 'EXCELENTE Y BENEFICIOSO: El colágeno tipo II, la glicina y la glucosamina reparan la mucosa del intestino permeable y lubrican articulaciones rígidas.',
    primaryCompound: 'Colágeno Tipo II, Glicina, Prolina y Glucosamina',
    targetOrgans: ['Cartílago Articular', 'Barrera Intestinal', 'Hígado'],
    toxicThresholdOrServing: '2 a 4 cucharadas soperas por comida añadidas templadas sobre el alimento.',
    onsetWindow: 'Hidratación inmediata; reparación articular en varias semanas',
    summary: 'Cocinado a fuego lento durante horas, el caldo de huesos extrae la gelatina y los minerales que reparan la barrera digestiva y cuidan las articulaciones de los perros de todas las edades.',
    narrativeOverview: [
      'Aumenta la hidratación en perros que beben poco agua y revitaliza a perros enfermos.',
      'Advertencia crucial: El caldo debe hacerse sin cebolla, sin ajo y sin sal añadida. Los caldos humanos comerciales de supermercado son peligrosos.',
    ],
    biochemicalMechanism: 'La gelatina sella las uniones estrechas del epitelio digestivo, mientras que la glicina favorece la desintoxicación hepática y la glucosamina regenera el cartílago.',
    vitalStats: [
      { label: 'Clasificación', value: 'Suplemento Hidratante y Articular', tone: 'safe' },
      { label: 'Condición Crítica', value: 'Cero Cebolla, Cero Ajo, Cero Sal', tone: 'warning' },
    ],
    timeline: [{ phase: 'Inmediato', symptoms: ['Gran palatabilidad, hidratación y calor digestivo'] }],
    emergencyProtocol: [{ stepNumber: 1, title: 'Retirar y Tirar Todos los Huesos', desc: 'Nunca des los huesos cocidos del caldo; fíltralo con colador fino.', isUrgent: true }],
    vetTreatments: [{ name: 'Soporte en Convalecencia', purpose: 'Aporte de aminoácidos y líquidos de fácil absorción.' }],
    safeAlternatives: [{ name: 'Caldo Casero de Pollo Sin Sal ni Cebolla', why: 'Opción sencilla elaborada en casa.' }],
    preventionRules: ['Retira la capa de grasa que solidifica arriba en la nevera antes de servir.'],
    faqs: [{ q: '¿Por qué se vuelve como gelatina en la nevera?', a: 'Es señal de que tiene una alta concentración de colágeno natural extraído.' }],
  },

  // 13. ZUCCHINI
  {
    slug: 'zucchini',
    name: 'Calabacín (Al Vapor / Ecológico)',
    scientificName: 'Cucurbita Pepo (Agua Celular y Bajo Oxalato)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'VEGETABLE',
    badgeLabel: '✓ SUPERFOOD CLÍNICO // HIDRATACIÓN BAJA EN CALORÍAS',
    riskSeverity: 'SEGURO Y BENEFICIOSO: Muy bajo en calorías, rico en agua celular y bajo en oxalatos, ideal para control de peso y salud urinaria.',
    primaryCompound: 'Agua Celular, Luteína, Folatos y Potasio',
    targetOrgans: ['Riñones y Vejiga', 'Retina', 'Control de Peso'],
    toxicThresholdOrServing: '20-40 g al día por cada 10 kg, cocinado al vapor o rallado.',
    onsetWindow: 'Excelente tolerancia digestiva diaria',
    summary: 'El calabacín es el vegetal estrella para dietas caseras y perros con sobrepeso. Compuesto por un 95% de agua celular, aporta fibra que sacia sin alterar la glucemia y contiene niveles insignificantes de oxalatos, previniendo cálculos urinarios.',
    narrativeOverview: [
      'Perfecto para dar saciedad a perros golosos sin añadir calorías.',
      'Rállalo o cuécelo ligeramente al vapor para facilitar su asimilación digestiva.',
    ],
    biochemicalMechanism: 'Su bajo índice glucémico y alto contenido en agua facilitan la diuresis fisiológica sin sobrecargar los riñones.',
    vitalStats: [
      { label: 'Agua', value: '95% (Hidratación pura)', tone: 'safe' },
      { label: 'Oxalatos', value: 'Muy Bajos (Apto cálculos)', tone: 'safe' },
    ],
    timeline: [{ phase: 'Uso Diario', symptoms: ['Mayor saciedad y buena digestión'] }],
    emergencyProtocol: [{ stepNumber: 1, title: 'Evitar Piezas Amargas', desc: 'Calabacines con amargor excesivo pueden contener cucurbitacinas irritantes.', isUrgent: false }],
    vetTreatments: [{ name: 'Dietas de Reducción de Peso', purpose: 'Volumen alimentario bajo en densidad calórica.' }],
    safeAlternatives: [{ name: 'Pepino', why: 'Igualmente hidratante y crujiente.' }],
    preventionRules: ['Pícalo en trozos adecuados al tamaño del perro.'],
    faqs: [{ q: '¿Se puede dar crudo?', a: 'Sí, pero rallado muy fino para que pueda aprovechar sus nutrientes.' }],
  },

  // 14. RAW GOAT MILK / KEFIR
  {
    slug: 'raw-goat-milk-kefir',
    name: 'Leche Cruda y Kéfir de Cabra',
    scientificName: 'Capra Hircus Lac (Caseína A2 y Ácido Caprílico)',
    status: 'SAFE_AND_BENEFICIAL',
    category: 'DAIRY',
    badgeLabel: '✓ SUPERFOOD CLÍNICO // LÁCTEO DE ALTA DIGESTIBILIDAD',
    riskSeverity: 'EXCELENTE Y BENEFICIOSO: Caseína A2 de alta digestibilidad, glóbulos grasos pequeños de rápida absorción, aporte de probióticos y ácidos grasos beneficiosos.',
    primaryCompound: 'Caseína A2, Ácido Caprílico, Ácido Cáprico, UFC Probióticas',
    targetOrgans: ['Mucosa Digestiva', 'Piel y Patas', 'Sistema Inmune'],
    toxicThresholdOrServing: '1 cucharadita (<5 kg); 1 cucharada sopera (5-15 kg); 2 cucharadas (>15 kg) al día.',
    onsetWindow: 'Digestión en 20 minutos; apoyo digestivo y dérmico en 2 a 3 semanas',
    summary: 'La leche y kéfir de cabra son idóneos para la fisiología canina. A diferencia de la leche de vaca, no contiene caseína A1 inflamatoria, su lactosa es más baja y sus glóbulos grasos diminutos se asimilan en apenas 20 minutos sin causar diarrea.',
    narrativeOverview: [
      'El kéfir de cabra aporta ácidos grasos y probióticos que ayudan a mantener el equilibrio natural de la piel y las patas.',
      'Asegúrate de que sea kéfir natural sin azúcares ni sabores artificiales.',
    ],
    biochemicalMechanism: 'Los glóbulos grasos de 2 micrómetros son atacados con facilidad por las lipasas. El ácido caprílico (C8) apoya un entorno microbiano equilibrado en la piel y el tubo digestivo.',
    vitalStats: [
      { label: 'Proteína', value: 'Caseína A2 de Fácil Digestión', tone: 'safe' },
      { label: 'Tiempo Digestión', value: '20 Minutos (6x más rápido que vaca)', tone: 'safe' },
      { label: 'Acción Clave', value: 'Ácido Caprílico y Probióticos', tone: 'safe' },
    ],
    timeline: [{ phase: '2 a 3 Semanas', symptoms: ['Disminución del lamido de patas y mejora gastrointestinal'] }],
    emergencyProtocol: [{ stepNumber: 1, title: 'No Confundir con Leche de Vaca Pasteurizada', desc: 'La leche de vaca comercial causa diarreas por lactosa y caseína A1.', isUrgent: false }],
    vetTreatments: [{ name: 'Apoyo Nutricional en Sensibilidades', purpose: 'Aporte de nutrientes suaves y probióticos.' }],
    safeAlternatives: [{ name: 'Aceite de Coco Virgen (pizca)', why: 'Aporte de triglicéridos de cadena media.' }],
    preventionRules: ['Introduce gradualmente para que la flora se adapte.'],
    faqs: [
      { q: '¿Por qué los perros toleran la leche de cabra y no la de vaca?', a: 'Porque la de cabra tiene caseína A2 no inflamatoria, menos lactosa y partículas de grasa minúsculas que se digieren sin esfuerzo.' },
      { q: '¿Ayuda a los perros que se lamen constantemente las patas?', a: 'Puede ayudar como apoyo nutricional suave, ya que los ácidos grasos y probióticos promueven el confort de la piel y el equilibrio de la microbiota.' },
    ],
    recommendedProduct: {
      name: "Native Pet Leche de Cabra y Calabaza en Polvo para Perros",
      url: "https://amzn.to/3UA8cvX",
      badge: "LECHE DE CABRA A2 Y PROBIÓTICOS VIVOS",
      whyRecommended: "Leche de cabra A2 de fácil digestión con calabaza pura. Aporta probióticos para calmar la piel y reforzar la digestión.",
    },
  },
];
