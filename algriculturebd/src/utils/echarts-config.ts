import type { ECOption } from '#/echarts'

/**
 * 生成图例配置对象
 * @param right 图例距离右边界的位置（单位：像素）
 * @returns 返回一个包含图例配置的对象
 */
export const comLegend = (right: number | string = 0) => {
  const legend: ECOption['legend'] = {
    right,
    top: 0,
    itemWidth: 18,
    itemHeight: 9,
    textStyle: {
      rich: {
        a: {
          fontSize: 14,
          padding: [2, 0, 0, 0],
        },
      },
    },
  }
  return legend
}

/**
 * 生成一个线性颜色渐变的对象
 * @param c1 上面颜色，字符串表示，如 '#ffffff'
 * @param c2 下面颜色，字符串表示，如 '#000000'
 * @returns 返回一个描述线性颜色渐变的对象
 */
export const linearColor = (c1: string, c2: string) => {
  return {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: c1,
      },
      {
        offset: 1,
        color: c2,
      },
    ],
    global: false, // 缺省为 false
  }
}

/**
 * 通用坐标系配置
 * @param bottom - 网格底部的大小，默认为 14
 * @returns 返回一个包含网格布局属性的对象
 */
export const comGrid = (bottom = 10) => {
  const grid: ECOption['grid'] = {
    left: 0,
    right: 0,
    bottom,
    top: 40,
    containLabel: true,
  }
  return grid
}

/**
 * 通用x轴配置
 * @param data - x周数据
 * @param showTick - 是否显示刻度
 */
export const comXAxis = (data: (string | number)[], showTick = false) => {
  const xAxis: ECOption['xAxis'] = {
    data,
    type: 'category',
    boundaryGap: true,
    offset: 4,
    axisLabel: {
      align: 'center',
      color: 'rgba(37, 51, 71, 0.4)',
      fontFamily: 'Microsoft YaHei',
    },
    axisLine: {
      lineStyle: { color: '#E1E8F0' },
    },
    axisTick: {
      show: showTick,
      inside: true,
      alignWithLabel: true,
      lineStyle: { color: 'rgba(37, 51, 71, 0.4)' },
    },
    splitLine: {
      show: false,
    },
  }
  // TODO: 不加断言要报错
  return xAxis as ECOption['xAxis']
}

/**
 * 通用y轴配置
 * @param name - y轴名称
 * @param left - 名称距离y轴距离
 */
export const comYAxis = (name: string, left = 0) => {
  const yAxis: ECOption['yAxis'] = {
    type: 'value',
    name,
    // min,
    nameTextStyle: {
      color: 'rgba(37,51,71,0.65)',
      fontSize: 14,
      fontFamily: 'Microsoft YaHei',
      fontWeight: 400,
      align: 'center',
      padding: [0, 0, 5, left],
    },
    axisLabel: {
      color: 'rgba(37,51,71,0.45)',
      fontFamily: 'Microsoft YaHei',
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: 'rgba(225,232,240,0.6)',
      },
    },
  }
  return yAxis as ECOption['yAxis']
}

/**
 * 生成一个用于图表工具提示的配置对象。
 * @param alwaysShowContent 是否总是显示工具提示的内容。默认为false，只有当鼠标悬停在图表上时才显示。
 * @returns 返回一个配置对象，该对象用于配置图表的工具提示功能。
 */
export function comToolTip(trigger: 'axis' | 'item' | 'none' | undefined = 'axis', alwaysShowContent = false) {
  const tooltip: ECOption['tooltip'] = {
    trigger,
    alwaysShowContent,
    borderWidth: 0,
    borderRadius: 8,
    padding: [12],
    position(pos: any, _params: any, _el: any, _elRect: any, size: any) {
      const obj: any = { top: size.viewSize[1] / 2 - size.contentSize[1] / 2 }
      // 鼠标在canvas左侧
      if (pos[0] < size.viewSize[0] / 2) {
        obj.left = pos[0] + 20
      }
      else {
        obj.right = size.viewSize[0] - pos[0] + 20
      }
      return obj
    },
    className: 'custom-tooltip-box',
    formatter(params: any) {
      let tooltipContent = `<div style="color: rgba(37, 51, 71, 0.85);font-size: 16px;font-weight: 500;margin-bottom:8px">${params[0].name}</div>`
      params.forEach((item: any) => {
        const { seriesName } = item
        const value = item.value ?? '-'
        const colorDot: string = item.marker // 获取颜色小点样式

        tooltipContent
          += `<div style="display: flex;align-items: center">${colorDot} `
            + `<span style="color: rgba(37, 51, 71, 0.55);font-size:14px;font-weight: normal;display: block;">${seriesName}:</span>`
            + `<span style="margin-left:8px;font-size: 14px;color: rgba(37, 51, 71, 0.85);">${value}</span>`

            + `</div>`
      })

      return `<div class="custom-tooltip-style">${tooltipContent}</div>`
    },
  }
  return tooltip
}

// 自定义 Tooltip 内容
export const customTooltipContent = (
  data: Array<any>,
  isDots: boolean = true,
  unit: string = '',
  nameKey: string = 'seriesName',
): any => {
  const vNode: Array<any> = []
  if (Array.isArray(data)) {
    data.forEach((i) => {
      vNode.push(`<span
          style="
          width:100%;
          font-size:14px;
          color:rgba(37,51,71,0.55);
          display: flex;
          align-items: center;
        ">
          <i
            style="
            margin-right:8px;
            display:${isDots ? 'inline-block' : 'none'};
            width: 6px;
            height: 6px;
            background: ${i.color};
            border-radius: 50%;">
          </i>
          ${i[nameKey]}
          <span
            style="
            display:inline-block;
            padding-left:12px;
            font-size: 14px;
            color: rgba(37,51,71,0.85);
          ">
            ${i.value === null || i.value === undefined ? '-' : i.value} ${i.data?.dw || unit}
          </span>
        </span>`)
    })
  }
  return `
  <div>
    <span style="font-size:16px;color:rgba(37,51,71,0.85)">${data[0].axisValueLabel}</span>
    <li style="display: flex;flex-direction: column;">${vNode.join('')}</li>
  </div>
  `
}
