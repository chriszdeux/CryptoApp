import React from 'react';
import { icons } from '../../utils/icons/icons_object';
import kraken from '../../temp/kraken.png';
import { TopAsset } from './TopAsset';
import { animations_object } from '../../utils/animations/animations_object';
export const RandomAssetsCard = () => {
  const { intro_up } = animations_object;
  return (
    <div className={`feature feature__assets__random pd ${ intro_up }`} style={{ animationDelay: '.6s' }}>
      <h2>Watch this <span>{ icons.convert_icon }</span></h2>
      <ul className="feature__list">
        <TopAsset />
        <TopAsset />
        <TopAsset />
      </ul>
      <div className="glass"></div>
    </div> 
  )
}
