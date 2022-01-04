import React from 'react'
import { useShowComponent } from '../../hooks/ShowComponent'
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

export const SwapSellSection = ({ setValidateAmount }) => {
  const { handleShowComponent, showComponent, handleShowComponent2, showComponent2, } = useShowComponent();

  return (
    <>
    <div className="sell__section">
      <Divider />
      <SellAmount setValidateAmount={ setValidateAmount }/>
      {/* <RecurrentTransaction /> */}
      <div className="swap__buy c90">
      
      <AssetSelectionSell handleShowComponent={ handleShowComponent }/>
      <PaymentSelectionSell handleShowComponent2={ handleShowComponent2 }/>
        
      {/* <div className="swap--icon" onClick={ handleSwap }>
        { icons.convert_icon }
      </div> */}
      </div>
    </div>
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
