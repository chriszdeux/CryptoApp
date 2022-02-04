import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/context';

export const DateOptions = () => {
  const [dates, setDates] = useState({
    day_1: 1,
    day_7: 7,
    day_14: 14,
    day_30: 30,
    day_60: 60,
    day_90: 90,
    day_180: 180
  });
  const { day_1, day_7, day_14, day_30, day_60, day_90, day_180 } = dates
  const { setHandleChartDates } = useContext(DataContext)
  return (
    <div className="chart__options ">
      <ul className="chart__list__options c100">
        <li className='btn' onClick={ () => setHandleChartDates(day_1) }>1d</li>
        <li className='btn' onClick={ () => setHandleChartDates(day_7) }>7d</li>
        <li className='btn' onClick={ () => setHandleChartDates(day_14) }>14d</li>
        <li className='btn' onClick={ () => setHandleChartDates(day_30) }>1M</li>
        {/* <li onClick={ () => setHandleChartDates(day_60) }>2M</li> */}
        <li className='btn' onClick={ () => setHandleChartDates(day_90) }>3M</li>
        <li className='btn' onClick={ () => setHandleChartDates(day_180) }>6M</li>
        {/* <li onClick={ () => setHandleChartDates(day_30) }>30d</li> */}
      </ul>
    </div>
  )
}
