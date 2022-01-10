import { useEffect, useRef, useState } from "react";
import { fetchExchanges } from "../../fetch-data/fetchExchanges";

export const useFetchExchanges = () => {
  const isMounted = useRef(true)
  const [exchangeData, setExchangeData] = useState({
    loading: true,
    data: [],
    top10Exchange: [],
    error: null
  })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
      fetchExchanges()
        .then(item => {
          // debugger
          if(!item) {
            setExchangeData({
              ...exchangeData,
              loading: false,
              error: true
            })
          }
          else if(isMounted.current) {
            setExchangeData({
              loading: false,
              data: item.exchangeData,
              top10Exchange: item.top10Exchanges,
              error: null
            })
          }
        })
  }, [  ])


  return exchangeData
}