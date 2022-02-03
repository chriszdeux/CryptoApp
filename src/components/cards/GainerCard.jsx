import React, { useEffect } from 'react';
import { icons } from '../../utils/icons/icons_object';
import kraken from '../../temp/kraken.png';
import { TopAsset } from './TopAsset';
import { animations_object } from '../../utils/animations/animations_object';
import { useContext } from 'react';
import { DataContext } from '../../context/context';
import { LoadingText } from '../loading/LoadingText';
import { ErrorConnect } from '../errors/ErrorConnect';
import { useDataFunctions } from '../../hooks/useDataFunctions';
export const GainerCard = ( { data } ) => {
  const { intro_up } = animations_object;
  // const { dataAssets:{ loading, error, data } } = useContext(DataContext)
  const { gainers, handleGainers } = useDataFunctions( )

  useEffect(() => {
    handleGainers(data)
  }, [data])
  // debugger
  return (
    <div className={`feature feature__gainers  pd `}>
      <h2>Gainers <span>{ icons.trending_up_icon }</span></h2>
      <ul className="feature__list">
        {
          gainers.map(item => (
            <TopAsset key={ item.id } item={ item }/>
            )) 
        }
      </ul>
      <div className="glass"></div>
    </div> 
  )
}
