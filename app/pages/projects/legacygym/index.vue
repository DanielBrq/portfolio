<script setup lang="ts">

</script>
<template>
    <div class="w-screen min-h-[80vh] overflow-y-auto scrollbar-none px-4 sm:px-[8%] md:px-[10%] lg:px-[20%] py-10">
        <section class="max-w-4xl mx-auto flex flex-col gap-12 pb-32">

            <div class="mb-6 sm:mb-10">
                <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-5 text-niel-primary-200">Legacy Gym</h1>
                <div class="text-niel-neutral-300 flex flex-col gap-3 text-sm sm:text-base md:text-lg">
                    <p>LegacyGym es una aplicación web y móvil diseñada para la gestión integral de gimnasios, con un enfoque particular en el acompañamiento y optimización del rendimiento físico de los usuarios a través de herramientas de inteligencia artificial.</p>
                    <p>El proyecto nace de la necesidad de ofrecer una experiencia más personalizada y eficiente tanto para el administrador del gimnasio como para el cliente final.</p>
                </div>
            </div>

            <div class="flex flex-col gap-10">
                <ProjectsPostContainer id="post-3" title="Implementación de IA para rutinas" date="Octubre 2023">
                    <p>En esta etapa nos enfocamos en integrar un motor de recomendaciones basado en IA. El objetivo es que cada usuario reciba un plan de entrenamiento adaptado a sus metas basándose en su progreso semanal.</p>
                    <div class="bg-niel-primary-200/10 border border-niel-primary-200/20 p-6 rounded-lg my-4 flex items-center justify-center text-niel-primary-100 min-h-[200px]">
                        [Mock: Diagrama Arquitectura IA]
                    </div>
                    <p>Resultados positivos, reduciendo el tiempo de planificación para entrenadores en un 60%.</p>
                </ProjectsPostContainer>

                <ProjectsPostContainer id="post-2" title="Desarrollo App Móvil" date="Agosto 2023">
                    <p>Iniciamos desarrollo móvil con React Native. La app permite a usuarios ver rutinas, registrar marcas y escanear QR.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                        <div class="aspect-video bg-niel-primary-200/10 border border-niel-primary-200/20 rounded-lg flex items-center justify-center text-niel-primary-100">[Mock: App Pantalla 1]</div>
                        <div class="aspect-video bg-niel-primary-200/10 border border-niel-primary-200/20 rounded-lg flex items-center justify-center text-niel-primary-100">[Mock: App Pantalla 2]</div>
                    </div>
                </ProjectsPostContainer>

                <ProjectsPostContainer id="post-1" title="Inicio: Dashboard Web" date="Junio 2023">
                    <p>Desarrollo del panel web administrativo. Dueños de gimnasios pueden gestionar membresías, ingresos y pagos recurrentes.</p>
                    <p>Utilizamos Nuxt 3 y PostgreSQL, garantizando rendimiento y escalabilidad.</p>
                </ProjectsPostContainer>
            </div>

        </section>
    </div>
    <ReturnButton to="/projects" />
</template>