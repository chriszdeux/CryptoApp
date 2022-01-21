import React from 'react'
import { useSelector } from 'react-redux'
import { AssetItem } from './AssetItem'

export const ListAssets = () => {
  const { loading, error, data } = useSelector(state => state.data_reducer)

  return (
    <ul className="asset__list c100">
      {
        data.map(item => (
          <AssetItem key={ item.id } item={ item } />
        ))
      }    
      </ul>
  )
}
