<script setup lang="ts">
import { onMounted } from 'vue'
import { AnimateXDashedLine } from '@/animations/x-line-animation.ts'
import BlogItemContainer from '@/components/blog-item-container.vue'
import type Post from '@/types/post.ts'

const posts: Post[] = [
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
  { name: 'Post', description: 'description!!', date: new Date(), url: '/' },
]

onMounted(() => {
  AnimateXDashedLine()
})
</script>

<template>
  <div class="relative h-screen w-screen p-8 overflow-hidden">
    <section>
      <h1 class="mt-20 md:mt-0 text-9xl font-medium text-(--font-color)">BLOG.</h1>
      <div class="x-dashed-line top-60 md:top-40" />
    </section>

    <section class="h-full pb-4 mt-10 overflow-y-auto flex flex-col gap-12">
      <blog-item-container v-for="(item, index) in posts" key="index" :post="item" />
    </section>
  </div>
</template>

<style scoped></style>
