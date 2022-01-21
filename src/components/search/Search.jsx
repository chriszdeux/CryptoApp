import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/context'
import { useFetchAsset } from '../../hooks/fetchHooks/useFetchAsset'
import { useShowComponent } from '../../hooks/ShowComponent'
import { useSearchForm } from '../../hooks/useSearchForm'
import { animations_object } from '../../utils/animations/animations_object'
import { icons } from '../../utils/icons/icons_object'

export const Search = () => {
  const { showComponent, handleShowComponent } = useShowComponent()
  const navigate = useNavigate()
  const { setSearchAsset, setHandleAsset } = useContext(DataContext)
  const { intro_right } = animations_object;
  const [inputValue, setInputValue] = useState('')


  const handleSubmit =  ( e ) => {
    // debugger
    e.preventDefault();
    if(inputValue.length > 3) {
      const replaceSimbols = /\s/gi
      // await submitForm(e.target);
      setHandleAsset( inputValue.toLowerCase().replace(replaceSimbols, '-') )
      setInputValue('')
      navigate(`/crypto-asset`, { replace: true })
      handleShowComponent(!showComponent)
      // debugger
      // navigate('../asset/', { replace: true })
    }
  }

  const handleOnChange = ( e ) => {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }
  // 
  // debugger
  return (
    <div className={`search ${ intro_right }`}>
      {
        showComponent &&
          <form onSubmit={ handleSubmit } className={`search__form ${ intro_right }`}>
            <input 
              type="text" 
              className="search--input"
              value={ inputValue }
              onChange={ handleOnChange }
            />
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
