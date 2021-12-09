import React, { useState } from 'react'
import { icons } from '../../utils/icons/icons_object'
import { MainButton } from '../buttons/MainButton'
import shib from '../../temp/shib.png'
import { Divider } from '../helpers/Divider'
import { useForm } from '../../hooks/useForm'
import { useEffect } from 'react/cjs/react.development'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'
import { useWidthNumber } from '../../hooks/useWidthNumber'
import { BuyPay } from './BuyPay'
import { Amount } from './Amount'
import { SwapNavbar } from './SwapNavbar'
import { SwapBalance } from './SwapBalance'
export const SwapCrypto = ({ handleShowComponent }) => {
  const [validateAmount, setValidateAmount] = useState(false)
  return (
    <div className="swap c100">
      <div className="swap__back" onClick={ handleShowComponent }>
      { icons.back_icon }
      </div>
      <SwapNavbar />
      <Divider />
      <Amount setValidateAmount={ setValidateAmount }/>
      <BuyPay />
      {
        validateAmount >= 10 &&
        <MainButton message={'Preview Buy'}/>
      }
      <SwapBalance />
    </div>
  )
}
