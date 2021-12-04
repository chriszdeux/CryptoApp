import React, { useEffect, useState } from 'react'
import { SwapButton } from '../../components/buttons/SwapButton'
import { InterestedEarned } from '../../components/cards/InterestedEarned'
import { LearnAndEarnCard } from '../../components/cards/LearnAndEarnCard'
import { CryptoTable } from '../../components/crytp-table/CryptoTable'
import { CryptoFeature } from '../../components/feature/CryptoFeature'
import { MainDisplay } from '../../components/main/MainDisplay'

export const HomePage = () => {
  const [swappComponent, setSwappComponent] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      setSwappComponent( <SwapButton /> )
    }, 2000);
  }, [  ])
  return (
    <section className="home__page">
      <MainDisplay />
      <CryptoFeature />
      <CryptoTable />
      <div className="for__you c95">
        <LearnAndEarnCard /> 
        <InterestedEarned />
      </div>
      { swappComponent }
    </section>
  )
}
