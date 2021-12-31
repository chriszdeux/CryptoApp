import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'

export const NftAbout = () => {
  const { intro, intro_up } = animations_object;
  return (
    <div className={`nft__about mg--v--3 ${ intro }`}>
      <h2>What are NFTs?</h2>
      <p>
        A NFT (non-fungible token) is data added to a file that creates a unique signature. It can be an image file, a song, a tweet, a text posted on a website, a physical item, and various other digital formats.

        This basically means that someone can own a digital file (and that it's marked with code to differentiate it from any digital replicas).
      </p>
      <button className={`btn btn--primary mg--t ${ intro_up }`} style={{ animationDelay: '1s' }}>Learn more about NFTs</button>
    </div>
  )
}
