import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { SwapButton } from '../../components/buttons/SwapButton'
import { InterestedEarned } from '../../components/cards/InterestedEarned'
import { LearnAndEarnCard } from '../../components/cards/LearnAndEarnCard'
import { CryptoTable } from '../../components/crytp-table/CryptoTable'
import { CryptoFeature } from '../../components/feature/CryptoFeature'
import { MainDisplay } from '../../components/main/MainDisplay'
import { SwapCrypto } from '../../components/swap-crypto/SwapCrypto'
import { VideoTest, videotest } from '../../components/VideoTest'
import { useShowComponent } from '../../hooks/ShowComponent'

export const HomePage = () => {
  const [swappComponent, setSwappComponent] = useState(null);
  const { showComponent, handleShowComponent } = useShowComponent()
  console.log('home')
  useEffect(() => {
    const swapButton = setTimeout(() => {
      setSwappComponent( <SwapButton values={{ showComponent, handleShowComponent }}/> )
    }, 2000);

    return () => {
      cleanup(swapButton)
    }
  }, [  ])
  return (
    <>
    <section className="home__page">
      <MainDisplay />
      <CryptoFeature />
      <CryptoTable />
      <div className="for__you c95">
        <LearnAndEarnCard /> 
        <InterestedEarned />
      </div>
      { swappComponent }
    {
      showComponent &&
      <>
      { console.log(`${ showComponent ? 'opened' : 'closed' }`) }
      <SwapCrypto handleShowComponent={ handleShowComponent }/>
      </>
    }
    {/* <VideoTest /> */}
    </section>
    </>
  )
}
