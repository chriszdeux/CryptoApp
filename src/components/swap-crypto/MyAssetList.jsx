import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { Divider } from '../helpers/Divider'
import { BackgroundImage } from '../main/BackgroundImage'
import { ListAssets } from './ListAssets'
import image from '../../utils/vector/asset-background.svg';
import { animations_object } from '../../utils/animations/animations_object'
import { useSelector } from 'react-redux'
export const MyAssetList = ({ handleShowComponent }) => {
  const { intro_up, intro_right } = animations_object;
  const data = useSelector(state => state.buy_asset_reducer)
  return (
    <div className={`asset__swap c100 pd ${ intro_right }`}>
      <h2>Select Asset to Sell</h2>
      <div className="close" onClick={ handleShowComponent }>
        { icons.close_icon }
      </div>
      <form action="" className="asset__search c100">
        { icons.search_icon }
        <input type="text" className=""/>
      </form>
      <Divider />
      <ListAssets data={ data }/>
      {/* <BackgroundImage image={ image }/> */}
    </div>
  )
}
