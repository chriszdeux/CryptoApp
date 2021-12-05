import React from 'react'
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
import { MenuButton } from '../components/buttons/MenuButton';
import { Header } from '../components/header/Header';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { Menu } from '../components/menu/Menu';
import { Search } from '../components/search/Search';
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto';
import { useShowComponent } from '../hooks/ShowComponent';
import { HomePage } from '../pages/main-page/HomePage';
import { PortafolioPage } from '../pages/portafolio/PortafolioPage';

export const MainRouter = () => {
  const { showComponent, handleShowComponent } = useShowComponent()
  return (
    <Router>
      {/* <div> */}

        <Header />
        <BackgroundImage />
        <MenuButton values={{ showComponent, handleShowComponent }}/>
        {
          showComponent && <Menu values={{ showComponent, handleShowComponent }}/>
        }
        <Routes>
          <Route exact path="/" element={ <HomePage /> }/>
          <Route exact path="/portafolio" element={ <PortafolioPage /> }/>
          <Route exact path="/swap" element={ <SwapCrypto /> }/>
        </Routes>
      {/* </div> */}
    </Router>

  )
}
