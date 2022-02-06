import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/context';
import { datesChart } from '../../utils/datesChart';

export const DateOptions = () => {
  // const [dates, setDates] = useState({
  //   day_1: 1,
  //   day_7: 7,
  //   day_14: 14,
  //   day_30: 30,
  //   day_60: 60,
  //   day_90: 90,
  //   day_180: 180
  // });
  
  // const { day_1, day_7, day_14, day_30, day_60, day_90, day_180 } = dates
  const { setHandleChartDates } = useContext(DataContext)
  const [currentDate, setCurrentDate] = useState(datesChart[1].day_text);


  const handleDates = ( date ) => {
    setHandleChartDates(date.day)
    setCurrentDate(date.day_text)
  }

  return (
    <div className="chart__options ">
      <h2>Option selected: { currentDate }</h2>
      <ul className="chart__list__options ">
        {
          datesChart.map(item => (
            <li key={ item.day_text } className='btn' onClick={ () => handleDates( item ) }  >{ item.day_text }</li>
          ))
        }
        {/* <li onClick={ () => setHandleChartDates(day_30) }>30d</li> */}
      </ul>
    </div>
  )
}
