import React from 'react'
import { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { icons } from '../../utils/icons/icons_object'

export const AssetTotalSupply = () => {
  const { data: {
    total_supply,
    symbol
  }} = useContext(DataAssetContext)
  return (
    <li className="total__supply">
      Total Supply 
      <span> ${ total_supply } { symbol } { icons.server_icon }</span>      
    </li>
  )
}
