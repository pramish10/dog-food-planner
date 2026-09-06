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
  proteinChoice: string;
  treatBudgetPct?: number;
}

// Breed-specific metabolic data based on veterinary research
const BREED_METABOLIC_DATA: Record<string, { sizeFactor: number; category: string; knownIssues: string[] }> = {
  // Giant breeds
  'Great Dane': { sizeFactor: 0.88, category: 'giant', knownIssues: ['bloat', 'joint'] },
  'Saint Bernard': { sizeFactor: 0.88, category: 'giant', knownIssues: ['joint', 'heart'] },
  'Mastiff': { sizeFactor: 0.88, category: 'giant', knownIssues: ['joint', 'bloat'] },
  'Newfoundland': { sizeFactor: 0.88, category: 'giant', knownIssues: ['joint', 'heart'] },
  'Bernese Mountain Dog': { sizeFactor: 0.89, category: 'giant', knownIssues: ['joint', 'cancer'] },
  'Irish Wolfhound': { sizeFactor: 0.87, category: 'giant', knownIssues: ['bloat', 'heart'] },
  'Rottweiler': { sizeFactor: 0.90, category: 'large', knownIssues: ['joint', 'bloat'] },
  // Large breeds
  'German Shepherd': { sizeFactor: 0.93, category: 'large', knownIssues: ['joint', 'digestion'] },
  'Golden Retriever': { sizeFactor: 0.93, category: 'large', knownIssues: ['joint', 'coat', 'cancer'] },
  'Labrador Retriever': { sizeFactor: 0.92, category: 'large', knownIssues: ['weight', 'joint'] },
  'Husky': { sizeFactor: 0.95, category: 'large', knownIssues: ['coat', 'eye'] },
  'Doberman': { sizeFactor: 0.93, category: 'large', knownIssues: ['heart', 'joint'] },
  'Boxer': { sizeFactor: 0.92, category: 'large', knownIssues: ['bloat', 'heart'] },
  'Border Collie': { sizeFactor: 0.97, category: 'medium', knownIssues: ['joint', 'eye'] },
  'Australian Shepherd': { sizeFactor: 0.97, category: 'medium', knownIssues: ['joint', 'eye'] },
  // Medium breeds
  'Bulldog': { sizeFactor: 0.90, category: 'medium', knownIssues: ['weight', 'joint', 'skin'] },
  'Beagle': { sizeFactor: 0.98, category: 'medium', knownIssues: ['weight', 'digestion'] },
  'Cocker Spaniel': { sizeFactor: 0.98, category: 'medium', knownIssues: ['ear', 'coat', 'weight'] },
  'Poodle': { sizeFactor: 1.00, category: 'medium', knownIssues: ['coat', 'joint'] },
  'Shih Tzu': { sizeFactor: 1.05, category: 'small', knownIssues: ['skin', 'coat', 'digestion'] },
  'Dachshund': { sizeFactor: 1.02, category: 'small', knownIssues: ['weight', 'joint', 'back'] },
  // Small breeds
  'Chihuahua': { sizeFactor: 1.12, category: 'toy', knownIssues: ['dental', 'joint'] },
  'Yorkshire Terrier': { sizeFactor: 1.12, category: 'toy', knownIssues: ['dental', 'coat', 'digestion'] },
  'Maltese': { sizeFactor: 1.12, category: 'toy', knownIssues: ['dental', 'coat', 'digestion'] },
  'Pomeranian': { sizeFactor: 1.10, category: 'toy', knownIssues: ['dental', 'coat'] },
  'French Bulldog': { sizeFactor: 0.93, category: 'small', knownIssues: ['weight', 'skin', 'digestion'] },
  'Pug': { sizeFactor: 0.90, category: 'small', knownIssues: ['weight', 'skin', 'joint'] },
};

export interface FeedingSlot {
  timeLabel: string;
  slotName: string;
  portionGrams: number;
  portionCups: number;
}

export interface KeyNutrient {
  name: string;
  reason: string;
  foods: string[];
}

export interface HealthAdvice {
  title: string;
  tips: string[];
  avoidFoods: string[];
  keyNutrients: KeyNutrient[];
}

