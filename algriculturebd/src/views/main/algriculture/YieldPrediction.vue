<script setup lang='ts'>
import { ref, useTemplateRef } from 'vue'
import { useEcharts } from '@/hooks/useEcharts'
import { createBarChart } from '@/views/charts/barChar'
import Selection from './components/Selection.vue'

const barChart = useTemplateRef('barChart')
const data = { xData: [
  '第一季度',
  '第二季度',
  '第三季度',
  '第四季度',

], sellCount: [
  200,
  502,
  1000,
  1500,
  2000,
] }

const { updateChart: updateBarChart } = useEcharts(barChart, createBarChart({
  xData: data.xData,
  y1: data.sellCount,
}))
</script>

<template>
  <Selection />
  <!-- 价格图表 -->
  <div ref="barChart" class="chart-container w800px h500px m-a" />
</template>

<style>

</style>
