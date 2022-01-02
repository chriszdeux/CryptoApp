import React from 'react';
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
const labels_games = ['halo', 'mass effect', 'forza', 'starcraft', 'skyline', 'uncharted', 'spiderman',]

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: '',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  // options: {
  //   scales: {
  //     x: {
  //       ticks: {
  //         color: '#fff'
  //       }
  //     }
  //   }
  // }
};


const labels = ['January', 'February', 'March','January', 'February', 'March', 'January', 'February', 'March','January', 'February', 'March', 'January', 'February', 'March','January', 'February', 'March',];
const myData = [1,3,2,4,6,5,8,12,5,3,12,4,3,8,5,4,14,22]
// debugger
const handleData = ( data ) => {
  return data.map(item => item)
}

// const config = {
//   type: 'line',
//   myData,
//   options: {
//     scales: {
//       y: {
//         ticks: {
//           color: '#fff'
//         }
//       }
//     }
//   }
// }
const data = {
    labels,
    datasets: [
      {
        id: 1,
        label: 'shiba inu',
        data: myData,
        borderColor: '#00B4BF',
        backgroundColor: '#07F1FF',
        // color: ['$fff','$fff','$fff','$fff','$fff','$fff',]
      },
    ],
    
  }

export const ChartTest = () => {
  return <Line
            data={data}
            options={ options }
          />
}
