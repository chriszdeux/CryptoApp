import React from 'react'
import { GainerLoser } from '../components/cards/GainerLoser';
import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { BackgroundImage } from '../components/main/BackgroundImage';
import { Pagination } from '../components/pagination/Pagination'
import image from '../utils/vector/grow.svg';
export const TradePage = () => {
  return (
    <section className="trade__section">
      <GainerLoser />
      <CryptoTable />
      <Pagination />
      <BackgroundImage image={ image } />
    </section>
  )
}
