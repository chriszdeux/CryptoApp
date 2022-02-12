import { useEffect, useState } from "react"

export const useDataFunctions = (  ) => {
  const [top10, setTop10] = useState([]);
  const [top10Exchanges, setTop10Exchanges] = useState([])
  const [gainers, setGainers] = useState([])
  const [losers, setLosers] = useState([])

  const handleTop10 = ( data ) => {
    // debugger
    setTop10( data.slice(0,10))
  }

  const handleTop10Exchange = ( data ) => {
    // debugger
    if(data.length > 0) {
      setTop10Exchanges( data.slice(0,10))
     }
  }
  
  const handleGainers = (data) => {
    // debugger
    if(data.length > 0) {
      setGainers( data.sort((a,b) => {
        return b.price_change_percentage_24h - a.price_change_percentage_24h
      }).slice(0,3) )
    }

    }
  
  const handleLosers = (data) => {
    // debugger
    if(data.length > 0) {
      setLosers(
        data.sort((a,b) => {
          return a.price_change_percentage_24h - b.price_change_percentage_24h
        }).slice(0,3)

        )
    }
  }
  // useEffect(() => {
  //   handleTop10(data);
  //   handleLosers(data)
  //   handleGainers(data)
  // }, [data])
  // return { top10, losers, gainers }
  return { top10, losers, gainers, top10Exchanges, handleTop10, handleLosers, handleGainers, handleTop10Exchange }
}