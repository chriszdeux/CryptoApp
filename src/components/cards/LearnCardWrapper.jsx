import React from 'react'
import { AssetLearnCard } from './AssetLearnCard'
import { LearnAndEarnCard } from './LearnAndEarnCard'
import kraken from '../../temp/kraken.png';
export const LearnCardWrapper = () => {
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
      <div className="wrapper__cards ">
        <AssetLearnCard />
        <AssetLearnCard />
        <AssetLearnCard />
        <AssetLearnCard />
      </div>
    </div>
  )
}
