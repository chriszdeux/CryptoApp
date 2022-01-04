import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const AssetAccount = () => {
  return (
    <li className="asset--bank--item c100">
      <div className="asset--bank c100 pd">
        { icons.bank_icon }
        <h3 className="asset--bank--name">chase <strong>****4596</strong></h3>
        { icons.check_icon }
      </div>
      <p>$35,000.00 sell limit remaining. Assets sold out will appear in a 1-3 bussines days.</p>
    </li>
  )
}
