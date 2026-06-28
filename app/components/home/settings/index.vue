<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { useSound } from '~/composables/core/useSound';

const { t } = useI18n();
const { playHover } = useSound();
function onHover() {
    playHover();
}

const rootEl = ref<HTMLElement | null>(null);
const showSettingsOnHover = ref(false);
const showConfigButton = ref(true);

function onMouseEnter() {
    onHover()
    showConfigButton.value = false;
    showSettingsOnHover.value = true;
}
function onMouseLeave() {
    showConfigButton.value = true;
    showSettingsOnHover.value = false;
}

onMounted(() => {
    if (rootEl.value) {
        gsap.fromTo(rootEl.value,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, delay: 1.2, ease: 'power2.out', immediateRender: true }
        );
    }
});
</script>
<template>
    <div ref="rootEl" class="fixed bottom-8 right-8 text-white z-50 opacity-0">

        <div v-if="showConfigButton" @mouseenter="onMouseEnter">
            <button class="nav-button group flex flex-col items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400
                text-sm sm:text-base md:text-lg desktop:text-xl text-center font-light uppercase tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.5em] desktop:tracking-[0.4em]
                transition-colors duration-200 cursor-pointer select-none">
                <span>{{ t('home.settings.settingsButton') }}</span>
                <div class="w-full h-0.5 mt-1
                 bg-linear-to-r from-transparent via-niel-primary-400 to-transparent
                 scale-x-[0.15] opacity-0
                 group-hover:scale-x-130 group-hover:opacity-100
                 transition-all duration-500 ease-in-out origin-center">
                </div>
            </button>
        </div>
        <div class="flex flex-col items-start gap-3 mt-2" v-else="showSettingsOnHover" @mouseleave="onMouseLeave">
            <HomeSettingsLanguage />
            <HomeSettingsMusic />
        </div>
    </div>
</template>
