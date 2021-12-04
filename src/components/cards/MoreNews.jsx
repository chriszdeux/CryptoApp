import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import financial from '../../utils/vector/financial.svg';
export const MoreNews = () => {
  
  return (
    <article className="read__more__card pd">
      <div className="read__more c90 mg--b">
        <h2>Read More</h2>
        <figure className="read__cover c100">
          <img className="c100" src={ financial } alt="" />
        </figure>
      </div>
      { icons.foward_icon }  
    </article>
  )
}
