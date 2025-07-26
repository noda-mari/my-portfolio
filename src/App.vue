<template>
  
  <component :is="currentHeader" topImg="/naiby.jpg" />

  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-x-5"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 -translate-x-5"
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
  switch (route.meta?.header) {
    case 'sub':
      return HeaderSub
    case 'main':
    default:
      return HeaderMain
  }
})
</script>
