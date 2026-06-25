<script lang="ts" setup>
import OptionButton from '~/components/optionButton.vue';
import { useHomeAnimations } from '~/composables/pages/useHomeAnimations';

const { t } = useI18n();

useHead({ title: t('home.header') });

const { 
    content, nameEl, jobEl, nameCursorEl, jobCursorEl, navEl, settingsWrapper, startLeaveAnimation 
} = useHomeAnimations();

defineExpose({ startLeaveAnimation });
</script>

<template>
    <section class="w-screen h-dvh scrollbar-none overscroll-y-none relative overflow-hidden">
        <div ref="settingsWrapper">
            <HomeSettings />
        </div>
        <div ref="content" class="w-full h-full">
            <div
                class="flex flex-col desktop:flex-row justify-center desktop:justify-between items-center h-full px-[10%] desktop:px-[15%]">
                <div id="title"
                    class="flex flex-col gap-2 justify-center items-center desktop:items-start z-10 select-none">
                    <div class="relative inline-flex items-center justify-center">
                        <h1 ref="nameEl" aria-label="Daniel Barquero Cabrera"
                            class="niel-gradient-h text-2xl sm:text-3xl md:text-4xl lg:text-5xl desktop:text-5xl text-center desktop:text-left font-light uppercase tracking-[0.15em] sm:tracking-[0.15em] md:tracking-[0.25em] lg:tracking-[0.3em] desktop:tracking-[0.4em] leading-tight font-serif name animate-pulse-name">
                        </h1>
                        <span ref="nameCursorEl"
                            class="typing-cursor text-2xl sm:text-3xl md:text-4xl lg:text-5xl desktop:text-5xl font-extralight leading-tight"
                            style="opacity: 0;">|</span>
                    </div>
                    <div class="relative inline-flex flex-col items-center desktop:items-start justify-center group">
                        <h3 ref="jobEl" aria-label="Full Stack Developer"
                            class="niel-gradient-gold-h text-xs sm:text-sm md:text-base lg:text-lg desktop:text-xl text-center desktop:text-left font-light uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.35em] desktop:tracking-[0.4em] font-serif animate-pulse-job">
                        </h3>
                        <span ref="jobCursorEl"
                            class="inline-block pointer-events-none select-none ml-0.5 niel-gradient-gold-w text-xs sm:text-sm md:text-base lg:text-lg desktop:text-xl font-light leading-none"
                            style="opacity: 0;">|</span>
                    </div>
                </div>
                <nav ref="navEl"
                    class="flex flex-row desktop:flex-col desktop:items-end gap-6 desktop:gap-8 mb-[10vh] desktop:mb-0 z-10">
                    <OptionButton :label="t('home.options.experience')" @click="startLeaveAnimation('/experience')"
                        to="/experience" />
                    <OptionButton :label="t('home.options.projects')" @click="startLeaveAnimation('/projects')" to="/projects" />
                    <OptionButton :label="t('home.options.skills')" @click="startLeaveAnimation('/skills')" to="/skills" />
                    <OptionButton :label="t('home.options.contact')" @click="startLeaveAnimation('/contact')" to="/contact" />
                </nav>
            </div>
        </div>
    </section>
</template>
<style scoped>
.name {
    transform: scaleY(1.15);
    display: inline-block;
}

.animate-pulse-name {
    animation: glow-pulse 5s ease-in-out infinite;
}

@keyframes glow-pulse {

    0%,
    100% {
        text-shadow:
            0 0 4px rgba(156, 163, 175, 0.3),
            0 0 10px rgba(156, 163, 175, 0.15);
    }

    50% {
        text-shadow:
            0 0 4px rgba(156, 163, 175, 0.5),
            0 0 10px rgba(156, 163, 175, 0.25);
    }
}

.animate-pulse-job {
    animation: pulse 4s cubic-bezier(0.6, 0, 0.7, 1) infinite;
}
</style>