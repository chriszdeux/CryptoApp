import React from 'react'
import { useShowComponent } from '../../hooks/ShowComponent'
import { animations_object } from '../../utils/animations/animations_object'
import { icons } from '../../utils/icons/icons_object'

export const Search = () => {
  const { showComponent, handleShowComponent } = useShowComponent()
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const { intro_right } = animations_object;
  return (
    <div className={`search ${ intro_right }`}>
      {
        showComponent &&
          <form onSubmit={ handleShowComponent } className={`search__form ${ intro_right }`}>
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
