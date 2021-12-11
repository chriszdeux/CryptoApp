import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import { icons } from '../../utils/icons/icons_object';


export const AssetLowHigh = () => {
  
  const [currentPercent, setCurrentPercent] = useState({
    low: Number,
    high: Number,
    currentPrice: Number
  })

  const { low, high, currentPrice } = currentPercent
  const handlePercent = () => {
    const n = Math.floor(Math.random() * ( 300 - 150)) + 150;
    const n2 = Math.floor(Math.random() * ( 149 - 1)) + 1;
    const current = Math.floor(Math.random() * ( n - n2)) + n2;
    const range = (n - n2);
    // const temp = range - current
    // debugger
    // const temp = range / n2
    setCurrentPercent({
      low: n2,
      high: n,
      currentPrice: ( (current - range )/100 ).toFixed(1)
    })
    console.log(`min: ${n2} max: ${n} range: ${range} current price: ${current}`)
  }

  useEffect(() => {
    handlePercent()
  }, [  ])
  // const n = 100, n2 = 60, current = 80;
  // const range = n - n2;
  // // const percent = (range / current * 100).toFixed(1)
  // const percent = range / current * 100
  // debugger
  // const n2 = Math.floor(Math.random() * ( 200 - 100)) + 100;
  // debugger
  console.log(`current %: ${ currentPrice }`)
  // const r = 
 
  return (
    <div className="asset__low__high mg--b">
      <h3>Low <span>${ low }</span></h3>
      <h3>High <span>${ high }</span></h3>
      <div className="progress__bar">
        <div className="current__progress" style={{ width: `${currentPrice}%` }}>
          <div className="progress--pointer" >
            { icons.up_icon }
            {/* <p>{ current }</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
