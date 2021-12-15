import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const Pagination = () => {
  return (
    <div className="regular__pagination c50">
      <div className="prev">{ icons.back_icon }</div>
      <div className="next">{ icons.forward_icon }</div>
    </div>
  )
}
