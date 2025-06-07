`
<script setup lang="ts">
import './pages.css'
import { onMounted } from 'vue'
import { ArrowDown } from 'lucide-vue-next'
import gsap from 'gsap'
import Welcome from '@/pages/Welcome.vue'
import Projects from '@/pages/Projects.vue'
import ProjectsIntrodusing from '@/pages/ProjectsIntrodusing.vue'

onMounted(() => {
  gsap.fromTo(
    '.tabs',
    {
      y: '-30vh',
      scale: 0.01,
    },
    {
      y: '0vh',
      duration: 1,
      scale: 1,
      ease: 'power4.out',
    },
  )
})

const scrollNext = () => {
  document.getElementById('proj')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <Welcome id="welcome" class="relative" />
      <ProjectsIntrodusing />
      <Projects id="proj" />
    </div>

    <div
      @click="scrollNext"
      class="fixed hover:cursor-pointer bottom-8 right-8 flex gap-2 items-center text-(--font-color)"
    >
      <span> проекты </span>
      <ArrowDown />
    </div>
  </div>
</template>

<style scoped>
#smooth-wrapper {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

#smooth-content > * {
  scroll-snap-align: start;
  height: 100vh;
}
</style>
`
