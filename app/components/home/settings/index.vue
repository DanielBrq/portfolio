<script lang="ts" setup>
import { ref } from 'vue';
import { useSound } from '~/composables/useSound';

const { t } = useI18n();
const { playHover } = useSound();
function onHover() {
    playHover();
}

const showSettingsOnHover = ref(false);
const showConfigButton = ref(true);

function onMouseEnter() {
    onHover()
    showConfigButton.value = false;
    showSettingsOnHover.value = true;
}
function onMouseLeave() {
    showConfigButton.value = true;
    showSettingsOnHover.value = false;
}
</script>
<template>
    <div class="fixed bottom-22 right-8 backdrop-blur-md border-none text-white transition duration-200 z-50">

        <div v-if="showConfigButton" @mouseenter="onMouseEnter">
            <button ref="navEl"
                class="group items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400
            text-base text-center font-light uppercase tracking-widest transition-colors duration-200 cursor-pointer select-none">
                <span>{{ t('home.settings.settingsButton') }}</span>
            </button>
        </div>
        <div class="flex flex-col items-end gap-1" v-else="showSettingsOnHover" @mouseleave="onMouseLeave">
            <HomeSettingsLanguage />
            <HomeSettingsMusic />
        </div>
    </div>
</template>
