import type { ECOption } from '#/echarts'
import type { Ref } from 'vue'

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
// 引入柱状图图表，图表后缀都为 Chart
import {
  BarChart,
  GaugeChart,
  LineChart,
  PieChart,
  RadarChart,
  SankeyChart,
  ScatterChart,
} from 'echarts/charts'

// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  DatasetComponent,
  DataZoomComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components'

import * as echarts from 'echarts/core'

// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from 'echarts/renderers'
import { onMounted, onUnmounted } from 'vue'
// 按需导入需要用到的 vue函数 和 echarts
// import * as echarts from 'echarts';
// import 'echarts-liquidfill'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  DataZoomComponent,
  TransformComponent,
  VisualMapComponent,
  BarChart,
  LineChart,
  SankeyChart,
  RadarChart,
  PieChart,
  GaugeChart,
  ScatterChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  LegendComponent,
  GraphicComponent,
  MarkAreaComponent,
  MarkPointComponent,
  MarkLineComponent,
])

/**
 * ECharts 图表钩子函数
 * @param domRef 图表容器的引用
 * @param initOption 初始化配置项
 * @returns 包含图表更新和获取实例的方法对象
 */
export function useEcharts(domRef: Ref<HTMLElement | null>, initOption: ECOption = {}): {
  updateChart: (option: ECOption) => void
  getInstance: () => echarts.ECharts | null
} {
  // 创建图表实例变量
  let chartInstance: echarts.ECharts | null = null

  /**
   * 更新图表配置
   * @param option 新的配置项
   */
  const updateChart = (option: ECOption) => {
    const dom = domRef.value
    if (!dom) {
      console.error('找不到 dom 元素')
      return
    }

    // 如果实例不存在则初始化
    if (!chartInstance) {
      chartInstance = echarts.init(dom, {
        renderer: 'svg',
      })
    }

    // 合并配置项
    const mergedOption = {
      ...initOption,
      ...option,
    }
    // 设置图表配置
    chartInstance.setOption(mergedOption)
  }

  /**
   * 处理窗口大小变化，自动调整图表大小
   */
  const handleResize = () => {
    chartInstance?.resize()
  }

  // 组件挂载时，添加窗口大小变化监听
  onMounted(() => {
    window.addEventListener('resize', handleResize)
    // 如果存在初始配置，则初始化图表
    if (Object.keys(initOption).length > 0) {
      updateChart(initOption)
    }
  })

  // 组件卸载时，移除监听并销毁图表实例
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    chartInstance?.dispose()
    chartInstance = null
  })

  /**
   * 获取 ECharts 实例
   * @returns 当前图表实例或 null
   */
  const getInstance = (): echarts.ECharts | null => {
    if (!chartInstance) {
      console.error('ECharts instance is not initialized')
      return null
    }
    return chartInstance
  }

  // 返回操作图表的方法
  return {
    updateChart, // 更新图表配置
    getInstance, // 获取图表实例
  }
}
