import React from 'react'
import { NftCard } from '../cards/NftCard'

export const NftRelated = () => {
  return (
    <div className="nft__related c95">
      <h2>Nft related</h2>
      <div className="nft__related__wrap c100">
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
    </div>
  )
}
