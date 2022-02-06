import React, { useContext } from 'react'
import nft from '../../temp/nft.jpeg';
import chain from '../../temp/chain.jpg';
import { icons } from '../../utils/icons/icons_object';
import { DataContext } from '../../context/context';
export const HeaderStats = () => {
  const { nft:{ data: {
    regular_image,
    user_image,
    user,
    tags
  } } } = useContext(DataContext)
  return (
    <div className="header__stats">
      <figure className="user__banner">
        <img src={ regular_image } alt={ tags } />
        <figure className="user__profile">
          {
            user_image &&
            <img src={ user_image } alt={ user } />
          }
          <figcaption>{ user }<span>{ icons.check_icon }</span></figcaption>
        </figure>
      </figure>
    </div>
  )
}
