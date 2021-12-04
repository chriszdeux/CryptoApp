import React from 'react'
import shib from '../../temp/shib.png';
import { icons } from '../../utils/icons/icons_object';
export const SmallCardCoins = () => {
  return (
    <div className="card">
      <figure className="card__image">
        <img className="card--image" src={ shib } alt="" />
      </figure>
      <div className="card__info">
        <h2>Bitcoin</h2>
        <h3>$1,654,325.45</h3>
      </div>
      <div className="card__percent">
        
        <h2> { icons.up_icon } 0.66%</h2>
      </div>
      <h3 className="rank">1</h3>
    </div>
  )
}
