<template>
    <header>
      <img :src="topImg" alt="トップ画像" class="w-full h-48 object-cover" />
      <div class="text-center p-4 bg-white dark:bg-gray-900">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
          Portfolio | Noda Mari
        </h1>
        <p class="text-gray-500 text-sm">
          🗓️ Last Updated: 2025/04/05
        </p>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    topImg: string
  }>()
  </script>
  