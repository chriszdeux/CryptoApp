import React, { useContext, useEffect, useState } from 'react'
import { icons } from '../../utils/icons/icons_object'
import shib from '../../temp/shib.png'
import { useShowComponent } from '../../hooks/ShowComponent'
import { PreviewTransactionNft } from './PreviewTransactionNft'
import { DataContext } from '../../context/context'

export const NftPrice = () => {
  const { showComponent, handleShowComponent } = useShowComponent()
  const { nft:{ data: {
   price_eth,
  } }, dataAssets: {data} } = useContext(DataContext)
  const { current_price } = data.length > 0 && data[1]
  const [price, setPrice] = useState({
    price: Number,
    eth: Number,
    total: Number
  })

  const { dollar, eth } = price
  useEffect(() => {
    if(data.length > 0) {
      setPrice({
        dollar: current_price,
        eth: price_eth,
        // total: price.price * price.eth
      })

    }
  }, [ data ])
  // debugger
  return (
    <>
    {
      data.length > 0 &&
      <div className="nft__price c95 pd">
        <h2>Current price</h2>
        <div className="nft__current__price">
          <div className="current__price">
            <figure>
             { icons.eth_icon }
            </figure>
            <h2>{ price_eth } ETH <span>( ${ dollar * eth })</span></h2>
          </div>
          <div className="nft__buy__offer">
            <button className="btn btn--primary"  >{ icons.wallet_icon } Buy now</button>
            <button className="btn btn--outline">{ icons.wallet_icon } Make Offer</button>
          </div>
        </div>
        <div className="glass"></div>
      </div>
    }
      {
        showComponent && <PreviewTransactionNft handleShowComponent={ handleShowComponent }/>
      }
    </>
  )
}
