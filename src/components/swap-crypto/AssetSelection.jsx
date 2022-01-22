import React, { useContext } from 'react'
import { icons } from '../../utils/icons/icons_object'
import shib from '../../temp/shib.png'
import { DataContext } from '../../context/context'
import { useSelector } from 'react-redux'
export const AssetSelection = ({ handleShowComponent }) => {
  const { handleAsset:{
    image, name, id
  } } = useContext(DataContext)
  const { data } = useSelector(state => state.data_reducer)
  // debugger
  return (
    <div className="swap__transaction pd--v">
      <h3>Buy</h3>
      {
        id !== undefined
        ?  <div className="swap__asset" onClick={ handleShowComponent }>
            <figure className="coin__asset">
              <img src={ image } alt={ id } />
            </figure>
            <h3>{ name }</h3>
          </div>
        : <div className="swap__asset" onClick={ handleShowComponent }>
            <figure className="coin__asset">
              <img src={ data[0].image } alt={ data[0].id } />
            </figure>
            <h3>{ data[0].name }</h3>
          </div>
      }
      <div >
      { icons.foward_icon }
      </div>
    </div>
  )
}
