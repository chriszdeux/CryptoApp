import React, { useEffect, useState } from 'react'
import { useValidateAmount } from '../../hooks/useValidateAmount'
import { icons } from '../../utils/icons/icons_object'
import { Amount } from '../swap-crypto/Amount'
import { SwapBalance } from '../swap-crypto/SwapBalance';
import { useForm } from '../../hooks/useForm';
import { MainButton } from '../buttons/MainButton';
import { PaymentSelection } from '../swap-crypto/PaymentSelection';
import { Pay } from './Pay';
import { useShowComponent } from '../../hooks/ShowComponent';
import { Recieve } from './Recieve';


export const TransactionSection = ({values}) => {
  const { handleRecieve, handleSend } = values
  const { showComponent, handleShowComponent } = useShowComponent( true )


  useEffect(() => {
    // handleSend()
  }, [  ])

  return (
    <div className="transaction__section c95">
      <ul className="buy__recieve 100">
        <li onClick={ handleSend }>Send</li>
        <li onClick={ handleRecieve }>Recieve</li>
      </ul>
      
    </div>
    
  )
}
