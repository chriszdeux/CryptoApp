import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { AssetBtcEth } from './AssetBtcEth'
import { AssetContract } from './AssetContract'
import { AssetGlobalInfo } from './AssetGlobalInfo'
import { AssetLowHigh } from './AssetLowHigh'
import { AssetName } from './AssetName'
import { AssetSocialNetwork } from './AssetSocialNetwork'
import { AssetPrice } from './AssetPrice'
import { AssetStat } from './AssetStat'
import { AssetTags } from './AssetTags'
import { Divider } from '../helpers/Divider'

export const AssetInfo = () => {
  return (
    <div className="asset__info c100">
        <div className="asset__network ">
          <AssetName />
          <AssetStat />
          <AssetSocialNetwork />
          <AssetContract />
          <AssetTags />
        </div>
        <div className="asset__stats ">
          <div className="asset__stats__top">
            <AssetPrice />
            <AssetBtcEth />
            <AssetLowHigh />
          </div>
          <Divider />
          <AssetGlobalInfo />
        </div>
      </div>
  )
}
