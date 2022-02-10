import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const ExchangeTableHeader = () => {
  return (
    <thead>
      <tr className="table__header">
        {/* <th className="favorite"> </th> */}
        <th className="rank"># Rank</th>
        <th className="coin--image">Exchange</th>
        <th className="coin--name">Name</th>
        <th className="country">Country</th>
        <th className="year">Year</th>
        <th className="volume">Volume</th>
        <th className="trust--score">Trust score</th>
        {/* <th className="supply">Circulating Supply</th>
        <th className="supply">Total Supply</th> */}
        <th className=""> { icons.dots_vertical_icon } </th>
        {/* <hr /> */}
      </tr>
    </thead>

  )
}
