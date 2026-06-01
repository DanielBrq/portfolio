<script lang="ts" setup>
const { t } = useI18n()
const { playHover, playClick } = useSound();
function onHover() {
    playHover();
}

</script>
<template>
    <div @mouseenter="onHover" @click="playClick"
        class="ps-[10%]
        group flex flex-col items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400
        text-xl text-center font-light uppercase tracking-[0.5em] w-[25%] transition-colors duration-200 cursor-pointer select-none">
        <NuxtLink to="/">
            <p>{{ t('returnButton') }}</p>
        </NuxtLink>
        <div class="w-full h-0.5 mt-1 
         bg-linear-to-r from-transparent via-niel-primary-500 to-transparent
         scale-x-[0.15] opacity-0
         group-hover:scale-x-130 group-hover:opacity-100
         transition-all duration-500 ease-in-out origin-center">
        </div>
    </div>
</template>