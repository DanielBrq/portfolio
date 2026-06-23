<script setup lang="ts">
const { t } = useI18n();

</script>
<template>
    <div class="w-screen min-h-[90vh] scrollbar-none overscroll-y-none px-4 sm:px-[10%] md:px-[20%] py-10 pb-24">
        <section class="grid grid-cols-1 md:grid-cols-2 gap-5 scroll-auto overscroll-y-auto">

            <ProjectsCardPreview :title="t('projects.cardPreview.title')"
                :description="t('projects.cardPreview.description')" to="/projects/legacygym" :repository-private="true"
                :t="t" website-url="https://legacygym.demo.dbarquero.dev/" />

            <ProjectsCardPreview :title="t('projects.portfolio.title')"
                :description="t('projects.portfolio.description')" to="/projects/portfolio" :repository-private="false"
                :t="t" website-url="https://dbarquero.dev" github-url="https://github.com/DanielBrq/portfolio" />

        </section>
    </div>
    <ReturnButton />
</template>
