import React from 'react'
import shib from '../../temp/shib.png';
export const NftUserPrice = () => {
  return (
    <div className="nft__data">
      <div className="nft__username">
        <figure>
          <img src={ shib } alt="" />
        </figure>
        <h3>Usernamex481</h3>
      </div>

      <div className="nft__price">
        <figure>
          <img src={ shib } alt="" />
        </figure>
        <h3>1.3eth</h3>
      </div>
    </div>
  )
}
