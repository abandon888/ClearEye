import type { Dayjs } from 'dayjs'
import React from 'react'
import { Calendar, theme } from 'antd'
import type { CalendarProps } from 'antd'

import locale from 'antd/lib/calendar/locale/zh_CN.js'

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('YYYY-MM-DD'), mode)
}

const PageCalendar: React.FC = () => {
  const { token } = theme.useToken()

  const wrapperStyle: React.CSSProperties = {
    width: 450,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    position: 'relative',
    top: -50,
    left: -20,
  }

  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        locale={locale}
      />
    </div>
  )
}

export default PageCalendar
