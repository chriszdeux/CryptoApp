import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/context'
import nft from '../../temp/nft.jpeg'
import { NftUserPrice } from './NftUserPrice'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { animations_object } from '../../utils/animations/animations_object'
import { useIntersectionObserver } from '../../hooks/useIntersection'

export const NftCard = ({ values }) => {
  const {  handleNftData } = useContext(DataContext)
  const { item, index } = values
  const { intro, exit } = animations_object
  const assetRef = useRef(null)
  const isVisible = useIntersectionObserver(assetRef)
  // debugger
  return (
    <article className={`nft__card ${ isVisible ? intro : exit }`} ref={ assetRef } onClick={() => handleNftData(item, index)}>
      <Link to="/crypto/nft-asset">
      <figure>
        <LazyLoadImage src={ item.regular_image } alt={ item.tags } />
      </figure>
    </Link>
      <NftUserPrice item={ item }/>
    </article>
  )
}
    

