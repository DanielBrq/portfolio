<script setup lang="ts">

interface props {
    title: string;
    description: string;
    to?: string;
    githubUrl?: string | null;
    websiteUrl?: string | null;
    repositoryPrivate: boolean;
    class?: string | null;
    t: any;
}
const props = defineProps<props>();

const repoVisibility = computed(() => {
    if (props.repositoryPrivate) {
        return props.t("projects.repoMode.private");
    }
    return props.t("projects.repoMode.public");
});

</script>
<template>
    <div :class="class"
        class="w-full rounded-xl border border-niel-primary-200/50 px-4 sm:px-[6%] md:px-[8%] py-3 hover:border-niel-primary-200/60 duration-200">
        <div class="flex flex-col sm:grid sm:grid-cols-4 min-h-auto sm:min-h-40 gap-4 sm:gap-0 items-start sm:items-center justify-between">
            <div class="flex flex-col gap-1 sm:col-span-3">
                <p
                    class="text-niel-primary-100 text-xl sm:text-2xl md:text-3xl font-sans tracking-tighter group-hover:text-niel-primary-200 duration-200">
                    {{ title }}</p>
                <p class="text-niel-neutral-300 text-sm sm:text-[15px] md:text-[16px] font-light tracking-tighter">{{ description }}</p>
                <div class="flex items-center gap-2">
                    <div class="flex items-center mt-1 border rounded-full w-fit px-3 py-0.5" :class="{
                        'border-emerald-400 text-emerald-200': props.repositoryPrivate === false,
                        'border-rose-400 text-rose-200': props.repositoryPrivate === true,
                    }">
                        <p class="font-light text-xs sm:text-sm md:text-md">{{ repoVisibility }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-row sm:flex-col gap-4 sm:gap-4 justify-start sm:items-baseline-last! h-full sm:py-[25%]">
                <a v-if="githubUrl" :href="githubUrl" target="_blank"
                    class="flex items-center gap-2 group hover:scale-105 duration-200">
                    <IconGithub
                        class="group-hover:text-niel-primary-200 transition-colors duration-200 ease-in-out size-[28px] sm:size-[32px]" />
                    <p class="group-hover:text-niel-primary-200 transition-colors duration-200 ease-in-out text-sm sm:text-base">GitHub</p>
                </a>
                <a v-if="websiteUrl" :href="websiteUrl" target="_blank"
                    class="flex items-center gap-2 group hover:scale-105 duration-200">
                    <IconUrl
                        class="group-hover:text-niel-primary-200 transition-colors duration-200 ease-in-out size-[28px] sm:size-[32px]" />
                    <p class="group-hover:text-niel-primary-200 transition-colors duration-200 ease-in-out text-sm sm:text-base">Demo</p>
                </a>
                <nuxt-link v-if="to" :to="to" class="flex items-center gap-2 group hover:scale-105 duration-200 animate-pulse hover:animate-none">
                    <IconFolder
                        class="group-hover:text-niel-primary-200 transition-colors duration-200 ease-in-out size-[28px] sm:size-[32px]" />
                    <p class="group-hover:text-niel-primary-200 transition-colors duration-200 ease-in-out text-sm sm:text-base">
                        {{ $t("projects.detailsButton") }}</p>
                </nuxt-link>

            </div>
        </div>
    </div>
</template>