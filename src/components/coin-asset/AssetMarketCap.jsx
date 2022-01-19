import React from 'react'
import { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { useGainerLoser } from '../../hooks/useGainerLoser'
import { icons } from '../../utils/icons/icons_object'

export const AssetMarketCap = () => {
  const { data: {
    market_cap_usd,
    market_cap_change_percentage_24h
  } } = useContext(DataAssetContext)
  const { gainer, gainer_icon } = useGainerLoser(market_cap_change_percentage_24h)
  // debugger
  return (
    <li>
      <h3>Market Cap</h3>
      <h4>$26,854,842,521.23</h4>
      <div className={ gainer }>
        <p>{ gainer_icon } { market_cap_change_percentage_24h }%</p>
      </div>
    </li>
  )
}
