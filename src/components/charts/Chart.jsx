import React from 'react'
import { useFetchAssetChart } from '../../hooks/fetchHooks/useFetchAssetChart'
import { animations_object } from '../../utils/animations/animations_object'
import { AssetChart } from './AssetChart'
import { ChartTest } from './ChartTest'
import { DateOptions } from './DateOptions'

export const Chart = () => {
  const { intro } = animations_object;
  // debugger
  return (
    <>
      <div className={`portafolio__chart ${ intro }`}>
        <DateOptions />
        <div className="chart ">
          <ChartTest />
          {/* <AssetChart /> */}
        </div>
      </div>

    </>
  )
}
