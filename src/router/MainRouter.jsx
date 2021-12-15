import { cleanup } from '@testing-library/react';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router,
Routes,
Route,
Link,
} from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';
import { MenuButton } from '../components/buttons/MenuButton';
import { SwapButton } from '../components/buttons/SwapButton';
import { MainNewsCard } from '../components/cards/MainNewsCard';
import { GenericFooter } from '../components/footer/GenericFooter';
import { Header } from '../components/header/Header';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { Menu } from '../components/menu/Menu';
import { Quiz } from '../components/quiz/Quiz';
import { Search } from '../components/search/Search';
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto';
import { useShowComponent } from '../hooks/ShowComponent';
import { AssetPage } from '../pages/AssetPage';
import { HomePage } from '../pages/HomePage';
import { LearnAndEarnPage } from '../pages/LearnAndEarnPage';
import { NewsPage } from '../pages/NewsPage';
import { PayPage } from '../pages/PayPage';
import { PortafolioPage } from '../pages/PortafolioPage';
import { TradePage } from '../pages/TradePage';
import image from '../utils/vector/world.svg';

export const MainRouter = () => {
  const { showComponent, handleShowComponent, showComponent2, handleShowComponent2, } = useShowComponent();
  const [swappComponent, setSwappComponent] = useState(null);
  console.log('home');


  useEffect(() => {
    const swapButton = setTimeout(() => {
      setSwappComponent( <SwapButton values={{ showComponent2, handleShowComponent2 }}/> )
    }, 2000);

    return () => {
      cleanup(swapButton)
    }
  }, [  ])
  return (
    <Router>
      <div className="router">

        <Header />
        {/* <BackgroundImage image={ image }/> */}
        <MainNewsCard />

        <MenuButton values={{ showComponent, handleShowComponent }}/>
        {
          showComponent && <Menu values={{ showComponent, handleShowComponent }}/>
        }
        <Routes>
          <Route exact path="/" element={ <HomePage /> }/>
          <Route exact path="/portafolio" element={ <PortafolioPage /> }/>
          <Route exact path="/trade" element={ <TradePage /> }/>
          <Route exact path="/asset" element={ <AssetPage /> }/>
          <Route exact path="/swap" element={ <SwapCrypto /> }/>
          <Route exact path="/pay" element={ <PayPage /> }/>
          <Route exact path="/news" element={ <NewsPage /> }/>
          <Route exact path="/earn" element={ <LearnAndEarnPage /> }/>
          <Route exact path="/quiz" element={ <Quiz /> }/>
        </Routes>
        { swappComponent }


        {
          showComponent2 &&
          <>
          { console.log(`${ showComponent2 ? 'opened' : 'closed' }`) }
          <SwapCrypto handleShowComponent2={ handleShowComponent2 }/>
          </>
        }
        <GenericFooter />
      </div>
    </Router>

  )
}
