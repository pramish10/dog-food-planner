import type { Lang } from './ui';

export const PAGE_TRANSLATIONS = {
  en: {
  "about": {
    "missionBadge": "OUR MISSION // CLINICAL CANINE NUTRITION",
    "whyTitle": "Why DogFoodPlanner Was Created",
    "whyP1": "For decades, the commercial pet food market has operated as a black box. Commercial dry kibble formulas regularly undergo ultra-high heat extrusion (exceeding 400°F), stripping out natural vitamins, oxidising essential omega fatty acids, and padding bag weight with up to 60% high-glycemic starches.",
    "whyP2": "Meanwhile, fresh-food subscription startups charge upwards of $300 to $450 per month for basic lean meats and vegetables. DogFoodPlanner bridges this gap. We provide the exact mathematical algorithms used by clinical canine nutritionists so dog parents can prepare balanced fresh meals, raw BARF ratios, or superfood toppers cost-effectively at home.",
    "methodTitle": "Our Nutritional Methodology",
    "pillars": [
      {
        "tag": "01 // NRC FORMULAS",
        "title": "Resting Metabolic Math",
        "desc": "Calculates exact Resting Energy Requirement (RER) based on exponential body mass (70 × (kg)^0.75) instead of rough weight-range averages."
      },
      {
        "tag": "02 // AAFCO STANDARDS",
        "title": "Bioavailable Micronutrients",
        "desc": "Every formulation balances calcium-to-phosphorus ratios (1.2:1 to 1.4:1), EPA/DHA ratios, and essential taurine pathways."
      },
      {
        "tag": "03 // ZERO PAYWALLS",
        "title": "Open & Independent",
        "desc": "We do not accept sponsored brand placements or conceal recipe grams behind forced credit card subscriptions."
      }
    ],
    "ctaTitle": "Ready to Calculate Your Dog's Nutritional Needs?",
    "ctaDesc": "Try our interactive calculator, explore our canine allergy guides, and view our veterinary food reviews.",
    "ctaBtn": "Launch Free Nutrition Calculator →"
  },
  "contact": {
    "eyebrow": "SUPPORT & FEEDBACK // DIRECT INQUIRIES",
    "cards": [
      {
        "icon": "📧",
        "title": "Email Inquiries",
        "desc": "General questions & feedback:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🐾",
        "title": "Nutrition Research",
        "desc": "Veterinary formula inquiries:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🛡️",
        "title": "Technical & Data",
        "desc": "Bug reports & calculator queries:",
        "email": "hello@dogfoodplanner.com"
      }
    ],
    "formTitle": "Send Our Canine Nutrition Team a Message",
    "formDesc": "Have questions regarding our NRC calorie formulas or need help with a custom raw recipe? We reply within 24 business hours.",
    "nameLabel": "Your Name",
    "namePlaceholder": "e.g. Sarah Jenkins",
    "emailLabel": "Your Email Address",
    "emailPlaceholder": "sarah@example.com",
    "subjectLabel": "Inquiry Topic",
    "subjectOptions": [
      "General Question / Feedback",
      "Canine Nutrition & Recipe Inquiry",
      "Calculator Formula Question",
      "Bug Report / Technical Issue"
    ],
    "messageLabel": "Your Message",
    "messagePlaceholder": "Tell us about your dog (breed, weight, age) and how we can assist...",
    "submitBtn": "Send Message →",
    "notice": "Veterinary Emergency Notice: If your pet is exhibiting acute symptoms of poisoning or severe distress, contact your emergency veterinarian or the ASPCA Poison Control hotline immediately.",
    "faqTitle": "Looking for fast answers?",
    "faqDesc": "Check our comprehensive 40+ veterinary FAQ knowledge base covering picky eating, raw diets, cat food, and commercial dog food brands.",
    "faqBtn": "Browse All FAQs →"
  },
  "privacy": {
    "eyebrow": "LEGAL // DATA PROTECTION & PRIVACY",
    "lastUpdated": "Updated: January 2026",
    "intro": "At DogFoodPlanner.com, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, process, and safeguard information when you use our website.",
    "sections": [
      {
        "title": "1. Information We Do Not Collect",
        "content": "We believe your pet’s health data belongs to you. We do not require account registration, passwords, or credit cards to use our veterinary nutrition engine. Dog profiles, body weights, and meal selections entered into the calculator are processed client-side in your browser and are not saved to external databases."
      },
      {
        "title": "2. Anonymous Technical Data",
        "content": "Like most modern websites, our CDN servers automatically record standard anonymous request data, including IP address (anonymized), browser type, referring URL, and page timestamps to maintain site security, detect DDoS attacks, and deliver fast global performance."
      },
      {
        "title": "3. Browser Cookies & Local Storage",
        "content": "We use local browser storage (localStorage) exclusively to remember your preferred language selection and retain your active dog meal plan on your device so you do not lose your calculation when refreshing."
      },
      {
        "title": "4. Third-Party Links & Scientific Resources",
        "content": "Our site contains reference links to published scientific research, AAFCO standards, NRC databases, and external resources. We are not responsible for the privacy practices or content of third-party websites."
      },
      {
        "title": "5. Children’s Privacy",
        "content": "Our website is intended for general audiences and adult pet owners. We do not knowingly collect or solicit personal information from children under the age of 13."
      },
      {
        "title": "6. Policy Updates & Contact",
        "content": "We may periodically update this policy to reflect enhancements to our tools. Any changes will be posted directly to this page. If you have questions regarding this policy, please contact privacy@dogfoodplanner.com."
      }
    ]
  },
  "terms": {
    "eyebrow": "LEGAL // TERMS OF SERVICE",
    "lastUpdated": "Updated: January 2026",
    "intro": "Please review these Terms of Service carefully before utilizing DogFoodPlanner.com. By using this website, you acknowledge and agree to these terms.",
    "sections": [
      {
        "title": "1. Acceptance of Terms",
        "content": "By accessing and utilizing DogFoodPlanner.com (the \"Site\" or \"Service\"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any portion of these terms, please discontinue use immediately."
      },
      {
        "title": "2. Veterinary & Medical Disclaimer",
        "content": "The information, calculators, and recipe guidelines provided on DogFoodPlanner.com are developed for educational and informational purposes only. The content is based on published National Research Council (NRC) and AAFCO nutritional models, but it does NOT constitute professional veterinary medical advice, clinical diagnosis, or personalized treatment. Always consult a licensed veterinarian or board-certified veterinary nutritionist (DACVN) before significantly altering your pet’s diet, especially for puppies, pregnant dogs, or dogs with chronic renal, cardiac, or metabolic disorders."
      },
      {
        "title": "3. Use of Interactive Calculators",
        "content": "All energy requirement calculations (RER and MER) and gram portion estimates are mathematical starting baselines. Individual canine metabolisms vary widely based on genetics, neuter status, environmental temperatures, and underlying health. Pet owners must regularly assess their dog’s Body Condition Score (BCS) and adjust intake accordingly."
      },
      {
        "title": "4. Homemade Diet Safety & Calcium Balancing",
        "content": "Feeding a homemade or raw diet requires strict adherence to complete micronutrient profiles. In particular, feeding boneless meat without adequate calcium supplementation causes severe metabolic bone disease and hypocalcemia. Users assume full responsibility for appropriately measuring and balancing all ingredients."
      },
      {
        "title": "5. Intellectual Property Rights",
        "content": "All content, proprietary calculator code, visual interface designs, infographics, and written articles on DogFoodPlanner.com are the exclusive intellectual property of DogFoodPlanner and protected by copyright and international intellectual property laws."
      },
      {
        "title": "6. Limitation of Liability",
        "content": "In no event shall DogFoodPlanner.com, its authors, veterinary advisors, or operators be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the information and tools provided on this website."
      }
    ]
  },
  "bestFood": {
    "eyebrow": "PILLAR GUIDE // CLINICAL CANINE RANKING 2026",
    "rankingsTitle": "What Are the Top 5 Healthiest Dog Foods in 2026?",
    "rankingsIntro": "Canine nutritional longevity research confirms that minimal heat processing and high biological moisture are the two strongest predictors of canine vitality, kidney health, and disease resistance.",
    "rankings": [
      {
        "rank": "01",
        "title": "Gently Cooked Human-Grade Fresh Food",
        "score": "98/100",
        "pros": "Real USDA meats and vegetables cooked at low temperatures (160°F). Retains 70%+ natural moisture, live enzymes, and bioavailable vitamins.",
        "cons": "Requires freezer or refrigerator storage. Slightly higher cost than commercial kibble."
      },
      {
        "rank": "02",
        "title": "Ancestral 80-10-10 Raw BARF Diets",
        "score": "95/100",
        "pros": "Biologically appropriate balance: 80% muscle meat, 10% bone, 10% organ. Promotes optimal dental health and lean muscle tone.",
        "cons": "Requires strict safe food handling and careful calcium balancing."
      },
      {
        "rank": "03",
        "title": "Air-Dried & Freeze-Dried Raw Dog Food",
        "score": "91/100",
        "pros": "Delivers raw nutritional integrity with ambient shelf stability. Excellent convenient topper for picky eaters.",
        "cons": "Must be rehydrated with warm water or bone broth for optimal kidney function."
      },
      {
        "rank": "04",
        "title": "High-Protein Grain-Free & Ancient Grain Kibble",
        "score": "78/100",
        "pros": "Convenient, shelf-stable, and budget-accessible for large and multi-dog households.",
        "cons": "Undergoes 400°F extrusion, only 8-10% moisture, contains 40-50% high-glycemic starches."
      },
      {
        "rank": "05",
        "title": "Prescription Therapeutic Diets",
        "score": "72/100",
        "pros": "Formulated specifically for clinical renal failure, liver disease, or struvite bladder stones.",
        "cons": "Often utilizes lower-grade carbohydrate fillers and requires veterinary prescription."
      }
    ],
    "buyerGuideTitle": "4 Golden Rules for Choosing the Best Dog Food",
    "buyerRules": [
      {
        "title": "1. Named Animal Protein First",
        "desc": "Look for \"Deboned Turkey\", \"Beef\", or \"Wild Salmon\" as the primary ingredient rather than ambiguous generic \"meat meal\"."
      },
      {
        "title": "2. High Biological Moisture (>70%)",
        "desc": "Dry kibble (8-10% moisture) causes chronic low-grade dehydration. Always add fresh toppers or rehydrate with warm bone broth."
      },
      {
        "title": "3. Zero Synthetic Preservatives",
        "desc": "Strictly avoid BHA, BHT, ethoxyquin, propylene glycol, and artificial food colorings."
      },
      {
        "title": "4. Controlled Carbohydrates (<25%)",
        "desc": "Dogs lack salivary amylase. High-starch diets overtax the pancreas and accelerate obesity."
      }
    ],
    "ctaTitle": "Calculate Exact Portions for Your Dog’s Ideal Food",
    "ctaDesc": "Whether you choose fresh, raw, or premium kibble, get your dog’s exact daily grams and calorie target.",
    "ctaBtn": "Calculate Meal Portions Now →"
  },
  "recipes": {
    "eyebrow": "RECIPE ARCHIVE // NRC & AAFCO NUTRITION BLUEPRINTS",
    "heroTitle": "Veterinary Homemade Dog Food Recipes",
    "heroSubtitle": "Step-by-step blueprints for preparing healthy, complete, and balanced gently cooked meals and ancestral 80-10-10 raw BARF diets at home.",
    "calciumWarningTitle": "The #1 Rule of Homemade Dog Food: Calcium Balancing",
    "calciumWarningDesc": "Muscle meat is naturally very high in phosphorus and low in calcium (1:20 ratio). Feeding plain chicken, beef, and rice without added calcium will cause severe metabolic bone disease and skeletal demineralization within months. Always add 1/2 teaspoon of pure powdered eggshell (approx. 900mg elemental calcium) per pound of boneless meat to achieve the essential 1.2:1 Calcium-to-Phosphorus ratio.",
    "recipesList": [
      {
        "tag": "GENTLY COOKED",
        "title": "Recipe 1: Gently Cooked Turkey & Prebiotic Pumpkin (Sensitive Stomach Friendly)",
        "desc": "Ideal for dogs with sensitive digestion, loose stools, or poultry allergies to factory chicken.",
        "ingredients": [
          "USDA Ground Turkey (93/7) — 65% (approx. 2 lbs)",
          "Turkey or Beef Hearts (Natural Taurine) — 10% (approx. 5 oz)",
          "Pure Canned Pumpkin Puree (Digestive Fiber) — 10% (approx. 5 oz)",
          "Steamed Baby Spinach & Diced Zucchini — 10% (approx. 5 oz)",
          "Wild Alaskan Salmon Oil (EPA/DHA) — 2% (1.5 tbsp)",
          "Clean Eggshell Powder (Elemental Calcium) — 3% (1 full tsp)"
        ],
        "prep": "Sauté turkey and hearts on medium-low heat until lightly cooked (160°F). Steam vegetables, blend with pumpkin, and fold into cooked meats. Let cool completely before stirring in salmon oil and eggshell powder. Store in meal-sized portions."
      },
      {
        "tag": "RAW BARF",
        "title": "Recipe 2: Ancestral 80-10-10 Raw BARF Beef & Duck",
        "desc": "Biologically balanced raw ancestral diet for healthy adult dogs with strong digestive acids.",
        "ingredients": [
          "Lean Grass-Fed Beef Muscle Meat & Trimmings — 70%",
          "Beef Heart (Rich in L-Carnitine & CoQ10) — 10%",
          "Raw Edible Duck Necks or Chicken Frames — 10% (Natural Bone & Calcium)",
          "Beef Liver (Vitamin A & B-Complex) — 5%",
          "Beef Kidney or Spleen (Essential Secreting Organ) — 5%"
        ],
        "prep": "Dice beef muscle and heart into bite-sized chunks. Thaw raw edible bone pieces. Weigh organs precisely using a digital gram scale. Freeze all portions for at least 3 weeks at -4°F (-20°C) prior to feeding."
      },
      {
        "tag": "SUPERFOOD TOPPER",
        "title": "Recipe 3: 80/20 Antioxidant Superfood Kibble Topper",
        "desc": "Cost-effective fresh food booster designed to replace 20% of your dog’s dry kibble calories.",
        "ingredients": [
          "Gently Poached Pastured Eggs — 40%",
          "Steamed Broccoli Sprouts & Wild Blueberries — 30%",
          "Simmered Grass-Fed Beef Bone Broth — 20%",
          "Kelp Powder & Organic Hemp Seeds — 10%"
        ],
        "prep": "Lightly soft-boil eggs. Steam green veggies for 3 minutes. Blend with warm bone broth and organic berries. Pour 2-4 tablespoons over your dog’s standard kibble bowl daily."
      }
    ],
    "calciumGuideTitle": "Safe Calcium Sources for Homemade Dog Diets",
    "calciumGuideItems": [
      {
        "title": "Eggshell Powder",
        "ratio": "1/2 tsp per 1 lb boneless meat",
        "desc": "95% pure calcium carbonate. Easy to grind at home from washed, baked eggshells. Safe and neutral."
      },
      {
        "title": "Raw Edible Meaty Bones",
        "ratio": "10% of total diet weight",
        "desc": "Duck necks, chicken wings, or turkey necks. Never feed cooked bones, which become brittle and splinter."
      },
      {
        "title": "Veterinary Bone Meal",
        "ratio": "Follow manufacturer specifications",
        "desc": "Microcrystalline hydroxyapatite delivering calcium and phosphorus in a natural, bioavailable 2:1 ratio."
      }
    ]
  },
  "toxic": {
    "eyebrow": "CRITICAL SAFETY // CANINE INGREDIENT TOXICITY",
    "dangerTitle": "The Most Dangerous Household Foods for Dogs",
    "dangerIntro": "Certain human foods contain biochemical compounds that canine metabolisms cannot break down, causing acute organ failure or toxicity.",
    "dangerList": [
      {
        "name": "Chocolate & Cocoa",
        "toxin": "Theobromine & Caffeine",
        "symptoms": "Vomiting, rapid panting, tachycardia, muscle tremors, seizures, cardiac arrest.",
        "risk": "HIGH TO FATAL"
      },
      {
        "name": "Grapes, Raisins & Currants",
        "toxin": "Tartaric Acid",
        "symptoms": "Lethargy, dehydration, acute irreversible kidney (renal) failure within 24-72 hours.",
        "risk": "EXTREMELY FATAL"
      },
      {
        "name": "Xylitol (Birch Sugar / E967)",
        "toxin": "Synthetic Sugar Alcohol",
        "symptoms": "Massive insulin surge, profound hypoglycemia, ataxia, acute liver necrosis within hours.",
        "risk": "CRITICAL EMERGENCY"
      },
      {
        "name": "Onions, Garlic, Leeks & Chives",
        "toxin": "N-propyl Disulfide",
        "symptoms": "Destroys red blood cells, hemolytic anemia, pale gums, dark red/brown urine, weakness.",
        "risk": "HIGH CUMULATIVE"
      },
      {
        "name": "Macadamia Nuts",
        "toxin": "Unknown Neurotoxic Factor",
        "symptoms": "Hind-limb weakness, hypothermia or high fever, vomiting, muscle stiffness.",
        "risk": "MODERATE TO SEVERE"
      },
      {
        "name": "Cooked Bones of Any Kind",
        "toxin": "Physical Splinter Hazard",
        "symptoms": "Gastrointestinal perforation, internal bleeding, peritonitis, fatal bowel blockage.",
        "risk": "SURGICAL EMERGENCY"
      }
    ],
    "emergencyTitle": "What to Do in a Pet Poisoning Emergency",
    "emergencySteps": [
      "1. Act Immediately: Identify the exact substance, packaging, estimated amount ingested, and the time.",
      "2. Do NOT Induce Vomiting without Veterinary Instruction: Caustic chemicals, petroleum products, and sharp objects cause secondary burns and esophageal tearing if regurgitated.",
      "3. Call Animal Emergency Services Immediately: Contact your 24/7 veterinary clinic or ASPCA Animal Poison Control (888-426-4435)."
    ],
    "safeTitle": "100% Safe Canine Fruits & Vegetables",
    "safeIntro": "These dog-friendly whole foods provide natural antioxidants, soluble prebiotic fiber, and vitamins when added to your dog’s bowl:",
    "safeFoods": [
      {
        "name": "Blueberries",
        "benefit": "Packed with anthocyanins, polyphenols, and cellular antioxidants."
      },
      {
        "name": "Pure Pumpkin",
        "benefit": "Rich soluble fiber that naturally relieves both diarrhea and constipation."
      },
      {
        "name": "Carrots",
        "benefit": "Low-calorie crunchy treat rich in beta-carotene and helps clean teeth."
      },
      {
        "name": "Green Beans",
        "benefit": "Excellent low-glycemic bulking vegetable for weight-management diets."
      },
      {
        "name": "Apples (No Seeds)",
        "benefit": "Natural source of vitamin C, vitamin A, and prebiotic pectin."
      }
    ]
  },
  "brands": {
    "eyebrow": "INDEPENDENT ANALYSIS // BRAND REVIEWS & RECALL LOG",
    "heroTitle": "Dog Food Brand Reviews & Recall History",
    "heroSubtitle": "Unbiased, veterinarian-informed reviews of major pet food brands, AAFCO labeling rules, and recall tracking to protect your canine companion.",
    "brandsList": [
      {
        "name": "Blue Buffalo",
        "grade": "Grade: B+",
        "pros": "Real deboned meat is ingredient #1; no corn, wheat, or soy; cold-formed LifeSource Bits provide vitamins.",
        "cons": "High carbohydrate load (45-50%); historical FDA recalls for moisture/mold and elevated Vitamin D.",
        "verdict": "Above-average commercial kibble. Consider adding 20% fresh whole food toppers to improve moisture."
      },
      {
        "name": "Rachael Ray Nutrish",
        "grade": "Grade: C+ / B-",
        "pros": "Budget-friendly and widely available; Peak and Dish lines feature improved real meat inclusion.",
        "cons": "Standard lines rely heavily on pea protein and corn gluten fillers; past FDA DCM investigation inclusion.",
        "verdict": "Acceptable budget option in higher-tier lines, but inspect ingredient labels carefully for legume splitting."
      },
      {
        "name": "Pure Balance (Walmart)",
        "grade": "Grade: B (Best Budget)",
        "pros": "Exceptional price-to-quality ratio; meat-first recipes free from corn, wheat, soy, and artificial colors.",
        "cons": "Manufactured by contract co-packers; moderate carbohydrate levels.",
        "verdict": "One of the best value supermarket brands available on the commercial dry dog food market."
      },
      {
        "name": "Ollie Fresh Dog Food",
        "grade": "Grade: A",
        "pros": "100% human-grade USDA meats and produce; gently cooked at low temperatures; precision pre-portioned packs.",
        "cons": "Premium monthly subscription cost ($180-$350/month); requires dedicated freezer storage.",
        "verdict": "Gold standard for canine metabolic health, coat vitality, and digestive longevity."
      },
      {
        "name": "Open Farm",
        "grade": "Grade: A-",
        "pros": "Exceptional sourcing transparency; 100% certified humane meats and wild ocean-wise fish; ancient grain options.",
        "cons": "Premium price point; limited retail store availability.",
        "verdict": "Top choice for pet parents seeking ethical sourcing, high meat inclusion, and zero poultry by-products."
      }
    ],
    "recallsTitle": "Understanding FDA Pet Food Recalls",
    "recallsDesc": "Pet food recalls fall into three distinct FDA classes: Class I (dangerous health hazard with risk of death, e.g. Salmonella, lethal aflatoxins, excessive Vitamin D), Class II (temporary adverse health effect), and Class III (minor labeling or weight violation). Always register your lot numbers and check the FDA recall database periodically.",
    "methodTitle": "Our 4-Point Brand Evaluation Standard",
    "methodPillars": [
      {
        "title": "1. Named Animal Protein",
        "desc": "Deboned whole muscle meats vs ambiguous byproduct meal."
      },
      {
        "title": "2. Carbohydrate Fraction",
        "desc": "Keeping starches under 40% to prevent metabolic obesity."
      },
      {
        "title": "3. Sourcing Transparency",
        "desc": "Traceable humane farms and non-GMO produce."
      },
      {
        "title": "4. Clean Recall Record",
        "desc": "Independent laboratory testing and rigorous plant safety."
      }
    ]
  },
  "allergies": {
    "eyebrow": "CLINICAL DERMATOLOGY // CANINE ALLERGIES & DIGESTION",
    "heroTitle": "Best Dog Food for Allergies & Sensitive Stomachs",
    "heroSubtitle": "Veterinary dermatology guide to food allergies, single-source novel proteins, and 8-week elimination diet protocols.",
    "allergensTitle": "The Top 5 Most Common Canine Food Allergens",
    "allergensIntro": "Canine food allergies are immune-mediated hypersensitivity reactions to specific dietary proteins. In order of clinical frequency:",
    "allergensList": [
      {
        "name": "1. Factory Chicken (60% of cases)",
        "desc": "Due to extreme overexposure across commercial pet food, chicken is the #1 canine allergen."
      },
      {
        "name": "2. Commercial Beef (30% of cases)",
        "desc": "Widely used red meat that triggers severe skin itching and ear infections in sensitive dogs."
      },
      {
        "name": "3. Dairy Products",
        "desc": "Adult dogs naturally lack lactase enzymes, causing explosive diarrhea and gas."
      },
      {
        "name": "4. Wheat & Corn Gluten",
        "desc": "High-glycemic grain proteins that trigger chronic inflammation and yeast overgrowth."
      },
      {
        "name": "5. Soy & Legumes",
        "desc": "Common cheap filler proteins that can impair gut barrier function and thyroid health."
      }
    ],
    "eliminationTitle": "The 8-Week Veterinary Elimination Diet Protocol",
    "eliminationSteps": [
      {
        "step": "Phase 1",
        "title": "Select One Pure Novel Protein",
        "desc": "Switch your dog to a single novel protein they have never consumed before (e.g. Venison, Rabbit, or Kangaroo) paired with a single digestible carbohydrate like pumpkin or sweet potato."
      },
      {
        "step": "Phase 2",
        "title": "Zero Contamination (Strict 8 Weeks)",
        "desc": "For 8 consecutive weeks, feed exclusively the novel diet. Zero commercial treats, table scraps, flavored medications, or rawhide chews."
      },
      {
        "step": "Phase 3",
        "title": "Controlled Single-Ingredient Rechallenge",
        "desc": "If itching and gastrointestinal issues resolve, introduce one suspected protein (e.g. chicken) for 7 days. If symptoms return, you have confirmed the allergy."
      }
    ],
    "novelTitle": "Top Recommended Novel & Hypoallergenic Proteins",
    "novelProteins": [
      {
        "name": "Venison (Deer)",
        "desc": "Lean, nutrient-dense red meat that sensitive dogs rarely have antibodies against."
      },
      {
        "name": "Rabbit",
        "desc": "Extremely hypoallergenic novel protein with an ideal ratio of essential amino acids."
      },
      {
        "name": "Duck",
        "desc": "Excellent flavorful alternative for dogs with severe factory chicken intolerance."
      },
      {
        "name": "Kangaroo",
        "desc": "One of the leanest, cleanest wild proteins in veterinary dermatology."
      }
    ]
  },
  "calculator": {
    "eyebrow": "100% FREE // CANINE NUTRITION GUIDELINES",
    "noticeTitle": "Notice:",
    "noticeText": "For general & educational guidance only. Not a diagnostic tool or medical substitute.",
    "heroTitle": "Veterinary Dog Feeding & Calorie Calculator",
    "heroSubtitle": "Determine your dog’s exact daily caloric needs (RER & MER) and calculate custom gram meal portions based on weight, age, activity level, and body condition score."
  },
  "breeds": {
    "eyebrow": "BREED NUTRITION // CANINE GUIDELINES",
    "targetWeight": "Target Weight",
    "dailyCalories": "Daily Calories",
    "freshDaily": "Fresh Food Daily",
    "kibbleDaily": "Kibble Daily",
    "cups": "cups",
    "reqsTitle": "Nutritional Requirements for {name}s",
    "reqsIntro": "As a {category} dog with an average weight of {w0}–{w1} lbs, the {name} requires a tailored nutrient ratio:",
    "predispositionsTitle": "Key Health & Dietary Predispositions:",
    "feedingRoutineTitle": "Feeding Routine Recommendation:",
    "feedingRoutineDesc": "Feed your adult {name} twice daily (50% in the morning and 50% in the evening). Always ensure clean filtered water is available. If feeding dry kibble, rehydrate with warm bone broth or water to support kidney longevity.",
    "ctaTitle": "Customize Your {name}’s Exact Meal Plan",
    "ctaSubtitle": "Adjust for your dog’s exact age (puppy, adult, senior), exact weight, activity level, and body condition score with our free calculator.",
    "ctaBtn": "Launch {name} Calculator →",
    "faqTitle": "Common Feeding FAQs for {name}s",
    "faqSubtitle": "Answers to portion questions, feeding frequency, and best foods."
  },
  "comparisonTable": {
    "eyebrow": "04 // CLINICAL COMPARISON",
    "title": "Why Biological Whole Food Trumps Kibble",
    "subtitle": "A side-by-side analysis of biological bioavailability, processing temperatures, and financial transparency.",
    "scrollHint": "↔ Scroll table horizontally",
    "colMetric": "Nutritional Metric",
    "colDfp": "✨ DogFoodPlanner",
    "colSubs": "Subscriptions",
    "colKibble": "Dry Kibble",
    "rows": [
      {
        "metric": "Processing Method",
        "dfp": "Gently Cooked (160°F) or Raw Enzymes",
        "subs": "Flash-Frozen Cooked",
        "kibble": "High-Heat Extrusion (400°F)"
      },
      {
        "metric": "Net Carbohydrates",
        "dfp": "< 3.5% (Vegetables only)",
        "subs": "10% – 15%",
        "kibble": "45% – 60% (Starch fillers)"
      },
      {
        "metric": "Biological Moisture",
        "dfp": "70% – 75% (Essential renal hydration)",
        "subs": "70% – 75%",
        "kibble": "8% – 10% (Sub-clinical dehydration)"
      },
      {
        "metric": "Ingredient Transparency",
        "dfp": "100% Disclosed grams & percentages",
        "subs": "Proprietary blend (amounts withheld)",
        "kibble": "Split ingredients & generic meat meals"
      },
      {
        "metric": "Average Monthly Cost (50 lb dog)",
        "dfp": "$85 – $120 (Prepared at home)",
        "subs": "$280 – $380 / month",
        "kibble": "$60 – $95 / month"
      }
    ]
  },
  "faqPage": {
    "badge": "KNOWLEDGE BASE // 40+ VERIFIED CANINE ANSWERS",
    "exploreHubsTitle": "Explore Dedicated Canine Nutrition Hubs",
    "exploreHubsSubtitle": "Deep-dive into specialized guides created for dog parents seeking optimal health.",
    "cardBestFood": "Comparison of fresh, raw, high-protein kibble, and specialized formulas for small and sensitive dogs.",
    "cardCalc": "Scientific RER and MER calorie calculator delivering exact gram and cup meal portions.",
    "cardRecipes": "Balanced gently cooked and 80-10-10 raw BARF recipes with essential calcium balancing.",
    "cardAllergies": "Novel protein selection, elimination diets, and soothing gut microbiome protocols.",
    "cardToxic": "Complete index of dangerous human foods, safe fruits, vegetables, and chemical additives.",
    "cardBrands": "Unbiased reviews for Blue Buffalo, Nutrish, Pure Balance, Ollie, and Open Farm."
  },
  "faqSingle": {
    "reviewedBy": "Reviewed by: Veterinary Canine Nutritionist",
    "updated": "Updated: 2026",
    "directQuickAnswer": "Direct Quick Answer",
    "clinicalAnalysis": "Detailed Nutritional & Clinical Analysis",
    "topics": "Topics:",
    "ctaBadge": "🐾 Free Canine Nutrition Engine",
    "ctaTitle": "Calculate Exact Daily Calories & Meal Portions For Your Dog",
    "ctaSubtitle": "Use our free veterinary calculator to determine your dog’s exact metabolic burn (RER/MER) and get custom fresh or raw food recipe grams.",
    "ctaBtn": "Calculate Portions Now →",
    "relatedTitle": "Related Canine Nutrition Questions",
    "readAnswer": "Read Answer →"
  }
},
  es: {
  "about": {
    "missionBadge": "NUESTRA MISIÓN // NUTRICIÓN CANINA CLÍNICA",
    "whyTitle": "Por Qué se Creó DogFoodPlanner",
    "whyP1": "Durante décadas, la industria de alimentos comerciales para mascotas ha funcionado como una caja negra. El pienso seco extruido a más de 200°C destruye vitaminas naturales, oxida los ácidos grasos omega esenciales y rellena el saco con hasta un 60% de almidones de alto índice glucémico.",
    "whyP2": "Al mismo tiempo, las suscripciones de comida fresca cobran más de 300€ al mes por carnes magras y verduras básicas. DogFoodPlanner elimina esa barrera. Ofrecemos los algoritmos matemáticos exactos que emplean los nutricionistas caninos clínicos para que cualquier dueño prepare menús cocinados al vapor, dietas BARF o toppers caseros a una fracción de su coste.",
    "methodTitle": "Nuestra Metodología Nutricional",
    "pillars": [
      {
        "tag": "01 // FÓRMULAS NRC",
        "title": "Matemática Metabólica Basal",
        "desc": "Calcula el Requerimiento Energético en Reposo (RER) exacto según la masa corporal exponencial (70 × (kg)^0.75) en lugar de tablas genéricas por rangos de peso."
      },
      {
        "tag": "02 // ESTÁNDARES AAFCO",
        "title": "Micronutrientes Biodisponibles",
        "desc": "Cada menú equilibra la relación calcio-fósforo (1.2:1 a 1.4:1), ácidos grasos EPA/DHA y niveles esenciales de taurina."
      },
      {
        "tag": "03 // CERO MUROS DE PAGO",
        "title": "100% Abierto e Independiente",
        "desc": "No aceptamos patrocinios comerciales ni ocultamos los gramos de las recetas tras suscripciones con tarjeta de crédito."
      }
    ],
    "ctaTitle": "¿Listo para Calcular las Necesidades Nutricionales de tu Perro?",
    "ctaDesc": "Utiliza nuestra calculadora interactiva, explora las guías de alergias caninas y consulta nuestros análisis veterinarios de alimentos.",
    "ctaBtn": "Abrir Calculadora Nutricional Gratuita →"
  },
  "contact": {
    "eyebrow": "ATENCIÓN Y SOPORTE // CONSULTAS DIRECTAS",
    "cards": [
      {
        "icon": "📧",
        "title": "Consultas Generales",
        "desc": "Dudas y comentarios generales:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🐾",
        "title": "Investigación Nutricional",
        "desc": "Fórmulas y consultas veterinarias:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🛡️",
        "title": "Soporte Técnico",
        "desc": "Errores y sugerencias de la web:",
        "email": "hello@dogfoodplanner.com"
      }
    ],
    "formTitle": "Envía un Mensaje a Nuestro Equipo de Nutrición Canina",
    "formDesc": "¿Tienes dudas sobre las fórmulas calóricas NRC o necesitas ayuda con una receta cruda? Respondemos en menos de 24 horas laborales.",
    "nameLabel": "Tu Nombre",
    "namePlaceholder": "ej. Carlos Mendoza",
    "emailLabel": "Tu Correo Electrónico",
    "emailPlaceholder": "carlos@ejemplo.com",
    "subjectLabel": "Motivo de la Consulta",
    "subjectOptions": [
      "Pregunta General / Comentarios",
      "Consulta de Nutrición y Recetas",
      "Duda sobre Fórmulas de la Calculadora",
      "Informe de Error Técnico"
    ],
    "messageLabel": "Tu Mensaje",
    "messagePlaceholder": "Cuéntanos sobre tu perro (raza, peso, edad) y cómo podemos ayudarte...",
    "submitBtn": "Enviar Mensaje →",
    "notice": "Aviso de Emergencia Veterinaria: Si tu mascota presenta síntomas agudos de envenenamiento o malestar grave, acude inmediatamente a un hospital veterinario de urgencias.",
    "faqTitle": "¿Buscas respuestas rápidas?",
    "faqDesc": "Consulta nuestra base de conocimiento con más de 40 preguntas veterinarias sobre inapetencia, dieta BARF, comida de gato y marcas comerciales.",
    "faqBtn": "Ver Todas las Preguntas Frecuentes →"
  },
  "privacy": {
    "eyebrow": "LEGAL // PROTECCIÓN DE DATOS Y PRIVACIDAD",
    "lastUpdated": "Actualizado: Enero de 2026",
    "intro": "En DogFoodPlanner.com respetamos tu privacidad y nos comprometemos a proteger los datos personales. Esta política explica cómo tratamos y protegemos tu información.",
    "sections": [
      {
        "title": "1. Información Que No Recopilamos",
        "content": "Los datos de salud de tu mascota te pertenecen. No requerimos registro, contraseñas ni tarjetas bancarias. Los perfiles caninos, pesos y selecciones de dieta se procesan localmente en tu navegador y no se almacenan en servidores externos."
      },
      {
        "title": "2. Datos Técnicos Anónimos",
        "content": "Como la mayoría de plataformas web modernas, nuestros servidores CDN registran datos técnicos anónimos habituales (dirección IP anonimizada, navegador, página de origen y fecha) con fines de seguridad y prevención de ciberataques."
      },
      {
        "title": "3. Cookies y Almacenamiento Local",
        "content": "Utilizamos el almacenamiento local del navegador (localStorage) exclusivamente para recordar tu idioma preferido y conservar el plan de comida activo en tu dispositivo sin perder los cálculos al recargar."
      },
      {
        "title": "4. Enlaces Externos y Fuentes Científicas",
        "content": "Nuestra web contiene referencias a estudios científicos publicados, guías AAFCO y bases de datos del NRC. No nos hacemos responsables de las políticas de privacidad de sitios de terceros."
      },
      {
        "title": "5. Privacidad de Menores",
        "content": "Nuestros contenidos y herramientas están dirigidos a adultos responsables de mascotas. No recopilamos conscientemente datos de menores de 13 años."
      },
      {
        "title": "6. Actualizaciones y Contacto",
        "content": "Podemos actualizar periódicamente esta política para reflejar mejoras técnicas. Las novedades se publicarán en esta página. Para cualquier consulta, escribe a privacy@dogfoodplanner.com."
      }
    ]
  },
  "terms": {
    "eyebrow": "LEGAL // CONDICIONES DEL SERVICIO",
    "lastUpdated": "Actualizado: Enero de 2026",
    "intro": "Por favor, lee atentamente estos Términos y Condiciones antes de utilizar DogFoodPlanner.com. Al acceder a esta web, aceptas quedar vinculado por los mismos.",
    "sections": [
      {
        "title": "1. Aceptación de las Condiciones",
        "content": "Al acceder y utilizar DogFoodPlanner.com (el \"Sitio\"), confirmas haber leído, comprendido y aceptado íntegramente estas Condiciones de Servicio. Si no estás de acuerdo con alguna parte, suspende su uso."
      },
      {
        "title": "2. Descargo de Responsabilidad Veterinaria y Médica",
        "content": "La información, calculadoras y recetas de DogFoodPlanner.com se proporcionan únicamente con fines educativos e informativos sobre modelos NRC y AAFCO. NO constituyen asesoramiento veterinario profesional, diagnóstico clínico ni tratamiento prescrito. Consulta siempre a un veterinario colegiado o especialista en nutrición animal (DACVN) antes de realizar cambios sustanciales en la alimentación de tu perro."
      },
      {
        "title": "3. Uso de las Calculadoras Interactivas",
        "content": "Los cálculos de calorías (RER y MER) y los gramos de comida constituyen puntos de partida matemáticos. Cada perro posee una tasa metabólica particular según su genética, castración, clima y actividad. El propietario debe vigilar la Condición Corporal (BCS) y ajustar la ingesta según corresponda."
      },
      {
        "title": "4. Seguridad en Dietas Caseras y Balance de Calcio",
        "content": "Elaborar comida casera o cruda exige cumplir estrictamente con los perfiles nutricionales completos. En particular, ofrecer carne sin hueso carente de suplementación cálcica provoca osteoporosis y desmineralización ósea severa en pocos meses. El usuario asume toda la responsabilidad en la preparación de las raciones."
      },
      {
        "title": "5. Propiedad Intelectual",
        "content": "Todos los contenidos, algoritmos de cálculo, diseño de interfaz, gráficos interactivos y textos de DogFoodPlanner.com son propiedad exclusiva de DogFoodPlanner y están protegidos por leyes de derechos de autor."
      },
      {
        "title": "6. Limitación de Responsabilidad",
        "content": "Bajo ninguna circunstancia DogFoodPlanner.com o sus colaboradores serán responsables por daños directos o indirectos derivados del uso de la información y herramientas facilitadas en esta web."
      }
    ]
  },
  "bestFood": {
    "eyebrow": "GUÍA CLÍNICA // RANKING CANINO 2026",
    "rankingsTitle": "¿Cuáles Son los 5 Alimentos Más Saludables para Perros en 2026?",
    "rankingsIntro": "La investigación veterinaria sobre longevidad canina confirma que el procesamiento térmico mínimo y una hidratación biológica elevada son los dos factores predictivos más determinantes de vitalidad y salud renal.",
    "rankings": [
      {
        "rank": "01",
        "title": "Comida Fresca Grado Humano Cocinada a Fuego Lento",
        "score": "98/100",
        "pros": "Carnes y verduras reales cocinadas a baja temperatura (70°C). Mantiene más del 70% de humedad natural, enzimas activas y vitaminas biodisponibles.",
        "cons": "Requiere conservación en nevera o congelador. Coste algo superior al pienso convencional."
      },
      {
        "rank": "02",
        "title": "Dieta Cruda Ancestral BARF 80-10-10",
        "score": "95/100",
        "pros": "Proporción biológica carnívora: 80% carne muscular, 10% hueso carnoso, 10% vísceras. Excelente para salud dental y musculatura magra.",
        "cons": "Requiere higiene rigurosa en la manipulación y un estricto equilibrio del calcio."
      },
      {
        "rank": "03",
        "title": "Comida Cruda Liofilizada y Deshidratada al Aire",
        "score": "91/100",
        "pros": "Aporta la calidad nutricional de la comida cruda con la comodidad de almacenarse a temperatura ambiente.",
        "cons": "Es imprescindible rehidratar con agua tibia o caldo de huesos antes de servir."
      },
      {
        "rank": "04",
        "title": "Pienso Seco Alto en Proteína Sin Granos o con Granos Ancestrales",
        "score": "78/100",
        "pros": "Cómodo, no perecedero y económicamente viable para hogares con perros grandes o múltiples mascotas.",
        "cons": "Sometido a extrusión a 200°C, solo 8-10% de humedad y 40-50% de carbohidratos amiláceos."
      },
      {
        "rank": "05",
        "title": "Dietas Terapéuticas de Prescripción Veterinaria",
        "score": "72/100",
        "pros": "Formuladas para patologías clínicas específicas (insuficiencia renal, hepática o cálculos urinarios).",
        "cons": "A menudo recurren a subproductos vegetales y requieren receta veterinaria."
      }
    ],
    "buyerGuideTitle": "4 Reglas de Oro para Elegir el Mejor Alimento Canino",
    "buyerRules": [
      {
        "title": "1. Proteína Animal Específica en Primer Lugar",
        "desc": "Busca \"Pavo Deshuesado\", \"Ternera\" o \"Salmón Fresco\" en lugar de harinas cárnicas anónimas."
      },
      {
        "title": "2. Humedad Biológica Alta (>70%)",
        "desc": "El pienso seco causa deshidratación crónica subclínica. Añade siempre toppers frescos o caldos nutritivos."
      },
      {
        "title": "3. Cero Conservantes Sintéticos",
        "desc": "Evita rotundamente aditivos químicos como BHA, BHT, etoxiquina y colorantes artificiales."
      },
      {
        "title": "4. Carbohidratos Controlados (<25%)",
        "desc": "Los perros carecen de amilasa salival. El exceso de almidón sobrecarga el páncreas y causa obesidad."
      }
    ],
    "ctaTitle": "Calcula las Raciones Exactas del Mejor Alimento para tu Perro",
    "ctaDesc": "Tanto si eliges comida fresca, dieta BARF o pienso premium, obtén los gramos diarios y las calorías que tu perro necesita.",
    "ctaBtn": "Calcular Ración Diaria Ahora →"
  },
  "recipes": {
    "eyebrow": "RECETAS VETERINARIAS // BLUEPRINTS NRC Y AAFCO",
    "heroTitle": "Recetas Caseras Veterinarias para Perros",
    "heroSubtitle": "Guías paso a paso para elaborar menús caseros cocinados al vapor y dietas BARF crudas 80-10-10 completas y equilibradas.",
    "calciumWarningTitle": "La Regla de Oro de la Comida Casera: El Equilibrio de Calcio",
    "calciumWarningDesc": "La carne muscular es naturalmente rica en fósforo y muy pobre en calcio (relación 1:20). Alimentar a un perro únicamente con pollo, ternera y arroz sin añadir calcio provoca descalcificación ósea severa en pocos meses. Añade siempre media cucharadita rasa de cáscara de huevo en polvo (aprox. 900 mg de calcio elemental) por cada 450 g de carne sin hueso para lograr la proporción óptima de Calcio-Fósforo de 1.2:1.",
    "recipesList": [
      {
        "tag": "COCINADO AL VAPOR",
        "title": "Receta 1: Pavo a Fuego Lento y Calabaza Prebiótica (Apta para Estómagos Sensibles)",
        "desc": "Perfecta para perros con digestiones delicadas, heces blandas o intolerancia al pollo industrial.",
        "ingredients": [
          "Pavo Picado Magro (93/7) — 65% (aprox. 900 g)",
          "Corazones de Pavo o Ternera (Taurina Natural) — 10% (aprox. 140 g)",
          "Puré Puro de Calabaza (Fibra Digestiva) — 10% (aprox. 140 g)",
          "Espinacas Baby y Calabacín al Vapor — 10% (aprox. 140 g)",
          "Aceite de Salmón Salvaje de Alaska (EPA/DHA) — 2% (1.5 cucharadas)",
          "Cáscara de Huevo Molida (Calcio Elemental) — 3% (1 cucharadita)"
        ],
        "prep": "Saltea el pavo y los corazones a fuego medio-bajo hasta que estén cocinados sin quemarse (70°C). Cuece las verduras al vapor y tritúralas con la calabaza. Mezcla todo y deja enfriar por completo antes de incorporar el aceite de salmón y el calcio. Congela en raciones diarias."
      },
      {
        "tag": "DIETA BARF",
        "title": "Receta 2: Dieta BARF Ancestral 80-10-10 de Ternera y Pato",
        "desc": "Menú crudo biológicamente apropiado para perros adultos sanos con pH estomacal ácido normal.",
        "ingredients": [
          "Carne Magra de Ternera de Pasto — 70%",
          "Corazón de Ternera (Rico en L-Carnitina y CoQ10) — 10%",
          "Cuellos de Pato o Carcasas Crudas — 10% (Hueso Comestible y Calcio)",
          "Hígado de Ternera (Vitamina A y Complejo B) — 5%",
          "Riñón o Bazo de Ternera (Víscera Secretora) — 5%"
        ],
        "prep": "Corta la carne y los corazones en trozos adecuados a la mandíbula del perro. Pesa los órganos con báscula digital. Congela previamente todas las porciones durante al menos 3 semanas a -20°C antes de descongelar y servir."
      },
      {
        "tag": "TOPPER SUPERALIMENTO",
        "title": "Receta 3: Topper Antioxidante 80/20 para Enriquecer el Pienso",
        "desc": "Potenciador de alimentos frescos diseñado para sustituir el 20% de las calorías del pienso seco habitual.",
        "ingredients": [
          "Huevos Camperos Ligeramente Escalfados — 40%",
          "Brotes de Brócoli al Vapor y Arándanos Azules — 30%",
          "Caldo de Huesos de Ternera a Fuego Lento — 20%",
          "Semillas de Cáñamo y Algas Kelp en Polvo — 10%"
        ],
        "prep": "Hierve suavemente los huevos durante 4 minutos. Pasa las verduras por el vapor 3 minutos. Tritura con el caldo templado y los arándanos. Vierte de 2 a 4 cucharadas soperas diarias sobre su cuenco de pienso."
      }
    ],
    "calciumGuideTitle": "Fuentes Seguras de Calcio para Comida Casera Canina",
    "calciumGuideItems": [
      {
        "title": "Cáscara de Huevo en Polvo",
        "ratio": "1/2 cucharadita por cada 450 g de carne deshuesada",
        "desc": "95% carbonato cálcico puro. Fácil de preparar en casa lavando, horneando y moliendo cáscaras finamente."
      },
      {
        "title": "Huesos Carnosos Comestibles Crudos",
        "ratio": "10% del peso total de la dieta",
        "desc": "Cuellos de pato, alas de pollo o carcasas crudas. Nunca cocinados para evitar que se astillen."
      },
      {
        "title": "Harina de Hueso Veterinaria (Bone Meal)",
        "ratio": "Según indicación del fabricante",
        "desc": "Hidroxiapatita microcristalina que aporta calcio y fósforo en una proporción biodisponible de 2:1."
      }
    ]
  },
  "toxic": {
    "eyebrow": "SEGURIDAD CRÍTICA // TOXICIDAD EN INGREDIENTES",
    "dangerTitle": "Los Alimentos Domésticos Más Peligrosos para Perros",
    "dangerIntro": "Ciertos alimentos comunes contienen sustancias químicas que el metabolismo del perro no puede procesar, causando fallo orgánico agudo o muerte.",
    "dangerList": [
      {
        "name": "Chocolate y Cacao",
        "toxin": "Teobromina y Cafeína",
        "symptoms": "Vómitos, jadeo acelerado, taquicardia, temblores musculares, convulsiones y fallo cardíaco.",
        "risk": "MUY ALTO A MORTAL"
      },
      {
        "name": "Uvas, Pasas y Grosellas",
        "toxin": "Ácido Tartárico",
        "symptoms": "Letargo, deshidratación e insuficiencia renal aguda irreversible en 24 a 72 horas.",
        "risk": "EXTREMADAMENTE LETAL"
      },
      {
        "name": "Xilitol (Azúcar de Abedul / E967)",
        "toxin": "Polialcohol Sintético",
        "symptoms": "Pico masivo de insulina, hipoglucemia profunda, ataxia y necrosis hepática aguda en pocas horas.",
        "risk": "URGENCIA VITAL MÁXIMA"
      },
      {
        "name": "Cebolla, Ajo, Puerro y Cebollino",
        "toxin": "Disulfuro de N-propilo",
        "symptoms": "Destrucción de glóbulos rojos, anemia hemolítica, encías pálidas, orina oscura y debilidad.",
        "risk": "EFECTO ACUMULATIVO ALTO"
      },
      {
        "name": "Nueces de Macadamia",
        "toxin": "Neurotoxina no identificada",
        "symptoms": "Debilidad en patas traseras, hipertermia, vómitos y rigidez muscular dolorosa.",
        "risk": "MODERADO A GRAVE"
      },
      {
        "name": "Huesos Cocinados de Cualquier Animal",
        "toxin": "Riesgo Físico de Astillamiento",
        "symptoms": "Perforación gastrointestinal, hemorragia interna, peritonitis y obstrucción intestinal letal.",
        "risk": "EMERGENCIA QUIRÚRGICA"
      }
    ],
    "emergencyTitle": "Qué Hacer en Caso de Emergencia por Intoxicación",
    "emergencySteps": [
      "1. Actúa de Inmediato: Identifica el alimento exacto ingerido, el envase, la cantidad aproximada y la hora del consumo.",
      "2. NO Provoques el Vómito sin Orden Veterinaria: Sustancias corrosivas o huesos astillados causan quemaduras y desgarros esofágicos al subir.",
      "3. Contacta con Urgencias Veterinarias Inmediatamente: Llama a tu clínica veterinaria 24 horas o al centro de toxicología animal más cercano."
    ],
    "safeTitle": "Frutas y Verduras 100% Seguras y Beneficiosas",
    "safeIntro": "Estos alimentos naturales aportan antioxidantes celulares, fibra prebiótica soluble y vitaminas al cuenco de tu perro:",
    "safeFoods": [
      {
        "name": "Arándanos Azules",
        "benefit": "Repletos de antocianinas, polifenoles y antioxidantes protectores."
      },
      {
        "name": "Calabaza Pura",
        "benefit": "Rica en fibra soluble que alivia tanto la diarrea como el estreñimiento."
      },
      {
        "name": "Zanahorias",
        "benefit": "Premio crujiente bajo en calorías, rico en betacaroteno y útil para la higiene dental."
      },
      {
        "name": "Judías Verdes",
        "benefit": "Excelente vegetal saciante y bajo en calorías para perros con sobrepeso."
      },
      {
        "name": "Manzanas (Sin Semillas)",
        "benefit": "Aporte natural de vitamina C, vitamina A y pectina beneficiosa para la microbiota."
      }
    ]
  },
  "brands": {
    "eyebrow": "ANÁLISIS INDEPENDIENTE // REVISIÓN DE MARCAS Y ALERTAS FDA",
    "heroTitle": "Análisis de Marcas de Pienso y Registro de Retiradas",
    "heroSubtitle": "Revisiones objetivas informadas por veterinarios sobre ingredientes, etiquetado AAFCO y retiradas del mercado para proteger a tu perro.",
    "brandsList": [
      {
        "name": "Blue Buffalo",
        "grade": "Nota: B+",
        "pros": "Carne desgrasada real como primer ingrediente; sin maíz ni trigo; croquetas LifeSource Bits ricas en antioxidantes.",
        "cons": "Elevado nivel de carbohidratos (45-50%); retiradas históricas por moho y exceso de Vitamina D.",
        "verdict": "Pienso comercial por encima de la media. Recomendamos enriquecerlo con un 20% de comida fresca para aportar hidratación."
      },
      {
        "name": "Rachael Ray Nutrish",
        "grade": "Nota: C+ / B-",
        "pros": "Económico y fácil de encontrar; las gamas Peak y Dish contienen mayor proporción de carne auténtica.",
        "cons": "Las líneas básicas emplean concentrado de proteína de guisante y gluten de maíz; investigado previamente por la FDA.",
        "verdict": "Opción económica aceptable solo en sus líneas superiores, comprobando que no fraccione legumbres en la etiqueta."
      },
      {
        "name": "Pure Balance (Walmart)",
        "grade": "Nota: B (Mejor Opción Asequible)",
        "pros": "Excelente relación calidad-precio; recetas cárnicas sin maíz, trigo, soja ni colorantes artificiales.",
        "cons": "Fabricado por terceros bajo marca blanca; porcentaje medio de carbohidratos.",
        "verdict": "Una de las opciones más equilibradas y honestas dentro del segmento de supermercado."
      },
      {
        "name": "Comida Fresca Ollie",
        "grade": "Nota: A (Sobresaliente)",
        "pros": "100% carnes e ingredientes de grado humano; cocinado suave a baja temperatura; raciones personalizadas envasadas al vacío.",
        "cons": "Coste mensual elevado (180€-350€/mes); requiere espacio en el congelador.",
        "verdict": "El estándar de oro para salud metabólica, brillo en el pelaje y longevidad digestiva."
      },
      {
        "name": "Open Farm",
        "grade": "Nota: A-",
        "pros": "Transparencia total en el origen de las materias primas; carnes de granjas con certificación de bienestar animal y pescado salvaje sostenible.",
        "cons": "Precio elevado; menor disponibilidad en tiendas físicas habituales.",
        "verdict": "La mejor elección para quienes buscan ganadería ética, alta proporción de carne y ausencia total de subproductos."
      }
    ],
    "recallsTitle": "Cómo Interpretar las Retiradas de Alimentos (Recalls)",
    "recallsDesc": "Las alertas sanitarias de la FDA se clasifican en tres niveles: Clase I (riesgo grave o mortal, ej. Salmonella o exceso de Vitamina D), Clase II (efectos adversos temporales sobre la salud) y Clase III (defectos menores de etiquetado). Comprueba siempre el número de lote de tu saco.",
    "methodTitle": "Nuestros 4 Criterios de Evaluación de Marcas",
    "methodPillars": [
      {
        "title": "1. Calidad de la Proteína",
        "desc": "Carne muscular entera identificada frente a harinas de subproductos anónimas."
      },
      {
        "title": "2. Porcentaje de Carbohidratos",
        "desc": "Mantener los almidones por debajo del 40% para prevenir la obesidad."
      },
      {
        "title": "3. Trazabilidad del Origen",
        "desc": "Ingredientes de granjas con bienestar animal y vegetales libres de transgénicos."
      },
      {
        "title": "4. Historial Sanitario Limpio",
        "desc": "Control bacteriológico de laboratorio e instalaciones con certificación de inocuidad."
      }
    ]
  },
  "allergies": {
    "eyebrow": "DERMATOLOGÍA CLÍNICA // ALERGIAS Y DIGESTIÓN CANINA",
    "heroTitle": "Mejor Comida para Perros con Alergias y Estómago Sensible",
    "heroSubtitle": "Guía dermatológica veterinaria sobre intolerancias alimentarias, proteínas noveles hipoalergénicas y dietas de descarte de 8 semanas.",
    "allergensTitle": "Los 5 Alérgenos Alimentarios Más Frecuentes en Perros",
    "allergensIntro": "Las alergias alimentarias caninas son reacciones de hipersensibilidad inmunitaria frente a determinadas proteínas dietéticas. Por orden de frecuencia clínica:",
    "allergensList": [
      {
        "name": "1. Pollo Industrial (60% de los casos)",
        "desc": "Debido a su sobreexposición masiva en los piensos comerciales, el pollo es el alérgeno canino número uno."
      },
      {
        "name": "2. Ternera Comercial (30% de los casos)",
        "desc": "Proteína roja habitual que suele desencadenar picor cutáneo intenso e infecciones de oído recurrentes."
      },
      {
        "name": "3. Lácteos y Quesos",
        "desc": "Los perros adultos carecen de lactasa suficiente, provocando diarrea osmótica y cólicos."
      },
      {
        "name": "4. Gluten de Trigo y Maíz",
        "desc": "Proteínas vegetales que dañan la mucosa intestinal y favorecen la proliferación de levaduras."
      },
      {
        "name": "5. Soja y Leguminosas",
        "desc": "Rellenos proteicos económicos que alteran la barrera digestiva y provocan gases y prurito."
      }
    ],
    "eliminationTitle": "Protocolo Veterinario de Dieta de Eliminación de 8 Semanas",
    "eliminationSteps": [
      {
        "step": "Fase 1",
        "title": "Selecciona una Única Proteína Novel",
        "desc": "Cambia a tu perro a una proteína pura que jamás haya comido (ej. Ciervo, Conejo o Canguro) junto con un carbohidrato digestivo como calabaza o batata."
      },
      {
        "step": "Fase 2",
        "title": "Cero Contaminación Cruzada (8 Semanas)",
        "desc": "Durante 8 semanas completas debe comer exclusivamente la nueva dieta. Prohibidas las golosinas comerciales, sobras de comida y premios masticables."
      },
      {
        "step": "Fase 3",
        "title": "Reintroducción Controlada",
        "desc": "Si los picores y problemas digestivos remiten, reintroduce un ingrediente sospechoso durante 7 días para verificar con certeza la causa de la alergia."
      }
    ],
    "novelTitle": "Proteínas Noveles Hipoalergénicas Recomendadas",
    "novelProteins": [
      {
        "name": "Carne de Ciervo / Venado",
        "desc": "Carne roja magra y muy digestible frente a la cual los perros casi nunca han desarrollado anticuerpos."
      },
      {
        "name": "Carne de Conejo",
        "desc": "Proteína hipoalergénica de alto valor biológico y óptimo perfil de aminoácidos."
      },
      {
        "name": "Carne de Pato",
        "desc": "Excelente alternativa sabrosa para perros intolerantes a las aves de corral comunes."
      },
      {
        "name": "Carne de Canguro",
        "desc": "Una de las carnes silvestres más puras y magras utilizadas en dermatología veterinaria."
      }
    ]
  },
  "calculator": {
    "eyebrow": "100% GRATIS // PAUTAS DE NUTRICIÓN CANINA",
    "noticeTitle": "Aviso:",
    "noticeText": "Para orientación general y educativa. No constituye una herramienta de diagnóstico médico veterinario.",
    "heroTitle": "Calculadora Veterinaria de Ración y Calorías para Perros",
    "heroSubtitle": "Determina las necesidades energéticas exactas de tu perro (RER y MER) y calcula las porciones precisas en gramos según peso, edad, nivel de actividad y condición corporal."
  },
  "breeds": {
    "eyebrow": "NUTRICIÓN POR RAZA // GUÍA VETERINARIA",
    "targetWeight": "Peso Ideal",
    "dailyCalories": "Calorías Diarias",
    "freshDaily": "Comida Fresca al Día",
    "kibbleDaily": "Pienso Seco al Día",
    "cups": "tazas",
    "reqsTitle": "Requerimientos Nutricionales para {name}",
    "reqsIntro": "Como perro de categoría {category} con un peso medio de {w0}–{w1} lbs, el {name} requiere un equilibrio nutricional específico:",
    "predispositionsTitle": "Predisposiciones de Salud y Dieta Clave:",
    "feedingRoutineTitle": "Pauta de Alimentación Recomendada:",
    "feedingRoutineDesc": "Alimenta a tu {name} adulto dos veces al día (50% por la mañana y 50% por la noche). Mantén siempre agua limpia a su disposición. Si le das pienso seco, hidrátalo con caldo de huesos tibio para proteger sus riñones.",
    "ctaTitle": "Personaliza el Plan de Comida Exacto para tu {name}",
    "ctaSubtitle": "Ajusta según la edad exacta (cachorro, adulto o senior), peso real, actividad física y condición corporal con nuestra calculadora.",
    "ctaBtn": "Abrir Calculadora para {name} →",
    "faqTitle": "Preguntas Frecuentes sobre la Alimentación del {name}",
    "faqSubtitle": "Respuestas sobre cálculo de raciones, número de tomas y mejores alimentos."
  },
  "comparisonTable": {
    "eyebrow": "04 // COMPARATIVA CLÍNICA",
    "title": "Por Qué la Comida Real Supera al Pienso Seco",
    "subtitle": "Análisis exhaustivo de biodisponibilidad biológica, temperaturas de procesamiento y transparencia en costes.",
    "scrollHint": "↔ Desliza la tabla horizontalmente",
    "colMetric": "Métrica Nutricional",
    "colDfp": "✨ DogFoodPlanner",
    "colSubs": "Suscripciones Comerciales",
    "colKibble": "Pienso Seco Extruido",
    "rows": [
      {
        "metric": "Método de Cocinado",
        "dfp": "Cocinada a Baja Temp. (70°C) o Cruda Activa",
        "subs": "Cocinado Industrial Ultracongelado",
        "kibble": "Extrusión a Ultra-Alta Temperatura (200°C)"
      },
      {
        "metric": "Carbohidratos Netos",
        "dfp": "< 3.5% (Solo verduras seleccionadas)",
        "subs": "10% – 15%",
        "kibble": "45% – 60% (Relleno de almidones)"
      },
      {
        "metric": "Humedad Biológica",
        "dfp": "70% – 75% (Hidratación renal esencial)",
        "subs": "70% – 75%",
        "kibble": "8% – 10% (Deshidratación subclínica)"
      },
      {
        "metric": "Transparencia de Ingredientes",
        "dfp": "100% Gramos y porcentajes públicos",
        "subs": "Fórmula patentada (gramajes ocultos)",
        "kibble": "Ingredientes fraccionados y harinas cárnicas"
      },
      {
        "metric": "Coste Medio Mensual (Perro 23 kg)",
        "dfp": "75€ – 110€ (Elaborado en casa)",
        "subs": "260€ – 360€ / mes",
        "kibble": "55€ – 85€ / mes"
      }
    ]
  },
  "faqPage": {
    "badge": "BASE DE CONOCIMIENTO // MÁS DE 40 RESPUESTAS VETERINARIAS",
    "exploreHubsTitle": "Explora Nuestras Guías Especializadas en Nutrición Canina",
    "exploreHubsSubtitle": "Profundiza en artículos técnicos diseñados para dueños comprometidos con la salud y longevidad de su perro.",
    "cardBestFood": "Comparativa de comida fresca, BARF, piensos de alta proteína y fórmulas para perros con estómago sensible.",
    "cardCalc": "Calculadora científica de calorías RER y MER que proporciona raciones exactas en gramos y tazas.",
    "cardRecipes": "Recetas caseras cocinadas y dietas BARF 80-10-10 con aporte correcto y seguro de calcio.",
    "cardAllergies": "Selección de proteínas noveles, dietas de eliminación y cuidado del microbioma intestinal.",
    "cardToxic": "Índice exhaustivo de alimentos humanos venenosos, frutas y verduras seguras y aditivos a evitar.",
    "cardBrands": "Análisis independientes de Blue Buffalo, Nutrish, Pure Balance, Ollie y Open Farm."
  },
  "faqSingle": {
    "reviewedBy": "Revisado por: Nutricionista Canino Veterinario",
    "updated": "Actualizado: 2026",
    "directQuickAnswer": "Respuesta Rápida Directa",
    "clinicalAnalysis": "Análisis Nutricional y Clínico Detallado",
    "topics": "Temas:",
    "ctaBadge": "🐾 Motor de Nutrición Canina Gratuito",
    "ctaTitle": "Calcula las Calorías y Porciones Diarias Exactas para tu Perro",
    "ctaSubtitle": "Usa nuestra calculadora veterinaria para obtener el gasto metabólico exacto (RER/MER) y los gramos para menús frescos o crudos.",
    "ctaBtn": "Calcular Ración Diaria Ahora →",
    "relatedTitle": "Preguntas Frecuentes Relacionadas",
    "readAnswer": "Leer Respuesta Completa →"
  }
},
  ja: {
  "about": {
    "missionBadge": "私たちの使命 // 臨床犬栄養学",
    "whyTitle": "DogFoodPlannerが設立された理由",
    "whyP1": "何十年もの間、市販のペットフード市場は不透明なブラックボックスとして運営されてきました。200℃以上の超高温で押し出し成形される一般的なドライフードは、熱に弱い天然ビタミンを破壊し、必須オメガ脂肪酸を酸化させ、袋の重さの最大60％を高GI値のデンプンでかさ増ししています。",
    "whyP2": "その一方で、フレッシュフードの定期購入サービスは、基本的な赤身肉や野菜だけで月額3万円〜5万円以上も請求します。DogFoodPlannerはこの格差を解消します。私たちは臨床犬栄養士が使用する正確な科学的計算アルゴリズムを完全無料で提供し、愛犬家が自宅で手頃なコストで栄養バランスの取れた手作り食や生肉BARF食、スーパーフードトッピングを作れるよう支援します。",
    "methodTitle": "私たちの栄養学アプローチと計算基準",
    "pillars": [
      {
        "tag": "01 // NRC標準計算式",
        "title": "安静時エネルギー要求量 (RER)",
        "desc": "大雑把な体重別目安ではなく、指数関数的な体表面積（70 × 体重kg^0.75）に基づいて正確なRER（安静時必要カロリー）を算出します。"
      },
      {
        "tag": "02 // AAFCO基準の充足",
        "title": "生体利用効率の高い微量栄養素",
        "desc": "すべての給餌プランはカルシウム・リン比率（1.2:1〜1.4:1）、EPA/DHA比率、必須タウリンの維持を徹底しています。"
      },
      {
        "tag": "03 // 課金・有料機能なし",
        "title": "100%オープン＆独立性",
        "desc": "特定ペットフード企業の有償スポンサー枠を一切排除し、クレジットカードの登録なしで詳細な分量（グラム数）を公開しています。"
      }
    ],
    "ctaTitle": "愛犬に必要な適正カロリーと食事量を計算してみませんか？",
    "ctaDesc": "無料の対話型給餌計算機や犬のアレルギー対策ガイド、獣医学的なフード評価レビューをご活用ください。",
    "ctaBtn": "無料の栄養計算機を起動する →"
  },
  "contact": {
    "eyebrow": "サポート＆お問い合わせ // 直接相談窓口",
    "cards": [
      {
        "icon": "📧",
        "title": "一般的なお問い合わせ",
        "desc": "サイトへのご意見・ご質問：",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🐾",
        "title": "栄養学・計算式に関する質問",
        "desc": "獣医師監修フォーミュラについて：",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🛡️",
        "title": "技術サポート・不具合報告",
        "desc": "計算機の不具合・表示エラー：",
        "email": "hello@dogfoodplanner.com"
      }
    ],
    "formTitle": "犬の栄養学専門チームへメッセージを送信",
    "formDesc": "NRCカロリー計算式に関するご質問や、手作り食・生食レシピの調整に関するご相談は、24営業時間以内に返信いたします。",
    "nameLabel": "お名前",
    "namePlaceholder": "例：山田 太郎",
    "emailLabel": "メールアドレス",
    "emailPlaceholder": "yamada@example.com",
    "subjectLabel": "お問い合わせの種類",
    "subjectOptions": [
      "一般的なご質問・ご意見",
      "犬の栄養学・レシピに関するお問い合わせ",
      "計算機の計算式・アルゴリズムについて",
      "不具合報告・技術的なエラー"
    ],
    "messageLabel": "お問い合わせ内容",
    "messagePlaceholder": "愛犬の情報（犬種、体重、年齢）とご相談内容をご記入ください...",
    "submitBtn": "メッセージを送信する →",
    "notice": "獣医師救急に関するご注意：愛犬が誤飲・中毒症状や急性疾患を起こしている場合は、直ちにお近くの夜間救急動物病院へご連絡ください。",
    "faqTitle": "よくある質問をご確認ください",
    "faqDesc": "偏食・食べムラ対策、生食BARF、キャットフードの危険性、市販ドッグフードの評価など、40件以上の専門Q&Aをご用意しています。",
    "faqBtn": "すべてのFAQを見る →"
  },
  "privacy": {
    "eyebrow": "利用規約・プライバシー // 個人情報保護方針",
    "lastUpdated": "最終改訂：2026年1月",
    "intro": "DogFoodPlanner.com（以下「当サイト」）は、ユーザーの皆様のプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーでは、当サイトにおける情報の取り扱いについて説明します。",
    "sections": [
      {
        "title": "1. 当サイトが収集しない個人情報",
        "content": "愛犬の健康データはお客様自身のものです。当サイトの栄養計算機を利用するにあたり、会員登録、パスワード設定、クレジットカード情報の入力は一切不要です。計算機に入力された愛犬の犬種、体重、食事スタイルなどのデータはお使いのブラウザ内（クライアントサイド）でのみ演算され、外部サーバーに保存されることはありません。"
      },
      {
        "title": "2. 匿名技術データとアクセスログ",
        "content": "一般的なウェブサイトと同様に、当サイトのCDNサーバーはセキュリティ維持およびDDoS攻撃防御のため、匿名化されたIPアドレス、ブラウザ種別、リファラーURL、アクセス日時などの技術的ログを自動的に記録します。"
      },
      {
        "title": "3. Cookieおよびローカルストレージ（localStorage）",
        "content": "当サイトでは、選択された表示言語設定の保持、およびページを更新した際に愛犬の計算結果を維持する目的でのみ、ブラウザのローカルストレージ（localStorage）を利用します。"
      },
      {
        "title": "4. 外部リンクおよび科学的リソース",
        "content": "当サイトには査読付き科学論文、AAFCO基準、NRCデータベースなどへの外部リンクが含まれます。リンク先の第三者ウェブサイトにおける個人情報保護方針について、当サイトは責任を負いません。"
      },
      {
        "title": "5. 未成年者の利用について",
        "content": "当サイトのサービスは成人した愛犬家を対象としています。13歳未満の児童から意図的に個人情報を収集することはありません。"
      },
      {
        "title": "6. プライバシーポリシーの改定とお問い合わせ",
        "content": "本ポリシーは機能向上等に伴い改定されることがあります。ご不明な点がございましたら privacy@dogfoodplanner.com までご連絡ください。"
      }
    ]
  },
  "terms": {
    "eyebrow": "利用規約 // サービス利用条件",
    "lastUpdated": "最終改訂：2026年1月",
    "intro": "DogFoodPlanner.comをご利用いただく前に、本利用規約を必ずお読みください。当サイトをご利用いただくことで、本規約に同意されたものとみなされます。",
    "sections": [
      {
        "title": "1. 規約への同意",
        "content": "DogFoodPlanner.com（以下「当サイト」）にアクセスしサービスを利用することにより、本利用規約を読み、理解し、遵守することに同意したものとみなされます。不同意の場合は、当サイトのご利用をお控えください。"
      },
      {
        "title": "2. 獣医学的および医療に関する免責事項",
        "content": "当サイトで提供される情報、計算機、手作り食レシピは、米国学術研究会議（NRC）および全米飼料検査官協会（AAFCO）の公開モデルに基づく一般的な教育および情報提供のみを目的としています。これらは専門の獣医師による医学的診断、治療、個別指導に代わるものではありません。愛犬の食事を大幅に変更する前、特に子犬期、妊娠中、慢性腎不全や心臓病などの疾患を持つ犬の場合は、必ずかかりつけ獣医師にご相談ください。"
      },
      {
        "title": "3. インタラクティブ計算機の利用について",
        "content": "エネルギー要求量（RER・MER）および給餌量（グラム数）の計算結果は統計的な目安です。個々の犬の代謝率は遺伝、不妊去勢手術の有無、飼育環境の気温により大きく異なります。飼い主様は定期的に愛犬のボディコンディションスコア（BCS）を確認し、適宜給餌量を調整してください。"
      },
      {
        "title": "4. 手作り食・生食の安全性とカルシウム配合義務",
        "content": "手作り食や生肉食（BARF）を与える際は、完全な微量栄養素バランスを維持する必要があります。特に、カルシウムを添加せずに骨なし肉のみを与え続けると、数ヶ月で重篤な骨粗鬆症や低カルシウム血症を引き起こします。食材の正確な計量およびカルシウム補給は利用者の自己責任となります。"
      },
      {
        "title": "5. 知的財産権",
        "content": "当サイト内のすべての独自計算アルゴリズム、UIデザイン、グラフィック、解説記事はDogFoodPlannerに帰属し、著作権法および国際知的財産権法により保護されています。"
      },
      {
        "title": "6. 責任の制限",
        "content": "当サイトに掲載された情報およびツールの利用または利用不能に起因するいかなる直接的・間接的損害に対しても、当サイト運営者および監修者は一切の責任を負いません。"
      }
    ]
  },
  "bestFood": {
    "eyebrow": "総合ガイド // 2026年最新ドッグフード評価・ランキング",
    "rankingsTitle": "【2026年最新】愛犬の健康寿命を延ばすフードランキングTOP5",
    "rankingsIntro": "近年の獣医栄養学研究において、「加熱処理の最小化」と「70％以上の自然な水分含有量」が、愛犬の活力維持、腎臓病予防、抗病性の鍵であることが立証されています。",
    "rankings": [
      {
        "rank": "01",
        "title": "ヒューマングレード 低温スチーム調理フレッシュフード",
        "score": "98/100",
        "pros": "人間用基準の安全な肉と野菜を70℃の低温で加熱。天然の水分（70％以上）、生きた消化酵素、微量ビタミンが損なわれず保持されます。",
        "cons": "冷凍庫や冷蔵庫での保管が必要。ドライフードと比較してコストが高め。"
      },
      {
        "rank": "02",
        "title": "先祖伝来の80-10-10 生肉BARFダイエット",
        "score": "95/100",
        "pros": "肉食動物本来の黄金比率（肉80％、生骨10％、内臓10％）。歯石の沈着を防ぎ、引き締まった筋肉を維持します。",
        "cons": "徹底した衛生管理と正確なカルシウム比率の把握が不可欠。"
      },
      {
        "rank": "03",
        "title": "エアドライ＆フリーズドライ生ドッグフード",
        "score": "91/100",
        "pros": "生肉の優れた栄養価を常温保存できる利便性を両立。偏食な愛犬のトッピングにも最適。",
        "cons": "腎臓への負担を避けるため、ぬるま湯や骨スープで戻してから与える必要があります。"
      },
      {
        "rank": "04",
        "title": "高タンパク質 グレインフリー＆古代穀物ドライフード",
        "score": "78/100",
        "pros": "常温で長期保存が可能。多頭飼育や大型犬のご家庭でも経済的な選択肢。",
        "cons": "200℃以上の超高温加工が施され、水分がわずか8〜10％しかなく、炭水化物が40〜50％含まれます。"
      },
      {
        "rank": "05",
        "title": "獣医師専任 処方療法食",
        "score": "72/100",
        "pros": "進行した慢性腎不全、肝不全、ストルバイト結石症などの疾患管理に特化。",
        "cons": "穀物由来の増量材が多く使われる傾向があり、獣医師の診断書・指示が必要です。"
      }
    ],
    "buyerGuideTitle": "最高のドッグフードを選ぶための4大原則",
    "buyerRules": [
      {
        "title": "1. 原材料の筆頭が明確な動物性生肉であること",
        "desc": "「肉副産物粉末」や「家禽ミール」などの曖昧な表記ではなく、「生骨抜き七面鳥肉」「牛肉」「生サーモン」と具体的に明記されたものを選びましょう。"
      },
      {
        "title": "2. 70％以上の自然な水分を確保すること",
        "desc": "水分8〜10％のドライフードのみを食べている犬は慢性的な水分不足になりがちです。必ずウェットフードや骨スープを足しましょう。"
      },
      {
        "title": "3. 合成酸化防止剤・着色料の完全排除",
        "desc": "BHA、BHT、エトキシキン、プロピレングリコール、赤色○号などの発がん性・毒性が懸念される化学添加物は絶対に避けてください。"
      },
      {
        "title": "4. 炭水化物を25％未満に抑えること",
        "desc": "犬の唾液には炭水化物を分解するアミラーゼがありません。過剰なデンプンはすい臓に負担をかけ肥満を引き起こします。"
      }
    ],
    "ctaTitle": "愛犬に最適なフードの正確な給餌量を計算する",
    "ctaDesc": "フレッシュフード、生肉BARF食、プレミアムカリカリのいずれを選んでも、愛犬に最適な日々の給餌グラム数とカロリーがすぐに分かります。",
    "ctaBtn": "今すぐ適正給餌量を計算する →"
  },
  "recipes": {
    "eyebrow": "獣医師監修レシピ // NRC＆AAFCO基準の手作り食",
    "heroTitle": "愛犬のための獣医師監修 手作り食レシピ",
    "heroSubtitle": "完全な栄養バランスを満たした低温調理フードと、自然の摂理に沿った80-10-10生肉BARF食を自宅で作るためのステップバイステップ・ガイド。",
    "calciumWarningTitle": "手作り犬ごはんの絶対鉄則：カルシウムとリンのバランス",
    "calciumWarningDesc": "動物の筋肉肉はリンが極めて多く、カルシウムがほとんど含まれていません（比率1:20）。カルシウムを足さずに肉と白米だけを与え続けると、数ヶ月で骨軟化症や骨の脱灰（スカスカになる病気）を引き起こします。骨なし肉450gあたり、必ず純粋な卵殻パウダー小さじ半分（元素カルシウム約900mg）を加えて、安全な「カルシウム：リン＝1.2：1」の比率を保ってください。",
    "recipesList": [
      {
        "tag": "低温スチーム調理",
        "title": "レシピ1：七面鳥とプレバイオティクス南瓜のやさしいごはん（胃腸が弱い犬用）",
        "desc": "消化器系が敏感な犬、軟便になりやすい犬、市販チキンにアレルギーがある犬に最適です。",
        "ingredients": [
          "七面鳥ひき肉（赤身93/7） — 65%（約900g）",
          "牛または七面鳥のハツ（心臓・天然タウリン源） — 10%（約140g）",
          "無添加カボチャピュレ（水溶性食物繊維） — 10%（約140g）",
          "蒸しホウレンソウ＆細かく刻んだズッキーニ — 10%（約140g）",
          "天然アラスカ産サーモンオイル（EPA/DHA） — 2%（大さじ1.5）",
          "微粉末卵殻パウダー（天然カルシウム） — 3%（小さじ1杯強）"
        ],
        "prep": "七面鳥ひき肉とハツをフライパンで弱火で軽く炒めます（中心温度70℃を目安に加熱しすぎない）。野菜を蒸してカボチャピュレと混ぜ、粗熱を完全にとります。最後にサーモンオイルと卵殻パウダーを均一に混ぜ込み、1食分ずつ小分けして冷凍保存します。"
      },
      {
        "tag": "生食BARF",
        "title": "レシピ2：牛肉と鴨肉の先祖伝来80-10-10 生肉BARF食",
        "desc": "消化機能が健全で胃酸分泌が活発な成犬のための、生物学的に適正な生食メニュー。",
        "ingredients": [
          "牧草牛（グラスフェッド）赤身角切り肉 — 70%",
          "牛ハツ（L-カルニチンとコエンザイムQ10が豊富） — 10%",
          "生の可食鴨ネックまたは鶏ガラ — 10%（天然の生骨とカルシウム）",
          "牛レバー（肝臓・ビタミンAとB群） — 5%",
          "牛キドニー（腎臓）または脾臓（分泌内臓器官） — 5%"
        ],
        "prep": "赤身肉とハツを一口大にカットします。生骨は愛犬が丸呑みしない適切なサイズを選びます。内臓はデジタルキッチンスケールで正確に計量します。寄生虫対策として、給餌前にマイナス20℃以下で最低3週間以上冷凍庫で凍結保存してください。"
      },
      {
        "tag": "スーパーフードトッピング",
        "title": "レシピ3：抗酸化スーパーフード トッピング（カリカリの栄養強化）",
        "desc": "市販のドライフードの20％を新鮮な自然食材に置き換えるための高機能トッパー。",
        "ingredients": [
          "放し飼い有精卵（半熟ポーチドエッグ） — 40%",
          "蒸しブロッコリースプラウト＆ワイルドブルーベリー — 30%",
          "じっくり煮出した牛骨ボーンブロススープ — 20%",
          "オーガニックヘンプシード＆ケルプパウダー — 10%"
        ],
        "prep": "卵を4分間軽く茹でて半熟にします。スプラウトをさっと蒸し、温めたボーンブロスとブルーベリーと一緒に軽く潰します。普段のドライフードに大さじ2〜4杯を毎食トッピングしてください。"
      }
    ],
    "calciumGuideTitle": "手作り犬ごはんで安全に使えるカルシウム源",
    "calciumGuideItems": [
      {
        "title": "微粉末卵殻パウダー",
        "ratio": "骨なし肉450gに対して小さじ1/2",
        "desc": "純度95％の炭酸カルシウム。水洗いして天日干しまたは加熱殺菌した卵の殻をミルで細かく粉砕して使用します。"
      },
      {
        "title": "生の可食生肉骨（絶対に加熱しない）",
        "ratio": "食事全体の重量の10％",
        "desc": "鴨ネック、鶏手羽先など。加熱した骨は硬化して縦に裂け、食道や腸を突き破る致命的な危険があるため絶対に生で与えてください。"
      },
      {
        "title": "獣医用ボーンミール（骨粉サプリ）",
        "ratio": "製品ラベルの指示に従う",
        "desc": "微小結晶性ヒドロキシアパタイト。カルシウムとリンが天然の2:1比率で含まれており生体利用効率に優れます。"
      }
    ]
  },
  "toxic": {
    "eyebrow": "危険食材 // 犬が食べてはいけない危険な食べ物",
    "dangerTitle": "家庭内にある犬にとって猛毒な危険食材",
    "dangerIntro": "人間の食べ物に含まれる特定の化学成分は、犬の代謝酵素では無毒化できず、急性臓器不全や突然死を引き起こします。",
    "dangerList": [
      {
        "name": "チョコレート・ココア",
        "toxin": "テオブロミンおよびカフェイン",
        "symptoms": "激しい嘔吐、パンティング（過呼吸）、不整脈、筋肉の硬直、けいれん発作、心不全。",
        "risk": "高危険度・致死性あり"
      },
      {
        "name": "ブドウ・レーズン・マスカット",
        "toxin": "酒石酸（酒石酸塩）",
        "symptoms": "無気力、脱水症状、摂取後24〜72時間以内に急性腎不全（乏尿・無尿）を発症。",
        "risk": "極めて猛毒・命の危険"
      },
      {
        "name": "キシリトール（白樺糖 / 合成甘味料）",
        "toxin": "合成糖アルコール",
        "symptoms": "インスリンの急激な大量放出による重度の低血糖発作、虚脱、数時間以内の急性肝壊死。",
        "risk": "最高度の緊急事態"
      },
      {
        "name": "タマネギ・長ネギ・ニンニク・ニラ",
        "toxin": "有機硫黄化合物（アリルプロピルジスルフィド）",
        "symptoms": "赤血球のヘモグロビン破壊、ハインツ小体性溶血性貧血、赤褐色尿、チアノーゼ。",
        "risk": "蓄積毒性・極めて危険"
      },
      {
        "name": "マカダミアナッツ",
        "toxin": "未同定の神経毒性物質",
        "symptoms": "後ろ足の麻痺・ふらつき、高体温、嘔吐、関節の激痛。",
        "risk": "中等度〜重篤"
      },
      {
        "name": "加熱した鳥や魚の骨全般",
        "toxin": "物理的な鋭利破片による穿孔",
        "symptoms": "消化管の裂傷、大量の体内出血、腹膜炎、閉塞性イレウス。",
        "risk": "緊急開腹手術が必要"
      }
    ],
    "emergencyTitle": "誤飲・誤食中毒が疑われる場合の緊急対処法",
    "emergencySteps": [
      "1. 直ちに愛犬の口から取り出す：何を、どのくらいの量、何時何分に食べたか、パッケージを確保してください。",
      "2. 獣医師の指示なしに無理に吐かせない：オキシドール等で無理に吐かせると、腐食性物質や骨の破片が食道を破壊し二次災害を起こします。",
      "3. 直ちに動物病院に電話する：夜間救急動物病院またはかかりつけ医へ直ちに連絡し、指示を仰いでください。"
    ],
    "safeTitle": "愛犬に与えても100％安全で健康に良い野菜・果物",
    "safeIntro": "以下の食材は、抗酸化物質、水溶性食物繊維、ビタミンを豊富に含み、安全に毎日のトッピングとして活用できます：",
    "safeFoods": [
      {
        "name": "ブルーベリー",
        "benefit": "抗酸化作用を持つアントシアニンとポリフェノールが細胞の老化を防ぎます。"
      },
      {
        "name": "蒸しカボチャ",
        "benefit": "豊富な水溶性食物繊維が腸内環境を整え、下痢と便秘の両方を改善します。"
      },
      {
        "name": "ニンジン",
        "benefit": "低カロリーでβカロテンが豊富。シャキシャキした食感で歯の清掃にも役立ちます。"
      },
      {
        "name": "サヤエンドウ・サヤインゲン",
        "benefit": "食物繊維が豊富で低GI。肥満気味の愛犬の満足感を高める減量食に最適。"
      },
      {
        "name": "リンゴ（※種と芯を完全に取り除く）",
        "benefit": "水溶性ペクチンとビタミンCが腸内善玉菌を増やします。"
      }
    ]
  },
  "brands": {
    "eyebrow": "ブランド分析 // 人気ドッグフードの評価とリコール履歴",
    "heroTitle": "有名ドッグフードの客観的評価とリコール履歴",
    "heroSubtitle": "獣医師の視点に基づき、主要ブランドの原材料品質、AAFCO表示基準の適合性、過去のリコール記録を忖度なしで検証します。",
    "brandsList": [
      {
        "name": "ブルーバッファロー（Blue Buffalo）",
        "grade": "評価：B+",
        "pros": "第一原材料が生肉。トウモロコシ・小麦・大豆不使用。ビタミンを守る冷圧成形「ライフソースビッツ」配合。",
        "cons": "炭水化物比率が45〜50％と高め。過去に水分過剰によるカビやビタミンD過剰配合での自主回収履歴あり。",
        "verdict": "市販ドライフードの中では上位水準。新鮮な水分を補うためフレッシュトッピングの併用を推奨します。"
      },
      {
        "name": "レイチェルレイ ニュートリッシュ",
        "grade": "評価：C+ / B-",
        "pros": "手頃な価格で入手しやすい。上位ライン（Peak/Dish）は生肉の含有割合が高く設計されています。",
        "cons": "普及グレードではエンドウ豆タンパクやコーングルテンミールでのかさ増しが見られ、過去のFDA調査対象に含まれました。",
        "verdict": "予算重視の場合は上位ラインを選択し、原材料表示の「豆類の分割表記」に注意してください。"
      },
      {
        "name": "ピュアバランス（Pure Balance）",
        "grade": "評価：B（コスパ優秀）",
        "pros": "プライベートブランドながら第一原材料に肉を使用し、人工着色料や小麦不使用で極めてコストパフォーマンスが高い。",
        "cons": "外部OEM委託製造。炭水化物比率は標準的。",
        "verdict": "一般量販店やスーパーで購入できる市販フードの中では最も良心的な選択肢のひとつ。"
      },
      {
        "name": "オリー（Ollie）フレッシュフード",
        "grade": "評価：A（最高評価）",
        "pros": "100％ヒューマングレードの高品質な肉と野菜。低温加熱で個包装パウチ。栄養素の吸収率が抜群。",
        "cons": "月額費用が高価（月2万〜4万円）。冷凍庫の保管スペースが必要。",
        "verdict": "代謝機能、毛並みの艶、消化器の健康寿命を最優先に考える飼い主様にとってのゴールドスタンダード。"
      },
      {
        "name": "オープンファーム（Open Farm）",
        "grade": "評価：A-",
        "pros": "すべての原材料の産地と人道的農場基準（ヒューメイン認証）を完全公開。持続可能な魚介類を採用。",
        "cons": "プレミアム価格帯。取り扱い実店舗が限定的。",
        "verdict": "エシカルな調達基準と確かな肉質、副産物ミール完全不使用を重視する方に最適。"
      }
    ],
    "recallsTitle": "ペットフードのリコール（回収）情報の見方",
    "recallsDesc": "米FDAのリコール基準は3段階に分かれます：クラスI（サルモネラ菌感染やビタミンD過剰など死亡リスクのある重大事態）、クラスII（一時的な健康被害）、クラスIII（表示違反等）。袋のロット番号を確認する習慣をつけましょう。",
    "methodTitle": "当サイトのフード評価における4つの基準",
    "methodPillars": [
      {
        "title": "1. タンパク質源の透明性",
        "desc": "「肉類」「家禽ミール」ではなく、明確な部位名が記載された骨抜き生肉であること。"
      },
      {
        "title": "2. 炭水化物比率の抑制",
        "desc": "犬の代謝に適した健康維持のため、デンプン質を40％未満に抑えていること。"
      },
      {
        "title": "3. 原産地と調達の透明性",
        "desc": "遺伝子組み換え不使用や人道的農場基準など、トレーサビリティが確保されていること。"
      },
      {
        "title": "4. 安全基準とリコール実績",
        "desc": "第三者機関による菌検査の実施やクリーンな安全管理体制が敷かれていること。"
      }
    ]
  },
  "allergies": {
    "eyebrow": "皮膚・アレルギー科 // 食物アレルギーと低アレルゲン食",
    "heroTitle": "アレルギー・皮膚炎・お腹が弱い犬のためのフードガイド",
    "heroSubtitle": "食物アレルギーのメカニズム、単一タンパク質（新奇タンパク質）の選び方、8週間の除去食試験プロトコルを獣医学的に解説。",
    "allergensTitle": "犬に最も多い食物アレルゲンTOP5",
    "allergensIntro": "犬の食物アレルギーは、特定のタンパク質に対する免疫過剰反応です。臨床報告の多い順に以下の通りです：",
    "allergensList": [
      {
        "name": "1. 市販ブロイラーチキン（全体の約60％）",
        "desc": "市販ペットフードに極めて多用されているため、最も抗体が作られやすいアレルゲンです。"
      },
      {
        "name": "2. 牛肉（全体の約30％）",
        "desc": "赤身肉アレルギーを持つ犬では、激しい皮膚の痒みや外耳炎の主な原因となります。"
      },
      {
        "name": "3. 乳製品・チーズ",
        "desc": "犬は成犬になるとラクターゼ酵素が失われるため、乳糖不耐症による下痢や腹鳴を引き起こします。"
      },
      {
        "name": "4. 小麦・トウモロコシのグルテン",
        "desc": "腸粘膜バリアを荒らし、体内の慢性炎症や皮膚のマラセチア酵母菌の増殖を助長します。"
      },
      {
        "name": "5. 大豆・豆類プロテイン",
        "desc": "安価な増量材として使われる植物性タンパク質ですが、消化不良やガス発生の原因になります。"
      }
    ],
    "eliminationTitle": "獣医学的「8週間 除去食試験（エリミネーション）」の手順",
    "eliminationSteps": [
      {
        "step": "ステップ1",
        "title": "一度も食べたことのない新奇タンパク質を1種類選ぶ",
        "desc": "鹿肉（ベニソン）、カンガルー肉、ウサギ肉など、愛犬が過去に一度も口にしたことのないタンパク質とカボチャなど消化の良い単一炭水化物に限定します。"
      },
      {
        "step": "ステップ2",
        "title": "完全なコンタミネーション防止（厳格な8週間）",
        "desc": "8週間、指定された食事と水以外は絶対に与えてはいけません。市販のおやつ、人間の食事のおすそ分け、フレーバー付きの薬も禁止です。"
      },
      {
        "step": "ステップ3",
        "title": "1食材ずつの負荷試験（原因物質の特定）",
        "desc": "痒みや下痢が完全に治まったら、疑わしい食材（例：鶏肉）を1種類だけ7日間与えて反応を観察します。症状が再発すればアレルゲン確定です。"
      }
    ],
    "novelTitle": "おすすめの新奇タンパク質（低アレルゲン肉）",
    "novelProteins": [
      {
        "name": "鹿肉（ベニソン）",
        "desc": "高タンパク低脂質でビタミンB群が豊富。抗体を持っている犬が極めて少ない優秀な赤身肉。"
      },
      {
        "name": "ウサギ肉（ラビット）",
        "desc": "必須アミノ酸バランスに優れ、消化吸収率が高く、漢方医学でも体を温め炎症を鎮める肉とされます。"
      },
      {
        "name": "鴨肉（ダック）",
        "desc": "鶏肉アレルギーの犬にとって安全な鳥肉代替品。鉄分と不飽和脂肪酸が豊富。"
      },
      {
        "name": "カンガルー肉",
        "desc": "オーストラリアの大自然で育った天然野生肉。脂肪分が約2％と極めて低く最もクリーンな肉。"
      }
    ]
  },
  "calculator": {
    "eyebrow": "完全無料 // 獣医学的給餌量＆カロリー計算機",
    "noticeTitle": "重要なお知らせ：",
    "noticeText": "本ツールは一般的な栄養学および教育目的で提供されています。獣医師の診断や医療処置に代わるものではありません。",
    "heroTitle": "獣医推奨 犬の給餌量＆適正カロリー計算機",
    "heroSubtitle": "愛犬の体重、年齢区分、活動レベル、体型スコア（BCS）を入力するだけで、正確な必要エネルギー量（RER・MER）と1食あたりのグラム数を瞬時に算出します。"
  },
  "breeds": {
    "eyebrow": "犬種別栄養ガイド // 獣医師推奨給餌基準",
    "targetWeight": "理想体重",
    "dailyCalories": "1日の推定カロリー",
    "freshDaily": "手作り食の1日量",
    "kibbleDaily": "ドライフードの1日量",
    "cups": "カップ",
    "reqsTitle": "{name}に必要な栄養基準と食事の特徴",
    "reqsIntro": "{category}犬種に分類され、平均体重が{w0}〜{w1}ポンド（約{Math.round(w0*0.453)}〜{Math.round(w1*0.453)}kg）の{name}には、体質に合わせた栄養設計が必要です：",
    "predispositionsTitle": "気をつけたい体質と食事管理：",
    "feedingRoutineTitle": "おすすめの給餌スケジュール：",
    "feedingRoutineDesc": "成犬の{name}には、1日2回（朝50％・夕方50％）に分けて与えるのが理想的です。常に清潔な新鮮水を用意してください。ドライフードを与える場合は、ぬるま湯や骨スープでふやかすと腎臓の健康維持につながります。",
    "ctaTitle": "{name}専用の食事プランを作成する",
    "ctaSubtitle": "子犬期・成犬・シニア犬、正確な体重、運動量、去勢・避妊の有無に合わせて精密な給餌量を計算します。",
    "ctaBtn": "{name}の計算機を起動する →",
    "faqTitle": "{name}の食事に関するよくある質問",
    "faqSubtitle": "給餌回数、適正体重の維持、おすすめの食材について。"
  },
  "comparisonTable": {
    "eyebrow": "臨床比較 // なぜ新鮮な自然食がドライフードより優れているのか",
    "title": "生肉・手作り食 vs 一般ドライフードの科学的比較",
    "subtitle": "体内での消化吸収率、加熱加工温度、長期的なコストの客観的な比較検証。",
    "scrollHint": "↔ 横にスクロールしてご覧ください",
    "colMetric": "比較項目",
    "colDfp": "✨ DogFoodPlanner手作り食",
    "colSubs": "フレッシュフード定期便",
    "colKibble": "市販ドライフード（カリカリ）",
    "rows": [
      {
        "metric": "調理・加工温度",
        "dfp": "70℃の低温スチーム または 生肉酵素",
        "subs": "瞬間冷凍レトルト加熱",
        "kibble": "200℃以上の超高温エクストルーダー加工"
      },
      {
        "metric": "純炭水化物割合",
        "dfp": "3.5％未満（必要な野菜繊維のみ）",
        "subs": "10％〜15％",
        "kibble": "45％〜60％（デンプン増量材）"
      },
      {
        "metric": "自然な水分含有量",
        "dfp": "70％〜75％（腎臓を守る不可欠な水分）",
        "subs": "70％〜75％",
        "kibble": "8％〜10％（潜在的脱水リスク）"
      },
      {
        "metric": "原材料の透明性",
        "dfp": "100％グラム数と配合比率を全公開",
        "subs": "独自配合（詳細グラム数は非公開）",
        "kibble": "曖昧なミール表記・豆類の分割表示"
      },
      {
        "metric": "月々の平均食費（体重10kg換算）",
        "dfp": "約8,000円〜12,000円（自宅で調理）",
        "subs": "約25,000円〜35,000円 / 月",
        "kibble": "約5,000円〜8,000円 / 月"
      }
    ]
  },
  "faqPage": {
    "badge": "ナレッジベース // 獣医師監修40以上のQ&A",
    "exploreHubsTitle": "目的別の専門栄養ガイドを探す",
    "exploreHubsSubtitle": "愛犬の健康と長寿を願う飼い主様のために作成された深掘り特集ガイド。",
    "cardBestFood": "手作り食、生肉BARF食、高タンパクカリカリ、お腹が弱い犬用フードの徹底比較。",
    "cardCalc": "愛犬の安静時代謝量（RER）と1日の適正給餌グラム数を導き出す計算機。",
    "cardRecipes": "必須カルシウムを完全に補正した低温調理ごはん＆80-10-10生肉BARFレシピ。",
    "cardAllergies": "新奇タンパク質（低アレルゲン肉）の選び方と8週間の除去食試験手順。",
    "cardToxic": "犬が誤飲すると命に関わる危険食材一覧、安全な果物・野菜の適正量。",
    "cardBrands": "ブルーバッファロー、オリジン、オリーなどの客観的レビューとリコール履歴。"
  },
  "faqSingle": {
    "reviewedBy": "監修：獣医臨床栄養士",
    "updated": "最終更新：2026年",
    "directQuickAnswer": "結論・要約回答",
    "clinicalAnalysis": "獣医学的・臨床栄養学的な詳細解説",
    "topics": "関連タグ：",
    "ctaBadge": "🐾 無料の犬栄養計算エンジン",
    "ctaTitle": "愛犬に必要な1日のカロリーと食事量を今すぐ計算",
    "ctaSubtitle": "体重、年齢、運動量に応じた正確な代謝量（RER/MER）と、手作り食・生食の給餌グラム数を瞬時に算出します。",
    "ctaBtn": "今すぐ適正給餌量を計算する →",
    "relatedTitle": "関連する犬の栄養・食事Q&A",
    "readAnswer": "回答全文を読む →"
  }
},
  fr: {
  "about": {
    "missionBadge": "NOTRE MISSION // NUTRITION CLINIQUE CANINE",
    "whyTitle": "Pourquoi DogFoodPlanner a été Créé",
    "whyP1": "Pendant des décennies, l’industrie des aliments pour animaux a fonctionné comme une boîte noire. Les croquettes industrielles extrudées à plus de 200°C détruisent les vitamines naturelles, oxydent les acides gras oméga essentiels et alourdissent les sacs avec jusqu’à 60% d’amidons hautement glycémiques.",
    "whyP2": "En parallèle, les abonnements de ration ménagère facturent plus de 300€ par mois pour de la viande maigre et des légumes basiques. DogFoodPlanner comble ce fossé. Nous mettons à disposition gratuitement les algorithmes mathématiques exacts des nutritionnistes vétérinaires afin que chaque maître puisse préparer à domicile des repas frais, des rations BARF ou des garnitures riches à une fraction du coût.",
    "methodTitle": "Notre Méthodologie Nutritionnelle",
    "pillars": [
      {
        "tag": "01 // FORMULES NRC",
        "title": "Calcul Métabolique au Repos (RER)",
        "desc": "Détermine le Besoin Énergétique au Repos (RER) exact fondé sur la masse corporelle exponentielle (70 × (kg)^0.75) au lieu d’estimations approximatives par tranche de poids."
      },
      {
        "tag": "02 // STANDARDS AAFCO / FEDIAF",
        "title": "Micronutriments Biodisponibles",
        "desc": "Chaque formulation équilibre scrupuleusement le ratio calcium/phosphore (1.2:1 à 1.4:1), les acides gras EPA/DHA et les apports indispensables en taurine."
      },
      {
        "tag": "03 // ZÉRO ABONNEMENT PAYANT",
        "title": "Ouvert et Indépendant",
        "desc": "Nous refusons tout parrainage commercial rémunéré et ne dissimulons aucun grammage derrière un abonnement bancaire obligatoire."
      }
    ],
    "ctaTitle": "Prêt à Calculer les Besoins Nutritionnels de Votre Chien ?",
    "ctaDesc": "Utilisez notre calculateur interactif, découvrez nos guides sur les allergies et consultez nos analyses vétérinaires impartiales.",
    "ctaBtn": "Lancer le Calculateur Nutritionnel Gratuit →"
  },
  "contact": {
    "eyebrow": "SUPPORT & CONTACT // DEMANDES DIRECTES",
    "cards": [
      {
        "icon": "📧",
        "title": "Questions Générales",
        "desc": "Commentaires et demandes générales :",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🐾",
        "title": "Recherche Nutritionnelle",
        "desc": "Formules et questions vétérinaires :",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🛡️",
        "title": "Support Technique",
        "desc": "Signalement de bugs et calculs :",
        "email": "hello@dogfoodplanner.com"
      }
    ],
    "formTitle": "Envoyez un Message à Notre Équipe Vétérinaire",
    "formDesc": "Une question sur nos formules calorigènes NRC ou besoin d’aide pour une ration BARF ? Nous répondons sous 24 heures ouvrées.",
    "nameLabel": "Votre Nom",
    "namePlaceholder": "ex. Thomas Martin",
    "emailLabel": "Votre Adresse Email",
    "emailPlaceholder": "thomas@example.com",
    "subjectLabel": "Objet de la Demande",
    "subjectOptions": [
      "Question Générale / Avis",
      "Nutrition Canine & Recettes",
      "Formule du Calculateur Vétérinaire",
      "Signalement de Bug"
    ],
    "messageLabel": "Votre Message",
    "messagePlaceholder": "Parlez-nous de votre chien (race, poids, âge) et de la manière dont nous pouvons vous aider...",
    "submitBtn": "Envoyer le Message →",
    "notice": "Urgence Vétérinaire : Si votre animal présente des symptômes aigus d’intoxication ou de détresse sévère, contactez sans attendre une clinique vétérinaire d’urgence.",
    "faqTitle": "Vous cherchez une réponse rapide ?",
    "faqDesc": "Consultez notre base de connaissances de plus de 40 réponses vétérinaires sur le manque d’appétit, le BARF, la nourriture pour chat et les marques de croquettes.",
    "faqBtn": "Consulter Toute la FAQ →"
  },
  "privacy": {
    "eyebrow": "MENTIONS LÉGALES // POLITIQUE DE CONFIDENTIALITÉ",
    "lastUpdated": "Mise à jour : Janvier 2026",
    "intro": "Sur DogFoodPlanner.com, nous respectons votre vie privée. Cette politique détaille comment vos données sont traitées et protégées.",
    "sections": [
      {
        "title": "1. Informations Que Nous Ne Collectons Pas",
        "content": "Les données de santé de votre chien vous appartiennent. L’utilisation de notre calculateur ne requiert aucune inscription, mot de passe ou carte bancaire. Les profils canins, poids et choix d’aliments sont traités localement sur votre navigateur et ne sont jamais enregistrés sur des serveurs externes."
      },
      {
        "title": "2. Données Techniques Anonymes",
        "content": "Comme la plupart des plateformes web modernes, nos serveurs CDN collectent des données techniques anonymisées courantes (adresse IP masquée, navigateur, page de provenance et horodatage) pour sécuriser l’infrastructure et prévenir les attaques."
      },
      {
        "title": "3. Cookies et Stockage Local (localStorage)",
        "content": "Nous utilisons uniquement le stockage local de votre navigateur pour mémoriser votre langue préférée et conserver votre plan de repas actif afin d’éviter de recalculer lors d’un rafraîchissement."
      },
      {
        "title": "4. Liens Externes et Sources Scientifiques",
        "content": "Notre site renvoie vers des études scientifiques publiées, les directives AAFCO/FEDIAF et les banques de données du NRC. Nous ne sommes pas responsables des pratiques de confidentialité de ces tiers."
      },
      {
        "title": "5. Protection des Mineurs",
        "content": "Nos outils sont destinés aux adultes propriétaires d’animaux de compagnie. Nous ne collectons pas sciemment de données relatives aux mineurs de moins de 13 ans."
      },
      {
        "title": "6. Mises à Jour et Contact",
        "content": "Cette politique peut être mise à jour pour refléter l’évolution du service. Pour toute question, écrivez à privacy@dogfoodplanner.com."
      }
    ]
  },
  "terms": {
    "eyebrow": "MENTIONS LÉGALES // CONDITIONS GÉNÉRALES D’UTILISATION",
    "lastUpdated": "Mise à jour : Janvier 2026",
    "intro": "Veuillez lire attentivement ces conditions générales avant d’utiliser DogFoodPlanner.com. L’accès au site vaut acceptation pleine et entière de celles-ci.",
    "sections": [
      {
        "title": "1. Acceptation des Conditions",
        "content": "En naviguant sur DogFoodPlanner.com, vous reconnaissez avoir pris connaissance et accepté sans réserve les présentes conditions d’utilisation. Si vous êtes en désaccord, veuillez cesser toute utilisation."
      },
      {
        "title": "2. Avertissement Vétérinaire et Médical",
        "content": "Les informations, calculateurs et recettes proposés sur DogFoodPlanner.com sont fournis à des fins purement éducatives et informatives sur la base des modèles NRC et FEDIAF. Ils NE constituent EN AUCUN CAS un avis médical vétérinaire, un diagnostic ou une prescription personnalisée. Consultez systématiquement un vétérinaire ou un spécialiste en nutrition animale (DACVN) avant tout changement alimentaire majeur."
      },
      {
        "title": "3. Utilisation des Calculateurs Interactifs",
        "content": "Les résultats caloriques (RER et MER) et les rations en grammes sont des points de départ théoriques. Le métabolisme varie selon la stérilisation, l’activité, l’environnement et la génétique. Il appartient au maître d’évaluer la note d’état corporel (BCS) et d’ajuster les portions."
      },
      {
        "title": "4. Sécurité des Rations Ménagères et Équilibre en Calcium",
        "content": "L’alimentation maison ou crue impose une couverture stricte de l’ensemble des micronutriments. Distribuer de la viande sans os sans complément calcique adapté entraîne en quelques mois une déminéralisation osseuse grave. L’utilisateur assume l’entière responsabilité de l’équilibre de ses préparations."
      },
      {
        "title": "5. Propriété Intellectuelle",
        "content": "L’ensemble des contenus, algorithmes, interfaces graphiques et textes présents sur DogFoodPlanner.com sont protégés par le droit d’auteur et demeurent la propriété exclusive de DogFoodPlanner."
      },
      {
        "title": "6. Limitation de Responsabilité",
        "content": "DogFoodPlanner.com et ses contributeurs ne sauraient être tenus responsables des dommages directs ou indirects consécutifs à l’utilisation ou à l’impossibilité d’utiliser les outils mis à disposition."
      }
    ]
  },
  "bestFood": {
    "eyebrow": "GUIDE CLINIQUE // CLASSEMENT ALIMENTATION CANINE 2026",
    "rankingsTitle": "Quels Sont les 5 Meilleurs Aliments pour Chien en 2026 ?",
    "rankingsIntro": "Les recherches sur la longévité canine confirment qu’une cuisson minimale et une hydratation biologique supérieure à 70% sont les deux facteurs les plus déterminants de la vitalité et de la santé rénale.",
    "rankings": [
      {
        "rank": "01",
        "title": "Ration Ménagère Fraîche Cuite à Basse Température",
        "score": "98/100",
        "pros": "Viandes et légumes réels cuits doucement à 70°C. Préserve plus de 70% d’humidité naturelle, les enzymes actives et les vitamines intactes.",
        "cons": "Nécessite une conservation au congélateur ou réfrigérateur. Coût supérieur aux croquettes bas de gamme."
      },
      {
        "rank": "02",
        "title": "Alimentation Crue Ancestrale BARF 80-10-10",
        "score": "95/100",
        "pros": "Équilibre biologique adapté aux carnivores : 80% muscle, 10% os charnu, 10% abats. Prévient le tartre et développe une masse musculaire sèche.",
        "cons": "Exige une hygiène rigoureuse et un équilibrage précis du calcium."
      },
      {
        "rank": "03",
        "title": "Nourriture Crue Lyophilisée & Déshydratée à l’Air",
        "score": "91/100",
        "pros": "Offre la qualité nutritionnelle du cru avec la facilité de conservation à température ambiante.",
        "cons": "Doit impérativement être réhydratée à l’eau tiède ou au bouillon d’os avant distribution."
      },
      {
        "rank": "04",
        "title": "Croquettes Riches en Protéines Sans Céréales ou Grains Anciens",
        "score": "78/100",
        "pros": "Pratiques, longue conservation et accessibles pour les foyers ayant de grands chiens.",
        "cons": "Extrudées à 200°C, seulement 8 à 10% d’humidité et 40 à 50% de glucides complexes."
      },
      {
        "rank": "05",
        "title": "Aliments Thérapeutiques Vétérinaires Spécialisés",
        "score": "72/100",
        "pros": "Formulés pour les pathologies avérées (insuffisance rénale chronique, calculs de struvite, troubles hépatiques).",
        "cons": "Composés fréquemment de sous-produits végétaux et nécessitent une ordonnance."
      }
    ],
    "buyerGuideTitle": "4 Règles d’Or pour Choisir le Meilleur Aliment",
    "buyerRules": [
      {
        "title": "1. Protéine Animale Nommée en Premier Ingrédient",
        "desc": "Exigez « Dinde désossée », « Bœuf » ou « Saumon frais » plutôt que de vagues « farines de viandes »."
      },
      {
        "title": "2. Humidité Biologique Élevée (>70%)",
        "desc": "Les croquettes sèches provoquent une déshydratation chronique. Réhydratez toujours ou ajoutez des garnitures fraîches."
      },
      {
        "title": "3. Zéro Conservateur Chimique Synthétique",
        "desc": "Bannissez fermement le BHA, le BHT, l’éthoxyquine et les colorants artificiels."
      },
      {
        "title": "4. Teneur en Glucides Réduite (<25%)",
        "desc": "Le chien ne possède pas d’amylase salivaire. Trop d’amidon fatigue le pancréas et favorise l’obésité."
      }
    ],
    "ctaTitle": "Calculez la Ration Exacte pour Votre Chien",
    "ctaDesc": "Que vous choisissiez la ration fraîche, le BARF ou des croquettes premium, obtenez les grammes et calories précis au quotidien.",
    "ctaBtn": "Calculer les Portions Maintenant →"
  },
  "recipes": {
    "eyebrow": "RECETTES MAISON VÉTÉRINAIRES // NORMES NRC & AAFCO",
    "heroTitle": "Recettes Vétérinaires de Repas Maison pour Chien",
    "heroSubtitle": "Des guides détaillés pour préparer à la maison des rations ménagères cuites à basse température et des menus BARF 80-10-10 complets et équilibrés.",
    "calciumWarningTitle": "La Règle Absolue du Fait-Maison : L’Équilibre en Calcium",
    "calciumWarningDesc": "La viande musculaire est naturellement riche en phosphore et très pauvre en calcium (ratio 1:20). Nourrir un chien exclusivement de viande et de riz sans complément calcique provoque une décalcification osseuse sévère en quelques mois. Ajoutez toujours 1/2 cuillère à café rase de poudre de coquille d’œuf pure (environ 900 mg de calcium élémentaire) pour 450 g de viande désossée afin de respecter le ratio optimal Calcium/Phosphore de 1.2:1.",
    "recipesList": [
      {
        "tag": "CUISSON DOUCE",
        "title": "Recette 1 : Dinde à Basse Température & Purée de Courge (Digestion Sensible)",
        "desc": "Idéale pour les chiens à l’estomac délicat, ayant des selles molles ou allergiques au poulet industriel.",
        "ingredients": [
          "Haché de dinde maigre — 65% (env. 900 g)",
          "Cœurs de dinde ou de bœuf (Taurine naturelle) — 10% (env. 140 g)",
          "Purée de courge ou potiron pure (Fibres solubles) — 10% (env. 140 g)",
          "Épinards et courgettes vapeur mixés — 10% (env. 140 g)",
          "Huile de saumon sauvage d’Alaska (EPA/DHA) — 2% (1.5 c. à soupe)",
          "Poudre de coquille d’œuf (Calcium élémentaire) — 3% (1 c. à café rase)"
        ],
        "prep": "Faites revenir la dinde et les cœurs à feu doux jusqu’à cuisson complète mais tendre (70°C). Cuisez les légumes à la vapeur et mixez avec la courge. Mélangez l’ensemble et laissez refroidir totalement avant d’incorporer l’huile de saumon et le calcium. Congelez en portions journalières."
      },
      {
        "tag": "BARF CRU",
        "title": "Recette 2 : Menu BARF Ancestral 80-10-10 Bœuf & Canard",
        "desc": "Régime cru biologiquement adapté pour chiens adultes sains dotés d’un suc gastrique acide performant.",
        "ingredients": [
          "Viande musculaire de bœuf de pâturage — 70%",
          "Cœur de bœuf (Riche en L-Carnitine et CoQ10) — 10%",
          "Cou de canard cru ou carcasse — 10% (Os charnu comestible et calcium)",
          "Foie de bœuf (Vitamines A et groupe B) — 5%",
          "Rein ou rate de bœuf (Organe sécréteur essentiel) — 5%"
        ],
        "prep": "Coupez la viande et le cœur en morceaux adaptés. Pesez rigoureusement les abats sur balance électronique. Congelez impérativement les rations au moins 3 semaines à -20°C avant décongélation et distribution."
      },
      {
        "tag": "TOPPER SUPERFOOD",
        "title": "Recette 3 : Topper Antioxydant 80/20 pour Enrichir les Croquettes",
        "desc": "Booster d’aliments frais conçu pour remplacer 20% des calories des croquettes habituelles.",
        "ingredients": [
          "Œufs fermiers pochés mollets — 40%",
          "Pousses de brocolis vapeur et myrtilles sauvages — 30%",
          "Bouillon d’os de bœuf mijoté — 20%",
          "Graines de chanvre bio et poudre de kelp — 10%"
        ],
        "prep": "Pochez légèrement les œufs 4 minutes. Cuisez les légumes à la vapeur 3 minutes. Mixez avec le bouillon tiède et les myrtilles. Versez 2 à 4 cuillères à soupe quotidiennes sur la gamelle de croquettes."
      }
    ],
    "calciumGuideTitle": "Sources Sécurisées de Calcium pour Repas Maison",
    "calciumGuideItems": [
      {
        "title": "Poudre de Coquille d’Œuf",
        "ratio": "1/2 c. à café pour 450 g de viande sans os",
        "desc": "95% de carbonate de calcium pur. Facile à réaliser en lavant, séchant au four et broyant des coquilles d’œufs."
      },
      {
        "title": "Os Charnus Crus Comestibles",
        "ratio": "10% du poids total de la ration",
        "desc": "Cous de canard ou ailes de poulet crues. Ne jamais cuire les os, qui deviennent cassants et perforants."
      },
      {
        "title": "Poudre d’Os Vétérinaire (Bone Meal)",
        "ratio": "Selon indications du fabricant",
        "desc": "Hydroxyapatite microcristalline apportant calcium et phosphore selon un ratio naturel et équilibré de 2:1."
      }
    ]
  },
  "toxic": {
    "eyebrow": "ALIMENTS TOXIQUES POUR CHIENS // RISQUES ET PROTOCOLES",
    "dangerTitle": "Les Aliments Domestiques les Plus Dangereux pour le Chien",
    "dangerIntro": "Plusieurs aliments du quotidien contiennent des molécules que le métabolisme canin ne peut éliminer, provoquant une défaillance organique fatale.",
    "dangerList": [
      {
        "name": "Chocolat & Cacao",
        "toxin": "Théobromine et Caféine",
        "symptoms": "Vomissements, halètement intense, tachycardie, tremblements musculaires, convulsions, arrêt cardiaque.",
        "risk": "TRÈS ÉLEVÉ À MORTEL"
      },
      {
        "name": "Raisins Frais, Secs et de Corinthe",
        "toxin": "Acide Tartrique",
        "symptoms": "Léthargie, déshydratation, insuffisance rénale aiguë irréversible en 24 à 72 heures.",
        "risk": "EXTRÊMEMENT LÉTAL"
      },
      {
        "name": "Xylitol (Sucre de Bouleau / E967)",
        "toxin": "Édulcorant Synthétique",
        "symptoms": "Sécrétion massive d’insuline, hypoglycémie foudroyante, ataxie, nécrose hépatique aiguë en quelques heures.",
        "risk": "URGENCE VITALE ABSOLUE"
      },
      {
        "name": "Oignons, Ail, Poireaux & Échalotes",
        "toxin": "Disulfure de N-propyle",
        "symptoms": "Destruction des globules rouges, anémie hémolytique, gencives pâles, urines brunâtres, faiblesse.",
        "risk": "TOXICITÉ CUMULATIVE FORTE"
      },
      {
        "name": "Noix de Macadamia",
        "toxin": "Molécule neurotoxique inconnue",
        "symptoms": "Faiblesse du train arrière, fièvre ou hypothermie, vomissements, raideur musculaire douloureuse.",
        "risk": "MODÉRÉ À SÉVÈRE"
      },
      {
        "name": "Os Cuits de Toute Origine",
        "toxin": "Danger Physique d’Esquilles",
        "symptoms": "Perforation de l’estomac ou de l’intestin, hémorragie interne, péritonite, occlusion chirurgicale.",
        "risk": "URGENCE CHIRURGICALE"
      }
    ],
    "emergencyTitle": "Que Faire en Cas d’Intoxication Alimentaire ?",
    "emergencySteps": [
      "1. Agissez Immédiatement : Notez précisément l’aliment ingéré, son emballage, la quantité approximative et l’heure.",
      "2. Ne Faites PAS Vomir sans Avis Vétérinaire : Les produits corrosifs ou les os cassants brûlent et lacèrent l’œsophage lors du reflux.",
      "3. Appelez d’Urgence un Vétérinaire : Contactez immédiatement votre clinique de garde ou le centre antipoison vétérinaire (CNITV / CAPAE)."
    ],
    "safeTitle": "Fruits et Légumes 100% Sains et Bénéfiques",
    "safeIntro": "Ces végétaux apportent des antioxydants naturels, des fibres prébiotiques et des vitamines indispensables à la gamelle de votre chien :",
    "safeFoods": [
      {
        "name": "Myrtilles",
        "benefit": "Concentrées en anthocyanes et polyphénols protecteurs des cellules."
      },
      {
        "name": "Purée de Courge / Potiron",
        "benefit": "Fibres solubles régulant le transit aussi bien en cas de diarrhée que de constipation."
      },
      {
        "name": "Carottes",
        "benefit": "Friandise croquante hypocalorique riche en bêta-carotène favorisant l’hygiène dentaire."
      },
      {
        "name": "Haricots Verts",
        "benefit": "Légume vert rassasiant idéal pour la gestion du poids des chiens en surpoids."
      },
      {
        "name": "Pommes (Sans Pépins)",
        "benefit": "Source naturelle de vitamine C et de pectine bénéfique pour la flore intestinale."
      }
    ]
  },
  "brands": {
    "eyebrow": "AVIS MARQUES DE CROQUETTES & HISTORIQUE DES RAPPELS",
    "heroTitle": "Avis sur les Marques d’Aliments pour Chien et Rappels Sanitaires",
    "heroSubtitle": "Analyses objectives et avis vétérinaires sur la qualité des ingrédients, le respect des étiquettes et les historiques de retraits de lots.",
    "brandsList": [
      {
        "name": "Blue Buffalo",
        "grade": "Note : B+",
        "pros": "Viande désossée en premier ingrédient ; sans maïs, blé ni soja ; bouchées LifeSource Bits riches en vitamines.",
        "cons": "Taux élevé de glucides (45-50%) ; rappels par le passé pour humidité excessive et excès de vitamine D.",
        "verdict": "Croquettes de niveau supérieur à la moyenne. Nous recommandons d’ajouter 20% d’aliments frais pour l’hydratation."
      },
      {
        "name": "Rachael Ray Nutrish",
        "grade": "Note : C+ / B-",
        "pros": "Abordable et facile à trouver ; les gammes Peak et Dish intègrent davantage de viande véritable.",
        "cons": "Les formules d’entrée de gamme abusent de protéines de pois et de gluten de maïs ; citée dans une enquête de la FDA.",
        "verdict": "Option économique acceptable dans ses gammes supérieures, en inspectant bien l’absence de légumineuses scindées."
      },
      {
        "name": "Pure Balance",
        "grade": "Note : B (Meilleur Rapport Qualité/Prix)",
        "pros": "Très bon rapport qualité-prix ; recettes riches en viande sans colorants artificiels ni céréales bas de gamme.",
        "cons": "Fabrication sous-traitée ; taux de glucides modéré.",
        "verdict": "L’une des options les plus honnêtes dans les rayons de supermarché."
      },
      {
        "name": "Ollie Fresh Dog Food",
        "grade": "Note : A (Excellence)",
        "pros": "Ingrédients 100% de qualité humaine ; cuisson douce sous vide ; portions pré-calculées sur mesure.",
        "cons": "Abonnement onéreux (180€-350€/mois) ; nécessite de l’espace au congélateur.",
        "verdict": "La référence absolue pour la santé métabolique, l’éclat du pelage et la longévité digestive."
      },
      {
        "name": "Open Farm",
        "grade": "Note : A-",
        "pros": "Transparence totale des approvisionnements ; viandes certifiées bien-être animal et poissons sauvages durables.",
        "cons": "Prix haut de gamme ; distribution limitée en magasins physiques.",
        "verdict": "Le meilleur choix pour une éthique irréprochable et l’absence totale de sous-produits de volaille."
      }
    ],
    "recallsTitle": "Comprendre les Rappels de Lots (Recalls)",
    "recallsDesc": "Les alertes sanitaires vétérinaires se divisent en trois classes : Classe I (danger grave ou mortel, ex. Salmonelle, aflatoxines ou surdosage en Vitamine D), Classe II (troubles passagers) et Classe III (défaut d’étiquetage). Vérifiez toujours le numéro de lot inscrit sur le sac.",
    "methodTitle": "Nos 4 Critères d’Évaluation des Aliments",
    "methodPillars": [
      {
        "title": "1. Clarté des Protéines",
        "desc": "Viandes musculaires identifiées plutôt que farines animales anonymes."
      },
      {
        "title": "2. Taux de Glucides",
        "desc": "Maintenir les amidons sous 40% pour lutter contre l’obésité et le diabète."
      },
      {
        "title": "3. Traçabilité des Filières",
        "desc": "Élevages respectueux et absence d’OGM."
      },
      {
        "title": "4. Rigueur Sanitaire",
        "desc": "Contrôles microbiologiques en laboratoire indépendant et usines certifiées."
      }
    ]
  },
  "allergies": {
    "eyebrow": "DERMATOLOGIE CLINIQUE // ALLERGIES ALIMENTAIRES ET DIGESTION",
    "heroTitle": "Meilleure Alimentation pour Chien Allergique et Estomac Sensible",
    "heroSubtitle": "Guide dermatologique vétérinaire sur les intolérances, le choix des protéines nouvelles et le protocole d’éviction de 8 semaines.",
    "allergensTitle": "Les 5 Allergènes Alimentaires les Plus Courants chez le Chien",
    "allergensIntro": "Les allergies alimentaires canines sont des réactions immunitaires d’hypersensibilité à des protéines spécifiques. Par ordre de prévalence clinique :",
    "allergensList": [
      {
        "name": "1. Poulet Industriel (60% des cas)",
        "desc": "Omniprésent dans les croquettes de grande consommation, le poulet est l’allergène canin numéro un."
      },
      {
        "name": "2. Bœuf Commercial (30% des cas)",
        "desc": "Protéine rouge fréquente provoquant de fortes démangeaisons cutanées et des otites chroniques."
      },
      {
        "name": "3. Produits Laitiers et Fromages",
        "desc": "Les chiens adultes manquent d’enzymes lactases, causant diarrhées et flatulences douloureuses."
      },
      {
        "name": "4. Gluten de Blé et de Maïs",
        "desc": "Protéines végétales pro-inflammatoires fragilisant la muqueuse intestinale."
      },
      {
        "name": "5. Soja et Légumineuses",
        "desc": "Substituts protéiques industriels provoquant une fermentation intestinale anormale et du prurit."
      }
    ],
    "eliminationTitle": "Le Protocole Vétérinaire d’Éviction sur 8 Semaines",
    "eliminationSteps": [
      {
        "step": "Phase 1",
        "title": "Choisir une Seule Protéine Nouvelle",
        "desc": "Passez votre chien à une source de protéine qu’il n’a jamais consommée (Cerf, Lapin ou Kangourou) avec un légume digeste comme la courge."
      },
      {
        "step": "Phase 2",
        "title": "Zéro Contamination (8 Semaines Strictes)",
        "desc": "Durant 8 semaines consécutives, donnez exclusivement cette ration. Interdiction absolue des friandises industrielles et des restes de table."
      },
      {
        "step": "Phase 3",
        "title": "Test de Réintroduction Contrôlé",
        "desc": "Si les démangeaisons ont disparu, réintroduisez un ingrédient suspect pendant 7 jours. Si les rougeurs réapparaissent, l’allergie est confirmée."
      }
    ],
    "novelTitle": "Protéines Nouvelles Recommandées par les Vétérinaires",
    "novelProteins": [
      {
        "name": "Viande de Cerf / Chevreuil",
        "desc": "Viande rouge maigre et très digeste contre laquelle l’organisme canin n’a généralement pas d’anticorps."
      },
      {
        "name": "Viande de Lapin",
        "desc": "Protéine hypoallergénique d’excellence possédant un remarquable profil en acides aminés."
      },
      {
        "name": "Viande de Canard",
        "desc": "Alternative très appétente pour les chiens intolérants au poulet d’élevage."
      },
      {
        "name": "Viande de Kangourou",
        "desc": "L’une des viandes sauvages les plus pures et pauvres en matières grasses."
      }
    ]
  },
  "calculator": {
    "eyebrow": "100% GRATUIT // CALCULATEUR DE PORTIONS VÉTÉRINAIRE",
    "noticeTitle": "Avertissement :",
    "noticeText": "Fourni à titre indicatif et éducatif. Ne remplace pas une consultation ou un diagnostic vétérinaire.",
    "heroTitle": "Calculateur Vétérinaire de Ration et Calories pour Chien",
    "heroSubtitle": "Calculez le besoin énergétique précis de votre chien (RER et MER) et obtenez ses rations exactes en grammes selon son poids, âge, activité et note corporelle."
  },
  "breeds": {
    "eyebrow": "GUIDE NUTRITIONNEL PAR RACE // DIRECTIVES VÉTÉRINAIRES",
    "targetWeight": "Poids Idéal",
    "dailyCalories": "Calories par Jour",
    "freshDaily": "Ration Fraîche / Jour",
    "kibbleDaily": "Croquettes / Jour",
    "cups": "gobelets",
    "reqsTitle": "Besoins Nutritionnels pour le {name}",
    "reqsIntro": "En tant que chien de catégorie {category} avec un poids moyen de {w0} à {w1} lbs (env. {Math.round(w0*0.453)} à {Math.round(w1*0.453)} kg), le {name} exige une balance nutritionnelle spécifique :",
    "predispositionsTitle": "Prédispositions et Sensibilités à Surveiller :",
    "feedingRoutineTitle": "Recommandation de Distribution des Repas :",
    "feedingRoutineDesc": "Nourrissez votre {name} adulte deux fois par jour (50% le matin et 50% le soir). Laissez toujours de l’eau propre à volonté. Si vous donnez des croquettes, réhydratez-les avec un bouillon tiède pour préserver ses reins.",
    "ctaTitle": "Personnaliser la Ration Exacte pour Votre {name}",
    "ctaSubtitle": "Ajustez selon l’âge exact (chiot, adulte, senior), le poids réel, l’activité et la silhouette avec notre calculateur.",
    "ctaBtn": "Calculer pour mon {name} →",
    "faqTitle": "Questions Fréquentes sur l’Alimentation du {name}",
    "faqSubtitle": "Quantités recommandées, fréquence des repas et meilleurs choix d’ingrédients."
  },
  "comparisonTable": {
    "eyebrow": "COMPARAISON CLINIQUE // ALIMENTATION FRAÎCHE VS CROQUETTES",
    "title": "Pourquoi la Vraie Nourriture Dépasse les Croquettes",
    "subtitle": "Analyse comparative de la biodisponibilité, des températures de fabrication et des coûts réels.",
    "scrollHint": "↔ Faites défiler le tableau horizontalement",
    "colMetric": "Critère Nutritionnel",
    "colDfp": "✨ DogFoodPlanner Maison",
    "colSubs": "Abonnements Frais",
    "colKibble": "Croquettes Sèches",
    "rows": [
      {
        "metric": "Mode de Cuisson",
        "dfp": "Vapeur Douce (70°C) ou Cru Actif",
        "subs": "Cuisson Industrielle Surgelée",
        "kibble": "Extrusion Très Haute Température (200°C)"
      },
      {
        "metric": "Glucides Nets",
        "dfp": "< 3.5% (Légumes sélectionnés)",
        "subs": "10% – 15%",
        "kibble": "45% – 60% (Amidons de remplissage)"
      },
      {
        "metric": "Humidité Biologique",
        "dfp": "70% – 75% (Hydratation rénale vitale)",
        "subs": "70% – 75%",
        "kibble": "8% – 10% (Déshydratation chronique)"
      },
      {
        "metric": "Transparence des Doses",
        "dfp": "100% Grammes et pourcentages affichés",
        "subs": "Formule exclusive (grammages cachés)",
        "kibble": "Ingrédients scindés et farines animales"
      },
      {
        "metric": "Coût Moyen Mensuel (Chien 23 kg)",
        "dfp": "75€ – 115€ (Cuisiné à la maison)",
        "subs": "270€ – 370€ / mois",
        "kibble": "55€ – 90€ / mois"
      }
    ]
  },
  "faqPage": {
    "badge": "BASE DE CONNAISSANCES // 40+ RÉPONSES VÉTÉRINAIRES",
    "exploreHubsTitle": "Explorez Nos Guides Vétérinaires Spécialisés",
    "exploreHubsSubtitle": "Des dossiers approfondis pour les maîtres soucieux de la longévité et du bien-être de leur compagnon.",
    "cardBestFood": "Comparatif ration fraîche, BARF, croquettes riches en viande et digestion délicate.",
    "cardCalc": "Calculateur scientifique RER et MER pour obtenir les rations au gramme près.",
    "cardRecipes": "Recettes maison équilibrées et formules BARF 80-10-10 avec apport calcique maîtrisé.",
    "cardAllergies": "Choix des protéines hypoallergéniques, régimes d’éviction et microbiote.",
    "cardToxic": "Liste complète des aliments dangereux, fruits et légumes sains et additifs à fuir.",
    "cardBrands": "Avis indépendants sur Blue Buffalo, Nutrish, Pure Balance, Ollie et Open Farm."
  },
  "faqSingle": {
    "reviewedBy": "Vérifié par : Nutritionniste Vétérinaire Canin",
    "updated": "Mis à jour : 2026",
    "directQuickAnswer": "Réponse Directe Résumée",
    "clinicalAnalysis": "Analyse Clinique et Nutritionnelle Détaillée",
    "topics": "Thèmes associés :",
    "ctaBadge": "🐾 Moteur Nutritionnel Canin Gratuit",
    "ctaTitle": "Calculez les Calories et Portions Journalières pour Votre Chien",
    "ctaSubtitle": "Utilisez notre calculateur vétérinaire pour définir les besoins métaboliques (RER/MER) et les grammes de repas frais ou crus.",
    "ctaBtn": "Calculer la Ration Maintenant →",
    "relatedTitle": "Questions Vétérinaires Similaires",
    "readAnswer": "Lire la Réponse Complète →"
  }
},
  de: {
  "about": {
    "missionBadge": "UNSERE MISSION // TIERÄRZTLICHE HUNDEERNÄHRUNG",
    "whyTitle": "Warum DogFoodPlanner gegründet wurde",
    "whyP1": "Seit Jahrzehnten agiert die Heimtierfutter-Industrie als undurchsichtige Blackbox. Herkömmliches Trockenfutter wird bei über 200°C extrem erhitzt und extrudiert, wodurch natürliche Vitamine zerstört, lebenswichtige Omega-Fettsäuren oxidiert und bis zu 60% des Beutels mit billigen Stärkefüllern aufgefüllt werden.",
    "whyP2": "Gleichzeitig verlangen Start-ups für Frischfutter-Abonnements 300€ bis 450€ pro Monat für einfaches Muskelfleisch und Gemüse. DogFoodPlanner schließt diese Lücke. Wir stellen die exakten mathematischen Berechnungsformeln klinischer Tierernährungsberater kostenlos bereit, damit Hundehalter ausgewogene gekochte Mahlzeiten, 80-10-10 BARF-Rationen oder nährstoffreiche Topper kostengünstig zu Hause zubereiten können.",
    "methodTitle": "Unsere Ernährungsmethodik und Standards",
    "pillars": [
      {
        "tag": "01 // NRC-FORMELN",
        "title": "Ruhe-Energiebedarf (RER)",
        "desc": "Berechnet den exakten Erhaltungsbedarf anhand der metabolischen Körpermasse (70 × (kg)^0.75) statt ungenauer Durchschnittswerte nach Gewichtsklassen."
      },
      {
        "tag": "02 // AAFCO- & FEDIAF-RICHTLINIEN",
        "title": "Bioverfügbare Mikronährstoffe",
        "desc": "Jede Ration balanciert das lebenswichtige Kalzium-Phosphor-Verhältnis (1.2:1 bis 1.4:1), EPA/DHA-Fettsäuren und essentielle Taurinwerte."
      },
      {
        "tag": "03 // KEINE PAYWALLS",
        "title": "100% Unabhängig & Kostenfrei",
        "desc": "Wir akzeptieren keine bezahlten Markenkooperationen und verstecken Grammangaben nicht hinter erzwungenen Kreditkarten-Abos."
      }
    ],
    "ctaTitle": "Bereit, den Nährstoffbedarf Ihres Hundes exakt zu berechnen?",
    "ctaDesc": "Nutzen Sie unseren interaktiven Rechner, erkunden Sie unsere Allergie-Ratgeber und lesen Sie unabhängige Futteranalysen.",
    "ctaBtn": "Kostenlosen Futterrechner starten →"
  },
  "contact": {
    "eyebrow": "SUPPORT & KONTAKT // DIREKTE ANFRAGEN",
    "cards": [
      {
        "icon": "📧",
        "title": "Allgemeine Anfragen",
        "desc": "Fragen und Feedback:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🐾",
        "title": "Ernährungsberatung",
        "desc": "Fragen zu NRC-Formeln und Rezepten:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🛡️",
        "title": "Technischer Support",
        "desc": "Fehlerberichte und Anregungen:",
        "email": "hello@dogfoodplanner.com"
      }
    ],
    "formTitle": "Nachricht an unser tierärztliches Ernährungsteam senden",
    "formDesc": "Haben Sie Fragen zu unseren Kalorienberechnungen oder benötigen Sie Unterstützung bei einer BARF-Ration? Wir antworten innerhalb von 24 Geschäftsstunden.",
    "nameLabel": "Ihr Name",
    "namePlaceholder": "z. B. Michael Schmidt",
    "emailLabel": "Ihre E-Mail-Adresse",
    "emailPlaceholder": "michael@example.de",
    "subjectLabel": "Thema der Anfrage",
    "subjectOptions": [
      "Allgemeine Frage / Feedback",
      "Ernährung & Rezeptberatung",
      "Frage zum Futterrechner",
      "Technischer Fehlerbericht"
    ],
    "messageLabel": "Ihre Nachricht",
    "messagePlaceholder": "Beschreiben Sie Ihren Hund (Rasse, Gewicht, Alter) und Ihr Anliegen...",
    "submitBtn": "Nachricht absenden →",
    "notice": "Tierärztlicher Notfall-Hinweis: Bei akuten Vergiftungssymptomen oder schwerer Atemnot wenden Sie sich bitte sofort an Ihre örtliche Tiernotklinik.",
    "faqTitle": "Suchen Sie schnelle Antworten?",
    "faqDesc": "Besuchen Sie unsere Wissensdatenbank mit über 40 tierärztlichen Antworten zu Futtermäkeligkeit, BARF, Katzenfutter und Trockenfutter-Marken.",
    "faqBtn": "Alle FAQs ansehen →"
  },
  "privacy": {
    "eyebrow": "RECHTLICHES // DATENSCHUTZERKLÄRUNG",
    "lastUpdated": "Stand: Januar 2026",
    "intro": "Auf DogFoodPlanner.com nehmen wir den Schutz Ihrer Daten sehr ernst. Diese Erklärung erläutert, wie wir Daten erheben und schützen.",
    "sections": [
      {
        "title": "1. Daten, die wir nicht erfassen",
        "content": "Die Gesundheitsdaten Ihres Hundes gehören Ihnen. Für die Nutzung unseres Futterrechners ist keine Registrierung, kein Passwort und keine Zahlungsangabe erforderlich. Eingegebene Rassedaten, Gewichte und Fütterungsstile werden ausschließlich lokal in Ihrem Browser verarbeitet und nicht auf externen Servern gespeichert."
      },
      {
        "title": "2. Anonyme technische Serverdaten",
        "content": "Wie fast alle Webseiten erfassen unsere CDN-Server standardmäßige anonymisierte Verbindungsdaten (anonymisierte IP-Adresse, Browsertyp, Referrer-URL, Zeitstempel), um die Sicherheit zu gewährleisten und Cyberangriffe abzuwehren."
      },
      {
        "title": "3. Cookies und lokaler Speicher (localStorage)",
        "content": "Wir nutzen den lokalen Browser-Speicher (localStorage) ausschließlich zur Speicherung Ihrer bevorzugten Sprache und Ihres aktiven Futterplans, damit Sie Ihre Berechnungen beim Neuladen nicht verlieren."
      },
      {
        "title": "4. Externe wissenschaftliche Quellen",
        "content": "Unsere Website verlinkt auf peer-reviewte wissenschaftliche Studien, AAFCO/FEDIAF-Richtlinien und NRC-Datenbanken. Für den Datenschutz externer Seiten übernehmen wir keine Haftung."
      },
      {
        "title": "5. Schutz von Minderjährigen",
        "content": "Unsere Inhalte und Werkzeuge richten sich an volljährige Hundehalter. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren."
      },
      {
        "title": "6. Änderungen und Kontakt",
        "content": "Diese Datenschutzerklärung kann gelegentlich aktualisiert werden. Bei Fragen erreichen Sie uns unter privacy@dogfoodplanner.com."
      }
    ]
  },
  "terms": {
    "eyebrow": "RECHTLICHES // ALLGEMEINE GESCHÄFTSBEDINGUNGEN",
    "lastUpdated": "Stand: Januar 2026",
    "intro": "Bitte lesen Sie diese Nutzungsbedingungen aufmerksam durch, bevor Sie DogFoodPlanner.com verwenden. Durch die Nutzung erklären Sie sich mit ihnen einverstanden.",
    "sections": [
      {
        "title": "1. Geltungsbereich",
        "content": "Durch den Zugriff auf DogFoodPlanner.com akzeptieren Sie diese Nutzungsbedingungen in vollem Umfang. Wenn Sie diesen Bedingungen nicht zustimmen, sehen Sie bitte von der Nutzung ab."
      },
      {
        "title": "2. Tierärztlicher und medizinischer Haftungsausschluss",
        "content": "Die auf DogFoodPlanner.com bereitgestellten Inhalte, Rechner und Rezeptvorschläge dienen ausschließlich allgemeinen Bildungs- und Informationszwecken nach NRC-Modellen. Sie stellen KEINE tierärztliche Beratung, Diagnose oder Behandlung dar. Konsultieren Sie vor wesentlichen Futterumstellungen stets einen Tierarzt oder Fachtierarzt für Tierernährung (DACVN), insbesondere bei Welpen oder chronisch kranken Hunden."
      },
      {
        "title": "3. Nutzung des Futterrechners",
        "content": "Alle berechneten Kalorienwerte (RER und MER) und Grammmengen sind mathematische Richtwerte. Der reale Stoffwechsel hängt von Kastration, Haltungstemperatur und Genetik ab. Hundehalter sind verpflichtet, die Körperkondition (BCS) regelmäßig zu überprüfen und Portionen anzupassen."
      },
      {
        "title": "4. Sicherheit bei BARF & Kalziumausgleich",
        "content": "Die Zubereitung von BARF oder Kochfutter erfordert die lückenlose Zufuhr aller Mikronährstoffe. Die ausschließliche Fütterung von reinem Muskelfleisch ohne Kalziumzusatz führt unweigerlich zu schweren Knochenentkalkungen. Der Nutzer trägt die alleinige Verantwortung für eine ausgewogene Rationsgestaltung."
      },
      {
        "title": "5. Urheberrecht und geistiges Eigentum",
        "content": "Sämtliche Algorithmen, Interface-Designs, Rechner-Logiken und Fachartikel auf DogFoodPlanner.com sind urheberrechtlich geschützt und Eigentum von DogFoodPlanner."
      },
      {
        "title": "6. Haftungsbeschränkung",
        "content": "DogFoodPlanner.com und die beteiligten Autoren haften nicht für direkte oder indirekte Schäden, die aus der Nutzung der zur Verfügung gestellten Informationen resultieren."
      }
    ]
  },
  "bestFood": {
    "eyebrow": "LEITFADEN // DIE BESTEN HUNDEFUTTER 2026",
    "rankingsTitle": "Welche sind die 5 gesündesten Hundefutter im Jahr 2026?",
    "rankingsIntro": "Aktuelle veterinärmedizinische Studien belegen: Minimale Hitzebehandlung und ein biologischer Feuchtigkeitsgehalt von über 70% sind die wichtigsten Faktoren für Vitalität und gesunde Nieren.",
    "rankings": [
      {
        "rank": "01",
        "title": "Schonend dampfgegartes Frischfutter in Lebensmittelqualität",
        "score": "98/100",
        "pros": "Echtes Muskelfleisch und Gemüse bei milden 70°C gegart. Erhält über 70% natürliche Feuchtigkeit, aktive Enzyme und hitzeempfindliche Vitamine.",
        "cons": "Muss gekühlt oder tiefgefroren gelagert werden. Höhere Kosten als billiges Supermarktfutter."
      },
      {
        "rank": "02",
        "title": "Artgerechte 80-10-10 BARF Rohfütterung",
        "score": "95/100",
        "pros": "Natürliches Beutetier-Prinzip: 80% Fleisch, 10% fleischige Knochen, 10% Innereien. Perfekt für Zahnhygiene und kräftige Muskulatur.",
        "cons": "Erfordert strikte Hygiene bei der Fleischverarbeitung und präzisen Kalziumausgleich."
      },
      {
        "rank": "03",
        "title": "Luftgetrocknetes & Gefriergetrocknetes Rohfutter",
        "score": "91/100",
        "pros": "Kombiniert die Nährstoffdichte von Rohfleisch mit der Bequemlichkeit normaler Trockenlagerung.",
        "cons": "Sollte vor dem Füttern unbedingt mit lauwarmem Wasser oder Knochenbrühe eingeweicht werden."
      },
      {
        "rank": "04",
        "title": "Proteinreiches Trockenfutter ohne Getreide oder mit Urgetreide",
        "score": "78/100",
        "pros": "Lange haltbar, unkompliziert und budgetfreundlich bei großen Hunderassen.",
        "cons": "Extrusion bei 200°C, nur 8–10% Restfeuchte und 40–50% verarbeitete Stärkekohlenhydrate."
      },
      {
        "rank": "05",
        "title": "Veterinärmedizinische Spezial-Diäten",
        "score": "72/100",
        "pros": "Speziell formuliert für Niereninsuffizienz, Lebererkrankungen oder Struvitsteine.",
        "cons": "Enthält oft minderwertige Getreidenebenprodukte; rezeptpflichtig."
      }
    ],
    "buyerGuideTitle": "4 goldene Regeln für die Futterauswahl",
    "buyerRules": [
      {
        "title": "1. Eindeutig deklariertes Fleisch an 1. Stelle",
        "desc": "Achten Sie auf „Frische Pute“, „Rindfleisch“ oder „Lachs“ statt diffuser „Fleischmehle“."
      },
      {
        "title": "2. Hohe biologische Feuchtigkeit (>70%)",
        "desc": "Reines Trockenfutter führt zu schleichender Dehydration. Immer mit Brühe anfeuchten oder frische Topper ergänzen."
      },
      {
        "title": "3. Verzicht auf synthetische Konservierungsstoffe",
        "desc": "Meiden Sie BHA, BHT, Ethoxyquin, Propylenglykol und künstliche Farbstoffe."
      },
      {
        "title": "4. Geringer Kohlenhydratanteil (<25%)",
        "desc": "Hunde besitzen keine Speichelamylase. Hohe Stärkemengen überlasten die Bauchspeicheldrüse."
      }
    ],
    "ctaTitle": "Berechnen Sie die exakte Futtermenge für Ihren Hund",
    "ctaDesc": "Ob gekochtes Frischfutter, Rohfütterung oder Trockenfutter: Ermitteln Sie die grammgenaue Tagesportion und Kalorien.",
    "ctaBtn": "Tagesportion jetzt berechnen →"
  },
  "recipes": {
    "eyebrow": "TIERÄRZTLICHE REZEPTE // NRC & AAFCO RICHTLINIEN",
    "heroTitle": "Tierärztliche Rezepte für selbstgemachtes Hundefutter",
    "heroSubtitle": "Schritt-für-Schritt-Anleitungen zur Zubereitung ausgewogener, schonend gegarter Mahlzeiten und artgerechter 80-10-10 BARF-Rationen.",
    "calciumWarningTitle": "Die oberste Regel beim Selberkochen: Der Kalziumausgleich",
    "calciumWarningDesc": "Reines Muskelfleisch enthält von Natur aus extrem viel Phosphor und fast kein Kalzium (Verhältnis 1:20). Werden Hunde nur mit Fleisch und Reis gefüttert, führt dies innerhalb weniger Monate zu schweren Skeletterkrankungen. Fügen Sie pro 500 g reinem Fleisch ohne Knochen stets 1/2 gestrichenen Teelöffel reines Eierschalenpulver (ca. 900 mg elementares Kalzium) hinzu, um das lebensnotwendige Kalzium-Phosphor-Verhältnis von 1.2:1 zu sichern.",
    "recipesList": [
      {
        "tag": "SCHONEND GEKOCHT",
        "title": "Rezept 1: Milde Pute & Kürbis-Püree (Ideal bei sensiblem Magen)",
        "desc": "Optimal für Hunde mit empfindlicher Verdauung, Neigung zu Durchfall oder Huhn-Unverträglichkeit.",
        "ingredients": [
          "Mageres Putenhackfleisch — 65% (ca. 900 g)",
          "Puten- oder Rinderherzen (Natürliche Taurinquelle) — 10% (ca. 140 g)",
          "Reines Kürbispüree ohne Zusätze (Lösliche Ballaststoffe) — 10% (ca. 140 g)",
          "Gedünsteter Babyspinat & Zucchini — 10% (ca. 140 g)",
          "Wildlachsöl aus Alaska (EPA/DHA) — 2% (1.5 EL)",
          "Feines Eierschalenpulver (Kalzium) — 3% (1 gestrichener TL)"
        ],
        "prep": "Putenhack und Herzen bei mäßiger Hitze schonend anbraten (Kerntemperatur ca. 70°C). Gemüse dämpfen und mit Kürbis pürieren. Alles vermengen und vollständig abkühlen lassen. Erst danach Lachsöl und Eierschalenpulver unterrühren. Portionsweise einfrieren."
      },
      {
        "tag": "BARF ROH",
        "title": "Rezept 2: Ursprüngliches 80-10-10 BARF-Menü Rind & Ente",
        "desc": "Biologisch artgerechte Rohfütterung für gesunde ausgewachsene Hunde mit starker Magensäure.",
        "ingredients": [
          "Mageres Rindfleisch aus Weidehaltung — 70%",
          "Rinderherz (Reich an L-Carnitin und CoQ10) — 10%",
          "Rohe fleischige Entenhälse — 10% (Verdaulicher Knochen & Kalzium)",
          "Rinderleber (Vitamin A & B-Komplex) — 5%",
          "Rinderniere oder Milz (Sekretierende Innerei) — 5%"
        ],
        "prep": "Muskelfleisch und Herz in maulgerechte Stücke schneiden. Innereien grammgenau auf der Küchenwaage abwiegen. Alle Fleischkomponenten vor der Fütterung mindestens 3 Wochen bei -20°C tiefkühlen."
      },
      {
        "tag": "SUPERFOOD-TOPPER",
        "title": "Rezept 3: 80/20 Antioxidantien-Topper für Trockenfutter",
        "desc": "Frischekick, der 20% der täglichen Trockenfutter-Kalorien durch vitalstoffreiche Zutaten ersetzt.",
        "ingredients": [
          "Leicht pochierte Bio-Eier — 40%",
          "Gedämpfter Brokkoli & wilde Heidelbeeren — 30%",
          "Lange gekochte Rinderknochenbrühe — 20%",
          "Bio-Hanfsamen & Seealgenmehl — 10%"
        ],
        "prep": "Eier wachsweich kochen. Gemüse kurz dünsten. Mit zimmerwarmer Knochenbrühe und Beeren pürieren. Täglich 2–4 Esslöffel über das normale Trockenfutter geben."
      }
    ],
    "calciumGuideTitle": "Sichere Kalziumquellen für selbstgemachtes Futter",
    "calciumGuideItems": [
      {
        "title": "Feines Eierschalenpulver",
        "ratio": "1/2 TL pro 500 g Fleisch ohne Knochen",
        "desc": "95% reines Kalziumkarbonat. Leicht selbst herzustellen durch Auskochen, Trocknen und feines Mahlen von Eierschalen."
      },
      {
        "title": "Rohe fleischige Knochen (RFK)",
        "ratio": "10% des Gesamtgewichts der Futterration",
        "desc": "Entenhälse, Hühnerflügel oder Karkassen. Knochen niemals erhitzen, da sie sonst splittern und lebensgefährlich werden."
      },
      {
        "title": "Futterknochenmehl (Bone Meal)",
        "ratio": "Nach Herstellerangabe dosieren",
        "desc": "Mikrokristallines Hydroxylapatit, das Kalzium und Phosphor im optimalen natürlichen 2:1-Verhältnis liefert."
      }
    ]
  },
  "toxic": {
    "eyebrow": "GIFTIGE LEBENSMITTEL FÜR HUNDE // NOTFALLPROTOKOLL",
    "dangerTitle": "Die gefährlichsten Haushalts-Lebensmittel für Hunde",
    "dangerIntro": "Einige für Menschen harmlose Lebensmittel enthalten Giftstoffe, die der Stoffwechsel des Hundes nicht abbauen kann und die zum Tod führen können.",
    "dangerList": [
      {
        "name": "Schokolade & Kakao",
        "toxin": "Theobromin & Koffein",
        "symptoms": "Erbrechen, Hecheln, Herzrasen, Muskelzittern, Krampfanfälle, Kreislaufversagen.",
        "risk": "HOCH BIS TÖDLICH"
      },
      {
        "name": "Weintrauben, Rosinen & Korinthen",
        "toxin": "Weinsäure",
        "symptoms": "Apathie, Dehydration, akutes irreversibles Nierenversagen innerhalb von 24–72 Stunden.",
        "risk": "EXTREM TÖDLICH"
      },
      {
        "name": "Xylit (Birkenzucker / E967)",
        "toxin": "Synthetischer Zuckeraustauschstoff",
        "symptoms": "Massive Insulinausschüttung, lebensgefährliche Unterzuckerung, Leberversagen binnen Stunden.",
        "risk": "HÖCHSTE NOTFALLSTUFE"
      },
      {
        "name": "Zwiebeln, Knoblauch, Lauch & Schnittlauch",
        "toxin": "N-Propyldisulfid",
        "symptoms": "Zerstörung roter Blutkörperchen, hämolytische Anämie, blasse Schleimhäute, dunkler Urin.",
        "risk": "KUMULATIVE HOHE GIFTIGKEIT"
      },
      {
        "name": "Macadamianüsse",
        "toxin": "Unbekanntes Neurotoxin",
        "symptoms": "Schwäche der Hinterläufe, hohes Fieber, Erbrechen, Muskelsteifheit.",
        "risk": "MÄSSIG BIS SCHWER"
      },
      {
        "name": "Gekochte Knochen aller Tierarten",
        "toxin": "Splittergefahr",
        "symptoms": "Magen-Darm-Perforation, innere Blutungen, Bauchfellentzündung, Darmverschluss.",
        "risk": "NOTOPERATION ERFORDERLICH"
      }
    ],
    "emergencyTitle": "Was tun im Vergiftungs-Notfall?",
    "emergencySteps": [
      "1. Sofort handeln: Bringen Sie in Erfahrung, was, wie viel und wann genau gefressen wurde. Verpackung sichern!",
      "2. Niemals eigenmächtig Erbrechen auslösen: Ätzende Stoffe oder spitze Gegenstände verätzen und zerreißen die Speiseröhre beim Hochwürgen.",
      "3. Sofort Tierklinik anrufen: Kontaktieren Sie umgehend den tierärztlichen Notdienst oder die nächste Tierklinik."
    ],
    "safeTitle": "100% sicheres und gesundes Obst & Gemüse",
    "safeIntro": "Diese pflanzlichen Zutaten liefern wertvolle Antioxidantien, Ballaststoffe und Vitamine für den Napf:",
    "safeFoods": [
      {
        "name": "Heidelbeeren (Blaubeeren)",
        "benefit": "Reich an Anthocyanen und Antioxidantien zum Zellschutz."
      },
      {
        "name": "Gekochter Kürbis",
        "benefit": "Reich an löslichen Ballaststoffen, hilft sowohl bei Durchfall als auch Verstopfung."
      },
      {
        "name": "Karotten (Möhren)",
        "benefit": "Kalorienarmer Knabberspaß mit viel Beta-Carotin, fördert die Zahnpflege."
      },
      {
        "name": "Grüne Bohnen (gekocht)",
        "benefit": "Ausgezeichnetes kalorienarmes Sättigungsgemüse für übergewichtige Hunde."
      },
      {
        "name": "Äpfel (ohne Kerne)",
        "benefit": "Natürliche Quelle für Vitamin C und darmfreundliches Pektin."
      }
    ]
  },
  "brands": {
    "eyebrow": "HUNDEFUTTER-MARKEN IM TEST & RÜCKRUF-HISTORIE",
    "heroTitle": "Hundefutter-Marken im Test & Rückruf-Historie",
    "heroSubtitle": "Unabhängige, tierärztlich fundierte Analysen von Inhaltsstoffen, Deklarationen und behördlichen Rückrufen für maximale Futtersicherheit.",
    "brandsList": [
      {
        "name": "Blue Buffalo",
        "grade": "Note: B+",
        "pros": "Echtes Fleisch an 1. Stelle; ohne Weizen, Mais oder Soja; nährstoffschonende LifeSource Bits.",
        "cons": "Hoher Kohlenhydratgehalt (45–50%); historische FDA-Rückrufe wegen Feuchtigkeit/Schimmel und Vitamin D.",
        "verdict": "Überdurchschnittliches Trockenfutter. Wir empfehlen die Ergänzung mit 20% Frischfutter zur Nierenentlastung."
      },
      {
        "name": "Rachael Ray Nutrish",
        "grade": "Note: C+ / B-",
        "pros": "Günstig und weit verbreitet; Peak- und Dish-Reihen mit erhöhtem Fleischanteil.",
        "cons": "Basislinien setzen stark auf Erbsenprotein und Maiskleber; war Teil von FDA-Untersuchungen.",
        "verdict": "In den Premiumlinien akzeptabel, Deklaration jedoch genau auf gesplittete Hülsenfrüchte prüfen."
      },
      {
        "name": "Pure Balance",
        "grade": "Note: B (Guter Spartipp)",
        "pros": "Sehr gutes Preis-Leistungs-Verhältnis; fleischbasierte Rezepturen ohne künstliche Farbstoffe.",
        "cons": "Auftragsfertigung durch Lohnhersteller; moderater Kohlenhydratanteil.",
        "verdict": "Eines der ehrlichsten und fairsten Futter im Supermarkt-Preissegment."
      },
      {
        "name": "Ollie Frischfutter",
        "grade": "Note: A (Hervorragend)",
        "pros": "100% Lebensmittelqualität; sanft gegart; grammgenau portionsverpackt.",
        "cons": "Hohe monatliche Abokosten (180€–350€/Monat); benötigt Platz im Tiefkühler.",
        "verdict": "Goldstandard für Stoffwechselgesundheit, glänzendes Fell und lange Darmgesundheit."
      },
      {
        "name": "Open Farm",
        "grade": "Note: A-",
        "pros": "Vollständige Transparenz der Tierhaltung; artgerechte Herkunftszertifikate und Wildfang-Fisch.",
        "cons": "Gehobenes Preissegment; selten im stationären Fachhandel.",
        "verdict": "Erstklassige Wahl für Halter, die auf Tierwohl und Null Geflügelnebenprodukte Wert legen."
      }
    ],
    "recallsTitle": "Futter-Rückrufe richtig verstehen",
    "recallsDesc": "Behördliche Produktrückrufe werden in drei Klassen unterteilt: Klasse I (ernste Gesundheitsgefahr oder Lebensgefahr, z. B. Salmonellen oder Vitamin-D-Überdosierung), Klasse II (vorübergehende Beschwerden) und Klasse III (formale Kennzeichnungsmängel). Kontrollieren Sie regelmäßig Chargennummern.",
    "methodTitle": "Unsere 4 Bewertungs-Säulen",
    "methodPillars": [
      {
        "title": "1. Klare Proteinquelle",
        "desc": "Ganzes Muskelfleisch statt anonymer Tiermehle."
      },
      {
        "title": "2. Moderater Kohlenhydratanteil",
        "desc": "Stärkeanteile unter 40% zur Vorbeugung von Übergewicht."
      },
      {
        "title": "3. Rückverfolgbare Rohstoffe",
        "desc": "Zertifizierte Höfe und gentechnikfreie Zutaten."
      },
      {
        "title": "4. Saubere Qualitätsbilanz",
        "desc": "Ständige Laborkontrollen und einwandfreie Betriebshygiene."
      }
    ]
  },
  "allergies": {
    "eyebrow": "KLINISCHE DERMATOLOGIE // ALLERGIEN & AUSSCHLUSSDIÄT",
    "heroTitle": "Bestes Futter für Hunde mit Allergien & empfindlichem Magen",
    "heroSubtitle": "Dermatologischer Leitfaden zu Futtermittelallergien, Monoprotein-Sorten und der 8-wöchigen Eliminationsdiät.",
    "allergensTitle": "Die 5 häufigsten Futtermittelallergene beim Hund",
    "allergensIntro": "Futtermittelallergien sind immunologische Überreaktionen auf bestimmte Nahrungsproteine. Nach klinischer Häufigkeit geordnet:",
    "allergensList": [
      {
        "name": "1. Masthuhn / Geflügel (ca. 60% der Fälle)",
        "desc": "Aufgrund der massenhaften Verwendung in Fertigfuttern das häufigste Allergen überhaupt."
      },
      {
        "name": "2. Rindfleisch (ca. 30% der Fälle)",
        "desc": "Klassisches rotes Fleisch, das bei sensibilisierten Hunden extremen Juckreiz und Ohrentzündungen auslöst."
      },
      {
        "name": "3. Milchprodukte & Käse",
        "desc": "Erwachsene Hunde verlieren Laktase-Enzyme; Durchfall und Blähungen sind die Folge."
      },
      {
        "name": "4. Weizen- und Maisgluten",
        "desc": "Pflanzliche Proteine, welche die Darmschleimhaut schädigen und Entzündungen begünstigen."
      },
      {
        "name": "5. Soja & Hülsenfrüchte",
        "desc": "Günstige pflanzliche Eiweißquellen, die häufig zu Fehlgärungen und Juckreiz führen."
      }
    ],
    "eliminationTitle": "Die 8-wöchige tierärztliche Ausschlussdiät (Eliminationsdiät)",
    "eliminationSteps": [
      {
        "step": "Phase 1",
        "title": "Eine einzige exotische Proteinquelle wählen",
        "desc": "Stellen Sie auf ein Fleisch um, das der Hund noch nie gefressen hat (z. B. Hirsch, Kaninchen oder Känguru), kombiniert mit einer verträglichen Kohlenhydratquelle (z. B. Kürbis)."
      },
      {
        "step": "Phase 2",
        "title": "Absolute Disziplin (Strikte 8 Wochen)",
        "desc": "8 Wochen lang darf absolut nichts anderes gefüttert werden: Keine Leckerlis, keine Kauknochen, keine Brotkrumen vom Tisch."
      },
      {
        "step": "Phase 3",
        "title": "Gezielte Provokationstestung",
        "desc": "Sind Juckreiz und Verdauungsprobleme verschwunden, wird eine verdächtige Zutat für 7 Tage zugefüttert. Treten Symptome wieder auf, ist die Allergie bewiesen."
      }
    ],
    "novelTitle": "Empfohlene hypoallergene Fleischsorten",
    "novelProteins": [
      {
        "name": "Hirsch- & Rehfleisch (Venison)",
        "desc": "Mageres, nährstoffreiches Wildfleisch mit extrem geringem Allergiepotenzial."
      },
      {
        "name": "Kaninchenfleisch",
        "desc": "Sehr bekömmliches, hypoallergenes Fleisch mit hervorragender Verdaulichkeit."
      },
      {
        "name": "Entenfleisch",
        "desc": "Sehr schmackhafte Alternative für Hunde, die auf normales Hühnerfleisch reagieren."
      },
      {
        "name": "Kängurufleisch",
        "desc": "Eines der reinsten und fettärmsten Wildfleische in der tierärztlichen Dermatologie."
      }
    ]
  },
  "calculator": {
    "eyebrow": "100% KOSTENLOS // TIERÄRZTLICHER FUTTERRECHNER",
    "noticeTitle": "Wichtiger Hinweis:",
    "noticeText": "Dient allgemeinen Bildungs- und Informationszwecken. Kein Ersatz für eine tierärztliche Diagnose.",
    "heroTitle": "Tierärztlicher Futter- und Kalorienrechner für Hunde",
    "heroSubtitle": "Ermitteln Sie den exakten täglichen Energiebedarf (RER & MER) und berechnen Sie grammgenaue Mahlzeiten-Portionen basierend auf Gewicht, Alter, Aktivität und Körperzustand."
  },
  "breeds": {
    "eyebrow": "RASSE-SPEZIFISCHE ERNÄHRUNG // TIERÄRZTLICHE RICHTLINIEN",
    "targetWeight": "Idealgewicht",
    "dailyCalories": "Tageskalorien",
    "freshDaily": "Frischfutter / Tag",
    "kibbleDaily": "Trockenfutter / Tag",
    "cups": "Messbecher",
    "reqsTitle": "Ernährungsanforderungen für den {name}",
    "reqsIntro": "Als Hund der Kategorie {category} mit einem durchschnittlichen Gewicht von {w0} bis {w1} lbs (ca. {Math.round(w0*0.453)} bis {Math.round(w1*0.453)} kg) benötigt der {name} ein abgestimmtes Nährstoffprofil:",
    "predispositionsTitle": "Wichtige Rasse- und Fütterungsmerkmale:",
    "feedingRoutineTitle": "Empfohlene Fütterungsroutine:",
    "feedingRoutineDesc": "Füttern Sie Ihren ausgewachsenen {name} zweimal täglich (50% morgens und 50% abends). Sorgen Sie stets für frisches Wasser. Wenn Sie Trockenfutter füttern, feuchten Sie es mit lauwarmer Knochenbrühe an, um die Nierenfunktion zu unterstützen.",
    "ctaTitle": "Erstellen Sie den exakten Futterplan für Ihren {name}",
    "ctaSubtitle": "Passen Sie Alter (Welpe, Adult, Senior), exaktes Gewicht, Aktivitätslevel und Körperform im kostenlosen Rechner an.",
    "ctaBtn": "Rechner für {name} starten →",
    "faqTitle": "Häufige Fragen zur Ernährung des {name}",
    "faqSubtitle": "Portionsgrößen, Fütterungszeiten und optimale Zutaten."
  },
  "comparisonTable": {
    "eyebrow": "KLINISCHER VERGLEICH // FRISCHFUTTER VS. TROCKENFUTTER",
    "title": "Warum echte Nahrung Trockenfutter überlegen ist",
    "subtitle": "Ein sachlicher Vergleich von biologischer Verwertbarkeit, Verarbeitungstemperaturen und Kosten.",
    "scrollHint": "↔ Tabelle seitlich verschieben",
    "colMetric": "Ernährungskriterium",
    "colDfp": "✨ DogFoodPlanner Frisch",
    "colSubs": "Frische-Abos",
    "colKibble": "Trockenfutter (Kibble)",
    "rows": [
      {
        "metric": "Gar- / Herstellungsverfahren",
        "dfp": "Schongarung (70°C) oder rohe Enzyme",
        "subs": "Schockgefrostetes Fertigmenü",
        "kibble": "Extrusion bei über 200°C Hitze"
      },
      {
        "metric": "Netto-Kohlenhydrate",
        "dfp": "< 3.5% (Nur ausgewähltes Gemüse)",
        "subs": "10% – 15%",
        "kibble": "45% – 60% (Stärkebasierte Füllstoffe)"
      },
      {
        "metric": "Biologische Feuchtigkeit",
        "dfp": "70% – 75% (Lebenswichtige Nierenhydration)",
        "subs": "70% – 75%",
        "kibble": "8% – 10% (Chronische Belastung der Nieren)"
      },
      {
        "metric": "Transparenz der Rezeptur",
        "dfp": "100% offengelegte Grammzahlen & Anteile",
        "subs": "Geschützte Mischung (Gramm verborgen)",
        "kibble": "Gesplittete Zutaten & unklare Tiermehle"
      },
      {
        "metric": "Monatliche Futterkosten (23 kg Hund)",
        "dfp": "75€ – 110€ (Selbst zubereitet)",
        "subs": "260€ – 360€ / Monat",
        "kibble": "50€ – 85€ / Monat"
      }
    ]
  },
  "faqPage": {
    "badge": "WISSENSDATENBANK // ÜBER 40 TIERÄRZTLICHE ANTWORTEN",
    "exploreHubsTitle": "Erkunden Sie unsere spezialisierten Fachthemen",
    "exploreHubsSubtitle": "Fundierte Ratgeber für Hundehalter, die die Gesundheit ihres Tieres aktiv optimieren möchten.",
    "cardBestFood": "Vergleich von Frischfutter, BARF, proteinreichem Trockenfutter und Schonkost.",
    "cardCalc": "Wissenschaftlicher RER- und MER-Kalorienrechner für exakte Grammmengen.",
    "cardRecipes": "Ausgewogene Kochrezepte und 80-10-10 BARF mit perfektem Kalziumausgleich.",
    "cardAllergies": "Auswahl von Monoproteinen, Ausschlussdiäten und Stärkung der Darmflora.",
    "cardToxic": "Vollständige Liste giftiger Lebensmittel, sicheres Obst & Gemüse und schädliche Zusätze.",
    "cardBrands": "Unabhängige Analysen zu Blue Buffalo, Nutrish, Pure Balance, Ollie und Open Farm."
  },
  "faqSingle": {
    "reviewedBy": "Geprüft von: Fachtierarzt für Tierernährung",
    "updated": "Stand: 2026",
    "directQuickAnswer": "Direkte Kurzantwort",
    "clinicalAnalysis": "Ausführliche tierärztliche und klinische Analyse",
    "topics": "Themengebiete:",
    "ctaBadge": "🐾 Kostenloser Ernährungsrechner",
    "ctaTitle": "Berechnen Sie den exakten Tagesbedarf für Ihren Hund",
    "ctaSubtitle": "Nutzen Sie unseren kostenlosen Tierarzt-Rechner zur Bestimmung des Kalorienbedarfs und der exakten Grammmengen.",
    "ctaBtn": "Portionen jetzt berechnen →",
    "relatedTitle": "Verwandte Fragen zur Hundeernährung",
    "readAnswer": "Antwort vollständig lesen →"
  }
},
  pt: {
  "about": {
    "missionBadge": "NOSSA MISSÃO // NUTRIÇÃO CANINA CLÍNICA",
    "whyTitle": "Por Que o DogFoodPlanner Foi Criado",
    "whyP1": "Por décadas, a indústria comercial de alimentos para pets operou como uma caixa preta. A ração seca extrudada a mais de 200°C degrada vitaminas naturais, oxida ácidos graxos ômega essenciais e preenche os sacos com até 60% de amidos de alto índice glicêmico.",
    "whyP2": "Ao mesmo tempo, empresas de alimentação natural cobram mensalidades superiores a R$ 1.500 / 300€ por carnes magras e vegetais simples. O DogFoodPlanner elimina essa barreira. Disponibilizamos gratuitamente os algoritmos matemáticos exatos usados por nutrólogos veterinários para que qualquer tutor prepare em casa dietas cozidas no vapor, BARF crua ou enriquecedores nutritivos a uma fração do custo.",
    "methodTitle": "Nossa Metodologia e Padrões Científicos",
    "pillars": [
      {
        "tag": "01 // FÓRMULAS NRC",
        "title": "Necessidade Energética em Repouso (RER)",
        "desc": "Calcula o gasto basal exato com base na massa corporal exponencial (70 × (kg)^0.75) em vez de faixas genéricas de peso."
      },
      {
        "tag": "02 // DIRETRIZES AAFCO & FEDIAF",
        "title": "Micronutrientes Biodisponíveis",
        "desc": "Toda formulação equilibra a relação cálcio-fósforo (1.2:1 a 1.4:1), ácidos graxos EPA/DHA e níveis fundamentais de taurina."
      },
      {
        "tag": "03 // TOTALMENTE GRATUITO",
        "title": "100% Aberto e Independente",
        "desc": "Não aceitamos parcerias pagas de marcas nem exigimos cadastro de cartão de crédito para visualizar as gramas das receitas."
      }
    ],
    "ctaTitle": "Pronto para Calcular as Necessidades Nutricionais do Seu Cão?",
    "ctaDesc": "Acesse nossa calculadora interativa, explore guias de alergia canina e veja nossas avaliações veterinárias de marcas.",
    "ctaBtn": "Iniciar Calculadora Nutricional Gratuita →"
  },
  "contact": {
    "eyebrow": "SUPORTE E CONTATO // ATENDIMENTO DIRETO",
    "cards": [
      {
        "icon": "📧",
        "title": "Dúvidas Gerais",
        "desc": "Perguntas e sugestões:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🐾",
        "title": "Pesquisa Nutricional",
        "desc": "Dúvidas sobre fórmulas veterinárias:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🛡️",
        "title": "Suporte Técnico",
        "desc": "Erros e sugestões do site:",
        "email": "hello@dogfoodplanner.com"
      }
    ],
    "formTitle": "Envie uma Mensagem à Nossa Equipe de Nutrição Canina",
    "formDesc": "Tem dúvidas sobre as fórmulas calóricas NRC ou precisa de orientação para uma dieta crua? Respondemos em até 24 horas úteis.",
    "nameLabel": "Seu Nome",
    "namePlaceholder": "ex.: Mariana Silva",
    "emailLabel": "Seu E-mail",
    "emailPlaceholder": "mariana@exemplo.com",
    "subjectLabel": "Assunto da Mensagem",
    "subjectOptions": [
      "Dúvida Geral / Feedback",
      "Nutrição Canina e Receitas",
      "Dúvida sobre Fórmulas da Calculadora",
      "Relatório de Erro Técnico"
    ],
    "messageLabel": "Sua Mensagem",
    "messagePlaceholder": "Conte-nos sobre seu cão (raça, peso, idade) e como podemos ajudar...",
    "submitBtn": "Enviar Mensagem →",
    "notice": "Aviso de Emergência Veterinária: Se o seu cão apresentar sintomas agudos de envenenamento ou mal-estar grave, procure imediatamente um hospital veterinário 24 horas.",
    "faqTitle": "Procurando respostas rápidas?",
    "faqDesc": "Acesse nossa base com mais de 40 perguntas veterinárias sobre perda de apetite, dieta BARF, ração de gatos e marcas comerciais.",
    "faqBtn": "Ver Todas as Perguntas Frequentes →"
  },
  "privacy": {
    "eyebrow": "LEGAL // POLÍTICA DE PRIVACIDADE",
    "lastUpdated": "Atualizado em: Janeiro de 2026",
    "intro": "No DogFoodPlanner.com respeitamos a sua privacidade e garantimos a proteção dos seus dados. Esta política explica como as informações são tratadas.",
    "sections": [
      {
        "title": "1. Informações Que Não Coletamos",
        "content": "Os dados de saúde do seu cão pertencem a você. O uso da nossa calculadora não exige cadastro, senhas nem cartão de crédito. Raça, peso e escolhas alimentares são processados localmente no seu próprio navegador e não são armazenados em servidores externos."
      },
      {
        "title": "2. Dados Técnicos Anônimos",
        "content": "Como a maioria das plataformas web modernas, nossos servidores de CDN registram dados técnicos anônimos padrão (endereço IP anonimizado, navegador, página de origem e data/hora) para fins de segurança e proteção contra ataques."
      },
      {
        "title": "3. Cookies e Armazenamento Local (localStorage)",
        "content": "Utilizamos o armazenamento local do navegador (localStorage) apenas para guardar sua preferência de idioma e manter seu plano de refeições ativo no dispositivo, evitando recalcular ao recarregar a página."
      },
      {
        "title": "4. Links Externos e Fontes Científicas",
        "content": "Nosso site faz referência a artigos científicos revisados por pares, diretrizes AAFCO/FEDIAF e bancos de dados do NRC. Não nos responsabilizamos pelas políticas de privacidade de terceiros."
      },
      {
        "title": "5. Privacidade de Menores",
        "content": "Nossos conteúdos e ferramentas destinam-se a adultos responsáveis por animais de estimação. Não coletamos intencionalmente dados de menores de 13 anos."
      },
      {
        "title": "6. Atualizações e Contato",
        "content": "Esta política pode ser atualizada periodicamente. Em caso de dúvidas, entre em contato pelo e-mail privacy@dogfoodplanner.com."
      }
    ]
  },
  "terms": {
    "eyebrow": "LEGAL // TERMOS E CONDIÇÕES DE USO",
    "lastUpdated": "Atualizado em: Janeiro de 2026",
    "intro": "Leia atentamente estes Termos de Serviço antes de utilizar o DogFoodPlanner.com. Ao acessar a plataforma, você concorda com eles.",
    "sections": [
      {
        "title": "1. Aceitação dos Termos",
        "content": "Ao utilizar o DogFoodPlanner.com (o \"Site\"), você declara ter lido, compreendido e aceitado todos os termos aqui previstos. Se discordar de qualquer cláusula, descontinue o uso imediatamente."
      },
      {
        "title": "2. Isenção de Responsabilidade Médica e Veterinária",
        "content": "As informações, calculadoras e receitas disponibilizadas no DogFoodPlanner.com têm caráter estritamente educativo e informativo, baseadas em modelos do NRC e FEDIAF. Elas NÃO constituem parecer veterinário, diagnóstico clínico ou prescrição de tratamento. Consulte sempre um médico veterinário ou nutrólogo de pequenos animais antes de alterar substancialmente a dieta do seu pet."
      },
      {
        "title": "3. Utilização das Calculadoras Interativas",
        "content": "Os cálculos energéticos (RER e MER) e as gramas diárias são pontos de partida matemáticos. O gasto calórico real varia conforme castração, temperatura e genética. O tutor deve monitorar o Escore de Condição Corporal (ECC/BCS) e ajustar a alimentação conforme necessário."
      },
      {
        "title": "4. Segurança em Comida Caseira e Equilíbrio de Cálcio",
        "content": "Oferecer alimentação caseira ou crua exige o balanceamento correto de todos os micronutrientes. Alimentar cães exclusivamente com carnes desossadas e carboidratos sem suplementação de cálcio provoca desmineralização óssea em poucos meses. O usuário assume total responsabilidade pelo preparo das refeições."
      },
      {
        "title": "5. Propriedade Intelectual",
        "content": "Todos os textos, algoritmos, identidades visuais e gráficos do DogFoodPlanner.com são protegidos por direitos autorais e pertencem exclusivamente ao DogFoodPlanner."
      },
      {
        "title": "6. Limitação de Responsabilidade",
        "content": "O DogFoodPlanner.com e seus autores não serão responsabilizados por quaisquer danos diretos ou indiretos decorrentes do uso das informações disponibilizadas."
      }
    ]
  },
  "bestFood": {
    "eyebrow": "GUIA CLÍNICO // RANKING DAS MELHORES RAÇÕES 2026",
    "rankingsTitle": "Quais São os 5 Alimentos Mais Saudáveis para Cães em 2026?",
    "rankingsIntro": "Pesquisas em longevidade canina comprovam que o processamento térmico brando e a umidade biológica superior a 70% são os dois maiores indicadores de vitalidade e proteção renal.",
    "rankings": [
      {
        "rank": "01",
        "title": "Alimentação Natural (AN) Cozida no Vapor de Grau Humano",
        "score": "98/100",
        "pros": "Carnes e vegetais reais cozidos a baixa temperatura (70°C). Preserva mais de 70% de umidade natural, enzimas e vitaminas biodisponíveis.",
        "cons": "Exige armazenamento em geladeira ou freezer. Custo maior que rações comuns de supermercado."
      },
      {
        "rank": "02",
        "title": "Dieta Crua Biologicamente Adequada BARF 80-10-10",
        "score": "95/100",
        "pros": "Proporção ancestral carnívora: 80% carne muscular, 10% ossos carnudos, 10% vísceras. Excelente para limpeza dental e massa magra.",
        "cons": "Exige higiene rigorosa na manipulação e monitoramento preciso da relação cálcio-fósforo."
      },
      {
        "rank": "03",
        "title": "Comida Crua Liofilizada e Desidratada a Frio",
        "score": "91/100",
        "pros": "Mantém a pureza nutricional do alimento cru com a praticidade do armazenamento em temperatura ambiente.",
        "cons": "Deve ser reidratada com água morna ou caldo de ossos antes do fornecimento."
      },
      {
        "rank": "04",
        "title": "Ração Seca Super Premium sem Grãos ou com Grãos Ancestrais",
        "score": "78/100",
        "pros": "Prática, durável e acessível para lares com múltiplos cães ou cães de porte grande.",
        "cons": "Processada a mais de 200°C, apenas 8 a 10% de umidade e 40 a 50% de carboidratos amiláceos."
      },
      {
        "rank": "05",
        "title": "Dietas Terapêuticas e Medicamentosas Veterinárias",
        "score": "72/100",
        "pros": "Formuladas para doenças clínicas diagnosticadas (insuficiência renal, hepática ou urólitos).",
        "cons": "Costumam conter ingredientes vegetais refinados e exigem prescrição veterinária."
      }
    ],
    "buyerGuideTitle": "4 Regras de Ouro para Escolher a Melhor Alimentação",
    "buyerRules": [
      {
        "title": "1. Proteína Animal Específica no 1º Lugar da Composição",
        "desc": "Priorize «Peru Desossado», «Carne Bovina» ou «Salmão Fresco» em vez de genéricas «farinhas de subprodutos»."
      },
      {
        "title": "2. Alta Umidade Biológica (>70%)",
        "desc": "A ração seca causa desidratação crônica de baixo grau. Sempre adicione água, caldos ou alimentos úmidos."
      },
      {
        "title": "3. Zero Conservantes Químicos Artificiais",
        "desc": "Evite terminantemente aditivos como BHA, BHT, etoxiquina e corantes sintéticos."
      },
      {
        "title": "4. Carboidratos Controlados (<25%)",
        "desc": "Cães não possuem amilase salivar. O excesso de amido sobrecarrega o pâncreas e acelera a obesidade."
      }
    ],
    "ctaTitle": "Calcule a Porção Diária Ideal para o Seu Cão",
    "ctaDesc": "Seja comida natural, dieta crua BARF ou ração seca: saiba as gramas diárias exatas e a meta calórica.",
    "ctaBtn": "Calcular Porção Diária Agora →"
  },
  "recipes": {
    "eyebrow": "RECEITAS CASEIRAS BALANCEADAS // PADRÕES NRC E AAFCO",
    "heroTitle": "Receitas Caseiras Veterinárias para Cães",
    "heroSubtitle": "Orientações práticas para preparar em casa refeições cozidas no vapor e dietas cruas BARF 80-10-10 completas e saudáveis.",
    "calciumWarningTitle": "A Regra Mais Importante da Comida Caseira: O Equilíbrio do Cálcio",
    "calciumWarningDesc": "A carne muscular possui alto teor de fósforo e quase nenhum cálcio (proporção 1:20). Alimentar cães apenas com carne e arroz sem adicionar cálcio provoca descalcificação óssea e hiperparatireoidismo em poucos meses. Adicione sempre 1/2 colher de chá rasa de pó de casca de ovo (aprox. 900 mg de cálcio elementar) para cada 450 g de carne sem ossos para atingir o ratio ideal Cálcio/Fósforo de 1.2:1.",
    "recipesList": [
      {
        "tag": "COZIDO NO VAPOR",
        "title": "Receita 1: Peru no Vapor com Abóbora Prebiótica (Digestão Sensível)",
        "desc": "Ideal para cães com estômago sensível, histórico de fezes pastosas ou intolerância ao frango comum.",
        "ingredients": [
          "Carne moída de peru magra — 65% (aprox. 900 g)",
          "Corações bovinos ou de peru (Taurina natural) — 10% (aprox. 140 g)",
          "Purê de abóbora cozida sem casca (Fibras solúveis) — 10% (aprox. 140 g)",
          "Espinafre e abobrinha no vapor picados — 10% (aprox. 140 g)",
          "Óleo de salmão selvagem do Alasca (EPA/DHA) — 2% (1.5 colheres de sopa)",
          "Farinha fina de casca de ovo (Cálcio elementar) — 3% (1 colher de chá rasa)"
        ],
        "prep": "Refogue o peru e os corações em fogo baixo até o cozimento suave (70°C). Cozinhe os legumes no vapor e bata com a abóbora. Junte tudo e espere esfriar completamente. Adicione o óleo de salmão e o cálcio apenas com o alimento frio. Congele em porções diárias."
      },
      {
        "tag": "BARF CRUA",
        "title": "Receita 2: Dieta BARF Ancestral 80-10-10 de Carne e Pato",
        "desc": "Alimentação crua biologicamente adequada para cães adultos saudáveis com pH gástrico normal.",
        "ingredients": [
          "Carne bovina magra em cubos — 70%",
          "Coração bovino (Rico em L-Carnitina e CoQ10) — 10%",
          "Pescoço de pato cru ou carcaça de frango — 10% (Osso carnudo e cálcio)",
          "Fígado bovino (Vitamina A e complexo B) — 5%",
          "Rim ou baço bovino (Víscera secretora vital) — 5%"
        ],
        "prep": "Pique a carne e o coração no tamanho ideal para o porte do cão. Pese as vísceras com precisão em balança digital. Congele todas as porções cruas por no mínimo 3 semanas a -20°C antes de descongelar e servir."
      },
      {
        "tag": "TOPPER SUPERFOOD",
        "title": "Receita 3: Topper Antioxidante 80/20 para Turbinar a Ração Seca",
        "desc": "Enriquecedor fresco desenvolvido para substituir 20% das calorias diárias da ração seca habitual.",
        "ingredients": [
          "Ovos caipiras cozidos mollets — 40%",
          "Broto de brócolis no vapor e mirtilos (blueberries) — 30%",
          "Caldo de ossos bovinos cozido lentamente — 20%",
          "Sementes de cânhamo e farinha de alga kelp — 10%"
        ],
        "prep": "Cozinhe os ovos por 4 minutos. Passe os vegetais pelo vapor. Triture com o caldo de ossos morno e as frutas. Adicione de 2 a 4 colheres de sopa diárias sobre o comedouro com a ração seca."
      }
    ],
    "calciumGuideTitle": "Fontes Seguras de Cálcio para Dietas Caseiras",
    "calciumGuideItems": [
      {
        "title": "Farinha de Casca de Ovo",
        "ratio": "1/2 colher de chá para cada 450 g de carne sem ossos",
        "desc": "95% carbonato de cálcio puro. Prático de fazer em casa lavando, secando e triturando cascas no liquidificador."
      },
      {
        "title": "Ossos Carnudos Crus Comestíveis",
        "ratio": "10% do peso total da dieta",
        "desc": "Pescoços de pato ou asas de frango cruas. Jamais cozinhe ossos, pois perdem a elasticidade e perfuram o trato digestivo."
      },
      {
        "title": "Farinha de Ossos Veterinária (Bone Meal)",
        "ratio": "Conforme rótulo do fabricante",
        "desc": "Hidroxiapatita microcristalina que fornece cálcio e fósforo na proporção fisiológica ideal de 2:1."
      }
    ]
  },
  "toxic": {
    "eyebrow": "ALIMENTOS TÓXICOS E PERIGOSOS PARA CÃES",
    "dangerTitle": "Os Alimentos Domésticos Mais Fatais para Cães",
    "dangerIntro": "Determinados alimentos consumidos por humanos possuem toxinas que o metabolismo dos cães é incapaz de processar, resultando em falência de órgãos.",
    "dangerList": [
      {
        "name": "Chocolate & Cacau",
        "toxin": "Teobromina e Cafeína",
        "symptoms": "Vômitos, respiração ofegante, arritmia cardíaca, tremores musculares, convulsões, parada cardiorrespiratória.",
        "risk": "ALTO A FATAL"
      },
      {
        "name": "Uvas, Passas e Groselhas",
        "toxin": "Ácido Tartárico",
        "symptoms": "Letargia, desidratação e insuficiência renal aguda irreversível em 24 a 72 horas.",
        "risk": "EXTREMAMENTE LETAL"
      },
      {
        "name": "Xilitol (Adoçante / E967)",
        "toxin": "Poliol Sintético",
        "symptoms": "Liberação maciça de insulina, hipoglicemia severa, desmaio e necrose hepática fulminante em poucas horas.",
        "risk": "EMERGÊNCIA GRAVÍSSIMA"
      },
      {
        "name": "Cebola, Alho, Alho-Poró e Cebolinha",
        "toxin": "Dissulfeto de N-propila",
        "symptoms": "Destruição de glóbulos vermelhos, anemia hemolítica, gengivas pálidas, urina escura e fraqueza.",
        "risk": "TOXICIDADE CUMULATIVA"
      },
      {
        "name": "Nozes de Macadâmia",
        "toxin": "Neurotoxina desconhecida",
        "symptoms": "Fraqueza dos membros posteriores, febre alta, vômitos e rigidez muscular dolorosa.",
        "risk": "MODERADO A GRAVE"
      },
      {
        "name": "Ossos Cozidos de Qualquer Tipo",
        "toxin": "Risco Mecânico de Perfuração",
        "symptoms": "Perfuração gástrica ou intestinal, hemorragia interna, peritonite e obstrução cirúrgica.",
        "risk": "EMERGÊNCIA CIRÚRGICA"
      }
    ],
    "emergencyTitle": "O Que Fazer em Caso de Emergência por Intoxicação",
    "emergencySteps": [
      "1. Aja com Rapidez: Identifique exatamente o alimento ingerido, a embalagem, a quantidade aproximada e o horário.",
      "2. NÃO Provoque Vômito sem Instrução Veterinária: Substâncias cáusticas ou ossos afiados lesionam o esôfago durante a regurgitação.",
      "3. Contate o Veterinário Imediatamente: Dirija-se imediatamente à clínica veterinária de urgência mais próxima."
    ],
    "safeTitle": "Frutas e Vegetais 100% Seguros e Saudáveis",
    "safeIntro": "Estes alimentos fornecem antioxidantes protetores, fibras prebióticas solúveis e vitaminas essenciais:",
    "safeFoods": [
      {
        "name": "Mirtilos (Blueberries)",
        "benefit": "Repletos de antocianinas e antioxidantes que combatem o envelhecimento celular."
      },
      {
        "name": "Abóbora Cozida",
        "benefit": "Rica em fibras solúveis que auxiliam tanto no alívio de diarreias quanto de constipação."
      },
      {
        "name": "Cenouras",
        "benefit": "Petisco crocante e de baixas calorias, rico em betacaroteno e aliado da limpeza bucal."
      },
      {
        "name": "Vagem no Vapor",
        "benefit": "Excelente fonte de saciedade vegetal com baixo teor calórico para cães que precisam emagrecer."
      },
      {
        "name": "Maçãs (Sem Sementes)",
        "benefit": "Fonte natural de vitamina C, vitamina A e pectina benéfica para a microbiota intestinal."
      }
    ]
  },
  "brands": {
    "eyebrow": "AVALIAÇÃO DE MARCAS E HISTÓRICO DE RECALLS",
    "heroTitle": "Avaliação de Marcas de Ração e Histórico de Recalls",
    "heroSubtitle": "Análises imparciais e fundamentadas sobre a qualidade dos ingredientes, conformidade de rótulos e histórico de recolhimentos sanitários.",
    "brandsList": [
      {
        "name": "Blue Buffalo",
        "grade": "Nota: B+",
        "pros": "Carne desossada real em 1º lugar; sem milho, trigo ou soja; partículas LifeSource Bits preservadas a frio.",
        "cons": "Elevado teor de carboidratos (45-50%); recalls históricos por excesso de umidade e Vitamina D elevada.",
        "verdict": "Ração comercial acima da média. Recomendamos adicionar 20% de alimentos frescos para melhorar a hidratação."
      },
      {
        "name": "Rachael Ray Nutrish",
        "grade": "Nota: C+ / B-",
        "pros": "Preço acessível e fácil distribuição; as linhas Peak e Dish possuem maior proporção de carnes reais.",
        "cons": "As linhas de entrada utilizam muita proteína de ervilha e glúten de milho; já foi citada em investigações sanitárias.",
        "verdict": "Opção de baixo custo aceitável nas linhas superiores, exigindo leitura atenta da divisão de leguminosas."
      },
      {
        "name": "Pure Balance",
        "grade": "Nota: B (Melhor Custo-Benefício)",
        "pros": "Excelente relação custo-qualidade; receitas ricas em carnes sem corantes artificiais ou grãos alergênicos.",
        "cons": "Produção terceirizada; teor moderado de carboidratos.",
        "verdict": "Uma das opções mais equilibradas e honestas do segmento de supermercado."
      },
      {
        "name": "Ollie Comida Natural",
        "grade": "Nota: A (Excelente)",
        "pros": "100% carnes e legumes de grau humano; cozimento brando a vapor; pacotes individuais sob medida.",
        "cons": "Mensalidade de custo elevado (R$ 900 - R$ 1.800 / mês); exige espaço reservado no congelador.",
        "verdict": "Referência em vitalidade metabólica, brilho na pelagem e longevidade digestiva."
      },
      {
        "name": "Open Farm",
        "grade": "Nota: A-",
        "pros": "Rastreabilidade total das fazendas fornecedoras; carnes com certificado de bem-estar animal e peixes selvagens sustentáveis.",
        "cons": "Preço elevado; disponibilidade reduzida em lojas físicas.",
        "verdict": "A melhor alternativa para tutores focados em procedência ética e ausência de subprodutos."
      }
    ],
    "recallsTitle": "Como Entender os Recalls de Ração",
    "recallsDesc": "Recalls sanitários dividem-se em três classes: Classe I (risco grave à vida, ex.: contaminação por Salmonella ou excesso letal de Vitamina D), Classe II (efeitos adversos reversíveis) e Classe III (irregularidades formais no rótulo). Verifique sempre o número do lote impresso no saco.",
    "methodTitle": "Nossos 4 Pilares de Avaliação de Ração",
    "methodPillars": [
      {
        "title": "1. Clareza da Proteína",
        "desc": "Carne muscular nomeada em vez de farinhas de subprodutos indeterminadas."
      },
      {
        "title": "2. Fração de Carboidratos",
        "desc": "Teor de amido inferior a 40% para evitar obesidade e resistência à insulina."
      },
      {
        "title": "3. Rastreabilidade da Origem",
        "desc": "Ingredientes de criatórios éticos e livres de organismos transgênicos."
      },
      {
        "title": "4. Histórico Sanitário",
        "desc": "Auditorias laboratoriais independentes e plantas fabris com certificação estrita."
      }
    ]
  },
  "allergies": {
    "eyebrow": "DERMATOLOGIA CANINA // ALERGIAS E DIETA DE ELIMINAÇÃO",
    "heroTitle": "Melhor Alimentação para Cães Alérgicos e com Estômago Sensível",
    "heroSubtitle": "Guia veterinário sobre hipersensibilidade alimentar, proteínas nobres únicas e dieta de eliminação de 8 semanas.",
    "allergensTitle": "Os 5 Alérgenos Mais Frequentes na Alimentação Canina",
    "allergensIntro": "Alergias alimentares em cães são respostas imunes anormais a certas proteínas. Por ordem de incidência clínica:",
    "allergensList": [
      {
        "name": "1. Frango Industrial (60% dos casos)",
        "desc": "Devido à superexposição contínua nas rações comerciais, o frango é o maior alérgeno alimentar canino."
      },
      {
        "name": "2. Carne Bovina (30% dos casos)",
        "desc": "Proteína comum que frequentemente deflagra coceira intensa nas patas e otites recorrentes."
      },
      {
        "name": "3. Derivados de Leite e Queijo",
        "desc": "Cães adultos perdem a enzima lactase, provocando diarreia osmótica e gases."
      },
      {
        "name": "4. Glúten de Trigo e Milho",
        "desc": "Proteínas vegetais inflamatórias que fragilizam a permeabilidade intestinal."
      },
      {
        "name": "5. Soja e Proteínas Vegetais Isoladas",
        "desc": "Fontes vegetais de baixo custo que causam fermentação digestiva e dermatites."
      }
    ],
    "eliminationTitle": "O Protocolo Veterinário da Dieta de Eliminação de 8 Semanas",
    "eliminationSteps": [
      {
        "step": "Fase 1",
        "title": "Escolha uma Proteína Inédita",
        "desc": "Troque para uma carne que o cão nunca consumiu na vida (ex.: Cervo, Coelho ou Canguru) combinada com um vegetal digerível como a abóbora."
      },
      {
        "step": "Fase 2",
        "title": "Tolerância Zero (8 Semanas Consecutivas)",
        "desc": "Por 8 semanas, forneça rigorosamente apenas essa comida. Proibidos petiscos comerciais, bifinhos e restos de comida."
      },
      {
        "step": "Fase 3",
        "title": "Reintrodução Monitorada",
        "desc": "Se a coceira cessar, reintroduza um ingrediente suspeito por 7 dias. O retorno dos sintomas confirma a alergia."
      }
    ],
    "novelTitle": "Proteínas Nobres Hipoalergênicas Indicadas",
    "novelProteins": [
      {
        "name": "Carne de Cervo / Veado",
        "desc": "Carne vermelha magra e de altíssima digestibilidade contra a qual cães raramente possuem anticorpos."
      },
      {
        "name": "Carne de Coelho",
        "desc": "Proteína hipoalergênica por excelência, leve e de fácil quebra metabólica."
      },
      {
        "name": "Carne de Pato",
        "desc": "Alternativa muito saborosa e segura para animais sensíveis à carne de frango comum."
      },
      {
        "name": "Carne de Canguru",
        "desc": "Uma das carnes selvagens mais puras e magras disponíveis na dermatologia veterinária."
      }
    ]
  },
  "calculator": {
    "eyebrow": "100% GRATUITO // CALCULADORA DE RAÇÃO E CALORIAS",
    "noticeTitle": "Aviso Importante:",
    "noticeText": "Para orientação educativa geral. Não substitui consulta, diagnóstico ou tratamento médico veterinário.",
    "heroTitle": "Calculadora Veterinária de Ração e Calorias para Cães",
    "heroSubtitle": "Descubra a demanda calórica exata do seu cão (RER e MER) e obtenha as porções diárias em gramas com base no peso, idade, nível de atividade e escore corporal."
  },
  "breeds": {
    "eyebrow": "GUIA NUTRICIONAL POR RAÇA // DIRETRIZES VETERINÁRIAS",
    "targetWeight": "Peso Ideal",
    "dailyCalories": "Calorias Diárias",
    "freshDaily": "Comida Natural / Dia",
    "kibbleDaily": "Ração Seca / Dia",
    "cups": "xícaras",
    "reqsTitle": "Necessidades Nutricionais para o {name}",
    "reqsIntro": "Como um cão da categoria {category} com peso médio de {w0} a {w1} lbs (aprox. {Math.round(w0*0.453)} a {Math.round(w1*0.453)} kg), o {name} requer um equilíbrio nutricional próprio:",
    "predispositionsTitle": "Predisposições de Saúde e Alimentação:",
    "feedingRoutineTitle": "Rotina de Alimentação Recomendada:",
    "feedingRoutineDesc": "Alimente seu {name} adulto duas vezes ao dia (50% pela manhã e 50% à noite). Deixe sempre água limpa e fresca à disposição. Se fornecer ração seca, hidrate-a com caldo morno para proteger os rins.",
    "ctaTitle": "Personalize o Plano Nutricional para o Seu {name}",
    "ctaSubtitle": "Ajuste conforme a idade exata (filhote, adulto ou idoso), peso real, rotina de exercícios e porte na calculadora gratuita.",
    "ctaBtn": "Calcular para {name} →",
    "faqTitle": "Perguntas Frequentes sobre a Alimentação do {name}",
    "faqSubtitle": "Quantidades diárias, divisão de horários e melhores opções de alimentos."
  },
  "comparisonTable": {
    "eyebrow": "COMPARAÇÃO CLÍNICA // COMIDA NATURAL VS RAÇÃO SECA",
    "title": "Por Que a Comida Natural Supera a Ração Seca",
    "subtitle": "Uma análise lado a lado sobre biodisponibilidade digestiva, temperaturas de preparo e custos reais.",
    "scrollHint": "↔ Deslize a tabela para o lado",
    "colMetric": "Critério Nutricional",
    "colDfp": "✨ DogFoodPlanner Caseiro",
    "colSubs": "Assinaturas Naturais",
    "colKibble": "Ração Seca Extrudada",
    "rows": [
      {
        "metric": "Método de Cozimento",
        "dfp": "Vapor Suave (70°C) ou Dieta Crua",
        "subs": "Cozimento Industrial Ultracongelado",
        "kibble": "Extrusão a Mais de 200°C"
      },
      {
        "metric": "Carboidratos Líquidos",
        "dfp": "< 3.5% (Apenas vegetais funcionais)",
        "subs": "10% – 15%",
        "kibble": "45% – 60% (Amidos de enchimento)"
      },
      {
        "metric": "Umidade Biológica",
        "dfp": "70% – 75% (Hidratação renal indispensável)",
        "subs": "70% – 75%",
        "kibble": "8% – 10% (Sobrecarga e desidratação crônica)"
      },
      {
        "metric": "Transparência de Quantidades",
        "dfp": "100% Gramas e proporções reveladas",
        "subs": "Fórmula proprietária (gramas ocultas)",
        "kibble": "Ingredientes fracionados e farinhas mistas"
      },
      {
        "metric": "Custo Médio Mensual (Cão de 23 kg)",
        "dfp": "R$ 380 – R$ 550 (Preparo caseiro)",
        "subs": "R$ 1.300 – R$ 1.800 / mês",
        "kibble": "R$ 280 – R$ 450 / mês"
      }
    ]
  },
  "faqPage": {
    "badge": "BASE DE CONHECIMENTO // MAIS DE 40 RESPOSTAS VETERINÁRIAS",
    "exploreHubsTitle": "Explore Nossos Guias Especializados em Nutrição Canina",
    "exploreHubsSubtitle": "Dossiês aprofundados para tutores comprometidos com a saúde e a longevidade dos seus cães.",
    "cardBestFood": "Comparativo entre comida natural, BARF, rações ricas em proteína e estômagos sensíveis.",
    "cardCalc": "Calculadora científica RER e MER que fornece porções diárias exatas em gramas.",
    "cardRecipes": "Receitas caseiras cozidas e dietas BARF 80-10-10 com equilíbrio mineral de cálcio.",
    "cardAllergies": "Seleção de proteínas noveles, dietas de exclusão e fortalecimento da microbiota.",
    "cardToxic": "Lista completa de alimentos tóxicos, vegetais benéficos e aditivos prejudiciais.",
    "cardBrands": "Avaliações de Blue Buffalo, Nutrish, Pure Balance, Ollie e Open Farm."
  },
  "faqSingle": {
    "reviewedBy": "Revisado por: Nutricionista Veterinário Canino",
    "updated": "Atualizado em: 2026",
    "directQuickAnswer": "Resposta Rápida Resumida",
    "clinicalAnalysis": "Análise Nutricional e Clínica Detalhada",
    "topics": "Tópicos associados:",
    "ctaBadge": "🐾 Motor Gratuito de Nutrição Canina",
    "ctaTitle": "Calcule as Calorias e Gramas Diárias para o Seu Cão",
    "ctaSubtitle": "Use nossa calculadora veterinária para obter o gasto metabólico (RER/MER) e as gramas para refeições frescas ou cruas.",
    "ctaBtn": "Calcular Porções Agora →",
    "relatedTitle": "Dúvidas Veterinárias Relacionadas",
    "readAnswer": "Ler Resposta Completa →"
  }
},
  ko: {
  "about": {
    "missionBadge": "우리의 사명 // 임상 반려견 영양학",
    "whyTitle": "DogFoodPlanner의 설립 취지",
    "whyP1": "수십 년 동안 상업용 펫푸드 시장은 깜깜이 정보 속에서 소비자를 기만해 왔습니다. 200℃ 이상의 고온 압출 성형을 거치는 시중 건식 사료(키블)는 열에 약한 천연 비타민을 파괴하고, 필수 오메가 지방산을 산화시키며, 사료 포대의 최대 60%를 고혈당 탄수화물 증량제로 채웁니다.",
    "whyP2": "반면 맞춤형 자연화식 정기구독 서비스는 단순한 살코기와 채소만으로 월 30~50만 원이라는 과도한 비용을 청구합니다. DogFoodPlanner는 이 불합리한 장벽을 허물고자 합니다. 수의 임상 영양학에서 사용하는 정밀한 대사 계산 알고리즘을 100% 무료로 공개하여, 보호자가 가정에서 저렴한 비용으로 균형 잡힌 저온 조리 화식이나 80-10-10 생식, 항산화 토핑을 직접 만들 수 있도록 돕습니다.",
    "methodTitle": "수의학적 영양 분석 기준 및 원칙",
    "pillars": [
      {
        "tag": "01 // NRC 표준 공식",
        "title": "안정시 대사요구량 (RER)",
        "desc": "단순한 체중 구간별 대략적 수치가 아닌 지수 함수 공식(70 × 체중kg^0.75)을 기반으로 개별 반려견의 기초 대사 에너지를 정밀 산출합니다."
      },
      {
        "tag": "02 // AAFCO & FEDIAF 기준",
        "title": "생체 흡수율 높은 미량 영양소",
        "desc": "모든 식단은 칼슘과 인의 황금 비율(1.2:1 ~ 1.4:1), EPA/DHA 지방산 및 필수 타우린 공급 기준을 엄격히 충족합니다."
      },
      {
        "tag": "03 // 완전 무료 공개",
        "title": "독립성과 객관성 유지",
        "desc": "사료 제조사의 유료 협찬을 일절 배제하며, 레시피의 그램(g) 수치를 유료 결제 장벽 뒤에 숨기지 않습니다."
      }
    ],
    "ctaTitle": "우리 강아지에게 필요한 정확한 영양과 칼로리를 계산해 보세요",
    "ctaDesc": "대화형 급여량 계산기와 식이 알레르기 관리 가이드, 객관적인 수의학 사료 리뷰를 지금 확인하세요.",
    "ctaBtn": "무료 영양 계산기 실행하기 →"
  },
  "contact": {
    "eyebrow": "고객 지원 및 문의 // 직접 문의 창구",
    "cards": [
      {
        "icon": "📧",
        "title": "일반 문의",
        "desc": "의견 및 일반 질문:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🐾",
        "title": "수의 영양학 연구",
        "desc": "NRC 계산식 및 영양 기준 문의:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🛡️",
        "title": "기술 지원 & 오류 제보",
        "desc": "계산기 버그 및 웹사이트 오류:",
        "email": "hello@dogfoodplanner.com"
      }
    ],
    "formTitle": "반려견 영양 전문 연구팀에게 문의하기",
    "formDesc": "NRC 칼로리 계산 공식에 대한 궁금증이나 맞춤 레시피에 대한 도움이 필요하신가요? 영업일 기준 24시간 이내에 답변드립니다.",
    "nameLabel": "성함",
    "namePlaceholder": "예: 김민수",
    "emailLabel": "이메일 주소",
    "emailPlaceholder": "minsu@example.com",
    "subjectLabel": "문의 유형",
    "subjectOptions": [
      "일반 문의 / 사이트 피드백",
      "반려견 영양학 및 레시피 문의",
      "계산기 알고리즘 관련 질문",
      "기술적 오류 / 버그 제보"
    ],
    "messageLabel": "문의 내용",
    "messagePlaceholder": "반려견의 정보(견종, 체중, 나이)와 구체적인 문의 내용을 남겨주세요...",
    "submitBtn": "문의 보내기 →",
    "notice": "수의학 응급 안내: 반려견이 급성 중독 증상이나 호흡 곤란 등 위급한 상태를 보인다면 즉시 24시간 동물 응급센터를 방문하십시오.",
    "faqTitle": "빠른 답변을 찾고 계신가요?",
    "faqDesc": "편식, 생식 BARF 식단, 고양이 사료 섭취 위험, 브랜드 평가 등 40여 개 이상의 검증된 수의학 Q&A를 확인해 보세요.",
    "faqBtn": "모든 FAQ 둘러보기 →"
  },
  "privacy": {
    "eyebrow": "개인정보 처리방침 // 데이터 보호 정책",
    "lastUpdated": "최종 수정일: 2026년 1월",
    "intro": "DogFoodPlanner.com은 이용자의 개인정보를 소중히 여기며 관련 법령을 준수합니다. 본 방침은 웹사이트 이용 시 정보가 어떻게 취급되는지 안내합니다.",
    "sections": [
      {
        "title": "1. 수집하지 않는 개인정보",
        "content": "반려견의 건강 데이터는 오직 보호자의 것입니다. 당사의 영양 계산기를 이용할 때 회원가입, 비밀번호 설정, 결제 카드 정보 입력이 일절 요구되지 않습니다. 입력된 체중, 연령, 식단 유형은 오직 이용자의 웹 브라우저 로컬에서만 연산되며 외부 데이터베이스에 저장되지 않습니다."
      },
      {
        "title": "2. 익명 기술 로그 데이터",
        "content": "웹사이트 보안 유지 및 해킹 공격 방어를 위해, CDN 서버는 통상적인 익명 기술 로그(익명화된 IP 주소, 브라우저 종류, 접속 시간)를 시스템에 임시 기록합니다."
      },
      {
        "title": "3. 로컬 스토리지(localStorage) 사용",
        "content": "이용자가 선택한 선호 언어 설정 및 새로고침 시 계산 결과를 유지하기 위한 목적으로만 브라우저의 로컬 저장소(localStorage)를 활용합니다."
      },
      {
        "title": "4. 외부 과학 학술지 및 참조 링크",
        "content": "당사는 AAFCO, FEDIAF, NRC 등의 공신력 있는 외부 학술 자료 링크를 제공합니다. 외부 사이트의 개인정보 보호 정책에 대해서는 책임을 지지 않습니다."
      },
      {
        "title": "5. 아동의 개인정보 보호",
        "content": "당사의 서비스는 성인 반려동물 보호자를 대상으로 하며, 만 14세 미만 아동의 개인정보를 수집하지 않습니다."
      },
      {
        "title": "6. 정책 변경 및 문의",
        "content": "개인정보 처리방침과 관련된 문의 사항은 privacy@dogfoodplanner.com으로 연락해 주시기 바랍니다."
      }
    ]
  },
  "terms": {
    "eyebrow": "이용약관 // 서비스 이용 조건",
    "lastUpdated": "최종 수정일: 2026년 1월",
    "intro": "DogFoodPlanner.com을 이용하시기 전에 본 약관을 주의 깊게 읽어주시기 바랍니다. 사이트 이용 시 본 약관에 동의한 것으로 간주됩니다.",
    "sections": [
      {
        "title": "1. 약관의 효력 및 동의",
        "content": "DogFoodPlanner.com(이하 \"당사 웹사이트\")에 접속하고 계산기 및 가이드를 이용하는 것은 본 약관을 완전히 숙지하고 동의한 것으로 간주됩니다. 동의하지 않는 경우 서비스 이용을 중단해 주십시오."
      },
      {
        "title": "2. 수의학적 및 의료적 면책 조항",
        "content": "당사 웹사이트에서 제공하는 칼로리 계산, 사료 평가, 수제 식단 가이드는 NRC 및 AAFCO의 공개 학술 자료에 기반한 일반적인 교육 목적의 정보입니다. 이는 전문 수의사의 개별적인 임상 진단, 처방, 치료 행위를 대신할 수 없습니다. 질환이 있거나 자견, 임신견의 식단을 크게 변경할 때는 반드시 담당 수의사와 상담하십시오."
      },
      {
        "title": "3. 대화형 계산기 사용 기준",
        "content": "에너지 요구량(RER 및 MER)과 권장 급여 그램(g) 수는 통계적 기준치입니다. 반려견의 실제 대사율은 중성화 여부, 환경 기온, 활동량에 따라 달라집니다. 보호자는 정기적으로 신체충실지수(BCS)를 체크하여 급여량을 가감해야 합니다."
      },
      {
        "title": "4. 수제 식단 안전 및 칼슘 비율 의무",
        "content": "가정에서 자연식이나 생식을 조리할 때는 필수 미량 영양소 균형을 엄격히 맞춰야 합니다. 특히 칼슘 보충 없이 뼈 없는 살코기만 지속 급여할 경우 수개월 내에 심각한 골연화증과 저칼슘혈증이 발생합니다. 식재료의 계량과 칼슘 배합은 이용자의 책임입니다."
      },
      {
        "title": "5. 지식재산권",
        "content": "당사 웹사이트에 게재된 모든 계산 알고리즘, 인터페이스 디자인, 인포그래픽, 텍스트 콘텐츠는 저작권법의 보호를 받습니다."
      },
      {
        "title": "6. 책임의 한계",
        "content": "당사는 본 웹사이트의 정보를 바탕으로 행해진 식단 급여 결과에 대해 어떠한 직간접적 손해배상 책임도 부담하지 않습니다."
      }
    ]
  },
  "bestFood": {
    "eyebrow": "핵심 가이드 // 2026 최고의 강아지 사료 추천 및 순위",
    "rankingsTitle": "【2026년 최신】 반려견 건강수명을 늘려주는 사료 순위 TOP 5",
    "rankingsIntro": "수의 임상 영양학의 장기 추적 연구에 따르면, ‘최소한의 열 가공’과 ‘70% 이상의 천연 생체 수분’이 반려견의 신장 건강과 면역력을 결정짓는 가장 핵심적인 요소임이 입증되었습니다.",
    "rankings": [
      {
        "rank": "01",
        "title": "휴먼그레이드 저온 조리 화식 (자연식)",
        "score": "98/100",
        "pros": "사람이 먹을 수 있는 신선한 육류와 채소를 70℃ 저온에서 부드럽게 가열. 70% 이상의 천연 수분, 활성 소화 효소, 비타민이 온전히 보존됩니다.",
        "cons": "냉장 또는 냉동 보관 필수. 시중 건식 사료에 비해 비용이 높은 편."
      },
      {
        "rank": "02",
        "title": "자연의 섭리에 맞춘 80-10-10 생식 BARF 식단",
        "score": "95/100",
        "pros": "육식동물의 이상적 비율 (살코기 80%, 생뼈 10%, 내장 10%). 치석 형성 억제 및 탄탄한 근육 유지에 탁월.",
        "cons": "철저한 위생 관리와 정밀한 칼슘-인 섭취 비율 계산이 요구됨."
      },
      {
        "rank": "03",
        "title": "에어드라이 & 동결건조 생식 사료",
        "score": "91/100",
        "pros": "생식의 풍부한 영양가를 상온 보관 가능한 편의성으로 구현. 입맛이 까다로운 아이들을 위한 토핑으로 훌륭함.",
        "cons": "신장 부담을 방지하기 위해 급여 전 미온수나 뼈 육수에 반드시 불려주어야 함."
      },
      {
        "rank": "04",
        "title": "고단백 그레인프리 & 고대곡물 건식 사료 (키블)",
        "score": "78/100",
        "pros": "상온 장기 보관이 가능하며 대형견이나 다견 가정에서 경제적인 선택지.",
        "cons": "200℃ 이상의 고온 압출 제조로 수분이 8~10%에 불과하며 전분 탄수화물이 40~50% 함유됨."
      },
      {
        "rank": "05",
        "title": "수의사 처방 전문 치료식 사료",
        "score": "72/100",
        "pros": "만성 신부전, 간 질환, 결석증 등 특정 임상 질환 관리에 맞춤 배합.",
        "cons": "곡물성 충전재 비율이 높고 수의사의 처방이 필요함."
      }
    ],
    "buyerGuideTitle": "최고의 사료를 선택하기 위한 4대 황금 원칙",
    "buyerRules": [
      {
        "title": "1. 원재료 첫 번째 자리에 명확한 생육 표기",
        "desc": "출처를 알 수 없는 ‘가금류 육골분’ 대신 ‘뼈를 바른 칠면조’, ‘소고기’, ‘생연어’가 명시되어 있는지 확인하세요."
      },
      {
        "title": "2. 70% 이상의 풍부한 수분 공급",
        "desc": "수분 8~10%의 건식 사료만 먹는 개는 만성적인 미세 탈수 상태에 빠집니다. 수제 화식이나 뼈 육수를 꼭 섞어주세요."
      },
      {
        "title": "3. 화학 합성 방부제 및 인공 색소 배제",
        "desc": "BHA, BHT, 에톡시퀸, 프로필렌글리콜 등 유해성이 지적된 합성 첨가물을 철저히 피하십시오."
      },
      {
        "title": "4. 탄수화물 함량을 25% 이하로 제어",
        "desc": "개의 침에는 아밀라아제가 없습니다. 과도한 전분은 췌장에 무리를 주고 비만을 유발합니다."
      }
    ],
    "ctaTitle": "우리 강아지 맞춤 사료의 일일 급여량을 계산해 보세요",
    "ctaDesc": "자연 화식, 생식 BARF, 프리미엄 건식 사료 등 식단에 맞는 정확한 일일 급여량(g)과 칼로리를 확인할 수 있습니다.",
    "ctaBtn": "맞춤 급여량 계산하기 →"
  },
  "recipes": {
    "eyebrow": "수의 영양사 맞춤 수제 자연식 & 생식 레시피",
    "heroTitle": "수의사 검증 강아지 수제 자연식 레시피",
    "heroSubtitle": "가정에서 손쉽게 조리할 수 있는 영양 균형 저온 화식과 자연의 법칙에 맞춘 80-10-10 생식 가이드.",
    "calciumWarningTitle": "수제 사료 조리의 절대 원칙: 칼슘과 인의 균형",
    "calciumWarningDesc": "순수 살코기는 인 함량이 매우 높고 칼슘은 거의 없습니다(비율 1:20). 칼슘 보충 없이 고기와 밥만 지속해서 먹이면 수개월 내에 심각한 골다공증과 뼈 탈회 질환이 발생합니다. 뼈 없는 살코기 450g당 반드시 순수 난각가루(계란껍질 분말) 반 티스푼(원소 칼슘 약 900mg)을 첨가하여 1.2:1의 칼슘:인 비율을 맞춰주세요.",
    "recipesList": [
      {
        "tag": "저온 조리 화식",
        "title": "레시피 1: 칠면조 & 프리바이오틱스 단호박 화식 (위장이 민감한 강아지용)",
        "desc": "장 건강이 약하거나 무른 변을 자주 보는 아이, 시중 닭고기에 알레르기가 있는 강아지에게 적합합니다.",
        "ingredients": [
          "지방 제거 칠면조 분쇄육 (93/7) — 65% (약 900g)",
          "칠면조 또는 소 심장 (천연 타우린 공급원) — 10% (약 140g)",
          "순수 단호박 퓨레 (수용성 식이섬유) — 10% (약 140g)",
          "살짝 찐 시금치 & 다진 애호박 — 10% (약 140g)",
          "자연산 알래스카 연어오일 (EPA/DHA) — 2% (1.5 큰술)",
          "미세 난각가루 (천연 칼슘 보충제) — 3% (1 작은술 듬뿍)"
        ],
        "prep": "칠면조 고기와 심장을 약불에서 살짝 익힙니다 (내부 온도 70℃ 유지). 채소를 쪄서 단호박과 함께 부드럽게 갈아줍니다. 모든 재료를 고루 섞은 후 완전히 식힙니다. 음식이 식은 후 연어오일과 난각가루를 골고루 섞어 소분 냉동합니다."
      },
      {
        "tag": "생식 BARF",
        "title": "레시피 2: 소고기 & 오리고기 80-10-10 천연 생식 식단",
        "desc": "소화 기능이 건강하고 위산 분비가 원활한 성견을 위한 야생 비율의 완전 생식.",
        "ingredients": [
          "목초 사육 소고기 살코기 — 70%",
          "소 심장 (L-카르니틴 및 코엔자임 Q10 풍부) — 10%",
          "생 오리 목뼈 또는 닭 안심뼈 — 10% (천연 생뼈 및 칼슘)",
          "소 간 (비타민 A 및 B군 복합체) — 5%",
          "소 콩팥 또는 비장 (필수 분비 내장 기관) — 5%"
        ],
        "prep": "살코기와 심장을 강아지 한 입 크기로 자릅니다. 생뼈는 삼키지 않도록 체급에 맞게 고릅니다. 내장 기관을 주방 저울로 정밀하게 계량합니다. 모든 생식 재료는 급여 전 영하 20℃ 이하에서 최소 3주간 냉동 보관하여 기생충을 예방합니다."
      },
      {
        "tag": "슈퍼푸드 토퍼",
        "title": "레시피 3: 80/20 항산화 슈퍼푸드 사료 영양 토핑",
        "desc": "기존 건식 사료 칼로리의 20%를 신선한 자연 식재료로 대체하여 활력을 불어넣는 토퍼.",
        "ingredients": [
          "방사 유정란 반숙 수란 — 40%",
          "살짝 찐 브로콜리 새싹 & 야생 블루베리 — 30%",
          "푹 고아낸 한우 사골 뼈 육수 — 20%",
          "유기농 헴프씨드 & 켈프 해조 분말 — 10%"
        ],
        "prep": "달걀을 4분간 삶아 반숙으로 준비합니다. 채소를 3분간 살짝 찝니다. 미온의 사골 육수와 블루베리를 함께 으깬 뒤, 매 끼니 기존 사료 위에 2~4큰술을 얹어 급여합니다."
      }
    ],
    "calciumGuideTitle": "수제 사료에 안전하게 사용할 수 있는 칼슘 급원",
    "calciumGuideItems": [
      {
        "title": "순수 난각가루 (계란껍질 분말)",
        "ratio": "뼈 없는 고기 450g당 1/2 작은술",
        "desc": "순도 95%의 탄산칼슘. 세척 후 오븐에서 살균 건조하여 믹서기로 곱게 갈아 만듭니다."
      },
      {
        "title": "가열하지 않은 신선한 생뼈",
        "ratio": "전체 식단 무게의 10%",
        "desc": "오리 목뼈, 닭 날개 등. 익힌 뼈는 단단해져 유리조각처럼 깨져 식도와 장을 찢을 수 있으므로 절대 익히지 마십시오."
      },
      {
        "title": "수의사 전용 골분 영양제 (Bone Meal)",
        "ratio": "제조사 권장량 준수",
        "desc": "천연 2:1 비율로 칼슘과 인이 배합된 미세 결정 하이드록시아파타이트 분말."
      }
    ]
  },
  "toxic": {
    "eyebrow": "응급 안전 // 강아지에게 치명적인 위험 음식",
    "dangerTitle": "가정 내에서 강아지에게 가장 위험한 치명적 음식",
    "dangerIntro": "사람에게는 안전하지만 개의 체내 효소로는 해독할 수 없어 급성 장기 부전이나 사망을 초래하는 유해 음식들입니다.",
    "dangerList": [
      {
        "name": "초콜릿 및 코코아 가공품",
        "toxin": "테오브로민 및 카페인",
        "symptoms": "구토, 과호흡(헐떡임), 심장 빈맥, 근육 떨림, 전신 발작 및 급성 심부전.",
        "risk": "매우 높음 / 치사율 높음"
      },
      {
        "name": "포도, 건포도 및 청포도",
        "toxin": "타르타르산 (주석산)",
        "symptoms": "기력 저하, 탈수, 섭취 후 24~72시간 이내에 영구적인 급성 신부전 유발.",
        "risk": "극도로 위험 / 사망 위험"
      },
      {
        "name": "자일리톨 (인공 감미료 / E967)",
        "toxin": "합성 당알코올",
        "symptoms": "급격한 인슐린 폭발 분비로 인한 심각한 저혈당 쇼크, 몇 시간 내 급성 간 괴사.",
        "risk": "초응급 상황"
      },
      {
        "name": "양파, 마늘, 파, 부추류",
        "toxin": "유기황 화합물 (알릴 프로필 디설파이드)",
        "symptoms": "적혈구 헤모글로빈 파괴, 하인츠 소체 용혈성 빈혈, 붉은 혈뇨, 호흡곤란.",
        "risk": "지속적인 축적 독성"
      },
      {
        "name": "마카다미아 너트",
        "toxin": "미확인 신경독소",
        "symptoms": "후지(뒷다리) 마비 및 비틀거림, 고열, 구토, 극심한 관절 통증.",
        "risk": "중등도 ~ 중증"
      },
      {
        "name": "조리된 모든 종류의 뼈",
        "toxin": "물리적 장기 파열 위험",
        "symptoms": "식도 천공, 위장관 파열, 내부 출혈, 복막염, 급성 장폐색.",
        "risk": "외과적 응급 개복수술 필요"
      }
    ],
    "emergencyTitle": "음식 중독 사고 발생 시 응급 대처 수칙",
    "emergencySteps": [
      "1. 즉시 격리 및 음식물 수거: 무엇을, 언제, 얼마만큼 섭취했는지 정확한 포장지와 잔여물을 확인하십시오.",
      "2. 수의사의 지시 없이 억지로 구토를 유도하지 마십시오: 부식성 물질이나 날카로운 뼈는 토해내는 과정에서 식도를 손상시킵니다.",
      "3. 지체 없이 동물병원으로 이동: 인근 24시간 동물 응급센터에 전화하여 상태를 미리 알리고 즉시 내원하십시오."
    ],
    "safeTitle": "강아지가 먹어도 100% 안전하고 유익한 과일 & 채소",
    "safeIntro": "다음 식재료는 천연 항산화제, 수용성 프리바이오틱스, 비타민이 풍부하여 매일 토핑으로 주기에 안전합니다:",
    "safeFoods": [
      {
        "name": "블루베리",
        "benefit": "풍부한 안토시아닌과 폴리페놀이 세포 노화를 억제하고 뇌 건강을 돕습니다."
      },
      {
        "name": "찐 단호박",
        "benefit": "풍부한 수용성 식이섬유가 설사와 변비를 모두 완화하고 소화를 돕습니다."
      },
      {
        "name": "당근",
        "benefit": "베타카로틴이 풍부한 저칼로리 간식으로 아삭한 저작 작용을 통해 치아 건강에 기여합니다."
      },
      {
        "name": "삶은 껍질콩 (그린빈)",
        "benefit": "포만감을 주는 훌륭한 저혈당 채소로 다이어트가 필요한 아이들에게 이상적입니다."
      },
      {
        "name": "사과 (씨앗과 심지 완전 제거)",
        "benefit": "비타민 C와 장내 유익균의 먹이가 되는 펙틴이 풍부합니다."
      }
    ]
  },
  "brands": {
    "eyebrow": "사료 브랜드 객관적 리뷰 및 리콜 이력",
    "heroTitle": "인기 사료 브랜드 검증 및 안전 리콜 기록",
    "heroSubtitle": "수의 임상 기준에 따라 주요 상업용 사료의 원료 성분, AAFCO 표기 준수 여부, 리콜 이력을 엄격하게 검증합니다.",
    "brandsList": [
      {
        "name": "블루 버팔로 (Blue Buffalo)",
        "grade": "평가: B+",
        "pros": "제1원료로 생육 사용; 옥수수·밀·대두 무첨가; 비타민을 보존하는 냉압착 라이프소스 비츠 배합.",
        "cons": "탄수화물 비율이 45~50%로 다소 높음; 과거 수분 과다 곰팡이 및 비타민 D 초과로 인한 리콜 이력 존재.",
        "verdict": "시중 건식 사료 중에서는 상위권. 부족한 수분을 보충하기 위해 신선한 화식 토핑을 20% 병행하는 것을 권장."
      },
      {
        "name": "레이첼레이 뉴트리쉬",
        "grade": "평가: C+ / B-",
        "pros": "합리적인 가격대; 상위 라인업(Peak/Dish)은 실제 고기 함량을 대폭 개선함.",
        "cons": "보급형 라인은 완두콩 단백질과 옥수수 글루텐에 과도하게 의존하며, FDA 심근병증(DCM) 조사 대상에 포함된 바 있음.",
        "verdict": "가성비 위주 선택 시 상위 라인을 고르고 원재료 라벨의 콩류 분할 표기를 반드시 확인해야 함."
      },
      {
        "name": "퓨어 밸런스 (Pure Balance)",
        "grade": "평가: B (최고의 가성비)",
        "pros": "탁월한 가격 대비 성능; 인공 색소나 저급 밀가루 없이 육류 중심의 기본에 충실한 배합.",
        "cons": "OEM 외주 생산; 평균적인 탄수화물 함량.",
        "verdict": "대형 마트에서 구할 수 있는 상업용 사료 중 가장 양심적이고 실속 있는 선택지 중 하나."
      },
      {
        "name": "올리 (Ollie) 신선 맞춤 화식",
        "grade": "평가: A (최우수)",
        "pros": "100% 휴먼그레이드 육류와 채소; 저온 스팀 조리; 개별 체중에 맞춘 맞춤형 진공 소분 팩.",
        "cons": "고가의 구독 비용(월 20~40만 원 상당); 냉동실 보관 공간 필요.",
        "verdict": "대사 활력, 모질의 윤기, 소화기 건강수명을 극대화하고자 하는 보호자를 위한 최고의 기준."
      },
      {
        "name": "오픈 팜 (Open Farm)",
        "grade": "평가: A-",
        "pros": "모든 식재료의 농장 및 어장 출처 100% 투명 공개; 동물 복지 인증 육류 및 지속 가능한 어류 사용.",
        "cons": "프리미엄 가격대; 오프라인 매장 접근성이 낮음.",
        "verdict": "원료의 윤리적 출처, 높은 육류 비율, 가금류 부산물 무첨가를 중요시하는 보호자에게 최적."
      }
    ],
    "recallsTitle": "사료 안전 리콜 기준 바로 알기",
    "recallsDesc": "FDA 리콜은 3단계로 나뉩니다: 클래스 I (살모넬라균 감염, 비타민 D 치사량 등 생명을 위협하는 중대 사안), 클래스 II (일시적 건강 이상), 클래스 III (단순 라벨 표기 위반). 구매한 사료 포대의 제조 로트 번호를 주기적으로 확인하세요.",
    "methodTitle": "당사의 4대 사료 평가 기준",
    "methodPillars": [
      {
        "title": "1. 단백질 원료의 투명성",
        "desc": "모호한 ‘육골분’이 아닌 명확한 부위가 적힌 뼈를 바른 온전한 고기."
      },
      {
        "title": "2. 탄수화물 함량 제한",
        "desc": "비만과 췌장 부담을 예방하기 위해 전분 함유량을 40% 미만으로 억제."
      },
      {
        "title": "3. 원산지 및 유통 추적성",
        "desc": "비유전자변형(Non-GMO) 및 동물 복지 인증 농장 원료 확인."
      },
      {
        "title": "4. 안전 검사 및 리콜 기록",
        "desc": "공인 연구기관의 정기 미생물 검사 및 안전한 위생 공정 유지."
      }
    ]
  },
  "allergies": {
    "eyebrow": "임상 피부과 // 반려견 식이 알레르기 및 제한 급여",
    "heroTitle": "알레르기 및 민감성 장을 가진 강아지를 위한 사료 가이드",
    "heroSubtitle": "수의 피부과 전문의가 제시하는 단일 단백질(노벨 프로틴) 선택법과 8주간의 배제 식이 시험 프로토콜.",
    "allergensTitle": "강아지에게 가장 흔한 5대 식이 알레르겐",
    "allergensIntro": "개의 음식 알레르기는 특정 단백질 분자에 대한 면역계의 과민 반응입니다. 임상 빈도순으로 나열하면 다음과 같습니다:",
    "allergensList": [
      {
        "name": "1. 공장식 사육 닭고기 (전체 사례의 60%)",
        "desc": "시중 펫푸드에 가장 흔하게 쓰이므로 체내 항체가 가장 많이 생성된 제1의 알레르겐입니다."
      },
      {
        "name": "2. 상업용 소고기 (전체 사례의 30%)",
        "desc": "예민한 아이들에게 심한 발 핥기(지간염)와 만성 외이도염을 일으키는 대표적 붉은 살코기."
      },
      {
        "name": "3. 유제품 및 치즈류",
        "desc": "성견은 젖당 분해 효소가 결핍되어 있어 삼투성 설사와 복부 팽만을 유발합니다."
      },
      {
        "name": "4. 밀 및 옥수수 글루텐",
        "desc": "장 점막 장벽을 손상시키고 체내 만성 염증과 효모균(말라세치아) 증식을 촉진합니다."
      },
      {
        "name": "5. 대두 및 콩류 단백질",
        "desc": "저가 충전재로 자주 쓰이지만 장내 이상 발효와 피부 가려움증을 유발합니다."
      }
    ],
    "eliminationTitle": "수의학 표준 8주 배제 식이 시험 (엘리미네이션 다이어트)",
    "eliminationSteps": [
      {
        "step": "1단계",
        "title": "단 한 번도 먹어본 적 없는 신기 단백질 선정",
        "desc": "사슴고기, 토끼고기, 캥거루고기 등 지금까지 한 번도 접해보지 않은 단일 육류와 단호박 같은 소화 잘되는 단일 탄수화물로 제한합니다."
      },
      {
        "step": "2단계",
        "title": "엄격한 교차 오염 차단 (연속 8주)",
        "desc": "8주 동안 오직 지정된 단일 식단과 물만 급여합니다. 시중 간식, 식탁 잔반, 향료가 첨가된 영양제도 전면 금지합니다."
      },
      {
        "step": "3단계",
        "title": "원인 물질 단일 재도전 시험",
        "desc": "가려움증이 완전히 가라앉으면, 의심되는 단백질(예: 닭고기)을 7일간 소량 먹여 반응을 살핍니다. 증상이 재발하면 알레르기가 확진됩니다."
      }
    ],
    "novelTitle": "추천 저알레르기 신기 단백질 (Novel Proteins)",
    "novelProteins": [
      {
        "name": "사슴고기 (베니슨)",
        "desc": "지방이 적고 영양 밀도가 높으며 개들이 항체를 거의 가지고 있지 않은 훌륭한 붉은 고기."
      },
      {
        "name": "토끼고기",
        "desc": "알레르기 유발 가능성이 극히 낮고 아미노산 조성이 뛰어나며 소화 흡수율이 우수합니다."
      },
      {
        "name": "오리고기",
        "desc": "일반 닭고기에 과민 반응을 보이는 아이들을 위한 안전하고 기호성 높은 대체 조류 육류."
      },
      {
        "name": "캥거루고기",
        "desc": "야생에서 서식하여 지방 함량이 2% 내외로 극히 낮고 청정한 최고급 저알레르기 단백질."
      }
    ]
  },
  "calculator": {
    "eyebrow": "100% 무료 // 수의학적 급여량 & 칼로리 계산기",
    "noticeTitle": "안내사항:",
    "noticeText": "본 계산기는 영양학적 교육 및 참고용입니다. 수의사의 임상 진료를 대신할 수 없습니다.",
    "heroTitle": "수의 영양 맞춤 강아지 일일 급여량 및 칼로리 계산기",
    "heroSubtitle": "반려견의 체중, 연령, 활동량, 체형(BCS)을 입력하여 과학적 휴지기 대사량(RER)과 유지 에너지 요구량(MER), 끼니별 정밀 급여량(g)을 확인하세요."
  },
  "breeds": {
    "eyebrow": "견종별 맞춤 영양 가이드 // 수의학 권장 급여량",
    "targetWeight": "목표 체중",
    "dailyCalories": "일일 권장 칼로리",
    "freshDaily": "자연 화식 1일량",
    "kibbleDaily": "건식 사료 1일량",
    "cups": "컵",
    "reqsTitle": "{name} 견종의 영양 요구량 및 특성",
    "reqsIntro": "평균 체중이 {w0}~{w1} lbs(약 {Math.round(w0*0.453)}~{Math.round(w1*0.453)} kg)인 {category} 체급의 {name} 견종은 고유의 체질에 맞는 영양 밸런스가 필요합니다:",
    "predispositionsTitle": "주의해야 할 체질 및 건강 소인:",
    "feedingRoutineTitle": "권장 식사 루틴:",
    "feedingRoutineDesc": "성견 {name}은 하루 2회(아침 50%, 저녁 50%)로 나누어 규칙적으로 급여하세요. 항상 깨끗한 물을 준비해 주시고, 건식 사료를 먹일 때는 따뜻한 뼈 육수나 미온수를 부어 불려주면 신장 결석을 예방할 수 있습니다.",
    "ctaTitle": "{name} 맞춤형 식단 플랜 생성하기",
    "ctaSubtitle": "자견기, 성견, 노령견 단계와 실제 체중, 활동량, 중성화 여부에 맞는 정밀 급여량을 계산해 보세요.",
    "ctaBtn": "{name} 계산기 시작하기 →",
    "faqTitle": "{name} 식단 관련 자주 묻는 질문",
    "faqSubtitle": "적정 식사 횟수, 체중 관리법, 추천 식재료 안내."
  },
  "comparisonTable": {
    "eyebrow": "임상 비교 // 자연 화식이 건식 사료보다 우수한 과학적 이유",
    "title": "자연 화식 vs 일반 건식 사료 (키블) 영양 비교",
    "subtitle": "체내 소화 흡수율, 조리 가공 온도, 장기적 비용에 대한 객관적인 데이터 비교.",
    "scrollHint": "↔ 표를 좌우로 스크롤하여 확인하세요",
    "colMetric": "영양 분석 항목",
    "colDfp": "✨ DogFoodPlanner 홈메이드",
    "colSubs": "화식 정기구독 서비스",
    "colKibble": "일반 건식 사료 (키블)",
    "rows": [
      {
        "metric": "조리 및 가공 온도",
        "dfp": "70℃ 저온 스팀 또는 생식 효소",
        "subs": "급속 냉동 레토르트 가열",
        "kibble": "200℃ 이상의 초고온 익스트루더 압출"
      },
      {
        "metric": "순 탄수화물 함량",
        "dfp": "3.5% 미만 (필수 식이섬유 채소만)",
        "subs": "10% ~ 15%",
        "kibble": "45% ~ 60% (전분질 증량 충전재)"
      },
      {
        "metric": "천연 생체 수분 함유량",
        "dfp": "70% ~ 75% (신장을 지키는 필수 수분)",
        "subs": "70% ~ 75%",
        "kibble": "8% ~ 10% (만성 미세 탈수 위험)"
      },
      {
        "metric": "원재료 배합의 투명성",
        "dfp": "100% 정밀 그램(g)과 배합비 공개",
        "subs": "독자 배합 (세부 그램 비공개)",
        "kibble": "분할 표기 및 모호한 육골분 표기"
      },
      {
        "metric": "월평균 예상 식비 (10kg 반려견 기준)",
        "dfp": "약 8만 ~ 12만 원 (직접 조리)",
        "subs": "약 25만 ~ 38만 원 / 월",
        "kibble": "약 5만 ~ 9만 원 / 월"
      }
    ]
  },
  "faqPage": {
    "badge": "나레ッジ 베이스 // 수의사 검증 40여 개 답변",
    "exploreHubsTitle": "전문 영양 심층 가이드 살펴보기",
    "exploreHubsSubtitle": "반려견의 건강수명과 활력을 높이고자 하는 보호자님들을 위한 전문 분야별 가이드.",
    "cardBestFood": "자연 화식, 생식 BARF, 고단백 사료, 장이 예민한 아이를 위한 푸드 완벽 비교.",
    "cardCalc": "반려견의 안정시 대사량(RER)과 유지 칼로리를 바탕으로 한 정밀 급여량 계산기.",
    "cardRecipes": "필수 칼슘 균형을 완벽히 맞춘 저온 조리 화식 및 80-10-10 생식 레시피.",
    "cardAllergies": "저알레르기 신기 단백질 선택법과 8주간의 배제 식이 시험 프로토콜.",
    "cardToxic": "반려견에게 치명적인 위험 음식 총정리 및 안전한 과일·채소 급여 기준.",
    "cardBrands": "블루 버팔로, 뉴트리쉬, 퓨어밸런스, 올리 등 인기 사료 브랜드 객관적 리뷰."
  },
  "faqSingle": {
    "reviewedBy": "검증: 수의 임상 영양사",
    "updated": "최신 업데이트: 2026년",
    "directQuickAnswer": "핵심 요약 답변",
    "clinicalAnalysis": "수의 임상 영양학적 상세 분석",
    "topics": "관련 주제:",
    "ctaBadge": "🐾 무료 반려견 영양 엔진",
    "ctaTitle": "우리 강아지에게 필요한 정확한 칼로리와 식사량을 계산하세요",
    "ctaSubtitle": "수의학 계산기를 사용하여 대사 소비량(RER/MER)을 확인하고 맞춤 화식 또는 생식 급여량을 확인해 보세요.",
    "ctaBtn": "지금 급여량 계산하기 →",
    "relatedTitle": "관련 수의 영양학 Q&A",
    "readAnswer": "답변 전체 읽기 →"
  }
},
  it: {
  "about": {
    "missionBadge": "LA NOSTRA MISSION // NUTRIZIONE CANINA CLINICA",
    "whyTitle": "Perché è Nato DogFoodPlanner",
    "whyP1": "Per decenni il mercato industriale del pet food ha operato come una scatola nera. Le crocchette estruse a oltre 200°C distruggono vitamine naturali, ossidano gli acidi grassi essenziali omega e riempiono i sacchi con fino al 60% di amidi ad alto indice glicemico.",
    "whyP2": "Allo stesso tempo, i servizi di cibo fresco in abbonamento chiedono oltre 300€ al mese per semplici tagli di carne e verdure. DogFoodPlanner supera questo ostacolo. Offriamo gratuitamente gli esatti algoritmi matematici utilizzati dai nutrizionisti veterinari affinché ogni proprietario possa preparare a casa razioni fresche cotte a vapore, diete BARF o topper nutrienti a una frazione del costo.",
    "methodTitle": "La Nostra Metodologia Nutrizionale",
    "pillars": [
      {
        "tag": "01 // FORMULE NRC",
        "title": "Fabbisogno Energetico a Riposo (RER)",
        "desc": "Calcola il consumo metabolico basale esatto in base alla massa corporea esponenziale (70 × (kg)^0.75) invece di tabelle generiche per fasce di peso."
      },
      {
        "tag": "02 // STANDARD AAFCO E FEDIAF",
        "title": "Micronutrienti Biodisponibili",
        "desc": "Ogni razione bilancia rigorosamente il rapporto calcio-fosforo (da 1.2:1 a 1.4:1), gli acidi grassi EPA/DHA e la taurina essenziale."
      },
      {
        "tag": "03 // NESSUN COSTO NASCOSTO",
        "title": "100% Libero e Indipendente",
        "desc": "Non accettiamo sponsorizzazioni a pagamento di marchi e non nascondiamo i grammi delle ricette dietro abbonamenti con carta di credito."
      }
    ],
    "ctaTitle": "Pronto a Calcolare i Fabbisogni del Tuo Cane?",
    "ctaDesc": "Usa il nostro calcolatore interattivo, consulta le guide sulle allergie ed esplora le nostre recensioni veterinarie indipendenti.",
    "ctaBtn": "Avvia il Calcolatore Gratuito →"
  },
  "contact": {
    "eyebrow": "SUPPORTO E CONTATTO // RICHIESTE DIRETTE",
    "cards": [
      {
        "icon": "📧",
        "title": "Informazioni Generali",
        "desc": "Domande e suggerimenti:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🐾",
        "title": "Ricerca Nutrizionale",
        "desc": "Quesiti su formule e ricette:",
        "email": "hello@dogfoodplanner.com"
      },
      {
        "icon": "🛡️",
        "title": "Supporto Tecnico",
        "desc": "Segnalazione bug e calcoli:",
        "email": "hello@dogfoodplanner.com"
      }
    ],
    "formTitle": "Invia un Messaggio al Nostro Team Nutrizionale Veterinario",
    "formDesc": "Hai dubbi sulle formule caloriche NRC o desideri un chiarimento su una ricetta BARF? Rispondiamo entro 24 ore lavorative.",
    "nameLabel": "Il Tuo Nome",
    "namePlaceholder": "es. Marco Rossi",
    "emailLabel": "Il Tuo Indirizzo Email",
    "emailPlaceholder": "marco@example.it",
    "subjectLabel": "Argomento del Messaggio",
    "subjectOptions": [
      "Domanda Generale / Feedback",
      "Nutrizione Canina e Ricette",
      "Formula del Calcolatore",
      "Segnalazione di Errore"
    ],
    "messageLabel": "Il Tuo Messaggio",
    "messagePlaceholder": "Raccontaci del tuo cane (razza, peso, età) e come possiamo aiutarti...",
    "submitBtn": "Invia Messaggio →",
    "notice": "Avviso di Emergenza Veterinaria: Se il tuo cane manifesta sintomi acuti di avvelenamento o sofferenza severa, contatta immediatamente il pronto soccorso veterinario più vicino.",
    "faqTitle": "Cerchi risposte immediate?",
    "faqDesc": "Consulta la nostra raccolta di oltre 40 risposte veterinarie su inappetenza, dieta BARF, cibo per gatti e marche industriali.",
    "faqBtn": "Consulta Tutte le FAQ →"
  },
  "privacy": {
    "eyebrow": "INFORMATIVA SULLA PRIVACY // PROTEZIONE DATI",
    "lastUpdated": "Aggiornato a: Gennaio 2026",
    "intro": "Su DogFoodPlanner.com rispettiamo la tua privacy e proteggiamo i tuoi dati personali. Questa informativa descrive come gestiamo le informazioni.",
    "sections": [
      {
        "title": "1. Informazioni che non raccogliamo",
        "content": "I dati di salute del tuo cane appartengono a te. Non richiediamo alcuna registrazione, password né carta di credito per utilizzare il nostro calcolatore. Peso, razza e preferenze alimentari sono elaborati localmente nel tuo browser e non vengono salvati su server esterni."
      },
      {
        "title": "2. Dati tecnici anonimi di navigazione",
        "content": "I nostri server CDN registrano in modo anonimo i normali log di connessione (indirizzo IP anonimizzato, tipo di browser, pagina di provenienza e data/ora) per garantire la sicurezza del sito e prevenire attacchi informatici."
      },
      {
        "title": "3. Cookie e memoria locale (localStorage)",
        "content": "Utilizziamo la memoria locale del browser (localStorage) esclusivamente per ricordare la lingua scelta e conservare il piano alimentare attivo sul dispositivo, evitando di dover ricalcolare i dati a ogni aggiornamento."
      },
      {
        "title": "4. Link esterni e fonti scientifiche",
        "content": "Il nostro portale rimanda a studi scientifici peer-reviewed, standard AAFCO/FEDIAF e banche dati del NRC. Non siamo responsabili delle pratiche di riservatezza dei siti terzi."
      },
      {
        "title": "5. Protezione dei minori",
        "content": "I nostri contenuti e strumenti sono rivolti a persone adulte. Non raccogliamo consapevolmente informazioni di minori di 13 anni."
      },
      {
        "title": "6. Aggiornamenti e contatti",
        "content": "Questa policy può essere periodicamente aggiornata. Per ogni richiesta, scrivi a privacy@dogfoodplanner.com."
      }
    ]
  },
  "terms": {
    "eyebrow": "TERMINI E CONDIZIONI DI SERVIZIO",
    "lastUpdated": "Aggiornato a: Gennaio 2026",
    "intro": "Ti preghiamo di leggere attentamente questi Termini di Servizio prima di utilizzare DogFoodPlanner.com. L’accesso al sito implica la loro integrale accettazione.",
    "sections": [
      {
        "title": "1. Accettazione dei Termini",
        "content": "Accedendo e utilizzando DogFoodPlanner.com (il \"Sito\"), dichiari di aver letto, compreso e accettato i presenti Termini e Condizioni. Qualora non fossi d’accordo, ti invitiamo a interrompere immediatamente l’uso."
      },
      {
        "title": "2. Disclaimer Medico e Veterinario",
        "content": "Le informazioni, i calcolatori e le ricette presenti su DogFoodPlanner.com hanno finalità puramente educative e divulgative fondate sui modelli NRC e FEDIAF. NON costituiscono in alcun modo diagnosi clinica, consulenza medica o terapia personalizzata. Rivolgiti sempre a un medico veterinario o a un nutrizionista per animali prima di apportare cambiamenti radicali alla dieta del tuo cane."
      },
      {
        "title": "3. Utilizzo dei Calcolatori Interattivi",
        "content": "Tutti i calcoli calorici (RER e MER) e i grammi raccomandati rappresentano stime matematiche teoriche. Il metabolismo reale varia in base a sterilizzazione, clima e fattori genetici. È dovere del proprietario verificare il Body Condition Score (BCS) e calibrare le dosi."
      },
      {
        "title": "4. Sicurezza delle Diete Casalinghe e Integrazione del Calcio",
        "content": "La preparazione di cibo casalingo o crudo impone la copertura totale di tutti i micronutrienti. Nutrire i cani con sola carne disossata e carboidrati senza integrazione di calcio causa demineralizzazione ossea grave in pochi mesi. L’utente assume la piena responsabilità della formulazione dei pasti."
      },
      {
        "title": "5. Diritti di Proprietà Intellettuale",
        "content": "Tutti i contenuti, i codici dei calcolatori, le interfacce grafiche e gli articoli su DogFoodPlanner.com sono protetti da copyright e appartengono in via esclusiva a DogFoodPlanner."
      },
      {
        "title": "6. Limitazione di Responsabilità",
        "content": "DogFoodPlanner.com e i suoi autori non saranno responsabili per eventuali danni diretti o indiretti derivanti dall’utilizzo delle informazioni e degli strumenti messi a disposizione."
      }
    ]
  },
  "bestFood": {
    "eyebrow": "GUIDA COMPLETA // MIGLIOR CIBO PER CANI 2026",
    "rankingsTitle": "Quali Sono i 5 Cibi Più Sani per Cani nel 2026?",
    "rankingsIntro": "La ricerca veterinaria sulla longevità canina conferma che una lavorazione termica minima e un’idratazione biologica superiore al 70% sono i due fattori più determinanti per la vitalità e la salute dei reni.",
    "rankings": [
      {
        "rank": "01",
        "title": "Cibo Fresco Casalingo Cotto a Bassa Temperatura di Grado Umano",
        "score": "98/100",
        "pros": "Vera carne e verdure cotte dolcemente a 70°C. Mantiene oltre il 70% di idratazione naturale, enzimi attivi e vitamine intatte.",
        "cons": "Richiede conservazione in frigo o freezer. Costo leggermente superiore alle crocchette da supermercato."
      },
      {
        "rank": "02",
        "title": "Dieta Cruda Ancestrale BARF 80-10-10",
        "score": "95/100",
        "pros": "Proporzione carnivora naturale: 80% polpa, 10% ossa polpose, 10% organi. Ideale per la salute dentale e massa magra tonica.",
        "cons": "Richiede igiene scrupolosa nella manipolazione e un bilanciamento rigoroso del calcio."
      },
      {
        "rank": "03",
        "title": "Cibo Crudo Liofilizzato e Disidratato ad Aria",
        "score": "91/100",
        "pros": "Unisce la ricchezza nutrizionale della carne cruda alla comodità della conservazione a temperatura ambiente.",
        "cons": "Va reidratato con acqua tiepida o brodo di ossa prima della somministrazione."
      },
      {
        "rank": "04",
        "title": "Crocchette ad Alto Contenuto Proteico Senza Cereali o Grani Antichi",
        "score": "78/100",
        "pros": "Pratiche, a lunga conservazione e sostenibili per famiglie con cani di grossa taglia.",
        "cons": "Estrusione a oltre 200°C, solo 8-10% di umidità e 40-50% di amidi amidacei."
      },
      {
        "rank": "05",
        "title": "Diete Veterinarie Terapeutiche da Prescrizione",
        "score": "72/100",
        "pros": "Formulate specificamente per insufficienze renali, epatopatie o calcoli di struvite accertati.",
        "cons": "Frequente impiego di sottoprodotti vegetali; richiedono prescrizione medica."
      }
    ],
    "buyerGuideTitle": "4 Regole d’Oro per Scegliere il Miglior Alimento",
    "buyerRules": [
      {
        "title": "1. Carne Animale Specifica al 1° Posto negli Ingredienti",
        "desc": "Cerca «Tacchino disossato», «Manzo» o «Salmone fresco» invece di generiche «farine di carne»."
      },
      {
        "title": "2. Elevata Umidità Biologica (>70%)",
        "desc": "Le sole crocchette secche provocano una disidratazione cronica latente. Aggiungi sempre brodi o cibi freschi."
      },
      {
        "title": "3. Zero Conservanti Chimici Sintetici",
        "desc": "Evita categoricamente additivi come BHA, BHT, etossichina e coloranti sintetici."
      },
      {
        "title": "4. Carboidrati Moderati (<25%)",
        "desc": "I cani non possiedono amilasi salivare. Troppi amidi affaticano il pancreas e favoriscono il sovrappeso."
      }
    ],
    "ctaTitle": "Calcola la Dose Giornaliera Esatta per il Tuo Cane",
    "ctaDesc": "Che tu scelga cibo fresco, dieta BARF o crocchette premium: scopri i grammi giornalieri esatti e il fabbisogno calorico.",
    "ctaBtn": "Calcola la Razion Quotidiana Ora →"
  },
  "recipes": {
    "eyebrow": "RICETTE CASALINGHE PER CANI // FORMULE NRC E AAFCO",
    "heroTitle": "Ricette Veterinarie per Cibo Casalingo per Cani",
    "heroSubtitle": "Istruzioni dettagliate passo-passo per preparare a casa razioni cotte a vapore bilanciate e diete crude ancestrali BARF 80-10-10.",
    "calciumWarningTitle": "La Regola d’Oro del Fatto in Casa: Il Bilanciamento del Calcio",
    "calciumWarningDesc": "La polpa muscolare è ricca di fosforo e quasi priva di calcio (rapporto 1:20). Alimentare un cane solo con carne e riso senza calcio provoca demineralizzazione scheletrica severa in pochi mesi. Aggiungi sempre 1/2 cucchiaino raso di polvere di guscio d’uovo purificata (circa 900 mg di calcio elementare) ogni 450 g di carne senza ossa per garantire il rapporto ottimale Calcio/Fosforo di 1.2:1.",
    "recipesList": [
      {
        "tag": "COTTURA DOLCE",
        "title": "Ricetta 1: Tacchino a Vapore con Zucca Prebiotica (Ideale per Stomaci Delicati)",
        "desc": "Perfetta per cani con digestione sensibile, feci molli o intolleranze al pollo da allevamento intensivo.",
        "ingredients": [
          "Macinato magro di tacchino — 65% (circa 900 g)",
          "Cuori di tacchino o manzo (Fonte naturale di taurina) — 10% (circa 140 g)",
          "Purea di zucca cotta al naturale (Fibre solubili) — 10% (circa 140 g)",
          "Spinacini e zucchine cotti a vapore tritati — 10% (circa 140 g)",
          "Olio di salmone selvaggio d’Alaska (EPA/DHA) — 2% (1.5 cucchiai)",
          "Farina fine di guscio d’uovo (Calcio) — 3% (1 cucchiaino raso)"
        ],
        "prep": "Cuoci delicatamente il tacchino e i cuori a fuoco basso fino a leggera cottura (70°C). Cuoci le verdure a vapore e frullale con la zucca. Amalgama tutto e lascia raffreddare completamente. Aggiungi l’olio di salmone e il calcio a freddo. Congela in porzioni singole."
      },
      {
        "tag": "BARF CRUDA",
        "title": "Ricetta 2: Dieta Ancestrale BARF 80-10-10 Manzo & Anatra",
        "desc": "Alimentazione cruda biologicamente appropriata per cani adulti sani dotati di una normale acidità gastrica.",
        "ingredients": [
          "Carne magra di manzo da pascolo — 70%",
          "Cuore di manzo (Ricco di L-Carnitina e CoQ10) — 10%",
          "Colli d’anatra crudi o carcasse — 10% (Osso polposo e calcio)",
          "Fegato di manzo (Vitamina A e complesso B) — 5%",
          "Rene o milza di manzo (Organo secretore essenziale) — 5%"
        ],
        "prep": "Taglia carne e cuore a bocconi adeguati alla taglia. Pesa accuratamente gli organi con bilancia digitale. Congela tutte le porzioni per almeno 3 settimane a -20°C prima di scongelarle e somministrarle."
      },
      {
        "tag": "TOPPER SUPERFOOD",
        "title": "Ricetta 3: Topper Antiossidante 80/20 per Arricchire le Crocchette",
        "desc": "Integrazione fresca formulata per sostituire il 20% delle calorie giornaliere delle normali crocchette.",
        "ingredients": [
          "Uova fresche biologiche in camicia — 40%",
          "Germogli di broccoli al vapore e mirtilli neri — 30%",
          "Brodo di ossa di manzo fatto sobbollire a lungo — 20%",
          "Semi di canapa bio e farina di alga kelp — 10%"
        ],
        "prep": "Cuoci le uova per 4 minuti lasciando il tuorlo morbido. Cuoci a vapore le verdure per 3 minuti. Frulla con il brodo tiepido e i mirtilli. Aggiungi da 2 a 4 cucchiai al giorno nella ciotola delle crocchette."
      }
    ],
    "calciumGuideTitle": "Fonti Sicure di Calcio per l’Alimentazione Casalinga",
    "calciumGuideItems": [
      {
        "title": "Farina di Guscio d’Uovo",
        "ratio": "1/2 cucchiaino ogni 450 g di carne disossata",
        "desc": "95% carbonato di calcio puro. Facile da produrre lavando, asciugando in forno e polverizzando i gusci."
      },
      {
        "title": "Ossa Polpose Crude Commestibili",
        "ratio": "10% del peso totale della ciotola",
        "desc": "Colli d’anatra o ali di pollo crude. Mai cuocere le ossa, che diventerebbero rigide e pericolose."
      },
      {
        "title": "Farina d’Ossa Veterinaria (Bone Meal)",
        "ratio": "Secondo le indicazioni in etichetta",
        "desc": "Idrossiapatite microcristallina che apporta calcio e fosforo nel perfetto rapporto naturale di 2:1."
      }
    ]
  },
  "toxic": {
    "eyebrow": "ALIMENTI TOSSICI PER CANI // GUIDA ALLE EMERGENZE",
    "dangerTitle": "I Cibi Domestici Più Pericolosi e Letali per il Cane",
    "dangerIntro": "Alcuni alimenti innocui per noi contengono tossine che l’organismo del cane non può smaltire, portando a collassi d’organo irreversibili.",
    "dangerList": [
      {
        "name": "Cioccolato & Cacao",
        "toxin": "Teobromina e Caffeina",
        "symptoms": "Vomito, respiro affannoso, tachicardia, tremori muscolari, convulsioni, arresto cardiaco.",
        "risk": "ALTO O LETALE"
      },
      {
        "name": "Uva, Uvetta e Uva Passa",
        "toxin": "Acido Tartarico",
        "symptoms": "Letargia, disidratazione, blocco renale e insufficienza acuta in 24-72 ore.",
        "risk": "ESTREMAMENTE LETALE"
      },
      {
        "name": "Xilitolo (Dolcificante / E967)",
        "toxin": "Poliolo Sintetico",
        "symptoms": "Rilascio massiccio di insulina, ipoglicemia fulminea, atassia, necrosi epatica acuta.",
        "risk": "MASSIMA URGENZA"
      },
      {
        "name": "Cipolla, Aglio, Porri e Erba Cipollina",
        "toxin": "Disolfuro di N-propile",
        "symptoms": "Distruzione dei globuli rossi, anemia emolitica, gengive pallide, urine scure.",
        "risk": "TOSSICITÀ CUMULATIVA"
      },
      {
        "name": "Noci di Macadamia",
        "toxin": "Neurotossina non identificata",
        "symptoms": "Debolezza del treno posteriore, febbre alta, vomito, rigidità muscolare dolorosa.",
        "risk": "MODERATO O SEVERO"
      },
      {
        "name": "Ossa Cotte di Qualsiasi Tipo",
        "toxin": "Rischio Meccanico di Schegge",
        "symptoms": "Perforazione gastrointestinale, emorragia interna, peritonite, blocco chirurgico.",
        "risk": "URGENZA CHIRURGICA"
      }
    ],
    "emergencyTitle": "Cosa Fare in Caso di Avvelenamento Sospetto",
    "emergencySteps": [
      "1. Agisci Subito: Accerta l’alimento ingerito, la confezione, la quantità approssimativa e l’ora precisa.",
      "2. NON Provocare il Vomito senza Parere Veterinario: Prodotti corrosivi o frammenti d’ossa lesionano l’esofago durante la risalita.",
      "3. Chiama Immediatamente una Clinica Veterinaria: Contatta senza indugio un pronto soccorso veterinario attivo 24 ore."
    ],
    "safeTitle": "Frutta e Verdura 100% Sicure e Salutari",
    "safeIntro": "Questi alimenti naturali forniscono antiossidanti, fibre solubili e vitamine utili alla salute del cane:",
    "safeFoods": [
      {
        "name": "Mirtilli Neri",
        "benefit": "Ricchi di antociani e polifenoli ad alto potere protettivo cellulare."
      },
      {
        "name": "Purea di Zucca",
        "benefit": "Ottima fonte di fibra solubile per regolarizzare sia diarrea che costipazione."
      },
      {
        "name": "Carote",
        "benefit": "Snack croccante e ipocalorico, ricco di beta-carotene, utile alla masticazione."
      },
      {
        "name": "Fagiolini al Vapore",
        "benefit": "Verdura verde a basso indice glicemico ideale per cani in sovrappeso."
      },
      {
        "name": "Mele (Senza Semi né Torsolo)",
        "benefit": "Apporto naturale di vitamina C, vitamina A e pectina alleata dell’intestino."
      }
    ]
  },
  "brands": {
    "eyebrow": "RECENSIONI MARCHE CROCCHETTE E STORICO RICHIAMI",
    "heroTitle": "Analisi delle Marche di Cibo per Cani e Storico Richiami",
    "heroSubtitle": "Recensioni imparziali formulate da esperti veterinari su trasparenza degli ingredienti, conformità delle etichette e ritiri dal commercio.",
    "brandsList": [
      {
        "name": "Blue Buffalo",
        "grade": "Voto: B+",
        "pros": "Carne disossata reale al 1° posto; senza mais, grano o soia; crocchette LifeSource Bits ricche di vitamine.",
        "cons": "Contenuto di carboidrati elevato (45-50%); richiami storici FDA per umidità eccessiva e ipervitaminosi D.",
        "verdict": "Crocchette sopra la media. Consigliamo di integrare con un 20% di alimenti freschi per idratare i reni."
      },
      {
        "name": "Rachael Ray Nutrish",
        "grade": "Voto: C+ / B-",
        "pros": "Economico e facilmente reperibile; le linee Peak e Dish contengono percentuali maggiori di carne reale.",
        "cons": "Le linee base impiegano concentrati proteici di piselli e glutine di mais; citata in indagini FDA passate.",
        "verdict": "Scelta economica discreta nelle linee superiori, verificando che non vi sia frazionamento di legumi in etichetta."
      },
      {
        "name": "Pure Balance",
        "grade": "Voto: B (Miglior Scelta Budget)",
        "pros": "Ottimo rapporto qualità/prezzo; ricette incentrate sulla carne senza coloranti artificiali o farine scadenti.",
        "cons": "Produzione esternalizzata; quota moderata di carboidrati.",
        "verdict": "Una delle alternative più oneste e affidabili nella fascia di prezzo da supermercato."
      },
      {
        "name": "Ollie Fresh Dog Food",
        "grade": "Voto: A (Eccellenza)",
        "pros": "Ingredienti 100% di grado umano; cottura dolce a bassa temperatura; porzioni singole su misura.",
        "cons": "Abbonamento mensile impegnativo (180€-350€/mese); richiede spazio nel congelatore.",
        "verdict": "Punto di riferimento per il benessere metabolico, brillantezza del mantello e salute dell’apparato digerente."
      },
      {
        "name": "Open Farm",
        "grade": "Voto: A-",
        "pros": "Trasparenza totale delle filiere; carni da allevamenti certificati nel rispetto degli animali e pesce sostenibile.",
        "cons": "Prezzo di fascia alta; distribuzione limitata nei negozi tradizionali.",
        "verdict": "Scelta d’eccellenza per chi ricerca sostenibilità etica e zero farine di sottoprodotti."
      }
    ],
    "recallsTitle": "Come Leggere le Notifiche di Richiamo (Recalls)",
    "recallsDesc": "Gli allarmi sanitari si suddividono in tre classi: Classe I (rischio grave o letale, es. Salmonella o eccesso di Vitamina D), Classe II (disturbi transitori) e Classe III (difformità formali in etichetta). Controlla sempre il numero di lotto stampato sul sacco.",
    "methodTitle": "I Nostri 4 Criteri di Valutazione",
    "methodPillars": [
      {
        "title": "1. Chiarezza delle Carni",
        "desc": "Muscolo intero chiaramente indicato anziché generiche farine di carne."
      },
      {
        "title": "2. Tasso di Carboidrati",
        "desc": "Mantenere gli amidi sotto il 40% per prevenire l’obesità canina."
      },
      {
        "title": "3. Tracciabilità d’Origine",
        "desc": "Filiere etiche certificate e ingredienti privi di OGM."
      },
      {
        "title": "4. Rigore Igienico Sanitario",
        "desc": "Controlli batteriologici regolari in laboratori terzi indipendenti."
      }
    ]
  },
  "allergies": {
    "eyebrow": "DERMATOLOGIA CLINICA // ALLERGIE ALIMENTARI E DIETE AD ESCLUSIONE",
    "heroTitle": "Miglior Cibo per Cani con Allergie e Stomaco Sensibile",
    "heroSubtitle": "Guida dermatologica veterinaria a intolleranze alimentari, proteine novità ipoallergeniche e dieta di esclusione di 8 settimane.",
    "allergensTitle": "I 5 Più Comuni Allergeni Alimentari nel Cane",
    "allergensIntro": "Le allergie alimentari canine sono reazioni immunitarie anomale scatenate da proteine dietetiche. In ordine di frequenza clinica:",
    "allergensList": [
      {
        "name": "1. Pollo da Allevamento Intensivo (60% dei casi)",
        "desc": "Onnipresente nel pet food commerciale, è l’allergene alimentare più frequente in assoluto."
      },
      {
        "name": "2. Manzo Commerciale (30% dei casi)",
        "desc": "Proteina rossa diffusa che scatena spesso forte prurito alle zampe e otiti recidivanti."
      },
      {
        "name": "3. Latticini e Formaggi",
        "desc": "I cani adulti perdono gli enzimi lattasi, manifestando coliche gassose e diarrea."
      },
      {
        "name": "4. Glutine di Frumento e Mais",
        "desc": "Proteine vegetali che irritano la barriera intestinale e alimentano la proliferazione di lieviti."
      },
      {
        "name": "5. Soia e Legumi",
        "desc": "Riempitivi proteici a basso costo che causano fermentazioni anomale e prurito."
      }
    ],
    "eliminationTitle": "Il Protocollo Veterinario della Dieta ad Esclusione di 8 Settimane",
    "eliminationSteps": [
      {
        "step": "Fase 1",
        "title": "Scegliere una Sola Proteina Novità",
        "desc": "Passa il cane a una carne che non ha mai assaggiato prima (Cervo, Coniglio o Canguro) abbinata a un vegetale leggero come la zucca."
      },
      {
        "step": "Fase 2",
        "title": "Tolleranza Zero (8 Settimane Rigorose)",
        "desc": "Per 8 settimane consecutive fornisci solo ed esclusivamente questo alimento. Vietati snack commerciali, bocconcini e avanzi di cucina."
      },
      {
        "step": "Fase 3",
        "title": "Reintroduzione Controllata per Prova",
        "desc": "Se il prurito scompare, reintroduci un solo ingrediente sospetto per 7 giorni. La ricomparsa dei sintomi confermerà l’allergia."
      }
    ],
    "novelTitle": "Proteínas Novità Ipoallergeniche Consigliate",
    "novelProteins": [
      {
        "name": "Carne di Cervo / Capriolo",
        "desc": "Carne rossa magra e altamente digeribile verso cui i cani non hanno anticorpi pregressi."
      },
      {
        "name": "Carne di Coniglio",
        "desc": "Proteina ipoallergenica d’eccellenza, leggera e dal profilo aminoacidico ideale."
      },
      {
        "name": "Carne d’Anatra",
        "desc": "Ottima e saporita alternativa per cani intolleranti alle carni di pollo convenzionali."
      },
      {
        "name": "Carne di Canguro",
        "desc": "Tra le carni selvatiche più pure e povere di grassi disponibili in dermatologia veterinaria."
      }
    ]
  },
  "calculator": {
    "eyebrow": "100% GRATUITO // CALCOLATORE DEL FABBISOGNO CALORICO",
    "noticeTitle": "Nota Importante:",
    "noticeText": "Fornito a scopo informativo ed educativo. Non sostituisce una consulenza o diagnosi veterinaria.",
    "heroTitle": "Calcolatore Veterinario del Fabbisogno Calorico per Cani",
    "heroSubtitle": "Determina l’esatto fabbisogno calorico giornaliero del tuo cane (RER e MER) e calcola i grammi raccomandati per pasto in base a peso, età, attività e silhouette."
  },
  "breeds": {
    "eyebrow": "GUIDA NUTRIZIONALE PER RAZZA // LINEE GUIDA VETERINARIE",
    "targetWeight": "Peso Ideale",
    "dailyCalories": "Calorie Giornaliere",
    "freshDaily": "Cibo Fresco / Giorno",
    "kibbleDaily": "Crocchette / Giorno",
    "cups": "tazze",
    "reqsTitle": "Fabbisogni Nutrizionali per il {name}",
    "reqsIntro": "Come cane di categoria {category} con un peso medio di {w0}–{w1} lbs (circa {Math.round(w0*0.453)}–{Math.round(w1*0.453)} kg), il {name} necessita di un profilo nutrizionale dedicato:",
    "predispositionsTitle": "Sensibilità e Predisposizioni di Razza:",
    "feedingRoutineTitle": "Routine di Alimentazione Consigliata:",
    "feedingRoutineDesc": "Distribuisci i pasti del tuo {name} adulto due volte al giorno (50% al mattino e 50% alla sera). Assicura sempre acqua fresca. Se somministri crocchette, reidratale con brodo di ossa tiepido per sostenere i reni.",
    "ctaTitle": "Personalizza il Piano Alimentare per il Tuo {name}",
    "ctaSubtitle": "Imposta età esatta (cucciolo, adulto o senior), peso reale, livello di esercizio fisico e forma fisica con il calcolatore gratuito.",
    "ctaBtn": "Calcola per {name} →",
    "faqTitle": "Domande Frequenti sull’Alimentazione del {name}",
    "faqSubtitle": "Dosi consigliate, numero di pasti e ingredienti ottimali."
  },
  "comparisonTable": {
    "eyebrow": "CONFRONTO CLINICO // CIBO FRESCO NATURALE VS CROCCHETTE",
    "title": "Perché il Cibo Naturale Supera le Crocchette",
    "subtitle": "Un’analisi comparativa su biodisponibilità, temperature di lavorazione e costi reali sostenuti.",
    "scrollHint": "↔ Scorri la tabella in orizzontale",
    "colMetric": "Parametro Nutrizionale",
    "colDfp": "✨ DogFoodPlanner Casalingo",
    "colSubs": "Abbonamenti Fresco",
    "colKibble": "Crocchette Secche",
    "rows": [
      {
        "metric": "Metodo di Cottura",
        "dfp": "Vapore Dolce (70°C) o Crudo Attivo",
        "subs": "Cottura Industriale Surgelata",
        "kibble": "Estrusione ad Alta Temperatura (200°C)"
      },
      {
        "metric": "Carboidrati Netti",
        "dfp": "< 3.5% (Solo verdure selezionate)",
        "subs": "10% – 15%",
        "kibble": "45% – 60% (Amidi di riempimento)"
      },
      {
        "metric": "Umidità Biologica",
        "dfp": "70% – 75% (Idratazione renale vitale)",
        "subs": "70% – 75%",
        "kibble": "8% – 10% (Disidratazione subclinica)"
      },
      {
        "metric": "Trasparenza delle Dosi",
        "dfp": "100% Grammi e percentuali svelati",
        "subs": "Formula brevettata (grammi nascosti)",
        "kibble": "Ingredienti frazionati e farine miste"
      },
      {
        "metric": "Costo Medio Mensile (Cane 23 kg)",
        "dfp": "75€ – 115€ (Cucinato a casa)",
        "subs": "260€ – 360€ / mese",
        "kibble": "50€ – 85€ / mese"
      }
    ]
  },
  "faqPage": {
    "badge": "ARCHIVIO CONOSCENZE // OLTRE 40 RISPOSTE VETERINARIE",
    "exploreHubsTitle": "Esplora i Nostri Dossier di Nutrizione Canina",
    "exploreHubsSubtitle": "Guide di approfondimento create per i proprietari attenti al benessere e alla longevità del loro cane.",
    "cardBestFood": "Confronto tra cibo fresco, BARF, crocchette ad alto tenore di carne e formule delicate.",
    "cardCalc": "Calcolatore scientifico RER e MER per calcolare le porzioni giornaliere in grammi.",
    "cardRecipes": "Ricette casalinghe cotte e BARF 80-10-10 con apporto controllato e sicuro di calcio.",
    "cardAllergies": "Scelta delle proteine ipoallergeniche, diete ad esclusione e flora batterica intestinale.",
    "cardToxic": "Elenco completo dei cibi tossici da evitare, frutta e verdura sicure e additivi dannosi.",
    "cardBrands": "Recensioni imparziali su Blue Buffalo, Nutrish, Pure Balance, Ollie e Open Farm."
  },
  "faqSingle": {
    "reviewedBy": "Revisionato da: Nutrizionista Veterinario Canino",
    "updated": "Aggiornato al: 2026",
    "directQuickAnswer": "Risposta Rapida Diretta",
    "clinicalAnalysis": "Analisi Clinica e Nutrizionale Approfondita",
    "topics": "Argomenti correlati:",
    "ctaBadge": "🐾 Motore Nutrizionale Canino Gratuito",
    "ctaTitle": "Calcola le Calorie e i Grammi Giornalieri per il Tuo Cane",
    "ctaSubtitle": "Usa il nostro calcolatore veterinario per conoscere il dispendio metabolico (RER/MER) e i grammi per pasti freschi o crudi.",
    "ctaBtn": "Calcola le Dosi Ora →",
    "relatedTitle": "Domande Veterinarie Correlate",
    "readAnswer": "Leggi la Risposta Completa →"
  }
},
};

export type PageTranslations = typeof PAGE_TRANSLATIONS.en;

export function getPageTranslations(lang: Lang): PageTranslations {
  return PAGE_TRANSLATIONS[lang] || PAGE_TRANSLATIONS.en;
}
