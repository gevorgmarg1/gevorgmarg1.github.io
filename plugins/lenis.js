import Lenis from 'lenis'

export default () => {
  const lenis = new Lenis({
    duration: 1.2, // Set a significantly slower duration for that smooth, liquid feel
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false, // Don't hijack native touch scrolling on mobile
    touchMultiplier: 2
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
