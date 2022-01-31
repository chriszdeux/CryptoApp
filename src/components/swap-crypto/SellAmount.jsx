import React, { useState, useEffect, useContext } from 'react'
import { DataContext, DataTransactionContext } from '../../context/context';
// import { useEffect } from 'react/cjs/react.development';
import { useShowComponent } from '../../hooks/ShowComponent';
import { useForm } from '../../hooks/useForm';
import { useFormatNumbers } from '../../hooks/useFormatNumbers';
import { useWidthNumber } from '../../hooks/useWidthNumber';
import { icons } from '../../utils/icons/icons_object'

export const SellAmount = ({ setValidateAmount }) => {
  
  const { handleAsset: {
    current_price, symbol, name, amount_dollar, amount_crypto, realPrice
  } } = useContext(DataContext)
  const { handlePrevTransaction, previewTransaction } = useContext(DataTransactionContext);

  const { handleInputChange, inputValues } = useForm({
    amount: '', 
    // asset: 0.000034, 
    // amount_total: Number
  });
  const { amount } = inputValues

  const [convertedAsset, setConvertedAsset] = useState()
  
  const { inputWidth, handleWidth } =useWidthNumber( amount )
  const { width, font } = inputWidth
  const [cleanPrice, setCleanPrice] = useState(null);

  const { formatNumber, handleFormatNumber } = useFormatNumbers( amount )
  useEffect(() => {
    
    handleWidth(amount)
    handleFormatNumber(amount)
    setValidateAmount(amount)
    // setConvertedAsset( new Intl.NumberFormat().format(amount/cleanPrice) )
  }, [ amount, cleanPrice ])

  useEffect(()=> {
    handlePrevTransaction(name, convertedAsset, amount)
  }, [ convertedAsset ])

  const [handleAmountError, setHandleAmountError] = useState('');
  useEffect(() => {
    if(amount > amount_dollar && amount < 10 || amount > realPrice && amount < 10) {
      // debugger
      setHandleAmountError('amount--error')
    }
  }, [ amount, realPrice ])

  return (
    <div className="swap__amount c100">
        
        <div className="amount c100">
          <form className="amount__input">
            <label htmlFor="amount">$</label>
            <input 
            // style={{ backgroundColor: 'red' } }
              className={ `amount--input ${ handleAmountError} ` } 
              type="number" 
              name="amount" 
              placeholder="0"
              onChange={ handleInputChange }
              value={ amount }
              style={{ width: `${width}`, fontSize: `${font}` }}
              autoFocus
            />
          </form>
          {/* <h2><span className="mg--t--3">$</span>0</h2> */}
          {
            formatNumber &&
          <p className="mg--b--3">{ amount_crypto } { symbol } coins</p>
          }
          {/* <h2><span className="mg--t--3">$</span>0</h2> */}
          <p className="mg--b--3">You can sell up to $35,000</p>
          
        </div>
        {/* <div className="swap__crypto">
          { icons.convert_icon }
          <h3>Eth</h3>
        </div> */}
      </div>
  )
}
