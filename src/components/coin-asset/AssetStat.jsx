import React, { useContext } from 'react'
import { DataAssetContext } from '../../context/context'

export const AssetStat = () => {
  const { data: {
    rank,
    categories,
    twitter_followers

  } } = useContext(DataAssetContext)
  return (
    <ul className="asset__stat mg--b">
      <li>Rank #{ rank }</li>
      <li>{ categories[0] }</li>
      <li>{ twitter_followers } <span>twitter followers</span></li>
    </ul>
  )
}
