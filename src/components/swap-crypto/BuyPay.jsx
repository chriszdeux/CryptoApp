import React, { useEffect, useState } from 'react'
import { icons } from '../../utils/icons/icons_object'
import { useShowComponent } from '../../hooks/ShowComponent'
import { AssetList } from './AssetList'
import { SwapBuy } from './SwapBuy'
import { PaymentList } from './PaymentList'
export const BuyPay = () => {
  const { handleShowComponent, showComponent, handleShowComponent2, showComponent2, animation2} = useShowComponent();
  // const [showPaymentMethods, setShowPaymentMethods] = useState(false)
  const { convert_icon } = icons
  // debugger
  return (
    <>
    <div className="swap__trade c95">
      <SwapBuy values={ {handleShowComponent, handleShowComponent2} }/>
      
   </div>
   {
     showComponent2 &&
     <AssetList values={ {handleShowComponent2, animation2} }/>
   }
   {/* {
     showComponent2 &&
     <PaymentList handleShowComponent2={ handleShowComponent2 }/>
   } */}
    </>
  )
}
