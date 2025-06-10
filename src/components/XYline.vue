<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  horizontal: Boolean,
})
</script>

<template>
  <div :class="horizontal ? 'x-dashed-line' : 'y-dashed-line'" class="top-60 md:top-72"></div>
</template>

<style scoped></style>
