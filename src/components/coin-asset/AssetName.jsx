import React, { useContext } from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
import { DataAssetContext } from '../../context/context';
export const AssetName = () => {
  const { data: { name, image, symbol } } = useContext(DataAssetContext)
  return (
    <div className="asset__name mg--b">
      <figure className="crypto__coin">
        <img src={ image.small } alt={ name } className="coin--image" />
      </figure>
      <h2>{ name } <span>{ symbol }</span></h2>
      { icons.star_icon }
    </div>
  )
}
