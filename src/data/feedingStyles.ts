/**
 * Content for the "Fresh Dog Food vs. Raw Dog Food vs. Commercial Kibble"
 * comparison section on the Best Dog Food page. Each entry gets its own
 * "Read more" detail page at /best-dog-food/feeding-style/{slug}.
 */
export interface FeedingStyle {
  slug: string;
  optionLabel: string;
  accent: string;
  title: string;
  summary: string;
  pros: string[];
  cons: string[];
  readMore: string;
  productKey: string;
  productNote: string;
}

export const FEEDING_STYLES: FeedingStyle[] = [
  {
    slug: 'fresh-dog-food',
    optionLabel: 'Option 1',
    accent: '#10b981',
    title: 'Fresh Dog Food',
    summary: 'Gently cooked at ~160°F, preserving 70%+ moisture, heat-sensitive vitamins, and essential amino acids. Supports kidney health, coat sheen, and firm stools.',
    pros: [
      'Human-grade ingredients cooked in USDA-inspected kitchens, not rendered meat meal',
      'Retains 70%+ moisture and heat-sensitive nutrients like taurine and B-vitamins',
      'Portion-controlled recipes make weight management far more precise than eyeballing kibble scoops',
    ],
    cons: [
      'Needs fridge or freezer space and must be thawed ahead of feeding time',
      'Costs noticeably more per calorie than dry kibble',
    ],
    readMore: "Fresh dog food is exactly what it sounds like: real cuts of meat, vegetables, and grains cooked gently, then portioned and refrigerated or frozen rather than extruded into shelf-stable pellets. Because the ingredients come from the same USDA-inspected supply chain used for human food, there's no rendered \"meat meal\", no need for synthetic preservatives to survive years on a shelf, and no high-heat extrusion step that strips out delicate nutrients.\n\nThe biggest practical benefit is digestibility. Fresh diets are typically 90%+ digestible compared to roughly 80% for dry kibble, which means less food is needed to hit the same calorie and nutrient targets, and stool volume tends to shrink noticeably within the first couple of weeks. The high moisture content (70%+ versus kibble's 8–10%) also takes pressure off the kidneys, which is especially valuable for senior dogs, dogs with a low thirst drive, or breeds prone to urinary crystals. Because recipes are usually single-protein and free of fillers, fresh food is also a common recommendation for dogs with food sensitivities or chronic skin issues.\n\nThe tradeoffs are cost and logistics rather than nutrition: you need freezer space, a thawing routine, and a bigger grocery-style budget than a bag of kibble. When shopping for a fresh brand, confirm it carries an AAFCO \"complete and balanced\" statement for your dog's life stage, leads with a named animal protein, and lists no synthetic preservatives (BHA, BHT, ethoxyquin). If you're not ready to commit to a full switch, starting with fresh food as a 25–50% topper over your current kibble is a low-risk way to get most of the digestibility and palatability benefits immediately.",
    productKey: 'whole-paws-turkey-sweet-potato-13oz-3pack',
    productNote: 'A convenient fresh, human-grade option to start with:',
  },
  {
    slug: 'raw-dog-food-barf',
    optionLabel: 'Option 2',
    accent: '#7928ca',
    title: 'Raw Dog Food (BARF)',
    summary: '80% muscle meat, 10% raw bone, 10% secreting organs. Mirrors ancestral ecology — natural enzymes, zero refined starches, optimal dental hygiene.',
    pros: [
      'Closest nutritional match to what a wild canine ancestor evolved to eat',
      'Raw edible bone mechanically scrapes tartar off teeth as the dog chews',
      'Zero refined starches or processed carbohydrate filler',
    ],
    cons: [
      'Highest food-safety burden of the three feeding styles (raw meat handling, freezing protocols)',
      'DIY ratios require precision — getting the bone percentage wrong causes constipation or, in puppies, skeletal issues',
      'Not recommended for immunocompromised dogs or households with young children, pregnant people, or elderly family members',
    ],
    readMore: "BARF stands for \"Biologically Appropriate Raw Food\" (sometimes \"Bones and Raw Food\"), and the 80-10-10 ratio behind it — 80% muscle meat, 10% raw edible bone, 10% secreting organ — is designed to mirror what a wild canine would get from consuming a whole prey animal. Done correctly, the bone content alone supplies a naturally balanced calcium-to-phosphorus ratio, the organ meat delivers concentrated vitamin A, iron, and B-vitamins, and nothing in the bowl is cooked, so heat-sensitive enzymes and amino acids stay fully intact.\n\nOwners who switch to raw commonly report firmer, smaller stools, cleaner teeth from the chewing action, and a visibly leaner, more muscled dog within a few months. The catch is that raw meat carries the same salmonella and listeria risk as raw meat prepared for human consumption, so it needs dedicated cutting boards, refrigerated storage, and prompt cleanup — and it's not a good fit for households with an immunocompromised person, a very young child, or an elderly family member who could be exposed to cross-contamination. Feeding raw bone also demands real precision: too much bone leads to hard, chalky stools and constipation, while too little strips away the calcium the diet depends on. For growing large-breed puppies, miscalculating the ratio over months can contribute to developmental skeletal problems.\n\nBecause of that precision requirement, most households find it far safer to start with a professionally-formulated raw product — frozen raw patties, freeze-dried raw, or high-pressure-pasteurized (HPP) raw, which reduces pathogen risk while keeping the nutrient profile close to true raw — before ever attempting to source and weigh a fully custom raw diet at home. If you do go fully DIY, work with a board-certified veterinary nutritionist to verify the recipe rather than relying on ratio rules of thumb alone.",
    productKey: 'old-mill-85-15-ground-beef-10pack',
    productNote: 'Raw, pasture-raised muscle meat to build a DIY 80-10-10 meal:',
  },
  {
    slug: 'commercial-kibble-toppers',
    optionLabel: 'Option 3',
    accent: '#0070f3',
    title: 'Superfood Kibble Toppers',
    summary: 'Adding 25–50% fresh whole-food toppers (bone broth, sardines, pumpkin) over standard kibble boosts bioavailable micronutrients by 40%+ while staying cost-effective.',
    pros: [
      'Most shelf-stable and budget-friendly of the three feeding styles',
      'Easy to portion, batch-buy, and automate with a timed feeder',
      'Whole-food toppers close a large share of the micronutrient and moisture gap without a full diet overhaul',
    ],
    cons: [
      'Base kibble is still extruded at 400°F+, which destroys some heat-sensitive vitamins and reduces moisture to roughly 8–10%',
      'Toppers add back some of the prep time and cost that kibble was chosen to avoid',
    ],
    readMore: "Commercial kibble remains the most practical everyday option for a lot of households: it's shelf-stable for up to a year unopened, cheap to buy in bulk, and easy to portion with a bowl or an automatic feeder for multi-dog homes. The tradeoff is the extrusion process itself — dry kibble is cooked under high heat and pressure (typically above 400°F) to form its shape and achieve a long shelf life, which destroys some heat-sensitive vitamins and leaves the finished food at only 8–10% moisture, versus 70%+ in fresh or raw diets.\n\nRather than abandoning kibble entirely, most veterinary nutritionists recommend keeping it as the calorie-dense base and adding a fresh or freeze-dried whole-food topper to cover the gap. A splash of unsalted bone broth restores moisture and adds collagen for joint support; canned sardines or a spoon of pure pumpkin puree add omega-3s and soluble fiber; and a freeze-dried raw meal mixer sprinkled over the bowl reintroduces raw, unprocessed muscle meat and organ nutrients without switching the whole diet. Aiming for toppers to make up roughly 25–50% of a meal's calories captures most of the palatability and nutrient boost while keeping the overall feeding budget close to kibble-only levels.\n\nThe quality of the base kibble still matters, though. Look for a named animal protein (\"deboned chicken\" or \"beef\", not vague \"meat meal\") as the first ingredient, ancient grains like oats or sorghum instead of heavy corn or wheat filler, and a brand that publishes third-party lab testing for heavy metals. Pairing a genuinely high-quality kibble with a rotating topper is one of the most cost-effective ways to get most of the benefits of fresh and raw feeding without the freezer space or the food-safety overhead.",
    productKey: 'stella-chewys-chicken-meal-mixers-1oz',
    productNote: 'A freeze-dried raw topper to boost any kibble:',
  },
];
