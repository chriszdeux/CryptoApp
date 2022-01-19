import React, { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { useGainerLoser } from '../../hooks/useGainerLoser'
import { icons } from '../../utils/icons/icons_object'

export const AssetFullyDulited = () => {
  const { data: {
    market_cap_change_percentage_24h,
    fully_diluted_usd
  } } = useContext(DataAssetContext)
  const { gainer, gainer_icon } = useGainerLoser(market_cap_change_percentage_24h)

  return (
    <li className="dulited__market">
      <h3>Fully Dulited Market Cap</h3>
      <h4>${ fully_diluted_usd }</h4>
      <div className={ gainer }>
        <p>{ gainer_icon } { market_cap_change_percentage_24h }%</p>
      </div>
    </li>
  )
}
