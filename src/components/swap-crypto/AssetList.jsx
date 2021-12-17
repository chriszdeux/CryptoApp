import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { Divider } from '../helpers/Divider'
import { BackgroundImage } from '../main/BackgroundImage'
import { ListAssets } from './ListAssets'
import image from '../../utils/vector/asset-background.svg';
export const AssetList = ({ handleShowComponent }) => {
  return (
    <div className="asset__swap c100 pd">
      <h2>Select Asset to buy</h2>
      <div className="close" onClick={ handleShowComponent }>
        { icons.close_icon }
      </div>
      <form action="" className="asset__search c100">
        { icons.search_icon }
        <input type="text" className=""/>
      </form>
      <Divider />
      <ListAssets />
      {/* <BackgroundImage image={ image }/> */}
    </div>
  )
}
