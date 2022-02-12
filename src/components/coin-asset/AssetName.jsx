import React, { useContext, useState } from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
import { DataAssetContext } from '../../context/context';
import { useDispatch } from 'react-redux';
import { actionWishlist } from '../../actions/actionWishlist';
import { useShowComponent } from '../../hooks/ShowComponent';
import { animations_object } from '../../utils/animations/animations_object';
import { WishlistPopup } from '../../pop-ups/WishlistPopup';
export const AssetName = () => {
  const { data  } = useContext(DataAssetContext)
  const { name, logo, symbol } = data
  // debugger
  const { showComponent, handleShowComponent } = useShowComponent()
  const { intro, exit } = animations_object
  const [animation, setAnimation] = useState(intro)
  const dispatch = useDispatch()
  // actionWishlist
  const handleWishItem = () => {
    dispatch( actionWishlist(data) )
    handleShowComponent(!showComponent)
    setTimeout(() => {
      setAnimation(exit)
      setTimeout(() => {
        handleShowComponent(!showComponent)
      }, 1000);
    }, 2000);
    
  }

  // debugger
  return (
    <>
    <div className="asset__name mg--b">
      <figure className="crypto__coin">
        <img src={ logo.small } alt={ name } className="coin--image" />
      </figure>
      <h2>{ name } <span>{ symbol }</span></h2>
      <div onClick={ handleWishItem }>
        { icons.star_icon }
      </div>
    </div>
    {
        showComponent &&
        <WishlistPopup values={{ animation, name }}/>
      }
    </>
  )
}
