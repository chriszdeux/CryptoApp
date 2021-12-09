import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import shib from '../../temp/shib.png'
export const AssetSelection = ({ handleShowComponent }) => {
  return (
    <div className="swap__transaction pd--v">
      <h3>Buy</h3>
      <div className="swap__asset" onClick={ handleShowComponent }>
        <figure className="coin__asset">
          <img src={ shib } alt="" />
        </figure>
        <h3>Shiba Inu</h3>
      </div>
      <div >
      { icons.foward_icon }
      </div>
    </div>
  )
}
