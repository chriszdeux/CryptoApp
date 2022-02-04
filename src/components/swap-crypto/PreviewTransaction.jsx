import React, { useContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionBuy } from '../../actions/actionBuy'
// import { useEffect, useState } from 'react/cjs/react.development'
import { DataContext, DataTransactionContext } from '../../context/context'
import { icons } from '../../utils/icons/icons_object'
import { MainButton } from '../buttons/MainButton'
import { animations_object } from '../../utils/animations/animations_object'
import { actionTransaction } from '../../actions/actionTransaction'

export const PreviewTransaction = ({ handleShowComponent }) => {
  const { intro_up, intro, exit } = animations_object

  const { handleAsset } = useContext(DataContext)
  const {
    current_price,
    symbol,
    name, 
    image
  } = handleAsset
  const dispatch = useDispatch()
  const { previewTransaction } = useContext(DataTransactionContext)
  const {
    asset,
    amount_crypto,
    amount_dollar,
    fee,
  } = previewTransaction
  
  // debugger
  
  const [total, setTotal] = useState(0);
  
  // debugger

  useEffect(() => {
    setTotal( Number(amount_dollar) + fee )
  }, [ amount_dollar ])
  // debugger
//  debugger
const [animationTransaction, setAnimationTransaction] = useState(intro);
  const submitTransaction = (e) => {
    setAnimationTransaction(exit)
    e.preventDefault()
    dispatch(actionBuy({...handleAsset, amount_crypto, amount_dollar}))
    dispatch(actionTransaction({ handleAsset,  previewTransaction}))
    setTimeout(() => {
      handleShowComponent()
    }, 300);
  }

  // debugger
  return (
    <div className={`preview__transaction ${intro_up}`}>
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

      <button className={`btn btn--primary ${ intro_up }`} onClick={ submitTransaction }>
      Buy now
    </button>
      <figure className='asset__background'>
        {
          image && <img src={ image } alt="" />
        }
      </figure>
    </div>
  )
}
