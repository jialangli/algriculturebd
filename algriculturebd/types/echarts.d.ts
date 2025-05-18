import type { BarSeriesOption, DatasetComponentOption, GaugeSeriesOption, GridComponentOption, LegendComponentOption, LineSeriesOption, MarkAreaComponentOption, MarkLineComponentOption, MarkPointComponentOption, PieSeriesOption, RadarSeriesOption, SankeySeriesOption, ScatterSeriesOption, TitleComponentOption, TooltipComponentOption, VisualMapComponentOption } from 'echarts'

export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | GaugeSeriesOption
  | LineSeriesOption
  | RadarSeriesOption
  | PieSeriesOption
  | SankeySeriesOption
  | ScatterSeriesOption
  | DatasetComponentOption
  | MarkAreaComponentOption
  | MarkPointComponentOption
  | MarkLineComponentOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | DatasetComponentOption
  | VisualMapComponentOption
>
