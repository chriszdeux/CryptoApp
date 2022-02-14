import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
// import { useContext } from 'react/cjs/react.development'
import { AssetStats } from '../components/asset-stats/AssetStats'
import { InterestedEarned } from '../components/cards/InterestedEarned'
import { LearnAndEarnCard } from '../components/cards/LearnAndEarnCard'
import { Chart } from '../components/charts/Chart'
import { ChartTest } from '../components/charts/ChartTest'
import { PortafolioChart } from '../components/charts/PortafolioChart'
import { AssetAbout } from '../components/coin-asset/AssetAbout'
import { AssetInfo,  } from '../components/coin-asset/AssetInfo'
import { AssetTransactions } from '../components/coin-asset/AssetTransactions'
import { ErrorConnect } from '../components/errors/ErrorConnect'
import { Top10Crypto } from '../components/feature/Top10Crypto'
import { LoadingText } from '../components/loading/LoadingText'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto'
import { VideoComponent } from '../components/videos-components/VideoComponent'
import { DataAssetContext, DataContext } from '../context/context'
import { useFetchAsset } from '../hooks/fetchHooks/useFetchAsset'
import { useShowComponent } from '../hooks/ShowComponent'
import { useRandomAsset } from '../hooks/useRandomAssets'
import { WishlistPopup } from '../pop-ups/WishlistPopup'
import { animations_object } from '../utils/animations/animations_object'
import { scrollTop } from '../utils/functions/scrollTop'
const image = 'https://firebasestorage.googleapis.com/v0/b/crypto-1bf30.appspot.com/o/asset-background.svg?alt=media&token=df02a647-8b25-43d5-828f-1c3a7adc3436'
export const AssetPage = () => {
  const { handleAsset, dataAssets:{ data:assets }, setHandleParam } = useContext(DataContext)
  const { id } = useParams();
  // debugger
  useEffect(() => {
    setHandleParam(id)
  }, [ id ])
  const { loading, error, data:dataAsset } = useFetchAsset(handleAsset)
  // debugger
  const top10 = useRandomAsset( assets )
  // debugger
  const [handleDataFromChart, setHandleDataFromChart] = useState([])
  const [message, setMessage] = useState('Random Assets')
  const { showComponent, handleShowComponent } = useShowComponent()
  const { intro, exit } = animations_object
  const [animation, setAnimation] = useState(intro)
  // const { dataAssets } = useContext(DataContext)
  // console.log(params.id)
  const [data, setData] = useState({});
  useEffect(() => {
    // if(!error) {
      setData({...dataAsset[0]})
    // }
    scrollTop()
  }, [  dataAsset ])
  // debugger
  if( error && dataAsset.length === 0) {
    // debugger
    return <Navigate to="/"/>
  }
  // useEffect(() => {

  // }, [ error ])
  // useEffect(() => {
  // }, [ dataAsset[0] ])
  // debugger  
  return (
    <DataAssetContext.Provider value={{
      data,
      setHandleDataFromChart,
      handleDataFromChart
    }}>
      <section className="asset__page c95">
        
        {
          loading
            ? <LoadingText />
            : error 
              ? <ErrorConnect />
              :  Object.keys(data).length > 0 &&
              <>
                <div className={`asset__main__info ${ intro }`} style={{ animationDelay: '1s' }}>
                  <div>
                    <AssetInfo />
                    <Chart/>
                  </div>
                    <AssetAbout />     
                  <div className=" mg--v--3"></div>
                  <Top10Crypto values={{ top10, message}} />
                </div>

                <AssetStats />
                {/* <aside className="right__side">
                  <AssetTransactions />
                  <div className="only__for__you">
                    <InterestedEarned />
                    <LearnAndEarnCard />
                  </div>
                </aside> */}
              </>
        }

        <BackgroundImage image={ image }/>
      </section>
      

    </DataAssetContext.Provider>
  )
}
