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
            text-base text-center font-light uppercase tracking-widest transition-all duration-300 cursor-pointer select-none border border-transparent hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] rounded-sm px-3 py-1">
        <span> {{ t('home.settings.language') }}: {{ (locale === 'en' ? 'ENG' : 'ES') }}</span>
    </button>
</template>
