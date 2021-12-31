import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { SmallCardExchange } from '../cards/SmallCardExchange';

export const Top10Exchange = () => {
  const { intro } = animations_object;
  return (
    <div className={`wrapper c100 ${ intro }`} style={{ animationDelay: '1.9s' }}>
        <h2 className="wrapper--title">Exchanges</h2>
        <div className="wrapper__cards c100">
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />
        <SmallCardExchange />

        </div>
      </div>
  )
}
