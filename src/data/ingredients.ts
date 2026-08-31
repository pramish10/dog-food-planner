export interface IngredientSafetyItem {
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
    name: 'Pumpkin (Pure Puree)',
    category: 'Vegetable',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Rich in soluble fiber that regulates bowel motility (both diarrhea and constipation) and prebiotic food for beneficial gut bacteria.',
    servingAdvice: '1–2 tablespoons per 20 lbs of body weight. Ensure it is 100% pure pumpkin, not sugary pumpkin pie mix.',
    nutrients: ['Soluble Fiber', 'Vitamin A', 'Beta-Carotene', 'Potassium']
  },
  {
    name: 'Wild Alaskan Salmon',
    category: 'Protein',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Highest source of bioavailable EPA and DHA Omega-3 fatty acids, proven to reduce inflammation, soothe itchy skin, and protect joints.',
    servingAdvice: 'Always cook thoroughly (or deep-freeze if raw) to eliminate potential salmon poisoning fluke.',
    nutrients: ['EPA/DHA Omega-3', 'Vitamin B12', 'Selenium', 'High Biological Value Protein']
  },
  {
    name: 'Wild Blueberries',
    category: 'Fruit',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Exceptional concentration of anthocyanins and polyphenols that cross the blood-brain barrier to protect cognitive function in aging dogs.',
    servingAdvice: 'Serve fresh or frozen as low-calorie training treats or blended directly into meals.',
    nutrients: ['Anthocyanins', 'Vitamin C', 'Vitamin K', 'Manganese']
  },
  {
    name: 'Raw Unbleached Green Tripe',
    category: 'Protein',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'The holy grail of canine microbiome nutrition. Packed with natural digestive enzymes, lactobacillus probiotics, and ideal 1:1 Calcium-to-Phosphorus ratio.',
    servingAdvice: 'Serve raw and unbleached. Never cook as heat destroys beneficial living enzymes.',
    nutrients: ['Lactobacillus Probiotics', 'Digestive Enzymes', '1:1 Ca:P Ratio']
  },
  {
    name: 'Collagen Bone Broth',
    category: 'Herbs & Supplements',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Rich in gelatin, glucosamine, chondroitin, and hyaluronic acid that seal leaky gut lining and lubricate stiff joints.',
    servingAdvice: 'Simmered without onions, garlic, or salt. Serve warm over meals.',
    nutrients: ['Type II Collagen', 'Glucosamine', 'Glycine', 'Proline']
  },
  {
    name: 'Organic Steamed Zucchini',
    category: 'Vegetable',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Low calorie density, high hydration, gentle insoluble fiber with zero starch spike.',
    servingAdvice: 'Finely grated or lightly steamed for maximum digestibility.',
    nutrients: ['Hydration', 'Folate', 'Lutein', 'Potassium']
  },
  {
    name: 'Raw Goat Milk / Kefir',
    category: 'Dairy & Ferments',
    status: 'SAFE_AND_BENEFICIAL',
    benefitsOrRisks: 'Smaller fat globules and A2 beta-casein make it hypoallergenic and easily tolerated compared to cow milk. Delivers billions of active CFUs.',
    servingAdvice: '1 tbsp per 20 lbs per day. Keep refrigerated.',
    nutrients: ['Live CFUs Probiotics', 'Caprylic Acid', 'Calcium', 'Vitamins A & D']
  },

  // CAUTION INGREDIENTS
  {
    name: 'Cooked Bones (Any Poultry or Meat)',
    category: 'HARMFUL',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Cooking changes the cellular structure of bone from soft/pliable to brittle and splintery, posing extreme risk of stomach perforation or intestinal obstruction.',
    servingAdvice: 'NEVER feed cooked bones. Only feed raw, soft non-weight bearing bones under direct supervision.',
    nutrients: ['DANGER: Splinter hazard', 'Emergency veterinary surgery risk']
  },
  {
    name: 'High-Fat Trimmings & Bacon Grease',
    category: 'HARMFUL',
    status: 'FEED_WITH_CAUTION',
    benefitsOrRisks: 'Sudden high concentrations of cooked saturated fats trigger acute life-threatening pancreatitis in dogs.',
    servingAdvice: 'Avoid greasy table scraps. Limit fat to calculated dietary allowances.',
    nutrients: ['Pancreatitis trigger']
  },

  // STRICTLY TOXIC INGREDIENTS
  {
    name: 'Xylitol (Birch Sugar / E967)',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Causes a massive, rapid release of insulin leading to profound hypoglycemia within 10–60 minutes, followed by acute liver necrosis and death.',
    servingAdvice: 'DEADLY. Check all peanut butters, baked goods, and supplements for Xylitol / Birch Sugar.',
    nutrients: ['FATAL TOXIN: Rapid insulin spike & hepatic failure']
  },
  {
    name: 'Grapes & Raisins (All Varieties)',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Tartaric acid in grapes causes idiosyncratic acute renal (kidney) failure even in microscopic quantities in sensitive dogs.',
    servingAdvice: 'STRICTLY FORBIDDEN in any form, including baked breads or trail mixes.',
    nutrients: ['FATAL TOXIN: Acute Renal Failure']
  },
  {
    name: 'Onions, Garlic, Leeks & Chives (Allium Family)',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Contains N-propyl disulfide and thiosulfate which destroy red blood cells, causing severe oxidative Heinz body hemolytic anemia.',
    servingAdvice: 'Strictly avoid onion powders, broths with onion, or raw alliums.',
    nutrients: ['FATAL TOXIN: Hemolytic Anemia']
  },
  {
    name: 'Chocolate & Cocoa (Theobromine)',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Theobromine and caffeine cannot be metabolized by canines, causing cardiac arrhythmias, central nervous system seizures, and death.',
    servingAdvice: 'Keep all chocolate, dark chocolate, baking cocoa, and cocoa mulch away from dogs.',
    nutrients: ['FATAL TOXIN: Neurotoxin & Cardiac Arrhythmia']
  },
  {
    name: 'Macadamia Nuts',
    category: 'FATAL_TOXIC',
    status: 'DANGEROUS_TOXIC',
    benefitsOrRisks: 'Causes severe neurological weakness, hind limb tremors, hyperthermia, and inability to walk within 12 hours.',
    servingAdvice: 'Strictly avoid all macadamia nuts and mixed nut butters.',
    nutrients: ['TOXIN: Neurological neuromuscular toxicity']
  }
];
