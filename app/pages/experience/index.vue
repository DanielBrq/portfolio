<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <div class="w-dvw h-dvh overflow-hidden flex flex-col px-6 py-6">
    <div class="flex-1 flex items-center justify-center min-h-0">
      <div
        class="grid grid-cols-1 md:grid-cols-6 w-full max-w-6xl gap-6 max-h-full"
      >
        <section
          class="md:col-span-2 p-8 flex flex-col justify-between gap-6 bg-[#0c111a] rounded-sm border border-white/5 transition-all duration-300 hover:border-niel-neutral-300 hover:shadow-[0_0_15px_rgba(209,213,219,0.15)]"
        >
          <div class="flex flex-col gap-4">
            <p
              class="font-serif font-light uppercase tracking-[0.15em] text-3xl text-niel-primary-200 flex items-center gap-2"
            >
              <IconUser class="w-8 h-8 shrink-0" />
              {{ t('experience.details.aboutMe.title') }}
            </p>
            <p class="text-sm text-app-text-muted font-light leading-relaxed">
              {{ t('experience.details.aboutMe.description') }}
            </p>
          </div>
          <div class="flex flex-col gap-4 border-t border-white/5 pt-6">
            <p
              class="font-serif font-light uppercase tracking-[0.15em] text-3xl text-niel-primary-200 flex items-center gap-2"
            >
              <IconSchool class="w-8 h-8 shrink-0" />
              {{ t('experience.details.aboutMe.universityTitle') }}
            </p>
            <p class="text-sm text-app-text-muted font-light leading-relaxed">
              {{ t('experience.details.aboutMe.universitySubtitle') }}
            </p>
            <p class="text-sm text-niel-neutral-300">2022 - 2026</p>
            <p class="text-sm text-niel-neutral-400">
              {{ t('experience.details.aboutMe.universityDegree') }}
            </p>
          </div>
        </section>

        <section
          class="md:col-span-4 flex flex-col justify-between bg-[#0c111a] p-8 rounded-sm border border-white/5 transition-all duration-300 hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] min-h-0"
        >
          <div class="flex flex-col gap-6 overflow-y-auto min-h-0">
            <div class="pb-6 border-b border-white/5 shrink-0">
              <div class="flex flex-col sm:grid sm:grid-cols-3 gap-4">
                <div class="sm:col-span-1 flex flex-col gap-2">
                  <p
                    class="font-serif font-light uppercase tracking-[0.15em] text-3xl text-niel-primary-200 flex items-center gap-2"
                  >
                    Factor-k Software
                  </p>
                  <p
                    class="text-sm text-app-text-muted font-light leading-relaxed"
                  >
                    {{ t('experience.experience.factorK.subtitle') }}
                  </p>
                  <p class="text-sm text-niel-neutral-300">
                    {{ t('experience.experience.factorK.period') }}
                  </p>
                </div>
                <div
                  class="sm:col-span-2 flex flex-row flex-wrap gap-2 items-center justify-start sm:justify-end"
                >
                  <NuxtImg
                    src="/img/react.png"
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                  <NuxtImg
                    src="/img/tailwind.svg"
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                  <NuxtImg
                    src="/img/typescript.svg"
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                  <IconAngular
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                  <NuxtImg
                    src="/img/netcore.png"
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                  <NuxtImg
                    src="/img/azure.png"
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                  <NuxtImg
                    src="/img/clerk.png"
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                  <NuxtImg
                    src="/img/mysql.svg"
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                  <NuxtImg
                    src="/img/swagger.png"
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                  <NuxtImg
                    src="/img/storybook.png"
                    class="w-6 h-6 hover:scale-110 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <p class="text-sm text-app-text-muted font-light leading-relaxed">
                {{ t('experience.experience.factorK.description') }}
              </p>
              <div class="border-l border-niel-primary-200/30 pl-6">
                <ul
                  class="grid grid-cols-1 lg:grid-cols-2 gap-3 list-disc pl-4 marker:text-niel-primary-400"
                >
                  <li
                    v-for="n in 9"
                    :key="n"
                    class="text-sm text-app-text-muted font-light leading-relaxed"
                  >
                    <span
                      class="hover:text-niel-primary-200 transition-colors duration-200"
                    >
                      {{
                        t(
                          `experience.experience.factorK.achievements.item_${n}`,
                        )
                      }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <ReturnButton />
  </div>
</template>
<style scoped>
.header-texture {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
}
</style>
