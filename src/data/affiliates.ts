/**
 * Affiliate product links for DogFoodPlanner.com
 * All links are Amazon affiliate links.
 * Keys are used to look up products by brand/ingredient name in components.
 */

export interface AffiliateProduct {
  name: string;
  url: string;
  /** Category used to group products on display */
  category: 'fresh-cooked' | 'premium-kibble' | 'budget-kibble' | 'raw-freeze-dried' | 'vet-rx' | 'omega-supplement' | 'calcium-supplement' | 'bone-broth' | 'anti-inflammatory' | 'sea-supplement' | 'whole-food';
}

export const AFFILIATE_PRODUCTS: Record<string, AffiliateProduct> = {

  // ── FRESH-COOKED / HUMAN-GRADE ──────────────────────────────────────────
  'ziwi-peak-beef-chicken-bundle': {
    name: 'ZIWI Peak Air-Dried Dog Food – Beef (16oz) + Air-Dried Dog Food – Chicken (16oz) Bundle',
    url: 'https://amzn.to/4gRp8FA',
    category: 'fresh-cooked',
  },
  'justfoodfordogs-chicken-white-rice': {
    name: 'JustFoodForDogs Pantry Fresh Wet Dog Food, Chicken & White Rice Recipe, 12.5 oz (Pack of 24)',
    url: 'https://amzn.to/4x9327I',
    category: 'fresh-cooked',
  },
  'ollie-chicken-apple-jerky-treats': {
    name: 'Ollie Chicken & Apple Jerky Dog Treats, 5 oz, Pack of 3',
    url: 'https://amzn.to/4x5989f',
    category: 'fresh-cooked',
  },

  // ── PREMIUM DRY KIBBLE ───────────────────────────────────────────────────
  'orijen-original-grain-free-23lb': {
    name: 'ORIJEN Grain Free WHOLEPREY Dry Dog Food Original Recipe, 23.5lb Bag',
    url: 'https://amzn.to/4xF5aFr',
    category: 'premium-kibble',
  },
  'orijen-amazing-grains-original-30lb': {
    name: 'ORIJEN Amazing Grains WHOLEPREY Dry Dog Food Original Recipe, 30lb Bag',
    url: 'https://amzn.to/4d04imi',
    category: 'premium-kibble',
  },
  'orijen-small-breed-4lb': {
    name: 'ORIJEN Grain Free WHOLEPREY Dry Dog Food Small Breed Recipe, 4lb Bag',
    url: 'https://amzn.to/3VdZ4gE',
    category: 'premium-kibble',
  },
  'acana-meadowland-4lb': {
    name: 'ACANA Highest Protein Grain Free Dry Dog Food Meadowland Recipe, 4.5lb Bag',
    url: 'https://amzn.to/469MSjm',
    category: 'premium-kibble',
  },
  'acana-wild-atlantic-25lb': {
    name: 'ACANA Highest Protein Dry Dog Food Wild Atlantic Recipe, 25lb Bag',
    url: 'https://amzn.to/4hdaPfO',
    category: 'premium-kibble',
  },
  'acana-appalachian-ranch-25lb': {
    name: 'ACANA Highest Protein Dry Dog Food Appalachian Ranch Recipe, 25lb',
    url: 'https://amzn.to/3UCKizZ',
    category: 'premium-kibble',
  },
  'open-farm-rawmix-front-range-20lb': {
    name: 'Open Farm RawMix Grain Free Dry Dog Food, Front Range Kibble, 20lb Bag',
    url: 'https://amzn.to/4hfhbKP',
    category: 'premium-kibble',
  },
  'open-farm-rawmix-open-prairie-20lb': {
    name: 'Open Farm RawMix Ancient Grains Dry Dog Food, Open Prairie Kibble, 20lb Bag',
    url: 'https://amzn.to/4x4GvsB',
    category: 'premium-kibble',
  },
  'open-farm-rawmix-wild-ocean-20lb': {
    name: 'Open Farm RawMix Grain Free Dry Dog Food, Wild Ocean Kibble, 20lb Bag',
    url: 'https://amzn.to/4xe0jtN',
    category: 'premium-kibble',
  },
  'fromm-adult-gold-15lb': {
    name: 'Fromm Adult Gold Premium Dry Dog Food - Chicken Recipe - 15 lb',
    url: 'https://amzn.to/4yHytr5',
    category: 'premium-kibble',
  },
  'fromm-large-breed-adult-gold-15lb': {
    name: 'Fromm Large Breed Adult Gold Premium Dry Dog Food - Chicken Recipe - 15 lb',
    url: 'https://amzn.to/4zZ3VCs',
    category: 'premium-kibble',
  },
  'stella-chewys-superblends-chicken-duck': {
    name: 'Stella & Chewy\'s SuperBlends Raw Blend Wholesome Grains Cage-Free Chicken & Duck Recipe with Superfoods, 3.25 lb Bag (Pack of 2)',
    url: 'https://amzn.to/4xeveWX',
    category: 'premium-kibble',
  },

  // ── BUDGET / MID-TIER KIBBLE ─────────────────────────────────────────────
  'blue-buffalo-wilderness-chicken-24lb': {
    name: 'Blue Buffalo Wilderness Chicken Adult Dry Dog Food, Grain-Free, 24 lb',
    url: 'https://amzn.to/4gVmqiw',
    category: 'budget-kibble',
  },
  'blue-buffalo-wilderness-salmon-24lb': {
    name: 'Blue Buffalo Wilderness Salmon Adult Dry Dog Food, Grain-Free, 24 lb',
    url: 'https://amzn.to/46DRjDg',
    category: 'budget-kibble',
  },
  'blue-buffalo-wilderness-chicken-4lb': {
    name: 'Blue Buffalo Wilderness Chicken Adult Dry Dog Food, Grain-Free, 4.5 lb',
    url: 'https://amzn.to/4zYiXs0',
    category: 'budget-kibble',
  },
  'nutrish-peak-variety-pack-wet': {
    name: 'Rachael Ray Nutrish Peak Grain Free Three Flavors Variety Pack Wet Dog Food, Case of 3.5 OZ Trays',
    url: 'https://amzn.to/4gCbmI6',
    category: 'budget-kibble',
  },
  'nutrish-beef-pea-brown-rice-28lb': {
    name: 'Rachael Ray Nutrish Dry Dog Food, Beef, Pea & Brown Rice, 28 lb Bag',
    url: 'https://amzn.to/4hcYoAI',
    category: 'budget-kibble',
  },
  'victor-chicken-brown-rice-5lb': {
    name: 'VICTOR Chicken Meal & Brown Rice Formula Dry Dog Food, 5 lb',
    url: 'https://amzn.to/4qYD8lC',
    category: 'budget-kibble',
  },

  // ── RAW / FREEZE-DRIED ───────────────────────────────────────────────────
  'stella-chewys-freeze-dried-chicken-5oz': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Dinner Patties - Chicken Recipe - High Protein Grain-Free Puppy & Dog Food - 5.5 oz',
    url: 'https://amzn.to/3Urs30p',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-freeze-dried-chicken-14oz': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Dinner Patties - Chicken Recipe - High Protein Grain-Free Puppy & Dog Food - 14 oz',
    url: 'https://amzn.to/4gDSJ6L',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-freeze-dried-red-meat-14oz': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Dinner Patties - Remarkable Red Meat Blend - High Protein Grain-Free Puppy & Dog Food - 14 oz',
    url: 'https://amzn.to/4cxez9v',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-freeze-dried-variety-5pack': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Dinner Patties Dog Food Variety Pack of 5 (Beef, Chicken, Duck, Lamb and Surf N\' Turf), 15 oz Each',
    url: 'https://amzn.to/4gCgdJp',
    category: 'raw-freeze-dried',
  },
  'primal-freeze-dried-chicken-5oz': {
    name: 'Primal Freeze Dried Raw Dog Food Nuggets, Chicken, 5.5 oz',
    url: 'https://amzn.to/4qX1MTK',
    category: 'raw-freeze-dried',
  },
  'primal-pronto-beef-16oz': {
    name: 'Primal Pronto Mini Nuggets, Freeze Dried Dog Food, Beef, 16 oz',
    url: 'https://amzn.to/4cqUh1l',
    category: 'raw-freeze-dried',
  },
  'primal-pronto-chicken-16oz': {
    name: 'Primal Pronto Mini Nuggets, Freeze Dried Dog Food, Chicken, 16 oz',
    url: 'https://amzn.to/3Ve1dZK',
    category: 'raw-freeze-dried',
  },

  // ── VETERINARY / PRESCRIPTION ────────────────────────────────────────────
  'hills-science-diet-large-breed-35lb': {
    name: 'Hill\'s Science Diet Large Breed Dry Dog Food, Adult 1-5 Formula, Chicken & Barley, 35 lb Bag',
    url: 'https://amzn.to/3SOmfNW',
    category: 'vet-rx',
  },
  'hills-science-diet-small-bites': {
    name: 'Hill\'s Science Diet Adult 1-6 Small Bites Dry Dog Food',
    url: 'https://amzn.to/469uW8x',
    category: 'vet-rx',
  },
  'royal-canin-vet-hydrolyzed-protein-25lb': {
    name: 'ROYAL CANIN Veterinary Diet Canine Hydrolyzed Protein Adult Dry Dog Food, 25.3 lb Bag',
    url: 'https://amzn.to/4ykV9Nk',
    category: 'vet-rx',
  },
  'purina-pro-plan-vet-ha-hydrolyzed-16lb': {
    name: 'Purina Pro Plan Veterinary Diets HA Hydrolyzed Dry Dog Food, 16.5 lb Bag',
    url: 'https://amzn.to/4iOBEIw',
    category: 'vet-rx',
  },
  'purina-pro-plan-vet-nf-kidney-25lb': {
    name: 'Purina Pro Plan Vet Diets NF Kidney Function Dry Dog Food, 25 lb Bag',
    url: 'https://amzn.to/4gHDGaE',
    category: 'vet-rx',
  },

  // ── OMEGA-3 / SALMON OIL SUPPLEMENTS ────────────────────────────────────
  'zesty-paws-salmon-oil-16oz': {
    name: 'Zesty Paws Salmon Oil for Dogs & Cats - Wild Alaskan Omega 3 Supplement, 16 oz',
    url: 'https://amzn.to/46HCJdW',
    category: 'omega-supplement',
  },
  'zesty-paws-salmon-oil-8oz': {
    name: 'Zesty Paws Salmon Oil for Dogs & Cats - Omega 3 Fish Oil Blend Pollock + Salmon Oil - Skin and Coat Support, 8.5oz',
    url: 'https://amzn.to/3VdKIge',
    category: 'omega-supplement',
  },
  'grizzly-salmon-oil-16oz': {
    name: 'Grizzly Wild Alaskan Salmon Oil Dog Food Supplement Omega 3 Fatty Acids, 16 oz',
    url: 'https://amzn.to/4xg2Wex',
    category: 'omega-supplement',
  },
  'grizzly-salmon-oil-32oz': {
    name: 'Grizzly Pet Products Salmon Plus Omega 3-6-9 Food Supplement for Dogs and Cats, 32 Ounce',
    url: 'https://amzn.to/4cvz8Dj',
    category: 'omega-supplement',
  },
  'nordic-naturals-omega3-pet-16oz': {
    name: 'Nordic Naturals Omega-3 Pet, Unflavored - 16 oz - 1380 mg Omega-3 Per Teaspoon - Fish Oil for Large to Very Large Dogs with EPA & DHA (Pack of 2)',
    url: 'https://amzn.to/4i9KfW3',
    category: 'omega-supplement',
  },

  // ── CALCIUM SUPPLEMENTS ──────────────────────────────────────────────────
  'eggshell-powder-8oz': {
    name: 'U.S.A. Eggshell Powder for Dogs/Cats, Finely Ground, Calcium Supplement, 8 oz',
    url: 'https://amzn.to/4haNVWy',
    category: 'calcium-supplement',
  },
  'eggshell-powder-12oz': {
    name: 'Pure U.S.A. Eggshell Powder for Dogs/Cats, Finely Ground, Calcium Supplement, 12 oz',
    url: 'https://amzn.to/4cwrUPk',
    category: 'calcium-supplement',
  },
  'prymal-pets-eggshell-calcium-12oz': {
    name: 'Prymal Pets Eggshell Calcium Powder Supplement for Dogs and Cats - 12 oz',
    url: 'https://amzn.to/4gSFde8',
    category: 'calcium-supplement',
  },
  'pets-friend-eggshellent-calcium-6oz': {
    name: 'Pet\'s Friend Eggshellent Calcium - Fine Eggshell Powder for Dogs and Cats - Strong Hip & Joint Supplement - No Additives - 6oz',
    url: 'https://amzn.to/4ha48v4',
    category: 'calcium-supplement',
  },
  'animal-essentials-sea-cal-12oz': {
    name: 'Animal Essentials Sea-Cal - Pure Seaweed Calcium Powder for Dogs with Magnesium, Joint Supplement for Dogs & Cats for Healthy Bones & Teeth, Joint Health, Vegan Icelandic Seaweed Calcium - 12 oz',
    url: 'https://amzn.to/4gRALwj',
    category: 'calcium-supplement',
  },

  // ── BONE BROTH ───────────────────────────────────────────────────────────
  'brutus-broth-chicken-liquid-6pack': {
    name: 'Brutus Broth Chicken Bone Broth for Dogs - Meal Topper with Glucosamine & Chondroitin, 16.9 FL Oz, Hydrating Wet Dog Food Topper Supports Hips and Joints',
    url: 'https://amzn.to/4zSd7Zb',
    category: 'bone-broth',
  },
  'brutus-broth-beef-liquid-2pack': {
    name: 'Brutus Broth Dog Food Topper - Instant Bone Broth Liquid for Adult Dogs - Supports Hip and Joint Function - Beef Flavor, Pack of 2',
    url: 'https://amzn.to/4d3fcHX',
    category: 'bone-broth',
  },
  'brutus-broth-chicken-powder-3oz': {
    name: 'Brutus Broth Dog Food Topper - Instant Bone Broth Powder for Dogs - Supports Hip and Joint Function - Chicken Flavor, 3.5 oz (Pack of 1)',
    url: 'https://amzn.to/4xF1frV',
    category: 'bone-broth',
  },
  'honest-kitchen-bone-broth-variety-3pack': {
    name: 'The Honest Kitchen Human Grade Bone Broth POUR OVERS Wet Toppers for Dogs (Variety Pack of 3), 5.5 oz',
    url: 'https://amzn.to/4zZ68xK',
    category: 'bone-broth',
  },
  'honest-kitchen-turkey-salmon-broth-12pack': {
    name: 'The Honest Kitchen Bone Broth Pour Overs Turkey & Salmon Stew Dog Food Topper, Human Grade Wet Meal Enhancer, 12 Pack 5.5 oz',
    url: 'https://amzn.to/4rfRwWZ',
    category: 'bone-broth',
  },

  // ── ANTI-INFLAMMATORY ────────────────────────────────────────────────────
  'bragg-acv-32oz': {
    name: 'Bragg Organic Raw Apple Cider Vinegar, 32 Ounce - Raw and Unfiltered',
    url: 'https://amzn.to/46Jlx7O',
    category: 'anti-inflammatory',
  },
  'bragg-acv-128oz': {
    name: 'Bragg Organic Apple Cider Vinegar, Raw, Unfiltered, With The Mother, 128 oz',
    url: 'https://amzn.to/4iTCWBY',
    category: 'anti-inflammatory',
  },
  'zesty-paws-liver-turmeric-2pack': {
    name: 'Zesty Paws Liver Support Supplement for Dogs - with Milk Thistle Extract, Turmeric Curcumin, Choline - Soft Chew Formula (Pack of 2)',
    url: 'https://amzn.to/46JlM2I',
    category: 'anti-inflammatory',
  },

  // ── SEA / ALGAE SUPPLEMENTS ──────────────────────────────────────────────
  'raw-paws-organic-kelp-8oz': {
    name: 'Raw Paws Organic Kelp Powder for Dogs & Cats, 8-oz - Seaweed Supplement - Supports Thyroid, Digestive & Immune Health',
    url: 'https://amzn.to/3UsBTPA',
    category: 'sea-supplement',
  },
  'thorvin-kelp-animals-3lb': {
    name: 'Thorvin Kelp for Animals, Organic Supplement for Skin, Coat, Digestion and Optimal Health, 3lb',
    url: 'https://amzn.to/4r0HUiG',
    category: 'sea-supplement',
  },
  'super-snouts-green-lipped-mussel-5oz': {
    name: 'Super Snouts Joint Power Supplement Powder for Dogs & Cats, 5.29 oz Jar - 100% Green Lipped Mussels',
    url: 'https://amzn.to/4d082US',
    category: 'sea-supplement',
  },
  'antinol-plus-green-lipped-mussel-60gels': {
    name: 'Antinol Plus Mobility Hip & Joint Supplement for Dogs, 60 Soft Gels - Green-Lipped Mussel Oil and Krill Oil',
    url: 'https://amzn.to/4ieOlwa',
    category: 'sea-supplement',
  },

  // ── WHOLE FOOD INGREDIENTS ───────────────────────────────────────────────
  'wild-planet-sardines-no-salt-12pack': {
    name: 'Wild Planet Wild Sardines in Water, No Salt Added, 4.4 Ounce Can, Pack of 12',
    url: 'https://amzn.to/4xg3W2h',
    category: 'whole-food',
  },
  'wild-planet-sardines-no-salt-single': {
    name: 'Wild Planet Wild Sardines in Water, No Salt Added, 4.4 Ounce, Single Unit',
    url: 'https://amzn.to/4yh4yFF',
    category: 'whole-food',
  },
  'libbys-pure-pumpkin-15oz': {
    name: 'Libby\'s 100% Pure Canned Pumpkin, 15 oz',
    url: 'https://amzn.to/3UFE0PZ',
    category: 'whole-food',
  },
  'libbys-pure-pumpkin-15oz-5pack': {
    name: 'Libby\'s 100% Pure Pumpkin, 15oz Can (Pack of 5)',
    url: 'https://amzn.to/4xINd8W',
    category: 'whole-food',
  },
  'fresh-zucchini': {
    name: 'Fresh Green Zucchini',
    url: 'https://amzn.to/4xPVcB1',
    category: 'whole-food',
  },
  'organicgirl-baby-spinach-5oz': {
    name: 'Organicgirl Baby Spinach, 5 oz',
    url: 'https://amzn.to/4yqDq7u',
    category: 'whole-food',
  },
  '365-organic-shredded-carrots-10oz': {
    name: '365 by Whole Foods Market, Organic Carrots, Shredded, 10 oz',
    url: 'https://amzn.to/4gWqwad',
    category: 'whole-food',
  },
  'organic-dino-kale': {
    name: 'Organic Dino Kale',
    url: 'https://amzn.to/4qSOd7C',
    category: 'whole-food',
  },
  'crumps-naturals-sweet-potato-11oz-2pack': {
    name: 'Crumps\' Naturals Sweet Potato for Pets, 11.6-Ounce (Pack of 2)',
    url: 'https://amzn.to/4xYpMst',
    category: 'whole-food',
  },
  'weis-zucchini-squash': {
    name: 'Weis Quality Zucchini Squash (finely shred yourself)',
    url: 'https://amzn.to/4ijNt9D',
    category: 'whole-food',
  },
  'icelandic-cod-blueberry-sticks-2oz-2pack': {
    name: 'Icelandic+ Combo Sticks: Cod & Blueberry - 2oz - Dog Treats, Crunchy 2 Ingredient Pet Snacks, Wild Caught Fish (Pack of 2)',
    url: 'https://amzn.to/4xadv2C',
    category: 'whole-food',
  },
  'pumpkin-green-bean-dog-treats': {
    name: 'Pumpkin & Green Bean Dog Treat – 100% Natural Single Ingredient Dog Treats – Crunchy, High Fiber, Grain-Free',
    url: 'https://amzn.to/3SUqibx',
    category: 'whole-food',
  },

  // ── FLAXSEED OIL ─────────────────────────────────────────────────────────
  'now-foods-flaxseed-oil-24oz': {
    name: 'NOW Foods Supplements, Certified Organic Flax Seed Oil Liquid, Cold-Pressed and Unrefined, 24-Ounce',
    url: 'https://amzn.to/4xg6A8d',
    category: 'omega-supplement',
  },

  // ── FREEZE-DRIED MEAL MIXERS & TOPPERS ───────────────────────────────────
  'stella-chewys-chicken-meal-mixers-1oz': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Chicken Meal Mixers - Dog Food Topper and Mixer - Made with 95% Cage-Free Chicken, Organs & Bone - Grain-Free - 1oz',
    url: 'https://amzn.to/4xEuafH',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-beef-meal-mixers-1oz': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Beef Meal Mixers - Dog Food Topper and Mixer - Made with 95% Grass-Fed Beef, Organs & Bone - Grain-Free - 1 oz',
    url: 'https://amzn.to/4gyO85G',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-lamb-meal-mixers-35oz-2pack': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Lamb Meal Mixers - Dog Food Topper and Mixer - Made with 95% Grass-Fed Lamb, Organs & Bone - Grain-Free - 35 oz (Pack of 2)',
    url: 'https://amzn.to/46MbZsE',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-surf-n-turf-salmon-beef-25oz-2pack': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Dinner Patties - Surf \'N Turf Salmon & Beef Recipe - High Protein Grain-Free Puppy & Dog Food - 25 oz (Pack of 2)',
    url: 'https://amzn.to/4ymLrtY',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-lamb-wild-weenies-3oz': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Wild Weenies Dog Treats - All-Natural Grass-Fed Lamb Recipe with 97% Meat & Organs - USA Made - 3.25 oz Bag',
    url: 'https://amzn.to/4xELsJL',
    category: 'raw-freeze-dried',
  },
  'smallbatch-freeze-dried-turkey-7oz-2pack': {
    name: 'smallbatch Pets Freeze-Dried Raw Dog Food – Turkey Recipe – 7oz Small Bites – High Protein, Grain Free – Complete Meal or Topper – Made in USA (Pack of 2)',
    url: 'https://amzn.to/3SUnT0v',
    category: 'raw-freeze-dried',
  },
  'k9-natural-freeze-dried-lamb-green-tripe': {
    name: 'K9 Natural Grain Free Freeze Dried Dog Food Supplement Booster Lamb Green Tripe',
    url: 'https://amzn.to/3SrLyW0',
    category: 'raw-freeze-dried',
  },

  // ── ORGAN MEAT TREATS & SUPPLEMENTS ─────────────────────────────────────
  'vital-essentials-freeze-dried-chicken-hearts-3oz': {
    name: 'Vital Essentials Freeze Dried Raw Chicken Hearts Dog Treats, 3.75 oz Bag',
    url: 'https://amzn.to/4ctpLUu',
    category: 'whole-food',
  },
  'get-joy-freeze-dried-beef-heart-4oz-3pack': {
    name: 'Get Joy Freeze Dried 100% Beef Heart Dog Treats, 4oz - Single Ingredient Organ Meat, High Protein Raw Dog Food Topper (Pack of 3)',
    url: 'https://amzn.to/3Sz0bqy',
    category: 'whole-food',
  },
  'get-joy-freeze-dried-beef-kidney-4oz-3pack': {
    name: 'Get Joy Freeze Dried 100% Beef Kidney Dog Treats, 4oz - Single Ingredient Organ Meat, High Protein Raw Dog Food Topper (Pack of 3)',
    url: 'https://amzn.to/4zVmeIy',
    category: 'whole-food',
  },
  'purebites-lamb-freeze-dried-3oz': {
    name: 'PureBites Lamb Single Ingredient Freeze Dried Dog Treats, 3.35 oz',
    url: 'https://amzn.to/4yhHI0B',
    category: 'raw-freeze-dried',
  },
  'ancestral-supplements-beef-liver-180ct': {
    name: 'Ancestral Supplements Beef Liver Support Capsules, Iron & Energy, 180 Ct - Freeze-dried, Non-GMO Liver Rich in Heme Iron, Vitamin A & B12',
    url: 'https://amzn.to/3UryAbr',
    category: 'whole-food',
  },
  'ancestral-supplements-beef-liver-bone-marrow-180ct': {
    name: 'Ancestral Supplements Grass-Fed Beef Liver & Bone Marrow Capsules, 3000mg, Supports Energy, Digestion, Immunity, 180 Capsules',
    url: 'https://amzn.to/3SOsrFu',
    category: 'whole-food',
  },

  // ── VITAMIN BLENDS ────────────────────────────────────────────────────────
  'justfoodfordogs-nutrient-blend-chicken-rice-2pack': {
    name: 'Just Food for Dogs Nutrient Blend, Chicken & Rice, DIY Fresh Pet Meals, 4.55oz (Pack of 2)',
    url: 'https://amzn.to/3SrJddG',
    category: 'fresh-cooked',
  },
  'animal-essentials-sea-cal-12oz': {
    name: 'Animal Essentials Sea-Cal - Pure Seaweed Calcium Powder for Dogs with Magnesium, Joint Supplement for Dogs & Cats for Healthy Bones & Teeth, Joint Health, Vegan Icelandic Seaweed Calcium - 12 oz',
    url: 'https://amzn.to/4gRALwj',
    category: 'calcium-supplement',
  },

  // ── WET / FRESH FOOD ─────────────────────────────────────────────────────
  'whole-paws-turkey-sweet-potato-13oz-3pack': {
    name: 'Whole Paws Grain-Free Wet Dog Food, Turkey Feast with Sweet Potato & Cranberries in Gravy, 13.2 oz (Pack of 3)',
    url: 'https://amzn.to/3ThvqGK',
    category: 'fresh-cooked',
  },

  // ── FRESH MEAT ────────────────────────────────────────────────────────────
  'old-mill-85-15-ground-beef-10pack': {
    name: 'Old Mill & Company Pasture Raised 85/15 USDA Ground Beef (Pack of 10)',
    url: 'https://amzn.to/4AgiqlF',
    category: 'fresh-cooked',
  },

  // ── GOAT MILK & FERMENTS ───────────────────────────────────────────────────
  'native-pet-goat-milk-pumpkin-bundle': {
    name: 'Native Pet Pup-Kin Spice Latte Bundle - Goat Milk for Dogs and Pumpkin for Dogs - Two Dog Food Topper Powders in One!',
    url: 'https://amzn.to/3UA8cvX',
    category: 'whole-food',
  },
};

