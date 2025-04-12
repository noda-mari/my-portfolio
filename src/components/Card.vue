<template>
  <RouterLink :to="`/work/${slug}`"class="block">
    <div class="bg-[#b4a1ce] rounded-[20px] shadow-md overflow-hidden w-[250px] max-w-sm mx-auto">
      <img :src="image" alt="card image" class="w-full h-[150px] object-cover" />
      <div class="p-[5px]">
        <p class="text-[#2a2d31] font-bold px-[5px] mt-[0] mb-[3px]">{{ title }}</p>
        <p class="text-[#2a2d31] m-[5px] mt-[0] ">作成期間：{{ period }}</p>
        <div class="flex flex-wrap gap-[5px] px-[5px] mx-[8px] mb-[3px]">
          <Tag
            v-for="(tag, index) in tags"
            :key="index"
            :label="tag.label"
            :colorClass="tag.color"
          />
        </div>
      </div>
    </div>
  </RouterLink>
  </template>
  
  <script setup lang="ts">
  import Tag from './Tag.vue'
  
  defineProps<{
    image: string
    title: string
    period: string
    tags: { label: string; color: string }[]
    slug: string
  }>()
  </script>
  