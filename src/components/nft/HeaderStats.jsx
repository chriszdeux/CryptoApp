import React from 'react'
import nft from '../../temp/nft.jpeg';
import chain from '../../temp/chain.jpg';
import { icons } from '../../utils/icons/icons_object';
export const HeaderStats = () => {
  return (
    <div className="header__stats">
      <figure className="user__banner">
        <img src={ chain } alt="" />
        <figure className="user__profile">
          <img src={ nft } alt="" />
          <figcaption>username 21521 <span>{ icons.check_icon }</span></figcaption>
        </figure>
      </figure>
    </div>
  )
}
