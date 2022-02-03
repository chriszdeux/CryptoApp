import React, { useContext, useEffect } from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
import { TopAsset } from './TopAsset';
import { animations_object } from '../../utils/animations/animations_object';
import { DataContext } from '../../context/context';
import { LoadingText } from '../loading/LoadingText';
import { ErrorConnect } from '../errors/ErrorConnect';
import { useDataFunctions } from '../../hooks/useDataFunctions';

export const LoserCard = ( {data} ) => {
  const { intro_up } = animations_object;
  const { losers, handleLosers } = useDataFunctions(  )

  useEffect(() => {
    handleLosers(data)
  }, [ data ])

  return (
    <div className={`feature feature__losers pd `} >
      <h2 style={{ color: '#f56b6b' }}>Losers <span style={{ color: '#f56b6b' }}>{ icons.trending_down_icon }</span></h2>
      <ul className="feature__list">
      {
        losers.map(item => (
          <TopAsset key={ item.id } item={ item }/>
        ))  
      }
      </ul>
      <div className="glass"></div>

    </div> 
  )
}
