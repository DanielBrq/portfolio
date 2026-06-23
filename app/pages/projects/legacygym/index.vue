<script setup lang="ts">

</script>
<template>
    <div
        class="w-screen min-h-[80vh] overflow-y-auto scrollbar-none px-4 sm:px-[6%] md:px-[10%] lg:px-[15%] py-12 text-app-text">
        <section class="max-w-4xl mx-auto flex flex-col gap-14 pb-32">

            <div class="space-y-4">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-niel-primary-300">
                    Legacy Gym
                </h1>
                <div
                    class="text-niel-neutral-200/90 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                    <p>{{ $t("projects.legacyGym.description") }}</p>
                </div>
            </div>

            <div class="flex flex-col gap-12">
                <ProjectsPostContainer :title="$t('projects.legacyGym.planning.title')" date="2026">
                    <div
                        class="space-y-6 text-niel-neutral-200/95 font-light leading-relaxed text-[15px] sm:text-[17px]">
                        <p>{{ $t("projects.legacyGym.planning.p1") }}</p>

                        <ul class="list-disc pl-6 space-y-3 marker:text-niel-primary-400">
                            <li><b class="text-white font-medium">{{ $t("projects.legacyGym.planning.li1") }}</b>{{
                                $t("projects.legacyGym.planning.li1_desc") }}</li>
                            <li><b class="text-white font-medium">{{ $t("projects.legacyGym.planning.li2") }}</b>{{
                                $t("projects.legacyGym.planning.li2_desc") }}</li>
                            <li><b class="text-white font-medium">{{ $t("projects.legacyGym.planning.li3") }}</b>{{
                                $t("projects.legacyGym.planning.li3_desc") }}</li>
                            <li><b class="text-white font-medium">{{ $t("projects.legacyGym.planning.li4") }}</b>{{
                                $t("projects.legacyGym.planning.li4_desc") }}</li>
                        </ul>

                        <div class="flex flex-wrap gap-4 py-4 opacity-90">
                            <NuxtImg src="/img/nuxt.svg"
                                class="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            <NuxtImg src="/img/vue.png"
                                class="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            <NuxtImg src="/img/tailwind.svg"
                                class="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            <NuxtImg src="/img/typescript.svg"
                                class="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            <NuxtImg src="/img/postgresql.svg"
                                class="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                        </div>

                        <p>{{ $t("projects.legacyGym.planning.p2") }}</p>
                        <p>{{ $t("projects.legacyGym.planning.p3") }}</p>
                        <p>{{ $t("projects.legacyGym.planning.p4") }}</p>
                    </div>
                </ProjectsPostContainer>

                <ProjectsPostContainer :title="$t('projects.legacyGym.routines.title')" date="2026">
                    <div
                        class="space-y-6 text-niel-neutral-200/95 font-light leading-relaxed text-[15px] sm:text-[17px]">
                        <p>{{ $t("projects.legacyGym.routines.p1") }}</p>

                        <ul class="list-disc pl-6 space-y-3 marker:text-niel-primary-400">
                            <li><b class="text-white font-medium">{{ $t("projects.legacyGym.routines.li1") }}</b>{{
                                $t("projects.legacyGym.routines.li1_desc") }}</li>
                            <li><b class="text-white font-medium">{{ $t("projects.legacyGym.routines.li2") }}</b>{{
                                $t("projects.legacyGym.routines.li2_desc") }}</li>
                            <li><b class="text-white font-medium">{{ $t("projects.legacyGym.routines.li3") }}</b>{{
                                $t("projects.legacyGym.routines.li3_desc") }}</li>
                            <li><b class="text-white font-medium">{{ $t("projects.legacyGym.routines.li4") }}</b>{{
                                $t("projects.legacyGym.routines.li4_desc") }}</li>
                        </ul>

                        <p>{{ $t("projects.legacyGym.routines.p2") }}</p>
                        <p>{{ $t("projects.legacyGym.routines.p3") }}</p>
                    </div>
                </ProjectsPostContainer>

                <ProjectsPostContainer :title="$t('projects.legacyGym.aiFlow.title')" date="2026">
                    <div
                        class="space-y-6 text-niel-neutral-200/95 font-light leading-relaxed text-[15px] sm:text-[17px]">
                        <p>{{ $t("projects.legacyGym.aiFlow.p1") }}</p>

                        <div
                            class="bg-niel-secondary-900/50rounded-2xl p-6 my-6 shadow-inner flex items-center justify-center min-h-[240px] hover:border-niel-primary-500/30 transition-colors duration-500">
                            <NuxtImg src="/diagrams/legacy-gym-architecture.svg"
                                class="w-full h-full object-contain drop-shadow-lg" />
                        </div>

                        <p>{{ $t("projects.legacyGym.aiFlow.p2") }}</p>
                    </div>
                </ProjectsPostContainer>

            </div>
        </section>
    </div>
    <ReturnButton to="/projects" />
</template>