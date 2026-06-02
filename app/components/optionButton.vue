<script lang="ts" setup>
import { useSound } from '~/composables/useSound';

const { label } = defineProps({
    label: {
        type: String,
        required: true
    }
});

const { playHover, playClick } = useSound();

</script>
<template>
    <button @click="playClick()" @mouseenter="playHover()"
        class="nav-button group flex flex-col items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400
        text-xl text-center font-light uppercase tracking-[0.5em] w-[25%] transition-colors duration-200 cursor-pointer select-none">

        <span>{{ label }}</span>
        <div class="w-full h-0.5 mt-1 
         bg-linear-to-r from-transparent via-niel-primary-500 to-transparent
         scale-x-[0.15] opacity-0
         group-hover:scale-x-130 group-hover:opacity-100
         transition-all duration-500 ease-in-out origin-center">
        </div>
    </button>
</template>

<style scoped>
.nav-button {
    opacity: 0;
    transform: translateY(12px);
}
</style>