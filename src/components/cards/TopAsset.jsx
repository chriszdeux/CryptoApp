import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';

export const TopAsset = () => {
  return (
    <li className="top--asset">
      <figure>
        <img src={ kraken } alt="" />
      </figure>
      <h3>Kraken</h3>
      <h3 ><span>{ icons.up_icon }</span> 3.65%</h3>
      {/* <h3 style={{ color: '#f56b6b' }}><span>{ icons.down_icon }</span> 3.65%</h3> */}
    </li>
  )
}
