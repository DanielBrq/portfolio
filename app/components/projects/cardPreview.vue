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
    <div class="flex items-center gap-3">
        <div :class="[
            'group relative w-full overflow-hidden rounded-2xl border border-niel-secondary-800/80 bg-niel-secondary-900/30 backdrop-blur-xl transition-all duration-300 ease-out hover:border-niel-primary-500/25',
            props.class
        ]">
            <div
                class="absolute inset-0 bg-linear-to-br from-niel-primary-500/5 via-transparent to-niel-secondary-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-30 pointer-events-none">
            </div>
            <div
                class="absolute -top-24 -right-24 w-48 h-48 bg-niel-primary-500/10 blur-3xl rounded-full opacity-0 transition-opacity duration-300 pointer-events-none">
            </div>

            <div class="relative flex flex-col h-full p-6 sm:p-8">

                <div class="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3
                        class="text-niel-primary-50 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-niel-primary-300">
                        {{ title }}
                    </h3>

                    <div class="shrink-0 mt-1">
                        <span :class="[
                            'inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide border transition-all duration-300',
                            props.repositoryPrivate
                                ? 'bg-rose-500/5 text-rose-300 border-rose-500/20 group-hover:border-rose-500/40 group-hover:bg-rose-500/10 group-hover:shadow-[0_0_10px_rgba(244,63,94,0.1)]'
                                : 'bg-emerald-500/5 text-emerald-300 border-emerald-500/20 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.1)]'
                        ]">
                            <span class="w-1.5 h-1.5 rounded-full mr-2 transition-all duration-300"
                                :class="props.repositoryPrivate ? 'bg-rose-400 group-hover:shadow-[0_0_6px_rgba(244,63,94,0.6)]' : 'bg-emerald-400 group-hover:shadow-[0_0_6px_rgba(16,185,129,0.6)]'"></span>
                            {{ repoVisibility }}
                        </span>
                    </div>
                </div>

                <p class="text-niel-neutral-300/80 text-sm sm:text-[15px] font-light leading-relaxed mb-8 grow">
                    {{ description }}
                </p>

                <div
                    class="flex flex-wrap items-center gap-4 sm:gap-6 mt-auto pt-5 border-t border-niel-secondary-700/50">
                    <a v-if="githubUrl" :href="githubUrl" target="_blank"
                        class="group/btn flex items-center gap-2 text-niel-neutral-400 hover:text-niel-primary-300 transition-all duration-300 hover:-translate-y-0.3">
                        <IconGithub
                            class="size-5 sm:size-6 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:-rotate-3" />
                        <span class="text-sm sm:text-base font-medium">GitHub</span>
                    </a>

                    <a v-if="websiteUrl" :href="websiteUrl" target="_blank"
                        class="group/btn flex items-center gap-2 text-niel-neutral-400 hover:text-niel-primary-300 transition-all duration-300 hover:-translate-y-0.3">
                        <IconUrl
                            class="size-5 sm:size-6 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-3" />
                        <span class="text-sm sm:text-base font-medium">Demo</span>
                    </a>

                    <div class="grow"></div>
                    <nuxt-link v-if="to" :to="to"
                        class="group/link flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-niel-secondary-800/40 text-niel-primary-200 border border-niel-secondary-700/60 transition-all duration-300 hover:bg-niel-primary-500/10 hover:border-niel-primary-500/30 hover:shadow-[0_0_20px_rgba(248,187,132,0.15)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95">
                        <span class="text-sm sm:text-base font-medium tracking-wide">{{ $t("projects.detailsButton")
                            }}</span>
                        <IconFolder
                            class="size-4 sm:size-5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:text-niel-primary-300" />
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>