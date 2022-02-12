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
        if(item.isAxiosError) {
          // debugger
          setStatsData({
            loading: false,
            data: [],
            error: true
          })
        }
        else if(isMounted.current) {
          // debugger
          setStatsData({
            loading: false,
            data: item[0],
            error: false
          })
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