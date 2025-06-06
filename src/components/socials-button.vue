<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import gsap from 'gsap'

const hovering = ref(false)

watch(hovering, (isHovering) => {
  if (isHovering) {
    gsap.to('.socials', {
      width: 300,
      height: 120,
      borderRadius: 40,
      duration: 0.3,
      ease: 'power2.out',
    })

    gsap.to('.social-text', {
      opacity: 0,
      duration: 0.2,
    })

    gsap.to('.icons', {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: 'power2.out',
      delay: 0.1,
    })
  } else {
    gsap.to('.socials', {
      width: 180,
      height: 78,
      borderRadius: 9999,
      duration: 0.3,
      ease: 'power2.inOut',
    })

    gsap.to('.social-text', {
      opacity: 1,
      duration: 0.2,
      delay: 0.1,
    })

    gsap.to('.icons', {
      opacity: 0,
      x: 20,
      duration: 0.2,
      ease: 'power2.in',
    })
  }
})
</script>

<template>
  <div
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    class="socials relative inline-block w-[180px] border border-(--border-color) text-xl py-6 px-8 rounded-full items-center justify-center text-center"
  >
    <span class="socials-text mb-4" v-if="!hovering">Socials</span>
    <div id="icons" class="absolute icons opacity-0 flex justify-between w-full pr-16">
      <img class="size-16" src="/telegram.svg" alt="telegram" />
      <img class="size-16" src="/github.svg" alt="github" />
    </div>
  </div>
</template>

<style lang="css">
.socials {
  @apply text-(--font-color);
}
</style>
