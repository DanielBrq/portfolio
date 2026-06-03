<script setup lang="ts">
import ReturnButton from '~/components/returnButton.vue';

const { t } = useI18n();
useHead({ title: t('home.options.skills') })

const backendSkills = [
    { index: 2, name: '.NET Core', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/960px-.NET_Core_Logo.svg.png', color: 'rgba(99, 102, 241, 0.6)' },
    { index: 0, name: 'NestJS', icon: 'https://nestjs.com/logo-small-gradient.0ed287ce.svg', color: 'rgba(244, 63, 94, 0.6)' },
    { index: 1, name: 'Node.js / Express.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', color: 'rgba(34, 197, 94, 0.6)' },
    { index: 5, name: 'Hono', icon: 'https://avatars.githubusercontent.com/u/98495527?v=4', color: 'rgba(244, 63, 94, 0.6)' },
    { index: 3, name: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', color: 'rgba(59, 130, 246, 0.6)' },
    { index: 4, name: 'MySQL', icon: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg', color: 'rgba(249, 115, 22, 0.6)' },

];

const frontendSkills = [
    { index: 0, name: 'Vue', icon: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vue-2.png', color: 'rgba(16, 185, 129, 0.6)' },
    { index: 1, name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png', color: 'rgba(59, 130, 246, 0.6)' },
    { index: 2, name: 'Nuxt', icon: 'https://nuxt.com/assets/design-kit/icon-green.svg', color: 'rgba(34, 197, 94, 0.6)' },
    { index: 3, name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', color: 'rgba(20, 184, 166, 0.6)' },
    { index: 4, name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', color: 'rgba(14, 165, 233, 0.6)' },
    { index: 5, name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', color: 'rgba(249, 115, 22, 0.6)' },
]

const otherSkills = [
    { index: 0, name: 'Azure DevOps', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-azure-devops-icon-svg-download-png-3029870.png?f=webp&w=128', color: 'rgba(59, 130, 246, 0.6)' },
    { index: 1, name: 'GitHub', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png', color: 'rgba(255, 255, 255, 0.5)' },
    { index: 2, name: 'Postman', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png', color: 'rgba(249, 115, 22, 0.6)' },
    { index: 3, name: 'Swagger', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png', color: 'rgba(132, 204, 22, 0.6)' },
    { index: 4, name: 'Clerk', icon: 'https://clerk.com/v2/downloads/symbol-primary.png', color: 'rgba(99, 102, 241, 0.6)' },
    { index: 5, name: 'Dokploy', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/dokploy-dark.png', color: 'rgba(59, 130, 246, 0.6)' },
    { index: 6, name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/cloudflare.png', color: 'rgba(249, 115, 22, 0.6)' },
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
                    class="niel-gradient-w text-4xl md:text-6xl text-center font-extralight uppercase tracking-[0.4em] leading-20 name animate-pulse-name">
                    {{ t('home.options.skills') }}
                </h1>
            </div>
        </div>

        <div class="flex flex-col items-center gap-6 px-[5%] md:px-[10%] z-10 w-full">
            <div class="w-full max-w-6xl flex flex-col items-center h-[50vh]">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
                    <div v-for="(skill, index) in currentSkills" :key="skill?.name"
                        class="skill-card saturate-0 hover:saturate-150" :style="{
                            animationDelay: `${index * 0.05}s`,
                            '--hover-color': skill?.color,
                            '--hover-border': skill?.color?.replace(/0\.\d/, '0.8')
                        }">
                        <div class="flex flex-col items-center gap-1">
                            <div class="object-contain mb-8">
                                <NuxtImg :src="skill?.icon" :alt="skill?.name" width="100" height="100" />
                            </div>
                            <span class="text-niel-primary-200 text-start text-lg font-light fixed bottom-0 p-2">{{
                                skill?.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full items-end">
                <button v-on:click="nextSkills"
                    class="border border-niel-primary-100/70 rounded-lg py-1.5 px-6 cursor-pointer hover:bg-niel-primary-200/20 mt-5">
                    <p class="text-2xl text-niel-neutral-100 hover:text-niel-primary-100">
                        {{ buttonLabel[currentListIndex] }}
                    </p>
                </button>
            </div>
        </div>


        <div class="flex justify-start fixed bottom-0 right-0 w-full mb-[10vh] mr-[10vh]">
            <ReturnButton />
        </div>
    </div>
</template>

<style scoped>
.skills-page {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
}

.skill-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.75rem 1rem;
    color: var(--niel-primary-100, #f5f5f5);
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid #fed7aa50;
    border-radius: 0.5rem;
    cursor: default;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: cardIn 0.5s ease-out backwards;
}

.skill-card:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: var(--hover-border);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px var(--hover-color);
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
