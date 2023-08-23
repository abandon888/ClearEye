import Card from '../component/Card'
import Chart1 from '../component/chart/chart1'
import Chart2 from '../component/chart/chart2'
import Chart3 from '../component/chart/chart3'
import Chart4 from '../component/chart/chart4'

export default function Home() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '75%',
          justifyContent: 'space-between',
        }}>
        <Card title="错题量" description="16/130" size="small">
          <Chart1 />
        </Card>
        <Card title="排名" description="19" size="small">
          <Chart2 />
        </Card>
        <Card title="今日互动量" description="13" size="small">
          <Chart3 />
        </Card>
      </div>
      <div
        style={{
          marginTop: '20px',
        }}>
        <Card title="学习任务完成度" size="large" largeText="测试">
          <Chart4 />
        </Card>
      </div>
    </>
  )
}
