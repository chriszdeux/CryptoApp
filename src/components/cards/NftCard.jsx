import React from 'react'
import nft from '../../temp/nft.jpeg'
import { NftUserPrice } from './NftUserPrice'
export const NftCard = () => {
  return (
    <article className="nft__card">
      <figure>
        <img src={ nft } alt="" />
      </figure>

      <NftUserPrice />
    </article>
  )
}
