import ImageView from '../component/imgCarousel'
import ana1 from '../assets/ana1.png'
import ana1_1 from '../assets/ana1-1.png'
import ana2 from '../assets/ana2.png'
import ana2_1 from '../assets/ana2-1.png'
import ana3 from '../assets/ana3.png'
import ana3_1 from '../assets/ana3-1.png'
import ana4 from '../assets/ana4.png'
import ana4_1 from '../assets/ana4-1.png'
import { Button, Card, Carousel, ConfigProvider } from 'antd'
import { useRef } from 'react'
import { CarouselRef } from 'antd/es/carousel'

export default function SliceAnalyzeForm() {
  const sliderRef = useRef<CarouselRef>(null)

  const handleNext = (): void => {
    sliderRef.current?.next()
  }

  const handlePrev = (): void => {
    sliderRef.current?.prev()
  }

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: 'blue',
          },
        }}>
        <Carousel dots={true} ref={sliderRef}>
          <ImageView images={[ana1, ana1_1]} />
          <ImageView images={[ana2, ana2_1]} />
          <ImageView images={[ana3, ana3_1]} />
          <ImageView images={[ana4, ana4_1]} />
        </Carousel>
      </ConfigProvider>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 50px',
        }}>
        <Button type="primary" onClick={handlePrev} size="large">
          上一张
        </Button>
        <Button type="primary" onClick={handleNext} size="large">
          下一张
        </Button>
      </div>
    </>
  )
}
