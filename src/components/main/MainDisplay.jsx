import React from 'react'
import { Button } from '../buttons/Button'
import { NewsCard } from '../cards/NewsCard'
import { SmallCardCoins } from '../cards/SmallCardCoins'
import { SmallCardExchange } from '../cards/SmallCardExchange'
import { BackgroundImage } from './BackgroundImage'
export const MainDisplay = () => {
  return (
    <>
    <main className="main">
      {/* <div className="blur"></div> */}
      <Button />
      <BackgroundImage />
    </main>
    <div className="wrapper c100">
      <h2 className="wrapper--title">Top 10 Cryptos</h2>
      <div className="wrapper__cards c100">
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
        <SmallCardCoins />     
      </div>

    <div className="wrapper c100">
      <h2 className="wrapper--title">News on Crypto</h2>
      <div className="wrapper__cards w--h c100">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>

      <div className="wrapper  c100">
        <h2 className="wrapper--title">Exchanges</h2>
        <div className="wrapper__cards c100">
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />

        </div>
      </div>
    </div>
   
    </>

  )
}
