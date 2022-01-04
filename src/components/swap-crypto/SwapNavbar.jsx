import React from 'react'

export const SwapNavbar = ({values}) => {
  const { handleBuy, handleSell, handleConvert } = values
  return (
    <ul className="swap__options c100 mg--b">
      <li onClick={ handleBuy }>Buy</li>
      <li onClick={ handleSell }>Sell</li>
      <li onClick={ handleConvert }>Convert</li>
    </ul>
  )
}
