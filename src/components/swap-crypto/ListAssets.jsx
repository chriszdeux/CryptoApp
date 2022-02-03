import React from 'react'
import { useSelector } from 'react-redux'
import { AssetItem } from './AssetItem'
import { LoadingText } from '../loading/LoadingText'
import { ErrorConnect } from '../errors/ErrorConnect'
export const ListAssets = ({values}) => {
  const { data, handleShowComponent2 } = values

  return (
    <ul className="asset__list c100">

      {
        data.map(item => (
          <AssetItem key={ item.id } values={ {item, handleShowComponent2} } />
        ))
      }    
      </ul>
  )
}
