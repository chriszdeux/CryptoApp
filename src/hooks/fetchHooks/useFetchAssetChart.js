import { useEffect, useRef, useState } from "react"
import { fetchAssetChart } from "../../fetch-data/fetchAssetChart"

export const useFetchAssetChart = ( id, ath, days ) => {
  const isMounted = useRef(true)
  const [assetChart, setAssetChart] = useState({
    loading: true,
    error: false,
    data: []
  })  

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [  ])

  useEffect(() => {
    fetchAssetChart(id, ath, days)
      .then(item => {
        // debugger
        if(item === undefined || null) {
          setAssetChart({
            loading: false, 
            data: [],
            error: true
          })
        } else {
          if ( isMounted.current ) {
            setAssetChart({
              loading: false, 
              data: item,
              error: false
            })
          }
        }
      })
  }, [ id, days ])

  return assetChart
}
