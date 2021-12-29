import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const NftSocial = () => {
  return (
    <ul className="nft__social c95 pd">
      <li>{ icons.people_icon } 9 owners</li>
      <li>{ icons.bag_icon } 15 total</li>
      <li>{ icons.eye_icon } 1 views</li>
      <li>{ icons.heart_icon } 6 favorite</li>
      <div className="glass"></div>
    </ul>
  )
}
