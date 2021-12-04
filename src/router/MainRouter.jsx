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
import { Header } from '../components/header/Header';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { Menu } from '../components/menu/Menu';
import { Search } from '../components/search/Search';
import { HomePage } from '../pages/main-page/HomePage';
import { PortafolioPage } from '../pages/portafolio/PortafolioPage';

export const MainRouter = () => {
  return (
    <Router>
      {/* <div> */}

        <Header />
        <BackgroundImage />
        <Menu />
        <Routes>
          <Route exact path="/" element={ <HomePage /> }/>
          <Route exact path="/portafolio" element={ <PortafolioPage /> }/>
        </Routes>
      {/* </div> */}
    </Router>

  )
}
