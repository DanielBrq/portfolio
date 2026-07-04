import { Howl } from 'howler'
import { ref } from 'vue'

// Sounds =======================================================
const buttonHover = new Howl({
  src: ['/sounds/button-hover.wav'],
  volume: 0.6,
})

const typeSound = new Howl({
  src: ['/sounds/type-sound.mp3'],
  volume: 0.6,
  loop: true,
})

const clickSound = new Howl({
  src: ['/sounds/ui-click.mp3'],
  volume: 0.3,
  rate: 0.6,
})

// Music ========================================================
const music = [
  new Howl({
    src: ['/music/bg-music-1.mp3'],
    volume: 0.3,
    loop: true,
  }),
  new Howl({
    src: ['/music/bg-music-2.mp3'],
    volume: 0.3,
    loop: true,
  }),
  new Howl({
    src: ['/music/bg-music-3.mp3'],
    volume: 0.3,
    loop: true,
  }),
  new Howl({
    src: ['/music/bg-music-4.mp3'],
    volume: 0.3,
    loop: true,
  })
]

const MUSIC_KEY = 'portfolio-music'

const isMusicPlaying = ref(false)

if (import.meta.client) {
  isMusicPlaying.value = localStorage.getItem(MUSIC_KEY) !== '0'
}

export function useSound() {
  // Functions ====================================================

  function stopMusic() {
    music.forEach((m) => m.stop())
    isMusicPlaying.value = false
    if (import.meta.client) localStorage.setItem(MUSIC_KEY, '0')
  }

  function playMusic() {
    stopMusic()

    const randomIndex = Math.floor(Math.random() * music.length)

    music[randomIndex]?.play()
    isMusicPlaying.value = true
    if (import.meta.client) localStorage.setItem(MUSIC_KEY, '1')
  }

  function playHover() {
    buttonHover.stop() // restart instantly
    buttonHover.play()
  }

  function playType(duration = 2500) {
    typeSound.stop()
    typeSound.play()

    setTimeout(() => {
      stopType()
    }, duration)
  }

  function stopType() {
    typeSound.stop()
  }

  function playClick() {
    clickSound.stop()
    clickSound.play()
  }

  return {
    playHover,
    playType,
    stopType,
    playClick,
    playMusic,
    stopMusic,
    isMusicPlaying,
  }
}
