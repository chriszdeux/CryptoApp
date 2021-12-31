import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { Divider } from '../helpers/Divider'
import { BackgroundImage } from '../main/BackgroundImage'
import image from '../../utils/vector/payment.svg';
import { AssetBank } from './AssetBank';
import { useShowComponent } from '../../hooks/ShowComponent';
import { RegisterCard } from './RegisterCard';
import { animations_object } from '../../utils/animations/animations_object';
export const PaymentList = ({ handleShowComponent2 }) => {
  const { showComponent, handleShowComponent } = useShowComponent()
  const { intro_right } = animations_object;
  return (
    <div className={`asset__swap c100 pd ${ intro_right }`}>
      <h2>Select Payment method</h2>
      <div className="close" onClick={ handleShowComponent2 }>
        { icons.close_icon }
      </div>
      <Divider />
      
      <ul className="asset__list c100">
        <AssetBank />
        <AssetBank />
      </ul>
      <button className="btn btn--primary" onClick={ handleShowComponent }>Add new payment method</button>
      {/* <BackgroundImage image={ image }/> */}
      {
        showComponent && <RegisterCard handleShowComponent={ handleShowComponent }/>
      }
    </div>
  )
}
