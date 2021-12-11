import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const AssetVolume = () => {
  return (
    <li>
      <h3>Volume <span>24h</span></h3>
      <h4>$26,854,842,521.23</h4>
      <h3>{ icons.up_icon } 2.61%</h3>
    </li>
  )
}
