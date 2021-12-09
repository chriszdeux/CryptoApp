import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import shib from '../../temp/shib.png'
export const PaymentSelection = ({ handleShowComponent2 }) => {
  return (
  <div className="swap__transaction pd--v">
      <h3>Pay</h3>
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
