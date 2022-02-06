import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/context'
import { useShowComponent } from '../../hooks/ShowComponent'
import { useValidateAmount } from '../../hooks/useValidateAmount'
import { NotAvailable } from '../available/NotAvailable'
import { Divider } from '../helpers/Divider'
import { Amount } from './Amount'
import { AssetList } from './AssetList'
import { AssetSelection } from './AssetSelection'
import { AssetSelectionSell } from './AssetSelectionSell'
import { MyAccounts } from './MyAccounts'
import { MyAssetList } from './MyAssetList'
import { PaymentList } from './PaymentList'
import { PaymentSelection } from './PaymentSelection'
import { PaymentSelectionSell } from './PaymentSelectionSell'
import { SellAmount } from './SellAmount'

export const SwapSellSection = () => {
  const { handleShowComponent, showComponent, handleShowComponent2, showComponent2, } = useShowComponent();
  const { handleAsset } = useContext(DataContext)
  // debugger
  const {
    amount_dollar, realPrice
  } = handleAsset

  const { warningAmount, validateAmount, setValidateAmount, handleWarningAmount } = useValidateAmount(realPrice);
  
  useEffect(() => {
    handleWarningAmount()
    // debugger
  }, [  validateAmount])
  return (
    <>
    <div className="sell__section">
      <Divider />
      {/* <SellAmount setValidateAmount={ setValidateAmount }/> */}
     <div className="swap__buy c90">
    <NotAvailable />
      
      {/* <AssetSelectionSell handleShowComponent={ handleShowComponent }/>
      <PaymentSelectionSell handleShowComponent2={ handleShowComponent2 }/> */}

      </div>
    </div>
    {
        warningAmount &&
        <button className="btn btn--primary" onClick={ handleShowComponent } >
          Preview Transaction
        </button>
      }
    {
     showComponent &&
     <MyAssetList handleShowComponent={ handleShowComponent }/>
   }
   {
     showComponent2 &&
     <MyAccounts handleShowComponent2={ handleShowComponent2 }/>
   }
    </>
  )
}
