import type { Lang } from './ui';

export interface SummaryParams {
  dogName: string;
  breed?: string;
  merKcal: number;
  goal?: string;
  mealsPerDay: number;
  perMealGrams: number;
}

export interface InsightParams {
  name: string;
  ageStage: string;
  goal?: string;
  bcs: number;
  activity?: string;
  health?: string;
  breed?: string;
  merKcal: number;
}

export function getLocalizedSummary(params: SummaryParams, lang: Lang): string {
  const { dogName, breed, merKcal, goal, mealsPerDay, perMealGrams } = params;
  const isNamedBreed = breed && !breed.toLowerCase().includes('unknown') && !breed.toLowerCase().includes('mixed');
  const breedText = isNamedBreed ? ` (${breed})` : '';
  const kcalFormatted = merKcal.toLocaleString(lang);

  switch (lang) {
    case 'es': {
      const goalText = goal === 'lose' ? ' para perder peso' : goal === 'gain' ? ' para ganar peso' : '';
      const plural = mealsPerDay > 1 ? 's' : '';
      return `${dogName}${breedText} necesita ${kcalFormatted} kcal/día${goalText}. Dale ${mealsPerDay} comida${plural} de ${perMealGrams}g cada una. Pesa siempre con una báscula de cocina.`;
    }
    case 'fr': {
      const goalText = goal === 'lose' ? ' pour perdre du poids' : goal === 'gain' ? ' pour prendre du poids' : '';
      return `${dogName}${breedText} a besoin de ${kcalFormatted} kcal/jour${goalText}. Donnez ${mealsPerDay} repas de ${perMealGrams}g chacun. Pesez toujours avec une balance de cuisine.`;
    }
    case 'de': {
      const goalText = goal === 'lose' ? ' zur Gewichtsabnahme' : goal === 'gain' ? ' zur Gewichtszunahme' : '';
      const plural = mealsPerDay > 1 ? 'en' : '';
      return `${dogName}${breedText} benötigt ${kcalFormatted} kcal/Tag${goalText}. Füttern Sie ${mealsPerDay} Mahlzeit${plural} zu je ${perMealGrams}g. Immer mit einer Küchenwaage abwiegen.`;
    }
    case 'it': {
      const goalText = goal === 'lose' ? ' per perdere peso' : goal === 'gain' ? ' per aumentare di peso' : '';
      const plural = mealsPerDay > 1 ? 'i' : 'o';
      return `${dogName}${breedText} ha bisogno di ${kcalFormatted} kcal/giorno${goalText}. Somministra ${mealsPerDay} past${plural} da ${perMealGrams}g ciascuno. Pesa sempre con una bilancia da cucina.`;
    }
    case 'pt': {
      const goalText = goal === 'lose' ? ' para perder peso' : goal === 'gain' ? ' para ganhar peso' : '';
      const plural = mealsPerDay > 1 ? 'ões' : 'ão';
      return `${dogName}${breedText} precisa de ${kcalFormatted} kcal/dia${goalText}. Ofereça ${mealsPerDay} refeiç${plural} de ${perMealGrams}g cada. Pese sempre com uma balança de cozinha.`;
    }
    case 'ja': {
      const goalText = goal === 'lose' ? '（減量管理）' : goal === 'gain' ? '（増量管理）' : '';
      return `${dogName}${breedText}の推奨摂取エネルギーは1日あたり${kcalFormatted} kcalです${goalText}。1回${perMealGrams}gを1日${mealsPerDay}回に分けて給餌してください。必ずキッチンスケールで正確に計量してください。`;
    }
    case 'ko': {
      const goalText = goal === 'lose' ? ' (체중 감량)' : goal === 'gain' ? ' (체중 증량)' : '';
      return `${dogName}${breedText}의 하루 권장 에너지는 ${kcalFormatted} kcal입니다${goalText}. 1회당 ${perMealGrams}g씩 하루 ${mealsPerDay}회 급여하세요. 항상 주방 저울로 정확히 계량하세요.`;
    }
    case 'en':
    default: {
      const goalText = goal === 'lose' ? ' to lose weight' : goal === 'gain' ? ' to gain weight' : '';
      const plural = mealsPerDay > 1 ? 's' : '';
      return `${dogName}${breedText} needs ${kcalFormatted} kcal/day${goalText}. Feed ${mealsPerDay} meal${plural} of ${perMealGrams}g each. Always weigh with a kitchen scale.`;
    }
  }
}

