import React, { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
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
  const { handleAsset } = useContext(DataContext)
  const { loading, error, data:dataAsset } = useFetchAsset(handleAsset)
  // const { dataAssets } = useContext(DataContext)
  const { intro } = animations_object
  const [data, setData] = useState({});
  useEffect(() => {
    setData({...dataAsset[0]})
  }, [  dataAsset[0] ])
  useEffect(() => {
    scrollTop()
  }, [ dataAsset ])
  // debugger
  return (
    <DataAssetContext.Provider value={{
      data
    }}>
      <section className="asset__page c95">
        
        {
          loading
            ? <LoadingText />
            : error 
              ? <ErrorConnect />
              : Object.keys(data).length > 0 &&
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
