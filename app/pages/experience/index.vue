<script setup lang="ts">
const { t } = useI18n();

</script>
<template>
    <div class="w-screen h-[90vh] scrollbar-none overscroll-y-none px-[14%] py-10">
        <div class="grid grid-cols-6 w-full h-full">

            <section class="w-full h-full col-span-2 p-4 flex flex-col gap-4 bg-niel-primary-200/3 rounded-lg">
                <div>
                    <p class="font-semibold text-2xl text-niel-primary-200 flex items-center gap-2 select-none">
                        <IconUser class="w-[32px] h-[32px]" /> {{ t("experience.details.aboutMe.title") }}
                    </p>
                    <p class="text-[16px] text-pretty text-niel-neutral-300 select-none">
                        {{ t("experience.details.aboutMe.description") }}
                    </p>
                </div>
                <div>
                    <p class="font-semibold text-2xl text-niel-primary-200 flex items-center gap-2 select-none">
                        <IconSchool class="w-[32px] h-[32px] select-none" />
                        {{ t("experience.details.aboutMe.universityTitle") }}
                    </p>
                    <p class="text-[16px] text-pretty text-niel-neutral-300 select-none">
                        {{ t("experience.details.aboutMe.universitySubtitle") }}</p>
                    <p class="text-sm text-pretty text-niel-neutral-400 select-none">2022 - 2026</p>
                    <p class="text-sm text-pretty text-niel-neutral-400 select-none">
                        {{ t("experience.details.aboutMe.universityDegree") }}</p>
                </div>
            </section>

            <section class="w-full h-full col-span-4 p-4 overflow-y-auto scrollbar-none flex flex-col gap-4">
                <div class="flex flex-col justify-start border border-niel-primary-200/50 gap-4 rounded-lg">
                    <div id="card-header"
                        class="flex flex-row justify-start bg-niel-primary-200/3 hover:bg-niel-primary-400/5">
                        <div class="p-4">
                            <div class="grid grid-cols-3 w-full">
                                <div class="col-span-1">
                                    <p
                                        class="font-semibold text-2xl text-niel-primary-200 flex items-center gap-2 select-none">
                                        Factor-k Software</p>
                                    <p class="text-[16px] text-pretty text-niel-neutral-300 select-none">
                                        {{ t("experience.experience.factorK.subtitle") }}</p>
                                    <p class="text-sm text-pretty text-niel-neutral-400 select-none">
                                        {{ t("experience.experience.factorK.period") }}</p>
                                </div>
                                <div class="col-span-2 flex flex-row gap-4 items-center h-full w-full">
                                    <NuxtImg src="/img/react.png" class="object-contain w-[32px] h-[32px]" />
                                    <NuxtImg src="/img/tailwind.svg" class="object-contain w-[32px] h-[32px]" />
                                    <NuxtImg src="/img/typescript.svg" class="object-contain w-[32px] h-[32px]" />
                                    <IconAngular class="object-contain w-[32px] h-[32px]" />
                                    <NuxtImg src="/img/netcore.png" class="object-contain w-[32px] h-[32px]" />
                                    <NuxtImg src="/img/azure.png" class="object-contain w-[32px] h-[32px]" />
                                    <NuxtImg src="/img/clerk.png" class="object-contain w-[32px] h-[32px]" />
                                    <NuxtImg src="/img/mysql.svg" class="object-contain w-[32px] h-[32px]" />
                                    <NuxtImg src="/img/swagger.png" class="object-contain w-[32px] h-[32px]" />
                                    <NuxtImg src="/img/storybook.png" class="object-contain w-[32px] h-[32px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start gap-4 px-4">
                        <p class="text-[16px] text-pretty text-niel-neutral-300 select-none">
                            {{ t("experience.experience.factorK.description") }}</p>
                        <div class="ms-2 border-l-2 border-niel-primary-200/50 pl-[14px] mb-4">
                            <ul class="list-disc flex flex-col gap-3">
                                <li class="text-[16px] text-pretty text-niel-neutral-300">
                                    <p
                                        class="text-[16px] text-pretty text-niel-neutral-300 hover:text-niel-primary-200/80 select-none">
                                        {{ t("experience.experience.factorK.achievements.item_1") }}
                                    </p>
                                </li>
                                <li class="text-[16px] text-pretty text-niel-neutral-300">
                                    <p
                                        class="text-[16px] text-pretty text-niel-neutral-300 hover:text-niel-primary-200/80 select-none">
                                        {{ t("experience.experience.factorK.achievements.item_2") }}
                                    </p>
                                </li>
                                <li class="text-[16px] text-pretty text-niel-neutral-300">
                                    <p
                                        class="text-[16px] text-pretty text-niel-neutral-300 hover:text-niel-primary-200/80 select-none">
                                        {{ t("experience.experience.factorK.achievements.item_3") }}
                                    </p>
                                </li>
                                <li class="text-[16px] text-pretty text-niel-neutral-300">
                                    <p
                                        class="text-[16px] text-pretty text-niel-neutral-300 hover:text-niel-primary-200/80 select-none">
                                        {{ t("experience.experience.factorK.achievements.item_4") }}
                                    </p>
                                </li>
                                <li class="text-[16px] text-pretty text-niel-neutral-300">
                                    <p
                                        class="text-[16px] text-pretty text-niel-neutral-300 hover:text-niel-primary-200/80 select-none">
                                        {{ t("experience.experience.factorK.achievements.item_5") }}
                                    </p>
                                </li>
                                <li class="text-[16px] text-pretty text-niel-neutral-300">
                                    <p
                                        class="text-[16px] text-pretty text-niel-neutral-300 hover:text-niel-primary-200/80 select-none">
                                        {{ t("experience.experience.factorK.achievements.item_6") }}
                                    </p>
                                </li>
                                <li class="text-[16px] text-pretty text-niel-neutral-300">
                                    <p
                                        class="text-[16px] text-pretty text-niel-neutral-300 hover:text-niel-primary-200/80 select-none">
                                        {{ t("experience.experience.factorK.achievements.item_7") }}
                                    </p>
                                </li>
                                <li class="text-[16px] text-pretty text-niel-neutral-300">
                                    <p
                                        class="text-[16px] text-pretty text-niel-neutral-300 hover:text-niel-primary-200/80 select-none">
                                        {{ t("experience.experience.factorK.achievements.item_8") }}
                                    </p>
                                </li>
                                <li class="text-[16px] text-pretty text-niel-neutral-300">
                                    <p
                                        class="text-[16px] text-pretty text-niel-neutral-300 hover:text-niel-primary-200/80 select-none">
                                        {{ t("experience.experience.factorK.achievements.item_9") }}
                                    </p>
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