import { Chart, Interval, Tooltip, getTheme } from 'bizcharts'

const data = [
  { year: '周一', value: 2 },
  { year: '周二', value: 52 },
  { year: '周三', value: 61 },
  { year: '周四', value: 45 },
  { year: '周五', value: 48 },
  { year: '周六', value: 38 },
  { year: '周日', value: 13 },
]

function Chart3() {
  return (
    <Chart
      height={80}
      width={200}
      autoFit
      data={data}
      scale={{
        value: { min: 0, alias: '互动量' },
      }}>
      <Interval
        position="year*value"
        style={{ lineWidth: 4 }}
        color="#ffbe3f"
      />
      <Tooltip shared />
    </Chart>
  )
}

export default Chart3
