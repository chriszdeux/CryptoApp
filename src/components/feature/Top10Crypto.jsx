import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react/cjs/react.development';
import { DataContext } from '../../context/context';
import { useDataFunctions } from '../../hooks/useDataFunctions';
import { animations_object } from '../../utils/animations/animations_object'
import { SmallCardCoins } from '../cards/SmallCardCoins'
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';

export const Top10Crypto = ({ values }) => {
  const { top10, message } = values
  const { intro } = animations_object;
  // debugger

 
  // debugger
  return (
    <div className={`wrapper c100 `} >
      <h2 className="wrapper--title" >{ message }</h2>
    <div className="wrapper__cards" >
      {
        top10.map(item => (
          <SmallCardCoins key={ item.id } item={ item }/>     
        ))
      }   
    </div>
        </div>
  )
}
