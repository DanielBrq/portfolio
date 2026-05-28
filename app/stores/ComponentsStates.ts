import { defineStore } from "pinia";
import { ref } from "vue";

export const useComponentsStates = defineStore("ComponentsStates", () => {
    const titleState = ref("")

    return {
        titleState,
    };
});