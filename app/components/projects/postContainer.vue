<script setup lang="ts">
defineProps<{
    title: string,
    date?: string,
}>()

</script>

<template>
    <article class="flex flex-col gap-6 pl-6 sm:pl-8 py-6 relative group bg-[#0c111a] rounded-sm border border-white/5">
        <div
            class="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-sm bg-[#c5a880] group-hover:shadow-[0_0_10px_rgba(197,168,128,0.6)] transition-shadow duration-300">
        </div>

        <header class="flex flex-col gap-1">
            <h2 class="text-lg sm:text-xl md:text-2xl font-light uppercase tracking-[0.15em] text-niel-primary-200 font-serif">{{ title }}</h2>
            <time v-if="date" class="text-xs sm:text-sm text-[#8b949e]/60 font-light">{{ date }}</time>
        </header>

        <div class="text-[#8b949e] font-light leading-relaxed flex flex-col gap-4 text-sm sm:text-base">
            <slot />
        </div>

    </article>
</template>