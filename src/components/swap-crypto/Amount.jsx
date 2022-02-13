import React, { useState, useEffect, useContext } from 'react'
import { DataContext, DataTransactionContext } from '../../context/context';
// import { useEffect } from 'react/cjs/react.development';
import { useShowComponent } from '../../hooks/ShowComponent';
import { useForm } from '../../hooks/useForm';
import { useFormatNumbers } from '../../hooks/useFormatNumbers';
import { useWidthNumber } from '../../hooks/useWidthNumber';
import { animations_object } from '../../utils/animations/animations_object';
import { icons } from '../../utils/icons/icons_object'

export const Amount = ({ setValidateAmount }) => {
  const { intro_up } = animations_object
  const { handleBuyAsset: {
    current_price, symbol, name
  }, handleTransactions: { handlePrevTransaction }, handleBuyAsset } = useContext(DataContext)
  // const [cleanPrice, setCleanPrice] = useState(0);
  // debugger
  // useEffect(() => {
  //   if(current_price) {
  //     setCleanPrice( current_price.replace(',','') )
  //   }
  // }, [current_price ])

  const { handleInputChange, inputValues } = useForm({
    amount: Number, 
    // asset: 0.000034, 
    // amount_total: Number
  });
  const { amount } = inputValues

  const [convertedAsset, setConvertedAsset] = useState()
  
  const { inputWidth, handleWidth } =useWidthNumber( amount )
  const { width, font } = inputWidth
  // debugger
  const amountFormat = useFormatNumbers( convertedAsset )
  useEffect(() => {
    
    handleWidth(amount)
    setValidateAmount(amount)
    setConvertedAsset( amount/current_price )
  }, [ amount ])
  // debugger
  useEffect(()=> {
    handlePrevTransaction(name, convertedAsset, amount)
  }, [ convertedAsset ])
  // debugger
  return (
    <div className="swap__amount c100">
        
        <div className="amount c100">
          <form className="amount__input">
            <label htmlFor="amount">$</label>
            <input 
            // style={{ backgroundColor: 'red' } }
              className={ `amount--input ${ amount > 1000 || amount < 10 && 'amount--error' }` } 
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
            amount >= 10 &&
          <p className={`mg--b--3 ${ intro_up }`}>{ amountFormat } { symbol } coins</p>
          }
          {/* {
            formatNumber &&
          } */}
          {/* <h2><span className="mg--t--3">$</span>0</h2> */}
          <p className="mg--b--3">You can buy up to $1,000</p>
          
        </div>
        {/* <div className="swap__crypto">
          { icons.convert_icon }
          <h3>Eth</h3>
        </div> */}
      </div>
  )
}
