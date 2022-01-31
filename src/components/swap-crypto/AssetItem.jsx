import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/context';
import { useFetchAsset } from '../../hooks/fetchHooks/useFetchAsset';
import { useGainerLoser } from '../../hooks/useGainerLoser';
import shib from '../../temp/shib.png';
import { Divider } from '../helpers/Divider';

export const AssetItem = ({ item }) => {
  const { setHandleAsset } = useContext(DataContext)
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

   const { loading, error, data } = useFetchAsset( amount_dollar && id)
  //  debugger
   const  { gainer }  = useGainerLoser(price_change_percentage_24h)
  //  debugger
  const [realPrice, setRealPrice] = useState(0);
  // const [countBalance, setCountBalance] = useState(balance);
  useEffect(() => {
    setRealPrice(0)
    // debugger
    if(!loading) {
      setRealPrice( (data.current_price_usd?.replace(/\,/g, '') * amount_crypto).toFixed(2) )
    }
  }, [ data ])
  // debugger
  // debugger
  return (
      <>
    <li className="asset--item c100" onClick={ () => setHandleAsset({...item, realPrice}) }>
      <div>
        <figure className="asset--logo">
          <img src={ image } alt={ name } />
        </figure>
          <h3 className="asset--name"><strong>{ name }</strong> { symbol }</h3>
        </div>
        {
          amount_dollar
            ? 
            <h3 className="asset--price">{ amount_crypto } { symbol }<strong className={ gainer }> ${ realPrice } </strong></h3>
            :
            <h3 className="asset--price">${ current_price }<strong className={ gainer }>{ price_change_percentage_24h }%</strong></h3>

        }
    </li>
      <Divider />
      </>
  )
}
