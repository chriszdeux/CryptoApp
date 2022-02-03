import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { Divider } from '../helpers/Divider'
import { BackgroundImage } from '../main/BackgroundImage'
import { ListAssets } from './ListAssets'
import image from '../../utils/vector/asset-background.svg';
import { animations_object } from '../../utils/animations/animations_object'
import { useSelector } from 'react-redux'
import { ErrorConnect } from '../errors/ErrorConnect'
import { LoadingText } from '../loading/LoadingText'
export const AssetList = ({ values }) => {
  const { handleShowComponent2, animation2 } = values
  const { intro_up, intro_right } = animations_object;
  // debugger
  const { loading, error, data } = useSelector(state => state.data_reducer)
  return (
    <div className={`asset__swap c100 pd ${ animation2 }`}>
      {/* <h2>Select Asset to buy</h2> */}
      <div className="close" onClick={ handleShowComponent2 }>
        { icons.close_icon }
      </div>
      <form action="" className="asset__search c100">
        { icons.search_icon }
        <input type="text" className=""/>
      </form>
      <Divider />
      {
        loading 
          ? <LoadingText />
          : error
            ? <ErrorConnect />
            :
              <ListAssets values={ {data, handleShowComponent2} }/>

      }  
      {/* <BackgroundImage image={ image }/> */}
    </div>
  )
}
