import React from 'react'
import { ChartTest } from '../../pages/portafolio/ChartTest'
import { Balance } from './Balance'
import { DateOptions } from './DateOptions'

export const PortafolioChart = () => {
  return (
    <div className="portafolio c95">
      <div className="portafolio__chart c100 [d--b">
        <Balance />
        <DateOptions />
      </div>

      <div className="chart">
        <ChartTest />
      </div>
    </div>
  )
}
