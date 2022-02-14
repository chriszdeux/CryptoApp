import React from 'react'
import Masonry from 'react-masonry-css';
import { NftCard } from '../components/cards/NftCard';
import { ErrorConnect } from '../components/errors/ErrorConnect';
import { LoadingText } from '../components/loading/LoadingText';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { NftAbout } from '../components/nft/NftAbout';
import { useFetchImagesNft } from '../hooks/fetchHooks/useFetchImagesNft';
import { animations_object } from '../utils/animations/animations_object';
const image = 'https://firebasestorage.googleapis.com/v0/b/crypto-1bf30.appspot.com/o/server.svg?alt=media&token=d5a28cc3-b2ba-4137-9e49-afdf3d2e1319'
export const NftPage = () => {
  const breakpointColumnsObj = {
    default: 4,
    1080: 3,
    768: 2,
    375: 1
  };
  const { loading, data, error } = useFetchImagesNft()
  const { intro } = animations_object;
  // debugger
  return (
    <section className="nft__page c95">
      <NftAbout />
      <div className={`wrap__nft ${ intro }`} style={{ animationDelay: '1.5s' }}>
        {
          loading
            ? <LoadingText />
            : error 
              ? <ErrorConnect />
              :
              data.map((item, index) => (
                <NftCard key={ item.id } values={{ item, index }}/>
              ))
        }
        
        
      </div>
      
      <BackgroundImage image={ image }/>
    </section>
  )
}
