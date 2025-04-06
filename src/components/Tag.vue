<template>
    <span
      class="inline-block px-[5px] text-[14px] rounded-[5px]"
      :class="[colorClass]"
    >
      {{ label }}
    </span>
  </template>
  
  <script setup lang="ts">
  defineProps<{
  label: string
  colorClass?: string
}>()
  </script>