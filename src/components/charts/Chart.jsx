import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { ChartTest } from './ChartTest'
import { DateOptions } from './DateOptions'

export const Chart = () => {
  const { intro } = animations_object;
  return (
    <>
      <div className={`portafolio__chart ${ intro }`}>
        <DateOptions />
        <div className="chart ">
          <ChartTest />
        </div>
      </div>

    </>
  )
}
