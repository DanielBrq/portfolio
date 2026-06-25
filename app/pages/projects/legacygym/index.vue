<script setup lang="ts">

</script>
<template>
    <div class="w-dvw h-dvh overflow-hidden flex flex-col items-center">
        <div class="w-full max-w-5xl h-full overflow-y-auto scrollbar-none px-6 py-12">
            <section class="flex flex-col gap-14 pb-32">
                <div class="space-y-4">
                    <h1 class="text-6xl font-serif font-light uppercase tracking-[0.15em] text-niel-primary-200">
                        Legacy Gym
                    </h1>
                    <div class="text-app-text-muted text-lg font-light leading-relaxed max-w-3xl">
                        <p>{{ $t("projects.legacyGym.description") }}</p>
                    </div>
                </div>

                <div class="flex flex-col gap-12">
                    <ProjectsPostContainer :title="$t('projects.legacyGym.planning.title')" date="2026">
                        <div class="space-y-6 text-app-text-muted font-light leading-relaxed text-base">
                            <p>{{ $t("projects.legacyGym.planning.p1") }}</p>

                            <ul class="list-disc pl-6 space-y-3 marker:text-niel-primary-400">
                                <li><span class="text-niel-neutral-200 font-normal">{{ $t("projects.legacyGym.planning.li1") }}</span>{{ $t("projects.legacyGym.planning.li1_desc") }}</li>
                                <li><span class="text-niel-neutral-200 font-normal">{{ $t("projects.legacyGym.planning.li2") }}</span>{{ $t("projects.legacyGym.planning.li2_desc") }}</li>
                                <li><span class="text-niel-neutral-200 font-normal">{{ $t("projects.legacyGym.planning.li3") }}</span>{{ $t("projects.legacyGym.planning.li3_desc") }}</li>
                                <li><span class="text-niel-neutral-200 font-normal">{{ $t("projects.legacyGym.planning.li4") }}</span>{{ $t("projects.legacyGym.planning.li4_desc") }}</li>
                            </ul>

                            <div class="flex flex-wrap gap-4 py-4 opacity-90">
                                <NuxtImg src="/img/nuxt.svg" class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                                <NuxtImg src="/img/vue.png" class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                                <NuxtImg src="/img/tailwind.svg" class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                                <NuxtImg src="/img/typescript.svg" class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                                <NuxtImg src="/img/postgresql.svg" class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            </div>

                            <p>{{ $t("projects.legacyGym.planning.p2") }}</p>
                        </div>
                    </ProjectsPostContainer>
                </div>
            </section>
        </div>
        <ReturnButton to="/projects" />
    </div>
</template>