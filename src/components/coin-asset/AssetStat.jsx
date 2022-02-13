import React, { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'

export const AssetStat = () => {
  const { data: {
    rank,
    categories,
    twitter_followers

  } } = useContext(DataAssetContext)
  const followersFormat = useFormatNumbers( twitter_followers )
  return (
    <ul className="asset__stat mg--b">
      <li>Rank #{ rank }</li>
      <li>{ categories[0] }</li>
      <li>{ followersFormat } <span className='mg--l'>twitter followers</span></li>
    </ul>
  )
}
