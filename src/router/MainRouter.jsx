import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
Navigate
} from 'react-router-dom';
import { actionMainData } from '../actions/actionMainData';

// import { useEffect } from 'react/cjs/react.development';
import { MenuButton } from '../components/buttons/MenuButton';
import { SwapButton } from '../components/buttons/SwapButton';
import { MainNewsCard } from '../components/cards/MainNewsCard';
import { GenericFooter } from '../components/footer/GenericFooter';
import { Header } from '../components/header/Header';
import { Processing } from '../components/loading/Processing';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { DeskMenu } from '../components/menu/DeskMenu';
import { Menu } from '../components/menu/Menu';
import { NewsInfo } from '../components/news/NewsInfo';
import { Quiz } from '../components/quiz/Quiz';
import { QuizVideo } from '../components/quiz/QuizVideo';
import { Search } from '../components/search/Search';
import { RegisterCard } from '../components/swap-crypto/RegisterCard';
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto';
import { BackgroundWaves } from '../components/waves/BackgroundWaves';
import { DataContext } from '../context/context';
import { fetchCoins } from '../fetch-data/fetchCoins';
import { useFetchAsset } from '../hooks/fetchHooks/useFetchAsset';
import { useFetchAssetChart } from '../hooks/fetchHooks/useFetchAssetChart';
import { useFetchCoins } from '../hooks/fetchHooks/useFetchCoins';
import { useFetchExchanges } from '../hooks/fetchHooks/useFetchExchanges';
import { useFetchNews } from '../hooks/fetchHooks/useFetchNews';
import { useShowComponent } from '../hooks/ShowComponent';
import { useGetRandomAssets } from '../hooks/useGetRandomAssets';
import { AssetPage } from '../pages/AssetPage';
import { ExchangePage } from '../pages/ExchangePage';
import { HomePage } from '../pages/HomePage';
import { LearnAndEarnPage } from '../pages/LearnAndEarnPage';
import { NewsPage } from '../pages/NewsPage';
import { NftAssetPage } from '../pages/NftAssetPage';
import { NftPage } from '../pages/NftPage';
import { PayPage } from '../pages/PayPage';
import { PortafolioPage } from '../pages/PortafolioPage';
import { TradePage } from '../pages/TradePage';
import { WishlistPopup } from '../pop-ups/WishlistPopup';
import { mainDataReducer } from '../reducers/mainDataReducer';
import { animations_object } from '../utils/animations/animations_object';
import image from '../utils/vector/world.svg';

export const MainRouter = () => {

  const { showComponentHook: {showComponent2, handleShowComponent2, animation2} } = useContext(DataContext)
  const { handleShowComponent, showComponent, animation } = useShowComponent()
  const { intro } = animations_object
  return (
    <Router>
      <div className={`router ${ intro }`}>
        <Header />
        {/* <BackgroundImage image={ image }/> */}
        {/* <MainNewsCard /> */}
        <DeskMenu/>
        <MenuButton values={{ showComponent, handleShowComponent, animation }}/>
        {
          showComponent && <Menu values={{ showComponent, handleShowComponent, animation }}/>
        }
        <SwapButton values={{ showComponent2, handleShowComponent2,  }}/>

        <Routes>
          <Route  path="/crypto" element={ <HomePage /> }/>
          {/* <Route  path="/crypto/:section" element={ <HomePage /> }/> */}
          <Route  path="/crypto/portfolio" element={ <PortafolioPage /> }/>
          <Route  path="/crypto/trade" element={ <TradePage /> }></Route>
          <Route  path="/crypto/crypto-asset/:id" element={ <AssetPage /> }/>
          <Route  path="/crypto/exchange" element={ <ExchangePage /> }/>
          <Route  path="/pay" element={ <PayPage /> }/>
          <Route  path="/news" element={ <NewsPage /> }/>
          <Route  path="/earn" element={ <LearnAndEarnPage /> }/>
          <Route  path="/crypto/nft" element={ <NftPage /> }/>
          <Route  path="/crypto/nft-asset" element={ <NftAssetPage /> }/>
          <Route  path="/" element={ <HomePage /> }/>
          <Route 
            path="*"
            element={ <Navigate to="/crypto"/> }
          />

          {/* <Redirect to='/' element={ HomePage }/> */}
          {/* <Route  path="/video" element={ <QuizVideo /> }/> */}
        </Routes>


        {
          showComponent2 &&
          <>
          <SwapCrypto values={ {handleShowComponent2, animation2} }/>
          </>
        }
        {/* <GenericFooter /> */}
        <BackgroundWaves />
        
      </div>
    </Router>

  )
}
