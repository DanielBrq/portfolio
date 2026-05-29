<script setup lang="ts">
import { useSound } from '~/composables/useSound';

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
        class="group items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400
            text-base text-center font-light uppercase tracking-widest transition-colors duration-200 cursor-pointer select-none">
        <span> {{ t('home.settings.music') }}: {{ (isMusicPlaying ? 'ON' : 'OFF') }}</span>
    </button>
</template>
