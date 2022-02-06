import React, { useContext } from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
import { DataAssetContext } from '../../context/context';
import { useDispatch } from 'react-redux';
import { actionWishlist } from '../../actions/actionWishlist';
export const AssetName = () => {
  const { data  } = useContext(DataAssetContext)
  const { name, logo, symbol } = data
  // debugger
  const dispatch = useDispatch()
  // actionWishlist
  const handleWishItem = () => {
    dispatch( actionWishlist(data) )
  }

  // debugger
  return (
    <div className="asset__name mg--b">
      <figure className="crypto__coin">
        <img src={ logo.small } alt={ name } className="coin--image" />
      </figure>
      <h2>{ name } <span>{ symbol }</span></h2>
      <div onClick={ handleWishItem }>
        { icons.star_icon }
      </div>
    </div>
  )
}
