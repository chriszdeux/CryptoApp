import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const Processing = () => {
  return (
    <div className="processing">
      <div>
        { icons.loading_icon }
        { icons.loading_2_icon }
      </div>
      <h2>Processing transaction</h2>
      {/* {icons} */}
    </div>
  )
}
