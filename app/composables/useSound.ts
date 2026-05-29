import { Howl } from "howler";

export function useSound() {

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

    let currentMusic: Howl | null = null;

    // Functions ====================================================

    function stopMusic() {
        currentMusic?.stop();
        currentMusic = null;
    }

    function playMusic() {

        // Stop previous music
        stopMusic();

        // Random track
        const randomIndex = Math.floor(
            Math.random() * music.length
        );

        currentMusic = music[randomIndex] ?? null;

        currentMusic?.play();
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
        stopMusic
    };
}