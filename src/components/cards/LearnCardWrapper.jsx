import React from 'react'
import { AssetLearnCard } from './AssetLearnCard'
import { LearnAndEarnCard } from './LearnAndEarnCard'
import kraken from '../../temp/kraken.png';
import { animations_object } from '../../utils/animations/animations_object';
export const LearnCardWrapper = ({ handleShowComponent }) => {
  const { intro } = animations_object;
  return (
    <div className="wrapper learn__section">
      <div className="learn__header ">
        <figure>
          <img src={ kraken } alt="" />
          <h3>Crypto <span>Earn $30</span></h3>
        </figure>
        <h2 className="done">Done</h2>
      </div>
      <h2 className="learn--short--description mg">Description of the coin</h2>
      <div className={`wrapper__cards ${ intro }`}>
        <AssetLearnCard handleShowComponent={ handleShowComponent }/>
        <AssetLearnCard handleShowComponent={ handleShowComponent }/>
        <AssetLearnCard handleShowComponent={ handleShowComponent }/>
        <AssetLearnCard handleShowComponent={ handleShowComponent }/>
      </div>
    </div>
  )
}
