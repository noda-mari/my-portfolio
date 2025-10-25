<template>
  
  <component 
   v-if="currentHeader" 
   :is="currentHeader"
   :topImg="['/neko.png', '/header-sub-img.png']"
   :subtitle="route.meta.subtitle ?? ''"
   />

  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    mode="out-in"
  >
    <RouterView />
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderMain from './components/Header.vue'
import HeaderSub from '@/components/HeaderSub.vue'

const route = useRoute()

const currentHeader = computed(() => {
  // Welcome では何も返さない
  if (route.name === 'Welcome') return null
  switch (route.meta?.header) {
    case 'sub':
      return HeaderSub
    case 'main':
    default:
      return HeaderMain
  }
})
</script>
