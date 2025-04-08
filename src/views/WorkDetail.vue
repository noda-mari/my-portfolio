<template>
    <div v-if="app">
      <h2 class="text-2xl font-bold mb-2">{{ app.title }}</h2>
      <p class="mb-4">{{ app.duration }}</p>
      <img :src="app.image" alt="" class="w-full max-w-md mb-4" />
      <p class="mb-4">{{ app.description }}</p>
      <div class="flex gap-2">
        <span v-for="tech in app.tech" :key="tech" class="px-2 py-1 bg-gray-200 rounded">
          {{ tech }}
        </span>
      </div>
    </div>
    <div v-else>
      <p>アプリが見つかりません。</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { apps } from '@/data/apps'
  
  const route = useRoute()
  const app = apps.find(a => a.id === route.params.id)
  </script>
  