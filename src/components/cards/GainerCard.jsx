import React from 'react';
import { icons } from '../../utils/icons/icons_object';
import kraken from '../../temp/kraken.png';
import { TopAsset } from './TopAsset';
export const GainerCard = () => {
  return (
    <div className="feature__gainers pd">
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
