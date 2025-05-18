import type { ECOption } from '#/echarts'
import { comGrid, comLegend, comToolTip, comXAxis, comYAxis } from '@/utils/echarts-config'

export const createBarChart = (props: { xData: any, y1: any, y2: any } = { xData: [], y1: [], y2: [] }) => {
  const { xData, y1, y2 } = props
  const options: ECOption = {
    color: ['#3FD1FF', '#0075FF'],
    tooltip: comToolTip(),
    legend: comLegend(),
    grid: comGrid(),
    xAxis: comXAxis(xData),
    yAxis: comYAxis('单位:万kW', 20),
    series: [
      {
        type: 'bar',
        name: '最大需求量',
        data: y1,
        // 柱状图的宽度
        barWidth: 12,
        barGap: '0.67',
      },
      {
        type: 'bar',
        name: '最大响应量',
        data: y2,
        // 柱状图的宽度
        barWidth: 12,
      },
    ],
  }

  return options
}
