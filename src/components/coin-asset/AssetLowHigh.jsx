import React, { useState, useEffect, useContext } from 'react'
import { DataAssetContext } from '../../context/context';
// import { useEffect } from 'react/cjs/react.development';
import { icons } from '../../utils/icons/icons_object';


export const AssetLowHigh = () => {
  const { data: {
    high_24h_usd,
    low_24h_usd,
    current_price_usd
  } } = useContext(DataAssetContext)
  const [currentPercent, setCurrentPercent] = useState(0)

  const { low, high, currentPrice } = currentPercent
  const handlePercent = (high, low) => {
    debugger
    let n = (parseFloat(high) - parseFloat(low)).toFixed(4)
    console.log(n)
    debugger
  }
  debugger
  useEffect(() => {
    handlePercent(high_24h_usd, low_24h_usd)
  }, [ current_price_usd ])
  // const n = 100, n2 = 60, current = 80;
  // const range = n - n2;
  // // const percent = (range / current * 100).toFixed(1)
  // const percent = range / current * 100
  // debugger
  // const n2 = Math.floor(Math.random() * ( 200 - 100)) + 100;
  // debugger
  // console.log(`current %: ${ currentPrice }`)
  // const r = 
 
  return (
    <div className="asset__low__high mg--b">
      <h3>Low <span>${ low_24h_usd }</span></h3>
      <h3>High <span>${ high_24h_usd }</span></h3>
      <div className="progress__bar">
        <div className="current__progress" style={{ width: `${currentPrice}%` }}>
          <div className="progress--pointer" >
            { icons.up_icon }
            <p>{ current_price_usd }</p>
          </div>
        </div>
      </div>
    </div>
  )
}
