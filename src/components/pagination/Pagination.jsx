import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/context'
import { usePagination } from '../../hooks/usePagination'
import { icons } from '../../utils/icons/icons_object'

export const Pagination = () => {
 const { pages, handleNextPage, handlePrevPage, currentPosition } = useContext(DataContext)
  const { prev_2, prev, current, next, next_2 } = pages
  return (
    <div className="pagination c95">
      <ul className="pagination__list">
        <div className="prev" onClick={ currentPosition > 1 ? handlePrevPage : null} >
          { icons.back_icon }
        </div>
        
          
        <li className="prev--page--2">{ prev_2 > 0 && prev_2 }</li>
    
        {
          
          <li className="prev--page">{ prev > 0 && prev }</li>
        }
        <li className="current--page">{ currentPosition }</li>
        <li className="next--page">{ currentPosition + 1}</li>
        <li className="next--page--2">{ currentPosition + 2}</li>
        <div className="next" onClick={  currentPosition < 100  && handleNextPage }>{ icons.forward_icon }</div>
      </ul>
      {/* <div className="prev">{ icons.back_icon }</div>
      <div className="next">{ icons.forward_icon }</div> */}
    </div>
  )
}
