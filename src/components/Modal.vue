<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-[#361951] bg-opacity-80"
      @click.self="close">
      <div class="relative bg-modal-bg rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h2 class="text-xl text-black font-bold mb-4">{{ career?.title }}</h2>
        <div class="justify-items-start">
          <p v-for="(item, index) in career?.content" :key="index" class="text-black text-lg mb-3 text-left">
            {{ item }}
          </p>
        </div>
        <button @click="close" class="absolute top-2 right-4 text-black text-3xl font-bold">×</button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { careerData } from '../data/career'

const props = defineProps<{
  isOpen: boolean
  slug: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => emit('close')

// 該当slugのデータを取得
const career = computed(() => careerData.find(c => c.slug === props.slug))
</script>