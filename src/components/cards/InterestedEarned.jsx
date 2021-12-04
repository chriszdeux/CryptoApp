import React from 'react'
import { icons } from '../../utils/icons/icons_object';
import grow from '../../utils/vector/grow.svg';

export const InterestedEarned = () => {
  return (
    <div className="interest__card pd mg--b">
      
      <div className="learn__earn">
        <h2>Learn and earn</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, maxime.</p>
      </div>
      
      <h2 className="interest--earned">$38 <span>earned</span></h2>
      
      <figure className="study__image">
        <img src={ grow } alt="" />
      </figure>
      {/* {
        icons.foward_icon
      } */}
    </div>
  )
}
