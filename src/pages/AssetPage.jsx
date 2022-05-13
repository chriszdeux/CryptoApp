import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
// import { useContext } from 'react/cjs/react.development'
import { AssetStats } from '../components/asset-stats/AssetStats'
import { Chart } from '../components/charts/Chart'
import { AssetAbout } from '../components/coin-asset/AssetAbout'
import { AssetInfo,  } from '../components/coin-asset/AssetInfo'
import { ErrorConnect } from '../components/errors/ErrorConnect'
import { Top10Crypto } from '../components/feature/Top10Crypto'
import { LoadingText } from '../components/loading/LoadingText'
import { DataAssetContext, DataContext } from '../context/context'
import { useFetchAsset } from '../hooks/fetchHooks/useFetchAsset'
import { useRandomAsset } from '../hooks/useRandomAssets'
import { animations_object } from '../utils/animations/animations_object'
import { scrollTop } from '../utils/functions/scrollTop'

export const AssetPage = () => {
  const { handleAsset, dataAssets:{ data:assets }, setHandleParam } = useContext(DataContext)
  const { id } = useParams();

  useEffect(() => {
    setHandleParam(id)
  }, [ id ])
  const { loading, error, data:dataAsset } = useFetchAsset(handleAsset)
  const top10 = useRandomAsset( assets )
  const [handleDataFromChart, setHandleDataFromChart] = useState([])
  const [message, setMessage] = useState('Random Assets')
  const { intro} = animations_object

  const [data, setData] = useState({});
  useEffect(() => {

      setData({...dataAsset[0]})
      
      if( error && dataAsset.length === 0) {
    
        return <Navigate to="/"/>
      }
    scrollTop()
  }, [  dataAsset ])
 
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

              </>
        }
      </section>
      

    </DataAssetContext.Provider>
  )
}
