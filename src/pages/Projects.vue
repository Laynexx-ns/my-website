<script setup lang="ts">
import Container from '@/components/Container.vue'
import { onMounted } from 'vue'
import { AnimateXDashedLine } from '@/animations/x-line-animation.ts'
import ProjectCard from '@/components/project-card.vue'

onMounted(() => {
  AnimateXDashedLine()
})
</script>

<template>
  <Container>
    <div class="min-h-screen min-w-screen relative p-32 overflow-hidden">
      <div class="x-dashed-line top-56 md:top-70 -left-10" />
      <div class="x-dashed-line mt-20 top-80 md:top-200 rotate-3 -left-20" />

      <div class="flex flex-col gap-4">
        <h1 class="text-7xl md:text-9xl font-bold text-(--font-color)">My projects:</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-y-20 -mt-14">
          <project-card name="formulink" description="qwe">
            <img src="/formulnk.png" alt="project-img" />
          </project-card>
          <project-card name="formulink" description="qwe">
            <img src="/formulnk.png" alt="project-img" />
          </project-card>
          <project-card name="formulink" description="qwe">
            <img src="/formulnk.png" alt="project-img" />
          </project-card>

          <project-card name="formulink" description="qwe">
            <img src="/formulnk.png" alt="project-img" />
          </project-card>
          <project-card name="formulink" description="qwe">
            <img src="/formulnk.png" alt="project-img" />
          </project-card>
          <project-card name="formulink" description="qwe">
            <img src="/formulnk.png" alt="project-img" />
          </project-card>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
span {
  letter-spacing: 0;
}
</style>
