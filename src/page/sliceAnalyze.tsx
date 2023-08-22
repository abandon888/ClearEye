import { Button, Form, Modal, Spin } from 'antd'
import PageUpload from '../component/upload'
import { useState } from 'react'

export default function SliceAnalyze() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const showSpin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsModalOpen(true)
    }, 5000)
  }
  return (
    <>
      {isLoading == true ? (
        <Spin />
      ) : (
        <Form>
          <Form.Item label="病理切片图片">
            <PageUpload />
          </Form.Item>
          <Button
            onClick={showSpin}
            type="primary"
            style={
              {
                //width: '100px',
                //height: '40px',
              }
            }>
            分析
          </Button>
        </Form>
      )}

      <Modal
        title="病理切片分析结果"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="查看分析报告"
        cancelText="返回">
        <p>分析成功！点击查看分析结果</p>
      </Modal>
    </>
  )
}
