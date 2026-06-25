import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

export interface TypewriterOptions {
  charDuration?: number
  onComplete?: () => void
}

export interface StaggerOptions {
  duration?: number
  stagger?: number
  delay?: number
}

export function useGsap() {
  const tweens: gsap.core.Tween[] = []

  function typewriter(el: HTMLElement, text: string, opts: TypewriterOptions = {}) {
    const { charDuration = 0.03, onComplete } = opts
    const t = gsap.to(el, {
      duration: text.length * charDuration,
      text: { value: text, delimiter: '' },
      ease: 'none',
      onComplete,
    })
    tweens.push(t)
    return t
  }

  function blinkCursor(el: HTMLElement, speed = 0.4) {
    gsap.set(el, { opacity: 1 })
    const t = gsap.to(el, {
      opacity: 0,
      duration: speed,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    })
    tweens.push(t)
    return t
  }

  function killCursor(el: HTMLElement, fadeOut = 0.1) {
    gsap.killTweensOf(el)
    const t = gsap.to(el, { opacity: 0, duration: fadeOut, ease: 'power2.out' })
    tweens.push(t)
    return t
  }

  function staggerFadeIn(container: HTMLElement, selector: string, opts: StaggerOptions = {}) {
    const { duration = 0.5, stagger = 0.08, delay = 0 } = opts
    const children = container.querySelectorAll(selector)
    if (!children.length) return null
    const t = gsap.from(children, {
      opacity: 0, y: 14,
      duration, ease: 'power2.out', stagger, delay,
    })
    tweens.push(t)
    return t
  }

  function fadeSlideIn(el: HTMLElement, opts: { duration?: number; fromY?: number; ease?: string } = {}) {
    const { duration = 0.7, fromY = 20, ease = 'power2.out' } = opts
    const t = gsap.from(el, { opacity: 0, y: fromY, duration, ease })
    tweens.push(t)
    return t
  }

  function slideUpOut(el: HTMLElement, opts: { y?: number; duration?: number; ease?: string } = {}) {
    const { y = -20, duration = 0.3, ease = 'power2.in' } = opts
    const t = gsap.to(el, { opacity: 0, y, duration, ease })
    tweens.push(t)
    return t
  }

  function killAll() {
    tweens.forEach(t => t.kill())
    tweens.length = 0
  }

  return {
    typewriter, blinkCursor, killCursor,
    staggerFadeIn, fadeSlideIn, slideUpOut, killAll,
  }
}
