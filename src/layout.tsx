import React, { useEffect, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, theme, Typography, Input, Card } from 'antd'
import logo from './assets/Logo.png'
import {
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
  Link,
  useLocation,
} from 'react-router-dom'
import Home from './page/home'
import SliceAnalyze from './page/sliceAnalyze'
import SlicePhoto from './page/slicePhoto'
import avator from './assets/avator.png'

const { Header, Sider, Content } = Layout

export default function PageLayout(props: { children: React.ReactNode }) {
  // const [collapsed, setCollapsed] = useState(false)
  // const [selectedKeys, setSelectedKeys] = useState(['1'])
  const { pathname } = useLocation()
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const [selectedKeys, setSelectedKeys] = useState([pathname])

  useEffect(() => {
    console.log(pathname)
    setSelectedKeys([pathname])
  }, [pathname])
  return (
    <Layout
      style={{
        minHeight: '100vh',
        background: colorBgContainer,
      }}>
      <Sider trigger={null} theme="light">
        <img className="demo-logo-vertical" src={logo} />
        <Menu
          mode="inline"
          defaultSelectedKeys={selectedKeys}
          items={[
            {
              key: '/home',
              icon: <UserOutlined />,
              label: '更多发现',
              onClick: () => {
                //跳转到home
                window.location.href = '/home'
                //setSelectedKeys(['1'])
              },
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '阅片学习',
              //菜单默认展开
              children: [
                {
                  key: '/SlicePhoto',
                  label: '病理切片图库',
                  onClick: () => {
                    window.location.href = '/SlicePhoto'
                  },
                },
                {
                  key: '/SliceAnalyze',
                  label: '病理图片分析',
                  onClick: () => {
                    window.location.href = '/SliceAnalyze'
                  },
                },
              ],
            },
          ]}
        />
        <Card className="fixed top-[60vh]">
          <img src={avator} alt="#" className="relative bottom-[-20px]" />
          <Typography.Title level={5}>NCU医学生小明</Typography.Title>
          <Typography.Text disabled>2021级</Typography.Text>
          <Typography.Paragraph>
            <Typography.Text disabled>专业：</Typography.Text>
            <Typography.Text>临床医学</Typography.Text>
          </Typography.Paragraph>
          <Button type="primary" style={{ marginLeft: '20px' }}>
            查看个人信息
          </Button>
        </Card>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography.Title level={4}>
              AI病理诊断学习一体化平台
            </Typography.Title>
            <Input.Search
              placeholder="搜索"
              width={20}
              style={{
                maxWidth: '200px',
                marginLeft: '50vw',
              }}></Input.Search>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}
