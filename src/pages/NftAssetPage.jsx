import React, { useContext, useEffect } from 'react'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { NftAsset } from '../components/nft/NftAsset'
import { NftPurchase } from '../components/nft/NftPurchase'
import { NftGlobalStats } from '../components/nft/NftGlobalStats'
import { NftRelated } from '../components/nft/NftRelated'
import { scrollTop } from '../utils/functions/scrollTop'
import { NftAsset2 } from '../components/nft/NftAsset2'

const image = 'https://firebasestorage.googleapis.com/v0/b/crypto-1bf30.appspot.com/o/asset-background.svg?alt=media&token=df02a647-8b25-43d5-828f-1c3a7adc3436'

export const NftAssetPage = () => {
  useEffect(() => {
    scrollTop()
  }, [  ])
  return (
    <section className="nft__page c100">
      <div className="nft c100">
        <NftAsset />
        <NftGlobalStats />
        <NftAsset2 />
        {/* <NewsInfo /> */}
      </div>
      <div className="bottom--line mg--v--3"></div>
      <NftRelated />
      <BackgroundImage image={ image }/>
      {/* <NftPurchase /> */}
    </section>
  )
}
