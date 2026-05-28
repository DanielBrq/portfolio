<script lang="ts" setup>
const { label } = defineProps({
    label: {
        type: String,
        required: true
    }
})

</script>
<template>

    <button @click="$emit('click')"
        class="group flex flex-col items-center justify-center text-niel-neutral-500 hover:text-niel-primary-400
        text-xl text-center font-light uppercase tracking-[0.5em] w-[25%] transition-colors duration-200 cursor-pointer">

        <span>{{ label }}</span>
        <div
            class="w-full h-0.5 mt-1 bg-linear-to-r from-transparent via-niel-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
    </button>

</template>