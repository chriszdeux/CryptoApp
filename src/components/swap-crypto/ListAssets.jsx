import React from 'react'
import { useSelector } from 'react-redux'
import { AssetItem } from './AssetItem'
import { LoadingText } from '../loading/LoadingText'
import { ErrorConnect } from '../errors/ErrorConnect'
export const ListAssets = () => {
  const { loading, error, data } = useSelector(state => state.data_reducer)

  return (
    <ul className="asset__list c100">

      {
        loading 
          ? <LoadingText />
          : error
            ? <ErrorConnect />
            :
              data.map(item => (
                <AssetItem key={ item.id } item={ item } />
              ))
      }    
      </ul>
  )
}
