import React from 'react'
import world from '../../utils/vector/world.svg';

export const BackgroundImage = () => {
  return (
    <>
    <figure className="background__image">
      <img className="background--image" src={ world } alt="" />
      {/* <div className="blur">
      </div> */}
    </figure>
    <div className="background"></div>
    </>
  )
}
