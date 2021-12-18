import React from 'react';
import { icons } from '../../utils/icons/icons_object';
import kraken from '../../temp/kraken.png';
import { TopAsset } from './TopAsset';
export const RandomAssetsCard = () => {
  return (
    <div className="feature__assets__random pd">
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
