import React from 'react'
import { useSelector } from 'react-redux';
import { GainerLoser } from '../components/cards/GainerLoser';
import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { GenericFooter } from '../components/footer/GenericFooter';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { NewsInfo } from '../components/news/NewsInfo';
import { Pagination } from '../components/pagination/Pagination'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto';
import image from '../utils/vector/grow.svg';
export const TradePage = () => {
  const { data } = useSelector(state => state.data_reducer)
  return (
    <section className="trade__section">
      <div className="main__trade">
        <GainerLoser />
        <CryptoTable data={ data }/>
      </div>
      <div className="trade__aside">
        <SwapCrypto />
        <NewsInfo />
      </div>
      <GenericFooter />
      <BackgroundImage image={ image } />
    </section>
  )
}
