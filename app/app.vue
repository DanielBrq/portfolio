<script setup>
import { useSound } from '~/composables/core/useSound'
const { playMusic, isMusicPlaying } = useSound()

if (isMusicPlaying.value) {
  playMusic()
}
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
