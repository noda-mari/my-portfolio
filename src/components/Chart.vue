<template>
  <div class="w-[120px] h-[120px] relative">
    <Doughnut :data="data" :options="options" />
    <div class="absolute top-[30%] left-0 right-0 text-center px-1">
      <p class="font-bold text-sm text-stroke break-words whitespace-normal">{{ label }}</p>
      <p class="text-stroke text-sm">{{ value }}%</p>
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

ChartJS.register(Title, Tooltip, ArcElement)

const props = defineProps < {
  label: string
  value: number
} > ()


const getColorByValue = (value: number) => {
  if (value < 30) return '#99916b'
  if (value < 50) return '#99916b'
  if (value < 80) return '#e69500'
  return '#ff7f50'
}

const data = {
  datasets: [{
    data: [props.value, 100 - props.value],
    backgroundColor: [getColorByValue(props.value), '#84acad'],
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
  color: white;
  text-shadow:
    -1px -1px 0 #363636,
    1px -1px 0 #363636,
    -1px 1px 0 #363636,
    1px 1px 0 #363636;
}
</style>