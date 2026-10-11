import type { BrandReview, BrandReviewSlug } from './types';

export const esBrandReviews: Record<BrandReviewSlug, BrandReview> = {
  'blue-buffalo': {
    slug: 'blue-buffalo',
    name: 'Blue Buffalo',
    grade: 'Nota: B+',
    score: '8.4 / 10',
    badge: 'Pienso Comercial Popular con Carne como Primer Ingrediente',
    category: 'Pienso Seco Comercial y Comida Húmeda en Lata',
    countryOfOrigin: 'Wilton, Connecticut, EE. UU. (Fundada en 2003)',
    parentCompany: 'General Mills (Adquirida en 2018 por 8.000 millones USD)',
    manufacturingFacilities: 'Plantas propias en Joplin (Missouri) y Richmond (Indiana)',
    recallRecord: {
      status: 'PAST_RECALLS',
      label: 'Retiradas Previas Registradas por la FDA',
      details: 'Las retiradas históricas de la FDA incluyen exceso de Vitamina D (2010), problemas de humedad/moho (2010), presencia accidental de propilenglicol en comida húmeda (2015) y retirada voluntaria de huesos masticables por Salmonella (2015). Incluida en la investigación de la FDA 2018-2019 sobre miocardiopatía dilatada (MCD) vinculada a piensos sin cereales ricos en legumbres.',
      history: [
        '2010: Retirada voluntaria por niveles elevados de Vitamina D en fórmulas secas seleccionadas.',
        '2010: Desviación de humedad que causó posible proliferación de moho en lotes específicos.',
        '2015: Retirada Clase II de comida enlatada por presencia involuntaria de propilenglicol.',
        '2018-2019: Citada en la investigación de la FDA sobre posible relación entre MCD y recetas libres de grano densas en legumbres.',
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
      'Carne real deshuesada (pollo, salmón o ternera) siempre como ingrediente nº 1 en todas sus gamas.',
      'Las croquetas LifeSource Bits prensadas en frío protegen vitaminas, minerales y antioxidantes del calor de extrusión.',
      'Completamente libre de maíz, trigo, soja y aromatizantes o colorantes químicos artificiales.',
      'Portafolio amplio que va desde Wilderness sin cereales hasta Life Protection con granos saludables.',
    ],
    cons: [
      'Carga elevada de carbohidratos (42-48%) que puede favorecer el sobrepeso en perros sedentarios o castrados.',
      'Las variedades sin cereales Wilderness emplean cantidades notables de proteína de guisante, almidón y patata.',
      'El historial previo de retiradas de la FDA refleja los desafíos del control de calidad en producción masiva.',
    ],
    overview:
      'Blue Buffalo es una de las marcas de alimentos para mascotas más destacadas de Norteamérica, fundamentada en la filosofía de priorizar la carne y educar al consumidor contra las harinas de subproductos avícolas. Adquirida por General Mills en 2018, la marca continúa formulando alimentos secos y húmedos ricos en proteínas a través de diversas líneas especializadas como Wilderness, Life Protection Formula y Basics Limited Ingredient.',
    deepDive: [
      'Arquitectura Nutricional y LifeSource Bits: A diferencia de los piensos industriales convencionales que someten todos los nutrientes a extrusión a alta temperatura (a menudo superior a 200°C), Blue Buffalo separa su complejo de vitaminas y antioxidantes en croquetas LifeSource Bits conformadas en frío. Esta tecnología dual preserva vitaminas termolábiles (como Vitamina C, Vitamina E y complejo B) y bioflavonoides activos que habitualmente se degradan en el procesamiento térmico estándar.',
      'Equilibrio de Carbohidratos y Legumbres: Aunque las fórmulas Wilderness aportan una sólida fracción proteica del 34-38%, el análisis proximal de laboratorio indica que los carbohidratos totales se sitúan entre el 42% y el 48%. En las recetas sin cereales, se utilizan guisantes partidos, proteína de guisante y almidón de tapioca. Aunque es seguro para perros sanos, los ejemplares con predisposición a pancreatitis o resistencia a la insulina requieren supervisión estricta.',
      'Hidratación y Manejo Clínico: El pienso seco extruido contiene solo un 8-10% de humedad, lo que somete a los riñones caninos a un esfuerzo continuo a lo largo de los años si se consume de forma exclusiva. Blue Buffalo ofrece una nutrición base sólida, pero los veterinarios aconsejan añadir caldo de huesos tibio, agua o un 20% de aderezo fresco para evitar la orina concentrada y favorecer la función renal.',
    ],
    ingredientPillars: [
      {
        title: '1. Proteína Animal Identificada',
        score: '9.0 / 10',
        explanation: 'Pollo, ternera, pato o salmón deshuesado encabeza siempre la lista de ingredientes, respaldado por harinas cárnicas monoespecie para aportar aminoácidos concentrados.',
      },
      {
        title: '2. Fracción de Carbohidratos',
        score: '7.5 / 10',
        explanation: 'Los niveles de almidón rondan el 42-48%. Las fórmulas con cereales usan arroz integral y avena, mientras que las sin grano recurren a guisantes y patatas.',
      },
      {
        title: '3. Procesamiento y Exposición Térmica',
        score: '8.8 / 10',
        explanation: 'Los exclusivos LifeSource Bits conformados en frío evitan la degradación térmica de micronutrientes vitales durante el ciclo de extrusión industrial.',
      },
      {
        title: '4. Trazabilidad y Seguridad Histórica',
        score: '7.8 / 10',
        explanation: 'Las modernas plantas propias de Missouri e Indiana han implantado protocolos analíticos rigurosos tras los eventos de retirada registrados a principios de la década de 2010.',
      },
    ],
    keyProductLines: [
      {
        name: 'Wilderness High-Protein',
        type: 'Pienso Alto en Proteína / Sin Cereales',
        description: 'Formulado para emular la dieta ancestral del lobo con más de un 34% de proteína, carne real e inexistencia total de cereales o gluten.',
        targetDogs: 'Perros adultos activos, razas de trabajo y perros que requieren refuerzo muscular de alto nivel proteico.',
      },
      {
        name: 'Life Protection Formula',
        type: 'Pienso Equilibrado con Granos Enteros',
        description: 'Dieta de mantenimiento equilibrada que incorpora arroz integral, cebada y avena junto a proteína animal deshuesada.',
        targetDogs: 'Perros de compañía de nivel de actividad habitual y digestión equilibrada.',
      },
      {
        name: 'Basics Limited Ingredient Diet (LID)',
        type: 'Dieta Hipoalergénica con Proteína Única',
        description: 'Proteína animal novedosa única (pavo, pato o salmón) combinada con carbohidratos suaves, sin lácteos, huevos ni trigo.',
        targetDogs: 'Perros con intolerancias alimentarias, prurito crónico o sensibilidad gastrointestinal.',
      },
    ],
    veterinaryVerdict:
      'Blue Buffalo representa un pienso comercial claramente superior al promedio del supermercado tradicional. Aunque su porcentaje de carbohidratos supera lo ideal desde una perspectiva biológica pura, su cabecera cárnica identificada y sus LifeSource Bits en frío lo convierten en una opción comercial fiable.',
    feedingRecommendation:
      'Recomendamos alternar la fuente de proteína cada 3 o 4 meses y rehidratar cada ración con un cuarto de taza de agua tibia o caldo de huesos sin sal. En perros mayores de 7 años, combinar Blue Buffalo con un 15-20% de alimentos frescos aptos para humanos mejora notablemente la vitalidad metabólica.',
    affiliateProductKeys: [
      'blue-buffalo-wilderness-chicken-24lb',
      'blue-buffalo-wilderness-salmon-24lb',
      'blue-buffalo-wilderness-chicken-4lb',
    ],
  },
  'rachael-ray-nutrish': {
    slug: 'rachael-ray-nutrish',
    name: 'Rachael Ray Nutrish',
    grade: 'Nota: C+ / B-',
    score: '7.2 / 10',
    badge: 'Fórmula Económica de Supermercado',
    category: 'Pienso Seco y Tarrinas Húmedas de Gama Económica',
    countryOfOrigin: 'Meadville, Pennsylvania, EE. UU. (Lanzada en 2008)',
    parentCompany: 'Post Holdings (Adquirida de J.M. Smucker en 2023)',
    manufacturingFacilities: 'Plantas de fabricación en Pennsylvania y Kansas (EE. UU.)',
    recallRecord: {
      status: 'MONITORED',
      label: 'Bajas Retiradas, Citada en Informe de la FDA',
      details: 'Volumen bajo de retiradas formales. Retirada voluntaria aislada en 2019 de comida húmeda por exceso de Vitamina D. Nombrada en el informe exploratorio de la FDA de 2019 sobre concentraciones de guisantes y legumbres en alimentos sin cereales económicos.',
      history: [
        '2019: Retirada voluntaria de lotes específicos de comida húmeda por concentración elevada de Vitamina D.',
        '2018-2019: Citada en el informe de investigación de la FDA sobre miocardiopatía dilatada y fórmulas sin grano.',
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
      'Precio por kilo muy asequible, haciendo accesible la alimentación para familias con presupuesto ajustado.',
      'Amplia disponibilidad comercial en supermercados e hipermercados.',
      'Las líneas Peak y Dish incorporan un mayor contenido de proteína cárnica e ingredientes vegetales enteros visibles.',
      'Una parte de los ingresos se dona de forma continuada a protectoras y rescate de animales.',
    ],
    cons: [
      'Las recetas básicas de supermercado dependen notablemente de gluten de maíz, maíz molido y guisantes secos.',
      'Baja concentración de ácidos grasos omega-3 activos (mínimo EPA/DHA), requiriendo suplementación de aceite de pescado.',
      'Carga glucémica elevada (hasta 52% de carbohidratos) perjudicial para perros sedentarios.',
    ],
    overview:
      'Rachael Ray Nutrish nació en 2008 en colaboración con la conocida chef Rachael Ray para llevar ingredientes más limpios a los lineales de gran consumo. Fabricada actualmente bajo Post Holdings, la marca abarca desde recetas básicas asequibles hasta gamas superiores como Nutrish Peak y Nutrish Dish.',
    deepDive: [
      'Estratificación de Calidad entre Líneas: Es fundamental distinguir entre las recetas estándar de Nutrish y su línea superior "Peak". Mientras que la línea básica (ej. Pollo y Verduras) sitúa la carne en primer lugar pero le siguen inmediatamente gluten de maíz, maíz entero y guisantes, las variedades Nutrish Peak suprimen por completo maíz, trigo y soja, alcanzando un notable 30% de proteína bruta.',
      'Calidad de las Grasas y Equilibrio Lipídico: La grasa principal es grasa de pollo conservada con tocoferoles mixtos naturales. No obstante, los omega-3 marinos de cadena larga (EPA y DHA) se presentan en cantidades modestas. Los perros alimentados de forma continuada con Nutrish estándar se benefician ampliamente de añadir aceite de salmón salvaje a su cuenco.',
      'Compromiso Calidad-Precio: Nutrish cumple una función social importante al ofrecer una alternativa superior a las marcas blancas de hipermercado repletas de subproductos, sin disparar el presupuesto doméstico. Sin embargo, los propietarios deben revisar bien las etiquetas para evitar recetas con fraccionamiento excesivo de legumbres.',
    ],
    ingredientPillars: [
      {
        title: '1. Proteína Animal Identificada',
        score: '7.5 / 10',
        explanation: 'Pollo o ternera real figura en primer lugar, aunque las recetas de entrada elevan la proteína total mediante gluten vegetal de maíz.',
      },
      {
        title: '2. Fracción de Carbohidratos',
        score: '6.8 / 10',
        explanation: 'Los carbohidratos son altos (46-52%), generando un índice glucémico moderado-alto que exige medir con precisión las porciones.',
      },
      {
        title: '3. Aditivos y Palatantes',
        score: '7.6 / 10',
        explanation: 'Conservado con tocoferoles naturales; evita colorantes sintéticos, aunque emplea aromas naturales para optimizar la palatabilidad.',
      },
      {
        title: '4. Trazabilidad y Fabricación',
        score: '7.2 / 10',
        explanation: 'Producido en instalaciones estadounidenses con controles comerciales estándar y un historial de incidencias sanitarias mínimo.',
      },
    ],
    keyProductLines: [
      {
        name: 'Nutrish Peak High Protein',
        type: 'Fórmula sin Cereales Alta en Proteína',
        description: 'Pienso y tarrinas húmedas sin cereales con 30% de proteína, carne deshuesada real y 0% maíz, trigo o soja.',
        targetDogs: 'Perros que precisan mayor ratio de proteína frente a carbohidratos a un coste contenido.',
      },
      {
        name: 'Nutrish Dish Whole Ingredients',
        type: 'Pienso con Ingredientes Reales Visibles',
        description: 'Combina croquetas de cocción lenta con dados visibles de zanahorias reales, guisantes y trozos de manzana.',
        targetDogs: 'Perros con apetito caprichoso que se estimulan ante la variedad de texturas en el plato.',
      },
      {
        name: 'Nutrish Real Beef & Brown Rice',
        type: 'Pienso Económico de Mantenimiento',
        description: 'Opción básica que combina ternera de granja con arroz integral y guisantes para el día a día.',
        targetDogs: 'Perros familiares sanos con estómago resistente y familias con presupuesto limitado.',
      },
    ],
    veterinaryVerdict:
      'Nutrish es una alternativa aceptable dentro del segmento económico siempre que se elijan las líneas "Peak" o "Dish". Conviene evitar las fórmulas básicas con gluten de maíz y complementar la alimentación con hidratación y ácidos grasos esenciales omega-3.',
    feedingRecommendation:
      'Si utiliza las fórmulas secas estándar de Nutrish, agregue a diario 1 cucharadita de aceite de salmón salvaje para compensar los niveles de EPA/DHA y evite sobrealimentar para prevenir el sobrepeso.',
    affiliateProductKeys: [
      'nutrish-peak-variety-pack-wet',
      'nutrish-beef-pea-brown-rice-28lb',
    ],
  },
  'pure-balance': {
    slug: 'pure-balance',
    name: 'Pure Balance',
    grade: 'Nota: B (Mejor Opción Económica)',
    score: '8.1 / 10',
    badge: 'Mejor Elección Económica de Supermercado',
    category: 'Pienso Seco y Húmedo de Marca Exclusiva Asequible',
    countryOfOrigin: 'Estados Unidos (Marca propia de Walmart, lanzada en 2012)',
    parentCompany: 'Walmart Inc.',
    manufacturingFacilities: 'Elaborado por fabricantes contratados (principalmente Ainsworth Pet Nutrition) en EE. UU.',
    recallRecord: {
      status: 'CLEAN',
      label: 'Historial de Seguridad Impecable',
      details: 'Pure Balance cuenta con un historial de seguridad extraordinariamente limpio, sin retiradas Clase I de la FDA registradas en sus líneas principales de pienso seco desde su lanzamiento en 2012.',
      history: [
        'Sin alertas ni retiradas Clase I de la FDA por patógenos o toxinas en sus fórmulas secas de referencia.',
        'Métricas de control de calidad muy superiores a los piensos industriales convencionales de gran superficie.',
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
      'Excepcional relación calidad-precio: recetas con carne como ingrediente principal a coste de supermercado.',
      '100% libre de maíz, trigo, soja, harinas de subproductos avícolas y colorantes artificiales.',
      'Proteína animal real (salmón, cordero o pollo) siempre como ingrediente nº 1.',
      'Historial impecable de retiradas en comparación con las marcas comerciales veteranas de supermercado.',
    ],
    cons: [
      'Marca blanca elaborada por fabricantes terceros con acuerdos variables de coproducción.',
      'Porcentaje moderado-alto de carbohidratos (46-50%) basado en guisantes, patatas y arroz integral.',
      'Menor número de ensayos clínicos publicados frente a las marcas veterinarias de prescripción.',
    ],
    overview:
      'Pure Balance fue introducida por Walmart en 2012 con el objetivo de democratizar la nutrición canina de calidad. Al formular recetas sin maíz, trigo, soja ni colorantes artificiales, Walmart ofreció una alternativa real a las marcas de tiendas especializadas con un ahorro cercano al 40% por kilo.',
    deepDive: [
      'Fabricación por Terceros y Control de Calidad: Como marca exclusiva de gran superficie, la producción se subcontrata a plantas consolidadas del sector (principalmente Ainsworth Pet Nutrition / Post Holdings). A pesar de su perfil económico, la marca cumple con rigurosidad los perfiles nutricionales de la AAFCO y ha mantenido un historial intachable durante más de una década.',
      'Perfil de Ingredientes frente a Marcas de Boutique: Una comparativa directa entre Pure Balance Salmon & Pea sin cereales y marcas especializadas de precio elevado muestra listas de ingredientes casi idénticas: salmón deshuesado real seguido de harina de salmón y garbanzos. Resulta una opción magnífica para familias que desean ingredientes limpios sin sobreprecios comerciales.',
      'Consideraciones Veterinarias sobre Carbohidratos: Al igual que la mayoría de los piensos de coste accesible, los carbohidratos representan entre un 46% y un 50%. En perros jóvenes y dinámicos proporcionan energía limpia y constante; en perros mayores o sedentarios, es indispensable pesar las raciones con báscula de cocina para evitar el aumento de peso.',
    ],
    ingredientPillars: [
      {
        title: '1. Proteína Animal Identificada',
        score: '8.4 / 10',
        explanation: 'Carne real (salmón, cordero o pollo) al inicio de cada receta, reforzada con harinas de carne con nombre específico en lugar de subproductos anónimos.',
      },
      {
        title: '2. Rellenos y Aditivos',
        score: '8.8 / 10',
        explanation: 'Sin maíz, trigo, soja ni colorantes artificiales (sin Rojo 40 ni Amarillo 5) ni conservantes químicos como BHA o BHT.',
      },
      {
        title: '3. Accesibilidad Económica',
        score: '9.8 / 10',
        explanation: 'Una de las mejores relaciones entre coste económico y valor nutricional del sector comercial minorista.',
      },
      {
        title: '4. Transparencia de Origen',
        score: '7.0 / 10',
        explanation: 'Al tratarse de una marca de distribución, la trazabilidad directa de las granjas es menor que en marcas éticas de especialidad.',
      },
    ],
    keyProductLines: [
      {
        name: 'Pure Balance Grain-Free Salmon & Pea',
        type: 'Receta de Pescado Hipoalergénica',
        description: 'Formulación a base de salmón pensada para perros con alergias o intolerancias al pollo y a los cereales.',
        targetDogs: 'Perros propensos a picor dérmico, otitis recurrentes o pelo apagado.',
      },
      {
        name: 'Pure Balance Chicken & Brown Rice',
        type: 'Fórmula con Granos Suaves',
        description: 'Receta clásica de mantenimiento con pollo auténtico y arroz integral de digestión sencilla.',
        targetDogs: 'Perros de compañía sin afecciones gástricas con actividad normal.',
      },
      {
        name: 'Pure Balance Wild & Free Superfood Blend',
        type: 'Pienso Rico en Proteína con Superalimentos',
        description: 'Fórmula enriquecida con zanahorias, arándanos azules y arándanos rojos para un aporte antioxidante superior.',
        targetDogs: 'Razas activas que demandan mayor densidad calórica y soporte metabólico.',
      },
    ],
    veterinaryVerdict:
      'Pure Balance es sin duda uno de los piensos económicos más honestos del mercado. Ofrece la formulación cárnica y libre de maíz propia de marcas caras a precio de gran superficie, respaldada por un historial de seguridad sorprendentemente intachable.',
    feedingRecommendation:
      'Para maximizar la salud sin incrementar el gasto, acompañe Pure Balance con aderezos frescos económicos: dos cucharadas de calabaza pura en conserva, un huevo cocido dos veces por semana o un chorrito de caldo de huesos casero.',
    affiliateProductKeys: [],
  },
  'ollie': {
    slug: 'ollie',
    name: 'Ollie Comida Fresca para Perros',
    grade: 'Nota: A (Estándar de Oro)',
    score: '9.6 / 10',
    badge: '100% Grado Humano y Estándar de Oro Fresco',
    category: 'Alimento Fresco para Perros Cocinado Suavemente a Grado Humano',
    countryOfOrigin: 'Nueva York, NY, EE. UU. (Fundada en 2016)',
    parentCompany: 'Ollie Pets Inc.',
    manufacturingFacilities: 'Cocinas comerciales con inspección del USDA en Pennsylvania y Nueva Jersey',
    recallRecord: {
      status: 'CLEAN',
      label: 'Historial Impecable Sin Ninguna Retirada',
      details: 'Ollie mantiene un historial de seguridad absoluto con cero retiradas desde su creación en 2016. Al elaborarse en cocinas de grado humano bajo inspección del USDA y controles de la FDA para consumo humano, la inocuidad biológica es inmensamente superior a las plantas de pienso para animales.',
      history: [
        'Cero retiradas de la FDA ni alertas sanitarias desde su fundación en 2016.',
        'Cocinado a temperaturas internas de precisión que eliminan patógenos preservando todos los micronutrientes.',
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
      'Carnes y hortalizas 100% de grado humano inspeccionadas por el USDA, perfectamente visibles y reconocibles en cada ración.',
      'Cocinado a fuego lento a baja temperatura para suprimir bacterias sin desnaturalizar vitaminas ni enzimas bioactivas.',
      'Planes calóricos diarios personalizados por veterinarios nutricionistas según peso, edad y actividad exacta.',
      'La humedad biológica natural (72%) protege los riñones, la vejiga y el equilibrio celular del perro.',
      'Registro sanitario impecable con cero incidencias desde el lanzamiento de la marca.',
    ],
    cons: [
      'Inversión mensual superior (180$ - 350$/mes según peso del animal y necesidades calóricas).',
      'Requiere espacio de congelador y planificación para descongelar previamente en el frigorífico.',
      'Modelo de suscripción con envío a domicilio y nula disponibilidad en tiendas físicas tradicionales.',
    ],
    overview:
      'Ollie nació en 2016 para revolucionar la longevidad canina sustituyendo el pienso ultraprocesado por comida real de grado humano. Formuladas por veterinarios diplomados en nutrición (ACVN), las recetas de Ollie se cocinan suavemente en cocinas bajo supervisión del USDA y se entregan en envases individuales calibrados para el perfil metabólico de cada perro.',
    deepDive: [
      'Ciencia de la Cocción Suave frente a la Extrusión: El pienso extruido soporta temperaturas de 150°C a 200°C y presiones extremas, generando productos finales de glicación avanzada (AGEs) y alterando la estructura proteica. Ollie cocina carne magra y vegetales a temperaturas controladas de baja intensidad. Los estudios clínicos demuestran una digestibilidad proteica hasta un 40% superior y una asimilación nutricional óptima.',
      'Protección Renal y Vesical mediante Hidratación Natural: El aparato digestivo canino evolucionó para obtener más del 70% de su hidratación a través de la presa. Alimentar solo con pienso seco (8-10% agua) mantiene al perro en un estado de ligera deshidratación crónica, concentrando la orina y acelerando el desgaste renal. Ollie aporta un 72% de humedad natural que favorece el filtrado renal y previene cálculos urinarios.',
      'Dosificación Exacta y Prevención de Obesidad: El sobrepeso es la principal causa prevenible de muerte prematura en perros. Ollie elimina la estimación al empaquetar porciones calculadas según el Requerimiento Energético en Reposo (RER) y Mantenimiento (MER), logrando una condición corporal óptima (BCS 4-5 sobre 9).',
    ],
    ingredientPillars: [
      {
        title: '1. Carnes 100% de Grado Humano',
        score: '9.9 / 10',
        explanation: 'Cortes enteros de ternera, pollo, pavo y cordero inspeccionados por el USDA. Cero harinas de subproductos ni grasas animales de origen residual.',
      },
      {
        title: '2. Biodisponibilidad de Nutrientes',
        score: '9.8 / 10',
        explanation: 'Vegetales enteros (boniato, zanahorias, espinacas, arándanos) aportan fibra natural y antioxidantes sin necesidad de premezclas sintéticas agresivas.',
      },
      {
        title: '3. Microbioma y Digestibilidad',
        score: '9.7 / 10',
        explanation: 'Los ensayos clínicos constatan mayor diversidad bacteriana benéfica en el colon, heces más compactas y una absorción gastrointestinal superior.',
      },
      {
        title: '4. Estándar de Fabricación y Seguridad',
        score: '9.9 / 10',
        explanation: 'Elaborado en instalaciones de alimentación humana bajo auditoría del USDA con un expediente de cero incidencias sanitarias.',
      },
    ],
    keyProductLines: [
      {
        name: 'Ternera Fresca con Boniatos',
        type: 'Receta Muscular Alta en Proteína',
        description: 'Ternera magra USDA, hígado vacuno, boniato, guisantes y arándanos cocinados a fuego lento para preservar nutrientes.',
        targetDogs: 'Perros activos, cachorros en fase de crecimiento y ejemplares que requieren alta palatabilidad cárnica.',
      },
      {
        name: 'Pollo Fresco con Zanahorias',
        type: 'Receta Suave y Digestiva',
        description: 'Pechuga y muslo de pollo, corazón de pollo, zanahorias y arroz. Muy fácil de digerir y suave para el estómago.',
        targetDogs: 'Perros con sensibilidad gástrica o intolerancia a dietas con alto contenido graso.',
      },
      {
        name: 'Pavo Fresco con Arándanos',
        type: 'Receta Hipoalergénica de Aves',
        description: 'Pavo nutritivo, hígado de pavo, col rizada, zanahorias y arándanos ricos en antioxidantes.',
        targetDogs: 'Perros mayores, caninos con alergias recurrentes y perros que requieren bioflavonoides articulares.',
      },
    ],
    veterinaryVerdict:
      'Ollie representa la cúspide de la nutrición canina actual. Las ventajas de la comida fresca 100% de grado humano frente al pienso ultraprocesado en digestibilidad, brillo del pelaje y salud orgánica a largo plazo son rotundas.',
    feedingRecommendation:
      'Si una suscripción al 100% excede su presupuesto mensual, recomendamos la modalidad mixta 50/50: mantenga medio cuenco de buen pienso y añada 50% de Ollie fresco. Incluso un 25% de comida fresca disminuye la inflamación celular y renueva la flora intestinal.',
    affiliateProductKeys: [
      'ollie-chicken-apple-jerky-treats',
    ],
  },
  'open-farm': {
    slug: 'open-farm',
    name: 'Open Farm',
    grade: 'Nota: A-',
    score: '9.2 / 10',
    badge: 'Pionero en Abastecimiento Ético y Certificación Humane',
    category: 'Pienso Ultra-Premium Trazable, RawMix y Comida Húmeda',
    countryOfOrigin: 'Toronto, Ontario, Canadá (Fundada en 2014)',
    parentCompany: 'Open Farm Inc.',
    manufacturingFacilities: 'Plantas familiares certificadas SQF en EE. UU. y Canadá',
    recallRecord: {
      status: 'CLEAN',
      label: 'Historial Intachable de Cero Retiradas',
      details: 'Open Farm cuenta con una trayectoria de seguridad inmaculada, sin ninguna retirada registrada por la FDA desde su fundación en 2014. Aplica trazabilidad mediante código de lote, pruebas independientes de patógenos por lote y auditorías analíticas abiertas.',
      history: [
        'Cero retiradas de la FDA ni advertencias regulatorias desde su inicio en 2014.',
        'Herramienta de trazabilidad por código de lote que permite conocer el origen de cada ingrediente en granjas certificadas.',
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
      'Líder en trazabilidad 100%: introduzca el lote de su bolsa en su web para conocer la granja de procedencia exacta.',
      'Carnes 100% Certified Humane criadas en libertad y pescado salvaje sostenible acreditado por Ocean Wise.',
      'La innovadora gama RawMix recubre el pienso con caldo de huesos y vísceras liofilizadas crudas para una palatabilidad extrema.',
      'Sin harinas de subproductos avícolas, potenciadores químicos ni artificios de división de legumbres.',
      'Opciones con granos ancestrales digestivos (avena, mijo, quinoa) y variedades sin cereales.',
    ],
    cons: [
      'Precio elevado en comparación con los piensos estándar de gran consumo.',
      'Disponible principalmente en tiendas especializadas independientes o mediante compra online.',
      'Su elevada concentración nutritiva exige medir con exactitud para no sobrealimentar sin darse cuenta.',
    ],
    overview:
      'Open Farm fue fundada en 2014 con una misión ética sin precedentes: máxima transparencia en ingredientes y bienestar animal. Fue la primera marca norteamericana en asociarse con Certified Humane y Ocean Wise, ofreciendo una trazabilidad donde cualquier consumidor puede rastrear cada ingrediente del cuenco directamente hasta la granja o pesquería de origen.',
    deepDive: [
      'Trazabilidad Radical y Bienestar Animal Certificado: La mayoría de fabricantes tratan el origen de sus materias primas como secreto comercial. Open Farm imprime un código en cada paquete que desglosa el origen exacto de cada ingrediente. Sus carnes provienen de programas de bienestar animal que garantizan animales criados en pastos y libres de antibióticos.',
      'Tecnología RawMix e Infusión de Caldo de Huesos: La línea RawMix fusiona pienso seco de alta proteína con trozos crudos liofilizados y un recubrimiento de caldo de huesos y vísceras (hígado, corazón, riñón). Esto proporciona una rica concentración de vitaminas biodisponibles (Vitamina A, CoQ10, hierro) y un aroma natural insuperable sin aromatizantes sintéticos.',
      'Granos Ancestrales frente a Recetas sin Cereales: En lugar de abusar del fraccionamiento de legumbres para inflar la proteína vegetal, Open Farm ofrece opciones con granos ancestrales (avena cortada, sorgo, quinoa y mijo). Estos granos de bajo índice glucémico liberan energía de forma constante y nutren el microbioma con fibra prebiótica.',
    ],
    ingredientPillars: [
      {
        title: '1. Bienestar Animal Ético',
        score: '9.9 / 10',
        explanation: 'Ternera de pasto 100% Certified Humane, cerdo libre de jaulas, aves criadas en libertad y pescado salvaje sostenible Ocean Wise.',
      },
      {
        title: '2. Trazabilidad Radical de la Cadena',
        score: '10 / 10',
        explanation: 'Cada ingrediente es rastreable al 100% hasta su granja de origen mediante consulta online del lote.',
      },
      {
        title: '3. Infusión Cruda y Caldo de Huesos',
        score: '9.4 / 10',
        explanation: 'Croquetas impregnadas en caldo de huesos liofilizado y vísceras crudas para un perfil de micronutrientes y aroma inigualables.',
      },
      {
        title: '4. Calidad de Transformación',
        score: '9.1 / 10',
        explanation: 'Elaborado en instalaciones con certificación SQF y pruebas analíticas independientes en todos los lotes fabricados.',
      },
    ],
    keyProductLines: [
      {
        name: 'RawMix Grain-Free Front Range Recipe',
        type: 'Pienso Recubierto con Crudo Liofilizado',
        description: 'Ternera de pasto, cordero y cerdo con trozos crudos liofilizados y baño de caldo de huesos.',
        targetDogs: 'Perros activos, digestiones delicadas y comedores exigentes que rechazan el pienso habitual.',
      },
      {
        name: 'RawMix Ancient Grains Open Prairie Recipe',
        type: 'Pienso con Granos Ancestrales Saludables',
        description: 'Pollo y pavo de corral combinados con granos ancestrales no transgénicos (avena, mijo, quinoa) y caldo de huesos.',
        targetDogs: 'Perros que se benefician de cereales suaves para un aporte de energía metabólica constante.',
      },
      {
        name: 'Wild Ocean Catch Recipe',
        type: 'Fórmula de Pescado Salvaje Mono-Fuente',
        description: 'Salmón, pescado blanco y arenque salvajes Ocean Wise con alta carga de ácidos grasos omega-3 antiinflamatorios (EPA/DHA).',
        targetDogs: 'Perros con dermatitis alérgica, manto seco o rigidez articular.',
      },
    ],
    veterinaryVerdict:
      'Open Farm marca la referencia en integridad ética y transparencia alimentaria en el sector de las mascotas. Sus recetas RawMix brindan la comodidad del pienso seco con la densidad de nutrientes de la carne cruda liofilizada y el caldo de huesos.',
    feedingRecommendation:
      'Al ser considerablemente más denso en calorías y nutrientes que los piensos convencionales, aconsejamos pesar cada toma con una báscula digital de cocina en lugar de utilizar vasos medidores para mantener un peso corporal magro.',
    affiliateProductKeys: [
      'open-farm-rawmix-front-range-20lb',
      'open-farm-rawmix-open-prairie-20lb',
      'open-farm-rawmix-wild-ocean-20lb',
    ],
  },
};
