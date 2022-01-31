import React, { useContext } from 'react'
import { icons } from '../../utils/icons/icons_object'
import shib from '../../temp/shib.png'
import { DataContext } from '../../context/context'

export const AssetSelectionSell = ({ handleShowComponent }) => {
  const { handleAsset: {
    current_price, symbol, name, image
  } } = useContext(DataContext)
  return (
    <div className="swap__transaction pd--v">
      <h3>Sell</h3>
      {
        image && 
        <div className="swap__asset" >
          <figure className="coin__asset">
            <img src={ image } alt={ name } />
          </figure>
          <h3>{ name }</h3>
        </div>
      }
      <div onClick={ handleShowComponent }>
      { icons.forward_icon }
      </div>
    </div>
  )
}
