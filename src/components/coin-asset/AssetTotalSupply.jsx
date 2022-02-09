import React from 'react'
import { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'
import { icons } from '../../utils/icons/icons_object'

export const AssetTotalSupply = () => {
  const { data: {
    total_supply,
    symbol
  }} = useContext(DataAssetContext)
  const totalSupplyFormat = useFormatNumbers(total_supply)

  return (
    <li className="total__supply">
      Total Supply 
      <span> ${ totalSupplyFormat } { symbol } { icons.server_icon }</span>      
    </li>
  )
}
