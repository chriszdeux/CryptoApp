import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DataContext } from '../../context/context'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'

export const SwapBalance = () => {
  const data = useSelector(state => state.buy_asset_reducer)
  const { handleAsset } = useContext(DataContext)
  const { realPrice } = handleAsset
  const [swapAssetBalance, setSwapAssetBalance] = useState([]);
  const { amount_crypto, amount_dollar, name, symbol, current_price } = swapAssetBalance.length > 0 && swapAssetBalance[0] 
  // debugger
  const [balance, setBalance] = useState(0);
  const formatCryptoAmount = useFormatNumbers(amount_crypto)
  const formatBalance = useFormatNumbers(balance)
  useEffect(() => {
    setSwapAssetBalance( data.filter( item => item.id === handleAsset.id ) )
    
  }, [ handleAsset, data ])
  // debugger
  useEffect(() => {
    // debugger
    setBalance( (current_price * amount_crypto) )

  }, [ swapAssetBalance ])
  return (
    <>
    {
      swapAssetBalance.length > 0 &&
      <div className="swap__balance c95">
        <h3>{ name } balance</h3>
        <h3>{ formatCryptoAmount } { symbol  } = ${  formatBalance }</h3>
      </div>
    }
    </>
  )
}
