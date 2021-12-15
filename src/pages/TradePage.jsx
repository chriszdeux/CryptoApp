import React from 'react'
import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { Pagination } from '../components/pagination/Pagination'

export const TradePage = () => {
  return (
    <section className="trade__section">
      <CryptoTable />
    </section>
  )
}
