import React, { useEffect, useRef, useState } from "react"
import { fetchCoins } from "../../fetch-data/fetchCoins"

export const useFetchCoins = ( initialPage ) => {
  const isMounted = useRef(true)
  const [coinsData, setCoinsData] = useState({
    loading: true,
    data: [],
    error: true,
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
      // debugger
      // debugger
      if(item === undefined){
        // debugger
         setCoinsData({
          loading: false,
          data: [],
          error: true,
        })
      } else {
        // debugger
        setCoinsData({
          loading: false,
          data: item,
          error: false
        })
      }
      // .catch((err) => {
      //   console.log(err)
      // })
    })
  }, [ initialPage ])
  // debugger
  return coinsData
}