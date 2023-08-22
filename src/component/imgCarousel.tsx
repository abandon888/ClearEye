import { useState } from 'react'
import { Modal } from 'antd'

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
      <img src={images[0]} onClick={showModal} />

      <Modal open={visible} onCancel={handleCancel}>
        <img src={images[1]} />
      </Modal>
    </>
  )
}

export default ImageView
