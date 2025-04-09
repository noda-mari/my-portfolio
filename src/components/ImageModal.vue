<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div class="relative">
        <img :src="image" class="max-w-full max-h-screen rounded shadow-lg" />
        <button @click="close" class="absolute top-2 right-2 text-white text-xl font-bold">×</button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    show: Boolean,
    image: String,
  })
  
  const emit = defineEmits(['close'])
  
  const close = () => {
    emit('close')
  }
  </script>
  