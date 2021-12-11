import React from 'react'
import { ChartTest } from '../charts/ChartTest'
import { Balance } from './Balance'
import { Chart } from './Chart'
import { DateOptions } from './DateOptions'

export const PortafolioChart = () => {
  return (
    <div className="portafolio c95">
        <Balance />
        <Chart />
    </div>
  )
}
