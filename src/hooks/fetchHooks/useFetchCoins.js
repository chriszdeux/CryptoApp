import React, { useEffect, useRef, useState } from "react"
import { fetchCoins } from "../../fetch-data/fetchCoins"

export const useFetchCoins = ( initialPage ) => {
  const isMounted = useRef(true)
  const [coinsData, setCoinsData] = useState({
    loading: true,
    data: [],
    top10: [],
    error: null,
    gainers: [],
    losers: []
  })

  // const [top10, setTop10] = useState(initialState)
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [  ])

  useEffect(() => {
      fetchCoins( initialPage )
      .then(item => {
          if( item === undefined ) {
            setCoinsData({
              loading: false,
              data: null,
              error: true,
              top10: null,
              gainers: null,
              losers: null
            })
          }
          else if(isMounted.current) {
            setCoinsData({
              loading: false,
              data: item.myData,
              top10: item.top10Crypto,
              gainers: item.topGainers,
              losers: item.topLosers,
              error: null
            })
          }
        })
  }, [ initialPage ])
  // debugger
  return coinsData
}