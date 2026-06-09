<script lang="ts" setup>
import { useHomeGsap } from '~/composables/home/gsap';
import OptionButton from '~/components/optionButton.vue';

const { t } = useI18n();

useHead({ title: t('home.header') });

const {
    topBar,
    bottomBar,
    content,
    nameEl,
    jobEl,
    nameCursorEl,
    jobCursorEl,
    navEl,
    startLeaveAnimation
} = useHomeGsap(t);

defineExpose({ startLeaveAnimation });
</script>

<template>
    <section class="scrollbar-none overscroll-y-none relative">
        <HomeSettings />
        <div ref="topBar" class="bg-black fixed top-0 left-0 w-full z-20" style="height: 0;" />
        <div ref="content">
            <div class="niel-gradient"></div>
            <div id="title"
                class="flex flex-col gap-1 h-full min-h-[70vh] justify-center items-center z-10 select-none px-4">
                <div class="relative inline-flex items-center justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
                    <h1 ref="nameEl" aria-label="Daniel Barquero Cabrera" class="niel-gradient-w text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center font-extralight uppercase tracking-widest sm:tracking-[0.15em] md:tracking-[0.25em] lg:tracking-[0.3em] 2xl:tracking-[0.4em] leading-tight name animate-pulse-name">
                    </h1>
                    <span ref="nameCursorEl" class="typing-cursor niel-gradient-w text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extralight leading-tight"
                        style="opacity: 0;">|</span>
                </div>
                <div class="relative inline-flex flex-col items-center justify-center group">
                    <h3 ref="jobEl" aria-label="Full Stack Developer"
                        class="text-niel-primary-100 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center font-light uppercase tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] lg:tracking-[0.9em] xl:tracking-[1.1em] animate-pulse-job">
                    </h3>
                    <span ref="jobCursorEl" class="typing-cursor text-niel-primary-100 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light leading-none"
                        style="opacity: 0;">|</span>
                </div>
            </div>
            <div>
                <nav ref="navEl" class="grid grid-cols-2 xl:flex xl:flex-row xl:justify-around gap-2 xl:gap-0 px-[8%] sm:px-[12%] md:px-[15%] mb-[10vh]">
                    <OptionButton :label="t('home.options.experience')" @click="startLeaveAnimation('/experience')" />
                    <OptionButton :label="t('home.options.projects')" @click="startLeaveAnimation('/projects')" />
                    <OptionButton :label="t('home.options.skills')" @click="startLeaveAnimation('/skills')" />
                    <OptionButton :label="t('home.options.contact')" @click="startLeaveAnimation('/contact')" />
                </nav>
            </div>
        </div>

        <div ref="bottomBar" class="bg-black fixed bottom-0 left-0 w-full z-20" style="height: 0;" />
    </section>
</template>
<style scoped>
.name {
    font-family: "google sans flex", sans-serif;
    font-style: normal;
    transform: scaleY(1.6);
    font-optical-sizing: auto;
    font-variation-settings:
        "XROT" 0,
        "YROT" 0;
    display: inline-block;
}

.animate-pulse-name {
    animation: glow-pulse 5s ease-in-out infinite;
}

@keyframes glow-pulse {

    0%,
    100% {
        text-shadow:
            0 0 4px rgba(254, 215, 170, 0.3),
            0 0 10px rgba(254, 215, 170, 0.15);
    }

    50% {
        text-shadow:
            0 0 4px rgba(254, 215, 170, 0.5),
            0 0 10px rgba(254, 215, 170, 0.25);
    }
}

.animate-pulse-job {
    animation: pulse 4s cubic-bezier(0.6, 0, 0.8, 1) infinite;
}
</style>