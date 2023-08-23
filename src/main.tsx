import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#0e927a',
        },
      }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
