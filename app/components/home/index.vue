<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const topBar = ref<HTMLElement | null>(null);
const bottomBar = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);
const isLeaving = ref(false);

onMounted(() => {

    gsap.set(topBar.value, { height: 0 });
    gsap.set(bottomBar.value, { height: 0 });
    gsap.set(content.value, { opacity: 0, y: 30 });
    
    const tl = gsap.timeline();
    
    tl.to(topBar.value, {
        height: '8vh',
        duration: 1,
        ease: "power2.out"
    })
    .to(bottomBar.value, {
        height: '8vh',
        duration: 1,
        ease: "power2.out"
    }, "<")
    .to(content.value, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.2)"
    }, "-=0.6");
});

function startLeaveAnimation(to: string): Promise<void> {
    return new Promise((resolve) => {
        if (isLeaving.value) {
            resolve();
            return;
        }
        
        isLeaving.value = true;
        
        // Timeline de salida (reversa)
        const tl = gsap.timeline({
            onComplete: () => {
                resolve();
            }
        });
        
        tl.to([topBar.value, bottomBar.value], {
            height: 0,
            duration: 0.6,
            ease: "power2.in",
            stagger: {
                amount: 0.2,
                from: "edges"
            }
        }, 0)
        .to(content.value, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in"
        }, "-=0.4");

        setTimeout(() => {
            navigateTo(to);
        }, 1000);

    });
};

defineExpose({ startLeaveAnimation });
</script>

<template>
    <section class="scrollbar-none overscroll-y-none relative">

        <div 
            ref="topBar"
            class="bg-black fixed top-0 left-0 w-full z-20"
            style="height: 0;"
        />
        
        <div ref="content">
            <div class="niel-gradient"></div>
            
            <div id="title" class="flex flex-col gap-1 h-full min-h-[70vh] justify-center items-center z-10 select-none">
                <h1 class="niel-gradient-w text-6xl text-center font-extralight uppercase tracking-[0.5em] leading-20">
                    Daniel Barquero Cabrera
                </h1>
                <h3 class="text-niel-primary-100 text-xl text-center font-light uppercase tracking-[1em] hover:saturate-150">
                    Full Stack Developer
                </h3>
            </div>
            
            <div>
                <nav class="flex flex-row justify-around px-[15%] mb-[10vh]">
                    <HomeButton label="About me" @click="startLeaveAnimation('/about')" />
                    <HomeButton label="skills" @click="startLeaveAnimation('/skills')" />
                    <HomeButton label="Projects" @click="startLeaveAnimation('/projects')" />
                    <HomeButton label="Contact" @click="startLeaveAnimation('/contact')" />
                </nav>
            </div>
        </div>
        
        <div 
            ref="bottomBar"
            class="bg-black fixed bottom-0 left-0 w-full z-20"
            style="height: 0;"
        />
    </section>
</template>