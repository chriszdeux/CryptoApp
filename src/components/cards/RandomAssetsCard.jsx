import React, { useContext } from 'react';
import { icons } from '../../utils/icons/icons_object';
import kraken from '../../temp/kraken.png';
import { TopAsset } from './TopAsset';
import { animations_object } from '../../utils/animations/animations_object';
import { DataContext } from '../../context/context';
import { useGetRandomAssets } from '../../hooks/useGetRandomAssets';
import { LoadingText } from '../loading/LoadingText';
import { ErrorConnect } from '../errors/ErrorConnect';
export const RandomAssetsCard = () => {
  const { dataAssets:{data, loading, error} } = useContext(DataContext)
  const { randomAssets, handleRandomAssets } = useGetRandomAssets(!!data && data)
  // debugger
  const { intro_up } = animations_object;
  return (
    <div className={`feature feature__assets__random pd `} >
      <h2>Watch this <span onClick={ handleRandomAssets }>{ icons.convert_icon }</span></h2>
      <ul className="feature__list">
        {
          loading
            ? <LoadingText />
            : error 
              ? <ErrorConnect />
              : randomAssets.map((item, index) => (
                <TopAsset key={ `${item}${index}` } item={ item }/>
              ))
        }
      </ul>
      <div className="glass"></div>
    </div> 
  )
}
