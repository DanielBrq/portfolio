<script lang="ts" setup>
import { useHomeGsap } from '~/composables/home/gsap';
import OptionButton from '~/components/optionButton.vue';

const { t } = useI18n();
const {
    startLeaveAnimation,
    navElFast
} = useHomeGsap(t);
defineExpose({ startLeaveAnimation });
</script>
<template>

    <nav ref="navElFast" class="w-screen h-screen flex flex-col gap-2.5 justify-center items-center">

        <OptionButton label="uno" @click="startLeaveAnimation('/')"
            class="hover:scale-110! transition-all! duration-300!" />

        <OptionButton label="dos" @click="startLeaveAnimation('/')"
            class="hover:scale-110! transition-all! duration-300!" />

    </nav>

</template>
