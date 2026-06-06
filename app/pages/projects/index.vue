<script setup lang="ts">
const { t } = useI18n();

</script>
<template>
    <div class="w-screen h-[90vh] scrollbar-none overscroll-y-none px-[20%] py-15">
        <section class="grid grid-cols-2 gap-7 scroll-auto overscroll-y-auto">

            <div class="flex items-center">
                <ProjectsCardPreview :title="t('projects.cardPreview.title')" :description="t('projects.cardPreview.description')"
                    to="/projects/legacygym" :repository-private="true" :t="t" />
            </div>
            <!-- 
            <div class="flex items-center">
                <ProjectsCardPreview title="LegayGym Landing Page"
                    description="Sitio web informativo para gimnasio local." website-url="https://legacygymcr.com/"
                    :repository-private="true" />
            </div>

            <div class="flex items-center">
                <ProjectsCardPreview title="Ovisc" description="App gamificación para Iglesia" to="/experience"
                    :repository-private="false" github-url="https://github.com/DanielBrq/ovisc" website-url="s" />
            </div> -->

        </section>
    </div>
    <ReturnButton />
</template>
