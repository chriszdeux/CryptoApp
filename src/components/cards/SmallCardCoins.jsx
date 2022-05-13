import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/context';
import { useFormatNumbers } from '../../hooks/useFormatNumbers';
import shib from '../../temp/shib.png';
import { icons } from '../../utils/icons/icons_object';
export const SmallCardCoins = ({ item }) => {
  // debugger
  const { setHandleAsset } = useContext(DataContext)
  const { name, image, current_price, price_change_percentage_24h, market_cap_rank, id } = item
  const [color, setColor] = useState('')
  const { trending_down_icon, 
    trending_up_icon, down_icon, up_icon } = icons 
  const priceFormat = useFormatNumbers(current_price)
  useEffect(() => {
    (price_change_percentage_24h > 0)
    ? setColor('gainer--color')
    : setColor('loser--color')
    
  }, [item])
  // debugger
  return (
    <Link to={ `/crypto/crypto-asset/${id}` }>
    <div className="card mg" onClick={ () => setHandleAsset(id) }>
      <span className={ color }>{ price_change_percentage_24h > 0 ? trending_up_icon : trending_down_icon}</span>
      <figure className="card__image">
        <img className="card--image" src={ image } alt="" />
        {/* <img className="card--image--bg" src={ image } alt="" /> */}
      </figure>
      <div className="card__info">
        <h2>{ name }</h2>
        <h3>${ current_price > 1 ? priceFormat : current_price}</h3>
      </div>
      <div className={`card__percent ${ color }`}>   
        <h2> { price_change_percentage_24h > 0 ?up_icon : down_icon} { price_change_percentage_24h }%</h2>
      </div>
      <h3 className="rank">{ market_cap_rank }</h3>
    </div>
    </Link>
  )
}