export interface NutritionResult {
  dogName: string;
  weightKg: number;
  rerKcal: number;
  merKcal: number;
  treatKcal: number;
  mealKcal: number;
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
  dailySchedule: FeedingSlot[];
  summary: string;
  breedNote: string;
  healthAdvice: HealthAdvice;
  costEstimate: {
    dailyCost: number;
    monthlyCost: number;
  };
}

// Get breed-specific size factor — uses named breed data first, falls back to weight-based
function getBreedSizeFactor(weightKg: number, breedName?: string): { factor: number; category: string; knownIssues: string[] } {
  if (breedName && BREED_METABOLIC_DATA[breedName]) {
    const data = BREED_METABOLIC_DATA[breedName];
    return { factor: data.sizeFactor, category: data.category, knownIssues: data.knownIssues };
  }
  // Weight-based fallback
  if (weightKg < 5) return { factor: 1.15, category: 'toy', knownIssues: ['dental'] };
  if (weightKg < 10) return { factor: 1.10, category: 'small', knownIssues: ['dental', 'joint'] };
  if (weightKg < 25) return { factor: 1.0, category: 'medium', knownIssues: [] };
  if (weightKg < 40) return { factor: 0.95, category: 'large', knownIssues: ['joint', 'bloat'] };
  return { factor: 0.90, category: 'giant', knownIssues: ['joint', 'bloat', 'heart'] };
}

function getBreedNote(category: string, ageStage: string, breedName?: string, knownIssues?: string[]): string {
  // Breed-specific notes for well-known breeds
  const breedSpecificNotes: Record<string, string> = {
    'Labrador Retriever': 'Labs are genetically prone to overeating — they lack the POMC gene that signals fullness. Weigh every meal precisely and never free-feed.',
    'Golden Retriever': 'Goldens are prone to joint issues and cancer. Prioritize omega-3s (salmon oil daily) and antioxidant-rich vegetables like blueberries and broccoli.',
    'German Shepherd': 'German Shepherds have sensitive digestive systems. Feed consistent meals at the same time daily and introduce new foods slowly over 10 days.',
    'French Bulldog': 'Frenchies are prone to weight gain and skin fold infections. Keep portions precise and include zinc-rich foods (beef, lamb) for skin health.',
    'Bulldog': 'Bulldogs have slow metabolisms and gain weight easily. Reduce portions by 10% from the estimate and monitor weight weekly.',
    'Pug': 'Pugs are highly prone to obesity. Stick strictly to the calculated portion — even small overfeeding causes rapid weight gain in this breed.',
    'Dachshund': 'Dachshunds must stay lean to protect their long spine. Excess weight dramatically increases the risk of intervertebral disc disease (IVDD).',
    'Husky': 'Huskies have unusually efficient metabolisms — they may need 20% fewer calories than other dogs of the same weight. Monitor body condition closely.',
    'Great Dane': 'Great Danes must eat from a raised bowl and rest 1 hour after meals to reduce bloat (GDV) risk — a life-threatening condition in giant breeds.',
    'Boxer': 'Boxers are prone to bloat and heart issues. Always split into 2 meals, avoid exercise 1 hour before and after eating, and include taurine-rich foods.',
    'Chihuahua': 'Chihuahuas can develop hypoglycemia if meals are skipped. Feed 3 small meals daily and always have a small snack available.',
    'Yorkshire Terrier': 'Yorkies have delicate digestive systems. Stick to consistent proteins and avoid sudden diet changes. Dental health is critical — add raw carrots as treats.',
  };

  if (breedName && breedSpecificNotes[breedName]) {
    return breedSpecificNotes[breedName];
  }

  // Category-based notes
  const notes: Record<string, Record<string, string>> = {
    toy: {
      'puppy-early': 'Toy breed puppies need 3–4 small meals daily to prevent hypoglycemia. Never skip meals — blood sugar drops quickly in tiny dogs.',
      'puppy-late': 'Small breeds mature faster than large breeds. Transition to adult portions around 9–10 months.',
      adult: 'Toy breeds have fast metabolisms. Weigh food precisely — even 10g extra per day adds up to 300g extra per month.',
      senior: 'Senior toy breeds often stay active longer than large breeds. Monitor weight monthly and adjust portions by 5–10% as needed.',
    },
    small: {
      'puppy-early': 'Small breed puppies grow quickly. Use small-breed puppy formulas with higher calcium-to-phosphorus ratios for proper bone development.',
      'puppy-late': 'Transition to adult feeding around 10–12 months for small breeds. Avoid overfeeding during the final growth phase.',
      adult: 'Small breeds are prone to dental disease — add raw carrots or crunchy vegetables as treats to help clean teeth naturally.',
      senior: 'Small senior dogs often live to 14–16 years. Joint support (glucosamine, omega-3s) becomes important after age 8.',
    },
    medium: {
      'puppy-early': 'Medium breed puppies need balanced calcium and phosphorus for steady bone growth. Avoid calcium supplements unless vet-prescribed.',
      'puppy-late': 'Transition to adult feeding at 12 months. Avoid overfeeding during the rapid growth phase (4–8 months).',
      adult: 'Medium breeds are the most versatile. This plan is well-calibrated for your dog\'s size and activity level.',
      senior: 'Senior medium dogs benefit from 10–15% fewer calories and added joint support (omega-3s, glucosamine) after age 7.',
    },
    large: {
      'puppy-early': 'Large breed puppies must NOT be overfed — excess calories cause rapid bone growth and permanent joint damage. Keep them lean.',
      'puppy-late': 'Keep large breed puppies lean during growth. Avoid high-calcium supplements — balanced whole food provides enough.',
      adult: 'Large breeds are prone to bloat (GDV) — always split into 2 meals and wait 1 hour after eating before exercise.',
      senior: 'Large senior dogs (7+) need joint support (glucosamine, omega-3s) and 10–15% fewer calories to maintain healthy weight.',
    },
    giant: {
      'puppy-early': 'Giant breed puppies need strict calorie control — overfeeding causes irreversible joint damage. Keep growth slow and steady.',
      'puppy-late': 'Giant breeds mature slowly (18–24 months). Keep them lean throughout the entire growth period.',
      adult: 'Giant breeds are highly prone to bloat (GDV) — always split into 2 meals, use a slow feeder bowl, and avoid exercise after eating.',
      senior: 'Giant senior dogs age faster (from ~6 years). Prioritize joint health, easy-digest proteins, and omega-3 fatty acids.',
    },
  };
  return notes[category]?.[ageStage] ?? 'Monitor your dog\'s weight monthly and adjust portions as needed.';
}

