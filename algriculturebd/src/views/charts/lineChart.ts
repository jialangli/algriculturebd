import type { ECOption } from '#/echarts'
import { comGrid, comLegend, comToolTip, comXAxis, comYAxis } from '@/utils/echarts-config'

export const createLineChart = (props: { xData: any, y1: any } = { xData: [], y1: [] }) => {
  const { xData, y1 } = props
  const options: ECOption = {
    color: ['#389e0d'],
    tooltip: comToolTip(),
    legend: comLegend(),
    grid: comGrid(),
    xAxis: comXAxis(xData),
    yAxis: comYAxis('', 20),
    series: [
      {
        type: 'line',
        name: '哈密瓜价格（元/斤）',
        data: y1,
      },

    ],
  }

  return options
}
