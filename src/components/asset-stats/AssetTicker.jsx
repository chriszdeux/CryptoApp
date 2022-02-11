import React from 'react'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'

export const AssetTicker = ({item}) => {
  const { date, price } = item
  const formatPrice = useFormatNumbers(price)
  return (
    <li className="tickers--item">
      <h3>{ date }</h3>
      <h3>${ formatPrice }</h3>
    </li>
  )
}
