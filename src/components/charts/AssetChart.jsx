import React, { useContext, useEffect, useState } from 'react'
import { Chart } from 'react-google-charts';
import { DataAssetContext } from '../../context/context';
import { useFetchAssetChart } from '../../hooks/fetchHooks/useFetchAssetChart';
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';
export const AssetChart = () => {
  const { data: { id } } = useContext(DataAssetContext)
  const { data:dataChart, loading, error } = useFetchAssetChart(id)
  // debugger
  const [data, setData] = useState([])
  
  useEffect(() => {
    setData(dataChart)
  }, [ dataChart ])

  debugger
  return (
    <>
    {
      loading 
        ? <LoadingText />
        : error 
          ? <ErrorConnect />
          : 
            <Chart 
              chartType='Line'
              data={ data }
                width="100%"
                height="400px"
                legendToggle
                

            />
    }
    </>
  )
}
