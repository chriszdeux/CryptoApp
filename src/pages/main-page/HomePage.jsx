import React from 'react'
import { CryptoTable } from '../../components/crytp-table/CryptoTable'
import { MainDisplay } from '../../components/main/MainDisplay'

export const HomePage = () => {
  return (
    <section className="home__page">
      <MainDisplay />
      <CryptoTable /> 
    </section>
  )
}
