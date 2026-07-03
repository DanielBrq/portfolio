<script setup>
import { useSound } from '~/composables/core/useSound'
const { playMusic, stopMusic } = useSound()

stopMusic()
playMusic()
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
