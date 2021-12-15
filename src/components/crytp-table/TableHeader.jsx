import React from 'react'

export const TableHeader = () => {
  return (
    <tr className="table__header">
      {/* <th className="rank">#</th> */}
      <th className="coin--image">Coin</th>
      <th className="coin--name">Name</th>
      <th className="market--cap">7d Market Cap</th>
      <th className="volume">Volume(24h)</th>
      <th className="price">Price</th>
      <hr />
    </tr>
  )
}
