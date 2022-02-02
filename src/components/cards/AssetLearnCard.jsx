import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/context';
import { useShowComponent } from '../../hooks/ShowComponent';
import image from '../../temp/kraken.png';
import { animations_object } from '../../utils/animations/animations_object';
export const AssetLearnCard = ({ values }) => {
  const { intro_right } = animations_object;
  const { item, handleShowComponent } = values;
  const { title, image_background, earn_dollars, duration, cryptocurrency } = item
  const { setDataEarning } = useContext(DataContext);
  const handleDataEarning = () => {
    setDataEarning(item)
    handleShowComponent()
  }
  return (
    <article className={`learn__card mg--r--3 ${ intro_right }`} onClick={ handleDataEarning }>
      <figure className="mg--b">
        <img src={ image_background } alt={ title } />
      </figure>
      <h2 className="mg--b pd">{ title }</h2>
      <h3 className="mg--b pd">Earn ${ earn_dollars } in { cryptocurrency }<span>{ duration }min</span></h3>
    </article>
  )
}
