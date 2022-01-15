import { useEffect, useRef, useState } from "react"
import { fetchGlobalStats } from "../../fetch-data/fetchGlobalStats"

export const useFetchGlobalStats = () => {
  
  const isMounted = useRef(true)
  
  const [statsData, setStatsData] = useState({
    loading: true,
    error: true,
    data: [],
  })

  const { data } = statsData
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    try {
      fetchGlobalStats()
      .then(item => {
        if(item) {
          // debugger
          if(isMounted.current) {
            // debugger
            setStatsData({
              loading: false,
              data: item,
              error: false
            })
          }
        }
      })
    } catch (error) {
      debugger
      setStatsData({
        loading: false,
        data: [],
        error: true,
      })
    }
  }, [  ])
  // debugger
  return statsData
}