/**
 * Quick lookup: given a brand name or ingredient keyword,
 * return all matching affiliate products.
 */
export function getAffiliatesByBrand(brand: string): AffiliateProduct[] {
  const lower = brand.toLowerCase();
  return Object.values(AFFILIATE_PRODUCTS).filter(p =>
    p.name.toLowerCase().includes(lower)
  );
}

/**
 * Returns the best single affiliate URL for a given ingredient name.
 * Used in PlanResults to wire Buy buttons on recipe ingredients.
 */
export const INGREDIENT_AFFILIATE_MAP: Record<string, string> = {
  'Wild Alaskan Salmon Oil': 'https://amzn.to/46HCJdW',
  'Eggshell Calcium & Organic Kelp Blend': 'https://amzn.to/4gRALwj',
  'Ground Seaweed Calcium & Brewer\'s Yeast': 'https://amzn.to/4gRALwj',
  'Wild Canned Sardines in Water (No Salt)': 'https://amzn.to/4xg3W2h',
  'Slow-Simmered Grass-Fed Collagen Bone Broth': 'https://amzn.to/4zZ68xK',
  'Golden Turmeric & Black Pepper Micro-Emulsion': 'https://amzn.to/46JlM2I',
  'Unfiltered Raw Apple Cider Vinegar (with Mother)': 'https://amzn.to/46Jlx7O',
  'Green Tripe & Fermented Kefir / Raw Goat Milk': 'https://amzn.to/3UA8cvX',
  'Pure Organic Pumpkin Puree': 'https://amzn.to/3UFE0PZ',
  'Organic Pumpkin Puree & Steamed Spinach': 'https://amzn.to/3UFE0PZ',
  'Plain pumpkin purée': 'https://amzn.to/3UFE0PZ',
  'Pureed Organic Leafy Greens & Cranberries': 'https://amzn.to/4xg3W2h',
  'Cold-Pressed Virgin Flaxseed Oil': 'https://amzn.to/4xg6A8d', // NOW Foods Organic Flax Seed Oil 24oz (fixed from salmon oil mismatch)
  'Virgin Coconut Oil & Golden Turmeric': 'https://amzn.to/46JlM2I',
  'Vitamins & Supplements': 'https://amzn.to/4gRALwj', // Animal Essentials Sea-Cal - Pure Seaweed Calcium Powder
  'Dog-safe calcium and vitamin mix': 'https://amzn.to/4gRALwj', // Animal Essentials Sea-Cal - Pure Seaweed Calcium Powder (legacy support)
  'calcium and vitamin mix': 'https://amzn.to/4gRALwj', // Animal Essentials Sea-Cal - Pure Seaweed Calcium Powder (alternative support)
  'nutrient blend': 'https://amzn.to/4gRALwj', // Animal Essentials Sea-Cal - Pure Seaweed Calcium Powder (alternative support)
  // ── Recipe-specific ingredient mappings ─────────────────────────────────────
  'Lean ground chicken': 'https://amzn.to/4xEuafH', // Stella & Chewy's Freeze-Dried Chicken Meal Mixers
  'Chicken hearts': 'https://amzn.to/4ctpLUu', // Vital Essentials Freeze-Dried Chicken Hearts
  'Cooked white rice': 'https://amzn.to/3SrJddG', // JustFoodForDogs Nutrient Blend (with rice)
  'Plain pumpkin purée': 'https://amzn.to/3UFE0PZ', // Libby's Pure Pumpkin
  'Steamed zucchini': 'https://amzn.to/4xPVcB1', // Fresh Green Zucchini
  'USDA Lean Ground Turkey (93/7)': 'https://amzn.to/3ThvqGK', // Whole Paws Turkey Feast
  'Organic Turkey Hearts & Gizzards': 'https://amzn.to/3SUnT0v', // smallbatch Freeze-Dried Turkey
  'Baby Spinach & Steamed Zucchini': 'https://amzn.to/4yqDq7u', // Organicgirl Baby Spinach
  'Grass-Fed Ground Beef (85/15)': 'https://amzn.to/4AgiqlF', // Old Mill Ground Beef
  'Pasture-Raised Beef Liver': 'https://amzn.to/3UryAbr', // Ancestral Supplements Beef Liver
  'Steamed Sweet Carrots & Kale': 'https://amzn.to/4gWqwad', // 365 Organic Shredded Carrots
  'Wild Blueberries (Antioxidant Boost)': 'https://amzn.to/4xadv2C', // Icelandic+ Cod & Blueberry Sticks
  'Wild-Caught Pacific Salmon & Cod Fillets': 'https://amzn.to/4ymLrtY', // Stella & Chewy's Surf 'N Turf
  'Organic Steamed Sweet Potato': 'https://amzn.to/4xYpMst', // Crumps' Naturals Sweet Potato
  'Finely Shredded Green Zucchini': 'https://amzn.to/4ijNt9D', // Weis Quality Zucchini Squash
  'Veterinary Bone Meal & Sea Salt': 'https://amzn.to/4gRALwj',
  // ── Additional Ingredient Mappings for IngredientChecker ──────────────────
  'Pumpkin (Pure Puree)': 'https://amzn.to/3UFE0PZ',
  'Pumpkin': 'https://amzn.to/3UFE0PZ',
  'Pure Pumpkin': 'https://amzn.to/3UFE0PZ',
  'Canned Pumpkin': 'https://amzn.to/3UFE0PZ',
  'Wild Alaskan Salmon': 'https://amzn.to/4ymLrtY',
  'Salmon': 'https://amzn.to/4ymLrtY',
  'Wild Blueberries': 'https://amzn.to/4xadv2C',
  'Blueberries': 'https://amzn.to/4xadv2C',
  'Raw Unbleached Green Tripe': 'https://amzn.to/3SrLyW0',
  'Green Tripe': 'https://amzn.to/3SrLyW0',
  'Tripe': 'https://amzn.to/3SrLyW0',
  'Collagen Bone Broth': 'https://amzn.to/4zZ68xK',
  'Bone Broth': 'https://amzn.to/4zZ68xK',
  'Organic Steamed Zucchini': 'https://amzn.to/4xPVcB1',
  'Zucchini': 'https://amzn.to/4xPVcB1',
  'Raw Goat Milk / Kefir': 'https://amzn.to/3UA8cvX',
  'Goat Milk': 'https://amzn.to/3UA8cvX',
  'Kefir': 'https://amzn.to/3UA8cvX',
  'Raw Goat Milk': 'https://amzn.to/3UA8cvX',
  'Spinach': 'https://amzn.to/4yqDq7u',
  'Kale': 'https://amzn.to/4qSOd7C',
  'Carrots': 'https://amzn.to/4gWqwad',
  'Sweet Potato': 'https://amzn.to/4xYpMst',
  'Sweet Potatoes': 'https://amzn.to/4xYpMst',
  'Organic Sweet Potato': 'https://amzn.to/4xYpMst',
  'Apple Cider Vinegar': 'https://amzn.to/46Jlx7O',
  'ACV': 'https://amzn.to/46Jlx7O',
  'Turmeric': 'https://amzn.to/46JlM2I',
  'Flaxseed Oil': 'https://amzn.to/4xg6A8d',
  'Flax Oil': 'https://amzn.to/4xg6A8d',
  'Sardines': 'https://amzn.to/4xg3W2h',
  'Canned Sardines': 'https://amzn.to/4xg3W2h',
  'Eggshell Calcium': 'https://amzn.to/4gRALwj',
  'Clean Eggshell Powder': 'https://amzn.to/4gRALwj',
  'Kelp': 'https://amzn.to/3UsBTPA',
  'Organic Kelp': 'https://amzn.to/3UsBTPA',
  'Sea Kelp': 'https://amzn.to/3UsBTPA',
  'Green Lipped Mussel': 'https://amzn.to/4d082US',
  'Mussel': 'https://amzn.to/4d082US',
  'Liver': 'https://amzn.to/3UryAbr',
  'Beef Liver': 'https://amzn.to/3UryAbr',
  'Chicken Hearts': 'https://amzn.to/4ctpLUu',
  'Beef Heart': 'https://amzn.to/3Sz0bqy',
  'Beef Kidney': 'https://amzn.to/4zVmeIy',
  'Organ Meats': 'https://amzn.to/3UryAbr',
  'Organ Meat': 'https://amzn.to/3UryAbr',
  '80% Muscle Meat': 'https://amzn.to/3Sz0bqy',
  'Turkey or Beef Hearts': 'https://amzn.to/3Sz0bqy', // Get Joy Freeze-Dried Beef Heart
  'Pure Canned Pumpkin Puree': 'https://amzn.to/3UFE0PZ',
  'Steamed Baby Spinach & Finely Diced Zucchini': 'https://amzn.to/4yqDq7u',
  'Raw Edible Bone': 'https://amzn.to/4gyO85G',
  'Other Secreting Organ': 'https://amzn.to/4zVmeIy',
  // ── Fresh-Cooked: Chicken ────────────────────────────────────────────────
  'USDA Ground Turkey (93/7)': 'https://amzn.to/3ThvqGK',    // Whole Paws Turkey Feast wet food
  // ── Raw BARF: Beef ──────────────────────────────────────────────────────
  'Raw Grass-Fed Beef Chuck & Heart': 'https://amzn.to/3Sz0bqy',          // Get Joy Freeze-Dried Beef Heart 4oz ×3
  'Ground Soft Beef Rib Bone / Chicken Frames': 'https://amzn.to/4gyO85G',// Stella & Chewy's Beef Meal Mixers (w/ bone) 1oz
  'Beef Liver (Secreting Organ 1)': 'https://amzn.to/3SOsrFu',            // Ancestral Beef Liver & Bone Marrow 180ct
  'Beef Kidney or Spleen (Secreting Organ 2)': 'https://amzn.to/4zVmeIy', // Get Joy Freeze-Dried Beef Kidney 4oz ×3
  // ── Raw BARF: Lamb ──────────────────────────────────────────────────────
  'Pasture Lamb Shoulder & Heart': 'https://amzn.to/4xELsJL',    // Stella & Chewy's Lamb Wild Weenies 3.25oz
  'Ground Lamb Rib Bone': 'https://amzn.to/46MbZsE',             // Stella & Chewy's Lamb Meal Mixers (w/ bone) 35oz ×2
  'Lamb Liver & Kidney': 'https://amzn.to/4yhHI0B',              // PureBites Lamb Freeze-Dried 3.35oz
  // ── Superfood Topper ────────────────────────────────────────────────────
  'Pureed Zucchini, Celery & Pumpkin Seeds': 'https://amzn.to/3SUqibx', // Pumpkin & Green Bean Natural Dog Treats
};

