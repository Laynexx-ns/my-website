import gsap from 'gsap'

export default function AnimateText() {
  const els = document.querySelectorAll('.txt')
  els.forEach((el, index) => {
    if (!el) return
    const chars = el.textContent?.split('') ?? []
    el.textContent = ''

    chars.forEach((char) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.display = 'inline-block'

      if (char === ' ') {
        span.innerHTML = '&nbsp;'
        span.style.width = '0.2em'
      } else {
        span.textContent = char
      }

      el.appendChild(span)
    })

    gsap.fromTo(
      el.children,
      {
        opacity: 0,
        y: 100,
        scale: 0.5,
        filter: 'blur(4px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        stagger: 0.05,
        delay: index,
        duration: 0.5,
        ease: 'circ.out',
      },
    )
  })
}
