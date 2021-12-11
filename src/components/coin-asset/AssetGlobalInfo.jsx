import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { AssetCirculatingSupply } from './AssetCirculatingSupply'
import { AssetFullyDulited } from './AssetFullyDulited'
import { AssetMarketCap } from './AssetMarketCap'
import { AssetTotalSupply } from './AssetTotalSupply'
import { AssetVolume } from './AssetVolume'

export const AssetGlobalInfo = () => {
  return (
    <ul className="asset__global__stats mg--b">
      <AssetMarketCap />
      <AssetFullyDulited />
      <AssetVolume />
      <AssetCirculatingSupply />
      <AssetTotalSupply />
    </ul>
  )
}
     

