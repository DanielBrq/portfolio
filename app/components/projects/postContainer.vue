<script setup lang="ts">
defineProps<{
    id: string,
    title: string,
    date?: string,
}>()

</script>

<template>
    <article class="flex flex-col gap-4 border-l-2 border-niel-primary-200/50 pl-4 sm:pl-6 py-4 relative group">
        <div
            class="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-niel-primary-200 group-hover:shadow-[0_0_10px_rgba(var(--color-niel-primary-200),0.8)] transition-shadow duration-300">
        </div>

        <header class="flex flex-col gap-1">
            <h2 class="text-lg sm:text-xl md:text-2xl font-semibold text-niel-neutral-100">{{ title }}</h2>
            <time v-if="date" class="text-xs sm:text-sm text-niel-primary-200/80 font-light">{{ date }}</time>
        </header>

        <div class="text-niel-neutral-300 font-light leading-relaxed flex flex-col gap-4 text-sm sm:text-base">
            <slot />
        </div>

    </article>
</template>