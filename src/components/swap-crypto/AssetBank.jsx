import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const AssetBank = () => {
  return (
    <li className="asset--bank--item c100">
      <div className="asset--bank c100 pd">
        { icons.bank_icon }
        <h3 className="asset--bank--name">chase <strong>****4596</strong></h3>
        { icons.check_icon }
      </div>
      <p>$35,000.00 buying limit remaining. Assets bought will be on hold for a few days.</p>
    </li>
  )
}
