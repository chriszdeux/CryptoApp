import React from 'react'
import shib from '../../temp/shib.png';
import { icons } from '../../utils/icons/icons_object';
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const NftUserPrice = ({ item }) => {
  const { regular_image, tags, user, user_image, price_eth } = item
  // debugger
  return (
    <div className="nft__data">
      <div className="nft__username">
        <figure>
          {
            user_image &&
            <LazyLoadImage src={ user_image } alt={ user } />
          }
        </figure>
        <h3>{ user }</h3>
      </div>

      <div className="nft__price">
        <div>
          { icons.eth_icon }
        </div>
        <h3>{ price_eth }</h3>
      </div>
      <div className='blur--background'></div>
    </div>
  )
}
