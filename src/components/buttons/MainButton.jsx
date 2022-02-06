import React from 'react'
import { Link } from 'react-router-dom'
import { animations_object } from '../../utils/animations/animations_object'

export const MainButton = ( {message}, { handleShowComponent2 } ) => {
  // debugger
  const handleSubmit = ( e ) => {
    e.preventDefault()
    handleShowComponent2()
  }
  const { intro_up } = animations_object
  return (
      // <Link to="/process">
    <div onClick={ handleSubmit } className={`btn btn--primary ${ intro_up }`}>
      {message}
    </div>
  )
}
