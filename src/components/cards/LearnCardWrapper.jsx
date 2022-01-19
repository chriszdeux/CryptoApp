import React from 'react'
import { AssetLearnCard } from './AssetLearnCard'
import { LearnAndEarnCard } from './LearnAndEarnCard'
import kraken from '../../temp/kraken.png';
import { animations_object } from '../../utils/animations/animations_object';
import { earn_data } from '../../earn-data/earn_data';
export const LearnCardWrapper = ({ handleShowComponent }) => {
  const { intro } = animations_object;
  const dataLearning = earn_data;
  return (
    <div className="wrapper learn__section">
      {/* <div className="learn__header ">
        <figure>
          <img src={ kraken } alt="" />
          <h3>Crypto <span>Earn $30</span></h3>
        </figure>
        <h2 className="done">Done</h2>
      </div> */}
      {/* <h2 className="learn--short--description mg">Description of the coin</h2> */}
      <div className={`wrapper__cards ${ intro }`}>
        {
          dataLearning.map(item => (
            <AssetLearnCard key={ item.id } values={ {handleShowComponent, item} }/>
          ))
        }
      </div>
    </div>
  )
}
