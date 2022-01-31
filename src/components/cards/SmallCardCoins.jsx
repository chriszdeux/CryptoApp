import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/context';
import shib from '../../temp/shib.png';
import { icons } from '../../utils/icons/icons_object';
export const SmallCardCoins = ({ item }) => {
  // debugger
  const { setHandleAsset } = useContext(DataContext)
  const { name, image, current_price, price_change_percentage_24h, market_cap_rank, id } = item
  const [color, setColor] = useState('')

  useEffect(() => {
    (price_change_percentage_24h > 0)
    ? setColor('gainer--color')
    : setColor('loser--color')
    
  }, [item])
  // debugger
  return (
    <Link to="/crypto-asset">
    <div className="card mg" onClick={ () => setHandleAsset(id) }>
      
      <figure className="card__image">
        <img className="card--image" src={ image } alt="" />
      </figure>
      <div className="card__info">
        <h2>{ name }</h2>
        <h3>${ current_price }</h3>
      </div>
      <div className={`card__percent ${ color }`}>   
        <h2> { price_change_percentage_24h > 0 ?icons.up_icon : icons.down_icon} { price_change_percentage_24h }%</h2>
      </div>
      <h3 className="rank">{ market_cap_rank }</h3>
    </div>
    </Link>
  )
}
