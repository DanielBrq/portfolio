<script setup lang="ts">
const { t } = useI18n();

</script>
<template>
    <div class="w-dvw h-dvh overflow-hidden flex flex-col items-center justify-center px-6">
        <section class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            <ProjectsCardPreview :title="t('projects.cardPreview.title')"
                :description="t('projects.cardPreview.description')" to="/projects/legacygym" :repository-private="true"
                :t="t" website-url="https://legacygym.demo.dbarquero.dev/" />

            <ProjectsCardPreview :title="t('projects.portfolio.title')"
                :description="t('projects.portfolio.description')" to="/projects/portfolio" :repository-private="false"
                :t="t" website-url="https://dbarquero.dev" github-url="https://github.com/DanielBrq/portfolio" />
        </section>
        <ReturnButton to="/" />
    </div>
</template>
