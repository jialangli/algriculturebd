import type { ECOption } from '#/echarts'
import { comGrid, comLegend, comToolTip, comXAxis, comYAxis } from '@/utils/echarts-config'

export const createBarChart = (props: { xData: any, y1: any } = { xData: [], y1: [] }) => {
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
        type: 'bar',
        name: '预计产量',
        data: y1,
        // 柱状图的宽度
        barWidth: 60,
        barGap: '0.67',
      },

    ],
  }

  return options
}
