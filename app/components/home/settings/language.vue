<script setup lang="ts">
import { useSound } from '~/composables/useSound';

const { t, setLocale, locale } = useI18n();
const { playClick } = useSound();

function switchLanguage() {
    playClick();
    setLocale(locale.value === 'en' ? 'es' : 'en');
}
</script>
<template>
    <button @click="switchLanguage"
        class="group items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400
            text-base text-center font-light uppercase tracking-widest transition-colors duration-200 cursor-pointer select-none">
        <span> {{ t('home.settings.language') }}: {{ (locale === 'en' ? 'ENG' : 'ES') }}</span>
    </button>
</template>
