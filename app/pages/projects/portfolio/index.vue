<script setup lang="ts">

</script>
<template>
    <div
        class="w-screen min-h-[80vh] overflow-y-auto scrollbar-none px-4 sm:px-[6%] md:px-[10%] lg:px-[15%] py-12 text-app-text">
        <section class="max-w-4xl mx-auto flex flex-col gap-14 pb-32">

            <div class="space-y-4">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.15em] text-niel-primary-200 font-serif">
                    {{ $t("projects.portfolio.title") }}
                </h1>
                <div class="text-app-text-muted text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                    <p>{{ $t("projects.portfolio.description") }}</p>
                </div>
            </div>

            <div class="flex flex-col gap-12">
                <ProjectsPostContainer :title="$t('projects.portfolio.premise.title')"
                    :date="$t('projects.portfolio.premise.date')">
                    <div class="space-y-6 text-app-text-muted font-light leading-relaxed text-[15px] sm:text-[17px]">
                        <p>{{ $t("projects.portfolio.premise.p1") }}</p>

                        <div class="flex flex-wrap gap-4 py-4 opacity-90">
                            <NuxtImg src="/img/nuxt.svg"
                                class="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            <NuxtImg src="/img/vue.png"
                                class="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            <NuxtImg src="/img/tailwind.svg"
                                class="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            <NuxtImg src="/img/typescript.svg"
                                class="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                        </div>
                        <p>{{ $t("projects.portfolio.premise.p2") }}</p>
                        <p>{{ $t("projects.portfolio.premise.p3") }}</p>
                    </div>
                </ProjectsPostContainer>

            </div>
        </section>
    </div>
    <ReturnButton to="/projects" />
</template>