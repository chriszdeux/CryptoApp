import React from 'react';
import { icons } from '../../utils/icons/icons_object';
import kraken from '../../temp/kraken.png';
import { TopAsset } from './TopAsset';
import { animations_object } from '../../utils/animations/animations_object';
export const GainerCard = () => {
  const { intro_up } = animations_object;
  return (
    <div className={`feature__gainers  pd ${ intro_up }`}>
      <h2>Gainers <span>{ icons.trending_up_icon }</span></h2>
      <ul className="feature__list">
        <TopAsset />
        <TopAsset />
        <TopAsset />
      </ul>
      <div className="glass"></div>
    </div> 
  )
}
