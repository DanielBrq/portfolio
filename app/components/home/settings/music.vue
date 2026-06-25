<script setup lang="ts">
import { useSound } from '~/composables/core/useSound';

const { t, } = useI18n();
const { playClick, isMusicPlaying, playMusic, stopMusic } = useSound();

function toggleMusic() {
    playClick();
    if (isMusicPlaying.value) {
        stopMusic();
    } else {
        playMusic();
    }
}

</script>
<template>
    <button @click="toggleMusic"
        class="nav-button group flex flex-col items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400 py-1 px-2 hover:border hover:border-niel-primary-400
        text-sm sm:text-base md:text-xl desktop:text-2xl text-center font-light uppercase tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.5em] desktop:tracking-[0.4em]
        transition-colors duration-200 cursor-pointer select-none">
        <span>{{ t('home.settings.music') }}: {{ (isMusicPlaying ? 'ON' : 'OFF') }}</span>
    </button>
</template>
