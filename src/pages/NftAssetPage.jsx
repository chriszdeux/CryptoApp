import React, { useContext, useEffect } from 'react'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { NewsInfo } from '../components/news/NewsInfo'
import { NftAsset } from '../components/nft/NftAsset'
import { NftPurchase } from '../components/nft/NftPurchase'
import { NftGlobalStats } from '../components/nft/NftGlobalStats'
import { NftRelated } from '../components/nft/NftRelated'
import image from '../utils/vector/asset-background.svg'
import { DataContext } from '../context/context'
import { scrollTop } from '../utils/functions/scrollTop'
export const NftAssetPage = () => {
  useEffect(() => {
    scrollTop()
  }, [  ])
  return (
    <section className="nft__page c100">
      <div className="nft c100">
        <NftAsset />
        <NftGlobalStats />
        <NewsInfo />
      </div>
      <div className="bottom--line mg--v--3"></div>
      <NftRelated />
      <BackgroundImage image={ image }/>
      {/* <NftPurchase /> */}
    </section>
  )
}
