<script setup lang="ts">
import type Post from '@/types/post.ts'
import type { PropType } from 'vue'
const props = defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
})
</script>

<template>
  <div
    class="flex justify-between hover:bg-(--border-color)/20 rounded-full transition-all px-10 items-center gap-4"
  >
    <div class="flex flex-col gap-2">
      <h3 class="text-5xl text-(--font-color)">{{ props.post.name }}</h3>
      <span class="text-(--font-color)/50 text-sm">{{ props.post.date.toDateString() }}</span>
    </div>
    <span
      v-if="props.post.description"
      class="description inline-block text-xl font-thin text-(--font-color)/60 max-w-30 md:max-w-max truncate overflow-hidden"
      >{{ props.post.description }}</span
    >
    <button
      class="hover:text-(--background-color) hover:bg-(--font-color) p-4 border border-(--border-color) rounded-full text-(--font-color)"
    >
      ОТКРЫТЬ
    </button>
  </div>
</template>

<style scoped>
.description {
  letter-spacing: 0;
}
</style>
