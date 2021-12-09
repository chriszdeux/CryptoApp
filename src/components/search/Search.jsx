import React from 'react'
import { useShowComponent } from '../../hooks/ShowComponent'
import { icons } from '../../utils/icons/icons_object'

export const Search = () => {
  const { showComponent, handleShowComponent } = useShowComponent()
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="search">
      {
        showComponent &&
          <form onSubmit={ handleShowComponent } className="search__form">
            <input type="text" className="search--input"/>
          </form>    
      }
      <div 
        className="search__icon"
        onClick={ handleShowComponent }
      >
        { showComponent ? icons.close_icon : icons.search_icon }
      </div>
    </div>
  )
}
