import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useSound } from '~/composables/useSound';
import { usePagesState } from '~/stores/PagesState';
import { watch } from 'vue';

gsap.registerPlugin(TextPlugin);

const { playType, stopType } = useSound();

export function useHomeGsap(t: any) {
    const topBar = ref<HTMLElement | null>(null);
    const bottomBar = ref<HTMLElement | null>(null);
    const content = ref<HTMLElement | null>(null);
    const nameEl = ref<HTMLElement | null>(null);
    const jobEl = ref<HTMLElement | null>(null);
    const nameCursorEl = ref<HTMLElement | null>(null);
    const jobCursorEl = ref<HTMLElement | null>(null);
    const navEl = ref<HTMLElement | null>(null);
    const navElFast = ref<HTMLElement | null>(null);
    const isLeaving = ref(false);

    const pagesStore = usePagesState();

    onMounted(() => {

        const fullName = 'Daniel Barquero Cabrera';
        const fullJob = t('home.job');
        const nameCharDuration = 0.03;
        const jobCharDuration = nameCharDuration + 0.2 / fullJob.length;

        gsap.set(topBar.value, { height: 0 });
        gsap.set(bottomBar.value, { height: 0 });
        gsap.set(content.value, { opacity: 0, y: 20 });

        const tl = gsap.timeline();

        tl.to(topBar.value, { height: '8vh', duration: 0.8, ease: 'power2.out' }, 0)
            .to(bottomBar.value, { height: '8vh', duration: 0.8, ease: 'power2.out' }, 0)
            .to(content.value, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0);

        let nameCursorBlink: gsap.core.Tween | null = null;
        if (nameCursorEl.value) {
            gsap.set(nameCursorEl.value, { opacity: 1 });
            nameCursorBlink = gsap.to(nameCursorEl.value, {
                opacity: 0, duration: 0.4, repeat: -1, yoyo: true, ease: 'power2.inOut'
            });
        }

        // Start typing sound for name animation
        playType();

        gsap.to(nameEl.value, {
            duration: fullName.length * nameCharDuration,
            text: { value: fullName, delimiter: '' },
            ease: 'none',
            onComplete: () => {
                if (nameCursorBlink) nameCursorBlink.kill();
                gsap.to(nameCursorEl.value, { opacity: 0, duration: 0.1, delay: 0, ease: 'power2.out' });

                let jobCursorBlink: gsap.core.Tween | null = null;
                if (jobCursorEl.value) {
                    gsap.set(jobCursorEl.value, { opacity: 1 });
                    jobCursorBlink = gsap.to(jobCursorEl.value, {
                        opacity: 0, duration: 0.1, repeat: -1, yoyo: true, ease: 'power2.inOut'
                    });
                }

                gsap.to(jobEl.value!, {
                    duration: fullJob.length * jobCharDuration,
                    delay: 0,
                    text: { value: fullJob, delimiter: '' },
                    ease: 'none',
                    onComplete: () => {
                        stopType();
                        if (jobCursorBlink) jobCursorBlink.kill();
                        gsap.to(jobCursorEl.value, { opacity: 0, duration: 0.1, delay: 0, ease: 'power2.out' });
                    }
                });
            }
        });

        if (navEl.value) {
            const buttons = navEl.value.querySelectorAll('.nav-button');
            gsap.to(buttons, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.08,
                delay: 1.0
            });
        }
        if (navElFast.value) {
            const buttons = navElFast.value.querySelectorAll('.nav-button');
            gsap.to(buttons, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
                stagger: 0.08,
                delay: 0.3
            });
        }
    });


    watch(() => t('home.job'), (newJob) => {
        if (jobEl.value) {
            gsap.to(jobEl.value, {
                duration: 0.5,
                text: { value: newJob, delimiter: '' },
                ease: 'none'
            });
        }
    });

    function startLeaveAnimation(to: string): Promise<void> {
        return new Promise((resolve) => {
            if (isLeaving.value) {
                resolve();
                return;
            }

            isLeaving.value = true;

            const tl = gsap.timeline({
                onComplete: () => {
                    resolve();
                }
            });

            tl.to([topBar.value, bottomBar.value], {
                height: 0,
                duration: 0.2,
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

            if (nameCursorEl.value) gsap.killTweensOf(nameCursorEl.value);
            if (jobCursorEl.value) gsap.killTweensOf(jobCursorEl.value);

            setTimeout(() => {
                pagesStore.setCurrentPage(to);
                navigateTo(to);
            }, 1000);
        });
    }

    return {
        topBar,
        bottomBar,
        content,
        nameEl,
        jobEl,
        nameCursorEl,
        jobCursorEl,
        navEl,
        navElFast,
        isLeaving,
        startLeaveAnimation
    };
}