function getHealthAdvice(healthFocus: string, ageStage: string, weightKg: number): HealthAdvice {
  const adviceMap: Record<string, HealthAdvice> = {
    'Joints & Mobility Support': {
      title: 'Joint & Mobility Nutrition',
      tips: [
        'Add 1/4 tsp wild salmon oil daily for EPA/DHA omega-3s that reduce joint inflammation.',
        'Include bone broth 3–4x per week — natural source of collagen and glucosamine.',
        'Keep weight at the lower end of healthy range — every extra kg adds 4x pressure on joints.',
        'Avoid high-starch carbs (white rice, corn) which can increase systemic inflammation.',
      ],
      avoidFoods: ['corn', 'white rice in excess', 'processed treats with sugar'],
      keyNutrients: [
        { name: 'Omega-3 (EPA/DHA)', reason: 'Reduces joint inflammation naturally', foods: ['wild salmon', 'sardines', 'salmon oil'] },
        { name: 'Glucosamine', reason: 'Rebuilds cartilage and lubricates joints', foods: ['chicken feet', 'bone broth', 'trachea'] },
        { name: 'Vitamin C', reason: 'Collagen synthesis for connective tissue', foods: ['bell peppers', 'broccoli', 'parsley'] },
        { name: 'Manganese', reason: 'Enzyme activation for cartilage formation', foods: ['mussels', 'pumpkin seeds', 'spinach'] },
      ],
    },
    'Skin & Shiny Coat Vitality': {
      title: 'Skin & Coat Nutrition',
      tips: [
        'Add 1/2 tsp salmon oil or sardine oil daily — the single most effective coat supplement.',
        'Include eggs 3–4x per week — biotin and sulfur amino acids for keratin production.',
        'Zinc from red meat (beef, lamb) is essential for skin barrier function.',
        'Avoid chicken if your dog has itchy skin — poultry is the #1 canine food allergen.',
      ],
      avoidFoods: ['chicken (if itchy)', 'corn', 'soy', 'artificial preservatives'],
      keyNutrients: [
        { name: 'Omega-6 (LA)', reason: 'Maintains skin moisture barrier', foods: ['sunflower oil', 'chicken fat', 'hemp seeds'] },
        { name: 'Omega-3 (EPA/DHA)', reason: 'Reduces skin inflammation and itching', foods: ['salmon', 'mackerel', 'sardines'] },
        { name: 'Biotin (B7)', reason: 'Keratin production for coat shine', foods: ['eggs', 'beef liver', 'sweet potato'] },
        { name: 'Zinc', reason: 'Skin cell renewal and immune function', foods: ['beef', 'lamb', 'pumpkin seeds'] },
      ],
    },
    'Sensitive Digestion & Gut Health': {
      title: 'Digestive Health Nutrition',
      tips: [
        'Feed consistent meals at the same time each day — routine reduces digestive stress.',
        'Add 1 tsp plain pumpkin puree per meal — soluble fiber regulates both loose and firm stools.',
        'Introduce new foods slowly over 7–10 days to avoid upset.',
        'Plain bone broth (no onion/garlic) soothes the gut lining and encourages eating.',
      ],
      avoidFoods: ['dairy', 'fatty meats', 'raw bones if new to raw', 'high-fat treats'],
      keyNutrients: [
        { name: 'Soluble Fiber', reason: 'Feeds beneficial gut bacteria and firms stools', foods: ['pumpkin', 'sweet potato', 'oats'] },
        { name: 'Probiotics', reason: 'Restores healthy gut microbiome balance', foods: ['plain kefir', 'raw goat milk', 'fermented veggies'] },
        { name: 'Glutamine', reason: 'Repairs and seals the intestinal lining', foods: ['bone broth', 'beef', 'eggs'] },
        { name: 'Digestive Enzymes', reason: 'Improves nutrient absorption', foods: ['green tripe', 'raw pineapple', 'papaya'] },
      ],
    },
    'Metabolic Weight Management': {
      title: 'Weight Management Nutrition',
      tips: [
        'Weigh food with a kitchen scale — measuring cups are inaccurate by up to 30%.',
        'Replace 20% of the meal with steamed green beans or zucchini — adds volume with almost no calories.',
        'Feed 2 meals per day at fixed times — free-feeding causes weight gain.',
        'Cut treats to under 5% of daily calories during weight loss phase.',
      ],
      avoidFoods: ['high-fat meats', 'cheese', 'peanut butter', 'commercial treats'],
      keyNutrients: [
        { name: 'Lean Protein', reason: 'Preserves muscle mass during calorie deficit', foods: ['turkey breast', 'white fish', 'chicken breast'] },
        { name: 'L-Carnitine', reason: 'Transports fat into cells for energy burning', foods: ['beef heart', 'lamb', 'chicken'] },
        { name: 'Fiber', reason: 'Creates satiety and slows digestion', foods: ['pumpkin', 'green beans', 'broccoli'] },
        { name: 'B Vitamins', reason: 'Supports metabolic energy conversion', foods: ['beef liver', 'eggs', 'sardines'] },
      ],
    },
    'General Longevity & Health': {
      title: 'General Health & Longevity',
      tips: [
        'Rotate proteins every 2–4 weeks to ensure a broad amino acid and mineral spectrum.',
        'Add a small amount of organ meat (liver, heart) 1–2x per week — nature\'s multivitamin.',
        'Include antioxidant-rich vegetables: blueberries, spinach, broccoli in small amounts.',
        'Fresh water should always be available — hydration is the #1 overlooked health factor.',
      ],
      avoidFoods: ['onion', 'garlic', 'grapes', 'raisins', 'xylitol', 'macadamia nuts'],
      keyNutrients: [
        { name: 'Complete Protein', reason: 'All essential amino acids for cell repair', foods: ['eggs', 'beef', 'salmon', 'turkey'] },
        { name: 'Antioxidants', reason: 'Neutralize free radicals and slow aging', foods: ['blueberries', 'spinach', 'broccoli'] },
        { name: 'Omega-3', reason: 'Brain, heart, and immune system support', foods: ['salmon', 'sardines', 'flaxseed'] },
        { name: 'Organ Meats', reason: 'Dense source of vitamins A, B12, iron, copper', foods: ['beef liver', 'chicken hearts', 'kidney'] },
      ],
    },
  };

  // Default to general if not found
  return adviceMap[healthFocus] ?? adviceMap['General Longevity & Health'];
}

