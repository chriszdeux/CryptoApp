import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { AssetContract } from './AssetContract'
import { AssetName } from './AssetName'
import { AssetNetwork } from './AssetNetwork'
import { AssetStat } from './AssetStat'
import { AssetTags } from './AssetTags'

export const AssetInfo = () => {
  return (
    <div className="asset__info c100">
        <div className="asset__network">
          <AssetName />
          <AssetStat />
          <AssetNetwork />
          <AssetContract />
          <AssetTags />
        </div>
      </div>
  )
}
