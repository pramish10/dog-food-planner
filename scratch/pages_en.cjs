const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('src/i18n/pages.ts');

const en = {
  about: {
    missionBadge: 'OUR MISSION // CLINICAL CANINE NUTRITION',
    whyTitle: 'Why DogFoodPlanner Was Created',
    whyP1: 'For decades, the commercial pet food market has operated as a black box. Commercial dry kibble formulas regularly undergo ultra-high heat extrusion (exceeding 400°F), stripping out natural vitamins, oxidising essential omega fatty acids, and padding bag weight with up to 60% high-glycemic starches.',
    whyP2: 'Meanwhile, fresh-food subscription startups charge upwards of $300 to $450 per month for basic lean meats and vegetables. DogFoodPlanner bridges this gap. We provide the exact mathematical algorithms used by clinical canine nutritionists so dog parents can prepare balanced fresh meals, raw BARF ratios, or superfood toppers cost-effectively at home.',
    methodTitle: 'Our Nutritional Methodology',
    pillars: [
      {
        tag: '01 // NRC FORMULAS',
        title: 'Resting Metabolic Math',
        desc: 'Calculates exact Resting Energy Requirement (RER) based on exponential body mass (70 × (kg)^0.75) instead of rough weight-range averages.'
      },
      {
        tag: '02 // AAFCO STANDARDS',
        title: 'Bioavailable Micronutrients',
        desc: 'Every formulation balances calcium-to-phosphorus ratios (1.2:1 to 1.4:1), EPA/DHA ratios, and essential taurine pathways.'
      },
      {
        tag: '03 // ZERO PAYWALLS',
        title: 'Open & Independent',
        desc: 'We do not accept sponsored brand placements or conceal recipe grams behind forced credit card subscriptions.'
      }
    ],
    ctaTitle: "Ready to Calculate Your Dog's Nutritional Needs?",
    ctaDesc: 'Try our interactive calculator, explore our canine allergy guides, and view our veterinary food reviews.',
    ctaBtn: 'Launch Free Nutrition Calculator →'
  },
  contact: {
    eyebrow: 'SUPPORT & FEEDBACK // DIRECT INQUIRIES',
    cards: [
      { icon: '📧', title: 'Email Inquiries', desc: 'General questions & feedback:', email: 'hello@dogfoodplanner.com' },
      { icon: '🐾', title: 'Nutrition Research', desc: 'Veterinary formula inquiries:', email: 'hello@dogfoodplanner.com' },
      { icon: '🛡️', title: 'Technical & Data', desc: 'Bug reports & calculator queries:', email: 'hello@dogfoodplanner.com' }
    ],
    formTitle: 'Send Our Canine Nutrition Team a Message',
    formDesc: 'Have questions regarding our NRC calorie formulas or need help with a custom raw recipe? We reply within 24 business hours.',
    nameLabel: 'Your Name',
    namePlaceholder: 'e.g. Sarah Jenkins',
    emailLabel: 'Your Email Address',
    emailPlaceholder: 'sarah@example.com',
    subjectLabel: 'Inquiry Topic',
    subjectOptions: ['General Question / Feedback', 'Canine Nutrition & Recipe Inquiry', 'Calculator Formula Question', 'Bug Report / Technical Issue'],
    messageLabel: 'Your Message',
    messagePlaceholder: 'Tell us about your dog (breed, weight, age) and how we can assist...',
    submitBtn: 'Send Message →',
    notice: 'Veterinary Emergency Notice: If your pet is exhibiting acute symptoms of poisoning or severe distress, contact your emergency veterinarian or the ASPCA Poison Control hotline immediately.',
    faqTitle: 'Looking for fast answers?',
    faqDesc: 'Check our comprehensive 40+ veterinary FAQ knowledge base covering picky eating, raw diets, cat food, and commercial dog food brands.',
    faqBtn: 'Browse All FAQs →'
  },
  privacy: {
    eyebrow: 'LEGAL // DATA PROTECTION & PRIVACY',
    lastUpdated: 'Updated: January 2026',
    intro: 'At DogFoodPlanner.com, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, process, and safeguard information when you use our website.',
    sections: [
      {
        title: '1. Information We Do Not Collect',
        content: 'We believe your pet’s health data belongs to you. We do not require account registration, passwords, or credit cards to use our veterinary nutrition engine. Dog profiles, body weights, and meal selections entered into the calculator are processed client-side in your browser and are not saved to external databases.'
      },
      {
        title: '2. Anonymous Technical Data',
        content: 'Like most modern websites, our CDN servers automatically record standard anonymous request data, including IP address (anonymized), browser type, referring URL, and page timestamps to maintain site security, detect DDoS attacks, and deliver fast global performance.'
      },
      {
        title: '3. Browser Cookies & Local Storage',
        content: 'We use local browser storage (localStorage) exclusively to remember your preferred language selection and retain your active dog meal plan on your device so you do not lose your calculation when refreshing.'
      },
      {
        title: '4. Third-Party Links & Scientific Resources',
        content: 'Our site contains reference links to published scientific research, AAFCO standards, NRC databases, and external resources. We are not responsible for the privacy practices or content of third-party websites.'
      },
      {
        title: '5. Children’s Privacy',
        content: 'Our website is intended for general audiences and adult pet owners. We do not knowingly collect or solicit personal information from children under the age of 13.'
      },
      {
        title: '6. Policy Updates & Contact',
        content: 'We may periodically update this policy to reflect enhancements to our tools. Any changes will be posted directly to this page. If you have questions regarding this policy, please contact privacy@dogfoodplanner.com.'
      }
    ]
  },
  terms: {
    eyebrow: 'LEGAL // TERMS OF SERVICE',
    lastUpdated: 'Updated: January 2026',
    intro: 'Please review these Terms of Service carefully before utilizing DogFoodPlanner.com. By using this website, you acknowledge and agree to these terms.',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: 'By accessing and utilizing DogFoodPlanner.com (the "Site" or "Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any portion of these terms, please discontinue use immediately.'
      },
      {
        title: '2. Veterinary & Medical Disclaimer',
        content: 'The information, calculators, and recipe guidelines provided on DogFoodPlanner.com are developed for educational and informational purposes only. The content is based on published National Research Council (NRC) and AAFCO nutritional models, but it does NOT constitute professional veterinary medical advice, clinical diagnosis, or personalized treatment. Always consult a licensed veterinarian or board-certified veterinary nutritionist (DACVN) before significantly altering your pet’s diet, especially for puppies, pregnant dogs, or dogs with chronic renal, cardiac, or metabolic disorders.'
      },
      {
        title: '3. Use of Interactive Calculators',
        content: 'All energy requirement calculations (RER and MER) and gram portion estimates are mathematical starting baselines. Individual canine metabolisms vary widely based on genetics, neuter status, environmental temperatures, and underlying health. Pet owners must regularly assess their dog’s Body Condition Score (BCS) and adjust intake accordingly.'
      },
      {
        title: '4. Homemade Diet Safety & Calcium Balancing',
        content: 'Feeding a homemade or raw diet requires strict adherence to complete micronutrient profiles. In particular, feeding boneless meat without adequate calcium supplementation causes severe metabolic bone disease and hypocalcemia. Users assume full responsibility for appropriately measuring and balancing all ingredients.'
      },
      {
        title: '5. Intellectual Property Rights',
        content: 'All content, proprietary calculator code, visual interface designs, infographics, and written articles on DogFoodPlanner.com are the exclusive intellectual property of DogFoodPlanner and protected by copyright and international intellectual property laws.'
      },
      {
        title: '6. Limitation of Liability',
        content: 'In no event shall DogFoodPlanner.com, its authors, veterinary advisors, or operators be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the information and tools provided on this website.'
      }
    ]
  },
  bestFood: {
    eyebrow: 'PILLAR GUIDE // CLINICAL CANINE RANKING 2026',
    rankingsTitle: 'What Are the Top 5 Healthiest Dog Foods in 2026?',
    rankingsIntro: 'Canine nutritional longevity research confirms that minimal heat processing and high biological moisture are the two strongest predictors of canine vitality, kidney health, and disease resistance.',
    rankings: [
      {
        rank: '01',
        title: 'Gently Cooked Human-Grade Fresh Food',
        score: '98/100',
        pros: 'Real USDA meats and vegetables cooked at low temperatures (160°F). Retains 70%+ natural moisture, live enzymes, and bioavailable vitamins.',
        cons: 'Requires freezer or refrigerator storage. Slightly higher cost than commercial kibble.'
      },
      {
        rank: '02',
        title: 'Ancestral 80-10-10 Raw BARF Diets',
        score: '95/100',
        pros: 'Biologically appropriate balance: 80% muscle meat, 10% bone, 10% organ. Promotes optimal dental health and lean muscle tone.',
        cons: 'Requires strict safe food handling and careful calcium balancing.'
      },
      {
        rank: '03',
        title: 'Air-Dried & Freeze-Dried Raw Dog Food',
        score: '91/100',
        pros: 'Delivers raw nutritional integrity with ambient shelf stability. Excellent convenient topper for picky eaters.',
        cons: 'Must be rehydrated with warm water or bone broth for optimal kidney function.'
      },
      {
        rank: '04',
        title: 'High-Protein Grain-Free & Ancient Grain Kibble',
        score: '78/100',
        pros: 'Convenient, shelf-stable, and budget-accessible for large and multi-dog households.',
        cons: 'Undergoes 400°F extrusion, only 8-10% moisture, contains 40-50% high-glycemic starches.'
      },
      {
        rank: '05',
        title: 'Prescription Therapeutic Diets',
        score: '72/100',
        pros: 'Formulated specifically for clinical renal failure, liver disease, or struvite bladder stones.',
        cons: 'Often utilizes lower-grade carbohydrate fillers and requires veterinary prescription.'
      }
    ],
    buyerGuideTitle: '4 Golden Rules for Choosing the Best Dog Food',
    buyerRules: [
      {
        title: '1. Named Animal Protein First',
        desc: 'Look for "Deboned Turkey", "Beef", or "Wild Salmon" as the primary ingredient rather than ambiguous generic "meat meal".'
      },
      {
        title: '2. High Biological Moisture (>70%)',
        desc: 'Dry kibble (8-10% moisture) causes chronic low-grade dehydration. Always add fresh toppers or rehydrate with warm bone broth.'
      },
      {
        title: '3. Zero Synthetic Preservatives',
        desc: 'Strictly avoid BHA, BHT, ethoxyquin, propylene glycol, and artificial food colorings.'
      },
      {
        title: '4. Controlled Carbohydrates (<25%)',
        desc: 'Dogs lack salivary amylase. High-starch diets overtax the pancreas and accelerate obesity.'
      }
    ],
    ctaTitle: 'Calculate Exact Portions for Your Dog’s Ideal Food',
    ctaDesc: 'Whether you choose fresh, raw, or premium kibble, get your dog’s exact daily grams and calorie target.',
    ctaBtn: 'Calculate Meal Portions Now →'
  },
  recipes: {
    eyebrow: 'RECIPE ARCHIVE // NRC & AAFCO NUTRITION BLUEPRINTS',
    heroTitle: 'Veterinary Homemade Dog Food Recipes',
    heroSubtitle: 'Step-by-step blueprints for preparing healthy, complete, and balanced gently cooked meals and ancestral 80-10-10 raw BARF diets at home.',
    calciumWarningTitle: 'The #1 Rule of Homemade Dog Food: Calcium Balancing',
    calciumWarningDesc: 'Muscle meat is naturally very high in phosphorus and low in calcium (1:20 ratio). Feeding plain chicken, beef, and rice without added calcium will cause severe metabolic bone disease and skeletal demineralization within months. Always add 1/2 teaspoon of pure powdered eggshell (approx. 900mg elemental calcium) per pound of boneless meat to achieve the essential 1.2:1 Calcium-to-Phosphorus ratio.',
    recipesList: [
      {
        tag: 'GENTLY COOKED',
        title: 'Recipe 1: Gently Cooked Turkey & Prebiotic Pumpkin (Sensitive Stomach Friendly)',
        desc: 'Ideal for dogs with sensitive digestion, loose stools, or poultry allergies to factory chicken.',
        ingredients: [
          'USDA Ground Turkey (93/7) — 65% (approx. 2 lbs)',
          'Turkey or Beef Hearts (Natural Taurine) — 10% (approx. 5 oz)',
          'Pure Canned Pumpkin Puree (Digestive Fiber) — 10% (approx. 5 oz)',
          'Steamed Baby Spinach & Diced Zucchini — 10% (approx. 5 oz)',
          'Wild Alaskan Salmon Oil (EPA/DHA) — 2% (1.5 tbsp)',
          'Clean Eggshell Powder (Elemental Calcium) — 3% (1 full tsp)'
        ],
        prep: 'Sauté turkey and hearts on medium-low heat until lightly cooked (160°F). Steam vegetables, blend with pumpkin, and fold into cooked meats. Let cool completely before stirring in salmon oil and eggshell powder. Store in meal-sized portions.'
      },
      {
        tag: 'RAW BARF',
        title: 'Recipe 2: Ancestral 80-10-10 Raw BARF Beef & Duck',
        desc: 'Biologically balanced raw ancestral diet for healthy adult dogs with strong digestive acids.',
        ingredients: [
          'Lean Grass-Fed Beef Muscle Meat & Trimmings — 70%',
          'Beef Heart (Rich in L-Carnitine & CoQ10) — 10%',
          'Raw Edible Duck Necks or Chicken Frames — 10% (Natural Bone & Calcium)',
          'Beef Liver (Vitamin A & B-Complex) — 5%',
          'Beef Kidney or Spleen (Essential Secreting Organ) — 5%'
        ],
        prep: 'Dice beef muscle and heart into bite-sized chunks. Thaw raw edible bone pieces. Weigh organs precisely using a digital gram scale. Freeze all portions for at least 3 weeks at -4°F (-20°C) prior to feeding.'
      },
      {
        tag: 'SUPERFOOD TOPPER',
        title: 'Recipe 3: 80/20 Antioxidant Superfood Kibble Topper',
        desc: 'Cost-effective fresh food booster designed to replace 20% of your dog’s dry kibble calories.',
        ingredients: [
          'Gently Poached Pastured Eggs — 40%',
          'Steamed Broccoli Sprouts & Wild Blueberries — 30%',
          'Simmered Grass-Fed Beef Bone Broth — 20%',
          'Kelp Powder & Organic Hemp Seeds — 10%'
        ],
        prep: 'Lightly soft-boil eggs. Steam green veggies for 3 minutes. Blend with warm bone broth and organic berries. Pour 2-4 tablespoons over your dog’s standard kibble bowl daily.'
      }
    ],
    calciumGuideTitle: 'Safe Calcium Sources for Homemade Dog Diets',
    calciumGuideItems: [
      {
        title: 'Eggshell Powder',
        ratio: '1/2 tsp per 1 lb boneless meat',
        desc: '95% pure calcium carbonate. Easy to grind at home from washed, baked eggshells. Safe and neutral.'
      },
      {
        title: 'Raw Edible Meaty Bones',
        ratio: '10% of total diet weight',
        desc: 'Duck necks, chicken wings, or turkey necks. Never feed cooked bones, which become brittle and splinter.'
      },
      {
        title: 'Veterinary Bone Meal',
        ratio: 'Follow manufacturer specifications',
        desc: 'Microcrystalline hydroxyapatite delivering calcium and phosphorus in a natural, bioavailable 2:1 ratio.'
      }
    ]
  },
  toxic: {
    eyebrow: 'CRITICAL SAFETY // CANINE INGREDIENT TOXICITY',
    dangerTitle: 'The Most Dangerous Household Foods for Dogs',
    dangerIntro: 'Certain human foods contain biochemical compounds that canine metabolisms cannot break down, causing acute organ failure or toxicity.',
    dangerList: [
      {
        name: 'Chocolate & Cocoa',
        toxin: 'Theobromine & Caffeine',
        symptoms: 'Vomiting, rapid panting, tachycardia, muscle tremors, seizures, cardiac arrest.',
        risk: 'HIGH TO FATAL'
      },
      {
        name: 'Grapes, Raisins & Currants',
        toxin: 'Tartaric Acid',
        symptoms: 'Lethargy, dehydration, acute irreversible kidney (renal) failure within 24-72 hours.',
        risk: 'EXTREMELY FATAL'
      },
      {
        name: 'Xylitol (Birch Sugar / E967)',
        toxin: 'Synthetic Sugar Alcohol',
        symptoms: 'Massive insulin surge, profound hypoglycemia, ataxia, acute liver necrosis within hours.',
        risk: 'CRITICAL EMERGENCY'
      },
      {
        name: 'Onions, Garlic, Leeks & Chives',
        toxin: 'N-propyl Disulfide',
        symptoms: 'Destroys red blood cells, hemolytic anemia, pale gums, dark red/brown urine, weakness.',
        risk: 'HIGH CUMULATIVE'
      },
      {
        name: 'Macadamia Nuts',
        toxin: 'Unknown Neurotoxic Factor',
        symptoms: 'Hind-limb weakness, hypothermia or high fever, vomiting, muscle stiffness.',
        risk: 'MODERATE TO SEVERE'
      },
      {
        name: 'Cooked Bones of Any Kind',
        toxin: 'Physical Splinter Hazard',
        symptoms: 'Gastrointestinal perforation, internal bleeding, peritonitis, fatal bowel blockage.',
        risk: 'SURGICAL EMERGENCY'
      }
    ],
    emergencyTitle: 'What to Do in a Pet Poisoning Emergency',
    emergencySteps: [
      '1. Act Immediately: Identify the exact substance, packaging, estimated amount ingested, and the time.',
      '2. Do NOT Induce Vomiting without Veterinary Instruction: Caustic chemicals, petroleum products, and sharp objects cause secondary burns and esophageal tearing if regurgitated.',
      '3. Call Animal Emergency Services Immediately: Contact your 24/7 veterinary clinic or ASPCA Animal Poison Control (888-426-4435).'
    ],
    safeTitle: '100% Safe Canine Fruits & Vegetables',
    safeIntro: 'These dog-friendly whole foods provide natural antioxidants, soluble prebiotic fiber, and vitamins when added to your dog’s bowl:',
    safeFoods: [
      { name: 'Blueberries', benefit: 'Packed with anthocyanins, polyphenols, and cellular antioxidants.' },
      { name: 'Pure Pumpkin', benefit: 'Rich soluble fiber that naturally relieves both diarrhea and constipation.' },
      { name: 'Carrots', benefit: 'Low-calorie crunchy treat rich in beta-carotene and helps clean teeth.' },
      { name: 'Green Beans', benefit: 'Excellent low-glycemic bulking vegetable for weight-management diets.' },
      { name: 'Apples (No Seeds)', benefit: 'Natural source of vitamin C, vitamin A, and prebiotic pectin.' }
    ]
  },
  brands: {
    eyebrow: 'INDEPENDENT ANALYSIS // BRAND REVIEWS & RECALL LOG',
    heroTitle: 'Dog Food Brand Reviews & Recall History',
    heroSubtitle: 'Unbiased, veterinarian-informed reviews of major pet food brands, AAFCO labeling rules, and recall tracking to protect your canine companion.',
    brandsList: [
      {
        name: 'Blue Buffalo',
        grade: 'Grade: B+',
        pros: 'Real deboned meat is ingredient #1; no corn, wheat, or soy; cold-formed LifeSource Bits provide vitamins.',
        cons: 'High carbohydrate load (45-50%); historical FDA recalls for moisture/mold and elevated Vitamin D.',
        verdict: 'Above-average commercial kibble. Consider adding 20% fresh whole food toppers to improve moisture.'
      },
      {
        name: 'Rachael Ray Nutrish',
        grade: 'Grade: C+ / B-',
        pros: 'Budget-friendly and widely available; Peak and Dish lines feature improved real meat inclusion.',
        cons: 'Standard lines rely heavily on pea protein and corn gluten fillers; past FDA DCM investigation inclusion.',
        verdict: 'Acceptable budget option in higher-tier lines, but inspect ingredient labels carefully for legume splitting.'
      },
      {
        name: 'Pure Balance (Walmart)',
        grade: 'Grade: B (Best Budget)',
        pros: 'Exceptional price-to-quality ratio; meat-first recipes free from corn, wheat, soy, and artificial colors.',
        cons: 'Manufactured by contract co-packers; moderate carbohydrate levels.',
        verdict: 'One of the best value supermarket brands available on the commercial dry dog food market.'
      },
      {
        name: 'Ollie Fresh Dog Food',
        grade: 'Grade: A',
        pros: '100% human-grade USDA meats and produce; gently cooked at low temperatures; precision pre-portioned packs.',
        cons: 'Premium monthly subscription cost ($180-$350/month); requires dedicated freezer storage.',
        verdict: 'Gold standard for canine metabolic health, coat vitality, and digestive longevity.'
      },
      {
        name: 'Open Farm',
        grade: 'Grade: A-',
        pros: 'Exceptional sourcing transparency; 100% certified humane meats and wild ocean-wise fish; ancient grain options.',
        cons: 'Premium price point; limited retail store availability.',
        verdict: 'Top choice for pet parents seeking ethical sourcing, high meat inclusion, and zero poultry by-products.'
      }
    ],
    recallsTitle: 'Understanding FDA Pet Food Recalls',
    recallsDesc: 'Pet food recalls fall into three distinct FDA classes: Class I (dangerous health hazard with risk of death, e.g. Salmonella, lethal aflatoxins, excessive Vitamin D), Class II (temporary adverse health effect), and Class III (minor labeling or weight violation). Always register your lot numbers and check the FDA recall database periodically.',
    methodTitle: 'Our 4-Point Brand Evaluation Standard',
    methodPillars: [
      { title: '1. Named Animal Protein', desc: 'Deboned whole muscle meats vs ambiguous byproduct meal.' },
      { title: '2. Carbohydrate Fraction', desc: 'Keeping starches under 40% to prevent metabolic obesity.' },
      { title: '3. Sourcing Transparency', desc: 'Traceable humane farms and non-GMO produce.' },
      { title: '4. Clean Recall Record', desc: 'Independent laboratory testing and rigorous plant safety.' }
    ]
  },
  allergies: {
    eyebrow: 'CLINICAL DERMATOLOGY // CANINE ALLERGIES & DIGESTION',
    heroTitle: 'Best Dog Food for Allergies & Sensitive Stomachs',
    heroSubtitle: 'Veterinary dermatology guide to food allergies, single-source novel proteins, and 8-week elimination diet protocols.',
    allergensTitle: 'The Top 5 Most Common Canine Food Allergens',
    allergensIntro: 'Canine food allergies are immune-mediated hypersensitivity reactions to specific dietary proteins. In order of clinical frequency:',
    allergensList: [
      { name: '1. Factory Chicken (60% of cases)', desc: 'Due to extreme overexposure across commercial pet food, chicken is the #1 canine allergen.' },
      { name: '2. Commercial Beef (30% of cases)', desc: 'Widely used red meat that triggers severe skin itching and ear infections in sensitive dogs.' },
      { name: '3. Dairy Products', desc: 'Adult dogs naturally lack lactase enzymes, causing explosive diarrhea and gas.' },
      { name: '4. Wheat & Corn Gluten', desc: 'High-glycemic grain proteins that trigger chronic inflammation and yeast overgrowth.' },
      { name: '5. Soy & Legumes', desc: 'Common cheap filler proteins that can impair gut barrier function and thyroid health.' }
    ],
    eliminationTitle: 'The 8-Week Veterinary Elimination Diet Protocol',
    eliminationSteps: [
      { step: 'Phase 1', title: 'Select One Pure Novel Protein', desc: 'Switch your dog to a single novel protein they have never consumed before (e.g. Venison, Rabbit, or Kangaroo) paired with a single digestible carbohydrate like pumpkin or sweet potato.' },
      { step: 'Phase 2', title: 'Zero Contamination (Strict 8 Weeks)', desc: 'For 8 consecutive weeks, feed exclusively the novel diet. Zero commercial treats, table scraps, flavored medications, or rawhide chews.' },
      { step: 'Phase 3', title: 'Controlled Single-Ingredient Rechallenge', desc: 'If itching and gastrointestinal issues resolve, introduce one suspected protein (e.g. chicken) for 7 days. If symptoms return, you have confirmed the allergy.' }
    ],
    novelTitle: 'Top Recommended Novel & Hypoallergenic Proteins',
    novelProteins: [
      { name: 'Venison (Deer)', desc: 'Lean, nutrient-dense red meat that sensitive dogs rarely have antibodies against.' },
      { name: 'Rabbit', desc: 'Extremely hypoallergenic novel protein with an ideal ratio of essential amino acids.' },
      { name: 'Duck', desc: 'Excellent flavorful alternative for dogs with severe factory chicken intolerance.' },
      { name: 'Kangaroo', desc: 'One of the leanest, cleanest wild proteins in veterinary dermatology.' }
    ]
  },
  calculator: {
    eyebrow: '100% FREE // CANINE NUTRITION GUIDELINES',
    noticeTitle: 'Notice:',
    noticeText: 'For general & educational guidance only. Not a diagnostic tool or medical substitute.',
    heroTitle: 'Veterinary Dog Feeding & Calorie Calculator',
    heroSubtitle: 'Determine your dog’s exact daily caloric needs (RER & MER) and calculate custom gram meal portions based on weight, age, activity level, and body condition score.'
  },
  breeds: {
    eyebrow: 'BREED NUTRITION // CANINE GUIDELINES',
    targetWeight: 'Target Weight',
    dailyCalories: 'Daily Calories',
    freshDaily: 'Fresh Food Daily',
    kibbleDaily: 'Kibble Daily',
    cups: 'cups',
    reqsTitle: 'Nutritional Requirements for {name}s',
    reqsIntro: 'As a {category} dog with an average weight of {w0}–{w1} lbs, the {name} requires a tailored nutrient ratio:',
    predispositionsTitle: 'Key Health & Dietary Predispositions:',
    feedingRoutineTitle: 'Feeding Routine Recommendation:',
    feedingRoutineDesc: 'Feed your adult {name} twice daily (50% in the morning and 50% in the evening). Always ensure clean filtered water is available. If feeding dry kibble, rehydrate with warm bone broth or water to support kidney longevity.',
    ctaTitle: 'Customize Your {name}’s Exact Meal Plan',
    ctaSubtitle: 'Adjust for your dog’s exact age (puppy, adult, senior), exact weight, activity level, and body condition score with our free calculator.',
    ctaBtn: 'Launch {name} Calculator →',
    faqTitle: 'Common Feeding FAQs for {name}s',
    faqSubtitle: 'Answers to portion questions, feeding frequency, and best foods.'
  },
  comparisonTable: {
    eyebrow: '04 // CLINICAL COMPARISON',
    title: 'Why Biological Whole Food Trumps Kibble',
    subtitle: 'A side-by-side analysis of biological bioavailability, processing temperatures, and financial transparency.',
    scrollHint: '↔ Scroll table horizontally',
    colMetric: 'Nutritional Metric',
    colDfp: '✨ DogFoodPlanner',
    colSubs: 'Subscriptions',
    colKibble: 'Dry Kibble',
    rows: [
      {
        metric: 'Processing Method',
        dfp: 'Gently Cooked (160°F) or Raw Enzymes',
        subs: 'Flash-Frozen Cooked',
        kibble: 'High-Heat Extrusion (400°F)'
      },
      {
        metric: 'Net Carbohydrates',
        dfp: '< 3.5% (Vegetables only)',
        subs: '10% – 15%',
        kibble: '45% – 60% (Starch fillers)'
      },
      {
        metric: 'Biological Moisture',
        dfp: '70% – 75% (Essential renal hydration)',
        subs: '70% – 75%',
        kibble: '8% – 10% (Sub-clinical dehydration)'
      },
      {
        metric: 'Ingredient Transparency',
        dfp: '100% Disclosed grams & percentages',
        subs: 'Proprietary blend (amounts withheld)',
        kibble: 'Split ingredients & generic meat meals'
      },
      {
        metric: 'Average Monthly Cost (50 lb dog)',
        dfp: '$85 – $120 (Prepared at home)',
        subs: '$280 – $380 / month',
        kibble: '$60 – $95 / month'
      }
    ]
  },
  faqPage: {
    badge: 'KNOWLEDGE BASE // 40+ VERIFIED CANINE ANSWERS',
    exploreHubsTitle: 'Explore Dedicated Canine Nutrition Hubs',
    exploreHubsSubtitle: 'Deep-dive into specialized guides created for dog parents seeking optimal health.',
    cardBestFood: 'Comparison of fresh, raw, high-protein kibble, and specialized formulas for small and sensitive dogs.',
    cardCalc: 'Scientific RER and MER calorie calculator delivering exact gram and cup meal portions.',
    cardRecipes: 'Balanced gently cooked and 80-10-10 raw BARF recipes with essential calcium balancing.',
    cardAllergies: 'Novel protein selection, elimination diets, and soothing gut microbiome protocols.',
    cardToxic: 'Complete index of dangerous human foods, safe fruits, vegetables, and chemical additives.',
    cardBrands: 'Unbiased reviews for Blue Buffalo, Nutrish, Pure Balance, Ollie, and Open Farm.'
  },
  faqSingle: {
    reviewedBy: 'Reviewed by: Veterinary Canine Nutritionist',
    updated: 'Updated: 2026',
    directQuickAnswer: 'Direct Quick Answer',
    clinicalAnalysis: 'Detailed Nutritional & Clinical Analysis',
    topics: 'Topics:',
    ctaBadge: '🐾 Free Canine Nutrition Engine',
    ctaTitle: 'Calculate Exact Daily Calories & Meal Portions For Your Dog',
    ctaSubtitle: 'Use our free veterinary calculator to determine your dog’s exact metabolic burn (RER/MER) and get custom fresh or raw food recipe grams.',
    ctaBtn: 'Calculate Portions Now →',
    relatedTitle: 'Related Canine Nutrition Questions',
    readAnswer: 'Read Answer →'
  }
};

module.exports = { en };
