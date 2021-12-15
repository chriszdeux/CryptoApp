import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useValidateAmount } from '../../hooks/useValidateAmount';
import shib from '../../temp/shib.png';
import { icons } from '../../utils/icons/icons_object';
import { Amount } from '../swap-crypto/Amount';
import { SwapBalance } from '../swap-crypto/SwapBalance';

export const Pay = ({ handleShowComponent }) => {
  const { setValidateAmount } = useValidateAmount();
  const { handleInputChange, inputValues } = useForm({
    to: '',
    note: '',
  })
  const { to, note } = inputValues;


  return (
    <div className="send__section c95">
    <Amount setValidateAmount={ setValidateAmount }/>
      <button className="btn btn--outline"> Send All </button>
      <form onSubmit="" className="form__send mg--t--3">
        <div className="to">
          <label htmlFor="to">To 
          { icons.wallet_icon }
          
          </label>
          <input type="text"  id="to" name="to" value={ to } onChange={ handleInputChange } placeholder="Mobile, email or address"/>
        </div>
        <div className="note">
          <label htmlFor="note">Note 
          
          { icons.pencil_icon }
          </label>
          <input type="text"  id="note" name="note" value={ note } onChange={ handleInputChange } placeholder="Optional message"/>
        </div>
        <div className="pay__with">
          <label htmlFor="payment">Pay with
            <figure>
              <img src={ shib } alt="" />
            </figure>
          
          </label>
          <div className="pay__asset" onClick={ handleShowComponent }>
            { icons.forward_icon }
          </div>
        </div>

      </form>
      <button className="btn btn--large">Send</button>
      <SwapBalance />
    </div>
  )
}
