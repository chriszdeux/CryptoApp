import React, { useContext, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { useFetchAssetChart } from '../../hooks/fetchHooks/useFetchAssetChart';
import { DataAssetContext, DataContext } from '../../context/context';
import { useAnimationData } from '../../hooks/useAnimationData';
import { useFormatNumbers } from '../../hooks/useFormatNumbers';
// import { htmlLegendPlugin } from '../../pages/portafolio/htmlLegendPlugin';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ChartTest = () => {
  const { data: { id, name, price_change_percentage_24h, current_price_usd, ath }, setHandleDataFromChart} = useContext(DataAssetContext)
  const { handleChartDates, setHandleChartDates } = useContext(DataContext)
  // debugger
  const [tempChartDates, setTempChartDates] = useState(0);
  useEffect(() => {
    // setTimeout(() => {
      //   setHandleChartDates()
      // }, 200);
      // setHandleChartDates(1)
    }, [ id ])
    
    
    // const { data:test } = useContext(DataAssetContext)
    const { data:dataChart, loading, error } = useFetchAssetChart(id, ath, handleChartDates)
    const { chartData, chartDataDates, high_low} = dataChart

    const priceFormat = useFormatNumbers(current_price_usd)
    const highFormat = useFormatNumbers(high_low?.high)
    const lowFormat = useFormatNumbers(high_low?.low)
    // debugger
    useEffect(() => {
      if(chartDataDates !== undefined) {
        setHandleDataFromChart(chartDataDates)
      }
    }, [ dataChart ])
    // debugger
    // const {  }
  // debugger
  // const { price } = !!dataChart && dataChart
  // debugger
  // useEffect(() => {
  //   setTempChartDates(handleChartDates)
  //   setHandleChartDates(0)
  //   setHandleChartDates(tempChartDates)
  //   // setTimeout(() => {
  //   // }, 200);
  //   // setTimeout(() => {
  //   // }, 200);
  // }, [ price ])
  const [data, setData] = useState({})

  const [filterPrice, setFilterPrice] = useState(0);

  // useEffect(() => {
  //   // if( price !== undefined){
  //   //   setFilterPrice( dataChart.price.filter( item => item <= Number(ath.replace(/\,/g, ''))) )
  //   //   // debugger
  //   // } 
  // }, [ price ])
  // debugger
  // debugger
  const [gainer, setGainer] = useState('');
  // const animation = useAnimationData( chartData )
  const options = {
    // type: 'bar',
    // animation,
    scales: {
      y: {
        ticks: {
          color: '#F0F0F0',
          // size: 20
        },
        grid: {
          display: false,
          color: '#08ACB6'
        },
        // suggestedMax: 0.0000001,
        // suggestedMin: 0.000000000001,
      },
      x: {
        // type: '',
        ticks: {
          color: '#F0F0F0',
          // size: 20
        },
        grid: {
          display: false
        }
      }
    },
    responsive: true,
    // backgroundColor: 'red',
    plugins: {
      legend: {
        position: 'left',
        display: false,
        labels: {
          font: {
            // color: 'white',
            // size: 50
          },
          // color: 'red',
          
        }
      },
      title: {
        display: true,
        text: `${ name } price $${ current_price_usd > 1 ? priceFormat : current_price_usd } High: $${ high_low?.high > 1 ? highFormat : high_low?.high.toFixed(5)} / Low: $${ high_low?.low > 1 ? lowFormat : high_low?.low.toFixed(5) }`,
        // text: 'hello',
        color: '#F0F0F0',
        size: 12
      },
    },
    elements: {
      point: {
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointHoverBackgroundColor: '#03D0DD'
      }
    }
  };

  // useEffect(() => {
  //   (current_price_usd > 0)
  //     ? setGainer('#0DC96E')
  //     : setGainer('#f56b6b')
  // }, [ current_price_usd ])

  // debugger
  useEffect(() => {

    setData({
        labels: chartData?.map(item => item.date),
        datasets: [
          // {
          //   id: 1,
          //   label: `${ id } $`,
          //   data: dataChart.price,
          //   // data: dataChart.price,
          //   borderColor: price_change_percentage_24h > 0 ? '#0DC96E' : '#f56b6b',
          //   backgroundColor: '#00808850',
          //   order: 1,
          //   type: 'bar'
          //   // pointStyle: 'triangle',
          //   // color: 'fff'
          //   // color: ['$fff','$fff','$fff','$fff','$fff','$fff',]
          // },
          {
            id: 2,
            label: `${ id } $`,
            data: chartData?.map(item => item.price),
            borderColor: price_change_percentage_24h > 0 ? '#0DC96E' : '#f56b6b',
            backgroundColor: '#07F1FF',
            type: 'line',
            order: 0
          }
        ]
      })

      // debugger
  }, [ dataChart ])
  return (
    <>
    {
      !loading && <Line data={data} options={ options } />
    }
    </>
  )
}
