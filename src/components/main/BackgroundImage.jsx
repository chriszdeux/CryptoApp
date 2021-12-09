import React from 'react'

export const BackgroundImage = ({image}) => {
  return (
    <>
    <figure className="background__image">
      <img className="background--image" src={ image } alt="" />
      {/* <div className="blur">
      </div> */}
    </figure>
    <div className="background"></div>
    </>
  )
}
