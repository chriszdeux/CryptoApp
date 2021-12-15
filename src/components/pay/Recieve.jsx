import React from 'react';
import { icons } from '../../utils/icons/icons_object';
import shib from '../../temp/shib.png'
import { useShowComponent } from '../../hooks/ShowComponent';
import { AssetList } from '../swap-crypto/AssetList';
import { SwapBalance } from '../swap-crypto/SwapBalance';
export const Recieve = () => {
  const { showComponent, handleShowComponent } = useShowComponent();
  return (
  <>
    <div className="recieve__section c95 mg--v--3 pd">

      <figure className="qr--code">
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=www.google.com/search?q=shiba-inu&amp;size=300x300" alt="" />
      </figure>

      <div className="recieve__asset pd">
        <figure>
          <img src={ shib } alt="" />
          <h3>Asset <span>Name Asset</span></h3>
        </figure>
        <div onClick={ handleShowComponent }>
          { icons.foward_icon }
        </div>
      </div>

      <div className="recieve__address pd">
        <h3>SHIB Address <span>0xC26a4aD2eA80d7321B67848ed3C72E856705acBc</span> </h3>

        { icons.copy_icon }
      </div>
      <SwapBalance />
    </div>
      {
        showComponent && <AssetList handleShowComponent={ handleShowComponent }/>
      }
    </>
  )
}
