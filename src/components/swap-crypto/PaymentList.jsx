import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { Divider } from '../helpers/Divider'
import { BackgroundImage } from '../main/BackgroundImage'
import image from '../../utils/vector/payment.svg';
import { AssetBank } from './AssetBank';
export const PaymentList = ({ handleShowComponent2 }) => {
  return (
    <div className="asset__swap c100 pd">
      <h2>Select Payment method</h2>
      <div className="close" onClick={ handleShowComponent2 }>
        { icons.close_icon }
      </div>
      <Divider />
      
      <ul className="asset__list c100">
        <AssetBank />
        <AssetBank />
      </ul>
      <BackgroundImage image={ image }/>
    </div>
  )
}
