<script setup lang="ts">
import ReturnButton from '~/components/returnButton.vue';

const { t } = useI18n();
useHead({ title: t('home.options.skills') })

const backendSkills = [
    { index: 0, name: '.NET Core', icon: 'img/netcore.png', color: 'rgba(99, 102, 241, 0.6)' },
    { index: 1, name: 'NestJS', icon: 'img/nestjs.svg', color: 'rgba(244, 63, 94, 0.6)' },
    { index: 2, name: 'Node.js / Express.js', icon: 'img/nodejs.svg', color: 'rgba(34, 197, 94, 0.6)' },
    { index: 3, name: 'PostgreSQL', icon: 'img/postgresql.svg', color: 'rgba(59, 130, 246, 0.6)' },
    { index: 4, name: 'MySQL', icon: 'img/mysql.svg', color: 'rgba(249, 115, 22, 0.6)' },

];

const frontendSkills = [
    { index: 0, name: 'Vue', icon: 'img/vue.png', color: 'rgba(16, 185, 129, 0.6)' },
    { index: 1, name: 'React', icon: 'img/react.png', color: 'rgba(59, 130, 246, 0.6)' },
    { index: 2, name: 'Nuxt', icon: 'img/nuxt.svg', color: 'rgba(34, 197, 94, 0.6)' },
    { index: 3, name: 'TailwindCSS', icon: 'img/tailwind.svg', color: 'rgba(20, 184, 166, 0.6)' },
    { index: 4, name: 'TypeScript', icon: 'img/typescript.svg', color: 'rgba(14, 165, 233, 0.6)' },
    { index: 5, name: 'JavaScript', icon: 'img/javascript.svg', color: 'rgba(249, 115, 22, 0.6)' },
    { index: 6, name: 'StoryBook', icon: 'img/storybook.png', color: 'rgba(150, 35, 65, 0.6)' },
]

const otherSkills = [
    { index: 0, name: 'Azure DevOps', icon: 'img/azure.png', color: 'rgba(59, 130, 246, 0.6)' },
    { index: 1, name: 'GitHub', icon: 'img/github.png', color: 'rgba(255, 255, 255, 0.5)' },
    { index: 2, name: 'Postman', icon: 'img/postman.png', color: 'rgba(249, 115, 22, 0.6)' },
    { index: 3, name: 'Swagger', icon: 'img/swagger.png', color: 'rgba(132, 204, 22, 0.6)' },
    { index: 4, name: 'Clerk', icon: 'img/clerk.png', color: 'rgba(99, 102, 241, 0.6)' },
    { index: 5, name: 'Dokploy', icon: 'img/dokploy.png', color: 'rgba(59, 130, 246, 0.6)' },
    { index: 6, name: 'Cloudflare', icon: 'img/cloudflare.png', color: 'rgba(249, 115, 22, 0.6)' },
]

const buttonLabel = ['Backend', 'Frontend', t('skills.skillsButton.other')]
const skillsLists = [backendSkills, frontendSkills, otherSkills];
const currentListIndex = ref(0);
const currentSkills = ref(skillsLists[0]);

const nextSkills = () => {
    currentListIndex.value = (currentListIndex.value + 1) % skillsLists.length;
    currentSkills.value = skillsLists[currentListIndex.value];
}
</script>
<template>
    <div ref="content" class="skills-page">
        <div id="title"
            class="flex flex-col gap-1 h-full min-h-[25vh] justify-center items-center z-10 select-none pt-[2vh]">
            <div class="relative inline-flex items-center justify-center">
                <h1 ref="nameEl" :aria-label="t('home.options.skills')"
                    class="niel-gradient-w text-4xl md:text-6xl text-center font-light uppercase tracking-[0.15em] leading-20 font-serif animate-pulse-name">
                    {{ t('home.options.skills') }}
                </h1>
            </div>
        </div>

        <div class="flex flex-col items-center gap-6 px-[5%] md:px-[10%] z-10 w-full">
            <div class="w-full max-w-6xl flex flex-col items-center">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
                    <div v-for="(skill, index) in currentSkills" :key="skill?.name"
                        class="skill-card saturate-0 hover:saturate-150" :style="{
                            animationDelay: `${index * 0.05}s`,
                            '--hover-color': skill?.color,
                            '--hover-border': skill?.color?.replace(/0\.\d/, '0.8')
                        }">
                        <div class="flex flex-col items-center gap-1">
                            <div class="mb-4 sm:mb-6">
                                <NuxtImg :src="skill?.icon" :alt="skill?.name" class="w-[70px] max-h-[70px] max-w-[70px] sm:w-[100px] sm:max-h-[100px] sm:max-w-[100px]" />
                            </div>
                            <span class="text-app-text-muted text-center text-xs sm:text-sm font-light">{{
                                skill?.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full items-end">
                <button v-on:click="nextSkills"
                    class="border border-white/5 rounded-sm py-2 px-8 cursor-pointer bg-[#0c111a] transition-all duration-300 hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] mt-6">
                    <p class="text-xl sm:text-2xl text-app-text-muted font-light hover:text-niel-primary-200">
                        {{ buttonLabel[currentListIndex] }}
                    </p>
                </button>
            </div>
        </div>

        <ReturnButton />
    </div>
</template>

<style scoped>
.skills-page {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    padding-bottom: 4rem;
}

.skill-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 1.25rem;
    color: var(--niel-primary-100, #f5f5f5);
    background: rgba(12, 17, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    cursor: default;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: cardIn 0.5s ease-out backwards;
}

.skill-card:hover {
    background: rgba(12, 17, 26, 0.95);
    border-color: #c5a880;
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(197, 168, 128, 0.15);
}

.skill-card:hover .skill-icon-wrapper img {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.1);
}

.skill-text {
    display: flex;
    align-items: center;
}

@keyframes cardIn {
    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
