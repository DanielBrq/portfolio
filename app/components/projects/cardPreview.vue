<script setup lang="ts">
interface props {
  title: string
  description: string
  to?: string
  githubUrl?: string | null
  websiteUrl?: string | null
  repositoryPrivate: boolean
  class?: string | null
  t: any
}
const props = defineProps<props>()

const repoVisibility = computed(() => {
  if (props.repositoryPrivate) {
    return props.t('projects.repoMode.private')
  }
  return props.t('projects.repoMode.public')
})
</script>
<template>
  <div class="flex items-center gap-3">
    <div
      :class="[
        'group relative w-full overflow-hidden rounded-sm border border-white/5 bg-[#0c111a] transition-all duration-300 ease-out hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)]',
        props.class,
      ]"
    >
      <div class="relative flex flex-col h-64 mobile:h-72 sm:h-80 p-4 sm:p-6 md:p-8 lg:p-10">
        <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
          <h3
            class="text-niel-primary-200 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-[0.05em] mobile:tracking-[0.1em] sm:tracking-[0.15em] font-serif"
          >
            {{ title }}
          </h3>

          <div class="shrink-0 mt-1">
            <span
              :class="[
                'inline-flex items-center px-3 py-1 rounded-sm text-xs sm:text-sm font-light tracking-wide border transition-all duration-300',
                props.repositoryPrivate
                  ? 'bg-rose-500/5 text-rose-300 border-rose-500/20'
                  : 'bg-emerald-500/5 text-emerald-300 border-emerald-500/20',
              ]"
            >
              <span
                class="w-1.5 h-1.5 rounded-sm mr-2"
                :class="
                  props.repositoryPrivate ? 'bg-rose-400' : 'bg-emerald-400'
                "
              ></span>
              {{ repoVisibility }}
            </span>
          </div>
        </div>

        <p
          class="text-app-text-muted text-sm sm:text-[15px] font-light leading-relaxed mb-10 grow"
        >
          {{ description }}
        </p>

        <div
          class="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mt-auto pt-4 sm:pt-6 border-t border-white/5"
        >
          <a
            v-if="githubUrl"
            :href="githubUrl"
            target="_blank"
            class="group/btn flex items-center gap-2 text-niel-neutral-400 hover:text-[#c5a880] transition-all duration-300"
          >
            <IconGithub
              class="size-5 sm:size-6 transition-transform duration-300 group-hover/btn:scale-110"
            />
            <span class="text-sm sm:text-base font-light">GitHub</span>
          </a>

          <a
            v-if="websiteUrl"
            :href="websiteUrl"
            target="_blank"
            class="group/btn flex items-center gap-2 text-niel-neutral-400 hover:text-[#c5a880] transition-all duration-300"
          >
            <IconUrl
              class="size-5 sm:size-6 transition-transform duration-300 group-hover/btn:scale-110"
            />
            <span class="text-sm sm:text-base font-light">Demo</span>
          </a>

          <div class="grow"></div>
          <nuxt-link
            v-if="to"
            :to="to"
            class="group/link flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#0c111a] text-niel-primary-200 border border-white/5 transition-all duration-300 hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)]"
          >
            <span class="text-sm sm:text-base font-light tracking-wide">{{
              $t('projects.detailsButton')
            }}</span>
            <IconFolder
              class="size-4 sm:size-5 transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
