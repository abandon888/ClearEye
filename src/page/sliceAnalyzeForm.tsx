import ImageView from '../component/imgCarousel'
import ana1 from '../assets/ana1.png'
import ana1_1 from '../assets/ana1-1.png'
import ana2 from '../assets/ana2.png'
import ana2_1 from '../assets/ana2-1.png'
import ana3 from '../assets/ana3.png'
import ana3_1 from '../assets/ana3-1.png'
import ana4 from '../assets/ana4.png'
import ana4_1 from '../assets/ana4-1.png'
import { Carousel } from 'antd'

export default function SliceAnalyzeForm() {
  return (
    <>
      <Carousel>
        <ImageView images={[ana1, ana1_1]} />
        <ImageView images={[ana2, ana2_1]} />
        <ImageView images={[ana3, ana3_1]} />
        <ImageView images={[ana4, ana4_1]} />
      </Carousel>
    </>
  )
}
