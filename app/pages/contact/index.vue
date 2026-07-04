<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const copied = ref(false)
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>
<template>
  <div
    class="w-dvw h-dvh overflow-hidden flex flex-col items-center justify-center"
  >
    <div class="flex flex-col gap-1 z-10 select-none px-4 items-center">
      <h1
        class="text-6xl font-serif font-light uppercase tracking-[0.15em] leading-tight text-niel-primary-200 niel-gradient-w animate-pulse-name text-center"
      >
        {{ t('contact.title') }}
      </h1>
      <h3
        class="text-xl font-serif font-light uppercase tracking-[0.15em] text-niel-primary-200 mt-2"
      >
        {{ t('contact.subtitle') }}
      </h3>
    </div>

    <nav class="flex flex-col gap-4 w-full max-w-xl px-4 mt-12 z-10">
      <button
        @click="copyToClipboard('daniel.barquero.dev@gmail.com')"
        class="group flex items-center gap-6 w-full p-6 rounded-sm border border-white/5 bg-[#0c111a] transition-all duration-300 ease-out hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] cursor-pointer text-left"
      >
        <div
          class="flex items-center justify-center w-10 h-10 opacity-65 group-hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.225 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div class="flex flex-col gap-1">
          <span
            class="text-xs uppercase tracking-[0.25em] text-app-text-muted font-light"
            >{{ t('contact.labels.email') }}</span
          >
          <span
            class="text-base text-app-text-muted lowercase tracking-[0.05em] font-light"
            >{{ copied ? 'COPIED' : 'daniel.barquero.dev@gmail.com' }}</span
          >
        </div>
      </button>

      <a
        href="https://www.linkedin.com/in/danielbrq/"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-6 w-full p-6 rounded-sm border border-white/5 bg-[#0c111a] transition-all duration-300 ease-out hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] text-left"
      >
        <div
          class="flex items-center justify-center w-10 h-10 opacity-65 group-hover:opacity-100 transition-opacity"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </div>
        <div class="flex flex-col gap-1">
          <span
            class="text-xs uppercase tracking-[0.25em] text-app-text-muted font-light"
            >{{ t('contact.labels.linkedin') }}</span
          >
          <span
            class="text-base text-app-text-muted lowercase tracking-[0.05em] font-light"
            >/in/danielbrq</span
          >
        </div>
      </a>

      <a
        href="https://github.com/DanielBrq/DanielBrq"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-6 w-full p-6 rounded-sm border border-white/5 bg-[#0c111a] transition-all duration-300 ease-out hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] text-left"
      >
        <div
          class="flex items-center justify-center w-10 h-10 opacity-65 group-hover:opacity-100 transition-opacity"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path
              d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z"
            />
          </svg>
        </div>
        <div class="flex flex-col gap-1">
          <span
            class="text-xs uppercase tracking-[0.25em] text-app-text-muted font-light"
            >{{ t('contact.labels.github') }}</span
          >
          <span
            class="text-base text-app-text-muted lowercase tracking-[0.05em] font-light"
            >/DanielBrq</span
          >
        </div>
      </a>
    </nav>

    <ReturnButton />
  </div>
</template>
