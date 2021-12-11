import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
export const AssetName = () => {
  return (
    <div className="asset__name mg--b">
      <figure className="crypto__coin">
        <img src={ kraken } alt="" className="coin--image" />
      </figure>
      <h2>Bitcoin <span>BTC</span></h2>
      { icons.star_icon }
    </div>
  )
}
