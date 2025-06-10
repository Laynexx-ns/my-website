import gsap from 'gsap'

export function AnimateYLineDefault() {
  const lines = document.querySelectorAll('.y-line')
  lines?.forEach((line, index) => {
    const fromY = index % 2 === 0 ? '-100vh' : '100vh'
    gsap.fromTo(
      line,
      {
        y: fromY,
        opacity: 0,
      },
      {
        y: '0vh',
        opacity: 1,
        duration: 4,
        ease: 'power4.out',
        delay: index * 2,
      },
    )
  })
}
