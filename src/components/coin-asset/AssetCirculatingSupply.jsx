import React, { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'

export const AssetCirculatingSupply = () => {
  const { data: {
    circulating_supply,
    symbol
  } } = useContext(DataAssetContext)
  const supplyFormat = useFormatNumbers(circulating_supply)
  return (
    <li>
      <h3>Circulating Supply <span>24h</span></h3>
      <h4>${ supplyFormat } { symbol }</h4>
    </li>
  )
}
