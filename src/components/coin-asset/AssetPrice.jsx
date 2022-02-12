import React, { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'
import { icons } from '../../utils/icons/icons_object'

export const AssetPrice = () => {
  const { data:{
    name,
    symbol, 
    current_price_usd,
    market_cap_change_percentage_24h
  } } = useContext(DataAssetContext)

  const priceFormat = useFormatNumbers(current_price_usd)
  // debugger
  return (
    <div className="asset__price c100 mg--b">
      <h3>{ name } price <span>( { symbol } )</span></h3>
      <h2>${ current_price_usd > 1 ? priceFormat : current_price_usd } <span className={`${ market_cap_change_percentage_24h > 0 ? 'gainer--background' : 'loser--background' }`}>{ market_cap_change_percentage_24h > 0 ? icons.up_icon : icons.down_icon} { market_cap_change_percentage_24h }%</span></h2>
    </div>
  )
}
