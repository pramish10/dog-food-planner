export interface DogProfileInput {
  name: string;
  breed: string;
  ageStage: 'puppy-early' | 'puppy-late' | 'adult' | 'senior';
  gender: 'male-neutered' | 'male-intact' | 'female-spayed' | 'female-intact';
  weightLbs: number;
  targetGoal: 'maintain' | 'lose' | 'gain';
  bcs: number; // 1 to 9 scale
  activityLevel: 'sedentary' | 'moderate' | 'active' | 'working';
  allergies: string[];
  healthFocus: string;
  dietPreference: 'fresh-cooked' | 'raw-barf' | 'superfood-topper';
  proteinChoice: 'Turkey' | 'Beef' | 'Salmon' | 'Lamb' | 'Venison';
}

export interface NutritionResult {
  dogName: string;
  weightKg: number;
  rerKcal: number;
  merKcal: number;
  dailyGramsFresh: number;
  dailyGramsRaw: number;
  dailyGramsTopper: number;
  perMealGrams: number;
  mealsPerDay: number;
  dailyCupsEst: number;
  macroRatios: {
    protein: number;
    fat: number;
    carbs: number;
    moisture: number;
  };
  transitionDays: Array<{
    day: number;
    freshPct: number;
    oldFoodPct: number;
    description: string;
  }>;
  costEstimate: {
    dailyCost: number;
    monthlyCost: number;
    commercialKibbleCompare: number;
  };
}

export function calculateCanineNutrition(input: DogProfileInput): NutritionResult {
  const weightKg = Math.max(1, input.weightLbs * 0.45359237);
  
  // Veterinary Standard Resting Energy Requirement: RER = 70 * (kg)^0.75
  const rerKcal = Math.round(70 * Math.pow(weightKg, 0.75));

  // Multipliers based on veterinary literature (AAFCO, NRC, WSAVA)
  let lifeStageMultiplier = 1.6;
  let mealsPerDay = 2;

  switch (input.ageStage) {
    case 'puppy-early': // 2-4 months
      lifeStageMultiplier = 3.0;
      mealsPerDay = 3;
      break;
    case 'puppy-late': // 4-12 months
      lifeStageMultiplier = 2.0;
      mealsPerDay = 2;
      break;
    case 'adult':
      const isNeutered = input.gender.includes('neutered') || input.gender.includes('spayed');
      lifeStageMultiplier = isNeutered ? 1.6 : 1.8;
      mealsPerDay = 2;
      break;
    case 'senior':
      lifeStageMultiplier = 1.35;
      mealsPerDay = 2;
      break;
  }

  // Activity multiplier
  let activityMultiplier = 1.0;
  switch (input.activityLevel) {
    case 'sedentary':
      activityMultiplier = 0.85;
      break;
    case 'moderate':
      activityMultiplier = 1.0;
      break;
    case 'active':
      activityMultiplier = 1.25;
      break;
    case 'working':
      activityMultiplier = 1.55;
      break;
  }

  // Goal & Body Condition Score adjustment
  let goalMultiplier = 1.0;
  if (input.targetGoal === 'lose' || input.bcs >= 7) {
    goalMultiplier = 0.80; // 20% safe caloric deficit for steady fat loss
  } else if (input.targetGoal === 'gain' || input.bcs <= 3) {
    goalMultiplier = 1.20; // 20% surplus for lean recovery
  }

  // Total Maintenance Energy Requirement
  const merKcal = Math.round(rerKcal * (lifeStageMultiplier / 1.6) * activityMultiplier * goalMultiplier * (lifeStageMultiplier >= 2.0 ? 1.6 : 1.0));

  // Density estimations
  // Fresh cooked approx ~1.35 kcal/g
  // Raw BARF approx ~1.55 kcal/g
  // Superfood Topper approx ~1.05 kcal/g
  const dailyGramsFresh = Math.round(merKcal / 1.35);
  const dailyGramsRaw = Math.round(merKcal / 1.55);
  const dailyGramsTopper = Math.round((merKcal * 0.35) / 1.05);

  let activeDailyGrams = dailyGramsFresh;
  if (input.dietPreference === 'raw-barf') activeDailyGrams = dailyGramsRaw;
  if (input.dietPreference === 'superfood-topper') activeDailyGrams = dailyGramsTopper;

  const perMealGrams = Math.round(activeDailyGrams / mealsPerDay);
  const dailyCupsEst = Number((activeDailyGrams / 225).toFixed(1)); // Approx 225g per standard measuring cup

  // Macro distribution based on diet
  const macroRatios = input.dietPreference === 'raw-barf' 
    ? { protein: 54, fat: 34, carbs: 2, moisture: 10 }
    : input.dietPreference === 'superfood-topper'
    ? { protein: 44, fat: 30, carbs: 6, moisture: 20 }
    : { protein: 48, fat: 32, carbs: 4, moisture: 16 };

  // 7-day safe transition schedule
  const transitionDays = [
    { day: 1, freshPct: 15, oldFoodPct: 85, description: 'Gentle introduction. Watch stool consistency.' },
    { day: 2, freshPct: 25, oldFoodPct: 75, description: 'Microbiome adapting to living whole food enzymes.' },
    { day: 3, freshPct: 40, oldFoodPct: 60, description: 'Energy boost begins. Healthy digestive motility.' },
    { day: 4, freshPct: 50, oldFoodPct: 50, description: 'Halfway mark! Optimal nutrient absorption.' },
    { day: 5, freshPct: 65, oldFoodPct: 35, description: 'Significant reduction in stool volume & odor.' },
    { day: 6, freshPct: 80, oldFoodPct: 20, description: 'Skin hydration and coat luster improvement noticeable.' },
    { day: 7, freshPct: 100, oldFoodPct: 0, description: 'Complete transformation to 100% biological nutrition!' }
  ];

  // Cost estimates ($/day)
  // Fresh approx $3.50 per 500g of human-grade batch ingredients
  const dailyCost = Number(((activeDailyGrams / 1000) * 6.5).toFixed(2));
  const monthlyCost = Math.round(dailyCost * 30.4);
  const commercialKibbleCompare = Math.round(monthlyCost * 0.65);

  return {
    dogName: input.name || 'Your Canine Companion',
    weightKg: Number(weightKg.toFixed(1)),
    rerKcal,
    merKcal,
    dailyGramsFresh,
    dailyGramsRaw,
    dailyGramsTopper,
    perMealGrams,
    mealsPerDay,
    dailyCupsEst,
    macroRatios,
    transitionDays,
    costEstimate: {
      dailyCost,
      monthlyCost,
      commercialKibbleCompare
    }
  };
}
