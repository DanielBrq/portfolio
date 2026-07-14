<script setup lang="ts">
import { useCursorFollow } from '~/composables/core/useCursorFollow';

onMounted(() => {
  useCursorFollow();
})

const { t } = useI18n()

const experiences = [
  {
    key: 'omAgency',
    company: 'OM Agency',
    icons: ['/img/angular.png', '/img/vue.png', '/img/nuxt.svg', '/img/nodejs.svg', '/img/netcore.png', '/img/postgresql.svg', '/img/prisma.png', '/img/railway.png', '/img/openai.png'],
    count: 5
  },
  {
    key: 'factorK',
    company: 'Factor-K Software',
    icons: ['/img/react.png', '/img/tailwind.svg', '/img/typescript.svg', '/img/angular.png', '/img/netcore.png', '/img/azure.png', '/img/clerk.png', '/img/mysql.svg', '/img/swagger.png', '/img/storybook.png'],
    count: 9
  },
  {
    key: 'mymTransportes',
    company: 'MYM Transportes Y Taller',
    icons: ['/img/react.png', '/img/nodejs.svg', '/img/javascript.svg', '/img/mssql.png', '/img/azure.png'],
    count: 4
  }
]
</script>
<template>
  <div class="w-dvw h-dvh overflow-hidden flex flex-col px-6 mobile:px-[10%]">
    <div
      class="bg-[url(/img/pattern1.png)] w-full h-full absolute z-[-1] opacity-20 top-0 left-0 bg-niel-primary-500 bg-blend-multiply mask-y-from-95% mask-y-to-100% mask-x-from-95% mask-x-to-100%">
    </div>
    <div class="cursor-follow rounded-full mix-blend-color-dodge opacity-15 saturate-120" />

    <div class="flex-1 flex items-center justify-center min-h-0 z-10">
      <div class="grid grid-cols-1 md:grid-cols-6 w-full max-w-6xl gap-6 h-full max-h-[80vh]">
        <section class="md:col-span-2 p-4 mobile:p-6 sm:p-8 flex flex-col justify-between gap-6 bg-[#0c111a] rounded-sm border border-white/5 transition-all duration-300
           hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(209,213,219,0.15)]">
          <div class="flex flex-col gap-4">
            <h2 class="font-serif font-light uppercase tracking-wider mobile:tracking-widest sm:tracking-[0.15em] text-xl sm:text-[28px] leading-tight text-niel-primary-200 
              flex items-center gap-2">
              <IconUser class="w-7 h-7 shrink-0" />
              {{ t('experience.details.aboutMe.title') }}
            </h2>
            <p class="text-base text-app-text-muted font-light tracking-[0.02em] leading-relaxed">
              {{ t('experience.details.aboutMe.description') }}
            </p>
          </div>
          <div class="flex flex-col gap-4 border-t border-white/5 pt-6">
            <h2 class="font-serif font-light uppercase tracking-wider mobile:tracking-widest sm:tracking-[0.15em] text-xl sm:text-[28px] leading-tight
               text-niel-primary-200 flex items-center gap-2">
              <IconSchool class="w-7 h-7 shrink-0" />
              {{ t('experience.details.aboutMe.universityTitle') }}
            </h2>
            <p class="text-sm text-app-text-muted font-light tracking-[0.02em] leading-relaxed">
              {{ t('experience.details.aboutMe.universitySubtitle') }}
            </p>
            <p class="text-sm text-niel-neutral-300 tracking-wider">
              2022 - 2026
            </p>
            <p class="text-sm text-niel-neutral-400 tracking-wider">
              {{ t('experience.details.aboutMe.universityDegree') }}
            </p>
          </div>
        </section>

        <section
          class="md:col-span-4 flex flex-col bg-[#0c111a] p-4 mobile:p-6 sm:p-8 rounded-sm border border-white/5 transition-all duration-300
           hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] min-h-0 overflow-hidden overscroll-y-none!">
          <div class="flex flex-col gap-6 overflow-y-auto min-h-0 scrollbar-none pr-2">
            <template v-for="exp in experiences" :key="exp.key">
              <div class="pb-6 border-b border-white/5 shrink-0">
                <div class="flex flex-col sm:grid sm:grid-cols-10 gap-4">
                  <div class="sm:col-span-7 flex flex-col gap-2">
                    <h3
                      class="font-serif font-light uppercase tracking-[0.15em] text-[28px] leading-tight text-niel-primary-200">
                      {{ exp.company }}
                    </h3>
                    <p class="text-sm text-app-text-muted font-light tracking-[0.02em] leading-relaxed">
                      {{ t(`experience.experience.${exp.key}.subtitle`) }}
                    </p>
                    <p class="text-sm text-niel-neutral-300 tracking-wider">
                      {{ t(`experience.experience.${exp.key}.period`) }}
                    </p>
                  </div>
                  <div class="sm:col-span-3 flex items-center justify-start sm:justify-end">
                    <div class="grid grid-cols-3 gap-1.5">
                      <NuxtImg v-for="icon in exp.icons" :key="icon" :src="icon"
                        class="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4 shrink-0">
                <p class="text-sm text-app-text-muted font-light tracking-[0.02em] leading-relaxed">
                  {{ t(`experience.experience.${exp.key}.description`) }}
                </p>
                <div class="border-l border-niel-primary-200/30 pl-6 overscroll-y-auto">
                  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-3 list-disc pl-4 marker:text-niel-primary-400">
                    <li v-for="n in exp.count" :key="n"
                      class="text-sm text-app-text-muted font-light tracking-[0.02em] leading-relaxed">
                      <span class="hover:text-niel-primary-200 transition-colors duration-200">
                        {{ t(`experience.experience.${exp.key}.achievements.item_${n}`) }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </div>
        </section>
      </div>
    </div>
    <div class="flex flex-row justify-center desktop:justify-start items-start px-6 mobile:px-[11%]">
      <ReturnButton />
    </div>
  </div>
</template>
