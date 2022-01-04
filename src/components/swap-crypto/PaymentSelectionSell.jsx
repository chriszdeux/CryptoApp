import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import shib from '../../temp/shib.png'
export const PaymentSelectionSell = ({ handleShowComponent2 }) => {
  return (
  <div className="swap__transaction pd--v">
      <h3>Account</h3>
      <div className="swap__asset" onClick={ handleShowComponent2 }>
        <figure className="coin__asset">
          <img src={ shib } alt="" />
        </figure>
        <h3>Chase Bank</h3>
      </div>
      { icons.foward_icon }
    </div>
  )
}
