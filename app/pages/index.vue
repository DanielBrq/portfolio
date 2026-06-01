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
                class="flex flex-col gap-1 h-full min-h-[70vh] justify-center items-center z-10 select-none">
                <div class="relative inline-flex items-center justify-center">
                    <h1 ref="nameEl" aria-label="Daniel Barquero Cabrera" style=""
                        class="niel-gradient-w text-7xl text-center font-extralight uppercase tracking-[0.3em] leading-20 name animate-pulse-name">
                    </h1>
                    <span ref="nameCursorEl" class="typing-cursor niel-gradient-w text-6xl font-extralight leading-20"
                        style="opacity: 0;">|</span>
                </div>
                <div class="relative inline-flex flex-col items-center justify-center group">
                    <h3 ref="jobEl" aria-label="Full Stack Developer"
                        class="text-niel-primary-100 text-xl text-center font-light uppercase tracking-[1em] animate-pulse-job">
                    </h3>
                    <span ref="jobCursorEl" class="typing-cursor text-niel-primary-100 text-xl font-light leading-none"
                        style="opacity: 0;">|</span>
                </div>
            </div>
            <div>
                <nav ref="navEl" class="flex flex-row justify-around px-[15%] mb-[10vh]">
                    <OptionButton :label="t('home.options.about')" @click="startLeaveAnimation('/about')" />
                    <OptionButton :label="t('home.options.skills')" @click="startLeaveAnimation('/skills')" />
                    <OptionButton :label="t('home.options.experience')" @click="startLeaveAnimation('/experience')" />
                    <OptionButton :label="t('home.options.contact')" @click="startLeaveAnimation('/contact')" />
                </nav>
            </div>
        </div>

        <div ref="bottomBar" class="bg-black fixed bottom-0 left-0 w-full z-20" style="height: 0;" />
    </section>
</template>
<style scoped>
.name {
    font-family: "Tilt Neon", sans-serif;
    font-style: normal;
    transform: scaleY(1.4);
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