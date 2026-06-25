<script setup lang="ts">
const { t } = useI18n();

</script>
<template>
    <div class="w-dvw h-dvh overflow-hidden flex items-center justify-center px-4 sm:px-[8%] md:px-[14%] py-10">
        <div class="grid grid-cols-1 md:grid-cols-6 w-full max-h-[80vh] gap-6 items-stretch">

            <section class="w-full md:col-span-2 p-6 flex flex-col justify-between gap-6 bg-[#0c111a] rounded-sm border border-white/5 transition-all duration-300 hover:border-niel-neutral-300 hover:shadow-[0_0_15px_rgba(209,213,219,0.15)]">
                <div class="flex flex-col gap-2">
                    <p class="font-serif font-light uppercase tracking-[0.15em] text-lg sm:text-xl md:text-2xl text-niel-primary-200 flex items-center gap-2 select-none">
                        <IconUser class="w-[28px] h-[28px] md:w-[32px] md:h-[32px] shrink-0" /> {{ t("experience.details.aboutMe.title") }}
                    </p>
                    <p class="text-xs sm:text-sm text-pretty text-app-text-muted font-light select-none">
                        {{ t("experience.details.aboutMe.description") }}
                    </p>
                </div>
                <div class="flex flex-col gap-2 border-t border-white/5 pt-4">
                    <p class="font-serif font-light uppercase tracking-[0.15em] text-lg sm:text-xl md:text-2xl text-niel-primary-200 flex items-center gap-2 select-none">
                        <IconSchool class="w-[28px] h-[28px] md:w-[32px] md:h-[32px] shrink-0 select-none" />
                        {{ t("experience.details.aboutMe.universityTitle") }}
                    </p>
                    <p class="text-xs sm:text-sm text-pretty text-app-text-muted font-light select-none">
                        {{ t("experience.details.aboutMe.universitySubtitle") }}</p>
                    <p class="text-xs text-pretty text-niel-neutral-300 select-none">2022 - 2026</p>
                    <p class="text-xs text-pretty text-niel-neutral-400 select-none">
                        {{ t("experience.details.aboutMe.universityDegree") }}</p>
                </div>
            </section>

            <section class="w-full md:col-span-4 flex flex-col justify-between bg-[#0c111a] p-6 rounded-sm border border-white/5 transition-all duration-300 hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)]">
                <div class="flex flex-col gap-4">
                    <div id="card-header" class="flex flex-row justify-start pb-4 border-b border-white/5">
                        <div class="w-full">
                            <div class="flex flex-col sm:grid sm:grid-cols-3 gap-4 w-full">
                                <div class="sm:col-span-1 flex flex-col gap-1">
                                    <p class="font-serif font-light uppercase tracking-[0.15em] text-lg sm:text-xl md:text-2xl text-niel-primary-200 flex items-center gap-2 select-none">
                                        Factor-k Software
                                    </p>
                                    <p class="text-xs sm:text-sm text-pretty text-app-text-muted font-light select-none">
                                        {{ t("experience.experience.factorK.subtitle") }}
                                    </p>
                                    <p class="text-xs text-pretty text-niel-neutral-300 select-none">
                                        {{ t("experience.experience.factorK.period") }}
                                    </p>
                                </div>
                                <div class="sm:col-span-2 flex flex-row flex-wrap gap-2 items-center h-full w-full justify-start sm:justify-end">
                                    <NuxtImg src="/img/react.png" class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                    <NuxtImg src="/img/tailwind.svg" class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                    <NuxtImg src="/img/typescript.svg" class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                    <IconAngular class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                    <NuxtImg src="/img/netcore.png" class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                    <NuxtImg src="/img/azure.png" class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                    <NuxtImg src="/img/clerk.png" class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                    <NuxtImg src="/img/mysql.svg" class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                    <NuxtImg src="/img/swagger.png" class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                    <NuxtImg src="/img/storybook.png" class="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="text-xs sm:text-sm text-pretty text-app-text-muted font-light select-none">
                            {{ t("experience.experience.factorK.description") }}
                        </p>
                        <div class="ms-2 border-l border-niel-primary-200/30 pl-4">
                            <ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2 list-disc pl-4">
                                <li v-for="n in 9" :key="n" class="text-xs text-pretty text-app-text-muted font-light">
                                    <span class="hover:text-niel-primary-200/80 select-none transition-colors duration-200">
                                        {{ t(`experience.experience.factorK.achievements.item_${n}`) }}
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
</template>
<style scoped>
.header-texture {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E"),
}
</style>