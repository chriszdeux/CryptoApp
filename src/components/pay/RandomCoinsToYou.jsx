import React from 'react'
import { SmallCardCoins } from '../cards/SmallCardCoins'

export const RandomCoinsToYou = () => {
  return (
    <div className="wrapper c100">
      <h2 className="wrapper--title">For you</h2>
      <div className="wrapper__cards c100">
        <SmallCardCoins />
        <SmallCardCoins />
        <SmallCardCoins />
        <SmallCardCoins />
        <SmallCardCoins />
      </div>
    </div>
  )
}