/**
 * Brand name → primary affiliate product key mapping.
 * Used to attach a "Buy Now" button to brand review cards.
 */
export const BRAND_AFFILIATE_MAP: Record<string, string[]> = {
  'Blue Buffalo': [
    'blue-buffalo-wilderness-chicken-24lb',
    'blue-buffalo-wilderness-salmon-24lb',
    'blue-buffalo-wilderness-chicken-4lb',
  ],
  'Rachael Ray Nutrish': [
    'nutrish-peak-variety-pack-wet',
    'nutrish-beef-pea-brown-rice-28lb',
  ],
  'Nutrish': [
    'nutrish-peak-variety-pack-wet',
    'nutrish-beef-pea-brown-rice-28lb',
  ],
  'Pure Balance': [
    'victor-chicken-brown-rice-5lb',
  ],
  'Ollie': [
    'ollie-chicken-apple-jerky-treats',
  ],
  'Open Farm': [
    'open-farm-rawmix-front-range-20lb',
    'open-farm-rawmix-open-prairie-20lb',
    'open-farm-rawmix-wild-ocean-20lb',
  ],
  'Orijen': [
    'orijen-original-grain-free-23lb',
    'orijen-amazing-grains-original-30lb',
  ],
  'Acana': [
    'acana-wild-atlantic-25lb',
    'acana-meadowland-4lb',
  ],
  'Stella & Chewy\'s': [
    'stella-chewys-freeze-dried-chicken-14oz',
    'stella-chewys-freeze-dried-red-meat-14oz',
  ],
  'Stella and Chewy\'s': [
    'stella-chewys-freeze-dried-chicken-14oz',
    'stella-chewys-freeze-dried-red-meat-14oz',
  ],
  'Primal': [
    'primal-pronto-beef-16oz',
    'primal-pronto-chicken-16oz',
  ],
  'Hill\'s': [
    'hills-science-diet-large-breed-35lb',
    'hills-science-diet-small-bites',
  ],
  'Hills': [
    'hills-science-diet-large-breed-35lb',
    'hills-science-diet-small-bites',
  ],
  'Royal Canin': [
    'royal-canin-vet-hydrolyzed-protein-25lb',
  ],
  'Purina Pro Plan': [
    'purina-pro-plan-vet-ha-hydrolyzed-16lb',
    'purina-pro-plan-vet-nf-kidney-25lb',
  ],
  'Purina': [
    'purina-pro-plan-vet-ha-hydrolyzed-16lb',
    'purina-pro-plan-vet-nf-kidney-25lb',
  ],
  'JustFoodForDogs': [
    'justfoodfordogs-chicken-white-rice',
  ],
  'Just Food For Dogs': [
    'justfoodfordogs-chicken-white-rice',
  ],
  'ZIWI': [
    'ziwi-peak-beef-chicken-bundle',
  ],
  'Ziwi': [
    'ziwi-peak-beef-chicken-bundle',
  ],
  'Fromm': [
    'fromm-adult-gold-15lb',
    'fromm-large-breed-adult-gold-15lb',
  ],
  'Victor': [
    'victor-chicken-brown-rice-5lb',
  ],
};

