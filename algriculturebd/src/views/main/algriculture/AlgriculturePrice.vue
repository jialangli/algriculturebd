<script setup lang='ts'>
import { useTemplateRef } from 'vue'
import { useEcharts } from '@/hooks/useEcharts'
import { createLineChart } from '@/views/charts/lineChart'
import Selection from './components/Selection.vue'

const lineChart = useTemplateRef('lineChart')
const data = { xData: [
  '2025-03-05',
  '2025-03-06',
  '2025-03-07',
  '2025-03-08',

], sellCount: [
  3.8,
  4.3,
  4.2,
  3.6,
] }

useEcharts(lineChart, createLineChart({
  xData: data.xData,
  y1: data.sellCount,
}))
</script>

<template>
  <Selection />
  <!-- 价格图表 -->
  <div ref="lineChart" class="chart-container w800px h500px m-a" />

  <!-- 价格表格 -->
  <div class="data-table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>序号</th>
          <th>类型</th>
          <th>品名</th>
          <th>价格</th>
          <th>省份</th>
          <th>数据时间</th>
          <th>数据来源</th>
          <th>地区/市场</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>水果</td>
          <td>哈密瓜</td>
          <td>4.4元/斤</td>
          <td>广东省</td>
          <td>2025/3/12</td>
          <td>全国农批布</td>
          <td>茂名市xx农贸市场</td>
        </tr>
        <tr>
          <td>2</td>
          <td>水果</td>
          <td>哈密瓜</td>
          <td>4.4元/斤</td>
          <td>广东省</td>
          <td>2025/3/12</td>
          <td>全国农批布</td>
          <td>茂名市xx农贸市场</td>
        </tr>
        <tr>
          <td>3</td>
          <td>水果</td>
          <td>哈密瓜</td>
          <td>4.4元/斤</td>
          <td>广东省</td>
          <td>2025/3/12</td>
          <td>全国农批布</td>
          <td>茂名市xx农贸市场</td>
        </tr>
        <tr>
          <td>4</td>
          <td>水果</td>
          <td>哈密瓜</td>
          <td>4.4元/斤</td>
          <td>广东省</td>
          <td>2025/3/12</td>
          <td>全国农批布</td>
          <td>茂名市xx农贸市场</td>
        </tr>
        <tr>
          <td>5</td>
          <td>水果</td>
          <td>哈密瓜</td>
          <td>4.4元/斤</td>
          <td>广东省</td>
          <td>2025/3/12</td>
          <td>全国农批布</td>
          <td>茂名市xx农贸市场</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
 .data-table-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 30px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
}

.data-table th {
  background-color: #fafafa;
  font-weight: 500;
  color: #666;
}

.data-table tr:last-child td {
  border-bottom: none;
}

.data-table tr:hover {
  background-color: #f9f9f9;
}
</style>
