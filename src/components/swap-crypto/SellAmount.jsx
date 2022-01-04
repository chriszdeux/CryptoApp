import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react/cjs/react.development';
import { useShowComponent } from '../../hooks/ShowComponent';
import { useForm } from '../../hooks/useForm';
import { useFormatNumbers } from '../../hooks/useFormatNumbers';
import { useWidthNumber } from '../../hooks/useWidthNumber';
import { icons } from '../../utils/icons/icons_object'

export const SellAmount = ({ setValidateAmount }) => {
  
  const { handleInputChange, inputValues } = useForm({
    amount: '', 
    asset: 0.000034, 
    // amount_total: Number
  });
  const { amount, asset } = inputValues

  const [convertedAsset, setConvertedAsset] = useState()
  
  const { inputWidth, handleWidth } =useWidthNumber( amount )
  const { width, font } = inputWidth
  // debugger
  const { formatNumber, handleFormatNumber } = useFormatNumbers( amount )
  useEffect(() => {
    
    handleWidth(amount)
    handleFormatNumber(amount)
    setValidateAmount(amount)
    setConvertedAsset( new Intl.NumberFormat(4).format(amount/asset) )
  }, [ amount ])


  return (
    <div className="swap__amount c100">
        
        <div className="amount c100">
          <form className="amount__input">
            <label htmlFor="amount">$</label>
            <input 
            // style={{ backgroundColor: 'red' } }
              className={ `amount--input ${ amount > 35000 || amount < 10 && 'amount--error' }` } 
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
          <p className="mg--b--3">{ convertedAsset } asset coins</p>
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
