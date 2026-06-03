<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';

const { t } = useI18n()

const copied = ref(false)
const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2000)
}
</script>
<template>

    <div ref="content" class="contact-page">

        <div id="title" class="flex flex-col gap-1 h-full min-h-[50vh] justify-center items-center z-10 select-none">
            <div class="relative inline-flex items-center justify-center">
                <h1 ref="nameEl" :aria-label="t('contact.title')"
                    class="niel-gradient-w text-7xl text-center font-extralight uppercase tracking-[0.4em] leading-20 name animate-pulse-name">
                    {{ t('contact.title') }}
                </h1>
            </div>
            <div class="relative inline-flex flex-col items-center justify-center group">
                <h3 ref="jobEl" :aria-label="t('contact.subtitle')"
                    class="text-niel-primary-100 mt-1 text-medium text-center font-light uppercase tracking-[0.5em]">
                    {{ t('contact.subtitle') }}
                </h3>
            </div>
        </div>

        <nav ref="navEl" class="flex flex-col items-center gap-3 px-[10%] md:px-[20%] mb-[8vh] z-10">
            <div class="contact-card hover:border-niel-primary-200/50!"
                :aria-label="t('contact.options.email')">
                <div class="contact-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>
                <div class="contact-text">
                    <span class="contact-label">{{ t('contact.labels.email') }}</span>
                    <div class="flex flex-row justify-between items-center">
                        <span class="contact-value lowercase!">daniel.barquero.dev@gmail.com</span>
                        <button class="copy-btn cursor-pointer"
                            @click="copyToClipboard('daniel.barquero.dev@gmail.com')">
                            <div class="w-[28px] h-[28px] duration-300 transition-all">
                                <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <a href="https://www.linkedin.com/in/danielbrq/" target="_blank" rel="noopener noreferrer"
                class="contact-card hover:border-niel-primary-200/50!" :aria-label="t('contact.options.linkedin')">
                <div class="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </div>
                <div class="contact-text">
                    <span class="contact-label">{{ t('contact.labels.linkedin') }}</span>
                    <span class="contact-value lowercase!">/in/danielbrq</span>
                </div>
                <div class="contact-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </a>

            <a href="https://github.com/DanielBrq/DanielBrq" target="_blank" rel="noopener noreferrer"
                class="contact-card hover:border-niel-primary-200/50!" :aria-label="t('contact.options.github')">
                <div class="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z" />
                    </svg>
                </div>
                <div class="contact-text">
                    <span class="contact-label">{{ t('contact.labels.github') }}</span>
                    <span class="contact-value lowercase!">/DanielBrq</span>
                </div>

                <div class="contact-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </a>
        </nav>

        <ReturnButton />

    </div>

</template>

<style scoped>
.contact-page {
    position: relative;
    width: 100%;
    min-height: 100vh;
}

.contact-card {
    max-height: 5rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    width: 100%;
    max-width: 36rem;
    padding: 1.1rem 1.5rem;
    color: var(--niel-primary-100, #f5f5f5);
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.5rem;
    text-decoration: none;
    cursor: pointer;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: cardIn 0.6s ease-out backwards;
}

.contact-card:nth-child(1) {
    animation-delay: 0.15s;
}

.contact-card:nth-child(2) {
    animation-delay: 0.25s;
}

.contact-card:nth-child(3) {
    animation-delay: 0.35s;
}

.contact-card:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.contact-card:focus-visible {
    outline: 2px solid var(--niel-primary-100, #f5f5f5);
    outline-offset: 3px;
}

.contact-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    opacity: 0.65;
    transition: all 0.3s ease;
}

.contact-icon-wrapper svg {
    width: 1.4rem;
    height: 1.4rem;
}

.contact-card:hover .contact-icon-wrapper {
    opacity: 1;
    transform: scale(1.08);
}

.contact-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 1;
    min-width: 0;
}

.contact-label {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    opacity: 0.5;
    font-weight: 300;
    line-height: 1;
}

.contact-value {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 300;
    margin-top: 0.4rem;
    line-height: 1.2;
    word-break: break-all;
}

.contact-arrow {
    color: currentColor;
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.contact-arrow svg {
    width: 1.2rem;
    height: 1.2rem;
}

.contact-card:hover .contact-arrow {
    opacity: 0.7;
    transform: translateX(0);
}

@keyframes cardIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 640px) {
    .contact-card {
        padding: 0.9rem 1.1rem;
        gap: 0.9rem;
    }

    .contact-icon-wrapper {
        width: 2.1rem;
        height: 2.1rem;
    }

    .contact-icon-wrapper svg {
        width: 1.15rem;
        height: 1.15rem;
    }

    .contact-value {
        font-size: 0.72rem;
    }
}
</style>
