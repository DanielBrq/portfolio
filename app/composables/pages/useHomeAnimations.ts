import { ref, onMounted, onUnmounted, nextTick, onActivated } from 'vue';
import gsap from 'gsap';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useGsap } from '../core/useGsap';
import { useSound } from '../core/useSound';

export const useHomeAnimations = () => {
    const { t } = useI18n();
    const router = useRouter();

    const content = ref<HTMLElement | null>(null);
    const nameEl = ref<HTMLElement | null>(null);
    const jobEl = ref<HTMLElement | null>(null);
    const nameCursorEl = ref<HTMLElement | null>(null);
    const jobCursorEl = ref<HTMLElement | null>(null);
    const navEl = ref<HTMLElement | null>(null);
    const settingsWrapper = ref<HTMLElement | null>(null);

    const { typewriter, blinkCursor, killCursor, staggerFadeIn, fadeSlideIn, slideUpOut, killAll } = useGsap();
    const { playType, stopType } = useSound();

    function runEntranceAnimations() {
        if (content.value) {
            fadeSlideIn(content.value);
        }

        if (nameCursorEl.value) {
            blinkCursor(nameCursorEl.value);
        }

        playType();

        if (nameEl.value) {
            typewriter(nameEl.value, 'Daniel Barquero C.', {
                onComplete: () => {
                    if (nameCursorEl.value) {
                        killCursor(nameCursorEl.value);
                    }
                    if (jobCursorEl.value) {
                        blinkCursor(jobCursorEl.value);
                    }
                    if (jobEl.value) {
                        typewriter(jobEl.value, t('home.job'), {
                            onComplete: () => {
                                stopType();
                                if (jobCursorEl.value) {
                                    killCursor(jobCursorEl.value);
                                }
                            }
                        });
                    } else {
                        stopType();
                    }
                }
            });
        } else {
            stopType();
        }

        if (navEl.value) {
            staggerFadeIn(navEl.value, '.nav-button', { delay: 0.8 });
        }
    }

    function onPageShow(event: PageTransitionEvent) {
        if (event.persisted) {
            killAll();
            if (settingsWrapper.value) {
                gsap.set(settingsWrapper.value, { clearProps: 'all' });
            }
            runEntranceAnimations();
        }
    }

    onActivated(() => {
        killAll();
        runEntranceAnimations();
    });

    onMounted(async () => {
        await nextTick();
        killAll();
        runEntranceAnimations();
        window.addEventListener('pageshow', onPageShow);
    });

    onUnmounted(() => {
        window.removeEventListener('pageshow', onPageShow);
    });

    function startLeaveAnimation(to: string) {
        const tl = gsap.timeline({
            onComplete: () => {
                router.push(to);
            }
        });
        if (content.value) {
            tl.add(slideUpOut(content.value), 0);
        }
        if (settingsWrapper.value) {
            tl.add(slideUpOut(settingsWrapper.value), 0);
        }
    }

    return {
        content,
        nameEl,
        jobEl,
        nameCursorEl,
        jobCursorEl,
        navEl,
        settingsWrapper,
        startLeaveAnimation
    };
};
