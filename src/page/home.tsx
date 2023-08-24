import PageCard from '../component/Card'
import Chart1 from '../component/chart/chart1'
import Chart2 from '../component/chart/chart2'
import Chart3 from '../component/chart/chart3'
import Chart4 from '../component/chart/chart4'
import home3 from '../assets/home3.png'
import home2 from '../assets/home2.png'
import home1 from '../assets/home1.png'
import { Button, Card, Switch, Typography } from 'antd'
import PageCalendar from '../component/Calendar'
import daily from '../assets/daily.png'

export default function Home() {
  return (
    <>
      <div className="flex ">
        {/* 左侧布局 */}
        <div className="flex flex-col w-[75%]">
          <div className="flex justify-between">
            <PageCard title="错题量" description="16/130" size="small">
              <Chart1 />
            </PageCard>
            <PageCard title="排名" description="19" size="small">
              <Chart2 />
            </PageCard>
            <PageCard title="今日互动量" description="13" size="small">
              <Chart3 />
            </PageCard>
          </div>
          <div
            style={{
              marginTop: '20px',
            }}>
            <PageCard bigTitle="学习任务完成度" size="large" largeText="测试">
              <Chart4 />
            </PageCard>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '20px',

              justifyContent: 'space-between',
            }}>
            <PageCard
              bigTitle="公益讲座"
              style={{
                width: '300px',
                height: '370px',
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
                <Typography.Text
                  type="success"
                  style={{
                    color: '#0e927a',
                  }}>
                  https://www.icourse163.org/course/NCU-1206614802
                </Typography.Text>
              </Typography.Paragraph>
            </PageCard>
            <PageCard
              bigTitle="测试时间表"
              style={{
                width: '460px',
                height: '370px',
                paddingBottom: '30px',
              }}>
              <PageCalendar />
            </PageCard>
          </div>
        </div>
        {/* 右侧布局 */}
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            <Card className=" w-[80%] ml-[10px]">
              <Typography.Title level={4}>课程预告</Typography.Title>
              <img src={home1} alt="#" className="scale-75" />
              <Typography.Title
                level={5}
                style={{
                  marginTop: '10px',
                  marginLeft: '30%',
                }}>
                您当前没有课程。
              </Typography.Title>
              <Button
                type="primary"
                style={{
                  marginTop: '10px',
                  backgroundColor: '#0e927a',
                  width: '100px',
                  marginLeft: '35%',
                }}>
                立即安排
              </Button>
            </Card>
            <div className="w-[80%] ml-[10px] mt-[60px]">
              <img src={daily} alt="#" className="w-[100%]" />
              <div className="mt-[-80px]">
                <Button
                  type="primary"
                  className=" ml-[50%] translate-x-[-50%] mb-[10px]">
                  立即签到
                </Button>
                <div className="flex justify-between mx-[12px]">
                  <Typography.Text className="mr-[4px]">
                    已连续签到2天
                  </Typography.Text>
                  <Typography.Text>
                    签到提醒
                    <Switch />
                  </Typography.Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
