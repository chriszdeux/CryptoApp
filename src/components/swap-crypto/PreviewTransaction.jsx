import React, { useContext, useState, useEffect } from 'react'
// import { useEffect, useState } from 'react/cjs/react.development'
import { DataContext, DataTransactionContext } from '../../context/context'
import { icons } from '../../utils/icons/icons_object'
import { MainButton } from '../buttons/MainButton'

export const PreviewTransaction = ({ handleShowComponent }) => {
  const { handleAsset: {
    current_price,
    symbol,
    name, 
    image
  } } = useContext(DataContext)
  const { previewTransaction: {
    asset,
    amount_crypto,
    amount_dollar,
    fee,
  }} = useContext(DataTransactionContext)

  // debugger
  const [total, setTotal] = useState(0);
  
  // debugger

  useEffect(() => {
    setTotal( Number(amount_dollar) + fee )
  }, [ amount_dollar ])
  // debugger
//  debugger
  return (
    <div className="preview__transaction">
      <div onClick={ handleShowComponent }>
      { icons.back_icon }

      </div>
      <h3 className="mg--v--3">Order Preview</h3>
      <figure className='asset__image__preview'>
        <img src={ image } alt="" />
      </figure>
      <h2 className="mg--v--3">{ amount_crypto } <span>{ symbol } coins</span></h2>
      <ul className="preview__info c80 ">
        <li>{ symbol } price <span>${ current_price }</span></li>
        {/* <li>Payment method <span>Chase</span></li> */}
        <li>Purchase <span>${ amount_dollar }</span></li>
        <li>Crypto Ant Fee <span>${ fee }</span></li>
        <li>Total <span>${ total }</span></li>
      </ul>

      <MainButton message={'Buy Now'}/>
      <figure className='asset__background'>
        {
          image && <img src={ image } alt="" />
        }
      </figure>
    </div>
  )
}
