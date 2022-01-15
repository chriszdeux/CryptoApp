import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
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
import { fetchCoins } from '../fetch-data/fetchCoins';
import { useFetchAsset } from '../hooks/fetchHooks/useFetchAsset';
import { useFetchCoins } from '../hooks/fetchHooks/useFetchCoins';
import { useFetchExchanges } from '../hooks/fetchHooks/useFetchExchanges';
import { useFetchNews } from '../hooks/fetchHooks/useFetchNews';
import { useShowComponent } from '../hooks/ShowComponent';
import { useGetRandomAssets } from '../hooks/useGetRandomAssets';
import { AssetPage } from '../pages/AssetPage';
import { HomePage } from '../pages/HomePage';
import { LearnAndEarnPage } from '../pages/LearnAndEarnPage';
import { NewsPage } from '../pages/NewsPage';
import { NftAssetPage } from '../pages/NftAssetPage';
import { NftPage } from '../pages/NftPage';
import { PayPage } from '../pages/PayPage';
import { PortafolioPage } from '../pages/PortafolioPage';
import { TradePage } from '../pages/TradePage';
import image from '../utils/vector/world.svg';

export const MainRouter = () => {
  const { showComponent, handleShowComponent, showComponent2, handleShowComponent2, } = useShowComponent();
  
  return (
    <Router>
      <div className="router">
        <Header />
        {/* <BackgroundImage image={ image }/> */}
        <MainNewsCard />
        <DeskMenu/>
        <MenuButton values={{ showComponent, handleShowComponent }}/>
        {
          showComponent && <Menu values={{ showComponent, handleShowComponent }}/>
        }
        <SwapButton values={{ showComponent2, handleShowComponent2 }}/>

        <Routes>
          <Route  path="/" element={ <HomePage /> }/>
          <Route  path="/portafolio" element={ <PortafolioPage /> }/>
          <Route  path="/trade" element={ <TradePage /> }></Route>
          <Route  path="/crypto-asset" element={ <AssetPage /> }/>
          <Route  path="/swap" element={ <SwapCrypto /> }/>
          <Route  path="/pay" element={ <PayPage /> }/>
          <Route  path="/news" element={ <NewsPage /> }/>
          <Route  path="/earn" element={ <LearnAndEarnPage /> }/>
          <Route  path="/nft" element={ <NftPage /> }/>
          <Route  path="nft-asset" element={ <NftAssetPage /> }/>
          <Route  path="/quiz" element={ <Quiz /> }/>
          <Route  path="/billing" element={ <RegisterCard /> }/>
          <Route  path="/test" element={ <NewsInfo /> }/>
          <Route  path="/process" element={ <Processing /> }/>
          <Route 
            path="*"
            element={ <Navigate to="/"/> }
          />

          {/* <Redirect to='/' element={ HomePage }/> */}
          {/* <Route  path="/video" element={ <QuizVideo /> }/> */}
        </Routes>


        {
          showComponent2 &&
          <>
          { console.log(`${ showComponent2 ? 'opened' : 'closed' }`) }
          <SwapCrypto handleShowComponent2={ handleShowComponent2 }/>
          </>
        }
        {/* <GenericFooter /> */}
        <BackgroundWaves />
      </div>
    </Router>

  )
}
