import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTransitionStore = defineStore('transition', () => {
  const isNavigating = ref(false)
  const targetPath = ref('/')

  function startTransition(to: string) {
    isNavigating.value = true
    targetPath.value = to
  }

  function resetTransition() {
    isNavigating.value = false
    targetPath.value = '/'
  }

  return {
    isNavigating,
    targetPath,
    startTransition,
    resetTransition,
  }
})
