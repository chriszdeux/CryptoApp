import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../../context/context';
import { useDataFunctions } from '../../hooks/useDataFunctions';
import { useIntersectionObserver } from '../../hooks/useIntersection';
import { animations_object } from '../../utils/animations/animations_object'
import { SmallCardExchange } from '../cards/SmallCardExchange';
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';

export const Top10Exchange = () => {
  const { dataExchanges: { loading, error, data } } = useContext(DataContext)
  const { top10Exchanges, handleTop10Exchange } = useDataFunctions()
  const { intro, exit } = animations_object;
  const assetRef = useRef(null)
  const isVisible = useIntersectionObserver(assetRef)
  // debugger
  useEffect(() => {
    handleTop10Exchange(data)
  }, [ data ])
  return (
    <div className={`wrapper c100 ${ isVisible ? intro : exit }`} ref={ assetRef }>
        <h2 className="wrapper--title">Exchanges</h2>
        <div className="wrapper__cards c100">
        {
          loading
            ? <LoadingText />
            : error
              ? <ErrorConnect />
              : top10Exchanges.map(item => (
                <SmallCardExchange key={ item.id } item={ item }/>

              ))
        }
        </div>
      </div>
  )
}
