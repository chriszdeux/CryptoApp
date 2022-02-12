import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
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
  const [inputValue, setInputValue] = useState({
    search: ''
  })
  const { search } = inputValue
  // const location = useLocation()
  // const params = useParams()
  // // console.log(params)
  // debugger
  const handleSubmit =  ( e ) => {
    // debugger
    e.preventDefault();
    if(search.length > 3) {
      const replaceSimbols = /\s/gi
      // await submitForm(e.target);
      setHandleAsset( search.toLowerCase().replace(replaceSimbols, '-') )
      // debugger
      setInputValue('')
      navigate(`/crypto/crypto-asset/${search}`, { replace: true })
      handleShowComponent(!showComponent)
      // debugger
      // navigate('../asset/', { replace: true })
    }
  }

  const handleOnChange = ( e ) => {
    // debugger
    setInputValue({
      [e.target.name]:e.target.value
    })
    // console.log(e.target.value)
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
              name="search"
              className="search--input"
              value={ search }
              onChange={ handleOnChange }
              autoFocus
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
