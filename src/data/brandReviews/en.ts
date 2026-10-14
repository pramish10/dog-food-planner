import type { BrandReview, BrandReviewSlug } from './types';

export const enBrandReviews: Record<BrandReviewSlug, BrandReview> = {
  'blue-buffalo': {
    slug: 'blue-buffalo',
    name: 'Blue Buffalo',
    grade: '',
    score: '',
    badge: 'Popular Meat-First Commercial Kibble',
    category: 'Commercial Dry Kibble & Canned Wet Food',
    countryOfOrigin: 'Wilton, Connecticut, USA (Founded 2003)',
    parentCompany: 'General Mills (Acquired in 2018 for $8B)',
    manufacturingFacilities: 'Company-owned plants in Joplin, Missouri & Richmond, Indiana',
    recallRecord: {
      status: 'MONITORED',
      label: 'FDA Recall Information',
      details: 'Check the FDA pet food recall page for current recalls.',
      history: [
        'Check the FDA pet food recall page for current recalls: https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals',
      ],
    },
    macroProfile: {
      protein: '34% - 38%',
      fat: '15% - 18%',
      carbohydrates: '42% - 48%',
      fiber: '5.0%',
      moisture: '10.0%',
    },
    pros: [
      'Real deboned meat (chicken, salmon, or beef) is consistently ingredient #1 across all lines.',
      'Cold-formed LifeSource Bits protect vitamins, minerals, and antioxidants from extrusion heat.',
      'Recipes are free of corn, wheat, soy, and artificial colors.',
      'Broad portfolio spanning grain-free Wilderness to Life Protection wholesome grains.',
    ],
    cons: [
      'Carbohydrate content ranges from 42% to 48% depending on the formula.',
      'Wilderness grain-free varieties use pea protein, pea starch, and potato flour.',
      'Always review the latest product packaging and check current recall listings.',
    ],
    overview:
      'Blue Buffalo is a widely distributed North American pet food brand featuring meat-first recipes across multiple product lines, including Wilderness, Life Protection Formula, and Basics Limited Ingredient. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    deepDive: [
      'Ingredient Composition & LifeSource Bits: Blue Buffalo separates its vitamin and antioxidant package into cold-formed LifeSource Bits. This process aims to protect heat-sensitive vitamins and nutrients that can degrade during standard high-heat extrusion.',
      'Carbohydrate & Starch Content: Across Wilderness and Life Protection recipes, total estimated carbohydrates range between 42% and 48%. Wholesome grain recipes use brown rice, oatmeal, and barley, while grain-free recipes utilize peas and potatoes.',
      'Moisture Management: As with all dry kibble varieties containing 8-10% moisture, many pet owners add warm water or broth to meals to increase overall moisture intake.',
    ],
    ingredientPillars: [
      {
        title: '1. Named Animal Protein',
        score: '',
        explanation: 'Deboned chicken, beef, duck, or salmon is listed as the primary ingredient, backed by named meat meals.',
      },
      {
        title: '2. Carbohydrate Sources',
        score: '',
        explanation: 'Starch levels range around 42-48%. Wholesome grain formulas use brown rice and oatmeal, while grain-free formulas rely on peas and potatoes.',
      },
      {
        title: '3. Processing Considerations',
        score: '',
        explanation: 'Cold-formed LifeSource Bits are added to help protect vitamins from heat exposure during kibble extrusion.',
      },
      {
        title: '4. Manufacturing & Facilities',
        score: '',
        explanation: 'Manufactured in company-owned facilities in Missouri and Indiana. Check the FDA pet food recall page for current recalls.',
      },
    ],
    keyProductLines: [
      {
        name: 'Wilderness High-Protein',
        type: 'Grain-Free / High Meat Kibble',
        description: 'Higher-protein dry recipes featuring real meat inclusion and zero grains.',
        targetDogs: 'Active adult dogs requiring higher protein levels.',
      },
      {
        name: 'Life Protection Formula',
        type: 'Wholesome Whole-Grain Kibble',
        description: 'Maintenance diet incorporating brown rice, barley, and oatmeal alongside deboned animal protein.',
        targetDogs: 'Adult companion dogs with normal daily activity levels.',
      },
      {
        name: 'Basics Limited Ingredient Diet (LID)',
        type: 'Single-Source Protein Diet',
        description: 'Single animal protein source (turkey, duck, or salmon) paired with simple carbohydrates, without dairy, eggs, or wheat.',
        targetDogs: 'Dogs that benefit from limited ingredient recipes.',
      },
    ],
    veterinaryVerdict:
      'Blue Buffalo provides a meat-first commercial kibble option across a variety of formulas. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    feedingRecommendation:
      'Many owners add warm water or an unsalted topper to dry kibble to enhance moisture. Consult your veterinarian for tailored portion recommendations based on your dog’s age, weight, and activity level.',
    affiliateProductKeys: [
      'blue-buffalo-wilderness-chicken-24lb',
      'blue-buffalo-wilderness-salmon-24lb',
      'blue-buffalo-wilderness-chicken-4lb',
    ],
  },
  'rachael-ray-nutrish': {
    slug: 'rachael-ray-nutrish',
    name: 'Rachael Ray Nutrish',
    grade: '',
    score: '',
    badge: 'Supermarket Value Formula',
    category: 'Commercial Value Dry Kibble & Wet Trays',
    countryOfOrigin: 'Meadville, Pennsylvania, USA (Launched 2008)',
    parentCompany: 'Post Holdings (Acquired from J.M. Smucker in 2023)',
    manufacturingFacilities: 'USA manufacturing plants in Pennsylvania and Kansas',
    recallRecord: {
      status: 'MONITORED',
      label: 'FDA Recall Information',
      details: 'Check the FDA pet food recall page for current recalls.',
      history: [
        'Check the FDA pet food recall page for current recalls: https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals',
      ],
    },
    macroProfile: {
      protein: '24% - 30%',
      fat: '12% - 16%',
      carbohydrates: '46% - 52%',
      fiber: '4.5%',
      moisture: '10.0%',
    },
    pros: [
      'Affordable price point, making pet food accessible for cost-conscious families.',
      'Widely available in supermarkets and retail stores nationwide.',
      'Peak and Dish lines feature real meat as the primary ingredient.',
      'A portion of brand proceeds is donated to animal rescue and shelter foundations.',
    ],
    cons: [
      'Standard supermarket lines include plant-based protein boosters like corn gluten and peas.',
      'Moderate omega-3 fatty acid concentration compared to specialized diets.',
      'Carbohydrate content ranges from 46% to 52% across standard lines.',
    ],
    overview:
      'Rachael Ray Nutrish was established in 2008 to offer accessible commercial dog food in mainstream supermarkets. Currently produced under Post Holdings, the brand offers entry-level recipes alongside higher-tier options like Nutrish Peak and Nutrish Dish. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    deepDive: [
      'Ingredient Breakdown Across Lines: Standard Nutrish recipes (such as Real Chicken & Veggies) list meat first, accompanied by corn gluten meal, whole corn, and dried peas. Higher-tier Nutrish Peak recipes exclude corn, wheat, and soy, delivering higher crude protein percentages.',
      'Fat & Fatty Acid Profile: Fat sources primarily consist of chicken fat preserved with mixed tocopherols. Pet parents may choose to add salmon oil or whole fish toppers to supplement omega-3 fatty acids.',
      'Budget Considerations: Nutrish fills an accessible commercial role for pet owners seeking budget-friendly food. Checking ingredient decks ensures you select the formula best suited to your dog’s needs.',
    ],
    ingredientPillars: [
      {
        title: '1. Named Animal Protein',
        score: '',
        explanation: 'Real chicken or beef is listed first; standard lines also incorporate plant-based protein boosters.',
      },
      {
        title: '2. Carbohydrate Sources',
        score: '',
        explanation: 'Total estimated carbohydrates range from 46% to 52%, utilizing corn, rice, or peas depending on the line.',
      },
      {
        title: '3. Additives & Flavorings',
        score: '',
        explanation: 'Preserved with natural mixed tocopherols without artificial dyes.',
      },
      {
        title: '4. Manufacturing & Facilities',
        score: '',
        explanation: 'Produced in domestic American facilities. Check the FDA pet food recall page for current recalls.',
      },
    ],
    keyProductLines: [
      {
        name: 'Nutrish Peak High Protein',
        type: 'Grain-Free Higher-Protein Formula',
        description: 'Dry and wet recipes featuring higher protein percentages, real deboned meat, and zero corn, wheat, or soy.',
        targetDogs: 'Dogs that benefit from higher protein ratios at a supermarket price point.',
      },
      {
        name: 'Nutrish Dish Whole Ingredients',
        type: 'Kibble with Real Ingredient Pieces',
        description: 'Features dry kibble mixed with visible pieces of carrots, peas, and apples.',
        targetDogs: 'Dogs that respond well to varied texture in the bowl.',
      },
      {
        name: 'Nutrish Real Beef & Brown Rice',
        type: 'Everyday Maintenance Kibble',
        description: 'Standard maintenance food pairing farm-raised beef with brown rice and peas.',
        targetDogs: 'Adult dogs with normal daily activity levels.',
      },
    ],
    veterinaryVerdict:
      'Nutrish is an accessible supermarket dog food brand. Check the ingredient list of each specific formula to evaluate the balance of meat and plant-based protein sources. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    feedingRecommendation:
      'Check the feeding guidelines on the package and consult your veterinarian to adjust portions based on your dog’s weight, body condition, and activity level.',
    affiliateProductKeys: [
      'nutrish-peak-variety-pack-wet',
      'nutrish-beef-pea-brown-rice-28lb',
    ],
  },
  'pure-balance': {
    slug: 'pure-balance',
    name: 'Pure Balance',
    grade: '',
    score: '',
    badge: 'Supermarket Value Formula',
    category: 'Private-Label Value Dry & Wet Kibble',
    countryOfOrigin: 'United States (Walmart Private Label, Launched 2012)',
    parentCompany: 'Walmart Inc.',
    manufacturingFacilities: 'Manufactured by contract co-packers in USA facilities',
    recallRecord: {
      status: 'CLEAN',
      label: 'FDA Recall Information',
      details: 'Check the FDA pet food recall page for current recalls.',
      history: [
        'Check the FDA pet food recall page for current recalls: https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals',
      ],
    },
    macroProfile: {
      protein: '24% - 28%',
      fat: '13% - 16%',
      carbohydrates: '46% - 50%',
      fiber: '5.0%',
      moisture: '10.0%',
    },
    pros: [
      'Accessible price-to-quality ratio, providing meat-first recipes in mainstream retail.',
      'Free of corn, wheat, soy, poultry by-product meal, and artificial colors.',
      'Real animal protein (salmon, lamb, or chicken) is ingredient #1 across formulas.',
      'Offers both grain-free and wholesome grain varieties.',
    ],
    cons: [
      'Private-label brand produced by third-party contract manufacturers.',
      'Carbohydrate fraction ranges from 46% to 50%, utilizing peas, potatoes, or brown rice.',
      'Check individual formula ingredient decks for specific protein concentrations.',
    ],
    overview:
      'Pure Balance was launched by Walmart in 2012 as a private-label pet food brand offering recipes free of corn, wheat, soy, and artificial colors at an accessible retail price point. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    deepDive: [
      'Contract Manufacturing & Standards: As a private-label store brand, Pure Balance is produced through commercial contract manufacturing partners. Formulations adhere to AAFCO nutrient profiles for adult maintenance or all life stages.',
      'Ingredient Profile: Formulas typically feature real meat (such as salmon, chicken, or lamb) as the first ingredient, followed by meat meal, peas, and brown rice or potatoes depending on the recipe.',
      'Carbohydrate Content: Carbohydrates account for approximately 46-50% of dry matter, providing standard energy for companion dogs. Portion monitoring helps maintain healthy body weight.',
    ],
    ingredientPillars: [
      {
        title: '1. Named Animal Protein',
        score: '',
        explanation: 'Real meat leads every recipe, supplemented by concentrated named meat meals.',
      },
      {
        title: '2. Ingredients & Additives',
        score: '',
        explanation: 'No corn, wheat, soy, or artificial colors (no Red 40 or Yellow 5).',
      },
      {
        title: '3. Economic Accessibility',
        score: '',
        explanation: 'Competitive price point among meat-first supermarket dog food options.',
      },
      {
        title: '4. Sourcing & Manufacturing',
        score: '',
        explanation: 'Produced via domestic commercial manufacturing partners. Check the FDA pet food recall page for current recalls.',
      },
    ],
    keyProductLines: [
      {
        name: 'Pure Balance Grain-Free Salmon & Pea',
        type: 'Fish Recipe',
        description: 'Salmon-first formulation designed for dogs with poultry or grain sensitivities.',
        targetDogs: 'Dogs that do better with fish-based or grain-free recipes.',
      },
      {
        name: 'Pure Balance Chicken & Brown Rice',
        type: 'Wholesome Grain Formula',
        description: 'Classic recipe utilizing real chicken and gentle brown rice.',
        targetDogs: 'Everyday companion dogs with normal digestive health.',
      },
      {
        name: 'Pure Balance Wild & Free Superfood Blend',
        type: 'Higher Protein Kibble',
        description: 'Higher-protein recipe incorporating carrots, blueberries, and cranberries.',
        targetDogs: 'Active breeds needing higher caloric support.',
      },
    ],
    veterinaryVerdict:
      'Pure Balance offers meat-first formulations at an accessible retail price point. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    feedingRecommendation:
      'Pairing dry kibble with fresh toppers such as plain pumpkin, cooked eggs, or warm broth adds moisture and variety. Consult your veterinarian for personalized feeding guidance.',
    affiliateProductKeys: [],
  },
  'ollie': {
    slug: 'ollie',
    name: 'Ollie Fresh Dog Food',
    grade: '',
    score: '',
    badge: 'Gently Cooked Human-Grade Fresh Dog Food',
    category: 'Gently Cooked Human-Grade Fresh Dog Food',
    countryOfOrigin: 'New York, NY, USA (Founded 2016)',
    parentCompany: 'Ollie Pets Inc.',
    manufacturingFacilities: 'USDA-inspected commercial kitchens in Pennsylvania and New Jersey',
    recallRecord: {
      status: 'CLEAN',
      label: 'FDA Recall Information',
      details: 'Check the FDA pet food recall page for current recalls.',
      history: [
        'Check the FDA pet food recall page for current recalls: https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals',
      ],
    },
    macroProfile: {
      protein: '38% - 44% (DM)',
      fat: '22% - 28% (DM)',
      carbohydrates: '22% - 28% (DM)',
      fiber: '3.5%',
      moisture: '72.0%',
    },
    pros: [
      'USDA-inspected meats and whole produce visible in every meal pack.',
      'Gently cooked at lower temperatures than conventional extrusion.',
      'Pre-portioned packs based on your dog’s estimated caloric requirements.',
      'High natural moisture content (around 70%) supports everyday hydration.',
      'Recipes designed to meet AAFCO nutritional standards.',
    ],
    cons: [
      'Higher monthly cost compared to standard commercial dry kibble.',
      'Requires freezer storage space and refrigeration for opened packs.',
      'Subscription delivery model with limited immediate store availability.',
    ],
    overview:
      'Ollie was founded in 2016 to offer fresh, gently cooked dog meals prepared in USDA-inspected commercial kitchens. Meals are delivered in customized, pre-portioned packs tailored to your dog’s estimated caloric needs. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    deepDive: [
      'Gentle Cooking Method: Rather than high-heat extrusion, Ollie cooks whole muscle meats and fresh produce at controlled lower temperatures, helping preserve natural flavors and nutrient structure.',
      'Moisture & Hydration: Fresh dog food provides approximately 70-75% moisture, helping keep dogs hydrated without requiring extra water added to the bowl.',
      'Portion Management: Packs are calibrated according to your dog’s estimated maintenance energy requirement (MER), helping owners maintain consistent portion sizes.',
    ],
    ingredientPillars: [
      {
        title: '1. Whole Cuts of Meat',
        score: '',
        explanation: 'USDA-inspected cuts of beef, chicken, turkey, or lamb without animal byproduct meals.',
      },
      {
        title: '2. Whole Produce & Nutrients',
        score: '',
        explanation: 'Whole vegetables (sweet potatoes, carrots, spinach, blueberries) provide natural dietary fiber and micronutrients.',
      },
      {
        title: '3. Ingredient Transparency',
        score: '',
        explanation: 'Recognizable whole foods cooked gently with nutrient pre-mixes to meet AAFCO profiles.',
      },
      {
        title: '4. Manufacturing & Facilities',
        score: '',
        explanation: 'Prepared in commercial kitchens under USDA inspection standards. Check the FDA pet food recall page for current recalls.',
      },
    ],
    keyProductLines: [
      {
        name: 'Fresh Gently Cooked Beef with Sweet Potatoes',
        type: 'Beef Recipe',
        description: 'USDA beef, beef liver, sweet potatoes, peas, and blueberries gently cooked in packs.',
        targetDogs: 'Active dogs and pets that prefer beef-based meals.',
      },
      {
        name: 'Fresh Gently Cooked Chicken with Carrots',
        type: 'Lean Poultry Recipe',
        description: 'Tender chicken, chicken heart, chicken liver, carrots, and rice.',
        targetDogs: 'Dogs that do better with a moderate fat poultry option.',
      },
      {
        name: 'Fresh Gently Cooked Turkey with Blueberries',
        type: 'Turkey Recipe',
        description: 'Turkey, turkey liver, kale, carrots, and blueberries.',
        targetDogs: 'Dogs that thrive on lean poultry and antioxidant-rich fruit.',
      },
    ],
    veterinaryVerdict:
      'Ollie provides gently cooked, human-grade meals that offer high protein quality and natural moisture. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    feedingRecommendation:
      'If a 100% fresh diet does not fit your household budget, you can use fresh food as a meal topper alongside quality dry food. Always introduce new foods gradually over 7 to 10 days.',
    affiliateProductKeys: [
      'ollie-chicken-apple-jerky-treats',
    ],
  },
  'open-farm': {
    slug: 'open-farm',
    name: 'Open Farm',
    grade: '',
    score: '',
    badge: 'Certified Humane & Sourcing Transparency',
    category: 'Premium Traceable Dry Kibble, RawMix & Wet Food',
    countryOfOrigin: 'Toronto, Ontario, Canada (Founded 2014)',
    parentCompany: 'Open Farm Inc.',
    manufacturingFacilities: 'SQF-certified manufacturing facilities in North America',
    recallRecord: {
      status: 'CLEAN',
      label: 'FDA Recall Information',
      details: 'Check the FDA pet food recall page for current recalls.',
      history: [
        'Check the FDA pet food recall page for current recalls: https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals',
      ],
    },
    macroProfile: {
      protein: '32% - 38% (DM)',
      fat: '16% - 20% (DM)',
      carbohydrates: '32% - 38% (DM)',
      fiber: '4.5%',
      moisture: '10.0%',
    },
    pros: [
      'Ingredient traceability: enter your bag’s lot code online to verify farm sourcing.',
      'Certified Humane raised meats and Ocean Wise certified sustainable wild fish.',
      'RawMix line features dry kibble coated in freeze-dried bone broth and organ meat.',
      'Free of poultry by-product meals and artificial colors.',
      'Offers both ancient grains (millet, quinoa) and grain-free options.',
    ],
    cons: [
      'Higher price point than conventional supermarket kibble.',
      'Primarily sold in specialty pet retailers or online.',
      'Calorie density requires careful measuring to avoid overfeeding.',
    ],
    overview:
      'Open Farm was founded in 2014 with a focus on ingredient transparency and animal welfare standards. The brand offers lot-code traceability allowing consumers to look up the sourcing of ingredients in their pet’s food. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    deepDive: [
      'Traceability & Welfare Standards: Open Farm provides lot-code lookup tools for customers to trace ingredient origins. Animal proteins are sourced from farms certified by humane care standards (pasture-raised, crate-free, or wild-caught fish).',
      'RawMix Recipe Style: Open Farm RawMix pairs dry kibble with freeze-dried raw inclusions and a bone broth coating to enhance aroma and palatability without artificial flavor sprays.',
      'Grain Options: The brand provides recipes featuring ancient grains (steel-cut oats, sorghum, quinoa, and millet) as well as grain-free recipes for dogs with specific dietary requirements.',
    ],
    ingredientPillars: [
      {
        title: '1. Animal Welfare Sourcing',
        score: '',
        explanation: 'Certified Humane pasture-raised meats and Ocean Wise certified seafood.',
      },
      {
        title: '2. Supply Traceability',
        score: '',
        explanation: 'Lot-code lookup tool enables tracing of ingredients to supplier regions.',
      },
      {
        title: '3. Broth & Organ Inclusions',
        score: '',
        explanation: 'Kibbles in the RawMix line are coated with freeze-dried bone broth and organ meats.',
      },
      {
        title: '4. Manufacturing & Facilities',
        score: '',
        explanation: 'Produced in SQF-certified North American facilities. Check the FDA pet food recall page for current recalls.',
      },
    ],
    keyProductLines: [
      {
        name: 'RawMix Grain-Free Front Range Recipe',
        type: 'Freeze-Dried Raw Coated Kibble',
        description: 'Beef, lamb, and pork kibble coated in freeze-dried raw bone broth with raw meat pieces.',
        targetDogs: 'Active dogs and picky eaters.',
      },
      {
        name: 'RawMix Ancient Grains Open Prairie Recipe',
        type: 'Ancient Grain Kibble',
        description: 'Chicken and turkey paired with non-GMO ancient grains (oats, millet, quinoa) and raw bone broth.',
        targetDogs: 'Dogs that do well with whole grains.',
      },
      {
        name: 'Wild Ocean Catch Recipe',
        type: 'Single-Source Wild Fish Formula',
        description: 'Ocean Wise wild-caught salmon, whitefish, and herring rich in omega-3 fatty acids (EPA/DHA).',
        targetDogs: 'Dogs that benefit from fish-based protein and omega-3s for coat support.',
      },
    ],
    veterinaryVerdict:
      'Open Farm emphasizes ethical sourcing and ingredient transparency with lot-code traceability across its product lines. Based on publicly listed ingredients and information as of October 2026. Always check the current label.',
    feedingRecommendation:
      'Because Open Farm kibble is nutrient-dense, measuring portions with a kitchen scale or measuring cup according to your dog’s weight helps maintain ideal body condition.',
    affiliateProductKeys: [
      'open-farm-rawmix-front-range-20lb',
      'open-farm-rawmix-open-prairie-20lb',
      'open-farm-rawmix-wild-ocean-20lb',
    ],
  },
};
