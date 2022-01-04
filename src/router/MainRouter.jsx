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
import { useShowComponent } from '../hooks/ShowComponent';
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
  const [swapComponent, setSwapComponent] = useState(null);
  console.log('home');


  // useEffect(() => {
  //   setTimeout(() => {
  //     setSwapComponent( <SwapButton values={{ showComponent2, handleShowComponent2 }}/> )
  //   }, 2000);

  //   // return () => {
  //   //   cleanup(swapButton)
  //   // }
  // }, [  ])
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
          <Route exact path="/" element={ <HomePage /> }/>
          <Route exact path="/portafolio" element={ <PortafolioPage /> }/>
          <Route exact path="/trade" element={ <TradePage /> }/>
          <Route exact path="/trade/asset" element={ <AssetPage /> }/>
          <Route exact path="/swap" element={ <SwapCrypto /> }/>
          <Route exact path="/pay" element={ <PayPage /> }/>
          <Route exact path="/news" element={ <NewsPage /> }/>
          <Route exact path="/earn" element={ <LearnAndEarnPage /> }/>
          <Route exact path="/nft" element={ <NftPage /> }/>
          <Route exact path="/nft/asset" element={ <NftAssetPage /> }/>
          <Route exact path="/quiz" element={ <Quiz /> }/>
          <Route exact path="/billing" element={ <RegisterCard /> }/>
          <Route exact path="/test" element={ <NewsInfo /> }/>
          <Route exact path="/process" element={ <Processing /> }/>
          <Route 
            path="*"
            element={ <Navigate to="/"/> }
          />

          {/* <Redirect to='/' element={ HomePage }/> */}
          {/* <Route exact path="/video" element={ <QuizVideo /> }/> */}
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
