import React, { useEffect } from 'react'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { NftAsset } from '../components/nft/NftAsset'
import { NftPurchase } from '../components/nft/NftPurchase'
import { NftGlobalStats } from '../components/nft/NftGlobalStats'
import { NftRelated } from '../components/nft/NftRelated'
import { scrollTop } from '../utils/functions/scrollTop'
import { NftAsset2 } from '../components/nft/NftAsset2'

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
      </div>
      <div className="bottom--line mg--v--3"></div>
      <NftRelated />
    </section>
  )
}
