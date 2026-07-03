<script setup lang="ts">
import ReturnButton from '~/components/returnButton.vue'

const { t } = useI18n()
useHead({ title: t('home.options.skills') })

const backendSkills = [
  {
    index: 0,
    name: '.NET Core',
    icon: 'img/netcore.png',
    color: 'rgba(99, 102, 241, 0.6)',
  },
  {
    index: 1,
    name: 'NestJS',
    icon: 'img/nestjs.svg',
    color: 'rgba(244, 63, 94, 0.6)',
  },
  {
    index: 2,
    name: 'Node.js / Express.js',
    icon: 'img/nodejs.svg',
    color: 'rgba(34, 197, 94, 0.6)',
  },
  {
    index: 3,
    name: 'PostgreSQL',
    icon: 'img/postgresql.svg',
    color: 'rgba(59, 130, 246, 0.6)',
  },
  {
    index: 4,
    name: 'MySQL',
    icon: 'img/mysql.svg',
    color: 'rgba(249, 115, 22, 0.6)',
  },
]

const frontendSkills = [
  {
    index: 0,
    name: 'Vue',
    icon: 'img/vue.png',
    color: 'rgba(16, 185, 129, 0.6)',
  },
  {
    index: 1,
    name: 'React',
    icon: 'img/react.png',
    color: 'rgba(59, 130, 246, 0.6)',
  },
  {
    index: 2,
    name: 'Nuxt',
    icon: 'img/nuxt.svg',
    color: 'rgba(34, 197, 94, 0.6)',
  },
  {
    index: 3,
    name: 'TailwindCSS',
    icon: 'img/tailwind.svg',
    color: 'rgba(20, 184, 166, 0.6)',
  },
  {
    index: 4,
    name: 'TypeScript',
    icon: 'img/typescript.svg',
    color: 'rgba(14, 165, 233, 0.6)',
  },
  {
    index: 5,
    name: 'JavaScript',
    icon: 'img/javascript.svg',
    color: 'rgba(249, 115, 22, 0.6)',
  },
  {
    index: 6,
    name: 'StoryBook',
    icon: 'img/storybook.png',
    color: 'rgba(150, 35, 65, 0.6)',
  },
]

const otherSkills = [
  {
    index: 0,
    name: 'Azure DevOps',
    icon: 'img/azure.png',
    color: 'rgba(59, 130, 246, 0.6)',
  },
  {
    index: 1,
    name: 'GitHub',
    icon: 'img/github.png',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  {
    index: 2,
    name: 'Postman',
    icon: 'img/postman.png',
    color: 'rgba(249, 115, 22, 0.6)',
  },
  {
    index: 3,
    name: 'Swagger',
    icon: 'img/swagger.png',
    color: 'rgba(132, 204, 22, 0.6)',
  },
  {
    index: 4,
    name: 'Clerk',
    icon: 'img/clerk.png',
    color: 'rgba(99, 102, 241, 0.6)',
  },
  {
    index: 5,
    name: 'Dokploy',
    icon: 'img/dokploy.png',
    color: 'rgba(59, 130, 246, 0.6)',
  },
  {
    index: 6,
    name: 'Cloudflare',
    icon: 'img/cloudflare.png',
    color: 'rgba(249, 115, 22, 0.6)',
  },
]

const buttonLabel = ['Backend', 'Frontend', t('skills.skillsButton.other')]
const skillsLists = [backendSkills, frontendSkills, otherSkills]
const currentListIndex = ref(0)
const currentSkills = ref(skillsLists[0])

const nextSkills = () => {
  currentListIndex.value = (currentListIndex.value + 1) % skillsLists.length
  currentSkills.value = skillsLists[currentListIndex.value]
}
</script>
<template>
  <div
    class="w-dvw h-dvh overflow-hidden flex flex-col items-center justify-center p-4"
  >
    <div class="flex flex-col gap-1 z-10 select-none items-center">
      <h1
        class="text-6xl font-serif font-light uppercase tracking-[0.15em] leading-tight text-niel-primary-200 niel-gradient-w animate-pulse-name text-center"
      >
        {{ t('home.options.skills') }}
      </h1>
    </div>

    <div class="flex flex-col items-center gap-6 z-10 w-full max-w-5xl mt-12">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 w-full">
        <div
          v-for="(skill, index) in currentSkills"
          :key="skill?.name"
          class="group flex flex-col items-center gap-4 p-4 rounded-sm border border-white/5 bg-[#0c111a] transition-all duration-300 ease-out hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] animate-card-in cursor-default"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <div
            class="w-16 h-16 flex items-center justify-center saturate-0 transition-all duration-300 group-hover:saturate-100"
          >
            <NuxtImg
              :src="skill?.icon"
              :alt="skill?.name"
              class="w-full h-full object-contain"
            />
          </div>
          <span
            class="text-app-text-muted text-xs font-light tracking-[0.05em] uppercase"
            >{{ skill?.name }}</span
          >
        </div>
      </div>

      <button
        @click="nextSkills"
        class="border border-white/5 rounded-sm py-3 px-10 cursor-pointer bg-[#0c111a] transition-all duration-300 hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] text-app-text-muted hover:text-niel-primary-200 uppercase tracking-[0.2em] text-lg font-light"
      >
        {{ buttonLabel[currentListIndex] }}
      </button>
    </div>

    <ReturnButton />
  </div>
</template>
