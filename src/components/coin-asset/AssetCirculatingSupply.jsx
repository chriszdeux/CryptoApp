import React, { useContext } from 'react'
import { DataAssetContext } from '../../context/context'

export const AssetCirculatingSupply = () => {
  const { data: {
    circulating_supply,
    symbol
  } } = useContext(DataAssetContext)
  return (
    <li>
      <h3>Circulating Supply <span>24h</span></h3>
      <h4>${ circulating_supply } { symbol }</h4>
    </li>
  )
}