export function getMealsLabel(mealsPerDay: number, lang: Lang): string {
  switch (lang) {
    case 'es': return `${mealsPerDay} veces/día`;
    case 'fr': return `${mealsPerDay}x/jour`;
    case 'de': return `${mealsPerDay}x/Tag`;
    case 'it': return `${mealsPerDay} volte/giorno`;
    case 'pt': return `${mealsPerDay}x/dia`;
    case 'ja': return `1日${mealsPerDay}回`;
    case 'ko': return `하루 ${mealsPerDay}회`;
    case 'en':
    default: return `${mealsPerDay}x/day`;
  }
}

export function getBuyBtnText(lang: Lang): string {
  switch (lang) {
    case 'es': return 'Comprar →';
    case 'fr': return 'Acheter →';
    case 'de': return 'Kaufen →';
    case 'it': return 'Acquista →';
    case 'pt': return 'Comprar →';
    case 'ja': return '購入 →';
    case 'ko': return '구매하기 →';
    case 'en':
    default: return 'Buy →';
  }
}

export function getDietTagName(diet: string, lang: Lang): string {
  const map: Record<Lang, Record<string, string>> = {
    en: {
      'fresh-cooked': 'GENTLY COOKED FRESH',
      'raw-barf': 'RAW BARF PREY MODEL',
      'superfood-topper': 'SUPERFOOD TOPPER',
    },
    es: {
      'fresh-cooked': 'COMIDA FRESCA COCINADA',
      'raw-barf': 'DIETA CRUDA BARF',
      'superfood-topper': 'TOPPER SUPERFOOD',
    },
    fr: {
      'fresh-cooked': 'PLATS FRAIS CUISINÉS',
      'raw-barf': 'ALIMENTATION CRUE BARF',
      'superfood-topper': 'TOPPER SUPER-ALIMENTS',
    },
    de: {
      'fresh-cooked': 'SCHONEND GEKOCHTES FRISCHFUTTER',
      'raw-barf': 'ROHFÜTTERUNG BARF',
      'superfood-topper': 'SUPERFOOD-TOPPER',
    },
    it: {
      'fresh-cooked': 'CIBO FRESCO COTTO A FUOCO LENTO',
      'raw-barf': 'DIETA CRUDA BARF',
      'superfood-topper': 'TOPPER SUPERFOOD',
    },
    pt: {
      'fresh-cooked': 'COMIDA FRESCA COZIDA',
      'raw-barf': 'ALIMENTAÇÃO CRUA BARF',
      'superfood-topper': 'TOPPER SUPERFOOD',
    },
    ja: {
      'fresh-cooked': '手作り加熱自然食',
      'raw-barf': '生食・BARFモデル',
      'superfood-topper': 'スーパーフードトッピング',
    },
    ko: {
      'fresh-cooked': '자연식 안심 화식',
      'raw-barf': '생식 BARF 모델',
      'superfood-topper': '슈퍼푸드 영양 토퍼',
    },
  };
  return map[lang]?.[diet] || diet.replace(/-/g, ' ').toUpperCase();
}

export function getLocalizedSchedule(dailySchedule: any[], lang: Lang): any[] {
  const slotNamesMap: Record<Lang, { morning: string; midday: string; evening: string; cups: (c: number) => string }> = {
    en: {
      morning: 'Morning Meal',
      midday: 'Midday Meal',
      evening: 'Evening Meal',
      cups: (c) => `≈ ${c} cups`,
    },
    es: {
      morning: 'Comida de la Mañana',
      midday: 'Comida del Mediodía',
      evening: 'Comida de la Tarde',
      cups: (c) => `≈ ${c} tazas`,
    },
    fr: {
      morning: 'Repas du Matin',
      midday: 'Repas du Midi',
      evening: 'Repas du Soir',
      cups: (c) => `≈ ${c} tasses`,
    },
    de: {
      morning: 'Mahlzeit am Morgen',
      midday: 'Mahlzeit am Mittag',
      evening: 'Mahlzeit am Abend',
      cups: (c) => `≈ ${c} Tassen`,
    },
    it: {
      morning: 'Pasto del Mattino',
      midday: 'Pasto di Mezzogiorno',
      evening: 'Pasto della Sera',
      cups: (c) => `≈ ${c} tazze`,
    },
    pt: {
      morning: 'Refeição da Manhã',
      midday: 'Refeição do Meio-Dia',
      evening: 'Refeição da Noite',
      cups: (c) => `≈ ${c} xícaras`,
    },
    ja: {
      morning: '朝の食事',
      midday: '昼の食事',
      evening: '夜の食事',
      cups: (c) => `≈ 約${c}カップ`,
    },
    ko: {
      morning: '아침 식사',
      midday: '점심 식사',
      evening: '저녁 식사',
      cups: (c) => `≈ 약 ${c}컵`,
    },
  };

  const loc = slotNamesMap[lang] || slotNamesMap.en;

  return dailySchedule.map((slot) => {
    let slotName = slot.slotName;
    if (slot.slotName.includes('Morning')) slotName = loc.morning;
    else if (slot.slotName.includes('Midday')) slotName = loc.midday;
    else if (slot.slotName.includes('Evening')) slotName = loc.evening;

    return {
      ...slot,
      slotName,
      cupsText: loc.cups(slot.portionCups),
    };
  });
}

