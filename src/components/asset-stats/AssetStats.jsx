import React from 'react'
import { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { animations_object } from '../../utils/animations/animations_object'
import { Divider } from '../helpers/Divider'
import { AssetTicker } from './AssetTicker'

export const AssetStats = () => {
  const { handleDataFromChart } = useContext(DataAssetContext)
  // debugger
  const { intro } = animations_object
  return (
    <aside className={`aside__content ${ intro }`} style={{ animationDelay: '1.5s' }}>
      <div className='tickers'>
        <div className="tickers__header">
          <h3>Date</h3>
          <h3>Price</h3>
        </div>
        <ul className="tickers__list">
          {
            handleDataFromChart.length > 0 &&
            handleDataFromChart.map(item => (
              <AssetTicker item={ item }/>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}
