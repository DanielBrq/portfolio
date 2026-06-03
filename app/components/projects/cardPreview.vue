<script setup lang="ts">

interface props {
    title: string;
    description: string;
    to?: string | null;
    githubUrl?: string | null;
    websiteUrl?: string | null;
    repositoryPrivate: boolean;
    class?: string | null;
}
const props = defineProps<props>();
const { t } = useI18n();

const repoVisibility = computed(() => {
    if (props.repositoryPrivate) {
        return t("experience.repoMode.private");
    }
    return t("experience.repoMode.public");
});

</script>
<template>
    <div :class="class" class="w-full rounded-xl border border-niel-primary-200/50 p-5">
        <div class="grid grid-cols-4 min-h-40 items-center justify-between">
            <div class="flex flex-col gap-1 col-span-3">
                <p class="text-niel-primary-100 text-2xl font-sans tracking-tighter">{{ title }}</p>
                <p class="text-niel-neutral-300 text-lg font-light tracking-tighter">{{ description }}</p>
                <div class="flex items-center gap-2">
                    <p class="text-niel-primary-100/85 text-lg font-normal tracking-tighte">Repo: </p>
                    <div class="flex items-center mt-1 border rounded-full w-fit px-4 py-0.5" :class="{
                        'border-emerald-400 text-emerald-200': props.repositoryPrivate === false,
                        'border-rose-400 text-rose-200': props.repositoryPrivate === true,
                    }">
                        <p class="font-light text-md">{{ repoVisibility }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <a v-if="githubUrl" :href="githubUrl" target="_blank">Icon github</a>
                <a v-if="websiteUrl" :href="websiteUrl" target="_blank">Icon website</a>
                <NuxtLink :to="to" v-if="to">Icon website</NuxtLink>
            </div>
        </div>

    </div>

</template>