import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../../context/context';
import { useFetchAsset } from '../../hooks/fetchHooks/useFetchAsset';
import { useGainerLoser } from '../../hooks/useGainerLoser';
import shib from '../../temp/shib.png';
import { Divider } from '../helpers/Divider';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useFormatNumbers } from '../../hooks/useFormatNumbers';
import { animations_object } from '../../utils/animations/animations_object';
import { useIntersectionObserver } from '../../hooks/useIntersection';

export const AssetItem = ({ values }) => {
  const { item, handleShowComponent2 } = values
  const { setHandleBuyAsset } = useContext(DataContext)
  const { 
    id,
    name,
    current_price,
    price_change_percentage_24h,
    image,
    symbol,
    amount_dollar,
    amount_crypto
   } = item
   const assetRef = useRef(null)
  const isVisible = useIntersectionObserver(assetRef)
  const { intro, exit } = animations_object
  //  const { loading, error, data } = useFetchAsset( id )
  //  const { loading, error, data } = useFetchAsset( amount_dollar && id)
  //  debugger
   const  { gainer }  = useGainerLoser(price_change_percentage_24h)
  //  debugger
  const [realPrice, setRealPrice] = useState(0);
  const priceFormat = useFormatNumbers(current_price)
  const percent24hFormat = useFormatNumbers(price_change_percentage_24h)
  // const [countBalance, setCountBalance] = useState(balance);
  // useEffect(() => {
  //   setRealPrice(0)
  //   // debugger
  //   if(data || data.length > 0 || data !== undefined) {
  //     setRealPrice( (data.current_price_usd?.replace(/\,/g, '') * amount_crypto).toFixed(2) )
  //   }
  // }, [ data ])
  // debugger

  const handleAssetClose = () => {
    setHandleBuyAsset({...item, realPrice})
    handleShowComponent2()
    // setTimeout(() => {
    // }, 200);
  }
  // debugger
  return (
      <>
    <li className={`asset--item c100 ${ isVisible ? intro : exit }`} onClick={ handleAssetClose  } ref={ assetRef }>
      <div>
        <figure className="asset--logo">
          <LazyLoadImage src={ image } alt={ name } />
        </figure>
          <h3 className="asset--name"><strong>{ name }</strong> { symbol }</h3>
        </div>
        <h3 className="asset--price">${ current_price > 1 ? priceFormat : current_price }<strong className={ gainer }>{ percent24hFormat }%</strong></h3>
        {/* {
          amount_dollar
            ? 
            <h3 className="asset--price">{ amount_crypto } { symbol }<strong className={ gainer }> ${ realPrice } </strong></h3>
            :

        } */}
    </li>
      <Divider />
      </>
  )
}
