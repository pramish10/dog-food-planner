const fs = require('fs');

const content = `---
import { CANINE_BREEDS } from '../data/breeds';
import { getLangFromUrl } from '../i18n/utils';
import { plannerTranslations } from '../i18n/planner';

const lang = getLangFromUrl(Astro.url);
const p = plannerTranslations[lang] || plannerTranslations.en;
const TOTAL_STEPS = 4;
---

<section id="planner-section" class="py-8 sm:py-14 bg-[#fafafa] dark:bg-[#0d0d0d] border-b border-[#ebebeb] dark:border-[#262626]" data-lang={lang}>
  <div class="max-w-xl mx-auto px-4 sm:px-6">

    <!-- Header -->
    <div class="text-center mb-6 sm:mb-8">
      <div class="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold text-[#0070f3] bg-[#0070f3]/10 px-3 py-1 rounded-full mb-3">
        {p.badge}
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold text-[#171717] dark:text-[#ededed] tracking-tight mb-2">
        {p.title}
      </h2>
      <p class="text-sm text-[#8f8f8f] dark:text-[#737373] max-w-sm mx-auto">
        {p.subtitle}
      </p>
    </div>

    <!-- Quiz Card -->
    <div class="bg-white dark:bg-[#141414] border border-[#ebebeb] dark:border-[#262626] rounded-2xl shadow-sm overflow-hidden">

      <!-- Progress Bar -->
      <div class="px-5 sm:px-7 pt-5 pb-0">
        <div class="flex items-center justify-between mb-2">
          <span id="step-label" class="text-[11px] font-semibold text-[#8f8f8f] dark:text-[#737373] font-mono uppercase tracking-wider">
            {p.stepPrefix} 1 {p.ofStep}
          </span>
          <span id="step-title-badge" class="text-[11px] font-semibold text-[#171717] dark:text-[#ededed]">{p.step1Title}</span>
        </div>
        <div class="w-full bg-[#f2f2f2] dark:bg-[#262626] h-1 rounded-full overflow-hidden">
          <div id="quiz-progress-bar" class="bg-[#0070f3] h-full rounded-full transition-all duration-500 ease-out" style="width: 25%"></div>
        </div>
      </div>

      <form id="dog-planner-form" onsubmit="return false;" novalidate class="p-5 sm:p-7">

        <!-- STEP 1: Dog Basics -->
        <div class="quiz-step" data-step="1">
          <h3 class="text-base font-bold text-[#171717] dark:text-[#ededed] mb-4">{p.step1Title}</h3>

          <div class="space-y-4">
            <!-- Name -->
            <div>
              <label for="dog-name" class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.nameLabel}</label>
              <input type="text" id="dog-name" placeholder={p.namePlaceholder} value="Buddy" autocomplete="off"
                class="w-full px-4 py-3 text-sm bg-[#fafafa] dark:bg-[#1a1a1a] border border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-[#171717] dark:text-[#ededed] focus:outline-none focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20 transition-all" />
            </div>

            <!-- Life Stage -->
            <div>
              <label class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.ageLabel}</label>
              <div class="grid grid-cols-2 gap-2">
                <label class="cursor-pointer">
                  <input type="radio" name="age-stage" value="puppy-early" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.puppyEarly}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.puppyEarlySub}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="age-stage" value="puppy-late" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.puppyLate}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.puppyLateSub}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="age-stage" value="adult" checked class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.adult}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.adultSub}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="age-stage" value="senior" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.senior}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.seniorSub}</div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Gender -->
            <div>
              <label class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.genderLabel}</label>
              <div class="grid grid-cols-2 gap-2">
                <label class="cursor-pointer">
                  <input type="radio" name="gender" value="female-spayed" checked class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.femaleSpayed}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.femaleSpayedSub}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="gender" value="female-intact" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.femaleIntact}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.femaleIntactSub}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="gender" value="male-neutered" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.maleNeutered}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.maleNeuteredSub}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="gender" value="male-intact" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.maleIntact}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.maleIntactSub}</div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- STEP 2: Size & Weight -->
        <div class="quiz-step hidden" data-step="2">
          <h3 class="text-base font-bold text-[#171717] dark:text-[#ededed] mb-4">{p.step2Title}</h3>

          <div class="space-y-4">
            <!-- Breed -->
            <div>
              <label for="dog-breed" class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.breedLabel}</label>
              <select id="dog-breed"
                class="w-full px-4 py-3 text-sm bg-[#fafafa] dark:bg-[#1a1a1a] border border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-[#171717] dark:text-[#ededed] focus:outline-none focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20">
                {CANINE_BREEDS.map((b) => (
                  <option value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>

            <!-- Weight -->
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label for="dog-weight" class="text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider font-mono">{p.weightLabel}</label>
                <div class="flex items-center text-xs font-mono border border-[#ebebeb] dark:border-[#2e2e2e] rounded-lg overflow-hidden">
                  <button type="button" id="unit-lbs" class="px-3 py-1.5 bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold transition-colors cursor-pointer">LBS</button>
                  <button type="button" id="unit-kg" class="px-3 py-1.5 bg-white dark:bg-[#1a1a1a] text-[#8f8f8f] dark:text-[#737373] transition-colors cursor-pointer">KG</button>
                </div>
              </div>
              <div class="relative">
                <input type="number" id="dog-weight" min="1" max="250" value="45"
                  class="w-full px-4 pr-16 py-3 text-sm bg-[#fafafa] dark:bg-[#1a1a1a] border border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-[#171717] dark:text-[#ededed] focus:outline-none focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20" />
                <span id="weight-unit-label" class="absolute right-4 top-3.5 text-xs text-[#8f8f8f] dark:text-[#737373] font-mono font-semibold">LBS</span>
              </div>
            </div>

            <!-- Body Condition -->
            <div>
              <label class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.bcsLabel}</label>
              <div class="grid grid-cols-2 gap-2">
                <label class="cursor-pointer">
                  <input type="radio" name="bcs" value="2" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center px-3">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.bcsUnderweight}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.bcsUnderweightDesc}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="bcs" value="5" checked class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center px-3">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.bcsIdeal}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.bcsIdealDesc}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="bcs" value="7" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center px-3">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.bcsOverweight}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.bcsOverweightDesc}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="bcs" value="9" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center px-3">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.bcsObese}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.bcsObeseDesc}</div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Weight Goal -->
            <div>
              <label class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.weightGoalLabel}</label>
              <div class="grid grid-cols-3 gap-2">
                <label class="cursor-pointer">
                  <input type="radio" name="weight-goal" value="maintain" checked class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="text-lg mb-0.5">⚖️</div>
                    <div class="font-semibold text-xs text-[#171717] dark:text-[#ededed]">{p.goalMaintain}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="weight-goal" value="lose" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="text-lg mb-0.5">📉</div>
                    <div class="font-semibold text-xs text-[#171717] dark:text-[#ededed]">{p.goalLose}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="weight-goal" value="gain" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-center peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center">
                    <div class="text-lg mb-0.5">💪</div>
                    <div class="font-semibold text-xs text-[#171717] dark:text-[#ededed]">{p.goalGain}</div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- STEP 3: Activity & Diet -->
        <div class="quiz-step hidden" data-step="3">
          <h3 class="text-base font-bold text-[#171717] dark:text-[#ededed] mb-4">{p.step3Title}</h3>

          <div class="space-y-4">
            <!-- Activity Level -->
            <div>
              <label class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.activityLabel}</label>
              <div class="grid grid-cols-2 gap-2">
                <label class="cursor-pointer">
                  <input type="radio" name="activity" value="sedentary" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center px-3">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.activityLow}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.activityLowSub}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="activity" value="moderate" checked class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center px-3">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.activityMod}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.activityModSub}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="activity" value="active" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center px-3">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.activityHigh}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.activityHighSub}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="activity" value="working" class="peer sr-only" />
                  <div class="p-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] min-h-[52px] flex flex-col justify-center px-3">
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.activityWorking}</div>
                    <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.activityWorkingSub}</div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Diet Preference -->
            <div>
              <label class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.dietLabel}</label>
              <div class="grid grid-cols-1 gap-2">
                <label class="cursor-pointer">
                  <input type="radio" name="diet" value="fresh-cooked" checked class="peer sr-only" />
                  <div class="px-4 py-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] flex items-center gap-3">
                    <span class="text-xl shrink-0">🍲</span>
                    <div>
                      <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.dietFresh}</div>
                      <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.dietFreshSub}</div>
                    </div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="diet" value="raw-barf" class="peer sr-only" />
                  <div class="px-4 py-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] flex items-center gap-3">
                    <span class="text-xl shrink-0">🥩</span>
                    <div>
                      <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.dietRaw}</div>
                      <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.dietRawSub}</div>
                    </div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="diet" value="superfood-topper" class="peer sr-only" />
                  <div class="px-4 py-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] flex items-center gap-3">
                    <span class="text-xl shrink-0">🥣</span>
                    <div>
                      <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.dietTopper}</div>
                      <div class="text-[11px] text-[#8f8f8f] dark:text-[#737373]">{p.dietTopperSub}</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- STEP 4: Health & Allergies -->
        <div class="quiz-step hidden" data-step="4">
          <h3 class="text-base font-bold text-[#171717] dark:text-[#ededed] mb-4">{p.step4Title}</h3>

          <div class="space-y-4">
            <!-- Health Focus -->
            <div>
              <label class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.healthFocusLabel}</label>
              <div class="grid grid-cols-1 gap-2">
                <label class="cursor-pointer">
                  <input type="radio" name="health-focus" value="General Longevity & Health" checked class="peer sr-only" />
                  <div class="px-4 py-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] flex items-center gap-3">
                    <span class="text-lg shrink-0">⭐</span>
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.focusGeneral}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="health-focus" value="Joints & Mobility Support" class="peer sr-only" />
                  <div class="px-4 py-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] flex items-center gap-3">
                    <span class="text-lg shrink-0">🦴</span>
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.focusJoints}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="health-focus" value="Skin & Shiny Coat Vitality" class="peer sr-only" />
                  <div class="px-4 py-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] flex items-center gap-3">
                    <span class="text-lg shrink-0">✨</span>
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.focusCoat}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="health-focus" value="Sensitive Digestion & Gut Health" class="peer sr-only" />
                  <div class="px-4 py-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] flex items-center gap-3">
                    <span class="text-lg shrink-0">🌿</span>
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.focusDigestion}</div>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="health-focus" value="Metabolic Weight Management" class="peer sr-only" />
                  <div class="px-4 py-3 border-2 border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl peer-checked:border-[#0070f3] peer-checked:bg-[#0070f3]/5 transition-all bg-white dark:bg-[#1a1a1a] flex items-center gap-3">
                    <span class="text-lg shrink-0">⚖️</span>
                    <div class="font-semibold text-sm text-[#171717] dark:text-[#ededed]">{p.focusWeight}</div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Allergies -->
            <div>
              <label class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.allergiesLabel}</label>
              <div class="grid grid-cols-2 gap-2">
                {[
                  { value: 'none / no allergies', label: p.allergyNone },
                  { value: 'chicken / poultry', label: p.allergyChicken },
                  { value: 'beef', label: p.allergyBeef },
                  { value: 'dairy', label: p.allergyDairy },
                  { value: 'grains / wheat', label: p.allergyWheat },
                  { value: 'soy', label: p.allergySoy },
                  { value: 'eggs', label: p.allergyEggs },
                ].map(a => (
                  <label class="cursor-pointer flex items-center gap-2.5 p-3 border border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl bg-white dark:bg-[#1a1a1a] has-[:checked]:border-[#0070f3] has-[:checked]:bg-[#0070f3]/5 transition-all">
                    <input type="checkbox" name="allergy" value={a.value} class="w-4 h-4 rounded accent-[#0070f3] shrink-0" />
                    <span class="text-sm text-[#171717] dark:text-[#ededed] font-medium">{a.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <!-- Protein Preference -->
            <div>
              <label class="block text-xs font-semibold text-[#8f8f8f] dark:text-[#737373] uppercase tracking-wider mb-1.5 font-mono">{p.proteinLabel}</label>
              <select id="protein-choice"
                class="w-full px-4 py-3 text-sm bg-[#fafafa] dark:bg-[#1a1a1a] border border-[#ebebeb] dark:border-[#2e2e2e] rounded-xl text-[#171717] dark:text-[#ededed] focus:outline-none focus:border-[#0070f3] focus:ring-2 focus:ring-[#0070f3]/20">
                <option value="auto">{p.proteinRotation}</option>
                <option value="chicken">{p.proteinChicken}</option>
                <option value="beef">{p.proteinBeef}</option>
                <option value="turkey">{p.proteinTurkey}</option>
                <option value="lamb">{p.proteinLamb}</option>
                <option value="salmon">{p.proteinSalmon}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between mt-6 pt-5 border-t border-[#ebebeb] dark:border-[#262626]">
          <button type="button" id="prev-btn"
            class="hidden px-5 py-2.5 text-sm font-semibold text-[#8f8f8f] dark:text-[#737373] border border-[#ebebeb] dark:border-[#262626] rounded-xl hover:text-[#171717] dark:hover:text-white hover:border-[#171717] dark:hover:border-white transition-all cursor-pointer touch-manipulation">
            ← {p.prevBtn}
          </button>
          <div id="prev-placeholder"></div>
          <button type="button" id="next-btn"
            class="px-6 py-2.5 text-sm font-semibold bg-[#171717] dark:bg-white text-white dark:text-[#171717] rounded-xl hover:bg-[#0070f3] dark:hover:bg-[#0070f3] dark:hover:text-white transition-all cursor-pointer touch-manipulation">
            {p.nextBtn} →
          </button>
          <button type="submit" id="submit-btn"
            class="hidden px-6 py-2.5 text-sm font-semibold bg-[#0070f3] text-white rounded-xl hover:bg-[#0761d1] transition-all cursor-pointer touch-manipulation">
            {p.submitBtn}
          </button>
        </div>

      </form>
    </div>

    <!-- Disclaimer -->
    <p class="text-center text-[11px] text-[#a1a1a1] dark:text-[#737373] mt-4 px-4">
      {p.disclaimerText}
    </p>

  </div>
</section>

<script>
  const TOTAL_STEPS = 4;
  let currentStep = 1;
  let weightUnit: 'lbs' | 'kg' = 'lbs';

  const stepTitles = ['step1Title', 'step2Title', 'step3Title', 'step4Title'];

  function getTranslations() {
    const section = document.getElementById('planner-section') as HTMLElement;
    const lang = section?.dataset.lang || 'en';
    return (window as any).__plannerTranslations?.[lang] || {};
  }

  function updateProgress() {
    const pct = (currentStep / TOTAL_STEPS) * 100;
    const bar = document.getElementById('quiz-progress-bar') as HTMLElement;
    const label = document.getElementById('step-label') as HTMLElement;
    const badge = document.getElementById('step-title-badge') as HTMLElement;
    if (bar) bar.style.width = pct + '%';
    if (label) {
      const t = getTranslations();
      label.textContent = \`\${t.stepPrefix || 'STEP'} \${currentStep} \${t.ofStep || 'OF 4'}\`;
    }
    if (badge) {
      const t = getTranslations();
      const key = stepTitles[currentStep - 1] as keyof typeof t;
      badge.textContent = t[key] || '';
    }
  }

  function showStep(step: number) {
    document.querySelectorAll('.quiz-step').forEach((el) => {
      (el as HTMLElement).classList.add('hidden');
    });
    const target = document.querySelector(\`.quiz-step[data-step="\${step}"]\`) as HTMLElement;
    if (target) target.classList.remove('hidden');

    const prevBtn = document.getElementById('prev-btn') as HTMLElement;
    const prevPlaceholder = document.getElementById('prev-placeholder') as HTMLElement;
    const nextBtn = document.getElementById('next-btn') as HTMLElement;
    const submitBtn = document.getElementById('submit-btn') as HTMLElement;

    if (step === 1) {
      prevBtn.classList.add('hidden');
      prevPlaceholder.classList.remove('hidden');
    } else {
      prevBtn.classList.remove('hidden');
      prevPlaceholder.classList.add('hidden');
    }

    if (step === TOTAL_STEPS) {
      nextBtn.classList.add('hidden');
      submitBtn.classList.remove('hidden');
    } else {
      nextBtn.classList.remove('hidden');
      submitBtn.classList.add('hidden');
    }

    updateProgress();
  }

  // Next button
  document.getElementById('next-btn')?.addEventListener('click', () => {
    if (currentStep < TOTAL_STEPS) {
      currentStep++;
      showStep(currentStep);
      document.getElementById('planner-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Prev button
  document.getElementById('prev-btn')?.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
      document.getElementById('planner-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Weight unit toggle
  let currentWeightKg = false;
  document.getElementById('unit-lbs')?.addEventListener('click', () => {
    if (currentWeightKg) {
      const input = document.getElementById('dog-weight') as HTMLInputElement;
      const val = parseFloat(input.value) || 0;
      input.value = Math.round(val * 2.20462).toString();
      input.max = '250';
    }
    currentWeightKg = false;
    weightUnit = 'lbs';
    (document.getElementById('unit-lbs') as HTMLElement).className = 'px-3 py-1.5 bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold transition-colors cursor-pointer font-mono text-xs';
    (document.getElementById('unit-kg') as HTMLElement).className = 'px-3 py-1.5 bg-white dark:bg-[#1a1a1a] text-[#8f8f8f] dark:text-[#737373] transition-colors cursor-pointer font-mono text-xs';
    (document.getElementById('weight-unit-label') as HTMLElement).textContent = 'LBS';
  });

  document.getElementById('unit-kg')?.addEventListener('click', () => {
    if (!currentWeightKg) {
      const input = document.getElementById('dog-weight') as HTMLInputElement;
      const val = parseFloat(input.value) || 0;
      input.value = Math.round(val / 2.20462).toString();
      input.max = '115';
    }
    currentWeightKg = true;
    weightUnit = 'kg';
    (document.getElementById('unit-kg') as HTMLElement).className = 'px-3 py-1.5 bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold transition-colors cursor-pointer font-mono text-xs';
    (document.getElementById('unit-lbs') as HTMLElement).className = 'px-3 py-1.5 bg-white dark:bg-[#1a1a1a] text-[#8f8f8f] dark:text-[#737373] transition-colors cursor-pointer font-mono text-xs';
    (document.getElementById('weight-unit-label') as HTMLElement).textContent = 'KG';
  });

  // Form submit
  document.getElementById('dog-planner-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
  });
  document.getElementById('submit-btn')?.addEventListener('click', () => {
    submitForm();
  });

  function submitForm() {
    const name = (document.getElementById('dog-name') as HTMLInputElement).value.trim() || 'Buddy';
    const breed = (document.getElementById('dog-breed') as HTMLSelectElement).value;
    const ageStage = (document.querySelector('input[name="age-stage"]:checked') as HTMLInputElement)?.value || 'adult';
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value || 'male-neutered';
    const bcs = parseInt((document.querySelector('input[name="bcs"]:checked') as HTMLInputElement)?.value || '5');
    const weightGoal = (document.querySelector('input[name="weight-goal"]:checked') as HTMLInputElement)?.value || 'maintain';
    const activity = (document.querySelector('input[name="activity"]:checked') as HTMLInputElement)?.value || 'moderate';
    const diet = (document.querySelector('input[name="diet"]:checked') as HTMLInputElement)?.value || 'fresh-cooked';
    const healthFocus = (document.querySelector('input[name="health-focus"]:checked') as HTMLInputElement)?.value || 'General Longevity & Health';
    const proteinChoice = (document.getElementById('protein-choice') as HTMLSelectElement).value;

    const rawWeight = parseFloat((document.getElementById('dog-weight') as HTMLInputElement).value) || 45;
    const weightLbs = currentWeightKg ? rawWeight * 2.20462 : rawWeight;

    const allergies = Array.from(document.querySelectorAll('input[name="allergy"]:checked'))
      .map(el => (el as HTMLInputElement).value);

    const profile = {
      name,
      breed,
      ageStage,
      gender,
      weightLbs,
      targetGoal: weightGoal,
      bcs,
      activityLevel: activity,
      allergies: allergies.length ? allergies : ['none / no allergies'],
      healthFocus,
      dietPreference: diet,
      proteinChoice,
    };

    document.dispatchEvent(new CustomEvent('dogPlannerSubmit', { detail: profile }));
  }
</script>
`;

fs.writeFileSync('src/components/PlannerQuiz.astro', content, 'utf8');
console.log('PlannerQuiz.astro written successfully, size:', content.length);
