import React from 'react'

export const TableHeader = () => {
  return (
    <tr className="table__header">
      <th className="rank"># Rank</th>
      <th className="coin--image">Coin</th>
      <th className="coin--name">Name</th>
      <th className="price">Price</th>
      <th className="market--cap--24h">24h%</th>
      <th className="market--cap--7d">7d%</th>
      <th className="volume">Volume(24h)</th>
      <th className="supply">Supply</th>
      <hr />
    </tr>
  )
}
