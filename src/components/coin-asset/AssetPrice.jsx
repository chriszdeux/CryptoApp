import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const AssetPrice = () => {
  return (
    <div className="asset__price c100 mg--b">
      <h3>Bitcoin price ( BTC )</h3>
      <h2>$48,654.36 <span>{ icons.up_icon } 11.6%</span></h2>
    </div>
  )
}
