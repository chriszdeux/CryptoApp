import React from 'react'
import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { BackgroundImage } from '../components/main/BackgroundImage';
import { Pagination } from '../components/pagination/Pagination'
import image from '../utils/vector/grow.svg';
export const TradePage = () => {
  return (
    <section className="trade__section">
      <CryptoTable />
      <Pagination />
      <BackgroundImage image={ image } />
    </section>
  )
}
