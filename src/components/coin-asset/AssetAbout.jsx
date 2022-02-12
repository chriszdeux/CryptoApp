import React from 'react'
import { useContext } from 'react';
import { DataAssetContext } from '../../context/context';
import { animations_object } from '../../utils/animations/animations_object'

export const AssetAbout = () => {
  const { data: {
    description, name
  } } = useContext(DataAssetContext)
  const { intro } = animations_object;
  // debugger
  return (
    <div className={`asset__about mg--v pd ${ intro }`}>
      <div className="about__header mg--b">
        <h2>{ name }</h2>
        <h2>Traducir</h2>
      </div>
      <div className='about--asset'>
        {
          description.length > 0 &&
          description.map((item, index) => (
            <p key={index}>{ item }</p>
          ))
        }
        {/* <p>{ description } 
        </p> */}
      </div>
    </div> 
  )
}
