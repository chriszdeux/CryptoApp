import React from 'react'
import { ChartTest } from './ChartTest'
import { DateOptions } from './DateOptions'

export const Chart = () => {
  return (
    <>
      <div className="portafolio__chart">
        <DateOptions />
        <div className="chart ">
          <ChartTest />
        </div>
      </div>

    </>
  )
}
