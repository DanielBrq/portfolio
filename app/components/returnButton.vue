<script lang="ts" setup>
import { useSound } from '~/composables/core/useSound';

const { t } = useI18n()
const { playHover, playClick } = useSound();

interface props{
    to?: string
}
const props = withDefaults(defineProps<props>(), { to: '/' })

function onClick() {
    playClick();
    navigateTo(props.to || '/')
}
</script>
<template>
    <div class="flex justify-center w-full py-8 mt-auto z-20">
        <div @mouseenter="playHover" @click="onClick"
            class="group flex flex-col items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400
            text-sm sm:text-base md:text-xl text-center font-light uppercase tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.5em] w-fit px-4 transition-colors duration-200 cursor-pointer select-none">
            <p>{{ t('returnButton') }}</p>
            <div class="w-full h-0.5 mt-1 
             bg-linear-to-r from-transparent via-niel-primary-500 to-transparent
             scale-x-[0.15] opacity-0
             group-hover:scale-x-130 group-hover:opacity-100
             transition-all duration-500 ease-in-out origin-center">
            </div>
        </div>
    </div>
</template>