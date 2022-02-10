import React from 'react'
import { ExchangeTable } from '../components/crytp-table/ExchangeTable'
import { BackgroundImage } from '../components/main/BackgroundImage'
import image from '../utils/vector/server.svg';
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
