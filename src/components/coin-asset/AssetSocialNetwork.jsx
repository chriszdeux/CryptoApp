import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const AssetSocialNetwork = () => {
  return (
    <ul className="asset__social__network mg--b">
      <li>{ icons.link_icon } bitcoin.com { icons.open_icon }</li>
      <li>{ icons.search_icon } Explorers { icons.down_icon }</li>
      <li>{ icons.person_icon } Community { icons.down_icon }</li>
      <li>{ icons.source_icon } Source Code { icons.open_icon }</li>
      <li>{ icons.document_icon } Whitepaper { icons.open_icon }</li>
    </ul>
  )
}
