import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { Divider } from '../helpers/Divider'
import { BackgroundImage } from '../main/BackgroundImage'
import { ListAssets } from './ListAssets'
import image from '../../utils/vector/asset-background.svg';
import { animations_object } from '../../utils/animations/animations_object'
export const AssetList = ({ handleShowComponent }) => {
  const { intro_up, intro_right } = animations_object;
  return (
    <div className={`asset__swap c100 pd ${ intro_right }`}>
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
