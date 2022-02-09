import React from 'react'
import { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'
import { useGainerLoser } from '../../hooks/useGainerLoser'
import { icons } from '../../utils/icons/icons_object'

export const AssetMarketCap = () => {
  const { data: {
    market_cap_usd,
    market_cap_change_percentage_24h
  } } = useContext(DataAssetContext)
  const { gainer, gainer_icon } = useGainerLoser(market_cap_change_percentage_24h)
  // debugger
  const marketCapUsdFormart = useFormatNumbers(market_cap_usd)
  const marketCapFormat = useFormatNumbers(market_cap_change_percentage_24h)
  return (
    <li>
      <h3>Market Cap</h3>
      <h4>${ marketCapUsdFormart }</h4>
      <div className={ gainer }>
        <p>{ gainer_icon } { marketCapFormat }%</p>
      </div>
    </li>
  )
}
