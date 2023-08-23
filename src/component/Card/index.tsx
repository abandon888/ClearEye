import { Typography } from 'antd'
import './index.css'

interface CardProps {
  title: string
  description: string
  children: React.ReactNode
  size: 'small' | 'large'
}

export default function Card({
  title,
  description,
  children,
  size,
}: CardProps) {
  const cardClassName = `card ${size === 'small' ? 'card-small' : 'card-large'}`

  return (
    <>
      <div className={cardClassName}>
        <div className="cardTitle">
          <Typography.Text>{title}</Typography.Text>
          <div className="card-title-des">{description}</div>
        </div>

        <div className="cardChild">{children}</div>
      </div>
    </>
  )
}
