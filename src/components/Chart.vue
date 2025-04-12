<template>
  <div class="w-[120px] h-[120px] relative">
    <Doughnut :data="data" :options="options" />
    <div class="absolute top-[30%] left-0 right-0 text-center px-1">
      <p class="font-bold text-sm text-stroke break-words whitespace-normal">{{ label }}</p>
      <p class="text-stroke text-sm">{{ value }}%</p>
      <p :class="experienceTextColor" class="text-stroke text-sm font-bold">{{ experienceLabel }}</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  ArcElement,
} from 'chart.js'
import { computed } from 'vue';

ChartJS.register(Title, Tooltip, ArcElement)

const props = defineProps < {
  label: string
  value: number
} > ()


const getColorByValue = (value: number) => {
  if (value < 30) return '#99916b'
  if (value < 50) return '#e6bfb8'
  if (value < 80) return '#b3476d'
  return '#ff7f50'
}

const experienceLabel = computed(() => {
  return props.value >= 50 ? '実務経験あり' : '実務未経験'
})

const experienceTextColor = computed(() => {
  return props.value >= 50 ? 'text-red-300' : 'text-blue-300'
})

const data = {
  datasets: [{
    data: [props.value, 100 - props.value],
    backgroundColor: [getColorByValue(props.value), '#4e5ca3'],
    borderWidth: 0,
  }]
}
const options = {
  plugins: {
    legend: { display: false },
  },
  cutout: '70%',
}
</script>

<style scoped>
.text-stroke {
  /* color: white; */
  text-shadow:
    -1px -1px 0 #363636,
    1px -1px 0 #363636,
    -1px 1px 0 #363636,
    1px 1px 0 #363636;
}
</style>