export function calculateCanineNutrition(input: DogProfileInput): NutritionResult {
  const weightKg = Math.max(1, input.weightLbs * 0.45359237);
  
  // Standard veterinary RER formula (NRC/AAFCO)
  const rerKcal = Math.round(70 * Math.pow(weightKg, 0.75));

  // Breed-aware size factor — uses named breed data first, falls back to weight
  const { factor: breedSizeFactor, category: breedCategory, knownIssues } = getBreedSizeFactor(weightKg, input.breed);

  // Life stage multiplier (AAFCO/NRC based)
  let lifeStageMultiplier: number;
  let mealsPerDay: number;

  switch (input.ageStage) {
    case 'puppy-early':
      // Early puppies need 3× RER — giant breeds slightly less to prevent rapid growth
      lifeStageMultiplier = (breedCategory === 'giant') ? 2.5 : 3.0;
      mealsPerDay = (breedCategory === 'toy') ? 4 : 3;
      break;
    case 'puppy-late':
      lifeStageMultiplier = (breedCategory === 'giant') ? 1.8 : 2.0;
      mealsPerDay = 3;
      break;
    case 'adult': {
      const isNeutered = input.gender.includes('neutered') || input.gender.includes('spayed');
      // Huskies have efficient metabolisms — reduce by extra 10%
      const isHusky = input.breed === 'Husky' || input.breed === 'Siberian Husky';
      lifeStageMultiplier = isNeutered ? (isHusky ? 1.4 : 1.6) : (isHusky ? 1.6 : 1.8);
      mealsPerDay = 2;
      break;
    }
    case 'senior':
      // Giant breeds age faster — senior from ~6 years
      lifeStageMultiplier = (breedCategory === 'giant') ? 1.2 : 1.4;
      mealsPerDay = (breedCategory === 'toy' || breedCategory === 'small') ? 3 : 2;
      break;
    default:
      lifeStageMultiplier = 1.6;
      mealsPerDay = 2;
  }

  // Activity multiplier
  let activityMultiplier: number;
  switch (input.activityLevel) {
    case 'sedentary': activityMultiplier = 0.85; break;
    case 'moderate': activityMultiplier = 1.0; break;
    case 'active': activityMultiplier = 1.25; break;
    case 'working': activityMultiplier = 1.55; break;
    default: activityMultiplier = 1.0;
  }

  // Goal & BCS adjustment — more granular than before
  let goalMultiplier = 1.0;
  if (input.bcs >= 8) {
    goalMultiplier = 0.70; // Obese: significant reduction
  } else if (input.targetGoal === 'lose' || input.bcs >= 7) {
    goalMultiplier = 0.80; // Overweight: moderate reduction
  } else if (input.bcs === 6) {
    goalMultiplier = 0.90; // Slightly overweight: mild reduction
  } else if (input.targetGoal === 'gain' || input.bcs <= 3) {
    goalMultiplier = 1.20; // Underweight: increase
  } else if (input.bcs === 4) {
    goalMultiplier = 1.10; // Slightly lean: mild increase
  }

  // MER formula: RER × lifeStage × activity × goal × breedSize
  const merKcal = Math.round(rerKcal * lifeStageMultiplier * activityMultiplier * goalMultiplier * breedSizeFactor);

  const treatBudgetPct = input.treatBudgetPct ?? 10;
  const treatKcal = Math.round((merKcal * treatBudgetPct) / 100);
  const mealKcal = merKcal - treatKcal;

  // Accurate gram calculations by diet type
  let kcalPerGram: number;
  let activeDailyGrams: number;
  
  if (input.dietPreference === 'raw-barf') {
    kcalPerGram = 1.55;
    activeDailyGrams = Math.round(mealKcal / kcalPerGram);
  } else if (input.dietPreference === 'superfood-topper') {
    // Topper = 35% of total meal calories at 1.0 kcal/g
    kcalPerGram = 1.0;
    activeDailyGrams = Math.round((mealKcal * 0.35) / kcalPerGram);
  } else {
    // fresh-cooked
    kcalPerGram = 1.3;
    activeDailyGrams = Math.round(mealKcal / kcalPerGram);
  }

  const perMealGrams = Math.round(activeDailyGrams / mealsPerDay);
  const dailyCupsEst = Number((activeDailyGrams / 225).toFixed(1));

  // Macro distribution
  const macroRatios = input.dietPreference === 'raw-barf'
    ? { protein: 54, fat: 34, carbs: 2, moisture: 10 }
    : input.dietPreference === 'superfood-topper'
    ? { protein: 44, fat: 30, carbs: 6, moisture: 20 }
    : { protein: 48, fat: 32, carbs: 4, moisture: 16 };

  // Simple daily schedule
  const dailySchedule: FeedingSlot[] = [];
  
  if (mealsPerDay === 3) {
    const slot1 = Math.round(activeDailyGrams * 0.35);
    const slot2 = Math.round(activeDailyGrams * 0.30);
    const slot3 = activeDailyGrams - slot1 - slot2;
    dailySchedule.push(
      { timeLabel: '7:00 AM', slotName: 'Morning Meal', portionGrams: slot1, portionCups: Number((slot1 / 225).toFixed(1)) },
      { timeLabel: '12:30 PM', slotName: 'Midday Meal', portionGrams: slot2, portionCups: Number((slot2 / 225).toFixed(1)) },
      { timeLabel: '6:00 PM', slotName: 'Evening Meal', portionGrams: slot3, portionCups: Number((slot3 / 225).toFixed(1)) }
    );
  } else {
    const slot1 = Math.round(activeDailyGrams * 0.5);
    const slot2 = activeDailyGrams - slot1;
    dailySchedule.push(
      { timeLabel: '7:30 AM', slotName: 'Morning Meal', portionGrams: slot1, portionCups: Number((slot1 / 225).toFixed(1)) },
      { timeLabel: '6:00 PM', slotName: 'Evening Meal', portionGrams: slot2, portionCups: Number((slot2 / 225).toFixed(1)) }
    );
  }

  // Summary sentence — specific and actionable
  const dogName = input.name || 'Your dog';
  const goalText = input.targetGoal === 'lose' ? ' to lose weight' : input.targetGoal === 'gain' ? ' to gain weight' : '';
  const breedText = input.breed && input.breed !== 'Mixed Breed / Unknown' ? ` (${input.breed})` : '';
  const summary = `${dogName}${breedText} needs ${merKcal} kcal/day${goalText}. Feed ${mealsPerDay} meal${mealsPerDay > 1 ? 's' : ''} of ${perMealGrams}g each. Always weigh with a kitchen scale.`;

  // Breed note — now breed-specific for known breeds
  const breedNote = getBreedNote(breedCategory, input.ageStage, input.breed, knownIssues);

  // Health advice
  const healthAdvice = getHealthAdvice(input.healthFocus, input.ageStage, weightKg);

  // Cost estimate
  const costPerGram = input.dietPreference === 'raw-barf' ? 0.008 : input.dietPreference === 'superfood-topper' ? 0.005 : 0.007;
  const dailyCost = Number((activeDailyGrams * costPerGram).toFixed(2));
  const monthlyCost = Math.round(dailyCost * 30.4);

  return {
    dogName,
    weightKg: Number(weightKg.toFixed(1)),
    rerKcal,
    merKcal,
    treatKcal,
    mealKcal,
    activeDailyGrams,
    perMealGrams,
    mealsPerDay,
    dailyCupsEst,
    macroRatios,
    dailySchedule,
    summary,
    breedNote,
    healthAdvice,
    costEstimate: {
      dailyCost,
      monthlyCost,
    },
  };
}
