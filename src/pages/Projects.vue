<script setup lang="ts">
import Container from '@/components/Container.vue'
</script>

<template>
  <Container>
    <div class="w-full h-full p-32">
      <h1 class="text-9xl font-semibold text-(--font-color)">FormuLink</h1>
      <div class="mt-20 w-full flex justify-between text-right">
        <div class="flex gap-4">
          <img class="w-64" src="/formulnk.png" alt="formulink" />
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-2xl text-(--font-color)">About it</h4>
          <span class="text-(--font-color) text-xl font-thin max-w-64"
            >This my first big project. It is a virtual guide for physics and math</span
          >
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
