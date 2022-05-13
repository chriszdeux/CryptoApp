import React, { useEffect } from 'react'
import { AssetBtcEth } from './AssetBtcEth'
import { AssetContract } from './AssetContract'
import { AssetGlobalInfo } from './AssetGlobalInfo'
import { AssetName } from './AssetName'
import { AssetSocialNetwork } from './AssetSocialNetwork'
import { AssetPrice } from './AssetPrice'
import { AssetStat } from './AssetStat'
import { Divider } from '../helpers/Divider'
import { animations_object } from '../../utils/animations/animations_object'
import { useContext } from 'react'
import { DataAssetContext, DataContext } from '../../context/context'

export const AssetInfo = () => {
  const { intro } = animations_object;
  const { setHandleAsset, showComponentHook:{ handleShowComponent2 }, dataAssets, handleAsset, setHandleBuyAsset  } = useContext(DataContext)

  const { data } = useContext(DataAssetContext) 

  const handleSubmitAsset = () => {
    // debugger
    setHandleBuyAsset({
        id: data?.id,
        name: data?.name,
        image: data?.logo.small,
        symbol: data?.symbol,
        ath_date: data?.ath_date,
        current_price: data?.current_price_usd,
        market_cap: data.market_cap_usd,

        market_cap_rank: data?.rank,

        total_volume: data.total_volume_usd
        ,


        high_24h: data?.high_24h_usd,
        low_24h: data?.low_24h_usd,
        price_change_percentage_24h: 
          data?.price_change_percentage_24h,
        market_cap_change_percentage_24h: data?.market_cap_change_percentage_24h,

        total_supply: 
        data?.total_supply_usd,
        circulating_supply: 
          data?.circulating_supply_usd,
        ath: 
          data?.ath,
        price_change_24h: 
        data?.price_change_percentage_24h_in_currency_usd
    })
    handleShowComponent2(true)
  }
  return (
    <div className="asset__info c100">
        <div className={`asset__network mg--b ${ intro }`}>
          <AssetName   />
          <AssetStat />
          <AssetSocialNetwork /> 
          <AssetContract />
          <button className='btn btn--primary' onClick={ handleSubmitAsset }>Buy now</button>
        </div>

        <div className={`asset__stats ${ intro }`} style={{ animationDelay: '.5s' }}>
          <div className="asset__stats__top">
            <AssetPrice />
            <AssetBtcEth />
          </div>
          <Divider />
          <AssetGlobalInfo />
        </div>
      </div>
  )
}
