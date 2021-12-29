import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { NftSocial } from './NftSocial'
import { NftPrice } from './NftPrice'
import { NftContract } from './NftContract'
export const NftGeneralStats = () => {
  return (
    <div className="nft__global__stats">
      <NftSocial />

      <NftPrice />

      <NftContract />
    </div>
  )
}
