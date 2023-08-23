import { Chart, Interval, Tooltip, getTheme } from 'bizcharts'
const data = [
  { year: '周一', 错题量: 0 },
  { year: '周二', 错题量: 52 },
  { year: '周三', 错题量: 61 },
  { year: '周四', 错题量: 45 },
  { year: '周五', 错题量: 48 },
  { year: '周六', 错题量: 38 },
  { year: '周日', 错题量: 38 },
]

function Chart1() {
  return (
    <Chart height={80} width={200} autoFit data={data}>
      <Interval
        position="year*错题量"
        style={{ lineWidth: 4 }}
        color="#FF6500"
      />
      <Tooltip shared />
    </Chart>
  )
}

export default Chart1
