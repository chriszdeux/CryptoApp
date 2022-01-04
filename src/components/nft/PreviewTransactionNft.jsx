import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { MainButton } from '../buttons/MainButton'
import image from '../../temp/chain.jpg'
export const PreviewTransactionNft = ({ handleShowComponent }) => {
  return (
    <div className="preview__transaction">
      <div onClick={ handleShowComponent }>
      { icons.back_icon }

      </div>
      <h3 className="mg--v--3">Order Preview</h3>
      <figure>
        <img src={ image } alt="" />
      </figure>
      <h2>Asset Name</h2>
      <ul className="preview__info c80 ">
        <li>ETH price <span>$123.52</span></li>
        <li>Payment method <span>Chase</span></li>
        <li>Purchase <span>$1,236</span></li>
        <li>Crypto Ant Fee <span>$10</span></li>
        <li>Total <span>$1236</span></li>
      </ul>

      <MainButton message={'Buy Now'}/>
    </div>
  )
}
