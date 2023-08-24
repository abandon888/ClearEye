import { Select, Typography } from 'antd'
import './index.css'

interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  size?: 'small' | 'large'
  largeText?: string
  bigTitle?: string
  style?: React.CSSProperties
}

export default function Card({
  title,
  description,
  children,
  size,
  bigTitle,
  largeText,
  style,
}: CardProps) {
  const cardClassName = `card ${size === 'small' ? 'card-small' : 'card-large'}`

  return (
    <>
      <div
        className={cardClassName}
        style={{
          ...style,
        }}>
        <div className="cardTitle">
          <div className="card-title-big">{bigTitle}</div>
          <Typography.Text>{title}</Typography.Text>
          <div className="card-title-des">{description}</div>
          {largeText && (
            <Select
              defaultValue={largeText}
              options={[{ value: '测试', label: '测试' }]}
              style={{
                marginLeft: '380px',
              }}></Select>
          )}
        </div>

        <div className="cardChild">{children}</div>
      </div>
    </>
  )
}
