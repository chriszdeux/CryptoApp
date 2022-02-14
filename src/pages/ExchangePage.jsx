import React from 'react'
import { ExchangeTable } from '../components/crytp-table/ExchangeTable'
import { BackgroundImage } from '../components/main/BackgroundImage'
const image = 'https://firebasestorage.googleapis.com/v0/b/crypto-1bf30.appspot.com/o/server.svg?alt=media&token=d5a28cc3-b2ba-4137-9e49-afdf3d2e1319';
export const ExchangePage = () => {
  return (
    <section className="exchange__page">
      <h2>Exchange</h2>
      <div className="exchange__main c95">
        <ExchangeTable />
      </div>
      <BackgroundImage image={ image }/>
    </section>
  )
}
