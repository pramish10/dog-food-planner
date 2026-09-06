const fs = require('fs');

const content = `---
import { RECIPES } from '../data/recipes';
import { getLangFromUrl } from '../i18n/utils';
import { plannerTranslations } from '../i18n/planner';

const lang = getLangFromUrl(Astro.url);
const p = plannerTranslations[lang] || plannerTranslations.en;
---

<section id="results-section" class="hidden py-8 sm:py-14 bg-[#fafafa] dark:bg-[#0d0d0d] border-b border-[#ebebeb] dark:border-[#262626]" data-lang={lang}>
  <div class="max-w-xl mx-auto px-4 sm:px-6">

    <!-- Results Header -->
    <div class="mb-5">
      <div class="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full mb-3">
        <span class="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
        {p.readyBadge}
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold text-[#171717] dark:text-[#ededed] tracking-tight">
        {p.mealPlanFor} <span id="res-dog-name" class="text-[#0070f3] dark:text-[#3291ff]">Buddy</span>
      </h2>
      <p id="res-summary" class="text-sm text-[#4d4d4d] dark:text-[#a1a1a1] mt-1.5 leading-relaxed"></p>
    </div>

    <!-- 3 Key Stat Cards -->
    <div class="grid grid-cols-3 gap-2.5 mb-5">
      <div class="p-3.5 rounded-2xl border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#141414] text-center">
        <div class="text-[10px] font-mono font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase mb-1">{p.cardEnergyTitle}</div>
        <div class="text-xl font-bold text-[#171717] dark:text-[#ededed] font-mono" id="res-mer-calories">—</div>
        <div class="text-[10px] text-[#8f8f8f] dark:text-[#737373] font-mono">kcal/day</div>
      </div>
      <div class="p-3.5 rounded-2xl border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#141414] text-center">
        <div class="text-[10px] font-mono font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase mb-1">{p.cardPortionTitle}</div>
        <div class="text-xl font-bold text-[#171717] dark:text-[#ededed] font-mono" id="res-daily-grams">—</div>
        <div class="text-[10px] text-[#8f8f8f] dark:text-[#737373] font-mono">g/day</div>
      </div>
      <div class="p-3.5 rounded-2xl border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#141414] text-center">
        <div class="text-[10px] font-mono font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase mb-1">{p.cardPerMealTitle}</div>
        <div class="text-xl font-bold text-[#171717] dark:text-[#ededed] font-mono" id="res-per-meal-grams">—</div>
        <div class="text-[10px] text-[#8f8f8f] dark:text-[#737373] font-mono" id="res-meals-label">—x/day</div>
      </div>
    </div>

    <!-- Feeding Schedule -->
    <div class="mb-5 bg-white dark:bg-[#141414] border border-[#ebebeb] dark:border-[#262626] rounded-2xl p-4 sm:p-5">
      <h3 class="text-xs font-bold text-[#171717] dark:text-[#ededed] mb-3 uppercase tracking-wider font-mono">{p.bowlSectionTitle} <span class="res-dog-name-inline text-[#0070f3] dark:text-[#3291ff]">Buddy</span></h3>
      <div id="feeding-schedule-container" class="space-y-2">
        <!-- Populated by JS -->
      </div>
      <div class="mt-3 pt-3 border-t border-[#ebebeb] dark:border-[#262626] flex items-center justify-between text-xs text-[#8f8f8f] dark:text-[#737373]">
        <span>{p.cardTreatTitle}:</span>
        <span class="font-mono font-semibold text-[#f5a623]"><span id="res-treat-kcal">—</span> kcal/day</span>
      </div>
    </div>

    <!-- Breed Note -->
    <div id="breed-note-card" class="mb-5 p-4 rounded-2xl border border-[#f5a623]/30 bg-[#f5a623]/5 dark:bg-[#f5a623]/10 flex gap-3">
      <span class="text-lg shrink-0">🐾</span>
      <p id="breed-note-text" class="text-sm text-[#4d4d4d] dark:text-[#a1a1a1] leading-relaxed"></p>
    </div>

    <!-- Health Tips -->
    <div id="health-advice-card" class="mb-5 bg-white dark:bg-[#141414] border border-[#0070f3]/20 rounded-2xl p-4 sm:p-5">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-lg" id="health-advice-icon">⭐</span>
        <h3 id="health-advice-title" class="text-sm font-bold text-[#171717] dark:text-[#ededed]">Health Tips</h3>
      </div>
      <ul id="health-tips-list" class="space-y-2 mb-4">
        <!-- Populated by JS -->
      </ul>
      <div>
        <div class="text-[10px] font-mono font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-2">{p.keyNutrientsTitle}</div>
        <div id="key-nutrients-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>

    <!-- Diet Tabs -->
    <div class="flex gap-1.5 mb-3 p-1 bg-[#f2f2f2] dark:bg-[#1a1a1a] rounded-xl border border-[#ebebeb] dark:border-[#2e2e2e]">
      <button type="button" data-diet="fresh-cooked" class="diet-tab-btn flex-1 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-[#262626] text-[#171717] dark:text-white shadow-sm transition-all cursor-pointer">🍲 {p.dietFresh}</button>
      <button type="button" data-diet="raw-barf" class="diet-tab-btn flex-1 py-2 text-xs font-semibold rounded-lg text-[#8f8f8f] dark:text-[#737373] hover:text-[#171717] dark:hover:text-white transition-all cursor-pointer">🥩 {p.dietRaw}</button>
      <button type="button" data-diet="superfood-topper" class="diet-tab-btn flex-1 py-2 text-xs font-semibold rounded-lg text-[#8f8f8f] dark:text-[#737373] hover:text-[#171717] dark:hover:text-white transition-all cursor-pointer">🥣 {p.dietTopper}</button>
    </div>

    <!-- Recipe Card -->
    <div class="mb-5 bg-white dark:bg-[#141414] border border-[#ebebeb] dark:border-[#262626] rounded-2xl p-4 sm:p-5">
      <div class="text-[10px] font-mono font-semibold text-[#0070f3] dark:text-[#3291ff] uppercase tracking-wider mb-1" id="recipe-diet-tag">{p.todayRecipePrefix}</div>
      <h3 class="text-base font-bold text-[#171717] dark:text-[#ededed] mb-1" id="recipe-title">—</h3>
      <p class="text-sm text-[#4d4d4d] dark:text-[#a1a1a1] mb-4 leading-relaxed" id="recipe-description">—</p>

      <div id="no-recipe-warning" class="hidden mb-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-sm text-amber-800 dark:text-amber-200">
        {p.noRecipeMatch}
      </div>

      <!-- Ingredients -->
      <div class="mb-4">
        <div class="text-[10px] font-mono font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-2">{p.ingredientsHeader}</div>
        <div id="ingredient-rows-container" class="divide-y divide-[#ebebeb] dark:divide-[#262626] border border-[#ebebeb] dark:border-[#262626] rounded-xl overflow-hidden">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- Prep Steps -->
      <div>
        <div class="text-[10px] font-mono font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-2">{p.prepStepsHeader}</div>
        <ol id="prep-steps-container" class="space-y-2 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
          <!-- Populated by JS -->
        </ol>
      </div>
    </div>

    <!-- 7-Day Transition -->
    <div class="mb-5 bg-white dark:bg-[#141414] border border-[#ebebeb] dark:border-[#262626] rounded-2xl p-4 sm:p-5">
      <h4 class="text-xs font-bold text-[#171717] dark:text-[#ededed] uppercase tracking-wider font-mono mb-3">{p.transitionHeader}</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-3 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
          <span class="w-2 h-2 rounded-full bg-[#10b981] shrink-0"></span>{p.transitionP1}
        </div>
        <div class="flex items-center gap-3 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
          <span class="w-2 h-2 rounded-full bg-[#f5a623] shrink-0"></span>{p.transitionP2}
        </div>
        <div class="flex items-center gap-3 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
          <span class="w-2 h-2 rounded-full bg-[#f97316] shrink-0"></span>{p.transitionP3}
        </div>
        <div class="flex items-center gap-3 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
          <span class="w-2 h-2 rounded-full bg-[#0070f3] shrink-0"></span>{p.transitionP4}
        </div>
      </div>
    </div>

    <!-- Disclaimer + Start Over -->
    <div class="text-center">
      <p class="text-[11px] text-[#a1a1a1] dark:text-[#737373] mb-4">{p.resultsDisclaimerText}</p>
      <button id="start-over-btn" type="button"
        class="px-6 py-2.5 text-sm font-semibold text-[#8f8f8f] dark:text-[#737373] border border-[#ebebeb] dark:border-[#262626] rounded-xl hover:text-[#171717] dark:hover:text-white hover:border-[#171717] dark:hover:border-white transition-all cursor-pointer touch-manipulation">
        ← {p.prevBtn}
      </button>
    </div>

  </div>
</section>

<script>
  import { calculateCanineNutrition } from '../utils/nutritionEngine';
  import { RECIPES } from '../data/recipes';

  const ALLERGY_ALIASES: Record<string, string[]> = {
    'chicken / poultry': ['chicken', 'poultry', 'turkey'],
    beef: ['beef'],
    dairy: ['dairy'],
    eggs: ['egg'],
    'grains / wheat': ['grain', 'wheat'],
    soy: ['soy'],
    corn: ['corn'],
  };

  const HEALTH_ICONS: Record<string, string> = {
    'General Longevity & Health': '⭐',
    'Joints & Mobility Support': '🦴',
    'Skin & Shiny Coat Vitality': '✨',
    'Sensitive Digestion & Gut Health': '🌿',
    'Metabolic Weight Management': '⚖️',
  };

  let currentProfile: any = null;
  let currentDiet = 'fresh-cooked';

  function selectRecipe(profile: any, dietOverride?: string) {
    const diet = dietOverride || profile.dietPreference;
    const dietRecipes = RECIPES.filter((r) => r.dietType === diet);
    const avoidedAllergies = (profile.allergies || []).filter((a: string) => a !== 'none / no allergies');
    const safes = dietRecipes.filter((r) =>
      !r.ingredients.some((ing) =>
        (ing.allergens || []).some((al) =>
          avoidedAllergies.some((av: string) =>
            (ALLERGY_ALIASES[av] || [av]).some((alias) => al.toLowerCase().includes(alias))
          )
        )
      )
    );
    const pool = safes.length ? safes : dietRecipes;
    const preferred = profile.proteinChoice?.toLowerCase();
    const scored = pool.map((r) => {
      let score = 0;
      if (preferred && preferred !== 'auto' && r.primaryProtein.toLowerCase() === preferred) score += 100;
      if (r.healthFocusMatches.some((h: string) => h.toLowerCase().includes(profile.healthFocus?.toLowerCase()?.split(' ')[0] || ''))) score += 30;
      return { r, score };
    }).sort((a, b) => b.score - a.score);
    return { recipe: scored[0]?.r || null, hadNoSafeMatch: safes.length === 0 };
  }

  function renderResults(profile: any, dietOverride?: string) {
    const result = calculateCanineNutrition(profile);
    const diet = dietOverride || profile.dietPreference;
    const { recipe, hadNoSafeMatch } = selectRecipe(profile, diet);

    const section = document.getElementById('results-section') as HTMLElement;
    section.classList.remove('hidden');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const plannerSection = document.getElementById('planner-section') as HTMLElement;
    if (plannerSection) plannerSection.classList.add('hidden');

    const dogName = result.dogName;
    document.querySelectorAll('#res-dog-name, .res-dog-name-inline').forEach(el => el.textContent = dogName);

    const summaryEl = document.getElementById('res-summary') as HTMLElement;
    if (summaryEl) summaryEl.textContent = result.summary;

    (document.getElementById('res-mer-calories') as HTMLElement).textContent = result.merKcal.toLocaleString();
    (document.getElementById('res-daily-grams') as HTMLElement).textContent = result.activeDailyGrams + 'g';
    (document.getElementById('res-per-meal-grams') as HTMLElement).textContent = result.perMealGrams + 'g';
    (document.getElementById('res-meals-label') as HTMLElement).textContent = result.mealsPerDay + 'x/day';
    (document.getElementById('res-treat-kcal') as HTMLElement).textContent = result.treatKcal.toLocaleString();

    const schedContainer = document.getElementById('feeding-schedule-container') as HTMLElement;
    schedContainer.innerHTML = result.dailySchedule.map((slot: any) => \`
      <div class="flex items-center justify-between p-3 rounded-xl bg-[#fafafa] dark:bg-[#1a1a1a] border border-[#ebebeb] dark:border-[#262626]">
        <div>
          <div class="text-xs font-mono font-semibold text-[#0070f3] dark:text-[#3291ff]">\${slot.timeLabel}</div>
          <div class="text-sm font-semibold text-[#171717] dark:text-[#ededed]">\${slot.slotName}</div>
        </div>
        <div class="text-right">
          <div class="text-lg font-bold text-[#171717] dark:text-[#ededed] font-mono">\${slot.portionGrams}g</div>
          <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373] font-mono">≈ \${slot.portionCups} cups</div>
        </div>
      </div>
    \`).join('');

    const breedNoteText = document.getElementById('breed-note-text') as HTMLElement;
    if (breedNoteText) breedNoteText.textContent = result.breedNote;

    const advice = result.healthAdvice;
    const iconEl = document.getElementById('health-advice-icon') as HTMLElement;
    const titleEl = document.getElementById('health-advice-title') as HTMLElement;
    const tipsList = document.getElementById('health-tips-list') as HTMLElement;
    const nutrientsGrid = document.getElementById('key-nutrients-grid') as HTMLElement;

    if (iconEl) iconEl.textContent = HEALTH_ICONS[profile.healthFocus] || '⭐';
    if (titleEl) titleEl.textContent = advice.title;
    if (tipsList) {
      tipsList.innerHTML = advice.tips.map((tip: string) => \`
        <li class="flex items-start gap-2 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
          <span class="text-[#0070f3] dark:text-[#3291ff] mt-0.5 shrink-0 font-bold">✓</span>
          <span>\${tip}</span>
        </li>
      \`).join('');
    }
    if (nutrientsGrid) {
      nutrientsGrid.innerHTML = advice.keyNutrients.map((n: any) => \`
        <div class="p-3 rounded-xl bg-[#fafafa] dark:bg-[#1a1a1a] border border-[#ebebeb] dark:border-[#262626]">
          <div class="text-xs font-bold text-[#171717] dark:text-[#ededed] mb-0.5">\${n.name}</div>
          <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373] mb-1">\${n.reason}</div>
          <div class="text-[11px] text-[#0070f3] dark:text-[#3291ff] font-mono">\${n.foods.join(' · ')}</div>
        </div>
      \`).join('');
    }

    const noRecipeWarning = document.getElementById('no-recipe-warning') as HTMLElement;
    if (noRecipeWarning) noRecipeWarning.classList.toggle('hidden', !hadNoSafeMatch);

    if (recipe) {
      (document.getElementById('recipe-diet-tag') as HTMLElement).textContent = diet.replace(/-/g, ' ').toUpperCase();
      (document.getElementById('recipe-title') as HTMLElement).textContent = recipe.name;
      (document.getElementById('recipe-description') as HTMLElement).textContent = recipe.description;

      const ingContainer = document.getElementById('ingredient-rows-container') as HTMLElement;
      ingContainer.innerHTML = recipe.ingredients.map((ing: any) => {
        const grams = Math.round((ing.percentage / 100) * result.activeDailyGrams);
        return \`
          <div class="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#141414] hover:bg-[#fafafa] dark:hover:bg-[#1a1a1a] transition-colors">
            <div>
              <div class="text-sm font-medium text-[#171717] dark:text-[#ededed]">\${ing.name}</div>
              <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">\${ing.purpose}</div>
            </div>
            <div class="text-sm font-bold text-[#171717] dark:text-[#ededed] font-mono ml-4 shrink-0">\${grams}g</div>
          </div>
        \`;
      }).join('');

      const prepContainer = document.getElementById('prep-steps-container') as HTMLElement;
      prepContainer.innerHTML = recipe.preparationNotes.map((step: string, i: number) => \`
        <li class="flex items-start gap-3">
          <span class="w-5 h-5 rounded-full bg-[#0070f3]/10 text-[#0070f3] dark:text-[#3291ff] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">\${i + 1}</span>
          <span>\${step}</span>
        </li>
      \`).join('');
    }

    document.querySelectorAll('.diet-tab-btn').forEach(btn => {
      const btnDiet = (btn as HTMLElement).dataset.diet;
      const isActive = btnDiet === diet;
      btn.classList.toggle('bg-white', isActive);
      btn.classList.toggle('dark:bg-[#262626]', isActive);
      btn.classList.toggle('text-[#171717]', isActive);
      btn.classList.toggle('dark:text-white', isActive);
      btn.classList.toggle('shadow-sm', isActive);
      btn.classList.toggle('text-[#8f8f8f]', !isActive);
      btn.classList.toggle('dark:text-[#737373]', !isActive);
    });
  }

  document.addEventListener('dogPlannerSubmit', (e: Event) => {
    const profile = (e as CustomEvent).detail;
    currentProfile = profile;
    currentDiet = profile.dietPreference;
    renderResults(profile);
  });

  document.querySelectorAll('.diet-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!currentProfile) return;
      currentDiet = (btn as HTMLElement).dataset.diet || currentProfile.dietPreference;
      renderResults(currentProfile, currentDiet);
    });
  });

  document.getElementById('start-over-btn')?.addEventListener('click', () => {
    const resultsSection = document.getElementById('results-section') as HTMLElement;
    const plannerSection = document.getElementById('planner-section') as HTMLElement;
    resultsSection.classList.add('hidden');
    if (plannerSection) {
      plannerSection.classList.remove('hidden');
      plannerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
</script>
`;

fs.writeFileSync('src/components/PlanResults.astro', content, 'utf8');
console.log('PlanResults.astro written successfully, size:', content.length);
