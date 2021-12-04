import React from 'react'
import kraken from '../../temp/kraken.png';
import { icons } from '../../utils/icons/icons_object';
export const SmallCardExchange = () => {
  return (
    <div className="card">
      <figure className="card__image">
        <img className="card--image" src={ kraken } alt="" />
      </figure>
      <div className="card__info">
        <h2>Bitcoin</h2>
        <h3>Trade Volume 24h</h3>
        <h3 className="trade--volume">26,847,856,982,321 btc</h3>
      </div>
      <h3 className="rank">1</h3>
    </div>
  )
}
