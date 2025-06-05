<script setup lang="ts"></script>

<template>
  <div class="fixed w-screen flex items-center justify-center">
    <div
      class="top-8 fixed flex p-1 rounded-full gap-8 border border-(--border-color) shadow-white/20 shadow-2xl"
    >
      <button class="active tab-button">welcome page</button>
      <button class="text-(--font-color) tab-button">blog</button>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply bg-(--font-color) text-(--bg-color);
}
</style>
