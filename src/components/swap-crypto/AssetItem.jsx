import React, { useContext } from 'react'
import { DataContext } from '../../context/context';
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
   } = item
   const  { gainer }  = useGainerLoser(price_change_percentage_24h)
  //  debugger
  return (
      <>
    <li className="asset--item c100" onClick={ () => setHandleAsset(item) }>
      <div>
        <figure className="asset--logo">
          <img src={ image } alt={ name } />
        </figure>
          <h3 className="asset--name"><strong>{ name }</strong> { symbol }</h3>
        </div>
      <h3 className="asset--price">${ current_price }<strong className={ gainer }>{ price_change_percentage_24h }%</strong></h3>
    </li>
      <Divider />
      </>
  )
}
