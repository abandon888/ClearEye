import React, { useEffect, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, theme, Typography } from 'antd'
import logo from './assets/logo.png'
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

const { Header, Sider, Content } = Layout

export default function PageLayout(props: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  // const [selectedKeys, setSelectedKeys] = useState(['1'])
  const { pathname } = useLocation()
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  useEffect(() => {
    console.log('pathname', pathname)
  }, [])
  return (
    <Layout
      style={{
        minHeight: '100vh',
        background: colorBgContainer,
      }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <img className="demo-logo-vertical" src={logo} />
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
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
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Typography.Text>概述</Typography.Text>
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
