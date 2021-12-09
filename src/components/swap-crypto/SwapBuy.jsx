import React, { useEffect, useState } from 'react'
import { icons } from '../../utils/icons/icons_object'
import shib from '../../temp/shib.png'
import { AssetSelection } from './AssetSelection'
import { PaymentSelection } from './PaymentSelection'

export const SwapBuy = ({ values }) => {
  const { handleShowComponent, handleShowComponent2 } = values
  const [swapBuying, setSwapBuying] = useState(true)
  useEffect(() => {
    console.log(swapBuying)
  }, [swapBuying])

  const handleSwap = () => {
    setSwapBuying(!swapBuying)
  }
  return (
    <>
      <div className="swap__buy c90">
      
        {
          swapBuying
          ?  <AssetSelection handleShowComponent={ handleShowComponent }/>
          : <PaymentSelection handleShowComponent2={ handleShowComponent2 }/>
            
        }

        {
          swapBuying
          ? <PaymentSelection handleShowComponent2={ handleShowComponent2 }/>
          :  <AssetSelection handleShowComponent={ handleShowComponent }/>
        }
      </div>
      <div className="swap--icon" onClick={ handleSwap }>
        { icons.convert_icon }
      </div>
  </>
  )
}
