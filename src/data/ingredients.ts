export interface IngredientSafetyItem {
  slug: string;
  name: string;
  category: 'Protein' | 'Vegetable' | 'Fruit' | 'Dairy & Ferments' | 'Herbs & Supplements' | 'FATAL_TOXIC' | 'HARMFUL';
  status: 'SAFE_AND_BENEFICIAL' | 'FEED_WITH_CAUTION' | 'DANGEROUS_TOXIC';
  benefitsOrRisks: string;
  servingAdvice: string;
  nutrients: string[];
}

export const INGREDIENT_DATABASE: IngredientSafetyItem[] = [
  // SAFE INGREDIENTS
  {
    slug: 'pumpkin',
    name: 'Pumpkin (Pure Puree)',
    category: 'Vegetable',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Rich in soluble fiber that regulates bowel motility (both diarrhea and constipation) and prebiotic food for beneficial gut bacteria.',
    servingAdvice: '1–2 tablespoons per 20 lbs of body weight. Ensure it is 100% pure pumpkin, not sugary pumpkin pie mix.',
    nutrients: ['Soluble Fiber', 'Vitamin A', 'Beta-Carotene', 'Potassium']
  },
  {
    slug: 'wild-alaskan-salmon',
    name: 'Wild Alaskan Salmon',
    category: 'Protein',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Rich dietary source of EPA and DHA Omega-3 fatty acids, which help support skin, coat, and joint health.',
    servingAdvice: 'Cook thoroughly before serving. Raw foods can carry bacteria. Talk to your vet first.',
    nutrients: ['EPA/DHA Omega-3', 'Vitamin B12', 'Selenium', 'High Biological Value Protein']
  },
  {
    slug: 'wild-blueberries',
    name: 'Wild Blueberries',
    category: 'Fruit',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Exceptional concentration of anthocyanins and polyphenols that cross the blood-brain barrier to protect cognitive function in aging dogs.',
    servingAdvice: 'Serve fresh or frozen as low-calorie training treats or blended directly into meals.',
    nutrients: ['Anthocyanins', 'Vitamin C', 'Vitamin K', 'Manganese']
  },
  {
    slug: 'raw-green-tripe',
    name: 'Raw Unbleached Green Tripe',
    category: 'Protein',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Untreated stomach lining that contains natural digestive enzymes, probiotics, and a balanced 1:1 Calcium-to-Phosphorus ratio.',
    servingAdvice: 'Serve raw and unbleached. Raw foods can carry bacteria. Talk to your vet first.',
    nutrients: ['Lactobacillus Probiotics', 'Digestive Enzymes', '1:1 Ca:P Ratio']
  },
  {
    slug: 'bone-broth',
    name: 'Collagen Bone Broth',
    category: 'Herbs & Supplements',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Rich in gelatin, glucosamine, chondroitin, and amino acids that support joint health and provide meal hydration.',
    servingAdvice: 'Simmered without onions, garlic, or salt. Serve warm over meals.',
    nutrients: ['Type II Collagen', 'Glucosamine', 'Glycine', 'Proline']
  },
  {
    slug: 'zucchini',
    name: 'Organic Steamed Zucchini',
    category: 'Vegetable',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Low calorie density, high hydration, gentle insoluble fiber with zero starch spike.',
    servingAdvice: 'Finely grated or lightly steamed for maximum digestibility.',
    nutrients: ['Hydration', 'Folate', 'Lutein', 'Potassium']
  },
  {
    slug: 'raw-goat-milk-kefir',
    name: 'Raw Goat Milk / Kefir',
    category: 'Dairy & Ferments',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Smaller fat globules and A2 beta-casein make it easier to tolerate than cow milk, while providing probiotics.',
    servingAdvice: '1 tbsp per 20 lbs per day. Keep refrigerated. Raw foods can carry bacteria. Talk to your vet first.',
    nutrients: ['Live Probiotics', 'Caprylic Acid', 'Calcium', 'Vitamins A & D']
  },

  // CAUTION INGREDIENTS
  {
    slug: 'cooked-bones',
    name: 'Cooked Bones (Any Poultry or Meat)',
    category: 'HARMFUL',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Cooking changes the cellular structure of bone from soft/pliable to brittle and splintery, posing extreme risk of stomach perforation or intestinal obstruction.',
    servingAdvice: 'Never feed cooked bones. Ask your veterinarian before feeding any bones, including raw ones.',
    nutrients: ['DANGER: Splinter hazard', 'Emergency veterinary surgery risk']
  },
  {
    slug: 'bacon-grease-fat-trimmings',
    name: 'High-Fat Trimmings & Bacon Grease',
    category: 'HARMFUL',
    status: 'FEED_WITH_CAUTION',
    benefitsOrRisks: 'Sudden high concentrations of cooked saturated fats trigger acute life-threatening pancreatitis in dogs.',
    servingAdvice: 'Avoid greasy table scraps. Limit fat to calculated dietary allowances.',
    nutrients: ['Pancreatitis trigger']
  },

  // STRICTLY TOXIC INGREDIENTS
  {
    slug: 'xylitol',
    name: 'Xylitol (Birch Sugar / E967)',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Causes a massive, rapid release of insulin leading to profound hypoglycemia within 10–60 minutes, followed by acute liver necrosis and death.',
    servingAdvice: 'DEADLY. Check all peanut butters, baked goods, and supplements for Xylitol / Birch Sugar.',
    nutrients: ['FATAL TOXIN: Rapid insulin spike & hepatic failure']
  },
  {
    slug: 'grapes-and-raisins',
    name: 'Grapes & Raisins (All Varieties)',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Tartaric acid in grapes causes idiosyncratic acute renal (kidney) failure even in microscopic quantities in sensitive dogs.',
    servingAdvice: 'STRICTLY FORBIDDEN in any form, including baked breads or trail mixes.',
    nutrients: ['FATAL TOXIN: Acute Renal Failure']
  },
  {
    slug: 'onions-and-garlic',
    name: 'Onions, Garlic, Leeks & Chives (Allium Family)',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Contains N-propyl disulfide and thiosulfate which destroy red blood cells, causing severe oxidative Heinz body hemolytic anemia.',
    servingAdvice: 'Strictly avoid onion powders, broths with onion, or raw alliums.',
    nutrients: ['FATAL TOXIN: Hemolytic Anemia']
  },
  {
    slug: 'chocolate-and-cocoa',
    name: 'Chocolate & Cocoa (Theobromine)',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Theobromine and caffeine cannot be metabolized by canines, causing cardiac arrhythmias, central nervous system seizures, and death.',
    servingAdvice: 'Keep all chocolate, dark chocolate, baking cocoa, and cocoa mulch away from dogs.',
    nutrients: ['FATAL TOXIN: Neurotoxin & Cardiac Arrhythmia']
  },
  {
    slug: 'macadamia-nuts',
    name: 'Macadamia Nuts',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Causes severe neurological weakness, hind limb tremors, hyperthermia, and inability to walk within 12 hours.',
    servingAdvice: 'Strictly avoid all macadamia nuts and mixed nut butters.',
    nutrients: ['TOXIN: Neurological neuromuscular toxicity']
  }
];
