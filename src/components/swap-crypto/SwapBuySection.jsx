import React from 'react'
import { Divider } from '../helpers/Divider'
import { Amount } from './Amount'
import { BuyPay } from './BuyPay'
import { RecurrentTransaction } from './RecurrentTransaction'
import { SwapNavbar } from './SwapNavbar'

export const SwapBuySection = ({ setValidateAmount }) => {
  return (
    <div className="buy__section">
      <Divider />
      <Amount setValidateAmount={ setValidateAmount }/>
      {/* <RecurrentTransaction /> */}
      <BuyPay />
    </div>
  )
}
