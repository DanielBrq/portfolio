<script setup lang="ts">
import { useSound } from '~/composables/core/useSound'

const { playHover2 } = useSound()

const { t } = useI18n()
</script>
<template>
  <div class="w-dvw h-dvh overflow-hidden flex flex-col items-center justify-between px-6 py-10">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
      <ProjectsCardPreview :title="t('projects.cardPreview.title')" :description="t('projects.cardPreview.description')"
        to="/projects/legacygym" :repository-private="true" :t="t" website-url="https://legacygym.demo.dbarquero.dev/"
        @mouseenter="playHover2" />

      <ProjectsCardPreview :title="t('projects.portfolio.title')" :description="t('projects.portfolio.description')"
        to="/projects/portfolio" :repository-private="false" :t="t" website-url="https://dbarquero.dev"
        github-url="https://github.com/DanielBrq/portfolio" @mouseenter="playHover2" />
    </section>
    <div class="flex flex-row justify-center desktop:justify-start items-start px-6 mobile:px-[11%]">
      <ReturnButton />
    </div>
  </div>
</template>
