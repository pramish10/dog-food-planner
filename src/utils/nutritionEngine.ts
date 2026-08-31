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
  proteinChoice: string; // 'Auto / Rotation' or specific protein
  treatBudgetPct?: number; // 0% to 15%
}

export interface TimedFeedingSlot {
  timeLabel: string;
  slotName: string;
  portionGrams: number;
  portionCups: number;
  items: Array<{
    name: string;
    amount: string;
    type: string;
    affiliateNote?: string;
  }>;
  instructions: string;
  imagePlaceholder: string;
}

export interface DayPlan {
  dayName: string;
  focus: string;
  slots: TimedFeedingSlot[];
}

export interface NutritionResult {
  dogName: string;
  weightKg: number;
  rerKcal: number;
  merKcal: number;
  treatKcal: number;
  mealKcal: number;
  dailyGramsFresh: number;
  dailyGramsRaw: number;
  dailyGramsTopper: number;
  activeDailyGrams: number;
  perMealGrams: number;
  mealsPerDay: number;
  dailyCupsEst: number;
  macroRatios: {
    protein: number;
    fat: number;
    carbs: number;
    moisture: number;
  };
  dailySchedule: TimedFeedingSlot[];
  weeklyDayPlans: DayPlan[];
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
    goalMultiplier = 0.80; // 20% safe caloric deficit
  } else if (input.targetGoal === 'gain' || input.bcs <= 3) {
    goalMultiplier = 1.20; // 20% surplus
  }

  // Total Maintenance Energy Requirement
  const merKcal = Math.round(rerKcal * (lifeStageMultiplier / 1.6) * activityMultiplier * goalMultiplier * (lifeStageMultiplier >= 2.0 ? 1.6 : 1.0));

  const treatBudgetPct = input.treatBudgetPct ?? 10;
  const treatKcal = Math.round((merKcal * treatBudgetPct) / 100);
  const mealKcal = merKcal - treatKcal;

  // Density estimations
  const dailyGramsFresh = Math.round(mealKcal / 1.35);
  const dailyGramsRaw = Math.round(mealKcal / 1.55);
  const dailyGramsTopper = Math.round((mealKcal * 0.35) / 1.05);

  let activeDailyGrams = dailyGramsFresh;
  if (input.dietPreference === 'raw-barf') activeDailyGrams = dailyGramsRaw;
  if (input.dietPreference === 'superfood-topper') activeDailyGrams = dailyGramsTopper;

  const perMealGrams = Math.round(activeDailyGrams / mealsPerDay);
  const dailyCupsEst = Number((activeDailyGrams / 225).toFixed(1));

  // Macro distribution based on diet
  const macroRatios = input.dietPreference === 'raw-barf' 
    ? { protein: 54, fat: 34, carbs: 2, moisture: 10 }
    : input.dietPreference === 'superfood-topper'
    ? { protein: 44, fat: 30, carbs: 6, moisture: 20 }
    : { protein: 48, fat: 32, carbs: 4, moisture: 16 };

  // Timed Daily Schedule
  const dailySchedule: TimedFeedingSlot[] = [
    {
      timeLabel: '07:30 AM',
      slotName: 'Morning Vitality Bowl',
      portionGrams: Math.round(activeDailyGrams * 0.5),
      portionCups: Number(((activeDailyGrams * 0.5) / 225).toFixed(1)),
      items: [
        { name: 'Lean Protein Base (Turkey/Beef/Salmon)', amount: `${Math.round(activeDailyGrams * 0.35)}g`, type: 'Protein' },
        { name: 'Pure Organic Pumpkin Puree', amount: `${Math.round(activeDailyGrams * 0.08)}g`, type: 'Soluble Fiber' },
        { name: 'Steamed Greens (Spinach/Zucchini)', amount: `${Math.round(activeDailyGrams * 0.05)}g`, type: 'Phyto-Nutrients' },
        { name: 'Wild Alaskan Salmon Oil', amount: '1/2 tsp', type: 'Omega-3 EPA/DHA', affiliateNote: 'Recommended: Pure Wild Salmon Oil' }
      ],
      instructions: 'Serve warm or at room temperature. Stir in salmon oil after cooling to preserve delicate fatty acids.',
      imagePlaceholder: 'morning_bowl_preview'
    },
    {
      timeLabel: '01:00 PM',
      slotName: 'Mid-Day Hydration & Joint Snack',
      portionGrams: 50,
      portionCups: 0.3,
      items: [
        { name: 'Warm Collagen Bone Broth', amount: '1/4 cup (60ml)', type: 'Joint & Gut Seal', affiliateNote: 'Recommended: Organic Grass-Fed Bone Broth' },
        { name: 'Wild Blueberries or Pumpkin Treat', amount: '3–4 berries', type: 'Antioxidant Snack' }
      ],
      instructions: 'Promotes hydration and digestive enzyme secretion between main feeding windows.',
      imagePlaceholder: 'midday_broth_preview'
    },
    {
      timeLabel: '06:30 PM',
      slotName: 'Evening Cellular Repair Feast',
      portionGrams: Math.round(activeDailyGrams * 0.5),
      portionCups: Number(((activeDailyGrams * 0.5) / 225).toFixed(1)),
      items: [
        { name: 'Lean Protein & Organ Blend (Heart/Liver)', amount: `${Math.round(activeDailyGrams * 0.40)}g`, type: 'Protein & Taurine' },
        { name: 'Steamed Sweet Potato / Veggie Mash', amount: `${Math.round(activeDailyGrams * 0.08)}g`, type: 'Prebiotics & Minerals' },
        { name: 'Eggshell Calcium & Kelp Powder', amount: '1/2 tsp (3g)', type: 'Bio-Available Minerals', affiliateNote: 'Recommended: Sea Kelp & Calcium Blend' }
      ],
      instructions: 'Feed at least 3 hours before bedtime to ensure peaceful sleep and steady overnight recovery.',
      imagePlaceholder: 'evening_feast_preview'
    }
  ];

  // 7-Day Day-by-Day Feeding Rotation Plan
  const weeklyDayPlans: DayPlan[] = [
    { dayName: 'Monday', focus: 'Lean Poultry & Gut Calming (Turkey + Pumpkin)', slots: dailySchedule },
    { dayName: 'Tuesday', focus: 'Omega-3 Anti-Inflammatory (Wild Salmon + Steamed Zucchini)', slots: dailySchedule },
    { dayName: 'Wednesday', focus: 'High-Iron Muscle Recovery (Grass-Fed Beef + Blueberries)', slots: dailySchedule },
    { dayName: 'Thursday', focus: 'Hypoallergenic Digestion (Pasture Lamb + Green Tripe)', slots: dailySchedule },
    { dayName: 'Friday', focus: 'Vital Organ & Taurine Boost (Turkey Hearts + Pumpkin Puree)', slots: dailySchedule },
    { dayName: 'Saturday', focus: 'Joint Mobility & Collagen Recharge (Beef & Bone Broth Stew)', slots: dailySchedule },
    { dayName: 'Sunday', focus: 'Superfood Antioxidant Feast (Salmon, Kelp & Sweet Potato)', slots: dailySchedule }
  ];

  // Cost estimates ($/day)
  const dailyCost = Number(((activeDailyGrams / 1000) * 6.5).toFixed(2));
  const monthlyCost = Math.round(dailyCost * 30.4);
  const commercialKibbleCompare = Math.round(monthlyCost * 0.65);

  return {
    dogName: input.name || 'Lucy',
    weightKg: Number(weightKg.toFixed(1)),
    rerKcal,
    merKcal,
    treatKcal,
    mealKcal,
    dailyGramsFresh,
    dailyGramsRaw,
    dailyGramsTopper,
    activeDailyGrams,
    perMealGrams,
    mealsPerDay,
    dailyCupsEst,
    macroRatios,
    dailySchedule,
    weeklyDayPlans,
    costEstimate: {
      dailyCost,
      monthlyCost,
      commercialKibbleCompare
    }
  };
}
