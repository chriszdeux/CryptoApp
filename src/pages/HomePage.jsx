import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SwapButton } from '../components/buttons/SwapButton'
import { GainerLoser } from '../components/cards/GainerLoser'
import { InterestedEarned } from '../components/cards/InterestedEarned'
import { LearnAndEarnCard } from '../components/cards/LearnAndEarnCard'
import { MainNewsCard } from '../components/cards/MainNewsCard'
import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { ErrorConnect } from '../components/errors/ErrorConnect'
import { CryptoFeature } from '../components/feature/CryptoFeature'
import { GenericFooter } from '../components/footer/GenericFooter'
import { Header } from '../components/header/Header'
import { ForYou } from '../components/learning/ForYou'
import { LoadingText } from '../components/loading/LoadingText'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { MainDisplay } from '../components/main/MainDisplay'
import { DeskMenu } from '../components/menu/DeskMenu'
import { Menu } from '../components/menu/Menu'
import { Navbar } from '../components/navbar/Navbar'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto'
import { VideoTest, videotest } from '../components/VideoTest'
import { useShowComponent } from '../hooks/ShowComponent'
import image from '../utils/vector/world.svg';

export const HomePage = () => {
  // debugger
  const { loading, error, data } = useSelector(state => state.data_reducer)
  return (
    <>
    <section className="home__page">
      {/* <MainNewsCard />   */}
      {/* <DeskMenu/> */}
      <div className="home__main">
        <MainDisplay />
        <GainerLoser />
        <CryptoFeature />
        {
          loading
            ? <LoadingText />
            : error
              ? <ErrorConnect />
              : <CryptoTable data={ data }/>
        }
        <ForYou />
        <GenericFooter />
      </div>
      {/* { swappComponent }
    {
      showComponent &&
      <>
      { console.log(`${ showComponent ? 'opened' : 'closed' }`) }
      <SwapCrypto handleShowComponent={ handleShowComponent }/>
      </>
    } */}
    {/* <VideoTest /> */}
    <BackgroundImage image={ image }/>
    {/* <GenericFooter /> */}
    </section>
    </>
  )
}
