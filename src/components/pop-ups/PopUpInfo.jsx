import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const PopUpInfo = () => {
  return (
    <div className="pop__up">
      <div className="pop__up__icon">
        { icons.up_icon }
      </div>
      <ul className="pop__up__list">
        <li>link to go { icons.open_icon }</li>
        <li>link to go { icons.open_icon }</li>
        <li>link to go { icons.open_icon }</li>
      </ul>
    </div>
  )
}
