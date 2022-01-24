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
import { DataAssetContext } from '../../context/context';
import { useAnimationData } from '../../hooks/useAnimationData';
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
  const { data: { id, name, price_change_percentage_24h, current_price_usd } } = useContext(DataAssetContext)
  // const { data:test } = useContext(DataAssetContext)
  const { data:dataChart, loading, error } = useFetchAssetChart(id)
  // debugger
  const [data, setData] = useState({})

  const [gainer, setGainer] = useState('');
  const animation = useAnimationData( dataChart )
  const options = {
    // type: 'bar',
    animation,
    scales: {
      y: {
        ticks: {
          color: '#F0F0F0',
          // size: 20
        },
        grid: {
          // display: false
          color: '#08ACB6'
        }
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
        text: `${ name } price $${ current_price_usd }`,
        color: '#F0F0F0',
        size: 20
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
    // debugger
      setData({
        labels: dataChart.date,
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
            data: dataChart.price,
            borderColor: price_change_percentage_24h > 0 ? '#0DC96E' : '#f56b6b',
            backgroundColor: '#07F1FF',
            type: 'line',
            order: 0
          }
        ]
      })
      // debugger
  }, [ dataChart ])
  // debugger
  return (
    <>
    {
      !loading && <Line data={data} options={ options } />
    }
    </>
  )
}
