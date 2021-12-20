import React from 'react'
import { GainerLoser } from '../components/cards/GainerLoser';
import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { BackgroundImage } from '../components/main/BackgroundImage';
import { NewsInfo } from '../components/news/NewsInfo';
import { Pagination } from '../components/pagination/Pagination'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto';
import image from '../utils/vector/grow.svg';
export const TradePage = () => {
  return (
    <section className="trade__section">
      <div className="main__trade">
        <GainerLoser />
        <CryptoTable />
      </div>
      <div className="trade__aside">
        <SwapCrypto />
        <NewsInfo />
      </div>
      <Pagination />
      <BackgroundImage image={ image } />
    </section>
  )
}
