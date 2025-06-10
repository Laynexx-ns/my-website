<script setup lang="ts">
const props = defineProps({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
})
</script>

<template>
  <div
    class="hover:scale-110 transition-all duration-500 overflow-hidden z-10 w-96 h-50 backdrop-blur-sm border border-(--border-color) rounded-3xl bg-black/5 relative flex flex-col p-6"
  >
    <div class="z-20">
      <h2 class="text-4xl font-bold text-(--font-color)">{{ props.name }}</h2>
      <p v-if="props.description" class="text-md text-(--font-color)/50">
        {{ props.description }}
      </p>
    </div>
    <div
      class="absolute z-10` inset-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent"
    ></div>
    <slot class="absolute inset-0 w-full h-full object-cover" />
  </div>
</template>
