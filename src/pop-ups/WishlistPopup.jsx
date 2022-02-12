import React from 'react'
import { icons } from '../utils/icons/icons_object'

export const WishlistPopup = ({values}) => {
  const { animation, name } = values
  return (
    <div className={`wishlist__popup ${ animation }`}>
      <h2>{ name }</h2>
      <h3>Asset added to wishlist </h3>
      <div className='done'>
      { icons.done_icon }
      </div>
    </div>
  )
}
