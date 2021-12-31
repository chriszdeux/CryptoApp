import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'

export const MainButton = ( {message} ) => {
  // debugger
  const { intro_up } = animations_object
  return (
    <button className={`btn btn--primary ${ intro_up }`}>
      {message}
    </button>
  )
}
