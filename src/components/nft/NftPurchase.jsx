import React from 'react'
import image from '../../temp/chain.jpg';
export const NftPurchase = () => {
  return (
    <div className="nft__purchase">
      <div className="purchase__content">
        <h2>Congratulations!</h2>
        <figure>
          <img src={ image } alt="" />
          <img src={ image } alt="" />
        </figure>
        <h3>Item Name</h3>
        <h3>Order No: <span>34098sfsdf8ejhwe8</span></h3>
      </div>

      <button className="btn btn--primary">Accept</button>
      <div className="purchase__layout"></div>
    </div>
  )
}
