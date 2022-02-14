import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { GainerLoser } from '../components/cards/GainerLoser';
import { AssetTransactions } from '../components/coin-asset/AssetTransactions';
import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { GenericFooter } from '../components/footer/GenericFooter';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { NewsInfo } from '../components/news/NewsInfo';
import { Pagination } from '../components/pagination/Pagination'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto';
import { animations_object } from '../utils/animations/animations_object';
import { scrollTop } from '../utils/functions/scrollTop';

const image = 'https://firebasestorage.googleapis.com/v0/b/crypto-1bf30.appspot.com/o/grow.svg?alt=media&token=ed418573-4d75-46b6-be93-ebbf4d2f529f';
export const TradePage = () => {

  const { data } = useSelector(state => state.data_reducer)
  const { intro } = animations_object 
  useEffect(() => {
    scrollTop()
  }, [  ])
  return (
    <div className="trade__section">
      <div className={`main__trade ${ intro }`} style={{ animationDelay: '1s' }}>
        <GainerLoser />
        <Pagination />
        <CryptoTable data={ data }/>
        <Pagination />z
      </div>
      {/* <div className={`trade__aside ${ intro }` } style={{ animationDelay: '1.5s' }}>
        <AssetTransactions id=""/>
      </div> */}
      {/* <GenericFooter /> */}
      <BackgroundImage image={ image } />
    </div>
  )
}
