import React from 'react'
import ReactDOM from 'react-dom'
import { Chart, LineAdvance } from 'bizcharts'

// 数据源
const data = [
  {
    month: '周一',
    city: '课程一',
    temperature: 7,
  },
  {
    month: '周一',
    city: '课程二',
    temperature: 3.9,
  },
  {
    month: '周二',
    city: '课程一',
    temperature: 13,
  },
  {
    month: '周二',
    city: '课程二',
    temperature: 4.2,
  },
  {
    month: '周三',
    city: '课程一',
    temperature: 16.5,
  },
  {
    month: '周三',
    city: '课程二',
    temperature: 5.7,
  },
  {
    month: '周四',
    city: '课程一',
    temperature: 14.5,
  },
  {
    month: '周四',
    city: '课程二',
    temperature: 8.5,
  },
  {
    month: '周五',
    city: '课程一',
    temperature: 10,
  },
  {
    month: '周五',
    city: '课程二',
    temperature: 9.2,
  },
  {
    month: '周六',
    city: '课程一',
    temperature: 6.6,
  },
  {
    month: '周六',
    city: '课程二',
    temperature: 9.5,
  },
  {
    month: '周日',
    city: '课程一',
    temperature: 12,
  },
  {
    month: '周日',
    city: '课程二',
    temperature: 4.8,
  },
]

function Chart4() {
  return (
    <>
      {' '}
      <Chart
        padding={[10, 20, 50, 40]}
        autoFit
        height={280}
        width={750}
        data={data}
        scale={{
          city: {
            alias: '测试项目',
          },
          temperature: {
            min: 0,
            alias: '测试时长',
          },
        }}>
        <LineAdvance
          shape="smooth"
          point
          area
          position="month*temperature"
          color="city"
        />
      </Chart>
    </>
  )
}

export default Chart4
