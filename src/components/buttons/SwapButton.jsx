import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react/cjs/react.development'
import { animations_object } from '../../utils/animations/animations_object';
import { icons } from '../../utils/icons/icons_object'

export const SwapButton = ({values}) => {
  const { handleShowComponent2, showComponent } = values;
  // debugger
  const [flip, setFlip] = useState(false)
  const { intro } = animations_object;

  useEffect(() => {
    const flipping = setInterval(() => {
      setFlip(!flip)
    }, 3000);

    return () => {
      clearInterval(flipping)
    }
  }, [  ])
  console.log('rendered')
  return (
    <button className={`btn btn--swap ${ intro }`} onClick={ handleShowComponent2} style={{ animationDelay: '1.5s' }}>
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
