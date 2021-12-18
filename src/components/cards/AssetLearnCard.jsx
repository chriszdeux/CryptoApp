import React from 'react'
import { useShowComponent } from '../../hooks/ShowComponent';
import image from '../../temp/kraken.png';
export const AssetLearnCard = ({ handleShowComponent }) => {
  return (
    <article className="learn__card mg--r--3" onClick={ handleShowComponent }>
      <figure className="mg--b">
        <img src={ image } alt="" />
      </figure>
      <h2 className="mg--b pd">What is crypto</h2>
      <h3 className="mg--b pd">Earn $10 <span>3min</span></h3>
    </article>
  )
}
