import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const AssetBtcEth = () => {
  return (
    <ul className="asset__btc__eth mg--b">
      <li>0.00000788 BTC <span>{ icons.up_icon } 11.44%</span></li>
      <li>0.00000788 ETH <span>{ icons.up_icon } 3.44%</span></li>
    </ul>
  )
}
