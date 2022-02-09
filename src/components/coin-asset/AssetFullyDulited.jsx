import React, { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'
import { useGainerLoser } from '../../hooks/useGainerLoser'
import { icons } from '../../utils/icons/icons_object'

export const AssetFullyDulited = () => {
  const { data: {
    market_cap_change_percentage_24h,
    fully_diluted_usd
  } } = useContext(DataAssetContext)
  const { gainer, gainer_icon } = useGainerLoser(market_cap_change_percentage_24h)
  const fullyFormat = useFormatNumbers(fully_diluted_usd)
  const marketChangeFormat = useFormatNumbers(market_cap_change_percentage_24h)
  return (
    <li className="dulited__market">
      <h3>Fully Dulited Market Cap</h3>
      <h4>${ fullyFormat}</h4>
      <div className={ gainer }>
        <p>{ gainer_icon } { marketChangeFormat }%</p>
      </div>
    </li>
  )
}
