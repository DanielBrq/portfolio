<script setup lang="ts">
import { useSound } from '~/composables/core/useSound'
import { onMounted } from 'vue'

const LOCALE_KEY = 'portfolio-locale'

const { t, setLocale, locale } = useI18n()
const { playClick } = useSound()

onMounted(() => {
  const saved = localStorage.getItem(LOCALE_KEY)
  if (saved && saved !== locale.value) {
    setLocale(saved)
  }
})

function switchLanguage() {
  playClick()
  const next = locale.value === 'en' ? 'es' : 'en'
  setLocale(next)
  localStorage.setItem(LOCALE_KEY, next)
}
</script>
<template>
  <button
    @click="switchLanguage"
    class="nav-button group flex flex-col items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400 py-1 px-2 hover:border hover:border-niel-primary-400 text-sm sm:text-base md:text-lg desktop:text-xl text-center font-light uppercase tracking-[0.1em] mobile:tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.5em] desktop:tracking-[0.4em] transition-colors duration-200 cursor-pointer select-none"
  >
    <span
      >{{ t('home.settings.language') }}:
      {{ locale === 'en' ? 'ENG' : 'ES' }}</span
    >
  </button>
</template>
