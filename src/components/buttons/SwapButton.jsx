import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { icons } from '../../utils/icons/icons_object'

export const SwapButton = ({values}) => {
  const { handleShowComponent, showComponent } = values;
  // debugger
  const [flip, setFlip] = useState(false)
  
  useEffect(() => {
  const flipping = setInterval(() => {
      setFlip(!flip)
    }, 3000);

    return () => {
      clearInterval(flipping)
    }
  },)
  console.log('rendered')
  return (
    <button className="btn btn--swap " onClick={ handleShowComponent }>
      {
        flip 
          ? icons.convert_icon
          : 'Swap'
      }
    </button>
    // <button onClick={ handleShowComponent }>
    //   click
    // </button>
  )
}
