import React from 'react'
import { useShowComponent } from '../../hooks/ShowComponent';
import image from '../../temp/kraken.png';
import { animations_object } from '../../utils/animations/animations_object';
export const AssetLearnCard = ({ handleShowComponent }) => {
  const { intro_right } = animations_object;
  return (
    <article className={`learn__card mg--r--3 ${ intro_right }`} onClick={ handleShowComponent }>
      <figure className="mg--b">
        <img src={ image } alt="" />
      </figure>
      <h2 className="mg--b pd">What is crypto</h2>
      <h3 className="mg--b pd">Earn $10 <span>3min</span></h3>
    </article>
  )
}
