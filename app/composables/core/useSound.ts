import { Howl } from "howler";
import { ref } from "vue";

// Sounds =======================================================
const buttonHover = new Howl({
    src: ["/sounds/button-hover.wav"],
    volume: 0.6
});

const typeSound = new Howl({
    src: ["/sounds/type-sound.mp3"],
    volume: 0.6,
    loop: true
});

const clickSound = new Howl({
    src: ["/sounds/ui-click.mp3"],
    volume: 0.3,
    rate: 0.6
});

// Music ========================================================
const music = [
    new Howl({
        src: ["/sounds/atmospheric-loop.wav"],
        volume: 0.3,
        loop: true
    }),

    new Howl({
        src: ["/sounds/atmospheric-piano.wav"],
        volume: 0.3,
        loop: true
    })
];

const isMusicPlaying = ref(false);

export function useSound() {

    // Functions ====================================================

    function stopMusic() {
        music.forEach(m => m.stop());
        isMusicPlaying.value = false;
    }

    function playMusic() {
        // Stop previous music
        stopMusic();

        // Random track
        const randomIndex = Math.floor(
            Math.random() * music.length
        );

        music[randomIndex]?.play();
        isMusicPlaying.value = true;
    }

    function playHover() {
        buttonHover.stop(); // restart instantly
        buttonHover.play();
    }

    function playType(duration = 2500) {

        typeSound.stop();
        typeSound.play();

        setTimeout(() => {
            stopType();
        }, duration);
    }

    function stopType() {
        typeSound.stop();
    }

    function playClick() {
        clickSound.stop();
        clickSound.play();
    }

    return {
        playHover,
        playType,
        stopType,
        playClick,
        playMusic,
        stopMusic,
        isMusicPlaying
    };
}