export function getLocalizedInsight(params: InsightParams, lang: Lang): string {
  const { name, ageStage, goal, bcs, activity, health = '', breed = '', merKcal } = params;
  const kcalStr = merKcal.toLocaleString(lang);

  // Helper matching keys
  const isPuppyEarly = ageStage === 'puppy-early';
  const isPuppyLate = ageStage === 'puppy-late';
  const isSenior = ageStage === 'senior';
  const isOverweight = goal === 'lose' || bcs >= 7;
  const isUnderweight = goal === 'gain' || bcs <= 3;
  const isWorking = activity === 'working';
  const isSedentary = activity === 'sedentary';
  const isJoint = health.includes('Joint') || health.includes('Hip');
  const isSkin = health.includes('Skin') || health.includes('Coat');
  const isDigest = health.includes('Digest') || health.includes('Gut');
  const isWeight = health.includes('Weight');
  const isBrachy = breed.includes('Bulldog') || breed.includes('Pug') || breed.includes('French');
  const isObesityProne = breed.includes('Labrador') || breed.includes('Beagle');
  const isHighDrive = breed.includes('Husky') || breed.includes('Border Collie') || breed.includes('Australian');

  switch (lang) {
    case 'es': {
      if (isPuppyEarly) return `${name} está en fase de crecimiento rápido: aliméntale 3 veces al día y prioriza el equilibrio calcio-fósforo (1.2:1) para favorecer el desarrollo óseo.`;
      if (isPuppyLate) return `${name} está pasando a su tamaño adulto: reduce a 2 comidas al día y empieza a ajustar calorías a medida que el crecimiento se ralentiza.`;
      if (isSenior) return `${name} en etapa senior necesita un 20% menos de calorías que un adulto: prioriza omega-3 para las articulaciones y proteínas fáciles de digerir.`;
      if (isOverweight) return `${name} tiene sobrepeso (BCS ${bcs}/9): reduce la porción un 10–15% y añade 1–2 cucharadas de calabaza pura por comida para aumentar la saciedad sin sumar calorías.`;
      if (isUnderweight) return `${name} tiene bajo peso (BCS ${bcs}/9): aumenta la porción diaria un 10% y añade una yema de huevo o 1 cucharadita de aceite de salmón por comida para aportar nutrientes calóricos de calidad.`;
      if (isWorking) return `${name} es un perro de trabajo: este plan calcula a 2.5–3× RER. Pesa la comida a diario y ajusta un ±10% según su condición corporal cada 2 semanas.`;
      if (isSedentary) return `${name} tiene un estilo de vida sedentario: este plan utiliza un multiplicador de 1.2× RER. Evita dejar comida libre; retira el cuenco tras 15 minutos para evitar sobrealimentación.`;
      if (isJoint) return `Para cuidar las articulaciones de ${name}, añade 1 cdta diaria de aceite de salmón (EPA/DHA) y valora polvo de mejillón de labio verde; ambos reducen la inflamación articular comprobada.`;
      if (isSkin) return `Para la piel y pelaje de ${name}, añade 1 cdta diaria de aceite de salmón salvaje por cada 9 kg de peso: la mejoría del manto suele verse en 3–4 semanas.`;
      if (isDigest) return `Para la digestión sensible de ${name}, añade 1–2 cdas de puré de calabaza simple por comida e introduce nuevas proteínas de una en una durante 7 días.`;
      if (isWeight) return `Para el control de peso de ${name}, pesa cada comida con báscula de cocina: calcular a ojo suele provocar entre un 20% y 30% de sobrealimentación.`;
      if (isBrachy) return `La anatomía braquicefálica de ${name} dificulta su deglución: usa un comedero antivoracidad y evita el ejercicio durante 30 minutos tras comer para prevenir dilatación gástrica.`;
      if (isObesityProne) return `La raza de ${name} tiene gran apetito y tendencia a engordar: respeta estrictamente esta porción y evita por completo las sobras de comida casera.`;
      if (isHighDrive) return `${name} es una raza de alta energía: los días de descanso reduce esta porción un 10% y los días de gran actividad auméntala un 10%.`;
      return `El plan de ${name} está calibrado a ${kcalStr} kcal/día. Pesa cada comida con una báscula de cocina: medir por tazas puede variar hasta un 30% según la densidad del alimento.`;
    }

    case 'fr': {
      if (isPuppyEarly) return `${name} est en phase de croissance rapide : nourrissez 3 fois par jour et privilégiez l'équilibre calcium/phosphore (1,2:1) pour soutenir le développement osseux.`;
      if (isPuppyLate) return `${name} fait la transition vers sa taille adulte : passez à 2 repas par jour et réduisez progressivement les calories à mesure que la croissance ralentit.`;
      if (isSenior) return `En phase senior, ${name} a besoin de 20 % de calories en moins qu'un adulte : privilégiez les oméga-3 pour les articulations et des protéines très digestes.`;
      if (isOverweight) return `${name} est en surpoids (BCS ${bcs}/9) : réduisez la portion de 10 à 15 % et ajoutez 1 à 2 c. à soupe de purée de citrouille pure par repas pour caler la faim sans surplus calorique.`;
      if (isUnderweight) return `${name} est en sous-poids (BCS ${bcs}/9) : augmentez la ration de 10 % et ajoutez un jaune d'œuf ou 1 c. à café d'huile de saumon par repas pour une densité nutritionnelle saine.`;
      if (isWorking) return `${name} est un chien de travail actif : ce plan est calibré à 2,5–3× le RER. Pesez chaque jour et réajustez de ±10 % toutes les 2 semaines selon sa silhouette.`;
      if (isSedentary) return `${name} est sédentaire : ce plan applique un coefficient de 1,2× le RER. Évitez l'alimentation à volonté ; retirez la gamelle après 15 minutes pour éviter les excès.`;
      if (isJoint) return `Pour les articulations de ${name}, ajoutez 1 c. à café d'huile de saumon par jour (EPA/DHA) et pensez à la moule verte, réputées pour soulager l'inflammation articulaire.`;
      if (isSkin) return `Pour la peau et le pelage de ${name}, ajoutez 1 c. à café d'huile de saumon sauvage par 10 kg de poids par jour : un pelage plus brillant apparaît en 3 à 4 semaines.`;
      if (isDigest) return `Pour la digestion délicate de ${name}, ajoutez 1 à 2 c. à soupe de purée de citrouille pure par repas et introduisez les nouvelles protéines une par une sur 7 jours.`;
      if (isWeight) return `Pour la gestion du poids de ${name}, pesez chaque repas avec une balance de cuisine : l'estimation visuelle entraîne 20 à 30 % de suralimentation dans la plupart des foyers.`;
      if (isBrachy) return `L'anatomie brachycéphale de ${name} ralentit la prise alimentaire : utilisez une gamelle anti-glouton et évitez l'exercice pendant 30 minutes après le repas pour prévenir les ballonnements.`;
      if (isObesityProne) return `La race de ${name} est très gourmande et sujette à l'obésité : tenez-vous rigoureusement à cette portion et bannissez absolument les restes de table.`;
      if (isHighDrive) return `${name} est une race dynamique et sportive : les jours de repos, réduisez cette portion de 10 % ; les jours très actifs, augmentez-la de 10 %.`;
      return `Le plan de ${name} est calibré à ${kcalStr} kcal/jour. Pesez chaque repas avec une balance de cuisine : les mesures en tasses varient jusqu'à 30 % selon la densité des aliments.`;
    }

    case 'de': {
      if (isPuppyEarly) return `${name} befindet sich in der schnellen Wachstumsphase — 3-mal täglich füttern und auf ein ausgewogenes Calcium-Phosphor-Verhältnis (1,2:1) für den Knochenaufbau achten.`;
      if (isPuppyLate) return `${name} nähert sich der Erwachsenengröße — auf 2 Mahlzeiten täglich reduzieren und die Kalorienzufuhr langsam anpassen, da sich das Wachstum verlangsamt.`;
      if (isSenior) return `Im Seniorenalter benötigt ${name} etwa 20 % weniger Kalorien als ein adulter Hund — Gelenke mit Omega-3-Fettsäuren und leicht verdaulichen Proteinen unterstützen.`;
      if (isOverweight) return `${name} hat Übergewicht (BCS ${bcs}/9) — Portion um 10–15 % reduzieren und 1–2 EL reines Kürbispüree pro Mahlzeit für Sättigung ohne zusätzliche Kalorien ergänzen.`;
      if (isUnderweight) return `${name} ist untergewichtig (BCS ${bcs}/9) — Tagesration um 10 % erhöhen und pro Mahlzeit ein rohes Eigelb oder 1 TL Lachsöl für nährstoffdichte Kalorien beigeben.`;
      if (isWorking) return `${name} ist ein Arbeitshund — dieser Plan basiert auf dem 2,5–3-fachen RER. Futter täglich abwiegen und alle 2 Wochen je nach Körperzustand um ±10 % anpassen.`;
      if (isSedentary) return `${name} ist eher ruhig/inaktiv — dieser Plan nutzt einen 1,2× RER-Faktor. Keine ständige Futterverfügbarkeit; Napf nach 15 Minuten abräumen, um Überfressen zu vermeiden.`;
      if (isJoint) return `Zur Unterstützung der Gelenke von ${name} täglich 1 TL Lachsöl (EPA/DHA) und Grünlippmuschelpulver zufüttern — beides hemmt Gelenkentzündungen nachweislich.`;
      if (isSkin) return `Für Haut und Fell von ${name} täglich 1 TL Wildlachsöl pro 10 kg Körpergewicht zugeben — sichtbare Verbesserungen zeigen sich meist innerhalb von 3–4 Wochen.`;
      if (isDigest) return `Für die empfindliche Verdauung von ${name} 1–2 EL reines Kürbispüree pro Mahlzeit geben und neue Proteine langsam über 7 Tage einzeln einführen.`;
      if (isWeight) return `Für das Gewichtsmanagement von ${name} jede Mahlzeit auf der Küchenwaage abwiegen — das Schätzen nach Augenmaß führt in vielen Haushalten zu 20–30 % Überfütterung.`;
      if (isBrachy) return `Die brachycephale Anatomie von ${name} erfordert ruhiges Fressen — einen Anti-Schling-Napf nutzen und 30 Minuten nach dem Fressen Bewegung vermeiden, um Magendrehungen vorzubeugen.`;
      if (isObesityProne) return `Die Rasse von ${name} ist extrem futterbezogen und neigt zu Übergewicht — halten Sie sich strikt an diese Portion und vermeiden Sie Essensreste vom Tisch.`;
      if (isHighDrive) return `${name} ist eine temperamentvolle Rasse mit hohem Tatendrang — an Ruhetagen die Portion um 10 % senken, an sehr aktiven Tagen um 10 % steigern.`;
      return `Der Plan für ${name} ist auf ${kcalStr} kcal/Tag kalibriert. Jede Mahlzeit mit einer Küchenwaage wiegen — Tassenmaße weichen je nach Futterdichte um bis zu 30 % ab.`;
    }

    case 'it': {
      if (isPuppyEarly) return `${name} è in una fase di rapida crescita: somministra 3 pasti al giorno e dai priorità all'equilibrio calcio-fosforo (1,2:1) per sostenere lo sviluppo osseo.`;
      if (isPuppyLate) return `${name} sta raggiungendo la taglia adulta: riduci a 2 pasti al giorno e inizia a ridurre le calorie man mano che la crescita rallenta.`;
      if (isSenior) return `${name} anziano necessita del 20% di calorie in meno rispetto a un adulto: dai priorità agli omega-3 a supporto delle articolazioni e a proteine altamente digeribili.`;
      if (isOverweight) return `${name} è in sovrappeso (BCS ${bcs}/9): riduci la porzione del 10–15% e aggiungi 1–2 cucchiai di zucca pura a ogni pasto per aumentare il senso di sazietà senza calorie extra.`;
      if (isUnderweight) return `${name} è sottopeso (BCS ${bcs}/9): aumenta la razione giornaliera del 10% e aggiungi un tuorlo d'uovo o 1 cucchiaino di olio di salmone a pasto per calorie dense e nutrienti.`;
      if (isWorking) return `${name} è un cane da lavoro: questo piano è calibrato a 2,5–3× RER. Pesa il cibo ogni giorno; regola di ±10% in base alla condizione corporea ogni 2 settimane.`;
      if (isSedentary) return `${name} è sedentario: questo piano adotta un moltiplicatore di 1,2× RER. Evita il cibo a libera disposizione; ritira la ciotola dopo 15 minuti per prevenire eccessi.`;
      if (isJoint) return `Per la salute articolare di ${name}, aggiungi 1 cucchiaino di olio di salmone al giorno (EPA/DHA) e valuta la cozza verde; entrambi riducono l'infiammazione delle articolazioni.`;
      if (isSkin) return `Per la cute e il pelo di ${name}, aggiungi 1 cucchiaino di olio di salmone selvatico ogni 10 kg di peso al giorno: miglioramenti evidenti compaiono in 3–4 settimane.`;
      if (isDigest) return `Per la digestione sensibile di ${name}, aggiungi 1–2 cucchiai di purea di zucca naturale per pasto e introduci le nuove proteine una alla volta nell'arco di 7 giorni.`;
      if (isWeight) return `Per il controllo del peso di ${name}, pesa ogni pasto sulla bilancia da cucina: stimare a occhio causa dal 20 al 30% di sovralimentazione nella maggior parte dei casi.`;
      if (isBrachy) return `L'anatomia brachicefala di ${name} rallenta l'alimentazione: usa una ciotola anti-ingozzamento ed evita l'attività fisica per 30 minuti dopo i pasti per prevenire la torsione gastrica.`;
      if (isObesityProne) return `La razza di ${name} è molto motivata dal cibo e incline all'obesità: rispetta scrupolosamente questa porzione ed evita categoricamente gli avanzi di tavola.`;
      if (isHighDrive) return `${name} è una razza ad alta energia e reattività: nei giorni di riposo riduci la porzione del 10%; nei giorni di intensa attività aumentala del 10%.`;
      return `Il piano di ${name} è calibrato su ${kcalStr} kcal/giorno. Pesa ogni pasto su una bilancia da cucina: le misure in tazze possono variare fino al 30% in base alla densità del cibo.`;
    }

    case 'pt': {
      if (isPuppyEarly) return `${name} está em fase de crescimento rápido: alimente 3 vezes ao dia e priorize o equilíbrio cálcio-fósforo (1,2:1) para apoiar o desenvolvimento ósseo.`;
      if (isPuppyLate) return `${name} está na transição para o porte adulto: reduza para 2 refeições diárias e comece a ajustar calorias conforme o crescimento diminui o ritmo.`;
      if (isSenior) return `${name} sênior necessita de 20% menos calorias que um adulto: priorize ômega-3 para as articulações e proteínas de fácil digestão.`;
      if (isOverweight) return `${name} está com sobrepeso (BCS ${bcs}/9): reduza a porção em 10–15% e adicione 1–2 colheres de sopa de abóbora pura por refeição para saciedade sem calorias extras.`;
      if (isUnderweight) return `${name} está abaixo do peso ideal (BCS ${bcs}/9): aumente a porção diária em 10% e adicione uma gema de ovo ou 1 colher de chá de óleo de salmão por refeição para nutrição calórica densa.`;
      if (isWorking) return `${name} é um cão de trabalho/atleta: este plano opera a 2,5–3× RER. Pese a comida diariamente; ajuste em ±10% a cada 2 semanas com base na condição corporal.`;
      if (isSedentary) return `${name} tem rotina sedentária: este plano utiliza o multiplicador de 1,2× RER. Evite alimentação à vontade; retire a tigela após 15 minutos para evitar excessos.`;
      if (isJoint) return `Para as articulações de ${name}, adicione 1 colher de chá de óleo de salmão ao dia (EPA/DHA) e mexilhão-verde; ambos comprovadamente reduzem a inflamação articular.`;
      if (isSkin) return `Para a pele e pelagem de ${name}, adicione 1 colher de chá de óleo de salmão selvagem a cada 10 kg de peso diariamente: melhorias visíveis surgem em 3–4 semanas.`;
      if (isDigest) return `Para a digestão sensível de ${name}, adicione 1–2 colheres de sopa de purê de abóbora pura por refeição e introduza novas proteínas uma de cada vez ao longo de 7 dias.`;
      if (isWeight) return `Para o controle de peso de ${name}, pese cada refeição em uma balança de cozinha: dosar no olho causa 20–30% de superalimentação na maioria das casas.`;
      if (isBrachy) return `A anatomia braquicefálica de ${name} exige cuidados ao comer: use tigela lenta e evite exercícios por 30 minutos após a refeição para prevenir dilatação gástrica.`;
      if (isObesityProne) return `A raça de ${name} é apaixonada por comida e propensa à obesidade: siga rigorosamente esta porção e evite totalmente restos de comida de mesa.`;
      if (isHighDrive) return `${name} é uma raça de alta energia e trabalho: nos dias de descanso reduza a porção em 10%; nos dias de atividade intensa aumente em 10%.`;
      return `O plano de ${name} está calibrado em ${kcalStr} kcal/dia. Pese cada refeição em uma balança de cozinha: medidas por xícaras podem variar até 30% devido à densidade dos alimentos.`;
    }

    case 'ja': {
      if (isPuppyEarly) return `${name}は急速成長期にあります。骨の健全な発育のため、1日3回に分けて給餌し、カルシウムとリンの比率（1.2:1）を最優先してください。`;
      if (isPuppyLate) return `${name}は成犬期への移行期です。成長スピードの鈍化に合わせて1日2回給餌へ減らし、カロリー過剰に注意してください。`;
      if (isSenior) return `シニア期の${name}は成犬時よりカロリー需要が約20%低下します。関節をサポートするオメガ3脂肪酸と消化の良いタンパク質を優先してください。`;
      if (isOverweight) return `${name}は体重過多気味です（BCS ${bcs}/9）。給餌量を10〜15%減らし、食あたり大さじ1〜2杯の純粋カボチャピューレを足して余分なカロリーなしに満腹感を保ちましょう。`;
      if (isUnderweight) return `${name}は体重不足傾向です（BCS ${bcs}/9）。日量を10%増やし、食ごとに卵黄1個またはサーモンオイル小さじ1杯を加えて良質で高密度なエネルギーを補給してください。`;
      if (isWorking) return `${name}は活動的な使役犬・アスリート犬です。安静時必要量の2.5〜3倍で算出しています。毎日計量し、2週間ごとに体型を見ながら±10%微調整してください。`;
      if (isSedentary) return `${name}は運動量が控えめです（1.2倍RERで計算）。置き餌は避け、過食を防ぐため食事開始15分後には器を下げましょう。`;
      if (isJoint) return `${name}の関節ケアには、EPA/DHA豊富なサーモンオイル小さじ1杯と緑イ貝パウダーの併用が効果的です。関節の炎症抑制が実証されています。`;
      if (isSkin) return `${name}の皮膚と毛並みには、体重9kgあたり小さじ1杯の天然サーモンオイルを毎日加えてください。通常3〜4週間でツヤと皮膚状態の改善が見られます。`;
      if (isDigest) return `${name}のデリケートな胃腸には、食あたり大さじ1〜2杯の純粋カボチャピューレを加え、新しいタンパク質は7日間かけて1種類ずつ試してください。`;
      if (isWeight) return `${name}の体重管理では、毎食キッチンスケールで正確に計量してください。目分量での給餌は多くの家庭で20〜30%の過剰給餌につながります。`;
      if (isBrachy) return `短頭種の${name}は空気を吸い込みやすいため、早食い防止食器を使い、食後30分間は胃拡張や胃捻転を防ぐため運動を控えてください。`;
      if (isObesityProne) return `${name}の犬種は食欲旺盛で肥満しやすい体質です。算出した給餌量を厳格に守り、人の食事のおすそ分けは完全に避けましょう。`;
      if (isHighDrive) return `${name}は運動欲求の高い犬種です。運動量の少ない休日は給餌量を10%減らし、激しい運動をした日は10%増やして調整してください。`;
      return `${name}のプランは1日あたり${kcalStr} kcalに精密調整されています。計量カップはフードの密度により最大30%の誤差が生じるため、毎食キッチンスケールで計量してください。`;
    }

    case 'ko': {
      if (isPuppyEarly) return `${name}은(는) 급성장기에 있습니다. 골격 발달을 위해 하루 3회 급여하고 칼슘 대 인 비율(1.2:1)을 철저히 유지해 주세요.`;
      if (isPuppyLate) return `${name}은(는) 성견 크기로 자라는 전환기입니다. 성장이 완만해짐에 따라 하루 2회로 줄이고 칼로리를 서서히 조절하세요.`;
      if (isSenior) return `노령견인 ${name}은(는) 성견 대비 약 20% 적은 에너지가 필요합니다. 관절 건강을 돕는 오메가-3와 소화가 편한 단백질을 우선 챙겨주세요.`;
      if (isOverweight) return `${name}은(는) 과체중 상태입니다 (BCS ${bcs}/9). 급여량을 10–15% 줄이고, 식사마다 순수 단호박 퓌레 1–2스푼을 더해 칼로리 증가 없이 포만감을 채워주세요.`;
      if (isUnderweight) return `${name}은(는) 저체중 상태입니다 (BCS ${bcs}/9). 일일 권장량을 10% 늘리고, 매 끼니 달걀노른자 1개나 연어 오일 1티스푼을 섞어 밀도 높은 건강한 열량을 공급해 주세요.`;
      if (isWorking) return `${name}은(는) 활동량이 많은 사역견/운동견입니다. RER의 2.5–3배로 계산되었습니다. 매일 계량하고 2주마다 체형 평가를 거쳐 ±10% 범위로 조절하세요.`;
      if (isSedentary) return `${name}은(는) 활동량이 적은 편입니다 (RER의 1.2배 적용). 자율 급여는 피하고, 과식을 막기 위해 15분 후 식기를 치워주세요.`;
      if (isJoint) return `${name}의 관절 보호를 위해 매일 연어 오일(EPA/DHA) 1티스푼과 초록입홍합 분말을 추천합니다. 관절 염증 완화 효과가 입증된 영양소입니다.`;
      if (isSkin) return `${name}의 피모 개선을 위해 체중 9kg당 자연산 연어 오일 1티스푼을 매일 급여하세요. 대개 3–4주 내에 눈에 띄는 윤기가 살아납니다.`;
      if (isDigest) return `${name}의 민감한 장을 위해 끼니마다 순수 단호박 퓌레 1–2스푼을 섞어주고, 새로운 단백질은 7일에 걸쳐 한 가지씩 순차적으로 적응시키세요.`;
      if (isWeight) return `${name}의 체중 관리를 위해 모든 식사를 주방 저울로 계량하세요. 눈대중 급여는 대부분의 가정에서 20–30% 과잉 급여로 이어집니다.`;
      if (isBrachy) return `단두종인 ${name}은(는) 식사 중 공기를 삼키기 쉬우므로 슬로우 식기를 사용하고, 고창증과 위염 예방을 위해 식후 30분간은 안정을 취하게 해주세요.`;
      if (isObesityProne) return `${name}의 견종은 식탐이 강하고 비만에 취약합니다. 산출된 정량을 엄격히 준수하고 식탁 잔반은 일체 주지 마세요.`;
      if (isHighDrive) return `${name}은(는) 에너지 소모가 큰 활동적인 견종입니다. 휴식일에는 정량에서 10%를 줄이고, 활동량이 많은 날에는 10%를 늘려 유연하게 급여하세요.`;
      return `${name}의 식단은 하루 ${kcalStr} kcal로 정밀 설계되었습니다. 컵 계량은 사료 밀도에 따라 최대 30%의 오차가 발생하므로 매 끼니 주방 저울로 계량하세요.`;
    }

    case 'en':
    default: {
      if (isPuppyEarly) return `${name} is in rapid growth phase — feed 3× daily and prioritise calcium-to-phosphorus balance (1.2:1) to support bone development.`;
      if (isPuppyLate) return `${name} is transitioning to adult size — reduce to 2× daily and begin tapering calories as growth slows.`;
      if (isSenior) return `Senior ${name} needs 20% fewer calories than an adult — prioritise joint-supporting omega-3s and easily digestible proteins.`;
      if (isOverweight) return `${name} is overweight (BCS ${bcs}/9) — reduce portion by 10–15% and add 1–2 tbsp pure pumpkin per meal to increase satiety without extra calories.`;
      if (isUnderweight) return `${name} is underweight (BCS ${bcs}/9) — increase daily portion by 10% and add a raw egg yolk or 1 tsp salmon oil per meal for calorie-dense nutrition.`;
      if (isWorking) return `${name} is a working dog — this plan runs at 2.5–3× RER. Weigh food daily; adjust by ±10% based on body condition every 2 weeks.`;
      if (isSedentary) return `${name} is sedentary — this plan uses a 1.2× RER multiplier. Avoid free-feeding; pick up the bowl after 15 minutes to prevent overeating.`;
      if (isJoint) return `For ${name}'s joint health, add 1 tsp salmon oil daily (EPA/DHA) and consider green-lipped mussel powder — both are proven to reduce canine joint inflammation.`;
      if (isSkin) return `For ${name}'s skin and coat, add 1 tsp wild salmon oil per 20 lbs of body weight daily — visible coat improvement typically appears within 3–4 weeks.`;
      if (isDigest) return `For ${name}'s sensitive digestion, add 1–2 tbsp plain pumpkin purée per meal and introduce new proteins one at a time over 7 days.`;
      if (isWeight) return `For ${name}'s weight management, weigh every meal on a kitchen scale — eyeballing portions causes 20–30% overfeeding in most households.`;
      if (isBrachy) return `${name}'s brachycephalic anatomy slows eating — use a slow-feeder bowl and avoid exercise for 30 minutes after meals to prevent bloat.`;
      if (isObesityProne) return `${name}'s breed is highly food-motivated and prone to obesity — stick strictly to this portion and avoid table scraps entirely.`;
      if (isHighDrive) return `${name} is a high-drive working breed — on rest days reduce this portion by 10%; on active days increase by 10%.`;
      return `${name}'s plan is calibrated to ${kcalStr} kcal/day. Weigh each meal on a kitchen scale — cup measurements vary by up to 30% depending on food density.`;
    }
  }
}
