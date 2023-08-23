import React from 'react'
import ReactDOM from 'react-dom'
import { Chart, Line, Point, Tooltip, getTheme } from 'bizcharts'

console.log(getTheme())

// 数据源
const data = [
  { year: '周一', value: 2 },
  { year: '周二', value: 52 },
  { year: '周三', value: 61 },
  { year: '周四', value: 45 },
  { year: '周五', value: 48 },
  { year: '周六', value: 38 },
  { year: '周日', value: 19 },
]

function Chart2() {
  return (
    <>
      <Chart
        appendPadding={[10, 0, 0, 10]}
        autoFit
        height={80}
        width={200}
        data={data}
        onLineClick={console.log}
        scale={{
          value: { min: 0, alias: '排名', type: 'linear-strict' },
          year: { range: [0, 1] },
        }}>
        <Line position="year*value" color="#089479" size={6} />
        <Point position="year*value" />
        <Tooltip />
      </Chart>
    </>
  )
}

export default Chart2
