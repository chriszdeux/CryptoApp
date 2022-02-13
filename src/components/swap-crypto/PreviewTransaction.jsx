import React, { useContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionBuy } from '../../actions/actionBuy'
// import { useEffect, useState } from 'react/cjs/react.development'
import { DataContext, DataTransactionContext } from '../../context/context'
import { icons } from '../../utils/icons/icons_object'
import { MainButton } from '../buttons/MainButton'
import { animations_object } from '../../utils/animations/animations_object'
import { actionTransaction } from '../../actions/actionTransaction'
import { useShowComponent } from '../../hooks/ShowComponent'
import { Processing } from '../loading/Processing'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'
import { useNavigate } from 'react-router-dom'

export const PreviewTransaction = ({ values }) => {
  const { handleShowComponent2:closingComponent, handleShowComponent } = values
  const { intro_up, intro, exit } = animations_object

  const { handleAsset, handleTransactions:{
    previewTransaction
  } } = useContext(DataContext)
  const {
    current_price,
    symbol,
    name, 
    image
  } = handleAsset
  const dispatch = useDispatch()
  // const { previewTransaction } = useContext(DataTransactionContext)
  const {
    asset,
    amount_crypto,
    amount_dollar,
    fee,
  } = previewTransaction
  
  // debugger
  const navigate = useNavigate()
  const [total, setTotal] = useState(0);
  
  // debugger

  useEffect(() => {
    setTotal( Number(amount_dollar) + fee )
  }, [ amount_dollar ])
  // debugger
//  debugger
const { showComponent2, handleShowComponent2 } = useShowComponent()
const [animationTransaction, setAnimationTransaction] = useState(intro);
  const submitTransaction = (e) => {
    handleShowComponent2()
   setTimeout(() => {
    setAnimationTransaction(exit)
    setTimeout(() => {
      e.preventDefault()
      dispatch(actionBuy({...handleAsset, amount_crypto, amount_dollar}))
      dispatch(actionTransaction({ handleAsset,  previewTransaction}))
      handleShowComponent();
      navigate('/crypto', { replace: true })
    }, 1000);
   }, 8000);
  }

  const priceFormat = useFormatNumbers(current_price);
  const amontDollarFormat = useFormatNumbers(amount_dollar);
  const totalFormat = useFormatNumbers(total);
  // debugger
  return (
    <>
    <div className={`preview__transaction ${intro}`}>
      {/* <div onClick={ handleShowComponent }>
      { icons.back_icon }

      </div> */}
      <h3 className="mg--v">Order Preview</h3>
      <figure className='asset__image__preview'>
        <img src={ image } alt="" />
      </figure>
      <h2 className="mg--v">{ amount_crypto } <span>{ symbol } coins</span></h2>
      <ul className="preview__info c80 ">
        <li>{ symbol } price <span>${ priceFormat }</span></li>
        {/* <li>Payment method <span>Chase</span></li> */}
        <li>Purchase <span>${ amontDollarFormat }</span></li>
        <li>Crypto Ant Fee <span>${ fee }</span></li>
        <li>Total <span>${ totalFormat }</span></li>
      </ul>

      <div className={`${intro}`}>
      <button className={`btn btn--primary `} onClick={ submitTransaction }>
        Buy now
      </button>
        <button className={`btn btn--cancel `} onClick={ handleShowComponent }>
        Cancel
      </button>

      </div>
      <figure className='asset__background'>
        {
          image && <img src={ image } alt="" />
        }
      </figure>
    </div>
    {
      showComponent2 && <Processing values={{ image, handleShowComponent2, closingComponent }}/>
    }
    </>
  )
}
