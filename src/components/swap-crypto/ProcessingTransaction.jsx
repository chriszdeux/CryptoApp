import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import image from '../../utils/vector/server.svg'
import { BackgroundImage } from '../main/BackgroundImage'
export const ProcessingTransaction = () => {
  return (
    <div className="processing"> 
      <div>
        <h2>Processing Transaction</h2>
        { icons }
      </div>
      <BackgroundImage image={ image }/>
    </div>
  )
}
