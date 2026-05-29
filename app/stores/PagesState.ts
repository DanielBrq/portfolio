import { defineStore } from "pinia"
import { ref } from "vue"

export const usePagesState = defineStore("pages", () => {
  const currentPage = ref<string>("home");

  function setCurrentPage(page: string) {
    currentPage.value = page
  }

  return {
    currentPage,
    setCurrentPage
  }
})