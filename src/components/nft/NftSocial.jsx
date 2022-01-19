import React, { useContext } from 'react'
import { DataContext } from '../../context/context'
import { icons } from '../../utils/icons/icons_object'

export const NftSocial = () => {
  const { nft:{ data: {
    collections, 
    downloads,
    likes, 
    views,
    comments
  } } } = useContext(DataContext)
  return (
    <ul className="nft__social c95 pd">
      <li>{ icons.people_icon } { collections } owners</li>
      <li>{ icons.bag_icon } { downloads } total</li>
      <li>{ icons.eye_icon } { views } views</li>
      <li>{ icons.heart_icon } { likes } likes</li>
      <div className="glass"></div>
    </ul>
  )
}
