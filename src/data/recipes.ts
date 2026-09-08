export interface RecipeIngredient {
  name: string;
  category: 'Muscle Meat' | 'Organ' | 'Raw Bone' | 'Vegetables & Greens' | 'Healthy Fats & Oils' | 'Natural Supplements';
  percentage: number; // percentage of total weight
  purpose: string;
  allergens?: string[];
  /** Amazon affiliate link shown as an inline Buy button next to this ingredient */
  affiliateUrl?: string;
}

export interface MealRecipe {
  id: string;
  name: string;
  dietType: 'fresh-cooked' | 'raw-barf' | 'superfood-topper';
  primaryProtein: 'Chicken' | 'Turkey' | 'Beef' | 'Salmon' | 'Lamb' | 'Venison';
  headline: string;
  description: string;
  macroProfile: {
    proteinPct: number;
    fatPct: number;
    carbsPct: number;
    moisturePct: number;
    fiberPct: number;
    caPhosphorusRatio: string;
    kcalPerGram: number;
  };
  ingredients: RecipeIngredient[];
  healthFocusMatches: string[];
  preparationNotes: string[];
}

export const RECIPES: MealRecipe[] = [
  // FRESH COOKED RECIPES
  {
    id: 'fresh-chicken-everyday',
    name: 'Gently Cooked Chicken, Rice & Pumpkin Bowl',
    dietType: 'fresh-cooked',
    primaryProtein: 'Chicken',
    headline: 'A simple chicken meal for everyday feeding.',
    description: 'Lean chicken, easy-to-digest rice, pumpkin, and green vegetables. Each ingredient is shown below with the amount to weigh for your dog.',
    macroProfile: { proteinPct: 46, fatPct: 29, carbsPct: 5, moisturePct: 73, fiberPct: 3, caPhosphorusRatio: '1.2 : 1', kcalPerGram: 1.25 },
    ingredients: [
      { name: 'Lean ground chicken', category: 'Muscle Meat', percentage: 62, purpose: 'Fresh lean protein base — high-quality amino acids for muscle maintenance', allergens: ['chicken', 'poultry'] },
      { name: 'Chicken hearts', category: 'Organ', percentage: 8, purpose: 'Natural taurine, CoQ10 & B12', allergens: ['chicken', 'poultry'], affiliateUrl: 'https://amzn.to/4ctpLUu' },
      { name: 'Cooked white rice', category: 'Vegetables & Greens', percentage: 12, purpose: 'Easy-digest carbohydrate base' },
      { name: 'Plain pumpkin purée', category: 'Vegetables & Greens', percentage: 10, purpose: 'Gentle fibre for digestion', affiliateUrl: 'https://amzn.to/4xINd8W' },
      { name: 'Steamed zucchini', category: 'Vegetables & Greens', percentage: 4, purpose: 'Hydration & potassium', affiliateUrl: 'https://amzn.to/4xPVcB1' },
      { name: 'Vitamins & Supplements', category: 'Natural Supplements', percentage: 4, purpose: 'Calcium & vitamin blend for homemade meals', affiliateUrl: 'https://amzn.to/4haNVWy' }
    ],
    healthFocusMatches: ['Sensitive Digestion', 'General Health', 'Weight Management'],
    preparationNotes: [
      'Cook the chicken and hearts in a pan until there is no pink meat left.',
      'Stir in the cooked rice, pumpkin, and finely chopped zucchini.',
      'Let the food cool, then mix in the dog-safe calcium and vitamin mix. Weigh the daily total and split it between today’s meals.'
    ]
  },
  {
    id: 'fresh-turkey-vitality',
    name: 'Gently Cooked Lean Turkey & Pumpkin Feast',
    dietType: 'fresh-cooked',
    primaryProtein: 'Turkey',
    headline: 'High-protein, easily digestible whole-food recipe ideal for sensitive stomachs & lean muscle maintenance.',
    description: 'Lean turkey with pumpkin, spinach, zucchini, and salmon oil. Each ingredient is shown below with the amount to weigh for your dog.',
    macroProfile: {
      proteinPct: 48,
      fatPct: 32,
      carbsPct: 3.5,
      moisturePct: 74,
      fiberPct: 2.8,
      caPhosphorusRatio: '1.25 : 1',
      kcalPerGram: 1.28
    },
    ingredients: [
      { name: 'USDA Lean Ground Turkey (93/7)', category: 'Muscle Meat', percentage: 65, purpose: 'Bioavailable protein, zinc & vitamin B6', allergens: ['turkey', 'poultry'] },
      { name: 'Organic Turkey Hearts & Gizzards', category: 'Organ', percentage: 10, purpose: 'Rich in taurine for cardiac muscle strength', allergens: ['turkey', 'poultry'] },
      { name: 'Pure Organic Pumpkin Puree', category: 'Vegetables & Greens', percentage: 10, purpose: 'Soluble fiber for GI health', affiliateUrl: 'https://amzn.to/4xINd8W' },
      { name: 'Baby Spinach & Steamed Zucchini', category: 'Vegetables & Greens', percentage: 8, purpose: 'Folate, lutein, and magnesium', affiliateUrl: 'https://amzn.to/4yqDq7u' },
      { name: 'Wild Alaskan Salmon Oil', category: 'Healthy Fats & Oils', percentage: 3, purpose: 'DHA/EPA Omega-3s for skin & joints', affiliateUrl: 'https://amzn.to/46HCJdW' },
      { name: 'Eggshell Calcium & Organic Kelp Blend', category: 'Natural Supplements', percentage: 4, purpose: 'Calcium & phosphorus balance for bones', affiliateUrl: 'https://amzn.to/4haNVWy' }
    ],
    healthFocusMatches: ['Sensitive Digestion', 'Weight Management', 'Longevity & Vitality'],
    preparationNotes: [
      'Gently simmer ground turkey and hearts in a skillet with 2 tbsp filtered water over low-medium heat until lightly cooked (160°F internal).',
      'Fold in pure pumpkin puree and finely chopped steamed vegetables.',
      'Allow mixture to cool completely to room temperature before stirring in wild salmon oil and mineral powder to preserve heat-sensitive omega-3 fatty acids.'
    ]
  },
  {
    id: 'fresh-beef-power',
    name: 'Grass-Fed Beef & Sweet Carrot Longevity Blend',
    dietType: 'fresh-cooked',
    primaryProtein: 'Beef',
    headline: 'Robust nutrient-dense red meat recipe engineered for active working dogs and lean muscle growth.',
    description: 'High-energy recipe featuring 85% lean grass-fed beef, beef liver, steamed carrots, and blueberry antioxidant infusion. Naturally rich in zinc, iron, and cellular peptides.',
    macroProfile: {
      proteinPct: 52,
      fatPct: 36,
      carbsPct: 2.8,
      moisturePct: 71,
      fiberPct: 2.2,
      caPhosphorusRatio: '1.3 : 1',
      kcalPerGram: 1.45
    },
    ingredients: [
      { name: 'Grass-Fed Ground Beef (85/15)', category: 'Muscle Meat', percentage: 65, purpose: 'High amino acid spectrum, iron & L-carnitine', allergens: ['beef'] },
      { name: 'Pasture-Raised Beef Liver', category: 'Organ', percentage: 8, purpose: 'Vitamin A, copper & B12', allergens: ['beef'], affiliateUrl: 'https://amzn.to/3Sz0bqy' },
      { name: 'Steamed Sweet Carrots & Kale', category: 'Vegetables & Greens', percentage: 12, purpose: 'Beta-carotene for eye and cellular health', affiliateUrl: 'https://amzn.to/4gWqwad' },
      { name: 'Wild Blueberries (Antioxidant Boost)', category: 'Vegetables & Greens', percentage: 5, purpose: 'Anthocyanins to combat oxidative stress' },
      { name: 'Cold-Pressed Virgin Flaxseed Oil', category: 'Healthy Fats & Oils', percentage: 4, purpose: 'ALA omega-3 for cell membranes', affiliateUrl: 'https://amzn.to/4xg6A8d' },
      { name: 'Seaweed Calcium & Mineral Blend', category: 'Natural Supplements', percentage: 6, purpose: 'Natural calcium & magnesium for bones', affiliateUrl: 'https://amzn.to/4gRALwj' }
    ],
    healthFocusMatches: ['Hip & Joint', 'Active Energy', 'Lean Muscle'],
    preparationNotes: [
      'Brown beef and liver over gentle heat until pinkness disappears.',
      'Add pureed carrots, kale, and crushed blueberries while warm.',
      'Portion into daily silicone pouches and refrigerate for up to 4 days, or freeze in 2-week batches.'
    ]
  },
  {
    id: 'fresh-salmon-dermacare',
    name: 'Wild Salmon & Sweet Potato Derma-Care Recipe',
    dietType: 'fresh-cooked',
    primaryProtein: 'Salmon',
    headline: 'Hypoallergenic, ultra-rich Omega-3 formula designed to soothe itchy skin and restore radiant coat shine.',
    description: 'Skin-soothing recipe packed with wild-caught Pacific salmon, Atlantic cod, steamed orange sweet potatoes, and organic turmeric root with black pepper extract.',
    macroProfile: {
      proteinPct: 46,
      fatPct: 34,
      carbsPct: 4.1,
      moisturePct: 75,
      fiberPct: 2.4,
      caPhosphorusRatio: '1.2 : 1',
      kcalPerGram: 1.32
    },
    ingredients: [
      { name: 'Wild-Caught Pacific Salmon & Cod Fillets', category: 'Muscle Meat', percentage: 70, purpose: 'Primary protein & omega-3 source — marine EPA & DHA', allergens: ['salmon', 'fish'] },
      { name: 'Organic Steamed Sweet Potato', category: 'Vegetables & Greens', percentage: 14, purpose: 'Gentle dietary fiber and potassium', affiliateUrl: 'https://amzn.to/4xYpMst' },
      { name: 'Finely Shredded Green Zucchini', category: 'Vegetables & Greens', percentage: 8, purpose: 'Hydration and phytonutrients', affiliateUrl: 'https://amzn.to/4xPVcB1' },
      { name: 'Virgin Coconut Oil & Golden Turmeric', category: 'Healthy Fats & Oils', percentage: 4, purpose: 'Curcumin anti-inflammatory & skin-soothing', affiliateUrl: 'https://amzn.to/46JlM2I' },
      { name: 'Ground Seaweed Calcium & Brewer\'s Yeast', category: 'Natural Supplements', percentage: 4, purpose: 'Natural B-complex and bone mineral support', affiliateUrl: 'https://amzn.to/4gRALwj' }
    ],
    healthFocusMatches: ['Skin & Anti-Itch', 'Allergy Relief', 'Heart Health'],
    preparationNotes: [
      'Steam salmon and cod gently at 145°F to preserve delicate omega fats.',
      'Blend with boiled sweet potato and zucchini into a palatable mash.',
      'Mix in coconut oil and turmeric after temperature drops under 100°F.'
    ]
  },

  // RAW BARF / PMR+ RECIPES
  {
    id: 'raw-barf-complete-beef',
    name: 'Ancestral BARF 80/10/10 Grass-Fed Beef & Bone',
    dietType: 'raw-barf',
    primaryProtein: 'Beef',
    headline: 'Veterinary-balanced Biologically Appropriate Raw Food (BARF) formula mimicking natural canine ancestral ecology.',
    description: '70% pasture-raised muscle meat, 10% raw soft edible bone, 10% secreting organs (liver & spleen/kidney), and 10% living organic plant matter and fermented probiotics.',
    macroProfile: {
      proteinPct: 56,
      fatPct: 35,
      carbsPct: 1.8,
      moisturePct: 69,
      fiberPct: 1.9,
      caPhosphorusRatio: '1.35 : 1',
      kcalPerGram: 1.55
    },
    ingredients: [
      { name: 'Raw Grass-Fed Beef Chuck & Heart', category: 'Muscle Meat', percentage: 65, purpose: 'Dense amino acids, zinc, iron & carnosine', allergens: ['beef'] },
      { name: 'Ground Soft Beef Rib Bone / Chicken Frames', category: 'Raw Bone', percentage: 10, purpose: 'Bio-available raw bone calcium and glucosamine', allergens: ['beef', 'bone'] },
      { name: 'Beef Liver (Secreting Organ 1)', category: 'Organ', percentage: 5, purpose: 'Vitamin A, copper & B12', allergens: ['beef'], affiliateUrl: 'https://amzn.to/3Sz0bqy' },
      { name: 'Beef Kidney or Spleen (Secreting Organ 2)', category: 'Organ', percentage: 5, purpose: 'Selenium, B-vitamins, and metabolic enzymes', allergens: ['beef'], affiliateUrl: 'https://amzn.to/4zVmeIy' },
      { name: 'Pureed Organic Leafy Greens & Cranberries', category: 'Vegetables & Greens', percentage: 10, purpose: 'Cellular enzymes, polyphenols, and urinary health' },
      { name: 'Green Tripe & Fermented Kefir / Raw Goat Milk', category: 'Natural Supplements', percentage: 5, purpose: 'Natural living digestive enzymes and probiotics', allergens: ['dairy'], affiliateUrl: 'https://amzn.to/3SrLyW0' }
    ],
    healthFocusMatches: ['Clean Teeth & Breath', 'Hip & Joint', 'Optimal Muscle Density'],
    preparationNotes: [
      'Source certified human-grade meats and freeze at -4°F for minimum 3 weeks before initial feeding if using wild or raw sourced proteins.',
      'Grind or finely dice muscle meat and organs. Soft edible raw bones should be finely ground for smaller dogs or served whole under direct supervision for experienced chewers.',
      'Thaw individual daily portions in the refrigerator 24 hours prior to feeding.'
    ]
  },
  {
    id: 'raw-barf-lamb-hypoallergenic',
    name: 'Novel Pasture Lamb & Green Tripe Raw Formula',
    dietType: 'raw-barf',
    primaryProtein: 'Lamb',
    headline: 'Hypoallergenic raw formula tailored for dogs with severe common poultry/beef sensitivities.',
    description: 'Pasture-grazed lamb muscle, lamb liver, edible lamb ribs, unbleached green tripe, and organic parsley antioxidant blend.',
    macroProfile: {
      proteinPct: 50,
      fatPct: 38,
      carbsPct: 1.5,
      moisturePct: 70,
      fiberPct: 1.6,
      caPhosphorusRatio: '1.3 : 1',
      kcalPerGram: 1.62
    },
    ingredients: [
      { name: 'Pasture Lamb Shoulder & Heart', category: 'Muscle Meat', percentage: 65, purpose: 'Novel protein, linoleic acid, and zinc', allergens: ['lamb'], affiliateUrl: 'https://amzn.to/4xELsJL' },
      { name: 'Ground Lamb Rib Bone', category: 'Raw Bone', percentage: 10, purpose: 'Natural calcium & bone marrow minerals', allergens: ['lamb', 'bone'] },
      { name: 'Lamb Liver & Kidney', category: 'Organ', percentage: 10, purpose: 'Endocrine and enzymatic organ support', allergens: ['lamb'], affiliateUrl: 'https://amzn.to/4yhHI0B' },
      { name: 'Raw Unbleached Green Tripe', category: 'Muscle Meat', percentage: 8, purpose: 'Rich in gastric digestive juices and lactobacillus', allergens: ['lamb'], affiliateUrl: 'https://amzn.to/3SrLyW0' },
      { name: 'Pureed Zucchini, Celery & Pumpkin Seeds', category: 'Vegetables & Greens', percentage: 7, purpose: 'Magnesium, zinc, and natural parasite control', affiliateUrl: 'https://amzn.to/4xPVcB1' }
    ],
    healthFocusMatches: ['Allergy Relief', 'Skin & Anti-Itch', 'Digestive Health'],
    preparationNotes: [
      'Maintain strict cold-chain food safety: wash stainless steel bowls and utensils in hot soapy water.',
      'Portion into sealed glass or silicone meal containers.'
    ]
  },

  // SUPERFOOD TOPPERS (25% or 50% addition to existing kibble/canned)
  {
    id: 'topper-gut-joint-shield',
    name: 'Bone Broth, Sardine & Pumpkin Superfood Topper',
    dietType: 'superfood-topper',
    primaryProtein: 'Salmon',
    headline: 'Budget-friendly 25%–50% nutritional upgrade that turns plain kibble into a functional longevity super-meal.',
    description: 'Concentrated slow-cooked collagen bone broth, Atlantic wild sardines, steamed pumpkin, and cold-pressed turmeric oil designed to be spooned over regular food.',
    macroProfile: {
      proteinPct: 45,
      fatPct: 30,
      carbsPct: 4.5,
      moisturePct: 82,
      fiberPct: 3.5,
      caPhosphorusRatio: '1.2 : 1',
      kcalPerGram: 0.95
    },
    ingredients: [
      { name: 'Slow-Simmered Grass-Fed Collagen Bone Broth', category: 'Natural Supplements', percentage: 40, purpose: 'Type II Collagen, chondroitin, and gut wall sealing', affiliateUrl: 'https://amzn.to/4zSd7Zb' },
      { name: 'Wild Canned Sardines in Water (No Salt)', category: 'Muscle Meat', percentage: 30, purpose: 'Omega-3 (EPA/DHA), CoQ10, and vitamin D', allergens: ['fish'], affiliateUrl: 'https://amzn.to/4xg3W2h' },
      { name: 'Organic Pumpkin Puree & Steamed Spinach', category: 'Vegetables & Greens', percentage: 20, purpose: 'Prebiotic fibers fueling healthy gut flora', affiliateUrl: 'https://amzn.to/4xINd8W' },
      { name: 'Unfiltered Raw Apple Cider Vinegar (with Mother)', category: 'Natural Supplements', percentage: 5, purpose: 'Digestive pH balance & enzyme activation', affiliateUrl: 'https://amzn.to/46Jlx7O' },
      { name: 'Golden Turmeric & Black Pepper Micro-Emulsion', category: 'Natural Supplements', percentage: 5, purpose: 'Curcumin joint anti-inflammatory & liver support', affiliateUrl: 'https://amzn.to/46JlM2I' }
    ],
    healthFocusMatches: ['Hip & Joint', 'Sensitive Digestion', 'Budget-Conscious Longevity'],
    preparationNotes: [
      'Reduce your dog\'s standard dry kibble portion by 25% or 50% by calories.',
      'Ladle the warm topper over the remaining kibble and stir well to hydrate and release aroma.',
      'Store batch in a glass mason jar in the fridge for up to 6 days.'
    ]
  },

  // ── ADDITIONAL FRESH-COOKED RECIPES ──────────────────────────────────────

  {
    id: 'fresh-lamb-allergy',
    name: 'Novel Lamb & Butternut Squash Allergy-Relief Bowl',
    dietType: 'fresh-cooked',
    primaryProtein: 'Lamb',
    headline: 'Single novel protein recipe for dogs with chicken, beef, or fish allergies — gentle, hypoallergenic, and complete.',
    description: 'Pasture-raised ground lamb with butternut squash, steamed zucchini, and a mineral blend. Lamb is a true novel protein for most dogs, making it ideal for elimination diets and allergy management.',
    macroProfile: {
      proteinPct: 47,
      fatPct: 33,
      carbsPct: 4.2,
      moisturePct: 72,
      fiberPct: 2.6,
      caPhosphorusRatio: '1.25 : 1',
      kcalPerGram: 1.35
    },
    ingredients: [
      { name: 'Pasture-Raised Ground Lamb (85/15)', category: 'Muscle Meat', percentage: 62, purpose: 'Novel protein — linoleic acid, zinc, and iron for skin and immune health', allergens: ['lamb'] },
      { name: 'Lamb Heart (Organ)', category: 'Organ', percentage: 8, purpose: 'Taurine, CoQ10, and B-vitamins for cardiac and cellular health', allergens: ['lamb'] },
      { name: 'Steamed Butternut Squash', category: 'Vegetables & Greens', percentage: 14, purpose: 'Beta-carotene, potassium, and gentle soluble fiber', affiliateUrl: 'https://amzn.to/4xYpMst' },
      { name: 'Steamed Zucchini & Green Beans', category: 'Vegetables & Greens', percentage: 8, purpose: 'Low-calorie volume, hydration, and phytonutrients', affiliateUrl: 'https://amzn.to/4xPVcB1' },
      { name: 'Cold-Pressed Flaxseed Oil', category: 'Healthy Fats & Oils', percentage: 4, purpose: 'ALA omega-3 for skin barrier and anti-inflammatory support', affiliateUrl: 'https://amzn.to/4xg6A8d' },
      { name: 'Eggshell Calcium & Mineral Blend', category: 'Natural Supplements', percentage: 4, purpose: 'Calcium-phosphorus balance for homemade meals', affiliateUrl: 'https://amzn.to/4haNVWy' }
    ],
    healthFocusMatches: ['Allergy Relief & Immune Balance', 'Skin & Shiny Coat Vitality', 'Sensitive Digestion & Gut Health'],
    preparationNotes: [
      'Cook lamb and heart over medium heat until no pink remains (160°F internal). Drain excess fat if lamb is very fatty.',
      'Steam butternut squash until fork-tender, then mash or dice finely.',
      'Combine all ingredients and allow to cool completely before adding flaxseed oil and mineral blend.',
      'Introduce over 10–14 days if transitioning from another protein — lamb is novel but still requires gradual introduction.'
    ]
  },

  {
    id: 'fresh-venison-senior',
    name: 'Venison & Sweet Potato Senior Vitality Bowl',
    dietType: 'fresh-cooked',
    primaryProtein: 'Venison',
    headline: 'Ultra-lean, anti-inflammatory recipe engineered for senior dogs — low-calorie, high-protein, joint-focused.',
    description: 'Wild venison is one of the leanest proteins available, making it ideal for senior dogs who need high protein without excess calories. Combined with sweet potato, blueberries, and green-lipped mussel powder for comprehensive senior support.',
    macroProfile: {
      proteinPct: 52,
      fatPct: 24,
      carbsPct: 5.5,
      moisturePct: 74,
      fiberPct: 3.0,
      caPhosphorusRatio: '1.3 : 1',
      kcalPerGram: 1.18
    },
    ingredients: [
      { name: 'Lean Ground Venison (95/5)', category: 'Muscle Meat', percentage: 60, purpose: 'Ultra-lean novel protein — high in iron, zinc, and B12 with minimal fat', allergens: ['venison'] },
      { name: 'Venison Liver', category: 'Organ', percentage: 8, purpose: 'Vitamin A, B12, copper, and folate — nature\'s multivitamin', allergens: ['venison'] },
      { name: 'Steamed Orange Sweet Potato', category: 'Vegetables & Greens', percentage: 14, purpose: 'Beta-carotene, potassium, and slow-release carbohydrate energy', affiliateUrl: 'https://amzn.to/4xYpMst' },
      { name: 'Wild Blueberries & Steamed Broccoli', category: 'Vegetables & Greens', percentage: 8, purpose: 'Anthocyanins and sulforaphane for cancer prevention and cognitive support' },
      { name: 'Wild Salmon Oil', category: 'Healthy Fats & Oils', percentage: 4, purpose: 'DHA for brain health and EPA for joint inflammation reduction', affiliateUrl: 'https://amzn.to/46HCJdW' },
      { name: 'Green-Lipped Mussel Powder & Mineral Blend', category: 'Natural Supplements', percentage: 6, purpose: 'Glucosamine, chondroitin, and ETA omega-3 for senior joint support', affiliateUrl: 'https://amzn.to/4haNVWy' }
    ],
    healthFocusMatches: ['Senior Vitality & Cognitive Health', 'Joints & Mobility Support', 'Metabolic Weight Management'],
    preparationNotes: [
      'Cook venison and liver over gentle heat until fully cooked — venison is very lean and dries out quickly, so add 2 tbsp water to the pan.',
      'Steam sweet potato until soft, then mash. Steam broccoli until just tender.',
      'Combine all ingredients while warm, then cool completely before adding salmon oil and mussel powder.',
      'Portion into daily servings. Refrigerate up to 4 days or freeze in 2-week batches.'
    ]
  },

  {
    id: 'fresh-chicken-puppy',
    name: 'Puppy Growth Chicken, Egg & Oat Development Bowl',
    dietType: 'fresh-cooked',
    primaryProtein: 'Chicken',
    headline: 'Nutritionally complete puppy recipe with precise calcium-to-phosphorus ratio for healthy bone development.',
    description: 'Specially formulated for puppies under 12 months. Features lean chicken, whole eggs for DHA, cooked oats for sustained energy, and eggshell calcium to achieve the critical 1.2:1 Ca:P ratio required for proper skeletal development.',
    macroProfile: {
      proteinPct: 44,
      fatPct: 28,
      carbsPct: 8,
      moisturePct: 70,
      fiberPct: 2.5,
      caPhosphorusRatio: '1.2 : 1',
      kcalPerGram: 1.30
    },
    ingredients: [
      { name: 'Lean Ground Chicken (93/7)', category: 'Muscle Meat', percentage: 52, purpose: 'Complete amino acid profile for rapid muscle and organ development', allergens: ['chicken', 'poultry'] },
      { name: 'Whole Eggs (Lightly Scrambled)', category: 'Organ', percentage: 10, purpose: 'DHA for brain development, biotin, and complete protein', allergens: ['eggs'] },
      { name: 'Chicken Hearts', category: 'Organ', percentage: 6, purpose: 'Taurine for cardiac development and CoQ10 for cellular energy', allergens: ['chicken', 'poultry'], affiliateUrl: 'https://amzn.to/4ctpLUu' },
      { name: 'Cooked Rolled Oats', category: 'Vegetables & Greens', percentage: 12, purpose: 'Slow-release carbohydrate for sustained puppy energy and gut health', affiliateUrl: 'https://amzn.to/4yqDq7u' },
      { name: 'Steamed Carrots & Pumpkin', category: 'Vegetables & Greens', percentage: 10, purpose: 'Beta-carotene for immune development and fiber for digestion' },
      { name: 'Eggshell Calcium Powder & Puppy Vitamin Blend', category: 'Natural Supplements', percentage: 10, purpose: 'Precise Ca:P ratio (1.2:1) critical for puppy bone formation', affiliateUrl: 'https://amzn.to/4haNVWy' }
    ],
    healthFocusMatches: ['Puppy Growth & Development', 'General Longevity & Health', 'Sensitive Digestion & Gut Health'],
    preparationNotes: [
      'Cook chicken thoroughly to 165°F. Scramble eggs lightly — do not overcook to preserve DHA.',
      'Cook oats in water until soft. Steam carrots and pumpkin until tender.',
      'Combine all ingredients and cool completely before adding vitamin blend.',
      'Feed 3–4 small meals daily for puppies under 6 months. Transition to 2–3 meals at 6 months.',
      'This recipe is calibrated for medium-breed puppies. Adjust calcium supplement dose for large/giant breeds per vet guidance.'
    ]
  },

  {
    id: 'fresh-turkey-weight-loss',
    name: 'Lean Turkey & Green Bean Weight Management Bowl',
    dietType: 'fresh-cooked',
    primaryProtein: 'Turkey',
    headline: 'Calorie-controlled, high-volume recipe for overweight dogs — maximum satiety with minimum calories.',
    description: 'Ultra-lean turkey breast with high-fiber green beans, zucchini, and pumpkin creates a filling meal at significantly fewer calories than standard recipes. Designed for dogs on a weight loss program.',
    macroProfile: {
      proteinPct: 55,
      fatPct: 18,
      carbsPct: 5,
      moisturePct: 78,
      fiberPct: 5.5,
      caPhosphorusRatio: '1.2 : 1',
      kcalPerGram: 0.95
    },
    ingredients: [
      { name: 'Extra-Lean Ground Turkey Breast (99/1)', category: 'Muscle Meat', percentage: 55, purpose: 'Maximum protein with minimal fat — preserves muscle during calorie deficit', allergens: ['turkey', 'poultry'] },
      { name: 'Steamed Green Beans (Fresh or Frozen)', category: 'Vegetables & Greens', percentage: 18, purpose: 'High-fiber, ultra-low calorie volume filler — creates satiety', affiliateUrl: 'https://amzn.to/4xPVcB1' },
      { name: 'Steamed Zucchini & Cucumber', category: 'Vegetables & Greens', percentage: 12, purpose: 'Hydration, potassium, and near-zero calorie bulk', affiliateUrl: 'https://amzn.to/4xPVcB1' },
      { name: 'Plain Pumpkin Purée', category: 'Vegetables & Greens', percentage: 8, purpose: 'Soluble fiber for satiety and digestive regulation', affiliateUrl: 'https://amzn.to/4xINd8W' },
      { name: 'Wild Salmon Oil (Reduced Dose)', category: 'Healthy Fats & Oils', percentage: 2, purpose: 'Essential EPA/DHA — minimum dose to preserve omega-3 benefits', affiliateUrl: 'https://amzn.to/46HCJdW' },
      { name: 'L-Carnitine & Mineral Supplement', category: 'Natural Supplements', percentage: 5, purpose: 'L-carnitine for fat metabolism; minerals for complete nutrition', affiliateUrl: 'https://amzn.to/4haNVWy' }
    ],
    healthFocusMatches: ['Metabolic Weight Management', 'Sensitive Digestion & Gut Health', 'General Longevity & Health'],
    preparationNotes: [
      'Cook turkey breast thoroughly — it is very lean and cooks quickly. Do not add oil to the pan.',
      'Steam green beans, zucchini, and cucumber until just tender — do not overcook to preserve fiber.',
      'Combine all ingredients. This recipe is intentionally lower in fat — the texture will be less rich than standard recipes.',
      'Weigh every portion on a kitchen scale. This recipe is designed for weight loss — do not increase portions.',
      'Expect 0.5–1% body weight loss per week. Adjust down by 5% if weight loss stalls after 3 weeks.'
    ]
  },

  {
    id: 'fresh-beef-cardiac',
    name: 'Beef Heart & Taurine Cardiac Support Bowl',
    dietType: 'fresh-cooked',
    primaryProtein: 'Beef',
    headline: 'Taurine and L-carnitine enriched recipe specifically designed for breeds with elevated heart disease risk.',
    description: 'Beef heart is the single richest natural source of taurine and CoQ10 — essential nutrients for cardiac muscle function. This recipe is designed for Dobermans, Boxers, Cavaliers, Golden Retrievers, and other heart-prone breeds.',
    macroProfile: {
      proteinPct: 50,
      fatPct: 32,
      carbsPct: 3.5,
      moisturePct: 72,
      fiberPct: 2.0,
      caPhosphorusRatio: '1.25 : 1',
      kcalPerGram: 1.38
    },
    ingredients: [
      { name: 'Grass-Fed Beef Heart (Ground or Diced)', category: 'Muscle Meat', percentage: 50, purpose: 'Highest natural taurine source — 1,200mg/100g; CoQ10 for cardiac energy', allergens: ['beef'], affiliateUrl: 'https://amzn.to/3Sz0bqy' },
      { name: 'Lean Grass-Fed Ground Beef (90/10)', category: 'Muscle Meat', percentage: 20, purpose: 'L-carnitine, iron, and complete amino acid spectrum', allergens: ['beef'] },
      { name: 'Beef Liver', category: 'Organ', percentage: 5, purpose: 'Vitamin A, B12, copper, and folate', allergens: ['beef'], affiliateUrl: 'https://amzn.to/3Sz0bqy' },
      { name: 'Steamed Spinach & Kale', category: 'Vegetables & Greens', percentage: 10, purpose: 'Magnesium for cardiac electrical conduction and antioxidants', affiliateUrl: 'https://amzn.to/4gWqwad' },
      { name: 'Wild Blueberries', category: 'Vegetables & Greens', percentage: 5, purpose: 'Anthocyanins to protect cardiac cell membranes from oxidative damage' },
      { name: 'Wild Salmon Oil', category: 'Healthy Fats & Oils', percentage: 4, purpose: 'EPA/DHA to reduce cardiac inflammation and lower triglycerides', affiliateUrl: 'https://amzn.to/46HCJdW' },
      { name: 'Seaweed Calcium & CoQ10 Supplement Blend', category: 'Natural Supplements', percentage: 6, purpose: 'Calcium balance and additional CoQ10 for cardiac mitochondrial support', affiliateUrl: 'https://amzn.to/4gRALwj' }
    ],
    healthFocusMatches: ['Heart Health & Cardiac Support', 'General Longevity & Health', 'Active Energy & Athletic Performance'],
    preparationNotes: [
      'Cook beef heart and ground beef over medium heat until fully cooked. Beef heart has a firmer texture — dice finely for small dogs.',
      'Add liver in the last 2 minutes of cooking — do not overcook liver as it becomes bitter and loses nutrients.',
      'Steam spinach and kale briefly (1–2 minutes) to reduce oxalates while preserving magnesium.',
      'Cool completely before adding salmon oil and supplement blend.',
      'For heart-prone breeds: feed this recipe 3–4x per week, rotating with other proteins.'
    ]
  },

  // ── ADDITIONAL RAW BARF RECIPES ───────────────────────────────────────────

  {
    id: 'raw-barf-chicken-starter',
    name: 'Beginner BARF Chicken & Bone Starter Formula',
    dietType: 'raw-barf',
    primaryProtein: 'Chicken',
    headline: 'The ideal entry-point raw diet — familiar protein, easy-to-source ingredients, and balanced macros for raw beginners.',
    description: 'Designed for dogs transitioning from kibble to raw. Chicken is the most digestible raw protein for beginners. Includes chicken frames for raw bone calcium, chicken liver, and pureed vegetables for a complete and balanced introduction.',
    macroProfile: {
      proteinPct: 52,
      fatPct: 33,
      carbsPct: 2.0,
      moisturePct: 68,
      fiberPct: 1.8,
      caPhosphorusRatio: '1.3 : 1',
      kcalPerGram: 1.48
    },
    ingredients: [
      { name: 'Raw Chicken Thighs & Breast (Boneless)', category: 'Muscle Meat', percentage: 60, purpose: 'Lean raw protein base — taurine, niacin, and complete amino acids', allergens: ['chicken', 'poultry'] },
      { name: 'Raw Chicken Frames / Necks (Ground)', category: 'Raw Bone', percentage: 10, purpose: 'Bio-available raw calcium and phosphorus — replaces synthetic supplements', allergens: ['chicken', 'bone'] },
      { name: 'Raw Chicken Liver', category: 'Organ', percentage: 5, purpose: 'Vitamin A, B12, iron, and copper — do not exceed 5% to avoid vitamin A toxicity', allergens: ['chicken', 'poultry'], affiliateUrl: 'https://amzn.to/4ctpLUu' },
      { name: 'Raw Chicken Hearts & Gizzards', category: 'Organ', percentage: 5, purpose: 'Taurine, CoQ10, and digestive enzymes', allergens: ['chicken', 'poultry'], affiliateUrl: 'https://amzn.to/4ctpLUu' },
      { name: 'Pureed Leafy Greens & Pumpkin', category: 'Vegetables & Greens', percentage: 15, purpose: 'Phytonutrients, prebiotic fiber, and digestive enzymes', affiliateUrl: 'https://amzn.to/4xINd8W' },
      { name: 'Raw Goat Milk or Kefir', category: 'Natural Supplements', percentage: 5, purpose: 'Probiotics and digestive enzymes to ease the kibble-to-raw transition', allergens: ['dairy'], affiliateUrl: 'https://amzn.to/3SrLyW0' }
    ],
    healthFocusMatches: ['Sensitive Digestion & Gut Health', 'General Longevity & Health', 'Allergy Relief & Immune Balance'],
    preparationNotes: [
      'Start with a 3-day fast (water only) before introducing raw — this resets digestive enzymes. Consult your vet first.',
      'Begin with chicken only for the first 2 weeks — do not mix proteins during the transition period.',
      'Serve at room temperature (not cold from fridge) — cold food causes digestive upset in raw beginners.',
      'Expect loose stools for 3–5 days during transition — this is normal detox. If diarrhea persists beyond 7 days, slow the transition.',
      'Source human-grade chicken and freeze at -4°F for 3 weeks before first use to eliminate parasites.'
    ]
  },

  {
    id: 'raw-barf-salmon-skin',
    name: 'Wild Salmon & Sardine Omega-3 Raw Skin Formula',
    dietType: 'raw-barf',
    primaryProtein: 'Salmon',
    headline: 'Marine-protein raw formula delivering the highest omega-3 concentration of any recipe — for skin, coat, and brain health.',
    description: 'Wild Pacific salmon and sardines provide unmatched EPA/DHA levels. This formula is specifically designed for dogs with skin allergies, dull coats, or inflammatory conditions. Fish-based raw diets are also ideal for dogs with chicken or beef sensitivities.',
    macroProfile: {
      proteinPct: 48,
      fatPct: 38,
      carbsPct: 1.5,
      moisturePct: 72,
      fiberPct: 1.5,
      caPhosphorusRatio: '1.25 : 1',
      kcalPerGram: 1.58
    },
    ingredients: [
      { name: 'Wild Pacific Salmon (Skin-On, Deboned)', category: 'Muscle Meat', percentage: 55, purpose: 'Primary EPA/DHA source — 2,200mg omega-3 per 100g; astaxanthin antioxidant', allergens: ['salmon', 'fish'] },
      { name: 'Wild Sardines (Whole, Frozen)', category: 'Muscle Meat', percentage: 15, purpose: 'Additional EPA/DHA, vitamin D3, and natural calcium from soft bones', allergens: ['fish'] },
      { name: 'Raw Salmon Liver', category: 'Organ', percentage: 5, purpose: 'Vitamin A, D, and B12 — use sparingly (5% max)', allergens: ['salmon', 'fish'] },
      { name: 'Ground Raw Salmon Bones (Soft)', category: 'Raw Bone', percentage: 10, purpose: 'Natural calcium and phosphorus from fish bones', allergens: ['fish', 'bone'] },
      { name: 'Pureed Spinach, Kelp & Blueberries', category: 'Vegetables & Greens', percentage: 10, purpose: 'Iodine from kelp, anthocyanins, and chlorophyll for detoxification' },
      { name: 'Coconut Oil & Turmeric Blend', category: 'Healthy Fats & Oils', percentage: 5, purpose: 'MCT fats for skin health and curcumin for anti-inflammatory support', affiliateUrl: 'https://amzn.to/46JlM2I' }
    ],
    healthFocusMatches: ['Skin & Shiny Coat Vitality', 'Allergy Relief & Immune Balance', 'Senior Vitality & Cognitive Health'],
    preparationNotes: [
      'IMPORTANT: Freeze all fish at -4°F for minimum 7 days before feeding raw to eliminate Neorickettsia helminthoeca (salmon poisoning disease).',
      'Thaw in the refrigerator 24 hours before serving — never thaw at room temperature.',
      'Sardines can be fed whole (frozen then thawed) for dogs over 20 lbs — the soft bones are safe and provide calcium.',
      'This recipe is high in fat — introduce gradually over 2 weeks to prevent pancreatitis in sensitive dogs.',
      'Rotate with a lean protein (chicken, turkey) every 2–3 weeks to prevent vitamin A accumulation from fish liver.'
    ]
  },

  {
    id: 'raw-barf-venison-novel',
    name: 'Wild Venison & Rabbit Novel Protein Raw Formula',
    dietType: 'raw-barf',
    primaryProtein: 'Venison',
    headline: 'The ultimate elimination diet raw formula — two novel proteins for dogs with severe multi-protein allergies.',
    description: 'Venison and rabbit are the two most hypoallergenic proteins available — most dogs have never been exposed to either. This formula is the gold standard for dogs with confirmed food allergies to chicken, beef, fish, and lamb.',
    macroProfile: {
      proteinPct: 54,
      fatPct: 30,
      carbsPct: 1.8,
      moisturePct: 70,
      fiberPct: 1.6,
      caPhosphorusRatio: '1.3 : 1',
      kcalPerGram: 1.45
    },
    ingredients: [
      { name: 'Wild Ground Venison (95/5)', category: 'Muscle Meat', percentage: 45, purpose: 'Ultra-lean novel protein — iron, zinc, B12, and complete amino acids', allergens: ['venison'] },
      { name: 'Whole Ground Rabbit (Bone-In)', category: 'Muscle Meat', percentage: 20, purpose: 'Novel protein with natural bone calcium — highly digestible and hypoallergenic', allergens: ['rabbit'] },
      { name: 'Venison Liver & Kidney', category: 'Organ', percentage: 10, purpose: 'Vitamin A, B12, selenium, and metabolic enzymes', allergens: ['venison'] },
      { name: 'Ground Rabbit Bone', category: 'Raw Bone', percentage: 10, purpose: 'Natural calcium and phosphorus from rabbit bones — very soft and safe', allergens: ['rabbit', 'bone'] },
      { name: 'Pureed Organic Vegetables (Zucchini, Celery, Parsley)', category: 'Vegetables & Greens', percentage: 10, purpose: 'Phytonutrients, chlorophyll, and natural digestive enzymes' },
      { name: 'Hemp Seed Oil & Mineral Blend', category: 'Healthy Fats & Oils', percentage: 5, purpose: 'Omega-3/6 balance and complete mineral supplementation', affiliateUrl: 'https://amzn.to/4xg6A8d' }
    ],
    healthFocusMatches: ['Allergy Relief & Immune Balance', 'Skin & Shiny Coat Vitality', 'Metabolic Weight Management'],
    preparationNotes: [
      'Source from reputable raw pet food suppliers — wild venison and rabbit must be human-grade and properly handled.',
      'Freeze at -4°F for minimum 3 weeks before feeding to eliminate parasites common in wild game.',
      'This is a strict elimination diet formula — do not add any other proteins for the first 8–12 weeks.',
      'Rabbit bones are very soft and safe for most dogs — whole ground rabbit (including bone) is the safest raw bone option.',
      'Monitor stool quality closely — venison is very lean and some dogs need a small amount of added fat (hemp oil) for optimal digestion.'
    ]
  },

  // ── ADDITIONAL SUPERFOOD TOPPERS ──────────────────────────────────────────

  {
    id: 'topper-cardiac-taurine',
    name: 'Beef Heart, Blueberry & CoQ10 Cardiac Topper',
    dietType: 'superfood-topper',
    primaryProtein: 'Beef',
    headline: 'Taurine-dense cardiac support topper — spoon over any kibble to dramatically boost heart health nutrients.',
    description: 'Designed for heart-prone breeds (Doberman, Boxer, Cavalier, Golden Retriever). Beef heart provides 1,200mg taurine per 100g — the highest natural source. Add 2–4 tbsp over regular food daily.',
    macroProfile: {
      proteinPct: 52,
      fatPct: 28,
      carbsPct: 3.5,
      moisturePct: 78,
      fiberPct: 2.0,
      caPhosphorusRatio: '1.2 : 1',
      kcalPerGram: 1.05
    },
    ingredients: [
      { name: 'Cooked Grass-Fed Beef Heart (Finely Diced)', category: 'Muscle Meat', percentage: 50, purpose: 'Highest natural taurine (1,200mg/100g) and CoQ10 for cardiac muscle energy', allergens: ['beef'], affiliateUrl: 'https://amzn.to/3Sz0bqy' },
      { name: 'Wild Blueberries (Fresh or Frozen)', category: 'Vegetables & Greens', percentage: 20, purpose: 'Anthocyanins protect cardiac cell membranes from oxidative damage' },
      { name: 'Slow-Simmered Bone Broth', category: 'Natural Supplements', percentage: 20, purpose: 'Collagen, glycine, and electrolytes for cardiac and connective tissue', affiliateUrl: 'https://amzn.to/4zSd7Zb' },
      { name: 'Wild Salmon Oil', category: 'Healthy Fats & Oils', percentage: 5, purpose: 'EPA/DHA to reduce cardiac inflammation and lower triglycerides', affiliateUrl: 'https://amzn.to/46HCJdW' },
      { name: 'Magnesium-Rich Pumpkin Seeds (Ground)', category: 'Natural Supplements', percentage: 5, purpose: 'Magnesium for cardiac electrical conduction and arrhythmia prevention' }
    ],
    healthFocusMatches: ['Heart Health & Cardiac Support', 'General Longevity & Health', 'Active Energy & Athletic Performance'],
    preparationNotes: [
      'Reduce regular kibble by 10–15% to account for the topper\'s calories.',
      'Spoon 2–4 tbsp (depending on dog size) over kibble at each meal.',
      'Store in a sealed glass container in the fridge for up to 5 days.',
      'For heart-prone breeds: use this topper daily as a preventive measure, not just after diagnosis.'
    ]
  },

  {
    id: 'topper-skin-omega',
    name: 'Salmon, Egg & Turmeric Skin & Coat Topper',
    dietType: 'superfood-topper',
    primaryProtein: 'Salmon',
    headline: 'The most effective dietary intervention for dull coat and itchy skin — visible results in 3–4 weeks.',
    description: 'Wild salmon, whole egg, and turmeric create a powerful skin and coat topper. The combination of EPA/DHA from salmon, biotin from egg, and curcumin from turmeric addresses all three root causes of poor coat quality.',
    macroProfile: {
      proteinPct: 48,
      fatPct: 35,
      carbsPct: 2.5,
      moisturePct: 80,
      fiberPct: 1.5,
      caPhosphorusRatio: '1.2 : 1',
      kcalPerGram: 1.10
    },
    ingredients: [
      { name: 'Wild Canned Salmon in Water (No Salt)', category: 'Muscle Meat', percentage: 40, purpose: 'EPA/DHA omega-3s — the #1 dietary intervention for skin and coat health', allergens: ['salmon', 'fish'], affiliateUrl: 'https://amzn.to/4xg3W2h' },
      { name: 'Whole Egg (Lightly Scrambled)', category: 'Organ', percentage: 25, purpose: 'Biotin, sulfur amino acids, and lecithin for keratin production', allergens: ['eggs'] },
      { name: 'Plain Bone Broth', category: 'Natural Supplements', percentage: 20, purpose: 'Collagen and glycine for skin elasticity and moisture retention', affiliateUrl: 'https://amzn.to/4zSd7Zb' },
      { name: 'Golden Turmeric Paste (with Black Pepper & Coconut Oil)', category: 'Natural Supplements', percentage: 10, purpose: 'Curcumin reduces skin inflammation — black pepper increases absorption 2,000%', affiliateUrl: 'https://amzn.to/46JlM2I' },
      { name: 'Ground Pumpkin Seeds', category: 'Natural Supplements', percentage: 5, purpose: 'Zinc for skin cell renewal and sebaceous gland regulation' }
    ],
    healthFocusMatches: ['Skin & Shiny Coat Vitality', 'Allergy Relief & Immune Balance', 'General Longevity & Health'],
    preparationNotes: [
      'Scramble the egg lightly — do not fully cook to preserve biotin and DHA.',
      'Mix all ingredients together and warm gently (do not boil — heat destroys omega-3s).',
      'Spoon 2–3 tbsp over regular food once or twice daily.',
      'Expect visible coat improvement in 3–4 weeks with consistent daily use.',
      'Store in the fridge for up to 4 days. Do not freeze — freezing degrades omega-3 fatty acids.'
    ]
  },

  {
    id: 'topper-senior-brain',
    name: 'Sardine, Coconut Oil & Blueberry Senior Brain Topper',
    dietType: 'superfood-topper',
    primaryProtein: 'Salmon',
    headline: 'Cognitive support topper for senior dogs — DHA and MCT oils to slow Canine Cognitive Dysfunction.',
    description: 'Sardines provide the highest DHA concentration of any food, while coconut oil\'s MCT fats convert to ketone bodies that directly fuel aging brain cells. Blueberry anthocyanins protect neurons from oxidative damage.',
    macroProfile: {
      proteinPct: 40,
      fatPct: 38,
      carbsPct: 5,
      moisturePct: 82,
      fiberPct: 2.5,
      caPhosphorusRatio: '1.2 : 1',
      kcalPerGram: 1.00
    },
    ingredients: [
      { name: 'Wild Sardines in Water (No Salt, Mashed)', category: 'Muscle Meat', percentage: 35, purpose: 'Highest DHA concentration of any food — primary structural fat in brain neurons', allergens: ['fish'], affiliateUrl: 'https://amzn.to/4xg3W2h' },
      { name: 'Virgin Coconut Oil', category: 'Healthy Fats & Oils', percentage: 10, purpose: 'MCT fats → ketone bodies that fuel aging brain cells bypassing glucose metabolism', affiliateUrl: 'https://amzn.to/46JlM2I' },
      { name: 'Wild Blueberries (Mashed)', category: 'Vegetables & Greens', percentage: 20, purpose: 'Anthocyanins cross the blood-brain barrier and protect neurons from oxidative damage' },
      { name: 'Plain Bone Broth', category: 'Natural Supplements', percentage: 25, purpose: 'Glycine for neurotransmitter synthesis and gut-brain axis support', affiliateUrl: 'https://amzn.to/4zSd7Zb' },
      { name: 'Ground Turmeric & Black Pepper', category: 'Natural Supplements', percentage: 10, purpose: 'Curcumin reduces neuroinflammation — shown to reduce amyloid plaques in aging brains', affiliateUrl: 'https://amzn.to/46JlM2I' }
    ],
    healthFocusMatches: ['Senior Vitality & Cognitive Health', 'General Longevity & Health', 'Heart Health & Cardiac Support'],
    preparationNotes: [
      'Mash sardines and blueberries together. Mix in coconut oil and turmeric.',
      'Add warm (not hot) bone broth and stir to combine.',
      'Spoon 2–4 tbsp over regular food once daily.',
      'Start with 1 tsp coconut oil and increase gradually over 2 weeks — too much MCT oil at once causes loose stools.',
      'Best results when used consistently for 4–8 weeks. Cognitive improvements are gradual.'
    ]
  }
];
