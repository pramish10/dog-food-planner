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
    name: 'ZIWI Peak Air-Dried Dog Food – Beef + Chicken Bundle (16oz each)',
    url: 'https://amzn.to/4gRp8FA',
    category: 'fresh-cooked',
  },
  'justfoodfordogs-chicken-white-rice': {
    name: 'JustFoodForDogs Pantry Fresh Chicken & White Rice (Pack of 24)',
    url: 'https://amzn.to/4x9327I',
    category: 'fresh-cooked',
  },
  'ollie-chicken-apple-jerky-treats': {
    name: 'Ollie Chicken & Apple Jerky Dog Treats, 5oz (Pack of 3)',
    url: 'https://amzn.to/4x5989f',
    category: 'fresh-cooked',
  },

  // ── PREMIUM DRY KIBBLE ───────────────────────────────────────────────────
  'orijen-original-grain-free-23lb': {
    name: 'ORIJEN Original Grain-Free Dry Dog Food 23.5lb',
    url: 'https://amzn.to/4xF5aFr',
    category: 'premium-kibble',
  },
  'orijen-amazing-grains-original-30lb': {
    name: 'ORIJEN Amazing Grains Original Dry Dog Food 30lb',
    url: 'https://amzn.to/4d04imi',
    category: 'premium-kibble',
  },
  'orijen-small-breed-4lb': {
    name: 'ORIJEN Grain-Free Small Breed Dry Dog Food 4lb',
    url: 'https://amzn.to/3VdZ4gE',
    category: 'premium-kibble',
  },
  'acana-meadowland-4lb': {
    name: 'ACANA Meadowland Grain-Free Dry Dog Food 4.5lb',
    url: 'https://amzn.to/469MSjm',
    category: 'premium-kibble',
  },
  'acana-wild-atlantic-25lb': {
    name: 'ACANA Wild Atlantic Grain-Free Dry Dog Food 25lb',
    url: 'https://amzn.to/4hdaPfO',
    category: 'premium-kibble',
  },
  'acana-appalachian-ranch-25lb': {
    name: 'ACANA Appalachian Ranch Grain-Free Dry Dog Food 25lb',
    url: 'https://amzn.to/3UCKizZ',
    category: 'premium-kibble',
  },
  'open-farm-rawmix-front-range-20lb': {
    name: 'Open Farm RawMix Grain-Free Front Range Kibble 20lb',
    url: 'https://amzn.to/4hfhbKP',
    category: 'premium-kibble',
  },
  'open-farm-rawmix-open-prairie-20lb': {
    name: 'Open Farm RawMix Ancient Grains Open Prairie Kibble 20lb',
    url: 'https://amzn.to/4x4GvsB',
    category: 'premium-kibble',
  },
  'open-farm-rawmix-wild-ocean-20lb': {
    name: 'Open Farm RawMix Grain-Free Wild Ocean Kibble 20lb',
    url: 'https://amzn.to/4xe0jtN',
    category: 'premium-kibble',
  },
  'fromm-adult-gold-15lb': {
    name: 'Fromm Adult Gold Premium Dry Dog Food – Chicken 15lb',
    url: 'https://amzn.to/4yHytr5',
    category: 'premium-kibble',
  },
  'fromm-large-breed-adult-gold-15lb': {
    name: 'Fromm Large Breed Adult Gold Premium Dry Dog Food 15lb',
    url: 'https://amzn.to/4zZ3VCs',
    category: 'premium-kibble',
  },
  'stella-chewys-superblends-chicken-duck': {
    name: 'Stella & Chewy\'s SuperBlends Cage-Free Chicken & Duck 3.25lb (Pack of 2)',
    url: 'https://amzn.to/4xeveWX',
    category: 'premium-kibble',
  },

  // ── BUDGET / MID-TIER KIBBLE ─────────────────────────────────────────────
  'blue-buffalo-wilderness-chicken-24lb': {
    name: 'Blue Buffalo Wilderness Chicken Adult Grain-Free 24lb',
    url: 'https://amzn.to/4gVmqiw',
    category: 'budget-kibble',
  },
  'blue-buffalo-wilderness-salmon-24lb': {
    name: 'Blue Buffalo Wilderness Salmon Adult Grain-Free 24lb',
    url: 'https://amzn.to/46DRjDg',
    category: 'budget-kibble',
  },
  'blue-buffalo-wilderness-chicken-4lb': {
    name: 'Blue Buffalo Wilderness Chicken Adult Grain-Free 4.5lb',
    url: 'https://amzn.to/4zYiXs0',
    category: 'budget-kibble',
  },
  'nutrish-peak-variety-pack-wet': {
    name: 'Rachael Ray Nutrish Peak Grain-Free Variety Pack Wet (3.5oz Trays)',
    url: 'https://amzn.to/4gCbmI6',
    category: 'budget-kibble',
  },
  'nutrish-beef-pea-brown-rice-28lb': {
    name: 'Rachael Ray Nutrish Beef, Pea & Brown Rice Dry Dog Food 28lb',
    url: 'https://amzn.to/4hcYoAI',
    category: 'budget-kibble',
  },
  'victor-chicken-brown-rice-5lb': {
    name: 'VICTOR Chicken Meal & Brown Rice Formula Dry Dog Food 5lb',
    url: 'https://amzn.to/4qYD8lC',
    category: 'budget-kibble',
  },

  // ── RAW / FREEZE-DRIED ───────────────────────────────────────────────────
  'stella-chewys-freeze-dried-chicken-5oz': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Chicken Dinner Patties 5.5oz',
    url: 'https://amzn.to/3Urs30p',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-freeze-dried-chicken-14oz': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Chicken Dinner Patties 14oz',
    url: 'https://amzn.to/4gDSJ6L',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-freeze-dried-red-meat-14oz': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Remarkable Red Meat Patties 14oz',
    url: 'https://amzn.to/4cxez9v',
    category: 'raw-freeze-dried',
  },
  'stella-chewys-freeze-dried-variety-5pack': {
    name: 'Stella & Chewy\'s Freeze-Dried Raw Variety Pack (Beef/Chicken/Duck/Lamb) 15oz×5',
    url: 'https://amzn.to/4gCgdJp',
    category: 'raw-freeze-dried',
  },
  'primal-freeze-dried-chicken-5oz': {
    name: 'Primal Freeze-Dried Raw Dog Food Nuggets Chicken 5.5oz',
    url: 'https://amzn.to/4qX1MTK',
    category: 'raw-freeze-dried',
  },
  'primal-pronto-beef-16oz': {
    name: 'Primal Pronto Mini Nuggets Freeze-Dried Beef 16oz',
    url: 'https://amzn.to/4cqUh1l',
    category: 'raw-freeze-dried',
  },
  'primal-pronto-chicken-16oz': {
    name: 'Primal Pronto Mini Nuggets Freeze-Dried Chicken 16oz',
    url: 'https://amzn.to/3Ve1dZK',
    category: 'raw-freeze-dried',
  },

  // ── VETERINARY / PRESCRIPTION ────────────────────────────────────────────
  'hills-science-diet-large-breed-35lb': {
    name: 'Hill\'s Science Diet Large Breed Chicken & Barley 35lb',
    url: 'https://amzn.to/3SOmfNW',
    category: 'vet-rx',
  },
  'hills-science-diet-small-bites': {
    name: 'Hill\'s Science Diet Adult 1-6 Small Bites Dry Dog Food',
    url: 'https://amzn.to/469uW8x',
    category: 'vet-rx',
  },
  'royal-canin-vet-hydrolyzed-protein-25lb': {
    name: 'Royal Canin Veterinary Diet Hydrolyzed Protein Adult Dry 25.3lb',
    url: 'https://amzn.to/4ykV9Nk',
    category: 'vet-rx',
  },
  'purina-pro-plan-vet-ha-hydrolyzed-16lb': {
    name: 'Purina Pro Plan Vet Diets HA Hydrolyzed Protein Dry 16.5lb',
    url: 'https://amzn.to/4iOBEIw',
    category: 'vet-rx',
  },
  'purina-pro-plan-vet-nf-kidney-25lb': {
    name: 'Purina Pro Plan Vet Diets NF Kidney Function Dry 25lb',
    url: 'https://amzn.to/4gHDGaE',
    category: 'vet-rx',
  },

  // ── OMEGA-3 / SALMON OIL SUPPLEMENTS ────────────────────────────────────
  'zesty-paws-salmon-oil-16oz': {
    name: 'Zesty Paws Wild Alaskan Salmon Oil 16oz',
    url: 'https://amzn.to/46HCJdW',
    category: 'omega-supplement',
  },
  'zesty-paws-salmon-oil-8oz': {
    name: 'Zesty Paws Wild Alaskan Salmon Oil 8.5oz',
    url: 'https://amzn.to/3VdKIge',
    category: 'omega-supplement',
  },
  'grizzly-salmon-oil-16oz': {
    name: 'Grizzly Wild Alaskan Salmon Oil 16oz',
    url: 'https://amzn.to/4xg2Wex',
    category: 'omega-supplement',
  },
  'grizzly-salmon-oil-32oz': {
    name: 'Grizzly Salmon Plus Omega 3-6-9 32oz',
    url: 'https://amzn.to/4cvz8Dj',
    category: 'omega-supplement',
  },
  'nordic-naturals-omega3-pet-16oz': {
    name: 'Nordic Naturals Omega-3 Pet 16oz (Pack of 2)',
    url: 'https://amzn.to/4i9KfW3',
    category: 'omega-supplement',
  },

  // ── CALCIUM SUPPLEMENTS ──────────────────────────────────────────────────
  'eggshell-powder-8oz': {
    name: 'Pure USA Eggshell Powder for Dogs/Cats 8oz',
    url: 'https://amzn.to/4haNVWy',
    category: 'calcium-supplement',
  },
  'eggshell-powder-12oz': {
    name: 'Pure USA Eggshell Powder for Dogs/Cats 12oz',
    url: 'https://amzn.to/4cwrUPk',
    category: 'calcium-supplement',
  },
  'prymal-pets-eggshell-calcium-12oz': {
    name: 'Prymal Pets Eggshell Calcium Powder Supplement 12oz',
    url: 'https://amzn.to/4gSFde8',
    category: 'calcium-supplement',
  },
  'pets-friend-eggshellent-calcium-6oz': {
    name: 'Pet\'s Friend Eggshellent Calcium Fine Eggshell Powder 6oz',
    url: 'https://amzn.to/4ha48v4',
    category: 'calcium-supplement',
  },

  // ── BONE BROTH ───────────────────────────────────────────────────────────
  'brutus-broth-chicken-liquid-6pack': {
    name: 'Brutus Bone Broth Chicken for Dogs 16.9oz (Pack of 6)',
    url: 'https://amzn.to/4zSd7Zb',
    category: 'bone-broth',
  },
  'brutus-broth-beef-liquid-2pack': {
    name: 'Brutus Bone Broth Beef Instant Liquid 2-Pack',
    url: 'https://amzn.to/4d3fcHX',
    category: 'bone-broth',
  },
  'brutus-broth-chicken-powder-3oz': {
    name: 'Brutus Bone Broth Powder Chicken 3.5oz',
    url: 'https://amzn.to/4xF1frV',
    category: 'bone-broth',
  },
  'honest-kitchen-bone-broth-variety-3pack': {
    name: 'The Honest Kitchen Bone Broth Pour Overs Variety 3-Pack 5.5oz',
    url: 'https://amzn.to/4zZ68xK',
    category: 'bone-broth',
  },
  'honest-kitchen-turkey-salmon-broth-12pack': {
    name: 'The Honest Kitchen Bone Broth Turkey & Salmon Pour Overs 12-Pack',
    url: 'https://amzn.to/4rfRwWZ',
    category: 'bone-broth',
  },

  // ── ANTI-INFLAMMATORY ────────────────────────────────────────────────────
  'bragg-acv-32oz': {
    name: 'Bragg Organic Raw Apple Cider Vinegar 32oz',
    url: 'https://amzn.to/46Jlx7O',
    category: 'anti-inflammatory',
  },
  'bragg-acv-128oz': {
    name: 'Bragg Organic Apple Cider Vinegar 128oz (Gallon)',
    url: 'https://amzn.to/4iTCWBY',
    category: 'anti-inflammatory',
  },
  'zesty-paws-liver-turmeric-2pack': {
    name: 'Zesty Paws Liver Support with Milk Thistle & Turmeric Soft Chews (Pack of 2)',
    url: 'https://amzn.to/46JlM2I',
    category: 'anti-inflammatory',
  },

  // ── SEA / ALGAE SUPPLEMENTS ──────────────────────────────────────────────
  'raw-paws-organic-kelp-8oz': {
    name: 'Raw Paws Organic Kelp Powder for Dogs & Cats 8oz',
    url: 'https://amzn.to/3UsBTPA',
    category: 'sea-supplement',
  },
  'thorvin-kelp-animals-3lb': {
    name: 'Thorvin Kelp for Animals Organic Supplement 3lb',
    url: 'https://amzn.to/4r0HUiG',
    category: 'sea-supplement',
  },
  'super-snouts-green-lipped-mussel-5oz': {
    name: 'Super Snouts Joint Power Green-Lipped Mussel Powder 5.29oz',
    url: 'https://amzn.to/4d082US',
    category: 'sea-supplement',
  },
  'antinol-plus-green-lipped-mussel-60gels': {
    name: 'Antinol Plus Mobility Hip & Joint Supplement 60 Soft Gels',
    url: 'https://amzn.to/4ieOlwa',
    category: 'sea-supplement',
  },

  // ── WHOLE FOOD INGREDIENTS ───────────────────────────────────────────────
  'wild-planet-sardines-no-salt-12pack': {
    name: 'Wild Planet Wild Sardines in Water No Salt Added 4.4oz (Pack of 12)',
    url: 'https://amzn.to/4xg3W2h',
    category: 'whole-food',
  },
  'wild-planet-sardines-no-salt-single': {
    name: 'Wild Planet Wild Sardines in Water No Salt Added 4.4oz Single',
    url: 'https://amzn.to/4yh4yFF',
    category: 'whole-food',
  },
  'libbys-pure-pumpkin-15oz': {
    name: 'Libby\'s 100% Pure Canned Pumpkin 15oz',
    url: 'https://amzn.to/3UFE0PZ',
    category: 'whole-food',
  },
  'libbys-pure-pumpkin-15oz-5pack': {
    name: 'Libby\'s 100% Pure Pumpkin 15oz (Pack of 5)',
    url: 'https://amzn.to/4xINd8W',
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
  'Eggshell Calcium & Organic Kelp Blend': 'https://amzn.to/4haNVWy',
  'Ground Seaweed Calcium & Brewer\'s Yeast': 'https://amzn.to/3UsBTPA',
  'Wild Canned Sardines in Water (No Salt)': 'https://amzn.to/4xg3W2h',
  'Slow-Simmered Grass-Fed Collagen Bone Broth': 'https://amzn.to/4zZ68xK',
  'Golden Turmeric & Black Pepper Micro-Emulsion': 'https://amzn.to/46JlM2I',
  'Unfiltered Raw Apple Cider Vinegar (with Mother)': 'https://amzn.to/46Jlx7O',
  'Green Tripe & Fermented Kefir / Raw Goat Milk': 'https://amzn.to/4zZ68xK',
  'Pure Organic Pumpkin Puree': 'https://amzn.to/3UFE0PZ',
  'Organic Pumpkin Puree & Steamed Spinach': 'https://amzn.to/3UFE0PZ',
  'Plain pumpkin purée': 'https://amzn.to/3UFE0PZ',
  'Pureed Organic Leafy Greens & Cranberries': 'https://amzn.to/4xg3W2h',
  'Cold-Pressed Virgin Flaxseed Oil': 'https://amzn.to/46HCJdW',
  'Virgin Coconut Oil & Golden Turmeric': 'https://amzn.to/46JlM2I',
  'Dog-safe calcium and vitamin mix': 'https://amzn.to/4haNVWy',
  'Veterinary Bone Meal & Sea Salt': 'https://amzn.to/4haNVWy',
  'Lean ground chicken': '',
  'Chicken hearts': '',
  'Cooked white rice': '',
  'Steamed zucchini': '',
  'USDA Lean Ground Turkey (93/7)': '',
  'Organic Turkey Hearts & Gizzards': '',
  'Baby Spinach & Steamed Zucchini': '',
  'Grass-Fed Ground Beef (85/15)': '',
  'Pasture-Raised Beef Liver': '',
  'Steamed Sweet Carrots & Kale': '',
  'Wild Blueberries (Antioxidant Boost)': '',
  'Wild-Caught Pacific Salmon & Cod Fillets': '',
  'Organic Steamed Sweet Potato': '',
  'Finely Shredded Green Zucchini': '',
  'Raw Grass-Fed Beef Chuck & Heart': '',
  'Ground Soft Beef Rib Bone / Chicken Frames': '',
  'Beef Liver (Secreting Organ 1)': '',
  'Beef Kidney or Spleen (Secreting Organ 2)': '',
  'Pasture Lamb Shoulder & Heart': '',
  'Ground Lamb Rib Bone': '',
  'Lamb Liver & Kidney': '',
  'Raw Unbleached Green Tripe': '',
  'Pureed Zucchini, Celery & Pumpkin Seeds': '',
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
  'Primal': [
    'primal-pronto-beef-16oz',
    'primal-pronto-chicken-16oz',
  ],
  'Hill\'s': [
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
  'JustFoodForDogs': [
    'justfoodfordogs-chicken-white-rice',
  ],
  'ZIWI': [
    'ziwi-peak-beef-chicken-bundle',
  ],
  'Fromm': [
    'fromm-adult-gold-15lb',
    'fromm-large-breed-adult-gold-15lb',
  ],
};
