import React, { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'
import { useGainerLoser } from '../../hooks/useGainerLoser'
import { icons } from '../../utils/icons/icons_object'

export const AssetVolume = () => {
  const { data: {
    total_volume_usd,
    price_change_percentage_24h
  } } = useContext(DataAssetContext)
  const { gainer, gainer_icon } = useGainerLoser(price_change_percentage_24h)
  const volumeFormat = useFormatNumbers( total_volume_usd )
  const pricePercent24 = useFormatNumbers( price_change_percentage_24h )
  return (
    <li>
      <h3>Volume <span>24h</span></h3>
      <h4>${ volumeFormat }</h4>
      <div className={ gainer }>
        <p>{ gainer_icon } { pricePercent24 }%</p>
      </div>
    </li>
  )
}
