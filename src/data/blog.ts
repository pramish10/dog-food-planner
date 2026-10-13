export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    credentials: string;
  };
  reviewedBy: {
    name: string;
    role: string;
    credentials: string;
  };
  tags: string[];
  gradient: {
    from: string;
    to: string;
    badgeBg: string;
    badgeText: string;
    icon: string;
  };
  keyTakeaways: string[];
  tableOfContents: {
    id: string;
    title: string;
  }[];
  contentHtml: string;
  relatedSlugs: string[];
  affiliateProduct?: BlogAffiliateProduct;
}

export interface BlogAffiliateProduct {
  name: string;
  url: string;
}

export const BLOG_CATEGORIES = [
  'All Articles',
  'Canine Nutrition & Diets',
  'Fresh & Raw Feeding',
  'Puppy & Senior Care',
  'Digestion & Gut Health',
  'Safe Ingredients & Superfoods',
  'Commercial Food & Recalls',
] as const;

export type BlogCategory = typeof BLOG_CATEGORIES[number];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'science-of-canine-macros',
    slug: 'the-science-of-canine-macros',
    title: 'The Science of Canine Macros: How Much Protein, Fat, and Carbs Does Your Dog Actually Need?',
    subtitle: 'Stop guessing your dog\'s macronutrient split. We break down NRC biological value standards, essential fatty acid ratios, and the physiological truth about carbohydrates in canine diets.',
    category: 'Canine Nutrition & Diets',
    categorySlug: 'canine-nutrition-diets',
    excerpt: 'Understanding your dog\'s macronutrient split is the foundation of long-term vitality. Discover the biological role of animal-based protein, healthy essential fatty acids (Omega-3 & 6), and how to read the Guaranteed Analysis on a dry matter basis.',
    image: '/images/blog/science-of-canine-macros.jpg',
    imageAlt: 'Ceramic dog food bowl with fresh beef cuts, salmon, and nutritious spinach on a wooden table',
    featured: true,
    publishedDate: 'March 28, 2026',
    updatedDate: 'April 6, 2026',
    readTime: '8 min read',
    author: {
      name: 'Dr. Maya Lin, DVM',
      role: 'Veterinary Nutrition Researcher',
      avatar: '👩‍⚕️',
      credentials: 'DVM, CVA, Member of the American Academy of Veterinary Nutrition (AAVN)'
    },
    reviewedBy: {
      name: 'Dr. Aris Thorne, DVM',
      role: 'Board-Certified Veterinary Nutritionist',
      credentials: 'DACVIM (Nutrition)'
    },
    tags: ['Macronutrients', 'AAFCO Standards', 'Protein', 'Healthy Fats', 'Carbohydrates', 'Calorie Calculation'],
    gradient: {
      from: '#c47a2b',
      to: '#e8a44a',
      badgeBg: 'rgba(196,122,43,0.12)',
      badgeText: '#92400e',
      icon: '🥩'
    },
    keyTakeaways: [
      'Dogs have no minimum dietary requirement for carbohydrates according to the National Research Council (NRC); their primary energy drivers are clean animal proteins and bioavailable fats.',
      'Protein quality is governed by amino acid profile and biological value (BV), not just crude percentage on a feed tag.',
      'Omega-3 fatty acids (EPA and DHA) from marine sources possess potent anti-inflammatory properties that support joints, kidneys, and cognitive health.',
      'Guaranteed Analysis on commercial pet food bags lists "as-fed" values, which must be converted to Dry Matter Basis (DMB) to accurately compare kibble, wet food, and fresh cooked diets.'
    ],
    tableOfContents: [
      { id: 'introduction-to-canine-macronutrients', title: '1. Introduction to Canine Macronutrients' },
      { id: 'protein-the-biological-building-block', title: '2. Protein: The Biological Building Block' },
      { id: 'fats-the-primary-energy-source', title: '3. Fats: The Primary Energy Source' },
      { id: 'the-carbohydrate-controversy', title: '4. The Carbohydrate Controversy' },
      { id: 'dry-matter-basis-calculation', title: '5. How to Calculate Dry Matter Basis (DMB)' },
      { id: 'optimal-macro-splits-by-lifestyle', title: '6. Optimal Macro Splits by Lifestyle' },
      { id: 'vet-summary-and-action-steps', title: '7. Summary & Actionable Recommendations' }
    ],
    contentHtml: `
      <p class="lead">Walk down any pet store aisle or browse fresh food brands, and you are met with bold percentages: <em>"32% Crude Protein!"</em>, <em>"Grain-Free Energy!"</em>, <em>"Low-Fat Formula!"</em> But without understanding how dogs metabolize macronutrients, those numbers on the label are meaningless.</p>

      <p>Dogs are classified taxonomically as order <em>Carnivora</em>, yet ecologically they function as adaptive, scavenging carnivores. While they can synthesize glucose from glycerol and amino acids via gluconeogenesis, their metabolic preference and internal organ systems thrive when fueled by high-biological-value animal tissues and healthy lipids.</p>

      <h2 id="introduction-to-canine-macronutrients">1. Introduction to Canine Macronutrients</h2>
      <p>Every calorie your dog consumes falls into one of three macronutrient buckets: <strong>Protein</strong> (4 kcal/g), <strong>Fat</strong> (9 kcal/g), and <strong>Carbohydrates</strong> (4 kcal/g). Unlike humans, who rely predominantly on dietary carbohydrates for endurance and glycolytic energy, a canine's metabolic machinery is fundamentally lipid-driven.</p>

      <div class="callout callout-vet">
        <div class="callout-title">🐾 Veterinary Fact</div>
        <p>A sled dog running the 1,000-mile Iditarod burns up to 12,000 calories per day on a diet comprising approximately 60% fat, 35% protein, and under 5% carbohydrates. Canines possess unparalleled mitochondrial density in muscle tissue, allowing them to oxidize free fatty acids with extreme efficiency.</p>
      </div>

      <h2 id="protein-the-biological-building-block">2. Protein: The Biological Building Block</h2>
      <p>Protein is not simply fuel; it is the physical framework of your dog's living body. Dietary protein provides the 10 essential amino acids that canines cannot synthesize endogenously: <em>arginine, histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine</em>.</p>

      <p>When assessing dog food protein, two critical factors outweigh simple percentages:</p>
      <ul>
        <li><strong>Biological Value (BV):</strong> Measures how efficiently the canine body absorbs and utilizes the protein. Whole eggs have the highest BV (100), followed by muscle meats (75–88), while plant proteins like corn gluten meal score significantly lower (under 60).</li>
        <li><strong>Digestibility:</strong> High-heat extrusion (standard commercial kibble) can denature amino acids, cross-linking lysine through the Maillard reaction and diminishing bioavailability. Gently cooked and fresh whole-food proteins retain superior amino acid integrity.</li>
      </ul>

      <h2 id="fats-the-primary-energy-source">3. Fats: The Primary Energy Source</h2>
      <p>Fats are twice as calorically dense as protein and carbohydrates, serving as your dog's primary stamina reservoir while delivering fat-soluble vitamins (A, D, E, and K). Furthermore, essential fatty acids are vital for cellular membrane fluidity, neurological development, and coat health.</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-[#f0d5a8] dark:border-[#3a2510] text-sm">
          <thead>
            <tr class="bg-[#fcf5ec] dark:bg-[#201408] border-b border-[#f0d5a8] dark:border-[#3a2510]">
              <th class="p-3 font-semibold text-[#1c0f00] dark:text-[#fde8c8]">Fatty Acid Class</th>
              <th class="p-3 font-semibold text-[#1c0f00] dark:text-[#fde8c8]">Key Compounds</th>
              <th class="p-3 font-semibold text-[#1c0f00] dark:text-[#fde8c8]">Primary Dietary Source</th>
              <th class="p-3 font-semibold text-[#1c0f00] dark:text-[#fde8c8]">Physiological Impact</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#f0d5a8]/60 dark:divide-[#3a2510]">
            <tr>
              <td class="p-3 font-medium text-[#92400e] dark:text-[#f59e0b]">Omega-3 (Marine)</td>
              <td class="p-3">EPA & DHA</td>
              <td class="p-3">Wild salmon, sardines, mackerel, krill oil</td>
              <td class="p-3">Anti-inflammatory, protects joint cartilage & kidney glomeruli</td>
            </tr>
            <tr>
              <td class="p-3 font-medium text-[#92400e] dark:text-[#f59e0b]">Omega-3 (Plant)</td>
              <td class="p-3">ALA</td>
              <td class="p-3">Flaxseed, chia seeds, hempseed</td>
              <td class="p-3">Minimal canine conversion to EPA (&lt;5%); limited anti-inflammatory benefit</td>
            </tr>
            <tr>
              <td class="p-3 font-medium text-[#92400e] dark:text-[#f59e0b]">Omega-6</td>
              <td class="p-3">Linoleic Acid (LA), Arachidonic</td>
              <td class="p-3">Chicken fat, pork, sunflower oil</td>
              <td class="p-3">Skin barrier permeability, cellular growth, immune signaling</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="the-carbohydrate-controversy">4. The Carbohydrate Controversy</h2>
      <p>Neither the <em>Association of American Feed Control Officials (AAFCO)</em> nor the <em>National Research Council (NRC)</em> lists a minimum requirement for carbohydrates in canine nutrition. While modern domestic dogs possess copies of the pancreatic amylase gene (AMY2B) allowing starch digestion, excessive refined carbohydrates (45–60% in budget kibbles) often lead to blood glucose spikes, chronic obesity, and systemic inflammation.</p>

      <p>However, specific non-digestible soluble fibers—such as inulin from chicory root, beta-glucans from oats, and pectin from steamed pumpkin—ferment into <strong>short-chain fatty acids (SCFAs like butyrate)</strong>, nourishing the colonocytes and maintaining gut barrier integrity.</p>

      <h2 id="dry-matter-basis-calculation">5. How to Calculate Dry Matter Basis (DMB)</h2>
      <p>You cannot compare a canned dog food with 10% protein to a dry kibble with 26% protein directly, because water dilutes the numbers. To calculate the real Dry Matter Basis (DMB):</p>

      <ol>
        <li>Subtract the moisture percentage from 100% to find total Dry Matter.</li>
        <li>Divide the listed nutrient percentage by the Dry Matter figure.</li>
        <li>Multiply by 100.</li>
      </ol>

      <div class="callout callout-tip">
        <div class="callout-title">💡 Real World Example</div>
        <p>A canned dog food lists: <strong>Protein 10%, Moisture 78%</strong>.<br>
        1. Dry Matter = 100% - 78% = 22%.<br>
        2. Real Protein = (10 / 22) × 100 = <strong>45.4% Dry Matter Protein</strong>.<br>
        That canned food actually delivers vastly more protein than a 28% dry kibble!</p>
      </div>

      <h2 id="optimal-macro-splits-by-lifestyle">6. Optimal Macro Splits by Lifestyle</h2>
      <p>Different dogs require tailored macronutrient ratios based on their life stage and metabolic demands:</p>

      <ul>
        <li><strong>Active Adult Companions:</strong> 28–36% Protein, 16–22% Fat, 15–25% Quality Low-GI Carbs.</li>
        <li><strong>Weight Loss & Sedentary Dogs:</strong> 34–42% Protein (preserves lean muscle mass), 10–14% Lower Fat, 20–30% High-Fiber Carbs.</li>
        <li><strong>Working & Agility Athletes:</strong> 30–35% Protein, 22–30% High-Density Lipids, &lt;15% Carbs.</li>
      </ul>

      <h2 id="vet-summary-and-action-steps">7. Summary & Actionable Recommendations</h2>
      <p>To optimize your dog's daily bowl today, focus on nutrient density over marketing buzzwords. Calculate your dog's daily Resting Energy Requirements (RER), aim for real animal proteins within the first 3 ingredients, and consider topping meals with marine omega-3s to optimize their anti-inflammatory balance.</p>
    `,
    relatedSlugs: ['how-to-transition-dog-to-fresh-food', 'top-vet-approved-superfoods-for-dogs', 'gut-health-and-chronic-allergies'],
    affiliateProduct: {
      name: 'Zesty Paws Wild Alaskan Salmon Oil for Dogs & Cats, 16oz',
      url: 'https://amzn.to/46HCJdW',
    },
  },
  {
    id: 'transition-dog-to-fresh-food',
    slug: 'how-to-transition-dog-to-fresh-food',
    title: 'The 10-Day Safe Transition Guide: Switching Your Dog to Fresh Food Without Tummy Troubles',
    subtitle: 'A step-by-step veterinary protocol for shifting from extruded kibble to fresh, gently cooked, or raw diets without causing diarrhea, vomiting, or digestive panic.',
    category: 'Fresh & Raw Feeding',
    categorySlug: 'fresh-raw-feeding',
    excerpt: 'Switching your dog\'s diet too quickly is the #1 cause of acute gastrointestinal upset. Learn the proven 10-day transition timeline, digestive enzyme buffering, and how to read your dog\'s stool quality throughout the switch.',
    image: '/images/blog/transition-dog-to-fresh-food.jpg',
    imageAlt: 'Comparison of dry kibble and gently cooked fresh dog food with chicken, sweet potatoes, and pureed pumpkin',
    featured: false,
    publishedDate: 'March 22, 2026',
    updatedDate: 'April 2, 2026',
    readTime: '6 min read',
    author: {
      name: 'Elena Vance',
      role: 'Canine Nutrition Specialist & Formulator',
      avatar: '🥣',
      credentials: 'CertCN, Feline & Canine Holistic Nutritionist'
    },
    reviewedBy: {
      name: 'Dr. Marcus Vance, DVM',
      role: 'Holistic Veterinary Practitioner',
      credentials: 'DVM, CVA (Chi University)'
    },
    tags: ['Fresh Dog Food', 'Food Transition', 'Digestive Health', 'Kibble to Fresh', 'Probiotics'],
    gradient: {
      from: '#2e7d32',
      to: '#66bb6a',
      badgeBg: 'rgba(46,125,50,0.12)',
      badgeText: '#1b5e20',
      icon: '🍲'
    },
    keyTakeaways: [
      'Abrupt food changes shock the canine microbiome, which adapts its digestive enzyme output to the specific macronutrient profile of its regular food.',
      'A gradual 10-day step-up schedule (25% -> 50% -> 75% -> 100%) reduces the incidence of gastrointestinal distress by over 85%.',
      'Warm bone broth and pure pumpkin puree are the two most effective natural digestive buffers to add during transitions.',
      'Slight stool softening on Days 3-5 is normal; liquid diarrhea or lethargy indicates moving too fast or an underlying protein intolerance.'
    ],
    tableOfContents: [
      { id: 'why-abrupt-diet-changes-cause-upset', title: '1. Why Abrupt Diet Changes Cause Stomach Upset' },
      { id: 'the-proven-10-day-transition-schedule', title: '2. The Proven 10-Day Transition Schedule' },
      { id: 'digestive-buffers-pumpkin-and-probiotics', title: '3. Digestive Buffers: Pumpkin, Bone Broth & Probiotics' },
      { id: 'how-to-read-your-dogs-stool', title: '4. How to Read Your Dog\'s Stool Quality' },
      { id: 'handling-picky-eaters-during-transition', title: '5. Handling Picky Eaters & Texture Refusal' },
      { id: 'when-to-pause-and-call-the-vet', title: '6. When to Pause and Call the Vet' }
    ],
    contentHtml: `
      <p class="lead">You’ve ordered your first shipment of human-grade fresh dog food or prepared a batch of homemade gently cooked meat and veggies. Your excitement is high—but if you dump a full bowl of new food in front of your dog tonight, tomorrow morning may bring an unpleasant mess on the living room rug.</p>

      <h2 id="why-abrupt-diet-changes-cause-upset">1. Why Abrupt Diet Changes Cause Stomach Upset</h2>
      <p>Your dog's gastrointestinal tract is colonized by billions of symbiotic microbes that specialize in fermenting and breaking down whatever food they have been eating consistently for months. When switching from dry kibble (which digests slowly and contains heavy starch) to fresh whole food (which digests quickly and has high moisture and bioavailable fat), the bacterial colonies require 7 to 10 days to shift enzyme secretion.</p>

      <h2 id="the-proven-10-day-transition-schedule">2. The Proven 10-Day Transition Schedule</h2>
      <p>Follow this veterinary step-by-step ratio protocol for a smooth transition:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-[#f0d5a8] dark:border-[#3a2510] text-sm">
          <thead>
            <tr class="bg-[#fcf5ec] dark:bg-[#201408] border-b border-[#f0d5a8] dark:border-[#3a2510]">
              <th class="p-3 font-semibold text-[#1c0f00] dark:text-[#fde8c8]">Timeline</th>
              <th class="p-3 font-semibold text-[#1c0f00] dark:text-[#fde8c8]">Original Food Ratio</th>
              <th class="p-3 font-semibold text-[#1c0f00] dark:text-[#fde8c8]">New Fresh Food Ratio</th>
              <th class="p-3 font-semibold text-[#1c0f00] dark:text-[#fde8c8]">Notes & Digestive Support</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#f0d5a8]/60 dark:divide-[#3a2510]">
            <tr>
              <td class="p-3 font-semibold text-[#92400e] dark:text-[#f59e0b]">Days 1 – 3</td>
              <td class="p-3">75% Old Food</td>
              <td class="p-3">25% Fresh Food</td>
              <td class="p-3">Serve as a topper; monitor stool consistency.</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-[#92400e] dark:text-[#f59e0b]">Days 4 – 6</td>
              <td class="p-3">50% Old Food</td>
              <td class="p-3">50% Fresh Food</td>
              <td class="p-3">Add 1 tbsp plain canned pumpkin if stool softens.</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-[#92400e] dark:text-[#f59e0b]">Days 7 – 9</td>
              <td class="p-3">25% Old Food</td>
              <td class="p-3">75% Fresh Food</td>
              <td class="p-3">Microbiome has adapted; energy levels should be vibrant.</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-[#92400e] dark:text-[#f59e0b]">Day 10+</td>
              <td class="p-3">0% Old Food</td>
              <td class="p-3">100% Fresh Food</td>
              <td class="p-3">Transition complete! Celebrate a thriving pup.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="digestive-buffers-pumpkin-and-probiotics">3. Digestive Buffers: Pumpkin, Bone Broth & Probiotics</h2>
      <p>To guarantee zero stomach upset during transition, add these three natural gastrointestinal helpers:</p>
      <ul>
        <li><strong>Pure Canned Pumpkin:</strong> Rich in soluble fiber, pumpkin absorbs excess water in loose stools while softening hard feces. Dosage: 1 teaspoon per 10 lbs body weight daily.</li>
        <li><strong>Warm Bone Broth:</strong> Provides soothing glycine, gelatin, and hydration that coat the stomach lining and stimulate appetite.</li>
        <li><strong>Soil-Based Organisms (SBO Probiotics):</strong> Spore-forming strains like <em>Bacillus coagulans</em> survive harsh stomach acids and assist with novel protein fermentation.</li>
      </ul>

      <h2 id="how-to-read-your-dogs-stool">4. How to Read Your Dog's Stool Quality</h2>
      <p>The Bristol Stool scale for canines rates feces from Grade 1 (rock-hard pebbles) to Grade 7 (watery diarrhea). During a healthy transition:</p>
      <ul>
        <li><strong>Ideal Stool (Grade 2):</strong> Firm, segmented log that leaves virtually no residue when picked up.</li>
        <li><strong>Acceptable Mild Softening (Grade 3–4):</strong> Moist stool that still retains form. Simply hold current ratios for an extra 2 days before stepping up.</li>
        <li><strong>Unacceptable Liquid (Grade 6–7):</strong> Watery puddle. Drop back to 90% old food and add pumpkin.</li>
      </ul>

      <h2 id="handling-picky-eaters-during-transition">5. Handling Picky Eaters & Texture Refusal</h2>
      <p>Some dogs conditioned to salty, fat-sprayed dry kibble may sniff fresh food with skepticism. Gently warm the fresh food for 10 seconds in the microwave to release aromatic volatile fatty acids—canine taste is 80% driven by scent!</p>

      <h2 id="when-to-pause-and-call-the-vet">6. When to Pause and Call the Vet</h2>
      <p>If your dog vomits more than once, shows acute lethargy, or has bloody diarrhea, stop the new food immediately. While dietary transition upset is usually benign, preexisting pancreatitis or true protein allergies must be ruled out by your veterinarian.</p>
    `,
    relatedSlugs: ['the-science-of-canine-macros', 'top-vet-approved-superfoods-for-dogs', 'rotational-feeding-benefits'],
    affiliateProduct: {
      name: 'Brutus Broth Chicken Bone Broth – Hip & Joint Meal Topper, 16.9 fl oz',
      url: 'https://amzn.to/4zSd7Zb',
    },
  },
  {
    id: 'superfoods-for-dogs-bowl',
    slug: 'top-vet-approved-superfoods-for-dogs',
    title: '7 Vet-Approved Bowl Boosters: Nutrient-Dense Superfoods You Can Add Today',
    subtitle: 'You do not need to overhaul your entire budget to give your dog the benefits of fresh whole foods. Here are 7 affordable, research-backed kitchen staples that transform ordinary kibble.',
    category: 'Safe Ingredients & Superfoods',
    categorySlug: 'safe-ingredients-superfoods',
    excerpt: 'Even adding 10-20% whole foods to your dog\'s bowl provides live enzymes, antioxidants, and bioavailable micronutrients missing from processed pet food. Discover 7 vet-approved superfoods you can buy at any grocery store.',
    image: '/images/blog/superfoods-for-dogs-bowl.jpg',
    imageAlt: 'Healthy canine superfoods bowl with blueberries, fresh pumpkin slices, raw egg yolk, wild sardines, and broccoli',
    featured: false,
    publishedDate: 'March 16, 2026',
    updatedDate: 'April 1, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Aris Thorne, DVM',
      role: 'Board-Certified Veterinary Nutritionist',
      avatar: '🫐',
      credentials: 'DACVIM (Nutrition), Clinical Canine Dietetics Specialist'
    },
    reviewedBy: {
      name: 'Dr. Maya Lin, DVM',
      role: 'Veterinary Nutrition Researcher',
      credentials: 'DVM, CVA'
    },
    tags: ['Superfoods', 'Fresh Toppers', 'Omega-3', 'Antioxidants', 'Kibble Boosters'],
    gradient: {
      from: '#d97706',
      to: '#f59e0b',
      badgeBg: 'rgba(217,119,6,0.12)',
      badgeText: '#b45309',
      icon: '🫐'
    },
    keyTakeaways: [
      'Purdue University research found that adding leafy greens and colorful vegetables just 3 times per week reduced bladder cancer risk in Scottish Terriers by up to 90%.',
      'Canned sardines in plain water are one of the most potent, low-mercury sources of EPA and DHA omega-3s available.',
      'Antioxidants from whole blueberries pass through the canine blood-brain barrier to protect cognitive function in senior dogs.',
      'Always follow the 90/10 rule: toppers and whole food additions should not exceed 10-15% of your dog\'s daily caloric intake unless you are formulating a complete balanced recipe.'
    ],
    tableOfContents: [
      { id: 'the-power-of-the-10-percent-bowl-topper-rule', title: '1. The Power of the 10% Bowl Topper Rule' },
      { id: '1-canned-sardines-in-water', title: '2. Wild Canned Sardines in Water' },
      { id: '2-blueberries-and-dark-berries', title: '3. Blueberries: Cellular Cognitive Protectors' },
      { id: '3-steamed-pure-pumpkin', title: '4. Steamed Pure Pumpkin' },
      { id: '4-plain-unsweetened-kefir', title: '5. Plain Unsweetened Kefir / Goat Milk' },
      { id: '5-pasture-raised-egg-yolks', title: '6. Pasture-Raised Egg Yolks' },
      { id: '6-steamed-broccoli-and-greens', title: '7. Steamed Broccoli & Microgreens' },
      { id: '7-organic-simmered-bone-broth', title: '8. Organic Simmered Bone Broth' }
    ],
    contentHtml: `
      <p class="lead">Commercial extruded kibble is baked at temperatures exceeding 200°C (400°F). While this produces shelf-stable, pathogen-safe food, high thermal processing degrades heat-sensitive vitamins, volatile antioxidants, and live enzymes. The solution? Add vibrant whole food superfoods directly into the bowl.</p>

      <h2 id="the-power-of-the-10-percent-bowl-topper-rule">1. The Power of the 10% Bowl Topper Rule</h2>
      <p>If you feed a commercially complete and balanced diet, adding up to 10% to 15% of your dog's daily calories as healthy fresh whole foods will not unbalance their mineral ratios. It gives your dog living nutrition without the intimidation of full home-cooking.</p>

      <h2 id="1-canned-sardines-in-water">2. Wild Canned Sardines in Water</h2>
      <p>Sardines sit at the very bottom of the aquatic food chain, meaning they do not accumulate the heavy metal neurotoxins (like mercury and PCBs) found in tuna or apex fish. One small sardine delivers a massive burst of anti-inflammatory EPA and DHA, supporting silky coats, cognitive function, and supple joints.</p>
      <div class="callout callout-tip">
        <div class="callout-title">Feeding Tip</div>
        <p>Choose wild-caught sardines packed strictly in <strong>water with no added salt</strong>. Feed 1/2 sardine per 15 lbs body weight 2–3 times per week.</p>
      </div>

      <h2 id="2-blueberries-and-dark-berries">3. Blueberries: Cellular Cognitive Protectors</h2>
      <p>Blueberries are packed with anthocyanins, polyphenols that have been shown in canine cognitive studies to cross the blood-brain barrier. Sled dogs supplemented with blueberries during intense endurance runs showed significantly lower oxidative stress biomarkers in blood plasma.</p>

      <h2 id="3-steamed-pure-pumpkin">4. Steamed Pure Pumpkin</h2>
      <p>Rich in prebiotic fiber and potassium, pure canned pumpkin (not sugary pumpkin pie mix) acts as an intestinal regulator. Its soluble fiber ferments into short-chain fatty acids that nourish beneficial bifidobacteria in your dog's colon.</p>

      <h2 id="4-plain-unsweetened-kefir">5. Plain Unsweetened Kefir / Goat Milk</h2>
      <p>Unlike cow's milk, which contains high levels of A1 beta-casein that many dogs cannot digest, goat milk and fermented kefir contain smaller fat globules and A2 proteins. Kefir contains over 30 distinct probiotic bacterial and yeast strains that seed the canine microbiome.</p>

      <h2 id="5-pasture-raised-egg-yolks">6. Pasture-Raised Egg Yolks</h2>
      <p>Nature's multivitamin. Egg yolks are concentrated sources of <strong>choline</strong> (critical for liver and neurological function), <strong>lutein</strong> (ocular health), and <strong>biotin</strong> (skin and claw integrity). A lightly poached or raw egg yolk twice a week is an incredible nutrient booster.</p>

      <h2 id="6-steamed-broccoli-and-greens">7. Steamed Broccoli & Microgreens</h2>
      <p>Cruciferous vegetables contain glucoraphanin, which converts into <strong>sulforaphane</strong>—a potent activator of the Nrf2 pathway that triggers intracellular antioxidant and detoxification defenses. Lightly steam and puree before serving so canine digestive enzymes can access the plant cell walls.</p>

      <h2 id="7-organic-simmered-bone-broth">8. Organic Simmered Bone Broth</h2>
      <p>Slowly simmering marrow bones and cartilage with a splash of apple cider vinegar extracts collagen, gelatin, glycine, and glucosamine. It is the ultimate hydration booster for dogs reluctant to drink from their water bowl.</p>
    `,
    relatedSlugs: ['the-science-of-canine-macros', 'gut-health-and-chronic-allergies', 'how-to-transition-dog-to-fresh-food'],
    affiliateProduct: {
      name: 'Wild Planet Wild Sardines in Water, No Salt Added, 4.4oz (Pack of 12)',
      url: 'https://amzn.to/4xg3W2h',
    },
  },
  {
    id: 'puppy-feeding-growth-milestones',
    slug: 'puppy-feeding-roadmap-growth-curves',
    title: 'Puppy Feeding Roadmap: Caloric Multiplication, Growth Curves & Skeletal Health',
    subtitle: 'From 8 weeks to adulthood: why overfeeding calcium causes developmental orthopedic disease in large breeds, and how to safely recalculate portions as weight surges.',
    category: 'Puppy & Senior Care',
    categorySlug: 'puppy-senior-care',
    excerpt: 'Puppies grow faster in their first 12 months than humans do in their first 15 years. Learn how to calculate precise puppy caloric requirements, protect growing joint plates, and avoid over-supplementation.',
    image: '/images/blog/puppy-feeding-roadmap.jpg',
    imageAlt: 'Golden retriever puppy sitting by a ceramic bowl with veterinarian-designed puppy food',
    featured: false,
    publishedDate: 'March 10, 2026',
    updatedDate: 'March 30, 2026',
    readTime: '7 min read',
    author: {
      name: 'Dr. Maya Lin, DVM',
      role: 'Veterinary Nutrition Researcher',
      avatar: '🐾',
      credentials: 'DVM, CVA, Puppy Growth Specialist'
    },
    reviewedBy: {
      name: 'Dr. Aris Thorne, DVM',
      role: 'Board-Certified Veterinary Nutritionist',
      credentials: 'DACVIM (Nutrition)'
    },
    tags: ['Puppy Nutrition', 'Growth Curves', 'Large Breed Puppies', 'Calcium Ratio', 'Feeding Chart'],
    gradient: {
      from: '#0284c7',
      to: '#38bdf8',
      badgeBg: 'rgba(2,132,199,0.12)',
      badgeText: '#0369a1',
      icon: '🐾'
    },
    keyTakeaways: [
      'Puppies under 4 months require up to 3.0x their base Resting Energy Requirement (RER) to fuel skeletal expansion and cellular growth.',
      'Large breed puppies (&gt;55 lbs adult weight) must never be free-fed; rapid growth increases hip dysplasia and Osteochondritis Dissecans (OCD) rates by over 300%.',
      'Puppies cannot regulate intestinal calcium absorption before 6 months of age; excess calcium directly hardens growth plates prematurely.',
      'Switching to adult food should occur between 10-12 months for small dogs, but not until 18-24 months for giant breeds like Great Danes and Mastiffs.'
    ],
    tableOfContents: [
      { id: 'puppy-metabolism-vs-adult-dogs', title: '1. Puppy Metabolism vs. Adult Dogs' },
      { id: 'calculating-puppy-daily-calories', title: '2. Calculating Puppy Daily Calories (RER Multipliers)' },
      { id: 'the-calcium-to-phosphorus-danger-zone', title: '3. The Calcium-to-Phosphorus Danger Zone' },
      { id: 'small-breed-vs-large-breed-differences', title: '4. Small Breed vs. Large Breed Nutritional Needs' },
      { id: 'weekly-weigh-in-and-portion-adjustments', title: '5. Weekly Weigh-Ins & Portion Adjustment Protocol' }
    ],
    contentHtml: `
      <p class="lead">Bringing home an 8-week-old puppy is pure joy—until you face the feeding instructions on the back of the bag. A puppy's metabolic demand is a moving target: their body weight doubles and triples within months, and their skeleton undergoes rapid remodeling.</p>

      <h2 id="puppy-metabolism-vs-adult-dogs">1. Puppy Metabolism vs. Adult Dogs</h2>
      <p>During the rapid growth phase (8 to 16 weeks), a puppy's energy needs are enormous. In addition to normal thermoregulation and organ maintenance, their bodies are depositing new bone matrix, building muscle fibers, and developing neural pathways.</p>

      <h2 id="calculating-puppy-daily-calories">2. Calculating Puppy Daily Calories (RER Multipliers)</h2>
      <p>Veterinary nutritionists use the standard formula: <code>RER = 70 × (Weight in kg)^0.75</code>. While an adult neutered dog uses an activity factor of 1.6× RER, puppies use scaled multipliers:</p>
      <ul>
        <li><strong>Under 4 Months Old:</strong> <code>3.0 × RER</code></li>
        <li><strong>4 Months to Adult Size:</strong> <code>2.0 × RER</code></li>
        <li><strong>80% of Adult Weight to Full Maturity:</strong> <code>1.8 × RER</code></li>
      </ul>

      <h2 id="the-calcium-to-phosphorus-danger-zone">3. The Calcium-to-Phosphorus Danger Zone</h2>
      <p>Adult dogs possess feedback mechanisms in the gut lining: if they consume excess calcium, the intestine down-regulates absorption. <strong>Puppies under 6 months cannot do this.</strong> They absorb nearly all dietary calcium passively. If fed an uncalibrated diet or over-supplemented with bone meal, excess calcium disrupts enchondral ossification, triggering developmental orthopedic disorders like hypertrophic osteodystrophy (HOD).</p>

      <div class="callout callout-warning">
        <div class="callout-title">⚠️ Never Add Calcium Supplements to Puppy Food</div>
        <p>If your puppy is eating a commercial puppy food with the AAFCO Growth statement, <strong>never add calcium powder, eggshells, or bone meal</strong>. The formula is already strictly balanced at 1.2:1 to 1.4:1 Calcium to Phosphorus.</p>
      </div>

      <h2 id="small-breed-vs-large-breed-differences">4. Small Breed vs. Large Breed Nutritional Needs</h2>
      <p>A Chihuahua pup reaches adult size around 9 months, whereas an Irish Wolfhound continues skeletal maturation until 24 months. Large breed puppy diets are formulated with lower overall fat and restricted calcium (typically 1.2% maximum dry matter) to promote steady, controlled growth rather than rapid weight spikes.</p>

      <h2 id="weekly-weigh-in-and-portion-adjustments">5. Weekly Weigh-Ins & Portion Adjustment Protocol</h2>
      <p>Weigh your puppy on the same scale once every 7 days. Plug the new weight into our <a href="/feeding-calculator" class="text-[#c47a2b] font-semibold underline">Dog Feeding Calculator</a> to update daily grams. Remember: a slightly lean puppy with palpable ribs will live a longer, healthier life with pristine joints.</p>
    `,
    relatedSlugs: ['the-science-of-canine-macros', 'how-to-transition-dog-to-fresh-food', 'senior-dog-nutrition-aging-metabolism']
  },
  {
    id: 'senior-dog-nutrition-aging-metabolism',
    slug: 'senior-dog-nutrition-diet-adjustments',
    title: 'Senior Dog Nutrition: Why Older Dogs Need More Protein, Not Less',
    subtitle: 'Dispelling the dangerous myth of protein restriction for aging dogs. Learn how high-biological-value amino acids prevent sarcopenia (muscle loss) while protecting renal and kidney longevity.',
    category: 'Puppy & Senior Care',
    categorySlug: 'puppy-senior-care',
    excerpt: 'For decades, pet owners were told to reduce protein for senior dogs. Modern veterinary research proves the exact opposite: older dogs need higher protein quality to maintain muscle mass and immune resilience.',
    image: '/images/blog/senior-dog-nutrition.jpg',
    imageAlt: 'Senior Golden Retriever resting comfortably next to an elevated ceramic bowl with warm nutritious dog stew',
    featured: false,
    publishedDate: 'March 04, 2026',
    updatedDate: 'March 25, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Marcus Vance, DVM',
      role: 'Holistic Veterinary Practitioner',
      avatar: '🐕',
      credentials: 'DVM, CVA, Geriatric Canine Specialist'
    },
    reviewedBy: {
      name: 'Dr. Maya Lin, DVM',
      role: 'Veterinary Nutrition Researcher',
      credentials: 'DVM, CVA'
    },
    tags: ['Senior Dogs', 'Sarcopenia', 'Joint Health', 'Kidney Health', 'Aging Canine Diets'],
    gradient: {
      from: '#8b5cf6',
      to: '#a78bfa',
      badgeBg: 'rgba(139,92,246,0.12)',
      badgeText: '#6d28d9',
      icon: '🐕'
    },
    keyTakeaways: [
      'Healthy senior dogs require approximately 50% more digestible protein per pound of body weight than young adult dogs to maintain muscle mass.',
      'Sarcopenia (age-related loss of skeletal muscle) is one of the leading contributors to mobility collapse and euthanasia in geriatric dogs.',
      'Protein restriction is only warranted in advanced stages of chronic kidney disease (IRIS Stage 3 or 4) under direct veterinary supervision.',
      'Older dogs experience reduced olfactory acuity; warming food to body temperature (38°C / 100°F) revitalizes mealtime appetite.'
    ],
    tableOfContents: [
      { id: 'the-protein-restriction-myth-debunked', title: '1. The Protein Restriction Myth Debunked' },
      { id: 'combating-canine-sarcopenia-and-muscle-wasting', title: '2. Combating Canine Sarcopenia & Muscle Wasting' },
      { id: 'caloric-needs-drop-as-metabolism-slows', title: '3. Caloric Needs Drop as Metabolism Slows' },
      { id: 'essential-joint-and-renal-supplements', title: '4. Essential Joint & Renal Nutrients' },
      { id: 'hydration-strategies-for-aging-kidneys', title: '5. Hydration Strategies for Aging Kidneys' }
    ],
    contentHtml: `
      <p class="lead">As our beloved companions enter their golden years—silver muzzle, slower walks, longer naps—their nutritional requirements undergo a dramatic shift. Sadly, many well-intentioned owners switch their senior dogs to low-protein "Senior" kibbles that actually accelerate muscle wasting.</p>

      <h2 id="the-protein-restriction-myth-debunked">1. The Protein Restriction Myth Debunked</h2>
      <p>In the 1970s and 80s, veterinary dogma assumed that high protein caused kidney failure in older animals. Decades of landmark research (including peer-reviewed studies by Finco et al. at the University of Georgia) proved that <strong>dietary protein does not cause renal failure or damage healthy kidneys</strong>.</p>
      <p>In fact, as dogs age, their protein turnover rate and digestive absorption efficiency decline. A healthy 11-year-old Golden Retriever requires <em>higher quality, more bioavailable protein</em> than a 3-year-old dog to synthesize antibodies, hormones, and muscle tissue.</p>

      <h2 id="combating-canine-sarcopenia-and-muscle-wasting">2. Combating Canine Sarcopenia & Muscle Wasting</h2>
      <p>Sarcopenia is the involuntary loss of skeletal muscle mass associated with aging. When an older dog lacks adequate dietary amino acids, the body catabolizes its own biceps, quadriceps, and dorsal back muscles for vital metabolic functions. Loss of hindquarter strength is often mistaken for arthritis, when in reality it is muscle atrophy caused by protein starvation.</p>

      <h2 id="caloric-needs-drop-as-metabolism-slows">3. Caloric Needs Drop as Metabolism Slows</h2>
      <p>While protein requirements increase, total caloric needs decline by 20% to 30% due to reduced activity and decreased thyroid hormone output. The ideal senior formula is <strong>high in bioavailable protein, moderate in healthy fats, and low in empty starchy carbs</strong>.</p>

      <h2 id="essential-joint-and-renal-supplements">4. Essential Joint & Renal Nutrients</h2>
      <ul>
        <li><strong>Omega-3 EPA/DHA:</strong> Reduces inflammatory prostaglandins in arthritic joints and lowers glomerular pressure in kidneys.</li>
        <li><strong>Glucosamine & Chondroitin Sulfate:</strong> Precursors for glycosaminoglycan synthesis in articular cartilage.</li>
        <li><strong>Antioxidants (CoQ10 & Vitamin E):</strong> Combat mitochondrial reactive oxygen species in cardiac and brain tissue.</li>
      </ul>

      <h2 id="hydration-strategies-for-aging-kidneys">5. Hydration Strategies for Aging Kidneys</h2>
      <p>Older dogs often lose their thirst drive and may avoid drinking because walking to the bowl is painful. Rehydrating meals with warm, low-sodium bone broth ensures optimal blood volume and flushes metabolic waste through the kidneys.</p>
    `,
    relatedSlugs: ['the-science-of-canine-macros', 'top-vet-approved-superfoods-for-dogs', 'puppy-feeding-roadmap-growth-curves'],
    affiliateProduct: {
      name: 'Zesty Paws Wild Alaskan Salmon Oil for Dogs & Cats, 16oz',
      url: 'https://amzn.to/46HCJdW',
    },
  },
  {
    id: 'dog-food-recalls-guide',
    slug: 'understanding-dog-food-recalls',
    title: 'How to Decode Dog Food Recalls: Lot Codes, FDA Warnings & Pet Parent Safety',
    subtitle: 'From dangerous aflatoxin mold to synthetic vitamin D toxicity: understand why pet food recalls happen, how to check lot numbers on your bags, and what emergency steps to take.',
    category: 'Commercial Food & Recalls',
    categorySlug: 'commercial-food-recalls',
    excerpt: 'Pet food recalls can feel terrifying. Discover the top reasons foods are pulled from shelves, the difference between FDA Class I and Class II recalls, and the exact steps to protect your dog if their food is affected.',
    image: '/images/blog/understanding-dog-food-recalls.jpg',
    imageAlt: 'Natural pet food bag on a counter with fresh ingredients, magnifying glass, and veterinary quality checklist',
    featured: false,
    publishedDate: 'February 26, 2026',
    updatedDate: 'March 18, 2026',
    readTime: '7 min read',
    author: {
      name: 'Elena Vance',
      role: 'Canine Nutrition Specialist & Formulator',
      avatar: '🛡️',
      credentials: 'CertCN, Pet Food Industry Safety Investigator'
    },
    reviewedBy: {
      name: 'Dr. Aris Thorne, DVM',
      role: 'Board-Certified Veterinary Nutritionist',
      credentials: 'DACVIM (Nutrition)'
    },
    tags: ['Pet Food Recalls', 'FDA Alerts', 'Kibble Safety', 'Aflatoxin', 'Salmonella', 'Brand Reviews'],
    gradient: {
      from: '#dc2626',
      to: '#f87171',
      badgeBg: 'rgba(220,38,38,0.12)',
      badgeText: '#991b1b',
      icon: '🛡️'
    },
    keyTakeaways: [
      'FDA recalls are classified into Class I (life-threatening health danger), Class II (temporary adverse health effect), and Class III (regulatory violation unlikely to cause harm).',
      'The three most frequent causes of dog food recalls are Salmonella cross-contamination, dangerous mycotoxins (Aflatoxin mold on grain crops), and lethal formulation overdoses of synthetic Vitamin D.',
      'Always photograph the Lot Code and "Best By" date printed on the bottom or back of your pet food bag before pouring it into a storage bin.',
      'If your dog consumed recalled food, immediately retain the original packaging and a 1-cup sample in a sealed ziplock bag for veterinary toxicological analysis.'
    ],
    tableOfContents: [
      { id: 'why-do-pet-food-recalls-happen', title: '1. Why Do Pet Food Recalls Happen?' },
      { id: 'understanding-fda-recall-classes', title: '2. Understanding FDA Recall Classes' },
      { id: 'the-three-most-dangerous-contaminants', title: '3. The Three Most Dangerous Contaminants' },
      { id: 'where-to-find-and-track-lot-codes', title: '4. Where to Find & Track Lot Codes' },
      { id: 'emergency-action-plan-if-food-is-recalled', title: '5. Emergency Action Plan if Your Food is Recalled' }
    ],
    contentHtml: `
      <p class="lead">Every pet parent's worst nightmare is discovering that the bag of kibble they’ve been lovingly scooping for their dog twice a day has just been issued an urgent nationwide recall. Navigating FDA recall alerts with calm precision requires understanding how pet food manufacturing works behind closed doors.</p>

      <h2 id="why-do-pet-food-recalls-happen">1. Why Do Pet Food Recalls Happen?</h2>
      <p>Pet food recalls occur through three primary channels: voluntary manufacturer discovery during routine pre-shipment quality control, internal laboratory testing flags, or consumer complaints filed with state veterinarians and the FDA following cluster illnesses.</p>

      <h2 id="understanding-fda-recall-classes">2. Understanding FDA Recall Classes</h2>
      <ul>
        <li><strong>Class I Recall:</strong> The most severe category. There is a reasonable probability that exposure to the violative product will cause serious adverse health consequences or death (e.g. fatal aflatoxin levels, pentobarbital euthanasia drug contamination, massive vitamin D toxicity).</li>
        <li><strong>Class II Recall:</strong> Exposure may cause temporary or medically reversible health consequences (e.g. foreign material like plastic fragments, low-level bacterial contamination).</li>
        <li><strong>Class III Recall:</strong> Violation of FDA labeling or packaging regulations where injury is unlikely (e.g. mislabeled net weight).</li>
      </ul>

      <h2 id="the-three-most-dangerous-contaminants">3. The Three Most Dangerous Contaminants</h2>
      <div class="space-y-4 my-6">
        <div class="p-4 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50/50 dark:bg-red-950/20">
          <h4 class="font-bold text-red-800 dark:text-red-300">1. Aflatoxins (Mold on Grains)</h4>
          <p class="text-xs text-red-900/80 dark:text-red-200/80 mt-1">Produced by <em>Aspergillus flavus</em> mold on drought-stressed corn and wheat. Aflatoxins cause acute hepatic necrosis (liver failure). Symptoms: yellowing gums (jaundice), severe vomiting, bloody stool, and sudden lethargy.</p>
        </div>
        <div class="p-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20">
          <h4 class="font-bold text-amber-800 dark:text-amber-300">2. Synthetic Vitamin D Toxicosis</h4>
          <p class="text-xs text-amber-900/80 dark:text-amber-200/80 mt-1">Pre-mix premixes mismeasured by contract co-packers. Extreme vitamin D elevates blood calcium, causing metastatic calcification of kidneys and fatal renal failure.</p>
        </div>
        <div class="p-4 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20">
          <h4 class="font-bold text-blue-800 dark:text-blue-300">3. Salmonella & Listeria</h4>
          <p class="text-xs text-blue-900/80 dark:text-blue-200/80 mt-1">While healthy canines possess highly acidic gastric pH (1.5–2.0) that handles most bacteria, young pups, immune-compromised dogs, and human owners handling the kibble face severe zoonotic gastrointestinal infection.</p>
        </div>
      </div>

      <h2 id="where-to-find-and-track-lot-codes">4. Where to Find & Track Lot Codes</h2>
      <p>Never throw away the original pet food bag. When pouring kibble into plastic bins, cut out the barcode, printed lot code, and "Best By" stamp and tape it to the lid. When recalls are announced, they specify specific ranges of lot codes and production facility IDs.</p>

      <h2 id="emergency-action-plan-if-food-is-recalled">5. Emergency Action Plan if Your Food is Recalled</h2>
      <ol class="space-y-2 list-decimal list-inside text-sm">
        <li><strong>Cease Feeding Immediately:</strong> Do not feed another crumb.</li>
        <li><strong>Preserve Evidence:</strong> Double-bag the remaining food and freeze a 2-cup sample for independent toxicological testing if your pet falls ill.</li>
        <li><strong>Contact Your Veterinarian:</strong> Mention the specific recall brand, lot code, and suspected contaminant.</li>
        <li><strong>Disinfect Bowls and Bins:</strong> Wash all feeding bowls, scoops, and storage containers with hot soapy water and bleach solution.</li>
      </ol>
    `,
    relatedSlugs: ['the-science-of-canine-macros', 'how-to-transition-dog-to-fresh-food', 'gut-health-and-chronic-allergies'],
    affiliateProduct: {
      name: 'ORIJEN Grain-Free WHOLEPREY Dry Dog Food Original Recipe, 23.5lb',
      url: 'https://amzn.to/4xF5aFr',
    },
  },
  {
    id: 'canine-gut-health-and-allergies',
    slug: 'canine-gut-health-and-allergies',
    title: 'Canine Leaky Gut Syndrome: Healing Itchy Paws and Ear Infections from Within',
    subtitle: 'Chronic paw chewing, yeasty ears, and dull coats are rarely just external skin issues. Discover how intestinal dysbiosis triggers systemic inflammation and how novel proteins rebuild mucosal barriers.',
    category: 'Digestion & Gut Health',
    categorySlug: 'digestion-gut-health',
    excerpt: 'Over 70% of your dog\'s immune system is located in their gut. When the intestinal mucosal barrier breaks down, food proteins trigger chronic skin flare-ups. Learn how to diagnose and heal leaky gut with targeted nutrition.',
    image: '/images/blog/canine-gut-health-allergies.jpg',
    imageAlt: 'Happy healthy French Bulldog with a hypoallergenic bowl of dog food, kefir, and steamed green vegetables',
    featured: false,
    publishedDate: 'February 19, 2026',
    updatedDate: 'March 14, 2026',
    readTime: '8 min read',
    author: {
      name: 'Dr. Aris Thorne, DVM',
      role: 'Board-Certified Veterinary Nutritionist',
      avatar: '🌿',
      credentials: 'DACVIM (Nutrition), Canine Microbiome Specialist'
    },
    reviewedBy: {
      name: 'Dr. Marcus Vance, DVM',
      role: 'Holistic Veterinary Practitioner',
      credentials: 'DVM, CVA'
    },
    tags: ['Gut Health', 'Dog Allergies', 'Leaky Gut', 'Itchy Paws', 'Microbiome', 'Elimination Diets'],
    gradient: {
      from: '#059669',
      to: '#34d399',
      badgeBg: 'rgba(5,150,105,0.12)',
      badgeText: '#047857',
      icon: '🌿'
    },
    keyTakeaways: [
      'Over 70-80% of a dog\'s immune cells are concentrated in the gut-associated lymphoid tissue (GALT).',
      'Leaky gut occurs when tight junction proteins (zonulin) loosen, permitting partially digested food molecules and bacterial endotoxins (LPS) into systemic circulation.',
      'The classic signs of canine leaky gut are not just soft stools, but recurrent ear infections, obsessive paw licking, and hot spots.',
      'A true elimination diet requires feeding an authentic novel protein (such as venison, kangaroo, or rabbit) for a minimum of 8 to 12 weeks with zero outside treats.'
    ],
    tableOfContents: [
      { id: 'the-gut-skin-axis-in-dogs', title: '1. The Gut-Skin Axis in Dogs' },
      { id: 'what-causes-leaky-gut-in-canines', title: '2. What Causes Leaky Gut in Canines?' },
      { id: 'symptoms-beyond-the-digestive-tract', title: '3. Symptoms Beyond the Digestive Tract' },
      { id: 'the-3-step-gut-healing-protocol', title: '4. The 3-Step Gut Healing Protocol' },
      { id: 'conducting-a-flawless-elimination-diet', title: '5. Conducting a Flawless Elimination Diet' }
    ],
    contentHtml: `
      <p class="lead">If your dog spends their evenings aggressively chewing their paws until they turn rusty pink, shaking their head from yeasty ear flare-ups, or rubbing their face against the carpet, you know the frustration of canine allergies. While many pet parents cycle through antibiotic drops and steroid shots, the real battlefield is inside the canine gut.</p>

      <h2 id="the-gut-skin-axis-in-dogs">1. The Gut-Skin Axis in Dogs</h2>
      <p>The canine gut is not simply a tube that processes food; it is the largest immunological organ in your dog's body. The gut-associated lymphoid tissue (GALT) acts as a microscopic security gate. When functioning normally, single-cell epithelial barriers held together by "tight junctions" only permit fully broken-down amino acids and simple nutrients into the bloodstream.</p>

      <h2 id="what-causes-leaky-gut-in-canines">2. What Causes Leaky Gut in Canines?</h2>
      <p>Intestinal hyperpermeability (leaky gut) is triggered by chronic stressors:</p>
      <ul>
        <li><strong>Repeated Antibiotic Courses:</strong> Wipes out symbiotic gut microbes, paving the way for opportunistic fungal overgrowths like <em>Candida albicans</em>.</li>
        <li><strong>High Glycemic Starch & Glyphosate:</strong> Heavily processed carbohydrates elevate intestinal inflammation.</li>
        <li><strong>Chronic NSAID Use:</strong> Inhibit prostaglandins essential for gastric mucosal blood flow.</li>
      </ul>

      <h2 id="symptoms-beyond-the-digestive-tract">3. Symptoms Beyond the Digestive Tract</h2>
      <p>When undigested peptides leak into the canine bloodstream, the immune system flags them as foreign invaders, producing IgE and IgG antibodies. This triggers histamine cascades that erupt across the canine body in the thinnest skin areas: the paws, the ear canals, the groin, and the armpits.</p>

      <h2 id="the-3-step-gut-healing-protocol">4. The 3-Step Gut Healing Protocol</h2>
      <ol class="space-y-3 list-decimal list-inside text-sm">
        <li><strong>Remove the Irritants:</strong> Transition to a limited-ingredient diet free of corn, wheat, soy, artificial dyes, and chicken meals.</li>
        <li><strong>Repair the Epithelial Wall:</strong> Supplement with <em>L-Glutamine</em> (the primary amino acid fuel for enterocytes) and slippery elm bark to soothe inflamed mucosal linings.</li>
        <li><strong>Reinoculate the Microbiome:</strong> Introduce spore-forming soil-based probiotics (SBOs) and canine-specific prebiotics to rebalance dysbiosis.</li>
      </ol>

      <h2 id="conducting-a-flawless-elimination-diet">5. Conducting a Flawless Elimination Diet</h2>
      <p>To accurately identify food triggers, feed a single novel protein that your dog has never consumed in their life (such as venison, kangaroo, or bison). Maintain this strictly for 8 to 12 weeks. One single flavored treat, rawhide, or dental chew containing hidden chicken or beef will reset the immunological clock back to day one.</p>
    `,
    relatedSlugs: ['the-science-of-canine-macros', 'top-vet-approved-superfoods-for-dogs', 'rotational-feeding-benefits'],
    affiliateProduct: {
      name: 'Royal Canin Veterinary Diet Hydrolyzed Protein Adult, 25.3lb',
      url: 'https://amzn.to/4ykV9Nk',
    },
  },
  {
    id: 'rotational-feeding-benefits',
    slug: 'rotational-feeding-benefits-guide',
    title: 'The Complete Guide to Rotational Feeding: Why Variety Prevents Food Sensitivities',
    subtitle: 'Why feeding your dog the identical chicken kibble for five years triggers sensitization. How rotating protein sources (beef, fish, duck) builds robust digestion and prevents finickiness.',
    category: 'Fresh & Raw Feeding',
    categorySlug: 'fresh-raw-feeding',
    excerpt: 'In the wild, canines never ate identical, processed nuggets for years on end. Discover how rotational feeding builds a diverse gut microbiome, mitigates heavy metal exposure, and keeps mealtime exciting.',
    image: '/images/blog/rotational-feeding-benefits.jpg',
    imageAlt: 'Three bowls showing protein rotational variety with fresh lamb, turkey, cranberries, and salmon on a slate table',
    featured: false,
    publishedDate: 'February 12, 2026',
    updatedDate: 'March 08, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Marcus Vance, DVM',
      role: 'Holistic Veterinary Practitioner',
      avatar: '🔄',
      credentials: 'DVM, CVA (Chi University)'
    },
    reviewedBy: {
      name: 'Elena Vance',
      role: 'Canine Nutrition Specialist & Formulator',
      credentials: 'CertCN'
    },
    tags: ['Rotational Feeding', 'Food Allergies', 'Protein Rotation', 'Microbiome Diversity', 'Meal Variety'],
    gradient: {
      from: '#f97316',
      to: '#fb923c',
      badgeBg: 'rgba(249,115,22,0.12)',
      badgeText: '#c2410c',
      icon: '🔄'
    },
    keyTakeaways: [
      'Chronic monoculture feeding (the same protein every single day for years) increases the likelihood of acquired immunological sensitization and food allergies.',
      'Different protein sources deliver unique amino acid and micronutrient footprints: beef provides zinc and iron, salmon delivers EPA/DHA, and poultry provides bioavailable niacin.',
      'Microbiome diversity directly correlates with longevity and metabolic vigor in all mammals, including canines.',
      'Rotational feeding can be implemented across bags (switching every 4-8 weeks) or across daily meals once a dog\'s digestive resilience is established.'
    ],
    tableOfContents: [
      { id: 'the-problem-with-monoculture-diets', title: '1. The Problem with Monoculture Diets' },
      { id: 'evolutionary-perspective-on-variety', title: '2. Evolutionary Perspective on Variety' },
      { id: 'three-primary-benefits-of-protein-rotation', title: '3. Three Primary Benefits of Protein Rotation' },
      { id: 'how-to-start-a-safe-rotational-schedule', title: '4. How to Start a Safe Rotational Schedule' },
      { id: 'who-should-not-rotate-proteins', title: '5. Who Should NOT Rotate Proteins?' }
    ],
    contentHtml: `
      <p class="lead">For decades, commercial pet food marketing taught dog owners a rigid dogma: <em>"Pick one bag of food and never change it, or your dog will get severe diarrhea."</em> While changing abruptly can indeed cause acute upset in dogs with fragile, unconditioned microbiomes, keeping a dog on the identical food for years is an evolutionary anomaly.</p>

      <h2 id="the-problem-with-monoculture-diets">1. The Problem with Monoculture Diets</h2>
      <p>Imagine eating chicken, corn, and synthetic vitamin supplements for every meal of your life for ten straight years. No single food on earth possesses the ideal balance of all nutrients. By feeding only one brand and one protein, your dog is repeatedly exposed to that formula's inherent excess or micro-deficiencies.</p>

      <h2 id="evolutionary-perspective-on-variety">2. Evolutionary Perspective on Variety</h2>
      <p>Wild canids and ancestral wolves are opportunistic foragers. Over a monthly cycle, their diet naturally shifts between small mammals (rodents, rabbits), ungulates (deer, elk), fowl, berries, and fish. Their intestinal tract evolved to host a dynamic, resilient microbiome capable of digesting diverse substrates.</p>

      <h2 id="three-primary-benefits-of-protein-rotation">3. Three Primary Benefits of Protein Rotation</h2>
      <ul>
        <li><strong>Prevents Food Sensitization:</strong> Chronic overexposure to chicken or beef antigens can prompt the immune system to develop antibodies, leading to itchy skin and chronic gastrointestinal inflammation.</li>
        <li><strong>Superior Micronutrient Balance:</strong> Red meats provide superior carnitine, taurine, and zinc. Cold-water fish deliver marine omega-3 fatty acids and vitamin D. Poultry offers rich polyunsaturated linoleic acid.</li>
        <li><strong>Eliminates Picky Eater Syndromes:</strong> Dogs provided with sensory enrichment and varied aromatic profiles maintain high appetite enthusiasm throughout their lives.</li>
      </ul>

      <h2 id="how-to-start-a-safe-rotational-schedule">4. How to Start a Safe Rotational Schedule</h2>
      <p>If your dog has only eaten one brand for years, begin slowly:</p>
      <ol class="space-y-2 list-decimal list-inside text-sm">
        <li><strong>Step 1 (First 2 Months):</strong> Stick with the same brand line, but switch from Chicken to Turkey or Salmon on your next bag purchase, using a 5-day transition.</li>
        <li><strong>Step 2 (Months 3–6):</strong> Rotate between three distinct protein groups (Poultry, Red Meat, Fish) with every new bag.</li>
        <li><strong>Step 3 (Advanced):</strong> Once the microbiome is rich and resilient, many dogs can effortlessly alternate proteins every few days with zero digestive distress.</li>
      </ol>

      <h2 id="who-should-not-rotate-proteins">5. Who Should NOT Rotate Proteins?</h2>
      <p>Dogs diagnosed with severe chronic inflammatory bowel disease (IBD), active pancreatitis, or those undergoing an active veterinary elimination diet should remain on their specialized prescription or single-protein regimen until their mucosal lining is stabilized.</p>
    `,
    relatedSlugs: ['how-to-transition-dog-to-fresh-food', 'the-science-of-canine-macros', 'canine-gut-health-and-allergies'],
    affiliateProduct: {
      name: "Stella & Chewy's Freeze-Dried Raw Dinner Patties – Variety Pack (5 Proteins)",
      url: 'https://amzn.to/4gCgdJp',
    },
  }
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug || post.id === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'All Articles' || category === 'All') {
    return BLOG_POSTS;
  }
  return BLOG_POSTS.filter(post => post.category === category || post.categorySlug === category);
}

export function getRelatedBlogPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(slug);
  if (!currentPost) return BLOG_POSTS.slice(0, limit);

  const related = currentPost.relatedSlugs
    .map(relSlug => getBlogPostBySlug(relSlug))
    .filter((post): post is BlogPost => Boolean(post));

  if (related.length < limit) {
    const fallbacks = BLOG_POSTS.filter(p => p.slug !== slug && !related.some(r => r.slug === p.slug));
    related.push(...fallbacks.slice(0, limit - related.length));
  }

  return related.slice(0, limit);
}
