import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { ChartTest } from '../charts/ChartTest'
import { Balance } from './Balance'
import { Chart } from './Chart'
import { DateOptions } from './DateOptions'

export const PortafolioChart = () => {
  const { intro } = animations_object;
  return (
    <div className={`c95 ${ intro }`} style={{ animationDelay: '.3s' }}>
        <Balance />
        <Chart />
    </div>
  )
}
