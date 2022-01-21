import React from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { DataContext } from '../../context/context';
import { useDataFunctions } from '../../hooks/useDataFunctions';
import { animations_object } from '../../utils/animations/animations_object'
import { SmallCardCoins } from '../cards/SmallCardCoins'
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';

export const Top10Crypto = () => {
  const { intro } = animations_object;
  const { loading, error, data } = useSelector(state => state.data_reducer)
  // debugger
  const { top10, handleTop10 } = useDataFunctions(  )

  useEffect(() => {
    handleTop10(data)
  }, [ data ])
  // debugger
  return (
    <div className={`wrapper c100 ${ intro }`}>
      <h2 className="wrapper--title" style={{ animationDelay: '1.6s' }}>Top 10 Cryptos</h2>
    <div className="wrapper__cards" >
      {
        loading
        ? <LoadingText />
        : error
        ? <ErrorConnect />
        : top10.map(item => (
          <SmallCardCoins key={ item.id } item={ item }/>     
          ))
          
        }     
    </div>
        </div>
  )
}
