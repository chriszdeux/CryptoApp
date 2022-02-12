import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDataFunctions } from '../../hooks/useDataFunctions'
import { animations_object } from '../../utils/animations/animations_object'
import { MoreNews } from '../cards/MoreNews'
import { NewsCard } from '../cards/NewsCard'
import { SmallCardCoins } from '../cards/SmallCardCoins'
import { SmallCardExchange } from '../cards/SmallCardExchange'
import { ErrorConnect } from '../errors/ErrorConnect'
import { LoadingText } from '../loading/LoadingText'
import { NewsCrypto } from './NewsCrypto'
import { Top10Crypto } from './Top10Crypto'
import { Top10Exchange } from './Top10Exchange'

export const CryptoFeature = () => {
  const { loading, error, data } = useSelector(state => state.data_reducer)
  const { top10, handleTop10 } = useDataFunctions(  )
  const [message, setMessage] = useState('Top 10 Cryptos')
  useEffect(() => {
    handleTop10(data)
  }, [ data ])
  const { intro } = animations_object;
  return (
    <section className={`wrapper c100 ${ intro }`} style={{ animationDelay: '1.5s' }}>
      {/* <NewsCrypto /> */}
      {
        loading
          ? <LoadingText />
          : error 
            ? <ErrorConnect />
            :
            <>
              <Top10Crypto values={ { top10, message } } />
              <Top10Exchange />
            </>

      }
    </section>
  )
}
