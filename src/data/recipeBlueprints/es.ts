import type { RecipeBlueprint } from './types';

export const esBlueprints: RecipeBlueprint[] = [
  // 1. TURKEY & PUMPKIN BLUEPRINT
  {
    slug: 'turkey-pumpkin-maintenance',
    name: 'Blueprint de Pavo Magro y Calabaza para Mantenimiento Adulto',
    shortDesc: 'Una fórmula clínica 65/10/10/8/4/3 de comida real diseñada para mantenimiento adulto con pavo 93/7, taurina de órganos, fibra de calabaza y calcio balanceado.',
    badge: 'Mantenimiento Adulto Insignia',
    targetAudience: 'Perros Adultos (1-7 Años) // Mantenimiento y Digestión Sensible',
    colorTheme: '#0070f3',
    macroProfile: {
      proteinDm: '48.2%',
      fatDm: '22.8%',
      carbsDm: '13.4%',
      moisture: '72.5%',
      kcalPerKg: '1,220 kcal/kg (aprox. 34.6 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (Rango Recomendado NRC: 1.1:1 – 1.4:1)',
    },
    ingredients: [
      {
        name: 'Pavo Magro Picado (93% magro / 7% grasa)',
        percentage: 65,
        category: 'Carne Muscular Principal',
        role: 'Aminoácidos esenciales para síntesis muscular',
        clinicalBenefit: 'Proteína única muy digestible de bajo potencial alergénico.',
        color: '#0070f3',
      },
      {
        name: 'Corazones y Mollejas de Pavo',
        percentage: 10,
        category: 'Órganos Musculares y Fuente de CoQ10',
        role: 'Taurina natural, CoQ10, hierro hemo y complejo B12',
        clinicalBenefit: 'Protege el corazón contra la miocardiopatía dilatada (DCM).',
        color: '#7928ca',
      },
      {
        name: 'Puré de Calabaza Pura Orgánica',
        percentage: 10,
        category: 'Fibra Soluble Prebiótica',
        role: 'Regula el tránsito colónico y nutre la microbiota con butirato',
        clinicalBenefit: 'Regulador dual: solidifica heces blandas y previene estreñimiento.',
        color: '#f5a623',
        affiliateKey: 'pumpkinPuree',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: 'Espinacas Baby y Calabacín al Vapor',
        percentage: 8,
        category: 'Fitonutrientes y Verduras Verdes',
        role: 'Aporte de folato, vitamina K1, potasio y antioxidantes',
        clinicalBenefit: 'El vapor rompe la celulosa para absorber nutrientes sin fermentación.',
        color: '#10b981',
      },
      {
        name: 'Polvo de Cáscara de Huevo y Alga Kelp',
        percentage: 4,
        category: 'Mineral Esencial y Balanceador Ca:P',
        role: 'Aporta 38% de calcio elemental para neutralizar el fósforo de la carne',
        clinicalBenefit: 'CRÍTICO: Previene el hiperparatiroidismo y la pérdida ósea.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Aceite de Salmón Salvaje de Alaska (añadido en frío)',
        percentage: 3,
        category: 'Ácidos Grasos Omega-3 Marinos',
        role: 'EPA y DHA bioactivos directos para modular la cascada inflamatoria',
        clinicalBenefit: 'Refuerza la barrera dérmica, calma el prurito y cuida articulaciones.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Una formulación insignia con alimentos reales diseñada para garantizar el mantenimiento de caninos adultos mientras cuida su sistema digestivo. Diseñada con pavo magro, taurina protectora de órganos, pectina prebiótica de calabaza y calcio balanceado de cáscara de huevo.',
    clinicalRationale: [
      {
        title: '1. ¿Por qué Pavo Magro 93/7 en lugar de Pollo o Ternera?',
        description:
          'El pollo y la ternera son los dos alérgenos alimentarios más comunes en perros. El pavo magro ofrece una proteína altamente asimilable con más de 94% de digestibilidad y mínimo impacto pancreático.',
        points: [
          'Aporte de aminoácidos esenciales de alto valor biológico.',
          'Bajo contenido graso para prevenir la pancreatitis aguda.',
          'Proteína única ideal para dietas de descarte y control digestivo.',
        ],
      },
      {
        title: '2. La Necesidad Cardíaca: Vías de Taurina y CoQ10 de los Órganos',
        description:
          'La carne magra por sí sola no cubre las demandas de taurina del miocardio. Añadir un 10% de corazones y mollejas aporta taurina natural y coenzima Q10 para blindar el corazón.',
        points: [
          'Taurina natural biodisponible sin depender de químicos sintéticos.',
          'Hierro hemo bioasimilable y complejo de vitamina B12.',
          'Previene la miocardiopatía dilatada nutricional (DCM).',
        ],
      },
      {
        title: '3. Estequiometría de Calcio a Fósforo (Regla de Oro 1.25:1)',
        description:
          'Toda carne sin hueso tiene una peligrosa relación Ca:P de 1:20. Las dietas caseras sin calcio desmineralizan los huesos caninos. El polvo de cáscara de huevo restablece la proporción óptima de 1.25:1.',
        points: [
          'Aporta 38% de calcio elemental altamente asimilable.',
          'El kelp aporta yodo natural para el metabolismo tiroideo.',
          'Equilibra con precisión el fósforo del pavo.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Preparación y Corte',
        instruction: 'Desinfecta las superficies. Pica los corazones y mollejas de pavo en trozos pequeños de unos 0,5 cm.',
      },
      {
        step: 2,
        title: 'Cocción Lenta (<82°C)',
        instruction: 'Cocina a fuego lento el pavo molido y las vísceras con 1/2 taza de agua durante 8-10 min hasta que desaparezca el tono rosado. No dores ni frías.',
        criticalTip: 'No freír a fuego alto para evitar productos finales de glicación avanzada (AGEs).',
      },
      {
        step: 3,
        title: 'Cocer y Triturar Verduras',
        instruction: 'Cuece al vapor el calabacín y las espinacas 4-5 min. Tritúralos en el procesador junto con el puré de calabaza.',
      },
      {
        step: 4,
        title: 'Enfriamiento Obligatorio (<38°C)',
        instruction: 'Mezcla las verduras con la carne. Deja enfriar completamente a temperatura ambiente antes de añadir suplementos o aceites.',
        criticalTip: 'Nunca añadas el aceite de salmón en caliente; el calor oxida rápidamente los ácidos grasos omega-3.',
      },
      {
        step: 5,
        title: 'Incorporación de Suplementos en Frío',
        instruction: 'Añade el polvo de cáscara de huevo, el kelp y el aceite de salmón salvaje frío, mezclando homogéneamente durante 2 minutos.',
      },
      {
        step: 6,
        title: 'Pesaje y Porcionado',
        instruction: 'Pesa las raciones diarias con báscula digital de cocina. Guarda en recipientes de cristal herméticos o bolsas de congelación.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Refrigeración',
        duration: '3-4 Días Máx',
        instructions: 'Recipiente hermético de cristal a menos de 3°C.',
      },
      {
        method: 'Congelación',
        duration: 'Hasta 90 Días',
        instructions: 'Bolsas al vacío o de silicona herméticas sin aire.',
      },
      {
        method: 'Descongelación',
        duration: 'En Nevera 24h',
        instructions: 'Descongelar en la nevera 24h antes. Nunca calentar al microondas a alta potencia.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '280 – 320 kcal', dailyGramsTotal: '240 g / día', mainProtein: '156 g', organMeat: '24 g', produceAndCarbs: '43 g', supplements: '17 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '550 – 620 kcal', dailyGramsTotal: '480 g / día', mainProtein: '312 g', organMeat: '48 g', produceAndCarbs: '86 g', supplements: '34 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '950 – 1,080 kcal', dailyGramsTotal: '850 g / día', mainProtein: '553 g', organMeat: '85 g', produceAndCarbs: '153 g', supplements: '59 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,320 – 1,480 kcal', dailyGramsTotal: '1,180 g / día', mainProtein: '767 g', organMeat: '118 g', produceAndCarbs: '212 g', supplements: '83 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NO apto para cachorros de razas gigantes en crecimiento (<12 meses) sin ajuste pediátrico de calcio.',
        'NO apto para perros con enfermedad renal crónica avanzada (IRIS fase 3-4) sin reducción estricta de fósforo.',
      ],
      transitionSteps: [
        'Días 1–3: 25% nueva receta / 75% comida habitual',
        'Días 4–6: 50% nueva receta / 50% comida habitual',
        'Días 7–9: 75% nueva receta / 25% comida habitual',
        'Día 10+: 100% nueva receta casera',
      ],
      calciumRule: 'NUNCA omitas el polvo de cáscara de huevo; alimentar con carne sin hueso ni calcio desmineraliza el esqueleto en 60 días.',
    },
    faq: [
      {
        question: '¿Puedo sustituir el pavo por ternera magra?',
        answer: 'Sí, siempre que tenga menos del 8% de grasa y mantengas intacto el 10% de vísceras para la taurina.',
      },
      {
        question: '¿Puedo dar esta receta cruda en lugar de cocinarla?',
        answer: 'Las aves comerciales conllevan riesgos bacterianos y las verduras crudas no son digeribles sin vapor. La cocción suave a fuego lento es mucho más segura.',
      },
    ],
  },

  // 2. BEEF & SWEET POTATO BLUEPRINT
  {
    slug: 'beef-sweet-potato-vitality',
    name: 'Blueprint de Ternera Alimentada con Pasto y Batata para Alta Vitalidad',
    shortDesc: 'Una fórmula de alta energía 62/10/12/8/4/4 con ternera 90/10, hígado y corazón densos en hierro y CoQ10, batata de combustión lenta y brócoli antioxidante.',
    badge: 'Músculo Activo y Vitalidad',
    targetAudience: 'Perros Activos y de Trabajo // Alto Gasto Calórico y Masa Muscular',
    colorTheme: '#7928ca',
    macroProfile: {
      proteinDm: '46.5%',
      fatDm: '24.0%',
      carbsDm: '17.5%',
      moisture: '71.0%',
      kcalPerKg: '1,290 kcal/kg (aprox. 36.6 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (Conforme a NRC)',
    },
    ingredients: [
      {
        name: 'Carne Picada de Ternera de Pasto (90/10)',
        percentage: 62,
        category: 'Carne Roja Muscular',
        role: 'Creatina, CLA, zinc y mioglobina para masa muscular activa',
        clinicalBenefit: 'El vacuno de pasto tiene un ratio de grasas superior para el rendimiento físico.',
        color: '#e11d48',
      },
      {
        name: 'Hígado y Corazón de Ternera',
        percentage: 10,
        category: 'Órganos Ricos en Micronutrientes',
        role: 'Vitamina A biodisponible, B12, cobre, hierro y CoQ10',
        clinicalBenefit: 'Mejora el transporte de oxígeno en sangre y el metabolismo celular.',
        color: '#7928ca',
      },
      {
        name: 'Batata Naranja al Vapor',
        percentage: 12,
        category: 'Carbohidrato Complejo de Absorción Lenta',
        role: 'Carbohidratos de absorción lenta que reponen el glucógeno muscular',
        clinicalBenefit: 'Mantiene la energía constante durante toda la jornada activa.',
        color: '#f5a623',
      },
      {
        name: 'Brócoli y Zanahorias al Vapor',
        percentage: 8,
        category: 'Antioxidantes Crucíferos y Carotenoides',
        role: 'Sulforafano y betacaroteno para detoxificación celular',
        clinicalBenefit: 'Neutraliza el estrés oxidativo provocado por el ejercicio intenso.',
        color: '#10b981',
      },
      {
        name: 'Calcio de Cáscara de Huevo y Kelp',
        percentage: 4,
        category: 'Equilibrador de Calcio y Yodo',
        role: 'Equilibra el fósforo del vacuno a 1.25:1 con yodo para la tiroides',
        clinicalBenefit: 'Protege la densidad ósea bajo impactos mecánicos intensos.',
        color: '#0070f3',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Aceite de Oliva Virgen y Aceite de Hígado de Bacalao',
        percentage: 4,
        category: 'Lípidos Saludables y Vitamina D3',
        role: 'Ácido oleico y vitamina D3 natural para fijar el calcio en los huesos',
        clinicalBenefit: 'Favorece el metabolismo hormonal y cardíaco.',
        color: '#f5a623',
      },
    ],
    executiveSummary:
      'Una fórmula atlética de alto rendimiento formulada para perros de agility, trabajo o con alta demanda calórica. La ternera de pasto aporta creatina natural para potencia muscular, mientras que la batata proporciona energía sostenida sin picos de insulina.',
    clinicalRationale: [
      {
        title: '1. ¿Por qué la Ternera de Pasto Brinda Mayor Potencia Atlética?',
        description:
          'Los perros atléticos agotan rápidamente la fosfocreatina muscular. La ternera de pasto aporta creatina celular directa, favoreciendo la resistencia física y la masa magra.',
        points: [
          'Rica en CLA (ácido linoleico conjugado) para masa muscular magra.',
          'Tres veces más rica en omega-3 que la ternera de cebadero industrial.',
          'Hierro hemo altamente biodisponible para oxigenación celular.',
        ],
      },
      {
        title: '2. Vías de Glucógeno Sostenido con Batata al Vapor',
        description:
          'A diferencia del maíz o el trigo, la batata libera glucosa de forma lenta y continua durante 6 a 8 horas sin causar picos de insulina nocivos para el páncreas.',
        points: [
          'Energía prolongada para caminatas, carreras y deportes caninos.',
          'Rica en potasio para prevenir calambres y fatiga muscular.',
          'Pectina prebiótica suave que protege la flora colónica.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Corte de Carne y Vísceras',
        instruction: 'Corta el corazón y el hígado en dados pequeños de 0,5 cm. Mantenlos refrigerados hasta la cocción.',
      },
      {
        step: 2,
        title: 'Cocción Lenta de Ternera',
        instruction: 'Cocina a fuego lento la carne molida 90/10 y las vísceras con 1/2 taza de agua durante 10 minutos a fuego suave.',
      },
      {
        step: 3,
        title: 'Cocer Batata y Brócoli',
        instruction: 'Pela y trocea la batata. Cuece al vapor con el brócoli y zanahorias (10-12 min) hasta que estén tiernos y machaca groseramente.',
      },
      {
        step: 4,
        title: 'Enfriamiento Total',
        instruction: 'Mezcla los vegetales machacados con la ternera cocinada. Deja enfriar por debajo de 38°C antes de añadir aceites.',
      },
      {
        step: 5,
        title: 'Incorporación de Aceites y Calcio',
        instruction: 'Añade el calcio de cáscara de huevo, el kelp, el aceite de oliva y el de bacalao en frío removiendo bien 2 min.',
      },
      {
        step: 6,
        title: 'Porcionar y Guardar',
        instruction: 'Pesa las porciones según las calorías de actividad calculadas. Guarda en nevera 2-3 días y congela el resto.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Refrigeración',
        duration: '3-4 Días Máx',
        instructions: 'Recipiente hermético de cristal a <3°C.',
      },
      {
        method: 'Congelación',
        duration: 'Hasta 90 Días',
        instructions: 'Raciones individuales selladas al vacío.',
      },
      {
        method: 'Servicio',
        duration: 'Templado Suave',
        instructions: 'Templar al baño maría a temperatura ambiente antes de servir.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '310 – 350 kcal', dailyGramsTotal: '230 g / día', mainProtein: '143 g', organMeat: '23 g', produceAndCarbs: '46 g', supplements: '18 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '620 – 710 kcal', dailyGramsTotal: '460 g / día', mainProtein: '285 g', organMeat: '46 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1,080 – 1,220 kcal', dailyGramsTotal: '810 g / día', mainProtein: '502 g', organMeat: '81 g', produceAndCarbs: '162 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,490 – 1,680 kcal', dailyGramsTotal: '1,120 g / día', mainProtein: '694 g', organMeat: '112 g', produceAndCarbs: '224 g', supplements: '90 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NO apto para perros con pancreatitis diagnosticada (requiere menos del 12% de grasa en materia seca).',
        'NO alimentar sin polvo de calcio (la carne sin calcio causa desmineralización ósea rápida).',
      ],
      transitionSteps: [
        'Días 1–3: 25% nueva / 75% habitual',
        'Días 4–6: 50% nueva / 50% habitual',
        'Días 7–9: 75% nueva / 25% habitual',
        'Día 10+: 100% nueva receta',
      ],
      calciumRule: 'Pesa siempre el calcio con precisión; el fósforo de la ternera exige una neutralización estricta.',
    },
    faq: [
      {
        question: '¿Pueden comer esta receta perros sedentarios?',
        answer: 'En perros sedentarios se debe reducir la ración diaria un 15-20% o elegir la receta de pavo y calabaza.',
      },
    ],
  },

  // 3. SALMON & QUINOA BLUEPRINT
  {
    slug: 'salmon-quinoa-joint-coat',
    name: 'Blueprint de Salmón Salvaje y Quinoa para Articulaciones y Piel',
    shortDesc: 'Una fórmula marina 60/8/12/10/6/4 rica en EPA/DHA con salmón salvaje, quinoa baja en alergenos, arándanos antioxidantes y aceite de cáñamo para calmar el picor y dolor articular.',
    badge: 'Movilidad Articular y Piel',
    targetAudience: 'Perros Adultos y Senior // Rigidez Articular y Piel Pruriginosa',
    colorTheme: '#06b6d4',
    macroProfile: {
      proteinDm: '44.0%',
      fatDm: '25.5%',
      carbsDm: '18.5%',
      moisture: '73.0%',
      kcalPerKg: '1,260 kcal/kg (aprox. 35.7 kcal/oz)',
      caPhosphorusRatio: '1.28 : 1.0 (Conforme a NRC)',
    },
    ingredients: [
      {
        name: 'Salmón Salvaje de Alaska y Pescado Blanco',
        percentage: 60,
        category: 'Pescado Marino Principal',
        role: 'EPA y DHA marinos directos y colágeno para el líquido sinovial',
        clinicalBenefit: 'Inhibe la inflamación COX-2 en articulaciones artrósicas y calma la piel.',
        color: '#06b6d4',
      },
      {
        name: 'Corazones y Mollejas de Pavo',
        percentage: 8,
        category: 'Órganos Ricos en Taurina',
        role: 'Aporta taurina natural indispensable para el corazón',
        clinicalBenefit: 'Garantiza la salud cardíaca mientras se cuidan las articulaciones.',
        color: '#7928ca',
      },
      {
        name: 'Quinoa Orgánica Cocida',
        percentage: 12,
        category: 'Semilla Pseudocereal Hipoalergénica',
        role: 'Perfil completo de 9 aminoácidos sin gluten ni antígenos',
        clinicalBenefit: 'Fácil de digerir en intestinos reactivos con aporte de magnesio.',
        color: '#f5a623',
        affiliateKey: 'quinoa',
      },
      {
        name: 'Arándanos, Col Kale y Calabacín al Vapor',
        percentage: 10,
        category: 'Antioxidantes de Alta Potencia ORAC',
        role: 'Bioflavonoides y luteína para proteger el cartílago articular',
        clinicalBenefit: 'Protege el cartílago y favorece la agilidad cognitiva en perros mayores.',
        color: '#10b981',
      },
      {
        name: 'Aceite de Cáñamo Prensado en Frío y Mejillón de Labio Verde',
        percentage: 6,
        category: 'GLA y Glicosaminoglicanos',
        role: 'Ácido gamma-linolénico (GLA) y condroitina para lubricar la articulación',
        clinicalBenefit: 'Alivia la rigidez matutina y el picor en la piel. Añadir en frío.',
        color: '#0070f3',
      },
      {
        name: 'Calcio Marino de Algas y Kelp',
        percentage: 4,
        category: 'Calcio Iónico Vegetal Marino',
        role: 'Algas rojas calcificadas con 72 minerales traza biodisponibles',
        clinicalBenefit: 'Mucho más suave para el estómago que los suplementos químicos.',
        color: '#e11d48',
        affiliateKey: 'kelp',
      },
    ],
    executiveSummary:
      'Una formulación clínica antiinflamatoria diseñada para perros con rigidez articular, artrosis, alergias en la piel o picor crónico. Las altas dosis de EPA/DHA del salmón salvaje junto al mejillón de labio verde y aceite de cáñamo lubrican las articulaciones y restauran la barrera dérmica.',
    clinicalRationale: [
      {
        title: '1. La Cascada de EPA y DHA para Articulaciones y Piel',
        description:
          'El EPA y DHA desplazan al ácido araquidónico inflamatorio en las membranas celulares, reduciendo drásticamente el dolor articular y el enrojecimiento de la piel.',
        points: [
          'El omega-3 marino es 10 veces más asimilable que el lino vegetal.',
          'Lubrica el líquido sinovial y amortigua el cartílago.',
          'Alivia la dermatitis atópica de forma natural sin corticoides.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Pochado de Pescado',
        instruction: 'Cocina el salmón, el pescado blanco y los corazones de pavo en 1 taza de agua a fuego lento durante 7-8 minutos. Desmenuza con cuidado revisando espinas.',
      },
      {
        step: 2,
        title: 'Cocinar la Quinoa',
        instruction: 'Enjuaga bien la quinoa para eliminar saponinas amargas. Hierve en el doble de agua durante 15 minutos hasta que esté tierna y deja enfriar.',
      },
      {
        step: 3,
        title: 'Cocer Arándanos y Verduras',
        instruction: 'Cuece el kale y calabacín al vapor durante 4 min. Añade los arándanos frescos y tritura todo en un puré grueso.',
      },
      {
        step: 4,
        title: 'Enfriamiento Obligatorio',
        instruction: 'Mezcla todos los ingredientes cocidos. Deja enfriar completamente por debajo de 38°C antes de añadir los aceites y polvos.',
        criticalTip: 'Nunca añadas el aceite de salmón o cáñamo a la comida caliente; el calor oxida de inmediato los lípidos marinos.',
      },
      {
        step: 5,
        title: 'Mezclar Aceites y Calcio en Frío',
        instruction: 'Añade el calcio de algas, kelp, aceite de cáñamo y polvo de mejillón verde en frío. Mezcla homogéneamente durante 2 minutos.',
      },
      {
        step: 6,
        title: 'Pesar y Congelar',
        instruction: 'Pesa las porciones diarias con báscula digital. Guarda las raciones de 2-3 días en nevera y congela el resto.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Refrigeración',
        duration: '3 Días Máx',
        instructions: 'El pescado se altera más rápido que las aves; consumir en un máximo de 72 horas.',
      },
      {
        method: 'Congelación',
        duration: 'Hasta 60 Días',
        instructions: 'Congelar al vacío para proteger los lípidos marinos de la oxidación.',
      },
      {
        method: 'Descongelación',
        duration: 'En Frío',
        instructions: 'Descongelar en la nevera. No usar microondas a alta potencia.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '300 – 340 kcal', dailyGramsTotal: '235 g / día', mainProtein: '141 g', organMeat: '19 g', produceAndCarbs: '52 g', supplements: '23 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '600 – 680 kcal', dailyGramsTotal: '470 g / día', mainProtein: '282 g', organMeat: '38 g', produceAndCarbs: '103 g', supplements: '47 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1,040 – 1,180 kcal', dailyGramsTotal: '830 g / día', mainProtein: '498 g', organMeat: '66 g', produceAndCarbs: '183 g', supplements: '83 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,450 – 1,620 kcal', dailyGramsTotal: '1,150 g / día', mainProtein: '690 g', organMeat: '92 g', produceAndCarbs: '253 g', supplements: '115 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NO alimentar con salmón salvaje crudo sin cocinar (riesgo de intoxicación por el parásito Neorickettsia helminthoeca). La cocción elimina totalmente este riesgo.',
      ],
      transitionSteps: [
        'Días 1–3: 25% nueva / 75% habitual',
        'Días 4–6: 50% nueva / 50% habitual',
        'Días 7–9: 75% nueva / 25% habitual',
        'Día 10+: 100% nueva receta',
      ],
      calciumRule: 'El calcio marino de algas debe pesarse con exactitud para mantener el ratio Ca:P.',
    },
    faq: [
      {
        question: '¿Se puede usar salmón en lata?',
        answer: 'Solo salmón salvaje al natural en agua SIN sal añadida. Siempre es preferible el salmón fresco o congelado.',
      },
    ],
  },

  // 4. LAMB & CRANBERRY BLUEPRINT
  {
    slug: 'lamb-cranberry-gentle-gut',
    name: 'Blueprint de Cordero de Pasto y Arándanos Rojos Hipoalergénico Digestivo',
    shortDesc: 'Una fórmula de carne novedosa 64/8/12/8/5/3 con cordero magro, vísceras, calabaza cacahuete calmante y arándanos para perros con alergias severas al pollo o vacuno.',
    badge: 'Hipoalergénico Digestivo y Urinario',
    targetAudience: 'Perros con Alergias Severas al Pollo/Ternera y Digestión Crónica Sensible',
    colorTheme: '#10b981',
    macroProfile: {
      proteinDm: '45.8%',
      fatDm: '26.2%',
      carbsDm: '16.0%',
      moisture: '72.0%',
      kcalPerKg: '1,310 kcal/kg (aprox. 37.1 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (Conforme a NRC)',
    },
    ingredients: [
      {
        name: 'Carne Picada de Cordero de Pasto Magra',
        percentage: 64,
        category: 'Carne Roja Novedosa',
        role: 'L-carnitina, zinc y perfil antigénico novedoso para dietas de descarte',
        clinicalBenefit: 'Evita reacciones inmunitarias al pollo o ternera en perros alérgicos.',
        color: '#10b981',
      },
      {
        name: 'Hígado y Riñones de Cordero',
        percentage: 8,
        category: 'Vísceras Densas en Nutrientes',
        role: 'Selenio, cobre, vitamina A y folatos de metilación',
        clinicalBenefit: 'Protege las células y fortalece la inmunidad intestinal.',
        color: '#7928ca',
      },
      {
        name: 'Calabaza Butternut y Arándanos Rojos Puros',
        percentage: 12,
        category: 'Pectina Digestiva y PACs Urinarios',
        role: 'Proantocianidinas para la salud urinaria y pectina para el colon',
        clinicalBenefit: 'Regula las heces blandas y previene infecciones urinarias.',
        color: '#f5a623',
      },
      {
        name: 'Judías Verdes y Perejil al Vapor',
        percentage: 8,
        category: 'Clorofila Digestiva y Fibra Suave',
        role: 'Fibra suave y apigenina para calmar espasmos intestinales',
        clinicalBenefit: 'Reduce los gases y favorece un aliento fresco natural.',
        color: '#0070f3',
      },
      {
        name: 'Calcio de Cáscara de Huevo y Kelp',
        percentage: 5,
        category: 'Calcio y Yodo Esencial',
        role: 'Carbonato de calcio calibrado para equilibrar el cordero a 1.25:1',
        clinicalBenefit: 'Mineralización ósea sin irritación estomacal.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Aceite de Salmón Salvaje de Alaska',
        percentage: 3,
        category: 'Omega-3 Marino',
        role: 'EPA/DHA para calmar la mucosa intestinal y el picor',
        clinicalBenefit: 'Protege la barrera intestinal. Añadir siempre en frío.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'Una fórmula hipoalergénica dirigida a perros con heces blandas crónicas, intolerancia al pollo o vacuno, gases o irritaciones urinarias. El cordero de pasto ofrece una proteína limpia novedosa, mientras que la calabaza y los arándanos protegen el intestino y las vías urinarias.',
    clinicalRationale: [
      {
        title: '1. ¿Por qué Cordero de Pasto para Alergias Crónicas?',
        description:
          'El pollo y la ternera causan la mayoría de alergias caninas. El cordero de pasto no presenta reactividad cruzada y es sumamente digerible.',
        points: [
          'Elimina los alérgenos más comunes de la dieta comercial.',
          'L-carnitina para el corazón y metabolismo de grasas.',
          'Excelente palatabilidad para perros inapetentes.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Corte de Órganos y Cordero',
        instruction: 'Pica el hígado y los riñones de cordero en dados pequeños de unos 0,5 cm.',
      },
      {
        step: 2,
        title: 'Cocción Lenta',
        instruction: 'Cocina a fuego lento la carne picada y los órganos con 1/2 taza de agua durante 8-10 minutos. Retira el exceso de grasa superficial.',
      },
      {
        step: 3,
        title: 'Cocer Calabaza y Arándanos',
        instruction: 'Cuece al vapor la calabaza butternut, judías y arándanos frescos (6-8 min) y tritura en un puré suave.',
      },
      {
        step: 4,
        title: 'Enfriamiento Total (<38°C)',
        instruction: 'Combina el puré con el cordero cocido y deja enfriar por completo a temperatura ambiente.',
      },
      {
        step: 5,
        title: 'Mezcla de Suplementos en Frío',
        instruction: 'Añade el polvo de calcio, kelp y aceite de salmón frío removiendo bien durante 2 minutos.',
      },
      {
        step: 6,
        title: 'Pesar Raciones',
        instruction: 'Pesa las porciones con báscula digital. Guarda en nevera 2-3 días o congela en recipientes herméticos.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Refrigeración',
        duration: '3-4 Días Máx',
        instructions: 'Recipiente hermético de cristal a menos de 3°C.',
      },
      {
        method: 'Congelación',
        duration: 'Hasta 90 Días',
        instructions: 'Porciones individuales selladas al vacío.',
      },
      {
        method: 'Servicio',
        duration: 'Templado Suave',
        instructions: 'Templar al baño maría a temperatura ambiente antes de servir.',
      },
    ],
    portionReference: [
      { dogWeight: '4.5 kg / 10 lbs', dailyKcal: '305 – 345 kcal', dailyGramsTotal: '230 g / día', mainProtein: '147 g', organMeat: '18 g', produceAndCarbs: '46 g', supplements: '19 g' },
      { dogWeight: '11.3 kg / 25 lbs', dailyKcal: '610 – 700 kcal', dailyGramsTotal: '460 g / día', mainProtein: '294 g', organMeat: '37 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '22.7 kg / 50 lbs', dailyKcal: '1,060 – 1,200 kcal', dailyGramsTotal: '820 g / día', mainProtein: '525 g', organMeat: '66 g', produceAndCarbs: '164 g', supplements: '65 g' },
      { dogWeight: '34 kg / 75 lbs', dailyKcal: '1,480 – 1,650 kcal', dailyGramsTotal: '1,130 g / día', mainProtein: '723 g', organMeat: '90 g', produceAndCarbs: '226 g', supplements: '91 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'NO uses arándanos deshidratados azucarados ni zumos concentrados; utiliza únicamente arándanos rojos frescos o congelados puros sin aditivos.',
      ],
      transitionSteps: [
        'Días 1–3: 25% nueva / 75% habitual',
        'Días 4–6: 50% nueva / 50% habitual',
        'Días 7–9: 75% nueva / 25% habitual',
        'Día 10+: 100% nueva receta',
      ],
      calciumRule: 'Asegura siempre la dosis completa de calcio para prevenir la desmineralización ósea.',
    },
    faq: [
      {
        question: '¿Son seguros los arándanos rojos para perros?',
        answer: 'Sí, son totalmente seguros en su forma cocinada y pura. Son excelentes para la vejiga y las vías urinarias.',
      },
    ],
  },
];
