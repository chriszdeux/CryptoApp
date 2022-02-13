import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actionMainData } from './actions/actionMainData'

import { DataContext } from './context/context'
import { earn_data } from './earn-data/earn_data'
import { fetchGlobalStats } from './fetch-data/fetchGlobalStats'
import { useFetchAsset } from './hooks/fetchHooks/useFetchAsset'
import { useFetchCoins } from './hooks/fetchHooks/useFetchCoins'
import { useFetchExchanges } from './hooks/fetchHooks/useFetchExchanges'
import { useFetchGlobalStats } from './hooks/fetchHooks/useFetchGlobalStats'
import { useFetchImagesNft } from './hooks/fetchHooks/useFetchImagesNft'
import { useFetchNews } from './hooks/fetchHooks/useFetchNews'
import { useShowComponent } from './hooks/ShowComponent'
import { useDataFunctions } from './hooks/useDataFunctions'
import { useFormatNumbers } from './hooks/useFormatNumbers'
import { useHandleNftData } from './hooks/useHandleNftData'
import { usePagination } from './hooks/usePagination'
import { usePrevTransactions } from './hooks/usePrevTransaction'
import { useSearchForm } from './hooks/useSearchForm'
import { MainRouter } from './router/MainRouter'
import { store } from './store/store'
import { reducerMyInvested } from './utils/functions/reducerFunction'

export const CryptoApp = () => {
  
  const globalStats = useFetchGlobalStats()
  const { currentPosition, pages, handleNextPage, handlePrevPage, animation, handleCurrent, handleStartPosition } = usePagination()
  const dataAssets = useFetchCoins(currentPosition)
  // const dataFunctions = useDataFunctions( dataAssets.data )
  // const { error } = dataAssets
  const dataExchanges = useFetchExchanges()
  // const dataNews = useFetchNews('crypto')
  // debugger
  const { handleNftData, nft } = useHandleNftData()
  const [ dataEarning, setDataEarning ] = useState([])
  const showComponentHook = useShowComponent();
  // const { showComponent, handleShowComponent, showComponent2, handleShowComponent2, animation, animation2 } = useShowComponent();
  // debugger
  const [handleParam, setHandleParam] = useState('')
  const [handleAsset, setHandleAsset] = useState('bitcoin')
  // debugger
  // debugger
  const { wishlist_reducer } = useSelector(state => state)
  const buyAssetReducer = useSelector(state => state.buy_asset_reducer)
  const [filterAmountDollar, setFilterAmountDollar] = useState(0)
  const [reduceAmountDollar, setReduceAmountDollar] = useState(0)

  const [profit, setProfit] = useState(0)
  const [handleProfitColor, setHandleProfitColor] = useState(true)
  const [handleBuyAsset, setHandleBuyAsset] = useState({})

  useEffect(() => {
    setFilterAmountDollar( buyAssetReducer.map(item => item.amount_dollar) )
  }, [ buyAssetReducer ])
  useEffect(() => {
    if(filterAmountDollar.length > 0) {
      setReduceAmountDollar( filterAmountDollar.reduce( reducerMyInvested ) )
    }
  }, [ filterAmountDollar ])


  // debugger
  const dispatch = useDispatch()
  // debugger
  useEffect(() => {
    dispatch(actionMainData(dataAssets))
  },[ dataAssets ])
  const handleTransactions = usePrevTransactions()
  // debugger
  const balance = useSelector(state => state.balance_reducer)
  // debugger
  // const init = () => {
  //   return JSON.parse(localStorage.getItem('wishlist')) || []
  // }
 
  // useEffect(() => {
  //   return JSON.parse(localStorage.getItem('wishlist') || [])
  // }, [ wishlist_reducer ])

  // useEffect(() => {
  //   localStorage.setItem('wishlist', JSON.stringify(wishlist_reducer))
  // }, [wishlist_reducer ])
  // useEffect(() => {
  //   console.log(wishlist_reducer)
  // }, [ wishlist_reducer ])

  // const [handleTransaction, setHandleTransaction] = useState(null);

  const [handleBalance, setHandleBalance] = useState({
    portafolio_balance: 0,
    total_amount_invested: 0,
    
  });
  const [handleChartDates, setHandleChartDates] = useState(7);
  // debugger
  return (
      <DataContext.Provider value={{
        dataAssets,
        dataExchanges,
        // dataFunctions,
        // dataNews,
        globalStats,
        currentPosition,
        animation, 
        pages, 
        handleNextPage, 
        handlePrevPage,
        handleCurrent,
        handleStartPosition,
        handleAsset,
        setHandleAsset,
        nft,
        handleNftData,
        dataEarning,
        setDataEarning,
        handleTransactions,
        handleBalance,
        setHandleBalance,
        handleChartDates, 
        setHandleChartDates,
        // error
        showComponentHook,
        reduceAmountDollar,
        profit, setProfit,
        handleProfitColor, setHandleProfitColor,
        setHandleParam,
        handleBuyAsset, setHandleBuyAsset,


      }}>
        <MainRouter />
      </DataContext.Provider>
    
  )
}
