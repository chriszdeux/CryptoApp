import React, { useState } from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
import phone from '../../utils/vector/phone.svg';
import { animations_object } from '../../utils/animations/animations_object';
import { DataContext } from '../../context/context';
import { useContext } from 'react';
import { useGetRandomAssets } from '../../hooks/useGetRandomAssets';
import { useEffect } from 'react';
import { LoadingText } from '../loading/LoadingText';
import { ErrorConnect } from '../errors/ErrorConnect';
export const SuggestedCard = () => {
  const { dataAssets:{data, loading, error} } = useContext(DataContext)
  const { singleAsset, handleSingleAsset } = useGetRandomAssets(!!data && data)
  const [currentPosition, setCurrentPosition] = useState(0)
  const [displayButton, setDisplayButton] = useState(true)
  // debugger
  const { name, image, high_24h } = singleAsset.length > 0 && singleAsset[currentPosition]
  const { intro_up } = animations_object;
  
  const [color, setColor] = useState('')
  
  useEffect(() => {
    (high_24h > 0)
    ? setColor('gainer--color')
    : setColor('loser--color')
    
  }, [currentPosition])
  
  
  const handleNext = () => {
    if(currentPosition === singleAsset.length - 1) {
      // debugger
      setCurrentPosition(0)
    } else {
      // debugger
      setCurrentPosition(currentPosition + 1)
    }
  }
  
  const handlePrev = () => {
    // debugger
    if(currentPosition <= 0) {
      // debugger
      setCurrentPosition(singleAsset.length - 1)
      
    } else {
      // debugger
      setCurrentPosition(currentPosition - 1)
    }
  }
  console.log(currentPosition)
  return (
    <div className={`suggested ${ intro_up }`} style={{ animationDelay: '.9s' }}>
      {
        loading
          ? <LoadingText />
          : error
            ? <ErrorConnect />
            : 
            <>
            <div className="suggested__asset">
        <figure>
          <img src={ image } alt="" />
        </figure>
        <h2>{ name }</h2>
        <h3 className={ color }>{ icons.up_icon } { high_24h }%</h3>
        <div>
          <button className="btn btn--primary">Learn More</button>
          <button className="btn btn--dismiss">Dismiss</button>
        </div>
      </div>

      <div className="change__suggestion">
        <div className="asset__prev__next">
          {
            currentPosition != singleAsset.length && 
              <div className="back" onClick={ handlePrev }>
                { icons.back_icon }
              </div>
          }

          <div className="forward" onClick={ handleNext }>
            { icons.forward_icon }
          </div>
        </div>
        <figure>
          <img src={ phone } alt="" />
        </figure>
      </div>
      <div className="glass"></div>
            </>
      }
    </div>
  )
}
