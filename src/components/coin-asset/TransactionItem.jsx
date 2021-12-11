import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const TransactionItem = () => {
  return (
    <li className="pd mg--b">
      <h3 className="transaction--date">Dec <span>15</span></h3>
      { icons.change_horizontal_icon }
      <h3 className="transaction--completed">Converted to asset-coin <span>Completed</span></h3>
      <h3 className="asset--amount">+92.851 <span>+$229.63</span></h3>
    </li>
  )
}
