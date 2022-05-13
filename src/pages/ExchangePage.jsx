import React from 'react'
import { ExchangeTable } from '../components/crytp-table/ExchangeTable'
export const ExchangePage = () => {
  return (
    <section className="exchange__page">
      <h2>Exchange</h2>
      <div className="exchange__main c95">
        <ExchangeTable />
      </div>
    </section>
  )
}
