import React, { useState } from 'react'
import { InterestedEarned } from '../components/cards/InterestedEarned'
import { LearnAndEarnCard } from '../components/cards/LearnAndEarnCard'
import { AssetTransactions } from '../components/coin-asset/AssetTransactions'
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
import image from '../utils/vector/send.svg'

export const PayPage = () => {
  const [transactionSelection, setTransactionSelection] = useState({
    send: true,
    recieve: false
  })
  const { showComponent, handleShowComponent } = useShowComponent()
  const { send, recieve } = transactionSelection

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
      <div>
        <TransactionSection values={{ handleSend, handleRecieve }}/>
        {
          send && <Pay handleShowComponent={ handleShowComponent }/>
        }
        {
          recieve && <Recieve />
        }
        <RandomCoinsToYou />
      </div>
      
      <aside className="pay__aside c95">
        <div className="only__for__you">
          <InterestedEarned />
          <LearnAndEarnCard />
        </div>
        <AssetTransactions />
      </aside>
      {
        showComponent &&
          <AssetList handleShowComponent={ handleShowComponent }/>
      }
    <BackgroundImage image={ image }/>
    </section>
  )
}
