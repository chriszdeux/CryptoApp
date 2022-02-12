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
  // debugger
  useEffect(() => {
    fetchAssetChart(id, ath, days)
      .then(item => {
        // debugger
        if(item.isAxiosError) {
          setAssetChart({
            loading: false, 
            data: [],
            error: true
          })
        } else {
          if ( isMounted.current ) {
            setAssetChart({
              loading: false, 
              data: item[0],
              error: false
            })
          }
        }
      })
  }, [ id, days ])

  return assetChart
}
