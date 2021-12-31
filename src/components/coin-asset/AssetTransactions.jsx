import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { icons } from '../../utils/icons/icons_object'
import { Divider } from '../helpers/Divider'
import { TransactionItem } from './TransactionItem'

export const AssetTransactions = () => {
  const { intro } = animations_object;
  return (
    <div className={`asset__transactions ${ intro }`}>
      <h2 className="pd">Balance 1,984.36 asset-coin ( $6036.85 )</h2>
      <ul className="asset__transaction__list">
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        {/* <Divider /> */}
      </ul>
    </div>
  )
}
