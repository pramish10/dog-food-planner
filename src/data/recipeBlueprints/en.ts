import type { RecipeBlueprint } from './types';

export const enBlueprints: RecipeBlueprint[] = [
  // 1. TURKEY & PUMPKIN BLUEPRINT
  {
    slug: 'turkey-pumpkin-maintenance',
    name: 'Gently Cooked Lean Turkey & Pumpkin Adult Maintenance Blueprint',
    shortDesc: 'A clinical 65/10/10/8/4/3 whole-food recipe engineered for adult maintenance with 93/7 lean turkey, heart-protective organ taurine, digestive pumpkin fiber, and balanced eggshell calcium.',
    badge: 'Flagship Adult Maintenance',
    targetAudience: 'Adult Canines (1-7 Years) // Maintenance & Sensitive Digestion',
    colorTheme: '#0070f3',
    macroProfile: {
      proteinDm: '48.2%',
      fatDm: '22.8%',
      carbsDm: '13.4%',
      moisture: '72.5%',
      kcalPerKg: '1,220 kcal/kg (approx. 34.6 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (NRC Recommended Range: 1.1:1 – 1.4:1)',
    },
    ingredients: [
      {
        name: 'USDA Lean Ground Turkey (93/7)',
        percentage: 65,
        category: 'Primary Muscle Meat',
        role: 'Bioavailable essential amino acids (arginine, lysine, leucine) for muscle synthesis and enzyme production',
        clinicalBenefit: 'Lean, highly digestible single poultry protein with low allergenicity compared to beef or chicken.',
        color: '#0070f3',
      },
      {
        name: 'Turkey Hearts & Gizzards',
        percentage: 10,
        category: 'Muscular Organ & CoQ10 Source',
        role: 'Concentrated natural taurine, CoQ10, bioavailable heme iron, and B-complex vitamins (especially B12)',
        clinicalBenefit: 'Shields canine heart tissue against nutritional dilated cardiomyopathy (DCM) naturally.',
        color: '#7928ca',
      },
      {
        name: 'Organic Pure Pumpkin Purée',
        percentage: 10,
        category: 'Prebiotic Soluble Fiber',
        role: 'Soluble pectin and insoluble dietary fiber to optimize colonic transit and stimulate short-chain fatty acids',
        clinicalBenefit: 'Natural dual-action regulator: firms loose stools while preventing constipation in sensitive dogs.',
        color: '#f5a623',
        affiliateKey: 'pumpkinPuree',
        affiliateUrl: 'https://amzn.to/4xINd8W',
      },
      {
        name: 'Steamed Baby Spinach & Zucchini',
        percentage: 8,
        category: 'Phytonutrients & Greens',
        role: 'Delivers dietary folate, vitamin K1, potassium, magnesium, and cellular antioxidants (lutein)',
        clinicalBenefit: 'Gentle steaming ruptures plant cellulose walls so canine enzymes absorb micronutrients easily.',
        color: '#10b981',
      },
      {
        name: 'Eggshell Calcium & Kelp Mineral Blend',
        percentage: 4,
        category: 'Essential Mineral & Ca:P Balancer',
        role: 'Provides ~38% elemental bioavailable calcium carbonate to balance meat phosphorus at 1.25:1 Ca:P',
        clinicalBenefit: 'CRITICAL: Boneless meat has a toxic 1:20 Ca:P ratio. This mineral blend prevents bone loss.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Wild Alaskan Salmon Oil (Cold-Added)',
        percentage: 3,
        category: 'Marine Omega-3 EPA/DHA',
        role: 'Direct, preformed EPA and DHA to modulate inflammatory prostaglandins and leukotrienes',
        clinicalBenefit: 'Maintains epidermal moisture barrier, alleviates allergic skin itching, and preserves joints.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'A veterinary-engineered, whole-food flagship formula designed to deliver complete adult canine maintenance while resting the digestive tract. Built on ultra-lean USDA ground turkey, cardioprotective organ taurine, microbiome-stimulating pumpkin pectin, and scientifically balanced eggshell calcium.',
    clinicalRationale: [
      {
        title: '1. Why 93/7 Lean Turkey Over Chicken or Beef?',
        description:
          'Commercial poultry and beef are the two leading canine dietary allergens. Lean turkey provides an exceptionally bioavailable, highly digestible novel-leaning single protein with 94%+ digestibility and minimal pancreatic lipid load.',
        points: [
          'Superior Biological Value (BV) delivering 100% of NRC required essential amino acids.',
          'Low dietary fat reduces risk of idiopathic acute pancreatitis.',
          'Single novel-leaning protein simplifies elimination monitoring.',
        ],
      },
      {
        title: '2. The Cardiac Necessity: Organ Taurine and CoQ10 Pathways',
        description:
          'Boneless muscle meat alone fails to satisfy canine myocardial taurine demands. Adding 10% turkey hearts and gizzards guarantees concentrated natural food-state taurine and CoQ10 to protect cardiac muscle.',
        points: [
          'Natural food-state taurine eliminates dependency on synthetic additives.',
          'Supplies bioavailable heme iron and active coenzyme Q10.',
          'Prevents diet-associated dilated cardiomyopathy (DCM).',
        ],
      },
      {
        title: '3. Calcium-to-Phosphorus Stoichiometry (1.25:1 Golden Law)',
        description:
          'All boneless muscle meat has an inverted, toxic 1:20 Ca:P ratio. Unsupplemented meat diets strip calcium from canine bones, causing nutritional secondary hyperparathyroidism. Micro-fine eggshell powder restores the 1.25:1 ratio.',
        points: [
          'Pure calcium carbonate delivers 38% elemental bioavailable calcium.',
          'Kelp contributes organic micro-dosed iodine for thyroid hormone T4.',
          'Balances meat phosphorus precisely at 1.25:1.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Prep & Mince',
        instruction: 'Sanitize surfaces. Dice turkey hearts and gizzards into 1/4-inch pieces.',
      },
      {
        step: 2,
        title: 'Low-Heat Simmer (<180°F)',
        instruction: 'Simmer ground turkey and organs with 1/2 cup water for 8-10 min until pinkness disappears. Do not brown.',
        criticalTip: 'Do not fry at high heat to avoid advanced glycation end-products (AGEs).',
      },
      {
        step: 3,
        title: 'Steam & Puree Greens',
        instruction: 'Steam zucchini and spinach 4-5 min. Puree in food processor with pumpkin puree.',
      },
      {
        step: 4,
        title: 'Cool Down Below 100°F (38°C)',
        instruction: 'Mix vegetables into meat. Cool completely to room temperature before adding supplements.',
        criticalTip: 'Never add salmon oil to hot food; heat oxidizes omega-3s.',
      },
      {
        step: 5,
        title: 'Cold Supplement Fold',
        instruction: 'Fold in eggshell calcium powder, kelp, and cold wild salmon oil thoroughly for 2 minutes.',
      },
      {
        step: 6,
        title: 'Weigh & Portion',
        instruction: 'Weigh daily portions on a digital kitchen gram scale. Store in glass containers or freezer bags.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Refrigerator',
        duration: '3-4 Days Max',
        instructions: 'Airtight glass container below 38°F (3°C).',
      },
      {
        method: 'Deep Freezer',
        duration: 'Up to 90 Days',
        instructions: 'Vacuum-sealed or silicone bags with air removed.',
      },
      {
        method: 'Thawing',
        duration: 'Overnight in Fridge',
        instructions: 'Thaw in fridge 24h before. Never microwave on high.',
      },
    ],
    portionReference: [
      { dogWeight: '10 lbs / 4.5 kg', dailyKcal: '280 – 320 kcal', dailyGramsTotal: '240 g / day', mainProtein: '156 g', organMeat: '24 g', produceAndCarbs: '43 g', supplements: '17 g' },
      { dogWeight: '25 lbs / 11.3 kg', dailyKcal: '550 – 620 kcal', dailyGramsTotal: '480 g / day', mainProtein: '312 g', organMeat: '48 g', produceAndCarbs: '86 g', supplements: '34 g' },
      { dogWeight: '50 lbs / 22.7 kg', dailyKcal: '950 – 1,080 kcal', dailyGramsTotal: '850 g / day', mainProtein: '553 g', organMeat: '85 g', produceAndCarbs: '153 g', supplements: '59 g' },
      { dogWeight: '75 lbs / 34 kg', dailyKcal: '1,320 – 1,480 kcal', dailyGramsTotal: '1,180 g / day', mainProtein: '767 g', organMeat: '118 g', produceAndCarbs: '212 g', supplements: '83 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'Do NOT feed to giant-breed growing puppies (<12 mo) without pediatric calcium adjustments.',
        'Do NOT feed to dogs with IRIS Stage 3-4 Chronic Kidney Disease without phosphorus reduction.',
      ],
      transitionSteps: [
        'Days 1–3: 25% new / 75% old',
        'Days 4–6: 50% new / 50% old',
        'Days 7–9: 75% new / 25% old',
        'Day 10+: 100% new blueprint',
      ],
      calciumRule: 'NEVER omit eggshell calcium powder; boneless meat without calcium causes bone demineralization within 60 days.',
    },
    faq: [
      {
        question: 'Can I substitute lean ground beef for turkey?',
        answer: 'Yes, provided the protein remains lean (less than 8% fat content). Keep the 10% organ meat portion intact for taurine.',
      },
      {
        question: 'Can I feed this raw instead of cooking?',
        answer: 'Commercial poultry carries bacterial risks and raw vegetables cannot be digested by dogs without steaming. Gentle poaching is strongly recommended.',
      },
    ],
  },

  // 2. BEEF & SWEET POTATO BLUEPRINT
  {
    slug: 'beef-sweet-potato-vitality',
    name: 'Gently Cooked Grass-Fed Beef & Sweet Potato Vitality Blueprint',
    shortDesc: 'A high-stamina 62/10/12/8/4/4 clinical formula featuring 90/10 grass-fed beef, nutrient-dense liver & heart, slow-burning sweet potato carbohydrates, and antioxidant-rich steamed broccoli for active dogs.',
    badge: 'Active Muscle & Vitality',
    targetAudience: 'Active, Working & Agility Dogs // High Caloric Burn & Muscle Density',
    colorTheme: '#7928ca',
    macroProfile: {
      proteinDm: '46.5%',
      fatDm: '24.0%',
      carbsDm: '17.5%',
      moisture: '71.0%',
      kcalPerKg: '1,290 kcal/kg (approx. 36.6 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (NRC Compliant)',
    },
    ingredients: [
      {
        name: 'Grass-Fed Lean Ground Beef (90/10)',
        percentage: 62,
        category: 'Primary Red Meat Muscle',
        role: 'Concentrated creatine, conjugated linoleic acid (CLA), zinc, and bioavailable myoglobin for dense muscle hypertrophy',
        clinicalBenefit: 'Grass-fed beef possesses a superior 3:1 Omega-6 to Omega-3 ratio compared to grain-fed beef, enhancing athletic stamina.',
        color: '#e11d48',
      },
      {
        name: 'Beef Liver & Heart Blend',
        percentage: 10,
        category: 'Nutrient-Dense Secreting & Muscular Organ',
        role: 'Nature’s supreme multivitamin: preformed bioavailable vitamin A (retinol), B12, copper, heme iron, and CoQ10',
        clinicalBenefit: 'Provides direct coenzymes for energy metabolism and red blood cell oxygen-carrying capacity during intense work.',
        color: '#7928ca',
      },
      {
        name: 'Steamed Orange Sweet Potato',
        percentage: 12,
        category: 'Complex Slow-Burning Carbohydrate',
        role: 'Low-glycemic complex carbohydrates and soluble beta-carotene fiber delivering steady glycogen replenishment without insulin spikes',
        clinicalBenefit: 'Restores muscle glycogen stores in sporting or high-energy dogs, preventing mid-day lethargy.',
        color: '#f5a623',
      },
      {
        name: 'Steamed Broccoli Florets & Carrots',
        percentage: 8,
        category: 'Cruciferous Antioxidants & Carotenoids',
        role: 'Bioavailable glucoraphanin (converts to sulforaphane) and beta-carotene for cellular detoxification and Phase II enzymes',
        clinicalBenefit: 'Neutralizes exercise-induced reactive oxygen species (ROS) and supports hepatic detoxification pathways.',
        color: '#10b981',
      },
      {
        name: 'Eggshell Calcium & Organic Kelp',
        percentage: 4,
        category: 'Essential Calcium & Iodine Balancer',
        role: 'Pure calcium carbonate to balance high beef phosphorus at 1.25:1 Ca:P, with natural kelp iodine for thyroid metabolism',
        clinicalBenefit: 'Protects joint cartilage and skeletal density under heavy mechanical impact.',
        color: '#0070f3',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Cold-Pressed Olive & Cod Liver Oil Blend',
        percentage: 4,
        category: 'Healthy Lipids & Vitamin D3',
        role: 'Provides oleic acid (monounsaturated) and natural preformed vitamin D3/A to facilitate bone calcium fixation',
        clinicalBenefit: 'Supports endocrine hormone balance and cardiovascular lipid transport in high-burn dogs. Add cold.',
        color: '#f5a623',
      },
    ],
    executiveSummary:
      'An athletic performance formula specifically calibrated for canine agility competitors, working dogs, and energetic companion breeds. High-density grass-fed beef creatine fuels explosive power, while low-glycemic sweet potato glycogen provides stable endurance without blood sugar spikes.',
    clinicalRationale: [
      {
        title: '1. Why Grass-Fed Beef Delivers Superior Canine Athletic Power',
        description:
          'Working canines rapidly deplete intra-muscular phosphocreatine reserves. Grass-fed beef provides natural cellular creatine to regenerate ATP, enhancing burst power and physical recovery.',
        points: [
          'Rich in conjugated linoleic acid (CLA) to promote lean body mass.',
          'Three times higher in Omega-3 fatty acids than feedlot beef.',
          'Bioavailable heme iron and B12 maximize tissue oxygenation.',
        ],
      },
      {
        title: '2. Sustained Muscle Glycogen Pathways via Steamed Sweet Potato',
        description:
          'Unlike corn or wheat, sweet potatoes provide low-glycemic complex carbohydrates that release glucose steadily over 6–8 hours, avoiding insulin spikes.',
        points: [
          'Provides steady stamina for hiking, running, and working dogs.',
          'Rich in potassium to prevent exercise muscle cramping.',
          'Soluble dietary pectin nourishes beneficial gut flora.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Meat & Organ Dice',
        instruction: 'Dice beef heart and liver into 1/4-inch cubes. Keep raw until cooking.',
      },
      {
        step: 2,
        title: 'Gentle Beef Simmer',
        instruction: 'Simmer 90/10 ground beef and organ dice with 1/2 cup water for 10 minutes on low-medium heat until browned through gently.',
      },
      {
        step: 3,
        title: 'Steam Sweet Potato & Broccoli',
        instruction: 'Peel and cube sweet potato. Steam with broccoli and carrots until fork-tender (10-12 min). Mash coarsely.',
      },
      {
        step: 4,
        title: 'Cool Completely',
        instruction: 'Fold mashed vegetables into cooked beef. Allow entire batch to cool below 100°F (38°C).',
      },
      {
        step: 5,
        title: 'Cold Oil & Calcium Fold',
        instruction: 'Sprinkle eggshell calcium powder, organic kelp, olive oil, and cod liver oil. Stir for 2 minutes.',
      },
      {
        step: 6,
        title: 'Portion & Refrigerate',
        instruction: 'Weigh portions based on activity calories using our calculator. Freeze extra portions.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Refrigerator',
        duration: '3-4 Days Max',
        instructions: 'Glass containers below 38°F (3°C).',
      },
      {
        method: 'Freezer',
        duration: 'Up to 90 Days',
        instructions: 'Vacuum sealed daily meal portions.',
      },
      {
        method: 'Serving',
        duration: 'Gentle Warm',
        instructions: 'Warm in warm water bath to room temperature before feeding.',
      },
    ],
    portionReference: [
      { dogWeight: '10 lbs / 4.5 kg', dailyKcal: '310 – 350 kcal', dailyGramsTotal: '230 g / day', mainProtein: '143 g', organMeat: '23 g', produceAndCarbs: '46 g', supplements: '18 g' },
      { dogWeight: '25 lbs / 11.3 kg', dailyKcal: '620 – 710 kcal', dailyGramsTotal: '460 g / day', mainProtein: '285 g', organMeat: '46 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '50 lbs / 22.7 kg', dailyKcal: '1,080 – 1,220 kcal', dailyGramsTotal: '810 g / day', mainProtein: '502 g', organMeat: '81 g', produceAndCarbs: '162 g', supplements: '65 g' },
      { dogWeight: '75 lbs / 34 kg', dailyKcal: '1,490 – 1,680 kcal', dailyGramsTotal: '1,120 g / day', mainProtein: '694 g', organMeat: '112 g', produceAndCarbs: '224 g', supplements: '90 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'DO NOT feed to dogs with diagnosed pancreatitis (requires ultra-low fat under 12% DM).',
        'DO NOT feed without calcium powder (meat without calcium causes bone demineralization).',
      ],
      transitionSteps: [
        'Days 1–3: 25% new / 75% old',
        'Days 4–6: 50% new / 50% old',
        'Days 7–9: 75% new / 25% old',
        'Day 10+: 100% new blueprint',
      ],
      calciumRule: 'Always weigh calcium precisely; beef phosphorus requires exact elemental calcium balancing.',
    },
    faq: [
      {
        question: 'Can sedentary dogs eat this recipe?',
        answer: 'Sedentary dogs should have their daily grams reduced by 15-20% to account for lower metabolic burn, or choose the Turkey & Pumpkin Blueprint.',
      },
    ],
  },

  // 3. SALMON & QUINOA BLUEPRINT
  {
    slug: 'salmon-quinoa-joint-coat',
    name: 'Wild Alaskan Salmon & Quinoa Anti-Inflammatory Joint & Coat Blueprint',
    shortDesc: 'An omega-dense 60/8/12/10/6/4 marine formula engineered with wild salmon, organ taurine, complete-protein quinoa, antioxidant blueberries, and cold-pressed hemp oil for soothing inflamed joints and itchy skin.',
    badge: 'Joint Mobility & Pruritic Skin',
    targetAudience: 'Adult & Senior Canines (2+ Years) // Stiff Joints, Itchy Skin & Coat Restoration',
    colorTheme: '#06b6d4',
    macroProfile: {
      proteinDm: '44.0%',
      fatDm: '25.5%',
      carbsDm: '18.5%',
      moisture: '73.0%',
      kcalPerKg: '1,260 kcal/kg (approx. 35.7 kcal/oz)',
      caPhosphorusRatio: '1.28 : 1.0 (NRC Compliant)',
    },
    ingredients: [
      {
        name: 'Wild Alaskan Salmon & Whitefish Fillets',
        percentage: 60,
        category: 'Primary Marine Fish',
        role: 'Concentrated direct long-chain EPA & DHA omega-3s, marine bioactive peptides, and collagen for synovial fluid synthesis',
        clinicalBenefit: 'Suppresses cyclooxygenase-2 (COX-2) inflammation in arthritic joints while strengthening the epidermal skin barrier.',
        color: '#06b6d4',
      },
      {
        name: 'Turkey Hearts & Gizzards',
        percentage: 8,
        category: 'Organ Taurine Source',
        role: 'Delivers critical natural taurine to prevent fish-diet cardiac DCM, plus natural CoQ10 and trace zinc',
        clinicalBenefit: 'Guarantees cardiac myocardium support alongside joint anti-inflammatory benefits.',
        color: '#7928ca',
      },
      {
        name: 'Cooked Organic Quinoa',
        percentage: 12,
        category: 'Hypoallergenic Pseudo-Cereal Seed',
        role: 'Complete plant amino acid profile (contains all 9 essential amino acids) with zero gluten, lectins, or prolamin antigens',
        clinicalBenefit: 'Gentle on inflamed intestines while delivering bioavailable magnesium, iron, and prebiotic fiber.',
        color: '#f5a623',
        affiliateKey: 'quinoa',
      },
      {
        name: 'Steamed Blueberries, Kale & Zucchini',
        percentage: 10,
        category: 'High-ORAC Polyphenols & Anthocyanins',
        role: 'Anthocyanin bioflavonoids, lutein, and vitamin C to protect articular cartilage chondrocytes from oxidative degradation',
        clinicalBenefit: 'Protects joint chondrocytes from premature cell death and supports cognitive longevity in aging dogs.',
        color: '#10b981',
      },
      {
        name: 'Cold-Pressed Hemp Seed Oil & Green-Lipped Mussel Blend',
        percentage: 6,
        category: 'GLA & Glycosaminoglycans (GAGs)',
        role: 'Natural gamma-linolenic acid (GLA), chondroitin sulfate, and hyaluronic acid to stimulate synovial lubrication',
        clinicalBenefit: 'Clinically alleviates morning joint stiffness and dry, itchy epidermal flaking. Add post-cooling.',
        color: '#0070f3',
      },
      {
        name: 'Organic Seaweed Calcium (Lithothamnion) & Kelp',
        percentage: 4,
        category: 'Porous Plant Marine Ionic Calcium',
        role: 'Highly bioavailable porous calcified red algae delivering natural ionic calcium plus 72 bioactive trace minerals',
        clinicalBenefit: 'Significantly gentler on sensitive digestive tracts than heavy synthetic calcium supplements.',
        color: '#e11d48',
        affiliateKey: 'kelp',
      },
    ],
    executiveSummary:
      'A clinical anti-inflammatory whole-food formulation designed for dogs with joint stiffness, mobility decline, chronic skin allergies, or dull coats. High doses of marine EPA/DHA from wild salmon work in synergy with green-lipped mussel glycosaminoglycans and cold-pressed hemp oil to lubricate joints and soothe dermal pruritus.',
    clinicalRationale: [
      {
        title: '1. The Marine EPA & DHA Cascade for Joints & Skin',
        description:
          'When cell membranes are enriched with EPA and DHA, inflammatory arachidonic acid is displaced. Enzymes convert EPA into 3-series prostaglandins and 5-series leukotrienes, which exert tenfold lower inflammatory potency, reducing joint pain and skin erythema.',
        points: [
          'Direct marine omega-3s are 10x more bioavailable than plant flaxseed ALA.',
          'Supports joint synovial lubrication and chondrocyte longevity.',
          'Alleviates atopic dermatitis without reliance on immunosuppressive drugs.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Fish & Organ Poaching',
        instruction: 'Gently poach salmon, whitefish, and turkey hearts in 1 cup of water on low heat for 7-8 minutes. Flake fish carefully.',
      },
      {
        step: 2,
        title: 'Rinse & Cook Quinoa',
        instruction: 'Rinse quinoa to remove saponins. Boil in 2x water until fluffy (15 min). Cool.',
      },
      {
        step: 3,
        title: 'Steam Berries & Greens',
        instruction: 'Steam kale and zucchini for 4 min. Stir in fresh blueberries and pulse into coarse puree.',
      },
      {
        step: 4,
        title: 'MANDATORY Cool Down',
        instruction: 'Fold all cooked ingredients together. Cool below 100°F (38°C) before proceeding.',
        criticalTip: 'Never add omega oils to warm food; heat rapidly oxidizes and destroys delicate marine lipids.',
      },
      {
        step: 5,
        title: 'Cold Supplement Stir',
        instruction: 'Sprinkle organic seaweed calcium, kelp, hemp oil, and green-lipped mussel powder. Mix for 2 min.',
      },
      {
        step: 6,
        title: 'Weigh & Freeze',
        instruction: 'Weigh daily portions with a digital scale. Store current meals in fridge and freeze rest.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Refrigerator',
        duration: '3 Days Max',
        instructions: 'Fish spoils faster than poultry; consume within 72 hours.',
      },
      {
        method: 'Freezer',
        duration: 'Up to 60 Days',
        instructions: 'Freeze airtight to protect delicate fish lipids.',
      },
      {
        method: 'Thawing',
        duration: 'Fridge Thaw',
        instructions: 'Thaw in refrigerator. Never use high microwave heat.',
      },
    ],
    portionReference: [
      { dogWeight: '10 lbs / 4.5 kg', dailyKcal: '300 – 340 kcal', dailyGramsTotal: '235 g / day', mainProtein: '141 g', organMeat: '19 g', produceAndCarbs: '52 g', supplements: '23 g' },
      { dogWeight: '25 lbs / 11.3 kg', dailyKcal: '600 – 680 kcal', dailyGramsTotal: '470 g / day', mainProtein: '282 g', organMeat: '38 g', produceAndCarbs: '103 g', supplements: '47 g' },
      { dogWeight: '50 lbs / 22.7 kg', dailyKcal: '1,040 – 1,180 kcal', dailyGramsTotal: '830 g / day', mainProtein: '498 g', organMeat: '66 g', produceAndCarbs: '183 g', supplements: '83 g' },
      { dogWeight: '75 lbs / 34 kg', dailyKcal: '1,450 – 1,620 kcal', dailyGramsTotal: '1,150 g / day', mainProtein: '690 g', organMeat: '92 g', produceAndCarbs: '253 g', supplements: '115 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'DO NOT feed wild salmon caught raw from the Pacific Northwest without cooking (risk of Salmon Poisoning Disease from Neorickettsia helminthoeca parasite). Cooking completely neutralizes this risk.',
      ],
      transitionSteps: [
        'Days 1–3: 25% new / 75% old',
        'Days 4–6: 50% new / 50% old',
        'Days 7–9: 75% new / 25% old',
        'Day 10+: 100% new blueprint',
      ],
      calciumRule: 'Seaweed calcium must be added accurately to maintain Ca:P balance.',
    },
    faq: [
      {
        question: 'Can canned salmon be used?',
        answer: 'Only wild canned pink or red salmon in water with NO added salt. Fresh or frozen wild salmon is preferred.',
      },
    ],
  },

  // 4. LAMB & CRANBERRY BLUEPRINT
  {
    slug: 'lamb-cranberry-gentle-gut',
    name: 'Gently Stewed Pasture Lamb & Cranberry Hypoallergenic Gut Blueprint',
    shortDesc: 'A novel red meat 64/8/12/8/5/3 formula engineered with pasture lamb, liver & kidney, soothing butternut squash, and pure cranberries for dogs suffering from severe poultry/beef allergies and gut sensitivities.',
    badge: 'Hypoallergenic Gut & Urinary',
    targetAudience: 'Adult Dogs with Severe Food Allergies (Beef/Chicken) & Chronic Digestive Flare-Ups',
    colorTheme: '#10b981',
    macroProfile: {
      proteinDm: '45.8%',
      fatDm: '26.2%',
      carbsDm: '16.0%',
      moisture: '72.0%',
      kcalPerKg: '1,310 kcal/kg (approx. 37.1 kcal/oz)',
      caPhosphorusRatio: '1.25 : 1.0 (NRC Compliant)',
    },
    ingredients: [
      {
        name: 'Lean Ground Pasture Lamb',
        percentage: 64,
        category: 'Novel Red Meat',
        role: 'High bioavailable L-carnitine, zinc, vitamin B12, and novel antigen profile for elimination diets',
        clinicalBenefit: 'Bypasses existing immune sensitization to common commercial poultry and beef proteins.',
        color: '#10b981',
      },
      {
        name: 'Lamb Liver & Kidneys',
        percentage: 8,
        category: 'Nutrient-Dense Secreting Organs',
        role: 'Natural food-state selenium, bioavailable copper, vitamin A, and active methylation folates',
        clinicalBenefit: 'Protects cellular membranes from oxidative damage and supports healthy immune modulation.',
        color: '#7928ca',
      },
      {
        name: 'Steamed Butternut Squash & Pure Cranberries',
        percentage: 12,
        category: 'Gut-Soothing Pectin & Urinary PACs',
        role: 'Type-A proanthocyanidins (PACs) preventing uropathogenic E. coli adhesion, plus soothing soluble pectin',
        clinicalBenefit: 'Promotes smooth colonic transit, firms loose stool, and prevents recurring urinary tract infections.',
        color: '#f5a623',
      },
      {
        name: 'Steamed Green Beans & Parsley',
        percentage: 8,
        category: 'Digestive Chlorophyll & Gentle Fiber',
        role: 'Insoluble gentle bulk fiber and natural apigenin flavonoids to calm hyperactive intestinal peristalsis',
        clinicalBenefit: 'Deodorizes breath naturally and provides gentle dietary bulk without fermentative gas.',
        color: '#0070f3',
      },
      {
        name: 'Eggshell Calcium & Kelp Mineral Blend',
        percentage: 5,
        category: 'Essential Calcium & Iodine',
        role: 'Elemental calcium carbonate calibrated to neutralize lamb meat phosphorus at 1.25:1 Ca:P',
        clinicalBenefit: 'Essential skeletal mineralization with neutral gastric tolerability for sensitive stomachs.',
        color: '#e11d48',
        affiliateKey: 'eggshellPowder',
        affiliateUrl: 'https://amzn.to/4haNVWy',
      },
      {
        name: 'Wild Alaskan Salmon Oil (Cold-Added)',
        percentage: 3,
        category: 'Marine Omega-3 EPA/DHA',
        role: 'Direct preformed EPA/DHA to soothe the intestinal mucosal barrier and calm allergic pruritus',
        clinicalBenefit: 'Essential fatty acids protecting gut barrier integrity. Always added cold.',
        color: '#06b6d4',
        affiliateKey: 'salmonOil',
        affiliateUrl: 'https://amzn.to/46HCJdW',
      },
    ],
    executiveSummary:
      'A targeted hypoallergenic clinical formula engineered for dogs plagued by chronic soft stools, food intolerances to chicken or beef, gas, or recurrent urinary tract irritation. Pasture-raised lamb provides a clean novel red protein source, while butternut squash and pure cranberries deliver soothing pectin and urinary protective proanthocyanidins.',
    clinicalRationale: [
      {
        title: '1. Why Pasture Lamb for Chronic Food Sensitivities?',
        description:
          'Commercial poultry and grain-fed beef account for the overwhelming majority of canine allergic dermatological reactions. Pasture-raised lamb presents a novel, non-cross-reactive antigen profile while providing exceptional amino acid bioavailability.',
        points: [
          'Eliminates the #1 and #2 most common canine protein allergens.',
          'High natural L-carnitine supports heart muscle and fat metabolism.',
          'Exceptional palatability even for nauseous or picky dogs.',
        ],
      },
    ],
    prepProtocol: [
      {
        step: 1,
        title: 'Organ Dice & Lamb Prep',
        instruction: 'Dice lamb liver and kidneys into 1/4-inch cubes.',
      },
      {
        step: 2,
        title: 'Gentle Poach',
        instruction: 'Poach lean ground lamb and organs in 1/2 cup water for 8-10 min until fully cooked. Discard excess fat if lamb is overly greasy.',
      },
      {
        step: 3,
        title: 'Steam Squash, Cranberries & Greens',
        instruction: 'Steam peeled butternut squash, green beans, and fresh cranberries for 6-8 min until tender. Puree finely.',
      },
      {
        step: 4,
        title: 'Cool Completely (<100°F)',
        instruction: 'Combine squash puree with cooked lamb. Allow pot to cool to room temperature.',
      },
      {
        step: 5,
        title: 'Cold Supplement Fold',
        instruction: 'Stir in eggshell calcium powder, kelp, and cold wild salmon oil for 2 minutes.',
      },
      {
        step: 6,
        title: 'Weigh Portions',
        instruction: 'Weigh portions on digital scale. Store in glass or freeze.',
      },
    ],
    storageGuidelines: [
      {
        method: 'Refrigerator',
        duration: '3-4 Days Max',
        instructions: 'Glass container below 38°F (3°C).',
      },
      {
        method: 'Freezer',
        duration: 'Up to 90 Days',
        instructions: 'Airtight meal portions.',
      },
      {
        method: 'Serving',
        duration: 'Warm Gently',
        instructions: 'Warm gently in warm water bath.',
      },
    ],
    portionReference: [
      { dogWeight: '10 lbs / 4.5 kg', dailyKcal: '305 – 345 kcal', dailyGramsTotal: '230 g / day', mainProtein: '147 g', organMeat: '18 g', produceAndCarbs: '46 g', supplements: '19 g' },
      { dogWeight: '25 lbs / 11.3 kg', dailyKcal: '610 – 700 kcal', dailyGramsTotal: '460 g / day', mainProtein: '294 g', organMeat: '37 g', produceAndCarbs: '92 g', supplements: '37 g' },
      { dogWeight: '50 lbs / 22.7 kg', dailyKcal: '1,060 – 1,200 kcal', dailyGramsTotal: '820 g / day', mainProtein: '525 g', organMeat: '66 g', produceAndCarbs: '164 g', supplements: '65 g' },
      { dogWeight: '75 lbs / 34 kg', dailyKcal: '1,480 – 1,650 kcal', dailyGramsTotal: '1,130 g / day', mainProtein: '723 g', organMeat: '90 g', produceAndCarbs: '226 g', supplements: '91 g' },
    ],
    safetyAndPrecautions: {
      contraindications: [
        'DO NOT use sweetened or dried cranberry products with added sugar or grape juice concentrates; use fresh, frozen, or pure unsweetened cranberries only.',
      ],
      transitionSteps: [
        'Days 1–3: 25% new / 75% old',
        'Days 4–6: 50% new / 50% old',
        'Days 7–9: 75% new / 25% old',
        'Day 10+: 100% new blueprint',
      ],
      calciumRule: 'Always ensure full calcium powder inclusion to prevent calcium deficiency.',
    },
    faq: [
      {
        question: 'Are cranberries safe for dogs?',
        answer: 'Yes, in whole cooked pure form. They are rich in antioxidants and proanthocyanidins that protect bladder lining.',
      },
    ],
  },
];
