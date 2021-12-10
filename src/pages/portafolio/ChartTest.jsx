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
import { htmlLegendPlugin } from './htmlLegendPlugin';

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
};

const labels = ['January', 'February', 'March','January', 'February', 'March', 'January', 'February', 'March','January', 'February', 'March', 'January', 'February', 'March','January', 'February', 'March',];
const myData = [1,3,2,4,6,5,8,12,5,3,12,4,3,8,5,4,14,22]
// debugger
const handleData = ( data ) => {
  return data.map(item => item)
}

const data = {
    labels,
    datasets: [
      {
        id: 1,
        label: 'shiba inu',
        data: myData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

export const ChartTest = () => {
  return <Line
  // style={{ color: 'white' }}
  // datasetIdKey='id'
  data={data}
  options={ options }
/>
}
