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

// ─── Breed-specific supplement recommendations ────────────────────────────────
export interface BreedSupplementRec {
  name: string;
  dose: string;
  reason: string;
}

// ─── Feeding timing advice per profile ───────────────────────────────────────
export interface FeedingTimingAdvice {
  mealsPerDay: number;
  timingNotes: string[];
  slowFeederRecommended: boolean;
  raisedBowlRecommended: boolean;
  postMealRestMinutes: number;
}

// ─── Breed metabolic database — veterinary-research-backed ───────────────────
// sizeFactor: multiplier on RER (Resting Energy Requirement)
// category: size class for fallback logic
// knownIssues: drives health advice prioritization
// specialMetabolism: flags breeds with documented atypical energy handling
const BREED_METABOLIC_DATA: Record<string, {
  sizeFactor: number;
  category: string;
  knownIssues: string[];
  specialMetabolism?: 'efficient' | 'high-burn' | 'slow';
  bloatRisk?: 'high' | 'moderate' | 'low';
  heartRisk?: boolean;
  dentalRisk?: boolean;
  spinalRisk?: boolean;
  brachycephalic?: boolean;
}> = {
  // ── GIANT BREEDS ──────────────────────────────────────────────────────────
  'Great Dane':          { sizeFactor: 0.87, category: 'giant', knownIssues: ['bloat', 'joint', 'heart'], bloatRisk: 'high', heartRisk: true },
  'Saint Bernard':       { sizeFactor: 0.87, category: 'giant', knownIssues: ['joint', 'heart', 'bloat'], bloatRisk: 'high', heartRisk: true },
  'Mastiff':             { sizeFactor: 0.87, category: 'giant', knownIssues: ['joint', 'bloat', 'weight'], bloatRisk: 'high' },
  'Cane Corso':          { sizeFactor: 0.88, category: 'giant', knownIssues: ['joint', 'bloat', 'heart'], bloatRisk: 'high', heartRisk: true },
  'Newfoundland':        { sizeFactor: 0.87, category: 'giant', knownIssues: ['joint', 'heart', 'weight'], heartRisk: true },
  'Bernese Mountain Dog':{ sizeFactor: 0.88, category: 'giant', knownIssues: ['joint', 'cancer', 'bloat'], bloatRisk: 'moderate' },
  'Irish Wolfhound':     { sizeFactor: 0.86, category: 'giant', knownIssues: ['bloat', 'heart', 'joint'], bloatRisk: 'high', heartRisk: true },
  'Leonberger':          { sizeFactor: 0.87, category: 'giant', knownIssues: ['joint', 'heart', 'bloat'], bloatRisk: 'high', heartRisk: true },
  'Tibetan Mastiff':     { sizeFactor: 0.88, category: 'giant', knownIssues: ['joint', 'bloat', 'thyroid'], bloatRisk: 'moderate' },
  'Anatolian Shepherd':  { sizeFactor: 0.88, category: 'giant', knownIssues: ['joint', 'bloat'], bloatRisk: 'moderate' },
  'Dogue de Bordeaux':   { sizeFactor: 0.87, category: 'giant', knownIssues: ['bloat', 'joint', 'heart'], bloatRisk: 'high', heartRisk: true, brachycephalic: true },
  // ── LARGE BREEDS ──────────────────────────────────────────────────────────
  'Rottweiler':          { sizeFactor: 0.90, category: 'large', knownIssues: ['joint', 'bloat', 'heart'], bloatRisk: 'moderate', heartRisk: true },
  'German Shepherd':     { sizeFactor: 0.92, category: 'large', knownIssues: ['joint', 'digestion', 'bloat'], bloatRisk: 'moderate' },
  'Golden Retriever':    { sizeFactor: 0.92, category: 'large', knownIssues: ['joint', 'coat', 'cancer', 'heart'], heartRisk: true },
  'Labrador Retriever':  { sizeFactor: 0.91, category: 'large', knownIssues: ['weight', 'joint', 'digestion'], specialMetabolism: 'slow' },
  'Siberian Husky':      { sizeFactor: 0.88, category: 'large', knownIssues: ['coat', 'eye', 'zinc'], specialMetabolism: 'efficient' },
  'Alaskan Malamute':    { sizeFactor: 0.88, category: 'large', knownIssues: ['coat', 'joint', 'zinc'], specialMetabolism: 'efficient' },
  'Doberman Pinscher':   { sizeFactor: 0.92, category: 'large', knownIssues: ['heart', 'joint', 'bloat'], heartRisk: true, bloatRisk: 'moderate' },
  'Boxer':               { sizeFactor: 0.91, category: 'large', knownIssues: ['bloat', 'heart', 'cancer'], bloatRisk: 'high', heartRisk: true, brachycephalic: true },
  'Weimaraner':          { sizeFactor: 0.94, category: 'large', knownIssues: ['bloat', 'joint'], bloatRisk: 'high', specialMetabolism: 'high-burn' },
  'Vizsla':              { sizeFactor: 0.96, category: 'large', knownIssues: ['joint', 'skin'], specialMetabolism: 'high-burn' },
  'German Shorthaired Pointer': { sizeFactor: 0.97, category: 'large', knownIssues: ['joint', 'bloat'], bloatRisk: 'moderate', specialMetabolism: 'high-burn' },
  'Rhodesian Ridgeback': { sizeFactor: 0.93, category: 'large', knownIssues: ['joint', 'bloat'], bloatRisk: 'moderate' },
  'Akita':               { sizeFactor: 0.91, category: 'large', knownIssues: ['joint', 'bloat', 'immune'], bloatRisk: 'moderate' },
  'Chow Chow':           { sizeFactor: 0.90, category: 'large', knownIssues: ['weight', 'joint', 'skin'], specialMetabolism: 'slow' },
  'Bloodhound':          { sizeFactor: 0.90, category: 'large', knownIssues: ['bloat', 'joint', 'ear'], bloatRisk: 'high' },
  'Irish Setter':        { sizeFactor: 0.93, category: 'large', knownIssues: ['bloat', 'joint', 'coat'], bloatRisk: 'high' },
  'Flat-Coated Retriever':{ sizeFactor: 0.93, category: 'large', knownIssues: ['cancer', 'joint', 'bloat'], bloatRisk: 'moderate' },
  'Standard Poodle':     { sizeFactor: 0.94, category: 'large', knownIssues: ['bloat', 'coat', 'joint'], bloatRisk: 'moderate' },
  'Poodle (Standard)':   { sizeFactor: 0.94, category: 'large', knownIssues: ['bloat', 'coat', 'joint'], bloatRisk: 'moderate' },
  // ── MEDIUM BREEDS ─────────────────────────────────────────────────────────
  'Border Collie':       { sizeFactor: 0.98, category: 'medium', knownIssues: ['joint', 'eye'], specialMetabolism: 'high-burn' },
  'Australian Shepherd': { sizeFactor: 0.97, category: 'medium', knownIssues: ['joint', 'eye', 'mdr1'] },
  'Bulldog':             { sizeFactor: 0.88, category: 'medium', knownIssues: ['weight', 'joint', 'skin', 'digestion'], specialMetabolism: 'slow', brachycephalic: true },
  'English Bulldog':     { sizeFactor: 0.88, category: 'medium', knownIssues: ['weight', 'joint', 'skin', 'digestion'], specialMetabolism: 'slow', brachycephalic: true },
  'Beagle':              { sizeFactor: 0.91, category: 'medium', knownIssues: ['weight', 'digestion', 'ear'], specialMetabolism: 'slow' },
  'Cocker Spaniel':      { sizeFactor: 0.97, category: 'medium', knownIssues: ['ear', 'coat', 'weight', 'eye'] },
  'Springer Spaniel':    { sizeFactor: 0.97, category: 'medium', knownIssues: ['ear', 'coat', 'joint'] },
  'Brittany Spaniel':    { sizeFactor: 0.98, category: 'medium', knownIssues: ['joint', 'coat'], specialMetabolism: 'high-burn' },
  'Shetland Sheepdog':   { sizeFactor: 0.99, category: 'medium', knownIssues: ['coat', 'eye', 'joint'] },
  'Collie':              { sizeFactor: 0.96, category: 'medium', knownIssues: ['eye', 'joint', 'mdr1'] },
  'Samoyed':             { sizeFactor: 0.95, category: 'medium', knownIssues: ['coat', 'joint', 'eye'] },
  'Keeshond':            { sizeFactor: 0.97, category: 'medium', knownIssues: ['coat', 'heart', 'joint'] },
  'Basenji':             { sizeFactor: 1.00, category: 'medium', knownIssues: ['digestion', 'eye'] },
  'Whippet':             { sizeFactor: 0.99, category: 'medium', knownIssues: ['joint', 'skin'], specialMetabolism: 'high-burn' },
  'Staffordshire Bull Terrier': { sizeFactor: 0.96, category: 'medium', knownIssues: ['skin', 'joint', 'weight'] },
  'American Staffordshire Terrier': { sizeFactor: 0.95, category: 'medium', knownIssues: ['skin', 'joint', 'heart'] },
  'Bull Terrier':        { sizeFactor: 0.94, category: 'medium', knownIssues: ['skin', 'kidney', 'heart'] },
  'Dalmatian':           { sizeFactor: 0.97, category: 'medium', knownIssues: ['urate stones', 'digestion', 'skin'] },
  'Basset Hound':        { sizeFactor: 0.90, category: 'medium', knownIssues: ['weight', 'joint', 'ear'], specialMetabolism: 'slow', spinalRisk: true },
  'Pembroke Welsh Corgi':{ sizeFactor: 0.91, category: 'medium', knownIssues: ['weight', 'joint', 'back'], spinalRisk: true },
  'Cardigan Welsh Corgi':{ sizeFactor: 0.91, category: 'medium', knownIssues: ['weight', 'joint', 'back'], spinalRisk: true },
  // ── SMALL BREEDS ──────────────────────────────────────────────────────────
  'Shih Tzu':            { sizeFactor: 1.03, category: 'small', knownIssues: ['skin', 'coat', 'digestion', 'eye'], brachycephalic: true },
  'Dachshund':           { sizeFactor: 1.00, category: 'small', knownIssues: ['weight', 'joint', 'back'], spinalRisk: true },
  'French Bulldog':      { sizeFactor: 0.91, category: 'small', knownIssues: ['weight', 'skin', 'digestion', 'joint'], specialMetabolism: 'slow', brachycephalic: true },
  'Pug':                 { sizeFactor: 0.88, category: 'small', knownIssues: ['weight', 'skin', 'joint', 'eye'], specialMetabolism: 'slow', brachycephalic: true },
  'Boston Terrier':      { sizeFactor: 0.97, category: 'small', knownIssues: ['digestion', 'eye', 'joint'], brachycephalic: true },
  'Cavalier King Charles Spaniel': { sizeFactor: 0.98, category: 'small', knownIssues: ['heart', 'joint', 'ear'], heartRisk: true },
  'Miniature Schnauzer': { sizeFactor: 0.99, category: 'small', knownIssues: ['weight', 'dental', 'pancreatitis'] },
  'West Highland White Terrier': { sizeFactor: 1.00, category: 'small', knownIssues: ['skin', 'digestion', 'joint'] },
  'Scottish Terrier':    { sizeFactor: 0.99, category: 'small', knownIssues: ['joint', 'skin', 'cancer'] },
  'Jack Russell Terrier':{ sizeFactor: 1.05, category: 'small', knownIssues: ['joint', 'eye'], specialMetabolism: 'high-burn' },
  'Miniature Pinscher':  { sizeFactor: 1.05, category: 'small', knownIssues: ['dental', 'joint', 'heart'], heartRisk: true },
  'Bichon Frise':        { sizeFactor: 1.02, category: 'small', knownIssues: ['skin', 'dental', 'bladder'] },
  'Lhasa Apso':          { sizeFactor: 1.02, category: 'small', knownIssues: ['skin', 'eye', 'kidney'] },
  'Maltese':             { sizeFactor: 1.10, category: 'toy', knownIssues: ['dental', 'coat', 'digestion'] },
  'Havanese':            { sizeFactor: 1.05, category: 'small', knownIssues: ['coat', 'eye', 'joint'] },
  'Coton de Tulear':     { sizeFactor: 1.05, category: 'small', knownIssues: ['coat', 'eye', 'joint'] },
  // ── TOY BREEDS ────────────────────────────────────────────────────────────
  'Chihuahua':           { sizeFactor: 1.14, category: 'toy', knownIssues: ['dental', 'joint', 'hypoglycemia'], dentalRisk: true },
  'Yorkshire Terrier':   { sizeFactor: 1.13, category: 'toy', knownIssues: ['dental', 'coat', 'digestion', 'liver'], dentalRisk: true },
  'Pomeranian':          { sizeFactor: 1.12, category: 'toy', knownIssues: ['dental', 'coat', 'trachea'], dentalRisk: true },
  'Toy Poodle':          { sizeFactor: 1.12, category: 'toy', knownIssues: ['dental', 'coat', 'joint'], dentalRisk: true },
  'Poodle (Miniature/Toy)': { sizeFactor: 1.12, category: 'toy', knownIssues: ['dental', 'coat', 'joint'], dentalRisk: true },
  'Papillon':            { sizeFactor: 1.12, category: 'toy', knownIssues: ['dental', 'joint'], dentalRisk: true, specialMetabolism: 'high-burn' },
  'Italian Greyhound':   { sizeFactor: 1.10, category: 'toy', knownIssues: ['dental', 'joint', 'skin'], dentalRisk: true, specialMetabolism: 'high-burn' },
  'Affenpinscher':       { sizeFactor: 1.10, category: 'toy', knownIssues: ['dental', 'joint', 'trachea'], dentalRisk: true },
  'Brussels Griffon':    { sizeFactor: 1.10, category: 'toy', knownIssues: ['dental', 'eye', 'joint'], dentalRisk: true, brachycephalic: true },
  'Cavalier King Charles': { sizeFactor: 0.98, category: 'toy', knownIssues: ['heart', 'joint', 'ear'], heartRisk: true },
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

// ─── Breed size factor lookup — named breed first, weight fallback ────────────
function getBreedSizeFactor(weightKg: number, breedName?: string): {
  factor: number; category: string; knownIssues: string[];
  specialMetabolism?: string; bloatRisk?: string; heartRisk?: boolean;
  dentalRisk?: boolean; spinalRisk?: boolean; brachycephalic?: boolean;
} {
  if (breedName && BREED_METABOLIC_DATA[breedName]) {
    const d = BREED_METABOLIC_DATA[breedName];
    return {
      factor: d.sizeFactor, category: d.category, knownIssues: d.knownIssues,
      specialMetabolism: d.specialMetabolism, bloatRisk: d.bloatRisk,
      heartRisk: d.heartRisk, dentalRisk: d.dentalRisk,
      spinalRisk: d.spinalRisk, brachycephalic: d.brachycephalic,
    };
  }
  // Weight-based fallback with refined thresholds
  if (weightKg < 4.5)  return { factor: 1.16, category: 'toy',    knownIssues: ['dental', 'hypoglycemia'], dentalRisk: true };
  if (weightKg < 11)   return { factor: 1.10, category: 'small',  knownIssues: ['dental', 'joint'] };
  if (weightKg < 25)   return { factor: 1.00, category: 'medium', knownIssues: [] };
  if (weightKg < 40)   return { factor: 0.95, category: 'large',  knownIssues: ['joint', 'bloat'], bloatRisk: 'moderate' };
  return                      { factor: 0.88, category: 'giant',  knownIssues: ['joint', 'bloat', 'heart'], bloatRisk: 'high', heartRisk: true };
}

// ─── Breed-specific notes — 40+ breeds with precise, actionable guidance ─────
function getBreedNote(category: string, ageStage: string, breedName?: string, knownIssues?: string[]): string {
  const breedSpecificNotes: Record<string, string> = {
    // ── LARGE / GIANT ──────────────────────────────────────────────────────
    'Labrador Retriever':
      'Labs carry a POMC gene mutation that disables the "fullness" signal — they will always act hungry even when full. Weigh every meal on a kitchen scale and never free-feed. Swap 15% of the meal with steamed green beans to add volume without calories.',
    'Golden Retriever':
      'Goldens have a 60% lifetime cancer risk — the highest of any breed. Prioritize antioxidant-rich foods daily: blueberries, broccoli, spinach. Add 1 tsp wild salmon oil per 20 lbs for EPA/DHA to reduce systemic inflammation. Taurine supplementation is recommended for cardiac support.',
    'German Shepherd':
      'GSDs have a structurally sensitive large intestine and are prone to Exocrine Pancreatic Insufficiency (EPI). Feed at the same time every day, introduce new proteins over 10+ days, and include prebiotic fiber (pumpkin, chicory root) to support gut flora. Avoid high-fat meals.',
    'Siberian Husky':
      'Huskies have a documented "metabolic switch" — they can run 100+ miles on minimal calories by oxidizing fat differently than other breeds. They need 20–30% fewer calories than weight-matched dogs. Monitor BCS weekly; they hide weight loss under their thick double coat.',
    'Alaskan Malamute':
      'Malamutes share the Husky\'s efficient metabolism and are prone to zinc-responsive dermatosis — a condition where the skin cannot absorb zinc properly. Include zinc-rich foods (beef, lamb, pumpkin seeds) and consider a zinc methionine supplement. Avoid high-phytate grains that block zinc absorption.',
    'Doberman Pinscher':
      'Dobermans have the highest rate of Dilated Cardiomyopathy (DCM) of any breed — up to 58% are affected. Include taurine-rich foods (chicken hearts, beef heart) and L-carnitine daily. Avoid grain-free diets that may deplete taurine. Annual cardiac screening is essential.',
    'Boxer':
      'Boxers are prone to ARVC (Arrhythmogenic Right Ventricular Cardiomyopathy) and bloat. Always split into 2 meals minimum, never exercise within 1 hour of eating, and use a slow-feeder bowl. Include CoQ10 and taurine-rich organ meats for cardiac muscle support.',
    'Rottweiler':
      'Rottweilers have a high risk of osteosarcoma (bone cancer) and subaortic stenosis. Feed antioxidant-rich vegetables (blueberries, kale) and include vitamin E-rich foods. Avoid excess calcium supplementation — balanced whole food provides the right ratio.',
    'Great Dane':
      'Great Danes MUST eat from a raised bowl (elbow height) and rest 60 minutes after every meal — GDV (bloat) is the #1 killer of this breed. Never feed one large meal; split into 3 smaller portions. Avoid exercise, stress, and excitement around mealtimes.',
    'Saint Bernard':
      'Saint Bernards are prone to bloat and dilated cardiomyopathy. Feed 2–3 small meals daily from a raised bowl. Include taurine-rich foods (beef heart, chicken hearts) and omega-3s. Monitor weight carefully — obesity accelerates joint deterioration in this heavy breed.',
    'Bernese Mountain Dog':
      'Berners have a tragically short lifespan (7–8 years) largely due to histiocytic sarcoma. Maximize antioxidant intake: blueberries, turmeric (with black pepper for absorption), broccoli sprouts. Green-lipped mussel powder is highly effective for their joint issues.',
    'Irish Wolfhound':
      'IWHs have the shortest lifespan of any breed (6–8 years) and extremely high heart disease risk. Include taurine, L-carnitine, and CoQ10 daily. Feed from a raised bowl and split meals to reduce bloat risk. Prioritize easily digestible proteins to reduce digestive load.',
    'Weimaraner':
      'Weimaraners have one of the highest bloat rates of any breed. Always use a slow-feeder bowl, split into 2–3 meals, and enforce a 90-minute rest after eating. They are high-energy dogs — this plan accounts for their elevated caloric burn rate.',
    'Rhodesian Ridgeback':
      'Ridgebacks are athletic and lean by nature. Avoid overfeeding — they should have a visible waist and palpable ribs. Include joint support (glucosamine, omega-3s) as they age. They do well on high-protein, moderate-fat diets with minimal carbohydrates.',
    'Akita':
      'Akitas are prone to immune-mediated diseases and can be sensitive to certain proteins. Introduce new foods slowly. Include antioxidant-rich vegetables and omega-3s for immune modulation. Avoid high-purine foods if urate crystals are a concern.',
    'Chow Chow':
      'Chow Chows have a notably slow metabolism and gain weight easily. Reduce this plan\'s estimate by 10% and monitor weekly. Their thick coat masks weight changes — feel the ribs monthly. Include omega-3s for their dense double coat and skin health.',
    'Bloodhound':
      'Bloodhounds have deep chest anatomy that makes them extremely bloat-prone. Use a slow-feeder bowl, split into 3 meals, and enforce 90-minute post-meal rest. Their pendulous ears trap moisture — avoid high-sugar foods that promote yeast growth.',
    'Vizsla':
      'Vizslas are lean, high-energy sporting dogs with minimal body fat. They burn calories rapidly and need calorie-dense, high-protein meals. Include healthy fats (salmon oil, coconut oil) for sustained energy. They are sensitive to cold — adequate fat intake is critical in winter.',
    // ── MEDIUM ─────────────────────────────────────────────────────────────
    'Border Collie':
      'Border Collies are the highest-energy medium breed — working dogs can burn 3× their RER. This plan is calibrated for their activity level. Include complex carbohydrates (sweet potato, oats) for sustained glycogen and MCT fats for neurological function. They are prone to MDR1 gene sensitivity — avoid certain medications.',
    'Australian Shepherd':
      'Aussies carry the MDR1 gene mutation (drug sensitivity) in ~50% of the population. Nutritionally, they need antioxidant-rich foods for eye health (lutein, zeaxanthin from leafy greens) and omega-3s for their double coat. High-energy dogs — this plan reflects their active lifestyle.',
    'Bulldog':
      'Bulldogs have the slowest metabolism of any medium breed and gain weight with minimal overfeeding. Reduce this estimate by 10% and weigh weekly. Their skin folds require zinc-rich foods (beef, lamb) to prevent dermatitis. Use a slow-feeder bowl — their flat face makes them gulp air while eating.',
    'English Bulldog':
      'English Bulldogs have a slow metabolism and brachycephalic anatomy that causes them to swallow air while eating. Use a slow-feeder bowl, feed smaller portions 2–3x daily, and include zinc-rich foods for skin fold health. Avoid high-fat diets — they are extremely obesity-prone.',
    'Beagle':
      'Beagles are scent-driven food obsessives — they will eat until sick if given the chance. Weigh every meal precisely, use a slow-feeder bowl, and never leave food out. L-carnitine-rich foods (beef heart, lamb) help their sluggish metabolism burn fat more efficiently.',
    'Cocker Spaniel':
      'Cocker Spaniels are prone to ear infections (yeast-driven) and hypothyroidism. Reduce dietary sugar and starch to starve yeast. Include omega-3s for their silky coat and zinc for immune function. Their drop ears trap moisture — avoid high-sugar treats.',
    'Dalmatian':
      'Dalmatians have a unique purine metabolism defect — they cannot convert uric acid to allantoin, causing urate bladder stones. Feed a LOW-PURINE diet: avoid organ meats (liver, kidney), sardines, and anchovies. Lean chicken, turkey, and eggs are safe proteins. Ensure constant fresh water access.',
    'Basset Hound':
      'Basset Hounds have a very slow metabolism and are prone to obesity and spinal issues. Keep them lean — every extra pound adds significant pressure to their long spine. Use a raised bowl to reduce neck strain. Include glucosamine and omega-3s for spinal disc support.',
    'Pembroke Welsh Corgi':
      'Corgis are prone to degenerative myelopathy and weight gain. Keep them lean — excess weight accelerates spinal degeneration. Include collagen-rich foods (bone broth, chicken feet) for spinal disc support. Their herding instinct means they stay active — calibrate portions to actual activity.',
    'Shetland Sheepdog':
      'Shelties are prone to MDR1 gene sensitivity and eye conditions. Include lutein and zeaxanthin-rich foods (leafy greens, eggs) for eye health. Their double coat needs omega-3s and biotin. They are sensitive to sudden diet changes — transition new foods over 14 days.',
    'Whippet':
      'Whippets have almost zero body fat and feel the cold acutely. Include adequate healthy fats (salmon oil, coconut oil) for insulation and energy. They are sprint athletes — high-protein diets support their lean muscle mass. Avoid overfeeding — their slim build makes weight gain immediately visible.',
    'Staffordshire Bull Terrier':
      'Staffies are prone to skin allergies and atopic dermatitis. Include omega-3s (salmon oil) and zinc-rich foods (beef, lamb) for skin barrier function. Avoid chicken and grains if skin issues are present — try novel proteins like venison or duck. They are muscular dogs — high-protein diets support their build.',
    // ── SMALL ──────────────────────────────────────────────────────────────
    'French Bulldog':
      'Frenchies have a slow metabolism, brachycephalic anatomy, and are prone to skin fold dermatitis. Use a slow-feeder bowl to prevent air gulping. Include zinc-rich foods (beef, lamb) for skin fold health. Reduce portions by 10% from the estimate — they gain weight very easily.',
    'Pug':
      'Pugs are the most obesity-prone breed in the world. Even 1 lb overweight significantly worsens their breathing. Stick strictly to the calculated portion — no exceptions. Use a slow-feeder bowl. Include zinc for skin fold health and omega-3s for their wrinkled skin.',
    'Dachshund':
      'Dachshunds MUST stay lean — every extra pound increases IVDD (spinal disc disease) risk by 4×. Weigh food precisely and cut treats to under 5% of calories. Include collagen-rich foods (bone broth, chicken feet) for spinal disc support. Avoid jumping from furniture.',
    'Shih Tzu':
      'Shih Tzus are prone to bladder stones and skin fold infections. Include cranberry extract for urinary pH balance and omega-3s for skin health. Their brachycephalic anatomy means they swallow air — use a slow-feeder bowl. Avoid high-oxalate foods (spinach in excess) if bladder stones are a concern.',
    'Boston Terrier':
      'Boston Terriers are prone to flatulence and corneal ulcers. Include yucca schidigera extract or digestive enzymes to reduce gas. Use a slow-feeder bowl to prevent air gulping. Their prominent eyes are vulnerable — include lutein-rich foods (eggs, leafy greens) for eye protection.',
    'Cavalier King Charles Spaniel':
      'Cavaliers have a near-100% lifetime risk of Mitral Valve Disease (MVD). Include magnesium-rich foods (pumpkin seeds, spinach) and omega-3s for cardiac support. Avoid high-sodium foods. Taurine supplementation is recommended. Annual cardiac screening is essential from age 1.',
    'Cavalier King Charles':
      'Cavaliers have a near-100% lifetime risk of Mitral Valve Disease (MVD). Include magnesium-rich foods (pumpkin seeds, spinach) and omega-3s for cardiac support. Avoid high-sodium foods. Taurine supplementation is recommended. Annual cardiac screening is essential from age 1.',
    'Miniature Schnauzer':
      'Mini Schnauzers are prone to pancreatitis and hyperlipidemia (high blood triglycerides). Feed a LOW-FAT diet — keep fat under 15% of calories. Avoid fatty meats, cheese, and high-fat treats. Include fiber-rich foods (pumpkin, green beans) to slow fat absorption.',
    'West Highland White Terrier':
      'Westies are prone to Westie Lung Disease and skin allergies. Include omega-3s and zinc for skin barrier function. Avoid chicken and grains if skin issues are present — try novel proteins. Their white coat requires adequate biotin and sulfur amino acids (eggs, beef).',
    'Jack Russell Terrier':
      'Jack Russells are extremely high-energy for their size — they burn calories like a much larger dog. This plan reflects their elevated metabolic rate. Include complex carbohydrates for sustained energy and high-quality protein for their lean muscle mass.',
    'Bichon Frise':
      'Bichons are prone to bladder stones (calcium oxalate) and skin allergies. Include cranberry extract for urinary health and omega-3s for skin. Avoid high-oxalate foods (spinach, beets) if bladder stones are a concern. Their curly coat needs biotin and omega-6 fatty acids.',
    'Lhasa Apso':
      'Lhasa Apsos are prone to kidney disease and eye conditions. Include omega-3s for kidney support and lutein-rich foods for eye health. Avoid high-protein diets if kidney disease is diagnosed — consult your vet. Their long coat needs biotin and omega-6 fatty acids.',
    // ── TOY ────────────────────────────────────────────────────────────────
    'Chihuahua':
      'Chihuahuas can develop life-threatening hypoglycemia if meals are skipped — especially puppies. Feed 3 small meals daily at consistent times. Always have a small snack available. Their tiny mouths make dental disease nearly universal — add raw carrots or dental chews daily.',
    'Yorkshire Terrier':
      'Yorkies are prone to portosystemic shunts (liver bypass) and tracheal collapse. Feed small, frequent meals of easily digestible proteins. Avoid high-purine foods if liver shunt is suspected. Dental disease is critical — add raw carrots as treats. Their silky coat needs biotin and omega-6 fatty acids.',
    'Pomeranian':
      'Pomeranians are prone to Alopecia X (black skin disease) and tracheal collapse. Include omega-3s and biotin for their plush double coat. Feed small, frequent meals to prevent hypoglycemia. Their tiny trachea means they should not pull on a collar — use a harness.',
    'Maltese':
      'Maltese are prone to dental disease and digestive sensitivity. Feed small, consistent meals of easily digestible proteins. Add raw carrots for dental health. Their white coat requires adequate biotin and omega-6 fatty acids. Avoid sudden diet changes — transition over 14 days.',
    'Papillon':
      'Papillons are surprisingly athletic for their size and have high energy needs. Include complex carbohydrates for sustained energy. Their butterfly ears are prone to yeast — avoid high-sugar foods. Dental health is critical — add raw carrots or dental chews daily.',
    'Italian Greyhound':
      'Italian Greyhounds have almost no body fat and feel the cold intensely. Include adequate healthy fats for insulation. Their thin skin is prone to injury and their legs are fragile — avoid high-impact activities. Dental disease is nearly universal — add raw carrots daily.',
  };

  if (breedName && breedSpecificNotes[breedName]) {
    return breedSpecificNotes[breedName];
  }

  // ── Category + life-stage fallback notes ──────────────────────────────────
  const notes: Record<string, Record<string, string>> = {
    toy: {
      'puppy-early': 'Toy breed puppies need 4 small meals daily to prevent hypoglycemia — blood sugar crashes fast in tiny dogs. Never skip a meal. Use a puppy-specific formula with higher calcium-to-phosphorus ratio (1.2:1) for bone development.',
      'puppy-late': 'Toy breeds mature faster than large breeds — transition to adult portions around 9–10 months. Reduce meal frequency to 3x daily. Dental health starts now: add raw carrots as treats.',
      adult: 'Toy breeds have the fastest metabolisms of any size class. Weigh food precisely — even 10g extra per day adds 300g per month. Feed 3x daily to maintain stable blood sugar. Dental disease affects 80% of toy breeds by age 3.',
      senior: 'Senior toy breeds often live 14–18 years. Monitor weight monthly — metabolism slows with age. Add glucosamine and omega-3s after age 8. Dental care becomes critical — soft foods may be needed if teeth are lost.',
    },
    small: {
      'puppy-early': 'Small breed puppies grow quickly and need calcium-to-phosphorus balance (1.2:1) for proper bone development. Feed 3x daily. Avoid calcium supplements unless vet-prescribed — excess calcium causes skeletal abnormalities.',
      'puppy-late': 'Transition to adult feeding around 10–12 months. Reduce to 2–3 meals daily. Avoid overfeeding during the final growth phase — small breeds can become overweight quickly.',
      adult: 'Small breeds are prone to dental disease — add raw carrots or dental chews as treats. Feed 2–3 consistent meals daily. Include omega-3s for coat health and joint support.',
      senior: 'Small senior dogs often live to 14–16 years. Add glucosamine and omega-3s after age 8. Reduce calories by 10–15% as metabolism slows. Monitor dental health closely — tooth loss affects nutrition.',
    },
    medium: {
      'puppy-early': 'Medium breed puppies need balanced calcium and phosphorus for steady bone growth. Feed 3x daily. Avoid calcium supplements unless vet-prescribed. Keep growth steady — rapid growth causes joint problems.',
      'puppy-late': 'Transition to adult feeding at 12 months. Reduce to 2 meals daily. Avoid overfeeding during the rapid growth phase (4–8 months) — excess calories cause permanent joint damage.',
      adult: 'Medium breeds are the most metabolically versatile. This plan is well-calibrated for your dog\'s size and activity level. Feed 2 consistent meals daily and monitor weight monthly.',
      senior: 'Senior medium dogs benefit from 10–15% fewer calories and added joint support (omega-3s, glucosamine) after age 7. Include antioxidant-rich vegetables for cellular health.',
    },
    large: {
      'puppy-early': 'Large breed puppies must NOT be overfed — excess calories cause rapid bone growth and permanent joint damage (OCD, hip dysplasia). Keep them lean. Feed 3x daily. Use large-breed puppy formula with controlled calcium levels.',
      'puppy-late': 'Keep large breed puppies lean during growth. Transition to adult feeding at 12–18 months. Avoid high-calcium supplements — balanced whole food provides the right ratio. Monitor growth rate — too fast is harmful.',
      adult: 'Large breeds are prone to bloat (GDV) — always split into 2 meals and wait 60 minutes after eating before exercise. Use a slow-feeder bowl. Include glucosamine and omega-3s for joint health.',
      senior: 'Large senior dogs (7+) need joint support (glucosamine, omega-3s) and 10–15% fewer calories. Include easily digestible proteins. Monitor for cognitive decline — omega-3s and antioxidants support brain health.',
    },
    giant: {
      'puppy-early': 'Giant breed puppies need strict calorie control — overfeeding causes irreversible joint damage. Keep growth slow and steady. Feed 3x daily from a raised bowl. Use giant-breed puppy formula with controlled calcium (0.7–1.2% DM).',
      'puppy-late': 'Giant breeds mature slowly (18–24 months). Keep them lean throughout the entire growth period. Transition to adult feeding at 18 months. Avoid any calcium supplementation.',
      adult: 'Giant breeds are highly prone to bloat (GDV) — always split into 3 meals, use a slow-feeder raised bowl, and enforce 90-minute post-meal rest. Include taurine and omega-3s for cardiac health.',
      senior: 'Giant senior dogs age faster (from ~6 years). Prioritize joint health (glucosamine, green-lipped mussel), easy-digest proteins, and omega-3 fatty acids. Include antioxidants for cancer prevention.',
    },
  };
  return notes[category]?.[ageStage] ?? 'Monitor your dog\'s weight monthly and adjust portions by 5–10% based on body condition score.';
}

// ─── Health advice — deeply expanded, age-aware, weight-aware ────────────────
function getHealthAdvice(healthFocus: string, ageStage: string, weightKg: number): HealthAdvice {
  // Dose helper: scales supplement amounts to dog's weight
  const salmonOilDose = weightKg < 5 ? '1/8 tsp' : weightKg < 15 ? '1/4 tsp' : weightKg < 30 ? '1/2 tsp' : '1 tsp';
  const pumpkinDose   = weightKg < 10 ? '1 tsp' : weightKg < 25 ? '1 tbsp' : '2 tbsp';
  const brothDose     = weightKg < 10 ? '2 tbsp' : weightKg < 30 ? '1/4 cup' : '1/2 cup';

  const adviceMap: Record<string, HealthAdvice> = {

    // ── JOINTS & MOBILITY ──────────────────────────────────────────────────
    'Joints & Mobility Support': {
      title: 'Joint & Mobility Nutrition',
      tips: [
        `Add ${salmonOilDose} wild salmon oil daily — EPA/DHA omega-3s are clinically proven to reduce canine joint inflammation within 4–6 weeks.`,
        `Add ${brothDose} slow-simmered bone broth (no onion/garlic) 3–4x per week — natural source of type II collagen, glucosamine, and chondroitin.`,
        'Keep weight at the lower end of the healthy range — every extra 1 kg adds 4× the pressure on hip and knee joints.',
        'Green-lipped mussel powder (GLM) is the most bioavailable natural source of glucosamine and chondroitin — more effective than synthetic supplements.',
        'Avoid high-starch carbohydrates (white rice, corn, potato) in excess — they spike insulin and increase systemic pro-inflammatory cytokines.',
        ageStage === 'senior' ? 'Senior dogs with arthritis benefit from 3 smaller meals daily — lying down after a large meal is uncomfortable with joint pain.' : 'Start joint support before symptoms appear — prevention is far more effective than treatment.',
      ],
      avoidFoods: ['corn', 'white rice in excess', 'processed treats with sugar', 'nightshade vegetables (tomato, potato) in large amounts'],
      keyNutrients: [
        { name: 'Omega-3 EPA/DHA', reason: 'Inhibits COX-2 inflammatory enzymes — same mechanism as NSAIDs but without side effects', foods: ['wild salmon', 'sardines in water', 'mackerel', 'salmon oil'] },
        { name: 'Glucosamine HCl', reason: 'Stimulates chondrocyte production to rebuild cartilage matrix', foods: ['chicken feet', 'beef trachea', 'bone broth', 'green-lipped mussel'] },
        { name: 'Chondroitin Sulfate', reason: 'Inhibits cartilage-degrading enzymes and retains water in joint cartilage', foods: ['bone broth', 'trachea', 'green-lipped mussel powder'] },
        { name: 'Vitamin C', reason: 'Essential cofactor for collagen cross-linking in connective tissue', foods: ['bell peppers', 'broccoli', 'parsley', 'rosehip'] },
        { name: 'Manganese', reason: 'Activates enzymes required for cartilage proteoglycan synthesis', foods: ['green-lipped mussels', 'pumpkin seeds', 'spinach', 'oats'] },
        { name: 'Boron', reason: 'Reduces urinary calcium loss and supports bone mineral density', foods: ['apples', 'pears', 'leafy greens'] },
      ],
    },

    // ── SKIN & COAT ────────────────────────────────────────────────────────
    'Skin & Shiny Coat Vitality': {
      title: 'Skin & Coat Nutrition',
      tips: [
        `Add ${salmonOilDose} wild salmon oil or sardine oil daily — the single most effective dietary intervention for coat shine and skin health. Visible improvement in 3–4 weeks.`,
        'Include 1 whole egg (raw or lightly cooked) 3–4x per week — biotin, sulfur amino acids (methionine, cystine), and lecithin for keratin production.',
        'Zinc from red meat (beef, lamb) is essential for skin barrier function — zinc deficiency causes dull coat, flaking, and slow wound healing.',
        'If your dog has itchy skin, eliminate chicken for 8 weeks — poultry is the #1 canine food allergen and the most common cause of dietary skin reactions.',
        'Rotate proteins every 4–6 weeks — single-protein diets increase sensitization risk over time.',
        'Avoid corn, soy, and artificial preservatives (BHA, BHT, ethoxyquin) — all are documented skin irritants in sensitive dogs.',
      ],
      avoidFoods: ['chicken (if itchy or scratching)', 'corn', 'soy', 'artificial preservatives (BHA/BHT)', 'high-sugar treats'],
      keyNutrients: [
        { name: 'Omega-3 EPA/DHA', reason: 'Reduces skin inflammation, itching, and transepidermal water loss', foods: ['wild salmon', 'mackerel', 'sardines', 'salmon oil'] },
        { name: 'Omega-6 Linoleic Acid', reason: 'Maintains the skin\'s moisture barrier and prevents dry, flaky skin', foods: ['sunflower oil', 'hemp seeds', 'chicken fat', 'evening primrose oil'] },
        { name: 'Biotin (B7)', reason: 'Rate-limiting cofactor for keratin synthesis — deficiency causes brittle coat and hair loss', foods: ['eggs', 'beef liver', 'sweet potato', 'salmon'] },
        { name: 'Zinc', reason: 'Regulates skin cell turnover, immune function, and sebaceous gland activity', foods: ['beef', 'lamb', 'pumpkin seeds', 'oysters'] },
        { name: 'Vitamin E', reason: 'Antioxidant that protects skin cell membranes from UV and oxidative damage', foods: ['sunflower seeds', 'almonds (unsalted)', 'spinach', 'wheat germ oil'] },
        { name: 'Sulfur Amino Acids', reason: 'Methionine and cystine are the structural building blocks of keratin (hair/coat)', foods: ['eggs', 'beef', 'turkey', 'fish'] },
      ],
    },

    // ── DIGESTION & GUT ────────────────────────────────────────────────────
    'Sensitive Digestion & Gut Health': {
      title: 'Digestive Health Nutrition',
      tips: [
        'Feed at the exact same time every day — the gut microbiome operates on a circadian rhythm and irregular feeding disrupts digestive enzyme secretion.',
        `Add ${pumpkinDose} plain pumpkin purée per meal — soluble pectin fiber feeds beneficial Lactobacillus bacteria and regulates both loose and firm stools.`,
        'Introduce any new food over 10–14 days (not 7) — the gut microbiome needs time to produce the right enzymes for new protein sources.',
        `Add ${brothDose} plain bone broth per meal — glutamine in broth seals leaky gut junctions and soothes inflamed intestinal lining.`,
        'Include 1 tbsp plain kefir or raw goat milk 3–4x per week — live Lactobacillus and Bifidobacterium strains restore healthy gut flora.',
        'Avoid high-fat meals — fat slows gastric emptying and can trigger pancreatitis in sensitive dogs.',
      ],
      avoidFoods: ['dairy (except plain kefir/goat milk)', 'fatty meats (>20% fat)', 'raw bones if new to raw', 'high-fat treats', 'sudden protein changes'],
      keyNutrients: [
        { name: 'Soluble Fiber (Pectin/FOS)', reason: 'Prebiotic fuel for Lactobacillus and Bifidobacterium — firms loose stools and softens hard ones', foods: ['pumpkin', 'sweet potato', 'oats', 'chicory root'] },
        { name: 'Probiotics (Live Cultures)', reason: 'Restores healthy gut microbiome diversity after antibiotics, stress, or diet changes', foods: ['plain kefir', 'raw goat milk', 'fermented vegetables', 'green tripe'] },
        { name: 'L-Glutamine', reason: 'Primary fuel for intestinal epithelial cells — repairs and seals leaky gut junctions', foods: ['bone broth', 'beef', 'eggs', 'cabbage juice'] },
        { name: 'Digestive Enzymes', reason: 'Amylase, protease, and lipase improve nutrient absorption and reduce fermentation gas', foods: ['green tripe', 'raw pineapple (bromelain)', 'raw papaya (papain)', 'fermented foods'] },
        { name: 'Zinc-L-Carnosine', reason: 'Protects gastric mucosa and accelerates healing of stomach lining ulcerations', foods: ['beef', 'chicken', 'pork'] },
        { name: 'Slippery Elm Bark', reason: 'Mucilage coats and soothes inflamed intestinal walls — safe for dogs', foods: ['slippery elm powder (supplement)'] },
      ],
    },

    // ── WEIGHT MANAGEMENT ─────────────────────────────────────────────────
    'Metabolic Weight Management': {
      title: 'Weight Management Nutrition',
      tips: [
        'Weigh every meal on a kitchen scale — measuring cups are inaccurate by 20–30% due to density variation. This single change is the most impactful.',
        `Replace 20–25% of the meal volume with steamed green beans, zucchini, or broccoli — adds bulk and satiety with almost zero calories (${weightKg < 15 ? '30–50g' : '80–120g'} per meal).`,
        'Feed 2 meals at fixed times daily — free-feeding and irregular timing disrupts leptin and ghrelin (hunger hormones) and causes chronic overeating.',
        'Cut treats to under 5% of daily calories during weight loss — a single commercial treat can be 50–100 kcal, wiping out an entire day\'s deficit.',
        'Weigh your dog weekly at the same time of day — target 0.5–1% body weight loss per week. Faster loss causes muscle wasting.',
        'Add L-carnitine-rich foods (beef heart, lamb) — L-carnitine is the transport molecule that moves fatty acids into mitochondria for burning.',
      ],
      avoidFoods: ['high-fat meats (>20% fat)', 'cheese', 'peanut butter', 'commercial treats', 'table scraps', 'free-feeding'],
      keyNutrients: [
        { name: 'Lean Protein (>90% lean)', reason: 'Preserves lean muscle mass during calorie deficit — muscle burns 3× more calories than fat at rest', foods: ['turkey breast (93/7)', 'white fish (cod, tilapia)', 'chicken breast', 'egg whites'] },
        { name: 'L-Carnitine', reason: 'Transports long-chain fatty acids across the mitochondrial membrane for beta-oxidation (fat burning)', foods: ['beef heart', 'lamb', 'chicken', 'beef'] },
        { name: 'Soluble Fiber', reason: 'Slows gastric emptying, creates satiety, and feeds gut bacteria that produce appetite-suppressing short-chain fatty acids', foods: ['pumpkin', 'green beans', 'broccoli', 'oats'] },
        { name: 'B-Complex Vitamins', reason: 'Cofactors for every step of metabolic energy conversion — deficiency slows fat burning', foods: ['beef liver', 'eggs', 'sardines', 'turkey'] },
        { name: 'Chromium', reason: 'Enhances insulin sensitivity and improves glucose uptake into muscle cells', foods: ['beef', 'broccoli', 'green beans'] },
        { name: 'CLA (Conjugated Linoleic Acid)', reason: 'Reduces fat cell proliferation and promotes lean body composition', foods: ['grass-fed beef', 'lamb', 'full-fat dairy (small amounts)'] },
      ],
    },

    // ── HEART HEALTH ──────────────────────────────────────────────────────
    'Heart Health & Cardiac Support': {
      title: 'Cardiac Nutrition',
      tips: [
        `Add ${salmonOilDose} wild salmon oil daily — EPA/DHA omega-3s reduce cardiac inflammation, lower triglycerides, and improve heart rhythm stability.`,
        'Include taurine-rich foods 4–5x per week — taurine deficiency is directly linked to Dilated Cardiomyopathy (DCM) in dogs.',
        'Include L-carnitine-rich foods (beef heart, lamb) — L-carnitine is essential for cardiac muscle energy metabolism.',
        'Avoid high-sodium foods — excess sodium causes fluid retention and increases cardiac workload.',
        'Include CoQ10-rich foods (beef heart, sardines) — CoQ10 is the primary energy carrier in cardiac muscle cells.',
        'Avoid grain-free diets unless medically necessary — the FDA has linked grain-free diets to increased DCM risk in multiple breeds.',
      ],
      avoidFoods: ['high-sodium foods', 'processed meats', 'grain-free diets (unless vet-prescribed)', 'excess fat'],
      keyNutrients: [
        { name: 'Taurine', reason: 'Essential for cardiac muscle contraction — deficiency causes DCM (enlarged, weakened heart)', foods: ['chicken hearts', 'beef heart', 'dark turkey meat', 'clams'] },
        { name: 'L-Carnitine', reason: 'Transports fatty acids into cardiac mitochondria — heart muscle runs 70% on fat oxidation', foods: ['beef heart', 'lamb', 'beef', 'chicken'] },
        { name: 'Omega-3 EPA/DHA', reason: 'Reduces cardiac inflammation, lowers triglycerides, and stabilizes heart rhythm', foods: ['wild salmon', 'sardines', 'mackerel', 'salmon oil'] },
        { name: 'CoQ10 (Ubiquinol)', reason: 'Primary electron carrier in cardiac mitochondria — deficiency impairs heart energy production', foods: ['beef heart', 'sardines', 'mackerel', 'organ meats'] },
        { name: 'Magnesium', reason: 'Regulates cardiac electrical conduction and prevents arrhythmias', foods: ['pumpkin seeds', 'spinach', 'dark leafy greens', 'almonds'] },
        { name: 'Vitamin E', reason: 'Antioxidant protection for cardiac cell membranes against oxidative stress', foods: ['sunflower seeds', 'spinach', 'wheat germ oil'] },
      ],
    },

    // ── ALLERGY RELIEF ────────────────────────────────────────────────────
    'Allergy Relief & Immune Balance': {
      title: 'Allergy & Immune Nutrition',
      tips: [
        'Conduct a strict 8–12 week elimination diet with a single novel protein your dog has never eaten (venison, duck, rabbit, kangaroo) — this is the gold standard for identifying food allergies.',
        'Avoid the 6 most common canine allergens: chicken, beef, dairy, wheat, soy, and eggs — introduce them one at a time after the elimination period.',
        `Add ${salmonOilDose} salmon oil daily — EPA/DHA modulates the Th2 immune response that drives allergic reactions.`,
        'Include quercetin-rich foods (apples without seeds, blueberries) — quercetin is a natural antihistamine that stabilizes mast cells.',
        'Add ${pumpkinDose} pumpkin per meal — gut health is directly linked to immune regulation (70% of the immune system is in the gut).',
        'Avoid artificial colors, flavors, and preservatives — all are documented immune triggers in sensitive dogs.',
      ],
      avoidFoods: ['chicken', 'beef (during elimination)', 'dairy', 'wheat/grains', 'soy', 'corn', 'artificial additives'],
      keyNutrients: [
        { name: 'Novel Protein', reason: 'Eliminates immune sensitization to common proteins — allows gut and immune system to reset', foods: ['venison', 'duck', 'rabbit', 'kangaroo', 'wild boar'] },
        { name: 'Omega-3 EPA/DHA', reason: 'Modulates Th2 immune response and reduces IgE-mediated allergic reactions', foods: ['wild salmon', 'sardines', 'mackerel', 'salmon oil'] },
        { name: 'Quercetin', reason: 'Natural mast cell stabilizer — prevents histamine release that causes itching and inflammation', foods: ['apples (no seeds)', 'blueberries', 'broccoli', 'capers'] },
        { name: 'Vitamin D3', reason: 'Regulates T-regulatory cells that prevent immune overreaction to harmless proteins', foods: ['wild salmon', 'sardines', 'egg yolks', 'beef liver'] },
        { name: 'Probiotics', reason: 'Restores gut microbiome diversity — dysbiosis is a primary driver of food sensitivities', foods: ['plain kefir', 'raw goat milk', 'fermented vegetables'] },
        { name: 'Zinc', reason: 'Essential for T-cell development and skin barrier integrity — deficiency worsens allergic skin reactions', foods: ['beef', 'lamb', 'pumpkin seeds', 'oysters'] },
      ],
    },

    // ── LONGEVITY & GENERAL ───────────────────────────────────────────────
    'General Longevity & Health': {
      title: 'General Health & Longevity',
      tips: [
        'Rotate proteins every 3–4 weeks — chicken → turkey → beef → salmon → lamb — to ensure a complete amino acid and mineral spectrum and prevent sensitization.',
        'Add organ meat (liver, heart, kidney) 1–2x per week at 5–10% of the meal — it is the most nutrient-dense food on earth, containing 10–100× the vitamins of muscle meat.',
        'Include antioxidant-rich vegetables daily: blueberries (anthocyanins), broccoli (sulforaphane), spinach (lutein) — all proven to reduce oxidative DNA damage.',
        `Add ${salmonOilDose} salmon oil daily — omega-3s support brain, heart, immune, and joint health simultaneously.`,
        'Fresh filtered water should always be available — dehydration is the most overlooked health factor and causes kidney stress, constipation, and lethargy.',
        ageStage === 'senior' ? 'Senior dogs benefit from 3 smaller meals daily — easier on digestion and maintains stable blood sugar throughout the day.' : 'Feed 2 consistent meals daily at the same time — routine supports digestive enzyme secretion and circadian health.',
      ],
      avoidFoods: ['onion & garlic (all forms)', 'grapes & raisins', 'xylitol (in any amount)', 'macadamia nuts', 'chocolate', 'avocado (flesh & pit)', 'raw yeast dough'],
      keyNutrients: [
        { name: 'Complete Protein', reason: 'All 10 essential amino acids for continuous cell repair, enzyme production, and immune function', foods: ['eggs', 'beef', 'salmon', 'turkey', 'lamb'] },
        { name: 'Antioxidants (Polyphenols)', reason: 'Neutralize free radicals that cause DNA damage, cellular aging, and cancer initiation', foods: ['blueberries', 'spinach', 'broccoli', 'turmeric', 'rosemary'] },
        { name: 'Omega-3 EPA/DHA', reason: 'Supports brain neuroplasticity, cardiac rhythm, immune modulation, and joint lubrication', foods: ['wild salmon', 'sardines', 'mackerel', 'salmon oil'] },
        { name: 'Organ Meats', reason: 'Nature\'s multivitamin — liver alone contains 10–100× the vitamins A, B12, iron, and copper of muscle meat', foods: ['beef liver', 'chicken hearts', 'beef kidney', 'chicken gizzards'] },
        { name: 'Vitamin D3', reason: 'Regulates calcium metabolism, immune function, and cancer cell apoptosis', foods: ['wild salmon', 'sardines', 'egg yolks', 'beef liver'] },
        { name: 'Selenium', reason: 'Cofactor for glutathione peroxidase — the body\'s primary antioxidant enzyme system', foods: ['Brazil nuts (1/week)', 'tuna', 'beef', 'turkey'] },
      ],
    },

    // ── PUPPY GROWTH ──────────────────────────────────────────────────────
    'Puppy Growth & Development': {
      title: 'Puppy Growth Nutrition',
      tips: [
        'Calcium-to-phosphorus ratio must be 1.2:1 to 1.4:1 — too much OR too little calcium causes permanent skeletal deformities in growing puppies.',
        'Never supplement calcium in puppies eating a balanced diet — excess calcium is more dangerous than deficiency during growth.',
        'DHA (omega-3) is critical for brain and retinal development — include salmon oil or sardines 3–4x per week.',
        'Feed 3–4 small meals daily for puppies under 6 months — their small stomachs cannot handle large meals and blood sugar drops quickly.',
        'Avoid high-calorie density foods for large/giant breed puppies — rapid growth causes OCD, hip dysplasia, and permanent joint damage.',
        'Transition to adult feeding gradually at 12 months (small/medium) or 18 months (large/giant).',
      ],
      avoidFoods: ['calcium supplements', 'high-fat adult formulas', 'raw bones (choking risk under 4 months)', 'high-sugar treats'],
      keyNutrients: [
        { name: 'DHA (Omega-3)', reason: 'Essential for brain neuron myelination and retinal photoreceptor development', foods: ['wild salmon', 'sardines', 'salmon oil', 'egg yolks'] },
        { name: 'Calcium (balanced)', reason: 'Bone mineralization — must be balanced with phosphorus at 1.2:1 ratio', foods: ['raw meaty bones', 'eggshell calcium', 'sardines with bones'] },
        { name: 'Phosphorus', reason: 'Bone matrix formation and cellular energy (ATP) production', foods: ['chicken', 'beef', 'fish', 'eggs'] },
        { name: 'Vitamin A', reason: 'Cell differentiation, immune development, and vision formation', foods: ['beef liver', 'egg yolks', 'sweet potato', 'carrots'] },
        { name: 'Zinc', reason: 'Immune system development and growth hormone receptor function', foods: ['beef', 'lamb', 'pumpkin seeds'] },
        { name: 'Iodine', reason: 'Thyroid hormone production that regulates growth rate and metabolism', foods: ['seaweed', 'fish', 'iodized salt (trace)'] },
      ],
    },

    // ── SENIOR VITALITY ───────────────────────────────────────────────────
    'Senior Vitality & Cognitive Health': {
      title: 'Senior Dog Nutrition',
      tips: [
        'Reduce calories by 10–20% from adult maintenance — senior metabolism slows significantly, but protein needs INCREASE (not decrease) to prevent muscle wasting.',
        `Add ${salmonOilDose} salmon oil daily — DHA is the primary structural fat in brain neurons and slows cognitive decline (Canine Cognitive Dysfunction).`,
        'Include medium-chain triglycerides (MCT oil, coconut oil) — MCTs provide ketone bodies that bypass glucose metabolism and directly fuel aging brain cells.',
        'Include antioxidants daily (blueberries, broccoli, turmeric) — oxidative stress is the primary driver of aging and cognitive decline.',
        'Feed 3 smaller meals daily — senior digestive systems have reduced enzyme output and absorb nutrients better from smaller, more frequent meals.',
        'Monitor kidney function annually — senior dogs are prone to CKD; if diagnosed, reduce phosphorus intake under vet guidance.',
      ],
      avoidFoods: ['high-phosphorus foods (if kidney disease)', 'high-sodium foods', 'high-fat meals', 'large single meals'],
      keyNutrients: [
        { name: 'DHA (Omega-3)', reason: 'Primary structural fat in brain neurons — slows Canine Cognitive Dysfunction (CCD)', foods: ['wild salmon', 'sardines', 'salmon oil', 'mackerel'] },
        { name: 'MCT (Medium-Chain Triglycerides)', reason: 'Converted to ketone bodies that fuel aging brain cells when glucose metabolism declines', foods: ['coconut oil (1/4 tsp per 10 lbs)', 'MCT oil'] },
        { name: 'High-Quality Protein', reason: 'Senior dogs need MORE protein (not less) to prevent sarcopenia (muscle wasting)', foods: ['eggs', 'wild salmon', 'turkey', 'beef'] },
        { name: 'Glucosamine + Chondroitin', reason: 'Slows cartilage degradation and reduces arthritis pain in senior joints', foods: ['chicken feet', 'bone broth', 'green-lipped mussel', 'trachea'] },
        { name: 'Antioxidants', reason: 'Neutralize the increased oxidative stress of aging — reduce cancer risk and slow cellular aging', foods: ['blueberries', 'spinach', 'broccoli', 'turmeric with black pepper'] },
        { name: 'B12 + Folate', reason: 'Senior dogs absorb B12 less efficiently — deficiency causes neurological symptoms and anemia', foods: ['beef liver', 'sardines', 'eggs', 'clams'] },
      ],
    },

    // ── ACTIVE / WORKING DOG ──────────────────────────────────────────────
    'Active Energy & Athletic Performance': {
      title: 'Athletic Performance Nutrition',
      tips: [
        'Working dogs need 2–3× their resting energy requirement — this plan is calibrated for your dog\'s activity level.',
        'Feed the larger meal 2 hours BEFORE exercise (not after) — dogs perform better with pre-loaded glycogen stores.',
        'Include complex carbohydrates (sweet potato, oats) for sustained glycogen — simple sugars cause energy spikes and crashes.',
        `Add ${salmonOilDose} salmon oil daily — EPA/DHA reduces exercise-induced muscle inflammation and speeds recovery.`,
        'Hydration is critical for working dogs — offer water every 20–30 minutes during activity. Dehydration reduces performance by 20%.',
        'Monitor body condition weekly — working dogs can lose weight rapidly. Adjust portions by 10% based on weekly BCS assessment.',
      ],
      avoidFoods: ['large meals before exercise', 'high-fat meals immediately post-exercise', 'simple sugars'],
      keyNutrients: [
        { name: 'High-Quality Protein (>30%)', reason: 'Supports muscle protein synthesis and repair after intense exercise', foods: ['beef', 'turkey', 'salmon', 'eggs', 'lamb'] },
        { name: 'Complex Carbohydrates', reason: 'Provides sustained glycogen for endurance — prevents mid-exercise energy crashes', foods: ['sweet potato', 'oats', 'brown rice', 'quinoa'] },
        { name: 'Omega-3 EPA/DHA', reason: 'Reduces exercise-induced muscle inflammation and speeds post-exercise recovery', foods: ['wild salmon', 'sardines', 'salmon oil'] },
        { name: 'Electrolytes (Na/K/Mg)', reason: 'Replaced during heavy sweating — deficiency causes muscle cramps and fatigue', foods: ['bone broth', 'coconut water (small amount)', 'leafy greens'] },
        { name: 'Iron + B12', reason: 'Oxygen transport to working muscles — deficiency causes rapid fatigue and poor endurance', foods: ['beef liver', 'beef', 'sardines', 'clams'] },
        { name: 'Antioxidants', reason: 'Neutralize exercise-generated free radicals that damage muscle cells', foods: ['blueberries', 'spinach', 'turmeric', 'vitamin E'] },
      ],
    },

  };

  // ── Age-aware fallback for unmatched health focus keys ────────────────────
  const seniorDefault: HealthAdvice = adviceMap['Senior Vitality & Cognitive Health'];
  const puppyDefault: HealthAdvice  = adviceMap['Puppy Growth & Development'];
  const generalDefault: HealthAdvice = adviceMap['General Longevity & Health'];

  if (adviceMap[healthFocus]) return adviceMap[healthFocus];
  if (ageStage === 'senior') return seniorDefault;
  if (ageStage === 'puppy-early' || ageStage === 'puppy-late') return puppyDefault;
  return generalDefault;
}

export function calculateCanineNutrition(input: DogProfileInput): NutritionResult {
  const weightKg = Math.max(1, input.weightLbs * 0.45359237);

  // ── NRC/AAFCO Resting Energy Requirement ─────────────────────────────────
  const rerKcal = Math.round(70 * Math.pow(weightKg, 0.75));

  // ── Breed-aware metabolic data ────────────────────────────────────────────
  const breedData = getBreedSizeFactor(weightKg, input.breed);
  const { factor: breedSizeFactor, category: breedCategory, knownIssues } = breedData;
  const isEfficientMetabolism = breedData.specialMetabolism === 'efficient'; // Husky, Malamute
  const isHighBurnMetabolism  = breedData.specialMetabolism === 'high-burn'; // Border Collie, Vizsla
  const isSlowMetabolism      = breedData.specialMetabolism === 'slow';      // Lab, Beagle, Bulldog
  const isBloatRisk           = breedData.bloatRisk === 'high' || breedData.bloatRisk === 'moderate';
  const isBrachycephalic      = breedData.brachycephalic === true;

  // ── Life stage multiplier (AAFCO/NRC) ────────────────────────────────────
  let lifeStageMultiplier: number;
  let mealsPerDay: number;

  switch (input.ageStage) {
    case 'puppy-early':
      // Giant breeds: slower growth target to prevent OCD/joint damage
      lifeStageMultiplier = breedCategory === 'giant' ? 2.4 : breedCategory === 'large' ? 2.8 : 3.0;
      mealsPerDay = breedCategory === 'toy' ? 4 : 3;
      break;
    case 'puppy-late':
      lifeStageMultiplier = breedCategory === 'giant' ? 1.7 : breedCategory === 'large' ? 1.9 : 2.0;
      mealsPerDay = 3;
      break;
    case 'adult': {
      const isNeutered = input.gender.includes('neutered') || input.gender.includes('spayed');
      // Efficient metabolisms (Husky/Malamute): 20% reduction
      // Slow metabolisms (Lab/Beagle/Bulldog): 10% reduction
      // High-burn (Border Collie/Vizsla): 10% increase
      let baseMultiplier = isNeutered ? 1.6 : 1.8;
      if (isEfficientMetabolism) baseMultiplier *= 0.80;
      else if (isSlowMetabolism) baseMultiplier *= 0.90;
      else if (isHighBurnMetabolism) baseMultiplier *= 1.10;
      lifeStageMultiplier = baseMultiplier;
      // Bloat-risk breeds: 3 meals instead of 2 for large/giant
      mealsPerDay = (isBloatRisk && (breedCategory === 'large' || breedCategory === 'giant')) ? 3 : 2;
      break;
    }
    case 'senior':
      // Giant breeds age faster — senior metabolism drops more
      lifeStageMultiplier = breedCategory === 'giant' ? 1.15 : breedCategory === 'large' ? 1.3 : 1.4;
      // Small/toy seniors benefit from 3 meals; large/giant stay at 2
      mealsPerDay = (breedCategory === 'toy' || breedCategory === 'small') ? 3 : 2;
      break;
    default:
      lifeStageMultiplier = 1.6;
      mealsPerDay = 2;
  }

  // ── Activity multiplier ───────────────────────────────────────────────────
  let activityMultiplier: number;
  switch (input.activityLevel) {
    case 'sedentary': activityMultiplier = 0.83; break;  // Couch dogs
    case 'moderate':  activityMultiplier = 1.00; break;  // 30–60 min/day
    case 'active':    activityMultiplier = 1.28; break;  // 60–120 min/day
    case 'working':   activityMultiplier = 1.60; break;  // Full working/sport dog
    default:          activityMultiplier = 1.00;
  }

  // ── BCS + Goal multiplier — 9-point scale, granular ──────────────────────
  let goalMultiplier = 1.0;
  const bcs = Number(input.bcs) || 5;
  if (bcs >= 9) {
    goalMultiplier = 0.65;       // Severely obese: aggressive reduction
  } else if (bcs === 8 || input.targetGoal === 'lose' && bcs >= 7) {
    goalMultiplier = 0.72;       // Obese: significant reduction
  } else if (bcs === 7 || input.targetGoal === 'lose') {
    goalMultiplier = 0.80;       // Overweight: moderate reduction
  } else if (bcs === 6) {
    goalMultiplier = 0.90;       // Slightly overweight: mild reduction
  } else if (bcs === 4) {
    goalMultiplier = 1.10;       // Slightly lean: mild increase
  } else if (bcs === 3 || input.targetGoal === 'gain') {
    goalMultiplier = 1.20;       // Lean: increase
  } else if (bcs <= 2) {
    goalMultiplier = 1.30;       // Underweight: significant increase
  }

  // ── MER: RER × lifeStage × activity × goal × breedSize ───────────────────
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
