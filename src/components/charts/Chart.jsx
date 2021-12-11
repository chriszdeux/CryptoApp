import React from 'react'
import { ChartTest } from './ChartTest'
import { DateOptions } from './DateOptions'

export const Chart = () => {
  return (
    <>
      <div className="portafolio__chart mg--b--3 pd--b">
        <DateOptions />
        <div className="chart mg--b">
          <ChartTest />
        </div>
      </div>

    </>
  )
}
