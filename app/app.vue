<script>
import { useSound } from '~/composables/useSound';
const { playMusic, stopMusic } = useSound()

stopMusic();
playMusic();
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
