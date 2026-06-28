<script lang="ts" setup>
import { useSound } from '~/composables/core/useSound';

const { label } = defineProps({
    label: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['click']);

const { playHover, playClick } = useSound();

function handleClick(event: MouseEvent) {
    playClick();
    emit('click', event);
}

</script>
<template>
    <button @click="handleClick($event)" @mouseenter="playHover()" class="nav-button group flex flex-col items-start justify-center text-niel-neutral-400 hover:text-niel-primary-400
        text-sm sm:text-base md:text-2xl text-center font-light uppercase tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.35em] 
         w-full transition-colors duration-200 cursor-pointer select-none py-3 md:py-0">

        <span>{{ label }}</span>
        <div class="w-full h-0.5 mt-1 
         bg-linear-to-r from-transparent via-niel-primary-400 to-transparent
         scale-x-[0.15] opacity-0
         group-hover:scale-x-130 group-hover:opacity-100
         transition-all duration-500 ease-in-out origin-center">
        </div>
    </button>
</template>
