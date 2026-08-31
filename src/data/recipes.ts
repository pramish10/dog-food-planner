export interface RecipeIngredient {
  name: string;
  category: 'Muscle Meat' | 'Organ' | 'Raw Bone' | 'Vegetables & Greens' | 'Healthy Fats & Oils' | 'Natural Supplements';
  percentage: number; // percentage of total weight
  purpose: string;
  allergens?: string[];
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
      { name: 'Lean ground chicken', category: 'Muscle Meat', percentage: 62, purpose: 'Main protein for strong muscles', allergens: ['chicken', 'poultry'] },
      { name: 'Chicken hearts', category: 'Organ', percentage: 8, purpose: 'Adds flavour and natural nutrients', allergens: ['chicken', 'poultry'] },
      { name: 'Cooked white rice', category: 'Vegetables & Greens', percentage: 12, purpose: 'Gentle energy for the day' },
      { name: 'Plain pumpkin purée', category: 'Vegetables & Greens', percentage: 10, purpose: 'Gentle fibre for digestion' },
      { name: 'Steamed zucchini', category: 'Vegetables & Greens', percentage: 4, purpose: 'Adds moisture and vegetables' },
      { name: 'Dog-safe calcium and vitamin mix', category: 'Natural Supplements', percentage: 4, purpose: 'Helps make a homemade meal complete' }
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
      { name: 'Pure Organic Pumpkin Puree', category: 'Vegetables & Greens', percentage: 10, purpose: 'Soluble fiber soothing the GI tract & microbiome' },
      { name: 'Baby Spinach & Steamed Zucchini', category: 'Vegetables & Greens', percentage: 8, purpose: 'Folate, lutein, and magnesium' },
      { name: 'Wild Alaskan Salmon Oil', category: 'Healthy Fats & Oils', percentage: 3, purpose: 'DHA/EPA Omega-3s for anti-inflammatory skin & joints' },
      { name: 'Eggshell Calcium & Organic Kelp Blend', category: 'Natural Supplements', percentage: 4, purpose: 'Bioavailable calcium, iodine, and trace minerals' }
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
      { name: 'Pasture-Raised Beef Liver', category: 'Organ', percentage: 8, purpose: 'Nature’s multivitamin: Vitamin A, copper, B12', allergens: ['beef'] },
      { name: 'Steamed Sweet Carrots & Kale', category: 'Vegetables & Greens', percentage: 12, purpose: 'Beta-carotene for eye and cellular health' },
      { name: 'Wild Blueberries (Antioxidant Boost)', category: 'Vegetables & Greens', percentage: 5, purpose: 'Anthocyanins to combat oxidative stress' },
      { name: 'Cold-Pressed Virgin Flaxseed Oil', category: 'Healthy Fats & Oils', percentage: 4, purpose: 'Alpha-linolenic acid (ALA) for cell membranes' },
      { name: 'Veterinary Bone Meal & Sea Salt', category: 'Natural Supplements', percentage: 6, purpose: 'Balanced phosphorus-to-calcium ratio' }
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
      { name: 'Wild-Caught Pacific Salmon & Cod Fillets', category: 'Muscle Meat', percentage: 70, purpose: 'Pure marine EPA & DHA fatty acids, novel protein', allergens: ['salmon', 'fish'] },
      { name: 'Organic Steamed Sweet Potato', category: 'Vegetables & Greens', percentage: 14, purpose: 'Gentle dietary fiber and potassium' },
      { name: 'Finely Shredded Green Zucchini', category: 'Vegetables & Greens', percentage: 8, purpose: 'Hydration and phytonutrients' },
      { name: 'Virgin Coconut Oil & Golden Turmeric', category: 'Healthy Fats & Oils', percentage: 4, purpose: 'Lauric acid & curcumin to neutralize dermal inflammation' },
      { name: 'Ground Seaweed Calcium & Brewer’s Yeast', category: 'Natural Supplements', percentage: 4, purpose: 'Natural B-complex and bone mineral support' }
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
      { name: 'Beef Liver (Secreting Organ 1)', category: 'Organ', percentage: 5, purpose: 'Critical Vitamin A and copper', allergens: ['beef'] },
      { name: 'Beef Kidney or Spleen (Secreting Organ 2)', category: 'Organ', percentage: 5, purpose: 'Selenium, B-vitamins, and metabolic enzymes', allergens: ['beef'] },
      { name: 'Pureed Organic Leafy Greens & Cranberries', category: 'Vegetables & Greens', percentage: 10, purpose: 'Cellular enzymes, polyphenols, and urinary health' },
      { name: 'Green Tripe & Fermented Kefir / Raw Goat Milk', category: 'Natural Supplements', percentage: 5, purpose: 'Natural living digestive enzymes and probiotics', allergens: ['dairy'] }
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
      { name: 'Pasture Lamb Shoulder & Heart', category: 'Muscle Meat', percentage: 65, purpose: 'Novel protein, linoleic acid, and zinc', allergens: ['lamb'] },
      { name: 'Ground Lamb Rib Bone', category: 'Raw Bone', percentage: 10, purpose: 'Natural calcium & bone marrow minerals', allergens: ['lamb', 'bone'] },
      { name: 'Lamb Liver & Kidney', category: 'Organ', percentage: 10, purpose: 'Endocrine and enzymatic organ support', allergens: ['lamb'] },
      { name: 'Raw Unbleached Green Tripe', category: 'Muscle Meat', percentage: 8, purpose: 'Rich in gastric digestive juices and lactobacillus', allergens: ['lamb'] },
      { name: 'Pureed Zucchini, Celery & Pumpkin Seeds', category: 'Vegetables & Greens', percentage: 7, purpose: 'Magnesium, zinc, and natural parasite control' }
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
      { name: 'Slow-Simmered Grass-Fed Collagen Bone Broth', category: 'Natural Supplements', percentage: 40, purpose: 'Type II Collagen, chondroitin, and gut wall sealing' },
      { name: 'Wild Canned Sardines in Water (No Salt)', category: 'Muscle Meat', percentage: 30, purpose: 'Omega-3 (EPA/DHA), CoQ10, and vitamin D', allergens: ['fish'] },
      { name: 'Organic Pumpkin Puree & Steamed Spinach', category: 'Vegetables & Greens', percentage: 20, purpose: 'Prebiotic fibers fueling healthy gut flora' },
      { name: 'Unfiltered Raw Apple Cider Vinegar (with Mother)', category: 'Natural Supplements', percentage: 5, purpose: 'Digestive pH balance & enzyme activation' },
      { name: 'Golden Turmeric & Black Pepper Micro-Emulsion', category: 'Natural Supplements', percentage: 5, purpose: 'Powerful natural joint anti-inflammatory' }
    ],
    healthFocusMatches: ['Hip & Joint', 'Sensitive Digestion', 'Budget-Conscious Longevity'],
    preparationNotes: [
      'Reduce your dog’s standard dry kibble portion by 25% or 50% by calories.',
      'Ladle the warm topper over the remaining kibble and stir well to hydrate and release aroma.',
      'Store batch in a glass mason jar in the fridge for up to 6 days.'
    ]
  }
];
