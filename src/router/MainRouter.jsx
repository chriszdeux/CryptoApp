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
import { Header } from '../components/header/Header';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { Menu } from '../components/menu/Menu';
import { Search } from '../components/search/Search';
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto';
import { useShowComponent } from '../hooks/ShowComponent';
import { AssetPage } from '../pages/AssetPage';
import { HomePage } from '../pages/main-page/HomePage';
import { PortafolioPage } from '../pages/portafolio/PortafolioPage';
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
      {/* <div> */}

        <Header />
        <BackgroundImage image={ image }/>
        <MenuButton values={{ showComponent, handleShowComponent }}/>
        {
          showComponent && <Menu values={{ showComponent, handleShowComponent }}/>
        }
        <Routes>
          <Route exact path="/" element={ <HomePage /> }/>
          <Route exact path="/portafolio" element={ <PortafolioPage /> }/>
          <Route exact path="/asset" element={ <AssetPage /> }/>
          {/* <Route exact path="/swap" element={ <SwapCrypto /> }/> */}
        </Routes>
        { swappComponent }


        {
          showComponent2 &&
          <>
          { console.log(`${ showComponent2 ? 'opened' : 'closed' }`) }
          <SwapCrypto handleShowComponent2={ handleShowComponent2 }/>
          </>
        }
      {/* </div> */}
    </Router>

  )
}
