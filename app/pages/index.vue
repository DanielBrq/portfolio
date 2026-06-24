<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useGsap } from '~/composables/useGsap';
import { useSound } from '~/composables/useSound';
import OptionButton from '~/components/optionButton.vue';

const { t } = useI18n();

useHead({ title: t('home.header') });

const content = ref<HTMLElement | null>(null);
const nameEl = ref<HTMLElement | null>(null);
const jobEl = ref<HTMLElement | null>(null);
const nameCursorEl = ref<HTMLElement | null>(null);
const jobCursorEl = ref<HTMLElement | null>(null);
const navEl = ref<HTMLElement | null>(null);

const { typewriter, blinkCursor, killCursor, staggerFadeIn, fadeSlideIn, slideUpOut } = useGsap();
const { playType, stopType } = useSound();

onMounted(() => {
    if (content.value) {
        fadeSlideIn(content.value);
    }

    if (nameCursorEl.value) {
        blinkCursor(nameCursorEl.value);
    }

    playType();

    if (nameEl.value) {
        typewriter(nameEl.value, 'Daniel Barquero Cabrera', {
            onComplete: () => {
                if (nameCursorEl.value) {
                    killCursor(nameCursorEl.value);
                }
                if (jobCursorEl.value) {
                    blinkCursor(jobCursorEl.value);
                }
                if (jobEl.value) {
                    typewriter(jobEl.value, t('home.job'), {
                        onComplete: () => {
                            stopType();
                            if (jobCursorEl.value) {
                                killCursor(jobCursorEl.value);
                            }
                        }
                    });
                } else {
                    stopType();
                }
            }
        });
    } else {
        stopType();
    }

    if (navEl.value) {
        staggerFadeIn(navEl.value, '.nav-button', { delay: 1.0 });
    }
});

function startLeaveAnimation() {
    if (content.value) {
        slideUpOut(content.value);
    }
}

defineExpose({ startLeaveAnimation });
</script>

<template>
    <section class="w-screen h-dvh scrollbar-none overscroll-y-none relative overflow-hidden">
        <HomeSettings />
        <div ref="content" class="w-full h-full">
            <div class="niel-gradient"></div>
            <div
                class="flex flex-col desktop:flex-row justify-center desktop:justify-between items-center h-full px-[10%] desktop:px-[15%]">
                <div id="title"
                    class="flex flex-col gap-2 justify-center items-center desktop:items-start z-10 select-none">
                    <div class="relative inline-flex items-center justify-center">
                        <h1 ref="nameEl" aria-label="Daniel Barquero Cabrera"
                            class="niel-gradient-h text-3xl sm:text-4xl md:text-5xl lg:text-6xl desktop:text-7xl text-center desktop:text-left font-light uppercase tracking-widest sm:tracking-[0.15em] md:tracking-[0.25em] lg:tracking-[0.3em] desktop:tracking-[0.4em] leading-tight font-serif name animate-pulse-name">
                        </h1>
                        <span ref="nameCursorEl"
                            class="typing-cursor text-3xl sm:text-4xl md:text-5xl lg:text-5xl desktop:text-6xl font-extralight leading-tight"
                            style="opacity: 0;">|</span>
                    </div>
                    <div class="relative inline-flex flex-col items-center desktop:items-start justify-center group">
                        <h3 ref="jobEl" aria-label="Full Stack Developer"
                            class="niel-gradient-gold-h text-xs sm:text-sm md:text-base lg:text-lg desktop:text-xl text-center desktop:text-left font-light uppercase tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] lg:tracking-[0.9em] desktop:tracking-[1.1em] font-serif animate-pulse-job">
                        </h3>
                        <span ref="jobCursorEl"
                            class="inline-block pointer-events-none select-none ml-0.5 niel-gradient-gold-w text-xs sm:text-sm md:text-base lg:text-lg desktop:text-xl font-light leading-none"
                            style="opacity: 0;">|</span>
                    </div>
                </div>
                <nav ref="navEl"
                    class="flex flex-row desktop:flex-col desktop:items-end gap-6 desktop:gap-8 mb-[10vh] desktop:mb-0 z-10">
                    <OptionButton :label="t('home.options.experience')" @click="startLeaveAnimation()"
                        to="/experience" />
                    <OptionButton :label="t('home.options.projects')" @click="startLeaveAnimation()" to="/projects" />
                    <OptionButton :label="t('home.options.skills')" @click="startLeaveAnimation()" to="/skills" />
                    <OptionButton :label="t('home.options.contact')" @click="startLeaveAnimation()" to="/contact" />
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