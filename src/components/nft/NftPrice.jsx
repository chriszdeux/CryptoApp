import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import shib from '../../temp/shib.png'
import { useShowComponent } from '../../hooks/ShowComponent'
import { PreviewTransactionNft } from './PreviewTransactionNft'

export const NftPrice = () => {
  const { showComponent, handleShowComponent } = useShowComponent()
  return (
    <>
      <div className="nft__price c95 pd">
        <h2>Current price</h2>
        <div className="nft__current__price">
          <div className="current__price">
            <figure>
              <img src={ shib } alt="" />
            </figure>
            <h2>1.2 ETH <span>( $4,521.33 )</span></h2>
          </div>
          <div className="nft__buy__offer">
            <button className="btn btn--primary" onClick={ handleShowComponent }>{ icons.wallet_icon } Buy now</button>
            <button className="btn btn--outline">{ icons.wallet_icon } Make Offer</button>
          </div>
        </div>
        <div className="glass"></div>
      </div>
      {
        showComponent && <PreviewTransactionNft handleShowComponent={ handleShowComponent }/>
      }
    </>
  )
}
