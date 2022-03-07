import React, { useEffect, useRef } from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react/cjs/react.development';
import { DataContext } from '../../context/context';
import { useDataFunctions } from '../../hooks/useDataFunctions';
import { useIntersectionObserver } from '../../hooks/useIntersection';
import { animations_object } from '../../utils/animations/animations_object'
import { SmallCardCoins } from '../cards/SmallCardCoins'
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';

export const Top10Crypto = ({ values }) => {
  const { top10, message } = values
  const { intro, exit } = animations_object;
  // debugger

  const assetRef = useRef(null)
  const isVisible = useIntersectionObserver(assetRef)
  // debugger
  return (
    <div className={`wrapper c100 ${ isVisible ? intro : exit }`} ref={ assetRef }>
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
