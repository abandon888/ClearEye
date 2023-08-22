import React, { useState } from 'react'
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
} from 'react-router-dom'
import Home from './page/home'
import SliceAnalyze from './page/sliceAnalyze'
import SlicePhoto from './page/slicePhoto'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: '100vh',
          background: colorBgContainer,
        }}>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
          <img className="demo-logo-vertical" src={logo} />
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: '更多发现',
                onClick: () => {
                  //跳转到home
                  window.location.href = '/home'
                },
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: '阅片学习',
                children: [
                  {
                    key: '2-1',
                    label: '病理切片图库',
                    onClick: () => {
                      window.location.href = '/SlicePhoto'
                    },
                  },
                  {
                    key: '2-2',
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
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/SliceAnalyze" element={<SliceAnalyze />} />
              <Route path="/SlicePhoto" element={<SlicePhoto />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default App
