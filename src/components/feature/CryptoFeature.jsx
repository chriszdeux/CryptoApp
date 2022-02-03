import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { MoreNews } from '../cards/MoreNews'
import { NewsCard } from '../cards/NewsCard'
import { SmallCardCoins } from '../cards/SmallCardCoins'
import { SmallCardExchange } from '../cards/SmallCardExchange'
import { NewsCrypto } from './NewsCrypto'
import { Top10Crypto } from './Top10Crypto'
import { Top10Exchange } from './Top10Exchange'

export const CryptoFeature = () => {
  const { intro } = animations_object;
  return (
    <section className={`wrapper c100 ${ intro }`} style={{ animationDelay: '1.5s' }}>
      {/* <NewsCrypto /> */}
      <Top10Crypto />
      <Top10Exchange />
    </section>
  )
}
