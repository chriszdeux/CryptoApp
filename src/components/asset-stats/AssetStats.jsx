import React from 'react'
import { Divider } from '../helpers/Divider'

export const AssetStats = () => {
  return (
    <aside className='tickers'>
      <div className="tickers__header">
        <h3>time</h3>
        <h3>Price</h3>
      </div>
      <ul className="tickers__list">
        <li className="tickers--item">
          <h3>Mon Jan 17 2022 08:59:03</h3>
          <h3>$0.00215</h3>
          {/* <Divider /> */}
        </li>
      </ul>
    </aside>
  )
}
