import React from 'react'
import { useFetchImagesNft } from '../../hooks/fetchHooks/useFetchImagesNft';
import { animations_object } from '../../utils/animations/animations_object'
import { NftCard } from '../cards/NftCard'
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';

export const NftRelated = () => {
  const { intro } = animations_object;
  const { data, loading, error } = useFetchImagesNft()
  return (
    <div className={`nft__related c95 ${ intro }`} style={{ animationDelay: '2s' }}>
      <h2>Nft related</h2>
      <div className="nft__related__wrap c100">
        {
          loading 
            ? <LoadingText />
            : error
              ? <ErrorConnect />
              : 
              data.map((item, index) => (
                <NftCard key={ item.id } values={{ item, index }} />
              ))
        }
        {/* <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard /> */}
      </div>
    </div>
  )
}
