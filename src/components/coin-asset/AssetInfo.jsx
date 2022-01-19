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
import { animations_object } from '../../utils/animations/animations_object'

export const AssetInfo = () => {
  const { intro } = animations_object;
  return (
    <div className="asset__info c100">
        <div className={`asset__network mg--b ${ intro }`}>
          <AssetName />
          <AssetStat />
          <AssetSocialNetwork />
          <AssetContract />
          {/* <AssetTags /> */}

        <div className="glass"></div>
        </div>

        <div className={`asset__stats ${ intro }`} style={{ animationDelay: '.5s' }}>
          <div className="asset__stats__top">
            <AssetPrice />
            <AssetBtcEth />
            {/* <AssetLowHigh /> */}
          </div>
          <Divider />
          <AssetGlobalInfo />
        <div className="glass"></div>
        </div>

      </div>
  )
}
