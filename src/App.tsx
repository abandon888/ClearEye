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
  useLocation,
  Navigate,
} from 'react-router-dom'
import Home from './page/home'
import SliceAnalyze from './page/sliceAnalyze'
import SlicePhoto from './page/slicePhoto'
import PageLayout from './layout'
import SliceAnalyzeForm from './page/sliceAnalyzeForm'
import Login from './page/login'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/SliceAnalyze" element={<SliceAnalyze />} />
          <Route path="/SlicePhoto" element={<SlicePhoto />} />
          <Route path="/SliceAnalyzeForm" element={<SliceAnalyzeForm />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
