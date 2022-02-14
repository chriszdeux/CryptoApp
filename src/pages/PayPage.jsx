import React, { useState } from 'react'
import { InterestedEarned } from '../components/cards/InterestedEarned'
import { LearnAndEarnCard } from '../components/cards/LearnAndEarnCard'
import { AssetTransactions } from '../components/coin-asset/AssetTransactions'
import { CryptoFeature } from '../components/feature/CryptoFeature'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { Pay } from '../components/pay/Pay'
import { RandomCoinsToYou } from '../components/pay/RandomCoinsToYou'
import { Recieve } from '../components/pay/Recieve'
import {  TransactionSection } from '../components/pay/TransactionSection'
import { AssetList } from '../components/swap-crypto/AssetList'
import { ListAssets } from '../components/swap-crypto/ListAssets'
import { SwapBuy } from '../components/swap-crypto/SwapBuy'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto'
import { useShowComponent } from '../hooks/ShowComponent';
import { animations_object } from '../utils/animations/animations_object'
const image = 'https://firebasestorage.googleapis.com/v0/b/crypto-1bf30.appspot.com/o/send.svg?alt=media&token=6c8d42e9-e58c-40b1-9156-3709a087ae1d'

export const PayPage = () => {
  const [transactionSelection, setTransactionSelection] = useState({
    send: true,
    recieve: false
  })
  const { showComponent, handleShowComponent } = useShowComponent()
  const { send, recieve } = transactionSelection
  const { intro } = animations_object;

  const handleSend = () => {
    setTransactionSelection({
      send: true,
      recieve: false
    })
  }

  const handleRecieve = () => {
    setTransactionSelection({
      send: false,
      recieve: true
    })
  }
  return (
    <section className="pay__page">
      <div className="pay__main__section">
        <div className={`pay__main c100 ${ intro }`}>
          <TransactionSection values={{ handleSend, handleRecieve }}/>
          {
            send && <Pay handleShowComponent={ handleShowComponent }/>
          }
          {
            recieve && <Recieve />
          }
          
        </div>
        
        <aside className="pay__aside c95">
          <AssetTransactions />
          <div className="only__for__you">
            <InterestedEarned />
            <LearnAndEarnCard />
          </div>
        </aside>
      </div>
      <CryptoFeature />
      {
        showComponent &&
          <AssetList handleShowComponent={ handleShowComponent }/>
      }

    {/* <CryptoFeature /> */}
    <BackgroundImage image={ image }/>
    </section>
  )
}
