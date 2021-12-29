import React from 'react'
import { useShowComponent } from '../../hooks/ShowComponent'
import { icons } from '../../utils/icons/icons_object'
import { PopUpInfo } from '../pop-ups/PopUpInfo'

export const AssetSocialNetwork = () => {

  const { showComponent, showComponent2, handleShowComponent, handleShowComponent2 } = useShowComponent()

  
  return (
    <ul className="asset__social__network mg--b">
      <li>{ icons.link_icon } bitcoin.com { icons.open_icon }</li>

      <li className="with__pop" onClick={ handleShowComponent }>
          { icons.search_icon } Explorers { icons.down_icon }
          {
            showComponent && <PopUpInfo />
          }
          
      </li>
      <li className='with__pop' onClick={handleShowComponent2}>
        { icons.person_icon } Community { icons.down_icon }
          {
            showComponent2 && <PopUpInfo />
          }
      </li>
      <li>{ icons.source_icon } Source Code { icons.open_icon }</li>
      <li>{ icons.document_icon } Whitepaper { icons.open_icon }</li>
    </ul>
  )
}
