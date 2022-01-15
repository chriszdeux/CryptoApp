import React, { useEffect } from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
import { useState } from 'react';

export const TopAsset = ({ item }) => {
  const { name, image, price_change_percentage_24h } = !!item && item

  const [color, setColor] = useState('')

  useEffect(() => {
    (price_change_percentage_24h > 0)
     ? setColor('gainer--color')
     : setColor('loser--color')

  }, [item])
  // debugger
  return (
    <li className="top--asset">
      <figure>
        <img src={ image } alt="" />
      </figure>
      <h3>{ name }</h3>
      <h3 className={ color }>
        <span >
          { 
          price_change_percentage_24h >= 0 
            ? icons.up_icon 
            : icons.down_icon 
          }
        </span> { price_change_percentage_24h } %</h3>
      {/* <h3 style={{ color: '#f56b6b' }}><span>{ icons.down_icon }</span> 3.65%</h3> */}
    </li>
  )
}
