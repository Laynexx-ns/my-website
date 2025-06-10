import { onMounted } from 'vue'
import gsap from 'gsap'

export function AnimateXDashedLine() {
  const lines = document.querySelectorAll('.x-dashed-line')

  lines.forEach((line, index) => {
    const fromX = index % 2 === 0 ? '0vw' : '-100vw'

    gsap.fromTo(
      line,
      { x: fromX },
      {
        x: index % 2 == 0 ? '-100vw' : '0vw',
        duration: 20,
        ease: 'circ.inOut',
        repeat: -1,
        delay: index * 0.5,
      },
    )
  })
}
