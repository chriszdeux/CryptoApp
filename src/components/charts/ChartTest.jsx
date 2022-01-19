import React, { useContext, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { useFetchAssetChart } from '../../hooks/fetchHooks/useFetchAssetChart';
import { DataAssetContext } from '../../context/context';
// import { htmlLegendPlugin } from '../../pages/portafolio/htmlLegendPlugin';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ChartTest = () => {
  const { data: { id, name } } = useContext(DataAssetContext)
  const { data:dataChart, loading, error } = useFetchAssetChart(id)
  // debugger
  const [data, setData] = useState({})



  const options = {
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
        text: `Price ${ name }`,
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


  // debugger
  useEffect(() => {
    // debugger
      setData({
        labels: dataChart.date,
        datasets: [
          {
            id: 1,
            label: `${ id } $`,
            data: dataChart.price,
            // data: dataChart.price,
            borderColor: '#00B4BF',
            backgroundColor: '#07F1FF',
            // pointStyle: 'triangle',
            // color: 'fff'
            // color: ['$fff','$fff','$fff','$fff','$fff','$fff',]
          },
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
