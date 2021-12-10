import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const AssetName = () => {
  return (
    <div className="asset__name">
      <figure>
        <img src="" alt="" />
      </figure>
      <h2>Bitcoin <span>BTC</span></h2>
      { icons.star_icon }
    </div>
  )
}
