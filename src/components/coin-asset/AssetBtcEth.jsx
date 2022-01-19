import React from 'react'
import { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { icons } from '../../utils/icons/icons_object'

export const AssetBtcEth = () => {
  const { data: {
    current_price_usd, 
    current_price_btc,
    current_price_eth,
    price_change_percentage_24h_in_currency_btc,
    price_change_percentage_24h_in_currency_eth,
  }
  } = useContext(DataAssetContext)
  // debugger
  return (
    <ul className="asset__btc__eth mg--b">
      {
        current_price_btc === 0 &&
      <li>{ current_price_btc } BTC <span className={`${ price_change_percentage_24h_in_currency_btc > 0 ? 'gainer--color' : 'loser--color' }`}>{ price_change_percentage_24h_in_currency_btc > 0 ? icons.up_icon : icons.down_icon } { price_change_percentage_24h_in_currency_btc }%</span></li>
      }

      <li>{ current_price_eth } ETH <span className={`${ price_change_percentage_24h_in_currency_eth > 0 ? 'gainer--color' : 'loser--color' }`}>{ price_change_percentage_24h_in_currency_eth > 0 ? icons.up_icon : icons.down_icon } { price_change_percentage_24h_in_currency_eth }%</span></li>
    </ul>
  )
}
