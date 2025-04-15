<template>
    <div
      @click="onClick"
      class="bg-naby py-1 px-2 flex flex-col sm:flex-row sm:items-center cursor-pointer rounded-md hover:bg-opacity-80 transition"
    >
      <div class="font-bold text-sm sm:text-base sm:w-[200px]">
        {{ date }}
      </div>
      <h3 class="career-h3 text-sm sm:text-base sm:ml-4">
        {{ title }}
      </h3>
      <span class="ml-auto text-sm sm:text-base">👆click</span>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    date: string
    title: string
    onClick: () => void
  }>()
  </script>
  
  <style scoped>
  .career-h3 {
    font-weight: bold;
  }
  </style>
  