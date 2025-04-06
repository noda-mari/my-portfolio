<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

ChartJS.register(Title, Tooltip, ArcElement)

const props = defineProps({
  label: String,       
  value: Number,       
})
const data = {
  datasets: [{
    data: [props.value, 100 - props.value],
    backgroundColor: ['#36A2EB', '#E0E0E0'],
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

<template>
  <div style="width: 150px; height: 150px;">
    <Doughnut :data="data" :options="options" />
    <div style="position: relative; top: -120px; text-align: center;">
      <p style="font-weight: bold;">{{ label }}</p>
      <p>{{ value }}%</p>
    </div>
  </div>
</template>
