import Card from '../component/Card'
import Chart1 from '../component/chart/chart1'
import Chart2 from '../component/chart/chart2'
import Chart3 from '../component/chart/chart3'
import Chart4 from '../component/chart/chart4'
import home3 from '../assets/home3.png'
import home2 from '../assets/home2.png'
import { Typography } from 'antd'

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
        <Card bigTitle="学习任务完成度" size="large" largeText="测试">
          <Chart4 />
        </Card>
      </div>
      <div>
        <Card
          bigTitle="公益讲座"
          style={{
            width: '300px',
            height: '370px',
            marginTop: '20px',
          }}>
          <img
            src={home3}
            alt="#"
            style={{
              position: 'relative',
              top: '-32px',
              left: '150px',
            }}
          />
          <img src={home2} alt="#" />
          <Typography.Paragraph>
            <Typography.Text disabled> 主题：</Typography.Text>
            <Typography.Text>病理二三事——从基础到临床</Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text disabled> 时间：</Typography.Text>
            <Typography.Text>2023年8月30日</Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text disabled> 讲座链接：</Typography.Text>
            <Typography.Text type="success">
              https://www.icourse163.org/course/NCU-1206614802
            </Typography.Text>
          </Typography.Paragraph>
        </Card>
        <Card bigTitle="测试时间表"></Card>
      </div>
    </>
  )
}
