import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/context'
import { usePagination } from '../../hooks/usePagination'
import { animations_object } from '../../utils/animations/animations_object';
import { icons } from '../../utils/icons/icons_object';


export const Pagination = () => {
 const { pages, handleNextPage, handlePrevPage, currentPosition, handleCurrent, handleStartPosition } = useContext(DataContext)
  const { prev_2, prev, current, next, next_2 } = pages
  const { intro } = animations_object
  return (
    <div className={ `pagination c95 ${ intro }` } style={{ animationDelay: '2s' }}>
      <h2>Current page: <span>{ currentPosition }</span></h2>
      <ul className="pagination__list">
        {
          currentPosition > 5 && 
            <div className={ `prev ${ intro }` } onClick={ handleStartPosition } >
              { icons.start_pagination_icon }
            </div>
        }
        <div className="prev" onClick={ currentPosition > 1 ? handlePrevPage : null} >
          { icons.back_icon }
        </div>
        
          <li className="item--pagination" onClick={() => handleCurrent( currentPosition )} >{ currentPosition  }</li>
          <li className="item--pagination" onClick={() => handleCurrent( currentPosition + 1 )} >{ currentPosition + 1}</li>
          <li className="item--pagination" onClick={() => handleCurrent( currentPosition + 2 )} >{ currentPosition + 2}</li>
          <li className="item--pagination" onClick={() => handleCurrent( currentPosition + 3 )} >{ currentPosition + 3}</li>
          <li className="item--pagination" onClick={() => handleCurrent( currentPosition + 4 )}>{ currentPosition + 4}</li>
          {/* <li className="item--pagination" >{ currentPosition }</li> */}
        {/* <li className="prev--page--2">{ prev_2 > 0 && prev_2 }</li>
    
        {
          
          <li className="prev--page">{ prev > 0 && prev }</li>
        }
        <li className="current--page">{ currentPosition }</li>

        <li className="next--page">{ currentPosition + 1}</li>
        <li className="next--page--2">{ currentPosition + 2}</li> */}
        <div className="next" onClick={  currentPosition < 100  && handleNextPage }>{ icons.forward_icon }</div>
      </ul>
      {/* <div className="prev">{ icons.back_icon }</div>
      <div className="next">{ icons.forward_icon }</div> */}
    </div>
  )
}
