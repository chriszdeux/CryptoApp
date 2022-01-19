import React, { useState } from 'react'

import { DataContext } from './context/context'
import { earn_data } from './earn-data/earn_data'
import { fetchGlobalStats } from './fetch-data/fetchGlobalStats'
import { useFetchAsset } from './hooks/fetchHooks/useFetchAsset'
import { useFetchCoins } from './hooks/fetchHooks/useFetchCoins'
import { useFetchExchanges } from './hooks/fetchHooks/useFetchExchanges'
import { useFetchGlobalStats } from './hooks/fetchHooks/useFetchGlobalStats'
import { useFetchImagesNft } from './hooks/fetchHooks/useFetchImagesNft'
import { useFetchNews } from './hooks/fetchHooks/useFetchNews'
import { useDataFunctions } from './hooks/useDataFunctions'
import { useHandleNftData } from './hooks/useHandleNftData'
import { usePagination } from './hooks/usePagination'
import { MainRouter } from './router/MainRouter'

export const CryptoApp = () => {
  const globalStats = useFetchGlobalStats()
  const { currentPosition, pages, handleNextPage, handlePrevPage } = usePagination()
  const dataAssets = useFetchCoins(currentPosition)
  // const dataFunctions = useDataFunctions( dataAssets.data )
  // const { error } = dataAssets
  const dataExchanges = useFetchExchanges()
  const dataNews = useFetchNews('crypto')
  // debugger
  const { handleNftData, nft } = useHandleNftData()
  const [ dataEarning, setDataEarning ] = useState([])
  
  const [handleAsset, setHandleAsset] = useState('bitcoin')
  return (
    <DataContext.Provider value={{
      dataAssets,
      dataExchanges,
      // dataFunctions,
      dataNews,
      globalStats,
      currentPosition, 
      pages, 
      handleNextPage, 
      handlePrevPage,
      handleAsset,
      setHandleAsset,
      nft,
      handleNftData,
      dataEarning,
      setDataEarning
      // error
    }}>
      <MainRouter />
    </DataContext.Provider>
    
  )
}
