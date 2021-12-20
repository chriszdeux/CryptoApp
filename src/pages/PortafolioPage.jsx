import React from 'react';

// import Chart from 'chart.js/auto';
// import chart from 'rea'
// import { Line } from 'react-chartjs-2';
import { getRelativePosition } from 'chart.js/helpers';

import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto';
import { icons } from '../utils/icons/icons_object';
// import { ChartTest } from '../../components/charts/ChartTest';
import { PortafolioChart } from '../components/charts/PortafolioChart';
import { LearnAndEarnCard } from '../components/cards/LearnAndEarnCard';
import { InterestedEarned } from '../components/cards/InterestedEarned';
import { BackgroundImage } from '../components/main/BackgroundImage';
import image from '../utils/vector/portafolio.svg'
import { NewsInfo } from '../components/news/NewsInfo';
export const PortafolioPage = () => {
  return (
    <section className="portafolio">
      {/* <Line data={data} options={options}/> */}
      <div className="portafolio__main__section">
        <PortafolioChart />
        <div className="portafolio__assets mg--v--3">
          <h2 className="pd--l mg--b">Your Assets</h2>
          <CryptoTable />
        </div>
        <div className="portafolio__wishlist">
          <h2 className="pd--l ">Wish list</h2>
          <CryptoTable />
        </div>
      </div>
      <aside className="portafolio__aside c95">
        <div className="portafolio__aside__content">
          <SwapCrypto />
          <NewsInfo />
          <LearnAndEarnCard />
          <InterestedEarned />
          {/* <InterestedEarned /> */}
          {/* <SwapCrypto /> */}
        </div>
        <BackgroundImage image={ image }/>
      </aside>
    </section>
  )
}
