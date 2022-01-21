import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const TableHeader = () => {
  return (
    <thead>
      <tr className="table__header">
        <th className="rank"># Rank</th>
        <th className="favorite"> </th>
        <th className="coin--image">Coin</th>
        <th className="coin--name">Name</th>
        <th className="price">Price</th>
        <th className="market--cap--7d">Price 24h</th>
        <th className="market--cap--24h">24h%</th>
        <th className="volume">Volume</th>
        <th className="supply">Circulating Supply</th>
        <th className="supply">Total Supply</th>
        <th className=""> { icons.dots_vertical_icon } </th>
        {/* <hr /> */}
      </tr>
    </thead>

  )
}
