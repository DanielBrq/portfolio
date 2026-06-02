<script setup lang="ts">
import ReturnButton from '~/components/returnButton.vue';

const { t } = useI18n();

useHead({
    title: t('home.options.skills')
})

const skills = [
    { name: 'Vue', icon: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vue-2.png', color: 'rgba(16, 185, 129, 0.5)' }, // emerald
    { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/React_Logo.svg', color: 'rgba(59, 130, 246, 0.5)' }, // blue
    { name: 'Nuxt', icon: 'https://nuxt.com/assets/design-kit/icon-green.svg', color: 'rgba(34, 197, 94, 0.5)' }, // green
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', color: 'rgba(20, 184, 166, 0.5)' }, // teal
    { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', color: 'rgba(14, 165, 233, 0.5)' }, // sky
    { name: 'NestJS', icon: 'https://nestjs.com/logo-small-gradient.0ed287ce.svg', color: 'rgba(244, 63, 94, 0.5)' }, // rose
    { name: '.NET Core', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Microsoft_.NET_logo.svg', color: 'rgba(99, 102, 241, 0.5)' }, // indigo
    { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', color: 'rgba(34, 197, 94, 0.5)' }, // green
    { name: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', color: 'rgba(59, 130, 246, 0.5)' }, // blue
    { name: 'MySQL', icon: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg', color: 'rgba(249, 115, 22, 0.5)' }, // orange
    { name: 'Azure DevOps', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Azure_DevOps_logo.svg', color: 'rgba(59, 130, 246, 0.5)' }, // blue
    { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', color: 'rgba(255, 255, 255, 0.5)' }, // white
    { name: 'Postman', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png', color: 'rgba(249, 115, 22, 0.5)' }, // orange
    { name: 'Swagger', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png', color: 'rgba(132, 204, 22, 0.5)' } // lime
];

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
            <div class="w-full max-w-6xl flex flex-col items-center">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
                    <div v-for="(skill, index) in skills" :key="skill.name" class="skill-card" :style="{
                        animationDelay: `${index * 0.05}s`,
                        '--hover-color': skill.color,
                        '--hover-border': skill.color.replace('0.5', '0.8')
                    }">
                        <div class="flex flex-col items-center gap-1">
                            <div class="object-contain mb-8">
                                <NuxtImg :src="skill.icon" :alt="skill.name" width="100" height="100" />
                            </div>
                            <span class="text-niel-primary-100 text-start text-lg font-light fixed bottom-0 p-2">{{ skill.name }}</span>
                        </div>
                    </div>
                </div>
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
