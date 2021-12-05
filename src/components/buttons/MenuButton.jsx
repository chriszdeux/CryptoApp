import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const MenuButton = ({ values }) => {
  // debugger
  const { handleShowComponent, showComponent } = values
  return (
    <div className="menu--button" onClick={ handleShowComponent }>
    { showComponent ? icons.back_icon : icons.foward_icon}      
    </div>

  )
}
