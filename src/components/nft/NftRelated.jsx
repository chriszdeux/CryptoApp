import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { NftCard } from '../cards/NftCard'

export const NftRelated = () => {
  const { intro } = animations_object;
  return (
    <div className={`nft__related c95 ${ intro }`} style={{ animationDelay: '2s' }}>
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
