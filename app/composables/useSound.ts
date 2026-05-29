// composables/useSound.ts
export function useSound() {
    const sounds = {
        buttonHover: new Audio('/sounds/button-hover.wav'),
        typeSound: new Audio('/sounds/type-sound.mp3'),
    };

    sounds.buttonHover.volume = 0.6;
    sounds.typeSound.volume = 0.6;

    sounds.typeSound.loop = true;

    function playHover() {
        sounds.buttonHover.currentTime = 0;
        sounds.buttonHover.play().catch(() => { });
    }

    function playType() {
        sounds.typeSound.currentTime = 0;
        sounds.typeSound.play().catch(() => {});
    }

    function stopType() {
        sounds.typeSound.pause();
        sounds.typeSound.currentTime = 0;
    }

    return { playHover, playType, stopType };
}