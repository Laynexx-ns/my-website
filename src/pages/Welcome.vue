<script setup lang="ts">
import Container from '@/components/Container.vue'
import SocialsButton from '@/components/socials-button.vue'
import '../views/pages.css'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import AnimateText from '@/animations/text-animation.ts'
import { AnimateYLineDefault } from '@/animations/y-line-animation.ts'
import { AnimateXDashedLine } from '@/animations/x-line-animation.ts'

const lxText = ref<string>('Laynexx')

onMounted(() => {
  AnimateXDashedLine()
  AnimateText()
  AnimateYLineDefault()
})

//TODO: сделать для текста блюр при наведении
onMounted(() => {
  const tb = document.querySelector('.text-box')
  const textField = document.createElement('p')
})
</script>

<template>
  <div class="relative">
    <div class="x-dashed-line top-60 md:top-72" />
    <div class="x-dashed-line top-84 md:top-108" />
    <div class="x-dashed-line bottom-9 md:bottom-70" />

    <div class="y-line left-5 md:left-7" />
    <div class="y-line right-5 md:right-7" />
    <Container>
      <div class="h-full w-full flex flex-col">
        <div class="w-full text-box mt-64">
          <span class="txt text-5xl md:text-9xl start-text">Hello, my name is</span>
          <h1 class="txt mt-4 md:-mt-2 text-8xl md:text-[256px] start-text font-bold">
            {{ lxText }}
          </h1>
        </div>
        <SocialsButton class="mt-12 ml-6 w-1/5" />
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
