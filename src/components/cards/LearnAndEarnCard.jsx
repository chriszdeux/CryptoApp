import React from 'react'
import { icons } from '../../utils/icons/icons_object';
import study from '../../utils/vector/study.svg';

export const LearnAndEarnCard = () => {
  return (
    <div className="interest__card pd mg--b">
      
      <div className="learn__earn">
        <h2>Learn and earn</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, maxime.</p>
      </div>
      
      <h2 className="earned">$165 <span>earned</span></h2>
      
      <figure className="study__image">
        <img src={ study } alt="" />
      </figure>
      {
        icons.foward_icon
      }
    </div>
  )
}
