<script setup lang="ts"></script>
<template>
  <div class="w-dvw h-dvh overflow-hidden flex flex-col items-center">
    <div
      class="w-full max-w-5xl h-full overflow-y-auto scrollbar-none px-6 py-12"
    >
      <section class="flex flex-col gap-14 pb-32">
        <div class="space-y-4">
          <h1
            class="text-6xl font-serif font-light uppercase tracking-[0.15em] text-niel-primary-200"
          >
            {{ $t('projects.portfolio.title') }}
          </h1>
          <div
            class="text-app-text-muted text-lg font-light leading-relaxed max-w-3xl"
          >
            <p>{{ $t('projects.portfolio.description') }}</p>
          </div>
        </div>

        <div class="flex flex-col gap-12">
          <ProjectsPostContainer
            :title="$t('projects.portfolio.premise.title')"
            :date="$t('projects.portfolio.premise.date')"
          >
            <div
              class="space-y-6 text-app-text-muted font-light leading-relaxed text-base"
            >
              <p>{{ $t('projects.portfolio.premise.p1') }}</p>

              <div class="flex flex-wrap gap-4 py-4 opacity-90">
                <NuxtImg
                  src="/img/nuxt.svg"
                  class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md"
                />
                <NuxtImg
                  src="/img/vue.png"
                  class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md"
                />
                <NuxtImg
                  src="/img/tailwind.svg"
                  class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md"
                />
                <NuxtImg
                  src="/img/typescript.svg"
                  class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md"
                />
              </div>
              <p>{{ $t('projects.portfolio.premise.p2') }}</p>
              <p>{{ $t('projects.portfolio.premise.p3') }}</p>
            </div>
          </ProjectsPostContainer>
        </div>
      </section>
    </div>
    <ReturnButton to="/projects" />
  </div>
</template>
