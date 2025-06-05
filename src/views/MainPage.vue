<script setup lang="ts">
import Tabs from '@/components/tabs.vue'
import Container from '@/components/Container.vue'
import './pages.css'
import { onMounted, ref } from 'vue'
import { ArrowDown } from 'lucide-vue-next'
import gsap from 'gsap'

const lxText = ref<string>('')
const indicator = ref<string>('_')

onMounted(() => {
  let show = true
  setInterval(() => {
    indicator.value = show ? '_' : ''
    show = !show
  }, 500)
})

onMounted(() => {
  let fullName = 'Laynexx'
  let i = 0

  const type = () => {
    if (i <= fullName.length) {
      lxText.value = fullName.slice(0, i)
      i++
      setTimeout(type, 200 + Math.random() * 1000)
    } else {
      console.log('invoed')
      if (fullName === 'Laynexx') {
        fullName = 'bezdarr'
      } else {
        fullName = 'Laynexx'
      }
      lxText.value = ''
      i = 0
      setTimeout(type, 0)
    }
  }

  type()
})
onMounted(() => {
  const lines = document.querySelectorAll('.x-dashed-line')

  lines.forEach((line, index) => {
    const fromX = index % 2 === 0 ? '-100vw' : '100vw'

    gsap.fromTo(
      line,
      { x: fromX, opacity: 0 },
      {
        x: '0vw',
        opacity: 1,
        duration: 3,
        ease: 'power4.out',
        delay: index,
      },
    )
  })
})

onMounted(() => {
  const lines = document.querySelectorAll('.y-dashed-line')
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
        duration: 3,
        ease: 'power4.out',
        delay: index,
      },
    )
  })
})

onMounted(() => {
  const txts = document.querySelectorAll('.txt')
  txts.forEach((item, index) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 4,
        ease: 'power2.in',
        delay: index * 4,
      },
    )
  })
})

onMounted(() => {
  const tabs = document.querySelector('tabs')
  gsap.fromTo(
    tabs,
    {
      y: '-30vh',
      filter: 'blur(px)',
    },
    {
      y: '0vh',
      filter: 'none',
      duration: 2,
      ease: 'power4.out',
    },
  )
})

//TODO: сделать для текста блюр при наведении
onMounted(() => {
  const tb = document.querySelector('.text-box')
  const textField = document.createElement('p')
})
</script>

<template>
  <Tabs class="tabs" />
  <div class="x-dashed-line top-60 md:top-72" />
  <div class="x-dashed-line top-84 md:top-108" />
  <div class="x-dashed-line bottom-9 md:bottom-70" />

  <div class="y-dashed-line h-screen absolute left-5 md:left-7 w-[1px] bg-(--border-color)" />
  <div class="y-dashed-line h-screen absolute right-5 md:right-7 w-[1px] bg-(--border-color)" />
  <Container>
    <div class="h-full w-full flex flex-col">
      <div class="text-box mt-64">
        <span class="txt text-5xl md:text-9xl start-text">Hello, my name is</span>
        <h1 class="txt mt-4 md:-mt-2 text-8xl md:text-[256px] start-text font-bold">
          {{ lxText }}{{ indicator }}
        </h1>
      </div>
    </div>
  </Container>

  <div class="fixed bottom-8 right-8 flex gap-2 items-center text-(--font-color)">
    <span> проекты </span>
    <ArrowDown />
  </div>
</template>

<style scoped></style>
