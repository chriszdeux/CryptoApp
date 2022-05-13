import React from 'react'
import { NftCard } from '../components/cards/NftCard';
import { ErrorConnect } from '../components/errors/ErrorConnect';
import { LoadingText } from '../components/loading/LoadingText';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { NftAbout } from '../components/nft/NftAbout';
import { useFetchImagesNft } from '../hooks/fetchHooks/useFetchImagesNft';
import { animations_object } from '../utils/animations/animations_object';
export const NftPage = () => {

  const { loading, data, error } = useFetchImagesNft()
  const { intro } = animations_object;

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
    </section>
  )
}
