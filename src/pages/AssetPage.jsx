import React from 'react'
import { InterestedEarned } from '../components/cards/InterestedEarned'
import { LearnAndEarnCard } from '../components/cards/LearnAndEarnCard'
import { Chart } from '../components/charts/Chart'
import { ChartTest } from '../components/charts/ChartTest'
import { PortafolioChart } from '../components/charts/PortafolioChart'
import { AssetAbout } from '../components/coin-asset/AssetAbout'
import { AssetInfo,  } from '../components/coin-asset/AssetInfo'
import { AssetTransactions } from '../components/coin-asset/AssetTransactions'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto'
import { VideoComponent } from '../components/videos-components/VideoComponent'
import image from '../utils/vector/asset-background.svg'
export const AssetPage = () => {

  return (
    <section className="asset__page c95">
      <div className="asset__main__info">
        <AssetInfo />
        <div className=" mg--v--3"></div>
        <div>
          <Chart/>
          <AssetAbout />     
        </div>
      </div>

      <aside className="right__side">
        <AssetTransactions />
        <div className="only__for__you">
          <InterestedEarned />
          <LearnAndEarnCard />
        </div>
        {/* <SwapCrypto /> */}
      </aside>

      <BackgroundImage image={ image }/>
    </section>
  )
}
