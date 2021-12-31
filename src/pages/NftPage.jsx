import React from 'react'
import Masonry from 'react-masonry-css';
import { NftCard } from '../components/cards/NftCard';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { NftAbout } from '../components/nft/NftAbout';
import { animations_object } from '../utils/animations/animations_object';
import image from '../utils/vector/server.svg'
export const NftPage = () => {
  const breakpointColumnsObj = {
    default: 4,
    1080: 3,
    768: 2,
    375: 1
  };

  const { intro } = animations_object;
  return (
    <section className="nft__page c95">
      <NftAbout />
      <div className={`wrap__nft ${ intro }`} style={{ animationDelay: '1.5s' }}>
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
      
      <BackgroundImage image={ image }/>
    </section>
  )
}
