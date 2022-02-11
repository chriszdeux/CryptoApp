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
import { LoadingText } from '../components/loading/LoadingText'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto'
import { VideoComponent } from '../components/videos-components/VideoComponent'
import { DataAssetContext, DataContext } from '../context/context'
import { useFetchAsset } from '../hooks/fetchHooks/useFetchAsset'
import { animations_object } from '../utils/animations/animations_object'
import { scrollTop } from '../utils/functions/scrollTop'
import image from '../utils/vector/asset-background.svg'
export const AssetPage = () => {
  const { handleAsset,  } = useContext(DataContext)
  const { id } = useParams();
  const { loading, error, data:dataAsset } = useFetchAsset(id || handleAsset)
  // debugger
  const [handleDataFromChart, setHandleDataFromChart] = useState([])
  // const { dataAssets } = useContext(DataContext)
  // console.log(params.id)
  const { intro } = animations_object
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
