import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
import { TopAsset } from './TopAsset';
import { animations_object } from '../../utils/animations/animations_object';

export const LoserCard = () => {
  const { intro_up } = animations_object;
  return (
    <div className={`feature feature__losers pd ${ intro_up }`} style={ { animationDelay: '.3s' } }>
      <h2 style={{ color: '#f56b6b' }}>Losers <span style={{ color: '#f56b6b' }}>{ icons.trending_down_icon }</span></h2>
      <ul className="feature__list">
        <TopAsset />
        <TopAsset />
        <TopAsset />
      </ul>
      <div className="glass"></div>

    </div> 
  )
}
