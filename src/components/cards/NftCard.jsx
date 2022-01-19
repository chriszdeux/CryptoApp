import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/context'
import nft from '../../temp/nft.jpeg'
import { NftUserPrice } from './NftUserPrice'
export const NftCard = ({ values }) => {
  const {  handleNftData } = useContext(DataContext)
  const { item, index } = values
  // debugger
  return (
    <article className="nft__card" onClick={() => handleNftData(item, index)}>
      <Link to="/nft-asset">
      <figure>
        <img src={ item.regular_image } alt={ item.tags } />
      </figure>
    </Link>
      <NftUserPrice item={ item }/>
    </article>
  )
}
    

