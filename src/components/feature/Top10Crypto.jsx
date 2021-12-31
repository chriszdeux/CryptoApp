import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { SmallCardCoins } from '../cards/SmallCardCoins'

export const Top10Crypto = () => {
  const { intro } = animations_object;
  return (
    <div className={`wrapper__cards c100 ${ intro }`} style={{ animationDelay: '1.3s' }}>
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
      <SmallCardCoins />     
    </div>
  )
}