/**
 * Normalize a string for fuzzy matching (lowercase, punctuation stripped, collapse spaces).
 */
function normalize(s: string): string {
  return s.toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Returns the primary (first) affiliate product for a brand, if any are mapped.
 */
export function getPrimaryBrandProduct(brandName: string): AffiliateProduct | null {
  const keys = BRAND_AFFILIATE_MAP[brandName];
  if (!keys || keys.length === 0) return null;
  const key = keys[0];
  return AFFILIATE_PRODUCTS[key] || null;
}

/**
 * Scans arbitrary text (question, tags, answer body, or ingredient names) for known
 * brand names and returns the first brand + primary product that matches.
 */
export function findBrandMatchInText(text: string): { brand: string; product: AffiliateProduct } | null {
  if (!text) return null;
  const haystack = ' ' + normalize(text) + ' ';
  for (const brand of Object.keys(BRAND_AFFILIATE_MAP)) {
    const brandNorm = normalize(brand);
    if (!brandNorm) continue;
    // Match whole words to avoid false positives (e.g. "Pure" inside "Purina")
    const regex = new RegExp(`(^|[^a-z0-9])${brandNorm.replace(/ /g, '[^a-z0-9]+')}([^a-z0-9]|$)`);
    if (regex.test(haystack)) {
      const product = getPrimaryBrandProduct(brand);
      if (product) return { brand, product };
    }
  }
  return null;
}

/**
 * Lookup an ingredient affiliate URL supporting fuzzy matches against
 * INGREDIENT_AFFILIATE_MAP keys. Handles keywords like "pumpkin", "salmon oil", etc.
 */
export function findIngredientAffiliate(text: string): { name: string; url: string } | null {
  if (!text) return null;
  const exact = INGREDIENT_AFFILIATE_MAP[text.trim()];
  if (exact) return { name: text.trim(), url: exact };
  const haystack = normalize(text);
  let best: { score: number; name: string; url: string } | null = null;
  for (const [key, url] of Object.entries(INGREDIENT_AFFILIATE_MAP)) {
    if (!url) continue;
    const keyNorm = normalize(key);
    if (!keyNorm) continue;
    // Exact substring both directions
    if (haystack.includes(keyNorm) || keyNorm.includes(haystack)) {
      const score = Math.min(keyNorm.length, haystack.length);
      if (!best || score > best.score) best = { score, name: key, url };
      continue;
    }
    // At least 2 overlapping keywords
    const hTokens = new Set(haystack.split(' ').filter(t => t.length >= 3));
    const kTokens = keyNorm.split(' ').filter(t => t.length >= 3);
    const overlap = kTokens.filter(t => hTokens.has(t)).length;
    if (overlap >= 2) {
      const score = overlap * 10;
      if (!best || score > best.score) best = { score, name: key, url };
    }
  }
  return best ? { name: best.name, url: best.url } : null;
}

/**
 * Highest-level "find something to promote" helper.
 * Scans arbitrary text for brand references first (they have richer product metadata),
 * then falls back to ingredient keywords.
 */
export function findAffiliateContext(text: string):
  | { type: 'brand'; brand: string; product: AffiliateProduct }
  | { type: 'ingredient'; name: string; url: string }
  | null
{
  if (!text) return null;
  const brandHit = findBrandMatchInText(text);
  if (brandHit) return { type: 'brand', brand: brandHit.brand, product: brandHit.product };
  const ingHit = findIngredientAffiliate(text);
  if (ingHit) return { type: 'ingredient', name: ingHit.name, url: ingHit.url };
  return null;
}

/**
 * Context-aware FAQ affiliate recommendation.
 * Picks a product that matches the protein/topic context of the FAQ text.
 * Falls back to findAffiliateContext for general matches.
 */
export function findFaqAffiliate(text: string):
  | { type: 'brand'; brand: string; product: AffiliateProduct }
  | { type: 'ingredient'; name: string; url: string }
  | null
{
  if (!text) return null;
  const lower = text.toLowerCase();

  // Chicken-specific context
  if (/\bchicken\b/.test(lower) && !/\bbeef\b|\bsalmon\b|\blamb\b|\bturkey\b/.test(lower)) {
    // Prefer chicken products
    const chickenProducts = [
      'justfoodfordogs-chicken-white-rice',
      'stella-chewys-freeze-dried-chicken-14oz',
      'primal-pronto-chicken-16oz',
      'stella-chewys-chicken-meal-mixers-1oz',
      'vital-essentials-freeze-dried-chicken-hearts-3oz',
      'ollie-chicken-apple-jerky-treats',
      'brutus-broth-chicken-liquid-6pack',
    ];
    for (const key of chickenProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Beef-specific context
  if (/\bbeef\b/.test(lower) && !/\bchicken\b|\bsalmon\b|\blamb\b|\bturkey\b/.test(lower)) {
    const beefProducts = [
      'old-mill-85-15-ground-beef-10pack',
      'stella-chewys-freeze-dried-red-meat-14oz',
      'primal-pronto-beef-16oz',
      'stella-chewys-beef-meal-mixers-1oz',
      'get-joy-freeze-dried-beef-heart-4oz-3pack',
      'brutus-broth-beef-liquid-2pack',
    ];
    for (const key of beefProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Salmon/fish-specific context
  if (/\bsalmon\b|\bfish\b|\bsardine\b|\bomega.?3\b/.test(lower)) {
    const fishProducts = [
      'zesty-paws-salmon-oil-16oz',
      'wild-planet-sardines-no-salt-12pack',
      'acana-wild-atlantic-25lb',
      'blue-buffalo-wilderness-salmon-24lb',
      'nordic-naturals-omega3-pet-16oz',
    ];
    for (const key of fishProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Lamb-specific context
  if (/\blamb\b/.test(lower)) {
    const lambProducts = [
      'stella-chewys-lamb-meal-mixers-35oz-2pack',
      'purebites-lamb-freeze-dried-3oz',
      'stella-chewys-lamb-wild-weenies-3oz',
      'k9-natural-freeze-dried-lamb-green-tripe',
    ];
    for (const key of lambProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Turkey-specific context
  if (/\bturkey\b/.test(lower)) {
    const turkeyProducts = [
      'whole-paws-turkey-sweet-potato-13oz-3pack',
      'smallbatch-freeze-dried-turkey-7oz-2pack',
      'honest-kitchen-turkey-salmon-broth-12pack',
    ];
    for (const key of turkeyProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Pumpkin/digestion context
  if (/\bpumpkin\b|\bdigestion\b|\bdigestive\b|\bstomach\b|\bgut\b/.test(lower)) {
    const digestProducts = [
      'libbys-pure-pumpkin-15oz',
      'brutus-broth-chicken-liquid-6pack',
      'honest-kitchen-bone-broth-variety-3pack',
    ];
    for (const key of digestProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Joint/hip context
  if (/\bjoint\b|\bhip\b|\bmobility\b|\barthritis\b|\bglucosamine\b/.test(lower)) {
    const jointProducts = [
      'antinol-plus-green-lipped-mussel-60gels',
      'super-snouts-green-lipped-mussel-5oz',
      'brutus-broth-chicken-liquid-6pack',
    ];
    for (const key of jointProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Skin/coat/allergy context
  if (/\bskin\b|\bcoat\b|\bitch\b|\ballerg\b|\bderma\b/.test(lower)) {
    const skinProducts = [
      'zesty-paws-salmon-oil-16oz',
      'nordic-naturals-omega3-pet-16oz',
      'raw-paws-organic-kelp-8oz',
    ];
    for (const key of skinProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Kidney/vet context
  if (/\bkidney\b|\brenal\b|\bveterinarian\b|\bprescription\b|\bhydrolyzed\b/.test(lower)) {
    const vetProducts = [
      'purina-pro-plan-vet-nf-kidney-25lb',
      'royal-canin-vet-hydrolyzed-protein-25lb',
      'purina-pro-plan-vet-ha-hydrolyzed-16lb',
    ];
    for (const key of vetProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Raw/BARF context
  if (/\braw\b|\bbarf\b|\bfreeze.?dried\b/.test(lower)) {
    const rawProducts = [
      'stella-chewys-freeze-dried-variety-5pack',
      'primal-freeze-dried-chicken-5oz',
      'stella-chewys-freeze-dried-chicken-14oz',
    ];
    for (const key of rawProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Homemade/calcium context
  if (/\bhomemade\b|\bcalcium\b|\beggshell\b/.test(lower)) {
    const calciumProducts = [
      'eggshell-powder-12oz',
      'prymal-pets-eggshell-calcium-12oz',
      'animal-essentials-sea-cal-12oz',
    ];
    for (const key of calciumProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Blue Buffalo brand context
  if (/blue buffalo/.test(lower)) {
    const p = AFFILIATE_PRODUCTS['blue-buffalo-wilderness-chicken-24lb'];
    if (p) return { type: 'ingredient', name: p.name, url: p.url };
  }

  // Nutrish brand context
  if (/nutrish/.test(lower)) {
    const p = AFFILIATE_PRODUCTS['nutrish-beef-pea-brown-rice-28lb'];
    if (p) return { type: 'ingredient', name: p.name, url: p.url };
  }

  // Orijen/Acana/Open Farm/premium kibble context
  if (/\borijen\b|\bacana\b|\bopen farm\b|\bpremium kibble\b|\bdry dog food\b|\bkibble\b/.test(lower)) {
    const kibbleProducts = [
      'orijen-original-grain-free-23lb',
      'acana-wild-atlantic-25lb',
      'open-farm-rawmix-front-range-20lb',
    ];
    for (const key of kibbleProducts) {
      if (AFFILIATE_PRODUCTS[key]) {
        return { type: 'ingredient', name: AFFILIATE_PRODUCTS[key].name, url: AFFILIATE_PRODUCTS[key].url };
      }
    }
  }

  // Fall back to the existing brand/ingredient matcher
  return findAffiliateContext(text);
}
