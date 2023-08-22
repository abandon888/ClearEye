import { useState } from 'react'
import { Button, Modal } from 'antd'

interface ImageViewProps {
  images: string[]
}

const ImageView = ({ images }: ImageViewProps) => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <div
        style={{
          width: '80%',
        }}>
        <img
          src={images[0]}
          onClick={showModal}
          style={{
            width: '100%',
          }}
        />

        <Modal
          open={visible}
          onCancel={handleCancel}
          closable={false}
          footer={[
            <Button
              onClick={() => {
                setVisible(false)
              }}
              type="primary">
              关闭
            </Button>,
          ]}>
          <img
            src={images[1]}
            style={{
              width: '100%',
            }}
          />
        </Modal>
      </div>
    </>
  )
}

export default ImageView
