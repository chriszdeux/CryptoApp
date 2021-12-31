import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { icons } from '../../utils/icons/icons_object'
import { BackgroundImage } from '../main/BackgroundImage'

export const RegisterCard = ({ handleShowComponent }) => {
  const { intro_right } = animations_object;
  return (
    <div className={`register__card c100 ${ intro_right }`}>
      <div className="close" onClick={ handleShowComponent }>
        { icons.back_icon }
      </div>
      <div className="card__preview c95">
        <h2>Name on card</h2>
        <h2>xxxx-xxxx-xxxx-xxxx</h2>
        <h2>00/00 <span>***</span></h2>
      </div>

      <form action="" className="card__billing c95">
        <h2>Billing</h2>
        <div className="billing__fields">
          <input type="text" placeholder="Name on card"/>
          <input type="text" placeholder="Address"/>
          <input type="text" placeholder="ZIP"/>
          <input type="text" placeholder="City"/>
        </div>
        <button className="btn btn--primary">Add Card</button>
      </form>
      {/* <BackgroundImage /> */}
    </div>
  )
}
