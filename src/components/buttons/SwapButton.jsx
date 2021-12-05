import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { icons } from '../../utils/icons/icons_object'

export const SwapButton = () => {
  const [flip, setFlip] = useState(false)
  useEffect(() => {
    const flipping = setInterval(() => {
      setFlip(!flip)
    }, 3000);

    return () => {
      clearInterval(flipping)
    }
  })
  return (
    <button className="btn btn--swap">
      {
        flip 
          ? icons.convert_icon
          : 'Swap'
      }
    </button>
  )
}
