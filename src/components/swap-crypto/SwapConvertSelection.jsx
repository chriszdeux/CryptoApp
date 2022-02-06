import React, { useEffect, useState } from 'react'
import { useShowComponent } from '../../hooks/ShowComponent'
import { icons } from '../../utils/icons/icons_object'
import { NotAvailable } from '../available/NotAvailable'
import { Divider } from '../helpers/Divider'
import { Amount } from './Amount'
import { AssetList } from './AssetList'
import { AssetListConvert } from './AssetListConvert'
import { AssetListToConvert } from './AssetListToConvert'
import { AssetSelection } from './AssetSelection'
import { AssetSelectionConvert } from './AssetSelectionConvert'
import { AssetSelectionConvertTo } from './AssetSelectionConvertTo'
import { AssetSelectionSell } from './AssetSelectionSell'
import { ConvertAmount } from './ConvertAmount'
import { MyAccounts } from './MyAccounts'
import { MyAssetList } from './MyAssetList'
import { PaymentList } from './PaymentList'
import { PaymentSelection } from './PaymentSelection'
import { PaymentSelectionSell } from './PaymentSelectionSell'
import { SellAmount } from './SellAmount'

export const SwapConvertSection = ({ setValidateAmount }) => {
  const { handleShowComponent, showComponent, handleShowComponent2, showComponent2, } = useShowComponent();
  const [swapBuying, setSwapBuying] = useState(true)
  useEffect(() => {
    console.log(swapBuying)
  }, [swapBuying])

  const handleSwap = () => {
    setSwapBuying(!swapBuying)
  }
  // ConvertA
  return (
    <>
    <div className="sell__section">
      <Divider />
      {/* <ConvertAmount setValidateAmount={ setValidateAmount }/> */}
      {/* <RecurrentTransaction /> */}
      <div className="swap__buy c90">
      <NotAvailable />
      {/* <AssetSelectionConvert handleShowComponent={ handleShowComponent }/>
      <AssetSelectionConvertTo handleShowComponent2={ handleShowComponent2 }/> */}
      {/* <PaymentSelectionSell handleShowComponent2={ handleShowComponent2 }/> */}
        
      {/* <div className="swap--icon" onClick={ handleSwap }>
        { icons.convert_icon }
      </div>  */}
      </div>
    </div>
    {
     showComponent &&
     <AssetListConvert handleShowComponent={ handleShowComponent }/>
   }
   {
     showComponent2 &&
     <AssetListToConvert handleShowComponent2={ handleShowComponent2 }/>
   }
    </>
  )
}
