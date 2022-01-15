import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/context';
import { useDataFunctions } from '../../hooks/useDataFunctions';
import { animations_object } from '../../utils/animations/animations_object'
import { SmallCardExchange } from '../cards/SmallCardExchange';
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';

export const Top10Exchange = () => {
  const { dataExchanges: { loading, error, data } } = useContext(DataContext)
  const { top10Exchanges, handleTop10Exchange } = useDataFunctions()
  const { intro } = animations_object;
  // debugger
  useEffect(() => {
    handleTop10Exchange(data)
  }, [ data ])
  return (
    <div className={`wrapper c100 ${ intro }`} style={{ animationDelay: '1.9s' }}>
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
