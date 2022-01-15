import React from 'react'
import kraken from '../../temp/kraken.png';
import { icons } from '../../utils/icons/icons_object';
export const SmallCardExchange = ({ item }) => {
  // debugger
  const { id, name, image, trade_volume_24h_btc, trust_score_rank } = item
  return (
    <div className="card mg">
      <figure className="card__image">
        <img className="card--image" src={ image } alt={ id } />
      </figure>
      <div className="card__info">
        <h2>{ name }</h2>
        <h3>Trade Volume 24h</h3>
        <h3 className="trade--volume">{ trade_volume_24h_btc } btc</h3>
      </div>
      <h3 className="rank">{ trust_score_rank }</h3>
    </div>
  )
}
