import React from 'react'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'
import { icons } from '../../utils/icons/icons_object'

export const TransactionItem = ({ item }) => {
  // debugger
  const { date:{ month, day, day_number }, transaction_type, name, amount_asset, amount_bought, symbol } = item
  const formatAmountAsset = useFormatNumbers(amount_asset)
  const formatAmountBought = useFormatNumbers(amount_bought)
  return (
    <li className="pd mg--b">
      <h3 className="transaction--date">{ month } { day_number }<span>{ day }</span></h3>
      { icons.change_horizontal_icon }
      <h3 className="transaction--completed">{ transaction_type } { name } <span>Completed</span></h3>
      <h3 className="asset--amount">+{ formatAmountAsset }{ symbol } <span>+${ formatAmountBought }</span></h3>
    </li>
  )
}
